'use strict';
/* global self */
// Will be set on init message
var require;
var aceVersion;
// tokenization cache per file
var documents = {};
// token type cache
var tokenTypes = new Map();
self.addEventListener('message', function (event) {
  if (event.data.init) {
    aceVersion = event.data.aceVersion;
    // Ace trips if there's no window
    self.window = self;
    self.importScripts('/public/ace/' + aceVersion + '/ace.js');
    require = self.ace.require;
    return;
  }
  var _a = event.data,
    lines = _a.lines,
    visibleRange = _a.visibleRange,
    mode = _a.mode,
    changeStartRow = _a.changeStartRow,
    documentId = _a.documentId;
  var highlightAll = event.data.highlightAll;
  var startRow = visibleRange[0],
    endRow = visibleRange[1];
  var tokenizer = getTokenizer(mode);
  if (!documents[documentId]) {
    documents[documentId] = {
      classifications: [],
      states: [],
      lastValidRow: 0,
      cleanTimeout: null,
    };
  }
  var classifications = [];
  var curDocument = documents[documentId];
  // Invalidate rows starting from the changed row
  if (changeStartRow !== null) {
    curDocument.lastValidRow = Math.min(
      curDocument.lastValidRow,
      changeStartRow
    );
    if (curDocument.classifications.length > curDocument.lastValidRow - 1) {
      curDocument.classifications.splice(curDocument.lastValidRow);
    }
    if (curDocument.states.length > curDocument.lastValidRow - 1) {
      curDocument.states.splice(curDocument.lastValidRow);
    }
  }
  clearTimeout(curDocument.cleanTimeout);
  var minRow = Math.min(startRow, curDocument.lastValidRow);
  var maxRow = endRow;
  // Make sure we highlight again if the cursor jumped
  var highlightAllAgain = false;
  if (startRow !== minRow) {
    highlightAll = true;
    highlightAllAgain = true;
  }
  for (
    var row = highlightAll ? 0 : minRow, i = 0;
    row <= maxRow && i < lines.length;
    row++, i++
  ) {
    if (curDocument.classifications[row] && !highlightAll) {
      if (row < startRow) {
        // Not in visible range
        continue;
      }
      // From cache
      classifications.push.apply(
        classifications,
        curDocument.classifications[row]
      );
      continue;
    }
    var _b = tokenizer.getLineTokens(
        lines[i],
        curDocument.states[row - 1] || 'start',
        row
      ),
      tokens = _b.tokens,
      state = _b.state;
    // Save (pushed) state so that the tokenizer can continue on the next line
    // i.e. multi-line strings or comments
    curDocument.states[row] = state;
    curDocument.lastValidRow = Math.max(row, curDocument.lastValidRow);
    var currentCol = 1;
    var rowClassifications = [];
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
      var _c = tokens_1[_i],
        type = _c.type,
        value = _c.value;
      if (type === 'text' || type === 'identifier') {
        // Both seem to be used as normal text in ace
        currentCol += value.length;
        continue;
      }
      var toks = tokenTypes.get(type);
      if (toks === undefined) {
        // Split up token types (Ace/TM grammar token classes)
        // Although the dots signify sub-state/type it's easier to just
        // handle them separately
        toks = type.split('.');
        tokenTypes.set(type, toks);
      }
      for (var _d = 0, toks_1 = toks; _d < toks_1.length; _d++) {
        var tok = toks_1[_d];
        rowClassifications.push({
          // Monaco uses non 0 based lines
          startLine: row + 1,
          endLine: row + 1,
          kind: tok,
          start: currentCol,
          end: currentCol + value.length,
        });
      }
      currentCol += value.length;
    }
    classifications.push.apply(classifications, rowClassifications);
    // cache it
    curDocument.classifications[row] = rowClassifications;
  }
  self.postMessage({
    classifications: classifications,
    highlightAllAgain: highlightAllAgain,
  });
  // Clear cache after 1 minute
  // In case file gets deleted or something
  curDocument.cleanTimeout = setTimeout(function () {
    curDocument.classifications = [];
    curDocument.states = [];
    curDocument.lastValidRow = 0;
    curDocument.cleanTimeout = null;
    highlightAllAgain = true;
  }, 60000);
});
var tokenizers = {};

function getTokenizer(mode) {
  if (tokenizers[mode] == null) {
    // Cache the tokenizer
    tokenizers[mode] = getMode(mode).getTokenizer();
  }
  return tokenizers[mode];
}

function getMode(modeId) {
  // Blocking request!
  self.importScripts('/public/ace/' + aceVersion + '/mode-' + modeId + '.js');
  // Can't do new require(`ace/mode/${modeId}`).Mode for some reason
  var Mode = require('ace/mode/' + modeId);
  return new Mode.Mode();
}

"use strict";

class PartialQuery {

  constructor(
  ) {
    this._tokens = [];
    this._insertIndex = 0;
  }

  /**
   * @public methods
   */
  reset() {
    this._tokens = [];
    this._insertIndex = 0;
  }

  incrementInsertIndex() {
    this._insertIndex = Math.min(
      this._tokens.length,
      this._insertIndex + 1
    );
  }

  updateInsertIndex(newIndex) {
    this._insertIndex = Math.min(
      this._tokens.length,
      Math.max(0, newIndex)
    );
  }

  decrementInsertIndex() {
    this._insertIndex = Math.max(0, this._insertIndex -1);
  }

  getNumTokens() {
    return this._tokens.length;
  }

  getInsertIndex() {
    return this._insertIndex;
  }

  getTokens() {
    return this._tokens.slice();
  }

  addToken(token) {
    var before = this._tokens.slice(0, this._insertIndex);
    var after = this._tokens.slice(this._insertIndex);
    before.push(token);

    this._tokens = before.concat(after);
    this.incrementInsertIndex();
    this._buildTokenLinks();
  }

  deleteToken() {
    if (!this._tokens.length) {
      return;
    }

    // If we are all the way at the beginning,
    // just delete the token to the right.
    var index = Math.max(
      0,
      this._insertIndex - 1
    );
    var before = this._tokens.slice(0, index + 1);
    var after = this._tokens.slice(index + 1);
    before.pop();

    this._tokens = before.concat(after);
    this.decrementInsertIndex();
    this._buildTokenLinks();
  }

  exportToStringQuery() {
    var exports = [];
    for (var i = 0; i < this._tokens.length; i++) {
      var curr = this._tokens[i];
      exports.push(curr.exportToQuery());
      if (i === this._tokens.length - 1) {
        // We only add spaces if we are not the last token.
        continue;
      }
      // Ugh more duck typing...
      if (!curr.shouldExportSpace || curr.shouldExportSpace()) {
        exports.push(' ');
      }
    }
    return exports.join('');
  }

  /**
   * @private methods
   */
  _buildTokenLinks() {
    for (var i = 0; i < this._tokens.length; i++) {
      var prev = this._tokens[i-1];
      var curr = this._tokens[i];
      var next = this._tokens[i+1];
      curr.setPrevious(prev);
      curr.setNext(next);
    }
  }
}

module.exports = PartialQuery;

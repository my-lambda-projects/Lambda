var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', {
        value: raw,
      });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var version = 1;
window.ace.define(
  'ace/mode/doc_comment_highlight_rules',
  ['ace/mode/text_highlight_rules'],
  function (require, exports, _module) {
    var TextHighlightRules =
      require('ace/mode/text_highlight_rules').TextHighlightRules;
    var DocCommentHighlightRules = /** @class */ (function (_super) {
      __extends(DocCommentHighlightRules, _super);

      function DocCommentHighlightRules() {
        var _this = _super.call(this) || this;
        _this.$rules = {
          start: [
            {
              token: 'comment.doc.tag',
              regex: /@\w+/,
            },
            DocCommentHighlightRules.getTagRule(),
            {
              defaultToken: 'comment.doc',
              caseInsensitive: true,
            },
          ],
        };
        return _this;
      }
      DocCommentHighlightRules.getTagRule = function (_start) {
        return {
          token: 'comment.doc.tag.storage.type',
          regex: /\b(?:TODO|FIXME|XXX|HACK)\b/,
        };
      };
      DocCommentHighlightRules.getStartRule = function (start) {
        return {
          token: 'comment.doc',
          regex: '/\\*(?=\\*)',
          next: start,
        };
      };
      DocCommentHighlightRules.getEndRule = function (start) {
        return {
          token: 'comment.doc',
          regex: '\\*/',
          next: start,
        };
      };
      return DocCommentHighlightRules;
    })(TextHighlightRules);
    exports.DocCommentHighlightRules = DocCommentHighlightRules;
  }
);
window.ace.define(
  'ace/mode/matching_brace_outdent',
  ['ace/range'],
  function (require, exports, _module) {
    var Range = require('ace/range').Range;
    var MatchingBraceOutdent = /** @class */ (function () {
      function MatchingBraceOutdent() {}
      MatchingBraceOutdent.prototype.checkOutdent = function (line, input) {
        if (!/^\s+$/.test(line)) return false;
        return /^\s*}/.test(input);
      };
      MatchingBraceOutdent.prototype.autoOutdent = function (doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*})/);
        if (!match) return 0;
        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({
          row: row,
          column: column,
        });
        if (!openBracePos || openBracePos.row === row) return 0;
        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column - 1), indent);
        return undefined;
      };
      MatchingBraceOutdent.prototype.$getIndent = function (line) {
        return line.match(/^\s*/)[0];
      };
      return MatchingBraceOutdent;
    })();
    exports.MatchingBraceOutdent = MatchingBraceOutdent;
  }
);
window.ace.define(
  'ace/mode/folding/cstyle',
  ['ace/range', 'ace/mode/folding/fold_mode'],
  function (require, exports, _module) {
    var Range = require('ace/range').Range;
    var BaseFoldMode = require('ace/mode/folding/fold_mode').FoldMode;
    var FoldMode = /** @class */ (function (_super) {
      __extends(FoldMode, _super);

      function FoldMode(commentRegex) {
        var _this = _super.call(this) || this;
        _this.foldingStartMarker = /([{[(])[^}\])]*$|^\s*(\/\*)/;
        _this.foldingStopMarker = /^[^{[(]*([}\])])|^[\s*]*(\*\/)/;
        _this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
        _this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
        _this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
        //prevent naming conflict with any modes that inherit from cstyle and override this (like csharp)
        _this._getFoldWidgetBase = BaseFoldMode.prototype.getFoldWidget;
        if (commentRegex) {
          _this.foldingStartMarker = new RegExp(
            _this.foldingStartMarker.source.replace(
              /\|[^|]*?$/,
              '|' + commentRegex.start
            )
          );
          _this.foldingStopMarker = new RegExp(
            _this.foldingStopMarker.source.replace(
              /\|[^|]*?$/,
              '|' + commentRegex.end
            )
          );
        }
        return _this;
      }
      /**
       * Gets fold widget with some non-standard extras:
       *
       * @example lineCommentRegionStart
       *      //#region [optional description]
       *
       * @example blockCommentRegionStart
       *      /*#region [optional description] *[/]
       *
       * @example tripleStarFoldingSection
       *      /*** this folds even though 1 line because it has 3 stars ***[/]
       *
       * @note the pound symbol for region tags is optional
       */
      FoldMode.prototype.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        if (this.singleLineBlockCommentRe.test(line)) {
          // No widget for single line block comment unless region or triple star
          if (
            !this.startRegionRe.test(line) &&
            !this.tripleStarBlockCommentRe.test(line)
          )
            return '';
        }
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
        if (!fw && this.startRegionRe.test(line)) return 'start'; // lineCommentRegionStart
        return fw;
      };
      FoldMode.prototype.getFoldWidgetRange = function (
        session,
        foldStyle,
        row,
        forceMultiline
      ) {
        var line = session.getLine(row);
        if (this.startRegionRe.test(line))
          return this.getCommentRegionBlock(session, line, row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
          var i = match.index;
          if (match[1])
            return this.openingBracketBlock(session, match[1], row, i);
          var range = session.getCommentFoldRange(row, i + match[0].length, 1);
          if (range && !range.isMultiLine()) {
            if (forceMultiline) {
              range = this.getSectionRange(session, row);
            } else if (foldStyle !== 'all') range = null;
          }
          return range;
        }
        if (foldStyle === 'markbegin') return undefined;
        match = line.match(this.foldingStopMarker);
        if (match) {
          var i = match.index + match[0].length;
          if (match[1])
            return this.closingBracketBlock(session, match[1], row, i);
          return session.getCommentFoldRange(row, i, -1);
        }
        return undefined;
      };
      FoldMode.prototype.getSectionRange = function (session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row++;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
          line = session.getLine(row);
          var indent = line.search(/\S/);
          if (indent === -1) continue;
          if (startIndent > indent) break;
          var subRange = this.getFoldWidgetRange(session, 'all', row);
          if (subRange) {
            if (subRange.start.row <= startRow) {
              break;
            } else if (subRange.isMultiLine()) {
              row = subRange.end.row;
            } else if (startIndent === indent) {
              break;
            }
          }
          endRow = row;
        }
        return new Range(
          startRow,
          startColumn,
          endRow,
          session.getLine(endRow).length
        );
      };
      /**
       * gets comment region block with end region assumed to be start of comment in any cstyle mode or SQL mode (--) which inherits from this.
       * There may optionally be a pound symbol before the region/endregion statement
       */
      FoldMode.prototype.getCommentRegionBlock = function (session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
          line = session.getLine(row);
          var m = re.exec(line);
          if (!m) continue;
          if (m[1]) depth--;
          else depth++;
          if (!depth) break;
        }
        var endRow = row;
        if (endRow > startRow) {
          return new Range(startRow, startColumn, endRow, line.length);
        }
        return undefined;
      };
      return FoldMode;
    })(BaseFoldMode);
    exports.FoldMode = FoldMode;
  }
);
window.ace.define(
  'ace/mode/replit-js-v' + version + '_highlight_rules',
  [
    'require',
    'exports',
    'module',
    'ace/mode/text_highlight_rules',
    'ace/mode/doc_comment_highlight_rules',
  ],
  function (require, exports, _module) {
    var DocCommentHighlightRules =
      require('ace/mode/doc_comment_highlight_rules').DocCommentHighlightRules;
    var TextHighlightRules =
      require('ace/mode/text_highlight_rules').TextHighlightRules;
    var kwlist = function (_a) {
      var kw = _a[0];
      return kw.trim().replace(/\s+/gm, '|');
    };
    var ident = '[a-zA-Z$_\\u00a1-\\uffff][a-zA-Z\\d$_\\u00a1-\\uffff]*';
    var JSHighlightRules = /** @class */ (function (_super) {
      __extends(JSHighlightRules, _super);

      function JSHighlightRules(options) {
        var _this = _super.call(this) || this;
        var keywordMapper = _this.createKeywordMapper(
          {
            'variable.language': 'arguments|prototype|window|document|exports',
            keyword: kwlist(
              __makeTemplateObject(
                [
                  '\n              const yield import from as get set async await\n              break case catch continue default delete do else finally for function\n              if in of instanceof new return switch throw try typeof let var while with\n              debugger class extends super export static constructor void yield\n              \n              enum implements private public interface package protected\n            ',
                ],
                [
                  '\n              const yield import from as get set async await\n              break case catch continue default delete do else finally for function\n              if in of instanceof new return switch throw try typeof let var while with\n              debugger class extends super export static constructor void yield\n              \n              enum implements private public interface package protected\n            ',
                ]
              )
            ),
            'constant.language': 'null|Infinity|NaN|undefined|this|globalThis',
            'support.function': kwlist(
              __makeTemplateObject(
                [
                  '\n              alert escape unescape isNaN parseFloat parseInt decodeURI decodeURIComponent\n              encodeURI encodeURIComponent eval isFinite require\n            ',
                ],
                [
                  '\n              alert escape unescape isNaN parseFloat parseInt decodeURI decodeURIComponent\n              encodeURI encodeURIComponent eval isFinite require\n            ',
                ]
              )
            ),
            'constant.language.boolean': 'true|false',
          },
          'identifier'
        );
        // keywords which can be followed by regular expressions
        var kwBeforeRe = kwlist(
          __makeTemplateObject(
            [
              '\n          await case delete do else finally in instanceof of return throw try typeof\n          yield void\n        ',
            ],
            [
              '\n          await case delete do else finally in instanceof of return throw try typeof\n          yield void\n        ',
            ]
          )
        );
        var escapedRe =
          '\\\\(?:x[0-9a-fA-F]{2}|' + // hex
          'u[0-9a-fA-F]{4}|' + // unicode
          'u{[0-9a-fA-F]{1,6}}|' + // es6 unicode
          '[0-2][0-7]{0,2}|' + // oct
          '3[0-7][0-7]?|' + // oct
          '[4-7][0-7]?|' + //oct
          '.)';
        var digits = '(?:\\d(?:_?\\d+)*)';
        var nextIsArrowFn = '(?=[^()]*?\\)\\s*=>)';
        _this.$rules = {
          no_regex: [
            DocCommentHighlightRules.getStartRule('doc-start'),
            comments('no_regex'),
            {
              token: 'string',
              regex: /'(?=.)/,
              next: 'qstring',
            },
            {
              token: 'string',
              regex: /"(?=.)/,
              next: 'qqstring',
            },
            {
              regex: /[{}]/,
              onMatch: function (val, state, stack) {
                this.next = val === '{' ? this.nextState : '';
                if (val === '{' && stack.length) {
                  stack.unshift('start', state);
                } else if (val === '}' && stack.length) {
                  stack.shift();
                  this.next = stack.shift();
                  if (
                    this.next.indexOf('string') !== -1 ||
                    this.next.indexOf('jsx') !== -1
                  )
                    return 'paren.quasi.end';
                }
                return val === '{' ? 'paren.lparen' : 'paren.rparen';
              },
              nextState: 'start',
            },
            {
              token: 'string.quasi.start',
              regex: /`/,
              push: [
                {
                  token: 'constant.language.escape',
                  regex: escapedRe,
                },
                {
                  token: 'paren.quasi.start',
                  regex: /\${/,
                  push: 'start',
                },
                {
                  token: 'string.quasi.end',
                  regex: /`/,
                  next: 'pop',
                },
                {
                  defaultToken: 'string.quasi',
                },
              ],
            },
            {
              token: 'constant.numeric',
              regex:
                /0(?:[xX][0-9a-fA-F](?:_?[0-9a-fA-F]+)*|[oO][0-7](?:_?[0-7]+)*|[bB][01](?:_?[01]+)*)n?\b/,
            },
            {
              token: 'constant.numeric',
              regex: digits + 'n\\b',
            },
            {
              token: 'constant.numeric',
              regex:
                '(?:' +
                digits +
                '(?:\\.' +
                digits +
                '?)?|\\.' +
                digits +
                ')(?:[eE][+-]?' +
                digits +
                '\\b)?',
            },
            {
              // arg => {...}
              token: [
                'variable.parameter',
                'text',
                'storage.type.arrow-operator',
              ],
              regex: '(' + ident + ')(\\s*)(=>)',
            },
            {
              // lazy/hacky thing to support class/object functions
              token: ['text', 'support.function', 'white', 'paren.lparen'],
              regex:
                '^(\\s*)(?!(?:if|while|function|for|switch|catch|constructor)\\b)(#?' +
                ident +
                ')(\\s*)(\\()(?=[^()]*\\)\\s*{)',
              next: 'function_arguments',
            },
            {
              // this.prototype.play = function(...) {...}
              token: [
                'constant.language',
                'punctuation.operator',
                'variable.language',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'paren.lparen',
              ],
              regex:
                '(this)(\\.)(prototype)(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // Sound.prototype.play = function(...) {...}
              token: [
                'storage.type',
                'punctuation.operator',
                'variable.language',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'paren.lparen',
              ],
              regex:
                '(' +
                ident +
                ')(\\.)(prototype)(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // this.play = function() {...}
              token: [
                'constant.language',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'paren.lparen',
              ],
              regex:
                '(this)(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // this.play = arg => {...}
              token: [
                'constant.language',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'variable.parameter',
                'text',
                'storage.type.arrow-operator',
              ],
              regex:
                '(this)(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(' +
                ident +
                ')(\\s*)(=>)',
            },
            {
              // this.play = (...) => {...}
              token: [
                'constant.language',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'paren.lparen',
              ],
              regex:
                '(this)(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(\\()' +
                nextIsArrowFn,
              next: 'function_arguments',
            },
            {
              // Sound.play = function() {...}
              token: [
                'storage.type',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'paren.lparen',
              ],
              regex:
                '(' +
                ident +
                ')(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // Sound.play = arg => {...}
              token: [
                'storage.type',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'variable.parameter',
                'text',
                'storage.type.arrow-operator',
              ],
              regex:
                '(' +
                ident +
                ')(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(' +
                ident +
                ')(\\s*)(=>)',
            },
            {
              // Sound.play = (...) => {...}
              token: [
                'storage.type',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'paren.lparen',
              ],
              regex:
                '(' +
                ident +
                ')(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(\\()' +
                nextIsArrowFn,
              next: 'function_arguments',
            },
            {
              // play = function() {...}
              token: [
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'paren.lparen',
              ],
              regex: '(' + ident + ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // play = arg => {...}
              token: [
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'variable.parameter',
                'text',
                'storage.type.arrow-operator',
              ],
              regex: '(' + ident + ')(\\s*)(=)(\\s*)(' + ident + ')(\\s*)(=>)',
            },
            {
              // play = (...) => {...}
              token: [
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'paren.lparen',
              ],
              regex: '(' + ident + ')(\\s*)(=)(\\s*)(\\()' + nextIsArrowFn,
              next: 'function_arguments',
            },
            {
              // this.play = function play() {...}
              token: [
                'constant.language',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'entity.name.function',
                'text',
                'paren.lparen',
              ],
              regex:
                '(this)(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // Sound.play = function play() {...}
              token: [
                'storage.type',
                'punctuation.operator',
                'support.function',
                'text',
                'keyword.operator',
                'text',
                'keyword',
                'text',
                'entity.name.function',
                'text',
                'paren.lparen',
              ],
              regex:
                '(' +
                ident +
                ')(\\.)(' +
                ident +
                ')(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // function myFunc(...) {...} or get myAttr() {...} or set myAttr(value) {...} of static myFunc(...) {...}
              token: [
                'keyword',
                'text',
                'support.function',
                'text',
                'paren.lparen',
              ],
              regex:
                '\\b(function|get|set|static)(\\s+)(#?' +
                ident +
                ')(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // foobar: function() {...}
              token: [
                'support.function',
                'text',
                'punctuation.operator',
                'text',
                'keyword',
                'text',
                'paren.lparen',
              ],
              regex: '(' + ident + ')(\\s*)(:)(\\s*)(function)(\\s*)(\\()',
              next: 'function_arguments',
            },
            {
              // foobar: arg => {...}
              token: [
                'support.function',
                'text',
                'punctuation.operator',
                'text',
                'variable.parameter',
                'text',
                'storage.type.arrow-operator',
              ],
              regex: '(' + ident + ')(\\s*)(:)(\\s*)(' + ident + ')(\\s*)(=>)',
            },
            {
              // foobar: (...) => {...}
              token: [
                'support.function',
                'text',
                'punctuation.operator',
                'text',
                'paren.lparen',
              ],
              regex: '(' + ident + ')(\\s*)(:)(\\s*)(\\()' + nextIsArrowFn,
              next: 'function_arguments',
            },
            /*{
                      // : function() { } (this is for issues with 'foo': function() { })
                      token: ['text', 'text', 'keyword', 'text', 'paren.lparen'],
                      regex: /(:)(\s*)(function)(\s*)(\()/,
                      next: 'function_arguments',
                    },*/
            {
              // function() {...} or constructor() {...}
              token: ['keyword', 'text', 'paren.lparen'],
              regex: /\b(function|constructor)(\s*)(\()/,
              next: 'function_arguments',
            },
            {
              // from "module-path" (this is the only case where 'from' should be a keyword)
              token: 'keyword',
              regex: /from(?=\s*['"`])/,
            },
            {
              token: [
                'keyword.control',
                'text',
                'paren.lparen',
                'text',
                'variable',
                'text',
                'paren.rparen',
              ],
              regex: '\\b(catch)(\\s*)(\\()(\\s*)(' + ident + ')(\\s*)(\\))',
            },
            {
              token: 'keyword',
              regex: '(?:' + kwBeforeRe + ')\\b',
              next: 'start',
            },
            {
              token: 'storage.type',
              regex: /\b(?:I(?!nfinity\b)|N(?!aN\b)|[A-HJ-MO-Z])[\w$]*\b/,
            },
            {
              token: keywordMapper,
              regex: ident,
            },
            {
              token: 'punctuation.operator',
              regex: /\??\.(?!\.)/,
              next: 'property',
            },
            {
              token: 'storage.type.arrow-operator',
              regex: /=>/,
              next: 'start',
            },
            {
              token: 'keyword.operator',
              regex:
                /--|\+\+|\*\*|\.{3}|===|==|=|!=|!==|<{1,2}=?|>{1,3}=?|!|&&|\|\||\?[.?]?|[:~]|[!%&*+\-/^]=?|\.\.\./,
              next: 'start',
            },
            {
              token: 'punctuation.operator',
              regex: /[?:,;.]/,
              next: 'start',
            },
            {
              token: 'paren.lparen',
              regex: /\((?=[^()]+?\)\s*=>)/,
              next: 'function_arguments',
            },
            {
              token: 'paren.lparen',
              regex: /[[({]/,
              next: 'start',
            },
            {
              token: 'paren.rparen',
              regex: /[\])}]/,
            },
            {
              token: 'comment',
              regex: /^#!.*$/,
            },
          ],
          property: [
            {
              token: 'punctuation.operator',
              regex: /\??\.(?!\.)/,
            },
            {
              token: 'storage.type',
              regex: /[A-Z][\w$]*/,
            },
            {
              token: 'support.function',
              regex: ident + '(?=\\s*\\()',
            },
            {
              token: 'variable',
              regex: ident,
            },
            {
              regex: '',
              token: 'empty',
              next: 'no_regex',
            },
          ],
          // regular expressions are only allowed after certain tokens. This
          // makes sure we don't mix up regexps with the divison operator
          start: [
            DocCommentHighlightRules.getStartRule('doc-start'),
            comments('start'),
            {
              token: 'string.regexp',
              regex: /\//,
              next: 'regex',
            },
            {
              // lazy/hacky thing to support class/object functions
              token: ['text', 'support.function', 'white', 'paren.lparen'],
              regex:
                '^(\\s*)(?!(?:if|while|function|for|switch|catch|constructor)\\b)(#?' +
                ident +
                ')(\\s*)(\\()(?=[^()]*\\)\\s*\\{)',
              next: 'function_arguments',
            },
            {
              token: 'text',
              regex: /\s+|^$/,
              next: 'start',
            },
            {
              // immediately return to the start mode without matching
              // anything
              token: 'empty',
              regex: '',
              next: 'no_regex',
            },
          ],
          regexp_special_escapes: [
            {
              // \xhh
              token: ['regexp.keyword', 'constant.numeric'],
              regex: /(\\x)([\da-fA-F]{2})/,
            },
            {
              // \uhhhh
              token: ['regexp.keyword', 'constant.numeric'],
              regex: /(\\u)([\da-fA-F]{4})/,
            },
            {
              // \u{hhhh}, \u{hhhhh}
              token: ['regexp.keyword', 'constant.numeric', 'regexp.keyword'],
              regex: /(\\u{)([\da-fA-F]{4,5})(})/,
            },
            {
              // \cX
              token: ['regexp.keyword.operator', 'regexp.escape.character'],
              regex: /(\\c)([A-Z])/,
            },
            {
              // \p{Name}, \P{Name}
              token: ['regexp.keyword', 'regexp.string', 'regexp.keyword'],
              regex: /(\\[pP]{)([a-zA-Z_]\w*)(})/,
            },
            {
              // \p{Name=Value}, \P{Name=Value}
              token: [
                'regexp.keyword',
                'regexp.string',
                'regexp.operator',
                'regexp.string',
                'regexp.keyword',
              ],
              regex: /(\\[pP]{)([a-zA-Z_]\w*)(=)([a-zA-Z_]\w*)(})/,
            },
          ],
          regex: [
            {
              // back-references
              token: 'variable',
              regex: /\\[1-9]\d*/,
            },
            {
              // named back-references
              token: [
                'regexp.keyword',
                'string.regexp',
                'variable',
                'string.regexp',
              ],
              regex: '(\\\\k)(<)(' + ident + ')(>)',
            },
            {
              include: 'regexp_special_escapes',
            },
            {
              // normal escapes
              token: 'regexp.keyword',
              regex: /\\([$^*()+{}[\]|\\.?/wWdDsSbBrtfvn])/,
            },
            {
              // redundant escapes
              token: 'string.regexp',
              regex: /\\./,
            },
            {
              // flag
              token: 'string.regexp',
              regex: /\/[gimsuy]*/,
              next: 'no_regex',
            },
            {
              // invalid operators
              token: 'invalid',
              regex: /{\d+\b,?\d*}[+*]|[+*$^?][+*]|[$^]\?|\?{3,}/,
            },
            {
              // named captures
              token: ['string', 'string.regexp', 'variable', 'string.regexp'],
              regex: '(\\()(\\?<)(' + ident + ')(>)',
            },
            {
              // {n,m}, {n,}, {n}
              token: [
                'function',
                'constant.numeric',
                'string',
                'constant.numeric',
                'function',
              ],
              regex: /({)(\d+)(,?)(\d*)(})/,
            },
            {
              // (...)
              token: 'string',
              regex: /\((?:\?(?:<?[=!]|:))?|\)/,
            },
            {
              // operators
              token: 'function',
              regex: /[+*?]\??/,
            },
            {
              token: 'constant.language',
              regex: /[$^.]/,
            },
            {
              token: 'delimiter',
              regex: /\|\|?/,
            },
            {
              token: ['string', 'regexp.keyword', 'string.regexp'],
              regex: /(\[)(\^?)(-?)/,
              next: 'regex_character_class',
            },
            {
              token: 'empty',
              regex: /$/,
              next: 'no_regex',
            },
            {
              defaultToken: 'string.regexp',
            },
          ],
          regex_character_class: [
            {
              include: 'regexp_special_escapes',
            },
            {
              // normal escapes
              token: 'regexp.keyword',
              regex: /\\([\^\-[\]\\./wWdDsSbBrtfvn])/,
            },
            {
              // redundant escapes
              token: 'string.regexp.characterclass',
              regex: /\\./,
            },
            {
              token: 'string',
              regex: /]/,
              next: 'regex',
            },
            {
              token: 'regexp.keyword',
              regex: /-(?!\])/,
            },
            {
              token: 'empty',
              regex: /$/,
              next: 'no_regex',
            },
            {
              defaultToken: 'string.regexp.characterclass',
            },
          ],
          function_arguments: [
            {
              // [...] destructuring
              token: 'paren.lparen',
              regex: /\[/,
              push: [
                {
                  token: 'paren.rparen',
                  regex: /\]/,
                  next: 'pop',
                },
                {
                  include: 'function_arguments',
                },
              ],
            },
            {
              // {...} destructuring
              token: 'paren.lparen',
              regex: /{/,
              push: [
                {
                  token: ['variable', 'white', 'keyword.operator'],
                  regex: '(' + ident + ')(\\s*)(:)',
                },
                {
                  token: 'paren.rparen',
                  regex: /}/,
                  next: 'pop',
                },
                {
                  include: 'function_arguments',
                },
              ],
            },
            {
              token: 'variable.parameter',
              regex: ident,
            },
            {
              token: 'punctuation.operator',
              regex: /[,\s]+/,
            },
            {
              token: 'punctuation.operator',
              regex: /$/,
            },
            {
              token: 'empty',
              regex: '',
              next: 'no_regex',
            },
          ],
          qqstring: [
            {
              token: 'constant.language.escape',
              regex: escapedRe,
            },
            {
              token: 'string',
              regex: /\\$/,
              consumeLineEnd: true,
            },
            {
              token: 'string',
              regex: /"|$/,
              next: 'no_regex',
            },
            {
              defaultToken: 'string',
            },
          ],
          qstring: [
            {
              token: 'constant.language.escape',
              regex: escapedRe,
            },
            {
              token: 'string',
              regex: /\\$/,
              consumeLineEnd: true,
            },
            {
              token: 'string',
              regex: /'|$/,
              next: 'no_regex',
            },
            {
              defaultToken: 'string',
            },
          ],
        };
        if (!options || options.jsx !== false) JSX.call(_this);
        _this.embedRules(DocCommentHighlightRules, 'doc-', [
          DocCommentHighlightRules.getEndRule('no_regex'),
        ]);
        _this.normalizeRules();
        return _this;
      }
      return JSHighlightRules;
    })(TextHighlightRules);
    // Could convert this to a subclass but meh
    function JSX() {
      var tagRegex = ident.replace('\\d', '\\d\\-');
      var jsxTag = {
        onMatch: function (val, state, stack) {
          var offset = val.charAt(1) === '/' ? 2 : 1;
          if (offset === 1) {
            if (state !== this.nextState)
              stack.unshift(this.next, this.nextState, 0);
            else stack.unshift(this.next);
            stack[2]++;
          } else if (offset === 2) {
            if (state === this.nextState) {
              stack[1]--;
              if (!stack[1] || stack[1] < 0) {
                stack.shift();
                stack.shift();
              }
            }
          }
          return [
            {
              type:
                'meta.tag.punctuation.' +
                (offset === 1 ? '' : 'end-') +
                'tag-open.xml',
              value: val.slice(0, offset),
            },
            {
              type: 'meta.tag.tag-name.xml',
              value: val.substr(offset),
            },
          ];
        },
        regex: '</?' + tagRegex,
        next: 'jsxAttributes',
        nextState: 'jsx',
      };
      this.$rules.start.unshift(jsxTag);
      var jsxJsRule = {
        regex: /{/,
        token: 'paren.quasi.start',
        push: 'start',
      };
      this.$rules.jsx = [
        jsxJsRule,
        jsxTag,
        {
          include: 'reference',
        },
        {
          defaultToken: 'string',
        },
      ];
      this.$rules.jsxAttributes = [
        {
          token: 'meta.tag.punctuation.tag-close.xml',
          regex: '/?>',
          onMatch: function (value, currentState, stack) {
            if (currentState === stack[0]) stack.shift();
            if (value.length === 2) {
              if (stack[0] === this.nextState) stack[1]--;
              if (!stack[1] || stack[1] < 0) {
                stack.splice(0, 2);
              }
            }
            this.next = stack[0] || 'start';
            return [
              {
                type: this.token,
                value: value,
              },
            ];
          },
          nextState: 'jsx',
        },
        jsxJsRule,
        comments('jsxAttributes'),
        {
          token: 'entity.other.attribute-name.xml',
          regex: tagRegex,
        },
        {
          token: 'keyword.operator.attribute-equals.xml',
          regex: /=/,
        },
        {
          token: 'text.tag-whitespace.xml',
          regex: /\s+/,
        },
        {
          token: 'string.attribute-value.xml',
          regex: /'/,
          stateName: 'jsx_attr_q',
          push: [
            {
              token: 'string.attribute-value.xml',
              regex: /'/,
              next: 'pop',
            },
            {
              include: 'reference',
            },
            {
              defaultToken: 'string.attribute-value.xml',
            },
          ],
        },
        {
          token: 'string.attribute-value.xml',
          regex: /"/,
          stateName: 'jsx_attr_qq',
          push: [
            {
              token: 'string.attribute-value.xml',
              regex: /"/,
              next: 'pop',
            },
            {
              include: 'reference',
            },
            {
              defaultToken: 'string.attribute-value.xml',
            },
          ],
        },
        jsxTag,
      ];
      this.$rules.reference = [
        {
          token: 'constant.language.escape.reference.xml',
          regex: /(?:&#\d+;)|(?:&#x[\da-fA-F]+;)|(?:&[\w:.-]+;)/,
        },
      ];
    }

    function comments(next) {
      return [
        {
          token: 'comment',
          regex: '/\\*',
          next: [
            DocCommentHighlightRules.getTagRule(),
            {
              token: 'comment',
              regex: '\\*/',
              next: next || 'pop',
            },
            {
              defaultToken: 'comment',
              caseInsensitive: true,
            },
          ],
        },
        {
          token: 'comment',
          regex: '//',
          next: [
            DocCommentHighlightRules.getTagRule(),
            {
              token: 'comment',
              regex: /$|^/,
              next: next || 'pop',
            },
            {
              defaultToken: 'comment',
              caseInsensitive: true,
            },
          ],
        },
      ];
    }
    exports.JSHighlightRules = JSHighlightRules;
  }
);
window.ace.define(
  'ace/mode/replit-js-v' + version,
  [
    'require',
    'exports',
    'module',
    'ace/mode/replit-js-v' + version + '_highlight_rules',
    'ace/mode/matching_brace_outdent',
  ],
  function (require, exports, _module) {
    var TextMode = require('ace/mode/text').Mode;
    var JSHighlightRules = require('ace/mode/replit-js-v' +
      version +
      '_highlight_rules').JSHighlightRules;
    var MatchingBraceOutdent =
      require('ace/mode/matching_brace_outdent').MatchingBraceOutdent;
    //const WorkerClient = require("ace/mode/worker/worker_client").WorkerClient;
    var CstyleBehaviour = require('ace/mode/behaviour/cstyle').CstyleBehaviour;
    var CStyleFoldMode = require('ace/mode/folding/cstyle').FoldMode;
    var Mode = /** @class */ (function (_super) {
      __extends(Mode, _super);

      function Mode() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.HighlightRules = JSHighlightRules;
        _this.$outdent = new MatchingBraceOutdent();
        _this.$behaviour = new CstyleBehaviour();
        _this.foldingRules = new CStyleFoldMode();
        _this.lineCommentStart = '//';
        _this.blockComment = {
          start: '/*',
          end: '*/',
        };
        _this.$quotes = {
          '"': '"',
          "'": "'",
          '`': '`',
        };
        _this.$id = 'ace/mode/replit-js-v' + version;
        _this.snippetFileId = 'ace/snippets/javascript';
        return _this;
        /* Disabled for now
            createWorker(session) {
              const worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
              worker.attachToDocument(session.getDocument());
      
              worker.on("annotate", (results) => {
                session.setAnnotations(results.data);
              });
      
              worker.on("terminate", () => {
                session.clearAnnotations();
              });
      
              return worker;
            };*/
      }
      Mode.prototype.getNextLineIndent = function (state, line, tab) {
        var indent = this.$getIndent(line);
        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;
        if (tokens.length && tokens[tokens.length - 1].type === 'comment') {
          return indent;
        }
        if (state === 'start' || state === 'no_regex') {
          var match = line.match(/^.*(?:\bcase\b.*:|[([{])\s*$/);
          if (match) {
            indent += tab;
          }
        } else if (state === 'doc-start') {
          if (endState === 'start' || endState === 'no_regex') {
            return '';
          }
          var match = line.match(/^\s*(\/?)\*/);
          if (match) {
            if (match[1]) {
              indent += ' ';
            }
            indent += '* ';
          }
        }
        return indent;
      };
      Mode.prototype.checkOutdent = function (_state, line, input) {
        return this.$outdent.checkOutdent(line, input);
      };
      Mode.prototype.autoOutdent = function (_state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
      };
      return Mode;
    })(TextMode);
    exports.Mode = Mode;
  }
);
window.ace.require(['ace/mode/replit-js-v' + version], function (m) {
  if (typeof module === 'object' && typeof exports === 'object' && module) {
    module.exports = m;
  }
});

(this.csbJsonP = this.csbJsonP || []).push([
  ['default~app~embed~sandbox'],
  {
    '../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js':
      function (e, t) {
        e.exports = BrowserFS.BFSRequire('fs');
      },
    '../codesandbox-api/dist/codesandbox.es5.js': function (e, t, n) {
      'use strict';
      n.r(t),
        function (e) {
          n.d(t, 'Protocol', function () {
            return u;
          }),
            n.d(t, 'transformError', function () {
              return s;
            }),
            n.d(t, 'clearErrorTransformers', function () {
              return r;
            }),
            n.d(t, 'registerErrorTransformer', function () {
              return i;
            }),
            n.d(t, 'actions', function () {
              return h;
            }),
            n.d(t, 'isStandalone', function () {
              return x;
            }),
            n.d(t, 'iframeHandshake', function () {
              return v;
            }),
            n.d(t, 'resetState', function () {
              return D;
            }),
            n.d(t, 'dispatch', function () {
              return P;
            }),
            n.d(t, 'listen', function () {
              return R;
            }),
            n.d(t, 'notifyListeners', function () {
              return E;
            }),
            n.d(t, 'registerFrame', function () {
              return A;
            }),
            n.d(t, 'reattach', function () {
              return C;
            });
          var o = [];

          function s(e, t, n) {
            return o
              .map(function (o) {
                return o(e, t, n);
              })
              .filter(function (e) {
                return null != e;
              })[0];
          }

          function r() {
            o.length = 0;
          }

          function i(e) {
            o.push(e);
          }
          var a = function (e, t, n, o) {
              return new (n || (n = Promise))(function (s, r) {
                function i(e) {
                  try {
                    l(o.next(e));
                  } catch (t) {
                    r(t);
                  }
                }

                function a(e) {
                  try {
                    l(o.throw(e));
                  } catch (t) {
                    r(t);
                  }
                }

                function l(e) {
                  var t;
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(i, a);
                }
                l((o = o.apply(e, t || [])).next());
              });
            },
            l = function (e, t) {
              var n,
                o,
                s,
                r,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (r = {
                  next: a(0),
                  throw: a(1),
                  return: a(2),
                }),
                'function' === typeof Symbol &&
                  (r[Symbol.iterator] = function () {
                    return this;
                  }),
                r
              );

              function a(r) {
                return function (a) {
                  return (function (r) {
                    if (n)
                      throw new TypeError('Generator is already executing.');
                    for (; i; )
                      try {
                        if (
                          ((n = 1),
                          o &&
                            (s =
                              2 & r[0]
                                ? o.return
                                : r[0]
                                ? o.throw || ((s = o.return) && s.call(o), 0)
                                : o.next) &&
                            !(s = s.call(o, r[1])).done)
                        )
                          return s;
                        switch (
                          ((o = 0), s && (r = [2 & r[0], s.value]), r[0])
                        ) {
                          case 0:
                          case 1:
                            s = r;
                            break;
                          case 4:
                            return (
                              i.label++,
                              {
                                value: r[1],
                                done: !1,
                              }
                            );
                          case 5:
                            i.label++, (o = r[1]), (r = [0]);
                            continue;
                          case 7:
                            (r = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !(s =
                                (s = i.trys).length > 0 && s[s.length - 1]) &&
                              (6 === r[0] || 2 === r[0])
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === r[0] &&
                              (!s || (r[1] > s[0] && r[1] < s[3]))
                            ) {
                              i.label = r[1];
                              break;
                            }
                            if (6 === r[0] && i.label < s[1]) {
                              (i.label = s[1]), (s = r);
                              break;
                            }
                            if (s && i.label < s[2]) {
                              (i.label = s[2]), i.ops.push(r);
                              break;
                            }
                            s[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        r = t.call(e, i);
                      } catch (a) {
                        (r = [6, a]), (o = 0);
                      } finally {
                        n = s = 0;
                      }
                    if (5 & r[0]) throw r[1];
                    return {
                      value: r[0] ? r[1] : void 0,
                      done: !0,
                    };
                  })([r, a]);
                };
              }
            },
            c = function () {
              return Math.floor(1e6 * Math.random() + 1e6 * Math.random());
            },
            u = (function () {
              function e(e, t, n) {
                var o = this;
                (this.type = e),
                  (this.handleMessage = t),
                  (this.target = n),
                  (this.outgoingMessages = new Set()),
                  (this._messageListener = function (e) {
                    return a(o, void 0, void 0, function () {
                      var t, n, o;
                      return l(this, function (s) {
                        switch (s.label) {
                          case 0:
                            return (t = e.data).$type !== this.getTypeId() ||
                              this.outgoingMessages.has(t.$id)
                              ? [2]
                              : [4, this.handleMessage(t.$data)];
                          case 1:
                            return (
                              (n = s.sent()),
                              (o = {
                                $originId: this.internalId,
                                $type: this.getTypeId(),
                                $data: n,
                                $id: t.$id,
                              }),
                              e.source
                                ? e.source.postMessage(o, '*')
                                : this._postMessage(o),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                  this.createConnection(),
                  (this.internalId = c()),
                  (this.isWorker =
                    'Worker' ===
                    (function (e) {
                      try {
                        return e.constructor.name;
                      } catch (t) {
                        return '';
                      }
                    })(n));
              }
              return (
                (e.prototype.getTypeId = function () {
                  return 'p-' + this.type;
                }),
                (e.prototype.createConnection = function () {
                  self.addEventListener('message', this._messageListener);
                }),
                (e.prototype.dispose = function () {
                  self.removeEventListener('message', this._messageListener);
                }),
                (e.prototype.sendMessage = function (e) {
                  var t = this;
                  return new Promise(function (n) {
                    var o = c(),
                      s = {
                        $originId: t.internalId,
                        $type: t.getTypeId(),
                        $data: e,
                        $id: o,
                      };
                    t.outgoingMessages.add(o);
                    var r = function (e) {
                      var s = e.data;
                      s.$type === t.getTypeId() &&
                        s.$id === o &&
                        s.$originId !== t.internalId &&
                        (n(s.$data), self.removeEventListener('message', r));
                    };
                    self.addEventListener('message', r), t._postMessage(s);
                  });
                }),
                (e.prototype._postMessage = function (e) {
                  this.isWorker ||
                  ('undefined' !== typeof DedicatedWorkerGlobalScope &&
                    this.target instanceof DedicatedWorkerGlobalScope)
                    ? this.target.postMessage(e)
                    : this.target.postMessage(e, '*');
                }),
                e
              );
            })();
          var d = Object.freeze({
            show: function (e, t, n) {
              return (
                void 0 === t && (t = 'notice'),
                void 0 === n && (n = 2),
                {
                  type: 'action',
                  action: 'notification',
                  title: e,
                  notificationType: t,
                  timeAlive: n,
                }
              );
            },
          });
          var p = Object.freeze({
            openModule: function (e, t, n) {
              return {
                type: 'action',
                action: 'editor.open-module',
                path: e,
                lineNumber: t,
                column: n,
              };
            },
          });
          var m = Object.freeze({
              add: function (e) {
                return {
                  type: 'action',
                  action: 'source.dependencies.add',
                  dependency: e,
                };
              },
            }),
            f = Object.freeze({
              rename: function (e, t) {
                return {
                  type: 'action',
                  action: 'source.module.rename',
                  path: e,
                  title: t,
                };
              },
            });
          var h = {
              notifications: d,
              editor: p,
              source: Object.freeze({
                dependencies: m,
                modules: f,
              }),
              error: Object.freeze({
                show: function (e, t, n) {
                  var o = n.line,
                    s = n.column,
                    r = n.lineEnd,
                    i = n.columnEnd;
                  return {
                    title: e,
                    message: t,
                    line: o,
                    column: s,
                    path: n.path,
                    payload: n.payload,
                    lineEnd: r,
                    columnEnd: i,
                    severity: 'error',
                    type: 'action',
                    action: 'show-error',
                    source: n.source || 'browser',
                  };
                },
                clear: function (e, t) {
                  return {
                    type: 'action',
                    action: 'clear-errors',
                    path: e,
                    source: t,
                  };
                },
              }),
              correction: Object.freeze({
                show: function (e, t) {
                  var n =
                      void 0 === t
                        ? {
                            path: '',
                            severity: 'warning',
                            source: '',
                          }
                        : t,
                    o = n.line,
                    s = n.column,
                    r = n.lineEnd,
                    i = n.columnEnd,
                    a = n.path,
                    l = n.payload,
                    c = n.severity,
                    u = void 0 === c ? 'warning' : c,
                    d = n.source;
                  return {
                    message: e,
                    line: o,
                    column: s,
                    lineEnd: r,
                    columnEnd: i,
                    path: a,
                    payload: l,
                    severity: u,
                    source: void 0 === d ? '' : d,
                    type: 'action',
                    action: 'show-correction',
                  };
                },
                clear: function (e, t) {
                  return {
                    type: 'action',
                    action: 'clear-corrections',
                    path: e,
                    source: t,
                  };
                },
              }),
              glyph: Object.freeze({
                show: function (e) {
                  return {
                    line: e.line,
                    path: e.path,
                    className: e.className,
                    type: 'action',
                    action: 'show-glyph',
                  };
                },
              }),
            },
            b =
              ('undefined' !== typeof e && 'https://codesandbox.io') ||
              'https://codesandbox.io',
            g = function () {
              return (g =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var s in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, s) &&
                        (e[s] = t[s]);
                  return e;
                }).apply(this, arguments);
            },
            j = new Map();
          var y,
            x =
              'undefined' === typeof window ||
              !!(
                window.location &&
                window.location.href.indexOf('?standalone') > -1
              ) ||
              (!window.opener && window.parent === window) ||
              !!(window.location && window.location.href.indexOf(b) > -1),
            _ = !1,
            v = new Promise(function (e) {
              y = e;
            }),
            w = null,
            O = null,
            S = function (e) {
              var t;
              'register-frame' !== e.data.type ||
                O ||
                ((w = e.data.origin),
                (O = null !== (t = e.data.id) && void 0 !== t ? t : null),
                _ || (y(), (_ = !0)),
                self.removeEventListener('message', S));
            };

          function D() {
            (w = null), j.clear();
          }

          function P(e) {
            if (e) {
              var t = g(g({}, e), {
                codesandbox: !0,
              });
              null !== O && (t.$id = O),
                E(t),
                (function (e) {
                  var t = JSON.parse(JSON.stringify(e));
                  j.forEach(function (e, n) {
                    n &&
                      n.postMessage &&
                      n.postMessage(
                        g(g({}, t), {
                          codesandbox: !0,
                        }),
                        e
                      );
                  });
                })(t),
                x ||
                  (null === w && 'initialized' !== e.type) ||
                  (window.opener
                    ? window.opener.postMessage(t, null === w ? '*' : w)
                    : window.parent.postMessage(t, null === w ? '*' : w));
            }
          }
          'undefined' !== typeof window && self.addEventListener('message', S);
          var M = {},
            k = 0;

          function R(e) {
            var t = ++k;
            return (
              (M[t] = e),
              function () {
                delete M[t];
              }
            );
          }

          function E(e, t) {
            Object.keys(M).forEach(function (n) {
              if (M[n])
                try {
                  M[n](e, t);
                } catch (o) {}
            });
          }

          function U(e) {
            if ((('initialized' === e.data.type || x) && (_ = !0), _)) {
              var t = e.data;
              !t ||
                !t.codesandbox ||
                (null !== w && e.origin !== w) ||
                (null != t.$id && null !== O && O !== t.$id) ||
                E(t, e.source);
            }
          }

          function A(e, t, n) {
            j.set(e, t),
              e.postMessage(
                {
                  type: 'register-frame',
                  origin: document.location.origin,
                  id: n,
                },
                t
              );
          }

          function C() {
            window.addEventListener('message', U);
          }
          'undefined' !== typeof window &&
            window.addEventListener('message', U);
        }.call(this, n('../../node_modules/process/browser.js'));
    },
    '../common/lib/detect-old-browser.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.default = function () {
          return (
            (function () {
              const e = navigator.userAgent,
                t = e.indexOf('MSIE ');
              if (t > 0)
                return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
              if (e.indexOf('Trident/') > 0) {
                const t = e.indexOf('rv:');
                return parseInt(e.substring(t + 3, e.indexOf('.', t)), 10);
              }
              return !1;
            })() || navigator.userAgent.indexOf('Opera') > -1
          );
        });
    },
    '../common/lib/forked-vendors/jsonlint.browser.js': function (e, t, n) {
      'use strict';
      var o = (function () {
        var e = {
            trace: function () {},
            yy: {},
            symbols_: {
              error: 2,
              JSONString: 3,
              STRING: 4,
              JSONNumber: 5,
              NUMBER: 6,
              JSONNullLiteral: 7,
              NULL: 8,
              JSONBooleanLiteral: 9,
              TRUE: 10,
              FALSE: 11,
              JSONText: 12,
              JSONValue: 13,
              EOF: 14,
              JSONObject: 15,
              JSONArray: 16,
              '{': 17,
              '}': 18,
              JSONMemberList: 19,
              JSONMember: 20,
              ':': 21,
              ',': 22,
              '[': 23,
              ']': 24,
              JSONElementList: 25,
              $accept: 0,
              $end: 1,
            },
            terminals_: {
              2: 'error',
              4: 'STRING',
              6: 'NUMBER',
              8: 'NULL',
              10: 'TRUE',
              11: 'FALSE',
              14: 'EOF',
              17: '{',
              18: '}',
              21: ':',
              22: ',',
              23: '[',
              24: ']',
            },
            productions_: [
              0,
              [3, 1],
              [5, 1],
              [7, 1],
              [9, 1],
              [9, 1],
              [12, 2],
              [13, 1],
              [13, 1],
              [13, 1],
              [13, 1],
              [13, 1],
              [13, 1],
              [15, 2],
              [15, 3],
              [20, 3],
              [19, 1],
              [19, 3],
              [16, 2],
              [16, 3],
              [25, 1],
              [25, 3],
            ],
            performAction: function (e, t, n, o, s, r, i) {
              var a = r.length - 1;
              switch (s) {
                case 1:
                  this.$ = e
                    .replace(/\\(\\|")/g, '$1')
                    .replace(/\\n/g, '\n')
                    .replace(/\\r/g, '\r')
                    .replace(/\\t/g, '\t')
                    .replace(/\\v/g, '\v')
                    .replace(/\\f/g, '\f')
                    .replace(/\\b/g, '\b');
                  break;
                case 2:
                  this.$ = Number(e);
                  break;
                case 3:
                  this.$ = null;
                  break;
                case 4:
                  this.$ = !0;
                  break;
                case 5:
                  this.$ = !1;
                  break;
                case 6:
                  return (this.$ = r[a - 1]);
                case 13:
                  this.$ = {};
                  break;
                case 14:
                  this.$ = r[a - 1];
                  break;
                case 15:
                  this.$ = [r[a - 2], r[a]];
                  break;
                case 16:
                  (this.$ = {}), (this.$[r[a][0]] = r[a][1]);
                  break;
                case 17:
                  (this.$ = r[a - 2]), (r[a - 2][r[a][0]] = r[a][1]);
                  break;
                case 18:
                  this.$ = [];
                  break;
                case 19:
                  this.$ = r[a - 1];
                  break;
                case 20:
                  this.$ = [r[a]];
                  break;
                case 21:
                  (this.$ = r[a - 2]), r[a - 2].push(r[a]);
              }
            },
            table: [
              {
                3: 5,
                4: [1, 12],
                5: 6,
                6: [1, 13],
                7: 3,
                8: [1, 9],
                9: 4,
                10: [1, 10],
                11: [1, 11],
                12: 1,
                13: 2,
                15: 7,
                16: 8,
                17: [1, 14],
                23: [1, 15],
              },
              {
                1: [3],
              },
              {
                14: [1, 16],
              },
              {
                14: [2, 7],
                18: [2, 7],
                22: [2, 7],
                24: [2, 7],
              },
              {
                14: [2, 8],
                18: [2, 8],
                22: [2, 8],
                24: [2, 8],
              },
              {
                14: [2, 9],
                18: [2, 9],
                22: [2, 9],
                24: [2, 9],
              },
              {
                14: [2, 10],
                18: [2, 10],
                22: [2, 10],
                24: [2, 10],
              },
              {
                14: [2, 11],
                18: [2, 11],
                22: [2, 11],
                24: [2, 11],
              },
              {
                14: [2, 12],
                18: [2, 12],
                22: [2, 12],
                24: [2, 12],
              },
              {
                14: [2, 3],
                18: [2, 3],
                22: [2, 3],
                24: [2, 3],
              },
              {
                14: [2, 4],
                18: [2, 4],
                22: [2, 4],
                24: [2, 4],
              },
              {
                14: [2, 5],
                18: [2, 5],
                22: [2, 5],
                24: [2, 5],
              },
              {
                14: [2, 1],
                18: [2, 1],
                21: [2, 1],
                22: [2, 1],
                24: [2, 1],
              },
              {
                14: [2, 2],
                18: [2, 2],
                22: [2, 2],
                24: [2, 2],
              },
              {
                3: 20,
                4: [1, 12],
                18: [1, 17],
                19: 18,
                20: 19,
              },
              {
                3: 5,
                4: [1, 12],
                5: 6,
                6: [1, 13],
                7: 3,
                8: [1, 9],
                9: 4,
                10: [1, 10],
                11: [1, 11],
                13: 23,
                15: 7,
                16: 8,
                17: [1, 14],
                23: [1, 15],
                24: [1, 21],
                25: 22,
              },
              {
                1: [2, 6],
              },
              {
                14: [2, 13],
                18: [2, 13],
                22: [2, 13],
                24: [2, 13],
              },
              {
                18: [1, 24],
                22: [1, 25],
              },
              {
                18: [2, 16],
                22: [2, 16],
              },
              {
                21: [1, 26],
              },
              {
                14: [2, 18],
                18: [2, 18],
                22: [2, 18],
                24: [2, 18],
              },
              {
                22: [1, 28],
                24: [1, 27],
              },
              {
                22: [2, 20],
                24: [2, 20],
              },
              {
                14: [2, 14],
                18: [2, 14],
                22: [2, 14],
                24: [2, 14],
              },
              {
                3: 20,
                4: [1, 12],
                20: 29,
              },
              {
                3: 5,
                4: [1, 12],
                5: 6,
                6: [1, 13],
                7: 3,
                8: [1, 9],
                9: 4,
                10: [1, 10],
                11: [1, 11],
                13: 30,
                15: 7,
                16: 8,
                17: [1, 14],
                23: [1, 15],
              },
              {
                14: [2, 19],
                18: [2, 19],
                22: [2, 19],
                24: [2, 19],
              },
              {
                3: 5,
                4: [1, 12],
                5: 6,
                6: [1, 13],
                7: 3,
                8: [1, 9],
                9: 4,
                10: [1, 10],
                11: [1, 11],
                13: 31,
                15: 7,
                16: 8,
                17: [1, 14],
                23: [1, 15],
              },
              {
                18: [2, 17],
                22: [2, 17],
              },
              {
                18: [2, 15],
                22: [2, 15],
              },
              {
                22: [2, 21],
                24: [2, 21],
              },
            ],
            defaultActions: {
              16: [2, 6],
            },
            parseError: function (e, t) {
              throw new Error(e);
            },
            parse: function (e) {
              var t = this,
                n = [0],
                o = [null],
                s = [],
                r = this.table,
                i = '',
                a = 0,
                l = 0,
                c = 0;
              this.lexer.setInput(e),
                (this.lexer.yy = this.yy),
                (this.yy.lexer = this.lexer),
                'undefined' == typeof this.lexer.yylloc &&
                  (this.lexer.yylloc = {});
              var u = this.lexer.yylloc;

              function d() {
                var e;
                return (
                  'number' !== typeof (e = t.lexer.lex() || 1) &&
                    (e = t.symbols_[e] || e),
                  e
                );
              }
              s.push(u),
                'function' === typeof this.yy.parseError &&
                  (this.parseError = this.yy.parseError);
              for (var p, m, f, h, b, g, j, y, x, _, v = {}; ; ) {
                if (
                  ((f = n[n.length - 1]),
                  this.defaultActions[f]
                    ? (h = this.defaultActions[f])
                    : (null == p && (p = d()), (h = r[f] && r[f][p])),
                  'undefined' === typeof h || !h.length || !h[0])
                ) {
                  if (!c) {
                    for (g in ((x = []), r[f]))
                      this.terminals_[g] &&
                        g > 2 &&
                        x.push("'" + this.terminals_[g] + "'");
                    var w = '';
                    (w = this.lexer.showPosition
                      ? 'Parse error on line ' +
                        (a + 1) +
                        ':\n' +
                        this.lexer.showPosition() +
                        '\nExpecting ' +
                        x.join(', ') +
                        ", got '" +
                        this.terminals_[p] +
                        "'"
                      : 'Parse error on line ' +
                        (a + 1) +
                        ': Unexpected ' +
                        (1 == p
                          ? 'end of input'
                          : "'" + (this.terminals_[p] || p) + "'")),
                      this.parseError(w, {
                        text: this.lexer.match,
                        token: this.terminals_[p] || p,
                        line: this.lexer.yylineno,
                        loc: u,
                        expected: x,
                      });
                  }
                  if (3 == c) {
                    if (1 == p) throw new Error(w || 'Parsing halted.');
                    (l = this.lexer.yyleng),
                      (i = this.lexer.yytext),
                      (a = this.lexer.yylineno),
                      (u = this.lexer.yylloc),
                      (p = d());
                  }
                  for (; !((2).toString() in r[f]); ) {
                    if (0 == f) throw new Error(w || 'Parsing halted.');
                    (_ = 1),
                      (n.length = n.length - 2 * _),
                      (o.length = o.length - _),
                      (s.length = s.length - _),
                      (f = n[n.length - 1]);
                  }
                  (m = p),
                    (p = 2),
                    (h = r[(f = n[n.length - 1])] && r[f][2]),
                    (c = 3);
                }
                if (h[0] instanceof Array && h.length > 1)
                  throw new Error(
                    'Parse Error: multiple actions possible at state: ' +
                      f +
                      ', token: ' +
                      p
                  );
                switch (h[0]) {
                  case 1:
                    n.push(p),
                      o.push(this.lexer.yytext),
                      s.push(this.lexer.yylloc),
                      n.push(h[1]),
                      (p = null),
                      m
                        ? ((p = m), (m = null))
                        : ((l = this.lexer.yyleng),
                          (i = this.lexer.yytext),
                          (a = this.lexer.yylineno),
                          (u = this.lexer.yylloc),
                          c > 0 && c--);
                    break;
                  case 2:
                    if (
                      ((j = this.productions_[h[1]][1]),
                      (v.$ = o[o.length - j]),
                      (v._$ = {
                        first_line: s[s.length - (j || 1)].first_line,
                        last_line: s[s.length - 1].last_line,
                        first_column: s[s.length - (j || 1)].first_column,
                        last_column: s[s.length - 1].last_column,
                      }),
                      'undefined' !==
                        typeof (b = this.performAction.call(
                          v,
                          i,
                          l,
                          a,
                          this.yy,
                          h[1],
                          o,
                          s
                        )))
                    )
                      return b;
                    j &&
                      ((n = n.slice(0, -1 * j * 2)),
                      (o = o.slice(0, -1 * j)),
                      (s = s.slice(0, -1 * j))),
                      n.push(this.productions_[h[1]][0]),
                      o.push(v.$),
                      s.push(v._$),
                      (y = r[n[n.length - 2]][n[n.length - 1]]),
                      n.push(y);
                    break;
                  case 3:
                    return !0;
                }
              }
              return !0;
            },
          },
          t = (function () {
            var e = {
              EOF: 1,
              parseError: function (e, t) {
                if (!this.yy.parseError) throw new Error(e);
                this.yy.parseError(e, t);
              },
              setInput: function (e) {
                return (
                  (this._input = e),
                  (this._more = this._less = this.done = !1),
                  (this.yylineno = this.yyleng = 0),
                  (this.yytext = this.matched = this.match = ''),
                  (this.conditionStack = ['INITIAL']),
                  (this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0,
                  }),
                  this
                );
              },
              input: function () {
                var e = this._input[0];
                return (
                  (this.yytext += e),
                  this.yyleng++,
                  (this.match += e),
                  (this.matched += e),
                  e.match(/\n/) && this.yylineno++,
                  (this._input = this._input.slice(1)),
                  e
                );
              },
              unput: function (e) {
                return (this._input = e + this._input), this;
              },
              more: function () {
                return (this._more = !0), this;
              },
              less: function (e) {
                this._input = this.match.slice(e) + this._input;
              },
              pastInput: function () {
                var e = this.matched.substr(
                  0,
                  this.matched.length - this.match.length
                );
                return (
                  (e.length > 20 ? '...' : '') +
                  e.substr(-20).replace(/\n/g, '')
                );
              },
              upcomingInput: function () {
                var e = this.match;
                return (
                  e.length < 20 && (e += this._input.substr(0, 20 - e.length)),
                  (e.substr(0, 20) + (e.length > 20 ? '...' : '')).replace(
                    /\n/g,
                    ''
                  )
                );
              },
              showPosition: function () {
                var e = this.pastInput(),
                  t = new Array(e.length + 1).join('-');
                return e + this.upcomingInput() + '\n' + t + '^';
              },
              next: function () {
                if (this.done) return this.EOF;
                var e, t, n, o, s;
                this._input || (this.done = !0),
                  this._more || ((this.yytext = ''), (this.match = ''));
                for (
                  var r = this._currentRules(), i = 0;
                  i < r.length &&
                  (!(n = this._input.match(this.rules[r[i]])) ||
                    (t && !(n[0].length > t[0].length)) ||
                    ((t = n), (o = i), this.options.flex));
                  i++
                );
                return t
                  ? ((s = t[0].match(/\n.*/g)) && (this.yylineno += s.length),
                    (this.yylloc = {
                      first_line: this.yylloc.last_line,
                      last_line: this.yylineno + 1,
                      first_column: this.yylloc.last_column,
                      last_column: s
                        ? s[s.length - 1].length - 1
                        : this.yylloc.last_column + t[0].length,
                    }),
                    (this.yytext += t[0]),
                    (this.match += t[0]),
                    (this.yyleng = this.yytext.length),
                    (this._more = !1),
                    (this._input = this._input.slice(t[0].length)),
                    (this.matched += t[0]),
                    (e = this.performAction.call(
                      this,
                      this.yy,
                      this,
                      r[o],
                      this.conditionStack[this.conditionStack.length - 1]
                    )),
                    this.done && this._input && (this.done = !1),
                    e || void 0)
                  : '' === this._input
                  ? this.EOF
                  : void this.parseError(
                      'Lexical error on line ' +
                        (this.yylineno + 1) +
                        '. Unrecognized text.\n' +
                        this.showPosition(),
                      {
                        text: '',
                        token: null,
                        line: this.yylineno,
                      }
                    );
              },
              lex: function () {
                var e = this.next();
                return 'undefined' !== typeof e ? e : this.lex();
              },
              begin: function (e) {
                this.conditionStack.push(e);
              },
              popState: function () {
                return this.conditionStack.pop();
              },
              _currentRules: function () {
                return this.conditions[
                  this.conditionStack[this.conditionStack.length - 1]
                ].rules;
              },
              topState: function () {
                return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function (e) {
                this.begin(e);
              },
              options: {},
              performAction: function (e, t, n, o) {
                switch (n) {
                  case 0:
                    break;
                  case 1:
                    return 6;
                  case 2:
                    return (t.yytext = t.yytext.substr(1, t.yyleng - 2)), 4;
                  case 3:
                    return 17;
                  case 4:
                    return 18;
                  case 5:
                    return 23;
                  case 6:
                    return 24;
                  case 7:
                    return 22;
                  case 8:
                    return 21;
                  case 9:
                    return 10;
                  case 10:
                    return 11;
                  case 11:
                    return 8;
                  case 12:
                    return 14;
                  case 13:
                    return 'INVALID';
                }
              },
              rules: [
                /^(?:\s+)/,
                /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,
                /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,
                /^(?:\{)/,
                /^(?:\})/,
                /^(?:\[)/,
                /^(?:\])/,
                /^(?:,)/,
                /^(?::)/,
                /^(?:true\b)/,
                /^(?:false\b)/,
                /^(?:null\b)/,
                /^(?:$)/,
                /^(?:.)/,
              ],
              conditions: {
                INITIAL: {
                  rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                  inclusive: !0,
                },
              },
            };
            return e;
          })();
        return (e.lexer = t), e;
      })();
      (t.parser = o),
        (t.parse = function () {
          return o.parse.apply(o, arguments);
        });
    },
    '../common/lib/load-dynamic-polyfills.js': function (e, t, n) {
      'use strict';
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, o) {
                void 0 === o && (o = n), (e[o] = t[n]);
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, 'default', {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        r =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                'default' !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  o(t, e, n);
            return s(t, e), t;
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule
              ? e
              : {
                  default: e,
                };
          };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const a = i(n('../common/lib/detect-old-browser.js'));
      t.default = function () {
        const e = [];
        return (
          (a.default() || 'undefined' === typeof Object.entries) &&
            e.push(
              Promise.resolve().then(() =>
                r(n('../../node_modules/@babel/polyfill/lib/index.js'))
              )
            ),
          'undefined' === typeof Error.captureStackTrace &&
            e.push(
              Promise.resolve().then(() =>
                r(n('../../node_modules/error-polyfill/index.js'))
              )
            ),
          Promise.all(e)
        );
      };
    },
    '../common/lib/prettify-default-config.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.default = {
          printWidth: 80,
          tabWidth: 2,
          useTabs: !1,
          semi: !0,
          singleQuote: !1,
          trailingComma: 'none',
          bracketSpacing: !0,
          jsxBracketSameLine: !1,
        });
    },
    '../common/lib/sandbox/modules.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.inDirectory =
          t.resolveDirectoryWrapped =
          t.resolveModuleWrapped =
          t.findCurrentModule =
          t.findMainModule =
          t.isMainModule =
          t.getChildren =
          t.getDirectoryPath =
          t.getModulePath =
          t.resolveModule =
          t.getModulesInDirectory =
          t.getModulesAndDirectoriesInDirectory =
          t.resolveDirectory =
            void 0);
      const s = o(n('../../node_modules/lodash/memoize.js')),
        r = o(n('../common/lib/templates/index.js')),
        i = o(n('../common/lib/templates/configuration/parse.js')),
        a = (e, t, n) => e === t || n.some((n) => e === `${t}.${n}`),
        l = (e) => {
          throw new Error('Cannot find module in ' + e);
        };

      function c(e, t, n, o) {
        if (!e) return l('');
        let s = e,
          r = o;
        s.startsWith('{{sandboxRoot}}') &&
          ((r = void 0), (s = e.replace('{{sandboxRoot}}/', './')));
        const i = s.replace(/^.\//, '').split('/').filter(Boolean),
          c = i.reduce((e, t, o) => {
            if (o === i.length) return e;
            if ('..' === t) {
              const t = n.find((t) => t.shortid === e);
              return null == t && l(s), t.directoryShortid;
            }
            const r = n
              .filter((t) => t.directoryShortid == e)
              .find((e) => a(e.title, t, []));
            return null == r && l(s), r.shortid;
          }, r);
        return n.find((e) => e.shortid === c);
      }

      function u(e, t, n, o) {
        if (!e) return l('');
        let s = e;
        s.startsWith('{{sandboxRoot}}') &&
          (s = e.replace('{{sandboxRoot}}/', './'));
        const r = s.replace(/^.\//, '').split('/').filter(Boolean),
          i = s.replace(/^.\//, '').split('/').filter(Boolean);
        i.pop();
        const a = c(i.join('/') || '/', 0, n, o),
          u = a ? a.shortid : null,
          d = r[r.length - 1];
        return {
          modules: t.filter((e) => e.directoryShortid == u),
          foundDirectoryShortid: u,
          lastPath: d,
          splitPath: r,
        };
      }

      function d(e, t) {
        return e.find((e) => e.shortid === t);
      }
      (t.resolveDirectory = c),
        (t.getModulesAndDirectoriesInDirectory = function (e, t, n) {
          const { path: o } = e,
            s = o + '/';
          return {
            removedModules: t.filter((e) => e.path.startsWith(s)),
            removedDirectories: n.filter(
              (t) => t.path.startsWith(s) && t !== e
            ),
          };
        }),
        (t.getModulesInDirectory = u),
        (t.resolveModule = (e, t, n, o, s = ['js', 'jsx', 'json']) => {
          const {
              modules: r,
              lastPath: i,
              splitPath: c,
              foundDirectoryShortid: d,
            } = u(e, t, n, o),
            p = r.find((e) => a(e.title, i, s));
          if (p) return p;
          const m = n
            .filter((e) => e.directoryShortid == d)
            .find((e) => a(e.title, i, s));
          if (m) {
            const n = t.find(
              (e) => e.directoryShortid == m.shortid && a(e.title, 'index', s)
            );
            return null == n && l(e), n;
          }
          if ('' === c[c.length - 1]) {
            const e = r.find((e) => a(e.title, 'index', s));
            if (e) return e;
          }
          return l(e);
        });
      const p = (e, t, n, o) => {
        const s = (function (e, t) {
          return e.find((e) => e.id === t);
        })(e, o);
        if (!s) return '';
        let r = d(n, s.directoryShortid),
          i = '/';
        if (null == r && s.directoryShortid) return '';
        for (; null != r; ) {
          i = `/${r.title}${i}`;
          const e = r.directoryShortid;
          if (((r = d(n, r.directoryShortid)), !r && e)) return '';
        }
        return `${i}${s.title}`;
      };
      (t.getModulePath = (e, t, n) => p(e, 0, t, n)),
        (t.getDirectoryPath = (e, t, n) => p(t, 0, t, n)),
        (t.getChildren = s.default(
          (e = [], t = [], n) => [
            ...t.filter((e) => e.directoryShortid === n),
            ...e.filter((e) => e.directoryShortid === n),
          ],
          (e, t, n) =>
            n +
            e.map((e) => e.id + e.title + e.directoryShortid).join(',') +
            t.map((e) => e.id + e.title + e.directoryShortid).join(',')
        )),
        (t.isMainModule = (e, n, o, s = 'index.js') =>
          t.getModulePath(n, o, e.id).replace('/', '') === s),
        (t.findMainModule = (e) => {
          const n = t.resolveModuleWrapped(e),
            o = r.default(e.template),
            s = i.default(e.template, o.configurationFiles, n, e),
            a = o
              .getDefaultOpenedFiles(s)
              .map((e) => n(e))
              .find((e) => Boolean(e));
          if (a) return a;
          const l = n(e.entry);
          return l || e.modules[0];
        }),
        (t.findCurrentModule = (e, n, o = '', s) => {
          const r = decodeURIComponent(o).replace('/', '');
          let i = null;
          try {
            i = t.resolveModule(r, e, n);
          } catch (a) {}
          return (
            i ||
            e.find((e) => e.id === o) ||
            e.find((e) => e.shortid === o) ||
            s
          );
        }),
        (t.resolveModuleWrapped = (e) => (n) => {
          try {
            return t.resolveModule(n, e.modules, e.directories);
          } catch (o) {
            return;
          }
        }),
        (t.resolveDirectoryWrapped = (e) => (t) => {
          try {
            return c(t, e.modules, e.directories);
          } catch (n) {
            return;
          }
        });
      t.inDirectory = s.default(
        (e, t, n) => {
          let o = d(e, n);
          for (; o; ) {
            if (o.directoryShortid === t) return !0;
            o = d(e, o.directoryShortid);
          }
          return !1;
        },
        (e, t, n) =>
          t + n + e.map((e) => e.id + e.title + e.directoryShortid).join(',')
      );
    },
    '../common/lib/templates/adonis.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'adonis',
        'AdonisJs',
        'https://adonisjs.com/',
        'github/adonisjs/adonis-starter-codesandbox',
        r.decorateSelector(() => '#fff'),
        {
          mainFile: ['/start/routes.js'],
          showOnHomePage: !0,
          staticDeployment: !1,
        }
      );
    },
    '../common/lib/templates/angular.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = n('../common/lib/utils/path.js'),
        r = o(n('../common/lib/templates/template.js')),
        i = o(n('../common/lib/templates/configuration/index.js')),
        a = n('../common/lib/utils/decorate-selector.js');
      class l extends r.default {
        getEntries(e) {
          let t = [];
          try {
            if (e['angular-config'].generated) {
              const { parsed: n } = e['angular-cli'];
              t = t.concat(
                (function (e) {
                  const t = [];
                  if (e) {
                    const n = e.apps && e.apps[0];
                    n &&
                      n.root &&
                      n.main &&
                      t.push(s.absolute(s.join(n.root, n.main)));
                  }
                  return t;
                })(n)
              );
            } else {
              const { parsed: n } = e['angular-config'];
              t = t.concat(
                (function (e) {
                  const t = [];
                  if (e) {
                    const { defaultProject: n } = e,
                      o = e.projects[n];
                    if (o && o.architect) {
                      const { build: e } = o.architect;
                      e.options.main &&
                        t.push(s.absolute(s.join(o.root, e.options.main)));
                    }
                  }
                  return t;
                })(n)
              );
            }
          } catch (n) {
            console.warn(
              `${e['angular-config'].path} is malformed: ${n.message}`
            );
          }
          return (
            e.package.parsed &&
              e.package.parsed.main &&
              t.push(s.absolute(e.package.parsed.main)),
            t.push('/src/main.ts'),
            t.push('/main.ts'),
            t
          );
        }
        getHTMLEntries(e) {
          let t = [];
          if (e['angular-config'].generated) {
            if (e['angular-cli']) {
              const { parsed: n } = e['angular-cli'];
              t = t.concat(
                (function (e) {
                  if (e) {
                    const t = e.apps && e.apps[0];
                    if (t && t.root && t.index)
                      return [s.absolute(s.join(t.root, t.index))];
                  }
                  return [];
                })(n)
              );
            }
          } else {
            const { parsed: n } = e['angular-config'];
            t = t.concat(
              (function (e) {
                if (e) {
                  const { defaultProject: t } = e,
                    n = e.projects[t];
                  if (n && n.architect) {
                    const { build: e } = n.architect;
                    if (e && null != n.root && e.options && e.options.index)
                      return [s.absolute(s.join(n.root, e.options.index))];
                  }
                }
                return [];
              })(n)
            );
          }
          return t.push('/public/index.html'), t.push('/index.html'), t;
        }
      }
      t.default = new l(
        'angular-cli',
        'Angular',
        'https://github.com/angular/angular',
        'angular',
        a.decorateSelector(() => '#DD0031'),
        {
          extraConfigurations: {
            '/.angular-cli.json': i.default.angularCli,
            '/angular.json': i.default.angularJSON,
            '/tsconfig.json': i.default.tsconfig,
          },
          staticDeployment: !1,
          isTypescript: !0,
          distDir: 'dist',
          showOnHomePage: !0,
          popular: !0,
          main: !0,
        }
      );
    },
    '../common/lib/templates/apollo-server.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'apollo',
        'Apollo',
        'https://www.apollographql.com/docs/apollo-server/',
        'apollo-server',
        r.decorateSelector(() => '#c4198b'),
        {
          staticDeployment: !1,
          mainFile: ['/src/index.js'],
          showOnHomePage: !0,
        }
      );
    },
    '../common/lib/templates/babel.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'babel-repl',
        'Babel',
        'https://github.com/@babel/core',
        'babel',
        r.decorateSelector(() => '#F5DA55'),
        {
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
            '/babel-transpiler.json': i.default.babelTranspiler,
          },
        }
      );
    },
    '../common/lib/templates/configuration/angular-cli/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = {
        title: '.angular-cli.json',
        type: 'angular-cli',
        description:
          'The configuration used for angular-cli, the cli to run angular projects.',
        moreInfoUrl: 'https://github.com/angular/angular-cli/wiki/angular-cli',
        getDefaultCode: () =>
          JSON.stringify(
            {
              apps: [
                {
                  root: 'src',
                  outDir: 'dist',
                  index: 'index.html',
                  main: 'main.ts',
                  polyfills: 'polyfills.ts',
                  styles: [],
                  scripts: [],
                },
              ],
            },
            null,
            2
          ),
        schema:
          'https://raw.githubusercontent.com/angular/angular-cli/master/packages/@angular/cli/lib/config/schema.json',
      };
      t.default = o;
    },
    '../common/lib/templates/configuration/angular-json/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = {
        title: 'angular.json',
        type: 'angular-config',
        description:
          'The configuration used for angular-cli v6, the new cli to run angular projects.',
        moreInfoUrl: 'https://github.com/angular/angular-cli/wiki/angular-cli',
        partialSupportDisclaimer: 'Only `project.build` field is supported.',
        getDefaultCode: () =>
          JSON.stringify(
            {
              version: 1,
              newProjectRoot: 'projects',
              projects: {
                codesandbox: {
                  root: '',
                  sourceRoot: 'src',
                  projectType: 'application',
                  prefix: 'app',
                  schematics: {},
                  architect: {
                    build: {
                      builder: '@angular-devkit/build-angular:browser',
                      options: {
                        outputPath: 'dist/codesandbox',
                        index: 'src/index.html',
                        main: 'src/main.ts',
                        polyfills: 'src/polyfills.ts',
                        tsConfig: 'src/tsconfig.app.json',
                        assets: ['src/favicon.png', 'src/assets'],
                        styles: ['src/styles.css'],
                        scripts: [],
                      },
                      configurations: {
                        production: {
                          fileReplacements: [
                            {
                              replace: 'src/environments/environment.ts',
                              with: 'src/environments/environment.prod.ts',
                            },
                          ],
                          optimization: !0,
                          outputHashing: 'all',
                          sourceMap: !1,
                          extractCss: !0,
                          namedChunks: !1,
                          aot: !0,
                          extractLicenses: !0,
                          vendorChunk: !1,
                          buildOptimizer: !0,
                        },
                      },
                    },
                    serve: {
                      builder: '@angular-devkit/build-angular:dev-server',
                      options: {
                        browserTarget: 'codesandbox:build',
                      },
                      configurations: {
                        production: {
                          browserTarget: 'codesandbox:build:production',
                        },
                      },
                    },
                    'extract-i18n': {
                      builder: '@angular-devkit/build-angular:extract-i18n',
                      options: {
                        browserTarget: 'codesandbox:build',
                      },
                    },
                    test: {
                      builder: '@angular-devkit/build-angular:karma',
                      options: {
                        main: 'src/test.ts',
                        polyfills: 'src/polyfills.ts',
                        tsConfig: 'src/tsconfig.spec.json',
                        karmaConfig: 'src/karma.conf.js',
                        styles: ['src/styles.css'],
                        scripts: [],
                        assets: ['src/favicon.png', 'src/assets'],
                      },
                    },
                    lint: {
                      builder: '@angular-devkit/build-angular:tslint',
                      options: {
                        tsConfig: [
                          'src/tsconfig.app.json',
                          'src/tsconfig.spec.json',
                        ],
                        exclude: ['**/node_modules/**'],
                      },
                    },
                  },
                },
                'codesandbox-e2e': {
                  root: 'e2e/',
                  projectType: 'application',
                  architect: {
                    e2e: {
                      builder: '@angular-devkit/build-angular:protractor',
                      options: {
                        protractorConfig: 'e2e/protractor.conf.js',
                        devServerTarget: 'codesandbox:serve',
                      },
                      configurations: {
                        production: {
                          devServerTarget: 'codesandbox:serve:production',
                        },
                      },
                    },
                    lint: {
                      builder: '@angular-devkit/build-angular:tslint',
                      options: {
                        tsConfig: 'e2e/tsconfig.e2e.json',
                        exclude: ['**/node_modules/**'],
                      },
                    },
                  },
                },
              },
              defaultProject: 'codesandbox',
            },
            null,
            2
          ),
        schema:
          'https://raw.githubusercontent.com/angular/angular-cli/master/packages/angular/cli/lib/config/schema.json',
      };
      t.default = o;
    },
    '../common/lib/templates/configuration/babel-transpiler/index.js':
      function (e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        t.default = {
          title: 'babel-transpiler.json',
          type: 'babelTranspiler',
          description: 'Configuration for the Babel REPL.',
          moreInfoUrl: 'https://eslint.org/docs/user-guide/configuring',
          getDefaultCode: () => '{}',
        };
      },
    '../common/lib/templates/configuration/babelrc/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = n('../common/lib/utils/is-babel-7.js'),
        s = n('../common/lib/utils/is-preact-10.js'),
        r = {
          react: 'React.createElement',
          preact: 'h',
        },
        i = {
          title: '.babelrc',
          type: 'babel',
          description: 'Custom configuration for Babel, the transpiler we use.',
          moreInfoUrl: 'https://babeljs.io/docs/usage/babelrc/',
          getDefaultCode: (e, t) => {
            let n = !1,
              i = !1;
            try {
              const e = t('/package.json'),
                r = JSON.parse(e.code || '');
              (n = o.isBabel7(r.dependencies, r.devDependencies)),
                (i = s.isPreact10(r.dependencies, r.devDependencies));
            } catch (a) {
              console.error(a);
            }
            if ('preact-cli' === e)
              return i
                ? JSON.stringify(
                    {
                      presets: ['env', 'typescript'],
                      plugins: [
                        'syntax-dynamic-import',
                        'transform-object-assign',
                        [
                          'proposal-decorators',
                          {
                            legacy: !0,
                          },
                        ],
                        [
                          'proposal-class-properties',
                          {
                            loose: !0,
                          },
                        ],
                        'proposal-object-rest-spread',
                        'babel-plugin-macros',
                        [
                          'transform-react-jsx',
                          {
                            pragma: 'h',
                            pragmaFrag: 'Fragment',
                          },
                        ],
                        [
                          'jsx-pragmatic',
                          {
                            module: 'preact',
                            export: 'h',
                            import: 'h',
                          },
                        ],
                      ],
                    },
                    null,
                    2
                  )
                : JSON.stringify(
                    {
                      presets: ['latest', 'stage-1'],
                      plugins: [
                        'transform-object-assign',
                        'transform-decorators-legacy',
                        [
                          'transform-react-jsx',
                          {
                            pragma: 'h',
                          },
                        ],
                        [
                          'jsx-pragmatic',
                          {
                            module: 'preact',
                            export: 'h',
                            import: 'h',
                          },
                        ],
                      ],
                    },
                    null,
                    2
                  );
            if ('vue-cli' === e)
              return n
                ? JSON.stringify({
                    presets: [
                      [
                        'env',
                        {
                          modules: !1,
                          targets: {
                            browsers: [
                              '>0.25%',
                              'not ie 11',
                              'not op_mini all',
                            ],
                          },
                        },
                      ],
                    ],
                    plugins: [
                      '@vue/babel-plugin-jsx',
                      '@babel/plugin-syntax-dynamic-import',
                      [
                        '@babel/plugin-proposal-decorators',
                        {
                          decoratorsBeforeExport: !1,
                          legacy: !1,
                        },
                      ],
                      [
                        '@babel/plugin-proposal-class-properties',
                        {
                          loose: !1,
                        },
                      ],
                    ],
                  })
                : JSON.stringify(
                    {
                      presets: [
                        [
                          'env',
                          {
                            modules: !1,
                            targets: {
                              browsers: [
                                '> 1%',
                                'last 2 versions',
                                'not ie <= 8',
                              ],
                            },
                          },
                        ],
                        'stage-2',
                      ],
                      plugins: ['transform-vue-jsx', 'transform-runtime'],
                      env: {
                        test: {
                          presets: ['env', 'stage-2'],
                          plugins: [
                            'transform-vue-jsx',
                            'transform-es2015-modules-commonjs',
                            'dynamic-import-node',
                          ],
                        },
                      },
                    },
                    null,
                    2
                  );
            if ('parcel' === e) {
              const e = ['env'],
                o = n
                  ? ['transform-runtime']
                  : [
                      [
                        'transform-runtime',
                        {
                          polyfill: !1,
                          regenerator: !0,
                        },
                      ],
                      'transform-object-rest-spread',
                    ],
                s = n
                  ? {
                      plugins: ['dynamicImport'],
                    }
                  : {},
                i = t('/package.json');
              if (i)
                try {
                  const e = JSON.parse(i.code);
                  let t = null;
                  Object.keys(r).forEach((n) => {
                    ((e.dependencies && e.dependencies[n]) ||
                      (e.devDependencies && e.devDependencies[n])) &&
                      (t = r[n]);
                  }),
                    null !== t &&
                      o.push([
                        'transform-react-jsx',
                        {
                          pragma: t,
                        },
                      ]);
                } catch (a) {}
              return JSON.stringify(
                {
                  presets: e,
                  plugins: o,
                  parserOpts: s,
                },
                null,
                2
              );
            }
            return 'cxjs' === e
              ? n
                ? JSON.stringify(
                    {
                      presets: ['env'],
                      plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-proposal-function-bind',
                        'transform-cx-jsx',
                        '@babel/plugin-transform-parameters',
                        '@babel/plugin-syntax-dynamic-import',
                        [
                          '@babel/plugin-transform-react-jsx',
                          {
                            pragma: 'VDOM.createElement',
                          },
                        ],
                      ],
                    },
                    null,
                    2
                  )
                : JSON.stringify(
                    {
                      presets: [
                        [
                          'env',
                          {
                            targets: {
                              chrome: 50,
                              ie: 11,
                              ff: 30,
                              edge: 12,
                              safari: 9,
                            },
                            modules: !1,
                            loose: !0,
                            useBuiltIns: !0,
                          },
                        ],
                        'stage-2',
                      ],
                      plugins: [
                        ['transform-cx-jsx'],
                        [
                          'transform-react-jsx',
                          {
                            pragma: 'VDOM.createElement',
                          },
                        ],
                        'transform-function-bind',
                        'transform-runtime',
                        'transform-regenerator',
                      ],
                    },
                    null,
                    2
                  )
              : JSON.stringify(
                  {
                    presets: [],
                    plugins: [],
                  },
                  null,
                  2
                );
          },
          schema:
            'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/babelrc.json',
        };
      t.default = i;
    },
    '../common/lib/templates/configuration/custom-codesandbox/index.js':
      function (e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        const o = {
          title: 'template.json',
          type: 'customTemplate',
          description: 'Configuration for the custom template',
          moreInfoUrl: 'https://codesandbox.io',
          getDefaultCode: () =>
            JSON.stringify(
              {
                templateName: 'custom',
                templateColor: '#aaa',
                sandpack: {
                  defaultExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
                  aliases: {},
                  transpilers: {
                    '\\.jsx?$': ['codesandbox:babel'],
                    '\\.json$': ['codesandbox:json'],
                  },
                },
              },
              null,
              2
            ),
        };
        t.default = o;
      },
    '../common/lib/templates/configuration/index.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(
          n('../common/lib/templates/configuration/package-json/index.js')
        ),
        r = o(n('../common/lib/templates/configuration/prettierRC/index.js')),
        i = o(n('../common/lib/templates/configuration/sandbox/index.js')),
        a = o(n('../common/lib/templates/configuration/babelrc/index.js')),
        l = o(n('../common/lib/templates/configuration/now/index.js')),
        c = o(n('../common/lib/templates/configuration/netlify/index.js')),
        u = o(n('../common/lib/templates/configuration/angular-cli/index.js')),
        d = o(n('../common/lib/templates/configuration/angular-json/index.js')),
        p = o(n('../common/lib/templates/configuration/tsconfig/index.js')),
        m = o(n('../common/lib/templates/configuration/jsconfig/index.js')),
        f = o(
          n('../common/lib/templates/configuration/babel-transpiler/index.js')
        ),
        h = o(
          n('../common/lib/templates/configuration/custom-codesandbox/index.js')
        ),
        b = {
          babelrc: a.default,
          babelTranspiler: f.default,
          packageJSON: s.default,
          prettierRC: r.default,
          sandboxConfig: i.default,
          angularCli: u.default,
          angularJSON: d.default,
          tsconfig: p.default,
          customCodeSandbox: h.default,
          nowConfig: l.default,
          netlifyConfig: c.default,
          jsconfig: m.default,
        };
      t.default = b;
    },
    '../common/lib/templates/configuration/jsconfig/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = {
        title: 'jsconfig.json',
        type: 'jsconfig',
        description:
          'Configuration for how the editor (and sometimes the bundler) reads and parses JavaScript.',
        moreInfoUrl: 'https://code.visualstudio.com/docs/languages/jsconfig',
        getDefaultCode: (e, t) =>
          JSON.stringify(
            {
              compilerOptions: {
                baseUrl: '.',
              },
            },
            null,
            2
          ),
        schema:
          'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/jsconfig.json',
        partialSupportDisclaimer:
          'Only `compilerOptions.baseUrl` field is supported.',
      };
      t.default = o;
    },
    '../common/lib/templates/configuration/netlify/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      t.default = {
        title: 'netlify.toml',
        type: 'netlify',
        description: 'Configuration for your deployments in netlify.',
        moreInfoUrl: 'https://www.netlify.com/docs/netlify-toml-reference/',
        getDefaultCode: () => '',
      };
    },
    '../common/lib/templates/configuration/now/index.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = {
        title: 'vercel.json',
        type: 'now',
        description: 'Configuration for your deployments on Vercel.',
        moreInfoUrl:
          'https://vercel.com/docs/configuration#introduction/configuration-reference',
        getDefaultCode: () => JSON.stringify({}, null, 2),
      };
      t.default = o;
    },
    '../common/lib/templates/configuration/package-json/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.generateFileFromSandbox = void 0);
      const s = o(n('../common/lib/utils/slugify.js'));

      function r(e) {
        const t = {
          name: s.default(e.title || e.id),
          version: '1.0.0',
          description: e.description || '',
          keywords: e.tags,
          main: e.entry,
          dependencies: e.npmDependencies,
        };
        return JSON.stringify(t, null, 2);
      }
      t.generateFileFromSandbox = r;
      const i = {
        title: 'package.json',
        type: 'package',
        description: 'Describes the overall configuration of your project.',
        moreInfoUrl: 'https://docs.npmjs.com/files/package.json',
        generateFileFromSandbox: r,
        schema:
          'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/package.json',
      };
      t.default = i;
    },
    '../common/lib/templates/configuration/parse.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../../node_modules/markty-toml/dist/marktytoml.es.js')),
        r = n('../common/lib/forked-vendors/jsonlint.browser.js');

      function i(e, t, n, o, s) {
        return t
          ? {
              code: t.code,
              generated: !1,
            }
          : s.getDefaultCode
          ? {
              code: s.getDefaultCode(e, o),
              generated: !0,
            }
          : n && s.generateFileFromSandbox
          ? {
              code: s.generateFileFromSandbox(n),
              generated: !0,
            }
          : {
              code: '',
              generated: !1,
            };
      }

      function a(e, t) {
        return 'title' in e
          ? e.title.includes(t)
          : 'path' in e && e.path.includes(t);
      }
      t.default = function (e, t, n, o) {
        const l = {},
          c = Object.keys(t);
        for (let d = 0; d < c.length; d++) {
          const p = c[d],
            m = n(p),
            f = t[p],
            h = Object.assign(
              {
                path: p,
              },
              i(e, m, o, n, f)
            ),
            { code: b } = h;
          if (b)
            try {
              let e;
              (e =
                m && a(m, 'toml')
                  ? s.default(b)
                  : m && a(m, 'tsconfig.json')
                  ? r.parse(
                      b.replace(
                        /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
                        (e, t) => (t ? '' : e)
                      )
                    )
                  : r.parse(b)),
                (l[f.type] = Object.assign(Object.assign({}, h), {
                  parsed: e,
                }));
            } catch (u) {
              l[f.type] = Object.assign(Object.assign({}, h), {
                error: u,
              });
            }
        }
        return l;
      };
    },
    '../common/lib/templates/configuration/prettierRC/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/prettify-default-config.js')),
        r = {
          title: '.prettierrc',
          type: 'prettier',
          description: 'Defines how all files will be prettified by Prettier.',
          moreInfoUrl: 'https://prettier.io/docs/en/configuration.html',
          generateFileFromState: (e) =>
            JSON.stringify(
              Object.assign(Object.assign({}, s.default), e || {}),
              null,
              2
            ),
          schema:
            'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/prettierrc.json',
        };
      t.default = r;
    },
    '../common/lib/templates/configuration/sandbox/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = {
        title: 'sandbox.config.json',
        type: 'sandbox',
        description: 'Configuration specific to the current sandbox.',
        moreInfoUrl:
          'https://codesandbox.io/docs/configuration#sandbox-configuration',
        getDefaultCode: () =>
          JSON.stringify(
            {
              infiniteLoopProtection: !0,
              hardReloadOnChange: !1,
              view: 'browser',
            },
            null,
            2
          ),
      };
      t.default = o;
    },
    '../common/lib/templates/configuration/tsconfig/index.js': function (
      e,
      t,
      n
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = {
          react: 'React.createElement',
          preact: 'h',
        },
        s = {
          title: 'tsconfig.json',
          type: 'typescript',
          description: 'Configuration for how TypeScript transpiles.',
          moreInfoUrl:
            'http://www.typescriptlang.org/docs/handbook/tsconfig-json.html',
          getDefaultCode: (e, t) => {
            if ('create-react-app-typescript' === e)
              return JSON.stringify(
                {
                  compilerOptions: {
                    outDir: 'build/dist',
                    module: 'esnext',
                    target: 'es5',
                    lib: ['es6', 'dom'],
                    sourceMap: !0,
                    allowJs: !0,
                    jsx: 'react',
                    moduleResolution: 'node',
                    rootDir: 'src',
                    forceConsistentCasingInFileNames: !0,
                    noImplicitReturns: !0,
                    noImplicitThis: !0,
                    noImplicitAny: !0,
                    strictNullChecks: !0,
                    suppressImplicitAnyIndexErrors: !0,
                    noUnusedLocals: !0,
                  },
                  exclude: [
                    'node_modules',
                    'build',
                    'scripts',
                    'acceptance-tests',
                    'webpack',
                    'jest',
                    'src/setupTests.ts',
                  ],
                },
                null,
                2
              );
            if ('parcel' === e) {
              const e = {
                  compilerOptions: {
                    module: 'commonjs',
                    jsx: 'preserve',
                    jsxFactory: void 0,
                    esModuleInterop: !0,
                    sourceMap: !0,
                    allowJs: !0,
                    lib: ['es6', 'dom'],
                    rootDir: 'src',
                    moduleResolution: 'node',
                  },
                },
                s = t('/package.json');
              if (s)
                try {
                  const t = JSON.parse(s.code);
                  let n = null;
                  Object.keys(o).forEach((e) => {
                    ((t.dependencies && t.dependencies[e]) ||
                      (t.devDependencies && t.devDependencies[e])) &&
                      (n = o[e]);
                  }),
                    null !== n &&
                      ((e.compilerOptions.jsx = 'react'),
                      (e.compilerOptions.jsxFactory = n));
                } catch (n) {}
              return JSON.stringify(e, null, 2);
            }
            return 'nest' === e
              ? JSON.stringify(
                  {
                    compilerOptions: {
                      module: 'commonjs',
                      declaration: !0,
                      noImplicitAny: !1,
                      removeComments: !0,
                      noLib: !1,
                      allowSyntheticDefaultImports: !0,
                      emitDecoratorMetadata: !0,
                      experimentalDecorators: !0,
                      target: 'es6',
                      sourceMap: !0,
                      outDir: './dist',
                      baseUrl: './src',
                    },
                  },
                  null,
                  2
                )
              : '@dojo/cli-create-app' === e
              ? JSON.stringify({
                  compilerOptions: {
                    declaration: !1,
                    experimentalDecorators: !0,
                    jsx: 'react',
                    jsxFactory: 'tsx',
                    lib: [
                      'dom',
                      'es5',
                      'es2015.promise',
                      'es2015.iterable',
                      'es2015.symbol',
                      'es2015.symbol.wellknown',
                    ],
                    module: 'commonjs',
                    moduleResolution: 'node',
                    noUnusedLocals: !0,
                    outDir: '_build/',
                    removeComments: !1,
                    importHelpers: !0,
                    downLevelIteration: !0,
                    sourceMap: !0,
                    strict: !0,
                    target: 'es5',
                  },
                })
              : 'angular-cli' === e
              ? JSON.stringify(
                  {
                    compileOnSave: !1,
                    compilerOptions: {
                      baseUrl: './',
                      outDir: './dist/out-tsc',
                      sourceMap: !0,
                      declaration: !1,
                      downlevelIteration: !0,
                      experimentalDecorators: !0,
                      moduleResolution: 'node',
                      importHelpers: !0,
                      target: 'es2015',
                      module: 'es2020',
                      lib: ['es2018', 'dom'],
                    },
                  },
                  null,
                  2
                )
              : JSON.stringify(
                  {
                    compilerOptions: {
                      outDir: 'build/dist',
                      module: 'esnext',
                      target: 'es5',
                      lib: ['es6', 'dom'],
                      sourceMap: !0,
                      allowJs: !0,
                      jsx: 'react',
                      moduleResolution: 'node',
                      rootDir: 'src',
                      forceConsistentCasingInFileNames: !0,
                      noImplicitReturns: !0,
                      noImplicitThis: !0,
                      noImplicitAny: !0,
                      strictNullChecks: !0,
                      suppressImplicitAnyIndexErrors: !0,
                      noUnusedLocals: !0,
                    },
                  },
                  null,
                  2
                );
          },
          schema:
            'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/tsconfig.json',
          partialSupportDisclaimer:
            'Only `compilerOptions` field is supported.',
        };
      t.default = s;
    },
    '../common/lib/templates/custom.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'custom',
        'Custom',
        'https://codesandbox.io',
        'custom',
        r.decorateSelector(() => '#F5DA55'),
        {
          extraConfigurations: {
            '/.codesandbox/template.json': i.default.customCodeSandbox,
          },
        }
      );
    },
    '../common/lib/templates/cxjs.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      class a extends s.default {
        getEntries() {
          return ['/app/index.js', '/src/index.js', '/index.html'];
        }
        getHTMLEntries() {
          return ['/app/index.html', '/src/index.html', '/index.html'];
        }
      }
      t.default = new a(
        'cxjs',
        'CxJS',
        'https://cxjs.io/',
        'github/codaxy/cxjs-codesandbox-template',
        r.decorateSelector(() => '#11689f'),
        {
          showOnHomePage: !0,
          showCube: !1,
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
            '/tsconfig.json': i.default.tsconfig,
          },
          externalResourcesEnabled: !1,
          distDir: 'dist',
        }
      );
    },
    '../common/lib/templates/docusaurus.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.DocusaurusTemplate = void 0);
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      class i extends s.default {
        getDefaultOpenedFiles() {
          return ['/src/pages/index.js'];
        }
      }
      (t.DocusaurusTemplate = i),
        (t.default = new i(
          'docusaurus',
          'Docusaurus',
          'https://docusaurus.io/',
          'github/facebook/docusaurus/tree/master/examples/classic',
          r.decorateSelector(() => '#3ECC5F'),
          {
            mainFile: [],
            distDir: 'build',
            showOnHomePage: !0,
          }
        ));
    },
    '../common/lib/templates/dojo.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.DojoTemplate = void 0);
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      class a extends s.default {
        getHTMLEntries(e) {
          return ['/src/index.html'];
        }
        getEntries(e) {
          const t = super.getEntries(e);
          return t.push('/src/main.ts'), t;
        }
      }
      (t.DojoTemplate = a),
        (t.default = new a(
          '@dojo/cli-create-app',
          'Dojo',
          'https://github.com/dojo/cli-create-app',
          'github/dojo/dojo-codesandbox-template',
          r.decorateSelector(() => '#D3471C'),
          {
            showOnHomePage: !0,
            showCube: !1,
            distDir: 'output/dist',
            isTypescript: !0,
            githubPagesDeploy: !1,
            extraConfigurations: {
              '/tsconfig.json': i.default.tsconfig,
            },
          }
        ));
    },
    '../common/lib/templates/ember.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'ember',
        'Ember',
        'https://emberjs.com/',
        'github/NullVoxPopuli/ember-new-output/tree/stable',
        r.decorateSelector(() => '#E04E39'),
        {
          showOnHomePage: !0,
          main: !1,
          staticDeployment: !1,
        }
      );
    },
    '../common/lib/templates/esmodule-react.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = n('../common/lib/utils/decorate-selector.js'),
        r = o(n('../common/lib/templates/configuration/index.js')),
        i = n('../common/lib/templates/helpers/react-template.js');
      t.default = new i.ReactTemplate(
        'esm-react',
        'React - ESModules',
        'https://github.com/facebookincubator/create-react-app',
        'esm-react',
        s.decorateSelector(() => '#61DAFB'),
        {
          showOnHomePage: !1,
          popular: !1,
          main: !1,
          mainFile: ['/src/index.js', '/src/index.tsx', '/src/index.ts'],
          extraConfigurations: {
            '/jsconfig.json': r.default.jsconfig,
            '/tsconfig.json': r.default.tsconfig,
          },
        }
      );
    },
    '../common/lib/templates/gatsby.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      class a extends s.default {
        getViews() {
          return [
            {
              views: [
                {
                  id: 'codesandbox.browser',
                },
                {
                  id: 'codesandbox.browser',
                  closeable: !0,
                  options: {
                    url: '/___graphql',
                    title: 'GraphiQL',
                  },
                },
              ],
            },
            {
              open: !0,
              views: [
                {
                  id: 'codesandbox.terminal',
                },
                {
                  id: 'codesandbox.console',
                },
                {
                  id: 'codesandbox.problems',
                },
              ],
            },
          ];
        }
      }
      t.default = new a(
        'gatsby',
        'Gatsby',
        'https://www.gatsbyjs.org/',
        'github/gatsbyjs/gatsby-starter-default',
        r.decorateSelector(() => '#8C65B3'),
        {
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
          },
          distDir: 'public',
          mainFile: ['/src/pages/index.js'],
          showOnHomePage: !0,
          main: !0,
          popular: !0,
          showCube: !1,
        }
      );
    },
    '../common/lib/templates/gridsome.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      class i extends s.default {
        getViews() {
          return [
            {
              views: [
                {
                  id: 'codesandbox.browser',
                },
                {
                  id: 'codesandbox.browser',
                  closeable: !0,
                  options: {
                    url: '/___explore',
                    title: 'GraphiQL',
                  },
                },
              ],
            },
            {
              open: !0,
              views: [
                {
                  id: 'codesandbox.terminal',
                },
                {
                  id: 'codesandbox.console',
                },
                {
                  id: 'codesandbox.problems',
                },
              ],
            },
          ];
        }
      }
      t.default = new i(
        'gridsome',
        'Gridsome',
        'https://gridsome.org/',
        'github/SaraVieira/gridsome-starter-codesandbox',
        r.decorateSelector(() => '#00a672'),
        {
          distDir: 'dist',
          mainFile: ['/src/pages/Index.vue'],
          showOnHomePage: !0,
          main: !0,
        }
      );
    },
    '../common/lib/templates/helpers/is-server.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.isServer = void 0);
      const o = [
        'adonis',
        'apollo',
        'ember',
        'gatsby',
        'gridsome',
        'marko',
        'mdx-deck',
        'nest',
        'next',
        'node',
        'nuxt',
        'quasar',
        'sapper',
        'styleguidist',
        'unibit',
        'vuepress',
        'docusaurus',
      ];
      t.isServer = (e) => -1 !== o.indexOf(e);
    },
    '../common/lib/templates/helpers/react-template.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.ReactTemplate = void 0);
      const s = o(n('../common/lib/templates/template.js'));
      class r extends s.default {
        getViews() {
          return [
            {
              views: [
                {
                  id: 'codesandbox.browser',
                },
                {
                  id: 'codesandbox.tests',
                },
              ],
            },
            {
              views: [
                {
                  id: 'codesandbox.console',
                },
                {
                  id: 'codesandbox.problems',
                },
                {
                  id: 'codesandbox.react-devtools',
                },
              ],
            },
          ];
        }
        getDefaultOpenedFiles(e) {
          let t = [];
          return (
            t.push('/src/App.js'),
            t.push('/src/App.tsx'),
            (t = t.concat(this.getEntries(e))),
            t
          );
        }
      }
      t.ReactTemplate = r;
    },
    '../common/lib/templates/index.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.unibit =
          t.quasar =
          t.mdxDeck =
          t.docusaurus =
          t.vuepress =
          t.gridsome =
          t.styleguidist =
          t.staticTemplate =
          t.ember =
          t.nest =
          t.sapper =
          t.vue =
          t.svelte =
          t.reason =
          t.reactTs =
          t.react =
          t.preact =
          t.parcel =
          t.dojo =
          t.cxjs =
          t.babel =
          t.esmReact =
          t.node =
          t.nuxt =
          t.next =
          t.marko =
          t.gatsby =
          t.apollo =
          t.custom =
          t.angular =
          t.adonis =
            void 0);
      const s = o(n('../common/lib/templates/adonis.js'));
      t.adonis = s.default;
      const r = o(n('../common/lib/templates/angular.js'));
      t.angular = r.default;
      const i = o(n('../common/lib/templates/apollo-server.js'));
      t.apollo = i.default;
      const a = o(n('../common/lib/templates/babel.js'));
      t.babel = a.default;
      const l = o(n('../common/lib/templates/custom.js'));
      t.custom = l.default;
      const c = o(n('../common/lib/templates/cxjs.js'));
      t.cxjs = c.default;
      const u = o(n('../common/lib/templates/dojo.js'));
      t.dojo = u.default;
      const d = o(n('../common/lib/templates/ember.js'));
      t.ember = d.default;
      const p = o(n('../common/lib/templates/gatsby.js'));
      t.gatsby = p.default;
      const m = o(n('../common/lib/templates/gridsome.js'));
      t.gridsome = m.default;
      const f = o(n('../common/lib/templates/marko.js'));
      t.marko = f.default;
      const h = o(n('../common/lib/templates/mdx-deck.js'));
      t.mdxDeck = h.default;
      const b = o(n('../common/lib/templates/nest.js'));
      t.nest = b.default;
      const g = o(n('../common/lib/templates/next.js'));
      t.next = g.default;
      const j = o(n('../common/lib/templates/node.js'));
      t.node = j.default;
      const y = o(n('../common/lib/templates/nuxt.js'));
      t.nuxt = y.default;
      const x = o(n('../common/lib/templates/parcel.js'));
      t.parcel = x.default;
      const _ = o(n('../common/lib/templates/preact.js'));
      t.preact = _.default;
      const v = o(n('../common/lib/templates/quasar.js'));
      t.quasar = v.default;
      const w = o(n('../common/lib/templates/react.js'));
      t.react = w.default;
      const O = o(n('../common/lib/templates/react-ts.js'));
      t.reactTs = O.default;
      const S = o(n('../common/lib/templates/reason.js'));
      t.reason = S.default;
      const D = o(n('../common/lib/templates/sapper.js'));
      t.sapper = D.default;
      const P = o(n('../common/lib/templates/static.js'));
      t.staticTemplate = P.default;
      const M = o(n('../common/lib/templates/styleguidist.js'));
      t.styleguidist = M.default;
      const k = o(n('../common/lib/templates/svelte.js'));
      t.svelte = k.default;
      const R = o(n('../common/lib/templates/unibit.js'));
      t.unibit = R.default;
      const E = o(n('../common/lib/templates/vue.js'));
      t.vue = E.default;
      const U = o(n('../common/lib/templates/vuepress.js'));
      t.vuepress = U.default;
      const A = o(n('../common/lib/templates/docusaurus.js'));
      t.docusaurus = A.default;
      const C = o(n('../common/lib/templates/esmodule-react.js'));
      (t.esmReact = C.default),
        (t.default = function (e) {
          switch (e) {
            case s.default.name:
              return s.default;
            case w.default.name:
              return w.default;
            case E.default.name:
              return E.default;
            case _.default.name:
              return _.default;
            case O.default.name:
              return O.default;
            case k.default.name:
              return k.default;
            case r.default.name:
              return r.default;
            case x.default.name:
              return x.default;
            case a.default.name:
              return a.default;
            case c.default.name:
              return c.default;
            case u.default.name:
              return u.default;
            case l.default.name:
              return l.default;
            case p.default.name:
              return p.default;
            case f.default.name:
              return f.default;
            case y.default.name:
              return y.default;
            case g.default.name:
              return g.default;
            case S.default.name:
              return S.default;
            case j.default.name:
              return j.default;
            case i.default.name:
              return i.default;
            case D.default.name:
              return D.default;
            case b.default.name:
              return b.default;
            case P.default.name:
              return P.default;
            case M.default.name:
              return M.default;
            case h.default.name:
              return h.default;
            case m.default.name:
              return m.default;
            case d.default.name:
              return d.default;
            case U.default.name:
              return U.default;
            case A.default.name:
              return A.default;
            case v.default.name:
              return v.default;
            case R.default.name:
              return R.default;
            case C.default.name:
              return C.default;
            default:
              return w.default;
          }
        });
    },
    '../common/lib/templates/marko.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'marko',
        'Marko',
        'https://markojs.com/',
        'github/nm123github/marko-codesandbox',
        r.decorateSelector(() => '#f5ac00'),
        {
          showOnHomePage: !0,
          main: !1,
          staticDeployment: !1,
        }
      );
    },
    '../common/lib/templates/mdx-deck.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'mdx-deck',
        'MDX Deck',
        'https://github.com/jxnblk/mdx-deck',
        'github/jxnblk/mdx-deck/tree/master/templates/basic',
        r.decorateSelector(() => '#FAD961'),
        {
          distDir: 'dist',
          mainFile: ['deck.mdx'],
          showOnHomePage: !0,
          githubPagesDeploy: !1,
        }
      );
    },
    '../common/lib/templates/nest.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'nest',
        'Nest',
        'https://nestjs.com/',
        'github/nestjs/typescript-starter',
        r.decorateSelector(() => '#ed2945'),
        {
          extraConfigurations: {
            '/tsconfig.json': i.default.tsconfig,
          },
          mainFile: ['/src/main.ts'],
          showOnHomePage: !0,
          staticDeployment: !1,
        }
      );
    },
    '../common/lib/templates/next.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'next',
        'Next.js',
        'https://nextjs.org/',
        'github/zeit/next.js/tree/master/examples/hello-world',
        r.decorateSelector(() => '#ffffff'),
        {
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
          },
          distDir: 'out',
          staticDeployment: !1,
          mainFile: ['/pages/index.js'],
          backgroundColor: r.decorateSelector(() => '#000000'),
          showOnHomePage: !0,
          main: !0,
          popular: !0,
          showCube: !1,
        }
      );
    },
    '../common/lib/templates/node.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'node',
        'Node',
        'https://codesandbox.io/docs/environment#container-environment',
        'node',
        r.decorateSelector(() => '#66cc33'),
        {
          showOnHomePage: !0,
          main: !0,
          staticDeployment: !1,
          popular: !0,
          mainFile: [
            '/pages/index.vue',
            '/pages/index.js',
            '/src/pages/index.js',
          ],
        }
      );
    },
    '../common/lib/templates/nuxt.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'nuxt',
        'Nuxt.js',
        'https://nuxtjs.org/',
        'github/nuxt/codesandbox-nuxt',
        r.decorateSelector(() => '#3B8070'),
        {
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
          },
          distDir: 'dist',
          popular: !0,
          mainFile: ['/pages/index.vue'],
          showOnHomePage: !0,
          main: !0,
          showCube: !1,
        }
      );
    },
    '../common/lib/templates/parcel.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.ParcelTemplate = void 0);
      const s = n('../common/lib/utils/path.js'),
        r = o(n('../common/lib/templates/template.js')),
        i = n('../common/lib/utils/decorate-selector.js'),
        a = o(n('../common/lib/templates/configuration/index.js'));
      class l extends r.default {
        getEntries(e) {
          const t = [];
          return (
            'undefined' !== typeof document &&
              '/' !== document.location.pathname &&
              t.push(document.location.pathname),
            t.push(
              e.package &&
                e.package.parsed &&
                e.package.parsed.main &&
                s.absolute(e.package.parsed.main)
            ),
            t.push('/index.html'),
            t.push('/src/index.html'),
            t.filter(Boolean)
          );
        }
        getDefaultOpenedFiles(e) {
          let t = [];
          return (
            t.push('/index.js'),
            t.push('/src/index.js'),
            t.push('/index.ts'),
            t.push('/src/index.ts'),
            (t = t.concat(this.getEntries(e))),
            t
          );
        }
      }
      (t.ParcelTemplate = l),
        (t.default = new l(
          'parcel',
          'Vanilla',
          'https://parceljs.org/',
          'vanilla',
          i.decorateSelector(() => '#dfb07a'),
          {
            showOnHomePage: !0,
            showCube: !0,
            extraConfigurations: {
              '/.babelrc': a.default.babelrc,
              '/tsconfig.json': a.default.tsconfig,
            },
            externalResourcesEnabled: !1,
            distDir: 'dist',
            main: !0,
            isTypescript: !0,
            popular: !0,
          }
        ));
    },
    '../common/lib/templates/preact.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'preact-cli',
        'Preact',
        'https://github.com/developit/preact-cli',
        'preact',
        r.decorateSelector(() => '#AD78DC'),
        {
          showOnHomePage: !0,
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
          },
          defaultOpenedFile: ['/src/app.js'],
          githubPagesDeploy: !1,
        }
      );
    },
    '../common/lib/templates/quasar.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'quasar',
        'Quasar',
        'https://quasar-framework.org/',
        'github/quasarframework/quasar-codesandbox',
        r.decorateSelector(() => '#43A4F2'),
        {
          mainFile: ['/src/pages/Index.vue'],
          showOnHomePage: !0,
          staticDeployment: !1,
        }
      );
    },
    '../common/lib/templates/react-ts.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = n('../common/lib/utils/decorate-selector.js'),
        r = n('../common/lib/templates/helpers/react-template.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new r.ReactTemplate(
        'create-react-app-typescript',
        'React + TS',
        'https://github.com/wmonk/create-react-app-typescript',
        'react-ts',
        s.decorateSelector(() => '#009fff'),
        {
          isTypescript: !0,
          showOnHomePage: !1,
          extraConfigurations: {
            '/tsconfig.json': i.default.tsconfig,
          },
        }
      );
    },
    '../common/lib/templates/react.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = n('../common/lib/utils/decorate-selector.js'),
        r = o(n('../common/lib/templates/configuration/index.js')),
        i = n('../common/lib/templates/helpers/react-template.js');
      t.default = new i.ReactTemplate(
        'create-react-app',
        'React',
        'https://github.com/facebookincubator/create-react-app',
        'new',
        s.decorateSelector(() => '#61DAFB'),
        {
          showOnHomePage: !0,
          popular: !0,
          main: !0,
          mainFile: ['/src/index.js', '/src/index.tsx', '/src/index.ts'],
          extraConfigurations: {
            '/jsconfig.json': r.default.jsconfig,
            '/tsconfig.json': r.default.tsconfig,
          },
        }
      );
    },
    '../common/lib/templates/reason.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'reason',
        'Reason',
        'https://reasonml.github.io/reason-react/en/',
        'reason',
        r.decorateSelector(() => '#CB5747'),
        {
          showOnHomePage: !0,
          main: !1,
          staticDeployment: !1,
          mainFile: ['/src/Main.re', 'App.re', 'Index.re'],
        }
      );
    },
    '../common/lib/templates/sapper.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/configuration/index.js')),
        r = o(n('../common/lib/templates/template.js')),
        i = n('../common/lib/utils/decorate-selector.js'),
        a = Object.assign(Object.assign({}, s.default.sandboxConfig), {
          getDefaultCode: () =>
            JSON.stringify(
              {
                container: {
                  port: 3e3,
                },
              },
              null,
              2
            ),
        });
      t.default = new r.default(
        'sapper',
        'Sapper',
        'https://sapper.svelte.dev/',
        'github/codesandbox-app/sapper-template',
        i.decorateSelector(() => '#159497'),
        {
          extraConfigurations: {
            '/sandbox.config.json': a,
          },
          staticDeployment: !1,
          mainFile: ['/src/routes/index.html'],
          showOnHomePage: !0,
        }
      );
    },
    '../common/lib/templates/static.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'static',
        'Static',
        'https://developer.mozilla.org/en-US/docs/Learn/HTML',
        'github/codesandbox-app/static-template',
        r.decorateSelector(() => '#3AA855'),
        {
          showOnHomePage: !0,
          distDir: './',
          main: !1,
          mainFile: ['/index.html'],
        }
      );
    },
    '../common/lib/templates/styleguidist.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      t.default = new s.default(
        'styleguidist',
        'Styleguidist',
        'https://react-styleguidist.js.org/',
        'github/styleguidist/example',
        r.decorateSelector(() => '#25d8fc'),
        {
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
          },
          distDir: 'styleguide',
          mainFile: [],
          showOnHomePage: !0,
          githubPagesDeploy: !1,
        }
      );
    },
    '../common/lib/templates/svelte.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'svelte',
        'Svelte',
        'https://svelte.dev',
        'svelte',
        r.decorateSelector(() => '#FF3E00'),
        {
          showOnHomePage: !0,
          showCube: !1,
          distDir: 'public',
          mainFile: ['/app.svelte'],
        }
      );
    },
    '../common/lib/templates/template.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = n('../common/lib/utils/path.js'),
        r = o(n('../common/lib/templates/configuration/index.js')),
        i = n('../common/lib/templates/helpers/is-server.js'),
        a = {
          '/package.json': r.default.packageJSON,
          '/.prettierrc': r.default.prettierRC,
          '/sandbox.config.json': r.default.sandboxConfig,
          '/vercel.json': r.default.nowConfig,
          '/netlify.toml': r.default.netlifyConfig,
        },
        l = [
          {
            views: [
              {
                id: 'codesandbox.browser',
              },
              {
                id: 'codesandbox.tests',
              },
            ],
          },
          {
            views: [
              {
                id: 'codesandbox.console',
              },
              {
                id: 'codesandbox.problems',
              },
            ],
          },
        ],
        c = [
          {
            views: [
              {
                id: 'codesandbox.browser',
              },
            ],
          },
          {
            open: !0,
            views: [
              {
                id: 'codesandbox.terminal',
              },
              {
                id: 'codesandbox.console',
              },
              {
                id: 'codesandbox.problems',
              },
            ],
          },
        ];
      t.default = class {
        constructor(e, t, n, o, s, r = {}) {
          (this.alterDeploymentData = (e) => {
            const t = e.files.find((e) => 'package.json' === e.file),
              n = JSON.parse(t.data),
              o = Object.assign(Object.assign({}, n), {
                devDependencies: Object.assign(
                  Object.assign({}, n.devDependencies),
                  {
                    serve: '^10.1.1',
                  }
                ),
                scripts: Object.assign(
                  {
                    'now-start': `cd ${this.distDir} && serve -s ./`,
                  },
                  n.scripts
                ),
              });
            return Object.assign(Object.assign({}, e), {
              files: [
                ...e.files.filter((e) => 'package.json' !== e.file),
                {
                  file: 'package.json',
                  data: JSON.stringify(o, null, 2),
                },
              ],
            });
          }),
            (this.name = e),
            (this.niceName = t),
            (this.url = n),
            (this.shortid = o),
            (this.color = s),
            (this.popular = r.popular || !1),
            (this.isServer = i.isServer(this.name)),
            (this.main = r.main || !1),
            (this.showOnHomePage = r.showOnHomePage || !1),
            (this.distDir = r.distDir || 'build'),
            (this.configurationFiles = Object.assign(
              Object.assign({}, a),
              r.extraConfigurations || {}
            )),
            (this.isTypescript = r.isTypescript || !1),
            (this.externalResourcesEnabled =
              null == r.externalResourcesEnabled || r.externalResourcesEnabled),
            (this.mainFile = r.mainFile),
            (this.staticDeployment = r.staticDeployment),
            (this.githubPagesDeploy = r.githubPagesDeploy),
            (this.backgroundColor = r.backgroundColor),
            (this.showCube = null == r.showCube || r.showCube),
            (this.defaultOpenedFile = r.defaultOpenedFile || []);
        }
        getMainFromPackage(e) {
          try {
            if (!e.main) return;
            if (Array.isArray(e.main)) return s.absolute(e.main[0]);
            if ('string' === typeof e.main) return s.absolute(e.main);
          } catch (t) {
            console.log(t);
          }
        }
        getEntries(e) {
          var t;
          return [
            (null === (t = e.package) || void 0 === t ? void 0 : t.parsed) &&
              this.getMainFromPackage(e.package.parsed),
            ...(this.mainFile || []),
            '/index.' + (this.isTypescript ? 'ts' : 'js'),
            '/src/index.' + (this.isTypescript ? 'ts' : 'js'),
            '/src/index.ts',
            '/src/index.tsx',
            '/src/index.js',
            '/src/pages/index.js',
            '/src/pages/index.vue',
            '/index.js',
            '/index.ts',
            '/index.tsx',
            '/README.md',
            '/package.json',
          ].filter((e) => e);
        }
        getDefaultOpenedFiles(e) {
          return [...this.defaultOpenedFile, ...this.getEntries(e)];
        }
        getViews(e) {
          return this.isServer ? c : l;
        }
        getHTMLEntries(e) {
          return ['/public/index.html', '/index.html'];
        }
      };
    },
    '../common/lib/templates/unibit.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      t.default = new s.default(
        'unibit',
        'Unibit',
        'https://www.stackbit.com',
        'github/stackbithq/stackbit-theme-universal/tree/master/',
        r.decorateSelector(() => '#3EB0FD'),
        {
          distDir: 'public',
          popular: !0,
          mainFile: ['README.md'],
          showOnHomePage: !0,
          main: !1,
          showCube: !1,
        }
      );
    },
    '../common/lib/templates/vue.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js'),
        i = o(n('../common/lib/templates/configuration/index.js'));
      class a extends s.default {
        getEntries(e) {
          const t = super.getEntries(e);
          return t.push('/src/main.js'), t.push('/main.js'), t;
        }
        getHTMLEntries() {
          return ['/static/index.html', '/public/index.html', '/index.html'];
        }
      }
      t.default = new a(
        'vue-cli',
        'Vue',
        'https://github.com/vuejs/vue-cli',
        'vue',
        r.decorateSelector(() => '#41B883'),
        {
          showOnHomePage: !0,
          extraConfigurations: {
            '/.babelrc': i.default.babelrc,
            '/tsconfig.json': i.default.tsconfig,
          },
          distDir: 'dist',
          main: !0,
          popular: !0,
          mainFile: ['/src/main.js', '/src/main.ts'],
        }
      );
    },
    '../common/lib/templates/vuepress.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.VuePressTemplate = void 0);
      const s = o(n('../common/lib/templates/template.js')),
        r = n('../common/lib/utils/decorate-selector.js');
      class i extends s.default {
        getDefaultOpenedFiles() {
          return ['/README.md', '/guide/README.md'];
        }
      }
      (t.VuePressTemplate = i),
        (t.default = new i(
          'vuepress',
          'VuePress',
          'https://vuepress.vuejs.org/',
          'github/vicbergquist/codesandbox-vuepress',
          r.decorateSelector(() => '#4abf8a'),
          {
            mainFile: [],
            distDir: '.vuepress/dist',
            showOnHomePage: !0,
          }
        ));
    },
    '../common/lib/utils/ci.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.formatVersion = t.CSB_PKG_PROTOCOL = void 0),
        (t.CSB_PKG_PROTOCOL = /https:\/\/pkg(-staging)?\.csb.dev/),
        (t.formatVersion = (e) => {
          if (t.CSB_PKG_PROTOCOL.test(e)) {
            const t = e.match(/commit\/([\w\d]*)\//);
            if (t && t[1]) return 'csb:' + t[1];
          }
          return e;
        });
    },
    '../common/lib/utils/debug.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const o = n('../common/lib/utils/global.js');
      t.default = (() => {
        if (
          'undefined' === typeof document ||
          !document.location.search.includes('debug')
        ) {
          const e = o.getGlobal();
          return (t) => (n) => {
            if ('object' === typeof e.Raven)
              try {
                e.Raven.captureBreadcrumb({
                  message: `${t} - ${n}`,
                  category: 'logging',
                });
              } catch (o) {
                console.error(o);
              }
          };
        }
        return n('../../node_modules/debug/src/browser.js');
      })();
    },
    '../common/lib/utils/decorate-selector.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.decorateSelector = void 0);
      const s = o(n('../common/node_modules/memoize-one/esm/index.js')),
        r = o(n('../common/node_modules/color/index.js')),
        i = [
          'negate',
          'lighten',
          'darken',
          'saturate',
          'desaturate',
          'greyscale',
          'whiten',
          'blacken',
          'clearer',
          'opaquer',
          'rotate',
        ];
      t.decorateSelector = (e) => (
        i.forEach((n) => {
          e[n] = s.default((...o) =>
            t.decorateSelector(
              (
                (e, t, ...n) =>
                (...o) =>
                  r
                    .default(e(...o))
                    [t](...n)
                    .rgbString()
              )(e, n, ...o)
            )
          );
        }),
        e
      );
    },
    '../common/lib/utils/delay.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.default = function (e = 1e3) {
          return new Promise((t) => setTimeout(t, e));
        });
    },
    '../common/lib/utils/global.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.commonPostMessage = t.getGlobal = void 0);
      const o = n('../common/lib/utils/url-generator.js');

      function s() {
        try {
          if ('undefined' !== typeof window) return window;
          if ('undefined' !== typeof self) {
            return self;
          }
          if ('undefined' !== typeof r) return r;
        } catch (e) {}
        return {};
      }
      t.getGlobal = s;
      const r = s();
      t.commonPostMessage = function (e) {
        'undefined' !== typeof Window
          ? r.postMessage(e, o.protocolAndHost())
          : r.postMessage(e);
      };
    },
    '../common/lib/utils/is-babel-7.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.isBabel7 = void 0);
      const s = o(n('../common/node_modules/semver/index.js'));
      t.isBabel7 = function (e = {}, t = {}) {
        if (e['@vue/cli-plugin-babel'] || t['@vue/cli-plugin-babel']) return !0;
        if (t['@babel/core'] || e['@babel/core']) return !0;
        if (e.svelte || t.svelte) {
          const n = e.svelte || t.svelte;
          return s.default.gte(s.default.minVersion(n), '3.0.0');
        }
        return (
          ('typescript' in t && !e['@angular/core']) ||
          !!(function (e, t) {
            const n = e['react-scripts'] || t['react-scripts'];
            return (
              !!n &&
              (/^[a-z]/.test(n) ||
                s.default.intersects(n, '^2.0.0') ||
                s.default.intersects(n, '^3.0.0') ||
                s.default.intersects(n, '^4.0.0'))
            );
          })(e, t)
        );
      };
    },
    '../common/lib/utils/is-preact-10.js': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.isPreact10 = void 0);
      const s = o(n('../common/node_modules/semver/index.js'));
      t.isPreact10 = function (e, t) {
        const n = (e || {}).preact || (t || {}).preact;
        return !!n && (/^[a-z]/.test(n) || s.default.intersects(n, '>=10.0.0'));
      };
    },
    '../common/lib/utils/path.js': function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', {
          value: !0,
        }),
          (t.relative =
            t.resolve =
            t.extname =
            t.absolute =
            t.basename =
            t.dirname =
            t.join =
            t.normalize =
            t.isAbsolute =
              void 0);
        const n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;

        function o(e, t) {
          const n = [];
          for (let o = 0; o < e.length; o += 1) {
            const s = e[o];
            s &&
              '.' !== s &&
              ('..' === s
                ? n.length && '..' !== n[n.length - 1]
                  ? n.pop()
                  : t && n.push('..')
                : n.push(s));
          }
          return n;
        }

        function s(e) {
          return '/' === e.charAt(0);
        }

        function r(e) {
          const t = s(e),
            n = e && '/' === e[e.length - 1];
          let r = e;
          return (
            (r = o(r.split('/'), !t).join('/')),
            r || t || (r = '.'),
            r && n && (r += '/'),
            (t ? '/' : '') + r
          );
        }

        function i(...t) {
          let n = '',
            s = !1;
          for (let o = t.length - 1; o >= -1 && !s; o--) {
            const r = o >= 0 ? t[o] : e.cwd();
            if ('string' !== typeof r)
              throw new TypeError('Arguments to path.resolve must be strings');
            r && ((n = r + '/' + n), (s = '/' === r[0]));
          }
          return (n = o(n.split('/'), !s).join('/')), (s ? '/' : '') + n || '.';
        }

        function a(e) {
          const t = e.length - 1;
          let n = 0;
          for (; n <= t && !e[n]; n++);
          let o = t;
          for (; o >= 0 && !e[o]; o--);
          return 0 === n && o === t ? e : n > o ? [] : e.slice(n, o + 1);
        }
        (t.isAbsolute = s),
          (t.normalize = r),
          (t.join = function (...e) {
            let t = '';
            for (let n = 0; n < e.length; n += 1) {
              const o = e[n];
              if ('string' !== typeof o)
                throw new TypeError('Arguments to path.join must be strings');
              o && (t += t ? '/' + o : o);
            }
            return r(t);
          }),
          (t.dirname = function (e) {
            const t = ((o = e), n.exec(o).slice(1));
            var o;
            const s = t[0];
            let r = t[1];
            return s || r ? (r && (r = r.substr(0, r.length - 1)), s + r) : '.';
          }),
          (t.basename = function (e, t = '') {
            if ('' === e) return e;
            const n = r(e).split('/'),
              o = n[n.length - 1];
            if ('' === o && n.length > 1) return n[n.length - 2];
            if (t.length > 0) {
              if (o.substr(o.length - t.length) === t)
                return o.substr(0, o.length - t.length);
            }
            return o;
          }),
          (t.absolute = function (e) {
            return e.startsWith('/')
              ? e
              : e.startsWith('./')
              ? e.replace('./', '/')
              : '/' + e;
          }),
          (t.extname = function (e) {
            !(function (e) {
              if ('string' !== typeof e)
                throw new TypeError(
                  'Path must be a string. Received ' + JSON.stringify(e)
                );
            })(e);
            let t = -1,
              n = 0,
              o = -1,
              s = !0,
              r = 0;
            for (let i = e.length - 1; i >= 0; --i) {
              const a = e.charCodeAt(i);
              if (47 !== a)
                -1 === o && ((s = !1), (o = i + 1)),
                  46 === a
                    ? -1 === t
                      ? (t = i)
                      : 1 !== r && (r = 1)
                    : -1 !== t && (r = -1);
              else if (!s) {
                n = i + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === o ||
              0 === r ||
              (1 === r && t === o - 1 && t === n + 1)
              ? ''
              : e.slice(t, o);
          }),
          (t.resolve = i),
          (t.relative = function (e, t) {
            (e = i(e).substr(1)), (t = i(t).substr(1));
            const n = a(e.split('/')),
              o = a(t.split('/')),
              s = Math.min(n.length, o.length);
            let r = s;
            for (let i = 0; i < s; i++)
              if (n[i] !== o[i]) {
                r = i;
                break;
              }
            let l = [];
            for (let i = r; i < n.length; i++) l.push('..');
            return (l = l.concat(o.slice(r))), l.join('/');
          });
      }.call(this, n('../../node_modules/process/browser.js')));
    },
    '../common/lib/utils/slugify.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.default = function (e) {
          const t =
              '\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xdf\xff\u0153\xe6\u0155\u015b\u0144\u1e55\u1e83\u01f5\u01f9\u1e3f\u01d8\u1e8d\u017a\u1e27\xb7/_,:;',
            n = new RegExp(t.split('').join('|'), 'g');
          return e
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(n, (e) =>
              'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'.charAt(
                t.indexOf(e)
              )
            )
            .replace(/&/g, '-and-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
        });
    },
    '../common/lib/utils/url-generator.js': function (e, t, n) {
      'use strict';
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, o) {
                void 0 === o && (o = n), (e[o] = t[n]);
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, 'default', {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        r =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                'default' !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  o(t, e, n);
            return s(t, e), t;
          };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.dashboard =
          t.teamInviteLink =
          t.getSandboxId =
          t.privacyUrl =
          t.tosUrl =
          t.curatorUrl =
          t.patronUrl =
          t.searchUrl =
          t.gitHubToSandboxBetaUrl =
          t.gitHubToSandboxUrl =
          t.optionsToParameterizedUrl =
          t.githubRepoUrl =
          t.profileLikesUrl =
          t.profileSandboxesUrl =
          t.teamOverviewUrl =
          t.exploreUrl =
          t.dashboardUrl =
          t.profileUrl =
          t.signInVercelUrl =
          t.signInUrl =
          t.signInPageUrl =
          t.forkSandboxUrl =
          t.frameUrl =
          t.embedUrl =
          t.sandboxUrl =
          t.editorUrl =
          t.uploadFromCliUrl =
          t.newCxJSSandboxUrl =
          t.newAngularSandboxUrl =
          t.newSvelteSandboxUrl =
          t.importFromGitHubUrl =
          t.newVueSandboxUrl =
          t.newPreactSandboxUrl =
          t.newDojoSandboxUrl =
          t.newReactTypeScriptSandboxUrl =
          t.parcelSandboxUrl =
          t.newSandboxUrl =
          t.newSandboxWizard =
          t.protocolAndHost =
          t.host =
          t.gitHubRepoPattern =
            void 0);
      const i = n('../common/lib/templates/helpers/is-server.js'),
        a = r(n('../common/lib/utils/url-generator/dashboard.js'));
      (t.dashboard = a),
        (t.gitHubRepoPattern =
          /(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/);
      const l = /(https?:\/\/)?((www.)?)github.com/,
        c = /(\.git)$/,
        u = {
          'https://codesandbox.io': 'https://csb.app',
          'https://codesandbox.stream': 'https://codesandbox.dev',
        },
        d = (e, ...t) =>
          e[0] +
          t.map((t, n) => `${encodeURIComponent(t)}${e[n + 1]}`).join('');
      (t.host = () => 'https://codesandbox.io'.split('//')[1]),
        (t.protocolAndHost = () => `${location.protocol}//${t.host()}`),
        (t.newSandboxWizard = () => '/s'),
        (t.newSandboxUrl = () => '/s/new'),
        (t.parcelSandboxUrl = () => '/s/vanilla'),
        (t.newReactTypeScriptSandboxUrl = () => '/s/react-ts'),
        (t.newDojoSandboxUrl = () =>
          '/s/github/dojo/dojo-codesandbox-template'),
        (t.newPreactSandboxUrl = () => '/s/preact'),
        (t.newVueSandboxUrl = () => '/s/vue'),
        (t.importFromGitHubUrl = () => '/s/github'),
        (t.newSvelteSandboxUrl = () => '/s/svelte'),
        (t.newAngularSandboxUrl = () => '/s/angular'),
        (t.newCxJSSandboxUrl = () =>
          '/s/github/codaxy/cxjs-codesandbox-template'),
        (t.uploadFromCliUrl = () => '/s/cli');
      const p = (e) =>
        d`github/${e.username}/${e.repo}/tree/${e.branch}/` + e.path;
      (t.editorUrl = () => '/s/'),
        (t.sandboxUrl = (e) => {
          if (e.git) {
            const { git: n } = e;
            return `${t.editorUrl()}${p(n)}`;
          }
          return e.alias
            ? `${t.editorUrl()}${e.alias}`
            : `${t.editorUrl()}${e.id}`;
        }),
        (t.embedUrl = (e) => {
          if (e.git) {
            const { git: t } = e;
            return '/embed/' + p(t);
          }
          return e.alias ? '/embed/' + e.alias : '/embed/' + e.id;
        });
      (t.frameUrl = (
        e,
        n = '',
        { useFallbackDomain: o = !1, port: s } = {}
      ) => {
        const r = 0 === n.indexOf('/') ? n.substr(1) : n,
          a = i.isServer(e.template);
        let l = t.host();
        return (
          !('https://' + l in u) ||
            o ||
            a ||
            (l = u['https://' + l].split('//')[1]),
          `${location.protocol}//${e.id}${s ? '-' + s : ''}.${
            a ? 'sse.' : ''
          }${l}/${r}`
        );
      }),
        (t.forkSandboxUrl = (e) => t.sandboxUrl(e) + '/fork'),
        (t.signInPageUrl = (e) => {
          let t = '/signin';
          return e && (t += '?continue=' + e), t;
        }),
        (t.signInUrl = (e = !1) =>
          '/auth/github' + (e ? '?scope=user:email,public_repo' : '')),
        (t.signInVercelUrl = () => '/auth/vercel'),
        (t.profileUrl = (e) => '/u/' + e),
        (t.dashboardUrl = () => '/dashboard'),
        (t.exploreUrl = () => '/explore'),
        (t.teamOverviewUrl = (e) => '/dashboard/teams/' + e),
        (t.profileSandboxesUrl = (e, n) =>
          `${t.profileUrl(e)}/sandboxes${n ? '/' + n : ''}`),
        (t.profileLikesUrl = (e, n) =>
          `${t.profileUrl(e)}/likes${n ? '/' + n : ''}`),
        (t.githubRepoUrl = ({ repo: e, branch: t, username: n, path: o }) =>
          d`https://github.com/${n}/${e}/tree/${t}/` + o),
        (t.optionsToParameterizedUrl = (e) => {
          const t = Object.keys(e)
            .sort()
            .filter((t) => e[t])
            .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
            .join('&');
          return t ? '?' + t : '';
        }),
        (t.gitHubToSandboxUrl = (e) =>
          e.replace(l, '/s/github').replace(c, '')),
        (t.gitHubToSandboxBetaUrl = (e) =>
          e
            .replace(l, '/github')
            .replace(c, '')
            .replace(/\/tree\//, '/')),
        (t.searchUrl = (e) => '/search' + (e ? '?query=' + e : '')),
        (t.patronUrl = () => '/patron'),
        (t.curatorUrl = () => '/curator'),
        (t.tosUrl = () => '/legal/terms'),
        (t.privacyUrl = () => '/legal/privacy'),
        (t.getSandboxId = function () {
          const e = 'https://codesandbox.io';
          let t;
          if (
            ([e, u[e]].filter(Boolean).forEach((e) => {
              const n = e.replace(/https?:\/\//, '').replace(/\./g, '\\.'),
                o = new RegExp('(.*)\\.' + n),
                s = document.location.host.match(o);
              s && (t = s[1]);
            }),
            !t)
          )
            throw new Error("Can't detect sandbox ID from the current URL");
          return t;
        }),
        (t.teamInviteLink = (e) => `${t.protocolAndHost()}/invite/${e}`);
    },
    '../common/lib/utils/url-generator/dashboard.js': function (e, t, n) {
      'use strict';

      function o(e, t) {
        return t ? `${e}?workspace=${t}` : e;
      }
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.discoverSearch =
          t.discover =
          t.search =
          t.createTeam =
          t.teamInvite =
          t.permissionSettings =
          t.registrySettings =
          t.settings =
          t.home =
          t.liked =
          t.shared =
          t.deleted =
          t.recents =
          t.templates =
          t.alwaysOn =
          t.repos =
          t.drafts =
          t.beta =
          t.allSandboxes =
          t.ALL_SANDBOXES_URL_PREFIX =
          t.DASHBOARD_URL_PREFIX =
            void 0),
        (t.DASHBOARD_URL_PREFIX = '/dashboard'),
        (t.ALL_SANDBOXES_URL_PREFIX = t.DASHBOARD_URL_PREFIX + '/all'),
        (t.allSandboxes = (e, n) =>
          o(
            `${t.ALL_SANDBOXES_URL_PREFIX}${(function (e) {
              return e
                .split('/')
                .map((e) => e.split(' ').map(encodeURIComponent).join(' '))
                .join('/');
            })(e)}`,
            n
          )),
        (t.beta = () => t.DASHBOARD_URL_PREFIX + '/beta'),
        (t.drafts = (e) => o(t.DASHBOARD_URL_PREFIX + '/drafts', e)),
        (t.repos = (e) => o(t.DASHBOARD_URL_PREFIX + '/repositories', e)),
        (t.alwaysOn = (e) => o(t.DASHBOARD_URL_PREFIX + '/always-on', e)),
        (t.templates = (e) => o(t.DASHBOARD_URL_PREFIX + '/templates', e)),
        (t.recents = (e) => o(t.DASHBOARD_URL_PREFIX + '/recent', e)),
        (t.deleted = (e) => o(t.DASHBOARD_URL_PREFIX + '/deleted', e)),
        (t.shared = (e) => o(t.DASHBOARD_URL_PREFIX + '/shared', e)),
        (t.liked = (e) => o(t.DASHBOARD_URL_PREFIX + '/liked', e)),
        (t.home = (e) => o(t.DASHBOARD_URL_PREFIX + '/home', e)),
        (t.settings = (e) => o(t.DASHBOARD_URL_PREFIX + '/settings', e)),
        (t.registrySettings = (e) =>
          o(t.DASHBOARD_URL_PREFIX + '/settings/npm-registry', e)),
        (t.permissionSettings = (e) =>
          o(t.DASHBOARD_URL_PREFIX + '/settings/permissions', e)),
        (t.teamInvite = (e) =>
          o(t.DASHBOARD_URL_PREFIX + '/settings/invite', e)),
        (t.createTeam = (e) => o(t.DASHBOARD_URL_PREFIX + '/settings/new', e)),
        (t.search = (e, n) => {
          let s = o(t.DASHBOARD_URL_PREFIX + '/search', n);
          return (
            s.includes('?') ? (s += '&') : (s += '?'), (s += 'query=' + e), s
          );
        }),
        (t.discover = (e, n) =>
          o(
            n
              ? `${t.DASHBOARD_URL_PREFIX}/discover/${n}`
              : t.DASHBOARD_URL_PREFIX + '/discover',
            e
          )),
        (t.discoverSearch = (e, n) => {
          let s = o(t.DASHBOARD_URL_PREFIX + '/discover/search', n);
          return (
            s.includes('?') ? (s += '&') : (s += '?'), (s += 'query=' + e), s
          );
        });
    },
    '../common/lib/version.js': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.default = t.getTimestamp = void 0);
      Math.floor(1631030561.285);
      t.getTimestamp = function (e) {
        return +e.split('-')[1];
      };
      t.default = 'PROD-1631030561-de6545166';
    },
    './config/polyfills.js': function (e, t, n) {
      const o = 'undefined' === typeof window ? self : window;
      'undefined' === typeof Promise &&
        (n('./node_modules/promise/lib/rejection-tracking.js').enable(),
        (o.Promise = n('./node_modules/promise/lib/es6-extensions.js'))),
        n('../../node_modules/whatwg-fetch/fetch.js'),
        (o.cosmiconfig = {}),
        (o.prettier = {}),
        (o.jsdom = {
          JSDOM: {
            fragment: function (e) {
              var t = document.createElement('div');
              return (t.innerHTML = e.trim()), t;
            },
          },
        }),
        n('../../node_modules/core-js/fn/array/find.js'),
        n('../../node_modules/core-js/fn/array/from.js'),
        n('../../node_modules/core-js/fn/object/assign.js'),
        n('../../node_modules/core-js/fn/symbol/index.js');
    },
    './config/stubs/lru-cache.js': function (e, t, n) {
      'use strict';
      e.exports = g;
      var o,
        s = n('../../node_modules/pseudomap/map.js'),
        r = n('../../node_modules/node-libs-browser/node_modules/util/util.js'),
        i = n('./node_modules/yallist/yallist.js'),
        a = (o =
          'function' === typeof Symbol
            ? function (e) {
                return Symbol(e);
              }
            : function (e) {
                return '_' + e;
              })('max'),
        l = o('length'),
        c = o('lengthCalculator'),
        u = o('allowStale'),
        d = o('maxAge'),
        p = o('dispose'),
        m = o('noDisposeOnSet'),
        f = o('lruList'),
        h = o('cache');

      function b() {
        return 1;
      }

      function g(e) {
        if (!(this instanceof g)) return new g(e);
        'number' === typeof e &&
          (e = {
            max: e,
          }),
          e || (e = {});
        var t = (this[a] = e.max);
        (!t || 'number' !== typeof t || t <= 0) && (this[a] = 1 / 0);
        var n = e.length || b;
        'function' !== typeof n && (n = b),
          (this[c] = n),
          (this[u] = e.stale || !1),
          (this[d] = e.maxAge || 0),
          (this[p] = e.dispose),
          (this[m] = e.noDisposeOnSet || !1),
          this.reset();
      }

      function j(e, t, n, o) {
        var s = n.value;
        x(e, s) && (v(e, n), e[u] || (s = void 0)),
          s && t.call(o, s.value, s.key, e);
      }

      function y(e, t, n) {
        var o = e[h].get(t);
        if (o) {
          var s = o.value;
          x(e, s) ? (v(e, o), e[u] || (s = void 0)) : n && e[f].unshiftNode(o),
            s && (s = s.value);
        }
        return s;
      }

      function x(e, t) {
        if (!t || (!t.maxAge && !e[d])) return !1;
        var n = Date.now() - t.now;
        return t.maxAge ? n > t.maxAge : e[d] && n > e[d];
      }

      function _(e) {
        if (e[l] > e[a])
          for (var t = e[f].tail; e[l] > e[a] && null !== t; ) {
            var n = t.prev;
            v(e, t), (t = n);
          }
      }

      function v(e, t) {
        if (t) {
          var n = t.value;
          e[p] && e[p](n.key, n.value),
            (e[l] -= n.length),
            e[h].delete(n.key),
            e[f].removeNode(t);
        }
      }

      function w(e, t, n, o, s) {
        (this.key = e),
          (this.value = t),
          (this.length = n),
          (this.now = o),
          (this.maxAge = s || 0);
      }
      Object.defineProperty(g.prototype, 'max', {
        set: function (e) {
          (!e || 'number' !== typeof e || e <= 0) && (e = 1 / 0),
            (this[a] = e),
            _(this);
        },
        get: function () {
          return this[a];
        },
        enumerable: !0,
      }),
        Object.defineProperty(g.prototype, 'allowStale', {
          set: function (e) {
            this[u] = !!e;
          },
          get: function () {
            return this[u];
          },
          enumerable: !0,
        }),
        Object.defineProperty(g.prototype, 'maxAge', {
          set: function (e) {
            (!e || 'number' !== typeof e || e < 0) && (e = 0),
              (this[d] = e),
              _(this);
          },
          get: function () {
            return this[d];
          },
          enumerable: !0,
        }),
        Object.defineProperty(g.prototype, 'lengthCalculator', {
          set: function (e) {
            'function' !== typeof e && (e = b),
              e !== this[c] &&
                ((this[c] = e),
                (this[l] = 0),
                this[f].forEach(function (e) {
                  (e.length = this[c](e.value, e.key)), (this[l] += e.length);
                }, this)),
              _(this);
          },
          get: function () {
            return this[c];
          },
          enumerable: !0,
        }),
        Object.defineProperty(g.prototype, 'length', {
          get: function () {
            return this[l];
          },
          enumerable: !0,
        }),
        Object.defineProperty(g.prototype, 'itemCount', {
          get: function () {
            return this[f].length;
          },
          enumerable: !0,
        }),
        (g.prototype.rforEach = function (e, t) {
          t = t || this;
          for (var n = this[f].tail; null !== n; ) {
            var o = n.prev;
            j(this, e, n, t), (n = o);
          }
        }),
        (g.prototype.forEach = function (e, t) {
          t = t || this;
          for (var n = this[f].head; null !== n; ) {
            var o = n.next;
            j(this, e, n, t), (n = o);
          }
        }),
        (g.prototype.keys = function () {
          return this[f].toArray().map(function (e) {
            return e.key;
          }, this);
        }),
        (g.prototype.values = function () {
          return this[f].toArray().map(function (e) {
            return e.value;
          }, this);
        }),
        (g.prototype.reset = function () {
          this[p] &&
            this[f] &&
            this[f].length &&
            this[f].forEach(function (e) {
              this[p](e.key, e.value);
            }, this),
            (this[h] = new s()),
            (this[f] = new i()),
            (this[l] = 0);
        }),
        (g.prototype.dump = function () {
          return this[f]
            .map(function (e) {
              if (!x(this, e))
                return {
                  k: e.key,
                  v: e.value,
                  e: e.now + (e.maxAge || 0),
                };
            }, this)
            .toArray()
            .filter(function (e) {
              return e;
            });
        }),
        (g.prototype.dumpLru = function () {
          return this[f];
        }),
        (g.prototype.inspect = function (e, t) {
          var n = 'LRUCache {',
            o = !1;
          this[u] && ((n += '\n  allowStale: true'), (o = !0));
          var s = this[a];
          s &&
            s !== 1 / 0 &&
            (o && (n += ','), (n += '\n  max: ' + r.inspect(s, t)), (o = !0));
          var i = this[d];
          i &&
            (o && (n += ','),
            (n += '\n  maxAge: ' + r.inspect(i, t)),
            (o = !0));
          var p = this[c];
          p &&
            p !== b &&
            (o && (n += ','),
            (n += '\n  length: ' + r.inspect(this[l], t)),
            (o = !0));
          var m = !1;
          return (
            this[f].forEach(function (e) {
              m ? (n += ',\n  ') : (o && (n += ',\n'), (m = !0), (n += '\n  '));
              var s = r.inspect(e.key).split('\n').join('\n  '),
                a = {
                  value: e.value,
                };
              e.maxAge !== i && (a.maxAge = e.maxAge),
                p !== b && (a.length = e.length),
                x(this, e) && (a.stale = !0),
                (a = r.inspect(a, t).split('\n').join('\n  ')),
                (n += s + ' => ' + a);
            }),
            (m || o) && (n += '\n'),
            (n += '}')
          );
        }),
        (g.prototype.set = function (e, t, n) {
          var o = (n = n || this[d]) ? Date.now() : 0,
            s = this[c](t, e);
          if (this[h].has(e)) {
            if (s > this[a]) return v(this, this[h].get(e)), !1;
            var r = this[h].get(e).value;
            return (
              this[p] && (this[m] || this[p](e, r.value)),
              (r.now = o),
              (r.maxAge = n),
              (r.value = t),
              (this[l] += s - r.length),
              (r.length = s),
              this.get(e),
              _(this),
              !0
            );
          }
          var i = new w(e, t, s, o, n);
          return i.length > this[a]
            ? (this[p] && this[p](e, t), !1)
            : ((this[l] += i.length),
              this[f].unshift(i),
              this[h].set(e, this[f].head),
              _(this),
              !0);
        }),
        (g.prototype.has = function (e) {
          return !!this[h].has(e) && !x(this, this[h].get(e).value);
        }),
        (g.prototype.get = function (e) {
          return y(this, e, !0);
        }),
        (g.prototype.peek = function (e) {
          return y(this, e, !1);
        }),
        (g.prototype.pop = function () {
          var e = this[f].tail;
          return e ? (v(this, e), e.value) : null;
        }),
        (g.prototype.del = function (e) {
          v(this, this[h].get(e));
        }),
        (g.prototype.load = function (e) {
          this.reset();
          for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var o = e[n],
              s = o.e || 0;
            if (0 === s) this.set(o.k, o.v);
            else {
              var r = s - t;
              r > 0 && this.set(o.k, o.v, r);
            }
          }
        }),
        (g.prototype.prune = function () {
          var e = this;
          this[h].forEach(function (t, n) {
            y(e, n, !1);
          });
        });
    },
  },
]);
//# sourceMappingURL=default~app~embed~sandbox.87dc08a00.chunk.js.map

(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [44],
  {
    '1Y8E': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('kjvz'),
        i = n('U+XB'),
        r = n('LkUo'),
        a = n('zxs+'),
        s = n('in9m'),
        c = n('Gz0x');
      !(function (e) {
        function t(e, t) {
          void 0 === t && (t = {});
          var n = new o.MonacoToProtocolConverter(),
            c = new o.ProtocolToMonacoConverter();
          return {
            commands: new i.MonacoCommands(e),
            languages: new r.MonacoLanguages(c, n),
            workspace: new a.MonacoWorkspace(c, n, t.rootUri),
            window: new s.ConsoleWindow(),
          };
        }
        (e.create = t),
          (e.install = function (e, n) {
            void 0 === n && (n = {});
            var o = t(e, n);
            return c.Services.install(o), o;
          }),
          (e.get = function () {
            return c.Services.get();
          });
      })(t.MonacoServices || (t.MonacoServices = {}));
    },
    '2vv7': function (e, t) {
      e.exports = function (e, t) {
        if ('string' !== typeof e) throw new TypeError('Expected a string');
        for (
          var n,
            o = String(e),
            i = '',
            r = !!t && !!t.extended,
            a = !!t && !!t.globstar,
            s = !1,
            c = t && 'string' === typeof t.flags ? t.flags : '',
            u = 0,
            l = o.length;
          u < l;
          u++
        )
          switch ((n = o[u])) {
            case '\\':
            case '/':
            case '$':
            case '^':
            case '+':
            case '.':
            case '(':
            case ')':
            case '=':
            case '!':
            case '|':
              i += '\\' + n;
              break;
            case '?':
              if (r) {
                i += '.';
                break;
              }
            case '[':
            case ']':
              if (r) {
                i += n;
                break;
              }
            case '{':
              if (r) {
                (s = !0), (i += '(');
                break;
              }
            case '}':
              if (r) {
                (s = !1), (i += ')');
                break;
              }
            case ',':
              if (s) {
                i += '|';
                break;
              }
              i += '\\' + n;
              break;
            case '*':
              for (var d = o[u - 1], p = 1; '*' === o[u + 1]; ) p++, u++;
              var m = o[u + 1];
              if (a)
                p > 1 &&
                ('/' === d || void 0 === d) &&
                ('/' === m || void 0 === m)
                  ? ((i += '(?:[^/]*(?:/|$))*'), u++)
                  : (i += '[^/]*');
              else i += '.*';
              break;
            default:
              i += n;
          }
        return (c && ~c.indexOf('g')) || (i = '^' + i + '$'), new RegExp(i, c);
      };
    },
    AL8H: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = (function () {
          function e(e) {
            this._value = e;
          }
          return (
            (e.prototype.asHex = function () {
              return this._value;
            }),
            (e.prototype.equals = function (e) {
              return this.asHex() === e.asHex();
            }),
            e
          );
        })(),
        r = (function (e) {
          function t() {
            return (
              e.call(
                this,
                [
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  '-',
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  '-',
                  '4',
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  '-',
                  t._oneOf(t._timeHighBits),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  '-',
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                  t._randomHex(),
                ].join('')
              ) || this
            );
          }
          return (
            o(t, e),
            (t._oneOf = function (e) {
              return e[Math.floor(e.length * Math.random())];
            }),
            (t._randomHex = function () {
              return t._oneOf(t._chars);
            }),
            (t._chars = [
              '0',
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '6',
              '7',
              '8',
              '9',
              'a',
              'b',
              'c',
              'd',
              'e',
              'f',
            ]),
            (t._timeHighBits = ['8', '9', 'a', 'b']),
            t
          );
        })(i);

      function a() {
        return new r();
      }
      (t.empty = new i('00000000-0000-0000-0000-000000000000')), (t.v4 = a);
      var s = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

      function c(e) {
        return s.test(e);
      }
      (t.isUUID = c),
        (t.parse = function (e) {
          if (!c(e)) throw new Error('invalid uuid');
          return new i(e);
        }),
        (t.generateUuid = function () {
          return a().asHex();
        });
    },
    Chfy: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('AL8H'),
        r = n('hC2b'),
        a = n('uoVZ'),
        s = n('BOov');

      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, s.ImplementationRequest.type) || this;
        }
        return (
          o(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            c(c(e, 'textDocument'), 'implementation').dynamicRegistration = !0;
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.implementationProvider)
              if (!0 === e.implementationProvider) {
                if (!t) return;
                this.register(this.messages, {
                  id: i.generateUuid(),
                  registerOptions: Object.assign(
                    {},
                    {
                      documentSelector: t,
                    }
                  ),
                });
              } else {
                var n = e.implementationProvider,
                  o =
                    r.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                  a = n.documentSelector || t;
                a &&
                  this.register(this.messages, {
                    id: o,
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: a,
                      }
                    ),
                  });
              }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this._client,
              n = function (e, n, o) {
                return t
                  .sendRequest(
                    s.ImplementationRequest.type,
                    t.code2ProtocolConverter.asTextDocumentPositionParams(e, n),
                    o
                  )
                  .then(
                    t.protocol2CodeConverter.asDefinitionResult,
                    function (e) {
                      return (
                        t.logFailedRequest(s.ImplementationRequest.type, e),
                        Promise.resolve(null)
                      );
                    }
                  );
              },
              o = t.clientOptions.middleware;
            return a.languages.registerImplementationProvider(
              e.documentSelector,
              {
                provideImplementation: function (e, t, i) {
                  return o.provideImplementation
                    ? o.provideImplementation(e, t, i, n)
                    : n(e, t, i);
                },
              }
            );
          }),
          t
        );
      })(n('qRuN').TextDocumentFeature);
      t.ImplementationFeature = u;
    },
    LB4s: function (e, t, n) {
      'use strict';
      var o =
          (this && this.__values) ||
          function (e) {
            var t = 'function' === typeof Symbol && e[Symbol.iterator],
              n = 0;
            return t
              ? t.call(e)
              : {
                  next: function () {
                    return (
                      e && n >= e.length && (e = void 0),
                      {
                        value: e && e[n++],
                        done: !e,
                      }
                    );
                  },
                };
          },
        i =
          (this && this.__read) ||
          function (e, t) {
            var n = 'function' === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var o,
              i,
              r = n.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; )
                a.push(o.value);
            } catch (s) {
              i = {
                error: s,
              };
            } finally {
              try {
                o && !o.done && (n = r.return) && n.call(r);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r,
        a = n('uoVZ'),
        s = n('BOov'),
        c = n('hC2b'),
        u = n('QGVK'),
        l = n('h0WC'),
        d = n('ojtU');
      !(function (e) {
        e.is = function (e) {
          var t = e;
          return t && c.string(t.language) && c.string(t.value);
        };
      })(r || (r = {})),
        (t.createConverter = function (e) {
          var t =
            e ||
            function (e) {
              return a.Uri.parse(e);
            };

          function n(e) {
            return t(e);
          }

          function p(e) {
            return e.map(m);
          }

          function m(e) {
            var t = new a.Diagnostic(h(e.range), e.message, v(e.severity));
            return (
              (c.number(e.code) || c.string(e.code)) && (t.code = e.code),
              e.source && (t.source = e.source),
              e.relatedInformation &&
                (t.relatedInformation = e.relatedInformation.map(f)),
              t
            );
          }

          function f(e) {
            return new a.DiagnosticRelatedInformation(S(e.location), e.message);
          }

          function g(e) {
            if (e) return new a.Position(e.line, e.character);
          }

          function h(e) {
            if (e) return new a.Range(g(e.start), g(e.end));
          }

          function v(e) {
            if (void 0 === e || null === e) return a.DiagnosticSeverity.Error;
            switch (e) {
              case s.DiagnosticSeverity.Error:
                return a.DiagnosticSeverity.Error;
              case s.DiagnosticSeverity.Warning:
                return a.DiagnosticSeverity.Warning;
              case s.DiagnosticSeverity.Information:
                return a.DiagnosticSeverity.Information;
              case s.DiagnosticSeverity.Hint:
                return a.DiagnosticSeverity.Hint;
            }
            return a.DiagnosticSeverity.Error;
          }

          function y(e) {
            if (c.string(e)) return e;
            switch (e.kind) {
              case s.MarkupKind.Markdown:
                return new a.MarkdownString(e.value);
              case s.MarkupKind.PlainText:
                return e.value;
              default:
                return (
                  'Unsupported Markup content received. Kind is: ' + e.kind
                );
            }
          }

          function C(e) {
            var t = new u.default(e.label);
            e.detail && (t.detail = e.detail),
              e.documentation &&
                ((t.documentation = y(e.documentation)),
                (t.documentationFormat = c.string(e.documentation)
                  ? '$string'
                  : e.documentation.kind)),
              e.filterText && (t.filterText = e.filterText);
            var n,
              o = (function (e) {
                return e.textEdit
                  ? e.insertTextFormat === s.InsertTextFormat.Snippet
                    ? {
                        text: new a.SnippetString(e.textEdit.newText),
                        range: h(e.textEdit.range),
                        fromEdit: !0,
                      }
                    : {
                        text: e.textEdit.newText,
                        range: h(e.textEdit.range),
                        fromEdit: !0,
                      }
                  : e.insertText
                  ? e.insertTextFormat === s.InsertTextFormat.Snippet
                    ? {
                        text: new a.SnippetString(e.insertText),
                        fromEdit: !1,
                      }
                    : {
                        text: e.insertText,
                        fromEdit: !1,
                      }
                  : void 0;
              })(e);
            if (
              (o &&
                ((t.insertText = o.text),
                (t.range = o.range),
                (t.fromEdit = o.fromEdit)),
              c.number(e.kind))
            ) {
              var r = i(
                  ((n = e.kind),
                  s.CompletionItemKind.Text <= n &&
                  n <= s.CompletionItemKind.TypeParameter
                    ? [n - 1, void 0]
                    : [a.CompletionItemKind.Text, n]),
                  2
                ),
                l = r[0],
                d = r[1];
              (t.kind = l), d && (t.originalItemKind = d);
            }
            return (
              e.sortText && (t.sortText = e.sortText),
              e.additionalTextEdits &&
                (t.additionalTextEdits = _(e.additionalTextEdits)),
              c.stringArray(e.commitCharacters) &&
                (t.commitCharacters = e.commitCharacters.slice()),
              e.command && (t.command = E(e.command)),
              (!0 !== e.deprecated && !1 !== e.deprecated) ||
                (t.deprecated = e.deprecated),
              (!0 !== e.preselect && !1 !== e.preselect) ||
                (t.preselect = e.preselect),
              void 0 !== e.data && (t.data = e.data),
              t
            );
          }

          function D(e) {
            if (e) return new a.TextEdit(h(e.range), e.newText);
          }

          function _(e) {
            if (e) return e.map(D);
          }

          function x(e) {
            return e.map(P);
          }

          function P(e) {
            var t = new a.SignatureInformation(e.label);
            return (
              e.documentation && (t.documentation = y(e.documentation)),
              e.parameters && (t.parameters = b(e.parameters)),
              t
            );
          }

          function b(e) {
            return e.map(w);
          }

          function w(e) {
            var t = new a.ParameterInformation(e.label);
            return e.documentation && (t.documentation = y(e.documentation)), t;
          }

          function S(e) {
            if (e) return new a.Location(t(e.uri), h(e.range));
          }

          function R(e) {
            var t = new a.DocumentHighlight(h(e.range));
            return c.number(e.kind) && (t.kind = T(e.kind)), t;
          }

          function T(e) {
            switch (e) {
              case s.DocumentHighlightKind.Text:
                return a.DocumentHighlightKind.Text;
              case s.DocumentHighlightKind.Read:
                return a.DocumentHighlightKind.Read;
              case s.DocumentHighlightKind.Write:
                return a.DocumentHighlightKind.Write;
            }
            return a.DocumentHighlightKind.Text;
          }

          function O(e) {
            return e <= s.SymbolKind.TypeParameter
              ? e - 1
              : a.SymbolKind.Property;
          }

          function k(e, n) {
            var o = new a.SymbolInformation(
              e.name,
              O(e.kind),
              h(e.location.range),
              e.location.uri ? t(e.location.uri) : n
            );
            return e.containerName && (o.containerName = e.containerName), o;
          }

          function F(e) {
            var t,
              n,
              i = new a.DocumentSymbol(
                e.name,
                void 0 !== e.detail ? e.detail : e.name,
                O(e.kind),
                h(e.range),
                h(e.selectionRange)
              );
            if (void 0 !== e.children && e.children.length > 0) {
              var r = [];
              try {
                for (
                  var s = o(e.children), c = s.next();
                  !c.done;
                  c = s.next()
                ) {
                  var u = c.value;
                  r.push(F(u));
                }
              } catch (l) {
                t = {
                  error: l,
                };
              } finally {
                try {
                  c && !c.done && (n = s.return) && n.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
              i.children = r;
            }
            return i;
          }

          function E(e) {
            var t = {
              title: e.title,
              command: e.command,
            };
            return e.arguments && (t.arguments = e.arguments), t;
          }
          var M = new Map();

          function I(e) {
            if (e) {
              var t = new l.default(h(e.range));
              return (
                e.command && (t.command = E(e.command)),
                void 0 !== e.data && null !== e.data && (t.data = e.data),
                t
              );
            }
          }

          function L(e) {
            if (e) {
              var n = new a.WorkspaceEdit();
              return (
                e.documentChanges
                  ? e.documentChanges.forEach(function (e) {
                      n.set(t(e.textDocument.uri), _(e.edits));
                    })
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (o) {
                      n.set(t(o), _(e.changes[o]));
                    }),
                n
              );
            }
          }

          function K(e) {
            var t = h(e.range),
              o = e.target ? n(e.target) : void 0,
              i = new d.default(t, o);
            return void 0 !== e.data && null !== e.data && (i.data = e.data), i;
          }

          function q(e) {
            return new a.Color(e.red, e.green, e.blue, e.alpha);
          }

          function N(e) {
            return new a.ColorInformation(h(e.range), q(e.color));
          }

          function H(e) {
            var t = new a.ColorPresentation(e.label);
            return (
              (t.additionalTextEdits = _(e.additionalTextEdits)),
              e.textEdit && (t.textEdit = D(e.textEdit)),
              t
            );
          }

          function j(e) {
            if (e)
              switch (e) {
                case s.FoldingRangeKind.Comment:
                  return a.FoldingRangeKind.Comment;
                case s.FoldingRangeKind.Imports:
                  return a.FoldingRangeKind.Imports;
                case s.FoldingRangeKind.Region:
                  return a.FoldingRangeKind.Region;
              }
          }

          function A(e) {
            return new a.FoldingRange(e.startLine, e.endLine, j(e.kind));
          }
          return (
            M.set('', a.CodeActionKind.Empty),
            M.set(s.CodeActionKind.QuickFix, a.CodeActionKind.QuickFix),
            M.set(s.CodeActionKind.Refactor, a.CodeActionKind.Refactor),
            M.set(
              s.CodeActionKind.RefactorExtract,
              a.CodeActionKind.RefactorExtract
            ),
            M.set(
              s.CodeActionKind.RefactorInline,
              a.CodeActionKind.RefactorInline
            ),
            M.set(
              s.CodeActionKind.RefactorRewrite,
              a.CodeActionKind.RefactorRewrite
            ),
            M.set(s.CodeActionKind.Source, a.CodeActionKind.Source),
            M.set(
              s.CodeActionKind.SourceOrganizeImports,
              a.CodeActionKind.SourceOrganizeImports
            ),
            {
              asUri: n,
              asDiagnostics: p,
              asDiagnostic: m,
              asRange: h,
              asPosition: g,
              asDiagnosticSeverity: v,
              asHover: function (e) {
                if (e)
                  return new a.Hover(
                    (function (e) {
                      var t, n;
                      if (c.string(e)) return new a.MarkdownString(e);
                      if (r.is(e))
                        return (i = new a.MarkdownString()).appendCodeblock(
                          e.value,
                          e.language
                        );
                      if (Array.isArray(e)) {
                        var i = [];
                        try {
                          for (
                            var u = o(e), l = u.next();
                            !l.done;
                            l = u.next()
                          ) {
                            var d = l.value,
                              p = new a.MarkdownString();
                            r.is(d)
                              ? p.appendCodeblock(d.value, d.language)
                              : p.appendMarkdown(d),
                              i.push(p);
                          }
                        } catch (m) {
                          t = {
                            error: m,
                          };
                        } finally {
                          try {
                            l && !l.done && (n = u.return) && n.call(u);
                          } finally {
                            if (t) throw t.error;
                          }
                        }
                        return i;
                      }
                      switch (((i = void 0), e.kind)) {
                        case s.MarkupKind.Markdown:
                          return new a.MarkdownString(e.value);
                        case s.MarkupKind.PlainText:
                          return (
                            (i = new a.MarkdownString()).appendText(e.value), i
                          );
                        default:
                          return (
                            (i = new a.MarkdownString()).appendText(
                              'Unsupported Markup content received. Kind is: ' +
                                e.kind
                            ),
                            i
                          );
                      }
                    })(e.contents),
                    h(e.range)
                  );
              },
              asCompletionResult: function (e) {
                if (e) {
                  if (Array.isArray(e)) return e.map(C);
                  var t = e;
                  return new a.CompletionList(t.items.map(C), t.isIncomplete);
                }
              },
              asCompletionItem: C,
              asTextEdit: D,
              asTextEdits: _,
              asSignatureHelp: function (e) {
                if (e) {
                  var t = new a.SignatureHelp();
                  return (
                    c.number(e.activeSignature)
                      ? (t.activeSignature = e.activeSignature)
                      : (t.activeSignature = 0),
                    c.number(e.activeParameter)
                      ? (t.activeParameter = e.activeParameter)
                      : (t.activeParameter = 0),
                    e.signatures && (t.signatures = x(e.signatures)),
                    t
                  );
                }
              },
              asSignatureInformations: x,
              asSignatureInformation: P,
              asParameterInformations: b,
              asParameterInformation: w,
              asDefinitionResult: function (e) {
                if (e)
                  return c.array(e)
                    ? e.map(function (e) {
                        return S(e);
                      })
                    : S(e);
              },
              asLocation: S,
              asReferences: function (e) {
                if (e)
                  return e.map(function (e) {
                    return S(e);
                  });
              },
              asDocumentHighlights: function (e) {
                if (e) return e.map(R);
              },
              asDocumentHighlight: R,
              asDocumentHighlightKind: T,
              asSymbolInformations: function (e, t) {
                if (e)
                  return e.map(function (e) {
                    return k(e, t);
                  });
              },
              asSymbolInformation: k,
              asDocumentSymbols: function (e) {
                if (void 0 !== e && null !== e) return e.map(F);
              },
              asDocumentSymbol: F,
              asCommand: E,
              asCommands: function (e) {
                if (e) return e.map(E);
              },
              asCodeAction: function (e) {
                if (void 0 !== e && null !== e) {
                  var t = new a.CodeAction(e.title);
                  return (
                    void 0 !== e.kind &&
                      (t.kind = (function (e) {
                        var t, n;
                        if (void 0 !== e && null !== e) {
                          var i = M.get(e);
                          if (i) return i;
                          var r = e.split('.');
                          i = a.CodeActionKind.Empty;
                          try {
                            for (
                              var s = o(r), c = s.next();
                              !c.done;
                              c = s.next()
                            ) {
                              var u = c.value;
                              i = i.append(u);
                            }
                          } catch (l) {
                            t = {
                              error: l,
                            };
                          } finally {
                            try {
                              c && !c.done && (n = s.return) && n.call(s);
                            } finally {
                              if (t) throw t.error;
                            }
                          }
                          return i;
                        }
                      })(e.kind)),
                    e.diagnostics && (t.diagnostics = p(e.diagnostics)),
                    e.edit && (t.edit = L(e.edit)),
                    e.command && (t.command = E(e.command)),
                    t
                  );
                }
              },
              asCodeLens: I,
              asCodeLenses: function (e) {
                if (e)
                  return e.map(function (e) {
                    return I(e);
                  });
              },
              asWorkspaceEdit: L,
              asDocumentLink: K,
              asDocumentLinks: function (e) {
                if (e) return e.map(K);
              },
              asFoldingRangeKind: j,
              asFoldingRange: A,
              asFoldingRanges: function (e) {
                if (Array.isArray(e)) return e.map(A);
              },
              asColor: q,
              asColorInformation: N,
              asColorInformations: function (e) {
                if (Array.isArray(e)) return e.map(N);
              },
              asColorPresentation: H,
              asColorPresentations: function (e) {
                if (Array.isArray(e)) return e.map(H);
              },
            }
          );
        });
    },
    LkUo: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o,
        i = n('2vv7'),
        r = n('Gz0x'),
        a = n('bwr2'),
        s = n('oL6p');

      function c(e, t) {
        return i(e, {
          extended: !0,
          globstar: !0,
        }).test(t);
      }

      function u() {
        for (
          var e = [],
            t = 0,
            n = monaco.languages.getLanguages().map(function (e) {
              return e.id;
            });
          t < n.length;
          t++
        ) {
          var o = n[t];
          -1 === e.indexOf(o) && e.push(o);
        }
        return e;
      }
      !(function (e) {
        (e.fromDocument = function (e) {
          return {
            uri: monaco.Uri.parse(e.uri),
            languageId: e.languageId,
          };
        }),
          (e.fromModel = function (e) {
            return {
              uri: e.uri,
              languageId: e.getModeId(),
            };
          });
      })((o = t.MonacoModelIdentifier || (t.MonacoModelIdentifier = {}))),
        (t.testGlob = c),
        (t.getLanguages = u);
      var l = (function () {
        function e(e, t) {
          (this.p2m = e), (this.m2p = t);
        }
        return (
          (e.prototype.match = function (e, t) {
            return this.matchModel(e, o.fromDocument(t));
          }),
          (e.prototype.createDiagnosticCollection = function (e) {
            return new a.MonacoDiagnosticCollection(e || 'default', this.p2m);
          }),
          (e.prototype.registerCompletionItemProvider = function (e, t) {
            for (var n = [], o = 2; o < arguments.length; o++)
              n[o - 2] = arguments[o];
            for (
              var i = this.createCompletionProvider.apply(
                  this,
                  [e, t].concat(n)
                ),
                r = new s.DisposableCollection(),
                a = 0,
                c = u();
              a < c.length;
              a++
            ) {
              var l = c[a];
              this.matchLanguage(e, l) &&
                r.push(monaco.languages.registerCompletionItemProvider(l, i));
            }
            return r;
          }),
          (e.prototype.createCompletionProvider = function (e, t) {
            for (var n = this, i = [], r = 2; r < arguments.length; r++)
              i[r - 2] = arguments[r];
            return {
              triggerCharacters: i,
              provideCompletionItems: function (i, r, a, s) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var c = n.m2p.asCompletionParams(i, r, s);
                return t.provideCompletionItems(c, a).then(function (e) {
                  return n.p2m.asCompletionResult(e);
                });
              },
              resolveCompletionItem: t.resolveCompletionItem
                ? function (e, o) {
                    var i = n.m2p.asCompletionItem(e);
                    return t.resolveCompletionItem(i, o).then(function (t) {
                      var o = n.p2m.asCompletionItem(t);
                      return Object.assign(e, o), e;
                    });
                  }
                : void 0,
            };
          }),
          (e.prototype.registerHoverProvider = function (e, t) {
            for (
              var n = this.createHoverProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerHoverProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createHoverProvider = function (e, t) {
            var n = this;
            return {
              provideHover: function (i, r, a) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var s = n.m2p.asTextDocumentPositionParams(i, r);
                  return t.provideHover(s, a).then(function (e) {
                    return n.p2m.asHover(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerSignatureHelpProvider = function (e, t) {
            for (var n = [], o = 2; o < arguments.length; o++)
              n[o - 2] = arguments[o];
            for (
              var i = this.createSignatureHelpProvider.apply(
                  this,
                  [e, t].concat(n)
                ),
                r = new s.DisposableCollection(),
                a = 0,
                c = u();
              a < c.length;
              a++
            ) {
              var l = c[a];
              this.matchLanguage(e, l) &&
                r.push(monaco.languages.registerSignatureHelpProvider(l, i));
            }
            return r;
          }),
          (e.prototype.createSignatureHelpProvider = function (e, t) {
            for (var n = this, i = [], r = 2; r < arguments.length; r++)
              i[r - 2] = arguments[r];
            return {
              signatureHelpTriggerCharacters: i,
              provideSignatureHelp: function (i, r, a) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var s = n.m2p.asTextDocumentPositionParams(i, r);
                  return t.provideSignatureHelp(s, a).then(function (e) {
                    return n.p2m.asSignatureHelp(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerDefinitionProvider = function (e, t) {
            for (
              var n = this.createDefinitionProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerDefinitionProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createDefinitionProvider = function (e, t) {
            var n = this;
            return {
              provideDefinition: function (i, r, a) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var s = n.m2p.asTextDocumentPositionParams(i, r);
                  return t.provideDefinition(s, a).then(function (e) {
                    return n.p2m.asDefinitionResult(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerReferenceProvider = function (e, t) {
            for (
              var n = this.createReferenceProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerReferenceProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createReferenceProvider = function (e, t) {
            var n = this;
            return {
              provideReferences: function (i, r, a, s) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var c = n.m2p.asReferenceParams(i, r, a);
                return t.provideReferences(c, s).then(function (e) {
                  return n.p2m.asReferences(e);
                });
              },
            };
          }),
          (e.prototype.registerDocumentHighlightProvider = function (e, t) {
            for (
              var n = this.createDocumentHighlightProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(
                  monaco.languages.registerDocumentHighlightProvider(a, n)
                );
            }
            return o;
          }),
          (e.prototype.createDocumentHighlightProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentHighlights: function (i, r, a) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var s = n.m2p.asTextDocumentPositionParams(i, r);
                return t.provideDocumentHighlights(s, a).then(function (e) {
                  return n.p2m.asDocumentHighlights(e);
                });
              },
            };
          }),
          (e.prototype.registerDocumentSymbolProvider = function (e, t) {
            for (
              var n = this.createDocumentSymbolProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerDocumentSymbolProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createDocumentSymbolProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentSymbols: function (i, r) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var a = n.m2p.asDocumentSymbolParams(i);
                return t.provideDocumentSymbols(a, r).then(function (e) {
                  return n.p2m.asDocumentSymbols(e);
                });
              },
            };
          }),
          (e.prototype.registerCodeActionsProvider = function (e, t) {
            for (
              var n = this.createCodeActionProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerCodeActionProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createCodeActionProvider = function (e, t) {
            var n = this;
            return {
              provideCodeActions: function (i, r, a, s) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var c = n.m2p.asCodeActionParams(i, r, a);
                return t.provideCodeActions(c, s).then(function (e) {
                  return n.p2m.asCodeActions(e);
                });
              },
            };
          }),
          (e.prototype.registerCodeLensProvider = function (e, t) {
            for (
              var n = this.createCodeLensProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerCodeLensProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createCodeLensProvider = function (e, t) {
            var n = this;
            return {
              provideCodeLenses: function (i, r) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var a = n.m2p.asCodeLensParams(i);
                return t.provideCodeLenses(a, r).then(function (e) {
                  return n.p2m.asCodeLenses(e);
                });
              },
              resolveCodeLens: t.resolveCodeLens
                ? function (i, r, a) {
                    if (!n.matchModel(e, o.fromModel(i))) return r;
                    var s = n.m2p.asCodeLens(r);
                    return t.resolveCodeLens(s, a).then(function (e) {
                      var t = n.p2m.asCodeLens(e);
                      return Object.assign(r, t), r;
                    });
                  }
                : function (e, t, n) {
                    return t;
                  },
            };
          }),
          (e.prototype.registerDocumentFormattingEditProvider = function (
            e,
            t
          ) {
            for (
              var n = this.createDocumentFormattingEditProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(
                  monaco.languages.registerDocumentFormattingEditProvider(a, n)
                );
            }
            return o;
          }),
          (e.prototype.createDocumentFormattingEditProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentFormattingEdits: function (i, r, a) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var s = n.m2p.asDocumentFormattingParams(i, r);
                return t
                  .provideDocumentFormattingEdits(s, a)
                  .then(function (e) {
                    return n.p2m.asTextEdits(e);
                  });
              },
            };
          }),
          (e.prototype.registerDocumentRangeFormattingEditProvider = function (
            e,
            t
          ) {
            for (
              var n = this.createDocumentRangeFormattingEditProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(
                  monaco.languages.registerDocumentRangeFormattingEditProvider(
                    a,
                    n
                  )
                );
            }
            return o;
          }),
          (e.prototype.createDocumentRangeFormattingEditProvider = function (
            e,
            t
          ) {
            var n = this;
            return {
              provideDocumentRangeFormattingEdits: function (i, r, a, s) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var c = n.m2p.asDocumentRangeFormattingParams(i, r, a);
                return t
                  .provideDocumentRangeFormattingEdits(c, s)
                  .then(function (e) {
                    return n.p2m.asTextEdits(e);
                  });
              },
            };
          }),
          (e.prototype.registerOnTypeFormattingEditProvider = function (
            e,
            t,
            n
          ) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            for (
              var r = this.createOnTypeFormattingEditProvider.apply(
                  this,
                  [e, t, n].concat(o)
                ),
                a = new s.DisposableCollection(),
                c = 0,
                l = u();
              c < l.length;
              c++
            ) {
              var d = l[c];
              this.matchLanguage(e, d) &&
                a.push(
                  monaco.languages.registerOnTypeFormattingEditProvider(d, r)
                );
            }
            return a;
          }),
          (e.prototype.createOnTypeFormattingEditProvider = function (e, t, n) {
            for (var i = this, r = [], a = 3; a < arguments.length; a++)
              r[a - 3] = arguments[a];
            var s = [n].concat(r);
            return {
              autoFormatTriggerCharacters: s,
              provideOnTypeFormattingEdits: function (n, r, a, s, c) {
                if (!i.matchModel(e, o.fromModel(n))) return [];
                var u = i.m2p.asDocumentOnTypeFormattingParams(n, r, a, s);
                return t.provideOnTypeFormattingEdits(u, c).then(function (e) {
                  return i.p2m.asTextEdits(e);
                });
              },
            };
          }),
          (e.prototype.registerRenameProvider = function (e, t) {
            for (
              var n = this.createRenameProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerRenameProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createRenameProvider = function (e, t) {
            var n = this;
            return {
              provideRenameEdits: function (i, r, a, s) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var c = n.m2p.asRenameParams(i, r, a);
                  return t.provideRenameEdits(c, s).then(function (e) {
                    return n.p2m.asWorkspaceEdit(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerDocumentLinkProvider = function (e, t) {
            for (
              var n = this.createDocumentLinkProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerLinkProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createDocumentLinkProvider = function (e, t) {
            var n = this;
            return {
              provideLinks: function (i, r) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var a = n.m2p.asDocumentLinkParams(i);
                  return t.provideDocumentLinks(a, r).then(function (e) {
                    return n.p2m.asDocumentLinks(e);
                  });
                }
              },
              resolveLink: function (e, o) {
                if (
                  t.resolveDocumentLink &&
                  (null === e.url || void 0 === e.url)
                ) {
                  var i = n.m2p.asDocumentLink(e);
                  return t.resolveDocumentLink(i, o).then(function (t) {
                    var o = n.p2m.asDocumentLink(t);
                    return Object.assign(e, o), e;
                  });
                }
                return e;
              },
            };
          }),
          (e.prototype.registerImplementationProvider = function (e, t) {
            for (
              var n = this.createImplementationProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerImplementationProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createImplementationProvider = function (e, t) {
            var n = this;
            return {
              provideImplementation: function (i, r, a) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var s = n.m2p.asTextDocumentPositionParams(i, r);
                  return t.provideImplementation(s, a).then(function (e) {
                    return n.p2m.asDefinitionResult(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerTypeDefinitionProvider = function (e, t) {
            for (
              var n = this.createTypeDefinitionProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerTypeDefinitionProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createTypeDefinitionProvider = function (e, t) {
            var n = this;
            return {
              provideTypeDefinition: function (i, r, a) {
                if (n.matchModel(e, o.fromModel(i))) {
                  var s = n.m2p.asTextDocumentPositionParams(i, r);
                  return t.provideTypeDefinition(s, a).then(function (e) {
                    return n.p2m.asDefinitionResult(e);
                  });
                }
              },
            };
          }),
          (e.prototype.registerColorProvider = function (e, t) {
            for (
              var n = this.createDocumentColorProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerColorProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createDocumentColorProvider = function (e, t) {
            var n = this;
            return {
              provideDocumentColors: function (i, r) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var a = n.m2p.asTextDocumentIdentifier(i);
                return t
                  .provideDocumentColors(
                    {
                      textDocument: a,
                    },
                    r
                  )
                  .then(function (e) {
                    return n.p2m.asColorInformations(e);
                  });
              },
              provideColorPresentations: function (i, r, a) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var s = n.m2p.asTextDocumentIdentifier(i),
                  c = n.m2p.asRange(r.range);
                return t
                  .provideColorPresentations(
                    {
                      textDocument: s,
                      color: r.color,
                      range: c,
                    },
                    a
                  )
                  .then(function (e) {
                    return n.p2m.asColorPresentations(e);
                  });
              },
            };
          }),
          (e.prototype.registerFoldingRangeProvider = function (e, t) {
            for (
              var n = this.createFoldingRangeProvider(e, t),
                o = new s.DisposableCollection(),
                i = 0,
                r = u();
              i < r.length;
              i++
            ) {
              var a = r[i];
              this.matchLanguage(e, a) &&
                o.push(monaco.languages.registerFoldingRangeProvider(a, n));
            }
            return o;
          }),
          (e.prototype.createFoldingRangeProvider = function (e, t) {
            var n = this;
            return {
              provideFoldingRanges: function (i, r, a) {
                if (!n.matchModel(e, o.fromModel(i))) return [];
                var s = n.m2p.asTextDocumentIdentifier(i);
                return t
                  .provideFoldingRanges(
                    {
                      textDocument: s,
                    },
                    a
                  )
                  .then(function (e) {
                    return n.p2m.asFoldingRanges(e);
                  });
              },
            };
          }),
          (e.prototype.matchModel = function (e, t) {
            var n = this;
            return Array.isArray(e)
              ? e.some(function (e) {
                  return n.matchModel(e, t);
                })
              : r.DocumentFilter.is(e)
              ? (!e.language || e.language === t.languageId) &&
                (!e.scheme || e.scheme === t.uri.scheme) &&
                !(e.pattern && !c(e.pattern, t.uri.path))
              : e === t.languageId;
          }),
          (e.prototype.matchLanguage = function (e, t) {
            var n = this;
            return Array.isArray(e)
              ? e.some(function (e) {
                  return n.matchLanguage(e, t);
                })
              : r.DocumentFilter.is(e)
              ? !e.language || e.language === t
              : e === t;
          }),
          e
        );
      })();
      t.MonacoLanguages = l;
    },
    QGVK: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return o(t, e), t;
      })(n('uoVZ').CompletionItem);
      t.default = i;
    },
    'U+XB': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = (function () {
        function e(e) {
          this.editor = e;
        }
        return (
          (e.prototype.registerCommand = function (e, t, n) {
            return this.editor._commandService.addCommand({
              id: e,
              handler: function (e) {
                for (var n = [], o = 1; o < arguments.length; o++)
                  n[o - 1] = arguments[o];
                return t.apply(void 0, n);
              },
            });
          }),
          e
        );
      })();
      t.MonacoCommands = o;
    },
    U5rG: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('qRuN'),
        r = n('uSJ4'),
        a = n('Chfy'),
        s = n('orFP'),
        c = n('Wo+m'),
        u = n('WULY');
      !(function (e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      })(n('qRuN'));
      var l = (function (e) {
        function t(n) {
          var o = n.id,
            i = n.name,
            r = n.clientOptions,
            a = n.connectionProvider,
            s = e.call(this, o || i.toLowerCase(), i, r) || this;
          (s.connectionProvider = a),
            (s.createConnection = s.doCreateConnection.bind(s));
          var c = s;
          return (
            (c._p2c = new Proxy(c._p2c, {
              get: function (e, n) {
                return 'asUri' === n ? e[n] : t.bypassConversion;
              },
            })),
            (c._c2p = new Proxy(c._c2p, {
              get: function (e, n) {
                return 'asUri' === n
                  ? e[n]
                  : 'asCompletionParams' === n
                  ? function (t, n, o) {
                      return {
                        textDocument: e.asTextDocumentIdentifier(t),
                        position: n,
                        context: o,
                      };
                    }
                  : 'asWillSaveTextDocumentParams' === n
                  ? function (t) {
                      return {
                        textDocument: e.asTextDocumentIdentifier(t.document),
                        reason: t.reason,
                      };
                    }
                  : n.endsWith('Params')
                  ? e[n]
                  : t.bypassConversion;
              },
            })),
            s
          );
        }
        return (
          o(t, e),
          (t.prototype.doCreateConnection = function () {
            var e = this.handleConnectionError.bind(this),
              t = this.handleConnectionClosed.bind(this);
            return this.connectionProvider.get(e, t, this.outputChannel);
          }),
          (t.prototype.createMessageTransports = function (e) {
            throw new Error('Unsupported');
          }),
          (t.prototype.registerBuiltinFeatures = function () {
            e.prototype.registerBuiltinFeatures.call(this),
              this.registerFeature(new r.TypeDefinitionFeature(this)),
              this.registerFeature(new a.ImplementationFeature(this)),
              this.registerFeature(new s.ColorProviderFeature(this)),
              this.registerFeature(new c.WorkspaceFoldersFeature(this));
            var n = new u.FoldingRangeFeature(this);
            (n.asFoldingRanges = t.bypassConversion), this.registerFeature(n);
          }),
          (t.bypassConversion = function (e) {
            return e || void 0;
          }),
          t
        );
      })(i.BaseLanguageClient);
      t.MonacoLanguageClient = l;
    },
    WULY: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('AL8H'),
        r = n('hC2b'),
        a = n('uoVZ'),
        s = n('BOov');

      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, s.FoldingRangeRequest.type) || this;
        }
        return (
          o(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            var t = c(c(e, 'textDocument'), 'foldingRange');
            (t.dynamicRegistration = !0),
              (t.rangeLimit = 5e3),
              (t.lineFoldingOnly = !0);
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.foldingRangeProvider) {
              var n = e.foldingRangeProvider,
                o = r.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                a = n.documentSelector || t;
              a &&
                this.register(this.messages, {
                  id: o,
                  registerOptions: Object.assign(
                    {},
                    {
                      documentSelector: a,
                    }
                  ),
                });
            }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this,
              n = this._client,
              o = function (e, o, i) {
                var r = {
                  textDocument:
                    n.code2ProtocolConverter.asTextDocumentIdentifier(e),
                };
                return n
                  .sendRequest(s.FoldingRangeRequest.type, r, i)
                  .then(t.asFoldingRanges.bind(t), function (e) {
                    return (
                      n.logFailedRequest(s.FoldingRangeRequest.type, e),
                      Promise.resolve(null)
                    );
                  });
              },
              i = n.clientOptions.middleware;
            return a.languages.registerFoldingRangeProvider(
              e.documentSelector,
              {
                provideFoldingRanges: function (e, t, n) {
                  return i.provideFoldingRanges
                    ? i.provideFoldingRanges(e, t, n, o)
                    : o(e, 0, n);
                },
              }
            );
          }),
          (t.prototype.asFoldingRangeKind = function (e) {
            if (e)
              switch (e) {
                case s.FoldingRangeKind.Comment:
                  return a.FoldingRangeKind.Comment;
                case s.FoldingRangeKind.Imports:
                  return a.FoldingRangeKind.Imports;
                case s.FoldingRangeKind.Region:
                  return a.FoldingRangeKind.Region;
              }
          }),
          (t.prototype.asFoldingRanges = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  return new a.FoldingRange(
                    e.startLine,
                    e.endLine,
                    t.asFoldingRangeKind(e.kind)
                  );
                })
              : [];
          }),
          t
        );
      })(n('qRuN').TextDocumentFeature);
      t.FoldingRangeFeature = u;
    },
    'Wo+m': function (e, t, n) {
      'use strict';
      var o =
        (this && this.__values) ||
        function (e) {
          var t = 'function' === typeof Symbol && e[Symbol.iterator],
            n = 0;
          return t
            ? t.call(e)
            : {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    {
                      value: e && e[n++],
                      done: !e,
                    }
                  );
                },
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('AL8H'),
        r = n('uoVZ'),
        a = n('BOov');

      function s(e, t) {
        if (void 0 !== e) return e[t];
      }
      var c = (function () {
        function e(e) {
          (this._client = e), (this._listeners = new Map());
        }
        return (
          Object.defineProperty(e.prototype, 'messages', {
            get: function () {
              return a.DidChangeWorkspaceFoldersNotification.type;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.fillInitializeParams = function (e) {
            var t = this,
              n = r.workspace.workspaceFolders;
            e.workspaceFolders =
              void 0 === n
                ? null
                : n.map(function (e) {
                    return t.asProtocol(e);
                  });
          }),
          (e.prototype.fillClientCapabilities = function (e) {
            (e.workspace = e.workspace || {}),
              (e.workspace.workspaceFolders = !0);
          }),
          (e.prototype.initialize = function (e) {
            var t = this,
              n = this._client;
            n.onRequest(a.WorkspaceFoldersRequest.type, function (e) {
              var o = function () {
                  var e = r.workspace.workspaceFolders;
                  return void 0 === e
                    ? null
                    : e.map(function (e) {
                        return t.asProtocol(e);
                      });
                },
                i = n.clientOptions.middleware.workspace;
              return i && i.workspaceFolders ? i.workspaceFolders(e, o) : o();
            });
            var o,
              c = s(
                s(s(e, 'workspace'), 'workspaceFolders'),
                'changeNotifications'
              );
            'string' === typeof c
              ? (o = c)
              : !0 === c && (o = i.generateUuid()),
              o &&
                this.register(this.messages, {
                  id: o,
                  registerOptions: void 0,
                });
          }),
          (e.prototype.register = function (e, t) {
            var n = this,
              o = t.id,
              i = this._client,
              s = r.workspace.onDidChangeWorkspaceFolders(function (e) {
                var t = function (e) {
                    var t = {
                      event: {
                        added: e.added.map(function (e) {
                          return n.asProtocol(e);
                        }),
                        removed: e.removed.map(function (e) {
                          return n.asProtocol(e);
                        }),
                      },
                    };
                    n._client.sendNotification(
                      a.DidChangeWorkspaceFoldersNotification.type,
                      t
                    );
                  },
                  o = i.clientOptions.middleware.workspace;
                o && o.didChangeWorkspaceFolders
                  ? o.didChangeWorkspaceFolders(e, t)
                  : t(e);
              });
            this._listeners.set(o, s);
          }),
          (e.prototype.unregister = function (e) {
            var t = this._listeners.get(e);
            void 0 !== t && (this._listeners.delete(e), t.dispose());
          }),
          (e.prototype.dispose = function () {
            var e, t;
            try {
              for (
                var n = o(this._listeners.values()), i = n.next();
                !i.done;
                i = n.next()
              ) {
                i.value.dispose();
              }
            } catch (r) {
              e = {
                error: r,
              };
            } finally {
              try {
                i && !i.done && (t = n.return) && t.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
            this._listeners.clear();
          }),
          (e.prototype.asProtocol = function (e) {
            return void 0 === e
              ? null
              : {
                  uri: this._client.code2ProtocolConverter.asUri(e.uri),
                  name: e.name,
                };
          }),
          e
        );
      })();
      t.WorkspaceFoldersFeature = c;
    },
    aSIW: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('BOov'),
        i = n('owkM');
      t.createConnection = function (e, t, n) {
        return (
          e.onError(function (e) {
            t(e[0], e[1], e[2]);
          }),
          e.onClose(n),
          {
            listen: function () {
              return e.listen();
            },
            sendRequest: function (t) {
              for (var n = [], o = 1; o < arguments.length; o++)
                n[o - 1] = arguments[o];
              return e.sendRequest.apply(
                e,
                [i.string(t) ? t : t.method].concat(n)
              );
            },
            onRequest: function (t, n) {
              return e.onRequest(i.string(t) ? t : t.method, n);
            },
            sendNotification: function (t, n) {
              return e.sendNotification(i.string(t) ? t : t.method, n);
            },
            onNotification: function (t, n) {
              return e.onNotification(i.string(t) ? t : t.method, n);
            },
            trace: function (t, n, o) {
              return void 0 === o && (o = !1), e.trace(t, n, o);
            },
            initialize: function (t) {
              return e.sendRequest(o.InitializeRequest.type, t);
            },
            shutdown: function () {
              return e.sendRequest(o.ShutdownRequest.type, void 0);
            },
            exit: function () {
              return e.sendNotification(o.ExitNotification.type);
            },
            onLogMessage: function (t) {
              return e.onNotification(o.LogMessageNotification.type, t);
            },
            onShowMessage: function (t) {
              return e.onNotification(o.ShowMessageNotification.type, t);
            },
            onTelemetry: function (t) {
              return e.onNotification(o.TelemetryEventNotification.type, t);
            },
            didChangeConfiguration: function (t) {
              return e.sendNotification(
                o.DidChangeConfigurationNotification.type,
                t
              );
            },
            didChangeWatchedFiles: function (t) {
              return e.sendNotification(
                o.DidChangeWatchedFilesNotification.type,
                t
              );
            },
            didOpenTextDocument: function (t) {
              return e.sendNotification(
                o.DidOpenTextDocumentNotification.type,
                t
              );
            },
            didChangeTextDocument: function (t) {
              return e.sendNotification(
                o.DidChangeTextDocumentNotification.type,
                t
              );
            },
            didCloseTextDocument: function (t) {
              return e.sendNotification(
                o.DidCloseTextDocumentNotification.type,
                t
              );
            },
            didSaveTextDocument: function (t) {
              return e.sendNotification(
                o.DidSaveTextDocumentNotification.type,
                t
              );
            },
            onDiagnostics: function (t) {
              return e.onNotification(o.PublishDiagnosticsNotification.type, t);
            },
            dispose: function () {
              return e.dispose();
            },
          }
        );
      };
    },
    bwr2: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('oL6p'),
        i = (function () {
          function e(e, t) {
            (this.name = e),
              (this.p2m = t),
              (this.diagnostics = new Map()),
              (this.toDispose = new o.DisposableCollection());
          }
          return (
            (e.prototype.dispose = function () {
              this.toDispose.dispose();
            }),
            (e.prototype.get = function (e) {
              var t = this.diagnostics.get(e);
              return t ? t.diagnostics : [];
            }),
            (e.prototype.set = function (e, t) {
              var n = this,
                i = this.diagnostics.get(e);
              if (i) i.diagnostics = t;
              else {
                var a = new r(e, t, this.name, this.p2m);
                this.diagnostics.set(e, a),
                  this.toDispose.push(
                    o.Disposable.create(function () {
                      n.diagnostics.delete(e), a.dispose();
                    })
                  );
              }
            }),
            e
          );
        })();
      t.MonacoDiagnosticCollection = i;
      var r = (function () {
        function e(e, t, n, o) {
          var i = this;
          (this.owner = n),
            (this.p2m = o),
            (this._markers = []),
            (this._diagnostics = []),
            (this.uri = monaco.Uri.parse(e)),
            (this.diagnostics = t),
            monaco.editor.onDidCreateModel(function (e) {
              return i.doUpdateModelMarkers(e);
            });
        }
        return (
          Object.defineProperty(e.prototype, 'diagnostics', {
            get: function () {
              return this._diagnostics;
            },
            set: function (e) {
              (this._diagnostics = e),
                (this._markers = this.p2m.asDiagnostics(e)),
                this.updateModelMarkers();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'markers', {
            get: function () {
              return this._markers;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.dispose = function () {
            (this._markers = []), this.updateModelMarkers();
          }),
          (e.prototype.updateModelMarkers = function () {
            var e = monaco.editor.getModel(this.uri);
            this.doUpdateModelMarkers(e);
          }),
          (e.prototype.doUpdateModelMarkers = function (e) {
            e &&
              this.uri.toString() === e.uri.toString() &&
              monaco.editor.setModelMarkers(e, this.owner, this._markers);
          }),
          e
        );
      })();
      t.MonacoModelDiagnostics = r;
    },
    h0WC: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return o(t, e), t;
      })(n('uoVZ').CodeLens);
      t.default = i;
    },
    hC2b: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = Object.prototype.toString;

      function i(e) {
        return '[object String]' === o.call(e);
      }

      function r(e) {
        return '[object Function]' === o.call(e);
      }

      function a(e) {
        return Array.isArray(e);
      }
      (t.boolean = function (e) {
        return !0 === e || !1 === e;
      }),
        (t.string = i),
        (t.number = function (e) {
          return '[object Number]' === o.call(e);
        }),
        (t.error = function (e) {
          return '[object Error]' === o.call(e);
        }),
        (t.func = r),
        (t.array = a),
        (t.stringArray = function (e) {
          return (
            a(e) &&
            e.every(function (e) {
              return i(e);
            })
          );
        }),
        (t.typedArray = function (e, t) {
          return Array.isArray(e) && e.every(t);
        }),
        (t.thenable = function (e) {
          return e && r(e.then);
        });
    },
    in9m: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('Gz0x'),
        i = (function () {
          function e() {
            this.channels = new Map();
          }
          return (
            (e.prototype.showMessage = function (e, t) {
              for (var n = [], i = 2; i < arguments.length; i++)
                n[i - 2] = arguments[i];
              return (
                e === o.MessageType.Error && console.error(t),
                e === o.MessageType.Warning && console.warn(t),
                e === o.MessageType.Info && console.info(t),
                e === o.MessageType.Log && console.log(t),
                Promise.resolve(void 0)
              );
            }),
            (e.prototype.createOutputChannel = function (e) {
              var t = this.channels.get(e);
              if (t) return t;
              var n = {
                append: function (t) {
                  console.log(e + ': ' + t);
                },
                appendLine: function (t) {
                  console.log(e + ': ' + t);
                },
                show: function () {},
                dispose: function () {},
              };
              return this.channels.set(e, n), n;
            }),
            e
          );
        })();
      t.ConsoleWindow = i;
    },
    ixam: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = (function () {
        function e(e) {
          (this.defaultDelay = e),
            (this.timeout = void 0),
            (this.completionPromise = void 0),
            (this.onSuccess = void 0),
            (this.task = void 0);
        }
        return (
          (e.prototype.trigger = function (e, t) {
            var n = this;
            return (
              void 0 === t && (t = this.defaultDelay),
              (this.task = e),
              t >= 0 && this.cancelTimeout(),
              this.completionPromise ||
                (this.completionPromise = new Promise(function (e) {
                  n.onSuccess = e;
                }).then(function () {
                  (n.completionPromise = void 0), (n.onSuccess = void 0);
                  var e = n.task();
                  return (n.task = void 0), e;
                })),
              (t >= 0 || void 0 === this.timeout) &&
                (this.timeout = setTimeout(
                  function () {
                    (n.timeout = void 0), n.onSuccess(void 0);
                  },
                  t >= 0 ? t : this.defaultDelay
                )),
              this.completionPromise
            );
          }),
          (e.prototype.forceDelivery = function () {
            if (this.completionPromise) {
              this.cancelTimeout();
              var e = this.task();
              return (
                (this.completionPromise = void 0),
                (this.onSuccess = void 0),
                (this.task = void 0),
                e
              );
            }
          }),
          (e.prototype.isTriggered = function () {
            return void 0 !== this.timeout;
          }),
          (e.prototype.cancel = function () {
            this.cancelTimeout(), (this.completionPromise = void 0);
          }),
          (e.prototype.cancelTimeout = function () {
            void 0 !== this.timeout &&
              (clearTimeout(this.timeout), (this.timeout = void 0));
          }),
          e
        );
      })();
      t.Delayer = o;
    },
    kjvz: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i,
        r,
        a,
        s = n('owkM'),
        c = n('Gz0x');
      !(function (e) {
        e.is = function (e) {
          return !!e && 'data' in e;
        };
      })((i = t.ProtocolDocumentLink || (t.ProtocolDocumentLink = {}))),
        (function (e) {
          e.is = function (e) {
            return !!e && 'data' in e;
          };
        })((r = t.ProtocolCodeLens || (t.ProtocolCodeLens = {}))),
        (function (e) {
          e.is = function (e) {
            return !!e && 'data' in e;
          };
        })((a = t.ProtocolCompletionItem || (t.ProtocolCompletionItem = {})));
      var u = (function () {
        function e() {}
        return (
          (e.prototype.asPosition = function (e, t) {
            return {
              line: void 0 === e || null === e ? void 0 : e - 1,
              character: void 0 === t || null === t ? void 0 : t - 1,
            };
          }),
          (e.prototype.asRange = function (e) {
            if (void 0 !== e)
              return null === e
                ? null
                : {
                    start: this.asPosition(e.startLineNumber, e.startColumn),
                    end: this.asPosition(e.endLineNumber, e.endColumn),
                  };
          }),
          (e.prototype.asTextDocumentIdentifier = function (e) {
            return {
              uri: e.uri.toString(),
            };
          }),
          (e.prototype.asTextDocumentPositionParams = function (e, t) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
            };
          }),
          (e.prototype.asCompletionParams = function (e, t, n) {
            return Object.assign(this.asTextDocumentPositionParams(e, t), {
              context: this.asCompletionContext(n),
            });
          }),
          (e.prototype.asCompletionContext = function (e) {
            return {
              triggerKind: this.asTriggerKind(e.triggerKind),
              triggerCharacter: e.triggerCharacter,
            };
          }),
          (e.prototype.asTriggerKind = function (e) {
            switch (e) {
              case monaco.languages.SuggestTriggerKind.TriggerCharacter:
                return c.CompletionTriggerKind.TriggerCharacter;
              case monaco.languages.SuggestTriggerKind
                .TriggerForIncompleteCompletions:
                return c.CompletionTriggerKind.TriggerForIncompleteCompletions;
              default:
                return c.CompletionTriggerKind.Invoked;
            }
          }),
          (e.prototype.asCompletionItem = function (e) {
            var t = {
                label: e.label,
              },
              n = a.is(e) ? e : void 0;
            return (
              e.detail && (t.detail = e.detail),
              e.documentation &&
                (n && n.documentationFormat
                  ? (t.documentation = this.asDocumentation(
                      n.documentationFormat,
                      e.documentation
                    ))
                  : (t.documentation = e.documentation)),
              e.filterText && (t.filterText = e.filterText),
              this.fillPrimaryInsertText(t, e),
              s.number(e.kind) &&
                (t.kind = this.asCompletionItemKind(
                  e.kind,
                  n && n.originalItemKind
                )),
              e.sortText && (t.sortText = e.sortText),
              e.additionalTextEdits &&
                (t.additionalTextEdits = this.asTextEdits(
                  e.additionalTextEdits
                )),
              e.command && (t.command = this.asCommand(e.command)),
              e.commitCharacters &&
                (t.commitCharacters = e.commitCharacters.slice()),
              e.command && (t.command = this.asCommand(e.command)),
              n &&
                (void 0 !== n.data && (t.data = n.data),
                (!0 !== n.deprecated && !1 !== n.deprecated) ||
                  (t.deprecated = n.deprecated)),
              t
            );
          }),
          (e.prototype.asCompletionItemKind = function (e, t) {
            return void 0 !== t ? t : e + 1;
          }),
          (e.prototype.asDocumentation = function (e, t) {
            switch (e) {
              case c.MarkupKind.PlainText:
                return {
                  kind: e,
                  value: t,
                };
              case c.MarkupKind.Markdown:
                return {
                  kind: e,
                  value: t.value,
                };
              default:
                return 'Unsupported Markup content received. Kind is: ' + e;
            }
          }),
          (e.prototype.fillPrimaryInsertText = function (e, t) {
            var n,
              o,
              i = c.InsertTextFormat.PlainText;
            t.textEdit
              ? ((n = t.textEdit.text), (o = this.asRange(t.textEdit.range)))
              : 'string' === typeof t.insertText
              ? (n = t.insertText)
              : t.insertText &&
                ((i = c.InsertTextFormat.Snippet), (n = t.insertText.value)),
              t.range && (o = this.asRange(t.range)),
              (e.insertTextFormat = i),
              t.fromEdit && n && o
                ? (e.textEdit = {
                    newText: n,
                    range: o,
                  })
                : (e.insertText = n);
          }),
          (e.prototype.asTextEdit = function (e) {
            return {
              range: this.asRange(e.range),
              newText: e.text,
            };
          }),
          (e.prototype.asTextEdits = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asTextEdit(e);
              });
          }),
          (e.prototype.asReferenceParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
              context: {
                includeDeclaration: n.includeDeclaration,
              },
            };
          }),
          (e.prototype.asDocumentSymbolParams = function (e) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
            };
          }),
          (e.prototype.asCodeLensParams = function (e) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
            };
          }),
          (e.prototype.asDiagnosticSeverity = function (e) {
            switch (e) {
              case monaco.MarkerSeverity.Error:
                return c.DiagnosticSeverity.Error;
              case monaco.MarkerSeverity.Warning:
                return c.DiagnosticSeverity.Warning;
              case monaco.MarkerSeverity.Info:
                return c.DiagnosticSeverity.Information;
              case monaco.MarkerSeverity.Hint:
                return c.DiagnosticSeverity.Hint;
            }
          }),
          (e.prototype.asDiagnostic = function (e) {
            var t = this.asRange(
                new monaco.Range(
                  e.startLineNumber,
                  e.startColumn,
                  e.endLineNumber,
                  e.endColumn
                )
              ),
              n = this.asDiagnosticSeverity(e.severity);
            return c.Diagnostic.create(t, e.message, n, e.code, e.source);
          }),
          (e.prototype.asDiagnostics = function (e) {
            var t = this;
            return void 0 === e || null === e
              ? e
              : e.map(function (e) {
                  return t.asDiagnostic(e);
                });
          }),
          (e.prototype.asCodeActionContext = function (e) {
            if (void 0 === e || null === e) return e;
            var t = this.asDiagnostics(e.markers);
            return c.CodeActionContext.create(
              t,
              s.string(e.only) ? [e.only] : void 0
            );
          }),
          (e.prototype.asCodeActionParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              range: this.asRange(t),
              context: this.asCodeActionContext(n),
            };
          }),
          (e.prototype.asCommand = function (e) {
            if (e) {
              var t = e.arguments || [];
              return c.Command.create.apply(
                c.Command,
                [e.title, e.id].concat(t)
              );
            }
          }),
          (e.prototype.asCodeLens = function (e) {
            var t = c.CodeLens.create(this.asRange(e.range));
            return (
              e.command && (t.command = this.asCommand(e.command)),
              r.is(e) && e.data && (t.data = e.data),
              t
            );
          }),
          (e.prototype.asFormattingOptions = function (e) {
            return {
              tabSize: e.tabSize,
              insertSpaces: e.insertSpaces,
            };
          }),
          (e.prototype.asDocumentFormattingParams = function (e, t) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              options: this.asFormattingOptions(t),
            };
          }),
          (e.prototype.asDocumentRangeFormattingParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              range: this.asRange(t),
              options: this.asFormattingOptions(n),
            };
          }),
          (e.prototype.asDocumentOnTypeFormattingParams = function (
            e,
            t,
            n,
            o
          ) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
              ch: n,
              options: this.asFormattingOptions(o),
            };
          }),
          (e.prototype.asRenameParams = function (e, t, n) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
              position: this.asPosition(t.lineNumber, t.column),
              newName: n,
            };
          }),
          (e.prototype.asDocumentLinkParams = function (e) {
            return {
              textDocument: this.asTextDocumentIdentifier(e),
            };
          }),
          (e.prototype.asDocumentLink = function (e) {
            var t = c.DocumentLink.create(this.asRange(e.range));
            return (
              e.url && (t.target = e.url),
              i.is(e) && e.data && (t.data = e.data),
              t
            );
          }),
          e
        );
      })();
      t.MonacoToProtocolConverter = u;
      var l = (function () {
        function e() {}
        return (
          (e.prototype.asResourceEdits = function (e, t, n) {
            return {
              resource: e,
              edits: this.asTextEdits(t),
              modelVersionId: n,
            };
          }),
          (e.prototype.asWorkspaceEdit = function (e) {
            if (e) {
              var t = [];
              if (e.documentChanges)
                for (var n = 0, o = e.documentChanges; n < o.length; n++) {
                  var i = o[n],
                    r = monaco.Uri.parse(i.textDocument.uri),
                    a =
                      'number' === typeof i.textDocument.version
                        ? i.textDocument.version
                        : void 0;
                  t.push(this.asResourceEdits(r, i.edits, a));
                }
              else if (e.changes)
                for (var s = 0, c = Object.keys(e.changes); s < c.length; s++) {
                  var u = c[s];
                  r = monaco.Uri.parse(u);
                  t.push(this.asResourceEdits(r, e.changes[u]));
                }
              return {
                edits: t,
              };
            }
          }),
          (e.prototype.asTextEdit = function (e) {
            if (e)
              return {
                range: this.asRange(e.range),
                text: e.newText,
              };
          }),
          (e.prototype.asTextEdits = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asTextEdit(e);
              });
          }),
          (e.prototype.asCodeLens = function (e) {
            if (e) {
              var t = {
                range: this.asRange(e.range),
              };
              return (
                e.command && (t.command = this.asCommand(e.command)),
                void 0 !== e.data && null !== e.data && (t.data = e.data),
                t
              );
            }
          }),
          (e.prototype.asCodeLenses = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asCodeLens(e);
              });
          }),
          (e.prototype.asCodeActions = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asCodeAction(e);
            });
          }),
          (e.prototype.asCodeAction = function (e) {
            return c.CodeAction.is(e)
              ? {
                  title: e.title,
                  command: this.asCommand(e.command),
                  edit: this.asWorkspaceEdit(e.edit),
                  diagnostics: this.asDiagnostics(e.diagnostics),
                  kind: e.kind,
                }
              : {
                  command: {
                    id: e.command,
                    title: e.title,
                    arguments: e.arguments,
                  },
                  title: e.title,
                };
          }),
          (e.prototype.asCommand = function (e) {
            if (e)
              return {
                id: e.command,
                title: e.title,
                arguments: e.arguments,
              };
          }),
          (e.prototype.asDocumentSymbol = function (e) {
            var t = this,
              n =
                e.children &&
                e.children.map(function (e) {
                  return t.asDocumentSymbol(e);
                });
            return {
              name: e.name,
              detail: e.detail || '',
              kind: this.asSymbolKind(e.kind),
              range: this.asRange(e.range),
              selectionRange: this.asRange(e.selectionRange),
              children: n,
            };
          }),
          (e.prototype.asDocumentSymbols = function (e) {
            var t = this;
            return c.DocumentSymbol.is(e[0])
              ? e.map(function (e) {
                  return t.asDocumentSymbol(e);
                })
              : this.asSymbolInformations(e);
          }),
          (e.prototype.asSymbolInformations = function (e, t) {
            var n = this;
            if (e)
              return e.map(function (e) {
                return n.asSymbolInformation(e, t);
              });
          }),
          (e.prototype.asSymbolInformation = function (e, t) {
            var n = this.asLocation(
              t
                ? o({}, e.location, {
                    uri: t.toString(),
                  })
                : e.location
            );
            return {
              name: e.name,
              detail: '',
              containerName: e.containerName,
              kind: this.asSymbolKind(e.kind),
              range: n.range,
              selectionRange: n.range,
            };
          }),
          (e.prototype.asSymbolKind = function (e) {
            return e <= c.SymbolKind.TypeParameter
              ? e - 1
              : monaco.languages.SymbolKind.Property;
          }),
          (e.prototype.asDocumentHighlights = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asDocumentHighlight(e);
              });
          }),
          (e.prototype.asDocumentHighlight = function (e) {
            return {
              range: this.asRange(e.range),
              kind: s.number(e.kind)
                ? this.asDocumentHighlightKind(e.kind)
                : void 0,
            };
          }),
          (e.prototype.asDocumentHighlightKind = function (e) {
            switch (e) {
              case c.DocumentHighlightKind.Text:
                return monaco.languages.DocumentHighlightKind.Text;
              case c.DocumentHighlightKind.Read:
                return monaco.languages.DocumentHighlightKind.Read;
              case c.DocumentHighlightKind.Write:
                return monaco.languages.DocumentHighlightKind.Write;
            }
            return monaco.languages.DocumentHighlightKind.Text;
          }),
          (e.prototype.asReferences = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asLocation(e);
              });
          }),
          (e.prototype.asDefinitionResult = function (e) {
            var t = this;
            if (e)
              return s.array(e)
                ? e.map(function (e) {
                    return t.asLocation(e);
                  })
                : this.asLocation(e);
          }),
          (e.prototype.asLocation = function (e) {
            if (e)
              return {
                uri: monaco.Uri.parse(e.uri),
                range: this.asRange(e.range),
              };
          }),
          (e.prototype.asSignatureHelp = function (e) {
            if (e) {
              var t = {};
              return (
                s.number(e.activeSignature)
                  ? (t.activeSignature = e.activeSignature)
                  : (t.activeSignature = 0),
                s.number(e.activeParameter)
                  ? (t.activeParameter = e.activeParameter)
                  : (t.activeParameter = 0),
                e.signatures
                  ? (t.signatures = this.asSignatureInformations(e.signatures))
                  : (t.signatures = []),
                t
              );
            }
          }),
          (e.prototype.asSignatureInformations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asSignatureInformation(e);
            });
          }),
          (e.prototype.asSignatureInformation = function (e) {
            var t = {
              label: e.label,
            };
            return (
              e.documentation &&
                (t.documentation = this.asDocumentation(e.documentation)),
              e.parameters
                ? (t.parameters = this.asParameterInformations(e.parameters))
                : (t.parameters = []),
              t
            );
          }),
          (e.prototype.asParameterInformations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asParameterInformation(e);
            });
          }),
          (e.prototype.asParameterInformation = function (e) {
            var t = {
              label: e.label,
            };
            return (
              e.documentation &&
                (t.documentation = this.asDocumentation(e.documentation)),
              t
            );
          }),
          (e.prototype.asHover = function (e) {
            if (e)
              return {
                contents: this.asHoverContent(e.contents),
                range: this.asRange(e.range),
              };
          }),
          (e.prototype.asHoverContent = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  return t.asMarkdownString(e);
                })
              : [this.asMarkdownString(e)];
          }),
          (e.prototype.asDocumentation = function (e) {
            return s.string(e)
              ? e
              : e.kind === c.MarkupKind.PlainText
              ? e.value
              : this.asMarkdownString(e);
          }),
          (e.prototype.asMarkdownString = function (e) {
            return c.MarkupContent.is(e)
              ? {
                  value: e.value,
                }
              : s.string(e)
              ? {
                  value: e,
                }
              : {
                  value: '```' + e.language + '\n' + e.value + '\n```',
                };
          }),
          (e.prototype.asSeverity = function (e) {
            return 1 === e
              ? monaco.MarkerSeverity.Error
              : 2 === e
              ? monaco.MarkerSeverity.Warning
              : 3 === e
              ? monaco.MarkerSeverity.Info
              : monaco.MarkerSeverity.Hint;
          }),
          (e.prototype.asDiagnostics = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asDiagnostic(e);
              });
          }),
          (e.prototype.asDiagnostic = function (e) {
            return {
              code: 'number' === typeof e.code ? e.code.toString() : e.code,
              severity: this.asSeverity(e.severity),
              message: e.message,
              source: e.source,
              startLineNumber: e.range.start.line + 1,
              startColumn: e.range.start.character + 1,
              endLineNumber: e.range.end.line + 1,
              endColumn: e.range.end.character + 1,
              relatedInformation: this.asRelatedInformations(
                e.relatedInformation
              ),
            };
          }),
          (e.prototype.asRelatedInformations = function (e) {
            var t = this;
            if (e)
              return e.map(function (e) {
                return t.asRelatedInformation(e);
              });
          }),
          (e.prototype.asRelatedInformation = function (e) {
            return {
              resource: monaco.Uri.parse(e.location.uri),
              startLineNumber: e.location.range.start.line + 1,
              startColumn: e.location.range.start.character + 1,
              endLineNumber: e.location.range.end.line + 1,
              endColumn: e.location.range.end.character + 1,
              message: e.message,
            };
          }),
          (e.prototype.asCompletionResult = function (e) {
            var t = this;
            return e
              ? Array.isArray(e)
                ? {
                    isIncomplete: !1,
                    items: e.map(function (e) {
                      return t.asCompletionItem(e);
                    }),
                  }
                : {
                    isIncomplete: e.isIncomplete,
                    items: e.items.map(this.asCompletionItem.bind(this)),
                  }
              : {
                  isIncomplete: !1,
                  items: [],
                };
          }),
          (e.prototype.asCompletionItem = function (e) {
            var t = {
              label: e.label,
            };
            e.detail && (t.detail = e.detail),
              e.documentation &&
                ((t.documentation = this.asDocumentation(e.documentation)),
                (t.documentationFormat = s.string(e.documentation)
                  ? void 0
                  : e.documentation.kind)),
              e.filterText && (t.filterText = e.filterText);
            var n = this.asCompletionInsertText(e);
            if (
              (n &&
                ((t.insertText = n.text),
                (t.range = n.range),
                (t.fromEdit = n.fromEdit)),
              s.number(e.kind))
            ) {
              var o = this.asCompletionItemKind(e.kind),
                i = o[0],
                r = o[1];
              (t.kind = i), r && (t.originalItemKind = r);
            }
            return (
              e.sortText && (t.sortText = e.sortText),
              e.additionalTextEdits &&
                (t.additionalTextEdits = this.asTextEdits(
                  e.additionalTextEdits
                )),
              s.stringArray(e.commitCharacters) &&
                (t.commitCharacters = e.commitCharacters.slice()),
              e.command && (t.command = this.asCommand(e.command)),
              (!0 !== e.deprecated && !1 !== e.deprecated) ||
                (t.deprecated = e.deprecated),
              void 0 !== e.data && (t.data = e.data),
              t
            );
          }),
          (e.prototype.asCompletionItemKind = function (e) {
            return c.CompletionItemKind.Text <= e &&
              e <= c.CompletionItemKind.TypeParameter
              ? [e - 1, void 0]
              : [c.CompletionItemKind.Text, e];
          }),
          (e.prototype.asCompletionInsertText = function (e) {
            if (e.textEdit) {
              var t = this.asRange(e.textEdit.range),
                n = e.textEdit.newText;
              return {
                text:
                  e.insertTextFormat === c.InsertTextFormat.Snippet
                    ? {
                        value: n,
                      }
                    : n,
                range: t,
                fromEdit: !0,
              };
            }
            if (e.insertText) {
              n = e.insertText;
              return {
                text:
                  e.insertTextFormat === c.InsertTextFormat.Snippet
                    ? {
                        value: n,
                      }
                    : n,
                fromEdit: !1,
              };
            }
          }),
          (e.prototype.asDocumentLinks = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asDocumentLink(e);
            });
          }),
          (e.prototype.asDocumentLink = function (e) {
            return {
              range: this.asRange(e.range),
              url: e.target,
              data: e.data,
            };
          }),
          (e.prototype.asRange = function (e) {
            if (void 0 !== e) {
              if (null === e) return null;
              var t = this.asPosition(e.start),
                n = this.asPosition(e.end);
              return t instanceof monaco.Position &&
                n instanceof monaco.Position
                ? new monaco.Range(
                    t.lineNumber,
                    t.column,
                    n.lineNumber,
                    n.column
                  )
                : {
                    startLineNumber:
                      t && void 0 !== t.lineNumber ? t.lineNumber : void 0,
                    startColumn: t && void 0 !== t.column ? t.column : void 0,
                    endLineNumber:
                      n && void 0 !== n.lineNumber ? n.lineNumber : void 0,
                    endColumn: n && void 0 !== n.column ? n.column : void 0,
                  };
            }
          }),
          (e.prototype.asPosition = function (e) {
            if (void 0 !== e) {
              if (null === e) return null;
              var t = e.line,
                n = e.character,
                o = void 0 === t ? void 0 : t + 1,
                i = void 0 === n ? void 0 : n + 1;
              return void 0 !== o && void 0 !== i
                ? new monaco.Position(o, i)
                : {
                    lineNumber: o,
                    column: i,
                  };
            }
          }),
          (e.prototype.asColorInformations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asColorInformation(e);
            });
          }),
          (e.prototype.asColorInformation = function (e) {
            return {
              range: this.asRange(e.range),
              color: e.color,
            };
          }),
          (e.prototype.asColorPresentations = function (e) {
            var t = this;
            return e.map(function (e) {
              return t.asColorPresentation(e);
            });
          }),
          (e.prototype.asColorPresentation = function (e) {
            return {
              label: e.label,
              textEdit: this.asTextEdit(e.textEdit),
              additionalTextEdits: this.asTextEdits(e.additionalTextEdits),
            };
          }),
          (e.prototype.asFoldingRanges = function (e) {
            var t = this;
            return e
              ? e.map(function (e) {
                  return t.asFoldingRange(e);
                })
              : e;
          }),
          (e.prototype.asFoldingRange = function (e) {
            return {
              start: e.startLine + 1,
              end: e.endLine + 1,
              kind: this.asFoldingRangeKind(e.kind),
            };
          }),
          (e.prototype.asFoldingRangeKind = function (e) {
            if (e)
              switch (e) {
                case c.FoldingRangeKind.Comment:
                  return monaco.languages.FoldingRangeKind.Comment;
                case c.FoldingRangeKind.Imports:
                  return monaco.languages.FoldingRangeKind.Imports;
                case c.FoldingRangeKind.Region:
                  return monaco.languages.FoldingRangeKind.Region;
              }
          }),
          e
        );
      })();
      t.ProtocolToMonacoConverter = l;
    },
    nwKM: function (e, t, n) {
      'use strict';

      function o(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        o(n('oL6p')),
        o(n('Gz0x')),
        o(n('aSIW')),
        o(n('U5rG')),
        o(n('U+XB')),
        o(n('in9m')),
        o(n('LkUo')),
        o(n('zxs+')),
        o(n('1Y8E')),
        o(n('kjvz'));
    },
    ojtU: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = (function (e) {
        function t(t, n) {
          return e.call(this, t, n) || this;
        }
        return o(t, e), t;
      })(n('uoVZ').DocumentLink);
      t.default = i;
    },
    orFP: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('AL8H'),
        r = n('hC2b'),
        a = n('uoVZ'),
        s = n('BOov');

      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, s.DocumentColorRequest.type) || this;
        }
        return (
          o(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            c(c(e, 'textDocument'), 'colorProvider').dynamicRegistration = !0;
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.colorProvider) {
              var n = e.colorProvider,
                o = r.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                a = n.documentSelector || t;
              a &&
                this.register(this.messages, {
                  id: o,
                  registerOptions: Object.assign(
                    {},
                    {
                      documentSelector: a,
                    }
                  ),
                });
            }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this,
              n = this._client,
              o = function (e, o, i) {
                var r = {
                  color: e,
                  textDocument:
                    n.code2ProtocolConverter.asTextDocumentIdentifier(
                      o.document
                    ),
                  range: n.code2ProtocolConverter.asRange(o.range),
                };
                return n
                  .sendRequest(s.ColorPresentationRequest.type, r, i)
                  .then(t.asColorPresentations.bind(t), function (e) {
                    return (
                      n.logFailedRequest(s.ColorPresentationRequest.type, e),
                      Promise.resolve(null)
                    );
                  });
              },
              i = function (e, o) {
                var i = {
                  textDocument:
                    n.code2ProtocolConverter.asTextDocumentIdentifier(e),
                };
                return n
                  .sendRequest(s.DocumentColorRequest.type, i, o)
                  .then(t.asColorInformations.bind(t), function (e) {
                    return (
                      n.logFailedRequest(s.ColorPresentationRequest.type, e),
                      Promise.resolve(null)
                    );
                  });
              },
              r = n.clientOptions.middleware;
            return a.languages.registerColorProvider(e.documentSelector, {
              provideColorPresentations: function (e, t, n) {
                return r.provideColorPresentations
                  ? r.provideColorPresentations(e, t, n, o)
                  : o(e, t, n);
              },
              provideDocumentColors: function (e, t) {
                return r.provideDocumentColors
                  ? r.provideDocumentColors(e, t, i)
                  : i(e, t);
              },
            });
          }),
          (t.prototype.asColor = function (e) {
            return new a.Color(e.red, e.green, e.blue, e.alpha);
          }),
          (t.prototype.asColorInformations = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  return new a.ColorInformation(
                    t._client.protocol2CodeConverter.asRange(e.range),
                    t.asColor(e.color)
                  );
                })
              : [];
          }),
          (t.prototype.asColorPresentations = function (e) {
            var t = this;
            return Array.isArray(e)
              ? e.map(function (e) {
                  var n = new a.ColorPresentation(e.label);
                  return (
                    (n.additionalTextEdits =
                      t._client.protocol2CodeConverter.asTextEdits(
                        e.additionalTextEdits
                      )),
                    (n.textEdit = t._client.protocol2CodeConverter.asTextEdit(
                      e.textEdit
                    )),
                    n
                  );
                })
              : [];
          }),
          t
        );
      })(n('qRuN').TextDocumentFeature);
      t.ColorProviderFeature = u;
    },
    qRuN: function (e, t, n) {
      'use strict';
      (function (e) {
        var o =
            (this && this.__extends) ||
            (function () {
              var e =
                Object.setPrototypeOf ||
                ({
                  __proto__: [],
                } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                };
              return function (t, n) {
                function o() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    null === n
                      ? Object.create(n)
                      : ((o.prototype = n.prototype), new o()));
              };
            })(),
          i =
            (this && this.__read) ||
            function (e, t) {
              var n = 'function' === typeof Symbol && e[Symbol.iterator];
              if (!n) return e;
              var o,
                i,
                r = n.call(e),
                a = [];
              try {
                for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; )
                  a.push(o.value);
              } catch (s) {
                i = {
                  error: s,
                };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (i) throw i.error;
                }
              }
              return a;
            },
          r =
            (this && this.__spread) ||
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
              return e;
            },
          a =
            (this && this.__values) ||
            function (e) {
              var t = 'function' === typeof Symbol && e[Symbol.iterator],
                n = 0;
              return t
                ? t.call(e)
                : {
                    next: function () {
                      return (
                        e && n >= e.length && (e = void 0),
                        {
                          value: e && e[n++],
                          done: !e,
                        }
                      );
                    },
                  };
            };
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        var s = n('uoVZ'),
          c = n('BOov'),
          u = n('xagI'),
          l = n('LB4s'),
          d = n('hC2b'),
          p = n('ixam'),
          m = n('AL8H');
        !(function (e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        })(n('BOov'));
        var f,
          g,
          h = (function () {
            function e() {}
            return (
              (e.prototype.error = function (e) {
                console.error(e);
              }),
              (e.prototype.warn = function (e) {
                console.warn(e);
              }),
              (e.prototype.info = function (e) {
                console.info(e);
              }),
              (e.prototype.log = function (e) {
                console.log(e);
              }),
              e
            );
          })();
        !(function (e) {
          (e[(e.Continue = 1)] = 'Continue'),
            (e[(e.Shutdown = 2)] = 'Shutdown');
        })((f = t.ErrorAction || (t.ErrorAction = {}))),
          (function (e) {
            (e[(e.DoNotRestart = 1)] = 'DoNotRestart'),
              (e[(e.Restart = 2)] = 'Restart');
          })((g = t.CloseAction || (t.CloseAction = {})));
        var v,
          y,
          C,
          D = (function () {
            function e(e) {
              (this.name = e), (this.restarts = []);
            }
            return (
              (e.prototype.error = function (e, t, n) {
                return n && n <= 3 ? f.Continue : f.Shutdown;
              }),
              (e.prototype.closed = function () {
                return (
                  this.restarts.push(Date.now()),
                  this.restarts.length < 5
                    ? g.Restart
                    : this.restarts[this.restarts.length - 1] -
                        this.restarts[0] <=
                      18e4
                    ? (s.window.showErrorMessage(
                        'The ' +
                          this.name +
                          ' server crashed 5 times in the last 3 minutes. The server will not be restarted.'
                      ),
                      g.DoNotRestart)
                    : (this.restarts.shift(), g.Restart)
                );
              }),
              e
            );
          })();
        !(function (e) {
          (e[(e.Info = 1)] = 'Info'),
            (e[(e.Warn = 2)] = 'Warn'),
            (e[(e.Error = 3)] = 'Error'),
            (e[(e.Never = 4)] = 'Never');
        })((v = t.RevealOutputChannelOn || (t.RevealOutputChannelOn = {}))),
          (function (e) {
            (e[(e.Stopped = 1)] = 'Stopped'), (e[(e.Running = 2)] = 'Running');
          })((y = t.State || (t.State = {}))),
          (function (e) {
            (e[(e.Initial = 0)] = 'Initial'),
              (e[(e.Starting = 1)] = 'Starting'),
              (e[(e.StartFailed = 2)] = 'StartFailed'),
              (e[(e.Running = 3)] = 'Running'),
              (e[(e.Stopping = 4)] = 'Stopping'),
              (e[(e.Stopped = 5)] = 'Stopped');
          })(C || (C = {}));
        var _,
          x = [
            c.SymbolKind.File,
            c.SymbolKind.Module,
            c.SymbolKind.Namespace,
            c.SymbolKind.Package,
            c.SymbolKind.Class,
            c.SymbolKind.Method,
            c.SymbolKind.Property,
            c.SymbolKind.Field,
            c.SymbolKind.Constructor,
            c.SymbolKind.Enum,
            c.SymbolKind.Interface,
            c.SymbolKind.Function,
            c.SymbolKind.Variable,
            c.SymbolKind.Constant,
            c.SymbolKind.String,
            c.SymbolKind.Number,
            c.SymbolKind.Boolean,
            c.SymbolKind.Array,
            c.SymbolKind.Object,
            c.SymbolKind.Key,
            c.SymbolKind.Null,
            c.SymbolKind.EnumMember,
            c.SymbolKind.Struct,
            c.SymbolKind.Event,
            c.SymbolKind.Operator,
            c.SymbolKind.TypeParameter,
          ],
          P = [
            c.CompletionItemKind.Text,
            c.CompletionItemKind.Method,
            c.CompletionItemKind.Function,
            c.CompletionItemKind.Constructor,
            c.CompletionItemKind.Field,
            c.CompletionItemKind.Variable,
            c.CompletionItemKind.Class,
            c.CompletionItemKind.Interface,
            c.CompletionItemKind.Module,
            c.CompletionItemKind.Property,
            c.CompletionItemKind.Unit,
            c.CompletionItemKind.Value,
            c.CompletionItemKind.Enum,
            c.CompletionItemKind.Keyword,
            c.CompletionItemKind.Snippet,
            c.CompletionItemKind.Color,
            c.CompletionItemKind.File,
            c.CompletionItemKind.Reference,
            c.CompletionItemKind.Folder,
            c.CompletionItemKind.EnumMember,
            c.CompletionItemKind.Constant,
            c.CompletionItemKind.Struct,
            c.CompletionItemKind.Event,
            c.CompletionItemKind.Operator,
            c.CompletionItemKind.TypeParameter,
          ];

        function b(e, t) {
          return void 0 === e[t] && (e[t] = {}), e[t];
        }
        !(function (e) {
          e.is = function (e) {
            var t = e;
            return (
              t &&
              d.func(t.register) &&
              d.func(t.unregister) &&
              d.func(t.dispose) &&
              void 0 !== t.messages
            );
          };
        })(_ || (_ = {}));
        var w = (function () {
            function e(e, t, n, o, i, r) {
              (this._client = e),
                (this._event = t),
                (this._type = n),
                (this._middleware = o),
                (this._createParams = i),
                (this._selectorFilter = r),
                (this._selectors = new Map());
            }
            return (
              (e.textDocumentFilter = function (e, t) {
                var n, o;
                try {
                  for (var i = a(e), r = i.next(); !r.done; r = i.next()) {
                    var c = r.value;
                    if (s.languages.match(c, t)) return !0;
                  }
                } catch (u) {
                  n = {
                    error: u,
                  };
                } finally {
                  try {
                    r && !r.done && (o = i.return) && o.call(i);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return !1;
              }),
              (e.prototype.register = function (e, t) {
                t.registerOptions.documentSelector &&
                  (this._listener ||
                    (this._listener = this._event(this.callback, this)),
                  this._selectors.set(
                    t.id,
                    t.registerOptions.documentSelector
                  ));
              }),
              (e.prototype.callback = function (e) {
                var t = this;
                (this._selectorFilter &&
                  !this._selectorFilter(this._selectors.values(), e)) ||
                  (this._middleware
                    ? this._middleware(e, function (e) {
                        return t._client.sendNotification(
                          t._type,
                          t._createParams(e)
                        );
                      })
                    : this._client.sendNotification(
                        this._type,
                        this._createParams(e)
                      ),
                  this.notificationSent(e));
              }),
              (e.prototype.notificationSent = function (e) {}),
              (e.prototype.unregister = function (e) {
                this._selectors.delete(e),
                  0 === this._selectors.size &&
                    this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.dispose = function () {
                this._selectors.clear(),
                  this._listener && this._listener.dispose();
              }),
              e
            );
          })(),
          S = (function (e) {
            function t(t, n) {
              var o =
                e.call(
                  this,
                  t,
                  s.workspace.onDidOpenTextDocument,
                  c.DidOpenTextDocumentNotification.type,
                  t.clientOptions.middleware.didOpen,
                  function (e) {
                    return t.code2ProtocolConverter.asOpenTextDocumentParams(e);
                  },
                  w.textDocumentFilter
                ) || this;
              return (o._syncedDocuments = n), o;
            }
            return (
              o(t, e),
              Object.defineProperty(t.prototype, 'messages', {
                get: function () {
                  return c.DidOpenTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'synchronization').dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.openClose &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: {
                      documentSelector: t,
                    },
                  });
              }),
              (t.prototype.register = function (t, n) {
                var o = this;
                if (
                  (e.prototype.register.call(this, t, n),
                  n.registerOptions.documentSelector)
                ) {
                  var i = n.registerOptions.documentSelector;
                  s.workspace.textDocuments.forEach(function (e) {
                    var t = e.uri.toString();
                    if (!o._syncedDocuments.has(t) && s.languages.match(i, e)) {
                      var n = o._client.clientOptions.middleware,
                        r = function (e) {
                          o._client.sendNotification(
                            o._type,
                            o._createParams(e)
                          );
                        };
                      n.didOpen ? n.didOpen(e, r) : r(e),
                        o._syncedDocuments.set(t, e);
                    }
                  });
                }
              }),
              (t.prototype.notificationSent = function (t) {
                e.prototype.notificationSent.call(this, t),
                  this._syncedDocuments.set(t.uri.toString(), t);
              }),
              t
            );
          })(w),
          R = (function (e) {
            function t(t, n) {
              var o =
                e.call(
                  this,
                  t,
                  s.workspace.onDidCloseTextDocument,
                  c.DidCloseTextDocumentNotification.type,
                  t.clientOptions.middleware.didClose,
                  function (e) {
                    return t.code2ProtocolConverter.asCloseTextDocumentParams(
                      e
                    );
                  },
                  w.textDocumentFilter
                ) || this;
              return (o._syncedDocuments = n), o;
            }
            return (
              o(t, e),
              Object.defineProperty(t.prototype, 'messages', {
                get: function () {
                  return c.DidCloseTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'synchronization').dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.openClose &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: {
                      documentSelector: t,
                    },
                  });
              }),
              (t.prototype.notificationSent = function (t) {
                e.prototype.notificationSent.call(this, t),
                  this._syncedDocuments.delete(t.uri.toString());
              }),
              (t.prototype.unregister = function (t) {
                var n = this,
                  o = this._selectors.get(t);
                e.prototype.unregister.call(this, t);
                var i = this._selectors.values();
                this._syncedDocuments.forEach(function (e) {
                  if (s.languages.match(o, e) && !n._selectorFilter(i, e)) {
                    var t = n._client.clientOptions.middleware,
                      r = function (e) {
                        n._client.sendNotification(n._type, n._createParams(e));
                      };
                    n._syncedDocuments.delete(e.uri.toString()),
                      t.didClose ? t.didClose(e, r) : r(e);
                  }
                });
              }),
              t
            );
          })(w),
          T = (function () {
            function e(e) {
              (this._client = e),
                (this._changeData = new Map()),
                (this._forcingDelivery = !1);
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return c.DidChangeTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'synchronization').dynamicRegistration =
                  !0;
              }),
              (e.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  void 0 !== n.change &&
                  n.change !== c.TextDocumentSyncKind.None &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      {
                        syncKind: n.change,
                      }
                    ),
                  });
              }),
              (e.prototype.register = function (e, t) {
                t.registerOptions.documentSelector &&
                  (this._listener ||
                    (this._listener = s.workspace.onDidChangeTextDocument(
                      this.callback,
                      this
                    )),
                  this._changeData.set(t.id, {
                    documentSelector: t.registerOptions.documentSelector,
                    syncKind: t.registerOptions.syncKind,
                  }));
              }),
              (e.prototype.callback = function (e) {
                var t,
                  n,
                  o = this;
                if (0 !== e.contentChanges.length) {
                  var i = function (t) {
                      if (s.languages.match(t.documentSelector, e.document)) {
                        var n = r._client.clientOptions.middleware;
                        if (t.syncKind === c.TextDocumentSyncKind.Incremental) {
                          var i =
                            r._client.code2ProtocolConverter.asChangeTextDocumentParams(
                              e
                            );
                          n.didChange
                            ? n.didChange(e, function () {
                                return o._client.sendNotification(
                                  c.DidChangeTextDocumentNotification.type,
                                  i
                                );
                              })
                            : r._client.sendNotification(
                                c.DidChangeTextDocumentNotification.type,
                                i
                              );
                        } else if (t.syncKind === c.TextDocumentSyncKind.Full) {
                          var a = function (e) {
                            o._changeDelayer
                              ? (o._changeDelayer.uri !==
                                  e.document.uri.toString() &&
                                  (o.forceDelivery(),
                                  (o._changeDelayer.uri =
                                    e.document.uri.toString())),
                                o._changeDelayer.delayer.trigger(function () {
                                  o._client.sendNotification(
                                    c.DidChangeTextDocumentNotification.type,
                                    o._client.code2ProtocolConverter.asChangeTextDocumentParams(
                                      e.document
                                    )
                                  );
                                }))
                              : ((o._changeDelayer = {
                                  uri: e.document.uri.toString(),
                                  delayer: new p.Delayer(200),
                                }),
                                o._changeDelayer.delayer.trigger(function () {
                                  o._client.sendNotification(
                                    c.DidChangeTextDocumentNotification.type,
                                    o._client.code2ProtocolConverter.asChangeTextDocumentParams(
                                      e.document
                                    )
                                  );
                                }, -1));
                          };
                          n.didChange ? n.didChange(e, a) : a(e);
                        }
                      }
                    },
                    r = this;
                  try {
                    for (
                      var u = a(this._changeData.values()), l = u.next();
                      !l.done;
                      l = u.next()
                    ) {
                      i(l.value);
                    }
                  } catch (d) {
                    t = {
                      error: d,
                    };
                  } finally {
                    try {
                      l && !l.done && (n = u.return) && n.call(u);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
              }),
              (e.prototype.unregister = function (e) {
                this._changeData.delete(e),
                  0 === this._changeData.size &&
                    this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.dispose = function () {
                (this._changeDelayer = void 0),
                  (this._forcingDelivery = !1),
                  this._changeData.clear(),
                  this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.forceDelivery = function () {
                if (!this._forcingDelivery && this._changeDelayer)
                  try {
                    (this._forcingDelivery = !0),
                      this._changeDelayer.delayer.forceDelivery();
                  } finally {
                    this._forcingDelivery = !1;
                  }
              }),
              e
            );
          })(),
          O = (function (e) {
            function t(t) {
              return (
                e.call(
                  this,
                  t,
                  s.workspace.onWillSaveTextDocument,
                  c.WillSaveTextDocumentNotification.type,
                  t.clientOptions.middleware.willSave,
                  function (e) {
                    return t.code2ProtocolConverter.asWillSaveTextDocumentParams(
                      e
                    );
                  },
                  function (e, t) {
                    return w.textDocumentFilter(e, t.document);
                  }
                ) || this
              );
            }
            return (
              o(t, e),
              Object.defineProperty(t.prototype, 'messages', {
                get: function () {
                  return c.WillSaveTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'synchronization').willSave = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.willSave &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: {
                      documentSelector: t,
                    },
                  });
              }),
              t
            );
          })(w),
          k = (function () {
            function e(e) {
              (this._client = e), (this._selectors = new Map());
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return c.WillSaveTextDocumentWaitUntilRequest.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'synchronization').willSaveWaitUntil =
                  !0;
              }),
              (e.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.willSaveWaitUntil &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: {
                      documentSelector: t,
                    },
                  });
              }),
              (e.prototype.register = function (e, t) {
                t.registerOptions.documentSelector &&
                  (this._listener ||
                    (this._listener = s.workspace.onWillSaveTextDocument(
                      this.callback,
                      this
                    )),
                  this._selectors.set(
                    t.id,
                    t.registerOptions.documentSelector
                  ));
              }),
              (e.prototype.callback = function (e) {
                var t = this;
                if (
                  w.textDocumentFilter(this._selectors.values(), e.document)
                ) {
                  var n = this._client.clientOptions.middleware,
                    o = function (e) {
                      return t._client
                        .sendRequest(
                          c.WillSaveTextDocumentWaitUntilRequest.type,
                          t._client.code2ProtocolConverter.asWillSaveTextDocumentParams(
                            e
                          )
                        )
                        .then(function (e) {
                          var n =
                            t._client.protocol2CodeConverter.asTextEdits(e);
                          return void 0 === n ? [] : n;
                        });
                    };
                  e.waitUntil(
                    n.willSaveWaitUntil ? n.willSaveWaitUntil(e, o) : o(e)
                  );
                }
              }),
              (e.prototype.unregister = function (e) {
                this._selectors.delete(e),
                  0 === this._selectors.size &&
                    this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              (e.prototype.dispose = function () {
                this._selectors.clear(),
                  this._listener &&
                    (this._listener.dispose(), (this._listener = void 0));
              }),
              e
            );
          })(),
          F = (function (e) {
            function t(t) {
              var n =
                e.call(
                  this,
                  t,
                  s.workspace.onDidSaveTextDocument,
                  c.DidSaveTextDocumentNotification.type,
                  t.clientOptions.middleware.didSave,
                  function (e) {
                    return t.code2ProtocolConverter.asSaveTextDocumentParams(
                      e,
                      n._includeText
                    );
                  },
                  w.textDocumentFilter
                ) || this;
              return n;
            }
            return (
              o(t, e),
              Object.defineProperty(t.prototype, 'messages', {
                get: function () {
                  return c.DidSaveTextDocumentNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'synchronization').didSave = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                var n = e.resolvedTextDocumentSync;
                t &&
                  n &&
                  n.save &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      {
                        includeText: !!n.save.includeText,
                      }
                    ),
                  });
              }),
              (t.prototype.register = function (t, n) {
                (this._includeText = !!n.registerOptions.includeText),
                  e.prototype.register.call(this, t, n);
              }),
              t
            );
          })(w),
          E = (function () {
            function e(e, t) {
              (this._client = e),
                (this._notifyFileEvent = t),
                (this._watchers = new Map());
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return c.DidChangeWatchedFilesNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                b(
                  b(e, 'workspace'),
                  'didChangeWatchedFiles'
                ).dynamicRegistration = !0;
              }),
              (e.prototype.initialize = function (e, t) {}),
              (e.prototype.register = function (e, t) {
                var n, o;
                if (Array.isArray(t.registerOptions.watchers)) {
                  var i = [];
                  try {
                    for (
                      var r = a(t.registerOptions.watchers), u = r.next();
                      !u.done;
                      u = r.next()
                    ) {
                      var l = u.value;
                      if (d.string(l.globPattern)) {
                        var p = !0,
                          m = !0,
                          f = !0;
                        void 0 !== l.kind &&
                          null !== l.kind &&
                          ((p = 0 !== (l.kind & c.WatchKind.Create)),
                          (m = 0 != (l.kind & c.WatchKind.Change)),
                          (f = 0 != (l.kind & c.WatchKind.Delete)));
                        var g = s.workspace.createFileSystemWatcher(
                          l.globPattern,
                          !p,
                          !m,
                          !f
                        );
                        this.hookListeners(g, p, m, f), i.push(g);
                      }
                    }
                  } catch (h) {
                    n = {
                      error: h,
                    };
                  } finally {
                    try {
                      u && !u.done && (o = r.return) && o.call(r);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  this._watchers.set(t.id, i);
                }
              }),
              (e.prototype.registerRaw = function (e, t) {
                var n,
                  o,
                  i = [];
                try {
                  for (var r = a(t), s = r.next(); !s.done; s = r.next()) {
                    var c = s.value;
                    this.hookListeners(c, !0, !0, !0, i);
                  }
                } catch (u) {
                  n = {
                    error: u,
                  };
                } finally {
                  try {
                    s && !s.done && (o = r.return) && o.call(r);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                this._watchers.set(e, i);
              }),
              (e.prototype.hookListeners = function (e, t, n, o, i) {
                var r = this;
                t &&
                  e.onDidCreate(
                    function (e) {
                      return r._notifyFileEvent({
                        uri: r._client.code2ProtocolConverter.asUri(e),
                        type: c.FileChangeType.Created,
                      });
                    },
                    null,
                    i
                  ),
                  n &&
                    e.onDidChange(
                      function (e) {
                        return r._notifyFileEvent({
                          uri: r._client.code2ProtocolConverter.asUri(e),
                          type: c.FileChangeType.Changed,
                        });
                      },
                      null,
                      i
                    ),
                  o &&
                    e.onDidDelete(
                      function (e) {
                        return r._notifyFileEvent({
                          uri: r._client.code2ProtocolConverter.asUri(e),
                          type: c.FileChangeType.Deleted,
                        });
                      },
                      null,
                      i
                    );
              }),
              (e.prototype.unregister = function (e) {
                var t,
                  n,
                  o = this._watchers.get(e);
                if (o)
                  try {
                    for (var i = a(o), r = i.next(); !r.done; r = i.next()) {
                      r.value.dispose();
                    }
                  } catch (s) {
                    t = {
                      error: s,
                    };
                  } finally {
                    try {
                      r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
              }),
              (e.prototype.dispose = function () {
                this._watchers.forEach(function (e) {
                  var t, n;
                  try {
                    for (var o = a(e), i = o.next(); !i.done; i = o.next()) {
                      i.value.dispose();
                    }
                  } catch (r) {
                    t = {
                      error: r,
                    };
                  } finally {
                    try {
                      i && !i.done && (n = o.return) && n.call(o);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }),
                  this._watchers.clear();
              }),
              e
            );
          })(),
          M = (function () {
            function e(e, t) {
              (this._client = e),
                (this._message = t),
                (this._providers = new Map());
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return this._message;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.register = function (e, t) {
                if (e.method !== this.messages.method)
                  throw new Error(
                    'Register called on wrong feature. Requested ' +
                      e.method +
                      ' but reached feature ' +
                      this.messages.method
                  );
                if (t.registerOptions.documentSelector) {
                  var n = this.registerLanguageProvider(t.registerOptions);
                  n && this._providers.set(t.id, n);
                }
              }),
              (e.prototype.unregister = function (e) {
                var t = this._providers.get(e);
                t && t.dispose();
              }),
              (e.prototype.dispose = function () {
                this._providers.forEach(function (e) {
                  e.dispose();
                }),
                  this._providers.clear();
              }),
              e
            );
          })();
        t.TextDocumentFeature = M;
        var I = (function () {
            function e(e, t) {
              (this._client = e),
                (this._message = t),
                (this._providers = new Map());
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return this._message;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.register = function (e, t) {
                if (e.method !== this.messages.method)
                  throw new Error(
                    'Register called on wron feature. Requested ' +
                      e.method +
                      ' but reached feature ' +
                      this.messages.method
                  );
                var n = this.registerLanguageProvider(t.registerOptions);
                n && this._providers.set(t.id, n);
              }),
              (e.prototype.unregister = function (e) {
                var t = this._providers.get(e);
                t && t.dispose();
              }),
              (e.prototype.dispose = function () {
                this._providers.forEach(function (e) {
                  e.dispose();
                }),
                  this._providers.clear();
              }),
              e
            );
          })(),
          L = (function (e) {
            function t(t) {
              return e.call(this, t, c.CompletionRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = b(b(e, 'textDocument'), 'completion');
                (t.dynamicRegistration = !0),
                  (t.contextSupport = !0),
                  (t.completionItem = {
                    snippetSupport: !0,
                    commitCharactersSupport: !0,
                    documentationFormat: [
                      c.MarkupKind.Markdown,
                      c.MarkupKind.PlainText,
                    ],
                    deprecatedSupport: !0,
                    preselectSupport: !0,
                  }),
                  (t.completionItemKind = {
                    valueSet: P,
                  });
              }),
              (t.prototype.initialize = function (e, t) {
                e.completionProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      e.completionProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = e.triggerCharacters || [],
                  n = this._client,
                  o = function (e, t, o, i) {
                    return n
                      .sendRequest(
                        c.CompletionRequest.type,
                        n.code2ProtocolConverter.asCompletionParams(e, t, o),
                        i
                      )
                      .then(
                        n.protocol2CodeConverter.asCompletionResult,
                        function (e) {
                          return (
                            n.logFailedRequest(c.CompletionRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  i = function (e, t) {
                    return n
                      .sendRequest(
                        c.CompletionResolveRequest.type,
                        n.code2ProtocolConverter.asCompletionItem(e),
                        t
                      )
                      .then(
                        n.protocol2CodeConverter.asCompletionItem,
                        function (t) {
                          return (
                            n.logFailedRequest(
                              c.CompletionResolveRequest.type,
                              t
                            ),
                            Promise.resolve(e)
                          );
                        }
                      );
                  },
                  a = this._client.clientOptions.middleware;
                return s.languages.registerCompletionItemProvider.apply(
                  s.languages,
                  r(
                    [
                      e.documentSelector,
                      {
                        provideCompletionItems: function (e, t, n, i) {
                          return a.provideCompletionItem
                            ? a.provideCompletionItem(e, t, i, n, o)
                            : o(e, t, i, n);
                        },
                        resolveCompletionItem: e.resolveProvider
                          ? function (e, t) {
                              return a.resolveCompletionItem
                                ? a.resolveCompletionItem(e, t, i)
                                : i(e, t);
                            }
                          : void 0,
                      },
                    ],
                    t
                  )
                );
              }),
              t
            );
          })(M),
          K = (function (e) {
            function t(t) {
              return e.call(this, t, c.HoverRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = b(b(e, 'textDocument'), 'hover');
                (t.dynamicRegistration = !0),
                  (t.contentFormat = [
                    c.MarkupKind.Markdown,
                    c.MarkupKind.PlainText,
                  ]);
              }),
              (t.prototype.initialize = function (e, t) {
                e.hoverProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o) {
                    return t
                      .sendRequest(
                        c.HoverRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        o
                      )
                      .then(t.protocol2CodeConverter.asHover, function (e) {
                        return (
                          t.logFailedRequest(c.HoverRequest.type, e),
                          Promise.resolve(null)
                        );
                      });
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerHoverProvider(e.documentSelector, {
                  provideHover: function (e, t, i) {
                    return o.provideHover
                      ? o.provideHover(e, t, i, n)
                      : n(e, t, i);
                  },
                });
              }),
              t
            );
          })(M),
          q = (function (e) {
            function t(t) {
              return e.call(this, t, c.SignatureHelpRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = b(b(e, 'textDocument'), 'signatureHelp');
                (t.dynamicRegistration = !0),
                  (t.signatureInformation = {
                    documentationFormat: [
                      c.MarkupKind.Markdown,
                      c.MarkupKind.PlainText,
                    ],
                  });
              }),
              (t.prototype.initialize = function (e, t) {
                e.signatureHelpProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      e.signatureHelpProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o) {
                    return t
                      .sendRequest(
                        c.SignatureHelpRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        o
                      )
                      .then(
                        t.protocol2CodeConverter.asSignatureHelp,
                        function (e) {
                          return (
                            t.logFailedRequest(c.SignatureHelpRequest.type, e),
                            Promise.resolve(null)
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware,
                  i = e.triggerCharacters || [];
                return s.languages.registerSignatureHelpProvider.apply(
                  s.languages,
                  r(
                    [
                      e.documentSelector,
                      {
                        provideSignatureHelp: function (e, t, i) {
                          return o.provideSignatureHelp
                            ? o.provideSignatureHelp(e, t, i, n)
                            : n(e, t, i);
                        },
                      },
                    ],
                    i
                  )
                );
              }),
              t
            );
          })(M),
          N = (function (e) {
            function t(t) {
              return e.call(this, t, c.DefinitionRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'definition').dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.definitionProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o) {
                    return t
                      .sendRequest(
                        c.DefinitionRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        o
                      )
                      .then(
                        t.protocol2CodeConverter.asDefinitionResult,
                        function (e) {
                          return (
                            t.logFailedRequest(c.DefinitionRequest.type, e),
                            Promise.resolve(null)
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerDefinitionProvider(
                  e.documentSelector,
                  {
                    provideDefinition: function (e, t, i) {
                      return o.provideDefinition
                        ? o.provideDefinition(e, t, i, n)
                        : n(e, t, i);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          H = (function (e) {
            function t(t) {
              return e.call(this, t, c.ReferencesRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'references').dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.referencesProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o, i) {
                    return t
                      .sendRequest(
                        c.ReferencesRequest.type,
                        t.code2ProtocolConverter.asReferenceParams(e, n, o),
                        i
                      )
                      .then(
                        t.protocol2CodeConverter.asReferences,
                        function (e) {
                          return (
                            t.logFailedRequest(c.ReferencesRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerReferenceProvider(
                  e.documentSelector,
                  {
                    provideReferences: function (e, t, i, r) {
                      return o.provideReferences
                        ? o.provideReferences(e, t, i, r, n)
                        : n(e, t, i, r);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          j = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentHighlightRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(
                  b(e, 'textDocument'),
                  'documentHighlight'
                ).dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentHighlightProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o) {
                    return t
                      .sendRequest(
                        c.DocumentHighlightRequest.type,
                        t.code2ProtocolConverter.asTextDocumentPositionParams(
                          e,
                          n
                        ),
                        o
                      )
                      .then(
                        t.protocol2CodeConverter.asDocumentHighlights,
                        function (e) {
                          return (
                            t.logFailedRequest(
                              c.DocumentHighlightRequest.type,
                              e
                            ),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerDocumentHighlightProvider(
                  e.documentSelector,
                  {
                    provideDocumentHighlights: function (e, t, i) {
                      return o.provideDocumentHighlights
                        ? o.provideDocumentHighlights(e, t, i, n)
                        : n(e, t, i);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          A = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentSymbolRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = b(b(e, 'textDocument'), 'documentSymbol');
                (t.dynamicRegistration = !0),
                  (t.symbolKind = {
                    valueSet: x,
                  }),
                  (t.hierarchicalDocumentSymbolSupport = !0);
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentSymbolProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.DocumentSymbolRequest.type,
                        t.code2ProtocolConverter.asDocumentSymbolParams(e),
                        n
                      )
                      .then(
                        function (e) {
                          if (null !== e) {
                            if (0 === e.length) return [];
                            var n = e[0];
                            return c.DocumentSymbol.is(n)
                              ? t.protocol2CodeConverter.asDocumentSymbols(e)
                              : t.protocol2CodeConverter.asSymbolInformations(
                                  e
                                );
                          }
                        },
                        function (e) {
                          return (
                            t.logFailedRequest(c.DocumentSymbolRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerDocumentSymbolProvider(
                  e.documentSelector,
                  {
                    provideDocumentSymbols: function (e, t) {
                      return o.provideDocumentSymbols
                        ? o.provideDocumentSymbols(e, t, n)
                        : n(e, t);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          U = (function (e) {
            function t(t) {
              return e.call(this, t, c.WorkspaceSymbolRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = b(b(e, 'workspace'), 'symbol');
                (t.dynamicRegistration = !0),
                  (t.symbolKind = {
                    valueSet: x,
                  });
              }),
              (t.prototype.initialize = function (e) {
                e.workspaceSymbolProvider &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: void 0,
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.WorkspaceSymbolRequest.type,
                        {
                          query: e,
                        },
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asSymbolInformations,
                        function (e) {
                          return (
                            t.logFailedRequest(
                              c.WorkspaceSymbolRequest.type,
                              e
                            ),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerWorkspaceSymbolProvider({
                  provideWorkspaceSymbols: function (e, t) {
                    return o.provideWorkspaceSymbols
                      ? o.provideWorkspaceSymbols(e, t, n)
                      : n(e, t);
                  },
                });
              }),
              t
            );
          })(I),
          z = (function (e) {
            function t(t) {
              return e.call(this, t, c.CodeActionRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                var t = b(b(e, 'textDocument'), 'codeAction');
                (t.dynamicRegistration = !0),
                  (t.codeActionLiteralSupport = {
                    codeActionKind: {
                      valueSet: [
                        '',
                        c.CodeActionKind.QuickFix,
                        c.CodeActionKind.Refactor,
                        c.CodeActionKind.RefactorExtract,
                        c.CodeActionKind.RefactorInline,
                        c.CodeActionKind.RefactorRewrite,
                        c.CodeActionKind.Source,
                        c.CodeActionKind.SourceOrganizeImports,
                      ],
                    },
                  });
              }),
              (t.prototype.initialize = function (e, t) {
                e.codeActionProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o, i) {
                    var r = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      range: t.code2ProtocolConverter.asRange(n),
                      context: t.code2ProtocolConverter.asCodeActionContext(o),
                    };
                    return t.sendRequest(c.CodeActionRequest.type, r, i).then(
                      function (e) {
                        var n, o;
                        if (null !== e) {
                          var i = [];
                          try {
                            for (
                              var r = a(e), s = r.next();
                              !s.done;
                              s = r.next()
                            ) {
                              var u = s.value;
                              c.Command.is(u)
                                ? i.push(t.protocol2CodeConverter.asCommand(u))
                                : i.push(
                                    t.protocol2CodeConverter.asCodeAction(u)
                                  );
                            }
                          } catch (l) {
                            n = {
                              error: l,
                            };
                          } finally {
                            try {
                              s && !s.done && (o = r.return) && o.call(r);
                            } finally {
                              if (n) throw n.error;
                            }
                          }
                          return i;
                        }
                      },
                      function (e) {
                        return (
                          t.logFailedRequest(c.CodeActionRequest.type, e),
                          Promise.resolve([])
                        );
                      }
                    );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerCodeActionsProvider(
                  e.documentSelector,
                  {
                    provideCodeActions: function (e, t, i, r) {
                      return o.provideCodeActions
                        ? o.provideCodeActions(e, t, i, r, n)
                        : n(e, t, i, r);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          W = (function (e) {
            function t(t) {
              return e.call(this, t, c.CodeLensRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'codeLens').dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.codeLensProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      e.codeLensProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.CodeLensRequest.type,
                        t.code2ProtocolConverter.asCodeLensParams(e),
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asCodeLenses,
                        function (e) {
                          return (
                            t.logFailedRequest(c.CodeLensRequest.type, e),
                            Promise.resolve([])
                          );
                        }
                      );
                  },
                  o = function (e, n) {
                    return t
                      .sendRequest(
                        c.CodeLensResolveRequest.type,
                        t.code2ProtocolConverter.asCodeLens(e),
                        n
                      )
                      .then(t.protocol2CodeConverter.asCodeLens, function (n) {
                        return (
                          t.logFailedRequest(c.CodeLensResolveRequest.type, n),
                          e
                        );
                      });
                  },
                  i = t.clientOptions.middleware;
                return s.languages.registerCodeLensProvider(
                  e.documentSelector,
                  {
                    provideCodeLenses: function (e, t) {
                      return i.provideCodeLenses
                        ? i.provideCodeLenses(e, t, n)
                        : n(e, t);
                    },
                    resolveCodeLens: e.resolveProvider
                      ? function (e, t) {
                          return i.resolveCodeLens
                            ? i.resolveCodeLens(e, t, o)
                            : o(e, t);
                        }
                      : void 0,
                  }
                );
              }),
              t
            );
          })(M),
          B = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentFormattingRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'formatting').dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentFormattingProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o) {
                    var i = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      options: t.code2ProtocolConverter.asFormattingOptions(n),
                    };
                    return t
                      .sendRequest(c.DocumentFormattingRequest.type, i, o)
                      .then(t.protocol2CodeConverter.asTextEdits, function (e) {
                        return (
                          t.logFailedRequest(
                            c.DocumentFormattingRequest.type,
                            e
                          ),
                          Promise.resolve([])
                        );
                      });
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerDocumentFormattingEditProvider(
                  e.documentSelector,
                  {
                    provideDocumentFormattingEdits: function (e, t, i) {
                      return o.provideDocumentFormattingEdits
                        ? o.provideDocumentFormattingEdits(e, t, i, n)
                        : n(e, t, i);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          V = (function (e) {
            function t(t) {
              return (
                e.call(this, t, c.DocumentRangeFormattingRequest.type) || this
              );
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'rangeFormatting').dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentRangeFormattingProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o, i) {
                    var r = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      range: t.code2ProtocolConverter.asRange(n),
                      options: t.code2ProtocolConverter.asFormattingOptions(o),
                    };
                    return t
                      .sendRequest(c.DocumentRangeFormattingRequest.type, r, i)
                      .then(t.protocol2CodeConverter.asTextEdits, function (e) {
                        return (
                          t.logFailedRequest(
                            c.DocumentRangeFormattingRequest.type,
                            e
                          ),
                          Promise.resolve([])
                        );
                      });
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerDocumentRangeFormattingEditProvider(
                  e.documentSelector,
                  {
                    provideDocumentRangeFormattingEdits: function (e, t, i, r) {
                      return o.provideDocumentRangeFormattingEdits
                        ? o.provideDocumentRangeFormattingEdits(e, t, i, r, n)
                        : n(e, t, i, r);
                    },
                  }
                );
              }),
              t
            );
          })(M),
          G = (function (e) {
            function t(t) {
              return (
                e.call(this, t, c.DocumentOnTypeFormattingRequest.type) || this
              );
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(
                  b(e, 'textDocument'),
                  'onTypeFormatting'
                ).dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentOnTypeFormattingProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      e.documentOnTypeFormattingProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = e.moreTriggerCharacter || [],
                  o = function (e, n, o, i, r) {
                    var a = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      position: t.code2ProtocolConverter.asPosition(n),
                      ch: o,
                      options: t.code2ProtocolConverter.asFormattingOptions(i),
                    };
                    return t
                      .sendRequest(c.DocumentOnTypeFormattingRequest.type, a, r)
                      .then(t.protocol2CodeConverter.asTextEdits, function (e) {
                        return (
                          t.logFailedRequest(
                            c.DocumentOnTypeFormattingRequest.type,
                            e
                          ),
                          Promise.resolve([])
                        );
                      });
                  },
                  i = t.clientOptions.middleware;
                return s.languages.registerOnTypeFormattingEditProvider.apply(
                  s.languages,
                  r(
                    [
                      e.documentSelector,
                      {
                        provideOnTypeFormattingEdits: function (e, t, n, r, a) {
                          return i.provideOnTypeFormattingEdits
                            ? i.provideOnTypeFormattingEdits(e, t, n, r, a, o)
                            : o(e, t, n, r, a);
                        },
                      },
                      e.firstTriggerCharacter,
                    ],
                    n
                  )
                );
              }),
              t
            );
          })(M),
          Z = (function (e) {
            function t(t) {
              return e.call(this, t, c.RenameRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'rename').dynamicRegistration = !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.renameProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      }
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n, o, i) {
                    var r = {
                      textDocument:
                        t.code2ProtocolConverter.asTextDocumentIdentifier(e),
                      position: t.code2ProtocolConverter.asPosition(n),
                      newName: o,
                    };
                    return t
                      .sendRequest(c.RenameRequest.type, r, i)
                      .then(
                        t.protocol2CodeConverter.asWorkspaceEdit,
                        function (e) {
                          return (
                            t.logFailedRequest(c.RenameRequest.type, e),
                            Promise.reject(new Error(e.message))
                          );
                        }
                      );
                  },
                  o = t.clientOptions.middleware;
                return s.languages.registerRenameProvider(e.documentSelector, {
                  provideRenameEdits: function (e, t, i, r) {
                    return o.provideRenameEdits
                      ? o.provideRenameEdits(e, t, i, r, n)
                      : n(e, t, i, r);
                  },
                });
              }),
              t
            );
          })(M),
          $ = (function (e) {
            function t(t) {
              return e.call(this, t, c.DocumentLinkRequest.type) || this;
            }
            return (
              o(t, e),
              (t.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'textDocument'), 'documentLink').dynamicRegistration =
                  !0;
              }),
              (t.prototype.initialize = function (e, t) {
                e.documentLinkProvider &&
                  t &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: t,
                      },
                      e.documentLinkProvider
                    ),
                  });
              }),
              (t.prototype.registerLanguageProvider = function (e) {
                var t = this._client,
                  n = function (e, n) {
                    return t
                      .sendRequest(
                        c.DocumentLinkRequest.type,
                        t.code2ProtocolConverter.asDocumentLinkParams(e),
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asDocumentLinks,
                        function (e) {
                          t.logFailedRequest(c.DocumentLinkRequest.type, e),
                            Promise.resolve(new Error(e.message));
                        }
                      );
                  },
                  o = function (e, n) {
                    return t
                      .sendRequest(
                        c.DocumentLinkResolveRequest.type,
                        t.code2ProtocolConverter.asDocumentLink(e),
                        n
                      )
                      .then(
                        t.protocol2CodeConverter.asDocumentLink,
                        function (e) {
                          t.logFailedRequest(
                            c.DocumentLinkResolveRequest.type,
                            e
                          ),
                            Promise.resolve(new Error(e.message));
                        }
                      );
                  },
                  i = t.clientOptions.middleware;
                return s.languages.registerDocumentLinkProvider(
                  e.documentSelector,
                  {
                    provideDocumentLinks: function (e, t) {
                      return i.provideDocumentLinks
                        ? i.provideDocumentLinks(e, t, n)
                        : n(e, t);
                    },
                    resolveDocumentLink: e.resolveProvider
                      ? function (e, t) {
                          return i.resolveDocumentLink
                            ? i.resolveDocumentLink(e, t, o)
                            : o(e, t);
                        }
                      : void 0,
                  }
                );
              }),
              t
            );
          })(M),
          Q = (function () {
            function e(e) {
              (this._client = e), (this._listeners = new Map());
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return c.DidChangeConfigurationNotification.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                b(
                  b(e, 'workspace'),
                  'didChangeConfiguration'
                ).dynamicRegistration = !0;
              }),
              (e.prototype.initialize = function () {
                var e =
                  this._client.clientOptions.synchronize.configurationSection;
                void 0 !== e &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: {
                      section: e,
                    },
                  });
              }),
              (e.prototype.register = function (e, t) {
                var n = this,
                  o = s.workspace.onDidChangeConfiguration(function (e) {
                    n.onDidChangeConfiguration(t.registerOptions.section, e);
                  });
                this._listeners.set(t.id, o),
                  void 0 !== t.registerOptions.section &&
                    this.onDidChangeConfiguration(
                      t.registerOptions.section,
                      void 0
                    );
              }),
              (e.prototype.unregister = function (e) {
                var t = this._listeners.get(e);
                t && (this._listeners.delete(e), t.dispose());
              }),
              (e.prototype.dispose = function () {
                var e, t;
                try {
                  for (
                    var n = a(this._listeners.values()), o = n.next();
                    !o.done;
                    o = n.next()
                  ) {
                    o.value.dispose();
                  }
                } catch (i) {
                  e = {
                    error: i,
                  };
                } finally {
                  try {
                    o && !o.done && (t = n.return) && t.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                this._listeners.clear();
              }),
              (e.prototype.onDidChangeConfiguration = function (e, t) {
                var n,
                  o = this;
                if (
                  void 0 !== (n = d.string(e) ? [e] : e) &&
                  void 0 !== t &&
                  !n.some(function (e) {
                    return t.affectsConfiguration(e);
                  })
                )
                  return;
                var i = function (e) {
                    void 0 !== e
                      ? o._client.sendNotification(
                          c.DidChangeConfigurationNotification.type,
                          {
                            settings: o.extractSettingsInformation(e),
                          }
                        )
                      : o._client.sendNotification(
                          c.DidChangeConfigurationNotification.type,
                          {
                            settings: null,
                          }
                        );
                  },
                  r = this.getMiddleware();
                r ? r(n, i) : i(n);
              }),
              (e.prototype.extractSettingsInformation = function (e) {
                function t(e, t) {
                  for (var n = e, o = 0; o < t.length - 1; o++) {
                    var i = n[t[o]];
                    i || ((i = Object.create(null)), (n[t[o]] = i)), (n = i);
                  }
                  return n;
                }
                for (
                  var n = this._client.clientOptions.workspaceFolder
                      ? this._client.clientOptions.workspaceFolder.uri
                      : void 0,
                    o = Object.create(null),
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var r = e[i],
                    a = r.indexOf('.'),
                    c = null;
                  if (
                    (c =
                      a >= 0
                        ? s.workspace
                            .getConfiguration(r.substr(0, a), n)
                            .get(r.substr(a + 1))
                        : s.workspace.getConfiguration(r, n))
                  ) {
                    var u = e[i].split('.');
                    t(o, u)[u[u.length - 1]] = c;
                  }
                }
                return o;
              }),
              (e.prototype.getMiddleware = function () {
                var e = this._client.clientOptions.middleware;
                return e.workspace && e.workspace.didChangeConfiguration
                  ? e.workspace.didChangeConfiguration
                  : void 0;
              }),
              e
            );
          })(),
          J = (function () {
            function e(e) {
              (this._client = e), (this._commands = new Map());
            }
            return (
              Object.defineProperty(e.prototype, 'messages', {
                get: function () {
                  return c.ExecuteCommandRequest.type;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.fillClientCapabilities = function (e) {
                b(b(e, 'workspace'), 'executeCommand').dynamicRegistration = !0;
              }),
              (e.prototype.initialize = function (e) {
                e.executeCommandProvider &&
                  this.register(this.messages, {
                    id: m.generateUuid(),
                    registerOptions: Object.assign(
                      {},
                      e.executeCommandProvider
                    ),
                  });
              }),
              (e.prototype.register = function (e, t) {
                var n,
                  o,
                  i = this._client;
                if (t.registerOptions.commands) {
                  var r = [],
                    u = function (e) {
                      r.push(
                        s.commands.registerCommand(e, function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          var o = {
                            command: e,
                            arguments: t,
                          };
                          return i
                            .sendRequest(c.ExecuteCommandRequest.type, o)
                            .then(void 0, function (e) {
                              i.logFailedRequest(
                                c.ExecuteCommandRequest.type,
                                e
                              );
                            });
                        })
                      );
                    };
                  try {
                    for (
                      var l = a(t.registerOptions.commands), d = l.next();
                      !d.done;
                      d = l.next()
                    ) {
                      u(d.value);
                    }
                  } catch (p) {
                    n = {
                      error: p,
                    };
                  } finally {
                    try {
                      d && !d.done && (o = l.return) && o.call(l);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  this._commands.set(t.id, r);
                }
              }),
              (e.prototype.unregister = function (e) {
                var t = this._commands.get(e);
                t &&
                  t.forEach(function (e) {
                    return e.dispose();
                  });
              }),
              (e.prototype.dispose = function () {
                this._commands.forEach(function (e) {
                  e.forEach(function (e) {
                    return e.dispose();
                  });
                }),
                  this._commands.clear();
              }),
              e
            );
          })();
        !(function (e) {
          e.is = function (e) {
            return (
              e && c.MessageReader.is(e.reader) && c.MessageWriter.is(e.writer)
            );
          };
        })(t.MessageTransports || (t.MessageTransports = {}));
        var Y = (function () {
          function t(e, t, n) {
            var o = this;
            (this._features = []),
              (this._method2Message = new Map()),
              (this._dynamicFeatures = new Map()),
              (this._id = e),
              (this._name = t),
              (n = n || {}),
              (this._clientOptions = {
                documentSelector: n.documentSelector || [],
                synchronize: n.synchronize || {},
                diagnosticCollectionName: n.diagnosticCollectionName,
                outputChannelName: n.outputChannelName || this._name,
                revealOutputChannelOn: n.revealOutputChannelOn || v.Error,
                stdioEncoding: n.stdioEncoding || 'utf8',
                initializationOptions: n.initializationOptions,
                initializationFailedHandler: n.initializationFailedHandler,
                errorHandler: n.errorHandler || new D(this._name),
                middleware: n.middleware || {},
                uriConverters: n.uriConverters,
                workspaceFolder: n.workspaceFolder,
              }),
              (this._clientOptions.synchronize =
                this._clientOptions.synchronize || {}),
              (this.state = C.Initial),
              (this._connectionPromise = void 0),
              (this._resolvedConnection = void 0),
              (this._initializeResult = void 0),
              n.outputChannel
                ? ((this._outputChannel = n.outputChannel),
                  (this._disposeOutputChannel = !1))
                : ((this._outputChannel = void 0),
                  (this._disposeOutputChannel = !0)),
              (this._listeners = void 0),
              (this._providers = void 0),
              (this._diagnostics = void 0),
              (this._fileEvents = []),
              (this._fileEventDelayer = new p.Delayer(250)),
              (this._onReady = new Promise(function (e, t) {
                o._onReadyCallbacks = {
                  resolve: e,
                  reject: t,
                };
              })),
              (this._onStop = void 0),
              (this._telemetryEmitter = new c.Emitter()),
              (this._stateChangeEmitter = new c.Emitter()),
              (this._tracer = {
                log: function (e, t) {
                  o.logTrace(e, t);
                },
              }),
              (this._c2p = u.createConverter(
                n.uriConverters ? n.uriConverters.code2Protocol : void 0
              )),
              (this._p2c = l.createConverter(
                n.uriConverters ? n.uriConverters.protocol2Code : void 0
              )),
              (this._syncedDocuments = new Map()),
              this.registerBuiltinFeatures();
          }
          return (
            Object.defineProperty(t.prototype, 'state', {
              get: function () {
                return this._state;
              },
              set: function (e) {
                var t = this.getPublicState();
                this._state = e;
                var n = this.getPublicState();
                n !== t &&
                  this._stateChangeEmitter.fire({
                    oldState: t,
                    newState: n,
                  });
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getPublicState = function () {
              return this.state === C.Running ? y.Running : y.Stopped;
            }),
            Object.defineProperty(t.prototype, 'initializeResult', {
              get: function () {
                return this._initializeResult;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.sendRequest = function (e) {
              for (var t, n = [], o = 1; o < arguments.length; o++)
                n[o - 1] = arguments[o];
              if (!this.isConnectionActive())
                throw new Error('Language client is not ready yet');
              this.forceDocumentSync();
              try {
                return (t = this._resolvedConnection).sendRequest.apply(
                  t,
                  r([e], n)
                );
              } catch (i) {
                throw (
                  (this.error(
                    'Sending request ' +
                      (d.string(e) ? e : e.method) +
                      ' failed.',
                    i
                  ),
                  i)
                );
              }
            }),
            (t.prototype.onRequest = function (e, t) {
              if (!this.isConnectionActive())
                throw new Error('Language client is not ready yet');
              try {
                this._resolvedConnection.onRequest(e, t);
              } catch (n) {
                throw (
                  (this.error(
                    'Registering request handler ' +
                      (d.string(e) ? e : e.method) +
                      ' failed.',
                    n
                  ),
                  n)
                );
              }
            }),
            (t.prototype.sendNotification = function (e, t) {
              if (!this.isConnectionActive())
                throw new Error('Language client is not ready yet');
              this.forceDocumentSync();
              try {
                this._resolvedConnection.sendNotification(e, t);
              } catch (n) {
                throw (
                  (this.error(
                    'Sending notification ' +
                      (d.string(e) ? e : e.method) +
                      ' failed.',
                    n
                  ),
                  n)
                );
              }
            }),
            (t.prototype.onNotification = function (e, t) {
              if (!this.isConnectionActive())
                throw new Error('Language client is not ready yet');
              try {
                this._resolvedConnection.onNotification(e, t);
              } catch (n) {
                throw (
                  (this.error(
                    'Registering notification handler ' +
                      (d.string(e) ? e : e.method) +
                      ' failed.',
                    n
                  ),
                  n)
                );
              }
            }),
            Object.defineProperty(t.prototype, 'clientOptions', {
              get: function () {
                return this._clientOptions;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'protocol2CodeConverter', {
              get: function () {
                return this._p2c;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'code2ProtocolConverter', {
              get: function () {
                return this._c2p;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'onTelemetry', {
              get: function () {
                return this._telemetryEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'onDidChangeState', {
              get: function () {
                return this._stateChangeEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'outputChannel', {
              get: function () {
                return (
                  this._outputChannel ||
                    (this._outputChannel = s.window.createOutputChannel(
                      this._clientOptions.outputChannelName
                        ? this._clientOptions.outputChannelName
                        : this._name
                    )),
                  this._outputChannel
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'diagnostics', {
              get: function () {
                return this._diagnostics;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.createDefaultErrorHandler = function () {
              return new D(this._name);
            }),
            Object.defineProperty(t.prototype, 'trace', {
              set: function (e) {
                var t = this;
                (this._trace = e),
                  this.onReady().then(
                    function () {
                      t.resolveConnection().then(function (n) {
                        n.trace(e, t._tracer);
                      });
                    },
                    function () {}
                  );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.data2String = function (e) {
              if (e instanceof c.ResponseError) {
                var t = e;
                return (
                  '  Message: ' +
                  t.message +
                  '\n  Code: ' +
                  t.code +
                  ' ' +
                  (t.data ? '\n' + t.data.toString() : '')
                );
              }
              return e instanceof Error
                ? d.string(e.stack)
                  ? e.stack
                  : e.message
                : d.string(e)
                ? e
                : e.toString();
            }),
            (t.prototype.info = function (e, t) {
              this.outputChannel.appendLine(
                '[Info  - ' + new Date().toLocaleTimeString() + '] ' + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t)),
                this._clientOptions.revealOutputChannelOn <= v.Info &&
                  this.outputChannel.show(!0);
            }),
            (t.prototype.warn = function (e, t) {
              this.outputChannel.appendLine(
                '[Warn  - ' + new Date().toLocaleTimeString() + '] ' + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t)),
                this._clientOptions.revealOutputChannelOn <= v.Warn &&
                  this.outputChannel.show(!0);
            }),
            (t.prototype.error = function (e, t) {
              this.outputChannel.appendLine(
                '[Error - ' + new Date().toLocaleTimeString() + '] ' + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t)),
                this._clientOptions.revealOutputChannelOn <= v.Error &&
                  this.outputChannel.show(!0);
            }),
            (t.prototype.logTrace = function (e, t) {
              this.outputChannel.appendLine(
                '[Trace - ' + new Date().toLocaleTimeString() + '] ' + e
              ),
                t && this.outputChannel.appendLine(this.data2String(t));
            }),
            (t.prototype.needsStart = function () {
              return (
                this.state === C.Initial ||
                this.state === C.Stopping ||
                this.state === C.Stopped
              );
            }),
            (t.prototype.needsStop = function () {
              return this.state === C.Starting || this.state === C.Running;
            }),
            (t.prototype.onReady = function () {
              return this._onReady;
            }),
            (t.prototype.isConnectionActive = function () {
              return this.state === C.Running && !!this._resolvedConnection;
            }),
            (t.prototype.start = function () {
              var e = this;
              return (
                (this._listeners = []),
                (this._providers = []),
                this._diagnostics ||
                  (this._diagnostics = this._clientOptions
                    .diagnosticCollectionName
                    ? s.languages.createDiagnosticCollection(
                        this._clientOptions.diagnosticCollectionName
                      )
                    : s.languages.createDiagnosticCollection()),
                (this.state = C.Starting),
                this.resolveConnection()
                  .then(function (t) {
                    return (
                      t.onLogMessage(function (t) {
                        switch (t.type) {
                          case c.MessageType.Error:
                            e.error(t.message);
                            break;
                          case c.MessageType.Warning:
                            e.warn(t.message);
                            break;
                          case c.MessageType.Info:
                            e.info(t.message);
                            break;
                          default:
                            e.outputChannel.appendLine(t.message);
                        }
                      }),
                      t.onShowMessage(function (e) {
                        switch (e.type) {
                          case c.MessageType.Error:
                            s.window.showErrorMessage(e.message);
                            break;
                          case c.MessageType.Warning:
                            s.window.showWarningMessage(e.message);
                            break;
                          case c.MessageType.Info:
                            s.window.showInformationMessage(e.message);
                            break;
                          default:
                            s.window.showInformationMessage(e.message);
                        }
                      }),
                      t.onRequest(c.ShowMessageRequest.type, function (e) {
                        var t;
                        switch (e.type) {
                          case c.MessageType.Error:
                            t = s.window.showErrorMessage;
                            break;
                          case c.MessageType.Warning:
                            t = s.window.showWarningMessage;
                            break;
                          case c.MessageType.Info:
                            t = s.window.showInformationMessage;
                            break;
                          default:
                            t = s.window.showInformationMessage;
                        }
                        var n = e.actions || [];
                        return t.apply(void 0, r([e.message], n));
                      }),
                      t.onTelemetry(function (t) {
                        e._telemetryEmitter.fire(t);
                      }),
                      t.listen(),
                      e.initialize(t)
                    );
                  })
                  .then(void 0, function (t) {
                    (e.state = C.StartFailed),
                      e._onReadyCallbacks.reject(t),
                      e.error('Starting client failed', t),
                      s.window.showErrorMessage(
                        "Couldn't start client " + e._name
                      );
                  }),
                new s.Disposable(function () {
                  e.needsStop() && e.stop();
                })
              );
            }),
            (t.prototype.resolveConnection = function () {
              return (
                this._connectionPromise ||
                  (this._connectionPromise = this.createConnection()),
                this._connectionPromise
              );
            }),
            (t.prototype.initialize = function (t) {
              var n = this;
              this.refreshTrace(t, !1);
              var o = this._clientOptions.initializationOptions,
                i = this._clientOptions.workspaceFolder
                  ? this._clientOptions.workspaceFolder.uri.fsPath
                  : this._clientGetRootPath(),
                r = {
                  processId: e.pid,
                  rootPath: i || null,
                  rootUri: i ? this._c2p.asUri(s.Uri.file(i)) : null,
                  capabilities: this.computeClientCapabilities(),
                  initializationOptions: d.func(o) ? o() : o,
                  trace: c.Trace.toString(this._trace),
                  workspaceFolders: null,
                };
              return (
                this.fillInitializeParams(r),
                t
                  .initialize(r)
                  .then(function (e) {
                    (n._resolvedConnection = t),
                      (n._initializeResult = e),
                      (n.state = C.Running);
                    var o = void 0;
                    return (
                      d.number(e.capabilities.textDocumentSync) &&
                      e.capabilities.textDocumentSync !==
                        c.TextDocumentSyncKind.None
                        ? (o = {
                            openClose: !0,
                            change: e.capabilities.textDocumentSync,
                            save: {
                              includeText: !1,
                            },
                          })
                        : void 0 !== e.capabilities.textDocumentSync &&
                          null !== e.capabilities.textDocumentSync &&
                          (o = e.capabilities.textDocumentSync),
                      (n._capabilities = Object.assign({}, e.capabilities, {
                        resolvedTextDocumentSync: o,
                      })),
                      t.onDiagnostics(function (e) {
                        return n.handleDiagnostics(e);
                      }),
                      t.onRequest(c.RegistrationRequest.type, function (e) {
                        return n.handleRegistrationRequest(e);
                      }),
                      t.onRequest('client/registerFeature', function (e) {
                        return n.handleRegistrationRequest(e);
                      }),
                      t.onRequest(c.UnregistrationRequest.type, function (e) {
                        return n.handleUnregistrationRequest(e);
                      }),
                      t.onRequest('client/unregisterFeature', function (e) {
                        return n.handleUnregistrationRequest(e);
                      }),
                      t.onRequest(
                        c.ApplyWorkspaceEditRequest.type,
                        function (e) {
                          return n.handleApplyWorkspaceEdit(e);
                        }
                      ),
                      t.sendNotification(c.InitializedNotification.type, {}),
                      n.hookFileEvents(t),
                      n.hookConfigurationChanged(t),
                      n.initializeFeatures(t),
                      n._onReadyCallbacks.resolve(),
                      e
                    );
                  })
                  .then(void 0, function (e) {
                    n._clientOptions.initializationFailedHandler
                      ? n._clientOptions.initializationFailedHandler(e)
                        ? n.initialize(t)
                        : (n.stop(), n._onReadyCallbacks.reject(e))
                      : e instanceof c.ResponseError && e.data && e.data.retry
                      ? s.window
                          .showErrorMessage(e.message, {
                            title: 'Retry',
                            id: 'retry',
                          })
                          .then(function (o) {
                            o && 'retry' === o.id
                              ? n.initialize(t)
                              : (n.stop(), n._onReadyCallbacks.reject(e));
                          })
                      : (e && e.message && s.window.showErrorMessage(e.message),
                        n.error('Server initialization failed.', e),
                        n.stop(),
                        n._onReadyCallbacks.reject(e));
                  })
              );
            }),
            (t.prototype._clientGetRootPath = function () {
              var e = s.workspace.workspaceFolders;
              if (e && 0 !== e.length) {
                var t = e[0];
                return 'file' === t.uri.scheme ? t.uri.fsPath : void 0;
              }
            }),
            (t.prototype.stop = function () {
              var e = this;
              return (
                (this._initializeResult = void 0),
                this._connectionPromise
                  ? this.state === C.Stopping && this._onStop
                    ? this._onStop
                    : ((this.state = C.Stopping),
                      this.cleanUp(),
                      (this._onStop = this.resolveConnection().then(function (
                        t
                      ) {
                        return t.shutdown().then(function () {
                          t.exit(),
                            t.dispose(),
                            (e.state = C.Stopped),
                            (e._onStop = void 0),
                            (e._connectionPromise = void 0),
                            (e._resolvedConnection = void 0);
                        });
                      })))
                  : ((this.state = C.Stopped), Promise.resolve())
              );
            }),
            (t.prototype.cleanUp = function (e, t) {
              var n, o;
              void 0 === e && (e = !0),
                void 0 === t && (t = !0),
                this._listeners &&
                  (this._listeners.forEach(function (e) {
                    return e.dispose();
                  }),
                  (this._listeners = void 0)),
                this._providers &&
                  (this._providers.forEach(function (e) {
                    return e.dispose();
                  }),
                  (this._providers = void 0)),
                this._syncedDocuments && this._syncedDocuments.clear();
              try {
                for (
                  var i = a(this._dynamicFeatures.values()), r = i.next();
                  !r.done;
                  r = i.next()
                ) {
                  r.value.dispose();
                }
              } catch (s) {
                n = {
                  error: s,
                };
              } finally {
                try {
                  r && !r.done && (o = i.return) && o.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              e &&
                this._outputChannel &&
                this._disposeOutputChannel &&
                (this._outputChannel.dispose(), (this._outputChannel = void 0)),
                t &&
                  this._diagnostics &&
                  (this._diagnostics.dispose(), (this._diagnostics = void 0));
            }),
            (t.prototype.notifyFileEvent = function (e) {
              var t = this;
              this._fileEvents.push(e),
                this._fileEventDelayer.trigger(function () {
                  t.onReady().then(
                    function () {
                      t.resolveConnection().then(function (e) {
                        t.isConnectionActive() &&
                          e.didChangeWatchedFiles({
                            changes: t._fileEvents,
                          }),
                          (t._fileEvents = []);
                      });
                    },
                    function (e) {
                      t.error('Notify file events failed.', e);
                    }
                  );
                });
            }),
            (t.prototype.forceDocumentSync = function () {
              this._dynamicFeatures
                .get(c.DidChangeTextDocumentNotification.type.method)
                .forceDelivery();
            }),
            (t.prototype.handleDiagnostics = function (e) {
              var t = this;
              if (this._diagnostics) {
                var n = this._p2c.asUri(e.uri),
                  o = this._p2c.asDiagnostics(e.diagnostics),
                  i = this.clientOptions.middleware.handleDiagnostics;
                i
                  ? i(n, o, function (e, n) {
                      return t.setDiagnostics(e, n);
                    })
                  : this.setDiagnostics(n, o);
              }
            }),
            (t.prototype.setDiagnostics = function (e, t) {
              this._diagnostics && this._diagnostics.set(e, t);
            }),
            (t.prototype.createConnection = function () {
              var e = this,
                t = function (t, n, o) {
                  e.handleConnectionError(t, n, o);
                },
                n = function () {
                  e.handleConnectionClosed();
                };
              return this.createMessageTransports(
                this._clientOptions.stdioEncoding || 'utf8'
              ).then(function (e) {
                return (function (e, t, n, o) {
                  var i = new h(),
                    a = c.createProtocolConnection(e, t, i);
                  return (
                    a.onError(function (e) {
                      n(e[0], e[1], e[2]);
                    }),
                    a.onClose(o),
                    {
                      listen: function () {
                        return a.listen();
                      },
                      sendRequest: function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                          t[n - 1] = arguments[n];
                        return a.sendRequest.apply(
                          a,
                          r([d.string(e) ? e : e.method], t)
                        );
                      },
                      onRequest: function (e, t) {
                        return a.onRequest(d.string(e) ? e : e.method, t);
                      },
                      sendNotification: function (e, t) {
                        return a.sendNotification(
                          d.string(e) ? e : e.method,
                          t
                        );
                      },
                      onNotification: function (e, t) {
                        return a.onNotification(d.string(e) ? e : e.method, t);
                      },
                      trace: function (e, t, n) {
                        return void 0 === n && (n = !1), a.trace(e, t, n);
                      },
                      initialize: function (e) {
                        return a.sendRequest(c.InitializeRequest.type, e);
                      },
                      shutdown: function () {
                        return a.sendRequest(c.ShutdownRequest.type, void 0);
                      },
                      exit: function () {
                        return a.sendNotification(c.ExitNotification.type);
                      },
                      onLogMessage: function (e) {
                        return a.onNotification(
                          c.LogMessageNotification.type,
                          e
                        );
                      },
                      onShowMessage: function (e) {
                        return a.onNotification(
                          c.ShowMessageNotification.type,
                          e
                        );
                      },
                      onTelemetry: function (e) {
                        return a.onNotification(
                          c.TelemetryEventNotification.type,
                          e
                        );
                      },
                      didChangeConfiguration: function (e) {
                        return a.sendNotification(
                          c.DidChangeConfigurationNotification.type,
                          e
                        );
                      },
                      didChangeWatchedFiles: function (e) {
                        return a.sendNotification(
                          c.DidChangeWatchedFilesNotification.type,
                          e
                        );
                      },
                      didOpenTextDocument: function (e) {
                        return a.sendNotification(
                          c.DidOpenTextDocumentNotification.type,
                          e
                        );
                      },
                      didChangeTextDocument: function (e) {
                        return a.sendNotification(
                          c.DidChangeTextDocumentNotification.type,
                          e
                        );
                      },
                      didCloseTextDocument: function (e) {
                        return a.sendNotification(
                          c.DidCloseTextDocumentNotification.type,
                          e
                        );
                      },
                      didSaveTextDocument: function (e) {
                        return a.sendNotification(
                          c.DidSaveTextDocumentNotification.type,
                          e
                        );
                      },
                      onDiagnostics: function (e) {
                        return a.onNotification(
                          c.PublishDiagnosticsNotification.type,
                          e
                        );
                      },
                      dispose: function () {
                        return a.dispose();
                      },
                    }
                  );
                })(e.reader, e.writer, t, n);
              });
            }),
            (t.prototype.handleConnectionClosed = function () {
              if (this.state !== C.Stopping && this.state !== C.Stopped) {
                try {
                  this._resolvedConnection &&
                    this._resolvedConnection.dispose();
                } catch (t) {}
                var e = g.DoNotRestart;
                try {
                  e = this._clientOptions.errorHandler.closed();
                } catch (t) {}
                (this._connectionPromise = void 0),
                  (this._resolvedConnection = void 0),
                  e === g.DoNotRestart
                    ? (this.error(
                        'Connection to server got closed. Server will not be restarted.'
                      ),
                      (this.state = C.Stopped),
                      this.cleanUp(!1, !0))
                    : e === g.Restart &&
                      (this.info(
                        'Connection to server got closed. Server will restart.'
                      ),
                      this.cleanUp(!1, !1),
                      (this.state = C.Initial),
                      this.start());
              }
            }),
            (t.prototype.handleConnectionError = function (e, t, n) {
              this._clientOptions.errorHandler.error(e, t, n) === f.Shutdown &&
                (this.error(
                  'Connection to server is erroring. Shutting down server.'
                ),
                this.stop());
            }),
            (t.prototype.hookConfigurationChanged = function (e) {
              var t = this;
              s.workspace.onDidChangeConfiguration(function () {
                t.refreshTrace(e, !0);
              });
            }),
            (t.prototype.refreshTrace = function (e, t) {
              void 0 === t && (t = !1);
              var n = s.workspace.getConfiguration(this._id),
                o = c.Trace.Off;
              n && (o = c.Trace.fromString(n.get('trace.server', 'off'))),
                (this._trace = o),
                e.trace(this._trace, this._tracer, t);
            }),
            (t.prototype.hookFileEvents = function (e) {
              var t,
                n = this._clientOptions.synchronize.fileEvents;
              n &&
                (t = d.array(n) ? n : [n]) &&
                this._dynamicFeatures
                  .get(c.DidChangeWatchedFilesNotification.type.method)
                  .registerRaw(m.generateUuid(), t);
            }),
            (t.prototype.registerFeatures = function (e) {
              var t, n;
              try {
                for (var o = a(e), i = o.next(); !i.done; i = o.next()) {
                  var r = i.value;
                  this.registerFeature(r);
                }
              } catch (s) {
                t = {
                  error: s,
                };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.registerFeature = function (e) {
              var t, n;
              if ((this._features.push(e), _.is(e))) {
                var o = e.messages;
                if (Array.isArray(o))
                  try {
                    for (var i = a(o), r = i.next(); !r.done; r = i.next()) {
                      var s = r.value;
                      this._method2Message.set(s.method, s),
                        this._dynamicFeatures.set(s.method, e);
                    }
                  } catch (c) {
                    t = {
                      error: c,
                    };
                  } finally {
                    try {
                      r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                else
                  this._method2Message.set(o.method, o),
                    this._dynamicFeatures.set(o.method, e);
              }
            }),
            (t.prototype.registerBuiltinFeatures = function () {
              var e = this;
              this.registerFeature(new Q(this)),
                this.registerFeature(new S(this, this._syncedDocuments)),
                this.registerFeature(new T(this)),
                this.registerFeature(new O(this)),
                this.registerFeature(new k(this)),
                this.registerFeature(new F(this)),
                this.registerFeature(new R(this, this._syncedDocuments)),
                this.registerFeature(
                  new E(this, function (t) {
                    return e.notifyFileEvent(t);
                  })
                ),
                this.registerFeature(new L(this)),
                this.registerFeature(new K(this)),
                this.registerFeature(new q(this)),
                this.registerFeature(new N(this)),
                this.registerFeature(new H(this)),
                this.registerFeature(new j(this)),
                this.registerFeature(new A(this)),
                this.registerFeature(new U(this)),
                this.registerFeature(new z(this)),
                this.registerFeature(new W(this)),
                this.registerFeature(new B(this)),
                this.registerFeature(new V(this)),
                this.registerFeature(new G(this)),
                this.registerFeature(new Z(this)),
                this.registerFeature(new $(this)),
                this.registerFeature(new J(this));
            }),
            (t.prototype.fillInitializeParams = function (e) {
              var t, n;
              try {
                for (
                  var o = a(this._features), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var r = i.value;
                  d.func(r.fillInitializeParams) && r.fillInitializeParams(e);
                }
              } catch (s) {
                t = {
                  error: s,
                };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.computeClientCapabilities = function () {
              var e,
                t,
                n = {};
              (b(n, 'workspace').applyEdit = !0),
                (b(b(n, 'workspace'), 'workspaceEdit').documentChanges = !0),
                (b(
                  b(n, 'textDocument'),
                  'publishDiagnostics'
                ).relatedInformation = !0);
              try {
                for (
                  var o = a(this._features), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  i.value.fillClientCapabilities(n);
                }
              } catch (r) {
                e = {
                  error: r,
                };
              } finally {
                try {
                  i && !i.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return n;
            }),
            (t.prototype.initializeFeatures = function (e) {
              var t,
                n,
                o = this._clientOptions.documentSelector;
              try {
                for (
                  var i = a(this._features), r = i.next();
                  !r.done;
                  r = i.next()
                ) {
                  r.value.initialize(this._capabilities, o);
                }
              } catch (s) {
                t = {
                  error: s,
                };
              } finally {
                try {
                  r && !r.done && (n = i.return) && n.call(i);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (t.prototype.handleRegistrationRequest = function (e) {
              var t = this;
              return new Promise(function (n, o) {
                var i, r;
                try {
                  for (
                    var s = a(e.registrations), c = s.next();
                    !c.done;
                    c = s.next()
                  ) {
                    var u = c.value,
                      l = t._dynamicFeatures.get(u.method);
                    if (!l)
                      return void o(
                        new Error(
                          'No feature implementation for ' +
                            u.method +
                            ' found. Registration failed.'
                        )
                      );
                    var d = u.registerOptions || {};
                    d.documentSelector =
                      d.documentSelector || t._clientOptions.documentSelector;
                    var p = {
                      id: u.id,
                      registerOptions: d,
                    };
                    l.register(t._method2Message.get(u.method), p);
                  }
                } catch (m) {
                  i = {
                    error: m,
                  };
                } finally {
                  try {
                    c && !c.done && (r = s.return) && r.call(s);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                n();
              });
            }),
            (t.prototype.handleUnregistrationRequest = function (e) {
              var t = this;
              return new Promise(function (n, o) {
                var i, r;
                try {
                  for (
                    var s = a(e.unregisterations), c = s.next();
                    !c.done;
                    c = s.next()
                  ) {
                    var u = c.value,
                      l = t._dynamicFeatures.get(u.method);
                    if (!l)
                      return void o(
                        new Error(
                          'No feature implementation for ' +
                            u.method +
                            ' found. Unregistration failed.'
                        )
                      );
                    l.unregister(u.id);
                  }
                } catch (d) {
                  i = {
                    error: d,
                  };
                } finally {
                  try {
                    c && !c.done && (r = s.return) && r.call(s);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                n();
              });
            }),
            (t.prototype.handleApplyWorkspaceEdit = function (e) {
              var t,
                n,
                o = e.edit,
                i = new Map();
              s.workspace.textDocuments.forEach(function (e) {
                return i.set(e.uri.toString(), e);
              });
              var r = !1;
              if (o.documentChanges)
                try {
                  for (
                    var c = a(o.documentChanges), u = c.next();
                    !u.done;
                    u = c.next()
                  ) {
                    var l = u.value;
                    if (l.textDocument.version && l.textDocument.version >= 0) {
                      var d = i.get(l.textDocument.uri);
                      if (d && d.version !== l.textDocument.version) {
                        r = !0;
                        break;
                      }
                    }
                  }
                } catch (p) {
                  t = {
                    error: p,
                  };
                } finally {
                  try {
                    u && !u.done && (n = c.return) && n.call(c);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              return r
                ? Promise.resolve({
                    applied: !1,
                  })
                : s.workspace
                    .applyEdit(this._p2c.asWorkspaceEdit(e.edit))
                    .then(function (e) {
                      return {
                        applied: e,
                      };
                    });
            }),
            (t.prototype.logFailedRequest = function (e, t) {
              (t instanceof c.ResponseError &&
                t.code === c.ErrorCodes.RequestCancelled) ||
                this.error('Request ' + e.method + ' failed.', t);
            }),
            t
          );
        })();
        t.BaseLanguageClient = Y;
      }.call(this, n('8oxB')));
    },
    uSJ4: function (e, t, n) {
      'use strict';
      var o =
        (this && this.__extends) ||
        (function () {
          var e =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('AL8H'),
        r = n('hC2b'),
        a = n('uoVZ'),
        s = n('BOov');

      function c(e, t) {
        return void 0 === e[t] && (e[t] = {}), e[t];
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t, s.TypeDefinitionRequest.type) || this;
        }
        return (
          o(t, e),
          (t.prototype.fillClientCapabilities = function (e) {
            c(c(e, 'textDocument'), 'typeDefinition').dynamicRegistration = !0;
          }),
          (t.prototype.initialize = function (e, t) {
            if (e.typeDefinitionProvider)
              if (!0 === e.typeDefinitionProvider) {
                if (!t) return;
                this.register(this.messages, {
                  id: i.generateUuid(),
                  registerOptions: Object.assign(
                    {},
                    {
                      documentSelector: t,
                    }
                  ),
                });
              } else {
                var n = e.typeDefinitionProvider,
                  o =
                    r.string(n.id) && n.id.length > 0 ? n.id : i.generateUuid(),
                  a = n.documentSelector || t;
                a &&
                  this.register(this.messages, {
                    id: o,
                    registerOptions: Object.assign(
                      {},
                      {
                        documentSelector: a,
                      }
                    ),
                  });
              }
          }),
          (t.prototype.registerLanguageProvider = function (e) {
            var t = this._client,
              n = function (e, n, o) {
                return t
                  .sendRequest(
                    s.TypeDefinitionRequest.type,
                    t.code2ProtocolConverter.asTextDocumentPositionParams(e, n),
                    o
                  )
                  .then(
                    t.protocol2CodeConverter.asDefinitionResult,
                    function (e) {
                      return (
                        t.logFailedRequest(s.TypeDefinitionRequest.type, e),
                        Promise.resolve(null)
                      );
                    }
                  );
              },
              o = t.clientOptions.middleware;
            return a.languages.registerTypeDefinitionProvider(
              e.documentSelector,
              {
                provideTypeDefinition: function (e, t, i) {
                  return o.provideTypeDefinition
                    ? o.provideTypeDefinition(e, t, i, n)
                    : n(e, t, i);
                },
              }
            );
          }),
          t
        );
      })(n('qRuN').TextDocumentFeature);
      t.TypeDefinitionFeature = u;
    },
    xagI: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('uoVZ'),
        i = n('BOov'),
        r = n('hC2b'),
        a = n('QGVK'),
        s = n('h0WC'),
        c = n('ojtU');
      t.createConverter = function (e) {
        var t =
          e ||
          function (e) {
            return e.toString();
          };

        function n(e) {
          return t(e);
        }

        function u(e) {
          return {
            uri: t(e.uri),
          };
        }

        function l(e) {
          return {
            uri: t(e.uri),
            version: e.version,
          };
        }

        function d(e) {
          switch (e) {
            case o.TextDocumentSaveReason.Manual:
              return i.TextDocumentSaveReason.Manual;
            case o.TextDocumentSaveReason.AfterDelay:
              return i.TextDocumentSaveReason.AfterDelay;
            case o.TextDocumentSaveReason.FocusOut:
              return i.TextDocumentSaveReason.FocusOut;
          }
          return i.TextDocumentSaveReason.Manual;
        }

        function p(e) {
          switch (e) {
            case o.CompletionTriggerKind.TriggerCharacter:
              return i.CompletionTriggerKind.TriggerCharacter;
            case o.CompletionTriggerKind.TriggerForIncompleteCompletions:
              return i.CompletionTriggerKind.TriggerForIncompleteCompletions;
            default:
              return i.CompletionTriggerKind.Invoked;
          }
        }

        function m(e) {
          return {
            line: e.line,
            character: e.character,
          };
        }

        function f(e) {
          if (void 0 !== e)
            return null === e
              ? null
              : {
                  line: e.line,
                  character: e.character,
                };
        }

        function g(e) {
          return void 0 === e || null === e
            ? e
            : {
                start: f(e.start),
                end: f(e.end),
              };
        }

        function h(e) {
          switch (e) {
            case o.DiagnosticSeverity.Error:
              return i.DiagnosticSeverity.Error;
            case o.DiagnosticSeverity.Warning:
              return i.DiagnosticSeverity.Warning;
            case o.DiagnosticSeverity.Information:
              return i.DiagnosticSeverity.Information;
            case o.DiagnosticSeverity.Hint:
              return i.DiagnosticSeverity.Hint;
          }
        }

        function v(e) {
          var t = i.Diagnostic.create(g(e.range), e.message);
          return (
            r.number(e.severity) && (t.severity = h(e.severity)),
            (r.number(e.code) || r.string(e.code)) && (t.code = e.code),
            e.source && (t.source = e.source),
            t
          );
        }

        function y(e) {
          return void 0 === e || null === e ? e : e.map(v);
        }

        function C(e) {
          return {
            range: g(e.range),
            newText: e.newText,
          };
        }

        function D(e) {
          var t = i.Command.create(e.title, e.command);
          return e.arguments && (t.arguments = e.arguments), t;
        }
        return {
          asUri: n,
          asTextDocumentIdentifier: u,
          asOpenTextDocumentParams: function (e) {
            return {
              textDocument: {
                uri: t(e.uri),
                languageId: e.languageId,
                version: e.version,
                text: e.getText(),
              },
            };
          },
          asChangeTextDocumentParams: function (e) {
            if (
              (function (e) {
                var t = e;
                return !!t.uri && !!t.version;
              })(e)
            )
              return {
                textDocument: {
                  uri: t(e.uri),
                  version: e.version,
                },
                contentChanges: [
                  {
                    text: e.getText(),
                  },
                ],
              };
            if (
              (function (e) {
                var t = e;
                return !!t.document && !!t.contentChanges;
              })(e)
            ) {
              var n = e.document;
              return {
                textDocument: {
                  uri: t(n.uri),
                  version: n.version,
                },
                contentChanges: e.contentChanges.map(function (e) {
                  var t = e.range;
                  return {
                    range: {
                      start: {
                        line: t.start.line,
                        character: t.start.character,
                      },
                      end: {
                        line: t.end.line,
                        character: t.end.character,
                      },
                    },
                    rangeLength: e.rangeLength,
                    text: e.text,
                  };
                }),
              };
            }
            throw Error('Unsupported text document change parameter');
          },
          asCloseTextDocumentParams: function (e) {
            return {
              textDocument: u(e),
            };
          },
          asSaveTextDocumentParams: function (e, t) {
            void 0 === t && (t = !1);
            var n = {
              textDocument: l(e),
            };
            return t && (n.text = e.getText()), n;
          },
          asWillSaveTextDocumentParams: function (e) {
            return {
              textDocument: u(e.document),
              reason: d(e.reason),
            };
          },
          asTextDocumentPositionParams: function (e, t) {
            return {
              textDocument: u(e),
              position: m(t),
            };
          },
          asCompletionParams: function (e, t, n) {
            return {
              textDocument: u(e),
              position: m(t),
              context: {
                triggerKind: p(n.triggerKind),
                triggerCharacter: n.triggerCharacter,
              },
            };
          },
          asWorkerPosition: m,
          asRange: g,
          asPosition: f,
          asDiagnosticSeverity: h,
          asDiagnostic: v,
          asDiagnostics: y,
          asCompletionItem: function (e) {
            var t,
              n,
              s = {
                label: e.label,
              },
              c = e instanceof a.default ? e : void 0;
            return (
              e.detail && (s.detail = e.detail),
              e.documentation &&
                (c && '$string' !== c.documentationFormat
                  ? (s.documentation = (function (e, t) {
                      switch (e) {
                        case '$string':
                          return t;
                        case i.MarkupKind.PlainText:
                          return {
                            kind: e,
                            value: t,
                          };
                        case i.MarkupKind.Markdown:
                          return {
                            kind: e,
                            value: t.value,
                          };
                        default:
                          return (
                            'Unsupported Markup content received. Kind is: ' + e
                          );
                      }
                    })(c.documentationFormat, e.documentation))
                  : (s.documentation = e.documentation)),
              e.filterText && (s.filterText = e.filterText),
              (function (e, t) {
                var n,
                  r = i.InsertTextFormat.PlainText,
                  a = void 0;
                t.textEdit
                  ? ((n = t.textEdit.newText), (a = g(t.textEdit.range)))
                  : t.insertText instanceof o.SnippetString
                  ? ((r = i.InsertTextFormat.Snippet), (n = t.insertText.value))
                  : (n = t.insertText);
                t.range && (a = g(t.range));
                (e.insertTextFormat = r),
                  t.fromEdit && n && a
                    ? (e.textEdit = {
                        newText: n,
                        range: a,
                      })
                    : (e.insertText = n);
              })(s, e),
              r.number(e.kind) &&
                (s.kind =
                  ((t = e.kind),
                  void 0 !== (n = c && c.originalItemKind) ? n : t + 1)),
              e.sortText && (s.sortText = e.sortText),
              e.additionalTextEdits &&
                (s.additionalTextEdits = (function (e) {
                  if (void 0 === e || null === e) return e;
                  return e.map(C);
                })(e.additionalTextEdits)),
              e.commitCharacters &&
                (s.commitCharacters = e.commitCharacters.slice()),
              e.command && (s.command = D(e.command)),
              (!0 !== e.preselect && !1 !== e.preselect) ||
                (s.preselect = e.preselect),
              c &&
                (void 0 !== c.data && (s.data = c.data),
                (!0 !== c.deprecated && !1 !== c.deprecated) ||
                  (s.deprecated = c.deprecated)),
              s
            );
          },
          asTextEdit: C,
          asReferenceParams: function (e, t, n) {
            return {
              textDocument: u(e),
              position: m(t),
              context: {
                includeDeclaration: n.includeDeclaration,
              },
            };
          },
          asCodeActionContext: function (e) {
            return void 0 === e || null === e
              ? e
              : i.CodeActionContext.create(
                  y(e.diagnostics),
                  r.string(e.only) ? [e.only] : void 0
                );
          },
          asCommand: D,
          asCodeLens: function (e) {
            var t = i.CodeLens.create(g(e.range));
            return (
              e.command && (t.command = D(e.command)),
              e instanceof s.default && e.data && (t.data = e.data),
              t
            );
          },
          asFormattingOptions: function (e) {
            return {
              tabSize: e.tabSize,
              insertSpaces: e.insertSpaces,
            };
          },
          asDocumentSymbolParams: function (e) {
            return {
              textDocument: u(e),
            };
          },
          asCodeLensParams: function (e) {
            return {
              textDocument: u(e),
            };
          },
          asDocumentLink: function (e) {
            var t = i.DocumentLink.create(g(e.range));
            e.target && (t.target = n(e.target));
            var o = e instanceof c.default ? e : void 0;
            return o && o.data && (t.data = o.data), t;
          },
          asDocumentLinkParams: function (e) {
            return {
              textDocument: u(e),
            };
          },
        };
      };
    },
    'zxs+': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('Gz0x'),
        i = (function () {
          function e(e, t, n) {
            void 0 === n && (n = null);
            var i = this;
            (this.p2m = e),
              (this.m2p = t),
              (this._rootUri = n),
              (this.documents = new Map()),
              (this.onDidOpenTextDocumentEmitter = new o.Emitter()),
              (this.onDidCloseTextDocumentEmitter = new o.Emitter()),
              (this.onDidChangeTextDocumentEmitter = new o.Emitter());
            for (var r = 0, a = monaco.editor.getModels(); r < a.length; r++) {
              var s = a[r];
              this.addModel(s);
            }
            monaco.editor.onDidCreateModel(function (e) {
              return i.addModel(e);
            }),
              monaco.editor.onWillDisposeModel(function (e) {
                return i.removeModel(e);
              });
          }
          return (
            Object.defineProperty(e.prototype, 'rootUri', {
              get: function () {
                return this._rootUri;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.removeModel = function (e) {
              var t = e.uri.toString(),
                n = this.documents.get(t);
              n &&
                (this.documents.delete(t),
                this.onDidCloseTextDocumentEmitter.fire(n));
            }),
            (e.prototype.addModel = function (e) {
              var t = this,
                n = e.uri.toString(),
                o = this.setModel(n, e);
              this.onDidOpenTextDocumentEmitter.fire(o),
                e.onDidChangeContent(function (o) {
                  return t.onDidChangeContent(n, e, o);
                });
            }),
            (e.prototype.onDidChangeContent = function (e, t, n) {
              for (
                var o = this.setModel(e, t), i = [], r = 0, a = n.changes;
                r < a.length;
                r++
              ) {
                var s = a[r],
                  c = this.m2p.asRange(s.range),
                  u = s.rangeLength,
                  l = s.text;
                i.push({
                  range: c,
                  rangeLength: u,
                  text: l,
                });
              }
              this.onDidChangeTextDocumentEmitter.fire({
                textDocument: o,
                contentChanges: i,
              });
            }),
            (e.prototype.setModel = function (e, t) {
              var n = o.TextDocument.create(
                e,
                t.getModeId(),
                t.getVersionId(),
                t.getValue()
              );
              return this.documents.set(e, n), n;
            }),
            Object.defineProperty(e.prototype, 'textDocuments', {
              get: function () {
                return Array.from(this.documents.values());
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'onDidOpenTextDocument', {
              get: function () {
                return this.onDidOpenTextDocumentEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'onDidCloseTextDocument', {
              get: function () {
                return this.onDidCloseTextDocumentEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'onDidChangeTextDocument', {
              get: function () {
                return this.onDidChangeTextDocumentEmitter.event;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.applyEdit = function (e) {
              var t = this.p2m.asWorkspaceEdit(e),
                n = t.edits.reduce(function (e, t) {
                  var n = t;
                  return (
                    (e[n.resource.toString()] = monaco.editor.getModel(
                      n.resource
                    )),
                    e
                  );
                }, {});
              if (
                !Object.keys(n)
                  .map(function (e) {
                    return n[e];
                  })
                  .every(function (e) {
                    return !!e;
                  })
              )
                return Promise.resolve(!1);
              var o = t.edits.reduce(function (e, t) {
                var n,
                  o = t,
                  i = o.resource.toString();
                i in e || (e[i] = []);
                var r = o.edits.map(function (e) {
                  return {
                    range: monaco.Range.lift(e.range),
                    text: e.text,
                  };
                });
                return (n = e[i]).push.apply(n, r), e;
              }, {});
              return (
                Object.keys(o).forEach(function (e) {
                  n[e].pushEditOperations(
                    [],
                    o[e].map(function (e) {
                      return {
                        identifier: {
                          major: 1,
                          minor: 0,
                        },
                        range: e.range,
                        text: e.text,
                        forceMoveMarkers: !0,
                      };
                    }),
                    function () {
                      return [];
                    }
                  );
                }),
                Promise.resolve(!0)
              );
            }),
            e
          );
        })();
      t.MonacoWorkspace = i;
    },
  },
]);
//# sourceMappingURL=44.385d904c061c0a3666df.js.map

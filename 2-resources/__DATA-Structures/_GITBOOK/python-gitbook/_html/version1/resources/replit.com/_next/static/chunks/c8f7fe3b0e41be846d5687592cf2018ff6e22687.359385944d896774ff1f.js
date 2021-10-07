(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [18, 45],
  {
    '+cRy': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('owkM'),
        i = n('MOv1'),
        o = n('CcFB');
      t.ImplementationRequest = o.ImplementationRequest;
      var s = n('8ahE');
      t.TypeDefinitionRequest = s.TypeDefinitionRequest;
      var a = n('VqZt');
      (t.WorkspaceFoldersRequest = a.WorkspaceFoldersRequest),
        (t.DidChangeWorkspaceFoldersNotification =
          a.DidChangeWorkspaceFoldersNotification);
      var u = n('sKb1');
      t.ConfigurationRequest = u.ConfigurationRequest;
      var c = n('zZpG');
      (t.DocumentColorRequest = c.DocumentColorRequest),
        (t.ColorPresentationRequest = c.ColorPresentationRequest);
      var l = n('3JnO');
      (t.FoldingRangeRequest = l.FoldingRangeRequest),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return (
              r.string(t.language) || r.string(t.scheme) || r.string(t.pattern)
            );
          };
        })(t.DocumentFilter || (t.DocumentFilter = {})),
        (function (e) {
          e.type = new i.RequestType('client/registerCapability');
        })(t.RegistrationRequest || (t.RegistrationRequest = {})),
        (function (e) {
          e.type = new i.RequestType('client/unregisterCapability');
        })(t.UnregistrationRequest || (t.UnregistrationRequest = {})),
        (function (e) {
          (e.Create = 'create'), (e.Rename = 'rename'), (e.Delete = 'delete');
        })(t.ResourceOperationKind || (t.ResourceOperationKind = {})),
        (function (e) {
          (e.Abort = 'abort'),
            (e.Transactional = 'transactional'),
            (e.TextOnlyTransactional = 'textOnlyTransactional'),
            (e.Undo = 'undo');
        })(t.FailureHandlingKind || (t.FailureHandlingKind = {})),
        (function (e) {
          (e.None = 0), (e.Full = 1), (e.Incremental = 2);
        })(t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {})),
        (function (e) {
          e.type = new i.RequestType('initialize');
        })(t.InitializeRequest || (t.InitializeRequest = {})),
        (function (e) {
          e.unknownProtocolVersion = 1;
        })(t.InitializeError || (t.InitializeError = {})),
        (function (e) {
          e.type = new i.NotificationType('initialized');
        })(t.InitializedNotification || (t.InitializedNotification = {})),
        (function (e) {
          e.type = new i.RequestType0('shutdown');
        })(t.ShutdownRequest || (t.ShutdownRequest = {})),
        (function (e) {
          e.type = new i.NotificationType0('exit');
        })(t.ExitNotification || (t.ExitNotification = {})),
        (function (e) {
          e.type = new i.NotificationType('workspace/didChangeConfiguration');
        })(
          t.DidChangeConfigurationNotification ||
            (t.DidChangeConfigurationNotification = {})
        ),
        (function (e) {
          (e.Error = 1), (e.Warning = 2), (e.Info = 3), (e.Log = 4);
        })(t.MessageType || (t.MessageType = {})),
        (function (e) {
          e.type = new i.NotificationType('window/showMessage');
        })(t.ShowMessageNotification || (t.ShowMessageNotification = {})),
        (function (e) {
          e.type = new i.RequestType('window/showMessageRequest');
        })(t.ShowMessageRequest || (t.ShowMessageRequest = {})),
        (function (e) {
          e.type = new i.NotificationType('window/logMessage');
        })(t.LogMessageNotification || (t.LogMessageNotification = {})),
        (function (e) {
          e.type = new i.NotificationType('telemetry/event');
        })(t.TelemetryEventNotification || (t.TelemetryEventNotification = {})),
        (function (e) {
          e.type = new i.NotificationType('textDocument/didOpen');
        })(
          t.DidOpenTextDocumentNotification ||
            (t.DidOpenTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType('textDocument/didChange');
        })(
          t.DidChangeTextDocumentNotification ||
            (t.DidChangeTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType('textDocument/didClose');
        })(
          t.DidCloseTextDocumentNotification ||
            (t.DidCloseTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType('textDocument/didSave');
        })(
          t.DidSaveTextDocumentNotification ||
            (t.DidSaveTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.NotificationType('textDocument/willSave');
        })(
          t.WillSaveTextDocumentNotification ||
            (t.WillSaveTextDocumentNotification = {})
        ),
        (function (e) {
          e.type = new i.RequestType('textDocument/willSaveWaitUntil');
        })(
          t.WillSaveTextDocumentWaitUntilRequest ||
            (t.WillSaveTextDocumentWaitUntilRequest = {})
        ),
        (function (e) {
          e.type = new i.NotificationType('workspace/didChangeWatchedFiles');
        })(
          t.DidChangeWatchedFilesNotification ||
            (t.DidChangeWatchedFilesNotification = {})
        ),
        (function (e) {
          (e.Created = 1), (e.Changed = 2), (e.Deleted = 3);
        })(t.FileChangeType || (t.FileChangeType = {})),
        (function (e) {
          (e.Create = 1), (e.Change = 2), (e.Delete = 4);
        })(t.WatchKind || (t.WatchKind = {})),
        (function (e) {
          e.type = new i.NotificationType('textDocument/publishDiagnostics');
        })(
          t.PublishDiagnosticsNotification ||
            (t.PublishDiagnosticsNotification = {})
        ),
        (function (e) {
          (e.Invoked = 1),
            (e.TriggerCharacter = 2),
            (e.TriggerForIncompleteCompletions = 3);
        })(t.CompletionTriggerKind || (t.CompletionTriggerKind = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/completion');
        })(t.CompletionRequest || (t.CompletionRequest = {})),
        (function (e) {
          e.type = new i.RequestType('completionItem/resolve');
        })(t.CompletionResolveRequest || (t.CompletionResolveRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/hover');
        })(t.HoverRequest || (t.HoverRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/signatureHelp');
        })(t.SignatureHelpRequest || (t.SignatureHelpRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/definition');
        })(t.DefinitionRequest || (t.DefinitionRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/references');
        })(t.ReferencesRequest || (t.ReferencesRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/documentHighlight');
        })(t.DocumentHighlightRequest || (t.DocumentHighlightRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/documentSymbol');
        })(t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {})),
        (function (e) {
          e.type = new i.RequestType('workspace/symbol');
        })(t.WorkspaceSymbolRequest || (t.WorkspaceSymbolRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/codeAction');
        })(t.CodeActionRequest || (t.CodeActionRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/codeLens');
        })(t.CodeLensRequest || (t.CodeLensRequest = {})),
        (function (e) {
          e.type = new i.RequestType('codeLens/resolve');
        })(t.CodeLensResolveRequest || (t.CodeLensResolveRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/formatting');
        })(t.DocumentFormattingRequest || (t.DocumentFormattingRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/rangeFormatting');
        })(
          t.DocumentRangeFormattingRequest ||
            (t.DocumentRangeFormattingRequest = {})
        ),
        (function (e) {
          e.type = new i.RequestType('textDocument/onTypeFormatting');
        })(
          t.DocumentOnTypeFormattingRequest ||
            (t.DocumentOnTypeFormattingRequest = {})
        ),
        (function (e) {
          e.type = new i.RequestType('textDocument/rename');
        })(t.RenameRequest || (t.RenameRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/prepareRename');
        })(t.PrepareRenameRequest || (t.PrepareRenameRequest = {})),
        (function (e) {
          e.type = new i.RequestType('textDocument/documentLink');
        })(t.DocumentLinkRequest || (t.DocumentLinkRequest = {})),
        (function (e) {
          e.type = new i.RequestType('documentLink/resolve');
        })(t.DocumentLinkResolveRequest || (t.DocumentLinkResolveRequest = {})),
        (function (e) {
          e.type = new i.RequestType('workspace/executeCommand');
        })(t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {})),
        (function (e) {
          e.type = new i.RequestType('workspace/applyEdit');
        })(t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {}));
    },
    '/7TX': function (e, t, n) {
      'use strict';
      var r =
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
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i,
        o = n('1vg8');
      !(function (e) {
        (e.ParseError = -32700),
          (e.InvalidRequest = -32600),
          (e.MethodNotFound = -32601),
          (e.InvalidParams = -32602),
          (e.InternalError = -32603),
          (e.serverErrorStart = -32099),
          (e.serverErrorEnd = -32e3),
          (e.ServerNotInitialized = -32002),
          (e.UnknownErrorCode = -32001),
          (e.RequestCancelled = -32800),
          (e.MessageWriteError = 1),
          (e.MessageReadError = 2);
      })((i = t.ErrorCodes || (t.ErrorCodes = {})));
      var s = (function (e) {
        function t(n, r, s) {
          var a = e.call(this, r) || this;
          return (
            (a.code = o.number(n) ? n : i.UnknownErrorCode),
            (a.data = s),
            Object.setPrototypeOf(a, t.prototype),
            a
          );
        }
        return (
          r(t, e),
          (t.prototype.toJson = function () {
            return {
              code: this.code,
              message: this.message,
              data: this.data,
            };
          }),
          t
        );
      })(Error);
      t.ResponseError = s;
      var a = (function () {
        function e(e, t) {
          (this._method = e), (this._numberOfParams = t);
        }
        return (
          Object.defineProperty(e.prototype, 'method', {
            get: function () {
              return this._method;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'numberOfParams', {
            get: function () {
              return this._numberOfParams;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      t.AbstractMessageType = a;
      var u = (function (e) {
        function t(t) {
          var n = e.call(this, t, 0) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType0 = u;
      var c = (function (e) {
        function t(t) {
          var n = e.call(this, t, 1) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType = c;
      var l = (function (e) {
        function t(t) {
          var n = e.call(this, t, 1) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType1 = l;
      var d = (function (e) {
        function t(t) {
          var n = e.call(this, t, 2) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType2 = d;
      var f = (function (e) {
        function t(t) {
          var n = e.call(this, t, 3) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType3 = f;
      var p = (function (e) {
        function t(t) {
          var n = e.call(this, t, 4) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType4 = p;
      var h = (function (e) {
        function t(t) {
          var n = e.call(this, t, 5) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType5 = h;
      var g = (function (e) {
        function t(t) {
          var n = e.call(this, t, 6) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType6 = g;
      var m = (function (e) {
        function t(t) {
          var n = e.call(this, t, 7) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType7 = m;
      var v = (function (e) {
        function t(t) {
          var n = e.call(this, t, 8) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType8 = v;
      var y = (function (e) {
        function t(t) {
          var n = e.call(this, t, 9) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.RequestType9 = y;
      var O = (function (e) {
        function t(t) {
          var n = e.call(this, t, 1) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType = O;
      var b = (function (e) {
        function t(t) {
          var n = e.call(this, t, 0) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType0 = b;
      var w = (function (e) {
        function t(t) {
          var n = e.call(this, t, 1) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType1 = w;
      var k = (function (e) {
        function t(t) {
          var n = e.call(this, t, 2) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType2 = k;
      var R = (function (e) {
        function t(t) {
          var n = e.call(this, t, 3) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType3 = R;
      var x = (function (e) {
        function t(t) {
          var n = e.call(this, t, 4) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType4 = x;
      var T = (function (e) {
        function t(t) {
          var n = e.call(this, t, 5) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType5 = T;
      var C = (function (e) {
        function t(t) {
          var n = e.call(this, t, 6) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType6 = C;
      var _ = (function (e) {
        function t(t) {
          var n = e.call(this, t, 7) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType7 = _;
      var E = (function (e) {
        function t(t) {
          var n = e.call(this, t, 8) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      t.NotificationType8 = E;
      var q = (function (e) {
        function t(t) {
          var n = e.call(this, t, 9) || this;
          return (n._ = void 0), n;
        }
        return r(t, e), t;
      })(a);
      (t.NotificationType9 = q),
        (t.isRequestMessage = function (e) {
          var t = e;
          return t && o.string(t.method) && (o.string(t.id) || o.number(t.id));
        }),
        (t.isNotificationMessage = function (e) {
          var t = e;
          return t && o.string(t.method) && void 0 === e.id;
        }),
        (t.isResponseMessage = function (e) {
          var t = e;
          return (
            t &&
            (void 0 !== t.result || !!t.error) &&
            (o.string(t.id) || o.number(t.id) || null === t.id)
          );
        });
    },
    '3JnO': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('MOv1');
      !(function (e) {
        (e.Comment = 'comment'), (e.Imports = 'imports'), (e.Region = 'region');
      })(t.FoldingRangeKind || (t.FoldingRangeKind = {})),
        (function (e) {
          e.type = new r.RequestType('textDocument/foldingRange');
        })(t.FoldingRangeRequest || (t.FoldingRangeRequest = {}));
    },
    '4Wfv': function (e, t, n) {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (function (e) {
          (e.None = 0), (e.First = 1), (e.Last = 2);
        })((r = t.Touch || (t.Touch = {})));
      var i = (function () {
        function e() {
          (this._map = new Map()),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        return (
          (e.prototype.clear = function () {
            this._map.clear(),
              (this._head = void 0),
              (this._tail = void 0),
              (this._size = 0);
          }),
          (e.prototype.isEmpty = function () {
            return !this._head && !this._tail;
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function () {
              return this._size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.has = function (e) {
            return this._map.has(e);
          }),
          (e.prototype.get = function (e) {
            var t = this._map.get(e);
            if (t) return t.value;
          }),
          (e.prototype.set = function (e, t, n) {
            void 0 === n && (n = r.None);
            var i = this._map.get(e);
            if (i) (i.value = t), n !== r.None && this.touch(i, n);
            else {
              switch (
                ((i = {
                  key: e,
                  value: t,
                  next: void 0,
                  previous: void 0,
                }),
                n)
              ) {
                case r.None:
                  this.addItemLast(i);
                  break;
                case r.First:
                  this.addItemFirst(i);
                  break;
                case r.Last:
                default:
                  this.addItemLast(i);
              }
              this._map.set(e, i), this._size++;
            }
          }),
          (e.prototype.delete = function (e) {
            var t = this._map.get(e);
            return (
              !!t && (this._map.delete(e), this.removeItem(t), this._size--, !0)
            );
          }),
          (e.prototype.shift = function () {
            if (this._head || this._tail) {
              if (!this._head || !this._tail) throw new Error('Invalid list');
              var e = this._head;
              return (
                this._map.delete(e.key),
                this.removeItem(e),
                this._size--,
                e.value
              );
            }
          }),
          (e.prototype.forEach = function (e, t) {
            for (var n = this._head; n; )
              t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
                (n = n.next);
          }),
          (e.prototype.forEachReverse = function (e, t) {
            for (var n = this._tail; n; )
              t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
                (n = n.previous);
          }),
          (e.prototype.values = function () {
            for (var e = [], t = this._head; t; ) e.push(t.value), (t = t.next);
            return e;
          }),
          (e.prototype.keys = function () {
            for (var e = [], t = this._head; t; ) e.push(t.key), (t = t.next);
            return e;
          }),
          (e.prototype.addItemFirst = function (e) {
            if (this._head || this._tail) {
              if (!this._head) throw new Error('Invalid list');
              (e.next = this._head), (this._head.previous = e);
            } else this._tail = e;
            this._head = e;
          }),
          (e.prototype.addItemLast = function (e) {
            if (this._head || this._tail) {
              if (!this._tail) throw new Error('Invalid list');
              (e.previous = this._tail), (this._tail.next = e);
            } else this._head = e;
            this._tail = e;
          }),
          (e.prototype.removeItem = function (e) {
            if (e === this._head && e === this._tail)
              (this._head = void 0), (this._tail = void 0);
            else if (e === this._head) this._head = e.next;
            else if (e === this._tail) this._tail = e.previous;
            else {
              var t = e.next,
                n = e.previous;
              if (!t || !n) throw new Error('Invalid list');
              (t.previous = n), (n.next = t);
            }
          }),
          (e.prototype.touch = function (e, t) {
            if (!this._head || !this._tail) throw new Error('Invalid list');
            if (t === r.First || t === r.Last)
              if (t === r.First) {
                if (e === this._head) return;
                var n = e.next,
                  i = e.previous;
                e === this._tail
                  ? ((i.next = void 0), (this._tail = i))
                  : ((n.previous = i), (i.next = n)),
                  (e.previous = void 0),
                  (e.next = this._head),
                  (this._head.previous = e),
                  (this._head = e);
              } else if (t === r.Last) {
                if (e === this._tail) return;
                (n = e.next), (i = e.previous);
                e === this._head
                  ? ((n.previous = void 0), (this._head = n))
                  : ((n.previous = i), (i.next = n)),
                  (e.next = void 0),
                  (e.previous = this._tail),
                  (this._tail.next = e),
                  (this._tail = e);
              }
          }),
          e
        );
      })();
      t.LinkedMap = i;
    },
    '7Z1E': function (e, t, n) {
      'use strict';
      var r, i, o, s, a, u, c, l, d, f, p, h, g, m, v, y, O, b;
      n.r(t),
        n.d(t, 'Position', function () {
          return r;
        }),
        n.d(t, 'Range', function () {
          return i;
        }),
        n.d(t, 'Location', function () {
          return o;
        }),
        n.d(t, 'Color', function () {
          return s;
        }),
        n.d(t, 'ColorInformation', function () {
          return a;
        }),
        n.d(t, 'ColorPresentation', function () {
          return u;
        }),
        n.d(t, 'FoldingRangeKind', function () {
          return c;
        }),
        n.d(t, 'FoldingRange', function () {
          return l;
        }),
        n.d(t, 'DiagnosticRelatedInformation', function () {
          return d;
        }),
        n.d(t, 'DiagnosticSeverity', function () {
          return f;
        }),
        n.d(t, 'Diagnostic', function () {
          return p;
        }),
        n.d(t, 'Command', function () {
          return h;
        }),
        n.d(t, 'TextEdit', function () {
          return g;
        }),
        n.d(t, 'TextDocumentEdit', function () {
          return m;
        }),
        n.d(t, 'CreateFile', function () {
          return v;
        }),
        n.d(t, 'RenameFile', function () {
          return y;
        }),
        n.d(t, 'DeleteFile', function () {
          return O;
        }),
        n.d(t, 'WorkspaceEdit', function () {
          return b;
        }),
        n.d(t, 'WorkspaceChange', function () {
          return L;
        }),
        n.d(t, 'TextDocumentIdentifier', function () {
          return w;
        }),
        n.d(t, 'VersionedTextDocumentIdentifier', function () {
          return k;
        }),
        n.d(t, 'TextDocumentItem', function () {
          return R;
        }),
        n.d(t, 'MarkupKind', function () {
          return x;
        }),
        n.d(t, 'MarkupContent', function () {
          return T;
        }),
        n.d(t, 'CompletionItemKind', function () {
          return C;
        }),
        n.d(t, 'InsertTextFormat', function () {
          return _;
        }),
        n.d(t, 'CompletionItem', function () {
          return E;
        }),
        n.d(t, 'CompletionList', function () {
          return q;
        }),
        n.d(t, 'MarkedString', function () {
          return P;
        }),
        n.d(t, 'Hover', function () {
          return D;
        }),
        n.d(t, 'ParameterInformation', function () {
          return S;
        }),
        n.d(t, 'SignatureInformation', function () {
          return N;
        }),
        n.d(t, 'DocumentHighlightKind', function () {
          return M;
        }),
        n.d(t, 'DocumentHighlight', function () {
          return $;
        }),
        n.d(t, 'SymbolKind', function () {
          return I;
        }),
        n.d(t, 'SymbolInformation', function () {
          return j;
        }),
        n.d(t, 'DocumentSymbol', function () {
          return X;
        }),
        n.d(t, 'CodeActionKind', function () {
          return A;
        }),
        n.d(t, 'CodeActionContext', function () {
          return F;
        }),
        n.d(t, 'CodeAction', function () {
          return Q;
        }),
        n.d(t, 'CodeLens', function () {
          return V;
        }),
        n.d(t, 'FormattingOptions', function () {
          return U;
        }),
        n.d(t, 'DocumentLink', function () {
          return z;
        }),
        n.d(t, 'EOL', function () {
          return G;
        }),
        n.d(t, 'TextDocument', function () {
          return J;
        }),
        n.d(t, 'TextDocumentSaveReason', function () {
          return Z;
        }),
        (function (e) {
          (e.create = function (e, t) {
            return {
              line: e,
              character: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.objectLiteral(t) && Y.number(t.line) && Y.number(t.character)
              );
            });
        })(r || (r = {})),
        (function (e) {
          (e.create = function (e, t, n, i) {
            if (Y.number(e) && Y.number(t) && Y.number(n) && Y.number(i))
              return {
                start: r.create(e, t),
                end: r.create(n, i),
              };
            if (r.is(e) && r.is(t))
              return {
                start: e,
                end: t,
              };
            throw new Error(
              'Range#create called with invalid arguments[' +
                e +
                ', ' +
                t +
                ', ' +
                n +
                ', ' +
                i +
                ']'
            );
          }),
            (e.is = function (e) {
              var t = e;
              return Y.objectLiteral(t) && r.is(t.start) && r.is(t.end);
            });
        })(i || (i = {})),
        (function (e) {
          (e.create = function (e, t) {
            return {
              uri: e,
              range: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) &&
                i.is(t.range) &&
                (Y.string(t.uri) || Y.undefined(t.uri))
              );
            });
        })(o || (o = {})),
        (function (e) {
          (e.create = function (e, t, n, r) {
            return {
              red: e,
              green: t,
              blue: n,
              alpha: r,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.number(t.red) &&
                Y.number(t.green) &&
                Y.number(t.blue) &&
                Y.number(t.alpha)
              );
            });
        })(s || (s = {})),
        (function (e) {
          (e.create = function (e, t) {
            return {
              range: e,
              color: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return i.is(t.range) && s.is(t.color);
            });
        })(a || (a = {})),
        (function (e) {
          (e.create = function (e, t, n) {
            return {
              label: e,
              textEdit: t,
              additionalTextEdits: n,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.string(t.label) &&
                (Y.undefined(t.textEdit) || g.is(t)) &&
                (Y.undefined(t.additionalTextEdits) ||
                  Y.typedArray(t.additionalTextEdits, g.is))
              );
            });
        })(u || (u = {})),
        (function (e) {
          (e.Comment = 'comment'),
            (e.Imports = 'imports'),
            (e.Region = 'region');
        })(c || (c = {})),
        (function (e) {
          (e.create = function (e, t, n, r, i) {
            var o = {
              startLine: e,
              endLine: t,
            };
            return (
              Y.defined(n) && (o.startCharacter = n),
              Y.defined(r) && (o.endCharacter = r),
              Y.defined(i) && (o.kind = i),
              o
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.number(t.startLine) &&
                Y.number(t.startLine) &&
                (Y.undefined(t.startCharacter) || Y.number(t.startCharacter)) &&
                (Y.undefined(t.endCharacter) || Y.number(t.endCharacter)) &&
                (Y.undefined(t.kind) || Y.string(t.kind))
              );
            });
        })(l || (l = {})),
        (function (e) {
          (e.create = function (e, t) {
            return {
              location: e,
              message: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return Y.defined(t) && o.is(t.location) && Y.string(t.message);
            });
        })(d || (d = {})),
        (function (e) {
          (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
        })(f || (f = {})),
        (function (e) {
          (e.create = function (e, t, n, r, i, o) {
            var s = {
              range: e,
              message: t,
            };
            return (
              Y.defined(n) && (s.severity = n),
              Y.defined(r) && (s.code = r),
              Y.defined(i) && (s.source = i),
              Y.defined(o) && (s.relatedInformation = o),
              s
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) &&
                i.is(t.range) &&
                Y.string(t.message) &&
                (Y.number(t.severity) || Y.undefined(t.severity)) &&
                (Y.number(t.code) || Y.string(t.code) || Y.undefined(t.code)) &&
                (Y.string(t.source) || Y.undefined(t.source)) &&
                (Y.undefined(t.relatedInformation) ||
                  Y.typedArray(t.relatedInformation, d.is))
              );
            });
        })(p || (p = {})),
        (function (e) {
          (e.create = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = {
              title: e,
              command: t,
            };
            return Y.defined(n) && n.length > 0 && (i.arguments = n), i;
          }),
            (e.is = function (e) {
              var t = e;
              return Y.defined(t) && Y.string(t.title) && Y.string(t.command);
            });
        })(h || (h = {})),
        (function (e) {
          (e.replace = function (e, t) {
            return {
              range: e,
              newText: t,
            };
          }),
            (e.insert = function (e, t) {
              return {
                range: {
                  start: e,
                  end: e,
                },
                newText: t,
              };
            }),
            (e.del = function (e) {
              return {
                range: e,
                newText: '',
              };
            }),
            (e.is = function (e) {
              var t = e;
              return Y.objectLiteral(t) && Y.string(t.newText) && i.is(t.range);
            });
        })(g || (g = {})),
        (function (e) {
          (e.create = function (e, t) {
            return {
              textDocument: e,
              edits: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) && k.is(t.textDocument) && Array.isArray(t.edits)
              );
            });
        })(m || (m = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = {
              kind: 'create',
              uri: e,
            };
            return (
              void 0 === t ||
                (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
                (n.options = t),
              n
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                'create' === t.kind &&
                Y.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    Y.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      Y.boolean(t.options.ignoreIfExists))))
              );
            });
        })(v || (v = {})),
        (function (e) {
          (e.create = function (e, t, n) {
            var r = {
              kind: 'rename',
              oldUri: e,
              newUri: t,
            };
            return (
              void 0 === n ||
                (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
                (r.options = n),
              r
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                'rename' === t.kind &&
                Y.string(t.oldUri) &&
                Y.string(t.newUri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    Y.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      Y.boolean(t.options.ignoreIfExists))))
              );
            });
        })(y || (y = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = {
              kind: 'delete',
              uri: e,
            };
            return (
              void 0 === t ||
                (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
                (n.options = t),
              n
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                'delete' === t.kind &&
                Y.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.recursive ||
                    Y.boolean(t.options.recursive)) &&
                    (void 0 === t.options.ignoreIfNotExists ||
                      Y.boolean(t.options.ignoreIfNotExists))))
              );
            });
        })(O || (O = {})),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return (
              t &&
              (void 0 !== t.changes || void 0 !== t.documentChanges) &&
              (void 0 === t.documentChanges ||
                t.documentChanges.every(function (e) {
                  return Y.string(e.kind)
                    ? v.is(e) || y.is(e) || O.is(e)
                    : m.is(e);
                }))
            );
          };
        })(b || (b = {}));
      var w,
        k,
        R,
        x,
        T,
        C,
        _,
        E,
        q,
        P,
        D,
        S,
        N,
        M,
        $,
        I,
        j,
        W = (function () {
          function e(e) {
            this.edits = e;
          }
          return (
            (e.prototype.insert = function (e, t) {
              this.edits.push(g.insert(e, t));
            }),
            (e.prototype.replace = function (e, t) {
              this.edits.push(g.replace(e, t));
            }),
            (e.prototype.delete = function (e) {
              this.edits.push(g.del(e));
            }),
            (e.prototype.add = function (e) {
              this.edits.push(e);
            }),
            (e.prototype.all = function () {
              return this.edits;
            }),
            (e.prototype.clear = function () {
              this.edits.splice(0, this.edits.length);
            }),
            e
          );
        })(),
        L = (function () {
          function e(e) {
            var t = this;
            (this._textEditChanges = Object.create(null)),
              e &&
                ((this._workspaceEdit = e),
                e.documentChanges
                  ? e.documentChanges.forEach(function (e) {
                      if (m.is(e)) {
                        var n = new W(e.edits);
                        t._textEditChanges[e.textDocument.uri] = n;
                      }
                    })
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (n) {
                      var r = new W(e.changes[n]);
                      t._textEditChanges[n] = r;
                    }));
          }
          return (
            Object.defineProperty(e.prototype, 'edit', {
              get: function () {
                return this._workspaceEdit;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getTextEditChange = function (e) {
              if (k.is(e)) {
                if (
                  (this._workspaceEdit ||
                    (this._workspaceEdit = {
                      documentChanges: [],
                    }),
                  !this._workspaceEdit.documentChanges)
                )
                  throw new Error(
                    'Workspace edit is not configured for document changes.'
                  );
                var t = e;
                if (!(r = this._textEditChanges[t.uri])) {
                  var n = {
                    textDocument: t,
                    edits: (i = []),
                  };
                  this._workspaceEdit.documentChanges.push(n),
                    (r = new W(i)),
                    (this._textEditChanges[t.uri] = r);
                }
                return r;
              }
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = {
                    changes: Object.create(null),
                  }),
                !this._workspaceEdit.changes)
              )
                throw new Error(
                  'Workspace edit is not configured for normal text edit changes.'
                );
              var r;
              if (!(r = this._textEditChanges[e])) {
                var i = [];
                (this._workspaceEdit.changes[e] = i),
                  (r = new W(i)),
                  (this._textEditChanges[e] = r);
              }
              return r;
            }),
            (e.prototype.createFile = function (e, t) {
              this.checkDocumentChanges(),
                this._workspaceEdit.documentChanges.push(v.create(e, t));
            }),
            (e.prototype.renameFile = function (e, t, n) {
              this.checkDocumentChanges(),
                this._workspaceEdit.documentChanges.push(y.create(e, t, n));
            }),
            (e.prototype.deleteFile = function (e, t) {
              this.checkDocumentChanges(),
                this._workspaceEdit.documentChanges.push(O.create(e, t));
            }),
            (e.prototype.checkDocumentChanges = function () {
              if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
                throw new Error(
                  'Workspace edit is not configured for document changes.'
                );
            }),
            e
          );
        })();
      !(function (e) {
        (e.create = function (e) {
          return {
            uri: e,
          };
        }),
          (e.is = function (e) {
            var t = e;
            return Y.defined(t) && Y.string(t.uri);
          });
      })(w || (w = {})),
        (function (e) {
          (e.create = function (e, t) {
            return {
              uri: e,
              version: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) &&
                Y.string(t.uri) &&
                (null === t.version || Y.number(t.version))
              );
            });
        })(k || (k = {})),
        (function (e) {
          (e.create = function (e, t, n, r) {
            return {
              uri: e,
              languageId: t,
              version: n,
              text: r,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) &&
                Y.string(t.uri) &&
                Y.string(t.languageId) &&
                Y.number(t.version) &&
                Y.string(t.text)
              );
            });
        })(R || (R = {})),
        (function (e) {
          (e.PlainText = 'plaintext'), (e.Markdown = 'markdown');
        })(x || (x = {})),
        (function (e) {
          e.is = function (t) {
            var n = t;
            return n === e.PlainText || n === e.Markdown;
          };
        })(x || (x = {})),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return Y.objectLiteral(e) && x.is(t.kind) && Y.string(t.value);
          };
        })(T || (T = {})),
        (function (e) {
          (e.Text = 1),
            (e.Method = 2),
            (e.Function = 3),
            (e.Constructor = 4),
            (e.Field = 5),
            (e.Variable = 6),
            (e.Class = 7),
            (e.Interface = 8),
            (e.Module = 9),
            (e.Property = 10),
            (e.Unit = 11),
            (e.Value = 12),
            (e.Enum = 13),
            (e.Keyword = 14),
            (e.Snippet = 15),
            (e.Color = 16),
            (e.File = 17),
            (e.Reference = 18),
            (e.Folder = 19),
            (e.EnumMember = 20),
            (e.Constant = 21),
            (e.Struct = 22),
            (e.Event = 23),
            (e.Operator = 24),
            (e.TypeParameter = 25);
        })(C || (C = {})),
        (function (e) {
          (e.PlainText = 1), (e.Snippet = 2);
        })(_ || (_ = {})),
        (function (e) {
          e.create = function (e) {
            return {
              label: e,
            };
          };
        })(E || (E = {})),
        (function (e) {
          e.create = function (e, t) {
            return {
              items: e || [],
              isIncomplete: !!t,
            };
          };
        })(q || (q = {})),
        (function (e) {
          (e.fromPlainText = function (e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.string(t) ||
                (Y.objectLiteral(t) &&
                  Y.string(t.language) &&
                  Y.string(t.value))
              );
            });
        })(P || (P = {})),
        (function (e) {
          e.is = function (e) {
            var t = e;
            return (
              Y.objectLiteral(t) &&
              (T.is(t.contents) ||
                P.is(t.contents) ||
                Y.typedArray(t.contents, P.is)) &&
              (void 0 === e.range || i.is(e.range))
            );
          };
        })(D || (D = {})),
        (function (e) {
          e.create = function (e, t) {
            return t
              ? {
                  label: e,
                  documentation: t,
                }
              : {
                  label: e,
                };
          };
        })(S || (S = {})),
        (function (e) {
          e.create = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = {
              label: e,
            };
            return (
              Y.defined(t) && (i.documentation = t),
              Y.defined(n) ? (i.parameters = n) : (i.parameters = []),
              i
            );
          };
        })(N || (N = {})),
        (function (e) {
          (e.Text = 1), (e.Read = 2), (e.Write = 3);
        })(M || (M = {})),
        (function (e) {
          e.create = function (e, t) {
            var n = {
              range: e,
            };
            return Y.number(t) && (n.kind = t), n;
          };
        })($ || ($ = {})),
        (function (e) {
          (e.File = 1),
            (e.Module = 2),
            (e.Namespace = 3),
            (e.Package = 4),
            (e.Class = 5),
            (e.Method = 6),
            (e.Property = 7),
            (e.Field = 8),
            (e.Constructor = 9),
            (e.Enum = 10),
            (e.Interface = 11),
            (e.Function = 12),
            (e.Variable = 13),
            (e.Constant = 14),
            (e.String = 15),
            (e.Number = 16),
            (e.Boolean = 17),
            (e.Array = 18),
            (e.Object = 19),
            (e.Key = 20),
            (e.Null = 21),
            (e.EnumMember = 22),
            (e.Struct = 23),
            (e.Event = 24),
            (e.Operator = 25),
            (e.TypeParameter = 26);
        })(I || (I = {})),
        (function (e) {
          e.create = function (e, t, n, r, i) {
            var o = {
              name: e,
              kind: t,
              location: {
                uri: r,
                range: n,
              },
            };
            return i && (o.containerName = i), o;
          };
        })(j || (j = {}));
      var A,
        F,
        Q,
        V,
        U,
        X = function () {};
      !(function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var s = {
            name: e,
            detail: t,
            kind: n,
            range: r,
            selectionRange: i,
          };
          return void 0 !== o && (s.children = o), s;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              Y.string(t.name) &&
              Y.number(t.kind) &&
              i.is(t.range) &&
              i.is(t.selectionRange) &&
              (void 0 === t.detail || Y.string(t.detail)) &&
              (void 0 === t.deprecated || Y.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children))
            );
          });
      })(X || (X = {})),
        (function (e) {
          (e.QuickFix = 'quickfix'),
            (e.Refactor = 'refactor'),
            (e.RefactorExtract = 'refactor.extract'),
            (e.RefactorInline = 'refactor.inline'),
            (e.RefactorRewrite = 'refactor.rewrite'),
            (e.Source = 'source'),
            (e.SourceOrganizeImports = 'source.organizeImports');
        })(A || (A = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = {
              diagnostics: e,
            };
            return void 0 !== t && null !== t && (n.only = t), n;
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) &&
                Y.typedArray(t.diagnostics, p.is) &&
                (void 0 === t.only || Y.typedArray(t.only, Y.string))
              );
            });
        })(F || (F = {})),
        (function (e) {
          (e.create = function (e, t, n) {
            var r = {
              title: e,
            };
            return (
              h.is(t) ? (r.command = t) : (r.edit = t),
              void 0 !== n && (r.kind = n),
              r
            );
          }),
            (e.is = function (e) {
              var t = e;
              return (
                t &&
                Y.string(t.title) &&
                (void 0 === t.diagnostics ||
                  Y.typedArray(t.diagnostics, p.is)) &&
                (void 0 === t.kind || Y.string(t.kind)) &&
                (void 0 !== t.edit || void 0 !== t.command) &&
                (void 0 === t.command || h.is(t.command)) &&
                (void 0 === t.edit || b.is(t.edit))
              );
            });
        })(Q || (Q = {})),
        (function (e) {
          (e.create = function (e, t) {
            var n = {
              range: e,
            };
            return Y.defined(t) && (n.data = t), n;
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) &&
                i.is(t.range) &&
                (Y.undefined(t.command) || h.is(t.command))
              );
            });
        })(V || (V = {})),
        (function (e) {
          (e.create = function (e, t) {
            return {
              tabSize: e,
              insertSpaces: t,
            };
          }),
            (e.is = function (e) {
              var t = e;
              return (
                Y.defined(t) && Y.number(t.tabSize) && Y.boolean(t.insertSpaces)
              );
            });
        })(U || (U = {}));
      var z = function () {};
      !(function (e) {
        (e.create = function (e, t, n) {
          return {
            range: e,
            target: t,
            data: n,
          };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              Y.defined(t) &&
              i.is(t.range) &&
              (Y.undefined(t.target) || Y.string(t.target))
            );
          });
      })(z || (z = {}));
      var J,
        Z,
        G = ['\n', '\r\n', '\r'];
      !(function (e) {
        function t(e, n) {
          if (e.length <= 1) return e;
          var r = (e.length / 2) | 0,
            i = e.slice(0, r),
            o = e.slice(r);
          t(i, n), t(o, n);
          for (var s = 0, a = 0, u = 0; s < i.length && a < o.length; ) {
            var c = n(i[s], o[a]);
            e[u++] = c <= 0 ? i[s++] : o[a++];
          }
          for (; s < i.length; ) e[u++] = i[s++];
          for (; a < o.length; ) e[u++] = o[a++];
          return e;
        }
        (e.create = function (e, t, n, r) {
          return new K(e, t, n, r);
        }),
          (e.is = function (e) {
            var t = e;
            return !!(
              Y.defined(t) &&
              Y.string(t.uri) &&
              (Y.undefined(t.languageId) || Y.string(t.languageId)) &&
              Y.number(t.lineCount) &&
              Y.func(t.getText) &&
              Y.func(t.positionAt) &&
              Y.func(t.offsetAt)
            );
          }),
          (e.applyEdits = function (e, n) {
            for (
              var r = e.getText(),
                i = t(n, function (e, t) {
                  var n = e.range.start.line - t.range.start.line;
                  return 0 === n
                    ? e.range.start.character - t.range.start.character
                    : n;
                }),
                o = r.length,
                s = i.length - 1;
              s >= 0;
              s--
            ) {
              var a = i[s],
                u = e.offsetAt(a.range.start),
                c = e.offsetAt(a.range.end);
              if (!(c <= o)) throw new Error('Ovelapping edit');
              (r = r.substring(0, u) + a.newText + r.substring(c, r.length)),
                (o = u);
            }
            return r;
          });
      })(J || (J = {})),
        (function (e) {
          (e.Manual = 1), (e.AfterDelay = 2), (e.FocusOut = 3);
        })(Z || (Z = {}));
      var Y,
        K = (function () {
          function e(e, t, n, r) {
            (this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = r),
              (this._lineOffsets = null);
          }
          return (
            Object.defineProperty(e.prototype, 'uri', {
              get: function () {
                return this._uri;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'languageId', {
              get: function () {
                return this._languageId;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'version', {
              get: function () {
                return this._version;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getText = function (e) {
              if (e) {
                var t = this.offsetAt(e.start),
                  n = this.offsetAt(e.end);
                return this._content.substring(t, n);
              }
              return this._content;
            }),
            (e.prototype.update = function (e, t) {
              (this._content = e.text),
                (this._version = t),
                (this._lineOffsets = null);
            }),
            (e.prototype.getLineOffsets = function () {
              if (null === this._lineOffsets) {
                for (
                  var e = [], t = this._content, n = !0, r = 0;
                  r < t.length;
                  r++
                ) {
                  n && (e.push(r), (n = !1));
                  var i = t.charAt(r);
                  (n = '\r' === i || '\n' === i),
                    '\r' === i &&
                      r + 1 < t.length &&
                      '\n' === t.charAt(r + 1) &&
                      r++;
                }
                n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
              }
              return this._lineOffsets;
            }),
            (e.prototype.positionAt = function (e) {
              e = Math.max(Math.min(e, this._content.length), 0);
              var t = this.getLineOffsets(),
                n = 0,
                i = t.length;
              if (0 === i) return r.create(0, e);
              for (; n < i; ) {
                var o = Math.floor((n + i) / 2);
                t[o] > e ? (i = o) : (n = o + 1);
              }
              var s = n - 1;
              return r.create(s, e - t[s]);
            }),
            (e.prototype.offsetAt = function (e) {
              var t = this.getLineOffsets();
              if (e.line >= t.length) return this._content.length;
              if (e.line < 0) return 0;
              var n = t[e.line],
                r =
                  e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
              return Math.max(Math.min(n + e.character, r), n);
            }),
            Object.defineProperty(e.prototype, 'lineCount', {
              get: function () {
                return this.getLineOffsets().length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })();
      !(function (e) {
        var t = Object.prototype.toString;
        (e.defined = function (e) {
          return 'undefined' !== typeof e;
        }),
          (e.undefined = function (e) {
            return 'undefined' === typeof e;
          }),
          (e.boolean = function (e) {
            return !0 === e || !1 === e;
          }),
          (e.string = function (e) {
            return '[object String]' === t.call(e);
          }),
          (e.number = function (e) {
            return '[object Number]' === t.call(e);
          }),
          (e.func = function (e) {
            return '[object Function]' === t.call(e);
          }),
          (e.objectLiteral = function (e) {
            return null !== e && 'object' === typeof e;
          }),
          (e.typedArray = function (e, t) {
            return Array.isArray(e) && e.every(t);
          });
      })(Y || (Y = {}));
    },
    '87dK': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'conf', function () {
          return i;
        }),
        n.d(t, 'language', function () {
          return o;
        });
      var r = 'undefined' === typeof monaco ? self.monaco : monaco,
        i = {
          wordPattern:
            /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
          comments: {
            lineComment: '//',
            blockComment: ['/*', '*/'],
          },
          brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
          ],
          onEnterRules: [
            {
              beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
              afterText: /^\s*\*\/$/,
              action: {
                indentAction: r.languages.IndentAction.IndentOutdent,
                appendText: ' * ',
              },
            },
            {
              beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
              action: {
                indentAction: r.languages.IndentAction.None,
                appendText: ' * ',
              },
            },
            {
              beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
              action: {
                indentAction: r.languages.IndentAction.None,
                appendText: '* ',
              },
            },
            {
              beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
              action: {
                indentAction: r.languages.IndentAction.None,
                removeText: 1,
              },
            },
          ],
          autoClosingPairs: [
            {
              open: '{',
              close: '}',
            },
            {
              open: '[',
              close: ']',
            },
            {
              open: '(',
              close: ')',
            },
            {
              open: '"',
              close: '"',
              notIn: ['string'],
            },
            {
              open: "'",
              close: "'",
              notIn: ['string', 'comment'],
            },
            {
              open: '`',
              close: '`',
              notIn: ['string', 'comment'],
            },
            {
              open: '/**',
              close: ' */',
              notIn: ['string'],
            },
          ],
          folding: {
            markers: {
              start: new RegExp('^\\s*//\\s*#?region\\b'),
              end: new RegExp('^\\s*//\\s*#?endregion\\b'),
            },
          },
        },
        o = {
          defaultToken: 'invalid',
          tokenPostfix: '.ts',
          keywords: [
            'abstract',
            'as',
            'break',
            'case',
            'catch',
            'class',
            'continue',
            'const',
            'constructor',
            'debugger',
            'declare',
            'default',
            'delete',
            'do',
            'else',
            'enum',
            'export',
            'extends',
            'false',
            'finally',
            'for',
            'from',
            'function',
            'get',
            'if',
            'implements',
            'import',
            'in',
            'infer',
            'instanceof',
            'interface',
            'is',
            'keyof',
            'let',
            'module',
            'namespace',
            'new',
            'null',
            'package',
            'private',
            'protected',
            'public',
            'readonly',
            'require',
            'global',
            'return',
            'set',
            'static',
            'super',
            'switch',
            'symbol',
            'this',
            'throw',
            'true',
            'try',
            'type',
            'typeof',
            'unique',
            'var',
            'void',
            'while',
            'with',
            'yield',
            'async',
            'await',
            'of',
          ],
          typeKeywords: [
            'any',
            'boolean',
            'number',
            'object',
            'string',
            'undefined',
            'bigint',
            'never',
            'unknown',
          ],
          operators: [
            '<=',
            '>=',
            '==',
            '!=',
            '===',
            '!==',
            '=>',
            '+',
            '-',
            '**',
            '*',
            '/',
            '%',
            '++',
            '--',
            '<<',
            '</',
            '>>',
            '>>>',
            '&',
            '|',
            '^',
            '!',
            '~',
            '&&',
            '||',
            '??',
            '?',
            ':',
            '=',
            '+=',
            '-=',
            '*=',
            '**=',
            '/=',
            '%=',
            '<<=',
            '>>=',
            '>>>=',
            '&=',
            '|=',
            '^=',
            '@',
            '#',
          ],
          symbols: /[=><!~?:&|+\-*\/\^%#]+/,
          escapes:
            /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
          digits: /\d+(_+\d+)*/,
          octaldigits: /[0-7]+(_+[0-7]+)*/,
          binarydigits: /[0-1]+(_+[0-1]+)*/,
          hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
          regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
          regexpesc:
            /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
          tokenizer: {
            root: [
              [/[{}]/, 'delimiter.bracket'],
              {
                include: 'common',
              },
            ],
            common: [
              [
                /[a-z_$][\w$]*/,
                {
                  cases: {
                    '@typeKeywords': 'keyword',
                    '@keywords': 'keyword',
                    '@default': 'identifier',
                  },
                },
              ],
              [/[A-Z][\w\$]*/, 'type.identifier'],
              {
                include: '@whitespace',
              },
              [
                /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
                {
                  token: 'regexp',
                  bracket: '@open',
                  next: '@regexp',
                },
              ],
              [/[()\[\]]/, '@brackets'],
              [/[<>](?!@symbols)/, '@brackets'],
              [/!(?=([^=]|$))/, 'delimiter'],
              [
                /@symbols/,
                {
                  cases: {
                    '@operators': 'delimiter',
                    '@default': '',
                  },
                },
              ],
              [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
              [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
              [/0[xX](@hexdigits)n?/, 'number.hex'],
              [/0[oO]?(@octaldigits)n?/, 'number.octal'],
              [/0[bB](@binarydigits)n?/, 'number.binary'],
              [/(@digits)n?/, 'number'],
              [/[;,.]/, 'delimiter'],
              [/"([^"\\]|\\.)*$/, 'string.invalid'],
              [/'([^'\\]|\\.)*$/, 'string.invalid'],
              [/"/, 'string', '@string_double'],
              [/'/, 'string', '@string_single'],
              [/`/, 'string', '@string_backtick'],
            ],
            whitespace: [
              [/[ \t\r\n]+/, ''],
              [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
              [/\/\*/, 'comment', '@comment'],
              [/\/\/.*$/, 'comment'],
            ],
            comment: [
              [/[^\/*]+/, 'comment'],
              [/\*\//, 'comment', '@pop'],
              [/[\/*]/, 'comment'],
            ],
            jsdoc: [
              [/[^\/*]+/, 'comment.doc'],
              [/\*\//, 'comment.doc', '@pop'],
              [/[\/*]/, 'comment.doc'],
            ],
            regexp: [
              [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                  'regexp.escape.control',
                  'regexp.escape.control',
                  'regexp.escape.control',
                ],
              ],
              [
                /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
                [
                  'regexp.escape.control',
                  {
                    token: 'regexp.escape.control',
                    next: '@regexrange',
                  },
                ],
              ],
              [
                /(\()(\?:|\?=|\?!)/,
                ['regexp.escape.control', 'regexp.escape.control'],
              ],
              [/[()]/, 'regexp.escape.control'],
              [/@regexpctl/, 'regexp.escape.control'],
              [/[^\\\/]/, 'regexp'],
              [/@regexpesc/, 'regexp.escape'],
              [/\\\./, 'regexp.invalid'],
              [
                /(\/)([gimsuy]*)/,
                [
                  {
                    token: 'regexp',
                    bracket: '@close',
                    next: '@pop',
                  },
                  'keyword.other',
                ],
              ],
            ],
            regexrange: [
              [/-/, 'regexp.escape.control'],
              [/\^/, 'regexp.invalid'],
              [/@regexpesc/, 'regexp.escape'],
              [/[^\]]/, 'regexp'],
              [
                /\]/,
                {
                  token: 'regexp.escape.control',
                  next: '@pop',
                  bracket: '@close',
                },
              ],
            ],
            string_double: [
              [/[^\\"]+/, 'string'],
              [/@escapes/, 'string.escape'],
              [/\\./, 'string.escape.invalid'],
              [/"/, 'string', '@pop'],
            ],
            string_single: [
              [/[^\\']+/, 'string'],
              [/@escapes/, 'string.escape'],
              [/\\./, 'string.escape.invalid'],
              [/'/, 'string', '@pop'],
            ],
            string_backtick: [
              [
                /\$\{/,
                {
                  token: 'delimiter.bracket',
                  next: '@bracketCounting',
                },
              ],
              [/[^\\`$]+/, 'string'],
              [/@escapes/, 'string.escape'],
              [/\\./, 'string.escape.invalid'],
              [/`/, 'string', '@pop'],
            ],
            bracketCounting: [
              [/\{/, 'delimiter.bracket', '@bracketCounting'],
              [/\}/, 'delimiter.bracket', '@pop'],
              {
                include: 'common',
              },
            ],
          },
        };
    },
    '8ahE': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('MOv1');
      !(function (e) {
        e.type = new r.RequestType('textDocument/typeDefinition');
      })(t.TypeDefinitionRequest || (t.TypeDefinitionRequest = {}));
    },
    ALIN: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('RUQ2'),
        i = n('uWpP'),
        o = n('vIUA');
      (t.createClientSocketTransport = function (e, t) {
        var n;
        void 0 === t && (t = 'utf-8');
        var s = new Promise(function (e, t) {
          n = e;
        });
        return new Promise(function (a, u) {
          var c = r.createServer(function (e) {
            c.close(),
              n([
                new i.SocketMessageReader(e, t),
                new o.SocketMessageWriter(e, t),
              ]);
          });
          c.on('error', u),
            c.listen(e, '127.0.0.1', function () {
              c.removeListener('error', u),
                a({
                  onConnected: function () {
                    return s;
                  },
                });
            });
        });
      }),
        (t.createServerSocketTransport = function (e, t) {
          void 0 === t && (t = 'utf-8');
          var n = r.createConnection(e, '127.0.0.1');
          return [
            new i.SocketMessageReader(n, t),
            new o.SocketMessageWriter(n, t),
          ];
        });
    },
    BA4U: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const r = n('fIkx'),
        i = n('Gkij');
      var o;
      !(function (e) {
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: r.Event.None,
        })),
          (e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: r.Event.None,
          })),
          (e.is = function (t) {
            let n = t;
            return (
              n &&
              (n === e.None ||
                n === e.Cancelled ||
                (i.boolean(n.isCancellationRequested) &&
                  !!n.onCancellationRequested))
            );
          });
      })((o = t.CancellationToken || (t.CancellationToken = {})));
      const s = Object.freeze(function (e, t) {
        let n = setTimeout(e.bind(t), 0);
        return {
          dispose() {
            clearTimeout(n);
          },
        };
      });
      class a {
        constructor() {
          this._isCancelled = !1;
        }
        cancel() {
          this._isCancelled ||
            ((this._isCancelled = !0),
            this._emitter &&
              (this._emitter.fire(void 0), (this._emitter = void 0)));
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          return this._isCancelled
            ? s
            : (this._emitter || (this._emitter = new r.Emitter()),
              this._emitter.event);
        }
      }
      t.CancellationTokenSource = class {
        get token() {
          return this._token || (this._token = new a()), this._token;
        }
        cancel() {
          this._token ? this._token.cancel() : (this._token = o.Cancelled);
        }
        dispose() {
          this.cancel();
        }
      };
    },
    BOov: function (e, t, n) {
      'use strict';

      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var i = n('MOv1');
      (t.ErrorCodes = i.ErrorCodes),
        (t.ResponseError = i.ResponseError),
        (t.CancellationToken = i.CancellationToken),
        (t.CancellationTokenSource = i.CancellationTokenSource),
        (t.Disposable = i.Disposable),
        (t.Event = i.Event),
        (t.Emitter = i.Emitter),
        (t.Trace = i.Trace),
        (t.TraceFormat = i.TraceFormat),
        (t.SetTraceNotification = i.SetTraceNotification),
        (t.LogTraceNotification = i.LogTraceNotification),
        (t.RequestType = i.RequestType),
        (t.RequestType0 = i.RequestType0),
        (t.NotificationType = i.NotificationType),
        (t.NotificationType0 = i.NotificationType0),
        (t.MessageReader = i.MessageReader),
        (t.MessageWriter = i.MessageWriter),
        (t.ConnectionStrategy = i.ConnectionStrategy),
        (t.StreamMessageReader = i.StreamMessageReader),
        (t.StreamMessageWriter = i.StreamMessageWriter),
        (t.IPCMessageReader = i.IPCMessageReader),
        (t.IPCMessageWriter = i.IPCMessageWriter),
        (t.createClientPipeTransport = i.createClientPipeTransport),
        (t.createServerPipeTransport = i.createServerPipeTransport),
        (t.generateRandomPipeName = i.generateRandomPipeName),
        (t.createClientSocketTransport = i.createClientSocketTransport),
        (t.createServerSocketTransport = i.createServerSocketTransport),
        r(n('7Z1E')),
        r(n('+cRy')),
        (t.createProtocolConnection = function (e, t, n, r) {
          return i.createMessageConnection(e, t, n, r);
        });
    },
    'C+6V': function (e, t, n) {
      'use strict';
      (function (e) {
        var r =
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
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })();

        function i(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        var o = n('1vg8'),
          s = n('/7TX');
        (t.RequestType = s.RequestType),
          (t.RequestType0 = s.RequestType0),
          (t.RequestType1 = s.RequestType1),
          (t.RequestType2 = s.RequestType2),
          (t.RequestType3 = s.RequestType3),
          (t.RequestType4 = s.RequestType4),
          (t.RequestType5 = s.RequestType5),
          (t.RequestType6 = s.RequestType6),
          (t.RequestType7 = s.RequestType7),
          (t.RequestType8 = s.RequestType8),
          (t.RequestType9 = s.RequestType9),
          (t.ResponseError = s.ResponseError),
          (t.ErrorCodes = s.ErrorCodes),
          (t.NotificationType = s.NotificationType),
          (t.NotificationType0 = s.NotificationType0),
          (t.NotificationType1 = s.NotificationType1),
          (t.NotificationType2 = s.NotificationType2),
          (t.NotificationType3 = s.NotificationType3),
          (t.NotificationType4 = s.NotificationType4),
          (t.NotificationType5 = s.NotificationType5),
          (t.NotificationType6 = s.NotificationType6),
          (t.NotificationType7 = s.NotificationType7),
          (t.NotificationType8 = s.NotificationType8),
          (t.NotificationType9 = s.NotificationType9);
        var a = n('uWpP');
        (t.MessageReader = a.MessageReader),
          (t.StreamMessageReader = a.StreamMessageReader),
          (t.IPCMessageReader = a.IPCMessageReader),
          (t.SocketMessageReader = a.SocketMessageReader);
        var u = n('vIUA');
        (t.MessageWriter = u.MessageWriter),
          (t.StreamMessageWriter = u.StreamMessageWriter),
          (t.IPCMessageWriter = u.IPCMessageWriter),
          (t.SocketMessageWriter = u.SocketMessageWriter);
        var c = n('Z5Ki');
        (t.Disposable = c.Disposable),
          (t.Event = c.Event),
          (t.Emitter = c.Emitter);
        var l = n('Ff8q');
        (t.CancellationTokenSource = l.CancellationTokenSource),
          (t.CancellationToken = l.CancellationToken);
        var d,
          f,
          p,
          h,
          g,
          m = n('4Wfv');
        i(n('qL5x')),
          i(n('ALIN')),
          (function (e) {
            e.type = new s.NotificationType('$/cancelRequest');
          })(d || (d = {})),
          (t.NullLogger = Object.freeze({
            error: function () {},
            warn: function () {},
            info: function () {},
            log: function () {},
          })),
          (function (e) {
            (e[(e.Off = 0)] = 'Off'),
              (e[(e.Messages = 1)] = 'Messages'),
              (e[(e.Verbose = 2)] = 'Verbose');
          })((f = t.Trace || (t.Trace = {}))),
          (function (e) {
            (e.fromString = function (t) {
              switch ((t = t.toLowerCase())) {
                case 'off':
                  return e.Off;
                case 'messages':
                  return e.Messages;
                case 'verbose':
                  return e.Verbose;
                default:
                  return e.Off;
              }
            }),
              (e.toString = function (t) {
                switch (t) {
                  case e.Off:
                    return 'off';
                  case e.Messages:
                    return 'messages';
                  case e.Verbose:
                    return 'verbose';
                  default:
                    return 'off';
                }
              });
          })((f = t.Trace || (t.Trace = {}))),
          (function (e) {
            e.type = new s.NotificationType('$/setTraceNotification');
          })((p = t.SetTraceNotification || (t.SetTraceNotification = {}))),
          (function (e) {
            e.type = new s.NotificationType('$/logTraceNotification');
          })((h = t.LogTraceNotification || (t.LogTraceNotification = {}))),
          (function (e) {
            (e[(e.Closed = 1)] = 'Closed'),
              (e[(e.Disposed = 2)] = 'Disposed'),
              (e[(e.AlreadyListening = 3)] = 'AlreadyListening');
          })((g = t.ConnectionErrors || (t.ConnectionErrors = {})));
        var v,
          y = (function (e) {
            function t(n, r) {
              var i = e.call(this, r) || this;
              return (i.code = n), Object.setPrototypeOf(i, t.prototype), i;
            }
            return r(t, e), t;
          })(Error);

        function O(t, n, r, i) {
          var a,
            u,
            O = 0,
            b = 0,
            w = 0,
            k = '2.0',
            R = void 0,
            x = Object.create(null),
            T = void 0,
            C = Object.create(null),
            _ = new m.LinkedMap(),
            E = Object.create(null),
            q = Object.create(null),
            P = f.Off,
            D = v.New,
            S = new c.Emitter(),
            N = new c.Emitter(),
            M = new c.Emitter(),
            $ = new c.Emitter();

          function I(e) {
            return 'req-' + e.toString();
          }

          function j(e, t) {
            var n;
            s.isRequestMessage(t)
              ? e.set(I(t.id), t)
              : s.isResponseMessage(t)
              ? e.set(
                  null === (n = t.id)
                    ? 'res-unknown-' + (++w).toString()
                    : 'res-' + n.toString(),
                  t
                )
              : e.set('not-' + (++b).toString(), t);
          }

          function W(e) {}

          function L() {
            return D === v.Listening;
          }

          function A() {
            return D === v.Closed;
          }

          function F() {
            return D === v.Disposed;
          }

          function Q() {
            (D !== v.New && D !== v.Listening) ||
              ((D = v.Closed), N.fire(void 0));
          }

          function V() {
            a ||
              0 === _.size ||
              (a = e(function () {
                (a = void 0),
                  (function () {
                    if (0 === _.size) return;
                    var e = _.shift();
                    try {
                      s.isRequestMessage(e)
                        ? (function (e) {
                            if (F()) return;

                            function t(t, r, i) {
                              var o = {
                                jsonrpc: k,
                                id: e.id,
                              };
                              t instanceof s.ResponseError
                                ? (o.error = t.toJson())
                                : (o.result = void 0 === t ? null : t),
                                J(o, r, i),
                                n.write(o);
                            }

                            function r(t, r, i) {
                              var o = {
                                jsonrpc: k,
                                id: e.id,
                                error: t.toJson(),
                              };
                              J(o, r, i), n.write(o);
                            }

                            function i(t, r, i) {
                              void 0 === t && (t = null);
                              var o = {
                                jsonrpc: k,
                                id: e.id,
                                result: t,
                              };
                              J(o, r, i), n.write(o);
                            }
                            !(function (e) {
                              if (P === f.Off || !u) return;
                              var t = void 0;
                              P === f.Verbose &&
                                e.params &&
                                (t =
                                  'Params: ' +
                                  JSON.stringify(e.params, null, 4) +
                                  '\n\n');
                              u.log(
                                "Received request '" +
                                  e.method +
                                  ' - (' +
                                  e.id +
                                  ")'.",
                                t
                              );
                            })(e);
                            var a,
                              c,
                              d = x[e.method];
                            d && ((a = d.type), (c = d.handler));
                            var p = Date.now();
                            if (c || R) {
                              var h = new l.CancellationTokenSource(),
                                g = String(e.id);
                              q[g] = h;
                              try {
                                var m = void 0,
                                  v = (m =
                                    void 0 === e.params ||
                                    (void 0 !== a && 0 === a.numberOfParams)
                                      ? c
                                        ? c(h.token)
                                        : R(e.method, h.token)
                                      : o.array(e.params) &&
                                        (void 0 === a || a.numberOfParams > 1)
                                      ? c
                                        ? c.apply(
                                            void 0,
                                            e.params.concat([h.token])
                                          )
                                        : R.apply(
                                            void 0,
                                            [e.method].concat(e.params, [
                                              h.token,
                                            ])
                                          )
                                      : c
                                      ? c(e.params, h.token)
                                      : R(e.method, e.params, h.token));
                                m
                                  ? v.then
                                    ? v.then(
                                        function (n) {
                                          delete q[g], t(n, e.method, p);
                                        },
                                        function (t) {
                                          delete q[g],
                                            t instanceof s.ResponseError
                                              ? r(t, e.method, p)
                                              : t && o.string(t.message)
                                              ? r(
                                                  new s.ResponseError(
                                                    s.ErrorCodes.InternalError,
                                                    'Request ' +
                                                      e.method +
                                                      ' failed with message: ' +
                                                      t.message
                                                  ),
                                                  e.method,
                                                  p
                                                )
                                              : r(
                                                  new s.ResponseError(
                                                    s.ErrorCodes.InternalError,
                                                    'Request ' +
                                                      e.method +
                                                      ' failed unexpectedly without providing any details.'
                                                  ),
                                                  e.method,
                                                  p
                                                );
                                        }
                                      )
                                    : (delete q[g], t(m, e.method, p))
                                  : (delete q[g], i(m, e.method, p));
                              } catch (y) {
                                delete q[g],
                                  y instanceof s.ResponseError
                                    ? t(y, e.method, p)
                                    : y && o.string(y.message)
                                    ? r(
                                        new s.ResponseError(
                                          s.ErrorCodes.InternalError,
                                          'Request ' +
                                            e.method +
                                            ' failed with message: ' +
                                            y.message
                                        ),
                                        e.method,
                                        p
                                      )
                                    : r(
                                        new s.ResponseError(
                                          s.ErrorCodes.InternalError,
                                          'Request ' +
                                            e.method +
                                            ' failed unexpectedly without providing any details.'
                                        ),
                                        e.method,
                                        p
                                      );
                              }
                            } else
                              r(
                                new s.ResponseError(
                                  s.ErrorCodes.MethodNotFound,
                                  'Unhandled method ' + e.method
                                ),
                                e.method,
                                p
                              );
                          })(e)
                        : s.isNotificationMessage(e)
                        ? (function (e) {
                            if (F()) return;
                            var t,
                              n = void 0;
                            if (e.method === d.type.method)
                              t = function (e) {
                                var t = e.id,
                                  n = q[String(t)];
                                n && n.cancel();
                              };
                            else {
                              var i = C[e.method];
                              i && ((t = i.handler), (n = i.type));
                            }
                            if (t || T)
                              try {
                                !(function (e) {
                                  if (
                                    P === f.Off ||
                                    !u ||
                                    e.method === h.type.method
                                  )
                                    return;
                                  var t = void 0;
                                  P === f.Verbose &&
                                    (t = e.params
                                      ? 'Params: ' +
                                        JSON.stringify(e.params, null, 4) +
                                        '\n\n'
                                      : 'No parameters provided.\n\n');
                                  u.log(
                                    "Received notification '" + e.method + "'.",
                                    t
                                  );
                                })(e),
                                  void 0 === e.params ||
                                  (void 0 !== n && 0 === n.numberOfParams)
                                    ? t
                                      ? t()
                                      : T(e.method)
                                    : o.array(e.params) &&
                                      (void 0 === n || n.numberOfParams > 1)
                                    ? t
                                      ? t.apply(void 0, e.params)
                                      : T.apply(
                                          void 0,
                                          [e.method].concat(e.params)
                                        )
                                    : t
                                    ? t(e.params)
                                    : T(e.method, e.params);
                              } catch (s) {
                                s.message
                                  ? r.error(
                                      "Notification handler '" +
                                        e.method +
                                        "' failed with message: " +
                                        s.message
                                    )
                                  : r.error(
                                      "Notification handler '" +
                                        e.method +
                                        "' failed unexpectedly."
                                    );
                              }
                            else M.fire(e);
                          })(e)
                        : s.isResponseMessage(e)
                        ? (function (e) {
                            if (F()) return;
                            if (null === e.id)
                              e.error
                                ? r.error(
                                    'Received response message without id: Error is: \n' +
                                      JSON.stringify(e.error, void 0, 4)
                                  )
                                : r.error(
                                    'Received response message without id. No further error information provided.'
                                  );
                            else {
                              var t = String(e.id),
                                n = E[t];
                              if (
                                ((function (e, t) {
                                  if (P === f.Off || !u) return;
                                  var n = void 0;
                                  P === f.Verbose &&
                                    (e.error && e.error.data
                                      ? (n =
                                          'Error data: ' +
                                          JSON.stringify(
                                            e.error.data,
                                            null,
                                            4
                                          ) +
                                          '\n\n')
                                      : e.result
                                      ? (n =
                                          'Result: ' +
                                          JSON.stringify(e.result, null, 4) +
                                          '\n\n')
                                      : void 0 === e.error &&
                                        (n = 'No result returned.\n\n'));
                                  if (t) {
                                    var r = e.error
                                      ? ' Request failed: ' +
                                        e.error.message +
                                        ' (' +
                                        e.error.code +
                                        ').'
                                      : '';
                                    u.log(
                                      "Received response '" +
                                        t.method +
                                        ' - (' +
                                        e.id +
                                        ")' in " +
                                        (Date.now() - t.timerStart) +
                                        'ms.' +
                                        r,
                                      n
                                    );
                                  } else
                                    u.log(
                                      'Received response ' +
                                        e.id +
                                        ' without active response promise.',
                                      n
                                    );
                                })(e, n),
                                n)
                              ) {
                                delete E[t];
                                try {
                                  if (e.error) {
                                    var i = e.error;
                                    n.reject(
                                      new s.ResponseError(
                                        i.code,
                                        i.message,
                                        i.data
                                      )
                                    );
                                  } else {
                                    if (void 0 === e.result)
                                      throw new Error('Should never happen.');
                                    n.resolve(e.result);
                                  }
                                } catch (i) {
                                  i.message
                                    ? r.error(
                                        "Response handler '" +
                                          n.method +
                                          "' failed with message: " +
                                          i.message
                                      )
                                    : r.error(
                                        "Response handler '" +
                                          n.method +
                                          "' failed unexpectedly."
                                      );
                                }
                              }
                            }
                          })(e)
                        : (function (e) {
                            if (!e)
                              return void r.error('Received empty message.');
                            r.error(
                              'Received message which is neither a response nor a notification message:\n' +
                                JSON.stringify(e, null, 4)
                            );
                            var t = e;
                            if (o.string(t.id) || o.number(t.id)) {
                              var n = String(t.id),
                                i = E[n];
                              i &&
                                i.reject(
                                  new Error(
                                    'The received response has neither a result nor an error property.'
                                  )
                                );
                            }
                          })(e);
                    } finally {
                      V();
                    }
                  })();
              }));
          }
          t.onClose(Q),
            t.onError(function (e) {
              S.fire([e, void 0, void 0]);
            }),
            n.onClose(Q),
            n.onError(function (e) {
              S.fire(e);
            });
          var U = function (e) {
            try {
              if (s.isNotificationMessage(e) && e.method === d.type.method) {
                var t = I(e.params.id),
                  r = _.get(t);
                if (s.isRequestMessage(r)) {
                  var o =
                    i && i.cancelUndispatched
                      ? i.cancelUndispatched(r, W)
                      : void 0;
                  if (o && (void 0 !== o.error || void 0 !== o.result))
                    return (
                      _.delete(t),
                      (o.id = r.id),
                      J(o, e.method, Date.now()),
                      void n.write(o)
                    );
                }
              }
              j(_, e);
            } finally {
              V();
            }
          };

          function X(e) {
            if (P !== f.Off && u) {
              var t = void 0;
              P === f.Verbose &&
                e.params &&
                (t = 'Params: ' + JSON.stringify(e.params, null, 4) + '\n\n'),
                u.log(
                  "Sending request '" + e.method + ' - (' + e.id + ")'.",
                  t
                );
            }
          }

          function z(e) {
            if (P !== f.Off && u) {
              var t = void 0;
              P === f.Verbose &&
                (t = e.params
                  ? 'Params: ' + JSON.stringify(e.params, null, 4) + '\n\n'
                  : 'No parameters provided.\n\n'),
                u.log("Sending notification '" + e.method + "'.", t);
            }
          }

          function J(e, t, n) {
            if (P !== f.Off && u) {
              var r = void 0;
              P === f.Verbose &&
                (e.error && e.error.data
                  ? (r =
                      'Error data: ' +
                      JSON.stringify(e.error.data, null, 4) +
                      '\n\n')
                  : e.result
                  ? (r =
                      'Result: ' + JSON.stringify(e.result, null, 4) + '\n\n')
                  : void 0 === e.error && (r = 'No result returned.\n\n')),
                u.log(
                  "Sending response '" +
                    t +
                    ' - (' +
                    e.id +
                    ")'. Processing request took " +
                    (Date.now() - n) +
                    'ms',
                  r
                );
            }
          }

          function Z() {
            if (A()) throw new y(g.Closed, 'Connection is closed.');
            if (F()) throw new y(g.Disposed, 'Connection is disposed.');
          }

          function G() {
            if (!L()) throw new Error('Call listen() first.');
          }

          function Y(e) {
            return void 0 === e ? null : e;
          }

          function K(e, t) {
            var n,
              r = e.numberOfParams;
            switch (r) {
              case 0:
                n = null;
                break;
              case 1:
                n = Y(t[0]);
                break;
              default:
                n = [];
                for (var i = 0; i < t.length && i < r; i++) n.push(Y(t[i]));
                if (t.length < r) for (i = t.length; i < r; i++) n.push(null);
            }
            return n;
          }
          var H = {
            sendNotification: function (e) {
              for (var t, r, i = [], s = 1; s < arguments.length; s++)
                i[s - 1] = arguments[s];
              if ((Z(), o.string(e)))
                switch (((t = e), i.length)) {
                  case 0:
                    r = null;
                    break;
                  case 1:
                    r = i[0];
                    break;
                  default:
                    r = i;
                }
              else (t = e.method), (r = K(e, i));
              var a = {
                jsonrpc: k,
                method: t,
                params: r,
              };
              z(a), n.write(a);
            },
            onNotification: function (e, t) {
              Z(),
                o.func(e)
                  ? (T = e)
                  : t &&
                    (o.string(e)
                      ? (C[e] = {
                          type: void 0,
                          handler: t,
                        })
                      : (C[e.method] = {
                          type: e,
                          handler: t,
                        }));
            },
            sendRequest: function (e) {
              for (var t, r, i = [], a = 1; a < arguments.length; a++)
                i[a - 1] = arguments[a];
              Z(), G();
              var u = void 0;
              if (o.string(e))
                switch (((t = e), i.length)) {
                  case 0:
                    r = null;
                    break;
                  case 1:
                    l.CancellationToken.is(i[0])
                      ? ((r = null), (u = i[0]))
                      : (r = Y(i[0]));
                    break;
                  default:
                    var c = i.length - 1;
                    l.CancellationToken.is(i[c])
                      ? ((u = i[c]),
                        (r =
                          2 === i.length
                            ? Y(i[0])
                            : i.slice(0, c).map(function (e) {
                                return Y(e);
                              })))
                      : (r = i.map(function (e) {
                          return Y(e);
                        }));
                }
              else {
                (t = e.method), (r = K(e, i));
                var f = e.numberOfParams;
                u = l.CancellationToken.is(i[f]) ? i[f] : void 0;
              }
              var p = O++,
                h = new Promise(function (e, i) {
                  var o = {
                      jsonrpc: k,
                      id: p,
                      method: t,
                      params: r,
                    },
                    a = {
                      method: t,
                      timerStart: Date.now(),
                      resolve: e,
                      reject: i,
                    };
                  X(o);
                  try {
                    n.write(o);
                  } catch (u) {
                    a.reject(
                      new s.ResponseError(
                        s.ErrorCodes.MessageWriteError,
                        u.message ? u.message : 'Unknown reason'
                      )
                    ),
                      (a = null);
                  }
                  a && (E[String(p)] = a);
                });
              return (
                u &&
                  u.onCancellationRequested(function () {
                    H.sendNotification(d.type, {
                      id: p,
                    });
                  }),
                h
              );
            },
            onRequest: function (e, t) {
              Z(),
                o.func(e)
                  ? (R = e)
                  : t &&
                    (o.string(e)
                      ? (x[e] = {
                          type: void 0,
                          handler: t,
                        })
                      : (x[e.method] = {
                          type: e,
                          handler: t,
                        }));
            },
            trace: function (e, t, n) {
              void 0 === n && (n = !1),
                (u = (P = e) === f.Off ? void 0 : t),
                !n ||
                  A() ||
                  F() ||
                  H.sendNotification(p.type, {
                    value: f.toString(e),
                  });
            },
            onError: S.event,
            onClose: N.event,
            onUnhandledNotification: M.event,
            onDispose: $.event,
            dispose: function () {
              if (!F()) {
                (D = v.Disposed), $.fire(void 0);
                var e = new Error('Connection got disposed.');
                Object.keys(E).forEach(function (t) {
                  E[t].reject(e);
                }),
                  (E = Object.create(null)),
                  (q = Object.create(null)),
                  (_ = new m.LinkedMap()),
                  o.func(n.dispose) && n.dispose(),
                  o.func(t.dispose) && t.dispose();
              }
            },
            listen: function () {
              Z(),
                (function () {
                  if (L())
                    throw new y(
                      g.AlreadyListening,
                      'Connection is already listening'
                    );
                })(),
                (D = v.Listening),
                t.listen(U);
            },
            inspect: function () {
              console.log('inspect');
            },
          };
          return (
            H.onNotification(h.type, function (e) {
              P !== f.Off &&
                u &&
                u.log(e.message, P === f.Verbose ? e.verbose : void 0);
            }),
            H
          );
        }
        (t.ConnectionError = y),
          (function (e) {
            e.is = function (e) {
              var t = e;
              return t && o.func(t.cancelUndispatched);
            };
          })(t.ConnectionStrategy || (t.ConnectionStrategy = {})),
          (function (e) {
            (e[(e.New = 1)] = 'New'),
              (e[(e.Listening = 2)] = 'Listening'),
              (e[(e.Closed = 3)] = 'Closed'),
              (e[(e.Disposed = 4)] = 'Disposed');
          })(v || (v = {})),
          (t.createMessageConnection = function (e, n, r, i) {
            var o;
            return (
              r || (r = t.NullLogger),
              O(
                void 0 !== (o = e).listen && void 0 === o.read
                  ? e
                  : new a.StreamMessageReader(e),
                (function (e) {
                  return void 0 !== e.write && void 0 === e.end;
                })(n)
                  ? n
                  : new u.StreamMessageWriter(n),
                r,
                i
              )
            );
          });
      }.call(this, n('CfyG').setImmediate));
    },
    CcFB: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('MOv1');
      !(function (e) {
        e.type = new r.RequestType('textDocument/implementation');
      })(t.ImplementationRequest || (t.ImplementationRequest = {}));
    },
    DFRf: function (e, t, n) {
      'use strict';
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(e) {
                try {
                  u(r.next(e));
                } catch (t) {
                  o(t);
                }
              }

              function a(e) {
                try {
                  u(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }

              function u(e) {
                e.done
                  ? i(e.value)
                  : new n(function (t) {
                      t(e.value);
                    }).then(s, a);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: a(0),
                throw: a(1),
                return: a(2),
              }),
              'function' === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );

            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return (
                            s.label++,
                            {
                              value: o[1],
                              done: !1,
                            }
                          );
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = t.call(e, s);
                    } catch (a) {
                      (o = [6, a]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0,
                  };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = n('hde3'),
        s = n('oL6p'),
        a = n('Gz0x');
      t.createVSCodeApi = function (e) {
        var t = this,
          n = function () {
            throw new Error('unsupported');
          },
          u = o.default,
          c = function (e, t) {
            (this.label = e), (this.kind = t);
          },
          l = (function () {
            function e(e, t) {
              (this.range = e), (this.command = t);
            }
            return (
              Object.defineProperty(e.prototype, 'isResolved', {
                get: function () {
                  return !!this.command;
                },
                enumerable: !0,
                configurable: !0,
              }),
              e
            );
          })(),
          d = function (e, t) {
            (this.range = e), (this.target = t);
          },
          f = (function () {
            function e(e) {
              (this.value = e), (this.append = n), (this.contains = n);
            }
            return (
              (e.Empty = new e()),
              (e.QuickFix = new e('quickfix')),
              (e.Refactor = new e('refactor')),
              (e.RefactorExtract = new e('refactor.extract')),
              (e.RefactorInline = new e('refactor.inline')),
              (e.RefactorRewrite = new e('refactor.rewrite')),
              (e.Source = new e('source')),
              (e.SourceOrganizeImports = new e('source.organizeImports')),
              e
            );
          })(),
          p = {
            createFileSystemWatcher: function (t, n, r, i) {
              var o = e();
              if ('string' !== typeof t) throw new Error('unsupported');
              if (o.workspace.createFileSystemWatcher) {
                var s = o.workspace.createFileSystemWatcher(t, n, r, i);
                return Object.assign(s, {
                  ignoreCreateEvents: !!n,
                  ignoreChangeEvents: !!r,
                  ignoreDeleteEvents: !!i,
                });
              }
              return {
                ignoreCreateEvents: !!n,
                ignoreChangeEvents: !!r,
                ignoreDeleteEvents: !!i,
                onDidCreate: a.Event.None,
                onDidChange: a.Event.None,
                onDidDelete: a.Event.None,
                dispose: function () {},
              };
            },
            applyEdit: function (n) {
              return r(t, void 0, void 0, function () {
                var t;
                return i(this, function (r) {
                  if (((t = e()), a.WorkspaceEdit.is(n)))
                    return [2, t.workspace.applyEdit(n)];
                  throw new Error('unsupported');
                });
              });
            },
            getConfiguration: function (t, r) {
              var i = e().workspace,
                o = i.configurations
                  ? i.configurations.getConfiguration(
                      t,
                      r ? r.toString() : void 0
                    )
                  : void 0,
                s = {
                  get: function (e, t) {
                    return o ? o.get(e, t) : t;
                  },
                  has: function (e) {
                    return !!o && o.has(e);
                  },
                  inspect: n,
                  update: n,
                };
              return Object.assign(s, {
                toJSON: function () {
                  return o ? o.toJSON() : void 0;
                },
              });
            },
            get onDidChangeConfiguration() {
              var t = e();
              return t.workspace.configurations
                ? t.workspace.configurations.onDidChangeConfiguration
                : a.Event.None;
            },
            get workspaceFolders() {
              var t = e().workspace.rootUri;
              if (t) {
                var n = u.parse(t);
                return [
                  {
                    uri: n,
                    index: 0,
                    name: n.toString(),
                  },
                ];
              }
            },
            get textDocuments() {
              return e().workspace.textDocuments;
            },
            get onDidOpenTextDocument() {
              return e().workspace.onDidOpenTextDocument;
            },
            get onDidCloseTextDocument() {
              return e().workspace.onDidCloseTextDocument;
            },
            get onDidChangeTextDocument() {
              var t = e();
              return function (e, n, r) {
                return t.workspace.onDidChangeTextDocument(
                  function (t) {
                    var r = t.textDocument,
                      i = t.contentChanges;
                    e.bind(n)({
                      document: r,
                      contentChanges: i,
                    });
                  },
                  void 0,
                  r
                );
              };
            },
            get onWillSaveTextDocument() {
              var t = e().workspace.onWillSaveTextDocument;
              return t
                ? function (e, n, r) {
                    return t(
                      function (t) {
                        var r = t.textDocument,
                          i = t.reason,
                          o = t.waitUntil;
                        e.bind(n)({
                          document: r,
                          reason: i,
                          waitUntil: function (e) {
                            o && o(e);
                          },
                        });
                      },
                      void 0,
                      r
                    );
                  }
                : a.Event.None;
            },
            get onDidSaveTextDocument() {
              return e().workspace.onDidSaveTextDocument || a.Event.None;
            },
            onDidChangeWorkspaceFolders: a.Event.None,
            getWorkspaceFolder: n,
            asRelativePath: n,
            updateWorkspaceFolders: n,
            findFiles: n,
            saveAll: n,
            openTextDocument: n,
            registerTextDocumentContentProvider: n,
            registerTaskProvider: n,
            registerFileSystemProvider: n,
            rootPath: void 0,
            name: void 0,
          },
          h = {
            match: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              if (!a.DocumentIdentifier.is(n))
                throw new Error('unexpected document: ' + JSON.stringify(n));
              return e().languages.match(t, n) ? 1 : 0;
            },
            createDiagnosticCollection: function (t) {
              var r = e(),
                i = r.languages.createDiagnosticCollection
                  ? r.languages.createDiagnosticCollection(t)
                  : void 0;
              return {
                name: t || 'default',
                set: function (e, t) {
                  i && (t ? i.set(e.toString(), t) : i.set(e.toString(), []));
                },
                dispose: function () {
                  i && i.dispose();
                },
                delete: n,
                clear: n,
                forEach: n,
                get: n,
                has: n,
              };
            },
            registerCompletionItemProvider: function (t, n) {
              for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var o = e().languages;
              if (!o.registerCompletionItemProvider)
                return s.Disposable.create(function () {});
              var u = n.resolveCompletionItem;
              return o.registerCompletionItemProvider.apply(
                o,
                [
                  t,
                  {
                    provideCompletionItems: function (e, t) {
                      var r = e.textDocument,
                        i = e.position,
                        o = e.context;
                      return n.provideCompletionItems(
                        r,
                        i,
                        t,
                        o || {
                          triggerKind: a.CompletionTriggerKind.Invoked,
                        }
                      );
                    },
                    resolveCompletionItem: u
                      ? function (e, t) {
                          return u(e, t);
                        }
                      : void 0,
                  },
                ].concat(r)
              );
            },
            registerCodeActionsProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerCodeActionsProvider
                ? r.registerCodeActionsProvider(t, {
                    provideCodeActions: function (e, t) {
                      var r = e.textDocument,
                        i = e.range,
                        o = e.context;
                      return n.provideCodeActions(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerCodeLensProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              if (!r.registerCodeLensProvider)
                return s.Disposable.create(function () {});
              var i = n.resolveCodeLens;
              return r.registerCodeLensProvider(t, {
                provideCodeLenses: function (e, t) {
                  var r = e.textDocument;
                  return n.provideCodeLenses(r, t);
                },
                resolveCodeLens: i
                  ? function (e, t) {
                      return i(e, t);
                    }
                  : void 0,
              });
            },
            registerDefinitionProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerDefinitionProvider
                ? r.registerDefinitionProvider(t, {
                    provideDefinition: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideDefinition(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerImplementationProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerImplementationProvider
                ? r.registerImplementationProvider(t, {
                    provideImplementation: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideImplementation(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerTypeDefinitionProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerTypeDefinitionProvider
                ? r.registerTypeDefinitionProvider(t, {
                    provideTypeDefinition: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideTypeDefinition(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerHoverProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerHoverProvider
                ? r.registerHoverProvider(t, {
                    provideHover: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideHover(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentHighlightProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentHighlightProvider
                ? r.registerDocumentHighlightProvider(t, {
                    provideDocumentHighlights: function (e, t) {
                      var r = e.textDocument,
                        i = e.position;
                      return n.provideDocumentHighlights(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentSymbolProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentSymbolProvider
                ? r.registerDocumentSymbolProvider(t, {
                    provideDocumentSymbols: function (e, t) {
                      var r = e.textDocument;
                      return n.provideDocumentSymbols(r, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerWorkspaceSymbolProvider: function (t) {
              var n = e().languages;
              return n.registerWorkspaceSymbolProvider
                ? n.registerWorkspaceSymbolProvider({
                    provideWorkspaceSymbols: function (e, n) {
                      var r = e.query;
                      return t.provideWorkspaceSymbols(r, n);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerReferenceProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerReferenceProvider
                ? r.registerReferenceProvider(t, {
                    provideReferences: function (e, t) {
                      var r = e.textDocument,
                        i = e.position,
                        o = e.context;
                      return n.provideReferences(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerRenameProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerRenameProvider
                ? r.registerRenameProvider(t, {
                    provideRenameEdits: function (e, t) {
                      var r = e.textDocument,
                        i = e.position,
                        o = e.newName;
                      return n.provideRenameEdits(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentFormattingEditProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentFormattingEditProvider
                ? r.registerDocumentFormattingEditProvider(t, {
                    provideDocumentFormattingEdits: function (e, t) {
                      var r = e.textDocument,
                        i = e.options;
                      return n.provideDocumentFormattingEdits(r, i, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerDocumentRangeFormattingEditProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerDocumentRangeFormattingEditProvider
                ? r.registerDocumentRangeFormattingEditProvider(t, {
                    provideDocumentRangeFormattingEdits: function (e, t) {
                      var r = e.textDocument,
                        i = e.range,
                        o = e.options;
                      return n.provideDocumentRangeFormattingEdits(r, i, o, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerOnTypeFormattingEditProvider: function (t, n, r) {
              for (var i = [], o = 3; o < arguments.length; o++)
                i[o - 3] = arguments[o];
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var u = e().languages;
              return u.registerOnTypeFormattingEditProvider
                ? u.registerOnTypeFormattingEditProvider.apply(
                    u,
                    [
                      t,
                      {
                        provideOnTypeFormattingEdits: function (e, t) {
                          var r = e.textDocument,
                            i = e.position,
                            o = e.ch,
                            s = e.options;
                          return n.provideOnTypeFormattingEdits(r, i, o, s, t);
                        },
                      },
                      r,
                    ].concat(i)
                  )
                : s.Disposable.create(function () {});
            },
            registerSignatureHelpProvider: function (t, n) {
              for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var o = e().languages;
              return o.registerSignatureHelpProvider
                ? o.registerSignatureHelpProvider.apply(
                    o,
                    [
                      t,
                      {
                        provideSignatureHelp: function (e, t) {
                          var r = e.textDocument,
                            i = e.position;
                          return n.provideSignatureHelp(r, i, t);
                        },
                      },
                    ].concat(r)
                  )
                : s.Disposable.create(function () {});
            },
            registerDocumentLinkProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              if (!r.registerDocumentLinkProvider)
                return s.Disposable.create(function () {});
              var i = n.resolveDocumentLink;
              return r.registerDocumentLinkProvider(t, {
                provideDocumentLinks: function (e, t) {
                  var r = e.textDocument;
                  return n.provideDocumentLinks(r, t);
                },
                resolveDocumentLink: i
                  ? function (e, t) {
                      return i(e, t);
                    }
                  : void 0,
              });
            },
            registerColorProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerColorProvider
                ? r.registerColorProvider(t, {
                    provideDocumentColors: function (e, t) {
                      var r = e.textDocument;
                      return n.provideDocumentColors(r, t);
                    },
                    provideColorPresentations: function (e, t) {
                      var r = e.textDocument,
                        i = e.color,
                        o = e.range;
                      return n.provideColorPresentations(
                        i,
                        {
                          document: r,
                          range: o,
                        },
                        t
                      );
                    },
                  })
                : s.Disposable.create(function () {});
            },
            registerFoldingRangeProvider: function (t, n) {
              if (!a.isDocumentSelector(t))
                throw new Error('unexpected selector: ' + JSON.stringify(t));
              var r = e().languages;
              return r.registerFoldingRangeProvider
                ? r.registerFoldingRangeProvider(t, {
                    provideFoldingRanges: function (e, t) {
                      var r = e.textDocument;
                      return n.provideFoldingRanges(r, {}, t);
                    },
                  })
                : s.Disposable.create(function () {});
            },
            getLanguages: n,
            getDiagnostics: n,
            setLanguageConfiguration: n,
            onDidChangeDiagnostics: n,
          };

        function g(t, n, r) {
          if ('string' !== typeof n)
            throw new Error('unexpected message: ' + JSON.stringify(n));
          var i = n;
          if (void 0 !== r && !Array.isArray(r))
            throw new Error('unexpected actions: ' + JSON.stringify(r));
          var o = r || [],
            s = e().window;
          return s
            ? s.showMessage.apply(s, [t, i].concat(o))
            : Promise.resolve(void 0);
        }
        var m = {
            showInformationMessage: g.bind(void 0, a.MessageType.Info),
            showWarningMessage: g.bind(void 0, a.MessageType.Warning),
            showErrorMessage: g.bind(void 0, a.MessageType.Error),
            createOutputChannel: function (t) {
              var r = e().window,
                i = r ? r.createOutputChannel : void 0,
                o = i ? i.bind(r)(t) : void 0;
              return {
                name: t,
                append: o.append.bind(o),
                appendLine: o.appendLine.bind(o),
                clear: n,
                show: o.show.bind(o),
                hide: n,
                dispose: o.dispose.bind(o),
              };
            },
            showTextDocument: n,
            createTextEditorDecorationType: n,
            showQuickPick: n,
            showWorkspaceFolderPick: n,
            showOpenDialog: n,
            showSaveDialog: n,
            showInputBox: n,
            createWebviewPanel: n,
            setStatusBarMessage: n,
            withScmProgress: n,
            withProgress: n,
            createStatusBarItem: n,
            createTerminal: n,
            registerTreeDataProvider: n,
            createTreeView: n,
            registerWebviewPanelSerializer: n,
            get activeTextEditor() {
              return n();
            },
            get visibleTextEditors() {
              return n();
            },
            onDidChangeActiveTextEditor: n,
            onDidChangeVisibleTextEditors: n,
            onDidChangeTextEditorSelection: n,
            onDidChangeTextEditorVisibleRanges: n,
            onDidChangeTextEditorOptions: n,
            onDidChangeTextEditorViewColumn: n,
            onDidCloseTerminal: n,
            get state() {
              return n();
            },
            onDidChangeWindowState: n,
          },
          v = {
            registerCommand: function (t, n, r) {
              var i = e().commands;
              return i
                ? i.registerCommand(t, n, r)
                : s.Disposable.create(function () {});
            },
            registerTextEditorCommand: n,
            executeCommand: n,
            getCommands: n,
          },
          y = (function () {
            function e(e) {
              this.callOnDispose = e;
            }
            return (
              (e.prototype.dispose = function () {
                this.callOnDispose();
              }),
              e
            );
          })();
        return {
          workspace: p,
          languages: h,
          window: m,
          commands: v,
          Uri: u,
          CompletionItem: c,
          CodeLens: l,
          DocumentLink: d,
          CodeActionKind: f,
          Disposable: y,
        };
      };
    },
    Ff8q: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r,
        i = n('Z5Ki'),
        o = n('1vg8');
      !(function (e) {
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: i.Event.None,
        })),
          (e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: i.Event.None,
          })),
          (e.is = function (t) {
            var n = t;
            return (
              n &&
              (n === e.None ||
                n === e.Cancelled ||
                (o.boolean(n.isCancellationRequested) &&
                  !!n.onCancellationRequested))
            );
          });
      })((r = t.CancellationToken || (t.CancellationToken = {})));
      var s = Object.freeze(function (e, t) {
          var n = setTimeout(e.bind(t), 0);
          return {
            dispose: function () {
              clearTimeout(n);
            },
          };
        }),
        a = (function () {
          function e() {
            this._isCancelled = !1;
          }
          return (
            (e.prototype.cancel = function () {
              this._isCancelled ||
                ((this._isCancelled = !0),
                this._emitter &&
                  (this._emitter.fire(void 0), (this._emitter = void 0)));
            }),
            Object.defineProperty(e.prototype, 'isCancellationRequested', {
              get: function () {
                return this._isCancelled;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'onCancellationRequested', {
              get: function () {
                return this._isCancelled
                  ? s
                  : (this._emitter || (this._emitter = new i.Emitter()),
                    this._emitter.event);
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        u = (function () {
          function e() {}
          return (
            Object.defineProperty(e.prototype, 'token', {
              get: function () {
                return this._token || (this._token = new a()), this._token;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.cancel = function () {
              this._token ? this._token.cancel() : (this._token = r.Cancelled);
            }),
            (e.prototype.dispose = function () {
              this.cancel();
            }),
            e
          );
        })();
      t.CancellationTokenSource = u;
    },
    Gkij: function (e, t, n) {
      'use strict';

      function r(e) {
        return 'string' === typeof e || e instanceof String;
      }

      function i(e) {
        return Array.isArray(e);
      }
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.boolean = function (e) {
          return !0 === e || !1 === e;
        }),
        (t.string = r),
        (t.number = function (e) {
          return 'number' === typeof e || e instanceof Number;
        }),
        (t.error = function (e) {
          return e instanceof Error;
        }),
        (t.func = function (e) {
          return 'function' === typeof e;
        }),
        (t.array = i),
        (t.stringArray = function (e) {
          return i(e) && e.every((e) => r(e));
        });
    },
    Gz0x: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('BOov'),
        i = n('C+6V');
      (t.Disposable = i.Disposable),
        (t.CancellationToken = i.CancellationToken),
        (t.Event = i.Event),
        (t.Emitter = i.Emitter),
        (function (e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        })(n('BOov')),
        (function (e) {
          var t = window,
            n = Symbol('Services');
          (e.get = function () {
            var e = t[n];
            if (!e)
              throw new Error(
                'Language Client services has not been installed'
              );
            return e;
          }),
            (e.install = function (e) {
              t[n] &&
                console.error(
                  new Error('Language Client services has been overriden')
                ),
                (t[n] = e);
            });
        })(t.Services || (t.Services = {})),
        (t.isDocumentSelector = function (e) {
          return (
            !(!e || !Array.isArray(e)) &&
            e.every(function (e) {
              return 'string' === typeof e || r.DocumentFilter.is(e);
            })
          );
        }),
        (function (e) {
          e.is = function (e) {
            return !!e && 'uri' in e && 'languageId' in e;
          };
        })(t.DocumentIdentifier || (t.DocumentIdentifier = {})),
        (function (e) {
          (e[(e.Global = 1)] = 'Global'),
            (e[(e.Workspace = 2)] = 'Workspace'),
            (e[(e.WorkspaceFolder = 3)] = 'WorkspaceFolder');
        })(t.ConfigurationTarget || (t.ConfigurationTarget = {}));
    },
    I0O9: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        const r = n('tpqs'),
          i = n('PENG'),
          o = n('HEbw'),
          s = n('RUQ2'),
          a = n('K4MX'),
          u = n('k5Vz');
        (t.generateRandomPipeName = function () {
          const t = o.randomBytes(21).toString('hex');
          return 'win32' === e.platform
            ? `\\\\.\\pipe\\vscode-jsonrpc-${t}-sock`
            : r.join(i.tmpdir(), `vscode-${t}.sock`);
        }),
          (t.createClientPipeTransport = function (e, t = 'utf-8') {
            let n,
              r = new Promise((e, t) => {
                n = e;
              });
            return new Promise((i, o) => {
              let c = s.createServer((e) => {
                c.close(),
                  n([
                    new a.SocketMessageReader(e, t),
                    new u.SocketMessageWriter(e, t),
                  ]);
              });
              c.on('error', o),
                c.listen(e, () => {
                  c.removeListener('error', o),
                    i({
                      onConnected: () => r,
                    });
                });
            });
          }),
          (t.createServerPipeTransport = function (e, t = 'utf-8') {
            const n = s.createConnection(e);
            return [
              new a.SocketMessageReader(n, t),
              new u.SocketMessageWriter(n, t),
            ];
          });
      }.call(this, n('8oxB')));
    },
    K4MX: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        const r = n('fIkx'),
          i = n('Gkij');
        let o = 8192,
          s = e.from('\r', 'ascii')[0],
          a = e.from('\n', 'ascii')[0];
        class u {
          constructor(t = 'utf8') {
            (this.encoding = t),
              (this.index = 0),
              (this.buffer = e.allocUnsafe(o));
          }
          append(t) {
            var n = t;
            if ('string' === typeof t) {
              var r = t,
                i = e.byteLength(r, this.encoding);
              (n = e.allocUnsafe(i)).write(r, 0, i, this.encoding);
            }
            if (this.buffer.length - this.index >= n.length)
              n.copy(this.buffer, this.index, 0, n.length);
            else {
              var s = (Math.ceil((this.index + n.length) / o) + 1) * o;
              0 === this.index
                ? ((this.buffer = e.allocUnsafe(s)),
                  n.copy(this.buffer, 0, 0, n.length))
                : (this.buffer = e.concat(
                    [this.buffer.slice(0, this.index), n],
                    s
                  ));
            }
            this.index += n.length;
          }
          tryReadHeaders() {
            let e,
              t = 0;
            for (
              ;
              t + 3 < this.index &&
              (this.buffer[t] !== s ||
                this.buffer[t + 1] !== a ||
                this.buffer[t + 2] !== s ||
                this.buffer[t + 3] !== a);

            )
              t++;
            if (t + 3 >= this.index) return e;
            (e = Object.create(null)),
              this.buffer
                .toString('ascii', 0, t)
                .split('\r\n')
                .forEach((t) => {
                  let n = t.indexOf(':');
                  if (-1 === n)
                    throw new Error(
                      'Message header must separate key and value using :'
                    );
                  let r = t.substr(0, n),
                    i = t.substr(n + 1).trim();
                  e[r] = i;
                });
            let n = t + 4;
            return (
              (this.buffer = this.buffer.slice(n)),
              (this.index = this.index - n),
              e
            );
          }
          tryReadContent(e) {
            if (this.index < e) return null;
            let t = this.buffer.toString(this.encoding, 0, e),
              n = e;
            return (
              this.buffer.copy(this.buffer, 0, n),
              (this.index = this.index - n),
              t
            );
          }
          get numberOfBytes() {
            return this.index;
          }
        }
        !(function (e) {
          e.is = function (e) {
            let t = e;
            return (
              t &&
              i.func(t.listen) &&
              i.func(t.dispose) &&
              i.func(t.onError) &&
              i.func(t.onClose) &&
              i.func(t.onPartialMessage)
            );
          };
        })(t.MessageReader || (t.MessageReader = {}));
        class c {
          constructor() {
            (this.errorEmitter = new r.Emitter()),
              (this.closeEmitter = new r.Emitter()),
              (this.partialMessageEmitter = new r.Emitter());
          }
          dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose();
          }
          get onError() {
            return this.errorEmitter.event;
          }
          fireError(e) {
            this.errorEmitter.fire(this.asError(e));
          }
          get onClose() {
            return this.closeEmitter.event;
          }
          fireClose() {
            this.closeEmitter.fire(void 0);
          }
          get onPartialMessage() {
            return this.partialMessageEmitter.event;
          }
          firePartialMessage(e) {
            this.partialMessageEmitter.fire(e);
          }
          asError(e) {
            return e instanceof Error
              ? e
              : new Error(
                  `Reader recevied error. Reason: ${
                    i.string(e.message) ? e.message : 'unknown'
                  }`
                );
          }
        }
        t.AbstractMessageReader = c;
        class l extends c {
          constructor(e, t = 'utf8') {
            super(),
              (this.readable = e),
              (this.buffer = new u(t)),
              (this._partialMessageTimeout = 1e4);
          }
          set partialMessageTimeout(e) {
            this._partialMessageTimeout = e;
          }
          get partialMessageTimeout() {
            return this._partialMessageTimeout;
          }
          listen(e) {
            (this.nextMessageLength = -1),
              (this.messageToken = 0),
              (this.partialMessageTimer = void 0),
              (this.callback = e),
              this.readable.on('data', (e) => {
                this.onData(e);
              }),
              this.readable.on('error', (e) => this.fireError(e)),
              this.readable.on('close', () => this.fireClose());
          }
          onData(e) {
            for (this.buffer.append(e); ; ) {
              if (-1 === this.nextMessageLength) {
                let e = this.buffer.tryReadHeaders();
                if (!e) return;
                let t = e['Content-Length'];
                if (!t)
                  throw new Error(
                    'Header must provide a Content-Length property.'
                  );
                let n = parseInt(t);
                if (isNaN(n))
                  throw new Error('Content-Length value must be a number.');
                this.nextMessageLength = n;
              }
              var t = this.buffer.tryReadContent(this.nextMessageLength);
              if (null === t) return void this.setPartialMessageTimer();
              this.clearPartialMessageTimer(),
                (this.nextMessageLength = -1),
                this.messageToken++;
              var n = JSON.parse(t);
              this.callback(n);
            }
          }
          clearPartialMessageTimer() {
            this.partialMessageTimer &&
              (clearTimeout(this.partialMessageTimer),
              (this.partialMessageTimer = void 0));
          }
          setPartialMessageTimer() {
            this.clearPartialMessageTimer(),
              this._partialMessageTimeout <= 0 ||
                (this.partialMessageTimer = setTimeout(
                  (e, t) => {
                    (this.partialMessageTimer = void 0),
                      e === this.messageToken &&
                        (this.firePartialMessage({
                          messageToken: e,
                          waitingTime: t,
                        }),
                        this.setPartialMessageTimer());
                  },
                  this._partialMessageTimeout,
                  this.messageToken,
                  this._partialMessageTimeout
                ));
          }
        }
        t.StreamMessageReader = l;
        t.IPCMessageReader = class extends c {
          constructor(e) {
            super(), (this.process = e);
            let t = this.process;
            t.on('error', (e) => this.fireError(e)),
              t.on('close', () => this.fireClose());
          }
          listen(e) {
            this.process.on('message', e);
          }
        };
        t.SocketMessageReader = class extends l {
          constructor(e, t = 'utf-8') {
            super(e, t);
          }
        };
      }.call(this, n('HDXh').Buffer));
    },
    MOv1: function (e, t, n) {
      'use strict';
      (function (e) {
        function r(e) {
          for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
        }
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        const i = n('Gkij'),
          o = n('f7Fo');
        (t.RequestType = o.RequestType),
          (t.RequestType0 = o.RequestType0),
          (t.RequestType1 = o.RequestType1),
          (t.RequestType2 = o.RequestType2),
          (t.RequestType3 = o.RequestType3),
          (t.RequestType4 = o.RequestType4),
          (t.RequestType5 = o.RequestType5),
          (t.RequestType6 = o.RequestType6),
          (t.RequestType7 = o.RequestType7),
          (t.RequestType8 = o.RequestType8),
          (t.RequestType9 = o.RequestType9),
          (t.ResponseError = o.ResponseError),
          (t.ErrorCodes = o.ErrorCodes),
          (t.NotificationType = o.NotificationType),
          (t.NotificationType0 = o.NotificationType0),
          (t.NotificationType1 = o.NotificationType1),
          (t.NotificationType2 = o.NotificationType2),
          (t.NotificationType3 = o.NotificationType3),
          (t.NotificationType4 = o.NotificationType4),
          (t.NotificationType5 = o.NotificationType5),
          (t.NotificationType6 = o.NotificationType6),
          (t.NotificationType7 = o.NotificationType7),
          (t.NotificationType8 = o.NotificationType8),
          (t.NotificationType9 = o.NotificationType9);
        const s = n('K4MX');
        (t.MessageReader = s.MessageReader),
          (t.StreamMessageReader = s.StreamMessageReader),
          (t.IPCMessageReader = s.IPCMessageReader),
          (t.SocketMessageReader = s.SocketMessageReader);
        const a = n('k5Vz');
        (t.MessageWriter = a.MessageWriter),
          (t.StreamMessageWriter = a.StreamMessageWriter),
          (t.IPCMessageWriter = a.IPCMessageWriter),
          (t.SocketMessageWriter = a.SocketMessageWriter);
        const u = n('fIkx');
        (t.Disposable = u.Disposable),
          (t.Event = u.Event),
          (t.Emitter = u.Emitter);
        const c = n('BA4U');
        (t.CancellationTokenSource = c.CancellationTokenSource),
          (t.CancellationToken = c.CancellationToken);
        const l = n('wSv1');
        var d, f, p, h, g, m, v;
        r(n('I0O9')),
          r(n('uUC1')),
          (function (e) {
            e.type = new o.NotificationType('$/cancelRequest');
          })(d || (d = {})),
          (t.NullLogger = Object.freeze({
            error: () => {},
            warn: () => {},
            info: () => {},
            log: () => {},
          })),
          (function (e) {
            (e[(e.Off = 0)] = 'Off'),
              (e[(e.Messages = 1)] = 'Messages'),
              (e[(e.Verbose = 2)] = 'Verbose');
          })((f = t.Trace || (t.Trace = {}))),
          (function (e) {
            (e.fromString = function (t) {
              switch ((t = t.toLowerCase())) {
                case 'off':
                  return e.Off;
                case 'messages':
                  return e.Messages;
                case 'verbose':
                  return e.Verbose;
                default:
                  return e.Off;
              }
            }),
              (e.toString = function (t) {
                switch (t) {
                  case e.Off:
                    return 'off';
                  case e.Messages:
                    return 'messages';
                  case e.Verbose:
                    return 'verbose';
                  default:
                    return 'off';
                }
              });
          })((f = t.Trace || (t.Trace = {}))),
          (function (e) {
            (e.Text = 'text'), (e.JSON = 'json');
          })(t.TraceFormat || (t.TraceFormat = {})),
          (function (e) {
            e.fromString = function (t) {
              return 'json' === (t = t.toLowerCase()) ? e.JSON : e.Text;
            };
          })((p = t.TraceFormat || (t.TraceFormat = {}))),
          (function (e) {
            e.type = new o.NotificationType('$/setTraceNotification');
          })((h = t.SetTraceNotification || (t.SetTraceNotification = {}))),
          (function (e) {
            e.type = new o.NotificationType('$/logTraceNotification');
          })((g = t.LogTraceNotification || (t.LogTraceNotification = {}))),
          (function (e) {
            (e[(e.Closed = 1)] = 'Closed'),
              (e[(e.Disposed = 2)] = 'Disposed'),
              (e[(e.AlreadyListening = 3)] = 'AlreadyListening');
          })((m = t.ConnectionErrors || (t.ConnectionErrors = {})));
        class y extends Error {
          constructor(e, t) {
            super(t), (this.code = e), Object.setPrototypeOf(this, y.prototype);
          }
        }

        function O(t, n, r, s) {
          let a = 0,
            O = 0,
            b = 0;
          const w = '2.0';
          let k,
            R,
            x,
            T,
            C = Object.create(null),
            _ = Object.create(null),
            E = new l.LinkedMap(),
            q = Object.create(null),
            P = Object.create(null),
            D = f.Off,
            S = p.Text,
            N = v.New,
            M = new u.Emitter(),
            $ = new u.Emitter(),
            I = new u.Emitter(),
            j = new u.Emitter();

          function W(e) {
            return 'req-' + e.toString();
          }

          function L(e, t) {
            var n;
            o.isRequestMessage(t)
              ? e.set(W(t.id), t)
              : o.isResponseMessage(t)
              ? e.set(
                  null === (n = t.id)
                    ? 'res-unknown-' + (++b).toString()
                    : 'res-' + n.toString(),
                  t
                )
              : e.set('not-' + (++O).toString(), t);
          }

          function A(e) {}

          function F() {
            return N === v.Listening;
          }

          function Q() {
            return N === v.Closed;
          }

          function V() {
            return N === v.Disposed;
          }

          function U() {
            (N !== v.New && N !== v.Listening) ||
              ((N = v.Closed), $.fire(void 0));
          }

          function X() {
            x ||
              0 === E.size ||
              (x = e(() => {
                (x = void 0),
                  (function () {
                    if (0 === E.size) return;
                    let e = E.shift();
                    try {
                      o.isRequestMessage(e)
                        ? (function (e) {
                            if (V()) return;

                            function t(t, r, i) {
                              let s = {
                                jsonrpc: w,
                                id: e.id,
                              };
                              t instanceof o.ResponseError
                                ? (s.error = t.toJson())
                                : (s.result = void 0 === t ? null : t),
                                J(s, r, i),
                                n.write(s);
                            }

                            function r(t, r, i) {
                              let o = {
                                jsonrpc: w,
                                id: e.id,
                                error: t.toJson(),
                              };
                              J(o, r, i), n.write(o);
                            }

                            function s(t, r, i) {
                              void 0 === t && (t = null);
                              let o = {
                                jsonrpc: w,
                                id: e.id,
                                result: t,
                              };
                              J(o, r, i), n.write(o);
                            }
                            !(function (e) {
                              if (D === f.Off || !T) return;
                              if (S === p.Text) {
                                let t;
                                D === f.Verbose &&
                                  e.params &&
                                  (t = `Params: ${JSON.stringify(
                                    e.params,
                                    null,
                                    4
                                  )}\n\n`),
                                  T.log(
                                    `Received request '${e.method} - (${e.id})'.`,
                                    t
                                  );
                              } else Z('receive-request', e);
                            })(e);
                            let a,
                              u,
                              l = C[e.method];
                            l && ((a = l.type), (u = l.handler));
                            let d = Date.now();
                            if (u || k) {
                              let n = new c.CancellationTokenSource(),
                                l = String(e.id);
                              P[l] = n;
                              try {
                                let c;
                                c =
                                  void 0 === e.params ||
                                  (void 0 !== a && 0 === a.numberOfParams)
                                    ? u
                                      ? u(n.token)
                                      : k(e.method, n.token)
                                    : i.array(e.params) &&
                                      (void 0 === a || a.numberOfParams > 1)
                                    ? u
                                      ? u(...e.params, n.token)
                                      : k(e.method, ...e.params, n.token)
                                    : u
                                    ? u(e.params, n.token)
                                    : k(e.method, e.params, n.token);
                                let f = c;
                                c
                                  ? f.then
                                    ? f.then(
                                        (n) => {
                                          delete P[l], t(n, e.method, d);
                                        },
                                        (t) => {
                                          delete P[l],
                                            t instanceof o.ResponseError
                                              ? r(t, e.method, d)
                                              : t && i.string(t.message)
                                              ? r(
                                                  new o.ResponseError(
                                                    o.ErrorCodes.InternalError,
                                                    `Request ${e.method} failed with message: ${t.message}`
                                                  ),
                                                  e.method,
                                                  d
                                                )
                                              : r(
                                                  new o.ResponseError(
                                                    o.ErrorCodes.InternalError,
                                                    `Request ${e.method} failed unexpectedly without providing any details.`
                                                  ),
                                                  e.method,
                                                  d
                                                );
                                        }
                                      )
                                    : (delete P[l], t(c, e.method, d))
                                  : (delete P[l], s(c, e.method, d));
                              } catch (h) {
                                delete P[l],
                                  h instanceof o.ResponseError
                                    ? t(h, e.method, d)
                                    : h && i.string(h.message)
                                    ? r(
                                        new o.ResponseError(
                                          o.ErrorCodes.InternalError,
                                          `Request ${e.method} failed with message: ${h.message}`
                                        ),
                                        e.method,
                                        d
                                      )
                                    : r(
                                        new o.ResponseError(
                                          o.ErrorCodes.InternalError,
                                          `Request ${e.method} failed unexpectedly without providing any details.`
                                        ),
                                        e.method,
                                        d
                                      );
                              }
                            } else
                              r(
                                new o.ResponseError(
                                  o.ErrorCodes.MethodNotFound,
                                  `Unhandled method ${e.method}`
                                ),
                                e.method,
                                d
                              );
                          })(e)
                        : o.isNotificationMessage(e)
                        ? (function (e) {
                            if (V()) return;
                            let t, n;
                            if (e.method === d.type.method)
                              n = (e) => {
                                let t = e.id,
                                  n = P[String(t)];
                                n && n.cancel();
                              };
                            else {
                              let r = _[e.method];
                              r && ((n = r.handler), (t = r.type));
                            }
                            if (n || R)
                              try {
                                !(function (e) {
                                  if (
                                    D === f.Off ||
                                    !T ||
                                    e.method === g.type.method
                                  )
                                    return;
                                  if (S === p.Text) {
                                    let t;
                                    D === f.Verbose &&
                                      (t = e.params
                                        ? `Params: ${JSON.stringify(
                                            e.params,
                                            null,
                                            4
                                          )}\n\n`
                                        : 'No parameters provided.\n\n'),
                                      T.log(
                                        `Received notification '${e.method}'.`,
                                        t
                                      );
                                  } else Z('receive-notification', e);
                                })(e),
                                  void 0 === e.params ||
                                  (void 0 !== t && 0 === t.numberOfParams)
                                    ? n
                                      ? n()
                                      : R(e.method)
                                    : i.array(e.params) &&
                                      (void 0 === t || t.numberOfParams > 1)
                                    ? n
                                      ? n(...e.params)
                                      : R(e.method, ...e.params)
                                    : n
                                    ? n(e.params)
                                    : R(e.method, e.params);
                              } catch (o) {
                                o.message
                                  ? r.error(
                                      `Notification handler '${e.method}' failed with message: ${o.message}`
                                    )
                                  : r.error(
                                      `Notification handler '${e.method}' failed unexpectedly.`
                                    );
                              }
                            else I.fire(e);
                          })(e)
                        : o.isResponseMessage(e)
                        ? (function (e) {
                            if (V()) return;
                            if (null === e.id)
                              e.error
                                ? r.error(
                                    `Received response message without id: Error is: \n${JSON.stringify(
                                      e.error,
                                      void 0,
                                      4
                                    )}`
                                  )
                                : r.error(
                                    'Received response message without id. No further error information provided.'
                                  );
                            else {
                              let n = String(e.id),
                                i = q[n];
                              if (
                                ((function (e, t) {
                                  if (D === f.Off || !T) return;
                                  if (S === p.Text) {
                                    let n;
                                    if (
                                      (D === f.Verbose &&
                                        (e.error && e.error.data
                                          ? (n = `Error data: ${JSON.stringify(
                                              e.error.data,
                                              null,
                                              4
                                            )}\n\n`)
                                          : e.result
                                          ? (n = `Result: ${JSON.stringify(
                                              e.result,
                                              null,
                                              4
                                            )}\n\n`)
                                          : void 0 === e.error &&
                                            (n = 'No result returned.\n\n')),
                                      t)
                                    ) {
                                      let r = e.error
                                        ? ` Request failed: ${e.error.message} (${e.error.code}).`
                                        : '';
                                      T.log(
                                        `Received response '${t.method} - (${
                                          e.id
                                        })' in ${
                                          Date.now() - t.timerStart
                                        }ms.${r}`,
                                        n
                                      );
                                    } else
                                      T.log(
                                        `Received response ${e.id} without active response promise.`,
                                        n
                                      );
                                  } else Z('receive-response', e);
                                })(e, i),
                                i)
                              ) {
                                delete q[n];
                                try {
                                  if (e.error) {
                                    let t = e.error;
                                    i.reject(
                                      new o.ResponseError(
                                        t.code,
                                        t.message,
                                        t.data
                                      )
                                    );
                                  } else {
                                    if (void 0 === e.result)
                                      throw new Error('Should never happen.');
                                    i.resolve(e.result);
                                  }
                                } catch (t) {
                                  t.message
                                    ? r.error(
                                        `Response handler '${i.method}' failed with message: ${t.message}`
                                      )
                                    : r.error(
                                        `Response handler '${i.method}' failed unexpectedly.`
                                      );
                                }
                              }
                            }
                          })(e)
                        : (function (e) {
                            if (!e)
                              return void r.error('Received empty message.');
                            r.error(
                              `Received message which is neither a response nor a notification message:\n${JSON.stringify(
                                e,
                                null,
                                4
                              )}`
                            );
                            let t = e;
                            if (i.string(t.id) || i.number(t.id)) {
                              let e = String(t.id),
                                n = q[e];
                              n &&
                                n.reject(
                                  new Error(
                                    'The received response has neither a result nor an error property.'
                                  )
                                );
                            }
                          })(e);
                    } finally {
                      X();
                    }
                  })();
              }));
          }
          t.onClose(U),
            t.onError(function (e) {
              M.fire([e, void 0, void 0]);
            }),
            n.onClose(U),
            n.onError(function (e) {
              M.fire(e);
            });
          let z = (e) => {
            try {
              if (o.isNotificationMessage(e) && e.method === d.type.method) {
                let t = W(e.params.id),
                  r = E.get(t);
                if (o.isRequestMessage(r)) {
                  let i =
                    s && s.cancelUndispatched
                      ? s.cancelUndispatched(r, A)
                      : void 0;
                  if (i && (void 0 !== i.error || void 0 !== i.result))
                    return (
                      E.delete(t),
                      (i.id = r.id),
                      J(i, e.method, Date.now()),
                      void n.write(i)
                    );
                }
              }
              L(E, e);
            } finally {
              X();
            }
          };

          function J(e, t, n) {
            if (D !== f.Off && T)
              if (S === p.Text) {
                let r;
                D === f.Verbose &&
                  (e.error && e.error.data
                    ? (r = `Error data: ${JSON.stringify(
                        e.error.data,
                        null,
                        4
                      )}\n\n`)
                    : e.result
                    ? (r = `Result: ${JSON.stringify(e.result, null, 4)}\n\n`)
                    : void 0 === e.error && (r = 'No result returned.\n\n')),
                  T.log(
                    `Sending response '${t} - (${
                      e.id
                    })'. Processing request took ${Date.now() - n}ms`,
                    r
                  );
              } else Z('send-response', e);
          }

          function Z(e, t) {
            if (!T || D === f.Off) return;
            const n = {
              isLSPMessage: !0,
              type: e,
              message: t,
              timestamp: Date.now(),
            };
            T.log(n);
          }

          function G() {
            if (Q()) throw new y(m.Closed, 'Connection is closed.');
            if (V()) throw new y(m.Disposed, 'Connection is disposed.');
          }

          function Y(e) {
            return void 0 === e ? null : e;
          }

          function K(e, t) {
            let n,
              r = e.numberOfParams;
            switch (r) {
              case 0:
                n = null;
                break;
              case 1:
                n = Y(t[0]);
                break;
              default:
                n = [];
                for (let e = 0; e < t.length && e < r; e++) n.push(Y(t[e]));
                if (t.length < r)
                  for (let e = t.length; e < r; e++) n.push(null);
            }
            return n;
          }
          let H = {
            sendNotification: (e, ...t) => {
              let r, o;
              if ((G(), i.string(e)))
                switch (((r = e), t.length)) {
                  case 0:
                    o = null;
                    break;
                  case 1:
                    o = t[0];
                    break;
                  default:
                    o = t;
                }
              else (r = e.method), (o = K(e, t));
              let s = {
                jsonrpc: w,
                method: r,
                params: o,
              };
              !(function (e) {
                if (D !== f.Off && T)
                  if (S === p.Text) {
                    let t;
                    D === f.Verbose &&
                      (t = e.params
                        ? `Params: ${JSON.stringify(e.params, null, 4)}\n\n`
                        : 'No parameters provided.\n\n'),
                      T.log(`Sending notification '${e.method}'.`, t);
                  } else Z('send-notification', e);
              })(s),
                n.write(s);
            },
            onNotification: (e, t) => {
              G(),
                i.func(e)
                  ? (R = e)
                  : t &&
                    (i.string(e)
                      ? (_[e] = {
                          type: void 0,
                          handler: t,
                        })
                      : (_[e.method] = {
                          type: e,
                          handler: t,
                        }));
            },
            sendRequest: (e, ...t) => {
              let r, s, u;
              if (
                (G(),
                (function () {
                  if (!F()) throw new Error('Call listen() first.');
                })(),
                i.string(e))
              )
                switch (((r = e), t.length)) {
                  case 0:
                    s = null;
                    break;
                  case 1:
                    c.CancellationToken.is(t[0])
                      ? ((s = null), (u = t[0]))
                      : (s = Y(t[0]));
                    break;
                  default:
                    const e = t.length - 1;
                    c.CancellationToken.is(t[e])
                      ? ((u = t[e]),
                        (s =
                          2 === t.length
                            ? Y(t[0])
                            : t.slice(0, e).map((e) => Y(e))))
                      : (s = t.map((e) => Y(e)));
                }
              else {
                (r = e.method), (s = K(e, t));
                let n = e.numberOfParams;
                u = c.CancellationToken.is(t[n]) ? t[n] : void 0;
              }
              let l = a++,
                h = new Promise((e, t) => {
                  let i = {
                      jsonrpc: w,
                      id: l,
                      method: r,
                      params: s,
                    },
                    a = {
                      method: r,
                      timerStart: Date.now(),
                      resolve: e,
                      reject: t,
                    };
                  !(function (e) {
                    if (D !== f.Off && T)
                      if (S === p.Text) {
                        let t;
                        D === f.Verbose &&
                          e.params &&
                          (t = `Params: ${JSON.stringify(
                            e.params,
                            null,
                            4
                          )}\n\n`),
                          T.log(
                            `Sending request '${e.method} - (${e.id})'.`,
                            t
                          );
                      } else Z('send-request', e);
                  })(i);
                  try {
                    n.write(i);
                  } catch (u) {
                    a.reject(
                      new o.ResponseError(
                        o.ErrorCodes.MessageWriteError,
                        u.message ? u.message : 'Unknown reason'
                      )
                    ),
                      (a = null);
                  }
                  a && (q[String(l)] = a);
                });
              return (
                u &&
                  u.onCancellationRequested(() => {
                    H.sendNotification(d.type, {
                      id: l,
                    });
                  }),
                h
              );
            },
            onRequest: (e, t) => {
              G(),
                i.func(e)
                  ? (k = e)
                  : t &&
                    (i.string(e)
                      ? (C[e] = {
                          type: void 0,
                          handler: t,
                        })
                      : (C[e.method] = {
                          type: e,
                          handler: t,
                        }));
            },
            trace: (e, t, n) => {
              let r = !1,
                o = p.Text;
              void 0 !== n &&
                (i.boolean(n)
                  ? (r = n)
                  : ((r = n.sendNotification || !1),
                    (o = n.traceFormat || p.Text))),
                (D = e),
                (S = o),
                (T = D === f.Off ? void 0 : t),
                !r ||
                  Q() ||
                  V() ||
                  H.sendNotification(h.type, {
                    value: f.toString(e),
                  });
            },
            onError: M.event,
            onClose: $.event,
            onUnhandledNotification: I.event,
            onDispose: j.event,
            dispose: () => {
              if (V()) return;
              (N = v.Disposed), j.fire(void 0);
              let e = new Error('Connection got disposed.');
              Object.keys(q).forEach((t) => {
                q[t].reject(e);
              }),
                (q = Object.create(null)),
                (P = Object.create(null)),
                (E = new l.LinkedMap()),
                i.func(n.dispose) && n.dispose(),
                i.func(t.dispose) && t.dispose();
            },
            listen: () => {
              G(),
                (function () {
                  if (F())
                    throw new y(
                      m.AlreadyListening,
                      'Connection is already listening'
                    );
                })(),
                (N = v.Listening),
                t.listen(z);
            },
            inspect: () => {
              console.log('inspect');
            },
          };
          return (
            H.onNotification(g.type, (e) => {
              D !== f.Off &&
                T &&
                T.log(e.message, D === f.Verbose ? e.verbose : void 0);
            }),
            H
          );
        }
        (t.ConnectionError = y),
          (function (e) {
            e.is = function (e) {
              let t = e;
              return t && i.func(t.cancelUndispatched);
            };
          })(t.ConnectionStrategy || (t.ConnectionStrategy = {})),
          (function (e) {
            (e[(e.New = 1)] = 'New'),
              (e[(e.Listening = 2)] = 'Listening'),
              (e[(e.Closed = 3)] = 'Closed'),
              (e[(e.Disposed = 4)] = 'Disposed');
          })(v || (v = {})),
          (t.createMessageConnection = function (e, n, r, i) {
            var o;
            return (
              r || (r = t.NullLogger),
              O(
                void 0 !== (o = e).listen && void 0 === o.read
                  ? e
                  : new s.StreamMessageReader(e),
                (function (e) {
                  return void 0 !== e.write && void 0 === e.end;
                })(n)
                  ? n
                  : new a.StreamMessageWriter(n),
                r,
                i
              )
            );
          });
      }.call(this, n('CfyG').setImmediate));
    },
    PENG: function (e, t) {
      (t.endianness = function () {
        return 'LE';
      }),
        (t.hostname = function () {
          return 'undefined' !== typeof location ? location.hostname : '';
        }),
        (t.loadavg = function () {
          return [];
        }),
        (t.uptime = function () {
          return 0;
        }),
        (t.freemem = function () {
          return Number.MAX_VALUE;
        }),
        (t.totalmem = function () {
          return Number.MAX_VALUE;
        }),
        (t.cpus = function () {
          return [];
        }),
        (t.type = function () {
          return 'Browser';
        }),
        (t.release = function () {
          return 'undefined' !== typeof navigator ? navigator.appVersion : '';
        }),
        (t.networkInterfaces = t.getNetworkInterfaces =
          function () {
            return {};
          }),
        (t.arch = function () {
          return 'javascript';
        }),
        (t.platform = function () {
          return 'browser';
        }),
        (t.tmpdir = t.tmpDir =
          function () {
            return '/tmp';
          }),
        (t.EOL = '\n'),
        (t.homedir = function () {
          return '/';
        });
    },
    PQU8: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'html', function () {
          return H;
        }),
        n.d(t, 'htmlCompletion', function () {
          return K;
        }),
        n.d(t, 'htmlLanguage', function () {
          return Y;
        });
      var r = n('LPyM'),
        i = n('lmln');
      const o = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0,
        },
        s = {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0,
        },
        a = {
          dd: {
            dd: !0,
            dt: !0,
          },
          dt: {
            dd: !0,
            dt: !0,
          },
          li: {
            li: !0,
          },
          option: {
            option: !0,
            optgroup: !0,
          },
          optgroup: {
            optgroup: !0,
          },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0,
          },
          rp: {
            rp: !0,
            rt: !0,
          },
          rt: {
            rp: !0,
            rt: !0,
          },
          tbody: {
            tbody: !0,
            tfoot: !0,
          },
          td: {
            td: !0,
            th: !0,
          },
          tfoot: {
            tbody: !0,
          },
          th: {
            td: !0,
            th: !0,
          },
          thead: {
            tbody: !0,
            tfoot: !0,
          },
          tr: {
            tr: !0,
          },
        };

      function u(e) {
        return 9 == e || 10 == e || 13 == e || 32 == e;
      }
      let c = null,
        l = null,
        d = 0;

      function f(e, t) {
        let n = e.pos + t;
        if (d == n && l == e) return c;
        let r = e.peek(t);
        for (; u(r); ) r = e.peek(++t);
        let i = '';
        for (
          ;
          45 == (o = r) ||
          46 == o ||
          58 == o ||
          (o >= 65 && o <= 90) ||
          95 == o ||
          (o >= 97 && o <= 122) ||
          o >= 161;

        )
          (i += String.fromCharCode(r)), (r = e.peek(++t));
        var o;
        return (l = e), (d = n), (c = i || (r == p || r == h ? void 0 : null));
      }
      const p = 63,
        h = 33;

      function g(e, t) {
        (this.name = e), (this.parent = t), (this.hash = t ? t.hash : 0);
        for (let n = 0; n < e.length; n++)
          this.hash +=
            (this.hash << 4) + e.charCodeAt(n) + (e.charCodeAt(n) << 8);
      }
      const m = [4, 5, 6, 7],
        v = new r.a({
          start: null,
          shift: (e, t, n, r) =>
            m.indexOf(t) > -1 ? new g(f(r, 1) || '', e) : e,
          reduce: (e, t) => (18 == t && e ? e.parent : e),
          reuse(e, t, n, r) {
            let i = t.type.id;
            return 4 == i || 35 == i ? new g(f(r, 1) || '', e) : e;
          },
          hash: (e) => (e ? e.hash : 0),
          strict: !1,
        }),
        y = new r.b(
          (e, t) => {
            if (60 != e.next)
              return void (e.next < 0 && t.context && e.acceptToken(56));
            e.advance();
            let n = 47 == e.next;
            n && e.advance();
            let r = f(e, 0);
            if (void 0 === r) return;
            if (!r) return e.acceptToken(n ? 11 : 4);
            let i = t.context ? t.context.name : null;
            if (n) {
              if (r == i) return e.acceptToken(8);
              if (i && s[i]) return e.acceptToken(56, -2);
              if (t.dialectEnabled(0)) return e.acceptToken(9);
              for (let e = t.context; e; e = e.parent) if (e.name == r) return;
              e.acceptToken(10);
            } else {
              if ('script' == r) return e.acceptToken(5);
              if ('style' == r) return e.acceptToken(6);
              if ('textarea' == r) return e.acceptToken(7);
              i && a[i] && a[i][r] ? e.acceptToken(56, -1) : e.acceptToken(4);
            }
          },
          {
            contextual: !0,
          }
        ),
        O = new r.b((e, t) => {
          let n = 1;
          if (47 == e.next) {
            if (62 != e.peek(1)) return;
            n = 2;
          } else if (62 != e.next) return;
          t.context && o[t.context.name] && e.acceptToken(12, n);
        }),
        b = new r.b((e) => {
          for (let t = 0, n = 0; ; n++) {
            if (e.next < 0) {
              n && e.acceptToken(57);
              break;
            }
            if (e.next == '--\x3e'.charCodeAt(t)) {
              if ((t++, 3 == t)) {
                n > 3 && e.acceptToken(57, -2);
                break;
              }
            } else t = 0;
            e.advance();
          }
        });

      function w(e, t, n) {
        let i = 2 + e.length;
        return new r.b((r) => {
          for (let o = 0, s = 0, a = 0; ; a++) {
            if (r.next < 0) {
              a && r.acceptToken(t);
              break;
            }
            if (
              (0 == o && 60 == r.next) ||
              (1 == o && 47 == r.next) ||
              (o >= 2 && o < i && r.next == e.charCodeAt(o - 2))
            )
              o++, s++;
            else if ((2 != o && o != i) || !u(r.next)) {
              if (o == i && 62 == r.next) {
                a > s ? r.acceptToken(t, -s) : r.acceptToken(n, -(s - 2));
                break;
              }
              if ((10 == r.next || 13 == r.next) && a) {
                r.acceptToken(t, 1);
                break;
              }
              o = s = 0;
            } else s++;
            r.advance();
          }
        });
      }
      const k = w('script', 53, 1),
        R = w('style', 54, 2),
        x = w('textarea', 55, 3),
        T = r.c.deserialize({
          version: 13,
          states:
            ",fOVO!jOOO!TQ#tO'#CoO!YQ#tO'#CyO!_Q#tO'#C|O!dQ#tO'#DPO!iOXO'#CnO!tOYO'#CnO#PO[O'#CnO$YO!jO'#CnOOOW'#Cn'#CnO$aO$fO'#DSO$iQ#tO'#DUO$nQ#tO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVO!jOOO$sQ&jO,59ZO${Q&jO,59eO%TQ&jO,59hO%]Q&zO,59kOOOX'#D]'#D]O%hOXO'#CwO%sOXO,59YOOOY'#D^'#D^O%{OYO'#CzO&WOYO,59YOOO['#D_'#D_O&`O[O'#C}O&kO[O,59YOOOW'#D`'#D`O&sO!jO,59YO&zQ#tO'#DQOOOW,59Y,59YOOOp'#Da'#DaO'PO$fO,59nOOOW,59n,59nO'XQ#tO,59pO'^Q#tO,59qOOOW-E7V-E7VO'cQ&zO'#CqOOQ`'#DY'#DYO'qQ&jO1G.uOOOX1G.u1G.uO'yQ&jO1G/POOOY1G/P1G/PO(RQ&jO1G/SOOO[1G/S1G/SO(ZQ&zO1G/VOOOW1G/V1G/VOOOW1G/X1G/XOOOX-E7Z-E7ZO(fQ#tO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(kQ#tO'#C{OOO[-E7]-E7]O(pQ#tO'#DOOOOW-E7^-E7^O(uQ#tO,59lOOOp-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O(zQ,UO,59]OOQ`-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)VQ#tO,59dO)[Q#tO,59gO)aQ#tO,59jOOOW1G/W1G/WO)fO7[O'#CtO)tOMhO'#CtOOQ`1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*SO7[O,59`OOQ`,59`,59`OOOO'#D['#D[O*bOMhO,59`OOOO-E7X-E7XOOQ`1G.z1G.zOOOO-E7Y-E7Y",
          stateData:
            '*x~O!]OS~OSSOTPOUQOVROX[OYZOZ]O^]O_]O`]Oa]Ow]Oz^O!cYO~Od`O~OdaO~OdbO~OdcO~O!VdOPkP!YkP~O!WgOQnP!YnP~O!XjORqP!YqP~OSSOTPOUQOVROWoOX[OYZOZ]O^]O_]O`]Oa]Ow]O!cYO~O!YpO~P#[O!ZqO!dsO~OdtO~OduO~OfwOjzO~OfwOj|O~OfwOj!OO~O[!ROfwOj!QO~O!VdOPkX!YkX~OP!TO!Y!UO~O!WgOQnX!YnX~OQ!WO!Y!UO~O!XjORqX!YqX~OR!YO!Y!UO~O!Y!UO~P#[Od![O~O!ZqO!d!^O~Oj!_O~Oj!`O~Og!aOfeXjeX[eX~OfwOj!cO~OfwOj!dO~OfwOj!eO~O[!gOfwOj!fO~Od!hO~Od!iO~Od!jO~Oj!kO~Oi!nO!_!lO!a!mO~Oj!oO~Oj!pO~Oj!qO~O_!rO`!rO!_!tO!`!rO~O_!uO`!uO!a!tO!b!uO~O_!rO`!rO!_!xO!`!rO~O_!uO`!uO!a!xO!b!uO~O`_a!cwz!c~',
          goto: '%i!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!vPP!y!|#P#V#Y#]#c#f#i#o#u!`P!`!`P#{$R$e$k$q$w$}%T%ZPPPPPPPP%aX]OW_nXTOW_nax`abcy{}!PR!n!aRfTR!UfXUOW_nRiUR!UiXVOW_nRlVR!UlXWOW_nQpWR!UnXXOW_nQ_ORv_Qy`Q{aQ}bQ!PcX!by{}!PQ!s!lR!w!sQ!v!mR!y!vQeTR!SeQhUR!VhQkVR!XkQnWR!ZnQrYR!]rS^O_TmWn',
          nodeNames:
            '\u26a0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag SelfCloseEndTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl',
          maxTerm: 66,
          context: v,
          nodeProps: [
            [
              i.b.closedBy,
              -9,
              1,
              2,
              3,
              5,
              6,
              7,
              8,
              9,
              10,
              'EndTag',
              4,
              'EndTag SelfCloseEndTag',
              -4,
              19,
              29,
              32,
              35,
              'CloseTag',
            ],
            [
              i.b.group,
              -9,
              11,
              15,
              16,
              17,
              18,
              38,
              39,
              40,
              41,
              'Entity',
              14,
              'Entity TextContent',
              -3,
              27,
              30,
              33,
              'TextContent Entity',
            ],
            [
              i.b.openedBy,
              12,
              'StartTag',
              26,
              'StartTag StartCloseTag',
              -4,
              28,
              31,
              34,
              36,
              'OpenTag',
            ],
          ],
          skippedNodes: [0],
          repeatNodeCount: 9,
          tokenData:
            "!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",
          tokenizers: [k, R, x, y, O, b, 0, 1, 2, 3, 4, 5],
          topRules: {
            Document: [0, 13],
          },
          dialects: {
            noMatch: 0,
          },
          tokenPrec: 446,
        });

      function C(e, t) {
        let n = Object.create(null);
        for (let r of e.firstChild.getChildren('Attribute')) {
          let e = r.getChild('AttributeName'),
            i =
              r.getChild('AttributeValue') ||
              r.getChild('UnquotedAttributeValue');
          e &&
            (n[t.read(e.from, e.to)] = i
              ? 'AttributeValue' == i.name
                ? t.read(i.from + 1, i.to - 1)
                : t.read(i.from, i.to)
              : '');
        }
        return n;
      }

      function _(e, t, n) {
        let r;
        for (let i of n)
          if (!i.attrs || i.attrs(r || (r = C(e.node.parent, t))))
            return {
              parser: i.parser,
            };
        return null;
      }

      function E(e) {
        let t = [],
          n = [],
          r = [];
        for (let i of e) {
          let e =
            'script' == i.tag
              ? t
              : 'style' == i.tag
              ? n
              : 'textarea' == i.tag
              ? r
              : null;
          if (!e)
            throw new RangeError(
              'Only script, style, and textarea tags can host nested parsers'
            );
          e.push(i);
        }
        return Object(i.h)((e, i) => {
          let o = e.type.id;
          return 27 == o
            ? _(e, i, t)
            : 30 == o
            ? _(e, i, n)
            : 33 == o
            ? _(e, i, r)
            : null;
        });
      }
      var q = n('Bxk6'),
        P = n('tzg4'),
        D = n('yqQ+'),
        S = n('ubVE');
      const N = ['_blank', '_self', '_top', '_parent'],
        M = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1'],
        $ = ['get', 'post', 'put', 'delete'],
        I = [
          'application/x-www-form-urlencoded',
          'multipart/form-data',
          'text/plain',
        ],
        j = ['true', 'false'],
        W = {},
        L = {
          a: {
            attrs: {
              href: null,
              ping: null,
              type: null,
              media: null,
              target: N,
              hreflang: null,
            },
          },
          abbr: W,
          acronym: W,
          address: W,
          applet: W,
          area: {
            attrs: {
              alt: null,
              coords: null,
              href: null,
              target: null,
              ping: null,
              media: null,
              hreflang: null,
              type: null,
              shape: ['default', 'rect', 'circle', 'poly'],
            },
          },
          article: W,
          aside: W,
          audio: {
            attrs: {
              src: null,
              mediagroup: null,
              crossorigin: ['anonymous', 'use-credentials'],
              preload: ['none', 'metadata', 'auto'],
              autoplay: ['autoplay'],
              loop: ['loop'],
              controls: ['controls'],
            },
          },
          b: W,
          base: {
            attrs: {
              href: null,
              target: N,
            },
          },
          basefont: W,
          bdi: W,
          bdo: W,
          big: W,
          blockquote: {
            attrs: {
              cite: null,
            },
          },
          body: W,
          br: W,
          button: {
            attrs: {
              form: null,
              formaction: null,
              name: null,
              value: null,
              autofocus: ['autofocus'],
              disabled: ['autofocus'],
              formenctype: I,
              formmethod: $,
              formnovalidate: ['novalidate'],
              formtarget: N,
              type: ['submit', 'reset', 'button'],
            },
          },
          canvas: {
            attrs: {
              width: null,
              height: null,
            },
          },
          caption: W,
          center: W,
          cite: W,
          code: W,
          col: {
            attrs: {
              span: null,
            },
          },
          colgroup: {
            attrs: {
              span: null,
            },
          },
          command: {
            attrs: {
              type: ['command', 'checkbox', 'radio'],
              label: null,
              icon: null,
              radiogroup: null,
              command: null,
              title: null,
              disabled: ['disabled'],
              checked: ['checked'],
            },
          },
          data: {
            attrs: {
              value: null,
            },
          },
          datagrid: {
            attrs: {
              disabled: ['disabled'],
              multiple: ['multiple'],
            },
          },
          datalist: {
            attrs: {
              data: null,
            },
          },
          dd: W,
          del: {
            attrs: {
              cite: null,
              datetime: null,
            },
          },
          details: {
            attrs: {
              open: ['open'],
            },
          },
          dfn: W,
          dir: W,
          div: W,
          dl: W,
          dt: W,
          em: W,
          embed: {
            attrs: {
              src: null,
              type: null,
              width: null,
              height: null,
            },
          },
          eventsource: {
            attrs: {
              src: null,
            },
          },
          fieldset: {
            attrs: {
              disabled: ['disabled'],
              form: null,
              name: null,
            },
          },
          figcaption: W,
          figure: W,
          font: W,
          footer: W,
          form: {
            attrs: {
              action: null,
              name: null,
              'accept-charset': M,
              autocomplete: ['on', 'off'],
              enctype: I,
              method: $,
              novalidate: ['novalidate'],
              target: N,
            },
          },
          frame: W,
          frameset: W,
          h1: W,
          h2: W,
          h3: W,
          h4: W,
          h5: W,
          h6: W,
          head: {
            children: [
              'title',
              'base',
              'link',
              'style',
              'meta',
              'script',
              'noscript',
              'command',
            ],
          },
          header: W,
          hgroup: W,
          hr: W,
          html: {
            attrs: {
              manifest: null,
            },
            children: ['head', 'body'],
          },
          i: W,
          iframe: {
            attrs: {
              src: null,
              srcdoc: null,
              name: null,
              width: null,
              height: null,
              sandbox: [
                'allow-top-navigation',
                'allow-same-origin',
                'allow-forms',
                'allow-scripts',
              ],
              seamless: ['seamless'],
            },
          },
          img: {
            attrs: {
              alt: null,
              src: null,
              ismap: null,
              usemap: null,
              width: null,
              height: null,
              crossorigin: ['anonymous', 'use-credentials'],
            },
          },
          input: {
            attrs: {
              alt: null,
              dirname: null,
              form: null,
              formaction: null,
              height: null,
              list: null,
              max: null,
              maxlength: null,
              min: null,
              name: null,
              pattern: null,
              placeholder: null,
              size: null,
              src: null,
              step: null,
              value: null,
              width: null,
              accept: ['audio/*', 'video/*', 'image/*'],
              autocomplete: ['on', 'off'],
              autofocus: ['autofocus'],
              checked: ['checked'],
              disabled: ['disabled'],
              formenctype: I,
              formmethod: $,
              formnovalidate: ['novalidate'],
              formtarget: N,
              multiple: ['multiple'],
              readonly: ['readonly'],
              required: ['required'],
              type: [
                'hidden',
                'text',
                'search',
                'tel',
                'url',
                'email',
                'password',
                'datetime',
                'date',
                'month',
                'week',
                'time',
                'datetime-local',
                'number',
                'range',
                'color',
                'checkbox',
                'radio',
                'file',
                'submit',
                'image',
                'reset',
                'button',
              ],
            },
          },
          ins: {
            attrs: {
              cite: null,
              datetime: null,
            },
          },
          kbd: W,
          keygen: {
            attrs: {
              challenge: null,
              form: null,
              name: null,
              autofocus: ['autofocus'],
              disabled: ['disabled'],
              keytype: ['RSA'],
            },
          },
          label: {
            attrs: {
              for: null,
              form: null,
            },
          },
          legend: W,
          li: {
            attrs: {
              value: null,
            },
          },
          link: {
            attrs: {
              href: null,
              type: null,
              hreflang: null,
              media: null,
              sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64'],
            },
          },
          map: {
            attrs: {
              name: null,
            },
          },
          mark: W,
          menu: {
            attrs: {
              label: null,
              type: ['list', 'context', 'toolbar'],
            },
          },
          meta: {
            attrs: {
              content: null,
              charset: M,
              name: [
                'viewport',
                'application-name',
                'author',
                'description',
                'generator',
                'keywords',
              ],
              'http-equiv': [
                'content-language',
                'content-type',
                'default-style',
                'refresh',
              ],
            },
          },
          meter: {
            attrs: {
              value: null,
              min: null,
              low: null,
              high: null,
              max: null,
              optimum: null,
            },
          },
          nav: W,
          noframes: W,
          noscript: W,
          object: {
            attrs: {
              data: null,
              type: null,
              name: null,
              usemap: null,
              form: null,
              width: null,
              height: null,
              typemustmatch: ['typemustmatch'],
            },
          },
          ol: {
            attrs: {
              reversed: ['reversed'],
              start: null,
              type: ['1', 'a', 'A', 'i', 'I'],
            },
            children: ['li', 'script', 'template', 'ul', 'ol'],
          },
          optgroup: {
            attrs: {
              disabled: ['disabled'],
              label: null,
            },
          },
          option: {
            attrs: {
              disabled: ['disabled'],
              label: null,
              selected: ['selected'],
              value: null,
            },
          },
          output: {
            attrs: {
              for: null,
              form: null,
              name: null,
            },
          },
          p: W,
          param: {
            attrs: {
              name: null,
              value: null,
            },
          },
          pre: W,
          progress: {
            attrs: {
              value: null,
              max: null,
            },
          },
          q: {
            attrs: {
              cite: null,
            },
          },
          rp: W,
          rt: W,
          ruby: W,
          s: W,
          samp: W,
          script: {
            attrs: {
              type: ['text/javascript'],
              src: null,
              async: ['async'],
              defer: ['defer'],
              charset: M,
            },
          },
          section: W,
          select: {
            attrs: {
              form: null,
              name: null,
              size: null,
              autofocus: ['autofocus'],
              disabled: ['disabled'],
              multiple: ['multiple'],
            },
          },
          small: W,
          source: {
            attrs: {
              src: null,
              type: null,
              media: null,
            },
          },
          span: W,
          strike: W,
          strong: W,
          style: {
            attrs: {
              type: ['text/css'],
              media: null,
              scoped: null,
            },
          },
          sub: W,
          summary: W,
          sup: W,
          table: W,
          tbody: W,
          td: {
            attrs: {
              colspan: null,
              rowspan: null,
              headers: null,
            },
          },
          textarea: {
            attrs: {
              dirname: null,
              form: null,
              maxlength: null,
              name: null,
              placeholder: null,
              rows: null,
              cols: null,
              autofocus: ['autofocus'],
              disabled: ['disabled'],
              readonly: ['readonly'],
              required: ['required'],
              wrap: ['soft', 'hard'],
            },
          },
          tfoot: W,
          th: {
            attrs: {
              colspan: null,
              rowspan: null,
              headers: null,
              scope: ['row', 'col', 'rowgroup', 'colgroup'],
            },
          },
          thead: W,
          time: {
            attrs: {
              datetime: null,
            },
          },
          title: W,
          tr: W,
          track: {
            attrs: {
              src: null,
              label: null,
              default: null,
              kind: [
                'subtitles',
                'captions',
                'descriptions',
                'chapters',
                'metadata',
              ],
              srclang: null,
            },
          },
          tt: W,
          u: W,
          ul: {
            children: ['li', 'script', 'template', 'ul', 'ol'],
          },
          var: W,
          video: {
            attrs: {
              src: null,
              poster: null,
              width: null,
              height: null,
              crossorigin: ['anonymous', 'use-credentials'],
              preload: ['auto', 'metadata', 'none'],
              autoplay: ['autoplay'],
              mediagroup: ['movie'],
              muted: ['muted'],
              controls: ['controls'],
            },
          },
          wbr: W,
        },
        A = {
          accesskey: null,
          class: null,
          contenteditable: j,
          contextmenu: null,
          dir: ['ltr', 'rtl', 'auto'],
          draggable: ['true', 'false', 'auto'],
          dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
          hidden: ['hidden'],
          id: null,
          inert: ['inert'],
          itemid: null,
          itemprop: null,
          itemref: null,
          itemscope: ['itemscope'],
          itemtype: null,
          lang: [
            'ar',
            'bn',
            'de',
            'en-GB',
            'en-US',
            'es',
            'fr',
            'hi',
            'id',
            'ja',
            'pa',
            'pt',
            'ru',
            'tr',
            'zh',
          ],
          spellcheck: j,
          autocorrect: j,
          autocapitalize: j,
          style: null,
          tabindex: null,
          title: null,
          translate: ['yes', 'no'],
          onclick: null,
          rel: [
            'stylesheet',
            'alternate',
            'author',
            'bookmark',
            'help',
            'license',
            'next',
            'nofollow',
            'noreferrer',
            'prefetch',
            'prev',
            'search',
            'tag',
          ],
          role: 'alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer'.split(
            ' '
          ),
          'aria-activedescendant': null,
          'aria-atomic': j,
          'aria-autocomplete': ['inline', 'list', 'both', 'none'],
          'aria-busy': j,
          'aria-checked': ['true', 'false', 'mixed', 'undefined'],
          'aria-controls': null,
          'aria-describedby': null,
          'aria-disabled': j,
          'aria-dropeffect': null,
          'aria-expanded': ['true', 'false', 'undefined'],
          'aria-flowto': null,
          'aria-grabbed': ['true', 'false', 'undefined'],
          'aria-haspopup': j,
          'aria-hidden': j,
          'aria-invalid': ['true', 'false', 'grammar', 'spelling'],
          'aria-label': null,
          'aria-labelledby': null,
          'aria-level': null,
          'aria-live': ['off', 'polite', 'assertive'],
          'aria-multiline': j,
          'aria-multiselectable': j,
          'aria-owns': null,
          'aria-posinset': null,
          'aria-pressed': ['true', 'false', 'mixed', 'undefined'],
          'aria-readonly': j,
          'aria-relevant': null,
          'aria-required': j,
          'aria-selected': ['true', 'false', 'undefined'],
          'aria-setsize': null,
          'aria-sort': ['ascending', 'descending', 'none', 'other'],
          'aria-valuemax': null,
          'aria-valuemin': null,
          'aria-valuenow': null,
          'aria-valuetext': null,
        },
        F = Object.keys(L),
        Q = Object.keys(A);

      function V(e, t) {
        let n = t.firstChild,
          r = n && n.getChild('TagName');
        return r ? e.sliceString(r.from, r.to) : '';
      }

      function U(e, t = !1) {
        for (let n = e.parent; n; n = n.parent)
          if ('Element' == n.name) {
            if (!t) return n;
            t = !1;
          }
        return null;
      }

      function X(e, t) {
        let n = U(t, !0),
          r = n ? L[V(e, n)] : null;
        return (null === r || void 0 === r ? void 0 : r.children) || F;
      }

      function z(e, t) {
        let n = [];
        for (let r = t; (r = U(r)); ) {
          let i = V(e, r);
          if (i && 'CloseTag' == r.lastChild.name) break;
          i &&
            n.indexOf(i) < 0 &&
            ('EndTag' == t.name || t.from >= r.firstChild.to) &&
            n.push(i);
        }
        return n;
      }
      const J = /^[:\-\.\w\u00b7-\uffff]+$/;

      function Z(e, t, n, r) {
        let i = /\s*>/.test(e.sliceDoc(r, r + 5)) ? '' : '>';
        return {
          from: n,
          to: r,
          options: X(e.doc, t)
            .map((e) => ({
              label: e,
              type: 'type',
            }))
            .concat(
              z(e.doc, t).map((e, t) => ({
                label: '/' + e,
                apply: '/' + e + i,
                type: 'type',
                boost: 99 - t,
              }))
            ),
          span: /^\/?[:\-\.\w\u00b7-\uffff]*$/,
        };
      }

      function G(e, t, n, r) {
        let i = /\s*>/.test(e.sliceDoc(r, r + 5)) ? '' : '>';
        return {
          from: n,
          to: r,
          options: z(e.doc, t).map((e, t) => ({
            label: e,
            apply: e + i,
            type: 'type',
            boost: 99 - t,
          })),
          span: J,
        };
      }
      const Y = D.b.define({
          parser: T.configure({
            props: [
              D.p.add({
                Element(e) {
                  let t = /^(\s*)(<\/)?/.exec(e.textAfter);
                  return e.node.to <= e.pos + t[0].length
                    ? e.continue()
                    : e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
                },
                'OpenTag CloseTag SelfClosingTag': (e) =>
                  e.column(e.node.from) + e.unit,
                Document(e) {
                  if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to)
                    return e.continue();
                  let t,
                    n = null;
                  for (let r = e.node; ; ) {
                    let e = r.lastChild;
                    if (!e || 'Element' != e.name || e.to != r.to) break;
                    n = r = e;
                  }
                  return n &&
                    (!(t = n.lastChild) ||
                      ('CloseTag' != t.name && 'SelfClosingTag' != t.name))
                    ? e.lineIndent(n.from) + e.unit
                    : null;
                },
              }),
              D.l.add({
                Element(e) {
                  let t = e.firstChild,
                    n = e.lastChild;
                  return t && 'OpenTag' == t.name
                    ? {
                        from: t.to,
                        to: 'CloseTag' == n.name ? n.from : e.to,
                      }
                    : null;
                },
              }),
              Object(S.c)({
                AttributeValue: S.d.string,
                'Text RawText': S.d.content,
                'StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag':
                  S.d.angleBracket,
                TagName: S.d.tagName,
                'MismatchedCloseTag/TagName': [S.d.tagName, S.d.invalid],
                AttributeName: S.d.propertyName,
                UnquotedAttributeValue: S.d.string,
                Is: S.d.definitionOperator,
                'EntityReference CharacterReference': S.d.character,
                Comment: S.d.blockComment,
                ProcessingInst: S.d.processingInstruction,
                DoctypeDecl: S.d.documentMeta,
              }),
            ],
            wrap: E([
              {
                tag: 'script',
                attrs: (e) =>
                  !e.type ||
                  /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(
                    e.type
                  ),
                parser: P.javascriptLanguage.parser,
              },
              {
                tag: 'style',
                attrs: (e) =>
                  (!e.lang || 'css' == e.lang) &&
                  (!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),
                parser: q.cssLanguage.parser,
              },
            ]),
          }),
          languageData: {
            commentTokens: {
              block: {
                open: '\x3c!--',
                close: '--\x3e',
              },
            },
            indentOnInput: /^\s*<\/\w+\W$/,
          },
        }),
        K = Y.data.of({
          autocomplete: function (e) {
            let { state: t, pos: n } = e,
              r = Object(D.w)(t).resolveInner(n),
              i = r.resolve(n, -1);
            for (let o, s = n; r == i && (o = i.childBefore(s)); ) {
              let e = o.lastChild;
              if (!e || !e.type.isError || e.from < e.to) break;
              (r = i = o), (s = e.from);
            }
            return 'TagName' == i.name
              ? i.parent && /CloseTag$/.test(i.parent.name)
                ? G(t, i, i.from, n)
                : Z(t, i, i.from, n)
              : 'StartTag' == i.name
              ? Z(t, i, n, n)
              : 'StartCloseTag' == i.name || 'IncompleteCloseTag' == i.name
              ? G(t, i, n, n)
              : (e.explicit &&
                  ('OpenTag' == i.name || 'SelfClosingTag' == i.name)) ||
                'AttributeName' == i.name
              ? (function (e, t, n, r) {
                  let i = U(t),
                    o = i ? L[V(e.doc, i)] : null;
                  return {
                    from: n,
                    to: r,
                    options: (o && o.attrs
                      ? Object.keys(o.attrs).concat(Q)
                      : Q
                    ).map((e) => ({
                      label: e,
                      type: 'property',
                    })),
                    span: J,
                  };
                })(t, i, 'AttributeName' == i.name ? i.from : n, n)
              : 'Is' == i.name ||
                'AttributeValue' == i.name ||
                'UnquotedAttributeValue' == i.name
              ? (function (e, t, n, r) {
                  var i;
                  let o,
                    s =
                      null === (i = t.parent) || void 0 === i
                        ? void 0
                        : i.getChild('AttributeName'),
                    a = [];
                  if (s) {
                    let i = e.sliceDoc(s.from, s.to),
                      u = A[i];
                    if (!u) {
                      let n = U(t),
                        r = n ? L[V(e.doc, n)] : null;
                      u =
                        (null === r || void 0 === r ? void 0 : r.attrs) &&
                        r.attrs[i];
                    }
                    if (u) {
                      let t = e.sliceDoc(n, r).toLowerCase(),
                        i = '"',
                        s = '"';
                      /^['"]/.test(t)
                        ? ((o = '"' == t[0] ? /^[^"]*$/ : /^[^']*$/),
                          (i = ''),
                          (s = e.sliceDoc(r, r + 1) == t[0] ? '' : t[0]),
                          (t = t.slice(1)),
                          n++)
                        : (o = /^[^\s<>='"]*$/);
                      for (let e of u)
                        a.push({
                          label: e,
                          apply: i + e + s,
                          type: 'constant',
                        });
                    }
                  }
                  return {
                    from: n,
                    to: r,
                    options: a,
                    span: o,
                  };
                })(t, i, 'Is' == i.name ? n : i.from, n)
              : !e.explicit ||
                ('Element' != r.name &&
                  'Text' != r.name &&
                  'Document' != r.name)
              ? null
              : (function (e, t, n) {
                  let r = [],
                    i = 0;
                  for (let o of X(e.doc, t))
                    r.push({
                      label: '<' + o,
                      type: 'type',
                    });
                  for (let o of z(e.doc, t))
                    r.push({
                      label: '</' + o + '>',
                      type: 'type',
                      boost: 99 - i++,
                    });
                  return {
                    from: n,
                    to: n,
                    options: r,
                    span: /^<\/?[:\-\.\w\u00b7-\uffff]*$/,
                  };
                })(t, i, n);
          },
        });

      function H(e = {}) {
        let t = Y;
        return (
          !1 === e.matchClosingTags &&
            (t = t.configure({
              dialect: 'noMatch',
            })),
          new D.e(t, [
            K,
            Object(P.javascript)().support,
            Object(q.css)().support,
          ])
        );
      }
    },
    RUQ2: function (e, t, n) {
      (function (e) {
        var t = n('RUQ2');
        for (k in t) e[k] = t[k];
      }.call(this, n('ntbh')));
    },
    VqZt: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('MOv1');
      !(function (e) {
        e.type = new r.RequestType0('workspace/workspaceFolders');
      })(t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {})),
        (function (e) {
          e.type = new r.NotificationType(
            'workspace/didChangeWorkspaceFolders'
          );
        })(
          t.DidChangeWorkspaceFoldersNotification ||
            (t.DidChangeWorkspaceFoldersNotification = {})
        );
    },
    f7Fo: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const r = n('Gkij');
      var i;
      !(function (e) {
        (e.ParseError = -32700),
          (e.InvalidRequest = -32600),
          (e.MethodNotFound = -32601),
          (e.InvalidParams = -32602),
          (e.InternalError = -32603),
          (e.serverErrorStart = -32099),
          (e.serverErrorEnd = -32e3),
          (e.ServerNotInitialized = -32002),
          (e.UnknownErrorCode = -32001),
          (e.RequestCancelled = -32800),
          (e.MessageWriteError = 1),
          (e.MessageReadError = 2);
      })((i = t.ErrorCodes || (t.ErrorCodes = {})));
      class o extends Error {
        constructor(e, t, n) {
          super(t),
            (this.code = r.number(e) ? e : i.UnknownErrorCode),
            (this.data = n),
            Object.setPrototypeOf(this, o.prototype);
        }
        toJson() {
          return {
            code: this.code,
            message: this.message,
            data: this.data,
          };
        }
      }
      t.ResponseError = o;
      class s {
        constructor(e, t) {
          (this._method = e), (this._numberOfParams = t);
        }
        get method() {
          return this._method;
        }
        get numberOfParams() {
          return this._numberOfParams;
        }
      }
      t.AbstractMessageType = s;
      t.RequestType0 = class extends s {
        constructor(e) {
          super(e, 0), (this._ = void 0);
        }
      };
      t.RequestType = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.RequestType1 = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.RequestType2 = class extends s {
        constructor(e) {
          super(e, 2), (this._ = void 0);
        }
      };
      t.RequestType3 = class extends s {
        constructor(e) {
          super(e, 3), (this._ = void 0);
        }
      };
      t.RequestType4 = class extends s {
        constructor(e) {
          super(e, 4), (this._ = void 0);
        }
      };
      t.RequestType5 = class extends s {
        constructor(e) {
          super(e, 5), (this._ = void 0);
        }
      };
      t.RequestType6 = class extends s {
        constructor(e) {
          super(e, 6), (this._ = void 0);
        }
      };
      t.RequestType7 = class extends s {
        constructor(e) {
          super(e, 7), (this._ = void 0);
        }
      };
      t.RequestType8 = class extends s {
        constructor(e) {
          super(e, 8), (this._ = void 0);
        }
      };
      t.RequestType9 = class extends s {
        constructor(e) {
          super(e, 9), (this._ = void 0);
        }
      };
      t.NotificationType = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.NotificationType0 = class extends s {
        constructor(e) {
          super(e, 0), (this._ = void 0);
        }
      };
      t.NotificationType1 = class extends s {
        constructor(e) {
          super(e, 1), (this._ = void 0);
        }
      };
      t.NotificationType2 = class extends s {
        constructor(e) {
          super(e, 2), (this._ = void 0);
        }
      };
      t.NotificationType3 = class extends s {
        constructor(e) {
          super(e, 3), (this._ = void 0);
        }
      };
      t.NotificationType4 = class extends s {
        constructor(e) {
          super(e, 4), (this._ = void 0);
        }
      };
      t.NotificationType5 = class extends s {
        constructor(e) {
          super(e, 5), (this._ = void 0);
        }
      };
      t.NotificationType6 = class extends s {
        constructor(e) {
          super(e, 6), (this._ = void 0);
        }
      };
      t.NotificationType7 = class extends s {
        constructor(e) {
          super(e, 7), (this._ = void 0);
        }
      };
      t.NotificationType8 = class extends s {
        constructor(e) {
          super(e, 8), (this._ = void 0);
        }
      };
      (t.NotificationType9 = class extends s {
        constructor(e) {
          super(e, 9), (this._ = void 0);
        }
      }),
        (t.isRequestMessage = function (e) {
          let t = e;
          return t && r.string(t.method) && (r.string(t.id) || r.number(t.id));
        }),
        (t.isNotificationMessage = function (e) {
          let t = e;
          return t && r.string(t.method) && void 0 === e.id;
        }),
        (t.isResponseMessage = function (e) {
          let t = e;
          return (
            t &&
            (void 0 !== t.result || !!t.error) &&
            (r.string(t.id) || r.number(t.id) || null === t.id)
          );
        });
    },
    fIkx: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (function (e) {
          e.create = function (e) {
            return {
              dispose: e,
            };
          };
        })(t.Disposable || (t.Disposable = {})),
        (function (e) {
          const t = {
            dispose() {},
          };
          e.None = function () {
            return t;
          };
        })(t.Event || (t.Event = {}));
      class r {
        add(e, t = null, n) {
          this._callbacks || ((this._callbacks = []), (this._contexts = [])),
            this._callbacks.push(e),
            this._contexts.push(t),
            Array.isArray(n) &&
              n.push({
                dispose: () => this.remove(e, t),
              });
        }
        remove(e, t = null) {
          if (this._callbacks) {
            for (var n = !1, r = 0, i = this._callbacks.length; r < i; r++)
              if (this._callbacks[r] === e) {
                if (this._contexts[r] === t)
                  return (
                    this._callbacks.splice(r, 1),
                    void this._contexts.splice(r, 1)
                  );
                n = !0;
              }
            if (n)
              throw new Error(
                'When adding a listener with a context, you should remove it with the same context'
              );
          }
        }
        invoke(...e) {
          if (!this._callbacks) return [];
          for (
            var t = [],
              n = this._callbacks.slice(0),
              r = this._contexts.slice(0),
              i = 0,
              o = n.length;
            i < o;
            i++
          )
            try {
              t.push(n[i].apply(r[i], e));
            } catch (s) {
              console.error(s);
            }
          return t;
        }
        isEmpty() {
          return !this._callbacks || 0 === this._callbacks.length;
        }
        dispose() {
          (this._callbacks = void 0), (this._contexts = void 0);
        }
      }
      class i {
        constructor(e) {
          this._options = e;
        }
        get event() {
          return (
            this._event ||
              (this._event = (e, t, n) => {
                let o;
                return (
                  this._callbacks || (this._callbacks = new r()),
                  this._options &&
                    this._options.onFirstListenerAdd &&
                    this._callbacks.isEmpty() &&
                    this._options.onFirstListenerAdd(this),
                  this._callbacks.add(e, t),
                  (o = {
                    dispose: () => {
                      this._callbacks.remove(e, t),
                        (o.dispose = i._noop),
                        this._options &&
                          this._options.onLastListenerRemove &&
                          this._callbacks.isEmpty() &&
                          this._options.onLastListenerRemove(this);
                    },
                  }),
                  Array.isArray(n) && n.push(o),
                  o
                );
              }),
            this._event
          );
        }
        fire(e) {
          this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
        }
        dispose() {
          this._callbacks &&
            (this._callbacks.dispose(), (this._callbacks = void 0));
        }
      }
      (i._noop = function () {}), (t.Emitter = i);
    },
    hde3: function (e, t, n) {
      'use strict';
      n.r(t),
        function (e) {
          var n,
            r = (function () {
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
                function r() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })();
          if ('object' === typeof e) n = 'win32' === e.platform;
          else if ('object' === typeof navigator) {
            var i = navigator.userAgent;
            n = i.indexOf('Windows') >= 0;
          }
          var o = /^\w[\w\d+.-]*$/,
            s = /^\//,
            a = /^\/\//;
          var u = '',
            c = '/',
            l = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
            d = (function () {
              function e(e, t, n, r, i) {
                'object' === typeof e
                  ? ((this.scheme = e.scheme || u),
                    (this.authority = e.authority || u),
                    (this.path = e.path || u),
                    (this.query = e.query || u),
                    (this.fragment = e.fragment || u))
                  : ((this.scheme = e || u),
                    (this.authority = t || u),
                    (this.path = (function (e, t) {
                      switch (e) {
                        case 'https':
                        case 'http':
                        case 'file':
                          t ? t[0] !== c && (t = c + t) : (t = c);
                      }
                      return t;
                    })(this.scheme, n || u)),
                    (this.query = r || u),
                    (this.fragment = i || u),
                    (function (e) {
                      if (e.scheme && !o.test(e.scheme))
                        throw new Error(
                          '[UriError]: Scheme contains illegal characters.'
                        );
                      if (e.path)
                        if (e.authority) {
                          if (!s.test(e.path))
                            throw new Error(
                              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                            );
                        } else if (a.test(e.path))
                          throw new Error(
                            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                          );
                    })(this));
              }
              return (
                (e.isUri = function (t) {
                  return (
                    t instanceof e ||
                    (!!t &&
                      'string' === typeof t.authority &&
                      'string' === typeof t.fragment &&
                      'string' === typeof t.path &&
                      'string' === typeof t.query &&
                      'string' === typeof t.scheme)
                  );
                }),
                Object.defineProperty(e.prototype, 'fsPath', {
                  get: function () {
                    return v(this);
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.with = function (e) {
                  if (!e) return this;
                  var t = e.scheme,
                    n = e.authority,
                    r = e.path,
                    i = e.query,
                    o = e.fragment;
                  return (
                    void 0 === t ? (t = this.scheme) : null === t && (t = u),
                    void 0 === n ? (n = this.authority) : null === n && (n = u),
                    void 0 === r ? (r = this.path) : null === r && (r = u),
                    void 0 === i ? (i = this.query) : null === i && (i = u),
                    void 0 === o ? (o = this.fragment) : null === o && (o = u),
                    t === this.scheme &&
                    n === this.authority &&
                    r === this.path &&
                    i === this.query &&
                    o === this.fragment
                      ? this
                      : new p(t, n, r, i, o)
                  );
                }),
                (e.parse = function (e) {
                  var t = l.exec(e);
                  return t
                    ? new p(
                        t[2] || u,
                        decodeURIComponent(t[4] || u),
                        decodeURIComponent(t[5] || u),
                        decodeURIComponent(t[7] || u),
                        decodeURIComponent(t[9] || u)
                      )
                    : new p(u, u, u, u, u);
                }),
                (e.file = function (e) {
                  var t = u;
                  if (
                    (n && (e = e.replace(/\\/g, c)), e[0] === c && e[1] === c)
                  ) {
                    var r = e.indexOf(c, 2);
                    -1 === r
                      ? ((t = e.substring(2)), (e = c))
                      : ((t = e.substring(2, r)), (e = e.substring(r) || c));
                  }
                  return new p('file', t, e, u, u);
                }),
                (e.from = function (e) {
                  return new p(
                    e.scheme,
                    e.authority,
                    e.path,
                    e.query,
                    e.fragment
                  );
                }),
                (e.prototype.toString = function (e) {
                  return void 0 === e && (e = !1), y(this, e);
                }),
                (e.prototype.toJSON = function () {
                  return this;
                }),
                (e.revive = function (t) {
                  if (t) {
                    if (t instanceof e) return t;
                    var n = new p(t);
                    return (
                      (n._fsPath = t.fsPath), (n._formatted = t.external), n
                    );
                  }
                  return t;
                }),
                e
              );
            })();
          t.default = d;
          var f,
            p = (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._formatted = null), (t._fsPath = null), t;
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, 'fsPath', {
                  get: function () {
                    return (
                      this._fsPath || (this._fsPath = v(this)), this._fsPath
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.toString = function (e) {
                  return (
                    void 0 === e && (e = !1),
                    e
                      ? y(this, !0)
                      : (this._formatted || (this._formatted = y(this, !1)),
                        this._formatted)
                  );
                }),
                (t.prototype.toJSON = function () {
                  var e = {
                    $mid: 1,
                  };
                  return (
                    this._fsPath && (e.fsPath = this._fsPath),
                    this._formatted && (e.external = this._formatted),
                    this.path && (e.path = this.path),
                    this.scheme && (e.scheme = this.scheme),
                    this.authority && (e.authority = this.authority),
                    this.query && (e.query = this.query),
                    this.fragment && (e.fragment = this.fragment),
                    e
                  );
                }),
                t
              );
            })(d),
            h =
              (((f = {})[58] = '%3A'),
              (f[47] = '%2F'),
              (f[63] = '%3F'),
              (f[35] = '%23'),
              (f[91] = '%5B'),
              (f[93] = '%5D'),
              (f[64] = '%40'),
              (f[33] = '%21'),
              (f[36] = '%24'),
              (f[38] = '%26'),
              (f[39] = '%27'),
              (f[40] = '%28'),
              (f[41] = '%29'),
              (f[42] = '%2A'),
              (f[43] = '%2B'),
              (f[44] = '%2C'),
              (f[59] = '%3B'),
              (f[61] = '%3D'),
              (f[32] = '%20'),
              f);

          function g(e, t) {
            for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
              var o = e.charCodeAt(i);
              if (
                (o >= 97 && o <= 122) ||
                (o >= 65 && o <= 90) ||
                (o >= 48 && o <= 57) ||
                45 === o ||
                46 === o ||
                95 === o ||
                126 === o ||
                (t && 47 === o)
              )
                -1 !== r &&
                  ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                  void 0 !== n && (n += e.charAt(i));
              else {
                void 0 === n && (n = e.substr(0, i));
                var s = h[o];
                void 0 !== s
                  ? (-1 !== r &&
                      ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                    (n += s))
                  : -1 === r && (r = i);
              }
            }
            return (
              -1 !== r && (n += encodeURIComponent(e.substring(r))),
              void 0 !== n ? n : e
            );
          }

          function m(e) {
            for (var t = void 0, n = 0; n < e.length; n++) {
              var r = e.charCodeAt(n);
              35 === r || 63 === r
                ? (void 0 === t && (t = e.substr(0, n)), (t += h[r]))
                : void 0 !== t && (t += e[n]);
            }
            return void 0 !== t ? t : e;
          }

          function v(e) {
            var t;
            return (
              (t =
                e.authority && e.path.length > 1 && 'file' === e.scheme
                  ? '//' + e.authority + e.path
                  : 47 === e.path.charCodeAt(0) &&
                    ((e.path.charCodeAt(1) >= 65 &&
                      e.path.charCodeAt(1) <= 90) ||
                      (e.path.charCodeAt(1) >= 97 &&
                        e.path.charCodeAt(1) <= 122)) &&
                    58 === e.path.charCodeAt(2)
                  ? e.path[1].toLowerCase() + e.path.substr(2)
                  : e.path),
              n && (t = t.replace(/\//g, '\\')),
              t
            );
          }

          function y(e, t) {
            var n = t ? m : g,
              r = '',
              i = e.scheme,
              o = e.authority,
              s = e.path,
              a = e.query,
              u = e.fragment;
            if (
              (i && ((r += i), (r += ':')),
              (o || 'file' === i) && ((r += c), (r += c)),
              o)
            ) {
              var l = o.indexOf('@');
              if (-1 !== l) {
                var d = o.substr(0, l);
                (o = o.substr(l + 1)),
                  -1 === (l = d.indexOf(':'))
                    ? (r += n(d, !1))
                    : ((r += n(d.substr(0, l), !1)),
                      (r += ':'),
                      (r += n(d.substr(l + 1), !1))),
                  (r += '@');
              }
              -1 === (l = (o = o.toLowerCase()).indexOf(':'))
                ? (r += n(o, !1))
                : ((r += n(o.substr(0, l), !1)), (r += o.substr(l)));
            }
            if (s) {
              if (
                s.length >= 3 &&
                47 === s.charCodeAt(0) &&
                58 === s.charCodeAt(2)
              )
                (f = s.charCodeAt(1)) >= 65 &&
                  f <= 90 &&
                  (s = '/' + String.fromCharCode(f + 32) + ':' + s.substr(3));
              else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
                var f;
                (f = s.charCodeAt(0)) >= 65 &&
                  f <= 90 &&
                  (s = String.fromCharCode(f + 32) + ':' + s.substr(2));
              }
              r += n(s, !0);
            }
            return (
              a && ((r += '?'), (r += n(a, !1))),
              u && ((r += '#'), (r += t ? u : g(u, !1))),
              r
            );
          }
        }.call(this, n('8oxB'));
    },
    k5Vz: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        const r = n('fIkx'),
          i = n('Gkij');
        let o = 'Content-Length: ',
          s = '\r\n';
        !(function (e) {
          e.is = function (e) {
            let t = e;
            return (
              t &&
              i.func(t.dispose) &&
              i.func(t.onClose) &&
              i.func(t.onError) &&
              i.func(t.write)
            );
          };
        })(t.MessageWriter || (t.MessageWriter = {}));
        class a {
          constructor() {
            (this.errorEmitter = new r.Emitter()),
              (this.closeEmitter = new r.Emitter());
          }
          dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose();
          }
          get onError() {
            return this.errorEmitter.event;
          }
          fireError(e, t, n) {
            this.errorEmitter.fire([this.asError(e), t, n]);
          }
          get onClose() {
            return this.closeEmitter.event;
          }
          fireClose() {
            this.closeEmitter.fire(void 0);
          }
          asError(e) {
            return e instanceof Error
              ? e
              : new Error(
                  `Writer recevied error. Reason: ${
                    i.string(e.message) ? e.message : 'unknown'
                  }`
                );
          }
        }
        t.AbstractMessageWriter = a;
        t.StreamMessageWriter = class extends a {
          constructor(e, t = 'utf8') {
            super(),
              (this.writable = e),
              (this.encoding = t),
              (this.errorCount = 0),
              this.writable.on('error', (e) => this.fireError(e)),
              this.writable.on('close', () => this.fireClose());
          }
          write(t) {
            let n = JSON.stringify(t),
              r = e.byteLength(n, this.encoding),
              i = [o, r.toString(), s, s];
            try {
              this.writable.write(i.join(''), 'ascii'),
                this.writable.write(n, this.encoding),
                (this.errorCount = 0);
            } catch (a) {
              this.errorCount++, this.fireError(a, t, this.errorCount);
            }
          }
        };
        t.IPCMessageWriter = class extends a {
          constructor(e) {
            super(),
              (this.process = e),
              (this.errorCount = 0),
              (this.queue = []),
              (this.sending = !1);
            let t = this.process;
            t.on('error', (e) => this.fireError(e)),
              t.on('close', () => this.fireClose);
          }
          write(e) {
            this.sending || 0 !== this.queue.length
              ? this.queue.push(e)
              : this.doWriteMessage(e);
          }
          doWriteMessage(e) {
            try {
              this.process.send &&
                ((this.sending = !0),
                this.process.send(e, void 0, void 0, (t) => {
                  (this.sending = !1),
                    t
                      ? (this.errorCount++,
                        this.fireError(t, e, this.errorCount))
                      : (this.errorCount = 0),
                    this.queue.length > 0 &&
                      this.doWriteMessage(this.queue.shift());
                }));
            } catch (t) {
              this.errorCount++, this.fireError(t, e, this.errorCount);
            }
          }
        };
        t.SocketMessageWriter = class extends a {
          constructor(e, t = 'utf8') {
            super(),
              (this.socket = e),
              (this.queue = []),
              (this.sending = !1),
              (this.encoding = t),
              (this.errorCount = 0),
              this.socket.on('error', (e) => this.fireError(e)),
              this.socket.on('close', () => this.fireClose());
          }
          write(e) {
            this.sending || 0 !== this.queue.length
              ? this.queue.push(e)
              : this.doWriteMessage(e);
          }
          doWriteMessage(t) {
            let n = JSON.stringify(t),
              r = e.byteLength(n, this.encoding),
              i = [o, r.toString(), s, s];
            try {
              (this.sending = !0),
                this.socket.write(i.join(''), 'ascii', (e) => {
                  e && this.handleError(e, t);
                  try {
                    this.socket.write(n, this.encoding, (e) => {
                      (this.sending = !1),
                        e ? this.handleError(e, t) : (this.errorCount = 0),
                        this.queue.length > 0 &&
                          this.doWriteMessage(this.queue.shift());
                    });
                  } catch (e) {
                    this.handleError(e, t);
                  }
                });
            } catch (a) {
              this.handleError(a, t);
            }
          }
          handleError(e, t) {
            this.errorCount++, this.fireError(e, t, this.errorCount);
          }
        };
      }.call(this, n('HDXh').Buffer));
    },
    oL6p: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('Gz0x');
      t.Disposable = r.Disposable;
      var i = (function () {
        function e() {
          this.disposables = [];
        }
        return (
          (e.prototype.dispose = function () {
            for (; 0 !== this.disposables.length; )
              this.disposables.pop().dispose();
          }),
          (e.prototype.push = function (e) {
            var t = this.disposables;
            return (
              t.push(e),
              {
                dispose: function () {
                  var n = t.indexOf(e);
                  -1 !== n && t.splice(n, 1);
                },
              }
            );
          }),
          e
        );
      })();
      t.DisposableCollection = i;
    },
    owkM: function (e, t, n) {
      'use strict';

      function r(e) {
        return 'string' === typeof e || e instanceof String;
      }

      function i(e) {
        return 'function' === typeof e;
      }

      function o(e) {
        return Array.isArray(e);
      }
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.boolean = function (e) {
          return !0 === e || !1 === e;
        }),
        (t.string = r),
        (t.number = function (e) {
          return 'number' === typeof e || e instanceof Number;
        }),
        (t.error = function (e) {
          return e instanceof Error;
        }),
        (t.func = i),
        (t.array = o),
        (t.stringArray = function (e) {
          return (
            o(e) &&
            e.every(function (e) {
              return r(e);
            })
          );
        }),
        (t.typedArray = function (e, t) {
          return Array.isArray(e) && e.every(t);
        }),
        (t.thenable = function (e) {
          return e && i(e.then);
        });
    },
    qL5x: function (e, t, n) {
      'use strict';
      (function (e) {
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
        var r = n('tpqs'),
          i = n('PENG'),
          o = n('HEbw'),
          s = n('RUQ2'),
          a = n('uWpP'),
          u = n('vIUA');
        (t.generateRandomPipeName = function () {
          var t = o.randomBytes(21).toString('hex');
          return 'win32' === e.platform
            ? '\\\\.\\pipe\\vscode-jsonrpc-' + t + '-sock'
            : r.join(i.tmpdir(), 'vscode-' + t + '.sock');
        }),
          (t.createClientPipeTransport = function (e, t) {
            var n;
            void 0 === t && (t = 'utf-8');
            var r = new Promise(function (e, t) {
              n = e;
            });
            return new Promise(function (i, o) {
              var c = s.createServer(function (e) {
                c.close(),
                  n([
                    new a.SocketMessageReader(e, t),
                    new u.SocketMessageWriter(e, t),
                  ]);
              });
              c.on('error', o),
                c.listen(e, function () {
                  c.removeListener('error', o),
                    i({
                      onConnected: function () {
                        return r;
                      },
                    });
                });
            });
          }),
          (t.createServerPipeTransport = function (e, t) {
            void 0 === t && (t = 'utf-8');
            var n = s.createConnection(e);
            return [
              new a.SocketMessageReader(n, t),
              new u.SocketMessageWriter(n, t),
            ];
          });
      }.call(this, n('8oxB')));
    },
    sKb1: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('MOv1');
      !(function (e) {
        e.type = new r.RequestType('workspace/configuration');
      })(t.ConfigurationRequest || (t.ConfigurationRequest = {}));
    },
    uUC1: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      const r = n('RUQ2'),
        i = n('K4MX'),
        o = n('k5Vz');
      (t.createClientSocketTransport = function (e, t = 'utf-8') {
        let n,
          s = new Promise((e, t) => {
            n = e;
          });
        return new Promise((a, u) => {
          let c = r.createServer((e) => {
            c.close(),
              n([
                new i.SocketMessageReader(e, t),
                new o.SocketMessageWriter(e, t),
              ]);
          });
          c.on('error', u),
            c.listen(e, '127.0.0.1', () => {
              c.removeListener('error', u),
                a({
                  onConnected: () => s,
                });
            });
        });
      }),
        (t.createServerSocketTransport = function (e, t = 'utf-8') {
          const n = r.createConnection(e, '127.0.0.1');
          return [
            new i.SocketMessageReader(n, t),
            new o.SocketMessageWriter(n, t),
          ];
        });
    },
    uoVZ: function (e, t, n) {
      'use strict';
      var r = n('DFRf'),
        i = n('Gz0x');
      e.exports = r.createVSCodeApi(i.Services.get);
    },
    wSv1: function (e, t, n) {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (function (e) {
          (e.None = 0), (e.First = 1), (e.Last = 2);
        })((r = t.Touch || (t.Touch = {})));
      t.LinkedMap = class {
        constructor() {
          (this._map = new Map()),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        clear() {
          this._map.clear(),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        isEmpty() {
          return !this._head && !this._tail;
        }
        get size() {
          return this._size;
        }
        has(e) {
          return this._map.has(e);
        }
        get(e) {
          const t = this._map.get(e);
          if (t) return t.value;
        }
        set(e, t, n = r.None) {
          let i = this._map.get(e);
          if (i) (i.value = t), n !== r.None && this.touch(i, n);
          else {
            switch (
              ((i = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0,
              }),
              n)
            ) {
              case r.None:
                this.addItemLast(i);
                break;
              case r.First:
                this.addItemFirst(i);
                break;
              case r.Last:
              default:
                this.addItemLast(i);
            }
            this._map.set(e, i), this._size++;
          }
        }
        delete(e) {
          const t = this._map.get(e);
          return (
            !!t && (this._map.delete(e), this.removeItem(t), this._size--, !0)
          );
        }
        shift() {
          if (!this._head && !this._tail) return;
          if (!this._head || !this._tail) throw new Error('Invalid list');
          const e = this._head;
          return (
            this._map.delete(e.key), this.removeItem(e), this._size--, e.value
          );
        }
        forEach(e, t) {
          let n = this._head;
          for (; n; )
            t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
              (n = n.next);
        }
        forEachReverse(e, t) {
          let n = this._tail;
          for (; n; )
            t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
              (n = n.previous);
        }
        values() {
          let e = [],
            t = this._head;
          for (; t; ) e.push(t.value), (t = t.next);
          return e;
        }
        keys() {
          let e = [],
            t = this._head;
          for (; t; ) e.push(t.key), (t = t.next);
          return e;
        }
        addItemFirst(e) {
          if (this._head || this._tail) {
            if (!this._head) throw new Error('Invalid list');
            (e.next = this._head), (this._head.previous = e);
          } else this._tail = e;
          this._head = e;
        }
        addItemLast(e) {
          if (this._head || this._tail) {
            if (!this._tail) throw new Error('Invalid list');
            (e.previous = this._tail), (this._tail.next = e);
          } else this._head = e;
          this._tail = e;
        }
        removeItem(e) {
          if (e === this._head && e === this._tail)
            (this._head = void 0), (this._tail = void 0);
          else if (e === this._head) this._head = e.next;
          else if (e === this._tail) this._tail = e.previous;
          else {
            const t = e.next,
              n = e.previous;
            if (!t || !n) throw new Error('Invalid list');
            (t.previous = n), (n.next = t);
          }
        }
        touch(e, t) {
          if (!this._head || !this._tail) throw new Error('Invalid list');
          if (t === r.First || t === r.Last)
            if (t === r.First) {
              if (e === this._head) return;
              const t = e.next,
                n = e.previous;
              e === this._tail
                ? ((n.next = void 0), (this._tail = n))
                : ((t.previous = n), (n.next = t)),
                (e.previous = void 0),
                (e.next = this._head),
                (this._head.previous = e),
                (this._head = e);
            } else if (t === r.Last) {
              if (e === this._tail) return;
              const t = e.next,
                n = e.previous;
              e === this._head
                ? ((t.previous = void 0), (this._head = t))
                : ((t.previous = n), (n.next = t)),
                (e.next = void 0),
                (e.previous = this._tail),
                (this._tail.next = e),
                (this._tail = e);
            }
        }
      };
    },
    zZpG: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var r = n('MOv1');
      !(function (e) {
        e.type = new r.RequestType('textDocument/documentColor');
      })(t.DocumentColorRequest || (t.DocumentColorRequest = {})),
        (function (e) {
          e.type = new r.RequestType('textDocument/colorPresentation');
        })(t.ColorPresentationRequest || (t.ColorPresentationRequest = {}));
    },
  },
]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687.359385944d896774ff1f.js.map

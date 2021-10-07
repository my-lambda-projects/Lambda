(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    Hdnm: function (e, t, r) {
      'use strict';

      function n(e) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }

      function i(e) {
        return (
          null !== e &&
          'object' === n(e) &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
      r.d(t, 'a', function () {
        return i;
      });
    },
    Jk9P: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return a;
      });
      var n = r('aKzv');

      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var o = !1,
        a = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, r, a;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'canDrop',
                value: function () {
                  if (!this.targetId) return !1;
                  Object(n.a)(
                    !o,
                    'You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor'
                  );
                  try {
                    return (
                      (o = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    o = !1;
                  }
                },
              },
              {
                key: 'isOver',
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && i(t.prototype, r),
            a && i(t, a),
            e
          );
        })();
    },
    JpUf: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return a;
      });
      var n = r('aKzv'),
        i = r('q1tI');

      function o(e) {
        if ('string' !== typeof e.type) {
          var t = e.type.displayName || e.type.name || 'the component';
          throw new Error(
            'Only native element nodes can now be passed to React DnD connectors.' +
              'You can either wrap '.concat(
                t,
                ' into a <div>, or turn it into a '
              ) +
              'drag source or a drop target itself.'
          );
        }
      }

      function a(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (r) {
            var n = e[r];
            if (r.endsWith('Ref')) t[r] = e[r];
            else {
              var a = (function (e) {
                return function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (!Object(i.isValidElement)(t)) {
                    var n = t;
                    return e(n, r), n;
                  }
                  var a = t;
                  return (
                    o(a),
                    c(
                      a,
                      r
                        ? function (t) {
                            return e(t, r);
                          }
                        : e
                    )
                  );
                };
              })(n);
              t[r] = function () {
                return a;
              };
            }
          }),
          t
        );
      }

      function u(e, t) {
        'function' === typeof e ? e(t) : (e.current = t);
      }

      function c(e, t) {
        var r = e.ref;
        return (
          Object(n.a)(
            'string' !== typeof r,
            'Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs'
          ),
          r
            ? Object(i.cloneElement)(e, {
                ref: function (e) {
                  u(r, e), u(t, e);
                },
              })
            : Object(i.cloneElement)(e, {
                ref: t,
              })
        );
      }
    },
    UhZW: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return u;
      });
      var n = r('khz9'),
        i = r('JpUf'),
        o = r('Hdnm');

      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var u = (function () {
        function e(t) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = Object(i.a)({
              dropTarget: function (e, t) {
                r.clearDropTarget(),
                  (r.dropTargetOptions = t),
                  Object(o.a)(e)
                    ? (r.dropTargetRef = e)
                    : (r.dropTargetNode = e),
                  r.reconnect();
              },
            })),
            (this.handlerId = null),
            (this.dropTargetRef = null),
            (this.dropTargetOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDropTarget = null),
            (this.lastConnectedDropTargetOptions = null),
            (this.backend = t);
        }
        var t, r, u;
        return (
          (t = e),
          (r = [
            {
              key: 'connectTarget',
              get: function () {
                return this.dropTarget;
              },
            },
            {
              key: 'reconnect',
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                this.handlerId &&
                  (t
                    ? e &&
                      ((this.lastConnectedHandlerId = this.handlerId),
                      (this.lastConnectedDropTarget = t),
                      (this.lastConnectedDropTargetOptions =
                        this.dropTargetOptions),
                      (this.unsubscribeDropTarget =
                        this.backend.connectDropTarget(
                          this.handlerId,
                          t,
                          this.dropTargetOptions
                        )))
                    : (this.lastConnectedDropTarget = t));
              },
            },
            {
              key: 'receiveHandlerId',
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'dropTargetOptions',
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didDropTargetChange',
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              },
            },
            {
              key: 'didOptionsChange',
              value: function () {
                return !Object(n.a)(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions
                );
              },
            },
            {
              key: 'disconnectDropTarget',
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              },
            },
            {
              key: 'dropTarget',
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
            },
            {
              key: 'clearDropTarget',
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              },
            },
          ]) && a(t.prototype, r),
          u && a(t, u),
          e
        );
      })();
    },
    aKzv: function (e, t, r) {
      'use strict';

      function n(e, t) {
        for (
          var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          n[i - 2] = arguments[i];
        if (!e) {
          var o;
          if (void 0 === t)
            o = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var a = 0;
            (o = new Error(
              t.replace(/%s/g, function () {
                return n[a++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((o.framesToPop = 1), o);
        }
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
    b7DX: function (e, t, r) {
      'use strict';
      (function (e) {
        function n(e) {
          o.length || (i(), !0), (o[o.length] = e);
        }
        r.d(t, 'a', function () {
          return n;
        });
        var i,
          o = [],
          a = 0;

        function u() {
          for (; a < o.length; ) {
            var e = a;
            if (((a += 1), o[e].call(), a > 1024)) {
              for (var t = 0, r = o.length - a; t < r; t++) o[t] = o[t + a];
              (o.length -= a), (a = 0);
            }
          }
          (o.length = 0), (a = 0), !1;
        }
        var c = 'undefined' !== typeof e ? e : self,
          s = c.MutationObserver || c.WebKitMutationObserver;

        function l(e) {
          return function () {
            var t = setTimeout(n, 0),
              r = setInterval(n, 50);

            function n() {
              clearTimeout(t), clearInterval(r), e();
            }
          };
        }
        (i =
          'function' === typeof s
            ? (function (e) {
                var t = 1,
                  r = new s(e),
                  n = document.createTextNode('');
                return (
                  r.observe(n, {
                    characterData: !0,
                  }),
                  function () {
                    (t = -t), (n.data = t);
                  }
                );
              })(u)
            : l(u)),
          (n.requestFlush = i),
          (n.makeRequestCallFromTimer = l);
      }.call(this, r('ntbh')));
    },
    cwzq: function (e, t, r) {
      'use strict';

      function n(e, t, r) {
        var n = r.getRegistry(),
          i = n.addTarget(e, t);
        return [
          i,
          function () {
            return n.removeTarget(i);
          },
        ];
      }

      function i(e, t, r) {
        var n = r.getRegistry(),
          i = n.addSource(e, t);
        return [
          i,
          function () {
            return n.removeSource(i);
          },
        ];
      }
      r.d(t, 'b', function () {
        return n;
      }),
        r.d(t, 'a', function () {
          return i;
        });
    },
    'd/lI': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return u;
      });
      var n = r('JpUf'),
        i = r('Hdnm'),
        o = r('khz9');

      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var u = (function () {
        function e(t) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.hooks = Object(n.a)({
              dragSource: function (e, t) {
                r.clearDragSource(),
                  (r.dragSourceOptions = t || null),
                  Object(i.a)(e)
                    ? (r.dragSourceRef = e)
                    : (r.dragSourceNode = e),
                  r.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                r.clearDragPreview(),
                  (r.dragPreviewOptions = t || null),
                  Object(i.a)(e)
                    ? (r.dragPreviewRef = e)
                    : (r.dragPreviewNode = e),
                  r.reconnectDragPreview();
              },
            })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = t);
        }
        var t, r, u;
        return (
          (t = e),
          (r = [
            {
              key: 'receiveHandlerId',
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: 'connectTarget',
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: 'dragSourceOptions',
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: 'dragPreviewOptions',
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: 'reconnect',
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              },
            },
            {
              key: 'reconnectDragSource',
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                t && this.disconnectDragSource(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragSource = e),
                        (this.lastConnectedDragSourceOptions =
                          this.dragSourceOptions),
                        (this.dragSourceUnsubscribe =
                          this.backend.connectDragSource(
                            this.handlerId,
                            e,
                            this.dragSourceOptions
                          )))
                      : (this.lastConnectedDragSource = e));
              },
            },
            {
              key: 'reconnectDragPreview',
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                t && this.disconnectDragPreview(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragPreview = e),
                        (this.lastConnectedDragPreviewOptions =
                          this.dragPreviewOptions),
                        (this.dragPreviewUnsubscribe =
                          this.backend.connectDragPreview(
                            this.handlerId,
                            e,
                            this.dragPreviewOptions
                          )))
                      : (this.lastConnectedDragPreview = e));
              },
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: 'didConnectedDragSourceChange',
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: 'didConnectedDragPreviewChange',
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: 'didDragSourceOptionsChange',
              value: function () {
                return !Object(o.a)(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions
                );
              },
            },
            {
              key: 'didDragPreviewOptionsChange',
              value: function () {
                return !Object(o.a)(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions
                );
              },
            },
            {
              key: 'disconnectDragSource',
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: 'disconnectDragPreview',
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: 'dragSource',
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: 'dragPreview',
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
            {
              key: 'clearDragSource',
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: 'clearDragPreview',
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
          ]) && a(t.prototype, r),
          u && a(t, u),
          e
        );
      })();
    },
    khz9: function (e, t, r) {
      'use strict';

      function n(e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var o = Object.keys(e),
          a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < o.length;
          c++
        ) {
          var s = o[c];
          if (!u(s)) return !1;
          var l = e[s],
            f = t[s];
          if (
            !1 === (i = r ? r.call(n, l, f, s) : void 0) ||
            (void 0 === i && l !== f)
          )
            return !1;
        }
        return !0;
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
    m68W: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return u;
      });
      var n = r('aKzv');

      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var o = !1,
        a = !1,
        u = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourceId = null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, r, u;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: 'canDrag',
                value: function () {
                  Object(n.a)(
                    !o,
                    'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor'
                  );
                  try {
                    return (
                      (o = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    o = !1;
                  }
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  if (!this.sourceId) return !1;
                  Object(n.a)(
                    !a,
                    'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor'
                  );
                  try {
                    return (
                      (a = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    a = !1;
                  }
                },
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: 'isOverTarget',
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]) && i(t.prototype, r),
            u && i(t, u),
            e
          );
        })();
    },
    'p/5y': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return i;
      });
      var n = r('q1tI'),
        i = Object(n.createContext)({
          dragDropManager: void 0,
        });
    },
    qJlv: function (e, t, r) {
      'use strict';
      r.d(t, 'b', function () {
        return n;
      }),
        r.d(t, 'a', function () {
          return N;
        });
      var n = {};

      function i(e) {
        var t = null;
        return function () {
          return null == t && (t = e()), t;
        };
      }

      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      r.r(n),
        r.d(n, 'FILE', function () {
          return v;
        }),
        r.d(n, 'URL', function () {
          return p;
        }),
        r.d(n, 'TEXT', function () {
          return y;
        });
      var a = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.entered = []),
              (this.isNodeInDocument = t);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'enter',
                value: function (e) {
                  var t = this,
                    r = this.entered.length;
                  return (
                    (this.entered = (function (e, t) {
                      var r = new Set(),
                        n = function (e) {
                          return r.add(e);
                        };
                      e.forEach(n), t.forEach(n);
                      var i = [];
                      return (
                        r.forEach(function (e) {
                          return i.push(e);
                        }),
                        i
                      );
                    })(
                      this.entered.filter(function (r) {
                        return (
                          t.isNodeInDocument(r) &&
                          (!r.contains || r.contains(e))
                        );
                      }),
                      [e]
                    )),
                    0 === r && this.entered.length > 0
                  );
                },
              },
              {
                key: 'leave',
                value: function (e) {
                  var t,
                    r,
                    n = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(this.isNodeInDocument)),
                      (r = e),
                      t.filter(function (e) {
                        return e !== r;
                      }))),
                    n > 0 && 0 === this.entered.length
                  );
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.entered = [];
                },
              },
            ]) && o(t.prototype, r),
            n && o(t, n),
            e
          );
        })(),
        u = i(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        c = i(function () {
          return Boolean(window.safari);
        });

      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var l = (function () {
        function e(t, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          for (var n = t.length, i = [], o = 0; o < n; o++) i.push(o);
          i.sort(function (e, r) {
            return t[e] < t[r] ? -1 : 1;
          });
          for (var a, u, c = [], s = [], l = [], f = 0; f < n - 1; f++)
            (a = t[f + 1] - t[f]),
              (u = r[f + 1] - r[f]),
              s.push(a),
              c.push(u),
              l.push(u / a);
          for (var d = [l[0]], g = 0; g < s.length - 1; g++) {
            var h = l[g],
              v = l[g + 1];
            if (h * v <= 0) d.push(0);
            else {
              a = s[g];
              var p = s[g + 1],
                y = a + p;
              d.push((3 * y) / ((y + p) / h + (y + a) / v));
            }
          }
          d.push(l[l.length - 1]);
          for (var b, O = [], m = [], D = 0; D < d.length - 1; D++) {
            b = l[D];
            var w = d[D],
              S = 1 / s[D],
              T = w + d[D + 1] - b - b;
            O.push((b - w - T) * S), m.push(T * S * S);
          }
          (this.xs = t),
            (this.ys = r),
            (this.c1s = d),
            (this.c2s = O),
            (this.c3s = m);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'interpolate',
              value: function (e) {
                var t = this.xs,
                  r = this.ys,
                  n = this.c1s,
                  i = this.c2s,
                  o = this.c3s,
                  a = t.length - 1;
                if (e === t[a]) return r[a];
                for (var u, c = 0, s = o.length - 1; c <= s; ) {
                  var l = t[(u = Math.floor(0.5 * (c + s)))];
                  if (l < e) c = u + 1;
                  else {
                    if (!(l > e)) return r[u];
                    s = u - 1;
                  }
                }
                var f = e - t[(a = Math.max(0, s))],
                  d = f * f;
                return r[a] + n[a] * f + i[a] * d + o[a] * f * d;
              },
            },
          ]) && s(t.prototype, r),
          n && s(t, n),
          e
        );
      })();

      function f(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var r = t.getBoundingClientRect(),
          n = r.top;
        return {
          x: r.left,
          y: n,
        };
      }

      function d(e) {
        return {
          x: e.clientX,
          y: e.clientY,
        };
      }

      function g(e, t, r, n, i) {
        var o = (function (e) {
            var t;
            return (
              'IMG' === e.nodeName &&
              (u() ||
                !(null === (t = document.documentElement) || void 0 === t
                  ? void 0
                  : t.contains(e)))
            );
          })(t),
          a = f(o ? e : t),
          s = {
            x: r.x - a.x,
            y: r.y - a.y,
          },
          d = e.offsetWidth,
          g = e.offsetHeight,
          h = n.anchorX,
          v = n.anchorY,
          p = (function (e, t, r, n) {
            var i = e ? t.width : r,
              o = e ? t.height : n;
            return (
              c() &&
                e &&
                ((o /= window.devicePixelRatio),
                (i /= window.devicePixelRatio)),
              {
                dragPreviewWidth: i,
                dragPreviewHeight: o,
              }
            );
          })(o, t, d, g),
          y = p.dragPreviewWidth,
          b = p.dragPreviewHeight,
          O = i.offsetX,
          m = i.offsetY,
          D = 0 === m || m;
        return {
          x:
            0 === O || O
              ? O
              : new l(
                  [0, 0.5, 1],
                  [s.x, (s.x / d) * y, s.x + y - d]
                ).interpolate(h),
          y: D
            ? m
            : (function () {
                var e = new l(
                  [0, 0.5, 1],
                  [s.y, (s.y / g) * b, s.y + b - g]
                ).interpolate(v);
                return c() && o && (e += (window.devicePixelRatio - 1) * b), e;
              })(),
        };
      }
      var h,
        v = '__NATIVE_FILE__',
        p = '__NATIVE_URL__',
        y = '__NATIVE_TEXT__';

      function b(e, t, r) {
        var n = t.reduce(function (t, r) {
          return t || e.getData(r);
        }, '');
        return null != n ? n : r;
      }

      function O(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var m =
        (O((h = {}), v, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ['Files'],
        }),
        O(h, p, {
          exposeProperties: {
            urls: function (e, t) {
              return b(e, t, '').split('\n');
            },
          },
          matchesTypes: ['Url', 'text/uri-list'],
        }),
        O(h, y, {
          exposeProperties: {
            text: function (e, t) {
              return b(e, t, '');
            },
          },
          matchesTypes: ['Text', 'text/plain'],
        }),
        h);

      function D(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var w = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.config = t),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'initializeExposedProperties',
              value: function () {
                var e = this;
                Object.keys(this.config.exposeProperties).forEach(function (t) {
                  Object.defineProperty(e.item, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return (
                        console.warn(
                          'Browser doesn\'t allow reading "'.concat(
                            t,
                            '" until the drop event.'
                          )
                        ),
                        null
                      );
                    },
                  });
                });
              },
            },
            {
              key: 'loadDataTransfer',
              value: function (e) {
                var t = this;
                if (e) {
                  var r = {};
                  Object.keys(this.config.exposeProperties).forEach(function (
                    n
                  ) {
                    r[n] = {
                      value: t.config.exposeProperties[n](
                        e,
                        t.config.matchesTypes
                      ),
                      configurable: !0,
                      enumerable: !0,
                    };
                  }),
                    Object.defineProperties(this.item, r);
                }
              },
            },
            {
              key: 'canDrag',
              value: function () {
                return !0;
              },
            },
            {
              key: 'beginDrag',
              value: function () {
                return this.item;
              },
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                return t === e.getSourceId();
              },
            },
            {
              key: 'endDrag',
              value: function () {},
            },
          ]) && D(t.prototype, r),
          n && D(t, n),
          e
        );
      })();

      function S(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(m).filter(function (e) {
            return m[e].matchesTypes.some(function (e) {
              return t.indexOf(e) > -1;
            });
          })[0] || null
        );
      }

      function T(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var I = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.globalContext = t);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'window',
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : 'undefined' !== typeof window
                  ? window
                  : void 0;
              },
            },
            {
              key: 'document',
              get: function () {
                if (this.window) return this.window.document;
              },
            },
          ]) && T(t.prototype, r),
          n && T(t, n),
          e
        );
      })();

      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                C(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function C(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }

      function P(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var j = (function () {
          function e(t, r) {
            var n = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.sourceNodes = new Map()),
              (this.sourceNodeOptions = new Map()),
              (this.dragStartSourceIds = null),
              (this.dropTargetIds = []),
              (this.dragEnterTargetIds = []),
              (this.currentNativeSource = null),
              (this.currentNativeHandle = null),
              (this.currentDragSourceNode = null),
              (this.altKeyPressed = !1),
              (this.mouseMoveTimeoutTimer = null),
              (this.asyncEndDragFrameId = null),
              (this.dragOverTargetIds = null),
              (this.getSourceClientOffset = function (e) {
                var t = n.sourceNodes.get(e);
                return (t && f(t)) || null;
              }),
              (this.endDragNativeItem = function () {
                n.isDraggingNativeItem() &&
                  (n.actions.endDrag(),
                  n.currentNativeHandle &&
                    n.registry.removeSource(n.currentNativeHandle),
                  (n.currentNativeHandle = null),
                  (n.currentNativeSource = null));
              }),
              (this.isNodeInDocument = function (e) {
                return Boolean(
                  e &&
                    n.document &&
                    n.document.body &&
                    document.body.contains(e)
                );
              }),
              (this.endDragIfSourceWasRemovedFromDOM = function () {
                var e = n.currentDragSourceNode;
                n.isNodeInDocument(e) ||
                  (n.clearCurrentDragSourceNode() && n.actions.endDrag());
              }),
              (this.handleTopDragStartCapture = function () {
                n.clearCurrentDragSourceNode(), (n.dragStartSourceIds = []);
              }),
              (this.handleTopDragStart = function (e) {
                if (!e.defaultPrevented) {
                  var t = n.dragStartSourceIds;
                  n.dragStartSourceIds = null;
                  var r = d(e);
                  n.monitor.isDragging() && n.actions.endDrag(),
                    n.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: n.getSourceClientOffset,
                      clientOffset: r,
                    });
                  var i = e.dataTransfer,
                    o = S(i);
                  if (n.monitor.isDragging()) {
                    if (i && 'function' === typeof i.setDragImage) {
                      var a = n.monitor.getSourceId(),
                        u = n.sourceNodes.get(a),
                        c = n.sourcePreviewNodes.get(a) || u;
                      if (c) {
                        var s = n.getCurrentSourcePreviewNodeOptions(),
                          l = g(
                            u,
                            c,
                            r,
                            {
                              anchorX: s.anchorX,
                              anchorY: s.anchorY,
                            },
                            {
                              offsetX: s.offsetX,
                              offsetY: s.offsetY,
                            }
                          );
                        i.setDragImage(c, l.x, l.y);
                      }
                    }
                    try {
                      null === i ||
                        void 0 === i ||
                        i.setData('application/json', {});
                    } catch (f) {}
                    n.setCurrentDragSourceNode(e.target),
                      n.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState
                        ? n.actions.publishDragSource()
                        : setTimeout(function () {
                            return n.actions.publishDragSource();
                          }, 0);
                  } else if (o) n.beginDragNativeItem(o);
                  else {
                    if (
                      i &&
                      !i.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute('draggable'))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              (this.handleTopDragEndCapture = function () {
                n.clearCurrentDragSourceNode() && n.actions.endDrag();
              }),
              (this.handleTopDragEnterCapture = function (e) {
                if (
                  ((n.dragEnterTargetIds = []),
                  n.enterLeaveCounter.enter(e.target) &&
                    !n.monitor.isDragging())
                ) {
                  var t = e.dataTransfer,
                    r = S(t);
                  r && n.beginDragNativeItem(r, t);
                }
              }),
              (this.handleTopDragEnter = function (e) {
                var t = n.dragEnterTargetIds;
                ((n.dragEnterTargetIds = []), n.monitor.isDragging()) &&
                  ((n.altKeyPressed = e.altKey),
                  u() ||
                    n.actions.hover(t, {
                      clientOffset: d(e),
                    }),
                  t.some(function (e) {
                    return n.monitor.canDropOnTarget(e);
                  }) &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = n.getCurrentDropEffect())));
              }),
              (this.handleTopDragOverCapture = function () {
                n.dragOverTargetIds = [];
              }),
              (this.handleTopDragOver = function (e) {
                var t = n.dragOverTargetIds;
                if (((n.dragOverTargetIds = []), !n.monitor.isDragging()))
                  return (
                    e.preventDefault(),
                    void (
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none')
                    )
                  );
                (n.altKeyPressed = e.altKey),
                  n.actions.hover(t || [], {
                    clientOffset: d(e),
                  }),
                  (t || []).some(function (e) {
                    return n.monitor.canDropOnTarget(e);
                  })
                    ? (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect = n.getCurrentDropEffect()))
                    : n.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
              }),
              (this.handleTopDragLeaveCapture = function (e) {
                n.isDraggingNativeItem() && e.preventDefault(),
                  n.enterLeaveCounter.leave(e.target) &&
                    n.isDraggingNativeItem() &&
                    n.endDragNativeItem();
              }),
              (this.handleTopDropCapture = function (e) {
                var t;
                ((n.dropTargetIds = []),
                e.preventDefault(),
                n.isDraggingNativeItem()) &&
                  (null === (t = n.currentNativeSource) ||
                    void 0 === t ||
                    t.loadDataTransfer(e.dataTransfer));
                n.enterLeaveCounter.reset();
              }),
              (this.handleTopDrop = function (e) {
                var t = n.dropTargetIds;
                (n.dropTargetIds = []),
                  n.actions.hover(t, {
                    clientOffset: d(e),
                  }),
                  n.actions.drop({
                    dropEffect: n.getCurrentDropEffect(),
                  }),
                  n.isDraggingNativeItem()
                    ? n.endDragNativeItem()
                    : n.endDragIfSourceWasRemovedFromDOM();
              }),
              (this.handleSelectStart = function (e) {
                var t = e.target;
                'function' === typeof t.dragDrop &&
                  ('INPUT' === t.tagName ||
                    'SELECT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new I(r)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.registry = t.getRegistry()),
              (this.enterLeaveCounter = new a(this.isNodeInDocument));
          }
          var t, r, i;
          return (
            (t = e),
            (r = [
              {
                key: 'profile',
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions:
                      this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null === (e = this.dragStartSourceIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null === (t = this.dragOverTargetIds) || void 0 === t
                        ? void 0
                        : t.length) || 0,
                  };
                },
              },
              {
                key: 'setup',
                value: function () {
                  if (void 0 !== this.window) {
                    if (this.window.__isReactDndBackendSetUp)
                      throw new Error(
                        'Cannot have two HTML5 backends at the same time.'
                      );
                    (this.window.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(this.window);
                  }
                },
              },
              {
                key: 'teardown',
                value: function () {
                  void 0 !== this.window &&
                    ((this.window.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.window),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      this.window.cancelAnimationFrame(
                        this.asyncEndDragFrameId
                      ));
                },
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, r) {
                  var n = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, r),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      n.sourcePreviewNodes.delete(e),
                        n.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: 'connectDragSource',
                value: function (e, t, r) {
                  var n = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);
                  var i = function (t) {
                      return n.handleDragStart(t, e);
                    },
                    o = function (e) {
                      return n.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute('draggable', 'true'),
                    t.addEventListener('dragstart', i),
                    t.addEventListener('selectstart', o),
                    function () {
                      n.sourceNodes.delete(e),
                        n.sourceNodeOptions.delete(e),
                        t.removeEventListener('dragstart', i),
                        t.removeEventListener('selectstart', o),
                        t.setAttribute('draggable', 'false');
                    }
                  );
                },
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var r = this,
                    n = function (t) {
                      return r.handleDragEnter(t, e);
                    },
                    i = function (t) {
                      return r.handleDragOver(t, e);
                    },
                    o = function (t) {
                      return r.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener('dragenter', n),
                    t.addEventListener('dragover', i),
                    t.addEventListener('drop', o),
                    function () {
                      t.removeEventListener('dragenter', n),
                        t.removeEventListener('dragover', i),
                        t.removeEventListener('drop', o);
                    }
                  );
                },
              },
              {
                key: 'addEventListeners',
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener('dragstart', this.handleTopDragStart),
                    e.addEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0
                    ),
                    e.addEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0
                    ),
                    e.addEventListener('dragenter', this.handleTopDragEnter),
                    e.addEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0
                    ),
                    e.addEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0
                    ),
                    e.addEventListener('dragover', this.handleTopDragOver),
                    e.addEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0
                    ),
                    e.addEventListener('drop', this.handleTopDrop),
                    e.addEventListener('drop', this.handleTopDropCapture, !0));
                },
              },
              {
                key: 'removeEventListeners',
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStart
                    ),
                    e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0
                    ),
                    e.removeEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0
                    ),
                    e.removeEventListener('dragenter', this.handleTopDragEnter),
                    e.removeEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0
                    ),
                    e.removeEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0
                    ),
                    e.removeEventListener('dragover', this.handleTopDragOver),
                    e.removeEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0
                    ),
                    e.removeEventListener('drop', this.handleTopDrop),
                    e.removeEventListener(
                      'drop',
                      this.handleTopDropCapture,
                      !0
                    ));
                },
              },
              {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return k(
                    {
                      dropEffect: this.altKeyPressed ? 'copy' : 'move',
                    },
                    t || {}
                  );
                },
              },
              {
                key: 'getCurrentDropEffect',
                value: function () {
                  return this.isDraggingNativeItem()
                    ? 'copy'
                    : this.getCurrentSourceNodeOptions().dropEffect;
                },
              },
              {
                key: 'getCurrentSourcePreviewNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId();
                  return k(
                    {
                      anchorX: 0.5,
                      anchorY: 0.5,
                      captureDraggingState: !1,
                    },
                    this.sourcePreviewNodeOptions.get(e) || {}
                  );
                },
              },
              {
                key: 'isDraggingNativeItem',
                value: function () {
                  var e = this.monitor.getItemType();
                  return Object.keys(n).some(function (t) {
                    return n[t] === e;
                  });
                },
              },
              {
                key: 'beginDragNativeItem',
                value: function (e, t) {
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource = (function (e, t) {
                      var r = new w(m[e]);
                      return r.loadDataTransfer(t), r;
                    })(e, t)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                },
              },
              {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e),
                    (this.mouseMoveTimeoutTimer = setTimeout(function () {
                      return (
                        t.window &&
                        t.window.addEventListener(
                          'mousemove',
                          t.endDragIfSourceWasRemovedFromDOM,
                          !0
                        )
                      );
                    }, 1e3));
                },
              },
              {
                key: 'clearCurrentDragSourceNode',
                value: function () {
                  return (
                    !!this.currentDragSourceNode &&
                    ((this.currentDragSourceNode = null),
                    this.window &&
                      (this.window.clearTimeout(
                        this.mouseMoveTimeoutTimer || void 0
                      ),
                      this.window.removeEventListener(
                        'mousemove',
                        this.endDragIfSourceWasRemovedFromDOM,
                        !0
                      )),
                    (this.mouseMoveTimeoutTimer = null),
                    !0)
                  );
                },
              },
              {
                key: 'handleDragStart',
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                },
              },
              {
                key: 'handleDragEnter',
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDragOver',
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                },
              },
              {
                key: 'handleDrop',
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
                },
              },
              {
                key: 'window',
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                },
              },
            ]) && P(t.prototype, r),
            i && P(t, i),
            e
          );
        })(),
        N = function (e, t) {
          return new j(e, t);
        };
    },
    roZX: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return Qe;
      });
      var n = r('BGKE'),
        i = (r('q1tI'), r('aKzv')),
        o = 'dnd-core/INIT_COORDS',
        a = 'dnd-core/BEGIN_DRAG',
        u = 'dnd-core/PUBLISH_DRAG_SOURCE',
        c = 'dnd-core/HOVER',
        s = 'dnd-core/DROP',
        l = 'dnd-core/END_DRAG';

      function f(e, t) {
        return {
          type: o,
          payload: {
            sourceClientOffset: t || null,
            clientOffset: e || null,
          },
        };
      }

      function d(e) {
        return (d =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }

      function g(e, t, r) {
        return t.split('.').reduce(function (e, t) {
          return e && e[t] ? e[t] : r || null;
        }, e);
      }

      function h(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }

      function v(e) {
        return 'object' === d(e);
      }

      function p(e, t) {
        var r = new Map(),
          n = function (e) {
            r.set(e, r.has(e) ? r.get(e) + 1 : 1);
          };
        e.forEach(n), t.forEach(n);
        var i = [];
        return (
          r.forEach(function (e, t) {
            1 === e && i.push(t);
          }),
          i
        );
      }
      var y = {
        type: o,
        payload: {
          clientOffset: null,
          sourceClientOffset: null,
        },
      };

      function b(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                    publishSource: !0,
                  },
            n = r.publishSource,
            i = void 0 === n || n,
            o = r.clientOffset,
            u = r.getSourceClientOffset,
            c = e.getMonitor(),
            s = e.getRegistry();
          e.dispatch(f(o)), O(t, c, s);
          var l = w(t, c);
          if (null !== l) {
            var d = null;
            if (o) {
              if (!u) throw new Error('getSourceClientOffset must be defined');
              m(u), (d = u(l));
            }
            e.dispatch(f(o, d));
            var g = s.getSource(l),
              h = g.beginDrag(c, l);
            if (null != h) {
              D(h), s.pinSource(l);
              var v = s.getSourceType(l);
              return {
                type: a,
                payload: {
                  itemType: v,
                  item: h,
                  sourceId: l,
                  clientOffset: o || null,
                  sourceClientOffset: d || null,
                  isSourcePublic: !!i,
                },
              };
            }
          } else e.dispatch(y);
        };
      }

      function O(e, t, r) {
        Object(i.a)(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
          e.forEach(function (e) {
            Object(i.a)(r.getSource(e), 'Expected sourceIds to be registered.');
          });
      }

      function m(e) {
        Object(i.a)(
          'function' === typeof e,
          'When clientOffset is provided, getSourceClientOffset must be a function.'
        );
      }

      function D(e) {
        Object(i.a)(v(e), 'Item must be an object.');
      }

      function w(e, t) {
        for (var r = null, n = e.length - 1; n >= 0; n--)
          if (t.canDragSource(e[n])) {
            r = e[n];
            break;
          }
        return r;
      }

      function S(e) {
        return function () {
          if (e.getMonitor().isDragging())
            return {
              type: u,
            };
        };
      }

      function T(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e === t;
      }

      function I(e) {
        return function (t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.clientOffset;
          E(t);
          var i = t.slice(0),
            o = e.getMonitor(),
            a = e.getRegistry();
          k(i, o, a);
          var u = o.getItemType();
          return (
            C(i, a, u),
            P(i, o, a),
            {
              type: c,
              payload: {
                targetIds: i,
                clientOffset: n || null,
              },
            }
          );
        };
      }

      function E(e) {
        Object(i.a)(Array.isArray(e), 'Expected targetIds to be an array.');
      }

      function k(e, t, r) {
        Object(i.a)(t.isDragging(), 'Cannot call hover while not dragging.'),
          Object(i.a)(!t.didDrop(), 'Cannot call hover after drop.');
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          Object(i.a)(
            e.lastIndexOf(o) === n,
            'Expected targetIds to be unique in the passed array.'
          );
          var a = r.getTarget(o);
          Object(i.a)(a, 'Expected targetIds to be registered.');
        }
      }

      function C(e, t, r) {
        for (var n = e.length - 1; n >= 0; n--) {
          var i = e[n];
          T(t.getTargetType(i), r) || e.splice(n, 1);
        }
      }

      function P(e, t, r) {
        e.forEach(function (e) {
          r.getTarget(e).hover(t, e);
        });
      }

      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                R(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function R(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }

      function x(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.getMonitor(),
            n = e.getRegistry();
          M(r);
          var i = A(r);
          i.forEach(function (i, o) {
            var a = L(i, o, n, r),
              u = {
                type: s,
                payload: {
                  dropResult: N(N({}, t), a),
                },
              };
            e.dispatch(u);
          });
        };
      }

      function M(e) {
        Object(i.a)(e.isDragging(), 'Cannot call drop while not dragging.'),
          Object(i.a)(
            !e.didDrop(),
            'Cannot call drop twice during one drag operation.'
          );
      }

      function L(e, t, r, n) {
        var o = r.getTarget(e),
          a = o ? o.drop(n, e) : void 0;
        return (
          (function (e) {
            Object(i.a)(
              'undefined' === typeof e || v(e),
              'Drop result must either be an object or undefined.'
            );
          })(a),
          'undefined' === typeof a && (a = 0 === t ? {} : n.getDropResult()),
          a
        );
      }

      function A(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return t.reverse(), t;
      }

      function _(e) {
        return function () {
          var t = e.getMonitor(),
            r = e.getRegistry();
          !(function (e) {
            Object(i.a)(
              e.isDragging(),
              'Cannot call endDrag while not dragging.'
            );
          })(t);
          var n = t.getSourceId();
          null != n && (r.getSource(n, !0).endDrag(t, n), r.unpinSource());
          return {
            type: l,
          };
        };
      }

      function H(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var U = (function () {
        function e(t, r) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = n.store.getState().refCount > 0;
              n.backend &&
                (e && !n.isSetUp
                  ? (n.backend.setup(), (n.isSetUp = !0))
                  : !e &&
                    n.isSetUp &&
                    (n.backend.teardown(), (n.isSetUp = !1)));
            }),
            (this.store = t),
            (this.monitor = r),
            t.subscribe(this.handleRefCountChange);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'receiveBackend',
              value: function (e) {
                this.backend = e;
              },
            },
            {
              key: 'getMonitor',
              value: function () {
                return this.monitor;
              },
            },
            {
              key: 'getBackend',
              value: function () {
                return this.backend;
              },
            },
            {
              key: 'getRegistry',
              value: function () {
                return this.monitor.registry;
              },
            },
            {
              key: 'getActions',
              value: function () {
                var e = this,
                  t = this.store.dispatch,
                  r = (function (e) {
                    return {
                      beginDrag: b(e),
                      publishDragSource: S(e),
                      hover: I(e),
                      drop: x(e),
                      endDrag: _(e),
                    };
                  })(this);
                return Object.keys(r).reduce(function (n, i) {
                  var o,
                    a = r[i];
                  return (
                    (n[i] =
                      ((o = a),
                      function () {
                        for (
                          var r = arguments.length, n = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          n[i] = arguments[i];
                        var a = o.apply(e, n);
                        'undefined' !== typeof a && t(a);
                      })),
                    n
                  );
                }, {});
              },
            },
            {
              key: 'dispatch',
              value: function (e) {
                this.store.dispatch(e);
              },
            },
          ]) && H(t.prototype, r),
          n && H(t, n),
          e
        );
      })();
      r('rePB');

      function F(e) {
        return (
          'Minified Redux error #' +
          e +
          '; visit https://redux.js.org/Errors?code=' +
          e +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      var B =
          ('function' === typeof Symbol && Symbol.observable) || '@@observable',
        G = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        X = {
          INIT: '@@redux/INIT' + G(),
          REPLACE: '@@redux/REPLACE' + G(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + G();
          },
        };

      function z(e) {
        if ('object' !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }

      function K(e, t, r) {
        var n;
        if (
          ('function' === typeof t && 'function' === typeof r) ||
          ('function' === typeof r && 'function' === typeof arguments[3])
        )
          throw new Error(F(0));
        if (
          ('function' === typeof t &&
            'undefined' === typeof r &&
            ((r = t), (t = void 0)),
          'undefined' !== typeof r)
        ) {
          if ('function' !== typeof r) throw new Error(F(1));
          return r(K)(e, t);
        }
        if ('function' !== typeof e) throw new Error(F(2));
        var i = e,
          o = t,
          a = [],
          u = a,
          c = !1;

        function s() {
          u === a && (u = a.slice());
        }

        function l() {
          if (c) throw new Error(F(3));
          return o;
        }

        function f(e) {
          if ('function' !== typeof e) throw new Error(F(4));
          if (c) throw new Error(F(5));
          var t = !0;
          return (
            s(),
            u.push(e),
            function () {
              if (t) {
                if (c) throw new Error(F(6));
                (t = !1), s();
                var r = u.indexOf(e);
                u.splice(r, 1), (a = null);
              }
            }
          );
        }

        function d(e) {
          if (!z(e)) throw new Error(F(7));
          if ('undefined' === typeof e.type) throw new Error(F(8));
          if (c) throw new Error(F(9));
          try {
            (c = !0), (o = i(o, e));
          } finally {
            c = !1;
          }
          for (var t = (a = u), r = 0; r < t.length; r++) {
            (0, t[r])();
          }
          return e;
        }

        function g(e) {
          if ('function' !== typeof e) throw new Error(F(10));
          (i = e),
            d({
              type: X.REPLACE,
            });
        }

        function h() {
          var e,
            t = f;
          return (
            ((e = {
              subscribe: function (e) {
                if ('object' !== typeof e || null === e) throw new Error(F(11));

                function r() {
                  e.next && e.next(l());
                }
                return (
                  r(),
                  {
                    unsubscribe: t(r),
                  }
                );
              },
            })[B] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({
            type: X.INIT,
          }),
          ((n = {
            dispatch: d,
            subscribe: f,
            getState: l,
            replaceReducer: g,
          })[B] = h),
          n
        );
      }
      var W = function (e, t) {
        return e === t;
      };

      function Y(e, t) {
        return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y);
      }

      function q(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : W;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
        return !0;
      }

      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(r), !0).forEach(function (t) {
                Z(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function Z(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var $ = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null,
      };

      function Q() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = t.payload;
        switch (t.type) {
          case o:
          case a:
            return {
              initialSourceClientOffset: r.sourceClientOffset,
              initialClientOffset: r.clientOffset,
              clientOffset: r.clientOffset,
            };
          case c:
            return Y(e.clientOffset, r.clientOffset)
              ? e
              : J(
                  J({}, e),
                  {},
                  {
                    clientOffset: r.clientOffset,
                  }
                );
          case l:
          case s:
            return $;
          default:
            return e;
        }
      }
      var ee = 'dnd-core/ADD_SOURCE',
        te = 'dnd-core/ADD_TARGET',
        re = 'dnd-core/REMOVE_SOURCE',
        ne = 'dnd-core/REMOVE_TARGET';

      function ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ie(Object(r), !0).forEach(function (t) {
                ae(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function ae(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var ue = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };

      function ce() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = t.payload;
        switch (t.type) {
          case a:
            return oe(
              oe({}, e),
              {},
              {
                itemType: r.itemType,
                item: r.item,
                sourceId: r.sourceId,
                isSourcePublic: r.isSourcePublic,
                dropResult: null,
                didDrop: !1,
              }
            );
          case u:
            return oe(
              oe({}, e),
              {},
              {
                isSourcePublic: !0,
              }
            );
          case c:
            return oe(
              oe({}, e),
              {},
              {
                targetIds: r.targetIds,
              }
            );
          case ne:
            return -1 === e.targetIds.indexOf(r.targetId)
              ? e
              : oe(
                  oe({}, e),
                  {},
                  {
                    targetIds: h(e.targetIds, r.targetId),
                  }
                );
          case s:
            return oe(
              oe({}, e),
              {},
              {
                dropResult: r.dropResult,
                didDrop: !0,
                targetIds: [],
              }
            );
          case l:
            return oe(
              oe({}, e),
              {},
              {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: [],
              }
            );
          default:
            return e;
        }
      }

      function se() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case ee:
          case te:
            return e + 1;
          case re:
          case ne:
            return e - 1;
          default:
            return e;
        }
      }
      var le = [],
        fe = [];

      function de(e, t) {
        return (
          e !== le &&
          (e === fe ||
            'undefined' === typeof t ||
            ((r = e),
            t.filter(function (e) {
              return r.indexOf(e) > -1;
            })).length > 0)
        );
        var r;
      }

      function ge() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case c:
            break;
          case ee:
          case te:
          case ne:
          case re:
            return le;
          case a:
          case u:
          case l:
          case s:
          default:
            return fe;
        }
        var t = e.payload,
          r = t.targetIds,
          n = void 0 === r ? [] : r,
          i = t.prevTargetIds,
          o = void 0 === i ? [] : i,
          f = p(n, o),
          d = f.length > 0 || !q(n, o);
        if (!d) return le;
        var g = o[o.length - 1],
          h = n[n.length - 1];
        return g !== h && (g && f.push(g), h && f.push(h)), f;
      }

      function he() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return e + 1;
      }

      function ve(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve(Object(r), !0).forEach(function (t) {
                ye(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ve(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function ye(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }

      function be() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: ge(e.dirtyHandlerIds, {
            type: t.type,
            payload: pe(
              pe({}, t.payload),
              {},
              {
                prevTargetIds: g(e, 'dragOperation.targetIds', []),
              }
            ),
          }),
          dragOffset: Q(e.dragOffset, t),
          refCount: se(e.refCount, t),
          dragOperation: ce(e.dragOperation, t),
          stateId: he(e.stateId),
        };
      }

      function Oe(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y,
        };
      }

      function me(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      (le.__IS_NONE__ = !0), (fe.__IS_ALL__ = !0);
      var De,
        we = (function () {
          function e(t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.store = t),
              (this.registry = r);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'subscribeToStateChange',
                value: function (e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {
                            handlerIds: void 0,
                          },
                    n = r.handlerIds;
                  Object(i.a)(
                    'function' === typeof e,
                    'listener must be a function.'
                  ),
                    Object(i.a)(
                      'undefined' === typeof n || Array.isArray(n),
                      'handlerIds, when specified, must be an array of strings.'
                    );
                  var o = this.store.getState().stateId,
                    a = function () {
                      var r = t.store.getState(),
                        i = r.stateId;
                      try {
                        i === o ||
                          (i === o + 1 && !de(r.dirtyHandlerIds, n)) ||
                          e();
                      } finally {
                        o = i;
                      }
                    };
                  return this.store.subscribe(a);
                },
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  var t = this;
                  Object(i.a)(
                    'function' === typeof e,
                    'listener must be a function.'
                  );
                  var r = this.store.getState().dragOffset;
                  return this.store.subscribe(function () {
                    var n = t.store.getState().dragOffset;
                    n !== r && ((r = n), e());
                  });
                },
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    Object(i.a)(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e)
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                },
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  return (
                    Object(i.a)(
                      t,
                      'Expected to find a valid target. targetId='.concat(e)
                    ),
                    !(!this.isDragging() || this.didDrop()) &&
                      T(this.registry.getTargetType(e), this.getItemType()) &&
                      t.canDrop(this, e)
                  );
                },
              },
              {
                key: 'isDragging',
                value: function () {
                  return Boolean(this.getItemType());
                },
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  return (
                    Object(i.a)(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e)
                    ),
                    !(!this.isDragging() || !this.isSourcePublic()) &&
                      this.registry.getSourceType(e) === this.getItemType() &&
                      t.isDragging(this, e)
                  );
                },
              },
              {
                key: 'isOverTarget',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {
                          shallow: !1,
                        };
                  if (!e) return !1;
                  var r = t.shallow;
                  if (!this.isDragging()) return !1;
                  var n = this.registry.getTargetType(e),
                    i = this.getItemType();
                  if (i && !T(n, i)) return !1;
                  var o = this.getTargetIds();
                  if (!o.length) return !1;
                  var a = o.indexOf(e);
                  return r ? a === o.length - 1 : a > -1;
                },
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                },
              },
              {
                key: 'getItem',
                value: function () {
                  return this.store.getState().dragOperation.item;
                },
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                },
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                },
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                },
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                },
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return Boolean(
                    this.store.getState().dragOperation.isSourcePublic
                  );
                },
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                },
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                },
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                },
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return (function (e) {
                    var t,
                      r,
                      n = e.clientOffset,
                      i = e.initialClientOffset,
                      o = e.initialSourceClientOffset;
                    return n && i && o
                      ? Oe(
                          ((r = o),
                          {
                            x: (t = n).x + r.x,
                            y: t.y + r.y,
                          }),
                          i
                        )
                      : null;
                  })(this.store.getState().dragOffset);
                },
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return (function (e) {
                    var t = e.clientOffset,
                      r = e.initialClientOffset;
                    return t && r ? Oe(t, r) : null;
                  })(this.store.getState().dragOffset);
                },
              },
            ]) && me(t.prototype, r),
            n && me(t, n),
            e
          );
        })(),
        Se = 0;

      function Te(e) {
        return (Te =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }

      function Ie(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return Ie(e, !1);
            })
          : Object(i.a)(
              'string' === typeof e || 'symbol' === Te(e),
              t
                ? 'Type can only be a string, a symbol, or an array of either.'
                : 'Type can only be a string or a symbol.'
            );
      }
      !(function (e) {
        (e.SOURCE = 'SOURCE'), (e.TARGET = 'TARGET');
      })(De || (De = {}));
      var Ee = r('b7DX'),
        ke = [],
        Ce = [],
        Pe = Ee.a.makeRequestCallFromTimer(function () {
          if (Ce.length) throw Ce.shift();
        });

      function je(e) {
        var t;
        ((t = ke.length ? ke.pop() : new Ne()).task = e), Object(Ee.a)(t);
      }
      var Ne = (function () {
        function e() {}
        return (
          (e.prototype.call = function () {
            try {
              this.task.call();
            } catch (e) {
              je.onerror ? je.onerror(e) : (Ce.push(e), Pe());
            } finally {
              (this.task = null), (ke[ke.length] = this);
            }
          }),
          e
        );
      })();

      function Re(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }

      function xe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              'undefined' === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return Me(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Me(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }

      function Me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }

      function Le(e) {
        var t = (Se++).toString();
        switch (e) {
          case De.SOURCE:
            return 'S'.concat(t);
          case De.TARGET:
            return 'T'.concat(t);
          default:
            throw new Error('Unknown Handler Role: '.concat(e));
        }
      }

      function Ae(e) {
        switch (e[0]) {
          case 'S':
            return De.SOURCE;
          case 'T':
            return De.TARGET;
          default:
            Object(i.a)(!1, 'Cannot parse handler ID: '.concat(e));
        }
      }

      function _e(e, t) {
        var r = e.entries(),
          n = !1;
        do {
          var i = r.next(),
            o = i.done;
          if (xe(i.value, 2)[1] === t) return !0;
          n = !!o;
        } while (!n);
        return !1;
      }
      var He = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'addSource',
              value: function (e, t) {
                Ie(e),
                  (function (e) {
                    Object(i.a)(
                      'function' === typeof e.canDrag,
                      'Expected canDrag to be a function.'
                    ),
                      Object(i.a)(
                        'function' === typeof e.beginDrag,
                        'Expected beginDrag to be a function.'
                      ),
                      Object(i.a)(
                        'function' === typeof e.endDrag,
                        'Expected endDrag to be a function.'
                      );
                  })(t);
                var r = this.addHandler(De.SOURCE, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return {
                        type: ee,
                        payload: {
                          sourceId: e,
                        },
                      };
                    })(r)
                  ),
                  r
                );
              },
            },
            {
              key: 'addTarget',
              value: function (e, t) {
                Ie(e, !0),
                  (function (e) {
                    Object(i.a)(
                      'function' === typeof e.canDrop,
                      'Expected canDrop to be a function.'
                    ),
                      Object(i.a)(
                        'function' === typeof e.hover,
                        'Expected hover to be a function.'
                      ),
                      Object(i.a)(
                        'function' === typeof e.drop,
                        'Expected beginDrag to be a function.'
                      );
                  })(t);
                var r = this.addHandler(De.TARGET, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return {
                        type: te,
                        payload: {
                          targetId: e,
                        },
                      };
                    })(r)
                  ),
                  r
                );
              },
            },
            {
              key: 'containsHandler',
              value: function (e) {
                return _e(this.dragSources, e) || _e(this.dropTargets, e);
              },
            },
            {
              key: 'getSource',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                Object(i.a)(this.isSourceId(e), 'Expected a valid source ID.');
                var r = t && e === this.pinnedSourceId,
                  n = r ? this.pinnedSource : this.dragSources.get(e);
                return n;
              },
            },
            {
              key: 'getTarget',
              value: function (e) {
                return (
                  Object(i.a)(
                    this.isTargetId(e),
                    'Expected a valid target ID.'
                  ),
                  this.dropTargets.get(e)
                );
              },
            },
            {
              key: 'getSourceType',
              value: function (e) {
                return (
                  Object(i.a)(
                    this.isSourceId(e),
                    'Expected a valid source ID.'
                  ),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'getTargetType',
              value: function (e) {
                return (
                  Object(i.a)(
                    this.isTargetId(e),
                    'Expected a valid target ID.'
                  ),
                  this.types.get(e)
                );
              },
            },
            {
              key: 'isSourceId',
              value: function (e) {
                return Ae(e) === De.SOURCE;
              },
            },
            {
              key: 'isTargetId',
              value: function (e) {
                return Ae(e) === De.TARGET;
              },
            },
            {
              key: 'removeSource',
              value: function (e) {
                var t = this;
                Object(i.a)(this.getSource(e), 'Expected an existing source.'),
                  this.store.dispatch(
                    (function (e) {
                      return {
                        type: re,
                        payload: {
                          sourceId: e,
                        },
                      };
                    })(e)
                  ),
                  je(function () {
                    t.dragSources.delete(e), t.types.delete(e);
                  });
              },
            },
            {
              key: 'removeTarget',
              value: function (e) {
                Object(i.a)(this.getTarget(e), 'Expected an existing target.'),
                  this.store.dispatch(
                    (function (e) {
                      return {
                        type: ne,
                        payload: {
                          targetId: e,
                        },
                      };
                    })(e)
                  ),
                  this.dropTargets.delete(e),
                  this.types.delete(e);
              },
            },
            {
              key: 'pinSource',
              value: function (e) {
                var t = this.getSource(e);
                Object(i.a)(t, 'Expected an existing source.'),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              },
            },
            {
              key: 'unpinSource',
              value: function () {
                Object(i.a)(
                  this.pinnedSource,
                  'No source is pinned at the time.'
                ),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              },
            },
            {
              key: 'addHandler',
              value: function (e, t, r) {
                var n = Le(e);
                return (
                  this.types.set(n, t),
                  e === De.SOURCE
                    ? this.dragSources.set(n, r)
                    : e === De.TARGET && this.dropTargets.set(n, r),
                  n
                );
              },
            },
          ]) && Re(t.prototype, r),
          n && Re(t, n),
          e
        );
      })();

      function Ue(e) {
        var t =
          'undefined' !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return K(
          be,
          e &&
            t &&
            t({
              name: 'dnd-core',
              instanceId: 'dnd-core',
            })
        );
      }
      var Fe = r('qJlv'),
        Be = r('p/5y'),
        Ge = r('tpqs'),
        Xe = Array.prototype.concat,
        ze = function (e) {
          return {
            recursive: !0 === e || !!e.recursive,
            bail: e.bail && e.bail > 0 ? e.bail : 1e3,
          };
        },
        Ke = function (e) {
          return 'file' === e.kind;
        },
        We = function (e) {
          return 'function' === typeof e.getAsEntry
            ? e.getAsEntry()
            : e.webkitGetAsEntry
            ? e.webkitGetAsEntry()
            : null;
        },
        Ye = function (e) {
          return Xe.apply([], e);
        },
        qe = function (e, t, r, n) {
          return e.isDirectory
            ? t.recursive
              ? Ve(e, t, r + 1, Object(Ge.join)(n, e.name))
              : Promise.resolve([])
            : (function (e) {
                return new Promise(function (t, r) {
                  e.file ? e.file(t, r) : t(null);
                }).catch(function () {
                  return null;
                });
              })(e).then(function (e) {
                return e && (e.path = Object(Ge.join)(n, e.name)), e ? [e] : [];
              });
        },
        Ve = function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : e.name;
          return e && r < t.bail && e.isDirectory && e.createReader
            ? new Promise(function (i) {
                e.createReader().readEntries(
                  function (e) {
                    return Promise.all(
                      e.map(function (e) {
                        return qe(e, t, r, n);
                      })
                    ).then(function (e) {
                      return i(Ye(e));
                    });
                  },
                  function () {
                    return i([]);
                  }
                );
              })
            : Promise.resolve([]);
        },
        Je = Ve,
        Ze = function (e, t) {
          return (function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Je(We(e), ze(t));
          })(e, t).then(function (t) {
            if (!t.length) {
              var r = e.getAsFile();
              t = r ? [r] : t;
            }
            return t;
          });
        };
      var $e = {
        dragDropManager: (function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = Ue(n),
            o = new we(i, new He(i)),
            a = new U(i, o),
            u = e(a, t, r);
          return a.receiveBackend(u), a;
        })(function (e) {
          var t = Object(Fe.a)(e),
            r = t.handleTopDropCapture;
          return (
            (t.handleTopDropCapture = function (e) {
              r.call(t, e),
                t.currentNativeSource &&
                  (t.currentNativeSource.item.dirContent = (function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return (
                      (t = ze(t)),
                      new Promise(function (r) {
                        var n, i;
                        null !== e &&
                        void 0 !== e &&
                        null !== (n = e.dataTransfer) &&
                        void 0 !== n &&
                        n.items
                          ? Promise.all(
                              Ye(e.dataTransfer.items)
                                .filter(function (e) {
                                  return Ke(e);
                                })
                                .map(function (e) {
                                  return Ze(e, t);
                                })
                            ).then(function (e) {
                              return r(Ye(e));
                            })
                          : null !== e &&
                            void 0 !== e &&
                            null !== (i = e.dataTransfer) &&
                            void 0 !== i &&
                            i.files
                          ? r(Ye(e.dataTransfer.files))
                          : r([]);
                      })
                    );
                  })(e, {
                    recursive: !0,
                  }));
            }),
            t
          );
        }),
      };

      function Qe(e) {
        return Object(n.b)(Be.a.Provider, {
          value: $e,
          children: e.children,
        });
      }
    },
  },
]);
//# sourceMappingURL=2d45d35a58941cd79792ed919ca6255b073225ea.d136c7c9acf6349f88c5.js.map

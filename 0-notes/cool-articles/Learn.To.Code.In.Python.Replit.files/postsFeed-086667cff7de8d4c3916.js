_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [125, 37],
  {
    "+bZ2": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("H+61"),
        a = n("UlJF"),
        i = n("7LId"),
        s = n("VIvw"),
        c = n("iHvq"),
        l = n("cpVT"),
        u = n("vJKn"),
        d = n.n(u),
        p = n("rg98"),
        f = n("MX0m"),
        b = n.n(f),
        x = n("q1tI"),
        h = n("LOQN"),
        j = n("Vvt1");
      function m(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(c.a)(e);
          if (t) {
            var o = Object(c.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(s.a)(this, n);
        };
      }
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                Object(l.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var v = n.n(j)()(
        Object(p.a)(
          d.a.mark(function e() {
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      n
                        .e(329)
                        .then(n.bind(null, "4zel"))
                        .then(function (e) {
                          return e;
                        })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ),
        {
          ssr: !1,
          loading: function () {
            return null;
          },
          loadableGenerated: {
            webpack: function () {
              return ["4zel"];
            },
            modules: ["./PortalWrapper.react"],
          },
        }
      );
      t.a = function (e) {
        return Object(r.jsx)(v, {
          rootId: "modal-root",
          children: function (t) {
            var n = t.closePortal,
              o = t.Portal;
            return Object(r.jsx)(o, {
              children: Object(r.jsx)(
                O,
                y(
                  y({}, e),
                  {},
                  {
                    hideModal: function () {
                      for (
                        var t = arguments.length, r = new Array(t), o = 0;
                        o < t;
                        o++
                      )
                        r[o] = arguments[o];
                      e.hideModal(r), n();
                    },
                    closePortal: n,
                    children: e.children,
                  }
                )
              ),
            });
          },
        });
      };
      var O = (function (e) {
        Object(i.a)(n, e);
        var t = m(n);
        function n() {
          var e;
          Object(o.a)(this, n);
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(a))).hideModal = function () {
              var t = e.props.confirmClose;
              ((t && t()) || !t) && e.props.hideModal();
            }),
            (e.addChildProps = function (t) {
              return Array.isArray(t) || "function" !== typeof t.type
                ? t
                : x.cloneElement(t, { hideModal: e.hideModal });
            }),
            e
          );
        }
        return (
          Object(a.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                (this._eventSubscriber = new h.a()),
                  this.props.disableClosing ||
                    this._eventSubscriber.listen(
                      window.document,
                      "keydown",
                      function (t) {
                        return 27 === t.keyCode && e.hideModal();
                      }
                    );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.props.closePortal(),
                  this._eventSubscriber && this._eventSubscriber.destroy(),
                  (this._eventSubscriber = null);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = x.Children.map(this.props.children, this.addChildProps),
                  n = this.props,
                  o = n.disableClosing,
                  a = n.noBorder,
                  i = n.noBackground,
                  s = n.coverOtherModals,
                  c = n.hideCloseButton;
                return Object(r.jsxs)("div", {
                  className:
                    "jsx-329464003 " +
                    b.a.dynamic([
                      [
                        "645701630",
                        [
                          s ? 4e5 : 3e5,
                          s ? 400001 : 300001,
                          a ? 0 : "1px solid #888",
                          s ? 22 : 2,
                          window.navigator.userAgent.match(/Trident/)
                            ? "table"
                            : "block",
                          i ? "none" : "var(--color-background-1)",
                        ],
                      ],
                    ]),
                  children: [
                    Object(r.jsx)(b.a, {
                      id: "329464003",
                      children: [
                        ".modal-overlay.jsx-329464003{background-color:var(--color-overlay);}",
                      ],
                    }),
                    Object(r.jsx)(b.a, {
                      id: "645701630",
                      dynamic: [
                        s ? 4e5 : 3e5,
                        s ? 400001 : 300001,
                        a ? 0 : "1px solid #888",
                        s ? 22 : 2,
                        window.navigator.userAgent.match(/Trident/)
                          ? "table"
                          : "block",
                        i ? "none" : "var(--color-background-1)",
                      ],
                      children: [
                        ".modal-overlay.__jsx-style-dynamic-selector{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:".concat(
                          s ? 4e5 : 3e5,
                          ";}"
                        ),
                        ".modal-base.__jsx-style-dynamic-selector{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:".concat(
                          s ? 400001 : 300001,
                          ";}"
                        ),
                        ".modal-wrapper.__jsx-style-dynamic-selector{position:relative;max-height:80%;border:"
                          .concat(a ? 0 : "1px solid #888", ";z-index:")
                          .concat(s ? 22 : 2, ";display:")
                          .concat(
                            window.navigator.userAgent.match(/Trident/)
                              ? "table"
                              : "block",
                            ";}"
                          ),
                        ".modal-content.__jsx-style-dynamic-selector{background-color:".concat(
                          i ? "none" : "var(--color-background-1)",
                          ";color:var(--color-foreground-1);}"
                        ),
                        ".page-close.__jsx-style-dynamic-selector{position:absolute;top:20px;right:20px;background-image:url(/public/images/close.png);height:15px;width:15px;background-size:contain;background-position:center;background-repeat:no-repeat;cursor:pointer;}",
                        ".page-close.__jsx-style-dynamic-selector:hover{background-image:url(/public/images/close_hover.png);}",
                      ],
                    }),
                    Object(r.jsx)("div", {
                      className:
                        "jsx-329464003 " +
                        b.a.dynamic([
                          [
                            "645701630",
                            [
                              s ? 4e5 : 3e5,
                              s ? 400001 : 300001,
                              a ? 0 : "1px solid #888",
                              s ? 22 : 2,
                              window.navigator.userAgent.match(/Trident/)
                                ? "table"
                                : "block",
                              i ? "none" : "var(--color-background-1)",
                            ],
                          ],
                        ]) +
                        " modal-overlay",
                    }),
                    Object(r.jsx)("div", {
                      onClick: function (t) {
                        o || (t.stopPropagation(), e.hideModal());
                      },
                      className:
                        "jsx-329464003 " +
                        b.a.dynamic([
                          [
                            "645701630",
                            [
                              s ? 4e5 : 3e5,
                              s ? 400001 : 300001,
                              a ? 0 : "1px solid #888",
                              s ? 22 : 2,
                              window.navigator.userAgent.match(/Trident/)
                                ? "table"
                                : "block",
                              i ? "none" : "var(--color-background-1)",
                            ],
                          ],
                        ]) +
                        " modal-base",
                      children: Object(r.jsxs)("div", {
                        onClick: function (e) {
                          return e.stopPropagation();
                        },
                        className:
                          "jsx-329464003 " +
                          b.a.dynamic([
                            [
                              "645701630",
                              [
                                s ? 4e5 : 3e5,
                                s ? 400001 : 300001,
                                a ? 0 : "1px solid #888",
                                s ? 22 : 2,
                                window.navigator.userAgent.match(/Trident/)
                                  ? "table"
                                  : "block",
                                i ? "none" : "var(--color-background-1)",
                              ],
                            ],
                          ]) +
                          " modal-wrapper",
                        children: [
                          !o &&
                            !c &&
                            Object(r.jsx)("div", {
                              onClick: function () {
                                return e.hideModal();
                              },
                              className:
                                "jsx-329464003 " +
                                b.a.dynamic([
                                  [
                                    "645701630",
                                    [
                                      s ? 4e5 : 3e5,
                                      s ? 400001 : 300001,
                                      a ? 0 : "1px solid #888",
                                      s ? 22 : 2,
                                      window.navigator.userAgent.match(
                                        /Trident/
                                      )
                                        ? "table"
                                        : "block",
                                      i ? "none" : "var(--color-background-1)",
                                    ],
                                  ],
                                ]) +
                                " page-close",
                            }),
                          Object(r.jsx)("div", {
                            className:
                              "jsx-329464003 " +
                              b.a.dynamic([
                                [
                                  "645701630",
                                  [
                                    s ? 4e5 : 3e5,
                                    s ? 400001 : 300001,
                                    a ? 0 : "1px solid #888",
                                    s ? 22 : 2,
                                    window.navigator.userAgent.match(/Trident/)
                                      ? "table"
                                      : "block",
                                    i ? "none" : "var(--color-background-1)",
                                  ],
                                ],
                              ]) +
                              " modal-content",
                            children: t,
                          }),
                        ],
                      }),
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(x.Component);
    },
    "/otM": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("vJKn"),
        a = n.n(o),
        i = n("rg98"),
        s = n("cpVT"),
        c = n("H+61"),
        l = n("UlJF"),
        u = n("7LId"),
        d = n("VIvw"),
        p = n("iHvq"),
        f = n("jT3O"),
        b = n("MX0m"),
        x = n.n(b),
        h = n("q1tI"),
        j = n("+uXX"),
        m = n("lTCR"),
        g = n.n(m),
        y = n("20a2"),
        v = n.n(y),
        O = n("/MKj"),
        w = n("CIYy"),
        k = n("5TM/"),
        P = n("ArsQ"),
        S = n("G5Ub"),
        C = n("zgDP"),
        _ = n("0gYX"),
        N = n.n(_);
      function T(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function R(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(p.a)(e);
          if (t) {
            var o = Object(p.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(d.a)(this, n);
        };
      }
      function E() {
        var e = Object(f.a)([
          "\n  mutation createPost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      post {\n        id\n        url\n        showHosted\n        board {\n          id\n          name\n          slug\n          url\n          replRequired\n          template\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      var I = g()(E()),
        M = (function (e) {
          Object(u.a)(n, e);
          var t = R(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
              o[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                title: e.props.title || "",
                board: e.props.board,
                body:
                  e.props.body ||
                  (e.props.board && e.props.board.template
                    ? e.props.board.template
                    : ""),
                repl: e.props.repl,
                showHosted: void 0,
                loading: !1,
                tracked: !1,
              }),
              (e.onChange = function (t) {
                !e.state.tracked &&
                  e.state.board &&
                  Object(C.track)(C.events.POST_WRITTEN, {
                    boardId: e.state.board.id,
                  }),
                  e.props.setActiveEdits && e.props.setActiveEdits(!0),
                  e.setState(D(D({}, t), {}, { tracked: !0 }));
              }),
              (e.onSubmit = (function () {
                var t = Object(i.a)(
                  a.a.mark(function t(n) {
                    var r, o, i, s, c, l, u, d, p, f, b, x, h;
                    return a.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((r = e.state),
                                (o = r.title),
                                (i = r.body),
                                (s = r.showHosted),
                                (c = r.repl),
                                (l = r.board),
                                (u = r.loading),
                                (d = c ? c.id : void 0),
                                !u && l)
                              ) {
                                t.next = 4;
                                break;
                              }
                              return t.abrupt("return");
                            case 4:
                              return (
                                e.setState({ loading: !0 }),
                                (t.prev = 5),
                                (t.next = 8),
                                n({
                                  variables: {
                                    input: {
                                      title: o,
                                      body: i,
                                      showHosted: s,
                                      replId: d,
                                      boardId: l.id,
                                    },
                                  },
                                })
                              );
                            case 8:
                              (f = t.sent), (p = f.data), (t.next = 18);
                              break;
                            case 12:
                              return (
                                (t.prev = 12),
                                (t.t0 = t.catch(5)),
                                e.setState({ loading: !1 }),
                                (b =
                                  (t.t0.graphQLErrors.length &&
                                    t.t0.graphQLErrors[0].message) ||
                                  "Something went wrong. Please contact support"),
                                e.props.showMessage({
                                  content: b,
                                  type: "error",
                                  time: 4e3,
                                }),
                                t.abrupt("return")
                              );
                            case 18:
                              e.setState({
                                title: "",
                                body: "",
                                repl: void 0,
                                showHosted: void 0,
                                loading: !1,
                              }),
                                (x = p && p.createPost),
                                (h = x.post),
                                e.props.onSubmit
                                  ? e.props.onSubmit(h)
                                  : v.a.push(
                                      {
                                        pathname: "/post",
                                        query: { id: h.id },
                                      },
                                      h.url
                                    );
                            case 21:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[5, 12]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              (e.selectBoard = (function () {
                var t = Object(i.a)(
                  a.a.mark(function t(n) {
                    var r, o, i, s, c, l, u;
                    return a.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((r = e.state),
                              (o = r.repl),
                              (i = r.body),
                              (s = r.title),
                              (c = { board: n }),
                              !o)
                            ) {
                              t.next = 10;
                              break;
                            }
                            if (s) {
                              t.next = 9;
                              break;
                            }
                            return (
                              (t.next = 6),
                              Object(S.b)(
                                "/data/repls/check-generated/".concat(o.title)
                              )
                            );
                          case 6:
                            (l = t.sent),
                              (u = l.isGenerated),
                              (c.title = u ? "" : o.title);
                          case 9:
                            i || (c.body = o.description || n.template || "");
                          case 10:
                            e.setState(c);
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.boardChangable,
                    o = t.onCancel,
                    a = t.replChangable,
                    i = t.autofocus,
                    s = this.state,
                    c = s.title,
                    l = s.body,
                    u = s.repl,
                    d = s.showHosted,
                    p = s.board,
                    f = s.loading,
                    b = !p || (p.replRequired && !u),
                    h = b;
                  return Object(r.jsxs)("div", {
                    className: "jsx-2855744574 board-new-post-container",
                    children: [
                      Object(r.jsx)(j.Mutation, {
                        mutation: I,
                        children: function (t) {
                          return Object(r.jsxs)(k.a, {
                            title: c,
                            body: l,
                            repl: u,
                            showHosted: d,
                            loading: f,
                            onChange: e.onChange,
                            onSubmit: function () {
                              return e.onSubmit(t);
                            },
                            cancelable: !0,
                            onCancel: o,
                            cta: p && p.buttonCta ? p.buttonCta : "Submit",
                            titleCta: p ? p.titleCta : void 0,
                            bodyCta: p ? p.bodyCta : void 0,
                            titleDisabled: b,
                            bodyDisabled: h,
                            autofocus: i,
                            showReplSelector: a,
                            children: [
                              p && p.cta && !n
                                ? Object(r.jsx)(L, { board: p })
                                : null,
                              u && !a ? Object(r.jsx)(q, { repl: u }) : null,
                              !p || n
                                ? Object(r.jsx)(w.a, {
                                    board: p,
                                    onBoardSelected: e.selectBoard,
                                  })
                                : null,
                            ],
                          });
                        },
                      }),
                      Object(r.jsx)(x.a, {
                        id: "2855744574",
                        children: [
                          ".board-new-post-container.jsx-2855744574{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:700px;margin-left:auto;margin-right:auto;color:var(--color-foreground-1);}",
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(h.Component);
      M.defaultProps = { replChangable: !0, boardChangable: !0 };
      var q = function (e) {
          var t = e.repl,
            n = N.a.get(t.language),
            o = n.displayName,
            a = n.icon;
          return Object(r.jsxs)("div", {
            className: "jsx-1134565699",
            children: [
              Object(r.jsx)("span", {
                className: "jsx-1134565699",
                children: "Sharing repl",
              }),
              Object(r.jsxs)("span", {
                className: "jsx-1134565699",
                children: [
                  Object(r.jsx)("img", {
                    alt: o,
                    title: o,
                    src: a,
                    className: "jsx-1134565699",
                  }),
                  t.title,
                ],
              }),
              Object(r.jsx)(x.a, {
                id: "1134565699",
                children: [
                  "div.jsx-1134565699{margin-top:10px;margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                  "span.jsx-1134565699:first-child{opacity:0.6;}",
                  "span.jsx-1134565699:last-child{font-family:PT Mono,monospace;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  "img.jsx-1134565699{width:20px;margin-left:4px;margin-right:4px;}",
                ],
              }),
            ],
          });
        },
        L = function (e) {
          var t = e.board;
          return Object(r.jsxs)("div", {
            className: "jsx-320836829",
            children: [
              Object(r.jsx)("h2", {
                className: "jsx-320836829",
                children: t.name,
              }),
              Object(r.jsx)("p", {
                className: "jsx-320836829",
                children: t.cta,
              }),
              Object(r.jsx)(x.a, {
                id: "320836829",
                children: [
                  "div.jsx-320836829{margin-bottom:20px;font-size:20px;text-align:center;}",
                  "h2.jsx-320836829{font-size:22px;font-weight:bold;}",
                  "p.jsx-320836829{font-size:16px;opacity:0.6;}",
                ],
              }),
            ],
          });
        };
      t.a = Object(O.c)(void 0, { showMessage: P.b })(M);
    },
    "5TM/": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("H+61"),
        a = n("UlJF"),
        i = n("7LId"),
        s = n("VIvw"),
        c = n("iHvq"),
        l = n("MX0m"),
        u = n.n(l),
        d = n("q1tI"),
        p = n("XpCD"),
        f = n("AENu"),
        b = n("hYzu"),
        x = n("vJKn"),
        h = n.n(x),
        j = n("rg98"),
        m = n("jT3O"),
        g = n("lTCR"),
        y = n.n(g),
        v = n("DI+Y"),
        O = n("8Fln"),
        w = n("igIU");
      function k(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(c.a)(e);
          if (t) {
            var o = Object(c.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(s.a)(this, n);
        };
      }
      function P() {
        var e = Object(m.a)([
          "\n  query replSearch($search: String!) {\n    currentUser {\n      id\n      replSearch(search: $search) {\n        id\n        title\n        language\n        hostedUrl\n      }\n    }\n  }\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(m.a)([
          "\n  {\n    recentRepls {\n      id\n      title\n      hostedUrl\n    }\n  }\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      var C = y()(S()),
        _ = y()(P()),
        N = (function (e) {
          Object(i.a)(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              Object(o.a)(this, n),
              ((r = t.call(this, e)).onInputChange = function (e) {
                if (e) {
                  var t = /http(s?):\/\//.test(e);
                  r.setState({ search: e, isUrl: t }, function () {
                    r.searchRepls(e);
                  });
                }
              }),
              (r.searchRepls = (function () {
                var e = Object(j.a)(
                  h.a.mark(function e(t) {
                    var n, o, a;
                    return h.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              r.props.client.query({
                                query: _,
                                variables: { search: t },
                              })
                            );
                          case 2:
                            if (
                              ((n = e.sent),
                              (o = n.data),
                              (a = o.currentUser.replSearch),
                              !r.state.isUrl || 1 !== a.length)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              r.props.onChange({
                                repl: a[0],
                                showHosted: t.includes("repl.co"),
                              }),
                              e.abrupt("return", { options: [] })
                            );
                          case 8:
                            r.setState({ options: a });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.getRecentRepls = Object(j.a)(
                h.a.mark(function e() {
                  var t, n;
                  return h.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), r.props.client.query({ query: C })
                          );
                        case 2:
                          (t = e.sent),
                            (n = t.data),
                            r.setState({ recentRepls: n.recentRepls });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (r.state = {
                search: "",
                isUrl: !!e.showHosted,
                options: e.repl ? [e.repl] : [],
                recentRepls: [],
              }),
              r
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getRecentRepls();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = this.state,
                    n = t.options,
                    o = t.isUrl,
                    a = t.search,
                    i = t.recentRepls,
                    s = o && a.includes("repl.co") ? "hostedUrl" : "title";
                  return Object(r.jsxs)("div", {
                    className: "jsx-932420000",
                    children: [
                      Object(r.jsx)(w.a, {}),
                      Object(r.jsx)(O.a, {
                        onBlurResetsInput: !1,
                        onCloseResetsInput: !1,
                        autoload: !1,
                        noResultsText: o || !a ? null : "No repls found",
                        labelKey: s,
                        valueKey: "id",
                        options: !a && i ? i : n,
                        name: "repl",
                        value: e.repl ? e.repl.id : void 0,
                        onInputChange: this.onInputChange,
                        onChange: function (t) {
                          return e.onChange({
                            repl: t,
                            showHosted: a.includes("repl.co"),
                          });
                        },
                        placeholder: "Pick one of your repls (type to search)",
                      }),
                      Object(r.jsx)(u.a, {
                        id: "932420000",
                        children: [
                          ".Select .Select-input input{width:100% !important;}",
                          ".Select .Select-input{width:100% !important;}",
                          ".Select-multi-value-wrapper{width:100%;display:block;}",
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(d.Component);
      N.defaultProps = { theme: "replitLight" };
      var T = Object(v.withApollo)(N);
      function D(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(c.a)(e);
          if (t) {
            var o = Object(c.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(s.a)(this, n);
        };
      }
      var R = (function (e) {
        Object(i.a)(n, e);
        var t = D(n);
        function n() {
          var e;
          Object(o.a)(this, n);
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(a))).beforeUnload =
              function () {
                var e =
                  "Are you sure you want to leave? Changes you made may not be saved.";
                return (window.event.returnValue = e), e;
              }),
            e
          );
        }
        return (
          Object(a.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                window.addEventListener("beforeunload", this.beforeUnload);
                var e,
                  t = this.props.autofocus;
                t &&
                  ("title" === t
                    ? (e = this.title)
                    : "body" === t && (e = this.body),
                  e && "function" === typeof e.focus && e.focus());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("beforeunload", this.beforeUnload);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props;
                return Object(r.jsxs)("div", {
                  className: "jsx-3462704179 board-new-post",
                  children: [
                    Object(r.jsxs)(p.a, {
                      onSubmit: t.onSubmit,
                      children: [
                        t.children
                          ? Object(r.jsx)("div", {
                              className: "jsx-3462704179 board-new-post-row",
                              children: t.children,
                            })
                          : null,
                        t.showReplSelector
                          ? Object(r.jsx)("div", {
                              className: "jsx-3462704179 board-new-post-row",
                              children: Object(r.jsx)(T, {
                                repl: t.repl,
                                showHosted: t.showHosted,
                                onChange: function (e) {
                                  return t.onChange(e);
                                },
                              }),
                            })
                          : null,
                        Object(r.jsx)("div", {
                          className: "jsx-3462704179 board-new-post-row",
                          children: Object(r.jsx)(p.b, {
                            validator: "postTitle",
                            name: "title",
                            placeholder: t.titleCta || "Add a title",
                            value: t.title,
                            onChange: function (e) {
                              return t.onChange({ title: e.target.value });
                            },
                            disabled: t.titleDisabled,
                            required: !0,
                            ref: function (t) {
                              return (e.title = t);
                            },
                          }),
                        }),
                        Object(r.jsx)("div", {
                          className: "jsx-3462704179 board-new-post-row",
                          children: Object(r.jsx)(f.a, {
                            uniqueId: t.title,
                            name: "body",
                            value: t.body,
                            placeholder: t.bodyCta || "Post something...",
                            onChange: function (e) {
                              return t.onChange({ body: e });
                            },
                            onKeyDown: function (e) {
                              13 === e.keyCode && e.metaKey && t.onSubmit();
                            },
                            disabled: t.bodyDisabled,
                            style: { margin: 0, height: "100%" },
                            ref: function (t) {
                              return (e.body = t);
                            },
                            tall: !0,
                            required: !0,
                          }),
                        }),
                        t.hideControls
                          ? null
                          : Object(r.jsx)(b.a, {
                              cta: t.cta,
                              loading: t.loading,
                              cancelable: t.cancelable,
                              onCancel: t.onCancel,
                            }),
                      ],
                    }),
                    Object(r.jsx)(u.a, {
                      id: "3462704179",
                      children: [
                        ".board-new-post.jsx-3462704179{min-height:270px;}",
                        ".board-new-post-row.jsx-3462704179{margin-bottom:10px;}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(d.Component);
      R.defaultProps = { showReplSelector: !0 };
      t.a = R;
    },
    61: function (e, t, n) {
      n("j36g"), (e.exports = n("rGVs"));
    },
    "9vYF": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("nKUr"),
        o = n("xvhg"),
        a = n("MX0m"),
        i = n.n(a),
        s = n("q1tI"),
        c = n.n(s),
        l = n("i8i4");
      var u = n("5zsw");
      t.default = function (e) {
        var t = e.onRequestClose,
          n = e.noBorder,
          a = e.children,
          s = e.preventClose,
          d = void 0 !== s && s,
          p = e.hideX,
          f = void 0 !== p && p,
          b = e.alignTop,
          x = (function (e) {
            var t = c.a.useRef(e ? document.getElementById(e) : document.body),
              n = c.a.useRef(document.createElement("div"));
            return (
              c.a.useEffect(function () {
                return (
                  t.current && t.current.appendChild(n.current),
                  function () {
                    t.current && t.current.removeChild(n.current);
                  }
                );
              }, []),
              {
                renderToPortal: c.a.useCallback(
                  function (e) {
                    return Object(l.createPortal)(e, n.current);
                  },
                  [n.current]
                ),
              }
            );
          })("modal-root").renderToPortal,
          h = c.a.useState(!1),
          j = Object(o.a)(h, 2),
          m = j[0],
          g = j[1];
        function y() {
          d ||
            (k(!1),
            setTimeout(function () {
              t && t();
            }, 150));
        }
        c.a.useEffect(function () {
          return g(!0);
        }, []);
        var v = c.a.useState(!1),
          O = Object(o.a)(v, 2),
          w = O[0],
          k = O[1],
          P = c.a.useRef(!1);
        return (
          c.a.useEffect(
            function () {
              return (
                m && (k(!0), (window.document.body.style.overflow = "hidden")),
                function () {
                  window.document.body.style.overflow = "auto";
                }
              );
            },
            [m]
          ),
          (function (e, t, n) {
            var r = c.a.useRef(n),
              o = c.a.useRef(e);
            c.a.useEffect(
              function () {
                return (
                  o.current.addEventListener(t, r.current),
                  function () {
                    o.current.removeEventListener(t, r.current);
                  }
                );
              },
              [o.current, t, r.current]
            );
          })(window.document.body, "keydown", function (e) {
            return 27 === e.keyCode && y();
          }),
          x(
            m
              ? Object(r.jsxs)("div", {
                  className:
                    i.a.dynamic([
                      [
                        "653439886",
                        [
                          w ? 1 : 0,
                          b ? "flex-start" : "center",
                          n ? 0 : "1px solid #888",
                          window.navigator.userAgent.match(/Trident/)
                            ? "table"
                            : "block",
                        ],
                      ],
                    ]) + " modal",
                  children: [
                    Object(r.jsx)("div", {
                      onMouseDown: function () {
                        P.current = !0;
                      },
                      onMouseUp: function () {
                        P.current && y(), (P.current = !1);
                      },
                      className:
                        i.a.dynamic([
                          [
                            "653439886",
                            [
                              w ? 1 : 0,
                              b ? "flex-start" : "center",
                              n ? 0 : "1px solid #888",
                              window.navigator.userAgent.match(/Trident/)
                                ? "table"
                                : "block",
                            ],
                          ],
                        ]) + " modal-base",
                      children: Object(r.jsxs)("div", {
                        onMouseDown: function (e) {
                          return e.stopPropagation();
                        },
                        className:
                          i.a.dynamic([
                            [
                              "653439886",
                              [
                                w ? 1 : 0,
                                b ? "flex-start" : "center",
                                n ? 0 : "1px solid #888",
                                window.navigator.userAgent.match(/Trident/)
                                  ? "table"
                                  : "block",
                              ],
                            ],
                          ]) + " modal-wrapper",
                        children: [
                          !d &&
                            !f &&
                            Object(r.jsx)("div", {
                              onClick: y,
                              className:
                                i.a.dynamic([
                                  [
                                    "653439886",
                                    [
                                      w ? 1 : 0,
                                      b ? "flex-start" : "center",
                                      n ? 0 : "1px solid #888",
                                      window.navigator.userAgent.match(
                                        /Trident/
                                      )
                                        ? "table"
                                        : "block",
                                    ],
                                  ],
                                ]) + " close-icon",
                              children: Object(r.jsx)(u.a, { size: "large" }),
                            }),
                          Object(r.jsx)("div", {
                            className:
                              i.a.dynamic([
                                [
                                  "653439886",
                                  [
                                    w ? 1 : 0,
                                    b ? "flex-start" : "center",
                                    n ? 0 : "1px solid #888",
                                    window.navigator.userAgent.match(/Trident/)
                                      ? "table"
                                      : "block",
                                  ],
                                ],
                              ]) + " modal-content",
                            children: a,
                          }),
                        ],
                      }),
                    }),
                    Object(r.jsx)(i.a, {
                      id: "653439886",
                      dynamic: [
                        w ? 1 : 0,
                        b ? "flex-start" : "center",
                        n ? 0 : "1px solid #888",
                        window.navigator.userAgent.match(/Trident/)
                          ? "table"
                          : "block",
                      ],
                      children: [
                        ".modal.__jsx-style-dynamic-selector{opacity:".concat(
                          w ? 1 : 0,
                          ";-webkit-transition:opacity 0.1s ease-in;transition:opacity 0.1s ease-in;position:fixed;left:0;top:0;width:100%;height:100%;z-index:300000;}"
                        ),
                        ".modal-base.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:"
                          .concat(
                            b ? "flex-start" : "center",
                            ";-webkit-box-align:"
                          )
                          .concat(
                            b ? "flex-start" : "center",
                            ";-ms-flex-align:"
                          )
                          .concat(b ? "flex-start" : "center", ";align-items:")
                          .concat(
                            b ? "flex-start" : "center",
                            ";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:300001;background-color:var(--color-black-50);}"
                          ),
                        ".replit-ui-theme-root.dark .modal-base.__jsx-style-dynamic-selector{background-color:var(--color-white-50);}",
                        ".modal-wrapper.__jsx-style-dynamic-selector{position:relative;max-height:80%;border-radius:5px;border:"
                          .concat(
                            n ? 0 : "1px solid #888",
                            ";z-index:2;display:"
                          )
                          .concat(
                            window.navigator.userAgent.match(/Trident/)
                              ? "table"
                              : "block",
                            ";}"
                          ),
                        ".modal-content.__jsx-style-dynamic-selector{background:var(--dropdown-background-color);color:var(--color-foreground-1);border-radius:5px;}",
                        ".close-icon.__jsx-style-dynamic-selector{opacity:0.5;color:var(--color-foreground-1);position:absolute;top:20px;right:20px;height:15px;width:15px;background-size:contain;background-position:center;background-repeat:no-repeat;cursor:pointer;}",
                        ".close-icon.__jsx-style-dynamic-selector:hover{opacity:1;}",
                      ],
                    }),
                  ],
                })
              : null
          )
        );
      };
    },
    AENu: function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n("nKUr"),
          o = n("cpVT"),
          a = n("z7pX"),
          i = n("vJKn"),
          s = n.n(i),
          c = n("rg98"),
          l = n("H+61"),
          u = n("UlJF"),
          d = n("7LId"),
          p = n("VIvw"),
          f = n("iHvq"),
          b = n("jT3O"),
          x = n("MX0m"),
          h = n.n(x),
          j = n("q1tI"),
          m = n("M85P"),
          g = n("TSYQ"),
          y = n.n(g),
          v = n("+uXX"),
          O = n("lTCR"),
          w = n.n(O),
          k = n("G5Ub"),
          P = n("n/dw"),
          S = n("kFXa"),
          C = n("LBzQ"),
          _ = n("XLFt"),
          N = n("TyLv");
        function T(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function D(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? T(Object(n), !0).forEach(function (t) {
                  Object(o.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function R(e) {
          var t = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = Object(f.a)(e);
            if (t) {
              var o = Object(f.a)(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return Object(p.a)(this, n);
          };
        }
        function E() {
          var e = Object(b.a)([
            "\n  query atMentionSuggestions(\n    $search: String\n    $limit: Int\n    $contextType: String\n    $contextId: Int\n  ) {\n    atMentionSuggestions(\n      search: $search\n      limit: $limit\n      contextType: $contextType\n      contextId: $contextId\n    ) {\n      id\n      username\n      fullName\n    }\n  }\n",
          ]);
          return (
            (E = function () {
              return e;
            }),
            e
          );
        }
        var I = w()(E()),
          M = (function (t) {
            Object(d.a)(o, t);
            var n = R(o);
            function o() {
              var t;
              Object(l.a)(this, o);
              for (
                var r = arguments.length, i = new Array(r), u = 0;
                u < r;
                u++
              )
                i[u] = arguments[u];
              return (
                ((t = n.call.apply(n, [this].concat(i))).state = {}),
                (t.onPaste = (function () {
                  var e = Object(c.a)(
                    s.a.mark(function e(n) {
                      var r, o;
                      return s.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (r = Array.from(n.clipboardData.items)
                                  .filter(function (e) {
                                    return "file" === e.kind;
                                  })
                                  .map(function (e) {
                                    return e.getAsFile();
                                  })).length
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (e.next = 5), Object(P.a)(r);
                            case 5:
                              (o = e.sent), t.onFileLoad(o);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (t.onSelectFilesClick = function () {
                  t.fileLoader && t.fileLoader.handleOpenFileBrowser();
                }),
                (t.onChange = function (e) {
                  e.currentTarget.value || t.closeUserMentionsMenu(),
                    t.props.onChange(e.currentTarget.value);
                }),
                (t.onKeyDown = function (e) {
                  32 === e.which && t.closeUserMentionsMenu(),
                    t.props.onKeyDown && t.props.onKeyDown(e);
                }),
                (t.onFileLoad = (function () {
                  var e = Object(c.a)(
                    s.a.mark(function e(n) {
                      var r, o, i, c, l, u, d, p, f, b;
                      return s.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t.props),
                                (o = r.value),
                                (i = r.onChange),
                                (c = n.map(function (e) {
                                  return "![Uploading ".concat(
                                    e.name,
                                    "...]()"
                                  );
                                })),
                                (l =
                                  t.textarea &&
                                  t.textarea.el &&
                                  t.textarea.el.selectionStart
                                    ? t.textarea.el.selectionStart
                                    : o.length),
                                (u = o.substr(0, l)),
                                (d = o.substr(l)),
                                (p = Object(a.a)(c)),
                                u && p.unshift(u),
                                d && p.push(d),
                                i(p.join("\n")),
                                (e.next = 11),
                                Promise.all(
                                  n.map(function (e) {
                                    return Object(k.d)("/data/images/upload", {
                                      image: e.result,
                                    });
                                  })
                                )
                              );
                            case 11:
                              (f = e.sent),
                                (b = c.reduce(function (e, t, r) {
                                  var o = n[r].name.replace(/\.[^/.]+$/, ""),
                                    a = f[r].url;
                                  return e.replace(
                                    t,
                                    "![".concat(o, "](").concat(a, ")")
                                  );
                                }, t.props.value)),
                                i(b);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (t.onUserMentionSelect = function (n) {
                  var r = n.username,
                    o = t.state.inputTriggerState;
                  if (o) {
                    var a = o.cursor,
                      i = o.text ? o.text.split(/\s/).shift() : "",
                      s = t.props,
                      c = s.value,
                      l = s.onChange,
                      u = c.slice(0, a.selectionStart - i.length),
                      d = "".concat(r, " "),
                      p = c.slice(u.length + i.length + 1);
                    l(u + d + p),
                      e(function () {
                        t.textarea &&
                          t.textarea.el &&
                          t.textarea.el.setSelectionRange &&
                          t.textarea.el.setSelectionRange(
                            u.length + d.length,
                            u.length + d.length
                          ),
                          e(function () {
                            return t.closeUserMentionsMenu();
                          });
                      });
                  }
                }),
                t
              );
            }
            return (
              Object(u.a)(o, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.autofocus && this.focus();
                  },
                },
                {
                  key: "handleInputTriggerChange",
                  value: function (e) {
                    var t = e.text ? e.text.split(/\s/).shift() : "";
                    this.setState({ inputTriggerState: e, search: t });
                  },
                },
                {
                  key: "closeUserMentionsMenu",
                  value: function () {
                    this.inputTriggerEndHandler &&
                      this.inputTriggerEndHandler(),
                      this.setState({
                        search: void 0,
                        inputTriggerState: void 0,
                      });
                  },
                },
                {
                  key: "focus",
                  value: function () {
                    this.textarea && this.textarea.focus();
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    this.textarea && this.textarea.blur();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.getAtMentionSuggestionsContext,
                      n = this.state.search,
                      o = this.state.inputTriggerState
                        ? this.state.inputTriggerState.cursor
                        : null,
                      a = o ? { top: o.top + o.height, left: o.left } : null;
                    a &&
                      this.textarea &&
                      this.textarea.el &&
                      (a.top -= this.textarea.el.scrollTop);
                    var i = !!o;
                    return Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsx)(S.a, {
                          ref: function (t) {
                            return (e.fileLoader = t);
                          },
                          accept: "image/*",
                          onLoad: this.onFileLoad,
                          children: function () {
                            return Object(r.jsxs)(r.Fragment, {
                              children: [
                                Object(r.jsx)(m.a, {
                                  id: e.props.uniqueId,
                                  defaultHighlightedIndex: 0,
                                  onOuterClick: function () {
                                    return e.closeUserMentionsMenu();
                                  },
                                  onChange: e.onUserMentionSelect,
                                  itemToString: function () {},
                                  isOpen: i,
                                  children: function (o) {
                                    return Object(r.jsxs)("div", {
                                      className:
                                        "jsx-1615437136 content-textarea",
                                      children: [
                                        Object(r.jsx)(
                                          C.a,
                                          D(
                                            {},
                                            o.getInputProps({
                                              ref: function (t) {
                                                return (e.textarea = t);
                                              },
                                              value: e.props.value,
                                              required: e.props.required,
                                              placeholder: e.props.placeholder,
                                              name: e.props.name,
                                              autoComplete:
                                                e.props.autoComplete,
                                              autofocus: e.props.autofocus,
                                              onChange: e.onChange,
                                              onFocus: e.props.onFocus,
                                              onPaste: e.onPaste,
                                              disabled: e.props.disabled,
                                              tall: e.props.tall,
                                              onKeyDown: function (t) {
                                                Object(N.a)(t),
                                                  e.onKeyDown(t),
                                                  i ||
                                                    (t.nativeEvent.preventDownshiftDefault =
                                                      !0),
                                                  "Tab" === t.key &&
                                                    (t.preventDefault(),
                                                    o.selectHighlightedItem());
                                              },
                                              inputTriggerProps: {
                                                keyboardEvent: "onKeyUp",
                                                endTrigger: function (t) {
                                                  e.inputTriggerEndHandler = t;
                                                },
                                                trigger: function (e) {
                                                  if (!e.target.value)
                                                    return !1;
                                                  var t = e.key;
                                                  return (
                                                    (t &&
                                                      "Unidentified" !== t) ||
                                                      (t =
                                                        e.target.value.charAt(
                                                          e.target
                                                            .selectionStart - 1
                                                        )),
                                                    "@" === t &&
                                                      (!(
                                                        !e.target.value ||
                                                        1 !==
                                                          e.target.value.length
                                                      ) ||
                                                        /\s/.test(
                                                          e.target.value.charAt(
                                                            e.target
                                                              .selectionStart -
                                                              2
                                                          )
                                                        ))
                                                  );
                                                },
                                                onStart: function (t) {
                                                  e.handleInputTriggerChange(t);
                                                },
                                                onType: function (t) {
                                                  e.handleInputTriggerChange(t);
                                                },
                                                onCancel: function () {
                                                  return e.closeUserMentionsMenu();
                                                },
                                              },
                                            })
                                          )
                                        ),
                                        o.isOpen && void 0 !== n
                                          ? Object(r.jsx)(v.Query, {
                                              query: I,
                                              variables: D(
                                                { search: n, limit: 6 },
                                                t ? t() : {}
                                              ),
                                              children: function (e) {
                                                var t = e.data,
                                                  n = e.loading,
                                                  i = e.variables,
                                                  s = [];
                                                if (
                                                  !n &&
                                                  t &&
                                                  t.atMentionSuggestions
                                                )
                                                  s = t.atMentionSuggestions;
                                                else if (
                                                  n &&
                                                  i.search &&
                                                  t &&
                                                  t.atMentionSuggestions
                                                ) {
                                                  var c =
                                                    i.search.toLowerCase();
                                                  s =
                                                    t.atMentionSuggestions.filter(
                                                      function (e) {
                                                        return e.username
                                                          .toLowerCase()
                                                          .startsWith(c);
                                                      }
                                                    );
                                                }
                                                return n || s.length
                                                  ? Object(r.jsxs)(
                                                      "ul",
                                                      D(
                                                        D(
                                                          { style: a },
                                                          o.getMenuProps()
                                                        ),
                                                        {},
                                                        {
                                                          className:
                                                            "jsx-1615437136 content-textarea-mentions",
                                                          children: [
                                                            s.map(function (
                                                              e,
                                                              t
                                                            ) {
                                                              return Object(
                                                                r.jsxs
                                                              )(
                                                                "li",
                                                                D(
                                                                  D(
                                                                    {},
                                                                    o.getItemProps(
                                                                      {
                                                                        key: e.id,
                                                                        item: e,
                                                                        index:
                                                                          t,
                                                                      }
                                                                    )
                                                                  ),
                                                                  {},
                                                                  {
                                                                    className:
                                                                      "jsx-1615437136 " +
                                                                      (y()(
                                                                        "content-textarea-mentions-item",
                                                                        {
                                                                          "content-textarea-mentions-item-active":
                                                                            o.highlightedIndex ===
                                                                            t,
                                                                        }
                                                                      ) || ""),
                                                                    children: [
                                                                      Object(
                                                                        r.jsx
                                                                      )("b", {
                                                                        className:
                                                                          "jsx-1615437136",
                                                                        children:
                                                                          e.username,
                                                                      }),
                                                                      e.fullName
                                                                        ? Object(
                                                                            r.jsx
                                                                          )(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "jsx-1615437136",
                                                                              children:
                                                                                e.fullName,
                                                                            }
                                                                          )
                                                                        : null,
                                                                    ],
                                                                  }
                                                                )
                                                              );
                                                            }),
                                                            n
                                                              ? Object(r.jsx)(
                                                                  "li",
                                                                  {
                                                                    className:
                                                                      "jsx-1615437136 content-textarea-mentions-item-loader",
                                                                    children:
                                                                      Object(
                                                                        r.jsx
                                                                      )(_.a, {
                                                                        style: {
                                                                          with: 20,
                                                                          height: 20,
                                                                        },
                                                                      }),
                                                                  }
                                                                )
                                                              : null,
                                                          ],
                                                        }
                                                      )
                                                    )
                                                  : null;
                                              },
                                            })
                                          : null,
                                      ],
                                    });
                                  },
                                }),
                                Object(r.jsxs)("div", {
                                  className:
                                    "jsx-1615437136 content-textarea-footer",
                                  children: [
                                    Object(r.jsxs)("span", {
                                      style: { marginRight: "25px" },
                                      className: "jsx-1615437136",
                                      children: [
                                        "To add an image, drag and drop,",
                                        " ",
                                        Object(r.jsx)("a", {
                                          onClick: function (t) {
                                            t.preventDefault(),
                                              e.onSelectFilesClick();
                                          },
                                          className: "jsx-1615437136",
                                          children: "select files",
                                        }),
                                        " ",
                                        "or paste.",
                                      ],
                                    }),
                                    Object(r.jsxs)("span", {
                                      className: "jsx-1615437136 markdown-tip",
                                      children: [
                                        "Style your post with",
                                        " ",
                                        Object(r.jsx)("a", {
                                          target: "_blank",
                                          href: "https://replit.com/talk/learn/A-Quick-Guide-to-Replit-Talk-Markdown/7448",
                                          className: "jsx-1615437136",
                                          children: "Markdown",
                                        }),
                                        "!",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            });
                          },
                        }),
                        Object(r.jsx)(h.a, {
                          id: "1615437136",
                          children: [
                            ".content-textarea.jsx-1615437136{position:relative;resize:vertical;}",
                            ".content-textarea-mentions.jsx-1615437136{position:absolute;list-style:none;cursor:pointer;background-color:var(--color-background-1);color:var(--color-foreground-1);box-shadow:0 0 5px var(--color-foreground-3);z-index:400;max-width:250px;min-width:150px;}",
                            ".content-textarea-mentions.jsx-1615437136>li.jsx-1615437136{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;white-space:nowrap;border-top:1px solid var(--color-control-3);border-left:1px solid var(--color-control-3);border-right:1px solid var(--color-control-3);}",
                            ".content-textarea-mentions.jsx-1615437136>li.jsx-1615437136:last-child{border-bottom:1px solid var(--color-control-3);}",
                            ".content-textarea-mentions-item.jsx-1615437136{padding:8px;font-size:14px;}",
                            ".content-textarea-mentions-item-loader.jsx-1615437136{padding:6px 0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                            ".content-textarea-mentions-item.jsx-1615437136 span.jsx-1615437136{margin-left:5px;font-size:12px;overflow:hidden;text-overflow:ellipsis;}",
                            ".content-textarea-mentions-item-active.jsx-1615437136,.content-textarea-mentions-item-active.jsx-1615437136:hover{border-color:var(--color-primary-1);background-color:var(--color-primary-1);color:var(--color-white);}",
                            ".content-textarea-footer.jsx-1615437136{color:var(--color-foreground-1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:5px 0;font-size:14px;}",
                            ".markdown-tip.jsx-1615437136{text-align:right;}",
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              o
            );
          })(j.Component);
        t.a = M;
      }.call(this, n("CfyG").setImmediate));
    },
    CIYy: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("jT3O"),
        a = n("MX0m"),
        i = n.n(a),
        s = (n("q1tI"), n("lTCR")),
        c = n.n(s),
        l = n("+uXX"),
        u = n("8Fln"),
        d = n("igIU");
      function p() {
        var e = Object(o.a)([
          "\n  {\n    boards {\n      id\n      name\n      cta\n      titleCta\n      bodyCta\n      template\n      buttonCta\n      replRequired\n      description\n      isLocked\n      isPrivate\n      canPost\n    }\n  }\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var f = c()(p());
      t.a = function (e) {
        return Object(r.jsx)(l.Query, {
          query: f,
          children: function (t) {
            var n = t.data;
            return n && n.boards
              ? Object(r.jsxs)("div", {
                  className: "jsx-1371012418",
                  children: [
                    Object(r.jsx)(d.a, {}),
                    Object(r.jsx)(u.a, {
                      placeholder: "Pick a board",
                      searchable: !1,
                      clearable: !1,
                      value: e.board ? e.board.id : "",
                      onChange: function (t) {
                        var r = t.value;
                        return e.onBoardSelected(
                          n.boards.find(function (e) {
                            return e.id === parseInt(r, 10);
                          })
                        );
                      },
                      options: n.boards
                        .filter(function (e) {
                          return e.canPost;
                        })
                        .map(function (e) {
                          return {
                            value: e.id,
                            label: e.name + (e.isPrivate ? " (private)" : ""),
                          };
                        }),
                    }),
                    Object(r.jsx)(i.a, {
                      id: "1371012418",
                      children: [
                        "div.jsx-1371012418{font-size:14px;}",
                        "select.jsx-1371012418{margin-left:4px;}",
                      ],
                    }),
                  ],
                })
              : null;
          },
        });
      };
    },
    FWhU: function (e, t, n) {
      "use strict";
      var r = n("cpVT"),
        o = n("nKUr"),
        a = n("dhJC"),
        i = (n("q1tI"), n("/MKj")),
        s = n("tidx"),
        c = n("+bZ2"),
        l = n("7J1T");
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = function (e) {
        var t = e.promptCount,
          n = e.promptCountThreshold,
          r = e.dismissed,
          i = e.show,
          l = e.hideModal,
          u = e.dismiss,
          p = e.isLoggedIn,
          f = Object(a.a)(e, [
            "promptCount",
            "promptCountThreshold",
            "dismissed",
            "show",
            "hideModal",
            "dismiss",
            "isLoggedIn",
          ]);
        return p || !(i || t >= n) || r
          ? null
          : Object(o.jsx)(c.a, {
              hideModal: function () {
                u(), l && l();
              },
              children: Object(o.jsx)(s.a, d({}, f)),
            });
      };
      (p.defaultProps = { promptCountThreshold: 5 }),
        (t.a = Object(i.c)(
          function (e) {
            return {
              isLoggedIn: e.user.userInfo.isLoggedIn,
              show: !e.user.userInfo.isLoggedIn && e.user.authModal.show,
              promptCount: e.user.authModal.promptCount,
              dismissed: e.user.authModal.dismissed,
            };
          },
          { dismiss: l.b }
        )(p));
    },
    LBzQ: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("cpVT"),
        a = n("dhJC"),
        i = n("H+61"),
        s = n("UlJF"),
        c = n("7LId"),
        l = n("VIvw"),
        u = n("iHvq"),
        d = n("MX0m"),
        p = n.n(d),
        f = n("q1tI"),
        b = n("Tvhg"),
        x = n.n(b);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(u.a)(e);
          if (t) {
            var o = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(l.a)(this, n);
        };
      }
      var g = (function (e) {
        Object(c.a)(n, e);
        var t = m(n);
        function n() {
          return Object(i.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(s.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.autoFocus && this.focus();
              },
            },
            {
              key: "focus",
              value: function () {
                this.el && this.el.focus();
              },
            },
            {
              key: "blur",
              value: function () {
                this.el && this.el.blur();
              },
            },
            {
              key: "select",
              value: function () {
                this.el && this.el.select();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.inputTriggerProps,
                  o = t.tall,
                  i = Object(a.a)(t, ["inputTriggerProps", "tall"]),
                  s = n
                    ? function (e) {
                        return Object(r.jsx)(
                          x.a,
                          j(j({}, n), {}, { children: e })
                        );
                      }
                    : function (e) {
                        return e;
                      };
                return Object(r.jsxs)(r.Fragment, {
                  children: [
                    s(
                      Object(r.jsx)(
                        "textarea",
                        j(
                          j(
                            {
                              ref: function (t) {
                                return (e.el = t);
                              },
                            },
                            i
                          ),
                          {},
                          {
                            className:
                              "jsx-2078473158 " +
                              p.a.dynamic([["2356189779", [o ? 250 : 60]]]) +
                              " form-textarea",
                          }
                        )
                      )
                    ),
                    Object(r.jsx)(p.a, {
                      id: "2078473158",
                      children: [
                        ".form-textarea.jsx-2078473158{resize:vertical;background-color:var(--color-background-1);color:var(--coloe-foreground-1);}",
                        ".form-textarea.jsx-2078473158:focus{border-color:var(--color-primary-1);}",
                        ".form-textarea[disabled].jsx-2078473158{background-color:var(--color-background-3);color:var(--color-foreground-2);opacity:0.5;}",
                      ],
                    }),
                    Object(r.jsx)(p.a, {
                      id: "2356189779",
                      dynamic: [o ? 250 : 60],
                      children: [
                        ".form-textarea.__jsx-style-dynamic-selector{color:var(--color-foreground-1);width:100%;max-width:100%;min-width:100%;min-height:".concat(
                          o ? 250 : 60,
                          "px;height:100%;box-sizing:border-box;padding:var(--spacing-1);outline:0px;font-size:15px;border:1px solid var(--color-foreground-3);line-height:1.4;border-radius:var(--border-radius-1);}"
                        ),
                        ".form-textarea.__jsx-style-dynamic-selector:focus{outline:0 none;}",
                        ".form-textarea[readonly].__jsx-style-dynamic-selector{cursor:not-allowed;}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(f.Component);
      (g.defaultProps = { autoComplete: "off", required: !1 }), (t.a = g);
    },
    LOQN: function (e, t, n) {
      "use strict";
      var r = n("xvhg"),
        o = n("H+61"),
        a = n("UlJF"),
        i = (function () {
          function e() {
            Object(o.a)(this, e), (this._listeners = []);
          }
          return (
            Object(a.a)(e, [
              {
                key: "listenOnce",
                value: function (e, t, n) {
                  if ((this._listeners.push([e, t, n]), !e.once))
                    throw new Error("Target does not allow once");
                  e.once(t, n);
                },
              },
              {
                key: "listen",
                value: function (e, t, n) {
                  this._listeners.push([e, t, n]),
                    e.on
                      ? e.on(t, n)
                      : e.addListener
                      ? e.addListener(t, n)
                      : e.addEventListener && e.addEventListener(t, n);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._listeners.forEach(function (e) {
                    var t = Object(r.a)(e, 3),
                      n = t[0],
                      o = t[1],
                      a = t[2];
                    n.removeListener
                      ? n.removeListener(o, a)
                      : n.removeEventListener && n.removeEventListener(o, a);
                  });
                },
              },
            ]),
            e
          );
        })();
      t.a = i;
    },
    QSUB: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return f;
      }),
        n.d(t, "a", function () {
          return b;
        });
      var r = n("nKUr"),
        o = n("dhJC"),
        a = n("cpVT"),
        i = n("MX0m"),
        s = n.n(i),
        c = (n("q1tI"), n("TSYQ")),
        l = n.n(c);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = [
        "a.paper-action.jsx-1612855347:active,a.paper-action.jsx-1612855347:focus,a.paper-action.jsx-1612855347:hover{-webkit-text-decoration:none;text-decoration:none;}",
        "button.paper-action.jsx-1612855347{cursor:pointer;}",
        "button.paper-action.jsx-1612855347:focus{outline:0 none;}",
        ".paper-action.jsx-1612855347{border-width:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 12px;-webkit-transition:-webkit-transform 200ms;-webkit-transition:transform 200ms;transition:transform 200ms;}",
        ".paper-action.border.jsx-1612855347{border-width:1px;border-style:solid;}",
        ".paper-action.rounded.jsx-1612855347{border-radius:3px;}",
        ".paper-action.center.jsx-1612855347{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
        ".paper-action.jsx-1612855347:active{-webkit-transform:scale(0.97);-ms-transform:scale(0.97);transform:scale(0.97);}",
        ".paper-action.center.jsx-1612855347 .text.jsx-1612855347{text-align:center;}",
        ".paper-action-content.jsx-1612855347{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:left;overflow:hidden;}",
        ".paper-action-icon-left.jsx-1612855347,.paper-action-icon-right.jsx-1612855347{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
        ".paper-action-icon-left.jsx-1612855347 svg,.paper-action-icon-right.jsx-1612855347 svg,.paper-action-icon-left.jsx-1612855347 img,.paper-action-icon-right.jsx-1612855347 img{max-width:100%;max-height:100%;display:block;}",
        ".paper-action-content.text.jsx-1612855347{font-size:14px;}",
        ".paper-action-title.jsx-1612855347,.paper-action-subtitle.jsx-1612855347{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}",
        ".paper-action-title.jsx-1612855347{font-size:14px;}",
        ".paper-action-subtitle.jsx-1612855347{font-size:12px;opacity:0.6;}",
        ".paper-action-icon-left.jsx-1612855347{width:15px;margin-right:4px;}",
        ".paper-action-icon-right.jsx-1612855347{width:15px;margin-left:6px;}",
        ".paper-action-icon-arrow.jsx-1612855347{font-size:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:-webkit-transform 200ms;-webkit-transition:transform 200ms;transition:transform 200ms;}",
        ".large.jsx-1612855347 .paper-action-icon-arrow.jsx-1612855347{font-size:18px;}",
        ".large.jsx-1612855347 .paper-action-content.text.jsx-1612855347{font-size:18px;}",
        ".large.jsx-1612855347 .paper-action-title.jsx-1612855347{font-size:18px;}",
        ".large.jsx-1612855347 .paper-action-subtitle.jsx-1612855347{font-size:14px;}",
        ".subtitled.jsx-1612855347 .paper-action-icon-left.jsx-1612855347{width:30px;margin-right:4px;}",
      ];
      p.__hash = "1612855347";
      var f = function (e) {
          return Object(r.jsx)(x, d({ Component: "a" }, e));
        },
        b = function (e) {
          return Object(r.jsx)(x, d({ Component: "button" }, e));
        },
        x = function (e) {
          var t = e.children,
            n = e.Component,
            a = e.iconRight,
            i = e.primary,
            c = e.large,
            u = e.arrow,
            f = e.center,
            b = e.border,
            x = e.rounded,
            h =
              (e.block,
              e.iconLeft,
              e.titleText,
              e.subtitle,
              Object(o.a)(e, [
                "children",
                "Component",
                "iconRight",
                "primary",
                "large",
                "arrow",
                "center",
                "border",
                "rounded",
                "block",
                "iconLeft",
                "titleText",
                "subtitle",
              ]));
          return Object(r.jsxs)(
            n,
            d(
              d({}, h),
              {},
              {
                className:
                  "jsx-".concat(p.__hash) +
                  " " +
                  s.a.dynamic([
                    [
                      "3371471346",
                      [
                        e.block ? "flex" : "inline-flex",
                        e.block ? "100%" : "auto",
                      ],
                    ],
                  ]) +
                  " " +
                  (l()("paper-action", h.className, {
                    subtitled: e.subtitle,
                    primary: i,
                    large: c,
                    center: f,
                    border: b,
                    rounded: x,
                  }) || ""),
                children: [
                  e.iconLeft
                    ? Object(r.jsx)("div", {
                        className:
                          "jsx-".concat(p.__hash) +
                          " " +
                          s.a.dynamic([
                            [
                              "3371471346",
                              [
                                e.block ? "flex" : "inline-flex",
                                e.block ? "100%" : "auto",
                              ],
                            ],
                          ]) +
                          " paper-action-icon-left",
                        children: e.iconLeft,
                      })
                    : null,
                  Object(r.jsxs)("div", {
                    className:
                      "jsx-".concat(p.__hash) +
                      " " +
                      s.a.dynamic([
                        [
                          "3371471346",
                          [
                            e.block ? "flex" : "inline-flex",
                            e.block ? "100%" : "auto",
                          ],
                        ],
                      ]) +
                      " " +
                      (l()("paper-action-content", {
                        text: "string" === typeof t,
                      }) || ""),
                    children: [
                      e.titleText
                        ? Object(r.jsx)("div", {
                            className:
                              "jsx-".concat(p.__hash) +
                              " " +
                              s.a.dynamic([
                                [
                                  "3371471346",
                                  [
                                    e.block ? "flex" : "inline-flex",
                                    e.block ? "100%" : "auto",
                                  ],
                                ],
                              ]) +
                              " paper-action-title",
                            children: e.titleText,
                          })
                        : null,
                      e.subtitle
                        ? Object(r.jsx)("div", {
                            className:
                              "jsx-".concat(p.__hash) +
                              " " +
                              s.a.dynamic([
                                [
                                  "3371471346",
                                  [
                                    e.block ? "flex" : "inline-flex",
                                    e.block ? "100%" : "auto",
                                  ],
                                ],
                              ]) +
                              " paper-action-subtitle",
                            children: e.subtitle,
                          })
                        : null,
                      t || null,
                    ],
                  }),
                  a || u
                    ? Object(r.jsx)("div", {
                        className:
                          "jsx-".concat(p.__hash) +
                          " " +
                          s.a.dynamic([
                            [
                              "3371471346",
                              [
                                e.block ? "flex" : "inline-flex",
                                e.block ? "100%" : "auto",
                              ],
                            ],
                          ]) +
                          " paper-action-icon-right",
                        children: u
                          ? Object(r.jsx)("div", {
                              className:
                                "jsx-".concat(p.__hash) +
                                " " +
                                s.a.dynamic([
                                  [
                                    "3371471346",
                                    [
                                      e.block ? "flex" : "inline-flex",
                                      e.block ? "100%" : "auto",
                                    ],
                                  ],
                                ]) +
                                " paper-action-icon-arrow",
                              children: Object(r.jsx)("div", {
                                className:
                                  "jsx-".concat(p.__hash) +
                                  " " +
                                  s.a.dynamic([
                                    [
                                      "3371471346",
                                      [
                                        e.block ? "flex" : "inline-flex",
                                        e.block ? "100%" : "auto",
                                      ],
                                    ],
                                  ]),
                                children: "\u203a",
                              }),
                            })
                          : a,
                      })
                    : null,
                  Object(r.jsx)(s.a, { id: p.__hash, children: p }),
                  Object(r.jsx)(s.a, {
                    id: "3371471346",
                    dynamic: [
                      e.block ? "flex" : "inline-flex",
                      e.block ? "100%" : "auto",
                    ],
                    children: [
                      ".paper-action.__jsx-style-dynamic-selector{color:var(--color-foreground-1);background-color:var(--color-background-1);border-color:var(--color-control-1);display:"
                        .concat(e.block ? "flex" : "inline-flex", ";width:")
                        .concat(
                          e.block ? "100%" : "auto",
                          ";-webkit-transition:0.2s;transition:0.2s;}"
                        ),
                      ".paper-action.__jsx-style-dynamic-selector:hover{box-shadow:0px 4px 16px 0px rgba(0,0,0,0.08);}",
                      ".paper-action.__jsx-style-dynamic-selector:focus{background-color:var(--color-control-3);}",
                      ".paper-action.primary.__jsx-style-dynamic-selector{color:var(--color-white);background-color:var(--color-primary-1);}",
                      ".paper-action.primary.__jsx-style-dynamic-selector:hover{background-color:var(--color-primary-2);}",
                      ".paper-action.primary.__jsx-style-dynamic-selector:focus{background-color:var(--color-primary-3);}",
                    ],
                  }),
                ],
              }
            )
          );
        };
      x.defaultProps = { border: !0, rounded: !0 };
    },
    SlBq: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return x;
      }),
        n.d(t, "b", function () {
          return j;
        }),
        n.d(t, "d", function () {
          return m;
        });
      var r = n("nKUr"),
        o = n("cpVT"),
        a = n("MX0m"),
        i = n.n(a),
        s = n("TSYQ"),
        c = n.n(s),
        l = n("tZOq"),
        u = n("YFqc"),
        d = n.n(u),
        p = n("20a2");
      n("q1tI");
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var x = l.o.Past_7Days,
        h =
          (Object.values(l.o),
          function (e) {
            var t = e.toLowerCase();
            return { value: t, label: t.replace(/_/g, " "), karmaSince: e };
          }),
        j = [
          h(l.o.Past_7Days),
          h(l.o.Past_30Days),
          h(l.o.PastYear),
          { label: "all time", value: "all_time" },
        ],
        m = function (e) {
          if (!e) return x;
          switch (e.toUpperCase()) {
            case l.o.Past_24Hours:
              return l.o.Past_24Hours;
            case l.o.Past_7Days:
              return l.o.Past_7Days;
            case l.o.Past_30Days:
              return l.o.Past_30Days;
            case l.o.PastYear:
              return l.o.PastYear;
            default:
              return;
          }
        },
        g = x.toLowerCase();
      t.c = function (e) {
        var t = e.pathname,
          n = e.asPath,
          o = e.className,
          a = Object(p.useRouter)(),
          s = a.query.since;
        return Object(r.jsxs)("div", {
          className: "jsx-849861545 " + (o || ""),
          children: [
            j.map(function (e) {
              var o,
                i = e.label,
                l = e.value;
              o = l === g ? { since: "" } : { since: l };
              var u = c()({
                karma_since_nav_item_active: s === l || (!s && l === g),
              });
              return Object(r.jsx)(
                d.a,
                {
                  as: { pathname: n.split("?").shift(), query: o },
                  href: { pathname: t, query: b(b({}, a ? a.query : {}), o) },
                  scroll: !1,
                  children: Object(r.jsx)("a", {
                    className: "jsx-849861545 " + (u || ""),
                    children: i,
                  }),
                },
                l
              );
            }),
            Object(r.jsx)(i.a, {
              id: "849861545",
              children: [
                "a.jsx-849861545{margin-right:10px;}",
                ".karma_since_nav_item_active.jsx-849861545{-webkit-text-decoration:underline;text-decoration:underline;}",
              ],
            }),
          ],
        });
      };
    },
    Tvhg: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n("q1tI"),
        i = l(a),
        s = l(n("17x9")),
        c = l(n("oOwn"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t, n) {
        var r = (0, c.default)(t, t.selectionEnd),
          o = {
            hookType: e,
            cursor: {
              selectionStart: t.selectionStart,
              selectionEnd: t.selectionEnd,
              top: r.top,
              left: r.left,
              height: r.height,
            },
          };
        return n ? ((o.text = t.value.substr(n, t.selectionStart)), o) : o;
      }
      var d = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" !== typeof t && "function" !== typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.state = { triggered: !1, triggerStartPosition: null }),
            (n.handleTrigger = n.handleTrigger.bind(n)),
            (n.resetState = n.resetState.bind(n)),
            (n.element = n.props.elementRef),
            n
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.endTrigger(this.resetState);
              },
            },
            {
              key: "handleTrigger",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.trigger,
                  o = n.onStart,
                  a = n.onCancel,
                  i = n.onType,
                  s = n.keyboardEvent,
                  c = e.which,
                  l = e.shiftKey,
                  d = e.metaKey,
                  p = e.ctrlKey,
                  f = e.target.selectionStart,
                  b = this.state,
                  x = b.triggered,
                  h = b.triggerStartPosition;
                if (x) {
                  if (8 === c && f <= h)
                    return (
                      this.setState(
                        { triggered: !1, triggerStartPosition: null },
                        function () {
                          setTimeout(function () {
                            a(u("cancel", t.element));
                          }, 0);
                        }
                      ),
                      null
                    );
                  setTimeout(function () {
                    i(u("typing", t.element, h));
                  }, 0);
                } else if (
                  "function" === typeof r
                    ? r(e)
                    : c === r.keyCode &&
                      l === !!r.shiftKey &&
                      p === !!r.ctrlKey &&
                      d === !!r.metaKey
                )
                  return (
                    this.setState(
                      {
                        triggered: !0,
                        triggerStartPosition: f + ("onKeyDown" === s ? 1 : 0),
                      },
                      function () {
                        setTimeout(function () {
                          o(u("start", t.element));
                        }, 0);
                      }
                    ),
                    null
                  );
                return null;
              },
            },
            {
              key: "resetState",
              value: function () {
                this.setState({ triggered: !1, triggerStartPosition: null });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.elementRef,
                  o = t.children,
                  a =
                    (t.trigger,
                    t.onStart,
                    t.onCancel,
                    t.onType,
                    t.endTrigger,
                    t.keyboardEvent),
                  s = (function (e, t) {
                    var n = {};
                    for (var r in e)
                      t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) &&
                          (n[r] = e[r]));
                    return n;
                  })(t, [
                    "elementRef",
                    "children",
                    "trigger",
                    "onStart",
                    "onCancel",
                    "onType",
                    "endTrigger",
                    "keyboardEvent",
                  ]);
                return (
                  (s[a] = this.handleTrigger),
                  i.default.createElement(
                    "div",
                    r({ role: "textbox", tabIndex: -1 }, s),
                    n
                      ? o
                      : i.default.Children.map(
                          this.props.children,
                          function (t) {
                            return i.default.cloneElement(t, {
                              ref: function (n) {
                                (e.element = n),
                                  "function" === typeof t.ref && t.ref(n);
                              },
                            });
                          }
                        )
                  )
                );
              },
            },
          ]),
          t
        );
      })(a.Component);
      (d.propTypes = {
        trigger: s.default.oneOfType([
          s.default.func,
          s.default.shape({
            keyCode: s.default.number,
            shiftKey: s.default.bool,
            ctrlKey: s.default.bool,
            metaKey: s.default.bool,
          }),
        ]),
        onStart: s.default.func,
        onCancel: s.default.func,
        onType: s.default.func,
        endTrigger: s.default.func,
        children: s.default.element.isRequired,
        elementRef: s.default.element,
        keyboardEvent: s.default.oneOf(["onKeyDown", "onKeyUp"]),
      }),
        (d.defaultProps = {
          trigger: { keyCode: null, shiftKey: !1, ctrlKey: !1, metaKey: !1 },
          onStart: function () {},
          onCancel: function () {},
          onType: function () {},
          endTrigger: function () {},
          elementRef: null,
          keyboardEvent: "onKeyDown",
        }),
        (t.default = d);
    },
    XpCD: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return v;
        });
      var r = n("cpVT"),
        o = n("nKUr"),
        a = n("dhJC"),
        i = n("H+61"),
        s = n("UlJF"),
        c = n("7LId"),
        l = n("VIvw"),
        u = n("iHvq"),
        d = n("q1tI"),
        p = n("2SQs"),
        f = n.n(p),
        b = n("17x9"),
        x = n.n(b),
        h = n("BvvR");
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(u.a)(e);
          if (t) {
            var o = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(l.a)(this, n);
        };
      }
      var y = (function (e) {
        Object(c.a)(n, e);
        var t = g(n);
        function n() {
          var e;
          Object(i.a)(this, n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(o))).onValidation = function (
              t,
              n
            ) {
              e.validations[t] = n;
            }),
            (e.onSubmit = function (t) {
              for (var n in (t.preventDefault(), e.inputs))
                if ((e.inputs[n].validateNow(), e.validations[n]))
                  return void e.inputs[n].focus();
              e.props.onSubmit(t);
            }),
            (e.register = function (t, n) {
              e.inputs[t] = n;
            }),
            (e.validations = {}),
            (e.inputs = {}),
            e
          );
        }
        return (
          Object(s.a)(n, [
            {
              key: "getChildContext",
              value: function () {
                return {
                  validatedForm: {
                    register: this.register,
                    onValidation: this.onValidation,
                  },
                };
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.Component,
                  n = e.children,
                  r = Object(a.a)(e, ["Component", "children"]);
                return Object(o.jsx)(
                  t,
                  m(
                    m({}, f()(r, ["onSubmit"])),
                    {},
                    { onSubmit: this.onSubmit, children: n }
                  )
                );
              },
            },
          ]),
          n
        );
      })(d.Component);
      (y.childContextTypes = { validatedForm: x.a.object }),
        (y.defaultProps = { Component: "form" });
      var v = (function (e) {
        Object(c.a)(n, e);
        var t = g(n);
        function n() {
          return Object(i.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(s.a)(n, [
            {
              key: "focus",
              value: function () {
                this.input && this.input.focus();
              },
            },
            {
              key: "select",
              value: function () {
                this.input && this.input.select();
              },
            },
            {
              key: "blur",
              value: function () {
                this.input && this.input.blur();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.context.validatedForm,
                  n = t.onValidation,
                  r = t.register;
                return Object(o.jsx)(
                  h.a,
                  m(
                    m({}, f()(this.props, ["onValidation", "ref"])),
                    {},
                    {
                      onValidation: function (t) {
                        return n(e.props.name, t);
                      },
                      ref: function (t) {
                        (e.input = t), r(e.props.name, t);
                      },
                      theme: this.props.theme,
                    }
                  )
                );
              },
            },
          ]),
          n
        );
      })(d.Component);
      (v.contextTypes = { validatedForm: x.a.object.isRequired }),
        (v.defaultProps = { theme: "replitLight" });
    },
    b518: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "d", function () {
          return p;
        });
      var r = n("xvhg"),
        o = n("cpVT"),
        a = n("kAqP"),
        i = n.n(a),
        s = function (e) {
          return { className: e.props.className, styles: e.props.children };
        };
      function c(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        n.forEach(function (t) {
          e["on".concat(t[0].toUpperCase()).concat(t.slice(1), "Change")] =
            function (n) {
              var r;
              (r =
                n && n.target && void 0 !== n.currentTarget.value
                  ? n.currentTarget.value
                  : n),
                e.setState(Object(o.a)({}, t, r));
            };
        });
      }
      function l(e, t) {
        var n = e.id,
          o = e.url,
          a = e.config,
          i = t || {},
          s = i.dotty,
          c = i.protocol,
          l = void 0 === c ? "https" : c,
          u = i.alternateDomain;
        if (a && a.domain) return "".concat(l, "://").concat(a.domain);
        if (!s) {
          var d = u ? "replitusercontent.com" : "repl.co";
          return "".concat(l, "://").concat(n, ".id.").concat(d);
        }
        var p = "repl.co",
          f = o.split("/"),
          b = Object(r.a)(f, 3),
          x = b[1],
          h = b[2],
          j = x.replace(/^@/, "").replace(/_/g, "-").toLowerCase(),
          m = "repls" === j ? "five-nine" : j.toLowerCase();
        return s && "five-nine" !== m
          ? "".concat(l, "://").concat(h, ".").concat(m, ".").concat(p)
          : "".concat(l, "://").concat(h, "--").concat(m, ".").concat(p);
      }
      function u(e) {
        if (Array.isArray(e)) return e.map(u);
        if (e && "object" === typeof e) {
          var t = {};
          for (var n in e) t[i()(n)] = e[n];
          return t;
        }
        return "string" === typeof e ? i()(e) : e;
      }
      function d(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : e;
      }
      function p(e) {
        return e.replace("GraphQL error: ", "");
      }
    },
    hYzu: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        a = n.n(o),
        i = (n("q1tI"), n("XLFt")),
        s = n("up5I"),
        c = function (e) {
          return Object(r.jsxs)("div", {
            className: "jsx-665792193 post-form-footer",
            children: [
              e.cancelable
                ? Object(r.jsx)(s.a, {
                    type: "button",
                    onClick: function (t) {
                      t && t.preventDefault(), e.onCancel && e.onCancel();
                    },
                    children: "Cancel",
                  })
                : null,
              Object(r.jsx)("div", { className: "jsx-665792193 spacer" }),
              Object(r.jsx)(s.a, {
                type: "submit",
                color: "primary",
                filled: !0,
                loading: e.loading,
                "aria-label": "Your post will be publicly shared",
                "data-microtip-position": "right",
                role: "tooltip",
                intent: e.isDangerCta ? "danger" : "confirm",
                children: e.loading
                  ? Object(r.jsx)(i.a, {
                      style: { width: "20px", height: "20px" },
                    })
                  : e.cta,
              }),
              Object(r.jsx)(a.a, {
                id: "665792193",
                children: [
                  ".post-form-footer.jsx-665792193{height:48px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  ".spacer.jsx-665792193{width:var(--spacing-1);}",
                ],
              }),
            ],
          });
        };
      (c.defaultProps = { cancelable: !0 }), (t.a = c);
    },
    igWl: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("xvhg"),
        a = n("cpVT"),
        i = n("MX0m"),
        s = n.n(i),
        c = n("q1tI"),
        l = n.n(c),
        u = n("TSYQ"),
        d = n.n(u),
        p = n("tZOq"),
        f = n("IgMu"),
        b = n("A3V5"),
        x = n.n(b);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var m = function (e, t) {
          switch (t.type) {
            case "leave":
              return j(j({}, e), {}, { show: !1 });
            case "enter":
              return {
                show: !0,
                positionV: t.rect.top > 250 ? "top" : "bottom",
                positionH:
                  window.innerWidth - t.rect.right > 420 ? "left" : "right",
              };
            default:
              return e;
          }
        },
        g = { show: !1, positionV: "top", positionH: "left" };
      t.a = function (e) {
        var t = l.a.useReducer(m, g),
          n = Object(o.a)(t, 2),
          a = n[0],
          i = n[1],
          c = l.a.useCallback(function (e) {
            i({ type: "enter", rect: e.target.getBoundingClientRect() });
          }, []),
          u = l.a.useCallback(function () {
            i({ type: "leave" });
          }, []),
          b = a.show,
          h = a.positionH,
          j = a.positionV;
        return Object(r.jsxs)("span", {
          onMouseEnter: c,
          onMouseLeave: u,
          className:
            "jsx-589677836 " +
            (d()(e.className, "user-hover-card", {
              "user-hover-card-inline": e.inline,
              "user-hover-card-block": e.block,
            }) || ""),
          children: [
            e.children,
            b
              ? Object(r.jsx)(p.W, {
                  variables: { username: e.username },
                  children: function (e) {
                    var t,
                      n = e.data;
                    return n && n.userByUsername
                      ? Object(r.jsx)("span", {
                          className:
                            "jsx-589677836 " +
                            (d()(
                              "user-hover-card-anchor",
                              "user-hover-card-anchor-".concat(j),
                              "user-hover-card-anchor-".concat(h)
                            ) || ""),
                          children: Object(r.jsxs)("span", {
                            className:
                              "jsx-589677836 user-hover-card-content-container",
                            children: [
                              Object(r.jsx)("span", {
                                className:
                                  "jsx-589677836 user-hover-card-info-card-container",
                                children: Object(r.jsx)("span", {
                                  className:
                                    "jsx-589677836 user-hover-card-info-card",
                                  children: Object(r.jsx)(f.a, {
                                    user: n.userByUsername,
                                    showAchievements: !(
                                      null === (t = n.currentUser) ||
                                      void 0 === t ||
                                      !t.hasAchievementsGate
                                    ),
                                  }),
                                }),
                              }),
                              Object(r.jsx)("span", {
                                className:
                                  "jsx-589677836 user-hover-card-arrow",
                                children: Object(r.jsx)(x.a, {
                                  color: "var(--color-background-1)",
                                  borderColor: "var(--color-control-3)",
                                  borderWidth: 2,
                                  size: 10,
                                  direction: "top" === j ? "bottom" : "top",
                                }),
                              }),
                            ],
                          }),
                        })
                      : null;
                  },
                })
              : null,
            Object(r.jsx)(s.a, {
              id: "589677836",
              children: [
                ".jsx-589677836{text-indent:initial;}",
                "span.jsx-589677836{display:block;}",
                ".user-hover-card.jsx-589677836{position:relative;display:inline-block;pointer-events:all;}",
                ".user-hover-card-block.jsx-589677836{display:block;}",
                ".user-hover-card-inline.jsx-589677836{display:inline;}",
                ".user-hover-card-anchor.jsx-589677836{position:absolute;width:100%;z-index:1000;pointer-events:all;}",
                ".user-hover-card-anchor-top.jsx-589677836{top:5px;}",
                ".user-hover-card-anchor-bottom.jsx-589677836{bottom:5px;}",
                ".user-hover-card-content-container.jsx-589677836{position:absolute;width:100%;}",
                ".user-hover-card-anchor-top.jsx-589677836 .user-hover-card-content-container.jsx-589677836{top:0;}",
                ".user-hover-card-anchor-top.jsx-589677836 .user-hover-card-content-container.jsx-589677836{-webkit-transform:translate(0,-100%);-ms-transform:translate(0,-100%);transform:translate(0,-100%);padding-bottom:10px;}",
                ".user-hover-card-anchor-bottom.jsx-589677836 .user-hover-card-content-container.jsx-589677836{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-flow:column-reverse;-ms-flex-flow:column-reverse;flex-flow:column-reverse;padding-top:10px;}",
                ".user-hover-card-arrow.jsx-589677836{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}",
                ".user-hover-card-anchor-top.jsx-589677836 .user-hover-card-arrow.jsx-589677836{top:-1px;}",
                ".user-hover-card-anchor-bottom.jsx-589677836 .user-hover-card-arrow.jsx-589677836{bottom:-1px;}",
                ".user-hover-card-info-card.jsx-589677836{width:300px;}",
                ".user-hover-card-info-card-container.jsx-589677836{position:relative;}",
                ".user-hover-card-anchor-left.jsx-589677836{left:0;}",
                ".user-hover-card-anchor-right.jsx-589677836{right:0;}",
                ".user-hover-card-anchor-right.jsx-589677836 .user-hover-card-info-card.jsx-589677836{position:absolute;right:0;}",
                ".user-hover-card-anchor-top.jsx-589677836 .user-hover-card-info-card.jsx-589677836{position:absolute;bottom:0;}",
              ],
            }),
          ],
        });
      };
    },
    kAqP: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        if ("string" !== typeof e) throw new TypeError("Expected a string");
        return (
          (t = "undefined" === typeof t ? "_" : t),
          e
            .replace(/([a-z\d])([A-Z])/g, "$1" + t + "$2")
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + t + "$2")
            .toLowerCase()
        );
      };
    },
    kFXa: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var r = n("nKUr"),
        o = n("vJKn"),
        a = n.n(o),
        i = n("rg98"),
        s = n("H+61"),
        c = n("UlJF"),
        l = n("7LId"),
        u = n("VIvw"),
        d = n("iHvq"),
        p = n("q1tI"),
        f = n("n/dw");
      function b(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(d.a)(e);
          if (t) {
            var o = Object(d.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(u.a)(this, n);
        };
      }
      var x = function (e) {
          return e && (e.stopPropagation(), e.preventDefault()), !!e;
        },
        h = (function (e) {
          Object(l.a)(n, e);
          var t = b(n);
          function n() {
            var e;
            Object(s.a)(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                active: !1,
                loading: !1,
              }),
              (e.handleFileChosen = function () {
                var t =
                  e._fileInput && e._fileInput.files
                    ? e._fileInput.files
                    : null;
                t && e.readFiles(t);
              }),
              (e.handleFileDropped = function (t) {
                var n = t.dataTransfer.files;
                n && e.readFiles(n);
              }),
              (e.handleActive = function () {
                return e.setState({ active: !0 });
              }),
              (e.handleInactive = function () {
                return e.setState({ active: !1 });
              }),
              (e.handleOpenFileBrowser = function () {
                e._fileInput && e._fileInput.click();
              }),
              e
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "readFiles",
                value: (function () {
                  var e = Object(i.a)(
                    a.a.mark(function e(t) {
                      var n;
                      return a.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.props.handleFiles) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  this.props.handleFiles(t), e.abrupt("return")
                                );
                              case 3:
                                return (
                                  this.setState({ loading: !0 }),
                                  (e.next = 6),
                                  Object(f.a)(t)
                                );
                              case 6:
                                (n = e.sent),
                                  this.props.onLoad && this.props.onLoad(n),
                                  this.setState({ loading: !1 });
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.loading,
                    o = t.active,
                    a = this.props,
                    i = a.openOnClick,
                    s = a.accept,
                    c = a.children;
                  return Object(r.jsxs)("div", {
                    onClick: i ? this.handleOpenFileBrowser : void 0,
                    onMouseEnter: this.handleActive,
                    onMouseLeave: this.handleInactive,
                    onDragEnter: function (t) {
                      return x(t) && e.handleActive();
                    },
                    onDragLeave: function (t) {
                      return x(t) && e.handleInactive();
                    },
                    onDragEnd: function (t) {
                      return x(t) && e.handleInactive();
                    },
                    onDrop: function (t) {
                      return x(t) && e.handleFileDropped(t);
                    },
                    onDragOver: x,
                    children: [
                      c({
                        active: o,
                        loading: n,
                        openFileBrowser: this.handleOpenFileBrowser,
                      }),
                      Object(r.jsx)("input", {
                        ref: function (t) {
                          return (e._fileInput = t);
                        },
                        type: "file",
                        style: { display: "none" },
                        onChange: this.handleFileChosen,
                        multiple: !0,
                        accept: s,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(p.Component);
    },
    mImh: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!e) return null;
        var n = e[t];
        return n ? (Array.isArray(n) ? null : n) : null;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    "n/dw": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      });
      var r = function (e) {
        return new Promise(function (t, n) {
          var r = new window.FileReader();
          (r.onload = function (n) {
            n.target ? t({ name: e.name, result: n.target.result }) : t(null);
          }),
            (r.onerror = n),
            r.readAsDataURL(e);
        });
      };
      t.a = function (e) {
        return Promise.all(
          Array.from(e)
            .filter(function (e) {
              return !!e;
            })
            .map(r)
        );
      };
    },
    oOwn: function (e, t, n) {
      !(function () {
        var t = [
            "direction",
            "boxSizing",
            "width",
            "height",
            "overflowX",
            "overflowY",
            "borderTopWidth",
            "borderRightWidth",
            "borderBottomWidth",
            "borderLeftWidth",
            "borderStyle",
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "fontStretch",
            "fontSize",
            "fontSizeAdjust",
            "lineHeight",
            "fontFamily",
            "textAlign",
            "textTransform",
            "textIndent",
            "textDecoration",
            "letterSpacing",
            "wordSpacing",
            "tabSize",
            "MozTabSize",
          ],
          n = "undefined" !== typeof window,
          r = n && null != window.mozInnerScreenX;
        function o(e, o, a) {
          if (!n)
            throw new Error(
              "textarea-caret-position#getCaretCoordinates should only be called in a browser"
            );
          var i = (a && a.debug) || !1;
          if (i) {
            var s = document.querySelector(
              "#input-textarea-caret-position-mirror-div"
            );
            s && s.parentNode.removeChild(s);
          }
          var c = document.createElement("div");
          (c.id = "input-textarea-caret-position-mirror-div"),
            document.body.appendChild(c);
          var l = c.style,
            u = window.getComputedStyle
              ? window.getComputedStyle(e)
              : e.currentStyle,
            d = "INPUT" === e.nodeName;
          (l.whiteSpace = "pre-wrap"),
            d || (l.wordWrap = "break-word"),
            (l.position = "absolute"),
            i || (l.visibility = "hidden"),
            t.forEach(function (e) {
              d && "lineHeight" === e
                ? (l.lineHeight = u.height)
                : (l[e] = u[e]);
            }),
            r
              ? e.scrollHeight > parseInt(u.height) && (l.overflowY = "scroll")
              : (l.overflow = "hidden"),
            (c.textContent = e.value.substring(0, o)),
            d && (c.textContent = c.textContent.replace(/\s/g, "\xa0"));
          var p = document.createElement("span");
          (p.textContent = e.value.substring(o) || "."), c.appendChild(p);
          var f = {
            top: p.offsetTop + parseInt(u.borderTopWidth),
            left: p.offsetLeft + parseInt(u.borderLeftWidth),
            height: parseInt(u.lineHeight),
          };
          return (
            i
              ? (p.style.backgroundColor = "#aaa")
              : document.body.removeChild(c),
            f
          );
        }
        "undefined" != typeof e.exports
          ? (e.exports = o)
          : n && (window.getCaretCoordinates = o);
      })();
    },
    rGVs: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/postsFeed",
        function () {
          return n("y9VK");
        },
      ]);
    },
    tidx: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("nKUr"),
        o = n("cpVT"),
        a = n("H+61"),
        i = n("UlJF"),
        s = n("7LId"),
        c = n("VIvw"),
        l = n("iHvq"),
        u = n("MX0m"),
        d = n.n(u),
        p = n("q1tI"),
        f = n("xom/"),
        b = n("2tbh");
      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function j(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(l.a)(e);
          if (t) {
            var o = Object(l.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var m = (function (e) {
        Object(s.a)(n, e);
        var t = j(n);
        function n() {
          var e;
          Object(a.a)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).state = {
              isLogin: !!e.props.showLoginFirst,
            }),
            (e.handleChangeAuth = function () {
              e.setState(function (e) {
                return { isLogin: !e.isLogin };
              });
            }),
            (e.handleSubmit = function (t) {
              t.error && e.props.onFailure(t),
                t.user &&
                  e.props.onSuccess(
                    h(h({}, t), {}, { isLogin: e.state.isLogin })
                  );
            }),
            e
          );
        }
        return (
          Object(i.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this;
                return Object(r.jsxs)("div", {
                  className: "jsx-101910848 auth-modal",
                  children: [
                    Object(r.jsxs)(f.b, {
                      align: "center",
                      spacing: 2,
                      children: [
                        Object(r.jsx)("div", {
                          className: "jsx-101910848 auth-modal-title",
                          children: this.props.title || "Sign up",
                        }),
                        Object(r.jsx)("div", {
                          className: "jsx-101910848 auth-modal-description",
                          children:
                            this.props.description ||
                            "Code, create, and learn together on Replit",
                        }),
                        Object(r.jsx)(b.a, {
                          onChangeAuth: this.handleChangeAuth,
                          isTeacher: this.props.isTeacher,
                          isLogin: this.state.isLogin,
                          onSubmit: this.handleSubmit,
                        }),
                        this.props.allowAnon &&
                          Object(r.jsx)("div", {
                            className: "jsx-101910848 auth-modal-anon",
                            children: Object(r.jsx)("a", {
                              onClick: function () {
                                return e.props.onSuccess();
                              },
                              className: "jsx-101910848",
                              children: "continue as Anonymous",
                            }),
                          }),
                      ],
                    }),
                    Object(r.jsx)(d.a, {
                      id: "101910848",
                      children: [
                        ".auth-modal.jsx-101910848{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:var(--spacing-4) var(--spacing-2);}",
                        ".title-container.jsx-101910848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:var(--spacing-2);}",
                        ".auth-modal-title.jsx-101910848{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;color:var(--color-foreground-1);font-size:var(--font-size-desktop-heading-2);font-weight:var(--font-weight-medium);}",
                        ".auth-modal-description.jsx-101910848{text-align:center;color:var(--color-foreground-2);font-size:var(--font-size-deskptop-text-medium);}",
                        ".auth-modal-anon.jsx-101910848{margin-top:14px;font-size:14px;}",
                        ".auth-modal-anon.jsx-101910848 a.jsx-101910848{color:var(--color-primary-1);-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(p.Component);
      m.defaultProps = {
        showLoginFirst: !1,
        isTeacher: !1,
        allowAnon: !1,
        onSuccess: function () {},
        onFailure: function () {},
      };
    },
    y9VK: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("vJKn"),
        o = n.n(r),
        a = n("rg98"),
        i = n("nKUr"),
        s = n("dhJC"),
        c = n("cpVT"),
        l = n("xvhg"),
        u = n("MX0m"),
        d = n.n(u),
        p = n("q1tI"),
        f = n.n(p),
        b = n("/MKj"),
        x = n("3gM7"),
        h = n("RVZx"),
        j = n("TSYQ"),
        m = n.n(j),
        g = n("YFqc"),
        y = n.n(g),
        v = n("tZOq"),
        O = n("SlBq"),
        w = n("8bdv"),
        k = n("igWl"),
        P = n("knUX"),
        S = n("EQ2k");
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var N = {
          styles: Object(i.jsx)(d.a, {
            id: "2584119200",
            children: [
              "a.jsx-2584119200{font-size:16px;color:".concat(
                S.a.skyBlue,
                ";border:0 none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}"
              ),
              ".active.jsx-2584119200,a.jsx-2584119200:hover{-webkit-text-decoration:underline;text-decoration:underline;}",
              ".monospaced.jsx-2584119200{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New';}",
            ],
          }),
          className: "jsx-2584119200",
        },
        T = function (e) {
          var t = e.children,
            n = e.active,
            r = e.monospaced,
            o = e.className,
            a = Object(s.a)(e, [
              "children",
              "active",
              "monospaced",
              "className",
            ]);
          return Object(i.jsxs)(
            "a",
            _(
              _({}, a),
              {},
              {
                className:
                  d.a.dynamic([["598243844", [S.a.skyBlue]]]) +
                  " " +
                  (m()(o, { monospaced: r, active: n }) || ""),
                children: [
                  t,
                  Object(i.jsx)(d.a, {
                    id: "598243844",
                    dynamic: [S.a.skyBlue],
                    children: [
                      "a.__jsx-style-dynamic-selector{font-size:16px;color:".concat(
                        S.a.skyBlue,
                        ";border:0 none;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}"
                      ),
                      ".active.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}",
                      ".monospaced.__jsx-style-dynamic-selector{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New';}",
                    ],
                  }),
                ],
              }
            )
          );
        },
        D = n("mImh"),
        R = n("IdsG");
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var M = O.a.toLowerCase(),
        q = function (e) {
          var t = e.asPath,
            n = e.pathname,
            r = e.queryParams,
            o = e.count,
            a = Object(O.d)(Object(D.a)(r, "since")),
            c = Object(v.vd)({ variables: { count: o || 10, since: a } }).data,
            l = r.since,
            u = Object(s.a)(r, ["since"]);
          return Object(i.jsxs)("div", {
            className: "jsx-3832129477 top-leaders",
            children: [
              Object(i.jsxs)("div", {
                className: "jsx-3832129477 top-leaders-header",
                children: [
                  Object(i.jsx)(R.a, { children: "top contributors since" }),
                  Object(i.jsx)("div", {
                    className: "jsx-3832129477 top-leaders-nav",
                    children: O.b.map(function (e) {
                      var r = e.value,
                        o = e.label,
                        a = r === M ? { since: "" } : { since: r },
                        c = { pathname: n, query: I(I({}, u), a) },
                        d = (u.boardSlug, Object(s.a)(u, ["boardSlug"])),
                        p = { pathname: t, query: I(I({}, d), a) },
                        f = l === r || (!l && r === M);
                      return Object(i.jsx)(
                        "div",
                        {
                          className: "jsx-3832129477",
                          children: Object(i.jsx)(y.a, {
                            href: c,
                            as: p,
                            children: Object(i.jsxs)("a", {
                              className:
                                "jsx-3832129477 " +
                                (m()(N.className, "monospaced", {
                                  active: f,
                                }) || ""),
                              children: [o.replace("past ", ""), N.styles],
                            }),
                          }),
                        },
                        r
                      );
                    }),
                  }),
                ],
              }),
              c && c.leaderboard
                ? Object(i.jsxs)(P.a, {
                    children: [
                      Object(i.jsx)("div", {
                        className: "jsx-3832129477 top-leaders-list",
                        children: c.leaderboard.items.map(function (e, t) {
                          return Object(i.jsx)(
                            "div",
                            {
                              className:
                                "jsx-3832129477 " +
                                (m()("top-leaders-list-item", {
                                  "top-leaders-list-overflow": t > 4,
                                }) || ""),
                              children: Object(i.jsx)(k.a, {
                                username: e.username,
                                children: Object(i.jsx)(w.a, {
                                  small: !0,
                                  user: e,
                                  karma: e.karmaSince,
                                }),
                              }),
                            },
                            e.id
                          );
                        }),
                      }),
                      Object(i.jsx)(y.a, {
                        href: "/leaderboard",
                        as: "/leaders",
                        children: Object(i.jsx)("a", {
                          className:
                            "jsx-3832129477 top-leaders-leaderbard-cta",
                          children: "view leaderboard \u2192",
                        }),
                      }),
                    ],
                  })
                : null,
              Object(i.jsx)(d.a, {
                id: "3832129477",
                children: [
                  ".top-leaders.jsx-3832129477{padding-left:10px;padding-right:10px;}",
                  ".top-leaders-header.jsx-3832129477{padding-top:10px;line-height:1.4;font-family:source-code-pro,Menlo,Monaco,Consolas;}",
                  ".top-leaders-nav.jsx-3832129477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
                  ".top-leaders-nav.jsx-3832129477>div.jsx-3832129477{margin-right:10px;}",
                  ".top-leaders-nav.jsx-3832129477>div.jsx-3832129477:last-child{margin-right:0;}",
                  ".top-leaders-header.jsx-3832129477,.top-leaders-list.jsx-3832129477{padding:10px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",
                  ".top-leaders-list.jsx-3832129477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
                  ".top-leaders-list-overflow.jsx-3832129477{display:none;}",
                  ".top-leaders-list-item.jsx-3832129477{margin:5px 5px 0px;}",
                  ".top-leaders-leaderbard-cta.jsx-3832129477{border-top:1px solid var(--color-control-1);display:block;padding:10px;text-align:center;-webkit-text-decoration:none;text-decoration:none;}",
                  ".top-leaders-leaderbard-cta.jsx-3832129477{font-size:12px;font-weight:bold;}",
                  "@media screen and (min-width:1180px){.top-leaders.jsx-3832129477{padding-left:0;padding-right:0;}.top-leaders-header.jsx-3832129477{padding-top:0;}.top-leaders-list.jsx-3832129477{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.top-leaders-list-overflow.jsx-3832129477{display:initial;}}",
                ],
              }),
            ],
          });
        },
        L = n("z7pX"),
        A = n("3web"),
        U = n("2WFA"),
        F = n("zgDP"),
        z = n("20a2"),
        B = n("/YWt");
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var V = function (e) {
          var t = e.langLinkProps,
            n = Object(s.a)(e, ["langLinkProps"]);
          Object(B.a)({
            event: F.events.RECENT_POST_COMMENTS_SPLIT_TEST,
            gate: "recent-post-comments",
            data: { view: "postsFeed" },
          });
          var r = Object(v.xd)({
              fetchPolicy: "cache-and-network",
              variables: n,
              notifyOnNetworkStatusChange: !0,
            }),
            o = r.loading,
            a = r.data,
            c = r.error,
            l = r.fetchMore,
            u = Object(z.useRouter)();
          if (o && !a) return Object(i.jsx)(A.a, {});
          if (c) return Object(i.jsx)(R.a, { children: c.message });
          if (a) {
            var p = a.posts.items.length,
              f = u.asPath.split("?")[0],
              b = a.posts.pageInfo.nextCursor,
              x = "".concat(f, "?after=").concat(b);
            return Object(i.jsxs)("div", {
              className: "jsx-1199683952",
              children: [
                a.posts.items.map(function (e, n) {
                  return Object(i.jsx)(
                    "div",
                    {
                      className:
                        "jsx-1199683952 " +
                        (m()("posts-feed-item", {
                          "posts-feed-item-bordered": n === p - 1,
                        }) || ""),
                      children: Object(i.jsx)(U.a, {
                        responsive: !0,
                        breakpoint: 600,
                        langLinkProps: t,
                        post: e,
                      }),
                    },
                    e.id
                  );
                }),
                a && a.posts && a.posts.pageInfo.nextCursor
                  ? Object(i.jsx)("div", {
                      className: "jsx-1199683952 posts-feed-footer",
                      children: Object(i.jsx)(T, {
                        monospaced: !0,
                        disabled: o,
                        href: x,
                        onClick: function (e) {
                          e.preventDefault(),
                            o ||
                              (Object(F.track)(
                                F.events.POSTS_LOAD_MORE_CLIKED,
                                { board: "all" }
                              ),
                              l({
                                variables: H(H({}, n), {}, { after: b }),
                                updateQuery: function (e, t) {
                                  if (!t || !t.fetchMoreResult) return e;
                                  var n = t.fetchMoreResult,
                                    r = e ? e.posts.items : [],
                                    o = H({}, n),
                                    a = n.posts.items;
                                  return (
                                    a.length > 0 &&
                                      u.replace(
                                        {
                                          pathname: u.pathname,
                                          query: H({}, u.query),
                                        },
                                        { pathname: f, query: {} },
                                        { shallow: !0 }
                                      ),
                                    (o.posts.items = [].concat(
                                      Object(L.a)(r),
                                      Object(L.a)(a)
                                    )),
                                    o
                                  );
                                },
                              }));
                        },
                        children: o ? "loading..." : "load more",
                      }),
                    })
                  : null,
                Object(i.jsx)(d.a, {
                  id: "1199683952",
                  children: [
                    ".posts-feed-item-bordered.jsx-1199683952{border-bottom:1px solid var(--color-control-3);}",
                    ".posts-feed-footer.jsx-1199683952{margin-left:auto;margin-right:auto;}",
                    "@media screen and (min-width:600px){.posts-feed-item.jsx-1199683952{margin-bottom:15px;}.posts-feed-item-bordered.jsx-1199683952{border-bottom:0 none;}}",
                  ],
                }),
              ],
            });
          }
          return null;
        },
        X = n("0gYX"),
        J = n.n(X),
        W = n("CJNb"),
        Y = function (e) {
          return Object(i.jsxs)("button", {
            title: e.title,
            onClick: e.onClick,
            className: d.a.dynamic([["3892367146", [S.a.gray47, S.a.skyBlue]]]),
            children: [
              Object(i.jsx)("span", {
                className: d.a.dynamic([
                  ["3892367146", [S.a.gray47, S.a.skyBlue]],
                ]),
                children: "\xd7",
              }),
              Object(i.jsx)(d.a, {
                id: "3892367146",
                dynamic: [S.a.gray47, S.a.skyBlue],
                children: [
                  "button.__jsx-style-dynamic-selector{width:30px;height:30px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;background-color:transparent;border:0 none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-size:18px;line-height:18px;color:".concat(
                    S.a.gray47,
                    ";}"
                  ),
                  "button.__jsx-style-dynamic-selector:hover{color:".concat(
                    S.a.skyBlue,
                    ";}"
                  ),
                ],
              }),
            ],
          });
        };
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var G = ",",
        $ = function (e) {
          return e.join(G);
        },
        Z = function (e, t) {
          if (!e) return t;
          var n = e.split(G);
          return n.includes(t) ? e : $([].concat(Object(L.a)(n), [t]));
        },
        ee = function (e) {
          if (!e) return {};
          e.path;
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Q(Object(n), !0).forEach(function (t) {
                    Object(c.a)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Q(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, Object(s.a)(e, ["path"]));
        },
        te = function (e) {
          var t = Object(D.a)(e, "lang");
          return t ? t.split(G) : [];
        };
      function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ne(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var oe = {
          styles: Object(i.jsx)(d.a, {
            id: "2021894129",
            children: [
              "div.jsx-2021894129{margin:5px;padding:5px 10px;text-transform:lowercase;color:".concat(
                S.a.gray47,
                ";}"
              ),
              "div.jsx-2021894129:hover{color:".concat(S.a.black, ";}"),
              "@media screen and (min-width:1180px){a.jsx-2021894129{margin:0 0 5px 0;}}",
            ],
          }),
          className: "jsx-2021894129",
        },
        ae = {
          styles: Object(i.jsx)(d.a, {
            id: "1839580108",
            children: [
              "div.jsx-1839580108:hover,div.jsx-1839580108{color:white !important;text-shadow:0 1px 1px rgba(0,0,0,0.4);}",
            ],
          }),
          className: "jsx-1839580108",
        },
        ie = {
          styles: Object(i.jsx)(d.a, {
            id: "2838170281",
            children: [
              "div.jsx-2838170281{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:5px;}",
              "@media screen and (min-width:1180px){div.jsx-2838170281{margin:0 0 5px 0;}}",
            ],
          }),
          className: "jsx-2838170281",
        },
        se = function (e) {
          var t = e.board,
            n = e.boardSlugs,
            r = e.queryParams,
            o = e.pathname,
            a = n.includes(t.slug),
            s = m()(oe.className, Object(c.a)({}, ae.className, a)),
            l = {
              backgroundColor: a ? t.color || S.a.yellow : void 0,
              color: "var(--color-foreground-1)",
            };
          return Object(i.jsx)(
            y.a,
            {
              href: {
                pathname: o,
                query: re(re({}, r), {}, { boardSlug: t.slug }),
              },
              as: { pathname: t.url, query: r },
              scroll: !1,
              children: Object(i.jsx)("a", {
                children: Object(i.jsxs)(P.a, {
                  interactive: !0,
                  inlineBlock: !0,
                  className: s,
                  Component: "div",
                  style: l,
                  children: [t.name, oe.styles, ae.styles],
                }),
              }),
            },
            t.id
          );
        },
        ce = function (e) {
          var t = e.queryParams,
            n = e.asPath,
            r = e.boards,
            o = te(t)
              .map(function (e) {
                return J.a.get(e);
              })
              .filter(function (e) {
                return "Unknown" !== e.displayName;
              }),
            a = "/postsFeed",
            l = (t.boardSlug, Object(s.a)(t, ["boardSlug"])),
            u = Object(D.a)(t, "boardSlug"),
            p = u ? u.split(",") : [];
          return Object(i.jsxs)("div", {
            className: d.a.dynamic([
              ["1756445186", [S.a.black, S.a.gray85, S.a.skyBlue, S.a.skyBlue]],
            ]),
            children: [
              Object(i.jsxs)("div", {
                className:
                  d.a.dynamic([
                    [
                      "1756445186",
                      [S.a.black, S.a.gray85, S.a.skyBlue, S.a.skyBlue],
                    ],
                  ]) + " posts-feed-nav-boards",
                children: [
                  Object(i.jsx)(y.a, {
                    href: { pathname: a, query: l },
                    as: { pathname: "/talk/all", query: l },
                    scroll: !1,
                    children: Object(i.jsx)("a", {
                      className: d.a.dynamic([
                        [
                          "1756445186",
                          [S.a.black, S.a.gray85, S.a.skyBlue, S.a.skyBlue],
                        ],
                      ]),
                      children: Object(i.jsxs)(P.a, {
                        Component: "div",
                        interactive: !0,
                        inlineBlock: !0,
                        className: m()(
                          oe.className,
                          Object(c.a)({}, ae.className, !u)
                        ),
                        style: {
                          backgroundColor: u ? void 0 : S.a.yellow,
                          color: "var(--color-foreground-1)",
                        },
                        children: ["all", oe.styles, ae.styles],
                      }),
                    }),
                  }),
                  r.map(function (e) {
                    return Object(i.jsx)(
                      se,
                      { board: e, boardSlugs: p, queryParams: l, pathname: a },
                      e.id
                    );
                  }),
                ],
              }),
              o && o.length
                ? Object(i.jsx)("div", {
                    className:
                      d.a.dynamic([
                        [
                          "1756445186",
                          [S.a.black, S.a.gray85, S.a.skyBlue, S.a.skyBlue],
                        ],
                      ]) + " posts-feed-nav-langs",
                    children: o.map(function (e) {
                      var r = Object(D.a)(t, "lang"),
                        o = re(re({}, t), {}, { lang: Z(r, e.key) }),
                        s = (function (e, t) {
                          if (!e) return null;
                          var n = e.split(G);
                          return n.includes(t)
                            ? $(
                                n.filter(function (e) {
                                  return e !== t;
                                })
                              )
                            : e;
                        })(r, e.key),
                        c = re(re({}, t), {}, { lang: s });
                      return (
                        c.lang || delete c.lang,
                        Object(i.jsxs)(
                          P.a,
                          {
                            className: ie.className,
                            interactive: !0,
                            children: [
                              Object(i.jsx)(y.a, {
                                as: { pathname: n, query: t },
                                href: { pathname: a, query: o },
                                children: Object(i.jsx)("a", {
                                  onClick: function () {
                                    Object(F.track)(
                                      F.events.LANGUAGE_TAG_CLICK,
                                      { lang: e.key }
                                    );
                                  },
                                  className:
                                    d.a.dynamic([
                                      [
                                        "1756445186",
                                        [
                                          S.a.black,
                                          S.a.gray85,
                                          S.a.skyBlue,
                                          S.a.skyBlue,
                                        ],
                                      ],
                                    ]) + " posts-feed-nav-lang-label",
                                  children: Object(i.jsx)(W.b, {
                                    small: !0,
                                    language: e,
                                  }),
                                }),
                              }),
                              Object(i.jsx)(y.a, {
                                href: { pathname: a, query: c },
                                as: { pathname: n, query: c },
                                children: Object(i.jsx)("a", {
                                  onClick: function () {
                                    Object(F.track)(
                                      F.events.LANGUAGE_TAG_CLEAR_CLICK,
                                      { lang: e.key }
                                    );
                                  },
                                  title: "remove ".concat(e.displayName),
                                  className: d.a.dynamic([
                                    [
                                      "1756445186",
                                      [
                                        S.a.black,
                                        S.a.gray85,
                                        S.a.skyBlue,
                                        S.a.skyBlue,
                                      ],
                                    ],
                                  ]),
                                  children: Object(i.jsx)(Y, {}),
                                }),
                              }),
                              ie.styles,
                            ],
                          },
                          e.key
                        )
                      );
                    }),
                  })
                : null,
              Object(i.jsx)(d.a, {
                id: "1756445186",
                dynamic: [S.a.black, S.a.gray85, S.a.skyBlue, S.a.skyBlue],
                children: [
                  ".posts-feed-nav-boards.__jsx-style-dynamic-selector{padding:5px;}",
                  ".posts-feed-nav-langs.__jsx-style-dynamic-selector{padding:5px;}",
                  ".posts-feed-nav-langs.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(
                    S.a.black,
                    ";border-bottom:1px solid transparent;}"
                  ),
                  ".posts-feed-nav-lang-label.__jsx-style-dynamic-selector{padding-left:5px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;white-space:nowrap;cursor:pointer;padding-right:10px;border-right:1px solid ".concat(
                    S.a.gray85,
                    ";}"
                  ),
                  ".posts-feed-nav-lang-label.__jsx-style-dynamic-selector:hover span{color:"
                    .concat(S.a.skyBlue, ";border-bottom-color:")
                    .concat(S.a.skyBlue, ";}"),
                  ".posts-feed-nav-user-boards-heading.__jsx-style-dynamic-selector{margin-top:10px;margin-bottom:5px;font-family:source-code-pro,Menlo,Monaco,Consolas;}",
                  "@media screen and (min-width:1180px){.posts-feed-nav-boards.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:0;}.posts-feed-nav-langs.__jsx-style-dynamic-selector{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}}",
                ],
              }),
            ],
          });
        },
        le = n("Wlt/"),
        ue = function () {
          return Object(i.jsx)("svg", {
            width: "29px",
            height: "30px",
            viewBox: "0 0 29 30",
            version: "1.1",
            children: Object(i.jsxs)("g", {
              transform: "translate(2, 2)",
              children: [
                Object(i.jsx)("rect", {
                  fill: S.a.gray50,
                  transform:
                    "translate(21, 21) rotate(-45) translate(-21, -21) ",
                  x: "19",
                  y: "15",
                  width: "4",
                  height: "13",
                }),
                Object(i.jsx)("circle", {
                  fill: "none",
                  stroke: S.a.gray50,
                  strokeWidth: "4",
                  cx: "10",
                  cy: "10",
                  r: "10",
                }),
              ],
            }),
          });
        },
        de = function (e) {
          var t = f.a.useState(!1),
            n = Object(l.a)(t, 2),
            r = n[0],
            o = n[1],
            a = f.a.useState(e.value || void 0),
            s = Object(l.a)(a, 2),
            c = s[0],
            u = s[1],
            p = Object(le.a)(c, 500);
          return (
            f.a.useEffect(
              function () {
                "string" === typeof p && r && e.onSearch(p);
              },
              [p]
            ),
            Object(i.jsx)(P.a, {
              children: Object(i.jsxs)("div", {
                className: "jsx-1964026512 posts-feed-search-input",
                children: [
                  Object(i.jsx)("input", {
                    value: c,
                    onFocus: function () {
                      return o(!0);
                    },
                    onChange: function (e) {
                      return u(e.target.value);
                    },
                    placeholder: e.placeholder || "Search",
                    className: "jsx-1964026512",
                  }),
                  Object(i.jsx)("div", {
                    className: "jsx-1964026512 posts-feed-search-icon",
                    children: Object(i.jsx)(ue, {}),
                  }),
                  c
                    ? Object(i.jsx)("div", {
                        className: "jsx-1964026512 posts-feed-search-clear",
                        children: Object(i.jsx)(Y, {
                          onClick: function () {
                            u(""), e.onSearch("");
                          },
                        }),
                      })
                    : null,
                  Object(i.jsx)(d.a, {
                    id: "1964026512",
                    children: [
                      "input.jsx-1964026512{font-size:16px;border:0 none;background-color:transparent;display:block;padding:8px 28px;width:100%;min-width:260px;color:var(--color-foreground-1);}",
                      "input.jsx-1964026512:focus{outline:0 none;}",
                      "input.jsx-1964026512::-webkit-input-placeholder{color:var(--color-foreground-3);}",
                      "input.jsx-1964026512::-moz-placeholder{color:var(--color-foreground-3);}",
                      "input.jsx-1964026512:-ms-input-placeholder{color:var(--color-foreground-3);}",
                      "input.jsx-1964026512::placeholder{color:var(--color-foreground-3);}",
                      "input.jsx-1964026512:focus.jsx-1964026512::-webkit-input-placeholder{color:var(--color-foreground-2);}",
                      "input.jsx-1964026512:focus.jsx-1964026512::-moz-placeholder{color:var(--color-foreground-2);}",
                      "input.jsx-1964026512:focus.jsx-1964026512:-ms-input-placeholder{color:var(--color-foreground-2);}",
                      "input.jsx-1964026512:focus.jsx-1964026512::placeholder{color:var(--color-foreground-2);}",
                      ".posts-feed-search-input.jsx-1964026512{position:relative;}",
                      ".posts-feed-search-icon.jsx-1964026512,.posts-feed-search-clear.jsx-1964026512{position:absolute;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                      ".posts-feed-search-icon.jsx-1964026512{top:0;left:10px;width:13px;opacity:0.5;}",
                      ".posts-feed-search-input.jsx-1964026512 svg{width:100%;height:auto;}",
                      "input.jsx-1964026512:focus+div.jsx-1964026512{opacity:1;}",
                      ".posts-feed-search-clear.jsx-1964026512{right:0;top:0;}",
                    ],
                  }),
                ],
              }),
            })
          );
        };
      function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var be = [
          { value: "hot", label: "hot" },
          { value: "new", label: "new" },
          { value: "votes", label: "top" },
        ],
        xe = function (e) {
          var t = e.currentOrder,
            n = e.pathname,
            r = e.asPath,
            o = e.queryParams;
          return Object(i.jsxs)("div", {
            className: "jsx-1783297613 posts-feed-order-nav",
            children: [
              be.map(function (e) {
                var a = e.value,
                  c = e.label,
                  l = "hot" === a ? void 0 : a,
                  u = (o.order, Object(s.a)(o, ["order"])),
                  d = {
                    pathname: n,
                    query: fe(fe({}, u), l ? { order: l } : {}),
                  },
                  p = (u.boardSlug, Object(s.a)(u, ["boardSlug"])),
                  f = {
                    pathname: r,
                    query: fe(fe({}, p), l ? { order: l } : {}),
                  };
                return Object(i.jsx)(
                  "div",
                  {
                    className: "jsx-1783297613 posts-feed-order-nav-item",
                    children: Object(i.jsx)(y.a, {
                      scroll: !1,
                      href: d,
                      as: f,
                      children: Object(i.jsxs)("a", {
                        className:
                          "jsx-1783297613 " +
                          (m()(N.className, "monospaced", {
                            active: t === a,
                          }) || ""),
                        children: [c, N.styles],
                      }),
                    }),
                  },
                  a
                );
              }),
              Object(i.jsx)(d.a, {
                id: "1783297613",
                children: [
                  ".posts-feed-order-nav.jsx-1783297613{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New';}",
                  ".posts-feed-order-nav-item.jsx-1783297613{margin-right:10px;}",
                  ".posts-feed-order-nav-item.jsx-1783297613:last-child{margin-right:0;}",
                ],
              }),
            ],
          });
        },
        he = n("9vYF"),
        je = function (e) {
          var t = e.hideModal,
            n = e.children;
          return Object(i.jsx)(he.default, {
            onRequestClose: t,
            noBorder: !0,
            children: Object(i.jsxs)("div", {
              className: "jsx-288977153 new-post-modal",
              children: [
                n,
                Object(i.jsx)(d.a, {
                  id: "288977153",
                  children: [
                    ".new-post-modal.jsx-288977153{padding:40px 0 20px;border-radius:5px;}",
                    "@media (min-width:500px){.new-post-modal.jsx-288977153{min-width:500px;padding:40px;}}",
                    "@media (min-width:700px){.new-post-modal.jsx-288977153{min-width:680px;padding:60px;}}",
                  ],
                }),
              ],
            }),
          });
        },
        me = n("/otM"),
        ge = n("FWhU"),
        ye = n("7J1T"),
        ve = n("QSUB");
      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oe(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ke = function (e) {
        var t = Object(z.useRouter)(),
          n = p.useState(!1),
          r = Object(l.a)(n, 2),
          o = r[0],
          a = r[1],
          c = p.useState(!1),
          u = Object(l.a)(c, 2),
          f = u[0],
          b = u[1],
          x = Object(v.wd)().data,
          j = !(!x || !x.currentUser),
          m = t.asPath ? t.asPath.split("?").shift() : "",
          g = ee(t.query),
          y = Object(D.a)(g, "q"),
          O = Object(D.a)(g, "count"),
          w = Object(D.a)(g, "after"),
          k = O ? parseInt(O) : void 0,
          P = Object(D.a)(g, "order"),
          S = y ? void 0 : P || "hot",
          C = te(g),
          _ = Object(D.a)(g, "boardSlug");
        p.useEffect(function () {
          Object(F.track)(F.events.POSTS_FEED_SPLIT_TEST, { received: !0 });
        }, []),
          p.useEffect(
            function () {
              var e;
              (e = _ || "all"),
                Object(F.track)(F.events.BOARD_VISTED, { id: e });
            },
            [_]
          );
        var N = function () {
            return (
              !f ||
              window.confirm(
                "Are you sure you want to leave? Unsaved changes may be lost."
              )
            );
          },
          R = function () {
            N() && (a(!1), b(!1));
          },
          E =
            x &&
            x.boards &&
            x.boards.find(function (e) {
              return e && e.slug === g.boardSlug;
            }),
          I =
            E && E.description
              ? E.description
              : "A friendly platform to share and discuss all things Replit";
        return Object(i.jsx)(h.a, {
          title: "Feed",
          description: I,
          children: Object(i.jsxs)("div", {
            className: "jsx-4235497533 posts-feed-page",
            children: [
              Object(i.jsx)(ge.a, {
                title: "Please sign up or log in",
                description:
                  "Welcome to Repl Talk, a place for Repl.it users to share and talk about what they built. Please login/signup to post and upvote.",
                allowAnon: !0,
                onSuccess: function () {
                  window.location.reload();
                },
              }),
              o
                ? Object(i.jsx)(je, {
                    confirmClose: N,
                    hideModal: R,
                    children: Object(i.jsx)(me.a, {
                      board: E || void 0,
                      onCancel: R,
                      onSubmit: function (e) {
                        t.push(
                          { pathname: "/post", query: { id: e.id } },
                          e.url
                        );
                      },
                      setActiveEdits: b,
                    }),
                  })
                : null,
              Object(i.jsxs)("div", {
                className: "jsx-4235497533 posts-feed-content",
                children: [
                  Object(i.jsx)("div", {
                    className: "jsx-4235497533 posts-feed-leaders",
                    children: Object(i.jsx)(q, {
                      pathname: t.pathname,
                      asPath: m || "",
                      queryParams: g,
                    }),
                  }),
                  Object(i.jsx)("div", {
                    className: "jsx-4235497533 posts-feed-nav",
                    children: x
                      ? Object(i.jsx)(ce, {
                          boards: x.boards || [],
                          asPath: m || "",
                          queryParams: g,
                        })
                      : null,
                  }),
                  Object(i.jsxs)("div", {
                    className: "jsx-4235497533 posts-feed-main",
                    children: [
                      Object(i.jsxs)("div", {
                        className: "jsx-4235497533 posts-feed-header",
                        children: [
                          Object(i.jsx)("div", {
                            className: "jsx-4235497533 posts-feed-add-cta",
                            children: Object(i.jsx)(ve.a, {
                              primary: !0,
                              block: !0,
                              center: !0,
                              onClick: function () {
                                j ? a(!0) : e.showAuthModal();
                              },
                              children: "+ add a post",
                            }),
                          }),
                          Object(i.jsxs)("div", {
                            className:
                              "jsx-4235497533 posts-feed-search-order-nav",
                            children: [
                              Object(i.jsx)("div", {
                                className: "jsx-4235497533 posts-feed-search",
                                children: Object(i.jsx)(de, {
                                  value: y,
                                  onSearch: function (e) {
                                    var n = we({}, e ? { q: e } : {});
                                    t.replace(
                                      {
                                        pathname: t.pathname,
                                        query: we(
                                          we({}, n),
                                          _ ? { boardSlug: _ } : {}
                                        ),
                                      },
                                      { pathname: m, query: n },
                                      { shallow: !0 }
                                    );
                                  },
                                  placeholder: E
                                    ? "Search ".concat(E.name.toLowerCase())
                                    : "Search all posts",
                                }),
                              }),
                              Object(i.jsx)("div", {
                                className:
                                  "jsx-4235497533 posts-feed-order-nav",
                                children: y
                                  ? Object(i.jsx)(T, {
                                      active: !0,
                                      href: t.asPath,
                                      children: "relevant",
                                    })
                                  : Object(i.jsx)(xe, {
                                      pathname: t.pathname,
                                      currentOrder: S,
                                      asPath: m || "",
                                      queryParams: g,
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(i.jsx)("div", {
                        className: "jsx-4235497533 posts-feed",
                        children: Object(i.jsx)(V, {
                          searchQuery: y,
                          order: S,
                          after: w,
                          langLinkProps: function (e) {
                            var n = we({}, g),
                              r = Object.keys(n).reduce(function (e, t) {
                                return n[t] && (e[t] = n[t] + ""), e;
                              }, {}),
                              o = Z(Object(D.a)(g, "lang"), e);
                            o && (r.lang = o);
                            r.boardSlug;
                            var a = Object(s.a)(r, ["boardSlug"]);
                            return {
                              href: { pathname: t.pathname, query: r },
                              as: { pathname: m || "", query: a },
                            };
                          },
                          languages: C,
                          boardSlugs: _ ? _.split(",") : void 0,
                          count: k,
                          pinAnnouncements: !E || void 0,
                          pinPinned: !!E || void 0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(i.jsx)(d.a, {
                id: "4235497533",
                children: [
                  ".posts-feed-page.jsx-4235497533{padding-top:0px;padding-bottom:30px;min-height:100vh;}",
                  ".posts-feed-content.jsx-4235497533{margin-left:auto;margin-right:auto;max-width:800px;}",
                  ".posts-feed-leaders.jsx-4235497533{margin-top:15px;margin-bottom:15px;}",
                  ".posts-feed-header.jsx-4235497533{padding:20px 10px 10px;}",
                  ".posts-feed-search.jsx-4235497533{margin-bottom:10px;}",
                  ".posts-feed-order-nav.jsx-4235497533{-webkit-order:0;-ms-flex-order:0;order:0;}",
                  ".posts-feed-add-cta.jsx-4235497533{-webkit-order:3;-ms-flex-order:3;order:3;}",
                  ".posts-feed-add-cta.jsx-4235497533{margin-bottom:20px;max-width:500px;min-width:150px;}",
                  "@media screen and (min-width:450px){.posts-feed-header.jsx-4235497533{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.posts-feed-search-order-nav.jsx-4235497533{display:block;margin-right:10px;}.posts-feed-search.jsx-4235497533{margin-left:auto;margin-bottom:10px;}.posts-feed-add-cta.jsx-4235497533{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin-bottom:0;margin-left:10px;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}}",
                  "@media screen and (min-width:600px){.posts-feed-main.jsx-4235497533{padding-left:20px;padding-right:20px;}.posts-feed-header.jsx-4235497533{padding-left:0;padding-right:0;}.posts-feed-nav.jsx-4235497533{padding-left:10px;padding-right:10px;}}",
                  "@media screen and (min-width:1180px){.posts-feed-content.jsx-4235497533{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:30px;}.posts-feed-nav.jsx-4235497533{-webkit-order:1;-ms-flex-order:1;order:1;margin-right:20px;}.posts-feed-leaders.jsx-4235497533{-webkit-order:3;-ms-flex-order:3;order:3;margin-left:20px;}.posts-feed-leaders.jsx-4235497533,.posts-feed-nav.jsx-4235497533{margin-top:0;padding-top:0;padding-left:0;padding-right:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.posts-feed-main.jsx-4235497533{-webkit-order:2;-ms-flex-order:2;order:2;max-width:500px;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-top:0;padding-left:0;padding-right:0;}.posts-feed-nav.jsx-4235497533{padding-left:10px;}.posts-feed-header.jsx-4235497533{padding-top:0;}}",
                  "@media screen and (min-width:1300px){.posts-feed-main.jsx-4235497533{max-width:600px;}}",
                ],
              }),
            ],
          }),
        });
      };
      ke.getInitialProps = (function () {
        var e = Object(a.a)(
          o.a.mark(function e(t) {
            var n, r;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.req),
                      (r = t.store),
                      (e.next = 3),
                      Object(x.a)(n, r)
                    );
                  case 3:
                    return e.abrupt("return", {});
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      t.default = Object(b.c)(void 0, { showAuthModal: ye.e }, null, {
        pure: !1,
      })(ke);
    },
  },
  [[61, 2, 1, 0, 3, 4, 5, 6, 7, 11, 20, 57, 51]],
]);

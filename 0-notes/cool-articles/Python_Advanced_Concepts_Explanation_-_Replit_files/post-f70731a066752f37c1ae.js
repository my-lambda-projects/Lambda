_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [124, 51],
  {
    "+HSz": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return this.all(e).join("");
      };
    },
    "+bZ2": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("H+61"),
        i = n("UlJF"),
        a = n("7LId"),
        c = n("VIvw"),
        s = n("iHvq"),
        l = n("cpVT"),
        u = n("vJKn"),
        d = n.n(u),
        p = n("rg98"),
        f = n("MX0m"),
        b = n.n(f),
        j = n("q1tI"),
        h = n("LOQN"),
        m = n("Vvt1");
      function x(e) {
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
            r = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
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
      function v(e) {
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
      var y = n.n(m)()(
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
        return Object(r.jsx)(y, {
          rootId: "modal-root",
          children: function (t) {
            var n = t.closePortal,
              o = t.Portal;
            return Object(r.jsx)(o, {
              children: Object(r.jsx)(
                O,
                v(
                  v({}, e),
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
        Object(a.a)(n, e);
        var t = x(n);
        function n() {
          var e;
          Object(o.a)(this, n);
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
            i[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(i))).hideModal = function () {
              var t = e.props.confirmClose;
              ((t && t()) || !t) && e.props.hideModal();
            }),
            (e.addChildProps = function (t) {
              return Array.isArray(t) || "function" !== typeof t.type
                ? t
                : j.cloneElement(t, { hideModal: e.hideModal });
            }),
            e
          );
        }
        return (
          Object(i.a)(n, [
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
                  t = j.Children.map(this.props.children, this.addChildProps),
                  n = this.props,
                  o = n.disableClosing,
                  i = n.noBorder,
                  a = n.noBackground,
                  c = n.coverOtherModals,
                  s = n.hideCloseButton;
                return Object(r.jsxs)("div", {
                  className:
                    "jsx-329464003 " +
                    b.a.dynamic([
                      [
                        "645701630",
                        [
                          c ? 4e5 : 3e5,
                          c ? 400001 : 300001,
                          i ? 0 : "1px solid #888",
                          c ? 22 : 2,
                          window.navigator.userAgent.match(/Trident/)
                            ? "table"
                            : "block",
                          a ? "none" : "var(--color-background-1)",
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
                        c ? 4e5 : 3e5,
                        c ? 400001 : 300001,
                        i ? 0 : "1px solid #888",
                        c ? 22 : 2,
                        window.navigator.userAgent.match(/Trident/)
                          ? "table"
                          : "block",
                        a ? "none" : "var(--color-background-1)",
                      ],
                      children: [
                        ".modal-overlay.__jsx-style-dynamic-selector{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:".concat(
                          c ? 4e5 : 3e5,
                          ";}"
                        ),
                        ".modal-base.__jsx-style-dynamic-selector{padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;z-index:".concat(
                          c ? 400001 : 300001,
                          ";}"
                        ),
                        ".modal-wrapper.__jsx-style-dynamic-selector{position:relative;max-height:80%;border:"
                          .concat(i ? 0 : "1px solid #888", ";z-index:")
                          .concat(c ? 22 : 2, ";display:")
                          .concat(
                            window.navigator.userAgent.match(/Trident/)
                              ? "table"
                              : "block",
                            ";}"
                          ),
                        ".modal-content.__jsx-style-dynamic-selector{background-color:".concat(
                          a ? "none" : "var(--color-background-1)",
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
                              c ? 4e5 : 3e5,
                              c ? 400001 : 300001,
                              i ? 0 : "1px solid #888",
                              c ? 22 : 2,
                              window.navigator.userAgent.match(/Trident/)
                                ? "table"
                                : "block",
                              a ? "none" : "var(--color-background-1)",
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
                              c ? 4e5 : 3e5,
                              c ? 400001 : 300001,
                              i ? 0 : "1px solid #888",
                              c ? 22 : 2,
                              window.navigator.userAgent.match(/Trident/)
                                ? "table"
                                : "block",
                              a ? "none" : "var(--color-background-1)",
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
                                c ? 4e5 : 3e5,
                                c ? 400001 : 300001,
                                i ? 0 : "1px solid #888",
                                c ? 22 : 2,
                                window.navigator.userAgent.match(/Trident/)
                                  ? "table"
                                  : "block",
                                a ? "none" : "var(--color-background-1)",
                              ],
                            ],
                          ]) +
                          " modal-wrapper",
                        children: [
                          !o &&
                            !s &&
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
                                      c ? 4e5 : 3e5,
                                      c ? 400001 : 300001,
                                      i ? 0 : "1px solid #888",
                                      c ? 22 : 2,
                                      window.navigator.userAgent.match(
                                        /Trident/
                                      )
                                        ? "table"
                                        : "block",
                                      a ? "none" : "var(--color-background-1)",
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
                                    c ? 4e5 : 3e5,
                                    c ? 400001 : 300001,
                                    i ? 0 : "1px solid #888",
                                    c ? 22 : 2,
                                    window.navigator.userAgent.match(/Trident/)
                                      ? "table"
                                      : "block",
                                    a ? "none" : "var(--color-background-1)",
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
      })(j.Component);
    },
    "/Rnh": function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return Oe;
      }),
        n.d(t, "a", function () {
          return we;
        }),
        n.d(t, "b", function () {
          return ke;
        });
      var r = n("nKUr"),
        o = n("cpVT"),
        i = n("H+61"),
        a = n("UlJF"),
        c = n("7LId"),
        s = n("VIvw"),
        l = n("iHvq"),
        u = n("jT3O"),
        d = n("MX0m"),
        p = n.n(d),
        f = n("q1tI"),
        b = n("lTCR"),
        j = n.n(b),
        h = n("YFqc"),
        m = n.n(h),
        x = n("TSYQ"),
        g = n.n(x),
        v = n("ShKv"),
        y = n("LLeT"),
        O = n("vJKn"),
        w = n.n(O),
        k = n("rg98"),
        C = n("+uXX"),
        S = n("/MKj"),
        P = n("hJxz"),
        E = n("ArsQ");
      function R() {
        var e = Object(u.a)([
          "\n  mutation deleteComment($id: Int!) {\n    deleteComment(id: $id) {\n      id\n    }\n  }\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      var _ = j()(R()),
        I = function (e) {
          var t = Object(v.a)({ id: e.id, __typename: e.__typename }),
            n = function (e, n) {
              return n.node.id === t;
            };
          return Object(P.invalidateFields)(function () {
            return [
              ["data", /^\$Post:\d+.comments.*/, "items", n],
              ["data", /^Comment:\d+$/, "comments", n],
              ["data", t],
            ];
          });
        },
        N = Object(S.c)(void 0, { showMessage: E.b })(function (e) {
          return Object(r.jsx)(C.Mutation, {
            mutation: _,
            update: I(e.comment),
            children: function (t) {
              return Object(r.jsx)(y.a, {
                onClick: Object(k.a)(
                  w.a.mark(function n() {
                    var r;
                    return w.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this comment?"
                                )
                              ) {
                                n.next = 2;
                                break;
                              }
                              return n.abrupt("return");
                            case 2:
                              return (
                                (n.prev = 2),
                                (n.next = 5),
                                t({ variables: { id: e.comment.id } })
                              );
                            case 5:
                              n.next = 11;
                              break;
                            case 7:
                              (n.prev = 7),
                                (n.t0 = n.catch(2)),
                                (r =
                                  (n.t0.graphQLErrors.length &&
                                    n.t0.graphQLErrors[0].message) ||
                                  "Something went wrong. Please contact support"),
                                e.showMessage({
                                  content: r,
                                  type: "error",
                                  time: 4e3,
                                });
                            case 11:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 7]]
                    );
                  })
                ),
                children: "Delete",
              });
            },
          });
        }),
        D = n("8bdv"),
        T = n("iiuX"),
        U = n("y2k1"),
        M = n("zgDP");
      function L(e, t) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function F(e) {
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
          return Object(s.a)(this, n);
        };
      }
      function q() {
        var e = Object(u.a)([
          "\n    fragment EditCommentComment on Comment {\n      id\n      parentComment {\n        id\n      }\n      post {\n        id\n      }\n    }\n  ",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = Object(u.a)([
          "\n  mutation updateComment($input: UpdateCommentInput!) {\n    updateComment(input: $input) {\n      comment {\n        id\n        body\n      }\n    }\n  }\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      var z = j()(V()),
        K = { comment: j()(q()) },
        B = (function (e) {
          Object(c.a)(n, e);
          var t = F(n);
          function n(e) {
            var r;
            return (
              Object(i.a)(this, n),
              ((r = t.call(this, e)).onChange = function (e) {
                r.state.tracked ||
                  Object(M.track)(M.events.COMMENT_WRITTEN, {
                    editing: !0,
                    id: r.props.comment.id,
                  }),
                  r.setState(A(A({}, e), {}, { tracked: !0 }));
              }),
              (r.onSubmit = (function () {
                var e = Object(k.a)(
                  w.a.mark(function e(t) {
                    var n, o, i, a;
                    return w.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = r.props.comment.id),
                                (o = r.state),
                                (i = o.body),
                                !o.loading)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                r.setState({ loading: !0 }),
                                (e.prev = 5),
                                (e.next = 8),
                                t({ variables: { input: { body: i, id: n } } })
                              );
                            case 8:
                              e.next = 16;
                              break;
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(5)),
                                r.setState({ loading: !1 }),
                                (a =
                                  (e.t0.graphQLErrors.length &&
                                    e.t0.graphQLErrors[0].message) ||
                                  "Something went wrong. Please contact support"),
                                r.props.showMessage({
                                  content: a,
                                  type: "error",
                                  time: 4e3,
                                }),
                                e.abrupt("return")
                              );
                            case 16:
                              r.props.showMessage({
                                content: "Comment updated",
                                type: "confirm",
                                time: 4e3,
                              }),
                                r.props.onEdit();
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 10]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.state = { body: e.comment.body, loading: !1, tracked: !1 }),
              r
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.comment,
                    n = this.state,
                    o = n.body,
                    i = n.loading,
                    a = t.parentComment ? "comment" : "post",
                    c = t.parentComment ? t.parentComment.id : t.post.id;
                  return Object(r.jsx)(C.Mutation, {
                    mutation: z,
                    children: function (n) {
                      return Object(r.jsx)(U.a, {
                        uniqueId: "comment-" + t.id,
                        body: o,
                        loading: i,
                        expanded: !0,
                        onChange: e.onChange,
                        cancelable: !0,
                        onCancel: e.props.onEdit,
                        onSubmit: function (t) {
                          t && t.preventDefault(), e.onSubmit(n);
                        },
                        cta: "Update",
                        getAtMentionSuggestionsContext: function () {
                          return { contextType: a, contextId: c };
                        },
                      });
                    },
                  });
                },
              },
            ]),
            n
          );
        })(f.Component),
        H = Object(S.c)(void 0, { showMessage: E.b })(B),
        W = n("Pwy/"),
        Q = n("EcHa"),
        X = n("jMDP"),
        $ = n("yVCx"),
        G = n("vKT1"),
        J = n("rcAQ"),
        Y = n("xvhg"),
        Z = n("+bZ2"),
        ee = n("4byT"),
        te = n("EQ2k"),
        ne = n("Fklr"),
        re = n("zhTl");
      function oe(e, t) {
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
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? oe(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ae() {
        var e = Object(u.a)([
          "\n  mutation selectCommentAsAnswer($id: Int!) {\n    selectCommentAsAnswer(id: $id) {\n      id\n      ...SelectAnswerControlComment\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = Object(u.a)([
          "\n  mutation unselectCommentAsAnswer($id: Int!) {\n    unselectCommentAsAnswer(id: $id) {\n      id\n      ...SelectAnswerControlComment\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(u.a)([
          "\n  fragment SelectAnswerControlComment on Comment {\n    id\n    isAnswer\n    canSelectAsAnswer\n    canUnselectAsAnswer\n    post {\n      id\n      isAnswered\n      answeredBy {\n        id\n        ...PostAnsweredCardUser\n      }\n      answer {\n        id\n        ...PostAnsweredCardComment\n      }\n      comments {\n        items {\n          id\n          isAnswer\n          canSelectAsAnswer\n          comments {\n            id\n            isAnswer\n            canSelectAsAnswer\n          }\n        }\n      }\n    }\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      var le = j()(se(), re.b.user, re.b.answer),
        ue = j()(ce(), le),
        de = j()(ae(), le),
        pe = function (e) {
          return Object(r.jsxs)("div", {
            onClick: e.onClick,
            title: e.title,
            className:
              p.a.dynamic([["129090059", [te.a.green]]]) +
              " " +
              (g()({
                "select-answer-control-selected": e.selected,
                "select-answer-control-selectable": e.selectable,
              }) || ""),
            children: [
              Object(r.jsx)(ne.a, { color: te.a.gray85 }),
              Object(r.jsx)(p.a, {
                id: "129090059",
                dynamic: [te.a.green],
                children: [
                  ".select-answer-control-selectable.__jsx-style-dynamic-selector{cursor:pointer;}",
                  ".select-answer-control-selectable.__jsx-style-dynamic-selector svg{fill:var(--color-control-1);}",
                  ".select-answer-control-selected.__jsx-style-dynamic-selector svg,.select-answer-control-selectable.__jsx-style-dynamic-selector:hover svg{fill:".concat(
                    te.a.green,
                    ";}"
                  ),
                ],
              }),
            ],
          });
        },
        fe = function (e) {
          return Object(r.jsx)(Z.a, {
            hideModal: e.onCancel,
            children: Object(r.jsxs)(ee.a, {
              onSubmit: e.onConfirm,
              disableSubmit: e.loading,
              hideModal: e.onCancel,
              onCancel: e.onCancel,
              modalStyle: { maxWidth: "450px" },
              submitLabel: e.loading ? "Loading..." : e.submitLabel,
              hideOnSubmit: !0,
              deleteStyle: e.deleteStyle,
              children: [
                Object(r.jsx)("div", { children: e.title }),
                Object(r.jsx)("div", { children: e.text }),
              ],
            }),
          });
        },
        be = function (e) {
          var t = f.useState(!1),
            n = Object(Y.a)(t, 2),
            o = n[0],
            i = n[1];
          if (!e.selectable)
            return Object(r.jsx)(pe, ie({ title: "Answer accepted" }, e));
          var a = e.selected ? "Remove Answer?" : "Select answer?",
            c = e.selected
              ? "Remove comment as answer"
              : "Select this comment as the answer if it resolves your issue. This will award @".concat(
                  e.commentUserUsername || "[deleted]",
                  " 5 cycles and pin the comment to the top of the thread."
                ),
            s = e.selected ? "Remove Answer" : "Select Answer";
          return Object(r.jsx)(C.Mutation, {
            mutation: e.selected ? ue : de,
            variables: { id: e.id },
            children: function (t, n) {
              var l = n.loading;
              return Object(r.jsxs)(r.Fragment, {
                children: [
                  Object(r.jsx)(
                    pe,
                    ie(
                      {
                        title: e.selected
                          ? "Remove answer"
                          : "Select as the best answer",
                        onClick: function () {
                          return i(!0);
                        },
                      },
                      e
                    )
                  ),
                  o
                    ? Object(r.jsx)(fe, {
                        deleteStyle: e.selected,
                        title: a,
                        text: c,
                        submitLabel: s,
                        loading: l,
                        onConfirm: function () {
                          if (!l) {
                            t();
                            var n = e.selected
                              ? M.events.COMMENT_UNSELECTED_AS_ANSWER
                              : M.events.COMMENT_SELECTED_AS_ANSWER;
                            Object(M.track)(n, { commentId: e.id });
                          }
                        },
                        onCancel: function () {
                          i(!1);
                        },
                      })
                    : null,
                ],
              });
            },
          });
        },
        je = n("igWl");
      function he(e, t) {
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
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function xe(e) {
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
          return Object(s.a)(this, n);
        };
      }
      function ge() {
        var e = Object(u.a)([
          "\n  mutation createBoardReport($postId: Int, $commentId: Int, $reason: String!) {\n    createBoardReport(postId: $postId, commentId: $commentId, reason: $reason) {\n      id\n    }\n  }\n",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = Object(u.a)([
          "\n  mutation createComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      comment {\n        id\n        ...CommentDetailComment\n        comments {\n          id\n          ...CommentDetailComment\n        }\n        parentComment {\n          id\n        }\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = Object(u.a)([
          "\n    fragment CommentDetailComment on Comment {\n      id\n      body\n      timeCreated\n      canEdit\n      canComment\n      canReport\n      hasReported\n      url\n      canSelectAsAnswer\n      canUnselectAsAnswer\n      isAnswer\n      voteCount\n      canVote\n      hasVoted\n      user {\n        id\n        username\n        ...DepreciatedUserLabelWithImageUser\n      }\n      post {\n        id\n        isAnswerable\n      }\n      ...EditCommentComment\n    }\n    ",
          "\n    ",
          "\n  ",
        ]);
        return (
          (ye = function () {
            return e;
          }),
          e
        );
      }
      var Oe = { comment: j()(ye(), D.a.fragments.user, K.comment) },
        we = j()(ve(), Oe.comment),
        ke = j()(ge()),
        Ce = (function (e) {
          Object(c.a)(n, e);
          var t = xe(n);
          function n() {
            var e;
            Object(i.a)(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                isEditing: !1,
                isReplying: !1,
                isReporting: !1,
                expandedReplUrl: void 0,
              }),
              (e.onPostBodyClick = function (t) {
                var n = e.state.expandedReplUrl,
                  r = t.target;
                !t.metaKey &&
                  r instanceof window.HTMLAnchorElement &&
                  r.href &&
                  r.href !== n &&
                  Object(G.b)(r.href) &&
                  (t.preventDefault(), e.setState({ expandedReplUrl: r.href }));
              }),
              (e.toggleEdit = function (t) {
                e.setState({ isEditing: t });
              }),
              (e.updateCacheForReportMutation = function (t) {
                var n = {
                    id: Object(v.a)(e.props.comment),
                    fragment: Oe.comment,
                    fragmentName: "CommentDetailComment",
                  },
                  r = t.readFragment(n);
                (r.hasReported = !0),
                  t.writeFragment(me(me({}, n), {}, { data: r }));
              }),
              e
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    o = t.comment,
                    i = t.updateCacheForCommentMuation,
                    a = t.isAnswerable,
                    c = this.state,
                    s = c.isEditing,
                    l = c.isReplying,
                    u = c.isReporting,
                    d = c.expandedReplUrl,
                    f = o.hasReported
                      ? Object(r.jsx)("span", { children: "Reported" })
                      : Object(r.jsx)(y.a, {
                          onClick: function () {
                            return e.setState({ isReporting: !0 });
                          },
                          children: "Report",
                        });
                  return Object(r.jsxs)("div", {
                    className: "jsx-109921829 comment-detail",
                    children: [
                      Object(r.jsxs)("div", {
                        className:
                          "jsx-109921829 " +
                          (g()("comment-detail-container", {
                            "comment-detail-is-answer": a && o.isAnswer,
                          }) || ""),
                        children: [
                          Object(r.jsxs)("div", {
                            className: "jsx-109921829 comment-detail-actions",
                            children: [
                              Object(r.jsx)(J.a, { comment: o }),
                              a &&
                              (o.isAnswer ||
                                o.canSelectAsAnswer ||
                                o.canUnselectAsAnswer)
                                ? Object(r.jsx)("div", {
                                    className:
                                      "jsx-109921829 comment-detail-select-answer-control",
                                    children: Object(r.jsx)(be, {
                                      commentUserUsername: o.user
                                        ? o.user.username
                                        : void 0,
                                      id: o.id,
                                      selected: o.isAnswer,
                                      selectable:
                                        o.canSelectAsAnswer ||
                                        o.canUnselectAsAnswer,
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          Object(r.jsxs)("div", {
                            className: "jsx-109921829 comment-detail-content",
                            children: [
                              Object(r.jsxs)("div", {
                                className: "jsx-109921829",
                                children: [
                                  o.user
                                    ? Object(r.jsx)(je.a, {
                                        username: o.user.username,
                                        children: Object(r.jsx)(D.a, {
                                          user: o.user,
                                        }),
                                      })
                                    : Object(r.jsx)(D.a, { user: o.user }),
                                  s
                                    ? Object(r.jsx)(H, {
                                        onEdit: function () {
                                          return e.toggleEdit(!1);
                                        },
                                        comment: o,
                                      })
                                    : Object(r.jsx)(T.a, {
                                        onClick: this.onPostBodyClick,
                                        text: o.body,
                                      }),
                                ],
                              }),
                              s
                                ? null
                                : Object(r.jsxs)(X.a, {
                                    children: [
                                      Object(r.jsx)(m.a, {
                                        href: {
                                          pathname: "/comment",
                                          query: { id: o.id },
                                        },
                                        as: o.url,
                                        children: Object(r.jsx)("a", {
                                          className: "jsx-109921829",
                                          children: Object(r.jsx)($.a, {
                                            date: o.timeCreated,
                                          }),
                                        }),
                                      }),
                                      o.canComment
                                        ? Object(r.jsx)(y.a, {
                                            onClick: function () {
                                              return e.setState({
                                                isReplying: !0,
                                              });
                                            },
                                            children: "Reply",
                                          })
                                        : null,
                                      o.canEdit
                                        ? Object(r.jsx)(y.a, {
                                            onClick: function () {
                                              return e.toggleEdit(!0);
                                            },
                                            children: "Edit",
                                          })
                                        : null,
                                      o.canReport ? f : null,
                                      o.canEdit
                                        ? Object(r.jsx)(N, {
                                            comment: o,
                                            children: "Delete",
                                          })
                                        : null,
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      d ? Object(r.jsx)(G.a, { url: d }) : null,
                      Object(r.jsxs)("div", {
                        className: "jsx-109921829 comment-detail-comments",
                        children: [
                          l && o.canComment
                            ? Object(r.jsx)(W.a, {
                                postId: o.post.id,
                                commentId: o.id,
                                body: o.user
                                  ? "@".concat(o.user.username, " ")
                                  : "",
                                onCreate: function () {
                                  return e.setState({ isReplying: !1 });
                                },
                                onCancel: function () {
                                  return e.setState({ isReplying: !1 });
                                },
                                updateCacheForCommentMuation: i,
                                mutation: we,
                                autofocus: !0,
                              })
                            : null,
                          u && o.canReport
                            ? Object(r.jsx)(Q.a, {
                                commentId: o.id,
                                onCreate: function () {
                                  return e.setState({ isReporting: !1 });
                                },
                                onCancel: function () {
                                  return e.setState({ isReporting: !1 });
                                },
                                mutation: ke,
                                hasReported: o.hasReported,
                                updateCacheForReportMutation:
                                  this.updateCacheForReportMutation,
                                autofocus: !0,
                              })
                            : null,
                          o.comments && o.comments.length
                            ? o.comments.map(function (e) {
                                return Object(r.jsx)(
                                  "div",
                                  {
                                    id: e.id,
                                    className: "jsx-109921829",
                                    children: Object(r.jsx)(n, {
                                      isAnswerable: a,
                                      comment: e,
                                      updateCacheForCommentMuation: i,
                                    }),
                                  },
                                  e.id
                                );
                              })
                            : null,
                        ],
                      }),
                      Object(r.jsx)(p.a, {
                        id: "109921829",
                        children: [
                          ".comment-detail-container.jsx-109921829{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:10px;padding-bottom:10px;}",
                          ".comment-detail-actions.jsx-109921829{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:15px;width:40px;}",
                          ".comment-detail-content.jsx-109921829{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;max-width:calc(100% - 60px);padding-right:10px;}",
                          ".comment-detail-comments.jsx-109921829{margin-left:50px;}",
                          ".comment-detail-is-answer.jsx-109921829{background-color:var(--color-green-transparent-3);border-radius:3px;}",
                          ".comment-detail-is-answer.jsx-109921829 .rendered-markdown{background-color:transparent;}",
                          ".comment-detail-select-answer-control.jsx-109921829{margin-top:5px;padding:5px;}",
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
      Ce.fragments = Oe;
      t.c = Ce;
    },
    "07hc": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("zC+P"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("sYmS"),
        c = n.n(a),
        s = n("v2L8"),
        l = n("+uXX"),
        u = n("Qp/i");
      function d(e, t) {
        void 0 === t && (t = {});
        var n = Object(s.c)(e),
          o = t.options,
          a = void 0 === o ? u.c : o,
          d = t.skip,
          p = void 0 === d ? u.d : d,
          f = t.alias,
          b = void 0 === f ? "Apollo" : f,
          j = t.shouldResubscribe,
          h = a;
        "function" !== typeof h &&
          (h = function () {
            return a;
          });
        var m,
          x = p;
        return (
          "function" !== typeof x &&
            (x = function () {
              return p;
            }),
          function (o) {
            var a = b + "(" + Object(u.e)(o) + ")",
              s = (function (c) {
                function s(e) {
                  var t = c.call(this, e) || this;
                  return (t.state = { resubscribe: !1 }), t;
                }
                return (
                  Object(r.c)(s, c),
                  (s.prototype.componentDidUpate = function (e) {
                    j && this.setState({ resubscribe: j(e, this.props) });
                  }),
                  (s.prototype.render = function () {
                    var c = this,
                      s = this.props,
                      d = x(s),
                      p = d ? Object.create(null) : h(s);
                    return (
                      !d &&
                        !p.variables &&
                        n.variables.length > 0 &&
                        (p.variables = Object(u.b)(n, s)),
                      i.a.createElement(
                        l.Subscription,
                        Object(r.a)({}, p, {
                          displayName: a,
                          skip: d,
                          subscription: e,
                          shouldResubscribe: this.state.resubscribe,
                        }),
                        function (e) {
                          var n,
                            a,
                            l = e.data,
                            u = Object(r.e)(e, ["data"]);
                          if (
                            (t.withRef &&
                              ((c.withRef = !0),
                              (s = Object.assign({}, s, {
                                ref: c.setWrappedInstance,
                              }))),
                            d)
                          )
                            return i.a.createElement(o, Object(r.a)({}, s, {}));
                          var p = Object.assign(u, l || {}),
                            f = t.name || "data",
                            b = (((n = {})[f] = p), n);
                          if (t.props) {
                            var j = (((a = {})[f] = p), (a.ownProps = s), a);
                            b = m = t.props(j, m);
                          }
                          return i.a.createElement(o, Object(r.a)({}, s, b));
                        }
                      )
                    );
                  }),
                  (s.displayName = a),
                  (s.WrappedComponent = o),
                  s
                );
              })(u.a);
            return c()(s, o, {});
          }
        );
      }
    },
    "0UBQ": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("q1tI");
      t.a = function (e) {
        var t = e.children,
          n = e.session,
          i = e.time;
        return (
          o.useEffect(function () {
            var e = n ? setTimeout(n.next, i || 200) : void 0;
            return function () {
              return e && clearTimeout(e);
            };
          }, []),
          t ? Object(r.jsx)(r.Fragment, { children: t }) : null
        );
      };
    },
    "0adu": function (e, t, n) {
      "use strict";
      var r = n("ZkSf"),
        o = n("DPht");
      function i(e, t) {
        var n, r;
        return "text" === e.type
          ? !e.position ||
              ((n = e.position.start),
              (r = e.position.end),
              n.line !== r.line || r.column - n.column === e.value.length)
          : t && "blockquote" === e.type;
      }
      e.exports = function (e, t) {
        var n = o(function (e, n, r) {
          var o = r.children,
            a = n && o[n - 1];
          if (a && e.type === a.type && i(a, t) && i(e, t))
            return (
              e.value && (a.value += e.value),
              e.children && (a.children = a.children.concat(e.children)),
              o.splice(n, 1),
              a.position && e.position && (a.position.end = e.position.end),
              n
            );
        });
        return (
          r(e, function (e) {
            e.children && n(e);
          }),
          e
        );
      };
    },
    "1VtT": function (e, t, n) {
      "use strict";
      var r = n("6dBs"),
        o = n("Gdbo"),
        i = n("Esvb"),
        a = n("xkQk"),
        c = n("IRYA"),
        s = n("NkL+");
      e.exports = (function e() {
        var t = [],
          n = a(),
          x = {},
          g = !1,
          v = -1;
        return (
          (y.data = function (e, t) {
            if (c(e))
              return 2 === arguments.length
                ? (j("data", g), (x[e] = t), y)
                : (u.call(x, e) && x[e]) || null;
            if (e) return j("data", g), (x = e), y;
            return x;
          }),
          (y.freeze = O),
          (y.attachers = t),
          (y.use = function (e) {
            var n;
            if ((j("use", g), null === e || void 0 === e));
            else if ("function" === typeof e) c.apply(null, arguments);
            else {
              if ("object" !== typeof e)
                throw new Error("Expected usable value, not `" + e + "`");
              "length" in e ? a(e) : o(e);
            }
            n && (x.settings = r(x.settings || {}, n));
            return y;
            function o(e) {
              a(e.plugins), e.settings && (n = r(n || {}, e.settings));
            }
            function i(e) {
              if ("function" === typeof e) c(e);
              else {
                if ("object" !== typeof e)
                  throw new Error("Expected usable value, not `" + e + "`");
                "length" in e ? c.apply(null, e) : o(e);
              }
            }
            function a(e) {
              var t, n;
              if (null === e || void 0 === e);
              else {
                if ("object" !== typeof e || !("length" in e))
                  throw new Error(
                    "Expected a list of plugins, not `" + e + "`"
                  );
                for (t = e.length, n = -1; ++n < t; ) i(e[n]);
              }
            }
            function c(e, n) {
              var o = w(e);
              o
                ? (s(o[1]) && s(n) && (n = r(o[1], n)), (o[1] = n))
                : t.push(l.call(arguments));
            }
          }),
          (y.parse = function (e) {
            var t,
              n = i(e);
            if ((O(), f("parse", (t = y.Parser)), p(t)))
              return new t(String(n), n).parse();
            return t(String(n), n);
          }),
          (y.stringify = function (e, t) {
            var n,
              r = i(t);
            if ((O(), b("stringify", (n = y.Compiler)), h(e), p(n)))
              return new n(e, r).compile();
            return n(e, r);
          }),
          (y.run = k),
          (y.runSync = function (e, t) {
            var n,
              r = !1;
            return k(e, t, i), m("runSync", "run", r), n;
            function i(e, t) {
              (r = !0), o(e), (n = t);
            }
          }),
          (y.process = C),
          (y.processSync = function (e) {
            var t,
              n = !1;
            return (
              O(),
              f("processSync", y.Parser),
              b("processSync", y.Compiler),
              C((t = i(e)), r),
              m("processSync", "process", n),
              t
            );
            function r(e) {
              (n = !0), o(e);
            }
          }),
          y
        );
        function y() {
          for (var n = e(), o = t.length, i = -1; ++i < o; )
            n.use.apply(null, t[i]);
          return n.data(r(!0, {}, x)), n;
        }
        function O() {
          var e, r, o, i;
          if (g) return y;
          for (; ++v < t.length; )
            (r = (e = t[v])[0]),
              null,
              !1 !== (o = e[1]) &&
                (!0 === o && (e[1] = void 0),
                "function" === typeof (i = r.apply(y, e.slice(1))) && n.use(i));
          return (g = !0), (v = 1 / 0), y;
        }
        function w(e) {
          for (var n, r = t.length, o = -1; ++o < r; )
            if ((n = t[o])[0] === e) return n;
        }
        function k(e, t, r) {
          if (
            (h(e),
            O(),
            r || "function" !== typeof t || ((r = t), (t = null)),
            !r)
          )
            return new Promise(o);
          function o(o, a) {
            n.run(e, i(t), function (t, n, i) {
              (n = n || e), t ? a(t) : o ? o(n) : r(null, n, i);
            });
          }
          o(null, r);
        }
        function C(e, t) {
          if ((O(), f("process", y.Parser), b("process", y.Compiler), !t))
            return new Promise(n);
          function n(n, r) {
            var o = i(e);
            d.run(y, { file: o }, function (e) {
              e ? r(e) : n ? n(o) : t(null, o);
            });
          }
          n(null, t);
        }
      })().freeze();
      var l = [].slice,
        u = {}.hasOwnProperty,
        d = a()
          .use(function (e, t) {
            t.tree = e.parse(t.file);
          })
          .use(function (e, t, n) {
            e.run(t.tree, t.file, function (e, r, o) {
              e ? n(e) : ((t.tree = r), (t.file = o), n());
            });
          })
          .use(function (e, t) {
            t.file.contents = e.stringify(t.tree, t.file);
          });
      function p(e) {
        return (
          "function" === typeof e &&
          (function (e) {
            var t;
            for (t in e) return !0;
            return !1;
          })(e.prototype)
        );
      }
      function f(e, t) {
        if ("function" !== typeof t)
          throw new Error("Cannot `" + e + "` without `Parser`");
      }
      function b(e, t) {
        if ("function" !== typeof t)
          throw new Error("Cannot `" + e + "` without `Compiler`");
      }
      function j(e, t) {
        if (t)
          throw new Error(
            [
              "Cannot invoke `" + e + "` on a frozen processor.\nCreate a new ",
              "processor first, by invoking it: use `processor()` instead of ",
              "`processor`.",
            ].join("")
          );
      }
      function h(e) {
        if (!e || !c(e.type)) throw new Error("Expected node, got `" + e + "`");
      }
      function m(e, t, n) {
        if (!n)
          throw new Error(
            "`" + e + "` finished async. Use `" + t + "` instead"
          );
      }
    },
    "1gho": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("zC+P"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("sYmS"),
        c = n.n(a),
        s = n("v2L8"),
        l = n("+uXX"),
        u = n("Qp/i");
      function d(e, t) {
        void 0 === t && (t = {});
        var n = Object(s.c)(e),
          o = t.options,
          a = void 0 === o ? u.c : o,
          d = t.skip,
          p = void 0 === d ? u.d : d,
          f = t.alias,
          b = void 0 === f ? "Apollo" : f,
          j = a;
        "function" !== typeof j &&
          (j = function () {
            return a;
          });
        var h,
          m = p;
        return (
          "function" !== typeof m &&
            (m = function () {
              return p;
            }),
          function (o) {
            var a = b + "(" + Object(u.e)(o) + ")",
              s = (function (c) {
                function s() {
                  return (null !== c && c.apply(this, arguments)) || this;
                }
                return (
                  Object(r.c)(s, c),
                  (s.prototype.render = function () {
                    var c = this,
                      s = this.props,
                      d = m(s),
                      p = d ? Object.create(null) : Object(r.a)({}, j(s));
                    return (
                      !d &&
                        !p.variables &&
                        n.variables.length > 0 &&
                        (p.variables = Object(u.b)(n, s)),
                      i.a.createElement(
                        l.Query,
                        Object(r.a)({}, p, {
                          displayName: a,
                          skip: d,
                          query: e,
                        }),
                        function (e) {
                          e.client;
                          var n,
                            a,
                            l = e.data,
                            u = Object(r.e)(e, ["client", "data"]);
                          if (
                            (t.withRef &&
                              ((c.withRef = !0),
                              (s = Object.assign({}, s, {
                                ref: c.setWrappedInstance,
                              }))),
                            d)
                          )
                            return i.a.createElement(o, Object(r.a)({}, s, {}));
                          var p = Object.assign(u, l || {}),
                            f = t.name || "data",
                            b = (((n = {})[f] = p), n);
                          if (t.props) {
                            var j = (((a = {})[f] = p), (a.ownProps = s), a);
                            b = h = t.props(j, h);
                          }
                          return i.a.createElement(o, Object(r.a)({}, s, b));
                        }
                      )
                    );
                  }),
                  (s.displayName = a),
                  (s.WrappedComponent = o),
                  s
                );
              })(u.a);
            return c()(s, o, {});
          }
        );
      }
    },
    "29vB": function (e, t) {},
    "2Ct2": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("xvhg"),
        i = n("dhJC"),
        a = n("z7pX"),
        c = n("cpVT"),
        s = n("q1tI");
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = function (e, t) {
        switch (t.type) {
          case "SET_INDEX":
            return u(u({}, e), {}, { currentIndex: t.index });
          case "CLEAR_NODES":
            return u(
              u({}, e),
              {},
              {
                currentIndex: 0,
                nodes: s.Children.toArray(t.nodes).filter(s.isValidElement),
              }
            );
          case "ADD_NODES":
            return u(
              u({}, e),
              {},
              {
                nodes: [].concat(
                  Object(a.a)(e.nodes.slice(0, t.fromIndex)),
                  Object(a.a)(
                    s.Children.toArray(t.nodes).filter(s.isValidElement)
                  ),
                  Object(a.a)(
                    e.nodes.slice(
                      t.fromIndex +
                        s.Children.toArray(t.nodes).filter(s.isValidElement)
                          .length
                    )
                  )
                ),
              }
            );
          default:
            return e;
        }
      };
      t.a = function (e) {
        var t = e.currentIndex,
          n = e.afterNext,
          a = Object(i.a)(e, ["currentIndex", "afterNext"]),
          c = s.Children.toArray(a.children).filter(s.isValidElement),
          l = s.useReducer(d, {
            currentIndex: t || 0,
            nodes: c.map(function (e, t) {
              return t;
            }),
          }),
          u = Object(o.a)(l, 2),
          p = u[0],
          f = u[1],
          b = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return f({ type: "CLEAR_NODES", nodes: t });
          },
          j = function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return f({ type: "ADD_NODES", fromIndex: e, nodes: n });
          },
          h = p.nodes.length,
          m = p.nodes.slice(0, p.currentIndex + 1).map(function (e) {
            return "number" !== typeof e
              ? e
              : "number" === typeof e && c[e]
              ? c[e]
              : null;
          });
        return Object(r.jsx)("div", {
          children: s.Children.map(m, function (e, t) {
            if (!e) return null;
            var r = {
              insert: function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return j.apply(void 0, [t + 1].concat(n));
              },
              clear: b,
              index: t,
              count: h,
              next: function () {
                return (
                  !!(function (e) {
                    return (
                      e === p.currentIndex &&
                      p.nodes.length >= e + 1 &&
                      (f({ type: "SET_INDEX", index: e + 1 }), !0)
                    );
                  })(t) &&
                  (n && n({ currentIndex: t }),
                  h - 1 === t && a.onDone && a.onDone(),
                  !0)
                );
              },
              currentIndex: p.currentIndex,
              last: t === h - 1,
            };
            return s.cloneElement(e, { session: r });
          }),
        });
      };
    },
    "2Pmd": function (e, t, n) {
      "use strict";
      var r = n("55fs");
      e.exports = function (e) {
        var t,
          n,
          o = this,
          i = o.options,
          a = i.looseTable,
          c = i.spacedTable,
          s = i.paddedTable,
          l = i.stringLength,
          u = e.children,
          d = u.length,
          p = o.enterTable(),
          f = [];
        for (; d--; ) f[d] = o.all(u[d]);
        p(),
          a
            ? ((t = ""), (n = ""))
            : c
            ? ((t = "| "), (n = " |"))
            : ((t = "|"), (n = "|"));
        return r(f, {
          align: e.align,
          pad: s,
          start: t,
          end: n,
          stringLength: l,
          delimiter: c ? " | " : "|",
        });
      };
    },
    "2gPU": function (e, t, n) {
      "use strict";
      var r = n("0adu");
      e.exports = function () {
        return this.visit(r(this.tree, this.options.commonmark));
      };
    },
    "2oNz": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = -1 === e.indexOf('"') ? '"' : "'";
        return t + e + t;
      };
    },
    "2vPd": function (e, t, n) {
      "use strict";
      var r = n("cpVT"),
        o = n("nKUr"),
        i = n("dhJC"),
        a = n("MX0m"),
        c = n.n(a),
        s = (n("q1tI"), n("SYH8")),
        l = n("EQ2k");
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
      t.a = function (e) {
        var t = e.children,
          n = Object(i.a)(e, ["children"]);
        return Object(o.jsxs)(
          "button",
          d(
            d({}, n),
            {},
            {
              className:
                "jsx-".concat(s.a.__hash) +
                " " +
                c.a.dynamic([["4278169902", [l.a.skyBlue]]]) +
                " " +
                ((n && null != n.className && n.className) || ""),
              children: [
                t,
                Object(o.jsx)(c.a, { id: s.a.__hash, children: s.a }),
                Object(o.jsx)(c.a, {
                  id: "4278169902",
                  dynamic: [l.a.skyBlue],
                  children: [
                    "button.__jsx-style-dynamic-selector{border:0 none;background-color:transparent;padding:0;margin:0;cursor:pointer;color:".concat(
                      l.a.skyBlue,
                      ";}"
                    ),
                    "button.__jsx-style-dynamic-selector:focus{outline:0 none;}",
                  ],
                }),
              ],
            }
          )
        );
      };
    },
    "3OnI": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = (n("q1tI"), n("2Ct2")),
        i = n("5mGw"),
        a = n("0UBQ");
      t.a = function (e) {
        var t = e.session,
          n = e.text,
          c = e.speed,
          s = void 0 === c ? 10 : c,
          l = n.split("").map(function (e, t) {
            return Object(r.jsx)(a.a, { time: s, children: e }, e + t);
          });
        return Object(r.jsx)(i.b, {
          icon: !1,
          children: Object(r.jsx)(o.a, {
            onDone: t ? t.next : void 0,
            children: l,
          }),
        });
      };
    },
    "3QsF": function (e, t, n) {
      "use strict";
      e.exports = function () {
        return r[this.options.commonmark];
      };
      var r = { true: "\\\n", false: "  \n" };
    },
    "4Njq": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = n("SXYe").a.tabletMin;
    },
    "4byT": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var r = n("nKUr"),
        o = n("xvhg"),
        i = n("H+61"),
        a = n("UlJF"),
        c = n("7LId"),
        s = n("VIvw"),
        l = n("iHvq"),
        u = n("MX0m"),
        d = n.n(u),
        p = n("q1tI"),
        f = n("LOQN"),
        b = n("up5I");
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
          return Object(s.a)(this, n);
        };
      }
      var h = (function (e) {
        Object(c.a)(n, e);
        var t = j(n);
        function n() {
          var e;
          Object(i.a)(this, n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(o))).onSubmit = function (t) {
              e.props.hideOnSubmit && e.props.hideModal && e.props.hideModal(),
                e.props.onSubmit(t);
            }),
            (e.getBodyAndTitle = function () {
              var t = e.props.children;
              if (!Array.isArray(t) && p.Children.count(t) < 2)
                throw new Error("Expected title and body in ActionModal");
              var n = t[0];
              if (Array.isArray(n))
                throw new Error("title child cannot be an array");
              var r = p.cloneElement(n, {
                  className:
                    "action-modal-title " +
                    ("undefined" !== typeof n.className ? n.className : ""),
                }),
                o = t[1];
              if (Array.isArray(o))
                throw new Error("body child cannot be an array");
              return [
                r,
                p.cloneElement(o, {
                  className: "action-modal-body" + (o.className || ""),
                }),
              ];
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
                (this._eventSubscriber = new f.a()),
                  this._eventSubscriber.listen(
                    window.document,
                    "keydown",
                    function (t) {
                      13 !== t.keyCode ||
                        (e.props.submitWithoutCtrl &&
                          !t.ctrlKey &&
                          !t.metaKey) ||
                        e.props.disableSubmit ||
                        e.props.onSubmit();
                    }
                  );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._eventSubscriber && this._eventSubscriber.destroy(),
                  (this._eventSubscriber = null);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.getBodyAndTitle(),
                  n = Object(o.a)(t, 2),
                  i = n[0],
                  a = n[1];
                return Object(r.jsxs)("div", {
                  style: this.props.modalStyle,
                  className: "jsx-952707971 action-modal",
                  children: [
                    Object(r.jsx)(d.a, {
                      id: "3903215339",
                      children: [
                        ".action-modal.jsx-952707971{background-color:var(--color-background-1);color:var(--color-foreground-1);}",
                      ],
                    }),
                    Object(r.jsx)(d.a, {
                      id: "3554563297",
                      children: [
                        ".action-modal.jsx-952707971{padding:35px 25px 35px;display:grid;grid-row-gap:var(--spacing-2);}",
                        ".action-modal-buttons.jsx-952707971{display:grid;grid-row-gap:var(--spacing-1);}",
                        ".action-modal.jsx-952707971 .action-modal-title{font-size:20px;}",
                        ".action-modal.jsx-952707971 .action-modal-body{font-size:16px;padding-top:30px;line-height:22px;}",
                        "@media screen and (min-width:400px){.action-modal-buttons.jsx-952707971{grid-auto-flow:column;grid-column-gap:20px;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.action-modal-buttons.jsx-952707971>button:first-child{-webkit-order:1;-ms-flex-order:1;order:1;}}",
                        "@media screen and (min-width:600px){.action-modal.jsx-952707971{padding:75px 50px 75px;}}",
                      ],
                    }),
                    i,
                    a,
                    Object(r.jsxs)("div", {
                      className: "jsx-952707971 action-modal-buttons",
                      children: [
                        Object(r.jsx)(
                          b.a,
                          {
                            color: this.props.deleteStyle
                              ? "negative"
                              : "primary",
                            disabled: this.props.disableSubmit,
                            onClick: this.onSubmit,
                            filled: !0,
                            children: this.props.submitLabel || "Ok",
                          },
                          "actionModalCta"
                        ),
                        !this.props.hideCancel &&
                          Object(r.jsx)(
                            b.a,
                            {
                              onClick: function () {
                                e.props.onCancel && e.props.onCancel(),
                                  e.props.hideModal && e.props.hideModal();
                              },
                              children: this.props.cancelLabel || "Cancel",
                            },
                            "cancel"
                          ),
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
      h.defaultProps = { autoFocus: !1 };
    },
    "4j5h": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return this[r[e.ordered]](e);
      };
      var r = { true: "visitOrderedItems", false: "visitUnorderedItems" };
    },
    "4reG": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Viewer", function () {
          return b;
        }),
        n.d(t, "Component", function () {
          return j;
        }),
        n.d(t, "reducer", function () {
          return h;
        });
      var r = n("nKUr"),
        o = n("xvhg"),
        i = n("MX0m"),
        a = n.n(i),
        c = (n("q1tI"), n("EQ2k")),
        s = n("gfZM"),
        l = n("dI/k"),
        u = n("Qbrf"),
        d = n("S6NQ"),
        p = n("h7rM"),
        f = n("/MKj"),
        b = function (e) {
          var t = e.content,
            n = e.mime;
          if (n.startsWith("video/"))
            return Object(r.jsx)("video", {
              src: "data:".concat(n, ";base64,").concat(t),
              style: { maxHeight: "100%", maxWidth: "100%" },
              controls: !0,
            });
          if (n.startsWith("image/"))
            return Object(r.jsx)("img", {
              src: "data:".concat(n, ";base64,").concat(t),
              style: { maxHeight: "100%", maxWidth: "100%" },
            });
          if (n.startsWith("audio/")) {
            var o = n;
            return (
              "audio/wave" === o && (o = "audio/wav"),
              Object(r.jsx)("audio", {
                src: "data:".concat(o, ";base64,").concat(t),
                style: { maxHeight: "100%", maxWidth: "100%" },
                controls: !0,
              })
            );
          }
          return "application/pdf" === n
            ? Object(r.jsx)("object", {
                data: "data:".concat(n, ";base64,").concat(t),
                type: "application/pdf",
                style: { width: "100%", height: "100%" },
                children: Object(r.jsx)("embed", {
                  src: "data:".concat(n, ";base64,").concat(t),
                  type: "application/pdf",
                  style: { width: "100%", height: "100%" },
                }),
              })
            : Object(r.jsx)("div", { children: "File type not supported" });
        },
        j = function (e) {
          var t = e.wid,
            n = e.pud,
            i = e.style,
            u = Object(p.b)(t, n, "mediaview2"),
            d = Object(o.a)(u, 1)[0].files,
            j = Object(f.f)(function (e) {
              return e.workspace[t].activeFile;
            });
          if (!j || !Object(l.j)(j))
            return Object(r.jsx)("div", {
              style: i,
              children: "No file to show",
            });
          var h = d[j],
            m = Object(r.jsx)("div", {
              children: "File loading, please wait...",
            }),
            x = null;
          if (h && h.loaded) {
            var g = s.a.from(h.content).toString("base64");
            (x = Object(r.jsxs)(r.Fragment, {
              children: [
                "Some files may fail to load on the browser.",
                " ",
                Object(r.jsx)("a", {
                  href: "data:text/plain;base64,".concat(g),
                  download: Object(l.c)(j),
                  children: "Click here to download",
                }),
              ],
            })),
              (m = Object(r.jsx)(b, { content: g, mime: Object(l.d)(j) }));
          }
          return Object(r.jsxs)("div", {
            style: i,
            className:
              a.a.dynamic([["3386734190", [c.a.gray85]]]) + " mediaview",
            children: [
              Object(r.jsx)("div", {
                className:
                  a.a.dynamic([["3386734190", [c.a.gray85]]]) +
                  " mediaview-download",
                children: x,
              }),
              Object(r.jsx)("div", {
                className:
                  a.a.dynamic([["3386734190", [c.a.gray85]]]) +
                  " mediaview-content",
                children: m,
              }),
              Object(r.jsx)(a.a, {
                id: "3386734190",
                dynamic: [c.a.gray85],
                children: [
                  ".mediaview.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#0e0e0e;}",
                  ".mediaview-download.__jsx-style-dynamic-selector{text-align:center;width:100%;color:".concat(
                    c.a.gray85,
                    ";padding:10px;}"
                  ),
                  ".mediaview-content.__jsx-style-dynamic-selector{min-height:0;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                ],
              }),
            ],
          });
        },
        h = Object(u.a)({ files: d.a });
    },
    "55fs": function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        var n,
          o,
          a,
          d,
          p,
          f,
          b,
          j,
          h,
          m,
          x,
          g,
          v = t || {},
          y = v.delimiter,
          O = v.start,
          w = v.end,
          k = v.align,
          C = v.stringLength || s,
          S = 0,
          P = -1,
          E = e.length,
          R = [];
        (k = k ? k.concat() : []), (null === y || void 0 === y) && (y = " | ");
        (null !== O && void 0 !== O) || (O = "| ");
        (null !== w && void 0 !== w) || (w = " |");
        for (; ++P < E; )
          for (d = e[P], f = -1, d.length > S && (S = d.length); ++f < S; )
            (b = d[f] ? u(d[f]) : null),
              R[f] || (R[f] = 3),
              b > R[f] && (R[f] = b);
        "string" === typeof k && (k = l(S, k).split(""));
        f = -1;
        for (; ++f < S; )
          "string" === typeof (n = k[f]) && (n = n.charAt(0).toLowerCase()),
            -1 === i.indexOf(n) && (n = ""),
            (k[f] = n);
        (P = -1), (a = []);
        for (; ++P < E; ) {
          for (d = e[P], f = -1, p = []; ++f < S; )
            (h = c((h = d[f]))),
              "." === k[f]
                ? ((b = u(h)),
                  (j = R[f] + (r.test(h) ? 0 : 1) - (C(h) - b)),
                  (p[f] = h + l(j - 1)))
                : (p[f] = h);
          a[P] = p;
        }
        (R = []), (P = -1);
        for (; ++P < E; )
          for (p = a[P], f = -1; ++f < S; )
            (h = p[f]), R[f] || (R[f] = 3), (j = C(h)) > R[f] && (R[f] = j);
        P = -1;
        for (; ++P < E; ) {
          if (((p = a[P]), (f = -1), !1 !== v.pad))
            for (; ++f < S; )
              (h = p[f]),
                (b = R[f] - (C(h) || 0)),
                (m = l(b)),
                "r" === k[f] || "." === k[f]
                  ? (h = m + h)
                  : "c" === k[f]
                  ? ((b /= 2) % 1 === 0
                      ? ((x = b), (g = b))
                      : ((x = b + 0.5), (g = b - 0.5)),
                    (h = l(x) + h + l(g)))
                  : (h += m),
                (p[f] = h);
          a[P] = p.join(y);
        }
        if (!1 !== v.rule) {
          for (f = -1, o = []; ++f < S; )
            !1 === v.pad
              ? ((h = e[0][f]), (m = (m = C(c(h))) > 3 ? m : 3))
              : (m = R[f]),
              (n = k[f]),
              (h = "r" === n || "" === n ? "-" : ":"),
              (h += l(m - 2, "-")),
              (h += "l" !== n && "" !== n ? ":" : "-"),
              (o[f] = h);
          a.splice(1, 0, o.join(y));
        }
        return O + a.join(w + "\n" + O) + w;
      };
      var r = /\./,
        o = /\.[^.]*$/,
        i = ["l", "r", "c", ".", ""],
        a = " ";
      function c(e) {
        return null === e || void 0 === e ? "" : String(e);
      }
      function s(e) {
        return String(e).length;
      }
      function l(e, t) {
        return new Array(e + 1).join(t || a);
      }
      function u(e) {
        var t = o.exec(e);
        return t ? t.index + 1 : e.length;
      }
    },
    "5TM/": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("H+61"),
        i = n("UlJF"),
        a = n("7LId"),
        c = n("VIvw"),
        s = n("iHvq"),
        l = n("MX0m"),
        u = n.n(l),
        d = n("q1tI"),
        p = n("XpCD"),
        f = n("AENu"),
        b = n("hYzu"),
        j = n("vJKn"),
        h = n.n(j),
        m = n("rg98"),
        x = n("jT3O"),
        g = n("lTCR"),
        v = n.n(g),
        y = n("DI+Y"),
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
            r = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      function C() {
        var e = Object(x.a)([
          "\n  query replSearch($search: String!) {\n    currentUser {\n      id\n      replSearch(search: $search) {\n        id\n        title\n        language\n        hostedUrl\n      }\n    }\n  }\n",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(x.a)([
          "\n  {\n    recentRepls {\n      id\n      title\n      hostedUrl\n    }\n  }\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      var P = v()(S()),
        E = v()(C()),
        R = (function (e) {
          Object(a.a)(n, e);
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
                var e = Object(m.a)(
                  h.a.mark(function e(t) {
                    var n, o, i;
                    return h.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              r.props.client.query({
                                query: E,
                                variables: { search: t },
                              })
                            );
                          case 2:
                            if (
                              ((n = e.sent),
                              (o = n.data),
                              (i = o.currentUser.replSearch),
                              !r.state.isUrl || 1 !== i.length)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              r.props.onChange({
                                repl: i[0],
                                showHosted: t.includes("repl.co"),
                              }),
                              e.abrupt("return", { options: [] })
                            );
                          case 8:
                            r.setState({ options: i });
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
              (r.getRecentRepls = Object(m.a)(
                h.a.mark(function e() {
                  var t, n;
                  return h.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), r.props.client.query({ query: P })
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
            Object(i.a)(n, [
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
                    i = t.search,
                    a = t.recentRepls,
                    c = o && i.includes("repl.co") ? "hostedUrl" : "title";
                  return Object(r.jsxs)("div", {
                    className: "jsx-932420000",
                    children: [
                      Object(r.jsx)(w.a, {}),
                      Object(r.jsx)(O.a, {
                        onBlurResetsInput: !1,
                        onCloseResetsInput: !1,
                        autoload: !1,
                        noResultsText: o || !i ? null : "No repls found",
                        labelKey: c,
                        valueKey: "id",
                        options: !i && a ? a : n,
                        name: "repl",
                        value: e.repl ? e.repl.id : void 0,
                        onInputChange: this.onInputChange,
                        onChange: function (t) {
                          return e.onChange({
                            repl: t,
                            showHosted: i.includes("repl.co"),
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
      R.defaultProps = { theme: "replitLight" };
      var _ = Object(y.withApollo)(R);
      function I(e) {
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
            r = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var N = (function (e) {
        Object(a.a)(n, e);
        var t = I(n);
        function n() {
          var e;
          Object(o.a)(this, n);
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
            i[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(i))).beforeUnload =
              function () {
                var e =
                  "Are you sure you want to leave? Changes you made may not be saved.";
                return (window.event.returnValue = e), e;
              }),
            e
          );
        }
        return (
          Object(i.a)(n, [
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
                              children: Object(r.jsx)(_, {
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
      N.defaultProps = { showReplSelector: !0 };
      t.a = N;
    },
    "5mGw": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("SYH8")),
        c = 24;
      t.b = function (e) {
        var t = e.icon,
          n = e.active,
          o = e.children,
          s = e.paddingTop,
          l = e.paddingBottom,
          u = e.error,
          d = e.success,
          p = "inherit";
        return (
          d && (p = "var(--color-positive-1)"),
          u && (p = "var(--color-negative-1)"),
          Object(r.jsxs)("div", {
            style: { paddingTop: s, paddingBottom: l },
            className:
              "jsx-".concat(a.a.__hash) +
              " " +
              i.a.dynamic([
                ["3263187118", [c, p, c, n ? "var(--color-primary-1)" : p]],
              ]) +
              " prompt",
            children: [
              t
                ? Object(r.jsx)("div", {
                    className:
                      "jsx-".concat(a.a.__hash) +
                      " " +
                      i.a.dynamic([
                        [
                          "3263187118",
                          [c, p, c, n ? "var(--color-primary-1)" : p],
                        ],
                      ]) +
                      " prompt-icon",
                    children: d ? "\u2713" : "\u276f",
                  })
                : null,
              o,
              Object(r.jsx)(i.a, { id: a.a.__hash, children: a.a }),
              Object(r.jsx)(i.a, {
                id: "3263187118",
                dynamic: [c, p, c, n ? "var(--color-primary-1)" : p],
                children: [
                  ".prompt.__jsx-style-dynamic-selector{position:relative;min-height:"
                    .concat(c, "px;color:")
                    .concat(p, ";}"),
                  ".prompt-icon.__jsx-style-dynamic-selector{position:absolute;top:-1px;left:-10px;width:10px;line-height:"
                    .concat(c, "px;font-size:12px;color:")
                    .concat(n ? "var(--color-primary-1)" : p, ";}"),
                ],
              }),
            ],
          })
        );
      };
    },
    "5r9/": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return "[^" + this.all(e).join("") + "]";
      };
    },
    60: function (e, t, n) {
      n("j36g"), (e.exports = n("MDTK"));
    },
    "6AB2": function (e, t, n) {
      "use strict";
      var r = n("LByj"),
        o = n("RjOF");
      e.exports = function (e) {
        var t = e.value,
          n = o("`", r(t, "`") + 1),
          i = n,
          a = n;
        "`" === t.charAt(0) && (i += " ");
        "`" === t.charAt(t.length - 1) && (a = " " + a);
        return i + t + a;
      };
    },
    "6NTm": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return e.value;
      };
    },
    "7WUS": function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t,
          n,
          r = [],
          o = e.children,
          i = o.length,
          a = -1;
        for (; ++a < i; )
          (t = o[a]),
            n &&
              (t.type === n.type && "list" === n.type
                ? r.push(n.ordered === t.ordered ? "\n\n\n" : "\n\n")
                : "list" !== n.type || "code" !== t.type || t.lang
                ? r.push("\n\n")
                : r.push("\n\n\n")),
            r.push(this.visit(t, e)),
            (n = t);
        return r.join("");
      };
    },
    "8+hW": function (e, t, n) {
      "use strict";
      var r = n("QxN4");
      e.exports = function (e, t) {
        var n = e.encode,
          o = e.escape,
          i = e.enterLink();
        if ("shortcut" !== t.referenceType && "collapsed" !== t.referenceType)
          return i;
        return (
          (e.escape = r),
          (e.encode = r),
          function () {
            (e.encode = n), (e.escape = o), i();
          }
        );
      };
    },
    ACLC: function (e) {
      e.exports = JSON.parse(
        '{"nbsp":"\xa0","iexcl":"\xa1","cent":"\xa2","pound":"\xa3","curren":"\xa4","yen":"\xa5","brvbar":"\xa6","sect":"\xa7","uml":"\xa8","copy":"\xa9","ordf":"\xaa","laquo":"\xab","not":"\xac","shy":"\xad","reg":"\xae","macr":"\xaf","deg":"\xb0","plusmn":"\xb1","sup2":"\xb2","sup3":"\xb3","acute":"\xb4","micro":"\xb5","para":"\xb6","middot":"\xb7","cedil":"\xb8","sup1":"\xb9","ordm":"\xba","raquo":"\xbb","frac14":"\xbc","frac12":"\xbd","frac34":"\xbe","iquest":"\xbf","Agrave":"\xc0","Aacute":"\xc1","Acirc":"\xc2","Atilde":"\xc3","Auml":"\xc4","Aring":"\xc5","AElig":"\xc6","Ccedil":"\xc7","Egrave":"\xc8","Eacute":"\xc9","Ecirc":"\xca","Euml":"\xcb","Igrave":"\xcc","Iacute":"\xcd","Icirc":"\xce","Iuml":"\xcf","ETH":"\xd0","Ntilde":"\xd1","Ograve":"\xd2","Oacute":"\xd3","Ocirc":"\xd4","Otilde":"\xd5","Ouml":"\xd6","times":"\xd7","Oslash":"\xd8","Ugrave":"\xd9","Uacute":"\xda","Ucirc":"\xdb","Uuml":"\xdc","Yacute":"\xdd","THORN":"\xde","szlig":"\xdf","agrave":"\xe0","aacute":"\xe1","acirc":"\xe2","atilde":"\xe3","auml":"\xe4","aring":"\xe5","aelig":"\xe6","ccedil":"\xe7","egrave":"\xe8","eacute":"\xe9","ecirc":"\xea","euml":"\xeb","igrave":"\xec","iacute":"\xed","icirc":"\xee","iuml":"\xef","eth":"\xf0","ntilde":"\xf1","ograve":"\xf2","oacute":"\xf3","ocirc":"\xf4","otilde":"\xf5","ouml":"\xf6","divide":"\xf7","oslash":"\xf8","ugrave":"\xf9","uacute":"\xfa","ucirc":"\xfb","uuml":"\xfc","yacute":"\xfd","thorn":"\xfe","yuml":"\xff","fnof":"\u0192","Alpha":"\u0391","Beta":"\u0392","Gamma":"\u0393","Delta":"\u0394","Epsilon":"\u0395","Zeta":"\u0396","Eta":"\u0397","Theta":"\u0398","Iota":"\u0399","Kappa":"\u039a","Lambda":"\u039b","Mu":"\u039c","Nu":"\u039d","Xi":"\u039e","Omicron":"\u039f","Pi":"\u03a0","Rho":"\u03a1","Sigma":"\u03a3","Tau":"\u03a4","Upsilon":"\u03a5","Phi":"\u03a6","Chi":"\u03a7","Psi":"\u03a8","Omega":"\u03a9","alpha":"\u03b1","beta":"\u03b2","gamma":"\u03b3","delta":"\u03b4","epsilon":"\u03b5","zeta":"\u03b6","eta":"\u03b7","theta":"\u03b8","iota":"\u03b9","kappa":"\u03ba","lambda":"\u03bb","mu":"\u03bc","nu":"\u03bd","xi":"\u03be","omicron":"\u03bf","pi":"\u03c0","rho":"\u03c1","sigmaf":"\u03c2","sigma":"\u03c3","tau":"\u03c4","upsilon":"\u03c5","phi":"\u03c6","chi":"\u03c7","psi":"\u03c8","omega":"\u03c9","thetasym":"\u03d1","upsih":"\u03d2","piv":"\u03d6","bull":"\u2022","hellip":"\u2026","prime":"\u2032","Prime":"\u2033","oline":"\u203e","frasl":"\u2044","weierp":"\u2118","image":"\u2111","real":"\u211c","trade":"\u2122","alefsym":"\u2135","larr":"\u2190","uarr":"\u2191","rarr":"\u2192","darr":"\u2193","harr":"\u2194","crarr":"\u21b5","lArr":"\u21d0","uArr":"\u21d1","rArr":"\u21d2","dArr":"\u21d3","hArr":"\u21d4","forall":"\u2200","part":"\u2202","exist":"\u2203","empty":"\u2205","nabla":"\u2207","isin":"\u2208","notin":"\u2209","ni":"\u220b","prod":"\u220f","sum":"\u2211","minus":"\u2212","lowast":"\u2217","radic":"\u221a","prop":"\u221d","infin":"\u221e","ang":"\u2220","and":"\u2227","or":"\u2228","cap":"\u2229","cup":"\u222a","int":"\u222b","there4":"\u2234","sim":"\u223c","cong":"\u2245","asymp":"\u2248","ne":"\u2260","equiv":"\u2261","le":"\u2264","ge":"\u2265","sub":"\u2282","sup":"\u2283","nsub":"\u2284","sube":"\u2286","supe":"\u2287","oplus":"\u2295","otimes":"\u2297","perp":"\u22a5","sdot":"\u22c5","lceil":"\u2308","rceil":"\u2309","lfloor":"\u230a","rfloor":"\u230b","lang":"\u2329","rang":"\u232a","loz":"\u25ca","spades":"\u2660","clubs":"\u2663","hearts":"\u2665","diams":"\u2666","quot":"\\"","amp":"&","lt":"<","gt":">","OElig":"\u0152","oelig":"\u0153","Scaron":"\u0160","scaron":"\u0161","Yuml":"\u0178","circ":"\u02c6","tilde":"\u02dc","ensp":"\u2002","emsp":"\u2003","thinsp":"\u2009","zwnj":"\u200c","zwj":"\u200d","lrm":"\u200e","rlm":"\u200f","ndash":"\u2013","mdash":"\u2014","lsquo":"\u2018","rsquo":"\u2019","sbquo":"\u201a","ldquo":"\u201c","rdquo":"\u201d","bdquo":"\u201e","dagger":"\u2020","Dagger":"\u2021","permil":"\u2030","lsaquo":"\u2039","rsaquo":"\u203a","euro":"\u20ac"}'
      );
    },
    AENu: function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n("nKUr"),
          o = n("cpVT"),
          i = n("z7pX"),
          a = n("vJKn"),
          c = n.n(a),
          s = n("rg98"),
          l = n("H+61"),
          u = n("UlJF"),
          d = n("7LId"),
          p = n("VIvw"),
          f = n("iHvq"),
          b = n("jT3O"),
          j = n("MX0m"),
          h = n.n(j),
          m = n("q1tI"),
          x = n("M85P"),
          g = n("TSYQ"),
          v = n.n(g),
          y = n("+uXX"),
          O = n("lTCR"),
          w = n.n(O),
          k = n("G5Ub"),
          C = n("n/dw"),
          S = n("kFXa"),
          P = n("LBzQ"),
          E = n("XLFt"),
          R = n("TyLv");
        function _(e, t) {
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
              ? _(Object(n), !0).forEach(function (t) {
                  Object(o.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function N(e) {
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
        function D() {
          var e = Object(b.a)([
            "\n  query atMentionSuggestions(\n    $search: String\n    $limit: Int\n    $contextType: String\n    $contextId: Int\n  ) {\n    atMentionSuggestions(\n      search: $search\n      limit: $limit\n      contextType: $contextType\n      contextId: $contextId\n    ) {\n      id\n      username\n      fullName\n    }\n  }\n",
          ]);
          return (
            (D = function () {
              return e;
            }),
            e
          );
        }
        var T = w()(D()),
          U = (function (t) {
            Object(d.a)(o, t);
            var n = N(o);
            function o() {
              var t;
              Object(l.a)(this, o);
              for (
                var r = arguments.length, a = new Array(r), u = 0;
                u < r;
                u++
              )
                a[u] = arguments[u];
              return (
                ((t = n.call.apply(n, [this].concat(a))).state = {}),
                (t.onPaste = (function () {
                  var e = Object(s.a)(
                    c.a.mark(function e(n) {
                      var r, o;
                      return c.a.wrap(function (e) {
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
                              return (e.next = 5), Object(C.a)(r);
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
                  var e = Object(s.a)(
                    c.a.mark(function e(n) {
                      var r, o, a, s, l, u, d, p, f, b;
                      return c.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t.props),
                                (o = r.value),
                                (a = r.onChange),
                                (s = n.map(function (e) {
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
                                (p = Object(i.a)(s)),
                                u && p.unshift(u),
                                d && p.push(d),
                                a(p.join("\n")),
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
                                (b = s.reduce(function (e, t, r) {
                                  var o = n[r].name.replace(/\.[^/.]+$/, ""),
                                    i = f[r].url;
                                  return e.replace(
                                    t,
                                    "![".concat(o, "](").concat(i, ")")
                                  );
                                }, t.props.value)),
                                a(b);
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
                    var i = o.cursor,
                      a = o.text ? o.text.split(/\s/).shift() : "",
                      c = t.props,
                      s = c.value,
                      l = c.onChange,
                      u = s.slice(0, i.selectionStart - a.length),
                      d = "".concat(r, " "),
                      p = s.slice(u.length + a.length + 1);
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
                      i = o ? { top: o.top + o.height, left: o.left } : null;
                    i &&
                      this.textarea &&
                      this.textarea.el &&
                      (i.top -= this.textarea.el.scrollTop);
                    var a = !!o;
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
                                Object(r.jsx)(x.a, {
                                  id: e.props.uniqueId,
                                  defaultHighlightedIndex: 0,
                                  onOuterClick: function () {
                                    return e.closeUserMentionsMenu();
                                  },
                                  onChange: e.onUserMentionSelect,
                                  itemToString: function () {},
                                  isOpen: a,
                                  children: function (o) {
                                    return Object(r.jsxs)("div", {
                                      className:
                                        "jsx-1615437136 content-textarea",
                                      children: [
                                        Object(r.jsx)(
                                          P.a,
                                          I(
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
                                                Object(R.a)(t),
                                                  e.onKeyDown(t),
                                                  a ||
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
                                          ? Object(r.jsx)(y.Query, {
                                              query: T,
                                              variables: I(
                                                { search: n, limit: 6 },
                                                t ? t() : {}
                                              ),
                                              children: function (e) {
                                                var t = e.data,
                                                  n = e.loading,
                                                  a = e.variables,
                                                  c = [];
                                                if (
                                                  !n &&
                                                  t &&
                                                  t.atMentionSuggestions
                                                )
                                                  c = t.atMentionSuggestions;
                                                else if (
                                                  n &&
                                                  a.search &&
                                                  t &&
                                                  t.atMentionSuggestions
                                                ) {
                                                  var s =
                                                    a.search.toLowerCase();
                                                  c =
                                                    t.atMentionSuggestions.filter(
                                                      function (e) {
                                                        return e.username
                                                          .toLowerCase()
                                                          .startsWith(s);
                                                      }
                                                    );
                                                }
                                                return n || c.length
                                                  ? Object(r.jsxs)(
                                                      "ul",
                                                      I(
                                                        I(
                                                          { style: i },
                                                          o.getMenuProps()
                                                        ),
                                                        {},
                                                        {
                                                          className:
                                                            "jsx-1615437136 content-textarea-mentions",
                                                          children: [
                                                            c.map(function (
                                                              e,
                                                              t
                                                            ) {
                                                              return Object(
                                                                r.jsxs
                                                              )(
                                                                "li",
                                                                I(
                                                                  I(
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
                                                                      (v()(
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
                                                                      )(E.a, {
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
          })(m.Component);
        t.a = U;
      }.call(this, n("CfyG").setImmediate));
    },
    AERv: function (e, t) {
      var n = /^@(\w+)/,
        r = function (e, t, r) {
          var o = n.exec(t);
          if (o)
            return (
              !!r ||
              e(o[0])({
                type: "link",
                url: "/@" + o[1],
                children: [
                  { type: "text", value: o[0], position: { start: e.now() } },
                ],
              })
            );
        };
      (r.notInLink = !0),
        (r.locator = function (e, t) {
          var n = e.indexOf("@", t);
          return (
            0 === n || -1 === n || (-1 !== (n = e.indexOf(" @", t - 1)) && n++),
            n
          );
        }),
        (e.exports = {
          markdownMentionPlugin: function () {
            var e = this.Parser,
              t = e.prototype.inlineTokenizers,
              n = e.prototype.inlineMethods;
            (t.mention = r), n.splice(n.indexOf("text"), 0, "mention");
          },
          usernameRegExp: n,
        });
    },
    BHRP: function (e, t, n) {
      "use strict";
      var r = n("RjOF");
      e.exports = function () {
        var e = this.options,
          t = r(e.rule, e.ruleRepetition);
        return e.ruleSpaces ? t.split("").join(" ") : t;
      };
    },
    Bjyw: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        if ("string" !== typeof e) throw new TypeError("Expected a string");
        return !/[^0-9a-z\xDF-\xFF]/.test(e.toLowerCase());
      };
    },
    CIYy: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("jT3O"),
        i = n("MX0m"),
        a = n.n(i),
        c = (n("q1tI"), n("lTCR")),
        s = n.n(c),
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
      var f = s()(p());
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
                    Object(r.jsx)(a.a, {
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
    "DI+Y": function (e, t, n) {
      "use strict";
      var r = n("JznV");
      n.d(t, "graphql", function () {
        return r.a;
      });
      n("1gho"), n("QTzV"), n("07hc");
      var o = n("GPHa");
      n.d(t, "withApollo", function () {
        return o.a;
      });
      n("29vB");
    },
    DPht: function (e, t, n) {
      "use strict";
      var r = n("lZTF");
      e.exports = function (e) {
        return (function (e) {
          return t;
          function t(t) {
            var n = t && t.children;
            if (!n)
              throw new Error("Missing children in `parent` for `modifier`");
            return r(n, e, t);
          }
        })(
          (function (e) {
            return t;
            function t(t, n) {
              return e(t, n, this);
            }
          })(e)
        );
      };
    },
    DkIQ: function (e, t, n) {
      "use strict";
      var r = n("ZWk2");
      e.exports = function (e) {
        var t;
        if ("&" !== e.charAt(0)) return 0;
        return (t = e.split("&", 2).join("&")).length - r(t).length;
      };
    },
    Dy7O: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n("nKUr"),
        o = n("xvhg"),
        i = (n("q1tI"), n("/MKj")),
        a = n("b518"),
        c = n("tZOq"),
        s = n("sLtE"),
        l = n("VoYB");
      function u(e) {
        var t = Object(l.a)().showError,
          n = e.post,
          u = Object(i.e)(),
          d = Object(i.f)(function (e) {
            return e.user.userInfo.isLoggedIn;
          }, i.d),
          p = Object(c.td)({
            onError: function (e) {
              return t(Object(a.d)(e.message));
            },
          }),
          f = Object(o.a)(p, 2),
          b = f[0],
          j = f[1].loading,
          h = Object(c.ud)({
            onError: function (e) {
              return t(Object(a.d)(e.message));
            },
          }),
          m = Object(o.a)(h, 2),
          x = m[0],
          g = m[1].loading;
        return Object(r.jsx)(s.a, {
          hasVoted: n.hasVoted,
          canVote: n.canVote,
          voteCount: n.voteCount,
          lite: e.lite,
          onClick: function () {
            if (d) {
              if (!j && !g) {
                n.canVote || t("Voting not allowed");
                var e = { postId: n.id };
                n.hasVoted ? x({ variables: e }) : b({ variables: e });
              }
            } else u({ type: "AUTH_MODAL_SHOW" });
          },
        });
      }
    },
    EcHa: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("vJKn"),
        i = n.n(o),
        a = n("rg98"),
        c = n("H+61"),
        s = n("UlJF"),
        l = n("7LId"),
        u = n("VIvw"),
        d = n("iHvq"),
        p = n("MX0m"),
        f = n.n(p),
        b = n("q1tI"),
        j = n("+uXX"),
        h = n("/MKj"),
        m = n("ArsQ"),
        x = n("LBzQ"),
        g = n("hYzu"),
        v = n("zgDP");
      function y(e) {
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
      var O = (function (e) {
        Object(l.a)(n, e);
        var t = y(n);
        function n(e) {
          var r;
          return (
            Object(c.a)(this, n),
            ((r = t.call(this, e)).onSubmit = (function () {
              var e = Object(a.a)(
                i.a.mark(function e(t) {
                  var n, o, a, c, s, l, u, d, p;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = r.state),
                              (o = n.reason),
                              (a = n.loading),
                              (c = r.props),
                              (s = c.postId),
                              (l = c.commentId),
                              (u = c.onCreate),
                              !a)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              r.setState({ loading: !0 }),
                              (e.prev = 5),
                              (e.next = 8),
                              t({
                                variables: {
                                  postId: s,
                                  commentId: l,
                                  reason: o,
                                },
                              })
                            );
                          case 8:
                            e.next = 16;
                            break;
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              r.setState({ loading: !1 }),
                              (d =
                                (e.t0.graphQLErrors.length &&
                                  e.t0.graphQLErrors[0].message) ||
                                "Something went wrong. Please contact support"),
                              r.props.showMessage({
                                content: d,
                                type: "error",
                                time: 4e3,
                              }),
                              e.abrupt("return")
                            );
                          case 16:
                            r.setState({ reason: "", loading: !1 }),
                              (p = s
                                ? v.events.BOARD_REPORT_ON_POST
                                : v.events.BOARD_REPORT_ON_COMMENT),
                              Object(v.track)(p, { postId: s, commentId: l }),
                              u && u();
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (r.state = { loading: !1, reason: "" }),
            r
          );
        }
        return (
          Object(s.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.mutation,
                  o = t.onCancel,
                  i = t.postId,
                  a = t.updateCacheForReportMutation,
                  c = this.state,
                  s = c.loading,
                  l = c.reason;
                return Object(r.jsx)(j.Mutation, {
                  mutation: n,
                  update: a,
                  children: function (t) {
                    return Object(r.jsxs)("form", {
                      onSubmit: function (n) {
                        n && n.preventDefault(), e.onSubmit(t);
                      },
                      className: "jsx-1534063620",
                      children: [
                        Object(r.jsx)(f.a, {
                          id: "1534063620",
                          children: [
                            ".new-report-form-controls.jsx-1534063620{margin-top:15px;}",
                          ],
                        }),
                        Object(r.jsx)(x.a, {
                          value: l,
                          onChange: function (t) {
                            return e.setState({
                              reason: t.currentTarget.value,
                            });
                          },
                          autofocus: !0,
                          placeholder: "More details about why this ".concat(
                            i ? "post" : "comment",
                            " is inappropriate"
                          ),
                        }),
                        Object(r.jsx)("div", {
                          className: "jsx-1534063620 new-report-form-controls",
                        }),
                        Object(r.jsx)(g.a, {
                          cta: "Report",
                          loading: s,
                          onCancel: o,
                          cancelable: !0,
                          isDangerCta: !0,
                        }),
                      ],
                    });
                  },
                });
              },
            },
          ]),
          n
        );
      })(b.Component);
      t.a = Object(h.c)(void 0, { showMessage: m.b })(O);
    },
    EhLH: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("vJKn"),
        o = n.n(r),
        i = n("rg98"),
        a = n("nKUr"),
        c = n("cpVT"),
        s = n("z7pX"),
        l = n("H+61"),
        u = n("UlJF"),
        d = n("7LId"),
        p = n("VIvw"),
        f = n("iHvq"),
        b = n("MX0m"),
        j = n.n(b),
        h = n("q1tI"),
        m = n("+uXX"),
        x = n("YFqc"),
        g = n.n(x),
        v = n("EQ2k"),
        y = n("FWhU"),
        O = n("7J1T"),
        w = n("/MKj"),
        k = n("RVZx"),
        C = n("PHrS"),
        S = n("IujW"),
        P = n.n(S),
        E = n("2lQ7"),
        R = n.n(E);
      function _(e, t) {
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
            ? _(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var N = function (e) {
          var t = e.children,
            n = e.href,
            r = n.startsWith("/languages") ? { target: "_blank" } : {};
          return Object(a.jsx)("a", I(I({ href: n }, r), {}, { children: t }));
        },
        D = function (e) {
          return Object(a.jsxs)("div", {
            className: "jsx-1147244244 board-header-description-container",
            children: [
              Object(a.jsx)(P.a, {
                className: "board-header-description",
                source: e.description,
                plugins: [R.a],
                renderers: { link: N },
              }),
              Object(a.jsx)(j.a, {
                id: "1147244244",
                children: [
                  ".board-header-description-container.jsx-1147244244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:20px;padding-right:20px;margin-top:20px;margin-bottom:20px;}",
                  ".board-header-description{line-height:22px;color:var(--color-foreground-1);max-width:600px;}",
                  ".board-header-description p{margin-bottom:10px;}",
                  ".board-header-description ul{margin-top:10px;margin-bottom:10px;padding-left:5%;list-style:none;}",
                ],
              }),
            ],
          });
        },
        T = n("Zj0H"),
        U = n("R54M"),
        M = n("/Rnh"),
        L = n("g4pe"),
        A = n.n(L),
        F = n("V6K1");
      function q(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var z = "hot",
        K = [
          { value: "hot", label: "hot" },
          { value: "new", label: "new" },
          { value: "votes", label: "top" },
        ],
        B = function (e) {
          var t = e.currentOrder,
            n = e.link;
          return Object(a.jsxs)("div", {
            className: "jsx-500149214",
            children: [
              Object(a.jsx)(F.a, { level: 5, children: "Comments" }),
              K.map(function (e) {
                var r = e.value,
                  o = e.label;
                return Object(h.createElement)(
                  g.a,
                  V(V({}, n(r === z ? void 0 : r)), {}, { key: r }),
                  Object(a.jsx)("a", {
                    className:
                      "jsx-500149214 " +
                      (((t || z) === r
                        ? "comments-header-sort-active"
                        : void 0) || ""),
                    children: o,
                  })
                );
              }),
              Object(a.jsx)(j.a, {
                id: "500149214",
                children: [
                  "div.jsx-500149214{margin-top:40px;margin-bottom:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
                  "a.jsx-500149214{margin-left:15px;text-transform:capitalize;}",
                  "b.jsx-500149214{color:var(--color-foreground);}",
                  ".comments-header-sort-active.jsx-500149214{border-color:var(--color-primary);}",
                ],
              }),
            ],
          });
        },
        H = n("jT3O"),
        W = n("lTCR"),
        Q = n.n(W),
        X = n("zgDP"),
        $ = n("RGhV"),
        G = n("igWl"),
        J = n("8bdv");
      function Y() {
        var e = Object(H.a)([
          "\n  query post($id: Int!, $after: String) {\n    post(id: $id) {\n      id\n      ...PostVotesVotes\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = Object(H.a)([
          "\n    fragment PostVotesUser on User {\n      id\n      ...DepreciatedUserLabelWithImageUser\n    }\n    ",
          "\n  ",
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = Object(H.a)([
          "\n  fragment PostVotesVotes on Post {\n    id\n    voteCount\n    votes(after: $after) {\n      items {\n        id\n        user {\n          id\n          ...DepreciatedUserLabelWithImageUser\n        }\n      }\n      pageInfo {\n        hasNextPage\n        nextCursor\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      var te = {
          votes: Q()(ee(), J.a.fragments.user),
          user: Q()(Z(), J.a.fragments.user),
        },
        ne = Q()(Y(), te.votes),
        re = Object($.a)("post", "votes"),
        oe = function (e) {
          return Object(a.jsx)(m.Query, {
            query: ne,
            variables: { id: e.postId },
            children: function (e) {
              var t = e.data,
                n = e.variables,
                r = e.fetchMore;
              return t && t.post && t.post.votes
                ? Object(a.jsxs)("div", {
                    className: "jsx-312575682",
                    children: [
                      t.post.votes.items.length
                        ? Object(a.jsx)("div", {
                            className: "jsx-312575682 post-votes-heading",
                            children: Object(a.jsx)("b", {
                              className: "jsx-312575682",
                              children: "Voters",
                            }),
                          })
                        : null,
                      Object(a.jsx)("div", {
                        className: "jsx-312575682 post-votes-list",
                        children: t.post.votes.items
                          .filter(function (e) {
                            return !!e.user;
                          })
                          .map(function (e, t) {
                            return Object(a.jsx)(
                              "div",
                              {
                                className: "jsx-312575682 post-votes-list-item",
                                children: Object(a.jsx)(G.a, {
                                  username: e.user.username,
                                  children: Object(a.jsx)(J.a, {
                                    size: "xs",
                                    user: e.user,
                                  }),
                                }),
                              },
                              e.user ? e.user.id : t
                            );
                          }),
                      }),
                      Object(a.jsx)("div", {
                        className: "jsx-312575682",
                        children: t.post.votes.pageInfo.hasNextPage
                          ? Object(a.jsxs)("a", {
                              onClick: function (e) {
                                e.preventDefault(),
                                  Object(X.track)(
                                    X.events.POST_VOTES_LOAD_MORE_CLICKED,
                                    { postId: n.id }
                                  ),
                                  r({
                                    variables: {
                                      id: n.id,
                                      after: t.post.votes.pageInfo.nextCursor,
                                    },
                                    updateQuery: re,
                                  });
                              },
                              className: "jsx-312575682 post-votes-load-more",
                              children: [
                                t.post.voteCount - t.post.votes.items.length,
                                " more...",
                              ],
                            })
                          : null,
                      }),
                      Object(a.jsx)(j.a, {
                        id: "312575682",
                        children: [
                          ".post-votes-heading.jsx-312575682{font-size:16px;margin-bottom:10px;}",
                          ".post-votes-list.jsx-312575682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-10px;margin-right:-10px;}",
                          ".post-votes-list-item.jsx-312575682{margin:0 10px 10px;}",
                          ".post-votes-list-item.jsx-312575682:first-child{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:5px;}",
                          ".post-votes-load-more.jsx-312575682{margin:5px 0;font-size:14px;}",
                        ],
                      }),
                    ],
                  })
                : null;
            },
          });
        },
        ie = n("b04V"),
        ae = n("3gM7"),
        ce = n("OEiS"),
        se = n.n(ce),
        le = n("OI0a"),
        ue = n("3web"),
        de = n("zhTl");
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
      function be(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return je(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return je(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function je(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function he(e) {
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
      var me = Object($.a)("post", "comments"),
        xe = (function (e) {
          Object(d.a)(n, e);
          var t = he(n);
          function n() {
            var e;
            Object(l.a)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(
                t,
                [this].concat(o)
              )).updateCacheForCommentMuation = function (t, n) {
                var r,
                  o = n.data,
                  i = parseInt(e.props.router.query.id, 10),
                  a = T.b,
                  c = o.createComment.comment,
                  l = be(K);
                try {
                  for (l.s(); !(r = l.n()).done; ) {
                    var u = r.value.value,
                      d = void 0,
                      p = { id: i, commentsOrder: u !== z ? u : void 0 };
                    try {
                      d = t.readQuery({ query: a, variables: p });
                    } catch (b) {
                      if (!b.message.startsWith("Can't find field comments"))
                        throw b;
                    }
                    if (d && d.post) {
                      if (
                        (d.post.comments.items || (d.post.comments.items = []),
                        c.parentComment)
                      ) {
                        var f = d.post.comments.items.find(function (e) {
                          return e.id === c.parentComment.id;
                        });
                        f &&
                          (f.comments || (f.comments = []), f.comments.push(c));
                      } else
                        d.post.comments.items = [c].concat(
                          Object(s.a)(d.post.comments.items)
                        );
                      t.writeQuery({ query: a, variables: p, data: d }),
                        e.forceUpdate();
                    }
                  }
                } catch (j) {
                  l.e(j);
                } finally {
                  l.f();
                }
              }),
              e
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.incrementAuthModalPromptCount(),
                    Object(X.track)(X.events.POST_VISTED, {
                      id: this.props.router.query.id,
                    });
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  !e.isLoggedIn &&
                    this.props.isLoggedIn &&
                    window.location.reload();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.router;
                  return Object(a.jsx)(m.Query, {
                    notifyOnNetworkStatusChange: !0,
                    query: T.b,
                    variables: {
                      id: parseInt(t.query.id, 10),
                      commentsOrder: t.query.order ? t.query.order : void 0,
                    },
                    children: function (n) {
                      var r,
                        o,
                        i,
                        c,
                        s,
                        l = n.data,
                        u = n.variables,
                        d = n.fetchMore,
                        p = n.loading,
                        f = l && l.post ? l.post : void 0;
                      if (f) {
                        (c = f.isHidden), (i = f.title);
                        var b = se()(f.body);
                        b.images.length && (o = b.images[0]),
                          b.text && (r = b.text.join(" ")),
                          f.board &&
                            f.board.description &&
                            (s = f.board.description);
                      }
                      return Object(a.jsxs)(k.a, {
                        title: i || "Post",
                        description: r,
                        image: o,
                        location: t.asPath,
                        largeCard: !0,
                        children: [
                          !p && !f && Object(a.jsx)(ie.a, {}),
                          p && !f ? Object(a.jsx)(ue.a, {}) : null,
                          c
                            ? Object(a.jsx)(A.a, {
                                children: Object(a.jsx)("meta", {
                                  name: "robots",
                                  content: "noindex",
                                }),
                              })
                            : null,
                          f &&
                            Object(a.jsxs)("div", {
                              className: j.a.dynamic([
                                ["1188084770", [v.a.blue]],
                              ]),
                              children: [
                                Object(a.jsx)(y.a, {
                                  title: "Please sign up or log in",
                                  description:
                                    "Welcome to Repl Talk, a place for Repl.it users to share and talk about what they built. Please login/signup to post and upvote.",
                                  allowAnon: !0,
                                }),
                                Object(a.jsx)(C.a, {
                                  currentSlug:
                                    f && f.board ? f.board.slug : void 0,
                                }),
                                s ? Object(a.jsx)(D, { description: s }) : null,
                                Object(a.jsxs)("div", {
                                  className:
                                    j.a.dynamic([["1188084770", [v.a.blue]]]) +
                                    " post-page-content",
                                  children: [
                                    f
                                      ? Object(a.jsx)("div", {
                                          className:
                                            j.a.dynamic([
                                              ["1188084770", [v.a.blue]],
                                            ]) + " post-page-back",
                                          children: Object(a.jsx)(g.a, {
                                            href: {
                                              pathname: "/postsFeed",
                                              query: {
                                                boardSlug: f.board.slug,
                                              },
                                            },
                                            as: f.board.url,
                                            children: Object(a.jsx)("a", {
                                              className: j.a.dynamic([
                                                ["1188084770", [v.a.blue]],
                                              ]),
                                              children:
                                                "\u2190 Back to all posts",
                                            }),
                                          }),
                                        })
                                      : null,
                                    f
                                      ? Object(a.jsxs)(h.Fragment, {
                                          children: [
                                            Object(a.jsx)(U.a, {
                                              post: f,
                                              updateCacheForCommentMuation:
                                                e.updateCacheForCommentMuation,
                                            }),
                                            f.isAnswerable &&
                                            f.answeredBy &&
                                            f.answer
                                              ? Object(a.jsx)(de.a, {
                                                  answer: f.answer,
                                                  user: f.answeredBy,
                                                  hashLink: !0,
                                                })
                                              : null,
                                            f.isAnnouncement
                                              ? null
                                              : Object(a.jsx)("div", {
                                                  className:
                                                    j.a.dynamic([
                                                      [
                                                        "1188084770",
                                                        [v.a.blue],
                                                      ],
                                                    ]) + " post-page-votes",
                                                  children: Object(a.jsx)(oe, {
                                                    postId: parseInt(
                                                      t.query.id,
                                                      10
                                                    ),
                                                  }),
                                                }),
                                            f.comments.items.length
                                              ? Object(a.jsx)(B, {
                                                  currentOrder: t.query.order,
                                                  link: function (e) {
                                                    return {
                                                      scroll: !1,
                                                      href: {
                                                        pathname: t.pathname,
                                                        query: fe(
                                                          { id: t.query.id },
                                                          e ? { order: e } : {}
                                                        ),
                                                      },
                                                      as: {
                                                        pathname: f.url,
                                                        query: e
                                                          ? { order: e }
                                                          : {},
                                                      },
                                                    };
                                                  },
                                                })
                                              : null,
                                            f.comments.items.map(function (t) {
                                              return Object(a.jsx)(
                                                "div",
                                                {
                                                  id: t.id,
                                                  className: j.a.dynamic([
                                                    ["1188084770", [v.a.blue]],
                                                  ]),
                                                  children: Object(a.jsx)(M.c, {
                                                    isAnswerable:
                                                      f.isAnswerable,
                                                    updateCacheForCommentMuation:
                                                      e.updateCacheForCommentMuation,
                                                    comment: t,
                                                  }),
                                                },
                                                t.id
                                              );
                                            }),
                                            f &&
                                            f.comments &&
                                            f.comments.pageInfo.nextCursor
                                              ? Object(a.jsx)(le.a, {
                                                  loading: p,
                                                  onClick: function () {
                                                    Object(X.track)(
                                                      X.events
                                                        .POST_COMMENTS_LOAD_MORE_CLICKED,
                                                      { post: f.title }
                                                    ),
                                                      d({
                                                        variables: fe(
                                                          fe({}, u),
                                                          {},
                                                          {
                                                            commentsAfter:
                                                              f.comments
                                                                .pageInfo
                                                                .nextCursor,
                                                          }
                                                        ),
                                                        updateQuery: me,
                                                      });
                                                  },
                                                })
                                              : null,
                                          ],
                                        })
                                      : null,
                                  ],
                                }),
                                Object(a.jsx)(j.a, {
                                  id: "1188084770",
                                  dynamic: [v.a.blue],
                                  children: [
                                    ".post-page-content.__jsx-style-dynamic-selector{margin:30px auto;margin-bottom:0;padding:0 20px;padding-bottom:30px;max-width:700px;}",
                                    ".post-page-votes.__jsx-style-dynamic-selector,.post-page-comments-header.__jsx-style-dynamic-selector{margin-top:40px;margin-bottom:20px;color:var(--color-foreground-1);}",
                                    ".post-page-back.__jsx-style-dynamic-selector{margin-bottom:40px;}",
                                    ".post-page-sort.__jsx-style-dynamic-selector{margin-left:15px;}",
                                    ".post-page-sort-active.__jsx-style-dynamic-selector{border-bottom:1px solid ".concat(
                                      v.a.blue,
                                      ";}"
                                    ),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      });
                    },
                  });
                },
              },
            ]),
            n
          );
        })(h.Component);
      xe.getInitialProps = (function () {
        var e = Object(i.a)(
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
                      Object(ae.a)(n, r)
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
      t.default = Object(w.c)(
        function (e) {
          return { isLoggedIn: e.user.userInfo.isLoggedIn };
        },
        { incrementAuthModalPromptCount: O.c },
        null,
        { pure: !1 }
      )(xe);
    },
    F2il: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        var n,
          r = 0;
        if (((e = String(e)), "string" !== typeof t || 1 !== t.length))
          throw new Error("Expected character");
        n = e.indexOf(t);
        for (; -1 !== n; ) r++, (n = e.indexOf(t, n + 1));
        return r;
      };
    },
    FNCK: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = this,
          n = t.options.bullet,
          r = t.visitors.listItem,
          o = e.children,
          i = o.length,
          a = -1,
          c = [];
        for (; ++a < i; ) c[a] = r.call(t, o[a], e, a, n);
        return c.join("\n");
      };
    },
    FWhU: function (e, t, n) {
      "use strict";
      var r = n("cpVT"),
        o = n("nKUr"),
        i = n("dhJC"),
        a = (n("q1tI"), n("/MKj")),
        c = n("tidx"),
        s = n("+bZ2"),
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
          a = e.show,
          l = e.hideModal,
          u = e.dismiss,
          p = e.isLoggedIn,
          f = Object(i.a)(e, [
            "promptCount",
            "promptCountThreshold",
            "dismissed",
            "show",
            "hideModal",
            "dismiss",
            "isLoggedIn",
          ]);
        return p || !(a || t >= n) || r
          ? null
          : Object(o.jsx)(s.a, {
              hideModal: function () {
                u(), l && l();
              },
              children: Object(o.jsx)(c.a, d({}, f)),
            });
      };
      (p.defaultProps = { promptCountThreshold: 5 }),
        (t.a = Object(a.c)(
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
    Fklr: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = (n("q1tI"), n("EQ2k")),
        i = function (e) {
          var t = e.size,
            n = e.color;
          return Object(r.jsx)("svg", {
            width: t,
            height: t,
            fill: n,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: Object(r.jsx)("path", {
              d: "M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z",
            }),
          });
        };
      (i.defaultProps = { color: o.a.green }), (t.a = i);
    },
    GPHa: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n("zC+P"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("sYmS"),
        c = n.n(a),
        s = n("qVdT"),
        l = n("6CgR");
      function u(e, t) {
        void 0 === t && (t = {});
        var n =
            "withApollo(" +
            (function (e) {
              return e.displayName || e.name || "Component";
            })(e) +
            ")",
          o = (function (o) {
            function a(e) {
              var t = o.call(this, e) || this;
              return (t.setWrappedInstance = t.setWrappedInstance.bind(t)), t;
            }
            return (
              Object(r.c)(a, o),
              (a.prototype.getWrappedInstance = function () {
                return Object(s.b)(t.withRef, 32), this.wrappedInstance;
              }),
              (a.prototype.setWrappedInstance = function (e) {
                this.wrappedInstance = e;
              }),
              (a.prototype.render = function () {
                var n = this;
                return i.a.createElement(l.a, null, function (o) {
                  var a = Object.assign({}, n.props, {
                    client: o,
                    ref: t.withRef ? n.setWrappedInstance : void 0,
                  });
                  return i.a.createElement(e, Object(r.a)({}, a));
                });
              }),
              (a.displayName = n),
              (a.WrappedComponent = e),
              a
            );
          })(i.a.Component);
        return c()(o, e, {});
      }
    },
    J1fo: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("q1tI");
      t.a = function (e) {
        var t = e.session,
          n = e.children;
        return (
          o.useEffect(function () {
            t && t.next();
          }, []),
          Object(r.jsx)(r.Fragment, { children: n })
        );
      };
    },
    JaEh: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("q1tI"),
        i = n("5mGw");
      t.a = function (e) {
        var t = e.session,
          n = e.count;
        return (
          o.useEffect(function () {
            t && t.next();
          }, []),
          Object(r.jsx)("div", { style: { height: i.a * (n || 1) } })
        );
      };
    },
    JznV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n("v2L8"),
        o = n("1gho"),
        i = n("QTzV"),
        a = n("07hc");
      function c(e, t) {
        switch ((void 0 === t && (t = {}), Object(r.c)(e).type)) {
          case r.a.Mutation:
            return Object(i.a)(e, t);
          case r.a.Subscription:
            return Object(a.a)(e, t);
          case r.a.Query:
          default:
            return Object(o.a)(e, t);
        }
      }
    },
    Kd28: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return "~~" + this.all(e).join("") + "~~";
      };
    },
    Kd6s: function (e, t, n) {
      "use strict";
      var r = n("RjOF");
      e.exports = function (e, t) {
        var n, o;
        (e = e.split("\n")), (n = e.length), (o = r(" ", 4 * t));
        for (; n--; ) 0 !== e[n].length && (e[n] = o + e[n]);
        return e.join("\n");
      };
    },
    Kmdt: function (e, t, n) {
      "use strict";
      var r = n("vgqm"),
        o = n("2oNz");
      e.exports = function (e) {
        var t = this,
          n = t.encode(e.url || "", e),
          a = t.enterLink(),
          c = t.encode(t.escape(e.url || "", e)),
          s = t.all(e).join("");
        if (
          (a(),
          null == e.title && i.test(n) && (c === s || c === "mailto:" + s))
        )
          return r(t.encode(e.url), !0);
        (n = r(n)),
          e.title && (n += " " + o(t.encode(t.escape(e.title, e), e)));
        return "[" + s + "](" + n + ")";
      };
      var i = /^[a-z][a-z+.-]+:\/?/i;
    },
    "L/0L": function (e, t, n) {
      "use strict";
      var r = n("ZONP"),
        o = n("Bjyw"),
        i = n("IPAr"),
        a = n("MQ5/"),
        c = n("DkIQ");
      e.exports = function (e) {
        return function (t, n, u) {
          var j,
            h,
            m,
            x,
            g,
            v,
            y = this,
            O = e.gfm,
            w = e.commonmark,
            k = e.pedantic,
            C = w ? [".", ")"] : ["."],
            S = u && u.children,
            P = S && S.indexOf(n),
            E = S && S[P - 1],
            R = S && S[P + 1],
            _ = t.length,
            I = a(e),
            N = -1,
            D = [],
            T = D;
          j = E
            ? f(E) && /\n\s*$/.test(E.value)
            : !u || "root" === u.type || "paragraph" === u.type;
          function U(e) {
            return -1 === I.indexOf(e) ? d[e] : s + e;
          }
          for (; ++N < _; ) {
            if (((v = !1), "\n" === (h = t.charAt(N)))) j = !0;
            else if (
              h === s ||
              "`" === h ||
              "*" === h ||
              "[" === h ||
              "<" === h ||
              ("&" === h && c(t.slice(N)) > 0) ||
              ("]" === h && y.inLink) ||
              (O && "~" === h && "~" === t.charAt(N + 1)) ||
              (O && "|" === h && (y.inTable || p(t, N))) ||
              ("_" === h &&
                N > 0 &&
                N < _ - 1 &&
                (k || !o(t.charAt(N - 1)) || !o(t.charAt(N + 1)))) ||
              (O && !y.inLink && ":" === h && b(D.join("")))
            )
              v = !0;
            else if (j)
              if (">" === h || "#" === h || -1 !== l.indexOf(h)) v = !0;
              else if (r(h)) {
                for (g = N + 1; g < _ && r(t.charAt(g)); ) g++;
                -1 !== C.indexOf(t.charAt(g)) &&
                  (((R = t.charAt(g + 1)) &&
                    " " !== R &&
                    "\t" !== R &&
                    "\n" !== R) ||
                    (D.push(t.slice(N, g)),
                    (N = g),
                    (h = t.charAt(N)),
                    (v = !0)));
              }
            j && !i(h) && (j = !1), D.push(v ? U(h) : h);
          }
          if (S && f(n)) {
            if (E && "shortcut" === E.referenceType) {
              for (N = -1, _ = T.length; ++N < _; )
                if (" " !== (h = T[N]) && "\t" !== h) {
                  ("(" !== h && ":" !== h) || (T[N] = U(h));
                  break;
                }
              f(R) && N === _ && "(" === R.value.charAt(0) && T.push(s);
            }
            O &&
              !y.inLink &&
              f(E) &&
              ":" === t.charAt(0) &&
              b(E.value.slice(-6)) &&
              (T[0] = U(":")),
              f(R) &&
                "&" === t.charAt(_ - 1) &&
                0 !== c("&" + R.value) &&
                (T[T.length - 1] = U("&")),
              O &&
                f(R) &&
                "~" === t.charAt(_ - 1) &&
                "~" === R.value.charAt(0) &&
                T.splice(T.length - 1, 0, s),
              (m = f(E) && o(E.value.slice(-1))),
              (x = f(R) && o(R.value.charAt(0))),
              1 === _
                ? "_" !== t || (!k && m && x) || T.unshift(s)
                : ("_" !== t.charAt(0) ||
                    (!k && m && o(t.charAt(1))) ||
                    T.unshift(s),
                  "_" !== t.charAt(_ - 1) ||
                    (!k && x && o(t.charAt(_ - 2))) ||
                    T.splice(T.length - 1, 0, s));
          }
          return T.join("");
        };
      };
      var s = "\\",
        l = ["*", "-", "+"],
        u = [":", "-", " ", "|"],
        d = {
          "<": "&lt;",
          ":": "&#x3A;",
          "&": "&amp;",
          "|": "&#x7C;",
          "~": "&#x7E;",
        };
      function p(e, t) {
        var n = e.lastIndexOf("\n", t),
          r = e.indexOf("\n", t);
        for (n = -1 === n ? -1 : n, r = -1 === r ? e.length : r; ++n < r; )
          if (-1 === u.indexOf(e.charAt(n))) return !1;
        return !0;
      }
      function f(e) {
        return e && "text" === e.type;
      }
      function b(e) {
        var t = e.slice(-6).toLowerCase();
        return (
          "mailto" === t || "https" === t.slice(-5) || "http" === t.slice(-4)
        );
      }
    },
    LByj: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        var n,
          r,
          o = 0,
          i = 0;
        if ("string" !== typeof t || 1 !== t.length)
          throw new Error("Expected character");
        (e = String(e)), (r = e.indexOf(t)), (n = r);
        for (; -1 !== r; )
          o++,
            r === n ? o > i && (i = o) : (o = 1),
            (n = r + 1),
            (r = e.indexOf(t, n));
        return i;
      };
    },
    LBzQ: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("cpVT"),
        i = n("dhJC"),
        a = n("H+61"),
        c = n("UlJF"),
        s = n("7LId"),
        l = n("VIvw"),
        u = n("iHvq"),
        d = n("MX0m"),
        p = n.n(d),
        f = n("q1tI"),
        b = n("Tvhg"),
        j = n.n(b);
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
      function m(e) {
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
      function x(e) {
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
        Object(s.a)(n, e);
        var t = x(n);
        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(c.a)(n, [
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
                  a = Object(i.a)(t, ["inputTriggerProps", "tall"]),
                  c = n
                    ? function (e) {
                        return Object(r.jsx)(
                          j.a,
                          m(m({}, n), {}, { children: e })
                        );
                      }
                    : function (e) {
                        return e;
                      };
                return Object(r.jsxs)(r.Fragment, {
                  children: [
                    c(
                      Object(r.jsx)(
                        "textarea",
                        m(
                          m(
                            {
                              ref: function (t) {
                                return (e.el = t);
                              },
                            },
                            a
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
    LLeT: function (e, t, n) {
      "use strict";
      var r = n("cpVT"),
        o = n("nKUr"),
        i = n("MX0m"),
        a = n.n(i);
      n("q1tI");
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.a = function (e) {
        return Object(o.jsxs)(
          "button",
          s(
            s({}, e),
            {},
            {
              className:
                "jsx-3173217138 " +
                ((e && null != e.className && e.className) || "text-button"),
              children: [
                e.children,
                Object(o.jsx)(a.a, {
                  id: "3173217138",
                  children: [
                    ".text-button.jsx-3173217138{-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:0;color:inherit;font-size:inherit;}",
                    ".text-button.jsx-3173217138:hover{-webkit-text-decoration:underline;text-decoration:underline;}",
                  ],
                }),
              ],
            }
          )
        );
      };
    },
    LOQN: function (e, t, n) {
      "use strict";
      var r = n("xvhg"),
        o = n("H+61"),
        i = n("UlJF"),
        a = (function () {
          function e() {
            Object(o.a)(this, e), (this._listeners = []);
          }
          return (
            Object(i.a)(e, [
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
                      i = t[2];
                    n.removeListener
                      ? n.removeListener(o, i)
                      : n.removeEventListener && n.removeEventListener(o, i);
                  });
                },
              },
            ]),
            e
          );
        })();
      t.a = a;
    },
    Lxj7: function (e, t, n) {
      "use strict";
      var r = n("vgqm"),
        o = n("2oNz");
      e.exports = function (e) {
        var t = this,
          n = r(t.encode(e.url || "", e)),
          i = t.enterLink(),
          a = t.encode(t.escape(e.alt || "", e));
        i(), e.title && (n += " " + o(t.encode(e.title, e)));
        return "![" + a + "](" + n + ")";
      };
    },
    MDTK: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/post",
        function () {
          return n("EhLH");
        },
      ]);
    },
    MZ5i: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return "[^" + e.identifier + "]";
      };
    },
    Mjqs: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return ut;
      });
      var r = n("nKUr"),
        o = n("xvhg"),
        i = n("q1tI"),
        a = n("g7Gn"),
        c = n("uMio"),
        s = n("MX0m"),
        l = n.n(s),
        u = n("fA4Q"),
        d = n("VOEV"),
        p = n("2lQ7"),
        f = n.n(p),
        b = n("dI/k"),
        j = n("hzRC"),
        h = n("+Jnw"),
        m = n("4reG"),
        x = n("gfZM"),
        g = n("vJKn"),
        v = n.n(g),
        y = n("rg98"),
        O = n("8v8i"),
        w = n("8/ze"),
        k = n("7EIp"),
        C = n("roZX"),
        S = n("icXl"),
        P = n("v0rv");
      function E(e) {
        var t = e.fs,
          n = e.language,
          o = e.activePath,
          i = e.onNodeClick;
        return Object(r.jsx)(C.a, {
          children: Object(r.jsxs)("div", {
            className: "jsx-48542386 filetree",
            children: [
              Object(r.jsx)("span", {
                className: "jsx-48542386 eyebrow",
                children: "Files",
              }),
              Object(r.jsx)(P.a, { height: 1 }),
              Object(r.jsx)(k.a, {
                siblings: [],
                readOnly: !0,
                uploadFiles: function () {},
                onClick: function () {
                  return null;
                },
                pendingFileType: null,
                onRename: function () {
                  return null;
                },
                onDelete: function () {
                  return null;
                },
                getNodeType: Object(y.a)(
                  v.a.mark(function e() {
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt("return", O.d.File);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                overwriteNode: function () {
                  return null;
                },
                setPendingFileType: function () {},
                activePath: o,
                onNodeClick: i,
                path: w.a,
                transformChildren: Object(S.a)(n),
                fs: t,
              }),
              Object(r.jsx)(l.a, {
                id: "48542386",
                children: [
                  ".filetree.jsx-48542386{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:var(--spacing-1);overflow:auto;height:100%;}",
                  ".eyebrow.jsx-48542386{font-size:var(--font-size-desktop-text-xsmall);text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:var(--font-weight-medium);color:var(--color-foreground-2);}",
                ],
              }),
            ],
          }),
        });
      }
      var R = n("Hxkj"),
        _ = n("XmHG"),
        I = n("4Njq"),
        N = n("cpVT"),
        D = n("Vvt1"),
        T = n.n(D),
        U = n("RB+8");
      function M(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(n), !0).forEach(function (t) {
                Object(N.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var A = (function () {
          var e = Object(y.a)(
            v.a.mark(function e() {
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        n
                          .e(65)
                          .then(n.t.bind(null, "KMe3", 7))
                          .then(function (e) {
                            return e.default;
                          })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        F = T()(A, {
          ssr: !1,
          loading: function () {
            return null;
          },
        });
      function q(e) {
        var t = e.contents,
          n = { scrollToContent: !0 };
        try {
          n = L(L({}, n), JSON.parse(t || "{}"));
        } catch (f) {}
        var a = Object(U.f)(),
          c = i.useRef(null),
          s = i.useState({ width: void 0, height: void 0 }),
          u = Object(o.a)(s, 2),
          d = u[0],
          p = u[1];
        return (
          i.useEffect(
            function () {
              if (c.current) {
                p({
                  width: c.current.getBoundingClientRect().width,
                  height: c.current.getBoundingClientRect().height,
                });
                var e = function () {
                  c.current &&
                    p({
                      width: c.current.getBoundingClientRect().width,
                      height: c.current.getBoundingClientRect().height,
                    });
                };
                return (
                  window.addEventListener("resize", e),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            },
            [c]
          ),
          Object(r.jsxs)("div", {
            ref: c,
            className: "jsx-866328784 excalidraw-wrapper",
            children: [
              Object(r.jsx)(F, {
                viewModeEnabled: !0,
                zenModeEnabled: !0,
                initialData: n,
                height: d.height,
                width: d.width,
                theme: "replitLight" === a ? "light" : "dark",
              }),
              Object(r.jsx)(l.a, {
                id: "866328784",
                children: [
                  ".excalidraw-wrapper.jsx-866328784{cursor:all-scroll;height:100%;width:100%;}",
                ],
              }),
            ],
          })
        );
      }
      function V(e) {
        var t = e.fs,
          n = e.language,
          a = e.activeFilePath,
          c = e.onActiveFilePathChange,
          s = i.useState(null),
          u = Object(o.a)(s, 2),
          d = u[0],
          p = u[1],
          g = i.useState(null),
          v = Object(o.a)(g, 2),
          y = v[0],
          k = v[1],
          C = Boolean(a && Object(b.j)(a)),
          S = Boolean(null === a || void 0 === a ? void 0 : a.endsWith(".md")),
          P = Object(b.h)(a || ""),
          N = a && !C && !S && !P,
          D = i.useState(a ? { path: a, type: O.d.File } : null),
          T = Object(o.a)(D, 2),
          U = T[0],
          M = T[1],
          L = i.useRef(c);
        i.useEffect(
          function () {
            (null === U || void 0 === U ? void 0 : U.type) === O.d.File &&
              L.current(U.path);
          },
          [U]
        ),
          i.useEffect(
            function () {
              L.current = c;
            },
            [c]
          ),
          i.useLayoutEffect(
            function () {
              L.current(a || void 0);
            },
            [a]
          ),
          i.useEffect(
            function () {
              if (!a) {
                var e = !1;
                t.readDir(w.a).then(function (t) {
                  if (!e) {
                    if (t.error) throw new Error(t.error);
                    var r = t.children
                        .filter(function (e) {
                          return e.type === O.d.File;
                        })
                        .map(function (e) {
                          return e.filename;
                        }),
                      o = Object(R.a)(r, n);
                    if (o)
                      return (
                        M({ path: o, type: O.d.File }),
                        function () {
                          e = !0;
                        }
                      );
                  }
                });
              }
            },
            [a, n, t]
          ),
          i.useEffect(
            function () {
              if (a) {
                var e = !1;
                return (
                  k(null),
                  t.readFile(a).then(function (t) {
                    e || k(t);
                  }),
                  function () {
                    e = !0;
                  }
                );
              }
              k(null);
            },
            [t, a]
          ),
          i.useEffect(
            function () {
              d &&
                (d.setOptions({
                  fontSize: 13,
                  scrollPastEnd: !1,
                  highlightActiveLine: !1,
                }),
                d.getRenderer().setScrollMargin(8, 8, 0, 0));
            },
            [d]
          ),
          i.useEffect(
            function () {
              d &&
                N &&
                y &&
                !y.error &&
                (d.setPath(a || ""), d.setValue(y.content.toString()));
            },
            [d, y, a, N]
          );
        var A = Object(_.g)({ fs: t }),
          F = i.useCallback(
            function (e) {
              var t = e.src;
              return Object(r.jsx)(_.a, {
                previewFilePath: a,
                src: t,
                getImageContent: A,
              });
            },
            [A, a]
          );
        return Object(r.jsxs)("div", {
          className: l.a.dynamic([["3361494758", [I.a]]]) + " file-viewer",
          children: [
            Object(r.jsx)("div", {
              className: l.a.dynamic([["3361494758", [I.a]]]) + " file-tree",
              children: Object(r.jsx)(E, {
                language: n,
                fs: t,
                activePath:
                  (null === U || void 0 === U ? void 0 : U.path) || null,
                onNodeClick: M,
              }),
            }),
            Object(r.jsx)("div", {
              className: l.a.dynamic([["3361494758", [I.a]]]) + " content",
              children: a
                ? Object(r.jsxs)(r.Fragment, {
                    children: [
                      C && y && !y.error
                        ? Object(r.jsx)(m.Viewer, {
                            content: x.a.from(y.content).toString("base64"),
                            mime: Object(b.d)(a),
                          })
                        : null,
                      C && !y
                        ? Object(r.jsx)("div", {
                            className:
                              l.a.dynamic([["3361494758", [I.a]]]) +
                              " file-loader",
                            children: Object(r.jsx)(j.a, {}),
                          })
                        : null,
                      S && y && !y.error
                        ? Object(r.jsx)("div", {
                            className:
                              l.a.dynamic([["3361494758", [I.a]]]) +
                              " markdown",
                            children: Object(r.jsx)(h.a, {
                              renderers: { image: F },
                              plugins: [f.a],
                              source: y.content.toString(),
                            }),
                          })
                        : null,
                      S && !y
                        ? Object(r.jsx)("div", {
                            className:
                              l.a.dynamic([["3361494758", [I.a]]]) +
                              " file-loader",
                            children: Object(r.jsx)(j.a, {}),
                          })
                        : null,
                      P && y && !y.error
                        ? Object(r.jsx)("div", {
                            className:
                              l.a.dynamic([["3361494758", [I.a]]]) + " draw",
                            children: Object(r.jsx)(q, {
                              contents: y.content.toString(),
                            }),
                          })
                        : null,
                      P && !y
                        ? Object(r.jsx)("div", {
                            className:
                              l.a.dynamic([["3361494758", [I.a]]]) +
                              " file-loader",
                            children: Object(r.jsx)(j.a, {}),
                          })
                        : null,
                      N
                        ? Object(r.jsx)(j.b, {
                            isLoading: N && !y,
                            initialOptions: { readOnly: !0, useWorker: !1 },
                            editorRef: p,
                          })
                        : null,
                    ],
                  })
                : Object(r.jsx)(j.a, {}),
            }),
            Object(r.jsx)(l.a, {
              id: "3361494758",
              dynamic: [I.a],
              children: [
                ".file-viewer.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;align:stretch;height:100%;width:100%;}",
                ".ace_editor{font-size:var(--font-size-desktop-text-small) !important;}",
                ".markdown.__jsx-style-dynamic-selector{word-break:break-word;max-width:840px;margin:0 auto;padding:var(--spacing-2);overflow-y:auto;position:relative;height:100%;}",
                ".draw.__jsx-style-dynamic-selector{height:100%;width:100%;}",
                ".file-tree.__jsx-style-dynamic-selector{background-color:var(--color-background-2);border-radius:var(--border-radius-2);overflow:auto;display:none;}",
                ".content.__jsx-style-dynamic-selector{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;width:100%;height:100%;overflow-y:auto;position:relative;}",
                ".file-loader.__jsx-style-dynamic-selector{width:100%;padding-top:var(--spacing-1);padding-left:var(--spacing-1);position:absolute;top:0;left:0;z-index:100;opacity:0;-webkit-animation:fadeIn-__jsx-style-dynamic-selector ease 0s forwards;animation:fadeIn-__jsx-style-dynamic-selector ease 0s forwards;-webkit-animation-delay:200ms;animation-delay:200ms;}",
                "@-webkit-keyframes fadeIn-__jsx-style-dynamic-selector{0%{opacity:0;}100%{opacity:1;}}",
                "@keyframes fadeIn-__jsx-style-dynamic-selector{0%{opacity:0;}100%{opacity:1;}}",
                "@media screen and (min-width:".concat(
                  I.a,
                  "px){.file-tree.__jsx-style-dynamic-selector{display:block;width:260px;}}"
                ),
              ],
            }),
          ],
        });
      }
      var z = n("YGlK"),
        K = n("xom/"),
        B = n("0HhJ"),
        H = n("JOwT"),
        W = n("UWUU"),
        Q = n("kx/0"),
        X = n("VwSA"),
        $ = n("nXXz");
      function G(e) {
        var t = e.path,
          n = null;
        if (H.a.includes(t)) n = Object(r.jsx)(B.a, {});
        else {
          var o = t.split(".").pop();
          n =
            o && o in X.a
              ? Object(r.jsx)(W.LanguageIcon, {
                  language: o,
                  fill: "var(--color-primary-1)",
                })
              : Object(r.jsx)(Q.a, {});
        }
        return Object(r.jsxs)("div", {
          className: "jsx-1947121232 node-icon",
          children: [
            n,
            Object(r.jsx)(l.a, {
              id: "1947121232",
              children: [
                ".node-icon.jsx-1947121232{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:var(--color-primary-1);}",
              ],
            }),
          ],
        });
      }
      function J(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (0 === e) return "0 bytes";
        var n = 1024,
          r = t < 0 ? 0 : t,
          o = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          i = Math.floor(Math.log(e) / Math.log(n));
        return parseFloat((e / Math.pow(n, i)).toFixed(r)) + " " + o[i];
      }
      function Y(e) {
        var t,
          n = e.activeFilePath,
          a = e.onActiveFilePathChange,
          c = e.fs,
          s = e.container,
          u = e.language,
          d = Boolean(n && Object(b.j)(n)),
          p = Boolean(null === n || void 0 === n ? void 0 : n.endsWith(".md")),
          f = n && !d && !p,
          j = i.useState({ bytes: 0, lines: 0 }),
          h = Object(o.a)(j, 2),
          m = h[0],
          x = h[1],
          g = i.useState(!1),
          k = Object(o.a)(g, 2),
          C = k[0],
          S = k[1],
          _ = i.useState(n ? { path: n, type: O.d.File } : null),
          N = Object(o.a)(_, 2),
          D = N[0],
          T = N[1],
          U = i.useRef(a);
        return (
          i.useEffect(
            function () {
              (null === D || void 0 === D ? void 0 : D.type) === O.d.File &&
                (U.current(D.path), S(!1));
            },
            [D]
          ),
          i.useEffect(
            function () {
              U.current = a;
            },
            [a]
          ),
          i.useLayoutEffect(
            function () {
              U.current(n || void 0);
            },
            [n]
          ),
          i.useEffect(
            function () {
              if (!n) {
                var e = !1;
                c.readDir(w.a).then(function (t) {
                  if (!e) {
                    if (t.error) throw new Error(t.error);
                    var n = t.children
                        .filter(function (e) {
                          return e.type === O.d.File;
                        })
                        .map(function (e) {
                          return e.filename;
                        }),
                      r = Object(R.a)(n, u);
                    if (r)
                      return (
                        T({ path: r, type: O.d.File }),
                        function () {
                          e = !0;
                        }
                      );
                  }
                });
              }
            },
            [n, u, c]
          ),
          i.useEffect(
            function () {
              var e = !1;
              function t() {
                return (t = Object(y.a)(
                  v.a.mark(function t() {
                    var r, i, a, c, l, u, d, p;
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (n && s) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              (t.next = 4),
                              Promise.all([
                                s.exec("wc", "-l", n),
                                s.exec("wc", "-c", n),
                              ])
                            );
                          case 4:
                            if (
                              ((a = t.sent),
                              (c = Object(o.a)(a, 2)),
                              (l = c[0]),
                              (u = c[1]),
                              !e)
                            ) {
                              t.next = 10;
                              break;
                            }
                            return t.abrupt("return");
                          case 10:
                            (d = u.error
                              ? 0
                              : null === u ||
                                void 0 === u ||
                                null === (r = u.output) ||
                                void 0 === r
                              ? void 0
                              : r.split(" ")[0]),
                              (p = l.error
                                ? 0
                                : null === l ||
                                  void 0 === l ||
                                  null === (i = l.output) ||
                                  void 0 === i
                                ? void 0
                                : i.split(" ")[0]),
                              x({ bytes: Number(d), lines: Number(p) });
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              return (
                (function () {
                  t.apply(this, arguments);
                })(),
                function () {
                  e = !0;
                }
              );
            },
            [n, s]
          ),
          Object(r.jsxs)("div", {
            className: l.a.dynamic([
              ["4087299427", [n ? "visible" : "hidden", I.a]],
            ]),
            children: [
              Object(r.jsxs)(z.a, {
                padding: 2,
                align: "center",
                positions: ["bottom"],
                isOpen: C,
                onClickOutside: function () {
                  S(!1);
                },
                children: [
                  Object(r.jsxs)("div", {
                    onClick: function () {
                      return S(!C);
                    },
                    className:
                      l.a.dynamic([
                        ["4087299427", [n ? "visible" : "hidden", I.a]],
                      ]) + " file-header",
                    children: [
                      Object(r.jsxs)("div", {
                        className:
                          l.a.dynamic([
                            ["4087299427", [n ? "visible" : "hidden", I.a]],
                          ]) + " file-path-wrapper",
                        children: [
                          Object(r.jsx)(G, { path: n || "/" }),
                          Object(r.jsx)(P.a, { width: "2px" }),
                          Object(r.jsx)("span", {
                            className:
                              l.a.dynamic([
                                ["4087299427", [n ? "visible" : "hidden", I.a]],
                              ]) + " file-path",
                            children: n || "Files",
                          }),
                          Object(r.jsx)(P.a, { width: "2px" }),
                          Object(r.jsx)($.a, {}),
                        ],
                      }),
                      m.bytes && m.lines
                        ? Object(r.jsx)("div", {
                            className:
                              l.a.dynamic([
                                ["4087299427", [n ? "visible" : "hidden", I.a]],
                              ]) + " file-metadata",
                            children: Object(r.jsxs)(K.a, {
                              align: "center",
                              spacing: "4px",
                              wrap: "nowrap",
                              children: [
                                d
                                  ? Object(r.jsx)("span", {
                                      className:
                                        l.a.dynamic([
                                          [
                                            "4087299427",
                                            [n ? "visible" : "hidden", I.a],
                                          ],
                                        ]) + " metadata-text",
                                      children: J(m.bytes),
                                    })
                                  : null,
                                f || p
                                  ? Object(r.jsx)("span", {
                                      className:
                                        l.a.dynamic([
                                          [
                                            "4087299427",
                                            [n ? "visible" : "hidden", I.a],
                                          ],
                                        ]) + " metadata-text",
                                      children:
                                        ((t = m.lines),
                                        "".concat(t > 0 ? t + 1 : t, " lines")),
                                    })
                                  : null,
                              ],
                            }),
                          })
                        : null,
                    ],
                  }),
                  Object(r.jsx)("div", {
                    className:
                      l.a.dynamic([
                        ["4087299427", [n ? "visible" : "hidden", I.a]],
                      ]) + " file-tree",
                    children: Object(r.jsx)(E, {
                      language: u,
                      fs: c,
                      activePath:
                        (null === D || void 0 === D ? void 0 : D.path) || null,
                      onNodeClick: T,
                    }),
                  }),
                ],
              }),
              Object(r.jsx)(l.a, {
                id: "4087299427",
                dynamic: [n ? "visible" : "hidden", I.a],
                children: [
                  ".file-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                  ".file-tree.__jsx-style-dynamic-selector{width:90vw;max-width:200px;height:calc(var(--content-height) - var(--spacing-2));max-height:calc(var(--content-max-height) - var(--spacing-2));}",
                  ".file-metadata.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-overflow:ellipsis;-webkit-flex:1;-ms-flex:1;flex:1;padding-left:var(--spacing-half);}",
                  ".metadata-text.__jsx-style-dynamic-selector{font-size:var(--font-size-desktop-text-xsmall);font-weight:var(--font-weight-regular);color:var(--color-foreground-2);white-space:nowrap;}",
                  ".metadata-text.date.__jsx-style-dynamic-selector{font-weight:var(--font-weight-medium);}",
                  ".file-path-wrapper.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--color-primary-1);visibility:".concat(
                    n ? "visible" : "hidden",
                    ";}"
                  ),
                  ".file-path.__jsx-style-dynamic-selector{position:relative;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:var(--font-weight-medium);color:var(--color-primary-1);font-size:var(--font-size-desktop-text-small);}",
                  "@media screen and (min-width:".concat(
                    I.a,
                    "px){.file-header.__jsx-style-dynamic-selector{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.file-path.__jsx-style-dynamic-selector{max-width:140px;}}"
                  ),
                ],
              }),
            ],
          })
        );
      }
      var Z,
        ee,
        te,
        ne = n("TSYQ"),
        re = n.n(ne),
        oe = n("zgDP"),
        ie = n("tZOq"),
        ae = n("up5I"),
        ce = n("R84t"),
        se = n("V4w5"),
        le = n("TxNz"),
        ue = n("IdsG"),
        de = n("+tR8");
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
                Object(N.a)(e, t, n[t]);
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
      function be(e) {
        var t = e.withTransparency;
        return Object(r.jsxs)("button", {
          className:
            "jsx-1481163178 " + (re()({ "with-transparency": t }) || ""),
          children: [
            Object(r.jsx)(ce.a, { filled: !0 }),
            Object(r.jsx)(l.a, {
              id: "1481163178",
              children: [
                "button.jsx-1481163178{--size:110px;width:var(--size);height:var(--size);color:white;background-color:var(--color-positive-1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;border:0 none;box-shadow:var(--shadow-1);cursor:pointer;-webkit-transition:-webkit-transform 100ms ease-in-out;-webkit-transition:transform 100ms ease-in-out;transition:transform 100ms ease-in-out;}",
                "button.with-transparency.jsx-1481163178{background-color:var(--color-positive-transparent-1);}",
                "button.jsx-1481163178:hover{background-color:var(--color-positive-2);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",
                "button.jsx-1481163178:hover svg{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",
                "button.jsx-1481163178:active{background-color:var(--color-positive-3);-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}",
                "button.jsx-1481163178:focus{outline:none;}",
                "button.jsx-1481163178 svg{-webkit-transition:-webkit-transform 100ms ease-out;-webkit-transition:transform 100ms ease-out;transition:transform 100ms ease-out;height:auto;width:65%;-webkit-filter:drop-shadow(var(--shadow-1));filter:drop-shadow(var(--shadow-1));}",
              ],
            }),
          ],
        });
      }
      function je(e) {
        var t = e.onClick,
          n = e.isLoggedIn,
          a = e.repl,
          c = i.useRef(null),
          s = i.useState(!1),
          u = Object(o.a)(s, 2),
          d = u[0],
          p = u[1],
          f = i.useState(null),
          b = Object(o.a)(f, 2),
          j = b[0],
          h = b[1],
          m = i.useState(a.imageUrl),
          x = Object(o.a)(m, 2),
          g = x[0],
          v = x[1],
          y = Object(ie.re)({ variables: { replId: a.id } }),
          O = Object(o.a)(y, 1)[0],
          w = Object(ie.se)({
            onCompleted: function (e) {
              h(null), v(e.updateRepl.repl.imageUrl);
            },
          }),
          k = Object(o.a)(w, 1)[0],
          C = Object(le.a)({
            onUpload: function (e) {
              var t = e.url;
              k({
                variables: { input: { id: a.id, imageUrl: t } },
                optimisticResponse: {
                  updateRepl: {
                    __typename: "UpdateReplPayload",
                    repl: fe(fe({}, a), {}, { imageUrl: t }),
                  },
                },
              });
            },
            onUploadPreview: function (e) {
              var t = e.dataUrl;
              v(t);
            },
            onError: function (e) {
              h(e.message);
            },
          }),
          S = a.currentUserPermissions.changeImageUrl;
        return Object(r.jsxs)("div", {
          onDrop: S
            ? function (e) {
                var t, n;
                e.preventDefault();
                var r =
                  null === (t = e.dataTransfer) ||
                  void 0 === t ||
                  null === (n = t.files) ||
                  void 0 === n
                    ? void 0
                    : n[0];
                r &&
                  (r.type.startsWith("image/")
                    ? (h(null), C.uploadImage(r))
                    : h("Expected an image file"));
              }
            : void 0,
          onDragOver: S
            ? function (e) {
                e.preventDefault(), p(!0);
              }
            : void 0,
          onDragLeave: S
            ? function () {
                return p(!1);
              }
            : void 0,
          className:
            "jsx-2239557896 " +
            (re()("output-overlay", { "is-dragging-over": d }) || ""),
          children: [
            g
              ? Object(r.jsxs)("div", {
                  className: "jsx-2239557896 image-wrap",
                  children: [
                    Object(r.jsx)("img", {
                      src: g,
                      alt: a.title,
                      className: "jsx-2239557896",
                    }),
                    Object(r.jsx)("div", {
                      className: "jsx-2239557896 image-overlay",
                    }),
                  ],
                })
              : null,
            g || !S
              ? Object(r.jsx)("div", {
                  onClick: function () {
                    n && O(),
                      Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                        context: "replView",
                        overlay: !0,
                      }),
                      t();
                  },
                  className: "jsx-2239557896 cta-content-wrap",
                  children: Object(r.jsxs)(K.b, {
                    spacing: 2,
                    align: "center",
                    children: [
                      Object(r.jsx)(be, { withTransparency: Boolean(g) }),
                      g
                        ? null
                        : Object(r.jsx)(ue.a, {
                            foreground: 3,
                            children: "This repl has no cover image",
                          }),
                    ],
                  }),
                })
              : null,
            !g && S
              ? Object(r.jsx)("div", {
                  className: "jsx-2239557896 cta-content-wrap",
                  children: Object(r.jsxs)(K.b, {
                    spacing: 2,
                    align: "center",
                    children: [
                      Object(r.jsx)("span", {
                        className: "jsx-2239557896 upload-icon",
                        children: Object(r.jsx)(se.a, {}),
                      }),
                      Object(r.jsx)(ue.a, {
                        fontWeight: "bold",
                        foreground: 2,
                        children: "Drag and drop a cover image",
                      }),
                      Object(r.jsx)(ae.a, {
                        onClick: function () {
                          c.current && c.current.click();
                        },
                        filled: !1,
                        border: !1,
                        color: "primary",
                        children: "Or select a file",
                      }),
                    ],
                  }),
                })
              : null,
            g && S
              ? Object(r.jsxs)("div", {
                  className: "jsx-2239557896 image-controls",
                  children: [
                    Object(r.jsxs)(K.a, {
                      spacing: 1,
                      justify: "end",
                      children: [
                        Object(r.jsx)(ae.a, {
                          onClick: function (e) {
                            e.stopPropagation(), c.current && c.current.click();
                          },
                          children: g ? "Change image" : "Add an image",
                        }),
                        g
                          ? Object(r.jsx)(ae.a, {
                              Icon: de.a,
                              color: "negative",
                              onClick: function (e) {
                                e.stopPropagation(),
                                  k({
                                    variables: {
                                      input: { id: a.id, imageUrl: null },
                                    },
                                  });
                              },
                            })
                          : null,
                      ],
                    }),
                    j
                      ? Object(r.jsx)("div", {
                          className: "jsx-2239557896 error",
                          children: j,
                        })
                      : null,
                  ],
                })
              : null,
            S
              ? Object(r.jsx)("input", {
                  ref: c,
                  accept: "image/*",
                  type: "file",
                  onChange: function (e) {
                    var t = e.target,
                      n = t.validity,
                      r = t.files;
                    n.valid &&
                      null !== r &&
                      void 0 !== r &&
                      r.length &&
                      (h(null), C.uploadImage(r[0]));
                  },
                  className: "jsx-2239557896",
                })
              : null,
            Object(r.jsx)(l.a, {
              id: "2239557896",
              children: [
                ".output-overlay.jsx-2239557896{background-color:var(--color-background-1);}",
                ".output-overlay.jsx-2239557896:hover .image-controls.jsx-2239557896{opacity:1;}",
                ".image-controls.jsx-2239557896{opacity:0;}",
                ".cta-content-wrap.jsx-2239557896,.output-overlay.jsx-2239557896,.image-wrap.jsx-2239557896,.image-overlay.jsx-2239557896,img.jsx-2239557896{position:absolute;top:0;left:0;width:100%;height:100%;}",
                "img.jsx-2239557896{object-fit:cover;}",
                ".image-overlay.jsx-2239557896{background:radial-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6));background-repeat:no-repeat;}",
                ".image-controls.jsx-2239557896{position:absolute;right:var(--spacing-2);top:var(--spacing-2);}",
                ".cta-content-wrap.jsx-2239557896{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                ".is-dragging-over.jsx-2239557896 .upload-icon.jsx-2239557896{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);color:var(--color-primary-1);}",
                ".upload-icon.jsx-2239557896{color:var(--color-foreground-2);-webkit-transition:-webkit-transform 100ms ease-out;-webkit-transition:transform 100ms ease-out;transition:transform 100ms ease-out;}",
                ".upload-icon.jsx-2239557896 svg{height:auto;width:48px;}",
                "input.jsx-2239557896{width:0.1px;height:0.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1;}",
                ".error.jsx-2239557896{padding-top:var(--spacing-2);text-align:right;font-size:var(--font-size-desktop-text-small);color:var(--color-negative-1);}",
              ],
            }),
          ],
        });
      }
      !(function (e) {
        (e[(e.Code = 0)] = "Code"), (e[(e.Output = 1)] = "Output");
      })(Z || (Z = {})),
        (function (e) {
          (e.Running = "Running"), (e.Ended = "Ended"), (e.Stopped = "Stopped");
        })(ee || (ee = {})),
        (function (e) {
          (e.Webview = "Webview"),
            (e.Terminal = "Terminal"),
            (e.ReplboxWebview = "ReplboxWebview"),
            (e.Vnc = "Vnc"),
            (e.ReplboxConsole = "ReplboxConsole"),
            (e.GovalConsole = "GovalConsole");
        })(te || (te = {}));
      var he = n("YFqc"),
        me = n.n(he),
        xe = n("pDQI");
      function ge(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                Object(N.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ye(e) {
        return Object(r.jsx)(
          xe.a,
          ve(
            ve({ strokeWidth: 2 }, e),
            {},
            {
              children: Object(r.jsx)("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "4",
              }),
            }
          )
        );
      }
      var Oe = n("rg44"),
        we = n("+sxT"),
        ke = n("Wjzo"),
        Ce = n("T0nv"),
        Se = n("dhJC"),
        Pe = n("tidx"),
        Ee = n("8Vt8"),
        Re = n("FuyV"),
        _e = n("V6K1"),
        Ie = n("VoYB"),
        Ne = n("ceSv");
      function De(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                Object(N.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ue(e) {
        var t,
          n,
          o,
          i = e.repl,
          a = e.onClick;
        return i.owner
          ? (null === (t = i.currentUserEditRequest) || void 0 === t
              ? void 0
              : t.status) === ie.k.Denied
            ? Object(r.jsx)("div", {
                role: "tooltip",
                "data-microtip-position": "left",
                "aria-label": "Your request has been denied",
                children: Object(r.jsx)(ae.a, {
                  Icon: ke.a,
                  disabled: !0,
                  children: "Request to edit",
                }),
              })
            : (null === (n = i.currentUserEditRequest) || void 0 === n
                ? void 0
                : n.status) === ie.k.Pending
            ? Object(r.jsx)("div", {
                role: "tooltip",
                "data-microtip-position": "left",
                "aria-label": "You have requested edit access",
                children: Object(r.jsx)(ae.a, {
                  Icon: Re.a,
                  disabled: !0,
                  children: "Requested",
                }),
              })
            : (null === (o = i.currentUserEditRequest) || void 0 === o
                ? void 0
                : o.status) === ie.k.Accepted
            ? null
            : Object(r.jsx)(ae.a, {
                color: "primary",
                onClick: a,
                children: "Send edit request",
              })
          : Object(r.jsx)("div", {
              role: "tooltip",
              "data-microtip-position": "left",
              "aria-label": "This repl has no owner",
              children: Object(r.jsx)(ae.a, {
                Icon: ke.a,
                disabled: !0,
                children: "Request to edit",
              }),
            });
      }
      function Me(e) {
        var t = e.repl,
          n = e.ownerUsername,
          o = e.onConfirm;
        return Object(r.jsxs)("div", {
          className: "jsx-4077445032 wrap",
          children: [
            Object(r.jsxs)(K.b, {
              spacing: 3,
              align: "stretch",
              children: [
                Object(r.jsxs)(K.b, {
                  spacing: 1,
                  align: "stretch",
                  children: [
                    Object(r.jsx)(_e.a, {
                      level: 3,
                      children: "Edit in workspace",
                    }),
                    t.owner
                      ? Object(r.jsxs)(ue.a, {
                          children: [
                            "You are about to send ",
                            Object(r.jsx)("b", {
                              className: "jsx-4077445032",
                              children: n,
                            }),
                            " a notification for you to edit ",
                            Object(r.jsx)("b", {
                              className: "jsx-4077445032",
                              children: t.title,
                            }),
                            ".",
                            Object(r.jsx)("br", {
                              className: "jsx-4077445032",
                            }),
                            Object(r.jsx)("br", {
                              className: "jsx-4077445032",
                            }),
                            "If they approve your request, you\u2019ll be able to edit their repl using multiplayer.",
                            Object(r.jsx)("br", {
                              className: "jsx-4077445032",
                            }),
                            Object(r.jsx)("br", {
                              className: "jsx-4077445032",
                            }),
                            "Want your own copy? Hit fork, and start coding right away!",
                          ],
                        })
                      : Object(r.jsx)(ue.a, {
                          children:
                            "Hit fork to get your own copy and start coding!",
                        }),
                  ],
                }),
                Object(r.jsxs)(K.a, {
                  align: "center",
                  justify: "end",
                  spacing: 1,
                  children: [
                    Object(r.jsx)("div", {
                      className: "jsx-4077445032",
                      children: Object(r.jsx)(Ne.a, {
                        replId: t.id,
                        isLoggedIn: !0,
                        trackingContext:
                          "ReplViewEditInWorkspaceConfirmationDialog",
                      }),
                    }),
                    Object(r.jsx)("div", {
                      className: "jsx-4077445032",
                      children: Object(r.jsx)(Ue, { repl: t, onClick: o }),
                    }),
                  ],
                }),
              ],
            }),
            Object(r.jsx)(l.a, {
              id: "4077445032",
              children: [
                ".wrap.jsx-4077445032{background-color:var(--color-background-1);border-radius:var(--border-radius-1);color:var(--color-foreground-1);padding:var(--spacing-4) var(--spacing-4);}",
              ],
            }),
          ],
        });
      }
      function Le(e) {
        var t,
          n = e.repl,
          a = e.isLoggedIn,
          c = Object(Se.a)(e, ["repl", "isLoggedIn"]),
          s = Object(Ie.a)(),
          l = s.showError,
          u = s.showConfirm,
          d = i.useState(!1),
          p = Object(o.a)(d, 2),
          f = p[0],
          b = p[1],
          j = Object(ie.pe)({
            variables: { replId: n.id },
            onCompleted: function (e) {
              "UserError" !== e.createEditRequest.__typename
                ? u("Edit access requested")
                : l(e.createEditRequest.message);
            },
            onError: function (e) {
              return l(e.message);
            },
          }),
          h = Object(o.a)(j, 2),
          m = h[0],
          x = h[1].loading;
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(
              ae.a,
              Te(
                Te({}, c),
                {},
                {
                  Icon: ke.a,
                  disabled: x,
                  color: "primary",
                  onClick: function () {
                    x ||
                      (Object(oe.track)(oe.events.EDIT_REQUEST_BUTTON_CLICKED, {
                        replId: n.id,
                      }),
                      b(!0));
                  },
                  children: x ? "Requesting..." : "Edit in workspace",
                }
              )
            ),
            Object(r.jsx)(Ee.a, {
              width: a ? "small" : void 0,
              isOpen: f,
              onRequestClose: function () {
                b(!1);
              },
              children: a
                ? Object(r.jsx)(Me, {
                    ownerUsername:
                      null === (t = n.owner) || void 0 === t
                        ? void 0
                        : t.username,
                    repl: n,
                    onConfirm: function () {
                      b(!1), m();
                    },
                    onClose: function () {
                      return b(!1);
                    },
                  })
                : Object(r.jsx)(Pe.a, {
                    title: "Sign up or log in to fork this repl",
                    onSuccess: function (e) {
                      e && m();
                    },
                  }),
            }),
          ],
        });
      }
      function Ae(e, t) {
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
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                Object(N.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ae(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function qe(e) {
        var t,
          n = e.viewMode,
          o = e.onViewModeChange,
          i = e.repl,
          a = e.isLoggedIn,
          c = e.children,
          s = 180;
        return Object(r.jsxs)("header", {
          className:
            l.a.dynamic([["1453417841", [I.a, s, 90, 90]]]) +
            " " +
            (re()({ "is-code": n === Z.Code, "is-output": n === Z.Output }) ||
              ""),
          children: [
            Object(r.jsx)("div", {
              className:
                l.a.dynamic([["1453417841", [I.a, s, 90, 90]]]) +
                " view-mode-control",
              children: Object(r.jsx)("div", {
                className:
                  l.a.dynamic([["1453417841", [I.a, s, 90, 90]]]) +
                  " segmented-control",
                children: Object(r.jsx)(we.a, {
                  options: ["Output", "Code"],
                  selectedOption: n === Z.Output ? 0 : 1,
                  onChange: function (e) {
                    Object(oe.track)(
                      oe.events.SOCIAL_VIEW_VIEW_CHANGED_VIEW_TOGGLE,
                      { view: 0 === e ? "output" : "code" }
                    ),
                      o(0 === e ? Z.Output : Z.Code);
                  },
                  width: "100%",
                }),
              }),
            }),
            Object(r.jsx)("div", {
              className:
                l.a.dynamic([["1453417841", [I.a, s, 90, 90]]]) +
                " children-control",
              children: c,
            }),
            Object(r.jsxs)("div", {
              className:
                l.a.dynamic([["1453417841", [I.a, s, 90, 90]]]) +
                " edit-control",
              children: [
                i.currentUserPermissions.containerWrite
                  ? Object(r.jsx)(
                      me.a,
                      Fe(
                        Fe({}, Object(Ce.b)(i)),
                        {},
                        {
                          children: Object(r.jsx)("a", {
                            className: l.a.dynamic([
                              ["1453417841", [I.a, s, 90, 90]],
                            ]),
                            children: Object(r.jsx)(ae.a, {
                              Icon: ke.a,
                              color: "primary",
                              filled: !1,
                              border: !1,
                              children: "Edit in workspace",
                            }),
                          }),
                        }
                      )
                    )
                  : null,
                "User" !==
                  (null === (t = i.owner) || void 0 === t
                    ? void 0
                    : t.__typename) || i.currentUserPermissions.containerWrite
                  ? null
                  : Object(r.jsx)(Le, {
                      isLoggedIn: a,
                      repl: i,
                      iconOnRight: !0,
                      Icon: ke.a,
                      color: "primary",
                      filled: !1,
                      border: !1,
                    }),
              ],
            }),
            Object(r.jsx)(l.a, {
              id: "1453417841",
              dynamic: [I.a, s, 90, 90],
              children: [
                "header.__jsx-style-dynamic-selector{display:grid;grid-template-areas: 'view-mode-control view-mode-control' 'children-control  edit-control';grid-template-rows:auto auto;grid-template-columns:auto auto;border-bottom:1px solid var(--color-border);}",
                ".view-mode-control.__jsx-style-dynamic-selector{padding:var(--spacing-half);grid-area:view-mode-control;}",
                ".children-control.__jsx-style-dynamic-selector,.edit-control.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--spacing-half);}",
                ".children-control.__jsx-style-dynamic-selector{grid-area:children-control;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",
                ".children-control > *{max-height:32px !important;}",
                ".edit-control.__jsx-style-dynamic-selector{grid-area:edit-control;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",
                "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none !important;text-decoration:none !important;}",
                "@media screen and (min-width:"
                  .concat(
                    I.a,
                    "px){header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}.view-mode-control.__jsx-style-dynamic-selector,.edit-control.__jsx-style-dynamic-selector{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--spacing-half);}.children-control.__jsx-style-dynamic-selector{width:"
                  )
                  .concat(
                    s,
                    "px;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:0;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);height:100%;}header.is-code.__jsx-style-dynamic-selector .children-control.__jsx-style-dynamic-selector{display:none;}header.is-output.__jsx-style-dynamic-selector .edit-control.__jsx-style-dynamic-selector{padding-left:"
                  )
                  .concat(
                    90,
                    "px;}header.is-output.__jsx-style-dynamic-selector .view-mode-control.__jsx-style-dynamic-selector{padding-right:"
                  )
                  .concat(
                    90,
                    "px;}.segmented-control.__jsx-style-dynamic-selector{width:180px;}}"
                  ),
              ],
            }),
          ],
        });
      }
      function Ve(e) {
        var t = e.outputState,
          n = e.onClick;
        return t === ee.Stopped
          ? Object(r.jsxs)("div", {
              onClick: function () {
                Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                  context: "replView",
                  header: !0,
                  action: "initialRun",
                }),
                  n();
              },
              className: l.a.dynamic([["3176571818", [I.a]]]) + " not-run",
              children: [
                Object(r.jsxs)(K.a, {
                  spacing: "4px",
                  align: "center",
                  children: [
                    Object(r.jsx)(ce.a, { filled: !0 }),
                    Object(r.jsx)(ue.a, {
                      size: "small",
                      foreground: 3,
                      children: "Not run yet",
                    }),
                  ],
                }),
                Object(r.jsx)(l.a, {
                  id: "3176571818",
                  dynamic: [I.a],
                  children: [
                    ".not-run.__jsx-style-dynamic-selector{cursor:pointer;color:var(--color-foreground-3);}",
                    "@media screen and (min-width:".concat(
                      I.a,
                      "px){.not-run.__jsx-style-dynamic-selector{margin-left:-8px;}}"
                    ),
                  ],
                }),
              ],
            })
          : Object(r.jsxs)("button", {
              onClick: function () {
                Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                  context: "replView",
                  header: !0,
                  action: t === ee.Running ? "stop" : "run",
                }),
                  n();
              },
              className:
                "jsx-2045167502 " +
                (re()({ run: t === ee.Ended, stop: t === ee.Running }) || ""),
              children: [
                Object(r.jsx)(K.a, {
                  spacing: "4px",
                  align: "center",
                  children:
                    t === ee.Running
                      ? Object(r.jsxs)(r.Fragment, {
                          children: [
                            Object(r.jsx)("span", {
                              className: "jsx-2045167502",
                              children: "Stop",
                            }),
                            Object(r.jsx)(ye, { filled: !0 }),
                          ],
                        })
                      : Object(r.jsxs)(r.Fragment, {
                          children: [
                            Object(r.jsx)("span", {
                              className: "jsx-2045167502",
                              children: "Run",
                            }),
                            Object(r.jsx)(ce.a, { filled: !0 }),
                          ],
                        }),
                }),
                Object(r.jsx)(l.a, {
                  id: "2045167502",
                  children: [
                    "button.jsx-2045167502{cursor:pointer;padding:var(--spacing-1);border-radius:var(--border-radius-2);background-color:transparent;border:none;font-size:var(--font-size-desktop-text-small);font-weight:var(--font-weight-medium);-webkit-transition:color 0.1s,background-color 0.1s;transition:color 0.1s,background-color 0.1s;}",
                    "button.jsx-2045167502:focus,button.jsx-2045167502:active{outline:none;}",
                    "button.run.jsx-2045167502{background-color:var(--color-positive-transparent-3);color:var(--color-positive-1);}",
                    "button.run.jsx-2045167502:hover{background-color:var(--color-positive-1);color:var(--color-white);}",
                    "button.stop.jsx-2045167502{background-color:var(--color-control-3);color:var(--color-foreground-2);}",
                    "button.stop.jsx-2045167502:hover{background-color:var(--color-control-2);color:var(--color-foreground-1);}",
                  ],
                }),
              ],
            });
      }
      function ze(e) {
        var t = e.url,
          n = e.outputState,
          o = e.setOutputState;
        return Object(r.jsxs)("div", {
          className:
            l.a.dynamic([
              [
                "1099207435",
                [
                  n === ee.Running
                    ? "var(--color-control-2)"
                    : "var(--color-positive-transparent-2)",
                  n === ee.Running
                    ? "var(--color-foreground-2)"
                    : "var(--color-positive-1)",
                  n === ee.Running
                    ? "var(--color-control-1)"
                    : "var(--color-positive-1)",
                  n === ee.Running
                    ? "var(--color-foreground-1)"
                    : "var(--color-white)",
                  I.a,
                ],
              ],
            ]) + " output-control",
          children: [
            Object(r.jsx)("div", {
              className:
                l.a.dynamic([
                  [
                    "1099207435",
                    [
                      n === ee.Running
                        ? "var(--color-control-2)"
                        : "var(--color-positive-transparent-2)",
                      n === ee.Running
                        ? "var(--color-foreground-2)"
                        : "var(--color-positive-1)",
                      n === ee.Running
                        ? "var(--color-control-1)"
                        : "var(--color-positive-1)",
                      n === ee.Running
                        ? "var(--color-foreground-1)"
                        : "var(--color-white)",
                      I.a,
                    ],
                  ],
                ]) + " run-button-wrap",
              children: Object(r.jsx)("button", {
                onClick: function () {
                  if (n === ee.Stopped)
                    return (
                      o(ee.Running),
                      void Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                        context: "replView",
                        type: "webOutput",
                      })
                    );
                  n === ee.Running && o(ee.Stopped);
                },
                className:
                  l.a.dynamic([
                    [
                      "1099207435",
                      [
                        n === ee.Running
                          ? "var(--color-control-2)"
                          : "var(--color-positive-transparent-2)",
                        n === ee.Running
                          ? "var(--color-foreground-2)"
                          : "var(--color-positive-1)",
                        n === ee.Running
                          ? "var(--color-control-1)"
                          : "var(--color-positive-1)",
                        n === ee.Running
                          ? "var(--color-foreground-1)"
                          : "var(--color-white)",
                        I.a,
                      ],
                    ],
                  ]) + " run-button",
                children:
                  n === ee.Running
                    ? Object(r.jsx)(ye, { filled: !0 })
                    : Object(r.jsx)(ce.a, { filled: !0 }),
              }),
            }),
            Object(r.jsx)("span", {
              className:
                l.a.dynamic([
                  [
                    "1099207435",
                    [
                      n === ee.Running
                        ? "var(--color-control-2)"
                        : "var(--color-positive-transparent-2)",
                      n === ee.Running
                        ? "var(--color-foreground-2)"
                        : "var(--color-positive-1)",
                      n === ee.Running
                        ? "var(--color-control-1)"
                        : "var(--color-positive-1)",
                      n === ee.Running
                        ? "var(--color-foreground-1)"
                        : "var(--color-white)",
                      I.a,
                    ],
                  ],
                ]) + " repl-url-text",
              children: t.replace(/^https:\/\//, ""),
            }),
            Object(r.jsx)("div", {
              className: l.a.dynamic([
                [
                  "1099207435",
                  [
                    n === ee.Running
                      ? "var(--color-control-2)"
                      : "var(--color-positive-transparent-2)",
                    n === ee.Running
                      ? "var(--color-foreground-2)"
                      : "var(--color-positive-1)",
                    n === ee.Running
                      ? "var(--color-control-1)"
                      : "var(--color-positive-1)",
                    n === ee.Running
                      ? "var(--color-foreground-1)"
                      : "var(--color-white)",
                    I.a,
                  ],
                ],
              ]),
              children: Object(r.jsx)("a", {
                href: t,
                target: "_blank",
                className:
                  l.a.dynamic([
                    [
                      "1099207435",
                      [
                        n === ee.Running
                          ? "var(--color-control-2)"
                          : "var(--color-positive-transparent-2)",
                        n === ee.Running
                          ? "var(--color-foreground-2)"
                          : "var(--color-positive-1)",
                        n === ee.Running
                          ? "var(--color-control-1)"
                          : "var(--color-positive-1)",
                        n === ee.Running
                          ? "var(--color-foreground-1)"
                          : "var(--color-white)",
                        I.a,
                      ],
                    ],
                  ]) + " repl-link",
                children: Object(r.jsx)(Oe.a, {}),
              }),
            }),
            Object(r.jsx)(l.a, {
              id: "1099207435",
              dynamic: [
                n === ee.Running
                  ? "var(--color-control-2)"
                  : "var(--color-positive-transparent-2)",
                n === ee.Running
                  ? "var(--color-foreground-2)"
                  : "var(--color-positive-1)",
                n === ee.Running
                  ? "var(--color-control-1)"
                  : "var(--color-positive-1)",
                n === ee.Running
                  ? "var(--color-foreground-1)"
                  : "var(--color-white)",
                I.a,
              ],
              children: [
                ".output-control.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}",
                ".run-button-wrap.__jsx-style-dynamic-selector{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}",
                ".run-button.__jsx-style-dynamic-selector{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:var(--spacing-half);border-radius:var(--border-radius-2);background-color:"
                  .concat(
                    n === ee.Running
                      ? "var(--color-control-2)"
                      : "var(--color-positive-transparent-2)",
                    ";border:none;-webkit-transition:color 0.1s,background-color 0.1s;transition:color 0.1s,background-color 0.1s;color:"
                  )
                  .concat(
                    n === ee.Running
                      ? "var(--color-foreground-2)"
                      : "var(--color-positive-1)",
                    ";}"
                  ),
                ".run-button.__jsx-style-dynamic-selector:hover{background-color:var(--color-positive-1);background-color:"
                  .concat(
                    n === ee.Running
                      ? "var(--color-control-1)"
                      : "var(--color-positive-1)",
                    ";color:"
                  )
                  .concat(
                    n === ee.Running
                      ? "var(--color-foreground-1)"
                      : "var(--color-white)",
                    ";}"
                  ),
                ".run-button.__jsx-style-dynamic-selector:focus,.run-button.__jsx-style-dynamic-selector:active{outline:none;}",
                ".repl-url-text.__jsx-style-dynamic-selector{max-width:140px;margin:0 var(--spacing-1);-webkit-flex:1 2 auto;-ms-flex:1 2 auto;flex:1 2 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size-desktop-text-small);color:var(--color-foreground-2);}",
                ".repl-link.__jsx-style-dynamic-selector{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:var(--color-foreground-3);-webkit-transition:0.2s color;transition:0.2s color;}",
                ".repl-link.__jsx-style-dynamic-selector:hover{color:var(--color-foreground-2);}",
                "@media screen and (min-width:".concat(
                  I.a,
                  "px){.repl-url-text.__jsx-style-dynamic-selector{max-width:180px;}}"
                ),
              ],
            }),
          ],
        });
      }
      function Ke(e) {
        var t = e.children;
        return Object(r.jsxs)("div", {
          className: "jsx-1249681375",
          children: [
            t,
            Object(r.jsx)(l.a, {
              id: "1249681375",
              children: [
                "div.jsx-1249681375{background-color:var(--color-background-1);border:1px solid var(--color-border);box-shadow:0px 8px 12px rgba(0,0,0,0.075);border-radius:var(--border-radius-1);overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",
              ],
            }),
          ],
        });
      }
      function Be(e) {
        var t = e.children;
        return Object(r.jsxs)("div", {
          className: "jsx-2000547365",
          children: [
            t,
            Object(r.jsx)(l.a, {
              id: "2000547365",
              children: [
                ".jsx-2000547365{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;display:grid;border-bottom-left-radius:var(--border-radius-1);border-bottom-right-radius:var(--border-radius-1);}",
              ],
            }),
          ],
        });
      }
      function He(e) {
        var t = e.show,
          n = e.children,
          a = i.useState(t),
          c = Object(o.a)(a, 2),
          s = c[0],
          u = c[1];
        return (
          i.useEffect(
            function () {
              s || (t && u(!0));
            },
            [t, s, u]
          ),
          s
            ? Object(r.jsxs)("div", {
                className: "jsx-427411075 " + (re()({ "is-hidden": !t }) || ""),
                children: [
                  n,
                  Object(r.jsx)(l.a, {
                    id: "427411075",
                    children: [
                      "div.jsx-427411075{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;position:relative;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;height:100%;width:100%;}",
                      "div.is-hidden.jsx-427411075{visibility:hidden;position:absolute;}",
                    ],
                  }),
                ],
              })
            : null
        );
      }
      function We(e) {
        var t = e.initialViewMode,
          n = e.repl,
          a = e.currentUser,
          c = e.onUnrecoverableError,
          s = i.useState(void 0),
          p = Object(o.a)(s, 2),
          f = p[0],
          b = p[1],
          j = i.useState(ee.Stopped),
          h = Object(o.a)(j, 2),
          m = h[0],
          x = h[1],
          g = i.useState(t || Z.Output),
          v = Object(o.a)(g, 2),
          y = v[0],
          O = v[1],
          w = i.useState(null),
          k = Object(o.a)(w, 2),
          C = k[0],
          S = k[1];
        i.useEffect(
          function () {
            if (!C && (m === ee.Running || y === Z.Code)) {
              var e = Object(u.b)({ onUnrecoverableError: c }),
                t = Object(d.a)({ container: e });
              S({ container: e, fs: t });
            }
          },
          [C, y, m, c]
        );
        var P = i.useRef(!1);
        i.useEffect(
          function () {
            if (C && !P.current)
              return (
                C.container.connect({ repl: n, currentUser: a }),
                (P.current = !0),
                function () {
                  C.container.destroy();
                }
              );
          },
          [C, n, a]
        );
        var E = n.config.domain
            ? "https://".concat(n.config.domain)
            : n.prodUrl,
          R = Boolean(a);
        return Object(r.jsxs)(Ke, {
          children: [
            Object(r.jsxs)(qe, {
              repl: n,
              viewMode: y,
              onViewModeChange: O,
              isLoggedIn: R,
              children: [
                y === Z.Output
                  ? Object(r.jsx)(ze, {
                      url: E,
                      outputState: m,
                      setOutputState: x,
                    })
                  : null,
                y === Z.Code && null !== C && void 0 !== C && C.fs
                  ? Object(r.jsx)(Y, {
                      language: n.language,
                      fs: C.fs,
                      container: C.container,
                      onActiveFilePathChange: b,
                      activeFilePath: f,
                    })
                  : null,
              ],
            }),
            Object(r.jsxs)(Be, {
              children: [
                m === ee.Stopped && y === Z.Output
                  ? Object(r.jsx)(je, {
                      isLoggedIn: R,
                      repl: n,
                      onClick: function () {
                        x(ee.Running);
                      },
                    })
                  : null,
                m === ee.Running
                  ? Object(r.jsx)(He, {
                      show: y === Z.Output,
                      children: Object(r.jsx)("iframe", {
                        sandbox:
                          "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals",
                        src: n.devUrl,
                        className: "jsx-898323883",
                      }),
                    })
                  : null,
                Object(r.jsx)(He, {
                  show: y === Z.Code,
                  children: C
                    ? Object(r.jsx)(V, {
                        language: n.language,
                        fs: C.fs,
                        activeFilePath: f,
                        onActiveFilePathChange: b,
                      })
                    : null,
                }),
              ],
            }),
            Object(r.jsx)(l.a, {
              id: "898323883",
              children: [
                "iframe.jsx-898323883{width:100%;height:100%;display:block;background-color:var(--color-white);border-bottom-left-radius:var(--border-radius-1);border-bottom-right-radius:var(--border-radius-1);border:0px none;overflow:auto;}",
              ],
            }),
          ],
        });
      }
      var Qe = n("LI1+"),
        Xe = n("VZNv"),
        $e = n("HADy"),
        Ge = n("gnTG"),
        Je = n("Zma6");
      function Ye(e) {
        var t = e.initialViewMode,
          n = e.repl,
          a = e.currentUser,
          c = e.onUnrecoverableError,
          s = i.useRef(!1),
          p = i.useRef(!1),
          f = i.useState(ee.Stopped),
          b = Object(o.a)(f, 2),
          j = b[0],
          h = b[1],
          m = i.useState($e.b.OFFLINE),
          x = Object(o.a)(m, 2),
          g = x[0],
          O = x[1],
          w = i.useState(t || Z.Output),
          k = Object(o.a)(w, 2),
          C = k[0],
          S = k[1],
          P = i.useState(void 0),
          E = Object(o.a)(P, 2),
          R = E[0],
          _ = E[1],
          I = i.useState(null),
          N = Object(o.a)(I, 2),
          D = N[0],
          T = N[1],
          U = i.useState(!1),
          M = Object(o.a)(U, 2),
          L = M[0],
          A = M[1],
          F = i.useRef(!1);
        i.useEffect(
          function () {
            null !== D && (F.current = !0);
          },
          [D]
        );
        var q = i.useState(null),
          z = Object(o.a)(q, 2),
          K = z[0],
          B = z[1];
        i.useEffect(
          function () {
            if (K && g === $e.b.IDLE)
              return s.current && K.runner.getRunState() === $e.b.IDLE
                ? (K.runner.run(), (p.current = !0), void (s.current = !1))
                : void (
                    p.current &&
                    h(function (e) {
                      return e === ee.Stopped ? ee.Stopped : ee.Ended;
                    })
                  );
          },
          [K, g]
        ),
          i.useEffect(
            function () {
              g === $e.b.RUNNING && F.current && T("vnc");
            },
            [g]
          ),
          i.useEffect(
            function () {
              K &&
                j === ee.Running &&
                (K.runner.getRunState() === $e.b.IDLE
                  ? (K.runner.run(), (p.current = !0))
                  : (s.current = !0));
            },
            [K, j]
          ),
          i.useEffect(
            function () {
              K &&
                j === ee.Stopped &&
                K.runner.getRunState() === $e.b.RUNNING &&
                (T(null), K.runner.stopRun());
            },
            [K, j]
          ),
          i.useEffect(
            function () {
              if (!K && (j === ee.Running || C === Z.Code)) {
                var e = Object(u.b)({ onUnrecoverableError: c }),
                  t = Object(d.a)({ container: e }),
                  r = Object(Ge.a)({ container: e }),
                  o = Object(Xe.a)({
                    container: e,
                    beforeRun: (function () {
                      var e = Object(y.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!n.lang.supportsPackager3) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (e.next = 3), r.installPackages();
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  });
                B({ container: e, fs: t, runner: o, packager: r });
              }
            },
            [n, j, C, K, c]
          );
        var H = i.useRef(!1);
        i.useEffect(
          function () {
            if (K && !H.current) {
              K.container.connect({ repl: n, currentUser: a }),
                (H.current = !0);
              var e = K.container.onPortOpened(function (e) {
                  e.forwarded && T(e.isVnc ? "vnc" : "server");
                }),
                t = K.runner.onStateChanged(O),
                r = K.runner.onOutput(function () {
                  F.current && A(!0);
                });
              return function () {
                e(), t(), r(), K.container.destroy();
              };
            }
          },
          [K, n, a]
        );
        var W = Boolean(a);
        return Object(r.jsxs)(Ke, {
          children: [
            Object(r.jsxs)(qe, {
              repl: n,
              viewMode: C,
              onViewModeChange: S,
              isLoggedIn: Boolean(a),
              children: [
                C === Z.Output
                  ? Object(r.jsx)(Ve, {
                      outputState: j,
                      onClick: function () {
                        if (j === ee.Stopped || j === ee.Ended)
                          return (
                            h(ee.Running),
                            void Object(oe.track)(
                              oe.events.RUN_BUTTON_CLICKED,
                              { context: "replView", type: "terminalOutput" }
                            )
                          );
                        j === ee.Running &&
                          (Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                            context: "replView",
                            type: "terminalOutput",
                            stopping: !0,
                          }),
                          h(ee.Stopped));
                      },
                    })
                  : null,
                C === Z.Code && K
                  ? Object(r.jsx)(Y, {
                      language: n.language,
                      fs: K.fs,
                      container: K.container,
                      onActiveFilePathChange: _,
                      activeFilePath: R,
                    })
                  : null,
              ],
            }),
            Object(r.jsxs)(Be, {
              children: [
                j === ee.Stopped && C === Z.Output
                  ? Object(r.jsx)(je, {
                      isLoggedIn: W,
                      repl: n,
                      onClick: function () {
                        h(ee.Running);
                      },
                    })
                  : null,
                Object(r.jsx)(He, {
                  show: (j === ee.Running || j === ee.Ended) && C === Z.Output,
                  children: Object(r.jsxs)("div", {
                    className:
                      "jsx-2923522319 " +
                      (re()("output-wrap", {
                        "port-opened": D,
                        "show-footer-terminal": L,
                      }) || ""),
                    children: [
                      "vnc" === D && K
                        ? Object(r.jsx)("div", {
                            className: "jsx-2923522319 vnc-wrap",
                            children: Object(r.jsx)(Je.a, {
                              container: K.container,
                              fs: K.fs,
                            }),
                          })
                        : null,
                      "server" === D && K
                        ? Object(r.jsx)("div", {
                            className: "jsx-2923522319 iframe-wrap",
                            children: Object(r.jsx)("iframe", {
                              sandbox:
                                "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals",
                              src: n.devUrl,
                              className: "jsx-2923522319",
                            }),
                          })
                        : null,
                      K
                        ? Object(r.jsx)("div", {
                            className: "jsx-2923522319 terminal-wrap",
                            children: Object(r.jsx)(Qe.d, {
                              packager: K.packager,
                              runner: K.runner,
                              languageHeader: n.lang.header || void 0,
                              onClear: function () {
                                return A(!1);
                              },
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
                Object(r.jsx)(He, {
                  show: C === Z.Code && Boolean(K),
                  children: K
                    ? Object(r.jsx)(V, {
                        language: n.language,
                        fs: K.fs,
                        activeFilePath: R,
                        onActiveFilePathChange: _,
                      })
                    : null,
                }),
              ],
            }),
            Object(r.jsx)(l.a, {
              id: "2923522319",
              children: [
                ".output-wrap.jsx-2923522319{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",
                ".vnc-wrap.jsx-2923522319,.iframe-wrap.jsx-2923522319{width:100%;height:100%;}",
                ".terminal-wrap.jsx-2923522319{width:100%;height:100%;}",
                ".port-opened.jsx-2923522319 .terminal-wrap.jsx-2923522319{position:absolute;visibility:hidden;}",
                ".port-opened.show-footer-terminal.jsx-2923522319 .iframe-wrap.jsx-2923522319,.port-opened.show-footer-terminal.jsx-2923522319 .vnc-wrap.jsx-2923522319{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:70%;}",
                ".port-opened.show-footer-terminal.jsx-2923522319 .terminal-wrap.jsx-2923522319{visibility:visible;position:relative;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:30%;}",
                ".port-opened.show-footer-terminal.jsx-2923522319 .terminal-wrap.jsx-2923522319>.terminal{border-top-right-radius:0;border-top-left-radius:0;}",
                "iframe.jsx-2923522319{width:100%;height:100%;display:block;background-color:var(--color-white);border-bottom-left-radius:var(--border-radius-1);border-bottom-right-radius:var(--border-radius-1);border:0px none;overflow:auto;}",
              ],
            }),
          ],
        });
      }
      var Ze = n("LTTG"),
        et = n("EP3k");
      function tt(e) {
        var t = e.replId,
          n = e.language,
          a = "hostedUrl" in e ? e.hostedUrl : void 0,
          c = i.useState(function () {
            return Object(Ze.a)({
              beforeRun: function () {
                return Promise.resolve();
              },
              getMainFileContents: function () {
                return "fs" in e
                  ? Object(et.a)({ language: e.language, fs: e.fs })
                  : Promise.resolve("");
              },
            });
          }),
          s = Object(o.a)(c, 1)[0],
          u = i.useRef(null);
        return (
          i.useEffect(
            function () {
              if (u.current) {
                s.load({
                  replId: t,
                  language: n,
                  iframeParent: u.current,
                  hostedUrl: a,
                });
                var e = s.onStateChanged(function (e) {
                  e === $e.b.IDLE && s.run();
                });
                return function () {
                  e(), s.destroy();
                };
              }
            },
            [s, t, n, a]
          ),
          Object(r.jsxs)("div", {
            className: "jsx-1810082141 repl-box-wrapper",
            children: [
              Object(r.jsx)("div", {
                ref: u,
                className: "jsx-1810082141 iframe-container",
              }),
              Object(r.jsx)(l.a, {
                id: "1810082141",
                children: [
                  ".repl-box-wrapper.jsx-1810082141,.iframe-container.jsx-1810082141{height:100%;width:100%;}",
                  ".iframe-container.jsx-1810082141 iframe{background:white;width:100%;height:100%;border:none;display:block;border-bottom-right-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1);}",
                ],
              }),
            ],
          })
        );
      }
      function nt(e) {
        var t = e.initialViewMode,
          n = e.repl,
          a = e.currentUser,
          c = e.onUnrecoverableError,
          s = i.useState(ee.Stopped),
          l = Object(o.a)(s, 2),
          p = l[0],
          f = l[1],
          b = i.useState(t || Z.Output),
          j = Object(o.a)(b, 2),
          h = j[0],
          m = j[1],
          x = i.useState(void 0),
          g = Object(o.a)(x, 2),
          v = g[0],
          y = g[1],
          O = "html" === n.language || "kaboom" === n.language,
          w = i.useState(null),
          k = Object(o.a)(w, 2),
          C = k[0],
          S = k[1];
        i.useEffect(
          function () {
            if (!C && (h === Z.Code || !O)) {
              var e = Object(u.b)({ onUnrecoverableError: c }),
                t = Object(d.a)({ container: e });
              S({ container: e, fs: t });
            }
          },
          [C, h, p, c, O]
        );
        var P = i.useRef(!1);
        i.useEffect(
          function () {
            if (C && !P.current)
              return (
                C.container.connect({ repl: n, currentUser: a }),
                (P.current = !0),
                function () {
                  C.container.destroy();
                }
              );
          },
          [C, n, a]
        );
        var E = n.config.domain
            ? "https://".concat(n.config.domain)
            : n.prodUrl,
          R = Boolean(a);
        return Object(r.jsxs)(Ke, {
          children: [
            Object(r.jsxs)(qe, {
              repl: n,
              viewMode: h,
              onViewModeChange: m,
              isLoggedIn: R,
              children: [
                h === Z.Output
                  ? Object(r.jsx)(ze, {
                      url: E,
                      outputState: p,
                      setOutputState: f,
                    })
                  : null,
                h === Z.Code && null !== C && void 0 !== C && C.fs
                  ? Object(r.jsx)(Y, {
                      language: n.language,
                      fs: C.fs,
                      container: C.container,
                      onActiveFilePathChange: y,
                      activeFilePath: v,
                    })
                  : null,
              ],
            }),
            Object(r.jsxs)(Be, {
              children: [
                p === ee.Stopped && h === Z.Output
                  ? Object(r.jsx)(je, {
                      isLoggedIn: R,
                      repl: n,
                      onClick: function () {
                        f(ee.Running);
                      },
                    })
                  : null,
                p === ee.Running
                  ? Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsx)(He, {
                          show: O && h === Z.Output,
                          children: Object(r.jsx)(tt, {
                            replId: n.id,
                            language: "html",
                            displayUrl: E,
                            hostedUrl: n.devUrl,
                          }),
                        }),
                        Object(r.jsx)(He, {
                          show: !O && h === Z.Output,
                          children: C
                            ? Object(r.jsx)(tt, {
                                replId: n.id,
                                language: n.language,
                                fs: C.fs,
                              })
                            : null,
                        }),
                      ],
                    })
                  : null,
                Object(r.jsx)(He, {
                  show: h === Z.Code,
                  children: C
                    ? Object(r.jsx)(V, {
                        language: n.language,
                        fs: C.fs,
                        activeFilePath: v,
                        onActiveFilePathChange: y,
                      })
                    : null,
                }),
              ],
            }),
          ],
        });
      }
      var rt = n("z7pX"),
        ot = n("8axe"),
        it = n("5sjI"),
        at = T()(
          function () {
            return Promise.all([n.e(40), n.e(44)]).then(n.bind(null, "yR2o"));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["yR2o"];
              },
              modules: ["../../workspace/plugins/console/Console"],
            },
          }
        );
      function ct(e) {
        var t = e.initialViewMode,
          n = e.repl,
          a = e.currentUser,
          c = e.onUnrecoverableError,
          s = i.useState(""),
          p = Object(o.a)(s, 2),
          f = p[0],
          b = p[1],
          j = i.useState([]),
          h = Object(o.a)(j, 2),
          m = h[0],
          x = h[1],
          g = i.useRef(!1),
          O = i.useRef(!1),
          w = i.useState(ee.Stopped),
          k = Object(o.a)(w, 2),
          C = k[0],
          S = k[1],
          P = i.useState($e.b.OFFLINE),
          E = Object(o.a)(P, 2),
          R = E[0],
          _ = E[1],
          I = i.useState(t || Z.Output),
          N = Object(o.a)(I, 2),
          D = N[0],
          T = N[1],
          U = i.useState(void 0),
          M = Object(o.a)(U, 2),
          L = M[0],
          A = M[1],
          F = i.useState(null),
          q = Object(o.a)(F, 2),
          z = q[0],
          K = q[1];
        i.useEffect(
          function () {
            if (z && R === $e.b.IDLE)
              return g.current
                ? (z.replbox.run(), (O.current = !0), void (g.current = !1))
                : void (
                    O.current &&
                    S(function (e) {
                      return e === ee.Stopped ? ee.Stopped : ee.Ended;
                    })
                  );
          },
          [z, R]
        ),
          i.useEffect(
            function () {
              z &&
                C === ee.Running &&
                (z.replbox.getRunState() === $e.b.IDLE
                  ? (z.replbox.run(), (O.current = !0))
                  : (g.current = !0));
            },
            [z, C]
          ),
          i.useEffect(
            function () {
              z &&
                C === ee.Stopped &&
                z.replbox.getRunState() === $e.b.RUNNING &&
                z.replbox.stopRun();
            },
            [z, C]
          ),
          i.useEffect(
            function () {
              if (!z && (C === ee.Running || D === Z.Code)) {
                var e = Object(u.b)({ onUnrecoverableError: c }),
                  t = Object(d.a)({ container: e }),
                  r = Object(Ze.a)({
                    beforeRun: (function () {
                      var e = Object(y.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    getMainFileContents: (function () {
                      var e = Object(y.a)(
                        v.a.mark(function e() {
                          return v.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    Object(et.a)({ fs: t, language: n.lang.id })
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                  });
                r.onOutput(function (e) {
                  x(function (t) {
                    return [].concat(Object(rt.a)(t), [{ data: e, type: "" }]);
                  });
                }),
                  K({ container: e, fs: t, replbox: r });
              }
            },
            [n, C, D, z, c]
          );
        var B = i.useRef(!1);
        i.useEffect(
          function () {
            if (z && !B.current) {
              z.container.connect({ repl: n, currentUser: a }),
                (B.current = !0),
                z.replbox.load({ language: n.lang.id, replId: n.id });
              var e = z.replbox.onStateChanged(_);
              return function () {
                e(), z.container.destroy();
              };
            }
          },
          [z, n, a]
        );
        var H = n.lang.header,
          W = { data: "".concat(H, "\n"), type: "" },
          Q = H ? [W].concat(Object(rt.a)(m)) : m,
          X = Boolean(a);
        return Object(r.jsxs)(Ke, {
          children: [
            Object(r.jsxs)(qe, {
              repl: n,
              viewMode: D,
              onViewModeChange: T,
              isLoggedIn: Boolean(a),
              children: [
                D === Z.Output
                  ? Object(r.jsx)(Ve, {
                      outputState: C,
                      onClick: function () {
                        if (C === ee.Stopped || C === ee.Ended)
                          return (
                            S(ee.Running),
                            void Object(oe.track)(
                              oe.events.RUN_BUTTON_CLICKED,
                              { context: "replView", type: "consoleOutput" }
                            )
                          );
                        C === ee.Running &&
                          (Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                            context: "replView",
                            type: "consoleOutput",
                            stopping: !0,
                          }),
                          S(ee.Stopped));
                      },
                    })
                  : null,
                D === Z.Code && z
                  ? Object(r.jsx)(Y, {
                      language: n.language,
                      fs: z.fs,
                      container: z.container,
                      onActiveFilePathChange: A,
                      activeFilePath: L,
                    })
                  : null,
              ],
            }),
            Object(r.jsxs)(Be, {
              children: [
                C === ee.Stopped && D === Z.Output
                  ? Object(r.jsx)(je, {
                      isLoggedIn: X,
                      repl: n,
                      onClick: function () {
                        S(ee.Running);
                      },
                    })
                  : null,
                Object(r.jsx)(He, {
                  show: (C === ee.Running || C === ee.Ended) && D === Z.Output,
                  children: Object(r.jsx)("div", {
                    className: "jsx-1556485210 console-wrap",
                    children: z
                      ? Object(r.jsx)(at, {
                          messages: Q,
                          clearConsole: function () {
                            return x([]);
                          },
                          setPromptValue: b,
                          onEval: function (e) {
                            z &&
                              R !== $e.b.STOPPING &&
                              R === $e.b.IDLE &&
                              z.replbox.evalCode(e);
                          },
                          promptState: R !== $e.b.IDLE ? "input" : "prompt",
                          checkLineEnd: function (e, t) {
                            Object(ot.checkLineEnd)(n.lang.id, e, t);
                          },
                          promptValue: f,
                          loading: R === $e.b.OFFLINE,
                        })
                      : Object(r.jsx)(it.a, { messages: Q }),
                  }),
                }),
                Object(r.jsx)(He, {
                  show: D === Z.Code && Boolean(z),
                  children: z
                    ? Object(r.jsx)(V, {
                        language: n.language,
                        fs: z.fs,
                        activeFilePath: L,
                        onActiveFilePathChange: A,
                      })
                    : null,
                }),
              ],
            }),
            Object(r.jsx)(l.a, {
              id: "1556485210",
              children: [
                ".console-wrap.jsx-1556485210{width:100%;height:100%;background-color:var(--color-brand-dark-blue);border-radius:var(--border-radius-1);}",
              ],
            }),
          ],
        });
      }
      var st = T()(
        function () {
          return Promise.all([n.e(40), n.e(44)]).then(n.bind(null, "yR2o"));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return ["yR2o"];
            },
            modules: ["../../workspace/plugins/console/Console"],
          },
        }
      );
      function lt(e) {
        var t = e.initialViewMode,
          n = e.repl,
          c = e.currentUser,
          s = e.onUnrecoverableError,
          p = i.useState(""),
          f = Object(o.a)(p, 2),
          b = f[0],
          j = f[1],
          h = i.useState(
            n.lang.header
              ? [{ data: "".concat(n.lang.header, "\n"), type: "" }]
              : []
          ),
          m = Object(o.a)(h, 2),
          x = m[0],
          g = m[1],
          v = i.useRef(!1),
          y = i.useRef(!1),
          O = i.useState(ee.Stopped),
          w = Object(o.a)(O, 2),
          k = w[0],
          C = w[1],
          S = i.useState($e.b.OFFLINE),
          P = Object(o.a)(S, 2),
          E = P[0],
          R = P[1],
          _ = i.useState(t || Z.Output),
          I = Object(o.a)(_, 2),
          N = I[0],
          D = I[1],
          T = i.useState(void 0),
          U = Object(o.a)(T, 2),
          M = U[0],
          L = U[1],
          A = i.useState(null),
          F = Object(o.a)(A, 2),
          q = F[0],
          z = F[1],
          K = i.useState(null),
          B = Object(o.a)(K, 2),
          H = B[0],
          W = B[1];
        i.useEffect(
          function () {
            if (q && E === $e.b.IDLE)
              return v.current
                ? ((y.current = !0), void (v.current = !1))
                : void (
                    y.current &&
                    C(function (e) {
                      return e === ee.Stopped ? ee.Stopped : ee.Ended;
                    })
                  );
          },
          [q, E]
        ),
          i.useEffect(
            function () {
              if (q && H && k === ee.Running) {
                if (q.container.getConnectionState() === u.a.CONNECTED) {
                  var e = !1;
                  return (
                    Object(et.a)({ fs: q.fs, language: n.lang.id }).then(
                      function (t) {
                        !e && H && H.send({ eval: t });
                      }
                    ),
                    function () {
                      e = !0;
                    }
                  );
                }
                v.current = !0;
              }
            },
            [q, H, k, n.lang.id]
          ),
          i.useEffect(
            function () {
              k === ee.Stopped && E === $e.b.RUNNING && (R($e.b.IDLE), g([]));
            },
            [q, E, k, n.lang.id]
          ),
          i.useEffect(
            function () {
              if (!q && (k === ee.Running || N === Z.Code)) {
                var e = Object(u.b)({ onUnrecoverableError: s }),
                  t = Object(d.a)({ container: e });
                z({ container: e, fs: t });
              }
            },
            [n, k, N, q, s]
          ),
          i.useEffect(
            function () {
              if (q) {
                q.container.connect({ repl: n, currentUser: c });
                var e = q.container.openChannel(
                  { service: "eval", name: "evaler" },
                  function (e) {
                    e.channel && W(e.channel);
                  }
                );
                return function () {
                  e(), q.container.destroy();
                };
              }
            },
            [q, n, c]
          );
        var Q = function (e) {
          return g(function (t) {
            return [].concat(Object(rt.a)(t), [e]);
          });
        };
        i.useEffect(
          function () {
            if (H)
              return H.onCommand(function (e) {
                switch (e.body) {
                  case "output":
                    return void Q({ data: e.output, type: "" });
                  case "error":
                    return (
                      Q({ data: e.error, type: "error" }), void R($e.b.IDLE)
                    );
                  case "result":
                    return (
                      Q({ data: e.result, type: "result" }), void R($e.b.IDLE)
                    );
                  case "eval":
                    return void R($e.b.RUNNING);
                  case "hint":
                    if (!e.hint || !e.hint.text) return;
                    return void Q({
                      data: "\x1b[0m\x1b[33m".concat(
                        e.hint.text,
                        "\x1b[0m\r\n"
                      ),
                      type: "",
                    });
                  case "input":
                    return void Q({ data: e.output, type: "" });
                  default:
                    a.c(
                      new Error(
                        "Unknown eval command ".concat(
                          e.body,
                          ". Expected output, error, state or result"
                        )
                      )
                    );
                }
              });
          },
          [H]
        );
        var X = Boolean(c);
        return Object(r.jsxs)(Ke, {
          children: [
            Object(r.jsxs)(qe, {
              repl: n,
              viewMode: N,
              onViewModeChange: D,
              isLoggedIn: X,
              children: [
                N === Z.Output
                  ? Object(r.jsx)(Ve, {
                      outputState: k,
                      onClick: function () {
                        if (k === ee.Stopped || k === ee.Ended)
                          return (
                            C(ee.Running),
                            void Object(oe.track)(
                              oe.events.RUN_BUTTON_CLICKED,
                              { context: "replView", type: "consoleOutput" }
                            )
                          );
                        k === ee.Running &&
                          (Object(oe.track)(oe.events.RUN_BUTTON_CLICKED, {
                            context: "replView",
                            type: "consoleOutput",
                            stopping: !0,
                          }),
                          C(ee.Stopped));
                      },
                    })
                  : null,
                N === Z.Code && q
                  ? Object(r.jsx)(Y, {
                      language: n.language,
                      fs: q.fs,
                      container: q.container,
                      onActiveFilePathChange: L,
                      activeFilePath: M,
                    })
                  : null,
              ],
            }),
            Object(r.jsxs)(Be, {
              children: [
                k === ee.Stopped && N === Z.Output
                  ? Object(r.jsx)(je, {
                      isLoggedIn: X,
                      repl: n,
                      onClick: function () {
                        C(ee.Running);
                      },
                    })
                  : null,
                Object(r.jsx)(He, {
                  show: (k === ee.Running || k === ee.Ended) && N === Z.Output,
                  children: Object(r.jsx)("div", {
                    className: "jsx-1556485210 console-wrap",
                    children: q
                      ? Object(r.jsx)(st, {
                          messages: x,
                          clearConsole: function () {
                            return g([]);
                          },
                          setPromptValue: j,
                          onEval: function (e) {
                            H && E === $e.b.IDLE && H.send({ eval: e });
                          },
                          promptState: E !== $e.b.IDLE ? "input" : "prompt",
                          checkLineEnd: function (e, t) {
                            Object(ot.checkLineEnd)(n.lang.id, e, t);
                          },
                          promptValue: b,
                          loading: E === $e.b.OFFLINE,
                        })
                      : Object(r.jsx)(it.a, { messages: x }),
                  }),
                }),
                Object(r.jsx)(He, {
                  show: N === Z.Code && Boolean(q),
                  children: q
                    ? Object(r.jsx)(V, {
                        language: n.language,
                        fs: q.fs,
                        activeFilePath: M,
                        onActiveFilePathChange: L,
                      })
                    : null,
                }),
              ],
            }),
            Object(r.jsx)(l.a, {
              id: "1556485210",
              children: [
                ".console-wrap.jsx-1556485210{width:100%;height:100%;background-color:var(--color-brand-dark-blue);border-radius:var(--border-radius-1);}",
              ],
            }),
          ],
        });
      }
      function ut(e) {
        var t = e.repl,
          n = e.currentUser,
          s = e.initialViewMode,
          l = i.useState(""),
          u = Object(o.a)(l, 2),
          d = u[0],
          p = u[1],
          f = i.useCallback(function (e) {
            a.m(function (t) {
              t.setTag("bsod", "true"),
                t.setTag("replviewer", "true"),
                console.error(e);
              var n = a.c(e);
              p(n);
            });
          }, []),
          b = (function (e) {
            return e.config.isServer
              ? te.Webview
              : e.config.isVnc || e.lang.canUseShellRunner
              ? te.Terminal
              : "replbox" === e.lang.engine
              ? ["basic", "python_turtle", "html", "kaboom"].includes(e.lang.id)
                ? te.ReplboxWebview
                : te.ReplboxConsole
              : "goval" === e.lang.engine
              ? te.GovalConsole
              : null;
          })(t);
        return (
          i.useEffect(
            function () {
              Object(oe.track)(oe.events.REPL_VIEWER_RENDERED, {
                outputType: b,
                language: t.language,
                isVnc: t.config.isVnc,
                isServer: t.config.isServer,
              });
            },
            [b, t]
          ),
          d
            ? Object(r.jsx)(c.a, {
                user: n ? { email: n.email, username: n.username } : void 0,
                sentryEventId: d,
                devHide: function () {
                  return p("");
                },
              })
            : b === te.Webview
            ? Object(r.jsx)(We, {
                initialViewMode: s,
                repl: t,
                currentUser: n,
                onUnrecoverableError: f,
              })
            : b === te.Terminal
            ? Object(r.jsx)(Ye, {
                initialViewMode: s,
                repl: t,
                currentUser: n,
                onUnrecoverableError: f,
              })
            : b === te.ReplboxWebview
            ? Object(r.jsx)(nt, {
                initialViewMode: s,
                repl: t,
                currentUser: n,
                onUnrecoverableError: f,
              })
            : b === te.ReplboxConsole
            ? Object(r.jsx)(ct, {
                initialViewMode: s,
                repl: t,
                currentUser: n,
                onUnrecoverableError: f,
              })
            : b === te.GovalConsole
            ? Object(r.jsx)(lt, {
                initialViewMode: s,
                repl: t,
                currentUser: n,
                onUnrecoverableError: f,
              })
            : null
        );
      }
    },
    OEiS: function (e, t, n) {
      function r(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return o(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return o(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          c = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var i = n("X0/w"),
        a = n("AERv"),
        c = a.usernameRegExp,
        s = a.markdownMentionPlugin,
        l = i();
      l.use(s);
      e.exports = function (e) {
        var t = [],
          n = [],
          o = [],
          i = [];
        return (
          (function e(a) {
            if (
              ("image" === a.type
                ? t.push(a.url)
                : "text" === a.type
                ? (n.push(a.value), c.exec(a.value) && i.push(a.value))
                : "link" === a.type && o.push(a.url),
              a.children)
            ) {
              var s,
                l = r(a.children);
              try {
                for (l.s(); !(s = l.n()).done; ) {
                  e(s.value);
                }
              } catch (u) {
                l.e(u);
              } finally {
                l.f();
              }
            }
          })(l.parse(e)),
          { images: t, text: n, urls: o, mentions: i }
        );
      };
    },
    OI0a: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("up5I"));
      t.a = function (e) {
        return Object(r.jsxs)("div", {
          className: "jsx-688104393",
          children: [
            e.href
              ? Object(r.jsx)("a", {
                  href: e.href,
                  onClick: function (t) {
                    t.preventDefault(), e.loading || e.onClick();
                  },
                  className: "jsx-688104393",
                  children: Object(r.jsx)(a.a, {
                    fullWidth: !0,
                    children: e.loading
                      ? "Loading..."
                      : e.children || "Load more",
                  }),
                })
              : Object(r.jsx)(a.a, {
                  onClick: e.loading ? void 0 : e.onClick,
                  fullWidth: !0,
                  children: e.loading
                    ? "Loading..."
                    : e.children || "Load more",
                }),
            Object(r.jsx)(i.a, {
              id: "688104393",
              children: [
                "div.jsx-688104393{padding:20px;margin:0 auto;max-width:500px;}",
                "a.jsx-688104393:hover{-webkit-text-decoration:none;text-decoration:none;}",
              ],
            }),
          ],
        });
      };
    },
    PHrS: function (e, t, n) {
      "use strict";
      var r = n("jT3O"),
        o = n("cpVT"),
        i = n("nKUr"),
        a = n("MX0m"),
        c = n.n(a),
        s = n("q1tI"),
        l = n("lTCR"),
        u = n.n(l),
        d = n("+uXX"),
        p = n("YFqc"),
        f = n.n(p),
        b = n("EQ2k"),
        j = n("Zj0H");
      function h() {
        var e = Object(r.a)([
          "\n  {\n    boards {\n      id\n      name\n      url\n      slug\n      color\n    }\n  }\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function m(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var g = function (e) {
          var t = e.board,
            n = e.order,
            r = Object(i.jsxs)("a", {
              className:
                c.a.dynamic([
                  [
                    "1897130249",
                    [
                      t && t.color ? t.color : b.a.yellow,
                      t && t.color ? t.color : b.a.yellow,
                      t && t.color ? t.color : b.a.yellow,
                    ],
                  ],
                ]) +
                " " +
                ((e.active ? "board-nav-nav-item-active" : null) || ""),
              children: [
                e.children,
                e.extraLabel
                  ? Object(i.jsx)("div", {
                      style: { backgroundColor: e.extraLabelColor },
                      className:
                        c.a.dynamic([
                          [
                            "1897130249",
                            [
                              t && t.color ? t.color : b.a.yellow,
                              t && t.color ? t.color : b.a.yellow,
                              t && t.color ? t.color : b.a.yellow,
                            ],
                          ],
                        ]) + " board-nav-item-new-label",
                      children: e.extraLabel,
                    })
                  : null,
                Object(i.jsx)(c.a, {
                  id: "1897130249",
                  dynamic: [
                    t && t.color ? t.color : b.a.yellow,
                    t && t.color ? t.color : b.a.yellow,
                    t && t.color ? t.color : b.a.yellow,
                  ],
                  children: [
                    "a.__jsx-style-dynamic-selector{font-weight:bold;color:#cdcfd4;padding:16px 20px 20px;font-size:14px;font-weight:bold;cursor:pointer;position:relative;white-space:nowrap;display:inline-block;text-transform:capitalize;-webkit-text-decoration:none;text-decoration:none;border-top:4px solid ".concat(
                      t && t.color ? t.color : b.a.yellow,
                      ";}"
                    ),
                    "a.__jsx-style-dynamic-selector:hover{color:".concat(
                      t && t.color ? t.color : b.a.yellow,
                      ";}"
                    ),
                    ".board-nav-nav-item-active.__jsx-style-dynamic-selector{color:white;background-color:".concat(
                      t && t.color ? t.color : b.a.yellow,
                      ";}"
                    ),
                    ".board-nav-nav-item-active.__jsx-style-dynamic-selector:hover{color:white;}",
                    ".board-nav-item-new-label.__jsx-style-dynamic-selector{position:absolute;font-size:10px;top:0px;right:-28px;color:white;padding:1px 2px;font-weight:normal;border-radius:2px;}",
                  ],
                }),
              ],
            }),
            o = n ? { order: n } : {};
          if (t) {
            var a = { pathname: t.url, query: o };
            return Object(i.jsx)(
              f.a,
              {
                href: {
                  pathname: "/postsFeed",
                  query: x({ boardSlug: t.slug }, o),
                },
                as: a,
                children: r,
              },
              t.url
            );
          }
          return e.href && e.as
            ? Object(i.jsx)(
                f.a,
                { href: e.href, as: e.as, children: r },
                e.href.pathname
              )
            : r;
        },
        v = u()(h()),
        y = {};
      t.a = function (e) {
        return Object(i.jsxs)("div", {
          className: "jsx-467725132",
          children: [
            Object(i.jsx)(d.Query, {
              query: v,
              children: function (t) {
                var n = t.data,
                  r = t.client;
                return Object(i.jsx)("nav", {
                  className: "jsx-467725132",
                  children:
                    n && n.boards
                      ? Object(i.jsxs)(s.Fragment, {
                          children: [
                            Object(i.jsx)(g, {
                              href: {
                                pathname: "/postsFeed",
                                query: e.order ? { order: e.order } : {},
                              },
                              as: {
                                pathname: "/talk/all",
                                query: e.order ? { order: e.order } : {},
                              },
                              active: "all" === e.currentSlug,
                              children: "All",
                            }),
                            n.boards.map(function (t) {
                              return (
                                y[t.id] ||
                                  ((y[t.id] = !0),
                                  r.query({
                                    query: j.a,
                                    variables: { slug: t.slug },
                                  })),
                                Object(i.jsx)(
                                  g,
                                  {
                                    board: t,
                                    order: e.order,
                                    active: t.slug === e.currentSlug,
                                    children: t.name,
                                  },
                                  t.id
                                )
                              );
                            }),
                          ],
                        })
                      : null,
                });
              },
            }),
            Object(i.jsx)(c.a, {
              id: "467725132",
              children: [
                "nav.jsx-467725132{text-align:center;background-color:#121c32;color:white;}",
              ],
            }),
          ],
        });
      };
    },
    "Pwy/": function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("vJKn"),
        i = n.n(o),
        a = n("rg98"),
        c = n("cpVT"),
        s = n("H+61"),
        l = n("UlJF"),
        u = n("7LId"),
        d = n("VIvw"),
        p = n("iHvq"),
        f = n("q1tI"),
        b = n("+uXX"),
        j = n("/MKj"),
        h = n("y2k1"),
        m = n("ArsQ"),
        x = n("zgDP");
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
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
      function y(e) {
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
      var O = (function (e) {
        Object(u.a)(n, e);
        var t = y(n);
        function n(e) {
          var r;
          return (
            Object(s.a)(this, n),
            ((r = t.call(this, e)).onChange = function (e) {
              r.state.tracked ||
                Object(x.track)(x.events.COMMENT_WRITTEN, {
                  postId: r.props.postId,
                }),
                r.setState(v(v({}, e), {}, { expanded: !0, tracked: !0 }));
            }),
            (r.onFocus = function () {
              r.setState({ expanded: !0 });
            }),
            (r.onCancel = function () {
              r.setState(
                { expanded: !1, loading: !1, body: "" },
                r.props.onCancel
              );
            }),
            (r.onSubmit = (function () {
              var e = Object(a.a)(
                i.a.mark(function e(t) {
                  var n, o, a, c, s, l, u, d;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = r.state),
                              (o = n.body),
                              (a = n.loading),
                              (c = r.props),
                              (s = c.postId),
                              (l = c.commentId),
                              (u = c.onCreate),
                              !a)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              r.setState({ loading: !0 }),
                              (e.prev = 5),
                              (e.next = 8),
                              t({
                                variables: {
                                  input: { postId: s, commentId: l, body: o },
                                },
                              })
                            );
                          case 8:
                            e.next = 16;
                            break;
                          case 10:
                            return (
                              (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              (d =
                                (e.t0.graphQLErrors.length &&
                                  e.t0.graphQLErrors[0].message) ||
                                "Something went wrong. Please contact support"),
                              r.setState({ loading: !1 }),
                              r.props.showMessage({
                                content: d,
                                type: "error",
                                time: 4e3,
                              }),
                              e.abrupt("return")
                            );
                          case 16:
                            r.setState({ body: "", loading: !1, expanded: !1 }),
                              u && u();
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (r.state = {
              body: e.body || "",
              loading: !1,
              expanded: !1,
              tracked: !1,
            }),
            r
          );
        }
        return (
          Object(l.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.autofocus,
                  o = t.updateCacheForCommentMuation,
                  i = t.mutation,
                  a = t.commentId,
                  c = t.postId,
                  s = this.state,
                  l = s.body,
                  u = s.loading,
                  d = s.expanded,
                  p = a ? "comment" : "post",
                  f = a || c;
                return Object(r.jsx)(b.Mutation, {
                  mutation: i,
                  update: o,
                  children: function (t, o) {
                    return Object(r.jsxs)("div", {
                      children: [
                        JSON.stringify(o.error, null, 2),
                        Object(r.jsx)(h.a, {
                          uniqueId: p + f,
                          body: l,
                          loading: u,
                          expanded: d,
                          onChange: e.onChange,
                          autofocus: n,
                          onSubmit: function (n) {
                            n && n.preventDefault(), e.onSubmit(t);
                          },
                          onFocus: e.onFocus,
                          onCancel: e.onCancel,
                          cancelable: !0,
                          cta: "Comment",
                          getAtMentionSuggestionsContext: function () {
                            return { contextType: p, contextId: f };
                          },
                        }),
                      ],
                    });
                  },
                });
              },
            },
          ]),
          n
        );
      })(f.Component);
      t.a = Object(j.c)(void 0, { showMessage: m.b })(O);
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
        i = n("cpVT"),
        a = n("MX0m"),
        c = n.n(a),
        s = (n("q1tI"), n("TSYQ")),
        l = n.n(s);
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
                Object(i.a)(e, t, n[t]);
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
          return Object(r.jsx)(j, d({ Component: "a" }, e));
        },
        b = function (e) {
          return Object(r.jsx)(j, d({ Component: "button" }, e));
        },
        j = function (e) {
          var t = e.children,
            n = e.Component,
            i = e.iconRight,
            a = e.primary,
            s = e.large,
            u = e.arrow,
            f = e.center,
            b = e.border,
            j = e.rounded,
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
                  c.a.dynamic([
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
                    primary: a,
                    large: s,
                    center: f,
                    border: b,
                    rounded: j,
                  }) || ""),
                children: [
                  e.iconLeft
                    ? Object(r.jsx)("div", {
                        className:
                          "jsx-".concat(p.__hash) +
                          " " +
                          c.a.dynamic([
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
                      c.a.dynamic([
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
                              c.a.dynamic([
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
                              c.a.dynamic([
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
                  i || u
                    ? Object(r.jsx)("div", {
                        className:
                          "jsx-".concat(p.__hash) +
                          " " +
                          c.a.dynamic([
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
                                c.a.dynamic([
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
                                  c.a.dynamic([
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
                          : i,
                      })
                    : null,
                  Object(r.jsx)(c.a, { id: p.__hash, children: p }),
                  Object(r.jsx)(c.a, {
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
      j.defaultProps = { border: !0, rounded: !0 };
    },
    QT57: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t,
          n = this.block(e).split("\n"),
          r = [],
          o = n.length,
          i = -1;
        for (; ++i < o; ) (t = n[i]), (r[i] = (t ? " " : "") + t);
        return ">" + r.join("\n>");
      };
    },
    QTzV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n("zC+P"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("sYmS"),
        c = n.n(a),
        s = n("v2L8"),
        l = n("+uXX"),
        u = n("Qp/i");
      function d(e, t) {
        void 0 === t && (t = {});
        var n = Object(s.c)(e),
          o = t.options,
          a = void 0 === o ? u.c : o,
          d = t.alias,
          p = void 0 === d ? "Apollo" : d,
          f = a;
        return (
          "function" !== typeof f &&
            (f = function () {
              return a;
            }),
          function (o) {
            var a = p + "(" + Object(u.e)(o) + ")",
              s = (function (c) {
                function s() {
                  return (null !== c && c.apply(this, arguments)) || this;
                }
                return (
                  Object(r.c)(s, c),
                  (s.prototype.render = function () {
                    var a = this.props,
                      c = f(a);
                    return (
                      t.withRef &&
                        ((this.withRef = !0),
                        (a = Object.assign({}, a, {
                          ref: this.setWrappedInstance,
                        }))),
                      !c.variables &&
                        n.variables.length > 0 &&
                        (c.variables = Object(u.b)(n, a)),
                      i.a.createElement(
                        l.Mutation,
                        Object(r.a)({ ignoreResults: !0 }, c, { mutation: e }),
                        function (e, n) {
                          var c,
                            s,
                            l = n.data,
                            u = Object(r.e)(n, ["data"]),
                            d = Object.assign(u, l || {}),
                            p = t.name || "mutate",
                            f = t.name ? p + "Result" : "result",
                            b = (((c = {})[p] = e), (c[f] = d), c);
                          if (t.props) {
                            var j =
                              (((s = {})[p] = e),
                              (s[f] = d),
                              (s.ownProps = a),
                              s);
                            b = t.props(j);
                          }
                          return i.a.createElement(o, Object(r.a)({}, a, b));
                        }
                      )
                    );
                  }),
                  (s.displayName = a),
                  (s.WrappedComponent = o),
                  s
                );
              })(u.a);
            return c()(s, o, {});
          }
        );
      }
    },
    "Qp/i": function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return c;
      }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n("zC+P"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("qVdT"),
        c = function () {
          return {};
        },
        s = function () {
          return !1;
        };
      function l(e) {
        return e.displayName || e.name || "Component";
      }
      function u(e, t) {
        for (var n = {}, r = 0, o = e.variables; r < o.length; r++) {
          var i = o[r],
            a = i.variable,
            c = i.type;
          if (a.name && a.name.value) {
            var s = a.name.value,
              l = t[s];
            "undefined" === typeof l
              ? "NonNullType" !== c.kind && (n[s] = void 0)
              : (n[s] = l);
          }
        }
        return n;
      }
      var d = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n.withRef = !1),
            (n.setWrappedInstance = n.setWrappedInstance.bind(n)),
            n
          );
        }
        return (
          Object(r.c)(t, e),
          (t.prototype.getWrappedInstance = function () {
            return Object(a.b)(this.withRef, 31), this.wrappedInstance;
          }),
          (t.prototype.setWrappedInstance = function (e) {
            this.wrappedInstance = e;
          }),
          t
        );
      })(i.a.Component);
    },
    QxN4: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return e;
      };
    },
    R54M: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return Ue;
      });
      var r = n("nKUr"),
        o = n("cpVT"),
        i = n("H+61"),
        a = n("UlJF"),
        c = n("7LId"),
        s = n("VIvw"),
        l = n("iHvq"),
        u = n("jT3O"),
        d = n("MX0m"),
        p = n.n(d),
        f = n("q1tI"),
        b = n("lTCR"),
        j = n.n(b),
        h = n("20a2"),
        m = n.n(h),
        x = n("ShKv"),
        g = n("EQ2k"),
        v = n("dhJC"),
        y = n("vJKn"),
        O = n.n(y),
        w = n("rg98"),
        k = n("+uXX"),
        C = n("/MKj"),
        S = n("ArsQ"),
        P = n("5TM/"),
        E = n("XLFt"),
        R = n("zgDP");
      function _(e, t) {
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
            ? _(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function N(e) {
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
          return Object(s.a)(this, n);
        };
      }
      function D() {
        var e = Object(u.a)([
          "\n  mutation updatePost($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      post {\n        id\n        ...EditPostPost\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = Object(u.a)([
          "\n  query post($id: Int!) {\n    post(id: $id) {\n      id\n      ...EditPostPost\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = Object(u.a)([
          "\n    fragment EditPostPost on Post {\n      id\n      title\n      body\n      showHosted\n      board {\n        id\n        replRequired\n      }\n      repl {\n        id\n        url\n        hostedUrl\n        title\n      }\n    }\n  ",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      var M = { post: j()(U()) },
        L = j()(T(), M.post),
        A = j()(D(), M.post),
        F = (function (e) {
          Object(c.a)(n, e);
          var t = N(n);
          function n(e) {
            var r;
            return (
              Object(i.a)(this, n),
              ((r = t.call(this, e)).onChange = function (e) {
                r.state.tracked ||
                  Object(R.track)(R.events.POST_WRITTEN, {
                    editing: !0,
                    id: r.props.post.id,
                  }),
                  r.setState(I(I({}, e), {}, { tracked: !0 }));
              }),
              (r.onSubmit = (function () {
                var e = Object(w.a)(
                  O.a.mark(function e(t) {
                    var n, o, i, a, c, s, l, u, d;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = r.props.post.id),
                                (o = r.state),
                                (i = o.title),
                                (a = o.body),
                                (c = o.repl),
                                (s = o.showHosted),
                                (l = o.loading),
                                (u = c ? c.id : void 0),
                                !l)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              return (
                                r.setState({ loading: !0 }),
                                (e.prev = 6),
                                (e.next = 9),
                                t({
                                  variables: {
                                    input: {
                                      title: i,
                                      body: a,
                                      replId: u,
                                      showHosted: s,
                                      id: n,
                                    },
                                  },
                                })
                              );
                            case 9:
                              r.props.showMessage({
                                content: "Post updated",
                                type: "confirm",
                                time: 4e3,
                              }),
                                r.props.onEdit(),
                                (e.next = 17);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(6)),
                                (d =
                                  (e.t0.graphQLErrors.length &&
                                    e.t0.graphQLErrors[0].message) ||
                                  "Something went wrong. Please contact support"),
                                r.props.showMessage({
                                  content: d,
                                  type: "error",
                                  time: 4e3,
                                });
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[6, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (r.state = {
                title: e.post.title,
                body: e.post.body,
                showHosted: e.post.showHosted,
                repl: e.post.repl,
                loading: !1,
                tracked: !1,
              }),
              r
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.title,
                    o = t.body,
                    i = t.repl,
                    a = t.showHosted,
                    c = t.loading;
                  return Object(r.jsx)(k.Mutation, {
                    mutation: A,
                    children: function (t) {
                      return Object(r.jsx)(P.a, {
                        title: n,
                        body: o,
                        repl: i,
                        showHosted: a,
                        loading: c,
                        onChange: e.onChange,
                        onSubmit: function () {
                          return e.onSubmit(t);
                        },
                        cancelable: !0,
                        onCancel: e.props.onEdit,
                        titleCta: e.props.titleCta,
                        bodyCta: e.props.bodyCta,
                        cta: "Update",
                      });
                    },
                  });
                },
              },
            ]),
            n
          );
        })(f.Component),
        q = Object(C.c)(void 0, { showMessage: S.b })(function (e) {
          var t = e.postId,
            n = Object(v.a)(e, ["postId"]);
          return Object(r.jsx)(k.Query, {
            query: L,
            variables: { id: t },
            children: function (e) {
              var t = e.data;
              return e.error
                ? Object(r.jsx)("p", { children: "Could not load post" })
                : t && t.post
                ? Object(r.jsx)(F, I({ post: t.post }, n))
                : Object(r.jsx)(E.a, {});
            },
          });
        }),
        V = n("LLeT");
      function z() {
        var e = Object(u.a)([
          "\n  mutation deletePost($id: Int!) {\n    deletePost(id: $id) {\n      id\n    }\n  }\n",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      var K = j()(z()),
        B = Object(C.c)(void 0, { showMessage: S.b })(function (e) {
          return Object(r.jsx)(k.Mutation, {
            mutation: K,
            children: function (t) {
              return Object(r.jsx)(V.a, {
                onClick: Object(w.a)(
                  O.a.mark(function n() {
                    var r;
                    return O.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this post?"
                                )
                              ) {
                                n.next = 2;
                                break;
                              }
                              return n.abrupt("return");
                            case 2:
                              return (
                                (n.prev = 2),
                                (n.next = 5),
                                t({ variables: { id: e.id } })
                              );
                            case 5:
                              n.next = 12;
                              break;
                            case 7:
                              return (
                                (n.prev = 7),
                                (n.t0 = n.catch(2)),
                                (r =
                                  (n.t0.graphQLErrors.length &&
                                    n.t0.graphQLErrors[0].message) ||
                                  "Something went wrong. Please contact support"),
                                e.showMessage({
                                  content: r,
                                  type: "error",
                                  time: 4e3,
                                }),
                                n.abrupt("return")
                              );
                            case 12:
                              e.onDelete();
                            case 13:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 7]]
                    );
                  })
                ),
                children: "Delete",
              });
            },
          });
        }),
        H = n("Gbtx"),
        W = n("igWl"),
        Q = n("W27C"),
        X = n("8bdv");
      function $() {
        var e = Object(u.a)([
          "\n    fragment UserPostHeaderUser on User {\n      id\n      image\n      isHacker\n      isModerator: hasRole(role: MODERATOR)\n      isAdmin: hasRole(role: ADMIN)\n      ...DepreciatedUserLabelUser\n      ...UserLinkUser\n    }\n    ",
          "\n    ",
          "\n  ",
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      var G = function (e) {
        var t = e.user;
        return Object(r.jsxs)("div", {
          className: "jsx-784245287 user-post-header",
          children: [
            t
              ? Object(r.jsx)("div", {
                  className: "jsx-784245287 user-post-image-container",
                  children: Object(r.jsx)(W.a, {
                    username: t.username,
                    children: Object(r.jsx)(Q.b, {
                      user: t,
                      children: Object(r.jsx)("a", {
                        className: "jsx-784245287 user-post-image",
                        children: Object(r.jsx)(H.a, {
                          url: t.image,
                          hackerBadge: t.isHacker,
                        }),
                      }),
                    }),
                  }),
                })
              : Object(r.jsx)("div", {
                  className: "jsx-784245287 user-post-image",
                  children: Object(r.jsx)(H.a, {}),
                }),
            t
              ? Object(r.jsx)(W.a, {
                  username: t.username,
                  children: Object(r.jsx)(X.b, {
                    user: t,
                    adminBadge: t.isAdmin || t.isModerator,
                  }),
                })
              : Object(r.jsx)(X.b, {}),
            Object(r.jsx)(p.a, {
              id: "784245287",
              children: [
                ".user-post-header.jsx-784245287{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;}",
                ".user-post-image-container.jsx-784245287{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:10px;}",
                ".user-post-image.jsx-784245287{display:block;border-bottom:0 none;}",
              ],
            }),
          ],
        });
      };
      G.fragments = { user: j()($(), Q.b.fragments.user, X.b.fragments.user) };
      var J = G,
        Y = n("iiuX"),
        Z = n("Dy7O"),
        ee = n("Pwy/"),
        te = n("EcHa"),
        ne = n("jMDP"),
        re = n("yVCx"),
        oe = n("ZY4G"),
        ie = n("kFyI"),
        ae = n("vKT1"),
        ce = n("CIYy"),
        se = n("IdsG");
      function le(e, t) {
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
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function de() {
        var e = Object(u.a)([
          "\n  mutation updatePost($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      post {\n        id\n        ...PostSettingsPost\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(u.a)([
          "\n  query post($id: Int!) {\n    post(id: $id) {\n      id\n      ...PostSettingsPost\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(u.a)([
          "\n    fragment PostSettingsPost on Post {\n      id\n      canPin\n      canSetType\n      canLock\n      canHide\n      canChangeBoard\n      canComment\n      isAnnouncement\n      isPinned\n      isLocked\n      isHidden\n      board {\n        id\n        name\n      }\n    }\n  ",
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      var be = { post: j()(fe()) },
        je = j()(pe(), be.post),
        he = j()(de(), be.post),
        me = function (e) {
          var t = e.post,
            n = e.close;
          return Object(r.jsx)(k.Mutation, {
            mutation: he,
            children: function (e) {
              var o = (function () {
                var n = Object(w.a)(
                  O.a.mark(function n(r) {
                    return O.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              e({ variables: { input: ue({ id: t.id }, r) } })
                            );
                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })();
              return Object(r.jsxs)("div", {
                className: "jsx-2792357410 post-settings",
                children: [
                  Object(r.jsx)("a", {
                    onClick: function (e) {
                      e.preventDefault(), n();
                    },
                    className: "jsx-2792357410 post-settings-close",
                    children: "\xd7",
                  }),
                  t.canPin
                    ? Object(r.jsx)("div", {
                        className: "jsx-2792357410 post-settings-row",
                        children: Object(r.jsxs)("label", {
                          className: "jsx-2792357410",
                          children: [
                            Object(r.jsx)("input", {
                              checked: t.isPinned,
                              value: t.isPinned,
                              type: "checkbox",
                              onChange: function (e) {
                                return o({ isPinned: e.target.checked });
                              },
                              className: "jsx-2792357410",
                            }),
                            Object(r.jsx)(se.a, { children: "Pin post" }),
                          ],
                        }),
                      })
                    : null,
                  t.canSetType
                    ? Object(r.jsx)("div", {
                        className: "jsx-2792357410 post-settings-row",
                        children: Object(r.jsxs)("label", {
                          className: "jsx-2792357410",
                          children: [
                            Object(r.jsx)("input", {
                              checked: t.isAnnouncement,
                              value: t.isAnnouncement,
                              type: "checkbox",
                              onChange: function (e) {
                                return o({
                                  postType: e.target.checked
                                    ? "announcement"
                                    : null,
                                });
                              },
                              className: "jsx-2792357410",
                            }),
                            Object(r.jsx)(se.a, {
                              children: "Mark as announcement",
                            }),
                          ],
                        }),
                      })
                    : null,
                  t.canLock
                    ? Object(r.jsx)("div", {
                        className: "jsx-2792357410 post-settings-row",
                        children: Object(r.jsxs)("label", {
                          className: "jsx-2792357410",
                          children: [
                            Object(r.jsx)("input", {
                              checked: t.isLocked,
                              value: t.isLocked,
                              type: "checkbox",
                              onChange: function (e) {
                                return o({ isLocked: e.target.checked });
                              },
                              className: "jsx-2792357410",
                            }),
                            Object(r.jsx)(se.a, { children: "Lock post" }),
                          ],
                        }),
                      })
                    : null,
                  t.canHide
                    ? Object(r.jsx)("div", {
                        className: "jsx-2792357410 post-settings-row",
                        children: Object(r.jsxs)("label", {
                          className: "jsx-2792357410",
                          children: [
                            Object(r.jsx)("input", {
                              checked: t.isHidden,
                              value: t.isHidden,
                              type: "checkbox",
                              onChange: function (e) {
                                return o({ isHidden: e.target.checked });
                              },
                              className: "jsx-2792357410",
                            }),
                            Object(r.jsx)(se.a, {
                              children: "Hide post from listing",
                            }),
                          ],
                        }),
                      })
                    : null,
                  t.canChangeBoard
                    ? Object(r.jsxs)("div", {
                        className: "jsx-2792357410 post-settings-row",
                        children: [
                          Object(r.jsx)("div", {
                            className: "jsx-2792357410 post-settings-row-title",
                            children: Object(r.jsx)(se.a, {
                              children: "Change Board (requires reload)",
                            }),
                          }),
                          Object(r.jsx)(ce.a, {
                            board: t.board,
                            onBoardSelected: function (e) {
                              return o({ boardId: e.id });
                            },
                          }),
                        ],
                      })
                    : null,
                  Object(r.jsx)(p.a, {
                    id: "2792357410",
                    children: [
                      ".post-settings.jsx-2792357410{padding:10px 20px 20px;margin-bottom:40px;background-color:var(--color-background-2);position:relative;}",
                      ".post-settings-row.jsx-2792357410{margin-top:10px;}",
                      ".post-settings-row-title.jsx-2792357410{padding:10px 0;}",
                      ".post-settings-close.jsx-2792357410{position:absolute;display:block;padding:10px;top:0;right:0;font-size:24px;line-height:16px;border-bottom:none;}",
                      "label.jsx-2792357410{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                      "label.jsx-2792357410 input.jsx-2792357410{margin-right:5px;}",
                    ],
                  }),
                ],
              });
            },
          });
        },
        xe = function (e) {
          var t = e.postId,
            n = Object(v.a)(e, ["postId"]);
          return Object(r.jsx)(k.Query, {
            query: je,
            variables: { id: t },
            children: function (e) {
              var t = e.data;
              return e.error
                ? Object(r.jsx)("p", { children: "Something when wrong" })
                : t && t.post
                ? Object(r.jsx)(me, ue({ post: t.post }, n))
                : Object(r.jsx)(E.a, {});
            },
          });
        },
        ge = n("/Rnh"),
        ve = function () {
          return Object(r.jsxs)("div", {
            className: p.a.dynamic([
              ["560596012", [g.a.activeYellow, g.a.white]],
            ]),
            children: [
              "If your question has been answered, select it below.",
              Object(r.jsx)(p.a, {
                id: "560596012",
                dynamic: [g.a.activeYellow, g.a.white],
                children: [
                  "div.__jsx-style-dynamic-selector{margin-top:20px;margin-bottom:20px;background-color:"
                    .concat(g.a.activeYellow, ";color:")
                    .concat(g.a.white, ";border-radius:3px;padding:10px;}"),
                ],
              }),
            ],
          });
        },
        ye = n("V6K1"),
        Oe = n("tZOq"),
        we = n("Mjqs"),
        ke = n("SXYe"),
        Ce = n("YFqc"),
        Se = n.n(Ce),
        Pe = n("T0nv");
      function Ee(e, t) {
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
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ee(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ee(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function _e(e) {
        var t = e.replId,
          n = Object(Oe.vb)({ variables: { replId: t } }).data,
          o =
            "Repl" === (null === n || void 0 === n ? void 0 : n.repl.__typename)
              ? n.repl
              : null,
          i = (null === n || void 0 === n ? void 0 : n.currentUser) || void 0;
        return Object(r.jsxs)("div", {
          className:
            p.a.dynamic([["667686860", [ke.a.tabletMax + 180]]]) +
            " post-repl-viewer",
          children: [
            Object(r.jsx)(ye.a, {
              level: 4,
              align: "center",
              children: o
                ? Object(r.jsx)(
                    Se.a,
                    Re(
                      Re(
                        {},
                        o.currentUserPermissions.containerWrite
                          ? Object(Pe.c)(o)
                          : Object(Pe.b)(o)
                      ),
                      {},
                      {
                        children: Object(r.jsx)("a", {
                          className: p.a.dynamic([
                            ["667686860", [ke.a.tabletMax + 180]],
                          ]),
                          children: o.title,
                        }),
                      }
                    )
                  )
                : "Loading...",
            }),
            Object(r.jsx)("div", {
              className:
                p.a.dynamic([["667686860", [ke.a.tabletMax + 180]]]) +
                " repl-viewer",
              children: o
                ? Object(r.jsx)(we.a, { repl: o, currentUser: i })
                : null,
            }),
            Object(r.jsx)(p.a, {
              id: "667686860",
              dynamic: [ke.a.tabletMax + 180],
              children: [
                ".post-repl-viewer.__jsx-style-dynamic-selector{margin:var(--spacing-3) 0;}",
                "a.__jsx-style-dynamic-selector{color:var(--color-primary-1);}",
                ".repl-viewer.__jsx-style-dynamic-selector{margin-top:var(--spacing-1);background-color:var(--color-background-3);border-radius:var(--border-radius-2);display:grid;height:70vh;min-height:400px;max-height:600px;}",
                "@media screen and (min-width:".concat(
                  ke.a.tabletMax + 180,
                  "px){.repl-viewer.__jsx-style-dynamic-selector{margin-left:-150px;margin-right:-150px;}}"
                ),
              ],
            }),
          ],
        });
      }
      function Ie(e, t) {
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
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ie(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function De(e) {
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
          return Object(s.a)(this, n);
        };
      }
      function Te() {
        var e = Object(u.a)([
          '\n    fragment PostDetailPost on Post {\n      id\n      title\n      body\n      timeCreated\n      canEdit\n      canComment\n      canPin\n      canSetType\n      canReport\n      hasReported\n      isAnnouncement\n      isLocked\n      showHosted\n      isAuthor\n      commentCount\n      isAnswered\n      isAnswerable\n      voteCount\n      canVote\n      hasVoted\n      user {\n        id\n        ...UserPostHeaderUser\n      }\n      repl {\n        id\n        embedUrl: url(lite: true)\n        hostedUrl\n        title\n        flagReplTalkSpotlightViewer: gateOnOwner(\n          feature: "flag-repl-talk-spotlight-viewer"\n        )\n      }\n      board {\n        id\n        url\n        slug\n        titleCta\n        bodyCta\n        buttonCta\n      }\n    }\n    ',
          "\n  ",
        ]);
        return (
          (Te = function () {
            return e;
          }),
          e
        );
      }
      var Ue = { post: j()(Te(), J.fragments.user) },
        Me = (function (e) {
          Object(c.a)(n, e);
          var t = De(n);
          function n(e) {
            var r;
            return (
              Object(i.a)(this, n),
              ((r = t.call(this, e)).onDelete = function () {
                var e = r.props.post;
                m.a.push(
                  { pathname: "/board", query: { slug: e.board.slug } },
                  e.board.url
                );
              }),
              (r.onPostBodyClick = function (e) {
                var t = r.state.expandedReplUrl,
                  n = e.target;
                !e.metaKey &&
                  n instanceof window.HTMLAnchorElement &&
                  n.href &&
                  n.href !== t &&
                  Object(ae.b)(n.href) &&
                  (e.preventDefault(), r.setState({ expandedReplUrl: n.href }));
              }),
              (r.toggleEdit = function (e) {
                r.setState({ isEditing: e });
              }),
              (r.updateCacheForReportMutation = function (e) {
                var t = {
                    id: Object(x.a)(r.props.post),
                    fragment: Ue.post,
                    fragmentName: "PostDetailPost",
                  },
                  n = e.readFragment(t);
                (n.hasReported = !0),
                  e.writeFragment(Ne(Ne({}, t), {}, { data: n }));
              }),
              (r.state = {
                isEditing: !1,
                isReporting: !1,
                showSettings: !1,
                expandedReplUrl: void 0,
              }),
              r
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.post,
                    o = t.hideCommentForm,
                    i = t.updateCacheForCommentMuation,
                    a = this.state,
                    c = a.isEditing,
                    s = a.isReporting,
                    l = a.showSettings,
                    u = a.expandedReplUrl;
                  if (
                    (!u &&
                      n &&
                      n.repl &&
                      (u = n.showHosted ? n.repl.hostedUrl : n.repl.embedUrl),
                    c)
                  )
                    return Object(r.jsx)(q, {
                      titleCta: n.board.titleCta,
                      bodyCta: n.board.bodyCta,
                      buttonCta: n.board.buttonCta,
                      onEdit: function () {
                        return e.toggleEdit(!1);
                      },
                      postId: n.id,
                    });
                  var d = n.hasReported
                      ? Object(r.jsx)("span", { children: "Reported" })
                      : Object(r.jsx)(V.a, {
                          onClick: function () {
                            return e.setState({ isReporting: !0 });
                          },
                          children: "Report",
                        }),
                    f = Boolean(n.repl && n.repl.flagReplTalkSpotlightViewer);
                  return Object(r.jsxs)("div", {
                    className: p.a.dynamic([
                      ["2534132685", [g.a.blue, g.a.blue]],
                    ]),
                    children: [
                      n.isAnswerable &&
                      !n.isAnswered &&
                      n.isAuthor &&
                      n.commentCount > 0
                        ? Object(r.jsx)(ve, {})
                        : null,
                      Object(r.jsxs)("div", {
                        className:
                          p.a.dynamic([["2534132685", [g.a.blue, g.a.blue]]]) +
                          " board-post-detail-header",
                        children: [
                          n.isAnnouncement
                            ? Object(r.jsx)(oe.a, {})
                            : Object(r.jsx)(Z.a, { post: n }),
                          Object(r.jsx)("div", {
                            className:
                              p.a.dynamic([
                                ["2534132685", [g.a.blue, g.a.blue]],
                              ]) + " board-post-detail-title",
                            children: Object(r.jsx)(ye.a, {
                              level: 5,
                              children: n.title,
                            }),
                          }),
                        ],
                      }),
                      Object(r.jsxs)("div", {
                        className: p.a.dynamic([
                          ["2534132685", [g.a.blue, g.a.blue]],
                        ]),
                        children: [
                          Object(r.jsx)(J, { user: n.user }),
                          Object(r.jsx)(Y.a, {
                            text: n.body,
                            onClick: this.onPostBodyClick,
                          }),
                          Object(r.jsxs)(ne.a, {
                            children: [
                              Object(r.jsx)(re.a, { date: n.timeCreated }),
                              n.canEdit
                                ? Object(r.jsx)(V.a, {
                                    onClick: function () {
                                      return e.setState({ isEditing: !0 });
                                    },
                                    children: "Edit",
                                  })
                                : null,
                              n.canReport ? d : null,
                              n.canEdit
                                ? Object(r.jsx)(B, {
                                    onDelete: this.onDelete,
                                    id: n.id,
                                    children: "Delete",
                                  })
                                : null,
                              n.canPin || n.canSetType
                                ? Object(r.jsx)(V.a, {
                                    onClick: function () {
                                      return e.setState({ showSettings: !0 });
                                    },
                                    children: "Settings",
                                  })
                                : null,
                            ],
                          }),
                          l
                            ? Object(r.jsx)(xe, {
                                postId: n.id,
                                close: function () {
                                  return e.setState({ showSettings: !1 });
                                },
                              })
                            : null,
                          s && n.canReport
                            ? Object(r.jsx)(te.a, {
                                postId: n.id,
                                onCreate: function () {
                                  return e.setState({ isReporting: !1 });
                                },
                                onCancel: function () {
                                  return e.setState({ isReporting: !1 });
                                },
                                mutation: ge.b,
                                updateCacheForReportMutation:
                                  this.updateCacheForReportMutation,
                                autofocus: !0,
                              })
                            : null,
                          u && !f ? Object(r.jsx)(ae.a, { url: u }) : null,
                          f && n.repl
                            ? Object(r.jsx)(_e, { replId: n.repl.id })
                            : null,
                          n.isLocked
                            ? Object(r.jsxs)("div", {
                                className:
                                  p.a.dynamic([
                                    ["2534132685", [g.a.blue, g.a.blue]],
                                  ]) + " board-post-detail-locked",
                                children: [
                                  Object(r.jsx)(ie.a, {}),
                                  Object(r.jsx)("div", {
                                    className: p.a.dynamic([
                                      ["2534132685", [g.a.blue, g.a.blue]],
                                    ]),
                                    children: "This post has been locked",
                                  }),
                                ],
                              })
                            : null,
                          n.canComment && !o
                            ? Object(r.jsx)(ee.a, {
                                mutation: ge.a,
                                updateCacheForCommentMuation: i,
                                postId: n.id,
                              })
                            : null,
                        ],
                      }),
                      Object(r.jsx)(p.a, {
                        id: "2534132685",
                        dynamic: [g.a.blue, g.a.blue],
                        children: [
                          ".board-post-detail-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:20px;margin-left:5px;min-height:47px;}",
                          ".board-post-detail-title.__jsx-style-dynamic-selector{margin-left:10px;}",
                          ".board-post-detail-locked.__jsx-style-dynamic-selector{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid ".concat(
                            g.a.blue,
                            ";}"
                          ),
                          ".board-post-detail-locked.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{margin-left:10px;font-size:16px;color:".concat(
                            g.a.blue,
                            ";}"
                          ),
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
      Me.fragments = Ue;
      t.a = Me;
    },
    RF6G: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return this.block(e) + "\n";
      };
    },
    RGhV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var r = n("z7pX"),
        o = n("cpVT");
      function i(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e, t) {
        return function (n, o) {
          if (!o || !o.fetchMoreResult) return n;
          var i = o.fetchMoreResult,
            c = n ? n[e][t].items : [],
            s = a({}, i);
          return (
            (s[e][t].items = [].concat(
              Object(r.a)(c),
              Object(r.a)(i[e][t].items)
            )),
            s
          );
        };
      }
      function s(e) {
        return function (t, n) {
          if (!n || !n.fetchMoreResult) return t;
          var o = n.fetchMoreResult,
            i = t ? t[e].items : [],
            c = a({}, o);
          return (
            (c[e].items = [].concat(Object(r.a)(i), Object(r.a)(o[e].items))), c
          );
        };
      }
    },
    RsGd: function (e, t, n) {
      "use strict";
      var r = n("U6jy"),
        o = n("4MqD");
      function i(e, t) {
        (this.inLink = !1),
          (this.inTable = !1),
          (this.tree = e),
          (this.file = t),
          (this.options = r(this.options)),
          this.setOptions({});
      }
      e.exports = i;
      var a = i.prototype;
      (a.enterLink = o("inLink", !1)),
        (a.enterTable = o("inTable", !1)),
        (a.enterLinkReference = n("8+hW")),
        (a.options = n("wPut")),
        (a.setOptions = n("c8bx")),
        (a.compile = n("2gPU")),
        (a.visit = n("lbOS")),
        (a.all = n("UtUC")),
        (a.block = n("7WUS")),
        (a.visitOrderedItems = n("lmVN")),
        (a.visitUnorderedItems = n("FNCK")),
        (a.visitors = {
          root: n("RF6G"),
          text: n("u5aG"),
          heading: n("cVm5"),
          paragraph: n("lvaz"),
          blockquote: n("QT57"),
          list: n("4j5h"),
          listItem: n("iE2v"),
          inlineCode: n("6AB2"),
          code: n("Uq5U"),
          html: n("6NTm"),
          thematicBreak: n("BHRP"),
          strong: n("WAHM"),
          emphasis: n("ykE5"),
          break: n("3QsF"),
          delete: n("Kd28"),
          link: n("Kmdt"),
          linkReference: n("Z2UE"),
          imageReference: n("eoFk"),
          definition: n("VZnA"),
          image: n("Lxj7"),
          footnote: n("5r9/"),
          footnoteReference: n("MZ5i"),
          footnoteDefinition: n("U7Gb"),
          table: n("2Pmd"),
          tableCell: n("+HSz"),
        });
    },
    SYH8: function (e, t, n) {
      "use strict";
      var r = [
        ".jsx-3956592551{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;line-height:24px;font-size:inherit;}",
      ];
      (r.__hash = "3956592551"), (t.a = r);
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
        i = n("q1tI"),
        a = l(i),
        c = l(n("17x9")),
        s = l(n("oOwn"));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t, n) {
        var r = (0, s.default)(t, t.selectionEnd),
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
                  i = n.onCancel,
                  a = n.onType,
                  c = n.keyboardEvent,
                  s = e.which,
                  l = e.shiftKey,
                  d = e.metaKey,
                  p = e.ctrlKey,
                  f = e.target.selectionStart,
                  b = this.state,
                  j = b.triggered,
                  h = b.triggerStartPosition;
                if (j) {
                  if (8 === s && f <= h)
                    return (
                      this.setState(
                        { triggered: !1, triggerStartPosition: null },
                        function () {
                          setTimeout(function () {
                            i(u("cancel", t.element));
                          }, 0);
                        }
                      ),
                      null
                    );
                  setTimeout(function () {
                    a(u("typing", t.element, h));
                  }, 0);
                } else if (
                  "function" === typeof r
                    ? r(e)
                    : s === r.keyCode &&
                      l === !!r.shiftKey &&
                      p === !!r.ctrlKey &&
                      d === !!r.metaKey
                )
                  return (
                    this.setState(
                      {
                        triggered: !0,
                        triggerStartPosition: f + ("onKeyDown" === c ? 1 : 0),
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
                  i =
                    (t.trigger,
                    t.onStart,
                    t.onCancel,
                    t.onType,
                    t.endTrigger,
                    t.keyboardEvent),
                  c = (function (e, t) {
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
                  (c[i] = this.handleTrigger),
                  a.default.createElement(
                    "div",
                    r({ role: "textbox", tabIndex: -1 }, c),
                    n
                      ? o
                      : a.default.Children.map(
                          this.props.children,
                          function (t) {
                            return a.default.cloneElement(t, {
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
      })(i.Component);
      (d.propTypes = {
        trigger: c.default.oneOfType([
          c.default.func,
          c.default.shape({
            keyCode: c.default.number,
            shiftKey: c.default.bool,
            ctrlKey: c.default.bool,
            metaKey: c.default.bool,
          }),
        ]),
        onStart: c.default.func,
        onCancel: c.default.func,
        onType: c.default.func,
        endTrigger: c.default.func,
        children: c.default.element.isRequired,
        elementRef: c.default.element,
        keyboardEvent: c.default.oneOf(["onKeyDown", "onKeyUp"]),
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
    TxNz: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n("vJKn"),
        o = n.n(r),
        i = n("rg98"),
        a = n("xvhg"),
        c = n("q1tI"),
        s = n("G5Ub"),
        l = n("n/dw");
      function u(e) {
        var t = e.onUploadPreview,
          n = e.onUpload,
          r = e.onError,
          u = c.useState(!1),
          d = Object(a.a)(u, 2),
          p = d[0],
          f = d[1];
        return {
          isLoading: p,
          uploadImage: c.useCallback(
            (function () {
              var e = Object(i.a)(
                o.a.mark(function e(i) {
                  var a, c, u, d, p, b;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return f(!0), (e.next = 3), Object(l.b)(i);
                          case 3:
                            if (
                              null !== (a = e.sent) &&
                              void 0 !== a &&
                              a.result
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              r(new Error("Could not read file")),
                              e.abrupt("return")
                            );
                          case 7:
                            if (!(i.size > 75e4)) {
                              e.next = 10;
                              break;
                            }
                            return (
                              r(
                                new Error(
                                  "This image is over the 750kb maximum"
                                )
                              ),
                              e.abrupt("return")
                            );
                          case 10:
                            return (
                              t({ dataUrl: a.result }),
                              (c = null),
                              (e.prev = 12),
                              (e.next = 15),
                              Object(s.d)("/data/images/upload", {
                                image: a.result,
                              })
                            );
                          case 15:
                            (c = e.sent), (e.next = 23);
                            break;
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(12)),
                              (u = e.t0.message
                                .toLowerCase()
                                .includes("entity too large")
                                ? "This image is over the 1mb maximum"
                                : "Something went wrong"),
                              r(new Error(u)),
                              e.abrupt("return")
                            );
                          case 23:
                            if (
                              ((p = (d = c).id),
                              (b = d.url),
                              "number" === typeof p)
                            ) {
                              e.next = 26;
                              break;
                            }
                            throw new Error("Expected id");
                          case 26:
                            if ("string" === typeof b) {
                              e.next = 28;
                              break;
                            }
                            throw new Error("Expected url");
                          case 28:
                            f(!1), n({ id: p, url: b });
                          case 30:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[12, 18]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [r, n, t]
          ),
        };
      }
    },
    U7Gb: function (e, t, n) {
      "use strict";
      var r = n("RjOF");
      e.exports = function (e) {
        var t = e.identifier.toLowerCase(),
          n = this.all(e).join("\n\n" + r(" ", 4));
        return "[^" + t + "]: " + n;
      };
    },
    Uq5U: function (e, t, n) {
      "use strict";
      var r = n("LByj"),
        o = n("RjOF"),
        i = n("Kd6s");
      e.exports = function (e, t) {
        var n,
          a = this,
          c = e.value,
          s = a.options,
          l = s.fence,
          u = a.encode(e.lang || "", e);
        if (!u && !s.fences && c)
          return (
            t &&
              "listItem" === t.type &&
              "tab" !== s.listItemIndent &&
              s.pedantic &&
              a.file.fail(
                "Cannot indent code properly. See http://git.io/vgFvT",
                e.position
              ),
            i(c, 1)
          );
        return (n = o(l, Math.max(r(c, l) + 1, 3))) + u + "\n" + c + "\n" + n;
      };
    },
    UtUC: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = e.children,
          n = t.length,
          r = [],
          o = -1;
        for (; ++o < n; ) r[o] = this.visit(t[o], e);
        return r;
      };
    },
    V4w5: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("cpVT"),
        o = n("nKUr"),
        i = (n("q1tI"), n("pDQI"));
      function a(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e) {
        return Object(o.jsxs)(
          i.a,
          c(
            c({ strokeWidth: 2 }, e),
            {},
            {
              children: [
                Object(o.jsx)("path", {
                  d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(o.jsx)("path", {
                  d: "M17 8L12 3L7 8",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                Object(o.jsx)("path", {
                  d: "M12 3V15",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }
          )
        );
      }
    },
    VZnA: function (e, t, n) {
      "use strict";
      var r = n("vgqm"),
        o = n("2oNz");
      e.exports = function (e) {
        var t = r(e.url);
        e.title && (t += " " + o(e.title));
        return "[" + e.identifier + "]: " + t;
      };
    },
    WAHM: function (e, t, n) {
      "use strict";
      var r = n("RjOF");
      e.exports = function (e) {
        var t = r(this.options.strong, 2);
        return t + this.all(e).join("") + t;
      };
    },
    "X0/w": function (e, t, n) {
      "use strict";
      var r = n("1VtT"),
        o = n("fUUT"),
        i = n("ZMY3");
      e.exports = r().use(o).use(i).freeze();
    },
    XpCD: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      }),
        n.d(t, "b", function () {
          return y;
        });
      var r = n("cpVT"),
        o = n("nKUr"),
        i = n("dhJC"),
        a = n("H+61"),
        c = n("UlJF"),
        s = n("7LId"),
        l = n("VIvw"),
        u = n("iHvq"),
        d = n("q1tI"),
        p = n("2SQs"),
        f = n.n(p),
        b = n("17x9"),
        j = n.n(b),
        h = n("BvvR");
      function m(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
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
      var v = (function (e) {
        Object(s.a)(n, e);
        var t = g(n);
        function n() {
          var e;
          Object(a.a)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
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
          Object(c.a)(n, [
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
                  r = Object(i.a)(e, ["Component", "children"]);
                return Object(o.jsx)(
                  t,
                  x(
                    x({}, f()(r, ["onSubmit"])),
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
      (v.childContextTypes = { validatedForm: j.a.object }),
        (v.defaultProps = { Component: "form" });
      var y = (function (e) {
        Object(s.a)(n, e);
        var t = g(n);
        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(c.a)(n, [
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
                  x(
                    x({}, f()(this.props, ["onValidation", "ref"])),
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
      (y.contextTypes = { validatedForm: j.a.object.isRequired }),
        (y.defaultProps = { theme: "replitLight" });
    },
    Z2UE: function (e, t, n) {
      "use strict";
      var r = n("jqI+"),
        o = n("cQQv");
      e.exports = function (e) {
        var t = this,
          n = e.referenceType,
          i = t.enterLinkReference(t, e),
          a = t.all(e).join("");
        i(),
          ("shortcut" === n || "collapsed" === n) && (a = r(a, e.identifier));
        return "[" + a + "]" + o(e);
      };
    },
    ZMY3: function (e, t, n) {
      "use strict";
      var r = n("5t69"),
        o = n("U6jy"),
        i = n("RsGd");
      function a(e) {
        var t = r(i);
        (t.prototype.options = o(
          t.prototype.options,
          this.data("settings"),
          e
        )),
          (this.Compiler = t);
      }
      (e.exports = a), (a.Compiler = i);
    },
    ZY4G: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("EQ2k")),
        c = function (e) {
          var t = e.stroke,
            n = e.width,
            o = e.height;
          return Object(r.jsxs)("div", {
            className: i.a.dynamic([
              ["1937252334", [n || "auto", o || "auto"]],
            ]),
            children: [
              Object(r.jsx)("svg", {
                width: "53px",
                height: "37px",
                viewBox: "0 0 53 37",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: i.a.dynamic([
                  ["1937252334", [n || "auto", o || "auto"]],
                ]),
                children: Object(r.jsx)("g", {
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: i.a.dynamic([
                    ["1937252334", [n || "auto", o || "auto"]],
                  ]),
                  children: Object(r.jsx)("g", {
                    stroke: t,
                    strokeWidth: "2",
                    className: i.a.dynamic([
                      ["1937252334", [n || "auto", o || "auto"]],
                    ]),
                    children: Object(r.jsxs)("g", {
                      className: i.a.dynamic([
                        ["1937252334", [n || "auto", o || "auto"]],
                      ]),
                      children: [
                        Object(r.jsx)("polygon", {
                          points: "41.73 29.68 5 23 5 7 41.73 0.32",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                        Object(r.jsx)("path", {
                          d: "M11,6 L11,31.25 C11.0036168,33.6295084 12.7465542,35.6487651 15.1,36 L17.5,36",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                        Object(r.jsx)("path", {
                          d: "M5,9 L5,21 C2.23857625,21 8.8817842e-16,18.7614237 8.8817842e-16,16 L8.8817842e-16,14 C8.8817842e-16,11.2385763 2.23857625,9 5,9 Z",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                        Object(r.jsx)("path", {
                          d: "M48,15 L52,15",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                        Object(r.jsx)("path", {
                          d: "M47.44,10.25 L50.56,7.75",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                        Object(r.jsx)("path", {
                          d: "M50.56,22.25 L47.44,19.75",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(r.jsx)(i.a, {
                id: "1937252334",
                dynamic: [n || "auto", o || "auto"],
                children: [
                  "svg.__jsx-style-dynamic-selector{display:block;width:"
                    .concat(n || "auto", ";height:")
                    .concat(o || "auto", ";}"),
                ],
              }),
            ],
          });
        };
      (c.defaultProps = { stroke: a.a.yellow, width: "40px" }), (t.a = c);
    },
    Zd1B: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = "function" === typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        d = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        b = r ? Symbol.for("react.suspense") : 60113,
        j = r ? Symbol.for("react.memo") : 60115,
        h = r ? Symbol.for("react.lazy") : 60116;
      function m(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case d:
                case p:
                case a:
                case s:
                case c:
                case b:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case h:
            case j:
            case i:
              return t;
          }
        }
      }
      function x(e) {
        return m(e) === p;
      }
      (t.typeOf = m),
        (t.AsyncMode = d),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = o),
        (t.ForwardRef = f),
        (t.Fragment = a),
        (t.Lazy = h),
        (t.Memo = j),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = c),
        (t.Suspense = b),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === a ||
            e === p ||
            e === s ||
            e === c ||
            e === b ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === j ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === f))
          );
        }),
        (t.isAsyncMode = function (e) {
          return x(e) || m(e) === d;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return m(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return m(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === o;
        }),
        (t.isForwardRef = function (e) {
          return m(e) === f;
        }),
        (t.isFragment = function (e) {
          return m(e) === a;
        }),
        (t.isLazy = function (e) {
          return m(e) === h;
        }),
        (t.isMemo = function (e) {
          return m(e) === j;
        }),
        (t.isPortal = function (e) {
          return m(e) === i;
        }),
        (t.isProfiler = function (e) {
          return m(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return m(e) === c;
        }),
        (t.isSuspense = function (e) {
          return m(e) === b;
        });
    },
    Zj0H: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return p;
        });
      var r = n("jT3O"),
        o = n("lTCR"),
        i = n.n(o),
        a = n("R54M"),
        c = n("/Rnh"),
        s = n("zhTl");
      function l() {
        var e = Object(r.a)([
          "\n  query boardBySlug($slug: String!) {\n    board: boardBySlug(slug: $slug) {\n      id\n      name\n      description\n      url\n      cta\n      titleCta\n      bodyCta\n      buttonCta\n      replRequired\n      canPost\n      isLocked\n      template\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = Object(r.a)([
          "\n  query post($id: Int!, $commentsOrder: String, $commentsAfter: String) {\n    post(id: $id) {\n      id\n      title\n      body\n      isAnnouncement\n      url\n      isAnswerable\n      isHidden\n      answeredBy {\n        id\n        ...PostAnsweredCardUser\n      }\n      answer {\n        id\n        ...PostAnsweredCardComment\n      }\n      board {\n        id\n        url\n        description\n        slug\n      }\n      comments(order: $commentsOrder, after: $commentsAfter) {\n        pageInfo {\n          nextCursor\n        }\n        items {\n          id\n          ...CommentDetailComment\n          comments {\n            id\n            ...CommentDetailComment\n          }\n        }\n      }\n      ...PostDetailPost\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var d = i()(u(), a.b.post, c.d.comment, s.b.user, s.b.answer),
        p = i()(l());
    },
    b04V: function (e, t, n) {
      "use strict";
      var r = n("H+61"),
        o = n("UlJF"),
        i = n("7LId"),
        a = n("VIvw"),
        c = n("iHvq"),
        s = n("nKUr"),
        l = n("MX0m"),
        u = n.n(l),
        d = n("q1tI");
      function p(e) {
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
          return Object(a.a)(this, n);
        };
      }
      var f = function () {
          return Object(s.jsx)("svg", {
            width: "6px",
            height: "9px",
            viewBox: "0 0 6 9",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(s.jsx)("g", {
              children: Object(s.jsxs)("g", {
                fill: "#FFCC01",
                children: [
                  Object(s.jsx)("rect", {
                    x: "0",
                    y: "0",
                    width: "3",
                    height: "3",
                  }),
                  Object(s.jsx)("rect", {
                    x: "3",
                    y: "3",
                    width: "3",
                    height: "3",
                  }),
                  Object(s.jsx)("rect", {
                    x: "0",
                    y: "6",
                    width: "3",
                    height: "3",
                  }),
                ],
              }),
            }),
          });
        },
        b = (function (e) {
          Object(i.a)(n, e);
          var t = p(n);
          function n() {
            return Object(r.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.setTitleText &&
                    this.props.setTitleText("Not found");
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(s.jsxs)("div", {
                    className: "jsx-4199638957 not-found",
                    children: [
                      Object(s.jsxs)("div", {
                        className: "jsx-4199638957 not-found-container",
                        children: [
                          Object(s.jsx)("div", {
                            className: "jsx-4199638957 not-found-fourofour",
                            children: Object(s.jsx)("span", {
                              className: "jsx-4199638957",
                              children: "404",
                            }),
                          }),
                          Object(s.jsx)("div", {
                            className:
                              "jsx-4199638957 not-found-error-text-container",
                            children: Object(s.jsxs)("div", {
                              className: "jsx-4199638957",
                              children: [
                                Object(s.jsxs)("div", {
                                  className:
                                    "jsx-4199638957 not-found-error-text",
                                  children: [
                                    Object(s.jsx)("div", {
                                      className:
                                        "jsx-4199638957 not-found-prompt",
                                      children: Object(s.jsx)(f, {}),
                                    }),
                                    "Not found error: ",
                                    this.props.message,
                                    " ",
                                    Object(s.jsx)("br", {
                                      className: "jsx-4199638957",
                                    }),
                                  ],
                                }),
                                Object(s.jsxs)("div", {
                                  className:
                                    "jsx-4199638957 not-found-error-text-2",
                                  children: [
                                    "If you think this is a mistake please",
                                    " ",
                                    Object(s.jsx)(
                                      "a",
                                      {
                                        target: "_blank",
                                        href: "/bugs",
                                        className: "jsx-4199638957",
                                        children: "contact us",
                                      },
                                      "bugs"
                                    ),
                                    Object(s.jsx)("span", {
                                      className:
                                        "jsx-4199638957 not-found-cursor",
                                      children: "_",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(s.jsx)(u.a, {
                        id: "4199638957",
                        children: [
                          ".not-found.jsx-4199638957{background:rgb(14,22,40);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:rgb(63,64,63);min-height:calc(100vh - 60px);}",
                          ".not-found-container.jsx-4199638957{width:100%;margin:0 auto;}",
                          ".not-found-fourofour.jsx-4199638957{font-size:135px;margin-top:-50px;margin-bottom:25px;text-align:center;color:#0e1628;text-shadow:-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff, 1px 1px 0 #fff;cursor:default;}",
                          ".not-found-fourofour.jsx-4199638957>span.jsx-4199638957:hover{color:#fff;}",
                          ".not-found-error-text-container.jsx-4199638957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:550px;margin:0 auto;min-height:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",
                          ".not-found-error-text.jsx-4199638957,.not-found-error-text-2.jsx-4199638957{font-size:15px;line-height:25px;color:red;padding-left:21px;white-space:nowrap;overflow:hidden;}",
                          ".not-found-error-text.jsx-4199638957{position:relative;-webkit-animation:type-keyframes-jsx-4199638957 2.5s steps(60,end);animation:type-keyframes-jsx-4199638957 2.5s steps(60,end);}",
                          ".not-found-error-text-2.jsx-4199638957{-webkit-animation:type-keyframes2-jsx-4199638957 5s steps(60,end);animation:type-keyframes2-jsx-4199638957 5s steps(60,end);}",
                          ".not-found-prompt.jsx-4199638957{position:absolute;left:5px;top:-1px;}",
                          ".not-found-cursor.jsx-4199638957{color:rgb(255,255,255);-webkit-animation:blink-keyframes-jsx-4199638957 1s infinite;animation:blink-keyframes-jsx-4199638957 1s infinite;}",
                          ".not-found-error-text-2.jsx-4199638957 a.jsx-4199638957{color:rgb(255,255,255);-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}",
                          "@media (max-width:550px){.not-found-error-text-wrapper.jsx-4199638957,.not-found-error-text.jsx-4199638957,.not-found-error-text-2.jsx-4199638957{-webkit-animation:none;animation:none;width:auto;white-space:normal;overflow:auto;}}",
                          "@-webkit-keyframes type-keyframes-jsx-4199638957{0%{width:16px;}10%{width:16px;}100%{width:100%;}}",
                          "@keyframes type-keyframes-jsx-4199638957{0%{width:16px;}10%{width:16px;}100%{width:100%;}}",
                          "@-webkit-keyframes type-keyframes2-jsx-4199638957{0%{width:0%;}50%{width:0%;}100%{width:100%;}}",
                          "@keyframes type-keyframes2-jsx-4199638957{0%{width:0%;}50%{width:0%;}100%{width:100%;}}",
                          "@-webkit-keyframes blink-keyframes-jsx-4199638957{0%{opacity:1;}100%{opacity:0;}}",
                          "@keyframes blink-keyframes-jsx-4199638957{0%{opacity:1;}100%{opacity:0;}}",
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
      (b.defaultProps = {
        message: "This is not the page you're looking for.",
      }),
        (t.a = b);
    },
    boci: function (e, t, n) {
      var r, o, i;
      !(function (n, a) {
        "use strict";
        "object" === typeof e.exports
          ? (e.exports = a())
          : ((o = []),
            void 0 ===
              (i = "function" === typeof (r = a) ? r.apply(t, o) : r) ||
              (e.exports = i));
      })(0, function () {
        "use strict";
        var e = Object.prototype.toString;
        function t(e, t) {
          return null != e && Object.prototype.hasOwnProperty.call(e, t);
        }
        function n(e) {
          if (!e) return !0;
          if (o(e) && 0 === e.length) return !0;
          if ("string" !== typeof e) {
            for (var n in e) if (t(e, n)) return !1;
            return !0;
          }
          return !1;
        }
        function r(t) {
          return e.call(t);
        }
        var o =
          Array.isArray ||
          function (t) {
            return "[object Array]" === e.call(t);
          };
        function i(e) {
          var t = parseInt(e);
          return t.toString() === e ? t : e;
        }
        function a(e) {
          e = e || {};
          var a = function (e) {
            return Object.keys(a).reduce(function (t, n) {
              return (
                "create" === n ||
                  ("function" === typeof a[n] && (t[n] = a[n].bind(a, e))),
                t
              );
            }, {});
          };
          function c(n, r) {
            return (
              e.includeInheritedProps ||
              ("number" === typeof r && Array.isArray(n)) ||
              t(n, r)
            );
          }
          function s(e, t) {
            if (c(e, t)) return e[t];
          }
          function l(e, t, n, r) {
            if (("number" === typeof t && (t = [t]), !t || 0 === t.length))
              return e;
            if ("string" === typeof t) return l(e, t.split(".").map(i), n, r);
            var o = t[0],
              a = s(e, o);
            return 1 === t.length
              ? ((void 0 !== a && r) || (e[o] = n), a)
              : (void 0 === a &&
                  ("number" === typeof t[1] ? (e[o] = []) : (e[o] = {})),
                l(e[o], t.slice(1), n, r));
          }
          return (
            (a.has = function (n, r) {
              if (
                ("number" === typeof r
                  ? (r = [r])
                  : "string" === typeof r && (r = r.split(".")),
                !r || 0 === r.length)
              )
                return !!n;
              for (var a = 0; a < r.length; a++) {
                var c = i(r[a]);
                if (
                  !(
                    ("number" === typeof c && o(n) && c < n.length) ||
                    (e.includeInheritedProps ? c in Object(n) : t(n, c))
                  )
                )
                  return !1;
                n = n[c];
              }
              return !0;
            }),
            (a.ensureExists = function (e, t, n) {
              return l(e, t, n, !0);
            }),
            (a.set = function (e, t, n, r) {
              return l(e, t, n, r);
            }),
            (a.insert = function (e, t, n, r) {
              var i = a.get(e, t);
              (r = ~~r), o(i) || ((i = []), a.set(e, t, i)), i.splice(r, 0, n);
            }),
            (a.empty = function (e, t) {
              var i, s;
              if (!n(t) && null != e && (i = a.get(e, t))) {
                if ("string" === typeof i) return a.set(e, t, "");
                if (
                  (function (e) {
                    return (
                      "boolean" === typeof e || "[object Boolean]" === r(e)
                    );
                  })(i)
                )
                  return a.set(e, t, !1);
                if ("number" === typeof i) return a.set(e, t, 0);
                if (o(i)) i.length = 0;
                else {
                  if (
                    !(function (e) {
                      return (
                        "object" === typeof e && "[object Object]" === r(e)
                      );
                    })(i)
                  )
                    return a.set(e, t, null);
                  for (s in i) c(i, s) && delete i[s];
                }
              }
            }),
            (a.push = function (e, t) {
              var n = a.get(e, t);
              o(n) || ((n = []), a.set(e, t, n)),
                n.push.apply(n, Array.prototype.slice.call(arguments, 2));
            }),
            (a.coalesce = function (e, t, n) {
              for (var r, o = 0, i = t.length; o < i; o++)
                if (void 0 !== (r = a.get(e, t[o]))) return r;
              return n;
            }),
            (a.get = function (e, t, n) {
              if (("number" === typeof t && (t = [t]), !t || 0 === t.length))
                return e;
              if (null == e) return n;
              if ("string" === typeof t) return a.get(e, t.split("."), n);
              var r = i(t[0]),
                o = s(e, r);
              return void 0 === o
                ? n
                : 1 === t.length
                ? o
                : a.get(e[r], t.slice(1), n);
            }),
            (a.del = function (e, t) {
              if (("number" === typeof t && (t = [t]), null == e)) return e;
              if (n(t)) return e;
              if ("string" === typeof t) return a.del(e, t.split("."));
              var r = i(t[0]);
              return c(e, r)
                ? 1 !== t.length
                  ? a.del(e[r], t.slice(1))
                  : (o(e) ? e.splice(r, 1) : delete e[r], e)
                : e;
            }),
            a
          );
        }
        var c = a();
        return (
          (c.create = a),
          (c.withInheritedProps = a({ includeInheritedProps: !0 })),
          c
        );
      });
    },
    c8bx: function (e, t, n) {
      "use strict";
      var r = n("U6jy"),
        o = n("lXid"),
        i = n("wPut"),
        a = n("L/0L"),
        c = n("QxN4");
      e.exports = function (e) {
        var t,
          n,
          d = this,
          p = d.options;
        if (null == e) e = {};
        else {
          if ("object" !== typeof e)
            throw new Error("Invalid value `" + e + "` for setting `options`");
          e = r(e);
        }
        for (n in i) l[typeof i[n]](e, n, p[n], s[n]);
        (t = e.ruleRepetition) && t < 3 && u(t, "options.ruleRepetition");
        return (
          (d.encode = (function (e) {
            var t = {};
            if ("false" === e) return c;
            "true" === e && (t.useNamedReferences = !0);
            "escape" === e &&
              ((t.escapeOnly = !0), (t.useNamedReferences = !0));
            return function (e) {
              return o(e, t);
            };
          })(String(e.entities))),
          (d.escape = a(e)),
          (d.options = e),
          d
        );
      };
      var s = {
          entities: { true: !0, false: !0, numbers: !0, escape: !0 },
          bullet: { "*": !0, "-": !0, "+": !0 },
          rule: { "-": !0, _: !0, "*": !0 },
          listItemIndent: { tab: !0, mixed: !0, 1: !0 },
          emphasis: { _: !0, "*": !0 },
          strong: { _: !0, "*": !0 },
          fence: { "`": !0, "~": !0 },
        },
        l = {
          boolean: function (e, t, n) {
            var r = e[t];
            null == r && (r = n);
            "boolean" !== typeof r && u(r, "options." + t);
            e[t] = r;
          },
          string: function (e, t, n, r) {
            var o = e[t];
            null == o && (o = n);
            (o = String(o)) in r || u(o, "options." + t);
            e[t] = o;
          },
          number: function (e, t, n) {
            var r = e[t];
            null == r && (r = n);
            isNaN(r) && u(r, "options." + t);
            e[t] = r;
          },
          function: function (e, t, n) {
            var r = e[t];
            null == r && (r = n);
            "function" !== typeof r && u(r, "options." + t);
            e[t] = r;
          },
        };
      function u(e, t) {
        throw new Error("Invalid value `" + e + "` for setting `" + t + "`");
      }
    },
    cQQv: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = e.referenceType,
          n = "full" === t ? e.identifier : "";
        return "shortcut" === t ? n : "[" + n + "]";
      };
    },
    cVm5: function (e, t, n) {
      "use strict";
      var r = n("RjOF");
      e.exports = function (e) {
        var t,
          n = this,
          o = e.depth,
          i = n.options.setext,
          a = n.options.closeAtx,
          c = n.all(e).join("");
        if (i && o < 3) return c + "\n" + r(1 === o ? "=" : "-", c.length);
        return (t = r("#", e.depth)) + " " + c + (a ? " " + t : "");
      };
    },
    ceSv: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return j;
      });
      var r = n("nKUr"),
        o = n("cpVT"),
        i = n("xvhg"),
        a = n("dhJC"),
        c = n("q1tI"),
        s = n("up5I"),
        l = n("tidx"),
        u = n("TeFj"),
        d = n("8Vt8"),
        p = n("sMwv");
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
      function j(e) {
        var t = e.replId,
          n = e.onFork,
          o = e.isLoggedIn,
          f = e.onAuthCancel,
          j = e.trackingContext,
          h = Object(a.a)(e, [
            "replId",
            "onFork",
            "isLoggedIn",
            "onAuthCancel",
            "trackingContext",
          ]),
          m = c.useState(!1),
          x = Object(i.a)(m, 2),
          g = x[0],
          v = x[1];
        c.useEffect(
          function () {
            !g && f && f();
          },
          [g, f]
        );
        var y = Object(p.a)({ onFork: n }),
          O = Object(i.a)(y, 2),
          w = O[0],
          k = O[1].loading;
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(
              s.a,
              b(
                b({}, h),
                {},
                {
                  Icon: u.a,
                  disabled: k,
                  onClick: function (e) {
                    h.onClick && h.onClick(e),
                      o ? k || w(t, { trackingData: { context: j } }) : v(!0);
                  },
                  children: k ? "Forking..." : "Fork",
                }
              )
            ),
            o
              ? null
              : Object(r.jsx)(d.a, {
                  isOpen: g,
                  onRequestClose: function () {
                    v(!1);
                  },
                  children: Object(r.jsx)(l.a, {
                    title: "Sign up or log in to fork this repl",
                    onSuccess: function (e) {
                      e &&
                        w(t, {
                          trackingData: {
                            context: j,
                            authType: o ? "login" : "signup",
                          },
                        });
                    },
                  }),
                }),
          ],
        });
      }
    },
    eGrx: function (e, t) {
      var n = (e.exports = function (e) {
        return new r(e);
      });
      function r(e) {
        this.value = e;
      }
      function o(e, t, n) {
        var r = [],
          o = [],
          c = !0;
        return (function e(d) {
          var p = n ? i(d) : d,
            f = {},
            b = !0,
            j = {
              node: p,
              node_: d,
              path: [].concat(r),
              parent: o[o.length - 1],
              parents: o,
              key: r.slice(-1)[0],
              isRoot: 0 === r.length,
              level: r.length,
              circular: null,
              update: function (e, t) {
                j.isRoot || (j.parent.node[j.key] = e),
                  (j.node = e),
                  t && (b = !1);
              },
              delete: function (e) {
                delete j.parent.node[j.key], e && (b = !1);
              },
              remove: function (e) {
                s(j.parent.node)
                  ? j.parent.node.splice(j.key, 1)
                  : delete j.parent.node[j.key],
                  e && (b = !1);
              },
              keys: null,
              before: function (e) {
                f.before = e;
              },
              after: function (e) {
                f.after = e;
              },
              pre: function (e) {
                f.pre = e;
              },
              post: function (e) {
                f.post = e;
              },
              stop: function () {
                c = !1;
              },
              block: function () {
                b = !1;
              },
            };
          if (!c) return j;
          function h() {
            if ("object" === typeof j.node && null !== j.node) {
              (j.keys && j.node_ === j.node) || (j.keys = a(j.node)),
                (j.isLeaf = 0 == j.keys.length);
              for (var e = 0; e < o.length; e++)
                if (o[e].node_ === d) {
                  j.circular = o[e];
                  break;
                }
            } else (j.isLeaf = !0), (j.keys = null);
            (j.notLeaf = !j.isLeaf), (j.notRoot = !j.isRoot);
          }
          h();
          var m = t.call(j, j.node);
          return (
            void 0 !== m && j.update && j.update(m),
            f.before && f.before.call(j, j.node),
            b
              ? ("object" != typeof j.node ||
                  null === j.node ||
                  j.circular ||
                  (o.push(j),
                  h(),
                  l(j.keys, function (t, o) {
                    r.push(t), f.pre && f.pre.call(j, j.node[t], t);
                    var i = e(j.node[t]);
                    n && u.call(j.node, t) && (j.node[t] = i.node),
                      (i.isLast = o == j.keys.length - 1),
                      (i.isFirst = 0 == o),
                      f.post && f.post.call(j, i),
                      r.pop();
                  }),
                  o.pop()),
                f.after && f.after.call(j, j.node),
                j)
              : j
          );
        })(e).node;
      }
      function i(e) {
        if ("object" === typeof e && null !== e) {
          var t;
          if (s(e)) t = [];
          else if ("[object Date]" === c(e))
            t = new Date(e.getTime ? e.getTime() : e);
          else if (
            (function (e) {
              return "[object RegExp]" === c(e);
            })(e)
          )
            t = new RegExp(e);
          else if (
            (function (e) {
              return "[object Error]" === c(e);
            })(e)
          )
            t = { message: e.message };
          else if (
            (function (e) {
              return "[object Boolean]" === c(e);
            })(e)
          )
            t = new Boolean(e);
          else if (
            (function (e) {
              return "[object Number]" === c(e);
            })(e)
          )
            t = new Number(e);
          else if (
            (function (e) {
              return "[object String]" === c(e);
            })(e)
          )
            t = new String(e);
          else if (Object.create && Object.getPrototypeOf)
            t = Object.create(Object.getPrototypeOf(e));
          else if (e.constructor === Object) t = {};
          else {
            var n =
                (e.constructor && e.constructor.prototype) || e.__proto__ || {},
              r = function () {};
            (r.prototype = n), (t = new r());
          }
          return (
            l(a(e), function (n) {
              t[n] = e[n];
            }),
            t
          );
        }
        return e;
      }
      (r.prototype.get = function (e) {
        for (var t = this.value, n = 0; n < e.length; n++) {
          var r = e[n];
          if (!t || !u.call(t, r)) {
            t = void 0;
            break;
          }
          t = t[r];
        }
        return t;
      }),
        (r.prototype.has = function (e) {
          for (var t = this.value, n = 0; n < e.length; n++) {
            var r = e[n];
            if (!t || !u.call(t, r)) return !1;
            t = t[r];
          }
          return !0;
        }),
        (r.prototype.set = function (e, t) {
          for (var n = this.value, r = 0; r < e.length - 1; r++) {
            var o = e[r];
            u.call(n, o) || (n[o] = {}), (n = n[o]);
          }
          return (n[e[r]] = t), t;
        }),
        (r.prototype.map = function (e) {
          return o(this.value, e, !0);
        }),
        (r.prototype.forEach = function (e) {
          return (this.value = o(this.value, e, !1)), this.value;
        }),
        (r.prototype.reduce = function (e, t) {
          var n = 1 === arguments.length,
            r = n ? this.value : t;
          return (
            this.forEach(function (t) {
              (this.isRoot && n) || (r = e.call(this, r, t));
            }),
            r
          );
        }),
        (r.prototype.paths = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(this.path);
            }),
            e
          );
        }),
        (r.prototype.nodes = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(this.node);
            }),
            e
          );
        }),
        (r.prototype.clone = function () {
          var e = [],
            t = [];
          return (function n(r) {
            for (var o = 0; o < e.length; o++) if (e[o] === r) return t[o];
            if ("object" === typeof r && null !== r) {
              var c = i(r);
              return (
                e.push(r),
                t.push(c),
                l(a(r), function (e) {
                  c[e] = n(r[e]);
                }),
                e.pop(),
                t.pop(),
                c
              );
            }
            return r;
          })(this.value);
        });
      var a =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      function c(e) {
        return Object.prototype.toString.call(e);
      }
      var s =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          },
        l = function (e, t) {
          if (e.forEach) return e.forEach(t);
          for (var n = 0; n < e.length; n++) t(e[n], n, e);
        };
      l(a(r.prototype), function (e) {
        n[e] = function (t) {
          var n = [].slice.call(arguments, 1),
            o = new r(t);
          return o[e].apply(o, n);
        };
      });
      var u =
        Object.hasOwnProperty ||
        function (e, t) {
          return t in e;
        };
    },
    eoFk: function (e, t, n) {
      "use strict";
      var r = n("cQQv");
      e.exports = function (e) {
        return "![" + (this.encode(e.alt, e) || "") + "]" + r(e);
      };
    },
    hJxz: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.invalidateFields =
          t.matchFinder =
          t.findMatchingPaths =
          t.fieldMatch =
          t.ROOT =
            void 0);
      var r,
        o = n("eGrx"),
        i = (r = o) && r.__esModule ? r : { default: r },
        a = n("boci");
      var c = (t.ROOT = "ROOT_QUERY"),
        s = (t.fieldMatch = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return "string" === typeof e
            ? e === t
            : e instanceof RegExp
            ? !!t.match(e)
            : e instanceof Function && e(t, n);
        }),
        l = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            Object.keys(e).every(function (e) {
              return ["type", "id", "generated"].includes(e);
            }) && Object.keys(e).length > 0
          );
        },
        u = (t.findMatchingPaths = function (e, t, n) {
          return (0, i.default)(e).reduce(function (e) {
            var r = this;
            return this.isRoot
              ? e
              : s(t[this.level - 1], this.key, this)
              ? (l(this.node) &&
                  n([this.node.id].concat(t.slice(this.path.length))),
                Array.isArray(this.node) &&
                  l(this.node[0]) &&
                  this.node.forEach(function (e) {
                    var o = e.id;
                    return n([o].concat(t.slice(r.path.length)));
                  }),
                t.length === this.path.length && e.push(this.path),
                e)
              : (this.block(), e);
          }, []);
        }),
        d = (t.matchFinder = function (e, t) {
          for (
            var n = 0,
              r = [],
              o = function (e) {
                return t.push(e);
              };
            t[n];

          )
            (r = r.concat(u(e, t[n], o))), n++;
          return r;
        });
      t.invalidateFields = function (e) {
        return function (t, n) {
          return d(t.data, e(t, n) || []).forEach(function (e) {
            return 1 === e.length && e[0] === c
              ? Object.keys(t.data[c]).forEach(function (e) {
                  return (0, a.del)(t.data, [c, e]);
                })
              : (0, a.del)(t.data, e);
          });
        };
      };
    },
    hYzu: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("XLFt")),
        c = n("up5I"),
        s = function (e) {
          return Object(r.jsxs)("div", {
            className: "jsx-665792193 post-form-footer",
            children: [
              e.cancelable
                ? Object(r.jsx)(c.a, {
                    type: "button",
                    onClick: function (t) {
                      t && t.preventDefault(), e.onCancel && e.onCancel();
                    },
                    children: "Cancel",
                  })
                : null,
              Object(r.jsx)("div", { className: "jsx-665792193 spacer" }),
              Object(r.jsx)(c.a, {
                type: "submit",
                color: "primary",
                filled: !0,
                loading: e.loading,
                "aria-label": "Your post will be publicly shared",
                "data-microtip-position": "right",
                role: "tooltip",
                intent: e.isDangerCta ? "danger" : "confirm",
                children: e.loading
                  ? Object(r.jsx)(a.a, {
                      style: { width: "20px", height: "20px" },
                    })
                  : e.cta,
              }),
              Object(r.jsx)(i.a, {
                id: "665792193",
                children: [
                  ".post-form-footer.jsx-665792193{height:48px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  ".spacer.jsx-665792193{width:var(--spacing-1);}",
                ],
              }),
            ],
          });
        };
      (s.defaultProps = { cancelable: !0 }), (t.a = s);
    },
    iE2v: function (e, t, n) {
      "use strict";
      var r = n("RjOF"),
        o = n("Kd6s");
      e.exports = function (e, t, n, a) {
        var c,
          s,
          l,
          u = this.options.listItemIndent,
          d = e.loose,
          p = e.children,
          f = p.length,
          b = [],
          j = -1;
        for (; ++j < f; ) b[j] = this.visit(p[j], e);
        (c = i[e.checked] + b.join(d ? "\n\n" : "\n")),
          "1" === u || ("mixed" === u && -1 === c.indexOf("\n"))
            ? ((s = a.length + 1), (l = " "))
            : ((s = 4 * Math.ceil((a.length + 1) / 4)),
              (l = r(" ", s - a.length)));
        (c = a + l + o(c, s / 4).slice(s)),
          d && t.children.length - 1 !== n && (c += "\n");
        return c;
      };
      var i = { undefined: "", null: "", true: "[x] ", false: "[ ] " };
    },
    iiuX: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("+Jnw")),
        c = n("2lQ7"),
        s = n.n(c),
        l = n("EQ2k"),
        u = n("XmHG"),
        d = n("jmGw"),
        p = n("AERv");
      t.a = function (e) {
        var t = e.text,
          n = e.onClick;
        return Object(r.jsxs)("div", {
          onClick: n,
          className:
            i.a.dynamic([["1864296780", [l.a.gray50, l.a.gray75]]]) +
            " rendered-markdown board-post-body",
          children: [
            Object(r.jsx)(a.a, {
              source: t,
              renderers: {
                code: d.a,
                linkReference: u.c,
                link: u.d,
                image: u.b,
                heading: u.e,
              },
              plugins: [p.markdownMentionPlugin, s.a],
            }),
            Object(r.jsx)(i.a, {
              id: "1864296780",
              dynamic: [l.a.gray50, l.a.gray75],
              children: [
                ".board-post-body.__jsx-style-dynamic-selector{overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;font-size:15px;line-height:22px;}",
                ".board-post-body.__jsx-style-dynamic-selector .rendered-markdown{background-color:var(--color-background-2);}",
                ".board-post-body.__jsx-style-dynamic-selector p{margin-bottom:10px;font-size:15px;}",
                ".board-post-body.__jsx-style-dynamic-selector>div>*:first-child{margin-top:0;}",
                ".board-post-body.__jsx-style-dynamic-selector>div>*:last-child{margin-bottom:0;}",
                ".board-post-body.__jsx-style-dynamic-selector img{max-width:100%;max-height:500px;display:block;margin-top:10px;margin-bottom:10px;}",
                ".board-post-body.__jsx-style-dynamic-selector ul,.board-post-body.__jsx-style-dynamic-selector ol{padding-left:2em;margin-top:10px;margin-bottom:10px;}",
                ".board-post-body.__jsx-style-dynamic-selector li{display:list-item;text-align:-webkit-match-parent;}",
                ".board-post-body.__jsx-style-dynamic-selector blockquote{margin-top:10px;margin-bottom:10px;padding:0 1em;color:"
                  .concat(l.a.gray50, ";border-left:0.25em solid ")
                  .concat(l.a.gray75, ";}"),
              ],
            }),
          ],
        });
      };
    },
    jMDP: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = n("q1tI"),
        c = n("EQ2k");
      t.a = function (e) {
        var t = e.children;
        return Object(r.jsxs)("div", {
          className:
            i.a.dynamic([["1998241331", [c.a.gray47]]]) + " post-footer",
          children: [
            a.Children.map(t, function (e, t) {
              return Object(r.jsxs)(
                a.Fragment,
                { children: [t > 0 && e ? " \xb7 " : null, e] },
                t
              );
            }),
            Object(r.jsx)(i.a, {
              id: "1998241331",
              dynamic: [c.a.gray47],
              children: [
                ".post-footer.__jsx-style-dynamic-selector{padding-top:5px;font-size:13px;color:var(--color-foreground-3);}",
                ".post-footer.__jsx-style-dynamic-selector a{color:inherit;}",
                ".post-footer.__jsx-style-dynamic-selector a:hover{border-color:".concat(
                  c.a.gray47,
                  ";}"
                ),
              ],
            }),
          ],
        });
      };
    },
    jmGw: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var r = n("nKUr"),
        o = n("H+61"),
        i = n("UlJF"),
        a = n("+Css"),
        c = n("7LId"),
        s = n("VIvw"),
        l = n("iHvq"),
        u = n("cpVT"),
        d = n("MX0m"),
        p = n.n(d),
        f = n("q1tI"),
        b = n("FIf5"),
        j = n.n(b);
      function h(e) {
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
          return Object(s.a)(this, n);
        };
      }
      var m = (function (e) {
        Object(c.a)(n, e);
        var t = h(n);
        function n() {
          var e;
          Object(o.a)(this, n);
          for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
            i[c] = arguments[c];
          return (
            (e = t.call.apply(t, [this].concat(i))),
            Object(u.a)(Object(a.a)(e), "codeEl", void 0),
            Object(u.a)(Object(a.a)(e), "setRef", function (t) {
              return (e.codeEl = t);
            }),
            Object(u.a)(Object(a.a)(e), "highlightCode", function () {
              e.codeEl && j.a.highlightBlock(e.codeEl);
            }),
            e
          );
        }
        return (
          Object(i.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.highlightCode();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.highlightCode();
              },
            },
            {
              key: "render",
              value: function () {
                return Object(r.jsxs)("pre", {
                  className: "jsx-2661271750",
                  children: [
                    Object(r.jsx)("code", {
                      ref: this.setRef,
                      className:
                        "jsx-2661271750 " +
                        "language-".concat(this.props.language),
                      children: this.props.value,
                    }),
                    Object(r.jsx)(p.a, {
                      id: "2661271750",
                      children: [
                        "code.jsx-2661271750 .hljs-keyword,.hljs-selector-tag,.hljs-built_in,.hljs-name,.hljs-tag{color:var(--color-primary-1);}",
                        "code.jsx-2661271750 .hljs-string,.hljs-title,.hljs-section,.hljs-attribute,.hljs-literal,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-addition{color:var(--color-red-2);}",
                        "code.jsx-2661271750 .hljs-comment,.hljs-quote,.hljs-variable{color:var(--color-green-2);}",
                        "code.jsx-2661271750 .hljs-attr{color:var(--color-red-1);}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(f.PureComponent);
      Object(u.a)(m, "defaultProps", { language: "" });
    },
    "jqI+": function (e, t, n) {
      "use strict";
      var r = n("DkIQ");
      e.exports = function (e, t) {
        var n,
          i = e.length,
          a = t.length,
          c = [],
          s = 0,
          l = 0;
        for (; l < i; ) {
          for (n = l; l < i && !o.test(e.charAt(l)); ) l += 1;
          for (c.push(e.slice(n, l)); s < a && !o.test(t.charAt(s)); ) s += 1;
          for (n = s; s < a && o.test(t.charAt(s)); )
            "&" === t.charAt(s) && (s += r(t.slice(s))), (s += 1);
          for (c.push(t.slice(n, s)); l < i && o.test(e.charAt(l)); ) l += 1;
        }
        return c.join("");
      };
      var o = /[-!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~_]/;
    },
    kFXa: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var r = n("nKUr"),
        o = n("vJKn"),
        i = n.n(o),
        a = n("rg98"),
        c = n("H+61"),
        s = n("UlJF"),
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
      var j = function (e) {
          return e && (e.stopPropagation(), e.preventDefault()), !!e;
        },
        h = (function (e) {
          Object(l.a)(n, e);
          var t = b(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
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
            Object(s.a)(n, [
              {
                key: "readFiles",
                value: (function () {
                  var e = Object(a.a)(
                    i.a.mark(function e(t) {
                      var n;
                      return i.a.wrap(
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
                    i = this.props,
                    a = i.openOnClick,
                    c = i.accept,
                    s = i.children;
                  return Object(r.jsxs)("div", {
                    onClick: a ? this.handleOpenFileBrowser : void 0,
                    onMouseEnter: this.handleActive,
                    onMouseLeave: this.handleInactive,
                    onDragEnter: function (t) {
                      return j(t) && e.handleActive();
                    },
                    onDragLeave: function (t) {
                      return j(t) && e.handleInactive();
                    },
                    onDragEnd: function (t) {
                      return j(t) && e.handleInactive();
                    },
                    onDrop: function (t) {
                      return j(t) && e.handleFileDropped(t);
                    },
                    onDragOver: j,
                    children: [
                      s({
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
                        accept: c,
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
    kFyI: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("EQ2k")),
        c = function (e) {
          var t = e.fill,
            n = e.width,
            o = e.height;
          return Object(r.jsxs)("div", {
            className: i.a.dynamic([
              ["1937252334", [n || "auto", o || "auto"]],
            ]),
            children: [
              Object(r.jsx)("svg", {
                width: "22px",
                height: "32px",
                viewBox: "0 0 22 32",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: i.a.dynamic([
                  ["1937252334", [n || "auto", o || "auto"]],
                ]),
                children: Object(r.jsx)("g", {
                  className: i.a.dynamic([
                    ["1937252334", [n || "auto", o || "auto"]],
                  ]),
                  children: Object(r.jsx)("g", {
                    transform: "translate(-89, -23)",
                    fill: t,
                    fillRule: "nonzero",
                    className: i.a.dynamic([
                      ["1937252334", [n || "auto", o || "auto"]],
                    ]),
                    children: Object(r.jsxs)("g", {
                      transform: "translate(89, 23)",
                      className: i.a.dynamic([
                        ["1937252334", [n || "auto", o || "auto"]],
                      ]),
                      children: [
                        Object(r.jsx)("path", {
                          d: "M11.09,18.59 C9.9821125,18.598387 9.02266744,19.3610423 8.76455688,20.4384763 C8.50644632,21.5159102 9.01617275,22.6305209 10,23.14 L10,26 L12,26 L12,23.23 C13.0647784,22.7936395 13.6725238,21.6653931 13.4510621,20.5361818 C13.2296004,19.4069704 12.2407216,18.5918551 11.09,18.59 Z",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                        Object(r.jsx)("path", {
                          d: "M19,13 L19,8.72 C19.0894129,4.20620308 15.5133609,0.469228711 11,0.36 C6.48663913,0.469228711 2.9105871,4.20620308 3,8.72 L3,13 L0,13 L0,30 C0,31.1045695 0.8954305,32 2,32 L20,32 C21.1045695,32 22,31.1045695 22,30 L22,13 L19,13 Z M5,8.72 C4.91024699,5.31056291 7.59111881,2.46883878 11,2.36 C14.4088812,2.46883878 17.089753,5.31056291 17,8.72 L17,13 L5,13 L5,8.72 Z M2,30 L2,15 L20,15 L20,30 L2,30 Z",
                          className: i.a.dynamic([
                            ["1937252334", [n || "auto", o || "auto"]],
                          ]),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(r.jsx)(i.a, {
                id: "1937252334",
                dynamic: [n || "auto", o || "auto"],
                children: [
                  "svg.__jsx-style-dynamic-selector{display:block;width:"
                    .concat(n || "auto", ";height:")
                    .concat(o || "auto", ";}"),
                ],
              }),
            ],
          });
        };
      (c.defaultProps = { fill: a.a.blue, width: "15px" }), (t.a = c);
    },
    lXid: function (e, t, n) {
      "use strict";
      var r = n("ACLC"),
        o = n("m2n9"),
        i = n("fjrl"),
        a = n("J5yW"),
        c = n("uqHX");
      (e.exports = f),
        (f.escape = function (e) {
          return f(e, { escapeOnly: !0, useNamedReferences: !0 });
        });
      var s = {}.hasOwnProperty,
        l = (function () {
          var e,
            t = {};
          for (e in r) t[r[e]] = e;
          return t;
        })(),
        u = h(['"', "'", "<", ">", "&", "`"]),
        d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        p = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
      function f(e, t) {
        var n = t || {},
          r = n.subset,
          o = r ? h(r) : u,
          i = n.escapeOnly,
          a = n.omitOptionalSemicolons;
        return (
          (e = e.replace(o, function (e, t, r) {
            return b(e, r.charAt(t + 1), n);
          })),
          r || i
            ? e
            : e
                .replace(d, function (e, t, n) {
                  return j(
                    1024 * (e.charCodeAt(0) - 55296) +
                      e.charCodeAt(1) -
                      56320 +
                      65536,
                    n.charAt(t + 2),
                    a
                  );
                })
                .replace(p, function (e, t, r) {
                  return b(e, r.charAt(t + 1), n);
                })
        );
      }
      function b(e, t, n) {
        var r,
          i,
          u = n.useShortestReferences,
          d = n.omitOptionalSemicolons;
        return (
          (u || n.useNamedReferences) &&
            s.call(l, e) &&
            (r = (function (e, t, n, r) {
              var i = "&" + e;
              if (
                n &&
                s.call(o, e) &&
                -1 === c.indexOf(e) &&
                (!r || (t && "=" !== t && !a(t)))
              )
                return i;
              return i + ";";
            })(l[e], t, d, n.attribute)),
          (!u && r) || (i = j(e.charCodeAt(0), t, d)),
          r && (!u || r.length < i.length) ? r : i
        );
      }
      function j(e, t, n) {
        var r = "&#x" + e.toString(16).toUpperCase();
        return n && t && !i(t) ? r : r + ";";
      }
      function h(e) {
        return new RegExp("[" + e.join("") + "]", "g");
      }
    },
    lZTF: function (e, t, n) {
      "use strict";
      e.exports = function (e, t, n) {
        var o,
          i = -1;
        if (!e) throw new Error("Iterate requires that |this| not be " + e);
        if (!r.call(e, "length"))
          throw new Error("Iterate requires that |this| has a `length`");
        if ("function" !== typeof t)
          throw new Error("`callback` must be a function");
        for (; ++i < e.length; )
          i in e &&
            "number" === typeof (o = t.call(n, e[i], i, e)) &&
            (o < 0 && (i = 0), (i = o - 1));
      };
      var r = {}.hasOwnProperty;
    },
    lbOS: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        var n = this,
          r = n.visitors;
        "function" !== typeof r[e.type] &&
          n.file.fail(
            new Error(
              "Missing compiler for node of type `" + e.type + "`: `" + e + "`"
            ),
            e
          );
        return r[e.type].call(n, e, t);
      };
    },
    lmVN: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t,
          n = this,
          r = n.visitors.listItem,
          o = n.options.incrementListMarker,
          i = [],
          a = e.start,
          c = e.children,
          s = c.length,
          l = -1;
        for (; ++l < s; )
          (t = (o ? a + l : a) + "."), (i[l] = r.call(n, c[l], e, l, t));
        return i.join("\n");
      };
    },
    lvaz: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return this.all(e).join("");
      };
    },
    mfmY: function (e, t) {
      var n = Object.prototype.toString,
        r = Array.isArray;
      e.exports = function (e) {
        return (
          "string" == typeof e ||
          (!r(e) &&
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
            "[object String]" == n.call(e))
        );
      };
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
    nIOP: function (e, t, n) {
      "use strict";
      e.exports = n("Zd1B");
    },
    nhGb: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return l;
      });
      var r = n("cpVT"),
        o = n("nKUr"),
        i = (n("q1tI"), n("QSUB"));
      function a(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var s = ["gmail.com", "hotmail.com", "yahoo.com"],
        l = function (e) {
          return s.some(function (t) {
            return e.endsWith(t);
          });
        },
        u = function () {
          return Object(o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [
              Object(o.jsx)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
              Object(o.jsx)("path", {
                d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",
              }),
            ],
          });
        };
      t.a = function (e) {
        var t = e.email.split("@").pop();
        return Object(o.jsx)(
          i.b,
          c(
            c({}, e),
            {},
            {
              arrow: !0,
              iconLeft: Object(o.jsx)(u, {}),
              target: "_blank",
              href: "https://".concat(t),
              children: e.email,
            }
          )
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
        function o(e, o, i) {
          if (!n)
            throw new Error(
              "textarea-caret-position#getCaretCoordinates should only be called in a browser"
            );
          var a = (i && i.debug) || !1;
          if (a) {
            var c = document.querySelector(
              "#input-textarea-caret-position-mirror-div"
            );
            c && c.parentNode.removeChild(c);
          }
          var s = document.createElement("div");
          (s.id = "input-textarea-caret-position-mirror-div"),
            document.body.appendChild(s);
          var l = s.style,
            u = window.getComputedStyle
              ? window.getComputedStyle(e)
              : e.currentStyle,
            d = "INPUT" === e.nodeName;
          (l.whiteSpace = "pre-wrap"),
            d || (l.wordWrap = "break-word"),
            (l.position = "absolute"),
            a || (l.visibility = "hidden"),
            t.forEach(function (e) {
              d && "lineHeight" === e
                ? (l.lineHeight = u.height)
                : (l[e] = u[e]);
            }),
            r
              ? e.scrollHeight > parseInt(u.height) && (l.overflowY = "scroll")
              : (l.overflow = "hidden"),
            (s.textContent = e.value.substring(0, o)),
            d && (s.textContent = s.textContent.replace(/\s/g, "\xa0"));
          var p = document.createElement("span");
          (p.textContent = e.value.substring(o) || "."), s.appendChild(p);
          var f = {
            top: p.offsetTop + parseInt(u.borderTopWidth),
            left: p.offsetLeft + parseInt(u.borderLeftWidth),
            height: parseInt(u.lineHeight),
          };
          return (
            a
              ? (p.style.backgroundColor = "#aaa")
              : document.body.removeChild(s),
            f
          );
        }
        "undefined" != typeof e.exports
          ? (e.exports = o)
          : n && (window.getCaretCoordinates = o);
      })();
    },
    rcAQ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n("nKUr"),
        o = n("xvhg"),
        i = (n("q1tI"), n("/MKj")),
        a = n("b518"),
        c = n("tZOq"),
        s = n("sLtE"),
        l = n("VoYB");
      function u(e) {
        var t = Object(l.a)().showError,
          n = e.comment,
          u = Object(i.e)(),
          d = Object(i.f)(function (e) {
            return e.user.userInfo.isLoggedIn;
          }, i.d),
          p = Object(c.Db)({
            onError: function (e) {
              return t(Object(a.d)(e.message));
            },
          }),
          f = Object(o.a)(p, 2),
          b = f[0],
          j = f[1].loading,
          h = Object(c.Eb)({
            onError: function (e) {
              return t(Object(a.d)(e.message));
            },
          }),
          m = Object(o.a)(h, 2),
          x = m[0],
          g = m[1].loading;
        return Object(r.jsx)(s.a, {
          hasVoted: n.hasVoted,
          canVote: n.canVote,
          voteCount: n.voteCount,
          lite: !0,
          onClick: function () {
            if (d) {
              if (!j && !g) {
                n.canVote || t("Voting not allowed");
                var e = { commentId: n.id };
                n.hasVoted ? x({ variables: e }) : b({ variables: e });
              }
            } else u({ type: "AUTH_MODAL_SHOW" });
          },
        });
      }
    },
    sLtE: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("nKUr"),
        o = n("MX0m"),
        i = n.n(o),
        a = (n("q1tI"), n("TSYQ")),
        c = n.n(a);
      function s(e) {
        return Object(r.jsxs)("button", {
          onClick: function () {
            e.canVote && e.onClick();
          },
          title: "Upvote",
          className:
            "jsx-2115020646 " +
            (c()(
              "vote-control",
              e.lite ? "vote-control-lite" : "vote-control-heavy",
              {
                "vote-control-active": e.hasVoted,
                "vote-control-can-vote": e.canVote,
              }
            ) || ""),
          children: [
            Object(r.jsx)("div", {
              className: "jsx-2115020646 vote-control-arrow",
              children: "\u25b2",
            }),
            Object(r.jsx)("div", {
              className: "jsx-2115020646 vote-control-count",
              children: e.voteCount,
            }),
            Object(r.jsx)(i.a, {
              id: "2115020646",
              children: [
                "button.jsx-2115020646{background-color:transparent;border:0 none;}",
                ".vote-control.jsx-2115020646{color:var(--color-foreground-1);text-align:center;width:40px;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",
                ".vote-control-heavy.jsx-2115020646{border:1px solid var(--color-foreground-1);border-radius:4px;}",
                ".vote-control-can-vote.jsx-2115020646{cursor:pointer;}",
                ".vote-control-heavy.vote-control-can-vote.jsx-2115020646:hover{background-color:var(--color-positive-2);color:white;}",
                ".vote-control-heavy.vote-control-can-vote.jsx-2115020646:hover,.vote-control-heavy.vote-control-active.jsx-2115020646{border:1px solid var(--color-positive-2);}",
                ".vote-control-lite.vote-control-can-vote.jsx-2115020646:hover,.vote-control-lite.vote-control-active.jsx-2115020646{color:var(--color-positive-2);}",
                ".vote-control-arrow.jsx-2115020646{font-size:16px;padding:5px;pointer-events:none;}",
                ".vote-control-count.jsx-2115020646{pointer-events:none;font-size:16px;font-weight:bold;padding:0 5px 5px;}",
                ".vote-control-active.jsx-2115020646,.vote-control-active.jsx-2115020646:hover{color:var(--color-positive-2);}",
                ".vote-control-heavy.vote-control-active.jsx-2115020646,.vote-control-heavy.vote-control-active.jsx-2115020646:hover{background-color:var(--color-positive-2);color:white;}",
                ".vote-control-heavy.vote-control-active.jsx-2115020646,.vote-control-heavy.vote-control-active.jsx-2115020646:hover{color:white;}",
              ],
            }),
          ],
        });
      }
    },
    sYmS: function (e, t, n) {
      "use strict";
      var r = n("nIOP"),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {};
      function s(e) {
        return r.isMemo(e) ? a : c[e.$$typeof] || o;
      }
      (c[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[r.Memo] = a);
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        b = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (b) {
            var o = f(n);
            o && o !== b && e(t, o, r);
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var c = s(t), j = s(n), h = 0; h < a.length; ++h) {
            var m = a[h];
            if (!i[m] && (!r || !r[m]) && (!j || !j[m]) && (!c || !c[m])) {
              var x = p(n, m);
              try {
                l(t, m, x);
              } catch (g) {}
            }
          }
        }
        return t;
      };
    },
    u5aG: function (e, t, n) {
      "use strict";
      e.exports = function (e, t) {
        return this.encode(this.escape(e.value, e, t), e);
      };
    },
    uqHX: function (e) {
      e.exports = JSON.parse(
        '["cent","copy","divide","gt","lt","not","para","times"]'
      );
    },
    vKT1: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return y;
      });
      var r = n("nKUr"),
        o = n("cpVT"),
        i = n("xvhg"),
        a = n("MX0m"),
        c = n.n(a),
        s = n("q1tI"),
        l = n("GBY4"),
        u = n.n(l),
        d = n("XLFt"),
        p = n("rg44"),
        f = n("zgDP");
      function b(e) {
        var t = e.url;
        return Object(r.jsxs)("div", {
          className: "jsx-1934980047 webview-url-bar",
          children: [
            Object(r.jsx)("input", {
              value: t,
              type: "text",
              onClick: function (e) {
                e.currentTarget.select(),
                  Object(f.track)(f.events.WS_REPL_RUN_LINK_SELECTED, {
                    url: t,
                  });
              },
              readOnly: !0,
              className: "jsx-1934980047",
            }),
            Object(r.jsx)("a", {
              href: t,
              role: "tooltip",
              "data-microtip-position": "left",
              "aria-label": "Open in a new tab",
              target: "_blank",
              className: "jsx-1934980047",
              children: Object(r.jsx)(p.a, {}),
            }),
            Object(r.jsx)(c.a, {
              id: "1934980047",
              children: [
                ".webview-url-bar.jsx-1934980047{display:grid;grid-column-gap:var(--spacing-1);grid-template-columns:1fr auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:".concat(
                  "40px",
                  ";padding:0 var(--spacing-1);background-color:var(--color-background-1);color:var(--color-foreground-1);border-top-left-radius:var(--border-radius-1);border-top-right-radius:var(--border-radius-1);border:1px solid var(--color-border);}"
                ),
                "input.jsx-1934980047{background-color:transparent;outline:none;padding:2px 4px;font-size:13px;border-radius:var(--border-radius-1);color:var(--color-foreground-2);border:1px solid var(--color-white-32);}",
                "a.jsx-1934980047{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;color:var(--color-foreground-3);}",
                "a.jsx-1934980047:hover{color:var(--color-foreground-1);}",
              ],
            }),
          ],
        });
      }
      var j = n("RB+8");
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
      function m(e) {
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
      var x = /\/(@[0-9a-zA-Z_]+|repls)\/[0-9a-zA-Z-]+$/,
        g = function (e) {
          return e.hostname && e.hostname.includes("repl.co");
        },
        v = function (e) {
          if (!e.href) return !1;
          if (!e.hostname && x.test(e.pathname)) return !0;
          var t = "repl.it" === e.hostname;
          return (
            (e.href.startsWith("https://replit.com") || t) && x.test(e.pathname)
          );
        },
        y = function (e) {
          var t = new u.a(e);
          return !!g(t) || v(t);
        };
      t.a = function (e) {
        var t = s.useState(!1),
          n = Object(i.a)(t, 2),
          o = n[0],
          a = n[1];
        s.useEffect(
          function () {
            a(!0);
          },
          [!0]
        );
        var l = Object(j.f)(),
          p = new u.a(e.url);
        return (
          v(p) && p.set("query", { lite: "icon_title_nologo" }),
          p.set("query", m(m({}, p.query), {}, { theme: l })),
          Object(r.jsxs)("div", {
            className: "jsx-2581298061 board-repl-embed",
            children: [
              g(p) ? Object(r.jsx)(b, { url: p.href }) : null,
              o
                ? Object(r.jsx)("iframe", {
                    height: "600px",
                    width: "100%",
                    src: p.href,
                    scrolling: "no",
                    frameBorder: "no",
                    allowFullScreen: !0,
                    sandbox:
                      "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals",
                    className: "jsx-2581298061",
                  })
                : Object(r.jsx)("div", {
                    className: "jsx-2581298061 board-embed-placeholder",
                    children: Object(r.jsx)(d.a, {}),
                  }),
              Object(r.jsx)(c.a, {
                id: "2581298061",
                children: [
                  ".board-repl-embed.jsx-2581298061{margin-top:20px;margin-bottom:20px;border:1px solid var(--color-control-2);background-color:var(--color-background-1);}",
                  ".board-repl-embed.jsx-2581298061 iframe.jsx-2581298061{display:block;background-color:var(--color-background-1);}",
                  ".board-embed-placeholder.jsx-2581298061{height:600px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                  "@media screen and (min-width:820px){.board-repl-embed.jsx-2581298061{margin-left:-50px;margin-right:-50px;}}",
                  "@media screen and (min-width:920px){.board-repl-embed.jsx-2581298061{margin-left:-100px;margin-right:-100px;}}",
                  "@media screen and (min-width:1200px){.board-repl-embed.jsx-2581298061{margin-left:-150px;margin-right:-150px;}}",
                ],
              }),
            ],
          })
        );
      };
    },
    vgqm: function (e, t, n) {
      "use strict";
      var r = n("F2il");
      e.exports = function (e, t) {
        if (t || 0 === e.length || o.test(e) || r(e, "(") !== r(e, ")"))
          return "<" + e + ">";
        return e;
      };
      var o = /\s/;
    },
    wPut: function (e, t, n) {
      "use strict";
      e.exports = {
        gfm: !0,
        commonmark: !1,
        pedantic: !1,
        entities: "false",
        setext: !1,
        closeAtx: !1,
        looseTable: !1,
        spacedTable: !0,
        paddedTable: !0,
        stringLength: function (e) {
          return e.length;
        },
        incrementListMarker: !0,
        fences: !1,
        fence: "`",
        bullet: "-",
        listItemIndent: "tab",
        rule: "*",
        ruleSpaces: !0,
        ruleRepetition: 3,
        strong: "*",
        emphasis: "_",
      };
    },
    y2k1: function (e, t, n) {
      "use strict";
      var r = n("nKUr"),
        o = n("xvhg"),
        i = n("MX0m"),
        a = n.n(i),
        c = n("q1tI"),
        s = n.n(c),
        l = n("AENu"),
        u = n("hYzu"),
        d = n("tZOq"),
        p = n("2Ct2"),
        f = n("3OnI"),
        b = n("JaEh"),
        j = n("5mGw"),
        h = n("zgDP"),
        m = n("nhGb"),
        x = n("EQ2k"),
        g = n("2vPd"),
        v = n("J1fo"),
        y = function () {
          var e = Object(d.Jf)(),
            t = Object(o.a)(e, 2),
            n = t[0],
            i = t[1],
            a = i.data,
            c = i.loading;
          if (
            a &&
            a.sendUserVerificationEmail &&
            a.sendUserVerificationEmail.__typename
          ) {
            var s = {
              UserVerificationEmailSent: "\u2713 sent. check your email",
              UserVerificationAlreadyVerified:
                "\u2713 already verified. try reloading your browser",
            }[a.sendUserVerificationEmail.__typename];
            return Object(r.jsx)(j.b, { children: s });
          }
          return Object(r.jsx)(j.b, {
            children: Object(r.jsx)(g.a, {
              onClick: function () {
                c ||
                  (Object(h.track)(
                    h.events.VERIFY_AND_COMMENT_RESEND_EMAIL_CLICKED
                  ),
                  n());
              },
              children: "resend email",
            }),
          });
        },
        O = function (e) {
          var t = e.onVerification,
            n = Object(d.If)(),
            o = n.data,
            i = n.startPolling,
            c = n.stopPolling;
          if (
            (s.a.useEffect(
              function () {
                return (
                  o &&
                    o.currentUser &&
                    o.currentUser &&
                    (c(),
                    o.currentUser.isVerified
                      ? t()
                      : o.currentUser.isVerified || i(1500)),
                  c
                );
              },
              [o]
            ),
            o && o.currentUser)
          ) {
            var l = o.currentUser;
            return Object(r.jsxs)("div", {
              className:
                a.a.dynamic([["1164610761", [x.a.gray96]]]) +
                " board-new-comment-verify",
              children: [
                Object(r.jsxs)(p.a, {
                  children: [
                    Object(r.jsx)(f.a, { text: "\u2728 almost there!" }),
                    Object(r.jsx)(b.a, {}),
                    Object(r.jsx)(f.a, {
                      text: "verify your account by clicking the link in the email we sent to",
                    }),
                    Object(m.b)(l.email)
                      ? Object(r.jsxs)(v.a, {
                          children: [
                            Object(r.jsx)(b.a, {}),
                            Object(r.jsx)(j.b, {
                              children: Object(r.jsx)(m.a, { email: l.email }),
                            }),
                            Object(r.jsx)(b.a, {}),
                          ],
                        })
                      : Object(r.jsx)(v.a, {
                          children: Object(r.jsx)(j.b, {
                            children: Object(r.jsx)("b", {
                              className: a.a.dynamic([
                                ["1164610761", [x.a.gray96]],
                              ]),
                              children: l.email,
                            }),
                          }),
                        }),
                    Object(r.jsx)(y, {}),
                  ],
                }),
                Object(r.jsx)(a.a, {
                  id: "1164610761",
                  dynamic: [x.a.gray96],
                  children: [
                    ".board-new-comment-verify.__jsx-style-dynamic-selector{background-color:".concat(
                      x.a.gray96,
                      ";padding:20px;padding-left:10px;}"
                    ),
                  ],
                }),
              ],
            });
          }
          return null;
        },
        w = n("VoYB");
      t.a = function (e) {
        var t = s.a.useState(!1),
          n = Object(o.a)(t, 2),
          i = n[0],
          c = n[1],
          p = s.a.useRef(null),
          f = Object(d.If)().data,
          b = Object(w.a)().showError,
          j = s.a.useCallback(
            function (t) {
              if (f && f.currentUser) {
                var n = f.currentUser;
                if (
                  !n.hasUnverifiedCommentingGate &&
                  n.hasVerifyAndCommentGate &&
                  !n.isVerified
                )
                  return (
                    t && (t.preventDefault(), t.stopPropagation()), void c(!0)
                  );
                e.onSubmit(t);
              } else b("Log in to comment");
            },
            [f, e.onSubmit]
          );
        s.a.useEffect(
          function () {
            f &&
              f.currentUser &&
              Object(h.track)(h.events.VERIFY_AND_COMMENT_SPLIT_TEST, {
                recieved: f.currentUser.hasVerifyAndCommentGate,
              });
          },
          [f]
        );
        var m = s.a.useCallback(
          function (e) {
            13 === e.keyCode &&
              e.metaKey &&
              (p.current && p.current.blur && p.current.blur(), j());
          },
          [e.uniqueId, j]
        );
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsxs)("form", {
              onSubmit: j,
              className: "jsx-880454602",
              children: [
                Object(r.jsx)("div", {
                  className: "jsx-880454602 board-comment-form-row",
                  children: Object(r.jsx)(l.a, {
                    uniqueId: e.uniqueId,
                    ref: p,
                    name: "body",
                    placeholder: "Add a comment",
                    value: e.body,
                    autofocus: e.autofocus,
                    onChange: function (t) {
                      return e.onChange({ body: t });
                    },
                    onFocus: e.onFocus,
                    onKeyDown: m,
                    getAtMentionSuggestionsContext:
                      e.getAtMentionSuggestionsContext,
                    required: !0,
                  }),
                }),
                e.expanded && !i
                  ? Object(r.jsx)(u.a, {
                      cta: e.cta,
                      loading: e.loading,
                      cancelable: e.cancelable,
                      onCancel: e.onCancel,
                    })
                  : null,
                Object(r.jsx)(a.a, {
                  id: "880454602",
                  children: [
                    ".board-comment-form-row.jsx-880454602{margin-top:10px;margin-bottom:10px;}",
                  ],
                }),
              ],
            }),
            e.expanded && i
              ? Object(r.jsx)(O, { onVerification: e.onSubmit })
              : null,
          ],
        });
      };
    },
    ykE5: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = this.options.emphasis;
        return t + this.all(e).join("") + t;
      };
    },
    zZPE: function (e, t) {
      var n,
        r,
        o = Function.prototype,
        i = Object.prototype,
        a = o.toString,
        c = i.hasOwnProperty,
        s = a.call(Object),
        l = i.toString,
        u =
          ((n = Object.getPrototypeOf),
          (r = Object),
          function (e) {
            return n(r(e));
          });
      e.exports = function (e) {
        if (
          !(function (e) {
            return !!e && "object" == typeof e;
          })(e) ||
          "[object Object]" != l.call(e) ||
          (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                t = !!(e + "");
              } catch (n) {}
            return t;
          })(e)
        )
          return !1;
        var t = u(e);
        if (null === t) return !0;
        var n = c.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && a.call(n) == s;
      };
    },
    zhTl: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return j;
      });
      var r = n("nKUr"),
        o = n("jT3O"),
        i = n("MX0m"),
        a = n.n(i),
        c = (n("q1tI"), n("lTCR")),
        s = n.n(c),
        l = n("YFqc"),
        u = n.n(l),
        d = n("Fklr"),
        p = n("8bdv");
      function f() {
        var e = Object(o.a)([
          "\n    fragment PostAnsweredCardComment on Comment {\n      id\n      url\n    }\n  ",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = Object(o.a)([
          "\n    fragment PostAnsweredCardUser on User {\n      id\n      username\n      ...DepreciatedUserLabelUser\n    }\n    ",
          "\n  ",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      var j = { user: s()(b(), p.b.fragments.user), answer: s()(f()) };
      t.a = function (e) {
        var t = e.user,
          n = e.answer,
          o = e.hashLink;
        return Object(r.jsxs)("div", {
          className: "jsx-3691802722 post-answered-by-card",
          children: [
            Object(r.jsxs)("div", {
              className: "jsx-3691802722",
              children: [
                Object(r.jsx)(d.a, { size: 25 }),
                " ",
                Object(r.jsx)("span", {
                  className: "jsx-3691802722",
                  children: "Answered by",
                }),
                " ",
                Object(r.jsx)(p.b, { user: t }),
                " ",
                Object(r.jsx)("span", {
                  className: "jsx-3691802722 post-answered-by-card-earned",
                  children: "[earned 5 cycles]",
                }),
              ],
            }),
            Object(r.jsx)("div", {
              className: "jsx-3691802722 post-answered-by-card-answer-link",
              children: o
                ? Object(r.jsx)("a", {
                    href: "#".concat(n.id),
                    className: "jsx-3691802722",
                    children: "View Answer",
                  })
                : Object(r.jsx)(u.a, {
                    href: { pathname: "/comment", query: { id: String(n.id) } },
                    as: n.url,
                    children: Object(r.jsx)("a", {
                      className: "jsx-3691802722",
                      children: "View Answer",
                    }),
                  }),
            }),
            Object(r.jsx)(a.a, {
              id: "3691802722",
              children: [
                ".post-answered-by-card.jsx-3691802722{margin-top:20px;margin-bottom:20px;background-color:var(--color-green-transparent-3);color:var(--color-positive-4);padding:10px;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;}",
                ".post-answered-by-card.jsx-3691802722>div.jsx-3691802722{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                ".post-answered-by-card-earned.jsx-3691802722{margin-left:4px;}",
                ".post-answered-by-card-answer-link.jsx-3691802722{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}",
                "span.jsx-3691802722{margin-right:4px;}",
                "a.jsx-3691802722{font-size:14px;}",
                "@media screen and (min-width:500px){.post-answered-by-card.jsx-3691802722{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.post-answered-by-card.jsx-3691802722>div.jsx-3691802722{margin-bottom:0;}}",
              ],
            }),
          ],
        });
      };
    },
  },
  [
    [
      60, 2, 1, 16, 0, 3, 4, 5, 6, 7, 11, 9, 12, 13, 17, 14, 15, 18, 20, 21, 23,
      22, 26, 27, 29, 32,
    ],
  ],
]);

(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [57],
  {
    "/YWt": function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return d;
      });
      var o = a("cpVT"),
        s = a("q1tI"),
        r = a.n(s),
        i = a("zgDP"),
        n = a("5QjX");
      function c(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(a), !0).forEach(function (e) {
                Object(o.a)(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function d(t) {
        var e = Object(n.a)(t.gate);
        r.a.useEffect(function () {
          Object(i.track)(
            t.event,
            t.data ? l(l({}, t.data), {}, { recieved: e }) : { recieved: e }
          );
        }, []);
      }
    },
    "2WFA": function (t, e, a) {
      "use strict";
      var o = a("nKUr"),
        s = a("cpVT"),
        r = a("MX0m"),
        i = a.n(r),
        n = (a("q1tI"), a("YFqc")),
        c = a.n(n),
        l = a("EQ2k"),
        d = a("Dy7O"),
        m = function (t) {
          var e = t.fill,
            a = t.width,
            s = t.height;
          return Object(o.jsxs)("div", {
            className: i.a.dynamic([
              ["1937252334", [a || "auto", s || "auto"]],
            ]),
            children: [
              Object(o.jsx)("svg", {
                width: "42px",
                height: "43px",
                viewBox: "0 0 42 43",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: i.a.dynamic([
                  ["1937252334", [a || "auto", s || "auto"]],
                ]),
                children: Object(o.jsx)("g", {
                  className: i.a.dynamic([
                    ["1937252334", [a || "auto", s || "auto"]],
                  ]),
                  children: Object(o.jsx)("g", {
                    transform: "translate(-11, -5)",
                    fill: e,
                    className: i.a.dynamic([
                      ["1937252334", [a || "auto", s || "auto"]],
                    ]),
                    children: Object(o.jsx)("path", {
                      d: "M27.4401695,34.8449314 L13.3449314,34.8449314 L21.7258838,23.8449314 L21.3449314,23.8449314 L21.3449314,3.84493142 L37.3449314,3.84493142 L37.3449314,23.8449314 L36.963979,23.8449314 L45.3449314,34.8449314 L31.2496933,34.8449314 L29.3449314,54.8449314 L27.4401695,34.8449314 Z",
                      transform:
                        "translate(29.344931, 29.344931) rotate(-315) translate(-29, -29.344931) ",
                      className: i.a.dynamic([
                        ["1937252334", [a || "auto", s || "auto"]],
                      ]),
                    }),
                  }),
                }),
              }),
              Object(o.jsx)(i.a, {
                id: "1937252334",
                dynamic: [a || "auto", s || "auto"],
                children: [
                  "svg.__jsx-style-dynamic-selector{display:block;width:"
                    .concat(a || "auto", ";height:")
                    .concat(s || "auto", ";}"),
                ],
              }),
            ],
          });
        };
      m.defaultProps = { fill: l.a.blue, height: "20px" };
      var p = m,
        b = a("kFyI"),
        x = a("ZY4G"),
        j = a("yVCx"),
        u = a("Fklr"),
        h = function () {
          return Object(o.jsxs)("div", {
            className:
              i.a.dynamic([["3667135421", [l.a.paleGreen, l.a.green]]]) +
              " post-answered-badge",
            children: [
              Object(o.jsx)(u.a, { size: 15 }),
              " ",
              Object(o.jsx)("span", {
                className: i.a.dynamic([
                  ["3667135421", [l.a.paleGreen, l.a.green]],
                ]),
                children: "answered",
              }),
              Object(o.jsx)(i.a, {
                id: "3667135421",
                dynamic: [l.a.paleGreen, l.a.green],
                children: [
                  ".post-answered-badge.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:"
                    .concat(l.a.paleGreen, ";color:")
                    .concat(
                      l.a.green,
                      ";border-radius:3px;font-size:12px;font-weight:normal;line-height:1;padding:1px 4px 1px 1px;}"
                    ),
                ],
              }),
            ],
          });
        },
        y = a("CJNb"),
        g = a("igWl"),
        f = a("W27C"),
        v = a("8bdv"),
        O = a("Gbtx"),
        w = a("zgDP"),
        k = a("knUX"),
        _ = function (t) {
          var e = t.comment;
          return Object(o.jsxs)("div", {
            className: "jsx-1661908866",
            children: [
              Object(o.jsxs)("div", {
                className: "jsx-1661908866 simple-comment-header",
                children: [
                  e.user
                    ? Object(o.jsx)(g.a, {
                        username: e.user.username,
                        children: Object(o.jsx)(v.b, {
                          user: e.user,
                          adminBadge: e.user.isAdmin || e.user.isModerator,
                        }),
                      })
                    : Object(o.jsx)(v.b, {}),
                  Object(o.jsx)("div", {
                    className: "jsx-1661908866 simple-comment-timestamp",
                    children: Object(o.jsx)(j.a, { date: e.timeCreated }),
                  }),
                ],
              }),
              Object(o.jsx)("div", {
                className: "jsx-1661908866 simple-comment-preview",
                children: e.preview,
              }),
              Object(o.jsx)(i.a, {
                id: "1661908866",
                children: [
                  ".simple-comment-header.jsx-1661908866{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:2px;}",
                  ".simple-comment-timestamp.jsx-1661908866{font-size:12px;margin-left:4px;color:var(--color-foreground-2);}",
                  ".simple-comment-preview.jsx-1661908866{word-break:break-word;}",
                ],
              }),
            ],
          });
        },
        N = a("jK9h"),
        C = a("5QjX");
      function L(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(a), !0).forEach(function (e) {
                Object(s.a)(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : L(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      var F = function (t) {
          return function () {
            Object(w.track)(w.events.LANGUAGE_FILTER_CLICK, { lang: t });
          };
        },
        M = {
          styles: Object(o.jsx)(i.a, {
            id: "1874417601",
            children: [
              "*.jsx-1874417601{position:absolute;top:0;left:0;width:100%;height:100%;}",
            ],
          }),
          className: "jsx-1874417601",
        };
      e.a = function (t) {
        var e = t.post,
          a = t.onClick,
          s = t.hidePinnedIcon,
          r = t.langLinkProps,
          n = t.breakpoint,
          m = t.responsive,
          u = Object(C.a)("recent-post-comments"),
          w = e.repl && e.repl.lang ? e.repl.lang : void 0;
        return Object(o.jsxs)("div", {
          onClick: a,
          className:
            i.a.dynamic([["1839547356", [l.a.gray75]]]) +
            " board-post-list-item-container",
          children: [
            Object(o.jsx)(
              c.a,
              E(
                E({}, Object(N.a)(e)),
                {},
                {
                  children: Object(o.jsx)("a", {
                    className: i.a.dynamic([["1839547356", [l.a.gray75]]]),
                    children: Object(o.jsx)(k.a, {
                      Component: "div",
                      interactive: !0,
                      responsive: m,
                      listItem: !0,
                      breakpoint: n,
                      className: M.className,
                      children: M.styles,
                    }),
                  }),
                }
              )
            ),
            Object(o.jsxs)("div", {
              className:
                i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                " board-post-list-item",
              children: [
                Object(o.jsx)("div", {
                  className:
                    i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                    " board-post-list-item-left",
                  children: e.isAnnouncement
                    ? Object(o.jsx)("div", {
                        className:
                          i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                          " board-post-list-item-announcment-icon",
                        children: Object(o.jsx)(x.a, {
                          width: "25px",
                          height: "auto",
                        }),
                      })
                    : Object(o.jsx)(d.a, { lite: !0, post: e }),
                }),
                Object(o.jsxs)("div", {
                  className:
                    i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                    " board-post-list-item-content",
                  children: [
                    e.isAnswerable && e.isAnswered
                      ? Object(o.jsx)("div", {
                          className:
                            i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                            " board-post-list-item-answered-header",
                          children: Object(o.jsx)(h, {}),
                        })
                      : null,
                    Object(o.jsxs)("div", {
                      className:
                        i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                        " board-post-list-item-header",
                      children: [
                        Object(o.jsx)("div", {
                          className:
                            i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                            " board-post-list-item-header-image",
                          children: e.user
                            ? Object(o.jsx)(g.a, {
                                block: !0,
                                username: e.user.username,
                                children: Object(o.jsx)(f.b, {
                                  user: e.user,
                                  children: Object(o.jsx)("a", {
                                    className:
                                      i.a.dynamic([
                                        ["1839547356", [l.a.gray75]],
                                      ]) + " user-post-image",
                                    children: Object(o.jsx)(O.a, {
                                      size: "inherit",
                                      url: e.user.image,
                                      hackerBadge: e.user.isHacker,
                                    }),
                                  }),
                                }),
                              })
                            : Object(o.jsx)(O.a, { size: "inherit" }),
                        }),
                        Object(o.jsxs)("div", {
                          className:
                            i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                            " board-post-list-item-header-content",
                          children: [
                            e.user
                              ? Object(o.jsx)(g.a, {
                                  username: e.user.username,
                                  children: Object(o.jsx)(v.b, {
                                    user: e.user,
                                    adminBadge:
                                      e.user.isAdmin || e.user.isModerator,
                                  }),
                                })
                              : Object(o.jsx)(v.b, {}),
                            Object(o.jsx)("div", {
                              className: i.a.dynamic([
                                ["1839547356", [l.a.gray75]],
                              ]),
                              children: Object(o.jsx)(
                                c.a,
                                E(
                                  E({}, Object(N.a)(e)),
                                  {},
                                  {
                                    children: Object(o.jsx)("a", {
                                      onClick: a,
                                      className:
                                        i.a.dynamic([
                                          ["1839547356", [l.a.gray75]],
                                        ]) +
                                        " board-post-list-item-header-timestamp",
                                      children: Object(o.jsx)(j.a, {
                                        date: e.timeCreated,
                                      }),
                                    }),
                                  }
                                )
                              ),
                            }),
                          ],
                        }),
                        Object(o.jsxs)("div", {
                          className:
                            i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                            " board-post-list-item-header-modifiers",
                          children: [
                            e.isPinned && !s
                              ? Object(o.jsx)("div", {
                                  title: "pinned",
                                  className: i.a.dynamic([
                                    ["1839547356", [l.a.gray75]],
                                  ]),
                                  children: Object(o.jsx)(p, {
                                    height: "15px",
                                    width: "auto",
                                  }),
                                })
                              : null,
                            e.isLocked
                              ? Object(o.jsx)("div", {
                                  title: "locked",
                                  className: i.a.dynamic([
                                    ["1839547356", [l.a.gray75]],
                                  ]),
                                  children: Object(o.jsx)(b.a, {
                                    height: "15px",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                    Object(o.jsx)("div", {
                      className:
                        i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                        " board-post-list-item-post-container",
                      children: Object(o.jsxs)("div", {
                        className:
                          i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                          " board-post-list-item-post",
                        children: [
                          Object(o.jsx)("div", {
                            onClick: a,
                            className:
                              i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                              " board-post-list-item-post-title",
                            children: e.title,
                          }),
                          Object(o.jsx)("div", {
                            className:
                              i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                              " board-post-list-item-post-preview",
                            children: e.preview,
                          }),
                        ],
                      }),
                    }),
                    Object(o.jsxs)("div", {
                      className:
                        i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                        " board-post-list-item-footer",
                      children: [
                        e.board
                          ? Object(o.jsx)("div", {
                              className: i.a.dynamic([
                                ["1839547356", [l.a.gray75]],
                              ]),
                              children: Object(o.jsx)(c.a, {
                                href: {
                                  pathname: "/postsFeed",
                                  query: { boardSlug: e.board.slug },
                                },
                                as: e.board.url,
                                children: Object(o.jsx)("a", {
                                  style: {
                                    backgroundColor: e.board.color || void 0,
                                  },
                                  className:
                                    i.a.dynamic([
                                      ["1839547356", [l.a.gray75]],
                                    ]) + " board-post-list-item-board",
                                  children: e.board.name,
                                }),
                              }),
                            })
                          : null,
                        w
                          ? Object(o.jsx)("div", {
                              className: i.a.dynamic([
                                ["1839547356", [l.a.gray75]],
                              ]),
                              children: Object(o.jsx)(
                                y.a,
                                E(
                                  E({}, r(w.key)),
                                  {},
                                  { language: w, onClick: F(w.key), small: !0 }
                                )
                              ),
                            })
                          : null,
                        Object(o.jsx)("div", {
                          className: i.a.dynamic([
                            ["1839547356", [l.a.gray75]],
                          ]),
                          children: Object(o.jsx)(
                            c.a,
                            E(
                              E({}, Object(N.a)(e)),
                              {},
                              {
                                children: Object(o.jsxs)("a", {
                                  className:
                                    i.a.dynamic([
                                      ["1839547356", [l.a.gray75]],
                                    ]) + " board-post-list-item-comments-link",
                                  children: [
                                    e.commentCount > 0
                                      ? "".concat(e.commentCount, " ")
                                      : null,
                                    e.commentCount > 1 ? "comments" : "comment",
                                  ],
                                }),
                              }
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u && e.recentComments && e.recentComments.length
              ? Object(o.jsxs)("div", {
                  className:
                    i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                    " board-post-list-item-recent-comments",
                  children: [
                    Object(o.jsx)("div", {
                      className:
                        i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                        " board-post-list-item-recent-comments-heading",
                      children: "latest comments",
                    }),
                    Object(o.jsx)("div", {
                      className:
                        i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                        " board-post-list-item-recent-comments-list",
                      children: e.recentComments.map(function (t) {
                        return Object(o.jsx)(
                          "div",
                          {
                            className:
                              i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                              " board-post-list-item-recent-comments-list-item",
                            children: Object(o.jsx)(_, { comment: t }),
                          },
                          t.id
                        );
                      }),
                    }),
                    Object(o.jsx)(
                      c.a,
                      E(
                        E({}, Object(N.a)(e)),
                        {},
                        {
                          children: Object(o.jsx)("a", {
                            className:
                              i.a.dynamic([["1839547356", [l.a.gray75]]]) +
                              " board-post-list-item-comments-link",
                            children: "view all \u203a",
                          }),
                        }
                      )
                    ),
                  ],
                })
              : null,
            Object(o.jsx)(i.a, {
              id: "1839547356",
              dynamic: [l.a.gray75],
              children: [
                ".board-post-list-item-recent-comments.__jsx-style-dynamic-selector,.board-post-list-item-container.__jsx-style-dynamic-selector{position:relative;}",
                ".board-post-list-item-recent-comments.__jsx-style-dynamic-selector{padding-top:10px;padding-bottom:15px;margin-right:20px;pointer-events:none;cursor:pointer;color:var(--color-foreground-2);}",
                ".board-post-list-item-recent-comments-list.__jsx-style-dynamic-selector{border:1px solid var(--color-control-3);padding:10px;margin-bottom:5px;}",
                ".board-post-list-item-recent-comments-list-item.__jsx-style-dynamic-selector{padding-top:10px;}",
                ".board-post-list-item-recent-comments-list-item.__jsx-style-dynamic-selector:first-child{padding-top:0;}",
                ".board-post-list-item-recent-comments-heading.__jsx-style-dynamic-selector{font-size:12px;font-weight:bold;padding-bottom:5px;color:var(--color-foreground-2);}",
                ".board-post-list-item.__jsx-style-dynamic-selector{pointer-events:none;padding:15px 20px 15px 5px;position:relative;cursor:pointer;}",
                ".board-post-list-item.__jsx-style-dynamic-selector a,.board-post-list-item.__jsx-style-dynamic-selector button,.board-post-list-item-recent-comments.__jsx-style-dynamic-selector a,.board-post-list-item-recent-comments.__jsx-style-dynamic-selector button{pointer-events:all;}",
                ".board-post-list-item-answered-header.__jsx-style-dynamic-selector{margin-bottom:5px;}",
                ".board-post-list-item-header.__jsx-style-dynamic-selector{margin-bottom:4px;}",
                ".board-post-list-item-header.__jsx-style-dynamic-selector,.board-post-list-item-footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
                ".board-post-list-item-left.__jsx-style-dynamic-selector{width:40px;position:absolute;left:0;top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
                ".board-post-list-item-announcment-icon.__jsx-style-dynamic-selector{margin-top:14px;}",
                ".board-post-list-item-header.__jsx-style-dynamic-selector,.board-post-list-item-footer.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
                ".board-post-list-item-header-modifiers.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:12px;color:".concat(
                  l.a.gray75,
                  ";-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}"
                ),
                ".board-post-list-item-header-modifiers.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:6px;}",
                ".board-post-list-item-header-modifiers.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-right:3px;}",
                ".board-post-list-item-footer.__jsx-style-dynamic-selector{padding-top:16px;}",
                ".board-post-list-item-footer.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:10px;}",
                ".board-post-list-item-footer.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-child{margin-left:auto;margin-right:0;}",
                ".board-post-list-item-comments-link.__jsx-style-dynamic-selector{font-size:12px;font-weight:bold;}",
                ".board-post-list-item-header-image.__jsx-style-dynamic-selector{width:35px;margin-right:5px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}",
                ".board-post-list-item-header-content.__jsx-style-dynamic-selector{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;line-height:14px;}",
                ".board-post-list-item-board.__jsx-style-dynamic-selector{text-transform:lowercase;font-size:12px;padding:2px 6px;color:white;border-radius:3px;font-weight:bold;display:inline-block;background-color:#aaa;}",
                ".board-post-list-item-header-timestamp.__jsx-style-dynamic-selector{font-size:12px;line-height:1;color:var(--color-foreground-2);display:inline-block;}",
                ".board-post-list-item-recent-comments.__jsx-style-dynamic-selector,.board-post-list-item-content.__jsx-style-dynamic-selector{margin-left:40px;}",
                ".board-post-list-item-post-title.__jsx-style-dynamic-selector{font-weight:bold;margin-top:6px;color:var(--color-foreground-1);}",
                ".board-post-list-item-post-preview.__jsx-style-dynamic-selector{font-size:14px;margin-top:3px;color:var(--color-foreground-2);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;}",
                ".board-post-list-item-post.__jsx-style-dynamic-selector{overflow:hidden;}",
                ".board-post-list-item-post-title.__jsx-style-dynamic-selector,.board-post-list-item-post-preview.__jsx-style-dynamic-selector{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block;border-bottom:0 none;}",
              ],
            }),
          ],
        });
      };
    },
    A3V5: function (t, e, a) {
      "use strict";
      var o = a("q1tI"),
        s = a("17x9"),
        r = Math.sqrt(2);
      function i(t) {
        var e = "top" === t.direction || "bottom" === t.direction,
          a = "left" === t.direction || "top" === t.direction,
          s = t.borderWidth * r,
          i = s / 2,
          n = 2 * t.size + 2 * s,
          c = t.size + s,
          l = a ? c : 0,
          d = a ? i : c - i,
          m = n / 2,
          p = n - i,
          b = e
            ? ["M", i, l, "L", m, d, "L", p, l]
            : ["M", l, i, "L", d, m, "L", l, p];
        return o.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/svg/2000",
            width: e ? n : c,
            height: e ? c : n,
            style: t.style,
            className: t.className,
          },
          o.createElement("path", {
            d: b.join(" "),
            fill: t.color,
            stroke: t.borderColor,
            strokeWidth: t.borderWidth,
            strokeLinecap: "square",
          })
        );
      }
      (i.propTypes = {
        color: s.string.isRequired,
        size: s.number.isRequired,
        direction: s.oneOf(["top", "right", "bottom", "left"]).isRequired,
        borderWidth: s.number,
        borderColor: s.string,
        style: s.object,
        className: s.string,
      }),
        (i.defaultProps = { borderWidth: 0, borderColor: "transparent" }),
        (t.exports = i);
    },
    Dy7O: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return d;
      });
      var o = a("nKUr"),
        s = a("xvhg"),
        r = (a("q1tI"), a("/MKj")),
        i = a("b518"),
        n = a("tZOq"),
        c = a("sLtE"),
        l = a("VoYB");
      function d(t) {
        var e = Object(l.a)().showError,
          a = t.post,
          d = Object(r.e)(),
          m = Object(r.f)(function (t) {
            return t.user.userInfo.isLoggedIn;
          }, r.d),
          p = Object(n.td)({
            onError: function (t) {
              return e(Object(i.d)(t.message));
            },
          }),
          b = Object(s.a)(p, 2),
          x = b[0],
          j = b[1].loading,
          u = Object(n.ud)({
            onError: function (t) {
              return e(Object(i.d)(t.message));
            },
          }),
          h = Object(s.a)(u, 2),
          y = h[0],
          g = h[1].loading;
        return Object(o.jsx)(c.a, {
          hasVoted: a.hasVoted,
          canVote: a.canVote,
          voteCount: a.voteCount,
          lite: t.lite,
          onClick: function () {
            if (m) {
              if (!j && !g) {
                a.canVote || e("Voting not allowed");
                var t = { postId: a.id };
                a.hasVoted ? y({ variables: t }) : x({ variables: t });
              }
            } else d({ type: "AUTH_MODAL_SHOW" });
          },
        });
      }
    },
    Fklr: function (t, e, a) {
      "use strict";
      var o = a("nKUr"),
        s = (a("q1tI"), a("EQ2k")),
        r = function (t) {
          var e = t.size,
            a = t.color;
          return Object(o.jsx)("svg", {
            width: e,
            height: e,
            fill: a,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: Object(o.jsx)("path", {
              d: "M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z",
            }),
          });
        };
      (r.defaultProps = { color: s.a.green }), (e.a = r);
    },
    X8yK: function (t, e, a) {
      "use strict";
      e.a = {
        brand: { darkBlue: "#0D101E", lightBlue: "#68CDEE", gray: "#6D7D84" },
        main: {
          green: {
            dark: "#0A6640",
            default: "#0F9960",
            light: "#3DCC91",
            25: "rgba(15,153,96,0.25)",
            15: "rgba(15,153,96,0.15)",
          },
          red: {
            dark: "#A82A2A",
            default: "#DB3737",
            light: "#FF7373",
            25: "rgba(219, 55, 55, 0.25)",
            15: "rgba(219, 55, 55, 0.15)",
          },
          blue: {
            dark: "#0068AD",
            default: "#0097FB",
            light: "#73C4FA",
            25: "rgba(0, 151, 251, 0.25)",
            15: "rgba(0, 151, 251, 0.15)",
          },
          orange: {
            dark: "#A14809",
            default: "#E16D1A",
            light: "#FC9C58",
            25: "rgba(225, 109, 26, 0.25)",
            15: "rgba(225, 109, 26, 0.15)",
          },
          purple: {
            dark: "#6213B1",
            default: "#9D43F7",
            light: "#BF80FF",
            25: "rgba(98, 19, 177, 0.25)",
            15: "rgba(98, 19, 177, 0.15)",
          },
          gold: {
            dark: "#A67908",
            default: "#D99E0B",
            light: "#FFC940",
            25: "rgba(217, 158, 11, 0.25)",
            15: "rgba(217, 158, 11, 0.15)",
          },
        },
        neutrals: {
          black: "#21242C",
          white: "#FFFFFF",
          offWhite: "#F7F8FA",
          black64: "rgba(33, 36, 44, 0.64)",
          black50: "rgba(33, 36, 44, 0.50)",
          black16: "rgba(33, 36, 44, 0.16)",
          black8: "rgba(33, 36, 44, 0.08)",
          white64: "rgba(255, 255, 255, 0.64)",
          white50: "rgba(255, 255, 255, 0.50)",
          white16: "rgba(255, 255, 255, 0.16)",
          white8: "rgba(255, 255, 255, 0.08)",
        },
        multiplayer: {
          green: "#1BC47D",
          red: "#EF5533",
          blue: "#18A0FB",
          gold: "#FFC700",
          purple: "#907CFF",
          teal: "#00B5CE",
          pink: "#EE46D3",
        },
        languages: {
          java: "#b07219",
          scheme: "#1e4aec",
          clojure: "#db5855",
          haskell: "#5e5086",
          lua: "#000080",
          ruby: "#701516",
          python: "#3572A5",
          go: "#00ADD8",
          cpp: "#f34b7d",
          c: "#555555",
          "c#": "#178600",
          "f#": "#b845fc",
          rust: "#dea584",
          swift: "#ffac45",
          r: "#198CE7",
          bash: "#000000",
          crystal: "#000100",
          julia: "#a270ba",
          elixir: "#6e4a7e",
          nim: "#37775b",
          dart: "#00B4AB",
          erlang: "#B83998",
          typescript: "#2b7489",
          elisp: "#c065db",
          sql: "#e34c26",
          php: "#4F5D95",
          html: "#e34c26",
          css: "#563d7c",
          javascript: "#f1e05a",
        },
      };
    },
    ZY4G: function (t, e, a) {
      "use strict";
      var o = a("nKUr"),
        s = a("MX0m"),
        r = a.n(s),
        i = (a("q1tI"), a("EQ2k")),
        n = function (t) {
          var e = t.stroke,
            a = t.width,
            s = t.height;
          return Object(o.jsxs)("div", {
            className: r.a.dynamic([
              ["1937252334", [a || "auto", s || "auto"]],
            ]),
            children: [
              Object(o.jsx)("svg", {
                width: "53px",
                height: "37px",
                viewBox: "0 0 53 37",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: r.a.dynamic([
                  ["1937252334", [a || "auto", s || "auto"]],
                ]),
                children: Object(o.jsx)("g", {
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: r.a.dynamic([
                    ["1937252334", [a || "auto", s || "auto"]],
                  ]),
                  children: Object(o.jsx)("g", {
                    stroke: e,
                    strokeWidth: "2",
                    className: r.a.dynamic([
                      ["1937252334", [a || "auto", s || "auto"]],
                    ]),
                    children: Object(o.jsxs)("g", {
                      className: r.a.dynamic([
                        ["1937252334", [a || "auto", s || "auto"]],
                      ]),
                      children: [
                        Object(o.jsx)("polygon", {
                          points: "41.73 29.68 5 23 5 7 41.73 0.32",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                        Object(o.jsx)("path", {
                          d: "M11,6 L11,31.25 C11.0036168,33.6295084 12.7465542,35.6487651 15.1,36 L17.5,36",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                        Object(o.jsx)("path", {
                          d: "M5,9 L5,21 C2.23857625,21 8.8817842e-16,18.7614237 8.8817842e-16,16 L8.8817842e-16,14 C8.8817842e-16,11.2385763 2.23857625,9 5,9 Z",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                        Object(o.jsx)("path", {
                          d: "M48,15 L52,15",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                        Object(o.jsx)("path", {
                          d: "M47.44,10.25 L50.56,7.75",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                        Object(o.jsx)("path", {
                          d: "M50.56,22.25 L47.44,19.75",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(o.jsx)(r.a, {
                id: "1937252334",
                dynamic: [a || "auto", s || "auto"],
                children: [
                  "svg.__jsx-style-dynamic-selector{display:block;width:"
                    .concat(a || "auto", ";height:")
                    .concat(s || "auto", ";}"),
                ],
              }),
            ],
          });
        };
      (n.defaultProps = { stroke: i.a.yellow, width: "40px" }), (e.a = n);
    },
    imBe: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return u;
      });
      var o = a("nKUr"),
        s = a("xEHj"),
        r = a("H+61"),
        i = a("UlJF"),
        n = a("7LId"),
        c = a("VIvw"),
        l = a("iHvq"),
        d = a("MX0m"),
        m = a.n(d),
        p = a("q1tI"),
        b = a("A3V5"),
        x = a.n(b);
      function j(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var a,
            o = Object(l.a)(t);
          if (e) {
            var s = Object(l.a)(this).constructor;
            a = Reflect.construct(o, arguments, s);
          } else a = o.apply(this, arguments);
          return Object(c.a)(this, a);
        };
      }
      var u = (function (t) {
        Object(n.a)(a, t);
        var e = j(a);
        function a() {
          var t;
          Object(r.a)(this, a);
          for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
            s[i] = arguments[i];
          return (
            ((t = e.call.apply(e, [this].concat(s))).state = { hover: !1 }),
            (t.onMouseEnter = function (e) {
              t.props.onMouseEnter && t.props.onMouseEnter(e),
                t.setState({ hover: !0 });
            }),
            (t.onMouseLeave = function (e) {
              t.props.onMouseLeave && t.props.onMouseLeave(e),
                t.setState({ hover: !1 });
            }),
            (t.onClick = function (e) {
              t.props.onClick && t.props.onClick(e),
                t.props.hideOnClick && t.setState({ hover: !1 });
            }),
            t
          );
        }
        return (
          Object(i.a)(a, [
            {
              key: "render",
              value: function () {
                var t = this.props.position || "right",
                  e =
                    !this.props.hideTooltip &&
                    (this.props.showTooltip || this.state.hover),
                  a = p.Children.toArray(this.props.children),
                  r = Object(s.a)(a),
                  i = r[0],
                  n = r.slice(1),
                  c = p.cloneElement(i, {
                    key: "tooltip",
                    className: "tooltip-wrap-tooltip tooltip-wrap-".concat(t),
                    style: i.props.style,
                  });
                return Object(o.jsxs)("div", {
                  style: this.props.style,
                  onClick: this.onClick,
                  className: "jsx-4267586957 tooltip-base",
                  children: [
                    e && [
                      Object(o.jsx)(
                        "div",
                        {
                          className:
                            "jsx-4267586957 " +
                            "tooltip-handle tooltip-handle-".concat(t),
                          children: Object(o.jsx)(x.a, {
                            size: 10,
                            direction: h[t],
                            borderWidth: this.props.arrowBorderWidth,
                            color: "var(--color-background-1)",
                            borderColor: "var(--color-foreground-3)",
                          }),
                        },
                        "handle"
                      ),
                      c,
                    ],
                    Object(o.jsx)("div", {
                      style: this.props.wrapperStyle,
                      onMouseEnter: this.onMouseEnter,
                      onMouseLeave: this.onMouseLeave,
                      className: "jsx-4267586957",
                      children: n,
                    }),
                    Object(o.jsx)(m.a, {
                      id: "3051118086",
                      children: [
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-tooltip{border:1px solid var(--color-foreground-3);background-color:var(--color-background-1);color:var(--color-foreground-1);}",
                      ],
                    }),
                    Object(o.jsx)(m.a, {
                      id: "1093755106",
                      children: [
                        ".tooltip-base.jsx-4267586957{position:relative;}",
                        ".tooltip-handle.jsx-4267586957{position:absolute;height:10px;width:16px;z-index:1011;}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-tooltip{padding:12px;border-radius:1px;box-sizing:border-box;position:absolute;z-index:1010;font-size:14px;line-height:18px;white-space:nowrap;}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-top{left:-100%;bottom:calc(100% + 23px);-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-right{top:50%;left:calc(100% + 14px);-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-topRight{right:calc(20% - 4px);bottom:calc(100% + 23px);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-bottom{left:calc(50% + 2px);top:calc(100% + 13px);-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}",
                        ".tooltip-base.jsx-4267586957 .tooltip-wrap-left{top:50%;right:calc(100% + 14px);-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}",
                        ".tooltip-handle-top.jsx-4267586957{bottom:100%;left:50%;-webkit-transform:translate(-50%,-19px);-ms-transform:translate(-50%,-19px);transform:translate(-50%,-19px);}",
                        ".tooltip-handle-right.jsx-4267586957{top:50%;left:100%;-webkit-transform:translate(4px,-108%);-ms-transform:translate(4px,-108%);transform:translate(4px,-108%);}",
                        ".tooltip-handle-topRight.jsx-4267586957{bottom:100%;left:50%;-webkit-transform:translate(calc(-50% - 4px),-17px);-ms-transform:translate(calc(-50% - 4px),-17px);transform:translate(calc(-50% - 4px),-17px);}",
                        ".tooltip-handle-bottom.jsx-4267586957{top:100%;left:50%;-webkit-transform:translate(-50%,-2px);-ms-transform:translate(-50%,-2px);transform:translate(-50%,-2px);}",
                        ".tooltip-handle-left.jsx-4267586957{top:50%;right:100%;-webkit-transform:translate(1px,-108%);-ms-transform:translate(1px,-108%);transform:translate(1px,-108%);}",
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          a
        );
      })(p.Component);
      u.defaultProps = {
        position: "right",
        onMouseEnter: function () {},
        onMouseLeave: function () {},
        arrowBorderColor: "#ecedec",
        arrowBorderWidth: 1,
      };
      var h = {
        top: "bottom",
        bottom: "top",
        right: "left",
        topRight: "bottom",
        left: "right",
      };
    },
    jK9h: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return o;
      });
      var o = function (t) {
        return {
          as: t.url,
          href: { pathname: "/post", query: { id: String(t.id) } },
        };
      };
    },
    kFyI: function (t, e, a) {
      "use strict";
      var o = a("nKUr"),
        s = a("MX0m"),
        r = a.n(s),
        i = (a("q1tI"), a("EQ2k")),
        n = function (t) {
          var e = t.fill,
            a = t.width,
            s = t.height;
          return Object(o.jsxs)("div", {
            className: r.a.dynamic([
              ["1937252334", [a || "auto", s || "auto"]],
            ]),
            children: [
              Object(o.jsx)("svg", {
                width: "22px",
                height: "32px",
                viewBox: "0 0 22 32",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: r.a.dynamic([
                  ["1937252334", [a || "auto", s || "auto"]],
                ]),
                children: Object(o.jsx)("g", {
                  className: r.a.dynamic([
                    ["1937252334", [a || "auto", s || "auto"]],
                  ]),
                  children: Object(o.jsx)("g", {
                    transform: "translate(-89, -23)",
                    fill: e,
                    fillRule: "nonzero",
                    className: r.a.dynamic([
                      ["1937252334", [a || "auto", s || "auto"]],
                    ]),
                    children: Object(o.jsxs)("g", {
                      transform: "translate(89, 23)",
                      className: r.a.dynamic([
                        ["1937252334", [a || "auto", s || "auto"]],
                      ]),
                      children: [
                        Object(o.jsx)("path", {
                          d: "M11.09,18.59 C9.9821125,18.598387 9.02266744,19.3610423 8.76455688,20.4384763 C8.50644632,21.5159102 9.01617275,22.6305209 10,23.14 L10,26 L12,26 L12,23.23 C13.0647784,22.7936395 13.6725238,21.6653931 13.4510621,20.5361818 C13.2296004,19.4069704 12.2407216,18.5918551 11.09,18.59 Z",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                        Object(o.jsx)("path", {
                          d: "M19,13 L19,8.72 C19.0894129,4.20620308 15.5133609,0.469228711 11,0.36 C6.48663913,0.469228711 2.9105871,4.20620308 3,8.72 L3,13 L0,13 L0,30 C0,31.1045695 0.8954305,32 2,32 L20,32 C21.1045695,32 22,31.1045695 22,30 L22,13 L19,13 Z M5,8.72 C4.91024699,5.31056291 7.59111881,2.46883878 11,2.36 C14.4088812,2.46883878 17.089753,5.31056291 17,8.72 L17,13 L5,13 L5,8.72 Z M2,30 L2,15 L20,15 L20,30 L2,30 Z",
                          className: r.a.dynamic([
                            ["1937252334", [a || "auto", s || "auto"]],
                          ]),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(o.jsx)(r.a, {
                id: "1937252334",
                dynamic: [a || "auto", s || "auto"],
                children: [
                  "svg.__jsx-style-dynamic-selector{display:block;width:"
                    .concat(a || "auto", ";height:")
                    .concat(s || "auto", ";}"),
                ],
              }),
            ],
          });
        };
      (n.defaultProps = { fill: i.a.blue, width: "15px" }), (e.a = n);
    },
    sLtE: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return c;
      });
      var o = a("nKUr"),
        s = a("MX0m"),
        r = a.n(s),
        i = (a("q1tI"), a("TSYQ")),
        n = a.n(i);
      function c(t) {
        return Object(o.jsxs)("button", {
          onClick: function () {
            t.canVote && t.onClick();
          },
          title: "Upvote",
          className:
            "jsx-2115020646 " +
            (n()(
              "vote-control",
              t.lite ? "vote-control-lite" : "vote-control-heavy",
              {
                "vote-control-active": t.hasVoted,
                "vote-control-can-vote": t.canVote,
              }
            ) || ""),
          children: [
            Object(o.jsx)("div", {
              className: "jsx-2115020646 vote-control-arrow",
              children: "\u25b2",
            }),
            Object(o.jsx)("div", {
              className: "jsx-2115020646 vote-control-count",
              children: t.voteCount,
            }),
            Object(o.jsx)(r.a, {
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
    xEHj: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return n;
      });
      var o = a("T/aA"),
        s = a("8tO+"),
        r = a("8rE2"),
        i = a("++Bh");
      function n(t) {
        return (
          Object(o.a)(t) || Object(s.a)(t) || Object(r.a)(t) || Object(i.a)()
        );
      }
    },
  },
]);

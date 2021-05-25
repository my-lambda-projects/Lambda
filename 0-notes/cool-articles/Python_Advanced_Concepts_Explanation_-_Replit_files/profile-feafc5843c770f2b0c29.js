_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [127],
  {
    "+wdE": function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return r("btdU");
        },
      ]);
    },
    "/a9y": function (e, t, r) {
      "use strict";
      var n = r("/GRZ"),
        i = r("i2R6"),
        o = r("48fX"),
        s = r("tCBg"),
        a = r("T0f4");
      function c(e) {
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
          var r,
            n = a(e);
          if (t) {
            var i = a(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return s(this, r);
        };
      }
      var l = r("AroE");
      (t.__esModule = !0), (t.default = void 0);
      var d = l(r("q1tI")),
        p = l(r("8Kt/")),
        u = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function j(e) {
        var t = e.res,
          r = e.err;
        return {
          statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
        };
      }
      var f = (function (e) {
        o(r, e);
        var t = c(r);
        function r() {
          return n(this, r), t.apply(this, arguments);
        }
        return (
          i(r, [
            {
              key: "render",
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    u[e] ||
                    "An unexpected error has occurred";
                return d.default.createElement(
                  "div",
                  { style: x.error },
                  d.default.createElement(
                    p.default,
                    null,
                    d.default.createElement("title", null, e, ": ", t)
                  ),
                  d.default.createElement(
                    "div",
                    null,
                    d.default.createElement("style", {
                      dangerouslySetInnerHTML: { __html: "body { margin: 0 }" },
                    }),
                    e
                      ? d.default.createElement("h1", { style: x.h1 }, e)
                      : null,
                    d.default.createElement(
                      "div",
                      { style: x.desc },
                      d.default.createElement("h2", { style: x.h2 }, t, ".")
                    )
                  )
                );
              },
            },
          ]),
          r
        );
      })(d.default.Component);
      (t.default = f),
        (f.displayName = "ErrorPage"),
        (f.getInitialProps = j),
        (f.origGetInitialProps = j);
      var x = {
        error: {
          color: "#000",
          background: "#fff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: {
          display: "inline-block",
          textAlign: "left",
          lineHeight: "49px",
          height: "49px",
          verticalAlign: "middle",
        },
        h1: {
          display: "inline-block",
          borderRight: "1px solid rgba(0, 0, 0,.3)",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontSize: "24px",
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: {
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "inherit",
          margin: 0,
          padding: 0,
        },
      };
    },
    "3gM7": function (e, t, r) {
      "use strict";
      var n = r("vJKn"),
        i = r.n(n),
        o = r("rg98"),
        s = r("G5Ub");
      t.a = (function () {
        var e = Object(o.a)(
          i.a.mark(function e(t, r) {
            var n, o, a;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 4;
                      break;
                    }
                    (n = t.user), (e.next = 13);
                    break;
                  case 4:
                    if (
                      !(
                        (o = r.getState().user) &&
                        o.userInfo.isLoggedIn &&
                        o.userInfo
                      )
                    ) {
                      e.next = 9;
                      break;
                    }
                    (n = o.userInfo), (e.next = 13);
                    break;
                  case 9:
                    return (e.next = 11), Object(s.b)("/is_authenticated");
                  case 11:
                    (a = e.sent).success && (n = a.user);
                  case 13:
                    return (
                      n &&
                        (t && (n = JSON.parse(JSON.stringify(n))),
                        r.dispatch({
                          type: "FETCH_USER_INFO_SUCCESS",
                          user: n,
                        })),
                      e.abrupt("return", { user: n })
                    );
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })();
    },
    63: function (e, t, r) {
      r("j36g"), (e.exports = r("+wdE"));
    },
    "8v8i": function (e, t, r) {
      "use strict";
      var n, i, o, s, a, c;
      r.d(t, "a", function () {
        return n;
      }),
        r.d(t, "b", function () {
          return i;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        (function (e) {
          (e.Create = "CREATE"),
            (e.Move = "MOVE"),
            (e.Delete = "DELETE"),
            (e.Modify = "MODIFY");
        })(n || (n = {})),
        (function (e) {
          (e.Local = "LOCAL"), (e.Container = "CONTAINER");
        })(i || (i = {})),
        (function (e) {
          (e.File = "FILE"), (e.Directory = "DIRECTORY");
        })(o || (o = {})),
        (function (e) {
          (e.NotFound = "NOT_FOUND"),
            (e.AlreadyExists = "ALREADY_EXIST"),
            (e.NotDirectory = "NOT_DIRECTORY"),
            (e.IsDirectory = "IS_DIRECTORY");
        })(s || (s = {})),
        (function (e) {
          (e.Offline = "OFFLINE"),
            (e.Loading = "LOADING"),
            (e.Syncing = "SYNCING"),
            (e.Clean = "CLEAN"),
            (e.Error = "ERROR");
        })(a || (a = {})),
        (function (e) {
          (e.Dirty = "DIRTY"), (e.Syncing = "SYNCING"), (e.Clean = "CLEAN");
        })(c || (c = {}));
    },
    AERv: function (e, t) {
      var r = /^@(\w+)/,
        n = function (e, t, n) {
          var i = r.exec(t);
          if (i)
            return (
              !!n ||
              e(i[0])({
                type: "link",
                url: "/@" + i[1],
                children: [
                  { type: "text", value: i[0], position: { start: e.now() } },
                ],
              })
            );
        };
      (n.notInLink = !0),
        (n.locator = function (e, t) {
          var r = e.indexOf("@", t);
          return (
            0 === r || -1 === r || (-1 !== (r = e.indexOf(" @", t - 1)) && r++),
            r
          );
        }),
        (e.exports = {
          markdownMentionPlugin: function () {
            var e = this.Parser,
              t = e.prototype.inlineTokenizers,
              r = e.prototype.inlineMethods;
            (t.mention = n), r.splice(r.indexOf("text"), 0, "mention");
          },
          usernameRegExp: r,
        });
    },
    OI0a: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("MX0m"),
        o = r.n(i),
        s = (r("q1tI"), r("up5I"));
      t.a = function (e) {
        return Object(n.jsxs)("div", {
          className: "jsx-688104393",
          children: [
            e.href
              ? Object(n.jsx)("a", {
                  href: e.href,
                  onClick: function (t) {
                    t.preventDefault(), e.loading || e.onClick();
                  },
                  className: "jsx-688104393",
                  children: Object(n.jsx)(s.a, {
                    fullWidth: !0,
                    children: e.loading
                      ? "Loading..."
                      : e.children || "Load more",
                  }),
                })
              : Object(n.jsx)(s.a, {
                  onClick: e.loading ? void 0 : e.onClick,
                  fullWidth: !0,
                  children: e.loading
                    ? "Loading..."
                    : e.children || "Load more",
                }),
            Object(n.jsx)(o.a, {
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
    RGhV: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return c;
        });
      var n = r("z7pX"),
        i = r("cpVT");
      function o(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                Object(i.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        return function (r, i) {
          if (!i || !i.fetchMoreResult) return r;
          var o = i.fetchMoreResult,
            a = r ? r[e][t].items : [],
            c = s({}, o);
          return (
            (c[e][t].items = [].concat(
              Object(n.a)(a),
              Object(n.a)(o[e][t].items)
            )),
            c
          );
        };
      }
      function c(e) {
        return function (t, r) {
          if (!r || !r.fetchMoreResult) return t;
          var i = r.fetchMoreResult,
            o = t ? t[e].items : [],
            a = s({}, i);
          return (
            (a[e].items = [].concat(Object(n.a)(o), Object(n.a)(i[e].items))), a
          );
        };
      }
    },
    adOd: function (e, t, r) {
      "use strict";
      var n = r("cpVT"),
        i = r("nKUr"),
        o = r("MX0m"),
        s = r.n(o),
        a = (r("q1tI"), r("TSYQ")),
        c = r.n(a),
        l = function (e) {
          var t = e.fill,
            r = e.stroke,
            n = e.hoverColor;
          return Object(i.jsxs)("svg", {
            className: "pin-icon-svg",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16.247 19.304",
            style: { color: n },
            children: [
              Object(i.jsx)("defs", {
                children: Object(i.jsx)("defs", {
                  className: "jsx-3932814913",
                  children: Object(i.jsx)(s.a, {
                    id: "3932814913",
                    children: [
                      ".pin-icon-svg{height:100%;width:100%;}",
                      ".pin-icon-svg .cls-1:hover{fill:currentColor;stroke:currentColor;}",
                    ],
                  }),
                }),
              }),
              Object(i.jsx)("path", {
                fill: t,
                stroke: r,
                className: "cls-1",
                d: "M14.822,11.484A14.154,14.154,0,0,0,11.6,8.1a.138.138,0,0,1-.036-.091l-.4-3.438.673-1.049L12.5,2.349a.459.459,0,0,0-.4-.674H4.2a.459.459,0,0,0-.4.674L4.46,3.524l.673,1.049-.4,3.438a.138.138,0,0,1-.036.091,14.154,14.154,0,0,0-3.222,3.382.177.177,0,0,0-.022.088.14.14,0,0,0,.006.051l0,.014a.136.136,0,0,0,.131.1l4.561,0a.136.136,0,0,1,.1.087L8,17.541a.126.126,0,0,0,.133.085v0s.009,0,.014,0,.009,0,.014,0v0a.126.126,0,0,0,.133-.085l1.747-5.722a.136.136,0,0,1,.1-.087l4.561,0a.136.136,0,0,0,.131-.1l0-.014a.14.14,0,0,0,.006-.051A.177.177,0,0,0,14.822,11.484Z",
              }),
            ],
          });
        };
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = "#336a98";
      t.a = function (e) {
        var t,
          r,
          n = e.pinned,
          o = e.isOwner,
          a = e.onClick,
          d = e.style;
        if (!n && !o) return Object(i.jsx)("div", { style: { width: "15px" } });
        n ? ((t = u), (r = u)) : ((t = "#d7d7d7"), (r = "#7f7f7f"));
        var j = Object(i.jsx)(l, { fill: t, stroke: t, hoverColor: r }),
          f = o
            ? {
                "aria-label": n ? "Unpin" : "Pin",
                role: "tooltip",
                "data-microtip-position": "bottom",
              }
            : {};
        return Object(i.jsxs)(
          "div",
          p(
            p({}, f),
            {},
            {
              onClick: a,
              style: d,
              className:
                "jsx-3639796399 " +
                ((f && null != f.className && f.className) ||
                  c()("pin-icon-container", o && "pin-icon-container-hover") ||
                  ""),
              children: [
                Object(i.jsx)(s.a, {
                  id: "3639796399",
                  children: [
                    ".pin-icon-container.jsx-3639796399{width:15px;height:17px;position:relative;}",
                    ".pin-icon-container-hover.jsx-3639796399:hover{cursor:pointer;}",
                  ],
                }),
                j,
              ],
            }
          )
        );
      };
    },
    b04V: function (e, t, r) {
      "use strict";
      var n = r("H+61"),
        i = r("UlJF"),
        o = r("7LId"),
        s = r("VIvw"),
        a = r("iHvq"),
        c = r("nKUr"),
        l = r("MX0m"),
        d = r.n(l),
        p = r("q1tI");
      function u(e) {
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
          var r,
            n = Object(a.a)(e);
          if (t) {
            var i = Object(a.a)(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return Object(s.a)(this, r);
        };
      }
      var j = function () {
          return Object(c.jsx)("svg", {
            width: "6px",
            height: "9px",
            viewBox: "0 0 6 9",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(c.jsx)("g", {
              children: Object(c.jsxs)("g", {
                fill: "#FFCC01",
                children: [
                  Object(c.jsx)("rect", {
                    x: "0",
                    y: "0",
                    width: "3",
                    height: "3",
                  }),
                  Object(c.jsx)("rect", {
                    x: "3",
                    y: "3",
                    width: "3",
                    height: "3",
                  }),
                  Object(c.jsx)("rect", {
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
        f = (function (e) {
          Object(o.a)(r, e);
          var t = u(r);
          function r() {
            return Object(n.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(i.a)(r, [
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
                  return Object(c.jsxs)("div", {
                    className: "jsx-4199638957 not-found",
                    children: [
                      Object(c.jsxs)("div", {
                        className: "jsx-4199638957 not-found-container",
                        children: [
                          Object(c.jsx)("div", {
                            className: "jsx-4199638957 not-found-fourofour",
                            children: Object(c.jsx)("span", {
                              className: "jsx-4199638957",
                              children: "404",
                            }),
                          }),
                          Object(c.jsx)("div", {
                            className:
                              "jsx-4199638957 not-found-error-text-container",
                            children: Object(c.jsxs)("div", {
                              className: "jsx-4199638957",
                              children: [
                                Object(c.jsxs)("div", {
                                  className:
                                    "jsx-4199638957 not-found-error-text",
                                  children: [
                                    Object(c.jsx)("div", {
                                      className:
                                        "jsx-4199638957 not-found-prompt",
                                      children: Object(c.jsx)(j, {}),
                                    }),
                                    "Not found error: ",
                                    this.props.message,
                                    " ",
                                    Object(c.jsx)("br", {
                                      className: "jsx-4199638957",
                                    }),
                                  ],
                                }),
                                Object(c.jsxs)("div", {
                                  className:
                                    "jsx-4199638957 not-found-error-text-2",
                                  children: [
                                    "If you think this is a mistake please",
                                    " ",
                                    Object(c.jsx)(
                                      "a",
                                      {
                                        target: "_blank",
                                        href: "/bugs",
                                        className: "jsx-4199638957",
                                        children: "contact us",
                                      },
                                      "bugs"
                                    ),
                                    Object(c.jsx)("span", {
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
                      Object(c.jsx)(d.a, {
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
            r
          );
        })(p.Component);
      (f.defaultProps = {
        message: "This is not the page you're looking for.",
      }),
        (t.a = f);
    },
    btdU: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("vJKn"),
        i = r.n(n),
        o = r("rg98"),
        s = r("nKUr"),
        a = r("MX0m"),
        c = r.n(a),
        l = r("q1tI"),
        d = r("3gM7"),
        p = r("eomm"),
        u = r.n(p),
        j = r("YFqc"),
        f = r.n(j),
        x = r("tZOq"),
        b = r("RVZx"),
        m = r("z7pX"),
        h = r("cpVT"),
        g = r("xvhg"),
        O = r("20a2"),
        v = r("3web"),
        y = r("adOd"),
        w = r("zgDP"),
        k = r("T0nv"),
        N = r("RNah"),
        P = r.n(N);
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                Object(h.a)(e, t, r[t]);
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
      var _ = function (e) {
          var t = e.repl,
            r = e.onPinToggleClick;
          return Object(s.jsx)(
            f.a,
            C(
              C({}, Object(k.b)(t)),
              {},
              {
                children: Object(s.jsxs)("a", {
                  onClick: function () {
                    !t.isOwner &&
                      t.pinnedToProfile &&
                      Object(w.track)(w.events.PINNED_REPL_VISITED, {
                        replId: t.id,
                      }),
                      t.isOwner &&
                        Object(w.track)(w.events.PROFILE_REPL_CLICKED, {
                          replId: t.id,
                          isOwner: t.isOwner,
                        });
                  },
                  className: "jsx-3735441835 repl-item-wrapper",
                  children: [
                    Object(s.jsx)(y.a, {
                      pinned: t.pinnedToProfile,
                      isOwner: !!t.isOwner,
                      onClick: t.isOwner
                        ? function (e) {
                            e.preventDefault(),
                              e.stopPropagation(),
                              r && r({ id: t.id, pin: !t.pinnedToProfile });
                          }
                        : void 0,
                    }),
                    Object(s.jsx)("span", {
                      className: "jsx-3735441835 repl-item-title",
                      children: t.title || t.url,
                    }),
                    Object(s.jsx)("div", {
                      className: "jsx-3735441835 repl-item-language",
                      children: t.lang.displayName,
                    }),
                    Object(s.jsx)("div", {
                      className: "jsx-3735441835 repl-item-date",
                      children: P()(t.timeCreated, Date.now(), {
                        addSuffix: !0,
                      }),
                    }),
                    Object(s.jsx)(c.a, {
                      id: "3735441835",
                      children: [
                        ".repl-item-wrapper.jsx-3735441835{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:75px;width:100%;-webkit-text-decoration:none;text-decoration:none;color:inherit;border-bottom:1px solid var(--color-border);}",
                        ".repl-item-wrapper.jsx-3735441835:hover{background:var(--color-control-2);}",
                        ".repl-item-title.jsx-3735441835{margin-right:20px;margin-left:20px;color:var(--color-foreground-1);font-size:20px;-webkit-flex:2 1 0%;-ms-flex:2 1 0%;flex:2 1 0%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}",
                        ".repl-item-title.jsx-3735441835:hover{color:var(--color-primary-4) !important;-webkit-text-decoration:none;text-decoration:none;border-bottom:none;}",
                        ".repl-item-author.jsx-3735441835{-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}",
                        ".repl-item-language.jsx-3735441835,.repl-item-date.jsx-3735441835{-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;font-size:16px;color:var(--color-foreground-3);}",
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        },
        I = r("OI0a"),
        D = r("VoYB");
      function R(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                Object(h.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var T = function (e) {
          var t = e.pinnedCount;
          return Object(s.jsxs)("div", {
            className: "jsx-1254945903 public-repls-pinned-counter",
            children: [
              Object(s.jsx)("div", {
                className: "jsx-1254945903 public-repls-pinned-counter-pin",
                children: Object(s.jsx)(y.a, { pinned: !0 }),
              }),
              Object(s.jsxs)("div", {
                className: "jsx-1254945903",
                children: [t, " / 5 repls pinned"],
              }),
              Object(s.jsx)(c.a, {
                id: "1254945903",
                children: [
                  ".public-repls-pinned-counter.jsx-1254945903{font-size:16px;margin-right:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:right;color:var(--color-foreground-1);}",
                  ".public-repls-pinned-counter-pin.jsx-1254945903{width:20px;margin-right:10px;}",
                ],
              }),
            ],
          });
        },
        L = function (e) {
          var t = e.username,
            r = e.after,
            n = Object(x.Gd)({
              notifyOnNetworkStatusChange: !0,
              variables: { username: t, after: r },
            }),
            i = n.data,
            o = n.loading,
            a = n.error,
            d = n.refetch,
            p = n.fetchMore,
            u = Object(x.Fd)(),
            j = Object(g.a)(u, 2),
            f = j[0],
            b = j[1],
            h = Object(x.Hd)(),
            y = Object(g.a)(h, 2),
            k = y[0],
            N = y[1],
            P = Object(D.a)(),
            E = P.showConfirm,
            C = P.showError,
            R = Object(O.useRouter)(),
            L = N.loading || b.loading;
          if (
            (l.useEffect(
              function () {
                N.data &&
                  (E("Repl unpinned"),
                  d(),
                  Object(w.track)(w.events.PINNED_REPL_PIN, {
                    replId: N.data.unpinReplFromProfile.id,
                  })),
                  b.data &&
                    (E("Repl pinned"),
                    d(),
                    Object(w.track)(w.events.PINNED_REPL_PIN, {
                      replId: b.data.pinReplToProfile.id,
                    }));
              },
              [N.data, b.data]
            ),
            l.useEffect(
              function () {
                b.error && C(b.error.message), N.error && C(N.error.message);
              },
              [b.error, N.error]
            ),
            o && !i)
          )
            return Object(s.jsx)(v.a, {});
          if (a) return Object(s.jsx)("p", { children: a.message });
          if (!i || !i.user)
            return Object(s.jsx)("p", {
              children: "Something went wrong while loading this profile",
            });
          var M = i.user,
            A = M.displayName,
            F = M.repls,
            q = F.pageInfo,
            z = F.items;
          if (!z.length)
            return Object(s.jsxs)("div", {
              className: "jsx-2938623139 profile-no-repls",
              children: [
                A,
                " has no repls yet \ud83d\ude1e",
                Object(s.jsx)(c.a, {
                  id: "2938623139",
                  children: [
                    ".profile-no-repls.jsx-2938623139{margin-top:4em;font-weight:400;font-size:28px;color:var(--color-foreground-1);text-align:center;}",
                  ],
                }),
              ],
            });
          var V = function (e) {
              (e.pin ? f : k)({ variables: { replId: e.id } });
            },
            U = "/@".concat(M.username, "?after=").concat(q.nextCursor);
          return Object(s.jsxs)(s.Fragment, {
            children: [
              M.isLoggedIn
                ? Object(s.jsx)(T, {
                    pinnedCount: F.items.filter(function (e) {
                      return e.pinnedToProfile;
                    }).length,
                  })
                : null,
              z.map(function (e) {
                return Object(s.jsx)(
                  _,
                  {
                    repl: e,
                    onPinToggleClick: M.isLoggedIn && !L ? V : void 0,
                  },
                  e.id
                );
              }),
              q.hasNextPage &&
                Object(s.jsx)(I.a, {
                  loading: o,
                  href: U,
                  onClick: function () {
                    p({
                      variables: { username: t, after: q.nextCursor },
                      updateQuery: function (e, t) {
                        if (!t || !t.fetchMoreResult) return e;
                        var r = t.fetchMoreResult,
                          n =
                            null !== e && void 0 !== e && e.user
                              ? e.user.repls.items
                              : [],
                          i = S({}, r),
                          o =
                            null !== r && void 0 !== r && r.user
                              ? r.user.repls.items
                              : [];
                        return (
                          o.length > 0 &&
                            R.replace(
                              {
                                pathname: "/profile",
                                query: S(
                                  S({}, R.query),
                                  {},
                                  { after: q.nextCursor }
                                ),
                              },
                              { pathname: "/@".concat(M.username), query: {} },
                              { shallow: !0 }
                            ),
                          i.user &&
                            (i.user.repls.items = [].concat(
                              Object(m.a)(n),
                              Object(m.a)(o)
                            )),
                          i
                        );
                      },
                    });
                  },
                  children: "Load More Repls",
                }),
            ],
          });
        },
        M = r("2WFA"),
        A = r("/YWt");
      function F(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                Object(h.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var z = function (e) {
          Object(A.a)({
            event: w.events.RECENT_POST_COMMENTS_SPLIT_TEST,
            gate: "recent-post-comments",
            data: { view: "profileFeed" },
          });
          var t = e,
            r = Object(x.Ed)({ variables: t }),
            n = r.data,
            i = r.loading,
            o = r.fetchMore;
          if (i || !n || !n.user) return Object(s.jsx)(v.a, {});
          if (!n || !n.user || !n.user.posts) return null;
          var a = n.user.posts;
          return Object(s.jsxs)("div", {
            className: "jsx-4061287483",
            children: [
              Object(s.jsxs)("div", {
                className: "jsx-4061287483",
                children: [
                  a.items.map(function (e) {
                    return Object(s.jsx)(
                      "div",
                      {
                        className: "jsx-4061287483 home-posts-feed-list-item",
                        children: Object(s.jsx)(
                          M.a,
                          {
                            responsive: !0,
                            post: e,
                            breakpoint: 600,
                            langLinkProps: function (e) {
                              return {
                                href: {
                                  pathname: "/postsFeed",
                                  query: { lang: e },
                                },
                                as: {
                                  pathname: "/talk/all",
                                  query: { lang: e },
                                },
                              };
                            },
                            onClick: function () {
                              Object(w.track)(
                                w.events.HOME_POST_FEED_ITEM_CLICKED
                              );
                            },
                          },
                          e.id
                        ),
                      },
                      e.id
                    );
                  }),
                  a.pageInfo.nextCursor
                    ? Object(s.jsx)(I.a, {
                        loading: i,
                        onClick: function () {
                          Object(w.track)(
                            w.events.PROFILE_POSTS_LOAD_MORE_CLICKED,
                            { username: e.username }
                          ),
                            o({
                              variables: q(
                                q({}, t),
                                {},
                                { after: a.pageInfo.nextCursor }
                              ),
                              updateQuery: function (e, t) {
                                if (
                                  !t ||
                                  !t.fetchMoreResult ||
                                  !t.fetchMoreResult.user ||
                                  !t.fetchMoreResult.user.posts
                                )
                                  return e;
                                var r = t.fetchMoreResult,
                                  n =
                                    e && e.user && e.user.posts
                                      ? e.user.posts.items
                                      : [],
                                  i = q({}, r);
                                return (
                                  i.user &&
                                    i.user.posts &&
                                    r.user &&
                                    r.user.posts &&
                                    (i.user.posts.items = [].concat(
                                      Object(m.a)(n),
                                      Object(m.a)(r.user.posts.items)
                                    )),
                                  i
                                );
                              },
                            });
                        },
                        children: "Load more",
                      })
                    : null,
                ],
              }),
              Object(s.jsx)(c.a, {
                id: "4061287483",
                children: [
                  ".home-posts-feed-list-item.jsx-4061287483{margin-left:-20px;margin-right:-20px;}",
                  ".home-posts-feed-list-item.jsx-4061287483:last-child{padding-bottom:10px;}",
                  "@media screen and (min-width:600px){.home-posts-feed-list-item.jsx-4061287483{padding-bottom:10px;margin-left:0;margin-right:0;}}",
                ],
              }),
            ],
          });
        },
        V = r("iiuX"),
        U = r("yVCx"),
        G = r("jMDP"),
        H = r("rcAQ"),
        X = r("RGhV");
      function K(e, t) {
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
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                Object(h.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var B = Object(X.a)("user", "comments"),
        J = function (e) {
          var t = e.comment;
          return Object(s.jsxs)("div", {
            className: "jsx-2342438167 profile-comments-item",
            children: [
              Object(s.jsxs)("div", {
                className: "jsx-2342438167 profile-comments-post",
                children: [
                  Object(s.jsx)("div", {
                    className: "jsx-2342438167 profile-comments-post-title",
                    children: t.post
                      ? Object(s.jsx)(f.a, {
                          href: {
                            pathname: "/post",
                            query: { id: String(t.post.id) },
                          },
                          as: t.post.url,
                          children: Object(s.jsx)("a", {
                            className: "jsx-2342438167",
                            children: t.post.title,
                          }),
                        })
                      : "[deleted]",
                  }),
                  Object(s.jsxs)("div", {
                    className: "jsx-2342438167 profile-comments-posted-to",
                    children: [
                      "posted to",
                      " ",
                      t.post
                        ? Object(s.jsx)(f.a, {
                            href: {
                              pathname: "/board",
                              query: { slug: t.post.board.slug },
                            },
                            as: t.post.board.url,
                            children: Object(s.jsx)("a", {
                              className: "jsx-2342438167",
                              children: t.post.board.name,
                            }),
                          })
                        : "[deleted]",
                      t.post && t.post.user
                        ? Object(s.jsxs)(s.Fragment, {
                            children: [
                              " ",
                              "by",
                              " ",
                              Object(s.jsx)(f.a, {
                                href: {
                                  pathname: "/profile",
                                  query: { username: t.post.user.username },
                                },
                                as: t.post.user.url,
                                children: Object(s.jsx)("a", {
                                  className: "jsx-2342438167",
                                  children: t.post.user.username,
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              Object(s.jsxs)("div", {
                className: "jsx-2342438167 profile-comments-body-container",
                children: [
                  Object(s.jsx)("div", {
                    className: "jsx-2342438167",
                    children: Object(s.jsx)(H.a, { comment: t }),
                  }),
                  Object(s.jsxs)("div", {
                    className: "jsx-2342438167 profile-comments-body",
                    children: [
                      Object(s.jsx)(V.a, { onClick: void 0, text: t.body }),
                      Object(s.jsx)(G.a, {
                        children: t.user
                          ? Object(s.jsxs)(s.Fragment, {
                              children: [
                                t.user.username,
                                " commented",
                                " ",
                                Object(s.jsx)(f.a, {
                                  href: {
                                    pathname: "/comment",
                                    query: { id: String(t.id) },
                                  },
                                  as: t.url,
                                  children: Object(s.jsx)("a", {
                                    className: "jsx-2342438167",
                                    children: Object(s.jsx)(U.a, {
                                      date: t.timeCreated,
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      }),
                    ],
                  }),
                ],
              }),
              Object(s.jsx)(c.a, {
                id: "2342438167",
                children: [
                  ".profile-comments-item.jsx-2342438167{margin-bottom:30px;}",
                  ".profile-comments-post.jsx-2342438167{padding:10px;border:1px solid var(--color-border);margin:10px 0;}",
                  ".profile-comments-post-title.jsx-2342438167 a.jsx-2342438167:hover{border-color:inherit;}",
                  ".profile-comments-post-title.jsx-2342438167{display:inline-block;font-size:18px;font-weight:bold;margin-bottom:5px;color:var(--color-foreground-1);}",
                  ".profile-comments-posted-to.jsx-2342438167{font-size:12px;color:var(--color-foreground-2);}",
                  ".profile-comments-post-title.jsx-2342438167 a.jsx-2342438167{color:inherit;}",
                  ".profile-comments-body-container.jsx-2342438167{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
                  ".profile-comments-body.jsx-2342438167{max-width:90%;}",
                  ".profile-comments-body-container.jsx-2342438167>div.jsx-2342438167:first-child{width:40px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}",
                ],
              }),
            ],
          });
        },
        Q = function (e) {
          return Object(s.jsx)(x.v, {
            notifyOnNetworkStatusChange: !0,
            variables: { username: e.username, order: e.order },
            children: function (t) {
              var r = t.data,
                n = t.variables,
                i = t.fetchMore,
                o = t.loading;
              if (o || !r || !r.user) return Object(s.jsx)(v.a, {});
              if (!r || !r.user || !r.user.comments)
                return Object(s.jsx)("span", {
                  children: "'Something went wrong'",
                });
              var a = r.user.comments;
              return Object(s.jsxs)("div", {
                children: [
                  a.items.map(function (e) {
                    return Object(s.jsx)(J, { comment: e }, e.id);
                  }),
                  a.pageInfo.nextCursor
                    ? Object(s.jsx)(I.a, {
                        loading: o,
                        onClick: function () {
                          Object(w.track)(
                            w.events.PROFILE_COMMENTS_LOAD_MORE_CLICKED,
                            { username: e.username }
                          ),
                            i({
                              variables: Y(
                                Y({}, n),
                                {},
                                { after: a.pageInfo.nextCursor }
                              ),
                              updateQuery: B,
                            });
                        },
                        children: "Load more",
                      })
                    : null,
                ],
              });
            },
          });
        },
        W = function (e) {
          var t = e.completed;
          return Object(s.jsxs)("div", {
            className: c.a.dynamic([["2684884750", [t]]]) + " progress-bar",
            children: [
              Object(s.jsx)("div", {
                className: c.a.dynamic([["2684884750", [t]]]) + " inner",
              }),
              Object(s.jsx)(c.a, {
                id: "2684884750",
                dynamic: [t],
                children: [
                  ".progress-bar.__jsx-style-dynamic-selector{height:10px;width:100%;background-color:var(--color-control-1);border-radius:5px;overflow:hidden;margin:var(--spacing-half) 0;}",
                  ".progress-bar.__jsx-style-dynamic-selector .inner.__jsx-style-dynamic-selector{height:10px;width:".concat(
                    t,
                    "%;background-color:var(--color-gold-light);}"
                  ),
                ],
              }),
            ],
          });
        },
        Z = r("imBe"),
        $ = r("M1F+"),
        ee = r("IdsG"),
        te = function (e) {
          var t = e.level;
          return Object(s.jsxs)("div", {
            className: "jsx-2079872645 level-tag",
            children: [
              "Level ",
              t,
              Object(s.jsx)(c.a, {
                id: "2079872645",
                children: [
                  ".level-tag.jsx-2079872645{margin:0 var(--spacing-1);background:var(--color-control-1);color:var(--color-foreground-1);border-radius:2px;padding:3px;font-size:12px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;max-width:45px;text-align:center;}",
                ],
              }),
            ],
          });
        },
        re = function (e) {
          var t = e,
            r = Object(x.Cd)({ variables: t }),
            n = r.data;
          if (r.loading || !n || !n.user) return Object(s.jsx)(v.a, {});
          if (
            !n.user.unlockedAchievements ||
            !n.user.unlockedAchievements.length
          )
            return Object(s.jsxs)(s.Fragment, {
              children: [
                Object(s.jsx)(f.a, {
                  as: "/achievements",
                  href: "/achievements",
                  children: Object(s.jsx)("a", {
                    children: "What are Repl.it Achievements?",
                  }),
                }),
                Object(s.jsxs)("div", {
                  className: "jsx-3027672256 profile-no-achievements",
                  children: [
                    n.user.displayName,
                    " has no achievements yet \ud83d\ude1e",
                    Object(s.jsx)(c.a, {
                      id: "3027672256",
                      children: [
                        ".profile-no-achievements.jsx-3027672256{margin-top:4em;font-weight:400;font-size:28px;color:var(--color-black);text-align:center;}",
                      ],
                    }),
                  ],
                }),
              ],
            });
          var i = n.user.unlockedAchievements;
          return Object(s.jsxs)(s.Fragment, {
            children: [
              Object(s.jsx)(f.a, {
                as: "/achievements",
                href: "/achievements",
                children: Object(s.jsx)("a", {
                  children: "What are Repl.it Achievements?",
                }),
              }),
              Object(s.jsxs)("div", {
                className: "jsx-531115565 achievement-wrapper",
                children: [
                  i.map(function (e) {
                    var t;
                    return Object(s.jsxs)(
                      "div",
                      {
                        className: "jsx-531115565 achievement-box",
                        children: [
                          Object(s.jsxs)("div", {
                            className: "jsx-531115565 icon",
                            children: [
                              Object(s.jsx)($.a, {
                                achievementType: e.achievementId,
                              }),
                              !!e.level &&
                                e.level > 0 &&
                                Object(s.jsxs)(s.Fragment, {
                                  children: [
                                    Object(s.jsx)("span", {
                                      className: "jsx-531115565 spacer",
                                    }),
                                    Object(s.jsxs)("span", {
                                      className: "jsx-531115565 stars",
                                      children: [
                                        Object(s.jsx)("span", {
                                          className: "jsx-531115565 star",
                                          children: Object(s.jsx)($.b, {
                                            filled: e.level >= 1,
                                          }),
                                        }),
                                        Object(s.jsx)("span", {
                                          className: "jsx-531115565 star",
                                          children: Object(s.jsx)($.b, {
                                            filled: e.level >= 2,
                                          }),
                                        }),
                                        Object(s.jsx)("span", {
                                          className: "jsx-531115565 star",
                                          children: Object(s.jsx)($.b, {
                                            filled: e.level >= 3,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          Object(s.jsxs)("div", {
                            className: "jsx-531115565 details",
                            children: [
                              Object(s.jsxs)("div", {
                                className: "jsx-531115565 title",
                                children: [
                                  e.title,
                                  !!e.level &&
                                    e.level > 0 &&
                                    Object(s.jsx)(te, { level: e.level }),
                                ],
                              }),
                              Object(s.jsx)("div", {
                                className: "jsx-531115565 description",
                                children: e.description,
                              }),
                              e.showProgressBar &&
                                (null === n ||
                                void 0 === n ||
                                null === (t = n.user) ||
                                void 0 === t
                                  ? void 0
                                  : t.isLoggedIn) &&
                                Object(s.jsx)("div", {
                                  className: "jsx-531115565 progress",
                                  children: Object(s.jsxs)(Z.a, {
                                    position: "bottom",
                                    children: [
                                      Object(s.jsxs)(ee.a, {
                                        children: [
                                          e.countToNextLevel,
                                          " more until next level is reached",
                                        ],
                                      }),
                                      Object(s.jsx)(
                                        W,
                                        { completed: e.progressBarStatus + 1 },
                                        e.achievementId
                                      ),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      },
                      e.achievementId
                    );
                  }),
                  Object(s.jsx)(c.a, {
                    id: "531115565",
                    children: [
                      ".stars.jsx-531115565{height:15px;margin:0 auto;}",
                      ".spacer.jsx-531115565{display:inline-block;width:9px;}",
                      ".star.jsx-531115565{display:inline-block;margin:0 var(--spacing-half);}",
                      ".achievement-box.jsx-531115565{display:inline-block;margin:20px;width:325px;min-height:140px;}",
                      ".title.jsx-531115565{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-weight:500;font-size:15px;padding-bottom:10px;color:var(--color-foreground-1);}",
                      ".description.jsx-531115565{height:80px;font-size:15px;padding-bottom:10px;color:var(--color-foreground-3);}",
                      ".progress.jsx-531115565{width:100%;}",
                      ".details.jsx-531115565{float:right;width:65%;padding:var(--spacing-half);}",
                      ".icon.jsx-531115565{width:30%;float:left;}",
                      ".achievement-wrapper.jsx-531115565{margin-top:var(--spacing-2);}",
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function ne(e) {
        var t = e.username,
          r = Object(O.useRouter)();
        return (
          l.useEffect(
            function () {
              r.replace(
                { pathname: "/teamDashboard", query: { teamname: t } },
                "/team/".concat(t)
              );
            },
            [r, t]
          ),
          null
        );
      }
      var ie = r("cm4/"),
        oe = r.n(ie),
        se = r("TSYQ"),
        ae = r.n(se),
        ce = r("Gbtx"),
        le = r("CJNb"),
        de = r("Dlgg"),
        pe = r("tcye"),
        ue = function (e) {
          var t = e.user,
            r = t.roles.map(function (e) {
              var t,
                r = Object(s.jsx)(
                  de.a,
                  { role: e.key, name: e.name, tagline: e.tagline || void 0 },
                  e.id
                );
              return (
                "MODERATOR" === e.key
                  ? (t = "/talk/all")
                  : "CONTENT_CREATOR" === e.key && (t = "/talk/learn"),
                t ? Object(s.jsx)("a", { href: t, children: r }, e.id) : r
              );
            });
          return Object(s.jsxs)("div", {
            className: "jsx-1351853196 profile-header-container",
            children: [
              Object(s.jsxs)("div", {
                className:
                  "jsx-1351853196 " +
                  (ae()("profile-header", {
                    "profile-header-hacker": t.isHacker,
                  }) || ""),
                children: [
                  t.isLoggedIn &&
                    Object(s.jsx)("a", {
                      href: "/account",
                      className: "jsx-1351853196 profile-editprofile-label",
                      children: "edit your profile",
                    }),
                  Object(s.jsxs)("div", {
                    className: "jsx-1351853196 profile-header-content",
                    children: [
                      Object(s.jsxs)("div", {
                        className: "jsx-1351853196 name-wrap",
                        children: [
                          t.isHacker
                            ? Object(s.jsx)("div", {
                                className:
                                  "jsx-1351853196 profile-header-role-label",
                                children: Object(s.jsx)(de.a, {
                                  name: "hacker",
                                  role: "hacker",
                                }),
                              })
                            : t.isLoggedIn &&
                              Object(s.jsx)("div", {
                                className:
                                  "jsx-1351853196 profile-header-role-label",
                                children: Object(s.jsx)(pe.a, {
                                  context: "profile-upgrade-button",
                                  size: "small",
                                }),
                              }),
                          Object(s.jsx)("h1", {
                            className: "jsx-1351853196",
                            children:
                              t.fullName ||
                              Object(s.jsxs)(l.Fragment, {
                                children: [
                                  t.username,
                                  " ",
                                  Object(s.jsxs)("span", {
                                    title: "cycles",
                                    className: "jsx-1351853196",
                                    children: ["(", t.karma, ")"],
                                  }),
                                ],
                              }),
                          }),
                        ],
                      }),
                      r.length
                        ? Object(s.jsx)("div", {
                            className: "jsx-1351853196 profile-header-labels",
                            children: r,
                          })
                        : null,
                      t.fullName
                        ? Object(s.jsxs)("div", {
                            className: "jsx-1351853196 profile-username-label",
                            children: [
                              "@",
                              t.username,
                              " ",
                              Object(s.jsxs)("span", {
                                title: "cycles",
                                className: "jsx-1351853196",
                                children: ["(", t.karma, ")"],
                              }),
                            ],
                          })
                        : null,
                      t.bio &&
                        Object(s.jsx)("div", {
                          className: "jsx-1351853196 profile-meta-info",
                          children: Object(s.jsx)(oe.a, {
                            properties: { rel: "nofollow" },
                            children: t.bio,
                          }),
                        }),
                    ],
                  }),
                  Object(s.jsx)("div", {
                    className: "jsx-1351853196 profile-icon",
                    children: Object(s.jsx)(ce.a, { size: "xl", url: t.image }),
                  }),
                ],
              }),
              t.languages && t.languages.length
                ? Object(s.jsx)("div", {
                    className: "jsx-1351853196 profile-languages",
                    children: t.languages.map(function (e) {
                      return Object(s.jsx)(
                        "div",
                        {
                          className: "jsx-1351853196",
                          children: Object(s.jsx)(le.a, {
                            as: {
                              pathname: "/talk/all",
                              query: { lang: e.id },
                            },
                            href: {
                              pathname: "/postsFeed",
                              query: { lang: e.id },
                            },
                            language: e,
                          }),
                        },
                        e.id
                      );
                    }),
                  })
                : null,
              Object(s.jsx)(c.a, {
                id: "1351853196",
                children: [
                  ".profile-header-container.jsx-1351853196{word-break:break-word;}",
                  ".profile-header.jsx-1351853196{position:relative;text-align:center;margin-bottom:6em;background:var(--color-background-2);color:var(--color-foreground-1);padding-top:1.5em;padding-left:5%;padding-right:5%;}",
                  ".replit-ui-theme-root.dark .profile-header-hacker.jsx-1351853196{background-color:var(--color-background-3);color:var(--color-foreground-3);}",
                  ".replit-ui-theme-root.light .profile-header-hacker.jsx-1351853196{background-color:var(--color-black);color:var(--color-foreground-3);}",
                  ".profile-header-content.jsx-1351853196{margin-left:auto;margin-right:auto;display:grid;padding-bottom:95px;}",
                  ".profile-header.jsx-1351853196 h1.jsx-1351853196{font-weight:100;font-size:44px;position:relative;display:inline-block;}",
                  ".profile-header-labels.jsx-1351853196{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",
                  ".profile-header-labels.jsx-1351853196>a,.profile-header-labels.jsx-1351853196>span{margin-left:5px;margin-top:5px;}",
                  ".name-wrap.jsx-1351853196{margin-left:auto;margin-right:auto;position:relative;}",
                  "@media screen and (min-width:600px){.profile-header-role-label.jsx-1351853196{line-height:0;position:absolute;top:0;left:calc(100% + 10px);}}",
                  ".profile-username-label.jsx-1351853196{font-size:20px;color:var(--color-foreground-4);margin:0.25em;}",
                  ".profile-editprofile-label.jsx-1351853196{position:absolute;top:0;right:0;font-size:0.8em;margin:1em;}",
                  ".profile-icon.jsx-1351853196{position:absolute;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}",
                  ".profile-icon.jsx-1351853196>span{border:solid 1px var(--color-border);}",
                  ".profile-languages.jsx-1351853196{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}",
                  ".profile-languages.jsx-1351853196>div.jsx-1351853196{margin:0 10px 10px;}",
                  "@media screen and (min-width:600px){.profile-languages.jsx-1351853196>div.jsx-1351853196{margin:0 15px 10px;}}",
                ],
              }),
            ],
          });
        },
        je = r("dhJC");
      function fe(e, t) {
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
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fe(Object(r), !0).forEach(function (t) {
                Object(h.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var be = function (e) {
          return Object(s.jsxs)("div", {
            className: "jsx-688519274",
            children: [
              e.children,
              Object(s.jsx)(c.a, {
                id: "688519274",
                children: [
                  "div.jsx-688519274{margin-top:20px;margin-bottom:30px;margin-left:-15px;margin-right:-15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-itmes:center;-webkit-box-align-itmes:center;-ms-flex-align-itmes:center;align-itmes:center;}",
                ],
              }),
            ],
          });
        },
        me = function (e) {
          return Object(s.jsxs)("div", {
            onClick: e.onClick,
            className:
              "jsx-1423013512 " + ((e.active ? "tab-active" : void 0) || ""),
            children: [
              e.children,
              Object(s.jsx)(c.a, {
                id: "1423013512",
                children: [
                  "div.jsx-1423013512{position:relative;font-size:20px;color:var(--color-foreground-3);padding:0 5px;margin-left:15px;margin-right:15px;border-bottom:1px solid transparent;cursor:pointer;}",
                  "div.jsx-1423013512:hover{color:var(--color-primary);border-color:var(--color-primary);}",
                  ".tab-active.jsx-1423013512{color:var(--color-foreground-1);border-color:var(--color-foreground-1);}",
                ],
              }),
            ],
          });
        },
        he = function (e) {
          var t = e.active,
            r = e.onClick,
            n = e.children,
            i = e.href,
            o = void 0 === i ? "#" : i,
            a = Object(je.a)(e, ["active", "onClick", "children", "href"]);
          return Object(s.jsx)(
            f.a,
            xe(
              xe({ href: o }, a),
              {},
              {
                children: Object(s.jsxs)("a", {
                  className: "jsx-2868100133",
                  children: [
                    Object(s.jsx)(me, { onClick: r, active: t, children: n }),
                    Object(s.jsx)(c.a, {
                      id: "2868100133",
                      children: [
                        "a.jsx-2868100133:hover,a.jsx-2868100133:focus,a.jsx-2868100133:active{-webkit-text-decoration:none;text-decoration:none;}",
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        };
      function ge(e, t) {
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
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(r), !0).forEach(function (t) {
                Object(h.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ge(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ve = ["posts", "comments", "achievements"],
        ye = function (e) {
          var t = e.user,
            r = e.tab;
          return {
            href: {
              pathname: "/profile",
              query: Oe({ username: t.username }, r ? { tab: r } : {}),
            },
            as: { pathname: t.url, query: r ? { tab: r } : {} },
          };
        },
        we = function (e) {
          var t = e.user,
            r = e.currentTab,
            n = e.isAchievementsGated;
          return Object(s.jsxs)(be, {
            children: [
              Object(s.jsx)(
                he,
                Oe(
                  Oe({ active: !r }, ye({ user: t })),
                  {},
                  { children: "Repls" }
                )
              ),
              Object(s.jsx)(
                he,
                Oe(
                  Oe({ active: "posts" === r }, ye({ user: t, tab: "posts" })),
                  {},
                  { children: "Posts" }
                )
              ),
              Object(s.jsx)(
                he,
                Oe(
                  Oe(
                    { active: "comments" === r },
                    ye({ user: t, tab: "comments" })
                  ),
                  {},
                  { children: "Comments" }
                )
              ),
              n &&
                Object(s.jsx)(
                  he,
                  Oe(
                    Oe(
                      { active: "achievements" === r },
                      ye({ user: t, tab: "achievements" })
                    ),
                    {},
                    { children: "Achievements" }
                  )
                ),
            ],
          });
        },
        ke = r("XLFt"),
        Ne = r("b04V");
      function Pe() {
        var e,
          t = Object(O.useRouter)().query,
          r = t.username.toString(),
          n = t.tab
            ? ve.find(function (e) {
                return e === t.tab.toString();
              })
            : void 0,
          i = t.order ? t.order.toString() : void 0,
          o = t.after ? t.after.toString() : void 0,
          a = t.count ? parseInt(t.count.toString(), 10) : void 0,
          l = Object(x.Dd)({ variables: { username: r } }),
          d = l.data,
          p = l.loading,
          j = l.error,
          m = d && d.user ? d.user : null,
          h = Boolean(
            null === d ||
              void 0 === d ||
              null === (e = d.currentUser) ||
              void 0 === e
              ? void 0
              : e.hasAchievementsGate
          );
        if (j) return Object(s.jsx)(u.a, { statusCode: 404 });
        var g,
          v = "";
        if (m) {
          g = m.image;
          var y = m.fullName ? " (".concat(m.fullName, ")") : "";
          v = m.username + y;
        }
        return Object(s.jsxs)(b.a, {
          title: v,
          image: g,
          description: (m && m.bio) || void 0,
          children: [
            p && Object(s.jsx)(ke.a, { style: { margin: "40px auto" } }),
            !p && !m && Object(s.jsx)(Ne.a, {}),
            !p &&
              m &&
              !m.redirectToTeamDashboard &&
              Object(s.jsxs)(s.Fragment, {
                children: [
                  Object(s.jsx)(ue, { user: m }),
                  Object(s.jsxs)("div", {
                    className: "jsx-4247406855 profile-content",
                    children: [
                      m
                        ? Object(s.jsx)(we, {
                            user: m,
                            currentTab: n,
                            isAchievementsGated: h,
                          })
                        : null,
                      t.tab
                        ? null
                        : Object(s.jsxs)(s.Fragment, {
                            children: [
                              Object(s.jsx)(L, { username: r, after: o }),
                              m &&
                                m.isLoggedIn &&
                                Object(s.jsx)("div", {
                                  className: "jsx-4247406855 allrepls-link",
                                  children: Object(s.jsx)(f.a, {
                                    href: "/replsDashboard",
                                    as: "/repls",
                                    children: Object(s.jsx)("a", {
                                      className: "jsx-4247406855",
                                      children: "View all repls",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                      "posts" === n
                        ? Object(s.jsx)(z, { username: r, order: i, count: a })
                        : null,
                      "comments" === n
                        ? Object(s.jsx)(Q, { username: r, order: i })
                        : null,
                      h && "achievements" === n
                        ? Object(s.jsx)(re, { username: r })
                        : null,
                      Object(s.jsx)(c.a, {
                        id: "4247406855",
                        children: [
                          ".profile-content.jsx-4247406855{max-width:800px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;margin-bottom:50px;}",
                          ".allrepls-link.jsx-4247406855{text-align:center;margin:50px 0 100px;}",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            !p && m && m.redirectToTeamDashboard
              ? Object(s.jsx)(ne, { username: m.username })
              : null,
          ],
        });
      }
      Pe.getInitialProps = (function () {
        var e = Object(o.a)(
          i.a.mark(function e(t) {
            var r, n;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.req),
                      (n = t.store),
                      (e.next = 3),
                      Object(d.a)(r, n)
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
      t.default = Pe;
    },
    eomm: function (e, t, r) {
      e.exports = r("/a9y");
    },
    iiuX: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("MX0m"),
        o = r.n(i),
        s = (r("q1tI"), r("+Jnw")),
        a = r("2lQ7"),
        c = r.n(a),
        l = r("EQ2k"),
        d = r("XmHG"),
        p = r("jmGw"),
        u = r("AERv");
      t.a = function (e) {
        var t = e.text,
          r = e.onClick;
        return Object(n.jsxs)("div", {
          onClick: r,
          className:
            o.a.dynamic([["1864296780", [l.a.gray50, l.a.gray75]]]) +
            " rendered-markdown board-post-body",
          children: [
            Object(n.jsx)(s.a, {
              source: t,
              renderers: {
                code: p.a,
                linkReference: d.c,
                link: d.d,
                image: d.b,
                heading: d.e,
              },
              plugins: [u.markdownMentionPlugin, c.a],
            }),
            Object(n.jsx)(o.a, {
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
    jMDP: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("MX0m"),
        o = r.n(i),
        s = r("q1tI"),
        a = r("EQ2k");
      t.a = function (e) {
        var t = e.children;
        return Object(n.jsxs)("div", {
          className:
            o.a.dynamic([["1998241331", [a.a.gray47]]]) + " post-footer",
          children: [
            s.Children.map(t, function (e, t) {
              return Object(n.jsxs)(
                s.Fragment,
                { children: [t > 0 && e ? " \xb7 " : null, e] },
                t
              );
            }),
            Object(n.jsx)(o.a, {
              id: "1998241331",
              dynamic: [a.a.gray47],
              children: [
                ".post-footer.__jsx-style-dynamic-selector{padding-top:5px;font-size:13px;color:var(--color-foreground-3);}",
                ".post-footer.__jsx-style-dynamic-selector a{color:inherit;}",
                ".post-footer.__jsx-style-dynamic-selector a:hover{border-color:".concat(
                  a.a.gray47,
                  ";}"
                ),
              ],
            }),
          ],
        });
      };
    },
    jmGw: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return m;
      });
      var n = r("nKUr"),
        i = r("H+61"),
        o = r("UlJF"),
        s = r("+Css"),
        a = r("7LId"),
        c = r("VIvw"),
        l = r("iHvq"),
        d = r("cpVT"),
        p = r("MX0m"),
        u = r.n(p),
        j = r("q1tI"),
        f = r("FIf5"),
        x = r.n(f);
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
          var r,
            n = Object(l.a)(e);
          if (t) {
            var i = Object(l.a)(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return Object(c.a)(this, r);
        };
      }
      var m = (function (e) {
        Object(a.a)(r, e);
        var t = b(r);
        function r() {
          var e;
          Object(i.a)(this, r);
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            Object(d.a)(Object(s.a)(e), "codeEl", void 0),
            Object(d.a)(Object(s.a)(e), "setRef", function (t) {
              return (e.codeEl = t);
            }),
            Object(d.a)(Object(s.a)(e), "highlightCode", function () {
              e.codeEl && x.a.highlightBlock(e.codeEl);
            }),
            e
          );
        }
        return (
          Object(o.a)(r, [
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
                return Object(n.jsxs)("pre", {
                  className: "jsx-2661271750",
                  children: [
                    Object(n.jsx)("code", {
                      ref: this.setRef,
                      className:
                        "jsx-2661271750 " +
                        "language-".concat(this.props.language),
                      children: this.props.value,
                    }),
                    Object(n.jsx)(u.a, {
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
          r
        );
      })(j.PureComponent);
      Object(d.a)(m, "defaultProps", { language: "" });
    },
    mfmY: function (e, t) {
      var r = Object.prototype.toString,
        n = Array.isArray;
      e.exports = function (e) {
        return (
          "string" == typeof e ||
          (!n(e) &&
            (function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
            "[object String]" == r.call(e))
        );
      };
    },
    rcAQ: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      });
      var n = r("nKUr"),
        i = r("xvhg"),
        o = (r("q1tI"), r("/MKj")),
        s = r("b518"),
        a = r("tZOq"),
        c = r("sLtE"),
        l = r("VoYB");
      function d(e) {
        var t = Object(l.a)().showError,
          r = e.comment,
          d = Object(o.e)(),
          p = Object(o.f)(function (e) {
            return e.user.userInfo.isLoggedIn;
          }, o.d),
          u = Object(a.Db)({
            onError: function (e) {
              return t(Object(s.d)(e.message));
            },
          }),
          j = Object(i.a)(u, 2),
          f = j[0],
          x = j[1].loading,
          b = Object(a.Eb)({
            onError: function (e) {
              return t(Object(s.d)(e.message));
            },
          }),
          m = Object(i.a)(b, 2),
          h = m[0],
          g = m[1].loading;
        return Object(n.jsx)(c.a, {
          hasVoted: r.hasVoted,
          canVote: r.canVote,
          voteCount: r.voteCount,
          lite: !0,
          onClick: function () {
            if (p) {
              if (!x && !g) {
                r.canVote || t("Voting not allowed");
                var e = { commentId: r.id };
                r.hasVoted ? h({ variables: e }) : f({ variables: e });
              }
            } else d({ type: "AUTH_MODAL_SHOW" });
          },
        });
      }
    },
    zZPE: function (e, t) {
      var r,
        n,
        i = Function.prototype,
        o = Object.prototype,
        s = i.toString,
        a = o.hasOwnProperty,
        c = s.call(Object),
        l = o.toString,
        d =
          ((r = Object.getPrototypeOf),
          (n = Object),
          function (e) {
            return r(n(e));
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
              } catch (r) {}
            return t;
          })(e)
        )
          return !1;
        var t = d(e);
        if (null === t) return !0;
        var r = a.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && s.call(r) == c;
      };
    },
  },
  [[63, 2, 1, 0, 3, 4, 11, 12, 13, 14, 26, 57]],
]);

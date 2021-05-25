(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [32],
  {
    R84t: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var n = r("cpVT"),
        o = r("nKUr"),
        i = (r("q1tI"), r("pDQI"));
      function a(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e) {
        return Object(o.jsx)(
          i.a,
          c(
            c({}, e),
            {},
            {
              children: Object(o.jsx)("path", {
                d: "M20.25 11.567a.5.5 0 010 .866l-13.5 7.794a.5.5 0 01-.75-.433V4.206a.5.5 0 01.75-.433l13.5 7.794z",
              }),
            }
          )
        );
      }
    },
    hzRC: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return N;
      }),
        r.d(t, "a", function () {
          return C;
        });
      var n = r("nKUr"),
        o = r("cpVT"),
        i = r("xvhg"),
        a = r("dhJC"),
        c = r("MX0m"),
        s = r.n(c),
        u = r("q1tI"),
        l = r("GRpk"),
        d = r("TSYQ"),
        f = r.n(d),
        p = r("9/5/"),
        m = r.n(p),
        j = r("Dtuc"),
        h = r("/+LJ"),
        b = r("RB+8"),
        g = r("koLh");
      function y(e, t) {
        var r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return x(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return x(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
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
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function O(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function w(e) {
        return e.theme ? v(v({}, e), {}, { theme: Object(b.c)(e.theme) }) : e;
      }
      function k(e) {
        return v(
          v({}, e),
          {},
          { theme: e.theme.includes("textmate") ? "replitLight" : "replitDark" }
        );
      }
      function S(e) {
        var t = e.onChange,
          r = e.onCursorSelectionChange,
          n = e.onOptionsChange,
          o = e.initialOptions,
          a = void 0 === o ? {} : o,
          c = (function () {
            var e = u.useState(null),
              t = Object(i.a)(e, 2),
              r = t[0],
              n = t[1];
            return (
              u.useEffect(function () {
                var e = !0;
                return (
                  Object(j.a)().then(function (t) {
                    e && n(t);
                  }),
                  function () {
                    e = !1;
                  }
                );
              }, []),
              r
            );
          })(),
          s = u.useState(0),
          l = Object(i.a)(s, 2),
          d = l[0],
          f = l[1],
          p = u.useState(null),
          x = Object(i.a)(p, 2),
          O = x[0],
          S = x[1],
          P = u.useState(null),
          E = Object(i.a)(P, 2),
          N = E[0],
          C = E[1],
          D = u.useRef(a);
        u.useEffect(
          function () {
            D.current = a;
          },
          [a]
        );
        var M = u.useRef(t);
        u.useEffect(
          function () {
            M.current = t;
          },
          [t]
        );
        var _ = u.useRef(r);
        u.useEffect(
          function () {
            _.current = r;
          },
          [r]
        );
        var T = u.useRef(n);
        u.useEffect(
          function () {
            T.current = n;
          },
          [n]
        );
        var R = u.useCallback(function (e) {
            null !== e && S(e);
          }, []),
          I = Object(g.a)(
            function (e) {
              return f(e.width || 0);
            },
            { type: "throttle", wait: 100 }
          );
        return (
          u.useEffect(
            function () {
              N && N.resize();
            },
            [d, N]
          ),
          u.useEffect(
            function () {
              O && I(O);
            },
            [O, I]
          ),
          u.useLayoutEffect(
            function () {
              if (c && O) {
                var e = c.edit(O);
                e.renderer.setHScrollBarAlwaysVisible(!1),
                  e.setShowPrintMargin(!1),
                  e.getSession().setUseWrapMode(!0);
                n(
                  v(
                    v(
                      v(
                        {},
                        {
                          fontSize: "14px",
                          scrollPastEnd: 0.5,
                          enableBasicAutocompletion: !0,
                          newLineMode: "unix",
                          fontFamily:
                            "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
                        }
                      ),
                      D.current
                    ),
                    {},
                    { theme: D.current.theme || Object(b.d)() }
                  ),
                  { silent: !0 }
                );
                var t = !1;
                e.on("change", function (r) {
                  if (M.current && !t) {
                    var n = e
                        .getSession()
                        .getDocument()
                        .positionToIndex(r.start, 0),
                      o = n > 0 ? [n] : [],
                      i = r.lines.join("\n");
                    "insert" === r.action
                      ? (o.push(i), M.current({ value: e.getValue(), ops: o }))
                      : "remove" === r.action &&
                        (o.push({ d: i.length }),
                        M.current({ value: e.getValue(), ops: o }));
                  }
                }),
                  e.on(
                    "changeSelection",
                    m()(function () {
                      if (_.current && e.isFocused()) {
                        var t = e.getSession(),
                          r = e.getSelection(),
                          n = t.getDocument(),
                          o = r.getCursor(),
                          i = r.getRange();
                        _.current({
                          cursor: v(
                            v({}, o),
                            {},
                            { index: n.positionToIndex(o) }
                          ),
                          range: {
                            start: v(
                              v({}, i.start),
                              {},
                              { index: n.positionToIndex(i.start) }
                            ),
                            end: v(
                              v({}, i.end),
                              {},
                              { index: n.positionToIndex(i.end) }
                            ),
                          },
                        });
                      }
                    }, 200)
                  ),
                  e.on("blur", function () {
                    _.current && _.current(null);
                  });
                var r = function (t) {
                  var r = e.getSession(),
                    n = r.getDocument(),
                    o = t.indexStart,
                    i = t.indexEnd,
                    a = t.color,
                    s = t.className || "",
                    u = void 0 !== t.opacity ? t.opacity : 0.2,
                    l = "position: absolute; background-color: "
                      .concat(a, "; opacity: ")
                      .concat(u, ";"),
                    d = n.indexToPosition(o, 0),
                    f = n.indexToPosition(i, 0),
                    p = c.Range.fromPoints(
                      r.documentToScreenPosition(d),
                      r.documentToScreenPosition(f)
                    );
                  if (p.isEmpty())
                    return function () {
                      return null;
                    };
                  var m = r.addDynamicMarker({
                    update: function (e, t) {
                      p.isMultiLine()
                        ? t.drawTextMarker(e, p, s, t.config, l)
                        : t.drawSingleLineMarker(e, p, s, t.config, 0, l);
                    },
                  });
                  return function () {
                    r.removeMarker(m.id);
                  };
                };
                return (
                  C({
                    writeOtOps: function (r) {
                      var n = e.getSession(),
                        o = n.getDocument();
                      t = !0;
                      var i,
                        a = 0,
                        s = y(r);
                      try {
                        for (s.s(); !(i = s.n()).done; ) {
                          var u = i.value;
                          if ("string" === typeof u)
                            n.insert(o.indexToPosition(a, 0), u),
                              (a += u.length);
                          else if (
                            "object" === typeof u &&
                            "number" === typeof u.d
                          ) {
                            var l = o.indexToPosition(a, 0),
                              d = o.indexToPosition(a + u.d, 0),
                              f = new c.Range(l.row, l.column, d.row, d.column);
                            n.remove(f);
                          } else "number" === typeof u && (a += u);
                        }
                      } catch (p) {
                        s.e(p);
                      } finally {
                        s.f();
                      }
                      t = !1;
                    },
                    focus: function () {
                      e.focus();
                    },
                    setValue: function (r) {
                      (t = !0), e.setValue(r, -1), (t = !1);
                    },
                    setPath: function (t) {
                      var r = Object(h.a)({ ace: c, path: t });
                      e.getSession().setMode(r);
                    },
                    setOptions: n,
                    getOptions: function () {
                      return k(e.getOptions());
                    },
                    addCommand: function (t) {
                      return (
                        e.commands.addCommand(t),
                        function () {
                          e.commands.removeCommand(t);
                        }
                      );
                    },
                    removeCommand: function (t) {
                      e.commands.removeCommand(t);
                    },
                    setSelections: function (t) {
                      var n = e.getSession(),
                        o = n.getMarkers();
                      o &&
                        Object.values(o).forEach(function (e) {
                          return n.removeMarker(e.id);
                        }),
                        t.forEach(r);
                    },
                    resize: function () {
                      e.resize();
                    },
                    getRenderer: function () {
                      return e.renderer;
                    },
                  }),
                  function () {
                    var t = c.require("ace/edit_session").EditSession;
                    e.setSession(new t("")), e.destroy(), C(null);
                  }
                );
              }
              function n(t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { silent: !1 },
                  n = r.silent;
                e.setOptions(w(t)),
                  T.current && !n && T.current(k(e.getOptions()));
              }
            },
            [c, O]
          ),
          [N, R]
        );
      }
      function P(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function N(e) {
        var t,
          r = e.editorRef,
          o = e.isLoading,
          c = Object(a.a)(e, ["editorRef", "isLoading"]),
          l = u.useState(
            Boolean(
              null === (t = c.initialOptions) || void 0 === t
                ? void 0
                : t.readOnly
            )
          ),
          d = Object(i.a)(l, 2),
          p = d[0],
          m = d[1],
          j = S(
            E(
              E({}, c),
              {},
              {
                onOptionsChange: function (e) {
                  m(e.readOnly), c.onOptionsChange && c.onOptionsChange(e);
                },
              }
            )
          ),
          h = Object(i.a)(j, 2),
          b = h[0],
          g = h[1];
        return (
          u.useEffect(
            function () {
              if (r)
                return (
                  r(b),
                  function () {
                    r(null);
                  }
                );
            },
            [r, b]
          ),
          Object(n.jsxs)("div", {
            className:
              "jsx-3040802251 " + (f()("editor", { "is-read-only": p }) || ""),
            children: [
              Object(n.jsx)(D, { ref: g }),
              !b || o
                ? Object(n.jsx)("div", {
                    className: "jsx-3040802251 loader",
                    children: Object(n.jsx)(C, {}),
                  })
                : null,
              Object(n.jsx)(s.a, {
                id: "3738224526",
                children: [
                  ".editor.jsx-3040802251{position:relative;height:100%;width:100%;}",
                  ".loader.jsx-3040802251{position:absolute;left:0;top:0;height:100%;width:100%;overflow:hidden;z-index:5;}",
                  ".editor.is-read-only.jsx-3040802251 .ace_cursor{opacity:0 !important;}",
                  ".editor.jsx-3040802251 .ace_content{line-height:1;}",
                ],
              }),
              Object(n.jsx)(s.a, {
                id: "2666048492",
                children: [
                  ".ace_editor{background-color:var(--color-background-1);border-radius:var(--border-radius-1);font-family:var(--font-family-monospace) !important;}",
                  ".ace_content{background-color:var(--color-background-1) !important;}",
                  ".ace_gutter{background-color:var(--color-background-1) !important;color:var(--color-foreground-3) !important;}",
                  ".ace_gutter-cell{padding-right:var(--spacing-3) !important;padding-left:var(--spacing-1) !important;}",
                  ".ace_placeholder{color:var(--color-foreground-1) !important;font-family:var(--font-family-monospace) !important;font-size:var(--font-size-desktop-text-small) !important;line-height:1 !important;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}",
                  ".ace-dracula .ace_marker-layer .ace_active-line{opacity:0.4;}",
                  ".ace_gutter-active-line{background-color:transparent !important;}",
                  ".ace_fold{background:var(--color-primary-transparent-1) !important;border:1px solid var(--color-primary-1) !important;border-radius:var(--border-radius-2) !important;-webkit-transition:-webkit-transform 0.1s;-webkit-transition:transform 0.1s;transition:transform 0.1s;}",
                  ".ace_fold:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}",
                ],
              }),
            ],
          })
        );
      }
      function C() {
        return Object(n.jsxs)("div", {
          className: "jsx-1258544441 loader",
          children: [
            Object(n.jsxs)(l.a, {
              primaryColor: "var(--color-control-1)",
              secondaryColor: "var(--color-control-3)",
              uniquekey: "editorLoader",
              children: [
                Object(n.jsx)("rect", {
                  x: "0",
                  y: "0",
                  rx: "3",
                  ry: "3",
                  width: "70",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "80",
                  y: "0",
                  rx: "3",
                  ry: "3",
                  width: "100",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "190",
                  y: "0",
                  rx: "3",
                  ry: "3",
                  width: "10",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "15",
                  y: "20",
                  rx: "3",
                  ry: "3",
                  width: "130",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "155",
                  y: "20",
                  rx: "3",
                  ry: "3",
                  width: "130",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "15",
                  y: "40",
                  rx: "3",
                  ry: "3",
                  width: "90",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "115",
                  y: "40",
                  rx: "3",
                  ry: "3",
                  width: "60",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "185",
                  y: "40",
                  rx: "3",
                  ry: "3",
                  width: "60",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "0",
                  y: "60",
                  rx: "3",
                  ry: "3",
                  width: "30",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "15",
                  y: "80",
                  rx: "3",
                  ry: "3",
                  width: "70",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "95",
                  y: "80",
                  rx: "3",
                  ry: "3",
                  width: "60",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "165",
                  y: "80",
                  rx: "3",
                  ry: "3",
                  width: "30",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "15",
                  y: "100",
                  rx: "3",
                  ry: "3",
                  width: "110",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "135",
                  y: "100",
                  rx: "3",
                  ry: "3",
                  width: "100",
                  height: "10",
                  className: "jsx-1258544441",
                }),
                Object(n.jsx)("rect", {
                  x: "0",
                  y: "120",
                  rx: "3",
                  ry: "3",
                  width: "70",
                  height: "10",
                  className: "jsx-1258544441",
                }),
              ],
            }),
            Object(n.jsx)(s.a, {
              id: "1258544441",
              children: [
                ".loader.jsx-1258544441{background-color:var(--color-background-1);padding:var(--spacing-2);overflow:hidden;height:100%;width:100%;opacity:0;-webkit-animation:fadeIn-jsx-1258544441 ease 0s forwards;animation:fadeIn-jsx-1258544441 ease 0s forwards;-webkit-animation-delay:200ms;animation-delay:200ms;}",
                ".loader.jsx-1258544441>svg{max-width:640px;min-width:500px;height:auto;}",
                "@media screen and (min-width:900px){.loader.jsx-1258544441{padding-left:var(--spacing-4);}}",
                "@-webkit-keyframes fadeIn-jsx-1258544441{0%{opacity:0;}100%{opacity:1;}}",
                "@keyframes fadeIn-jsx-1258544441{0%{opacity:0;}100%{opacity:1;}}",
              ],
            }),
          ],
        });
      }
      var D = u.forwardRef(function (e, t) {
        return Object(n.jsx)(
          "div",
          E(
            E({ ref: t }, e),
            {},
            {
              className:
                "jsx-447081000 " +
                ((e && null != e.className && e.className) || ""),
              children: Object(n.jsx)(s.a, {
                id: "447081000",
                children: ["div.jsx-447081000{position:relative;height:100%;}"],
              }),
            }
          )
        );
      });
    },
  },
]);

(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [32],
  {
    R84t(e, t, r) {
      "use strict";
      r.d(t, "a", () => {
        return s;
      });
      const n = r("cpVT");
      const o = r("nKUr");
      const i = (r("q1tI"), r("pDQI"));
      function a(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push(...n);
        }
        return r;
      }
      function c(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach((t) => {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach((t) => {
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
    hzRC(e, t, r) {
      "use strict";
      r.d(t, "b", () => {
        return N;
      }),
        r.d(t, "a", () => {
          return C;
        });
      const n = r("nKUr");
      const o = r("cpVT");
      const i = r("xvhg");
      const a = r("dhJC");
      const c = r("MX0m");
      const s = r.n(c);
      const u = r("q1tI");
      const l = r("GRpk");
      const d = r("TSYQ");
      const f = r.n(d);
      const p = r("9/5/");
      const m = r.n(p);
      const j = r("Dtuc");
      const h = r("/+LJ");
      const b = r("RB+8");
      const g = r("koLh");
      function y(e, t) {
        let r;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = ((e, t) => {
              if (!e) return;
              if ("string" === typeof e) return x(e, t);
              let r = Object.prototype.toString.call(e).slice(8, -1);
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
            let n = 0;
            const o = () => {};
            return {
              s: o,
              n() {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e(e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let i;
        let a = !0;
        let c = !1;
        return {
          s() {
            r = e[Symbol.iterator]();
          },
          n() {
            const e = r.next();
            return (a = e.done), e;
          },
          e(e) {
            (c = !0), (i = e);
          },
          f() {
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
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push(...n);
        }
        return r;
      }
      function v(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach((t) => {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach((t) => {
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
        const t = e.onChange;
        const r = e.onCursorSelectionChange;
        const n = e.onOptionsChange;
        const o = e.initialOptions;
        const a = void 0 === o ? {} : o;

        const c = (() => {
          const e = u.useState(null),
            t = Object(i.a)(e, 2),
            r = t[0],
            n = t[1];
          return (
            u.useEffect(() => {
              let e = !0;
              return (
                Object(j.a)().then((t) => {
                  e && n(t);
                }),
                () => {
                  e = !1;
                }
              );
            }, []),
            r
          );
        })();

        const s = u.useState(0);
        const l = Object(i.a)(s, 2);
        const d = l[0];
        const f = l[1];
        const p = u.useState(null);
        const x = Object(i.a)(p, 2);
        const O = x[0];
        const S = x[1];
        const P = u.useState(null);
        const E = Object(i.a)(P, 2);
        const N = E[0];
        const C = E[1];
        const D = u.useRef(a);
        u.useEffect(() => {
          D.current = a;
        }, [a]);
        const M = u.useRef(t);
        u.useEffect(() => {
          M.current = t;
        }, [t]);
        const _ = u.useRef(r);
        u.useEffect(() => {
          _.current = r;
        }, [r]);
        const T = u.useRef(n);
        u.useEffect(() => {
          T.current = n;
        }, [n]);

        const R = u.useCallback((e) => {
            null !== e && S(e);
          }, []);

        const I = Object(g.a)(
          (e) => {
            return f(e.width || 0);
          },
          { type: "throttle", wait: 100 }
        );

        return u.useEffect(() => {
          N && N.resize();
        }, [d, N]),
        u.useEffect(() => {
          O && I(O);
        }, [O, I]),
        u.useLayoutEffect(() => {
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
            let t = !1;
            e.on("change", (r) => {
              if (M.current && !t) {
                const n = e
                    .getSession()
                    .getDocument()
                    .positionToIndex(r.start, 0);

                const o = n > 0 ? [n] : [];
                const i = r.lines.join("\n");
                "insert" === r.action
                  ? (o.push(i), M.current({ value: e.getValue(), ops: o }))
                  : "remove" === r.action &&
                    (o.push({ d: i.length }),
                    M.current({ value: e.getValue(), ops: o }));
              }
            }),
              e.on(
                "changeSelection",
                m()(() => {
                  if (_.current && e.isFocused()) {
                    const t = e.getSession();
                    const r = e.getSelection();
                    const n = t.getDocument();
                    const o = r.getCursor();
                    const i = r.getRange();
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
              e.on("blur", () => {
                _.current && _.current(null);
              });
            const r = (t) => {
              const r = e.getSession();
              const n = r.getDocument();
              const o = t.indexStart;
              const i = t.indexEnd;
              const a = t.color;
              const s = t.className || "";
              const u = void 0 !== t.opacity ? t.opacity : 0.2;

              const l = "position: absolute; background-color: "
                .concat(a, "; opacity: ")
                .concat(u, ";");

              const d = n.indexToPosition(o, 0);
              const f = n.indexToPosition(i, 0);

              const p = c.Range.fromPoints(
                r.documentToScreenPosition(d),
                r.documentToScreenPosition(f)
              );

              if (p.isEmpty())
                return () => {
                  return null;
                };
              const m = r.addDynamicMarker({
                update(e, t) {
                  p.isMultiLine()
                    ? t.drawTextMarker(e, p, s, t.config, l)
                    : t.drawSingleLineMarker(e, p, s, t.config, 0, l);
                },
              });
              return () => {
                r.removeMarker(m.id);
              };
            };
            return C({
              writeOtOps(r) {
                const n = e.getSession();
                const o = n.getDocument();
                t = !0;
                let i;
                let a = 0;
                const s = y(r);
                try {
                  for (s.s(); !(i = s.n()).done; ) {
                    const u = i.value;
                    if ("string" === typeof u)
                      n.insert(o.indexToPosition(a, 0), u), (a += u.length);
                    else if (
                      "object" === typeof u &&
                      "number" === typeof u.d
                    ) {
                      const l = o.indexToPosition(a, 0);
                      const d = o.indexToPosition(a + u.d, 0);
                      const f = new c.Range(l.row, l.column, d.row, d.column);
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
              focus() {
                e.focus();
              },
              setValue(r) {
                (t = !0), e.setValue(r, -1), (t = !1);
              },
              setPath(t) {
                const r = Object(h.a)({ ace: c, path: t });
                e.getSession().setMode(r);
              },
              setOptions: n,
              getOptions() {
                return k(e.getOptions());
              },
              addCommand(t) {
                return (
                  e.commands.addCommand(t),
                  () => {
                    e.commands.removeCommand(t);
                  }
                );
              },
              removeCommand(t) {
                e.commands.removeCommand(t);
              },
              setSelections(t) {
                const n = e.getSession();
                const o = n.getMarkers();
                o &&
                  Object.values(o).forEach((e) => {
                    return n.removeMarker(e.id);
                  }),
                  t.forEach(r);
              },
              resize() {
                e.resize();
              },
              getRenderer() {
                return e.renderer;
              },
            }),
            () => {
              const t = c.require("ace/edit_session").EditSession;
              e.setSession(new t("")), e.destroy(), C(null);
            }
          ;
          }
          function n(t) {
            const r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { silent: !1 };

            const n = r.silent;
            e.setOptions(w(t)),
              T.current && !n && T.current(k(e.getOptions()));
          }
        }, [c, O]),
        [N, R]
      ;
      }
      function P(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push(...n);
        }
        return r;
      }
      function E(e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach((t) => {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach((t) => {
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
        let t;
        const r = e.editorRef;
        const o = e.isLoading;
        const c = Object(a.a)(e, ["editorRef", "isLoading"]);

        const l = u.useState(
          Boolean(
            null === (t = c.initialOptions) || void 0 === t
              ? void 0
              : t.readOnly
          )
        );

        const d = Object(i.a)(l, 2);
        const p = d[0];
        const m = d[1];

        const j = S(
          E(
            E({}, c),
            {},
            {
              onOptionsChange(e) {
                m(e.readOnly), c.onOptionsChange && c.onOptionsChange(e);
              },
            }
          )
        );

        const h = Object(i.a)(j, 2);
        const b = h[0];
        const g = h[1];
        return u.useEffect(() => {
          if (r)
            return (
              r(b),
              () => {
                r(null);
              }
            );
        }, [r, b]),
        Object(n.jsxs)("div", {
          className:
            `jsx-3040802251 ${f()("editor", { "is-read-only": p }) || ""}`,
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
      ;
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
      var D = u.forwardRef((e, t) => {
        return Object(n.jsx)(
          "div",
          E(
            E({ ref: t }, e),
            {},
            {
              className:
                `jsx-447081000 ${(e && null != e.className && e.className) || ""}`,
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

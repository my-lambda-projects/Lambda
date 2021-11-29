(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([
  [3],
  {
    AfQn: function (r, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      function n(r) {
        return r ? r.charAt(0).toUpperCase() + r.slice(1) : r;
      }
    },
    ZELe: function (r, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return n;
      });
      function n(r) {
        return function (e, i, n) {
          var t = e[i];
          if (null === t || "undefined" === typeof t)
            return new Error(
              "The prop `"
                .concat(i, "` is marked as required in `")
                .concat(n, "`, but its value is `")
                .concat(t, "`")
            );
          for (
            var a = arguments.length, b = new Array(a > 3 ? a - 3 : 0), l = 3;
            l < a;
            l++
          )
            b[l - 3] = arguments[l];
          return r.apply(void 0, [e, i, n].concat(b));
        };
      }
    },
    dpqJ: function (r, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return b;
      });
      var n = i("q1tI");
      var t = i.n(n);
      var a = i("ZELe");
      var b = {
        oneOf: function (r) {
          function e(e, i, n) {
            var a = t.a.Children.toArray(e[i]);
            var b = r.map(function (r) {
              return r ? l(r) : r;
            });
            for (var g = 0; g < a.length; g++) {
              var s = a[g];
              if (s && s.type) {
                var c = l(s.type);
                if (b.indexOf(c) < 0)
                  return new Error(
                    "Expected one of "
                      .concat(b.join(", "), " in ")
                      .concat(n, " but found '")
                      .concat(c, "'")
                  );
              } else if (s)
                return new Error(
                  "Expected one of "
                    .concat(b.join(", "), " in ")
                    .concat(n, " but found an element with unknown type: ")
                    .concat(s)
                );
            }
          }
          e.isRequired = Object(a["a"])(e);
          return e;
        },
        oneOfEach: function (r) {
          return function (e, i, n) {
            var a = t.a.Children.toArray(e[i]);
            var b = {};
            var g = r.map(function (r) {
              var e = l(r);
              b[e] = 0;
              return e;
            });
            for (var s = 0; s < a.length; s++) {
              var c = a[s];
              if (c && c.type) {
                var f = l(c.type);
                if (g.indexOf(f) < 0)
                  return new Error(
                    "Expected one of "
                      .concat(g.join(", "), " in ")
                      .concat(n, " but found '")
                      .concat(f, "'")
                  );
                b[f] = (b[f] || 0) + 1;
              } else if (c)
                return new Error(
                  "Expected one of "
                    .concat(g.join(", "), " in ")
                    .concat(n, " but found an element of unknown type: ")
                    .concat(c)
                );
            }
            var m = [];
            Object.keys(b).forEach(function (r) {
              b[r] > 1 &&
                m.push("".concat(b[r], " children of type ").concat(r));
              0 === b[r] && m.push("0 children of type ".concat(r));
            });
            if (m.length > 0)
              return new Error(
                "Expected exactly one of each "
                  .concat(g.join(", "), " in ")
                  .concat(n, " but found:\n  ")
                  .concat(m.join("\n"))
              );
          };
        },
        enforceOrder: function () {
          for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++)
            e[i] = arguments[i];
          function n(r, e) {
            for (var i = 0; i < r.length; i++) if (r[i] !== e[i]) return false;
            return true;
          }
          function b(r, e) {
            return e
              .map(function (e) {
                return g(r, e);
              })
              .join("\n\n");
          }
          function g(r, e) {
            var i = e
              .map(function (r) {
                return r ? l(r) : "??";
              })
              .map(function (r) {
                return "  <".concat(r, " />");
              })
              .join("\n");
            return "<".concat(r, ">\n").concat(i, "\n</").concat(r, ">");
          }
          function s(r, i, a) {
            var s = t.a.Children.toArray(r[i]).map(function (r) {
              if (r && r.type) return l(r.type);
              if (r) return null;
            });
            for (var c = 0; c < e.length; c++) {
              var f = e[c].map(function (r) {
                return r ? l(r) : "??";
              });
              if (n(s, f)) return;
            }
            return new Error(
              "Expected children of "
                .concat(a, " in one of the following formats:\n  ")
                .concat(b(a, e), "\n\n\n  Instead of:\n  ")
                .concat(g(a, s))
            );
          }
          s.isRequired = Object(a["a"])(s);
          return s;
        },
      };
      var l = function (r) {
        return "string" === typeof r ? r : r.displayName || r.name;
      };
    },
    pZ4s: function (r, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return Y;
      });
      var n = i("rePB");
      var t = i("VTBJ");
      var a = i("1OyB");
      var b = i("vuIU");
      var l = i("Ji7U");
      var g = i("LK+K");
      var s = i("q1tI");
      var c = i.n(s);
      var f = i("17x9");
      var m = i.n(f);
      var d = i("TSYQ");
      var o = i.n(d);
      var _ = i("J2CL");
      var A = i("dpqJ");
      var N = i("AfQn");
      var x = i("4Awi");
      var p = i("II2N");
      var u = i("jtGx");
      var h = i("6SzX");
      var w = i("Ff2n");
      var j = function (r) {
        var e = r.spacing,
          i = r.media;
        return Object(t["a"])(
          {
            spacingSmall: e.small,
            spacingMedium: e.medium,
            spacingLarge: e.large,
          },
          i
        );
      };
      var I, k, O, v;
      var y = {
        componentId: "bNerA",
        template: function (r) {
          return "\n\n.bNerA_bGBk{box-sizing:border-box;display:block;min-width:0.0625rem;text-align:inherit}\n\n[dir=ltr] .bNerA_bGBk,[dir=rtl] .bNerA_bGBk{text-align:inherit}\n\n.bNerA_bGBk.bNerA_buDT{margin-bottom:"
            .concat(
              r.spacingSmall || "inherit",
              "}\n\n.bNerA_bGBk.bNerA_dlWR{margin-bottom:"
            )
            .concat(
              r.spacingMedium || "inherit",
              "}\n\n.bNerA_bGBk.bNerA_cGJD{margin-bottom:"
            )
            .concat(
              r.spacingLarge || "inherit",
              "}\n\n.bNerA_bGBk.bNerA_DpxJ.bNerA_eFno,.bNerA_bGBk.bNerA_cKZZ,.bNerA_dTOw{margin-bottom:0}\n\n.bNerA_dTOw{box-sizing:border-box;flex-basis:0%;flex-grow:1;flex-shrink:1}\n\n.bNerA_dTOw.bNerA_cGJD,.bNerA_dTOw.bNerA_dlWR,.bNerA_dTOw.bNerA_buDT{margin-bottom:0}\n\n.bNerA_dTOw.bNerA_bBOa{padding-left:calc("
            )
            .concat(r.spacingSmall || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingSmall || "inherit",
              "/2)}\n\n.bNerA_dTOw.bNerA_yZGt{padding-left:calc("
            )
            .concat(r.spacingMedium || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingMedium || "inherit",
              "/2)}\n\n.bNerA_dTOw.bNerA_PsGC{padding-left:calc("
            )
            .concat(r.spacingLarge || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingLarge || "inherit",
              "/2)}\n\n.bNerA_dTOw.bNerA_oUBk{align-self:flex-start}\n\n.bNerA_dTOw.bNerA_NmrE{align-self:center}\n\n.bNerA_dTOw.bNerA_bwwb{align-self:flex-end}\n\n.bNerA_dTOw.bNerA_EMjX{text-align:start}\n\n[dir=ltr] .bNerA_dTOw.bNerA_EMjX{text-align:left}\n\n[dir=rtl] .bNerA_dTOw.bNerA_EMjX{text-align:right}\n\n.bNerA_dTOw.bNerA_dBtH{text-align:end}\n\n[dir=ltr] .bNerA_dTOw.bNerA_dBtH{text-align:right}\n\n[dir=rtl] .bNerA_dTOw.bNerA_dBtH{text-align:left}\n\n.bNerA_dTOw.bNerA_ImeN,[dir=ltr] .bNerA_dTOw.bNerA_ImeN,[dir=rtl] .bNerA_dTOw.bNerA_ImeN{text-align:center}\n\n.bNerA_dTOw.bNerA_qfdC,[dir=ltr] .bNerA_dTOw.bNerA_qfdC,[dir=rtl] .bNerA_dTOw.bNerA_qfdC{text-align:inherit}\n\n.bNerA_fucb{flex-basis:auto}\n\n.bNerA_Iucl,.bNerA_fucb{flex-grow:0;flex-shrink:0}\n\n.bNerA_Iucl{flex-basis:8.33325%;max-width:8.33325%}\n\n.bNerA_ciwJ{flex-basis:16.6665%;max-width:16.6665%}\n\n.bNerA_ciwJ,.bNerA_cive{flex-grow:0;flex-shrink:0}\n\n.bNerA_cive{flex-basis:24.99975%;max-width:24.99975%}\n\n.bNerA_cXtf{flex-basis:33.333%;max-width:33.333%}\n\n.bNerA_cXtf,.bNerA_bJnM{flex-grow:0;flex-shrink:0}\n\n.bNerA_bJnM{flex-basis:41.66625%;max-width:41.66625%}\n\n.bNerA_bZGN{flex-basis:49.9995%;max-width:49.9995%}\n\n.bNerA_bZGN,.bNerA_ckIz{flex-grow:0;flex-shrink:0}\n\n.bNerA_ckIz{flex-basis:58.33275%;max-width:58.33275%}\n\n.bNerA_galf{flex-basis:66.666%;max-width:66.666%}\n\n.bNerA_galf,.bNerA_ehfr{flex-grow:0;flex-shrink:0}\n\n.bNerA_ehfr{flex-basis:74.99925%;max-width:74.99925%}\n\n.bNerA_fuiF{flex-basis:83.3325%;max-width:83.3325%}\n\n.bNerA_fuiF,.bNerA_cXsq{flex-grow:0;flex-shrink:0}\n\n.bNerA_cXsq{flex-basis:91.66575%;max-width:91.66575%}\n\n.bNerA_cQlq{-webkit-margin-end:0;-webkit-margin-start:8.33325%;margin-inline-end:0;margin-inline-start:8.33325%}\n\n[dir=ltr] .bNerA_cQlq{margin-left:8.33325%;margin-right:0}\n\n[dir=rtl] .bNerA_cQlq{margin-left:0;margin-right:8.33325%}\n\n.bNerA_cxyz{-webkit-margin-end:0;-webkit-margin-start:16.6665%;margin-inline-end:0;margin-inline-start:16.6665%}\n\n[dir=ltr] .bNerA_cxyz{margin-left:16.6665%;margin-right:0}\n\n[dir=rtl] .bNerA_cxyz{margin-left:0;margin-right:16.6665%}\n\n.bNerA_eUDU{-webkit-margin-end:0;-webkit-margin-start:24.99975%;margin-inline-end:0;margin-inline-start:24.99975%}\n\n[dir=ltr] .bNerA_eUDU{margin-left:24.99975%;margin-right:0}\n\n[dir=rtl] .bNerA_eUDU{margin-left:0;margin-right:24.99975%}\n\n.bNerA_eyiG{-webkit-margin-end:0;-webkit-margin-start:33.333%;margin-inline-end:0;margin-inline-start:33.333%}\n\n[dir=ltr] .bNerA_eyiG{margin-left:33.333%;margin-right:0}\n\n[dir=rtl] .bNerA_eyiG{margin-left:0;margin-right:33.333%}\n\n.bNerA_dZSU{-webkit-margin-end:0;-webkit-margin-start:41.66625%;margin-inline-end:0;margin-inline-start:41.66625%}\n\n[dir=ltr] .bNerA_dZSU{margin-left:41.66625%;margin-right:0}\n\n[dir=rtl] .bNerA_dZSU{margin-left:0;margin-right:41.66625%}\n\n.bNerA_ccNL{-webkit-margin-end:0;-webkit-margin-start:49.9995%;margin-inline-end:0;margin-inline-start:49.9995%}\n\n[dir=ltr] .bNerA_ccNL{margin-left:49.9995%;margin-right:0}\n\n[dir=rtl] .bNerA_ccNL{margin-left:0;margin-right:49.9995%}\n\n.bNerA_epzV{-webkit-margin-end:0;-webkit-margin-start:58.33275%;margin-inline-end:0;margin-inline-start:58.33275%}\n\n[dir=ltr] .bNerA_epzV{margin-left:58.33275%;margin-right:0}\n\n[dir=rtl] .bNerA_epzV{margin-left:0;margin-right:58.33275%}\n\n.bNerA_ewJS{-webkit-margin-end:0;-webkit-margin-start:66.666%;margin-inline-end:0;margin-inline-start:66.666%}\n\n[dir=ltr] .bNerA_ewJS{margin-left:66.666%;margin-right:0}\n\n[dir=rtl] .bNerA_ewJS{margin-left:0;margin-right:66.666%}\n\n.bNerA_teYF{-webkit-margin-end:0;-webkit-margin-start:74.99925%;margin-inline-end:0;margin-inline-start:74.99925%}\n\n[dir=ltr] .bNerA_teYF{margin-left:74.99925%;margin-right:0}\n\n[dir=rtl] .bNerA_teYF{margin-left:0;margin-right:74.99925%}\n\n.bNerA_fRJf{-webkit-margin-end:0;-webkit-margin-start:83.3325%;margin-inline-end:0;margin-inline-start:83.3325%}\n\n[dir=ltr] .bNerA_fRJf{margin-left:83.3325%;margin-right:0}\n\n[dir=rtl] .bNerA_fRJf{margin-left:0;margin-right:83.3325%}\n\n.bNerA_euOY{-webkit-margin-end:0;-webkit-margin-start:91.66575%;margin-inline-end:0;margin-inline-start:91.66575%}\n\n[dir=ltr] .bNerA_euOY{margin-left:91.66575%;margin-right:0}\n\n[dir=rtl] .bNerA_euOY{margin-left:0;margin-right:91.66575%}\n\n.bNerA_Ywqj{flex:0 0 100%}\n\n@media screen and (--mediumMin){.bNerA_crIs{box-sizing:border-box;flex-basis:0%;flex-grow:1;flex-shrink:1}.bNerA_crIs,.bNerA_crIs.bNerA_cGJD,.bNerA_crIs.bNerA_dlWR,.bNerA_crIs.bNerA_buDT{margin-bottom:0}.bNerA_crIs.bNerA_bBOa{padding-left:calc("
            )
            .concat(r.spacingSmall || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingSmall || "inherit",
              "/2)}.bNerA_crIs.bNerA_yZGt{padding-left:calc("
            )
            .concat(r.spacingMedium || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingMedium || "inherit",
              "/2)}.bNerA_crIs.bNerA_PsGC{padding-left:calc("
            )
            .concat(r.spacingLarge || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingLarge || "inherit",
              "/2)}.bNerA_crIs.bNerA_oUBk{align-self:flex-start}.bNerA_crIs.bNerA_NmrE{align-self:center}.bNerA_crIs.bNerA_bwwb{align-self:flex-end}.bNerA_crIs.bNerA_EMjX{text-align:start}[dir=ltr] .bNerA_crIs.bNerA_EMjX{text-align:left}[dir=rtl] .bNerA_crIs.bNerA_EMjX{text-align:right}.bNerA_crIs.bNerA_dBtH{text-align:end}[dir=ltr] .bNerA_crIs.bNerA_dBtH{text-align:right}[dir=rtl] .bNerA_crIs.bNerA_dBtH{text-align:left}.bNerA_crIs.bNerA_ImeN,[dir=ltr] .bNerA_crIs.bNerA_ImeN,[dir=rtl] .bNerA_crIs.bNerA_ImeN{text-align:center}.bNerA_crIs.bNerA_qfdC,[dir=ltr] .bNerA_crIs.bNerA_qfdC,[dir=rtl] .bNerA_crIs.bNerA_qfdC{text-align:inherit}.bNerA_fwxB{flex-basis:auto}.bNerA_juaX,.bNerA_fwxB{flex-grow:0;flex-shrink:0}.bNerA_juaX{flex-basis:8.33325%;max-width:8.33325%}.bNerA_xoSo{flex-basis:16.6665%;max-width:16.6665%}.bNerA_xoSo,.bNerA_dDfd{flex-grow:0;flex-shrink:0}.bNerA_dDfd{flex-basis:24.99975%;max-width:24.99975%}.bNerA_UigQ{flex-basis:33.333%;max-width:33.333%}.bNerA_UigQ,.bNerA_ewfT{flex-grow:0;flex-shrink:0}.bNerA_ewfT{flex-basis:41.66625%;max-width:41.66625%}.bNerA_fFWL{flex-basis:49.9995%;max-width:49.9995%}.bNerA_fFWL,.bNerA_cvYO{flex-grow:0;flex-shrink:0}.bNerA_cvYO{flex-basis:58.33275%;max-width:58.33275%}.bNerA_oLmY{flex-basis:66.666%;max-width:66.666%}.bNerA_oLmY,.bNerA_cnES{flex-grow:0;flex-shrink:0}.bNerA_cnES{flex-basis:74.99925%;max-width:74.99925%}.bNerA_dKzK{flex-basis:83.3325%;max-width:83.3325%}.bNerA_dKzK,.bNerA_dILx{flex-grow:0;flex-shrink:0}.bNerA_dILx{flex-basis:91.66575%;max-width:91.66575%}.bNerA_ebYC{-webkit-margin-end:0;-webkit-margin-start:8.33325%;margin-inline-end:0;margin-inline-start:8.33325%}[dir=ltr] .bNerA_ebYC{margin-left:8.33325%;margin-right:0}[dir=rtl] .bNerA_ebYC{margin-left:0;margin-right:8.33325%}.bNerA_bTcC{-webkit-margin-end:0;-webkit-margin-start:16.6665%;margin-inline-end:0;margin-inline-start:16.6665%}[dir=ltr] .bNerA_bTcC{margin-left:16.6665%;margin-right:0}[dir=rtl] .bNerA_bTcC{margin-left:0;margin-right:16.6665%}.bNerA_bgAW{-webkit-margin-end:0;-webkit-margin-start:24.99975%;margin-inline-end:0;margin-inline-start:24.99975%}[dir=ltr] .bNerA_bgAW{margin-left:24.99975%;margin-right:0}[dir=rtl] .bNerA_bgAW{margin-left:0;margin-right:24.99975%}.bNerA_eiwp{-webkit-margin-end:0;-webkit-margin-start:33.333%;margin-inline-end:0;margin-inline-start:33.333%}[dir=ltr] .bNerA_eiwp{margin-left:33.333%;margin-right:0}[dir=rtl] .bNerA_eiwp{margin-left:0;margin-right:33.333%}.bNerA_byfs{-webkit-margin-end:0;-webkit-margin-start:41.66625%;margin-inline-end:0;margin-inline-start:41.66625%}[dir=ltr] .bNerA_byfs{margin-left:41.66625%;margin-right:0}[dir=rtl] .bNerA_byfs{margin-left:0;margin-right:41.66625%}.bNerA_fQmK{-webkit-margin-end:0;-webkit-margin-start:49.9995%;margin-inline-end:0;margin-inline-start:49.9995%}[dir=ltr] .bNerA_fQmK{margin-left:49.9995%;margin-right:0}[dir=rtl] .bNerA_fQmK{margin-left:0;margin-right:49.9995%}.bNerA_cYRh{-webkit-margin-end:0;-webkit-margin-start:58.33275%;margin-inline-end:0;margin-inline-start:58.33275%}[dir=ltr] .bNerA_cYRh{margin-left:58.33275%;margin-right:0}[dir=rtl] .bNerA_cYRh{margin-left:0;margin-right:58.33275%}.bNerA_cfgm{-webkit-margin-end:0;-webkit-margin-start:66.666%;margin-inline-end:0;margin-inline-start:66.666%}[dir=ltr] .bNerA_cfgm{margin-left:66.666%;margin-right:0}[dir=rtl] .bNerA_cfgm{margin-left:0;margin-right:66.666%}.bNerA_bWEY{-webkit-margin-end:0;-webkit-margin-start:74.99925%;margin-inline-end:0;margin-inline-start:74.99925%}[dir=ltr] .bNerA_bWEY{margin-left:74.99925%;margin-right:0}[dir=rtl] .bNerA_bWEY{margin-left:0;margin-right:74.99925%}.bNerA_ddxz{-webkit-margin-end:0;-webkit-margin-start:83.3325%;margin-inline-end:0;margin-inline-start:83.3325%}[dir=ltr] .bNerA_ddxz{margin-left:83.3325%;margin-right:0}[dir=rtl] .bNerA_ddxz{margin-left:0;margin-right:83.3325%}.bNerA_fvqz{-webkit-margin-end:0;-webkit-margin-start:91.66575%;margin-inline-end:0;margin-inline-start:91.66575%}[dir=ltr] .bNerA_fvqz{margin-left:91.66575%;margin-right:0}[dir=rtl] .bNerA_fvqz{margin-left:0;margin-right:91.66575%}.bNerA_myaH{flex:0 0 100%}}\n\n@media screen and (--largeMin){.bNerA_cpbQ{box-sizing:border-box;flex-basis:0%;flex-grow:1;flex-shrink:1}.bNerA_cpbQ,.bNerA_cpbQ.bNerA_cGJD,.bNerA_cpbQ.bNerA_dlWR,.bNerA_cpbQ.bNerA_buDT{margin-bottom:0}.bNerA_cpbQ.bNerA_bBOa{padding-left:calc("
            )
            .concat(r.spacingSmall || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingSmall || "inherit",
              "/2)}.bNerA_cpbQ.bNerA_yZGt{padding-left:calc("
            )
            .concat(r.spacingMedium || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingMedium || "inherit",
              "/2)}.bNerA_cpbQ.bNerA_PsGC{padding-left:calc("
            )
            .concat(r.spacingLarge || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingLarge || "inherit",
              "/2)}.bNerA_cpbQ.bNerA_oUBk{align-self:flex-start}.bNerA_cpbQ.bNerA_NmrE{align-self:center}.bNerA_cpbQ.bNerA_bwwb{align-self:flex-end}.bNerA_cpbQ.bNerA_EMjX{text-align:start}[dir=ltr] .bNerA_cpbQ.bNerA_EMjX{text-align:left}[dir=rtl] .bNerA_cpbQ.bNerA_EMjX{text-align:right}.bNerA_cpbQ.bNerA_dBtH{text-align:end}[dir=ltr] .bNerA_cpbQ.bNerA_dBtH{text-align:right}[dir=rtl] .bNerA_cpbQ.bNerA_dBtH{text-align:left}.bNerA_cpbQ.bNerA_ImeN,[dir=ltr] .bNerA_cpbQ.bNerA_ImeN,[dir=rtl] .bNerA_cpbQ.bNerA_ImeN{text-align:center}.bNerA_cpbQ.bNerA_qfdC,[dir=ltr] .bNerA_cpbQ.bNerA_qfdC,[dir=rtl] .bNerA_cpbQ.bNerA_qfdC{text-align:inherit}.bNerA_flKG{flex-basis:auto}.bNerA_ejgJ,.bNerA_flKG{flex-grow:0;flex-shrink:0}.bNerA_ejgJ{flex-basis:8.33325%;max-width:8.33325%}.bNerA_bkGD{flex-basis:16.6665%;max-width:16.6665%}.bNerA_bkGD,.bNerA_kyuY{flex-grow:0;flex-shrink:0}.bNerA_kyuY{flex-basis:24.99975%;max-width:24.99975%}.bNerA_eIFh{flex-basis:33.333%;max-width:33.333%}.bNerA_eIFh,.bNerA_eeNC{flex-grow:0;flex-shrink:0}.bNerA_eeNC{flex-basis:41.66625%;max-width:41.66625%}.bNerA_MKjh{flex-basis:49.9995%;max-width:49.9995%}.bNerA_MKjh,.bNerA_dNFt{flex-grow:0;flex-shrink:0}.bNerA_dNFt{flex-basis:58.33275%;max-width:58.33275%}.bNerA_coSQ{flex-basis:66.666%;max-width:66.666%}.bNerA_coSQ,.bNerA_dREd{flex-grow:0;flex-shrink:0}.bNerA_dREd{flex-basis:74.99925%;max-width:74.99925%}.bNerA_bJLL{flex-basis:83.3325%;max-width:83.3325%}.bNerA_bJLL,.bNerA_caYM{flex-grow:0;flex-shrink:0}.bNerA_caYM{flex-basis:91.66575%;max-width:91.66575%}.bNerA_dygw{-webkit-margin-end:0;-webkit-margin-start:8.33325%;margin-inline-end:0;margin-inline-start:8.33325%}[dir=ltr] .bNerA_dygw{margin-left:8.33325%;margin-right:0}[dir=rtl] .bNerA_dygw{margin-left:0;margin-right:8.33325%}.bNerA_fmOw{-webkit-margin-end:0;-webkit-margin-start:16.6665%;margin-inline-end:0;margin-inline-start:16.6665%}[dir=ltr] .bNerA_fmOw{margin-left:16.6665%;margin-right:0}[dir=rtl] .bNerA_fmOw{margin-left:0;margin-right:16.6665%}.bNerA_IaBJ{-webkit-margin-end:0;-webkit-margin-start:24.99975%;margin-inline-end:0;margin-inline-start:24.99975%}[dir=ltr] .bNerA_IaBJ{margin-left:24.99975%;margin-right:0}[dir=rtl] .bNerA_IaBJ{margin-left:0;margin-right:24.99975%}.bNerA_btLI{-webkit-margin-end:0;-webkit-margin-start:33.333%;margin-inline-end:0;margin-inline-start:33.333%}[dir=ltr] .bNerA_btLI{margin-left:33.333%;margin-right:0}[dir=rtl] .bNerA_btLI{margin-left:0;margin-right:33.333%}.bNerA_cWrW{-webkit-margin-end:0;-webkit-margin-start:41.66625%;margin-inline-end:0;margin-inline-start:41.66625%}[dir=ltr] .bNerA_cWrW{margin-left:41.66625%;margin-right:0}[dir=rtl] .bNerA_cWrW{margin-left:0;margin-right:41.66625%}.bNerA_eLfg{-webkit-margin-end:0;-webkit-margin-start:49.9995%;margin-inline-end:0;margin-inline-start:49.9995%}[dir=ltr] .bNerA_eLfg{margin-left:49.9995%;margin-right:0}[dir=rtl] .bNerA_eLfg{margin-left:0;margin-right:49.9995%}.bNerA_bsHW{-webkit-margin-end:0;-webkit-margin-start:58.33275%;margin-inline-end:0;margin-inline-start:58.33275%}[dir=ltr] .bNerA_bsHW{margin-left:58.33275%;margin-right:0}[dir=rtl] .bNerA_bsHW{margin-left:0;margin-right:58.33275%}.bNerA_eWZp{-webkit-margin-end:0;-webkit-margin-start:66.666%;margin-inline-end:0;margin-inline-start:66.666%}[dir=ltr] .bNerA_eWZp{margin-left:66.666%;margin-right:0}[dir=rtl] .bNerA_eWZp{margin-left:0;margin-right:66.666%}.bNerA_shqV{-webkit-margin-end:0;-webkit-margin-start:74.99925%;margin-inline-end:0;margin-inline-start:74.99925%}[dir=ltr] .bNerA_shqV{margin-left:74.99925%;margin-right:0}[dir=rtl] .bNerA_shqV{margin-left:0;margin-right:74.99925%}.bNerA_bXjn{-webkit-margin-end:0;-webkit-margin-start:83.3325%;margin-inline-end:0;margin-inline-start:83.3325%}[dir=ltr] .bNerA_bXjn{margin-left:83.3325%;margin-right:0}[dir=rtl] .bNerA_bXjn{margin-left:0;margin-right:83.3325%}.bNerA_eBxq{-webkit-margin-end:0;-webkit-margin-start:91.66575%;margin-inline-end:0;margin-inline-start:91.66575%}[dir=ltr] .bNerA_eBxq{margin-left:91.66575%;margin-right:0}[dir=rtl] .bNerA_eBxq{margin-left:0;margin-right:91.66575%}.bNerA_fFaJ{flex:0 0 100%}}\n\n@media screen and (--xLargeMin){.bNerA_dsuu{box-sizing:border-box;flex-basis:0%;flex-grow:1;flex-shrink:1}.bNerA_dsuu,.bNerA_dsuu.bNerA_cGJD,.bNerA_dsuu.bNerA_dlWR,.bNerA_dsuu.bNerA_buDT{margin-bottom:0}.bNerA_dsuu.bNerA_bBOa{padding-left:calc("
            )
            .concat(r.spacingSmall || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingSmall || "inherit",
              "/2)}.bNerA_dsuu.bNerA_yZGt{padding-left:calc("
            )
            .concat(r.spacingMedium || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingMedium || "inherit",
              "/2)}.bNerA_dsuu.bNerA_PsGC{padding-left:calc("
            )
            .concat(r.spacingLarge || "inherit", "/2);padding-right:calc(")
            .concat(
              r.spacingLarge || "inherit",
              "/2)}.bNerA_dsuu.bNerA_oUBk{align-self:flex-start}.bNerA_dsuu.bNerA_NmrE{align-self:center}.bNerA_dsuu.bNerA_bwwb{align-self:flex-end}.bNerA_dsuu.bNerA_EMjX{text-align:start}[dir=ltr] .bNerA_dsuu.bNerA_EMjX{text-align:left}[dir=rtl] .bNerA_dsuu.bNerA_EMjX{text-align:right}.bNerA_dsuu.bNerA_dBtH{text-align:end}[dir=ltr] .bNerA_dsuu.bNerA_dBtH{text-align:right}[dir=rtl] .bNerA_dsuu.bNerA_dBtH{text-align:left}.bNerA_dsuu.bNerA_ImeN,[dir=ltr] .bNerA_dsuu.bNerA_ImeN,[dir=rtl] .bNerA_dsuu.bNerA_ImeN{text-align:center}.bNerA_dsuu.bNerA_qfdC,[dir=ltr] .bNerA_dsuu.bNerA_qfdC,[dir=rtl] .bNerA_dsuu.bNerA_qfdC{text-align:inherit}.bNerA_efaD{flex-basis:auto;flex-grow:0;flex-shrink:0}.bNerA_bcuT{flex-basis:8.33325%;max-width:8.33325%}.bNerA_bcuT,.bNerA_eKsY{flex-grow:0;flex-shrink:0}.bNerA_eKsY{flex-basis:16.6665%;max-width:16.6665%}.bNerA_MPOL{flex-basis:24.99975%;max-width:24.99975%}.bNerA_MPOL,.bNerA_biOQ{flex-grow:0;flex-shrink:0}.bNerA_biOQ{flex-basis:33.333%;max-width:33.333%}.bNerA_bbjg{flex-basis:41.66625%;max-width:41.66625%}.bNerA_bbjg,.bNerA_egeo{flex-grow:0;flex-shrink:0}.bNerA_egeo{flex-basis:49.9995%;max-width:49.9995%}.bNerA_cEMu{flex-basis:58.33275%;max-width:58.33275%}.bNerA_cEMu,.bNerA_bque{flex-grow:0;flex-shrink:0}.bNerA_bque{flex-basis:66.666%;max-width:66.666%}.bNerA_fGUH{flex-basis:74.99925%;max-width:74.99925%}.bNerA_fGUH,.bNerA_egmb{flex-grow:0;flex-shrink:0}.bNerA_egmb{flex-basis:83.3325%;max-width:83.3325%}.bNerA_dWZl{flex-basis:91.66575%;flex-grow:0;flex-shrink:0;max-width:91.66575%}.bNerA_fRdd{-webkit-margin-end:0;-webkit-margin-start:8.33325%;margin-inline-end:0;margin-inline-start:8.33325%}[dir=ltr] .bNerA_fRdd{margin-left:8.33325%;margin-right:0}[dir=rtl] .bNerA_fRdd{margin-left:0;margin-right:8.33325%}.bNerA_fSBZ{-webkit-margin-end:0;-webkit-margin-start:16.6665%;margin-inline-end:0;margin-inline-start:16.6665%}[dir=ltr] .bNerA_fSBZ{margin-left:16.6665%;margin-right:0}[dir=rtl] .bNerA_fSBZ{margin-left:0;margin-right:16.6665%}.bNerA_fyjx{-webkit-margin-end:0;-webkit-margin-start:24.99975%;margin-inline-end:0;margin-inline-start:24.99975%}[dir=ltr] .bNerA_fyjx{margin-left:24.99975%;margin-right:0}[dir=rtl] .bNerA_fyjx{margin-left:0;margin-right:24.99975%}.bNerA_fKRr{-webkit-margin-end:0;-webkit-margin-start:33.333%;margin-inline-end:0;margin-inline-start:33.333%}[dir=ltr] .bNerA_fKRr{margin-left:33.333%;margin-right:0}[dir=rtl] .bNerA_fKRr{margin-left:0;margin-right:33.333%}.bNerA_PNRx{-webkit-margin-end:0;-webkit-margin-start:41.66625%;margin-inline-end:0;margin-inline-start:41.66625%}[dir=ltr] .bNerA_PNRx{margin-left:41.66625%;margin-right:0}[dir=rtl] .bNerA_PNRx{margin-left:0;margin-right:41.66625%}.bNerA_eTrk{-webkit-margin-end:0;-webkit-margin-start:49.9995%;margin-inline-end:0;margin-inline-start:49.9995%}[dir=ltr] .bNerA_eTrk{margin-left:49.9995%;margin-right:0}[dir=rtl] .bNerA_eTrk{margin-left:0;margin-right:49.9995%}.bNerA_cYoe{-webkit-margin-end:0;-webkit-margin-start:58.33275%;margin-inline-end:0;margin-inline-start:58.33275%}[dir=ltr] .bNerA_cYoe{margin-left:58.33275%;margin-right:0}[dir=rtl] .bNerA_cYoe{margin-left:0;margin-right:58.33275%}.bNerA_eVWO{-webkit-margin-end:0;-webkit-margin-start:66.666%;margin-inline-end:0;margin-inline-start:66.666%}[dir=ltr] .bNerA_eVWO{margin-left:66.666%;margin-right:0}[dir=rtl] .bNerA_eVWO{margin-left:0;margin-right:66.666%}.bNerA_bUSJ{-webkit-margin-end:0;-webkit-margin-start:74.99925%;margin-inline-end:0;margin-inline-start:74.99925%}[dir=ltr] .bNerA_bUSJ{margin-left:74.99925%;margin-right:0}[dir=rtl] .bNerA_bUSJ{margin-left:0;margin-right:74.99925%}.bNerA_cNJn{-webkit-margin-end:0;-webkit-margin-start:83.3325%;margin-inline-end:0;margin-inline-start:83.3325%}[dir=ltr] .bNerA_cNJn{margin-left:83.3325%;margin-right:0}[dir=rtl] .bNerA_cNJn{margin-left:0;margin-right:83.3325%}.bNerA_STVM{-webkit-margin-end:0;-webkit-margin-start:91.66575%;margin-inline-end:0;margin-inline-start:91.66575%}[dir=ltr] .bNerA_STVM{margin-left:91.66575%;margin-right:0}[dir=rtl] .bNerA_STVM{margin-left:0;margin-right:91.66575%}.bNerA_dRJT{flex:0 0 100%}}\n\n.bNerA_fFVr{outline:0.0625rem dashed red}"
            );
        },
        root: "bNerA_bGBk",
        rowSpacingSmall: "bNerA_buDT",
        rowSpacingMedium: "bNerA_dlWR",
        rowSpacingLarge: "bNerA_cGJD",
        lastRow: "bNerA_DpxJ",
        lastCol: "bNerA_eFno",
        rowSpacingNone: "bNerA_cKZZ",
        startAtSmall: "bNerA_dTOw",
        colSpacingSmall: "bNerA_bBOa",
        colSpacingMedium: "bNerA_yZGt",
        colSpacingLarge: "bNerA_PsGC",
        "vAlign--top": "bNerA_oUBk",
        "vAlign--middle": "bNerA_NmrE",
        "vAlign--bottom": "bNerA_bwwb",
        "textAlign--start": "bNerA_EMjX",
        "textAlign--end": "bNerA_dBtH",
        "textAlign--center": "bNerA_ImeN",
        "textAlign--inherit": "bNerA_qfdC",
        "small--auto": "bNerA_fucb",
        "small--1": "bNerA_Iucl",
        "small--2": "bNerA_ciwJ",
        "small--3": "bNerA_cive",
        "small--4": "bNerA_cXtf",
        "small--5": "bNerA_bJnM",
        "small--6": "bNerA_bZGN",
        "small--7": "bNerA_ckIz",
        "small--8": "bNerA_galf",
        "small--9": "bNerA_ehfr",
        "small--10": "bNerA_fuiF",
        "small--11": "bNerA_cXsq",
        "small-offset--1": "bNerA_cQlq",
        "small-offset--2": "bNerA_cxyz",
        "small-offset--3": "bNerA_eUDU",
        "small-offset--4": "bNerA_eyiG",
        "small-offset--5": "bNerA_dZSU",
        "small-offset--6": "bNerA_ccNL",
        "small-offset--7": "bNerA_epzV",
        "small-offset--8": "bNerA_ewJS",
        "small-offset--9": "bNerA_teYF",
        "small-offset--10": "bNerA_fRJf",
        "small-offset--11": "bNerA_euOY",
        "small--12": "bNerA_Ywqj",
        startAtMedium: "bNerA_crIs",
        "medium--auto": "bNerA_fwxB",
        "medium--1": "bNerA_juaX",
        "medium--2": "bNerA_xoSo",
        "medium--3": "bNerA_dDfd",
        "medium--4": "bNerA_UigQ",
        "medium--5": "bNerA_ewfT",
        "medium--6": "bNerA_fFWL",
        "medium--7": "bNerA_cvYO",
        "medium--8": "bNerA_oLmY",
        "medium--9": "bNerA_cnES",
        "medium--10": "bNerA_dKzK",
        "medium--11": "bNerA_dILx",
        "medium-offset--1": "bNerA_ebYC",
        "medium-offset--2": "bNerA_bTcC",
        "medium-offset--3": "bNerA_bgAW",
        "medium-offset--4": "bNerA_eiwp",
        "medium-offset--5": "bNerA_byfs",
        "medium-offset--6": "bNerA_fQmK",
        "medium-offset--7": "bNerA_cYRh",
        "medium-offset--8": "bNerA_cfgm",
        "medium-offset--9": "bNerA_bWEY",
        "medium-offset--10": "bNerA_ddxz",
        "medium-offset--11": "bNerA_fvqz",
        "medium--12": "bNerA_myaH",
        startAtLarge: "bNerA_cpbQ",
        "large--auto": "bNerA_flKG",
        "large--1": "bNerA_ejgJ",
        "large--2": "bNerA_bkGD",
        "large--3": "bNerA_kyuY",
        "large--4": "bNerA_eIFh",
        "large--5": "bNerA_eeNC",
        "large--6": "bNerA_MKjh",
        "large--7": "bNerA_dNFt",
        "large--8": "bNerA_coSQ",
        "large--9": "bNerA_dREd",
        "large--10": "bNerA_bJLL",
        "large--11": "bNerA_caYM",
        "large-offset--1": "bNerA_dygw",
        "large-offset--2": "bNerA_fmOw",
        "large-offset--3": "bNerA_IaBJ",
        "large-offset--4": "bNerA_btLI",
        "large-offset--5": "bNerA_cWrW",
        "large-offset--6": "bNerA_eLfg",
        "large-offset--7": "bNerA_bsHW",
        "large-offset--8": "bNerA_eWZp",
        "large-offset--9": "bNerA_shqV",
        "large-offset--10": "bNerA_bXjn",
        "large-offset--11": "bNerA_eBxq",
        "large--12": "bNerA_fFaJ",
        startAtXLarge: "bNerA_dsuu",
        "x-large--auto": "bNerA_efaD",
        "x-large--1": "bNerA_bcuT",
        "x-large--2": "bNerA_eKsY",
        "x-large--3": "bNerA_MPOL",
        "x-large--4": "bNerA_biOQ",
        "x-large--5": "bNerA_bbjg",
        "x-large--6": "bNerA_egeo",
        "x-large--7": "bNerA_cEMu",
        "x-large--8": "bNerA_bque",
        "x-large--9": "bNerA_fGUH",
        "x-large--10": "bNerA_egmb",
        "x-large--11": "bNerA_dWZl",
        "x-large-offset--1": "bNerA_fRdd",
        "x-large-offset--2": "bNerA_fSBZ",
        "x-large-offset--3": "bNerA_fyjx",
        "x-large-offset--4": "bNerA_fKRr",
        "x-large-offset--5": "bNerA_PNRx",
        "x-large-offset--6": "bNerA_eTrk",
        "x-large-offset--7": "bNerA_cYoe",
        "x-large-offset--8": "bNerA_eVWO",
        "x-large-offset--9": "bNerA_bUSJ",
        "x-large-offset--10": "bNerA_cNJn",
        "x-large-offset--11": "bNerA_STVM",
        "x-large--12": "bNerA_dRJT",
        visualDebug: "bNerA_fFVr",
      };
      var S = ["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var T =
        ((I = Object(_["j"])(j, y)),
        I(
          (k =
            ((v = O =
              (function (r) {
                Object(l["a"])(i, r);
                var e = Object(g["a"])(i);
                function i() {
                  Object(a["a"])(this, i);
                  return e.apply(this, arguments);
                }
                Object(b["a"])(i, [
                  {
                    key: "startAtClass",
                    value: function () {
                      return (
                        !!this.props.startAt &&
                        "startAt".concat(Object(N["a"])(this.props.startAt))
                      );
                    },
                  },
                  {
                    key: "colSpacingClass",
                    value: function () {
                      return "colSpacing".concat(
                        Object(N["a"])(this.props.colSpacing)
                      );
                    },
                  },
                  {
                    key: "rowSpacingClass",
                    value: function () {
                      return "rowSpacing".concat(
                        Object(N["a"])(this.props.rowSpacing)
                      );
                    },
                  },
                  {
                    key: "breakpointClass",
                    value: function (r) {
                      var e = this.props.width;
                      e && "object" === typeof e && (e = e[r]);
                      if (!e) return;
                      return "".concat(r, "--").concat(e);
                    },
                  },
                  {
                    key: "breakpointOffsetClass",
                    value: function (r) {
                      var e = this.props.offset;
                      e && "object" === typeof e && (e = e[r]);
                      if (!e) return;
                      return "".concat(r, "-offset--").concat(e);
                    },
                  },
                  {
                    key: "enabledBreakpoints",
                    value: function () {
                      var r = ["small", "medium", "large", "x-large", null];
                      return r.slice(r.indexOf(this.props.startAt));
                    },
                  },
                  {
                    key: "breakpointIsEnabled",
                    value: function (r) {
                      return this.enabledBreakpoints().indexOf(r) >= 0;
                    },
                  },
                  {
                    key: "breakpointIsEnabledForWidth",
                    value: function (r) {
                      return !!this.props.width && this.breakpointIsEnabled(r);
                    },
                  },
                  {
                    key: "breakpointIsEnabledForOffset",
                    value: function (r) {
                      return !!this.props.offset && this.breakpointIsEnabled(r);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var r;
                      var e = this.props,
                        t = e.children,
                        a = e.visualDebug;
                      var b =
                        ((r = {}),
                        Object(n["a"])(r, y.root, true),
                        Object(n["a"])(
                          r,
                          y[this.startAtClass()],
                          !!this.props.startAt
                        ),
                        Object(n["a"])(
                          r,
                          y["vAlign--".concat(this.props.vAlign)],
                          true
                        ),
                        Object(n["a"])(
                          r,
                          y["textAlign--".concat(this.props.textAlign)],
                          true
                        ),
                        Object(n["a"])(r, y[this.colSpacingClass()], true),
                        Object(n["a"])(r, y[this.rowSpacingClass()], true),
                        Object(n["a"])(r, y.lastRow, this.props.isLastRow),
                        Object(n["a"])(r, y.lastCol, this.props.isLastCol),
                        Object(n["a"])(
                          r,
                          y[this.breakpointClass("small")],
                          this.breakpointIsEnabledForWidth("small")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointClass("medium")],
                          this.breakpointIsEnabledForWidth("medium")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointClass("large")],
                          this.breakpointIsEnabledForWidth("large")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointClass("x-large")],
                          this.breakpointIsEnabledForWidth("x-large")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointOffsetClass("small")],
                          this.breakpointIsEnabledForOffset("small")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointOffsetClass("medium")],
                          this.breakpointIsEnabledForOffset("medium")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointOffsetClass("large")],
                          this.breakpointIsEnabledForOffset("large")
                        ),
                        Object(n["a"])(
                          r,
                          y[this.breakpointOffsetClass("x-large")],
                          this.breakpointIsEnabledForOffset("x-large")
                        ),
                        Object(n["a"])(r, y.visualDebug, a),
                        r);
                      var l = Object(u["a"])(this.props, i.propTypes);
                      return c.a.createElement(
                        "span",
                        Object.assign({}, l, {
                          ref: this.props.elementRef,
                          className: o()(b),
                        }),
                        t
                      );
                    },
                  },
                ]);
                i.displayName = "GridCol";
                return i;
              })(s["Component"])),
            (O.propTypes = {
              children: m.a.node,
              colSpacing: m.a.oneOf(["none", "small", "medium", "large"]),
              rowSpacing: m.a.oneOf(["none", "small", "medium", "large"]),
              textAlign: m.a.oneOf(["start", "end", "center", "inherit"]),
              hAlign: m.a.oneOf([
                "start",
                "center",
                "end",
                "space-around",
                "space-between",
              ]),
              vAlign: m.a.oneOf(["top", "middle", "bottom"]),
              startAt: m.a.oneOf(["small", "medium", "large", "x-large", null]),
              visualDebug: m.a.bool,
              width: m.a.oneOfType([
                m.a.oneOf(S),
                m.a.shape({
                  small: m.a.oneOf(S),
                  medium: m.a.oneOf(S),
                  large: m.a.oneOf(S),
                  xLarge: m.a.oneOf(S),
                }),
              ]),
              offset: m.a.oneOfType([
                m.a.oneOf(S),
                m.a.shape({
                  small: m.a.oneOf(S),
                  medium: m.a.oneOf(S),
                  large: m.a.oneOf(S),
                  xLarge: m.a.oneOf(S),
                }),
              ]),
              isLastRow: m.a.bool,
              isLastCol: m.a.bool,
              elementRef: m.a.func,
            }),
            (O.defaultProps = {
              textAlign: "inherit",
              children: null,
              isLastCol: false,
              isLastRow: false,
              elementRef: void 0,
            }),
            v))
        ) || k);
      var Q = function (r) {
        var e = r.spacing,
          i = r.media;
        return Object(t["a"])(
          {
            spacingSmall: e.small,
            spacingMedium: e.medium,
            spacingLarge: e.large,
          },
          i
        );
      };
      var C, L, M, E;
      var B = {
        componentId: "fxIji",
        template: function (r) {
          return "\n\n.fxIji_bGBk{box-sizing:border-box;display:block}\n\n.fxIji_dTOw{display:flex;flex-flow:row nowrap}\n\n.fxIji_dTOw.fxIji_lvrA{justify-content:center}\n\n.fxIji_dTOw.fxIji_bWOh{justify-content:flex-start}\n\n.fxIji_dTOw.fxIji_fNQE{justify-content:flex-end}\n\n.fxIji_dTOw.fxIji_dWwe{justify-content:space-around}\n\n.fxIji_dTOw.fxIji_bPaV{justify-content:space-between}\n\n.fxIji_dTOw.fxIji_oUBk{align-items:flex-start}\n\n.fxIji_dTOw.fxIji_NmrE{align-items:center}\n\n.fxIji_dTOw.fxIji_bwwb{align-items:flex-end}\n\n.fxIji_dTOw.fxIji_bBOa{margin:0 calc(-1*"
            .concat(
              r.spacingSmall || "inherit",
              "/2)}\n\n.fxIji_dTOw.fxIji_yZGt{margin:0 calc(-1*"
            )
            .concat(
              r.spacingMedium || "inherit",
              "/2)}\n\n.fxIji_dTOw.fxIji_PsGC{margin:0 calc(-1*"
            )
            .concat(
              r.spacingLarge || "inherit",
              "/2)}\n\n.fxIji_dTOw.fxIji_buDT{margin-bottom:"
            )
            .concat(
              r.spacingSmall || "inherit",
              "}\n\n.fxIji_dTOw.fxIji_dlWR{margin-bottom:"
            )
            .concat(
              r.spacingMedium || "inherit",
              "}\n\n.fxIji_dTOw.fxIji_cGJD{margin-bottom:"
            )
            .concat(
              r.spacingLarge || "inherit",
              "}\n\n.fxIji_dTOw.fxIji_DpxJ,.fxIji_dTOw.fxIji_cKZZ{margin-bottom:0}\n\n@media screen and (--mediumMin){.fxIji_crIs{display:flex;flex-flow:row nowrap}.fxIji_crIs.fxIji_lvrA{justify-content:center}.fxIji_crIs.fxIji_bWOh{justify-content:flex-start}.fxIji_crIs.fxIji_fNQE{justify-content:flex-end}.fxIji_crIs.fxIji_dWwe{justify-content:space-around}.fxIji_crIs.fxIji_bPaV{justify-content:space-between}.fxIji_crIs.fxIji_oUBk{align-items:flex-start}.fxIji_crIs.fxIji_NmrE{align-items:center}.fxIji_crIs.fxIji_bwwb{align-items:flex-end}.fxIji_crIs.fxIji_bBOa{margin:0 calc(-1*"
            )
            .concat(
              r.spacingSmall || "inherit",
              "/2)}.fxIji_crIs.fxIji_yZGt{margin:0 calc(-1*"
            )
            .concat(
              r.spacingMedium || "inherit",
              "/2)}.fxIji_crIs.fxIji_PsGC{margin:0 calc(-1*"
            )
            .concat(
              r.spacingLarge || "inherit",
              "/2)}.fxIji_crIs.fxIji_buDT{margin-bottom:"
            )
            .concat(
              r.spacingSmall || "inherit",
              "}.fxIji_crIs.fxIji_dlWR{margin-bottom:"
            )
            .concat(
              r.spacingMedium || "inherit",
              "}.fxIji_crIs.fxIji_cGJD{margin-bottom:"
            )
            .concat(
              r.spacingLarge || "inherit",
              "}.fxIji_crIs.fxIji_DpxJ,.fxIji_crIs.fxIji_cKZZ{margin-bottom:0}}\n\n@media screen and (--largeMin){.fxIji_cpbQ{display:flex;flex-flow:row nowrap}.fxIji_cpbQ.fxIji_lvrA{justify-content:center}.fxIji_cpbQ.fxIji_bWOh{justify-content:flex-start}.fxIji_cpbQ.fxIji_fNQE{justify-content:flex-end}.fxIji_cpbQ.fxIji_dWwe{justify-content:space-around}.fxIji_cpbQ.fxIji_bPaV{justify-content:space-between}.fxIji_cpbQ.fxIji_oUBk{align-items:flex-start}.fxIji_cpbQ.fxIji_NmrE{align-items:center}.fxIji_cpbQ.fxIji_bwwb{align-items:flex-end}.fxIji_cpbQ.fxIji_bBOa{margin:0 calc(-1*"
            )
            .concat(
              r.spacingSmall || "inherit",
              "/2)}.fxIji_cpbQ.fxIji_yZGt{margin:0 calc(-1*"
            )
            .concat(
              r.spacingMedium || "inherit",
              "/2)}.fxIji_cpbQ.fxIji_PsGC{margin:0 calc(-1*"
            )
            .concat(
              r.spacingLarge || "inherit",
              "/2)}.fxIji_cpbQ.fxIji_buDT{margin-bottom:"
            )
            .concat(
              r.spacingSmall || "inherit",
              "}.fxIji_cpbQ.fxIji_dlWR{margin-bottom:"
            )
            .concat(
              r.spacingMedium || "inherit",
              "}.fxIji_cpbQ.fxIji_cGJD{margin-bottom:"
            )
            .concat(
              r.spacingLarge || "inherit",
              "}.fxIji_cpbQ.fxIji_DpxJ,.fxIji_cpbQ.fxIji_cKZZ{margin-bottom:0}}\n\n@media screen and (--xLargeMin){.fxIji_cpbQ{display:flex;flex-flow:row nowrap}.fxIji_cpbQ.fxIji_lvrA{justify-content:center}.fxIji_cpbQ.fxIji_bWOh{justify-content:flex-start}.fxIji_cpbQ.fxIji_fNQE{justify-content:flex-end}.fxIji_cpbQ.fxIji_dWwe{justify-content:space-around}.fxIji_cpbQ.fxIji_bPaV{justify-content:space-between}.fxIji_cpbQ.fxIji_oUBk{align-items:flex-start}.fxIji_cpbQ.fxIji_NmrE{align-items:center}.fxIji_cpbQ.fxIji_bwwb{align-items:flex-end}.fxIji_cpbQ.fxIji_bBOa{margin:0 calc(-1*"
            )
            .concat(
              r.spacingSmall || "inherit",
              "/2)}.fxIji_cpbQ.fxIji_yZGt{margin:0 calc(-1*"
            )
            .concat(
              r.spacingMedium || "inherit",
              "/2)}.fxIji_cpbQ.fxIji_PsGC{margin:0 calc(-1*"
            )
            .concat(
              r.spacingLarge || "inherit",
              "/2)}.fxIji_cpbQ.fxIji_buDT{margin-bottom:"
            )
            .concat(
              r.spacingSmall || "inherit",
              "}.fxIji_cpbQ.fxIji_dlWR{margin-bottom:"
            )
            .concat(
              r.spacingMedium || "inherit",
              "}.fxIji_cpbQ.fxIji_cGJD{margin-bottom:"
            )
            .concat(
              r.spacingLarge || "inherit",
              "}.fxIji_cpbQ.fxIji_DpxJ,.fxIji_cpbQ.fxIji_cKZZ{margin-bottom:0}}\n\n.fxIji_fFVr{outline:0.0625rem dashed #00f}"
            );
        },
        root: "fxIji_bGBk",
        startAtSmall: "fxIji_dTOw",
        "hAlign--center": "fxIji_lvrA",
        "hAlign--start": "fxIji_bWOh",
        "hAlign--end": "fxIji_fNQE",
        "hAlign--space-around": "fxIji_dWwe",
        "hAlign--space-between": "fxIji_bPaV",
        "vAlign--top": "fxIji_oUBk",
        "vAlign--middle": "fxIji_NmrE",
        "vAlign--bottom": "fxIji_bwwb",
        colSpacingSmall: "fxIji_bBOa",
        colSpacingMedium: "fxIji_yZGt",
        colSpacingLarge: "fxIji_PsGC",
        rowSpacingSmall: "fxIji_buDT",
        rowSpacingMedium: "fxIji_dlWR",
        rowSpacingLarge: "fxIji_cGJD",
        lastRow: "fxIji_DpxJ",
        rowSpacingNone: "fxIji_cKZZ",
        startAtMedium: "fxIji_crIs",
        startAtLarge: "fxIji_cpbQ",
        visualDebug: "fxIji_fFVr",
      };
      var G =
        ((C = Object(_["j"])(Q, B)),
        C(
          (L =
            ((E = M =
              (function (r) {
                Object(l["a"])(i, r);
                var e = Object(g["a"])(i);
                function i() {
                  Object(a["a"])(this, i);
                  return e.apply(this, arguments);
                }
                Object(b["a"])(i, [
                  {
                    key: "startAtClass",
                    value: function () {
                      return (
                        !!this.props.startAt &&
                        "startAt".concat(Object(N["a"])(this.props.startAt))
                      );
                    },
                  },
                  {
                    key: "rowSpacingClass",
                    value: function () {
                      return "rowSpacing".concat(
                        Object(N["a"])(this.props.rowSpacing)
                      );
                    },
                  },
                  {
                    key: "colSpacingClass",
                    value: function () {
                      return "colSpacing".concat(
                        Object(N["a"])(this.props.colSpacing)
                      );
                    },
                  },
                  {
                    key: "renderChildren",
                    value: function () {
                      var r = this;
                      var e = this.props,
                        n = e.children,
                        a = Object(w["a"])(e, ["children"]);
                      return s["Children"].map(n, function (e, b) {
                        return Object(x["a"])(e, [T])
                          ? Object(p["a"])(
                              e,
                              Object(t["a"])(
                                {},
                                Object(u["c"])(r.props, i.propTypes),
                                {},
                                e.props,
                                {
                                  isLastRow: a.isLastRow,
                                  isLastCol: b + 1 === s["Children"].count(n),
                                }
                              )
                            )
                          : e;
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var r;
                      var e =
                        ((r = {}),
                        Object(n["a"])(r, B.root, true),
                        Object(n["a"])(r, B.lastRow, this.props.isLastRow),
                        Object(n["a"])(
                          r,
                          B["hAlign--".concat(this.props.hAlign)],
                          true
                        ),
                        Object(n["a"])(
                          r,
                          B["vAlign--".concat(this.props.vAlign)],
                          true
                        ),
                        Object(n["a"])(r, B[this.rowSpacingClass()], true),
                        Object(n["a"])(
                          r,
                          B[this.colSpacingClass()],
                          "none" !== this.props.colSpacing
                        ),
                        Object(n["a"])(
                          r,
                          B[this.startAtClass()],
                          !!this.props.startAt
                        ),
                        r);
                      var t = Object(u["a"])(this.props, i.propTypes);
                      return c.a.createElement(
                        "span",
                        Object.assign({}, t, { className: o()(e) }),
                        this.renderChildren()
                      );
                    },
                  },
                ]);
                i.displayName = "GridRow";
                return i;
              })(s["Component"])),
            (M.propTypes = {
              children: A["a"].oneOf([T, h["a"]]),
              rowSpacing: m.a.oneOf(["none", "small", "medium", "large"]),
              colSpacing: m.a.oneOf(["none", "small", "medium", "large"]),
              hAlign: m.a.oneOf([
                "start",
                "center",
                "end",
                "space-around",
                "space-between",
              ]),
              vAlign: m.a.oneOf(["top", "middle", "bottom"]),
              startAt: m.a.oneOf(["small", "medium", "large", "x-large", null]),
              visualDebug: m.a.bool,
              isLastRow: m.a.bool,
            }),
            (M.defaultProps = { children: null, isLastRow: false }),
            E))
        ) || L);
      var W = function (r) {
        var e = r.spacing,
          i = r.media,
          n = r.breakpoints;
        return Object(t["a"])(
          {
            spacingSmall: e.small,
            spacingMedium: e.medium,
            spacingLarge: e.large,
            maxWidth: n.maxWidth,
          },
          i
        );
      };
      var J, R, D, q;
      var Z = {
        componentId: "cMIPy",
        template: function (r) {
          return "\n\n.cMIPy_bGBk{display:block}\n\n.cMIPy_fFVr{outline:0.0625rem dashed red}\n\n.cMIPy_dTOw{box-sizing:border-box}\n\n@media screen and (--mediumMin){.cMIPy_crIs{box-sizing:border-box}}\n\n@media screen and (--largeMin){.cMIPy_cpbQ{box-sizing:border-box}}\n\n@media screen and (--xLargeMin){.cMIPy_dsuu{box-sizing:border-box}}";
        },
        root: "cMIPy_bGBk",
        visualDebug: "cMIPy_fFVr",
        startAtSmall: "cMIPy_dTOw",
        startAtMedium: "cMIPy_crIs",
        startAtLarge: "cMIPy_cpbQ",
        startAtXLarge: "cMIPy_dsuu",
      };
      var Y =
        ((J = Object(_["j"])(W, Z)),
        J(
          (R =
            ((q = D =
              (function (r) {
                Object(l["a"])(i, r);
                var e = Object(g["a"])(i);
                function i() {
                  Object(a["a"])(this, i);
                  return e.apply(this, arguments);
                }
                Object(b["a"])(i, [
                  {
                    key: "startAtClass",
                    value: function () {
                      return (
                        !!this.props.startAt &&
                        "startAt".concat(Object(N["a"])(this.props.startAt))
                      );
                    },
                  },
                  {
                    key: "renderChildren",
                    value: function () {
                      var r = this;
                      var e = s["Children"].toArray(this.props.children);
                      return e.map(function (n, a) {
                        return Object(x["a"])(n, [G])
                          ? Object(p["a"])(
                              n,
                              Object(t["a"])(
                                {},
                                Object(u["c"])(r.props, i.propTypes),
                                {},
                                n.props,
                                { isLastRow: a + 1 === e.length }
                              )
                            )
                          : n;
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var r;
                      var e =
                        ((r = {}),
                        Object(n["a"])(r, Z.root, true),
                        Object(n["a"])(
                          r,
                          Z[this.startAtClass()],
                          !!this.props.startAt
                        ),
                        Object(n["a"])(
                          r,
                          Z.visualDebug,
                          this.props.visualDebug
                        ),
                        r);
                      var t = Object(u["a"])(this.props, i.propTypes);
                      return c.a.createElement(
                        "span",
                        Object.assign({}, t, { className: o()(e) }),
                        this.renderChildren()
                      );
                    },
                  },
                ]);
                i.displayName = "Grid";
                return i;
              })(s["Component"])),
            (D.propTypes = {
              children: A["a"].oneOf([G, h["a"]]),
              colSpacing: m.a.oneOf(["none", "small", "medium", "large"]),
              rowSpacing: m.a.oneOf(["none", "small", "medium", "large"]),
              hAlign: m.a.oneOf([
                "start",
                "center",
                "end",
                "space-around",
                "space-between",
              ]),
              vAlign: m.a.oneOf(["top", "middle", "bottom"]),
              startAt: m.a.oneOf(["small", "medium", "large", "x-large", null]),
              visualDebug: m.a.bool,
            }),
            (D.defaultProps = {
              colSpacing: "medium",
              rowSpacing: "medium",
              hAlign: "start",
              startAt: "small",
              vAlign: "top",
              visualDebug: false,
              children: null,
            }),
            (D.Row = G),
            (D.Col = T),
            q))
        ) || R);
    },
  },
]);

//# sourceMappingURL=3-c-bf5d0b5766.js.map

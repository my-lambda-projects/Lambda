(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([
  [1],
  {
    "Xx/m": function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return ne;
      });
      var o = i("Ff2n");
      var n = i("rePB");
      var d = i("VTBJ");
      var r = i("ODXe");
      var c = i("1OyB");
      var b = i("vuIU");
      var u = i("JX7q");
      var a = i("Ji7U");
      var X = i("LK+K");
      var H = i("q1tI");
      var _ = i.n(H);
      var s = i("17x9");
      var y = i.n(s);
      var l = i("oXx0");
      var p = i("J2CL");
      var h = i("nAyT");
      var v = i("tCl5");
      var g = i("jtGx");
      var m = i("C6Zt");
      i("DEX3");
      var f = i("TSYQ");
      var G = i.n(f);
      var k = i("3zPy");
      var S = i.n(k);
      var w = i("KgFQ");
      var z = i("/UXv");
      var B = i("rW8M");
      var E = i("TstA");
      var C = i("n12J");
      var O = i("o4+2");
      var j = i("6RTY");
      var V = "inset 0 0 0.1875rem 0.0625rem";
      var P = "inset 0 0 0 0.0625rem";
      var D = "0.125rem solid";
      var N = function (e, t, i) {
        var o;
        return (
          (o = {}),
          Object(n["a"])(o, "".concat(e, "Background"), t),
          Object(n["a"])(o, "".concat(e, "BorderColor"), Object(O["a"])(t, 10)),
          Object(n["a"])(o, "".concat(e, "Color"), i),
          Object(n["a"])(
            o,
            "".concat(e, "HoverBackground"),
            Object(O["a"])(t, 10)
          ),
          Object(n["a"])(
            o,
            "".concat(e, "ActiveBackground"),
            Object(O["a"])(t, 10)
          ),
          Object(n["a"])(
            o,
            "".concat(e, "ActiveBoxShadow"),
            "".concat(V, " ").concat(Object(O["a"])(t, 20, 0.45))
          ),
          o
        );
      };
      function q() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.colors,
          i = void 0 === t ? {} : t,
          o = e.borders,
          n = void 0 === o ? {} : o,
          r = e.forms,
          c = void 0 === r ? {} : r,
          b = e.spacing,
          u = void 0 === b ? {} : b,
          a = e.typography,
          X = void 0 === a ? {} : a;
        return Object(d["a"])(
          {
            borderWidth: n.widthSmall,
            fontFamily: X.fontFamily,
            fontWeight: X.fontWeightNormal,
            textTransform: "none",
            letterSpacing: "normal",
            borderRadius: n.radiusMedium,
            borderStyle: n.style,
            transform: "none",
            hoverTransform: "none",
            smallHeight: c.inputHeightSmall,
            smallPadding: u.xSmall,
            smallFontSize: X.fontSizeSmall,
            mediumHeight: c.inputHeightMedium,
            mediumPadding: u.small,
            mediumFontSize: X.fontSizeMedium,
            largeHeight: c.inputHeightLarge,
            largePadding: u.medium,
            largeFontSize: X.fontSizeLarge,
            focusBorder: "".concat(D, " ").concat(i.borderBrand),
            focusShadow: "none",
            lightBackground: i.backgroundLightest,
            lightBorderColor: Object(O["a"])(i.borderLight, 10),
            lightBorderStyle: n.style,
            lightColor: i.textDarkest,
            lightHoverBackground: Object(O["a"])(i.backgroundLightest, 5),
            lightActiveBackground: i.backgroundLightest,
            lightActiveBoxShadow: ""
              .concat(V, " ")
              .concat(Object(O["a"])(i.borderLightest, 25)),
            ghostBackground: "transparent",
            ghostBorderColor: i.borderBrand,
            ghostBorderStyle: n.style,
            ghostColor: i.textBrand,
            ghostHoverBackground: Object(j["a"])(i.backgroundBrand, 10),
            ghostActiveBackground: "transparent",
            ghostActiveBoxShadow: "inset 0 0 1px 1px ".concat(
              Object(j["a"])(i.borderBrand, 20)
            ),
            ghostInverseBackground: "transparent",
            ghostInverseBorderColor: i.borderLightest,
            ghostInverseBorderStyle: n.style,
            ghostInverseColor: i.textLightest,
            ghostInverseHoverBackground: Object(j["a"])(
              i.backgroundLightest,
              10
            ),
            ghostInverseActiveBackground: "transparent",
            ghostInverseActiveBoxShadow: "inset 0 0 1px 1px ".concat(
              Object(j["a"])(i.borderLightest, 20)
            ),
            linkColor: i.textLink,
            linkBorderColor: "transparent",
            linkFocusBorderColor: "transparent",
            linkHoverColor: Object(O["a"])(i.textLink, 10),
            linkTextDecoration: "none",
            linkInverseColor: i.textLight,
            inverseFocusBorder: "".concat(D, " ").concat(i.borderLightest),
            iconBorderColor: "transparent",
            iconPadding: "0 ".concat(u.xxSmall),
            iconColor: i.textDarkest,
            iconHoverColor: i.textBrand,
            iconActiveColor: Object(O["a"])(i.textDarkest, 10),
            iconFocusBoxShadow: "".concat(P, " ").concat(i.borderBrand),
            iconPlusTextFontSize: "1.25rem",
            iconSizeSmall: "1rem",
            iconSizeMedium: "1.25rem",
            iconSizeLarge: "1.625rem",
            iconPlusTextMargin: u.xSmall,
            iconInverseColor: i.textLightest,
            iconInverseHoverColor: i.textLightest,
            iconInverseFocusBoxShadow: ""
              .concat(P, " ")
              .concat(i.borderLightest),
            fluidWidthLineHeight: X.lineHeightFit,
          },
          N("default", i.backgroundLight, i.textDarkest),
          {},
          N("primary", i.backgroundBrand, i.textLightest),
          {},
          N("success", i.backgroundSuccess, i.textLightest),
          {},
          N("danger", i.backgroundDanger, i.textLightest),
          {},
          N("circleDefault", i.backgroundLight, i.textDarkest),
          {},
          N("circlePrimary", i.backgroundBrand, i.textLightest),
          {},
          N("circleDanger", i.backgroundDanger, i.textLightest)
        );
      }
      q["canvas"] = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object(d["a"])(
          {
            focusBorder: "".concat(D, " ").concat(e["ic-brand-primary"]),
            ghostBorderColor: e["ic-brand-button--primary-bgd"],
            ghostColor: e["ic-brand-button--primary-bgd"],
            ghostHoverBackground: Object(j["a"])(
              e["ic-brand-button--primary-bgd"],
              10
            ),
            ghostActiveBoxShadow: "inset 0 0 1px 1px ".concat(
              Object(j["a"])(e["ic-brand-button--primary-bgd"], 20)
            ),
            linkColor: e["ic-link-color"],
            linkHoverColor: Object(O["a"])(e["ic-link-color"], 10),
            iconHoverColor: e["ic-brand-primary"],
            iconFocusBoxShadow: "".concat(P, " ").concat(e["ic-brand-primary"]),
          },
          N(
            "primary",
            e["ic-brand-button--primary-bgd"],
            e["ic-brand-button--primary-text"]
          ),
          {},
          N(
            "circlePrimary",
            e["ic-brand-button--primary-bgd"],
            e["ic-brand-button--primary-text"]
          )
        );
      };
      q["canvas-a11y"] = q["canvas-high-contrast"] = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.colors,
          i = void 0 === t ? {} : t;
        return {
          defaultBorderColor: i.borderMedium,
          lightBorderColor: i.borderMedium,
          circleDefaultBorderColor: i.borderMedium,
          linkTextDecoration: "underline",
          linkFocusBorderColor: i.borderBrand,
        };
      };
      var x, T, Y, A, J, W;
      var R = {
        componentId: "eHiXd",
        template: function (e) {
          return "\n\n.eHiXd_bGBk,a.eHiXd_bGBk,button.eHiXd_bGBk,button.eHiXd_bGBk[type=button],button.eHiXd_bGBk[type=reset],button.eHiXd_bGBk[type=submit]{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:none;border-style:"
            .concat(e.borderStyle || "inherit", ";border-width:")
            .concat(
              e.borderWidth || "inherit",
              ";box-sizing:border-box;direction:inherit;display:inline-block;font-family:"
            )
            .concat(e.fontFamily || "inherit", ";font-weight:")
            .concat(e.fontWeight || "inherit", ";height:auto;letter-spacing:")
            .concat(
              e.letterSpacing || "inherit",
              ";margin:0;max-width:100%;overflow:visible;padding:0;position:relative;text-decoration:none;text-transform:"
            )
            .concat(
              e.textTransform || "inherit",
              ";touch-action:manipulation;transform:"
            )
            .concat(
              e.transform || "inherit",
              ";transition:background 0.2s,transform 0.2s;user-select:none;vertical-align:middle;width:auto}\n\n.eHiXd_bGBk::-moz-focus-inner,a.eHiXd_bGBk::-moz-focus-inner,button.eHiXd_bGBk::-moz-focus-inner,button.eHiXd_bGBk[type=button]::-moz-focus-inner,button.eHiXd_bGBk[type=reset]::-moz-focus-inner,button.eHiXd_bGBk[type=submit]::-moz-focus-inner{border:0}\n\n.eHiXd_bGBk.eHiXd_ywdX,a.eHiXd_bGBk.eHiXd_ywdX,button.eHiXd_bGBk.eHiXd_ywdX,button.eHiXd_bGBk[type=button].eHiXd_ywdX,button.eHiXd_bGBk[type=reset].eHiXd_ywdX,button.eHiXd_bGBk[type=submit].eHiXd_ywdX{opacity:0.5;pointer-events:none}\n\n.eHiXd_bGBk:before,a.eHiXd_bGBk:before,button.eHiXd_bGBk:before,button.eHiXd_bGBk[type=button]:before,button.eHiXd_bGBk[type=reset]:before,button.eHiXd_bGBk[type=submit]:before{border:"
            )
            .concat(
              e.focusBorder || "inherit",
              ';bottom:-0.3125rem;box-sizing:border-box;content:"";left:-0.3125rem;opacity:0;pointer-events:none;position:absolute;right:-0.3125rem;top:-0.3125rem;transform:scale(0.9);transition:all 0.2s}\n\n.eHiXd_bGBk:focus,a.eHiXd_bGBk:focus,button.eHiXd_bGBk:focus,button.eHiXd_bGBk[type=button]:focus,button.eHiXd_bGBk[type=reset]:focus,button.eHiXd_bGBk[type=submit]:focus{outline:none}\n\n.eHiXd_bGBk:focus:before,a.eHiXd_bGBk:focus:before,button.eHiXd_bGBk:focus:before,button.eHiXd_bGBk[type=button]:focus:before,button.eHiXd_bGBk[type=reset]:focus:before,button.eHiXd_bGBk[type=submit]:focus:before{opacity:1;transform:scale(1)}\n\n.eHiXd_bGBk:hover,a.eHiXd_bGBk:hover,button.eHiXd_bGBk:hover,button.eHiXd_bGBk[type=button]:hover,button.eHiXd_bGBk[type=reset]:hover,button.eHiXd_bGBk[type=submit]:hover{transform:'
            )
            .concat(
              e.hoverTransform || "inherit",
              "}\n\n.eHiXd_bGBk *,a.eHiXd_bGBk *,button.eHiXd_bGBk *,button.eHiXd_bGBk[type=button] *,button.eHiXd_bGBk[type=reset] *,button.eHiXd_bGBk[type=submit] *{pointer-events:none}\n\n.eHiXd_caGd,a.eHiXd_caGd,button.eHiXd_caGd,button.eHiXd_caGd[type=button],button.eHiXd_caGd[type=reset],button.eHiXd_caGd[type=submit]{box-sizing:border-box}\n\n.eHiXd_cuTS,a.eHiXd_cuTS,button.eHiXd_cuTS,button.eHiXd_cuTS[type=button],button.eHiXd_cuTS[type=reset],button.eHiXd_cuTS[type=submit]{border-radius:"
            )
            .concat(
              e.borderRadius || "inherit",
              "}\n\n.eHiXd_cuTS:before,a.eHiXd_cuTS:before,button.eHiXd_cuTS:before,button.eHiXd_cuTS[type=button]:before,button.eHiXd_cuTS[type=reset]:before,button.eHiXd_cuTS[type=submit]:before{border-radius:calc("
            )
            .concat(
              e.borderRadius || "inherit",
              "*1.5)}\n\n.eHiXd_dEqw,.eHiXd_dEqw:before,a.eHiXd_dEqw,a.eHiXd_dEqw:before,button.eHiXd_dEqw,button.eHiXd_dEqw:before,button.eHiXd_dEqw[type=button],button.eHiXd_dEqw[type=button]:before,button.eHiXd_dEqw[type=reset],button.eHiXd_dEqw[type=reset]:before,button.eHiXd_dEqw[type=submit],button.eHiXd_dEqw[type=submit]:before{border-radius:50%}\n\n.eHiXd_bPzo,a.eHiXd_bPzo,button.eHiXd_bPzo,button.eHiXd_bPzo[type=button],button.eHiXd_bPzo[type=reset],button.eHiXd_bPzo[type=submit]{line-height:1;text-align:center;text-decoration:none}\n\n[dir=ltr] .eHiXd_bPzo,[dir=ltr] a.eHiXd_bPzo,[dir=ltr] button.eHiXd_bPzo,[dir=ltr] button.eHiXd_bPzo[type=button],[dir=ltr] button.eHiXd_bPzo[type=reset],[dir=ltr] button.eHiXd_bPzo[type=submit],[dir=rtl] .eHiXd_bPzo,[dir=rtl] a.eHiXd_bPzo,[dir=rtl] button.eHiXd_bPzo,[dir=rtl] button.eHiXd_bPzo[type=button],[dir=rtl] button.eHiXd_bPzo[type=reset],[dir=rtl] button.eHiXd_bPzo[type=submit]{text-align:center}\n\n.eHiXd_bPzo:active,.eHiXd_bPzo:focus,.eHiXd_bPzo:hover,a.eHiXd_bPzo:active,a.eHiXd_bPzo:focus,a.eHiXd_bPzo:hover,button.eHiXd_bPzo:active,button.eHiXd_bPzo:focus,button.eHiXd_bPzo:hover,button.eHiXd_bPzo[type=button]:active,button.eHiXd_bPzo[type=button]:focus,button.eHiXd_bPzo[type=button]:hover,button.eHiXd_bPzo[type=reset]:active,button.eHiXd_bPzo[type=reset]:focus,button.eHiXd_bPzo[type=reset]:hover,button.eHiXd_bPzo[type=submit]:active,button.eHiXd_bPzo[type=submit]:focus,button.eHiXd_bPzo[type=submit]:hover{text-decoration:none}\n\n.eHiXd_bPzo.eHiXd_doqw,a.eHiXd_bPzo.eHiXd_doqw,button.eHiXd_bPzo.eHiXd_doqw,button.eHiXd_bPzo[type=button].eHiXd_doqw,button.eHiXd_bPzo[type=reset].eHiXd_doqw,button.eHiXd_bPzo[type=submit].eHiXd_doqw{height:"
            )
            .concat(e.smallHeight || "inherit", ";width:")
            .concat(
              e.smallHeight || "inherit",
              "}\n\n.eHiXd_bPzo.eHiXd_doqw:not(.eHiXd_wWyq),a.eHiXd_bPzo.eHiXd_doqw:not(.eHiXd_wWyq),button.eHiXd_bPzo.eHiXd_doqw:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=button].eHiXd_doqw:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=reset].eHiXd_doqw:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=submit].eHiXd_doqw:not(.eHiXd_wWyq){font-size:1rem}\n\n.eHiXd_bPzo.eHiXd_doqw .eHiXd_eoCh,a.eHiXd_bPzo.eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bPzo.eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bPzo[type=button].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bPzo[type=reset].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bPzo[type=submit].eHiXd_doqw .eHiXd_eoCh{font-size:"
            )
            .concat(
              e.iconSizeSmall || "inherit",
              "}\n\n.eHiXd_bPzo.eHiXd_ycrn,a.eHiXd_bPzo.eHiXd_ycrn,button.eHiXd_bPzo.eHiXd_ycrn,button.eHiXd_bPzo[type=button].eHiXd_ycrn,button.eHiXd_bPzo[type=reset].eHiXd_ycrn,button.eHiXd_bPzo[type=submit].eHiXd_ycrn{height:"
            )
            .concat(e.mediumHeight || "inherit", ";width:")
            .concat(
              e.mediumHeight || "inherit",
              "}\n\n.eHiXd_bPzo.eHiXd_ycrn:not(.eHiXd_wWyq),a.eHiXd_bPzo.eHiXd_ycrn:not(.eHiXd_wWyq),button.eHiXd_bPzo.eHiXd_ycrn:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=button].eHiXd_ycrn:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=reset].eHiXd_ycrn:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=submit].eHiXd_ycrn:not(.eHiXd_wWyq){font-size:1.25rem}\n\n.eHiXd_bPzo.eHiXd_ycrn .eHiXd_eoCh,a.eHiXd_bPzo.eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bPzo.eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bPzo[type=button].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bPzo[type=reset].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bPzo[type=submit].eHiXd_ycrn .eHiXd_eoCh{font-size:"
            )
            .concat(
              e.iconSizeMedium || "inherit",
              "}\n\n.eHiXd_bPzo.eHiXd_cMDj,a.eHiXd_bPzo.eHiXd_cMDj,button.eHiXd_bPzo.eHiXd_cMDj,button.eHiXd_bPzo[type=button].eHiXd_cMDj,button.eHiXd_bPzo[type=reset].eHiXd_cMDj,button.eHiXd_bPzo[type=submit].eHiXd_cMDj{height:"
            )
            .concat(e.largeHeight || "inherit", ";width:")
            .concat(
              e.largeHeight || "inherit",
              "}\n\n.eHiXd_bPzo.eHiXd_cMDj:not(.eHiXd_wWyq),a.eHiXd_bPzo.eHiXd_cMDj:not(.eHiXd_wWyq),button.eHiXd_bPzo.eHiXd_cMDj:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=button].eHiXd_cMDj:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=reset].eHiXd_cMDj:not(.eHiXd_wWyq),button.eHiXd_bPzo[type=submit].eHiXd_cMDj:not(.eHiXd_wWyq){font-size:1.75rem}\n\n.eHiXd_bPzo.eHiXd_cMDj .eHiXd_eoCh,a.eHiXd_bPzo.eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bPzo.eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bPzo[type=button].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bPzo[type=reset].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bPzo[type=submit].eHiXd_cMDj .eHiXd_eoCh{font-size:"
            )
            .concat(
              e.iconSizeLarge || "inherit",
              "}\n\n.eHiXd_bPzo .eHiXd_caGd,a.eHiXd_bPzo .eHiXd_caGd,button.eHiXd_bPzo .eHiXd_caGd,button.eHiXd_bPzo[type=button] .eHiXd_caGd,button.eHiXd_bPzo[type=reset] .eHiXd_caGd,button.eHiXd_bPzo[type=submit] .eHiXd_caGd{align-items:center;display:flex;height:100%;justify-content:center}\n\n.eHiXd_bNlk.eHiXd_doqw,.eHiXd_eESV.eHiXd_doqw,a.eHiXd_bNlk.eHiXd_doqw,a.eHiXd_eESV.eHiXd_doqw,button.eHiXd_bNlk.eHiXd_doqw,button.eHiXd_bNlk[type=button].eHiXd_doqw,button.eHiXd_bNlk[type=reset].eHiXd_doqw,button.eHiXd_bNlk[type=submit].eHiXd_doqw,button.eHiXd_eESV.eHiXd_doqw,button.eHiXd_eESV[type=button].eHiXd_doqw,button.eHiXd_eESV[type=reset].eHiXd_doqw,button.eHiXd_eESV[type=submit].eHiXd_doqw{font-size:"
            )
            .concat(e.smallFontSize || "inherit", ";line-height:calc(")
            .concat(e.smallHeight || "inherit", " - ")
            .concat(e.borderWidth || "inherit", "*2);padding-left:")
            .concat(e.smallPadding || "inherit", ";padding-right:")
            .concat(
              e.smallPadding || "inherit",
              "}\n\n.eHiXd_bNlk.eHiXd_doqw .eHiXd_eoCh,.eHiXd_eESV.eHiXd_doqw .eHiXd_eoCh,a.eHiXd_bNlk.eHiXd_doqw .eHiXd_eoCh,a.eHiXd_eESV.eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bNlk.eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bNlk[type=button].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bNlk[type=reset].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_bNlk[type=submit].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_eESV.eHiXd_doqw .eHiXd_eoCh,button.eHiXd_eESV[type=button].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_eESV[type=reset].eHiXd_doqw .eHiXd_eoCh,button.eHiXd_eESV[type=submit].eHiXd_doqw .eHiXd_eoCh{font-size:"
            )
            .concat(
              e.iconSizeSmall || "inherit",
              "}\n\n.eHiXd_bNlk.eHiXd_ycrn,.eHiXd_eESV.eHiXd_ycrn,a.eHiXd_bNlk.eHiXd_ycrn,a.eHiXd_eESV.eHiXd_ycrn,button.eHiXd_bNlk.eHiXd_ycrn,button.eHiXd_bNlk[type=button].eHiXd_ycrn,button.eHiXd_bNlk[type=reset].eHiXd_ycrn,button.eHiXd_bNlk[type=submit].eHiXd_ycrn,button.eHiXd_eESV.eHiXd_ycrn,button.eHiXd_eESV[type=button].eHiXd_ycrn,button.eHiXd_eESV[type=reset].eHiXd_ycrn,button.eHiXd_eESV[type=submit].eHiXd_ycrn{font-size:"
            )
            .concat(e.mediumFontSize || "inherit", ";line-height:calc(")
            .concat(e.mediumHeight || "inherit", " - ")
            .concat(e.borderWidth || "inherit", "*2);padding-left:")
            .concat(e.mediumPadding || "inherit", ";padding-right:")
            .concat(
              e.mediumPadding || "inherit",
              "}\n\n.eHiXd_bNlk.eHiXd_ycrn .eHiXd_eoCh,.eHiXd_eESV.eHiXd_ycrn .eHiXd_eoCh,a.eHiXd_bNlk.eHiXd_ycrn .eHiXd_eoCh,a.eHiXd_eESV.eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bNlk.eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bNlk[type=button].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bNlk[type=reset].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_bNlk[type=submit].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_eESV.eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_eESV[type=button].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_eESV[type=reset].eHiXd_ycrn .eHiXd_eoCh,button.eHiXd_eESV[type=submit].eHiXd_ycrn .eHiXd_eoCh{font-size:"
            )
            .concat(
              e.iconSizeMedium || "inherit",
              "}\n\n.eHiXd_bNlk.eHiXd_cMDj,.eHiXd_eESV.eHiXd_cMDj,a.eHiXd_bNlk.eHiXd_cMDj,a.eHiXd_eESV.eHiXd_cMDj,button.eHiXd_bNlk.eHiXd_cMDj,button.eHiXd_bNlk[type=button].eHiXd_cMDj,button.eHiXd_bNlk[type=reset].eHiXd_cMDj,button.eHiXd_bNlk[type=submit].eHiXd_cMDj,button.eHiXd_eESV.eHiXd_cMDj,button.eHiXd_eESV[type=button].eHiXd_cMDj,button.eHiXd_eESV[type=reset].eHiXd_cMDj,button.eHiXd_eESV[type=submit].eHiXd_cMDj{font-size:"
            )
            .concat(e.largeFontSize || "inherit", ";line-height:calc(")
            .concat(e.largeHeight || "inherit", " - ")
            .concat(e.borderWidth || "inherit", "*2);padding-left:")
            .concat(e.largePadding || "inherit", ";padding-right:")
            .concat(
              e.largePadding || "inherit",
              "}\n\n.eHiXd_bNlk.eHiXd_cMDj .eHiXd_eoCh,.eHiXd_eESV.eHiXd_cMDj .eHiXd_eoCh,a.eHiXd_bNlk.eHiXd_cMDj .eHiXd_eoCh,a.eHiXd_eESV.eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bNlk.eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bNlk[type=button].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bNlk[type=reset].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_bNlk[type=submit].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_eESV.eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_eESV[type=button].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_eESV[type=reset].eHiXd_cMDj .eHiXd_eoCh,button.eHiXd_eESV[type=submit].eHiXd_cMDj .eHiXd_eoCh{font-size:"
            )
            .concat(
              e.iconSizeLarge || "inherit",
              "}\n\n.eHiXd_bNlk .eHiXd_caGd,.eHiXd_eESV .eHiXd_caGd,a.eHiXd_bNlk .eHiXd_caGd,a.eHiXd_eESV .eHiXd_caGd,button.eHiXd_bNlk .eHiXd_caGd,button.eHiXd_bNlk[type=button] .eHiXd_caGd,button.eHiXd_bNlk[type=reset] .eHiXd_caGd,button.eHiXd_bNlk[type=submit] .eHiXd_caGd,button.eHiXd_eESV .eHiXd_caGd,button.eHiXd_eESV[type=button] .eHiXd_caGd,button.eHiXd_eESV[type=reset] .eHiXd_caGd,button.eHiXd_eESV[type=submit] .eHiXd_caGd{display:block}\n\n.eHiXd_bNlk .eHiXd_eoCh,.eHiXd_eESV .eHiXd_eoCh,a.eHiXd_bNlk .eHiXd_eoCh,a.eHiXd_eESV .eHiXd_eoCh,button.eHiXd_bNlk .eHiXd_eoCh,button.eHiXd_bNlk[type=button] .eHiXd_eoCh,button.eHiXd_bNlk[type=reset] .eHiXd_eoCh,button.eHiXd_bNlk[type=submit] .eHiXd_eoCh,button.eHiXd_eESV .eHiXd_eoCh,button.eHiXd_eESV[type=button] .eHiXd_eoCh,button.eHiXd_eESV[type=reset] .eHiXd_eoCh,button.eHiXd_eESV[type=submit] .eHiXd_eoCh{display:inline-block;margin-bottom:0.1875rem;vertical-align:middle}\n\n.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,a.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,a.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_bNlk[type=button]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_bNlk[type=reset]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_bNlk[type=submit]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_eESV[type=button]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_eESV[type=reset]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,button.eHiXd_eESV[type=submit]:not(.eHiXd_wWyq) .eHiXd_caGd>svg{-webkit-margin-end:"
            )
            .concat(
              e.iconPlusTextMargin || "inherit",
              ";-webkit-margin-start:auto;display:inline-block;font-size:"
            )
            .concat(e.iconPlusTextFontSize || "inherit", ";margin-inline-end:")
            .concat(
              e.iconPlusTextMargin || "inherit",
              ";margin-inline-start:auto;transform:translateY(-0.0625rem);vertical-align:middle}\n\n[dir=ltr] .eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] .eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] a.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] a.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_bNlk[type=button]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_bNlk[type=reset]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_bNlk[type=submit]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_eESV[type=button]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_eESV[type=reset]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=ltr] button.eHiXd_eESV[type=submit]:not(.eHiXd_wWyq) .eHiXd_caGd>svg{margin-left:auto;margin-right:"
            )
            .concat(
              e.iconPlusTextMargin || "inherit",
              "}\n\n[dir=rtl] .eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] .eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] a.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] a.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_bNlk:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_bNlk[type=button]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_bNlk[type=reset]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_bNlk[type=submit]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_eESV:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_eESV[type=button]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_eESV[type=reset]:not(.eHiXd_wWyq) .eHiXd_caGd>svg,[dir=rtl] button.eHiXd_eESV[type=submit]:not(.eHiXd_wWyq) .eHiXd_caGd>svg{margin-left:"
            )
            .concat(
              e.iconPlusTextMargin || "inherit",
              ";margin-right:auto}\n\n.eHiXd_bNlk .eHiXd_caGd,a.eHiXd_bNlk .eHiXd_caGd,button.eHiXd_bNlk .eHiXd_caGd,button.eHiXd_bNlk[type=button] .eHiXd_caGd,button.eHiXd_bNlk[type=reset] .eHiXd_caGd,button.eHiXd_bNlk[type=submit] .eHiXd_caGd{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.eHiXd_eESV,a.eHiXd_eESV,button.eHiXd_eESV,button.eHiXd_eESV[type=button],button.eHiXd_eESV[type=reset],button.eHiXd_eESV[type=submit]{display:block;text-align:start;width:100%}\n\n[dir=ltr] .eHiXd_eESV,[dir=ltr] a.eHiXd_eESV,[dir=ltr] button.eHiXd_eESV,[dir=ltr] button.eHiXd_eESV[type=button],[dir=ltr] button.eHiXd_eESV[type=reset],[dir=ltr] button.eHiXd_eESV[type=submit]{text-align:left}\n\n[dir=rtl] .eHiXd_eESV,[dir=rtl] a.eHiXd_eESV,[dir=rtl] button.eHiXd_eESV,[dir=rtl] button.eHiXd_eESV[type=button],[dir=rtl] button.eHiXd_eESV[type=reset],[dir=rtl] button.eHiXd_eESV[type=submit]{text-align:right}\n\n.eHiXd_eESV.eHiXd_doqw .eHiXd_caGd,a.eHiXd_eESV.eHiXd_doqw .eHiXd_caGd,button.eHiXd_eESV.eHiXd_doqw .eHiXd_caGd,button.eHiXd_eESV[type=button].eHiXd_doqw .eHiXd_caGd,button.eHiXd_eESV[type=reset].eHiXd_doqw .eHiXd_caGd,button.eHiXd_eESV[type=submit].eHiXd_doqw .eHiXd_caGd{padding-bottom:0.3125rem;padding-top:0.375rem}\n\n.eHiXd_eESV.eHiXd_ycrn .eHiXd_caGd,a.eHiXd_eESV.eHiXd_ycrn .eHiXd_caGd,button.eHiXd_eESV.eHiXd_ycrn .eHiXd_caGd,button.eHiXd_eESV[type=button].eHiXd_ycrn .eHiXd_caGd,button.eHiXd_eESV[type=reset].eHiXd_ycrn .eHiXd_caGd,button.eHiXd_eESV[type=submit].eHiXd_ycrn .eHiXd_caGd{padding-bottom:0.5625rem;padding-top:0.5625rem}\n\n.eHiXd_eESV.eHiXd_cMDj .eHiXd_caGd,a.eHiXd_eESV.eHiXd_cMDj .eHiXd_caGd,button.eHiXd_eESV.eHiXd_cMDj .eHiXd_caGd,button.eHiXd_eESV[type=button].eHiXd_cMDj .eHiXd_caGd,button.eHiXd_eESV[type=reset].eHiXd_cMDj .eHiXd_caGd,button.eHiXd_eESV[type=submit].eHiXd_cMDj .eHiXd_caGd{padding-bottom:0.6875rem;padding-top:0.6875rem}\n\n.eHiXd_eESV .eHiXd_caGd,a.eHiXd_eESV .eHiXd_caGd,button.eHiXd_eESV .eHiXd_caGd,button.eHiXd_eESV[type=button] .eHiXd_caGd,button.eHiXd_eESV[type=reset] .eHiXd_caGd,button.eHiXd_eESV[type=submit] .eHiXd_caGd{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;line-height:"
            )
            .concat(
              e.fluidWidthLineHeight || "inherit",
              ";word-wrap:break-word}\n\n.eHiXd_ddES,.eHiXd_fnSs,a.eHiXd_ddES,a.eHiXd_fnSs,button.eHiXd_ddES,button.eHiXd_ddES[type=button],button.eHiXd_ddES[type=reset],button.eHiXd_ddES[type=submit],button.eHiXd_fnSs,button.eHiXd_fnSs[type=button],button.eHiXd_fnSs[type=reset],button.eHiXd_fnSs[type=submit]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\n\n.eHiXd_ddES,a.eHiXd_ddES,button.eHiXd_ddES,button.eHiXd_ddES[type=button],button.eHiXd_ddES[type=reset],button.eHiXd_ddES[type=submit]{background:"
            )
            .concat(e.defaultBackground || "inherit", ";border-color:")
            .concat(e.defaultBorderColor || "inherit", ";color:")
            .concat(
              e.defaultColor || "inherit",
              "}\n\n.eHiXd_ddES:active,.eHiXd_ddES:hover,a.eHiXd_ddES:active,a.eHiXd_ddES:hover,button.eHiXd_ddES:active,button.eHiXd_ddES:hover,button.eHiXd_ddES[type=button]:active,button.eHiXd_ddES[type=button]:hover,button.eHiXd_ddES[type=reset]:active,button.eHiXd_ddES[type=reset]:hover,button.eHiXd_ddES[type=submit]:active,button.eHiXd_ddES[type=submit]:hover{background:"
            )
            .concat(
              e.defaultHoverBackground || "inherit",
              "}\n\n.eHiXd_ddES:active,.eHiXd_ddES:focus,.eHiXd_ddES:hover,a.eHiXd_ddES:active,a.eHiXd_ddES:focus,a.eHiXd_ddES:hover,button.eHiXd_ddES:active,button.eHiXd_ddES:focus,button.eHiXd_ddES:hover,button.eHiXd_ddES[type=button]:active,button.eHiXd_ddES[type=button]:focus,button.eHiXd_ddES[type=button]:hover,button.eHiXd_ddES[type=reset]:active,button.eHiXd_ddES[type=reset]:focus,button.eHiXd_ddES[type=reset]:hover,button.eHiXd_ddES[type=submit]:active,button.eHiXd_ddES[type=submit]:focus,button.eHiXd_ddES[type=submit]:hover{color:"
            )
            .concat(
              e.defaultColor || "inherit",
              "}\n\n.eHiXd_ddES:active,a.eHiXd_ddES:active,button.eHiXd_ddES:active,button.eHiXd_ddES[type=button]:active,button.eHiXd_ddES[type=reset]:active,button.eHiXd_ddES[type=submit]:active{background:"
            )
            .concat(e.defaultActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.defaultActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_bXiG,a.eHiXd_bXiG,button.eHiXd_bXiG,button.eHiXd_bXiG[type=button],button.eHiXd_bXiG[type=reset],button.eHiXd_bXiG[type=submit]{background:"
            )
            .concat(e.primaryBackground || "inherit", ";border-color:")
            .concat(e.primaryBorderColor || "inherit", ";color:")
            .concat(
              e.primaryColor || "inherit",
              "}\n\n.eHiXd_bXiG:active,.eHiXd_bXiG:hover,a.eHiXd_bXiG:active,a.eHiXd_bXiG:hover,button.eHiXd_bXiG:active,button.eHiXd_bXiG:hover,button.eHiXd_bXiG[type=button]:active,button.eHiXd_bXiG[type=button]:hover,button.eHiXd_bXiG[type=reset]:active,button.eHiXd_bXiG[type=reset]:hover,button.eHiXd_bXiG[type=submit]:active,button.eHiXd_bXiG[type=submit]:hover{background:"
            )
            .concat(
              e.primaryHoverBackground || "inherit",
              "}\n\n.eHiXd_bXiG:active,.eHiXd_bXiG:focus,.eHiXd_bXiG:hover,a.eHiXd_bXiG:active,a.eHiXd_bXiG:focus,a.eHiXd_bXiG:hover,button.eHiXd_bXiG:active,button.eHiXd_bXiG:focus,button.eHiXd_bXiG:hover,button.eHiXd_bXiG[type=button]:active,button.eHiXd_bXiG[type=button]:focus,button.eHiXd_bXiG[type=button]:hover,button.eHiXd_bXiG[type=reset]:active,button.eHiXd_bXiG[type=reset]:focus,button.eHiXd_bXiG[type=reset]:hover,button.eHiXd_bXiG[type=submit]:active,button.eHiXd_bXiG[type=submit]:focus,button.eHiXd_bXiG[type=submit]:hover{color:"
            )
            .concat(
              e.primaryColor || "inherit",
              "}\n\n.eHiXd_bXiG:active,a.eHiXd_bXiG:active,button.eHiXd_bXiG:active,button.eHiXd_bXiG[type=button]:active,button.eHiXd_bXiG[type=reset]:active,button.eHiXd_bXiG[type=submit]:active{background:"
            )
            .concat(e.primaryActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.primaryActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_cOXX,a.eHiXd_cOXX,button.eHiXd_cOXX,button.eHiXd_cOXX[type=button],button.eHiXd_cOXX[type=reset],button.eHiXd_cOXX[type=submit]{background:"
            )
            .concat(e.successBackground || "inherit", ";border-color:")
            .concat(e.successBorderColor || "inherit", ";color:")
            .concat(
              e.successColor || "inherit",
              "}\n\n.eHiXd_cOXX:active,.eHiXd_cOXX:hover,a.eHiXd_cOXX:active,a.eHiXd_cOXX:hover,button.eHiXd_cOXX:active,button.eHiXd_cOXX:hover,button.eHiXd_cOXX[type=button]:active,button.eHiXd_cOXX[type=button]:hover,button.eHiXd_cOXX[type=reset]:active,button.eHiXd_cOXX[type=reset]:hover,button.eHiXd_cOXX[type=submit]:active,button.eHiXd_cOXX[type=submit]:hover{background:"
            )
            .concat(
              e.successHoverBackground || "inherit",
              "}\n\n.eHiXd_cOXX:active,.eHiXd_cOXX:focus,.eHiXd_cOXX:hover,a.eHiXd_cOXX:active,a.eHiXd_cOXX:focus,a.eHiXd_cOXX:hover,button.eHiXd_cOXX:active,button.eHiXd_cOXX:focus,button.eHiXd_cOXX:hover,button.eHiXd_cOXX[type=button]:active,button.eHiXd_cOXX[type=button]:focus,button.eHiXd_cOXX[type=button]:hover,button.eHiXd_cOXX[type=reset]:active,button.eHiXd_cOXX[type=reset]:focus,button.eHiXd_cOXX[type=reset]:hover,button.eHiXd_cOXX[type=submit]:active,button.eHiXd_cOXX[type=submit]:focus,button.eHiXd_cOXX[type=submit]:hover{color:"
            )
            .concat(
              e.successColor || "inherit",
              "}\n\n.eHiXd_cOXX:active,a.eHiXd_cOXX:active,button.eHiXd_cOXX:active,button.eHiXd_cOXX[type=button]:active,button.eHiXd_cOXX[type=reset]:active,button.eHiXd_cOXX[type=submit]:active{background:"
            )
            .concat(e.successActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.successActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_zGXc,a.eHiXd_zGXc,button.eHiXd_zGXc,button.eHiXd_zGXc[type=button],button.eHiXd_zGXc[type=reset],button.eHiXd_zGXc[type=submit]{background:"
            )
            .concat(e.dangerBackground || "inherit", ";border-color:")
            .concat(e.dangerBorderColor || "inherit", ";color:")
            .concat(
              e.dangerColor || "inherit",
              "}\n\n.eHiXd_zGXc:active,.eHiXd_zGXc:hover,a.eHiXd_zGXc:active,a.eHiXd_zGXc:hover,button.eHiXd_zGXc:active,button.eHiXd_zGXc:hover,button.eHiXd_zGXc[type=button]:active,button.eHiXd_zGXc[type=button]:hover,button.eHiXd_zGXc[type=reset]:active,button.eHiXd_zGXc[type=reset]:hover,button.eHiXd_zGXc[type=submit]:active,button.eHiXd_zGXc[type=submit]:hover{background:"
            )
            .concat(
              e.dangerHoverBackground || "inherit",
              "}\n\n.eHiXd_zGXc:active,.eHiXd_zGXc:focus,.eHiXd_zGXc:hover,a.eHiXd_zGXc:active,a.eHiXd_zGXc:focus,a.eHiXd_zGXc:hover,button.eHiXd_zGXc:active,button.eHiXd_zGXc:focus,button.eHiXd_zGXc:hover,button.eHiXd_zGXc[type=button]:active,button.eHiXd_zGXc[type=button]:focus,button.eHiXd_zGXc[type=button]:hover,button.eHiXd_zGXc[type=reset]:active,button.eHiXd_zGXc[type=reset]:focus,button.eHiXd_zGXc[type=reset]:hover,button.eHiXd_zGXc[type=submit]:active,button.eHiXd_zGXc[type=submit]:focus,button.eHiXd_zGXc[type=submit]:hover{color:"
            )
            .concat(
              e.dangerColor || "inherit",
              "}\n\n.eHiXd_zGXc:active,a.eHiXd_zGXc:active,button.eHiXd_zGXc:active,button.eHiXd_zGXc[type=button]:active,button.eHiXd_zGXc[type=reset]:active,button.eHiXd_zGXc[type=submit]:active{background:"
            )
            .concat(e.dangerActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.dangerActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_eYmo,a.eHiXd_eYmo,button.eHiXd_eYmo,button.eHiXd_eYmo[type=button],button.eHiXd_eYmo[type=reset],button.eHiXd_eYmo[type=submit]{background:"
            )
            .concat(e.lightBackground || "inherit", ";border-color:")
            .concat(e.lightBorderColor || "inherit", ";color:")
            .concat(
              e.lightColor || "inherit",
              "}\n\n.eHiXd_eYmo:active,.eHiXd_eYmo:hover,a.eHiXd_eYmo:active,a.eHiXd_eYmo:hover,button.eHiXd_eYmo:active,button.eHiXd_eYmo:hover,button.eHiXd_eYmo[type=button]:active,button.eHiXd_eYmo[type=button]:hover,button.eHiXd_eYmo[type=reset]:active,button.eHiXd_eYmo[type=reset]:hover,button.eHiXd_eYmo[type=submit]:active,button.eHiXd_eYmo[type=submit]:hover{background:"
            )
            .concat(
              e.lightHoverBackground || "inherit",
              "}\n\n.eHiXd_eYmo:active,.eHiXd_eYmo:focus,.eHiXd_eYmo:hover,a.eHiXd_eYmo:active,a.eHiXd_eYmo:focus,a.eHiXd_eYmo:hover,button.eHiXd_eYmo:active,button.eHiXd_eYmo:focus,button.eHiXd_eYmo:hover,button.eHiXd_eYmo[type=button]:active,button.eHiXd_eYmo[type=button]:focus,button.eHiXd_eYmo[type=button]:hover,button.eHiXd_eYmo[type=reset]:active,button.eHiXd_eYmo[type=reset]:focus,button.eHiXd_eYmo[type=reset]:hover,button.eHiXd_eYmo[type=submit]:active,button.eHiXd_eYmo[type=submit]:focus,button.eHiXd_eYmo[type=submit]:hover{color:"
            )
            .concat(
              e.lightColor || "inherit",
              "}\n\n.eHiXd_eYmo:active,a.eHiXd_eYmo:active,button.eHiXd_eYmo:active,button.eHiXd_eYmo[type=button]:active,button.eHiXd_eYmo[type=reset]:active,button.eHiXd_eYmo[type=submit]:active{background:"
            )
            .concat(e.lightActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.lightActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_fnSs,a.eHiXd_fnSs,button.eHiXd_fnSs,button.eHiXd_fnSs[type=button],button.eHiXd_fnSs[type=reset],button.eHiXd_fnSs[type=submit]{background:"
            )
            .concat(e.ghostBackground || "inherit", ";border-color:")
            .concat(e.ghostBorderColor || "inherit", ";border-style:")
            .concat(e.ghostBorderStyle || "inherit", ";color:")
            .concat(
              e.ghostColor || "inherit",
              "}\n\n.eHiXd_fnSs:active,.eHiXd_fnSs:hover,a.eHiXd_fnSs:active,a.eHiXd_fnSs:hover,button.eHiXd_fnSs:active,button.eHiXd_fnSs:hover,button.eHiXd_fnSs[type=button]:active,button.eHiXd_fnSs[type=button]:hover,button.eHiXd_fnSs[type=reset]:active,button.eHiXd_fnSs[type=reset]:hover,button.eHiXd_fnSs[type=submit]:active,button.eHiXd_fnSs[type=submit]:hover{background:"
            )
            .concat(
              e.ghostHoverBackground || "inherit",
              "}\n\n.eHiXd_fnSs:active,.eHiXd_fnSs:focus,.eHiXd_fnSs:hover,a.eHiXd_fnSs:active,a.eHiXd_fnSs:focus,a.eHiXd_fnSs:hover,button.eHiXd_fnSs:active,button.eHiXd_fnSs:focus,button.eHiXd_fnSs:hover,button.eHiXd_fnSs[type=button]:active,button.eHiXd_fnSs[type=button]:focus,button.eHiXd_fnSs[type=button]:hover,button.eHiXd_fnSs[type=reset]:active,button.eHiXd_fnSs[type=reset]:focus,button.eHiXd_fnSs[type=reset]:hover,button.eHiXd_fnSs[type=submit]:active,button.eHiXd_fnSs[type=submit]:focus,button.eHiXd_fnSs[type=submit]:hover{color:"
            )
            .concat(
              e.ghostColor || "inherit",
              "}\n\n.eHiXd_fnSs:active,a.eHiXd_fnSs:active,button.eHiXd_fnSs:active,button.eHiXd_fnSs[type=button]:active,button.eHiXd_fnSs[type=reset]:active,button.eHiXd_fnSs[type=submit]:active{background:"
            )
            .concat(e.ghostActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.ghostActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_eoGN,a.eHiXd_eoGN,button.eHiXd_eoGN,button.eHiXd_eoGN[type=button],button.eHiXd_eoGN[type=reset],button.eHiXd_eoGN[type=submit]{background:"
            )
            .concat(e.ghostInverseBackground || "inherit", ";border-color:")
            .concat(e.ghostInverseBorderColor || "inherit", ";border-style:")
            .concat(e.ghostInverseBorderStyle || "inherit", ";color:")
            .concat(
              e.ghostInverseColor || "inherit",
              "}\n\n.eHiXd_eoGN:active,.eHiXd_eoGN:hover,a.eHiXd_eoGN:active,a.eHiXd_eoGN:hover,button.eHiXd_eoGN:active,button.eHiXd_eoGN:hover,button.eHiXd_eoGN[type=button]:active,button.eHiXd_eoGN[type=button]:hover,button.eHiXd_eoGN[type=reset]:active,button.eHiXd_eoGN[type=reset]:hover,button.eHiXd_eoGN[type=submit]:active,button.eHiXd_eoGN[type=submit]:hover{background:"
            )
            .concat(
              e.ghostInverseHoverBackground || "inherit",
              "}\n\n.eHiXd_eoGN:active,.eHiXd_eoGN:focus,.eHiXd_eoGN:hover,a.eHiXd_eoGN:active,a.eHiXd_eoGN:focus,a.eHiXd_eoGN:hover,button.eHiXd_eoGN:active,button.eHiXd_eoGN:focus,button.eHiXd_eoGN:hover,button.eHiXd_eoGN[type=button]:active,button.eHiXd_eoGN[type=button]:focus,button.eHiXd_eoGN[type=button]:hover,button.eHiXd_eoGN[type=reset]:active,button.eHiXd_eoGN[type=reset]:focus,button.eHiXd_eoGN[type=reset]:hover,button.eHiXd_eoGN[type=submit]:active,button.eHiXd_eoGN[type=submit]:focus,button.eHiXd_eoGN[type=submit]:hover{color:"
            )
            .concat(
              e.ghostInverseColor || "inherit",
              "}\n\n.eHiXd_eoGN:focus:before,a.eHiXd_eoGN:focus:before,button.eHiXd_eoGN:focus:before,button.eHiXd_eoGN[type=button]:focus:before,button.eHiXd_eoGN[type=reset]:focus:before,button.eHiXd_eoGN[type=submit]:focus:before{border:"
            )
            .concat(
              e.inverseFocusBorder || "inherit",
              "}\n\n.eHiXd_eoGN:active,a.eHiXd_eoGN:active,button.eHiXd_eoGN:active,button.eHiXd_eoGN[type=button]:active,button.eHiXd_eoGN[type=reset]:active,button.eHiXd_eoGN[type=submit]:active{background:"
            )
            .concat(e.ghostActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.ghostInverseActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_brAJ,.eHiXd_eTYR,a.eHiXd_brAJ,a.eHiXd_eTYR,button.eHiXd_brAJ,button.eHiXd_eTYR,button.eHiXd_eTYR[type=button],button.eHiXd_eTYR[type=reset],button.eHiXd_eTYR[type=submit],button.eHiXd_brAJ[type=button],button.eHiXd_brAJ[type=reset],button.eHiXd_brAJ[type=submit]{-webkit-text-decoration:"
            )
            .concat(
              e.linkTextDecoration || "inherit",
              ";background:transparent;border-color:"
            )
            .concat(e.linkBorderColor || "inherit", ";text-decoration:")
            .concat(
              e.linkTextDecoration || "inherit",
              "}\n\n.eHiXd_brAJ,a.eHiXd_brAJ,button.eHiXd_brAJ,button.eHiXd_brAJ[type=button],button.eHiXd_brAJ[type=reset],button.eHiXd_brAJ[type=submit]{color:"
            )
            .concat(
              e.linkColor || "inherit",
              "}\n\n.eHiXd_brAJ:active,.eHiXd_brAJ:focus,.eHiXd_brAJ:hover,a.eHiXd_brAJ:active,a.eHiXd_brAJ:focus,a.eHiXd_brAJ:hover,button.eHiXd_brAJ:active,button.eHiXd_brAJ:focus,button.eHiXd_brAJ:hover,button.eHiXd_brAJ[type=button]:active,button.eHiXd_brAJ[type=button]:focus,button.eHiXd_brAJ[type=button]:hover,button.eHiXd_brAJ[type=reset]:active,button.eHiXd_brAJ[type=reset]:focus,button.eHiXd_brAJ[type=reset]:hover,button.eHiXd_brAJ[type=submit]:active,button.eHiXd_brAJ[type=submit]:focus,button.eHiXd_brAJ[type=submit]:hover{color:"
            )
            .concat(
              e.linkHoverColor || "inherit",
              "}\n\n.eHiXd_brAJ:hover,a.eHiXd_brAJ:hover,button.eHiXd_brAJ:hover,button.eHiXd_brAJ[type=button]:hover,button.eHiXd_brAJ[type=reset]:hover,button.eHiXd_brAJ[type=submit]:hover{text-decoration:underline}\n\n.eHiXd_eTYR,.eHiXd_eTYR:active,.eHiXd_eTYR:focus,.eHiXd_eTYR:hover,a.eHiXd_eTYR,a.eHiXd_eTYR:active,a.eHiXd_eTYR:focus,a.eHiXd_eTYR:hover,button.eHiXd_eTYR,button.eHiXd_eTYR:active,button.eHiXd_eTYR:focus,button.eHiXd_eTYR:hover,button.eHiXd_eTYR[type=button],button.eHiXd_eTYR[type=button]:active,button.eHiXd_eTYR[type=button]:focus,button.eHiXd_eTYR[type=button]:hover,button.eHiXd_eTYR[type=reset],button.eHiXd_eTYR[type=reset]:active,button.eHiXd_eTYR[type=reset]:focus,button.eHiXd_eTYR[type=reset]:hover,button.eHiXd_eTYR[type=submit],button.eHiXd_eTYR[type=submit]:active,button.eHiXd_eTYR[type=submit]:focus,button.eHiXd_eTYR[type=submit]:hover{color:"
            )
            .concat(
              e.linkInverseColor || "inherit",
              "}\n\n.eHiXd_eTYR:hover,a.eHiXd_eTYR:hover,button.eHiXd_eTYR:hover,button.eHiXd_eTYR[type=button]:hover,button.eHiXd_eTYR[type=reset]:hover,button.eHiXd_eTYR[type=submit]:hover{text-decoration:underline}\n\n.eHiXd_eTYR:focus:before,a.eHiXd_eTYR:focus:before,button.eHiXd_eTYR:focus:before,button.eHiXd_eTYR[type=button]:focus:before,button.eHiXd_eTYR[type=reset]:focus:before,button.eHiXd_eTYR[type=submit]:focus:before{border:"
            )
            .concat(
              e.inverseFocusBorder || "inherit",
              "}\n\n.eHiXd_bVwc,a.eHiXd_bVwc,button.eHiXd_bVwc,button.eHiXd_bVwc[type=button],button.eHiXd_bVwc[type=reset],button.eHiXd_bVwc[type=submit]{background:"
            )
            .concat(e.circleDefaultBackground || "inherit", ";border-color:")
            .concat(e.circleDefaultBorderColor || "inherit", ";color:")
            .concat(
              e.circleDefaultColor || "inherit",
              "}\n\n.eHiXd_bVwc:active,.eHiXd_bVwc:hover,a.eHiXd_bVwc:active,a.eHiXd_bVwc:hover,button.eHiXd_bVwc:active,button.eHiXd_bVwc:hover,button.eHiXd_bVwc[type=button]:active,button.eHiXd_bVwc[type=button]:hover,button.eHiXd_bVwc[type=reset]:active,button.eHiXd_bVwc[type=reset]:hover,button.eHiXd_bVwc[type=submit]:active,button.eHiXd_bVwc[type=submit]:hover{background:"
            )
            .concat(
              e.circleDefaultHoverBackground || "inherit",
              "}\n\n.eHiXd_bVwc:active,.eHiXd_bVwc:focus,.eHiXd_bVwc:hover,a.eHiXd_bVwc:active,a.eHiXd_bVwc:focus,a.eHiXd_bVwc:hover,button.eHiXd_bVwc:active,button.eHiXd_bVwc:focus,button.eHiXd_bVwc:hover,button.eHiXd_bVwc[type=button]:active,button.eHiXd_bVwc[type=button]:focus,button.eHiXd_bVwc[type=button]:hover,button.eHiXd_bVwc[type=reset]:active,button.eHiXd_bVwc[type=reset]:focus,button.eHiXd_bVwc[type=reset]:hover,button.eHiXd_bVwc[type=submit]:active,button.eHiXd_bVwc[type=submit]:focus,button.eHiXd_bVwc[type=submit]:hover{color:"
            )
            .concat(
              e.circleDefaultColor || "inherit",
              "}\n\n.eHiXd_bVwc:active,a.eHiXd_bVwc:active,button.eHiXd_bVwc:active,button.eHiXd_bVwc[type=button]:active,button.eHiXd_bVwc[type=reset]:active,button.eHiXd_bVwc[type=submit]:active{background:"
            )
            .concat(
              e.circleDefaultActiveBackground || "inherit",
              ";box-shadow:"
            )
            .concat(
              e.circleDefaultActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_HJDj,a.eHiXd_HJDj,button.eHiXd_HJDj,button.eHiXd_HJDj[type=button],button.eHiXd_HJDj[type=reset],button.eHiXd_HJDj[type=submit]{background:"
            )
            .concat(e.circlePrimaryBackground || "inherit", ";border-color:")
            .concat(e.circlePrimaryBorderColor || "inherit", ";color:")
            .concat(
              e.circlePrimaryColor || "inherit",
              "}\n\n.eHiXd_HJDj:active,.eHiXd_HJDj:hover,a.eHiXd_HJDj:active,a.eHiXd_HJDj:hover,button.eHiXd_HJDj:active,button.eHiXd_HJDj:hover,button.eHiXd_HJDj[type=button]:active,button.eHiXd_HJDj[type=button]:hover,button.eHiXd_HJDj[type=reset]:active,button.eHiXd_HJDj[type=reset]:hover,button.eHiXd_HJDj[type=submit]:active,button.eHiXd_HJDj[type=submit]:hover{background:"
            )
            .concat(
              e.circlePrimaryHoverBackground || "inherit",
              "}\n\n.eHiXd_HJDj:active,.eHiXd_HJDj:focus,.eHiXd_HJDj:hover,a.eHiXd_HJDj:active,a.eHiXd_HJDj:focus,a.eHiXd_HJDj:hover,button.eHiXd_HJDj:active,button.eHiXd_HJDj:focus,button.eHiXd_HJDj:hover,button.eHiXd_HJDj[type=button]:active,button.eHiXd_HJDj[type=button]:focus,button.eHiXd_HJDj[type=button]:hover,button.eHiXd_HJDj[type=reset]:active,button.eHiXd_HJDj[type=reset]:focus,button.eHiXd_HJDj[type=reset]:hover,button.eHiXd_HJDj[type=submit]:active,button.eHiXd_HJDj[type=submit]:focus,button.eHiXd_HJDj[type=submit]:hover{color:"
            )
            .concat(
              e.circlePrimaryColor || "inherit",
              "}\n\n.eHiXd_HJDj:active,a.eHiXd_HJDj:active,button.eHiXd_HJDj:active,button.eHiXd_HJDj[type=button]:active,button.eHiXd_HJDj[type=reset]:active,button.eHiXd_HJDj[type=submit]:active{background:"
            )
            .concat(
              e.circlePrimaryActiveBackground || "inherit",
              ";box-shadow:"
            )
            .concat(
              e.circlePrimaryActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_bKGu,a.eHiXd_bKGu,button.eHiXd_bKGu,button.eHiXd_bKGu[type=button],button.eHiXd_bKGu[type=reset],button.eHiXd_bKGu[type=submit]{background:"
            )
            .concat(e.circleDangerBackground || "inherit", ";border-color:")
            .concat(e.circleDangerBorderColor || "inherit", ";color:")
            .concat(
              e.circleDangerColor || "inherit",
              "}\n\n.eHiXd_bKGu:active,.eHiXd_bKGu:hover,a.eHiXd_bKGu:active,a.eHiXd_bKGu:hover,button.eHiXd_bKGu:active,button.eHiXd_bKGu:hover,button.eHiXd_bKGu[type=button]:active,button.eHiXd_bKGu[type=button]:hover,button.eHiXd_bKGu[type=reset]:active,button.eHiXd_bKGu[type=reset]:hover,button.eHiXd_bKGu[type=submit]:active,button.eHiXd_bKGu[type=submit]:hover{background:"
            )
            .concat(
              e.circleDangerHoverBackground || "inherit",
              "}\n\n.eHiXd_bKGu:active,.eHiXd_bKGu:focus,.eHiXd_bKGu:hover,a.eHiXd_bKGu:active,a.eHiXd_bKGu:focus,a.eHiXd_bKGu:hover,button.eHiXd_bKGu:active,button.eHiXd_bKGu:focus,button.eHiXd_bKGu:hover,button.eHiXd_bKGu[type=button]:active,button.eHiXd_bKGu[type=button]:focus,button.eHiXd_bKGu[type=button]:hover,button.eHiXd_bKGu[type=reset]:active,button.eHiXd_bKGu[type=reset]:focus,button.eHiXd_bKGu[type=reset]:hover,button.eHiXd_bKGu[type=submit]:active,button.eHiXd_bKGu[type=submit]:focus,button.eHiXd_bKGu[type=submit]:hover{color:"
            )
            .concat(
              e.circleDangerColor || "inherit",
              "}\n\n.eHiXd_bKGu:active,a.eHiXd_bKGu:active,button.eHiXd_bKGu:active,button.eHiXd_bKGu[type=button]:active,button.eHiXd_bKGu[type=reset]:active,button.eHiXd_bKGu[type=submit]:active{background:"
            )
            .concat(e.circleDangerActiveBackground || "inherit", ";box-shadow:")
            .concat(
              e.circleDangerActiveBoxShadow || "inherit",
              "}\n\n.eHiXd_dnnz,.eHiXd_ccgO,a.eHiXd_dnnz,a.eHiXd_ccgO,button.eHiXd_dnnz,button.eHiXd_ccgO,button.eHiXd_ccgO[type=button],button.eHiXd_ccgO[type=reset],button.eHiXd_ccgO[type=submit],button.eHiXd_dnnz[type=button],button.eHiXd_dnnz[type=reset],button.eHiXd_dnnz[type=submit]{border-color:"
            )
            .concat(
              e.iconBorderColor || "inherit",
              "}\n\n.eHiXd_ccgO,a.eHiXd_ccgO,button.eHiXd_ccgO,button.eHiXd_ccgO[type=button],button.eHiXd_ccgO[type=reset],button.eHiXd_ccgO[type=submit]{color:"
            )
            .concat(
              e.iconInverseColor || "inherit",
              "}\n\n.eHiXd_ccgO:focus,a.eHiXd_ccgO:focus,button.eHiXd_ccgO:focus,button.eHiXd_ccgO[type=button]:focus,button.eHiXd_ccgO[type=reset]:focus,button.eHiXd_ccgO[type=submit]:focus{color:"
            )
            .concat(
              e.iconInverseHoverColor || "inherit",
              "}\n\n.eHiXd_ccgO:focus:before,a.eHiXd_ccgO:focus:before,button.eHiXd_ccgO:focus:before,button.eHiXd_ccgO[type=button]:focus:before,button.eHiXd_ccgO[type=reset]:focus:before,button.eHiXd_ccgO[type=submit]:focus:before{border-color:"
            )
            .concat(
              e.ghostInverseBorderColor || "inherit",
              "}\n\n.eHiXd_ccgO:active,.eHiXd_ccgO:hover,a.eHiXd_ccgO:active,a.eHiXd_ccgO:hover,button.eHiXd_ccgO:active,button.eHiXd_ccgO:hover,button.eHiXd_ccgO[type=button]:active,button.eHiXd_ccgO[type=button]:hover,button.eHiXd_ccgO[type=reset]:active,button.eHiXd_ccgO[type=reset]:hover,button.eHiXd_ccgO[type=submit]:active,button.eHiXd_ccgO[type=submit]:hover{color:"
            )
            .concat(
              e.iconInverseHoverColor || "inherit",
              "}\n\n.eHiXd_dnnz,a.eHiXd_dnnz,button.eHiXd_dnnz,button.eHiXd_dnnz[type=button],button.eHiXd_dnnz[type=reset],button.eHiXd_dnnz[type=submit]{color:"
            )
            .concat(
              e.iconColor || "inherit",
              "}\n\n.eHiXd_dnnz:focus,.eHiXd_dnnz:hover,a.eHiXd_dnnz:focus,a.eHiXd_dnnz:hover,button.eHiXd_dnnz:focus,button.eHiXd_dnnz:hover,button.eHiXd_dnnz[type=button]:focus,button.eHiXd_dnnz[type=button]:hover,button.eHiXd_dnnz[type=reset]:focus,button.eHiXd_dnnz[type=reset]:hover,button.eHiXd_dnnz[type=submit]:focus,button.eHiXd_dnnz[type=submit]:hover{color:"
            )
            .concat(
              e.iconHoverColor || "inherit",
              "}\n\n.eHiXd_dnnz:active,a.eHiXd_dnnz:active,button.eHiXd_dnnz:active,button.eHiXd_dnnz[type=button]:active,button.eHiXd_dnnz[type=reset]:active,button.eHiXd_dnnz[type=submit]:active{color:"
            )
            .concat(
              e.iconActiveColor || "inherit",
              "}\n\n.eHiXd_eoCh>svg,a.eHiXd_eoCh>svg,button.eHiXd_eoCh>svg{display:block}"
            );
        },
        root: "eHiXd_bGBk",
        disabled: "eHiXd_ywdX",
        content: "eHiXd_caGd",
        "borderRadius--rounded": "eHiXd_cuTS",
        "borderRadius--circle": "eHiXd_dEqw",
        "width--icon": "eHiXd_bPzo",
        small: "eHiXd_doqw",
        "has-icon": "eHiXd_wWyq",
        iconSVG: "eHiXd_eoCh",
        medium: "eHiXd_ycrn",
        large: "eHiXd_cMDj",
        "width--auto": "eHiXd_bNlk",
        "width--fluid": "eHiXd_eESV",
        default: "eHiXd_ddES",
        ghost: "eHiXd_fnSs",
        primary: "eHiXd_bXiG",
        success: "eHiXd_cOXX",
        danger: "eHiXd_zGXc",
        light: "eHiXd_eYmo",
        "ghost-inverse": "eHiXd_eoGN",
        link: "eHiXd_brAJ",
        "link-inverse": "eHiXd_eTYR",
        "circle-default": "eHiXd_bVwc",
        "circle-primary": "eHiXd_HJDj",
        "circle-danger": "eHiXd_bKGu",
        icon: "eHiXd_dnnz",
        "icon-inverse": "eHiXd_ccgO",
      };
      var M = ["circle-primary", "circle-danger", "circle-default"];
      var K = [
        "circle-default",
        "circle-primary",
        "circle-danger",
        "icon",
        "icon-inverse",
      ];
      var I =
        ((x = Object(h["a"])(
          "8.0.0",
          null,
          "Use Button from ui-buttons instead. See the upgrade guide for detailed instructions on updating https://instructure.design/#button-upgrade-guide"
        )),
        (T = Object(l["a"])()),
        (Y = Object(p["j"])(q, R)),
        x(
          (A =
            T(
              (A =
                Y(
                  (A =
                    ((W = J =
                      (function (e) {
                        Object(a["a"])(i, e);
                        var t = Object(X["a"])(i);
                        function i() {
                          var e;
                          Object(c["a"])(this, i);
                          for (
                            var o = arguments.length, n = new Array(o), d = 0;
                            d < o;
                            d++
                          )
                            n[d] = arguments[d];
                          e = t.call.apply(t, [this].concat(n));
                          e.handleClick = function (t) {
                            var i = e.props,
                              o = i.disabled,
                              n = i.readOnly,
                              d = i.onClick;
                            if (o || n) {
                              t.preventDefault();
                              t.stopPropagation();
                            } else "function" === typeof d && d(t);
                          };
                          e.handleKeyDown = function (t) {
                            var i = e.props,
                              o = i.disabled,
                              n = i.readOnly,
                              d = i.onClick,
                              r = i.href;
                            if (
                              "button" !== e.elementType &&
                              (t.keyCode === S.a.codes.space ||
                                t.keyCode === S.a.codes.enter)
                            ) {
                              t.preventDefault();
                              t.stopPropagation();
                              "function" !== typeof d || o || n || d(t);
                              r && e._button && e._button.click();
                            }
                          };
                          return e;
                        }
                        Object(b["a"])(i, [
                          {
                            key: "focus",
                            value: function () {
                              this._button && this._button.focus();
                            },
                          },
                          {
                            key: "renderIcon",
                            value: function () {
                              var e = this.props.icon;
                              return "function" === typeof this.props.icon
                                ? _.a.createElement(
                                    "span",
                                    { className: R.iconSVG },
                                    _.a.createElement(e, { inline: false })
                                  )
                                : e
                                ? _.a.createElement(
                                    "span",
                                    { className: R.iconSVG },
                                    e
                                  )
                                : null;
                            },
                          },
                          {
                            key: "buttonBorderRadius",
                            value: function () {
                              return M.includes(this.props.variant)
                                ? "circle"
                                : "rounded";
                            },
                          },
                          {
                            key: "buttonWidth",
                            value: function (e) {
                              var t = this.props,
                                i = t.variant,
                                o = t.fluidWidth;
                              return e || K.includes(i)
                                ? "icon"
                                : o
                                ? "fluid"
                                : "auto";
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e,
                                t = this;
                              var o = this.props,
                                d = o.as,
                                r = o.buttonRef,
                                c = o.children,
                                b = o.cursor,
                                u = o.disabled,
                                a = o.href,
                                X = o.icon,
                                H = o.margin,
                                s = o.onClick,
                                y = o.readOnly,
                                l = o.size,
                                p = o.type,
                                h = o.variant,
                                v = o.tabIndex;
                              var m = Object(B["a"])(this.props.children);
                              var f = m && this.props.icon;
                              var k = !m && this.props.icon;
                              false;
                              var S = C["a"].omitViewProps(
                                Object(g["a"])(this.props, i.propTypes),
                                i
                              );
                              return _.a.createElement(
                                C["a"],
                                Object.assign({}, S, {
                                  className: G()(
                                    ((e = {}),
                                    Object(n["a"])(e, R.root, true),
                                    Object(n["a"])(e, R[h], true),
                                    Object(n["a"])(e, R[l], l),
                                    Object(n["a"])(
                                      e,
                                      R["width--".concat(this.buttonWidth(k))],
                                      true
                                    ),
                                    Object(n["a"])(
                                      e,
                                      R[
                                        "borderRadius--".concat(
                                          this.buttonBorderRadius()
                                        )
                                      ],
                                      true
                                    ),
                                    Object(n["a"])(e, R.disabled, u),
                                    Object(n["a"])(e, R["has-icon"], X),
                                    e)
                                  ),
                                  disabled: u || y,
                                  onClick: this.handleClick,
                                  onKeyDown: this.handleKeyDown,
                                  href: a,
                                  type: a ? null : p,
                                  role: s && "button" !== d ? "button" : null,
                                  tabIndex: s && d ? v || "0" : v,
                                  elementRef: function (e) {
                                    t._button = e;
                                    "function" === typeof r && r(e);
                                  },
                                  display: null,
                                  as: this.elementType,
                                  margin: H,
                                  cursor: u ? "not-allowed" : b,
                                }),
                                f
                                  ? _.a.createElement(
                                      E["a"],
                                      { height: "100%", width: "100%" },
                                      _.a.createElement(
                                        E["a"].Item,
                                        { padding: "0 x-small 0 0" },
                                        this.renderIcon()
                                      ),
                                      _.a.createElement(
                                        E["a"].Item,
                                        {
                                          shouldGrow: true,
                                          shouldShrink: true,
                                        },
                                        _.a.createElement(
                                          "span",
                                          { className: R.content },
                                          c
                                        )
                                      )
                                    )
                                  : _.a.createElement(
                                      "span",
                                      { className: R.content },
                                      X && this.renderIcon(),
                                      c
                                    )
                              );
                            },
                          },
                          {
                            key: "elementType",
                            get: function () {
                              return Object(w["a"])(i, this.props);
                            },
                          },
                          {
                            key: "focused",
                            get: function () {
                              return Object(z["a"])(this._button);
                            },
                          },
                        ]);
                        i.displayName = "DeprecatedButton";
                        return i;
                      })(H["Component"])),
                    (J.propTypes = {
                      children: y.a.node.isRequired,
                      type: y.a.oneOf(["button", "submit", "reset"]),
                      variant: y.a.oneOf([
                        "default",
                        "primary",
                        "success",
                        "danger",
                        "light",
                        "ghost",
                        "ghost-inverse",
                        "link",
                        "link-inverse",
                        "circle-default",
                        "circle-primary",
                        "circle-danger",
                        "icon",
                        "icon-inverse",
                      ]),
                      buttonRef: y.a.func,
                      as: y.a.elementType,
                      size: y.a.oneOf(["small", "medium", "large"]),
                      fluidWidth: y.a.bool,
                      disabled: y.a.bool,
                      readOnly: y.a.bool,
                      href: y.a.string,
                      onClick: y.a.func,
                      margin: p["c"].spacing,
                      icon: y.a.oneOfType([y.a.func, y.a.element]),
                      cursor: y.a.string,
                      tabIndex: y.a.oneOfType([y.a.number, y.a.string]),
                    }),
                    (J.defaultProps = {
                      as: "button",
                      type: "button",
                      variant: "default",
                      size: "medium",
                      margin: "0",
                      fluidWidth: false,
                      buttonRef: function (e) {},
                      cursor: "pointer",
                      disabled: void 0,
                      onClick: void 0,
                      icon: void 0,
                      href: void 0,
                      readOnly: void 0,
                      tabIndex: void 0,
                    }),
                    W))
                ) || A)
            ) || A)
        ) || A);
      var L = {
        smallPadding: "smallPaddingHorizontal",
        mediumPadding: "mediumPaddingHorizontal",
        largePadding: "largePaddingHorizontal",
        defaultBackground: "secondaryBackground",
        defaultBorderColor: "secondaryBorderColor",
        defaultColor: "secondaryColor",
        defaultHoverBackground: "secondaryHoverBackground",
        defaultActiveBackground: "secondaryActiveBackground",
        defaultActiveBoxShadow: "secondaryActiveBoxShadow",
      };
      var F = Object(p["d"])({
        map: L,
        version: "8.0.0",
        shouldIncludeOldValues: true,
      });
      var U = i("tPrY");
      function Q() {
        return U["b"].apply(void 0, arguments);
      }
      Object.assign(Q, U["b"]);
      Q["canvas-ams"] = function (e) {
        var t = e.colors;
        return Object(d["a"])(
          {},
          Object(U["c"])({
            style: "secondary",
            borderColor: t.borderBrand,
            backgroundColor: "transparent",
            textColor: t.fullyAccessibleBrand,
          }),
          {
            secondaryHoverBackground: Object(j["a"])(
              t.fullyAccessibleBrand,
              10
            ),
            secondaryActiveBackground: "transparent",
            secondaryActiveBoxShadow: ""
              .concat(U["a"], " ")
              .concat(Object(j["a"])(t.fullyAccessibleBrand, 28)),
            primaryGhostColor: t.textDarkest,
            primaryGhostBorderColor: t.textDarkest,
            primaryGhostHoverBackground: Object(j["a"])(t.textDarkest, 10),
            primaryGhostActiveBackground: "transparent",
            primaryGhostActiveBoxShadow: ""
              .concat(U["a"], " ")
              .concat(Object(j["a"])(t.textDarkest, 28)),
          }
        );
      };
      var Z, $, ee, te, ie, oe;
      var ne =
        ((Z = Object(h["a"])(
          "8.0.0",
          {
            buttonRef: "elementRef",
            fluidWidth: "display",
            icon: "renderIcon",
            variant: null,
          },
          "See the following upgrade guide for more help updating https://instructure.design/#button-upgrade-guide"
        )),
        ($ = Object(l["a"])()),
        (ee = Object(p["j"])(Q, null, F)),
        Z(
          (te =
            $(
              (te =
                ee(
                  (te =
                    ((oe = ie =
                      (function (e) {
                        Object(a["a"])(i, e);
                        var t = Object(X["a"])(i);
                        function i() {
                          var e;
                          Object(c["a"])(this, i);
                          for (
                            var o = arguments.length, b = new Array(o), a = 0;
                            a < o;
                            a++
                          )
                            b[a] = arguments[a];
                          e = t.call.apply(t, [this].concat(b));
                          e._buttonComponent = null;
                          e.handleElementRef = function (t) {
                            var i = e.props,
                              o = i.elementRef,
                              n = i.buttonRef;
                            o(t);
                            "function" === typeof n && n(t);
                          };
                          e.handleButtonRef = function (t) {
                            e._buttonComponent = t;
                          };
                          e.scopeTheme = function () {
                            var t = Object(u["a"])(e),
                              i = t.theme,
                              o = void 0 === i ? {} : i;
                            var c = q() || {};
                            var b = Object.keys(c);
                            return Object.entries(o).reduce(function (e, t) {
                              var i = Object(r["a"])(t, 2),
                                o = i[0],
                                c = i[1];
                              if (b.includes(o))
                                return Object(d["a"])(
                                  {},
                                  e,
                                  Object(n["a"])({}, o, c)
                                );
                              return e;
                            }, {});
                          };
                          return e;
                        }
                        Object(b["a"])(i, [
                          {
                            key: "focus",
                            value: function () {
                              this._buttonComponent &&
                                this._buttonComponent.focus();
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this.props,
                                t = e.children,
                                i = e.type,
                                n = e.size,
                                r = e.as,
                                c = e.color,
                                b = e.focusColor,
                                u = e.display,
                                a = e.textAlign,
                                X = e.withBackground,
                                H = e.margin,
                                s = e.cursor,
                                y = e.href,
                                l = e.icon,
                                p = e.renderIcon,
                                h = e.variant,
                                f = e.fluidWidth,
                                G = Object(o["a"])(e, [
                                  "children",
                                  "type",
                                  "size",
                                  "as",
                                  "color",
                                  "focusColor",
                                  "display",
                                  "textAlign",
                                  "withBackground",
                                  "margin",
                                  "cursor",
                                  "href",
                                  "icon",
                                  "renderIcon",
                                  "variant",
                                  "fluidWidth",
                                ]);
                              var k = Object(v["a"])({ props: G });
                              var S = this.theme,
                                w = void 0 === S ? {} : S;
                              if (h)
                                return _.a.createElement(
                                  I,
                                  Object.assign({}, Object(g["b"])(G), {
                                    type: i,
                                    size: n,
                                    as: r,
                                    disabled: "disabled" === k,
                                    readOnly: "readonly" === k,
                                    margin: H,
                                    cursor: s,
                                    href: y,
                                    icon: p || l,
                                    fluidWidth: f,
                                    variant: h,
                                    buttonRef: this.handleElementRef,
                                    ref: this.handleButtonRef,
                                    theme: this.scopeTheme(),
                                  }),
                                  t
                                );
                              var z = Object(d["a"])({}, Object(g["b"])(G), {
                                type: i,
                                size: n,
                                elementRef: this.handleElementRef,
                                ref: this.handleButtonRef,
                                as: r,
                                color: c,
                                interaction: k,
                                focusColor: b,
                                display: u,
                                textAlign: a,
                                withBackground: X,
                                margin: H,
                                cursor: s,
                                href: y,
                                renderIcon: p || l,
                                theme: w,
                                __dangerouslyIgnoreExperimentalWarnings: true,
                              });
                              if (f) {
                                z.textAlign = "start";
                                z.display = "block";
                              }
                              return _.a.createElement(m["a"], z, t);
                            },
                          },
                          {
                            key: "focused",
                            get: function () {
                              return (
                                this._buttonComponent &&
                                this._buttonComponent.focused
                              );
                            },
                          },
                        ]);
                        i.displayName = "Button";
                        return i;
                      })(H["Component"])),
                    (ie.propTypes = {
                      children: y.a.node,
                      type: y.a.oneOf(["button", "submit", "reset"]),
                      size: y.a.oneOf(["small", "medium", "large"]),
                      elementRef: y.a.func,
                      as: y.a.elementType,
                      interaction: y.a.oneOf([
                        "enabled",
                        "disabled",
                        "readonly",
                      ]),
                      color: y.a.oneOf([
                        "primary",
                        "primary-inverse",
                        "secondary",
                        "success",
                        "danger",
                      ]),
                      focusColor: y.a.oneOf(["info", "inverse"]),
                      display: y.a.oneOf(["inline-block", "block"]),
                      textAlign: y.a.oneOf(["start", "center"]),
                      withBackground: y.a.bool,
                      margin: p["c"].spacing,
                      cursor: y.a.string,
                      href: y.a.string,
                      renderIcon: y.a.oneOfType([y.a.node, y.a.func]),
                      buttonRef: y.a.func,
                      variant: y.a.oneOf([
                        "default",
                        "primary",
                        "success",
                        "danger",
                        "light",
                        "ghost",
                        "ghost-inverse",
                        "link",
                        "link-inverse",
                        "circle-default",
                        "circle-primary",
                        "circle-danger",
                        "icon",
                        "icon-inverse",
                      ]),
                      fluidWidth: y.a.bool,
                      icon: y.a.oneOfType([y.a.func, y.a.element]),
                    }),
                    (ie.defaultProps = {
                      children: null,
                      type: "button",
                      size: "medium",
                      elementRef: function (e) {},
                      as: "button",
                      interaction: void 0,
                      color: void 0,
                      focusColor: void 0,
                      display: "inline-block",
                      textAlign: "center",
                      withBackground: true,
                      margin: "0",
                      cursor: "pointer",
                      href: void 0,
                      renderIcon: void 0,
                      buttonRef: void 0,
                      variant: void 0,
                      fluidWidth: void 0,
                      icon: void 0,
                    }),
                    oe))
                ) || te)
            ) || te)
        ) || te);
    },
  },
]);

//# sourceMappingURL=1-c-9b44b2f2f0.js.map

window.__adroll ||
  (function () {
    function f() {
      this.version = "1.0";
      this.exp = 8760;
      this.eexp = 720;
      this.pv = 1e11 * Math.random();
      this.__adc = "__ar_v4";
      this._nad = 0;
      this._lce = null;
      this._loaded = this._broken = !1;
      this._url = 2e3;
      this._kwl = 300;
      this._r = {};
      this.cm_urls = [];
      this._logs = [];
      this.consent_networks = {
        facebook: "f",
        linkedin: "linkedin",
      };
      for (var a = Array(4), b = 0; b < a.length; b++)
        a[b] = (
          Math.round(1e11 * Math.random()).toString(16) + Array(9).join("0")
        ).substr(0, 8);
      this._set_global("adroll_sid", a.join(""));
      this._has_global("adroll_adv_id") &&
        (this.load_experiment_js(),
        this.init_pixchk(),
        this._load_precheck_js(),
        this.trigger_gtm_consent_event(),
        this.load_pixel_assistant(),
        ["adroll_adv_id", "adroll_pix_id"].forEach(function (a) {
          window.hasOwnProperty(a) &&
            ("string" === typeof window[a] || window[a] instanceof String) &&
            (window[a] = window[a].replace(/[^A-Z0-9_]/g, ""));
        }));
    }
    f.prototype.load_consent_banner = function () {
      window.document.getElementById("__adroll_consent_banner_el") ||
        this.add_script_element("s.adroll.com/j/consent_tcfv2.js", {
          id: "__adroll_consent_banner_el",
        });
    };
    f.prototype.get_consent_params = function () {
      return this.get("__adroll_consent_params");
    };
    f.prototype.set_consent_params = function (a) {
      this.set("__adroll_consent_params", a);
    };
    f.prototype.clear_consent_params = function () {
      this.del("__adroll_consent_params");
    };
    f.prototype.handle_null_consent = function (a) {
      a || ((a = this.get_consent_params()) && this.call_consent_write(a));
    };
    f.prototype.save_first_party_consent = function (a) {
      var b = (a || {}).euconsent;
      ((a = (a || {}).arconsent) || b) &&
        window.localStorage.setItem(
          "__adroll_consent_data",
          this.jsonStringify({
            arconsent: a,
            euconsent: b,
          })
        );
    };
    f.prototype.get_first_party_consent = function () {
      if (this._has_global("__adroll_consent_data"))
        return this._global("__adroll_consent_data");
      try {
        if (!window.localStorage) return null;
        var a = window.localStorage.getItem("__adroll_consent_data");
        if (a)
          return (
            this._set_global("__adroll_consent_data", this.jsonParse(a)),
            this._global("__adroll_consent_data")
          );
      } catch (b) {}
      return null;
    };
    f.prototype.trigger_gtm_consent_event = function (a) {
      function b(a, b, c) {
        b = isNaN(Number(b)) ? "c:" + b : "tcf:" + b;
        !0 !== c && !1 !== c && (c = "unknown");
        a[c][b] = 1;
      }

      function c(a) {
        return "," + l.object_keys(a).join(",") + ",";
      }
      if (!window.dataLayer || "function" === typeof window.dataLayer.push)
        if (((window.dataLayer = window.dataLayer || []), a)) {
          var d = this._global("__adroll_consent"),
            e = this._global("__adroll_consent_data") || {},
            m = e.eucookie || {},
            p = m.max_vendor_id || e.max_vendor_id || 0,
            r = e.networks || [],
            k = m.purposes_allowed || 0,
            g = {
              true: {},
              false: {},
              unknown: {},
            },
            h = {
              true: {},
              false: {},
              unknown: {},
            },
            n = {
              true: {},
              false: {},
            },
            l = this,
            q;
          if ("boolean" === typeof d) {
            for (q = 0; q < r.length; q++) b(g, r[q], d);
            for (q = 1; q < p; q++) b(g, q, d), b(h, q, d);
            for (q = 1; 25 > q; q++) n[d][q] = 1;
          } else {
            for (q in d) d.hasOwnProperty(q) && b(g, q, d[q]);
            for (q = 1; q <= p; q++) b(h, q, (m.vendor_consent || {})[q]);
            for (q = 0; 24 > q; q++) n[!!(k & (1 << q))][q + 1] = 1;
          }
          window.dataLayer.push({
            event: a,
            nextrollVendorsConsent: c(g["true"]),
            nextrollVendorsConsentUnknown: c(g.unknown),
            nextrollVendorsConsentDenied: c(g["false"]),
            nextrollVendorsRawConsent: c(h["true"]),
            nextrollVendorsRawConsentUnknown: c(h.unknown),
            nextrollVendorsRawConsentDenied: c(h["false"]),
            nextrollPurposesConsent: c(n["true"]),
            nextrollPurposesConsentUnknown: null,
            nextrollPurposesConsentDenied: c(n["false"]),
            nextrollgdpr: this._global("__adroll_consent_is_gdpr"),
            nextrolliab: e.euconsent,
          });
        } else
          window.dataLayer.push({
            event: "nextroll-ready",
          });
    };
    f.prototype.set_consent = function (a, b, c, d, e, m) {
      if (0 === arguments.length) {
        if (!this._has_global("__adroll_consent")) return;
        a = this._global("__adroll_consent");
      }
      var p = "nextroll-consent";
      this._has_global("__adroll_consent") && (p = "nextroll-consent-modified");
      this._set_global("__adroll_consent", a);
      this._set_global("__adroll_consent_is_gdpr", c);
      this._set_global("__adroll_consent_data", m || {});
      d && this._set_global("__adroll_consent_user_country", d);
      e && this._set_global("__adroll_consent_adv_country", e);
      c && ("adroll" === (m || {}).banner || b) && this.load_consent_banner();
      if (this._install_cmp) this._install_cmp();
      else {
        var r = this;
        window.setTimeout(function () {
          r._install_cmp && r._install_cmp();
        }, 1e3);
      }
      null === a
        ? this.handle_null_consent(b)
        : (this.save_first_party_consent(m),
          b || this.clear_consent_params(),
          this._trigger_consent_event && this._trigger_consent_event(),
          !1 !== a &&
            !1 !== (a || {}).a &&
            (this.set_first_party_cookie(),
            this.trigger_gtm_consent_event(p),
            this.call_next_tpc()));
    };
    f.prototype._load_precheck_js = function () {
      return this.add_script_element(
        "https://s.adroll.com/j/pre/" +
          window.adroll_adv_id +
          "/" +
          window.adroll_pix_id +
          "/index.js"
      );
    };
    f.prototype.cookieEnabled = function (a) {
      if (
        this._global("adroll_ext_network") ||
        this._global("adroll_optout") ||
        this._broken
      )
        return !1;
      if (2 <= this._nad || a) return this._lce;
      this.set("_te_", "1");
      return "1" === this.get("_te_")
        ? (this.del("_te_"),
          0 < this._nad && !this.get(this.__adc)
            ? (this._lce = !1)
            : (this._lce = !0))
        : (this._lce = !1);
    };
    f.prototype.get = function (a) {
      var b = window.document.cookie;
      if (null === b) return (this._broken = !0), null;
      var c;
      0 > b.indexOf(a + "=")
        ? (b = null)
        : ((a = b.indexOf(a + "=") + a.length + 1),
          (c = b.indexOf(";", a)),
          -1 === c && (c = b.length),
          (b = b.substring(a, c)),
          (b = "" === b ? null : window.unescape(b)));
      return b;
    };
    f.prototype.set = function (a, b, c) {
      var d;
      c && "number" === typeof c
        ? ((d = new Date()),
          d.setTime(d.getTime() + 36e5 * c),
          (c = d.toGMTString()),
          (c = "; expires=" + c))
        : (c = "");
      d = "; domain=" + window.location.hostname;
      b = window.escape(b);
      window.document.cookie =
        a + "=" + b + c + "; path=/" + d + "; samesite=lax";
    };
    f.prototype.del = function (a) {
      this.set(a, "", -8760);
    };
    f.prototype.check_cookie = function (a, b) {
      if (this._global("adroll_ext_network") || this._global("adroll_optout"))
        return "";
      for (var c = a.split("|"), d = c.length - 1; 0 <= d; d--)
        if (c[d]) {
          var e = c[d].split(":");
          b === e[0] &&
            ((e[2] = "" + (parseInt(e[2]) + 1)), (c[d] = e.join(":")));
        }
      return c.join("|");
    };
    f.prototype.handle = function (a) {
      var b = this.get(this.__adc) || "";
      -1 !== b.indexOf(a)
        ? this.set(this.__adc, this.check_cookie(b, a), this.exp)
        : ((a = [b, [a, this.get_date(this.eexp), "1"].join(":")].join("|")),
          this.set(this.__adc, a, this.exp));
    };
    f.prototype.expire_old = function () {
      if (
        !this._global("adroll_ext_network") &&
        !this._global("adroll_optout")
      ) {
        for (
          var a = this.get_date(!1),
            b = this.get(this.__adc),
            b = b ? b.split("|") : [""],
            c = [],
            d = b.length - 1;
          0 <= d;
          d--
        )
          b[d] && b[d].split(":")[1] > a && c.push(b[d]);
        this.set(this.__adc, c.join("|"), this.exp);
      }
    };
    f.prototype.get_date = function (a) {
      var b = new Date();
      a && b.setTime(b.getTime() + 36e5 * a);
      a = "" + b.getUTCFullYear();
      var c = b.getUTCMonth(),
        c = 10 <= c ? c : "0" + c,
        b = b.getUTCDate();
      return [a, c, 10 <= b ? b : "0" + b].join("");
    };
    f.prototype.consent_allowed = function (a) {
      var b = this._global("__adroll_consent");
      return "object" === typeof b ? b[a] : b;
    };
    f.prototype.generate_link = function () {
      return "";
    };
    f.prototype.view = function (a) {
      var b = new window.Image();
      b.src = this._srv("/view/" + a);
      b.setAttribute("width", "1");
      b.setAttribute("height", "1");
      b.setAttribute("border", "0");
      b.setAttribute("alt", "");
      this._head().appendChild(b);
    };
    f.prototype.set_cookie = function () {};
    f.prototype.reset = function () {
      this._set_global("adroll_c_id", null);
      this._set_global("adroll_url_macro", "");
      this._set_global("adroll_c_macro", "");
      this._set_global("adroll_cpm_macro", "");
      this._set_global("adroll_ext_network", null);
      this._set_global("adroll_subnetwork", null);
      this._set_global("adroll_ad_payload", null);
      this._set_global("adroll_win_notif", null);
    };
    f.prototype.set_pixel_cookie = function (a, b, c) {
      this._global("adroll_optout") ||
        (this.handle(a), this.handle(b), this.handle(c), this.pixel_loaded());
    };
    f.prototype.add_pixel_load_callback = function (a) {
      this._loaded ? a() : this._ensure_global("adroll_callbacks", []).push(a);
    };
    f.prototype.pixel_loaded = function () {
      this._loaded = !0;
      for (
        var a = this._ensure_global("adroll_callbacks", []), b = 0;
        b < a.length;
        b++
      )
        a[b].called || (a[b](), (a[b].called = !0));
    };
    f.prototype.addLoadEvent = function (a) {
      if (
        (this._has_global("__adroll_loaded") &&
          this._global("__adroll_loaded")) ||
        (this._has_global("_adroll_ie") && this._global("_adroll_ie")) ||
        /msie/i.test(window.navigator.userAgent)
      )
        return a();
      if (/WebKit/i.test(window.navigator.userAgent)) {
        var b = window.setInterval(function () {
          /loaded|complete/.test(window.document.readyState) &&
            window.clearInterval(b);
          a();
        }, 10);
        return null;
      }
      var c = window.onload;
      window.onload = function () {
        a();
        c && c();
      };
    };
    f.prototype._head = function () {
      return (
        (window.document.getElementsByTagName("head") || [null])[0] ||
        (window.document.getElementsByTagName("body") || [null])[0] ||
        window.document.getElementsByTagName("script")[0].parentNode
      );
    };
    f.prototype.listenToEvent = function (a, b, c) {
      a.addEventListener
        ? a.addEventListener(b, this.wrapException(c), !1)
        : a.attachEvent("on" + b, this.wrapException(c));
    };
    f.prototype.runCookieMatch = function () {
      var a = this.cm_urls.length;
      if (!(0 >= a)) for (var b = 0; b <= a; b++) this.popAndSend();
    };
    f.prototype.popAndSend = function () {
      if (!(0 >= this.cm_urls.length)) {
        var a = this.cm_urls.shift(),
          b = new Image();
        b.src = a;
        b.setAttribute("alt", "");
      }
    };
    f.prototype.add_param_to_url = function (a, b) {
      var c = a.indexOf("?"),
        d = "",
        e = "";
      -1 !== c
        ? ((d = a.slice(0, c + 1)), (e = "&" + a.slice(c + 1)))
        : ((c = a.indexOf("#", -1 === c ? 0 : c)),
          -1 === c
            ? (d = a + "?")
            : ((d = a.slice(0, c) + "?"), (e = a.slice(c))));
      return d + b + e;
    };
    f.prototype.is_under_experiment = function (a) {
      return window.adroll_exp_list && 0 <= window.adroll_exp_list.indexOf(a);
    };
    f.prototype.load_experiment_js = function () {
      var a = window.document.getElementById("adroll_scr_exp");
      return a
        ? a
        : this.add_script_element(
            "https://s.adroll.com/j/exp/" + window.adroll_adv_id + "/index.js",
            {
              id: "adroll_scr_exp",
              onError: "window.adroll_exp_list = [];",
            }
          );
    };
    f.prototype.is_experiment_js_loaded = function () {
      return !!window.adroll_exp_list;
    };
    f.prototype.is_test_advertisable = function () {
      return "ADV_EID" === this._global("adroll_adv_id");
    };
    f.prototype.if_under_experiment_js = function (a, b, c, d) {
      var e = this;
      this.load_experiment_js();
      this.on_experiment_loaded(function () {
        e.is_under_experiment(a)
          ? "function" === typeof b && b.call(e)
          : "function" === typeof c && c.call(e);
      }, d);
    };
    f.prototype.on_experiment_loaded = function (a, b) {
      function c() {
        if (e.is_experiment_js_loaded() || e.is_test_advertisable()) d = !0;
        d ? a.call(e) : window.setTimeout(c, 10);
      }
      var d = !1,
        e = this;
      window.setTimeout(function () {
        d = !0;
      }, b || 500);
      c();
    };
    f.prototype.external_data_to_qs = function (a) {
      var b = [],
        c = this.get_external_data();
      if (!c) return null;
      for (var d in c)
        c.hasOwnProperty(d) &&
          this._is_defined(c[d]) &&
          null !== c[d] &&
          b.push(
            this.normalize_var(
              window.escape("" + d) + "=" + window.escape("" + c[d]),
              !1
            )
          );
      b = b.join("&");
      a && (b = window.escape(b));
      return "adroll_external_data=" + b;
    };
    f.prototype.replace_external_data = function (a) {
      var b = this.get_external_data(),
        c = this.get_conversion_value(),
        d = null,
        e;
      if (b)
        for (e in b)
          b.hasOwnProperty(e) &&
            ((d = new RegExp("\\[" + e + "\\]", "gi")),
            (a = a.replace(d, b[e])),
            (d = new RegExp("\\[" + e + "_ESC\\]", "gi")),
            (a = a.replace(d, window.escape(b[e]))));
      if (c)
        for (e in c)
          c.hasOwnProperty(e) &&
            ((d = new RegExp("\\[" + e + "\\]", "gi")),
            (a = a.replace(d, c[e])),
            (d = new RegExp("\\[" + e + "_ESC\\]", "gi")),
            (a = a.replace(d, window.escape(c[e]))));
      return a;
    };
    f.prototype.get_external_data = function () {
      if (this._has_global("adroll_custom_data")) {
        var a = this._global("adroll_custom_data"),
          b = {},
          c;
        for (c in a)
          a.hasOwnProperty(c) &&
            "undefined" !== a[c] &&
            (b[c.toLowerCase()] = a[c]);
        return b;
      }
      return null;
    };
    f.prototype.get_conversion_value = function () {
      var a = this._ensure_global("adroll_currency", null),
        b = this._ensure_global("adroll_conversion_value", null),
        c = this._ensure_global("adroll_conversion_value_in_dollars", null);
      return b
        ? {
            conv_value: "" + b,
            currency: a,
          }
        : c
        ? {
            conv_value: "" + parseInt(100 * c),
            currency: "USC",
          }
        : null;
    };
    f.prototype._has_global = function (a) {
      return this._is_defined(this._global(a));
    };
    f.prototype._global = function (a) {
      return window[a];
    };
    f.prototype._set_global = function (a, b) {
      window[a] = b;
    };
    f.prototype._unset_global = function (a) {
      delete window[a];
    };
    f.prototype._ensure_global = function (a, b) {
      this._has_global(a) || this._set_global(a, b);
      return this._global(a);
    };
    f.prototype.jsonStringify = function (a) {
      this.jsonStringifyFunc || this.initJsonStringify();
      return this.jsonStringifyFunc(a);
    };
    f.prototype.jsonParse = function (a) {
      var b = this._global("JSON");
      return "function" === typeof b.parse ? b.parse(a) : eval("(" + a + ")");
    };
    f.prototype.initJsonStringify = function () {
      var a = this._global("JSON");
      this.jsonStringifyFunc =
        a || (a.stringify && "function" === typeof a.stringify)
          ? a.stringify
          : (function () {
              function a(b) {
                return (
                  e[b] ||
                  "\\u" + (b.charCodeAt(0) + 65536).toString(16).substr(1)
                );
              }
              var c = Object.prototype.toString,
                d =
                  Array.isArray ||
                  function (a) {
                    return "[object Array]" === c.call(a);
                  },
                e = {
                  '"': '\\"',
                  "\\": "\\\\",
                  "\b": "\\b",
                  "\f": "\\f",
                  "\n": "\\n",
                  "\r": "\\r",
                  "\t": "\\t",
                },
                m = /[\\"\u0000-\u001F\u2028\u2029]/g;
              return function r(k) {
                if (null === k) return "null";
                if ("number" === typeof k)
                  return isFinite(k) ? k.toString() : "null";
                if ("boolean" === typeof k) return k.toString();
                if ("object" === typeof k) {
                  if ("function" === typeof k.toJSON) return r(k.toJSON());
                  if (d(k)) {
                    for (var g = "[", h = 0; h < k.length; h++)
                      g += (h ? ", " : "") + r(k[h]);
                    return g + "]";
                  }
                  if ("[object Object]" === c.call(k)) {
                    g = [];
                    for (h in k)
                      k.hasOwnProperty(h) && g.push(r(h) + ": " + r(k[h]));
                    return "{" + g.join(", ") + "}";
                  }
                }
                return '"' + k.toString().replace(m, a) + '"';
              };
            })();
    };
    f.prototype.macro_values = function () {
      var a = this._ensure_global("adroll_cpm_macro", null),
        b = this._ensure_global("adroll_url_macro", null),
        c = this._ensure_global("adroll_c_macro", null),
        d = this._ensure_global("adroll_subnetwork", null),
        e = this._ensure_global("adroll_ad_payload", null),
        m = this._ensure_global("adroll_win_notif", null),
        p = this._ensure_global("adroll_rtb_dict", null),
        r = {
          r: /^\$\{.*\}$/i,
          g: /^%%.*%%$/i,
          b: /^\[.*\]$/i,
          x: /^\$\{.*\}$/i,
          t: /INSERTCLICKTRACKER/,
        }[this._global("adroll_ext_network")],
        r = this._is_defined(r) ? r : /CANNOT_MATCH_THIS/,
        k = {};
      a && !r.test(a) && (k.adroll_cpm_macro = a);
      b && !r.test(b) && (k.adroll_url_macro = b);
      c && !r.test(c) && (k.adroll_c_macro = c);
      d && !r.test(d) && (k.adroll_subnetwork = d);
      e && !r.test(e) && (k.adroll_ad_payload = e);
      m && !/^[|$]/.test(m) && (k.adroll_win_notif = m);
      if (p && ("string" !== typeof p || !/^[|$]/.test(p))) {
        if ("string" === typeof p)
          try {
            0 === p.indexOf("b64:") && (p = atob(p.substr(4))),
              (p = this.jsonParse(p));
          } catch (g) {
            this.log("failed to parse: " + g), (p = {});
          }
        "object" === typeof p && (k.adroll_rtb_dict = p);
      }
      return k;
    };
    f.prototype.format_macros = function (a, b, c, d) {
      a = this.macro_url_params(this.macro_values(), a, b, c, d);
      return this.maybe_apply_click_macro(a);
    };
    f.prototype.apply_exchange_macro = function (a, b) {
      var c = this._global("adroll_cpm_macro"),
        d = window.unescape(c),
        c = new RegExp(c.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g");
      a = a.replace(c, d);
      return b + window.escape(a);
    };
    f.prototype.maybe_apply_imp_macro = function (a) {
      var b = this._global("adroll_imp_prefix_macro");
      return b ? this.apply_exchange_macro(a, b) : a;
    };
    f.prototype.maybe_apply_click_macro = function (a) {
      var b = this._global("adroll_click_prefix_macro");
      if (b) {
        var c = this.parseUri(a);
        if (
          this.endswith(c.path, ".re") ||
          this.endswith(c.path, ".dy") ||
          this.endswith(c.path, ".tp")
        )
          return this.apply_exchange_macro(a, b);
      }
      return a;
    };
    f.prototype.macro_url_params = function (a, b, c, d, e) {
      e = this._is_defined(e) ? e : !1;
      var m = d
          ? window.escape
          : function (a) {
              return a;
            },
        p = a.adroll_cpm_macro,
        r = a.adroll_url_macro,
        k = c ? a.adroll_c_macro : null,
        g = [],
        h = b ? this.parseUri(b) : null,
        h = h ? this.endswith(h.path, ".tp") : !1;
      !h && e && g.push(["desturl", ""]);
      k && 0 === k.indexOf("http")
        ? ((e = m),
          "g" === this._global("adroll_ext_network") &&
            (e = d
              ? function (a) {
                  return a;
                }
              : window.unescape),
          g.push(["clickurl", e(k)]))
        : h && e && g.push(["clickurl", ""]);
      this._global("adroll_ext_network") &&
        g.push(["adroll_network", this._global("adroll_ext_network")]);
      p && g.push(["cpm", p]);
      a.adroll_subnetwork && g.push(["adroll_subnetwork", a.adroll_subnetwork]);
      a.adroll_ad_payload && g.push(["adroll_ad_payload", a.adroll_ad_payload]);
      r &&
        ((a = this.parseUri(window.unescape(r))),
        g.push(["site_url", m("http://" + a.host)]),
        c &&
          (g.push(["adroll_width", m(this._global("adroll_width"))]),
          g.push(["adroll_height", m(this._global("adroll_height"))])));
      this.log("Macros found " + this.serialize(g));
      return b ? this.buildurl(b, g) : this.serialize(g);
    };
    f.prototype.serialize = function (a) {
      if (a.length) {
        for (var b = [], c = a.length - 1; 0 <= c; c--) b.push(a[c].join("="));
        return b.join("&");
      }
      return "";
    };
    f.prototype.startswith = function (a, b) {
      return 0 === a.indexOf(b);
    };
    f.prototype.endswith = function (a, b) {
      return -1 !== a.indexOf(b, a.length - b.length);
    };
    f.prototype.buildurl = function (a, b) {
      var c = this.serialize(b),
        d = a.indexOf("?");
      return c
        ? d === a.length - 1
          ? a + c
          : -1 !== d
          ? "&" === a[a.length - 1]
            ? a + c
            : a + "&" + c
          : a + "?" + c
        : a;
    };
    f.prototype.md5 = (function () {
      function a(a, b) {
        var c = (a & 65535) + (b & 65535);
        return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (c & 65535);
      }

      function b(b, c, d, h, e, l) {
        c = a(a(c, b), a(h, l));
        return a((c << e) | (c >>> (32 - e)), d);
      }

      function c(a, c, d, h, e, l, m) {
        return b((c & d) | (~c & h), a, c, e, l, m);
      }

      function d(a, c, d, h, e, l, m) {
        return b((c & h) | (d & ~h), a, c, e, l, m);
      }

      function e(a, c, d, h, e, l, m) {
        return b(d ^ (c | ~h), a, c, e, l, m);
      }

      function m(m, k) {
        var g = m[0],
          h = m[1],
          n = m[2],
          l = m[3],
          g = c(g, h, n, l, k[0], 7, -680876936),
          l = c(l, g, h, n, k[1], 12, -389564586),
          n = c(n, l, g, h, k[2], 17, 606105819),
          h = c(h, n, l, g, k[3], 22, -1044525330),
          g = c(g, h, n, l, k[4], 7, -176418897),
          l = c(l, g, h, n, k[5], 12, 1200080426),
          n = c(n, l, g, h, k[6], 17, -1473231341),
          h = c(h, n, l, g, k[7], 22, -45705983),
          g = c(g, h, n, l, k[8], 7, 1770035416),
          l = c(l, g, h, n, k[9], 12, -1958414417),
          n = c(n, l, g, h, k[10], 17, -42063),
          h = c(h, n, l, g, k[11], 22, -1990404162),
          g = c(g, h, n, l, k[12], 7, 1804603682),
          l = c(l, g, h, n, k[13], 12, -40341101),
          n = c(n, l, g, h, k[14], 17, -1502002290),
          h = c(h, n, l, g, k[15], 22, 1236535329),
          g = d(g, h, n, l, k[1], 5, -165796510),
          l = d(l, g, h, n, k[6], 9, -1069501632),
          n = d(n, l, g, h, k[11], 14, 643717713),
          h = d(h, n, l, g, k[0], 20, -373897302),
          g = d(g, h, n, l, k[5], 5, -701558691),
          l = d(l, g, h, n, k[10], 9, 38016083),
          n = d(n, l, g, h, k[15], 14, -660478335),
          h = d(h, n, l, g, k[4], 20, -405537848),
          g = d(g, h, n, l, k[9], 5, 568446438),
          l = d(l, g, h, n, k[14], 9, -1019803690),
          n = d(n, l, g, h, k[3], 14, -187363961),
          h = d(h, n, l, g, k[8], 20, 1163531501),
          g = d(g, h, n, l, k[13], 5, -1444681467),
          l = d(l, g, h, n, k[2], 9, -51403784),
          n = d(n, l, g, h, k[7], 14, 1735328473),
          h = d(h, n, l, g, k[12], 20, -1926607734),
          g = b(h ^ n ^ l, g, h, k[5], 4, -378558),
          l = b(g ^ h ^ n, l, g, k[8], 11, -2022574463),
          n = b(l ^ g ^ h, n, l, k[11], 16, 1839030562),
          h = b(n ^ l ^ g, h, n, k[14], 23, -35309556),
          g = b(h ^ n ^ l, g, h, k[1], 4, -1530992060),
          l = b(g ^ h ^ n, l, g, k[4], 11, 1272893353),
          n = b(l ^ g ^ h, n, l, k[7], 16, -155497632),
          h = b(n ^ l ^ g, h, n, k[10], 23, -1094730640),
          g = b(h ^ n ^ l, g, h, k[13], 4, 681279174),
          l = b(g ^ h ^ n, l, g, k[0], 11, -358537222),
          n = b(l ^ g ^ h, n, l, k[3], 16, -722521979),
          h = b(n ^ l ^ g, h, n, k[6], 23, 76029189),
          g = b(h ^ n ^ l, g, h, k[9], 4, -640364487),
          l = b(g ^ h ^ n, l, g, k[12], 11, -421815835),
          n = b(l ^ g ^ h, n, l, k[15], 16, 530742520),
          h = b(n ^ l ^ g, h, n, k[2], 23, -995338651),
          g = e(g, h, n, l, k[0], 6, -198630844),
          l = e(l, g, h, n, k[7], 10, 1126891415),
          n = e(n, l, g, h, k[14], 15, -1416354905),
          h = e(h, n, l, g, k[5], 21, -57434055),
          g = e(g, h, n, l, k[12], 6, 1700485571),
          l = e(l, g, h, n, k[3], 10, -1894986606),
          n = e(n, l, g, h, k[10], 15, -1051523),
          h = e(h, n, l, g, k[1], 21, -2054922799),
          g = e(g, h, n, l, k[8], 6, 1873313359),
          l = e(l, g, h, n, k[15], 10, -30611744),
          n = e(n, l, g, h, k[6], 15, -1560198380),
          h = e(h, n, l, g, k[13], 21, 1309151649),
          g = e(g, h, n, l, k[4], 6, -145523070),
          l = e(l, g, h, n, k[11], 10, -1120210379),
          n = e(n, l, g, h, k[2], 15, 718787259),
          h = e(h, n, l, g, k[9], 21, -343485551);
        m[0] = a(g, m[0]);
        m[1] = a(h, m[1]);
        m[2] = a(n, m[2]);
        m[3] = a(l, m[3]);
      }
      var p = "0123456789abcdef".split("");
      return function (a) {
        var b = a;
        /[\x80-\xFF]/.test(b) && (b = unescape(encodeURI(b)));
        var c = b.length;
        a = [1732584193, -271733879, -1732584194, 271733878];
        var d;
        for (d = 64; d <= b.length; d += 64) {
          for (
            var e = b.substring(d - 64, d), l = [], q = void 0, q = 0;
            64 > q;
            q += 4
          )
            l[q >> 2] =
              e.charCodeAt(q) +
              (e.charCodeAt(q + 1) << 8) +
              (e.charCodeAt(q + 2) << 16) +
              (e.charCodeAt(q + 3) << 24);
          m(a, l);
        }
        b = b.substring(d - 64);
        e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (d = 0; d < b.length; d++)
          e[d >> 2] |= b.charCodeAt(d) << (d % 4 << 3);
        e[d >> 2] |= 128 << (d % 4 << 3);
        if (55 < d) for (m(a, e), d = 0; 16 > d; d++) e[d] = 0;
        e[14] = 8 * c;
        m(a, e);
        for (b = 0; b < a.length; b++) {
          c = a;
          d = b;
          e = a[b];
          l = "";
          for (q = 0; 4 > q; q++)
            l += p[(e >> (8 * q + 4)) & 15] + p[(e >> (8 * q)) & 15];
          c[d] = l;
        }
        return a.join("");
      };
    })();
    f.prototype._gurl = function () {
      var a = window.location;
      return this.normalize_url(a.pathname + a.search);
    };
    f.prototype.get_dummy_product_for_facebook = function (a) {
      return {
        product_id: "adroll_dummy_product",
        product_group: a,
        product_action: null,
        product_category: null,
      };
    };
    f.prototype.facebook_dummy_product_enabled = function () {
      return !0;
    };
    f.prototype.extract_pid = function (a, b, c) {
      function d(a) {
        return a ? ((a = new RegExp(a, "gi")), !!a.exec(k)) : null;
      }
      a || (a = {});
      var e = null,
        m = null,
        p = null,
        r = null,
        k = this._gurl(),
        g = this.get_external_data();
      g &&
        ((m = g.product_id),
        (e = g.product_group),
        (p = g.product_action),
        (r = g.adroll_product_category_id));
      if (
        !m &&
        a.regexp_group &&
        !("string" === a.regexp_group && a.regexp_group instanceof String) &&
        "html" === a.regexp_group.scheme
      ) {
        if (d(a.blacklist_regexp) || !0 !== d(a.regexp)) return "";
        m = this.get_product_id_from_dom(a.regexp_group);
      } else if (!m) {
        if (d(a.blacklist_regexp)) return "";
        m = this.get_product_id_from_url(k, a.regexp, a.regexp_group);
      }
      e ||
      !a.product_group_group ||
      ("string" === a.product_group_group &&
        a.product_group_group instanceof String) ||
      "html" !== a.product_group_group.scheme
        ? e ||
          (a.product_group_regexp &&
            (e = this.get_product_id_from_url(
              k,
              a.product_group_regexp,
              a.product_group_group
            )))
        : (e = this.get_product_id_from_dom(a.product_group_group));
      if (m)
        a = {
          product_id: m,
          product_group: e,
          product_action: p,
          product_category: r,
        };
      else if (this.facebook_dummy_product_enabled() && "facebook" === b)
        a = this.get_dummy_product_for_facebook(e);
      else return null;
      c && c(a);
      return a;
    };
    f.prototype.get_pid = function (a) {
      this.extract_pid(
        a,
        "adroll",
        function (a) {
          if (a) {
            var c = a.product_id,
              d = a.product_group,
              e = a.product_action,
              m = a.product_category;
            a = [];
            var p;
            if (c instanceof Array)
              for (p = 0; p < c.length; p++)
                a.push([
                  "adroll_product_id",
                  this.normalize_var((c[p] + "").toLowerCase(), !0),
                ]);
            else
              a.push([
                "adroll_product_id",
                this.normalize_var((c + "").toLowerCase(), !0),
              ]);
            if (m instanceof Array)
              for (p = 0; p < m.length; p++)
                a.push([
                  "adroll_product_category_id",
                  this.normalize_var((m[p] + "").toLowerCase(), !0),
                ]);
            else
              m &&
                a.push([
                  "adroll_product_category_id",
                  this.normalize_var((m + "").toLowerCase(), !0),
                ]);
            d &&
              a.push([
                "adroll_product_group",
                this.normalize_var((d + "").toLowerCase(), !0),
              ]);
            e &&
              a.push([
                "adroll_product_action",
                this.normalize_var((e + "").toLowerCase(), !0),
              ]);
            (c = this.external_data_to_qs(!0)) && a.push([c]);
            c = this._srv(
              this.buildurl("/p/" + this._global("adroll_adv_id") + "/", a)
            );
            d = window.document.createElement("img");
            d.src = c;
            d.height = d.width = 1;
            d.border = 0;
            d.setAttribute("alt", "");
            this._head().appendChild(d);
          }
        }.bind(this)
      );
    };
    f.prototype.get_product_id_from_dom = function (a) {
      var b = null,
        c;
      a.path &&
        (window.jQuery
          ? ((c = window.jQuery(a.path)),
            c.length &&
              ((c = c.eq(0)),
              (b = "text" === a.attribute ? c.text() : c.attr(a.attribute))))
          : window.Prototype && window.$$
          ? ((c = window.$$(a.path)),
            c.length &&
              ((c = c[0]),
              (b =
                "text" === a.attribute
                  ? c.innerText && !window.opera
                    ? c.innerText
                    : c.innerHTML
                        .stripScripts()
                        .unescapeHTML()
                        .replace(/[\n\r\s]+/g, " ")
                  : c.readAttribute(a.attribute))))
          : window.YUI
          ? ((c = window.YUI().use("node")),
            c.one &&
              ((c = c.one(a.path)),
              (b = null),
              c &&
                (b =
                  "text" === a.attribute
                    ? c.get("text")
                    : c.getAttribute(a.attribute))))
          : window.$$ &&
            ((c = window.$$(a.path)),
            c.length &&
              ((c = c[0]),
              (b =
                "text" === a.attribute
                  ? c.get("text")
                  : c.getProperty(a.attribute)))));
      if (
        b &&
        ((b = b.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
        a.regular_expression && a.regular_expression_replace)
      )
        if (
          ((c = new RegExp(a.regular_expression, "gi")),
          (b = c.exec(b)),
          null !== b)
        ) {
          a = a.regular_expression_replace;
          for (c = 0; c < b.length; c++)
            a = a.replace(new RegExp("\\\\" + c, "gi"), b[c] || "");
          b = a;
        } else b = "";
      return b;
    };
    f.prototype.get_product_id_from_url = function (a, b, c) {
      var d = null;
      try {
        d = parseInt(c);
      } catch (e) {}
      return null !== d &&
        !isNaN(d) &&
        b &&
        ((a = new RegExp(b, "gi").exec(a)), null !== a && d in a)
        ? a[d]
        : null;
    };
    f.prototype.render_pixel_code = function (a, b) {
      var c = this;
      c._has_global("adroll_tpc")
        ? c.render_pixel_code_exec(a, b)
        : c.load_adroll_tpc(function () {
            c.render_pixel_code_exec(a, b);
          });
    };
    f.prototype.render_pixel_code_exec = function (a, b) {
      this.expire_old();
      var c = this._srv("/pixel"),
        d = window.document.createElement("script");
      d.setAttribute("async", "true");
      d.type = "text/javascript";
      var e = this.get_keywords();
      this.addLoadEvent(
        (function (m) {
          return function () {
            var p = [];
            try {
              200 >= window.document.referrer.length &&
                p.push(
                  "adroll_s_ref=" + window.escape(window.document.referrer)
                );
            } catch (h) {}
            try {
              p.push("keyw=" + window.escape(e));
            } catch (h) {}
            try {
              m._has_global("adroll_segments") &&
                p.push(
                  "name=" +
                    window.escape(m._global("adroll_segments").toLowerCase())
                );
            } catch (h) {}
            try {
              m._has_global("adroll_p") &&
                p.push("adroll_p=" + window.escape(m._global("adroll_p")));
            } catch (h) {}
            try {
              m._has_global("adroll_u") &&
                p.push("adroll_u=" + window.escape(m._global("adroll_u")));
            } catch (h) {}
            try {
              m._has_global("adroll_m") &&
                m._has_global("adroll_m_type") &&
                (p.push("adroll_m=" + window.escape(m._global("adroll_m"))),
                p.push(
                  "adroll_m_type=" + window.escape(m._global("adroll_m_type"))
                ));
            } catch (h) {}
            try {
              var r = m.get_conversion_value();
              r.conv_value && p.push("conv_value=" + r.conv_value);
              r.currency && p.push("adroll_currency=" + r.currency);
            } catch (h) {}
            try {
              if (m._has_user_identifier()) {
                var k = m._global("adroll_user_identifier"),
                  k = k.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                p.push("user_identifier=" + window.encodeURIComponent(k));
              }
            } catch (h) {}
            try {
              m._has_global("adroll_shop_id") &&
                ((r = {}),
                m._has_global("adroll_custom_data")
                  ? (r = m._global("adroll_custom_data"))
                  : m._set_global("adroll_custom_data", r),
                "undefined" === typeof r.adroll_shop_id &&
                  (r.adroll_shop_id = m._global("adroll_shop_id")));
              var g = m.external_data_to_qs(!0);
              g && p.push(g);
            } catch (h) {}
            p = m.get_base_url(c, a, b, null, "", p);
            d.src = p;
            m._head().appendChild(d);
          };
        })(this)
      );
      this.addLoadEvent(
        (function (a) {
          return function () {
            var b = a._global("adroll");
            if (b && "object" === typeof b) {
              b.identify = function () {
                return a.identify.apply(a, arguments);
              };
              b.track = function () {
                return a.track.apply(a, arguments);
              };
              for (var c, d, e = 0; e < b.length; e++)
                (c = b[e][0]),
                  (d = b[e][1]),
                  "identify" === c
                    ? a.identify.apply(a, d)
                    : "track" === c && a.track.apply(a, d);
            }
          };
        })(this)
      );
    };
    f.prototype.render_ad_code = function (a, b, c, d) {
      d = this._is_defined(d) ? d : null;
      if (!this._is_defined(this._r[b]) || d) {
        var e = [
          "width=" + this._global("adroll_width"),
          "height=" + this._global("adroll_height"),
          "x=0",
          "y=0",
        ];
        if (d) {
          this.log("Rendering adgroup " + d);
          var m = this.macro_values(),
            p = this.macro_url_params(m, !1, !1, !1, !1);
          e.push(p);
          this.render_win_notification(m);
          this.render_extra_script(m);
          a = this.get_url(a, b, d, null, e);
        } else
          this.log("Rendering ad space " + b),
            (a = this.get_url(a, b, null, "ad", e));
        this.expire_old();
        a = this.maybe_apply_imp_macro(a);
        c && (a = this._srv("/impression?" + e.join("&")));
        window.document.write('<script src="' + a + '">\x3c/script>');
        this._nad += 1;
        this._r[b] = 1;
      }
    };
    f.prototype.render_win_notification = function (a) {
      if (a.adroll_cpm_macro && a.adroll_win_notif) {
        var b =
          (this._secure() ? "https://" : "http://") +
          a.adroll_win_notif +
          a.adroll_cpm_macro;
        a.adroll_ad_payload &&
          ((a.adroll_rtb_dict && a.adroll_rtb_dict.waap) ||
            (/waap=1&/.test(a.adroll_win_notif) &&
              !this._is_defined(a.adroll_rtb_dict))) &&
          (b += "&ad_payload=" + a.adroll_ad_payload);
        b = this.maybe_apply_imp_macro(b);
        this.imgRequest(b);
      }
    };
    f.prototype.render_extra_script = function (a) {
      a.adroll_rtb_dict &&
        a.adroll_rtb_dict.extra_script_src &&
        this.add_script_element(a.adroll_rtb_dict.extra_script_src, {});
    };
    f.prototype.add_script_element = function (a, b) {
      var c = window.document.createElement("script"),
        d = this._secure() ? "https://" : "http://";
      a.match(/^(\w+:)*\/\//) && (d = "");
      for (var e in b)
        b.hasOwnProperty(e) && "src" !== e && c.setAttribute(e, b[e]);
      c.type = "text/javascript";
      c.src = d + a;
      this._head().appendChild(c);
      return c;
    };
    f.prototype.get_base_url = function (a, b, c, d, e, m) {
      var p = a.split("?");
      a = p[0] + "/" + b + "/" + c + (d ? "/" + d : "") + (e ? "/" + e : "");
      var r = "?";
      p[1] && ((a += "?" + p[1]), (r = "&"));
      var p = r + "no-cookies=1&pv=",
        k = "";
      this.cookieEnabled(!1)
        ? ((k = window.escape(this.get_eids())),
          (a += r + "pv=" + this.pv + "&cookie=" + k))
        : (a += p + this.pv);
      m && (a += "&" + m.join("&"));
      a = this.add_tpc_to_url(a);
      if (a.length > this._url) {
        try {
          this.del(this.__adc);
        } catch (g) {}
        if (a.length - k.length > this._url) return a;
        this.log("Url was too big, shrinking it");
        return this.get_url(b, c, d, e, m);
      }
      this.log("Generated url: " + a);
      return a;
    };
    f.prototype.get_url = function (a, b, c, d, e) {
      var m = c ? this._srv("/c") : this._srv("/r");
      return this.get_base_url(m, a, b, c, d, e);
    };
    f.prototype.get_eids = function () {
      if (this._global("adroll_ext_network") || this._global("adroll_optout"))
        return "";
      try {
        for (
          var a = this.get(this.__adc),
            b = a ? a.split("|") : "",
            a = [],
            c = b.length - 1;
          0 <= c;
          c--
        )
          if (b[c]) {
            var d = b[c].split(":");
            a.push([d[0], d[2]].join(":"));
          }
        return a.join("|");
      } catch (e) {
        return this.del(this.__adc), "";
      }
    };
    f.prototype._container_is_secure = function (a) {
      return this._is_defined(a) ? a : this._secure();
    };
    f.prototype.ad_servers_url = function (a, b) {
      return (
        (this._container_is_secure(b) ? "https://" : "http://") +
        "d.adroll.com" +
        a
      );
    };
    f.prototype.ad_request_url = function (a, b, c, d, e) {
      var m = this._global("adroll_a_id"),
        p = this._global("adroll_s_id"),
        r = this._global("adroll_insertion_id");
      a = this.ad_servers_url("/r/" + p + "/" + m + "/" + r + "." + a, e);
      return this.format_macros(a, b, c, d);
    };
    f.prototype.click_url = function (a, b) {
      var c = this.ad_servers_url(a ? "/click/lenient/" : "/click/", !1);
      return this.format_macros(c, !0, !0, b);
    };
    f.prototype.engage_url = function () {
      var a = this.ad_servers_url("/event/", !1);
      return this.format_macros(a, !1, !0, !1);
    };
    f.prototype.cdn_url = function (a, b) {
      return (
        (this._container_is_secure(b)
          ? "https://s.adroll.com"
          : "http://a.adroll.com") + a
      );
    };
    f.prototype.ad_file_url = function (a, b) {
      var c = this._global("adroll_ad_filename");
      a = a ? c.split(".")[0] + a : c;
      c = "/a/" + c.substring(0, 3) + "/" + c.substring(3, 6) + "/" + a;
      return this.cdn_url(c, b);
    };
    f.prototype.roll_crawl_url = function () {
      return "https://d.adroll.com/p";
    };
    f.prototype.record_user = function (a) {
      var b =
          "adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(
            " "
          ),
        c,
        d;
      a = a || {};
      var e = {
        adroll_user_identifier: !0,
      };
      for (c = 0; c < b.length; c++) {
        try {
          this._unset_global(b[c]);
        } catch (m) {}
        if (b[c] in a) {
          b[c] in e
            ? this._set_global(b[c], window.escape(a[b[c]]))
            : "adroll_email" !== b[c] && this._set_global(b[c], a[b[c]]);
          try {
            delete a[b[c]];
          } catch (m) {}
        }
      }
      try {
        this._unset_global("adroll_custom_data");
      } catch (m) {}
      for (d in a)
        if (a.hasOwnProperty(d)) {
          this._set_global("adroll_custom_data", a);
          break;
        }
      this.render_pixel_code(
        this._global("adroll_adv_id"),
        this._global("adroll_pix_id")
      );
    };
    f.prototype.record_adroll_email = function (a) {
      if (this._has_email()) {
        var b = this._global("_adroll_email"),
          b = b.replace(/^\s+|\s+$/g, ""),
          c,
          d = b.toLowerCase(),
          b = this.is_email_valid(b);
        this.is_already_hashed(d) ? (c = d) : b && (c = this.md5(d));
        c = "/id/" + this._global("adroll_adv_id") + "/?hashed_email=" + c;
        b &&
          ((d = d.split("@")[1]),
          (c += "&email_domain=" + window.encodeURIComponent(d)));
        a && (c += "&idsource=" + a);
        this.imgRequest(this._srv(c));
      }
    };
    f.prototype._send_plain_text_identifiers = function (a, b, c) {
      (a || b) &&
        c &&
        ((c = "/id/" + this._global("adroll_adv_id") + "/?idsource=" + c),
        a &&
          ((a = a.replace(/^\s+|\s+$/g, "").toLowerCase()),
          (c +=
            "&email=" +
            window.encodeURIComponent(a) +
            "&hashed_email=" +
            this.md5(a)),
          (a = a.split("@")[1]),
          (c += "&email_domain=" + window.encodeURIComponent(a))),
        b && (c += "&user_identifier=" + window.encodeURIComponent(b)),
        this.imgRequest(this._srv(c)));
    };
    f.prototype._has_email = function () {
      return this._has_global("_adroll_email");
    };
    f.prototype._has_user_identifier = function () {
      return (
        this._has_global("adroll_user_identifier") &&
        "example_user_id" !== this._global("adroll_user_identifier")
      );
    };
    f.prototype.is_already_hashed = function (a) {
      return /^[a-f0-9]{32}$/.test(a);
    };
    f.prototype.is_email_valid = function (a) {
      return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        a
      );
    };
    f.prototype.identify = function (a, b) {
      (a.email || a.userId) &&
        this._send_plain_text_identifiers(
          a.email,
          a.userId,
          b || "adroll-identify"
        );
      a.email && this._set_global("_adroll_email", a.email);
      var c = this.copyObj(a, ["email", "userId"]);
      c &&
        ((c =
          "/uat/" +
          this._global("adroll_adv_id") +
          "/" +
          this._global("adroll_pix_id") +
          "/?user_attributes=" +
          window.encodeURIComponent(this.jsonStringify(c))),
        b && (c += "&idsource=" + b),
        this.imgRequest(this._srv(c)));
      this._queueAndCallback("identify", [a, b]);
    };
    f.prototype.track = function (a, b) {
      this._track_pxl_assistant(a, b);
      if (a) {
        var c =
            "/uev/" +
            this._global("adroll_adv_id") +
            "/" +
            this._global("adroll_pix_id") +
            "/?event_name=" +
            window.encodeURIComponent(a),
          d = this.copyObj(b);
        d &&
          (c +=
            "&event_attributes=" +
            window.encodeURIComponent(this.jsonStringify(d)));
        this.imgRequest(this._srv(c));
        this._queueAndCallback("track", [a, b]);
      }
    };
    f.prototype._registerCallback = function (a, b, c) {
      this.callbacks = this.callbacks || {};
      this.callbackNames = this.callbackNames || [];
      this.callbacks[a] = this.callbacks[a] || [];
      if (
        !("function" !== typeof b || -1 < this.callbackNames.indexOf(c)) &&
        (this.callbackNames.push(c),
        this.callbacks[a].push(b),
        this.callbackQueues &&
          this.callbackQueues[a] &&
          this.callbackQueues[a].length)
      )
        for (c = 0; c < this.callbackQueues[a].length; c++)
          b.apply(null, this.callbackQueues[a][c]);
    };
    f.prototype._queueAndCallback = function (a, b) {
      this.callbackQueues = this.callbackQueues || {};
      this.callbackQueues[a] = this.callbackQueues[a] || [];
      this.callbackQueues[a].push(b);
      if (this.callbacks && this.callbacks[a] && this.callbacks[a].length)
        for (var c = 0; c < this.callbacks[a].length; c++)
          this.callbacks[a][c].apply(null, b);
    };
    f.prototype.registerIdentifyCallback = function (a, b) {
      this._registerCallback("identify", a, b);
    };
    f.prototype.registerTrackCallback = function (a, b) {
      this._registerCallback("track", a, b);
    };
    f.prototype._track_pxl_assistant = function (a, b) {
      this._has_global("__adroll_pxl_assistant_track") ||
        this._set_global("__adroll_pxl_assistant_track", []);
      this._global("__adroll_pxl_assistant_track").push({
        eventName: a,
        eventAttrs: b,
      });
      if (this.__nrpa_event_handler)
        try {
          this.__nrpa_event_handler({
            track: this._global("__adroll_pxl_assistant_track"),
          });
        } catch (c) {}
    };
    f.prototype._is_defined = function (a) {
      return "undefined" !== typeof a;
    };
    f.prototype.normalize_var = function (a, b) {
      if (!a) return "";
      a = a.toString().substr(0, this._kwl).replace(/,/gi, ".");
      b && (a = window.escape(a));
      return a;
    };
    f.prototype.get_keywords = function () {
      try {
        var a = window.document.referrer || "";
        if (!a) return "";
        var b = this.parseUri(a);
        return -1 !== b.host.indexOf("www.google.")
          ? b.queryKey.q.substring(0, this._kwl)
          : -1 !== b.host.indexOf("bing.com")
          ? b.queryKey.q.substring(0, this._kwl)
          : "";
      } catch (c) {
        return "";
      }
    };
    f.prototype.parseUri = function (a) {
      a =
        /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
          a
        );
      for (
        var b = {
            queryKey: {},
          },
          c = 14,
          d =
            "source protocol authority userInfo user password host port relative path directory file query anchor".split(
              " "
            );
        c--;

      )
        b[d[c]] = a[c] || "";
      b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (a, c, d) {
        c && (b.queryKey[c] = d);
      });
      return b;
    };
    f.prototype._secure = function () {
      return !0;
    };
    f.prototype._protocol = function () {
      return window.document.location.protocol;
    };
    f.prototype._native = function () {
      try {
        return "http" !== this._protocol().slice(0, 4);
      } catch (a) {
        return !0;
      }
    };
    f.prototype.has_param_in_url = function (a, b) {
      var c = a.split("?");
      return 1 < c.length && -1 !== ("&" + c[1]).indexOf("&" + b + "=");
    };
    f.prototype._srv = function (a) {
      a = this._is_defined(a) ? a : "";
      a = this.add_tpc_to_url("https://d.adroll.com" + a);
      this._has_global("__adroll_xid_ch") &&
        (a = this.add_param_to_url(
          a,
          "xid_ch=" + (0 !== this._global("__adroll_xid_ch") ? "t" : "f")
        ));
      if (!this.has_param_in_url(a, "arrfrr")) {
        var b = this._get_arrfrr();
        a = this.add_param_to_url(a, "arrfrr=" + encodeURIComponent(b));
      }
      return this.add_consent_to_url(this.add_fpc_to_url(a));
    };
    f.prototype._get_arrfrr = function (a) {
      a || (a = window.location.href);
      a = a.split("#")[0];
      var b = a.split("?"),
        c = this;
      if (1 < b.length) {
        var d = b[1].replace(/([^&=]+)=([^&]+)/g, function (a, b, d) {
          return b.match(/cc_number|credit_card|card_number|cv[cv]_code/) ||
            c.is_luhn(unescape(d))
            ? b + "=NR_REDACT"
            : b + "=" + d;
        });
        b[1] !== d && (a = b[0] + "?" + d);
      }
      return a;
    };
    f.prototype.is_luhn = function (a) {
      if ("string" !== typeof a) return !1;
      a = a.replace(/\D/g, "");
      if (13 > a.length || 19 < a.length) return !1;
      for (var b = 0, c = !1, d, e = a.length - 1; 0 <= e; e--)
        (d = parseInt(a.charAt(e), 10)),
          c && ((d *= 2), 9 < d && (d -= 9)),
          (b += d),
          (c = !c);
      return 0 === b % 10;
    };
    f.prototype._cdn = function (a) {
      a = this._is_defined(a) ? a : "";
      return "https://s.adroll.com" + a;
    };
    f.prototype.log = function (a) {
      this._logs.push(a);
    };
    f.prototype.read_log = function (a) {
      return this._logs.join(a ? "\n" : "<br>\n");
    };
    f.prototype.normalize_url = function (a) {
      return a.toLowerCase();
    };
    f.prototype.imgRequest = function (a) {
      var b = new window.Image();
      b.src = this.add_tpc_to_url(a);
      b.setAttribute("width", "1");
      b.setAttribute("height", "1");
      b.setAttribute("border", "0");
      b.setAttribute("alt", "");
      return this._head().appendChild(b);
    };
    f.prototype.b64toint = function (a) {
      function b(a, c) {
        if (1 > c) return "";
        if (c % 2) return b(a, c - 1) + a;
        var d = b(a, c / 2);
        return d + d;
      }
      var c = "",
        d;
      a = a.replace("-", "+").replace("_", "/");
      for (var e = 0; e < a.length; e++)
        (d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          .indexOf(a[e])
          .toString(2)),
          (c = c + b("0", 6 - d.length) + d);
      return parseInt(c, 2);
    };
    f.prototype.copyObj = function (a, b) {
      if (!a) return null;
      var c = {},
        d = 0,
        e;
      for (e in a)
        !a.hasOwnProperty(e) ||
          (b && -1 !== b.indexOf(e)) ||
          (d++, (c[e] = a[e]));
      return d ? c : null;
    };
    f.prototype.object_keys = function (a) {
      if (window.Object && window.Object.keys) return Object.keys(a);
      if ("object" === typeof a) return [];
      var b = [],
        c;
      for (c in a) a.hasOwnProperty(c) && b.push(c);
      return b;
    };
    f.prototype.wrapException = function (a) {
      return function (b) {
        try {
          return a(b);
        } catch (c) {}
      };
    };
    f.prototype.add_tpc_to_url = function (a) {
      var b = this._global("adroll_tpc");
      if (!a || !b) return a;
      var c = a.substr(a.indexOf("://") + 3).split("/")[0];
      if (a.match(/[?&]adroll_tpc=/) && "d.adroll.com" !== c) return a;
      0 < (this._global("__adroll_xid_ch") || 0) &&
        (b =
          b +
          "&xid_src=" +
          (1 === this._global("__adroll_xid_ch") ? "cache" : "srv"));
      return this.add_param_to_url(a, "adroll_tpc=" + encodeURIComponent(b));
    };
    f.prototype.add_fpc_to_url = function (a) {
      var b = this.get_first_party_cookie();
      if (!a || !b) return a;
      var c = this.parseUri(a);
      return c.queryKey.adroll_fpc ||
        ("d.adroll.com" !== c.host && "d.adroll.com" !== c.host + ":" + c.port)
        ? a
        : this.add_param_to_url(a, "adroll_fpc=" + encodeURIComponent(b));
    };
    f.prototype.add_consent_to_url = function (a) {
      var b = this.get_first_party_consent();
      if (!a || !b || !b.arconsent) return a;
      var c = a.match(/^\w+:\/\/([^/]+)/);
      if (c && "d.adroll.com" !== c[1] && "d.adroll.mgr.consensu.org" !== c[1])
        return a;
      c = -1 === a.indexOf("?") ? "?" : "&";
      return a + c + "arconsent=" + encodeURIComponent(b.arconsent);
    };
    f.prototype.getSafariVersion = function () {
      var a =
        /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(
          navigator.userAgent
        );
      return a ? a[1] : null;
    };
    f.prototype.set_tpc = function (a, b) {
      var c = this.tpc_callback();
      a &&
        b &&
        this._set_global(
          "adroll_tpc",
          encodeURIComponent(a) + "=" + encodeURIComponent(b)
        );
      c && c.call(this);
    };
    f.prototype.tpc_callback = function (a) {
      var b = window.adroll_tpc_callback;
      window.adroll_tpc_callback = a;
      return a ||
        window.adroll_xavier_called ||
        ((window.adroll_xavier_called = 1), !this.call_xavier(b))
        ? b
        : null;
    };
    f.prototype.call_next_tpc = function (a) {
      (a = this.tpc_callback(a)) && a.call(this);
    };
    f.prototype.extract_query_param = function (a, b) {
      for (var c = b.split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) === a) return decodeURIComponent(e[1]);
      }
      return null;
    };
    f.prototype.get_adroll_sid = function () {
      var a = this.get_consent_params();
      return a && (a = this.extract_query_param("_s", a))
        ? a
        : this._global("adroll_sid");
    };
    f.prototype.call_consent_write = function (a) {
      this.add_script_element(this._srv("/consent/write?" + a));
    };
    f.prototype.call_consent_check = function () {
      var a = ["_s=" + this.get_adroll_sid(), "_b=2"];
      "#_ar_gdpr=" === window.location.hash.substr(0, 10) &&
        a.push("dbg=" + unescape(window.location.hash.substr(10)));
      a = this.add_consent_to_url(
        "https://d.adroll.mgr.consensu.org/consent/iabcheck/" +
          this._global("adroll_adv_id") +
          "?" +
          a.join("&")
      );
      this.add_script_element(a);
    };
    f.prototype.load_adroll_tpc = function (a) {
      this.tpc_callback(a);
      if (this._consent_checked) return this.set_consent();
      this._consent_checked = !0;
      this.call_consent_check();
    };
    f.prototype.get_tpc_decode_timeout = function () {
      return 1500;
    };
    f.prototype.set_first_party_cookie = function () {
      var a = this.get_first_party_cookie();
      a ||
        (a =
          this.md5(
            new Date().getTime() +
              Math.round(1e11 * Math.random()) +
              window.navigator.userAgent.toLowerCase() +
              window.document.referrer
          ) +
          "-" +
          new Date().getTime());
      this.set("__adroll_fpc", a, 8766);
    };
    f.prototype.get_first_party_cookie = function () {
      try {
        var a = this.get("__adroll_fpc");
        if (a) {
          var b = a.replace("-s2-", "-").replace(/-$/, "");
          if ("-" === b.charAt(32) && b.substr(33).match(/\D/) && Date.parse) {
            var c = new Date(b.substr(33));
            if (c && !isNaN(c.getTime())) return b.substr(0, 33) + c.getTime();
          }
          return b;
        }
      } catch (d) {}
      return null;
    };
    f.prototype.call_xavier = function (a) {
      function b() {
        window.RetrieveAdID && (d = !0);
        if (d)
          if (window.RetrieveAdID) {
            c.tpc_callback(a);
            var e = window.setTimeout(function () {
              c.set_tpc(null);
            }, c.get_tpc_decode_timeout());
            window.RetrieveAdID(
              function (a) {
                a &&
                  (c._set_global("__adroll_xid_ch", 1),
                  window.clearTimeout(e),
                  c.set_tpc("xavier", a));
              },
              function (a) {
                c._set_global("__adroll_xid_ch", 2);
                window.clearTimeout(e);
                c.set_tpc("xavier", a);
              }
            );
          } else c._set_global("__adroll_xid_ch", 0), a && a.call(c);
        else
          window.setTimeout(function () {
            b();
          }, 10);
      }
      var c = this,
        d = !1,
        e = navigator.userAgent.toLowerCase();
      if (
        "US" !== this._global("__adroll_consent_user_country") ||
        window.location.hostname.match(
          /(rakuten\.co\.jp|summo\.jp|goo-net\.com|dmm\.com|beforward\.jp)$/
        ) ||
        (!(
          e.match(/intel mac.*? safari/) &&
          -1 === e.indexOf("chrome") &&
          0 < navigator.maxTouchPoints
        ) &&
          (!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b/) ||
            9 > parseInt(e.substr(e.indexOf(") version/") + 10), 10)))
      )
        return c._set_global("__adroll_xid_ch", 0), !1;
      window.setTimeout(function () {
        d = !0;
      }, this.get_tpc_decode_timeout());
      if (this.is_under_experiment("xid_blacklist")) return !1;
      this.is_under_experiment("xid_test");
      this.add_script_element("https://s.dca0.com/sdk.v5.3.min.js?1609955697");
      b();
      return !0;
    };
    f.prototype.init_pixchk = function () {
      this.if_under_experiment_js(
        "pixchk",
        function () {
          window.addEventListener("message", this.pixchk_handler, !1);
        },
        function () {},
        1e3
      );
    };
    f.prototype.pixchk_handler = function (a) {
      if (a.origin.match(/^https?:\/\/[^\/:]*\.adroll\.com\b/))
        try {
          var b = JSON.parse(a.data);
          "pixchk" === b.cmd &&
            a.source.postMessage(
              JSON.stringify({
                cmd: "pixrpl",
                adv_id: window.adroll_adv_id,
                pix_id: window.adroll_pix_id,
                token: b.token,
              }),
              "*"
            );
        } catch (c) {}
    };
    f.prototype.load_pixel_assistant = function () {
      if (!window.document.getElementById("adroll_nrpa_sdk")) {
        var a = (window.location.hash || "").match(
            "nrpa=([A-Z0-7]+)8([A-F0-9]+Z)"
          ),
          b = Math.floor(new Date().getTime() / 1e3) - 3600;
        (window.sessionStorage.getItem("adroll_nrpa_sdk") ||
          (a && a[1] === window.adroll_adv_id && !(parseInt(a[2], 16) < b))) &&
          this.add_script_element("https://s.adroll.com/j/nrpa.js", {
            id: "adroll_nrpa_sdk",
          });
      }
    };
    f.prototype.set_suspended = function () {
      this._set_global("__adroll_data_suspended", !0);
    };
    f.prototype.is_suspended = function () {
      return this._has_global("__adroll_data_suspended");
    };
    window.__adroll = window.__adroll || new f();
  })();
(function (a) {
  a.adroll_optout = !1;
  "2.0" === a.adroll_version
    ? a.console &&
      a.console.debug &&
      a.console.debug("Both the NextRoll v1 and v2 pixel detected?")
    : ((a.adroll_ext_network = null),
      (a.adroll_callbacks =
        "undefined" === typeof a.adroll_callbacks ? [] : a.adroll_callbacks),
      a.__adroll.render_pixel_code(a.adroll_adv_id, a.adroll_pix_id));
})(window);

(function (g) {
  var window = this;
  ("use strict");
  var oJa = function (a, b) {
      return g.Nb(a, b);
    },
    j4 = function (a, b, c) {
      a.l.set(b, c);
    },
    k4 = function (a) {
      j4(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ta()).toString(36)
      );
      return a;
    },
    l4 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Vm(a.l, b, c);
    },
    pJa = function (a, b) {
      var c = [];
      g.Si(
        b,
        function (d) {
          try {
            var e = g.Jn.prototype.l.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.In(e) && c.push(d);
        },
        a
      );
      return c;
    },
    qJa = function (a, b) {
      b = pJa(a, b);
      g.Bb(
        b,
        function (c) {
          g.Jn.prototype.remove.call(this, c);
        },
        a
      );
    },
    rJa = function (a) {
      if (a.W) {
        if (a.W.locationOverrideToken)
          return { locationOverrideToken: a.W.locationOverrideToken };
        if (null != a.W.latitudeE7 && null != a.W.longitudeE7)
          return { latitudeE7: a.W.latitudeE7, longitudeE7: a.W.longitudeE7 };
      }
      return null;
    },
    sJa = function (a, b) {
      g.gb(a, b) || a.push(b);
    },
    m4 = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    tJa = function (a, b) {
      b = b instanceof g.Ec ? b : g.Kc(b, /^data:image\//i.test(b));
      a.src = g.Fc(b);
    },
    uJa = function (a) {
      try {
        return g.A.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    vJa = function (a) {
      if (a.rh && "function" == typeof a.rh) return a.rh();
      if ("string" === typeof a) return a.split("");
      if (g.Na(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.Kb(a);
    },
    wJa = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.Na(a) || "string" === typeof a) g.Bb(a, b, void 0);
      else {
        if (a.Ai && "function" == typeof a.Ai) var c = a.Ai();
        else if (a.rh && "function" == typeof a.rh) c = void 0;
        else if (g.Na(a) || "string" === typeof a) {
          c = [];
          for (var d = a.length, e = 0; e < d; e++) c.push(e);
        } else c = g.Lb(a);
        d = vJa(a);
        e = d.length;
        for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
      }
    },
    xJa = function (a, b, c, d) {
      var e = new g.Jm(null, void 0);
      a && g.Km(e, a);
      b && g.Lm(e, b);
      c && g.Mm(e, c);
      d && (e.J = d);
      return e;
    },
    n4 = function () {},
    o4 = function (a, b) {
      g.Bq[a] = !0;
      var c = g.zq();
      c && c.publish.apply(c, arguments);
      g.Bq[a] = !1;
    },
    p4 = function (a) {
      this.app = this.name = this.id = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.Gm();
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        yJa(this, a.capabilities || ""),
        zJa(this, a.experiments || ""));
    },
    yJa = function (a, b) {
      a.capabilities.clear();
      g.Ke(b.split(","), g.Ra(oJa, AJa)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    zJa = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    q4 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    r4 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    BJa = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    CJa = function (a) {
      return new q4(a);
    },
    DJa = function (a) {
      return Array.isArray(a) ? g.Pc(a, CJa) : [];
    },
    s4 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    t4 = function (a) {
      return Array.isArray(a) ? "[" + g.Pc(a, s4).join(",") + "]" : "null";
    },
    u4 = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    EJa = function (a) {
      return g.Pc(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    v4 = function (a, b) {
      return g.db(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    w4 = function (a, b) {
      return g.db(a, function (c) {
        return r4(c, b);
      });
    },
    FJa = function () {
      var a = (0, g.Gu)();
      a && qJa(a, a.i.Bl(!0));
    },
    x4 = function () {
      var a = g.Ju("yt-remote-connected-devices") || [];
      g.yb(a);
      return a;
    },
    GJa = function (a) {
      if (g.ib(a)) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Pc(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    HJa = function (a) {
      g.Iu("yt-remote-connected-devices", a, 86400);
    },
    z4 = function () {
      if (y4) return y4;
      var a = g.Ju("yt-remote-device-id");
      a || ((a = u4()), g.Iu("yt-remote-device-id", a, 31536e3));
      for (var b = x4(), c = 1, d = a; g.gb(b, d); ) c++, (d = a + "#" + c);
      return (y4 = d);
    },
    A4 = function () {
      var a = x4(),
        b = z4();
      g.gb(a, b);
      g.Lu() && g.Ab(a, b);
      a = GJa(a);
      if (g.ib(a))
        try {
          g.ro("remote_sid");
        } catch (c) {}
      else
        try {
          g.po("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    IJa = function () {
      return g.Ju("yt-remote-session-browser-channel");
    },
    JJa = function () {
      return g.Ju("yt-remote-local-screens") || [];
    },
    KJa = function () {
      g.Iu("yt-remote-lounge-token-expiration", !0, 86400);
    },
    LJa = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Pc(JJa(), function (d) {
          return d.loungeToken;
        }),
        c = g.Pc(a, function (d) {
          return d.loungeToken;
        });
      g.Zg(c, function (d) {
        return !g.gb(b, d);
      }) && KJa();
      g.Iu("yt-remote-local-screens", a, 31536e3);
    },
    MJa = function (a, b) {
      g.Iu("yt-remote-session-browser-channel", a);
      g.Iu("yt-remote-session-screen-id", b);
      a = x4();
      b = z4();
      g.gb(a, b) || a.push(b);
      HJa(a);
      A4();
    },
    B4 = function (a) {
      a ||
        (g.Ku("yt-remote-session-screen-id"),
        g.Ku("yt-remote-session-video-id"));
      A4();
      a = x4();
      g.lb(a, z4());
      HJa(a);
    },
    NJa = function () {
      if (!C4) {
        var a = g.Tn();
        a && (C4 = new g.Dn(a));
      }
    },
    OJa = function () {
      NJa();
      return C4 ? !!C4.get("yt-remote-use-staging-server") : !1;
    },
    D4 = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    PJa = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    QJa = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    E4 = function (a) {
      a.length
        ? RJa(a.shift(), function () {
            E4(a);
          })
        : F4();
    },
    SJa = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    RJa = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.jd(d, g.ag(a));
      (document.head || document.documentElement).appendChild(d);
    },
    TJa = function () {
      var a = D4(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    F4 = function () {
      var a = QJa();
      a && a(!1, "No cast extension found");
    },
    G4 = function () {
      if (UJa) {
        var a = 2,
          b = QJa(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        RJa(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          F4,
          c
        );
      }
    },
    VJa = function () {
      G4();
      var a = TJa();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      E4(a);
    },
    XJa = function () {
      G4();
      var a = TJa();
      a.push.apply(a, g.ma(WJa.map(SJa)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      E4(a);
    },
    H4 = function (a, b, c) {
      g.F.call(this);
      this.I = null != c ? (0, g.C)(a, c) : a;
      this.Bg = b;
      this.C = (0, g.C)(this.EM, this);
      this.i = !1;
      this.l = 0;
      this.u = this.Db = null;
      this.B = [];
    },
    I4 = function (a, b, c) {
      g.F.call(this);
      this.B = null != c ? a.bind(c) : a;
      this.Bg = b;
      this.u = null;
      this.i = !1;
      this.l = 0;
      this.Db = null;
    },
    J4 = function (a) {
      a.Db = g.Em(function () {
        a.Db = null;
        a.i && !a.l && ((a.i = !1), J4(a));
      }, a.Bg);
      var b = a.u;
      a.u = null;
      a.B.apply(null, b);
    },
    K4 = function (a) {
      if (g.A.JSON)
        try {
          return g.A.JSON.parse(a);
        } catch (b) {}
      return uJa(a);
    },
    L4 = function () {},
    M4 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.A.setTimeout(function () {
        a();
      }, b);
    },
    O4 = function (a) {
      N4.dispatchEvent(new YJa(N4, a));
    },
    YJa = function (a, b) {
      g.Al.call(this, "statevent", a);
      this.stat = b;
    },
    P4 = function () {},
    ZJa = function () {},
    aKa = function (a) {
      return (a = $Ja(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    $Ja = function (a) {
      if (
        !a.l &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.l = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
        );
      }
      return a.l;
    },
    Q4 = function (a, b, c, d) {
      this.i = a;
      this.l = b;
      this.L = c;
      this.J = d || 1;
      this.C = 45e3;
      this.B = new g.x_(this);
      this.u = new g.Dm();
      this.u.setInterval(250);
    },
    cKa = function (a, b, c) {
      a.Xr = 1;
      a.Gm = k4(b.clone());
      a.Hp = c;
      a.I = !0;
      bKa(a, null);
    },
    R4 = function (a, b, c, d, e) {
      a.Xr = 1;
      a.Gm = k4(b.clone());
      a.Hp = null;
      a.I = c;
      e && (a.OJ = !1);
      bKa(a, d);
    },
    bKa = function (a, b) {
      a.Or = Date.now();
      S4(a);
      a.Ln = a.Gm.clone();
      l4(a.Ln, "t", a.J);
      a.Cv = 0;
      a.tf = a.i.qA(a.i.Xu() ? b : null);
      0 < a.Bz && (a.Nx = new I4((0, g.C)(a.FK, a, a.tf), a.Bz));
      a.B.Na(a.tf, "readystatechange", a.US);
      b = a.Yn ? g.Vb(a.Yn) : {};
      a.Hp
        ? ((a.Iy = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.tf.send(a.Ln, a.Iy, a.Hp, b))
        : ((a.Iy = "GET"),
          a.OJ && !g.Ae && (b.Connection = "close"),
          a.tf.send(a.Ln, a.Iy, null, b));
      a.i.vj(1);
    },
    fKa = function (a, b, c) {
      for (var d = !0; !a.Io && a.Cv < c.length; ) {
        var e = dKa(a, c);
        if (e == T4) {
          4 == b && ((a.Am = 4), O4(15), (d = !1));
          break;
        } else if (e == eKa) {
          a.Am = 4;
          O4(16);
          d = !1;
          break;
        } else U4(a, e);
      }
      4 == b && 0 == c.length && ((a.Am = 1), O4(17), (d = !1));
      a.Jj = a.Jj && d;
      d || (V4(a), W4(a));
    },
    dKa = function (a, b) {
      var c = a.Cv,
        d = b.indexOf("\n", c);
      if (-1 == d) return T4;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return eKa;
      d += 1;
      if (d + c > b.length) return T4;
      b = b.substr(d, c);
      a.Cv = d + c;
      return b;
    },
    hKa = function (a, b) {
      a.Or = Date.now();
      S4(a);
      var c = b ? window.location.hostname : "";
      a.Ln = a.Gm.clone();
      j4(a.Ln, "DOMAIN", c);
      j4(a.Ln, "t", a.J);
      try {
        a.Mj = new ActiveXObject("htmlfile");
      } catch (m) {
        V4(a);
        a.Am = 7;
        O4(22);
        W4(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in X4) f = X4[f];
            else if (f in gKa) f = X4[f] = gKa[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = X4[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      c = g.gd(g.gc("b/12014412"), d + "</body></html>");
      a.Mj.open();
      a.Mj.write(g.cd(c));
      a.Mj.close();
      a.Mj.parentWindow.m = (0, g.C)(a.qS, a);
      a.Mj.parentWindow.d = (0, g.C)(a.bJ, a, !0);
      a.Mj.parentWindow.rpcClose = (0, g.C)(a.bJ, a, !1);
      c = a.Mj.createElement("DIV");
      a.Mj.parentWindow.document.body.appendChild(c);
      d = g.Jc(a.Ln.toString());
      d = g.od(g.Fc(d));
      d = g.gd(g.gc("b/12014412"), '<iframe src="' + d + '"></iframe>');
      g.hd(c, d);
      a.i.vj(1);
    },
    S4 = function (a) {
      a.DD = Date.now() + a.C;
      iKa(a, a.C);
    },
    iKa = function (a, b) {
      if (null != a.hs) throw Error("WatchDog timer not null");
      a.hs = M4((0, g.C)(a.yS, a), b);
    },
    Y4 = function (a) {
      a.hs && (g.A.clearTimeout(a.hs), (a.hs = null));
    },
    W4 = function (a) {
      a.i.EE() || a.Io || a.i.Pv(a);
    },
    V4 = function (a) {
      Y4(a);
      g.ui(a.Nx);
      a.Nx = null;
      a.u.stop();
      g.$Da(a.B);
      if (a.tf) {
        var b = a.tf;
        a.tf = null;
        b.abort();
        b.dispose();
      }
      a.Mj && (a.Mj = null);
    },
    U4 = function (a, b) {
      try {
        a.i.TI(a, b), a.i.vj(4);
      } catch (c) {}
    },
    kKa = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        jKa(a, b, function (h) {
          h
            ? c(!0)
            : g.A.setTimeout(function () {
                kKa(a, b, c, d, f);
              }, f);
        });
      }
    },
    jKa = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          Z4(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          Z4(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          Z4(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          Z4(d), c(!1);
        } catch (e) {}
      };
      g.A.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      tJa(d, a);
    },
    Z4 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    $4 = function (a) {
      g.Ul.call(this);
      this.headers = new g.Gm();
      this.va = a || null;
      this.B = !1;
      this.ra = this.i = null;
      this.Ma = this.W = "";
      this.I = 0;
      this.u = "";
      this.C = this.Aa = this.L = this.Ca = !1;
      this.J = 0;
      this.X = null;
      this.Ra = "";
      this.Y = this.Ha = !1;
    },
    lKa = function (a) {
      return (
        g.ye &&
        g.$d(9) &&
        "number" === typeof a.timeout &&
        void 0 !== a.ontimeout
      );
    },
    mKa = function (a) {
      return "content-type" == a.toLowerCase();
    },
    oKa = function (a, b) {
      a.B = !1;
      a.i && ((a.C = !0), a.i.abort(), (a.C = !1));
      a.u = b;
      a.I = 5;
      nKa(a);
      a5(a);
    },
    nKa = function (a) {
      a.Ca ||
        ((a.Ca = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    },
    qKa = function (a) {
      if (a.B && "undefined" != typeof g.B_)
        if (a.ra[1] && 4 == b5(a) && 2 == a.getStatus())
          c5(a, "Local request error detected and ignored");
        else if (a.L && 4 == b5(a)) g.Em(a.QI, 0, a);
        else if ((a.dispatchEvent("readystatechange"), a.isComplete())) {
          c5(a, "Request complete");
          a.B = !1;
          try {
            var b = a.getStatus();
            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = !0;
                break a;
              default:
                c = !1;
            }
            var d;
            if (!(d = c)) {
              var e;
              if ((e = 0 === b)) {
                var f = g.yd(1, String(a.W));
                if (!f && g.A.self && g.A.self.location) {
                  var h = g.A.self.location.protocol;
                  f = h.substr(0, h.length - 1);
                }
                e = !pKa.test(f ? f.toLowerCase() : "");
              }
              d = e;
            }
            if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
              a.I = 6;
              try {
                var l = 2 < b5(a) ? a.i.statusText : "";
              } catch (m) {
                l = "";
              }
              a.u = l + " [" + a.getStatus() + "]";
              nKa(a);
            }
          } finally {
            a5(a);
          }
        }
    },
    a5 = function (a, b) {
      if (a.i) {
        rKa(a);
        var c = a.i,
          d = a.ra[0] ? g.Ka : null;
        a.i = null;
        a.ra = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    rKa = function (a) {
      a.i && a.Y && (a.i.ontimeout = null);
      a.X && (g.A.clearTimeout(a.X), (a.X = null));
    },
    b5 = function (a) {
      return a.i ? a.i.readyState : 0;
    },
    d5 = function (a) {
      try {
        return a.i ? a.i.responseText : "";
      } catch (b) {
        return "";
      }
    },
    c5 = function (a, b) {
      return b + " [" + a.Ma + " " + a.W + " " + a.getStatus() + "]";
    },
    sKa = function (a) {
      this.i = a;
      this.l = new L4();
    },
    tKa = function (a) {
      var b = e5(a.i, a.Ts, "/mail/images/cleardot.gif");
      k4(b);
      kKa(b.toString(), 5e3, (0, g.C)(a.CN, a), 3, 2e3);
      a.vj(1);
    },
    g5 = function (a) {
      var b = a.i.L;
      if (null != b)
        O4(5), b ? (O4(11), f5(a.i, a, !1)) : (O4(12), f5(a.i, a, !0));
      else if (
        ((a.Eh = new Q4(a, void 0, void 0, void 0)),
        (a.Eh.Yn = a.Cz),
        (b = a.i),
        (b = e5(b, b.Xu() ? a.Js : null, a.Dz)),
        O4(5),
        !g.ye || g.ae(10))
      )
        l4(b, "TYPE", "xmlhttp"), R4(a.Eh, b, !1, a.Js, !1);
      else {
        l4(b, "TYPE", "html");
        var c = a.Eh;
        a = !!a.Js;
        c.Xr = 3;
        c.Gm = k4(b.clone());
        hKa(c, a);
      }
    },
    h5 = function (a, b, c) {
      this.bb = 1;
      this.i = [];
      this.u = [];
      this.B = new L4();
      this.J = a || null;
      this.L = null != b ? b : null;
      this.C = c || !1;
    },
    uKa = function (a, b) {
      this.i = a;
      this.map = b;
      this.context = null;
    },
    vKa = function (a, b, c, d) {
      g.Al.call(this, "timingevent", a);
      this.size = b;
      this.Qu = d;
    },
    wKa = function (a) {
      g.Al.call(this, "serverreachability", a);
    },
    zKa = function (a) {
      xKa(a);
      if (3 == a.bb) {
        var b = a.uu++,
          c = a.ow.clone();
        j4(c, "SID", a.l);
        j4(c, "RID", b);
        j4(c, "TYPE", "terminate");
        i5(a, c);
        b = new Q4(a, a.l, b, void 0);
        b.Xr = 2;
        b.Gm = k4(c.clone());
        tJa(new Image(), b.Gm.toString());
        b.Or = Date.now();
        S4(b);
      }
      yKa(a);
    },
    AKa = function (a) {
      a.XN(1, 0);
      a.ow = e5(a, null, a.Ez);
      j5(a);
    },
    xKa = function (a) {
      a.Km && (a.Km.abort(), (a.Km = null));
      a.Me && (a.Me.cancel(), (a.Me = null));
      a.Dl && (g.A.clearTimeout(a.Dl), (a.Dl = null));
      k5(a);
      a.oh && (a.oh.cancel(), (a.oh = null));
      a.Sm && (g.A.clearTimeout(a.Sm), (a.Sm = null));
    },
    BKa = function (a, b) {
      if (0 == a.bb)
        throw Error("Invalid operation: sending map when state is closed");
      a.i.push(new uKa(a.rP++, b));
      (2 != a.bb && 3 != a.bb) || j5(a);
    },
    CKa = function (a) {
      var b = 0;
      a.Me && b++;
      a.oh && b++;
      return b;
    },
    j5 = function (a) {
      a.oh || a.Sm || ((a.Sm = M4((0, g.C)(a.ZI, a), 0)), (a.Vq = 0));
    },
    EKa = function (a, b) {
      if (1 == a.bb) {
        if (!b) {
          a.uu = Math.floor(1e5 * Math.random());
          b = a.uu++;
          var c = new Q4(a, "", b, void 0);
          c.Yn = a.gk;
          var d = l5(a),
            e = a.ow.clone();
          j4(e, "RID", b);
          j4(e, "CVER", "1");
          i5(a, e);
          cKa(c, e, d);
          a.oh = c;
          a.bb = 2;
        }
      } else 3 == a.bb && (b ? DKa(a, b) : 0 == a.i.length || a.oh || DKa(a));
    },
    DKa = function (a, b) {
      if (b)
        if (6 < a.Jo) {
          a.i = a.u.concat(a.i);
          a.u.length = 0;
          var c = a.uu - 1;
          b = l5(a);
        } else (c = b.L), (b = b.Hp);
      else (c = a.uu++), (b = l5(a));
      var d = a.ow.clone();
      j4(d, "SID", a.l);
      j4(d, "RID", c);
      j4(d, "AID", a.zr);
      i5(a, d);
      c = new Q4(a, a.l, c, a.Vq + 1);
      c.Yn = a.gk;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.oh = c;
      cKa(c, d, b);
    },
    i5 = function (a, b) {
      a.vg &&
        (a = a.vg.yG()) &&
        g.Db(a, function (c, d) {
          j4(b, d, c);
        });
    },
    l5 = function (a) {
      var b = Math.min(a.i.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Jo && 0 < b) {
        var d = a.i[0].i;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { fq: e.fq }, f++) {
        e.fq = a.i[f].i;
        var h = a.i[f].map;
        e.fq = 6 >= a.Jo ? f : e.fq - d;
        try {
          g.Db(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.fq + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.fq + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.u = a.u.concat(a.i.splice(0, b));
      return c.join("&");
    },
    FKa = function (a) {
      a.Me ||
        a.Dl ||
        ((a.I = 1), (a.Dl = M4((0, g.C)(a.YI, a), 0)), (a.Iq = 0));
    },
    m5 = function (a) {
      if (a.Me || a.Dl || 3 <= a.Iq) return !1;
      a.I++;
      a.Dl = M4((0, g.C)(a.YI, a), GKa(a, a.Iq));
      a.Iq++;
      return !0;
    },
    f5 = function (a, b, c) {
      a.Gy = c;
      a.hk = b.ql;
      a.C || AKa(a);
    },
    k5 = function (a) {
      null != a.Ro && (g.A.clearTimeout(a.Ro), (a.Ro = null));
    },
    GKa = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    n5 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.vg && (c = null);
        var d = (0, g.C)(a.xT, a);
        c || ((c = new g.Jm("//www.google.com/images/cleardot.gif")), k4(c));
        jKa(c.toString(), 1e4, d);
      } else O4(2);
      HKa(a, b);
    },
    HKa = function (a, b) {
      a.bb = 0;
      a.vg && a.vg.PF(b);
      yKa(a);
      xKa(a);
    },
    yKa = function (a) {
      a.bb = 0;
      a.hk = -1;
      if (a.vg)
        if (0 == a.u.length && 0 == a.i.length) a.vg.dA();
        else {
          g.pb(a.u);
          var b = g.pb(a.i);
          a.u.length = 0;
          a.i.length = 0;
          a.vg.dA(b);
        }
    },
    e5 = function (a, b, c) {
      var d = g.Rm(c);
      if ("" != d.i) b && g.Lm(d, b + "." + d.i), g.Mm(d, d.u);
      else {
        var e = window.location;
        d = xJa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.xt &&
        g.Db(a.xt, function (f, h) {
          j4(d, h, f);
        });
      j4(d, "VER", a.Jo);
      i5(a, d);
      return d;
    },
    IKa = function () {},
    JKa = function () {
      this.i = [];
      this.l = [];
    },
    KKa = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    o5 = function (a, b) {
      g.F.call(this);
      this.i = new g.J(this.iS, 0, this);
      g.H(this, this.i);
      this.Bg = 5e3;
      this.l = 0;
      if ("function" === typeof a) b && (a = (0, g.C)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.C)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.u = a;
    },
    p5 = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.ra = a;
      this.I = b;
      this.u = new g.Cn();
      this.l = new o5(this.eT, this);
      this.i = null;
      this.X = !1;
      this.C = null;
      this.W = "";
      this.L = this.B = 0;
      this.J = [];
      this.va = c;
      this.Y = d;
      this.Ca = e;
    },
    LKa = function (a) {
      return {
        firstTestResults: [""],
        secondTestResults: !a.i.Gy,
        sessionId: a.i.l,
        arrayId: a.i.zr,
      };
    },
    MKa = function (a, b) {
      a.L = b || 0;
      a.l.stop();
      q5(a);
      a.i && (3 == a.i.getState() && EKa(a.i), zKa(a.i));
      a.L = 0;
    },
    r5 = function (a) {
      return !!a.i && 3 == a.i.getState();
    },
    q5 = function (a) {
      if (a.i) {
        var b = a.Y(),
          c = a.i.gk || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.i.gk = c;
      }
    },
    s5 = function (a) {
      this.port = this.domain = "";
      this.i = "/api/lounge";
      this.l = !0;
      a = a || document.location.href;
      var b = Number(g.yd(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.zd(a) || "";
      a = g.Vc;
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.Ac(a, "10.0") && (this.l = !1));
    },
    t5 = function (a, b) {
      var c = a.i;
      a.l && (c = "https://" + a.domain + a.port + a.i);
      return g.Kd(c + b, {});
    },
    u5 = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.Ra(a.B, d, !0),
        onError: g.Ra(a.u, e),
        onTimeout: g.Ra(a.C, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.gp(b, a);
    },
    QKa = function () {
      var a = NKa;
      OKa();
      v5.push(a);
      PKa();
    },
    w5 = function (a, b) {
      OKa();
      var c = RKa(a, String(b));
      g.ib(v5)
        ? SKa(c)
        : (PKa(),
          g.Bb(v5, function (d) {
            d(c);
          }));
    },
    OKa = function () {
      v5 ||
        ((v5 = g.Ja("yt.mdx.remote.debug.handlers_") || []),
        g.Fa("yt.mdx.remote.debug.handlers_", v5, void 0));
    },
    SKa = function (a) {
      var b = (x5 + 1) % 50;
      x5 = b;
      y5[b] = a;
      z5 || (z5 = 49 == b);
    },
    PKa = function () {
      var a = v5;
      if (y5[0]) {
        var b = z5 ? x5 : -1;
        do {
          b = (b + 1) % 50;
          var c = y5[b];
          g.Bb(a, function (d) {
            d(c);
          });
        } while (b != x5);
        y5 = Array(50);
        x5 = -1;
        z5 = !1;
      }
    },
    RKa = function (a, b) {
      var c = (Date.now() - TKa) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    A5 = function (a) {
      g.P.call(this);
      this.I = a;
      this.screens = [];
    },
    UKa = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    VKa = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Ke(a.screens, function (f) {
        return !!v4(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = UKa(a, b[d]) || c;
      return c;
    },
    WKa = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Ke(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    B5 = function (a, b, c, d, e) {
      g.P.call(this);
      this.u = a;
      this.J = b;
      this.B = c;
      this.I = d;
      this.C = e;
      this.l = 0;
      this.i = null;
      this.Db = NaN;
    },
    D5 = function (a) {
      A5.call(this, "LocalScreenService");
      this.l = a;
      this.i = NaN;
      C5(this);
      this.info("Initializing with " + t4(this.screens));
    },
    XKa = function (a) {
      if (a.screens.length) {
        var b = g.Pc(a.screens, function (d) {
            return d.id;
          }),
          c = t5(a.l, "/pairing/get_lounge_token_batch");
        u5(
          a.l,
          c,
          { screen_ids: b.join(",") },
          (0, g.C)(a.vO, a),
          (0, g.C)(a.uO, a)
        );
      }
    },
    C5 = function (a) {
      if (g.Ao("deprecate_pair_servlet_enabled")) return VKa(a, []);
      var b = DJa(JJa());
      b = g.Ke(b, function (c) {
        return !c.uuid;
      });
      return VKa(a, b);
    },
    E5 = function (a, b) {
      LJa(g.Pc(a.screens, BJa));
      b && KJa();
    },
    G5 = function (a, b) {
      g.P.call(this);
      this.I = b;
      b = (b = g.Ju("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
        var h = d[e].id;
        c[h] = g.gb(b, h);
      }
      this.i = c;
      this.C = a;
      this.u = this.B = NaN;
      this.l = null;
      F5("Initialized with " + g.uj(this.i));
    },
    H5 = function (a, b, c) {
      var d = t5(a.C, "/pairing/get_screen_availability");
      u5(
        a.C,
        d,
        { lounge_token: b.token },
        (0, g.C)(function (e) {
          e = e.screens || [];
          for (var f = 0, h = e.length; f < h; ++f)
            if (e[f].loungeToken == b.token) {
              c("online" == e[f].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.C)(function () {
          c(!1);
        }, a)
      );
    },
    I5 = function (a, b) {
      a: if (m4(b) != m4(a.i)) var c = !1;
      else {
        c = g.Lb(b);
        for (var d = 0, e = c.length; d < e; ++d)
          if (!a.i[c[d]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (F5("Updated online screens: " + g.uj(a.i)),
        (a.i = b),
        a.V("screenChange"));
      YKa(a);
    },
    J5 = function (a) {
      isNaN(a.u) || g.bp(a.u);
      a.u = g.$o((0, g.C)(a.DC, a), 0 < a.B && a.B < g.Ta() ? 2e4 : 1e4);
    },
    F5 = function (a) {
      w5("OnlineScreenService", a);
    },
    ZKa = function (a) {
      var b = {};
      g.Bb(a.I(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.qe("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    YKa = function (a) {
      a = g.Lb(
        g.Eb(a.i, function (b) {
          return b;
        })
      );
      g.yb(a);
      a.length
        ? g.Iu("yt-remote-online-screen-ids", a.join(","), 60)
        : g.Ku("yt-remote-online-screen-ids");
    },
    K5 = function (a) {
      A5.call(this, "ScreenService");
      this.B = a;
      this.i = this.l = null;
      this.u = [];
      this.C = {};
      $Ka(this);
    },
    bLa = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.C[b]);
      var h = a.Oh();
      if ((h = (c ? w4(h, c) : null) || w4(h, b))) {
        h.uuid = b;
        var l = L5(a, h);
        H5(a.i, l, function (m) {
          e(m ? l : null);
        });
      } else
        c
          ? aLa(
              a,
              c,
              (0, g.C)(function (m) {
                var n = L5(
                  this,
                  new q4({
                    name: d,
                    screenId: c,
                    loungeToken: m,
                    dialId: b || "",
                  })
                );
                H5(this.i, n, function (p) {
                  e(p ? n : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    cLa = function (a, b) {
      for (var c = 0, d = a.screens.length; c < d; ++c)
        if (a.screens[c].name == b) return a.screens[c];
      return null;
    },
    dLa = function (a, b, c) {
      H5(a.i, b, c);
    },
    aLa = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.gp(t5(a.B, "/pairing/get_lounge_token_batch"), e);
    },
    eLa = function (a) {
      a.screens = a.l.Oh();
      var b = a.C,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = 0;
      for (d = a.screens.length; b < d; ++b) {
        var e = a.screens[b];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + t4(a.screens));
    },
    $Ka = function (a) {
      M5(a);
      a.l = new D5(a.B);
      a.l.subscribe("screenChange", (0, g.C)(a.BO, a));
      eLa(a);
      a.u = DJa(g.Ju("yt-remote-automatic-screen-cache") || []);
      M5(a);
      a.info("Initializing automatic screens: " + t4(a.u));
      a.i = new G5(a.B, (0, g.C)(a.Oh, a, !0));
      a.i.subscribe(
        "screenChange",
        (0, g.C)(function () {
          this.V("onlineScreenChange");
        }, a)
      );
    },
    L5 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = w4(a.u, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.u.push(b),
          fLa(a));
      M5(a);
      a.C[b.uuid] = b.id;
      g.Iu("yt-remote-device-id-map", a.C, 31536e3);
      return b;
    },
    fLa = function (a) {
      a = g.Ke(a.u, function (b) {
        return "shortLived" != b.idType;
      });
      g.Iu("yt-remote-automatic-screen-cache", g.Pc(a, BJa));
    },
    M5 = function (a) {
      a.C = g.Ju("yt-remote-device-id-map") || {};
    },
    N5 = function (a, b, c) {
      g.P.call(this);
      this.Ca = c;
      this.u = a;
      this.i = b;
      this.B = null;
    },
    O5 = function (a, b) {
      a.B = b;
      a.V("sessionScreen", a.B);
    },
    gLa = function (a, b) {
      a.B && ((a.B.token = b), L5(a.u, a.B));
      a.V("sessionScreen", a.B);
    },
    P5 = function (a, b) {
      w5(a.Ca, b);
    },
    Q5 = function (a, b, c) {
      N5.call(this, a, b, "CastSession");
      var d = this;
      this.Aa = c;
      this.l = null;
      this.Y = (0, g.C)(this.JM, this);
      this.va = (0, g.C)(this.CS, this);
      this.X = g.$o(function () {
        hLa(d, null);
      }, 12e4);
      this.J = this.C = this.I = this.L = 0;
      this.ra = !1;
      this.W = "unknown";
    },
    R5 = function (a, b) {
      g.bp(a.J);
      a.J = 0;
      0 == b
        ? iLa(a)
        : (a.J = g.$o(function () {
            iLa(a);
          }, b));
    },
    iLa = function (a) {
      jLa(a, "getLoungeToken");
      g.bp(a.C);
      a.C = g.$o(function () {
        kLa(a, null);
      }, 3e4);
    },
    jLa = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.uj(void 0));
      var c = {};
      c.type = b;
      a.l
        ? a.l.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            g.Ka,
            (0, g.C)(function () {
              P5(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : P5(a, "Sending yt message without session: " + g.uj(c));
    },
    S5 = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.getScreen() && a.getScreen().id == b) ||
            a.NG(
              b,
              function (c) {
                O5(a, c);
              },
              function () {
                return a.Xg();
              },
              5
            ))
        : a.Xg(Error("Waiting for session status timed out."));
    },
    mLa = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new q4(b);
      lLa(
        a,
        d,
        function (e) {
          e
            ? ((a.ra = !0), L5(a.u, d), O5(a, d), (a.W = "unknown"), R5(a, c))
            : (g.Fo(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.Xg());
        },
        5
      );
    },
    hLa = function (a, b) {
      g.bp(a.X);
      a.X = 0;
      b
        ? a.Aa.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.getScreen() && a.getScreen().uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? mLa(
                    a,
                    {
                      name: a.i.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.Fo(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  S5(a, b.screenId)))
            : (g.Fo(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              S5(a, b.screenId))
          : S5(a, b.screenId)
        : a.Xg(Error("Waiting for session status timed out."));
    },
    kLa = function (a, b) {
      g.bp(a.C);
      a.C = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.W = c),
          R5(a, 3e4))
        : (gLa(a, b.loungeToken),
          (a.ra = !1),
          (a.W = "unknown"),
          R5(a, b.loungeTokenRefreshIntervalMs));
    },
    lLa = function (a, b, c, d) {
      g.bp(a.I);
      a.I = 0;
      dLa(a.u, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.$o(function () {
              lLa(a, b, c, d - 1);
            }, 300));
      });
    },
    nLa = function (a) {
      g.bp(a.L);
      a.L = 0;
      g.bp(a.I);
      a.I = 0;
      g.bp(a.X);
      a.X = 0;
      g.bp(a.C);
      a.C = 0;
      g.bp(a.J);
      a.J = 0;
    },
    T5 = function (a, b, c, d) {
      N5.call(this, a, b, "DialSession");
      this.Ha = d;
      this.l = this.L = null;
      this.va = "";
      this.Ma = c;
      this.Da = null;
      this.X = g.Ka;
      this.W = NaN;
      this.Aa = (0, g.C)(this.KM, this);
      this.C = g.Ka;
      this.J = this.I = 0;
      this.Y = !1;
      this.ra = "unknown";
    },
    U5 = function (a) {
      var b;
      return !!(
        a.Ha.enableDialLoungeToken && (null == (b = a.l) ? 0 : b.getDialAppInfo)
      );
    },
    oLa = function (a) {
      a.C = a.u.GE(
        a.va,
        a.i.label,
        a.i.friendlyName,
        U5(a),
        function (b, c) {
          a.C = g.Ka;
          a.Y = !0;
          O5(a, b);
          "shortLived" == b.idType && 0 < c && V5(a, c);
        },
        function (b) {
          a.C = g.Ka;
          a.Xg(b);
        }
      );
    },
    pLa = function (a) {
      var b = {};
      b.pairingCode = a.va;
      b.theme = a.Ma;
      OJa() && (b.env_useStageMdx = 1);
      return g.Id(b);
    },
    W5 = function (a) {
      return new Promise(function (b) {
        a.va = u4();
        if (a.Da) {
          var c = new chrome.cast.DialLaunchResponse(!0, pLa(a));
          b(c);
          oLa(a);
        } else
          (a.X = function () {
            g.bp(a.W);
            a.X = function () {};
            a.W = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, pLa(a));
            b(d);
            oLa(a);
          }),
            (a.W = g.$o(function () {
              a.X();
            }, 100));
      });
    },
    rLa = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new q4(b);
      return new Promise(function (e) {
        qLa(
          a,
          d,
          function (f) {
            f
              ? ((a.Y = !0), L5(a.u, d), O5(a, d), V5(a, c))
              : g.Fo(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : W5(a);
      });
    },
    sLa = function (a, b) {
      var c = a.L.receiver.label,
        d = a.i.friendlyName;
      return new Promise(function (e) {
        bLa(
          a.u,
          c,
          b,
          d,
          function (f) {
            f && f.token && O5(a, f);
            e(f);
          },
          function (f) {
            P5(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : W5(a);
      });
    },
    qLa = function (a, b, c, d) {
      g.bp(a.I);
      a.I = 0;
      dLa(a.u, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.$o(function () {
              qLa(a, b, c, d - 1);
            }, 300));
      });
    },
    V5 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      U5(a) &&
        (g.bp(a.J),
        (a.J = 0),
        0 == b
          ? tLa(a)
          : (a.J = g.$o(function () {
              tLa(a);
            }, b)));
    },
    tLa = function (a) {
      U5(a) &&
        a.l.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.getScreen()) ? void 0 : d.token) ==
                b.loungeToken && (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.ra = c), V5(a, 3e4))
              : ((a.Y = !1),
                (a.ra = "unknown"),
                gLa(a, b.loungeToken),
                V5(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.ra = "noLoungeTokenResponse";
            V5(a, 3e4);
          }
        );
    },
    uLa = function (a) {
      g.bp(a.I);
      a.I = 0;
      g.bp(a.J);
      a.J = 0;
      a.C();
      a.C = function () {};
      g.bp(a.W);
    },
    X5 = function (a, b) {
      N5.call(this, a, b, "ManualSession");
      this.l = g.$o((0, g.C)(this.Ar, this, null), 150);
    },
    Y5 = function (a, b) {
      g.P.call(this);
      this.B = b;
      this.l = a;
      this.L = b.appId || "233637DE";
      this.C = b.theme || "cl";
      this.W = b.disableCastApi || !1;
      this.i = null;
      this.J = !1;
      this.u = [];
      this.I = (0, g.C)(this.yR, this);
    },
    vLa = function (a, b) {
      return b
        ? g.db(
            a.u,
            function (c) {
              return r4(b, c.label);
            },
            a
          )
        : null;
    },
    Z5 = function (a) {
      w5("Controller", a);
    },
    NKa = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    $5 = function (a) {
      return a.J || !!a.u.length || !!a.i;
    },
    a6 = function (a, b, c) {
      b != a.i &&
        (g.ui(a.i),
        (a.i = b)
          ? (c
              ? a.V("yt-remote-cast2-receiver-resumed", b.i)
              : a.V("yt-remote-cast2-receiver-selected", b.i),
            b.subscribe("sessionScreen", (0, g.C)(a.WI, a, b)),
            b.getScreen()
              ? a.V("yt-remote-cast2-session-change", b.getScreen())
              : c && a.i.Ar(null))
          : a.V("yt-remote-cast2-session-change", null));
    },
    wLa = function (a) {
      var b = a.l.FE(),
        c = a.i && a.i.i;
      a = g.Pc(
        b,
        function (d) {
          c && r4(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = vLa(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    BLa = function (a, b, c, d) {
      d.disableCastApi
        ? b6("Cannot initialize because disabled by Mdx config.")
        : xLa()
        ? yLa(b, d) &&
          (c6(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? zLa(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? zLa(a, c)
                  : (d6("Failed to load cast API: " + f),
                    e6(!1),
                    c6(!1),
                    g.Ku("yt-remote-cast-available"),
                    g.Ku("yt-remote-cast-receiver"),
                    ALa(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Mu("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js")
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= D4() && VJa()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? F4()
                : 89 <= D4()
                ? XJa()
                : (G4(), E4(WJa.map(SJa)))))
        : b6("Cannot initialize because not running Chrome");
    },
    ALa = function () {
      b6("dispose");
      var a = f6();
      a && a.dispose();
      g.Fa("yt.mdx.remote.cloudview.instance_", null, void 0);
      CLa(!1);
      g.Eq(g6);
      g6.length = 0;
    },
    h6 = function () {
      return !!g.Ju("yt-remote-cast-installed");
    },
    DLa = function () {
      var a = g.Ju("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    ELa = function () {
      b6("clearCurrentReceiver");
      g.Ku("yt-remote-cast-receiver");
    },
    FLa = function () {
      return h6()
        ? f6()
          ? f6().getCastSession()
          : (d6("getCastSelector: Cast is not initialized."), null)
        : (d6("getCastSelector: Cast API is not installed!"), null);
    },
    j6 = function () {
      h6()
        ? f6()
          ? i6()
            ? (b6("Requesting cast selector."), f6().requestSession())
            : (b6("Wait for cast API to be ready to request the session."),
              g6.push(g.Dq("yt-remote-cast2-api-ready", j6)))
          : d6("requestCastSelector: Cast is not initialized.")
        : d6("requestCastSelector: Cast API is not installed!");
    },
    k6 = function (a, b) {
      i6()
        ? f6().setConnectedScreenStatus(a, b)
        : d6("setConnectedScreenStatus called before ready.");
    },
    xLa = function () {
      var a = 0 <= g.Vc.search(/ (CrMo|Chrome|CriOS)\//);
      return g.qB || a;
    },
    GLa = function (a, b) {
      f6().init(a, b);
    },
    yLa = function (a, b) {
      var c = !1;
      f6() ||
        ((a = new Y5(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.Iu("yt-remote-cast-available", d);
          o4("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          b6("onReceiverSelected: " + d.friendlyName);
          g.Iu("yt-remote-cast-receiver", d);
          o4("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          b6("onReceiverResumed: " + d.friendlyName);
          g.Iu("yt-remote-cast-receiver", d);
          o4("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          b6("onSessionChange: " + s4(d));
          d || g.Ku("yt-remote-cast-receiver");
          o4("yt-remote-cast2-session-change", d);
        }),
        g.Fa("yt.mdx.remote.cloudview.instance_", a, void 0),
        (c = !0));
      b6("cloudview.createSingleton_: " + c);
      return c;
    },
    f6 = function () {
      return g.Ja("yt.mdx.remote.cloudview.instance_");
    },
    zLa = function (a, b) {
      e6(!0);
      c6(!1);
      GLa(a, function (c) {
        c
          ? (CLa(!0), g.Fq("yt-remote-cast2-api-ready"))
          : (d6("Failed to initialize cast API."),
            e6(!1),
            g.Ku("yt-remote-cast-available"),
            g.Ku("yt-remote-cast-receiver"),
            ALa());
        b(c);
      });
    },
    b6 = function (a) {
      w5("cloudview", a);
    },
    d6 = function (a) {
      w5("cloudview", a);
    },
    e6 = function (a) {
      b6("setCastInstalled_ " + a);
      g.Iu("yt-remote-cast-installed", a);
    },
    i6 = function () {
      return !!g.Ja("yt.mdx.remote.cloudview.apiReady_");
    },
    CLa = function (a) {
      b6("setApiReady_ " + a);
      g.Fa("yt.mdx.remote.cloudview.apiReady_", a, void 0);
    },
    c6 = function (a) {
      g.Fa("yt.mdx.remote.cloudview.initializing_", a, void 0);
    },
    l6 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.I = this.J = 0;
      this.trackData = null;
      this.hasNext = this.Gk = !1;
      this.L = this.C = this.i = this.B = 0;
      this.u = NaN;
      this.l = !1;
      this.reset(a);
    },
    m6 = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.Gk = !1;
      a.hasNext = !1;
      a.J = 0;
      a.I = g.Ta();
      a.B = 0;
      a.i = 0;
      a.C = 0;
      a.L = 0;
      a.u = NaN;
      a.l = !1;
    },
    n6 = function (a) {
      return a.qc() ? (g.Ta() - a.I) / 1e3 : 0;
    },
    o6 = function (a, b) {
      a.J = b;
      a.I = g.Ta();
    },
    p6 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.Ta() - a.I) / 1e3 + a.J;
        case -1e3:
          return 0;
      }
      return a.J;
    },
    q6 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && m6(a);
    },
    r6 = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.Wb(a.trackData);
      b.hasPrevious = a.Gk;
      b.hasNext = a.hasNext;
      b.playerTime = a.J;
      b.playerTimeAt = a.I;
      b.seekableStart = a.B;
      b.seekableEnd = a.i;
      b.duration = a.C;
      b.loadedTime = a.L;
      b.liveIngestionTime = a.u;
      return b;
    },
    t6 = function (a, b) {
      g.P.call(this);
      this.bb = 0;
      this.u = a;
      this.C = [];
      this.B = new JKa();
      this.l = this.i = null;
      this.L = (0, g.C)(this.aQ, this);
      this.I = (0, g.C)(this.xu, this);
      this.J = (0, g.C)(this.ZP, this);
      this.W = (0, g.C)(this.hQ, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.PC, this), HLa(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.PC(c)
          : g.$o(
              (0, g.C)(function () {
                this.PC(c);
              }, this),
              0
            ));
      (a = FLa()) && s6(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.W);
    },
    u6 = function (a) {
      return new l6(a.u.getPlayerContextData());
    },
    HLa = function (a) {
      g.Bb(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(
          " "
        ),
        function (b) {
          this.C.push(this.u.subscribe(b, g.Ra(this.vR, b), this));
        },
        a
      );
    },
    ILa = function (a) {
      g.Bb(
        a.C,
        function (b) {
          this.u.unsubscribeByKey(b);
        },
        a
      );
      a.C.length = 0;
    },
    v6 = function (a) {
      return 1 == a.getState();
    },
    w6 = function (a, b) {
      var c = a.B;
      50 > c.i.length + c.l.length && a.B.l.push(b);
    },
    y6 = function (a, b, c) {
      var d = u6(a);
      o6(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      x6(a, d);
    },
    z6 = function (a, b, c) {
      a.u.sendMessage(b, c);
    },
    x6 = function (a, b) {
      ILa(a);
      a.u.setPlayerContextData(r6(b));
      HLa(a);
    },
    s6 = function (a, b) {
      a.l &&
        (a.l.removeUpdateListener(a.L),
        a.l.removeMediaListener(a.I),
        a.xu(null));
      a.l = b;
      a.l &&
        (w5("CP", "Setting cast session: " + a.l.sessionId),
        a.l.addUpdateListener(a.L),
        a.l.addMediaListener(a.I),
        a.l.media.length && a.xu(a.l.media[0]));
    },
    JLa = function (a) {
      var b = a.i.media,
        c = a.i.customData;
      if (b && c) {
        var d = u6(a);
        b.contentId != d.videoId &&
          w5("CP", "Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        o6(d, a.i.getEstimatedTime());
        x6(a, d);
      } else w5("CP", "No cast media video. Ignoring state update.");
    },
    A6 = function (a, b, c) {
      return (0, g.C)(function (d) {
        this.qe(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.qe("Retrying " + b + " using MDx browser channel."),
          z6(this, b, c));
      }, a);
    },
    B6 = function (a, b, c) {
      g.P.call(this);
      this.C = NaN;
      this.ra = !1;
      this.L = this.J = this.X = this.Y = NaN;
      this.W = [];
      this.B = this.I = this.u = this.hc = this.i = null;
      this.Ca = a;
      this.W.push(g.Fp(window, "beforeunload", (0, g.C)(this.rO, this)));
      this.l = [];
      this.hc = new l6();
      this.Aa = b.id;
      this.va = b.idType;
      this.i = KLa(this, c);
      this.i.subscribe("handlerOpened", this.eQ, this);
      this.i.subscribe("handlerClosed", this.bQ, this);
      this.i.subscribe("handlerError", this.cQ, this);
      this.i.subscribe("handlerMessage", this.dQ, this);
      this.i.by(b.token);
      this.subscribe(
        "remoteQueueChange",
        function () {
          var d = this.hc.videoId;
          g.Lu() && g.Iu("yt-remote-session-video-id", d);
        },
        this
      );
    },
    C6 = function (a) {
      w5("conn", a);
    },
    KLa = function (a, b) {
      return new p5(
        t5(a.Ca, "/bc"),
        b,
        !1,
        function () {
          return a.KE();
        },
        "shortLived" == a.va
      );
    },
    D6 = function (a, b) {
      a.V("proxyStateChange", b);
    },
    LLa = function (a) {
      a.C = g.$o(
        (0, g.C)(function () {
          C6("Connecting timeout");
          this.Rq(1);
        }, a),
        2e4
      );
    },
    E6 = function (a) {
      g.bp(a.C);
      a.C = NaN;
    },
    F6 = function (a) {
      g.bp(a.Y);
      a.Y = NaN;
    },
    MLa = function (a) {
      G6(a);
      a.X = g.$o(
        (0, g.C)(function () {
          H6(this, "getNowPlaying");
        }, a),
        2e4
      );
    },
    G6 = function (a) {
      g.bp(a.X);
      a.X = NaN;
    },
    OLa = function (a, b) {
      b && (E6(a), F6(a));
      var c = r5(a.i) && isNaN(a.C);
      b == c
        ? b && (D6(a, 1), H6(a, "getSubtitlesTrack"))
        : b
        ? (a.MG() && a.hc.reset(), D6(a, 1), H6(a, "getNowPlaying"), NLa(a))
        : a.Rq(1);
    },
    PLa = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.hc.videoId &&
        (g.Rb(b.params) ? (a.hc.trackData = null) : (a.hc.trackData = b.params),
        a.V("remotePlayerChange"));
    },
    QLa = function (a, b) {
      var c = b.params.videoId || b.params.video_id,
        d = parseInt(b.params.currentIndex, 10);
      a.hc.listId = b.params.listId || a.hc.listId;
      q6(a.hc, c, d);
      a.V("remoteQueueChange");
    },
    SLa = function (a, b) {
      b.params = b.params || {};
      QLa(a, b);
      RLa(a, b);
      a.V("autoplayDismissed");
    },
    RLa = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      o6(a.hc, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.hc.playerState && (c = -1e3);
      a.hc.playerState = c;
      c = Number(b.params.loadedTime);
      a.hc.L = isNaN(c) ? 0 : c;
      c = Number(b.params.duration);
      a.hc.C = isNaN(c) ? 0 : c;
      c = a.hc;
      var d = Number(b.params.liveIngestionTime);
      c.u = d;
      c.l = isNaN(d) ? !1 : !0;
      c = a.hc;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.B = isNaN(d) ? 0 : d;
      c.i = isNaN(b) ? 0 : b;
      1 == a.hc.playerState ? MLa(a) : G6(a);
      a.V("remotePlayerChange");
    },
    TLa = function (a, b) {
      if (-1e3 != a.hc.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.hc.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        o6(a.hc, isNaN(b) ? 0 : b);
        a.V("remotePlayerChange");
      }
    },
    ULa = function (a, b) {
      var c = "true" == b.params.muted;
      a.hc.volume = parseInt(b.params.volume, 10);
      a.hc.muted = c;
      a.V("remotePlayerChange");
    },
    VLa = function (a, b) {
      a.I = b.params.videoId;
      a.V("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    WLa = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.hc.Gk = "true" == b.params.hasPrevious;
      a.hc.hasNext = c;
      a.V("previousNextChange");
    },
    NLa = function (a) {
      g.bp(a.L);
      a.L = g.$o((0, g.C)(a.Rq, a, 1), 864e5);
    },
    H6 = function (a, b, c) {
      c
        ? C6("Sending: action=" + b + ", params=" + g.uj(c))
        : C6("Sending: action=" + b);
      a.i.sendMessage(b, c);
    },
    I6 = function (a) {
      A5.call(this, "ScreenServiceProxy");
      this.Ag = a;
      this.i = [];
      this.i.push(this.Ag.$_s("screenChange", (0, g.C)(this.PM, this)));
      this.i.push(this.Ag.$_s("onlineScreenChange", (0, g.C)(this.cR, this)));
    },
    $La = function (a, b) {
      NJa();
      if (!C4 || !C4.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.M("MDX_CONFIG") || b;
        FJa();
        A4();
        J6 ||
          ((J6 = new s5(b ? b.loungeApiHost : void 0)),
          OJa() && (J6.i = "/api/loungedev"));
        K6 ||
          ((K6 = g.Ja("yt.mdx.remote.deferredProxies_") || []),
          g.Fa("yt.mdx.remote.deferredProxies_", K6, void 0));
        XLa();
        var c = L6();
        if (!c) {
          var d = new K5(J6);
          g.Fa("yt.mdx.remote.screenService_", d, void 0);
          c = L6();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
            });
          BLa(
            a,
            d,
            function (f) {
              f
                ? M6() && k6(M6(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    o4("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Ja("yt.mdx.remote.initialized_") &&
          (g.Fa("yt.mdx.remote.initialized_", !0, void 0),
          N6("Initializing: " + g.uj(b)),
          O6.push(
            g.Dq("yt-remote-cast2-availability-change", function () {
              o4("yt-remote-receiver-availability-change");
            })
          ),
          O6.push(
            g.Dq("yt-remote-cast2-receiver-selected", function () {
              P6(null);
              o4("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          O6.push(
            g.Dq("yt-remote-cast2-receiver-resumed", function () {
              o4("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          O6.push(g.Dq("yt-remote-cast2-session-change", YLa)),
          O6.push(
            g.Dq("yt-remote-connection-change", function (f) {
              f ? k6(M6(), "YouTube TV") : Q6() || (k6(null, null), ELa());
            })
          ),
          (a = R6()),
          b.isAuto && (a.id += "#dial"),
          g.Ao("desktop_enable_autoplay") && (a.capabilities = ["atp"]),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          N6(" -- with channel params: " + g.uj(a)),
          a
            ? (g.Iu("yt-remote-session-app", a.app),
              g.Iu("yt-remote-session-name", a.name))
            : (g.Ku("yt-remote-session-app"), g.Ku("yt-remote-session-name")),
          g.Fa("yt.mdx.remote.channelParams_", a, void 0),
          c.start(),
          M6() || ZLa());
      }
    },
    aMa = function () {
      var a = L6().Ag.$_gos();
      var b = S6();
      b && T6() && (v4(a, b) || a.push(b));
      return EJa(a);
    },
    U6 = function () {
      var a = bMa();
      !a &&
        h6() &&
        DLa() &&
        (a = { key: "cast-selector-receiver", name: DLa() });
      return a;
    },
    bMa = function () {
      var a = aMa(),
        b = S6();
      b || (b = Q6());
      return g.db(a, function (c) {
        return b && r4(b, c.key) ? !0 : !1;
      });
    },
    S6 = function () {
      var a = M6();
      if (!a) return null;
      var b = L6().Oh();
      return w4(b, a);
    },
    YLa = function (a) {
      N6("remote.onCastSessionChange_: " + s4(a));
      if (a) {
        var b = S6();
        if (b && b.id == a.id) {
          if (
            (k6(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            V6 && (V6.token = a), (b = T6()) && b.by(a);
        } else b && W6(), X6(a, 1);
      } else T6() && W6();
    },
    W6 = function () {
      i6() ? f6().stopSession() : d6("stopSession called before API ready.");
      var a = T6();
      a && (a.disconnect(1), Y6(null));
    },
    Z6 = function () {
      var a = T6();
      return !!a && 3 != a.getProxyState();
    },
    N6 = function (a) {
      w5("remote", a);
    },
    L6 = function () {
      if (!$6) {
        var a = g.Ja("yt.mdx.remote.screenService_");
        $6 = a ? new I6(a) : null;
      }
      return $6;
    },
    M6 = function () {
      return g.Ja("yt.mdx.remote.currentScreenId_");
    },
    cMa = function (a) {
      g.Fa("yt.mdx.remote.currentScreenId_", a, void 0);
    },
    dMa = function () {
      return g.Ja("yt.mdx.remote.connectData_");
    },
    P6 = function (a) {
      g.Fa("yt.mdx.remote.connectData_", a, void 0);
    },
    T6 = function () {
      return g.Ja("yt.mdx.remote.connection_");
    },
    Y6 = function (a) {
      var b = T6();
      P6(null);
      a || cMa("");
      g.Fa("yt.mdx.remote.connection_", a, void 0);
      K6 &&
        (g.Bb(K6, function (c) {
          c(a);
        }),
        (K6.length = 0));
      b && !a
        ? o4("yt-remote-connection-change", !1)
        : !b && a && o4("yt-remote-connection-change", !0);
    },
    Q6 = function () {
      var a = g.Lu();
      if (!a) return null;
      var b = L6();
      if (!b) return null;
      b = b.Oh();
      return w4(b, a);
    },
    X6 = function (a, b) {
      M6();
      S6() && S6();
      a7
        ? (V6 = a)
        : (cMa(a.id),
          (a = new B6(J6, a, R6())),
          a.connect(b, dMa()),
          a.subscribe("beforeDisconnect", function (c) {
            o4("yt-remote-before-disconnect", c);
          }),
          a.subscribe("beforeDispose", function () {
            T6() && (T6(), Y6(null));
          }),
          a.subscribe("browserChannelAuthError", function () {
            var c = S6();
            c &&
              "shortLived" == c.idType &&
              (i6()
                ? f6().handleBrowserChannelAuthError()
                : d6("refreshLoungeToken called before API ready."));
          }),
          Y6(a));
    },
    ZLa = function () {
      var a = Q6();
      a
        ? (N6("Resume connection to: " + s4(a)), X6(a, 0))
        : (B4(),
          ELa(),
          N6("Skipping connecting because no session screen found."));
    },
    XLa = function () {
      var a = R6();
      if (g.Rb(a)) {
        a = z4();
        var b = g.Ju("yt-remote-session-name") || "",
          c = g.Ju("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        g.Fa("yt.mdx.remote.channelParams_", a, void 0);
      }
    },
    R6 = function () {
      return g.Ja("yt.mdx.remote.channelParams_") || {};
    },
    b7 = function (a, b, c) {
      g.F.call(this);
      var d = this;
      this.l = a;
      this.G = b;
      this.Ob = c;
      this.events = new g.KL(this);
      this.X = this.events.N(this.G, "onVolumeChange", function (e) {
        eMa(d, e);
      });
      this.C = !1;
      this.suggestion = null;
      this.I = new g.MI(64);
      this.i = new g.J(this.WJ, 500, this);
      this.u = new g.J(this.XJ, 1e3, this);
      this.L = new H4(this.OT, 0, this);
      this.B = {};
      this.W = new g.J(this.xK, 1e3, this);
      this.J = new I4(this.seekTo, 1e3, this);
      this.Y = g.Ka;
      g.H(this, this.events);
      this.events.N(b, "onCaptionsTrackListChanged", this.LQ);
      this.events.N(b, "captionschanged", this.XP);
      this.events.N(b, "captionssettingschanged", this.cK);
      this.events.N(b, "videoplayerreset", this.Hx);
      this.events.N(b, "mdxautoplaycancel", function () {
        d.Ob.iG();
      });
      a = this.Ob;
      a.Ga();
      a.subscribe("proxyStateChange", this.SI, this);
      a.subscribe("remotePlayerChange", this.Du, this);
      a.subscribe("remoteQueueChange", this.Hx, this);
      a.subscribe("previousNextChange", this.OI, this);
      a.subscribe("nowAutoplaying", this.II, this);
      a.subscribe("autoplayDismissed", this.fI, this);
      g.H(this, this.i);
      g.H(this, this.u);
      g.H(this, this.L);
      g.H(this, this.W);
      g.H(this, this.J);
      this.cK();
      this.Hx();
      this.Du();
    },
    eMa = function (a, b) {
      if (c7(a)) {
        a.Ob.unsubscribe("remotePlayerChange", a.Du, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = u6(a.Ob);
        if (c !== d.volume || b !== d.muted) a.Ob.setVolume(c, b), a.W.start();
        a.Ob.subscribe("remotePlayerChange", a.Du, a);
      }
    },
    fMa = function (a) {
      a.Sb(0);
      a.i.stop();
      a.Lb(new g.MI(64));
    },
    d7 = function (a, b) {
      if (c7(a) && !a.C) {
        var c = null;
        b && ((c = { style: a.G.getSubtitlesUserSettings() }), g.Yb(c, b));
        a.Ob.JE(a.G.getVideoData(1).videoId, c);
        a.B = u6(a.Ob).trackData;
      }
    },
    e7 = function (a, b) {
      var c = a.G.getPlaylist();
      if (null === c || void 0 === c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.G.getVideoData(1);
      a.Ob.playVideo(c.videoId, b, d, e, c.playerParams, c.Aa, rJa(c));
      a.Lb(new g.MI(1));
    },
    gMa = function (a, b) {
      if (b) {
        var c = a.G.getOption("captions", "tracklist", { fH: 1 });
        c && c.length
          ? (a.G.setOption("captions", "track", b), (a.C = !1))
          : (a.G.loadModule("captions"), (a.C = !0));
      } else a.G.setOption("captions", "track", {});
    },
    c7 = function (a) {
      return u6(a.Ob).videoId === a.G.getVideoData(1).videoId;
    },
    f7 = function () {
      g.V.call(this, {
        D: "div",
        K: "ytp-mdx-manual-pairing-popup-dialog",
        U: { role: "dialog" },
        S: [
          {
            D: "div",
            K: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
            S: [
              {
                D: "div",
                K: "ytp-mdx-manual-pairing-popup-title",
                ma: "Connecting to your TV on web using a code will be going away soon",
              },
              {
                D: "div",
                K: "ytp-mdx-manual-pairing-popup-buttons",
                S: [
                  {
                    D: "button",
                    Ba: [
                      "ytp-button",
                      "ytp-mdx-manual-pairing-popup-learn-more",
                    ],
                    ma: "Learn more",
                  },
                  {
                    D: "button",
                    Ba: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
                    ma: "OK",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.i = new g.vK(this, 250);
      this.learnMoreButton = this.ya("ytp-mdx-manual-pairing-popup-learn-more");
      this.okButton = this.ya("ytp-mdx-manual-pairing-popup-ok");
      g.H(this, this.i);
      this.N(this.learnMoreButton, "click", this.l);
      this.N(this.okButton, "click", this.u);
    },
    g7 = function () {
      g.V.call(this, {
        D: "div",
        K: "ytp-mdx-popup-dialog",
        U: { role: "dialog" },
        S: [
          {
            D: "div",
            K: "ytp-mdx-popup-dialog-inner-content",
            S: [
              { D: "div", K: "ytp-mdx-popup-title", ma: "You're signed out" },
              {
                D: "div",
                K: "ytp-mdx-popup-description",
                ma: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                D: "div",
                K: "ytp-mdx-privacy-popup-buttons",
                S: [
                  {
                    D: "button",
                    Ba: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    ma: "Cancel",
                  },
                  {
                    D: "button",
                    Ba: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    ma: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.i = new g.vK(this, 250);
      this.cancelButton = this.ya("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.ya("ytp-mdx-privacy-popup-confirm");
      g.H(this, this.i);
      this.N(this.cancelButton, "click", this.l);
      this.N(this.confirmButton, "click", this.u);
    },
    h7 = function (a) {
      g.V.call(this, {
        D: "div",
        K: "ytp-remote",
        S: [
          {
            D: "div",
            K: "ytp-remote-display-status",
            S: [
              { D: "div", K: "ytp-remote-display-status-icon", S: [g.cma()] },
              {
                D: "div",
                K: "ytp-remote-display-status-text",
                ma: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.i = new g.vK(this, 250);
      g.H(this, this.i);
      this.N(a, "presentingplayerstatechange", this.l);
      hMa(this, a.rb());
    },
    hMa = function (a, b) {
      if (3 === a.api.getPresentingPlayerType()) {
        var c = {
          RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name,
        };
        b = g.U(b, 128)
          ? g.hI("Error on $RECEIVER_NAME", c)
          : b.qc() || g.U(b, 4)
          ? g.hI("Playing on $RECEIVER_NAME", c)
          : g.hI("Connected to $RECEIVER_NAME", c);
        a.Oa("statustext", b);
        a.i.show();
      } else a.i.hide();
    },
    i7 = function (a, b) {
      g.DO.call(this, "Play on", 0, a, b);
      this.G = a;
      this.In = {};
      this.N(a, "onMdxReceiversChange", this.C);
      this.N(a, "presentingplayerstatechange", this.C);
      this.C();
    },
    j7 = function (a) {
      g.SL.call(this, a);
      this.sj = { key: u4(), name: "This computer" };
      this.ni = null;
      this.subscriptions = [];
      this.rC = this.Ob = null;
      this.In = [this.sj];
      this.Mm = this.sj;
      this.qd = new g.MI(64);
      this.BH = 0;
      this.Bf = -1;
      this.Dr = null;
      this.Hu = this.ix = !1;
      this.Fp = this.Lr = null;
      if (!g.GD(this.player.T()) && !g.HD(this.player.T())) {
        a = this.player;
        var b = g.yL(a);
        b && (b = b.cn()) && ((b = new i7(a, b)), g.H(this, b));
        b = new h7(a);
        g.H(this, b);
        g.IL(a, b.element, 4);
        this.Lr = new g7();
        g.H(this, this.Lr);
        g.IL(a, this.Lr.element, 4);
        g.S(
          this.player.T().experiments,
          "pair_servlet_deprecation_warning_enabled"
        ) &&
          !g.S(this.player.T().experiments, "deprecate_pair_servlet_enabled") &&
          ((this.Dr = new f7()),
          g.H(this, this.Dr),
          g.IL(a, this.Dr.element, 4));
        this.Hu = !!Q6();
        this.ix = !!g.Ju("yt-remote-manual-pairing-warning-shown");
      }
    },
    k7 = function (a) {
      a.Fp &&
        (a.player.removeEventListener("presentingplayerstatechange", a.Fp),
        (a.Fp = null));
    },
    iMa = function (a, b, c) {
      a.qd = c;
      a.player.V("presentingplayerstatechange", new g.PH(c, b));
    },
    jMa = function (a, b, c) {
      var d = !1;
      1 === b ? (d = !a.Hu) : 2 === b && (d = !a.ix);
      d && g.RH(c, 8) && (a.player.pauseVideo(), k7(a));
    },
    l7 = function (a, b) {
      if (b.key !== a.Mm.key)
        if (b.key === a.sj.key) W6();
        else {
          if (
            a.Dr &&
            !a.ix &&
            b !== a.sj &&
            "cast-selector-receiver" !== b.key &&
            g.bE(a.player.T())
          )
            kMa(a);
          else {
            var c;
            (c = !g.S(
              a.player.T().experiments,
              "mdx_enable_privacy_disclosure_ui"
            )) ||
              (c =
                ((c = g.M("PLAYER_CONFIG")) &&
                c.args &&
                void 0 !== c.args.authuser
                  ? !0
                  : !(!g.M("SESSION_INDEX") && !g.M("LOGGED_IN"))) ||
                a.Hu ||
                !a.Lr);
            (c ? 0 : g.bE(a.player.T()) || g.fE(a.player.T())) && lMa(a);
          }
          a.Mm = b;
          var d = a.player.getPlaylistId();
          c = a.player.getVideoData(1);
          var e = c.videoId;
          if (
            (!d && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              g.S(
                a.player.T().experiments,
                "should_clear_video_data_on_player_cued_unstarted"
              ))
          )
            a = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = f.Za(l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: d,
              videoId: e,
              playerParams: c.playerParams,
              clickTrackingParams: c.Aa,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (c = rJa(c)) && (a.locationInfo = c);
          }
          N6("Connecting to: " + g.uj(b));
          "cast-selector-receiver" == b.key
            ? (P6(a || null),
              (b = a || null),
              i6()
                ? f6().setLaunchParams(b)
                : d6("setLaunchParams called before ready."))
            : !a && Z6() && M6() == b.key
            ? o4("yt-remote-connection-change", !0)
            : (W6(),
              P6(a || null),
              (a = L6().Oh()),
              (b = w4(a, b.key)) && X6(b, 1));
        }
    },
    lMa = function (a) {
      a.player.rb().qc()
        ? a.player.pauseVideo()
        : ((a.Fp = function (b) {
            jMa(a, 1, b);
          }),
          a.player.addEventListener("presentingplayerstatechange", a.Fp));
      a.Lr && a.Lr.bd();
      T6() || (a7 = !0);
    },
    kMa = function (a) {
      a.player.rb().qc()
        ? a.player.pauseVideo()
        : ((a.Fp = function (b) {
            jMa(a, 2, b);
          }),
          a.player.addEventListener("presentingplayerstatechange", a.Fp));
      a.Dr && a.Dr.bd();
      T6() || (a7 = !0);
    },
    gKa = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    X4 = { "'": "\\'" },
    mMa = {},
    AJa = {
      MU: "atp",
      k4: "ska",
      e3: "que",
      q1: "mus",
      j4: "sus",
      CY: "dsp",
      z3: "seq",
      Q0: "mic",
      CX: "dpa",
      YU: "cds",
    },
    C4,
    y4 = "",
    UJa = PJa("loadCastFramework") || PJa("loadCastApplicationFramework"),
    WJa = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ]; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  g.Ua(H4, g.F);
  g.k = H4.prototype;
  g.k.nh = function (a) {
    this.B = arguments;
    this.i = !1;
    this.Db ? (this.u = g.Ta() + this.Bg) : (this.Db = g.Em(this.C, this.Bg));
  };
  g.k.stop = function () {
    this.Db && (g.A.clearTimeout(this.Db), (this.Db = null));
    this.u = null;
    this.i = !1;
    this.B = [];
  };
  g.k.pause = function () {
    ++this.l;
  };
  g.k.resume = function () {
    this.l &&
      (--this.l,
      !this.l && this.i && ((this.i = !1), this.I.apply(null, this.B)));
  };
  g.k.oa = function () {
    this.stop();
    H4.pe.oa.call(this);
  };
  g.k.EM = function () {
    this.u
      ? ((this.Db = g.Em(this.C, this.u - g.Ta())), (this.u = null))
      : ((this.Db = null),
        this.l ? (this.i = !0) : ((this.i = !1), this.I.apply(null, this.B)));
  };
  g.v(I4, g.F);
  g.k = I4.prototype;
  g.k.nh = function (a) {
    this.u = arguments;
    this.Db || this.l ? (this.i = !0) : J4(this);
  };
  g.k.stop = function () {
    this.Db &&
      (g.A.clearTimeout(this.Db),
      (this.Db = null),
      (this.i = !1),
      (this.u = null));
  };
  g.k.pause = function () {
    this.l++;
  };
  g.k.resume = function () {
    this.l--;
    this.l || !this.i || this.Db || ((this.i = !1), J4(this));
  };
  g.k.oa = function () {
    g.F.prototype.oa.call(this);
    this.stop();
  };
  L4.prototype.stringify = function (a) {
    return g.A.JSON.stringify(a, void 0);
  };
  L4.prototype.parse = function (a) {
    return g.A.JSON.parse(a, void 0);
  };
  var N4 = new g.Ul();
  g.v(YJa, g.Al);
  P4.prototype.i = null;
  P4.prototype.getOptions = function () {
    var a;
    (a = this.i) ||
      ((a = {}), $Ja(this) && ((a[0] = !0), (a[1] = !0)), (a = this.i = a));
    return a;
  };
  var m7;
  g.Ua(ZJa, P4);
  m7 = new ZJa();
  g.k = Q4.prototype;
  g.k.Yn = null;
  g.k.Jj = !1;
  g.k.hs = null;
  g.k.DD = null;
  g.k.Or = null;
  g.k.Xr = null;
  g.k.Gm = null;
  g.k.Ln = null;
  g.k.Hp = null;
  g.k.tf = null;
  g.k.Cv = 0;
  g.k.Mj = null;
  g.k.Iy = null;
  g.k.Am = null;
  g.k.Is = -1;
  g.k.OJ = !0;
  g.k.Io = !1;
  g.k.Bz = 0;
  g.k.Nx = null;
  var eKa = {},
    T4 = {};
  g.k = Q4.prototype;
  g.k.setTimeout = function (a) {
    this.C = a;
  };
  g.k.US = function (a) {
    a = a.target;
    var b = this.Nx;
    b && 3 == b5(a) ? b.nh() : this.FK(a);
  };
  g.k.FK = function (a) {
    try {
      if (a == this.tf)
        a: {
          var b = b5(this.tf),
            c = this.tf.I,
            d = this.tf.getStatus();
          if ((g.ye && !g.ae(10)) || (g.Ae && !g.$d("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.fg && !d5(this.tf))) break a;
          this.Io ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.i.vj(3) : this.i.vj(2));
          Y4(this);
          var e = this.tf.getStatus();
          this.Is = e;
          var f = d5(this.tf);
          (this.Jj = 200 == e)
            ? (4 == b && V4(this),
              this.I
                ? (fKa(this, b, f),
                  g.fg &&
                    this.Jj &&
                    3 == b &&
                    (this.B.Na(this.u, "tick", this.OS), this.u.start()))
                : U4(this, f),
              this.Jj &&
                !this.Io &&
                (4 == b ? this.i.Pv(this) : ((this.Jj = !1), S4(this))))
            : (400 == e && 0 < f.indexOf("Unknown SID")
                ? ((this.Am = 3), O4(13))
                : ((this.Am = 0), O4(14)),
              V4(this),
              W4(this));
        }
    } catch (h) {
      this.tf && d5(this.tf);
    } finally {
    }
  };
  g.k.OS = function () {
    var a = b5(this.tf),
      b = d5(this.tf);
    this.Cv < b.length &&
      (Y4(this), fKa(this, a, b), this.Jj && 4 != a && S4(this));
  };
  g.k.qS = function (a) {
    M4((0, g.C)(this.pS, this, a), 0);
  };
  g.k.pS = function (a) {
    this.Io || (Y4(this), U4(this, a), S4(this));
  };
  g.k.bJ = function (a) {
    M4((0, g.C)(this.oS, this, a), 0);
  };
  g.k.oS = function (a) {
    this.Io || (V4(this), (this.Jj = a), this.i.Pv(this), this.i.vj(4));
  };
  g.k.cancel = function () {
    this.Io = !0;
    V4(this);
  };
  g.k.yS = function () {
    this.hs = null;
    var a = Date.now();
    0 <= a - this.DD
      ? (2 != this.Xr && this.i.vj(3),
        V4(this),
        (this.Am = 2),
        O4(18),
        W4(this))
      : iKa(this, this.DD - a);
  };
  g.k.getLastError = function () {
    return this.Am;
  };
  g.Ua($4, g.Ul);
  var pKa = /^https?$/i,
    nMa = ["POST", "PUT"];
  g.k = $4.prototype;
  g.k.send = function (a, b, c, d) {
    if (this.i)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          this.W +
          "; newUri=" +
          a
      );
    b = b ? b.toUpperCase() : "GET";
    this.W = a;
    this.u = "";
    this.I = 0;
    this.Ma = b;
    this.Ca = !1;
    this.B = !0;
    this.i = this.va ? aKa(this.va) : aKa(m7);
    this.ra = this.va ? this.va.getOptions() : m7.getOptions();
    this.i.onreadystatechange = (0, g.C)(this.QI, this);
    try {
      n4(c5(this, "Opening Xhr")),
        (this.Aa = !0),
        this.i.open(b, String(a), !0),
        (this.Aa = !1);
    } catch (f) {
      n4(c5(this, "Error opening Xhr: " + f.message));
      oKa(this, f);
      return;
    }
    a = c || "";
    var e = this.headers.clone();
    d &&
      wJa(d, function (f, h) {
        e.set(h, f);
      });
    d = g.db(e.Ai(), mKa);
    c = g.A.FormData && a instanceof g.A.FormData;
    !g.gb(nMa, b) ||
      d ||
      c ||
      e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) {
      this.i.setRequestHeader(h, f);
    }, this);
    this.Ra && (this.i.responseType = this.Ra);
    "withCredentials" in this.i &&
      this.i.withCredentials !== this.Ha &&
      (this.i.withCredentials = this.Ha);
    try {
      rKa(this),
        0 < this.J &&
          ((this.Y = lKa(this.i)),
          n4(
            c5(
              this,
              "Will abort after " + this.J + "ms if incomplete, xhr2 " + this.Y
            )
          ),
          this.Y
            ? ((this.i.timeout = this.J),
              (this.i.ontimeout = (0, g.C)(this.DE, this)))
            : (this.X = g.Em(this.DE, this.J, this))),
        n4(c5(this, "Sending request")),
        (this.L = !0),
        this.i.send(a),
        (this.L = !1);
    } catch (f) {
      n4(c5(this, "Send error: " + f.message)), oKa(this, f);
    }
  };
  g.k.DE = function () {
    "undefined" != typeof g.B_ &&
      this.i &&
      ((this.u = "Timed out after " + this.J + "ms, aborting"),
      (this.I = 8),
      c5(this, this.u),
      this.dispatchEvent("timeout"),
      this.abort(8));
  };
  g.k.abort = function (a) {
    this.i &&
      this.B &&
      (c5(this, "Aborting"),
      (this.B = !1),
      (this.C = !0),
      this.i.abort(),
      (this.C = !1),
      (this.I = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      a5(this));
  };
  g.k.oa = function () {
    this.i &&
      (this.B && ((this.B = !1), (this.C = !0), this.i.abort(), (this.C = !1)),
      a5(this, !0));
    $4.pe.oa.call(this);
  };
  g.k.QI = function () {
    this.Ga() || (this.Aa || this.L || this.C ? qKa(this) : this.xR());
  };
  g.k.xR = function () {
    qKa(this);
  };
  g.k.isActive = function () {
    return !!this.i;
  };
  g.k.isComplete = function () {
    return 4 == b5(this);
  };
  g.k.getStatus = function () {
    try {
      return 2 < b5(this) ? this.i.status : -1;
    } catch (a) {
      return -1;
    }
  };
  g.k.getResponseHeader = function (a) {
    if (this.i && this.isComplete())
      return (a = this.i.getResponseHeader(a)), null === a ? void 0 : a;
  };
  g.k.getLastError = function () {
    return "string" === typeof this.u ? this.u : String(this.u);
  };
  g.k = sKa.prototype;
  g.k.Cz = null;
  g.k.Eh = null;
  g.k.Ox = !1;
  g.k.YJ = null;
  g.k.nw = null;
  g.k.FB = null;
  g.k.Dz = null;
  g.k.bb = null;
  g.k.ql = -1;
  g.k.Js = null;
  g.k.Ts = null;
  g.k.connect = function (a) {
    this.Dz = a;
    a = e5(this.i, null, this.Dz);
    O4(3);
    this.YJ = Date.now();
    var b = this.i.J;
    null != b
      ? ((this.Js = b[0]),
        (this.Ts = b[1])
          ? ((this.bb = 1), tKa(this))
          : ((this.bb = 2), g5(this)))
      : (l4(a, "MODE", "init"),
        (this.Eh = new Q4(this, void 0, void 0, void 0)),
        (this.Eh.Yn = this.Cz),
        R4(this.Eh, a, !1, null, !0),
        (this.bb = 0));
  };
  g.k.CN = function (a) {
    if (a) (this.bb = 2), g5(this);
    else {
      O4(4);
      var b = this.i;
      b.hk = b.Km.ql;
      n5(b, 9);
    }
    a && this.vj(2);
  };
  g.k.qA = function (a) {
    return this.i.qA(a);
  };
  g.k.abort = function () {
    this.Eh && (this.Eh.cancel(), (this.Eh = null));
    this.ql = -1;
  };
  g.k.EE = function () {
    return !1;
  };
  g.k.TI = function (a, b) {
    this.ql = a.Is;
    if (0 == this.bb)
      if (b) {
        try {
          var c = this.l.parse(b);
        } catch (d) {
          a = this.i;
          a.hk = this.ql;
          n5(a, 2);
          return;
        }
        this.Js = c[0];
        this.Ts = c[1];
      } else (a = this.i), (a.hk = this.ql), n5(a, 2);
    else if (2 == this.bb)
      if (this.Ox) O4(7), (this.FB = Date.now());
      else if ("11111" == b) {
        if (
          (O4(6),
          (this.Ox = !0),
          (this.nw = Date.now()),
          (a = this.nw - this.YJ),
          !g.ye || g.ae(10) || 500 > a)
        )
          (this.ql = 200), this.Eh.cancel(), O4(12), f5(this.i, this, !0);
      } else O4(8), (this.nw = this.FB = Date.now()), (this.Ox = !1);
  };
  g.k.Pv = function () {
    this.ql = this.Eh.Is;
    if (this.Eh.Jj)
      0 == this.bb
        ? this.Ts
          ? ((this.bb = 1), tKa(this))
          : ((this.bb = 2), g5(this))
        : 2 == this.bb &&
          ((!g.ye || g.ae(10) ? !this.Ox : 200 > this.FB - this.nw)
            ? (O4(11), f5(this.i, this, !1))
            : (O4(12), f5(this.i, this, !0)));
    else {
      0 == this.bb ? O4(9) : 2 == this.bb && O4(10);
      var a = this.i;
      this.Eh.getLastError();
      a.hk = this.ql;
      n5(a, 2);
    }
  };
  g.k.Xu = function () {
    return this.i.Xu();
  };
  g.k.isActive = function () {
    return this.i.isActive();
  };
  g.k.vj = function (a) {
    this.i.vj(a);
  };
  g.k = h5.prototype;
  g.k.gk = null;
  g.k.xt = null;
  g.k.oh = null;
  g.k.Me = null;
  g.k.Ez = null;
  g.k.ow = null;
  g.k.EF = null;
  g.k.Qv = null;
  g.k.uu = 0;
  g.k.rP = 0;
  g.k.vg = null;
  g.k.Sm = null;
  g.k.Dl = null;
  g.k.Ro = null;
  g.k.Km = null;
  g.k.Gy = null;
  g.k.zr = -1;
  g.k.zH = -1;
  g.k.hk = -1;
  g.k.Vq = 0;
  g.k.Iq = 0;
  g.k.Jo = 8;
  g.Ua(vKa, g.Al);
  g.Ua(wKa, g.Al);
  g.k = h5.prototype;
  g.k.connect = function (a, b, c, d, e) {
    O4(0);
    this.Ez = b;
    this.xt = c || {};
    d && void 0 !== e && ((this.xt.OSID = d), (this.xt.OAID = e));
    this.C ? (M4((0, g.C)(this.VF, this, a), 100), AKa(this)) : this.VF(a);
  };
  g.k.VF = function (a) {
    this.Km = new sKa(this);
    this.Km.Cz = this.gk;
    this.Km.l = this.B;
    this.Km.connect(a);
  };
  g.k.EE = function () {
    return 0 == this.bb;
  };
  g.k.getState = function () {
    return this.bb;
  };
  g.k.ZI = function (a) {
    this.Sm = null;
    EKa(this, a);
  };
  g.k.YI = function () {
    this.Dl = null;
    this.Me = new Q4(this, this.l, "rpc", this.I);
    this.Me.Yn = this.gk;
    this.Me.Bz = 0;
    var a = this.EF.clone();
    j4(a, "RID", "rpc");
    j4(a, "SID", this.l);
    j4(a, "CI", this.Gy ? "0" : "1");
    j4(a, "AID", this.zr);
    i5(this, a);
    if (!g.ye || g.ae(10))
      j4(a, "TYPE", "xmlhttp"), R4(this.Me, a, !0, this.Qv, !1);
    else {
      j4(a, "TYPE", "html");
      var b = this.Me,
        c = !!this.Qv;
      b.Xr = 3;
      b.Gm = k4(a.clone());
      hKa(b, c);
    }
  };
  g.k.TI = function (a, b) {
    if (0 != this.bb && (this.Me == a || this.oh == a))
      if (((this.hk = a.Is), this.oh == a && 3 == this.bb))
        if (7 < this.Jo) {
          try {
            var c = this.B.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.Dl) {
                  if (this.Me)
                    if (this.Me.Or + 3e3 < this.oh.Or)
                      k5(this), this.Me.cancel(), (this.Me = null);
                    else break a;
                  m5(this);
                  O4(19);
                }
              }
            else
              (this.zH = a[1]),
                0 < this.zH - this.zr &&
                  37500 > a[2] &&
                  this.Gy &&
                  0 == this.Iq &&
                  !this.Ro &&
                  (this.Ro = M4((0, g.C)(this.TP, this), 6e3));
          else n5(this, 11);
        } else b != mMa.rX.i && n5(this, 11);
      else if ((this.Me == a && k5(this), !g.pc(b)))
        for (a = this.B.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.zr = c[0]),
            (c = c[1]),
            2 == this.bb
              ? "c" == c[0]
                ? ((this.l = c[1]),
                  (this.Qv = c[2]),
                  (c = c[3]),
                  null != c ? (this.Jo = c) : (this.Jo = 6),
                  (this.bb = 3),
                  this.vg && this.vg.RF(),
                  (this.EF = e5(this, this.Xu() ? this.Qv : null, this.Ez)),
                  FKa(this))
                : "stop" == c[0] && n5(this, 7)
              : 3 == this.bb &&
                ("stop" == c[0]
                  ? n5(this, 7)
                  : "noop" != c[0] && this.vg && this.vg.QF(c),
                (this.Iq = 0));
  };
  g.k.TP = function () {
    null != this.Ro &&
      ((this.Ro = null), this.Me.cancel(), (this.Me = null), m5(this), O4(20));
  };
  g.k.Pv = function (a) {
    if (this.Me == a) {
      k5(this);
      this.Me = null;
      var b = 2;
    } else if (this.oh == a) (this.oh = null), (b = 1);
    else return;
    this.hk = a.Is;
    if (0 != this.bb)
      if (a.Jj)
        1 == b
          ? ((b = N4),
            b.dispatchEvent(
              new vKa(b, a.Hp ? a.Hp.length : 0, Date.now() - a.Or, this.Vq)
            ),
            j5(this),
            (this.u.length = 0))
          : FKa(this);
      else {
        var c = a.getLastError(),
          d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.hk))) {
          if ((d = 1 == b))
            this.oh || this.Sm || 1 == this.bb || 2 <= this.Vq
              ? (d = !1)
              : ((this.Sm = M4((0, g.C)(this.ZI, this, a), GKa(this, this.Vq))),
                this.Vq++,
                (d = !0));
          d = !(d || (2 == b && m5(this)));
        }
        if (d)
          switch (c) {
            case 1:
              n5(this, 5);
              break;
            case 4:
              n5(this, 10);
              break;
            case 3:
              n5(this, 6);
              break;
            case 7:
              n5(this, 12);
              break;
            default:
              n5(this, 2);
          }
      }
  };
  g.k.XN = function (a) {
    if (!g.gb(arguments, this.bb))
      throw Error("Unexpected channel state: " + this.bb);
  };
  g.k.xT = function (a) {
    a ? O4(2) : (O4(1), HKa(this, 8));
  };
  g.k.qA = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new $4();
    a.Ha = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.vg && this.vg.isActive(this);
  };
  g.k.vj = function (a) {
    var b = N4;
    b.dispatchEvent(new wKa(b, a));
  };
  g.k.Xu = function () {
    return !(!g.ye || g.ae(10));
  };
  g.k = IKa.prototype;
  g.k.RF = function () {};
  g.k.QF = function () {};
  g.k.PF = function () {};
  g.k.dA = function () {};
  g.k.yG = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = JKa.prototype;
  g.k.isEmpty = function () {
    return g.ib(this.i) && g.ib(this.l);
  };
  g.k.clear = function () {
    this.i = [];
    this.l = [];
  };
  g.k.contains = function (a) {
    return g.gb(this.i, a) || g.gb(this.l, a);
  };
  g.k.remove = function (a) {
    var b = this.i;
    var c = (0, g.eEa)(b, a);
    0 <= c ? (g.kb(b, c), (b = !0)) : (b = !1);
    return b || g.lb(this.l, a);
  };
  g.k.rh = function () {
    for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
    var c = this.l.length;
    for (b = 0; b < c; ++b) a.push(this.l[b]);
    return a;
  };
  g.Ua(o5, g.F);
  g.k = o5.prototype;
  g.k.iS = function () {
    this.Bg = Math.min(3e5, 2 * this.Bg);
    this.u();
    this.l && this.start();
  };
  g.k.start = function () {
    var a = this.Bg + 15e3 * Math.random();
    g.dn(this.i, a);
    this.l = g.Ta() + a;
  };
  g.k.stop = function () {
    this.i.stop();
    this.l = 0;
  };
  g.k.isActive = function () {
    return this.i.isActive();
  };
  g.k.reset = function () {
    this.i.stop();
    this.Bg = 5e3;
  };
  g.Ua(p5, IKa);
  g.k = p5.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.u.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.u.unsubscribe(a, b, c);
  };
  g.k.Jg = function (a) {
    return this.u.Jg(a);
  };
  g.k.V = function (a, b) {
    return this.u.V.apply(this.u, arguments);
  };
  g.k.dispose = function () {
    this.X ||
      ((this.X = !0),
      g.ui(this.u),
      MKa(this),
      g.ui(this.l),
      (this.l = null),
      (this.Y = function () {
        return "";
      }));
  };
  g.k.Ga = function () {
    return this.X;
  };
  g.k.connect = function (a, b, c) {
    if (!this.i || 2 != this.i.getState()) {
      this.W = "";
      this.l.stop();
      this.C = a || null;
      this.B = b || 0;
      a = this.ra + "/test";
      b = this.ra + "/bind";
      var d = new h5(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.va
        ),
        e = this.i;
      e && (e.vg = null);
      d.vg = this;
      this.i = d;
      q5(this);
      if (this.i) {
        d = g.M("ID_TOKEN");
        var f = this.i.gk || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.i.gk = f;
      }
      e
        ? ((3 != e.getState() && 0 == CKa(e)) || e.getState(),
          this.i.connect(a, b, this.I, e.l, e.zr))
        : c
        ? this.i.connect(a, b, this.I, c.sessionId, c.arrayId)
        : this.i.connect(a, b, this.I);
    }
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.Yb(a, b);
    this.l.isActive() || 2 == (this.i ? this.i.getState() : 0)
      ? this.J.push(a)
      : r5(this) && (q5(this), BKa(this.i, a));
  };
  g.k.RF = function () {
    this.l.reset();
    this.C = null;
    this.B = 0;
    if (this.J.length) {
      var a = this.J;
      this.J = [];
      for (var b = 0, c = a.length; b < c; ++b) BKa(this.i, a[b]);
    }
    this.V("handlerOpened");
  };
  g.k.PF = function (a) {
    var b = 2 == a && 401 == this.i.hk;
    4 == a || b || this.l.start();
    this.V("handlerError", a, b);
  };
  g.k.dA = function (a) {
    if (!this.l.isActive()) this.V("handlerClosed");
    else if (a)
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b].map;
        d && this.J.push(d);
      }
  };
  g.k.yG = function () {
    var a = { v: 2 };
    this.W && (a.gsessionid = this.W);
    0 != this.B && (a.ui = "" + this.B);
    0 != this.L && (a.ui = "" + this.L);
    this.C && g.Yb(a, this.C);
    return a;
  };
  g.k.QF = function (a) {
    "S" == a[0]
      ? (this.W = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.l.start(), zKa(this.i))
      : this.V("handlerMessage", new KKa(a[0], a[1]));
  };
  g.k.by = function (a) {
    (this.I.loungeIdToken = a) || this.l.stop();
    if (this.Ca && this.i) {
      var b = this.i.gk || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.i.gk = b;
    }
  };
  g.k.eT = function () {
    this.l.isActive();
    0 == CKa(this.i) && this.connect(this.C, this.B);
  };
  s5.prototype.B = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  s5.prototype.u = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  s5.prototype.C = function (a) {
    a(Error("request timed out"));
  };
  var TKa = Date.now(),
    v5 = null,
    y5 = Array(50),
    x5 = -1,
    z5 = !1;
  g.Ua(A5, g.P);
  A5.prototype.Oh = function () {
    return this.screens;
  };
  A5.prototype.contains = function (a) {
    return !!v4(this.screens, a);
  };
  A5.prototype.get = function (a) {
    return a ? w4(this.screens, a) : null;
  };
  A5.prototype.info = function (a) {
    w5(this.I, a);
  };
  g.v(B5, g.P);
  g.k = B5.prototype;
  g.k.start = function () {
    !this.i && isNaN(this.Db) && this.kJ();
  };
  g.k.stop = function () {
    this.i && (this.i.abort(), (this.i = null));
    isNaN(this.Db) || (g.bp(this.Db), (this.Db = NaN));
  };
  g.k.oa = function () {
    this.stop();
    g.P.prototype.oa.call(this);
  };
  g.k.kJ = function () {
    this.Db = NaN;
    this.i = g.gp(t5(this.u, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.J },
      timeout: 5e3,
      onSuccess: (0, g.C)(this.GM, this),
      onError: (0, g.C)(this.FM, this),
      onTimeout: (0, g.C)(this.HM, this),
    });
  };
  g.k.GM = function (a, b) {
    this.i = null;
    a = b.screen || {};
    a.dialId = this.B;
    a.name = this.I;
    b = -1;
    this.C &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.V("pairingComplete", new q4(a), b);
  };
  g.k.FM = function (a) {
    this.i = null;
    a.status && 404 == a.status
      ? this.l >= oMa.length
        ? this.V("pairingFailed", Error("DIAL polling timed out"))
        : ((a = oMa[this.l]),
          (this.Db = g.$o((0, g.C)(this.kJ, this), a)),
          this.l++)
      : this.V("pairingFailed", Error("Server error " + a.status));
  };
  g.k.HM = function () {
    this.i = null;
    this.V("pairingFailed", Error("Server not responding"));
  };
  var oMa = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.Ua(D5, A5);
  g.k = D5.prototype;
  g.k.start = function () {
    C5(this) && this.V("screenChange");
    !g.Ju("yt-remote-lounge-token-expiration") && XKa(this);
    g.bp(this.i);
    this.i = g.$o((0, g.C)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    C5(this);
    UKa(this, a);
    E5(this, !1);
    this.V("screenChange");
    b(a);
    a.token || XKa(this);
  };
  g.k.remove = function (a, b) {
    var c = C5(this);
    WKa(this, a) && (E5(this, !1), (c = !0));
    b(a);
    c && this.V("screenChange");
  };
  g.k.Ey = function (a, b, c, d) {
    var e = C5(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), E5(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.V("screenChange");
  };
  g.k.oa = function () {
    g.bp(this.i);
    D5.pe.oa.call(this);
  };
  g.k.vO = function (a) {
    C5(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    E5(this, !b);
    b && w5(this.I, "Missed " + b + " lounge tokens.");
  };
  g.k.uO = function (a) {
    w5(this.I, "Requesting lounge tokens failed: " + a);
  };
  g.v(G5, g.P);
  g.k = G5.prototype;
  g.k.start = function () {
    var a = parseInt(g.Ju("yt-remote-fast-check-period") || "0", 10);
    (this.B = g.Ta() - 144e5 < a ? 0 : a)
      ? J5(this)
      : ((this.B = g.Ta() + 3e5),
        g.Iu("yt-remote-fast-check-period", this.B),
        this.DC());
  };
  g.k.isEmpty = function () {
    return g.Rb(this.i);
  };
  g.k.update = function () {
    F5("Updating availability on schedule.");
    var a = this.I(),
      b = g.Eb(
        this.i,
        function (c, d) {
          return c && !!w4(a, d);
        },
        this
      );
    I5(this, b);
  };
  g.k.oa = function () {
    g.bp(this.u);
    this.u = NaN;
    this.l && (this.l.abort(), (this.l = null));
    g.P.prototype.oa.call(this);
  };
  g.k.DC = function () {
    g.bp(this.u);
    this.u = NaN;
    this.l && this.l.abort();
    var a = ZKa(this);
    if (m4(a)) {
      var b = t5(this.C, "/pairing/get_screen_availability");
      this.l = u5(
        this.C,
        b,
        { lounge_token: g.Lb(a).join(",") },
        (0, g.C)(this.RR, this, a),
        (0, g.C)(this.QR, this)
      );
    } else I5(this, {}), J5(this);
  };
  g.k.RR = function (a, b) {
    this.l = null;
    var c = g.Lb(ZKa(this));
    if (g.zb(c, g.Lb(a))) {
      b = b.screens || [];
      c = {};
      for (var d = 0, e = b.length; d < e; ++d)
        c[a[b[d].loungeToken]] = "online" == b[d].status;
      I5(this, c);
      J5(this);
    } else this.qe("Changing Screen set during request."), this.DC();
  };
  g.k.QR = function (a) {
    this.qe("Screen availability failed: " + a);
    this.l = null;
    J5(this);
  };
  g.k.qe = function (a) {
    w5("OnlineScreenService", a);
  };
  g.Ua(K5, A5);
  g.k = K5.prototype;
  g.k.start = function () {
    this.l.start();
    this.i.start();
    this.screens.length &&
      (this.V("screenChange"),
      this.i.isEmpty() || this.V("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.l.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.l.remove(a, b, c);
    this.i.update();
  };
  g.k.Ey = function (a, b, c, d) {
    this.l.contains(a)
      ? this.l.Ey(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        w5(this.I, a),
        d(Error(a)));
  };
  g.k.Oh = function (a) {
    return a
      ? this.screens
      : g.ob(
          this.screens,
          g.Ke(
            this.u,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.FE = function () {
    return g.Ke(
      this.Oh(!0),
      function (a) {
        return !!this.i.i[a.id];
      },
      this
    );
  };
  g.k.GE = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new B5(this.B, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.ui(l);
      e(L5(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.ui(l);
      f(m);
    });
    l.start();
    return (0, g.C)(l.stop, l);
  };
  g.k.IM = function (a, b, c, d) {
    g.gp(t5(this.B, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.C)(function (e, f) {
        e = new q4(f.screen || {});
        if (!e.name || cLa(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); cLa(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(L5(this, e));
      }, this),
      onError: (0, g.C)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.C)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.oa = function () {
    g.ui(this.l);
    g.ui(this.i);
    K5.pe.oa.call(this);
  };
  g.k.BO = function () {
    eLa(this);
    this.V("screenChange");
    this.i.update();
  };
  K5.prototype.dispose = K5.prototype.dispose;
  g.Ua(N5, g.P);
  g.k = N5.prototype;
  g.k.getScreen = function () {
    return this.B;
  };
  g.k.Xg = function (a) {
    this.Ga() ||
      (a && P5(this, "" + a), (this.B = null), this.V("sessionScreen", null));
  };
  g.k.info = function (a) {
    w5(this.Ca, a);
  };
  g.k.HE = function () {
    return null;
  };
  g.k.NC = function (a) {
    var b = this.i;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.C)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.C)(function () {
        P5(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.oa = function () {
    this.NC("");
    N5.pe.oa.call(this);
  };
  g.v(Q5, N5);
  g.k = Q5.prototype;
  g.k.MC = function (a) {
    if (this.l) {
      if (this.l == a) return;
      P5(this, "Overriding cast session with new session object");
      nLa(this);
      this.ra = !1;
      this.W = "unknown";
      this.l.removeUpdateListener(this.Y);
      this.l.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.va
      );
    }
    this.l = a;
    this.l.addUpdateListener(this.Y);
    this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.va);
    jLa(this, "getMdxSessionStatus");
  };
  g.k.Ar = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.uj(a));
  };
  g.k.stop = function () {
    this.l
      ? this.l.stop(
          (0, g.C)(function () {
            this.Xg();
          }, this),
          (0, g.C)(function () {
            this.Xg(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.Xg(Error("Stopping cast device without session."));
  };
  g.k.NC = function () {};
  g.k.oa = function () {
    this.info("disposeInternal");
    nLa(this);
    this.l &&
      (this.l.removeUpdateListener(this.Y),
      this.l.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.va
      ));
    this.l = null;
    N5.prototype.oa.call(this);
  };
  g.k.CS = function (a, b) {
    if (!this.Ga())
      if (b)
        if (((b = K4(b)), g.Oa(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.uj(b)),
            a)
          ) {
            case "mdxSessionStatus":
              hLa(this, b);
              break;
            case "loungeToken":
              kLa(this, b);
              break;
            default:
              P5(this, "Unknown youtube message: " + a);
          }
        else P5(this, "Unable to parse message.");
      else P5(this, "No data in message.");
  };
  g.k.NG = function (a, b, c, d) {
    g.bp(this.L);
    this.L = 0;
    bLa(
      this.u,
      this.i.label,
      a,
      this.i.friendlyName,
      (0, g.C)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (P5(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.L = g.$o((0, g.C)(this.NG, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.HE = function () {
    return this.l;
  };
  g.k.JM = function (a) {
    this.Ga() || a || (P5(this, "Cast session died."), this.Xg());
  };
  g.v(T5, N5);
  g.k = T5.prototype;
  g.k.MC = function (a) {
    this.l = a;
    this.l.addUpdateListener(this.Aa);
  };
  g.k.Ar = function (a) {
    this.Da = a;
    this.X();
  };
  g.k.stop = function () {
    uLa(this);
    this.l
      ? this.l.stop(
          (0, g.C)(this.Xg, this, null),
          (0, g.C)(this.Xg, this, "Failed to stop DIAL device.")
        )
      : this.Xg();
  };
  g.k.oa = function () {
    uLa(this);
    this.l && this.l.removeUpdateListener(this.Aa);
    this.l = null;
    N5.prototype.oa.call(this);
  };
  g.k.KM = function (a) {
    this.Ga() ||
      a ||
      (P5(this, "DIAL session died."), this.C(), (this.C = g.Ka), this.Xg());
  };
  g.v(X5, N5);
  X5.prototype.stop = function () {
    this.Xg();
  };
  X5.prototype.MC = function () {};
  X5.prototype.Ar = function () {
    g.bp(this.l);
    this.l = NaN;
    var a = w4(this.u.Oh(), this.i.label);
    a ? O5(this, a) : this.Xg(Error("No such screen"));
  };
  X5.prototype.oa = function () {
    g.bp(this.l);
    this.l = NaN;
    N5.prototype.oa.call(this);
  };
  g.v(Y5, g.P);
  g.k = Y5.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.L);
    this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a = a
      ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
      : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.C)(this.BR, this);
    c = new chrome.cast.ApiConfig(c, (0, g.C)(this.UI, this), e, d, a);
    c.customDialLaunchCallback = (0, g.C)(this.oQ, this);
    chrome.cast.initialize(
      c,
      (0, g.C)(function () {
        this.Ga() ||
          (chrome.cast.addReceiverActionListener(this.I),
          QKa(),
          this.l.subscribe("onlineScreenChange", (0, g.C)(this.IE, this)),
          (this.u = wLa(this)),
          chrome.cast.setCustomReceivers(
            this.u,
            g.Ka,
            (0, g.C)(function (f) {
              this.qe("Failed to set initial custom receivers: " + g.uj(f));
            }, this)
          ),
          this.V("yt-remote-cast2-availability-change", $5(this)),
          b(!0));
      }, this),
      (0, g.C)(function (f) {
        this.qe("Failed to initialize API: " + g.uj(f));
        b(!1);
      }, this)
    );
  };
  g.k.jT = function (a, b) {
    Z5("Setting connected screen ID: " + a + " -> " + b);
    if (this.i) {
      var c = this.i.getScreen();
      if (!a || (c && c.id != a))
        Z5("Unsetting old screen status: " + this.i.i.friendlyName),
          a6(this, null);
    }
    if (a && b) {
      if (!this.i) {
        c = w4(this.l.Oh(), a);
        if (!c) {
          Z5("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          Z5(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = vLa(this, c);
        a ||
          (Z5("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.u.push(a),
          chrome.cast.setCustomReceivers(
            this.u,
            g.Ka,
            (0, g.C)(function (d) {
              this.qe("Failed to set initial custom receivers: " + g.uj(d));
            }, this)
          ));
        Z5("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        a6(this, new X5(this.l, a), !0);
      }
      this.i.NC(b);
    } else Z5("setConnectedScreenStatus: no screen.");
  };
  g.k.kT = function (a) {
    this.Ga()
      ? this.qe("Setting connection data on disposed cast v2")
      : this.i
      ? this.i.Ar(a)
      : this.qe("Setting connection data without a session");
  };
  g.k.MM = function () {
    this.Ga()
      ? this.qe("Stopping session on disposed cast v2")
      : this.i
      ? (this.i.stop(), a6(this, null))
      : Z5("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.C)(this.UI, this),
      (0, g.C)(this.UR, this)
    );
  };
  g.k.oa = function () {
    this.l.unsubscribe("onlineScreenChange", (0, g.C)(this.IE, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.I);
    var a = NKa,
      b = g.Ja("yt.mdx.remote.debug.handlers_");
    g.lb(b || [], a);
    g.ui(this.i);
    g.P.prototype.oa.call(this);
  };
  g.k.qe = function (a) {
    w5("Controller", a);
  };
  g.k.WI = function (a, b) {
    this.i == a &&
      (b || a6(this, null), this.V("yt-remote-cast2-session-change", b));
  };
  g.k.yR = function (a, b) {
    if (!this.Ga())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          Z5(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.i)
              if (this.i.i.label != a.label)
                Z5(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.i.i.friendlyName
                ),
                  this.i.stop();
              else {
                Z5("onReceiverAction_: Casting to active receiver.");
                this.i.getScreen() &&
                  this.V("yt-remote-cast2-session-change", this.i.getScreen());
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                a6(this, new X5(this.l, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                a6(this, new T5(this.l, a, this.C, this.B));
                break;
              case chrome.cast.ReceiverType.CAST:
                a6(this, new Q5(this.l, a, this.B));
                break;
              default:
                this.qe("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.i && this.i.i.label == a.label
              ? this.i.stop()
              : this.qe("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.qe("onReceiverAction_ called without receiver.");
  };
  g.k.oQ = function (a) {
    if (this.Ga()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.qe("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.i ? this.i.i : null;
    if (!c || c.label != b.label)
      return (
        this.qe(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.i.getScreen())
        return (
          Z5("Reselecting dial screen."),
          this.V("yt-remote-cast2-session-change", this.i.getScreen()),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.qe(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      a6(this, new T5(this.l, b, this.C, this.B));
    }
    b = this.i;
    b.L = a;
    b.L.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.L.extraData || {}),
        (c = a.screenId || null),
        U5(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = rLa(
                b,
                {
                  name: b.i.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.L.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.Fo(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = sLa(b, c)))
          : (a = sLa(b, c)))
      : (a = W5(b));
    return a;
  };
  g.k.UI = function (a) {
    if (!this.Ga()) {
      Z5("New cast session ID: " + a.sessionId);
      var b = a.receiver;
      if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.i)
          if (b.receiverType == chrome.cast.ReceiverType.CAST)
            Z5("Got resumed cast session before resumed mdx connection."),
              (b.friendlyName = chrome.cast.unescape(b.friendlyName)),
              a6(this, new Q5(this.l, b, this.B), !0);
          else {
            this.qe(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var c = this.i.i,
          d = w4(this.l.Oh(), c.label);
        d &&
          r4(d, b.label) &&
          c.receiverType != chrome.cast.ReceiverType.CAST &&
          b.receiverType == chrome.cast.ReceiverType.CAST &&
          (Z5(
            "onSessionEstablished_: manual to cast session change " +
              b.friendlyName
          ),
          g.ui(this.i),
          (this.i = new Q5(this.l, b, this.B)),
          this.i.subscribe("sessionScreen", (0, g.C)(this.WI, this, this.i)),
          this.i.Ar(null));
        this.i.MC(a);
      }
    }
  };
  g.k.LM = function () {
    return this.i ? this.i.HE() : null;
  };
  g.k.UR = function (a) {
    this.Ga() ||
      (this.qe("Failed to estabilish a session: " + g.uj(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && a6(this, null));
  };
  g.k.BR = function (a) {
    Z5("Receiver availability updated: " + a);
    if (!this.Ga()) {
      var b = $5(this);
      this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      $5(this) != b && this.V("yt-remote-cast2-availability-change", $5(this));
    }
  };
  g.k.IE = function () {
    this.Ga() ||
      ((this.u = wLa(this)),
      Z5("Updating custom receivers: " + g.uj(this.u)),
      chrome.cast.setCustomReceivers(
        this.u,
        g.Ka,
        (0, g.C)(function () {
          this.qe("Failed to set custom receivers.");
        }, this)
      ),
      this.V("yt-remote-cast2-availability-change", $5(this)));
  };
  Y5.prototype.setLaunchParams = Y5.prototype.kT;
  Y5.prototype.setConnectedScreenStatus = Y5.prototype.jT;
  Y5.prototype.stopSession = Y5.prototype.MM;
  Y5.prototype.getCastSession = Y5.prototype.LM;
  Y5.prototype.requestSession = Y5.prototype.requestSession;
  Y5.prototype.init = Y5.prototype.init;
  Y5.prototype.dispose = Y5.prototype.dispose;
  var g6 = [];
  g.k = l6.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    m6(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.Gk = a.hasPrevious),
      (this.hasNext = a.hasNext),
      (this.J = a.playerTime),
      (this.I = a.playerTimeAt),
      (this.B = a.seekableStart),
      (this.i = a.seekableEnd),
      (this.C = a.duration),
      (this.L = a.loadedTime),
      (this.u = a.liveIngestionTime),
      (this.l = !isNaN(this.u)));
  };
  g.k.qc = function () {
    return 1 == this.playerState;
  };
  g.k.isAdPlaying = function () {
    return 1081 == this.playerState;
  };
  g.k.getDuration = function () {
    return this.l ? this.C + n6(this) : this.C;
  };
  g.k.clone = function () {
    return new l6(r6(this));
  };
  g.v(t6, g.P);
  g.k = t6.prototype;
  g.k.getState = function () {
    return this.bb;
  };
  g.k.play = function () {
    v6(this)
      ? (this.i ? this.i.play(null, g.Ka, A6(this, "play")) : z6(this, "play"),
        y6(this, 1, p6(u6(this))),
        this.V("remotePlayerChange"))
      : w6(this, this.play);
  };
  g.k.pause = function () {
    v6(this)
      ? (this.i
          ? this.i.pause(null, g.Ka, A6(this, "pause"))
          : z6(this, "pause"),
        y6(this, 2, p6(u6(this))),
        this.V("remotePlayerChange"))
      : w6(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (v6(this)) {
      if (this.i) {
        var b = u6(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.qc() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.i.seek(c, g.Ka, A6(this, "seekTo", { newTime: a }));
      } else z6(this, "seekTo", { newTime: a });
      y6(this, 3, a);
      this.V("remotePlayerChange");
    } else w6(this, g.Ra(this.seekTo, a));
  };
  g.k.stop = function () {
    if (v6(this)) {
      this.i
        ? this.i.stop(null, g.Ka, A6(this, "stopVideo"))
        : z6(this, "stopVideo");
      var a = u6(this);
      a.index = -1;
      a.videoId = "";
      m6(a);
      x6(this, a);
      this.V("remotePlayerChange");
    } else w6(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (v6(this)) {
      var c = u6(this);
      if (this.l) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.l.setReceiverVolumeLevel(
            d,
            (0, g.C)(function () {
              w5("CP", "set receiver volume: " + d);
            }, this),
            (0, g.C)(function () {
              this.qe("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.l.setReceiverMuted(
            b,
            (0, g.C)(function () {
              w5("CP", "set receiver muted: " + b);
            }, this),
            (0, g.C)(function () {
              this.qe("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        z6(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      x6(this, c);
    } else w6(this, g.Ra(this.setVolume, a, b));
  };
  g.k.JE = function (a, b) {
    if (v6(this)) {
      var c = u6(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.uj(b.style)),
        g.Yb(a, c.trackData));
      z6(this, "setSubtitlesTrack", a);
      x6(this, c);
    } else w6(this, g.Ra(this.JE, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    v6(this)
      ? ((b = b.getLanguageInfo().getId()),
        z6(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = u6(this)),
        (a.audioTrackId = b),
        x6(this, a))
      : w6(this, g.Ra(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    var l = u6(this);
    c = c || 0;
    var m = { videoId: a, currentIndex: c };
    q6(l, a, c);
    void 0 !== b && (o6(l, b), (m.currentTime = b));
    void 0 !== d && (m.listId = d);
    null != e && (m.playerParams = e);
    null != f && (m.clickTrackingParams = f);
    null != h && (m.locationInfo = g.uj(h));
    z6(this, "setPlaylist", m);
    d || x6(this, l);
  };
  g.k.Jx = function (a, b) {
    if (v6(this)) {
      if (a && b) {
        var c = u6(this);
        q6(c, a, b);
        x6(this, c);
      }
      z6(this, "previous");
    } else w6(this, g.Ra(this.Jx, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (v6(this)) {
      if (a && b) {
        var c = u6(this);
        q6(c, a, b);
        x6(this, c);
      }
      z6(this, "next");
    } else w6(this, g.Ra(this.nextVideo, a, b));
  };
  g.k.iG = function () {
    v6(this) ? z6(this, "dismissAutoplay") : w6(this, this.iG);
  };
  g.k.dispose = function () {
    if (3 != this.bb) {
      var a = this.bb;
      this.bb = 3;
      this.V("proxyStateChange", a, this.bb);
    }
    g.P.prototype.dispose.call(this);
  };
  g.k.oa = function () {
    ILa(this);
    this.u = null;
    this.B.clear();
    s6(this, null);
    g.P.prototype.oa.call(this);
  };
  g.k.PC = function (a) {
    if ((a != this.bb || 2 == a) && 3 != this.bb && 0 != a) {
      var b = this.bb;
      this.bb = a;
      this.V("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.B.isEmpty(); )
          (b = a = this.B),
            g.ib(b.i) && ((b.i = b.l), b.i.reverse(), (b.l = [])),
            a.i.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.vR = function (a, b) {
    this.V(a, b);
  };
  g.k.aQ = function (a) {
    if (!a) this.xu(null), s6(this, null);
    else if (this.l.receiver.volume) {
      a = this.l.receiver.volume;
      var b = u6(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        w5("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          x6(this, b);
    }
  };
  g.k.xu = function (a) {
    w5("CP", "Cast media: " + !!a);
    this.i && this.i.removeUpdateListener(this.J);
    if ((this.i = a))
      this.i.addUpdateListener(this.J), JLa(this), this.V("remotePlayerChange");
  };
  g.k.ZP = function (a) {
    a ? (JLa(this), this.V("remotePlayerChange")) : this.xu(null);
  };
  g.k.hD = function () {
    z6(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.hQ = function () {
    var a = FLa();
    a && s6(this, a);
  };
  g.k.qe = function (a) {
    w5("CP", a);
  };
  g.v(B6, g.P);
  g.k = B6.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.playerParams,
        f = b.clickTrackingParams,
        h = b.index,
        l = { videoId: d },
        m = b.currentTime;
      b = b.locationInfo;
      void 0 !== m && (l.currentTime = 5 >= m ? 0 : m);
      e && (l.playerParams = e);
      b && (l.locationInfo = b);
      f && (l.clickTrackingParams = f);
      c && (l.listId = c);
      void 0 !== h && (l.currentIndex = h);
      c && (this.hc.listId = c);
      this.hc.videoId = d;
      this.hc.index = h || 0;
      this.hc.state = 3;
      o6(this.hc, m);
      this.B = "UNSUPPORTED";
      C6("Connecting with setPlaylist and params: " + g.uj(l));
      this.i.connect({ method: "setPlaylist", params: g.uj(l) }, a, IJa());
    } else C6("Connecting without params"), this.i.connect({}, a, IJa());
    LLa(this);
  };
  g.k.by = function (a) {
    this.i.by(a);
  };
  g.k.dispose = function () {
    this.Ga() || (this.V("beforeDispose"), D6(this, 3));
    g.P.prototype.dispose.call(this);
  };
  g.k.oa = function () {
    E6(this);
    G6(this);
    F6(this);
    g.bp(this.J);
    this.J = NaN;
    g.bp(this.L);
    this.L = NaN;
    this.u = null;
    g.Gp(this.W);
    this.W.length = 0;
    this.i.dispose();
    g.P.prototype.oa.call(this);
    this.B = this.I = this.l = this.hc = this.i = null;
  };
  g.k.rO = function () {
    this.Rq(2);
  };
  g.k.eQ = function () {
    C6("Channel opened");
    this.ra &&
      ((this.ra = !1),
      F6(this),
      (this.Y = g.$o(
        (0, g.C)(function () {
          C6("Timing out waiting for a screen.");
          this.Rq(1);
        }, this),
        15e3
      )));
    MJa(LKa(this.i), this.Aa);
  };
  g.k.bQ = function () {
    C6("Channel closed");
    isNaN(this.C) ? B4(!0) : B4();
    this.dispose();
  };
  g.k.cQ = function (a, b) {
    B4();
    isNaN(this.Ot())
      ? (b && "shortLived" == this.va && this.V("browserChannelAuthError", a),
        C6("Channel error: " + a + " without reconnection"),
        this.dispose())
      : ((this.ra = !0),
        C6(
          "Channel error: " + a + " with reconnection in " + this.Ot() + " ms"
        ),
        D6(this, 2));
  };
  g.k.dQ = function (a) {
    a.params
      ? C6("Received: action=" + a.action + ", params=" + g.uj(a.params))
      : C6("Received: action=" + a.action + " {}");
    switch (a.action) {
      case "loungeStatus":
        a = K4(a.params.devices);
        this.l = g.Pc(a, function (c) {
          return new p4(c);
        });
        a = !!g.db(this.l, function (c) {
          return "LOUNGE_SCREEN" == c.type;
        });
        OLa(this, a);
        break;
      case "loungeScreenDisconnected":
        g.nb(this.l, function (c) {
          return "LOUNGE_SCREEN" == c.type;
        });
        OLa(this, !1);
        break;
      case "remoteConnected":
        var b = new p4(K4(a.params.device));
        g.db(this.l, function (c) {
          return b ? c.id == b.id : !1;
        }) || sJa(this.l, b);
        break;
      case "remoteDisconnected":
        b = new p4(K4(a.params.device));
        g.nb(this.l, function (c) {
          return b ? c.id == b.id : !1;
        });
        break;
      case "gracefulDisconnect":
        break;
      case "playlistModified":
        QLa(this, a);
        break;
      case "nowPlaying":
        SLa(this, a);
        break;
      case "onStateChange":
        RLa(this, a);
        break;
      case "onAdStateChange":
        TLa(this, a);
        break;
      case "onVolumeChanged":
        ULa(this, a);
        break;
      case "onSubtitlesTrackChanged":
        PLa(this, a);
        break;
      case "nowAutoplaying":
        VLa(this, a);
        break;
      case "autoplayDismissed":
        this.V("autoplayDismissed");
        break;
      case "autoplayUpNext":
        this.I = a.params.videoId || null;
        this.V("autoplayUpNext", this.I);
        break;
      case "onAutoplayModeChanged":
        this.B = a.params.autoplayMode;
        this.V("autoplayModeChange", this.B);
        "DISABLED" == this.B && this.V("autoplayDismissed");
        break;
      case "onHasPreviousNextChanged":
        WLa(this, a);
        break;
      case "requestAssistedSignIn":
        this.V("assistedSignInRequested", a.params.authCode);
        break;
      default:
        C6("Unrecognized action: " + a.action);
    }
  };
  g.k.aT = function () {
    if (this.u) {
      var a = this.u;
      this.u = null;
      this.hc.videoId != a && H6(this, "getNowPlaying");
    }
  };
  g.k.mO = function () {
    var a = 3;
    this.Ga() ||
      ((a = 0),
      isNaN(this.Ot()) ? r5(this.i) && isNaN(this.C) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Rq = function (a) {
    C6("Disconnecting with " + a);
    E6(this);
    this.V("beforeDisconnect", a);
    1 == a && B4();
    MKa(this.i, a);
    this.dispose();
  };
  g.k.kO = function () {
    var a = this.hc;
    this.u && ((a = this.hc.clone()), q6(a, this.u, a.index));
    return r6(a);
  };
  g.k.lT = function (a) {
    var b = new l6(a);
    b.videoId &&
      b.videoId != this.hc.videoId &&
      ((this.u = b.videoId),
      g.bp(this.J),
      (this.J = g.$o((0, g.C)(this.aT, this), 5e3)));
    var c = [];
    (this.hc.listId == b.listId &&
      this.hc.videoId == b.videoId &&
      this.hc.index == b.index) ||
      c.push("remoteQueueChange");
    (this.hc.playerState == b.playerState &&
      this.hc.volume == b.volume &&
      this.hc.muted == b.muted &&
      p6(this.hc) == p6(b) &&
      g.uj(this.hc.trackData) == g.uj(b.trackData)) ||
      c.push("remotePlayerChange");
    this.hc.reset(a);
    g.Bb(
      c,
      function (d) {
        this.V(d);
      },
      this
    );
  };
  g.k.MG = function () {
    var a = this.i.I.id,
      b = g.db(this.l, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.Ot = function () {
    var a = this.i;
    return a.l.isActive() ? a.l.l - g.Ta() : NaN;
  };
  g.k.hO = function () {
    return this.B || "UNSUPPORTED";
  };
  g.k.iO = function () {
    return this.I || "";
  };
  g.k.OM = function () {
    if (!isNaN(this.Ot())) {
      var a = this.i.l;
      a.i.nh();
      a.start();
    }
  };
  g.k.iT = function (a, b) {
    H6(this, a, b);
    NLa(this);
  };
  g.k.KE = function () {
    var a = g.qo("SID", "") || "",
      b = g.qo("SAPISID", "") || "",
      c = g.qo("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.qf(g.Ue(a), 2);
    b = g.qf(g.Ue(b), 2);
    c = g.qf(g.Ue(c), 2);
    return g.qf(g.Ue(a + "," + b + "," + c), 2);
  };
  B6.prototype.subscribe = B6.prototype.subscribe;
  B6.prototype.unsubscribeByKey = B6.prototype.Jg;
  B6.prototype.getProxyState = B6.prototype.mO;
  B6.prototype.disconnect = B6.prototype.Rq;
  B6.prototype.getPlayerContextData = B6.prototype.kO;
  B6.prototype.setPlayerContextData = B6.prototype.lT;
  B6.prototype.getOtherConnectedRemoteId = B6.prototype.MG;
  B6.prototype.getReconnectTimeout = B6.prototype.Ot;
  B6.prototype.getAutoplayMode = B6.prototype.hO;
  B6.prototype.getAutoplayVideoId = B6.prototype.iO;
  B6.prototype.reconnect = B6.prototype.OM;
  B6.prototype.sendMessage = B6.prototype.iT;
  B6.prototype.getXsrfToken = B6.prototype.KE;
  g.v(I6, A5);
  g.k = I6.prototype;
  g.k.Oh = function (a) {
    return this.Ag.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Ag.$_c(a);
  };
  g.k.get = function (a) {
    return this.Ag.$_g(a);
  };
  g.k.start = function () {
    this.Ag.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Ag.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Ag.$_r(a, b, c);
  };
  g.k.Ey = function (a, b, c, d) {
    this.Ag.$_un(a, b, c, d);
  };
  g.k.oa = function () {
    for (var a = 0, b = this.i.length; a < b; ++a) this.Ag.$_ubk(this.i[a]);
    this.i.length = 0;
    this.Ag = null;
    A5.prototype.oa.call(this);
  };
  g.k.PM = function () {
    this.V("screenChange");
  };
  g.k.cR = function () {
    this.V("onlineScreenChange");
  };
  K5.prototype.$_st = K5.prototype.start;
  K5.prototype.$_gspc = K5.prototype.IM;
  K5.prototype.$_gsppc = K5.prototype.GE;
  K5.prototype.$_c = K5.prototype.contains;
  K5.prototype.$_g = K5.prototype.get;
  K5.prototype.$_a = K5.prototype.add;
  K5.prototype.$_un = K5.prototype.Ey;
  K5.prototype.$_r = K5.prototype.remove;
  K5.prototype.$_gs = K5.prototype.Oh;
  K5.prototype.$_gos = K5.prototype.FE;
  K5.prototype.$_s = K5.prototype.subscribe;
  K5.prototype.$_ubk = K5.prototype.Jg;
  var V6 = null,
    a7 = !1,
    J6 = null,
    K6 = null,
    $6 = null,
    O6 = [];
  g.v(b7, g.F);
  g.k = b7.prototype;
  g.k.oa = function () {
    g.F.prototype.oa.call(this);
    this.i.stop();
    this.u.stop();
    this.L.stop();
    this.Y();
    var a = this.Ob;
    a.unsubscribe("proxyStateChange", this.SI, this);
    a.unsubscribe("remotePlayerChange", this.Du, this);
    a.unsubscribe("remoteQueueChange", this.Hx, this);
    a.unsubscribe("previousNextChange", this.OI, this);
    a.unsubscribe("nowAutoplaying", this.II, this);
    a.unsubscribe("autoplayDismissed", this.fI, this);
    this.Ob = this.l = null;
  };
  g.k.LE = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    if (2 != this.Ob.bb)
      if (c7(this)) {
        if (!u6(this.Ob).isAdPlaying() || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              u6(this.Ob).qc() ? this.Ob.pause() : this.Ob.play();
              break;
            case "control_play":
              this.Ob.play();
              break;
            case "control_pause":
              this.Ob.pause();
              break;
            case "control_seek":
              this.J.nh(c[0], c[1]);
              break;
            case "control_subtitles_set_track":
              d7(this, c[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(c[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            c = this.G.getCurrentTime();
            e7(this, 0 === c ? void 0 : c);
            break;
          case "control_seek":
            e7(this, c[0]);
            break;
          case "control_subtitles_set_track":
            d7(this, c[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(c[0]);
        }
  };
  g.k.XP = function (a) {
    this.L.nh(a);
  };
  g.k.OT = function (a) {
    this.LE("control_subtitles_set_track", g.Rb(a) ? null : a);
  };
  g.k.cK = function () {
    var a = this.G.getOption("captions", "track");
    g.Rb(a) || d7(this, a);
  };
  g.k.Sb = function (a) {
    this.l.Sb(a, this.G.getVideoData().lengthSeconds);
  };
  g.k.LQ = function () {
    g.Rb(this.B) || gMa(this, this.B);
    this.C = !1;
  };
  g.k.SI = function (a, b) {
    this.u.stop();
    2 === b && this.XJ();
  };
  g.k.Du = function () {
    if (c7(this)) {
      this.i.stop();
      var a = u6(this.Ob);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.l.Bf = 1;
          break;
        case 1082:
        case 1083:
          this.l.Bf = 0;
          break;
        default:
          this.l.Bf = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Lb(new g.MI(8));
          this.WJ();
          break;
        case 1085:
        case 3:
          this.Lb(new g.MI(9));
          break;
        case 1083:
        case 0:
          this.Lb(new g.MI(2));
          this.J.stop();
          this.Sb(this.G.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Lb(new g.MI(4));
          break;
        case 2:
          this.Lb(new g.MI(4));
          this.Sb(p6(a));
          break;
        case -1:
          this.Lb(new g.MI(64));
          break;
        case -1e3:
          this.Lb(
            new g.MI(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
            })
          );
      }
      a = u6(this.Ob).trackData;
      var b = this.B;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.B = a), gMa(this, a));
      a = u6(this.Ob);
      -1 === a.volume ||
        (Math.round(this.G.getVolume()) === a.volume &&
          this.G.isMuted() === a.muted) ||
        this.W.isActive() ||
        this.xK();
    } else fMa(this);
  };
  g.k.OI = function () {
    this.G.V("mdxpreviousnextchange");
  };
  g.k.Hx = function () {
    c7(this) || fMa(this);
  };
  g.k.II = function (a) {
    isNaN(a) || this.G.V("mdxnowautoplaying", a);
  };
  g.k.fI = function () {
    this.G.V("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    c7(this) && this.Ob.setAudioTrack(this.G.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === u6(this.Ob).playerState ? e7(this, a) : b && this.Ob.seekTo(a);
  };
  g.k.xK = function () {
    var a = this;
    if (c7(this)) {
      var b = u6(this.Ob);
      this.events.jc(this.X);
      b.muted ? this.G.mute() : this.G.unMute();
      this.G.setVolume(b.volume);
      this.X = this.events.N(this.G, "onVolumeChange", function (c) {
        eMa(a, c);
      });
    }
  };
  g.k.WJ = function () {
    this.i.stop();
    if (!this.Ob.Ga()) {
      var a = u6(this.Ob);
      a.qc() && this.Lb(new g.MI(8));
      this.Sb(p6(a));
      this.i.start();
    }
  };
  g.k.XJ = function () {
    this.u.stop();
    this.i.stop();
    var a = this.Ob.u.getReconnectTimeout();
    2 == this.Ob.bb && !isNaN(a) && this.u.start();
  };
  g.k.Lb = function (a) {
    this.u.stop();
    var b = this.I;
    if (!g.RI(b, a)) {
      var c = g.U(a, 2);
      c !== g.U(this.I, 2) && this.G.Kp(c);
      this.I = a;
      iMa(this.l, b, a);
    }
  };
  g.v(f7, g.V);
  f7.prototype.bd = function () {
    this.i.show();
  };
  f7.prototype.Bb = function () {
    this.i.hide();
  };
  f7.prototype.l = function () {
    g.sI("https://support.google.com/youtube/answer/7640706");
  };
  f7.prototype.u = function () {
    o4("mdx-manual-pairing-popup-ok");
    this.Bb();
  };
  g.v(g7, g.V);
  g7.prototype.bd = function () {
    this.i.show();
  };
  g7.prototype.Bb = function () {
    this.i.hide();
  };
  g7.prototype.l = function () {
    o4("mdx-privacy-popup-cancel");
    this.Bb();
  };
  g7.prototype.u = function () {
    o4("mdx-privacy-popup-confirm");
    this.Bb();
  };
  g.v(h7, g.V);
  h7.prototype.l = function (a) {
    hMa(this, a.state);
  };
  g.v(i7, g.DO);
  i7.prototype.C = function () {
    var a = this.G.getOption("remote", "receivers");
    a && 1 < a.length && !this.G.getOption("remote", "quickCast")
      ? ((this.In = g.Cb(a, this.i, this)),
        g.EO(this, g.Pc(a, this.i)),
        (a = this.G.getOption("remote", "currentReceiver")),
        (a = this.i(a)),
        this.options[a] && this.di(a),
        this.enable(!0))
      : this.enable(!1);
  };
  i7.prototype.i = function (a) {
    return a.key;
  };
  i7.prototype.bj = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.In[a].name;
  };
  i7.prototype.If = function (a) {
    g.DO.prototype.If.call(this, a);
    this.G.setOption("remote", "currentReceiver", this.In[a]);
    this.wb.Bb();
  };
  g.v(j7, g.SL);
  g.k = j7.prototype;
  g.k.create = function () {
    var a = this.player.T(),
      b = g.ED(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: g.S(
        a.experiments,
        "mdx_load_cast_api_bootstrap_script"
      ),
      enableDialLoungeToken: g.S(
        a.experiments,
        "enable_dial_short_lived_lounge_token"
      ),
      enableCastLoungeToken: g.S(
        a.experiments,
        "enable_cast_short_lived_lounge_token"
      ),
    };
    $La(b, a);
    this.subscriptions.push(g.Dq("yt-remote-before-disconnect", this.VP, this));
    this.subscriptions.push(g.Dq("yt-remote-connection-change", this.CR, this));
    this.subscriptions.push(
      g.Dq("yt-remote-receiver-availability-change", this.RI, this)
    );
    this.subscriptions.push(g.Dq("yt-remote-auto-connect", this.AR, this));
    this.subscriptions.push(g.Dq("yt-remote-receiver-resumed", this.zR, this));
    this.subscriptions.push(g.Dq("mdx-privacy-popup-confirm", this.RS, this));
    this.subscriptions.push(g.Dq("mdx-privacy-popup-cancel", this.QS, this));
    this.subscriptions.push(g.Dq("mdx-manual-pairing-popup-ok", this.hP, this));
    this.RI();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.SL.prototype.load.call(this);
    this.ni = new b7(this, this.player, this.Ob);
    var a = (a = dMa()) ? a.currentTime : 0;
    var b = Z6() ? new t6(T6(), void 0) : null;
    0 == a && b && (a = p6(u6(b)));
    0 !== a && this.Sb(a);
    iMa(this, this.qd, this.qd);
    this.player.Yk(6);
  };
  g.k.unload = function () {
    this.player.V("mdxautoplaycanceled");
    this.Mm = this.sj;
    g.vi(this.ni, this.Ob);
    this.Ob = this.ni = null;
    g.SL.prototype.unload.call(this);
    this.player.Yk(5);
    k7(this);
  };
  g.k.oa = function () {
    g.Eq(this.subscriptions);
    g.SL.prototype.oa.call(this);
  };
  g.k.Sk = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.loaded && this.ni.LE.apply(this.ni, [a].concat(g.ma(c)));
  };
  g.k.getAdState = function () {
    return this.Bf;
  };
  g.k.nO = function () {
    return this.loaded ? this.ni.suggestion : null;
  };
  g.k.Gk = function () {
    return this.Ob ? u6(this.Ob).Gk : !1;
  };
  g.k.hasNext = function () {
    return this.Ob ? u6(this.Ob).hasNext : !1;
  };
  g.k.Sb = function (a, b) {
    this.BH = a || 0;
    this.player.V("progresssync", a, b);
  };
  g.k.getCurrentTime = function () {
    return this.BH;
  };
  g.k.getProgressState = function () {
    var a = u6(this.Ob),
      b = this.player.getVideoData();
    return {
      allowSeeking: g.S(
        this.player.T().experiments,
        "web_player_mdx_allow_seeking_change_killswitch"
      )
        ? this.player.Af()
        : !a.isAdPlaying() && this.player.Af(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.l ? a.u + n6(a) : a.u,
      isAtLiveHead: 1 >= (a.l ? a.i + n6(a) : a.i) - this.getCurrentTime(),
      loaded: a.L,
      seekableEnd: a.l ? a.i + n6(a) : a.i,
      seekableStart: 0 < a.B ? a.B + n6(a) : a.B,
    };
  };
  g.k.nextVideo = function () {
    this.Ob && this.Ob.nextVideo();
  };
  g.k.Jx = function () {
    this.Ob && this.Ob.Jx();
  };
  g.k.VP = function (a) {
    1 === a && (this.rC = this.Ob ? u6(this.Ob) : null);
  };
  g.k.CR = function () {
    var a = Z6() ? new t6(T6(), void 0) : null;
    if (a) {
      var b = this.Mm;
      this.loaded && this.unload();
      this.Ob = a;
      this.rC = null;
      b.key !== this.sj.key && ((this.Mm = b), this.load());
    } else
      g.ui(this.Ob),
        (this.Ob = null),
        this.loaded &&
          (this.unload(),
          (a = this.rC) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, p6(a)));
    this.player.V("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.RI = function () {
    var a = [this.sj],
      b = a.concat,
      c = aMa();
    h6() &&
      g.Ju("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.In = b.call(a, c);
    a = U6() || this.sj;
    l7(this, a);
    this.player.La("onMdxReceiversChange");
  };
  g.k.AR = function () {
    var a = U6();
    l7(this, a);
  };
  g.k.zR = function () {
    this.Mm = U6();
  };
  g.k.RS = function () {
    this.Hu = !0;
    k7(this);
    a7 = !1;
    V6 && X6(V6, 1);
    V6 = null;
  };
  g.k.QS = function () {
    this.Hu = !1;
    k7(this);
    l7(this, this.sj);
    this.Mm = this.sj;
    a7 = !1;
    V6 = null;
    this.player.playVideo();
  };
  g.k.hP = function () {
    this.ix = !0;
    k7(this);
    g.Iu("yt-remote-manual-pairing-warning-shown", !0, 2592e3);
    a7 = !1;
    V6 && X6(V6, 1);
    V6 = null;
  };
  g.k.wf = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.In;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? j6() : l7(this, b)),
          this.loaded ? this.Mm : this.sj
        );
      case "quickCast":
        return 2 === this.In.length &&
          "cast-selector-receiver" === this.In[1].key
          ? (b && j6(), !0)
          : !1;
    }
  };
  g.k.hD = function () {
    this.Ob.hD();
  };
  g.k.Si = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.YL.remote = j7;
})(_yt_player);

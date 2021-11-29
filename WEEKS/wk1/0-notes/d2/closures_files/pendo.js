// Pendo Agent Wrapper
// Environment:    production
// Agent Version:  2.86.0
// Installed:      2021-04-01T19:08:35Z
(function (PendoConfig) {
  var pendoModule = (function (window, document, undefined) {
    function shouldLoadStagingAgent(e) {
      if (hasHashedStagingServers(e))
        for (
          var t = getHash(location.host),
            n = 0,
            i = e[STAGING_SERVER_HASHES].length;
          i > n;
          ++n
        ) {
          var o = e[STAGING_SERVER_HASHES][n];
          if (o === t) return !0;
        }
      if (hasStagingServerConfig(e))
        for (var r = 0, a = e.stagingServers.length; a > r; ++r) {
          var s = e.stagingServers[r];
          if (
            ("string" == typeof s && (s = new RegExp("^" + s + "$")),
            s instanceof RegExp && s.test(location.host))
          )
            return !0;
        }
      return !1;
    }
    function getHash(e) {
      return b64.uint8ToBase64(sha1.create().update(e).digest());
    }
    function hasHashedStagingServers(e) {
      return e && e.stagingAgentUrl && e[STAGING_SERVER_HASHES];
    }
    function hasStagingServerConfig(e) {
      return e && e.stagingAgentUrl && e.stagingServers;
    }
    function enqueueCall(e, t) {
      var n = (windowOrMountPoint.pendo = windowOrMountPoint.pendo || {}),
        i = (n._q = n._q || []),
        o = "initialize" === e ? "unshift" : "push";
      i[o]([].concat.apply([e], t));
    }
    function captureCall(e, t) {
      t[e] =
        t[e] ||
        function () {
          enqueueCall(e, arguments);
        };
    }
    function loadStagingAgent(e) {
      if (shouldLoadStagingAgent(e)) {
        var t = (windowOrMountPoint.pendo = windowOrMountPoint.pendo || {});
        if (!t._q) {
          var n,
            i,
            o = METHODS_TO_CAPTURE;
          for (n = 0, i = o.length; i > n; ++n) captureCall(o[n], t);
        }
        return includeScript(e.stagingAgentUrl), !0;
      }
      return !1;
    }
    function includeScript(e) {
      var t = "script",
        n = document.createElement(t);
      (n.async = !0), (n.src = e);
      var i = document.getElementsByTagName(t)[0];
      i && i.parentNode
        ? i.parentNode.insertBefore(n, i)
        : (document.head || document.body).appendChild(n);
    }
    function getPendoConfigValue(e) {
      return "undefined" != typeof PendoConfig ? PendoConfig[e] : void 0;
    }
    var sha1 = (function (module) {
        return (
          (function () {
            "use strict";
            function Sha1(e) {
              e
                ? ((blocks[0] =
                    blocks[16] =
                    blocks[1] =
                    blocks[2] =
                    blocks[3] =
                    blocks[4] =
                    blocks[5] =
                    blocks[6] =
                    blocks[7] =
                    blocks[8] =
                    blocks[9] =
                    blocks[10] =
                    blocks[11] =
                    blocks[12] =
                    blocks[13] =
                    blocks[14] =
                    blocks[15] =
                      0),
                  (this.blocks = blocks))
                : (this.blocks = [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  ]),
                (this.h0 = 1732584193),
                (this.h1 = 4023233417),
                (this.h2 = 2562383102),
                (this.h3 = 271733878),
                (this.h4 = 3285377520),
                (this.block = this.start = this.bytes = this.hBytes = 0),
                (this.finalized = this.hashed = !1),
                (this.first = !0);
            }
            var root = "object" == typeof window ? window : {},
              NODE_JS =
                !root.JS_SHA1_NO_NODE_JS &&
                "object" == typeof process &&
                process.versions &&
                process.versions.node;
            NODE_JS && (root = global);
            var COMMON_JS =
                !root.JS_SHA1_NO_COMMON_JS &&
                "object" == typeof module &&
                module.exports,
              AMD = "function" == typeof define && define.amd,
              HEX_CHARS = "0123456789abcdef".split(""),
              EXTRA = [-2147483648, 8388608, 32768, 128],
              SHIFT = [24, 16, 8, 0],
              OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
              blocks = [],
              createOutputMethod = function (e) {
                return function (t) {
                  return new Sha1(!0).update(t)[e]();
                };
              },
              createMethod = function () {
                var e = createOutputMethod("hex");
                NODE_JS && (e = nodeWrap(e)),
                  (e.create = function () {
                    return new Sha1();
                  }),
                  (e.update = function (t) {
                    return e.create().update(t);
                  });
                for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                  var n = OUTPUT_TYPES[t];
                  e[n] = createOutputMethod(n);
                }
                return e;
              },
              nodeWrap = function (method) {
                var crypto = eval("require('crypto')"),
                  Buffer = eval("require('buffer').Buffer"),
                  nodeMethod = function (e) {
                    if ("string" == typeof e)
                      return crypto
                        .createHash("sha1")
                        .update(e, "utf8")
                        .digest("hex");
                    if (e.constructor === ArrayBuffer) e = new Uint8Array(e);
                    else if (e.length === undefined) return method(e);
                    return crypto
                      .createHash("sha1")
                      .update(new Buffer(e))
                      .digest("hex");
                  };
                return nodeMethod;
              };
            (Sha1.prototype.update = function (e) {
              if (!this.finalized) {
                var t = "string" != typeof e;
                t &&
                  e.constructor === root.ArrayBuffer &&
                  (e = new Uint8Array(e));
                for (
                  var n, i, o = 0, r = e.length || 0, a = this.blocks;
                  r > o;

                ) {
                  if (
                    (this.hashed &&
                      ((this.hashed = !1),
                      (a[0] = this.block),
                      (a[16] =
                        a[1] =
                        a[2] =
                        a[3] =
                        a[4] =
                        a[5] =
                        a[6] =
                        a[7] =
                        a[8] =
                        a[9] =
                        a[10] =
                        a[11] =
                        a[12] =
                        a[13] =
                        a[14] =
                        a[15] =
                          0)),
                    t)
                  )
                    for (i = this.start; r > o && 64 > i; ++o)
                      a[i >> 2] |= e[o] << SHIFT[3 & i++];
                  else
                    for (i = this.start; r > o && 64 > i; ++o)
                      (n = e.charCodeAt(o)),
                        128 > n
                          ? (a[i >> 2] |= n << SHIFT[3 & i++])
                          : 2048 > n
                          ? ((a[i >> 2] |= (192 | (n >> 6)) << SHIFT[3 & i++]),
                            (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]))
                          : 55296 > n || n >= 57344
                          ? ((a[i >> 2] |= (224 | (n >> 12)) << SHIFT[3 & i++]),
                            (a[i >> 2] |=
                              (128 | ((n >> 6) & 63)) << SHIFT[3 & i++]),
                            (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]))
                          : ((n =
                              65536 +
                              (((1023 & n) << 10) |
                                (1023 & e.charCodeAt(++o)))),
                            (a[i >> 2] |= (240 | (n >> 18)) << SHIFT[3 & i++]),
                            (a[i >> 2] |=
                              (128 | ((n >> 12) & 63)) << SHIFT[3 & i++]),
                            (a[i >> 2] |=
                              (128 | ((n >> 6) & 63)) << SHIFT[3 & i++]),
                            (a[i >> 2] |= (128 | (63 & n)) << SHIFT[3 & i++]));
                  (this.lastByteIndex = i),
                    (this.bytes += i - this.start),
                    i >= 64
                      ? ((this.block = a[16]),
                        (this.start = i - 64),
                        this.hash(),
                        (this.hashed = !0))
                      : (this.start = i);
                }
                return (
                  this.bytes > 4294967295 &&
                    ((this.hBytes += (this.bytes / 4294967296) << 0),
                    (this.bytes = this.bytes % 4294967296)),
                  this
                );
              }
            }),
              (Sha1.prototype.finalize = function () {
                if (!this.finalized) {
                  this.finalized = !0;
                  var e = this.blocks,
                    t = this.lastByteIndex;
                  (e[16] = this.block),
                    (e[t >> 2] |= EXTRA[3 & t]),
                    (this.block = e[16]),
                    t >= 56 &&
                      (this.hashed || this.hash(),
                      (e[0] = this.block),
                      (e[16] =
                        e[1] =
                        e[2] =
                        e[3] =
                        e[4] =
                        e[5] =
                        e[6] =
                        e[7] =
                        e[8] =
                        e[9] =
                        e[10] =
                        e[11] =
                        e[12] =
                        e[13] =
                        e[14] =
                        e[15] =
                          0)),
                    (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                    (e[15] = this.bytes << 3),
                    this.hash();
                }
              }),
              (Sha1.prototype.hash = function () {
                var e,
                  t,
                  n,
                  i = this.h0,
                  o = this.h1,
                  r = this.h2,
                  a = this.h3,
                  s = this.h4,
                  d = this.blocks;
                for (t = 16; 80 > t; ++t)
                  (n = d[t - 3] ^ d[t - 8] ^ d[t - 14] ^ d[t - 16]),
                    (d[t] = (n << 1) | (n >>> 31));
                for (t = 0; 20 > t; t += 5)
                  (e = (o & r) | (~o & a)),
                    (n = (i << 5) | (i >>> 27)),
                    (s = (n + e + s + 1518500249 + d[t]) << 0),
                    (o = (o << 30) | (o >>> 2)),
                    (e = (i & o) | (~i & r)),
                    (n = (s << 5) | (s >>> 27)),
                    (a = (n + e + a + 1518500249 + d[t + 1]) << 0),
                    (i = (i << 30) | (i >>> 2)),
                    (e = (s & i) | (~s & o)),
                    (n = (a << 5) | (a >>> 27)),
                    (r = (n + e + r + 1518500249 + d[t + 2]) << 0),
                    (s = (s << 30) | (s >>> 2)),
                    (e = (a & s) | (~a & i)),
                    (n = (r << 5) | (r >>> 27)),
                    (o = (n + e + o + 1518500249 + d[t + 3]) << 0),
                    (a = (a << 30) | (a >>> 2)),
                    (e = (r & a) | (~r & s)),
                    (n = (o << 5) | (o >>> 27)),
                    (i = (n + e + i + 1518500249 + d[t + 4]) << 0),
                    (r = (r << 30) | (r >>> 2));
                for (; 40 > t; t += 5)
                  (e = o ^ r ^ a),
                    (n = (i << 5) | (i >>> 27)),
                    (s = (n + e + s + 1859775393 + d[t]) << 0),
                    (o = (o << 30) | (o >>> 2)),
                    (e = i ^ o ^ r),
                    (n = (s << 5) | (s >>> 27)),
                    (a = (n + e + a + 1859775393 + d[t + 1]) << 0),
                    (i = (i << 30) | (i >>> 2)),
                    (e = s ^ i ^ o),
                    (n = (a << 5) | (a >>> 27)),
                    (r = (n + e + r + 1859775393 + d[t + 2]) << 0),
                    (s = (s << 30) | (s >>> 2)),
                    (e = a ^ s ^ i),
                    (n = (r << 5) | (r >>> 27)),
                    (o = (n + e + o + 1859775393 + d[t + 3]) << 0),
                    (a = (a << 30) | (a >>> 2)),
                    (e = r ^ a ^ s),
                    (n = (o << 5) | (o >>> 27)),
                    (i = (n + e + i + 1859775393 + d[t + 4]) << 0),
                    (r = (r << 30) | (r >>> 2));
                for (; 60 > t; t += 5)
                  (e = (o & r) | (o & a) | (r & a)),
                    (n = (i << 5) | (i >>> 27)),
                    (s = (n + e + s - 1894007588 + d[t]) << 0),
                    (o = (o << 30) | (o >>> 2)),
                    (e = (i & o) | (i & r) | (o & r)),
                    (n = (s << 5) | (s >>> 27)),
                    (a = (n + e + a - 1894007588 + d[t + 1]) << 0),
                    (i = (i << 30) | (i >>> 2)),
                    (e = (s & i) | (s & o) | (i & o)),
                    (n = (a << 5) | (a >>> 27)),
                    (r = (n + e + r - 1894007588 + d[t + 2]) << 0),
                    (s = (s << 30) | (s >>> 2)),
                    (e = (a & s) | (a & i) | (s & i)),
                    (n = (r << 5) | (r >>> 27)),
                    (o = (n + e + o - 1894007588 + d[t + 3]) << 0),
                    (a = (a << 30) | (a >>> 2)),
                    (e = (r & a) | (r & s) | (a & s)),
                    (n = (o << 5) | (o >>> 27)),
                    (i = (n + e + i - 1894007588 + d[t + 4]) << 0),
                    (r = (r << 30) | (r >>> 2));
                for (; 80 > t; t += 5)
                  (e = o ^ r ^ a),
                    (n = (i << 5) | (i >>> 27)),
                    (s = (n + e + s - 899497514 + d[t]) << 0),
                    (o = (o << 30) | (o >>> 2)),
                    (e = i ^ o ^ r),
                    (n = (s << 5) | (s >>> 27)),
                    (a = (n + e + a - 899497514 + d[t + 1]) << 0),
                    (i = (i << 30) | (i >>> 2)),
                    (e = s ^ i ^ o),
                    (n = (a << 5) | (a >>> 27)),
                    (r = (n + e + r - 899497514 + d[t + 2]) << 0),
                    (s = (s << 30) | (s >>> 2)),
                    (e = a ^ s ^ i),
                    (n = (r << 5) | (r >>> 27)),
                    (o = (n + e + o - 899497514 + d[t + 3]) << 0),
                    (a = (a << 30) | (a >>> 2)),
                    (e = r ^ a ^ s),
                    (n = (o << 5) | (o >>> 27)),
                    (i = (n + e + i - 899497514 + d[t + 4]) << 0),
                    (r = (r << 30) | (r >>> 2));
                (this.h0 = (this.h0 + i) << 0),
                  (this.h1 = (this.h1 + o) << 0),
                  (this.h2 = (this.h2 + r) << 0),
                  (this.h3 = (this.h3 + a) << 0),
                  (this.h4 = (this.h4 + s) << 0);
              }),
              (Sha1.prototype.hex = function () {
                this.finalize();
                var e = this.h0,
                  t = this.h1,
                  n = this.h2,
                  i = this.h3,
                  o = this.h4;
                return (
                  HEX_CHARS[(e >> 28) & 15] +
                  HEX_CHARS[(e >> 24) & 15] +
                  HEX_CHARS[(e >> 20) & 15] +
                  HEX_CHARS[(e >> 16) & 15] +
                  HEX_CHARS[(e >> 12) & 15] +
                  HEX_CHARS[(e >> 8) & 15] +
                  HEX_CHARS[(e >> 4) & 15] +
                  HEX_CHARS[15 & e] +
                  HEX_CHARS[(t >> 28) & 15] +
                  HEX_CHARS[(t >> 24) & 15] +
                  HEX_CHARS[(t >> 20) & 15] +
                  HEX_CHARS[(t >> 16) & 15] +
                  HEX_CHARS[(t >> 12) & 15] +
                  HEX_CHARS[(t >> 8) & 15] +
                  HEX_CHARS[(t >> 4) & 15] +
                  HEX_CHARS[15 & t] +
                  HEX_CHARS[(n >> 28) & 15] +
                  HEX_CHARS[(n >> 24) & 15] +
                  HEX_CHARS[(n >> 20) & 15] +
                  HEX_CHARS[(n >> 16) & 15] +
                  HEX_CHARS[(n >> 12) & 15] +
                  HEX_CHARS[(n >> 8) & 15] +
                  HEX_CHARS[(n >> 4) & 15] +
                  HEX_CHARS[15 & n] +
                  HEX_CHARS[(i >> 28) & 15] +
                  HEX_CHARS[(i >> 24) & 15] +
                  HEX_CHARS[(i >> 20) & 15] +
                  HEX_CHARS[(i >> 16) & 15] +
                  HEX_CHARS[(i >> 12) & 15] +
                  HEX_CHARS[(i >> 8) & 15] +
                  HEX_CHARS[(i >> 4) & 15] +
                  HEX_CHARS[15 & i] +
                  HEX_CHARS[(o >> 28) & 15] +
                  HEX_CHARS[(o >> 24) & 15] +
                  HEX_CHARS[(o >> 20) & 15] +
                  HEX_CHARS[(o >> 16) & 15] +
                  HEX_CHARS[(o >> 12) & 15] +
                  HEX_CHARS[(o >> 8) & 15] +
                  HEX_CHARS[(o >> 4) & 15] +
                  HEX_CHARS[15 & o]
                );
              }),
              (Sha1.prototype.toString = Sha1.prototype.hex),
              (Sha1.prototype.digest = function () {
                this.finalize();
                var e = this.h0,
                  t = this.h1,
                  n = this.h2,
                  i = this.h3,
                  o = this.h4;
                return [
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                  (n >> 24) & 255,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  (i >> 24) & 255,
                  (i >> 16) & 255,
                  (i >> 8) & 255,
                  255 & i,
                  (o >> 24) & 255,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o,
                ];
              }),
              (Sha1.prototype.array = Sha1.prototype.digest),
              (Sha1.prototype.arrayBuffer = function () {
                this.finalize();
                var e = new ArrayBuffer(20),
                  t = new DataView(e);
                return (
                  t.setUint32(0, this.h0),
                  t.setUint32(4, this.h1),
                  t.setUint32(8, this.h2),
                  t.setUint32(12, this.h3),
                  t.setUint32(16, this.h4),
                  e
                );
              });
            var exports = createMethod();
            COMMON_JS
              ? (module.exports = exports)
              : ((root.sha1 = exports),
                AMD &&
                  define(function () {
                    return exports;
                  }));
          })(),
          module.exports
        );
      })({ exports: {} }),
      b64 = (function () {
        "use strict";
        function e(e) {
          function n(e) {
            return (
              t[(e >> 18) & 63] +
              t[(e >> 12) & 63] +
              t[(e >> 6) & 63] +
              t[63 & e]
            );
          }
          var i,
            o,
            r,
            a = e.length % 3,
            s = "";
          for (i = 0, r = e.length - a; r > i; i += 3)
            (o = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2]), (s += n(o));
          switch (a) {
            case 1:
              (o = e[e.length - 1]), (s += t[o >> 2]), (s += t[(o << 4) & 63]);
              break;
            case 2:
              (o = (e[e.length - 2] << 8) + e[e.length - 1]),
                (s += t[o >> 10]),
                (s += t[(o >> 4) & 63]),
                (s += t[(o << 2) & 63]);
          }
          return s;
        }
        var t =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
            ""
          );
        return { uint8ToBase64: e };
      })(),
      STAGING_SERVER_HASHES = "stagingServerHashes",
      windowOrMountPoint = getPendoConfigValue("loadAsModule") ? {} : window,
      METHODS_TO_CAPTURE = [
        "initialize",
        "identify",
        "updateOptions",
        "pageLoad",
        "track",
      ];
    return "undefined" != typeof PendoConfig && loadStagingAgent(PendoConfig)
      ? void 0
      : ((function () {
          "use strict";
          function Eventable() {
            var e = (this._handlers = {});
            return (
              (this.on = function (t, n) {
                if (_.isString(t) || _.isFunction(n)) {
                  var i = e[t];
                  i || (i = e[t] = []), _.indexOf(i, n) < 0 && i.push(n);
                }
                return this;
              }),
              (this.one = function (e, t) {
                var n = this,
                  i = function () {
                    n.off(e, i), t.apply(this, arguments);
                  };
                return this.on(e, i);
              }),
              (this.off = function (t, n) {
                var i = e[t];
                if (_.isFunction(n)) {
                  var o = _.indexOf(i, n);
                  i && o >= 0 && i.splice(o, 1);
                } else i && n === undefined && (i.length = 0);
                return this;
              }),
              (this.trigger = function (t) {
                var n = e[t],
                  i = _.toArray(arguments).slice(1),
                  o = _.map(n, function (e) {
                    var t = e.apply(pendo, i);
                    return t === !1 ? q.reject() : t;
                  });
                return q.all(o);
              }),
              this
            );
          }
          function backupObjectState(e, t) {
            var n = {};
            return (
              t || (t = _.keys(e)),
              _.each(t, function (t) {
                var i = e[t];
                _.isArray(i)
                  ? (n[t] = i.slice())
                  : _.isFunction(i) || (n[t] = i);
              }),
              function () {
                _.each(n, function (t, n) {
                  e[n] = t;
                });
              }
            );
          }
          function getNow() {
            return new Date().getTime();
          }
          function isSfdcLightning() {
            return (
              "undefined" != typeof $A &&
              _.isFunction($A.get) &&
              _.isString($A.get("$Browser.formFactor"))
            );
          }
          function createStatefulIterator(e) {
            function t(t, n) {
              if (!n) return t;
              for (var i = 0, o = t.length; o > i; ++i)
                if (e(t[i], i) === n)
                  return t.slice(i + 1).concat(t.slice(0, i + 1));
              return t;
            }
            function n(n, i) {
              if (n && n.length) {
                n = t(n, this.lastKey);
                for (var o = 0; o < n.length; ++o)
                  if (i(n[o], o)) return void (this.lastKey = e(n[o], o));
                this.lastKey = null;
              }
            }
            function i() {
              this.lastKey = null;
            }
            return (
              _.isFunction(e) ||
                (e = function (e, t) {
                  return t;
                }),
              { lastKey: null, eachUntil: n, reset: i }
            );
          }
          function throttleIterator(e, t) {
            return (
              (t.eachUntil = _.wrap(t.eachUntil, function (t, n, i) {
                var o = getNow();
                return t.call(this, n, function () {
                  return (
                    i.apply(this, arguments) || Math.abs(getNow() - o) >= e
                  );
                });
              })),
              t
            );
          }
          function getHashFromContentUrl(e) {
            var t = parseContentUrl(e);
            return t ? t.filename : void 0;
          }
          function parseContentUrl(e) {
            if (_.isString(e)) {
              var t = parseQueryString(e).substring(1),
                n = t && t.length ? queryStringToObject(t) : {},
                i = _.last(_.first(e.split("?")).split("/")),
                o = i.split(".");
              return {
                filename: _.first(o),
                extension: o.slice(1).join("."),
                query: n,
              };
            }
          }
          function get(e, t, n) {
            if (_.isString(t)) {
              if (doesExist(e) && doesExist(e[t])) return e[t];
              for (var i = t.split("."), o = 0, r = i.length; r > o; ++o) {
                if (!doesExist(e)) return n;
                e = e[i[o]];
              }
              return doesExist(e) ? e : n;
            }
            return n;
          }
          function getZoneSafeMethod(e) {
            var t = "__symbol__";
            if ("undefined" != typeof Zone && _.isFunction(Zone[t])) {
              var n = window[Zone[t](e)];
              if (_.isFunction(n)) return n;
            }
            return window[e];
          }
          function isInteger(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }
          function poll(e, t, n, i) {
            (t = t || {}),
              (t.maxRetries = isInteger(t.maxRetries) ? t.maxRetries : 10),
              (t.delay = isInteger(t.delay) ? t.delay : 50),
              (t.exponentialBackoff = t.exponentialBackoff || !1);
            var o = function (e) {
                return e && "[object Function]" === {}.toString.call(e);
              },
              r = o(n) ? n : function () {},
              a = o(i) ? i : function () {},
              s = e();
            s
              ? r(s)
              : t.maxRetries > 0
              ? setTimeout(function () {
                  (t.maxRetries = --t.maxRetries),
                    (t.delay = t.exponentialBackoff ? 2 * t.delay : t.delay),
                    poll(e, t, r, a);
                }, t.delay)
              : (a || function () {})();
          }
          function findIndex(e, t) {
            var n = -1;
            return (
              _.find(e, function (e, i) {
                return t(e, i) ? ((n = i), !0) : void 0;
              }),
              n
            );
          }
          function createEventTracer(e) {
            function t(e, t) {
              t.clear(e);
            }
            function n(e, t) {
              try {
                var n = _.isFunction(t) ? t() : t,
                  o = n.getItem(e);
                return o || ((o = i(16)), n.setItem(e, o)), o;
              } catch (r) {
                log("Unable to access storage: " + r);
              }
            }
            var i = pendo.randomString,
              o = _.partial,
              r = _.compose,
              a = _.extend,
              s = _.omit,
              d = "pendo_sessionId",
              u = "pendo_frameId",
              l = "pendo_tabId",
              c = {
                data: {},
                getItem: function (e) {
                  return c.data[e];
                },
                setItem: function (e, t) {
                  c.data[e] = t;
                },
                clear: function (e) {
                  (c.data[e] = null), delete c.data[e];
                },
              },
              p = o(n, l, function () {
                return e.sessionStorage;
              }),
              f = o(n, u, c),
              g = o(n, d, c);
            return (
              Events.on("guideListChanged", r(g, o(t, d, c))),
              {
                addTracerIds: function (e) {
                  return s(
                    a(e, { tabId: p(), frameId: f(), sessionId: c.getItem(d) }),
                    function (e) {
                      return e === undefined;
                    }
                  );
                },
                getTabId: p,
              }
            );
          }
          function dom(e, t) {
            var n,
              i,
              o = this;
            if (e && e instanceof dom) return e;
            if (!(o instanceof dom)) return new dom(e, t);
            if (e)
              if (e.nodeType) n = [e];
              else if ((i = /^<(\w+)\/?>$/.exec(e)))
                n = [document.createElement(i[1])];
              else if (/^<[\w\W]+>$/.test(e)) {
                var r = document.createElement("div");
                (r.innerHTML = e), (n = _.toArray(r.childNodes));
              } else
                _.isString(e)
                  ? (t instanceof dom && (t = t.length > 0 ? t[0] : null),
                    (n = Sizzle(e, t)))
                  : (n = [e]);
            else n = [];
            return (
              _.each(n, function (e, t) {
                o[t] = e;
              }),
              (o.context = t),
              (o.length = n.length),
              o
            );
          }
          function documentScrollTop() {
            var e = document.documentElement;
            return (
              (window.pageYOffset || e.scrollTop || getBody().scrollTop) -
              (e.clientTop || 0)
            );
          }
          function documentScrollLeft() {
            var e = document.documentElement;
            return (
              (window.pageXOffset || e.scrollLeft || getBody().scrollLeft) -
              (e.clientLeft || 0)
            );
          }
          function bodyOffset() {
            var e = getBody();
            if (e) {
              var t = getComputedStyle_safe(e);
              if (
                t &&
                ("relative" === t.position ||
                  "absolute" === t.position ||
                  hasCssTransform(t))
              ) {
                var n = e.getBoundingClientRect();
                return {
                  top: n.top + documentScrollTop(),
                  left: n.left + documentScrollLeft(),
                };
              }
            }
            return { top: 0, left: 0 };
          }
          function positionFixedActsLikePositionAbsolute() {
            return (
              hasCssTransform(getComputedStyle_safe(getBody())) && isNaN(msie)
            );
          }
          function hasCssTransform(e) {
            if (e && _.isFunction(e.getPropertyValue)) {
              var t = [e.getPropertyValue("transform")];
              return (
                "undefined" != typeof vendorPrefix &&
                  _.isString(vendorPrefix) &&
                  t.push(
                    e.getPropertyValue(
                      "-" + vendorPrefix.toLowerCase() + "-transform"
                    )
                  ),
                _.any(t, function (e) {
                  return e && "none" !== e;
                })
              );
            }
            return !1;
          }
          function applyBodyOffset(e) {
            var t = bodyOffset();
            return (
              (e.left -= t.left),
              (e.top -= t.top),
              _.isNumber(e.right) && (e.right -= t.left),
              _.isNumber(e.bottom) && (e.bottom -= t.top),
              e
            );
          }
          function roundOffsetPosition(e) {
            return (
              _.each(["left", "top", "width", "height"], function (t) {
                e[t] = Math.round(e[t]);
              }),
              e
            );
          }
          function getOffsetPosition(e) {
            var t, n, i;
            if (!e) return { width: 0, height: 0 };
            if (
              ((t = {
                width: _.isNumber(e.offsetWidth) ? e.offsetWidth : 0,
                height: _.isNumber(e.offsetHeight) ? e.offsetHeight : 0,
              }),
              (n = 0),
              (i = 0),
              e.getBoundingClientRect)
            ) {
              var o;
              try {
                o = e.getBoundingClientRect();
              } catch (r) {
                return { width: 0, height: 0 };
              }
              return (
                (t.top = o.top),
                (t.left = o.left),
                (t.width = Math.max(
                  t.width,
                  _.isNumber(o.width) ? o.width : 0
                )),
                (t.height = Math.max(
                  t.height,
                  _.isNumber(o.height) ? o.height : 0
                )),
                isPositionFixed(e)
                  ? (t.fixed = !0)
                  : ((t.top += documentScrollTop()),
                    (t.left += documentScrollLeft()),
                    (t = applyBodyOffset(t))),
                roundOffsetPosition(t)
              );
            }
            for (; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
              (n += e.offsetLeft), (i += e.offsetTop), (e = e.offsetParent);
            return (t.top = i), (t.left = n), roundOffsetPosition(t);
          }
          function isInDocument(e) {
            return Sizzle.contains(document, e);
          }
          function hasParentWithCssTransform(e) {
            for (var t, n = e && e.parentNode; n; ) {
              if (((t = getComputedStyle_safe(n)), hasCssTransform(t)))
                return !0;
              n = n.parentNode;
            }
            return !1;
          }
          function isPositionFixed(e) {
            for (var t, n = e; n; ) {
              if (((t = getComputedStyle_safe(n)), !t)) return !1;
              if ("fixed" === t.position)
                return isNaN(msie) ? !hasParentWithCssTransform(n) : !0;
              n = n.parentNode;
            }
            return !1;
          }
          function getOverflowDirection(e, t) {
            var n = getComputedStyle_safe(e);
            return (
              (t = t || /(auto|scroll|hidden)/),
              n
                ? t.test(n.overflowY) && t.test(n.overflowX)
                  ? OverflowDirection.BOTH
                  : t.test(n.overflowY)
                  ? OverflowDirection.Y
                  : t.test(n.overflowX)
                  ? OverflowDirection.X
                  : t.test(n.overflow)
                  ? OverflowDirection.BOTH
                  : OverflowDirection.NONE
                : OverflowDirection.NONE
            );
          }
          function isVisibleInScrollParent(e, t, n) {
            var i = getClientRect(t),
              o = getOverflowDirection(t, n);
            if (o === OverflowDirection.BOTH && !intersectRect(e, i)) return !1;
            if (o === OverflowDirection.Y) {
              if (e.top >= i.bottom) return !1;
              if (e.bottom <= i.top) return !1;
            }
            if (o === OverflowDirection.X) {
              if (e.left >= i.right) return !1;
              if (e.right <= i.left) return !1;
            }
            return !0;
          }
          function isBodyElement(e) {
            return e && e.nodeName && "body" === e.nodeName.toLowerCase();
          }
          function isElementVisibleInBody(e) {
            if (!e) return !1;
            if (isBodyElement(e)) return !0;
            var t = getClientRect(e);
            if (0 === t.width || 0 === t.height) return !1;
            var n = getComputedStyle_safe(e);
            if (n && "hidden" === n.visibility) return !1;
            for (var i = e; i && n; ) {
              if ("none" === n.display) return !1;
              if (parseFloat(n.opacity) <= 0) return !1;
              (i = i.parentNode), (n = getComputedStyle_safe(i));
            }
            return !0;
          }
          function isElementVisible(e, t) {
            if (!isElementVisibleInBody(e)) return !1;
            if (isBodyElement(e)) return !0;
            var n = getClientRect(e);
            t = t || /hidden/;
            for (
              var i = getScrollParent(e, t), o = null, r = getBody();
              i && i !== r && i !== document && i !== o;

            ) {
              if (!isVisibleInScrollParent(n, i, t)) return !1;
              (o = i), (i = getScrollParent(i, t));
            }
            if (e.getBoundingClientRect) {
              var a = e.getBoundingClientRect(),
                s = a.right,
                d = a.bottom;
              if (
                (n.fixed ||
                  ((s += documentScrollLeft()), (d += documentScrollTop())),
                0 >= s || 0 >= d)
              )
                return !1;
            }
            return !0;
          }
          function scrollIntoView(e) {
            var t,
              n,
              i,
              o,
              r,
              a,
              s = /(auto|scroll)/,
              d = getBody();
            if (!isElementVisible(e, s))
              for (n = getScrollParent(e, s); n && n !== d; )
                (t = getClientRect(e)),
                  (i = getClientRect(n)),
                  (o = 0),
                  (r = 0),
                  t.bottom > i.bottom &&
                    ((o += t.bottom - i.bottom), (t.top -= o), (t.bottom -= o)),
                  t.top < i.top &&
                    ((a = i.top - t.top),
                    (o -= a),
                    (t.top += a),
                    (t.bottom += a)),
                  t.right > i.right &&
                    ((r += t.right - i.right), (t.left -= r), (t.right -= r)),
                  t.left < i.left &&
                    ((a = i.left - t.left),
                    (r -= a),
                    (t.left += a),
                    (t.right += a)),
                  (n.scrollTop += o),
                  (n.scrollLeft += r),
                  (n = getScrollParent(n, s));
          }
          function evalScript(e) {
            var t = document.createElement("script"),
              n =
                document.head ||
                document.getElementsByTagName("head")[0] ||
                document.body;
            (t.type = "text/javascript"),
              e.src
                ? (t.src = e.src)
                : (t.text = e.text || e.textContent || e.innerHTML || ""),
              n.appendChild(t),
              n.removeChild(t);
          }
          function isElemInViewport(e) {
            var t = e.getBoundingClientRect();
            return (
              t.top >= 0 &&
              t.left >= 0 &&
              t.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              t.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
          }
          function isElemIsFocusable(e) {
            var t = [
                "A",
                "INPUT",
                "LABEL",
                "SELECT",
                "TEXTAREA",
                "BUTTON",
                "FIELDSET",
                "LEGEND",
                "DATALIST",
                "OUTPUT",
                "OPTION",
                "OPTGROUP",
              ],
              n = _.contains(t, e.nodeName),
              i = !!e.tabIndex,
              o = n || i,
              r = !e.hidden,
              a = !e.disabled;
            return o && r && a;
          }
          function DomData() {
            this.ownerKey = "_pendo_" + pendo.randomString(8);
          }
          function isCapturingPhase(e) {
            return _.isNumber(e.eventPhase) && e.eventPhase === CAPTURING_PHASE;
          }
          function attachEventInternal(e, t, n, i) {
            e &&
              t &&
              n &&
              (e !== window || "error" !== t) &&
              (i || (i = !1),
              e.addEventListener
                ? e.addEventListener(t, n, i)
                : e.attachEvent("on" + t, n));
          }
          function detachEventInternal(e, t, n, i) {
            e &&
              t &&
              n &&
              (i || (i = !1),
              e.removeEventListener
                ? e.removeEventListener(t, n, i)
                : e.detachEvent("on" + t, n));
          }
          function isStringWhiteSpace(e) {
            return e && "string" == typeof e && 0 === trim.call(e).length;
          }
          function setCookieDomain(e, t) {
            if (!e) return void (cookieDomain = e);
            if (_.isString(e)) {
              (t = t.replace(/:\d+$/, "")), (e = e.replace(/^\./, ""));
              var n = new RegExp("\\." + e.replace(/\./g, "\\.") + "$"),
                i = new RegExp("^" + e.replace(/\./g, "\\.") + "$");
              (n.test(t) || i.test(t)) && (cookieDomain = "." + e);
            }
          }
          function getPendoCore() {
            var e = getPendoConfigValue("pendoCore");
            return "undefined" == typeof e ? !0 : e;
          }
          function shouldInitializeFeedback(e) {
            return (
              isFeedbackOn &&
              !isDisableFeedbackAutoInitOn &&
              !isAnonymousVisitor(e) &&
              !getOption("disableFeedback", !1)
            );
          }
          function doesExist(e) {
            return !("undefined" == typeof e || null === e);
          }
          function shouldReloadGuides(e, t, n, i) {
            return e && pendo.apiKey
              ? areGuidesDisabled() &&
                "true" !== pendoLocalStorage.getItem("pendo-designer-mode")
                ? !1
                : e !== reloadGuides.lastUrl ||
                  t !== reloadGuides.lastVisitorId ||
                  n !== reloadGuides.lastAccountId ||
                  i !== reloadGuides.lastMetadataHash
              : !1;
          }
          function reloadGuides(e) {
            var t = pendo.get_visitor_id(),
              n = pendo.get_account_id();
            (e = e || pendo.url.get()),
              shouldReloadGuides(e, t, n, metadataHash) &&
                ((reloadGuides.lastUrl = e),
                (reloadGuides.lastVisitorId = t),
                (reloadGuides.lastAccountId = n),
                (reloadGuides.lastMetadataHash = metadataHash),
                pendo.loadGuides(pendo.apiKey, t, e));
          }
          function forceGuideReload() {
            (reloadGuides.lastUrl = null), queueGuideReload();
          }
          function getApiKey(e) {
            var t = getPendoConfigValue("apiKey");
            return t ? t : e.apiKey ? e.apiKey : void 0;
          }
          function getAdditionalApiKeys(e) {
            var t,
              n = getPendoConfigValue("additionalApiKeys");
            return (
              (t = n ? n : e.additionalApiKeys ? e.additionalApiKeys : []),
              t && !_.isArray(t) && (t = [t]),
              t
            );
          }
          function registerEventHandlers(e) {
            _.each(e.events, function (e, t) {
              pendo.events[t] && pendo.events[t](e);
            });
          }
          function launchDesignerOrPreview(e) {
            _.find(
              [
                _.partial(pendo.designerv2.launchOnToken, window.location),
                _.partial(startPreviewMode, window),
              ],
              function (e) {
                return e();
              }
            ),
              (e.enableDesignerKeyboardShortcut ||
                !getPendoConfigValue("disableDesignerKeyboardShortcut")) &&
                pendo.P2AutoLaunch.listen();
          }
          function localStorageNavigation(e) {
            if (!e.ignoreLocalStorageNavigation) {
              var t = pendoLocalStorage.getItem("pendo-navigation-state");
              if (t)
                try {
                  var n = JSON.parse(t),
                    i = { lookaside: n.baseUrl, preloader: !0, host: n.host };
                  pendo.designerv2.launchInAppDesigner(i);
                } catch (o) {}
            }
          }
          function announceFrameToDesignerPlugin() {
            window.parent &&
              window.parent.postMessage &&
              "function" == typeof window.parent.postMessage &&
              window.parent.postMessage(
                {
                  type: "announce-frame-initialized",
                  destination: "pendo-designer-agent",
                  source: "pendo-designer-agent",
                  localStorageRouter: !0,
                },
                "*"
              );
          }
          function flushCallQueue() {
            if (_.isArray(pendo._q) && !_.isEmpty(pendo._q)) {
              var e = pendo._q.splice(0, pendo._q.length),
                t = _.reduce(
                  e,
                  function (e, t) {
                    if (!_.isArray(t)) return e;
                    var n = pendo[t.shift()];
                    return _.isFunction(n)
                      ? e.then(function () {
                          return n.apply(pendo, t);
                        })
                      : e;
                  },
                  q.resolve()
                );
              return t.then(flushCallQueue);
            }
          }
          function getDataHost() {
            var e = getPendoConfigValue("dataHost");
            return e ? "https://" + e : getOption("dataHost", SERVER);
          }
          function getAllApiKeys() {
            return _.compact([pendo.apiKey].concat(pendo.additionalApiKeys));
          }
          function writeEvent(e, t) {
            var n = new Date().getTime();
            return writeBeacon(t, { v: VERSION, ct: n, jzb: e });
          }
          function writeBeacon(e, t) {
            var n = getJwtInfoCopy(),
              i = buildBaseDataUrl(e + ".gif", pendo.apiKey, t);
            if ("log" !== e && !_.isEmpty(n)) {
              var o = JSON.stringify({
                events: t.jzb,
                jwt: n.jwt,
                signingKeyName: n.signingKeyName,
              });
              return (
                (i = buildBaseDataUrl(
                  e + ".gif",
                  pendo.apiKey,
                  _.omit(t, "jzb")
                )),
                void (fetchKeepalive.supported()
                  ? fetch(i, {
                      method: "POST",
                      keepalive: !0,
                      body: o,
                      headers: { "Content-Type": "application/json" },
                    })
                  : pendo.ajax({
                      method: "POST",
                      url: i,
                      data: o,
                      headers: { "Content-Type": "application/json" },
                    }))
              );
            }
            return writeImgTag(i);
          }
          function writeErrorPOST(e) {
            try {
              var t = HOST + "/data/errorlog?apiKey=" + pendo.apiKey,
                n = pendo.ajax.postJSON(t, {
                  error: e,
                  version: "v" + VERSION,
                  visitorId: pendo.get_visitor_id(),
                });
              return n.then(
                function () {
                  pendo.log("successfully wrote error");
                },
                function (e) {
                  pendo.log("error writing error:" + e);
                }
              );
            } catch (i) {
              return (
                log(
                  "Failed to write error to server using POST endpoint: " + i
                ),
                writeMessage(
                  "Failed to write error to server using POST endpoint: " + i
                )
              );
            }
          }
          function writeImgTag(e) {
            if (!isUnlocked()) return q.resolve();
            if (isInPreviewMode()) return q.resolve();
            var t = q.defer(),
              n = new Image();
            return (
              (n.onload = function () {
                t.resolve();
              }),
              (n.onerror = function () {
                t.reject();
              }),
              (n.src = e),
              t.promise
            );
          }
          function fetchKeepalive(e) {
            fetch(e, { method: "GET", keepalive: !0 });
          }
          function sendBeacon(e, t) {
            navigator.sendBeacon(
              e,
              new Blob([JSON.stringify(t)], { type: "text/plain" })
            );
          }
          function callLater(e, t) {
            if (((t = parseInt(t, 10) || 0), e[t])) return e[t];
            var n = window.setTimeout(function () {
              e(), e[t]();
            }, t);
            return (e[t] = function () {
              window.clearTimeout(n), delete e[t];
            });
          }
          function flushNow(e, t) {
            try {
              eventQueue.flush(t), trackEventQueue.flush(t);
            } catch (n) {
              writeException(n, "unhandled error while flushing event cache");
            }
          }
          function flushLater(e) {
            return callLater(_.partial(flushNow, !0), e);
          }
          function flushEvery(e) {
            if (
              ((e = parseInt(e, 10) || 0),
              _.isObject(flushEvery.intervals) || (flushEvery.intervals = {}),
              !flushEvery.intervals[e])
            ) {
              var t = window.setInterval(flushNow, e);
              return (flushEvery.intervals[e] = function () {
                clearInterval(t), delete flushEvery.intervals[e];
              });
            }
          }
          function flushStop() {
            var e = _.values(flushEvery.intervals).concat([flushNow]);
            _.map(e, function (e) {
              pendo._.isFunction(e) && e();
            });
          }
          function buffersClearAll() {
            eventQueue.clear(),
              trackEventQueue.clear(),
              xhrEventQueue.clear(),
              flushStop();
          }
          function eventCreate(e, t, n, i, o) {
            var r = {
              type: e,
              browser_time: getNow(),
              visitor_id: pendo.get_visitor_id(),
              account_id: pendo.get_account_id(),
              url: pendo.url.externalizeURL(n),
              props: t,
            };
            return (
              (r = EventTracer.addTracerIds(r)),
              "track" === e
                ? (r.track_event_name = i || defaultTrackName)
                : "click" === e && o && (r.eventProperties = o),
              r
            );
          }
          function collectEvent(e, t, n, i, o) {
            if (pendoCore) {
              var r = eventCreate(e, t, n, i, o);
              if (isURLValid(r.url) && eventIsWhitelisted(r))
                return "track" === e
                  ? void trackEventQueue.push(r)
                  : void eventQueue.push(r);
            }
          }
          function eventIsWhitelisted(e) {
            return getPendoConfigValue("freeNPSData")
              ? pendo._.contains(WHITELIST_FREE_NPS, e.type)
              : !0;
          }
          function pipeline() {
            var e = _.toArray(arguments);
            return function (t, n) {
              var i = e.concat([n]);
              !(function o(e, t) {
                e < i.length &&
                  i[e](t, function (t) {
                    o(e + 1, t);
                  });
              })(0, t);
            };
          }
          function reducer(e, t) {
            var n = t;
            return function (t, i) {
              (n = e(n, t)), i(n);
            };
          }
          function siloReducer(e) {
            return reducer(function (e, t) {
              return e.push(t), e;
            }, e);
          }
          function eventAddBytes(e) {
            return null == e.bytes && (e.bytes = JSON.stringify(e).length), e;
          }
          function filterAccountIdsForSendQueue(e, t) {
            var n = getPendoConfigValue("trainingPartner");
            if (!n) return t(e);
            var i,
              o = e[0].account_id,
              r = !0;
            for (i = 1; i < e.length; i++)
              if (o !== e[i].account_id) {
                r = !1;
                break;
              }
            if (r) return t(e);
            var a = e.slice(0, i),
              s = e.slice(i);
            t(a), t(s);
          }
          function filterSiloCapacity(e, t) {
            for (var n, i = 0, o = 0; o < e.length; ++o) {
              var r = eventAddBytes(e[o]).bytes;
              i + r > SILO_MAX_BYTES && (n = o), (i += r);
            }
            if ((0 === n && 1 === e.length && (n = 1), n)) {
              var a = e.slice(0, n),
                s = e.slice(n);
              (e.length = 0), e.push.apply(e, s), t(a);
            }
          }
          function filterSiloLength(e, t) {
            if (e.length > MAX_NUM_EVENTS) {
              var n = e.slice();
              (e.length = 0), t(n);
            }
          }
          function shortenFields(e) {
            return (
              (e = _.defaults(e || {}, {
                fields: ["url"],
                fieldMaxLength: URL_MAX_LENGTH,
                siloMaxLength: ENCODED_EVENT_MAX_POST_LENGTH,
              })),
              function (t, n) {
                if (1 === t.length && t.JZB.length > e.siloMaxLength) {
                  var i = t[0];
                  debug("Max length exceeded for an event"),
                    _.each(e.fields, function (n) {
                      var o = i[n];
                      o &&
                        o.length > e.fieldMaxLength &&
                        (debug("shortening " + n + " and retrying"),
                        (i[n] = limitURLSize(e.fieldMaxLength, o)),
                        delete t.JZB);
                    });
                }
                n(t);
              }
            );
          }
          function compressSilo(e, t) {
            if (0 !== e.length) {
              if (e.JZB) return t(e);
              if (
                ((e.JZB = pendo.squeezeAndCompress(e.slice())),
                e.JZB.length <= ENCODED_EVENT_MAX_LENGTH)
              )
                return t(e);
              if (1 === e.length) return t(e);
              var n = e.length / 2;
              compressSilo(e.slice(0, n), t), compressSilo(e.slice(n), t);
            }
          }
          function filterAnalyticsDisabled(e, t) {
            isUnlocked() && (isInPreviewMode() || t(e));
          }
          function errorLogger(e, t) {
            1 === e.length && e.JZB.length > ENCODED_EVENT_MAX_LENGTH
              ? (debug("Couldn't write event"),
                writeMessage("Single item is: " + e.JZB.length + ". Dropping."),
                writeErrorPOST(e.JZB))
              : writeErrorPOST("Failed to write silo: " + e.JZB);
          }
          function getApiKeysFromOptions(e) {
            return _.isFunction(e.apiKey)
              ? [].concat(e.apiKey())
              : [].concat(e.apiKey);
          }
          function buildGetRequestUrls(e, t) {
            return _.map(getApiKeysFromOptions(e), function (n) {
              return buildBaseDataUrl(
                e.beacon + ".gif",
                n,
                _.extend({ v: VERSION, ct: getNow(), jzb: t }, e.params)
              );
            });
          }
          function buildPostRequestUrls(e, t) {
            return _.map(getApiKeysFromOptions(e), function (n) {
              return buildBaseDataUrl(
                e.beacon + ".gif",
                n,
                _.extend({ v: VERSION, ct: getNow(), s: t.length }, e.params)
              );
            });
          }
          function addAccountIdParamIfAdoptPartner(e, t) {
            var n = getPendoConfigValue("trainingPartner"),
              i = _.first(t),
              o = get(i, "account_id");
            return (
              n && o && (e = _.extend({}, e, { acc: base64EncodeString(o) })), e
            );
          }
          function defaultSendEvent(e) {
            return function (t, n) {
              var i = t.JZB;
              if (!i) return n(t);
              var o = getJwtInfoCopy(),
                r = i.length;
              return (
                _.isEmpty(o) || (r += o.jwt.length + o.signingKeyName.length),
                r > ENCODED_EVENT_MAX_POST_LENGTH
                  ? n(t)
                  : ((e.params = addAccountIdParamIfAdoptPartner(e.params, t)),
                    ENCODED_EVENT_MAX_LENGTH >= r
                      ? void (_.isEmpty(o)
                          ? _.each(buildGetRequestUrls(e, i), writeImgTag)
                          : ((e.params = _.extend({}, e.params, o)),
                            _.each(buildGetRequestUrls(e, i), function (e) {
                              pendo.ajax({ method: "GET", url: e });
                            })))
                      : e.allowPost
                      ? void (sendBeacon.supported()
                          ? _.each(buildPostRequestUrls(e, i), function (e) {
                              var t = _.extend({ events: i }, o);
                              sendBeacon(e, t);
                            })
                          : _.each(buildPostRequestUrls(e, i), function (e) {
                              var t = _.extend({ events: i }, o),
                                n = { "Content-Type": "application/json" };
                              pendo.ajax({
                                method: "POST",
                                url: e,
                                data: JSON.stringify(t),
                                headers: n,
                              });
                            }))
                      : void n(t))
              );
            };
          }
          function reliableSendEventForUnload(e) {
            return function (t, n) {
              var i = t.JZB;
              if (!i) return n(t);
              var o = getJwtInfoCopy(),
                r = i.length;
              if (
                (_.isEmpty(o) || (r += o.jwt.length + o.signingKeyName.length),
                i.length > ENCODED_EVENT_MAX_POST_LENGTH)
              )
                return n(t);
              if (
                ((e.params = addAccountIdParamIfAdoptPartner(e.params, t)),
                ENCODED_EVENT_MAX_LENGTH >= r)
              ) {
                if (_.isEmpty(o) && fetchKeepalive.supported())
                  return void _.each(buildGetRequestUrls(e, i), fetchKeepalive);
                if (pendo.sniffer.msie <= 11)
                  return (
                    (e.params = _.extend({}, e.params, o)),
                    void _.each(buildGetRequestUrls(e, i), function (e) {
                      pendo.ajax({ method: "GET", url: e, sync: !0 });
                    })
                  );
              }
              return e.allowPost
                ? void (fetchKeepalive.supported()
                    ? _.each(buildPostRequestUrls(e, i), function (e) {
                        var t = _.extend({ events: i }, o);
                        fetch(e, {
                          method: "POST",
                          keepalive: !0,
                          body: JSON.stringify(t),
                          headers: { "Content-Type": "application/json" },
                        });
                      })
                    : sendBeacon.supported()
                    ? _.each(buildPostRequestUrls(e, i), function (e) {
                        var t = _.extend({ events: i }, o);
                        sendBeacon(e, t);
                      })
                    : pendo.sniffer.msie <= 11 &&
                      _.each(buildPostRequestUrls(e, i), function (e) {
                        var t = _.extend({ events: i }, o),
                          n = { "Content-Type": "application/json" };
                        pendo.ajax({
                          method: "POST",
                          url: e,
                          data: JSON.stringify(t),
                          sync: !0,
                          headers: n,
                        });
                      }))
                : void n(t);
            };
          }
          function createSendQueue(e, t) {
            return pipeline(
              filterAnalyticsDisabled,
              filterAccountIdsForSendQueue,
              compressSilo,
              shortenFields(e.shorten),
              compressSilo,
              t(e),
              errorLogger
            );
          }
          function createEventQueue(e) {
            var t = e.cache,
              n = e.silos,
              i = createSendQueue(e, defaultSendEvent),
              o = createSendQueue(e, reliableSendEventForUnload),
              r = pipeline(siloReducer(t), filterSiloCapacity, function (e) {
                n.push(e);
              });
            return {
              push: function (e) {
                r(e, _.noop);
              },
              clear: function () {
                (t.length = 0), (n.length = 0);
              },
              flush: function (e) {
                if (0 !== t.length || 0 !== n.length) {
                  n.push(t.slice()), (t.length = 0);
                  var r = n.slice();
                  n.length = 0;
                  var a = (e || {}).guaranteed ? o : i;
                  _.each(r, function (e) {
                    a(e, _.noop);
                  });
                }
              },
            };
          }
          function getAttributeValue(e, t) {
            return e.getAttribute ? e.getAttribute(t) : e[t];
          }
          function getHtmlAttributeTester(e) {
            if (_.isRegExp(e) && _.isFunction(e.test))
              return function (t) {
                return e.test(t);
              };
            if (_.isArray(e)) {
              var t = _.map(_.filter(e, _.isObject), function (e) {
                if (e.regexp) {
                  var t = /\/([a-z]*)$/.exec(e.value),
                    n = (t && t[1]) || "";
                  return new RegExp(
                    e.value.replace(/^\//, "").replace(/\/[a-z]*$/, ""),
                    n
                  );
                }
                return new RegExp("^" + e.value + "$", "i");
              });
              return function (e) {
                return _.any(t, function (t) {
                  return t.test(e);
                });
              };
            }
            return _.constant(!1);
          }
          function filterAttributeList(e, t, n, i) {
            var o = _.indexBy(t),
              r = _.filter(
                _.filter(e, function (e) {
                  return n(e.nodeName) || o[e.nodeName];
                }),
                function (e) {
                  return !i(e.nodeName);
                }
              );
            if (r.length <= MAX_ATTRIBUTES) return _.pluck(r, "nodeName");
            var a = _.groupBy(e, function (e) {
              return o[e.nodeName]
                ? "defaults"
                : _.isString(e.value) && e.value.length > MAX_ATTRIBUTE_LENGTH
                ? "large"
                : "small";
            });
            return _.pluck(
              []
                .concat(_.sortBy(a.defaults, "nodeName"))
                .concat(_.sortBy(a.small, "nodeName"))
                .concat(_.sortBy(a.large, "nodeName"))
                .slice(0, MAX_ATTRIBUTES),
              "nodeName"
            );
          }
          function collectEventPropertiesForTarget(e) {
            if (pendo.eventProperties && pendo.eventProperties.length && e) {
              for (
                var t = getNow(), n = 50, i = {}, o = undefined, r = 0;
                r < pendo.eventProperties.length && getNow() - t < n;
                r++
              ) {
                o = pendo.eventProperties[r];
                var a = _.any(o.featureRules, function (t) {
                  try {
                    return pendo.Sizzle.matchesSelector(e, t);
                  } catch (n) {
                    return !1;
                  }
                });
                if (a)
                  for (
                    var s = 0;
                    s < o.eventPropertyRules.length && getNow() - t < n;
                    s++
                  ) {
                    var d = o.eventPropertyRules[s];
                    if (!d.name) return;
                    i[d.name] = collectEventProperty(d, e);
                  }
              }
              var u = getNow() - t;
              if (u > n) {
                pendo.log(
                  "event property collection disabled; collection took greater than " +
                    n +
                    " milliseconds."
                );
                var l = "ERROR event property collection exceeded time limit.";
                o && (l += "\n For feature with id: " + o.featureId),
                  writeException({}, l),
                  (pendo.eventProperties = []);
              }
              return i;
            }
          }
          function collectEventProperty(e, t) {
            if (e.path) {
              var n = getEventPropertyTarget(e, t);
              return get(n, e.path, undefined);
            }
          }
          function getEventPropertyTarget(e, t) {
            var n = e.source || e.selector;
            return n ? nearestTargeter(n, t) : window;
          }
          function nearestTargeter(e, t) {
            for (var n, i = t; !n && i; ) {
              try {
                if (
                  ((n = pendo.Sizzle(e, i)[0]),
                  n && ("password" === n.type || "hidden" === n.type))
                )
                  return;
              } catch (o) {
                return;
              }
              i = shadowAPI.getParent(i);
            }
            return n;
          }
          function wireSyntheticClicks(e, t) {
            var n,
              i = {
                cloneEvent: function (e) {
                  var t = _.pick(e, [
                    "target",
                    "srcElement",
                    "altKey",
                    "ctrlKey",
                    "shiftKey",
                    "metaKey",
                    "button",
                    "which",
                  ]);
                  return (t.type = "click"), (t.from = "mousedown"), t;
                },
                mousedown: function (e) {
                  n = i.cloneEvent(e);
                },
                mouseup: function (t) {
                  getTarget(n) !== getTarget(t) && e(n), (n = null);
                },
              };
            return (
              t &&
                (attachEvent(document, "mousedown", i.mousedown, !0),
                attachEvent(document, "mouseup", i.mouseup, !0)),
              i
            );
          }
          function interceptStopPropagation(e, t) {
            try {
              if (!e || !e.prototype) return;
              var n = _.indexBy(t);
              _.each(
                ["stopPropagation", "stopImmediatePropagation"],
                function (t) {
                  var i = e.prototype[t];
                  i &&
                    ((e.prototype[t] = _.wrap(i, function (e) {
                      var t = e.apply(this, arguments);
                      return (
                        n[this.type] &&
                          (dom.data.set(this, "stopped", !0),
                          dom.event.trigger(this)),
                        t
                      );
                    })),
                    (e.prototype[t]._pendoUnwrap = function () {
                      e.prototype[t] = i;
                    }));
                }
              );
            } catch (i) {
              writeException(i, "ERROR in interceptStopPropagation");
            }
          }
          function attachEvent(e, t, n, i) {
            e &&
              t &&
              n &&
              (e !== window || "error" !== t) &&
              (i && !pendo.sniffer.addEventListener && (i = !1),
              dom.event.add(e, { type: t, handler: n, capture: i }));
          }
          function detachEvent(e, t, n, i) {
            e &&
              t &&
              n &&
              (i && !pendo.sniffer.addEventListener && (i = !1),
              dom.event.remove(e, t, n, i));
          }
          function logError() {
            canWeLog("error") && console.error.apply(console, arguments);
          }
          function pint(e) {
            return parseInt(e, 10);
          }
          function isString(e) {
            return "string" == typeof e;
          }
          function isUndefined(e) {
            return "undefined" == typeof e;
          }
          function isNativeCode(e) {
            return /native/.test(e);
          }
          function startPoller(e, t) {
            !(function n() {
              pendo._.map(pollFns, function (e) {
                e();
              }),
                (pollTimeout = t(n, e));
            })();
          }
          function fireUrlChange() {
            var e = url();
            lastBrowserUrl != e &&
              ((lastBrowserUrl = e),
              pendo._.map(urlChangeListeners, function (e) {
                e(url());
              }));
          }
          function sanitizeUrl(e) {
            var t = ConfigReader.get("sanitizeUrl");
            return _.isFunction(t) ? t(e) : e;
          }
          function annotateUrl(e) {
            e = e || getWindowLocation().href;
            var t = ConfigReader.get("annotateUrl");
            if (t) {
              if (_.isFunction(t)) {
                var n = t();
                if (!n || (!_.isObject(n) && !_.isArray(n))) return e;
                var i = n.exclude,
                  o = n.include,
                  r = n.fragment;
                return (
                  delete n.fragment,
                  ((i && _.isArray(i)) ||
                    (o && (_.isArray(o) || _.isObject(o)))) &&
                    (i && (e = adjustUrl(e, null, i, !0)), (n = o || {})),
                  pendo.ajax.urlFor(e, n, r)
                );
              }
              log("customer-provided `annotateUrl` must be of type: function");
            }
            return e;
          }
          function parseQueryString(e) {
            if (!e) return "";
            var t = e.indexOf("?");
            if (0 > t) return "";
            var n = e.indexOf("#");
            return 0 > n ? e.substring(t) : t > n ? "" : e.substring(t, n);
          }
          function adjustUrl(e, t, n, i) {
            (e = e || url()), (t = t || parseQueryString(e).substring(1));
            var o, r;
            (o = e.indexOf(t)), (r = o + t.length);
            var a = e.substring(0, o),
              s = e.substring(r);
            return (
              _.isArray(n) && (t = adjustQueryStringParams(t, n, i)),
              t.length ||
                "?" !== a.charAt(a.length - 1) ||
                (a = a.substr(0, a.length - 1)),
              a + t + s
            );
          }
          function getTrustedOriginPattern(e) {
            return new RegExp(
              "^(" +
                _.chain(e)
                  .unique()
                  .map(function (e) {
                    return e
                      .replace(/\./g, "\\.")
                      .replace(/^https?:/, "https?:");
                  })
                  .value()
                  .join("|") +
                ")$"
            );
          }
          function isTrustedOrigin2(e) {
            if (!e) return !0;
            if (e === window.location.origin) return !0;
            var t = [
              /^https:\/\/(app|via|adopt)(\.eu|\.us)?\.pendo\.io$/,
              /^https:\/\/(us1\.)?(app|via)\.pendo\.io$/,
              /^https:\/\/([0-9]{8}t[0-9]{4}-dot-)pendo-(io|eu|us1)\.appspot\.com$/,
              /^https:\/\/hotfix-(ops|app)-([0-9]+-dot-)pendo-(io|eu|us1)\.appspot\.com$/,
            ];
            _.contains(["prod", "prod-eu", "prod-us1"], ENV) ||
              (t = t.concat([
                /^https:\/\/([a-zA-Z0-9-]+\.)*pendo-dev\.com$/,
                /^https:\/\/([a-zA-Z0-9-]+-dot-)?pendo-(dev|test|io|batman|magic|atlas|wildlings|ionchef|mobile-guides|mobile-hummus|mobile-plat|eu|eu-dev|apollo|security|perfserf|freeze|armada|voc|calypso)\.appspot\.com$/,
                /^https:\/\/via\.pendo\.local:\d{4}$/,
                /^https:\/\/adopt\.pendo\.local:\d{4}$/,
                /^https:\/\/local\.pendo\.io:\d{4}$/,
              ]));
            var n = getPendoConfigValue("adoptHost");
            if (n) {
              var i = "https://" + n;
              if (e === i) return !0;
            }
            return _.any(t, function (t) {
              return t.test(e);
            });
          }
          function messageOriginTester2(e) {
            return function (t) {
              return t && isTrustedOrigin2(t.origin)
                ? e.apply(this, arguments)
                : void 0;
            };
          }
          function Wrappable() {
            var e = {},
              t = function (e, t, n) {
                return function () {
                  var i,
                    o,
                    r = _.toArray(arguments);
                  for (i = 0, o = t.length; o > i; ++i)
                    if (t[i].apply(this, r) === !1) return;
                  var a = e.apply(this, r);
                  for (
                    i = 0, o = n.length;
                    o > i && n[i].apply(this, r) !== !1;
                    ++i
                  );
                  return a;
                };
              };
            return (
              _.each(
                ["after", "before"],
                function (n) {
                  this[n] = function (i, o) {
                    if (this[i]) {
                      var r = e[i];
                      r ||
                        ((r = e[i] = { before: [], after: [] }),
                        (this[i] = t(this[i], r.before, r.after))),
                        r[n].push(o);
                    }
                  };
                },
                this
              ),
              this
            );
          }
          function filterPendoAgentXhrRequests(e, t) {
            var n = HOST.replace(/\./g, "\\.").replace(/\//g, "\\/"),
              i = new RegExp("^" + n + "\\/data\\/"),
              o = get(e, "request_url", "");
            i.test(o) || t(e);
          }
          function createXhrEventQueue(e) {
            var t = e.cache,
              n = createSendQueue(e, defaultSendEvent),
              i = createSendQueue(e, reliableSendEventForUnload),
              o = pipeline(
                filterPendoAgentXhrRequests,
                siloReducer(t),
                filterSiloLength,
                n
              );
            return {
              push: function (e) {
                o(e, _.noop);
              },
              clear: function () {
                t.length = 0;
              },
              flush: function (e) {
                if (0 !== t.length) {
                  var o = t.slice();
                  t.length = 0;
                  var r = (e || {}).guaranteed ? i : n;
                  r(o, _.noop);
                }
              },
            };
          }
          function RemoteFrameGuide() {
            return (
              (this.shouldBeAddedToLauncher = _.wrap(
                this.shouldBeAddedToLauncher,
                function (e) {
                  return store.getters["frames/hasFrames"]()
                    ? store.getters["frames/isGuideInThisFrame"]()(this) &&
                      e.apply(this, arguments)
                      ? !0
                      : store.getters["frames/isGuideInDifferentFrame"]()(this)
                      ? store.getters["frames/shouldBeAddedToLauncher"]()(this)
                      : !1
                    : e.apply(this, arguments);
                }
              )),
              (this.shouldBeAddedToResourceCenter = _.wrap(
                this.shouldBeAddedToResourceCenter,
                function (e) {
                  return store.getters["frames/hasFrames"]()
                    ? store.getters["frames/isGuideInThisFrame"]()(this) &&
                      e.apply(this, arguments)
                      ? !0
                      : store.getters["frames/isGuideInDifferentFrame"]()(this)
                      ? store.getters["frames/shouldBeAddedToResourceCenter"]()(
                          this
                        )
                      : !1
                    : e.apply(this, arguments);
                }
              )),
              this
            );
          }
          function RemoteFrameStep(e) {
            var t = this;
            return "whatsnew" === t.type
              ? t
              : ((t.isShown = (function (e) {
                  return function () {
                    return (
                      e.apply(this, arguments) ||
                      store.getters["frames/isShownInAnotherFrame"]()(t)
                    );
                  };
                })(t.isShown)),
                t);
          }
          function replaceWithContentHost(e) {
            var t = ConfigReader.getLocalConfig("contentHost");
            return t && e
              ? e
                  .replace(
                    /(https:)?\/\/pendo-static-\d+\.storage\.googleapis\.com/g,
                    t
                  )
                  .replace(
                    /(https:)?\/\/pendo-\w+-static\.storage\.googleapis\.com/g,
                    t
                  )
                  .replace(/(https:)?\/\/cdn\.pendo\.io/g, t)
              : e;
          }
          function getContentHostRegex() {
            var e = escapeRegExp(ConfigReader.getHostedConfig("contentHost"));
            return e ? e + "*" : void 0;
          }
          function escapeRegExp(e) {
            return e ? e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : void 0;
          }
          function Tooltip(e) {
            if ("tooltip" === this.type) {
              var t = this;
              (t.attributes.height =
                t.attributes.height || pendo.TOOLTIP_DEFAULT_HEIGHT),
                (t.attributes.width =
                  t.attributes.width || pendo.TOOLTIP_DEFAULT_WIDTH),
                (t.attributes.layoutDir = t.attributes.layoutDir || "DEFAULT"),
                (this.getTriggers = function (e) {
                  var t = this,
                    n = t.getGuide(),
                    i = t.element || getElementForGuideStep(t);
                  if (!i && e) return [];
                  var o = t.advanceMethod || "",
                    r = o.split(",");
                  if (
                    ((this.triggers = _.map(r, function (e) {
                      return new AdvanceTrigger(i, e, t);
                    })),
                    !e && n && n.isMultiStep && currentMode == OBM)
                  ) {
                    var a = n.findSectionForStep(t),
                      s = n.getSubSection(a, t);
                    this.triggers = this.triggers.concat(
                      _.flatten(
                        _.map(s, function (e) {
                          return e.getTriggers ? e.getTriggers(!0) : [];
                        })
                      )
                    );
                  }
                  return this.triggers;
                }),
                (this.removeTrigger = function (e) {
                  (this.triggers = _.without(this.triggers, e)),
                    0 === this.triggers.length && (this.triggers = null);
                }),
                (this.canShow = function () {
                  return isDismissedUntilReload(t)
                    ? !1
                    : !t.isShown() &&
                        t.canShowOnPage(pendo.getCurrentUrl()) &&
                        canStepBeRendered(t);
                }),
                this.after("render", function () {
                  var e = this;
                  if (showTooltipGuide(e, e.elements)) {
                    var t = e.element;
                    _.each(e.getTriggers(), function (e) {
                      e.add();
                    });
                    for (
                      var n = /(auto|scroll)/,
                        i = getScrollParent(t, n),
                        o = getBody();
                      i && i !== o;

                    )
                      e.attachEvent(
                        i,
                        "scroll",
                        _.throttle(_.bind(e.onscroll, e, i, n), 10)
                      ),
                        (i = getScrollParent(i, n));
                  }
                }),
                (this.reposition = function () {
                  var e = this,
                    t = e.attributes.width,
                    n = e.attributes.height,
                    i = e.attributes.layoutDir,
                    o = e.guideElement,
                    r = dom("._pendo-guide-container_", o),
                    a = getOffsetPosition(e.element),
                    s = getTooltipDimensions(a, n, t, i);
                  r
                    .removeClass("top right bottom left")
                    .removeClass(
                      "_pendo-guide-container-top_ _pendo-guide-container-right_ _pendo-guide-container-bottom_ _pendo-guide-container-left_"
                    )
                    .addClass(s.arrowPosition)
                    .addClass(
                      "_pendo-guide-container-" + s.arrowPosition + "_"
                    ),
                    dom(
                      "._pendo-guide-arrow_,._pendo-guide-arrow-border_",
                      o
                    ).remove(),
                    buildAndAppendArrow(o, s),
                    o.css({
                      top: s.top,
                      left: s.left,
                      height: s.height,
                      width: s.width,
                      position: a.fixed ? "fixed" : "",
                    }),
                    (e.dim = s);
                }),
                (this.onscroll = function (e, t) {
                  var n = this,
                    i = getClientRect(n.element),
                    o = n.dim;
                  isVisibleInScrollParent(i, e, t)
                    ? ((o = getTooltipDimensions(
                        i,
                        n.attributes.height,
                        n.attributes.width,
                        o.arrowPosition
                      )),
                      setStyle(
                        n.elements[0],
                        "display:block;top:" +
                          o.top +
                          "px;left:" +
                          o.left +
                          "px"
                      ),
                      (n.dim = o))
                    : setStyle(n.elements[0], "display:none");
                }),
                (this.teardownElementEvent = function () {
                  _.each(this.triggers, function (e) {
                    e.remove();
                  });
                }),
                this.after("hide", function () {
                  dom("._pendo-guide-tt-region-block_").remove(),
                    (lastBlockBox = null),
                    (lastBodySize = null),
                    (lastScreenCoords = null);
                });
            }
            return this;
          }
          function Lightbox() {
            var e = this;
            return (
              /lightbox/i.test(e.type) &&
                ((e.attributes.height =
                  e.attributes.height || pendo.LB_DEFAULT_HEIGHT),
                (e.attributes.width =
                  e.attributes.width || pendo.LB_DEFAULT_WIDTH),
                e.after("render", function () {
                  isMobileUserAgent()
                    ? showMobileLightboxGuide(e, e.elements)
                    : showLightboxGuide(e, e.elements);
                }),
                (e.reposition = function () {
                  isMobileUserAgent() ||
                    e.guideElement.css({
                      "margin-left": -Math.floor(e.attributes.width / 2),
                      "margin-top": -Math.floor(e.attributes.height / 2),
                    });
                })),
              e
            );
          }
          function Banner() {
            var e = this;
            return (
              "banner" === e.type &&
                ((e.attributes.height =
                  e.attributes.height || BANNER_DEFAULT_HEIGHT),
                (e.attributes.position = e.attributes.position || "top"),
                e.after("render", function () {
                  var t = e.guideElement,
                    n = pendo.TOOLTIP_ARROW_SIZE;
                  t
                    .css({ width: "" })
                    .addClass(BANNER_CSS_NAME)
                    .addClass(
                      "_pendo-guide-banner-" + e.attributes.position + "_"
                    ),
                    isPreviewing() || t.addClass("_pendo-in_"),
                    dom("._pendo-guide-container_", t).css({
                      bottom: n,
                      right: n,
                    }),
                    (e.element = getElementForGuideStep(e)),
                    e.elements.push(t[0]),
                    t.appendTo(getGuideAttachPoint());
                })),
              e
            );
          }
          function WhatsNew(e) {
            function t() {
              return !!s.guideElement;
            }
            function n() {
              var t = s.guideElement;
              t &&
                !isInDocument(t[0]) &&
                (dom("._pendo-launcher_ #launcher-" + s.guideId)
                  .html("")
                  .append(t),
                _.isFunction(s.script) && s.script(s, e));
            }
            function i() {
              var e = s.guideElement,
                t = s.attributes.height;
              (e && e.html()) ||
                ((e = dom("<div>")
                  .attr("id", getStepDivId(s))
                  .addClass("_pendo-guide-whatsnew_")
                  .html(s.getContent())),
                _.isNumber(t) && !s.attributes.autoHeight && e.height(t),
                s.seenState === l && e.addClass(u),
                (s.guideElement = e));
            }
            function o() {
              isPreviewing() ||
                (t() &&
                  s.seenState !== l &&
                  r(s.guideElement[0]) &&
                  (seenGuide(
                    s.guideId,
                    s.id,
                    pendo.get_visitor_id(),
                    d,
                    e.language,
                    { last_updated_at: s.lastUpdatedAt }
                  ),
                  (s.seenState = l),
                  _.delay(
                    function () {
                      s.guideElement.addClass(u + " out");
                    },
                    _.isNumber(s.attributes.seenDelay)
                      ? s.attributes.seenDelay
                      : c
                  )));
            }
            function r(e) {
              if (isElementVisible(e, /(auto|scroll|hidden)/)) {
                var t = getScrollParent(e),
                  n = getClientRect(t),
                  i = getClientRect(e),
                  o = n.top + Math.floor(n.height / 3);
                return i.bottom <= n.bottom || i.top <= o;
              }
            }
            function a() {}
            var s = this,
              d = "whatsnew",
              u = "_pendo-guide-whatsnew-seen_",
              l = "active",
              c = 1e3;
            return (
              s.type === d &&
                (_.extend(s, {
                  isShown: _.constant(!1),
                  launch: a,
                  onShown: a,
                  render: i,
                  seen: o,
                }),
                _.extend(e, { addToLauncher: n, isReady: t }),
                s.after("show", o)),
              s
            );
          }
          function Poll(e) {
            var t = this;
            if (t.pollIds && t.pollIds.length) {
              var n,
                i = "_pendo-poll-selected_",
                o = _.indexBy(e.polls, "id"),
                r = _.map(t.pollIds, function (e) {
                  return o[e];
                }),
                a = function (e, t) {
                  return e && t !== undefined
                    ? e.numericResponses
                      ? parseInt(t, 10)
                      : t
                    : void 0;
                },
                s = function () {
                  var n = e.id,
                    i = t.id;
                  advancedGuide(
                    n,
                    i,
                    pendo.get_visitor_id(),
                    t.seenReason,
                    e.language
                  ),
                    _updateGuideStepStatus(n, i, "advanced"),
                    (lastGuideStepSeen = {
                      guideId: n,
                      guideStepId: i,
                      time: new Date().getTime(),
                      state: "advanced",
                    }),
                    writeLastStepSeenCache(lastGuideStepSeen);
                },
                d = function () {
                  var e = dom("._pendo-poll_"),
                    n = dom("._pendo-poll-message_");
                  n.length
                    ? (e.addClass("_pendo-poll-submitted_"),
                      n.css("margin-top:-" + n.height() / 2 + "px"),
                      s())
                    : t.advance();
                },
                u = function (e, t) {
                  return t && t.polls && t.polls.length
                    ? _.find(t.polls, function (t) {
                        return t.id === e;
                      })
                    : void 0;
                };
              t.after("render", function () {
                var e = Sizzle("._pendo-poll_")[0],
                  n = Sizzle("._pendo-poll-submit_", e)[0];
                n
                  ? t.attachEvent(n, "click", function (n) {
                      var i = Sizzle("._pendo-poll-question_", e),
                        o = _.map(i, function (e, t) {
                          var n = Sizzle(
                            "textarea,input:text,select,input:radio:checked",
                            e
                          );
                          if (n && n.length && n[0].value) {
                            var i = r[t];
                            return { pollId: i.id, value: a(i, n[0].value) };
                          }
                        });
                      t.response(_.compact(o)), d();
                    })
                  : t.attachEvent(e, "click", function (e) {
                      var n = dom(getTarget(e)).closest(
                        "._pendo-poll-question_ :button,._pendo-poll-question_ :radio"
                      );
                      if (n.length) {
                        var i = r[0],
                          o = a(
                            i,
                            n.attr("data-pendo-poll-value") || n.attr("value")
                          );
                        t.response([{ pollId: i.id, value: o }]), d();
                      }
                    });
              }),
                t.after("render", function () {
                  var e = Sizzle("._pendo-poll_ ._pendo-poll-npsrating_")[0],
                    n = dom("._pendo-poll_ ._pendo-poll-submit_"),
                    o = "_pendo-poll-npsrating-selected_";
                  e &&
                    (n.css({ display: "none" }),
                    t.attachEvent(e, "click", function (r) {
                      var a = Sizzle(":radio:checked", e)[0],
                        s = dom("._pendo-poll_");
                      dom("label", e).removeClass(i),
                        s.removeClass(o),
                        a &&
                          (dom('label[for="' + a.id + '"]').addClass(i),
                          s.addClass(o),
                          n.css({ display: "" })),
                        _.isFunction(t.resize) && t.resize();
                    }));
                }),
                t.after("show", function () {
                  n = new Date().getTime();
                }),
                (t.response = function (i, o) {
                  if (i && i.length) {
                    var r = _.map(i, function (i, o) {
                      var r = u(i.pollId, e),
                        a = createGuideEvent(
                          "pollResponse",
                          t.guideId,
                          t.id,
                          pendo.get_visitor_id(),
                          undefined,
                          e.language
                        );
                      return (
                        _.extend(a.props, {
                          poll_id: i.pollId,
                          poll_response: i.value,
                          duration: new Date().getTime() - n,
                        }),
                        r &&
                          r.attributes &&
                          r.attributes.type &&
                          _.extend(a.props, { poll_type: r.attributes.type }),
                        a
                      );
                    });
                    (o = addAccountIdParamIfAdoptPartner(o, r)),
                      writeBeacon(
                        "poll",
                        _.extend(
                          {
                            ct: new Date().getTime(),
                            v: VERSION,
                            jzb: pendo.squeezeAndCompress(r),
                          },
                          o
                        )
                      );
                  }
                });
            }
            return t;
          }
          function GuideStep(e) {
            var t = !1,
              n = !1;
            return (
              (this.guide = e),
              (this.elements = []),
              (this.handlers = []),
              (this.attributes = this.attributes || {}),
              (this.getGuide = function () {
                return this.guide;
              }),
              (this.getContent = function () {
                var e = this,
                  t = this.getGuide(),
                  n = (t && t.steps) || [],
                  i = _.indexOf(n, e),
                  o = getMetadata();
                _.isObject(o) || (o = prepareOptions());
                try {
                  var r = e.attributes.variables || {},
                    a = {
                      step: {
                        id: e.id,
                        isFirst: 0 === i,
                        isLast: i === n.length - 1,
                        index: i,
                        number: i + 1,
                      },
                      guide: {
                        id: t.id,
                        name: t.name,
                        publishedAt: t.publishedAt,
                        showsAfter: t.showsAfter,
                        percentComplete: n.length
                          ? Math.round(((i + 1) / n.length) * 100)
                          : 0,
                        stepCount: n.length,
                      },
                      metadata: escapeStringsInObject(o),
                      template: r,
                    };
                  return (
                    e.template || (e.template = _.template(e.content || "")),
                    replaceWithContentHost(
                      e
                        .template(a)
                        .replace(/#_pendo_g_undefined/g, "#_pendo_g_" + e.id)
                        .replace(/pendo-src="([^"]+)"/g, function (e, t) {
                          return /<%=[^>]+>/.test(t) ? e : 'src="' + t + '"';
                        })
                    )
                  );
                } catch (s) {
                  return e.content;
                }
              }),
              (this.isLocked = function () {
                return t;
              }),
              (this.lock = function () {
                t = !0;
              }),
              (this.unlock = function () {
                t = !1;
              }),
              (this.isTimedOut = function () {
                return n;
              }),
              (this.timeout = function () {
                n = !0;
              }),
              (this.isShown = function () {
                return this.elements.length > 0 || this.isLocked();
              }),
              (this.canShow = function () {
                var e = this;
                return get(e, "guide.attributes.isAnnouncement")
                  ? !1
                  : !e.isShown() &&
                      e.canShowOnPage(pendo.getCurrentUrl()) &&
                      canStepBeRendered(e);
              }),
              (this.canShowOnPage = function (e) {
                return pendo.testUrlForStep(this.regexUrlRule, e);
              }),
              (this.shouldAutoDisplay = function () {
                return (
                  !this.hasBeenControlled() &&
                  !this.isSnoozed() &&
                  !_.contains(["dismissed", "advanced"], this.seenState)
                );
              }),
              (this.autoDisplay = function () {
                var e = this;
                e.shouldAutoDisplay() && e.show("auto");
              }),
              (this._preRenderHealthCheck = function () {
                var t = this;
                if (pendo.designer || isPreviewing() || isInPreviewMode())
                  return !0;
                var n = pendo.getCurrentUrl();
                return t.regexUrlRule &&
                  !pendo.testUrlForStep(t.regexUrlRule, n)
                  ? (Tombstone.addGuide(e),
                    writeException(
                      new Error(
                        "guide " +
                          t.guideId +
                          ", step " +
                          t.id +
                          ' attempted display on page "' +
                          n +
                          '"'
                      ),
                      "pendo.io page rule exception"
                    ),
                    !1)
                  : store.getters["healthCheck/isMissingPageRule"]()(t)
                  ? (Tombstone.addGuide(e),
                    writeException(
                      new Error(
                        "guide " +
                          t.guideId +
                          ", step " +
                          t.id +
                          ' is missing regexUrlRule"'
                      ),
                      "pendo.io page rule exception"
                    ),
                    !1)
                  : t.pageId && !t.regexUrlRule
                  ? (Tombstone.addGuide(e),
                    writeException(
                      new Error(
                        "guide " +
                          t.guideId +
                          ", step " +
                          t.id +
                          " is missing regexUrlRule for page " +
                          t.pageId +
                          '"'
                      ),
                      "pendo.io page rule exception"
                    ),
                    !1)
                  : !0;
              }),
              (this.render = function () {
                var t = this;
                if (this._preRenderHealthCheck()) {
                  if (t.domJson) {
                    if (
                      ((t.eventRouter = new EventRouter()),
                      e.skipResourceCenterHomeView &&
                        e.moduleIdToReplaceHomeViewWith &&
                        e.hasNativeIntegrationEnabled)
                    ) {
                      var n = _.find(pendo.guides, function (t) {
                          return t.id === e.moduleIdToReplaceHomeViewWith;
                        }),
                        i = get(
                          n,
                          "attributes.resourceCenter.integrationProvider"
                        );
                      return BuildingBlockResourceCenter.renderNativeIntegration(
                        i,
                        n
                      );
                    }
                    return e.continueToNativeModule
                      ? BuildingBlockResourceCenter.handleNativeIntegrationContinuation(
                          e
                        )
                      : e.isModule
                      ? BuildingBlockGuides.renderResourceCenterModule(e)
                      : BuildingBlockGuides.renderGuideFromJSON(t.domJson, t);
                  }
                  var o = t.attributes.width,
                    r = t.attributes.height,
                    a = pendo.TOOLTIP_ARROW_SIZE,
                    s = "_pendo-group-id-" + e.id + "_",
                    d = dom("<div>")
                      .attr("id", getStepDivId(t))
                      .addClass(GUIDE_CSS_NAME + " " + s),
                    u = dom("<div/>")
                      .addClass("_pendo-guide-content_")
                      .html(t.getContent()),
                    l = dom("<div/>").addClass("_pendo-guide-container_"),
                    c = dom("<div/>").addClass("_pendo-backdrop_");
                  d.width(o),
                    d.height(r),
                    l.css({ left: a, top: a }),
                    t.isEditable && u.attr("contenteditable", "true"),
                    u.appendTo(l),
                    l.appendTo(d),
                    e &&
                      _.isFunction(e.isOnboarding) &&
                      e.isOnboarding() &&
                      d.addClass("_pendo-onboarding_"),
                    (t.overlayDiv = c),
                    (t.guideElement = d);
                }
              }),
              (this.teardown = function () {
                setFocusToActivationElement(this),
                  log("guide step teardown", "guide", "render"),
                  _.each(this.handlers, function (e) {
                    detachEvent(e.element, e.type, e.fn, !0);
                  }),
                  (this.hasBeenScrolledTo = !1),
                  clearInterval(this.timeoutTimer),
                  delete this.timeoutTimer,
                  (this.handlers.length = 0),
                  (this.attributes.imgCount = 0);
              }),
              (this.show = function (t) {
                var n = this;
                return _.contains(["auto", "continue"], t) &&
                  store.getters["healthCheck/isRedisplay"]()(this)
                  ? void store.dispatch("healthCheck/fixSeenStateAndLogError", {
                      step: this,
                      reason: t,
                    })
                  : !isPreviewing() && e.control
                  ? void (n.hasBeenControlled() || n.onControlGuide("control"))
                  : void GuideDisplay.show(n, t);
              }),
              (this._show = function (t) {
                var n = this;
                if (!e.canShowOnDevice() || !n.canShow()) {
                  if (
                    !getPendoConfigValue("enableGuideTimeout") &&
                    !getOption("enableGuideTimeout")
                  )
                    return;
                  if ("active" === n.seenState) return;
                  if (
                    !isWalkthrough(e) ||
                    1 === e.steps.length ||
                    this.isTimedOut()
                  )
                    return;
                  var i = e && e.steps;
                  if (!i) return;
                  var o = _.indexOf(i, n);
                  if (0 === o) return;
                  return void (n.shouldStartTimer() && n.beginTimeoutTimer());
                }
                n.render(), n.isShown() && n.onShown(t);
              }),
              (this.shouldStartTimer = function () {
                return (
                  e.canShowOnDevice() &&
                  !e.attributes.isAnnouncement &&
                  !isDismissedUntilReload(this)
                );
              }),
              (this.getStepPollTypes = function (e, t) {
                if (t.pollIds && t.pollIds.length) {
                  var n = [];
                  return (
                    _.forEach(t.pollIds, function (t) {
                      var i = _.find(e.polls, function (e) {
                        return e.id === t;
                      });
                      i &&
                        i.attributes &&
                        i.attributes.type &&
                        n.push(i.attributes.type);
                    }),
                    n
                  );
                }
              }),
              (this.onControlGuide = function (t) {
                var n = this;
                if (!isPreviewing()) {
                  (n.seenReason = t), (seenTime = new Date().getTime());
                  var i = this.getStepPollTypes(e, n);
                  n.hasBeenControlled() ||
                    (controlledGuide(
                      n.guideId,
                      n.id,
                      pendo.get_visitor_id(),
                      t,
                      e.language,
                      i
                    ),
                    _.each(e.steps, function (e) {
                      e.seenState = "notSeen";
                    }));
                }
              }),
              (this.onShown = function (t) {
                var n = this;
                if (
                  (n.overrideElement &&
                    dom.addClass(n.overrideElement, "triggered"),
                  !isPreviewing())
                ) {
                  (n.seenReason = t),
                    (n.seenState = "active"),
                    (seenTime = new Date().getTime());
                  var i = { last_updated_at: n.lastUpdatedAt },
                    o = this.getStepPollTypes(e, n);
                  o && (i.step_poll_types = o),
                    seenGuide(
                      n.guideId,
                      n.id,
                      pendo.get_visitor_id(),
                      t,
                      e.language,
                      i
                    ),
                    (lastGuideStepSeen = {
                      guideId: e.id,
                      guideStepId: n.id,
                      time: seenTime,
                      state: n.seenState,
                      seenReason: t,
                      visitorId: pendo.get_visitor_id(),
                    }),
                    _.each(e.steps, function (n) {
                      "snoozed" === n.seenState &&
                        ((n.snoozeEndTime = 0),
                        snoozeCanceledGuide(
                          e.id,
                          n.id,
                          pendo.get_visitor_id(),
                          t,
                          e.language
                        ));
                    }),
                    _.isFunction(n.script) && n.script(n, e);
                }
                store.dispatch("frames/guideStepShownInFrame", {
                  guideId: e.id,
                  stepId: n.id,
                  isShown: n.isShown(),
                });
              }),
              (this.hide = function (t) {
                var n = this;
                n.unlock(),
                  n.teardown(),
                  _.each(n.elements, function (e) {
                    removeNode(e);
                  }),
                  n.attributes &&
                    t &&
                    t.stayHidden &&
                    (n.attributes.stayHidden = t.stayHidden),
                  (n.elements.length = 0),
                  (n.element = null),
                  (n.guideElement = null),
                  n.overrideElement &&
                    dom.removeClass(n.overrideElement, "triggered"),
                  store.dispatch("frames/guideStepHiddenInFrame", {
                    guideId: e.id,
                    stepId: n.id,
                  });
              }),
              (this.advance = function () {
                "advanced" !== this.seenState && pendo.onGuideAdvanced(this);
              }),
              (this.dismiss = function () {
                "dismissed" !== this.seenState && pendo.onGuideDismissed(this);
              }),
              (this.isPoweredByEnabled = function () {
                return this.hideCredits !== !0;
              }),
              (this.isSnoozed = function () {
                var e = "snoozed" === this.seenState,
                  t = this.snoozeEndTime
                    ? new Date().getTime() > this.snoozeEndTime
                    : !0;
                return e && !t;
              }),
              (this.hasBeenControlled = function () {
                return "notSeen" === this.seenState;
              }),
              (this.attachEvent = function (e, t, n) {
                var i = { element: e, type: t, fn: n };
                attachEvent(e, t, n, !0), this.handlers.push(i);
              }),
              (this.searchFor = function (e) {
                return e.length < 3 ? !1 : strContains(this.content, e, !0);
              }),
              (this.hasBeenSeen = function () {
                return (
                  "advanced" == this.seenState || "dismissed" == this.seenState
                );
              }),
              (this.reposition = function () {}),
              (this.beginTimeoutTimer = function () {
                var e = getGuideSeenTimeoutLength(),
                  t = _.bind(function () {
                    var t,
                      n = this.getGuide();
                    (t = this.canShowOnPage(pendo.getCurrentUrl())
                      ? canStepBeRendered(this)
                        ? "other"
                        : "element"
                      : "page"),
                      timeoutGuide(
                        n.id,
                        this.id,
                        pendo.get_visitor_id(),
                        t,
                        n.language,
                        e
                      ),
                      pendo.log("Guide Timed Out"),
                      this.timeout(),
                      delete this.timeoutTimer;
                  }, this);
                this.timeoutTimer ||
                  (this.timeoutTimer = setTimeout(function () {
                    t();
                  }, e));
              }),
              this
            );
          }
          function AutoHeight() {
            var e = this;
            if (e.attributes && e.attributes.autoHeight) {
              var t = function () {
                return (
                  "tooltip" == e.type ||
                  (isBrowserInQuirksmode() && "lightbox" == e.type)
                );
              };
              e.after("render", function () {
                e.resize(),
                  e.attachEvent(e.guideElement[0], "load", function () {
                    e.resize();
                  });
              }),
                (e.resize = function () {
                  var n = pendo.TOOLTIP_ARROW_SIZE,
                    i = e.guideElement,
                    o = dom("._pendo-guide-container_", i);
                  t()
                    ? o.css({ width: e.attributes.width - 2 * n, height: "" })
                    : o.css({ right: n, bottom: "" }),
                    (e.attributes.height = o.height() + 2 * n),
                    i.height(e.attributes.height),
                    e.reposition();
                });
            }
            return e;
          }
          function CloseButton(e) {
            var t = this;
            return t.domJson || t.domJsonpUrl
              ? t
              : (t.after("render", function () {
                  addCloseButton(t.guideElement[0], function () {
                    (!e.isOnboarding() ||
                      confirm(
                        "Are you sure you want to stop this tutorial?"
                      )) &&
                      pendo.onGuideDismissed(t);
                  });
                }),
                t);
          }
          function Credits() {
            var e = this;
            return (
              e.hideCredits ||
                e.domJson ||
                e.domJsonpUrl ||
                e.after("render", function () {
                  pendo._addCredits(e.guideElement[0]);
                }),
              e
            );
          }
          function PreviewMode() {
            var e = this;
            return (
              e.after("render", function () {
                adjustPreviewBarPosition(document);
              }),
              e
            );
          }
          function WalkthroughGuide() {
            var e = !1;
            if (this.isMultiStep || this.isModule || this.isTopLevel) {
              _.each(this.steps, function (e) {
                e.after("render", function () {
                  _.each(e.elements, function (e) {
                    dom(e).addClass("_pendo-guide-walkthrough_");
                  });
                });
              });
              var t = function (e, t) {
                  if (!e) return !0;
                  var n = _.last(e);
                  return n.attributes.isRequired != t.attributes.isRequired &&
                    n.attributes.isRequired
                    ? !0
                    : !1;
                },
                n = null;
              (this.sections = _.reduce(
                this.steps,
                function (e, i) {
                  return t(n, i) ? (e.push(n), (n = [i])) : n.push(i), e;
                },
                []
              )),
                (this.sections = _.compact(this.sections.concat([n]))),
                (this.findSectionForStep = function (e) {
                  return _.find(this.sections, function (t) {
                    return _.contains(t, e);
                  });
                }),
                (this.getSubSection = function (e, t) {
                  var n = _.indexOf(e, t);
                  return e.slice(n + 1);
                }),
                (this.isContinuation = function (e) {
                  var t = this.isTopLevel || this.isModule,
                    n = this.hasResourceCenterContent;
                  return t ? n && !!this.nextStep(e) : !!this.nextStep(e);
                });
              var i = 432e5;
              (this.nextStep = function (t) {
                var n = null,
                  o = this;
                if (o.isGuideSnoozed()) return null;
                t = t || {};
                for (var r = 0; r < o.steps.length; r++)
                  if (o.steps[r].id === t.guideStepId) {
                    if ("dismissed" === t.state) break;
                    if ("active" === t.state) {
                      n = o.steps[r];
                      break;
                    }
                    if ("snoozed" === t.state) {
                      n = o.steps[0];
                      break;
                    }
                    if ("advanced" === t.state && t.destinationStepId) {
                      n = _.find(o.steps, function (e) {
                        return e.id === t.destinationStepId;
                      });
                      break;
                    }
                    if (r + 1 < o.steps.length) {
                      n = o.steps[r + 1];
                      break;
                    }
                  }
                if (n) {
                  var a = new Date().getTime(),
                    s = t.time;
                  return s && a - s > i && !isOB(o)
                    ? (e ||
                        (log(
                          "Multi-step continuation has expired",
                          "guides",
                          "info"
                        ),
                        (e = !0)),
                      null)
                    : n;
                }
                return null;
              }),
                (this.shouldAutoDisplay = function () {
                  var e = this,
                    t = e.nextStep(lastGuideStepSeen) || _.first(e.steps);
                  return (
                    e.hasLaunchMethod("auto") && t && t.shouldAutoDisplay()
                  );
                }),
                (this.autoDisplay = function () {
                  var e = this;
                  if (e.shouldAutoDisplay()) {
                    var t = e.nextStep(lastGuideStepSeen) || _.first(e.steps);
                    t.autoDisplay();
                  }
                }),
                (this.launch = function (e) {
                  var t = _.first(this.steps);
                  t.show(e);
                }),
                (this.show = function (e) {
                  var t = this,
                    n = t.nextStep(lastGuideStepSeen) || _.first(t.steps);
                  n.show(e);
                }),
                (this.isComplete = function () {
                  var e = ["advanced", "dismissed"],
                    t = _.last(this.steps);
                  return t ? _.contains(e, t.seenState) : !1;
                }),
                (this.activeStep = function () {
                  var e = [].concat(this.steps).reverse();
                  return _.findWhere(e, { seenState: "active" });
                });
            }
            return this;
          }
          function GroupGuide() {
            var e = this;
            return (
              e.attributes &&
                "group" == e.attributes.type &&
                (e.checkForHiddenGroupSteps = function () {
                  _.each(e.steps, function (e) {
                    e.isShown() || e.autoDisplay();
                  });
                }),
              e
            );
          }
          function GuideErrorThrottle() {
            function e(e) {
              var n = [];
              return function (i) {
                try {
                  return i.apply(t, _.toArray(arguments).slice(1));
                } catch (o) {
                  var r = 5,
                    a = "ERROR in guide " + e + ' (ID="' + t.id + '")';
                  if ((n.push(getNow()), n.length >= r)) {
                    var s = _.last(n) - _.first(n),
                      d = s > 0 ? (n.length - 1) / (s / 6e4) : 1 / 0;
                    d >= GuideErrorThrottle.MAX_ERRORS_PER_MINUTE &&
                      ((a = "Exceeded error rate limit, dropping guide.\n" + a),
                      Tombstone.addGuide(t),
                      Events.trigger("renderFail", t)),
                      n.shift();
                  }
                  throw (writeException(o, a), o);
                }
              };
            }
            var t = this;
            return (
              _.each(["canShow", "placeBadge", "show"], function (n) {
                t[n] = _.wrap(t[n], e(n));
              }),
              t
            );
          }
          function Guide() {
            if (
              ((this.elements = []),
              (this.attributes = this.attributes || {}),
              this.attributes.device && this.attributes.device.type)
            )
              if ("all" == this.attributes.device.type)
                this.attributes.device = { desktop: !0, mobile: !0 };
              else {
                var e = this.attributes.device.type;
                (this.attributes.device = { mobile: !1, desktop: !1 }),
                  (this.attributes.device[e] = !0);
              }
            else this.attributes.device = this.attributes.device || {};
            _.each(
              this.steps,
              function (e) {
                "mobile-lightbox" === e.type &&
                  ((this.attributes.device.desktop = !1),
                  (this.attributes.device.mobile = !0)),
                  GuideStep.create(e, this);
              },
              this
            ),
              (this.isActivatedByEvent = function (e) {
                var t = this;
                return !!(
                  t.hasLaunchMethod("dom") &&
                  t.attributes &&
                  t.attributes.activation &&
                  _.contains(t.attributes.activation.event, e) &&
                  this.canEventActivatedGuideBeShown()
                );
              }),
              (this.isContinuation = function (e) {
                return !1;
              }),
              (this.isGuideWidget = function () {
                var e = this;
                return e.attributes && "launcher" === e.attributes.type;
              }),
              (this.isOnboarding = function () {
                var e = this;
                return e.attributes && !!e.attributes.isOnboarding;
              }),
              (this.isWhatsNew = function () {
                var e = _.first(this.steps);
                return e && "whatsnew" === e.type;
              }),
              (this.isAnnouncement = function () {
                return get(this, "attributes.isAnnouncement");
              }),
              (this.isHelpGuide = function () {
                return (
                  !this.isOnboarding() &&
                  !this.isWhatsNew() &&
                  !this.isGuideWidget()
                );
              }),
              (this.nextStep = function (e) {
                return null;
              }),
              (this.hasLaunchMethod = function (e) {
                return this.launchMethod && this.launchMethod.indexOf(e) >= 0;
              }),
              (this.shouldAutoDisplay = function () {
                var e = this;
                return (
                  e.hasLaunchMethod("auto") &&
                  _.any(e.steps, function (e) {
                    return e.shouldAutoDisplay();
                  })
                );
              }),
              (this.autoDisplay = function () {
                var e = this;
                e.shouldAutoDisplay() &&
                  _.each(e.steps, function (e) {
                    e.autoDisplay();
                  });
              }),
              (this.isShown = function () {
                return _.any(this.steps, function (e) {
                  return e.isShown();
                });
              }),
              (this.canShowOnDevice = function () {
                var e = this;
                if (!isPreviewing()) {
                  var t = isMobileUserAgent(),
                    n = !t,
                    i = (e.attributes && e.attributes.device) || {};
                  if (n && i.desktop === !1) return !1;
                  if (t && i.mobile !== !0) return !1;
                }
                return !0;
              }),
              (this.canShow = function () {
                var e = this;
                return (
                  e.canShowOnDevice() &&
                  _.any(e.steps, function (e) {
                    return e.canShow();
                  })
                );
              }),
              (this.launch = function (e) {
                var t = this;
                return (
                  t.hasGuideBeenControlled() || t.show(e),
                  t.isShown()
                    ? void _.each(t.steps, function (e) {
                        e.seenState = "active";
                      })
                    : !t.isShown() && t.isControlGroup()
                    ? void _.each(t.steps, function (e) {
                        e.seenState = "notSeen";
                      })
                    : void 0
                );
              }),
              (this.show = function (e) {
                var t = this;
                _.each(t.steps, function (t) {
                  t.show(e);
                });
              }),
              (this.checkForHiddenGroupSteps = function () {}),
              (this.hide = function (e) {
                var t = this;
                _.each(t.steps, function (t) {
                  t.hide(e);
                });
              }),
              (this.hasBeenSeen = function () {
                var e = this;
                return _.all(e.steps, function (e) {
                  return e.hasBeenSeen();
                });
              }),
              (this.canBadgeBeShown = function () {
                var e = this.attributes.badge;
                return e && e.isOnlyShowOnce && this.hasBeenSeen() ? !1 : !0;
              }),
              (this.placeBadge = function () {
                if (
                  this.canShowOnDevice() &&
                  this.hasLaunchMethod("badge") &&
                  this.canBadgeBeShown()
                ) {
                  var e = get(this, "attributes.resourceCenter");
                  if (this.isControlGroup() && !e)
                    return void (
                      this.hasGuideBeenControlled() ||
                      this.steps[0].onControlGuide("control")
                    );
                  var t = _.first(this.steps);
                  t &&
                    _.isFunction(t.fetchContent) &&
                    !ConfigReader.get("disablePrefetch") &&
                    t.fetchContent(),
                    t &&
                      _.isFunction(t.canShowOnPage) &&
                      t.canShowOnPage(pendo.getCurrentUrl()) &&
                      placeBadge(this);
                } else removeBadgeForGuide(this);
              }),
              (this.findStepById = function (e) {
                return _.find(this.steps, function (t) {
                  return t.id === e;
                });
              }),
              (this.isPoweredByEnabled = function () {
                return !!_.find(this.steps, function (e) {
                  return e.isPoweredByEnabled();
                });
              }),
              (this.searchFor = function (e) {
                var t = this,
                  n = null;
                if (strContains(this.name, e, !0)) n = "name";
                else {
                  var i = [],
                    o = !1;
                  if (
                    (this.attributes &&
                      this.attributes.launcher &&
                      this.attributes.launcher.keywords &&
                      (i = this.attributes.launcher.keywords),
                    i.length > 0 &&
                      (o = _.find(i, function (t) {
                        return strContains(t.text, e, !0);
                      })),
                    o)
                  )
                    n = "tag";
                  else {
                    var r = _.map(this.steps, function (t) {
                        return t.searchFor(e);
                      }),
                      a = _.compact(r).length > 0;
                    a && (n = "content");
                  }
                }
                return n ? { guide: t, field: n } : !1;
              }),
              (this.shouldBeAddedToResourceCenter = function () {
                var e = this;
                if (!e.steps || !e.steps.length) return !1;
                if (e.control) return !1;
                if (e.eligibleInFrame) return !0;
                var t = e.steps[0];
                return (e.hasLaunchMethod("launcher") || e.isWhatsNew()) &&
                  t.canShowOnPage(pendo.getCurrentUrl()) &&
                  e.canShowOnDevice() &&
                  canStepBeRendered(t)
                  ? !0
                  : !1;
              }),
              (this.shouldBeAddedToLauncher = function () {
                var e = this;
                if (!e.steps || !e.steps.length) return !1;
                var t = e.steps[0];
                return (e.hasLaunchMethod("launcher") || e.isWhatsNew()) &&
                  t.canShowOnPage(pendo.getCurrentUrl()) &&
                  e.canShowOnDevice() &&
                  canStepBeRendered(t)
                  ? !0
                  : !1;
              });
            var t = "PENDO_HELPER_STEP";
            return (
              (this.getPositionOfStep = function (e) {
                var n = this,
                  i = _.reject(n.steps, function (e) {
                    return strContains(e.content, t);
                  });
                return _.indexOf(i, e) + 1;
              }),
              (this.getTotalSteps = function () {
                var e = this,
                  n = _.reject(e.steps, function (e) {
                    return strContains(e.content, t);
                  });
                return n.length;
              }),
              (this.getSeenSteps = function () {
                return _.size(
                  _.filter(this.steps, function (e) {
                    return e.hasBeenSeen();
                  })
                );
              }),
              (this.isComplete = function () {
                var e = ["advanced", "dismissed"];
                return _.all(this.steps, function (t) {
                  return _.contains(e, t.seenState);
                });
              }),
              (this.isInProgress = function () {
                var e = ["active", "advanced", "dismissed"];
                return (
                  !this.isComplete() &&
                  _.any(this.steps, function (t) {
                    return _.contains(e, t.seenState);
                  })
                );
              }),
              (this.isNotStarted = function () {
                return !this.isInProgress() && !this.isComplete();
              }),
              (this.fetchContent = function () {
                return q.all(
                  _.map(this.steps, function (e) {
                    return _.isFunction(e.fetchContent)
                      ? e.fetchContent()
                      : void 0;
                  })
                );
              }),
              (this.canEventActivatedGuideBeShown = function () {
                var e = this;
                return e.attributes.dom &&
                  e.attributes.dom.isOnlyShowOnce &&
                  e.steps[0].hasBeenSeen()
                  ? !1
                  : !0;
              }),
              (this.isGuideSnoozed = function () {
                var e = this;
                return _.any(e.steps, function (e) {
                  return e.isSnoozed();
                });
              }),
              (this.hasGuideBeenControlled = function () {
                var e = this;
                return _.any(e.steps, function (e) {
                  return e.hasBeenControlled();
                });
              }),
              (this.isControlGroup = function () {
                var e = this;
                return e.control;
              }),
              (this.isPastSnooze = function () {
                var e = this;
                return _.any(e.steps, function (e) {
                  return (
                    "snoozed" === e.seenState &&
                    new Date().getTime() > e.snoozeEndTime
                  );
                });
              }),
              this
            );
          }
          function GuideFactory(e) {
            return Guide.create(e);
          }
          function AdvanceTrigger(e, t, n) {
            (this.element = e),
              "element" == t
                ? (this.method = "click")
                : "hover" == t
                ? (this.method = "mouseover")
                : (this.method = t),
              (this.step = n),
              (this.guide = n.getGuide());
          }
          function loadGlobalScript(e) {
            var t = q.defer();
            return (
              pendo.loadResource(e, function () {
                t.resolve();
              }),
              t.promise
            );
          }
          function validateGlobalScript(e, t) {
            return _.size(pendo.events._handlers.validateGlobalScript) > 0
              ? pendo.ajax
                  .get(t)
                  .then(function (e) {
                    return pendo.events.validateGlobalScript(e.data);
                  })
                  .then(function () {
                    return e(t);
                  })
              : e(t);
          }
          function ignoreEmptyGlobalScript(e, t) {
            return t ? e(t) : q.resolve();
          }
          function getAssetHost() {
            var e = ConfigReader.getHostedConfig("contentHost"),
              t = getProtocol() + "//";
            return e
              ? t + e
              : ConfigReader.getLocalConfig("contentHost", t + ASSET_HOST);
          }
          function getDefaultCssUrl() {
            var e = getAssetHost(),
              t = getPendoConfigValue("guideCssAssetPath");
            return t
              ? t
              : /local\.pendo\.io/.test(e)
              ? e + "/dist/guide.css"
              : e + "/agent/releases/" + PACKAGE_VERSION + "/guide.css";
          }
          function getActiveGuides() {
            return activeGuides;
          }
          function setActiveGuides(e) {
            return _.isArray(e)
              ? ((activeGuides = e),
                void Events.guideListChanged.trigger({
                  guideIds: _.pluck(e, "id"),
                }))
              : void log("bad guide array iput to `setActiveGuides`");
          }
          function getGuideSeenTimeoutLength() {
            return (
              getPendoConfigValue("guideSeenTimeoutLength") ||
              DEFAULT_GUIDE_SEEN_TIMEOUT_LENGTH
            );
          }
          function hideGuides(e) {
            _.each(getActiveGuides(), function (t) {
              _.isFunction(t.isShown) && t.isShown() && t.hide(e);
            });
          }
          function checkLockedStep(e) {
            return e.isLocked()
              ? e.elements && e.elements.length
                ? (writeErrorPOST(
                    'guide "' +
                      e.guideId +
                      '", step "' +
                      e.id +
                      '" locked and rendered',
                    "pendo.io locked step exception"
                  ),
                  !1)
                : !0
              : !1;
          }
          function isDismissedUntilReload(e) {
            return e && e.attributes && e.attributes.stayHidden;
          }
          function pullContentsFromTargetElement(e) {
            var t = pendo.dom(e),
              n = t.text() || "",
              i = n.trim().toLowerCase(),
              o = e.value,
              r = i || o;
            return r;
          }
          function doesElementMatchContainsRules(e, t) {
            for (
              var n = pullContentsFromTargetElement(e), i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i],
                r = doesElementContentMatchRule(n, o);
              if (!r) return !1;
            }
            return !0;
          }
          function doesElementContentMatchRule(e, t) {
            var n = t.matchType,
              i = t.matchValue,
              o = t.dataType,
              r = e || "";
            if ("number" === o) {
              var a = pendo.getNumberFromText(r);
              if (null == a) return !1;
              (r = parseFloat(a)), (i = parseFloat(i));
              var s = isNaN(r) || isNaN(i);
              if (s) return !1;
            } else
              "string" === o && ((r = r.toLowerCase()), (i = i.toLowerCase()));
            return "equal" === n
              ? r === i
              : "notEqual" === n
              ? r !== i
              : "contains" === n
              ? String(r).indexOf(i) > -1
              : "notContains" === n
              ? -1 === String(r).indexOf(i)
              : "greaterThan" === n
              ? r > i
              : "lessThan" === n
              ? i > r
              : !1;
          }
          function dismissedGuide(e, t, n, i, o) {
            var r = createGuideEvent({
              type: "guideDismissed",
              guideId: e,
              stepId: t,
              visitorId: n,
              seen_reason: i,
              language: o,
            });
            stageGuideEvent(r), Events.guideDismissed.trigger(r);
          }
          function snoozedGuide(e, t, n, i, o, r) {
            var a = createGuideEvent({
              type: "guideSnoozed",
              guideId: e,
              stepId: t,
              visitorId: n,
              seen_reason: i,
              language: o,
              snooze_duration: r,
            });
            stageGuideEvent(a), Events.guideSnoozed.trigger(a);
          }
          function advancedGuide(e, t, n, i, o, r, a) {
            var s = {
              type: "guideAdvanced",
              guideId: e,
              stepId: t,
              visitorId: n,
              seen_reason: i,
              language: o,
            };
            a && (s.destinationStepId = a);
            var d = createGuideEvent(s);
            stageGuideEvent(d, null, r), Events.guideAdvanced.trigger(d);
          }
          function timeoutGuide(e, t, n, i, o, r) {
            var a = createGuideEvent({
              type: "guideTimeout",
              guideId: e,
              stepId: t,
              visitorId: n,
              seen_reason: i,
              language: o,
              guideSeenTimeoutLength: r,
            });
            stageGuideEvent(a), Events.guideTimeout.trigger(a);
          }
          function snoozeCanceledGuide(e, t, n, i, o) {
            var r = createGuideEvent({
              type: "guideSnoozeCanceled",
              guideId: e,
              stepId: t,
              visitorId: n,
              seen_reason: i,
              language: o,
            });
            stageGuideEvent(r, null, !0),
              Events.guideSnoozeCancelled.trigger(r);
          }
          function writeLatestDismissedAutoAtCache(e) {
            _.isFunction(e.getTime) && (e = e.getTime()),
              (pendo.latestDismissedAutoAt = e),
              agentStorage.write("latestDismissedAutoAt", e, 1e4);
          }
          function writeFinalAdvancedAutoAtCache(e) {
            _.isFunction(e.getTime) && (e = e.getTime()),
              (pendo.finalAdvancedAutoAt = e),
              agentStorage.write("finalAdvancedAutoAt", e, 1e4);
          }
          function writeLatestSnoozedAutoAtCache(e) {
            _.isFunction(e.getTime) && (e = e.getTime()),
              (pendo.latestSnoozedAutoAt = e),
              agentStorage.write("latestSnoozedAutoAt", e, 1e4);
          }
          function createGuideEvent(e, t, n, i, o, r) {
            var a = e;
            "object" != typeof a &&
              (a = {
                type: e,
                guideId: t,
                stepId: n,
                visitorId: i,
                language: r,
              }),
              o && (a.reason = o),
              _.isString(a.language) || delete a.language;
            var s = _.extend(
              { guide_id: a.guideId, guide_step_id: a.stepId },
              _.omit(a, "type", "guideId", "stepId", "visitorId")
            );
            return EventTracer.addTracerIds({
              type: a.type,
              visitor_id: a.visitorId,
              account_id: pendo.get_account_id(),
              browser_time: new Date().getTime(),
              url: pendo.url.externalizeURL(),
              props: s,
            });
          }
          function applyTimerCache(e, t) {
            return (
              (t = parseInt(t, 10)),
              isNaN(t) || !_.isNumber(t)
                ? e
                : _.isNumber(e) && t > e
                ? t
                : _.isNumber(e)
                ? e
                : t
            );
          }
          function postLoadGuideJs(e, t, n) {
            return pendo.ajax.postJSON(e, t).then(function (e) {
              var t = findStoredPreviewConfig(localStorage);
              return (
                _.extend(pendo, e.data),
                t
                  ? previewGuideRequest(t)
                      .then(n)
                      .fail(function () {
                        log("Fail to request guide preview"), n();
                      })
                  : n()
              );
            });
          }
          function sortGuidesByPriority(e) {
            return (
              _.each(e, function (e, t) {
                e.attributes || (e.attributes = {}),
                  (isNaN(e.attributes.priority) ||
                    !_.isNumber(e.attributes.priority)) &&
                    (e.attributes.priority = t);
              }),
              e.sort(function (e, t) {
                return t.attributes.priority - e.attributes.priority;
              }),
              e
            );
          }
          function saveGuideShownState(e) {
            var t = _.find(e, function (e) {
              return _.isFunction(e.isShown) && e.isShown() && !e.isTopLevel;
            });
            if (!t) return function () {};
            var n = _.chain(t.steps)
              .filter(function (e) {
                return e.isShown();
              })
              .indexBy("id")
              .value();
            return function (e) {
              var i = _.findWhere(e, { id: t.id });
              i &&
                (get(i, "attributes.doNotResume") ||
                  _.each(i.steps, function (e) {
                    var t = n[e.id];
                    t &&
                      ((e.seenState && "active" !== e.seenState) ||
                        e.show(t.seenReason));
                  }));
            };
          }
          function loadExternalCss(e, t) {
            var n = document.getElementById(e);
            if (n && n.href && n.href.indexOf(t) >= 0) return q.resolve();
            var i = q.defer();
            dom(n).remove();
            var o = pendo.loadResource(t, function () {
              i.resolve();
            });
            return (o.id = e), i.promise;
          }
          function waitForGlobalCssToLoad(e, t, n) {
            function i(n) {
              setTimeout(function () {
                o(r[0])
                  ? (r.remove(), s.resolve())
                  : t() - a > e
                  ? (r.remove(), s.reject())
                  : i(100);
              }, n);
            }
            function o(e) {
              var t = getComputedStyle_safe(e);
              if (t) return "none" === t.display;
            }
            if (!shouldLoadGlobalCSS()) return q.resolve();
            (t = t || getNow), (n = n || "_pendo-hidden_");
            var r = dom("<div>")
                .addClass(n)
                .css({
                  position: "absolute",
                  bottom: "0px",
                  right: "0px",
                  width: "0px",
                  height: "0px",
                  visibility: "hidden",
                })
                .appendTo(getGuideAttachPoint()),
              a = t(),
              s = q.defer();
            return i(0), s.promise;
          }
          function loadGuideCss() {
            var e = [];
            if (!shouldLoadGlobalCSS()) return q.resolve();
            e.push(loadExternalCss("_pendo-default-css_", getDefaultCssUrl()));
            var t = pendo.guideWidget || {},
              n = t.data || {},
              i = n.guideCssUrl,
              o = "_pendo-css_";
            return (
              i
                ? e.push(loadExternalCss(o, replaceWithContentHost(i)))
                : dom("#" + o).remove(),
              q.all(e)
            );
          }
          function prefetchDomActivatedGuideContent(e) {
            ConfigReader.get("disablePrefetch") ||
              _.each(e, function (e) {
                _.isFunction(e.hasLaunchMethod) &&
                  e.hasLaunchMethod("dom") &&
                  e.steps &&
                  e.steps.length &&
                  _.isFunction(e.steps[0].fetchContent) &&
                  e.steps[0].fetchContent();
              });
          }
          function getGuideAttachPoint() {
            var e = getGuideAttachPoint.attachPoint;
            if (null == e) {
              var t = ConfigReader.get("guides.attachPoint");
              if (t) {
                try {
                  e = Sizzle(t)[0];
                } catch (n) {
                  log('Error finding guide attach point "' + t + '"');
                }
                e || (e = document.createElement("div"));
              } else e = !1;
              getGuideAttachPoint.attachPoint = e;
            }
            return e || getBody();
          }
          function startPreviewMode(e) {
            if (!detectMaster()) {
              var t =
                findUrlPreviewConfig(e.location.search) ||
                findStoredPreviewConfig(pendoLocalStorage);
              if (t) {
                var n = document.getElementById(pendoPreview);
                return n
                  ? !0
                  : (pendoLocalStorage &&
                      _.isFunction(pendoLocalStorage.setItem) &&
                      pendoLocalStorage.setItem(
                        pendoPreview,
                        JSON.stringify(_.extend(t, { apiKey: pendo.apiKey }))
                      ),
                    _.isFunction(e.addEventListener) &&
                      e.addEventListener("message", previewMessageHandler),
                    agentStorage.clear("lastStepAdvanced"),
                    getBody().appendChild(createPreviewBar()),
                    Events.startPreview.trigger(),
                    !0);
              }
            }
          }
          function launchPreviewListener(e) {
            e &&
              e.data &&
              e.data.type === pendoPreview + "::launch" &&
              (pendoLocalStorage.setItem(
                pendoPreview,
                JSON.stringify(
                  _.extend(
                    { apiKey: pendo.apiKey, origin: e.origin },
                    e.data.config
                  )
                )
              ),
              startPreviewMode(window) &&
                (e.source.postMessage(
                  {
                    type: pendoPreview + "::ready",
                    apiKey: pendo.apiKey,
                    accountId: pendo.accountId,
                  },
                  "*"
                ),
                forceGuideReload(),
                store.dispatch("frames/startPreview")));
          }
          function restartPreview(e, t, n) {
            hideGuides(),
              store.commit("healthCheck/resetStepStatus", null, { root: !0 });
            var i = t[0];
            _.each(i.steps, function (e) {
              e.seenState = null;
            }),
              agentStorage.clear("lastStepAdvanced"),
              setPreviewState(null, e);
            var o = preparePreviewLastGuideStepSeen(e, t, n);
            return o;
          }
          function resizePreview(e) {
            var t = document.getElementById(pendoPreview);
            t && (t.style.height = e);
          }
          function previewMessageHandler(e) {
            var t = e.data.type;
            t === pendoPreview + "::exit"
              ? (exitPreviewMode(), store.dispatch("frames/stopPreview"))
              : t === pendoPreview + "::restart"
              ? ((lastGuideStepSeen = restartPreview(
                  pendoLocalStorage,
                  activeGuides,
                  lastGuideStepSeen
                )),
                store.dispatch("frames/restartPreview"))
              : t === pendoPreview + "::resize" && resizePreview(e.data.height);
          }
          function isInPreviewMode() {
            try {
              return !!findStoredPreviewConfig(pendoLocalStorage);
            } catch (e) {
              return !1;
            }
          }
          function setPreviewState(e, t) {
            var n = findStoredPreviewConfig(t);
            n &&
              ((n.state = e),
              t &&
                _.isFunction(t.setItem) &&
                t.setItem(pendoPreview, JSON.stringify(n)));
          }
          function getPreviewState(e) {
            var t = findStoredPreviewConfig(e);
            if (t) return t.state;
          }
          function createPreviewBar() {
            var e = document.createElement("iframe");
            (e.id = pendoPreview), (e.src = "about:blank");
            var t = "70px";
            return (
              setStyles(e, {
                border: "none",
                display: "block !important",
                height: t,
                left: 0,
                position: "fixed",
                right: 0,
                top: 0,
                visibility: "visible !important",
                width: "100%",
                "z-index": 4e5,
              }),
              (e.onload = function () {
                var t = document.createElement("script"),
                  n = getPendoConfigValue("previewModeAssetPath"),
                  i =
                    getAssetHost() +
                    "/agent/releases/" +
                    PACKAGE_VERSION +
                    "/pendo.preview.min.js";
                (t.src = n || i), e.contentDocument.body.appendChild(t);
              }),
              e
            );
          }
          function preparePreviewGuide(e, t) {
            var n = findStoredPreviewConfig(pendoLocalStorage);
            if (!n) return t;
            var i = _.map(
              _.filter(t, function (e) {
                return e.id === n.guideId;
              }),
              function (e) {
                "launcher" === e.launchMethod &&
                  (e.launchMethod = "auto-launcher");
                for (
                  var t = _.find(e.steps, function (e) {
                      return e.id === n.stepId;
                    }),
                    i = t ? e.steps.indexOf(t) : 0,
                    o = 0;
                  o < e.steps.length;
                  o++
                )
                  i > o
                    ? ((e.steps[o].seenState = "advanced"),
                      (e.steps[o].seenReason = "continue"))
                    : ((e.steps[o].seenState = null),
                      (e.steps[o].seenReason = null));
                return e;
              }
            );
            return i;
          }
          function preparePreviewLastGuideStepSeen(e, t, n) {
            var i = findStoredPreviewConfig(e);
            if (!i) return n;
            var o = _.findWhere(t, { id: i.guideId });
            if (!o) return n;
            var r = o.launchMethod.indexOf("auto") > -1,
              a = i.stepId === o.steps[0].id;
            return a && !r
              ? {}
              : { guideId: i.guideId, guideStepId: i.stepId, state: "active" };
          }
          function sendPreviewModeFailureMessage(e, t) {
            var n = e.getElementById(pendoPreview);
            n &&
              n.contentWindow.postMessage(
                {
                  mutation: "preview/setGuideLoadError",
                  payload: { guideLoadError: t },
                },
                "*"
              );
          }
          function updatePreview(e, t, n) {
            var i = e.getElementById(pendoPreview);
            if (i && i.contentWindow) {
              if (!t || !t.length)
                return void sendPreviewModeFailureMessage(e, {
                  status: 404,
                  data: "Guide not found",
                });
              i.contentWindow.postMessage(
                {
                  mutation: "preview/setGuideLoaded",
                  payload: { guideLoaded: !0 },
                },
                "*"
              );
              var o = t[0],
                r = 0,
                a = o.steps.length,
                s = n || {};
              _.find(o.steps, function (e, t) {
                return s.guideStepId !== e.id
                  ? !1
                  : ("dismissed" === s.state || "active" === s.state
                      ? (r = t)
                      : "advanced" === s.state && s.destinationStepId
                      ? (r = _.indexOf(
                          o.steps,
                          _.find(o.steps, function (e) {
                            return e.id === s.destinationStepId;
                          })
                        ))
                      : "advanced" === s.state && t === a - 1 && (r = a),
                    !0);
              });
              var d = "dismissed" === s.state,
                u = r >= a - 1,
                l = d || u,
                c = u ? a - 1 : r,
                p = o.steps[c];
              i.contentWindow.postMessage(
                {
                  mutation: "preview/setHostname",
                  payload: { hostname: SERVER },
                },
                "*"
              ),
                i.contentWindow.postMessage(
                  {
                    mutation: "preview/setGuidePages",
                    payload: { guidePages: o.previewPages },
                  },
                  "*"
                ),
                i.contentWindow.postMessage(
                  {
                    mutation: "preview/setGuideProgress",
                    payload: {
                      guideName: o.name,
                      guideAttributes: JSON.stringify(o.attributes),
                      guideLaunchMethod: o.launchMethod,
                      guideActivationSelector:
                        DOMActivation.getActivationSelector(o),
                      isAdoptGuide: o.isTraining,
                      stepId: p && p.id,
                      currentStepIndex: c,
                      stepCount: a,
                      elementPathRule: p.elementPathRule,
                      elementContainsRulesList: p.elementContainsRulesList,
                      pageId: p.pageId,
                      completed: l,
                    },
                  },
                  "*"
                ),
                checkForGuidePreviewError(p, c, i);
            }
          }
          function adjustPreviewBarPosition(e) {
            var t = e.getElementById(pendoPreview);
            if (t) {
              var n = _.first(Sizzle('[id^="pendo-g-"]'));
              if (n) {
                var i = getComputedStyle_safe(n);
                if (i) {
                  var o = {
                    mutation: "preview/setIsPreviewBarTop",
                    payload: { isPreviewBarTop: !1 },
                  };
                  "0px" === i.top
                    ? ((t.style.top = "auto"),
                      (t.style.bottom = "0px"),
                      t.contentWindow.postMessage(o, "*"))
                    : ("0px" !== i.bottom && t.style.top) ||
                      ((t.style.top = "0px"),
                      (t.style.bottom = "auto"),
                      (o.payload.isPreviewBarTop = !0),
                      t.contentWindow.postMessage(o, "*"));
                }
              }
            }
          }
          function checkForGuidePreviewError(e, t, n) {
            if (e) {
              var i = [];
              if (0 === t) {
                var o = DOMActivation.getActivationSelector(e.getGuide());
                if (o) {
                  var r = _.first(pendo.Sizzle(o));
                  r
                    ? isElementVisible(r) ||
                      i.push("ACTIVATION:elementNotVisible")
                    : i.push("ACTIVATION:elementNotFound");
                }
              }
              if (
                (_.isFunction(e.canShowOnPage) &&
                  !e.canShowOnPage(pendo.getCurrentUrl()) &&
                  i.push("PAGE:pageMismatch"),
                e.elementPathRule)
              ) {
                var a = _.first(pendo.Sizzle(e.elementPathRule));
                a
                  ? isElementVisible(a)
                    ? e.elementContainsRulesList &&
                      !doesElementMatchContainsRules(
                        a,
                        e.elementContainsRulesList
                      ) &&
                      i.push("ELEMENT:elementContainsRulesDoNotMatch")
                    : i.push("ELEMENT:elementNotVisible")
                  : i.push("ELEMENT:elementNotFound");
              }
              n.contentWindow.postMessage(
                { mutation: "preview/setErrors", payload: { errors: i } },
                "*"
              );
            }
          }
          function exitPreviewMode() {
            pendoLocalStorage &&
              _.isFunction(pendoLocalStorage.removeItem) &&
              pendoLocalStorage.removeItem(pendoPreview),
              buffersClearAll(),
              dom("#" + pendoPreview).remove(),
              forceGuideReload(),
              window.close();
          }
          function parsePreviewToken(e) {
            try {
              return JSON.parse(atob(decodeURIComponent(e)));
            } catch (t) {}
          }
          function findUrlPreviewConfig(e) {
            var t = _.map(e.replace(/^\?/, "").split("&"), function (e) {
                return e.split("=");
              }),
              n = _.find(t, function (e) {
                return e[0] === pendoPreview;
              });
            return n ? parsePreviewToken(n[1]) : void 0;
          }
          function findStoredPreviewConfig(e) {
            try {
              var t = JSON.parse(e.getItem(pendoPreview));
              if (t.apiKey === pendo.apiKey) return t;
            } catch (n) {}
          }
          function previewGuideRequest(e) {
            return pendo
              .ajax({
                url:
                  e.origin +
                  e.guideUrl +
                  "?url=" +
                  encodeURIComponent(pendo.url.get()),
                withCredentials: !0,
              })
              .then(function (e) {
                var t = e.data.guide;
                return (
                  (t.previewPages = e.data.pages),
                  (pendo.guides = [e.data.guide]),
                  (pendo.guideWidget = {
                    enabled: !1,
                    data: { guideCssUrl: e.data.guideCssUrl },
                  }),
                  (pendo.guideCssUrl = e.data.guideCssUrl),
                  (pendo.normalizedUrl = e.data.normalizedUrl),
                  e
                );
              });
          }
          function previewGuideLoaderWrapper(e, t) {
            return {
              buildUrl: e.buildUrl,
              load: function (n, i) {
                var o = findStoredPreviewConfig(t);
                return o && o.guideUrl
                  ? previewGuideRequest(o).then(i)
                  : e.load(n, i);
              },
            };
          }
          function launchDesignerListener(e) {
            if (
              e &&
              e.data &&
              e.data.token &&
              e.data.type === pendoDesignerLaunchKey + "::launch"
            ) {
              var t = e.data.token,
                n = {
                  lookaside: t.baseUrl,
                  host: t.host,
                  target: t.target || "latest",
                };
              pendo.designerv2.launchInAppDesigner(n);
            }
          }
          function clearMode() {
            setMode(
              store.getters["frames/isFollower"]() ? PASSIVE_MODE : "default"
            );
          }
          function guideShowingProc() {
            var e = getActiveGuide();
            e &&
              (_.each(e.steps, function (t) {
                stepShowingProc(e.guide, t);
              }),
              e.guide.checkForHiddenGroupSteps());
          }
          function stepShowingProc(e, t) {
            if (
              !t.isLocked() &&
              !store.getters["frames/isShownInAnotherFrame"]()(t)
            ) {
              var n = t.element,
                i = t.targetElement,
                o = dom("." + GUIDE_CSS_NAME),
                r = isElementVisible(n),
                a = !0;
              if (
                (i &&
                  r &&
                  t.elementContainsRulesList &&
                  ((a = doesElementMatchContainsRules(
                    i,
                    t.elementContainsRulesList
                  )),
                  (r = a)),
                n && (r || o.hasClass("mouseover")))
              ) {
                if (("tooltip" == t.type && placeTooltip(t), t.domJson)) {
                  if ("tooltip" === t.attributes.calculatedType) {
                    var s = BuildingBlockGuides.findGuideContainerJSON(
                        t.domJson
                      ),
                      d = dom("#" + s.props.id);
                    pendo.BuildingBlocks.BuildingBlockTooltips.placeBBTooltip(
                      t,
                      d[0]
                    );
                  }
                  t.attributes.blockOutUI &&
                    t.attributes.blockOutUI.enabled &&
                    pendo.BuildingBlocks.BuildingBlockGuides.updateBackdrop(t);
                }
              } else {
                var u =
                  "tooltip" === t.type ||
                  "tooltip" === t.attributes.calculatedType;
                (u && wouldBeVisibleAfterAutoScroll(n) && a) || t.hide();
              }
            }
          }
          function resourceCenterProc(e) {
            if (e) {
              (e.skipResourceCenterHomeView = !1),
                (e.hasResourceCenterContent = !0),
                delete e.moduleIdToReplaceHomeViewWith;
              var t = !1,
                n = e.activeModule,
                i = get(n, "attributes.resourceCenter.integrationProvider");
              e.isNativeModuleActive =
                n &&
                BuildingBlockResourceCenter.isSupportedNativeIntegration(i);
              var o =
                e.attributes &&
                e.attributes.resourceCenter &&
                e.attributes.resourceCenter.moduleId &&
                "FullyCustomModule" === e.attributes.resourceCenter.moduleId;
              if (o) return (e.hasResourceCenterContent = !0), !0;
              var r = [],
                a = _.filter(e.modules, function (n) {
                  if (!n) return !1;
                  var i = n.attributes.resourceCenter,
                    o = i.moduleId;
                  if (
                    ("SandboxModule" === o || "IntegrationModule" === o) &&
                    n.hasResourceCenterContent
                  )
                    return !0;
                  var a = _.filter(n.guidesInModule, function (e) {
                      return e.shouldBeAddedToResourceCenter()
                        ? ((e.ineligibleForRC = !1), !0)
                        : ((e.ineligibleForRC = !0),
                          e.control && r.push(e),
                          !1);
                    }),
                    s = a.length;
                  if (
                    ((n.hasResourceCenterContent = !!s),
                    e.activeModule && n.id === e.activeModule.id)
                  ) {
                    var d = crc32(
                      _.map(a, function (e) {
                        var t = e.isAnnouncement() || e.isWhatsNew(),
                          n = t ? null : _.pluck(e.steps, "seenState");
                        return { id: e.id, seenState: n };
                      })
                    );
                    n.eligibleGuidesInModuleHash &&
                      d !== n.eligibleGuidesInModuleHash &&
                      (t = !0),
                      (n.eligibleGuidesInModuleHash = d);
                  }
                  return s;
                }),
                s = !1;
              if (!e.activeModule) {
                var d = crc32(
                  _.map(a, function (e) {
                    return { id: e.id };
                  })
                );
                e.eligibleModulesHash &&
                  e.eligibleModulesHash !== d &&
                  ((s = !0),
                  BuildingBlockResourceCenter.replaceResourceCenterContent(
                    e.id,
                    undefined,
                    !0
                  )),
                  (e.eligibleModulesHash = d);
              }
              var u = pendo.badgesShown[e.id];
              if (!a || !a.length) {
                var l = -1 !== e.launchMethod.indexOf("badge"),
                  c = -1 !== e.launchMethod.indexOf("dom");
                (e.hasResourceCenterContent = !1),
                  l
                    ? (e.isShown() && e.hide(),
                      u && u.hide(),
                      _.each(r, function (e) {
                        e.hasGuideBeenControlled() ||
                          e.steps[0].onControlGuide("control");
                      }),
                      (e.badgeHidden = !0),
                      delete e.activeModule)
                    : c &&
                      ((e.showEmptyState = !0),
                      (e.controlGuidesInAllModules = r));
              }
              if (
                (e.badgeHidden &&
                  e.hasResourceCenterContent &&
                  !e.isNativeModuleActive &&
                  (u && u.show(), (e.badgeHidden = !1)),
                e.isNativeModuleActive &&
                  (e.isShown() && e.hide(), u && u.hide()),
                1 === a.length)
              ) {
                (e.skipResourceCenterHomeView = !0),
                  (e.moduleIdToReplaceHomeViewWith = a[0].id);
                var p = !e.activeModule && s,
                  f = e.activeModule && e.activeModule.id !== a[0].id;
                (p || f || t) &&
                  BuildingBlockResourceCenter.replaceResourceCenterContent(
                    e.moduleIdToReplaceHomeViewWith,
                    undefined,
                    !0
                  );
              }
              if (a) {
                var g = _.find(a, function (e) {
                    return e.isContinuation(lastGuideStepSeen);
                  }),
                  h = get(g, ".attributes.doNotResume"),
                  v = get(g, "attributes.resourceCenter.integrationProvider"),
                  m =
                    BuildingBlockResourceCenter.isSupportedNativeIntegration(v);
                m &&
                  !h &&
                  e &&
                  ((e.continueToNativeModule = !0),
                  (g.continueToNativeModule = !0));
              }
              var b;
              e.activeModule &&
                ((b = _.find(a, function (t) {
                  return t.id === e.activeModule.id;
                })),
                b &&
                  t &&
                  BuildingBlockResourceCenter.replaceResourceCenterContent(
                    e.activeModule.id,
                    undefined,
                    !0
                  ),
                b ||
                  BuildingBlockResourceCenter.replaceResourceCenterContent(
                    e.id
                  )),
                "dom" === e.launchMethod &&
                  BuildingBlockResourceCenter.updateNotificationBubbles(),
                BuildingBlockResourceCenter.repositionResourceCenter();
            }
          }
          function createSingletonMessageHandler(e, t) {
            function n(e) {
              (!o || t(e.origin)) &&
                _.each(i, function (t) {
                  _.isFunction(t) && t(e);
                });
            }
            var i = [],
              o = !1;
            return {
              secure: function (e) {
                o = e;
              },
              addEventListener: function (t) {
                0 === i.length && e.addEventListener("message", n), i.push(t);
              },
              removeEventListener: function (t) {
                var o = i.indexOf(t);
                o >= 0 && i.splice(o, 1),
                  0 === i.length && e.removeEventListener("message", n);
              },
            };
          }
          function tryParseJson(e) {
            if (!_.isString(e)) return e;
            try {
              return JSON.parse(e);
            } catch (t) {
              return e;
            }
          }
          function TopFrameRelay(e, t, n) {
            this.init(e, t, n);
          }
          function createCrossFrameChannel(e) {
            return pendo.sniffer.addEventListener
              ? ConfigReader.get("preferBroadcastChannel") &&
                _.isFunction(window.BroadcastChannel)
                ? (e.commit("frames/setChannelType", "BroadcastChannel"),
                  new BroadcastChannel("pendo"))
                : (e.commit("frames/setChannelType", "TopFrameRelay"),
                  new TopFrameRelay(e, window, SingletonMessageHandler))
              : {
                  addEventListener: _.noop,
                  postMessage: _.noop,
                  close: _.noop,
                };
          }
          function flux(e) {
            function t(e, t) {
              var n = p[e];
              if (!n) throw new Error("mutation " + e + " not found");
              n(t),
                _.each(l, function (t) {
                  t(e, u);
                });
            }
            function n(e, t) {
              var n = f[e];
              if (!n) throw new Error("action " + e + " not found");
              return n(t);
            }
            function i(e) {
              return _.isFunction(e) ? (l.push(e), o(e)) : _.noop;
            }
            function o(e) {
              return function () {
                var t = l.indexOf(e);
                t >= 0 && l.splice(t, 1);
              };
            }
            function r(e) {
              var t = e.state || {};
              return (
                _.each(e.modules, function (e, n) {
                  t[n] = r(e);
                }),
                t
              );
            }
            function a(e, t) {
              var n = {};
              return (
                _.each(e.mutations, function (i, o) {
                  n[t + o] = _.partial(i, e.state);
                }),
                _.each(e.modules, function (e, i) {
                  _.extend(n, a(e, t + i + "/"));
                }),
                n
              );
            }
            function s(e, t, n) {
              function i(e, i, o) {
                var r = o && o.root ? e : n + e;
                t.commit(r, i);
              }
              function o(e, i, o) {
                var r = o && o.root ? e : n + e;
                return t.dispatch(r, i);
              }
              function r(e) {
                return _.reduce(
                  e,
                  function (e, t, i) {
                    return 0 !== i.indexOf(n)
                      ? e
                      : ((e[i.replace(n, "")] = t), e);
                  },
                  {}
                );
              }
              var a = {},
                d = {
                  state: e.state,
                  rootState: t.state,
                  commit: i,
                  dispatch: o,
                  getters: r(t.getters),
                  rootGetters: t.getters,
                };
              return (
                _.each(e.actions, function (e, t) {
                  a[n + t] = _.partial(e, d);
                }),
                _.each(e.modules, function (e, i) {
                  _.extend(a, s(e, t, n + i + "/"));
                }),
                a
              );
            }
            function d(e, t, n, i) {
              var o = {},
                r = {};
              return (
                _.each(e.getters, function (e, a) {
                  r[a] = o[i + a] = function () {
                    return e(n, r, t.state, t.getters);
                  };
                }),
                _.each(e.modules, function (e, r) {
                  _.extend(o, d(e, t, n[r], i + r + "/"));
                }),
                o
              );
            }
            var u = r(e),
              l = [],
              c = { state: u, commit: t, dispatch: n, subscribe: i };
            c.getters = d(e, c, c.state, "");
            var p = a(e, ""),
              f = s(e, c, "");
            return c;
          }
          function updateMasterGuideList(e) {
            var t = _.indexBy(
                _.filter(getActiveGuides(), function (e) {
                  return !e.isFrameProxy;
                }),
                "id"
              ),
              n = _.chain(e.frames)
                .filter(function (t) {
                  return t.id !== e.frameId;
                })
                .map(function (e) {
                  return _.toArray(e.guides);
                })
                .flatten(!0)
                .unique("id")
                .filter(function (e) {
                  return !t[e.id];
                })
                .map(function (e) {
                  return _.extend(JSON.parse(JSON.stringify(e)), {
                    isFrameProxy: !0,
                  });
                })
                .map(GuideFactory)
                .value(),
              i = _.toArray(t).concat(n);
            sortGuidesByPriority(i),
              initializeResourceCenter(i),
              setActiveGuides(i),
              e.guidesLoaded &&
                0 === _.size(e.frames[e.frameId].guides) &&
                startGuides();
          }
          function guidePassiveRenderer(e) {
            if (
              ((e = e.filter(function (e) {
                return !e.isFrameProxy;
              })),
              e.length)
            ) {
              placeBadgesProc(e),
                DOMActivation.update(e),
                isGuideShown() && guideShowingProc(),
                hideLauncher();
              var t = getLauncherGuideList(e),
                n = computeLauncherHash(t);
              n !== lastLauncherHash &&
                store.dispatch("frames/changeGuideList", e),
                (lastLauncherHash = n),
                store.dispatch("frames/updateFrameVisibility");
            }
          }
          function connectChannelToStore(e, t) {
            function n(e) {
              try {
                if (!e.action) return;
                if (e.apiKey !== pendo.apiKey) return;
                if (i) return;
                t.dispatch(e.action, e);
              } catch (n) {
                writeException(n, "ERROR in cross frame channel");
              }
            }
            var i = !1;
            return (
              e.addEventListener("message", function (e) {
                n(e.data);
              }),
              {
                postMessage: function (t) {
                  if (!i) {
                    var o = _.extend({ apiKey: pendo.apiKey }, t);
                    e.postMessage(o),
                      setTimeout(function () {
                        n(o);
                      }, 0);
                  }
                },
                close: function () {
                  (i = !0), _.isFunction(e.close) && e.close();
                },
              }
            );
          }
          function createStore() {
            return flux({
              modules: { frames: FramesModule, healthCheck: HealthCheckModule },
            });
          }
          function Badge(e, t) {
            var n,
              i = getElementForBadge(t);
            if ("building-block" === e.attributes.type) {
              var o = pendo.buildNodeFromJSON(this.domJson)[0];
              (n = o.parentNode.removeChild(o)),
                -1 === n.className.indexOf("_pendo-badge_") &&
                  (n.className += " _pendo-badge_"),
                (this.isP2Badge = !0);
            } else {
              (n = document.createElement("img")),
                (n.src = replaceWithContentHost(this.imageUrl)),
                (n.className = "_pendo-badge " + BADGE_CSS_NAME);
              var r = this.width || 13,
                a = this.height || 13,
                s = "width:" + r + "px;height:" + a + "px;";
              setStyle(n, s);
            }
            return (
              (n.id = "_pendo-badge_" + t.id),
              (this.activate = function () {
                var e = _.isFunction(t.getGuide) && t.getGuide(),
                  n = e && e.attributes && e.attributes.resourceCenter;
                if (
                  !e.isShown() ||
                  store.getters["frames/isShownInAnotherFrame"]()(t)
                )
                  showGuide(t, "badge");
                else if (n)
                  t.eventRouter.eventable.trigger("pendoEvent", {
                    step: t,
                    action: "dismissGuide",
                  });
                else {
                  var i = _.find(e.steps, function (e) {
                    return e.isShown();
                  });
                  pendo.onGuideDismissed(i);
                }
              }),
              (this.show = function () {}),
              (this.hide = function () {
                n && n.parentNode && n.parentNode.removeChild(n);
              }),
              (this.step = _.constant(t)),
              (this.target = _.constant(i)),
              (this.element = _.constant(n)),
              this
            );
          }
          function InlinePosition() {
            return (
              ("inline" === this.position ||
                "inline-right" === this.position ||
                "inline-left" === this.position) &&
                this.before("show", function () {
                  var e = this.target(),
                    t = this.element();
                  if (
                    (this.isP2Badge &&
                      setStyle(
                        t,
                        "display:inline-block;vertical-align:text-bottom;"
                      ),
                    this.css && setStyle(t, this.css),
                    e && e.tagName)
                  ) {
                    var n = e.tagName.toLowerCase();
                    if (/br|input|img|select|textarea/.test(n)) {
                      if (t.parentNode === e.parentNode) return;
                      e.parentNode.insertBefore(t, e.nextSibling);
                    } else
                      t.parentNode !== e &&
                        ("inline" === this.position ||
                        "inline-right" === this.position
                          ? e.appendChild(t)
                          : "inline-left" === this.position && e.prepend(t));
                  }
                }),
              this
            );
          }
          function AbsolutePosition() {
            return (
              (this.position &&
                "top-right" !== this.position &&
                "top-left" !== this.position) ||
                this.before("show", function () {
                  var e = this.element(),
                    t = getOffsetPosition(this.target()),
                    n = 0,
                    i = 0,
                    o = 0;
                  this.offsets &&
                    ((n = this.offsets.top || 0),
                    (i = this.offsets.right || 0),
                    (o = this.offsets.left || 0));
                  var r =
                    "position:" +
                    (t.fixed ? "fixed" : "absolute") +
                    ";top:" +
                    (t.top + n) +
                    "px;";
                  switch (this.position) {
                    case "top-right":
                      r += "left:" + (t.left + t.width - i) + "px";
                      break;
                    case "top-left":
                      r += "left:" + (t.left + o) + "px";
                  }
                  setStyle(e, r),
                    e.parentNode || getGuideAttachPoint().appendChild(e);
                }),
              this
            );
          }
          function ClickActivation() {
            var e = this,
              t = e.element(),
              n = !1,
              i = function (t) {
                e.activate(), stopEvent(t);
              };
            return (
              e.after("show", function () {
                n || (attachEvent(t, "click", i), (n = !0));
              }),
              e.after("hide", function () {
                detachEvent(t, "click", i), (n = !1);
              }),
              e
            );
          }
          function HoverActivation() {
            var e = this,
              t = e.element(),
              n = e.step(),
              i = !1;
            if ("yes" === e.useHover || e.showGuideOnBadgeHover) {
              var o = function (e) {
                  for (; e; ) {
                    if (
                      /_pendo-guide_|_pendo-guide-tt_|_pendo-backdrop_|_pendo-badge_/.test(
                        e.className
                      )
                    )
                      return !0;
                    if (/pendo-guide-container/.test(e.id)) return !0;
                    e = e.parentNode;
                  }
                  return !1;
                },
                r = _.throttle(
                  function (e) {
                    getTarget(e) === t || o(getTarget(e)) || s();
                  },
                  50,
                  { trailing: !1 }
                ),
                a = function (e) {
                  n.isShown() || showGuide(n, "badge"),
                    attachEvent(document, "mousemove", r),
                    stopEvent(e);
                },
                s = function (e) {
                  detachEvent(document, "mousemove", r),
                    isPreviewing() || pendo.onGuideDismissed(n);
                };
              e.after("show", function () {
                i || (attachEvent(t, "mouseover", a), (i = !0));
              }),
                e.after("hide", function () {
                  detachEvent(t, "mouseover", a),
                    detachEvent(document, "mousemove", r),
                    (i = !1);
                });
            }
            return e;
          }
          function ShowOnHover() {
            var e = this,
              t = e.element(),
              n = e.target(),
              i = !1,
              o = e.showBadgeOnlyOnElementHover || /hover/.test(e.showOnEvent);
            if (o && !isPreviewing()) {
              var r =
                  "inline" === e.position
                    ? "visibility:visible;"
                    : "display:inline;",
                a =
                  "inline" === e.position
                    ? "visibility:hidden;"
                    : "display:none;",
                s = function (e, i) {
                  var o = getClientRect(n),
                    r = getClientRect(t),
                    a = {
                      left: Math.min(o.left, r.left),
                      top: Math.min(o.top, r.top),
                      right: Math.max(o.right, r.right),
                      bottom: Math.max(o.bottom, r.bottom),
                    },
                    s = i + document.documentElement.scrollTop;
                  return (
                    e >= a.left && e <= a.right && s >= a.top && s <= a.bottom
                  );
                },
                d = _.throttle(
                  function (e) {
                    getTarget(e) === n ||
                      getTarget(e) === t ||
                      _hasClass(t, "triggered") ||
                      s(e.clientX, e.clientY) ||
                      l();
                  },
                  50,
                  { trailing: !1 }
                ),
                u = function () {
                  setStyle(t, r), attachEvent(document, "mousemove", d);
                },
                l = function () {
                  detachEvent(document, "mousemove", d), setStyle(t, a);
                };
              e.after("show", function () {
                i || (attachEvent(n, "mouseover", u), (i = !0), l());
              }),
                e.after("hide", function () {
                  i && (detachEvent(n, "mouseover", u), (i = !1)), l();
                });
            }
            return e;
          }
          function scrollToTooltip(e, t, n) {
            var i = getOffsetPosition(e),
              o = getOffsetPosition(t),
              r = (function (e, t) {
                var n = Math.min(e.top, t.top),
                  i = Math.min(e.left, t.left),
                  o = Math.max(e.top + e.height, t.top + t.height),
                  r = Math.max(e.left + e.width, t.left + t.width);
                return {
                  height: Math.abs(o - n),
                  width: Math.abs(r - i),
                  top: n,
                  left: i,
                };
              })(i, o);
            if (_isInViewport(r) === !1 && !o.fixed) {
              var a,
                s,
                d = getScreenDimensions();
              switch (n) {
                case "top":
                  (a = r.top), (s = r.left + r.width - d.width);
                  break;
                case "bottom":
                  (a = r.top + r.height - d.height),
                    (s = r.left + r.width - d.width);
                  break;
                default:
                  (a = r.top + r.height - d.height),
                    (s = r.left + r.width - d.width);
              }
              (a = 0 > a ? 0 : a), (s = 0 > s ? 0 : s), window.scrollTo(s, a);
            }
          }
          function computeBlockOutOverlayPositions(e, t, n) {
            var i = {},
              o = t.top - e.top,
              r = t.left - e.left;
            (i.top = o - n),
              (i.left = r - n),
              (i.height = t.height + 2 * n),
              (i.width = t.width + 2 * n);
            var a = { left: 0, top: 0 };
            return (
              positionFixedActsLikePositionAbsolute() &&
                ((a = bodyOffset()),
                (i.left += documentScrollLeft()),
                (i.top += documentScrollTop())),
              (i.bottom = i.top + i.height),
              (i.right = i.left + i.width),
              {
                north: {
                  height: Math.max(i.top, 0),
                  left: -a.left,
                  top: -a.top,
                  right: 0,
                },
                east: {
                  top: i.top - a.top,
                  bottom: 0,
                  right: 0,
                  left: i.right - a.left,
                },
                south: {
                  top: i.bottom - a.top,
                  width: Math.max(i.right, 0),
                  bottom: 0,
                  left: -a.left,
                },
                west: {
                  top: i.top - a.top,
                  height: Math.max(i.height, 0),
                  left: -a.left,
                  width: Math.max(i.left, 0),
                },
              }
            );
          }
          function computeBlockOutBoundingBox(e) {
            var t = _.reduce(
              e,
              function (e, t) {
                if (!isElementVisible(t)) return e;
                var n = getClientRect(t);
                return (
                  (e.fixed = e.fixed && n.fixed),
                  _.each(
                    [
                      ["top", isLessThan],
                      ["right", isGreaterThan],
                      ["bottom", isGreaterThan],
                      ["left", isLessThan],
                    ],
                    function (t) {
                      var i = t[0],
                        o = t[1];
                      (!e[i] || o(n[i], e[i])) && (e[i] = n[i]);
                    }
                  ),
                  e
                );
              },
              { fixed: !0 }
            );
            (t.height = t.bottom - t.top), (t.width = t.right - t.left);
            var n = bodyOffset();
            return (
              t.fixed ||
                ((t.left += n.left),
                (t.right += n.left),
                (t.top += n.top),
                (t.bottom += n.top)),
              (t.fixed = !!t.fixed),
              t
            );
          }
          function wouldBeVisibleAfterAutoScroll(e) {
            var t,
              n,
              i,
              o,
              r,
              a = /(auto|scroll)/,
              s = /(auto|scroll|hidden)/,
              d = getBody(),
              u = getClientRect(e),
              l = getScrollParent(e, s);
            if (!isElementVisibleInBody(e)) return !1;
            for (; l && l !== d; ) {
              if (
                ((t = getClientRect(l)),
                (r = getOverflowDirection(l, a)),
                r !== OverflowDirection.NONE &&
                  ((n = 0),
                  (i = 0),
                  (r === OverflowDirection.Y || r === OverflowDirection.BOTH) &&
                    (u.bottom > t.bottom &&
                      ((n += u.bottom - t.bottom),
                      (u.top -= n),
                      (u.bottom -= n)),
                    u.top < t.top &&
                      ((o = t.top - u.top),
                      (n -= o),
                      (u.top += o),
                      (u.bottom += o))),
                  (r === OverflowDirection.X || r === OverflowDirection.BOTH) &&
                    (u.right > t.right &&
                      ((i += u.right - t.right), (u.left -= i), (u.right -= i)),
                    u.left < t.left &&
                      ((o = t.left - u.left),
                      (i -= o),
                      (u.left += o),
                      (u.right += o)))),
                !isVisibleInScrollParent(u, l, s))
              )
                return !1;
              l = getScrollParent(l, s);
            }
            return !0;
          }
          function LauncherSearch() {
            function e(e) {
              return i.text
                ? (e || "").replace(
                    new RegExp(i.text, "gi"),
                    "<strong>$&</strong>"
                  )
                : e;
            }
            function t() {
              dom(SEARCHBOX_CSS_SELECTOR).each(function () {
                this.value = "";
              });
            }
            var n = this,
              i = { text: "", highlight: e, clear: t };
            return (
              n.data &&
                n.data.enableSearch &&
                n.data.enableSearch &&
                ((n.data.search = i),
                pendo.disableGuideCenterContentSearch ||
                  n.before("update", prefetchGuideContentForSearch),
                n.before("update", function () {
                  i.text = getLauncherSearchText().join(" ");
                  var e = dom("._pendo-launcher_");
                  i.text
                    ? e.addClass(LAUNCHER_SEARCHING_CLASS)
                    : e.removeClass(LAUNCHER_SEARCHING_CLASS);
                })),
              n
            );
          }
          function isSearchEnabled() {
            if (!pendo.guideWidget) return !1;
            var e = pendo.guideWidget.data;
            return !!e && !!e.enableSearch;
          }
          function launcherHasActiveSearch() {
            return getLauncherSearchText().length > 0;
          }
          function getLauncherSearchText() {
            if (!isSearchEnabled()) return [];
            var e = dom(SEARCHBOX_CSS_SELECTOR)[0];
            if (!e) return [];
            var t = e.value;
            return t.length > 0
              ? ((t = trim.call(t)), [].concat(_.compact(t.split(" "))))
              : [];
          }
          function prefetchGuideContentForSearch(e) {
            return ConfigReader.get("disablePrefetch")
              ? void 0
              : q.all(
                  _.map(e, function (e) {
                    return e.fetchContent();
                  })
                );
          }
          function applySearch(e) {
            var t = getLauncherSearchText();
            if (0 === t.length) return e;
            var n = _.map(t, _.partial(doSearch, e));
            return (n = _.union.apply(_, n));
          }
          function doSearch(e, t) {
            function n(e) {
              return e.searchFor(t);
            }
            function i(e) {
              var t = ["tag", "name", "content"];
              return _.indexOf(t, e.field);
            }
            return (
              log("doing search on " + t, "launcher", "search", "guides"),
              (e = e || getActiveGuides()),
              t && 0 !== t.length
                ? _.chain(e)
                    .filter(isLauncher)
                    .map(n)
                    .compact()
                    .sortBy(i)
                    .pluck("guide")
                    .value()
                : e
            );
          }
          function getLauncherGuideList(e) {
            var t = _.filter(e || getActiveGuides(), isLauncher);
            return applySearch(t);
          }
          function computeLauncherHash(e) {
            return crc32(
              _.map(e, function (e) {
                var t = e.isWhatsNew() ? [] : _.pluck(e.steps, "seenState");
                return { id: e.id, seenState: t };
              })
            );
          }
          function LauncherBadge(e) {
            function t(e) {
              var t = e.position || "bottom-right",
                n = document.createElement("img");
              (s.element = n),
                dom(n)
                  .addClass("_pendo-launcher-badge_")
                  .addClass("_pendo-launcher-badge-" + t + "_"),
                e.launcherBadgeUrl &&
                  (n.src = replaceWithContentHost(e.launcherBadgeUrl)),
                (n.onerror = function (t) {
                  pendo.log(
                    "[Agent] Error! Unable to load guide center image " +
                      e.launcherBadgeUrl
                  ),
                    writeException(
                      { imgSrc: e.launcherBadgeUrl },
                      "ERROR in when attempting to render guide center badge image"
                    );
                }),
                isBrowserInQuirksmode() &&
                  (attachEvent(n, "mouseover", function (e) {
                    dom(n).addClass("_pendo-launcher-badge-active_");
                  }),
                  attachEvent(n, "mouseout", function (e) {
                    dom(n).removeClass("_pendo-launcher-badge-active_");
                  }),
                  dom(n).css({ position: "absolute" })),
                getGuideAttachPoint().appendChild(n);
            }
            function n() {
              "badge" === d && dom(s.element).css("display: ;");
            }
            function i() {
              dom(s.element).css("display: none;");
            }
            function o() {
              var e = s.element;
              if (e && /^img$/i.test(e.nodeName)) {
                var t = dom("<div>")
                  .addClass(e.className)
                  .append(e)
                  .appendTo(getGuideAttachPoint());
                (e.className = ""), (s.element = t[0]);
              }
            }
            function r() {
              dom.removeNode(s.element);
            }
            function a(e) {
              e
                ? dom(s.element).addClass(launcherActiveClass)
                : dom(s.element).removeClass(launcherActiveClass);
            }
            var s = this,
              d = e.launchType ? e.launchType : "badge";
            _.extend(s, {
              show: n,
              hide: i,
              wrap: o,
              dispose: r,
              setActive: a,
            }),
              t(e);
          }
          function LauncherElement(e) {
            function t() {
              return dom(n())[0];
            }
            function n() {
              return "element" === e.launchType && e.launchElement
                ? e.launchElement
                : "._pendo-launcher-badge_";
            }
            function i(e) {
              attachEvent(document, "click", o);
            }
            function o(e) {
              var t = getTarget(e),
                i = n(),
                o = dom(t).closest(i);
              o.length &&
                (isLauncherVisible()
                  ? agentStorage.write("launcher-closed", "yes", 864e6)
                  : pendo.guideWidget.position(t),
                toggleLauncher());
            }
            function r() {
              detachEvent(document, "click", o),
                e && e.whatsnew && e.whatsnew.enabled && removeCountBadge();
            }
            var a = this;
            (pendo.guideWidget.removeCountBadge = function () {
              dom("._pendo-launcher-whatsnew-count_").remove();
            }),
              e &&
                e.elementMatch &&
                (e.launchElement = e.elementMatch.selection),
              _.extend(a, { getLauncherTarget: t, dispose: r }),
              i(e);
          }
          function Launcher() {
            var e,
              t = "bottom-right",
              n = "bottom-left",
              i = "top-left",
              o = "top-right";
            return (
              (this.update = function (t, n) {
                var i;
                i = n ? t : getLauncherGuideList(t);
                var o = computeLauncherHash(i) + crc32(getLauncherSearchText());
                return (
                  o !== e && ((e = o), this.updateLauncherContent(i)),
                  showHideLauncher(),
                  i.length > 0
                );
              }),
              (this.updateLauncherContent = updateLauncherContent),
              (this.guideStatus = function (e) {
                return e.isComplete()
                  ? "complete"
                  : e.isInProgress()
                  ? "in-progress"
                  : "not-started";
              }),
              (this.render = function () {
                var e = this.data || {};
                launcherBadge = new LauncherBadge(e);
                var t = e.height || LAUNCHER_DEFAULT_HEIGHT;
                e.enableSearch && (t += isBrowserInQuirksmode() ? 50 : 39),
                  this && !this.hidePoweredBy && (t += 40),
                  e.addHeight && (t += e.addHeight),
                  (this.height = t);
                var n = e.width || LAUNCHER_DEFAULT_WIDTH;
                e.addWidth && (n += e.addWidth), (this.width = n);
                var i = dom("<div>").addClass("_pendo-launcher_");
                launcherTooltipDiv = i[0];
                var o = getOffsetPosition(launcherBadge.element),
                  r = getTooltipDimensions(o, t, n);
                i.css({ width: n, height: t });
                var a = pendo.TOOLTIP_ARROW_SIZE,
                  s = dom("<div/>")
                    .addClass("_pendo-guide-container_ " + r.arrowPosition)
                    .addClass("_pendo-guide-container-" + r.arrowPosition + "_")
                    .css({
                      top: a,
                      left: a,
                      width: n - 2 * a,
                      height: t - 2 * a,
                    })
                    .appendTo(i),
                  d = getLauncherContext(),
                  u = replaceWithContentHost(
                    replaceInlineStyles(this.template(d))
                  ),
                  l = dom("<div/>")
                    .addClass("_pendo-guide-content_")
                    .html(u)
                    .appendTo(s);
                if (
                  (e.addUISection && e.addUISection(i[0]),
                  pendo._addCloseButton(i[0], function () {
                    toggleLauncher(),
                      agentStorage.write("launcher-closed", "yes", 288e5);
                  }),
                  l.on("click", function (e) {
                    var t = dom(getTarget(e)).closest("._pendo-launcher-item_");
                    if (t && t.length) {
                      var n = /^launcher-(.+)$/.exec(trim.call(t.attr("id"))),
                        i = n && n[1],
                        o = findGuideById(i);
                      o &&
                        !o.isWhatsNew() &&
                        (showGuide(o.steps[0], "launcher"),
                        toggleLauncher(),
                        stopEvent(e));
                    }
                  }),
                  isBrowserInQuirksmode() &&
                    (dom("._pendo-launcher-header_", i).css({
                      padding: "10px",
                      "margin-right": "10px",
                      "margin-left": "10px",
                    }),
                    dom("._pendo-launcher-footer_", i).css({
                      "border-top": "1px solid #bbb",
                    }),
                    i.css({ position: "absolute" })),
                  i.find("[pendo-style]").each(function () {
                    var e = this.getAttribute("pendo-style");
                    dom(this).css(e);
                  }),
                  i.appendTo(getGuideAttachPoint()),
                  _.isFunction(this.script) && this.script(this),
                  e.autoHeight && e.autoHeight.enabled && !isOldIE(9, 6))
                ) {
                  var c = e.autoHeight.offset || 100;
                  i.css({
                    height: "calc(100% - " + c + "px)",
                    maxHeight: e.height,
                    minHeight: e.height / 2,
                  }),
                    dom("._pendo-guide-container_." + r.arrowPosition).css({
                      maxHeight: e.height - 30,
                      minHeight: e.height / 2 - 30,
                      height: "calc(100% - 30px)",
                    });
                }
              }),
              (this.position = function (e) {
                if (e) {
                  var r = this.data,
                    a = getOffsetPosition(e),
                    s = getTooltipDimensions(a, this.height, this.width),
                    d = dom(launcherTooltipDiv),
                    u = r.launchType ? r.launchType : "badge";
                  if ("badge" === u) {
                    var l = r.position,
                      c = [t, n, i, o];
                    _.indexOf(c, r.position) < 0 && (l = t),
                      _.each(c, function (e) {
                        d.removeClass("_pendo-launcher-" + e + "_");
                      }),
                      d.addClass("_pendo-launcher-" + l + "_"),
                      (s.arrow = s.arrow || {}),
                      (s.arrowPosition = _.contains([t, n], l)
                        ? "bottom"
                        : "top"),
                      (s.arrow.hbias = _.contains([n, i], l)
                        ? "left"
                        : "right"),
                      (s.arrow.floating = !1);
                  } else
                    "element" === u &&
                      d.css({
                        top: s.top,
                        left: s.left,
                        height: s.height,
                        width: s.width,
                        position: a.fixed ? "fixed" : "absolute",
                      });
                  dom(
                    "._pendo-guide-arrow_,._pendo-guide-arrow-border_",
                    d
                  ).remove(),
                    buildArrowDimensions(s, a, { width: 1 / 0, height: 1 / 0 }),
                    buildAndAppendArrow(d[0], s),
                    d
                      .find("._pendo-guide-container_")
                      .removeClass("top left bottom right")
                      .addClass(s.arrowPosition);
                }
              }),
              (this.toggle = toggleLauncher),
              this
            );
          }
          function Onboarding() {
            var e = this;
            if (e.data && e.data.onboarding) {
              var t = (e.onboarding = e.onboarding || {});
              e.before("update", function (n) {
                var i = _.filter(n, isOB),
                  o = _.filter(i, function (t) {
                    return "complete" == e.guideStatus(t);
                  }),
                  r = (t.total = i.length);
                t.percentComplete =
                  r > 0 ? Math.round((o.length / r) * 100) : 0;
                var a = dom("._pendo-launcher_,._pendo-launcher-badge_");
                r
                  ? (a.addClass("onboarding"),
                    a.addClass("_pendo-launcher-onboarding_"))
                  : (a.removeClass("onboarding"),
                    a.removeClass("_pendo-launcher-onboarding_"));
              }),
                (e.getOnboardingState = function (e) {
                  return e.isComplete()
                    ? "complete"
                    : e.isInProgress()
                    ? "in-progress"
                    : e.isNotStarted()
                    ? "not-started"
                    : null;
                });
            }
            return e;
          }
          function WhatsNewList() {
            function e(e, i) {
              var o = t(e, i);
              return 0 === o ? n(e, i) : o;
            }
            function t(e, t) {
              var n = e.showsAfter || e.publishedAt || 0,
                i = t.showsAfter || t.publishedAt || 0;
              return i - n;
            }
            function n(e, t) {
              var n = e.name.toLowerCase(),
                i = t.name.toLowerCase();
              return n > i ? 1 : i > n ? -1 : 0;
            }
            var i = this,
              o = dom("<div>").addClass("_pendo-launcher-whatsnew-count_");
            return (
              i.data &&
                i.data.whatsnew &&
                i.data.whatsnew.enabled &&
                (i.before("updateLauncherContent", function (t) {
                  var n = _.filter(t, function (e) {
                    return e.isWhatsNew();
                  });
                  n.sort(e),
                    (i.data.whatsnew.total = n.length),
                    (i.data.whatsnew.guides = n);
                }),
                i.after("update", function (e) {
                  var t = i.data.whatsnew.guides;
                  _.each(t, function (e) {
                    e.show();
                  }),
                    _.find(t, function (e) {
                      return e.isReady() ? void e.addToLauncher() : !0;
                    });
                  var n = _.filter(t, function (e) {
                    return "active" !== e.steps[0].seenState;
                  }).length;
                  n !== i.data.whatsnew.unseenCount &&
                    (o.html(n).css({ display: n ? "" : "none" }),
                    (i.data.whatsnew.unseenCount = n),
                    dom("span._pendo-launcher-whatsnew-count_").text(
                      i.data.whatsnew.unseenCount
                    ));
                }),
                i.after("render", function () {
                  isLauncherOnElement()
                    ? o.appendTo(this.data.launchElement)
                    : (launcherBadge.wrap(), o.appendTo(launcherBadge.element));
                })),
              i
            );
          }
          function replaceInlineStyles(e) {
            return (
              _.isString(e) &&
                (e = e.replace(/\s+(style)=/gi, " pendo-style=")),
              e
            );
          }
          function upgradeLauncher(e, t) {
            var n = e && e.data,
              i = _.find(t, function (e) {
                var t = _.first(e.steps);
                return t && "launcher" === t.type;
              });
            if (i && n) {
              var o = _.first(i.steps);
              (n.id = o.guideId + o.id),
                _.extend(
                  n,
                  _.pick(o, "contentUrl", "contentUrlCss", "contentUrlJs"),
                  o.attributes
                );
            }
            return e;
          }
          function loadLauncherContent(e) {
            var t = (e && e.data) || {};
            return getPendoConfigValue("preventCodeInjection") === !0
              ? q.resolve()
              : t.contentUrlJs || t.contentUrl
              ? ContentVerifier.verify(t)
                  .then(function () {
                    return ContentLoader.load(t);
                  })
                  .then(function (n) {
                    return (t.template = n.content), _.extend(e, n);
                  })
              : q.resolve();
          }
          function fixContentHostUrl(e, t) {
            var n = getOption("contentHost");
            return n
              ? ((e = e
                  .replace(/^pendo-static-\d+\.storage\.googleapis\.com$/, n)
                  .replace(/^pendo-\w+-static\.storage\.googleapis\.com$/, n)
                  .replace(/^cdn\.pendo\.io$/, n)),
                (e = e.replace(/^https?:/, "").replace(/^\/\//, "")),
                /\./.test(e) || /^localhost/.test(e)
                  ? e
                  : /^\//.test(e)
                  ? t.host + e
                  : e)
              : e;
          }
          function createLauncher(e, t) {
            if (!isPreventLauncher) {
              e.contentHostUrl &&
                (e.contentHostUrl = fixContentHostUrl(
                  e.contentHostUrl,
                  location
                )),
                (launcherElement = new LauncherElement(e));
              var n = Launcher.create(pendo.guideWidget);
              return (
                _.isFunction(n.template) ||
                  (n.template = e.template
                    ? _.template(e.template)
                    : defaultLauncherTemplate),
                n.render(),
                n.position(launcherElement.getLauncherTarget()),
                t && n.toggle(),
                n
              );
            }
          }
          function updateLauncherContent(e) {
            var t = pendo.guideWidget,
              n = t.template || defaultLauncherTemplate,
              i = getLauncherContext(e),
              o = dom("<div>").html(replaceInlineStyles(n(i))),
              r = o.find("._pendo-launcher-guide-listing_"),
              a = o.find("._pendo-launcher-footer_").html(),
              s = o.find("._pendo-launcher-search-results_").html();
            dom("._pendo-launcher_ ._pendo-launcher-guide-listing_").each(
              function (e, t) {
                dom(e).html(r.eq(t).html());
              }
            ),
              dom("._pendo-launcher_ ._pendo-launcher-footer_").html(a),
              dom("._pendo-launcher_ ._pendo-launcher-search-results_").html(s);
          }
          function removeCountBadge() {
            dom("._pendo-launcher-whatsnew-count_").remove();
          }
          function base32Encode(e) {
            for (
              var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                n = e.length,
                i = 0,
                o = 0,
                r = "",
                a = 0;
              n > a;
              a++
            )
              for (o = (o << 8) | e[a], i += 8; i >= 5; )
                (r += t[(o >>> (i - 5)) & 31]), (i -= 5);
            return i > 0 && (r += t[(o << (5 - i)) & 31]), r;
          }
          function deprecateFn(e, t, n) {
            return function () {
              return (
                memoizedWarnDep(t, n), (e || _.noop).apply(null, arguments)
              );
            };
          }
          function isDebuggingEnabled(e) {
            e = e || !1;
            var t = "true" === agentStorage.read("debug-enabled", !0);
            return e ? t : t ? "Yes" : "No";
          }
          function startDebuggingModuleIfEnabled() {
            isDebuggingEnabled(!0) &&
              (addDebuggingFunctions(),
              detectMaster() ||
                pendo.loadResource(
                  getAssetHost() + "/debugger/pendo-client-debugger.js",
                  function () {
                    log("Debug module loaded");
                  }
                ));
          }
          function addDebuggingFunctions() {
            pendo.debugging = debugging;
          }
          function enableDebugging(e) {
            return isDebuggingEnabled(!0)
              ? e
                ? debugging
                : "debugging already enabled"
              : (agentStorage.write("debug-enabled", "true", null, !0),
                startDebuggingModuleIfEnabled(),
                e ? debugging : "debugging enabled");
          }
          function disableDebugging() {
            return isDebuggingEnabled(!0)
              ? (agentStorage.write("debug-enabled", "false", null, !0),
                (pendo.debugging = null),
                delete pendo.debugging,
                "debugging disabled")
              : "debugging already disabled";
          }
          function debug(e) {
            log(e, "debug");
          }
          function patchJSONstringify() {
            var e = JSON.stringify;
            JSON.stringify = function (t, n, i) {
              var o = Array.prototype.toJSON;
              delete Array.prototype.toJSON;
              var r = e(t, n, i);
              return (Array.prototype.toJSON = o), r;
            };
          }
          function isPrototypeOlderThan(e) {
            return (
              "undefined" != typeof Prototype &&
              parseFloat(Prototype.Version.substr(0, 3)) < e &&
              "undefined" != typeof Array.prototype.toJSON
            );
          }
          function track(e, t) {
            var n = pendo.url.get();
            collectEvent("track", t, n, e);
          }
          function disableUnusedMethodsPendoCoreOff(e) {
            _.each(e, function (e) {
              pendo[e] &&
                (pendo[e] = function () {
                  console.warn(
                    "This functionality is not supported by your subscription."
                  );
                });
            });
          }
          function autoInitialize() {
            return isReady()
              ? void pendo.log("already running")
              : (window.pendo_options && initialize(window.pendo_options),
                flushCallQueue(),
                void flushEvery(SEND_INTERVAL));
          }
          if (!windowOrMountPoint.pendo || !windowOrMountPoint.pendo.VERSION) {
            var UNDERSCORE_EXT = {};
            (function () {
              var e = UNDERSCORE_EXT,
                t = e._,
                n = Array.prototype,
                i = Object.prototype,
                o = Function.prototype,
                r = n.push,
                a = n.slice,
                s = n.concat,
                d = i.toString,
                u = i.hasOwnProperty,
                l = Array.isArray,
                c = Object.keys,
                p = o.bind,
                f = function (e) {
                  return e instanceof f
                    ? e
                    : this instanceof f
                    ? void (this._wrapped = e)
                    : new f(e);
                };
              (e._ = f), (f.VERSION = "1.7.0-pendo");
              var g = function (e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 2:
                    return function (n, i) {
                      return e.call(t, n, i);
                    };
                  case 3:
                    return function (n, i, o) {
                      return e.call(t, n, i, o);
                    };
                  case 4:
                    return function (n, i, o, r) {
                      return e.call(t, n, i, o, r);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              };
              (f.iteratee = function (e, t, n) {
                return null == e
                  ? f.identity
                  : f.isFunction(e)
                  ? g(e, t, n)
                  : f.isObject(e)
                  ? f.matches(e)
                  : f.property(e);
              }),
                (f.each = f.forEach =
                  function (e, t, n) {
                    if (null == e) return e;
                    t = g(t, n);
                    var i,
                      o = e.length;
                    if (o === +o) for (i = 0; o > i; i++) t(e[i], i, e);
                    else {
                      var r = f.keys(e);
                      for (i = 0, o = r.length; o > i; i++) t(e[r[i]], r[i], e);
                    }
                    return e;
                  }),
                (f.map = f.collect =
                  function (e, t, n) {
                    if (null == e) return [];
                    t = f.iteratee(t, n);
                    for (
                      var i,
                        o = e.length !== +e.length && f.keys(e),
                        r = (o || e).length,
                        a = Array(r),
                        s = 0;
                      r > s;
                      s++
                    )
                      (i = o ? o[s] : s), (a[s] = t(e[i], i, e));
                    return a;
                  });
              var h = "Reduce of empty array with no initial value";
              (f.reduce =
                f.foldl =
                f.inject =
                  function (e, t, n, i) {
                    null == e && (e = []), (t = g(t, i, 4));
                    var o,
                      r = e.length !== +e.length && f.keys(e),
                      a = (r || e).length,
                      s = 0;
                    if (arguments.length < 3) {
                      if (!a) throw new TypeError(h);
                      n = e[r ? r[s++] : s++];
                    }
                    for (; a > s; s++)
                      (o = r ? r[s] : s), (n = t(n, e[o], o, e));
                    return n;
                  }),
                (f.reduceRight = f.foldr =
                  function (e, t, n, i) {
                    null == e && (e = []), (t = g(t, i, 4));
                    var o,
                      r = e.length !== +e.length && f.keys(e),
                      a = (r || e).length;
                    if (arguments.length < 3) {
                      if (!a) throw new TypeError(h);
                      n = e[r ? r[--a] : --a];
                    }
                    for (; a--; ) (o = r ? r[a] : a), (n = t(n, e[o], o, e));
                    return n;
                  }),
                (f.find = f.detect =
                  function (e, t, n) {
                    var i;
                    return (
                      (t = f.iteratee(t, n)),
                      f.some(e, function (e, n, o) {
                        return t(e, n, o) ? ((i = e), !0) : void 0;
                      }),
                      i
                    );
                  }),
                (f.filter = f.select =
                  function (e, t, n) {
                    var i = [];
                    return null == e
                      ? i
                      : ((t = f.iteratee(t, n)),
                        f.each(e, function (e, n, o) {
                          t(e, n, o) && i.push(e);
                        }),
                        i);
                  }),
                (f.reject = function (e, t, n) {
                  return f.filter(e, f.negate(f.iteratee(t)), n);
                }),
                (f.every = f.all =
                  function (e, t, n) {
                    if (null == e) return !0;
                    t = f.iteratee(t, n);
                    var i,
                      o,
                      r = e.length !== +e.length && f.keys(e),
                      a = (r || e).length;
                    for (i = 0; a > i; i++)
                      if (((o = r ? r[i] : i), !t(e[o], o, e))) return !1;
                    return !0;
                  }),
                (f.some = f.any =
                  function (e, t, n) {
                    if (null == e) return !1;
                    t = f.iteratee(t, n);
                    var i,
                      o,
                      r = e.length !== +e.length && f.keys(e),
                      a = (r || e).length;
                    for (i = 0; a > i; i++)
                      if (((o = r ? r[i] : i), t(e[o], o, e))) return !0;
                    return !1;
                  }),
                (f.contains = f.include =
                  function (e, t) {
                    return null == e
                      ? !1
                      : (e.length !== +e.length && (e = f.values(e)),
                        f.indexOf(e, t) >= 0);
                  }),
                (f.invoke = function (e, t) {
                  var n = a.call(arguments, 2),
                    i = f.isFunction(t);
                  return f.map(e, function (e) {
                    return (i ? t : e[t]).apply(e, n);
                  });
                }),
                (f.pluck = function (e, t) {
                  return f.map(e, f.property(t));
                }),
                (f.where = function (e, t) {
                  return f.filter(e, f.matches(t));
                }),
                (f.findWhere = function (e, t) {
                  return f.find(e, f.matches(t));
                }),
                (f.max = function (e, t, n) {
                  var i,
                    o,
                    r = -(1 / 0),
                    a = -(1 / 0);
                  if (null == t && null != e) {
                    e = e.length === +e.length ? e : f.values(e);
                    for (var s = 0, d = e.length; d > s; s++)
                      (i = e[s]), i > r && (r = i);
                  } else
                    (t = f.iteratee(t, n)),
                      f.each(e, function (e, n, i) {
                        (o = t(e, n, i)),
                          (o > a || (o === -(1 / 0) && r === -(1 / 0))) &&
                            ((r = e), (a = o));
                      });
                  return r;
                }),
                (f.min = function (e, t, n) {
                  var i,
                    o,
                    r = 1 / 0,
                    a = 1 / 0;
                  if (null == t && null != e) {
                    e = e.length === +e.length ? e : f.values(e);
                    for (var s = 0, d = e.length; d > s; s++)
                      (i = e[s]), r > i && (r = i);
                  } else
                    (t = f.iteratee(t, n)),
                      f.each(e, function (e, n, i) {
                        (o = t(e, n, i)),
                          (a > o || (o === 1 / 0 && r === 1 / 0)) &&
                            ((r = e), (a = o));
                      });
                  return r;
                }),
                (f.shuffle = function (e) {
                  for (
                    var t,
                      n = e && e.length === +e.length ? e : f.values(e),
                      i = n.length,
                      o = Array(i),
                      r = 0;
                    i > r;
                    r++
                  )
                    (t = f.random(0, r)),
                      t !== r && (o[r] = o[t]),
                      (o[t] = n[r]);
                  return o;
                }),
                (f.sample = function (e, t, n) {
                  return null == t || n
                    ? (e.length !== +e.length && (e = f.values(e)),
                      e[f.random(e.length - 1)])
                    : f.shuffle(e).slice(0, Math.max(0, t));
                }),
                (f.sortBy = function (e, t, n) {
                  return (
                    (t = f.iteratee(t, n)),
                    f.pluck(
                      f
                        .map(e, function (e, n, i) {
                          return { value: e, index: n, criteria: t(e, n, i) };
                        })
                        .sort(function (e, t) {
                          var n = e.criteria,
                            i = t.criteria;
                          if (n !== i) {
                            if (n > i || void 0 === n) return 1;
                            if (i > n || void 0 === i) return -1;
                          }
                          return e.index - t.index;
                        }),
                      "value"
                    )
                  );
                });
              var v = function (e) {
                return function (t, n, i) {
                  var o = {};
                  return (
                    (n = f.iteratee(n, i)),
                    f.each(t, function (i, r) {
                      var a = n(i, r, t);
                      e(o, i, a);
                    }),
                    o
                  );
                };
              };
              (f.groupBy = v(function (e, t, n) {
                f.has(e, n) ? e[n].push(t) : (e[n] = [t]);
              })),
                (f.indexBy = v(function (e, t, n) {
                  e[n] = t;
                })),
                (f.countBy = v(function (e, t, n) {
                  f.has(e, n) ? e[n]++ : (e[n] = 1);
                })),
                (f.sortedIndex = function (e, t, n, i) {
                  n = f.iteratee(n, i, 1);
                  for (var o = n(t), r = 0, a = e.length; a > r; ) {
                    var s = (r + a) >>> 1;
                    n(e[s]) < o ? (r = s + 1) : (a = s);
                  }
                  return r;
                }),
                (f.toArray = function (e) {
                  return e
                    ? f.isArray(e)
                      ? a.call(e)
                      : e.length === +e.length
                      ? f.map(e, f.identity)
                      : f.values(e)
                    : [];
                }),
                (f.size = function (e) {
                  return null == e
                    ? 0
                    : e.length === +e.length
                    ? e.length
                    : f.keys(e).length;
                }),
                (f.partition = function (e, t, n) {
                  t = f.iteratee(t, n);
                  var i = [],
                    o = [];
                  return (
                    f.each(e, function (e, n, r) {
                      (t(e, n, r) ? i : o).push(e);
                    }),
                    [i, o]
                  );
                }),
                (f.first =
                  f.head =
                  f.take =
                    function (e, t, n) {
                      return null == e
                        ? void 0
                        : null == t || n
                        ? e[0]
                        : 0 > t
                        ? []
                        : a.call(e, 0, t);
                    }),
                (f.initial = function (e, t, n) {
                  return a.call(
                    e,
                    0,
                    Math.max(0, e.length - (null == t || n ? 1 : t))
                  );
                }),
                (f.last = function (e, t, n) {
                  return null == e
                    ? void 0
                    : null == t || n
                    ? e[e.length - 1]
                    : a.call(e, Math.max(e.length - t, 0));
                }),
                (f.rest =
                  f.tail =
                  f.drop =
                    function (e, t, n) {
                      return a.call(e, null == t || n ? 1 : t);
                    }),
                (f.compact = function (e) {
                  return f.filter(e, f.identity);
                });
              var m = function (e, t, n, i) {
                if (t && f.every(e, f.isArray)) return s.apply(i, e);
                for (var o = 0, a = e.length; a > o; o++) {
                  var d = e[o];
                  f.isArray(d) || f.isArguments(d)
                    ? t
                      ? r.apply(i, d)
                      : m(d, t, n, i)
                    : n || i.push(d);
                }
                return i;
              };
              (f.flatten = function (e, t) {
                return m(e, t, !1, []);
              }),
                (f.without = function (e) {
                  return f.difference(e, a.call(arguments, 1));
                }),
                (f.uniq = f.unique =
                  function (e, t, n, i) {
                    if (null == e) return [];
                    f.isBoolean(t) || ((i = n), (n = t), (t = !1)),
                      null != n && (n = f.iteratee(n, i));
                    for (var o = [], r = [], a = 0, s = e.length; s > a; a++) {
                      var d = e[a];
                      if (t) (a && r === d) || o.push(d), (r = d);
                      else if (n) {
                        var u = n(d, a, e);
                        f.indexOf(r, u) < 0 && (r.push(u), o.push(d));
                      } else f.indexOf(o, d) < 0 && o.push(d);
                    }
                    return o;
                  }),
                (f.union = function () {
                  return f.uniq(m(arguments, !0, !0, []));
                }),
                (f.intersection = function (e) {
                  if (null == e) return [];
                  for (
                    var t = [], n = arguments.length, i = 0, o = e.length;
                    o > i;
                    i++
                  ) {
                    var r = e[i];
                    if (!f.contains(t, r)) {
                      for (
                        var a = 1;
                        n > a && f.contains(arguments[a], r);
                        a++
                      );
                      a === n && t.push(r);
                    }
                  }
                  return t;
                }),
                (f.difference = function (e) {
                  var t = m(a.call(arguments, 1), !0, !0, []);
                  return f.filter(e, function (e) {
                    return !f.contains(t, e);
                  });
                }),
                (f.zip = function (e) {
                  if (null == e) return [];
                  for (
                    var t = f.max(arguments, "length").length,
                      n = Array(t),
                      i = 0;
                    t > i;
                    i++
                  )
                    n[i] = f.pluck(arguments, i);
                  return n;
                }),
                (f.object = function (e, t) {
                  if (null == e) return {};
                  for (var n = {}, i = 0, o = e.length; o > i; i++)
                    t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
                  return n;
                }),
                (f.indexOf = function (e, t, n) {
                  if (null == e) return -1;
                  var i = 0,
                    o = e.length;
                  if (n) {
                    if ("number" != typeof n)
                      return (i = f.sortedIndex(e, t)), e[i] === t ? i : -1;
                    i = 0 > n ? Math.max(0, o + n) : n;
                  }
                  for (; o > i; i++) if (e[i] === t) return i;
                  return -1;
                }),
                (f.lastIndexOf = function (e, t, n) {
                  if (null == e) return -1;
                  var i = e.length;
                  for (
                    "number" == typeof n &&
                    (i = 0 > n ? i + n + 1 : Math.min(i, n + 1));
                    --i >= 0;

                  )
                    if (e[i] === t) return i;
                  return -1;
                }),
                (f.range = function (e, t, n) {
                  arguments.length <= 1 && ((t = e || 0), (e = 0)),
                    (n = n || 1);
                  for (
                    var i = Math.max(Math.ceil((t - e) / n), 0),
                      o = Array(i),
                      r = 0;
                    i > r;
                    r++, e += n
                  )
                    o[r] = e;
                  return o;
                });
              var b = function () {};
              (f.bind = function (e, t) {
                var n, i;
                if (p && e.bind === p) return p.apply(e, a.call(arguments, 1));
                if (!f.isFunction(e))
                  throw new TypeError("Bind must be called on a function");
                return (
                  (n = a.call(arguments, 2)),
                  (i = function () {
                    if (!(this instanceof i))
                      return e.apply(t, n.concat(a.call(arguments)));
                    b.prototype = e.prototype;
                    var o = new b();
                    b.prototype = null;
                    var r = e.apply(o, n.concat(a.call(arguments)));
                    return f.isObject(r) ? r : o;
                  })
                );
              }),
                (f.partial = function (e) {
                  var t = a.call(arguments, 1);
                  return function () {
                    for (
                      var n = 0, i = t.slice(), o = 0, r = i.length;
                      r > o;
                      o++
                    )
                      i[o] === f && (i[o] = arguments[n++]);
                    for (; n < arguments.length; ) i.push(arguments[n++]);
                    return e.apply(this, i);
                  };
                }),
                (f.bindAll = function (e) {
                  var t,
                    n,
                    i = arguments.length;
                  if (1 >= i)
                    throw new Error("bindAll must be passed function names");
                  for (t = 1; i > t; t++)
                    (n = arguments[t]), (e[n] = f.bind(e[n], e));
                  return e;
                }),
                (f.memoize = function (e, t) {
                  var n = function (i) {
                    var o = n.cache,
                      r = t ? t.apply(this, arguments) : i;
                    return (
                      f.has(o, r) || (o[r] = e.apply(this, arguments)), o[r]
                    );
                  };
                  return (n.cache = {}), n;
                }),
                (f.delay = function (e, t) {
                  var n = a.call(arguments, 2);
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                (f.defer = function (e) {
                  return f.delay.apply(f, [e, 1].concat(a.call(arguments, 1)));
                }),
                (f.throttle = function (e, t, n) {
                  var i,
                    o,
                    r,
                    a = null,
                    s = 0;
                  n || (n = {});
                  var d = function () {
                    (s = n.leading === !1 ? 0 : f.now()),
                      (a = null),
                      (r = e.apply(i, o)),
                      a || (i = o = null);
                  };
                  return function () {
                    var u = f.now();
                    s || n.leading !== !1 || (s = u);
                    var l = t - (u - s);
                    return (
                      (i = this),
                      (o = arguments),
                      0 >= l || l > t
                        ? (clearTimeout(a),
                          (a = null),
                          (s = u),
                          (r = e.apply(i, o)),
                          a || (i = o = null))
                        : a || n.trailing === !1 || (a = setTimeout(d, l)),
                      r
                    );
                  };
                }),
                (f.debounce = function (e, t, n) {
                  var i,
                    o,
                    r,
                    a,
                    s,
                    d = function () {
                      var u = f.now() - a;
                      t > u && u > 0
                        ? (i = setTimeout(d, t - u))
                        : ((i = null),
                          n || ((s = e.apply(r, o)), i || (r = o = null)));
                    };
                  return function () {
                    (r = this), (o = arguments), (a = f.now());
                    var u = n && !i;
                    return (
                      i || (i = setTimeout(d, t)),
                      u && ((s = e.apply(r, o)), (r = o = null)),
                      s
                    );
                  };
                }),
                (f.wrap = function (e, t) {
                  return f.partial(t, e);
                }),
                (f.negate = function (e) {
                  return function () {
                    return !e.apply(this, arguments);
                  };
                }),
                (f.compose = function () {
                  var e = arguments,
                    t = e.length - 1;
                  return function () {
                    for (var n = t, i = e[t].apply(this, arguments); n--; )
                      i = e[n].call(this, i);
                    return i;
                  };
                }),
                (f.after = function (e, t) {
                  return function () {
                    return --e < 1 ? t.apply(this, arguments) : void 0;
                  };
                }),
                (f.before = function (e, t) {
                  var n;
                  return function () {
                    return (
                      --e > 0 ? (n = t.apply(this, arguments)) : (t = null), n
                    );
                  };
                }),
                (f.once = f.partial(f.before, 2)),
                (f.keys = function (e) {
                  if (!f.isObject(e)) return [];
                  if (c) return c(e);
                  var t = [];
                  for (var n in e) f.has(e, n) && t.push(n);
                  return t;
                }),
                (f.values = function (e) {
                  for (
                    var t = f.keys(e), n = t.length, i = Array(n), o = 0;
                    n > o;
                    o++
                  )
                    i[o] = e[t[o]];
                  return i;
                }),
                (f.pairs = function (e) {
                  for (
                    var t = f.keys(e), n = t.length, i = Array(n), o = 0;
                    n > o;
                    o++
                  )
                    i[o] = [t[o], e[t[o]]];
                  return i;
                }),
                (f.invert = function (e) {
                  for (
                    var t = {}, n = f.keys(e), i = 0, o = n.length;
                    o > i;
                    i++
                  )
                    t[e[n[i]]] = n[i];
                  return t;
                }),
                (f.functions = f.methods =
                  function (e) {
                    var t = [];
                    for (var n in e) f.isFunction(e[n]) && t.push(n);
                    return t.sort();
                  }),
                (f.extend = function (e) {
                  if (!f.isObject(e)) return e;
                  for (var t, n, i = 1, o = arguments.length; o > i; i++) {
                    t = arguments[i];
                    for (n in t) u.call(t, n) && (e[n] = t[n]);
                  }
                  return e;
                }),
                (f.pick = function (e, t, n) {
                  var i,
                    o = {};
                  if (null == e) return o;
                  if (f.isFunction(t)) {
                    t = g(t, n);
                    for (i in e) {
                      var r = e[i];
                      t(r, i, e) && (o[i] = r);
                    }
                  } else {
                    var d = s.apply([], a.call(arguments, 1));
                    e = new Object(e);
                    for (var u = 0, l = d.length; l > u; u++)
                      (i = d[u]), i in e && (o[i] = e[i]);
                  }
                  return o;
                }),
                (f.omit = function (e, t, n) {
                  if (f.isFunction(t)) t = f.negate(t);
                  else {
                    var i = f.map(s.apply([], a.call(arguments, 1)), String);
                    t = function (e, t) {
                      return !f.contains(i, t);
                    };
                  }
                  return f.pick(e, t, n);
                }),
                (f.defaults = function (e) {
                  if (!f.isObject(e)) return e;
                  for (var t = 1, n = arguments.length; n > t; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                  }
                  return e;
                }),
                (f.clone = function (e) {
                  return f.isObject(e)
                    ? f.isArray(e)
                      ? e.slice()
                      : f.extend({}, e)
                    : e;
                }),
                (f.tap = function (e, t) {
                  return t(e), e;
                });
              var _ = function (e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e === 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof f && (e = e._wrapped),
                  t instanceof f && (t = t._wrapped);
                var o = d.call(e);
                if (o !== d.call(t)) return !1;
                switch (o) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + t;
                  case "[object Number]":
                    return +e !== +e
                      ? +t !== +t
                      : 0 === +e
                      ? 1 / +e === 1 / t
                      : +e === +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +e === +t;
                }
                if ("object" != typeof e || "object" != typeof t) return !1;
                for (var r = n.length; r--; ) if (n[r] === e) return i[r] === t;
                var a = e.constructor,
                  s = t.constructor;
                if (
                  a !== s &&
                  "constructor" in e &&
                  "constructor" in t &&
                  !(
                    f.isFunction(a) &&
                    a instanceof a &&
                    f.isFunction(s) &&
                    s instanceof s
                  )
                )
                  return !1;
                n.push(e), i.push(t);
                var u, l;
                if ("[object Array]" === o) {
                  if (((u = e.length), (l = u === t.length)))
                    for (; u-- && (l = _(e[u], t[u], n, i)); );
                } else {
                  var c,
                    p = f.keys(e);
                  if (((u = p.length), (l = f.keys(t).length === u)))
                    for (
                      ;
                      u-- &&
                      ((c = p[u]), (l = f.has(t, c) && _(e[c], t[c], n, i)));

                    );
                }
                return n.pop(), i.pop(), l;
              };
              (f.isEqual = function (e, t) {
                return _(e, t, [], []);
              }),
                (f.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (f.isArray(e) || f.isString(e) || f.isArguments(e))
                    return 0 === e.length;
                  for (var t in e) if (f.has(e, t)) return !1;
                  return !0;
                }),
                (f.isElement = function (e) {
                  return !(!e || 1 !== e.nodeType);
                }),
                (f.isArray =
                  l ||
                  function (e) {
                    return "[object Array]" === d.call(e);
                  }),
                (f.isObject = function (e) {
                  var t = typeof e;
                  return "function" === t || ("object" === t && !!e);
                }),
                f.each(
                  [
                    "Arguments",
                    "Function",
                    "String",
                    "Number",
                    "Date",
                    "RegExp",
                  ],
                  function (e) {
                    f["is" + e] = function (t) {
                      return d.call(t) === "[object " + e + "]";
                    };
                  }
                ),
                f.isArguments(arguments) ||
                  (f.isArguments = function (e) {
                    return f.has(e, "callee");
                  }),
                "function" != typeof /./ &&
                  (f.isFunction = function (e) {
                    return "function" == typeof e || !1;
                  }),
                (f.isFinite = function (e) {
                  return isFinite(e) && !isNaN(parseFloat(e));
                }),
                (f.isNaN = function (e) {
                  return f.isNumber(e) && e !== +e;
                }),
                (f.isBoolean = function (e) {
                  return (
                    e === !0 || e === !1 || "[object Boolean]" === d.call(e)
                  );
                }),
                (f.isNull = function (e) {
                  return null === e;
                }),
                (f.isUndefined = function (e) {
                  return void 0 === e;
                }),
                (f.has = function (e, t) {
                  return null != e && u.call(e, t);
                }),
                (f.noConflict = function () {
                  return (e._ = t), this;
                }),
                (f.identity = function (e) {
                  return e;
                }),
                (f.constant = function (e) {
                  return function () {
                    return e;
                  };
                }),
                (f.noop = function () {}),
                (f.property = function (e) {
                  return function (t) {
                    return t[e];
                  };
                }),
                (f.matches = function (e) {
                  var t = f.pairs(e),
                    n = t.length;
                  return function (e) {
                    if (null == e) return !n;
                    e = new Object(e);
                    for (var i = 0; n > i; i++) {
                      var o = t[i],
                        r = o[0];
                      if (o[1] !== e[r] || !(r in e)) return !1;
                    }
                    return !0;
                  };
                }),
                (f.times = function (e, t, n) {
                  var i = Array(Math.max(0, e));
                  t = g(t, n, 1);
                  for (var o = 0; e > o; o++) i[o] = t(o);
                  return i;
                }),
                (f.random = function (e, t) {
                  return (
                    null == t && ((t = e), (e = 0)),
                    e + Math.floor(Math.random() * (t - e + 1))
                  );
                }),
                (f.now =
                  Date.now ||
                  function () {
                    return new Date().getTime();
                  });
              var y = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                  "`": "&#x60;",
                },
                w = f.invert(y),
                S = function (e) {
                  var t = function (t) {
                      return e[t];
                    },
                    n = "(?:" + f.keys(e).join("|") + ")",
                    i = RegExp(n),
                    o = RegExp(n, "g");
                  return function (e) {
                    return (
                      (e = null == e ? "" : "" + e),
                      i.test(e) ? e.replace(o, t) : e
                    );
                  };
                };
              (f.escape = S(y)),
                (f.unescape = S(w)),
                (f.result = function (e, t) {
                  if (null == e) return void 0;
                  var n = e[t];
                  return f.isFunction(n) ? e[t]() : n;
                });
              var E = 0;
              (f.uniqueId = function (e) {
                var t = ++E + "";
                return e ? e + t : t;
              }),
                (f.templateSettings = {
                  evaluate: /<%([\s\S]+?)%>/g,
                  interpolate: /<%=([\s\S]+?)%>/g,
                  escape: /<%-([\s\S]+?)%>/g,
                });
              var C = /(.)^/,
                I = {
                  "'": "'",
                  "\\": "\\",
                  "\r": "r",
                  "\n": "n",
                  "\u2028": "u2028",
                  "\u2029": "u2029",
                },
                T = /\\|'|\r|\n|\u2028|\u2029/g,
                A = function (e) {
                  return "\\" + I[e];
                };
              (f.template = function (e, t, n) {
                !t && n && (t = n), (t = f.defaults({}, t, f.templateSettings));
                var i = RegExp(
                    [
                      (t.escape || C).source,
                      (t.interpolate || C).source,
                      (t.evaluate || C).source,
                    ].join("|") + "|$",
                    "g"
                  ),
                  o = 0,
                  r = "__p+='";
                e.replace(i, function (t, n, i, a, s) {
                  return (
                    (r += e.slice(o, s).replace(T, A)),
                    (o = s + t.length),
                    n
                      ? (r +=
                          "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                      : i
                      ? (r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                      : a && (r += "';\n" + a + "\n__p+='"),
                    t
                  );
                }),
                  (r += "';\n"),
                  t.variable || (r = "with(obj||{}){\n" + r + "}\n"),
                  (r =
                    "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                    r +
                    "return __p;\n");
                try {
                  var a = new Function(t.variable || "obj", "_", r);
                } catch (s) {
                  throw ((s.source = r), s);
                }
                var d = function (e) {
                    return a.call(this, e, f);
                  },
                  u = t.variable || "obj";
                return (d.source = "function(" + u + "){\n" + r + "}"), d;
              }),
                (f.chain = function (e) {
                  var t = f(e);
                  return (t._chain = !0), t;
                });
              var x = function (e) {
                return this._chain ? f(e).chain() : e;
              };
              (f.mixin = function (e) {
                f.each(f.functions(e), function (t) {
                  var n = (f[t] = e[t]);
                  f.prototype[t] = function () {
                    var e = [this._wrapped];
                    return r.apply(e, arguments), x.call(this, n.apply(f, e));
                  };
                });
              }),
                f.mixin(f),
                f.each(
                  [
                    "pop",
                    "push",
                    "reverse",
                    "shift",
                    "sort",
                    "splice",
                    "unshift",
                  ],
                  function (e) {
                    var t = n[e];
                    f.prototype[e] = function () {
                      var n = this._wrapped;
                      return (
                        t.apply(n, arguments),
                        ("shift" !== e && "splice" !== e) ||
                          0 !== n.length ||
                          delete n[0],
                        x.call(this, n)
                      );
                    };
                  }
                ),
                f.each(["concat", "join", "slice"], function (e) {
                  var t = n[e];
                  f.prototype[e] = function () {
                    return x.call(this, t.apply(this._wrapped, arguments));
                  };
                }),
                (f.prototype.value = function () {
                  return this._wrapped;
                });
            }.call({}));
            var SIZZLE_EXT = {};
            !(function (e) {
              function t(e, t, n, i) {
                var o,
                  r,
                  a,
                  s,
                  d,
                  u,
                  l,
                  p = t && t.ownerDocument,
                  g = t ? t.nodeType : 9;
                if (
                  ((n = n || []),
                  "string" != typeof e ||
                    !e ||
                    (1 !== g && 9 !== g && 11 !== g))
                )
                  return n;
                if (!i && (L(t), (t = t || B), R)) {
                  if (11 !== g && (d = _e.exec(e)))
                    if ((o = d[1])) {
                      if (9 === g) {
                        if (!(a = t.getElementById(o))) return n;
                        if (a.id === o) return n.push(a), n;
                      } else if (
                        p &&
                        (a = p.getElementById(o)) &&
                        F(t, a) &&
                        a.id === o
                      )
                        return n.push(a), n;
                    } else {
                      if (d[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                      if (
                        (o = d[3]) &&
                        S.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return Q.apply(n, t.getElementsByClassName(o)), n;
                    }
                  if (
                    S.qsa &&
                    !q[e + " "] &&
                    (!P || !P.test(e)) &&
                    (1 !== g || "object" !== t.nodeName.toLowerCase())
                  ) {
                    if (
                      ((l = e), (p = t), 1 === g && (ce.test(e) || le.test(e)))
                    ) {
                      for (
                        p = (ye.test(e) && c(t.parentNode)) || t,
                          (p === t && S.scope) ||
                            ((s = t.getAttribute("id"))
                              ? (s = s.replace(Ee, Ce))
                              : t.setAttribute("id", (s = H))),
                          u = T(e),
                          r = u.length;
                        r--;

                      )
                        u[r] = (s ? "#" + s : ":scope") + " " + f(u[r]);
                      l = u.join(",");
                    }
                    try {
                      return Q.apply(n, p.querySelectorAll(l)), n;
                    } catch (h) {
                      q(e, !0);
                    } finally {
                      s === H && t.removeAttribute("id");
                    }
                  }
                }
                return x(e.replace(de, "$1"), t, n, i);
              }
              function n() {
                function e(n, i) {
                  return (
                    t.push(n + " ") > E.cacheLength && delete e[t.shift()],
                    (e[n + " "] = i)
                  );
                }
                var t = [];
                return e;
              }
              function i(e) {
                return (e[H] = !0), e;
              }
              function o(e) {
                var t = B.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (n) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                  E.attrHandle[n[i]] = t;
              }
              function a(e, t) {
                var n = t && e,
                  i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function s(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return "input" === n && t.type === e;
                };
              }
              function d(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function u(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && t.disabled === !1
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (t.isDisabled !== !e && Te(t) === e)
                      : t.disabled === e
                    : "label" in t
                    ? t.disabled === e
                    : !1;
                };
              }
              function l(e) {
                return i(function (t) {
                  return (
                    (t = +t),
                    i(function (n, i) {
                      for (var o, r = e([], n.length, t), a = r.length; a--; )
                        n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
                    })
                  );
                });
              }
              function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e;
              }
              function p() {}
              function f(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)
                  i += e[t].value;
                return i;
              }
              function g(e, t, n) {
                var i = t.dir,
                  o = t.next,
                  r = o || i,
                  a = n && "parentNode" === r,
                  s = V++;
                return t.first
                  ? function (t, n, o) {
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || a) return e(t, n, o);
                      return !1;
                    }
                  : function (t, n, d) {
                      var u,
                        l,
                        c,
                        p = [z, s];
                      if (d) {
                        for (; (t = t[i]); )
                          if ((1 === t.nodeType || a) && e(t, n, d)) return !0;
                      } else
                        for (; (t = t[i]); )
                          if (1 === t.nodeType || a)
                            if (
                              ((c = t[H] || (t[H] = {})),
                              (l = c[t.uniqueID] || (c[t.uniqueID] = {})),
                              o && o === t.nodeName.toLowerCase())
                            )
                              t = t[i] || t;
                            else {
                              if ((u = l[r]) && u[0] === z && u[1] === s)
                                return (p[2] = u[2]);
                              if (((l[r] = p), (p[2] = e(t, n, d)))) return !0;
                            }
                      return !1;
                    };
              }
              function h(e) {
                return e.length > 1
                  ? function (t, n, i) {
                      for (var o = e.length; o--; )
                        if (!e[o](t, n, i)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function v(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i;
              }
              function m(e, t, n, i, o) {
                for (
                  var r, a = [], s = 0, d = e.length, u = null != t;
                  d > s;
                  s++
                )
                  (r = e[s]) &&
                    (!n || n(r, i, o)) &&
                    (a.push(r), u && t.push(s));
                return a;
              }
              function b(e, t, n, o, r, a) {
                return (
                  o && !o[H] && (o = b(o)),
                  r && !r[H] && (r = b(r, a)),
                  i(function (i, a, s, d) {
                    var u,
                      l,
                      c,
                      p = [],
                      f = [],
                      g = a.length,
                      h = i || v(t || "*", s.nodeType ? [s] : s, []),
                      b = !e || (!i && t) ? h : m(h, p, e, s, d),
                      _ = n ? (r || (i ? e : g || o) ? [] : a) : b;
                    if ((n && n(b, _, s, d), o))
                      for (u = m(_, f), o(u, [], s, d), l = u.length; l--; )
                        (c = u[l]) && (_[f[l]] = !(b[f[l]] = c));
                    if (i) {
                      if (r || e) {
                        if (r) {
                          for (u = [], l = _.length; l--; )
                            (c = _[l]) && u.push((b[l] = c));
                          r(null, (_ = []), u, d);
                        }
                        for (l = _.length; l--; )
                          (c = _[l]) &&
                            (u = r ? te(i, c) : p[l]) > -1 &&
                            (i[u] = !(a[u] = c));
                      }
                    } else (_ = m(_ === a ? _.splice(g, _.length) : _)), r ? r(null, a, _, d) : Q.apply(a, _);
                  })
                );
              }
              function _(e) {
                for (
                  var t,
                    n,
                    i,
                    o = e.length,
                    r = E.relative[e[0].type],
                    a = r || E.relative[" "],
                    s = r ? 1 : 0,
                    d = g(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0
                    ),
                    u = g(
                      function (e) {
                        return te(t, e) > -1;
                      },
                      a,
                      !0
                    ),
                    l = [
                      function (e, n, i) {
                        var o =
                          (!r && (i || n !== G)) ||
                          ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                        return (t = null), o;
                      },
                    ];
                  o > s;
                  s++
                )
                  if ((n = E.relative[e[s].type])) l = [g(h(l), n)];
                  else {
                    if (
                      ((n = E.filter[e[s].type].apply(null, e[s].matches)),
                      n[H])
                    ) {
                      for (i = ++s; o > i && !E.relative[e[i].type]; i++);
                      return b(
                        s > 1 && h(l),
                        s > 1 &&
                          f(
                            e.slice(0, s - 1).concat({
                              value: " " === e[s - 2].type ? "*" : "",
                            })
                          ).replace(de, "$1"),
                        n,
                        i > s && _(e.slice(s, i)),
                        o > i && _((e = e.slice(i))),
                        o > i && f(e)
                      );
                    }
                    l.push(n);
                  }
                return h(l);
              }
              function y(e, n) {
                var o = n.length > 0,
                  r = e.length > 0,
                  a = function (i, a, s, d, u) {
                    var l,
                      c,
                      p,
                      f = 0,
                      g = "0",
                      h = i && [],
                      v = [],
                      b = G,
                      _ = i || (r && E.find.TAG("*", u)),
                      y = (z += null == b ? 1 : Math.random() || 0.1),
                      w = _.length;
                    for (
                      u && (G = a == B || a || u);
                      g !== w && null != (l = _[g]);
                      g++
                    ) {
                      if (r && l) {
                        for (
                          c = 0, a || l.ownerDocument == B || (L(l), (s = !R));
                          (p = e[c++]);

                        )
                          if (p(l, a || B, s)) {
                            d.push(l);
                            break;
                          }
                        u && (z = y);
                      }
                      o && ((l = !p && l) && f--, i && h.push(l));
                    }
                    if (((f += g), o && g !== f)) {
                      for (c = 0; (p = n[c++]); ) p(h, v, a, s);
                      if (i) {
                        if (f > 0)
                          for (; g--; ) h[g] || v[g] || (v[g] = Y.call(d));
                        v = m(v);
                      }
                      Q.apply(d, v),
                        u &&
                          !i &&
                          v.length > 0 &&
                          f + n.length > 1 &&
                          t.uniqueSort(d);
                    }
                    return u && ((z = y), (G = b)), h;
                  };
                return o ? i(a) : a;
              }
              var w,
                S,
                E,
                C,
                I,
                T,
                A,
                x,
                G,
                k,
                O,
                L,
                B,
                N,
                R,
                P,
                M,
                D,
                F,
                H = "sizzle" + 1 * new Date(),
                U = e.document,
                z = 0,
                V = 0,
                W = n(),
                j = n(),
                J = n(),
                q = n(),
                X = function (e, t) {
                  return e === t && (O = !0), 0;
                },
                K = {}.hasOwnProperty,
                Z = [],
                Y = Z.pop,
                $ = Z.push,
                Q = Z.push,
                ee = Z.slice,
                te = function (e, t) {
                  for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                ne =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                oe =
                  "(?:\\\\[\\da-fA-F]{1,6}" +
                  ie +
                  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
                re =
                  "\\[" +
                  ie +
                  "*(" +
                  oe +
                  ")(?:" +
                  ie +
                  "*([*^$|!~]?=)" +
                  ie +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  oe +
                  "))|)" +
                  ie +
                  "*\\]",
                ae =
                  ":(" +
                  oe +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  re +
                  ")*)|.*)\\)|)",
                se = new RegExp(ie + "+", "g"),
                de = new RegExp(
                  "^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$",
                  "g"
                ),
                ue = new RegExp("^" + ie + "*," + ie + "*"),
                le = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                ce = new RegExp(ie + "|>"),
                pe = new RegExp(ae),
                fe = new RegExp("^" + oe + "$"),
                ge = {
                  ID: new RegExp("^#(" + oe + ")"),
                  CLASS: new RegExp("^\\.(" + oe + ")"),
                  TAG: new RegExp("^(" + oe + "|[*])"),
                  ATTR: new RegExp("^" + re),
                  PSEUDO: new RegExp("^" + ae),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      ie +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      ie +
                      "*(?:([+-]|)" +
                      ie +
                      "*(\\d+)|))" +
                      ie +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + ne + ")$", "i"),
                  needsContext: new RegExp(
                    "^" +
                      ie +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      ie +
                      "*((?:-\\d)?\\d*)" +
                      ie +
                      "*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                he = /HTML$/i,
                ve = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                be = {
                  test: function (t) {
                    return /native code/.test(e.ShadowRoot) ||
                      "function" != typeof t
                      ? /^[^{]+\{\s*\[native \w/.test(t)
                      : !0;
                  },
                },
                _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                we = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}" + ie + "?|\\\\([^\\r\\n\\f])",
                  "g"
                ),
                Se = function (e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return t
                    ? t
                    : 0 > n
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      );
                },
                Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Ce = function (e, t) {
                  return t
                    ? "\x00" === e
                      ? "�"
                      : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
                },
                Ie = function () {
                  L();
                },
                Te = g(
                  function (e) {
                    return (
                      e.disabled === !0 &&
                      "fieldset" === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                Q.apply((Z = ee.call(U.childNodes)), U.childNodes),
                  Z[U.childNodes.length].nodeType;
              } catch (Ae) {
                Q = {
                  apply: Z.length
                    ? function (e, t) {
                        $.apply(e, ee.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                        e.length = n - 1;
                      },
                };
              }
              (S = t.support = {}),
                (I = t.isXML =
                  function (e) {
                    var t = e.namespaceURI,
                      n = (e.ownerDocument || e).documentElement;
                    return !he.test(t || (n && n.nodeName) || "HTML");
                  }),
                (L = t.setDocument =
                  function (e) {
                    var t,
                      n,
                      i = e ? e.ownerDocument || e : U;
                    return i != B && 9 === i.nodeType && i.documentElement
                      ? ((B = i),
                        (N = B.documentElement),
                        (R = !I(B)),
                        U != B &&
                          (n = B.defaultView) &&
                          n.top !== n &&
                          (n.addEventListener
                            ? n.addEventListener("unload", Ie, !1)
                            : n.attachEvent && n.attachEvent("onunload", Ie)),
                        (S.scope = o(function (e) {
                          return (
                            N.appendChild(e).appendChild(
                              B.createElement("div")
                            ),
                            "undefined" != typeof e.querySelectorAll &&
                              !e.querySelectorAll(":scope fieldset div").length
                          );
                        })),
                        (S.attributes = o(function (e) {
                          return (
                            (e.className = "i"), !e.getAttribute("className")
                          );
                        })),
                        (S.getElementsByTagName = o(function (e) {
                          return (
                            e.appendChild(B.createComment("")),
                            !e.getElementsByTagName("*").length
                          );
                        })),
                        (S.getElementsByClassName = be.test(
                          B.getElementsByClassName
                        )),
                        (S.getById = o(function (e) {
                          return (
                            (N.appendChild(e).id = H),
                            !B.getElementsByName ||
                              !B.getElementsByName(H).length
                          );
                        })),
                        S.getById
                          ? ((E.filter.ID = function (e) {
                              var t = e.replace(we, Se);
                              return function (e) {
                                return e.getAttribute("id") === t;
                              };
                            }),
                            (E.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && R) {
                                var n = t.getElementById(e);
                                return n ? [n] : [];
                              }
                            }))
                          : ((E.filter.ID = function (e) {
                              var t = e.replace(we, Se);
                              return function (e) {
                                var n =
                                  "undefined" != typeof e.getAttributeNode &&
                                  e.getAttributeNode("id");
                                return n && n.value === t;
                              };
                            }),
                            (E.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && R) {
                                var n,
                                  i,
                                  o,
                                  r = t.getElementById(e);
                                if (r) {
                                  if (
                                    ((n = r.getAttributeNode("id")),
                                    n && n.value === e)
                                  )
                                    return [r];
                                  for (
                                    o = t.getElementsByName(e), i = 0;
                                    (r = o[i++]);

                                  )
                                    if (
                                      ((n = r.getAttributeNode("id")),
                                      n && n.value === e)
                                    )
                                      return [r];
                                }
                                return [];
                              }
                            })),
                        (E.find.TAG = S.getElementsByTagName
                          ? function (e, t) {
                              return "undefined" !=
                                typeof t.getElementsByTagName
                                ? t.getElementsByTagName(e)
                                : S.qsa
                                ? t.querySelectorAll(e)
                                : void 0;
                            }
                          : function (e, t) {
                              var n,
                                i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                              if ("*" === e) {
                                for (; (n = r[o++]); )
                                  1 === n.nodeType && i.push(n);
                                return i;
                              }
                              return r;
                            }),
                        (E.find.CLASS =
                          S.getElementsByClassName &&
                          function (e, t) {
                            return "undefined" !=
                              typeof t.getElementsByClassName && R
                              ? t.getElementsByClassName(e)
                              : void 0;
                          }),
                        (M = []),
                        (P = []),
                        (S.qsa = be.test(B.querySelectorAll)) &&
                          (o(function (e) {
                            var t;
                            (N.appendChild(e).innerHTML =
                              "<a id='" +
                              H +
                              "'></a><select id='" +
                              H +
                              "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                              e.querySelectorAll("[msallowcapture^='']")
                                .length &&
                                P.push("[*^$]=" + ie + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length ||
                                P.push("\\[" + ie + "*(?:value|" + ne + ")"),
                              e.querySelectorAll("[id~=" + H + "-]").length ||
                                P.push("~="),
                              (t = B.createElement("input")),
                              t.setAttribute("name", ""),
                              e.appendChild(t),
                              e.querySelectorAll("[name='']").length ||
                                P.push(
                                  "\\[" +
                                    ie +
                                    "*name" +
                                    ie +
                                    "*=" +
                                    ie +
                                    "*(?:''|\"\")"
                                ),
                              e.querySelectorAll(":checked").length ||
                                P.push(":checked"),
                              e.querySelectorAll("a#" + H + "+*").length ||
                                P.push(".#.+[+~]"),
                              e.querySelectorAll("\\\f"),
                              P.push("[\\r\\n\\f]");
                          }),
                          o(function (e) {
                            e.innerHTML =
                              "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = B.createElement("input");
                            t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length &&
                                P.push("name" + ie + "*[*^$|!~]?="),
                              2 !== e.querySelectorAll(":enabled").length &&
                                P.push(":enabled", ":disabled"),
                              (N.appendChild(e).disabled = !0),
                              2 !== e.querySelectorAll(":disabled").length &&
                                P.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              P.push(",.*:");
                          })),
                        (S.matchesSelector = be.test(
                          (D =
                            N.matches ||
                            N.webkitMatchesSelector ||
                            N.mozMatchesSelector ||
                            N.oMatchesSelector ||
                            N.msMatchesSelector)
                        )) &&
                          o(function (e) {
                            (S.disconnectedMatch = D.call(e, "*")),
                              D.call(e, "[s!='']:x"),
                              M.push("!=", ae);
                          }),
                        (P = P.length && new RegExp(P.join("|"))),
                        (M = M.length && new RegExp(M.join("|"))),
                        (t = be.test(N.compareDocumentPosition)),
                        (F =
                          t || be.test(N.contains)
                            ? function (e, t) {
                                var n =
                                    9 === e.nodeType ? e.documentElement : e,
                                  i = t && t.parentNode;
                                return (
                                  e === i ||
                                  !(
                                    !i ||
                                    1 !== i.nodeType ||
                                    !(n.contains
                                      ? n.contains(i)
                                      : e.compareDocumentPosition &&
                                        16 & e.compareDocumentPosition(i))
                                  )
                                );
                              }
                            : function (e, t) {
                                if (t)
                                  for (; (t = t.parentNode); )
                                    if (t === e) return !0;
                                return !1;
                              }),
                        (X = t
                          ? function (e, t) {
                              if (e === t) return (O = !0), 0;
                              var n =
                                !e.compareDocumentPosition -
                                !t.compareDocumentPosition;
                              return n
                                ? n
                                : ((n =
                                    (e.ownerDocument || e) ==
                                    (t.ownerDocument || t)
                                      ? e.compareDocumentPosition(t)
                                      : 1),
                                  1 & n ||
                                  (!S.sortDetached &&
                                    t.compareDocumentPosition(e) === n)
                                    ? e == B ||
                                      (e.ownerDocument == U && F(U, e))
                                      ? -1
                                      : t == B ||
                                        (t.ownerDocument == U && F(U, t))
                                      ? 1
                                      : k
                                      ? te(k, e) - te(k, t)
                                      : 0
                                    : 4 & n
                                    ? -1
                                    : 1);
                            }
                          : function (e, t) {
                              if (e === t) return (O = !0), 0;
                              var n,
                                i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                s = [e],
                                d = [t];
                              if (!o || !r)
                                return e == B
                                  ? -1
                                  : t == B
                                  ? 1
                                  : o
                                  ? -1
                                  : r
                                  ? 1
                                  : k
                                  ? te(k, e) - te(k, t)
                                  : 0;
                              if (o === r) return a(e, t);
                              for (n = e; (n = n.parentNode); ) s.unshift(n);
                              for (n = t; (n = n.parentNode); ) d.unshift(n);
                              for (; s[i] === d[i]; ) i++;
                              return i
                                ? a(s[i], d[i])
                                : s[i] == U
                                ? -1
                                : d[i] == U
                                ? 1
                                : 0;
                            }),
                        B)
                      : B;
                  }),
                (t.matches = function (e, n) {
                  return t(e, null, null, n);
                }),
                (t.matchesSelector = function (e, n) {
                  if (
                    (L(e),
                    S.matchesSelector &&
                      R &&
                      !q[n + " "] &&
                      (!M || !M.test(n)) &&
                      (!P || !P.test(n)))
                  )
                    try {
                      var i = D.call(e, n);
                      if (
                        i ||
                        S.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                      )
                        return i;
                    } catch (o) {
                      q(n, !0);
                    }
                  return t(n, B, null, [e]).length > 0;
                }),
                (t.contains = function (e, t) {
                  return (e.ownerDocument || e) != B && L(e), F(e, t);
                }),
                (t.attr = function (e, t) {
                  (e.ownerDocument || e) != B && L(e);
                  var n = E.attrHandle[t.toLowerCase()],
                    i =
                      n && K.call(E.attrHandle, t.toLowerCase())
                        ? n(e, t, !R)
                        : undefined;
                  return i !== undefined
                    ? i
                    : S.attributes || !R
                    ? e.getAttribute(t)
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
                }),
                (t.escape = function (e) {
                  return (e + "").replace(Ee, Ce);
                }),
                (t.error = function (e) {
                  throw new Error(
                    "Syntax error, unrecognized expression: " + e
                  );
                }),
                (t.uniqueSort = function (e) {
                  var t,
                    n = [],
                    i = 0,
                    o = 0;
                  if (
                    ((O = !S.detectDuplicates),
                    (k = !S.sortStable && e.slice(0)),
                    e.sort(X),
                    O)
                  ) {
                    for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                    for (; i--; ) e.splice(n[i], 1);
                  }
                  return (k = null), e;
                }),
                (C = t.getText =
                  function (e) {
                    var t,
                      n = "",
                      i = 0,
                      o = e.nodeType;
                    if (o) {
                      if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                          return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                      } else if (3 === o || 4 === o) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += C(t);
                    return n;
                  }),
                (E = t.selectors =
                  {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ge,
                    attrHandle: {},
                    find: {},
                    relative: {
                      ">": { dir: "parentNode", first: !0 },
                      " ": { dir: "parentNode" },
                      "+": { dir: "previousSibling", first: !0 },
                      "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                      ATTR: function (e) {
                        return (
                          (e[1] = e[1].replace(we, Se)),
                          (e[3] = (e[3] || e[4] || e[5] || "").replace(we, Se)),
                          "~=" === e[2] && (e[3] = " " + e[3] + " "),
                          e.slice(0, 4)
                        );
                      },
                      CHILD: function (e) {
                        return (
                          (e[1] = e[1].toLowerCase()),
                          "nth" === e[1].slice(0, 3)
                            ? (e[3] || t.error(e[0]),
                              (e[4] = +(e[4]
                                ? e[5] + (e[6] || 1)
                                : 2 * ("even" === e[3] || "odd" === e[3]))),
                              (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                            : e[3] && t.error(e[0]),
                          e
                        );
                      },
                      PSEUDO: function (e) {
                        var t,
                          n = !e[6] && e[2];
                        return ge.CHILD.test(e[0])
                          ? null
                          : (e[3]
                              ? (e[2] = e[4] || e[5] || "")
                              : n &&
                                pe.test(n) &&
                                (t = T(n, !0)) &&
                                (t = n.indexOf(")", n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)),
                                (e[2] = n.slice(0, t))),
                            e.slice(0, 3));
                      },
                    },
                    filter: {
                      TAG: function (e) {
                        var t = e.replace(we, Se).toLowerCase();
                        return "*" === e
                          ? function () {
                              return !0;
                            }
                          : function (e) {
                              return (
                                e.nodeName && e.nodeName.toLowerCase() === t
                              );
                            };
                      },
                      CLASS: function (e) {
                        var t = W[e + " "];
                        return (
                          t ||
                          ((t = new RegExp(
                            "(^|" + ie + ")" + e + "(" + ie + "|$)"
                          )) &&
                            W(e, function (e) {
                              return t.test(
                                ("string" == typeof e.className &&
                                  e.className) ||
                                  ("undefined" != typeof e.getAttribute &&
                                    e.getAttribute("class")) ||
                                  ""
                              );
                            }))
                        );
                      },
                      ATTR: function (e, n, i) {
                        return function (o) {
                          var r = t.attr(o, e);
                          return null == r
                            ? "!=" === n
                            : n
                            ? ((r += ""),
                              "=" === n
                                ? r === i
                                : "!=" === n
                                ? r !== i
                                : "^=" === n
                                ? i && 0 === r.indexOf(i)
                                : "*=" === n
                                ? i && r.indexOf(i) > -1
                                : "$=" === n
                                ? i && r.slice(-i.length) === i
                                : "~=" === n
                                ? (" " + r.replace(se, " ") + " ").indexOf(i) >
                                  -1
                                : "|=" === n
                                ? r === i ||
                                  r.slice(0, i.length + 1) === i + "-"
                                : !1)
                            : !0;
                        };
                      },
                      CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                          a = "last" !== e.slice(-4),
                          s = "of-type" === t;
                        return 1 === i && 0 === o
                          ? function (e) {
                              return !!e.parentNode;
                            }
                          : function (t, n, d) {
                              var u,
                                l,
                                c,
                                p,
                                f,
                                g,
                                h = r !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = s && t.nodeName.toLowerCase(),
                                b = !d && !s,
                                _ = !1;
                              if (v) {
                                if (r) {
                                  for (; h; ) {
                                    for (p = t; (p = p[h]); )
                                      if (
                                        s
                                          ? p.nodeName.toLowerCase() === m
                                          : 1 === p.nodeType
                                      )
                                        return !1;
                                    g = h = "only" === e && !g && "nextSibling";
                                  }
                                  return !0;
                                }
                                if (
                                  ((g = [a ? v.firstChild : v.lastChild]),
                                  a && b)
                                ) {
                                  for (
                                    p = v,
                                      c = p[H] || (p[H] = {}),
                                      l = c[p.uniqueID] || (c[p.uniqueID] = {}),
                                      u = l[e] || [],
                                      f = u[0] === z && u[1],
                                      _ = f && u[2],
                                      p = f && v.childNodes[f];
                                    (p =
                                      (++f && p && p[h]) ||
                                      (_ = f = 0) ||
                                      g.pop());

                                  )
                                    if (1 === p.nodeType && ++_ && p === t) {
                                      l[e] = [z, f, _];
                                      break;
                                    }
                                } else if (
                                  (b &&
                                    ((p = t),
                                    (c = p[H] || (p[H] = {})),
                                    (l = c[p.uniqueID] || (c[p.uniqueID] = {})),
                                    (u = l[e] || []),
                                    (f = u[0] === z && u[1]),
                                    (_ = f)),
                                  _ === !1)
                                )
                                  for (
                                    ;
                                    (p =
                                      (++f && p && p[h]) ||
                                      (_ = f = 0) ||
                                      g.pop()) &&
                                    ((s
                                      ? p.nodeName.toLowerCase() !== m
                                      : 1 !== p.nodeType) ||
                                      !++_ ||
                                      (b &&
                                        ((c = p[H] || (p[H] = {})),
                                        (l =
                                          c[p.uniqueID] ||
                                          (c[p.uniqueID] = {})),
                                        (l[e] = [z, _])),
                                      p !== t));

                                  );
                                return (
                                  (_ -= o),
                                  _ === i || (_ % i === 0 && _ / i >= 0)
                                );
                              }
                            };
                      },
                      PSEUDO: function (e, n) {
                        var o,
                          r =
                            E.pseudos[e] ||
                            E.setFilters[e.toLowerCase()] ||
                            t.error("unsupported pseudo: " + e);
                        return r[H]
                          ? r(n)
                          : r.length > 1
                          ? ((o = [e, e, "", n]),
                            E.setFilters.hasOwnProperty(e.toLowerCase())
                              ? i(function (e, t) {
                                  for (var i, o = r(e, n), a = o.length; a--; )
                                    (i = te(e, o[a])), (e[i] = !(t[i] = o[a]));
                                })
                              : function (e) {
                                  return r(e, 0, o);
                                })
                          : r;
                      },
                    },
                    pseudos: {
                      not: i(function (e) {
                        var t = [],
                          n = [],
                          o = A(e.replace(de, "$1"));
                        return o[H]
                          ? i(function (e, t, n, i) {
                              for (
                                var r, a = o(e, null, i, []), s = e.length;
                                s--;

                              )
                                (r = a[s]) && (e[s] = !(t[s] = r));
                            })
                          : function (e, i, r) {
                              return (
                                (t[0] = e),
                                o(t, null, r, n),
                                (t[0] = null),
                                !n.pop()
                              );
                            };
                      }),
                      has: i(function (e) {
                        return function (n) {
                          return t(e, n).length > 0;
                        };
                      }),
                      contains: i(function (e) {
                        return (
                          (e = e.replace(we, Se)),
                          function (t) {
                            return (t.textContent || C(t)).indexOf(e) > -1;
                          }
                        );
                      }),
                      lang: i(function (e) {
                        return (
                          fe.test(e || "") || t.error("unsupported lang: " + e),
                          (e = e.replace(we, Se).toLowerCase()),
                          function (t) {
                            var n;
                            do
                              if (
                                (n = R
                                  ? t.lang
                                  : t.getAttribute("xml:lang") ||
                                    t.getAttribute("lang"))
                              )
                                return (
                                  (n = n.toLowerCase()),
                                  n === e || 0 === n.indexOf(e + "-")
                                );
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                          }
                        );
                      }),
                      target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                      },
                      root: function (e) {
                        return e === N;
                      },
                      focus: function (e) {
                        return (
                          e === B.activeElement &&
                          (!B.hasFocus || B.hasFocus()) &&
                          !!(e.type || e.href || ~e.tabIndex)
                        );
                      },
                      enabled: u(!1),
                      disabled: u(!0),
                      checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                          ("input" === t && !!e.checked) ||
                          ("option" === t && !!e.selected)
                        );
                      },
                      selected: function (e) {
                        return (
                          e.parentNode && e.parentNode.selectedIndex,
                          e.selected === !0
                        );
                      },
                      empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                          if (e.nodeType < 6) return !1;
                        return !0;
                      },
                      parent: function (e) {
                        return !E.pseudos.empty(e);
                      },
                      header: function (e) {
                        return me.test(e.nodeName);
                      },
                      input: function (e) {
                        return ve.test(e.nodeName);
                      },
                      button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                          ("input" === t && "button" === e.type) ||
                          "button" === t
                        );
                      },
                      text: function (e) {
                        var t;
                        return (
                          "input" === e.nodeName.toLowerCase() &&
                          "text" === e.type &&
                          (null == (t = e.getAttribute("type")) ||
                            "text" === t.toLowerCase())
                        );
                      },
                      first: l(function () {
                        return [0];
                      }),
                      last: l(function (e, t) {
                        return [t - 1];
                      }),
                      eq: l(function (e, t, n) {
                        return [0 > n ? n + t : n];
                      }),
                      even: l(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e;
                      }),
                      odd: l(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e;
                      }),
                      lt: l(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n > t ? t : n; --i >= 0; )
                          e.push(i);
                        return e;
                      }),
                      gt: l(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
                        return e;
                      }),
                    },
                  }),
                (E.pseudos.nth = E.pseudos.eq);
              for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
              })
                E.pseudos[w] = s(w);
              for (w in { submit: !0, reset: !0 }) E.pseudos[w] = d(w);
              (p.prototype = E.filters = E.pseudos),
                (E.setFilters = new p()),
                (T = t.tokenize =
                  function (e, n) {
                    var i,
                      o,
                      r,
                      a,
                      s,
                      d,
                      u,
                      l = j[e + " "];
                    if (l) return n ? 0 : l.slice(0);
                    for (s = e, d = [], u = E.preFilter; s; ) {
                      (!i || (o = ue.exec(s))) &&
                        (o && (s = s.slice(o[0].length) || s),
                        d.push((r = []))),
                        (i = !1),
                        (o = le.exec(s)) &&
                          ((i = o.shift()),
                          r.push({ value: i, type: o[0].replace(de, " ") }),
                          (s = s.slice(i.length)));
                      for (a in E.filter)
                        !(o = ge[a].exec(s)) ||
                          (u[a] && !(o = u[a](o))) ||
                          ((i = o.shift()),
                          r.push({ value: i, type: a, matches: o }),
                          (s = s.slice(i.length)));
                      if (!i) break;
                    }
                    return n ? s.length : s ? t.error(e) : j(e, d).slice(0);
                  }),
                (A = t.compile =
                  function (e, t) {
                    var n,
                      i = [],
                      o = [],
                      r = J[e + " "];
                    if (!r) {
                      for (t || (t = T(e)), n = t.length; n--; )
                        (r = _(t[n])), r[H] ? i.push(r) : o.push(r);
                      (r = J(e, y(o, i))), (r.selector = e);
                    }
                    return r;
                  }),
                (x = t.select =
                  function (e, t, n, i) {
                    var o,
                      r,
                      a,
                      s,
                      d,
                      u = "function" == typeof e && e,
                      l = !i && T((e = u.selector || e));
                    if (((n = n || []), 1 === l.length)) {
                      if (
                        ((r = l[0] = l[0].slice(0)),
                        r.length > 2 &&
                          "ID" === (a = r[0]).type &&
                          9 === t.nodeType &&
                          R &&
                          E.relative[r[1].type])
                      ) {
                        if (
                          ((t = (E.find.ID(a.matches[0].replace(we, Se), t) ||
                            [])[0]),
                          !t)
                        )
                          return n;
                        u && (t = t.parentNode),
                          (e = e.slice(r.shift().value.length));
                      }
                      for (
                        o = ge.needsContext.test(e) ? 0 : r.length;
                        o-- && ((a = r[o]), !E.relative[(s = a.type)]);

                      )
                        if (
                          (d = E.find[s]) &&
                          (i = d(
                            a.matches[0].replace(we, Se),
                            (ye.test(r[0].type) && c(t.parentNode)) || t
                          ))
                        ) {
                          if ((r.splice(o, 1), (e = i.length && f(r)), !e))
                            return Q.apply(n, i), n;
                          break;
                        }
                    }
                    return (
                      (u || A(e, l))(
                        i,
                        t,
                        !R,
                        n,
                        !t || (ye.test(e) && c(t.parentNode)) || t
                      ),
                      n
                    );
                  }),
                (S.sortStable = H.split("").sort(X).join("") === H),
                (S.detectDuplicates = !!O),
                L(),
                (S.sortDetached = o(function (e) {
                  return (
                    1 & e.compareDocumentPosition(B.createElement("fieldset"))
                  );
                })),
                o(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  r("type|href|height|width", function (e, t, n) {
                    return n
                      ? void 0
                      : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                  }),
                (S.attributes &&
                  o(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  r("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase()
                      ? void 0
                      : e.defaultValue;
                  }),
                o(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  r(ne, function (e, t, n) {
                    var i;
                    return n
                      ? void 0
                      : e[t] === !0
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                  }),
                (SIZZLE_EXT.Sizzle = t);
            })(window);
            var _slice = Array.prototype.slice;
            try {
              _slice.call(document.documentElement);
            } catch (e) {
              Array.prototype.slice = function (e, t) {
                if (
                  ((t = "undefined" != typeof t ? t : this.length),
                  "[object Array]" === Object.prototype.toString.call(this))
                )
                  return _slice.call(this, e, t);
                var n,
                  i,
                  o = [],
                  r = this.length,
                  a = e || 0;
                a = a >= 0 ? a : r + a;
                var s = t ? t : r;
                if ((0 > t && (s = r + t), (i = s - a), i > 0))
                  if (((o = new Array(i)), this.charAt))
                    for (n = 0; i > n; n++) o[n] = this.charAt(a + n);
                  else for (n = 0; i > n; n++) o[n] = this[a + n];
                return o;
              };
            }
            String.prototype.trim ||
              (String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              });
            var shadowAPI = (function () {
                function e(e) {
                  return e ? e.indexOf(shadowAPI.PSEUDO_ELEMENT) > -1 : !1;
                }
                function t(e) {
                  var t = e.split(shadowAPI.PSEUDO_ELEMENT),
                    n = t.splice(0, 1)[0],
                    i = t.join(shadowAPI.PSEUDO_ELEMENT);
                  return { baseCss: n, shadowCss: i };
                }
                function n(e) {
                  return _.isFunction(e.composedPath);
                }
                return {
                  PSEUDO_ELEMENT: "::shadow",
                  getComposedPath: function (e) {
                    return n(e) ? e.composedPath() : null;
                  },
                  getShadowRoot: function (e) {
                    return e.shadowRoot;
                  },
                  isElementShadowRoot: function (e) {
                    return (
                      "undefined" != typeof ShadowRoot &&
                      e instanceof ShadowRoot &&
                      e.host
                    );
                  },
                  isShadowSelector: e,
                  getParent: function (e) {
                    return shadowAPI.isElementShadowRoot(e)
                      ? e.host
                      : e.parentNode;
                  },
                  wrapSizzle: function (n) {
                    var i = _.extend(function o(i, r, a, s) {
                      if (
                        e(i) &&
                        !_.isFunction(document.documentElement.attachShadow)
                      )
                        return n(
                          i.replace(
                            new RegExp(shadowAPI.PSEUDO_ELEMENT, "g"),
                            ""
                          ),
                          r,
                          a,
                          s
                        );
                      if (e(i)) {
                        var d = t(i),
                          u = o(d.baseCss, r);
                        return _.reduce(
                          u,
                          function (e, t) {
                            return shadowAPI.getShadowRoot(t)
                              ? e.concat(
                                  o(
                                    d.shadowCss,
                                    shadowAPI.getShadowRoot(t),
                                    a,
                                    s
                                  )
                                )
                              : e;
                          },
                          []
                        );
                      }
                      return n(i, r, a, s);
                    }, n);
                    return (
                      (i.matchesSelector = _.wrap(
                        i.matchesSelector,
                        function (t, n, o) {
                          return shadowAPI.isElementShadowRoot(n)
                            ? !1
                            : e(o)
                            ? i(o, document, null, [n]).length > 0
                            : t(n, o);
                        }
                      )),
                      i
                    );
                  },
                };
              })(),
              pendo = (windowOrMountPoint.pendo =
                windowOrMountPoint.pendo || {}),
              _ = (pendo._ = UNDERSCORE_EXT._),
              Sizzle = (pendo.Sizzle = shadowAPI.wrapSizzle(SIZZLE_EXT.Sizzle)),
              Zlib = (pendo.Zlib = {}),
              ENV = "prod",
              SERVER = "https://app.pendo.io",
              ASSET_HOST = "cdn.pendo.io",
              DESIGNER_ENV = "prod",
              VERSION = (pendo.VERSION = "2.86.0_prod"),
              PACKAGE_VERSION = "2.86.0",
              getUA = function () {
                return navigator.userAgent;
              },
              getVersion = function () {
                return isBrowserInQuirksmode()
                  ? VERSION + "+quirksmode"
                  : VERSION;
              },
              ConfigReader = (function () {
                function e(e) {
                  return h(E, { name: e }) || { name: e };
                }
                function t(e) {
                  return get(e, "supportedSources", [b, y, w]);
                }
                function n(e) {
                  return get(e, "key") || get(e, "name");
                }
                function i(e, t) {
                  if (t) {
                    var i = t(),
                      o = get(i.lookup, n(e));
                    return doesExist(o) ? o : undefined;
                  }
                }
                function o(e, t) {
                  var n = i(e, C[t]);
                  return new d(e.name, n, t);
                }
                function r(e, n) {
                  return (
                    (n = n || t(e)),
                    p(v(n, _.partial(o, e)), function (e) {
                      return doesExist(e.value);
                    })
                  );
                }
                function a(t, n, i) {
                  var o = e(t);
                  n = n || get(o, "defaultValue", null);
                  var a = new d(t, n, S),
                    s = r(o, i);
                  return o.useAnySource && doesExist(n)
                    ? g(s, function (e) {
                        return e.value !== n;
                      }) || a
                    : f(s) || a;
                }
                function s(t) {
                  var n = e(t),
                    i = p(r(n), function (e) {
                      return e.source !== S;
                    });
                  return i.length < 2
                    ? []
                    : l(m(i, "value"), function (e) {
                        return e === i[0].value;
                      })
                    ? []
                    : i;
                }
                function d(e, t, n) {
                  (this.name = e), (this.value = t), (this.source = n);
                }
                function u() {
                  var e = [];
                  return (
                    c(E, function (t) {
                      e.push({
                        name: t.name,
                        active: a(t.name),
                        conflicts: s(t.name),
                      });
                    }),
                    e
                  );
                }
                var l = _.all,
                  c = _.each,
                  p = _.filter,
                  f = _.first,
                  g = _.find,
                  h = _.findWhere,
                  v = _.map,
                  m = _.pluck,
                  b = "snippet",
                  y = "pendoconfig",
                  w = "global",
                  S = "default",
                  E = [
                    {
                      name: "preventCodeInjection",
                      defaultValue: !1,
                      supportedSources: [b, y, w],
                    },
                    {
                      name: "pendoCore",
                      defaultValue: !0,
                      supportedSources: [y],
                    },
                    { name: "apiKey", supportedSources: [b, y] },
                    { name: "additionalApiKeys", supportedSources: [b, y] },
                    {
                      name: "adoptPrioritizeAdoptGuides",
                      defaultValue: !1,
                      supportedSources: [y],
                    },
                    {
                      name: "enableDesignerKeyboardShortcut",
                      supportedSources: [b],
                    },
                    {
                      name: "disableDesignerKeyboardShortcut",
                      defaultValue: !1,
                      supportedSources: [y],
                    },
                    {
                      name: "pendoFeedback",
                      defaultValue: !1,
                      supportedSources: [y],
                    },
                    { name: "disableFeedbackAutoInit", supportedSources: [y] },
                    { name: "cookieDomain", supportedSources: [b, y] },
                    { name: "feedbackSettings", supportedSources: [y] },
                    { name: "htmlAttributes", supportedSources: [y] },
                    { name: "htmlAttributeBlacklist", supportedSources: [y] },
                    { name: "xhrTimings", supportedSources: [y] },
                    { name: "localStorageOnly", supportedSources: [b, y] },
                    { name: "disableCookies", supportedSources: [b, y] },
                    { name: "freeNPSData", supportedSources: [y] },
                    {
                      name: "feedbackSettings",
                      supportedSources: [y],
                      defaultValue: {},
                    },
                    { name: "contentHost", supportedSources: [b, y] },
                    {
                      name: "guideSeenTimeoutLength",
                      supportedSources: [y],
                      defaultValue: 1e4,
                    },
                    {
                      name: "disableGlobalCSS",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    { name: "disablePersistence", supportedSources: [y, b] },
                    {
                      name: "enableSignedMetadata",
                      supportedSources: [y],
                      defaultValue: !1,
                    },
                    {
                      name: "requireSignedMetadata",
                      supportedSources: [y],
                      defaultValue: !1,
                    },
                    {
                      name: "guideValidation",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    {
                      name: "enableGuideTimeout",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    {
                      name: "blockAgentMetadata",
                      supportedSources: [y],
                      defaultValue: !1,
                    },
                    { name: "adoptHost", supportedSources: [y] },
                    {
                      name: "allowedText",
                      supportedSources: [b, y],
                      defaultValue: [],
                    },
                    {
                      name: "excludeAllText",
                      supportedSources: [y, b],
                      defaultValue: !1,
                      useAnySource: !0,
                    },
                    { name: "dataHost", supportedSources: [b] },
                    { name: "ignoreHashRouting", supportedSources: [y, b] },
                    { name: "xhrWhitelist", supportedSources: [y] },
                    {
                      name: "preferBroadcastChannel",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    {
                      name: "preventUnloadListener",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    {
                      name: "guideValidation",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    {
                      name: "disableGuidePseudoStyles",
                      supportedSources: [b, y],
                      defaultValue: !1,
                    },
                    { name: "annotateUrl", supportedSources: [b] },
                    { name: "sanitizeUrl", supportedSources: [b] },
                    { name: "queryStringWhitelist", supportedSources: [b] },
                    { name: "delayGuides", supportedSources: [b] },
                    { name: "guides.delay", supportedSources: [b] },
                    { name: "guideTimeout", supportedSources: [b] },
                    { name: "guides.timeout", supportedSources: [b] },
                    { name: "disableGuides", supportedSources: [b] },
                    { name: "guides.disabled", supportedSources: [b] },
                    { name: "guides.tooltip.arrowSize", supportedSources: [b] },
                    { name: "guides.attackPointß", supportedSources: [b] },
                    { name: "disablePrefetch", supportedSources: [b, y] },
                  ],
                  C = {};
                return (
                  (C[b] = function () {
                    return {
                      lookup: originalOptions || window.pendo_options,
                      name: b,
                    };
                  }),
                  (C[y] = function () {
                    var e =
                      "undefined" != typeof PendoConfig ? PendoConfig : {};
                    return { lookup: e, name: y };
                  }),
                  (C[w] = function () {
                    return { lookup: pendo, name: w };
                  }),
                  (d.prototype.toString = function () {
                    return (
                      "Config option `" +
                      this.name +
                      "` with value `" +
                      this.value +
                      "` from source `" +
                      this.source +
                      "`"
                    );
                  }),
                  {
                    audit: u,
                    get: function (e, t) {
                      var n = a(e, t);
                      return n.value;
                    },
                    getLocalConfig: function (e, t) {
                      return a(e, t, [b]).value;
                    },
                    getHostedConfig: function (e, t) {
                      return a(e, t, [y]).value;
                    },
                    options: m(E, "name"),
                    validate: function (e) {
                      e.groupCollapsed("Validate Config options"),
                        c(u(), function (t) {
                          e.log(String(t.active)),
                            t.conflicts.length > 0 &&
                              (e.warn(
                                "Multiple sources found with values for " +
                                  t.name
                              ),
                              c(t.conflicts, function (t) {
                                e.warn(String(t));
                              }));
                        }),
                        e.groupEnd();
                    },
                  }
                );
              })(),
              pendoLocalStorage = (function () {
                var e = _.noop,
                  t = { getItem: e, setItem: e, removeItem: e };
                try {
                  var n = window.localStorage;
                  return n ? n : t;
                } catch (i) {
                  return t;
                }
              })(),
              q = (function () {
                var e = {},
                  t = function () {
                    var e = !1;
                    return function (t) {
                      return function () {
                        e || ((e = !0), t.apply(null, arguments));
                      };
                    };
                  },
                  n = function (e) {
                    var t = e && e.then;
                    return "object" == typeof e && "function" == typeof t
                      ? function () {
                          return t.apply(e, arguments);
                        }
                      : void 0;
                  },
                  i = function (t, n) {
                    var i = e.defer(),
                      o = function (e, t) {
                        setTimeout(function () {
                          var n;
                          try {
                            n = e(t);
                          } catch (o) {
                            return void i.reject(o);
                          }
                          n === i.promise
                            ? i.reject(
                                new TypeError(
                                  "Cannot resolve promise with itself"
                                )
                              )
                            : i.resolve(n);
                        }, 1);
                      },
                      a = function (e) {
                        t && t.call ? o(t, e) : i.resolve(e);
                      },
                      s = function (e) {
                        n && n.call ? o(n, e) : i.reject(e);
                      };
                    return {
                      promise: i.promise,
                      handle: function (e, t) {
                        e === r ? a(t) : s(t);
                      },
                    };
                  },
                  o = 0,
                  r = 1,
                  a = 2;
                return (
                  (e.defer = function () {
                    var e,
                      s = o,
                      d = [],
                      u = function (t, n) {
                        (s = t),
                          (e = n),
                          _.each(d, function (t) {
                            t.handle(s, e);
                          }),
                          (d = null);
                      },
                      l = function (e) {
                        u(r, e);
                      },
                      c = function (e) {
                        u(a, e);
                      },
                      p = function (t, n) {
                        var r = i(t, n);
                        return s === o ? d.push(r) : r.handle(s, e), r.promise;
                      },
                      f = function (e) {
                        var n = t();
                        try {
                          e(n(g), n(c));
                        } catch (i) {
                          n(c)(i);
                        }
                      },
                      g = function (e) {
                        var t;
                        try {
                          t = n(e);
                        } catch (i) {
                          return void c(i);
                        }
                        t ? f(t) : l(e);
                      },
                      h = t();
                    return {
                      resolve: h(g),
                      reject: h(c),
                      promise: {
                        then: p,
                        fail: function (e) {
                          return p(null, e);
                        },
                      },
                    };
                  }),
                  e
                );
              })();
            (q.all = function (e) {
              var t = q.defer(),
                n = _.isArray(e) ? [] : {},
                i = _.size(e);
              if (!i) return q.resolve(e);
              var o = !1;
              return (
                _.each(e, function (e, r) {
                  q.resolve(e).then(
                    function (e) {
                      (n[r] = e), 0 !== --i || o || t.resolve(n);
                    },
                    function (e) {
                      o || ((o = !0), t.reject(e));
                    }
                  );
                }),
                t.promise
              );
            }),
              (q.reject = function (e) {
                var t = q.defer();
                return t.reject(e), t.promise;
              }),
              (q.resolve = function (e) {
                var t = q.defer();
                return t.resolve(e), t.promise;
              });
            var makeSafe = function (e, t) {
              return (
                (t = !!t),
                function () {
                  try {
                    return e.apply(this, arguments);
                  } catch (n) {
                    t || writeException(n);
                  }
                }
              );
            };
            pendo.events = (function () {
              var e = Eventable.call({});
              return (
                _.each(
                  [
                    "ready",
                    "deliverablesLoaded",
                    "guidesFailed",
                    "guidesLoaded",
                    "validateGuide",
                    "validateLauncher",
                    "validateGlobalScript",
                  ],
                  function (t) {
                    e[t] = function (n) {
                      return _.isFunction(n)
                        ? e.on(t, n)
                        : e.trigger.apply(e, [t].concat(_.toArray(arguments)));
                    };
                  }
                ),
                e
              );
            })();
            var Events = (function () {
                function e(e, t) {
                  (this.name = e), (this.groups = t || []);
                }
                function t(e, t) {
                  var n = { type: e };
                  return doesExist(t) && _.isObject(t) && (n.data = t), n;
                }
                function n(e) {
                  s[e] = {
                    on: _.partial(s.on, e),
                    one: _.partial(s.one, e),
                    off: _.partial(s.off, e),
                  };
                }
                function i(e) {
                  var n = _.findWhere(a, { name: e }),
                    i = _.toArray(arguments).slice(1);
                  _.each(n.groups, function (t) {
                    var n = d[t](e, i);
                    u.apply(s, [t].concat(n));
                  });
                  var o = t(e, i);
                  return u.apply(s, [e].concat(o));
                }
                function o(e) {
                  var t = e.name;
                  s[t] = {
                    on: _.partial(s.on, t),
                    one: _.partial(s.one, t),
                    off: _.partial(s.off, t),
                    trigger: _.partial(i, t),
                  };
                }
                var r = { DEBUG: "debug", LIFECYCLE: "lifecycle" },
                  a = [
                    new e("guideListChanged", [r.DEBUG, r.LIFECYCLE]),
                    new e("guideSeen", [r.DEBUG, r.LIFECYCLE]),
                    new e("guideAdvanced", [r.DEBUG, r.LIFECYCLE]),
                    new e("guideDismissed", [r.DEBUG, r.LIFECYCLE]),
                    new e("guideSnoozed", [r.DEBUG, r.LIFECYCLE]),
                    new e("guideSnoozeCancelled", [r.DEBUG, r.LIFECYCLE]),
                    new e("guideTimeout", [r.DEBUG, r.LIFECYCLE]),
                    new e("identify", [r.DEBUG, r.LIFECYCLE]),
                    new e("metadata", [r.DEBUG, r.LIFECYCLE]),
                    new e("appUnloaded", [r.DEBUG, r.LIFECYCLE]),
                    new e("startPreview", [r.DEBUG]),
                    new e("resourceFetchFail", [r.DEBUG]),
                    new e("contentVerificationFail", [r.DEBUG]),
                    new e("contentValidationFail", [r.DEBUG]),
                    new e("renderFail", [r.DEBUG]),
                    new e("appUsage", [r.LIFECYCLE]),
                  ],
                  s = Eventable.call({}),
                  d = {
                    debug: function () {
                      return EventTracer.addTracerIds(t.apply(null, arguments));
                    },
                    lifecycle: t,
                  },
                  u = s.trigger;
                return (s.trigger = i), _.each(_.values(r), n), _.each(a, o), s;
              })(),
              rtrim = /^\s+|\s+$/g,
              trim = String.prototype.trim;
            trim ||
              (trim = function () {
                return this.replace(rtrim, "");
              });
            var whenLoadedCall = function (e) {
                "complete" === document.readyState
                  ? e()
                  : attachEventInternal(window, "load", e);
              },
              setFocusToActivationElement = function (e) {
                if (!pendo.designer) {
                  var t = _.isFunction(e.getGuide) && e.getGuide();
                  if (t && "building-block" === get(t, "attributes.type", "")) {
                    var n = get(t, "launchMethod", "").split("-"),
                      i = _.contains(n, "dom"),
                      o = _.contains(n, "badge");
                    if (o) {
                      var r = dom("#_pendo-badge_" + e.id),
                        a = r.find("input");
                      if (a.length < 1) return;
                      a[0].focus();
                    }
                    if (i) {
                      var s = dom(e.elementPathRule);
                      if (s.length < 1) return;
                      s[0].focus();
                    }
                  }
                }
              },
              escapeStringsInObject = function (e, t) {
                if ((t || (t = 0), t >= 200)) return e;
                if (_.isArray(e))
                  return _.map(e, function (e) {
                    return escapeStringsInObject(e, t + 1);
                  });
                if (
                  !_.isObject(e) ||
                  _.isDate(e) ||
                  _.isRegExp(e) ||
                  _.isElement(e)
                )
                  return _.isString(e) ? _.escape(e) : e;
                var n = {};
                return (
                  _.each(e, function (e, i) {
                    n[i] = escapeStringsInObject(e, t + 1);
                  }),
                  n
                );
              };
            pendo.compress = function (e) {
              var t = pendo.toUTF8Array(JSON.stringify(e)),
                n = new Zlib.Deflate(t),
                i = n.compress(),
                o = pendo.fromByteArray(i);
              return o;
            };
            var base64EncodeString = function (e) {
                var t = pendo.toUTF8Array(e);
                return pendo.fromByteArray(t);
              },
              crc32 = function (e) {
                if ("undefined" != typeof e) {
                  _.isString(e) || (e = JSON.stringify(e));
                  var t = pendo.toUTF8Array(e);
                  return Zlib.CRC32.calc(t, 0, t.length);
                }
              };
            (pendo.squeezeAndCompress = function (e) {
              var t = pendo.compress(e);
              return t;
            }),
              (pendo.letters = "abcdefghijklmnopqrstuvwxyz"),
              (pendo.charset =
                pendo.letters + pendo.letters.toUpperCase() + "1234567890"),
              (pendo.randomElement = function (e) {
                return e[Math.floor(Math.random() * e.length)];
              }),
              (pendo.randomString = function (e) {
                for (var t = "", n = pendo.charset.split(""), i = 0; e > i; i++)
                  t += pendo.randomElement(n);
                return t;
              }),
              (pendo.toUTF8Array = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e.charCodeAt(n);
                  128 > i
                    ? t.push(i)
                    : 2048 > i
                    ? t.push(192 | (i >> 6), 128 | (63 & i))
                    : 55296 > i || i >= 57344
                    ? t.push(
                        224 | (i >> 12),
                        128 | ((i >> 6) & 63),
                        128 | (63 & i)
                      )
                    : (n++,
                      (i =
                        65536 +
                        (((1023 & i) << 10) | (1023 & e.charCodeAt(n)))),
                      t.push(
                        240 | (i >> 18),
                        128 | ((i >> 12) & 63),
                        128 | ((i >> 6) & 63),
                        128 | (63 & i)
                      ));
                }
                return t;
              });
            var strContains = function (e, t, n) {
              return pendo.doesExist(e) && pendo.doesExist(t)
                ? (n && ((e = e.toLowerCase()), (t = t.toLowerCase())),
                  e.indexOf(t) > -1)
                : !1;
            };
            pendo.getNumberFromText = function (e) {
              var t = /-?[\d,]+\.?([\d,]+)*/,
                n = e.match(t);
              return n ? parseFloat(n[0].replace(/,/g, "")) : null;
            };
            var EventTracer = createEventTracer(window),
              _hasClass = function (e, t) {
                try {
                  var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                  return n.test(_getClass(e));
                } catch (i) {
                  return !1;
                }
              },
              _addClass = function (e, t) {
                try {
                  if (!_hasClass(e, t)) {
                    var n = trim.call(_getClass(e)) + " " + t;
                    _setClass(e, n);
                  }
                } catch (i) {}
              },
              _removeClass = function (e, t) {
                try {
                  if (_hasClass(e, t)) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)"),
                      i = _getClass(e).replace(n, " ");
                    _setClass(e, i);
                  }
                } catch (o) {}
              },
              _setClass = function (e, t) {
                _.isString(e.className)
                  ? (e.className = t)
                  : e.setAttribute("class", t);
              },
              _getClass = function (e) {
                try {
                  var t = e.className;
                  return (
                    (t =
                      _.isString(t) || !pendo.doesExist(t)
                        ? t
                        : e.getAttribute("class")),
                    t || ""
                  );
                } catch (n) {
                  return "";
                }
              },
              _getCss3Prop = function (e) {
                function t(e) {
                  return e.replace(/-([a-z])/gi, function (e, t) {
                    return t.toUpperCase();
                  });
                }
                var n = t(e),
                  i = n.substr(0, 1);
                return (n = i.toLowerCase() + n.substr(1));
              },
              cssNumber = {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
              },
              setStyle = function (e, t) {
                var n = styleToObject(t);
                setStyles(e, n);
              },
              styleToObject = function (e) {
                if (_.isString(e)) {
                  var t,
                    n,
                    i,
                    o,
                    r = e.split(";");
                  for (e = {}, i = 0; i < r.length; i++)
                    (t = r[i]),
                      (o = t.indexOf(":")),
                      (n = t.substring(0, o)),
                      (e[n] = t.substring(o + 1));
                }
                return e;
              },
              setStyles = function (e, t) {
                _.each(t, function (t, n) {
                  if (((n = trim.call(n)), "" !== n)) {
                    var i = _getCss3Prop(n);
                    !_.isNumber(t) || isNaN(t) || cssNumber[i]
                      ? _.isString(t) || (t = "" + t)
                      : (t = "" + t + "px");
                    var o = t.indexOf("!important");
                    if (-1 !== o)
                      try {
                        var r = trim.call(r.substring(0, o));
                        return void e.style.setProperty(n, r, "important");
                      } catch (a) {
                        return void (e.style.cssText += ";" + n + ":" + t);
                      }
                    else
                      try {
                        e.style[i] = trim.call(t);
                      } catch (a) {
                        log("failed to set style: " + n + " with value " + t);
                      }
                  }
                });
              },
              getScreenDimensions = function () {
                if (isBrowserInQuirksmode())
                  return {
                    width: document.documentElement.offsetWidth || 0,
                    height: document.documentElement.offsetHeight || 0,
                  };
                var e =
                    window.innerWidth || document.documentElement.clientWidth,
                  t =
                    window.innerHeight || document.documentElement.clientHeight;
                return { width: e, height: t };
              },
              _isInViewport = function (e) {
                var t = getScreenDimensions(),
                  n = documentScrollTop(),
                  i = documentScrollLeft();
                return (
                  e.top >= n &&
                  e.left >= i &&
                  e.top + e.height <= n + t.height &&
                  e.left + e.width <= i + t.width
                );
              },
              removeClass = function (e, t) {
                if ("string" == typeof e) {
                  var n = dom(e);
                  _.map(n, function (e) {
                    _removeClass(e, t);
                  });
                } else _removeClass(e, t);
              },
              addClass = function (e, t) {
                if ("string" == typeof e) {
                  var n = dom(e);
                  _.map(n, function (e) {
                    _addClass(e, t);
                  });
                } else _addClass(e, t);
              },
              removeNode = function (e) {
                e && e.parentNode && e.parentNode.removeChild(e);
              },
              getElements = _.compose(
                function (e) {
                  return Array.prototype.slice.call(e);
                },
                function (e) {
                  try {
                    return Sizzle(e);
                  } catch (t) {
                    return (
                      writeMessage("error using sizzle: " + t),
                      document.getElementsByTagName(e)
                    );
                  }
                }
              ),
              pickBestBODY = function (e, t) {
                try {
                  var n = t.children.length + t.offsetHeight + t.offsetWidth,
                    i = e.children.length + e.offsetHeight + e.offsetWidth;
                  return n - i;
                } catch (o) {
                  return (
                    log("error interrogating body elements: " + o),
                    writeMessage("error picking best body:" + o),
                    0
                  );
                }
              },
              getBody = function () {
                try {
                  var e = getElements("body");
                  return e && e.length > 1
                    ? (e.sort(pickBestBODY), e[0] || document.body)
                    : document.body &&
                      document.body.tagName &&
                      "body" !== document.body.tagName.toLowerCase()
                    ? document.documentElement
                    : document.body;
                } catch (t) {
                  return (
                    writeMessage("Error getting body element: " + t),
                    document.body
                  );
                }
              },
              checkIfElementNode = function (e) {
                var t =
                    "undefined" != typeof Node &&
                    "undefined" != typeof Node.ELEMENT_NODE,
                  n = t ? Node.ELEMENT_NODE : 1;
                return e && e.nodeType === n;
              },
              getComputedStyle_safe = makeSafe(function (e) {
                return checkIfElementNode(e)
                  ? window.getComputedStyle
                    ? getComputedStyle(e)
                    : e.currentStyle
                    ? e.currentStyle
                    : void 0
                  : void 0;
              }, !0),
              getClientRect = function (e) {
                var t = getBody();
                if (null !== e) {
                  if (e === t || e === document || e === window) {
                    var n = {
                      left: window.pageXOffset || t.scrollLeft,
                      top: window.pageYOffset || t.scrollTop,
                      width: window.innerWidth,
                      height: window.innerHeight,
                    };
                    return (
                      (n.right = n.left + n.width),
                      (n.bottom = n.top + n.height),
                      n
                    );
                  }
                  var i = getOffsetPosition(e);
                  return (
                    (i.right = i.left + i.width),
                    (i.bottom = i.top + i.height),
                    i
                  );
                }
              },
              intersectRect = function (e, t) {
                return e.top >= t.bottom
                  ? !1
                  : e.bottom <= t.top
                  ? !1
                  : e.left >= t.right
                  ? !1
                  : e.right <= t.left
                  ? !1
                  : !0;
              },
              getScrollParent = function (e, t) {
                t = t || /(auto|scroll|hidden)/;
                var n,
                  i,
                  o,
                  r = getBody();
                if (e === r || !isInDocument(e)) return null;
                for (i = e; i && i != r; ) {
                  if (((n = getComputedStyle_safe(i)), !n)) return null;
                  if (
                    ((o = n.position),
                    i !== e && t.test(n.overflow + n.overflowY + n.overflowX))
                  )
                    return i;
                  if (
                    "absolute" === o ||
                    ("fixed" === o && hasParentWithCssTransform(i))
                  )
                    i = i.offsetParent;
                  else {
                    if ("fixed" === o) return null;
                    i = i.parentNode;
                  }
                }
                return r;
              },
              OverflowDirection = {
                X: "x",
                Y: "y",
                BOTH: "both",
                NONE: "none",
              };
            _.extend(DomData.prototype, {
              cache: function (e) {
                if (!_.isObject(e)) return {};
                var t = e[this.ownerKey];
                return t || ((t = {}), (e[this.ownerKey] = t)), t;
              },
              set: function (e, t, n) {
                var i = this.cache(e);
                return (i[t] = n), i;
              },
              get: function (e, t) {
                return t === undefined
                  ? this.cache(e)
                  : e[this.ownerKey] && e[this.ownerKey][t];
              },
              remove: function (e, t) {
                var n = this.cache(e);
                delete n[t],
                  (t === undefined || _.isEmpty(n)) &&
                    (e[this.ownerKey] = undefined);
              },
            }),
              _.extend(dom, { data: new DomData() }),
              _.extend(dom.prototype, {
                findOrCreate: function (e) {
                  return this.length > 0 ? this : dom(e);
                },
                find: function (e) {
                  var t = dom();
                  return (
                    (t.context = this.context),
                    this.each(function () {
                      dom(e, this).each(function () {
                        t[t.length++] = this;
                      });
                    }),
                    t
                  );
                },
                each: function (e) {
                  for (var t = this, n = 0, i = t.length; i > n; ++n)
                    e.call(t[n], t[n], n);
                  return t;
                },
                html: function (e) {
                  return e === undefined
                    ? this.length
                      ? this[0].innerHTML
                      : this
                    : this.each(function () {
                        this.innerHTML = e;
                      });
                },
                text: function (e) {
                  var t = "innerText" in document.body;
                  return e === undefined
                    ? t
                      ? this.length
                        ? this[0].innerText
                        : this
                      : this.length
                      ? this[0].textContent
                      : this
                    : this.each(function () {
                        return (
                          setStyle(this, { "white-space": "pre-wrap" }),
                          t
                            ? void (this.innerText = e)
                            : void (this.textContent = e)
                        );
                      });
                },
                addClass: function (e) {
                  return (
                    (e = e.split(/\s+/)),
                    this.each(function (t) {
                      _.each(e, function (e) {
                        _addClass(t, e);
                      });
                    })
                  );
                },
                removeClass: function (e) {
                  return (
                    (e = e.split(/\s+/)),
                    this.each(function (t) {
                      _.each(e, function (e) {
                        _removeClass(t, e);
                      });
                    })
                  );
                },
                hasClass: function (e) {
                  e = e.split(/\s+/);
                  var t = !0;
                  return 0 === this.length
                    ? !1
                    : (this.each(function (n) {
                        _.each(e, function (e) {
                          t = t && _hasClass(n, e);
                        });
                      }),
                      t);
                },
                toggleClass: function (e) {
                  return (
                    (e = e.split(/\s+/)),
                    this.each(function (t) {
                      _.each(e, function (e) {
                        _hasClass(t, e) ? _removeClass(t, e) : _addClass(t, e);
                      });
                    })
                  );
                },
                css: function (e) {
                  return (
                    this.each(function () {
                      setStyle(this, e);
                    }),
                    this
                  );
                },
                appendTo: function (e) {
                  return dom(e).append(this), this;
                },
                append: function (e) {
                  var t = this;
                  return (
                    dom(e).each(function () {
                      t.length && t[0].appendChild(this),
                        isInDocument(this) &&
                          _.each(Sizzle("script", this), evalScript);
                    }),
                    t
                  );
                },
                prependTo: function (e) {
                  return dom(e).prepend(this), this;
                },
                prepend: function (e) {
                  var t = this;
                  if (t.length) {
                    var n = t[0],
                      i = n.childNodes[0];
                    dom(e).each(function () {
                      i ? dom(this).insertBefore(i) : dom(this).appendTo(n);
                    });
                  }
                  return t;
                },
                getParent: function () {
                  var e = dom(this)[0];
                  return e && e.parentNode ? dom(e.parentNode) : void 0;
                },
                insertBefore: function (e) {
                  var t = dom(e)[0];
                  t &&
                    t.parentNode &&
                    (t.parentNode.insertBefore(this[0], t),
                    isInDocument(document, this) &&
                      _.each(Sizzle("script", this), evalScript));
                },
                remove: function () {
                  return (
                    this.each(function () {
                      this.parentNode && this.parentNode.removeChild(this);
                    }),
                    this
                  );
                },
                attr: function (e, t) {
                  return t !== undefined
                    ? (this.each(function () {
                        this.setAttribute(e, t);
                      }),
                      this)
                    : this.length > 0
                    ? this[0].getAttribute(e)
                    : void 0;
                },
                closest: function (e) {
                  for (var t = this[0]; t && !Sizzle.matchesSelector(t, e); )
                    if (((t = t.parentNode), t === document)) return dom();
                  return dom(t);
                },
                eq: function (e) {
                  return dom(this[e]);
                },
                height: function (e) {
                  return this.length
                    ? e === undefined
                      ? this[0].offsetHeight
                      : ((this[0].style.height = e + "px"), this)
                    : void 0;
                },
                width: function (e) {
                  return this.length
                    ? e === undefined
                      ? this[0].offsetWidth
                      : ((this[0].style.width = e + "px"), this)
                    : void 0;
                },
                focus: function () {
                  return this.each(function () {
                    _.isFunction(this.focus) && this.focus();
                  });
                },
              }),
              _.extend(dom, {
                removeNode: removeNode,
                getClass: _getClass,
                hasClass: _hasClass,
                addClass: addClass,
                removeClass: removeClass,
                getBody: getBody,
                getComputedStyle: getComputedStyle_safe,
                getClientRect: getClientRect,
                intersectRect: intersectRect,
                getScrollParent: getScrollParent,
                isElementVisible: isElementVisible,
                scrollIntoView: scrollIntoView,
              });
            var CAPTURING_PHASE = 1;
            (dom.event = {
              add: function (e, t) {
                var n = dom.data.get(e);
                n.handle ||
                  (n.handle = function (t) {
                    dom.event.dispatch(e, t);
                  }),
                  (t.id = _.uniqueId());
                var i = t.capture ? "captureEvents" : "bubbleEvents",
                  o = (n[i] = n[i] || {}),
                  r = (o[t.type] = o[t.type] || []);
                r.length || attachEventInternal(e, t.type, n.handle, t.capture),
                  r.push(t);
              },
              dispatch: function (e, t) {
                if (e) {
                  var n = dom.data.get(e);
                  if (n) {
                    var i = (n.captureEvents || {})[t.type] || [],
                      o = (n.bubbleEvents || {})[t.type] || [],
                      r = i.concat(o);
                    if (r.length) {
                      var a = dom.data.get(t);
                      (a.handled = a.handled || {}),
                        _.each(r.slice(), function (n) {
                          if (
                            (getTarget(t) === e ||
                              !!n.capture === isCapturingPhase(t)) &&
                            !a.handled[n.id]
                          ) {
                            a.handled[n.id] = !0;
                            try {
                              pendo.doesExist(n.selector)
                                ? pendo.dom(getTarget(t)).closest(n.selector)
                                    .length > 0 && n.handler.call(e, t)
                                : n.handler.call(e, t);
                            } catch (i) {
                              logError(i);
                            }
                          }
                        });
                    }
                  }
                }
              },
              remove: function (e, t, n, i) {
                var o = dom.data.get(e);
                if (o) {
                  if (_.isFunction(n)) {
                    var r = i ? o.captureEvents : o.bubbleEvents;
                    if (!r) return;
                    var a = r[t];
                    if (!a) return;
                    var s = findIndex(a, function (e) {
                      return e.handler === n;
                    });
                    s >= 0 && a.splice(s, 1),
                      a.length ||
                        (delete r[t], detachEventInternal(e, t, o.handle, i));
                  } else
                    n === undefined &&
                      (o.captureEvents &&
                        o.captureEvents[t] &&
                        (delete o.captureEvents[t],
                        detachEventInternal(e, t, o.handle, !0)),
                      o.bubbleEvents &&
                        o.bubbleEvents[t] &&
                        (delete o.bubbleEvents[t],
                        detachEventInternal(e, t, o.handle)));
                  _.isEmpty(o.captureEvents) &&
                    _.isEmpty(o.bubbleEvents) &&
                    (dom.data.remove(e, "captureEvents"),
                    dom.data.remove(e, "bubbleEvents"),
                    dom.data.remove(e, "handle"));
                }
              },
              trigger: function (e) {
                var t = dom.data.get(e);
                if (!t.pendoStopped) {
                  if (!e.bubbles)
                    return void dom.event.dispatch(getTarget(e), e);
                  var n = getTarget(e);
                  if (n) {
                    for (var i = n, o = []; i; )
                      o.unshift(i), (i = i.parentNode || i.host);
                    o.unshift(window);
                    var r;
                    if (isCapturingPhase(e))
                      for (r = 0; r < o.length && !t.pendoStopped; ++r)
                        dom.event.dispatch(o[r], e);
                    else
                      for (r = o.length - 1; r >= 0 && !t.pendoStopped; --r)
                        dom.event.dispatch(o[r], e);
                  }
                }
              },
            }),
              _.extend(dom.prototype, {
                on: function (e, t, n, i) {
                  return (
                    _.isFunction(t) && ((i = n), (n = t), (t = null)),
                    (e = e.split(" ")),
                    this.each(function (o) {
                      _.each(e, function (e) {
                        dom.event.add(o, {
                          type: e,
                          selector: t,
                          handler: n,
                          capture: i,
                        });
                      });
                    })
                  );
                },
              });
            var isValidId = function (e) {
                return (
                  doesExist(e) &&
                  "" !== e &&
                  e !== SUBACCOUNT_DELIMITER &&
                  "boolean" != typeof e &&
                  "object" != typeof e &&
                  !isStringWhiteSpace(e)
                );
              },
              isAnonymousVisitor = function (e) {
                return e && "number" != typeof e
                  ? e.substring(0, pendo.TEMP_PREFIX.length) ===
                      pendo.TEMP_PREFIX
                  : !1;
              },
              shouldPersist = function () {
                var e = originalOptions || window.pendo_options || {};
                return !(
                  getPendoConfigValue("disablePersistence") ||
                  e.disablePersistence
                );
              },
              removeIdentificationCookies = function (e) {
                (e = e || pendo.apiKey),
                  (document.cookie =
                    "_pendo_visitorId." +
                    e +
                    "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"),
                  (document.cookie =
                    "_pendo_accountId." +
                    e +
                    "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"),
                  agentStorage.clear("visitorId"),
                  agentStorage.clear("accountId");
              },
              DEFAULT_VISITOR_ID = "VISITOR-UNIQUE-ID",
              isDefaultVisitor = function (e) {
                return DEFAULT_VISITOR_ID === e;
              },
              SUBACCOUNT_DELIMITER = "::",
              isSubaccount = function (e) {
                return new RegExp(SUBACCOUNT_DELIMITER).test(e);
              },
              shouldVisitorIdentityChange = function (e, t) {
                return isAnonymousVisitor(e)
                  ? isValidId(t)
                    ? isAnonymousVisitor(t)
                      ? (pendo.log("visitor is anonymous: " + t), !1)
                      : isDefaultVisitor(t)
                      ? (pendo.log("visitor id is the default: " + t), !1)
                      : (pendo.log(
                          "Re-mapping visitor identity from " + e + " to " + t
                        ),
                        !0)
                    : (pendo.log("Not valid visitor id: " + t), !1)
                  : (pendo.log(
                      "Not change an old, non-anonymous visitor id: " + e
                    ),
                    !1);
              },
              shouldAccountIdentityChange = function (e, t) {
                return isValidId(t)
                  ? (pendo.log(
                      "Re-mapping account identity from " + e + " to " + t
                    ),
                    e != t)
                  : (pendo.log("Not valid account id: " + t), !1);
              };
            (pendo.identify = makeSafe(function (e, t) {
              var n = "object" == typeof e,
                i = null,
                o = {};
              if (
                ((o.old_visitor_id = pendo.get_visitor_id()),
                (o.old_account_id = pendo.get_account_id()),
                n &&
                  ((i = e),
                  (i.visitor = i.visitor || {}),
                  (i.account = i.account || {}),
                  (i.parentAccount = i.parentAccount || {}),
                  (e = i.visitor.id),
                  (t = i.account.id),
                  t &&
                    !isSubaccount(t) &&
                    i.parentAccount.id &&
                    (t = "" + i.parentAccount.id + SUBACCOUNT_DELIMITER + t),
                  updateOptions(i)),
                !isValidId(e))
              )
                return void pendo.log("Invalid visitor id " + e);
              pendo.set_visitor_id(e),
                isValidId(t)
                  ? pendo.set_account_id(t)
                  : ((t = pendo.get_account_id()),
                    isValidId(t) ||
                      (agentStorage.clear("accountId"), (t = null)));
              var r = shouldVisitorIdentityChange(o.old_visitor_id, e),
                a = shouldAccountIdentityChange(o.old_account_id, t);
              if (r || a) {
                if (shouldInitializeFeedback(e) && !_.isEmpty(i)) {
                  var s = getPendoConfigValue("feedbackSettings"),
                    d = JSON.parse(JSON.stringify(i));
                  pendo.feedback.init(d, s);
                }
                (o.visitor_id = e),
                  (o.account_id = t),
                  collectEvent("identify", o),
                  flushLater(),
                  Events.identify.trigger(o);
              }
              o.old_visitor_id !== e && queueGuideReload();
            })),
              (pendo.get_visitor_id = function () {
                var e,
                  t = pendo.visitorId;
                return (
                  isValidId(t) ||
                    (shouldPersist()
                      ? ((e = agentStorage.read("visitorId")),
                        isValidId(e) ||
                          ((e = pendo.generate_unique_id(pendo.TEMP_PREFIX)),
                          agentStorage.write("visitorId", e)))
                      : (e = pendo.generate_unique_id(pendo.TEMP_PREFIX)),
                    (pendo.visitorId = e)),
                  pendo.visitorId
                );
              }),
              (pendo.set_visitor_id = function (e) {
                (pendo.visitorId = "" + e),
                  shouldPersist() &&
                    agentStorage.write(
                      "visitorId",
                      pendo.visitorId,
                      pendo.DEFAULT_EXPIRE_LEN,
                      !1,
                      !0
                    );
              }),
              (pendo.get_account_id = function () {
                if (!isValidId(pendo.accountId) && shouldPersist()) {
                  var e = agentStorage.read("accountId");
                  pendo.accountId = e;
                }
                return pendo.accountId;
              }),
              (pendo.set_account_id = function (e) {
                (pendo.accountId = "" + e),
                  isValidId(e) &&
                    shouldPersist() &&
                    agentStorage.write(
                      "accountId",
                      pendo.accountId,
                      null,
                      !1,
                      !0
                    );
              });
            var inMemoryCookies = {},
              cookieDomain,
              allowLocalStorageOnly = function () {
                return ConfigReader.get("localStorageOnly");
              },
              storageIsDisabled = function () {
                var e = getJwtInfoCopy();
                return (
                  ConfigReader.get("disableCookies") ||
                  (!!e.jwt && !!e.signingKeyName)
                );
              },
              getCookie = function (e) {
                var t;
                t =
                  storageIsDisabled() || allowLocalStorageOnly()
                    ? inMemoryCookies[e]
                    : document.cookie;
                var n;
                return (n = new RegExp("(^|; )" + e + "=([^;]*)").exec(t))
                  ? decodeURIComponent(n[2])
                  : null;
              },
              setCookie = function (e, t, n, i) {
                if (!isInPreviewMode()) {
                  var o = new Date();
                  o.setTime(o.getTime() + n);
                  var r =
                    e +
                    "=" +
                    encodeURIComponent(t) +
                    (n ? ";expires=" + o.toUTCString() : "") +
                    "; path=/" +
                    ("https:" === document.location.protocol || i
                      ? ";secure"
                      : "") +
                    "; SameSite=Strict";
                  cookieDomain && (r += ";domain=" + cookieDomain),
                    storageIsDisabled() || allowLocalStorageOnly()
                      ? (inMemoryCookies[e] = r)
                      : (document.cookie = r);
                }
              },
              getPendoCookieKey = function (e) {
                return "_pendo_" + e + "." + pendo.apiKey;
              };
            (pendo.get_pendo_cookie = function (e) {
              return getCookie(getPendoCookieKey(e));
            }),
              (pendo.DEFAULT_EXPIRE_LEN = 864e7),
              (pendo.set_pendo_cookie = function (e, t, n, i) {
                (n = n || pendo.DEFAULT_EXPIRE_LEN),
                  setCookie(getPendoCookieKey(e), t, n, i);
              });
            var agentStorage = (function () {
              function e() {
                return storageIsDisabled() ? !1 : t() ? !1 : d("localStorage");
              }
              function t() {
                return !!cookieDomain;
              }
              function n(e) {
                e.cache && (e.cache = {});
              }
              function i(t, n) {
                if (e()) {
                  var i = n ? t : getPendoCookieKey(t),
                    r = o(localStorage.getItem(i));
                  return null === r && s(t), r;
                }
                return n ? getCookie(t) : pendo.get_pendo_cookie(t);
              }
              function o(e) {
                if (null === e) return null;
                try {
                  var t = JSON.parse(e);
                  return t.ttl && t.ttl < new Date().getTime()
                    ? null
                    : String(t.value || t);
                } catch (n) {
                  return e;
                }
              }
              function r(t, i, o, r, s) {
                if ((n(d), e()))
                  try {
                    var u = r ? t : getPendoCookieKey(t);
                    return localStorage.setItem(u, a(i, o)), void n(d);
                  } catch (l) {
                    log("Error trying to write to Localstorage: " + l);
                  }
                return r
                  ? void setCookie(t, i, o, s)
                  : pendo.set_pendo_cookie(t, i, o, s);
              }
              function a(e, t) {
                if (!t) return e;
                var n = new Date().getTime() + t;
                return JSON.stringify({ ttl: n, value: e });
              }
              function s(t, n) {
                var i = n ? t : getPendoCookieKey(t);
                return e()
                  ? localStorage.removeItem(i)
                  : void (document.cookie =
                      i + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;");
              }
              var d = _.memoize(function (e) {
                var t;
                try {
                  t = window[e];
                  var n = "__storage_test__";
                  return t.setItem(n, n), t.removeItem(n), !0;
                } catch (i) {
                  return (
                    i instanceof DOMException &&
                    (22 === i.code ||
                      1014 === i.code ||
                      "QuotaExceededError" === i.name ||
                      "NS_ERROR_DOM_QUOTA_REACHED" === i.name) &&
                    t &&
                    0 !== t.length
                  );
                }
              });
              return { read: i, write: r, clear: s };
            })();
            !(function (e, t) {
              e.ajax = t();
            })(pendo, function () {
              function e(e) {
                var t = { status: e.status };
                try {
                  t.data = JSON.parse(e.responseText);
                } catch (n) {
                  t.data = e.responseText;
                }
                return t;
              }
              function t(t) {
                var n = q.defer(),
                  i = window.XMLHttpRequest || ActiveXObject,
                  o = new i("MSXML2.XMLHTTP.3.0");
                return (
                  o.open(t.method || "GET", t.url, !t.sync),
                  _.each(t.headers, function (e, t) {
                    o.setRequestHeader(t.toLowerCase(), e);
                  }),
                  (o.onreadystatechange = function () {
                    if (4 === o.readyState) {
                      var t = e(o);
                      o.status >= 200 && o.status < 300
                        ? n.resolve(t)
                        : n.reject(t);
                    }
                  }),
                  t.withCredentials && (o.withCredentials = !0),
                  t.data ? o.send(t.data) : o.send(),
                  n.promise
                );
              }
              function n(e, n) {
                return t({ method: "GET", url: e, headers: n });
              }
              function i(e, n, i) {
                return t({ method: "POST", url: e, data: n, headers: i });
              }
              function o(e, t, n) {
                return (
                  n || (n = {}),
                  (n["content-type"] = "application/json"),
                  (t = JSON.stringify(t)),
                  i(e, t, n)
                );
              }
              function r(e, t, n) {
                var i;
                if (_.isArray(t)) i = t;
                else {
                  if (!_.isObject(t)) return e ? e : "";
                  i = _.keys(t);
                }
                var o = _.map(i, function (e) {
                    return _.isArray(t)
                      ? encodeURIComponent(e)
                      : encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
                  }).join("&"),
                  r = e.split("#", 2),
                  a = r[0];
                return (
                  (n = "undefined" != typeof n ? n : r[1]),
                  [
                    encodeURI(a),
                    o ? (_.contains(e, "?") ? "&" : "?") + o : "",
                    n ? "#" + n : "",
                  ].join("")
                );
              }
              return _.extend(t, { get: n, post: i, postJSON: o, urlFor: r });
            }),
              (pendo.SIZE_UNIQUE_ID = 11);
            var pendoCore = getPendoCore();
            (pendo.generate_unique_id = function (e) {
              return e + pendo.randomString(pendo.SIZE_UNIQUE_ID);
            }),
              (pendo.TEMP_PREFIX = "_PENDO_T_"),
              (pendo.doesExist = doesExist);
            var pageLoad = makeSafe(function (e) {
                if (((e = e || pendo.url.get()), e && e !== pageLoad.lastUrl)) {
                  pageLoad.lastUrl = e;
                  var t = -1;
                  announceAgentLoaded(),
                    debug("sending load event for url " + e),
                    "undefined" != typeof performance &&
                      "undefined" != typeof performance.timing &&
                      (t =
                        performance.timing.loadEventStart -
                        performance.timing.fetchStart),
                    collectEvent("load", { load_time: t }, e),
                    queueGuideReload(e),
                    flushLater();
                }
              }),
              queueGuideReload = function (e) {
                pendoCore &&
                  (queueGuideReload.pending &&
                    clearTimeout(queueGuideReload.pending),
                  (queueGuideReload.pending = setTimeout(function () {
                    delete queueGuideReload.pending, reloadGuides(e);
                  }, 0)));
              },
              initializeCounter = 0,
              originalOptions = null,
              isFeedbackOn = getPendoConfigValue("pendoFeedback"),
              isDisableFeedbackAutoInitOn = getPendoConfigValue(
                "disableFeedbackAutoInit"
              ),
              initialize = makeSafe(function (e) {
                if ("complete" !== document.readyState)
                  return void enqueueCall("initialize", arguments);
                if (
                  (log("pendo.initialize called with " + JSON.stringify(e)),
                  pendo.apiKey)
                )
                  return void (
                    1 === initializeCounter++ &&
                    log(
                      [
                        "pendo.initialize only needs to be called once",
                        isSfdcLightning() ? " per namespace" : "",
                        ". Use pendo.updateOptions to update metadata after the agent has initialized.",
                      ].join("")
                    )
                  );
                if (
                  (EventErrorLogger.run(),
                  e || (e = {}),
                  _.isEmpty(getJwtInfoCopy()))
                ) {
                  var t = JWT.getJwtOptions(e, "initialize");
                  if (t)
                    return (
                      setJwtInfo(_.pick(e, "jwt", "signingKeyName")),
                      initialize(t)
                    );
                }
                if (_.isString(e))
                  return pendo.ajax.get(e).then(function (e) {
                    return initialize((PendoConfig = e.data));
                  });
                (originalOptions = e),
                  setUpdatedOptions(e),
                  (pendo.HOST = HOST = getDataHost());
                var n =
                  getOption("cookieDomain") ||
                  getPendoConfigValue("cookieDomain");
                if (
                  (n && setCookieDomain(n, location.host),
                  (pendo.apiKey = getApiKey(e)),
                  (pendo.additionalApiKeys = getAdditionalApiKeys(e)),
                  !pendo.apiKey &&
                    pendo.additionalApiKeys &&
                    pendo.additionalApiKeys.length &&
                    (pendo.apiKey = pendo.additionalApiKeys[0]),
                  !pendo.apiKey)
                )
                  return void debug(
                    "API key is not set, Pendo will not initialize."
                  );
                pendo.apiKey = "" + pendo.apiKey;
                for (var i = 0; i < pendo.additionalApiKeys.length; i++)
                  pendo.additionalApiKeys[i] = "" + pendo.additionalApiKeys[i];
                if (
                  (TextCapture.initialize(),
                  e.logStackTraces && (pendo.logStackTraces = e.logStackTraces),
                  pendoCore &&
                    ((pendo.disableGuideCenterContentSearch =
                      e.disableGuideCenterContentSearch),
                    registerEventHandlers(e),
                    listenToMaster(),
                    initGuides(),
                    wirePage(),
                    startDebuggingModuleIfEnabled(),
                    launchDesignerOrPreview(e)),
                  ConfigReader.get("preferBroadcastChannel") &&
                    SingletonMessageHandler.secure(),
                  shouldPersist() || removeIdentificationCookies(),
                  e.usePendoAgentAPI !== !0 && pendo.updateOptions(e),
                  e.visitorId && e.visitorId != DEFAULT_VISITOR_ID)
                )
                  pendo.identify(e.visitorId);
                else if (
                  e.visitor &&
                  e.visitor.id &&
                  e.visitor.id != DEFAULT_VISITOR_ID
                ) {
                  var o = null;
                  e.account && e.account.id && (o = e.account.id),
                    pendo.identify(e.visitor.id, o);
                }
                pendo.url.watch(pendo.pageLoad),
                  pageLoad(pendo.url.get()),
                  localStorageNavigation(e),
                  pendoCore && pendo.events.ready();
                var r = pendo.get_visitor_id();
                if (shouldInitializeFeedback(r)) {
                  var a = getPendoConfigValue("feedbackSettings");
                  pendo.feedback.init(getOptionsCopy(), a);
                }
                initializeCounter++, announceFrameToDesignerPlugin();
              }),
              isReady = function () {
                return pendo.doesExist(pendo.apiKey);
              },
              getOption = function (e, t) {
                return get(originalOptions, e, t);
              },
              updatedOptions = null,
              setUpdatedOptions = function (e) {
                updatedOptions = JSON.parse(JSON.stringify(e || {}));
              },
              getOptionsCopy = function () {
                return JSON.parse(
                  JSON.stringify(updatedOptions || originalOptions || {})
                );
              },
              jwtInfo = null,
              setJwtInfo = function (e) {
                jwtInfo = JSON.parse(JSON.stringify(e || {}));
              },
              getJwtInfoCopy = function () {
                return null !== jwtInfo ? jwtInfo : {};
              };
            pendo.getFeedbackSettings = function () {
              return JSON.parse(
                JSON.stringify(ConfigReader.get("feedbackSettings", {}))
              );
            };
            var HOST = getDataHost(),
              buildBaseDataUrl = function (e, t, n) {
                var i = HOST + "/data/" + e + "/" + t,
                  o = _.map(n, function (e, t) {
                    return t + "=" + e;
                  });
                return o.length > 0 && (i += "?" + o.join("&")), i;
              },
              writeGuideEvent = function (e) {
                var t = new Date().getTime(),
                  n = pendo.squeezeAndCompress([e]),
                  i = { ct: t, jzb: n, v: VERSION };
                (i = addAccountIdParamIfAdoptPartner(i, [e])),
                  writeBeacon("guide", i);
              },
              writeMessage = function (e) {
                (e += "v" + VERSION),
                  writeBeacon("log", { msg: e, version: VERSION });
              },
              writeException = function (e, t) {
                if (e && (!e || !e.logged)) {
                  t || (t = "pendo.io unhandled exception");
                  try {
                    e.logged = !0;
                  } catch (n) {}
                  var i = "[" + t + ": " + e.message + "]";
                  log(i);
                  var o = window.pendo_options || {};
                  e.stack &&
                  pendo.logStackTraces !== !1 &&
                  o.logStackTraces !== !1
                    ? writeErrorPOST(i + "\n" + e.stack)
                    : writeMessage(i);
                }
              };
            (fetchKeepalive.supported = function () {
              return (
                _.isFunction(window.fetch) &&
                "undefined" != typeof Request &&
                "keepalive" in new Request("")
              );
            }),
              (sendBeacon.supported = function () {
                return (
                  "undefined" != typeof Blob &&
                  _.isFunction(navigator.sendBeacon)
                );
              });
            var locked = !1,
              lockEvents = function () {
                return (
                  (locked = !0),
                  "Pendo Agent locked.  No more events will be written."
                );
              },
              unlockEvents = function () {
                return (
                  buffersClearAll(),
                  (locked = !1),
                  "Pendo Agent unlocked.  Events will be written."
                );
              },
              isUnlocked = function () {
                return !locked && pendoCore;
              },
              eventCache = [],
              trackEventCache = [],
              SEND_INTERVAL = 12e4,
              MAX_NUM_EVENTS = 16,
              URL_MAX_LENGTH = 2e3,
              ENCODED_EVENT_MAX_LENGTH = 1900,
              ENCODED_EVENT_MAX_POST_LENGTH = 65536,
              limitURLSize = function (e, t) {
                return (t = t || getURL()), t.substring(0, e);
              },
              isURLValid = function (e) {
                return !(!e || "" === e);
              },
              getURL = function () {
                return pendo.url.get();
              };
            pendo.buffers = {
              flush: _.noop,
              flushBy: _.noop,
              flushEvents: flushNow,
              flushTrackEvents: flushNow,
              flushSilos: flushNow,
              flushTrackEventSilos: flushNow,
              flushBeacons: flushNow,
              flushNow: flushNow,
              flushLater: flushLater,
              flushEvery: flushEvery,
              flushStop: flushStop,
              beacons: [],
              silos: [],
              trackEventSilos: [],
            };
            var defaultTrackName = "_PENDO_UNNAMED_",
              SILO_AVG_COMPRESSION_RATIO = 5,
              SILO_MAX_BYTES =
                ENCODED_EVENT_MAX_LENGTH * SILO_AVG_COMPRESSION_RATIO,
              events = (pendo.buffers.events = eventCache),
              trackEvents = (pendo.buffers.trackEvents = trackEventCache),
              eventQueue = createEventQueue({
                cache: events,
                silos: pendo.buffers.silos,
                apiKey: getAllApiKeys,
                beacon: "ptm",
                allowPost: !0,
              }),
              trackEventQueue = createEventQueue({
                cache: trackEvents,
                silos: pendo.buffers.trackEventSilos,
                apiKey: getAllApiKeys,
                beacon: "ptm",
                allowPost: !0,
                params: { type: "track" },
              }),
              WHITELIST_FREE_NPS = ["load", "meta", "identify"],
              GuideActivity = (function () {
                function e(e) {
                  return e && "click" === e.type;
                }
                function t(e) {
                  return "pendo-base" == e.id
                    ? !0
                    : f(e.parentElem)
                    ? t(e.parentElem)
                    : !1;
                }
                function n(e) {
                  return (
                    g(e.tag) &&
                    "button" == e.tag.toLowerCase() &&
                    (/^pendo-button/.test(e.id) ||
                      /^pendo-close-guide/.test(e.id))
                  );
                }
                function i(e) {
                  return (
                    g(e.tag) &&
                    "a" == e.tag.toLowerCase() &&
                    /^pendo-link/.test(e.id)
                  );
                }
                function o(o, r) {
                  return f(o) && t(o) && e(r) && (n(o) || i(o));
                }
                function r(e) {
                  var t = e.guide.activeModule;
                  return (
                    t &&
                    t.attributes &&
                    t.attributes.resourceCenter &&
                    "AnnouncementsModule" ===
                      t.attributes.resourceCenter.moduleId
                  );
                }
                function a(e) {
                  var t = pendo
                      .dom("#" + e)
                      .closest("[data-pendo-announcement-guide-id]"),
                    n = t.attr("data-pendo-announcement-guide-id"),
                    i = _.find(pendo.guides, function (e) {
                      return e.id === n;
                    });
                  return i ? { guide: i, step: i.steps[0] } : undefined;
                }
                function s(e, t) {
                  if (t.props && t.props.id && t.props.id === e) return t;
                  if (t.children !== undefined)
                    for (var n = 0; n < t.children.length; n++) {
                      var i = s(e, t.children[n]);
                      if (i !== undefined) return i;
                    }
                  return undefined;
                }
                function d(e) {
                  if (e !== undefined) {
                    if ("a" === e.type)
                      return [
                        {
                          action: "openLink",
                          url: sanitizeUrl(e.props.href),
                          target: e.props.target,
                        },
                      ];
                    if (e.actions !== undefined)
                      return _.map(e.actions, function (e) {
                        switch (e.action) {
                          case "openLink":
                            var t = h(e.parameters, { name: "url" }),
                              n = h(e.parameters, { name: "target" });
                            return {
                              action: e.action,
                              url: sanitizeUrl(t.value),
                              target: n.value,
                            };
                          case "submitPollAndGoToStep":
                          case "goToStep":
                            var i = h(e.parameters, { name: "goToStepId" });
                            return { action: e.action, guideStepId: i.value };
                          case "guideSnoozed":
                            var o = h(e.parameters, {
                                name: "snooze_duration",
                              }),
                              r = h(e.parameters, { name: "time_unit" });
                            return {
                              action: e.action,
                              duration: o.value,
                              timeUnit: r.value,
                            };
                          case "showGuide":
                          case "launchGuide":
                            var a = e.parameters[0];
                            return { action: e.action, guideId: a.value };
                          case "advanceGuide":
                          case "previousStep":
                          case "submitPoll":
                          case "dismissGuide":
                            return { action: e.action };
                          default:
                            return {};
                        }
                      });
                  }
                  return [];
                }
                function u(e) {
                  var t = getActiveGuide();
                  if (t && (!r(t) || (t = a(e.id)))) {
                    var n = s(e.id, t.step.domJson);
                    if (n) {
                      var i = TextCapture.isEnabled()
                          ? { ui_element_text: n && n.content }
                          : {},
                        o = d(n);
                      return createGuideEvent(
                        p(i, {
                          type: l,
                          visitorId: v(),
                          ui_element_id: e.id,
                          ui_element_type: e.tag,
                          ui_element_actions: o,
                          guideId: t.guide.id,
                          stepId: t.step.id,
                          duration: c(),
                          language: t.guide.language,
                        })
                      );
                    }
                  }
                }
                var l = "guideActivity",
                  c = function () {
                    return new Date().getTime() - seenTime;
                  },
                  p = _.extend,
                  f = _.isObject,
                  g = _.isString,
                  h = _.findWhere,
                  v = pendo.get_visitor_id;
                return {
                  type: l,
                  handler: function (e) {
                    var t = e.data[0],
                      n = e.data[1];
                    if (o(t, n)) {
                      var i = u(t);
                      i && stageGuideEvent(i);
                    }
                  },
                };
              })();
            Events.appUsage.on(GuideActivity.handler);
            var MAX_ATTRIBUTE_LENGTH = 256,
              MAX_ATTRIBUTES = 64,
              evt_map = {
                a: { events: ["click"], attr: ["href"] },
                button: { events: ["click"], attr: ["value", "name"] },
                img: { events: ["click"], attr: ["src", "alt"] },
                select: {
                  events: ["mouseup"],
                  attr: ["name", "type", "selectedIndex"],
                },
                textarea: { events: ["mouseup"], attr: ["name"] },
                'input[type="submit"]': {
                  events: ["click"],
                  attr: ["name", "type", "value"],
                },
                'input[type="button"]': {
                  events: ["click"],
                  attr: ["name", "type", "value"],
                },
                'input[type="radio"]': {
                  events: ["click"],
                  attr: ["name", "type"],
                },
                'input[type="checkbox"]': {
                  events: ["click"],
                  attr: ["name", "type"],
                },
                'input[type="password"]': {
                  events: ["click"],
                  attr: ["name", "type"],
                },
                'input[type="text"]': {
                  events: ["click"],
                  attr: ["name", "type"],
                },
              },
              handleEmbeddedData = function (e) {
                return e && 0 === e.indexOf("data:")
                  ? (debug("Embedded data provided in URI."),
                    e.substring(0, e.indexOf(",")))
                  : e + "";
              },
              extractAttribute = function (e, t, n) {
                if (!e || !e.nodeName) return null;
                var i = e.nodeName.toLowerCase();
                if (("img" == i && "src" == t) || ("a" == i && "href" == t)) {
                  var o = e.getAttribute(t);
                  return sanitizeUrl(handleEmbeddedData(o));
                }
                var r = getAttributeValue(e, t);
                return n && typeof r !== n
                  ? null
                  : r
                  ? _.isString(r)
                    ? trim.call(r).substring(0, MAX_ATTRIBUTE_LENGTH)
                    : r
                  : null;
              },
              asString = function (e) {
                return pendo.doesExist(e) ? "" + e : "";
              },
              nodeTypeEnum = {
                TEXT_ELEMENT: 3,
                ELEMENT_NODE: 1,
                DOCUMENT_NODE: 9,
                DOCUMENT_FRAGMENT_NODE: 11,
                CDATA_SECTION_NODE: 4,
              },
              extractElementContext = function (e) {
                var t = {};
                if (!e) return t;
                var n = getHtmlAttributeTester(
                    ConfigReader.get("htmlAttributes")
                  ),
                  i = getHtmlAttributeTester(
                    ConfigReader.get("htmlAttributeBlacklist")
                  );
                (t.tag = shadowAPI.isElementShadowRoot(e)
                  ? "#shadow-root"
                  : e.nodeName || ""),
                  (t.id = asString(e.id)),
                  (t.cls = asString(dom.getClass(e))),
                  i("title") ||
                    (t.title = extractAttribute(e, "title", "string"));
                var o = (t.tag || "").toLowerCase();
                "input" === o && (o += '[type="' + e.type + '"]'),
                  (t.attrs = {});
                var r = filterAttributeList(
                  e.attributes,
                  evt_map[o] && evt_map[o].attr,
                  n,
                  i
                );
                if (
                  (_.each(r, function (n) {
                    t.attrs[n.toLowerCase()] = extractAttribute(e, n);
                  }),
                  e.parentNode && e.parentNode.childNodes)
                ) {
                  var a = _.chain(e.parentNode.childNodes);
                  (t.myIndex = a.indexOf(e).value()),
                    (t.childIndex = a
                      .filter(function (e) {
                        return e.nodeType == nodeTypeEnum.ELEMENT_NODE;
                      })
                      .indexOf(e)
                      .value());
                }
                return t;
              },
              isNodeTheRoot = function (e) {
                return (
                  "BODY" === e.nodeName ||
                  (null === e.parentNode && !shadowAPI.isElementShadowRoot(e))
                );
              },
              extractElementTreeContext = function (e) {
                var t,
                  n = {},
                  i = n,
                  o = e;
                if (!e) return n;
                do {
                  t = o;
                  var r = extractElementContext(t);
                  (i.parentElem = r), (i = r), (o = shadowAPI.getParent(t));
                } while (o && !isNodeTheRoot(t));
                if (
                  TextCapture.isEnabled() ||
                  (!TextCapture.isEnabled() && TextCapture.hasWhitelist())
                ) {
                  var a = TextCapture.getText(e, 128);
                  TextCapture.isTextCapturable(a) &&
                    (n.parentElem.txt = TextCapture.hasWhitelist()
                      ? trim.call(a)
                      : a);
                }
                return (
                  !TextCapture.isEnabled() &&
                    n.parentElem.value &&
                    (n.parentElem.value = null),
                  n.parentElem
                );
              },
              buttonNumMap = ["", "left", "right", "middle"],
              buttonLookup = function (e, t) {
                return buttonNumMap[t];
              },
              retTrue = function () {
                return !0;
              },
              getButtonType = function (e) {
                return e.which || e.button;
              },
              identity = function (e) {
                return e;
              },
              propGet = function (e, t) {
                return e[t];
              },
              COMMON_CLICK_ATTRS = [
                ["button", getButtonType, retTrue, buttonLookup],
                ["altKey", propGet, identity, identity],
                ["ctrlKey", propGet, identity, identity],
                ["metaKey", propGet, identity, identity],
                ["shiftKey", propGet, identity, identity],
              ],
              determineClickFlags = function (e, t) {
                for (var n = [], i = 0; i < COMMON_CLICK_ATTRS.length; i++) {
                  var o = COMMON_CLICK_ATTRS[i],
                    r = o[0],
                    a = o[1],
                    s = o[2],
                    d = o[3],
                    u = a(e, r);
                  s(u) && n.push(d(r, u));
                }
                return (t.flags = n), t;
              },
              evtHandlerExtFn = { click: determineClickFlags },
              getTarget = function (e) {
                var t = shadowAPI.getComposedPath(e);
                return t && t.length > 0 ? t[0] : e.target || e.srcElement;
              },
              getValidTarget = function (e) {
                return e.nodeType === nodeTypeEnum.TEXT_ELEMENT
                  ? e.parentNode
                  : e.nodeType === nodeTypeEnum.CDATA_SECTION_NODE
                  ? null
                  : e.correspondingUseElement
                  ? e.correspondingUseElement
                  : e;
              },
              handle_event = function (e) {
                try {
                  if (dom.data.get(e, "counted")) return;
                  dom.data.set(e, "counted", !0);
                  var t = getTarget(e),
                    n = e.type,
                    i = {},
                    o = evtHandlerExtFn[n];
                  if (
                    (o && (i = o(e, i)),
                    dom.data.get(e, "stopped") && (i.stopped = !0),
                    e.from && (i.from = e.from),
                    (t = getValidTarget(t)),
                    !t)
                  )
                    return void log(
                      "Invalid HTML target",
                      "event",
                      "dom",
                      "processing"
                    );
                  var r = extractElementTreeContext(t);
                  if ((_.extend(r, i), pageLoad(), "click" === n)) {
                    var a = collectEventProperties(t);
                    collectEvent(n, { target: r }, undefined, undefined, a);
                  } else collectEvent(n, { target: r });
                  Events.trigger("appUsage", r, e);
                } catch (s) {
                  writeException(s, "pendo.io while handling event");
                }
              },
              collectEventProperties = makeSafe(
                collectEventPropertiesForTarget
              ),
              listenForEvents = function (e) {
                _.each(e, function (e) {
                  attachEvent(document, e, handle_event, !0);
                });
              },
              DEBOUNCE_INTERVAL_CHANGE = 5e3,
              handle_change_event = _.debounce(
                handle_event,
                DEBOUNCE_INTERVAL_CHANGE,
                !0
              ),
              wirePage = function (e) {
                (e = e || ["click", "focus", "submit", "change"]),
                  _.contains(e, "change") &&
                    ((e = _.reject(e, function (e) {
                      return "change" === e;
                    })),
                    attachEventInternal(
                      document,
                      "change",
                      handle_change_event,
                      !0
                    )),
                  listenForEvents(e),
                  getPendoConfigValue("xhrTimings") && openXhrIntercept(),
                  ConfigReader.get("preventUnloadListener") !== !0 &&
                    attachEventInternal(window, "unload", function () {
                      flushNow(!0, { guaranteed: !0 }),
                        Events.appUnloaded.trigger();
                    }),
                  wireTurbolinks(),
                  interceptStopPropagation(window.Event, e),
                  wireSyntheticClicks(
                    handle_event,
                    pendo.sniffer.addEventListener
                  );
              },
              wireTurbolinks = function () {
                if ("undefined" != typeof Turbolinks) {
                  var e =
                    Turbolinks && Turbolinks.EVENTS && Turbolinks.EVENTS.LOAD;
                  e &&
                    attachEventInternal(document, e, function () {
                      pendo.url.get() === reloadGuides.lastUrl &&
                        (delete reloadGuides.lastUrl, queueGuideReload());
                    });
                }
              },
              stopEvent = function (e) {
                dom.data.set(e, "pendoStopped", !0),
                  e.stopPropagation
                    ? e.stopPropagation()
                    : (e.cancelBubble = !0),
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
              },
              getDefaultLogOverride = function (e) {
                var t = agentStorage.read("log-enabled", !0);
                return null !== t
                  ? "true" == t
                  : !_.contains(["prod", "prod-eu", "prod-us1", "rc"], e);
              },
              getDefaultActiveContexts = function () {
                var e = agentStorage.read("active-contexts", !0);
                return e ? e.split(",") : [];
              },
              enableLogging = function () {
                return canWeLog()
                  ? logOverride
                    ? "logging already enabled"
                    : (agentStorage.write("log-enabled", "true", null, !0),
                      (logOverride = !0),
                      "logging enabled")
                  : "logging unavailable";
              },
              disableLogging = function () {
                return logOverride
                  ? (agentStorage.write("log-enabled", "false", null, !0),
                    (logOverride = !1),
                    "logging disabled")
                  : "logging already disabled";
              },
              activeContexts = getDefaultActiveContexts(),
              logOverride = getDefaultLogOverride(ENV),
              createContexts = function (e, t) {
                return _.compact([].concat(e, t));
              },
              canWeLog = function (e) {
                return (
                  (e = e || "log"),
                  "undefined" != typeof console && _.isFunction(console[e])
                );
              },
              shouldWeLog = function (e) {
                return (
                  (e = createContexts(e)),
                  activeContexts.length > 0
                    ? _.intersection(activeContexts, e).length > 0
                    : !!logOverride || !!isDebuggingEnabled(!0)
                );
              },
              log = function (e, t) {
                (t = createContexts(t, _.tail(arguments, 2))),
                  canWeLog() &&
                    (shouldWeLog(t) && doConsoleLog(e), addToLogHistory(e, t));
              },
              MAX_HISTORY = 100,
              logHistory = [],
              addToLogHistory = function (e, t) {
                _.contains(t, "debug") ||
                  (logHistory.length == MAX_HISTORY && logHistory.shift(),
                  logHistory.push([e, t]));
              },
              showLogHistory = function (e) {
                (e = createContexts(e)),
                  _.each(
                    _.map(
                      _.filter(logHistory, function (t) {
                        return (
                          0 === e.length || _.intersection(e, t[1]).length > 0
                        );
                      }),
                      function (e) {
                        return e[0];
                      }
                    ),
                    function (e) {
                      doConsoleLog(e, "[Pendo-History] ");
                    }
                  );
              },
              getLoggedContexts = function () {
                return _.union.apply(
                  _,
                  _.map(logHistory, function (e) {
                    return e[1];
                  })
                );
              },
              getActiveContexts = function () {
                return activeContexts;
              },
              setActiveContexts = function (e) {
                (activeContexts = createContexts(e)),
                  agentStorage.write(
                    "active-contexts",
                    activeContexts.join(","),
                    null,
                    !0
                  );
              },
              doConsoleLog = function (e, t) {
                if (canWeLog())
                  if (((t = t || "[Agent] "), e && e.length)) {
                    var n = e.length > 1e3 ? e.length - 1e3 : 0;
                    n && (t += "..."), console.log(t + e.substring(n));
                  } else console.log(t + e);
              };
            (log.enableLogging = enableLogging),
              (log.disableLogging = disableLogging),
              (log.getActiveContexts = getActiveContexts),
              (log.setActiveContexts = setActiveContexts),
              (log.showLogHistory = showLogHistory),
              (log.getLoggedContexts = getLoggedContexts);
            var isOldIE = function (e, t) {
                return (
                  (e = e || 10),
                  (t = isNaN(trident) ? !1 : t ? t > trident : !0),
                  t && e > msie
                );
              },
              msie,
              trident,
              lowercase = function (e) {
                return isString(e) ? e.toLowerCase() : e;
              },
              determineMSIE = function (e) {
                var t = pint((/msie (\d+)/.exec(lowercase(e)) || [])[1]);
                return (
                  isNaN(t) &&
                    (t = pint(
                      (/trident\/.*; rv:(\d+)/.exec(lowercase(e)) || [])[1]
                    )),
                  t
                );
              };
            msie = determineMSIE(navigator.userAgent);
            var determineTrident = function (e, t) {
              var n = pint((/trident\/(\d+)/.exec(lowercase(e)) || [])[1]);
              return isNaN(n) && 7 == t && (n = 3), n;
            };
            trident = determineTrident(navigator.userAgent, msie);
            var eventSupport = {},
              android = pint(
                (/android (\d+)/.exec(
                  lowercase((window.navigator || {}).userAgent)
                ) || [])[1]
              ),
              boxee = /Boxee/i.test((window.navigator || {}).userAgent),
              pdocument = window.document || {},
              documentMode = pdocument.documentMode,
              vendorPrefix,
              vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/,
              bodyStyle = pdocument.body && pdocument.body.style,
              transitions = !1,
              animations = !1,
              match;
            if (bodyStyle) {
              for (var prop in bodyStyle)
                if ((match = vendorRegex.exec(prop))) {
                  (vendorPrefix = match[0]),
                    (vendorPrefix =
                      vendorPrefix.substr(0, 1).toUpperCase() +
                      vendorPrefix.substr(1));
                  break;
                }
              vendorPrefix ||
                (vendorPrefix = "WebkitOpacity" in bodyStyle && "webkit"),
                (transitions = !!(
                  "transition" in bodyStyle ||
                  vendorPrefix + "Transition" in bodyStyle
                )),
                (animations = !!(
                  "animation" in bodyStyle ||
                  vendorPrefix + "Animation" in bodyStyle
                )),
                !android ||
                  (transitions && animations) ||
                  ((transitions = isString(
                    pdocument.body.style.webkitTransition
                  )),
                  (animations = isString(
                    pdocument.body.style.webkitAnimation
                  )));
            }
            pendo._.extend(pendo, {
              sniffer: {
                history: !(
                  !(
                    window.history &&
                    isNativeCode(window.history.pushState) &&
                    isNativeCode(window.history.replaceState)
                  ) ||
                  4 > android ||
                  boxee
                ),
                hashchange:
                  "onhashchange" in window &&
                  (!documentMode || documentMode > 7),
                hasEvent: function (e) {
                  if ("input" == e && 9 == msie) return !1;
                  if (isUndefined(eventSupport[e])) {
                    var t = pdocument.createElement("div");
                    eventSupport[e] = "on" + e in t;
                  }
                  return eventSupport[e];
                },
                vendorPrefix: vendorPrefix,
                transitions: transitions,
                animations: animations,
                android: android,
                msie: msie,
                msieDocumentMode: documentMode,
                sri: "integrity" in document.createElement("script"),
                addEventListener: _.isFunction(window.addEventListener),
              },
            });
            var pSetTimeout = window.setTimeout,
              decodeURIComponent = _.isFunction(window.decodeURIComponent)
                ? window.decodeURIComponent
                : _.identity,
              encodeURIComponent = _.isFunction(window.encodeURIComponent)
                ? window.encodeURIComponent
                : _.identity,
              isElectron = function () {
                return (
                  window &&
                  window.process &&
                  window.process.versions &&
                  window.process.versions.electron
                );
              },
              getWindowLocation = function () {
                var e = window.location;
                return (
                  shouldIgnoreHashRouting() &&
                    (e = {
                      href: getHrefWithoutHash(e.href),
                      origin: e.origin,
                    }),
                  e
                );
              },
              electronResourcesPath = function () {
                return window.process.resourcesPath || "";
              },
              electronUserDirectory = function () {
                return window.process.env.PWD || "";
              },
              electronUserHomeDirectory = function () {
                return window.process.env.HOME || "";
              },
              electronAppName = function () {
                return window.process.env.npm_package_name || "";
              },
              getHref = function () {
                var e = pendo.url.getWindowLocation();
                if (pendo.url.isElectron()) {
                  var t = pendo.url.electronResourcesPath(),
                    n = pendo.url.electronUserDirectory(),
                    i = pendo.url.electronAppName(),
                    o = "https://" + e.href.replace(t, i);
                  return (
                    (o = o.replace(e.origin + n, i)),
                    (o = o.replace(pendo.url.electronUserHomeDirectory(), "")),
                    (o = o.replace("file:///", ""))
                  );
                }
                return annotateUrl(e.href);
              },
              getHrefWithoutHash = function (e) {
                return e.match(/(.+?)(?:#|$)/)[1];
              },
              shouldIgnoreHashRouting = function () {
                return ConfigReader.get("ignoreHashRouting") === !0;
              },
              pollFns = [],
              pollTimeout,
              addPollFn = function (e) {
                return (
                  isUndefined(pollTimeout) && startPoller(100, pSetTimeout),
                  pollFns.push(e),
                  e
                );
              },
              url = function (e) {
                var t;
                try {
                  t = getHref();
                } catch (n) {}
                return t;
              },
              urlChangeListeners = [],
              urlChangeInit = !1,
              onUrlChange = function (e) {
                if ((log("Initializing Pendo URL Watcher"), !urlChangeInit)) {
                  var t = pendo.sniffer;
                  if (t.history) {
                    var n = window.history;
                    _.each(["pushState", "replaceState"], function (e) {
                      n[e] = _.wrap(n[e], function (e) {
                        var t = e.apply(n, _.toArray(arguments).slice(1));
                        return (
                          getZoneSafeMethod("setTimeout")(fireUrlChange, 0), t
                        );
                      });
                    }),
                      attachEventInternal(window, "popstate", fireUrlChange);
                  }
                  t.hashchange &&
                    attachEventInternal(window, "hashchange", fireUrlChange),
                    (t.history && t.hashchange) || addPollFn(fireUrlChange),
                    (urlChangeInit = !0);
                }
                return urlChangeListeners.push(e), e;
              },
              clearList = function () {
                urlChangeListeners = [];
              },
              getProtocol = function () {
                return "https:";
              },
              URL_WHITELIST_KEY = "queryStringWhitelist",
              externalizeURL = function (e, t, n) {
                var i = n || ConfigReader.get(URL_WHITELIST_KEY);
                _.isFunction(i) && (i = i());
                var o = adjustUrl(e, t, i, !1);
                return (o = sanitizeUrl(o));
              },
              adjustQueryStringParams = function (e, t, n) {
                if (n && _.contains(t, "*")) return "";
                var i = queryStringToObject(e);
                return (
                  (i = n ? _.omit(i, t) : _.pick(i, t)), objectToQueryString(i)
                );
              },
              queryStringToObject = function (e) {
                var t = e.split("&");
                return _.reduce(
                  t,
                  function (e, t) {
                    return (t = t.split("=")), (e[t[0]] = t[1]), e;
                  },
                  {}
                );
              },
              objectToQueryString = function (e) {
                return _.reduce(
                  e,
                  function (e, t, n) {
                    var i = n;
                    return t && (i += "=" + t), e && (e += "&"), e + i;
                  },
                  ""
                );
              };
            pendo._.extend(pendo, {
              url: {
                watch: onUrlChange,
                get: url,
                externalizeURL: externalizeURL,
                getWindowLocation: getWindowLocation,
                clear: clearList,
                isElectron: isElectron,
                electronUserDirectory: electronUserDirectory,
                electronAppName: electronAppName,
                electronUserHomeDirectory: electronUserHomeDirectory,
                electronResourcesPath: electronResourcesPath,
              },
            });
            var lastBrowserUrl = getHref(),
              lastSavedOptions = null,
              metadataHash,
              getLocale = function () {
                var e = window.navigator;
                return (
                  (pendo._.isArray(e.languages)
                    ? e.languages[0]
                    : e.language ||
                      e.browserLanguage ||
                      e.systemLanguage ||
                      e.userLanguage) || ""
                )
                  .split("-")
                  .join("_");
              },
              OPTIONS_HASH_KEY_NAME = "meta",
              haveOptionsChanged = function (e) {
                "object" == typeof e && (e = crc32(e)),
                  "undefined" != typeof e && e.toString && (e = e.toString());
                var t = _.isNumber(metadataHash)
                  ? metadataHash
                  : agentStorage.read(OPTIONS_HASH_KEY_NAME);
                return "" + t !== e ? !0 : !1;
              },
              isScalar = function (e) {
                return _.any(
                  [
                    "Number",
                    "Boolean",
                    "Date",
                    "String",
                    "Null",
                    "NaN",
                    "Undefined",
                  ],
                  function (t) {
                    return _["is" + t](e);
                  }
                );
              },
              cleanupMetadata = function (e) {
                var t = {};
                return (
                  _.each(e, function (e, n) {
                    isScalar(e)
                      ? (t[n] = e)
                      : _.isArray(e) && (t[n] = _.filter(e, isScalar));
                  }),
                  t
                );
              },
              prepareOptions = function (e) {
                return (
                  _.isObject(e) || (e = {}),
                  _.isObject(e.visitor) || (e.visitor = {}),
                  _.isObject(e.account) || (e.account = {}),
                  _.isObject(e.parentAccount) || (e.parentAccount = {}),
                  e.visitor.id === DEFAULT_VISITOR_ID &&
                    (pendo.log("Missing visitor id."), delete e.visitor.id),
                  isValidId(e.account.id) &&
                    isValidId(e.parentAccount.id) &&
                    (isSubaccount(e.account.id)
                      ? (e.parentAccount.id =
                          e.account.id.split(SUBACCOUNT_DELIMITER)[0])
                      : (e.account.id =
                          "" +
                          e.parentAccount.id +
                          SUBACCOUNT_DELIMITER +
                          e.account.id)),
                  isValidId(e.account.id) &&
                    (pendo.set_account_id(e.account.id),
                    (e.account.id = pendo.get_account_id())),
                  isValidId(e.visitor.id) &&
                    pendo.identify(e.visitor.id, e.account.id),
                  (e.visitor.id = pendo.get_visitor_id()),
                  (e.visitor.language = getLocale()),
                  {
                    visitor: e.visitor,
                    account: cleanupMetadata(e.account),
                    parentAccount: e.parentAccount,
                    date: getDateForOptions(),
                    version: pendo.VERSION,
                  }
                );
              },
              getDateForOptions = function () {
                var e = new Date(),
                  t = e.getDate(),
                  n = e.getMonth() + 1,
                  i = e.getFullYear();
                return (
                  10 > t && (t = "0" + t),
                  10 > n && (n = "0" + n),
                  (e = t + "/" + n + "/" + i)
                );
              },
              validateOptions = function (e) {
                return e && pendo._.keys(e).length > 0;
              },
              updateOptions = makeSafe(function (e) {
                if (validateOptions(e)) {
                  if (e.jwt && e.signingKeyName) {
                    var t = JWT.getJwtOptions(e, "updateOptions");
                    t &&
                      (setJwtInfo(_.pick(e, "jwt", "signingKeyName")), (e = t));
                  }
                  (e = prepareOptions(e)),
                    setUpdatedOptions(e),
                    (getMetadata = function () {
                      return e;
                    }),
                    (pendo.getSerializedMetadata = function () {
                      return JSON.parse(JSON.stringify(e));
                    });
                  var n = crc32(e),
                    i = isMetadataBlocked();
                  haveOptionsChanged(n) &&
                    !i &&
                    (agentStorage.write(OPTIONS_HASH_KEY_NAME, n),
                    (lastSavedOptions = e),
                    (metadataHash = n),
                    collectEvent("meta", e),
                    flushLater(),
                    queueGuideReload(),
                    Events.metadata.trigger());
                }
              }),
              isMetadataBlocked = function () {
                var e = getPendoConfigValue("blockAgentMetadata");
                return e !== undefined ? e : !1;
              },
              getMetadata = function () {};
            (pendo.loadResource = function (e, t) {
              try {
                var n,
                  i = "text/css",
                  o = "text/javascript";
                _.isString(e) && (e = { url: e }),
                  (e.type = e.type || /\.css/.test(e.url) ? i : o);
                var r = null,
                  a =
                    document.getElementsByTagName("head")[0] ||
                    document.getElementsByTagName("body")[0];
                if (e.type === i) {
                  var s = document.createElement("link");
                  (s.type = i),
                    (s.rel = "stylesheet"),
                    (s.href = e.url),
                    ContentVerifier.addIntegrityAttribute(s, e.url),
                    (r = s);
                } else {
                  if (isSfdcLightning())
                    return (
                      (n = document.createElement("script")),
                      n.addEventListener("load", function () {
                        t(), removeNode(n);
                      }),
                      (n.type = o),
                      (n.src = e.url),
                      ContentVerifier.addIntegrityAttribute(n, e.url),
                      document.body.appendChild(n),
                      {}
                    );
                  (n = document.createElement("script")),
                    (n.type = o),
                    (n.async = !0),
                    (n.src = e.url),
                    ContentVerifier.addIntegrityAttribute(n, e.url),
                    (r = n);
                }
                return a.appendChild(r), pendo.loadWatcher(r, e.url, t), r;
              } catch (d) {
                return {};
              }
            }),
              (pendo.loadWatcher = function (e, t, n) {
                var i = !1;
                if (
                  pendo.doesExist(n) &&
                  ((e.onload = function () {
                    i !== !0 && ((i = !0), n(null, t));
                  }),
                  (e.onerror = function () {
                    pendo.tellMaster({
                      status: "error",
                      msg: "Failed to load script",
                      scriptURL: t,
                    });
                  }),
                  (e.onreadystatechange = function () {
                    i ||
                      (e.readyState &&
                        "loaded" != e.readyState &&
                        "complete" != e.readyState) ||
                      ((i = !0), n(null, t));
                  }),
                  "link" === e.tagName.toLowerCase())
                ) {
                  var o = 500;
                  setTimeout(function () {
                    if (!i) {
                      var e = new Image();
                      (e.onload = e.onerror =
                        function () {
                          i !== !0 && ((i = !0), n(null, t));
                        }),
                        (e.src = t);
                    }
                  }, o),
                    setTimeout(function () {
                      i ||
                        writeMessage(
                          "Failed to load " + t + " within 10 seconds"
                        );
                    }, 1e4);
                }
              }),
              (pendo.messageLogger = function (e) {
                var t = JSON.parse(e.data),
                  n = e.origin;
                debug(
                  pendo.app_name +
                    ": Message: " +
                    JSON.stringify(t) +
                    " from " +
                    n
                ),
                  pendo.tellMaster(
                    e.source,
                    {
                      status: "success",
                      msg: "ack",
                      originator: "messageLogger",
                    },
                    n
                  );
              }),
              (pendo.messageReceiver = function (e) {
                try {
                  pendo.messageDispatcher(
                    pendo.messageOriginTester(pendo.messageValidator(e))
                  );
                } catch (t) {
                  if ("ignore" !== t.message) {
                    var n =
                      "Error receiving msg: " +
                      JSON.stringify(e.data) +
                      ", Exception: " +
                      t;
                    pendo.log(n);
                  }
                }
              }),
              (pendo.messageValidator = function (e) {
                var t = e.data,
                  n = e.origin,
                  i = e.source;
                if (((t = JSON.parse(t)), t.action)) throw new Error("ignore");
                if (!t.type || "string" != typeof t.type)
                  throw new Error(
                    "Invalid Message: Missing 'type' in data format"
                  );
                return { data: t, origin: n, source: i };
              });
            var trustedOrigin = getTrustedOriginPattern([
              HOST,
              "https://demo.pendo-dev.com",
              SERVER,
              "https?://([a-zA-Z0-9-]+-dot-)?pendo-(dev|test|io|" +
                ENV +
                ").appspot.com",
            ]);
            pendo.messageOriginTester = function (e) {
              if (trustedOrigin.test(e.origin)) return e;
              throw new Error(
                "Received message from untrusted origin " + e.origin
              );
            };
            var designerWindow;
            pendo.onConnectMessage = function (e, t) {
              isUnlocked() &&
                (stopGuides(),
                lockEvents(),
                pendo.designerv2.hostConfig || store.dispatch("frames/leave"),
                (designerWindow = t.source),
                ConfigReader.get("preventUnloadListener") !== !0 &&
                  (window.onbeforeunload = function () {
                    unlockEvents(),
                      removeDesignerFunctionality(),
                      pendo.tellMaster(t.source, { type: "unload" }, "*");
                  }),
                _.isFunction(detachGuideEventHandlers) &&
                  detachGuideEventHandlers(),
                addDesignerFunctionality(),
                pendo.tellMaster(
                  t.source,
                  { status: "success", type: "connect" },
                  "*"
                ),
                pendo.findModuleByName("selection.js") &&
                  (pendo.log("Designer Modules already loaded."),
                  pendo.tellMaster({ type: "ready" })));
            };
            var onModuleMessage = function (e) {
                pendo.moduleLoader(e.moduleURL);
              },
              onEnableDebug = function (e) {
                addSafeWindowMessageListener(pendo.messageLogger);
              };
            pendo.MESSAGE_TYPES = {
              connect: pendo.onConnectMessage,
              disconnect: function (e) {},
              module: onModuleMessage,
              debug: onEnableDebug,
            };
            var registerMessageHandler = function (e, t) {
              pendo.tellMaster({ type: "msg-type-available", "msg-type": e }),
                (pendo.MESSAGE_TYPES[e] = t);
            };
            (pendo.messageDispatcher = function (e) {
              var t = e.data;
              pendo.doesExist(pendo.MESSAGE_TYPES[t.type]) &&
                pendo.MESSAGE_TYPES[t.type](t, e);
            }),
              (pendo.moduleRegistry = {}),
              (pendo.addModule = function (e) {
                if (
                  ((pendo.moduleRegistry[e] = {}),
                  "undefined" != typeof CKEDITOR)
                )
                  try {
                    CKEDITOR.config.customConfig = "";
                  } catch (t) {}
              }),
              (pendo.hasModule = function (e) {
                return pendo.doesExist(pendo.moduleRegistry[e]);
              }),
              (pendo.findModuleByName = function (e) {
                if (!pendo.moduleRegistry) return null;
                var t = function (e, t) {
                  return e.indexOf(t) >= 0;
                };
                for (var n in pendo.moduleRegistry) if (t(n, e)) return n;
                return null;
              }),
              (pendo.modulesWaiting = []),
              (pendo.loadModules = function () {
                if (!(pendo.modulesWaiting.length < 1)) {
                  var e = pendo.modulesWaiting.shift();
                  pendo.hasModule(e) ||
                    pendo.loadResource(e, function () {
                      pendo.addModule(e), pendo.loadModules();
                    });
                }
              }),
              (pendo.moduleLoader = function (e) {
                pendo.modulesWaiting.push(e),
                  pendo.modulesWaiting.length > 1 || pendo.loadModules();
              });
            var tellMaster = function (e, t, n) {
                var i = _.uniqueId("pendo-");
                try {
                  if (
                    ("undefined" == typeof t &&
                      "undefined" == typeof n &&
                      ((t = e),
                      (e = designerWindow || getDesignerWindow()),
                      (n = "*")),
                    (t.guid = i),
                    e && _.isFunction(e.postMessage))
                  ) {
                    var o = JSON.stringify(t);
                    e.postMessage(o, n);
                  }
                } catch (r) {
                  var a = (r && r.message) || "";
                  log("Failed to postMessage: " + a);
                }
                return i;
              },
              detectMaster = function () {
                return window != window.top;
              },
              getDesignerWindow = function () {
                var e = new RegExp("^" + HOST.replace(/^https?:/, "https?:"));
                return e.test(location.href) ? window.parent : window.top;
              },
              announceAgentLoaded = function () {
                if (detectMaster()) {
                  var e = getDesignerWindow();
                  pendo.tellMaster(
                    e,
                    { type: "load", url: location.toString() },
                    "*"
                  );
                }
              },
              listenToMaster = function () {
                (pendo.app_name = document.title),
                  detectMaster() &&
                    (pendo.log(pendo.app_name + ": listening to messages"),
                    pendo.doesExist(window.addEventListener) &&
                      window.addEventListener(
                        "message",
                        pendo.messageReceiver,
                        !1
                      )),
                  window.opener &&
                    pendo.doesExist(window.addEventListener) &&
                    _.isFunction(window.opener.postMessage) &&
                    (addSafeWindowMessageListener(launchPreviewListener),
                    addSafeWindowMessageListener(launchDesignerListener),
                    window.opener.postMessage({ type: "pendo::ready" }, "*"));
              },
              addSafeWindowMessageListener = function (e) {
                pendo.doesExist(window.addEventListener) &&
                  _.isFunction(window.addEventListener) &&
                  window.addEventListener(
                    "message",
                    messageOriginTester2(e),
                    !1
                  );
              },
              isBrowserInQuirksmode = function () {
                return isNaN(msie)
                  ? !1
                  : 11 == msie
                  ? !1
                  : "CSS1Compat" !== document.compatMode;
              },
              buildArrowDimensionsQM = function (e, t) {
                var n = e.height,
                  i = e.width;
                if ("top" == e.arrowPosition || "bottom" == e.arrowPosition) {
                  var o = 10,
                    r = 0;
                  return (
                    "top" == e.arrowPosition
                      ? ((e.top = t.top + t.height),
                        (r = -1),
                        (e.arrow.top = 3),
                        9 >= msie && (e.arrow.top = 6))
                      : "bottom" == e.arrowPosition &&
                        ((e.top = t.top - (n + pendo.TOOLTIP_ARROW_SIZE)),
                        (e.arrow.top = n - pendo.TOOLTIP_ARROW_SIZE),
                        10 == msie
                          ? e.arrow.top--
                          : 9 >= msie && (e.arrow.top += 4),
                        (r = 1)),
                    "left" == e.arrow.hbias
                      ? ((e.left =
                          t.left +
                          t.width / 2 -
                          (o + 2 * pendo.TOOLTIP_ARROW_SIZE)),
                        (e.arrow.left = o + pendo.TOOLTIP_ARROW_SIZE))
                      : "right" == e.arrow.hbias
                      ? ((e.left =
                          t.left -
                          i +
                          t.width / 2 +
                          (o + 2 * pendo.TOOLTIP_ARROW_SIZE)),
                        (e.arrow.left = i - 3 * pendo.TOOLTIP_ARROW_SIZE - o))
                      : ((e.left = t.left + t.width / 2 - i / 2),
                        (e.arrow.left = i / 2 - pendo.TOOLTIP_ARROW_SIZE)),
                    (e.arrow.border.top = e.arrow.top + r),
                    (e.arrow.border.left = e.arrow.left),
                    e
                  );
                }
                return (
                  "left" == e.arrow.hbias
                    ? ((e.left = t.left + t.width),
                      (e.arrow.left = 1),
                      (e.arrow.left += 5),
                      (e.arrow.border.left = e.arrow.left - 1))
                    : "right" == e.arrow.hbias &&
                      ((e.left = Math.max(
                        0,
                        t.left - i - pendo.TOOLTIP_ARROW_SIZE
                      )),
                      (e.arrow.left = i - pendo.TOOLTIP_ARROW_SIZE - 1),
                      (e.arrow.left += 5),
                      (e.arrow.border.left = e.arrow.left + 1)),
                  (e.top = t.top + t.height / 2 - n / 2),
                  (e.arrow.top = n / 2 - pendo.TOOLTIP_ARROW_SIZE),
                  (e.arrow.border.top = e.arrow.top),
                  e
                );
              },
              xhrEventCache = [],
              xhrEventQueue = createXhrEventQueue({
                cache: xhrEventCache,
                apiKey: function () {
                  return pendo.apiKey;
                },
                beacon: "xhr",
                shorten: {
                  fields: ["request_url", "browser_url"],
                  siloMaxLength: ENCODED_EVENT_MAX_LENGTH,
                },
              }),
              openXhrIntercept = function () {
                attachEventInternal(window, "unload", function () {
                  flushXhrNow({ guaranteed: !0 });
                }),
                  (function (e) {
                    XMLHttpRequest.prototype.open = function (t, n, i, o, r) {
                      var a = {};
                      this.addEventListener(
                        "readystatechange",
                        function () {
                          var e =
                            arguments[0].target ||
                            arguments[0].srcElement ||
                            arguments[0].currentTarget;
                          modifyXhrData(a, this.readyState, n, t, e);
                        },
                        !1
                      ),
                        e.apply(this, arguments);
                    };
                  })(XMLHttpRequest.prototype.open);
              },
              modifyXhrData = function (e, t, n, i, o) {
                if (1 === t) {
                  var r = pendo.get_visitor_id();
                  e.visitor_id = r;
                  var a = pendo.get_account_id();
                  (e.account_id = a),
                    (e.browser_url = getScrubbedXhrUrl(
                      pendo.url.getWindowLocation().href
                    )),
                    (e.browser_time = new Date().getTime()),
                    (e.request_method = i),
                    (e.type = "xhr");
                } else
                  4 === t &&
                    ((e.request_url = getScrubbedXhrUrl(o.responseURL)),
                    (e.response_status = o.status),
                    (e.duration = new Date().getTime() - e.browser_time),
                    xhrEventQueue.push(e));
              },
              getScrubbedXhrUrl = function (e) {
                var t = e ? e.indexOf("?") : -1,
                  n = -1 === t ? "" : e.slice(t + 1, e.length);
                return externalizeURL(
                  e,
                  n,
                  getPendoConfigValue("xhrWhitelist")
                );
              },
              flushXhrNow = function (e) {
                try {
                  xhrEventQueue.flush(e);
                } catch (t) {
                  writeException(t, "error while flushing xhr cache");
                }
              },
              TextCapture = (function () {
                function e() {
                  pendo.excludeAllText = ConfigReader.get(l);
                  var e = ConfigReader.get(u);
                  c = g(
                    e,
                    function (e, t) {
                      return f(t) ? ((e[t] = !0), e) : e;
                    },
                    {}
                  );
                }
                function t() {
                  return !pendo.excludeAllText;
                }
                function n(e) {
                  var n = trim.call(e);
                  return t() || p(c, n) || p(c, e);
                }
                function i() {
                  return h(c) > 0;
                }
                function o(e, t) {
                  var n,
                    i = "",
                    a = e.nodeType;
                  if (
                    ((t = t || 128),
                    a === nodeTypeEnum.TEXT_ELEMENT ||
                      a === nodeTypeEnum.CDATA_SECTION_NODE)
                  )
                    return e.nodeValue;
                  if (
                    !r(e) &&
                    (a === nodeTypeEnum.ELEMENT_NODE ||
                      a === nodeTypeEnum.DOCUMENT_NODE ||
                      a === nodeTypeEnum.DOCUMENT_FRAGMENT_NODE)
                  )
                    for (e = e.firstChild; e; e = e.nextSibling) {
                      if (((n = o(e, t - i.length)), (i + n).length >= t))
                        return i + d(n.substring(0, t - i.length));
                      i += n;
                    }
                  return i;
                }
                function r(e) {
                  return !e.tagName || "textarea" == e.tagName.toLowerCase();
                }
                function a(e) {
                  return e >= 55296 && 56319 >= e;
                }
                function s(e) {
                  return e >= 56320 && 57343 >= e;
                }
                function d(e) {
                  if (e.length < 1) return e;
                  var t = e.slice(-1).charCodeAt(0);
                  if (!a(t) && !s(t)) return e;
                  if (1 === e.length) return e.slice(0, -1);
                  if (a(t)) return e.slice(0, -1);
                  if (s(t)) {
                    var n = e.slice(-2).charCodeAt(0);
                    if (!a(n)) return e.slice(0, -1);
                  }
                  return e;
                }
                var u = "allowedText",
                  l = "excludeAllText",
                  c = {},
                  p = _.has,
                  f = _.isString,
                  g = _.reduce,
                  h = _.size;
                return {
                  initialize: e,
                  isEnabled: t,
                  isTextCapturable: n,
                  hasWhitelist: i,
                  getText: o,
                };
              })(),
              EventErrorLogger = (function () {
                function e(e) {
                  (getOption("enableDebugEvents") ||
                    getPendoConfigValue("enableDebugEvents")) &&
                    t(Events.debug, e);
                }
                function t(e, t) {
                  (s = []),
                    e.on(function (e) {
                      r(e);
                    }),
                    (d = setInterval(o, t || 5e3)),
                    ConfigReader.get("preventUnloadListener") !== !0 &&
                      attachEventInternal(window, "unload", o);
                }
                function n() {
                  clearInterval(d);
                }
                function i() {
                  detachEventInternal(window, "unload", o);
                }
                function o() {
                  if (0 !== s.length) {
                    var e = s;
                    (s = []), writeErrorPOST("[" + e.join(",") + "]");
                  }
                }
                function r(e) {
                  var t = JSON.stringify(e);
                  s.push(t);
                }
                function a() {
                  n(), i();
                }
                var s, d;
                return { run: e, stop: a };
              })();
            (pendo.validateInstall = function (e) {
              function t(t, i, o, r) {
                e
                  ? n.push({ type: o, message: i, value: r })
                  : r
                  ? console[t](i, r)
                  : console[t](i);
              }
              var n = [];
              if ("undefined" == typeof console || !console.group)
                return "Please run this test in the latest version of Chrome, Firefox, Safari, or Internet Explorer";
              e || console.group("Pendo Install Validation"),
                pendo.apiKey ||
                  t("error", "No Pendo API key configured.", "apiKey");
              var i = pendo.get_visitor_id();
              isAnonymousVisitor(i) &&
                t(
                  "warn",
                  'The current visitor is not identified and will be treated as "anonymous". Is this expected? (You might have used "VISITOR-UNIQUE-ID" as the visitor ID)',
                  "isAnonymousVisitor"
                ),
                isDefaultVisitor(i) &&
                  t(
                    "error",
                    "The current visitor ID matches the example visitor ID from the Pendo installation instructions.",
                    "isDefaultVisitor"
                  );
              var o = pendo.get_account_id();
              o ||
                t(
                  "warn",
                  "The current visitor is not associated with an account. Is this expected?",
                  "noVisitorInAccount"
                ),
                "ACCOUNT-UNIQUE-ID" === o &&
                  t(
                    "error",
                    "The current account ID matches the example account ID from the Pendo installation instructions.",
                    "exampleAccountId"
                  ),
                isFeedbackOn &&
                  Feedback.isUnsupportedIE() &&
                  t(
                    "warn",
                    "The current version of IE is not supported by Pendo Feedback",
                    "ieFeedbackSupport"
                  );
              var r = getMetadata();
              return (
                _.each(["visitor", "account", "parentAccount"], function (n) {
                  var i = r && r[n],
                    o = _.chain(i).keys().value();
                  o.length > 0
                    ? (e ||
                        console.group(n + " metadata (does this look right?):"),
                      _.each(i, function (e, i) {
                        _.isObject(e) && !_.isArray(e)
                          ? t(
                              "warn",
                              i + " is an object and will be ignored.",
                              n + "Metadata",
                              e
                            )
                          : _.isArray(e) && _.any(e, _.isObject)
                          ? t(
                              "warn",
                              i +
                                " contains object values. The objects will be ignored.",
                              n + "Metadata",
                              e
                            )
                          : t("log", i + ":", n + "Metadata", e);
                      }),
                      e || console.groupEnd())
                    : "parentAccount" !== n &&
                      t(
                        "warn",
                        "No " +
                          n +
                          " metadata found. Learn more about metadata here: http://help.pendo.io/resources/support-library/installation/metadata.html",
                        n + "MetaData"
                      );
                }),
                e ? n : void console.groupEnd()
              );
            }),
              (pendo.validateNativeMethods = function (e) {
                var t = [
                    { nativeType: Object.prototype, displayName: "Object  " },
                    { nativeType: Number.prototype, displayName: "Number  " },
                    { nativeType: String.prototype, displayName: "String  " },
                    { nativeType: Function.prototype, displayName: "Function" },
                    { nativeType: Boolean.prototype, displayName: "Boolean " },
                    { nativeType: Array.prototype, displayName: "Array   " },
                    { nativeType: Date.prototype, displayName: "Date    " },
                    { nativeType: RegExp.prototype, displayName: "RegExp  " },
                    {
                      nativeType: JSON,
                      displayName: "JSON    ",
                      propsToCheck: ["parse", "stringify"],
                    },
                    { nativeType: Math, displayName: "Math    " },
                    { nativeType: Promise.prototype, displayName: "Promise " },
                    {
                      nativeType: window,
                      displayName: "Window ",
                      propsToCheck: [
                        "alert",
                        "asap",
                        "atob",
                        "btoa",
                        "cancelAnimationFrame",
                        "clearImmediate",
                        "clearInterval",
                        "clearTimeout",
                        "close",
                        "confirm",
                        "getComputedStyle",
                        "getSelection",
                        "open",
                        "postMessage",
                        "prompt",
                        "requestAnimationFrame",
                        "scroll",
                        "scrollBy",
                        "scrollTo",
                        "setImmediate",
                        "setInterval",
                        "setTimeout",
                        "stop",
                        "XMLHttpRequest",
                        "decodeURI",
                        "decodeURIComponent",
                        "encodeURI",
                        "encodeURIComponent",
                      ],
                    },
                  ],
                  n = !1;
                _.each(t, function (e) {
                  var t = e.nativeType,
                    i = [],
                    o = e.propsToCheck || Object.getOwnPropertyNames(t);
                  _.each(o, function (e) {
                    try {
                      if (e && t[e] && "function" == typeof t[e]) {
                        var n = t[e].toString().includes("[native code]");
                        n || i.push(e);
                      }
                    } catch (o) {}
                  }),
                    i.length && ((e.nonNativeImplementations = i), (n = !0));
                });
                var i = { hasNonNativeMethods: n, implementations: [] };
                return (
                  e || console.group("Native javascript method check:"),
                  n
                    ? (e ||
                        console.warn(
                          "Pendo has detected that your application may be changing native javascript functionality. We suggest consulting an engineer or your CSM to better understand if these changes will negatively impact Pendo's ability to function properly"
                        ),
                      _.each(t, function (t) {
                        if (t.nonNativeImplementations) {
                          var n = t.displayName.trim();
                          return e
                            ? void i.implementations.push({
                                nativeType: n,
                                nonNativeImplementations:
                                  t.nonNativeImplementations,
                              })
                            : void console.warn(
                                n +
                                  " | Contains the following non-native implementations:",
                                t.nonNativeImplementations.sort().join(", ")
                              );
                        }
                      }),
                      e ? i : void console.groupEnd())
                    : e
                    ? i
                    : (console.log(
                        "Environment uses native javascript implementations"
                      ),
                      console.groupEnd())
                );
              }),
              (pendo.validateBuiltInGlobals = function (e) {
                var t = [];
                if (
                  ((_.isNumber(window.frames.length) &&
                    _.isFinite(window.frames.length) &&
                    pendo.Sizzle("iframe").length +
                      pendo.Sizzle("frame").length ===
                      window.frames.length) ||
                    t.push(
                      "Pendo has detected that window.frames.length has been modified"
                    ),
                  (window.Event && window.Event.prototype) ||
                    t.push(
                      "Pendo has detected that window.Event has been modified"
                    ),
                  t.length)
                ) {
                  if (e) return t;
                  console.group("Global variables:"),
                    pendo._.each(t, function (e) {
                      console.warn(e);
                    }),
                    console.groupEnd();
                }
              }),
              (pendo.validateEnvironment = function () {
                pendo.validateInstall(),
                  pendo.validateNativeMethods(),
                  pendo.validateBuiltInGlobals(),
                  ConfigReader.validate(console);
                try {
                  var e = pendo.url.externalizeURL();
                  console.log("URL used for data collection", e);
                } catch (t) {
                  console.log("Error getting Externalized URL", t);
                }
                try {
                  var n = getHref();
                  console.log("URL used for determining guides:", n);
                } catch (t) {
                  console.log("Error getting href", t);
                }
              });
            var AutoDisplay = (function () {
                function e() {
                  f.reset();
                }
                function t(e) {
                  return e && /auto/.test(e.launchMethod);
                }
                function n(e) {
                  return e.attributes && e.attributes.overrideAutoThrottling;
                }
                function i(e) {
                  return _.defaults(
                    _.groupBy(e, function (e) {
                      return n(e) ||
                        (_.isFunction(e.isPastSnooze) && e.isPastSnooze())
                        ? "override"
                        : "auto";
                    }),
                    { override: [], auto: [] }
                  );
                }
                function o(e, t) {
                  function n(e, t) {
                    return i[t] ? (e.push(i[t]), delete i[t], e) : e;
                  }
                  if (!_.isArray(t) || !t.length) return e;
                  var i = _.indexBy(e, "id"),
                    o = _.reduce(t, n, []);
                  return _.chain(e).pluck("id").reduce(n, o).value();
                }
                function r(e, n) {
                  var r = o(_.filter(e, t), n),
                    s = i(r),
                    d = _.find(e, function (e) {
                      return e.isTraining;
                    });
                  if (!d) return s;
                  var u = ConfigReader.get("adoptPrioritizeAdoptGuides");
                  return a(s, u);
                }
                function a(e, t) {
                  return (
                    (e.override = _.sortBy(e.override, function (e) {
                      return t ? (e.isTraining ? 0 : 1) : e.isTraining ? 1 : 0;
                    })),
                    (e.auto = _.sortBy(e.auto, function (e) {
                      return t ? (e.isTraining ? 0 : 1) : e.isTraining ? 1 : 0;
                    })),
                    e
                  );
                }
                function s(e) {
                  return Math.max(
                    e.latestDismissedAutoAt || -(1 / 0),
                    e.finalAdvancedAutoAt || -(1 / 0),
                    e.latestSnoozedAutoAt || -(1 / 0)
                  );
                }
                function d(e, t) {
                  var n = new Date(Math.max(e, 0));
                  return (
                    n.setHours(0, 0, 0, 0),
                    n.setDate(n.getDate() + t),
                    n.getTime()
                  );
                }
                function u(e, t) {
                  var n = t.interval,
                    i = (t.unit || "").toLowerCase();
                  if (_.isNumber(n) && isFinite(e)) {
                    if ("minute" === i) return 6e4 * n + e + 1;
                    if ("hour" === i) return 36e5 * n + e + 1;
                    if ("day" === i) return d(e, n);
                  } else if (_.isNumber(n)) return new Date().getTime();
                }
                function l(e, t, n) {
                  if (n && n.enabled) {
                    var i = u(t, n);
                    if (_.isNumber(i) && !isNaN(i)) return e >= i;
                  }
                  return !0;
                }
                function c(e) {
                  var t;
                  return (
                    f.eachUntil(e, function (e) {
                      return (
                        e.shouldAutoDisplay() && e.autoDisplay(),
                        e.isShown() ? ((t = e), !0) : void 0
                      );
                    }),
                    t
                  );
                }
                function p(e, t) {
                  var n = AutoDisplay.lastDismissedTime(t),
                    i = AutoDisplay.sortAndFilter(e, t.autoOrdering),
                    o = AutoDisplay.display(i.override);
                  return (
                    !o &&
                      AutoDisplay.canDisplay(getNow(), n, t.throttling) &&
                      (o = AutoDisplay.display(i.auto)),
                    o
                  );
                }
                var f = throttleIterator(
                  50,
                  createStatefulIterator(function (e) {
                    return e.id;
                  })
                );
                return {
                  reset: e,
                  canDisplay: l,
                  display: c,
                  lastDismissedTime: s,
                  sortAndFilter: r,
                  tryDisplay: p,
                  getNextAutoDisplayTime: u,
                  iterator: f,
                };
              })(),
              Permalink = (function () {
                function e(e) {
                  var t = e.url.get(),
                    n = {};
                  t.replace(
                    new RegExp("([^?=&]+)(=([^&#]*))?", "g"),
                    function (e, t, i, o) {
                      n[t] = o;
                    }
                  );
                  var i = n.pendo;
                  return i ? e.findGuideById(i) : null;
                }
                function t(e, t) {
                  t.showGuideById(e.id), (e.shownFromPermalink = !0);
                }
                function n(e) {
                  return !e.shownFromPermalink;
                }
                function i(e) {
                  var t = Permalink.getGuideFromUrl(e);
                  return t && Permalink.shouldShowPermalinkGuide(t)
                    ? (Permalink.showPermalinkGuide(t, e), !0)
                    : !1;
                }
                return {
                  tryDisplay: i,
                  getGuideFromUrl: e,
                  showPermalinkGuide: t,
                  shouldShowPermalinkGuide: n,
                };
              })(),
              GuideDisplay = (function () {
                function e(e) {
                  return {
                    then: function (t) {
                      return t(e);
                    },
                  };
                }
                function t(t) {
                  if (!t.getGuide().isModule) return e();
                  var i = BuildingBlockResourceCenter.getResourceCenter();
                  return i ? n(i.steps[0], "badge") : e();
                }
                function n(t, n) {
                  return AsyncContent.hasContent(t) &&
                    ContentValidation.valid(t)
                    ? (t._show(n), e(t.isShown()))
                    : AsyncContent.hasContent(t) && ContentValidation.invalid(t)
                    ? e(!1)
                    : (t.lock(),
                      AsyncContent.fetchContent(t)
                        .then(function () {
                          return "whatsnew" === t.type || t.isShown()
                            ? ContentValidation.validate(t.getGuide())
                            : !1;
                        })
                        .then(function () {
                          return "whatsnew" === t.type || t.isShown()
                            ? (t.unlock(), t._show(n), t.isShown())
                            : !1;
                        }));
                }
                function i(i, r) {
                  if (isPreviewing() && _.isFunction(i._show))
                    return i._show(r), e(i.isShown());
                  var a = i.getGuide();
                  return "whatsnew" === i.type
                    ? n(i, r)
                    : !store.getters["frames/hasFrames"]() ||
                      store.getters["frames/isGuideInThisFrame"]()(a)
                    ? t(i)
                        .then(function () {
                          return n(i, r);
                        })
                        .then(function (e) {
                          return e ? !0 : o(i, r);
                        })
                    : o(i, r);
                }
                function o(t, n) {
                  var i = t.getGuide();
                  return store.getters["frames/hasFrames"]() &&
                    store.getters["frames/isGuideInDifferentFrame"]()(i)
                    ? (t.lock(),
                      store
                        .dispatch("frames/showGuideStep", {
                          guideId: t.guideId,
                          stepId: t.id,
                          reason: n,
                        })
                        .then(
                          function (e) {
                            return t.unlock(), e.isShown;
                          },
                          function () {
                            return t.unlock(), !1;
                          }
                        ))
                    : e(!1);
                }
                return { show: i, showLocal: n };
              })(),
              ContentLoader = (function (e) {
                function t(t) {
                  try {
                    var n = s[t.id];
                    if (
                      (n && n.language !== t.language && delete s[t.id],
                      !s[t.id])
                    ) {
                      var i = [],
                        o = { deferred: {}, language: t.language },
                        u = !1;
                      if (((s[t.id] = o), GuideLoader.usesXhr() && t.domUrl))
                        (o.deferred.domJson = q.defer()),
                          e.ajax.get(d(t.domUrl)).then(function (e) {
                            (o.domJson = e.data), o.deferred.domJson.resolve();
                          }),
                          i.push(o.deferred.domJson.promise),
                          (u = !0);
                      else if (t.domJsonpUrl) {
                        o.deferred.domJson = q.defer();
                        var l = e.loadResource(d(t.domJsonpUrl), function () {
                          dom.removeNode(l);
                        });
                        i.push(o.deferred.domJson.promise), (u = !0);
                      }
                      if (
                        t.contentUrlJs &&
                        !getPendoConfigValue("preventCodeInjection")
                      ) {
                        o.deferred.content = q.defer();
                        var c = e.loadResource(
                          d(r(t.contentUrlJs)),
                          function () {
                            dom.removeNode(c);
                          }
                        );
                        i.push(o.deferred.content.promise),
                          t.contentUrlCss &&
                            ((o.deferred.css = q.defer()),
                            e.loadResource(
                              { url: d(t.contentUrlCss), type: "text/css" },
                              function () {
                                o.deferred.css.resolve();
                              }
                            ),
                            i.push(o.deferred.css.promise));
                      } else if (
                        t.contentUrl &&
                        !getPendoConfigValue("preventCodeInjection")
                      ) {
                        o.deferred.content = q.defer();
                        var p = e.loadResource(
                          a(d(t.contentUrl), ".js"),
                          function () {
                            dom.removeNode(p);
                          }
                        );
                        i.push(o.deferred.content.promise);
                      } else if (!u) return q.reject();
                      o.deferred.promise = q.all(i).then(function () {
                        return _.omit(o, "deferred");
                      });
                    }
                    return s[t.id].deferred.promise;
                  } catch (f) {
                    throw (Events.resourceFetchFail.trigger(t, f), f);
                  }
                }
                function n() {
                  s = {};
                }
                function i(e, t, n, i, o) {
                  if (_.isString(n)) {
                    _.isFunction(i) || (i = _.template(n));
                    var r = s[e + t];
                    r &&
                      r.deferred.content &&
                      ((r.content = n),
                      (r.template = i),
                      (r.script = o),
                      r.deferred.content.resolve());
                  }
                }
                function o(e, t, n) {
                  var i = s[e + t];
                  i &&
                    i.deferred.domJson &&
                    ((i.domJson = n), i.deferred.domJson.resolve());
                }
                function r(t) {
                  if (isSfdcLightning()) {
                    var n = t
                        .replace(/^https?:\/\/[^/]+\/guide-content\//, "")
                        .split("/"),
                      i = n[0],
                      o = $A.get(
                        "$Resource.pendoGuide" + base32Encode(e.toUTF8Array(i))
                      );
                    if (_.isString(o)) return o + "/" + n.join("/");
                  }
                  return t;
                }
                function a(e, t) {
                  if (!_.isString(e)) return e;
                  var n = _.indexOf(e, "?");
                  return 0 > n ? e + t : e.substring(0, n) + t + e.substring(n);
                }
                (e.guideContent = i), (e.receiveDomStructureJson = o);
                var s = {},
                  d = _.compose(function (e) {
                    var t = getContentHostRegex();
                    if (t) {
                      var n = new RegExp(t);
                      n.test(e) ||
                        writeException(
                          new Error("Failed to verify URL: " + e + " vs " + t),
                          "cname contentHost verification"
                        );
                    }
                    return e;
                  }, replaceWithContentHost);
                return { load: t, reset: n };
              })(pendo),
              ContentVerifier = (function () {
                function e(e) {
                  return _.isString
                    ? e.replace(/-/g, "+").replace(/_/g, "/")
                    : e;
                }
                function t(t, i) {
                  if (n() && pendo.sniffer.sri) {
                    var o = parseContentUrl(i),
                      r = _.find(["sha512", "sha384", "sha256"], function (e) {
                        return !!o.query[e];
                      });
                    r &&
                      ((t.integrity = r + "-" + e(o.query[r])),
                      t.setAttribute("crossorigin", "anonymous"));
                  }
                }
                function n() {
                  return ConfigReader.get("guideValidation");
                }
                function i(e) {
                  try {
                    var t = [];
                    return (
                      !GuideLoader.usesXhr() && e.domJsonpUrl
                        ? t.push(d(e, "domJsonpUrl"))
                        : GuideLoader.usesXhr() &&
                          e.domUrl &&
                          t.push(s(e, "domUrl")),
                      e.contentUrlJs
                        ? t.push(d(e, "contentUrlJs"))
                        : e.contentUrl && t.push(d(e, "contentUrl")),
                      q.all(t)
                    );
                  } catch (n) {
                    throw (Events.contentVerificatonFail.trigger(e, n), n);
                  }
                }
                function o(e) {
                  return function (t) {
                    return n() ? e(t) : q.resolve();
                  };
                }
                function r(e, t) {
                  return function (n) {
                    return e.failed[n.id]
                      ? q.reject()
                      : e.verified[n.id]
                      ? q.resolve()
                      : t(n).then(
                          function () {
                            e.verified[n.id] = !0;
                          },
                          function (t) {
                            return (e.failed[n.id] = !0), q.reject(t);
                          }
                        );
                  };
                }
                function a(e, t) {
                  return function (n) {
                    return t(n).then(_.noop, function (t) {
                      return /verify/.test(t) && e(t), q.reject(t);
                    });
                  };
                }
                function s(e, t) {
                  var n = e[t];
                  if (!_.isString(n))
                    return q.reject('unable to parse "' + n + '"');
                  var i = u(e, t);
                  return pendo.ajax.get(n).then(function (e) {
                    return l(e.data) !== i
                      ? q.reject('Unable to verify content at "' + n + '"')
                      : void 0;
                  });
                }
                function d(e, t) {
                  var n = e[t];
                  return pendo.sniffer.sri && /[?&]sha(256|384|512)=/.test(n)
                    ? q.resolve()
                    : s(e, t);
                }
                function u(e, t) {
                  var n = { domUrl: "domHash", domJsonpUrl: "domJsonpHash" },
                    i = n[t];
                  return e[i] || getHashFromContentUrl(e[t]);
                }
                function l(e) {
                  "object" == typeof e && (e = JSON.stringify(e));
                  var t = sha1.create();
                  return t.update(e), pendo.fromByteArray(t.digest());
                }
                function c() {
                  (p.failed = {}), (p.verified = {});
                }
                var p = { failed: {}, verified: {} },
                  f = o(r(p, a(writeErrorPOST, i)));
                return { addIntegrityAttribute: t, verify: f, reset: c };
              })(),
              BANNER_DEFAULT_HEIGHT = 500,
              BANNER_CSS_NAME = "_pendo-guide-banner_",
              ContentValidation = (function () {
                function e(e) {
                  if (!p()) return !0;
                  var t = c[e.guideId];
                  return t ? t.status === d : !1;
                }
                function t(e) {
                  if (!p()) return !1;
                  var t = c[e.guideId];
                  return t ? t.status === u : !1;
                }
                function n(e) {
                  return get(e, "attributes.resourceCenter.isTopLevel", !1);
                }
                function i(e) {
                  var t = BuildingBlockResourceCenter.findResourceCenterModules(
                      e,
                      activeGuides
                    ),
                    n = [e].concat(t);
                  return q.all(_.map(n, o));
                }
                function o(e) {
                  var t = c[e.id];
                  return (
                    t || ((t = {}), (c[e.id] = t)),
                    t.contentPromise || (t.contentPromise = e.fetchContent()),
                    t.contentPromise.then(function () {
                      var n = JSON.stringify(e.signature()),
                        i = e.id + "-" + crc32(n);
                      t[i] || ((t[i] = { status: l }), (t.status = l));
                      var o = t[i].promise;
                      return o
                        ? o
                        : ((o = pendo.events.validateGuide(n, e).then(
                            function () {
                              (t[i].status = d), (t.status = d);
                            },
                            function (e) {
                              return (
                                (t[i].status = u), (t.status = u), q.reject(e)
                              );
                            }
                          )),
                          (t[i].promise = o),
                          o);
                    })
                  );
                }
                function r(e) {
                  function t(e, t) {
                    var n = get(
                      e,
                      "guide.translationStates." +
                        e.language +
                        ".stepTranslations." +
                        e.id
                    );
                    return {
                      contentUrl: e.contentUrl,
                      contentUrlCss: e.contentUrlCss,
                      contentUrlJs: e.contentUrlJs,
                      domUrl: e.domUrl,
                      domJsonpUrl: e.domJsonpUrl,
                      domHash: n && n.domHash,
                      domJsonpHash: n && n.domJsonpHash,
                    };
                  }
                  function n(e) {
                    return _.filter(
                      [
                        ["content", getHashFromContentUrl(e.contentUrl)],
                        ["contentCss", getHashFromContentUrl(e.contentUrlCss)],
                        ["contentJs", getHashFromContentUrl(e.contentUrlJs)],
                        [
                          "dom",
                          get(e, "domHash", getHashFromContentUrl(e.domUrl)),
                        ],
                        [
                          "domJsonp",
                          get(
                            e,
                            "domJsonpHash",
                            getHashFromContentUrl(e.domJsonpUrl)
                          ),
                        ],
                      ],
                      function (e) {
                        return e[1];
                      }
                    );
                  }
                  var i = this;
                  return (
                    (this.signature = function () {
                      if (this.domUrl) {
                        if (this.guide.authoredLanguage === this.language)
                          return n(this);
                        var e = t(i);
                        return n(e);
                      }
                      var o = [["content", this.content]],
                        r = this.attributes && this.attributes.variables;
                      if (r) {
                        var a = g(r);
                        a.length &&
                          ((a = _.sortBy(a, function (e) {
                            return e[0];
                          })),
                          o.push(["variables", a]));
                      }
                      return o;
                    }),
                    i
                  );
                }
                function a() {
                  return (
                    (this.signature = function () {
                      return _.map(this.steps, function (e) {
                        return e.signature();
                      });
                    }),
                    this
                  );
                }
                function s() {
                  var e = this,
                    t = !1,
                    n = function () {
                      return (
                        _.size(pendo.events._handlers.validateLauncher) > 0 &&
                        e.data.template
                      );
                    },
                    i = function () {
                      var t = JSON.stringify(e.signature()),
                        n = "launcher-" + crc32(t);
                      return pendo.events.validateLauncher(t).then(
                        function () {
                          c[n] = d;
                        },
                        function () {
                          c[n] = u;
                        }
                      );
                    },
                    o = function () {
                      var t = "launcher-" + crc32(e.signature());
                      return c[t];
                    };
                  return (
                    e.before("update", function () {
                      return n() && t ? !1 : void 0;
                    }),
                    e.before("render", function () {
                      if (n()) {
                        if (t) return !1;
                        var r = o();
                        if (r === u) return !1;
                        if (r !== d)
                          return (
                            (t = !0),
                            i().then(
                              function () {
                                (t = !1),
                                  e.render(),
                                  e.update(getActiveGuides());
                              },
                              function () {
                                t = !1;
                              }
                            ),
                            !1
                          );
                      }
                    }),
                    (e.signature = function () {
                      var e = [],
                        t = g(this.data);
                      return (
                        t.length &&
                          ((t = _.chain(t)
                            .filter(function (e) {
                              return !/^contentUrl/.test(e[0]);
                            })
                            .sortBy(function (e) {
                              return e[0];
                            })
                            .value()),
                          e.push(["variables", t])),
                        e
                      );
                    }),
                    e
                  );
                }
                var d = "allow",
                  u = "deny",
                  l = "pending",
                  c = {},
                  p = function () {
                    return _.size(pendo.events._handlers.validateGuide) > 0;
                  },
                  f = function (e) {
                    if (!p()) return q.resolve();
                    try {
                      return n(e) ? i(e) : o(e);
                    } catch (t) {
                      throw (Events.contentValidationFail.trigger(e, t), t);
                    }
                  },
                  g = function (e, t) {
                    var n = [];
                    return (
                      _.each(e, function (e, i) {
                        var o = i;
                        t && (o = t + "." + o),
                          _.isObject(e)
                            ? _.each(g(e, o), function (e) {
                                n.push(e);
                              })
                            : n.push([o, e]);
                      }),
                      n
                    );
                  };
                return {
                  state: c,
                  Step: r,
                  Guide: a,
                  Launcher: s,
                  validate: f,
                  valid: e,
                  invalid: t,
                  reset: function () {
                    c = {};
                  },
                };
              })(),
              AsyncContent = (function () {
                function e(t) {
                  function n(e) {
                    o(a);
                  }
                  function i() {
                    return e.fetchContent(r);
                  }
                  function o(e) {
                    var n = _.indexOf(t.steps, r);
                    _.chain(t.steps)
                      .rest(n + 1)
                      .first(e)
                      .each(function (e) {
                        e.fetchContent();
                      })
                      .value();
                  }
                  var r = this,
                    a = 3;
                  return (
                    (r.contentUrl || r.domJsonpUrl) &&
                      (_.extend(r, { fetchContent: i }), r.before("show", n)),
                    r
                  );
                }
                function t(e) {
                  var t = e.getGuide(),
                    n = t && t.language ? t.language : "default";
                  return e.id + "." + n;
                }
                return (
                  (e.state = {}),
                  (e.reset = function () {
                    ContentLoader.reset(), (e.state = {});
                  }),
                  (e.fetchContent = function (n) {
                    var i = t(n),
                      o = e.state[i];
                    if (!o) {
                      o = {};
                      var r = n.getGuide();
                      if (r.control) return;
                      var a, s, d;
                      r &&
                        r.language &&
                        ((a = r.language),
                        a !== r.authoredLanguage &&
                          ((s = get(
                            r,
                            "translationStates." +
                              a +
                              ".stepTranslations." +
                              n.id +
                              ".domHash"
                          )),
                          (d = get(
                            r,
                            "translationStates." +
                              a +
                              ".stepTranslations." +
                              n.id +
                              ".domJsonpHash"
                          ))));
                      var u = n.guideId + n.id,
                        l = _.extend(
                          { id: u, language: a, domHash: s, domJsonpHash: d },
                          _.pick(
                            n,
                            "contentUrl",
                            "contentUrlCss",
                            "contentUrlJs",
                            "domJsonpUrl",
                            "domUrl"
                          )
                        );
                      (o.promise = ContentVerifier.verify(l)
                        .then(function () {
                          return (o.verified = !0), ContentLoader.load(l);
                        })
                        .then(function (e) {
                          return (o.loaded = !0), e;
                        })),
                        (e.state[i] = o);
                    }
                    return o.promise.then(function (e) {
                      _.extend(n, e);
                    });
                  }),
                  (e.hasContent = function (n) {
                    var i = e.state[t(n)];
                    return i
                      ? i.loaded &&
                          (pendo.doesExist(n.content) ||
                            pendo.doesExist(n.domJson))
                      : !1;
                  }),
                  e.reset(),
                  e
                );
              })();
            (GuideStep.create = function (e, t) {
              return _.reduce(
                GuideStep.behaviors,
                function (e, n) {
                  return n.call(e, t);
                },
                e
              );
            }),
              (GuideStep.isGuideStep = function (e) {
                return !!e && _.isFunction(e.render);
              }),
              (GuideStep.behaviors = [
                Wrappable,
                GuideStep,
                RemoteFrameStep,
                AsyncContent,
                ContentValidation.Step,
                CloseButton,
                Credits,
                Tooltip,
                Lightbox,
                Banner,
                WhatsNew,
                Poll,
                AutoHeight,
                PreviewMode,
              ]),
              (GuideErrorThrottle.MAX_ERRORS_PER_MINUTE = 30),
              (Guide.create = function (e) {
                return _.reduce(
                  Guide.behaviors,
                  function (e, t) {
                    return t.call(e);
                  },
                  e
                );
              }),
              (Guide.behaviors = [
                Wrappable,
                Guide,
                ContentValidation.Guide,
                GroupGuide,
                WalkthroughGuide,
                GuideErrorThrottle,
                RemoteFrameGuide,
              ]),
              (AdvanceTrigger.prototype.add = function () {
                (0 !== _.indexOf(this.guide.steps, this.step) ||
                  AdvanceTrigger.shouldAttachHandler(
                    this.guide,
                    this.method
                  )) &&
                  (!isBadge(this.guide) || isWalkthrough(this.guide)) &&
                  this.setupElementEvent(this.element, this.method);
              }),
              (AdvanceTrigger.prototype.remove = function () {
                this.teardownElementEvent(this.element, this.method);
              }),
              (AdvanceTrigger.prototype.setupElementEvent = function (e, t) {
                this.advanceFn ||
                  (this.advanceFn = _.compose(
                    _.bind(this.teardownElementEvent, this, e, t),
                    _.bind(this.step.advance, this.step)
                  )),
                  AdvanceTrigger.attach(this.step, e, t, this.advanceFn);
              }),
              (AdvanceTrigger.prototype.teardownElementEvent = function (e, t) {
                log("detach onGuideAdvanced", "guide"),
                  detachEvent(e, t, this.advanceFn, !0),
                  this.step.removeTrigger(this);
              }),
              (AdvanceTrigger.shouldAttachHandler = function (e, t) {
                return (
                  !e.isActivatedByEvent(t) ||
                  DOMActivation.activates(e) ||
                  (e.attributes.activation.selector !==
                    e.steps[0].elementPathRule &&
                    !!e.attributes.activation.selector)
                );
              }),
              (AdvanceTrigger.attach = function (e, t, n, i) {
                if (e) {
                  for (
                    var o = (AdvanceTrigger.handlers =
                        AdvanceTrigger.handlers || {}),
                      r = (o[e.id] = o[e.id] || []),
                      a = 0;
                    a < r.length;
                    ++a
                  ) {
                    var s = r[a];
                    t === s[0] &&
                      n === s[1] &&
                      (detachEvent(t, n, s[2], !0),
                      r.splice(_.indexOf(r, s), 1),
                      a--);
                  }
                  r.push([t, n, i]),
                    detachEvent(t, n, i, !0),
                    attachEvent(t, n, i, !0);
                }
              });
            var loadGlobalScriptOnce = _.wrap(
                _.once(_.wrap(loadGlobalScript, validateGlobalScript)),
                ignoreEmptyGlobalScript
              ),
              EventRouter = function () {
                function e(e) {
                  var n;
                  if (!e.ignore)
                    switch (e.action) {
                      case u.advanceGuide:
                        pendo.onGuideAdvanced(e, e.step);
                        break;
                      case u.previousStep:
                        pendo.onGuidePrevious(e, e.step);
                        break;
                      case u.goToStep:
                        pendo.goToStep(e);
                        break;
                      case u.submitPoll:
                        this.submitPoll(e);
                        break;
                      case u.guideSnoozed:
                        var i =
                          e && e.params && e.params[0] && e.params[0].value;
                        pendo.onGuideSnoozed(e, e.step, i);
                        break;
                      case u.dismissGuide:
                        BuildingBlockResourceCenter.attemptToPreserveIntegrationIframes(
                          e
                        ),
                          t(e);
                        break;
                      case u.showElements:
                        this.setElementDisplay(e, "block"),
                          (n = BuildingBlockGuides.findGuideContainerJSON(
                            e.step.domJson
                          )),
                          BuildingBlockGuides.recalculateGuideHeight(
                            n.props.id
                          ),
                          BuildingBlockGuides.flexAllThings(n.props.id);
                        break;
                      case u.hideElements:
                        this.setElementDisplay(e, "none"),
                          (n = BuildingBlockGuides.findGuideContainerJSON(
                            e.step.domJson
                          )),
                          BuildingBlockGuides.recalculateGuideHeight(
                            n.props.id
                          ),
                          BuildingBlockGuides.flexAllThings(n.props.id);
                        break;
                      case u.slideElement:
                        this.setElementAnimation(e);
                        break;
                      case u.showGuide:
                        pendo.showGuideById(e.params[0].value);
                        break;
                      case u.launchGuide:
                        if (!pendo.designer) {
                          pendo.onGuideDismissed(e, e.step);
                          var o =
                            e && e.params && e.params[0] && e.params[0].value;
                          o && pendo.showGuideById(e.params[0].value);
                        }
                        break;
                      case u.renderResourceCenterModule:
                        BuildingBlockResourceCenter.replaceResourceCenterContent(
                          e.params[0].value
                        );
                        break;
                      case u.returnToResourceCenterHome:
                        var r =
                          BuildingBlockResourceCenter.findResourceCenterHomeView(
                            pendo.guides
                          );
                        if (!r) return;
                        BuildingBlockResourceCenter.attemptToPreserveIntegrationIframes(
                          e
                        ),
                          BuildingBlockResourceCenter.replaceResourceCenterContent(
                            r.id,
                            e.params
                          );
                        break;
                      case u.openFeedback:
                        Feedback.openFeedback(e);
                        break;
                      case u.openLink:
                        !pendo.designer && this.openLink(e);
                        break;
                      case u.searchGuides:
                        this.searchGuides(e);
                        break;
                      case u.submitPollAndGoToStep:
                        this.submitPoll(e), pendo.goToStep(e);
                    }
                }
                function t(e) {
                  if (!e || !e.step) return pendo.onGuideDismissed();
                  var t = e.step.getGuide();
                  return t && t.attributes && t.attributes.resourceCenter
                    ? BuildingBlockResourceCenter.dismissResourceCenter(t)
                    : void pendo.onGuideDismissed(e, e.step);
                }
                function n(e) {
                  var t = e && e.action,
                    n = e.step,
                    i = [];
                  if (
                    e.srcElement &&
                    e.srcElement.getAttribute("data-pendo-poll-type") &&
                    "yesNo" ===
                      e.srcElement.getAttribute("data-pendo-poll-type")
                  ) {
                    var o = e.srcElement.getAttribute("data-pendo-poll-id"),
                      r = e.srcElement.value;
                    i.push({ pollId: o, value: parseInt(r, 10) });
                  }
                  var a = Sizzle("[data-pendo-poll-id]", n.guideElement[0]);
                  (i = i.concat(
                    _.map(a, function (e) {
                      var t = Sizzle(
                        "textarea,input:text,select,input:radio:checked",
                        e
                      );
                      if (t && t.length && t[0].value) {
                        var i = e.getAttribute("data-pendo-poll-id"),
                          o = _.find(n.guide.polls, function (e) {
                            return e.id === i;
                          }),
                          r = t[0].value;
                        return (
                          o && o.numericResponses && (r = parseInt(r, 10)),
                          { pollId: i, value: r }
                        );
                      }
                    })
                  )),
                    n.response && i
                      ? n.response(_.compact(i))
                      : pendo.log(
                          "[Agent] Error! Trying to submit a poll response but step does not have response function!"
                        ),
                    t !== u.submitPollAndGoToStep && n.advance();
                }
                function i(e, t) {
                  var n = e.step,
                    i = _.find(e.params, function (e) {
                      return "selectors" === e.name;
                    }).value,
                    o = dom(i, n.guideElement[0]);
                  _.each(o, function (e) {
                    e.style.display = t;
                  });
                }
                function o(e) {
                  var t = _.find(e.params, function (e) {
                      return "selector" === e.name;
                    }).value,
                    n = dom(t, e.step.guideElement[0])[0],
                    i = _.find(e.params, function (e) {
                      return "transition" === e.name;
                    }).value,
                    o = _.find(e.params, function (e) {
                      return "left" === e.name;
                    }).value;
                  (n.style.transition = i), (n.style.left = o);
                }
                function r(e) {
                  var t = _.find(e.params, function (e) {
                      return "url" === e.name;
                    }).value,
                    n = _.find(e.params, function (e) {
                      return "target" === e.name;
                    }).value;
                  "_self" === n && detectMaster() && (n = "_top"),
                    window.open(t, n);
                }
                function a(e, t, n) {
                  return t
                    ? t.some(function (t) {
                        return _.contains(e, t) && t === n;
                      })
                    : !1;
                }
                function s(e) {
                  var t = "",
                    n = e.srcElement.value,
                    i = pendo.Sizzle("#pendo-resource-center-container")[0],
                    o = pendo.dom(i).find('[id^="pendo-list-item-"]'),
                    r = pendo.dom(i).find('[id^="pendo-no-matches-container"]'),
                    a = [],
                    s = _.find(e.params, function (e) {
                      return "searchTextInfo" === e.name;
                    });
                  pendo.dom(r[0].childNodes[0]).text(s.value);
                  var d = !0;
                  if (o)
                    for (var u in o)
                      if (u && o[u]) {
                        pendo.dom(o[u]).text() &&
                          (-1 !==
                          pendo
                            .dom(o[u])
                            .text()
                            .toLowerCase()
                            .indexOf(n.toLowerCase())
                            ? (pendo.dom(o[u]).css({ display: "list-item" }),
                              (d = !1))
                            : pendo.dom(o[u]).css({ display: "none" })),
                          _.isFunction(o[u].getAttribute) &&
                            ((t = o[u]
                              .getAttribute("data-_pendo-text-list-item-1")
                              .split(",")),
                            _.forEach(t, function (e) {
                              _.contains(a, e) || a.push(e);
                            }));
                        var l = this.searchAllTerms(a, t, n);
                        l &&
                          o[u] &&
                          (pendo.dom(o[u]).css({ display: "list-item" }),
                          (d = !1)),
                          (t = "");
                      }
                  d
                    ? pendo.dom(r[0]).css({ display: "block" })
                    : pendo.dom(r[0]).css({ display: "none" });
                }
                var d = this;
                (this.eventable = Eventable.call({})),
                  this.eventable.on("pendoEvent", function (e) {
                    try {
                      d.eventHandler(e);
                    } catch (t) {
                      var n = (e && e.action) || "NO ACTION DEFINED";
                      writeException(t, "Error in Action " + n);
                    }
                  }),
                  (this.eventHandler = e),
                  (this.submitPoll = n),
                  (this.setElementDisplay = i),
                  (this.setElementAnimation = o),
                  (this.openLink = r),
                  (this.goToStep = goToStep),
                  (this.searchGuides = s),
                  (this.searchAllTerms = a);
                var u = {
                  advanceGuide: "advanceGuide",
                  previousStep: "previousStep",
                  goToStep: "goToStep",
                  submitPoll: "submitPoll",
                  guideSnoozed: "guideSnoozed",
                  dismissGuide: "dismissGuide",
                  showElements: "showElements",
                  hideElements: "hideElements",
                  slideElement: "slideElement",
                  showGuide: "showGuide",
                  launchGuide: "launchGuide",
                  renderResourceCenterModule: "renderResourceCenterModule",
                  returnToResourceCenterHome: "returnToResourceCenterHome",
                  openFeedback: "openFeedback",
                  openLink: "openLink",
                  searchGuides: "searchGuides",
                  submitPollAndGoToStep: "submitPollAndGoToStep",
                };
                return this;
              },
              DOMActivation = (function () {
                function e(e, t, i) {
                  var o = e[l],
                    r = o ? i[o] : null;
                  r ||
                    ((o = o || "target" + _.uniqueId()),
                    (r = { target: e, events: {} }),
                    (i[o] = r),
                    (e[l] = o));
                  var a = i[t.id] || [];
                  a.push(o),
                    (i[t.id] = a),
                    _.each(t.events, function (i) {
                      var o = r.events[i];
                      o ||
                        ((o = { guideIds: {} }),
                        (o.fn = _.partial(n, _, o.guideIds)),
                        attachEvent(e, i, o.fn),
                        (r.events[i] = o)),
                        (o.guideIds[t.id] = 1);
                    });
                }
                function t(e, t) {
                  _.each(t[e.id], function (n) {
                    var i = n ? t[n] : null;
                    i &&
                      (_.each(i.events, function (t, n) {
                        t &&
                          t.guideIds &&
                          (delete t.guideIds[e.id],
                          _.size(t.guideIds) <= 0 &&
                            (detachEvent(i.target, n, t.fn),
                            delete i.events[n]));
                      }),
                      _.size(i.events) <= 0 &&
                        (delete i.target[l], (i.target = null), delete t[n]));
                  }),
                    delete t[e.id];
                }
                function n(e, t) {
                  if (!e.pendoActivatedGuide) {
                    var n = ConfigReader.get("adoptPrioritizeAdoptGuides"),
                      i = _.compact(
                        _.map(_.keys(t), function (e) {
                          return pendo.findGuideById(e);
                        })
                      );
                    (i = _.filter(i, function (e) {
                      return e.steps && e.steps.length
                        ? get(e, "attributes.dom.isOnlyShowOnce")
                          ? !e.steps[0].hasBeenSeen()
                          : !0
                        : !1;
                    })),
                      (i = _(i)
                        .chain()
                        .sortBy(function (e) {
                          return "staged" === e.state ? 0 : 1;
                        })
                        .sortBy(function (e) {
                          var t = e.isTraining;
                          return n ? (t ? 0 : 1) : t ? 1 : 0;
                        })
                        .value());
                    var o = _.find(i, function (e) {
                      var t = _.first(e.steps),
                        n = get(e, "attributes.resourceCenter", !1);
                      return canStepBeRendered(t)
                        ? n && e.isShown()
                          ? BuildingBlockResourceCenter.dismissResourceCenter()
                          : t.isShown()
                          ? !0
                          : showGuide(t, "dom")
                        : !1;
                    });
                    o && (e.pendoActivatedGuide = o.id);
                  }
                }
                function i() {
                  _.each(p, function (e) {
                    t(e, f), (e.targets = []);
                  }),
                    (p.length = 0),
                    (u = null);
                }
                function o(e) {
                  if (
                    e.id &&
                    e.steps &&
                    e.steps.length &&
                    e.hasLaunchMethod("dom")
                  ) {
                    var t = get(e, "attributes.activation.event", []);
                    if (t && t.length) {
                      var n = r(e);
                      if (n)
                        return {
                          id: e.id,
                          events: t,
                          selector: n,
                          targets: [],
                        };
                    }
                  }
                }
                function r(e) {
                  var t = get(e, "attributes.activation.selector");
                  return t ? t : e.steps[0].elementPathRule;
                }
                function a(e) {
                  u ||
                    (_.each(e, function (e) {
                      var t = o(e);
                      t && p.push(t);
                    }),
                    (u = throttleIterator(50, createStatefulIterator())));
                }
                function s(e, t) {
                  return e.length != t.length
                    ? !1
                    : _.all(e, function (e, n) {
                        return e === t[n];
                      });
                }
                function d(n, i) {
                  a(n),
                    u.eachUntil(p, function (n) {
                      var i = Sizzle(n.selector);
                      i.length > c && (i.length = c),
                        s(i, n.targets) ||
                          ((n.targets = i),
                          t(n, f),
                          _.each(i, function (t) {
                            e(t, n, f);
                          }));
                    });
                }
                var u,
                  l = "pendoTargetId",
                  c = 50,
                  p = [],
                  f = {};
                return {
                  key: l,
                  guides: p,
                  getActivationSelector: r,
                  targets: f,
                  reset: i,
                  init: a,
                  update: d,
                  attach: e,
                  detach: t,
                  handler: n,
                  activates: o,
                };
              })(),
              ScriptGuideLoader = {
                load: function (e, t) {
                  return q.resolve(pendo.loadResource(e, t));
                },
                buildUrl: function (e, t) {
                  return buildBaseDataUrl("guide.js", e, t);
                },
                usesXhr: function () {
                  return !1;
                },
              },
              GuideLoader = ScriptGuideLoader,
              guideEvtCache = [],
              activeElements = [],
              detachGuideEventHandlers,
              activeGuides = [],
              controlGuideLogMessage =
                "Guide was not shown because this visitor is in a control group of an active experiment for the guide",
              Tombstone = (function () {
                var e = [];
                return {
                  addGuide: function (t) {
                    return (
                      e.push(t),
                      setActiveGuides(_.difference(getActiveGuides(), e)),
                      e
                    );
                  },
                };
              })(),
              DEFAULT_GUIDE_SEEN_TIMEOUT_LENGTH = 1e4,
              GUIDE_CSS_NAME = "_pendo-guide_",
              GUIDE_ID_PREFIX = "_pendo_g_",
              lastGuideStepSeen = null,
              seenTime = 0,
              isGuideShown = function () {
                return _.any(getActiveGuides(), function (e) {
                  return e.isShown();
                });
              },
              addCloseButton = function (e, t) {
                var n = dom("._pendo-close-guide_", e);
                if (n.length) return n[0];
                (n = dom("<button>")
                  .attr("id", "_pendo-close-guide_")
                  .attr("aria-label", "close")
                  .addClass("_pendo-close-guide_")
                  .html("&times;")),
                  isBrowserInQuirksmode()
                    ? msie > 9 && n.css({ top: 3 })
                    : 8 === msie
                    ? n.css({ top: 9, right: 2 })
                    : 9 === msie
                    ? n.css({ right: 2, top: 3 })
                    : msie > 9 && n.css({ top: 3 });
                var i = dom("._pendo-guide-container_", e)[0] || e;
                return (
                  n.appendTo(i),
                  (n[0].onclick = function () {
                    t();
                  }),
                  n[0]
                );
              },
              findGuideBy = function (e, t) {
                for (var n = getActiveGuides(), i = 0; i < n.length; i++)
                  if (n[i][e] === t) return n[i];
                return null;
              },
              findGuideById = function (e) {
                return pendo.findGuideBy("id", e);
              },
              findGuideByName = function (e) {
                return pendo.findGuideBy("name", e);
              },
              findStepInGuide = function (e, t) {
                return e && e.id
                  ? ((e = findGuideById(e.id)), e.findStepById(t))
                  : null;
              },
              _updateGuideStepStatus = function (e, t, n) {
                var i = pendo.findStepInGuide(findGuideById(e), t);
                i && (i.seenState = n);
              },
              getStepIdFromElement = function (e) {
                for (var t = new RegExp("^" + GUIDE_ID_PREFIX); e; ) {
                  if (_.isString(e.id) && t.test(e.id))
                    return e.id.replace(t, "");
                  e = e.parentNode;
                }
                return null;
              },
              isStepType = function (e) {
                return e && e.guideId;
              },
              findStepForGuideEvent = function (e, t) {
                if (
                  (isStepType(e) && ((t = e), (e = null)),
                  GuideStep.isGuideStep(t))
                )
                  return t;
                if (t) {
                  var n = findGuideById(t.guideId);
                  return n && n.findStepById(t.id);
                }
                var i = _.find(getActiveGuides(), function (e) {
                  return e.isShown();
                });
                if (i) {
                  var o;
                  return (
                    e &&
                      (o = getStepIdFromElement(e.target || e.srcElement || e)),
                    o
                      ? ((t = i.findStepById(o)),
                        t ||
                          writeMessage(
                            "findStepForGuideEvent: step with id " + o
                          ))
                      : ((t = _.find(i.steps, function (e) {
                          return e.isShown();
                        })),
                        t ||
                          writeMessage("findStepForGuideEvent: no step shown")),
                    t
                  );
                }
              },
              removeGuideEventListeners = function (e) {
                var t = "element" === e.advanceMethod ? "click" : "mouseover",
                  n = pendo.getElementForGuideStep(e);
                "tooltip" === e.type && _.isFunction(e.teardownElementEvent)
                  ? e.teardownElementEvent(n, t)
                  : detachEvent(n, t, onGuideAdvanced, !0);
              },
              onGuideDismissed = function (e, t) {
                var n = null;
                if (
                  (e && e instanceof Object && e.until && (n = e.until),
                  (t = findStepForGuideEvent(e, t)),
                  !t || !t.id)
                )
                  return void stopGuides();
                if (!checkLockedStep(t)) {
                  if (n) return void t.hide({ stayHidden: !0 });
                  removeGuideEventListeners(t);
                  var i = t.id,
                    o = t.guideId,
                    r = findGuideById(o),
                    a = _.first(r && r.steps),
                    s = a && a.seenReason,
                    d = r && r.language;
                  dismissedGuide(o, i, pendo.get_visitor_id(), s, d);
                  var u = getNow();
                  _updateGuideStepStatus(o, i, "dismissed");
                  var l = _.isFunction(t.getGuide) && t.getGuide(),
                    c = l && l.attributes && l.attributes.doNotResume;
                  c ||
                    (lastGuideStepSeen = {
                      guideId: o,
                      guideStepId: i,
                      time: u,
                      state: "dismissed",
                      seenReason: s,
                      visitorId: pendo.get_visitor_id(),
                    }),
                    writeLastStepSeenCache(lastGuideStepSeen),
                    "auto" === s && writeLatestDismissedAutoAtCache(u),
                    t.hide(),
                    isGuideShown() || (stopGuides(), startGuides());
                }
              },
              onGuideSnoozed = function (e, t, n) {
                if (
                  (log("onGuideSnoozed called", "guides"),
                  (t = findStepForGuideEvent(e, t)),
                  !t)
                )
                  return (
                    log("missing step.  can't snooze", ["guides", "error"]),
                    stopGuides(),
                    void writeMessage("onGuideSnoozed: missing step")
                  );
                if (
                  (n ||
                    ((n = 864e5),
                    log("no snooze duration provided, defaulting to 1 day")),
                  !checkLockedStep(t))
                ) {
                  removeGuideEventListeners(t);
                  var i = t.id,
                    o = t.guideId,
                    r = pendo.get_visitor_id(),
                    a = findGuideById(o),
                    s = a && a.language,
                    d = _.first(a && a.steps),
                    u = d && d.seenReason,
                    l = getNow();
                  log("snoozing guide for " + n + " ms");
                  var c = l + n;
                  (t.snoozeEndTime = c),
                    snoozedGuide(o, i, r, u, s, n),
                    _updateGuideStepStatus(o, i, "snoozed");
                  var p = a && a.attributes && a.attributes.doNotResume;
                  p ||
                    (lastGuideStepSeen = {
                      guideId: o,
                      guideStepId: i,
                      time: l,
                      state: "snoozed",
                      seenReason: u,
                      visitorId: pendo.get_visitor_id(),
                      snoozeEndTime: c,
                    }),
                    writeLastStepSeenCache(lastGuideStepSeen),
                    "auto" === u && writeLatestSnoozedAutoAtCache(l),
                    t.hide(),
                    isGuideShown() || (stopGuides(), startGuides());
                }
              },
              cleanupActiveGuide = function () {
                var e = getActiveGuide();
                e &&
                  _.each(e.steps, function (e) {
                    var t =
                        "element" == e.advanceMethod ? "click" : "mouseover",
                      n = pendo.getElementForGuideStep(e);
                    "tooltip" === e.type && _.isFunction(e.teardownElementEvent)
                      ? e.teardownElementEvent(n, t)
                      : detachEvent(n, t, onGuideAdvanced, !0);
                  });
              },
              goToStep = function (e) {
                var t = e && e.step;
                if ((t || (t = findStepForGuideEvent(e)), !t))
                  return void log("[goToStep] missing current step", [
                    "guides",
                    "error",
                  ]);
                var n = e && e.params,
                  i = _.find(n, function (e) {
                    return "goToStepId" === e.name;
                  }),
                  o = i && i.value;
                if ((e && e.destinationStepId && (o = e.destinationStepId), !o))
                  return void log("[goToStep] missing step id to go to", [
                    "guides",
                    "error",
                  ]);
                if (o === t.id)
                  return void log(
                    "[goToStep] step id matches the current step",
                    ["guides", "error"]
                  );
                var r = pendo.findGuideById(t.guideId),
                  a = _.find(r.steps, function (e) {
                    return e.id === o;
                  });
                if (!a)
                  return void log(
                    "[goToStep] guide has no step matching the step id",
                    ["guides", "error"]
                  );
                var s = _.indexOf(r.steps, a),
                  d = _.indexOf(r.steps, t);
                (e.steps = Math.abs(s - d)),
                  (e.action = e.action || "goToStep"),
                  (e.destinationStepId = o),
                  s > d ? onGuideAdvanced(e, t, !1) : onGuidePrevious(e, t);
              },
              onGuideAdvanced = function (e, t, n) {
                if (
                  (cleanupActiveGuide(),
                  1 === arguments.length && isStepType(e))
                ) {
                  var i = findGuideBy(e.guideId),
                    o = findStepForGuideEvent();
                  i &&
                    o &&
                    _.first(i.steps).id === o.id &&
                    _.last(i.steps).id === e.id &&
                    (log("Cannot skip to last step from first step"),
                    (e = null));
                }
                if (
                  (log("onGuideAdvanced called", "guides"),
                  (t = findStepForGuideEvent(e, t)),
                  !t)
                )
                  return (
                    log("missing step.  can't advance", ["guides", "error"]),
                    stopGuides(),
                    void writeMessage("onGuideAdvanced: missing step")
                  );
                if (!checkLockedStep(t)) {
                  var r = (e && e.action && "goToStep" === e.action) || !1,
                    a = findGuideById(t.guideId),
                    s = a && a.language,
                    d = a && a.steps && _.indexOf(a.steps, t);
                  if (e && _.isNumber(e.steps) && e.steps > 1 && !r) {
                    var u = e.steps - 1,
                      l = d + u;
                    l >= a.steps.length && (l = a.steps.length - 1);
                    var c = l;
                    e.skip === !0 && (c = d + 1);
                    for (var p = d; c > p; ++p)
                      (t = a.steps[p]),
                        advancedGuide(
                          a.id,
                          t.id,
                          pendo.get_visitor_id(),
                          t.seenReason,
                          s,
                          p !== d
                        ),
                        writeLastStepSeenCache({
                          guideId: t.guideId,
                          guideStepId: t.id,
                          time: getNow(),
                          state: "advanced",
                          seenReason: t.seenReason,
                          visitorId: pendo.get_visitor_id(),
                        }),
                        _updateGuideStepStatus(a.id, t.id, "advanced");
                    return onGuideAdvanced(a.steps[l], t, !0);
                  }
                  var f = t.id,
                    g = t.guideId,
                    h = _.first(a && a.steps),
                    v = h && h.seenReason,
                    m = e && e.destinationStepId;
                  if (!m) {
                    var b =
                        e && _.isNumber(e.steps) && e.steps > 1 ? e.steps : 1,
                      y = _.isNumber(d) && a && a.steps && a.steps[d + b];
                    m = (y && y.id) || null;
                  }
                  m || log("missing destination step id"),
                    log("advancing guide"),
                    advancedGuide(g, f, pendo.get_visitor_id(), v, s, n, m),
                    log("update guide status"),
                    _updateGuideStepStatus(g, f, "advanced");
                  var w = new Date().getTime(),
                    S = _.isFunction(t.getGuide) && t.getGuide(),
                    E = S && S.attributes && S.attributes.doNotResume;
                  E ||
                    (lastGuideStepSeen = {
                      guideId: g,
                      guideStepId: f,
                      time: w,
                      state: "advanced",
                      seenReason: v,
                      visitorId: pendo.get_visitor_id(),
                      destinationStepId: m,
                    }),
                    writeLastStepSeenCache(lastGuideStepSeen),
                    h &&
                      "auto" === h.seenReason &&
                      writeFinalAdvancedAutoAtCache(w),
                    log("stop guide"),
                    stopGuides(),
                    log("start guides"),
                    startGuides();
                }
              },
              onGuidePrevious = function (e, t) {
                if (((t = findStepForGuideEvent(e, t)), !t))
                  return (
                    stopGuides(),
                    void writeMessage("onGuidePrevious: missing step")
                  );
                var n = t.guideId,
                  i = findGuideById(n),
                  o = (e && e.action && "goToStep" === e.action) || !1,
                  r = _.indexOf(i.steps, t);
                if (0 !== r) {
                  var a = "element" == t.advanceMethod ? "click" : "mouseover",
                    s = pendo.getElementForGuideStep(t);
                  "tooltip" === t.type && _.isFunction(t.teardownElementEvent)
                    ? t.teardownElementEvent(s, a)
                    : detachEvent(s, a, onGuideAdvanced, !0);
                  var d = e && _.isNumber(e.steps) ? e.steps : 1,
                    u = _.first(i && i.steps),
                    l = r - d,
                    c = l >= 0 ? i.steps[l] : u,
                    p = u && u.seenReason,
                    f = i && i.language,
                    g = c.id;
                  o && e && e.destinationStepId && (g = e.destinationStepId),
                    g || log("missing destination step id"),
                    log("advancing guide"),
                    advancedGuide(n, t.id, pendo.get_visitor_id(), p, f, !1, g),
                    log("update guide status"),
                    _updateGuideStepStatus(t.guideId, t.id, "advanced");
                  var h = new Date().getTime(),
                    v = _.isFunction(t.getGuide) && t.getGuide(),
                    m = v && v.attributes && v.attributes.doNotResume;
                  m ||
                    (lastGuideStepSeen = {
                      guideId: t.guideId,
                      guideStepId: t.id,
                      time: h,
                      state: "advanced",
                      seenReason: p,
                      visitorId: pendo.get_visitor_id(),
                      destinationStepId: g,
                    }),
                    writeLastStepSeenCache(lastGuideStepSeen),
                    stopGuides(),
                    startGuides();
                }
              };
            pendo._addCredits = function (e) {
              if (!dom("._pendo-credits_", e).length) {
                var t = dom("<div>")
                  .addClass("_pendo-credits_")
                  .html(
                    '<img src="' + getAssetHost() + '/img/tiny-logo.png" />'
                  )
                  .css({ bottom: 0, right: pendo.TOOLTIP_ARROW_SIZE });
                activeElements.push(t[0]), t.appendTo(e);
              }
            };
            var getElementForGuideStep = function (e) {
                if (!e) return log("Can't get element for null step"), null;
                var t = e.getGuide(),
                  n = "building-block" === get(t, "attributes.type"),
                  i = n || !isWalkthrough(t);
                return (
                  !e.overrideElement &&
                    i &&
                    (e.overrideElement = findBadgeForStep(e)),
                  (e.targetElement = getElementForTargeting(e)),
                  e.overrideElement ? e.overrideElement : e.targetElement
                );
              },
              getElementForTargeting = function (e) {
                try {
                  var t,
                    n = e.elementPathRule || null;
                  return (
                    (t = n ? Sizzle(n) : [getBody()]),
                    0 === t.length ? null : _.first(t)
                  );
                } catch (i) {
                  log("Invalid selector expression");
                }
              },
              canStepBeRendered = function (e) {
                if (isDismissedUntilReload(e)) return !1;
                if (
                  !e.elementPathRule &&
                  ("lightbox" === e.type || "whatsnew" === e.type)
                )
                  return !0;
                var t = getElementForGuideStep(e),
                  n = e.targetElement;
                if (
                  n &&
                  e.elementContainsRulesList &&
                  !doesElementMatchContainsRules(n, e.elementContainsRulesList)
                )
                  return !1;
                var i =
                    "tooltip" === e.type ||
                    BuildingBlockGuides.isBuildingBlockGuideRelativeToElement(
                      e
                    ),
                  o = isElementVisible(t);
                return i
                  ? e.hasBeenScrolledTo
                    ? o
                    : o || wouldBeVisibleAfterAutoScroll(t)
                  : o;
              },
              getStepDivId = function (e) {
                return GUIDE_ID_PREFIX + e.id;
              },
              setupWatchOnElement = function (e) {
                var t = e.element,
                  n = _.first(Sizzle("#" + getStepDivId(e)));
                if (t && n) {
                  var i = isElementVisible(t);
                  if (i || dom.hasClass(n, "mouseover"))
                    return void setTimeout(function () {
                      setupWatchOnElement(e);
                    }, DEFAULT_TIMER_LENGTH);
                  e.hide
                    ? (e.hide(),
                      isGuideShown() || (stopGuides(), startGuides()))
                    : (stopGuides(), startGuides());
                } else
                  !t &&
                    n &&
                    (e.hide
                      ? (e.hide(),
                        isGuideShown() || (stopGuides(), startGuides()))
                      : (stopGuides(), startGuides()));
              },
              showPreview = function () {
                return !1;
              },
              findBadgeForStep = function (e) {
                return _.first(Sizzle("#_pendo-badge_" + e.id));
              },
              showGuide = function (e, t) {
                if (!e || !e.guideId) return !1;
                var n = findGuideById(e.guideId);
                if (!n) return !1;
                if (isGuideShown()) {
                  var i = findStepForGuideEvent();
                  removeGuideEventListeners(i);
                  var o = n && n.attributes && n.attributes.resourceCenter;
                  o || (hideGuides(), store.dispatch("frames/hideGuides"));
                }
                return n.launch(t), n.isShown();
              },
              controlledGuide = function (e, t, n, i, o, r) {
                var a = createGuideEvent({
                  type: "guideNotSeen",
                  guideId: e,
                  stepId: t,
                  visitorId: n,
                  reason: i,
                  language: o,
                });
                r && _.extend(a.props, { step_poll_types: r }),
                  stageGuideEvent(a);
              },
              seenGuide = function (e, t, n, i, o, r) {
                var a = createGuideEvent({
                  type: "guideSeen",
                  guideId: e,
                  stepId: t,
                  visitorId: n,
                  reason: i,
                  language: o,
                });
                _.extend(a.props, r),
                  stageGuideEvent(a),
                  writeLastStepSeenCache({
                    guideId: e,
                    guideStepId: t,
                    time: getNow(),
                    state: "active",
                    seenReason: i,
                    visitorId: pendo.get_visitor_id(),
                  }),
                  Events.guideSeen.trigger(a);
              },
              writeLastStepSeenCache = function (e) {
                var t = JSON.stringify(
                    _.extend({ tabId: EventTracer.getTabId() }, e)
                  ),
                  n = 1e4;
                log(
                  "writing " +
                    t +
                    " to a cookie named lastStepAdvanced for " +
                    n
                ),
                  agentStorage.write("lastStepAdvanced", t, n),
                  setPreviewState(e, pendoLocalStorage),
                  store.dispatch("frames/changeLastGuideStepSeen", e);
              },
              stagedEventsTimer = null,
              startStagedTimer = function (e) {
                window.clearTimeout(stagedEventsTimer),
                  (stagedEventsTimer = window.setTimeout(
                    processGuideEventCache,
                    e
                  ));
              },
              stageGuideEvent = function (e, t, n) {
                (t = t || 500),
                  (e.props.duration = n ? 0 : new Date().getTime() - seenTime),
                  guideEvtCache.push(e),
                  startStagedTimer(t);
              },
              getNextStepInMultistep = function (e, t) {
                if ("dismissed" === e.state) return null;
                var n = findGuideById(e.guideId);
                return n.nextStep(e, t || pendo.getCurrentUrl());
              },
              shouldAutoDisplayGuide = function (e, t) {
                var n = findGuideById(e && e.id);
                return n ? n.shouldAutoDisplay(t) : !1;
              };
            pendo.getCurrentUrl = function () {
              return pendo.normalizedUrl || pendo.url.get();
            };
            var isBadge = function (e) {
                return (
                  e && e.launchMethod && e.launchMethod.indexOf("badge") >= 0
                );
              },
              isWalkthrough = function (e) {
                return (
                  e &&
                  e.isMultiStep &&
                  !(e.attributes && "group" === e.attributes.type)
                );
              };
            (pendo.testUrlForStep = function (e, t) {
              if (!pendo.doesExist(e)) return !0;
              var n = new RegExp(e),
                i = null,
                o = t.indexOf("?");
              if (-1 == o) i = t;
              else {
                var r = t.substr(0, o),
                  a = t.substr(o + 1),
                  s = a.split("&");
                i = r + "?" + s.sort().join("&");
              }
              return n.test(i);
            }),
              (pendo.showGuideByName = function (e) {
                var t = pendo.findGuideByName(e);
                if (t) {
                  var n = showGuide(_.first(t.steps));
                  return !n && t.control && log(controlGuideLogMessage), n;
                }
                return !1;
              }),
              (pendo.showGuideById = function (e) {
                var t = pendo.findGuideById(e);
                if (t) {
                  var n = showGuide(_.first(t.steps));
                  return !n && t.control && log(controlGuideLogMessage), n;
                }
                return !1;
              });
            var applyLastAdvancedCache = function (e) {
                var t =
                  agentStorage.read("lastStepAdvanced") ||
                  JSON.stringify(getPreviewState(pendoLocalStorage));
                if (!t) return e;
                var n = JSON.parse(t);
                if (!n) return e;
                if (n.visitorId && n.visitorId !== pendo.get_visitor_id())
                  return e;
                log("applying cookie to guide list " + t),
                  n[0] &&
                    (n = {
                      guideId: n[0],
                      guideStepId: n[1],
                      state: "advanced",
                      time: new Date().getTime(),
                    });
                var i = n.guideId,
                  o = n.guideStepId,
                  r = findGuideById(i);
                if (r) {
                  var a = _.first(r.steps);
                  a && n.seenReason && (a.seenReason = n.seenReason);
                  var s = pendo.findStepInGuide(r, o);
                  if (s) {
                    s.seenState != n.state &&
                      (log(
                        "making sure that seenState = '" +
                          n.state +
                          "' for lastStepAdvanced: " +
                          o
                      ),
                      (s.seenState = n.state)),
                      s.snoozeEndTime != n.snoozeEndTime &&
                        (log(
                          "making sure that snoozeEndTime = '" +
                            n.snoozeEndTime +
                            "' for lastStepAdvanced: " +
                            o
                        ),
                        (s.snoozeEndTime = n.snoozeEndTime));
                    var d = r.steps.indexOf(s);
                    _.each(r.steps.slice(0, d), function (e) {
                      _.contains(["advanced", "dismissed"], e.seenState) ||
                        (e.seenState = "advanced");
                    });
                  }
                }
                return (
                  log(
                    "updating lastGuideStepSeen so that the state matches our local value for " +
                      o
                  ),
                  _.extend(e, n)
                );
              },
              isMobileUserAgent = function () {
                return isPreviewing() && getScreenDimensions().width <= 320
                  ? !0
                  : /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      getUA()
                    );
              },
              isPreviewing = function () {
                return "undefined" != typeof selmo && !!selmo.isPreviewing;
              },
              resetPendoUI = function () {
                stopGuides(),
                  clearLoopTimer(),
                  BuildingBlockResourceCenter.removeNotificationBubble(),
                  removeAllBadges(),
                  DOMActivation.reset(),
                  hideLauncher(),
                  flushLater();
              },
              resetPendoContent = function () {
                pendo.guides &&
                  ((activeGuides.length = 0),
                  (pendo.guides.length = 0),
                  (all_ob_guides.length = 0)),
                  clearMode();
              },
              loadGuideJs = (function () {
                var e, t;
                return function (n, i, o) {
                  var r = getPendoConfigValue("trainingPartner"),
                    a = _.uniqueId();
                  if (((e = a), !isMetadataBlocked())) {
                    var s = getMetadata();
                    s
                      ? (log("sending metadata: " + JSON.stringify(s), [
                          "guides",
                          "metadata",
                        ]),
                        (i.metadata = s))
                      : log("no metadata to send", ["guides", "metadata"]);
                  }
                  var d = pendo.compress(i),
                    u = { jzb: d, v: VERSION, ct: new Date().getTime() };
                  r &&
                    i.accountId &&
                    "ACCOUNT-UNIQUE-ID" !== i.accountId &&
                    (u.acc = base64EncodeString(i.accountId)),
                    isDebuggingEnabled(!0) && (u.debug = !0);
                  var l = previewGuideLoaderWrapper(
                      GuideLoader,
                      pendoLocalStorage
                    ),
                    c = l.buildUrl(n, u),
                    p = 1e3;
                  c.length > p &&
                    (debug("Max length exceeded for a guide.js request"),
                    (i.url = limitURLSize(p, i.url)),
                    (u.jzb = pendo.compress(i)),
                    (c = l.buildUrl(n, u)));
                  var f,
                    g = function () {
                      a === e
                        ? (o.apply(this, arguments),
                          (t = backupObjectState(pendo, [
                            "guides",
                            "normalizedUrl",
                            "lastGuideStepSeen",
                            "guideWidget",
                            "throttling",
                            "autoOrdering",
                            "olark",
                            "globalJsUrl",
                            "segmentFlags",
                            "latestDismissedAutoAt",
                            "finalAdvancedAutoAt",
                          ])))
                        : _.isFunction(t) && t();
                    },
                    h = getJwtInfoCopy();
                  if (c.length > URL_MAX_LENGTH || !_.isEmpty(h)) {
                    delete u.jzb, (c = buildBaseDataUrl("guide.json", n, u));
                    var v = _.extend({ events: d }, h);
                    f = postLoadGuideJs(c, v, g);
                  } else f = l.load(c, g);
                  return f.fail(function (e) {
                    return (
                      451 === e.status &&
                        (pendo.stopGuides(),
                        pendo.stopSendingEvents(),
                        log("not tracking visitor due to 451 response")),
                      sendPreviewModeFailureMessage(document, e),
                      q.reject(e)
                    );
                  });
                };
              })(),
              shouldLoadGlobalCSS = function () {
                var e = getOption("disableGlobalCSS");
                return _.isBoolean(e)
                  ? !e
                  : !getPendoConfigValue("disableGlobalCSS", !1);
              },
              loadGuides = function (e, t, n, i) {
                var o,
                  r = q.defer(),
                  a = !1;
                log("loading guides for " + n + "...", "guides"),
                  (e = e || pendo.apiKey),
                  (t = t || pendo.get_visitor_id()),
                  (n = pendo.url.externalizeURL(n));
                var s =
                  loadGuides.lastVisitorId === t
                    ? saveGuideShownState(activeGuides)
                    : _.noop;
                if (
                  ((loadGuides.lastVisitorId = t),
                  resetPendoUI(),
                  resetPendoContent(),
                  !isURLValid(getURL()))
                )
                  return (
                    log(
                      "bad url:  probably local file system",
                      "guides",
                      "error"
                    ),
                    _.isFunction(i) && i("error: invalid url"),
                    r.reject(),
                    r.promise
                  );
                var d = {
                  visitorId: t,
                  accountId: pendo.get_account_id(),
                  url: n,
                };
                loadGuideJs(e, d, function () {
                  !a &&
                    isUnlocked() &&
                    (pendo.events.deliverablesLoaded(),
                    log("successfully loaded guides for " + n, "guides"),
                    pendo.designerEnabled &&
                      "true" !==
                        pendoLocalStorage.getItem("pendo-designer-mode") &&
                      pendo.P2AutoLaunch.loadPluginJs(),
                    resetPendoUI(),
                    (lastGuideStepSeen = preparePreviewLastGuideStepSeen(
                      pendoLocalStorage,
                      pendo.guides,
                      pendo.lastGuideStepSeen
                    )),
                    (activeGuides = _.map(pendo.guides, GuideFactory)),
                    (activeGuides = preparePreviewGuide(window, activeGuides)),
                    (activeGuides = sortGuidesByPriority(activeGuides)),
                    setActiveGuides(activeGuides),
                    (lastGuideStepSeen.visitorId = t),
                    (lastGuideStepSeen =
                      applyLastAdvancedCache(lastGuideStepSeen)),
                    (pendo.latestDismissedAutoAt = applyTimerCache(
                      pendo.latestDismissedAutoAt,
                      agentStorage.read("latestDismissedAutoAt")
                    )),
                    (pendo.finalAdvancedAutoAt = applyTimerCache(
                      pendo.finalAdvancedAutoAt,
                      agentStorage.read("finalAdvancedAutoAt")
                    )),
                    (pendo.latestSnoozedAutoAt = applyTimerCache(
                      pendo.latestSnoozedAutoAt,
                      agentStorage.read("latestSnoozedAutoAt")
                    )),
                    store.dispatch("healthCheck/init", activeGuides),
                    store.dispatch("frames/changeGuideList", activeGuides),
                    (pendo.eventProperties = createEventPropertiesFromFeatures(
                      pendo.features
                    )),
                    activeGuides.length
                      ? q
                          .all([
                            loadGuideCss(),
                            loadGlobalScriptOnce(
                              replaceWithContentHost(pendo.globalJsUrl)
                            ),
                            loadLauncherContent(
                              upgradeLauncher(pendo.guideWidget, activeGuides)
                            ),
                            initializeResourceCenter(pendo.guides),
                            BuildingBlockWatermark.initializeWatermark(
                              pendo.guides
                            ),
                            waitForGlobalCssToLoad(5e3),
                          ])
                          .then(
                            function () {
                              initLauncher(),
                                store.getters["frames/isLeader"]() &&
                                  s(activeGuides),
                                prefetchDomActivatedGuideContent(activeGuides),
                                pendo.events.guidesLoaded(),
                                startGuides(),
                                clearTimeout(o),
                                _.isFunction(i) && i(),
                                r.resolve();
                            },
                            function () {
                              pendo.events.guidesFailed(), r.reject();
                            }
                          )
                      : (pendo.events.guidesLoaded(), r.resolve()));
                });
                var u =
                  ConfigReader.get("guideTimeout") ||
                  ConfigReader.get("guides.timeout");
                return (
                  _.isNumber(u) &&
                    (o = setTimeout(function () {
                      (a = !0), r.reject();
                    }, u)),
                  r.promise
                );
              },
              processGuideEventCache = function () {
                var e = [].concat(guideEvtCache);
                (guideEvtCache = []), e.length > 0 && _.map(e, writeGuideEvent);
              },
              getGuideEventCache = function () {
                return guideEvtCache;
              },
              initializeResourceCenter = function (e) {
                return pendo.BuildingBlocks.BuildingBlockResourceCenter.initializeResourceCenter(
                  e
                );
              },
              crossFrameChannel = { postMessage: _.noop, close: _.noop },
              initGuides = function () {
                (guideEvtCache = []),
                  ConfigReader.get("preventUnloadListener") !== !0 &&
                    (attachEventInternal(
                      window,
                      "unload",
                      processGuideEventCache
                    ),
                    attachEventInternal(window, "unload", function () {
                      store.dispatch("frames/leave");
                    }));
                var e = ConfigReader.get("guides.tooltip.arrowSize");
                _.isNumber(e) && (pendo.TOOLTIP_ARROW_SIZE = e),
                  (crossFrameChannel = connectChannelToStore(
                    createCrossFrameChannel(store),
                    store
                  )),
                  store.dispatch("frames/join"),
                  CrossTabGuideState.init();
              },
              areGuidesDisabled = function () {
                return (
                  ConfigReader.get("guides.disabled", !1) ||
                  ConfigReader.get("disableGuides", !1) ||
                  !pendoCore
                );
              },
              areGuidesDelayed = function () {
                return (
                  ConfigReader.get("guides.delay", !1) ||
                  ConfigReader.get("delayGuides", !1)
                );
              },
              setGuidesDisabled = function (e) {
                originalOptions.disableGuides = e;
              },
              createEventPropertiesFromFeatures = makeSafe(function (e) {
                if (e && e.length) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n].featureRule,
                      o = _.map(e[n].eventProperties, function (e) {
                        return e.selector
                          ? e
                          : JSON && JSON.parse && e.rule
                          ? JSON.parse(e.rule)
                          : void 0;
                      });
                    t.push({
                      featureRules: i,
                      eventPropertyRules: o,
                      featureId: e[n].featureId,
                    });
                  }
                  return t;
                }
              }),
              pendoPreview = "pendo-preview",
              pendoDesignerLaunchKey = "pendo-designer-launch";
            pendo.guidesProcessingThreadHandle = null;
            var DEFAULT_TIMER_LENGTH = 500,
              waitThenLoop = function (e) {
                (e = e || DEFAULT_TIMER_LENGTH),
                  (pendo.guidesProcessingThreadHandle = _.delay(function () {
                    (pendo.guidesProcessingThreadHandle = null), startGuides();
                  }, e));
              },
              clearLoopTimer = function () {
                pendo.guidesProcessingThreadHandle &&
                  (clearTimeout(pendo.guidesProcessingThreadHandle),
                  (pendo.guidesProcessingThreadHandle = null));
              },
              stopGuides = function () {
                AutoDisplay.reset(), hideGuides();
                for (var e = 0; e < activeElements.length; e++) {
                  var t = activeElements[e];
                  t.parentNode.removeChild(t);
                }
                activeElements.length = 0;
              },
              currentMode = "default",
              modeProcMap = {},
              registerMode = function (e, t) {
                modeProcMap[e] = t;
              },
              setMode = function (e) {
                return e && "default" != e
                  ? modeProcMap[e]
                    ? void (currentMode = e)
                    : void alert("Bad Mode: " + e)
                  : void (currentMode = "default");
              },
              getMode = function () {
                return currentMode;
              };
            pendo.getMode = getMode;
            var startGuides = function () {
                if ((clearLoopTimer(), areGuidesDisabled()))
                  return void log("guides are disabled.", "guides", "disabled");
                if (areGuidesDelayed())
                  return void log("guides are delayed.", "guides", "delayed");
                if (!CrossTabGuideState.didLoseFocus())
                  try {
                    var e = getActiveGuides();
                    if (!e || 0 === e.length) return;
                    getLoopProc()(e);
                  } catch (t) {
                    writeException(t, "ERROR in guide-loop");
                  } finally {
                    waitThenLoop();
                  }
              },
              manuallyStartGuides = function () {
                getOption("delayGuides") && delete originalOptions.delayGuides,
                  getOption("guides.delay") &&
                    delete originalOptions.guides.delay,
                  startGuides();
              },
              getLoopProc = function () {
                return modeProcMap[currentMode]
                  ? modeProcMap[currentMode]
                  : defaultLoopProc;
              },
              defaultLoopProc = function (e) {
                placeBadgesProc(e),
                  DOMActivation.update(e),
                  launcherProc(e),
                  resourceCenterProc(
                    BuildingBlockResourceCenter.getResourceCenter()
                  ),
                  store.dispatch("frames/updateFrameVisibility"),
                  isGuideShown() ? guideShowingProc() : noGuideShowingProc(e),
                  updatePreview(document, e, lastGuideStepSeen);
              },
              badgeIterator = throttleIterator(
                50,
                createStatefulIterator(function (e) {
                  return e.id;
                })
              ),
              placeBadgesProc = function (e) {
                var t = _.filter(e, isBadge);
                badgeIterator.eachUntil(t, function (e) {
                  e.placeBadge();
                });
              },
              launcherProc = function (e) {
                var t = getLauncherGuideList(e);
                updateLauncher(t, !0);
              },
              noGuideShowingProc = function (e) {
                if (!Permalink.tryDisplay(pendo)) {
                  var t = _.find(e, function (e) {
                      return e.isContinuation(lastGuideStepSeen);
                    }),
                    n = t && t.attributes && t.attributes.doNotResume;
                  return t && !n
                    ? void t.show("continue")
                    : void AutoDisplay.tryDisplay(e, pendo);
                }
              },
              SingletonMessageHandler = createSingletonMessageHandler(
                window,
                isTrustedOrigin2
              );
            _.extend(TopFrameRelay.prototype, {
              init: function (e, t, n) {
                (this._store = e),
                  (this._window = t),
                  (this._singletonMessageHandler = n),
                  (this._ports = {}),
                  (this._isTop = this._window == this._window.top),
                  (this._listeners = []),
                  this._singletonMessageHandler.addEventListener(
                    _.bind(this._controlMessageHandler, this)
                  ),
                  this._isTop || this._connectToTop(250, 21);
              },
              _controlMessageHandler: function (e) {
                var t = tryParseJson(e.data);
                if (t && "pendo::connect" === t.action) {
                  var n = this._createMessagePort({
                    ports: e.ports,
                    destination: e.source,
                    destinationId: t.frameId,
                  });
                  (this._ports[t.frameId] = n),
                    n.addEventListener(
                      "message",
                      _.bind(this._topMessageHandler, this, n)
                    ),
                    n.start(),
                    n.postMessage({ action: "pendo::connectSuccess" });
                }
              },
              _topMessageHandler: function (e, t) {
                t.data &&
                  (/^pendo::/.test(t.data.action) ||
                    this._closed ||
                    ("frames/removeFrame" === t.data.action &&
                      delete this._ports[t.data.frameId],
                    _.each(this._ports, function (n) {
                      e !== n && n.postMessage(t.data);
                    }),
                    e !== this &&
                      _.each(this._listeners, function (e) {
                        e(t);
                      })));
              },
              _openChannel: function () {
                (this._channel = this._createMessageChannel({
                  destination: this._window.top,
                  sourceId: this._store.state.frames.frameId,
                })),
                  (this._port = this._channel.port1),
                  (this._boundFrameConnectHandler = _.bind(
                    this._frameConnectHandler,
                    this
                  )),
                  this._port.addEventListener(
                    "message",
                    this._boundFrameConnectHandler
                  ),
                  this._port.start();
              },
              _closeChannel: function () {
                this._port &&
                  _.isFunction(this._port.close) &&
                  (this._port.close(),
                  (this._port = null),
                  (this._channel = null));
              },
              _connectToTop: function (e, t) {
                this._closeChannel(), this._openChannel();
                var n = [];
                this._channel.port2 && n.push(this._channel.port2),
                  this._window.top.postMessage(
                    JSON.stringify({
                      action: "pendo::connect",
                      frameId: this._store.state.frames.frameId,
                    }),
                    "*",
                    n
                  ),
                  setTimeout(
                    _.bind(function () {
                      this._connected ||
                        (this._closeChannel(),
                        0 === t
                          ? this._store.commit("frames/setConnectFailed")
                          : t > 0 &&
                            this._connectToTop(Math.min(2 * e, 1e4), t - 1));
                    }, this),
                    e
                  );
              },
              _frameConnectHandler: function (e) {
                e.data &&
                  "pendo::connectSuccess" === e.data.action &&
                  ((this._connected = !0),
                  this._port.removeEventListener(
                    "message",
                    this._boundFrameConnectHandler
                  ),
                  _.each(
                    this._listeners,
                    function (e) {
                      this._port.addEventListener("message", e);
                    },
                    this
                  ),
                  (this._listeners.length = 0),
                  this._store.dispatch("frames/join"));
              },
              _createMessageChannel: function (e) {
                if (_.isFunction(this._window.MessageChannel))
                  return new this._window.MessageChannel();
                var t = this._createMessagePort(e);
                return { port1: t };
              },
              _createMessagePort: function (e) {
                function t(e, t) {
                  return e
                    ? function (n) {
                        get(n, "data._sourceFrameId") == e &&
                          t.apply(this, arguments);
                      }
                    : t;
                }
                function n(e) {
                  return function (t) {
                    if (_.isString(t.data)) {
                      var n = _.pick(
                        t,
                        "type",
                        "origin",
                        "source",
                        "ports",
                        "lastEventId"
                      );
                      (n.data = tryParseJson(t.data)), e.call(this, n);
                    } else e.apply(this, arguments);
                  };
                }
                if (e.ports && e.ports.length) return e.ports[0];
                var i = e.destination,
                  o = e.destinationId,
                  r = e.sourceId,
                  a = this._singletonMessageHandler,
                  s = [],
                  d = [];
                return {
                  start: _.noop,
                  close: function () {
                    (this._closed = !0),
                      _.each(
                        s,
                        function (e) {
                          this.removeEventListener("message", e);
                        },
                        this
                      ),
                      (s.length = 0),
                      (d.length = 0);
                  },
                  addEventListener: function (e, i) {
                    if ("message" === e) {
                      var r = n(t(o, i));
                      s.push(i), d.push(r), a.addEventListener(r);
                    }
                  },
                  removeEventListener: function (e, t) {
                    var n = s.indexOf(t);
                    0 > n ||
                      (a.removeEventListener(d[n]),
                      d.splice(n, 1),
                      s.splice(n, 1));
                  },
                  postMessage: function (e) {
                    if (!this._closed) {
                      var t = JSON.stringify(
                        _.extend({ _sourceFrameId: r }, e)
                      );
                      i.postMessage(t, "*");
                    }
                  },
                };
              },
              addEventListener: function (e, t) {
                "message" === e &&
                  (this._isTop
                    ? this._listeners.push(t)
                    : this._connected
                    ? this._port.addEventListener(e, t)
                    : this._listeners.push(t));
              },
              postMessage: function (e) {
                this._closed ||
                  (this._isTop
                    ? this._topMessageHandler(this, { data: e })
                    : this._port && this._port.postMessage(e));
              },
              close: function () {
                (this._closed = !0),
                  (this._listeners.length = 0),
                  _.each(this._ports, function (e) {
                    e.close();
                  }),
                  (this._ports = {}),
                  this._port &&
                    _.isFunction(this._port.close) &&
                    this._port.close();
              },
            });
            var CrossTabGuideState = (function () {
                return {
                  init: function () {
                    pendo.sniffer.addEventListener &&
                      ((CrossTabGuideState.storageKey =
                        "_pendo_lastStepAdvanced." + pendo.apiKey),
                      window.addEventListener(
                        "storage",
                        CrossTabGuideState.storageChanged
                      ));
                  },
                  didLoseFocus: function () {
                    return !!CrossTabGuideState.receivedStateChangeAt;
                  },
                  didStorageChangeInOtherTab: function (e, t) {
                    return e &&
                      e.tabId &&
                      EventTracer.getTabId() &&
                      e.tabId !== EventTracer.getTabId() &&
                      (!t || !t.time || e.time > t.time)
                      ? !0
                      : !1;
                  },
                  storageChanged: function (e) {
                    if (e.key === CrossTabGuideState.storageKey) {
                      var t;
                      try {
                        t = JSON.parse(agentStorage.read("lastStepAdvanced"));
                      } catch (n) {}
                      CrossTabGuideState.didStorageChangeInOtherTab(
                        t,
                        lastGuideStepSeen
                      ) &&
                        (clearLoopTimer(),
                        (lastGuideStepSeen =
                          applyLastAdvancedCache(lastGuideStepSeen)),
                        (pendo.lastGuideStepSeen = lastGuideStepSeen),
                        CrossTabGuideState.receivedStateChangeAt ||
                          ((CrossTabGuideState.receivedStateChangeAt =
                            getNow()),
                          window.addEventListener(
                            "focus",
                            CrossTabGuideState.regainFocus
                          )));
                    }
                  },
                  regainFocus: function () {
                    (CrossTabGuideState.receivedStateChangeAt = null),
                      window.removeEventListener(
                        "focus",
                        CrossTabGuideState.regainFocus
                      ),
                      stopGuides(),
                      startGuides();
                  },
                };
              })(),
              PASSIVE_MODE = "passive",
              FramesModule = (function () {
                function e(e) {
                  var t = _.pick(
                    e,
                    "id",
                    "name",
                    "launchMethod",
                    "isMultiStep",
                    "steps",
                    "control"
                  );
                  return (
                    (t.attributes = _.pick(
                      e.attributes,
                      "overrideAutoThrottling",
                      "priority"
                    )),
                    (t._shouldBeAddedToLauncher = _.isFunction(
                      e.shouldBeAddedToLauncher
                    )
                      ? e.shouldBeAddedToLauncher()
                      : !1),
                    (t._shouldBeAddedToResourceCenter = _.isFunction(
                      e.shouldBeAddedToResourceCenter
                    )
                      ? e.shouldBeAddedToResourceCenter()
                      : !1),
                    (t.steps = _.map(e.steps, function (e) {
                      return _.pick(
                        e,
                        "id",
                        "guideId",
                        "type",
                        "seenReason",
                        "seenState",
                        "snoozeEndTime",
                        "regexUrlRule",
                        "elementPathRule"
                      );
                    })),
                    t
                  );
                }
                function t(t) {
                  return _.map(t, e);
                }
                var n = {},
                  i = EventTracer.addTracerIds({}),
                  o = {
                    frameId: i.frameId,
                    leaderId: null,
                    tabId: i.tabId,
                    topId: null,
                    frames: {},
                    guidesLoaded: !1,
                  },
                  r = {
                    changeGuideList: function (e, n) {
                      var i = e.state,
                        o = t(n);
                      crossFrameChannel.postMessage({
                        action: "frames/receiveGuideList",
                        frameId: i.frameId,
                        tabId: i.tabId,
                        guides: o,
                      });
                    },
                    receiveGuideList: function (e, t) {
                      e.getters.isCurrentTab()(t.tabId) &&
                        (e.commit("setGuideList", t),
                        t.frameId === e.state.frameId &&
                          e.commit("setGuidesLoaded"),
                        updateMasterGuideList(e.state));
                    },
                    join: function (e) {
                      stopGuides(),
                        registerMode(PASSIVE_MODE, guidePassiveRenderer),
                        registerMode("paused", _.noop),
                        setMode("paused");
                      var n = e.state,
                        i = window.top == window,
                        o = n.frames[n.frameId];
                      e.commit("removeFrame", n.frameId),
                        e.commit("setGuideList", {
                          frameId: n.frameId,
                          guides: t(getActiveGuides()),
                        }),
                        e.dispatch("receiveFrame", {
                          tabId: n.tabId,
                          frame: _.extend(
                            {
                              id: n.frameId,
                              joinedAt: getNow(),
                              isTop: i,
                              visibility: i ? "visible" : "unknown",
                            },
                            o
                          ),
                        });
                    },
                    receiveFrame: function (e, t) {
                      e.getters.isCurrentTab()(t.tabId) &&
                        ((e.state.frames[t.frame.id] &&
                          e.state.frames[t.frame.id].id) ||
                          (e.commit("addFrame", t.frame),
                          t.frame.isTop && e.commit("setTopId", t.frame.id),
                          crossFrameChannel.postMessage({
                            action: "frames/receiveFrame",
                            tabId: o.tabId,
                            frame: o.frames[o.frameId],
                          }),
                          e.dispatch("waitThenElectLeader")));
                    },
                    leave: function (e) {
                      var t = e.state;
                      crossFrameChannel.postMessage({
                        action: "frames/removeFrame",
                        frameId: t.frameId,
                        tabId: t.tabId,
                      }),
                        _.each(t.frames, function (t) {
                          e.commit("removeFrame", t.id);
                        }),
                        crossFrameChannel.close(),
                        clearMode();
                    },
                    removeFrame: function (e, t) {
                      e.getters.isCurrentTab()(t.tabId) &&
                        (e.commit("removeFrame", t.frameId),
                        _.each(n, function (e, i) {
                          0 === i.indexOf(t.frameId + "/") &&
                            (e.reject(), delete n[i]);
                        }),
                        e.dispatch("electLeader"));
                    },
                    waitThenElectLeader: _.debounce(function (e) {
                      e.dispatch("electLeader");
                    }, 50),
                    electLeader: function (e) {
                      var t = e.state;
                      if (t.topId)
                        e.dispatch("followLeader", {
                          tabId: t.tabId,
                          leaderId: t.topId,
                        });
                      else {
                        var n = _.min(t.frames, "joinedAt");
                        e.dispatch("followLeader", {
                          tabId: t.tabId,
                          leaderId: n.id,
                        });
                      }
                      updateMasterGuideList(e.state);
                    },
                    followLeader: function (e, t) {
                      e.getters.isCurrentTab()(t.tabId) &&
                        (e.commit("setLeaderId", t.leaderId),
                        e.dispatch("setRenderMode"));
                    },
                    setRenderMode: function (e) {
                      setMode(e.getters.isLeader() ? "default" : PASSIVE_MODE);
                    },
                    showGuideStep: function (e, t) {
                      function n() {
                        var o = i.shift();
                        return o
                          ? e
                              .dispatch(
                                "requestShowGuideStepInFrame",
                                _.extend({ frameId: o.id }, t)
                              )
                              .then(function (e) {
                                return e.error
                                  ? q.reject(e.error)
                                  : e.isShown
                                  ? e
                                  : n();
                              })
                          : q.resolve({ isShown: !1 });
                      }
                      var i = _.filter(e.state.frames, function (n) {
                        return (
                          n.id !== e.state.frameId &&
                          "hidden" !== n.visibility &&
                          n.guides &&
                          n.guides[t.guideId]
                        );
                      });
                      return n();
                    },
                    requestShowGuideStepInFrame: function (e, t) {
                      var i = t.frameId + "/" + pendo.randomString(32),
                        o = q.defer();
                      return (
                        (n[i] = o),
                        crossFrameChannel.postMessage(
                          _.extend(
                            {
                              action: "frames/showGuideStepInFrame",
                              tabId: e.state.tabId,
                              requestId: i,
                            },
                            t
                          )
                        ),
                        o.promise
                      );
                    },
                    showGuideStepInFrame: function (e, t) {
                      if (
                        e.getters.isCurrentTab()(t.tabId) &&
                        e.state.frameId === t.frameId
                      ) {
                        var n = findGuideById(t.guideId),
                          i = n && n.findStepById(t.stepId);
                        i
                          ? GuideDisplay.showLocal(i, t.reason).then(function (
                              n
                            ) {
                              e.dispatch("guideStepShownInFrame", {
                                action: "frames/receiveGuideStepShownInFrame",
                                requestId: t.requestId,
                                guideId: t.guideId,
                                stepId: t.stepId,
                                isShown: n,
                              });
                            })
                          : e.dispatch("guideStepShownInFrame", {
                              action: "frames/receiveGuideStepShownInFrame",
                              requestId: t.requestId,
                              guideId: t.guideId,
                              stepId: t.stepId,
                              isShown: !1,
                            });
                      }
                    },
                    guideStepShownInFrame: function (e, t) {
                      crossFrameChannel.postMessage(
                        _.extend(
                          {
                            action: "frames/receiveGuideStepShownInFrame",
                            tabId: e.state.tabId,
                            frameId: e.state.frameId,
                          },
                          t
                        )
                      );
                    },
                    receiveGuideStepShownInFrame: function (e, t) {
                      if (e.getters.isCurrentTab()(t.tabId)) {
                        var i = n[t.requestId];
                        i && (i.resolve(t), delete n[t.requestId]),
                          e.getters.isShownInFrame()(t.frameId, {
                            id: t.stepId,
                          }) !== t.isShown &&
                            e.commit("setStepShown", {
                              frameId: t.frameId,
                              stepId: t.stepId,
                              shown: t.isShown,
                            });
                      }
                    },
                    hideGuides: function (e) {
                      crossFrameChannel.postMessage({
                        action: "frames/receiveHideGuides",
                        tabId: e.state.tabId,
                        frameId: e.state.frameId,
                      }),
                        e.commit("hideGuides");
                    },
                    receiveHideGuides: function (e, t) {
                      e.getters.isCurrentTab()(t.tabId) &&
                        e.state.frameId !== t.frameId &&
                        (hideGuides(), e.commit("hideGuides"));
                    },
                    hideGuideStep: function (e, t) {
                      e.getters.isShownInAnotherFrame()({ id: t.stepId }) &&
                        crossFrameChannel.postMessage({
                          action: "frames/hideGuideStepInFrame",
                          tabId: e.state.tabId,
                          guideId: t.guideId,
                          stepId: t.stepId,
                          options: t.options,
                        });
                    },
                    hideGuideStepInFrame: function (e, t) {
                      if (e.getters.isCurrentTab()(t.tabId)) {
                        var n = pendo.findGuideById(t.guideId),
                          i = n && n.findStepById(t.stepId);
                        i && i.hide(t.options);
                      }
                    },
                    guideStepHiddenInFrame: function (e, t) {
                      crossFrameChannel.postMessage(
                        _.extend(
                          {
                            action: "frames/receiveGuideStepHiddenInFrame",
                            tabId: e.state.tabId,
                            frameId: e.state.frameId,
                          },
                          t
                        )
                      );
                    },
                    receiveGuideStepHiddenInFrame: function (e, t) {
                      e.getters.isCurrentTab()(t.tabId) &&
                        e.getters.isShownInFrame()(t.frameId, {
                          id: t.stepId,
                        }) &&
                        e.commit("setStepShown", {
                          frameId: t.frameId,
                          stepId: t.stepId,
                          shown: !1,
                        });
                    },
                    changeLastGuideStepSeen: function (e, t) {
                      crossFrameChannel.postMessage({
                        action: "frames/receiveLastGuideStepSeen",
                        tabId: e.state.tabId,
                        frameId: e.state.frameId,
                        lastGuideStepSeen: t,
                      }),
                        e.commit(
                          "healthCheck/updateStepState",
                          { id: t.guideStepId, seenState: t.state },
                          { root: !0 }
                        );
                    },
                    receiveLastGuideStepSeen: function (e, t) {
                      if (
                        e.getters.isCurrentTab()(t.tabId) &&
                        t.frameId !== e.state.frameId
                      ) {
                        pendo.lastGuideStepSeen = lastGuideStepSeen =
                          t.lastGuideStepSeen;
                        var n = pendo.findGuideById(lastGuideStepSeen.guideId),
                          i =
                            n && n.findStepById(lastGuideStepSeen.guideStepId);
                        i &&
                          ((i.seenState = lastGuideStepSeen.state),
                          (i.seenReason = lastGuideStepSeen.seenReason),
                          lastGuideStepSeen.snoozeEndTime &&
                            (i.snoozeEndTime = lastGuideStepSeen.snoozeEndTime),
                          e.commit(
                            "updateLastGuideStepSeen",
                            lastGuideStepSeen
                          ),
                          e.commit("healthCheck/updateStepState", i, {
                            root: !0,
                          }));
                      }
                    },
                    startPreview: function () {
                      crossFrameChannel.postMessage({
                        action: "frames/receiveStartPreview",
                        "pendo-preview":
                          pendoLocalStorage.getItem(pendoPreview),
                      });
                    },
                    restartPreview: function () {
                      crossFrameChannel.postMessage({
                        action: "frames/receiveRestartPreview",
                        "pendo-preview":
                          pendoLocalStorage.getItem(pendoPreview),
                      });
                    },
                    stopPreview: function () {
                      crossFrameChannel.postMessage({
                        action: "frames/receiveStopPreview",
                      });
                    },
                    receiveStartPreview: function (e, t) {
                      pendoLocalStorage.setItem(pendoPreview, t[pendoPreview]),
                        forceGuideReload();
                    },
                    receiveRestartPreview: function (e, t) {
                      pendoLocalStorage.setItem(pendoPreview, t[pendoPreview]),
                        (lastGuideStepSeen = restartPreview(
                          pendoLocalStorage,
                          activeGuides,
                          lastGuideStepSeen
                        ));
                    },
                    receiveStopPreview: function () {
                      exitPreviewMode();
                    },
                    updateFrameVisibility: function (e, t) {
                      if (
                        !e.getters.isTop() &&
                        !e.state.disableFrameVisibilityCheck
                      )
                        try {
                          var n = "unknown";
                          null == t && (t = window.frameElement),
                            t &&
                              (n = isElementVisible(t) ? "visible" : "hidden"),
                            e.getters.frameVisibility() !== n &&
                              (e.commit("setFrameVisibility", {
                                frameId: e.state.frameId,
                                visibility: n,
                              }),
                              crossFrameChannel.postMessage({
                                action: "frames/receiveFrameVisibility",
                                frameId: e.state.frameId,
                                visibility: n,
                              }));
                        } catch (i) {
                          e.commit("disableFrameVisibilityCheck");
                        }
                    },
                    receiveFrameVisibility: function (e, t) {
                      e.commit("setFrameVisibility", t);
                    },
                  },
                  a = {
                    addFrame: function (e, t) {
                      var n = t.id;
                      e.frames[n] = _.extend({}, e.frames[n], t);
                    },
                    removeFrame: function (e, t) {
                      delete e.frames[t];
                    },
                    setGuideList: function (e, t) {
                      var n = t.frameId;
                      e.frames[n] = _.extend({}, e.frames[n], {
                        guides: _.indexBy(t.guides, "id"),
                      });
                    },
                    setStepShown: function (e, t) {
                      var n = t.frameId,
                        i = (e.frames[n] = _.extend({}, e.frames[n]));
                      (i.shown = _.extend({}, i.shown)),
                        (i.shown[t.stepId] = t.shown);
                    },
                    setLeaderId: function (e, t) {
                      e.leaderId = t;
                    },
                    setTabId: function (e, t) {
                      e.tabId = t;
                    },
                    setTopId: function (e, t) {
                      e.topId = t;
                    },
                    setFrameVisibility: function (e, t) {
                      var n = t.frameId;
                      e.frames[n] = _.extend({}, e.frames[n], {
                        visibility: t.visibility,
                      });
                    },
                    disableFrameVisibilityCheck: function (e) {
                      e.disableFrameVisibilityCheck = !0;
                    },
                    hideGuides: function (e) {
                      _.each(e.frames, function (e) {
                        _.each(e.shown, function (t, n) {
                          e.shown[n] = !1;
                        });
                      });
                    },
                    setChannelType: function (e, t) {
                      e.channelType = t;
                    },
                    setGuidesLoaded: function (e) {
                      e.guidesLoaded = !0;
                    },
                    setConnectFailed: function (e) {
                      e.connectFailed = !0;
                    },
                    updateLastGuideStepSeen: function (e, t) {
                      _.each(e.frames, function (e) {
                        var n = e.guides[t.guideId];
                        if (n) {
                          var i = _.findWhere(n.steps, { id: t.guideStepId });
                          i &&
                            ((i.seenState = t.state),
                            (i.seenReason = t.seenReason),
                            t.snoozeEndTime &&
                              (i.snoozeEndTime = t.snoozeEndTime));
                        }
                      });
                    },
                  },
                  s = {
                    isLeader: function (e) {
                      return e.leaderId === e.frameId;
                    },
                    isFollower: function (e) {
                      return !!e.leaderId && e.leaderId !== e.frameId;
                    },
                    isCurrentTab: function (e) {
                      return function (t) {
                        return "TopFrameRelay" === e.channelType
                          ? !0
                          : e.tabId === t;
                      };
                    },
                    isTop: function (e) {
                      return e.topId === e.frameId;
                    },
                    frameVisibility: function (e) {
                      var t = e.frames ? e.frames[e.frameId] : {};
                      return t.visibility || "unknown";
                    },
                    isGuideInThisFrame: function (e) {
                      return function (t) {
                        var n = e.frames && e.frames[e.frameId],
                          i = (n && n.guides) || {};
                        return !!i[t.id];
                      };
                    },
                    isGuideInDifferentFrame: function (e) {
                      return function (t) {
                        return _.any(e.frames, function (n, i) {
                          return i === e.frameId
                            ? !1
                            : n.guides && n.guides[t.id];
                        });
                      };
                    },
                    isShownInAnotherFrame: function (e) {
                      return function (t) {
                        return _.any(e.frames, function (n, i) {
                          return i === e.frameId
                            ? !1
                            : n.shown && n.shown[t.id];
                        });
                      };
                    },
                    isShownInFrame: function (e) {
                      return function (t, n) {
                        var i = e.frames && e.frames[t],
                          o = (i && i.shown) || {};
                        return !(!o || !o[n.id]);
                      };
                    },
                    hasFrames: function (e) {
                      return _.size(e.frames) > 1;
                    },
                    shouldBeAddedToLauncher: function (e, t) {
                      return function (n) {
                        return (
                          t.isLeader() &&
                          _.any(e.frames, function (e) {
                            var t = e.guides && e.guides[n.id];
                            return t && t._shouldBeAddedToLauncher;
                          })
                        );
                      };
                    },
                    shouldBeAddedToResourceCenter: function (e, t) {
                      return function (n) {
                        return (
                          t.isLeader() &&
                          _.any(e.frames, function (e) {
                            var t = e.guides && e.guides[n.id];
                            return t && t._shouldBeAddedToResourceCenter;
                          })
                        );
                      };
                    },
                  };
                return {
                  actions: r,
                  mutations: a,
                  getters: s,
                  state: o,
                  requests: n,
                };
              })(),
              lastLauncherHash,
              HealthCheckModule = (function () {
                var e = ["advanced", "dismissed", "snoozed"],
                  t = { steps: {}, exceptions: {} },
                  n = {
                    init: function (e, t) {
                      _.each(t, function (t) {
                        _.each(t.steps, function (t) {
                          e.commit("updateStepState", t);
                        });
                      });
                    },
                    fixSeenStateAndLogError: function (e, t) {
                      var n = t.step,
                        i = t.reason;
                      if (!e.state.exceptions[n.id]) {
                        var o = n.seenState,
                          r = e.state.steps[n.id];
                        r && r.seenState && (n.seenState = r.seenState),
                          (e.state.exceptions[n.id] = !0),
                          e.dispatch("logRedisplayError", {
                            id: n.id,
                            guideId: n.guideId,
                            reason: i,
                            seenState: r.seenState,
                            previousSeenState: o,
                          });
                      }
                    },
                    logRedisplayError: function (e, t) {
                      writeErrorPOST(
                        [
                          'Attempted redisplay of guide="',
                          t.guideId,
                          '" step="',
                          t.id,
                          '" reason="',
                          t.reason,
                          '" seenState="',
                          t.seenState,
                          '" previousSeenState="',
                          t.previousSeenState,
                          '"',
                        ].join()
                      );
                    },
                  },
                  i = {
                    updateStepState: function (e, t) {
                      var n = getNow();
                      e.steps[t.id] = _.extend({}, e.steps[t.id], {
                        pageId: t.pageId,
                        regexUrlRule: t.regexUrlRule,
                        seenState: t.seenState,
                        updatedAt: n,
                        allowedAt: n + 6e4,
                      });
                    },
                    resetStepStatus: function (e) {
                      e.steps = {};
                    },
                  },
                  o = {
                    isRedisplay: function (t) {
                      return function (n) {
                        var i = t.steps[n.id];
                        return i
                          ? n.resetAt > i.updatedAt
                            ? !1
                            : getNow() >= i.allowedAt
                            ? !1
                            : _.contains(e, i.seenState) &&
                              !_.contains(e, n.seenState)
                          : !1;
                      };
                    },
                    isMissingPageRule: function (e) {
                      return function (t) {
                        var n = e.steps[t.id];
                        return n && n.regexUrlRule && !t.regexUrlRule ? !0 : !1;
                      };
                    },
                  };
                return { actions: n, mutations: i, getters: o, state: t };
              })(),
              store = createStore();
            store.subscribe(function (e, t) {});
            var OBM = "onboarding",
              all_ob_guides = [],
              completedGuidesSet = [],
              addCompletedGuides = function (e) {
                (e = [].concat(e)),
                  (completedGuidesSet = _.union(completedGuidesSet, e));
              },
              wasGuideAlreadyCompleted = function (e) {
                return _.contains(completedGuidesSet, e);
              },
              shouldSwitchToOBM = function (e) {
                return !1;
              },
              startOBM = function () {
                resetPendoUI(), removeLauncher();
                var e = pendo.guideWidget;
                e &&
                  ((e.hidePoweredBy = !0),
                  e.data && (e.data.enableSearch = !1));
                var t = _.extend(
                  {
                    addHeight: 70,
                    addWidth: -10,
                    addUISection: buildOBProgressUI,
                  },
                  pendo.guideWidget.data
                );
                createLauncher(t, !1),
                  dom(launcherBadge.element).addClass("onboarding"),
                  dom(launcherTooltipDiv).addClass("onboarding setup"),
                  autoShowLauncherList(getGuideStats()),
                  setMode(OBM);
              },
              autoShowLauncherList = function (e) {
                e.percentComplete > 0 ||
                  "yes" == agentStorage.read("launcher-closed");
              },
              buildOBProgressUI = function (e) {
                var t = [
                  "<div class='_pendo-launcher-onboarding-progress_'>",
                  "<div class='_pendo-progress-area-inner_'>",
                  "<label class='percentComplete'></label><label>% Complete</label>",
                  "<div class='_pendo-progress-bar-outer_'>",
                  "<div class='_pendo-progress-bar-inner_'></div>",
                  "</div>",
                  "</div>",
                  "</div>",
                ].join("");
                dom("._pendo-launcher-footer_", e).append(dom(t));
              },
              updateProgressUI = function (e) {
                dom("._pendo-progress-area-inner_ label.percentComplete").html(
                  e.percentComplete
                ),
                  dom("._pendo-progress-bar-inner_").css(
                    "width: " + e.percentComplete + "%"
                  );
              },
              isOB = function (e) {
                return e && e.attributes && !!e.attributes.isOnboarding;
              },
              isOBAndCanShow = function (e) {
                return isOB(e) && isLauncher(e);
              },
              isComplete = function (e) {
                if (wasGuideAlreadyCompleted(e)) return !0;
                var t = _.last(e.steps);
                return (
                  e.steps.length > 1 &&
                    "lightbox" == t.type &&
                    (t = _.last(e.steps, 2)[0]),
                  "advanced" == t.seenState || "dismissed" == t.seenState
                );
              },
              isSkipped = function (e) {
                return !1;
              },
              isInProgress = function (e) {
                var t = _.pluck(e.steps, "seenState"),
                  n = _.any(t, function (e) {
                    return "active" == e;
                  });
                return n ? !0 : 2 == _.size(_.uniq(t));
              },
              isNotStarted = function (e) {
                return _.any(
                  _.initial(_.pluck(e.steps, "seenState")),
                  function (e) {
                    return "dismissed" == e;
                  }
                )
                  ? !0
                  : _.all(_.pluck(e.steps, "seenState"), function (e) {
                      return "undefined" == typeof e;
                    });
              },
              getGuideStats = function (e) {
                e = e || all_ob_guides;
                var t = _.filter(e, isComplete),
                  n = _.filter(_.without.apply(_, [e].concat(t)), isSkipped),
                  i = _.filter(
                    _.without.apply(_, [e].concat(t, n)),
                    isInProgress
                  ),
                  o = _.filter(
                    _.without.apply(_, [e].concat(t, n, i)),
                    isNotStarted
                  ),
                  r = {
                    total: e.length,
                    isCompleted: e.length == t.length + n.length,
                    percentComplete: Math.round(
                      ((t.length + n.length) / e.length) * 100
                    ),
                    completed: t,
                    skipped: n,
                    inProgress: i,
                    notStarted: o,
                  };
                return r;
              },
              updateOnboardingState = function () {
                var e = getGuideStats(),
                  t = dom(launcherTooltipDiv);
                t.removeClass("setup"),
                  e.isCompleted
                    ? t.addClass("complete")
                    : t.removeClass("complete");
              },
              isOnboardingCompleted = function () {
                var e = dom(launcherTooltipDiv);
                return e.hasClass("complete");
              },
              ob_proc = function (e) {
                var t = _.filter(e, isOBAndCanShow),
                  n = getGuideStats();
                addCompletedGuides(n.completed),
                  updateProgressUI(n),
                  updateLauncherOnboardingContent(t),
                  (updateLauncher = function () {
                    return !0;
                  }),
                  defaultLoopProc(e),
                  dom(launcherTooltipDiv).hasClass("setup") ||
                    isOnboardingCompleted() ||
                    !n.isCompleted ||
                    (updateOnboardingState(), onboardingHasCompleted());
              };
            registerMode(OBM, ob_proc);
            var updateLauncherOnboardingContent = function (e) {
                var t = Sizzle(
                  "._pendo-launcher_ ._pendo-launcher-guide-listing_"
                );
                return t.length
                  ? ((t = t[0]),
                    _.map(e, function (e) {
                      addLauncherItem(t, e);
                    }),
                    e.length)
                  : (log("missing luancher body", "launcher", "guides"), !1);
              },
              pickStatusToUse = function (e, t) {
                return "complete" == e ? "complete" : t;
              },
              handleGuideStatusChanges = function (e, t, n) {
                n != t && "complete" == n && guideHasCompleted(e),
                  n != t && "skipped" == n && guideWasSkipped(e);
              },
              guideWasSkipped = function (e) {
                guideDone(e);
              },
              guideHasCompleted = function (e) {
                guideDone(e);
              },
              guideDone = function (e) {
                expandLauncherList();
              },
              addLauncherItem = function (e, t) {
                var n,
                  i = getOnboardingState(t),
                  o = Sizzle("#launcher-" + t.id);
                if (o.length) {
                  n = o[0];
                  var r = getOnboardingClass(n),
                    a = pickStatusToUse(r, i);
                  if (r != a) {
                    var s = dom(n);
                    s.removeClass(makeOBClass("bad")),
                      s.removeClass(makeOBClass(r)),
                      s.addClass(makeOBClass(a));
                  }
                  handleGuideStatusChanges(t, r, i);
                } else
                  (n = buildLauncherItem(t)),
                    dom(n).addClass(makeOBClass(i)),
                    e.appendChild(n);
                return addItemState(t, i, n), n;
              },
              addItemState = function (e, t, n) {
                var i,
                  o = Sizzle("._pendo-launcher-item-status_", n);
                o.length
                  ? (i = o[0])
                  : ((i = dom(
                      "<div class='_pendo-launcher-item-status_'></div>"
                    )[0]),
                    n.appendChild(i));
                var r;
                (r =
                  "skipped" == t
                    ? "Task Skipped"
                    : "in-progress" == t
                    ? "Task in Progress (" + renderStepPosition(null, e) + ")"
                    : ""),
                  dom(i).html(r);
              },
              makeOBClass = function (e) {
                return "_pendo-onboarding-status-" + e + "_";
              },
              getOnboardingState = function (e) {
                return isComplete(e)
                  ? "complete"
                  : isSkipped(e)
                  ? "skipped"
                  : isInProgress(e)
                  ? "in-progress"
                  : isNotStarted(e)
                  ? "not-started"
                  : "bad";
              },
              getOnboardingClass = function (e) {
                var t = ["complete", "skipped", "in-progress", "not-started"];
                return e
                  ? _.find(t, function (t) {
                      return dom(e).hasClass(makeOBClass(t));
                    })
                  : null;
              },
              getActiveGuide = function () {
                var e,
                  t,
                  n,
                  i = _.find(getActiveGuides(), function (e) {
                    return e.isShown();
                  });
                return i
                  ? (get(i, "attributes.resourceCenter.isModule") &&
                      (i = BuildingBlockResourceCenter.getResourceCenter()),
                    (e = _.find(i.steps, function (e, t) {
                      return (n = t), e.isShown();
                    })),
                    (t = _.filter(i.steps, function (e, t) {
                      return e.isShown();
                    })),
                    { guide: i, steps: t, step: e, stepIndex: n })
                  : null;
              },
              smartNextStep = function (e) {
                var t = getActiveGuide();
                if (t) {
                  var n = t.guide.steps[t.stepIndex + 1],
                    i = function () {
                      var e = Sizzle(n.elementPathRule);
                      0 !== e.length && pendo._.some(e, isElementVisible)
                        ? pendo.onGuideAdvanced(t.step)
                        : pendo.onGuideAdvanced(n);
                    };
                  (e = e || 0), setTimeout(i, e);
                }
              },
              advanceOn = function (e, t) {
                var n = getActiveGuide();
                t = t || n.step.elementPathRule;
                var i = Sizzle(t)[0],
                  o = function () {
                    pendo.onGuideAdvanced(), detachEvent(i, e, o, !0);
                  };
                attachEvent(i, e, o, !0);
              },
              smartFirstStep = function () {
                dom("._pendo-guide_").css("display:none;");
                var e = pendo.getCurrentUrl(),
                  t = getActiveGuide(),
                  n = t.guide.steps,
                  i = _.filter(_.rest(n), function (e) {
                    return !!e.pageId;
                  }),
                  o = _.indexOf(
                    n,
                    _.find(i, function (t) {
                      return pendo.testUrlForStep(t.regexUrlRule, e);
                    })
                  );
                if ((log("startingPoint is " + o), -1 == o))
                  return void dom("._pendo-guide_").css("display:block;");
                var r = n[Math.max(0, o - 1)];
                pendo.log("found starting step to be " + r.id),
                  pendo.onGuideAdvanced(r);
              },
              renderStepPosition = function (e, t, n) {
                if (t) {
                  if (!n) {
                    var i = [].concat(t.steps).reverse();
                    n = _.findWhere(i, { seenState: "active" });
                  }
                } else {
                  var o = getActiveGuide();
                  if (!o) return;
                  (t = o.guide), (n = o.step);
                }
                (e = e || "Step <%= currPos %> of <%= total %>"),
                  (e = _.template(e));
                var r = {
                  currPos: t.getPositionOfStep(n),
                  total: t.getTotalSteps(),
                };
                return e(r);
              };
            (pendo.guideDev = {
              getActiveGuide: getActiveGuide,
              smartNextStep: smartNextStep,
              smartFirstStep: smartFirstStep,
              advanceOn: advanceOn,
              renderStepPosition: renderStepPosition,
            }),
              (pendo.badgesShown = {});
            var BADGE_CSS_NAME = "_pendo-badge_",
              getElementForBadge = getElementForTargeting;
            (Badge.create = function (e) {
              var t = Badge.findStep(e);
              return t
                ? _.reduce(
                    Badge.behaviors,
                    function (n, i) {
                      return i.call(n, e, t);
                    },
                    e.attributes.badge
                  )
                : void 0;
            }),
              (Badge.findStep = function (e) {
                var t = _.find(e.steps, function (e) {
                  return !!e.elementPathRule;
                });
                return t && e.attributes && e.attributes.badge ? t : void 0;
              }),
              (Badge.behaviors = [
                Wrappable,
                Badge,
                InlinePosition,
                AbsolutePosition,
                ClickActivation,
                HoverActivation,
                ShowOnHover,
              ]);
            var placeBadge = function (e, t) {
                t = t || pendo.badgesShown;
                var n = t[e.id],
                  i = n ? n.step() : Badge.findStep(e);
                if (i) {
                  var o = n ? n.target() : getElementForBadge(i),
                    r = get(e, "attributes.resourceCenter");
                  if (r && !store.getters["frames/isLeader"]())
                    return void (
                      n &&
                      _.isFunction(n.hide) &&
                      ((i.overrideElement = undefined),
                      (t[e.id] = undefined),
                      n.hide())
                    );
                  if (!r || e.hasResourceCenterContent) {
                    BuildingBlockResourceCenter.updateNotificationBubbles();
                    var a = !0;
                    i.elementContainsRulesList &&
                      (a =
                        o &&
                        doesElementMatchContainsRules(
                          o,
                          i.elementContainsRulesList
                        )),
                      i.elementPathRule &&
                      pendo.isElementVisible(o) &&
                      pendo.Sizzle.matchesSelector(o, i.elementPathRule) &&
                      a
                        ? (n || (n = Badge.create(e)), n.show(), (t[e.id] = n))
                        : n &&
                          (i.isShown() ||
                            ((i.overrideElement = undefined),
                            (t[e.id] = undefined),
                            n.hide()));
                  }
                }
              },
              removeAllBadges = function () {
                _.map(pendo.badgesShown, removeBadge), (pendo.badgesShown = {});
              },
              removeBadge = function (e) {
                e && _.isFunction(e.hide) && e.hide();
              },
              removeBadgeForGuide = function (e) {
                var t = pendo.badgesShown[e.id];
                t && removeBadge(t);
              },
              adjustBadgesForResize = function (e) {
                debug("adjustBadgesForResize firing"),
                  _.map(pendo.badgesShown, function (e) {
                    e && e.show();
                  });
              };
            attachEventInternal(
              window,
              "resize",
              _.debounce(adjustBadgesForResize, 50)
            ),
              (pendo.TOOLTIP_DEFAULT_WIDTH = 430),
              (pendo.TOOLTIP_DEFAULT_HEIGHT = 200),
              (pendo.TOOLTIP_ARROW_SIZE = 15);
            var TOOLTIP_CSS_NAME = "_pendo-guide-tt_",
              MOBILE_TOOLTIP_CSS_NAME = "_pendo-guide-mobile-tt_",
              lastElementPos = null,
              buildTooltipCSSName = function () {
                return isMobileUserAgent()
                  ? MOBILE_TOOLTIP_CSS_NAME
                  : TOOLTIP_CSS_NAME;
              },
              buildTooltipCSSSelector = function (e) {
                return "#_pendo_g_" + e.id;
              },
              createTooltipGuide = function (e, t) {
                lastElementPos = null;
                var n = getOffsetPosition(e);
                if (0 === n.height && 0 === n.width) return null;
                var i = t.guideElement,
                  o = t.attributes.height,
                  r = t.attributes.width,
                  a = t.attributes.layoutDir;
                i.addClass(buildTooltipCSSName());
                var s = getTooltipDimensions(n, o, r, a);
                return (
                  t && (t.dim = s),
                  i.css({
                    width: s.width,
                    height: s.height,
                    left: s.left,
                    top: s.top,
                  }),
                  n.fixed && i.css({ position: "fixed" }),
                  dom("._pendo-guide-container_", i)
                    .addClass(s.arrowPosition)
                    .css({
                      top: s.content.top,
                      left: s.content.left,
                      width: s.content.width,
                      height: s.content.height,
                    }),
                  buildAndAppendArrow(i[0], s),
                  i[0]
                );
              },
              buildAndAppendArrow = function (e, t) {
                var n = ["top", "right", "bottom", "left"],
                  i = "_pendo-guide-arrow-",
                  o = i + "border-",
                  r = t.arrowPosition,
                  a = _.chain(n)
                    .filter(function (e) {
                      return e !== r;
                    })
                    .map(function (e) {
                      return (
                        "border-" +
                        e +
                        "-width:" +
                        pendo.TOOLTIP_ARROW_SIZE +
                        "px;"
                      );
                    })
                    .value()
                    .join(""),
                  s = dom("div._pendo-guide-arrow_", e)
                    .remove()
                    .findOrCreate("<div class='_pendo-guide-arrow_'></div>"),
                  d = dom("div._pendo-guide-arrow-border_ ", e)
                    .remove()
                    .findOrCreate(
                      "<div class='_pendo-guide-arrow-border_'></div>"
                    );
                _.each(n, function (e) {
                  s.removeClass(i + e + "_").removeClass(e),
                    d.removeClass(o + e + "_").removeClass(e);
                }),
                  s
                    .addClass(i + r + "_")
                    .addClass(r)
                    .css(
                      a +
                        "top:" +
                        t.arrow.top +
                        "px;left:" +
                        t.arrow.left +
                        "px;"
                    ),
                  d
                    .addClass(o + r + "_")
                    .addClass(r)
                    .css(
                      a +
                        "top:" +
                        t.arrow.border.top +
                        "px;left:" +
                        t.arrow.border.left +
                        "px;"
                    ),
                  dom(e).append(s).append(d);
              },
              showTooltipGuide = function (e, t) {
                if (!canStepBeRendered(e)) return null;
                t === undefined && (t = activeElements),
                  (e.element = getElementForGuideStep(e));
                var n = e.element;
                if (!n) return log("No element found for step: " + e.id), null;
                scrollIntoView(n);
                var i = createTooltipGuide(n, e);
                return null === i
                  ? null
                  : ((i.id = pendo.getTooltipDivId(e)),
                    addCloseButton(i, function () {
                      var t = e.getGuide();
                      (!t.isOnboarding() ||
                        confirm(
                          "Are you sure you want to stop this tutorial?"
                        )) &&
                        pendo.onGuideDismissed(e);
                    }),
                    e.hideCredits || pendo._addCredits(i),
                    dom(i).appendTo(getGuideAttachPoint()),
                    t.push(i),
                    attachEvent(
                      i,
                      "mouseover",
                      pendo._.partial(dom.addClass, i, "mouseover")
                    ),
                    attachEvent(
                      i,
                      "mouseout",
                      pendo._.partial(dom.removeClass, i, "mouseover")
                    ),
                    scrollToTooltip(n, i),
                    addBlockOutUI(e),
                    n);
              },
              isLessThan = function (e, t) {
                return t > e;
              },
              isGreaterThan = _.negate(isLessThan),
              lastBlockBox = null,
              hasBlockBoxChanged = function (e) {
                var t = !_.isEqual(e, lastBlockBox);
                return (lastBlockBox = e), t;
              },
              lastBodySize = null,
              hasBodyDimensionsChanged = function (e) {
                var t = !_.isEqual(e, lastBodySize);
                return (lastBodySize = e), t;
              },
              lastScreenCoords = null,
              haveScreenCoordsChanged = function (e) {
                var t = !_.isEqual(e, lastScreenCoords);
                return (lastScreenCoords = e), t;
              },
              addBlockOutUI = function (e) {
                try {
                  if (
                    !e.attributes ||
                    !e.attributes.blockOutUI ||
                    !e.attributes.blockOutUI.enabled
                  )
                    return;
                  var t = e.attributes.blockOutUI,
                    n = [];
                  n.push(e.element),
                    (n = n.concat(
                      _.compact(
                        _.flatten(
                          _.map([].concat(t.additionalElements), function (e) {
                            return Sizzle(e);
                          })
                        )
                      )
                    ));
                  var i = computeBlockOutBoundingBox(n),
                    o = t.padding || 0,
                    r = getClientRect(getBody());
                  i.fixed &&
                    ((r.top = 0),
                    (r.bottom = r.height),
                    (r.left = 0),
                    (r.right = r.width));
                  var a = computeBlockOutOverlayPositions(r, i, o);
                  if (
                    !hasBlockBoxChanged(i) &&
                    !hasBodyDimensionsChanged(r) &&
                    !haveScreenCoordsChanged(a)
                  )
                    return;
                  var s = { "z-index": t.zindex || 1e4, position: "fixed" };
                  t.bgColor && (s["background-color"] = t.bgColor),
                    t.opacity && (s.opacity = t.opacity);
                  var d = dom("body");
                  _.each(a, function (e, t) {
                    d.append(buildBackdropDiv(t, _.extend({}, e, s)));
                  });
                } catch (u) {
                  log("Failed to add BlockOut ui", "error");
                }
              },
              buildBackdropDiv = function (e, t) {
                var n = dom(
                  "div._pendo-guide-tt-region-block_._pendo-region-" + e + "_"
                );
                return (
                  (n =
                    n.length > 0
                      ? n[0]
                      : dom(
                          '<div class="_pendo-guide-tt-region-block_ _pendo-region-' +
                            e +
                            '_"></div>'
                        )),
                  dom(n).css(t),
                  n
                );
              },
              checkPlacementChanged = function (e) {
                var t = _.isEqual(e, lastElementPos);
                return (lastElementPos = e), !t;
              },
              placeTooltip = function (e) {
                var t = e.element || getElementForGuideStep(e),
                  n = getOffsetPosition(t);
                if ((addBlockOutUI(e), checkPlacementChanged(n))) {
                  var i = e.attributes.height,
                    o = e.attributes.width,
                    r = e.attributes.layoutDir,
                    a = getTooltipDimensions(n, i, o, r),
                    s = dom(buildTooltipCSSSelector(e));
                  s.css({
                    top: a.top,
                    left: a.left,
                    position: n.fixed ? "fixed" : "",
                  }),
                    buildAndAppendArrow(s, a);
                }
              },
              getTooltipDimensions = function (e, t, n, i) {
                var o = pendo.TOOLTIP_ARROW_SIZE,
                  r = { arrow: { border: {} }, content: { top: o, left: o } },
                  a = pendo._get_screen_dim();
                return (
                  (r.width = Math.min(n, a.width)),
                  (r.height = t),
                  (r.content.width = r.width - 2 * o),
                  (r.content.height = r.height - 2 * o),
                  i || (i = "auto"),
                  (r = determineHorizontalBias(r, e, a, i)),
                  (r = determineArrowPosition(r, e, a, i)),
                  (r = buildArrowDimensions(r, e, a))
                );
              },
              determineHorizontalBias = function (e, t, n, i) {
                if ("right" == i || "left" == i)
                  return (
                    pendo.log("Setting layout position to " + i),
                    (e.arrow.hbias = i),
                    e
                  );
                var o = n.width / 3,
                  r = [o, 2 * o];
                return (
                  r[0] < t.left && t.left < r[1]
                    ? (e.arrow.hbias = "center")
                    : t.left < n.width / 2
                    ? (e.arrow.hbias = "left")
                    : (e.arrow.hbias = "right"),
                  e
                );
              },
              determineArrowPosition = function (e, t, n, i) {
                if (
                  (i && "DEFAULT" != i && "auto" != i && (e.arrowPosition = i),
                  !e.arrowPosition)
                ) {
                  var o = t.top - documentScrollTop(),
                    r = t.left - documentScrollLeft(),
                    a = r + t.width;
                  o < n.height / 3
                    ? (e.arrowPosition = "top")
                    : o > (2 * n.height) / 3 || "center" == e.arrow.hbias
                    ? (e.arrowPosition = "bottom")
                    : r < e.width && n.width - a < e.width
                    ? (e.arrowPosition = "top")
                    : (e.arrowPosition = e.arrow.hbias);
                }
                return e;
              },
              buildArrowDimensions = function (e, t, n) {
                var i = e.height,
                  o = e.width;
                if (isBrowserInQuirksmode())
                  return buildArrowDimensionsQM(e, t, n);
                if ("top" == e.arrowPosition || "bottom" == e.arrowPosition) {
                  var r = 10,
                    a = 0;
                  "top" == e.arrowPosition
                    ? ((e.top = t.top + t.height),
                      (e.arrow.top = isOldIE(9, 6) ? 6 : 2),
                      (a = -1))
                    : "bottom" == e.arrowPosition &&
                      ((e.top = t.top - i),
                      (e.arrow.top = i - pendo.TOOLTIP_ARROW_SIZE - 1),
                      (e.arrow.top += isOldIE(9, 6) ? 6 : 0),
                      (e.arrow.top += 8 == msie ? -1 : 0),
                      (a = 1));
                  var s = r + pendo.TOOLTIP_ARROW_SIZE,
                    d = o - 3 * pendo.TOOLTIP_ARROW_SIZE - r;
                  if (
                    ("left" == e.arrow.hbias
                      ? ((e.left =
                          t.left +
                          t.width / 2 -
                          (r + 2 * pendo.TOOLTIP_ARROW_SIZE)),
                        (e.arrow.left = s))
                      : "right" == e.arrow.hbias
                      ? ((e.left =
                          t.left -
                          o +
                          t.width / 2 +
                          (r + 2 * pendo.TOOLTIP_ARROW_SIZE)),
                        (e.arrow.left = d))
                      : ((e.left = t.left + t.width / 2 - o / 2),
                        (e.arrow.left = o / 2 - pendo.TOOLTIP_ARROW_SIZE)),
                    e.arrow.floating !== !1)
                  ) {
                    var u = e.left + o - n.width;
                    (u -= Math.max(0, e.arrow.left + u - d)),
                      u > 0 && ((e.left -= u), (e.arrow.left += u));
                    var l = -e.left;
                    (l -= Math.max(0, s - (e.arrow.left - l))),
                      l > 0 && ((e.left += l), (e.arrow.left -= l));
                  }
                  return (
                    (e.arrow.border.top = e.arrow.top + a),
                    (e.arrow.border.left = e.arrow.left),
                    e
                  );
                }
                return (
                  "left" == e.arrow.hbias
                    ? ((e.left = t.left + t.width),
                      (e.arrow.left = 1),
                      (e.arrow.left += isOldIE(10, 6) ? 5 : 0),
                      (e.arrow.border.left = e.arrow.left - 1))
                    : "right" == e.arrow.hbias &&
                      ((e.left = Math.max(0, t.left - o)),
                      (e.arrow.left = o - pendo.TOOLTIP_ARROW_SIZE - 1),
                      (e.arrow.left += isOldIE(10, 6) ? 5 : 0),
                      (e.arrow.left += 7 == msie && trident >= 6 ? 1 : 0),
                      (e.arrow.border.left = e.arrow.left + 1)),
                  (e.top = t.top - i / 2 + t.height / 2),
                  (e.arrow.top = i / 2 - pendo.TOOLTIP_ARROW_SIZE),
                  (e.arrow.border.top = e.arrow.top),
                  e
                );
              };
            (pendo.LB_DEFAULT_WIDTH = 500), (pendo.LB_DEFAULT_HEIGHT = 500);
            var LIGHTBOX_CSS_NAME = "_pendo-guide-lb_",
              canLightboxStepBeShown = function (e) {
                return canStepBeRendered(e);
              },
              addOverlay = function (e, t) {
                var n = !!pendo.dom("._pendo-backdrop_")[0];
                return (
                  get(t, "overlayDiv[0]") ||
                    (t.overlayDiv = dom("<div/>").addClass("_pendo-backdrop_")),
                  n === !1 &&
                    (t.elements.push(t.overlayDiv[0]),
                    t.overlayDiv.appendTo(getGuideAttachPoint())),
                  isBrowserInQuirksmode() &&
                    t.overlayDiv.css({
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                    }),
                  e && dom(t.overlayDiv).addClass("_pendo-onboarding_"),
                  t.overlayDiv
                );
              },
              renderLightboxGuide = function (e) {
                var t = e.guideElement,
                  n = pendo.TOOLTIP_ARROW_SIZE,
                  i = e.attributes.height,
                  o = e.attributes.width,
                  r = Math.floor(o / 2),
                  a = Math.floor(i / 2);
                t.addClass(LIGHTBOX_CSS_NAME).css({
                  top: "50%",
                  left: "50%",
                  "margin-top": -a,
                  "margin-left": -r,
                }),
                  dom("._pendo-guide-container_", t).css({
                    bottom: n,
                    right: n,
                  }),
                  isBrowserInQuirksmode() && t.css({ position: "absolute" });
              },
              showLightboxGuide = function (e, t) {
                if (!canLightboxStepBeShown(e)) return null;
                t === undefined && (t = activeElements),
                  (e.element = getElementForGuideStep(e)),
                  renderLightboxGuide(e);
                var n = e.getGuide() ? e.getGuide().isOnboarding() : !1;
                addOverlay(n, e);
                var i = e.guideElement;
                t.push(i[0]), i.appendTo(getGuideAttachPoint());
              },
              MOBILE_LIGHTBOX_CSS_NAME = "_pendo-guide-mobile-lb_",
              renderMobileLightboxGuide = function (e) {
                var t = e.guideElement;
                t.addClass(MOBILE_LIGHTBOX_CSS_NAME);
              },
              showMobileLightboxGuide = function (e, t) {
                function n(e) {
                  e.preventDefault();
                }
                if (!canLightboxStepBeShown(e)) return null;
                t === undefined && (t = activeElements),
                  (e.element = getElementForGuideStep(e)),
                  renderMobileLightboxGuide(e);
                var i = e.getGuide() ? e.getGuide().isOnboarding() : !1,
                  o = addOverlay(i, e),
                  r = e.guideElement,
                  a = pendo.TOOLTIP_ARROW_SIZE;
                r.css({ width: "", height: "" });
                var s = dom("._pendo-guide-container_", r).css({
                  bottom: a,
                  right: a,
                });
                dom("._pendo-close-guide_", r).remove().prependTo(s),
                  r.appendTo(getGuideAttachPoint()),
                  t.push(r[0]),
                  attachEvent(o[0], "touchmove", n),
                  attachEvent(r[0], "touchmove", n);
              },
              LAUNCHER_SEARCHING_CLASS = "_pendo-launcher-searching_",
              SEARCHBOX_CSS_NAME = "_pendo-launcher-search-box_",
              SEARCHBOX_CSS_SELECTOR = "." + SEARCHBOX_CSS_NAME + " input",
              LAUNCHER_DEFAULT_WIDTH = 330,
              LAUNCHER_DEFAULT_HEIGHT = 310,
              launcherBadge = null,
              launcherTooltipDiv = null,
              isPreventLauncher = !1,
              launcherHash = null,
              launcherActiveClass = "_pendo-launcher-active_",
              launcherElement = null,
              defaultLauncherTemplate = function () {
                return "";
              };
            (pendo.defaultLauncher = function (e, t) {
              defaultLauncherTemplate = t;
            }),
              (Launcher.create = function (e) {
                return _.reduce(
                  Launcher.behaviors,
                  function (e, t) {
                    return t.call(e);
                  },
                  e
                );
              }),
              (Launcher.behaviors = [
                Wrappable,
                Launcher,
                ContentValidation.Launcher,
                LauncherSearch,
                Onboarding,
                WhatsNewList,
              ]);
            var removeLauncher = function () {
                launcherTooltipDiv &&
                  (dom.removeNode(launcherTooltipDiv),
                  (launcherTooltipDiv = null)),
                  launcherElement &&
                    (launcherElement.dispose(), (launcherElement = null)),
                  launcherBadge &&
                    (launcherBadge.dispose(), (launcherBadge = null));
              },
              showHideLauncher = function () {
                isLauncherOnElement() ||
                (!doesLauncherHaveGuides() && !launcherHasActiveSearch())
                  ? hideLauncher()
                  : showLauncher();
              },
              showLauncher = function () {
                launcherBadge && launcherBadge.show();
              },
              hideLauncher = function () {
                isLauncherOnElement() || collapseLauncherList(),
                  launcherBadge && launcherBadge.hide();
              },
              isLauncher = function (e) {
                return e && _.isFunction(e.shouldBeAddedToLauncher)
                  ? e.shouldBeAddedToLauncher()
                  : e &&
                      e.launchMethod &&
                      e.launchMethod.indexOf("launcher") >= 0;
              },
              isLauncherOnElement = function () {
                return pendo.guideWidget &&
                  pendo.guideWidget.data &&
                  "element" === pendo.guideWidget.data.launchType
                  ? !0
                  : !1;
              },
              updateLauncher = function (e, t) {
                return pendo.guideWidget &&
                  _.isFunction(pendo.guideWidget.update)
                  ? pendo.guideWidget.update(e, t)
                  : void 0;
              },
              getLauncherContext = function (e) {
                var t = getMetadata();
                _.isObject(t) || (t = prepareOptions());
                var n = _.extend(
                  {
                    hidePoweredBy: !1,
                    guides: [],
                    guide: {},
                    step: {},
                    metadata: escapeStringsInObject(t),
                  },
                  pendo.guideWidget
                );
                return (n.data = _.extend({}, n.data)), e && (n.guides = e), n;
              },
              buildLauncherItem = function (e) {
                var t = document.createElement("div");
                dom(t).addClass("_pendo-launcher-item_"),
                  dom(t).attr("id", "launcher-" + e.id);
                var n = document.createElement("a");
                return (
                  (n.href = "#"), (n.innerHTML = e.name), t.appendChild(n), t
                );
              },
              addGuideToLauncher = _.compose(showHideLauncher, function (e, t) {
                if (isLauncher(e)) {
                  var n = Sizzle(
                    "._pendo-launcher_ ._pendo-launcher-guide-listing_"
                  )[0];
                  if (n) {
                    var i,
                      o = Sizzle("#launcher-" + e.id);
                    if (
                      ((i = o.length ? o[0] : buildLauncherItem(e)),
                      (o = o.length > 0),
                      _.isNumber(t))
                    ) {
                      var r = Sizzle("._pendo-launcher-item_");
                      r[t]
                        ? i.id != r[t].id && n.insertBefore(i, r[t])
                        : n.appendChild(i);
                    } else n.appendChild(i);
                  }
                }
              }),
              isLauncherAvailable = function () {
                return !!launcherTooltipDiv && !isPreventLauncher;
              },
              isLauncherVisible = function () {
                var e = dom(launcherTooltipDiv);
                return e.hasClass(launcherActiveClass);
              },
              doesLauncherHaveGuides = function () {
                return Sizzle("._pendo-launcher-item_").length > 0;
              },
              collapseLauncherList = function () {
                var e = dom(launcherTooltipDiv);
                e.hasClass(launcherActiveClass) &&
                  (e.removeClass(launcherActiveClass),
                  launcherBadge && launcherBadge.setActive(!1));
              },
              expandLauncherList = function () {
                var e = dom(launcherTooltipDiv);
                e.hasClass(launcherActiveClass) ||
                  (e.addClass(launcherActiveClass),
                  launcherBadge && launcherBadge.setActive(!0));
              },
              toggleLauncher = function () {
                isLauncherAvailable() &&
                  (isLauncherVisible()
                    ? collapseLauncherList()
                    : expandLauncherList());
              },
              initLauncher = function () {
                try {
                  var e = pendo.guideWidget || {},
                    t = e.data || {},
                    n = t.device || { desktop: !0, mobile: !1, iframe: !1 };
                  if ((removeLauncher(), !isMobileUserAgent() && !n.desktop))
                    return;
                  if (isMobileUserAgent() && !n.mobile) return;
                  if (detectMaster() && !n.iframe) return;
                  e.enabled &&
                    (createLauncher(t),
                    hideLauncher(),
                    shouldSwitchToOBM() && startOBM());
                } catch (i) {
                  writeException(i, "ERROR while initializing launcher");
                }
              },
              JWT = (function () {
                function e(e) {
                  try {
                    return JSON.parse(atob(e.split(".")[1]));
                  } catch (t) {
                    return null;
                  }
                }
                function t(e) {
                  return _.isString(e)
                    ? /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/.test(
                        e
                      )
                    : !1;
                }
                function n(e, n) {
                  return (
                    (n = n ? n + ": " : ""),
                    e.jwt || e.signingKeyName
                      ? e.jwt && !e.signingKeyName
                        ? (debug(
                            n +
                              "The jwt is supplied but missing signingKeyName."
                          ),
                          !1)
                        : e.signingKeyName && !e.jwt
                        ? (debug(
                            n +
                              "The signingKeyName is supplied but missing jwt."
                          ),
                          !1)
                        : t(e.jwt)
                        ? !0
                        : (debug(n + "The jwt is invalid."), !1)
                      : (debug(n + "Missing jwt and signingKeyName."), !1)
                  );
                }
                function i(t, i) {
                  if (
                    ((i = i || ""),
                    !getPendoConfigValue("enableSignedMetadata"))
                  )
                    return !1;
                  var o = n(t, i);
                  return getPendoConfigValue("requireSignedMetadata") && !o
                    ? (debug("Pendo will not " + i + "."), !1)
                    : o
                    ? e(t.jwt)
                    : void debug(
                        "JWT is enabled but not being used, falling back to unsigned metadata."
                      );
                }
                return { getJwtOptions: i };
              })();
            (function () {
              function e(e, t) {
                var n = e.split("."),
                  i = g;
                !(n[0] in i) && i.execScript && i.execScript("var " + n[0]);
                for (var o; n.length && (o = n.shift()); )
                  n.length || t === p
                    ? (i = i[o] ? i[o] : (i[o] = {}))
                    : (i[o] = t);
              }
              function t(e, t) {
                if (
                  ((this.index = "number" == typeof t ? t : 0),
                  (this.e = 0),
                  (this.buffer =
                    e instanceof (h ? Uint8Array : Array)
                      ? e
                      : new (h ? Uint8Array : Array)(32768)),
                  2 * this.buffer.length <= this.index)
                )
                  throw Error("invalid index");
                this.buffer.length <= this.index && n(this);
              }
              function n(e) {
                var t,
                  n = e.buffer,
                  i = n.length,
                  o = new (h ? Uint8Array : Array)(i << 1);
                if (h) o.set(n);
                else for (t = 0; i > t; ++t) o[t] = n[t];
                return (e.buffer = o);
              }
              function i(e) {
                (this.buffer = new (h ? Uint16Array : Array)(2 * e)),
                  (this.length = 0);
              }
              function o(e, t) {
                (this.d = E),
                  (this.i = 0),
                  (this.input =
                    h && e instanceof Array ? new Uint8Array(e) : e),
                  (this.c = 0),
                  t &&
                    (t.lazy && (this.i = t.lazy),
                    "number" == typeof t.compressionType &&
                      (this.d = t.compressionType),
                    t.outputBuffer &&
                      (this.a =
                        h && t.outputBuffer instanceof Array
                          ? new Uint8Array(t.outputBuffer)
                          : t.outputBuffer),
                    "number" == typeof t.outputIndex &&
                      (this.c = t.outputIndex)),
                  this.a || (this.a = new (h ? Uint8Array : Array)(32768));
              }
              function r(e, t) {
                (this.length = e), (this.k = t);
              }
              function a(e, t) {
                function n(e, t) {
                  var n,
                    i = e.k,
                    o = [],
                    r = 0;
                  (n = A[e.length]),
                    (o[r++] = 65535 & n),
                    (o[r++] = (n >> 16) & 255),
                    (o[r++] = n >> 24);
                  var a;
                  switch (f) {
                    case 1 === i:
                      a = [0, i - 1, 0];
                      break;
                    case 2 === i:
                      a = [1, i - 2, 0];
                      break;
                    case 3 === i:
                      a = [2, i - 3, 0];
                      break;
                    case 4 === i:
                      a = [3, i - 4, 0];
                      break;
                    case 6 >= i:
                      a = [4, i - 5, 1];
                      break;
                    case 8 >= i:
                      a = [5, i - 7, 1];
                      break;
                    case 12 >= i:
                      a = [6, i - 9, 2];
                      break;
                    case 16 >= i:
                      a = [7, i - 13, 2];
                      break;
                    case 24 >= i:
                      a = [8, i - 17, 3];
                      break;
                    case 32 >= i:
                      a = [9, i - 25, 3];
                      break;
                    case 48 >= i:
                      a = [10, i - 33, 4];
                      break;
                    case 64 >= i:
                      a = [11, i - 49, 4];
                      break;
                    case 96 >= i:
                      a = [12, i - 65, 5];
                      break;
                    case 128 >= i:
                      a = [13, i - 97, 5];
                      break;
                    case 192 >= i:
                      a = [14, i - 129, 6];
                      break;
                    case 256 >= i:
                      a = [15, i - 193, 6];
                      break;
                    case 384 >= i:
                      a = [16, i - 257, 7];
                      break;
                    case 512 >= i:
                      a = [17, i - 385, 7];
                      break;
                    case 768 >= i:
                      a = [18, i - 513, 8];
                      break;
                    case 1024 >= i:
                      a = [19, i - 769, 8];
                      break;
                    case 1536 >= i:
                      a = [20, i - 1025, 9];
                      break;
                    case 2048 >= i:
                      a = [21, i - 1537, 9];
                      break;
                    case 3072 >= i:
                      a = [22, i - 2049, 10];
                      break;
                    case 4096 >= i:
                      a = [23, i - 3073, 10];
                      break;
                    case 6144 >= i:
                      a = [24, i - 4097, 11];
                      break;
                    case 8192 >= i:
                      a = [25, i - 6145, 11];
                      break;
                    case 12288 >= i:
                      a = [26, i - 8193, 12];
                      break;
                    case 16384 >= i:
                      a = [27, i - 12289, 12];
                      break;
                    case 24576 >= i:
                      a = [28, i - 16385, 13];
                      break;
                    case 32768 >= i:
                      a = [29, i - 24577, 13];
                      break;
                    default:
                      throw "invalid distance";
                  }
                  (n = a), (o[r++] = n[0]), (o[r++] = n[1]), (o[r++] = n[2]);
                  var s, d;
                  for (s = 0, d = o.length; d > s; ++s) m[b++] = o[s];
                  y[o[0]]++, w[o[3]]++, (_ = e.length + t - 1), (c = null);
                }
                var i,
                  o,
                  r,
                  a,
                  d,
                  u,
                  l,
                  c,
                  g,
                  v = {},
                  m = h ? new Uint16Array(2 * t.length) : [],
                  b = 0,
                  _ = 0,
                  y = new (h ? Uint32Array : Array)(286),
                  w = new (h ? Uint32Array : Array)(30),
                  S = e.i;
                if (!h) {
                  for (r = 0; 285 >= r; ) y[r++] = 0;
                  for (r = 0; 29 >= r; ) w[r++] = 0;
                }
                for (y[256] = 1, i = 0, o = t.length; o > i; ++i) {
                  for (r = d = 0, a = 3; a > r && i + r !== o; ++r)
                    d = (d << 8) | t[i + r];
                  if ((v[d] === p && (v[d] = []), (u = v[d]), !(0 < _--))) {
                    for (; 0 < u.length && 32768 < i - u[0]; ) u.shift();
                    if (i + 3 >= o) {
                      for (c && n(c, -1), r = 0, a = o - i; a > r; ++r)
                        (g = t[i + r]), (m[b++] = g), ++y[g];
                      break;
                    }
                    0 < u.length
                      ? ((l = s(t, i, u)),
                        c
                          ? c.length < l.length
                            ? ((g = t[i - 1]), (m[b++] = g), ++y[g], n(l, 0))
                            : n(c, -1)
                          : l.length < S
                          ? (c = l)
                          : n(l, 0))
                      : c
                      ? n(c, -1)
                      : ((g = t[i]), (m[b++] = g), ++y[g]);
                  }
                  u.push(i);
                }
                return (
                  (m[b++] = 256),
                  y[256]++,
                  (e.m = y),
                  (e.l = w),
                  h ? m.subarray(0, b) : m
                );
              }
              function s(e, t, n) {
                var i,
                  o,
                  a,
                  s,
                  d,
                  u,
                  l = 0,
                  c = e.length;
                (s = 0), (u = n.length);
                e: for (; u > s; s++) {
                  if (((i = n[u - s - 1]), (a = 3), l > 3)) {
                    for (d = l; d > 3; d--)
                      if (e[i + d - 1] !== e[t + d - 1]) continue e;
                    a = l;
                  }
                  for (; 258 > a && c > t + a && e[i + a] === e[t + a]; ) ++a;
                  if ((a > l && ((o = i), (l = a)), 258 === a)) break;
                }
                return new r(l, t - o);
              }
              function d(e, t) {
                var n,
                  o,
                  r,
                  a,
                  s,
                  d = e.length,
                  l = new i(572),
                  c = new (h ? Uint8Array : Array)(d);
                if (!h) for (a = 0; d > a; a++) c[a] = 0;
                for (a = 0; d > a; ++a) 0 < e[a] && l.push(a, e[a]);
                if (
                  ((n = Array(l.length / 2)),
                  (o = new (h ? Uint32Array : Array)(l.length / 2)),
                  1 === n.length)
                )
                  return (c[l.pop().index] = 1), c;
                for (a = 0, s = l.length / 2; s > a; ++a)
                  (n[a] = l.pop()), (o[a] = n[a].value);
                for (r = u(o, o.length, t), a = 0, s = n.length; s > a; ++a)
                  c[n[a].index] = r[a];
                return c;
              }
              function u(e, t, n) {
                function i(e) {
                  var n = f[e][g[e]];
                  n === t ? (i(e + 1), i(e + 1)) : --c[n], ++g[e];
                }
                var o,
                  r,
                  a,
                  s,
                  d,
                  u = new (h ? Uint16Array : Array)(n),
                  l = new (h ? Uint8Array : Array)(n),
                  c = new (h ? Uint8Array : Array)(t),
                  p = Array(n),
                  f = Array(n),
                  g = Array(n),
                  v = (1 << n) - t,
                  m = 1 << (n - 1);
                for (u[n - 1] = t, r = 0; n > r; ++r)
                  m > v ? (l[r] = 0) : ((l[r] = 1), (v -= m)),
                    (v <<= 1),
                    (u[n - 2 - r] = ((u[n - 1 - r] / 2) | 0) + t);
                for (
                  u[0] = l[0], p[0] = Array(u[0]), f[0] = Array(u[0]), r = 1;
                  n > r;
                  ++r
                )
                  u[r] > 2 * u[r - 1] + l[r] && (u[r] = 2 * u[r - 1] + l[r]),
                    (p[r] = Array(u[r])),
                    (f[r] = Array(u[r]));
                for (o = 0; t > o; ++o) c[o] = n;
                for (a = 0; a < u[n - 1]; ++a)
                  (p[n - 1][a] = e[a]), (f[n - 1][a] = a);
                for (o = 0; n > o; ++o) g[o] = 0;
                for (
                  1 === l[n - 1] && (--c[0], ++g[n - 1]), r = n - 2;
                  r >= 0;
                  --r
                ) {
                  for (s = o = 0, d = g[r + 1], a = 0; a < u[r]; a++)
                    (s = p[r + 1][d] + p[r + 1][d + 1]),
                      s > e[o]
                        ? ((p[r][a] = s), (f[r][a] = t), (d += 2))
                        : ((p[r][a] = e[o]), (f[r][a] = o), ++o);
                  (g[r] = 0), 1 === l[r] && i(r);
                }
                return c;
              }
              function l(e) {
                var t,
                  n,
                  i,
                  o,
                  r = new (h ? Uint16Array : Array)(e.length),
                  a = [],
                  s = [],
                  d = 0;
                for (t = 0, n = e.length; n > t; t++)
                  a[e[t]] = (0 | a[e[t]]) + 1;
                for (t = 1, n = 16; n >= t; t++)
                  (s[t] = d), (d += 0 | a[t]), (d <<= 1);
                for (t = 0, n = e.length; n > t; t++)
                  for (
                    d = s[e[t]], s[e[t]] += 1, i = r[t] = 0, o = e[t];
                    o > i;
                    i++
                  )
                    (r[t] = (r[t] << 1) | (1 & d)), (d >>>= 1);
                return r;
              }
              function c(e, t) {
                (this.input = e),
                  (this.a = new (h ? Uint8Array : Array)(32768)),
                  (this.d = x.g);
                var n,
                  i = {};
                (!t && (t = {})) ||
                  "number" != typeof t.compressionType ||
                  (this.d = t.compressionType);
                for (n in t) i[n] = t[n];
                (i.outputBuffer = this.a), (this.j = new o(this.input, i));
              }
              var p = void 0,
                f = !0,
                g = this,
                h =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Uint32Array;
              (t.prototype.b = function (e, t, i) {
                var o,
                  r = this.buffer,
                  a = this.index,
                  s = this.e,
                  d = r[a];
                if (
                  (i &&
                    t > 1 &&
                    (e =
                      t > 8
                        ? ((w[255 & e] << 24) |
                            (w[(e >>> 8) & 255] << 16) |
                            (w[(e >>> 16) & 255] << 8) |
                            w[(e >>> 24) & 255]) >>
                          (32 - t)
                        : w[e] >> (8 - t)),
                  8 > t + s)
                )
                  (d = (d << t) | e), (s += t);
                else
                  for (o = 0; t > o; ++o)
                    (d = (d << 1) | ((e >> (t - o - 1)) & 1)),
                      8 === ++s &&
                        ((s = 0),
                        (r[a++] = w[d]),
                        (d = 0),
                        a === r.length && (r = n(this)));
                (r[a] = d), (this.buffer = r), (this.e = s), (this.index = a);
              }),
                (t.prototype.finish = function () {
                  var e,
                    t = this.buffer,
                    n = this.index;
                  return (
                    0 < this.e &&
                      ((t[n] <<= 8 - this.e), (t[n] = w[t[n]]), n++),
                    h ? (e = t.subarray(0, n)) : ((t.length = n), (e = t)),
                    e
                  );
                });
              var v,
                m = new (h ? Uint8Array : Array)(256);
              for (v = 0; 256 > v; ++v) {
                for (var b = v, _ = b, y = 7, b = b >>> 1; b; b >>>= 1)
                  (_ <<= 1), (_ |= 1 & b), --y;
                m[v] = ((_ << y) & 255) >>> 0;
              }
              var w = m;
              (i.prototype.getParent = function (e) {
                return 2 * (((e - 2) / 4) | 0);
              }),
                (i.prototype.push = function (e, t) {
                  var n,
                    i,
                    o,
                    r = this.buffer;
                  for (
                    n = this.length, r[this.length++] = t, r[this.length++] = e;
                    n > 0 && ((i = this.getParent(n)), r[n] > r[i]);

                  )
                    (o = r[n]),
                      (r[n] = r[i]),
                      (r[i] = o),
                      (o = r[n + 1]),
                      (r[n + 1] = r[i + 1]),
                      (r[i + 1] = o),
                      (n = i);
                  return this.length;
                }),
                (i.prototype.pop = function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    r = this.buffer;
                  for (
                    t = r[0],
                      e = r[1],
                      this.length -= 2,
                      r[0] = r[this.length],
                      r[1] = r[this.length + 1],
                      o = 0;
                    ((i = 2 * o + 2), !(i >= this.length)) &&
                    (i + 2 < this.length && r[i + 2] > r[i] && (i += 2),
                    r[i] > r[o]);

                  )
                    (n = r[o]),
                      (r[o] = r[i]),
                      (r[i] = n),
                      (n = r[o + 1]),
                      (r[o + 1] = r[i + 1]),
                      (r[i + 1] = n),
                      (o = i);
                  return { index: e, value: t, length: this.length };
                });
              var S,
                E = 2,
                C = { NONE: 0, h: 1, g: E, n: 3 },
                I = [];
              for (S = 0; 288 > S; S++)
                switch (f) {
                  case 143 >= S:
                    I.push([S + 48, 8]);
                    break;
                  case 255 >= S:
                    I.push([S - 144 + 400, 9]);
                    break;
                  case 279 >= S:
                    I.push([S - 256 + 0, 7]);
                    break;
                  case 287 >= S:
                    I.push([S - 280 + 192, 8]);
                    break;
                  default:
                    throw "invalid literal: " + S;
                }
              o.prototype.f = function () {
                var e,
                  n,
                  i,
                  o,
                  r = this.input;
                switch (this.d) {
                  case 0:
                    for (i = 0, o = r.length; o > i; ) {
                      (n = h
                        ? r.subarray(i, i + 65535)
                        : r.slice(i, i + 65535)),
                        (i += n.length);
                      var s = n,
                        u = i === o,
                        c = p,
                        g = p,
                        v = p,
                        m = p,
                        b = p,
                        _ = this.a,
                        y = this.c;
                      if (h) {
                        for (
                          _ = new Uint8Array(this.a.buffer);
                          _.length <= y + s.length + 5;

                        )
                          _ = new Uint8Array(_.length << 1);
                        _.set(this.a);
                      }
                      if (
                        ((c = u ? 1 : 0),
                        (_[y++] = 0 | c),
                        (g = s.length),
                        (v = (~g + 65536) & 65535),
                        (_[y++] = 255 & g),
                        (_[y++] = (g >>> 8) & 255),
                        (_[y++] = 255 & v),
                        (_[y++] = (v >>> 8) & 255),
                        h)
                      )
                        _.set(s, y), (y += s.length), (_ = _.subarray(0, y));
                      else {
                        for (m = 0, b = s.length; b > m; ++m) _[y++] = s[m];
                        _.length = y;
                      }
                      (this.c = y), (this.a = _);
                    }
                    break;
                  case 1:
                    var w = new t(
                      h ? new Uint8Array(this.a.buffer) : this.a,
                      this.c
                    );
                    w.b(1, 1, f), w.b(1, 2, f);
                    var S,
                      C,
                      T,
                      A = a(this, r);
                    for (S = 0, C = A.length; C > S; S++)
                      if (((T = A[S]), t.prototype.b.apply(w, I[T]), T > 256))
                        w.b(A[++S], A[++S], f),
                          w.b(A[++S], 5),
                          w.b(A[++S], A[++S], f);
                      else if (256 === T) break;
                    (this.a = w.finish()), (this.c = this.a.length);
                    break;
                  case E:
                    var x,
                      G,
                      k,
                      O,
                      L,
                      B,
                      N,
                      R,
                      P,
                      M,
                      D,
                      F,
                      H,
                      U,
                      z,
                      V = new t(
                        h ? new Uint8Array(this.a.buffer) : this.a,
                        this.c
                      ),
                      W = [
                        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                        14, 1, 15,
                      ],
                      j = Array(19);
                    for (
                      x = E,
                        V.b(1, 1, f),
                        V.b(x, 2, f),
                        G = a(this, r),
                        B = d(this.m, 15),
                        N = l(B),
                        R = d(this.l, 7),
                        P = l(R),
                        k = 286;
                      k > 257 && 0 === B[k - 1];
                      k--
                    );
                    for (O = 30; O > 1 && 0 === R[O - 1]; O--);
                    var J,
                      q,
                      X,
                      K,
                      Z,
                      Y,
                      $ = k,
                      Q = O,
                      ee = new (h ? Uint32Array : Array)($ + Q),
                      te = new (h ? Uint32Array : Array)(316),
                      ne = new (h ? Uint8Array : Array)(19);
                    for (J = q = 0; $ > J; J++) ee[q++] = B[J];
                    for (J = 0; Q > J; J++) ee[q++] = R[J];
                    if (!h) for (J = 0, K = ne.length; K > J; ++J) ne[J] = 0;
                    for (J = Z = 0, K = ee.length; K > J; J += q) {
                      for (q = 1; K > J + q && ee[J + q] === ee[J]; ++q);
                      if (((X = q), 0 === ee[J]))
                        if (3 > X) for (; 0 < X--; ) (te[Z++] = 0), ne[0]++;
                        else
                          for (; X > 0; )
                            (Y = 138 > X ? X : 138),
                              Y > X - 3 && X > Y && (Y = X - 3),
                              10 >= Y
                                ? ((te[Z++] = 17), (te[Z++] = Y - 3), ne[17]++)
                                : ((te[Z++] = 18),
                                  (te[Z++] = Y - 11),
                                  ne[18]++),
                              (X -= Y);
                      else if (((te[Z++] = ee[J]), ne[ee[J]]++, X--, 3 > X))
                        for (; 0 < X--; ) (te[Z++] = ee[J]), ne[ee[J]]++;
                      else
                        for (; X > 0; )
                          (Y = 6 > X ? X : 6),
                            Y > X - 3 && X > Y && (Y = X - 3),
                            (te[Z++] = 16),
                            (te[Z++] = Y - 3),
                            ne[16]++,
                            (X -= Y);
                    }
                    for (
                      e = h ? te.subarray(0, Z) : te.slice(0, Z),
                        M = d(ne, 7),
                        U = 0;
                      19 > U;
                      U++
                    )
                      j[U] = M[W[U]];
                    for (L = 19; L > 4 && 0 === j[L - 1]; L--);
                    for (
                      D = l(M),
                        V.b(k - 257, 5, f),
                        V.b(O - 1, 5, f),
                        V.b(L - 4, 4, f),
                        U = 0;
                      L > U;
                      U++
                    )
                      V.b(j[U], 3, f);
                    for (U = 0, z = e.length; z > U; U++)
                      if (((F = e[U]), V.b(D[F], M[F], f), F >= 16)) {
                        switch ((U++, F)) {
                          case 16:
                            H = 2;
                            break;
                          case 17:
                            H = 3;
                            break;
                          case 18:
                            H = 7;
                            break;
                          default:
                            throw "invalid code: " + F;
                        }
                        V.b(e[U], H, f);
                      }
                    var ie,
                      oe,
                      re,
                      ae,
                      se,
                      de,
                      ue,
                      le,
                      ce = [N, B],
                      pe = [P, R];
                    for (
                      se = ce[0],
                        de = ce[1],
                        ue = pe[0],
                        le = pe[1],
                        ie = 0,
                        oe = G.length;
                      oe > ie;
                      ++ie
                    )
                      if (((re = G[ie]), V.b(se[re], de[re], f), re > 256))
                        V.b(G[++ie], G[++ie], f),
                          (ae = G[++ie]),
                          V.b(ue[ae], le[ae], f),
                          V.b(G[++ie], G[++ie], f);
                      else if (256 === re) break;
                    (this.a = V.finish()), (this.c = this.a.length);
                    break;
                  default:
                    throw "invalid compression type";
                }
                return this.a;
              };
              var T = (function () {
                  function e(e) {
                    switch (f) {
                      case 3 === e:
                        return [257, e - 3, 0];
                      case 4 === e:
                        return [258, e - 4, 0];
                      case 5 === e:
                        return [259, e - 5, 0];
                      case 6 === e:
                        return [260, e - 6, 0];
                      case 7 === e:
                        return [261, e - 7, 0];
                      case 8 === e:
                        return [262, e - 8, 0];
                      case 9 === e:
                        return [263, e - 9, 0];
                      case 10 === e:
                        return [264, e - 10, 0];
                      case 12 >= e:
                        return [265, e - 11, 1];
                      case 14 >= e:
                        return [266, e - 13, 1];
                      case 16 >= e:
                        return [267, e - 15, 1];
                      case 18 >= e:
                        return [268, e - 17, 1];
                      case 22 >= e:
                        return [269, e - 19, 2];
                      case 26 >= e:
                        return [270, e - 23, 2];
                      case 30 >= e:
                        return [271, e - 27, 2];
                      case 34 >= e:
                        return [272, e - 31, 2];
                      case 42 >= e:
                        return [273, e - 35, 3];
                      case 50 >= e:
                        return [274, e - 43, 3];
                      case 58 >= e:
                        return [275, e - 51, 3];
                      case 66 >= e:
                        return [276, e - 59, 3];
                      case 82 >= e:
                        return [277, e - 67, 4];
                      case 98 >= e:
                        return [278, e - 83, 4];
                      case 114 >= e:
                        return [279, e - 99, 4];
                      case 130 >= e:
                        return [280, e - 115, 4];
                      case 162 >= e:
                        return [281, e - 131, 5];
                      case 194 >= e:
                        return [282, e - 163, 5];
                      case 226 >= e:
                        return [283, e - 195, 5];
                      case 257 >= e:
                        return [284, e - 227, 5];
                      case 258 === e:
                        return [285, e - 258, 0];
                      default:
                        throw "invalid length: " + e;
                    }
                  }
                  var t,
                    n,
                    i = [];
                  for (t = 3; 258 >= t; t++)
                    (n = e(t)), (i[t] = (n[2] << 24) | (n[1] << 16) | n[0]);
                  return i;
                })(),
                A = h ? new Uint32Array(T) : T,
                x = C;
              (c.prototype.f = function () {
                var e,
                  t,
                  n,
                  i,
                  o,
                  r,
                  a = 0;
                switch (
                  ((r = this.a),
                  (e = Math.LOG2E * Math.log(32768) - 8),
                  (t = (e << 4) | 8),
                  (r[a++] = t),
                  this.d)
                ) {
                  case x.NONE:
                    i = 0;
                    break;
                  case x.h:
                    i = 1;
                    break;
                  case x.g:
                    i = 2;
                    break;
                  default:
                    throw Error("unsupported compression type");
                }
                (n = (i << 6) | 0), (r[a++] = n | (31 - ((256 * t + n) % 31)));
                var s = this.input;
                if ("string" == typeof s) {
                  var d,
                    u,
                    l = s.split("");
                  for (d = 0, u = l.length; u > d; d++)
                    l[d] = (255 & l[d].charCodeAt(0)) >>> 0;
                  s = l;
                }
                for (var c, p = 1, f = 0, g = s.length, v = 0; g > 0; ) {
                  (c = g > 1024 ? 1024 : g), (g -= c);
                  do (p += s[v++]), (f += p);
                  while (--c);
                  (p %= 65521), (f %= 65521);
                }
                return (
                  (o = ((f << 16) | p) >>> 0),
                  (this.j.c = a),
                  (r = this.j.f()),
                  (a = r.length),
                  h &&
                    ((r = new Uint8Array(r.buffer)),
                    r.length <= a + 4 &&
                      ((this.a = new Uint8Array(r.length + 4)),
                      this.a.set(r),
                      (r = this.a)),
                    (r = r.subarray(0, a + 4))),
                  (r[a++] = (o >> 24) & 255),
                  (r[a++] = (o >> 16) & 255),
                  (r[a++] = (o >> 8) & 255),
                  (r[a++] = 255 & o),
                  r
                );
              }),
                e("Zlib.Deflate", c),
                e("Zlib.Deflate.compress", function (e, t) {
                  return new c(e, t).f();
                }),
                e("Zlib.Deflate.prototype.compress", c.prototype.f);
              var G,
                k,
                O,
                L,
                B = { NONE: x.NONE, FIXED: x.h, DYNAMIC: x.g };
              if (Object.keys) G = Object.keys(B);
              else for (k in ((G = []), (O = 0), B)) G[O++] = k;
              for (O = 0, L = G.length; L > O; ++O)
                (k = G[O]), e("Zlib.Deflate.CompressionType." + k, B[k]);
            }.call(pendo),
              function () {
                function e(e, n) {
                  var i = e.split("."),
                    o = t;
                  !(i[0] in o) && o.execScript && o.execScript("var " + i[0]);
                  for (var r; i.length && (r = i.shift()); )
                    i.length || void 0 === n
                      ? (o = o[r] ? o[r] : (o[r] = {}))
                      : (o[r] = n);
                }
                var t = this,
                  n = {
                    c: function (e, t, i) {
                      return n.update(e, 0, t, i);
                    },
                    update: function (e, t, i, o) {
                      var r = n.a,
                        a = "number" == typeof i ? i : (i = 0),
                        s = "number" == typeof o ? o : e.length;
                      for (t ^= 4294967295, a = 7 & s; a--; ++i)
                        t = (t >>> 8) ^ r[255 & (t ^ e[i])];
                      for (a = s >> 3; a--; i += 8)
                        (t = (t >>> 8) ^ r[255 & (t ^ e[i])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 1])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 2])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 3])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 4])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 5])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 6])]),
                          (t = (t >>> 8) ^ r[255 & (t ^ e[i + 7])]);
                      return (4294967295 ^ t) >>> 0;
                    },
                    d: function (e, t) {
                      return (n.a[255 & (e ^ t)] ^ (e >>> 8)) >>> 0;
                    },
                    b: [
                      0, 1996959894, 3993919788, 2567524794, 124634137,
                      1886057615, 3915621685, 2657392035, 249268274, 2044508324,
                      3772115230, 2547177864, 162941995, 2125561021, 3887607047,
                      2428444049, 498536548, 1789927666, 4089016648, 2227061214,
                      450548861, 1843258603, 4107580753, 2211677639, 325883990,
                      1684777152, 4251122042, 2321926636, 335633487, 1661365465,
                      4195302755, 2366115317, 997073096, 1281953886, 3579855332,
                      2724688242, 1006888145, 1258607687, 3524101629,
                      2768942443, 901097722, 1119000684, 3686517206, 2898065728,
                      853044451, 1172266101, 3705015759, 2882616665, 651767980,
                      1373503546, 3369554304, 3218104598, 565507253, 1454621731,
                      3485111705, 3099436303, 671266974, 1594198024, 3322730930,
                      2970347812, 795835527, 1483230225, 3244367275, 3060149565,
                      1994146192, 31158534, 2563907772, 4023717930, 1907459465,
                      112637215, 2680153253, 3904427059, 2013776290, 251722036,
                      2517215374, 3775830040, 2137656763, 141376813, 2439277719,
                      3865271297, 1802195444, 476864866, 2238001368, 4066508878,
                      1812370925, 453092731, 2181625025, 4111451223, 1706088902,
                      314042704, 2344532202, 4240017532, 1658658271, 366619977,
                      2362670323, 4224994405, 1303535960, 984961486, 2747007092,
                      3569037538, 1256170817, 1037604311, 2765210733,
                      3554079995, 1131014506, 879679996, 2909243462, 3663771856,
                      1141124467, 855842277, 2852801631, 3708648649, 1342533948,
                      654459306, 3188396048, 3373015174, 1466479909, 544179635,
                      3110523913, 3462522015, 1591671054, 702138776, 2966460450,
                      3352799412, 1504918807, 783551873, 3082640443, 3233442989,
                      3988292384, 2596254646, 62317068, 1957810842, 3939845945,
                      2647816111, 81470997, 1943803523, 3814918930, 2489596804,
                      225274430, 2053790376, 3826175755, 2466906013, 167816743,
                      2097651377, 4027552580, 2265490386, 503444072, 1762050814,
                      4150417245, 2154129355, 426522225, 1852507879, 4275313526,
                      2312317920, 282753626, 1742555852, 4189708143, 2394877945,
                      397917763, 1622183637, 3604390888, 2714866558, 953729732,
                      1340076626, 3518719985, 2797360999, 1068828381,
                      1219638859, 3624741850, 2936675148, 906185462, 1090812512,
                      3747672003, 2825379669, 829329135, 1181335161, 3412177804,
                      3160834842, 628085408, 1382605366, 3423369109, 3138078467,
                      570562233, 1426400815, 3317316542, 2998733608, 733239954,
                      1555261956, 3268935591, 3050360625, 752459403, 1541320221,
                      2607071920, 3965973030, 1969922972, 40735498, 2617837225,
                      3943577151, 1913087877, 83908371, 2512341634, 3803740692,
                      2075208622, 213261112, 2463272603, 3855990285, 2094854071,
                      198958881, 2262029012, 4057260610, 1759359992, 534414190,
                      2176718541, 4139329115, 1873836001, 414664567, 2282248934,
                      4279200368, 1711684554, 285281116, 2405801727, 4167216745,
                      1634467795, 376229701, 2685067896, 3608007406, 1308918612,
                      956543938, 2808555105, 3495958263, 1231636301, 1047427035,
                      2932959818, 3654703836, 1088359270, 936918e3, 2847714899,
                      3736837829, 1202900863, 817233897, 3183342108, 3401237130,
                      1404277552, 615818150, 3134207493, 3453421203, 1423857449,
                      601450431, 3009837614, 3294710456, 1567103746, 711928724,
                      3020668471, 3272380065, 1510334235, 755167117,
                    ],
                  };
                (n.a =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Uint32Array
                    ? new Uint32Array(n.b)
                    : n.b),
                  e("Zlib.CRC32", n),
                  e("Zlib.CRC32.calc", n.c),
                  e("Zlib.CRC32.update", n.update);
              }.call(pendo));
            var JSON = window.JSON;
            (JSON &&
              "function" == typeof JSON.stringify &&
              '{"props":{}}' === JSON.stringify({ props: {} })) ||
              (JSON = {}),
              (function () {
                function f(e) {
                  return 10 > e ? "0" + e : e;
                }
                function quote(e) {
                  return (
                    (escapable.lastIndex = 0),
                    escapable.test(e)
                      ? '"' +
                        e.replace(escapable, function (e) {
                          var t = meta[e];
                          return "string" == typeof t
                            ? t
                            : "\\u" +
                                ("0000" + e.charCodeAt(0).toString(16)).slice(
                                  -4
                                );
                        }) +
                        '"'
                      : '"' + e + '"'
                  );
                }
                function str(e, t) {
                  var n,
                    i,
                    o,
                    r,
                    a,
                    s = gap,
                    d = t[e];
                  switch (
                    (d &&
                      "object" == typeof d &&
                      "function" == typeof d.toJSON &&
                      (d = d.toJSON(e)),
                    "function" == typeof rep && (d = rep.call(t, e, d)),
                    typeof d)
                  ) {
                    case "string":
                      return quote(d);
                    case "number":
                      return isFinite(d) ? String(d) : "null";
                    case "boolean":
                    case "null":
                      return String(d);
                    case "object":
                      if (!d) return "null";
                      if (
                        ((gap += indent),
                        (a = []),
                        "[object Array]" === Object.prototype.toString.apply(d))
                      ) {
                        for (r = d.length, n = 0; r > n; n += 1)
                          a[n] = str(n, d) || "null";
                        return (
                          (o =
                            0 === a.length
                              ? "[]"
                              : gap
                              ? "[\n" +
                                gap +
                                a.join(",\n" + gap) +
                                "\n" +
                                s +
                                "]"
                              : "[" + a.join(",") + "]"),
                          (gap = s),
                          o
                        );
                      }
                      if (rep && "object" == typeof rep)
                        for (r = rep.length, n = 0; r > n; n += 1)
                          "string" == typeof rep[n] &&
                            ((i = rep[n]),
                            (o = str(i, d)),
                            o && a.push(quote(i) + (gap ? ": " : ":") + o));
                      else
                        for (i in d)
                          Object.prototype.hasOwnProperty.call(d, i) &&
                            ((o = str(i, d)),
                            o && a.push(quote(i) + (gap ? ": " : ":") + o));
                      return (
                        (o =
                          0 === a.length
                            ? "{}"
                            : gap
                            ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}"
                            : "{" + a.join(",") + "}"),
                        (gap = s),
                        o
                      );
                  }
                }
                "function" != typeof Date.prototype.toJSON &&
                  ((Date.prototype.toJSON = function (e) {
                    return isFinite(this.valueOf())
                      ? this.getUTCFullYear() +
                          "-" +
                          f(this.getUTCMonth() + 1) +
                          "-" +
                          f(this.getUTCDate()) +
                          "T" +
                          f(this.getUTCHours()) +
                          ":" +
                          f(this.getUTCMinutes()) +
                          ":" +
                          f(this.getUTCSeconds()) +
                          "Z"
                      : null;
                  }),
                  (String.prototype.toJSON =
                    Number.prototype.toJSON =
                    Boolean.prototype.toJSON =
                      function (e) {
                        return this.valueOf();
                      }));
                var cx =
                    /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                  escapable =
                    /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                  gap,
                  indent,
                  meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\",
                  },
                  rep;
                "function" != typeof JSON.stringify &&
                  (JSON.stringify = function (e, t, n) {
                    var i;
                    if (((gap = ""), (indent = ""), "number" == typeof n))
                      for (i = 0; n > i; i += 1) indent += " ";
                    else "string" == typeof n && (indent = n);
                    if (
                      ((rep = t),
                      t &&
                        "function" != typeof t &&
                        ("object" != typeof t || "number" != typeof t.length))
                    )
                      throw new Error("JSON.stringify");
                    return str("", { "": e });
                  }),
                  "function" != typeof JSON.parse &&
                    (JSON.parse = function (text, reviver) {
                      function walk(e, t) {
                        var n,
                          i,
                          o = e[t];
                        if (o && "object" == typeof o)
                          for (n in o)
                            Object.prototype.hasOwnProperty.call(o, n) &&
                              ((i = walk(o, n)),
                              i !== undefined ? (o[n] = i) : delete o[n]);
                        return reviver.call(e, t, o);
                      }
                      var j;
                      if (
                        ((text = String(text)),
                        (cx.lastIndex = 0),
                        cx.test(text) &&
                          (text = text.replace(cx, function (e) {
                            return (
                              "\\u" +
                              ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            );
                          })),
                        /^[\],:{}\s]*$/.test(
                          text
                            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                            .replace(
                              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                              "]"
                            )
                            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                        ))
                      )
                        return (
                          (j = eval("(" + text + ")")),
                          "function" == typeof reviver ? walk({ "": j }, "") : j
                        );
                      throw new SyntaxError("JSON.parse");
                    });
              })(),
              "function" != typeof JSON.decycle &&
                !(function () {
                  function e(e) {
                    var t = "";
                    switch (e.nodeType) {
                      case e.ELEMENT_NODE:
                        (t = e.nodeName.toLowerCase()),
                          e.id.length
                            ? (t += "#" + e.id)
                            : (e.className.length &&
                                (t += "." + e.className.replace(/ /, ".")),
                              "textContent" in e &&
                                (t +=
                                  "{textContent:" +
                                  (e.textContent.length < 20
                                    ? e.textContent
                                    : e.textContent.substr(0, 20) + "...") +
                                  "}"));
                        break;
                      default:
                        (t = e.nodeName),
                          null !== e.nodeValue &&
                            (t +=
                              "{value:" +
                              (e.nodeValue.length < 20
                                ? e.nodeValue
                                : e.nodeValue.substr(0, 20) + "...") +
                              "}");
                    }
                    return t;
                  }
                  JSON.decycle = function (t, n) {
                    var i = [],
                      n = "undefined" == typeof n ? !1 : n,
                      o = [];
                    return (function r(t, a) {
                      var s, d, u;
                      if (
                        n &&
                        "object" == typeof t &&
                        null !== t &&
                        "nodeType" in t
                      )
                        return e(t);
                      if (
                        !(
                          "object" != typeof t ||
                          null === t ||
                          t instanceof Boolean ||
                          t instanceof Date ||
                          t instanceof Number ||
                          t instanceof RegExp ||
                          t instanceof String
                        )
                      ) {
                        for (s = 0; s < i.length; s += 1)
                          if (i[s] === t) return { $ref: o[s] };
                        if (
                          (i.push(t),
                          o.push(a),
                          "[object Array]" ===
                            Object.prototype.toString.apply(t))
                        )
                          for (u = [], s = 0; s < t.length; s += 1)
                            u[s] = r(t[s], a + "[" + s + "]");
                        else {
                          u = {};
                          for (d in t)
                            Object.prototype.hasOwnProperty.call(t, d) &&
                              (u[d] = r(
                                t[d],
                                a + "[" + JSON.stringify(d) + "]"
                              ));
                        }
                        return u;
                      }
                      return t;
                    })(t, "$");
                  };
                })(),
              "function" != typeof JSON.retrocycle &&
                (JSON.retrocycle = function retrocycle($) {
                  var px =
                    /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;
                  return (
                    (function rez(value) {
                      var i, item, name, path;
                      if (value && "object" == typeof value)
                        if (
                          "[object Array]" ===
                          Object.prototype.toString.apply(value)
                        )
                          for (i = 0; i < value.length; i += 1)
                            (item = value[i]),
                              item &&
                                "object" == typeof item &&
                                ((path = item.$ref),
                                "string" == typeof path && px.test(path)
                                  ? (value[i] = eval(path))
                                  : rez(item));
                        else
                          for (name in value)
                            "object" == typeof value[name] &&
                              ((item = value[name]),
                              item &&
                                ((path = item.$ref),
                                "string" == typeof path && px.test(path)
                                  ? (value[name] = eval(path))
                                  : rez(item)));
                    })($),
                    $
                  );
                });
            var memoizedWarnDep = _.memoize(function (e, t) {
              (e = e || "Function"), (t = t ? " and " + t : "");
              var n = e + " deprecated" + t;
              return pendo.log(n), n;
            });
            (pendo.SHADOW_STYLE = ""),
              _.extend(pendo, {
                _showElementGuide: deprecateFn(
                  showTooltipGuide,
                  "_showElementGuide",
                  "is going away"
                ),
                flushNow: deprecateFn(
                  flushNow,
                  "pendo.flushNow",
                  "is going away"
                ),
                flushEventCache: deprecateFn(
                  null,
                  "pendo.flushEventCache",
                  "is gone"
                ),
                HOST: HOST,
                MAX_LENGTH: ENCODED_EVENT_MAX_LENGTH,
                MAX_NUM_EVENTS: MAX_NUM_EVENTS,
                _createToolTip: deprecateFn(
                  createTooltipGuide,
                  "pendo._createToolTip",
                  "is going away"
                ),
                _get_tooltip_dimensions: deprecateFn(
                  getTooltipDimensions,
                  "pendo._get_tooltip_dimensions",
                  "is going away"
                ),
                _isOldIE: deprecateFn(
                  isOldIE,
                  "pendo._isOldIE",
                  "is going away"
                ),
                _logMessage: deprecateFn(
                  writeMessage,
                  "pendo._logMessage",
                  "is going away"
                ),
                _sendEvent: deprecateFn(null, "pendo._sendEvent", "is gone"),
                _sendGuideEvent: deprecateFn(
                  writeGuideEvent,
                  "pendo._sendGuideEvent",
                  "is going away"
                ),
                _stopEvents: locked,
                _storeInCache: deprecateFn(
                  null,
                  "pendo._storeInCache",
                  "is gone"
                ),
                _writeEventImgTag: deprecateFn(
                  writeEvent,
                  "pendo._writeEventImgTag",
                  "is going away"
                ),
                _writeImgTag: deprecateFn(
                  writeImgTag,
                  "pendo._writeImgTag",
                  "is going away"
                ),
                attachEvent: deprecateFn(
                  attachEvent,
                  "pendo.attachEvent",
                  "is going away"
                ),
                detachEvent: deprecateFn(
                  detachEvent,
                  "pendo.detachEvent",
                  "is going away"
                ),
                getText: deprecateFn(
                  TextCapture.getText,
                  "pendo.getText",
                  "is going away"
                ),
                getUA: deprecateFn(getUA, "pendo.getUA", "is going away"),
                ifDebugThen: deprecateFn(null, "pendo.ifDebugThen", "is gone"),
                send_event: deprecateFn(
                  collectEvent,
                  "pendo.send_event",
                  "has changed to pendo.cache.createEvent"
                ),
                wire_page: deprecateFn(
                  wirePage,
                  "pendo.wire_page",
                  "is going away"
                ),
                findGuideBy: findGuideBy,
                findGuideById: findGuideById,
                findStepInGuide: findStepInGuide,
                _updateGuideStepStatus: _updateGuideStepStatus,
                _addCloseButton: addCloseButton,
                initialize: initialize,
                getEventCache: getGuideEventCache,
                processEventCache: processGuideEventCache,
                isGuideShown: isGuideShown,
                _getNextStepInMultistep: getNextStepInMultistep,
                badgeDiv: launcherBadge && launcherBadge.element,
                launcherToolTipDiv: launcherTooltipDiv,
                updateOptions: updateOptions,
                createLauncher: createLauncher,
                initLauncher: initLauncher,
                _addGuideToLauncher: addGuideToLauncher,
                isAnonymousVisitor: isAnonymousVisitor,
                DEFAULT_VISITOR_ID: DEFAULT_VISITOR_ID,
                shouldIdentityChange: _.constant(!1),
                read: agentStorage.read,
                write: agentStorage.write,
                _delete_cookie: agentStorage.clear,
                _set_cookie: setCookie,
                _get_cookie: getCookie,
                get_cookie_key: getPendoCookieKey,
                ENV: ENV,
                eventCache: eventCache,
                _getOpacityStyles: deprecateFn(
                  function () {},
                  "pendo._getOpacityStyles",
                  "is going away"
                ),
                setStyle: setStyle,
                _createGuideEvent: createGuideEvent,
                seenGuide: seenGuide,
                dismissedGuide: dismissedGuide,
                advancedGuide: advancedGuide,
                seenTime: seenTime,
                placeBadge: placeBadge,
                isBadge: isBadge,
                showPreview: deprecateFn(
                  showPreview,
                  "pendo.showPreview",
                  "is going away"
                ),
                removeAllBadges: removeAllBadges,
                tellMaster: tellMaster,
                DEFAULT_TIMER_LENGTH: DEFAULT_TIMER_LENGTH,
                registerMessageHandler: registerMessageHandler,
                _get_offset: getOffsetPosition,
                _shouldAutoDisplayGuide: shouldAutoDisplayGuide,
                removeBadge: removeBadge,
                _showLightboxGuide: showLightboxGuide,
                _showGuide: showGuide,
                getElementForGuideStep: getElementForGuideStep,
                isElementVisible: isElementVisible,
                getTooltipDivId: getStepDivId,
                setupWatchOnTooltip: setupWatchOnElement,
                detectMaster: detectMaster,
                listenToMaster: listenToMaster,
                start: whenLoadedCall,
                SEND_INTERVAL: SEND_INTERVAL,
                stageGuideEvent: stageGuideEvent,
                startStagedTimer: startStagedTimer,
                isURLValid: isURLValid,
                getURL: getURL,
                _get_screen_dim: getScreenDimensions,
                _isInViewport: _isInViewport,
                _getCss3Prop: _getCss3Prop,
                waitThenStartGuides: waitThenLoop,
              });
            var debugging = {
              store: store,
              getEventCache: function () {
                return [].concat(eventCache);
              },
              getAllGuides: function () {
                return [].concat(getActiveGuides());
              },
              getAutoGuides: function () {
                return AutoDisplay.sortAndFilter(
                  getActiveGuides(),
                  pendo.autoOrdering
                );
              },
              getBadgeGuides: function () {
                return _.filter(getActiveGuides(), isBadge);
              },
              getLauncherGuides: function () {
                return _.filter(getActiveGuides(), isLauncher);
              },
              getEventHistory: function () {
                return [];
              },
              getOriginalOptions: function () {
                return originalOptions;
              },
              setActiveGuides: setActiveGuides,
              getBody: dom.getBody,
              isMobileUserAgent: isMobileUserAgent,
              areGuidesDelayed: areGuidesDelayed,
              doesElementMatchContainsRules: doesElementMatchContainsRules,
              getMetadata: function () {
                return getMetadata();
              },
              isStagingServer: function () {
                return "undefined" == typeof PendoConfig
                  ? !1
                  : shouldLoadStagingAgent(PendoConfig);
              },
              AutoDisplay: AutoDisplay,
            };
            _.extend(debug, debugging);
            var ExtensionService = {};
            !(function (e) {
              function t(e) {
                if (!e.length) return e;
                var n = _.filter(e, r);
                return n.length ? t(_.difference(e, n)) : e;
              }
              function n(e) {
                var t = ["name", "version", "use", "type", "uri"];
                if (!_.every(t, _.partial(_.has, e))) return !1;
                var n = o(e.use);
                return _.every(
                  _.map(n, function (t) {
                    return t(e);
                  })
                );
              }
              function i(e) {
                return d[e] ? d[e].handler || _.identity : null;
              }
              function o(e) {
                return d[e] ? d[e].validators : [];
              }
              function r(t) {
                if ("behavior" === t.use) {
                  var n = t.uri(e, ExtensionAPI);
                  return n ? (s.push(t), !0) : !1;
                }
                var o = i(t.use);
                if (!o) return !1;
                var r = o(t);
                return r && s.push(r), !!r;
              }
              var a = [],
                s = [],
                d = {};
              (pendo.addExtension = function (e) {
                e = [].concat(e);
                var i = _.filter(e, n);
                i.length && (a = t(a.concat(i)));
              }),
                (e.tagExtension = function (t, n) {
                  var i = e.findExtensionByName(t);
                  i.tags = [].concat(i.tags || [], n);
                }),
                (e.findExtensionByTag = function (e) {
                  return _.find(s, function (t) {
                    return _.contains(t.tags, e);
                  });
                }),
                (e.findExtensionByName = function (e) {
                  return _.findWhere(s, { name: e });
                }),
                (e.filterExtensionsByUse = function (e) {
                  return _.filter(s, function (t) {
                    return t.use === e;
                  });
                }),
                (e.findExtensionByNameAndProvider = function (e, t) {
                  return _.find(s, function (n) {
                    var i = n.data;
                    return i
                      ? i.name === e && i.provider && i.provider.name === t
                      : !1;
                  });
                }),
                (e.registerExtensionsByUse = function (e, t, n) {
                  (n = n ? [].concat(n) : []),
                    (d[e] = { handler: t, validators: n });
                });
            })(ExtensionService);
            var ExtensionAPI = {
                Launcher: {
                  addBehavior: function (e) {
                    Launcher.behaviors.push(e);
                  },
                },
                Metadata: {
                  getMetadata: function () {
                    return getMetadata();
                  },
                },
                Util: {
                  documentScrollTop: documentScrollTop,
                  documentScrollLeft: documentScrollLeft,
                  getOffsetPosition: getOffsetPosition,
                },
                Events: Events,
              },
              FlexboxPolyfill = (function () {
                function e(e, t) {
                  var n = e.cloneNode(),
                    i = t
                      ? o(e)
                      : FlexboxPolyfill.getPendoVisualElements(e.children),
                    r = FlexboxPolyfill.getPendoInlineUIElements(e.children),
                    a = i[0] && "pendo-mock-flexbox-row" === i[0].className;
                  if (a && !t) return e;
                  n.innerHTML = "";
                  for (var s = 0; s < i.length; s++)
                    pendo.BuildingBlocks.BuildingBlockGuides.isElementHiddenInGuide(
                      i[s]
                    )
                      ? n.appendChild(i[s])
                      : n.appendChild(
                          FlexboxPolyfill.wrapElementInMockFlexboxContainer(
                            i[s]
                          )
                        );
                  for (var d = 0; d < r.length; d++) n.appendChild(r[d]);
                  return e.parentNode.replaceChild(n, e), n;
                }
                function t(e, t) {
                  var n =
                      parseInt(e.offsetWidth, 10) -
                      parseInt(e.style.paddingLeft, 10) -
                      parseInt(e.style.paddingRight, 10),
                    i = FlexboxPolyfill.getPendoVisualElements(e.children),
                    o = 0;
                  if (i.length)
                    for (var r = 0; o < i.length && !(r > 50); )
                      pendo.BuildingBlocks.BuildingBlockGuides.isElementHiddenInGuide(
                        i[o]
                      )
                        ? o++
                        : (o = FlexboxPolyfill.formatPseudoRow(n, i, o, t, e)),
                        r++;
                }
                function n(e, t, n, i, o) {
                  var r = 0,
                    a = n,
                    s = [];
                  if (t.length) {
                    for (var d = 0; e >= r && a < t.length && !(d > 50); ) {
                      var u = parseInt(t[a].offsetWidth, 10);
                      if (((r += u), r > e && s.length > 1)) {
                        (r -= u), a--;
                        break;
                      }
                      s.push(t[a]), a++, d++;
                    }
                    var l = Math.min(t.length - 1, a),
                      c = e - r;
                    return (
                      FlexboxPolyfill.setElementAlignment(s, c, i, o), l + 1
                    );
                  }
                }
                function i(e, t, n, i) {
                  if (!(e.length < 1))
                    switch (
                      (FlexboxPolyfill.wrapMockFlexElementsInMockFlexRows(i, e),
                      n)
                    ) {
                      case "space-between":
                        FlexboxPolyfill.spaceBetween(e, t);
                        break;
                      case "space-around":
                        FlexboxPolyfill.spaceAround(e, t);
                        break;
                      case "space-evenly":
                        FlexboxPolyfill.spaceEvenly(e, t);
                        break;
                      case "center":
                        FlexboxPolyfill.center(e, t);
                        break;
                      case "flex-start":
                        FlexboxPolyfill.flexStart(e);
                        break;
                      case "flex-end":
                        FlexboxPolyfill.flexEnd(e, t);
                    }
                }
                function o(e) {
                  return Sizzle(
                    [
                      "._pendo-button",
                      ".pendo-block-wrapper",
                      "._pendo-multi-choice-poll-select-border",
                    ].join(","),
                    e
                  );
                }
                function r(e) {
                  var t = e.getAttribute("class");
                  return !!(t && t.indexOf("pendo-inline-ui") > -1);
                }
                function a(e) {
                  return _.filter(e, function (e) {
                    return !r(e);
                  });
                }
                function s(e) {
                  return _.filter(e, function (e) {
                    return r(e);
                  });
                }
                function d(e) {
                  var t = document.createElement("div");
                  return (
                    (t.style.display = "inline-block"),
                    e || (t.style.position = "absolute"),
                    (t.style["vertical-align"] = "top"),
                    t.setAttribute("class", "pendo-mock-flexbox-element"),
                    t
                  );
                }
                function u() {
                  var e = document.createElement("div");
                  return (
                    e.setAttribute("class", "pendo-mock-flexbox-row"),
                    (e.style.display = "block"),
                    (e.style.position = "relative"),
                    (e.style.width = "100%"),
                    e
                  );
                }
                function l(e) {
                  var t = e.getAttribute("class") || "",
                    n = -1 !== t.indexOf("pendo-block-wrapper"),
                    i = e.style && "absolute" === e.style.position,
                    o = get(e.style, "width", ""),
                    r = getComputedStyle_safe(e).width,
                    a = o.indexOf("%") > -1;
                  if (n) {
                    var s = o ? r : null;
                    o = s ? s : e.children[0].offsetWidth + "px";
                  }
                  if (!t || t.indexOf("pendo-mock-flexbox-element") < 0) {
                    var d = FlexboxPolyfill.createFlexContainer(i);
                    return (
                      d.appendChild(e),
                      n &&
                        !e.style.width &&
                        (d.children[0].children[0].style.width = o),
                      n && e.style.width && (d.style.width = o),
                      a ? (d.style.width = r) : (d.style.width = e.style.width),
                      d
                    );
                  }
                  return e;
                }
                function c(e, t) {
                  var n = FlexboxPolyfill.createFlexRow(),
                    i = "pendo-mock-flexbox-row" === t[0].className,
                    o = FlexboxPolyfill.findMaxChildHeight(t, i);
                  if (i) {
                    t[0].style["min-height"] = o + "px";
                    var r = parseInt(t[0].style["min-height"], 10),
                      a = parseInt(t[0].style.height, 10);
                    return r > a && (t[0].style["min-height"] = a + "px"), e;
                  }
                  for (var s = 0; s < t.length; s++) n.appendChild(t[s]);
                  return (
                    e.appendChild(n), (n.style["min-height"] = o + "px"), e
                  );
                }
                function p(e, t) {
                  for (var n = [], i = 0; i < e.length; i++) {
                    if (t) {
                      var o =
                          e[i].children[0].children[0].getAttribute("class") ||
                          "",
                        r = -1 !== o.indexOf("pendo-block-wrapper");
                      if (r) {
                        var a = e[i].children[0].offsetHeight + "px";
                        e[i].style.height = a;
                      }
                    }
                    n.push(e[i].offsetHeight);
                  }
                  return _.reduce(
                    n,
                    function (e, t) {
                      return Math.max(e, t);
                    },
                    20
                  );
                }
                function f(e, t) {
                  for (var n = e.slice(0, t), i = 0, o = 0; o < n.length; o++) {
                    var r = n[o].offsetWidth;
                    i += r;
                  }
                  return i;
                }
                function g(e, t) {
                  for (
                    var n = t / Math.max(e.length - 1, 1),
                      i = e[0],
                      o = e[e.length - 1],
                      r = 1;
                    r < e.length - 1;
                    r++
                  ) {
                    var a = f(e, r);
                    e[r].style.left = r * n + a + "px";
                  }
                  (i.style.left = "0px"), (o.style.right = "0px");
                }
                function h(e, t) {
                  for (
                    var n = t / (2 * e.length),
                      i = e[0],
                      o = e[e.length - 1],
                      r = 1;
                    r < e.length - 1;
                    r++
                  ) {
                    var a = f(e, r);
                    e[r].style.left = 2 * n + a + "px";
                  }
                  (i.style.left = n + "px"), (o.style.right = n + "px");
                }
                function v(e, t) {
                  for (
                    var n = t / (e.length + 1),
                      i = e[0],
                      o = e[e.length - 1],
                      r = 1;
                    r < e.length - 1;
                    r++
                  ) {
                    var a = f(e, r);
                    e[r].style.left = n + a + "px";
                  }
                  (i.style.left = n + "px"), (o.style.right = n + "px");
                }
                function m(e, t) {
                  for (
                    var n = t / 2, i = e[0], o = e[e.length - 1], r = 1;
                    r < e.length - 1;
                    r++
                  ) {
                    var a = f(e, r);
                    e[r].style.left = n + a + "px";
                  }
                  e.length > 1 && (o.style.right = n + "px"),
                    (i.style.left = n + "px");
                }
                function b(e) {
                  var t = e[0];
                  t.style.left = "0px";
                  for (var n = 1; n < e.length; n++) {
                    var i = f(e, n);
                    e[n].style.left = i + "px";
                  }
                }
                function y(e, t) {
                  for (
                    var n = t, i = e[0], o = e[e.length - 1], r = 1;
                    r < e.length - 1;
                    r++
                  ) {
                    var a = f(e, r);
                    e[r].style.left = n + a + "px";
                  }
                  e.length > 1 && (i.style.left = n + "px"),
                    (o.style.right = "0px");
                }
                return {
                  calculateTotalOffsetWidth: f,
                  center: m,
                  createFlexContainer: d,
                  createFlexRow: u,
                  findMaxChildHeight: p,
                  flexEnd: y,
                  flexStart: b,
                  formatPseudoRow: n,
                  getPendoInlineUIElements: s,
                  getPendoVisualElements: a,
                  initializeFlexboxContainer: e,
                  isPendoInlineUIElement: r,
                  justifyContent: t,
                  setElementAlignment: i,
                  spaceAround: h,
                  spaceBetween: g,
                  spaceEvenly: v,
                  wrapElementInMockFlexboxContainer: l,
                  wrapMockFlexElementsInMockFlexRows: c,
                  getVisualElementsWrappedInFlexElements: o,
                };
              })(),
              BuildingBlockTemplates = (function () {
                function e(e, t, n, o) {
                  var u = o || getActiveGuides();
                  switch (e) {
                    case "pendo_resource_center_module_list_item":
                      return i(t, n, u);
                    case "pendo_resource_center_guide_list_item":
                      return r(t, n, u);
                    case "pendo_resource_center_onboarding_item":
                      return a(t, n, u);
                    case "pendo_resource_center_onboarding_progress_bar":
                      return s(t, n, u);
                    case "pendo_resource_center_announcement_item":
                      return d(t, n, u);
                    case "pendo_guide_data_text_block":
                      return p(t, n, u);
                    default:
                      return [];
                  }
                }
                function t(e, t) {
                  var n = /<%=\s*([A-Za-z_0-9$]+)\s*%>/gi;
                  return e.replace(n, function (e, n) {
                    return _.isNull(t[n]) || _.isUndefined(t[n]) ? e : t[n];
                  });
                }
                function n(e, i) {
                  if ((e.content && (e.content = t(e.content, i)), e.children))
                    for (var o = 0; o < e.children.length; o++)
                      n(e.children[o], i);
                  return e;
                }
                function i(e, t, i) {
                  var o = e.templateChildren;
                  return _.reduce(
                    o,
                    function (o, r, a) {
                      var s =
                          BuildingBlockResourceCenter.findResourceCenterHomeView(
                            i
                          ),
                        d = _.find(i, function (e) {
                          return e.id === r.id;
                        });
                      if (pendo.designer)
                        (d = r),
                          (s = _.find(i, function (e) {
                            return get(
                              e,
                              "attributes.resourceCenter.isTopLevel"
                            );
                          }));
                      else {
                        if (!d) return o;
                        if (!d.hasResourceCenterContent)
                          return (
                            _.each(d.children, function (e) {
                              var t = pendo.findGuideById(e);
                              t &&
                                t.control &&
                                t.steps[0].onControlGuide("control");
                            }),
                            o
                          );
                      }
                      var u = JSON.parse(JSON.stringify(e));
                      delete u.templateChildren,
                        (u.props.id = u.props.id + "-" + a),
                        (u.props["data-pendo-module-guide-id"] = d.id),
                        u.actions || (u.actions = []);
                      var l = {
                        action: "renderResourceCenterModule",
                        source: u.props.id,
                        destination: "EventRouter",
                        parameters: [
                          { name: "guideId", type: "string", value: d.id },
                        ],
                        uiMetadata: {},
                        eventType: "click",
                      };
                      pendo.designer || u.actions.push(l);
                      var c = get(s, "attributes.notificationBubble"),
                        p = get(s, "attributes.notifications");
                      if (c && p) {
                        var g;
                        "AnnouncementsModule" ===
                          get(d, "attributes.resourceCenter.moduleId") &&
                          (g = d.id),
                          "chat" ===
                            get(
                              d,
                              "attributes.resourceCenter.integrationName"
                            ) && (g = "chat"),
                          g &&
                            ((u.props["data-pendo-notification-id"] = g),
                            f(
                              u,
                              s,
                              c,
                              g,
                              s.attributes.notifications.individualCounts[g]
                            ));
                      }
                      return (
                        (u = n(u, r)),
                        o.concat(BuildingBlockGuides.buildNodeFromJSON(u, t, i))
                      );
                    },
                    []
                  );
                }
                function o(e, t) {
                  var n = _.find(e, function (e) {
                    return e.id === (t.id ? t.id : t);
                  });
                  if (pendo.designer) return t;
                  if (n)
                    return n.ineligibleForRC
                      ? void (n.control && n.steps[0].onControlGuide("control"))
                      : n;
                }
                function r(e, t, i) {
                  var r = e.templateChildren;
                  return _.reduce(
                    r,
                    function (r, a, s) {
                      var d = o(i, a);
                      if (!d) return r;
                      var u = JSON.parse(JSON.stringify(e));
                      a.keywords &&
                        (u.props["data-_pendo-text-list-item-1"] = a.keywords),
                        delete u.templateChildren,
                        (u.props.id = u.props.id + "-" + s),
                        u.actions || (u.actions = []);
                      var l = {
                        action: "showGuide",
                        source: u.props.id,
                        destination: "EventRouter",
                        parameters: [
                          { name: "guideId", type: "string", value: d.id },
                        ],
                        uiMetadata: {},
                        eventType: "click",
                      };
                      return (
                        pendo.designer || u.actions.push(l),
                        (u = n(u, a)),
                        r.concat(BuildingBlockGuides.buildNodeFromJSON(u, t, i))
                      );
                    },
                    []
                  );
                }
                function a(e, i, r) {
                  var a = e.templateChildren;
                  return _.reduce(
                    a,
                    function (a, s, d) {
                      var u = o(r, s);
                      if (!u) return a;
                      var l = JSON.parse(JSON.stringify(e));
                      delete l.templateChildren,
                        (l.props.id = l.props.id + "-" + d),
                        l.actions || (l.actions = []);
                      var c = {
                        action: "showGuide",
                        source: l.props.id,
                        destination: "EventRouter",
                        parameters: [
                          { name: "guideId", type: "string", value: u.id },
                        ],
                        uiMetadata: {},
                        eventType: "click",
                      };
                      pendo.designer || l.actions.push(c);
                      var p = u.getTotalSteps(),
                        f = u.getSeenSteps();
                      u.isComplete() && (f = p);
                      var g = parseInt((f / p) * 100, 10),
                        h = BuildingBlockGuides.findDomBlockInDomJson(
                          l,
                          function (e) {
                            return e.svgWidgetId;
                          }
                        );
                      if (
                        ((h.svgAttributes.fillCircle.percentComplete = g),
                        s.hasOwnProperty("subtitle"))
                      )
                        s.stepProgress = t(s.subtitle, {
                          currentStep: f,
                          totalSteps: p,
                        });
                      else {
                        var v = "Step " + f + " of " + p;
                        s.stepProgress = v;
                      }
                      return (
                        (l = n(l, s)),
                        a.concat(BuildingBlockGuides.buildNodeFromJSON(l, i, r))
                      );
                    },
                    []
                  );
                }
                function s(e, t, i) {
                  var r = t.getGuide().attributes.resourceCenter.children,
                    a = 0,
                    s = 0;
                  _.forEach(r, function (e) {
                    var t = o(i, e);
                    t &&
                      (t.isComplete()
                        ? ((a += t.getTotalSteps()), (s += t.getTotalSteps()))
                        : ((a += t.getTotalSteps()), (s += t.getSeenSteps())));
                  });
                  var d = parseInt((s / a) * 100, 10);
                  isNaN(d) && (d = 0);
                  var u = { totalPercentComplete: d + "%" },
                    l = JSON.parse(JSON.stringify(e));
                  l = n(l, u);
                  var c = BuildingBlockGuides.findDomBlockInDomJson(
                    l,
                    function (e) {
                      return (
                        e.props &&
                        e.props.id &&
                        -1 !== e.props.id.indexOf("pendo-progress-bar-fill")
                      );
                    }
                  );
                  return (
                    (c.props.style.width = u.totalPercentComplete),
                    [BuildingBlockGuides.buildNodeFromJSON(l, t, i)]
                  );
                }
                function d(e, t, n) {
                  var i = t.getGuide().attributes.resourceCenter.children,
                    r = _.reduce(
                      i,
                      function (e, t, i) {
                        var r = o(n, t);
                        return r ? (e.push(r), e) : e;
                      },
                      []
                    ),
                    a = _.sortBy(r, function (e) {
                      var t = get(e, "showsAfter") || get(e, "publishedAt");
                      return t || (t = new Date().getTime()), -1 * t;
                    }),
                    s = BuildingBlockResourceCenter.getResourceCenter(),
                    d = get(s, "attributes.notificationBubble");
                  return _.map(a, function (t, n) {
                    var i = "whatsnew" === get(t, "attributes.type"),
                      o = JSON.parse(JSON.stringify(e)),
                      r = t.steps[0];
                    return (
                      (r.eventRouter = new EventRouter()),
                      (o.props.id = o.props.id + "-" + n),
                      (o.props["data-pendo-announcement-guide-id"] = t.id),
                      i ? l(t, o, d) : u(t, o, d)
                    );
                  });
                }
                function u(e, t, n) {
                  var i,
                    o = pendo.GuideFactory(e),
                    r = e.steps[0];
                  _.isFunction(r.script) && r.script(r, o);
                  var a = r.domJson;
                  if (((t.children = [a]), n)) {
                    i = c(n);
                    var s = function (e) {
                        return "pendo-guide-container" === e.props.id;
                      },
                      d = BuildingBlockGuides.findDomBlockInDomJson(t, s),
                      u = parseInt(t.props.style["padding-top"], 10),
                      l = parseInt(d.props.style["padding-top"], 10);
                    i.props.style.top = l + u + 5 + "px";
                  }
                  return (
                    !BuildingBlockResourceCenter.hasAnnouncementBeenSeen(e) &&
                      i &&
                      ((t.props["class"] += " pendo-unseen-announcement"),
                      t.children.unshift(i)),
                    delete t.templateName,
                    BuildingBlockGuides.buildNodeFromJSON(t, r)
                  );
                }
                function l(e, t, n) {
                  var i,
                    o = pendo.GuideFactory(e),
                    r = o.steps[0];
                  r.render(), _.isFunction(r.script) && r.script(r, o);
                  var a = r.guideElement,
                    s = a[0].id,
                    d = "#" + s + " h1::after { display:none; }",
                    u = a[0].appendChild(document.createElement("style"));
                  (u.innerHTML = d),
                    n && ((i = c(n)), (i.props.style.top = "20px")),
                    !BuildingBlockResourceCenter.hasAnnouncementBeenSeen(e) &&
                      i &&
                      ((t.props["class"] += " pendo-unseen-announcement"),
                      (t.children = [i]));
                  var l = BuildingBlockGuides.buildNodeFromJSON(t, r);
                  return a.appendTo(l), l;
                }
                function c(e) {
                  return {
                    type: "div",
                    children: [],
                    props: {
                      class: "pendo-unread-announcement-mini-bubble",
                      style: {
                        position: "absolute",
                        "border-radius": "5px",
                        height: "10px",
                        width: "10px",
                        "line-height": "0px",
                        left: "0px",
                        top: "30px",
                        "box-sizing": "content-box",
                        "background-color": e["background-color"],
                        "z-index": "10",
                      },
                    },
                  };
                }
                function p(e, t, i) {
                  var o,
                    r = t.getGuide
                      ? t.getGuide()
                      : _.find(i, function (e) {
                          return e.id === t.guideId;
                        }),
                    a = get(r, "attributes.dates." + r.language, !1);
                  if (a) o = { showsAfter: a };
                  else {
                    var s = get(r, "showsAfter") || get(r, "publishedAt");
                    s = s ? new Date(s) : new Date();
                    var d = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      u =
                        d[s.getMonth()] +
                        " " +
                        s.getDate() +
                        ", " +
                        s.getFullYear();
                    o = { showsAfter: u };
                  }
                  var l = JSON.parse(JSON.stringify(e));
                  return (
                    (l = n(l, o)),
                    [BuildingBlockGuides.buildNodeFromJSON(l, t, i)]
                  );
                }
                function f(e, t, n, i, o) {
                  var r = BuildingBlockGuides.findDomBlockInDomJson(
                    e,
                    function (e) {
                      return (
                        e &&
                        e.props &&
                        e.props.id &&
                        -1 !== e.props.id.indexOf("pendo-row")
                      );
                    }
                  );
                  if (r) {
                    var a = _.find(r.children, function (e) {
                      return (
                        e &&
                        e.props &&
                        e.props.id &&
                        -1 !== e.props.id.indexOf("pendo-text")
                      );
                    });
                    if (a && a.props && a.props.style) {
                      var s = parseInt(a.props.style.width, 10);
                      if (s && !isNaN(s)) {
                        var d = r.children.indexOf(a),
                          u = s - 40 + "px";
                        "100%" !== a.props.style.width &&
                          (a.props.style.width = u),
                          (a.props.style["padding-right"] = "40px"),
                          (a.props.style["box-sizing"] = "content-box");
                        var l = {
                          type: "div",
                          children: [
                            {
                              type: "div",
                              content: String(
                                t.attributes.notifications.individualCounts[i]
                              ),
                              props: {
                                style: {
                                  display: "inline-block",
                                  "vertical-align": "middle",
                                  "line-height": "26px",
                                  "font-weight": n["font-weight"],
                                  "font-family": n["font-family"],
                                  color: n.color,
                                },
                              },
                            },
                          ],
                          props: {
                            class: "_pendo-home-view-bubble",
                            style: {
                              position: "absolute",
                              "border-radius": "20px",
                              height: "26px",
                              "line-height": "0px",
                              padding: "0px 10px",
                              right: "20px",
                              top: "50%",
                              "margin-top": "-14px",
                              "box-sizing": "content-box",
                              "background-color": n["background-color"],
                              display: o ? "block" : "none",
                            },
                          },
                        };
                        r.children.splice(d + 1, 0, l);
                      }
                    }
                  }
                }
                return {
                  buildNodesFromTemplate: e,
                  generateUnreadAnnouncementMiniBubble: c,
                };
              })(),
              BuildingBlockTooltips = (function () {
                function e(e, t, o, r) {
                  if (o.guideElement) {
                    var a = o.guideElement;
                    a.addClass(buildTooltipCSSName());
                    var s = getOffsetPosition(t);
                    if (0 === s.height && 0 === s.width) return null;
                    var d = function (e) {
                        return "pendo-guide-container" === e.props.id;
                      },
                      l = BuildingBlockGuides.findDomBlockInDomJson(e, d);
                    if (l) {
                      var c = o.attributes.layoutDir,
                        p = { height: r.offsetHeight, width: r.offsetWidth },
                        f = {
                          height:
                            parseInt(l.props["data-caret-height"], 10) || 0,
                          width: parseInt(l.props["data-caret-width"], 10) || 0,
                          backgroundColor: l.props.style["background-color"],
                          offset: 10,
                        };
                      if ((n(o), l.props.style.border)) {
                        var g = l.props.style.border.split(" ");
                        (f.borderColor = g[2]),
                          (f.borderWidth = parseInt(g[0], 10));
                      }
                      var v = i(s, p, f, c);
                      o && (o.dim = v);
                      var m;
                      o && _.isFunction(o.getGuide) && (m = o.getGuide());
                      var b = get(m, "attributes.resourceCenter");
                      s.fixed
                        ? (a.css({ position: "fixed" }),
                          (r.style.position = "absolute"))
                        : (o && b) || (r.style.position = "absolute"),
                        f.height && f.width && u(a, v, f);
                      var y = "300000";
                      r &&
                        r.style &&
                        r.style["z-index"] &&
                        (y = r.style["z-index"]),
                        a.css({ "z-index": y }),
                        b ||
                          a.css({
                            height: "auto",
                            width: "auto",
                            overflow: "visible",
                          }),
                        o.elementPathRule &&
                          a.css({
                            left: v.left,
                            top: v.top,
                            position: s.fixed ? "fixed" : "absolute",
                          }),
                        "top" === v.layoutDir &&
                          "left" === v.hbias &&
                          a
                            .find("#pendo-watermark")
                            .css({ top: "auto", bottom: "100%" });
                      for (
                        var w = /(auto|scroll)/,
                          S = getScrollParent(t, w),
                          E = getBody();
                        S && S !== E;

                      )
                        o.attachEvent(
                          S,
                          "scroll",
                          _.throttle(_.bind(h, this, o, S, w), 10)
                        ),
                          (S = getScrollParent(S, w));
                      return a[0];
                    }
                  }
                }
                function t(e, t) {
                  var n = Sizzle(t.elementPathRule)[0],
                    i = function () {
                      pendo.onGuideAdvanced(e, t);
                    };
                  t.attachEvent(n, e, i);
                }
                function n(e) {
                  e.attributes &&
                    e.attributes.advanceActions &&
                    e.elementPathRule &&
                    (e.attributes.advanceActions.elementHover
                      ? t("mouseover", e)
                      : e.attributes.advanceActions.elementClick &&
                        t("click", e));
                }
                function i(e, t, n, i) {
                  var s = pendo._get_screen_dim(),
                    d = i || "auto",
                    u = { width: Math.min(t.width, s.width), height: t.height };
                  (u.layoutDir = d),
                    (u.hbias = o(e, s, d)),
                    (u.layoutDir = r(u, s, e, d));
                  var l = a(u, e, s);
                  return (
                    (u.top = l.top),
                    (u.left = l.left),
                    "top" === u.layoutDir
                      ? (u.top -= n.height)
                      : "bottom" === u.layoutDir
                      ? (u.top += n.height)
                      : "right" === u.layoutDir
                      ? (u.left += n.height)
                      : "left" === u.layoutDir && (u.left -= n.height),
                    u
                  );
                }
                function o(e, t, n) {
                  if ("right" === n || "left" === n)
                    return pendo.log("Setting layout position to " + n), n;
                  var i = t.width / 3,
                    o = i,
                    r = 2 * i;
                  return o < e.left && e.left < r
                    ? "center"
                    : e.left < t.width / 2
                    ? "right"
                    : "left";
                }
                function r(e, t, n, i) {
                  if (i && "auto" !== i) return i;
                  var o = n.fixed,
                    r = n.top - documentScrollTop(),
                    a = n.left - documentScrollLeft(),
                    s = a + n.width,
                    d = getClientRect(getBody()),
                    u = n.top - e.height < 0,
                    l = n.top + n.height + e.height > (o ? d.height : d.bottom),
                    c = n.left - e.width < 0,
                    p = n.left + n.width + e.width > (o ? d.width : d.right),
                    f = l && u && c && p;
                  if (f) return "bottom";
                  var g;
                  r < t.height / 3 && (g = "bottom");
                  var h = r > (2 * t.height) / 3;
                  if (
                    ((h || "center" === e.hbias) && (g = "top"),
                    a < e.width && t.width - s < e.width && (g = "bottom"),
                    "bottom" === g)
                  ) {
                    var v = getOffsetPosition(document.body);
                    n.top + e.height > v.height && (g = "top");
                  }
                  return (
                    "top" === g && n.top - e.height < 0 && (g = "bottom"),
                    l &&
                      u &&
                      ("center" !== e.hbias && (g = e.hbias),
                      (c && p) || (p || (g = "right"), c || (g = "left"))),
                    (g && "bottom" !== g) || !l || u || (g = "top"),
                    g ? g : e.hbias ? e.hbias : "bottom"
                  );
                }
                function a(e, t, n) {
                  return "top" === e.layoutDir || "bottom" === e.layoutDir
                    ? s(e, n, t, e.layoutDir, e.hbias)
                    : d(e, t, e.hbias);
                }
                function s(e, t, n, i, o) {
                  var r = e.height,
                    a = e.width,
                    s = { top: null, left: null };
                  if (
                    ("bottom" === i
                      ? (s.top = n.top + n.height)
                      : "top" === i && (s.top = n.top - r),
                    "right" === o)
                  ) {
                    var d = n.left + n.width / 2;
                    d + e.width > t.width && (d -= d + e.width - t.width),
                      (s.left = d);
                  } else
                    "left" === o
                      ? (s.left = n.left - a + n.width / 2)
                      : (s.left = n.left + n.width / 2 - a / 2);
                  return s;
                }
                function d(e, t, n) {
                  var i = e.height,
                    o = e.width,
                    r = { top: null, left: null };
                  return (
                    (r.top = t.top - i / 2 + t.height / 2),
                    "right" === e.layoutDir
                      ? (r.left = t.left + t.width)
                      : "left" === e.layoutDir &&
                        (r.left = Math.max(0, t.left - o)),
                    r
                  );
                }
                function u(e, t, n) {
                  var i = document.createElement("div");
                  i.setAttribute("class", "pendo-tooltip-caret"),
                    (i.style.position = "absolute"),
                    (i.style.zIndex = 11),
                    ("top" === t.layoutDir || "bottom" === t.layoutDir) &&
                      l(i, e, t, n),
                    ("left" === t.layoutDir || "right" === t.layoutDir) &&
                      c(i, e, t, n);
                  var o = e.find("#pendo-guide-container")[0].parentNode;
                  if ((o.appendChild(i), n.borderWidth)) {
                    var r = p(i, n, t.layoutDir);
                    o.appendChild(r);
                  }
                }
                function l(e, t, n, i) {
                  var o = pendo._get_screen_dim();
                  if (
                    ((e.style["border-left"] =
                      i.width + "px solid transparent"),
                    (e.style["border-right"] =
                      i.width + "px solid transparent"),
                    "left" === n.hbias)
                  ) {
                    var r = n.width - 2 * i.width - i.offset - i.borderWidth;
                    (e.style.left = r + "px"),
                      (n.left += i.offset + i.width + i.borderWidth);
                  } else
                    "right" === n.hbias
                      ? ((e.style.left = i.offset + i.borderWidth + "px"),
                        (n.left -= i.offset + i.width + i.borderWidth),
                        n.left + n.width > o.width &&
                          (n.left = n.left - (n.left + n.width - o.width)),
                        (n.left = Math.max(0, n.left)))
                      : (e.style.left = n.width / 2 - i.width + "px");
                  if ("bottom" === n.layoutDir) {
                    e.style["border-bottom"] =
                      i.height + "px solid " + i.backgroundColor;
                    var a = -1 * i.height;
                    i.borderWidth && (a += i.borderWidth),
                      (e.style.top = a + "px");
                  }
                  if ("top" === n.layoutDir) {
                    e.style["border-top"] =
                      i.height + "px solid " + i.backgroundColor;
                    var s = -1 * i.height;
                    i.borderWidth && (s += i.borderWidth),
                      (e.style.bottom = s + "px");
                  }
                  return e;
                }
                function c(e, t, n, i) {
                  if (
                    ((e.style["border-top"] = i.width + "px solid transparent"),
                    (e.style["border-bottom"] =
                      i.width + "px solid transparent"),
                    (e.style.top = n.height / 2 - i.width + "px"),
                    "left" === n.layoutDir)
                  ) {
                    e.style["border-left"] =
                      i.height + "px solid " + i.backgroundColor;
                    var o = -1 * i.height;
                    i.borderWidth && (o += i.borderWidth),
                      (e.style.right = o + "px");
                  }
                  if ("right" === n.layoutDir) {
                    e.style["border-right"] =
                      i.height + "px solid " + i.backgroundColor;
                    var r = -1 * i.height;
                    i.borderWidth && (r += i.borderWidth),
                      (e.style.left = r + "px");
                  }
                  return e;
                }
                function p(e, t, n) {
                  var i = e.cloneNode();
                  i.setAttribute("class", "pendo-tooltip-caret-border"),
                    (i.style.zIndex = 10);
                  for (
                    var o = ["Top", "Right", "Bottom", "Left"], r = 0;
                    r < o.length;
                    r++
                  ) {
                    var a = "border" + o[r] + "Width",
                      s = "border" + o[r] + "Color";
                    i.style[a] &&
                      ((i.style[a] =
                        parseInt(i.style[a], 10) + t.borderWidth + "px"),
                      (i.style[s] = f(i.style[s], t.borderColor)));
                  }
                  return (
                    "top" === n &&
                      ((i.style.left =
                        parseInt(i.style.left, 10) - t.borderWidth + "px"),
                      (i.style.bottom =
                        parseInt(i.style.bottom, 10) - t.borderWidth + "px")),
                    "bottom" === n &&
                      ((i.style.left =
                        parseInt(i.style.left, 10) - t.borderWidth + "px"),
                      (i.style.top =
                        parseInt(i.style.top, 10) - t.borderWidth + "px")),
                    "right" === n &&
                      ((i.style.top =
                        parseInt(i.style.top, 10) - t.borderWidth + "px"),
                      (i.style.left =
                        parseInt(i.style.left, 10) - t.borderWidth + "px")),
                    "left" === n &&
                      ((i.style.top =
                        parseInt(i.style.top, 10) - t.borderWidth + "px"),
                      (i.style.right =
                        parseInt(i.style.right, 10) - t.borderWidth + "px")),
                    i
                  );
                }
                function f(e, t) {
                  return "transparent" === e ? e : t;
                }
                function g(e, t) {
                  if (t) {
                    var n = e.element || getElementForGuideStep(e),
                      i = getOffsetPosition(n);
                    if (
                      "none" !== getComputedStyle_safe(e.elements[0]).display
                    ) {
                      var o = e.attributes.layoutDir,
                        r = e.guideElement,
                        a = dom(t).find("#pendo-guide-container"),
                        s = a[0].style,
                        d = { height: t.offsetHeight, width: t.offsetWidth },
                        u = {
                          height:
                            parseInt(
                              a[0].getAttribute("data-caret-height"),
                              10
                            ) || 0,
                          width:
                            parseInt(
                              a[0].getAttribute("data-caret-width"),
                              10
                            ) || 0,
                          backgroundColor: a[0].style["background-color"],
                          offset: 10,
                          borderColor: s.borderColor,
                          borderWidth: parseInt(s.borderWidth, 10),
                        },
                        l = this.getBBTooltipDimensions(i, d, u, o);
                      u.height && u.width && this.buildTooltipCaret(r, l, u),
                        r.css({
                          top: l.top,
                          left: l.left,
                          position: i.fixed ? "fixed" : r[0].style.position,
                        }),
                        pendo.dom(r.find(".pendo-tooltip-caret")[0]).remove(),
                        pendo
                          .dom(r.find(".pendo-tooltip-caret-border")[0])
                          .remove();
                    }
                  }
                }
                function h(e, t, n) {
                  var i = getClientRect(e.element);
                  isVisibleInScrollParent(i, t, n)
                    ? dom(e.elements[0]).css({ display: "block" })
                    : dom(e.elements[0]).css({ display: "none" });
                }
                return {
                  createBBTooltip: e,
                  getBBTooltipDimensions: i,
                  determineBBHorizontalBias: o,
                  determineTooltipPosition: r,
                  positionBBTooltipWithBias: a,
                  calculateToolTipPositionForTopBottom: s,
                  calculateToolTipPositionForLeftRight: d,
                  buildTooltipCaret: u,
                  styleTopOrBottomCaret: l,
                  styleLeftOrRightCaret: c,
                  buildBorderCaret: p,
                  determineBorderCaretColor: f,
                  placeBBTooltip: g,
                  attachBBAdvanceActions: n,
                };
              })(),
              BuildingBlockGuides = (function () {
                function e(t) {
                  return t.props &&
                    t.props.id &&
                    0 === t.props.id.indexOf("pendo-g-")
                    ? t
                    : t.children
                    ? _.find(t.children, function (t) {
                        return e(t);
                      })
                    : void 0;
                }
                function t(e, t) {
                  for (
                    var n = e.parentNode.children, i = 0, o = 0;
                    o < n.length;
                    o++
                  )
                    n[o] !== e && (i += n[o].offsetHeight);
                  var r = t.offsetHeight,
                    a = Math.max(r - i, 0);
                  e.style.height = a + "px";
                }
                function n(e, n, i, o) {
                  o = o || {};
                  var r = o.isResizeDisabled || !1,
                    a = n.getGuide(),
                    s = BuildingBlockGuides.findGuideContainerJSON(e),
                    d = get(a, "attributes.resourceCenter"),
                    u =
                      d &&
                      "FullyCustomModule" ===
                        get(a, "attributes.resourceCenter.moduleId");
                  (n.hasEscapeListener = !1),
                    (n.containerId = s && s.props && s.props.id),
                    (n.element = getElementForGuideStep(n));
                  var l = BuildingBlockGuides.buildNodeFromJSON(e, n, i);
                  n.guideElement = l;
                  var c = l.find("#" + n.containerId),
                    f = "data-vertical-alignment",
                    g = "Relative to Element" === c.attr(f);
                  g &&
                    !d &&
                    pendo
                      .dom(n.guideElement)
                      .css({ overflow: "hidden", height: "0", width: "0" }),
                    pendo.designer || c.css({ visibility: "hidden" });
                  var h = BuildingBlockWatermark.buildWatermark(
                    {
                      targetAccount: a.targetAccount,
                      isBottomAligned: "Bottom Aligned" === c.attr(f),
                    },
                    BuildingBlockGuides.buildNodeFromJSON
                  );
                  h && c.append(h);
                  var v = n && n.attributes && n.attributes.imgCount;
                  l.appendTo(getGuideAttachPoint());
                  var m = c.find('[data-pendo-grow-height="true"]')[0];
                  return (
                    m && t(m, l[0]),
                    y(n.containerId),
                    r || w(n.containerId),
                    u ||
                      BuildingBlockGuides.recalculateGuideHeight(n.containerId),
                    g
                      ? (n.attributes.calculatedType = "tooltip")
                      : BuildingBlockTooltips.attachBBAdvanceActions(n),
                    g && !v && p(n, e, c[0]),
                    d &&
                      BuildingBlockResourceCenter.showHomeViewOrEmptyState(a),
                    v || c.css({ visibility: "visible" }),
                    n.elements.push(n.guideElement[0]),
                    BuildingBlockGuides.autofocusStep(n, c),
                    BuildingBlockGuides.trapFocusStep(n, c),
                    l
                  );
                }
                function i(e, t) {
                  if (!pendo.designer && get(e, "attributes.isAutoFocus")) {
                    var n =
                        "autofocus for guide id: " +
                        e.getGuide().id +
                        " step id: " +
                        e.id +
                        " ",
                      i = function () {
                        var e = dom(t).find("#pendo-guide-container");
                        return (
                          (e = e[0] || e),
                          e &&
                          isElementVisible(e) &&
                          isElemInViewport(e) &&
                          isElemIsFocusable(e)
                            ? e
                            : null
                        );
                      },
                      o = function (e) {
                        return e && e.focus(), e === document.activeElement;
                      },
                      r = {
                        maxRetries: 100,
                        delay: 50,
                        exponentialBackoff: !1,
                      };
                    poll(
                      i,
                      r,
                      function (e) {
                        poll(
                          function () {
                            return o(e);
                          },
                          r,
                          function () {},
                          function () {
                            writeErrorPOST(
                              n +
                                "#pendo-guide-container is available on page but could not capture focus"
                            );
                          }
                        );
                      },
                      function () {
                        writeErrorPOST(
                          n +
                            "#pendo-guide-container did not render or become visible in time to focus"
                        );
                      }
                    );
                  }
                }
                function o(e, t) {
                  if (!pendo.designer && get(e, "attributes.isAutoFocus")) {
                    var n = t.find("#pendo-guide-container");
                    r(n);
                  }
                }
                function r(e) {
                  var t = e[0];
                  if (t) {
                    var n = [
                        "a[href]:not([disabled])",
                        "button:not([disabled])",
                        "textarea:not([disabled])",
                        'input[type="text"]:not([disabled])',
                        'input[type="radio"]:not([disabled])',
                        'input[type="checkbox"]:not([disabled])',
                        "select:not([disabled])",
                        "[tabindex]",
                        "iframe",
                      ].join(", "),
                      i = e.find(n);
                    if (i.length) {
                      var o = i[0],
                        r = i[i.length - 1],
                        s = a(e),
                        d = s[0],
                        u = s[1],
                        l = function (e) {
                          var n = 9,
                            i = "Tab" === e.key || e.keyCode === n,
                            a = e.shiftKey;
                          i &&
                            (a
                              ? document.activeElement === d &&
                                (r.focus(), e.preventDefault())
                              : (document.activeElement === t &&
                                  (o.focus(), e.preventDefault()),
                                document.activeElement === u &&
                                  (o.focus(), e.preventDefault())));
                        };
                      attachEvent(t, "keyup", l), attachEvent(t, "keydown", l);
                    }
                  }
                }
                function a(e) {
                  var t = {
                      margin: 0,
                      padding: 0,
                      outline: "none",
                      border: "none",
                      "box-shadow": "none",
                      shadow: "none",
                    },
                    n = {
                      type: "style",
                      props: {
                        type: "text/css",
                        scoped: "scoped",
                        id: "pendo-focus-bumper-styles" + Date.now(),
                      },
                      css: [
                        {
                          selector: ".pendo-start-focus-bumper",
                          styles: _.extend({}, t, { tabIndex: 0 }),
                        },
                        {
                          selector: ".pendo-start-focus-bumper:hover",
                          styles: t,
                        },
                        {
                          selector: ".pendo-start-focus-bumper:focus",
                          styles: t,
                        },
                        {
                          selector: ".pendo-end-focus-bumper",
                          styles: _.extend({}, t, { tabIndex: 0 }),
                        },
                        {
                          selector: ".pendo-end-focus-bumper:hover",
                          styles: t,
                        },
                        {
                          selector: ".pendo-end-focus-bumper:focus",
                          styles: t,
                        },
                      ],
                    },
                    i = BuildingBlockGuides.buildNodeFromJSON(n);
                  e.prepend(i);
                  var o = document.createElement("div");
                  o.setAttribute(
                    "id",
                    "pendo-start-focus-bumper-" + Date.now()
                  ),
                    o.setAttribute("class", "pendo-start-focus-bumper"),
                    o.setAttribute("tabIndex", 0),
                    e.prepend(o);
                  var r = document.createElement("div");
                  return (
                    r.setAttribute(
                      "id",
                      "pendo-end-focus-bumper-" + Date.now()
                    ),
                    r.setAttribute("class", "pendo-end-focus-bumper"),
                    r.setAttribute("tabIndex", 0),
                    e.append(r),
                    [o, r]
                  );
                }
                function s(e) {
                  BuildingBlockResourceCenter.replaceResourceCenterContent(
                    e.id,
                    undefined,
                    !0
                  );
                }
                function d(e, t, n) {
                  if (e && e.templateName)
                    return BuildingBlockTemplates.buildNodesFromTemplate(
                      e.templateName,
                      e,
                      t,
                      n
                    );
                  var i =
                    !pendo.designer &&
                    "style" === e.type &&
                    ConfigReader.get("disableGuidePseudoStyles");
                  return i ? [] : [c(e, t, n)];
                }
                function u(e, t, n, i) {
                  var o =
                    'illegal building block key "' +
                    e +
                    '" found on guide "' +
                    t +
                    '" step "' +
                    n +
                    '"';
                  throw (
                    (i && (o += ' for node type "' + i + '"'),
                    pendo.log(o),
                    new Error(o))
                  );
                }
                function l(e, t, n, i) {
                  var o = {
                      allow: !0,
                      allowfullscreen: !0,
                      alt: !0,
                      "alt-text": !0,
                      autofocus: !0,
                      class: !0,
                      cols: !0,
                      contenteditable: !0,
                      for: !0,
                      frameborder: !0,
                      href: !0,
                      id: !0,
                      name: !0,
                      placeholder: !0,
                      placement: !0,
                      rows: !0,
                      role: !0,
                      scoped: !0,
                      src: !0,
                      start: !0,
                      style: !0,
                      tabindex: !0,
                      target: !0,
                      title: !0,
                      type: !0,
                      value: !0,
                    },
                    r = { embed: { src: !0 } },
                    a = /^data-/,
                    s = /^aria-/,
                    d = pendo._.keys(e);
                  return pendo._.reduce(
                    d,
                    function (d, l) {
                      var c = r[i] && r[i][l];
                      return (
                        c && u(l, n, t, i),
                        o[l] || a.test(l) || s.test(l) || u(l, n, t),
                        (d[l] = e[l]),
                        d
                      );
                    },
                    {}
                  );
                }
                function c(e, t, n) {
                  (t = t || { id: "unknown", guideId: "unknown" }),
                    (e.props = l(e.props, t.id, t.guideId, e.type));
                  var i = pendo.dom("<" + e.type + "></" + e.type + ">"),
                    o = e.props && e.props.id;
                  if ("pendo-backdrop" === o) {
                    if (
                      t.attributes &&
                      t.attributes.blockOutUI &&
                      t.attributes.blockOutUI.enabled
                    ) {
                      var r = _.throttle(_.partial(N, t), 25);
                      t.attachEvent(window, "scroll", r, !0);
                    }
                    return A(t);
                  }
                  if (
                    (_.each(e.props, function (n, o) {
                      "style" === o
                        ? i.css(e.props.style)
                        : "data-pendo-code-block" !== o ||
                          n !== !0 ||
                          getPendoConfigValue("preventCodeInjection")
                        ? i.attr(o, n)
                        : i.addClass("pendo-code-block").html(t.getContent());
                    }),
                    e.content && i.text(e.content),
                    "style" === e.type &&
                      (i.styleSheet
                        ? (i.styleSheet.cssText =
                            BuildingBlockGuides.buildStyleTagContent(e.css))
                        : i.text(
                            BuildingBlockGuides.buildStyleTagContent(e.css)
                          )),
                    e.svgWidgetId)
                  ) {
                    var a = BuildingBlockSvgs.buildSvgNode(e.svgWidgetId, e);
                    a.appendTo(i);
                  }
                  var s = e.props.id && -1 !== e.props.id.indexOf("badge"),
                    d = !!e.props.src;
                  if (
                    ((("img" === e.type && d && !s) ||
                      ("iframe" === e.type && t)) &&
                      (t.attributes && !t.attributes.imgCount
                        ? (t.attributes.imgCount = 1)
                        : t.attributes &&
                          t.attributes.imgCount &&
                          t.attributes.imgCount++,
                      BuildingBlockGuides.recalculateGuideHeightOnImgLoad(
                        i,
                        t
                      )),
                    e.actions && e.actions.length)
                  )
                    for (var u = 0; u < e.actions.length; u++)
                      if (
                        (BuildingBlockGuides.bindActionToNode(
                          i,
                          e.actions[u],
                          t
                        ),
                        "renderGuidesListItem" === e.actions[u].action)
                      ) {
                        var c = pendo.findGuideById(e.actions[u].parameters[0]);
                        c ? i.text(c.name) : i.attr("style", "display: none;");
                      }
                  var p = _.find(e.actions, function (e) {
                    return "dismissGuide" === e.action;
                  });
                  if (
                    (p &&
                      !t.hasEscapeListener &&
                      ((t.hasEscapeListener = !0),
                      t.attachEvent(
                        window,
                        "keyup",
                        function (e) {
                          27 === e.keyCode &&
                            t.eventRouter.eventable.trigger("pendoEvent", {
                              step: t,
                              action: "dismissGuide",
                            });
                        },
                        !0
                      )),
                    e.children)
                  )
                    for (var f = 0; f < e.children.length; f++) {
                      var g = BuildingBlockGuides.buildNodesFromJSON(
                        e.children[f],
                        t,
                        n
                      );
                      _.each(g, function (e) {
                        e && e.appendTo(i);
                      });
                    }
                  return i;
                }
                function p(e, t, n) {
                  BuildingBlockTooltips.createBBTooltip(t, e.element, e, n),
                    e.hasBeenScrolledTo ||
                      (scrollIntoView(e.element),
                      scrollToTooltip(e.element, n, e.attributes.layoutDir),
                      (e.hasBeenScrolledTo = !0));
                }
                function f(t, n) {
                  t.on("load", function () {
                    var t = {};
                    !n.containerId && n.domJson && (t = e(n.domJson));
                    var i = n.containerId || (t.props && t.props.id) || "";
                    y(i), I(i);
                    var o = document.getElementById(n.containerId);
                    n &&
                      n.attributes &&
                      n.attributes.imgCount &&
                      (n.attributes.imgCount--,
                      o &&
                        n.attributes.imgCount <= 0 &&
                        ((o.style.visibility = "visible"),
                        "tooltip" === n.attributes.calculatedType &&
                          p(n, n.domJson, o)));
                  }),
                    t.on("error", function () {
                      var e = document.getElementById(n.containerId);
                      return e
                        ? void (e.style.visibility = "visible")
                        : void log(
                            "Failed to find guideContainer for id: " +
                              n.containerId
                          );
                    });
                }
                function g(e, t, n) {
                  e.on(t.eventType, function (i) {
                    if (t.designerAction)
                      pendo.designerv2.designerActions[t.action](
                        e,
                        t.parameters
                      );
                    else {
                      var o = {
                        action: t.action,
                        params: t.parameters,
                        step: n,
                        ignore: !!t.ignore,
                        srcElement: i.srcElement,
                      };
                      "showElements" === t.action || "hideElements" === t.action
                        ? i.srcElement &&
                          i.srcElement.getAttribute("id") === t.source
                          ? n.eventRouter.eventable.trigger("pendoEvent", o)
                          : i.target &&
                            i.target.getAttribute("id") === t.source &&
                            n.eventRouter.eventable.trigger("pendoEvent", o)
                        : n.eventRouter.eventable.trigger("pendoEvent", o);
                    }
                  });
                }
                function h(e) {
                  var t = "";
                  return (
                    _.each(e, function (e, n) {
                      t = t + n + ":" + e + ";";
                    }),
                    t
                  );
                }
                function v(e) {
                  for (var t = "", n = 0; n < e.length; n++)
                    (t += e[n].selector + "{"),
                      _.each(e[n].styles, function (e, n) {
                        (t += n + ":" + e), (t += "!important;");
                      }),
                      (t += "}");
                  return t;
                }
                function m(e) {
                  for (
                    var t = ["pendo-base", "pendo-resource-center-container"],
                      n = 0;
                    20 > n;
                    n++
                  ) {
                    var i = _.find(t, function (t) {
                      return e.id === t;
                    });
                    if (i) return e;
                    if (e === document.body) return document.body;
                    e.parentNode && (e = e.parentNode);
                  }
                  return document.body;
                }
                function b(e, t) {
                  var n = Sizzle("[data-pendo-display-flex]", e);
                  _.each(n, function (e) {
                    var n = FlexboxPolyfill.initializeFlexboxContainer(e, t),
                      i = e.getAttribute("data-pendo-justify-content");
                    FlexboxPolyfill.justifyContent(n, i);
                  });
                }
                function y(e, t) {
                  var n = document.getElementById(e);
                  n && (BuildingBlockGuides.flexElement(n, t), S(n));
                }
                function w(e) {
                  var t = document.getElementById(e),
                    n = t && "0px" === t.style.left && "0px" === t.style.right;
                  t &&
                    n &&
                    attachEvent(
                      window,
                      "resize",
                      _.debounce(function () {
                        y(e, n);
                      }, 50)
                    );
                }
                function S(e) {
                  var t = "data-aspect-ratio",
                    n = Sizzle("[" + t + "]", e);
                  _.each(n, function (e) {
                    var n,
                      i = e.getAttribute(t).split(":");
                    (n =
                      i.length > 1
                        ? parseInt(i[0], 10) / parseInt(i[1], 10)
                        : parseFloat(i[0])),
                      isNaN(n) || (e.style.height = e.offsetWidth / n + "px");
                  });
                }
                function E(e) {
                  C(e);
                  var t = getClientRect(e);
                  if (0 === t.width || 0 === t.height) return !0;
                  if (e.style && "visible" === e.style.visibility) return !1;
                  for (
                    var n = e, i = e.id || "", o = 0;
                    0 !== i.indexOf("pendo-g-") &&
                    (C(n),
                    (n = n.parentNode),
                    (i = n.id || ""),
                    o++,
                    !(o > 10));

                  );
                  return !1;
                }
                function C(e) {
                  return e.style && "none" === e.style.display
                    ? !0
                    : e.style && "0" === e.style.opacity
                    ? !0
                    : e.style && "hidden" === e.style.visibility
                    ? !0
                    : !1;
                }
                function I(e) {
                  var t = document.getElementById(e);
                  if (t) {
                    var n = parseInt(t.style.height, 10),
                      i = t.style.height;
                    pendo.dom(t).css({ height: "auto" });
                    var o = parseInt(getComputedStyle_safe(t).height, 10),
                      r = t.getAttribute("data-pendo-static-height");
                    if (o > window.innerHeight) {
                      var a = dom(t).find("#pendo-guide-container")[0];
                      pendo
                        .dom(a)
                        .css({ "max-height": "100vh", overflow: "auto" });
                    }
                    if (o !== n) {
                      var s = o;
                      r && n && (s = n),
                        pendo.dom(t).css({ height: "" + s + "px" });
                      var d = t.getAttribute("data-vertical-alignment");
                      if (
                        "Centered" === d ||
                        "Left Aligned" === d ||
                        "Right Aligned" === d
                      ) {
                        var u = o > window.innerHeight ? window.innerHeight : s;
                        pendo.dom(t).css({ "margin-top": "-" + u / 2 + "px" });
                      }
                    } else pendo.dom(t).css({ height: i });
                  }
                }
                function T(e, t) {
                  if (t(e)) return e;
                  if (!e.children) return !1;
                  for (var n = 0; n < e.children.length; n++) {
                    var i = T(e.children[n], t);
                    if (i) return i;
                  }
                  return !1;
                }
                function A(e) {
                  try {
                    var t = e.attributes.blockOutUI || {};
                    t.additionalElements = t.additionalElements || "";
                    var n = [];
                    if (t.enabled && e.element !== getBody()) {
                      n.push(e.element);
                      for (
                        var i = t.additionalElements
                            .replace(/\s/g, "")
                            .split(","),
                          o = 0;
                        o < t.additionalElements.length;
                        o++
                      )
                        try {
                          var r = Sizzle(i[o]);
                          r &&
                            _.each(r, function (e) {
                              n.push(e);
                            });
                        } catch (a) {
                          log(
                            "Additional element for blockOutUI is invalid selector",
                            "error"
                          );
                        }
                    }
                    var s = x(n),
                      d = t.padding || { left: 0, right: 0, top: 0, bottom: 0 },
                      u = getClientRect(getBody());
                    s ||
                      (s = {
                        top: 0,
                        left: 0,
                        right: u.width,
                        bottom: u.height,
                        width: 0,
                        height: 0,
                      }),
                      s.fixed &&
                        ((u.top = 0),
                        (u.bottom = u.height),
                        (u.left = 0),
                        (u.right = u.width));
                    var l = O(u, s, d);
                    if (
                      !hasBlockBoxChanged(s) &&
                      !hasBodyDimensionsChanged(u) &&
                      !haveScreenCoordsChanged(l) &&
                      k()
                    )
                      return;
                    var c = { "z-index": 1e4, position: "fixed" },
                      p = [];
                    return (
                      _.each(l, function (e, t) {
                        var n = G(t, _.extend({}, e, c));
                        p.push(n);
                      }),
                      L(p, e)
                    );
                  } catch (a) {
                    log("Failed to add BlockOut ui", "error");
                  }
                }
                function x(e) {
                  if (e && e.length) {
                    var t = _.reduce(
                      e,
                      function (e, t) {
                        if (!isElementVisible(t)) return e;
                        var n = getClientRect(t);
                        if (n)
                          return (
                            (e.fixed = e.fixed && n.fixed),
                            _.each(
                              [
                                ["top", isLessThan],
                                ["right", isGreaterThan],
                                ["bottom", isGreaterThan],
                                ["left", isLessThan],
                              ],
                              function (t) {
                                var i = t[0],
                                  o = t[1];
                                (!e[i] || o(n[i], e[i])) && (e[i] = n[i]);
                              }
                            ),
                            e
                          );
                      },
                      { fixed: !0 }
                    );
                    (t.height = t.bottom - t.top), (t.width = t.right - t.left);
                    var n = bodyOffset();
                    return (
                      t.fixed ||
                        ((t.left += n.left),
                        (t.right += n.left),
                        (t.top += n.top),
                        (t.bottom += n.top)),
                      (t.fixed = !!t.fixed),
                      t
                    );
                  }
                }
                function G(e, t) {
                  var n = dom(
                    "div._pendo-guide-backdrop-region-block_._pendo-region-" +
                      e +
                      "_"
                  );
                  return (
                    n.length ||
                      (n = dom(
                        '<div class="_pendo-guide-backdrop-region-block_ _pendo-region-' +
                          e +
                          '_"></div>'
                      )),
                    dom(n).css(t),
                    n
                  );
                }
                function k() {
                  var e = dom("._pendo-guide-backdrop_");
                  return e.length > 0;
                }
                function O(e, t, n) {
                  var i = {},
                    o = t.top - e.top,
                    r = t.left - e.left;
                  (i.top = o - n.top),
                    (i.left = r - n.left),
                    (i.height = t.height + n.top + n.bottom),
                    (i.width = t.width + n.left + n.right);
                  var a = { left: 0, top: 0 };
                  return (
                    positionFixedActsLikePositionAbsolute() &&
                      ((a = bodyOffset()),
                      (i.left += documentScrollLeft()),
                      (i.top += documentScrollTop())),
                    (i.bottom = i.top + i.height),
                    (i.right = i.left + i.width),
                    {
                      top: {
                        top: 0,
                        height: Math.max(i.top - a.top, 0),
                        left: i.left,
                        width: i.width,
                      },
                      right: {
                        top: -a.top,
                        bottom: 0,
                        left: i.right - a.left,
                        right: 0,
                      },
                      bottom: {
                        top: i.bottom - a.top,
                        bottom: 0,
                        left: i.left - a.left,
                        width: i.width,
                      },
                      left: {
                        top: -a.top,
                        bottom: 0,
                        left: -a.left,
                        width: i.left,
                      },
                    }
                  );
                }
                function L(e, t) {
                  var n = B("pendo-backdrop", t.domJson);
                  delete n.props.style.left,
                    delete n.props.style.right,
                    delete n.props.style.width,
                    delete n.props.style.height,
                    delete n.props.style.bottom,
                    delete n.props.style.top;
                  var i = pendo.dom('<div class="_pendo-guide-backdrop_">');
                  return (
                    i.attr("class", "_pendo-guide-backdrop_"),
                    _.each(n.props, function (t, o) {
                      _.each(e, function (e) {
                        "style" === o ? e.css(n.props.style) : e.attr(o, t),
                          i.append(e);
                      });
                    }),
                    i
                  );
                }
                function B(e, t) {
                  if (t.props && t.props.id === e) return t;
                  if (t.children)
                    for (var n = 0; n < t.children.length; n++) {
                      var i = B(e, t.children[n]);
                      if (i) return i;
                    }
                }
                function N(e) {
                  var t = A(e);
                  t &&
                    (dom("._pendo-guide-backdrop_").remove(),
                    e.guideElement.append(t));
                }
                function R(t) {
                  if (!t.domJson || !_.isObject(t.domJson)) return !1;
                  var n = e(t.domJson);
                  return n
                    ? "Relative to Element" ===
                        n.props["data-vertical-alignment"]
                    : !1;
                }
                return {
                  renderGuideFromJSON: n,
                  autofocusStep: i,
                  trapFocusStep: o,
                  renderResourceCenterModule: s,
                  buildNodeFromJSON: c,
                  recalculateGuideHeightOnImgLoad: f,
                  buildStyleString: h,
                  buildStyleTagContent: v,
                  bindActionToNode: g,
                  recalculateGuideHeight: I,
                  findDomBlockInDomJson: T,
                  isElementHiddenInGuide: E,
                  positionStepForTooltip: p,
                  flexAllThings: y,
                  flexElement: b,
                  findTopLevelContainer: m,
                  updateBackdrop: N,
                  buildNodesFromJSON: d,
                  findGuideContainerJSON: e,
                  maintainAspectRatios: S,
                  sizeElement: t,
                  getAllowedAttributes: l,
                  repositionFlexElementsInFullWidthGuides: w,
                  isBuildingBlockGuideRelativeToElement: R,
                };
              })(),
              BuildingBlockResourceCenter = (function () {
                function e(e) {
                  if (((P = t(e)), !P)) return q.resolve();
                  if (
                    store.getters["frames/isShownInAnotherFrame"]()(P.steps[0])
                  )
                    return q.resolve();
                  var i =
                    P.attributes &&
                    P.attributes.resourceCenter &&
                    P.attributes.resourceCenter.moduleId &&
                    "FullyCustomModule" ===
                      P.attributes.resourceCenter.moduleId;
                  if (i) return (P.hasResourceCenterContent = !0), q.resolve();
                  var o = n(P, e),
                    r = _.reduce(
                      o,
                      function (e, t) {
                        return _.isFunction(t.steps[0].fetchContent)
                          ? e.concat(t.steps[0].fetchContent())
                          : e;
                      },
                      []
                    );
                  return (
                    r.push(
                      ContentValidation.validate(P).then(_.noop, function () {
                        P.launchMethod = "api";
                      })
                    ),
                    (P.attributes.notifications = {
                      totalUnseenCount: 0,
                      individualCounts: { chat: 0 },
                    }),
                    _.forEach(o, function (t) {
                      var n = t.attributes.resourceCenter,
                        i = n.children,
                        o = n.moduleId;
                      "SandboxModule" === o &&
                        (t.hasResourceCenterContent = !0),
                        "IntegrationModule" === o &&
                          ((t.integrationConfig = d(
                            n.integrationName,
                            n.integrationProvider
                          )),
                          (t.hasResourceCenterContent = !!t.integrationConfig),
                          t.integrationConfig &&
                            "chat" === t.integrationConfig.name &&
                            l(n.integrationName, n.integrationProvider));
                      var a = _.reduce(
                        i,
                        function (t, n) {
                          var i = _.find(e, function (e) {
                            return e.id === n;
                          });
                          return i ? t.concat(i) : t;
                        },
                        []
                      );
                      "AnnouncementsModule" === o &&
                        ((P.attributes.notifications.individualCounts[
                          t.id
                        ] = 0),
                        _.forEach(a, function (e) {
                          O(e) ||
                            P.attributes.notifications.individualCounts[t.id]++,
                            r.push(e.steps[0].fetchContent());
                        }));
                      var s = [
                        "GuideListModule",
                        "OnboardingModule",
                        "AnnouncementsModule",
                      ];
                      if (_.indexOf(s, o) > -1) {
                        var u = _.filter(a, function (e) {
                          return e.shouldBeAddedToResourceCenter();
                        });
                        u.length && (t.hasResourceCenterContent = !0);
                      }
                      t.guidesInModule = a;
                    }),
                    (P.modules = o),
                    q.all(r)
                  );
                }
                function t(e) {
                  var t = _.filter(e, function (e) {
                      return (
                        e &&
                        e.attributes &&
                        e.attributes.resourceCenter &&
                        e.attributes.resourceCenter.isTopLevel
                      );
                    }),
                    n = _.find(t, function (e) {
                      return "staged" === e.state;
                    }),
                    i = n ? "staged" : "public";
                  return _.find(t, function (e) {
                    return (
                      e &&
                      e.attributes &&
                      e.attributes.resourceCenter &&
                      e.attributes.resourceCenter.isTopLevel &&
                      e.state === i
                    );
                  });
                }
                function n(e, t) {
                  return _.filter(t, function (t) {
                    return (
                      t &&
                      get(t, "attributes.resourceCenter.isModule", !1) &&
                      t.state === e.state
                    );
                  });
                }
                function i(e, t, n) {
                  if (!D) {
                    var i = "left 200ms",
                      o = "left";
                    t && ((i = t[0].value), (o = t[1].value));
                    var a = pendo.Sizzle("#pendo-resource-center-container")[0];
                    if (a) {
                      var s = pendo.dom(a).find('[id^="pendo-g-"]')[0];
                      if (s) {
                        var d,
                          u = _.find(pendo.guides, function (t) {
                            return t.id === e;
                          });
                        e !== P.id
                          ? (P.activeModule = u)
                          : ((d = P.activeModule), delete P.activeModule);
                        var l = get(
                          u,
                          "attributes.resourceCenter.integrationProvider"
                        );
                        c(l) && g(l);
                        var p = u.steps[0];
                        p.eventRouter = new EventRouter();
                        var f = p.domJson;
                        f.props["data-pendo-guide-id"] = u.id;
                        var h = BuildingBlockGuides.buildNodeFromJSON(f, p);
                        (p.guideElement = h),
                          p.elements.push(p.guideElement[0]);
                        var v = h[0];
                        -1 === v.id.indexOf("pendo-g-") &&
                          (v = h.find('[id^="pendo-g-"]')[0]),
                          n ||
                            ((v.style.transition = i),
                            (s.style.transition = i),
                            "left" === o
                              ? (v.style.left = a.offsetWidth + "px")
                              : "right" === o &&
                                (v.style.left = -1 * a.offsetWidth + "px")),
                          n &&
                            (pendo.dom(s).remove(),
                            d &&
                              d.steps &&
                              d.steps.length &&
                              (d.steps[0].elements.length = 0)),
                          pendo.dom(v).appendTo(a);
                        var m = pendo
                          .dom(v)
                          .find('[data-pendo-grow-height="true"]')[0];
                        if (
                          (m && BuildingBlockGuides.sizeElement(m, a),
                          BuildingBlockGuides.flexElement(a),
                          BuildingBlockGuides.recalculateGuideHeight(
                            p.containerId
                          ),
                          (v.style.left = "0px"),
                          !n)
                        ) {
                          D = !0;
                          try {
                            "left" === o
                              ? (s.style.left = -1 * a.offsetWidth + "px")
                              : "right" === o &&
                                (s.style.left = a.offsetWidth + "px"),
                              window.setTimeout(function () {
                                pendo.dom(s).remove(),
                                  d &&
                                    d.steps &&
                                    d.steps.length &&
                                    (d.steps[0].elements.length = 0),
                                  (D = !1);
                              }, 200);
                          } catch (b) {
                            throw ((D = !1), b);
                          }
                        }
                        var y =
                          "AnnouncementsModule" ===
                          u.attributes.resourceCenter.moduleId;
                        return y && r(), p.onShown("launcher"), h;
                      }
                    }
                  }
                }
                function o() {
                  window.clearInterval(M), (M = null);
                }
                function r() {
                  M ||
                    (M = window.setInterval(function () {
                      var e = Sizzle("#pendo-resource-center-container");
                      if (!e.length) return o();
                      var t = pendo
                        .dom(e[0])
                        .find('[data-layout="AnnouncementsModule"]');
                      if (!t.length) return o();
                      var n = pendo.dom(t).find('ol[id^="pendo-list"]');
                      if (!n.length) return o();
                      var i = getClientRect(n[0]),
                        r = pendo.dom(n).find("li.pendo-unseen-announcement");
                      if (!r.length) return o();
                      for (
                        var a = t.attr("data-pendo-guide-id"),
                          s = m().attributes.notifications.individualCounts[a],
                          d = i.height / 3,
                          u = getClientRect(r[r.length - 1]),
                          l = u.bottom - 30 < i.top + i.height,
                          c = 0;
                        c < r.length;
                        c++
                      ) {
                        var p = r[c],
                          f = getClientRect(p),
                          g = f.top - i.top > i.height - d;
                        if (g && !l) break;
                        pendo.dom(p).removeClass("pendo-unseen-announcement");
                        var h = pendo
                          .dom(p)
                          .find(".pendo-unread-announcement-mini-bubble");
                        isOldIE(10)
                          ? pendo
                              .dom(p)
                              .find(".pendo-unread-announcement-mini-bubble")
                              .remove()
                          : ((h[0].style.visibility = "hidden"),
                            (h[0].style.opacity = "0"),
                            (h[0].style.transition =
                              "visibility 0s 2s, opacity 2s linear"));
                        var v = pendo
                            .dom(p)
                            .attr("data-pendo-announcement-guide-id"),
                          b = _.find(pendo.guides, function (e) {
                            return e.id === v;
                          });
                        if (!b) break;
                        O(b) || s--,
                          (b.steps[0].seenState = "advanced"),
                          seenGuide(
                            b.id,
                            b.steps[0].id,
                            pendo.get_visitor_id(),
                            "whatsnew",
                            b.language,
                            { last_updated_at: b.steps[0].lastUpdatedAt }
                          ),
                          advancedGuide(
                            b.id,
                            b.steps[0].id,
                            pendo.get_visitor_id(),
                            "advanced",
                            b.language
                          );
                      }
                      k(s, a);
                    }, 500));
                }
                function a(e) {
                  e.hasResourceCenterContent && e.skipResourceCenterHomeView
                    ? BuildingBlockResourceCenter.replaceResourceCenterContent(
                        e.moduleIdToReplaceHomeViewWith,
                        [{ value: "none" }, { value: "left" }]
                      )
                    : e.showEmptyState &&
                      (BuildingBlockResourceCenter.showResourceCenterEmptyState(),
                      _.each(e.controlGuidesInAllModules, function (e) {
                        e.hasGuideBeenControlled() ||
                          e.steps[0].onControlGuide("control");
                      }));
                }
                function s() {
                  var e = pendo.Sizzle("#pendo-resource-center-container");
                  if (e && e.length) {
                    var t = pendo.Sizzle(
                      "#pendo-resource-center-empty-state-container"
                    );
                    t && t.length && pendo.dom(t[0]).css({ display: "block" });
                  }
                }
                function d(e, t) {
                  return ExtensionService.findExtensionByNameAndProvider(e, t);
                }
                function u(e, t, n) {
                  var i = ExtensionService.findExtensionByNameAndProvider(e, t);
                  if (!i)
                    return log(
                      t + " integration has not been loaded into the agent"
                    );
                  var o = pendo.dom(n);
                  if (!o)
                    return log(
                      "could not find target element for " + t + " integration"
                    );
                  var r = i.getFrame();
                  r.appendTo(o), r.css({ display: "block" });
                }
                function l(e, t) {
                  var n = ExtensionService.findExtensionByNameAndProvider(e, t);
                  if (!n)
                    return log(
                      t + " integration has not been loaded into the agent"
                    );
                  if (c(t)) return p(t, n);
                  var i = n.getFrame();
                  isInDocument(i[0]) || i.appendTo(getGuideAttachPoint()),
                    i.css({ display: "none" });
                }
                function c(e) {
                  if (!e) return !1;
                  var t = ["zendesk-chat"];
                  return t.indexOf(e) >= 0;
                }
                function p(e, t) {
                  if (e)
                    switch (((P.hasNativeIntegrationEnabled = !0), e)) {
                      case "zendesk-chat":
                        f(t);
                    }
                }
                function f(e) {
                  var t = get(e, "data.options.labels.position");
                  t && (t = t.split("-")),
                    window.zE &&
                      (window.zE("webWidget", "hide"),
                      window.zE("webWidget", "updateSettings", {
                        webWidget: {
                          helpCenter: { suppress: !0 },
                          navigation: { popoutButton: { enabled: !1 } },
                          position: {
                            vertical: t ? t[0] : "bottom",
                            horizontal: t ? t[1] : "right",
                          },
                        },
                      }),
                      window.zE("webWidget:on", "close", function () {
                        window.zE("webWidget", "hide"),
                          B(P.activeModule),
                          delete P.activeModule,
                          (P.continueToNativeModule = !1);
                      }),
                      window.zE(
                        "webWidget:on",
                        "chat:unreadMessages",
                        function (e) {
                          k(e, "chat");
                        }
                      ));
                }
                function g(e, t) {
                  if (e) {
                    var n = getMetadata();
                    P.isShown() && P.hide();
                    var i = pendo.badgesShown[P.id];
                    switch ((i && i.hide(), e)) {
                      case "zendesk-chat":
                        window.$zopim.livechat.window.show(),
                          n &&
                            n.visitor &&
                            n.visitor.email &&
                            window.zE("webWidget", "prefill", {
                              email: { value: n.visitor.email },
                            });
                    }
                    k(0, "chat"),
                      !P.activeModule &&
                        t &&
                        ((P.activeModule = t), t.steps[0].onShown("launcher"));
                  }
                }
                function h(e) {
                  if (e && !e.isTopLevel) {
                    var t = get(
                      e,
                      "attributes.resourceCenter.integrationProvider"
                    );
                    g(t),
                      P.activeModule || (P.activeModule = e),
                      e.steps[0].onShown("launcher");
                  }
                }
                function v(e) {
                  if (e.step) {
                    var t = e.step.getGuide();
                    if (t.attributes && t.attributes.resourceCenter) {
                      var n = pendo.dom("#pendo-resource-center-container");
                      if (n && n.length) {
                        var i = n.find(
                          'iframe[id^="_pendo-launcher-ext-frame-chat"]'
                        );
                        i &&
                          i.length &&
                          i.each(function (e) {
                            var t = pendo.dom(e);
                            t.css({ display: "none" }),
                              t.appendTo(getGuideAttachPoint());
                          });
                      }
                    }
                  }
                }
                function m() {
                  return P;
                }
                function b(e) {
                  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                  return t
                    ? {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16),
                      }
                    : null;
                }
                function y() {
                  var e = m(),
                    t = get(e, "attributes.notifications");
                  if (t) {
                    var n = w(t.individualCounts);
                    if (0 >= n) return G(), void (t.totalUnseenCount = n);
                    S();
                    var i = n !== t.totalUnseenCount;
                    if (i) {
                      if ("badge" === e.launchMethod) {
                        var o = pendo.dom(
                          "._pendo-resource-center-badge-container"
                        );
                        if (!o.length) return;
                        C(o[0], e.attributes.notificationBubble, n);
                      }
                      if (
                        "dom" === e.launchMethod &&
                        e.attributes &&
                        e.attributes.activation &&
                        e.attributes.activation.selector
                      ) {
                        var r = pendo.Sizzle(e.attributes.activation.selector);
                        if (!r.length) return;
                        I(r[0], e.attributes.notificationBubble, n);
                      }
                      t.totalUnseenCount = n;
                    }
                  }
                }
                function w(e) {
                  return _.reduce(
                    e,
                    function (e, t) {
                      return e + t;
                    },
                    0
                  );
                }
                function S() {
                  var e = m();
                  if (e) {
                    var t = get(e, "attributes.notifications");
                    if (t) {
                      var n = Sizzle('[data-layout="HomeViewModule"]');
                      if (n.length) {
                        var i = pendo
                          .dom(n[0])
                          .find("._pendo-resource-center-home-list");
                        i.length &&
                          _.each(t.individualCounts, function (e, t) {
                            E(e, t);
                          });
                      }
                    }
                  }
                }
                function E(e, t) {
                  var n = Sizzle("#pendo-resource-center-container");
                  if (n.length) {
                    var i = pendo
                      .dom(n[0])
                      .find('[data-pendo-notification-id="' + t + '"]');
                    if (i.length) {
                      var o = pendo.dom(i[0]).find("._pendo-home-view-bubble"),
                        r = pendo.dom(o[0].children[0]),
                        a = e !== parseInt(r.text(), 10);
                      a &&
                        (e > 0
                          ? (r.text(e),
                            pendo
                              .dom(o[0])
                              .css({ display: "block", "margin-right": "0" }))
                          : pendo.dom(o[0]).css({ display: "none" }));
                    }
                  }
                }
                function C(e, t, n) {
                  var i = get(t, "position", "top-left"),
                    o = getComputedStyle_safe(e),
                    r = parseInt(o.width, 10) || 56,
                    a = r / 2,
                    s = a / Math.sqrt(2),
                    d = Math.round(a - s) - 10,
                    u = d - 10,
                    l = Math.round(2 * s),
                    c = {
                      "top-left": {
                        top: d + "px",
                        left: u + "px",
                        padding: "0px 10px",
                        "margin-left": "0px",
                        "margin-top": "0px",
                      },
                      "top-right": {
                        top: d + "px",
                        left: u + l + 10 + "px",
                        padding: "0px 10px",
                        "margin-left": "0px",
                        "margin-top": "0px",
                      },
                      "bottom-left": {
                        top: d + l,
                        left: u + "px",
                        padding: "0px 10px",
                        "margin-left": "0px",
                        "margin-top": "0px",
                      },
                      "bottom-right": {
                        top: d + l,
                        left: u + l + 10 + "px",
                        padding: "0px 10px",
                        "margin-left": "0px",
                        "margin-top": "0px",
                      },
                    },
                    p = c[i];
                  T(e, t, n, p);
                }
                function I(e, t, n) {
                  var i = 0,
                    o = 0,
                    r = get(e, "offsetParent"),
                    a = getOffsetPosition(e),
                    s = getComputedStyle_safe(e),
                    d = "fixed" === s.position,
                    u = getComputedStyle_safe(r);
                  if (r && "relative" === u.position) {
                    var l = getOffsetPosition(r);
                    (i = a.top - l.top - parseInt(s.top, 10)),
                      (o = a.left - l.left - parseInt(s.left, 10));
                  } else
                    (!s.position || "static" === s.position || d) &&
                      ((i = a.top), (o = a.left));
                  var c = {
                      width: "28px",
                      top: a.top > 14 ? i - 14 + "px" : 0,
                      left: a.left > 14 ? o - 14 + "px" : 0,
                      position: d ? "fixed" : "absolute",
                    },
                    p = {
                      width: "28px",
                      "font-size": "16px",
                      "text-align": "center",
                      position: "absolute",
                      right: "0px",
                    };
                  T(e, t, n, c, p);
                }
                function T(e, t, n, i, o) {
                  if (F) return void F.unseenCountEle.text(n);
                  var r = document.getElementsByClassName(
                    "pendo-resource-center-badge-notification-bubble"
                  );
                  if (r.length) {
                    var a = r[0].getElementsByClassName(
                      "pendo-notification-bubble-unread-count"
                    );
                    a[0].textContent = n;
                  } else (F = A(t, n, i, o)), x(F, e);
                }
                function A(e, t, n, i) {
                  var o = {
                      position: "absolute",
                      "border-radius": "20px",
                      "line-height": "0px",
                      height: "26px",
                      "box-sizing": "content-box",
                      "background-color": e["background-color"],
                    },
                    r = {
                      "font-weight": e["font-weight"],
                      "font-family": e["font-family"],
                      height: "100%",
                      display: "inline-block",
                      "line-height": "26px",
                      "vertical-align": "middle",
                      color: e.color,
                    };
                  t = t || 0;
                  var a = dom(
                      '<div class="pendo-resource-center-badge-notification-bubble"></div>'
                    ),
                    s = dom(
                      '<div class="pendo-notification-bubble-unread-count"></div>'
                    ),
                    d = _.extend(o, n),
                    u = _.extend(r, i);
                  a.css(d), s.css(u);
                  var l = dom(
                    '<style id="pendo-resource-center-bubble-animation"></style>'
                  );
                  if (!isOldIE(10)) {
                    var c = b(e["background-color"]),
                      p = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")",
                      f =
                        "@keyframes pulse { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(1.6) } }",
                      g =
                        '.pendo-resource-center-badge-notification-bubble::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: ' +
                        p +
                        "; border-radius: 100%; z-index: -1; animation: pulse 2s infinite; will-change: transform; }",
                      h = f + " " + g;
                    l.styleSheet
                      ? (l.styleSheet.cssText = h)
                      : (l[0].innerHTML = h);
                  }
                  return (
                    s.text(t), { bubbleEle: a, unseenCountEle: s, styleEle: l }
                  );
                }
                function x(e, t) {
                  e.styleEle.appendTo(t),
                    e.unseenCountEle.appendTo(e.bubbleEle),
                    e.bubbleEle.appendTo(t);
                }
                function G() {
                  var e = F
                      ? F.bubbleEle
                      : Sizzle(
                          ".pendo-resource-center-badge-notification-bubble"
                        ),
                    t = F
                      ? F.styleEle
                      : Sizzle("#pendo-resource-center-bubble-animation");
                  e &&
                    _.each(e, function (t, n) {
                      if (e[n]) {
                        var i = e[n];
                        i && i.parentNode && i.parentNode.removeChild(i);
                      }
                    }),
                    t &&
                      _.each(t, function (e, n) {
                        if (t[n]) {
                          var i = t[n];
                          i && i.parentNode && i.parentNode.removeChild(i);
                        }
                      }),
                    (F = null);
                }
                function k(e, t) {
                  var n = m();
                  if (n) {
                    var i = get(n, "attributes.notifications");
                    i &&
                      i.individualCounts[t] !== e &&
                      ((i.individualCounts[t] = e),
                      BuildingBlockResourceCenter.updateNotificationBubbles());
                  }
                }
                function O(e) {
                  return _.isFunction(e.hasBeenSeen) && e.hasBeenSeen()
                    ? !0
                    : "active" === e.steps[0].seenState
                    ? !0
                    : !1;
                }
                function L() {
                  var e = pendo.Sizzle("#pendo-resource-center-container")[0];
                  if (e) {
                    var t = pendo.dom(e).find('[id^="pendo-g-"]');
                    if (t) {
                      var n = t.attr("data-pendo-guide-id"),
                        i = _.find(pendo.guides, function (e) {
                          return e.id === n;
                        }),
                        o = get(i, "attributes.resourceCenter.isModule", !1);
                      if (o) return i;
                    }
                  }
                }
                function B(e) {
                  var t = get(e, "attributes.resourceCenter.isModule", !1)
                    ? e
                    : BuildingBlockResourceCenter.findShownResourceCenterModule();
                  if (t) {
                    var n = _.first(t.steps);
                    pendo.onGuideDismissed(n);
                  }
                  var i = get(e, "attributes.resourceCenter.isTopLevel", !1)
                      ? e
                      : BuildingBlockResourceCenter.findResourceCenterHomeView(
                          pendo.guides
                        ),
                    o = i.steps[0];
                  return pendo.onGuideDismissed(o);
                }
                function N() {
                  var e = pendo.Sizzle("#pendo-resource-center-container")[0];
                  if (e) {
                    var t = pendo.Sizzle(
                      "._pendo-resource-center-badge-container"
                    )[0];
                    if (t) {
                      var n = "auto" !== t.style.bottom,
                        i = R(e.style.left, e.style.right);
                      if (n) {
                        e.style.top = "auto";
                        var o = e.getBoundingClientRect(),
                          r = o.top < parseInt(i, 10);
                        r && (e.style.top = i);
                      }
                    }
                  }
                }
                function R(e, t) {
                  return "auto" !== e ? e : "auto" !== t ? t : "10px";
                }
                return {
                  initializeResourceCenter: e,
                  findResourceCenterHomeView: t,
                  findResourceCenterModules: n,
                  replaceResourceCenterContent: i,
                  showHomeViewOrEmptyState: a,
                  showResourceCenterEmptyState: s,
                  launchIntegrationByNameAndProvider: u,
                  appendIntegrationToBodyByNameAndProvider: l,
                  attemptToPreserveIntegrationIframes: v,
                  getResourceCenter: m,
                  addNotificationBubbleToResourceCenterBadge: C,
                  addNotificationBubbleToTargetElement: I,
                  updateNotificationBubbles: y,
                  removeNotificationBubble: G,
                  updateNotificationBubbleCount: k,
                  updateNotificationBubbleOnHomeView: E,
                  updateOrCreateNotificationBubble: T,
                  hexToRgb: b,
                  doesIntegrationExist: d,
                  calculateTotalNotificationCount: w,
                  updateNotificationBubblesOnHomeView: S,
                  createNotification: A,
                  appendNotificationBubble: x,
                  hasAnnouncementBeenSeen: O,
                  clearAnnouncementUnseenInterval: o,
                  createAnnouncementUnseenInterval: r,
                  findShownResourceCenterModule: L,
                  dismissResourceCenter: B,
                  repositionResourceCenter: N,
                  setNativeIntegrationDefaults: p,
                  renderNativeIntegration: g,
                  isSupportedNativeIntegration: c,
                  handleNativeIntegrationContinuation: h,
                };
                var P, M, D, F;
              })(),
              BuildingBlockSvgs = (function () {
                function e(e, n) {
                  switch (e) {
                    case "onboardingProgressCircle":
                      return t(n);
                  }
                }
                function t(e) {
                  if (isOldIE(9)) return o(e);
                  var t = e.svgAttributes,
                    r = t.fillCircle.percentComplete || 0,
                    a = r >= 100;
                  return a ? n(t) : i(t);
                }
                function n(e) {
                  var t = e.fillCircle.stroke,
                    n =
                      '<svg xmlns="http://www.w3.org/2000/svg" class="pendo-progress-circle-fill" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
                    i = pendo.dom(n);
                  return i[0].setAttributeNS(null, "stroke", t), i;
                }
                function i(e) {
                  var t = e.fillCircle.stroke,
                    n = e.backgroundCircle.stroke,
                    i = e.fillCircle.percentComplete || 0,
                    o = 100 / (2 * Math.PI),
                    r =
                      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid"><circle class="pendo-progress-circle-background" cx="20" cy="20" r="' +
                      o +
                      '" stroke-width="6px" stroke-linecap="round" fill="none"></circle><circle class="pendo-progress-circle-fill" cx="20" cy="20" r="' +
                      o +
                      '" stroke-width="6px" stroke-linecap="round" transform="rotate(-90 20 20)" fill="none"></circle></svg>',
                    a = pendo.dom(r),
                    s = a.find(".pendo-progress-circle-fill")[0],
                    d = a.find(".pendo-progress-circle-background")[0];
                  return (
                    d.setAttributeNS(null, "stroke", n),
                    0 >= i
                      ? s.setAttributeNS(null, "stroke-width", "0px")
                      : (s.setAttributeNS(null, "stroke", t),
                        s.setAttributeNS(
                          null,
                          "stroke-dasharray",
                          i + ", 100"
                        )),
                    a
                  );
                }
                function o(e) {
                  var t = e.svgAttributes,
                    n = t.fillCircle.stroke,
                    i = t.backgroundCircle.stroke,
                    o = t.fillCircle.percentComplete || 0,
                    r = o >= 100,
                    a =
                      '<div class="pendo-progress-circle-ie"><div class="pendo-progress-circle-fill"></div></div>',
                    s = pendo.dom(a),
                    d = s.find(".pendo-progress-circle-fill");
                  return (
                    r
                      ? d.css({
                          border: "3px solid " + n,
                          height: "10px",
                          width: "10px",
                        })
                      : d.css({
                          border: "3px solid " + i,
                          height: "10px",
                          width: "10px",
                        }),
                    s
                  );
                }
                return { buildSvgNode: e, createProgressCircleSvg: t };
              })(),
              BuildingBlockWatermark = (function () {
                function e(e) {
                  var t = _.filter(e, function (e) {
                    return e && e.attributes && e.attributes.isWatermark;
                  });
                  BuildingBlockWatermark.watermarkGuides = t;
                  var n = _.map(t, function (e) {
                    return e.fetchContent();
                  });
                  return q.all(n);
                }
                function t(e) {
                  return _.find(
                    BuildingBlockWatermark.watermarkGuides,
                    function (t) {
                      return e === t.targetAccount;
                    }
                  );
                }
                function n(e, n) {
                  e = e || {};
                  var i = t(e.targetAccount);
                  if (i && i.steps) {
                    var o = i.steps[0];
                    if (o && o.domJson) {
                      var r = o.domJson,
                        a = n(r, o);
                      return (
                        a.css({
                          position: "absolute",
                          left: "auto",
                          top: e.isBottomAligned ? "auto" : "100%",
                          bottom: e.isBottomAligned ? "100%" : "auto",
                          right: "0",
                        }),
                        a
                      );
                    }
                  }
                }
                return { initializeWatermark: e, buildWatermark: n };
              })(),
              P2AutoLaunch = (function () {
                function e() {
                  _.isFunction(document.addEventListener) &&
                    document.addEventListener(
                      "keyup",
                      function (e) {
                        e.shiftKey &&
                          e.altKey &&
                          "Digit7" === e.code &&
                          c("", !0),
                          e.shiftKey &&
                            e.altKey &&
                            "Digit8" === e.code &&
                            c("", !1, !0);
                      },
                      !1
                    );
                }
                function t(e, t) {
                  var r = {
                      "background-color": b.WHITE,
                      height: u(y.MODAL_HEIGHT),
                      "min-height": u(y.MODAL_HEIGHT),
                      width: u(y.MODAL_WIDTH),
                      position: "fixed",
                      top: u(y.MODAL_TOP_OFFSET),
                      left: "50%",
                      "margin-left": u(-y.MODAL_WIDTH / 2),
                      "border-radius": u(4),
                      "box-shadow": "0px 13px 28px rgba(0, 0, 0, 0.17)",
                      overflow: "hidden",
                      "z-index": "300000",
                      "box-sizing": "border-box",
                    },
                    a = d("div", m.container, r);
                  a.appendChild(s()),
                    a.appendChild(n(t)),
                    a.appendChild(i()),
                    a.appendChild(o(e)),
                    document.body.appendChild(a);
                }
                function n(e) {
                  var t = d("div", m.header, {
                      "background-color": b.GRAY_PRIMARY,
                      height: u(y.HEADER_HEIGHT),
                      "min-height": u(y.HEADER_HEIGHT),
                      width: "100%",
                      padding: u(10) + " " + u(20),
                      display: "flex",
                      "align-items": "center",
                      "box-sizing": "border-box",
                    }),
                    n = d("div", m.logoContainer, {
                      height: u(38),
                      width: u(44),
                      "background-color": b.PENDO_PINK,
                      padding: u(8),
                      "border-radius": u(3),
                      "box-sizing": "border-box",
                    });
                  (n.innerHTML = w), t.appendChild(n);
                  var i = d("div", m.title, {
                    width: "100%",
                    display: "flex",
                    "align-items": "center",
                    "font-family": E.PRIMARY_FONT,
                    "font-size": u(18),
                    color: b.WHITE,
                    "margin-left": u(10),
                    "box-sizing": "border-box",
                  });
                  return (
                    (i.innerText = e ? "VIA Designer" : "Pendo Designer"),
                    t.appendChild(i),
                    t
                  );
                }
                function i() {
                  var e = d("div", m.body, {
                    height: y.BODY_HEIGHT,
                    "min-height": y.BODY_HEIGHT,
                    width: "100%",
                    display: "flex",
                    padding: u(32) + " " + u(20),
                    "font-family": E.PRIMARY_FONT,
                    "font-size": u(14),
                    "box-sizing": "border-box",
                  });
                  return (
                    (e.innerText =
                      "Thanks for letting us know you're here. We're ready to try this again. Launch Designer below to begin."),
                    e
                  );
                }
                function o(e) {
                  var t = d("div", m.footer, {
                      "align-items": "center",
                      "border-top": "1px solid" + b.GRAY_LIGHTER_6,
                      display: "flex",
                      height: u(y.FOOTER_HEIGHT),
                      "justify-content": "flex-end",
                      "min-height": u(y.FOOTER_HEIGHT),
                      padding: u(10),
                      width: "100%",
                      "box-sizing": "border-box",
                    }),
                    n = d("button", m.closeButton, {
                      "border-radius": u(3),
                      border: "none",
                      height: u(y.BUTTON_HEIGHT),
                      "padding-right": u(10),
                      "padding-left": u(10),
                      "font-family": E.PRIMARY_FONT,
                      "font-size": u(14),
                      display: "flex",
                      "line-height": "120%",
                      "margin-right": u(10),
                      "min-width": "90px",
                      "justify-content": "center",
                      "box-sizing": "border-box",
                    });
                  (n.innerHTML = "Close"),
                    (n.onclick = function () {
                      f(m.container), f(m.commIframeId);
                    });
                  var i = d("button", m.launchButton, {
                    "background-color": b.TEAL_PRIMARY,
                    "border-radius": u(3),
                    color: b.WHITE,
                    border: "none",
                    height: u(y.BUTTON_HEIGHT),
                    "padding-right": u(10),
                    "padding-left": u(10),
                    "font-family": E.PRIMARY_FONT,
                    "font-size": u(14),
                    display: "flex",
                    "line-height": "120%",
                    "min-width": "90px",
                    "justify-content": "center",
                    "box-sizing": "border-box",
                  });
                  return (
                    (i.innerHTML = "Launch Designer"),
                    (i.onclick = function () {
                      v(e);
                    }),
                    t.appendChild(n),
                    t.appendChild(i),
                    t
                  );
                }
                function r(e) {
                  return _.reduce(
                    _.pairs(e),
                    function (e, t) {
                      var n = t[0],
                        i = t[1];
                      return e + n + ":" + i + ";";
                    },
                    ""
                  );
                }
                function a(e) {
                  return _.reduce(
                    _.pairs(e),
                    function (e, t) {
                      var n = t[0],
                        i = t[1];
                      return e + n + "{" + r(i) + "} ";
                    },
                    ""
                  );
                }
                function s() {
                  var e = document.createElement("style");
                  e.setAttribute("id", m.style), (e.type = "text/css");
                  var t = document.createTextNode(a(S));
                  return e.appendChild(t), e;
                }
                function d(e, t, n) {
                  var i = document.createElement(e);
                  return i.setAttribute("id", t), _.extend(i.style, n), i;
                }
                function u(e) {
                  return e + "px";
                }
                function l(e) {
                  return "#" + e;
                }
                function c(e, n, i) {
                  if (!pendo.designerLaunched) {
                    var o,
                      r,
                      a = pendo._.once(function (e) {
                        n || !i ? v(e) : t(e, n), g();
                      });
                    addSafeWindowMessageListener(function (e) {
                      if (
                        "pendo-designer-launch-modal" === e.data.destination
                      ) {
                        if ((clearInterval(o), e.data.viaconfirmed))
                          return void clearInterval(r);
                        if (!e.data.token) return void g();
                        a(e.data.token);
                        var t = JSON.parse(e.data.token);
                        pendo._.contains(t.host, "via") &&
                          !t.visitorId &&
                          (r ||
                            (r = setInterval(function () {
                              document.getElementById(m.commIframeId) && h();
                            }, 100)));
                      }
                    }),
                      pendo.designerv2.addCommunicationIframe({
                        lookasideDir: e,
                        defaultBucket: "in-app-designer",
                      }),
                      h(),
                      (o = window.setInterval(h, 50));
                  }
                }
                function p() {
                  if (!pendo.designerLaunched) {
                    var e = pendo._.once(function (e) {
                      v(e, !0);
                    });
                    addSafeWindowMessageListener(function (t) {
                      "pendo-designer-launch-modal" === t.data.destination &&
                        t.data.token &&
                        e(t.data.token);
                    });
                  }
                }
                function f(e) {
                  document.getElementById(e) &&
                    document.getElementById(e).remove();
                }
                function g() {
                  var e = document.querySelector(
                    "#" + m.commIframeId + '[src*="pendo"]'
                  );
                  e && e.remove();
                }
                function h() {
                  document
                    .getElementById(m.commIframeId)
                    .contentWindow.postMessage(
                      {
                        destination: "pendo-designer-ls",
                        source: "pendo-designer-launch-modal",
                        visitorId: pendo.visitorId,
                      },
                      "*"
                    );
                }
                function v(e, t) {
                  var n = {},
                    i = JSON.parse(e);
                  (n.target = i.target || "latest"),
                    i.host && (n.host = i.host),
                    i.lookaside && (n.lookaside = i.lookaside),
                    t && (n.selectionOnly = t),
                    f(m.container),
                    pendo.designerv2.launchInAppDesigner(n);
                }
                var m = {
                    body: "pendo-launch-modal-body",
                    closeButton: "pendo-launch-modal-close-button",
                    container: "pendo-launch-modal",
                    footer: "pendo-launch-modal-footer",
                    header: "pendo-launch-modal-header",
                    launchButton: "pendo-launch-modal-launch-button",
                    title: "pendo-launch-modal-title",
                    logoContainer: "pendo-launch-modal-logo-container",
                    style: "pendo-launch-modal-style",
                    commIframeId: "pendo-designer-communication-iframe",
                  },
                  b = {
                    GRAY_LIGHTER_6: "#EAECF1",
                    GRAY_PRIMARY: "#2A2C35",
                    PENDO_PINK: "#FF4876",
                    TEAL_DARKER: "#036463",
                    TEAL_PRIMARY: "#008180",
                    WHITE: "#FFFFFF",
                  },
                  y = {
                    BUTTON_HEIGHT: 35,
                    HEADER_HEIGHT: 60,
                    MODAL_HEIGHT: 235,
                    MODAL_TOP_OFFSET: 150,
                    MODAL_WIDTH: 370,
                  };
                (y.FOOTER_HEIGHT = 1.25 * y.HEADER_HEIGHT),
                  (y.BODY_HEIGHT =
                    "calc(100% - " +
                    u(y.HEADER_HEIGHT) +
                    " - " +
                    u(y.FOOTER_HEIGHT) +
                    ")");
                var w =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.12 164.12"><defs><style>.cls-1{fill:#fff;}</style></defs><title>chevron</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="82.06 0 0 82.06 82.06 82.06 82.06 164.13 164.13 82.06 164.13 0 82.06 0"/></g></g></svg>',
                  S = {};
                (S[l(m.closeButton) + ":hover"] = {
                  "background-color": b.GRAY_LIGHTER_6,
                }),
                  (S[l(m.launchButton) + ":hover"] = {
                    "background-color": b.TEAL_DARKER + " !important",
                  });
                var E = { PRIMARY_FONT: "Helvetica Neue" };
                return {
                  listen: e,
                  launchOnLocalStorageToken: v,
                  ids: m,
                  removeElement: f,
                  attemptToLaunch: c,
                  loadPluginJs: p,
                };
              })(),
              DesignerV2 = (function () {
                function e(e) {
                  return e ? isTrustedOrigin2(e) : !1;
                }
                function t(t) {
                  if (!h()) {
                    var o = /pendo-designer=([A-Za-z0-9-]+)/,
                      r = /lookaside=[A-Za-z0-9-]+/;
                    if (o.test(t)) {
                      var a = o.exec(t);
                      if (a) {
                        var s = a[0],
                          d = r.exec(t),
                          u = d ? d[0] : "",
                          l = n(a[1]),
                          c = queryStringToObject(s + "&" + u),
                          p = e(l.host) ? l.host : null;
                        return c.hasOwnProperty("pendo-designer")
                          ? (window.localStorage.removeItem(
                              "pendo-navigation-state"
                            ),
                            window.localStorage.removeItem(
                              "pendo-designer-mode"
                            ),
                            i({
                              target: l.target || "latest",
                              lookaside: c.lookaside,
                              host: p,
                              preloader: !1,
                            }),
                            !0)
                          : void 0;
                      }
                    }
                  }
                }
                function n(e) {
                  try {
                    return JSON.parse(atob(decodeURIComponent(e))) || {};
                  } catch (t) {
                    return {};
                  }
                }
                function i(t) {
                  if (!h()) {
                    var n = !1;
                    try {
                      n = !!window.top.pendo;
                    } catch (i) {}
                    if (
                      detectMaster() &&
                      n &&
                      !t.allowChildFrame &&
                      !t.selectionOnly
                    )
                      return void pendo.log(
                        "skipping designer launch from a child frame. pass `allowChildFrame: true` to override"
                      );
                    (pendo.designerLaunchTime = new Date().getTime()),
                      t || (t = {}),
                      t.lookaside ||
                        (t.lookaside =
                          pendoLocalStorage.getItem(
                            "pendo-designer-lookaside"
                          ) || "");
                    var o = t.host || b,
                      r = e(o),
                      a = r ? o : SERVER;
                    r || log("Invalid host, falling back to " + SERVER);
                    var s = t.gcsBucket || "in-app-designer",
                      d = t.lookaside || t.target || "latest",
                      u = t.preloader ? "preloader.js" : "plugin.js",
                      l = t.preloader ? "preloader-shims" : "designer-shims",
                      c = a + "/" + s + "/" + d + "/" + u;
                    pendo.designerv2.hostConfig = {
                      gcsBucket: s,
                      baseFolder: d,
                      lookaside: t.lookaside,
                      uniqueWindowId: t.uniqueWindowId,
                      host: a,
                    };
                    var f = {};
                    t.selectionOnly && (f["selection-only"] = !0),
                      p(l, c, f),
                      (pendo.designerLaunched = !0);
                  }
                }
                function o() {
                  var e =
                      "@keyframes pendoExtensionSlideIn{from{transform:translate3d(-300px,0,0)}to{transform:translate3d(0,0,0);}}",
                    t =
                      "#pendo-draggable-handle{z-index:11;line-height: 15px;text-align:center;font-size:20px;letter-spacing:1.5px;position:absolute;width:100%;height:65px;font-size:16px;background-color:transparent;color:#ABE7DB;user-select:none;cursor: move;cursor: grab;cursor: -moz-grab;cursor: -webkit-grab;}#pendo-draggable-handle:active{cursor: grabbing;cursor: -moz-grabbing;cursor: -webkit-grabbing !important;}#pendo-draggable-handle.hidden{display:none;}#pendo-draggable-handle:hover{color:#2EA2A0;}",
                    n =
                      "#pendo-mousemove-cover{position:absolute;height:100%;width:100%;top:0;left:0;z-index:9999999999;display:none;}",
                    i =
                      "#pendo-designer-container{animation-duration:375ms;animation-name:pendoExtensionSlideIn;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1); box-shadow: 0px 2px 10px rgba(0,0,0,0.15);height:100vh;width:400px;position:fixed;top:0;left:0;overflow:hidden;border-radius:3px;z-index:1000000;}",
                    o =
                      "#pendo-designer-container.fullscreen{width:100%;opacity:0.98;}",
                    r = "#pendo-designer-container.closed{left:-400px;}",
                    a =
                      "#pendo-designer-iframe{background:#3a3c45;border:0px;height:100%;left:0;z-index:10;top:0;width:100%;}";
                  return e + t + i + n + o + r + a;
                }
                function r(e) {
                  e || (e = {});
                  var t = e.lookaside || "latest",
                    n = e.gcsBucket || "designer";
                  c("designer-styles", o(t));
                  var i = b + "/" + n + "/" + t + "/plugin.js";
                  if ((p("designer-shims", i), pendo.DESIGNER_VERSION))
                    return void s(t, e);
                  var r = window.setInterval(function () {
                    pendo.DESIGNER_VERSION && (s(t, e), clearInterval(r));
                  }, 100);
                }
                function a(e) {
                  e || (e = {});
                  var t = e.lookaside || e.lookasideDir || "latest",
                    n = e.gcsBucket || e.defaultBucket || "designer",
                    i = new Date().getTime();
                  pendo.designerv2.windowCommunicationId = i;
                  var o = "pendo-designer-communication-iframe";
                  if (!document.getElementById(o)) {
                    var r = "pendo-designer-communication-embedded",
                      a = "communication.html";
                    (r += "__" + i),
                      e &&
                        e.lookaside &&
                        ((r += "__" + e.lookaside), (a = "lookaside-" + a));
                    var s = b + "/" + n + "/" + t + "/" + a,
                      d = u(o, s, "border-width:0;height:0;width:0;");
                    return (
                      d.setAttribute("name", r), document.body.appendChild(d), d
                    );
                  }
                  return document.getElementById(o);
                }
                function s(e, t) {
                  f(), d(e, t);
                }
                function d(e, t) {
                  if (!document.getElementById("pendo-designer-container")) {
                    var n = "pendo-designer-embedded",
                      i = "designer.html",
                      o = "designer";
                    (n += "__" + pendo.designerv2.windowCommunicationId),
                      t &&
                        t.lookaside &&
                        ((n += "__" + t.lookaside), (i = "lookaside.html")),
                      t && t.gcsBucket && (o = t.gcsBucket);
                    var r = b + "/" + o + "/" + e + "/" + i,
                      a = u("pendo-designer-iframe", r);
                    a.setAttribute("name", n);
                    var s = l(a);
                    document.body.appendChild(s);
                  }
                }
                function u(e, t, n) {
                  var i = document.createElement("iframe");
                  return (
                    i.setAttribute("id", e),
                    n && setStyle(i, n),
                    i.setAttribute(
                      "sandbox",
                      "allow-scripts allow-same-origin allow-top-navigation allow-forms allow-pointer-lock allow-popups"
                    ),
                    (i.src = t),
                    i
                  );
                }
                function l(e) {
                  var t = document.createElement("div");
                  return (
                    t.setAttribute("id", "pendo-designer-container"),
                    t.appendChild(e),
                    t
                  );
                }
                function c(e, t) {
                  if (!document.getElementById(e)) {
                    var n = document.createElement("style");
                    n.setAttribute("id", e), (n.type = "text/css");
                    var i = document.createTextNode(t);
                    n.appendChild(i),
                      document.getElementsByTagName("head")[0].appendChild(n);
                  }
                }
                function p(e, t, n) {
                  if (!document.getElementById(e)) {
                    var i = document.createElement("script");
                    i.setAttribute("charset", "utf-8"),
                      i.setAttribute("id", e),
                      (i.src = t),
                      n &&
                        _.forEach(n, function (e, t) {
                          i.setAttribute(t, e);
                        }),
                      document.body.appendChild(i);
                  }
                }
                function f() {
                  window.postMessage(
                    {
                      type: "connect",
                      source: "pendo-designer-content-script",
                      destination: "pendo-designer-agent",
                    },
                    "*"
                  );
                }
                function g(e) {
                  var t = document.getElementById(
                    "pendo-designer-communication-iframe"
                  );
                  t && t.contentWindow.postMessage(e.data, "*");
                }
                function h() {
                  return /^pendo/.test(window.name);
                }
                function v() {
                  _.isFunction(window.addEventListener) &&
                    detectMaster() &&
                    window.addEventListener("message", m);
                }
                function m(e) {
                  if (e && e.data) {
                    var t = e.data.destination;
                    if (t && "pendo-designer-agent" === t) {
                      var n = e.data.type;
                      if (n && "addSelectionCode" === n) {
                        var o = e.data.options;
                        o &&
                          ((o.selectionOnly = !0),
                          i(o),
                          window.removeEventListener("message", m));
                      }
                    }
                  }
                }
                var b = SERVER;
                return (
                  "local" === DESIGNER_ENV &&
                    (b = "https://local.pendo.io:8080"),
                  v(),
                  {
                    launchDesigner: r,
                    launchInAppDesigner: i,
                    launchOnToken: t,
                    sendMessageToLocalStorage: g,
                    isValidDesignerHost: e,
                    launchSelectionModeFromMessage: m,
                    addCommunicationIframe: a,
                    addStylesToPage: c,
                  }
                );
              })();
            (pendo.designerv2 = DesignerV2),
              (pendo.P2AutoLaunch = P2AutoLaunch),
              (pendo.BuildingBlocks = {
                BuildingBlockGuides: BuildingBlockGuides,
                BuildingBlockResourceCenter: BuildingBlockResourceCenter,
                BuildingBlockTemplates: BuildingBlockTemplates,
                BuildingBlockTooltips: BuildingBlockTooltips,
                BuildingBlockSvgs: BuildingBlockSvgs,
              }),
              (pendo.getVersion = getVersion),
              (pendo.isReady = isReady),
              (pendo.pageLoad = pageLoad),
              (pendo.getVisitorId = pendo.get_visitor_id),
              (pendo.getAccountId = pendo.get_account_id),
              (pendo.flushNow = function () {
                return flushNow(!0);
              }),
              (pendo.initGuides = initGuides),
              (pendo.loadGuides = loadGuides),
              (pendo.findGuideByName = findGuideByName),
              (pendo.hideGuides = hideGuides),
              (pendo.onGuideDismissed = onGuideDismissed),
              (pendo.goToStep = goToStep),
              (pendo.onGuideAdvanced = onGuideAdvanced),
              (pendo.onGuidePrevious = onGuidePrevious),
              (pendo.onGuideSnoozed = onGuideSnoozed),
              (pendo.startGuides = manuallyStartGuides),
              (pendo.stopGuides = stopGuides),
              (pendo.toggleLauncher = toggleLauncher),
              (pendo.showLauncher = expandLauncherList),
              (pendo.hideLauncher = collapseLauncherList),
              (pendo.removeLauncher = removeLauncher),
              (pendo.defaultCssUrl = getDefaultCssUrl()),
              (pendo.getActiveGuides = getActiveGuides),
              (pendo.getActiveGuide = getActiveGuide),
              (pendo.guideSeenTimeoutLength = getGuideSeenTimeoutLength()),
              (pendo.areGuidesDisabled = areGuidesDisabled),
              (pendo.setGuidesDisabled = setGuidesDisabled),
              (pendo.buildNodeFromJSON = BuildingBlockGuides.buildNodeFromJSON),
              (pendo.flexElement = BuildingBlockGuides.flexElement),
              (pendo.GuideFactory = GuideFactory),
              (pendo.dom = dom),
              (pendo.getEventPropertyTarget = getEventPropertyTarget),
              (pendo.previewEventProperty = collectEventProperty),
              (pendo.log = log),
              (pendo.enableLogging = enableLogging),
              (pendo.disableLogging = disableLogging),
              (pendo.setActiveContexts = setActiveContexts),
              (pendo.showLogHistory = showLogHistory),
              (pendo.getLoggedContexts = getLoggedContexts),
              (pendo.isDebuggingEnabled = isDebuggingEnabled),
              (pendo.enableDebugging = enableDebugging),
              (pendo.disableDebugging = disableDebugging),
              (pendo.addDebuggingFunctions = addDebuggingFunctions),
              (pendo.stopSendingEvents = lockEvents),
              (pendo.startSendingEvents = unlockEvents),
              (pendo.isSendingEvents = isUnlocked),
              (pendo.fromByteArray = b64.uint8ToBase64);
            var designer = {
                dom: dom,
                placeBadge: placeBadge,
                showPreview: showPreview,
                stopGuides: stopGuides,
                removeAllBadges: removeAllBadges,
                _: _,
                sizzle: Sizzle,
                tellMaster: tellMaster,
                tell: tellMaster,
                log: log,
                attachEvent: attachEvent,
                createLauncher: createLauncher,
                removeLauncher: removeLauncher,
                addGuideToLauncher: addGuideToLauncher,
                updateLauncherContent: updateLauncherContent,
                DEFAULT_TIMER_LENGTH: DEFAULT_TIMER_LENGTH,
                getOffsetPosition: getOffsetPosition,
                getScreenDimensions: getScreenDimensions,
                registerMessageHandler: registerMessageHandler,
                whenLoadedCall: whenLoadedCall,
                loadResource: pendo.loadResource,
                loadGuideCss: loadGuideCss,
                GuideFactory: GuideFactory,
                GuideStep: GuideStep,
                extractElementTreeContext: extractElementTreeContext,
                previewGuideFromJSON: BuildingBlockGuides.previewGuideFromJSON,
                hidePreviewedGuide: BuildingBlockGuides.hidePreviewedGuide,
                shadowAPI: shadowAPI,
                getTarget: getTarget,
                pullContentsFromTargetElement: pullContentsFromTargetElement,
                doesElementMatchContainsRules: doesElementMatchContainsRules,
                doesElementContentMatchRule: doesElementContentMatchRule,
              },
              addDesignerFunctionality = function () {
                (designer.areGuidesEnabled = !areGuidesDisabled()),
                  pendo.designer || (pendo.designer = designer);
              },
              removeDesignerFunctionality = function () {
                pendo.designer &&
                  ((pendo.designer = null), delete pendo.designer);
              };
            isPrototypeOlderThan(1.7) && patchJSONstringify(),
              (pendo.track = track);
            var Feedback = (function () {
              function e() {
                (oe = ""),
                  (re = ""),
                  (ae = ""),
                  (se = ""),
                  (de = !1),
                  (ue = ""),
                  (le = !1);
              }
              function t() {
                return ae + "/html/widget/notLoaded.html";
              }
              function n(e) {
                var t, n;
                return (
                  "left" === e ? ((t = he), (n = _e)) : ((t = ge), (n = be)),
                  ce + pe + fe + t + ve + me + n + ye
                );
              }
              function i() {
                agentStorage.write(ne, !0, ie);
              }
              function o() {
                return agentStorage.read(ne);
              }
              function r(e) {
                return oe + e;
              }
              function a(e) {
                if (!o()) {
                  var t = s(e);
                  if (t.data && "{}" !== t.data && "null" !== t.data)
                    return pendo.ajax
                      .postJSON(r("/widget/pendo_ping"), t)
                      .then(c);
                }
                return q.resolve();
              }
              function s(e) {
                return (
                  e || (e = $(getOptionsCopy())), { data: JSON.stringify(e) }
                );
              }
              function d() {
                var e = agentStorage.read(te) || 0;
                return parseInt(e, 10);
              }
              function u(e) {
                agentStorage.write(te, e);
              }
              function l() {
                var e = pendo.Sizzle("#feedback-trigger-notification");
                if (0 !== e.length) {
                  var t = d();
                  t > 0
                    ? _.forEach(e, function (e) {
                        pendo.dom(e).css({ visibility: "visible" });
                      })
                    : _.forEach(e, function (e) {
                        pendo.dom(e).css({ visibility: "hidden" });
                      });
                }
              }
              function c(e) {
                i(), u(e.data.notifications), l();
              }
              function p() {
                return le
                  ? q.resolve()
                  : K(
                      getOptionsCopy(),
                      getPendoConfigValue("feedbackSettings")
                    );
              }
              function f(e, t) {
                return p().then(
                  function () {
                    return (
                      _.isUndefined(e) && (e = {}),
                      "A" === get(e, "anchor.nodeName", "").toUpperCase()
                        ? (g(), !1)
                        : void m().then(function (e) {
                            window.location.href = e;
                          })
                    );
                  },
                  function () {}
                );
              }
              function g() {
                var e = window.open(
                  t(),
                  Math.random().toString(36).substring(7)
                );
                m().then(function (t) {
                  e.location = t;
                });
              }
              function h(e) {
                var t = document.createElement("a");
                return (t.href = e), t.host;
              }
              function v(e) {
                se = h(e);
              }
              function m() {
                var e = s();
                return e.data && "{}" !== e.data && "null" !== e.data
                  ? pendo.ajax
                      .postJSON(r("/widget/token"), e)
                      .then(function (e) {
                        return v(e.data.login_url), e.data.login_url;
                      })
                  : void 0;
              }
              function b() {
                return document.getElementById(we.feedbackWidget);
              }
              function y() {
                return document.getElementById(we.feedbackIframe);
              }
              function w() {
                var e = y();
                return e || (j(), (e = y())), e;
              }
              function S() {
                var e = navigator.userAgent.toLowerCase();
                return (
                  -1 != e.indexOf("msie") &&
                  parseInt(e.split("msie")[1], 10) < 10
                );
              }
              function E(e) {
                if (X()) {
                  e && e.preventDefault && e.preventDefault();
                  var n = w();
                  (n.src && n.src !== t()) ||
                    m().then(function (e) {
                      n.src = e + "&inWidget=true";
                    }),
                    T(),
                    dom.addClass(b(), "visible"),
                    I("user.widget.opened");
                }
              }
              function C() {
                A(), dom.removeClass(b(), "visible"), I("user.widget.closed");
              }
              function I(e) {
                var t = s();
                return (t.event = e), pendo.ajax.postJSON(r("/analytics"), t);
              }
              function T() {
                var e = document.getElementById(we.feedbackWidget);
                if (e) {
                  var t = {
                      position: "fixed",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                      background: "rgba(0, 0, 0, 0.4)",
                      "z-index": "9000",
                      opacity: "0",
                      animation: "pendoFeedbackFadeIn 0.5s 0s 1 alternate both",
                      "-webkit-animation":
                        "pendoFeedbackFadeIn 0.5s 0s 1 alternate both",
                    },
                    n = R("feedback-overlay", t, "div"),
                    i = BuildingBlockGuides.buildNodeFromJSON(n),
                    o = e.parentNode;
                  i.appendTo(o);
                }
              }
              function A() {
                var e = document.getElementById(we.feedbackWidget),
                  t = document.getElementById(we.feedbackOverlay);
                if (e && t) {
                  var n = document.getElementById(we.feedbackOverlay);
                  n.parentNode.removeChild(n);
                }
              }
              function x(e) {
                return se ? h(e) === se : h(e) === h(ae);
              }
              function G() {
                window.addEventListener(
                  "message",
                  function (e) {
                    var t = e.origin || e.originalEvent.origin;
                    x(t) && k(e.data.message, e.data.data);
                  },
                  !1
                );
              }
              function k(e, n) {
                switch (e) {
                  case "close-receptive-widget":
                    C();
                    break;
                  case "open-receptive":
                    f();
                    break;
                  case "update-receptive-notification-count":
                    agentStorage.write("receptiveNotificationCount", n.count),
                      l();
                    break;
                  case "handle-logout":
                    (w().src = t()), C();
                    break;
                  case "loaded-receptive-widget":
                    de = !0;
                }
              }
              function O(e, t) {
                if (e.visitor.id) {
                  var i = _.extend(t, {
                    triggerColor: "#" + t.triggerColor,
                    triggerPosition: t.triggerPosition.toLowerCase(),
                  });
                  U();
                  var o = L(i);
                  pendo.designerv2.addStylesToPage(
                    "pendo-feedback-styles",
                    n(o.horizontalPosition)
                  ),
                    t.customTrigger || H(i, o),
                    j(o.horizontalPosition);
                }
              }
              function L(e) {
                var t = e.triggerPosition.split("_");
                return { horizontalPosition: t[1], verticalPosition: t[0] };
              }
              function B(e) {
                return "left" === e.horizontalPosition
                  ? {
                      "transform-origin": "center left",
                      left: "23px",
                      animation:
                        "pendoFeedbackSlideIn-left 0.2s 0s 1 alternate forwards",
                      "-webkit-animation":
                        "pendoFeedbackSlideIn-left 0.2s 0s 1 alternate forwards",
                    }
                  : {
                      right: "0px",
                      animation:
                        "pendoFeedbackSlideIn 0.2s 0s 1 alternate forwards",
                      "-webkit-animation":
                        "pendoFeedbackSlideIn 0.2s 0s 1 alternate forwards",
                    };
              }
              function N(e) {
                switch (e.verticalPosition) {
                  case "top":
                    return { top: " 10%" };
                  case "middle":
                    return { top: " 45%" };
                  case "bottom":
                    return { bottom: " 20%" };
                }
              }
              function R(e, t, n) {
                return { props: { id: e, style: t }, type: n };
              }
              function P() {
                return { "data-turbolinks-permanent": "" };
              }
              function M(e) {
                var t = B(e),
                  n = N(e),
                  i = {
                    position: "fixed",
                    height: "43px",
                    opacity: "1 !important",
                    "z-index": "9001",
                  },
                  o = R(we.feedbackTrigger, i, "div");
                return (
                  _.extend(o.props, P()),
                  _.extend(o.props.style, t),
                  _.extend(o.props.style, n),
                  o
                );
              }
              function D() {
                var e = {
                    "background-color": "#D85039",
                    color: "#fff",
                    "border-radius": "50%",
                    height: "17px",
                    width: "17px",
                    position: "absolute",
                    right: "-6px",
                    top: "-8px",
                    visibility: "hidden",
                    "z-index": "1",
                    animation: "pendoFeedbackPulse",
                    "animation-fill-mode": "both",
                    "animation-duration": "1s",
                    "animation-delay": "1s",
                    "animation-iteration-count": "1",
                  },
                  t = R("feedback-trigger-notification", e, "span");
                return t;
              }
              function F(e, t) {
                var n;
                n =
                  "left" === t.horizontalPosition
                    ? "0 0 5px 5px"
                    : "3px 3px 0 0";
                var i = {
                    border: "none",
                    padding: "11px 18px 14px 18px",
                    "background-color": e.triggerColor,
                    "border-radius": n,
                    "font-size": "15px",
                    color: "#fff",
                    "box-shadow": "0 -5px 9px rgba(0,0,0,.16)",
                    cursor: "pointer",
                    "text-align": "left",
                  },
                  o = {
                    actions: [
                      {
                        action: "openFeedback",
                        destination: "Global",
                        eventType: "click",
                        parameters: [],
                        source: we.feedbackTriggerButton,
                        uiMetadata: {},
                      },
                    ],
                  },
                  r = R(we.feedbackTriggerButton, i, "button");
                return _.extend(r, o), _.extend(r, { content: e.triggerText });
              }
              function H(e, t) {
                var n = M(t),
                  i = D(),
                  o = F(e, t),
                  r = {
                    type: "style",
                    props: { type: "text/css", scoped: "scoped" },
                    css: [
                      {
                        selector: "#feedback-trigger button:hover",
                        styles: {
                          "box-shadow": "0 -5px 20px rgba(0,0,0,.19)",
                          outline: "none",
                          background: "#3e566f",
                        },
                      },
                      {
                        selector: "#feedback-trigger button:focus",
                        styles: {
                          "box-shadow": "0 -5px 20px rgba(0,0,0,.19)",
                          outline: "none",
                          background: "#3e566f",
                        },
                      },
                    ],
                  };
                _.extend(n, { children: [i, o, r] });
                var a = {};
                a.eventRouter = new EventRouter();
                var s = BuildingBlockGuides.buildNodeFromJSON(n, a);
                s.appendTo(getBody());
              }
              function U() {
                "undefined" != typeof Turbolinks &&
                  document.addEventListener(
                    "turbolinks:before-visit",
                    function (e) {
                      var n = document.getElementById(we.feedbackIframe);
                      n && (n.src = t());
                    }
                  );
              }
              function z(e) {
                var t = R(we.feedbackWidget, J(), "div");
                return (
                  _.extend(t, { "data-turbolinks-permanent": "true" }),
                  _.extend(t.props, { class: "buttonIs-" + e }),
                  t
                );
              }
              function V() {
                var e = { width: "100%", height: "99.6%", border: "0 none" },
                  n = R(we.feedbackIframe, e, "iframe");
                return _.extend(n.props, { src: t() }), n;
              }
              function W(e) {
                var t;
                return (
                  (t =
                    "left" === e
                      ? {
                          selector: ".buttonIs-left.visible",
                          styles: {
                            left: "0px",
                            width: "470px",
                            "animation-direction": "alternate-reverse",
                            animation:
                              "pendoFeedbackSlideFromLeft 0.5s 0s 1 alternate both",
                            "-webkit-animation":
                              "pendoFeedbackSlideFromLeft 0.5s 0s 1 alternate both",
                            "z-index": "9002",
                          },
                        }
                      : {
                          selector: ".buttonIs-right.visible",
                          styles: {
                            right: "0",
                            width: "470px",
                            "animation-direction": "alternate-reverse",
                            animation:
                              "pendoFeedbackSlideFromRight 0.5s 0s 1 alternate both",
                            "-webkit-animation":
                              "pendoFeedbackSlideFromRight 0.5s 0s 1 alternate both",
                            "z-index": "9002",
                          },
                        }),
                  {
                    type: "style",
                    props: { type: "text/css", scoped: "scoped" },
                    css: [t],
                  }
                );
              }
              function j(e) {
                var t = W(e),
                  n = z(e);
                _.extend(n, { children: [V(), t] });
                var i = BuildingBlockGuides.buildNodeFromJSON(n);
                i.appendTo(getBody()), G();
              }
              function J() {
                return {
                  height: "100%",
                  position: "fixed",
                  right: "0",
                  top: "0",
                  width: "0",
                  "background-color": "#f7f7f7",
                  transition: "animation 0.4s ease-in-out",
                  "box-shadow": "0 5px 40px rgba(0,0,0,.46)",
                  display: "block !important",
                  "-webkit-overflow-scrolling": "touch",
                  "overflow-y": "hidden",
                };
              }
              function X(e) {
                var t = e || getOptionsCopy();
                if (!S() && re && oe && ae && ue) {
                  if (!_.has(t.visitor, "id"))
                    return void pendo.log("Not valid visitor id");
                  if (!isAnonymousVisitor(t.visitor.id))
                    return _.has(t.account, "id")
                      ? !0
                      : void pendo.log(
                          "The current visitor is not associated with an account."
                        );
                }
              }
              function K(e, t) {
                if (
                  ((re = t.vendorId),
                  (oe = t.apiUrl),
                  (ae = t.siteUrl),
                  (ue = t.productId),
                  !X(e))
                )
                  return q.reject();
                var n = $(e);
                try {
                  return "WIDGET" === t.type && O(e, t), l(), (le = !0), a(n);
                } catch (i) {
                  return (
                    (le = !1),
                    pendo.log(i, "unhandled error while initializing feedback"),
                    q.reject(i)
                  );
                }
              }
              function Z(e) {
                return _.isUndefined(e.user) || _.isUndefined(e.user.id)
                  ? "noemail+" + pendo.randomString(32) + "@pendo.io"
                  : "noemail+" + e.user.id + "@pendo.io";
              }
              function Y(e) {
                if (
                  !_.isUndefined(e.user.firstName) ||
                  !_.isUndefined(e.user.lastName)
                ) {
                  var t = [];
                  return (
                    _.isUndefined(e.user.firstName) || t.push(e.user.firstName),
                    _.isUndefined(e.user.lastName) || t.push(e.user.lastName),
                    t.join(" ")
                  );
                }
                return _.isUndefined(e.user) || _.isUndefined(e.user.id)
                  ? "No Name Provided" + pendo.randomString(32)
                  : "No Name Provided" + e.user.id;
              }
              function $(e) {
                var t = getJwtInfoCopy();
                if (_.isEmpty(t)) {
                  var n = JSON.parse(JSON.stringify(e)),
                    i = n.visitor;
                  return (
                    delete n.visitor,
                    (n.user = i),
                    _.extend(n, { vendor: { id: re } }),
                    _.extend(n.user, { allowed_products: [{ id: ue }] }),
                    _.isUndefined(n.account.is_paying) &&
                      (n.account.is_paying = !0),
                    _.isUndefined(n.user.email) && (n.user.email = Z(n)),
                    _.isUndefined(n.user.full_name) &&
                      (n.user.full_name = Y(n)),
                    n
                  );
                }
                var o = JSON.parse(JSON.stringify(t));
                return (
                  _.extend(o, { vendor: { id: re } }),
                  _.extend(o, { allowed_products: [{ id: ue }] }),
                  o
                );
              }
              function Q() {
                return le;
              }
              function ee() {
                pendo.P2AutoLaunch.removeElement("feedback-trigger"),
                  pendo.P2AutoLaunch.removeElement("feedback-widget"),
                  pendo.P2AutoLaunch.removeElement("pendo-feedback-styles"),
                  pendo.P2AutoLaunch.removeElement("feedback-overlay"),
                  pendo.P2AutoLaunch.removeElement("feedback-widget_iframe"),
                  e();
              }
              var te = "feedback_notification_count",
                ne = "feedback_ping_sent",
                ie = 36e5,
                oe = "",
                re = "",
                ae = "",
                se = "",
                de = !1,
                ue = "",
                le = !1,
                ce =
                  "@media only screen and (max-device-width:1112px){#feedback-widget{overflow-y:scroll}}",
                pe =
                  "@-webkit-keyframes pendoFeedbackSlideIn{from{opacity:0;transform:translate(145px,0) rotate(270deg) translateY(-50%)}to{opacity:1;transform:translate(50%,0) rotate(270deg) translateY(-50%)}}@keyframes pendoFeedbackSlideIn{from{opacity:0;transform:translate(145px,0) rotate(270deg) translateY(-50%)}to{opacity:1;transform:translate(50%,0) rotate(270deg) translateY(-50%)}}",
                fe =
                  "@-webkit-keyframes pendoFeedbackSlideIn-left{from{opacity:0;transform:rotate(270deg) translateX(-55%) translateY(-55%)}to{opacity:1;transform:rotate(270deg) translateX(-55%) translateY(0)}}@keyframes pendoFeedbackSlideIn-left{from{opacity:0;transform:rotate(270deg) translateX(-55%) translateY(-55%)}to{opacity:1;transform:rotate(270deg) translateX(-55%) translateY(0)}}",
                ge =
                  "@-webkit-keyframes pendoFeedbackSlideFromRight{from{transform:translate(-460px,0)}to{transform:translate(0,0)}}@keyframes pendoFeedbackSlideFromRight{from{opacity:0;transform:translate(460px,0)}to{opacity:1;transform:translate(0,0)}}",
                he =
                  "@-webkit-keyframes pendoFeedbackSlideFromLeft{from{opacity:0;transform:translate(-460px,0)}to{opacity:1;transform:translate(0,0)}}@keyframes pendoFeedbackSlideFromLeft{from{opacity:0;transform:translate(-460px,0)}to{opacity:1;transform:translate(0,0)}}",
                ve =
                  "@-webkit-keyframes pendoFeedbackPulse{from{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.15,1.15);transform:scale(1.15,1.15)}to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes pendoFeedbackPulse{from{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.15,1.15);transform:scale(1.15,1.15)}to{-webkit-transform:scale(1,1);transform:scale(1,1)}}",
                me =
                  "@-webkit-keyframes pendoFeedbackFadeIn{from{opacity:0}to{opacity:1}}@keyframes pendoFeedbackFadeIn{from{opacity:0}to{opacity:1}}",
                be =
                  "@media only screen and (max-width:470px){#feedback-widget.buttonIs-right.visible{width:100%;right:2%}}",
                _e =
                  "@media only screen and (max-width:470px){#feedback-widget.buttonIs-left.visible{width:100%}}",
                ye =
                  "#feedback-trigger button:focus,#feedback-trigger button:hover{box-shadow:0 -5px 20px rgba(0,0,0,.19);outline:0;background:#3e566f}",
                we = {
                  feedbackIframe: "feedback-widget_iframe",
                  feedbackTrigger: "feedback-trigger",
                  feedbackWidget: "feedback-widget",
                  feedbackOverlay: "feedback-overlay",
                  feedbackTriggerButton: "feedback-trigger-button",
                },
                Se = function () {
                  return de;
                };
              return {
                ping: a,
                init: K,
                initialized: Q,
                loginAndRedirect: f,
                openFeedback: E,
                initializeFeedbackOnce: p,
                isFeedbackLoaded: Se,
                convertPendoToFeedbackOptions: $,
                isUnsupportedIE: S,
                removeFeedbackWidget: ee,
              };
            })();
            if (((pendo.feedback = Feedback), !pendoCore)) {
              var guidesCoreOff = [
                  "initGuides",
                  "loadGuides",
                  "findGuideByName",
                  "hideGuides",
                  "onGuideDismissed",
                  "onGuideAdvanced",
                  "onGuidePrevious",
                  "startGuides",
                  "stopGuides",
                  "toggleLauncher",
                  "showLauncher",
                  "hideLauncher",
                  "removeLauncher",
                  "defaultCssUrl",
                  "areGuidesDisabled",
                  "setGuidesDisabled",
                  "flexElement",
                  "GuideFactory",
                  "P2AutoLaunch",
                  "BuildingBlocks",
                  "designer",
                  "advancedGuide",
                  "dismissedGuide",
                  "findGuideBy",
                  "findGuideById",
                  "findStepInGuide",
                  "getElementForGuideStep",
                  "guideContent",
                  "guideDev",
                  "isGuideShown",
                  "seenGuide",
                  "showGuideById",
                  "showGuideByName",
                  "showGuideByName",
                  "showPreview",
                  "stageGuideEvent",
                  "waitThenStartGuides",
                  "_addCloseButton",
                  "_addGuideToLauncher",
                  "_shouldAutoDisplayGuide",
                  "_showElementGuide",
                  "_showGuide",
                  "_showLightboxGuide",
                  "_updateGuideStepStatus",
                  "badgeDiv",
                  "badgesShown",
                  "isBadge",
                  "placeBadge",
                  "removeAllBadges",
                  "_addCredits",
                  "_createGuideEvent",
                  "_createToolTip",
                  "_getNextStepInMultistep",
                  "_getOpacityStyles",
                  "_get_offset",
                  "_get_screen_dim",
                  "_get_tooltip_dimensions",
                  "_isInViewport",
                  "_isOldIE",
                  "_sendGuideEvent",
                  "findModuleByName",
                  "guidesProcessingThreadHandle",
                  "initLauncher",
                  "getTooltipDivId",
                  "receiveDomStructureJson",
                  "setupWatchOnTooltip",
                  "testUrlForStep",
                  "hasModule",
                ],
                eventsCoreOff = [
                  "flushEventCache",
                  "flushNow",
                  "getEventCache",
                  "isSendingEvents",
                  "processEventCache",
                  "send_event",
                  "startSendingEvents",
                  "stopSendingEvents",
                  "track",
                  "_sendEvent",
                  "_stopEvents",
                  "_storeInCache",
                  "_writeEventImgTag",
                  "_writeImgTag",
                  "events",
                  "eventCache",
                  "attachEvent",
                  "detachEvent",
                  "getText",
                ],
                functionsCoreOff = guidesCoreOff.concat(eventsCoreOff);
              disableUnusedMethodsPendoCoreOff(functionsCoreOff);
            }
            _.each(["identify", "updateOptions", "pageLoad"], function (e) {
              var t = pendo[e];
              pendo[e] = function () {
                try {
                  isReady()
                    ? t.apply(this, arguments)
                    : enqueueCall(e, arguments);
                } catch (n) {
                  writeException(n);
                }
              };
            });
            var disableAutoInitialize = getPendoConfigValue(
              "disableAutoInitialize"
            );
            disableAutoInitialize || whenLoadedCall(autoInitialize);
          }
        })(),
        pendo.defaultLauncher(
          '<div class="_pendo-launcher-content_" style="border-color:<%= data.color %>">\n    <div class="_pendo-launcher-header_">\n        <img src="<%= data.launcherBadgeUrl %>"/>\n        <div class="_pendo-launcher-title_"><%= data.title %></div>\n        <% if (data.enableSearch) { %>\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        <% } %>\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    <% pendo._.each(guides, function(guide) { %>\n        <div class="_pendo-launcher-item_" id="launcher-<%= guide.id %>">\n            <a href="javascript:void(0);"><%= guide.name %></a>\n        </div>\n    <% }) %>\n    </div>\n    <% if (hidePoweredBy) { %>\n    <div class="_pendo-launcher-footer_"></div>\n    <% } else { %>\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    <% } %>\n</div>\n',
          function (obj) {
            obj || (obj = {});
            var __t,
              __p = "";
            Array.prototype.join;
            with (obj)
              (__p +=
                '<div class="_pendo-launcher-content_" style="border-color:' +
                (null == (__t = data.color) ? "" : __t) +
                '">\n    <div class="_pendo-launcher-header_">\n        <img src="' +
                (null == (__t = data.launcherBadgeUrl) ? "" : __t) +
                '"/>\n        <div class="_pendo-launcher-title_">' +
                (null == (__t = data.title) ? "" : __t) +
                "</div>\n        "),
                data.enableSearch &&
                  (__p +=
                    '\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        '),
                (__p +=
                  '\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    '),
                pendo._.each(guides, function (e) {
                  __p +=
                    '\n        <div class="_pendo-launcher-item_" id="launcher-' +
                    (null == (__t = e.id) ? "" : __t) +
                    '">\n            <a href="javascript:void(0);">' +
                    (null == (__t = e.name) ? "" : __t) +
                    "</a>\n        </div>\n    ";
                }),
                (__p += "\n    </div>\n    "),
                (__p += hidePoweredBy
                  ? '\n    <div class="_pendo-launcher-footer_"></div>\n    '
                  : '\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    '),
                (__p += "\n</div>\n");
            return __p;
          }
        ),
        windowOrMountPoint.pendo);
  })(window, document);
})({
  blockAgentMetadata: false,

  dataHost: "data.pendo.io",

  stagingServers: [/.*pendo.*\.wistia\.io/, /.*pendo.*\.wistia\.st/],
  stagingAgentUrl:
    "https://pendo-io-static.storage.googleapis.com/agent/static/004aa220-e830-47ce-67b9-3e295aa16b40/pendo-staging.js",

  allowedOriginServers: [],

  adoptPrioritizeAdoptGuides: false,
  allowCrossOriginFrames: false,
  disableCookies: false,
  disableDesignerKeyboardShortcut: false,
  disableFeedbackAutoInit: false,
  disableGlobalCSS: false,
  disableGuidePseudoStyles: false,
  disablePersistence: false,
  enableDebugEvents: false,
  enableGuideTimeout: true,
  enableSignedMetadata: false,
  excludeAllText: false,
  frameIdentitySync: false,
  freeNPSData: false,
  guideValidation: false,
  localStorageOnly: false,
  pendoCore: true,
  pendoFeedback: false,
  preferBroadcastChannel: false,
  preventCodeInjection: false,
  requireSignedMetadata: false,
  trainingPartner: false,
  guideSeenTimeoutLength: 0,
  xhrTimings: false,
  xhrWhitelist: null,
  htmlAttributeBlacklist: null,
  htmlAttributes: /^(tabindex|data-)$/i,
  apiKey: "004aa220-e830-47ce-67b9-3e295aa16b40",
});

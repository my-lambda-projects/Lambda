(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [159],
  {
    WNtD: function (e) {
      e.exports = JSON.parse(
        '[{"languages":["typescript","replit-ts"],"name":"jsxSyntaxWorker","version":5},{"languages":["reason"],"name":"prismSyntaxWorker","version":5},{"languages":["haskell","elixir","kotlin","forth","erlang","dart","perl","perl6","ocaml","nim","python","makefile","coffee","d","ejs","elm","fortran","golang","glsl","gitignore","html_ruby","lisp","lua","pascal","prolog","rust","scheme","toml","replit-python","replit-js"],"name":"aceSyntaxWorker","version":5}]'
      );
    },
    lX4r: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return en;
        });
      var n = r("nKUr"),
        o = r("cpVT"),
        i = r("H+61"),
        a = r("UlJF"),
        s = r("7LId"),
        l = r("VIvw"),
        u = r("iHvq"),
        c = r("MX0m"),
        d = r.n(c),
        p = r("q1tI"),
        f = r("wsa1"),
        m = r("PGsk"),
        g = r("0VEe"),
        h = r("cR/2"),
        b = r("yz3v"),
        v = r("WNtD");
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
          s = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var w = function e(t) {
          var r = this;
          Object(i.a)(this, e),
            Object(o.a)(this, "editor", void 0),
            Object(o.a)(this, "disposables", void 0),
            Object(o.a)(this, "modeWorkers", void 0),
            Object(o.a)(this, "lastDecorations", void 0),
            Object(o.a)(this, "dispose", function () {
              r.modeWorkers.forEach(function (e) {
                e.worker &&
                  ((e.worker.onmessage = null),
                  (e.worker.onerror = null),
                  e.worker.terminate(),
                  (e.worker = null));
              }),
                r.disposables.forEach(function (e) {
                  e.dispose();
                });
            }),
            Object(o.a)(this, "updateDecorations", function (e) {
              var t = e.map(function (e) {
                return {
                  range: new f.Range(e.startLine, e.start, e.endLine, e.end),
                  options: { inlineClassName: e.kind },
                };
              });
              r.lastDecorations = r.editor.deltaDecorations(
                r.lastDecorations || [],
                t
              );
            }),
            Object(o.a)(this, "registerModeWorker", function (e) {
              (e.worker = e.Ctor()),
                e.worker.postMessage({ init: !0, aceVersion: b.version }),
                (e.worker.onmessage = function (e) {
                  var t = e.data.classifications;
                  window.requestAnimationFrame(function () {
                    r.updateDecorations(t);
                  });
                });
            }),
            Object(o.a)(this, "triggerHighlight", function (e) {
              var t = r.editor,
                n = r.modeWorkers;
              if (!t)
                throw new Error("No editor setup for syntax highlighting");
              var o = t.getModel();
              if (o) {
                var i,
                  a = o.getModeId(),
                  s = o.uri.toString(),
                  l = y(n);
                try {
                  for (l.s(); !(i = l.n()).done; ) {
                    var u = i.value;
                    if (u.languages.includes(a.replace(/-v\d+$/, ""))) {
                      var c = u.worker;
                      c || (r.registerModeWorker(u), (c = u.worker));
                      var d = t.getVisibleRanges().reduce(
                          function (e, t) {
                            return (
                              e.startLineNumber > t.startLineNumber &&
                                (e.startLineNumber = t.startLineNumber),
                              e.endLineNumber < t.endLineNumber &&
                                (e.endLineNumber = t.endLineNumber),
                              e
                            );
                          },
                          { startLineNumber: 1, endLineNumber: 1 }
                        ),
                        p = null;
                      e &&
                        "changes" in e &&
                        (p = e.changes.reduce(function (e, t) {
                          var r = t.range;
                          return null == e || e >= r.startLineNumber
                            ? r.startLineNumber - 1
                            : e;
                        }, null)),
                        c.postMessage({
                          code: t.getValue(),
                          visibleRange: [
                            Math.max(d.startLineNumber - 10, 0),
                            d.endLineNumber + 10,
                          ],
                          mode: a,
                          changeStartRow: p,
                          documentId: s,
                        });
                      break;
                    }
                  }
                } catch (f) {
                  l.e(f);
                } finally {
                  l.f();
                }
              }
            }),
            (this.editor = t),
            (this.lastDecorations = []),
            (this.disposables = []),
            (this.modeWorkers = v.map(function (e) {
              var t = e.languages,
                r = e.name,
                n = e.version;
              return {
                languages: t,
                Ctor: function () {
                  return new window.Worker(
                    "/public/".concat(r).concat(n, ".js")
                  );
                },
                worker: null,
              };
            })),
            this.disposables.push(
              t.onDidChangeModelContent(this.triggerHighlight)
            ),
            this.disposables.push(t.onDidChangeModel(this.triggerHighlight)),
            this.disposables.push(t.onDidScrollChange(this.triggerHighlight)),
            window.requestAnimationFrame(function () {
              return r.triggerHighlight();
            });
        },
        k = r("IjuC"),
        C = function () {
          return (C =
            Object.assign ||
            function (e) {
              for (
                var t, r = arguments, n = 1, o = arguments.length;
                n < o;
                n++
              )
                for (var i in (t = r[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        $ = function (e, t, r) {
          null == r && "string" === typeof e && (r = e.length),
            (this.string = e),
            (this.pos = this.start = t || 0),
            (this.end = r);
        };
      ($.prototype.eof = function () {
        return this.pos >= this.end;
      }),
        ($.prototype.limit = function (e, t) {
          return new this.constructor(this.string, e, t);
        }),
        ($.prototype.peek = function () {
          return this.string.charCodeAt(this.pos);
        }),
        ($.prototype.next = function () {
          if (this.pos < this.string.length)
            return this.string.charCodeAt(this.pos++);
        }),
        ($.prototype.eat = function (e) {
          var t = this.peek(),
            r = "function" === typeof e ? e(t) : t === e;
          return r && this.next(), r;
        }),
        ($.prototype.eatWhile = function (e) {
          for (var t = this.pos; !this.eof() && this.eat(e); );
          return this.pos !== t;
        }),
        ($.prototype.backUp = function (e) {
          this.pos -= e || 1;
        }),
        ($.prototype.current = function () {
          return this.substring(this.start, this.pos);
        }),
        ($.prototype.substring = function (e, t) {
          return this.string.slice(e, t);
        }),
        ($.prototype.error = function (e) {
          var t = new Error(e + " at char " + (this.pos + 1));
          return (
            (t.originalMessage = e),
            (t.pos = this.pos),
            (t.string = this.string),
            t
          );
        });
      var A = { escape: 92, throws: !1 },
        j = function (e, t) {
          t = t ? Object.assign({}, A, t) : A;
          var r = e.pos,
            n = e.peek();
          if (e.eat(O)) {
            for (; !e.eof(); )
              switch (e.next()) {
                case n:
                  return (e.start = r), !0;
                case t.escape:
                  e.next();
              }
            if (((e.pos = r), t.throws))
              throw e.error("Unable to consume quoted string");
          }
          return !1;
        };
      function O(e) {
        return 39 === e || 34 === e;
      }
      function S(e) {
        return e > 47 && e < 58;
      }
      function E(e, t, r) {
        return (r = r || 90), (e &= -33) >= (t = t || 65) && e <= r;
      }
      function T(e) {
        return S(e) || E(e);
      }
      function _(e) {
        return 32 === e || 9 === e || 160 === e;
      }
      function z(e) {
        return _(e) || 10 === e || 13 === e;
      }
      function q(e) {
        for (var t, r, n = new $(e), o = [], i = "", a = 0, s = 0; !n.eof(); )
          (t = n.peek()),
            (s = n.pos),
            92 === t
              ? (n.next(), n.next())
              : (r = N(n, i.length + s - a))
              ? (o.push(r),
                (i += n.string.slice(a, s) + r.placeholder),
                (a = n.pos))
              : n.next();
        return new I(i + n.string.slice(a), o);
      }
      function L(e, t) {
        return t ? "${" + e + ":" + t + "}" : "${" + e + "}";
      }
      function N(e, t) {
        var r = e.pos;
        if (e.eat(36)) {
          var n = M(e),
            o = "";
          if (null != n) return new R(n, o, t);
          if (
            e.eat(123) &&
            null != (n = M(e)) &&
            (e.eat(58) &&
              (o = (function (e) {
                var t,
                  r = [];
                e.start = e.pos;
                for (; !e.eof(); ) {
                  if (123 === (t = e.peek())) r.push(e.pos);
                  else if (125 === t) {
                    if (!r.length) break;
                    r.pop();
                  }
                  e.next();
                }
                if (r.length)
                  throw e.error(
                    'Unable to find matching "}" for curly brace at ' + r.pop()
                  );
                return e.current();
              })(e)),
            e.eat(125))
          )
            return new R(n, o, t);
        }
        e.pos = r;
      }
      function M(e) {
        if (((e.start = e.pos), e.eatWhile(S))) return Number(e.current());
      }
      var R = function (e, t, r) {
          (this.index = e),
            (this.placeholder = t),
            (this.location = r),
            (this.length = this.placeholder.length);
        },
        I = function (e, t) {
          (this.string = e), (this.fields = t);
        };
      (I.prototype.mark = function (e) {
        return (function (e, t, r) {
          r = r || L;
          var n = t
              .map(function (e, t) {
                return { order: t, field: e, end: e.location + e.length };
              })
              .sort(function (e, t) {
                return e.end - t.end || e.order - t.order;
              }),
            o = 0;
          return (
            n
              .map(function (t) {
                var n = e.substr(t.field.location, t.field.length),
                  i = e.slice(o, t.field.location);
                return (o = t.end), i + r(t.field.index, n);
              })
              .join("") + e.slice(o)
          );
        })(this.string, this.fields, e);
      }),
        (I.prototype.toString = function () {
          return this.string;
        });
      var D = function (e) {
          return e;
        },
        W = function (e, t, r) {
          "object" === typeof t && ((r = t), (t = null)),
            (this.node = e),
            (this._fieldsRenderer = t || D),
            (this.open = null),
            (this.beforeOpen = ""),
            (this.afterOpen = ""),
            (this.close = null),
            (this.beforeClose = ""),
            (this.afterClose = ""),
            (this.text = null),
            (this.beforeText = ""),
            (this.afterText = ""),
            (this.indent = ""),
            (this.newline = ""),
            r && Object.assign(this, r);
        };
      (W.prototype.clone = function () {
        return new this.constructor(this.node, this);
      }),
        (W.prototype.indentText = function (e) {
          var t = this,
            r = (function (e) {
              return (e || "").split(/\r\n|\r|\n/g);
            })(e);
          if (1 === r.length) return e;
          var n = this.newline || this.indent ? this.newline : " ";
          return r
            .map(function (e, r) {
              return r ? t.indent + e : e;
            })
            .join(n);
        }),
        (W.prototype.renderFields = function (e) {
          return this._fieldsRenderer(e);
        }),
        (W.prototype.toString = function (e) {
          var t = this._wrap(this.open, this.beforeOpen, this.afterOpen),
            r = this._wrap(this.close, this.beforeClose, this.afterClose);
          return (
            t +
            this._wrap(this.text, this.beforeText, this.afterText) +
            (null != e ? e : "") +
            r
          );
        }),
        (W.prototype._wrap = function (e, t, r) {
          return (
            (t = null != t ? t : ""),
            (r = null != r ? r : ""),
            null != e
              ? ((e = t ? e.replace(/^\s+/, "") : e),
                (e = r ? e.replace(/\s+$/, "") : e),
                t + this.indentText(e) + r)
              : ""
          );
        });
      var P = function (e, t) {
        return t || "";
      };
      function U(e, t, r) {
        "undefined" === typeof r && ((r = t), (t = null)), (t = t || P);
        var n = { index: 1 };
        return F(e.children, r, function (e) {
          return null == e
            ? t(n.index++)
            : (function (e, t) {
                var r = "object" === typeof e ? e : q(e),
                  n = -1;
                r.fields.forEach(function (e) {
                  (e.index += t.index), e.index > n && (n = e.index);
                }),
                  -1 !== n && (t.index = n + 1);
                return r;
              })(e, n).mark(t);
        });
      }
      function F(e, t, r) {
        return e
          .map(function (e) {
            var n = t(new W(e, r));
            return n ? n.toString(F(e.children, t, r)) : "";
          })
          .join("");
      }
      var B = { shortHex: !0, between: ": ", after: ";" };
      function H(e, t, r) {
        r = r || {};
        var n = Object.assign({}, B, r && r.format);
        return U(e, r.field, function (r) {
          var o = r.node,
            i = K(o, n);
          o.attributes.length &&
            (i = (function (e, t) {
              var r = q(e),
                n = r.fields.length;
              if (n)
                for (
                  (t = t.slice()).length > n &&
                  (t = t.slice(0, n - 1).concat(t.slice(n - 1).join(", ")));
                  t.length;

                ) {
                  var o = t.shift(),
                    i = r.fields.shift(),
                    a = o.length - i.length;
                  r.string =
                    r.string.slice(0, i.location) +
                    o +
                    r.string.slice(i.location + i.length);
                  for (var s = 0, l = r.fields.length; s < l; s++)
                    r.fields[s].location += a;
                }
              return r;
            })(
              i,
              o.attributes.map(function (e) {
                return K(e, n);
              })
            ));
          return (
            (r.open = o.name && t.name(o.name)),
            (r.afterOpen = n.between),
            (r.text = r.renderFields(i || null)),
            !r.open ||
              (r.text && r.text.endsWith(";")) ||
              (r.afterText = n.after),
            t.get("format") &&
              ((r.newline = "\n"),
              e.lastChild !== o && (r.afterText += r.newline)),
            r
          );
        });
      }
      function K(e, t) {
        return e.value &&
          "object" === typeof e.value &&
          "css-value" === e.value.type
          ? e.value.value
              .map(function (e) {
                return e && "object" === typeof e
                  ? "color" === e.type
                    ? e.toString(t.shortHex)
                    : e.toString()
                  : String(e);
              })
              .join(" ")
          : null != e.value
          ? String(e.value)
          : "";
      }
      var Y = {
        css: { between: ": ", after: ";" },
        scss: "css",
        less: "css",
        sass: { between: ": ", after: "" },
        stylus: { between: " ", after: "" },
      };
      function G(e, t, r, n) {
        return (
          "object" === typeof r && ((n = r), (r = null)),
          (function (e) {
            return !!e && e in Y;
          })(r) || (r = "css"),
          H(e, t, (n = Object.assign({}, n, { format: V(r, n) })))
        );
      }
      function V(e, t) {
        var r = Y[e];
        return (
          "string" === typeof r && (r = Y[r]),
          Object.assign({}, r, t && t.format)
        );
      }
      function J(e, t) {
        if ((e = e.toLowerCase()) === (t = t.toLowerCase())) return 1;
        if (!t || e.charCodeAt(0) !== t.charCodeAt(0)) return 0;
        for (
          var r, n, o, i, a, s = e.length, l = t.length, u = 1, c = 1, d = l;
          u < s;

        ) {
          for (r = e.charCodeAt(u), o = !1, i = !1; c < l; ) {
            if (r === (n = t.charCodeAt(c))) {
              (o = !0), (d += (l - c) * (i ? 2 : 1));
              break;
            }
            (i = 45 === n), c++;
          }
          if (!o) break;
          u++;
        }
        return d && (d * (u / s)) / (((a = l) * (a + 1)) / 2);
      }
      var X = /^([a-z-]+)(?:\s*:\s*([^\n\r]+))?$/;
      function Z(e) {
        return (function (e) {
          e = e.sort(te);
          for (var t = [], r = 0, n = void 0, o = void 0; r < e.length; r++)
            if ((n = e[r]).property) {
              for (; t.length; ) {
                if (
                  ((o = t[t.length - 1]),
                  0 === n.property.indexOf(o.property) &&
                    45 === n.property.charCodeAt(o.property.length))
                ) {
                  o.addDependency(n), t.push(n);
                  break;
                }
                t.pop();
              }
              t.length || t.push(n);
            }
          return e;
        })(
          e.map(function (e) {
            return new Q(e.key, e.value);
          })
        );
      }
      var Q = function (e, t) {
          (this.key = e), (this.value = t), (this.property = null);
          var r = t && t.match(X);
          r && ((this.property = r[1]), (this.value = r[2])),
            (this.dependencies = []);
        },
        ee = { defaultValue: { configurable: !0 } };
      function te(e, t) {
        return e.key === t.key ? 0 : e.key < t.key ? -1 : 1;
      }
      function re(e) {
        return /^\s*[\w-]+/.test(e);
      }
      function ne(e) {
        return String(e).split("|");
      }
      (Q.prototype.addDependency = function (e) {
        this.dependencies.push(e);
      }),
        (ee.defaultValue.get = function () {
          return null != this.value ? ne(this.value)[0] : null;
        }),
        (Q.prototype.keywords = function () {
          var e,
            t,
            r = [],
            n = new Set(),
            o = 0;
          for (this.property && r.push(this); o < r.length; )
            if ((e = r[o++]).value) {
              t = ne(e.value).filter(re);
              for (var i = 0; i < t.length; i++) n.add(t[i].trim());
              for (var a = 0, s = e.dependencies; a < s.length; a++)
                -1 === r.indexOf(s[a]) && r.push(s[a]);
            }
          return Array.from(n);
        }),
        Object.defineProperties(Q.prototype, ee);
      var oe = ["auto", "inherit", "unset"],
        ie = [
          "z-index",
          "line-height",
          "opacity",
          "font-weight",
          "zoom",
          "flex",
          "flex-grow",
          "flex-shrink",
        ],
        ae = {
          intUnit: "px",
          floatUnit: "em",
          unitAliases: { e: "em", p: "%", x: "ex", r: "rem" },
          fuzzySearchMinScore: 0,
        };
      function se(e, t, r) {
        (r = Object.assign({}, ae, r)).unitAliases = Object.assign(
          {},
          ae.unitAliases,
          r && r.unitAliases
        );
        var n = (function (e) {
          return Z(e.all({ type: "string" }));
        })(t);
        return (
          e.walk(function (e) {
            return (function (e, t, r) {
              if (r.property)
                return (function (e, t, r) {
                  var n = oe.slice();
                  t && (n = n.concat(t.keywords()));
                  var o = [e.name]
                    .concat(e.value.value)
                    .filter(Boolean)
                    .map(function (e) {
                      return (
                        (("string" === typeof e || "keyword" === e.type) &&
                          ue(
                            (e = String(e)),
                            n,
                            null,
                            r.fuzzySearchMinScore
                          )) ||
                        e
                      );
                    });
                  return (e.name = null), (e.value.value = o), e;
                })(
                  e,
                  t.find(function (e) {
                    return e.property === r.property;
                  }),
                  r
                );
              var n = ue(e.name, t, "key", r.fuzzySearchMinScore);
              if (!n) return "!" === e.name ? le(e, "!important") : e;
              return n.property
                ? (function (e, t, r) {
                    var n = e.name;
                    if (
                      ((e.name = t.property),
                      e.value && "object" === typeof e.value)
                    ) {
                      var o = t.keywords();
                      if (e.value.size)
                        for (
                          var i = 0, a = void 0;
                          i < e.value.value.length;
                          i++
                        )
                          "!" === (a = e.value.value[i])
                            ? (a = (i ? "" : "${1} ") + "!important")
                            : de(a)
                            ? (a = ue(a.value, o) || ue(a.value, oe) || a)
                            : pe(a) && (a = me(e.name, a, r)),
                            (e.value.value[i] = a);
                      else {
                        var s = ue(
                          (function (e, t) {
                            for (var r = 0, n = 0; r < e.length; r++) {
                              if (-1 === (n = t.indexOf(e[r], n)))
                                return e.slice(r);
                              n++;
                            }
                            return "";
                          })(n, t.key),
                          o
                        );
                        s ||
                          ((s = t.defaultValue) &&
                            -1 === s.indexOf("${") &&
                            (s = "${1:" + s + "}")),
                          s && e.value.add(s);
                      }
                    }
                    return e;
                  })(e, n, r)
                : (function (e, t) {
                    return le(e, t.value);
                  })(e, n);
            })(e, n, r);
          }),
          e
        );
      }
      function le(e, t) {
        return (e.name = null), (e.value = t), e;
      }
      function ue(e, t, r, n) {
        if (!e) return null;
        var o = null,
          i = 0;
        n = n || 0;
        for (var a = 0, s = void 0; a < t.length; a++) {
          var l = J(e, ce((s = t[a]), r));
          if (1 === l) return s;
          l && l >= i && ((i = l), (o = s));
        }
        return i >= n ? o : null;
      }
      function ce(e, t) {
        var r = e && "object" === typeof e ? e[t] : e,
          n = (r || "").match(/^[\w-@]+/);
        return n ? n[0] : r;
      }
      function de(e) {
        return fe(e, "keyword");
      }
      function pe(e) {
        return fe(e, "numeric");
      }
      function fe(e, t) {
        return e && "object" === typeof e && e.type === t;
      }
      function me(e, t, r) {
        return (
          t.unit
            ? (t.unit = r.unitAliases[t.unit] || t.unit)
            : 0 !== t.value &&
              -1 === ie.indexOf(e) &&
              (t.unit = t.value === (0 | t.value) ? r.intUnit : r.floatUnit),
          t
        );
      }
      var ge = {
          "@f": "@font-face {\n\tfont-family: ${1};\n\tsrc: url(${1});\n}",
          "@ff":
            "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}",
          "@i|@import": "@import url(${0});",
          "@kf": "@keyframes ${1:identifier} {\n\t${2}\n}",
          "@m|@media": "@media ${1:screen} {\n\t${0}\n}",
          ac: "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
          ai: "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
          anim: "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
          animdel: "animation-delay:${1:time}",
          animdir:
            "animation-direction:normal|reverse|alternate|alternate-reverse",
          animdur: "animation-duration:${1:0}s",
          animfm: "animation-fill-mode:both|forwards|backwards",
          animic: "animation-iteration-count:1|infinite",
          animn: "animation-name",
          animps: "animation-play-state:running|paused",
          animtf:
            "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
          ap: "appearance:none",
          as: "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
          b: "bottom",
          bd: "border:${1:1px} ${2:solid} ${3:#000}",
          bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}",
          bdbc: "border-bottom-color:${1:#000}",
          bdbi: "border-bottom-image:url(${0})",
          bdbk: "border-break:close",
          bdbli: "border-bottom-left-image:url(${0})|continue",
          bdblrs: "border-bottom-left-radius",
          bdbri: "border-bottom-right-image:url(${0})|continue",
          bdbrrs: "border-bottom-right-radius",
          bdbs: "border-bottom-style",
          bdbw: "border-bottom-width",
          bdc: "border-color:${1:#000}",
          bdci: "border-corner-image:url(${0})|continue",
          bdcl: "border-collapse:collapse|separate",
          bdf: "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
          bdi: "border-image:url(${0})",
          bdl: "border-left:${1:1px} ${2:solid} ${3:#000}",
          bdlc: "border-left-color:${1:#000}",
          bdlen: "border-length",
          bdli: "border-left-image:url(${0})",
          bdls: "border-left-style",
          bdlw: "border-left-width",
          bdr: "border-right:${1:1px} ${2:solid} ${3:#000}",
          bdrc: "border-right-color:${1:#000}",
          bdri: "border-right-image:url(${0})",
          bdrs: "border-radius",
          bdrst: "border-right-style",
          bdrw: "border-right-width",
          bds: "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
          bdsp: "border-spacing",
          bdt: "border-top:${1:1px} ${2:solid} ${3:#000}",
          bdtc: "border-top-color:${1:#000}",
          bdti: "border-top-image:url(${0})",
          bdtli: "border-top-left-image:url(${0})|continue",
          bdtlrs: "border-top-left-radius",
          bdtri: "border-top-right-image:url(${0})|continue",
          bdtrrs: "border-top-right-radius",
          bdts: "border-top-style",
          bdtw: "border-top-width",
          bdw: "border-width",
          bfv: "backface-visibility:hidden|visible",
          bg: "background:${1:#000}",
          bga: "background-attachment:fixed|scroll",
          bgbk: "background-break:bounding-box|each-box|continuous",
          bgc: "background-color:#${1:fff}",
          bgcp: "background-clip:padding-box|border-box|content-box|no-clip",
          bgi: "background-image:url(${0})",
          bgo: "background-origin:padding-box|border-box|content-box",
          bgp: "background-position:${1:0} ${2:0}",
          bgpx: "background-position-x",
          bgpy: "background-position-y",
          bgr: "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
          bgsz: "background-size:contain|cover",
          bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
          bxsz: "box-sizing:border-box|content-box|border-box",
          c: "color:${1:#000}",
          cl: "clear:both|left|right|none",
          cm: "/* ${0} */",
          cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters({$0})",
          coi: "counter-increment",
          colm: "columns",
          colmc: "column-count",
          colmf: "column-fill",
          colmg: "column-gap",
          colmr: "column-rule",
          colmrc: "column-rule-color",
          colmrs: "column-rule-style",
          colmrw: "column-rule-width",
          colms: "column-span",
          colmw: "column-width",
          cor: "counter-reset",
          cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
          cps: "caption-side:top|bottom",
          cur: "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
          d: "display:grid|inline-grid|subgrid|block|none|flex|inline-flex|inline|inline-block|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
          ec: "empty-cells:show|hide",
          f: "font:${1:1em} ${2:sans-serif}",
          fd: "font-display:auto|block|swap|fallback|optional",
          fef: "font-effect:none|engrave|emboss|outline",
          fem: "font-emphasize",
          femp: "font-emphasize-position:before|after",
          fems: "font-emphasize-style:none|accent|dot|circle|disc",
          ff: "font-family:serif|sans-serif|cursive|fantasy|monospace",
          fft: 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
          ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
          ffv: "font-family:Verdana, Geneva, sans-serif",
          fl: "float:left|right|none",
          fs: "font-style:italic|normal|oblique",
          fsm: "font-smoothing:antialiased|subpixel-antialiased|none",
          fst: "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
          fv: "font-variant:normal|small-caps",
          fvs: "font-variation-settings:normal|inherit|initial|unset",
          fw: "font-weight:normal|bold|bolder|lighter",
          fx: "flex",
          fxb: "flex-basis:fill|max-content|min-content|fit-content|content",
          fxd: "flex-direction:row|row-reverse|column|column-reverse",
          fxf: "flex-flow",
          fxg: "flex-grow",
          fxsh: "flex-shrink",
          fxw: "flex-wrap:nowrap|wrap|wrap-reverse",
          fz: "font-size",
          fza: "font-size-adjust",
          gtc: "grid-template-columns:repeat()|minmax()",
          gtr: "grid-template-rows:repeat()|minmax()",
          gta: "grid-template-areas",
          gt: "grid-template",
          gg: "grid-gap",
          gcg: "grid-column-gap",
          grg: "grid-row-gap",
          gac: "grid-auto-columns:auto|minmax()",
          gar: "grid-auto-rows:auto|minmax()",
          gaf: "grid-auto-flow:row|column|dense|inherit|initial|unset",
          gd: "grid",
          gc: "grid-column",
          gcs: "grid-column-start",
          gce: "grid-column-end",
          gr: "grid-row",
          grs: "grid-row-start",
          gre: "grid-row-end",
          ga: "grid-area",
          h: "height",
          jc: "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
          ji: "justify-items:start|end|center|stretch",
          js: "justify-self:start|end|center|stretch",
          l: "left",
          lg: "background-image:linear-gradient(${1})",
          lh: "line-height",
          lis: "list-style",
          lisi: "list-style-image",
          lisp: "list-style-position:inside|outside",
          list: "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
          lts: "letter-spacing:normal",
          m: "margin",
          mah: "max-height",
          mar: "max-resolution",
          maw: "max-width",
          mb: "margin-bottom",
          mih: "min-height",
          mir: "min-resolution",
          miw: "min-width",
          ml: "margin-left",
          mr: "margin-right",
          mt: "margin-top",
          ol: "outline",
          olc: "outline-color:${1:#000}|invert",
          olo: "outline-offset",
          ols: "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
          olw: "outline-width|thin|medium|thick",
          op: "opacity",
          ord: "order",
          ori: "orientation:landscape|portrait",
          orp: "orphans",
          ov: "overflow:hidden|visible|hidden|scroll|auto",
          ovs: "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
          ovx: "overflow-x:hidden|visible|hidden|scroll|auto",
          ovy: "overflow-y:hidden|visible|hidden|scroll|auto",
          p: "padding",
          pb: "padding-bottom",
          pgba: "page-break-after:auto|always|left|right",
          pgbb: "page-break-before:auto|always|left|right",
          pgbi: "page-break-inside:auto|avoid",
          pl: "padding-left",
          pos: "position:relative|absolute|relative|fixed|static",
          pr: "padding-right",
          pt: "padding-top",
          q: "quotes",
          qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
          qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
          r: "right",
          rsz: "resize:none|both|horizontal|vertical",
          t: "top",
          ta: "text-align:left|center|right|justify",
          tal: "text-align-last:left|center|right",
          tbl: "table-layout:fixed",
          td: "text-decoration:none|underline|overline|line-through",
          te: "text-emphasis:none|accent|dot|circle|disc|before|after",
          th: "text-height:auto|font-size|text-size|max-size",
          ti: "text-indent",
          tj: "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
          to: "text-outline:${1:0} ${2:0} ${3:#000}",
          tov: "text-overflow:ellipsis|clip",
          tr: "text-replace",
          trf: "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
          trfo: "transform-origin",
          trfs: "transform-style:preserve-3d",
          trs: "transition:${1:prop} ${2:time}",
          trsde: "transition-delay:${1:time}",
          trsdu: "transition-duration:${1:time}",
          trsp: "transition-property:${1:prop}",
          trstf: "transition-timing-function:${1:fn}",
          tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
          tt: "text-transform:uppercase|lowercase|capitalize|none",
          tw: "text-wrap:none|normal|unrestricted|suppress",
          us: "user-select:none",
          v: "visibility:hidden|visible|collapse",
          va: "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
          w: "width",
          whs: "white-space:nowrap|pre|pre-wrap|pre-line|normal",
          whsc: "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
          wid: "widows",
          wm: "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
          wob: "word-break:normal|keep-all|break-all",
          wos: "word-spacing",
          wow: "word-wrap:none|unrestricted|suppress|break-word|normal",
          z: "z-index",
          zom: "zoom:1",
        },
        he = function (e, t, r) {
          (this.name = e),
            (this.value = null != t ? t : null),
            (this.options = r || {});
        };
      (he.prototype.clone = function () {
        return new he(this.name, this.value, Object.assign({}, this.options));
      }),
        (he.prototype.valueOf = function () {
          return this.name + '="' + this.value + '"';
        });
      var be = function (e, t) {
          var r = this;
          (this.name = e || null),
            (this.value = null),
            (this.repeat = null),
            (this.selfClosing = !1),
            (this.children = []),
            (this.parent = null),
            (this.next = null),
            (this.previous = null),
            (this._attributes = []),
            Array.isArray(t) &&
              t.forEach(function (e) {
                return r.setAttribute(e);
              });
        },
        ve = {
          attributes: { configurable: !0 },
          attributesMap: { configurable: !0 },
          isGroup: { configurable: !0 },
          isTextOnly: { configurable: !0 },
          firstChild: { configurable: !0 },
          lastChild: { configurable: !0 },
          childIndex: { configurable: !0 },
          nextSibling: { configurable: !0 },
          previousSibling: { configurable: !0 },
          classList: { configurable: !0 },
        };
      function ye(e, t) {
        return e instanceof he
          ? e
          : "string" === typeof e
          ? new he(e, t)
          : e && "object" === typeof e
          ? new he(e.name, e.value, e.options)
          : void 0;
      }
      function xe(e) {
        return String(e).trim();
      }
      function we(e, t, r) {
        return e && r.indexOf(e) === t;
      }
      (ve.attributes.get = function () {
        return this._attributes;
      }),
        (ve.attributesMap.get = function () {
          return this.attributes.reduce(function (e, t) {
            return (e[t.name] = t.options.boolean ? t.name : t.value), e;
          }, {});
        }),
        (ve.isGroup.get = function () {
          return !this.name && !this.value && !this._attributes.length;
        }),
        (ve.isTextOnly.get = function () {
          return !this.name && !!this.value && !this._attributes.length;
        }),
        (ve.firstChild.get = function () {
          return this.children[0];
        }),
        (ve.lastChild.get = function () {
          return this.children[this.children.length - 1];
        }),
        (ve.childIndex.get = function () {
          return this.parent ? this.parent.children.indexOf(this) : -1;
        }),
        (ve.nextSibling.get = function () {
          return this.next;
        }),
        (ve.previousSibling.get = function () {
          return this.previous;
        }),
        (ve.classList.get = function () {
          var e = this.getAttribute("class");
          return e && e.value ? e.value.split(/\s+/g).filter(we) : [];
        }),
        (be.prototype.create = function (e, t) {
          return new be(e, t);
        }),
        (be.prototype.setAttribute = function (e, t) {
          var r = ye(e, t),
            n = this.getAttribute(e);
          n ? this.replaceAttribute(n, r) : this._attributes.push(r);
        }),
        (be.prototype.hasAttribute = function (e) {
          return !!this.getAttribute(e);
        }),
        (be.prototype.getAttribute = function (e) {
          "object" === typeof e && (e = e.name);
          for (var t = 0; t < this._attributes.length; t++) {
            var r = this._attributes[t];
            if (r.name === e) return r;
          }
        }),
        (be.prototype.replaceAttribute = function (e, t, r) {
          "string" === typeof e && (e = this.getAttribute(e));
          var n = this._attributes.indexOf(e);
          -1 !== n && this._attributes.splice(n, 1, ye(t, r));
        }),
        (be.prototype.removeAttribute = function (e) {
          "string" === typeof e && (e = this.getAttribute(e));
          var t = this._attributes.indexOf(e);
          -1 !== t && this._attributes.splice(t, 1);
        }),
        (be.prototype.clearAttributes = function () {
          this._attributes.length = 0;
        }),
        (be.prototype.addClass = function (e) {
          (e = xe(e)),
            this.hasAttribute("class")
              ? e &&
                !this.hasClass(e) &&
                this.setAttribute("class", this.classList.concat(e).join(" "))
              : this.setAttribute("class", e);
        }),
        (be.prototype.hasClass = function (e) {
          return -1 !== this.classList.indexOf(xe(e));
        }),
        (be.prototype.removeClass = function (e) {
          (e = xe(e)),
            this.hasClass(e) &&
              this.setAttribute(
                "class",
                this.classList
                  .filter(function (t) {
                    return t !== e;
                  })
                  .join(" ")
              );
        }),
        (be.prototype.appendChild = function (e) {
          this.insertAt(e, this.children.length);
        }),
        (be.prototype.insertBefore = function (e, t) {
          this.insertAt(e, this.children.indexOf(t));
        }),
        (be.prototype.insertAt = function (e, t) {
          if (t < 0 || t > this.children.length)
            throw new Error(
              "Unable to insert node: position is out of child list range"
            );
          var r = this.children[t - 1],
            n = this.children[t];
          e.remove(),
            (e.parent = this),
            this.children.splice(t, 0, e),
            r && ((e.previous = r), (r.next = e)),
            n && ((e.next = n), (n.previous = e));
        }),
        (be.prototype.removeChild = function (e) {
          var t = this.children.indexOf(e);
          -1 !== t &&
            (this.children.splice(t, 1),
            e.previous && (e.previous.next = e.next),
            e.next && (e.next.previous = e.previous),
            (e.parent = e.next = e.previous = null));
        }),
        (be.prototype.remove = function () {
          this.parent && this.parent.removeChild(this);
        }),
        (be.prototype.clone = function (e) {
          var t = new be(this.name);
          return (
            (t.value = this.value),
            (t.selfClosing = this.selfClosing),
            this.repeat && (t.repeat = Object.assign({}, this.repeat)),
            this._attributes.forEach(function (e) {
              return t.setAttribute(e.clone());
            }),
            e &&
              this.children.forEach(function (e) {
                return t.appendChild(e.clone(!0));
              }),
            t
          );
        }),
        (be.prototype.walk = function (e, t) {
          t = t || 0;
          for (var r = this.firstChild; r; ) {
            var n = r.next;
            if (!1 === e(r, t) || !1 === r.walk(e, t + 1)) return !1;
            r = n;
          }
        }),
        (be.prototype.use = function (e) {
          for (var t = arguments, r = [this], n = 1; n < arguments.length; n++)
            r.push(t[n]);
          return e.apply(null, r), this;
        }),
        (be.prototype.toString = function () {
          var e = this,
            t = this.attributes.map(function (t) {
              var r = (t = e.getAttribute(t.name)).options,
                n = (r && r.implied ? "!" : "") + (t.name || "");
              return (
                r && r.boolean
                  ? (n += ".")
                  : null != t.value && (n += '="' + t.value + '"'),
                n
              );
            }),
            r = "" + (this.name || "");
          return (
            t.length && (r += "[" + t.join(" ") + "]"),
            null != this.value && (r += "{" + this.value + "}"),
            this.selfClosing && (r += "/"),
            this.repeat &&
              ((r += "*" + (this.repeat.count ? this.repeat.count : "")),
              null != this.repeat.value && (r += "@" + this.repeat.value)),
            r
          );
        }),
        Object.defineProperties(be.prototype, ve);
      var ke = function () {
          (this.type = "css-value"), (this.value = []);
        },
        Ce = { size: { configurable: !0 } };
      (Ce.size.get = function () {
        return this.value.length;
      }),
        (ke.prototype.add = function (e) {
          this.value.push(e);
        }),
        (ke.prototype.has = function (e) {
          return -1 !== this.value.indexOf(e);
        }),
        (ke.prototype.toString = function () {
          return this.value.join(" ");
        }),
        Object.defineProperties(ke.prototype, Ce);
      function $e(e) {
        if (35 === e.peek()) {
          (e.start = e.pos), e.next(), e.eat(116) || e.eatWhile(je);
          var t = e.current();
          if (((e.start = e.pos), e.eat(46) && !e.eatWhile(S)))
            throw e.error("Unexpected character for alpha value of color");
          return new Ae(t, e.current());
        }
      }
      var Ae = function (e, t) {
        (this.type = "color"),
          (this.raw = e),
          (this.alpha = Number(null != t && "" !== t ? t : 1));
        var r = 0,
          n = 0,
          o = 0;
        if ("t" === (e = e.slice(1))) this.alpha = 0;
        else
          switch (e.length) {
            case 0:
              break;
            case 1:
              r = n = o = e + e;
              break;
            case 2:
              r = n = o = e;
              break;
            case 3:
              (r = e[0] + e[0]), (n = e[1] + e[1]), (o = e[2] + e[2]);
              break;
            default:
              (r = (e += e).slice(0, 2)),
                (n = e.slice(2, 4)),
                (o = e.slice(4, 6));
          }
        (this.r = parseInt(r, 16)),
          (this.g = parseInt(n, 16)),
          (this.b = parseInt(o, 16));
      };
      function je(e) {
        return S(e) || E(e, 65, 70);
      }
      function Oe(e) {
        return !(e % 17);
      }
      function Se(e) {
        return (e >> 4).toString(16);
      }
      function Ee(e) {
        return (function (e, t) {
          for (; e.length < t; ) e = "0" + e;
          return e;
        })(e.toString(16), 2);
      }
      function Te(e) {
        return S(e) || _e(e);
      }
      function _e(e) {
        return 95 === e || E(e);
      }
      (Ae.prototype.toHex = function (e) {
        var t = e && Oe(this.r) && Oe(this.g) && Oe(this.b) ? Se : Ee;
        return "#" + t(this.r) + t(this.g) + t(this.b);
      }),
        (Ae.prototype.toRGB = function () {
          var e = [this.r, this.g, this.b];
          return (
            1 !== this.alpha &&
              e.push(this.alpha.toFixed(8).replace(/\.?0+$/, "")),
            (3 === e.length ? "rgb" : "rgba") + "(" + e.join(", ") + ")"
          );
        }),
        (Ae.prototype.toString = function (e) {
          return this.r || this.g || this.b || this.alpha
            ? 1 === this.alpha
              ? this.toHex(e)
              : this.toRGB()
            : "transparent";
        });
      function ze(e) {
        if (
          ((e.start = e.pos),
          (function (e) {
            var t = e.pos,
              r = (e.eat(45), e.pos);
            e.eatWhile(S);
            var n = e.pos;
            e.eat(46) && !e.eatWhile(S) && (e.pos = n);
            e.pos === r && (e.pos = t);
            return e.pos !== t;
          })(e))
        ) {
          var t = e.current();
          return (
            (e.start = e.pos),
            e.eat(37) || e.eatWhile(_e),
            new qe(t, e.current())
          );
        }
      }
      var qe = function (e, t) {
        (this.type = "numeric"),
          (this.value = Number(e)),
          (this.unit = t || "");
      };
      qe.prototype.toString = function () {
        return "" + this.value + this.unit;
      };
      function Le(e, t) {
        return (
          (e.start = e.pos),
          e.eat(36) || e.eat(64)
            ? e.eatWhile(Re)
            : t
            ? e.eatWhile(_e)
            : e.eatWhile(Me),
          e.start !== e.pos ? new Ne(e.current()) : null
        );
      }
      var Ne = function (e) {
        (this.type = "keyword"), (this.value = e);
      };
      function Me(e) {
        return Te(e) || 45 === e;
      }
      function Re(e) {
        return 45 === e || Te(e);
      }
      Ne.prototype.toString = function () {
        return this.value;
      };
      var Ie = { throws: !0 };
      function De(e) {
        if (j(e, Ie)) return new We(e.current());
      }
      var We = function (e) {
        (this.type = "string"), (this.value = e);
      };
      We.prototype.toString = function () {
        return this.value;
      };
      function Pe(e) {
        if (!e.eat(40)) return null;
        for (var t, r = []; !e.eof(); )
          if ((t = Ue(e))) r.push(t);
          else {
            if ((e.eatWhile(_), e.eat(41))) break;
            if (!e.eat(44)) throw e.error("Expected , or )");
          }
        return r;
      }
      function Ue(e) {
        for (
          var t, r = new ke();
          !e.eof() && (e.eatWhile(_), (t = ze(e) || $e(e) || De(e) || Fe(e)));

        )
          r.add(t);
        return r.size ? r : null;
      }
      function Fe(e) {
        var t = Le(e);
        if (t) {
          var r = Pe(e);
          return r ? new Be(t.toString(), r) : t;
        }
      }
      var Be = function (e, t) {
        (this.type = "function"), (this.name = e), (this.args = t || []);
      };
      Be.prototype.toString = function () {
        return this.name + "(" + this.args.join(", ") + ")";
      };
      function He(e) {
        return (
          (e.start = e.pos),
          e.eatWhile(Ge),
          e.eatWhile(Ye),
          e.start !== e.pos ? e.current() : null
        );
      }
      function Ke(e) {
        for (
          var t, r = new ke();
          !e.eof() &&
          (e.eat(58),
          (t = ze(e) || $e(e))
            ? t.unit || e.eat(45)
            : (e.eat(45), (t = Le(e, !0))),
          t);

        )
          r.add(t);
        return r;
      }
      function Ye(e) {
        return _e(e);
      }
      function Ge(e) {
        return 64 === e || 36 === e || 33 === e;
      }
      var Ve = function (e, t) {
          (this.key = e), (this.value = t);
        },
        Je = function (e) {
          (this._string = new Map()),
            (this._regexp = new Map()),
            (this._disabled = !1),
            this.load(e);
        },
        Xe = { disabled: { configurable: !0 } };
      (Xe.disabled.get = function () {
        return this._disabled;
      }),
        (Je.prototype.disable = function () {
          this._disabled = !0;
        }),
        (Je.prototype.enable = function () {
          this._disabled = !1;
        }),
        (Je.prototype.set = function (e, t) {
          var r = this;
          if ("string" === typeof e)
            e.split("|").forEach(function (e) {
              return r._string.set(e, new Ve(e, t));
            });
          else {
            if (!(e instanceof RegExp))
              throw new Error("Unknow snippet key: " + e);
            this._regexp.set(e, new Ve(e, t));
          }
          return this;
        }),
        (Je.prototype.get = function (e) {
          if (!this.disabled) {
            if (this._string.has(e)) return this._string.get(e);
            for (
              var t = Array.from(this._regexp.keys()), r = 0, n = t.length;
              r < n;
              r++
            )
              if (t[r].test(e)) return this._regexp.get(t[r]);
          }
        }),
        (Je.prototype.load = function (e) {
          var t = this;
          this.reset(),
            e instanceof Map
              ? e.forEach(function (e, r) {
                  return t.set(r, e);
                })
              : e &&
                "object" === typeof e &&
                Object.keys(e).forEach(function (r) {
                  return t.set(r, e[r]);
                });
        }),
        (Je.prototype.reset = function () {
          this._string.clear(), this._regexp.clear();
        }),
        (Je.prototype.values = function () {
          if (this.disabled) return [];
          var e = Array.from(this._string.values()),
            t = Array.from(this._regexp.values());
          return e.concat(t);
        }),
        Object.defineProperties(Je.prototype, Xe);
      var Ze = function (e) {
        var t = this;
        (this._registry = []),
          Array.isArray(e)
            ? e.forEach(function (e, r) {
                return t.add(r, e);
              })
            : "object" === typeof e && this.add(e);
      };
      (Ze.prototype.get = function (e) {
        for (var t = 0; t < this._registry.length; t++) {
          var r = this._registry[t];
          if (r.level === e) return r.store;
        }
      }),
        (Ze.prototype.add = function (e, t) {
          null != e && "object" === typeof e && ((t = e), (e = 0));
          var r = new Je(t);
          return (
            this.remove(e),
            this._registry.push({ level: e, store: r }),
            this._registry.sort(function (e, t) {
              return t.level - e.level;
            }),
            r
          );
        }),
        (Ze.prototype.remove = function (e) {
          this._registry = this._registry.filter(function (t) {
            return t.level !== e && t.store !== e;
          });
        }),
        (Ze.prototype.resolve = function (e) {
          for (var t = 0; t < this._registry.length; t++) {
            var r = this._registry[t].store.get(e);
            if (r) return r;
          }
        }),
        (Ze.prototype.all = function (e) {
          e = e || {};
          var t = new Map(),
            r = function (r) {
              var n = r.key instanceof RegExp ? "regexp" : "string";
              (e.type && e.type !== n) || t.has(r.key) || t.set(r.key, r);
            };
          return (
            this._registry.forEach(function (e) {
              e.store.values().forEach(r);
            }),
            Array.from(t.values())
          );
        }),
        (Ze.prototype.clear = function () {
          this._registry.length = 0;
        });
      var Qe = {
          indent: "\t",
          tagCase: "",
          attributeCase: "",
          attributeQuotes: "double",
          format: !0,
          formatSkip: ["html"],
          formatForce: ["body"],
          inlineBreak: 3,
          compactBooleanAttributes: !1,
          booleanAttributes: [
            "contenteditable",
            "seamless",
            "async",
            "autofocus",
            "autoplay",
            "checked",
            "controls",
            "defer",
            "disabled",
            "formnovalidate",
            "hidden",
            "ismap",
            "loop",
            "multiple",
            "muted",
            "novalidate",
            "readonly",
            "required",
            "reversed",
            "selected",
            "typemustmatch",
          ],
          selfClosingStyle: "html",
          inlineElements: [
            "a",
            "abbr",
            "acronym",
            "applet",
            "b",
            "basefont",
            "bdo",
            "big",
            "br",
            "button",
            "cite",
            "code",
            "del",
            "dfn",
            "em",
            "font",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "map",
            "object",
            "q",
            "s",
            "samp",
            "select",
            "small",
            "span",
            "strike",
            "strong",
            "sub",
            "sup",
            "textarea",
            "tt",
            "u",
            "var",
          ],
        },
        et = function (e) {
          (this.options = Object.assign({}, Qe, e)),
            (this.quoteChar =
              "single" === this.options.attributeQuotes ? "'" : '"');
        };
      function tt(e, t) {
        return t ? ("upper" === t ? e.toUpperCase() : e.toLowerCase()) : e;
      }
      (et.prototype.get = function (e) {
        return this.options[e];
      }),
        (et.prototype.quote = function (e) {
          return "" + this.quoteChar + (null != e ? e : "") + this.quoteChar;
        }),
        (et.prototype.name = function (e) {
          return tt(e, this.options.tagCase);
        }),
        (et.prototype.attribute = function (e) {
          return tt(e, this.options.attributeCase);
        }),
        (et.prototype.isBooleanAttribute = function (e) {
          return (
            e.options.boolean ||
            -1 !==
              this.get("booleanAttributes").indexOf(
                (e.name || "").toLowerCase()
              )
          );
        }),
        (et.prototype.selfClose = function () {
          switch (this.options.selfClosingStyle) {
            case "xhtml":
              return " /";
            case "xml":
              return "/";
            default:
              return "";
          }
        }),
        (et.prototype.indent = function (e) {
          e = e || 0;
          for (var t = ""; e--; ) t += this.options.indent;
          return t;
        }),
        (et.prototype.isInline = function (e) {
          return "string" === typeof e
            ? -1 !== this.get("inlineElements").indexOf(e.toLowerCase())
            : null != e.name
            ? this.isInline(e.name)
            : e.isTextOnly;
        }),
        (et.prototype.field = function (e, t) {
          return this.options.field(e, t);
        });
      var rt = {
        field: function (e, t) {
          return "${" + e + (t ? ":" + t : "") + "}";
        },
      };
      function nt(e) {
        return (
          e ||
            console.error(
              "emmet-monaco-es: 'monaco' should be either declared on window or passed as first parameter"
            ),
          !!e
        );
      }
      function ot(e, t, r, n) {
        var o = "html" === t;
        "string" === typeof t && (t = [t]);
        var i = t.map(function (t) {
          return e.languages.registerCompletionItemProvider(t, {
            triggerCharacters: ">+-^*()#.[]$@{}=!:%".split(""),
            provideCompletionItems: function (t, i) {
              var a = i.column,
                s = i.lineNumber;
              if (!(1 === a || a <= t.getLineFirstNonWhitespaceColumn(s))) {
                for (
                  var l,
                    u =
                      t._tokens.tokenizationSupport ||
                      t._tokenization._tokenizationSupport,
                    c = u.getInitialState(),
                    d = 1;
                  d <= s;
                  d++
                )
                  c = (l = u.tokenize(t.getLineContent(d), c, 0)).endState;
                var p,
                  f = l.tokens;
                for (d = f.length - 1; d >= 0; d--)
                  if (a - 1 > f[d].offset) {
                    r(f, d) &&
                      (p = n(
                        t.getLineContent(s).substring(f[d].offset, a - 1)
                      ));
                    break;
                  }
                if (p)
                  return {
                    items: p.map(function (t) {
                      var r = t.emmetText,
                        n = t.expandText
                          .replace(/([^\\])\$\{\d+\}/g, "$1")
                          .replace(/\$\{\d+:([^\}]+)\}/g, "$1"),
                        i = o ? r : n;
                      return {
                        kind: e.languages.CompletionItemKind.Property,
                        label: i,
                        sortText: "0" + i,
                        insertText: n,
                        range: new e.Range(s, a - r.length, s, a),
                        detail: "Emmet Abbreviation",
                        documentation: n,
                      };
                    }),
                    isIncomplete: !0,
                  };
              }
            },
          });
        });
        return function () {
          i.forEach(function (e) {
            return e.dispose();
          });
        };
      }
      var it = C(C({}, rt), { snippets: new Ze(ge), profile: new et() });
      function at(e) {
        return G(
          (function (e) {
            for (var t = new be(), r = new $(e); !r.eof(); ) {
              var n = new be(He(r));
              n.value = Ke(r);
              var o = Pe(r);
              if (o)
                for (var i = 0; i < o.length; i++)
                  n.setAttribute(String(i), o[i]);
              if ((r.eat(33) && n.value.add("!"), t.appendChild(n), !r.eat(43)))
                break;
            }
            if (!r.eof()) throw r.error("Unexpected character");
            return t;
          })(e).use(se, it.snippets),
          it.profile,
          it
        );
      }
      function st(e) {
        if (e.eat(42))
          return (
            (e.start = e.pos), { count: e.eatWhile(S) ? +e.current() : null }
          );
      }
      var lt = { throws: !0 };
      function ut(e) {
        if (j(e, lt)) return e.current().slice(1, -1);
      }
      function ct(e) {
        var t = e.pos;
        if (e.eat(123)) {
          for (var r, n = 1, o = "", i = e.pos; !e.eof(); )
            if (123 === (r = e.next())) n++;
            else if (125 === r) {
              if (!--n) return (e.start = t), o + e.substring(i, e.pos - 1);
            } else
              92 === r &&
                ((123 !== (r = e.next()) && 125 !== r) ||
                  ((o += e.substring(i, e.pos - 2) + String.fromCharCode(r)),
                  (i = e.pos)));
          throw (
            ((e.pos = t),
            e.error(
              "Unable to find closing " +
                String.fromCharCode(125) +
                " for text start"
            ))
          );
        }
        return null;
      }
      var dt = /^\!?[\w\-:\$@]+\.?$|^\!?\[[\w\-:\$@]+\]\.?$/;
      function pt(e) {
        if (!e.eat(91)) return null;
        for (var t, r, n = []; !e.eof(); ) {
          if ((e.eatWhile(_), e.eat(93))) return n;
          if (null != (t = ut(e))) n.push({ name: null, value: t });
          else {
            if (!mt(e)) throw e.error("Expected attribute name");
            "[" === (t = e.current())[0] &&
              93 === e.peek() &&
              (e.next(), (t = e.current())),
              dt.test(t)
                ? ((r = ft(t)),
                  n.push(r),
                  e.eat(61) &&
                    (null != (t = ut(e))
                      ? (r.value = t)
                      : null != (t = ct(e))
                      ? ((r.value = t),
                        (r.options = { before: "{", after: "}" }))
                      : mt(e) && (r.value = e.current())))
                : n.push({ name: null, value: t });
          }
        }
        throw e.error('Expected closing "]" brace');
      }
      function ft(e) {
        var t = {};
        33 === e.charCodeAt(0) && ((e = e.slice(1)), (t.implied = !0)),
          46 === e.charCodeAt(e.length - 1) &&
            ((e = e.slice(0, e.length - 1)), (t.boolean = !0));
        var r = { name: e };
        return Object.keys(t).length && (r.options = t), r;
      }
      function mt(e) {
        var t = e.pos;
        if (e.eatWhile(gt)) return (e.start = t), !0;
      }
      function gt(e) {
        return !z(e) && !O(e) && 93 !== e && 61 !== e;
      }
      function ht(e) {
        for (var t, r = e.pos, n = new be(bt(e)); !e.eof(); )
          if (e.eat(46)) n.addClass(bt(e));
          else if (e.eat(35)) n.setAttribute("id", bt(e));
          else {
            if (e.eat(47)) {
              if (n.isGroup)
                throw (
                  (e.backUp(1), e.error("Unexpected self-closing indicator"))
                );
              (n.selfClosing = !0), (t = st(e)) && (n.repeat = t);
              break;
            }
            if ((t = pt(e)))
              for (var o = 0, i = t.length; o < i; o++) n.setAttribute(t[o]);
            else if (null !== (t = ct(e))) n.value = t;
            else {
              if (!(t = st(e))) break;
              n.repeat = t;
            }
          }
        if (r === e.pos)
          throw e.error(
            "Unable to consume abbreviation node, unexpected " + e.peek()
          );
        return n;
      }
      function bt(e) {
        return (e.start = e.pos), e.eatWhile(vt), e.current();
      }
      function vt(e) {
        return (
          T(e) ||
          45 === e ||
          58 === e ||
          36 === e ||
          64 === e ||
          33 === e ||
          95 === e ||
          37 === e
        );
      }
      function yt(e) {
        var t = (function (e) {
          for (
            var t, r = new $(e.trim()), n = new be(), o = n, i = [];
            !r.eof();

          )
            if (40 !== (t = r.peek()))
              if (41 !== t) {
                var a = ht(r);
                if ((o.appendChild(a), r.eof())) break;
                switch (r.peek()) {
                  case 43:
                    r.next();
                    continue;
                  case 62:
                    r.next(), (o = a);
                    continue;
                  case 94:
                    for (; r.eat(94); ) o = o.parent || o;
                    continue;
                }
              } else {
                var s = i.pop();
                if (!s) throw r.error('Unexpected ")" group end');
                var l = s[0];
                if (((o = s[1]), r.next(), (l.repeat = st(r))))
                  o.appendChild(l);
                else for (; l.firstChild; ) o.appendChild(l.firstChild);
                r.eat(43);
              }
            else {
              var u = new be();
              i.push([u, o, r.pos]), (o = u), r.next();
            }
          if (i.length)
            throw ((r.pos = i.pop()[2]), r.error("Expected group close"));
          return n;
        })(e);
        return t.walk(xt), t;
      }
      function xt(e) {
        if (e.repeat && e.repeat.count) {
          for (
            var t = e.parent, r = t.children.indexOf(e), n = 0;
            n < e.repeat.count;
            n++
          ) {
            var o = e.clone(!0);
            if (((o.repeat.value = n + 1), o.walk(xt), o.isGroup))
              for (; o.children.length > 0; )
                (o.firstChild.repeat = o.repeat), t.insertAt(o.firstChild, r++);
            else t.insertAt(o, r++);
          }
          e.parent.removeChild(e);
        }
      }
      function wt(e) {
        if (e.eat(42))
          return (
            (e.start = e.pos), { count: e.eatWhile(S) ? +e.current() : null }
          );
      }
      var kt = { throws: !0 };
      function Ct(e) {
        if (j(e, kt)) return e.current().slice(1, -1);
      }
      function $t(e) {
        var t = e.pos;
        if (e.eat(123)) {
          for (var r, n = 1, o = "", i = e.pos; !e.eof(); )
            if (123 === (r = e.next())) n++;
            else if (125 === r) {
              if (!--n) return (e.start = t), o + e.substring(i, e.pos - 1);
            } else
              92 === r &&
                ((123 !== (r = e.next()) && 125 !== r) ||
                  ((o += e.substring(i, e.pos - 2) + String.fromCharCode(r)),
                  (i = e.pos)));
          throw (
            ((e.pos = t),
            e.error(
              "Unable to find closing " +
                String.fromCharCode(125) +
                " for text start"
            ))
          );
        }
        return null;
      }
      var At = /^\!?[\w\-:\$@]+\.?$/;
      function jt(e) {
        if (!e.eat(91)) return null;
        for (var t, r, n = []; !e.eof(); ) {
          if ((e.eatWhile(_), e.eat(93))) return n;
          if (null != (t = Ct(e))) n.push({ name: null, value: t });
          else {
            if (!St(e)) throw e.error("Expected attribute name");
            (t = e.current()),
              At.test(t)
                ? ((r = Ot(t)),
                  n.push(r),
                  e.eat(61) &&
                    (null != (t = Ct(e))
                      ? (r.value = t)
                      : null != (t = $t(e))
                      ? ((r.value = t),
                        (r.options = { before: "{", after: "}" }))
                      : St(e) && (r.value = e.current())))
                : n.push({ name: null, value: t });
          }
        }
        throw e.error('Expected closing "]" brace');
      }
      function Ot(e) {
        var t = {};
        33 === e.charCodeAt(0) && ((e = e.slice(1)), (t.implied = !0)),
          46 === e.charCodeAt(e.length - 1) &&
            ((e = e.slice(0, e.length - 1)), (t.boolean = !0));
        var r = { name: e };
        return Object.keys(t).length && (r.options = t), r;
      }
      function St(e) {
        var t = e.pos;
        if (e.eatWhile(Et)) return (e.start = t), !0;
      }
      function Et(e) {
        return !z(e) && !O(e) && 91 !== e && 93 !== e && 61 !== e;
      }
      function Tt(e) {
        for (var t, r = e.pos, n = new be(_t(e)); !e.eof(); )
          if (e.eat(46)) n.addClass(_t(e));
          else if (e.eat(35)) n.setAttribute("id", _t(e));
          else {
            if (e.eat(47)) {
              if (n.isGroup)
                throw (
                  (e.backUp(1), e.error("Unexpected self-closing indicator"))
                );
              (n.selfClosing = !0), (t = wt(e)) && (n.repeat = t);
              break;
            }
            if ((t = jt(e)))
              for (var o = 0, i = t.length; o < i; o++) n.setAttribute(t[o]);
            else if (null !== (t = $t(e))) n.value = t;
            else {
              if (!(t = wt(e))) break;
              n.repeat = t;
            }
          }
        if (r === e.pos)
          throw e.error(
            "Unable to consume abbreviation node, unexpected " + e.peek()
          );
        return n;
      }
      function _t(e) {
        return (e.start = e.pos), e.eatWhile(zt), e.current();
      }
      function zt(e) {
        return (
          T(e) ||
          45 === e ||
          58 === e ||
          36 === e ||
          64 === e ||
          33 === e ||
          95 === e ||
          37 === e
        );
      }
      function qt(e) {
        var t = (function (e) {
          for (
            var t, r = new $(e.trim()), n = new be(), o = n, i = [];
            !r.eof();

          )
            if (40 !== (t = r.peek()))
              if (41 !== t) {
                var a = Tt(r);
                if ((o.appendChild(a), r.eof())) break;
                switch (r.peek()) {
                  case 43:
                    r.next();
                    continue;
                  case 62:
                    r.next(), (o = a);
                    continue;
                  case 94:
                    for (; r.eat(94); ) o = o.parent || o;
                    continue;
                }
              } else {
                var s = i.pop();
                if (!s) throw r.error('Unexpected ")" group end');
                var l = s[0];
                if (((o = s[1]), r.next(), (l.repeat = wt(r))))
                  o.appendChild(l);
                else for (; l.firstChild; ) o.appendChild(l.firstChild);
                r.eat(43);
              }
            else {
              var u = new be();
              i.push([u, o, r.pos]), (o = u), r.next();
            }
          if (i.length)
            throw ((r.pos = i.pop()[2]), r.error("Expected group close"));
          return n;
        })(e);
        return t.walk(Lt), t;
      }
      function Lt(e) {
        if (e.repeat && e.repeat.count) {
          for (
            var t = e.parent, r = t.children.indexOf(e), n = 0;
            n < e.repeat.count;
            n++
          ) {
            var o = e.clone(!0);
            if (((o.repeat.value = n + 1), o.walk(Lt), o.isGroup))
              for (; o.children.length > 0; )
                (o.firstChild.repeat = o.repeat), t.insertAt(o.firstChild, r++);
            else t.insertAt(o, r++);
          }
          e.parent.removeChild(e);
        }
      }
      var Nt = function (e, t) {
        return (
          e.walk(function (e) {
            return (function (e, t) {
              var r = new Set();
              !(function e(n) {
                var o = t.resolve(n.name);
                if (o && !r.has(o)) {
                  if ("function" === typeof o.value) return o.value(n, t, e);
                  var i = qt(o.value);
                  r.add(o), i.walk(e), r.delete(o);
                  var a = (function (e) {
                    for (; e.children.length; )
                      e = e.children[e.children.length - 1];
                    return e;
                  })(i);
                  for (
                    !(function (e, t) {
                      (t.name = e.name), e.selfClosing && (t.selfClosing = !0);
                      null != e.value && (t.value = e.value);
                      e.repeat && (t.repeat = Object.assign({}, e.repeat));
                      (function (e, t) {
                        !(function (e, t) {
                          for (var r = e.classList, n = 0; n < r.length; n++)
                            t.addClass(r[n]);
                        })(e, t);
                        for (
                          var r = new Map(), n = e.attributes, o = 0;
                          o < n.length;
                          o++
                        )
                          r.set(n[o].name, n[o].clone());
                        n = t.attributes.slice();
                        for (
                          var i = 0, a = void 0, s = void 0;
                          i < n.length;
                          i++
                        )
                          (a = n[i]),
                            r.has(a.name)
                              ? (((s = r.get(a.name)).value = a.value),
                                s.options.implied && (s.options.implied = !1))
                              : r.set(a.name, a),
                            t.removeAttribute(a);
                        for (
                          var l = Array.from(r.values()), u = 0;
                          u < l.length;
                          u++
                        )
                          t.setAttribute(l[u]);
                      })(e, t);
                    })(a, n);
                    i.firstChild;

                  )
                    n.parent.insertBefore(i.firstChild, n);
                  a.parent.insertBefore(n, a), a.remove();
                }
              })(e);
            })(e, t);
          }),
          e
        );
      };
      var Mt = /^(.*?)([A-Z_]+)(.*?)$/;
      function Rt(e, t) {
        if (null == e) return e;
        for (
          var r,
            n,
            o = [],
            i = function (e, r, n, o) {
              return null != t[n] ? r + t[n] + o : "";
            },
            a = "",
            s = 0,
            l = 0;
          l < e.length;

        )
          91 === (r = e.charCodeAt(l))
            ? o.push(l)
            : 93 === r &&
              ((n = o.pop()),
              o.length ||
                ((a += e.slice(s, n) + e.slice(n + 1, l).replace(Mt, i)),
                (s = l + 1))),
            l++;
        return a + e.slice(s);
      }
      function It(e) {
        return (e || "").split(/\r\n|\r|\n/g);
      }
      function Dt(e) {
        return e.parent.firstChild === e;
      }
      function Wt(e) {
        return e && !e.parent;
      }
      function Pt(e) {
        return e.isTextOnly && !!e.children.length;
      }
      function Ut(e) {
        var t = e.node;
        if (Pt(t)) {
          var r = q(t.value),
            n = r.fields.reduce(function (e, t) {
              return !e || t.index < e.index ? t : e;
            }, null);
          if (n) {
            var o = (function (e, t) {
              var r = e.fields.indexOf(t),
                n = new e.constructor(
                  e.string.slice(0, t.location),
                  e.fields.slice(0, r)
                ),
                o = new e.constructor(
                  e.string.slice(t.location + t.length),
                  e.fields.slice(r + 1)
                );
              return [n, o];
            })(r, n);
            (e.open = e.renderFields(o[0])), (e.close = e.renderFields(o[1]));
          } else e.text = e.renderFields(r);
          return !0;
        }
        return !1;
      }
      var Ft = {
        enabled: !1,
        trigger: ["id", "class"],
        before: "",
        after: "\n\x3c!-- /[#ID][.CLASS] --\x3e",
      };
      function Bt(e, t) {
        return (
          !!t.get("format") &&
          (!e.parent.isTextOnly ||
            1 !== e.parent.children.length ||
            !q(e.parent.value).fields.length) &&
          (!Ht(e, t) ||
            (function (e, t) {
              if (!Ht(e, t)) return !1;
              if (Pt(e)) return !0;
              if (0 === e.childIndex) {
                for (var r = e; (r = r.nextSibling); ) if (!Ht(r, t)) return !0;
              } else if (!Ht(e.previousSibling, t)) return !0;
              if (t.get("inlineBreak")) {
                for (var n = 1, o = e, i = e; Kt((o = o.previousSibling), t); )
                  n++;
                for (; Kt((i = i.nextSibling), t); ) n++;
                if (n >= t.get("inlineBreak")) return !0;
              }
              for (var a = 0, s = e.children.length; a < s; a++)
                if (Bt(e.children[a], t)) return !0;
              return !1;
            })(e, t))
        );
      }
      function Ht(e, t) {
        return (e && e.isTextOnly) || Kt(e, t);
      }
      function Kt(e, t) {
        return e && t.isInline(e);
      }
      var Yt = /^id$/i,
        Gt = /^class$/i,
        Vt = {
          primary: function (e) {
            return e.join("");
          },
          secondary: function (e) {
            return e
              .map(function (e) {
                return e.isBoolean ? e.name : e.name + "=" + e.value;
              })
              .join(", ");
          },
        },
        Jt = { open: null, close: null, omitName: /^div$/i, attributes: Vt };
      function Xt(e, t, r) {
        r = Object.assign({}, Jt, r);
        var n = e.node;
        if (
          ((e.indent = t.indent(
            (function (e) {
              var t = e.parent.isTextOnly ? -2 : -1,
                r = e;
              for (; (r = r.parent); ) t++;
              return t < 0 ? 0 : t;
            })(n)
          )),
          (e.newline = "\n"),
          (Wt(n.parent) && Dt(n)) || (e.beforeOpen = e.newline + e.indent),
          n.name)
        ) {
          var o = Object.assign(
            {
              NAME: t.name(n.name),
              SELF_CLOSE: n.selfClosing ? r.selfClose : null,
            },
            (function (e, t, r) {
              r = Object.assign({}, Vt, r);
              var n = [],
                o = [];
              return (
                e.node.attributes.forEach(function (r) {
                  if (r.options.implied && null == r.value) return null;
                  var i = t.attribute(r.name),
                    a = e.renderFields(r.value);
                  if (Yt.test(i)) a && n.push("#" + a);
                  else if (Gt.test(i))
                    a && n.push("." + a.replace(/\s+/g, "."));
                  else {
                    var s =
                      null == r.value &&
                      (r.options.boolean ||
                        -1 !==
                          t.get("booleanAttributes").indexOf(i.toLowerCase()));
                    o.push({ name: i, value: a, isBoolean: s });
                  }
                }),
                {
                  PRIMARY_ATTRS: r.primary(n) || null,
                  SECONDARY_ATTRS: r.secondary(o) || null,
                }
              );
            })(e, t, r.attributes)
          );
          r.omitName &&
            r.omitName.test(o.NAME) &&
            o.PRIMARY_ATTRS &&
            (o.NAME = null),
            null != r.open && (e.open = Rt(r.open, o)),
            null != r.close && (e.close = Rt(r.close, o));
        }
        return e;
      }
      var Zt = /\n|\r/;
      var Qt = /\n|\r/,
        er = {
          none: "[ SECONDARY_ATTRS]",
          round: "[(SECONDARY_ATTRS)]",
          curly: "[{SECONDARY_ATTRS}]",
          square: "[[SECONDARY_ATTRS]",
        };
      var tr = /\n|\r/;
      var rr = {
        html: function (e, t, r) {
          var n = (function (e) {
            var t = Object.assign({}, e && e.format);
            return (t.comment = Object.assign({}, Ft, t.comment)), t;
          })((r = Object.assign({}, r)));
          return U(e, r.field, function (e) {
            if (
              !Ut(
                (e = (function (e, t) {
                  var r = e.node;
                  if (Bt(r, t)) {
                    (e.indent = t.indent(
                      (function (e, t) {
                        var r = t.get("formatSkip") || [],
                          n = e.parent.isTextOnly ? -2 : -1,
                          o = e;
                        for (; (o = o.parent); )
                          -1 === r.indexOf((o.name || "").toLowerCase()) && n++;
                        return n < 0 ? 0 : n;
                      })(r, t)
                    )),
                      (e.newline = "\n");
                    var n = e.newline + e.indent;
                    (Wt(r.parent) && Dt(r)) ||
                      ((e.beforeOpen = n), r.isTextOnly && (e.beforeText = n)),
                      (function (e, t) {
                        var r = (e.name || "").toLowerCase();
                        if (-1 !== t.get("formatForce").indexOf(r)) return !0;
                        for (var n = 0; n < e.children.length; n++)
                          if (Bt(e.children[n], t)) return !0;
                        return !1;
                      })(r, t) &&
                        (r.isTextOnly || (e.beforeText = n + t.indent(1)),
                        (e.beforeClose = n));
                  }
                  return e;
                })(e, t))
              )
            ) {
              var r = e.node;
              if (r.name) {
                var o = t.name(r.name),
                  i = (function (e, t) {
                    return e.node.attributes
                      .map(function (r) {
                        if (r.options.implied && null == r.value) return null;
                        var n = t.attribute(r.name),
                          o = null;
                        if (
                          r.options.boolean ||
                          -1 !==
                            t.get("booleanAttributes").indexOf(n.toLowerCase())
                        ) {
                          if (
                            t.get("compactBooleanAttributes") &&
                            null == r.value
                          )
                            return " " + n;
                          null == r.value && (o = n);
                        }
                        return (
                          null == o && (o = e.renderFields(r.value)),
                          r.options.before && r.options.after
                            ? " " +
                              n +
                              "=" +
                              (r.options.before + o + r.options.after)
                            : " " + n + "=" + t.quote(o)
                        );
                      })
                      .join("");
                  })(e, t);
                (e.open =
                  "<" + o + i + (r.selfClosing ? t.selfClose() : "") + ">"),
                  r.selfClosing || (e.close = "</" + o + ">"),
                  (function (e, t) {
                    var r = e.node;
                    if (!t.enabled || !t.trigger || !r.name) return;
                    for (
                      var n = e.node.attributes.reduce(function (e, t) {
                          return (
                            t.name &&
                              null != t.value &&
                              (e[t.name.toUpperCase().replace(/-/g, "_")] =
                                t.value),
                            e
                          );
                        }, {}),
                        o = 0,
                        i = t.trigger.length;
                      o < i;
                      o++
                    )
                      if (t.trigger[o].toUpperCase() in n) {
                        (e.open = Rt(t.before, n) + e.open),
                          e.close && (e.close += Rt(t.after, n));
                        break;
                      }
                  })(e, n.comment);
              }
              (r.value || (!r.children.length && !r.selfClosing)) &&
                (e.text = e.renderFields(r.value));
            }
            return e;
          });
        },
        haml: function (e, t, r) {
          var n = {
            open: "[%NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)][SELF_CLOSE]",
            selfClose: "/",
            attributes: {
              secondary: function (e) {
                return e
                  .map(function (e) {
                    return e.isBoolean
                      ? e.name +
                          (t.get("compactBooleanAttributes") ? "" : "=true")
                      : e.name + "=" + t.quote(e.value);
                  })
                  .join(" ");
              },
            },
          };
          return U(e, (r = r || {}).field, function (e) {
            if (
              !Ut(
                (e = (function (e, t) {
                  var r = e.node;
                  !r.isTextOnly &&
                    r.value &&
                    (e.beforeText = Zt.test(r.value)
                      ? e.newline + e.indent + t.indent(1)
                      : " ");
                  return e;
                })((e = Xt(e, t, n)), t))
              )
            ) {
              var r = e.node;
              (r.value || (!r.children.length && !r.selfClosing)) &&
                (e.text = e.renderFields(
                  (function (e, t) {
                    if (null != e.value && Zt.test(e.value)) {
                      var r = It(e.value),
                        n = t.indent(1),
                        o = r.reduce(function (e, t) {
                          return Math.max(e, t.length);
                        }, 0);
                      return r
                        .map(function (e, t) {
                          return (
                            "" +
                            (t ? n : "") +
                            (function (e, t) {
                              for (; e.length < t; ) e += " ";
                              return e;
                            })(e, o) +
                            " |"
                          );
                        })
                        .join("\n");
                    }
                    return e.value;
                  })(r, t)
                ));
            }
            return e;
          });
        },
        slim: function (e, t, r) {
          var n =
              ((r = r || {}).attributeWrap && er[r.attributeWrap]) || er.none,
            o =
              n === er.none
                ? function (e) {
                    return e.name + "=true";
                  }
                : function (e) {
                    return e.name;
                  },
            i = {
              open: "[NAME][PRIMARY_ATTRS]" + n + "[SELF_CLOSE]",
              selfClose: "/",
              attributes: {
                secondary: function (e) {
                  return e
                    .map(function (e) {
                      return e.isBoolean
                        ? o(e)
                        : e.name + "=" + t.quote(e.value);
                    })
                    .join(" ");
                },
              },
            };
          return U(e, r.field, function (e) {
            if (
              !Ut(
                (e = (function (e, t) {
                  var r = e.node,
                    n = r.parent;
                  0 === t.get("inlineBreak") &&
                    (function (e, t) {
                      return e && (e.isTextOnly || t.isInline(e));
                    })(r, t) &&
                    !Wt(n) &&
                    null == n.value &&
                    1 === n.children.length &&
                    (e.beforeOpen = ": ");
                  !r.isTextOnly &&
                    r.value &&
                    (e.beforeText = Qt.test(r.value)
                      ? e.newline + e.indent + t.indent(1)
                      : " ");
                  return e;
                })((e = Xt(e, t, i)), t))
              )
            ) {
              var r = e.node;
              (r.value || (!r.children.length && !r.selfClosing)) &&
                (e.text = e.renderFields(
                  (function (e, t) {
                    if (null != e.value && Qt.test(e.value)) {
                      var r = t.indent(1);
                      return It(e.value)
                        .map(function (e, t) {
                          return r + (t ? " " : "|") + " " + e;
                        })
                        .join("\n");
                    }
                    return e.value;
                  })(r, t)
                ));
            }
            return e;
          });
        },
        pug: function (e, t, r) {
          var n = {
            open: "[NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)]",
            attributes: {
              secondary: function (e) {
                return e
                  .map(function (e) {
                    return e.isBoolean
                      ? e.name
                      : e.name + "=" + t.quote(e.value);
                  })
                  .join(", ");
              },
            },
          };
          return U(e, (r = r || {}).field, function (e) {
            if (
              !Ut(
                (e = (function (e, t) {
                  var r = e.node;
                  !r.isTextOnly &&
                    r.value &&
                    (e.beforeText = tr.test(r.value)
                      ? e.newline + e.indent + t.indent(1)
                      : " ");
                  return e;
                })((e = Xt(e, t, n)), t))
              )
            ) {
              var r = e.node;
              (r.value || (!r.children.length && !r.selfClosing)) &&
                (e.text = e.renderFields(
                  (function (e, t) {
                    if (null != e.value && tr.test(e.value)) {
                      var r = t.indent(1);
                      return It(e.value)
                        .map(function (e) {
                          return r + "| " + e;
                        })
                        .join("\n");
                    }
                    return e.value;
                  })(r, t)
                ));
            }
            return e;
          });
        },
      };
      function nr(e, t, r, n) {
        return (
          "object" === typeof r && ((n = r), (r = null)),
          (function (e) {
            return !!e && e in rr;
          })(r) || (r = "html"),
          rr[r](e, t, n)
        );
      }
      var or = new Set(
          "a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var".split(
            ","
          )
        ),
        ir = {
          p: "span",
          ul: "li",
          ol: "li",
          table: "tr",
          tr: "td",
          tbody: "tr",
          thead: "tr",
          tfoot: "tr",
          colgroup: "col",
          select: "option",
          optgroup: "option",
          audio: "source",
          video: "source",
          object: "param",
          map: "area",
        };
      function ar(e) {
        return (
          (e = (e || "").toLowerCase()), ir[e] || (or.has(e) ? "span" : "div")
        );
      }
      var sr = function (e) {
        return (
          e.walk(function (e) {
            null == e.name &&
              e.attributes.length &&
              (e.name = ar(e.parent.name));
          }),
          e
        );
      };
      function lr(e, t) {
        for (
          var r = new Set(), n = t.length, o = 0;
          -1 !== (o = e.indexOf(t, o));

        )
          r.add(o), (o += n);
        if (r.size)
          for (var i = 0, a = e.length; i < a; )
            "\\" === e[i++] && r.delete(i++);
        return Array.from(r).map(function (e) {
          return [e, n];
        });
      }
      function ur(e, t, r) {
        for (var n = t.length - 1; n >= 0; n--) {
          var o = t[n],
            i = 0,
            a = 0,
            s = !1;
          if ("@" === e.substr(o[0] + o[1], 1)) {
            "-" === e.substr(o[0] + o[1] + 1, 1) && (s = !0);
            var l = e.substr(o[0] + o[1] + 1 + Number(s)).match(/^(\d+)/);
            l
              ? ((a = l[1].length + 1 + Number(s)), (i = parseInt(l[1]) - 1))
              : (a = 2);
          }
          e =
            e.substring(0, o[0]) +
            ("function" === typeof r ? r(e.substr(o[0], o[1]), i, s) : r) +
            e.substring(o[0] + o[1] + a);
        }
        return e;
      }
      var cr = function (e) {
        return e.walk(dr), e;
      };
      function dr(e) {
        var t = (function (e) {
          for (; e; ) {
            if (e.repeat) return e.repeat;
            e = e.parent;
          }
        })(e);
        if (t && null != t.value) {
          var r = t.value,
            n = t.count;
          (e.name = pr(e.name, r, n)),
            (e.value = pr(e.value, r, n)),
            e.attributes.forEach(function (t) {
              var o = e.getAttribute(t.name).clone();
              (o.name = pr(t.name, r, n)),
                (o.value = pr(t.value, r, n)),
                e.replaceAttribute(t.name, o);
            });
        }
        return e;
      }
      function pr(e, t, r) {
        return "string" === typeof e
          ? (function (e, t, r, n) {
              return (function (e) {
                var t = 0,
                  r = "",
                  n = e.length;
                for (; t < n; ) {
                  var o = e[t++];
                  r += "\\" === o ? e[t++] || "" : o;
                }
                return r;
              })(
                ur(e, t, function (e, t, o) {
                  for (
                    var i = String(o ? t + n - r + 1 : r + t);
                    i.length < e.length;

                  )
                    i = "0" + i;
                  return i;
                })
              );
            })(
              e,
              (function (e) {
                return lr(e || "", "$").reduce(function (t, r) {
                  if (!/[#{]/.test(e[r[0] + 1] || "")) {
                    var n = t[t.length - 1];
                    n && n[0] + n[1] === r[0] ? (n[1] += r[1]) : t.push(r);
                  }
                  return t;
                }, []);
              })(e),
              t,
              r
            )
          : e;
      }
      var fr =
          /^((?:https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        mr = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        gr = /^([a-z]+:)?\/\//i;
      function hr(e, t) {
        return (
          (t = t || 1),
          e.walk(function (e) {
            if (e.repeat && null === e.repeat.count) {
              for (var r = 0; r < t; r++) {
                var n = e.clone(!0);
                (n.repeat.implicit = !0),
                  (n.repeat.count = t),
                  (n.repeat.value = r + 1),
                  (n.repeat.index = r),
                  e.parent.insertBefore(n, e);
              }
              e.remove();
            }
          }),
          e
        );
      }
      function br(e, t) {
        if (Array.isArray(t) && t.length) {
          var r = !1;
          e.walk(function (e) {
            e.repeat &&
              e.repeat.implicit &&
              ((r = !0),
              (function (e, t) {
                var r = vr(e, t);
                e.walk(function (e) {
                  return (r |= vr(e, t));
                }),
                  r || wr(xr(e), t);
              })(e, t[e.repeat.index]));
          }),
            r || wr(xr(e), t.join("\n"));
        }
        return e;
      }
      function vr(e, t) {
        var r = { replaced: !1 };
        return (
          (e.value = yr(e.value, t, r)),
          e.attributes.forEach(function (n) {
            n.value && e.setAttribute(n.name, yr(n.value, t, r));
          }),
          r.replaced
        );
      }
      function yr(e, t, r) {
        if ("string" === typeof e) {
          var n = lr(e, "$#");
          n.length && (r && (r.replaced = !0), (e = ur(e, n, t)));
        }
        return e;
      }
      function xr(e) {
        for (; e.children.length; ) e = e.children[e.children.length - 1];
        return e;
      }
      function wr(e, t) {
        if (e.value) {
          var r = lr(e.value, "|");
          if (r.length) return void (e.value = ur(e.value, r, t));
        }
        ("a" === e.name.toLowerCase() || e.hasAttribute("href")) &&
          (fr.test(t)
            ? e.setAttribute("href", (gr.test(t) ? "" : "http://") + t)
            : mr.test(t) && e.setAttribute("href", "mailto:" + t)),
          (e.value = t);
      }
      var kr = { element: "__", modifier: "_" },
        Cr = /^(-+)([a-z0-9]+[a-z0-9-]*)/i,
        $r = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i,
        Ar = function (e) {
          return /^[a-z]\-/i.test(e);
        },
        jr = function (e) {
          return /^[a-z]/i.test(e);
        };
      function Or(e, t, r) {
        for (
          var n = r.length > 1 ? r.length : 0;
          e.parent && e.parent.parent && n--;

        )
          e = e.parent;
        return t.get(e) || "";
      }
      function Sr(e, t) {
        for (var r = 0; r < e.length && !Cr.test(e[r]) && !$r.test(e[r]); r++)
          if (t(e[r])) return e[r];
      }
      function Er(e, t, r) {
        var n = e.getAttribute(t);
        n && (n.name = r);
      }
      var Tr = /^xsl:(variable|with\-param)$/i,
        _r = {
          bem: function (e, t) {
            (t = Object.assign({}, kr, t)),
              e.walk(function (e) {
                return (function (e, t) {
                  var r = e.classList.reduce(function (e, t) {
                    var r = t.indexOf("_");
                    return r > 0 && !t.startsWith("-")
                      ? (e.add(t.slice(0, r)), e.add(t.slice(r)), e)
                      : e.add(t);
                  }, new Set());
                  r.size && e.setAttribute("class", Array.from(r).join(" "));
                })(e);
              });
            var r = (function (e) {
              var t = new Map();
              return (
                e.walk(function (e) {
                  var r = e.classList;
                  r.length &&
                    t.set(e, Sr(r, Ar) || Sr(r, jr) || t.get(e.parent));
                }),
                t
              );
            })(e);
            return (
              e.walk(function (e) {
                return (function (e, t, r) {
                  var n = e.classList.reduce(function (n, o) {
                      var i,
                        a,
                        s = o;
                      return (
                        (a = o.match(Cr)) &&
                          ((i = Or(e, t, a[1]) + r.element + a[2]),
                          n.add(i),
                          (o = o.slice(a[0].length))),
                        (a = o.match($r)) &&
                          (i || ((i = Or(e, t, a[1])), n.add(i)),
                          n.add("" + i + r.modifier + a[2]),
                          (o = o.slice(a[0].length))),
                        o === s && n.add(s),
                        n
                      );
                    }, new Set()),
                    o = Array.from(n).filter(Boolean);
                  o.length && e.setAttribute("class", o.join(" "));
                })(e, r, t);
              }),
              e
            );
          },
          jsx: function (e) {
            return (
              e.walk(function (e) {
                Er(e, "class", "className"), Er(e, "for", "htmlFor");
              }),
              e
            );
          },
          xsl: function (e) {
            return (
              e.walk(function (e) {
                Tr.test(e.name || "") &&
                  (e.children.length || e.value) &&
                  e.removeAttribute("select");
              }),
              e
            );
          },
        },
        zr = function (e, t) {
          return (
            Object.keys(t || {}).forEach(function (r) {
              if (r in _r) {
                var n = "object" === typeof t[r] ? t[r] : null;
                e = e.use(_r[r], n);
              }
            }),
            e
          );
        },
        qr = function (e, t, r) {
          return (
            "string" === typeof t
              ? (t = [t])
              : t &&
                "object" === typeof t &&
                !Array.isArray(t) &&
                ((r = t), (t = null)),
            e
              .use(sr)
              .use(hr, Array.isArray(t) ? t.length : null)
              .use(cr)
              .use(br, t)
              .use(zr, r)
          );
        },
        Lr = {
          a: "a[href]",
          "a:blank":
            "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
          "a:link": "a[href='http://${0}']",
          "a:mail": "a[href='mailto:${0}']",
          "a:tel": "a[href='tel:+${0}']",
          abbr: "abbr[title]",
          "acr|acronym": "acronym[title]",
          base: "base[href]/",
          basefont: "basefont/",
          br: "br/",
          frame: "frame/",
          hr: "hr/",
          bdo: "bdo[dir]",
          "bdo:r": "bdo[dir=rtl]",
          "bdo:l": "bdo[dir=ltr]",
          col: "col/",
          link: "link[rel=stylesheet href]/",
          "link:css": "link[href='${1:style}.css']",
          "link:print": "link[href='${1:print}.css' media=print]",
          "link:favicon":
            "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
          "link:mf|link:manifest":
            "link[rel='manifest' href='${1:manifest.json}']",
          "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
          "link:rss":
            "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
          "link:atom":
            "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
          "link:im|link:import": "link[rel=import href='${1:component}.html']",
          meta: "meta/",
          "meta:utf":
            "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
          "meta:vp":
            "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
          "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
          "meta:edge": "meta:compat[content='${1:ie=edge}']",
          "meta:redirect":
            "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
          style: "style",
          script: "script[!src]",
          "script:src": "script[src]",
          img: "img[src alt]/",
          "img:s|img:srcset": "img[srcset src alt]",
          "img:z|img:sizes": "img[sizes srcset src alt]",
          picture: "picture",
          "src|source": "source/",
          "src:sc|source:src": "source[src type]",
          "src:s|source:srcset": "source[srcset]",
          "src:t|source:type": "source[srcset type='${1:image/}']",
          "src:z|source:sizes": "source[sizes srcset]",
          "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
          "src:mt|source:media:type": "source:media[type='${2:image/}']",
          "src:mz|source:media:sizes": "source:media[sizes srcset]",
          "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
          iframe: "iframe[src frameborder=0]",
          embed: "embed[src type]/",
          object: "object[data type]",
          param: "param[name value]/",
          map: "map[name]",
          area: "area[shape coords href alt]/",
          "area:d": "area[shape=default]",
          "area:c": "area[shape=circle]",
          "area:r": "area[shape=rect]",
          "area:p": "area[shape=poly]",
          form: "form[action]",
          "form:get": "form[method=get]",
          "form:post": "form[method=post]",
          label: "label[for]",
          input: "input[type=${1:text}]/",
          inp: "input[name=${1} id=${1}]",
          "input:h|input:hidden": "input[type=hidden name]",
          "input:t|input:text": "inp[type=text]",
          "input:search": "inp[type=search]",
          "input:email": "inp[type=email]",
          "input:url": "inp[type=url]",
          "input:p|input:password": "inp[type=password]",
          "input:datetime": "inp[type=datetime]",
          "input:date": "inp[type=date]",
          "input:datetime-local": "inp[type=datetime-local]",
          "input:month": "inp[type=month]",
          "input:week": "inp[type=week]",
          "input:time": "inp[type=time]",
          "input:tel": "inp[type=tel]",
          "input:number": "inp[type=number]",
          "input:color": "inp[type=color]",
          "input:c|input:checkbox": "inp[type=checkbox]",
          "input:r|input:radio": "inp[type=radio]",
          "input:range": "inp[type=range]",
          "input:f|input:file": "inp[type=file]",
          "input:s|input:submit": "input[type=submit value]",
          "input:i|input:image": "input[type=image src alt]",
          "input:b|input:button": "input[type=button value]",
          "input:reset": "input:button[type=reset]",
          isindex: "isindex/",
          select: "select[name=${1} id=${1}]",
          "select:d|select:disabled": "select[disabled.]",
          "opt|option": "option[value]",
          textarea: "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
          marquee: "marquee[behavior direction]",
          "menu:c|menu:context": "menu[type=context]",
          "menu:t|menu:toolbar": "menu[type=toolbar]",
          video: "video[src]",
          audio: "audio[src]",
          "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
          keygen: "keygen/",
          command: "command/",
          "btn:s|button:s|button:submit": "button[type=submit]",
          "btn:r|button:r|button:reset": "button[type=reset]",
          "btn:d|button:d|button:disabled": "button[disabled.]",
          "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]",
          bq: "blockquote",
          fig: "figure",
          figc: "figcaption",
          pic: "picture",
          ifr: "iframe",
          emb: "embed",
          obj: "object",
          cap: "caption",
          colg: "colgroup",
          fst: "fieldset",
          btn: "button",
          optg: "optgroup",
          tarea: "textarea",
          leg: "legend",
          sect: "section",
          art: "article",
          hdr: "header",
          ftr: "footer",
          adr: "address",
          dlg: "dialog",
          str: "strong",
          prog: "progress",
          mn: "main",
          tem: "template",
          fset: "fieldset",
          datag: "datagrid",
          datal: "datalist",
          kg: "keygen",
          out: "output",
          det: "details",
          cmd: "command",
          "ri:d|ri:dpr": "img:s",
          "ri:v|ri:viewport": "img:z",
          "ri:a|ri:art": "pic>src:m+img",
          "ri:t|ri:type": "pic>src:t+img",
          "!!!": "{<!DOCTYPE html>}",
          doc: "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
          "!|html:5": "!!!+doc",
          c: "{\x3c!-- ${0} --\x3e}",
          "cc:ie": "{\x3c!--[if IE]>${0}<![endif]--\x3e}",
          "cc:noie": "{\x3c!--[if !IE]>\x3c!--\x3e${0}\x3c!--<![endif]--\x3e}",
        },
        Nr = {
          latin: {
            common: [
              "lorem",
              "ipsum",
              "dolor",
              "sit",
              "amet",
              "consectetur",
              "adipisicing",
              "elit",
            ],
            words: [
              "exercitationem",
              "perferendis",
              "perspiciatis",
              "laborum",
              "eveniet",
              "sunt",
              "iure",
              "nam",
              "nobis",
              "eum",
              "cum",
              "officiis",
              "excepturi",
              "odio",
              "consectetur",
              "quasi",
              "aut",
              "quisquam",
              "vel",
              "eligendi",
              "itaque",
              "non",
              "odit",
              "tempore",
              "quaerat",
              "dignissimos",
              "facilis",
              "neque",
              "nihil",
              "expedita",
              "vitae",
              "vero",
              "ipsum",
              "nisi",
              "animi",
              "cumque",
              "pariatur",
              "velit",
              "modi",
              "natus",
              "iusto",
              "eaque",
              "sequi",
              "illo",
              "sed",
              "ex",
              "et",
              "voluptatibus",
              "tempora",
              "veritatis",
              "ratione",
              "assumenda",
              "incidunt",
              "nostrum",
              "placeat",
              "aliquid",
              "fuga",
              "provident",
              "praesentium",
              "rem",
              "necessitatibus",
              "suscipit",
              "adipisci",
              "quidem",
              "possimus",
              "voluptas",
              "debitis",
              "sint",
              "accusantium",
              "unde",
              "sapiente",
              "voluptate",
              "qui",
              "aspernatur",
              "laudantium",
              "soluta",
              "amet",
              "quo",
              "aliquam",
              "saepe",
              "culpa",
              "libero",
              "ipsa",
              "dicta",
              "reiciendis",
              "nesciunt",
              "doloribus",
              "autem",
              "impedit",
              "minima",
              "maiores",
              "repudiandae",
              "ipsam",
              "obcaecati",
              "ullam",
              "enim",
              "totam",
              "delectus",
              "ducimus",
              "quis",
              "voluptates",
              "dolores",
              "molestiae",
              "harum",
              "dolorem",
              "quia",
              "voluptatem",
              "molestias",
              "magni",
              "distinctio",
              "omnis",
              "illum",
              "dolorum",
              "voluptatum",
              "ea",
              "quas",
              "quam",
              "corporis",
              "quae",
              "blanditiis",
              "atque",
              "deserunt",
              "laboriosam",
              "earum",
              "consequuntur",
              "hic",
              "cupiditate",
              "quibusdam",
              "accusamus",
              "ut",
              "rerum",
              "error",
              "minus",
              "eius",
              "ab",
              "ad",
              "nemo",
              "fugit",
              "officia",
              "at",
              "in",
              "id",
              "quos",
              "reprehenderit",
              "numquam",
              "iste",
              "fugiat",
              "sit",
              "inventore",
              "beatae",
              "repellendus",
              "magnam",
              "recusandae",
              "quod",
              "explicabo",
              "doloremque",
              "aperiam",
              "consequatur",
              "asperiores",
              "commodi",
              "optio",
              "dolor",
              "labore",
              "temporibus",
              "repellat",
              "veniam",
              "architecto",
              "est",
              "esse",
              "mollitia",
              "nulla",
              "a",
              "similique",
              "eos",
              "alias",
              "dolore",
              "tenetur",
              "deleniti",
              "porro",
              "facere",
              "maxime",
              "corrupti",
            ],
          },
          ru: {
            common: [
              "\u0434\u0430\u043b\u0435\u043a\u043e-\u0434\u0430\u043b\u0435\u043a\u043e",
              "\u0437\u0430",
              "\u0441\u043b\u043e\u0432\u0435\u0441\u043d\u044b\u043c\u0438",
              "\u0433\u043e\u0440\u0430\u043c\u0438",
              "\u0432 \u0441\u0442\u0440\u0430\u043d\u0435",
              "\u0433\u043b\u0430\u0441\u043d\u044b\u0445",
              "\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0445",
              "\u0436\u0438\u0432\u0443\u0442",
              "\u0440\u044b\u0431\u043d\u044b\u0435",
              "\u0442\u0435\u043a\u0441\u0442\u044b",
            ],
            words: [
              "\u0432\u0434\u0430\u043b\u0438",
              "\u043e\u0442 \u0432\u0441\u0435\u0445",
              "\u043e\u043d\u0438",
              "\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0445",
              "\u0434\u043e\u043c\u0430\u0445",
              "\u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443",
              "\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u043a\u0430",
              "\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e",
              "\u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0433\u043e",
              "\u043e\u043a\u0435\u0430\u043d\u0430",
              "\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",
              "\u0440\u0443\u0447\u0435\u0435\u043a",
              "\u0434\u0430\u043b\u044c",
              "\u0436\u0443\u0440\u0447\u0438\u0442",
              "\u043f\u043e \u0432\u0441\u0435\u0439",
              "\u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442",
              "\u0435\u0435",
              "\u0432\u0441\u0435\u043c\u0438",
              "\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c\u0438",
              "\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438",
              "\u044d\u0442\u0430",
              "\u043f\u0430\u0440\u0430\u0434\u0438\u0433\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",
              "\u0441\u0442\u0440\u0430\u043d\u0430",
              "\u043a\u043e\u0442\u043e\u0440\u043e\u0439",
              "\u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0435",
              "\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f",
              "\u0437\u0430\u043b\u0435\u0442\u0430\u044e\u0442",
              "\u043f\u0440\u044f\u043c\u043e",
              "\u0440\u043e\u0442",
              "\u0434\u0430\u0436\u0435",
              "\u0432\u0441\u0435\u043c\u043e\u0433\u0443\u0449\u0430\u044f",
              "\u043f\u0443\u043d\u043a\u0442\u0443\u0430\u0446\u0438\u044f",
              "\u043d\u0435",
              "\u0438\u043c\u0435\u0435\u0442",
              "\u0432\u043b\u0430\u0441\u0442\u0438",
              "\u043d\u0430\u0434",
              "\u0440\u044b\u0431\u043d\u044b\u043c\u0438",
              "\u0442\u0435\u043a\u0441\u0442\u0430\u043c\u0438",
              "\u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438",
              "\u0431\u0435\u0437\u043e\u0440\u0444\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u043d\u044b\u0439",
              "\u043e\u0431\u0440\u0430\u0437",
              "\u0436\u0438\u0437\u043d\u0438",
              "\u043e\u0434\u043d\u0430\u0436\u0434\u044b",
              "\u043e\u0434\u043d\u0430",
              "\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f",
              "\u0441\u0442\u0440\u043e\u0447\u043a\u0430",
              "\u0440\u044b\u0431\u043d\u043e\u0433\u043e",
              "\u0442\u0435\u043a\u0441\u0442\u0430",
              "\u0438\u043c\u0435\u043d\u0438",
              "lorem",
              "ipsum",
              "\u0440\u0435\u0448\u0438\u043b\u0430",
              "\u0432\u044b\u0439\u0442\u0438",
              "\u0431\u043e\u043b\u044c\u0448\u043e\u0439",
              "\u043c\u0438\u0440",
              "\u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438",
              "\u0432\u0435\u043b\u0438\u043a\u0438\u0439",
              "\u043e\u043a\u0441\u043c\u043e\u043a\u0441",
              "\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0430\u043b",
              "\u043e",
              "\u0437\u043b\u044b\u0445",
              "\u0437\u0430\u043f\u044f\u0442\u044b\u0445",
              "\u0434\u0438\u043a\u0438\u0445",
              "\u0437\u043d\u0430\u043a\u0430\u0445",
              "\u0432\u043e\u043f\u0440\u043e\u0441\u0430",
              "\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0445",
              "\u0442\u043e\u0447\u043a\u0430\u0445",
              "\u0437\u0430\u043f\u044f\u0442\u043e\u0439",
              "\u043d\u043e",
              "\u0442\u0435\u043a\u0441\u0442",
              "\u0434\u0430\u043b",
              "\u0441\u0431\u0438\u0442\u044c",
              "\u0441\u0435\u0431\u044f",
              "\u0442\u043e\u043b\u043a\u0443",
              "\u043e\u043d",
              "\u0441\u043e\u0431\u0440\u0430\u043b",
              "\u0441\u0435\u043c\u044c",
              "\u0441\u0432\u043e\u0438\u0445",
              "\u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0445",
              "\u0431\u0443\u043a\u0432",
              "\u043f\u043e\u0434\u043f\u043e\u044f\u0441\u0430\u043b",
              "\u0438\u043d\u0438\u0446\u0438\u0430\u043b",
              "\u0437\u0430",
              "\u043f\u043e\u044f\u0441",
              "\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f",
              "\u0434\u043e\u0440\u043e\u0433\u0443",
              "\u0432\u0437\u043e\u0431\u0440\u0430\u0432\u0448\u0438\u0441\u044c",
              "\u043f\u0435\u0440\u0432\u0443\u044e",
              "\u0432\u0435\u0440\u0448\u0438\u043d\u0443",
              "\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u044b\u0445",
              "\u0433\u043e\u0440",
              "\u0431\u0440\u043e\u0441\u0438\u043b",
              "\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439",
              "\u0432\u0437\u0433\u043b\u044f\u0434",
              "\u043d\u0430\u0437\u0430\u0434",
              "\u0441\u0438\u043b\u0443\u044d\u0442",
              "\u0441\u0432\u043e\u0435\u0433\u043e",
              "\u0440\u043e\u0434\u043d\u043e\u0433\u043e",
              "\u0433\u043e\u0440\u043e\u0434\u0430",
              "\u0431\u0443\u043a\u0432\u043e\u0433\u0440\u0430\u0434",
              "\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
              "\u0434\u0435\u0440\u0435\u0432\u043d\u0438",
              "\u0430\u043b\u0444\u0430\u0432\u0438\u0442",
              "\u043f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
              "\u0441\u0432\u043e\u0435\u0433\u043e",
              "\u043f\u0435\u0440\u0435\u0443\u043b\u043a\u0430",
              "\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",
              "\u0440\u0435\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439",
              "\u0432\u043e\u043f\u0440\u043e\u0441",
              "\u0441\u043a\u0430\u0442\u0438\u043b\u0441\u044f",
              "\u0435\u0433\u043e",
              "\u0449\u0435\u043a\u0435",
              "\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u043b",
              "\u0441\u0432\u043e\u0439",
              "\u043f\u0443\u0442\u044c",
              "\u0434\u043e\u0440\u043e\u0433\u0435",
              "\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043b",
              "\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u044c",
              "\u043e\u043d\u0430",
              "\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u043b\u0430",
              "\u043c\u043e\u0435\u0439",
              "\u0432\u0441\u0435",
              "\u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f",
              "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e",
              "\u0440\u0430\u0437",
              "\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435",
              "\u0447\u0442\u043e",
              "\u043c\u0435\u043d\u044f",
              "\u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c",
              "\u044d\u0442\u043e",
              "\u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u0430",
              "\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044f",
              "\u0442\u044b",
              "\u043b\u0443\u0447\u0448\u0435",
              "\u0441\u0432\u043e\u044e",
              "\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e",
              "\u0441\u0442\u0440\u0430\u043d\u0443",
              "\u043f\u043e\u0441\u043b\u0443\u0448\u0430\u0432\u0448\u0438\u0441\u044c",
              "\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u0438",
              "\u043d\u0430\u0448",
              "\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u043b",
              "\u0441\u0432\u043e\u0439",
              "\u043f\u0443\u0442\u044c",
              "\u0432\u0441\u043a\u043e\u0440\u0435",
              "\u0435\u043c\u0443",
              "\u043f\u043e\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043b\u0441\u044f",
              "\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0439",
              "\u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c",
              "\u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445",
              "\u0442\u0435\u043a\u0441\u0442\u043e\u0432",
              "\u043d\u0430\u043f\u043e\u0438\u0432\u0448\u0438\u0439",
              "\u044f\u0437\u044b\u043a\u043e\u043c",
              "\u0440\u0435\u0447\u044c\u044e",
              "\u0437\u0430\u043c\u0430\u043d\u0438\u0432\u0448\u0438\u0439",
              "\u0441\u0432\u043e\u0435",
              "\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e",
              "\u043a\u043e\u0442\u043e\u0440\u043e\u0435",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u043e",
              "\u0441\u043d\u043e\u0432\u0430",
              "\u0441\u043d\u043e\u0432\u0430",
              "\u0441\u0432\u043e\u0438\u0445",
              "\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445",
              "\u0435\u0441\u043b\u0438",
              "\u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043b\u0438",
              "\u0442\u043e",
              "\u0436\u0438\u0432\u0435\u0442",
              "\u0442\u0430\u043c",
              "\u0434\u043e",
              "\u0441\u0438\u0445",
              "\u043f\u043e\u0440",
            ],
          },
          sp: {
            common: [
              "mujer",
              "uno",
              "dolor",
              "m\xe1s",
              "de",
              "poder",
              "mismo",
              "si",
            ],
            words: [
              "ejercicio",
              "preferencia",
              "perspicacia",
              "laboral",
              "pa\xf1o",
              "suntuoso",
              "molde",
              "namibia",
              "planeador",
              "mirar",
              "dem\xe1s",
              "oficinista",
              "excepci\xf3n",
              "odio",
              "consecuencia",
              "casi",
              "auto",
              "chicharra",
              "velo",
              "elixir",
              "ataque",
              "no",
              "odio",
              "temporal",
              "cu\xf3rum",
              "dign\xedsimo",
              "facilismo",
              "letra",
              "nihilista",
              "expedici\xf3n",
              "alma",
              "alveolar",
              "aparte",
              "le\xf3n",
              "animal",
              "como",
              "paria",
              "belleza",
              "modo",
              "natividad",
              "justo",
              "ataque",
              "s\xe9quito",
              "pillo",
              "sed",
              "ex",
              "y",
              "voluminoso",
              "temporalidad",
              "verdades",
              "racional",
              "asunci\xf3n",
              "incidente",
              "marejada",
              "placenta",
              "amanecer",
              "fuga",
              "previsor",
              "presentaci\xf3n",
              "lejos",
              "necesariamente",
              "sospechoso",
              "adiposidad",
              "quind\xedo",
              "p\xf3cima",
              "voluble",
              "d\xe9bito",
              "sinti\xf3",
              "accesorio",
              "falda",
              "sapiencia",
              "volutas",
              "queso",
              "permacultura",
              "laudo",
              "soluciones",
              "entero",
              "pan",
              "litro",
              "tonelada",
              "culpa",
              "libertario",
              "mosca",
              "dictado",
              "reincidente",
              "nascimiento",
              "dolor",
              "escolar",
              "impedimento",
              "m\xednima",
              "mayores",
              "repugnante",
              "dulce",
              "obcecado",
              "monta\xf1a",
              "enigma",
              "total",
              "delet\xe9reo",
              "d\xe9cima",
              "c\xe1bala",
              "fotograf\xeda",
              "dolores",
              "molesto",
              "olvido",
              "paciencia",
              "resiliencia",
              "voluntad",
              "molestias",
              "magn\xedfico",
              "distinci\xf3n",
              "ovni",
              "marejada",
              "cerro",
              "torre",
              "y",
              "abogada",
              "manantial",
              "corporal",
              "agua",
              "crep\xfasculo",
              "ataque",
              "desierto",
              "laboriosamente",
              "angustia",
              "afortunado",
              "alma",
              "encefalograma",
              "materialidad",
              "cosas",
              "o",
              "renuncia",
              "error",
              "menos",
              "conejo",
              "abad\xeda",
              "analfabeto",
              "remo",
              "fugacidad",
              "oficio",
              "en",
              "alm\xe1cigo",
              "vos",
              "pan",
              "represi\xf3n",
              "n\xfameros",
              "triste",
              "refugiado",
              "trote",
              "inventor",
              "corchea",
              "repelente",
              "magma",
              "recusado",
              "patr\xf3n",
              "expl\xedcito",
              "paloma",
              "s\xedndrome",
              "inmune",
              "autoinmune",
              "comodidad",
              "ley",
              "vietnamita",
              "demonio",
              "tasmania",
              "repeler",
              "ap\xe9ndice",
              "arquitecto",
              "columna",
              "yugo",
              "computador",
              "mula",
              "a",
              "prop\xf3sito",
              "fantas\xeda",
              "alias",
              "rayo",
              "tenedor",
              "deleznable",
              "ventana",
              "cara",
              "anemia",
              "corrupto",
            ],
          },
        },
        Mr = { wordCount: 30, skipCommon: !1, lang: "latin" };
      function Rr(e, t) {
        return Math.floor(Math.random() * (t - e) + e);
      }
      function Ir(e, t) {
        for (var r = e.length, n = Math.min(r, t), o = new Set(); o.size < n; )
          o.add(e[Rr(0, r)]);
        return Array.from(o);
      }
      function Dr(e, t) {
        var r, n;
        return (
          e.length &&
            (e = [((r = e[0]), r[0].toUpperCase() + r.slice(1))].concat(
              e.slice(1)
            )),
          e.join(" ") + (t || (n = "?!...")[Rr(0, n.length - 1)])
        );
      }
      function Wr(e) {
        if (e.length < 2) return e;
        var t = (e = e.slice()).length,
          r = /,$/,
          n = 0;
        n = t > 3 && t <= 6 ? Rr(0, 1) : t > 6 && t <= 12 ? Rr(0, 2) : Rr(1, 4);
        for (var o = 0, i = void 0; o < n; o++)
          (i = Rr(0, t - 2)), r.test(e[i]) || (e[i] += ",");
        return e;
      }
      function Pr(e, t, r) {
        var n,
          o = [],
          i = 0;
        for (
          r &&
          e.common &&
          ((i += (n = e.common.slice(0, t)).length), o.push(Dr(Wr(n), ".")));
          i < t;

        )
          (i += (n = Ir(e.words, Math.min(Rr(2, 30), t - i))).length),
            o.push(Dr(Wr(n)));
        return o.join(" ");
      }
      function Ur(e, t) {
        return (
          (t = t || {}),
          e.walk(function (e) {
            return (function (e, t) {
              for (var r = e.attributes, n = 0, o = r.length; n < o; n++) {
                var i = r[n];
                "string" === typeof i.value &&
                  e.setAttribute(i.name, Fr(i.value, t));
              }
              null != e.value && (e.value = Fr(e.value, t));
              return e;
            })(e, t);
          }),
          e
        );
      }
      function Fr(e, t) {
        for (
          var r = (function (e) {
              var t,
                r = /\$\{([a-z][\w\-]*)\}/gi,
                n = 92,
                o = [],
                i = new Map();
              for (; (t = r.exec(e)); ) i.set(t.index, t);
              if (i.size) {
                for (var a = 0, s = 0, l = e.length, u = ""; s < l; )
                  if (e.charCodeAt(s) === n && i.has(s + 1)) {
                    var c = i.get(s + 1);
                    (u += e.slice(a, s) + c[0]),
                      (a = s = c.index + c[0].length),
                      i.delete(s + 1);
                  } else s++;
                e = u + e.slice(a);
                for (
                  var d = Array.from(i.values()), p = 0, f = d.length;
                  p < f;
                  p++
                ) {
                  var m = d[p];
                  o.push({
                    name: m[1],
                    location: m.index,
                    length: m[0].length,
                  });
                }
              }
              return { string: e, variables: o };
            })(e),
            n = 0,
            o = "",
            i = 0,
            a = r.variables.length;
          i < a;
          i++
        ) {
          var s = r.variables[i],
            l = s.name in t ? t[s.name] : s.name;
          "function" === typeof l && (l = l(r.string, s, n + s.location)),
            (o += r.string.slice(n, s.location) + l),
            (n = s.location + s.length);
        }
        return o + r.string.slice(n);
      }
      [
        "body",
        "head",
        "html",
        "address",
        "blockquote",
        "dd",
        "div",
        "section",
        "article",
        "aside",
        "header",
        "footer",
        "nav",
        "menu",
        "dl",
        "dt",
        "fieldset",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "iframe",
        "noframes",
        "object",
        "ol",
        "p",
        "ul",
        "applet",
        "center",
        "dir",
        "hr",
        "pre",
        "a",
        "abbr",
        "acronym",
        "area",
        "b",
        "base",
        "basefont",
        "bdo",
        "big",
        "br",
        "button",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "del",
        "dfn",
        "em",
        "font",
        "head",
        "html",
        "i",
        "img",
        "input",
        "ins",
        "isindex",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "map",
        "meta",
        "noscript",
        "optgroup",
        "option",
        "param",
        "q",
        "s",
        "samp",
        "script",
        "select",
        "small",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "tt",
        "u",
        "var",
        "canvas",
        "main",
        "figure",
        "plaintext",
      ].forEach(function (e) {
        return (Lr[e] = Lr[e] || e);
      });
      var Br = new Ze(Lr),
        Hr = /^lorem([a-z]*)(\d*)$/i;
      Br.get(0).set(Hr, function (e) {
        var t = {},
          r = e.name.match(Hr),
          n = r[1],
          o = r[2];
        return (
          n && (t.lang = n),
          o && (t.wordCount = +o),
          (function (e, t) {
            t = Object.assign({}, Mr, t);
            var r = Nr[t.lang] || Nr.latin,
              n =
                !t.skipCommon &&
                !(function (e) {
                  for (; e.parent; ) {
                    if (e.repeat && e.repeat.value && e.repeat.value > 1)
                      return !0;
                    e = e.parent;
                  }
                  return !1;
                })(e);
            return (
              e.repeat ||
              (function (e) {
                return !e.parent;
              })(e.parent)
                ? ((e.value = Pr(r, t.wordCount, n)),
                  (e.name = e.parent.name ? ar(e.parent.name) : null))
                : ((e.parent.value = Pr(r, t.wordCount, n)), e.remove()),
              e
            );
          })(e, t)
        );
      });
      var Kr = Br.all({ type: "string" }).map(function (e) {
        return e.key;
      });
      Kr.push("lorem");
      var Yr = C(C({}, rt), {
        snippets: Br,
        profile: new et(),
        variables: { lang: "en", locale: "en-US", charset: "UTF-8" },
      });
      function Gr(e) {
        return nr(
          yt(e).use(Nt, Yr.snippets).use(Ur, Yr.variables).use(qr, null, null),
          Yr.profile,
          Yr
        );
      }
      var Vr = {
          scrollBeyondLastLine: !0,
          acceptSuggestionOnCommitCharacter: !1,
          autoIndent: !0,
          codeLens: !1,
          multiCursorModifier: "ctrlCmd",
          minimap: { enabled: !1 },
          renderIndentGuides: !0,
          useTabStops: !0,
          renderLineHighlight: "all",
          hideCursorInOverviewRuler: !0,
          wrappingIndent: "same",
          fixedOverflowWidgets: !0,
          links: !1,
        },
        Jr = r("uLgn");
      function Xr(e, t) {
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
      function Zr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xr(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Xr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Qr(e) {
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
            n = Object(u.a)(e);
          if (t) {
            var o = Object(u.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(l.a)(this, r);
        };
      }
      !(function (e) {
        if ((void 0 === e && (e = window.monaco), nt(e)))
          ot(
            e,
            "html",
            function (e, t) {
              return (
                ("" === e[t].type &&
                  (0 === t || "delimiter.html" === e[t - 1].type)) ||
                "text.html.basic" === e[0].type
              );
            },
            function (e) {
              if ("" !== e && !e.match(/\s$/)) {
                for (
                  var t = { "{": 1, "}": -1, "[": 1, "]": -1 },
                    r = 0,
                    n = (e = e.trim()).length - 1;
                  n > 0;
                  n--
                )
                  if (((r += t[e[n]] || 0), e[n].match(/\s/) && r >= 0)) {
                    e = e.substr(n + 1);
                    break;
                  }
                if (e.match(/^[a-zA-Z[(.#!]/)) {
                  var o = e.length,
                    i = Kr.filter(function (t) {
                      return t.length > o && t.slice(0, o) === e;
                    });
                  i.unshift(e);
                  try {
                    return i.map(function (e) {
                      return { emmetText: e, expandText: Gr(e) };
                    });
                  } catch (a) {
                    return;
                  }
                }
              }
            }
          );
      })(f),
        (function (e) {
          if ((void 0 === e && (e = window.monaco), nt(e)))
            ot(
              e,
              ["css", "less", "scss"],
              function (e, t) {
                return "attribute.value" !== e[t].type.substring(0, 15);
              },
              function (e) {
                if (
                  "" !== e &&
                  !e.match(/\s$/) &&
                  (e = e.trim().split(/{|}|;/).pop())
                )
                  try {
                    return [{ emmetText: e, expandText: at(e) }];
                  } catch (t) {
                    return;
                  }
              }
            );
        })(f),
        (function () {
          var e = [
            { token: "string.escape", foreground: "ff69b4" },
            { token: "regexp.escape", foreground: "ff69b4" },
            { token: "constant.escape", foreground: "ff69b4" },
            { token: "primitive", foreground: "4864aa" },
            { token: "builtin", foreground: "4864aa" },
          ];
          f.editor.defineTheme("replit-light", {
            base: "vs",
            inherit: !0,
            rules: [
              { token: "attribute.name.html", foreground: "984e9c" },
              { token: "attribute.value.html", foreground: "ac9037" },
              { token: "delimiter.html", foreground: "1F217D" },
              { token: "tag.html", foreground: "4d7fe2" },
              { token: "metatag.content.html", foreground: "3953A4" },
              {
                token: "comment.content",
                foreground: "AAAAAA",
                fontStyle: "italic",
              },
              { token: "comment", foreground: "AAAAAA" },
              { token: "predefined", foreground: "000080" },
              { token: "namespace", foreground: "000080" },
              { token: "constructor", foreground: "7b2cb3" },
              { token: "function", foreground: "7b2cb3" },
            ].concat(e),
            colors: { "editor.lineHighlightBackground": "#f5f5f5" },
          }),
            f.editor.defineTheme("replit-dark", {
              base: "vs-dark",
              inherit: !0,
              rules: [
                { token: "predefined", foreground: "9932CC" },
                { token: "namespace", foreground: "B0C4DE" },
                { token: "constructor", foreground: "EEE8AA" },
                { token: "function", foreground: "dcdcaa" },
              ].concat(e),
              colors: {
                "editor.lineHighlightBackground": "#282828",
                "editor.background": h.a.replitDark.editor.background,
              },
            });
        })(),
        f.languages.register({
          id: "reason",
          extensions: [".re", ".rei"],
          aliases: ["Reason", "reasonml"],
          mimetypes: ["text/x-reason"],
        }),
        f.languages.register({
          id: "haskell",
          extensions: [".hs", ".lhs"],
          aliases: ["Haskell"],
          mimetypes: ["text/x-haskell"],
        }),
        f.languages.register({
          id: "elixir",
          extensions: [".exs", ".ex"],
          aliases: ["Elixir"],
          mimetypes: ["text/x-elixir"],
        }),
        f.languages.register({
          id: "dart",
          extensions: [".dart"],
          aliases: ["Dart"],
          mimetypes: ["text/x-dart"],
        }),
        f.languages.register({
          id: "perl6",
          extensions: [
            ".p6",
            ".pl6",
            ".pm6",
            ".pod6",
            ".t6",
            ".raku",
            ".rakumod",
            ".rakutest",
          ],
          aliases: ["Perl 6", "perl 6", "Raku", "raku"],
          mimetypes: ["text/x-perl6"],
        }),
        f.languages.register({
          id: "kotlin",
          extensions: [".kt", ".kts"],
          aliases: ["Kotlin"],
          mimetypes: ["text/x-kotlin"],
        }),
        f.languages.register({
          id: "ocaml",
          extensions: [".ml", ".mli"],
          aliases: ["OCaml"],
          mimetypes: ["text/x-ocaml"],
        }),
        f.languages.register({
          id: "erlang",
          extensions: [".erl", ".hrl"],
          aliases: ["Erlang"],
          mimetypes: ["text/x-erlang"],
        }),
        f.languages.register({
          id: "nim",
          extensions: [".nim"],
          aliases: ["Nim"],
          mimetypes: ["text/x-nim"],
        }),
        f.languages.register({
          id: "forth",
          extensions: [".fth"],
          aliases: ["Forth"],
          mimetypes: ["text/x-forth"],
        }),
        f.languages.register({
          id: "d",
          extensions: [".d"],
          aliases: ["D", "d-lang", "dlang"],
          mimetypes: ["text/x-d"],
        }),
        f.languages.register({
          id: "ejs",
          extensions: [".ejs"],
          aliases: ["EJS", "ejs"],
          mimetypes: ["text/x-ejs"],
        }),
        f.languages.register({
          id: "elm",
          extensions: [".elm"],
          aliases: ["Elm"],
          mimetypes: ["text/x-elm"],
        }),
        f.languages.register({
          id: "fortran",
          extensions: [".f", ".for", ".f90"],
          aliases: ["Fortran"],
          mimetypes: ["text/x-fortran"],
        }),
        f.languages.register({
          id: "glsl",
          extensions: [
            ".vert",
            ".tesc",
            ".tese",
            ".geom",
            ".frag",
            ".comp",
            ".glsl",
            ".glslv",
            ".glslf",
            ".glslg",
          ],
          aliases: ["GLSL"],
          mimetypes: ["text/x-glsl"],
        }),
        f.languages.register({
          id: "gitignore",
          filenames: [".gitignore"],
          aliases: ["gitignore"],
          mimetypes: ["text/x-gitignore"],
        }),
        f.languages.register({
          id: "html_ruby",
          extensions: [".erb"],
          aliases: ["erb", "html_ruby"],
          mimetypes: ["text/x-erb"],
        }),
        f.languages.register({
          id: "vue",
          extensions: [".vue"],
          aliases: ["vue", "Vue", "Vue.js"],
        }),
        r
          .e(68)
          .then(r.bind(null, "tpLM"))
          .then(function (e) {
            f.languages.setMonarchTokensProvider("vue", e.language),
              f.languages.setLanguageConfiguration("vue", e.conf);
          }),
        f.languages.register({
          id: "lisp",
          extensions: [".lisp", ".lsp", ".l", ".fasl"],
          aliases: ["Lisp", "CLisp", "Common Lisp"],
          mimetypes: ["text/x-lisp"],
        }),
        f.languages.register({
          id: "prolog",
          extensions: [".pro", ".plg"],
          aliases: ["Prolog"],
          mimetypes: ["text/x-prolog"],
        }),
        f.languages.register({
          id: "toml",
          extensions: [".toml"],
          filenames: [".replit"],
          aliases: ["TOML"],
          mimetypes: ["text/x-toml"],
        }),
        f.languages.register({
          id: "elisp",
          extensions: [".el"],
          aliases: ["Elisp", "Emacs Lisp"],
          mimetypes: ["text/x-elisp"],
        }),
        f.languages.register({
          id: "coffee",
          extensions: [".coffee", ".litcoffee"],
          aliases: ["CoffeeScript", "coffeescript", "coffee"],
          mimetypes: ["text/x-coffeescript", "text/coffeescript"],
        }),
        f.languages.register({
          id: "makefile",
          filenames: ["Makefile", "makefile", "GNUmakefile"],
          aliases: ["Makefile"],
        }),
        (function () {
          f.languages.register({
            id: "replit-ts",
            extensions: [".ts", ".tsx"],
            aliases: ["TypeScript", "ts", "typescript"],
            mimetypes: ["text/typescript"],
          }),
            r
              .e(30)
              .then(r.bind(null, "87dK"))
              .then(function (e) {
                f.languages.setMonarchTokensProvider("replit-ts", e.language),
                  f.languages.setLanguageConfiguration("replit-ts", e.conf);
              });
          var e = {
            reactNamespace: "React",
            jsx: f.languages.typescript.JsxEmit.React,
            target: f.languages.typescript.ScriptTarget.ES2016,
            allowNonTsExtensions: !0,
            moduleResolution:
              f.languages.typescript.ModuleResolutionKind.NodeJs,
            experimentalDecorators: !0,
            noEmit: !0,
            allowJs: !0,
            typeRoots: ["node_modules/@types"],
          };
          f.languages.typescript.typescriptDefaults.setCompilerOptions(e),
            f.languages.typescript.javascriptDefaults.setCompilerOptions(e),
            f.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
              noSemanticValidation: !0,
              noSyntaxValidation: !0,
            });
        })(),
        f.languages.register({
          id: "replit-python-v".concat(Jr["replit-python"]),
          extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
          aliases: ["Python", "py"],
          firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
        }),
        f.languages.register({
          id: "replit-js-v".concat(Jr["replit-js"]),
          extensions: [".js", ".es6", ".jsx", ".jsm", ".mjs"],
          firstLine: "^#!.*\\bnode",
          filenames: ["jakefile"],
          aliases: ["JavaScript", "javascript", "js"],
        }),
        f.languages.register({
          id: "basic-v".concat(Jr.basic),
          extensions: [".bas"],
          aliases: ["pg-basic", "basic", "pg basic"],
          mimetypes: ["text/x-basic"],
        }),
        f.languages.setLanguageConfiguration(
          "replit-python-v".concat(Jr["replit-python"]),
          {
            comments: { lineComment: "#", blockComment: ["'''", "'''"] },
            brackets: [
              ["{", "}"],
              ["[", "]"],
              ["(", ")"],
            ],
            autoClosingPairs: [
              { open: "{", close: "}" },
              { open: "[", close: "]" },
              { open: "(", close: ")" },
              { open: '"', close: '"', notIn: ["string"] },
              { open: "'", close: "'", notIn: ["string", "comment"] },
            ],
            surroundingPairs: [
              { open: "{", close: "}" },
              { open: "[", close: "]" },
              { open: "(", close: ")" },
              { open: '"', close: '"' },
              { open: "'", close: "'" },
            ],
            onEnterRules: [
              {
                beforeText: new RegExp(
                  "^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$"
                ),
                action: { indentAction: f.languages.IndentAction.Indent },
              },
            ],
            folding: { offSide: !0 },
          }
        ),
        f.languages.setLanguageConfiguration(
          "replit-js-v".concat(Jr["replit-js"]),
          {
            wordPattern:
              /(-?\d*\.\d\w*)|([^`~!@#%^&*()\-=+[{\]}\\|;:'",.<>/?\s]+)/g,
            comments: { lineComment: "//", blockComment: ["/*", "*/"] },
            brackets: [
              ["{", "}"],
              ["[", "]"],
              ["(", ")"],
            ],
            onEnterRules: [
              {
                beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
                afterText: /^\s*\*\/$/,
                action: {
                  indentAction: f.languages.IndentAction.IndentOutdent,
                  appendText: " * ",
                },
              },
              {
                beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
                action: {
                  indentAction: f.languages.IndentAction.None,
                  appendText: " * ",
                },
              },
              {
                beforeText: /^(\t| {2})* \*( ([^*]|\*(?!\/))*)?$/,
                action: {
                  indentAction: f.languages.IndentAction.None,
                  appendText: "* ",
                },
              },
              {
                beforeText: /^(\t| {2})* \*\/\s*$/,
                action: {
                  indentAction: f.languages.IndentAction.None,
                  removeText: 1,
                },
              },
            ],
            autoClosingPairs: [
              { open: "{", close: "}" },
              { open: "[", close: "]" },
              { open: "(", close: ")" },
              { open: '"', close: '"', notIn: ["string"] },
              { open: "'", close: "'", notIn: ["string", "comment"] },
              { open: "`", close: "`", notIn: ["string", "comment"] },
              { open: "/**", close: " */", notIn: ["string"] },
            ],
            folding: {
              markers: {
                start: new RegExp("^\\s*//\\s*#?region\\b"),
                end: new RegExp("^\\s*//\\s*#?endregion\\b"),
              },
            },
          }
        );
      var en = (function (e) {
        Object(s.a)(r, e);
        var t = Qr(r);
        function r() {
          var e;
          Object(i.a)(this, r);
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(o))).createAnnotation =
              function () {
                var t = e.editor.getSelection(),
                  r = e.editor.getModel(),
                  n = { lineNumber: t.startLineNumber, column: t.startColumn },
                  o = { lineNumber: t.endLineNumber, column: t.endColumn },
                  i = r.getOffsetAt(n),
                  a = r.getOffsetAt(o);
                e.props.createAnnotation({ indexStart: i, indexEnd: a });
              }),
            (e.createEditor = function (t) {
              t &&
                t !== e.containerRef &&
                ((e.containerRef = t),
                (g.a.prototype.openCodeEditor = function (t) {
                  return f.Promise.wrap(e.props.openEditor(t));
                }),
                (e.editor = f.editor.create(t, Zr({}, Vr), {
                  textModelService: {
                    createModelReference: function (t) {
                      var r = e.props.getModelFromUri(t).then(function (e) {
                        var t = e.model,
                          r = e.shouldDispose;
                        return {
                          object: t ? new m.f(t) : null,
                          dispose: function () {
                            r && !t.isDisposed() && t.dispose();
                          },
                        };
                      });
                      return f.Promise.wrap(r);
                    },
                    registerTextModelContentProvider: function () {
                      return { dispose: function () {} };
                    },
                  },
                })),
                e.props.registerEditor(e.editor),
                (e.syntaxHighlighter = new w(e.editor)),
                e.editor.addAction({
                  id: "shell",
                  label: "Open Shell",
                  keybindings: [
                    f.KeyMod.CtrlCmd | f.KeyMod.Shift | f.KeyCode.C,
                  ],
                  run: function () {
                    return e.props.openShell();
                  },
                }),
                e.editor.addAction({
                  id: "copy link",
                  label: "Copy Link To Line",
                  contextMenuGroupId: "9_cutcopypaste",
                  contextMenuOrder: 3,
                  run: function () {
                    return Object(k.a)(e.getLinkToLine());
                  },
                }),
                window["enable-annotations"] &&
                  e.editor.addAction({
                    id: "create-annotation-group",
                    label: "Annotate",
                    contextMenuGroupId: "2_annotation",
                    contextMenuOrder: 1,
                    run: function () {
                      return e.createAnnotation();
                    },
                  }),
                e.editor.addCommand(
                  f.KeyMod.CtrlCmd | f.KeyCode.Enter,
                  e.props.onRun
                ),
                e.editor.addCommand(
                  f.KeyMod.CtrlCmd | f.KeyCode.KEY_S,
                  function () {}
                ),
                e.editor.addCommand(
                  f.KeyMod.CtrlCmd | f.KeyMod.Shift | f.KeyCode.KEY_P,
                  function () {
                    e.editor.getAction("editor.action.quickCommand").run();
                  }
                ),
                window["enable-annotations"] &&
                  e.editor.addCommand(
                    f.KeyMod.CtrlCmd | f.KeyMod.Shift | f.KeyCode.US_SLASH,
                    function () {
                      e.editor.getAction("create-annotation-group").run();
                    }
                  ));
            }),
            e
          );
        }
        return (
          Object(a.a)(r, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.syntaxHighlighter && this.syntaxHighlighter.dispose(),
                  this.editor.setModel(null),
                  this.editor.dispose(),
                  this.props.registerEditor(null);
              },
            },
            {
              key: "getLinkToLine",
              value: function () {
                var e = this.editor
                    .getModel()
                    .uri.path.split("/")
                    .slice(4)
                    .join("/"),
                  t = this.editor.getPosition(),
                  r = t.lineNumber,
                  n = t.column;
                return window.location.href.replace(
                  window.location.hash,
                  "#".concat(e, ":").concat(r, ":").concat(n)
                );
              },
            },
            {
              key: "render",
              value: function () {
                return Object(n.jsxs)("div", {
                  ref: this.createEditor,
                  className: "jsx-1382733249 replit-monaco-editor-container",
                  children: [
                    Object(n.jsx)(d.a, {
                      id: "58996423",
                      children: [
                        ".replit-monaco-editor-container.jsx-1382733249{position:absolute;left:0;top:0;width:100%;height:100%;max-height:100% !important;max-width:100% !important;margin:0;padding:0;overflow:hidden;background:var(--color-background-1);border-bottom-right-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1);box-shadow:0px 4px 16px 0px rgba(0,0,0,0.08);}",
                        ".context-view{border-radius:var(--border-radius-1);}",
                        ".context-view .monaco-menu{background-color:var(--color-background-1);box-shadow:var(--shadow-1);border-radius:var(--border-radius-1);font-family:var(--font-family-sans-serif);}",
                        ".context-view .monaco-menu a{color:var(--color-primary-1);}",
                      ],
                    }),
                    Object(n.jsx)(d.a, {
                      id: "2603151567",
                      children: [
                        ".sidenav-closed .replit-monaco-editor-container{border-bottom-left-radius:0;}",
                        ".cursor-replit{position:relative;background-color:#cceeff;border-left:2px solid #f0f;pointer-events:none;}",
                        ".selection-replit{position:relative;background-color:#f0f;opacity:0.2;pointer-events:none;}",
                        ".cursor-tag-replit::after{content:'Replit';position:relative;bottom:calc(100% - 4px);left:-2px;background-color:#f0f;color:white;z-index:10;padding:1px;border-radius:3px;pointer-events:none;-webkit-animation:fadeOut 2s ease-in forwards;animation:fadeOut 2s ease-in forwards;}",
                        "@-webkit-keyframes fadeOut{0%{opacity:1;}100%{opacity:0;}}",
                        "@keyframes fadeOut{0%{opacity:1;}100%{opacity:0;}}",
                        ".replit-monaco-editor-debugger{background:#cfedf8;}",
                        ".scroll-decoration{display:none !important;}",
                        ".monaco-editor{border-bottom-right-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1);background-color:var(--color-background-1);}",
                      ],
                    }),
                    Object(n.jsx)(tn, {}),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(p.Component);
      function tn() {
        return Object(n.jsx)(d.a, {
          id: "2404695840",
          children: [
            ".monaco-editor.vs .attr-name,.monaco-editor.vs .attribute-name{color:#984e9c;}",
            ".monaco-editor.vs .attr-value{color:#ac9037;}",
            ".monaco-editor.vs .start-tag-name,.monaco-editor.vs .end-tag-name,.monaco-editor.vs .tag-name,.monaco-editor.vs .tag{color:#4d7fe2;}",
            ".monaco-editor.vs .tag-start,.monaco-editor.vs .tag-end,.monaco-editor.vs .tag-open,.monaco-editor.vs .tag-close,.monaco-editor.vs .end-tag-start,.monaco-editor.vs .end-tag-end{color:#1f217d;}",
            ".monaco-editor.vs .modifier,.monaco-editor.vs .arrow-operator,.monaco-editor.vs .storage.type.arrow-operator,.monaco-editor.vs .as-keyword,.monaco-editor.vs .await-keyword,.monaco-editor.vs .catch-keyword,.monaco-editor.vs .default-keyword,.monaco-editor.vs .else-keyword,.monaco-editor.vs .export-keyword,.monaco-editor.vs .from-keyword,.monaco-editor.vs .if-keyword,.monaco-editor.vs .import-keyword,.monaco-editor.vs .return-keyword,.monaco-editor.vs .private-keyword,.monaco-editor.vs .static-keyword,.monaco-editor.vs .try-keyword{color:#272a9d;}",
            ".monaco-editor.vs .regex,.monaco-editor.vs .regexp,.monaco-editor.vs .string.regexp{color:#227e80;}",
            ".monaco-editor.vs .jsx-exp-start,.monaco-editor.vs .jsx-exp-end{color:#ac9037;}",
            ".monaco-editor.vs .variable{color:#001188;}",
            ".monaco-editor.vs .constructor,.monaco-editor.vs .class-name,.monaco-editor.vs .function,.monaco-editor.vs .function-variable{color:#7b2cb3;}",
            ".monaco-editor.vs .parameter{font-style:italic;}",
            ".monaco-editor.vs .keyword,.monaco-editor.vs .keyword.operator{color:#0000ff;}",
            ".monaco-editor.vs .primitive,.monaco-editor.vs .primitive.storage,.monaco-editor.vs .builtin{color:#4864aa;}",
            ".monaco-editor.vs .string{color:#a31515;}",
            ".monaco-editor.vs .operator{color:#050301;}",
            ".monaco-editor.vs .comment{color:#aaaaaa;}",
            ".monaco-editor.vs .label{color:#ac9037;}",
            ".monaco-editor.vs .storage.type,.monaco-editor.vs .type{color:#008080;}",
            ".monaco-editor.vs .number,.monaco-editor.vs .numeric{color:#09885a;}",
            ".monaco-editor.vs .constant.language,.monaco-editor.vs .constant.other{color:#1a1aff;}",
            ".monaco-editor.vs .constant.escape{color:#ff69b4;}",
            ".monaco-editor.vs-dark .attr-name,.monaco-editor.vs-dark .attribute-name{color:#9cdcfe;}",
            ".monaco-editor.vs-dark .attr-value{color:#ce9178;}",
            ".monaco-editor.vs-dark .start-tag-name,.monaco-editor.vs-dark .end-tag-name,.monaco-editor.vs-dark .tag-name,.monaco-editor.vs-dark .tag{color:#569cd6;}",
            ".monaco-editor.vs-dark .tag-start,.monaco-editor.vs-dark .tag-end,.monaco-editor.vs-dark .tag-open,.monaco-editor.vs-dark .tag-close,.monaco-editor.vs-dark .end-tag-start,.monaco-editor.vs-dark .end-tag-end{color:#808080;}",
            ".monaco-editor.vs-dark .modifier,.monaco-editor.vs-dark .arrow-operator,.monaco-editor.vs-dark .storage.type.arrow-operator,.monaco-editor.vs-dark .as-keyword,.monaco-editor.vs-dark .await-keyword,.monaco-editor.vs-dark .catch-keyword,.monaco-editor.vs-dark .default-keyword,.monaco-editor.vs-dark .else-keyword,.monaco-editor.vs-dark .export-keyword,.monaco-editor.vs-dark .from-keyword,.monaco-editor.vs-dark .if-keyword,.monaco-editor.vs-dark .import-keyword,.monaco-editor.vs-dark .return-keyword,.monaco-editor.vs-dark .private-keyword,.monaco-editor.vs-dark .static-keyword,.monaco-editor.vs-dark .try-keyword{color:#c586c0;}",
            ".monaco-editor.vs-dark .regex,.monaco-editor.vs-dark .regexp,.monaco-editor.vs-dark .string.regexp{color:#d16969;}",
            ".monaco-editor.vs-dark .jsx-exp-start,.monaco-editor.vs-dark .jsx-exp-end{color:#ce9178;}",
            ".monaco-editor.vs-dark .variable{color:#74b0df;}",
            ".monaco-editor.vs-dark .constructor,.monaco-editor.vs-dark .class-name,.monaco-editor.vs-dark .function,.monaco-editor.vs-dark .function-variable{color:#dcdcaa;}",
            ".monaco-editor.vs-dark .parameter{font-style:italic;}",
            ".monaco-editor.vs-dark .keyword,.monaco-editor.vs-dark .keyword.operator{color:#569cd6;}",
            ".monaco-editor.vs-dark .primitive,.monaco-editor.vs-dark .primitive.storage,.monaco-editor.vs-dark .builtin{color:#4864aa;}",
            ".monaco-editor.vs-dark .string{color:#ce9178;}",
            ".monaco-editor.vs-dark .comment{color:#608b4e;}",
            ".monaco-editor.vs-dark .label{color:#ff0000;}",
            ".monaco-editor.vs-dark .storage.type,.monaco-editor.vs-dark .type{color:#3dc9b0;}",
            ".monaco-editor.vs-dark .operator{color:#d4d4d4;}",
            ".monaco-editor.vs-dark .number,.monaco-editor.vs-dark .numeric{color:#b5cea8;}",
            ".monaco-editor.vs-dark .constant.language,.monaco-editor.vs-dark .constant.other{color:#70b6f0;}",
            ".monaco-editor.vs-dark .constant.escape{color:#ff69b4;}",
          ],
        });
      }
    },
  },
]);

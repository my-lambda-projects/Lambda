(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [176],
  {
    ASqc: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return mr;
        });
      var r = n('BGKE'),
        o = n('H+61'),
        i = n('UlJF'),
        a = n('+Css'),
        s = n('7LId'),
        l = n('VIvw'),
        u = n('iHvq'),
        c = n('cpVT'),
        d = n('MX0m'),
        p = n.n(d),
        f = n('q1tI'),
        m = n('wsa1'),
        g = n('PGsk'),
        h = n('0VEe'),
        b = n('eDpD'),
        v = n('0bU4'),
        y = n('xvhg'),
        x = n('yz3v'),
        w = n('WNtD'),
        k = n('LvDl');

      function C(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return A(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return A(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[r++],
                    };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }

      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var O = function e(t) {
          var n = this;
          Object(o.a)(this, e),
            Object(c.a)(this, 'editor', void 0),
            Object(c.a)(this, 'disposables', void 0),
            Object(c.a)(this, 'modeWorkers', void 0),
            Object(c.a)(this, 'lastDecorations', void 0),
            Object(c.a)(this, 'oldLineCount', void 0),
            Object(c.a)(this, 'lastHighlightAll', void 0),
            Object(c.a)(this, 'dispose', function () {
              n.modeWorkers.forEach(function (e) {
                e.worker &&
                  ((e.worker.onmessage = null),
                  (e.worker.onerror = null),
                  e.worker.terminate(),
                  (e.worker = null));
              }),
                n.disposables.forEach(function (e) {
                  e.dispose();
                });
            }),
            Object(c.a)(this, 'updateDecorations', function (e) {
              var t = e.map(function (e) {
                return {
                  range: new m.Range(e.startLine, e.start, e.endLine, e.end),
                  options: {
                    inlineClassName: e.kind,
                  },
                };
              });
              n.lastDecorations = n.editor.deltaDecorations(
                n.lastDecorations || [],
                t
              );
            }),
            Object(c.a)(this, 'registerModeWorker', function (e) {
              (e.worker = e.Ctor()),
                e.worker.postMessage({
                  init: !0,
                  aceVersion: x.version,
                }),
                (e.worker.onmessage = function (e) {
                  var t = e.data,
                    r = t.classifications,
                    o = t.highlightAllAgain;
                  n.lastHighlightAll || (n.lastHighlightAll = o),
                    window.requestAnimationFrame(function () {
                      n.updateDecorations(r);
                    });
                });
            }),
            Object(c.a)(this, 'triggerHighlight', function (e) {
              var t = n.editor,
                r = n.modeWorkers;
              if (!t)
                throw new Error('No editor setup for syntax highlighting');
              var o = t.getModel();
              if (o) {
                var i,
                  a = o.getModeId(),
                  s = o.uri.toString(),
                  l = a.replace(/-v\d+$/, ''),
                  u = C(r);
                try {
                  for (u.s(); !(i = u.n()).done; ) {
                    var c = i.value;
                    if (c.languages.includes(l)) {
                      var d = c.worker;
                      if (
                        (d || (n.registerModeWorker(c), (d = c.worker)),
                        c.isAce)
                      ) {
                        var p = t.getVisibleRanges(),
                          f = Object(y.a)(p, 1)[0],
                          m = null,
                          g = o.getLineCount(),
                          h = g - n.oldLineCount,
                          b = n.lastHighlightAll;
                        if (e && 'changes' in e) {
                          m = e.changes.reduce(function (e, t) {
                            var n = t.range;
                            return null === e || e >= n.startLineNumber
                              ? n.startLineNumber - 1
                              : e;
                          }, null);
                          var v = Object(y.a)(e.changes, 1)[0].range;
                          v.endLineNumber - v.startLineNumber >
                            f.startLineNumber - f.endLineNumber &&
                            ((b = !0), (n.oldLineCount = g));
                        }
                        if (1 === g && 0 === o.getLineLength(1)) break;
                        for (
                          var x = 21 + Math.min(Math.max(-10, h), 10),
                            w = Math.max(f.startLineNumber - x, 0),
                            k = null !== m ? Math.min(w, m) : w,
                            A = Math.min(f.endLineNumber + x, g - 1),
                            O = null !== m ? Math.max(A, m) : A,
                            j = b ? 0 : k,
                            $ = Array(O - j + 1),
                            S = 0;
                          S < $.length;
                          S++
                        )
                          $[S] = o.getLineContent(j + S + 1);
                        n.lastHighlightAll
                          ? (n.lastHighlightAll = !1)
                          : (n.lastHighlightAll = b),
                          d.postMessage({
                            lines: $,
                            visibleRange: [k, O],
                            highlightAll: b,
                            mode: a,
                            changeStartRow: m,
                            documentId: s,
                          });
                      } else
                        d.postMessage({
                          code: o.getValue(),
                          mode: a,
                        });
                      break;
                    }
                  }
                } catch (E) {
                  u.e(E);
                } finally {
                  u.f();
                }
              }
            }),
            (this.editor = t),
            (this.lastDecorations = []),
            (this.disposables = []),
            (this.modeWorkers = w.map(function (e) {
              var t = e.languages,
                n = e.name,
                r = e.version;
              return {
                languages: t,
                Ctor: function () {
                  return new window.Worker(
                    '/public/'.concat(n).concat(r, '.js')
                  );
                },
                worker: null,
                isAce: 'aceSyntaxWorker' === n,
              };
            })),
            (this.oldLineCount = 1),
            (this.lastHighlightAll = !0);
          var r = k.throttle(function (e) {
            n.triggerHighlight(e);
          }, 100);
          this.disposables.push(
            t.onDidChangeModelContent(function (e) {
              r.cancel(), n.triggerHighlight(e);
            }),
            t.onDidChangeModel(function (e) {
              r.cancel(),
                (n.oldLineCount = 1),
                (n.lastHighlightAll = !0),
                n.triggerHighlight(e);
            }),
            t.onDidScrollChange(r)
          ),
            window.requestAnimationFrame(function () {
              return n.triggerHighlight();
            });
        },
        j = n('IjuC'),
        $ = function () {
          return ($ =
            Object.assign ||
            function (e) {
              for (
                var t, n = arguments, r = 1, o = arguments.length;
                r < o;
                r++
              )
                for (var i in (t = n[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        S = function (e, t, n) {
          null == n && 'string' === typeof e && (n = e.length),
            (this.string = e),
            (this.pos = this.start = t || 0),
            (this.end = n);
        };
      (S.prototype.eof = function () {
        return this.pos >= this.end;
      }),
        (S.prototype.limit = function (e, t) {
          return new this.constructor(this.string, e, t);
        }),
        (S.prototype.peek = function () {
          return this.string.charCodeAt(this.pos);
        }),
        (S.prototype.next = function () {
          if (this.pos < this.string.length)
            return this.string.charCodeAt(this.pos++);
        }),
        (S.prototype.eat = function (e) {
          var t = this.peek(),
            n = 'function' === typeof e ? e(t) : t === e;
          return n && this.next(), n;
        }),
        (S.prototype.eatWhile = function (e) {
          for (var t = this.pos; !this.eof() && this.eat(e); );
          return this.pos !== t;
        }),
        (S.prototype.backUp = function (e) {
          this.pos -= e || 1;
        }),
        (S.prototype.current = function () {
          return this.substring(this.start, this.pos);
        }),
        (S.prototype.substring = function (e, t) {
          return this.string.slice(e, t);
        }),
        (S.prototype.error = function (e) {
          var t = new Error(e + ' at char ' + (this.pos + 1));
          return (
            (t.originalMessage = e),
            (t.pos = this.pos),
            (t.string = this.string),
            t
          );
        });
      var E = {
          escape: 92,
          throws: !1,
        },
        T = function (e, t) {
          t = t ? Object.assign({}, E, t) : E;
          var n = e.pos,
            r = e.peek();
          if (e.eat(_)) {
            for (; !e.eof(); )
              switch (e.next()) {
                case r:
                  return (e.start = n), !0;
                case t.escape:
                  e.next();
              }
            if (((e.pos = n), t.throws))
              throw e.error('Unable to consume quoted string');
          }
          return !1;
        };

      function _(e) {
        return 39 === e || 34 === e;
      }

      function M(e) {
        return e > 47 && e < 58;
      }

      function N(e, t, n) {
        return (n = n || 90), (e &= -33) >= (t = t || 65) && e <= n;
      }

      function L(e) {
        return M(e) || N(e);
      }

      function z(e) {
        return 32 === e || 9 === e || 160 === e;
      }

      function R(e) {
        return z(e) || 10 === e || 13 === e;
      }

      function q(e) {
        for (var t, n, r = new S(e), o = [], i = '', a = 0, s = 0; !r.eof(); )
          (t = r.peek()),
            (s = r.pos),
            92 === t
              ? (r.next(), r.next())
              : (n = D(r, i.length + s - a))
              ? (o.push(n),
                (i += r.string.slice(a, s) + n.placeholder),
                (a = r.pos))
              : r.next();
        return new U(i + r.string.slice(a), o);
      }

      function I(e, t) {
        return t ? '${' + e + ':' + t + '}' : '${' + e + '}';
      }

      function D(e, t) {
        var n = e.pos;
        if (e.eat(36)) {
          var r = W(e),
            o = '';
          if (null != r) return new P(r, o, t);
          if (
            e.eat(123) &&
            null != (r = W(e)) &&
            (e.eat(58) &&
              (o = (function (e) {
                var t,
                  n = [];
                e.start = e.pos;
                for (; !e.eof(); ) {
                  if (123 === (t = e.peek())) n.push(e.pos);
                  else if (125 === t) {
                    if (!n.length) break;
                    n.pop();
                  }
                  e.next();
                }
                if (n.length)
                  throw e.error(
                    'Unable to find matching "}" for curly brace at ' + n.pop()
                  );
                return e.current();
              })(e)),
            e.eat(125))
          )
            return new P(r, o, t);
        }
        e.pos = n;
      }

      function W(e) {
        if (((e.start = e.pos), e.eatWhile(M))) return Number(e.current());
      }
      var P = function (e, t, n) {
          (this.index = e),
            (this.placeholder = t),
            (this.location = n),
            (this.length = this.placeholder.length);
        },
        U = function (e, t) {
          (this.string = e), (this.fields = t);
        };
      (U.prototype.mark = function (e) {
        return (function (e, t, n) {
          n = n || I;
          var r = t
              .map(function (e, t) {
                return {
                  order: t,
                  field: e,
                  end: e.location + e.length,
                };
              })
              .sort(function (e, t) {
                return e.end - t.end || e.order - t.order;
              }),
            o = 0;
          return (
            r
              .map(function (t) {
                var r = e.substr(t.field.location, t.field.length),
                  i = e.slice(o, t.field.location);
                return (o = t.end), i + n(t.field.index, r);
              })
              .join('') + e.slice(o)
          );
        })(this.string, this.fields, e);
      }),
        (U.prototype.toString = function () {
          return this.string;
        });
      var F = function (e) {
          return e;
        },
        B = function (e, t, n) {
          'object' === typeof t && ((n = t), (t = null)),
            (this.node = e),
            (this._fieldsRenderer = t || F),
            (this.open = null),
            (this.beforeOpen = ''),
            (this.afterOpen = ''),
            (this.close = null),
            (this.beforeClose = ''),
            (this.afterClose = ''),
            (this.text = null),
            (this.beforeText = ''),
            (this.afterText = ''),
            (this.indent = ''),
            (this.newline = ''),
            n && Object.assign(this, n);
        };
      (B.prototype.clone = function () {
        return new this.constructor(this.node, this);
      }),
        (B.prototype.indentText = function (e) {
          var t = this,
            n = (function (e) {
              return (e || '').split(/\r\n|\r|\n/g);
            })(e);
          if (1 === n.length) return e;
          var r = this.newline || this.indent ? this.newline : ' ';
          return n
            .map(function (e, n) {
              return n ? t.indent + e : e;
            })
            .join(r);
        }),
        (B.prototype.renderFields = function (e) {
          return this._fieldsRenderer(e);
        }),
        (B.prototype.toString = function (e) {
          var t = this._wrap(this.open, this.beforeOpen, this.afterOpen),
            n = this._wrap(this.close, this.beforeClose, this.afterClose);
          return (
            t +
            this._wrap(this.text, this.beforeText, this.afterText) +
            (null != e ? e : '') +
            n
          );
        }),
        (B.prototype._wrap = function (e, t, n) {
          return (
            (t = null != t ? t : ''),
            (n = null != n ? n : ''),
            null != e
              ? ((e = t ? e.replace(/^\s+/, '') : e),
                (e = n ? e.replace(/\s+$/, '') : e),
                t + this.indentText(e) + n)
              : ''
          );
        });
      var H = function (e, t) {
        return t || '';
      };

      function G(e, t, n) {
        'undefined' === typeof n && ((n = t), (t = null)), (t = t || H);
        var r = {
          index: 1,
        };
        return Y(e.children, n, function (e) {
          return null == e
            ? t(r.index++)
            : (function (e, t) {
                var n = 'object' === typeof e ? e : q(e),
                  r = -1;
                n.fields.forEach(function (e) {
                  (e.index += t.index), e.index > r && (r = e.index);
                }),
                  -1 !== r && (t.index = r + 1);
                return n;
              })(e, r).mark(t);
        });
      }

      function Y(e, t, n) {
        return e
          .map(function (e) {
            var r = t(new B(e, n));
            return r ? r.toString(Y(e.children, t, n)) : '';
          })
          .join('');
      }
      var K = {
        shortHex: !0,
        between: ': ',
        after: ';',
      };

      function V(e, t, n) {
        n = n || {};
        var r = Object.assign({}, K, n && n.format);
        return G(e, n.field, function (n) {
          var o = n.node,
            i = X(o, r);
          o.attributes.length &&
            (i = (function (e, t) {
              var n = q(e),
                r = n.fields.length;
              if (r)
                for (
                  (t = t.slice()).length > r &&
                  (t = t.slice(0, r - 1).concat(t.slice(r - 1).join(', ')));
                  t.length;

                ) {
                  var o = t.shift(),
                    i = n.fields.shift(),
                    a = o.length - i.length;
                  n.string =
                    n.string.slice(0, i.location) +
                    o +
                    n.string.slice(i.location + i.length);
                  for (var s = 0, l = n.fields.length; s < l; s++)
                    n.fields[s].location += a;
                }
              return n;
            })(
              i,
              o.attributes.map(function (e) {
                return X(e, r);
              })
            ));
          return (
            (n.open = o.name && t.name(o.name)),
            (n.afterOpen = r.between),
            (n.text = n.renderFields(i || null)),
            !n.open ||
              (n.text && n.text.endsWith(';')) ||
              (n.afterText = r.after),
            t.get('format') &&
              ((n.newline = '\n'),
              e.lastChild !== o && (n.afterText += n.newline)),
            n
          );
        });
      }

      function X(e, t) {
        return e.value &&
          'object' === typeof e.value &&
          'css-value' === e.value.type
          ? e.value.value
              .map(function (e) {
                return e && 'object' === typeof e
                  ? 'color' === e.type
                    ? e.toString(t.shortHex)
                    : e.toString()
                  : String(e);
              })
              .join(' ')
          : null != e.value
          ? String(e.value)
          : '';
      }
      var J = {
        css: {
          between: ': ',
          after: ';',
        },
        scss: 'css',
        less: 'css',
        sass: {
          between: ': ',
          after: '',
        },
        stylus: {
          between: ' ',
          after: '',
        },
      };

      function Z(e, t, n, r) {
        return (
          'object' === typeof n && ((r = n), (n = null)),
          (function (e) {
            return !!e && e in J;
          })(n) || (n = 'css'),
          V(
            e,
            t,
            (r = Object.assign({}, r, {
              format: Q(n, r),
            }))
          )
        );
      }

      function Q(e, t) {
        var n = J[e];
        return (
          'string' === typeof n && (n = J[n]),
          Object.assign({}, n, t && t.format)
        );
      }

      function ee(e, t) {
        if ((e = e.toLowerCase()) === (t = t.toLowerCase())) return 1;
        if (!t || e.charCodeAt(0) !== t.charCodeAt(0)) return 0;
        for (
          var n, r, o, i, a, s = e.length, l = t.length, u = 1, c = 1, d = l;
          u < s;

        ) {
          for (n = e.charCodeAt(u), o = !1, i = !1; c < l; ) {
            if (n === (r = t.charCodeAt(c))) {
              (o = !0), (d += (l - c) * (i ? 2 : 1));
              break;
            }
            (i = 45 === r), c++;
          }
          if (!o) break;
          u++;
        }
        return d && (d * (u / s)) / (((a = l) * (a + 1)) / 2);
      }
      var te = /^([a-z-]+)(?:\s*:\s*([^\n\r]+))?$/;

      function ne(e) {
        return (function (e) {
          e = e.sort(ie);
          for (var t = [], n = 0, r = void 0, o = void 0; n < e.length; n++)
            if ((r = e[n]).property) {
              for (; t.length; ) {
                if (
                  ((o = t[t.length - 1]),
                  0 === r.property.indexOf(o.property) &&
                    45 === r.property.charCodeAt(o.property.length))
                ) {
                  o.addDependency(r), t.push(r);
                  break;
                }
                t.pop();
              }
              t.length || t.push(r);
            }
          return e;
        })(
          e.map(function (e) {
            return new re(e.key, e.value);
          })
        );
      }
      var re = function (e, t) {
          (this.key = e), (this.value = t), (this.property = null);
          var n = t && t.match(te);
          n && ((this.property = n[1]), (this.value = n[2])),
            (this.dependencies = []);
        },
        oe = {
          defaultValue: {
            configurable: !0,
          },
        };

      function ie(e, t) {
        return e.key === t.key ? 0 : e.key < t.key ? -1 : 1;
      }

      function ae(e) {
        return /^\s*[\w-]+/.test(e);
      }

      function se(e) {
        return String(e).split('|');
      }
      (re.prototype.addDependency = function (e) {
        this.dependencies.push(e);
      }),
        (oe.defaultValue.get = function () {
          return null != this.value ? se(this.value)[0] : null;
        }),
        (re.prototype.keywords = function () {
          var e,
            t,
            n = [],
            r = new Set(),
            o = 0;
          for (this.property && n.push(this); o < n.length; )
            if ((e = n[o++]).value) {
              t = se(e.value).filter(ae);
              for (var i = 0; i < t.length; i++) r.add(t[i].trim());
              for (var a = 0, s = e.dependencies; a < s.length; a++)
                -1 === n.indexOf(s[a]) && n.push(s[a]);
            }
          return Array.from(r);
        }),
        Object.defineProperties(re.prototype, oe);
      var le = ['auto', 'inherit', 'unset'],
        ue = [
          'z-index',
          'line-height',
          'opacity',
          'font-weight',
          'zoom',
          'flex',
          'flex-grow',
          'flex-shrink',
        ],
        ce = {
          intUnit: 'px',
          floatUnit: 'em',
          unitAliases: {
            e: 'em',
            p: '%',
            x: 'ex',
            r: 'rem',
          },
          fuzzySearchMinScore: 0,
        };

      function de(e, t, n) {
        (n = Object.assign({}, ce, n)).unitAliases = Object.assign(
          {},
          ce.unitAliases,
          n && n.unitAliases
        );
        var r = (function (e) {
          return ne(
            e.all({
              type: 'string',
            })
          );
        })(t);
        return (
          e.walk(function (e) {
            return (function (e, t, n) {
              if (n.property)
                return (function (e, t, n) {
                  var r = le.slice();
                  t && (r = r.concat(t.keywords()));
                  var o = [e.name]
                    .concat(e.value.value)
                    .filter(Boolean)
                    .map(function (e) {
                      return (
                        (('string' === typeof e || 'keyword' === e.type) &&
                          fe(
                            (e = String(e)),
                            r,
                            null,
                            n.fuzzySearchMinScore
                          )) ||
                        e
                      );
                    });
                  return (e.name = null), (e.value.value = o), e;
                })(
                  e,
                  t.find(function (e) {
                    return e.property === n.property;
                  }),
                  n
                );
              var r = fe(e.name, t, 'key', n.fuzzySearchMinScore);
              if (!r) return '!' === e.name ? pe(e, '!important') : e;
              return r.property
                ? (function (e, t, n) {
                    var r = e.name;
                    if (
                      ((e.name = t.property),
                      e.value && 'object' === typeof e.value)
                    ) {
                      var o = t.keywords();
                      if (e.value.size)
                        for (
                          var i = 0, a = void 0;
                          i < e.value.value.length;
                          i++
                        )
                          '!' === (a = e.value.value[i])
                            ? (a = (i ? '' : '${1} ') + '!important')
                            : ge(a)
                            ? (a = fe(a.value, o) || fe(a.value, le) || a)
                            : he(a) && (a = ve(e.name, a, n)),
                            (e.value.value[i] = a);
                      else {
                        var s = fe(
                          (function (e, t) {
                            for (var n = 0, r = 0; n < e.length; n++) {
                              if (-1 === (r = t.indexOf(e[n], r)))
                                return e.slice(n);
                              r++;
                            }
                            return '';
                          })(r, t.key),
                          o
                        );
                        s ||
                          ((s = t.defaultValue) &&
                            -1 === s.indexOf('${') &&
                            (s = '${1:' + s + '}')),
                          s && e.value.add(s);
                      }
                    }
                    return e;
                  })(e, r, n)
                : (function (e, t) {
                    return pe(e, t.value);
                  })(e, r);
            })(e, r, n);
          }),
          e
        );
      }

      function pe(e, t) {
        return (e.name = null), (e.value = t), e;
      }

      function fe(e, t, n, r) {
        if (!e) return null;
        var o = null,
          i = 0;
        r = r || 0;
        for (var a = 0, s = void 0; a < t.length; a++) {
          var l = ee(e, me((s = t[a]), n));
          if (1 === l) return s;
          l && l >= i && ((i = l), (o = s));
        }
        return i >= r ? o : null;
      }

      function me(e, t) {
        var n = e && 'object' === typeof e ? e[t] : e,
          r = (n || '').match(/^[\w-@]+/);
        return r ? r[0] : n;
      }

      function ge(e) {
        return be(e, 'keyword');
      }

      function he(e) {
        return be(e, 'numeric');
      }

      function be(e, t) {
        return e && 'object' === typeof e && e.type === t;
      }

      function ve(e, t, n) {
        return (
          t.unit
            ? (t.unit = n.unitAliases[t.unit] || t.unit)
            : 0 !== t.value &&
              -1 === ue.indexOf(e) &&
              (t.unit = t.value === (0 | t.value) ? n.intUnit : n.floatUnit),
          t
        );
      }
      var ye = {
          '@f': '@font-face {\n\tfont-family: ${1};\n\tsrc: url(${1});\n}',
          '@ff':
            "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}",
          '@i|@import': '@import url(${0});',
          '@kf': '@keyframes ${1:identifier} {\n\t${2}\n}',
          '@m|@media': '@media ${1:screen} {\n\t${0}\n}',
          ac: 'align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly',
          ai: 'align-items:start|end|flex-start|flex-end|center|baseline|stretch',
          anim: 'animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}',
          animdel: 'animation-delay:${1:time}',
          animdir:
            'animation-direction:normal|reverse|alternate|alternate-reverse',
          animdur: 'animation-duration:${1:0}s',
          animfm: 'animation-fill-mode:both|forwards|backwards',
          animic: 'animation-iteration-count:1|infinite',
          animn: 'animation-name',
          animps: 'animation-play-state:running|paused',
          animtf:
            'animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})',
          ap: 'appearance:none',
          as: 'align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch',
          b: 'bottom',
          bd: 'border:${1:1px} ${2:solid} ${3:#000}',
          bdb: 'border-bottom:${1:1px} ${2:solid} ${3:#000}',
          bdbc: 'border-bottom-color:${1:#000}',
          bdbi: 'border-bottom-image:url(${0})',
          bdbk: 'border-break:close',
          bdbli: 'border-bottom-left-image:url(${0})|continue',
          bdblrs: 'border-bottom-left-radius',
          bdbri: 'border-bottom-right-image:url(${0})|continue',
          bdbrrs: 'border-bottom-right-radius',
          bdbs: 'border-bottom-style',
          bdbw: 'border-bottom-width',
          bdc: 'border-color:${1:#000}',
          bdci: 'border-corner-image:url(${0})|continue',
          bdcl: 'border-collapse:collapse|separate',
          bdf: 'border-fit:repeat|clip|scale|stretch|overwrite|overflow|space',
          bdi: 'border-image:url(${0})',
          bdl: 'border-left:${1:1px} ${2:solid} ${3:#000}',
          bdlc: 'border-left-color:${1:#000}',
          bdlen: 'border-length',
          bdli: 'border-left-image:url(${0})',
          bdls: 'border-left-style',
          bdlw: 'border-left-width',
          bdr: 'border-right:${1:1px} ${2:solid} ${3:#000}',
          bdrc: 'border-right-color:${1:#000}',
          bdri: 'border-right-image:url(${0})',
          bdrs: 'border-radius',
          bdrst: 'border-right-style',
          bdrw: 'border-right-width',
          bds: 'border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset',
          bdsp: 'border-spacing',
          bdt: 'border-top:${1:1px} ${2:solid} ${3:#000}',
          bdtc: 'border-top-color:${1:#000}',
          bdti: 'border-top-image:url(${0})',
          bdtli: 'border-top-left-image:url(${0})|continue',
          bdtlrs: 'border-top-left-radius',
          bdtri: 'border-top-right-image:url(${0})|continue',
          bdtrrs: 'border-top-right-radius',
          bdts: 'border-top-style',
          bdtw: 'border-top-width',
          bdw: 'border-width',
          bfv: 'backface-visibility:hidden|visible',
          bg: 'background:${1:#000}',
          bga: 'background-attachment:fixed|scroll',
          bgbk: 'background-break:bounding-box|each-box|continuous',
          bgc: 'background-color:#${1:fff}',
          bgcp: 'background-clip:padding-box|border-box|content-box|no-clip',
          bgi: 'background-image:url(${0})',
          bgo: 'background-origin:padding-box|border-box|content-box',
          bgp: 'background-position:${1:0} ${2:0}',
          bgpx: 'background-position-x',
          bgpy: 'background-position-y',
          bgr: 'background-repeat:no-repeat|repeat-x|repeat-y|space|round',
          bgsz: 'background-size:contain|cover',
          bxsh: 'box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none',
          bxsz: 'box-sizing:border-box|content-box|border-box',
          c: 'color:${1:#000}',
          cl: 'clear:both|left|right|none',
          cm: '/* ${0} */',
          cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters({$0})",
          coi: 'counter-increment',
          colm: 'columns',
          colmc: 'column-count',
          colmf: 'column-fill',
          colmg: 'column-gap',
          colmr: 'column-rule',
          colmrc: 'column-rule-color',
          colmrs: 'column-rule-style',
          colmrw: 'column-rule-width',
          colms: 'column-span',
          colmw: 'column-width',
          cor: 'counter-reset',
          cp: 'clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})',
          cps: 'caption-side:top|bottom',
          cur: 'cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text',
          d: 'display:grid|inline-grid|subgrid|block|none|flex|inline-flex|inline|inline-block|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group',
          ec: 'empty-cells:show|hide',
          f: 'font:${1:1em} ${2:sans-serif}',
          fd: 'font-display:auto|block|swap|fallback|optional',
          fef: 'font-effect:none|engrave|emboss|outline',
          fem: 'font-emphasize',
          femp: 'font-emphasize-position:before|after',
          fems: 'font-emphasize-style:none|accent|dot|circle|disc',
          ff: 'font-family:serif|sans-serif|cursive|fantasy|monospace',
          fft: 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
          ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
          ffv: 'font-family:Verdana, Geneva, sans-serif',
          fl: 'float:left|right|none',
          fs: 'font-style:italic|normal|oblique',
          fsm: 'font-smoothing:antialiased|subpixel-antialiased|none',
          fst: 'font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
          fv: 'font-variant:normal|small-caps',
          fvs: 'font-variation-settings:normal|inherit|initial|unset',
          fw: 'font-weight:normal|bold|bolder|lighter',
          fx: 'flex',
          fxb: 'flex-basis:fill|max-content|min-content|fit-content|content',
          fxd: 'flex-direction:row|row-reverse|column|column-reverse',
          fxf: 'flex-flow',
          fxg: 'flex-grow',
          fxsh: 'flex-shrink',
          fxw: 'flex-wrap:nowrap|wrap|wrap-reverse',
          fz: 'font-size',
          fza: 'font-size-adjust',
          gtc: 'grid-template-columns:repeat()|minmax()',
          gtr: 'grid-template-rows:repeat()|minmax()',
          gta: 'grid-template-areas',
          gt: 'grid-template',
          gg: 'grid-gap',
          gcg: 'grid-column-gap',
          grg: 'grid-row-gap',
          gac: 'grid-auto-columns:auto|minmax()',
          gar: 'grid-auto-rows:auto|minmax()',
          gaf: 'grid-auto-flow:row|column|dense|inherit|initial|unset',
          gd: 'grid',
          gc: 'grid-column',
          gcs: 'grid-column-start',
          gce: 'grid-column-end',
          gr: 'grid-row',
          grs: 'grid-row-start',
          gre: 'grid-row-end',
          ga: 'grid-area',
          h: 'height',
          jc: 'justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly',
          ji: 'justify-items:start|end|center|stretch',
          js: 'justify-self:start|end|center|stretch',
          l: 'left',
          lg: 'background-image:linear-gradient(${1})',
          lh: 'line-height',
          lis: 'list-style',
          lisi: 'list-style-image',
          lisp: 'list-style-position:inside|outside',
          list: 'list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman',
          lts: 'letter-spacing:normal',
          m: 'margin',
          mah: 'max-height',
          mar: 'max-resolution',
          maw: 'max-width',
          mb: 'margin-bottom',
          mih: 'min-height',
          mir: 'min-resolution',
          miw: 'min-width',
          ml: 'margin-left',
          mr: 'margin-right',
          mt: 'margin-top',
          ol: 'outline',
          olc: 'outline-color:${1:#000}|invert',
          olo: 'outline-offset',
          ols: 'outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset',
          olw: 'outline-width|thin|medium|thick',
          op: 'opacity',
          ord: 'order',
          ori: 'orientation:landscape|portrait',
          orp: 'orphans',
          ov: 'overflow:hidden|visible|hidden|scroll|auto',
          ovs: 'overflow-style:scrollbar|auto|scrollbar|panner|move|marquee',
          ovx: 'overflow-x:hidden|visible|hidden|scroll|auto',
          ovy: 'overflow-y:hidden|visible|hidden|scroll|auto',
          p: 'padding',
          pb: 'padding-bottom',
          pgba: 'page-break-after:auto|always|left|right',
          pgbb: 'page-break-before:auto|always|left|right',
          pgbi: 'page-break-inside:auto|avoid',
          pl: 'padding-left',
          pos: 'position:relative|absolute|relative|fixed|static',
          pr: 'padding-right',
          pt: 'padding-top',
          q: 'quotes',
          qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
          qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
          r: 'right',
          rsz: 'resize:none|both|horizontal|vertical',
          t: 'top',
          ta: 'text-align:left|center|right|justify',
          tal: 'text-align-last:left|center|right',
          tbl: 'table-layout:fixed',
          td: 'text-decoration:none|underline|overline|line-through',
          te: 'text-emphasis:none|accent|dot|circle|disc|before|after',
          th: 'text-height:auto|font-size|text-size|max-size',
          ti: 'text-indent',
          tj: 'text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan',
          to: 'text-outline:${1:0} ${2:0} ${3:#000}',
          tov: 'text-overflow:ellipsis|clip',
          tr: 'text-replace',
          trf: 'transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})',
          trfo: 'transform-origin',
          trfs: 'transform-style:preserve-3d',
          trs: 'transition:${1:prop} ${2:time}',
          trsde: 'transition-delay:${1:time}',
          trsdu: 'transition-duration:${1:time}',
          trsp: 'transition-property:${1:prop}',
          trstf: 'transition-timing-function:${1:fn}',
          tsh: 'text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}',
          tt: 'text-transform:uppercase|lowercase|capitalize|none',
          tw: 'text-wrap:none|normal|unrestricted|suppress',
          us: 'user-select:none',
          v: 'visibility:hidden|visible|collapse',
          va: 'vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub',
          w: 'width',
          whs: 'white-space:nowrap|pre|pre-wrap|pre-line|normal',
          whsc: 'white-space-collapse:normal|keep-all|loose|break-strict|break-all',
          wid: 'widows',
          wm: 'writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl',
          wob: 'word-break:normal|keep-all|break-all',
          wos: 'word-spacing',
          wow: 'word-wrap:none|unrestricted|suppress|break-word|normal',
          z: 'z-index',
          zom: 'zoom:1',
        },
        xe = function (e, t, n) {
          (this.name = e),
            (this.value = null != t ? t : null),
            (this.options = n || {});
        };
      (xe.prototype.clone = function () {
        return new xe(this.name, this.value, Object.assign({}, this.options));
      }),
        (xe.prototype.valueOf = function () {
          return this.name + '="' + this.value + '"';
        });
      var we = function (e, t) {
          var n = this;
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
                return n.setAttribute(e);
              });
        },
        ke = {
          attributes: {
            configurable: !0,
          },
          attributesMap: {
            configurable: !0,
          },
          isGroup: {
            configurable: !0,
          },
          isTextOnly: {
            configurable: !0,
          },
          firstChild: {
            configurable: !0,
          },
          lastChild: {
            configurable: !0,
          },
          childIndex: {
            configurable: !0,
          },
          nextSibling: {
            configurable: !0,
          },
          previousSibling: {
            configurable: !0,
          },
          classList: {
            configurable: !0,
          },
        };

      function Ce(e, t) {
        return e instanceof xe
          ? e
          : 'string' === typeof e
          ? new xe(e, t)
          : e && 'object' === typeof e
          ? new xe(e.name, e.value, e.options)
          : void 0;
      }

      function Ae(e) {
        return String(e).trim();
      }

      function Oe(e, t, n) {
        return e && n.indexOf(e) === t;
      }
      (ke.attributes.get = function () {
        return this._attributes;
      }),
        (ke.attributesMap.get = function () {
          return this.attributes.reduce(function (e, t) {
            return (e[t.name] = t.options.boolean ? t.name : t.value), e;
          }, {});
        }),
        (ke.isGroup.get = function () {
          return !this.name && !this.value && !this._attributes.length;
        }),
        (ke.isTextOnly.get = function () {
          return !this.name && !!this.value && !this._attributes.length;
        }),
        (ke.firstChild.get = function () {
          return this.children[0];
        }),
        (ke.lastChild.get = function () {
          return this.children[this.children.length - 1];
        }),
        (ke.childIndex.get = function () {
          return this.parent ? this.parent.children.indexOf(this) : -1;
        }),
        (ke.nextSibling.get = function () {
          return this.next;
        }),
        (ke.previousSibling.get = function () {
          return this.previous;
        }),
        (ke.classList.get = function () {
          var e = this.getAttribute('class');
          return e && e.value ? e.value.split(/\s+/g).filter(Oe) : [];
        }),
        (we.prototype.create = function (e, t) {
          return new we(e, t);
        }),
        (we.prototype.setAttribute = function (e, t) {
          var n = Ce(e, t),
            r = this.getAttribute(e);
          r ? this.replaceAttribute(r, n) : this._attributes.push(n);
        }),
        (we.prototype.hasAttribute = function (e) {
          return !!this.getAttribute(e);
        }),
        (we.prototype.getAttribute = function (e) {
          'object' === typeof e && (e = e.name);
          for (var t = 0; t < this._attributes.length; t++) {
            var n = this._attributes[t];
            if (n.name === e) return n;
          }
        }),
        (we.prototype.replaceAttribute = function (e, t, n) {
          'string' === typeof e && (e = this.getAttribute(e));
          var r = this._attributes.indexOf(e);
          -1 !== r && this._attributes.splice(r, 1, Ce(t, n));
        }),
        (we.prototype.removeAttribute = function (e) {
          'string' === typeof e && (e = this.getAttribute(e));
          var t = this._attributes.indexOf(e);
          -1 !== t && this._attributes.splice(t, 1);
        }),
        (we.prototype.clearAttributes = function () {
          this._attributes.length = 0;
        }),
        (we.prototype.addClass = function (e) {
          (e = Ae(e)),
            this.hasAttribute('class')
              ? e &&
                !this.hasClass(e) &&
                this.setAttribute('class', this.classList.concat(e).join(' '))
              : this.setAttribute('class', e);
        }),
        (we.prototype.hasClass = function (e) {
          return -1 !== this.classList.indexOf(Ae(e));
        }),
        (we.prototype.removeClass = function (e) {
          (e = Ae(e)),
            this.hasClass(e) &&
              this.setAttribute(
                'class',
                this.classList
                  .filter(function (t) {
                    return t !== e;
                  })
                  .join(' ')
              );
        }),
        (we.prototype.appendChild = function (e) {
          this.insertAt(e, this.children.length);
        }),
        (we.prototype.insertBefore = function (e, t) {
          this.insertAt(e, this.children.indexOf(t));
        }),
        (we.prototype.insertAt = function (e, t) {
          if (t < 0 || t > this.children.length)
            throw new Error(
              'Unable to insert node: position is out of child list range'
            );
          var n = this.children[t - 1],
            r = this.children[t];
          e.remove(),
            (e.parent = this),
            this.children.splice(t, 0, e),
            n && ((e.previous = n), (n.next = e)),
            r && ((e.next = r), (r.previous = e));
        }),
        (we.prototype.removeChild = function (e) {
          var t = this.children.indexOf(e);
          -1 !== t &&
            (this.children.splice(t, 1),
            e.previous && (e.previous.next = e.next),
            e.next && (e.next.previous = e.previous),
            (e.parent = e.next = e.previous = null));
        }),
        (we.prototype.remove = function () {
          this.parent && this.parent.removeChild(this);
        }),
        (we.prototype.clone = function (e) {
          var t = new we(this.name);
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
        (we.prototype.walk = function (e, t) {
          t = t || 0;
          for (var n = this.firstChild; n; ) {
            var r = n.next;
            if (!1 === e(n, t) || !1 === n.walk(e, t + 1)) return !1;
            n = r;
          }
        }),
        (we.prototype.use = function (e) {
          for (var t = arguments, n = [this], r = 1; r < arguments.length; r++)
            n.push(t[r]);
          return e.apply(null, n), this;
        }),
        (we.prototype.toString = function () {
          var e = this,
            t = this.attributes.map(function (t) {
              var n = (t = e.getAttribute(t.name)).options,
                r = (n && n.implied ? '!' : '') + (t.name || '');
              return (
                n && n.boolean
                  ? (r += '.')
                  : null != t.value && (r += '="' + t.value + '"'),
                r
              );
            }),
            n = '' + (this.name || '');
          return (
            t.length && (n += '[' + t.join(' ') + ']'),
            null != this.value && (n += '{' + this.value + '}'),
            this.selfClosing && (n += '/'),
            this.repeat &&
              ((n += '*' + (this.repeat.count ? this.repeat.count : '')),
              null != this.repeat.value && (n += '@' + this.repeat.value)),
            n
          );
        }),
        Object.defineProperties(we.prototype, ke);
      var je = function () {
          (this.type = 'css-value'), (this.value = []);
        },
        $e = {
          size: {
            configurable: !0,
          },
        };
      ($e.size.get = function () {
        return this.value.length;
      }),
        (je.prototype.add = function (e) {
          this.value.push(e);
        }),
        (je.prototype.has = function (e) {
          return -1 !== this.value.indexOf(e);
        }),
        (je.prototype.toString = function () {
          return this.value.join(' ');
        }),
        Object.defineProperties(je.prototype, $e);

      function Se(e) {
        if (35 === e.peek()) {
          (e.start = e.pos), e.next(), e.eat(116) || e.eatWhile(Te);
          var t = e.current();
          if (((e.start = e.pos), e.eat(46) && !e.eatWhile(M)))
            throw e.error('Unexpected character for alpha value of color');
          return new Ee(t, e.current());
        }
      }
      var Ee = function (e, t) {
        (this.type = 'color'),
          (this.raw = e),
          (this.alpha = Number(null != t && '' !== t ? t : 1));
        var n = 0,
          r = 0,
          o = 0;
        if ('t' === (e = e.slice(1))) this.alpha = 0;
        else
          switch (e.length) {
            case 0:
              break;
            case 1:
              n = r = o = e + e;
              break;
            case 2:
              n = r = o = e;
              break;
            case 3:
              (n = e[0] + e[0]), (r = e[1] + e[1]), (o = e[2] + e[2]);
              break;
            default:
              (n = (e += e).slice(0, 2)),
                (r = e.slice(2, 4)),
                (o = e.slice(4, 6));
          }
        (this.r = parseInt(n, 16)),
          (this.g = parseInt(r, 16)),
          (this.b = parseInt(o, 16));
      };

      function Te(e) {
        return M(e) || N(e, 65, 70);
      }

      function _e(e) {
        return !(e % 17);
      }

      function Me(e) {
        return (e >> 4).toString(16);
      }

      function Ne(e) {
        return (function (e, t) {
          for (; e.length < t; ) e = '0' + e;
          return e;
        })(e.toString(16), 2);
      }

      function Le(e) {
        return M(e) || ze(e);
      }

      function ze(e) {
        return 95 === e || N(e);
      }
      (Ee.prototype.toHex = function (e) {
        var t = e && _e(this.r) && _e(this.g) && _e(this.b) ? Me : Ne;
        return '#' + t(this.r) + t(this.g) + t(this.b);
      }),
        (Ee.prototype.toRGB = function () {
          var e = [this.r, this.g, this.b];
          return (
            1 !== this.alpha &&
              e.push(this.alpha.toFixed(8).replace(/\.?0+$/, '')),
            (3 === e.length ? 'rgb' : 'rgba') + '(' + e.join(', ') + ')'
          );
        }),
        (Ee.prototype.toString = function (e) {
          return this.r || this.g || this.b || this.alpha
            ? 1 === this.alpha
              ? this.toHex(e)
              : this.toRGB()
            : 'transparent';
        });

      function Re(e) {
        if (
          ((e.start = e.pos),
          (function (e) {
            var t = e.pos,
              n = (e.eat(45), e.pos);
            e.eatWhile(M);
            var r = e.pos;
            e.eat(46) && !e.eatWhile(M) && (e.pos = r);
            e.pos === n && (e.pos = t);
            return e.pos !== t;
          })(e))
        ) {
          var t = e.current();
          return (
            (e.start = e.pos),
            e.eat(37) || e.eatWhile(ze),
            new qe(t, e.current())
          );
        }
      }
      var qe = function (e, t) {
        (this.type = 'numeric'),
          (this.value = Number(e)),
          (this.unit = t || '');
      };
      qe.prototype.toString = function () {
        return '' + this.value + this.unit;
      };

      function Ie(e, t) {
        return (
          (e.start = e.pos),
          e.eat(36) || e.eat(64)
            ? e.eatWhile(Pe)
            : t
            ? e.eatWhile(ze)
            : e.eatWhile(We),
          e.start !== e.pos ? new De(e.current()) : null
        );
      }
      var De = function (e) {
        (this.type = 'keyword'), (this.value = e);
      };

      function We(e) {
        return Le(e) || 45 === e;
      }

      function Pe(e) {
        return 45 === e || Le(e);
      }
      De.prototype.toString = function () {
        return this.value;
      };
      var Ue = {
        throws: !0,
      };

      function Fe(e) {
        if (T(e, Ue)) return new Be(e.current());
      }
      var Be = function (e) {
        (this.type = 'string'), (this.value = e);
      };
      Be.prototype.toString = function () {
        return this.value;
      };

      function He(e) {
        if (!e.eat(40)) return null;
        for (var t, n = []; !e.eof(); )
          if ((t = Ge(e))) n.push(t);
          else {
            if ((e.eatWhile(z), e.eat(41))) break;
            if (!e.eat(44)) throw e.error('Expected , or )');
          }
        return n;
      }

      function Ge(e) {
        for (
          var t, n = new je();
          !e.eof() && (e.eatWhile(z), (t = Re(e) || Se(e) || Fe(e) || Ye(e)));

        )
          n.add(t);
        return n.size ? n : null;
      }

      function Ye(e) {
        var t = Ie(e);
        if (t) {
          var n = He(e);
          return n ? new Ke(t.toString(), n) : t;
        }
      }
      var Ke = function (e, t) {
        (this.type = 'function'), (this.name = e), (this.args = t || []);
      };
      Ke.prototype.toString = function () {
        return this.name + '(' + this.args.join(', ') + ')';
      };

      function Ve(e) {
        return (
          (e.start = e.pos),
          e.eatWhile(Ze),
          e.eatWhile(Je),
          e.start !== e.pos ? e.current() : null
        );
      }

      function Xe(e) {
        for (
          var t, n = new je();
          !e.eof() &&
          (e.eat(58),
          (t = Re(e) || Se(e))
            ? t.unit || e.eat(45)
            : (e.eat(45), (t = Ie(e, !0))),
          t);

        )
          n.add(t);
        return n;
      }

      function Je(e) {
        return ze(e);
      }

      function Ze(e) {
        return 64 === e || 36 === e || 33 === e;
      }
      var Qe = function (e, t) {
          (this.key = e), (this.value = t);
        },
        et = function (e) {
          (this._string = new Map()),
            (this._regexp = new Map()),
            (this._disabled = !1),
            this.load(e);
        },
        tt = {
          disabled: {
            configurable: !0,
          },
        };
      (tt.disabled.get = function () {
        return this._disabled;
      }),
        (et.prototype.disable = function () {
          this._disabled = !0;
        }),
        (et.prototype.enable = function () {
          this._disabled = !1;
        }),
        (et.prototype.set = function (e, t) {
          var n = this;
          if ('string' === typeof e)
            e.split('|').forEach(function (e) {
              return n._string.set(e, new Qe(e, t));
            });
          else {
            if (!(e instanceof RegExp))
              throw new Error('Unknow snippet key: ' + e);
            this._regexp.set(e, new Qe(e, t));
          }
          return this;
        }),
        (et.prototype.get = function (e) {
          if (!this.disabled) {
            if (this._string.has(e)) return this._string.get(e);
            for (
              var t = Array.from(this._regexp.keys()), n = 0, r = t.length;
              n < r;
              n++
            )
              if (t[n].test(e)) return this._regexp.get(t[n]);
          }
        }),
        (et.prototype.load = function (e) {
          var t = this;
          this.reset(),
            e instanceof Map
              ? e.forEach(function (e, n) {
                  return t.set(n, e);
                })
              : e &&
                'object' === typeof e &&
                Object.keys(e).forEach(function (n) {
                  return t.set(n, e[n]);
                });
        }),
        (et.prototype.reset = function () {
          this._string.clear(), this._regexp.clear();
        }),
        (et.prototype.values = function () {
          if (this.disabled) return [];
          var e = Array.from(this._string.values()),
            t = Array.from(this._regexp.values());
          return e.concat(t);
        }),
        Object.defineProperties(et.prototype, tt);
      var nt = function (e) {
        var t = this;
        (this._registry = []),
          Array.isArray(e)
            ? e.forEach(function (e, n) {
                return t.add(n, e);
              })
            : 'object' === typeof e && this.add(e);
      };
      (nt.prototype.get = function (e) {
        for (var t = 0; t < this._registry.length; t++) {
          var n = this._registry[t];
          if (n.level === e) return n.store;
        }
      }),
        (nt.prototype.add = function (e, t) {
          null != e && 'object' === typeof e && ((t = e), (e = 0));
          var n = new et(t);
          return (
            this.remove(e),
            this._registry.push({
              level: e,
              store: n,
            }),
            this._registry.sort(function (e, t) {
              return t.level - e.level;
            }),
            n
          );
        }),
        (nt.prototype.remove = function (e) {
          this._registry = this._registry.filter(function (t) {
            return t.level !== e && t.store !== e;
          });
        }),
        (nt.prototype.resolve = function (e) {
          for (var t = 0; t < this._registry.length; t++) {
            var n = this._registry[t].store.get(e);
            if (n) return n;
          }
        }),
        (nt.prototype.all = function (e) {
          e = e || {};
          var t = new Map(),
            n = function (n) {
              var r = n.key instanceof RegExp ? 'regexp' : 'string';
              (e.type && e.type !== r) || t.has(n.key) || t.set(n.key, n);
            };
          return (
            this._registry.forEach(function (e) {
              e.store.values().forEach(n);
            }),
            Array.from(t.values())
          );
        }),
        (nt.prototype.clear = function () {
          this._registry.length = 0;
        });
      var rt = {
          indent: '\t',
          tagCase: '',
          attributeCase: '',
          attributeQuotes: 'double',
          format: !0,
          formatSkip: ['html'],
          formatForce: ['body'],
          inlineBreak: 3,
          compactBooleanAttributes: !1,
          booleanAttributes: [
            'contenteditable',
            'seamless',
            'async',
            'autofocus',
            'autoplay',
            'checked',
            'controls',
            'defer',
            'disabled',
            'formnovalidate',
            'hidden',
            'ismap',
            'loop',
            'multiple',
            'muted',
            'novalidate',
            'readonly',
            'required',
            'reversed',
            'selected',
            'typemustmatch',
          ],
          selfClosingStyle: 'html',
          inlineElements: [
            'a',
            'abbr',
            'acronym',
            'applet',
            'b',
            'basefont',
            'bdo',
            'big',
            'br',
            'button',
            'cite',
            'code',
            'del',
            'dfn',
            'em',
            'font',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'map',
            'object',
            'q',
            's',
            'samp',
            'select',
            'small',
            'span',
            'strike',
            'strong',
            'sub',
            'sup',
            'textarea',
            'tt',
            'u',
            'var',
          ],
        },
        ot = function (e) {
          (this.options = Object.assign({}, rt, e)),
            (this.quoteChar =
              'single' === this.options.attributeQuotes ? "'" : '"');
        };

      function it(e, t) {
        return t ? ('upper' === t ? e.toUpperCase() : e.toLowerCase()) : e;
      }
      (ot.prototype.get = function (e) {
        return this.options[e];
      }),
        (ot.prototype.quote = function (e) {
          return '' + this.quoteChar + (null != e ? e : '') + this.quoteChar;
        }),
        (ot.prototype.name = function (e) {
          return it(e, this.options.tagCase);
        }),
        (ot.prototype.attribute = function (e) {
          return it(e, this.options.attributeCase);
        }),
        (ot.prototype.isBooleanAttribute = function (e) {
          return (
            e.options.boolean ||
            -1 !==
              this.get('booleanAttributes').indexOf(
                (e.name || '').toLowerCase()
              )
          );
        }),
        (ot.prototype.selfClose = function () {
          switch (this.options.selfClosingStyle) {
            case 'xhtml':
              return ' /';
            case 'xml':
              return '/';
            default:
              return '';
          }
        }),
        (ot.prototype.indent = function (e) {
          e = e || 0;
          for (var t = ''; e--; ) t += this.options.indent;
          return t;
        }),
        (ot.prototype.isInline = function (e) {
          return 'string' === typeof e
            ? -1 !== this.get('inlineElements').indexOf(e.toLowerCase())
            : null != e.name
            ? this.isInline(e.name)
            : e.isTextOnly;
        }),
        (ot.prototype.field = function (e, t) {
          return this.options.field(e, t);
        });
      var at = {
        field: function (e, t) {
          return '${' + e + (t ? ':' + t : '') + '}';
        },
      };

      function st(e) {
        return (
          e ||
            console.error(
              "emmet-monaco-es: 'monaco' should be either declared on window or passed as first parameter"
            ),
          !!e
        );
      }

      function lt(e, t, n, r) {
        var o = 'html' === t;
        'string' === typeof t && (t = [t]);
        var i = t.map(function (t) {
          return e.languages.registerCompletionItemProvider(t, {
            triggerCharacters: '>+-^*()#.[]$@{}=!:%'.split(''),
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
                    n(f, d) &&
                      (p = r(
                        t.getLineContent(s).substring(f[d].offset, a - 1)
                      ));
                    break;
                  }
                if (p)
                  return {
                    items: p.map(function (t) {
                      var n = t.emmetText,
                        r = t.expandText
                          .replace(/([^\\])\$\{\d+\}/g, '$1')
                          .replace(/\$\{\d+:([^\}]+)\}/g, '$1'),
                        i = o ? n : r;
                      return {
                        kind: e.languages.CompletionItemKind.Property,
                        label: i,
                        sortText: '0' + i,
                        insertText: r,
                        range: new e.Range(s, a - n.length, s, a),
                        detail: 'Emmet Abbreviation',
                        documentation: r,
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
      var ut = $($({}, at), {
        snippets: new nt(ye),
        profile: new ot(),
      });

      function ct(e) {
        return Z(
          (function (e) {
            for (var t = new we(), n = new S(e); !n.eof(); ) {
              var r = new we(Ve(n));
              r.value = Xe(n);
              var o = He(n);
              if (o)
                for (var i = 0; i < o.length; i++)
                  r.setAttribute(String(i), o[i]);
              if ((n.eat(33) && r.value.add('!'), t.appendChild(r), !n.eat(43)))
                break;
            }
            if (!n.eof()) throw n.error('Unexpected character');
            return t;
          })(e).use(de, ut.snippets),
          ut.profile,
          ut
        );
      }

      function dt(e) {
        if (e.eat(42))
          return (
            (e.start = e.pos),
            {
              count: e.eatWhile(M) ? +e.current() : null,
            }
          );
      }
      var pt = {
        throws: !0,
      };

      function ft(e) {
        if (T(e, pt)) return e.current().slice(1, -1);
      }

      function mt(e) {
        var t = e.pos;
        if (e.eat(123)) {
          for (var n, r = 1, o = '', i = e.pos; !e.eof(); )
            if (123 === (n = e.next())) r++;
            else if (125 === n) {
              if (!--r) return (e.start = t), o + e.substring(i, e.pos - 1);
            } else
              92 === n &&
                ((123 !== (n = e.next()) && 125 !== n) ||
                  ((o += e.substring(i, e.pos - 2) + String.fromCharCode(n)),
                  (i = e.pos)));
          throw (
            ((e.pos = t),
            e.error(
              'Unable to find closing ' +
                String.fromCharCode(125) +
                ' for text start'
            ))
          );
        }
        return null;
      }
      var gt = /^\!?[\w\-:\$@]+\.?$|^\!?\[[\w\-:\$@]+\]\.?$/;

      function ht(e) {
        if (!e.eat(91)) return null;
        for (var t, n, r = []; !e.eof(); ) {
          if ((e.eatWhile(z), e.eat(93))) return r;
          if (null != (t = ft(e)))
            r.push({
              name: null,
              value: t,
            });
          else {
            if (!vt(e)) throw e.error('Expected attribute name');
            '[' === (t = e.current())[0] &&
              93 === e.peek() &&
              (e.next(), (t = e.current())),
              gt.test(t)
                ? ((n = bt(t)),
                  r.push(n),
                  e.eat(61) &&
                    (null != (t = ft(e))
                      ? (n.value = t)
                      : null != (t = mt(e))
                      ? ((n.value = t),
                        (n.options = {
                          before: '{',
                          after: '}',
                        }))
                      : vt(e) && (n.value = e.current())))
                : r.push({
                    name: null,
                    value: t,
                  });
          }
        }
        throw e.error('Expected closing "]" brace');
      }

      function bt(e) {
        var t = {};
        33 === e.charCodeAt(0) && ((e = e.slice(1)), (t.implied = !0)),
          46 === e.charCodeAt(e.length - 1) &&
            ((e = e.slice(0, e.length - 1)), (t.boolean = !0));
        var n = {
          name: e,
        };
        return Object.keys(t).length && (n.options = t), n;
      }

      function vt(e) {
        var t = e.pos;
        if (e.eatWhile(yt)) return (e.start = t), !0;
      }

      function yt(e) {
        return !R(e) && !_(e) && 93 !== e && 61 !== e;
      }

      function xt(e) {
        for (var t, n = e.pos, r = new we(wt(e)); !e.eof(); )
          if (e.eat(46)) r.addClass(wt(e));
          else if (e.eat(35)) r.setAttribute('id', wt(e));
          else {
            if (e.eat(47)) {
              if (r.isGroup)
                throw (
                  (e.backUp(1), e.error('Unexpected self-closing indicator'))
                );
              (r.selfClosing = !0), (t = dt(e)) && (r.repeat = t);
              break;
            }
            if ((t = ht(e)))
              for (var o = 0, i = t.length; o < i; o++) r.setAttribute(t[o]);
            else if (null !== (t = mt(e))) r.value = t;
            else {
              if (!(t = dt(e))) break;
              r.repeat = t;
            }
          }
        if (n === e.pos)
          throw e.error(
            'Unable to consume abbreviation node, unexpected ' + e.peek()
          );
        return r;
      }

      function wt(e) {
        return (e.start = e.pos), e.eatWhile(kt), e.current();
      }

      function kt(e) {
        return (
          L(e) ||
          45 === e ||
          58 === e ||
          36 === e ||
          64 === e ||
          33 === e ||
          95 === e ||
          37 === e
        );
      }

      function Ct(e) {
        var t = (function (e) {
          for (
            var t, n = new S(e.trim()), r = new we(), o = r, i = [];
            !n.eof();

          )
            if (40 !== (t = n.peek()))
              if (41 !== t) {
                var a = xt(n);
                if ((o.appendChild(a), n.eof())) break;
                switch (n.peek()) {
                  case 43:
                    n.next();
                    continue;
                  case 62:
                    n.next(), (o = a);
                    continue;
                  case 94:
                    for (; n.eat(94); ) o = o.parent || o;
                    continue;
                }
              } else {
                var s = i.pop();
                if (!s) throw n.error('Unexpected ")" group end');
                var l = s[0];
                if (((o = s[1]), n.next(), (l.repeat = dt(n))))
                  o.appendChild(l);
                else for (; l.firstChild; ) o.appendChild(l.firstChild);
                n.eat(43);
              }
            else {
              var u = new we();
              i.push([u, o, n.pos]), (o = u), n.next();
            }
          if (i.length)
            throw ((n.pos = i.pop()[2]), n.error('Expected group close'));
          return r;
        })(e);
        return t.walk(At), t;
      }

      function At(e) {
        if (e.repeat && e.repeat.count) {
          for (
            var t = e.parent, n = t.children.indexOf(e), r = 0;
            r < e.repeat.count;
            r++
          ) {
            var o = e.clone(!0);
            if (((o.repeat.value = r + 1), o.walk(At), o.isGroup))
              for (; o.children.length > 0; )
                (o.firstChild.repeat = o.repeat), t.insertAt(o.firstChild, n++);
            else t.insertAt(o, n++);
          }
          e.parent.removeChild(e);
        }
      }

      function Ot(e) {
        if (e.eat(42))
          return (
            (e.start = e.pos),
            {
              count: e.eatWhile(M) ? +e.current() : null,
            }
          );
      }
      var jt = {
        throws: !0,
      };

      function $t(e) {
        if (T(e, jt)) return e.current().slice(1, -1);
      }

      function St(e) {
        var t = e.pos;
        if (e.eat(123)) {
          for (var n, r = 1, o = '', i = e.pos; !e.eof(); )
            if (123 === (n = e.next())) r++;
            else if (125 === n) {
              if (!--r) return (e.start = t), o + e.substring(i, e.pos - 1);
            } else
              92 === n &&
                ((123 !== (n = e.next()) && 125 !== n) ||
                  ((o += e.substring(i, e.pos - 2) + String.fromCharCode(n)),
                  (i = e.pos)));
          throw (
            ((e.pos = t),
            e.error(
              'Unable to find closing ' +
                String.fromCharCode(125) +
                ' for text start'
            ))
          );
        }
        return null;
      }
      var Et = /^\!?[\w\-:\$@]+\.?$/;

      function Tt(e) {
        if (!e.eat(91)) return null;
        for (var t, n, r = []; !e.eof(); ) {
          if ((e.eatWhile(z), e.eat(93))) return r;
          if (null != (t = $t(e)))
            r.push({
              name: null,
              value: t,
            });
          else {
            if (!Mt(e)) throw e.error('Expected attribute name');
            (t = e.current()),
              Et.test(t)
                ? ((n = _t(t)),
                  r.push(n),
                  e.eat(61) &&
                    (null != (t = $t(e))
                      ? (n.value = t)
                      : null != (t = St(e))
                      ? ((n.value = t),
                        (n.options = {
                          before: '{',
                          after: '}',
                        }))
                      : Mt(e) && (n.value = e.current())))
                : r.push({
                    name: null,
                    value: t,
                  });
          }
        }
        throw e.error('Expected closing "]" brace');
      }

      function _t(e) {
        var t = {};
        33 === e.charCodeAt(0) && ((e = e.slice(1)), (t.implied = !0)),
          46 === e.charCodeAt(e.length - 1) &&
            ((e = e.slice(0, e.length - 1)), (t.boolean = !0));
        var n = {
          name: e,
        };
        return Object.keys(t).length && (n.options = t), n;
      }

      function Mt(e) {
        var t = e.pos;
        if (e.eatWhile(Nt)) return (e.start = t), !0;
      }

      function Nt(e) {
        return !R(e) && !_(e) && 91 !== e && 93 !== e && 61 !== e;
      }

      function Lt(e) {
        for (var t, n = e.pos, r = new we(zt(e)); !e.eof(); )
          if (e.eat(46)) r.addClass(zt(e));
          else if (e.eat(35)) r.setAttribute('id', zt(e));
          else {
            if (e.eat(47)) {
              if (r.isGroup)
                throw (
                  (e.backUp(1), e.error('Unexpected self-closing indicator'))
                );
              (r.selfClosing = !0), (t = Ot(e)) && (r.repeat = t);
              break;
            }
            if ((t = Tt(e)))
              for (var o = 0, i = t.length; o < i; o++) r.setAttribute(t[o]);
            else if (null !== (t = St(e))) r.value = t;
            else {
              if (!(t = Ot(e))) break;
              r.repeat = t;
            }
          }
        if (n === e.pos)
          throw e.error(
            'Unable to consume abbreviation node, unexpected ' + e.peek()
          );
        return r;
      }

      function zt(e) {
        return (e.start = e.pos), e.eatWhile(Rt), e.current();
      }

      function Rt(e) {
        return (
          L(e) ||
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
            var t, n = new S(e.trim()), r = new we(), o = r, i = [];
            !n.eof();

          )
            if (40 !== (t = n.peek()))
              if (41 !== t) {
                var a = Lt(n);
                if ((o.appendChild(a), n.eof())) break;
                switch (n.peek()) {
                  case 43:
                    n.next();
                    continue;
                  case 62:
                    n.next(), (o = a);
                    continue;
                  case 94:
                    for (; n.eat(94); ) o = o.parent || o;
                    continue;
                }
              } else {
                var s = i.pop();
                if (!s) throw n.error('Unexpected ")" group end');
                var l = s[0];
                if (((o = s[1]), n.next(), (l.repeat = Ot(n))))
                  o.appendChild(l);
                else for (; l.firstChild; ) o.appendChild(l.firstChild);
                n.eat(43);
              }
            else {
              var u = new we();
              i.push([u, o, n.pos]), (o = u), n.next();
            }
          if (i.length)
            throw ((n.pos = i.pop()[2]), n.error('Expected group close'));
          return r;
        })(e);
        return t.walk(It), t;
      }

      function It(e) {
        if (e.repeat && e.repeat.count) {
          for (
            var t = e.parent, n = t.children.indexOf(e), r = 0;
            r < e.repeat.count;
            r++
          ) {
            var o = e.clone(!0);
            if (((o.repeat.value = r + 1), o.walk(It), o.isGroup))
              for (; o.children.length > 0; )
                (o.firstChild.repeat = o.repeat), t.insertAt(o.firstChild, n++);
            else t.insertAt(o, n++);
          }
          e.parent.removeChild(e);
        }
      }
      var Dt = function (e, t) {
        return (
          e.walk(function (e) {
            return (function (e, t) {
              var n = new Set();
              !(function e(r) {
                var o = t.resolve(r.name);
                if (o && !n.has(o)) {
                  if ('function' === typeof o.value) return o.value(r, t, e);
                  var i = qt(o.value);
                  n.add(o), i.walk(e), n.delete(o);
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
                          for (var n = e.classList, r = 0; r < n.length; r++)
                            t.addClass(n[r]);
                        })(e, t);
                        for (
                          var n = new Map(), r = e.attributes, o = 0;
                          o < r.length;
                          o++
                        )
                          n.set(r[o].name, r[o].clone());
                        r = t.attributes.slice();
                        for (
                          var i = 0, a = void 0, s = void 0;
                          i < r.length;
                          i++
                        )
                          (a = r[i]),
                            n.has(a.name)
                              ? (((s = n.get(a.name)).value = a.value),
                                s.options.implied && (s.options.implied = !1))
                              : n.set(a.name, a),
                            t.removeAttribute(a);
                        for (
                          var l = Array.from(n.values()), u = 0;
                          u < l.length;
                          u++
                        )
                          t.setAttribute(l[u]);
                      })(e, t);
                    })(a, r);
                    i.firstChild;

                  )
                    r.parent.insertBefore(i.firstChild, r);
                  a.parent.insertBefore(r, a), a.remove();
                }
              })(e);
            })(e, t);
          }),
          e
        );
      };
      var Wt = /^(.*?)([A-Z_]+)(.*?)$/;

      function Pt(e, t) {
        if (null == e) return e;
        for (
          var n,
            r,
            o = [],
            i = function (e, n, r, o) {
              return null != t[r] ? n + t[r] + o : '';
            },
            a = '',
            s = 0,
            l = 0;
          l < e.length;

        )
          91 === (n = e.charCodeAt(l))
            ? o.push(l)
            : 93 === n &&
              ((r = o.pop()),
              o.length ||
                ((a += e.slice(s, r) + e.slice(r + 1, l).replace(Wt, i)),
                (s = l + 1))),
            l++;
        return a + e.slice(s);
      }

      function Ut(e) {
        return (e || '').split(/\r\n|\r|\n/g);
      }

      function Ft(e) {
        return e.parent.firstChild === e;
      }

      function Bt(e) {
        return e && !e.parent;
      }

      function Ht(e) {
        return e.isTextOnly && !!e.children.length;
      }

      function Gt(e) {
        var t = e.node;
        if (Ht(t)) {
          var n = q(t.value),
            r = n.fields.reduce(function (e, t) {
              return !e || t.index < e.index ? t : e;
            }, null);
          if (r) {
            var o = (function (e, t) {
              var n = e.fields.indexOf(t),
                r = new e.constructor(
                  e.string.slice(0, t.location),
                  e.fields.slice(0, n)
                ),
                o = new e.constructor(
                  e.string.slice(t.location + t.length),
                  e.fields.slice(n + 1)
                );
              return [r, o];
            })(n, r);
            (e.open = e.renderFields(o[0])), (e.close = e.renderFields(o[1]));
          } else e.text = e.renderFields(n);
          return !0;
        }
        return !1;
      }
      var Yt = {
        enabled: !1,
        trigger: ['id', 'class'],
        before: '',
        after: '\n\x3c!-- /[#ID][.CLASS] --\x3e',
      };

      function Kt(e, t) {
        return (
          !!t.get('format') &&
          (!e.parent.isTextOnly ||
            1 !== e.parent.children.length ||
            !q(e.parent.value).fields.length) &&
          (!Vt(e, t) ||
            (function (e, t) {
              if (!Vt(e, t)) return !1;
              if (Ht(e)) return !0;
              if (0 === e.childIndex) {
                for (var n = e; (n = n.nextSibling); ) if (!Vt(n, t)) return !0;
              } else if (!Vt(e.previousSibling, t)) return !0;
              if (t.get('inlineBreak')) {
                for (var r = 1, o = e, i = e; Xt((o = o.previousSibling), t); )
                  r++;
                for (; Xt((i = i.nextSibling), t); ) r++;
                if (r >= t.get('inlineBreak')) return !0;
              }
              for (var a = 0, s = e.children.length; a < s; a++)
                if (Kt(e.children[a], t)) return !0;
              return !1;
            })(e, t))
        );
      }

      function Vt(e, t) {
        return (e && e.isTextOnly) || Xt(e, t);
      }

      function Xt(e, t) {
        return e && t.isInline(e);
      }
      var Jt = /^id$/i,
        Zt = /^class$/i,
        Qt = {
          primary: function (e) {
            return e.join('');
          },
          secondary: function (e) {
            return e
              .map(function (e) {
                return e.isBoolean ? e.name : e.name + '=' + e.value;
              })
              .join(', ');
          },
        },
        en = {
          open: null,
          close: null,
          omitName: /^div$/i,
          attributes: Qt,
        };

      function tn(e, t, n) {
        n = Object.assign({}, en, n);
        var r = e.node;
        if (
          ((e.indent = t.indent(
            (function (e) {
              var t = e.parent.isTextOnly ? -2 : -1,
                n = e;
              for (; (n = n.parent); ) t++;
              return t < 0 ? 0 : t;
            })(r)
          )),
          (e.newline = '\n'),
          (Bt(r.parent) && Ft(r)) || (e.beforeOpen = e.newline + e.indent),
          r.name)
        ) {
          var o = Object.assign(
            {
              NAME: t.name(r.name),
              SELF_CLOSE: r.selfClosing ? n.selfClose : null,
            },
            (function (e, t, n) {
              n = Object.assign({}, Qt, n);
              var r = [],
                o = [];
              return (
                e.node.attributes.forEach(function (n) {
                  if (n.options.implied && null == n.value) return null;
                  var i = t.attribute(n.name),
                    a = e.renderFields(n.value);
                  if (Jt.test(i)) a && r.push('#' + a);
                  else if (Zt.test(i))
                    a && r.push('.' + a.replace(/\s+/g, '.'));
                  else {
                    var s =
                      null == n.value &&
                      (n.options.boolean ||
                        -1 !==
                          t.get('booleanAttributes').indexOf(i.toLowerCase()));
                    o.push({
                      name: i,
                      value: a,
                      isBoolean: s,
                    });
                  }
                }),
                {
                  PRIMARY_ATTRS: n.primary(r) || null,
                  SECONDARY_ATTRS: n.secondary(o) || null,
                }
              );
            })(e, t, n.attributes)
          );
          n.omitName &&
            n.omitName.test(o.NAME) &&
            o.PRIMARY_ATTRS &&
            (o.NAME = null),
            null != n.open && (e.open = Pt(n.open, o)),
            null != n.close && (e.close = Pt(n.close, o));
        }
        return e;
      }
      var nn = /\n|\r/;
      var rn = /\n|\r/,
        on = {
          none: '[ SECONDARY_ATTRS]',
          round: '[(SECONDARY_ATTRS)]',
          curly: '[{SECONDARY_ATTRS}]',
          square: '[[SECONDARY_ATTRS]',
        };
      var an = /\n|\r/;
      var sn = {
        html: function (e, t, n) {
          var r = (function (e) {
            var t = Object.assign({}, e && e.format);
            return (t.comment = Object.assign({}, Yt, t.comment)), t;
          })((n = Object.assign({}, n)));
          return G(e, n.field, function (e) {
            if (
              !Gt(
                (e = (function (e, t) {
                  var n = e.node;
                  if (Kt(n, t)) {
                    (e.indent = t.indent(
                      (function (e, t) {
                        var n = t.get('formatSkip') || [],
                          r = e.parent.isTextOnly ? -2 : -1,
                          o = e;
                        for (; (o = o.parent); )
                          -1 === n.indexOf((o.name || '').toLowerCase()) && r++;
                        return r < 0 ? 0 : r;
                      })(n, t)
                    )),
                      (e.newline = '\n');
                    var r = e.newline + e.indent;
                    (Bt(n.parent) && Ft(n)) ||
                      ((e.beforeOpen = r), n.isTextOnly && (e.beforeText = r)),
                      (function (e, t) {
                        var n = (e.name || '').toLowerCase();
                        if (-1 !== t.get('formatForce').indexOf(n)) return !0;
                        for (var r = 0; r < e.children.length; r++)
                          if (Kt(e.children[r], t)) return !0;
                        return !1;
                      })(n, t) &&
                        (n.isTextOnly || (e.beforeText = r + t.indent(1)),
                        (e.beforeClose = r));
                  }
                  return e;
                })(e, t))
              )
            ) {
              var n = e.node;
              if (n.name) {
                var o = t.name(n.name),
                  i = (function (e, t) {
                    return e.node.attributes
                      .map(function (n) {
                        if (n.options.implied && null == n.value) return null;
                        var r = t.attribute(n.name),
                          o = null;
                        if (
                          n.options.boolean ||
                          -1 !==
                            t.get('booleanAttributes').indexOf(r.toLowerCase())
                        ) {
                          if (
                            t.get('compactBooleanAttributes') &&
                            null == n.value
                          )
                            return ' ' + r;
                          null == n.value && (o = r);
                        }
                        return (
                          null == o && (o = e.renderFields(n.value)),
                          n.options.before && n.options.after
                            ? ' ' +
                              r +
                              '=' +
                              (n.options.before + o + n.options.after)
                            : ' ' + r + '=' + t.quote(o)
                        );
                      })
                      .join('');
                  })(e, t);
                (e.open =
                  '<' + o + i + (n.selfClosing ? t.selfClose() : '') + '>'),
                  n.selfClosing || (e.close = '</' + o + '>'),
                  (function (e, t) {
                    var n = e.node;
                    if (!t.enabled || !t.trigger || !n.name) return;
                    for (
                      var r = e.node.attributes.reduce(function (e, t) {
                          return (
                            t.name &&
                              null != t.value &&
                              (e[t.name.toUpperCase().replace(/-/g, '_')] =
                                t.value),
                            e
                          );
                        }, {}),
                        o = 0,
                        i = t.trigger.length;
                      o < i;
                      o++
                    )
                      if (t.trigger[o].toUpperCase() in r) {
                        (e.open = Pt(t.before, r) + e.open),
                          e.close && (e.close += Pt(t.after, r));
                        break;
                      }
                  })(e, r.comment);
              }
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(n.value));
            }
            return e;
          });
        },
        haml: function (e, t, n) {
          var r = {
            open: '[%NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)][SELF_CLOSE]',
            selfClose: '/',
            attributes: {
              secondary: function (e) {
                return e
                  .map(function (e) {
                    return e.isBoolean
                      ? e.name +
                          (t.get('compactBooleanAttributes') ? '' : '=true')
                      : e.name + '=' + t.quote(e.value);
                  })
                  .join(' ');
              },
            },
          };
          return G(e, (n = n || {}).field, function (e) {
            if (
              !Gt(
                (e = (function (e, t) {
                  var n = e.node;
                  !n.isTextOnly &&
                    n.value &&
                    (e.beforeText = nn.test(n.value)
                      ? e.newline + e.indent + t.indent(1)
                      : ' ');
                  return e;
                })((e = tn(e, t, r)), t))
              )
            ) {
              var n = e.node;
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(
                  (function (e, t) {
                    if (null != e.value && nn.test(e.value)) {
                      var n = Ut(e.value),
                        r = t.indent(1),
                        o = n.reduce(function (e, t) {
                          return Math.max(e, t.length);
                        }, 0);
                      return n
                        .map(function (e, t) {
                          return (
                            '' +
                            (t ? r : '') +
                            (function (e, t) {
                              for (; e.length < t; ) e += ' ';
                              return e;
                            })(e, o) +
                            ' |'
                          );
                        })
                        .join('\n');
                    }
                    return e.value;
                  })(n, t)
                ));
            }
            return e;
          });
        },
        slim: function (e, t, n) {
          var r =
              ((n = n || {}).attributeWrap && on[n.attributeWrap]) || on.none,
            o =
              r === on.none
                ? function (e) {
                    return e.name + '=true';
                  }
                : function (e) {
                    return e.name;
                  },
            i = {
              open: '[NAME][PRIMARY_ATTRS]' + r + '[SELF_CLOSE]',
              selfClose: '/',
              attributes: {
                secondary: function (e) {
                  return e
                    .map(function (e) {
                      return e.isBoolean
                        ? o(e)
                        : e.name + '=' + t.quote(e.value);
                    })
                    .join(' ');
                },
              },
            };
          return G(e, n.field, function (e) {
            if (
              !Gt(
                (e = (function (e, t) {
                  var n = e.node,
                    r = n.parent;
                  0 === t.get('inlineBreak') &&
                    (function (e, t) {
                      return e && (e.isTextOnly || t.isInline(e));
                    })(n, t) &&
                    !Bt(r) &&
                    null == r.value &&
                    1 === r.children.length &&
                    (e.beforeOpen = ': ');
                  !n.isTextOnly &&
                    n.value &&
                    (e.beforeText = rn.test(n.value)
                      ? e.newline + e.indent + t.indent(1)
                      : ' ');
                  return e;
                })((e = tn(e, t, i)), t))
              )
            ) {
              var n = e.node;
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(
                  (function (e, t) {
                    if (null != e.value && rn.test(e.value)) {
                      var n = t.indent(1);
                      return Ut(e.value)
                        .map(function (e, t) {
                          return n + (t ? ' ' : '|') + ' ' + e;
                        })
                        .join('\n');
                    }
                    return e.value;
                  })(n, t)
                ));
            }
            return e;
          });
        },
        pug: function (e, t, n) {
          var r = {
            open: '[NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)]',
            attributes: {
              secondary: function (e) {
                return e
                  .map(function (e) {
                    return e.isBoolean
                      ? e.name
                      : e.name + '=' + t.quote(e.value);
                  })
                  .join(', ');
              },
            },
          };
          return G(e, (n = n || {}).field, function (e) {
            if (
              !Gt(
                (e = (function (e, t) {
                  var n = e.node;
                  !n.isTextOnly &&
                    n.value &&
                    (e.beforeText = an.test(n.value)
                      ? e.newline + e.indent + t.indent(1)
                      : ' ');
                  return e;
                })((e = tn(e, t, r)), t))
              )
            ) {
              var n = e.node;
              (n.value || (!n.children.length && !n.selfClosing)) &&
                (e.text = e.renderFields(
                  (function (e, t) {
                    if (null != e.value && an.test(e.value)) {
                      var n = t.indent(1);
                      return Ut(e.value)
                        .map(function (e) {
                          return n + '| ' + e;
                        })
                        .join('\n');
                    }
                    return e.value;
                  })(n, t)
                ));
            }
            return e;
          });
        },
      };

      function ln(e, t, n, r) {
        return (
          'object' === typeof n && ((r = n), (n = null)),
          (function (e) {
            return !!e && e in sn;
          })(n) || (n = 'html'),
          sn[n](e, t, r)
        );
      }
      var un = new Set(
          'a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'.split(
            ','
          )
        ),
        cn = {
          p: 'span',
          ul: 'li',
          ol: 'li',
          table: 'tr',
          tr: 'td',
          tbody: 'tr',
          thead: 'tr',
          tfoot: 'tr',
          colgroup: 'col',
          select: 'option',
          optgroup: 'option',
          audio: 'source',
          video: 'source',
          object: 'param',
          map: 'area',
        };

      function dn(e) {
        return (
          (e = (e || '').toLowerCase()), cn[e] || (un.has(e) ? 'span' : 'div')
        );
      }
      var pn = function (e) {
        return (
          e.walk(function (e) {
            null == e.name &&
              e.attributes.length &&
              (e.name = dn(e.parent.name));
          }),
          e
        );
      };

      function fn(e, t) {
        for (
          var n = new Set(), r = t.length, o = 0;
          -1 !== (o = e.indexOf(t, o));

        )
          n.add(o), (o += r);
        if (n.size)
          for (var i = 0, a = e.length; i < a; )
            '\\' === e[i++] && n.delete(i++);
        return Array.from(n).map(function (e) {
          return [e, r];
        });
      }

      function mn(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
          var o = t[r],
            i = 0,
            a = 0,
            s = !1;
          if ('@' === e.substr(o[0] + o[1], 1)) {
            '-' === e.substr(o[0] + o[1] + 1, 1) && (s = !0);
            var l = e.substr(o[0] + o[1] + 1 + Number(s)).match(/^(\d+)/);
            l
              ? ((a = l[1].length + 1 + Number(s)), (i = parseInt(l[1]) - 1))
              : (a = 2);
          }
          e =
            e.substring(0, o[0]) +
            ('function' === typeof n ? n(e.substr(o[0], o[1]), i, s) : n) +
            e.substring(o[0] + o[1] + a);
        }
        return e;
      }
      var gn = function (e) {
        return e.walk(hn), e;
      };

      function hn(e) {
        var t = (function (e) {
          for (; e; ) {
            if (e.repeat) return e.repeat;
            e = e.parent;
          }
        })(e);
        if (t && null != t.value) {
          var n = t.value,
            r = t.count;
          (e.name = bn(e.name, n, r)),
            (e.value = bn(e.value, n, r)),
            e.attributes.forEach(function (t) {
              var o = e.getAttribute(t.name).clone();
              (o.name = bn(t.name, n, r)),
                (o.value = bn(t.value, n, r)),
                e.replaceAttribute(t.name, o);
            });
        }
        return e;
      }

      function bn(e, t, n) {
        return 'string' === typeof e
          ? (function (e, t, n, r) {
              return (function (e) {
                var t = 0,
                  n = '',
                  r = e.length;
                for (; t < r; ) {
                  var o = e[t++];
                  n += '\\' === o ? e[t++] || '' : o;
                }
                return n;
              })(
                mn(e, t, function (e, t, o) {
                  for (
                    var i = String(o ? t + r - n + 1 : n + t);
                    i.length < e.length;

                  )
                    i = '0' + i;
                  return i;
                })
              );
            })(
              e,
              (function (e) {
                return fn(e || '', '$').reduce(function (t, n) {
                  if (!/[#{]/.test(e[n[0] + 1] || '')) {
                    var r = t[t.length - 1];
                    r && r[0] + r[1] === n[0] ? (r[1] += n[1]) : t.push(n);
                  }
                  return t;
                }, []);
              })(e),
              t,
              n
            )
          : e;
      }
      var vn =
          /^((?:https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        yn = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        xn = /^([a-z]+:)?\/\//i;

      function wn(e, t) {
        return (
          (t = t || 1),
          e.walk(function (e) {
            if (e.repeat && null === e.repeat.count) {
              for (var n = 0; n < t; n++) {
                var r = e.clone(!0);
                (r.repeat.implicit = !0),
                  (r.repeat.count = t),
                  (r.repeat.value = n + 1),
                  (r.repeat.index = n),
                  e.parent.insertBefore(r, e);
              }
              e.remove();
            }
          }),
          e
        );
      }

      function kn(e, t) {
        if (Array.isArray(t) && t.length) {
          var n = !1;
          e.walk(function (e) {
            e.repeat &&
              e.repeat.implicit &&
              ((n = !0),
              (function (e, t) {
                var n = Cn(e, t);
                e.walk(function (e) {
                  return (n |= Cn(e, t));
                }),
                  n || jn(On(e), t);
              })(e, t[e.repeat.index]));
          }),
            n || jn(On(e), t.join('\n'));
        }
        return e;
      }

      function Cn(e, t) {
        var n = {
          replaced: !1,
        };
        return (
          (e.value = An(e.value, t, n)),
          e.attributes.forEach(function (r) {
            r.value && e.setAttribute(r.name, An(r.value, t, n));
          }),
          n.replaced
        );
      }

      function An(e, t, n) {
        if ('string' === typeof e) {
          var r = fn(e, '$#');
          r.length && (n && (n.replaced = !0), (e = mn(e, r, t)));
        }
        return e;
      }

      function On(e) {
        for (; e.children.length; ) e = e.children[e.children.length - 1];
        return e;
      }

      function jn(e, t) {
        if (e.value) {
          var n = fn(e.value, '|');
          if (n.length) return void (e.value = mn(e.value, n, t));
        }
        ('a' === e.name.toLowerCase() || e.hasAttribute('href')) &&
          (vn.test(t)
            ? e.setAttribute('href', (xn.test(t) ? '' : 'http://') + t)
            : yn.test(t) && e.setAttribute('href', 'mailto:' + t)),
          (e.value = t);
      }
      var $n = {
          element: '__',
          modifier: '_',
        },
        Sn = /^(-+)([a-z0-9]+[a-z0-9-]*)/i,
        En = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i,
        Tn = function (e) {
          return /^[a-z]\-/i.test(e);
        },
        _n = function (e) {
          return /^[a-z]/i.test(e);
        };

      function Mn(e, t, n) {
        for (
          var r = n.length > 1 ? n.length : 0;
          e.parent && e.parent.parent && r--;

        )
          e = e.parent;
        return t.get(e) || '';
      }

      function Nn(e, t) {
        for (var n = 0; n < e.length && !Sn.test(e[n]) && !En.test(e[n]); n++)
          if (t(e[n])) return e[n];
      }

      function Ln(e, t, n) {
        var r = e.getAttribute(t);
        r && (r.name = n);
      }
      var zn = /^xsl:(variable|with\-param)$/i,
        Rn = {
          bem: function (e, t) {
            (t = Object.assign({}, $n, t)),
              e.walk(function (e) {
                return (function (e, t) {
                  var n = e.classList.reduce(function (e, t) {
                    var n = t.indexOf('_');
                    return n > 0 && !t.startsWith('-')
                      ? (e.add(t.slice(0, n)), e.add(t.slice(n)), e)
                      : e.add(t);
                  }, new Set());
                  n.size && e.setAttribute('class', Array.from(n).join(' '));
                })(e);
              });
            var n = (function (e) {
              var t = new Map();
              return (
                e.walk(function (e) {
                  var n = e.classList;
                  n.length &&
                    t.set(e, Nn(n, Tn) || Nn(n, _n) || t.get(e.parent));
                }),
                t
              );
            })(e);
            return (
              e.walk(function (e) {
                return (function (e, t, n) {
                  var r = e.classList.reduce(function (r, o) {
                      var i,
                        a,
                        s = o;
                      return (
                        (a = o.match(Sn)) &&
                          ((i = Mn(e, t, a[1]) + n.element + a[2]),
                          r.add(i),
                          (o = o.slice(a[0].length))),
                        (a = o.match(En)) &&
                          (i || ((i = Mn(e, t, a[1])), r.add(i)),
                          r.add('' + i + n.modifier + a[2]),
                          (o = o.slice(a[0].length))),
                        o === s && r.add(s),
                        r
                      );
                    }, new Set()),
                    o = Array.from(r).filter(Boolean);
                  o.length && e.setAttribute('class', o.join(' '));
                })(e, n, t);
              }),
              e
            );
          },
          jsx: function (e) {
            return (
              e.walk(function (e) {
                Ln(e, 'class', 'className'), Ln(e, 'for', 'htmlFor');
              }),
              e
            );
          },
          xsl: function (e) {
            return (
              e.walk(function (e) {
                zn.test(e.name || '') &&
                  (e.children.length || e.value) &&
                  e.removeAttribute('select');
              }),
              e
            );
          },
        },
        qn = function (e, t) {
          return (
            Object.keys(t || {}).forEach(function (n) {
              if (n in Rn) {
                var r = 'object' === typeof t[n] ? t[n] : null;
                e = e.use(Rn[n], r);
              }
            }),
            e
          );
        },
        In = function (e, t, n) {
          return (
            'string' === typeof t
              ? (t = [t])
              : t &&
                'object' === typeof t &&
                !Array.isArray(t) &&
                ((n = t), (t = null)),
            e
              .use(pn)
              .use(wn, Array.isArray(t) ? t.length : null)
              .use(gn)
              .use(kn, t)
              .use(qn, n)
          );
        },
        Dn = {
          a: 'a[href]',
          'a:blank':
            "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
          'a:link': "a[href='http://${0}']",
          'a:mail': "a[href='mailto:${0}']",
          'a:tel': "a[href='tel:+${0}']",
          abbr: 'abbr[title]',
          'acr|acronym': 'acronym[title]',
          base: 'base[href]/',
          basefont: 'basefont/',
          br: 'br/',
          frame: 'frame/',
          hr: 'hr/',
          bdo: 'bdo[dir]',
          'bdo:r': 'bdo[dir=rtl]',
          'bdo:l': 'bdo[dir=ltr]',
          col: 'col/',
          link: 'link[rel=stylesheet href]/',
          'link:css': "link[href='${1:style}.css']",
          'link:print': "link[href='${1:print}.css' media=print]",
          'link:favicon':
            "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
          'link:mf|link:manifest':
            "link[rel='manifest' href='${1:manifest.json}']",
          'link:touch': "link[rel=apple-touch-icon href='${1:favicon.png}']",
          'link:rss':
            "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
          'link:atom':
            "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
          'link:im|link:import': "link[rel=import href='${1:component}.html']",
          meta: 'meta/',
          'meta:utf':
            "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
          'meta:vp':
            "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
          'meta:compat': "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
          'meta:edge': "meta:compat[content='${1:ie=edge}']",
          'meta:redirect':
            "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
          style: 'style',
          script: 'script[!src]',
          'script:src': 'script[src]',
          img: 'img[src alt]/',
          'img:s|img:srcset': 'img[srcset src alt]',
          'img:z|img:sizes': 'img[sizes srcset src alt]',
          picture: 'picture',
          'src|source': 'source/',
          'src:sc|source:src': 'source[src type]',
          'src:s|source:srcset': 'source[srcset]',
          'src:t|source:type': "source[srcset type='${1:image/}']",
          'src:z|source:sizes': 'source[sizes srcset]',
          'src:m|source:media': "source[media='(${1:min-width: })' srcset]",
          'src:mt|source:media:type': "source:media[type='${2:image/}']",
          'src:mz|source:media:sizes': 'source:media[sizes srcset]',
          'src:zt|source:sizes:type': "source[sizes srcset type='${1:image/}']",
          iframe: 'iframe[src frameborder=0]',
          embed: 'embed[src type]/',
          object: 'object[data type]',
          param: 'param[name value]/',
          map: 'map[name]',
          area: 'area[shape coords href alt]/',
          'area:d': 'area[shape=default]',
          'area:c': 'area[shape=circle]',
          'area:r': 'area[shape=rect]',
          'area:p': 'area[shape=poly]',
          form: 'form[action]',
          'form:get': 'form[method=get]',
          'form:post': 'form[method=post]',
          label: 'label[for]',
          input: 'input[type=${1:text}]/',
          inp: 'input[name=${1} id=${1}]',
          'input:h|input:hidden': 'input[type=hidden name]',
          'input:t|input:text': 'inp[type=text]',
          'input:search': 'inp[type=search]',
          'input:email': 'inp[type=email]',
          'input:url': 'inp[type=url]',
          'input:p|input:password': 'inp[type=password]',
          'input:datetime': 'inp[type=datetime]',
          'input:date': 'inp[type=date]',
          'input:datetime-local': 'inp[type=datetime-local]',
          'input:month': 'inp[type=month]',
          'input:week': 'inp[type=week]',
          'input:time': 'inp[type=time]',
          'input:tel': 'inp[type=tel]',
          'input:number': 'inp[type=number]',
          'input:color': 'inp[type=color]',
          'input:c|input:checkbox': 'inp[type=checkbox]',
          'input:r|input:radio': 'inp[type=radio]',
          'input:range': 'inp[type=range]',
          'input:f|input:file': 'inp[type=file]',
          'input:s|input:submit': 'input[type=submit value]',
          'input:i|input:image': 'input[type=image src alt]',
          'input:b|input:button': 'input[type=button value]',
          'input:reset': 'input:button[type=reset]',
          isindex: 'isindex/',
          select: 'select[name=${1} id=${1}]',
          'select:d|select:disabled': 'select[disabled.]',
          'opt|option': 'option[value]',
          textarea: 'textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]',
          marquee: 'marquee[behavior direction]',
          'menu:c|menu:context': 'menu[type=context]',
          'menu:t|menu:toolbar': 'menu[type=toolbar]',
          video: 'video[src]',
          audio: 'audio[src]',
          'html:xml': 'html[xmlns=http://www.w3.org/1999/xhtml]',
          keygen: 'keygen/',
          command: 'command/',
          'btn:s|button:s|button:submit': 'button[type=submit]',
          'btn:r|button:r|button:reset': 'button[type=reset]',
          'btn:d|button:d|button:disabled': 'button[disabled.]',
          'fst:d|fset:d|fieldset:d|fieldset:disabled': 'fieldset[disabled.]',
          bq: 'blockquote',
          fig: 'figure',
          figc: 'figcaption',
          pic: 'picture',
          ifr: 'iframe',
          emb: 'embed',
          obj: 'object',
          cap: 'caption',
          colg: 'colgroup',
          fst: 'fieldset',
          btn: 'button',
          optg: 'optgroup',
          tarea: 'textarea',
          leg: 'legend',
          sect: 'section',
          art: 'article',
          hdr: 'header',
          ftr: 'footer',
          adr: 'address',
          dlg: 'dialog',
          str: 'strong',
          prog: 'progress',
          mn: 'main',
          tem: 'template',
          fset: 'fieldset',
          datag: 'datagrid',
          datal: 'datalist',
          kg: 'keygen',
          out: 'output',
          det: 'details',
          cmd: 'command',
          'ri:d|ri:dpr': 'img:s',
          'ri:v|ri:viewport': 'img:z',
          'ri:a|ri:art': 'pic>src:m+img',
          'ri:t|ri:type': 'pic>src:t+img',
          '!!!': '{<!DOCTYPE html>}',
          doc: 'html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body',
          '!|html:5': '!!!+doc',
          c: '{\x3c!-- ${0} --\x3e}',
          'cc:ie': '{\x3c!--[if IE]>${0}<![endif]--\x3e}',
          'cc:noie': '{\x3c!--[if !IE]>\x3c!--\x3e${0}\x3c!--<![endif]--\x3e}',
        },
        Wn = {
          latin: {
            common: [
              'lorem',
              'ipsum',
              'dolor',
              'sit',
              'amet',
              'consectetur',
              'adipisicing',
              'elit',
            ],
            words: [
              'exercitationem',
              'perferendis',
              'perspiciatis',
              'laborum',
              'eveniet',
              'sunt',
              'iure',
              'nam',
              'nobis',
              'eum',
              'cum',
              'officiis',
              'excepturi',
              'odio',
              'consectetur',
              'quasi',
              'aut',
              'quisquam',
              'vel',
              'eligendi',
              'itaque',
              'non',
              'odit',
              'tempore',
              'quaerat',
              'dignissimos',
              'facilis',
              'neque',
              'nihil',
              'expedita',
              'vitae',
              'vero',
              'ipsum',
              'nisi',
              'animi',
              'cumque',
              'pariatur',
              'velit',
              'modi',
              'natus',
              'iusto',
              'eaque',
              'sequi',
              'illo',
              'sed',
              'ex',
              'et',
              'voluptatibus',
              'tempora',
              'veritatis',
              'ratione',
              'assumenda',
              'incidunt',
              'nostrum',
              'placeat',
              'aliquid',
              'fuga',
              'provident',
              'praesentium',
              'rem',
              'necessitatibus',
              'suscipit',
              'adipisci',
              'quidem',
              'possimus',
              'voluptas',
              'debitis',
              'sint',
              'accusantium',
              'unde',
              'sapiente',
              'voluptate',
              'qui',
              'aspernatur',
              'laudantium',
              'soluta',
              'amet',
              'quo',
              'aliquam',
              'saepe',
              'culpa',
              'libero',
              'ipsa',
              'dicta',
              'reiciendis',
              'nesciunt',
              'doloribus',
              'autem',
              'impedit',
              'minima',
              'maiores',
              'repudiandae',
              'ipsam',
              'obcaecati',
              'ullam',
              'enim',
              'totam',
              'delectus',
              'ducimus',
              'quis',
              'voluptates',
              'dolores',
              'molestiae',
              'harum',
              'dolorem',
              'quia',
              'voluptatem',
              'molestias',
              'magni',
              'distinctio',
              'omnis',
              'illum',
              'dolorum',
              'voluptatum',
              'ea',
              'quas',
              'quam',
              'corporis',
              'quae',
              'blanditiis',
              'atque',
              'deserunt',
              'laboriosam',
              'earum',
              'consequuntur',
              'hic',
              'cupiditate',
              'quibusdam',
              'accusamus',
              'ut',
              'rerum',
              'error',
              'minus',
              'eius',
              'ab',
              'ad',
              'nemo',
              'fugit',
              'officia',
              'at',
              'in',
              'id',
              'quos',
              'reprehenderit',
              'numquam',
              'iste',
              'fugiat',
              'sit',
              'inventore',
              'beatae',
              'repellendus',
              'magnam',
              'recusandae',
              'quod',
              'explicabo',
              'doloremque',
              'aperiam',
              'consequatur',
              'asperiores',
              'commodi',
              'optio',
              'dolor',
              'labore',
              'temporibus',
              'repellat',
              'veniam',
              'architecto',
              'est',
              'esse',
              'mollitia',
              'nulla',
              'a',
              'similique',
              'eos',
              'alias',
              'dolore',
              'tenetur',
              'deleniti',
              'porro',
              'facere',
              'maxime',
              'corrupti',
            ],
          },
          ru: {
            common: [
              '\u0434\u0430\u043b\u0435\u043a\u043e-\u0434\u0430\u043b\u0435\u043a\u043e',
              '\u0437\u0430',
              '\u0441\u043b\u043e\u0432\u0435\u0441\u043d\u044b\u043c\u0438',
              '\u0433\u043e\u0440\u0430\u043c\u0438',
              '\u0432 \u0441\u0442\u0440\u0430\u043d\u0435',
              '\u0433\u043b\u0430\u0441\u043d\u044b\u0445',
              '\u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0445',
              '\u0436\u0438\u0432\u0443\u0442',
              '\u0440\u044b\u0431\u043d\u044b\u0435',
              '\u0442\u0435\u043a\u0441\u0442\u044b',
            ],
            words: [
              '\u0432\u0434\u0430\u043b\u0438',
              '\u043e\u0442 \u0432\u0441\u0435\u0445',
              '\u043e\u043d\u0438',
              '\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0445',
              '\u0434\u043e\u043c\u0430\u0445',
              '\u043d\u0430 \u0431\u0435\u0440\u0435\u0433\u0443',
              '\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u043a\u0430',
              '\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e',
              '\u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0433\u043e',
              '\u043e\u043a\u0435\u0430\u043d\u0430',
              '\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439',
              '\u0440\u0443\u0447\u0435\u0435\u043a',
              '\u0434\u0430\u043b\u044c',
              '\u0436\u0443\u0440\u0447\u0438\u0442',
              '\u043f\u043e \u0432\u0441\u0435\u0439',
              '\u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442',
              '\u0435\u0435',
              '\u0432\u0441\u0435\u043c\u0438',
              '\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c\u0438',
              '\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438',
              '\u044d\u0442\u0430',
              '\u043f\u0430\u0440\u0430\u0434\u0438\u0433\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f',
              '\u0441\u0442\u0440\u0430\u043d\u0430',
              '\u043a\u043e\u0442\u043e\u0440\u043e\u0439',
              '\u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0435',
              '\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f',
              '\u0437\u0430\u043b\u0435\u0442\u0430\u044e\u0442',
              '\u043f\u0440\u044f\u043c\u043e',
              '\u0440\u043e\u0442',
              '\u0434\u0430\u0436\u0435',
              '\u0432\u0441\u0435\u043c\u043e\u0433\u0443\u0449\u0430\u044f',
              '\u043f\u0443\u043d\u043a\u0442\u0443\u0430\u0446\u0438\u044f',
              '\u043d\u0435',
              '\u0438\u043c\u0435\u0435\u0442',
              '\u0432\u043b\u0430\u0441\u0442\u0438',
              '\u043d\u0430\u0434',
              '\u0440\u044b\u0431\u043d\u044b\u043c\u0438',
              '\u0442\u0435\u043a\u0441\u0442\u0430\u043c\u0438',
              '\u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438',
              '\u0431\u0435\u0437\u043e\u0440\u0444\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u043d\u044b\u0439',
              '\u043e\u0431\u0440\u0430\u0437',
              '\u0436\u0438\u0437\u043d\u0438',
              '\u043e\u0434\u043d\u0430\u0436\u0434\u044b',
              '\u043e\u0434\u043d\u0430',
              '\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f',
              '\u0441\u0442\u0440\u043e\u0447\u043a\u0430',
              '\u0440\u044b\u0431\u043d\u043e\u0433\u043e',
              '\u0442\u0435\u043a\u0441\u0442\u0430',
              '\u0438\u043c\u0435\u043d\u0438',
              'lorem',
              'ipsum',
              '\u0440\u0435\u0448\u0438\u043b\u0430',
              '\u0432\u044b\u0439\u0442\u0438',
              '\u0431\u043e\u043b\u044c\u0448\u043e\u0439',
              '\u043c\u0438\u0440',
              '\u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0438',
              '\u0432\u0435\u043b\u0438\u043a\u0438\u0439',
              '\u043e\u043a\u0441\u043c\u043e\u043a\u0441',
              '\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0430\u043b',
              '\u043e',
              '\u0437\u043b\u044b\u0445',
              '\u0437\u0430\u043f\u044f\u0442\u044b\u0445',
              '\u0434\u0438\u043a\u0438\u0445',
              '\u0437\u043d\u0430\u043a\u0430\u0445',
              '\u0432\u043e\u043f\u0440\u043e\u0441\u0430',
              '\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0445',
              '\u0442\u043e\u0447\u043a\u0430\u0445',
              '\u0437\u0430\u043f\u044f\u0442\u043e\u0439',
              '\u043d\u043e',
              '\u0442\u0435\u043a\u0441\u0442',
              '\u0434\u0430\u043b',
              '\u0441\u0431\u0438\u0442\u044c',
              '\u0441\u0435\u0431\u044f',
              '\u0442\u043e\u043b\u043a\u0443',
              '\u043e\u043d',
              '\u0441\u043e\u0431\u0440\u0430\u043b',
              '\u0441\u0435\u043c\u044c',
              '\u0441\u0432\u043e\u0438\u0445',
              '\u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0445',
              '\u0431\u0443\u043a\u0432',
              '\u043f\u043e\u0434\u043f\u043e\u044f\u0441\u0430\u043b',
              '\u0438\u043d\u0438\u0446\u0438\u0430\u043b',
              '\u0437\u0430',
              '\u043f\u043e\u044f\u0441',
              '\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f',
              '\u0434\u043e\u0440\u043e\u0433\u0443',
              '\u0432\u0437\u043e\u0431\u0440\u0430\u0432\u0448\u0438\u0441\u044c',
              '\u043f\u0435\u0440\u0432\u0443\u044e',
              '\u0432\u0435\u0440\u0448\u0438\u043d\u0443',
              '\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u044b\u0445',
              '\u0433\u043e\u0440',
              '\u0431\u0440\u043e\u0441\u0438\u043b',
              '\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439',
              '\u0432\u0437\u0433\u043b\u044f\u0434',
              '\u043d\u0430\u0437\u0430\u0434',
              '\u0441\u0438\u043b\u0443\u044d\u0442',
              '\u0441\u0432\u043e\u0435\u0433\u043e',
              '\u0440\u043e\u0434\u043d\u043e\u0433\u043e',
              '\u0433\u043e\u0440\u043e\u0434\u0430',
              '\u0431\u0443\u043a\u0432\u043e\u0433\u0440\u0430\u0434',
              '\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
              '\u0434\u0435\u0440\u0435\u0432\u043d\u0438',
              '\u0430\u043b\u0444\u0430\u0432\u0438\u0442',
              '\u043f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
              '\u0441\u0432\u043e\u0435\u0433\u043e',
              '\u043f\u0435\u0440\u0435\u0443\u043b\u043a\u0430',
              '\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439',
              '\u0440\u0435\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439',
              '\u0432\u043e\u043f\u0440\u043e\u0441',
              '\u0441\u043a\u0430\u0442\u0438\u043b\u0441\u044f',
              '\u0435\u0433\u043e',
              '\u0449\u0435\u043a\u0435',
              '\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u043b',
              '\u0441\u0432\u043e\u0439',
              '\u043f\u0443\u0442\u044c',
              '\u0434\u043e\u0440\u043e\u0433\u0435',
              '\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043b',
              '\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u044c',
              '\u043e\u043d\u0430',
              '\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u043b\u0430',
              '\u043c\u043e\u0435\u0439',
              '\u0432\u0441\u0435',
              '\u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f',
              '\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e',
              '\u0440\u0430\u0437',
              '\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435',
              '\u0447\u0442\u043e',
              '\u043c\u0435\u043d\u044f',
              '\u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
              '\u044d\u0442\u043e',
              '\u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u0430',
              '\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044f',
              '\u0442\u044b',
              '\u043b\u0443\u0447\u0448\u0435',
              '\u0441\u0432\u043e\u044e',
              '\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e',
              '\u0441\u0442\u0440\u0430\u043d\u0443',
              '\u043f\u043e\u0441\u043b\u0443\u0448\u0430\u0432\u0448\u0438\u0441\u044c',
              '\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u0438',
              '\u043d\u0430\u0448',
              '\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u043b',
              '\u0441\u0432\u043e\u0439',
              '\u043f\u0443\u0442\u044c',
              '\u0432\u0441\u043a\u043e\u0440\u0435',
              '\u0435\u043c\u0443',
              '\u043f\u043e\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043b\u0441\u044f',
              '\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0439',
              '\u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c',
              '\u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445',
              '\u0442\u0435\u043a\u0441\u0442\u043e\u0432',
              '\u043d\u0430\u043f\u043e\u0438\u0432\u0448\u0438\u0439',
              '\u044f\u0437\u044b\u043a\u043e\u043c',
              '\u0440\u0435\u0447\u044c\u044e',
              '\u0437\u0430\u043c\u0430\u043d\u0438\u0432\u0448\u0438\u0439',
              '\u0441\u0432\u043e\u0435',
              '\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e',
              '\u043a\u043e\u0442\u043e\u0440\u043e\u0435',
              '\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u043e',
              '\u0441\u043d\u043e\u0432\u0430',
              '\u0441\u043d\u043e\u0432\u0430',
              '\u0441\u0432\u043e\u0438\u0445',
              '\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445',
              '\u0435\u0441\u043b\u0438',
              '\u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043b\u0438',
              '\u0442\u043e',
              '\u0436\u0438\u0432\u0435\u0442',
              '\u0442\u0430\u043c',
              '\u0434\u043e',
              '\u0441\u0438\u0445',
              '\u043f\u043e\u0440',
            ],
          },
          sp: {
            common: [
              'mujer',
              'uno',
              'dolor',
              'm\xe1s',
              'de',
              'poder',
              'mismo',
              'si',
            ],
            words: [
              'ejercicio',
              'preferencia',
              'perspicacia',
              'laboral',
              'pa\xf1o',
              'suntuoso',
              'molde',
              'namibia',
              'planeador',
              'mirar',
              'dem\xe1s',
              'oficinista',
              'excepci\xf3n',
              'odio',
              'consecuencia',
              'casi',
              'auto',
              'chicharra',
              'velo',
              'elixir',
              'ataque',
              'no',
              'odio',
              'temporal',
              'cu\xf3rum',
              'dign\xedsimo',
              'facilismo',
              'letra',
              'nihilista',
              'expedici\xf3n',
              'alma',
              'alveolar',
              'aparte',
              'le\xf3n',
              'animal',
              'como',
              'paria',
              'belleza',
              'modo',
              'natividad',
              'justo',
              'ataque',
              's\xe9quito',
              'pillo',
              'sed',
              'ex',
              'y',
              'voluminoso',
              'temporalidad',
              'verdades',
              'racional',
              'asunci\xf3n',
              'incidente',
              'marejada',
              'placenta',
              'amanecer',
              'fuga',
              'previsor',
              'presentaci\xf3n',
              'lejos',
              'necesariamente',
              'sospechoso',
              'adiposidad',
              'quind\xedo',
              'p\xf3cima',
              'voluble',
              'd\xe9bito',
              'sinti\xf3',
              'accesorio',
              'falda',
              'sapiencia',
              'volutas',
              'queso',
              'permacultura',
              'laudo',
              'soluciones',
              'entero',
              'pan',
              'litro',
              'tonelada',
              'culpa',
              'libertario',
              'mosca',
              'dictado',
              'reincidente',
              'nascimiento',
              'dolor',
              'escolar',
              'impedimento',
              'm\xednima',
              'mayores',
              'repugnante',
              'dulce',
              'obcecado',
              'monta\xf1a',
              'enigma',
              'total',
              'delet\xe9reo',
              'd\xe9cima',
              'c\xe1bala',
              'fotograf\xeda',
              'dolores',
              'molesto',
              'olvido',
              'paciencia',
              'resiliencia',
              'voluntad',
              'molestias',
              'magn\xedfico',
              'distinci\xf3n',
              'ovni',
              'marejada',
              'cerro',
              'torre',
              'y',
              'abogada',
              'manantial',
              'corporal',
              'agua',
              'crep\xfasculo',
              'ataque',
              'desierto',
              'laboriosamente',
              'angustia',
              'afortunado',
              'alma',
              'encefalograma',
              'materialidad',
              'cosas',
              'o',
              'renuncia',
              'error',
              'menos',
              'conejo',
              'abad\xeda',
              'analfabeto',
              'remo',
              'fugacidad',
              'oficio',
              'en',
              'alm\xe1cigo',
              'vos',
              'pan',
              'represi\xf3n',
              'n\xfameros',
              'triste',
              'refugiado',
              'trote',
              'inventor',
              'corchea',
              'repelente',
              'magma',
              'recusado',
              'patr\xf3n',
              'expl\xedcito',
              'paloma',
              's\xedndrome',
              'inmune',
              'autoinmune',
              'comodidad',
              'ley',
              'vietnamita',
              'demonio',
              'tasmania',
              'repeler',
              'ap\xe9ndice',
              'arquitecto',
              'columna',
              'yugo',
              'computador',
              'mula',
              'a',
              'prop\xf3sito',
              'fantas\xeda',
              'alias',
              'rayo',
              'tenedor',
              'deleznable',
              'ventana',
              'cara',
              'anemia',
              'corrupto',
            ],
          },
        },
        Pn = {
          wordCount: 30,
          skipCommon: !1,
          lang: 'latin',
        };

      function Un(e, t) {
        return Math.floor(Math.random() * (t - e) + e);
      }

      function Fn(e, t) {
        for (var n = e.length, r = Math.min(n, t), o = new Set(); o.size < r; )
          o.add(e[Un(0, n)]);
        return Array.from(o);
      }

      function Bn(e, t) {
        var n, r;
        return (
          e.length &&
            (e = [((n = e[0]), n[0].toUpperCase() + n.slice(1))].concat(
              e.slice(1)
            )),
          e.join(' ') + (t || (r = '?!...')[Un(0, r.length - 1)])
        );
      }

      function Hn(e) {
        if (e.length < 2) return e;
        var t = (e = e.slice()).length,
          n = /,$/,
          r = 0;
        r = t > 3 && t <= 6 ? Un(0, 1) : t > 6 && t <= 12 ? Un(0, 2) : Un(1, 4);
        for (var o = 0, i = void 0; o < r; o++)
          (i = Un(0, t - 2)), n.test(e[i]) || (e[i] += ',');
        return e;
      }

      function Gn(e, t, n) {
        var r,
          o = [],
          i = 0;
        for (
          n &&
          e.common &&
          ((i += (r = e.common.slice(0, t)).length), o.push(Bn(Hn(r), '.')));
          i < t;

        )
          (i += (r = Fn(e.words, Math.min(Un(2, 30), t - i))).length),
            o.push(Bn(Hn(r)));
        return o.join(' ');
      }

      function Yn(e, t) {
        return (
          (t = t || {}),
          e.walk(function (e) {
            return (function (e, t) {
              for (var n = e.attributes, r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                'string' === typeof i.value &&
                  e.setAttribute(i.name, Kn(i.value, t));
              }
              null != e.value && (e.value = Kn(e.value, t));
              return e;
            })(e, t);
          }),
          e
        );
      }

      function Kn(e, t) {
        for (
          var n = (function (e) {
              var t,
                n = /\$\{([a-z][\w\-]*)\}/gi,
                r = 92,
                o = [],
                i = new Map();
              for (; (t = n.exec(e)); ) i.set(t.index, t);
              if (i.size) {
                for (var a = 0, s = 0, l = e.length, u = ''; s < l; )
                  if (e.charCodeAt(s) === r && i.has(s + 1)) {
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
              return {
                string: e,
                variables: o,
              };
            })(e),
            r = 0,
            o = '',
            i = 0,
            a = n.variables.length;
          i < a;
          i++
        ) {
          var s = n.variables[i],
            l = s.name in t ? t[s.name] : s.name;
          'function' === typeof l && (l = l(n.string, s, r + s.location)),
            (o += n.string.slice(r, s.location) + l),
            (r = s.location + s.length);
        }
        return o + n.string.slice(r);
      }
      [
        'body',
        'head',
        'html',
        'address',
        'blockquote',
        'dd',
        'div',
        'section',
        'article',
        'aside',
        'header',
        'footer',
        'nav',
        'menu',
        'dl',
        'dt',
        'fieldset',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'iframe',
        'noframes',
        'object',
        'ol',
        'p',
        'ul',
        'applet',
        'center',
        'dir',
        'hr',
        'pre',
        'a',
        'abbr',
        'acronym',
        'area',
        'b',
        'base',
        'basefont',
        'bdo',
        'big',
        'br',
        'button',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'del',
        'dfn',
        'em',
        'font',
        'head',
        'html',
        'i',
        'img',
        'input',
        'ins',
        'isindex',
        'kbd',
        'label',
        'legend',
        'li',
        'link',
        'map',
        'meta',
        'noscript',
        'optgroup',
        'option',
        'param',
        'q',
        's',
        'samp',
        'script',
        'select',
        'small',
        'span',
        'strike',
        'strong',
        'style',
        'sub',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'tt',
        'u',
        'var',
        'canvas',
        'main',
        'figure',
        'plaintext',
      ].forEach(function (e) {
        return (Dn[e] = Dn[e] || e);
      });
      var Vn = new nt(Dn),
        Xn = /^lorem([a-z]*)(\d*)$/i;
      Vn.get(0).set(Xn, function (e) {
        var t = {},
          n = e.name.match(Xn),
          r = n[1],
          o = n[2];
        return (
          r && (t.lang = r),
          o && (t.wordCount = +o),
          (function (e, t) {
            t = Object.assign({}, Pn, t);
            var n = Wn[t.lang] || Wn.latin,
              r =
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
                ? ((e.value = Gn(n, t.wordCount, r)),
                  (e.name = e.parent.name ? dn(e.parent.name) : null))
                : ((e.parent.value = Gn(n, t.wordCount, r)), e.remove()),
              e
            );
          })(e, t)
        );
      });
      var Jn = Vn.all({
        type: 'string',
      }).map(function (e) {
        return e.key;
      });
      Jn.push('lorem');
      var Zn = $($({}, at), {
        snippets: Vn,
        profile: new ot(),
        variables: {
          lang: 'en',
          locale: 'en-US',
          charset: 'UTF-8',
        },
      });

      function Qn(e) {
        return ln(
          Ct(e).use(Dt, Zn.snippets).use(Yn, Zn.variables).use(In, null, null),
          Zn.profile,
          Zn
        );
      }
      var er = n('uLgn'),
        tr = n('z7pX'),
        nr = n('rYih'),
        rr = n('t5A9'),
        or = n('3sI7');

      function ir(e) {
        var t = e.editor;
        return Object(r.b)(ar, {
          editor: t,
        });
      }

      function ar(e) {
        var t = e.editor,
          n = Object(nr.a)().debuggest,
          o = Object(rr.a)(n.mainClient),
          i = Object(rr.a)(null === o || void 0 === o ? void 0 : o.state),
          a = Object(rr.a)(null === o || void 0 === o ? void 0 : o.stackFrames),
          s = Object(rr.a)(null === o || void 0 === o ? void 0 : o.breakpoints),
          l = (function () {
            var e = f.useState([]),
              t = Object(y.a)(e, 2),
              n = t[0],
              r = t[1],
              o = f.useCallback(function (e) {
                return (
                  r(function (t) {
                    return [].concat(Object(tr.a)(t), [e]);
                  }),
                  function () {
                    return r(function (t) {
                      return t.filter(function (t) {
                        return t !== e;
                      });
                    });
                  }
                );
              }, []);
            return [n, o];
          })(),
          u = Object(y.a)(l, 2),
          c = u[0],
          d = u[1],
          g = (function (e) {
            var t = f.useState(function () {
                return e.getModel().uri;
              }),
              n = Object(y.a)(t, 2),
              r = n[0],
              o = n[1];
            if (
              (f.useEffect(
                function () {
                  var t = e.onDidChangeModel(function (e) {
                    o(e.newModelUrl);
                  });
                  return function () {
                    t.dispose();
                  };
                },
                [e]
              ),
              !r)
            )
              return null;
            return Object(or.b)(r.path);
          })(t),
          h = (function (e, t) {
            var n;
            if (!e || 0 === e.length) return null;
            if (null === t) return null;
            if (
              (null === (n = e[0].source) || void 0 === n ? void 0 : n.path) !==
              t
            )
              return null;
            return e[0].line;
          })(a, g),
          b = (function (e) {
            var t = Object(nr.a)().fs,
              n = f.useRef();
            return (
              f.useEffect(
                function () {
                  n.current = void 0;
                  var r = e && Object(or.c)(e);
                  if (r)
                    return t.watchOtFile(r, {
                      onReady: function (e) {
                        var t = e.version;
                        n.current = t;
                      },
                      onChange: function (e) {
                        var t = e.version;
                        n.current = t;
                      },
                    });
                },
                [t, e]
              ),
              n
            );
          })(g);
        f.useEffect(
          function () {
            t.updateOptions({
              glyphMargin: Boolean(o),
            });
          },
          [o, t]
        ),
          f.useEffect(
            function () {
              if (o && g) {
                var e = t.onMouseDown(function (e) {
                  var n = e.target,
                    r = n.type,
                    i = n.position;
                  if (
                    r === m.editor.MouseTargetType.GUTTER_GLYPH_MARGIN ||
                    r === m.editor.MouseTargetType.GUTTER_LINE_NUMBERS
                  ) {
                    var a = t.getModel(),
                      s = d(i.lineNumber);
                    o.toggleBreakpoint(g, {
                      line: i.lineNumber,
                      otVersion: b.current,
                      otIndex: a.getOffsetAt({
                        lineNumber: i.lineNumber,
                        column: a.getLineFirstNonWhitespaceColumn(i.lineNumber),
                      }),
                    }).finally(s);
                  }
                });
                return function () {
                  e.dispose();
                };
              }
            },
            [t, o, g, b, d]
          );
        var v = t.getModel(),
          x = (function (e) {
            var t = f.useRef([]);
            return (
              f.useEffect(
                function () {
                  return function () {
                    t.current = e.deltaDecorations(t.current, []);
                  };
                },
                [e]
              ),
              f.useCallback(
                function (n) {
                  t.current = e.deltaDecorations(t.current, n);
                },
                [e]
              )
            );
          })(t);
        f.useEffect(
          function () {
            var e;
            if (v) {
              var t,
                n = (e = (
                  (g && (null === s || void 0 === s ? void 0 : s.get(g))) ||
                  []
                ).filter(function (e) {
                  var t = e.line;
                  return !c.includes(t);
                })).concat
                  .apply(
                    e,
                    Object(tr.a)(
                      c.map(function (e) {
                        return {
                          line: e,
                          pending: !0,
                          verified: !1,
                        };
                      })
                    )
                  )
                  .map(sr);
              if (
                (null !== h &&
                  n.push({
                    range: {
                      startLineNumber: (t = h),
                      startColumn: 1,
                      endLineNumber: t,
                      endColumn: 1,
                    },
                    options: {
                      isWholeLine: !0,
                      className: 'replit-monaco-debugger-current-line',
                      marginClassName: 'replit-monaco-debugger-current-line',
                    },
                  }),
                !(v.getValueLength() > 0))
              ) {
                var r = v.onDidChangeContent(function () {
                  v.__externalChange && x(n);
                });
                return function () {
                  return r.dispose();
                };
              }
              x(n);
            }
          },
          [x, v, s, c, g, h]
        );
        var w = 'terminated' !== i && null !== i;
        return (
          f.useEffect(
            function () {
              t.updateOptions({
                readOnly: w,
              });
            },
            [t, w]
          ),
          Object(r.b)(p.a, {
            id: '2979461666',
            children: [
              '.replit-monaco-debugger-breakpoint-pending{background-color:var(--deprecated-color-primary-1);border-radius:50%;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0.25;}',
              '.replit-monaco-debugger-breakpoint-unverified{background-color:var(--accent-primary-default);border-radius:50%;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0.5;}',
              '.replit-monaco-debugger-breakpoint-verified{background-color:var(--deprecated-color-primary-1);border-radius:50%;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:1;}',
              '.replit-monaco-debugger-current-line{background-color:var(--deprecated-color-primary-transparent-3);}',
            ],
          })
        );
      }

      function sr(e) {
        return {
          range: {
            startLineNumber: e.line,
            startColumn: 1,
            endLineNumber: e.line,
            endColumn: 1,
          },
          options: {
            isWholeLine: !1,
            stickiness:
              m.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
            glyphMarginClassName: e.pending
              ? 'replit-monaco-debugger-breakpoint-pending'
              : e.verified
              ? 'replit-monaco-debugger-breakpoint-verified'
              : 'replit-monaco-debugger-breakpoint-unverified',
          },
        };
      }
      var lr = n('dI/k'),
        ur = n('zgDP');

      function cr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function dr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? cr(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : cr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function pr(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
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
          var n,
            r = Object(u.a)(e);
          if (t) {
            var o = Object(u.a)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Object(l.a)(this, n);
        };
      }
      !(function (e) {
        if ((void 0 === e && (e = window.monaco), st(e)))
          lt(
            e,
            'html',
            function (e, t) {
              return (
                ('' === e[t].type &&
                  (0 === t || 'delimiter.html' === e[t - 1].type)) ||
                'text.html.basic' === e[0].type
              );
            },
            function (e) {
              if ('' !== e && !e.match(/\s$/)) {
                for (
                  var t = {
                      '{': 1,
                      '}': -1,
                      '[': 1,
                      ']': -1,
                    },
                    n = 0,
                    r = (e = e.trim()).length - 1;
                  r > 0;
                  r--
                )
                  if (((n += t[e[r]] || 0), e[r].match(/\s/) && n >= 0)) {
                    e = e.substr(r + 1);
                    break;
                  }
                if (e.match(/^[a-zA-Z[(.#!]/)) {
                  var o = e.length,
                    i = Jn.filter(function (t) {
                      return t.length > o && t.slice(0, o) === e;
                    });
                  i.unshift(e);
                  try {
                    return i.map(function (e) {
                      return {
                        emmetText: e,
                        expandText: Qn(e),
                      };
                    });
                  } catch (a) {
                    return;
                  }
                }
              }
            }
          );
      })(m),
        (function (e) {
          if ((void 0 === e && (e = window.monaco), st(e)))
            lt(
              e,
              ['css', 'less', 'scss'],
              function (e, t) {
                return 'attribute.value' !== e[t].type.substring(0, 15);
              },
              function (e) {
                if (
                  '' !== e &&
                  !e.match(/\s$/) &&
                  (e = e.trim().split(/{|}|;/).pop())
                )
                  try {
                    return [
                      {
                        emmetText: e,
                        expandText: ct(e),
                      },
                    ];
                  } catch (t) {
                    return;
                  }
              }
            );
        })(m),
        (function () {
          var e = [
            {
              token: 'string.escape',
              foreground: 'ff69b4',
            },
            {
              token: 'regexp.escape',
              foreground: 'ff69b4',
            },
            {
              token: 'constant.escape',
              foreground: 'ff69b4',
            },
            {
              token: 'primitive',
              foreground: '4864aa',
            },
            {
              token: 'builtin',
              foreground: '4864aa',
            },
          ];
          m.editor.defineTheme('replit-light', {
            base: 'vs',
            inherit: !0,
            rules: [
              {
                token: 'attribute.name.html',
                foreground: '984e9c',
              },
              {
                token: 'attribute.value.html',
                foreground: 'ac9037',
              },
              {
                token: 'delimiter.html',
                foreground: '1F217D',
              },
              {
                token: 'tag.html',
                foreground: '4d7fe2',
              },
              {
                token: 'metatag.content.html',
                foreground: '3953A4',
              },
              {
                token: 'comment.content',
                foreground: 'AAAAAA',
                fontStyle: 'italic',
              },
              {
                token: 'comment',
                foreground: 'AAAAAA',
              },
              {
                token: 'predefined',
                foreground: '000080',
              },
              {
                token: 'namespace',
                foreground: '000080',
              },
              {
                token: 'constructor',
                foreground: '7b2cb3',
              },
              {
                token: 'function',
                foreground: '7b2cb3',
              },
            ].concat(e),
            colors: {
              'editor.lineHighlightBackground': '#f5f5f5',
            },
          });
          var t = window['flag-rui-token-update']
            ? v.e.backgroundDefault[1]
            : b.a.dark.color.background[1];
          m.editor.defineTheme('replit-dark', {
            base: 'vs-dark',
            inherit: !0,
            rules: [
              {
                token: 'predefined',
                foreground: '9932CC',
              },
              {
                token: 'namespace',
                foreground: 'B0C4DE',
              },
              {
                token: 'constructor',
                foreground: 'EEE8AA',
              },
              {
                token: 'function',
                foreground: 'dcdcaa',
              },
            ].concat(e),
            colors: {
              'editor.lineHighlightBackground': '#253152',
              'editor.background': t,
            },
          });
        })(),
        m.languages.register({
          id: 'reason',
          extensions: ['.re', '.rei'],
          aliases: ['Reason', 'reasonml'],
          mimetypes: ['text/x-reason'],
        }),
        m.languages.register({
          id: 'processing',
          extensions: ['.pde'],
          aliases: ['Processing'],
          mimetypes: ['text/x-processing'],
        }),
        m.languages.register({
          id: 'haskell',
          extensions: ['.hs', '.lhs'],
          aliases: ['Haskell'],
          mimetypes: ['text/x-haskell'],
        }),
        m.languages.register({
          id: 'elixir',
          extensions: ['.exs', '.ex'],
          aliases: ['Elixir'],
          mimetypes: ['text/x-elixir'],
        }),
        m.languages.register({
          id: 'dart',
          extensions: ['.dart'],
          aliases: ['Dart'],
          mimetypes: ['text/x-dart'],
        }),
        m.languages.register({
          id: 'perl6',
          extensions: [
            '.p6',
            '.pl6',
            '.pm6',
            '.pod6',
            '.t6',
            '.raku',
            '.rakumod',
            '.rakutest',
          ],
          aliases: ['Perl 6', 'perl 6', 'Raku', 'raku'],
          mimetypes: ['text/x-perl6'],
        }),
        m.languages.register({
          id: 'kotlin',
          extensions: ['.kt', '.kts'],
          aliases: ['Kotlin'],
          mimetypes: ['text/x-kotlin'],
        }),
        m.languages.register({
          id: 'ocaml',
          extensions: ['.ml', '.mli'],
          aliases: ['OCaml'],
          mimetypes: ['text/x-ocaml'],
        }),
        m.languages.register({
          id: 'erlang',
          extensions: ['.erl', '.hrl'],
          aliases: ['Erlang'],
          mimetypes: ['text/x-erlang'],
        }),
        m.languages.register({
          id: 'nim',
          extensions: ['.nim'],
          aliases: ['Nim'],
          mimetypes: ['text/x-nim'],
        }),
        m.languages.register({
          id: 'forth',
          extensions: ['.fth'],
          aliases: ['Forth'],
          mimetypes: ['text/x-forth'],
        }),
        m.languages.register({
          id: 'd',
          extensions: ['.d'],
          aliases: ['D', 'd-lang', 'dlang'],
          mimetypes: ['text/x-d'],
        }),
        m.languages.register({
          id: 'ejs',
          extensions: ['.ejs'],
          aliases: ['EJS', 'ejs'],
          mimetypes: ['text/x-ejs'],
        }),
        m.languages.register({
          id: 'elm',
          extensions: ['.elm'],
          aliases: ['Elm'],
          mimetypes: ['text/x-elm'],
        }),
        m.languages.register({
          id: 'fortran',
          extensions: ['.f', '.for', '.f90'],
          aliases: ['Fortran'],
          mimetypes: ['text/x-fortran'],
        }),
        m.languages.register({
          id: 'glsl',
          extensions: [
            '.vert',
            '.tesc',
            '.tese',
            '.geom',
            '.frag',
            '.comp',
            '.glsl',
            '.glslv',
            '.glslf',
            '.glslg',
          ],
          aliases: ['GLSL'],
          mimetypes: ['text/x-glsl'],
        }),
        m.languages.register({
          id: 'gitignore',
          filenames: ['.gitignore'],
          aliases: ['gitignore'],
          mimetypes: ['text/x-gitignore'],
        }),
        m.languages.register({
          id: 'html_ruby',
          extensions: ['.erb'],
          aliases: ['erb', 'html_ruby'],
          mimetypes: ['text/x-erb'],
        }),
        m.languages.register({
          id: 'vue',
          extensions: ['.vue'],
          aliases: ['vue', 'Vue', 'Vue.js'],
        }),
        n
          .e(53)
          .then(n.bind(null, 'tpLM'))
          .then(function (e) {
            m.languages.setMonarchTokensProvider('vue', e.language),
              m.languages.setLanguageConfiguration('vue', e.conf);
          }),
        m.languages.register({
          id: 'svelte',
          extensions: ['.svelte'],
          aliases: ['svelte', 'Svelte', 'Svelte.js'],
        }),
        n
          .e(53)
          .then(n.bind(null, 'tpLM'))
          .then(function (e) {
            m.languages.setMonarchTokensProvider('svelte', e.language),
              m.languages.setLanguageConfiguration('svelte', e.conf);
          }),
        m.languages.register({
          id: 'lisp',
          extensions: ['.lisp', '.lsp', '.l', '.fasl'],
          aliases: ['Lisp', 'CLisp', 'Common Lisp'],
          mimetypes: ['text/x-lisp'],
        }),
        m.languages.register({
          id: 'prolog',
          extensions: ['.pro', '.plg'],
          aliases: ['Prolog'],
          mimetypes: ['text/x-prolog'],
        }),
        m.languages.register({
          id: 'toml',
          extensions: ['.toml'],
          filenames: ['.replit'],
          aliases: ['TOML'],
          mimetypes: ['text/x-toml'],
        }),
        m.languages.register({
          id: 'elisp',
          extensions: ['.el'],
          aliases: ['Elisp', 'Emacs Lisp'],
          mimetypes: ['text/x-elisp'],
        }),
        m.languages.register({
          id: 'coffee',
          extensions: ['.coffee', '.litcoffee'],
          aliases: ['CoffeeScript', 'coffeescript', 'coffee'],
          mimetypes: ['text/x-coffeescript', 'text/coffeescript'],
        }),
        m.languages.register({
          id: 'makefile',
          filenames: ['Makefile', 'makefile', 'GNUmakefile'],
          aliases: ['Makefile'],
        }),
        (function () {
          m.languages.register({
            id: 'replit-ts',
            extensions: ['.ts', '.tsx'],
            aliases: ['TypeScript', 'ts', 'typescript'],
            mimetypes: ['text/typescript'],
          }),
            n
              .e(18)
              .then(n.bind(null, '87dK'))
              .then(function (e) {
                m.languages.setMonarchTokensProvider('replit-ts', e.language),
                  m.languages.setLanguageConfiguration('replit-ts', e.conf);
              });
          var e = {
            reactNamespace: 'React',
            jsx: m.languages.typescript.JsxEmit.React,
            target: m.languages.typescript.ScriptTarget.ES2016,
            allowNonTsExtensions: !0,
            moduleResolution:
              m.languages.typescript.ModuleResolutionKind.NodeJs,
            experimentalDecorators: !0,
            noEmit: !0,
            allowJs: !0,
            typeRoots: ['node_modules/@types'],
          };
          m.languages.typescript.typescriptDefaults.setCompilerOptions(e),
            m.languages.typescript.javascriptDefaults.setCompilerOptions(e),
            m.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
              noSemanticValidation: !0,
              noSyntaxValidation: !0,
            });
        })(),
        m.languages.register({
          id: 'replit-python-v'.concat(er['replit-python']),
          extensions: ['.py', '.rpy', '.pyw', '.cpy', '.gyp', '.gypi'],
          aliases: ['Python', 'py'],
          firstLine: '^#!/.*\\bpython[0-9.-]*\\b',
        }),
        m.languages.register({
          id: 'replit-js-v'.concat(er['replit-js']),
          extensions: ['.js', '.es6', '.jsx', '.jsm', '.mjs'],
          firstLine: '^#!.*\\bnode',
          filenames: ['jakefile'],
          aliases: ['JavaScript', 'javascript', 'js'],
        }),
        m.languages.register({
          id: 'basic-v'.concat(er.basic),
          extensions: ['.bas'],
          aliases: ['pg-basic', 'basic', 'pg basic'],
          mimetypes: ['text/x-basic'],
        }),
        m.languages.register({
          id: 'nix-v'.concat(er.nix),
          extensions: ['.nix'],
          aliases: ['nix'],
          mimetypes: ['text/x-nix'],
        }),
        m.languages.setLanguageConfiguration('nix-v'.concat(er.nix), {
          wordPattern: /(-?\d*\.\d\w*)|([-'\w]+)/g,
          comments: {
            lineComment: '#',
            blockComment: ['/*', '*/'],
          },
          brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
          ],
          onEnterRules: [],
          autoClosingPairs: [
            {
              open: '{',
              close: '}',
            },
            {
              open: '[',
              close: ']',
            },
            {
              open: '(',
              close: ')',
            },
            {
              open: '"',
              close: '"',
              notIn: ['string'],
            },
            {
              open: "''",
              close: "''",
              notIn: ['string', 'comment'],
            },
            {
              open: '/*',
              close: '*/',
              notIn: ['string'],
            },
          ],
          folding: {
            markers: {
              start: new RegExp('^\\s*#?region\\b'),
              end: new RegExp('^\\s*#?endregion\\b'),
            },
          },
        }),
        m.languages.setLanguageConfiguration(
          'replit-python-v'.concat(er['replit-python']),
          {
            comments: {
              lineComment: '#',
              blockComment: ["'''", "'''"],
            },
            brackets: [
              ['{', '}'],
              ['[', ']'],
              ['(', ')'],
            ],
            autoClosingPairs: [
              {
                open: '{',
                close: '}',
              },
              {
                open: '[',
                close: ']',
              },
              {
                open: '(',
                close: ')',
              },
              {
                open: '"',
                close: '"',
                notIn: ['string'],
              },
              {
                open: "'",
                close: "'",
                notIn: ['string', 'comment'],
              },
            ],
            surroundingPairs: [
              {
                open: '{',
                close: '}',
              },
              {
                open: '[',
                close: ']',
              },
              {
                open: '(',
                close: ')',
              },
              {
                open: '"',
                close: '"',
              },
              {
                open: "'",
                close: "'",
              },
            ],
            onEnterRules: [
              {
                beforeText: new RegExp(
                  '^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$'
                ),
                action: {
                  indentAction: m.languages.IndentAction.Indent,
                },
              },
            ],
            folding: {
              offSide: !0,
            },
          }
        ),
        m.languages.setLanguageConfiguration(
          'replit-js-v'.concat(er['replit-js']),
          {
            wordPattern:
              /(-?\d*\.\d\w*)|([^`~!@#%^&*()\-=+[{\]}\\|;:'",.<>/?\s]+)/g,
            comments: {
              lineComment: '//',
              blockComment: ['/*', '*/'],
            },
            brackets: [
              ['{', '}'],
              ['[', ']'],
              ['(', ')'],
            ],
            onEnterRules: [
              {
                beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
                afterText: /^\s*\*\/$/,
                action: {
                  indentAction: m.languages.IndentAction.IndentOutdent,
                  appendText: ' * ',
                },
              },
              {
                beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
                action: {
                  indentAction: m.languages.IndentAction.None,
                  appendText: ' * ',
                },
              },
              {
                beforeText: /^(\t| {2})* \*( ([^*]|\*(?!\/))*)?$/,
                action: {
                  indentAction: m.languages.IndentAction.None,
                  appendText: '* ',
                },
              },
              {
                beforeText: /^(\t| {2})* \*\/\s*$/,
                action: {
                  indentAction: m.languages.IndentAction.None,
                  removeText: 1,
                },
              },
            ],
            autoClosingPairs: [
              {
                open: '{',
                close: '}',
              },
              {
                open: '[',
                close: ']',
              },
              {
                open: '(',
                close: ')',
              },
              {
                open: '"',
                close: '"',
                notIn: ['string'],
              },
              {
                open: "'",
                close: "'",
                notIn: ['string', 'comment'],
              },
              {
                open: '`',
                close: '`',
                notIn: ['string', 'comment'],
              },
              {
                open: '/**',
                close: ' */',
                notIn: ['string'],
              },
            ],
            folding: {
              markers: {
                start: new RegExp('^\\s*//\\s*#?region\\b'),
                end: new RegExp('^\\s*//\\s*#?endregion\\b'),
              },
            },
          }
        );
      var fr = {
          scrollBeyondLastLine: !0,
          acceptSuggestionOnCommitCharacter: !1,
          autoIndent: !0,
          codeLens: !1,
          multiCursorModifier: 'ctrlCmd',
          minimap: {
            enabled: !1,
          },
          renderIndentGuides: !0,
          useTabStops: !0,
          renderLineHighlight: 'all',
          hideCursorInOverviewRuler: !0,
          wrappingIndent: 'same',
          fixedOverflowWidgets: !0,
          links: !1,
        },
        mr = (function (e) {
          Object(s.a)(n, e);
          var t = pr(n);

          function n() {
            var e;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              Object(c.a)(Object(a.a)(e), 'editor', null),
              Object(c.a)(Object(a.a)(e), 'syntaxHighlighter', void 0),
              Object(c.a)(Object(a.a)(e), 'containerRef', null),
              Object(c.a)(Object(a.a)(e), 'createAnnotation', function () {
                if (!e.editor) throw new Error('Expected editor');
                var t = e.editor.getSelection(),
                  n = e.editor.getModel(),
                  r = {
                    lineNumber: t.startLineNumber,
                    column: t.startColumn,
                  },
                  o = {
                    lineNumber: t.endLineNumber,
                    column: t.endColumn,
                  },
                  i = n.getOffsetAt(r),
                  a = n.getOffsetAt(o);
                e.props.createAnnotation({
                  indexStart: i,
                  indexEnd: a,
                });
              }),
              Object(c.a)(Object(a.a)(e), 'createEditor', function (t) {
                t &&
                  t !== e.containerRef &&
                  ((e.containerRef = t),
                  (h.a.prototype.openCodeEditor = function (t) {
                    return m.Promise.wrap(e.props.openEditor(t));
                  }),
                  (e.editor = m.editor.create(
                    t,
                    dr(
                      dr({}, fr),
                      {},
                      {
                        glyphMargin: e.props.hasDAP,
                      }
                    ),
                    {
                      textModelService: {
                        createModelReference: function (t) {
                          var n = e.props.getModelFromUri(t).then(function (e) {
                            var t = e.model,
                              n = e.shouldDispose;
                            return {
                              object: t ? new g.f(t) : null,
                              dispose: function () {
                                n() && !t.isDisposed() && t.dispose();
                              },
                            };
                          });
                          return m.Promise.wrap(n);
                        },
                        registerTextModelContentProvider: function () {
                          return {
                            dispose: function () {},
                          };
                        },
                      },
                    }
                  )),
                  e.props.registerEditor(e.editor),
                  (e.syntaxHighlighter = new O(e.editor)),
                  e.editor.onContextMenu(function () {
                    if (!e.editor) throw new Error('Expected editor to be set');
                    var t = e.editor.getModel().uri.path,
                      n = Object(lr.b)(t);
                    Object(ur.track)(ur.events.MONACO_CONTEXT_MENU_OPENED, {
                      ext: n,
                    });
                  }),
                  e.editor.addAction({
                    id: 'shell',
                    label: 'Open Shell',
                    keybindings: [
                      m.KeyMod.CtrlCmd | m.KeyMod.Shift | m.KeyCode.KEY_C,
                    ],
                    run: function () {
                      e.props.openShell(),
                        Object(ur.track)(
                          ur.events.MONACO_CONTEXT_MENU_ACTION_RAN,
                          {
                            action: 'shell',
                          }
                        );
                    },
                  }),
                  e.editor.addAction({
                    id: 'copy link',
                    label: 'Copy Link To Line',
                    contextMenuGroupId: '9_cutcopypaste',
                    contextMenuOrder: 3,
                    run: function () {
                      var t = e.getLinkToLine();
                      Object(ur.track)(
                        ur.events.MONACO_CONTEXT_MENU_ACTION_RAN,
                        {
                          action: 'copy-link',
                        }
                      ),
                        t && Object(j.a)(t);
                    },
                  }),
                  e.editor.addAction({
                    id: 'create-annotation-group',
                    label: 'Start Thread',
                    contextMenuGroupId: '2_annotation',
                    contextMenuOrder: 1,
                    run: function () {
                      e.createAnnotation(),
                        Object(ur.track)(
                          ur.events.MONACO_CONTEXT_MENU_ACTION_RAN,
                          {
                            action: 'create-annotation-group',
                          }
                        );
                    },
                  }),
                  e.editor.addCommand(
                    m.KeyMod.CtrlCmd | m.KeyCode.Enter,
                    e.props.onRun
                  ),
                  e.editor.addCommand(
                    m.KeyMod.CtrlCmd | m.KeyCode.KEY_S,
                    function () {}
                  ),
                  e.editor.addCommand(
                    m.KeyMod.CtrlCmd | m.KeyMod.Shift | m.KeyCode.KEY_P,
                    function () {
                      var t;
                      null === (t = e.editor) ||
                        void 0 === t ||
                        t.getAction('editor.action.quickCommand').run();
                    }
                  ),
                  e.editor.addCommand(
                    m.KeyMod.CtrlCmd | m.KeyMod.Shift | m.KeyCode.US_SLASH,
                    function () {
                      var t;
                      null === (t = e.editor) ||
                        void 0 === t ||
                        t.getAction('create-annotation-group').run();
                    }
                  ));
              }),
              e
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.syntaxHighlighter && this.syntaxHighlighter.dispose(),
                    this.editor &&
                      (this.editor.setModel(null),
                      this.editor.dispose(),
                      this.props.registerEditor(null));
                },
              },
              {
                key: 'getLinkToLine',
                value: function () {
                  if (this.editor) {
                    var e = this.editor
                        .getModel()
                        .uri.path.split('/')
                        .slice(4)
                        .join('/'),
                      t = this.editor.getPosition(),
                      n = t.lineNumber,
                      r = t.column,
                      o = window.location.href.replace(
                        window.location.hash,
                        '#'.concat(e, ':').concat(n, ':').concat(r)
                      );
                    try {
                      return window.encodeURI(o);
                    } catch (i) {}
                    return o;
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  return Object(r.c)('div', {
                    ref: this.createEditor,
                    className: 'jsx-1315963723 replit-monaco-editor-container',
                    children: [
                      this.editor &&
                        Object(r.b)(ir, {
                          editor: this.editor,
                        }),
                      Object(r.b)(p.a, {
                        id: '3012051556',
                        children: [
                          '.replit-monaco-editor-container.jsx-1315963723{position:absolute;left:0;top:0;width:100%;height:100%;max-height:100% !important;max-width:100% !important;margin:0;padding:0;overflow:hidden;background:var(--deprecated-color-background-1);border-bottom-right-radius:var(--deprecated-border-radius-1);border-bottom-left-radius:var(--deprecated-border-radius-1);box-shadow:0px 4px 16px 0px rgba(0,0,0,0.08);}',
                          '.context-view{border-radius:var(--deprecated-border-radius-1);}',
                          '.context-view .monaco-menu{background-color:var(--deprecated-color-background-1);box-shadow:var(--deprecated-shadow-1);border-radius:var(--deprecated-border-radius-1);font-family:var(--deprecated-font-family-sans-serif);}',
                          '.context-view .monaco-menu a{color:var(--deprecated-color-foreground-1);-webkit-text-decoration:none;text-decoration:none;}',
                          '.context-view .monaco-menu a:hover{background-color:var(--accent-primary-dimmer);}',
                        ],
                      }),
                      Object(r.b)(p.a, {
                        id: '2127566278',
                        children: [
                          '.sidenav-closed .replit-monaco-editor-container{border-bottom-left-radius:0;}',
                          '.cursor-replit{position:relative;background-color:#cceeff;border-left:2px solid #f0f;pointer-events:none;}',
                          '.selection-replit{position:relative;background-color:#f0f;opacity:0.2;pointer-events:none;}',
                          ".cursor-tag-replit::after{content:'Replit';position:relative;bottom:calc(100% - 4px);left:-2px;background-color:#f0f;color:white;z-index:10;padding:1px;border-radius:3px;pointer-events:none;-webkit-animation:fadeOut 2s ease-in forwards;animation:fadeOut 2s ease-in forwards;}",
                          '@-webkit-keyframes fadeOut{0%{opacity:1;}100%{opacity:0;}}',
                          '@keyframes fadeOut{0%{opacity:1;}100%{opacity:0;}}',
                          '.replit-monaco-editor-debugger{background:#cfedf8;}',
                          '.scroll-decoration{display:none !important;}',
                          '.monaco-editor{border-bottom-right-radius:var(--deprecated-border-radius-1);border-bottom-left-radius:var(--deprecated-border-radius-1);background-color:var(--deprecated-color-background-1);}',
                          '.monaco-editor .margin-view-overlays .line-numbers{cursor:default !important;}',
                        ],
                      }),
                      Object(r.b)(gr, {}),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(f.Component);

      function gr() {
        return Object(r.b)(p.a, {
          id: '2404695840',
          children: [
            '.monaco-editor.vs .attr-name,.monaco-editor.vs .attribute-name{color:#984e9c;}',
            '.monaco-editor.vs .attr-value{color:#ac9037;}',
            '.monaco-editor.vs .start-tag-name,.monaco-editor.vs .end-tag-name,.monaco-editor.vs .tag-name,.monaco-editor.vs .tag{color:#4d7fe2;}',
            '.monaco-editor.vs .tag-start,.monaco-editor.vs .tag-end,.monaco-editor.vs .tag-open,.monaco-editor.vs .tag-close,.monaco-editor.vs .end-tag-start,.monaco-editor.vs .end-tag-end{color:#1f217d;}',
            '.monaco-editor.vs .modifier,.monaco-editor.vs .arrow-operator,.monaco-editor.vs .storage.type.arrow-operator,.monaco-editor.vs .as-keyword,.monaco-editor.vs .await-keyword,.monaco-editor.vs .catch-keyword,.monaco-editor.vs .default-keyword,.monaco-editor.vs .else-keyword,.monaco-editor.vs .export-keyword,.monaco-editor.vs .from-keyword,.monaco-editor.vs .if-keyword,.monaco-editor.vs .import-keyword,.monaco-editor.vs .return-keyword,.monaco-editor.vs .private-keyword,.monaco-editor.vs .static-keyword,.monaco-editor.vs .try-keyword{color:#272a9d;}',
            '.monaco-editor.vs .regex,.monaco-editor.vs .regexp,.monaco-editor.vs .string.regexp{color:#227e80;}',
            '.monaco-editor.vs .jsx-exp-start,.monaco-editor.vs .jsx-exp-end{color:#ac9037;}',
            '.monaco-editor.vs .variable{color:#001188;}',
            '.monaco-editor.vs .constructor,.monaco-editor.vs .class-name,.monaco-editor.vs .function,.monaco-editor.vs .function-variable{color:#7b2cb3;}',
            '.monaco-editor.vs .parameter{font-style:italic;}',
            '.monaco-editor.vs .keyword,.monaco-editor.vs .keyword.operator{color:#0000ff;}',
            '.monaco-editor.vs .primitive,.monaco-editor.vs .primitive.storage,.monaco-editor.vs .builtin{color:#4864aa;}',
            '.monaco-editor.vs .string{color:#a31515;}',
            '.monaco-editor.vs .operator{color:#050301;}',
            '.monaco-editor.vs .comment{color:#aaaaaa;}',
            '.monaco-editor.vs .label{color:#ac9037;}',
            '.monaco-editor.vs .storage.type,.monaco-editor.vs .type{color:#008080;}',
            '.monaco-editor.vs .number,.monaco-editor.vs .numeric{color:#09885a;}',
            '.monaco-editor.vs .constant.language,.monaco-editor.vs .constant.other{color:#1a1aff;}',
            '.monaco-editor.vs .constant.escape{color:#ff69b4;}',
            '.monaco-editor.vs-dark .attr-name,.monaco-editor.vs-dark .attribute-name{color:#9cdcfe;}',
            '.monaco-editor.vs-dark .attr-value{color:#ce9178;}',
            '.monaco-editor.vs-dark .start-tag-name,.monaco-editor.vs-dark .end-tag-name,.monaco-editor.vs-dark .tag-name,.monaco-editor.vs-dark .tag{color:#569cd6;}',
            '.monaco-editor.vs-dark .tag-start,.monaco-editor.vs-dark .tag-end,.monaco-editor.vs-dark .tag-open,.monaco-editor.vs-dark .tag-close,.monaco-editor.vs-dark .end-tag-start,.monaco-editor.vs-dark .end-tag-end{color:#808080;}',
            '.monaco-editor.vs-dark .modifier,.monaco-editor.vs-dark .arrow-operator,.monaco-editor.vs-dark .storage.type.arrow-operator,.monaco-editor.vs-dark .as-keyword,.monaco-editor.vs-dark .await-keyword,.monaco-editor.vs-dark .catch-keyword,.monaco-editor.vs-dark .default-keyword,.monaco-editor.vs-dark .else-keyword,.monaco-editor.vs-dark .export-keyword,.monaco-editor.vs-dark .from-keyword,.monaco-editor.vs-dark .if-keyword,.monaco-editor.vs-dark .import-keyword,.monaco-editor.vs-dark .return-keyword,.monaco-editor.vs-dark .private-keyword,.monaco-editor.vs-dark .static-keyword,.monaco-editor.vs-dark .try-keyword{color:#c586c0;}',
            '.monaco-editor.vs-dark .regex,.monaco-editor.vs-dark .regexp,.monaco-editor.vs-dark .string.regexp{color:#d16969;}',
            '.monaco-editor.vs-dark .jsx-exp-start,.monaco-editor.vs-dark .jsx-exp-end{color:#ce9178;}',
            '.monaco-editor.vs-dark .variable{color:#74b0df;}',
            '.monaco-editor.vs-dark .constructor,.monaco-editor.vs-dark .class-name,.monaco-editor.vs-dark .function,.monaco-editor.vs-dark .function-variable{color:#dcdcaa;}',
            '.monaco-editor.vs-dark .parameter{font-style:italic;}',
            '.monaco-editor.vs-dark .keyword,.monaco-editor.vs-dark .keyword.operator{color:#569cd6;}',
            '.monaco-editor.vs-dark .primitive,.monaco-editor.vs-dark .primitive.storage,.monaco-editor.vs-dark .builtin{color:#4864aa;}',
            '.monaco-editor.vs-dark .string{color:#ce9178;}',
            '.monaco-editor.vs-dark .comment{color:#608b4e;}',
            '.monaco-editor.vs-dark .label{color:#ff0000;}',
            '.monaco-editor.vs-dark .storage.type,.monaco-editor.vs-dark .type{color:#3dc9b0;}',
            '.monaco-editor.vs-dark .operator{color:#d4d4d4;}',
            '.monaco-editor.vs-dark .number,.monaco-editor.vs-dark .numeric{color:#b5cea8;}',
            '.monaco-editor.vs-dark .constant.language,.monaco-editor.vs-dark .constant.other{color:#70b6f0;}',
            '.monaco-editor.vs-dark .constant.escape{color:#ff69b4;}',
          ],
        });
      }
    },
    WNtD: function (e) {
      e.exports = JSON.parse(
        '[{"languages":["typescript","replit-ts"],"name":"jsxSyntaxWorker","version":8},{"languages":["reason","processing"],"name":"prismSyntaxWorker","version":8},{"languages":["haskell","elixir","kotlin","forth","erlang","dart","perl","perl6","ocaml","nim","python","makefile","coffee","d","ejs","elm","fortran","golang","glsl","gitignore","html_ruby","lisp","lua","pascal","prolog","rust","scheme","toml","replit-python","replit-js","nix"],"name":"aceSyntaxWorker","version":8}]'
      );
    },
  },
]);
//# sourceMappingURL=176.b5fedf39324ab58959ca.js.map

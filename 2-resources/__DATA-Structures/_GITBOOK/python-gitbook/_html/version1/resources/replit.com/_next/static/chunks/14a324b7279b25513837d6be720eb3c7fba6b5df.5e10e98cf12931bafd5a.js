(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [23],
  {
    '1Ql/': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return u;
      }),
        r.d(t, 'b', function () {
          return p;
        }),
        r.d(t, 'c', function () {
          return d;
        });
      var n = r('xvhg'),
        o = r('Yk1I'),
        i = r.n(o),
        a = function (e) {
          return (
            e.length > 0 && 'number' === typeof e[e.length - 1] && e.pop(), e
          );
        },
        c = function (e) {
          if (!Array.isArray(e))
            throw Error('Op must be an array of components');
          for (var t = null, r = 0; r < e.length; r++) {
            var n = e[r];
            switch (typeof n) {
              case 'object':
                if (!('number' === typeof n.d && n.d > 0))
                  throw Error('Object components must be deletes of size > 0');
                break;
              case 'string':
                if (!(n.length > 0)) throw Error('Inserts cannot be empty');
                break;
              case 'number':
                if (!(n > 0)) throw Error('Skip components must be >0');
                if ('number' === typeof t)
                  throw Error('Adjacent skip components should be combined');
            }
            t = n;
          }
          if ('number' === typeof t) throw Error('Op has a trailing skip');
        },
        s = function (e) {
          return 'number' === typeof e
            ? e
            : 'string' === typeof e
            ? e.length
            : e.d;
        };

      function u(e, t) {
        c(e), c(t);
        for (var r, n = [], o = l(n), i = f(e)[0], u = 0; u < t.length; u++) {
          var p = t[u],
            d = void 0,
            h = void 0;
          switch (typeof p) {
            case 'number':
              for (d = p; d > 0; )
                (h = i(d, 'd')) && o(h), 'object' !== typeof h && (d -= s(h));
              break;
            case 'string':
              o(p);
              break;
            case 'object':
              for (d = p.d; d > 0; )
                switch (typeof (h = i(d, 'd'))) {
                  case 'number':
                    o({
                      d: h,
                    }),
                      (d -= h);
                    break;
                  case 'string':
                    d -= h.length;
                    break;
                  case 'object':
                    h && o(h);
                }
          }
        }
        for (; (r = i(-1)); ) o(r);
        return a(n);
      }

      function l(e) {
        return function (t) {
          t &&
            0 !== t.d &&
            (0 === e.length
              ? e.push(t)
              : typeof t === typeof e[e.length - 1]
              ? 'object' === typeof t
                ? (e[e.length - 1].d += t.d)
                : (e[e.length - 1] += t)
              : e.push(t));
        };
      }

      function f(e) {
        var t = 0,
          r = 0;
        return [
          function (n, o) {
            if (t === e.length) return -1 === n ? null : n;
            var i,
              a = e[t];
            return 'number' === typeof a
              ? -1 === n || a - r <= n
                ? ((i = a - r), ++t, (r = 0), i)
                : ((r += n), n)
              : 'string' === typeof a
              ? -1 === n || 'i' === o || a.length - r <= n
                ? ((i = a.slice(r)), ++t, (r = 0), i)
                : ((i = a.slice(r, r + n)), (r += n), i)
              : -1 === n || 'd' === o || a.d - r <= n
              ? ((i = {
                  d: a.d - r,
                }),
                ++t,
                (r = 0),
                i)
              : ((r += n),
                {
                  d: n,
                });
          },
          function () {
            return e[t];
          },
        ];
      }

      function p(e, t) {
        if (e === t) return [];
        var r = [],
          o = function (e) {
            e &&
              0 !== e.d &&
              (0 === r.length
                ? r.push(e)
                : typeof e === typeof r[r.length - 1]
                ? 'object' === typeof e
                  ? (r[r.length - 1].d += e.d)
                  : (r[r.length - 1] += e)
                : r.push(e));
          };
        return (
          i()(e, t).forEach(function (e) {
            var t = Object(n.a)(e, 2),
              r = t[0],
              a = t[1];
            switch (r) {
              case i.a.INSERT:
                o(a);
                break;
              case i.a.DELETE:
                o({
                  d: a.length,
                });
                break;
              case i.a.EQUAL:
                o(a.length);
            }
          }),
          r.length > 0 && 'number' === typeof r[r.length - 1] && r.pop(),
          r
        );
      }

      function d(e, t, r) {
        if ('left' !== r && 'right' !== r)
          throw Error('side (' + r + ") must be 'left' or 'right'");
        c(e), c(t);
        for (
          var o,
            i = [],
            u = l(i),
            p = f(e),
            d = Object(n.a)(p, 2),
            h = d[0],
            b = d[1],
            v = 0;
          v < t.length;
          v++
        ) {
          var m = t[v],
            g = void 0,
            y = void 0;
          switch (typeof m) {
            case 'number':
              for (g = m; g > 0; )
                u((y = h(g, 'i'))), 'string' !== typeof y && (g -= s(y));
              break;
            case 'string':
              'left' === r && 'string' === typeof b() && u(h(-1)), u(m.length);
              break;
            case 'object':
              for (g = m.d; g > 0; )
                switch (typeof (y = h(g, 'i'))) {
                  case 'number':
                    g -= y;
                    break;
                  case 'string':
                    u(y);
                    break;
                  case 'object':
                    g -= y.d;
                }
          }
        }
        for (; (o = h(-1)); ) u(o);
        return a(i);
      }
    },
    '4vVx': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return i;
      });
      var n = r('z7pX'),
        o = r('DsqJ');

      function i(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {
                  wait: 0,
                },
          r = null,
          i = null,
          a = null,
          c = null;
        if (t.wait < 0) throw new Error('wait must be 0 or more');
        if (t.maxWait) {
          if (t.maxWait < 0) throw new Error('maxWait must be 0 or more');
          if (t.maxWait < t.wait)
            throw new Error('maxWait must be higher than wait');
        }

        function s() {
          if (!t.maxWait) return t.wait;
          if (!a)
            throw new Error(
              'Expected scheduledAt to be a set when getting wait'
            );
          var e = Date.now() - a;
          return Math.min(t.maxWait - e, t.wait);
        }

        function u() {
          i && clearTimeout(i), (i = null), (c = null), (r = null), (a = null);
        }

        function l() {
          if (!r || !i)
            throw new Error(
              'Expected to call debounced function once before flushing'
            );
          var t = r,
            o = c;
          return (
            u(),
            e
              .apply(void 0, Object(n.a)(o))
              .then(function (e) {
                return t.resolve(e), e;
              })
              .catch(function (e) {
                throw (t.reject(e), e);
              })
          );
        }

        function f() {
          if (!i || !r)
            throw new Error(
              'Expected to call debounced function once before cancelling'
            );
          var e = r;
          u(), e.reject(new Error('Debounced function cancelled'));
        }
        return Object.assign(
          function () {
            if (r) {
              if (!i)
                throw new Error(
                  'Did not expect to have deferred and no timeout'
                );
              clearTimeout(i);
            } else (r = Object(o.a)()), (a = Date.now());
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              (c = t),
              (i = window.setTimeout(function () {
                l();
              }, s())),
              r.promise
            );
          },
          {
            isScheduled: function () {
              return Boolean(r && i);
            },
            cancel: f,
            flush: l,
          }
        );
      }
    },
    '8/ze': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return n;
      });
      var n = '.';
    },
    DsqJ: function (e, t, r) {
      'use strict';

      function n() {
        var e,
          t,
          r = {
            promise: new Promise(function (r, n) {
              (e = r), (t = n);
            }),
            resolve: function (t) {
              (r.isFulfilled = !0), e(t);
            },
            reject: function (e) {
              (r.isFulfilled = !0), t(e);
            },
            isFulfilled: !1,
          };
        return r;
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
    HtvZ: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var n = r('Z5Wq'),
        o = function (e) {
          if (!Array.isArray(e))
            throw Error('Op must be an array of components');
          for (var t = null, r = 0; r < e.length; r++) {
            var n = e[r];
            switch (typeof n) {
              case 'object':
                if (!('number' === typeof n.d && n.d > 0))
                  throw Error('Object components must be deletes of size > 0');
                break;
              case 'string':
                if (!(n.length > 0)) throw Error('Inserts cannot be empty');
                break;
              case 'number':
                if (!(n > 0)) throw Error('Skip components must be >0');
                if ('number' === typeof t)
                  throw Error('Adjacent skip components should be combined');
            }
            t = n;
          }
          if ('number' === typeof t) throw Error('Op has a trailing skip');
        },
        i = function (e) {
          for (var t = [], r = a(t), n = 0; n < e.length; n++) r(e[n]);
          return u(t);
        },
        a = function (e) {
          return function (t) {
            t &&
              0 !== t.d &&
              (0 === e.length
                ? e.push(t)
                : typeof t === typeof e[e.length - 1]
                ? 'object' === typeof t
                  ? (e[e.length - 1].d += t.d)
                  : (e[e.length - 1] += t)
                : e.push(t));
          };
        },
        c = function (e) {
          return 'number' === typeof e
            ? e
            : 'string' === typeof e
            ? n.strPosToUni(e)
            : e.d;
        },
        s = function (e) {
          var t = 0,
            r = 0;
          return {
            take: function (o, i) {
              if (t === e.length) return -1 === o ? null : o;
              var a,
                c = e[t];
              if ('number' === typeof c)
                return -1 === o || c - r <= o
                  ? ((a = c - r), ++t, (r = 0), a)
                  : ((r += o), o);
              if ('string' === typeof c) {
                if (-1 === o || 'i' === i || n.strPosToUni(c.slice(r)) <= o)
                  return (a = c.slice(r)), ++t, (r = 0), a;
                var s = r + n.uniToStrPos(c.slice(r), o);
                return (a = c.slice(r, s)), (r = s), a;
              }
              return -1 === o || 'd' === i || c.d - r <= o
                ? ((a = {
                    d: c.d - r,
                  }),
                  ++t,
                  (r = 0),
                  a)
                : ((r += o),
                  {
                    d: o,
                  });
            },
            peek: function () {
              return e[t];
            },
          };
        },
        u = function (e) {
          return (
            e.length > 0 && 'number' === typeof e[e.length - 1] && e.pop(), e
          );
        };

      function l(e, t, r) {
        if ('left' !== r && 'right' !== r)
          throw Error('side (' + r + ") must be 'left' or 'right'");
        o(e), o(t);
        for (
          var i, l = [], f = a(l), p = s(e), d = p.take, h = p.peek, b = 0;
          b < t.length;
          b++
        ) {
          var v = t[b],
            m = void 0,
            g = void 0;
          switch (typeof v) {
            case 'number':
              for (m = v; m > 0; )
                f((g = d(m, 'i'))), 'string' !== typeof g && (m -= c(g));
              break;
            case 'string':
              'left' === r && 'string' === typeof h() && f(d(-1)),
                f(n.strPosToUni(v));
              break;
            case 'object':
              for (m = v.d; m > 0; )
                switch (typeof (g = d(m, 'i'))) {
                  case 'number':
                    m -= g;
                    break;
                  case 'string':
                    f(g);
                    break;
                  case 'object':
                    m -= g.d;
                }
          }
        }
        for (; (i = d(-1)); ) f(i);
        return u(l);
      }

      function f(e, t) {
        o(e), o(t);
        for (var r, i = [], l = a(i), f = s(e).take, p = 0; p < t.length; p++) {
          var d = t[p],
            h = void 0,
            b = void 0;
          switch (typeof d) {
            case 'number':
              for (h = d; h > 0; )
                l((b = f(h, 'd'))), 'object' !== typeof b && (h -= c(b));
              break;
            case 'string':
              l(d);
              break;
            case 'object':
              for (h = d.d; h > 0; )
                switch (typeof (b = f(h, 'd'))) {
                  case 'number':
                    l({
                      d: b,
                    }),
                      (h -= b);
                    break;
                  case 'string':
                    h -= n.strPosToUni(b);
                    break;
                  case 'object':
                    l(b);
                }
          }
        }
        for (; (r = f(-1)); ) l(r);
        return u(i);
      }
      var p = function (e, t) {
          for (var r = 0, o = 0; o < t.length && e > r; o++) {
            var i = t[o];
            switch (typeof i) {
              case 'number':
                r += i;
                break;
              case 'string':
                var a = n.strPosToUni(i);
                (r += a), (e += a);
                break;
              case 'object':
                e -= Math.min(i.d, e - r);
            }
          }
          return e;
        },
        d = function (e, t) {
          return 'number' === typeof e
            ? p(e, t)
            : e.map(function (e) {
                return p(e, t);
              });
        };
      t.default = function (e) {
        return {
          name: 'text-unicode',
          uri: 'http://sharejs.org/types/text-unicode',
          trim: u,
          normalize: i,
          checkOp: o,
          create: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '';
            if ('string' !== typeof t)
              throw Error('Initial data must be a string');
            return e.create(t);
          },
          apply: function (t, r) {
            o(r);
            for (var n = e.builder(t), i = 0; i < r.length; i++) {
              var a = r[i];
              switch (typeof a) {
                case 'number':
                  n.skip(a);
                  break;
                case 'string':
                  n.append(a);
                  break;
                case 'object':
                  n.del(a.d);
              }
            }
            return n.build();
          },
          transform: l,
          compose: f,
          transformPosition: p,
          transformSelection: d,
        };
      };
    },
    'KG+V': function (e, t, r) {
      'use strict';
      r.d(t, 'c', function () {
        return g;
      }),
        r.d(t, 'a', function () {
          return y;
        }),
        r.d(t, 'b', function () {
          return O;
        });
      var n = r('BGKE'),
        o = r('xvhg'),
        i = r('MX0m'),
        a = r.n(i),
        c = r('q1tI'),
        s = r('YuJD'),
        u = r('up5I'),
        l = r('DgdK'),
        f = r('5zsw'),
        p = r('xom/'),
        d = r('4A0d'),
        h = r('HADy');

      function b(e, t) {
        var r;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return v(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return v(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[n++],
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

      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var m = function (e, t) {
        var r = e.runner,
          i = e.packager,
          u = e.languageHeader,
          l = e.onClear,
          f = (function (e) {
            var t = e.runner,
              r = e.packager,
              n = e.languageHeader,
              i = Object(d.a)({}),
              a = Object(o.a)(i, 2),
              s = a[0],
              u = a[1],
              l = c.useState(''),
              f = Object(o.a)(l, 2),
              p = f[0],
              v = f[1];
            return (
              c.useEffect(
                function () {
                  if (!s)
                    return t.onOutput(function (e) {
                      return v(function (t) {
                        return t + e;
                      });
                    });
                },
                [s, t, v]
              ),
              c.useEffect(
                function () {
                  if (!s && r)
                    return r.onOutput(function (e) {
                      return v(function (t) {
                        return t + e.replace(/\n/g, '\n\r');
                      });
                    });
                },
                [s, r, v]
              ),
              c.useEffect(
                function () {
                  if (s && r)
                    return r.onOutput(function (e) {
                      return s.write(e.replace(/\n/g, '\n\r'));
                    });
                },
                [s, r]
              ),
              c.useEffect(
                function () {
                  p && s && (s.write(p), v(''));
                },
                [s, p]
              ),
              c.useEffect(
                function () {
                  n &&
                    v(function (e) {
                      return e + ''.concat(n.replace(/\n/g, '\n\r'), '\n\r');
                    });
                },
                [n, v]
              ),
              c.useEffect(
                function () {
                  if (s) {
                    var e = function () {
                        t.getRunState() !== h.b.OFFLINE &&
                          t.resizeTerminal(s.getSize());
                      },
                      r = [];
                    r.push(s.onResize(e).dispose);
                    var n = [];
                    r.push(
                      s.onData(function (e) {
                        t.getRunState() !== h.b.OFFLINE
                          ? t.sendInput(e)
                          : n.push(e);
                      }).dispose
                    ),
                      r.push(
                        t.onOutput(function (e) {
                          s.write(e);
                        })
                      );
                    var o = !1;
                    return (
                      r.push(
                        t.onStateChanged(function (r) {
                          if (r !== h.b.OFFLINE) {
                            if ((o || (e(), (o = !0)), n.length)) {
                              var i,
                                a = b(n);
                              try {
                                for (a.s(); !(i = a.n()).done; ) {
                                  var c = i.value;
                                  t.sendInput(c);
                                }
                              } catch (s) {
                                a.e(s);
                              } finally {
                                a.f();
                              }
                              n = [];
                            }
                          } else o = !1;
                        })
                      ),
                      t.getRunState() !== h.b.OFFLINE && (e(), (o = !0)),
                      function () {
                        r.forEach(function (e) {
                          return e();
                        });
                      }
                    );
                  }
                },
                [s, t]
              ),
              [s, u]
            );
          })({
            runner: r,
            packager: i,
            languageHeader: u,
          }),
          v = Object(o.a)(f, 2),
          m = v[0],
          w = v[1],
          k = c.useState(!1),
          x = Object(o.a)(k, 2),
          j = x[0],
          C = x[1];
        return (
          c.useImperativeHandle(t, function () {
            return {
              clear: function () {
                m && m.clear();
              },
            };
          }),
          Object(n.c)('div', {
            onKeyDown: function (e) {
              'f' === e.key &&
                Object(s.b)(e) &&
                !e.shiftKey &&
                (C(!0), e.preventDefault());
            },
            className: 'jsx-896821727 replit-ui-theme-root dark terminal',
            children: [
              Object(n.b)('div', {
                className: 'jsx-896821727 controls',
                children: Object(n.c)(p.a, {
                  align: 'center',
                  wrap: 'nowrap',
                  children: [
                    j && m
                      ? Object(n.b)(g, {
                          findPrevious: m.findPrevious,
                          findNext: m.findNext,
                          exit: function () {
                            return C(!1);
                          },
                        })
                      : Object(n.b)(O, {
                          onClick: function () {
                            return C(!0);
                          },
                        }),
                    Object(n.b)(y, {
                      onClick: function () {
                        m &&
                          (m.clear(),
                          l && l(),
                          u &&
                            m.write(
                              ''.concat(u.replace(/\n/g, '\n\r'), '\n\r')
                            ),
                          m.focus());
                      },
                    }),
                  ],
                }),
              }),
              Object(n.b)('div', {
                ref: w,
                className: 'jsx-896821727 xterm-container',
              }),
              Object(n.b)(a.a, {
                id: '896821727',
                children: [
                  '.terminal.jsx-896821727{height:100%;width:100%;position:relative;background-color:var(--deprecated-color-background-3);border-radius:var(--deprecated-border-radius-1);}',
                  '.controls.jsx-896821727{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;top:var(--deprecated-spacing-1);right:var(--deprecated-spacing-1);z-index:100;min-height:30px;}',
                  '.xterm-container.jsx-896821727{height:100%;overflow:auto;}',
                  '.xterm-container.jsx-896821727 .xterm{height:100%;padding:var(--deprecated-spacing-2) var(--deprecated-spacing-2) var(--deprecated-spacing-half);}',
                  '.xterm-container.jsx-896821727 .xterm-viewport{overflow-y:auto !important;border-radius:var(--deprecated-border-radius-1);}',
                ],
              }),
            ],
          })
        );
      };

      function g(e) {
        var t = e.findNext,
          r = e.findPrevious,
          i = e.exit,
          s = c.useRef(null),
          l = c.useState(''),
          f = Object(o.a)(l, 2),
          p = f[0],
          d = f[1];
        c.useEffect(function () {
          s.current && s.current.focus();
        }, []);
        return Object(n.c)('div', {
          className: 'jsx-3861535187 search',
          children: [
            Object(n.b)('input', {
              ref: s,
              placeholder: 'Find',
              value: p,
              onChange: function (e) {
                return d(e.target.value);
              },
              onKeyDown: function (e) {
                return (function (e) {
                  'Escape' !== e.key
                    ? 'Enter' === e.key && (e.shiftKey ? r(p) : t(p))
                    : i();
                })(e);
              },
              className: 'jsx-3861535187',
            }),
            Object(n.b)(u.a, {
              size: 'small',
              onClick: function () {
                return t(p);
              },
              children: 'Next',
            }),
            Object(n.b)(u.a, {
              size: 'small',
              onClick: function () {
                return r(p);
              },
              children: 'Previous',
            }),
            Object(n.b)(u.a, {
              size: 'small',
              onClick: i,
              children: 'Exit',
            }),
            Object(n.b)(a.a, {
              id: '3861535187',
              children: [
                '.search.jsx-3861535187{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;}',
                'input.jsx-3861535187{padding:4px var(--deprecated-spacing-1) var(--deprecated-spacing-half);background-color:var(--deprecated-color-background-1);color:var(--white);height:24px;width:85px;border:none;border-radius:var(--deprecated-border-radius-1);box-shadow:none;}',
                'input.jsx-3861535187::-webkit-input-placeholder{color:var(--white);}',
                'input.jsx-3861535187::-moz-placeholder{color:var(--white);}',
                'input.jsx-3861535187:-ms-input-placeholder{color:var(--white);}',
                'input.jsx-3861535187::placeholder{color:var(--white);}',
                'input.jsx-3861535187:focus{outline:none;border:var(--deprecated-color-primary-1);}',
                'input.jsx-3861535187,.search button{margin:0 var(--deprecated-spacing-half);}',
              ],
            }),
          ],
        });
      }
      t.d = c.forwardRef(m);
      var y = function (e) {
          var t = e.onClick;
          return Object(n.c)('button', {
            'aria-label': 'Clear',
            'data-microtip-position': 'bottom-left',
            role: 'tooltip',
            onClick: t,
            className: 'jsx-1956552839',
            children: [
              Object(n.b)(f.a, {
                size: 'medium',
              }),
              Object(n.b)(a.a, {
                id: '1956552839',
                children: [
                  'button.jsx-1956552839{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:var(--deprecated-border-radius-1);padding:var(--deprecated-spacing-half);background-color:var(--deprecated-color-background-3);color:var(--deprecated-color-foreground-1);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;border:none;cursor:pointer;}',
                  'button.jsx-1956552839:hover{background-color:var(--deprecated-color-control-2);}',
                  'button.jsx-1956552839:focus{outline:none;}',
                ],
              }),
            ],
          });
        },
        O = function (e) {
          var t = e.onClick;
          return Object(n.c)('button', {
            'aria-label': 'Search',
            'data-microtip-position': 'bottom',
            role: 'tooltip',
            onClick: t,
            className: 'jsx-1956552839',
            children: [
              Object(n.b)(l.a, {
                size: 'medium',
              }),
              Object(n.b)(a.a, {
                id: '1956552839',
                children: [
                  'button.jsx-1956552839{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:var(--deprecated-border-radius-1);padding:var(--deprecated-spacing-half);background-color:var(--deprecated-color-background-3);color:var(--deprecated-color-foreground-1);-webkit-transition:background-color 0.2s;transition:background-color 0.2s;border:none;cursor:pointer;}',
                  'button.jsx-1956552839:hover{background-color:var(--deprecated-color-control-2);}',
                  'button.jsx-1956552839:focus{outline:none;}',
                ],
              }),
            ],
          });
        };
    },
    NuhN: function (e, t, r) {
      'use strict';
      r.d(t, 'c', function () {
        return o;
      }),
        r.d(t, 'b', function () {
          return i;
        }),
        r.d(t, 'a', function () {
          return a;
        }),
        r.d(t, 'e', function () {
          return c;
        }),
        r.d(t, 'd', function () {
          return s;
        });

      function n(e) {
        return '' === e || e.endsWith('/') ? e : e + '/';
      }

      function o(e, t) {
        return Object.keys(e).filter(function (e) {
          return i(t, e);
        });
      }

      function i(e, t) {
        return t !== e && t.startsWith(n(e));
      }

      function a(e, t) {
        if (!i(e, t)) return !1;
        var r = n(e),
          o = t.slice(r.length);
        return o.endsWith('/') && (o = o.slice(-1)), !o.includes('/');
      }

      function c(e, t, r) {
        var n = o(e, t).map(function (e) {
          return [e, s(t, r, e)];
        });
        return 'undefined' !== typeof e[t] && n.unshift([t, r]), n;
      }

      function s(e, t, r) {
        var o = n(e);
        return n(t) + r.slice(o.length);
      }
    },
    VOEV: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return se;
      });
      var n = r('cpVT'),
        o = r('vJKn'),
        i = r.n(o),
        a = r('rg98'),
        c = r('z7pX'),
        s = r('gfZM'),
        u = r('8v8i'),
        l = r('dI/k'),
        f = r('NuhN'),
        p = r('8/ze'),
        d = r('5+mB'),
        h = r('H+61'),
        b = r('UlJF'),
        v = r('+Css'),
        m = r('7LId'),
        g = r('VIvw'),
        y = r('iHvq'),
        O = r('+qE3'),
        w = r('cC09'),
        k = r('cHV+'),
        x = r('9/5/'),
        j = r.n(x),
        C = r('Z5Wq'),
        E = r('zgDP'),
        S = r('1Ql/'),
        T = r('xvhg');

      function D(e, t) {
        var r;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return F(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return F(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[n++],
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

      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var I = {
        replsList: function () {
          return 'services-dataLossRepls';
        },
        replFiles: function (e) {
          return 'services-dataLossReplFiles'.concat(e);
        },
        latestOp: function (e, t) {
          return 'services-dataLossLatestOp--'.concat(e, '--').concat(t);
        },
        latestFlushedOp: function (e, t) {
          return 'services-datalossLatestFlushed--'.concat(e, '--').concat(t);
        },
        latestOwnOp: function (e, t) {
          return 'services-dataLosslatestOwnOp--'.concat(e, '--').concat(t);
        },
      };

      function R(e, t) {
        for (
          var r = {
              latestOp: null,
              latestFlushedOp: null,
              latestOwnOp: null,
            },
            n = 0,
            o = Object.keys(r);
          n < o.length;
          n++
        ) {
          var i = o[n],
            a = localStorage.getItem(I[i](e, t));
          if (a) {
            var c = void 0;
            try {
              c = JSON.parse(a);
            } catch (s) {
              continue;
            }
            c &&
              'object' === typeof c &&
              'number' === typeof c.crc32 &&
              'number' === typeof c.version &&
              (r[i] = c);
          }
        }
        return r;
      }

      function P() {
        var e = localStorage.getItem(I.replsList()),
          t = [];
        if (e) {
          try {
            t = JSON.parse(e);
          } catch (r) {
            localStorage.setItem(I.replsList(), '[]');
          }
          Array.isArray(t) ||
            ((t = []), localStorage.setItem(I.replsList(), '[]'));
        }
        return t;
      }

      function _(e) {
        var t = localStorage.getItem(I.replFiles(e)),
          r = [];
        if (t) {
          try {
            r = JSON.parse(t);
          } catch (n) {
            localStorage.setItem(I.replFiles(e), '[]');
          }
          Array.isArray(r) ||
            ((r = []), localStorage.setItem(I.replFiles(e), '[]'));
        }
        return r;
      }

      function A(e) {
        var t,
          r = D(_(e));
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var n = t.value;
            'string' === typeof n && N(e, n);
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
        localStorage.removeItem(I.replFiles(e));
        var o = P().filter(function (t) {
          return t !== e;
        });
        localStorage.setItem(I.replsList(), JSON.stringify(o));
      }

      function N(e, t) {
        localStorage.removeItem(I.latestOp(e, t)),
          localStorage.removeItem(I.latestFlushedOp(e, t)),
          localStorage.removeItem(I.latestOwnOp(e, t));
        var r = _(e).filter(function (e) {
          return e !== t;
        });
        localStorage.setItem(I.replFiles(e), JSON.stringify(r));
      }

      function L(e, t) {
        !(function (e) {
          var t = P();
          t.includes(e) ||
            (t.length > 30 ? (A(t[0]), (t[0] = e)) : t.push(e),
            localStorage.setItem(I.replsList(), JSON.stringify(t)));
        })(e);
        var r = _(e);
        r.includes(t) ||
          (r.length > 30 ? (A(r[0]), (r[0] = t)) : r.push(t),
          localStorage.setItem(I.replFiles(e), JSON.stringify(r)));
      }

      function M(e) {
        var t = e.filePath,
          r = e.replId,
          n = e.opType,
          o = e.op;
        localStorage.setItem(I[n](r, t), JSON.stringify(o));
      }
      var U = {};

      function B(e) {
        return V.apply(this, arguments);
      }

      function V() {
        return (V = Object(a.a)(
          i.a.mark(function e(t) {
            var r, n, o, c, s, u, l;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.filePath),
                      (n = t.replId),
                      (o = t.serverVersion),
                      (c = t.serverContent),
                      (s = t.fetchOps),
                      !U[r + n])
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return');
                  case 3:
                    (U[r + n] = !0),
                      (u = R(n, r)),
                      (l = w.str(c) >>> 0),
                      Object.keys(u).forEach(
                        (function () {
                          var e = Object(a.a)(
                            i.a.mark(function e(t) {
                              var r, a, c, f;
                              return i.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if ((r = u[t])) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt('return');
                                      case 3:
                                        if (!(o < r.version)) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          Object(E.track)(
                                            E.events.OT_FILE_DATA_LOST,
                                            {
                                              opType: t,
                                              case: 'server_forgot',
                                              replId: n,
                                              isServices: !0,
                                            }
                                          ),
                                          e.abrupt('return')
                                        );
                                      case 6:
                                        if (o !== r.version) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          l !== r.crc32 &&
                                            Object(E.track)(
                                              E.events.OT_FILE_DATA_LOST,
                                              {
                                                opType: t,
                                                case: 'crc32_mistmach',
                                                replId: n,
                                                isServices: !0,
                                              }
                                            ),
                                          e.abrupt('return')
                                        );
                                      case 9:
                                        return (
                                          (e.prev = 9),
                                          (e.next = 12),
                                          s(r.version, r.version)
                                        );
                                      case 12:
                                        (c = e.sent),
                                          (f = Object(T.a)(c, 1)),
                                          (a = f[0]),
                                          (e.next = 21);
                                        break;
                                      case 17:
                                        return (
                                          (e.prev = 17),
                                          (e.t0 = e.catch(9)),
                                          Object(E.track)(
                                            E.events.OT_FILE_DATA_LOST,
                                            {
                                              opType: t,
                                              case: 'error_fetching_op',
                                              e: e.t0.message,
                                              replId: n,
                                              isServices: !0,
                                            }
                                          ),
                                          e.abrupt('return')
                                        );
                                      case 21:
                                        if (a) {
                                          e.next = 24;
                                          break;
                                        }
                                        return (
                                          Object(E.track)(
                                            E.events.OT_FILE_DATA_LOST,
                                            {
                                              opType: t,
                                              case: 'op_not_found',
                                              replId: n,
                                              isServices: !0,
                                            }
                                          ),
                                          e.abrupt('return')
                                        );
                                      case 24:
                                        a.crc32 !== r.crc32 &&
                                          Object(E.track)(
                                            E.events.OT_FILE_DATA_LOST,
                                            {
                                              opType: t,
                                              case: 'crc32_mismatch',
                                              replId: n,
                                              isServices: !0,
                                            }
                                          );
                                      case 25:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[9, 17]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }

      function q(e, t) {
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

      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function J(e, t) {
        var r;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return W(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return W(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[n++],
                    };
              },
              e: (function (e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(function (e) {
                throw e;
              }),
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
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
          e: (function (e) {
            function t(t) {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function (e) {
            (c = !0), (i = e);
          }),
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }

      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }

      function H(e) {
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
          var r,
            n = Object(y.a)(e);
          if (t) {
            var o = Object(y.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(g.a)(this, r);
        };
      }

      function G(e) {
        return e.map(function (e) {
          if ('delete' in e && e.delete)
            return {
              d: e.delete,
            };
          if ('skip' in e && e.skip) return e.skip;
          if ('insert' in e && 'string' === typeof e.insert) return e.insert;
          throw new Error('Unexpected op type');
        });
      }
      var Z = (function (e) {
          Object(m.a)(r, e);
          var t = H(r);

          function r(e, o) {
            var c;
            return (
              Object(h.a)(this, r),
              (c = t.call(this)),
              Object(n.a)(Object(v.a)(c), 'linkedFile', void 0),
              Object(n.a)(Object(v.a)(c), 'channel', void 0),
              Object(n.a)(Object(v.a)(c), 'destroy', void 0),
              Object(n.a)(Object(v.a)(c), 'pending', void 0),
              Object(n.a)(Object(v.a)(c), 'inflight', void 0),
              Object(n.a)(Object(v.a)(c), 'inflightOpsPromise', void 0),
              Object(n.a)(Object(v.a)(c), 'version', void 0),
              Object(n.a)(Object(v.a)(c), 'serverContent', void 0),
              Object(n.a)(Object(v.a)(c), 'localContent', void 0),
              Object(n.a)(Object(v.a)(c), 'pendingCursors', void 0),
              Object(n.a)(Object(v.a)(c), 'flushedCursorIds', void 0),
              Object(n.a)(Object(v.a)(c), 'user', void 0),
              Object(n.a)(Object(v.a)(c), 'debounceSend', void 0),
              Object(n.a)(Object(v.a)(c), 'debounceCommit', void 0),
              Object(n.a)(Object(v.a)(c), 'commitPromise', void 0),
              Object(n.a)(Object(v.a)(c), 'isReconnecting', void 0),
              Object(n.a)(Object(v.a)(c), 'shouldTrackReconnects', void 0),
              Object(n.a)(Object(v.a)(c), 'shouldTrackDataLoss', void 0),
              Object(n.a)(Object(v.a)(c), 'replId', void 0),
              Object(n.a)(Object(v.a)(c), 'uncommittedOps', void 0),
              Object(n.a)(
                Object(v.a)(c),
                'hasUncommittedMultiplayerOps',
                void 0
              ),
              Object(n.a)(Object(v.a)(c), 'committedVersion', void 0),
              Object(n.a)(Object(v.a)(c), 'committedContent', void 0),
              Object(n.a)(Object(v.a)(c), 'bufferedReconnectingOps', void 0),
              Object(n.a)(Object(v.a)(c), 'didEditOffline', void 0),
              Object(n.a)(Object(v.a)(c), 'reconnectTrackedData', void 0),
              Object(n.a)(Object(v.a)(c), 'timeDisconnected', void 0),
              Object(n.a)(Object(v.a)(c), 'writeOps', function (e) {
                if (!c.channel && !c.isReconnecting)
                  throw new Error(
                    'Trying to send changes before ever coming online'
                  );
                c.isReconnecting && (c.didEditOffline = !0);
                var t,
                  r = c.localContent,
                  n = [],
                  o = 0,
                  i = J(e);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var a = t.value,
                      s = null;
                    switch (typeof a) {
                      case 'number':
                        o += a;
                        break;
                      case 'string':
                        var u = Object(C.strPosToUni)(r, o);
                        (s = u > 0 ? [u, a] : [a]), (o += a.length);
                        break;
                      case 'object':
                        var l = Object(C.strPosToUni)(r, o),
                          f = Object(C.strPosToUni)(r, o + a.d) - l;
                        s =
                          l > 0
                            ? [
                                l,
                                {
                                  d: f,
                                },
                              ]
                            : [
                                {
                                  d: f,
                                },
                              ];
                        break;
                      default:
                        return void c.emit(
                          'error',
                          new Error('OT Error: unknown op type')
                        );
                    }
                    s && ((r = k.type.apply(r, s)), (n = k.type.compose(n, s)));
                  }
                } catch (p) {
                  i.e(p);
                } finally {
                  i.f();
                }
                (c.pending = k.type.compose(c.pending, n)),
                  (c.localContent = r),
                  0 !== c.pending.length
                    ? c.emit('fileDirty')
                    : c.commitPromise && c.emit('commitStart'),
                  c.debounceSend();
              }),
              Object(n.a)(Object(v.a)(c), 'updateCursors', function (e) {
                (c.pendingCursors = e), c.debounceSend();
              }),
              Object(n.a)(Object(v.a)(c), 'isClean', function () {
                return (
                  c.committedVersion === c.version &&
                  0 === c.inflight.length &&
                  0 === c.pending.length
                );
              }),
              Object(n.a)(Object(v.a)(c), 'sendOps', function () {
                if (
                  c.channel &&
                  'open' === c.channel.status &&
                  !c.isReconnecting &&
                  !(c.inflight.length > 0)
                ) {
                  if (0 !== c.pending.length) {
                    var e = c.pending.map(function (e) {
                      return 'object' === typeof e
                        ? {
                            delete: e.d,
                          }
                        : 'number' === typeof e
                        ? {
                            skip: e,
                          }
                        : {
                            insert: e,
                          };
                    });
                    (c.inflight = c.pending),
                      (c.pending = []),
                      (c.inflightOpsPromise = c.channel.request({
                        ot: {
                          spookyVersion: c.version,
                          ops: e,
                        },
                      })),
                      c.inflightOpsPromise.then(function (t) {
                        t.error &&
                          c.emit(
                            'error',
                            new Error('OT Error: error accepting packet'),
                            {
                              originalError: t.error,
                              ops: e,
                            }
                          );
                      });
                  }
                  if (0 !== c.pendingCursors.length) {
                    var t,
                      r = J(c.flushedCursorIds);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        var n = t.value;
                        c.channel.send({
                          otDeleteCursor: {
                            id: n,
                          },
                        });
                      }
                    } catch (u) {
                      r.e(u);
                    } finally {
                      r.f();
                    }
                    c.flushedCursorIds = [];
                    var o,
                      i = J(c.pendingCursors);
                    try {
                      for (i.s(); !(o = i.n()).done; ) {
                        var a = o.value,
                          s = Number(
                            Math.random().toString().split('.')[1]
                          ).toString(36);
                        c.flushedCursorIds.push(s),
                          c.channel.send({
                            otNewCursor: z(
                              {
                                id: s,
                                user: c.user,
                              },
                              a
                            ),
                          });
                      }
                    } catch (u) {
                      i.e(u);
                    } finally {
                      i.f();
                    }
                    c.pendingCursors = [];
                  }
                }
              }),
              Object(n.a)(Object(v.a)(c), 'handlePacket', function (e, t) {
                var r = e.ops,
                  n = e.version,
                  o = e.crc32,
                  i = t.overrideReconnectringBuffer;
                if (!c.isReconnecting || i)
                  if (-1 !== c.version)
                    if ((c.version++, n === c.version)) {
                      var a = '';
                      try {
                        a = k.type.apply(c.serverContent, r);
                      } catch (y) {
                        return void c.emit(
                          'error',
                          new Error(
                            'OT Error: unable to apply updated content'
                          ),
                          {
                            originalError: y,
                            incomingOps: r,
                          }
                        );
                      }
                      var s = w.str(a) >>> 0;
                      if (s === o) {
                        if (
                          (c.uncommittedOps.push({
                            version: n,
                            crc32: o,
                            ops: r,
                          }),
                          c.shouldTrackDataLoss &&
                            M({
                              replId: c.replId,
                              filePath: c.linkedFile,
                              opType: 'latestOp',
                              op: {
                                version: n,
                                crc32: o,
                              },
                            }),
                          JSON.stringify(r) === JSON.stringify(c.inflight))
                        )
                          return (
                            c.shouldTrackDataLoss &&
                              M({
                                replId: c.replId,
                                filePath: c.linkedFile,
                                opType: 'latestOwnOp',
                                op: {
                                  version: n,
                                  crc32: o,
                                },
                              }),
                            c.debounceCommit(),
                            (c.inflight = []),
                            (c.inflightOpsPromise = null),
                            (c.serverContent = a),
                            c.debounceSend(),
                            void c.debounceSend.flush()
                          );
                        if (
                          (c.commitPromise || c.emit('fileDirty'),
                          c.debounceCommit(),
                          (c.hasUncommittedMultiplayerOps = !0),
                          c.inflight.length)
                        ) {
                          var u = k.type.transform(c.inflight, r, 'right');
                          (r = k.type.transform(r, c.inflight, 'left')),
                            (c.inflight = u);
                        }
                        if (c.pending.length) {
                          var l = k.type.transform(c.pending, r, 'right');
                          (r = k.type.transform(r, c.pending, 'left')),
                            (c.pending = l);
                        }
                        c.localContent = k.type.apply(c.localContent, r);
                        var f,
                          p = [],
                          d = 0,
                          h = J(r);
                        try {
                          for (h.s(); !(f = h.n()).done; ) {
                            var b = f.value;
                            switch (typeof b) {
                              case 'number':
                                d += b;
                                break;
                              case 'string':
                                var v = Object(C.uniToStrPos)(
                                  c.localContent,
                                  d
                                );
                                (p = v > 0 ? S.a(p, [v, b]) : S.a(p, [b])),
                                  (d += Object(C.strPosToUni)(b));
                                break;
                              case 'object':
                                var m = Object(C.uniToStrPos)(
                                    c.localContent,
                                    d
                                  ),
                                  g =
                                    Object(C.uniToStrPos)(
                                      c.localContent,
                                      d + b.d
                                    ) - m;
                                p =
                                  m > 0
                                    ? S.a(p, [
                                        m,
                                        {
                                          d: g,
                                        },
                                      ])
                                    : S.a(p, [
                                        {
                                          d: g,
                                        },
                                      ]);
                                break;
                              default:
                                return void c.emit(
                                  'error',
                                  new Error('OT Error: unknown op type')
                                );
                            }
                          }
                        } catch (O) {
                          h.e(O);
                        } finally {
                          h.f();
                        }
                        (c.serverContent = a), c.emit('op', p);
                      } else
                        c.emit('error', new Error('OT Error: crc32 mismatch'), {
                          server: o,
                          client: s,
                          incomingOps: r,
                        });
                    } else
                      c.emit(
                        'error',
                        new Error('OT Error: invalid server version'),
                        {
                          expectedVersion: c.version,
                          receievedVersion: n,
                          incomingOps: r,
                        }
                      );
                  else
                    c.emit(
                      'error',
                      new Error(
                        'Got packet while version is still -1, expected version to be set in handleStatus'
                      )
                    );
                else
                  c.bufferedReconnectingOps.push({
                    crc32: o,
                    ops: r,
                    version: n,
                  });
              }),
              Object(n.a)(Object(v.a)(c), 'handleNewCursor', function (e) {
                c.emit('cursor', e);
              }),
              Object(n.a)(Object(v.a)(c), 'handleDeleteCursor', function (e) {
                var t = e.id;
                c.emit('removeCursor', t);
              }),
              Object(n.a)(
                Object(v.a)(c),
                'handleStatus',
                (function () {
                  var e = Object(a.a)(
                    i.a.mark(function e(t) {
                      var r, n, o, a, u, l;
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (c.channel && 'open' === c.channel.status) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt('return');
                            case 2:
                              if (!t.linkedFile) {
                                e.next = 25;
                                break;
                              }
                              if (null != t.contents) {
                                e.next = 6;
                                break;
                              }
                              return (
                                c.emit(
                                  'error',
                                  new Error(
                                    'expected status contents,  got null or undefined'
                                  )
                                ),
                                e.abrupt('return')
                              );
                            case 6:
                              if (null != t.cursors) {
                                e.next = 9;
                                break;
                              }
                              return (
                                c.emit(
                                  'error',
                                  new Error(
                                    'expected status cursors, got null or undefined'
                                  )
                                ),
                                e.abrupt('return')
                              );
                            case 9:
                              if (null != t.version) {
                                e.next = 12;
                                break;
                              }
                              return (
                                c.emit(
                                  'error',
                                  new Error(
                                    'expected status version, got null or undefined'
                                  )
                                ),
                                e.abrupt('return')
                              );
                            case 12:
                              if (!c.isReconnecting) {
                                e.next = 15;
                                break;
                              }
                              return (
                                c.handleReconnect(t.contents, t.version),
                                e.abrupt('return')
                              );
                            case 15:
                              return (
                                c.shouldTrackDataLoss &&
                                  B({
                                    serverContent: t.contents,
                                    serverVersion: t.version,
                                    replId: c.replId,
                                    filePath: c.linkedFile,
                                    fetchOps: c.fetchOps,
                                  }),
                                (c.serverContent = t.contents),
                                (c.localContent = c.serverContent),
                                (c.version = t.version),
                                c.emit('firstConnect'),
                                c.emit('op', [c.serverContent]),
                                t.cursors.forEach(c.handleNewCursor),
                                c.emit('fileDirty'),
                                c.debounceCommit(),
                                e.abrupt('return')
                              );
                            case 25:
                              return (
                                (e.next = 27),
                                c.channel.request({
                                  otLinkFile: {
                                    file: {
                                      path: c.linkedFile,
                                    },
                                    highConsistency: Boolean(
                                      window['flag-ot-high-consitency']
                                    ),
                                  },
                                })
                              );
                            case 27:
                              if (!(o = e.sent).channelClosed) {
                                e.next = 30;
                                break;
                              }
                              return e.abrupt('return');
                            case 30:
                              if (!o.error) {
                                e.next = 33;
                                break;
                              }
                              return (
                                c.emit(
                                  'error',
                                  new Error('link file error ' + o.error)
                                ),
                                e.abrupt('return')
                              );
                            case 33:
                              if (o.otLinkFileResponse) {
                                e.next = 36;
                                break;
                              }
                              return (
                                c.emit(
                                  'error',
                                  new Error(
                                    'link file error ' +
                                      JSON.stringify(o.toJSON())
                                  )
                                ),
                                e.abrupt('return')
                              );
                            case 36:
                              if (
                                ((a = o.otLinkFileResponse.version),
                                (u = s.a
                                  .from(
                                    null !==
                                      (r =
                                        null ===
                                          (n =
                                            o.otLinkFileResponse.linkedFile) ||
                                        void 0 === n
                                          ? void 0
                                          : n.content) && void 0 !== r
                                      ? r
                                      : ''
                                  )
                                  .toString()),
                                (l = [u]),
                                !c.isReconnecting)
                              ) {
                                e.next = 42;
                                break;
                              }
                              return (
                                c.handleReconnect(u, a), e.abrupt('return')
                              );
                            case 42:
                              c.shouldTrackDataLoss &&
                                B({
                                  serverContent: u,
                                  serverVersion: a,
                                  replId: c.replId,
                                  filePath: c.linkedFile,
                                  fetchOps: c.fetchOps,
                                }),
                                (c.serverContent = u),
                                (c.localContent = c.serverContent),
                                (c.version = a),
                                (c.committedVersion = a),
                                (c.committedContent = c.serverContent),
                                c.emit('firstConnect'),
                                c.emit('op', l);
                            case 50:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              Object(n.a)(
                Object(v.a)(c),
                'handleReconnect',
                (function () {
                  var e = Object(a.a)(
                    i.a.mark(function e(t, r) {
                      var n,
                        o,
                        a,
                        s,
                        u,
                        l,
                        f,
                        p,
                        d,
                        h,
                        b,
                        v,
                        m,
                        g,
                        y,
                        O,
                        w,
                        x,
                        j,
                        C,
                        S,
                        T,
                        D,
                        F,
                        I,
                        R,
                        P,
                        _,
                        A,
                        N,
                        L;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (c.timeDisconnected) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error('wat');
                              case 2:
                                if (
                                  ((n = Date.now() - c.timeDisconnected),
                                  (o = function (e) {
                                    (c.reconnectTrackedData = z(
                                      z({}, e),
                                      {},
                                      {
                                        serverVersion: r,
                                        ourVersion: c.version,
                                        ourCommittedVersion: c.committedVersion,
                                        areContentsEqual: c.serverContent === t,
                                        areCommittedContentsEqual:
                                          c.committedContent === t,
                                        didReceiveOpsWhileReconnecting: Boolean(
                                          c.bufferedReconnectingOps
                                        ),
                                        didEditOffline: c.didEditOffline,
                                        hasPendingOps: Boolean(
                                          c.pending.length
                                        ),
                                        disconnectDuration: n,
                                      }
                                    )),
                                      c.shouldTrackReconnects &&
                                        Object(E.track)(
                                          E.events.FILE_RECONNECTED_STATUS2,
                                          c.reconnectTrackedData
                                        );
                                  }),
                                  (a = function () {
                                    (c.isReconnecting = !1),
                                      (c.bufferedReconnectingOps = []),
                                      (c.didEditOffline = !1),
                                      (c.timeDisconnected = null),
                                      c.debounceSend(),
                                      c.debounceCommit(),
                                      c.emit('reconnected');
                                  }),
                                  !c.inflight.length)
                                ) {
                                  e.next = 23;
                                  break;
                                }
                                if (r !== c.version || c.serverContent !== t) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  o({
                                    case: 'has_inflight_happy_path_ops_unreached',
                                    prompted: !1,
                                  }),
                                  (c.pending = k.type.compose(
                                    c.inflight,
                                    c.pending
                                  )),
                                  (c.inflight = []),
                                  (c.inflightOpsPromise = null),
                                  a(),
                                  e.abrupt('return')
                                );
                              case 13:
                                (s = !1), (u = c.serverContent);
                                try {
                                  u = k.type.apply(t, c.inflight);
                                } catch (i) {
                                  s = !0;
                                }
                                if (s || c.version + 1 !== r || u !== t) {
                                  e.next = 20;
                                  break;
                                }
                                return (
                                  o({
                                    case: 'has_inflight_happy_path_ops_reached',
                                    prompted: !0,
                                  }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 20:
                                return (
                                  o({
                                    case: 'has_inflight',
                                    prompted: !0,
                                  }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 23:
                                if (!c.hasUncommittedMultiplayerOps) {
                                  e.next = 27;
                                  break;
                                }
                                return (
                                  o({
                                    case: 'multiplayer',
                                    prompted: !0,
                                  }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 27:
                                if (c.version !== r) {
                                  e.next = 35;
                                  break;
                                }
                                if (t !== c.serverContent) {
                                  e.next = 32;
                                  break;
                                }
                                return (
                                  o({
                                    case: 'happy_path',
                                    prompted: !1,
                                  }),
                                  a(),
                                  e.abrupt('return')
                                );
                              case 32:
                                return (
                                  o({
                                    case: 'same_version_different_content',
                                    prompted: !0,
                                  }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 35:
                                if (c.committedVersion !== r) {
                                  e.next = 61;
                                  break;
                                }
                                (l = t),
                                  (e.prev = 37),
                                  (f = J(c.uncommittedOps));
                                try {
                                  for (f.s(); !(p = f.n()).done; )
                                    (d = p.value.ops), (l = k.type.apply(l, d));
                                } catch (M) {
                                  f.e(M);
                                } finally {
                                  f.f();
                                }
                                e.next = 47;
                                break;
                              case 42:
                                return (
                                  (e.prev = 42),
                                  (e.t0 = e.catch(37)),
                                  o({
                                    case: 'same_committed_version_unable_to_apply_ops',
                                    prompted: !0,
                                  }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 47:
                                if (l !== c.serverContent) {
                                  e.next = 58;
                                  break;
                                }
                                o({
                                  case: 'happy_path_uncommitted',
                                  prompted: !1,
                                }),
                                  (h = []),
                                  (b = J(c.uncommittedOps));
                                try {
                                  for (b.s(); !(v = b.n()).done; )
                                    (m = v.value.ops),
                                      (h = k.type.compose(h, m));
                                } catch (M) {
                                  b.e(M);
                                } finally {
                                  b.f();
                                }
                                return (
                                  (c.pending = k.type.compose(h, c.pending)),
                                  (c.uncommittedOps = []),
                                  (c.version = r),
                                  (c.serverContent = t),
                                  a(),
                                  e.abrupt('return')
                                );
                              case 58:
                                return (
                                  o({
                                    case: 'same_committed_version_different_content_fixed',
                                    prompted: !0,
                                  }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 61:
                                if (!(c.version < r)) {
                                  e.next = 85;
                                  break;
                                }
                                return (
                                  (e.next = 64), c.fetchOps(c.version + 1, r)
                                );
                              case 64:
                                (g = e.sent), (y = !1), (O = c.serverContent);
                                try {
                                  w = J(g);
                                  try {
                                    for (w.s(); !(x = w.n()).done; )
                                      (j = x.value.ops),
                                        (O = k.type.apply(O, j));
                                  } catch (M) {
                                    w.e(M);
                                  } finally {
                                    w.f();
                                  }
                                } catch (i) {
                                  y = !0;
                                }
                                if (y || O !== t) {
                                  e.next = 76;
                                  break;
                                }
                                o({
                                  case: 'happy_path_server_ahead',
                                  prompted: !1,
                                }),
                                  (C = J(g));
                                try {
                                  for (C.s(); !(S = C.n()).done; )
                                    (T = S.value),
                                      c.handlePacket(T, {
                                        overrideReconnectringBuffer: !0,
                                      });
                                } catch (M) {
                                  C.e(M);
                                } finally {
                                  C.f();
                                }
                                D = J(c.bufferedReconnectingOps);
                                try {
                                  for (D.s(); !(F = D.n()).done; )
                                    (I = F.value),
                                      c.handlePacket(I, {
                                        overrideReconnectringBuffer: !0,
                                      });
                                } catch (M) {
                                  D.e(M);
                                } finally {
                                  D.f();
                                }
                                return a(), e.abrupt('return');
                              case 76:
                                return (
                                  (e.next = 78),
                                  c.fetchOps(c.committedVersion + 1, r)
                                );
                              case 78:
                                (R = e.sent),
                                  (P = !1),
                                  (_ = c.committedContent);
                                try {
                                  A = J(R);
                                  try {
                                    for (A.s(); !(N = A.n()).done; )
                                      (L = N.value.ops),
                                        (_ = k.type.apply(_, L));
                                  } catch (M) {
                                    A.e(M);
                                  } finally {
                                    A.f();
                                  }
                                } catch (i) {
                                  P = !0;
                                }
                                return (
                                  P ||
                                    _ !== t ||
                                    o({
                                      case: 'happy_path_uncommitted_server_ahead',
                                      prompted: !0,
                                    }),
                                  c.emit('promptUserReconnect'),
                                  e.abrupt('return')
                                );
                              case 85:
                                o({
                                  case: 'other',
                                  prompted: !0,
                                }),
                                  c.emit('promptUserReconnect');
                              case 87:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[37, 42]]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              Object(n.a)(
                Object(v.a)(c),
                'flush',
                Object(a.a)(
                  i.a.mark(function e() {
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), c.commitPromise;
                          case 2:
                            return (
                              c.debounceCommit(),
                              c.debounceCommit.flush(),
                              (e.next = 6),
                              c.commitPromise
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              Object(n.a)(
                Object(v.a)(c),
                'fetchOps',
                (function () {
                  var e = Object(a.a)(
                    i.a.mark(function e(t, r) {
                      var n;
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (c.channel) {
                                e.next = 2;
                                break;
                              }
                              throw new Error('No cahnnel, cannot fetch');
                            case 2:
                              return (
                                (e.next = 4),
                                c.channel.request({
                                  otFetchRequest: {
                                    versionFrom: t,
                                    versionTo: r,
                                  },
                                })
                              );
                            case 4:
                              if (!(n = e.sent).channelClosed) {
                                e.next = 7;
                                break;
                              }
                              throw new Error(
                                'Channel closed while requesting'
                              );
                            case 7:
                              if (!n.error) {
                                e.next = 9;
                                break;
                              }
                              throw new Error(
                                'Fetch ops returned an error' + n.error
                              );
                            case 9:
                              if (n.otFetchResponse) {
                                e.next = 11;
                                break;
                              }
                              throw new Error('Expected otFetchResponse');
                            case 11:
                              if (n.otFetchResponse.packets) {
                                e.next = 13;
                                break;
                              }
                              throw new Error(
                                'Expected otFetchResponse.packets'
                              );
                            case 13:
                              return e.abrupt(
                                'return',
                                n.otFetchResponse.packets.map(function (e) {
                                  var t = e.crc32,
                                    r = e.ops,
                                    n = e.version;
                                  if (null == t)
                                    throw new Error('Expected crc32 in packet');
                                  if (null == r)
                                    throw new Error('Expected ops in packet');
                                  if (null == n)
                                    throw new Error(
                                      'Expected version in packet'
                                    );
                                  return {
                                    crc32: t,
                                    version: n,
                                    ops: G(r),
                                  };
                                })
                              );
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              Object(n.a)(
                Object(v.a)(c),
                'transformSelection',
                (function () {
                  var e = Object(a.a)(
                    i.a.mark(function e(t) {
                      var r, n, o, a, s;
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = t.indexStart),
                                (n = t.indexEnd),
                                (o = t.versionFrom),
                                (a = t.versionTo),
                                c.channel)
                              ) {
                                e.next = 3;
                                break;
                              }
                              throw new Error('No channel, cannot fetch');
                            case 3:
                              return (
                                (e.next = 5),
                                c.channel.request({
                                  otTransformSelectionRequest: {
                                    indexStart: r,
                                    indexEnd: n,
                                    versionFrom: o,
                                    versionTo: a,
                                  },
                                })
                              );
                            case 5:
                              if ((s = e.sent).otTransformSelectionResponse) {
                                e.next = 8;
                                break;
                              }
                              throw new Error(
                                'Expected otTransformSelectionResponse'
                              );
                            case 8:
                              return e.abrupt(
                                'return',
                                s.otTransformSelectionResponse
                              );
                            case 9:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              (c.shouldTrackDataLoss = !1),
              (c.replId = ''),
              (c.linkedFile = e),
              (c.channel = null),
              (c.inflight = []),
              (c.inflightOpsPromise = null),
              (c.uncommittedOps = []),
              (c.hasUncommittedMultiplayerOps = !1),
              (c.committedVersion = -1),
              (c.isReconnecting = !1),
              (c.bufferedReconnectingOps = []),
              (c.didEditOffline = !1),
              (c.pending = []),
              (c.version = -1),
              (c.serverContent = ''),
              (c.localContent = ''),
              (c.committedContent = ''),
              (c.flushedCursorIds = []),
              (c.pendingCursors = []),
              (c.user = null),
              (c.debounceSend = j()(
                function () {
                  return c.sendOps();
                },
                20,
                {
                  maxWait: 60,
                }
              )),
              (c.debounceCommit = j()(
                function () {
                  return c.commitToDisk();
                },
                1e3,
                {
                  maxWait: 3e3,
                }
              )),
              (c.commitPromise = null),
              (c.timeDisconnected = null),
              (c.shouldTrackReconnects = !1),
              (c.destroy = o.openChannel(
                {
                  service: 'ot',
                  name: 'ot:'.concat(e),
                },
                function (t) {
                  if (!t.error) {
                    var r = t.channel,
                      n = t.context;
                    return (
                      (c.user = n.currentUser
                        ? {
                            name: n.currentUser.username,
                            id: n.currentUser.id,
                          }
                        : null),
                      n.currentUser &&
                        n.repl &&
                        ((c.shouldTrackDataLoss =
                          n.currentUser.flagTrackOtClientDataLoss),
                        (c.replId = n.repl.id),
                        L(e, c.replId)),
                      (c.channel = r),
                      r.onCommand(function (e) {
                        switch (e.body) {
                          case 'ot':
                            if (
                              !e.ot ||
                              null == e.ot.ops ||
                              null == e.ot.spookyVersion ||
                              null == e.ot.crc32
                            )
                              return void c.emit(
                                'error',
                                new Error(
                                  'OT Error: missing data in ot packet'
                                ),
                                e.ot || {}
                              );
                            if (-1 === c.version) return;
                            var t = {
                              crc32: e.ot.crc32,
                              ops: G(e.ot.ops),
                              version: e.ot.spookyVersion,
                            };
                            return c.handlePacket(t, {
                              overrideReconnectringBuffer: !1,
                            });
                          case 'otstatus':
                            return c.handleStatus(e.otstatus);
                          case 'error':
                            if (e.ref) return;
                            return c.emit(
                              'error',
                              new Error('Unkown protocol error OT channel'),
                              {
                                originalError: e.error || 'Server error',
                              }
                            );
                          case 'otNewCursor':
                            return c.handleNewCursor(e.otNewCursor);
                          case 'otDeleteCursor':
                            return c.handleDeleteCursor(e.otDeleteCursor);
                        }
                      }),
                      function () {
                        (c.channel = null),
                          (c.isReconnecting = !0),
                          c.debounceSend.cancel(),
                          c.debounceCommit.cancel(),
                          c.timeDisconnected ||
                            (c.timeDisconnected = Date.now());
                      }
                    );
                  }
                }
              )),
              c
            );
          }
          return (
            Object(b.a)(r, [
              {
                key: 'commitToDisk',
                value: (function () {
                  var e = Object(a.a)(
                    i.a.mark(function e() {
                      var t, r, n, o, a;
                      return i.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.channel) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error('Tryna commit while offline');
                              case 2:
                                if ('open' === this.channel.status) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt('return');
                              case 4:
                                if (!this.isReconnecting) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error(
                                  'Committing while reconnecting'
                                );
                              case 6:
                                if (!this.isClean()) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt('return');
                              case 8:
                                if (!this.commitPromise) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  this.debounceCommit(), e.abrupt('return')
                                );
                              case 11:
                                if (
                                  ((t = function () {}),
                                  (this.commitPromise = new Promise(function (
                                    e
                                  ) {
                                    return (t = e);
                                  })),
                                  !this.inflightOpsPromise)
                                ) {
                                  e.next = 21;
                                  break;
                                }
                                return (e.next = 16), this.inflightOpsPromise;
                              case 16:
                                if (!e.sent.channelClosed) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (this.commitPromise = null),
                                  t(),
                                  e.abrupt('return')
                                );
                              case 21:
                                if (!(this.pending.length > 0)) {
                                  e.next = 36;
                                  break;
                                }
                                if (
                                  (this.debounceSend(),
                                  this.debounceSend.flush(),
                                  this.inflightOpsPromise)
                                ) {
                                  e.next = 29;
                                  break;
                                }
                                return (
                                  (this.commitPromise = null),
                                  t(),
                                  this.emit(
                                    'error',
                                    new Error('expected inflight promise')
                                  ),
                                  e.abrupt('return')
                                );
                              case 29:
                                return (e.next = 31), this.inflightOpsPromise;
                              case 31:
                                if (!e.sent.channelClosed) {
                                  e.next = 36;
                                  break;
                                }
                                return (
                                  (this.commitPromise = null),
                                  t(),
                                  e.abrupt('return')
                                );
                              case 36:
                                return (
                                  this.emit('commitStart'),
                                  (r = this.version),
                                  (n = this.serverContent),
                                  (e.next = 41),
                                  this.channel.request({
                                    flush: {},
                                  })
                                );
                              case 41:
                                if (!(o = e.sent).channelClosed) {
                                  e.next = 46;
                                  break;
                                }
                                return (
                                  (this.commitPromise = null),
                                  t(),
                                  e.abrupt('return')
                                );
                              case 46:
                                if ('ok' === o.body) {
                                  e.next = 51;
                                  break;
                                }
                                return (
                                  (this.commitPromise = null),
                                  t(),
                                  this.emit(
                                    'error',
                                    new Error('OT Error: unable to flush'),
                                    {
                                      originalError: o.error || o.toString(),
                                    }
                                  ),
                                  e.abrupt('return')
                                );
                              case 51:
                                return (
                                  this.shouldTrackDataLoss &&
                                    (a =
                                      this.uncommittedOps[
                                        this.uncommittedOps.length - 1
                                      ]) &&
                                    M({
                                      replId: this.replId,
                                      filePath: this.linkedFile,
                                      op: {
                                        crc32: a.crc32,
                                        version: a.version,
                                      },
                                      opType: 'latestFlushedOp',
                                    }),
                                  (this.uncommittedOps = []),
                                  (this.hasUncommittedMultiplayerOps = !1),
                                  (this.committedVersion = r),
                                  (this.committedContent = n),
                                  this.emit('commitComplete'),
                                  this.isClean() && this.emit('fileClean'),
                                  (this.commitPromise = null),
                                  t(),
                                  e.abrupt('return', o)
                                );
                              case 61:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            r
          );
        })(O.EventEmitter),
        K = r('tSgl'),
        X = r('0gYX'),
        $ = r.n(X),
        Y = r('gtzJ'),
        Q = r('4vVx'),
        ee = r('DsqJ');

      function te(e, t) {
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

      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function ne(e, t) {
        var r;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return oe(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return oe(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[n++],
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

      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }

      function ie(e) {
        return (
          !!e.includes('no such file') || !!e.includes('file does not exist')
        );
      }

      function ae(e) {
        return ie(e)
          ? u.e.NotFound
          : e.includes('file exist')
          ? u.e.AlreadyExists
          : e.includes('not a directory')
          ? u.e.NotDirectory
          : void 0;
      }

      function ce(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return new Promise(function (t, n) {
          setTimeout(function () {
            e.apply(void 0, r)
              .then(t)
              .catch(n);
          }, 0);
        });
      }

      function se(e) {
        var t,
          r = e.container,
          n = null,
          o = null,
          h = null,
          b = 0,
          v = {},
          m = {},
          g = {};
        r.openChannel(
          {
            service: 'fsevents',
          },
          function (e) {
            var t = e.error,
              r = e.channel;
            if (!t) {
              if (!r) throw new Error('Expected channel');
              (n = r),
                r.onCommand(function (e) {
                  if ('fileEvent' === e.body) {
                    if (!e.fileEvent) throw new Error('Expected fileEvent');
                    var t = e.fileEvent,
                      r = t.file,
                      n = t.dest,
                      o = t.op;
                    if (r) {
                      var i = r.path;
                      if (
                        null !== i &&
                        null !== o &&
                        void 0 !== i &&
                        void 0 !== o
                      ) {
                        var a;
                        if ((T(), v[i] || r.type === d.api.File.Type.DIRECTORY))
                          a = u.d.Directory;
                        else {
                          var c = Object.keys(v).find(function (e) {
                              return Object(f.a)(e, i);
                            }),
                            s =
                              c &&
                              v[c].children.find(function (e) {
                                return e.filename === Object(l.c)(i);
                              });
                          a = s ? s.type : u.d.File;
                        }
                        switch (o) {
                          case d.api.FileEvent.Op.Create:
                            N({
                              eventType: u.a.Create,
                              node: {
                                path: i,
                                type: a,
                              },
                            });
                            break;
                          case d.api.FileEvent.Op.Modify:
                            if (a === u.d.Directory) break;
                            N({
                              eventType: u.a.Modify,
                              node: {
                                path: i,
                                type: a,
                              },
                            });
                            break;
                          case d.api.FileEvent.Op.Remove:
                            N({
                              eventType: u.a.Delete,
                              node: {
                                path: i,
                                type: a,
                              },
                            });
                            break;
                          case d.api.FileEvent.Op.Move:
                            if (null == n || null == n.path)
                              throw new Error('Expected dest path');
                            var p = n.path;
                            N({
                              eventType: u.a.Move,
                              node: {
                                path: i,
                                type: a,
                              },
                              to: p,
                            });
                        }
                      }
                    }
                  }
                });
              var o = Object(c.a)(
                new Set(
                  [].concat(
                    Object(c.a)(Object.keys(v)),
                    Object(c.a)(Object.keys(m)),
                    Object(c.a)(Object.keys(g))
                  )
                )
              );
              return (
                o.length &&
                  r.send({
                    subscribeFile: {
                      files: o.map(function (e) {
                        return {
                          path: e,
                        };
                      }),
                    },
                  }),
                function () {
                  n = null;
                }
              );
            }
          }
        );
        var y = new Promise(function (e) {
          return (t = e);
        });
        r.openChannel(
          {
            service: function (e) {
              return e.repl.currentUserPermissions.containerWrite
                ? 'gcsfiles'
                : 'files';
            },
          },
          function (e) {
            var r = e.error,
              n = e.channel;
            if (!r) {
              if (!n) throw new Error('Expected channel');
              return (
                t(n),
                function () {
                  y = new Promise(function (e) {
                    return (t = e);
                  });
                }
              );
            }
          }
        );
        var O = Object(ee.a)();
        O.promise.catch(function (e) {
          return e;
        });
        var k = Object(Q.a)(
          Object(a.a)(
            i.a.mark(function e() {
              var t, r;
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), O.promise;
                    case 2:
                      return (
                        (t = e.sent),
                        (e.next = 5),
                        t.request({
                          fsSnapshot: {},
                        })
                      );
                    case 5:
                      if (!(r = e.sent).channelClosed) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt('return', {
                        success: !1,
                        error: 'channel closed',
                      });
                    case 8:
                      if (!r.error) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt('return', {
                        success: !1,
                        error: r.error,
                      });
                    case 10:
                      return e.abrupt('return', {
                        success: !0,
                      });
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          ),
          {
            wait: 5e3,
            maxWait: 1e4,
          }
        );
        r.openChannel(
          {
            service: 'snapshot',
            skip: function (e) {
              return !e.repl.currentUserPermissions.containerWrite;
            },
          },
          function (e) {
            var t = e.error,
              r = e.channel;
            if (!t) {
              if (!r) throw new Error('Expected channel');
              return (
                O.resolve(r),
                function () {
                  O.isFulfilled &&
                    (O = Object(ee.a)()).promise.catch(function (e) {
                      return e;
                    });
                }
              );
            }
            O.isFulfilled || O.reject(t);
          }
        );
        var x = u.f.Clean,
          j = [],
          C = 0;

        function T() {
          return D.apply(this, arguments);
        }

        function D() {
          return (D = Object(a.a)(
            i.a.mark(function e() {
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return C++, F(), (e.next = 4), V.persist();
                    case 4:
                      C--, F();
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function F() {
          return I.apply(this, arguments);
        }

        function I() {
          return (I = Object(a.a)(
            i.a.mark(function e() {
              var t, r;
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t =
                          0 === C &&
                          0 === R.length &&
                          Object.values(m).every(function (e) {
                            return e.otClient.isClean();
                          })),
                        (r = x === u.f.Clean),
                        t !== r)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt('return');
                    case 4:
                      (x = t ? u.f.Clean : u.f.Syncing),
                        j.forEach(function (e) {
                          e(x);
                        });
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var R = [];

        function P(e) {
          R.push(e),
            F(),
            e.then(function () {
              var t = R.indexOf(e);
              t > -1 && R.splice(t, 1), T();
            });
        }

        function _(e, t) {
          return A.apply(this, arguments);
        }

        function A() {
          return (A = Object(a.a)(
            i.a.mark(function e(t, r) {
              var n, o;
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = (n = (function () {
                          var e = Object(a.a)(
                            i.a.mark(function e() {
                              var r, o;
                              return i.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), y;
                                    case 2:
                                      return (
                                        (r = e.sent), (e.next = 5), r.request(t)
                                      );
                                    case 5:
                                      if (!(o = e.sent).channelClosed) {
                                        e.next = 8;
                                        break;
                                      }
                                      return e.abrupt('return', ce(n));
                                    case 8:
                                      return e.abrupt('return', o);
                                    case 9:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })())()),
                        r.isMutative && P(o),
                        e.abrupt('return', o)
                      );
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function N(e) {
          h = null;
          var t = e.node.path.includes('/') ? Object(l.e)(e.node.path) : p.a,
            r = v[t],
            n = Object(l.c)(e.node.path);
          if (!n) throw new Error('Expected filename');
          var o = null;
          if (e.eventType === u.a.Move) {
            var i = e.to.includes('/') ? Object(l.e)(e.to) : p.a;
            o = v[i];
          }
          if (r || o)
            switch (e.eventType) {
              case u.a.Create:
                var a,
                  s = [].concat(
                    Object(c.a)(
                      r.children.filter(function (e) {
                        return e.filename !== n;
                      })
                    ),
                    [
                      {
                        type: e.node.type,
                        filename: n,
                      },
                    ]
                  ),
                  d = ne(r.listeners);
                try {
                  for (d.s(); !(a = d.n()).done; ) {
                    (0, a.value.onChange)(s);
                  }
                } catch (G) {
                  d.e(G);
                } finally {
                  d.f();
                }
                r.children = s;
                break;
              case u.a.Move:
                var b = Object(l.c)(e.to);
                if (r === o) {
                  var y,
                    O = [].concat(
                      Object(c.a)(
                        r.children.filter(function (e) {
                          return e.filename !== n && e.filename !== b;
                        })
                      ),
                      [
                        {
                          type: e.node.type,
                          filename: b,
                        },
                      ]
                    ),
                    w = ne(r.listeners);
                  try {
                    for (w.s(); !(y = w.n()).done; ) {
                      (0, y.value.onChange)(O);
                    }
                  } catch (G) {
                    w.e(G);
                  } finally {
                    w.f();
                  }
                  r.children = O;
                  break;
                }
                if (r) {
                  var k,
                    x = r.children.filter(function (e) {
                      return e.filename !== n;
                    }),
                    j = ne(r.listeners);
                  try {
                    for (j.s(); !(k = j.n()).done; ) {
                      (0, k.value.onChange)(x);
                    }
                  } catch (G) {
                    j.e(G);
                  } finally {
                    j.f();
                  }
                  r.children = x;
                }
                if (o) {
                  var C,
                    E = [].concat(
                      Object(c.a)(
                        o.children.filter(function (e) {
                          return e.filename !== n && e.filename !== b;
                        })
                      ),
                      [
                        {
                          type: e.node.type,
                          filename: b,
                        },
                      ]
                    ),
                    S = ne(o.listeners);
                  try {
                    for (S.s(); !(C = S.n()).done; ) {
                      (0, C.value.onChange)(E);
                    }
                  } catch (G) {
                    S.e(G);
                  } finally {
                    S.f();
                  }
                  o.children = E;
                }
                break;
              case u.a.Delete:
                var T,
                  D = r.children.filter(function (e) {
                    return e.filename !== n;
                  }),
                  F = ne(r.listeners);
                try {
                  for (F.s(); !(T = F.n()).done; ) {
                    (0, T.value.onChange)(D);
                  }
                } catch (G) {
                  F.e(G);
                } finally {
                  F.f();
                }
                r.children = D;
                break;
              case u.a.Modify:
                break;
              default:
                throw new Error('unknown event');
            }
          switch (e.eventType) {
            case u.a.Move:
            case u.a.Delete:
              for (
                var I = 0, R = [m[e.node.path], g[e.node.path], v[e.node.path]];
                I < R.length;
                I++
              ) {
                var P = R[I];
                if (P) {
                  var _,
                    A = ne(P.listeners);
                  try {
                    for (A.s(); !(_ = A.n()).done; ) {
                      var L = _.value,
                        M = L.onMoveOrDelete,
                        U = L.dispose;
                      M && M(e), U();
                    }
                  } catch (G) {
                    A.e(G);
                  } finally {
                    A.f();
                  }
                }
              }
              if (e.node.type === u.d.File) break;
              var B,
                q = [],
                z = ne(Object.values(re(re(re({}, v), g), m)).sort());
              try {
                for (z.s(); !(B = z.n()).done; ) {
                  var J = B.value;
                  if (Object(f.b)(e.node.path, J.path)) {
                    var W = q.slice(-1)[0];
                    if (!W || !Object(f.b)(W, J.path)) {
                      var H = {
                        eventType: u.a.Delete,
                        node: {
                          path: J.path,
                          type: J.type,
                        },
                      };
                      e.eventType === u.a.Move &&
                        (H = re(
                          re({}, H),
                          {},
                          {
                            eventType: u.a.Move,
                            to: Object(f.d)(e.node.path, e.to, J.path),
                          }
                        )),
                        q.push(J.path),
                        N(H);
                    }
                  }
                }
              } catch (G) {
                z.e(G);
              } finally {
                z.f();
              }
              break;
            case u.a.Create:
            case u.a.Modify:
              if (!g[e.node.path]) break;
              V.readFile(e.node.path)
                .then(function (t) {
                  var r = g[e.node.path];
                  if (r)
                    if (t.error)
                      N({
                        eventType: u.a.Delete,
                        node: {
                          path: e.node.path,
                          type: u.d.File,
                        },
                      });
                    else {
                      var n,
                        o = ne(r.listeners);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var i = n.value.onChange;
                          i && i(t.content);
                        }
                      } catch (G) {
                        o.e(G);
                      } finally {
                        o.f();
                      }
                    }
                })
                .catch(function (e) {
                  (e.message = 'File read after modify error: ' + e.message),
                    Y.c(e);
                });
          }
        }

        function L() {
          return M.apply(this, arguments);
        }

        function M() {
          return (M = Object(a.a)(
            i.a.mark(function e() {
              var t, n, o, a, s, u, l, f;
              return i.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = window.performance.now()),
                        (e.next = 3),
                        r.exec.apply(
                          r,
                          ['ag', '--noaffinity', '-g *', '--hidden'].concat(
                            Object(c.a)(
                              K.ignoredDirs.map(function (e) {
                                return '--ignore='.concat(e);
                              })
                            )
                          )
                        )
                      );
                    case 3:
                      if (
                        ((o = e.sent),
                        (a = o.output),
                        (s = o.error),
                        Object(E.track)(E.events.LIST_FILES_EXECUTED, {
                          duration: window.performance.now() - n,
                          failed: Boolean(s) && 'exit status 1' !== s,
                        }),
                        (u =
                          null === (t = r.getContext()) || void 0 === t
                            ? void 0
                            : t.repl))
                      ) {
                        e.next = 10;
                        break;
                      }
                      throw new Error('Expected repl');
                    case 10:
                      if (
                        ((l = function (e) {
                          return (
                            !!e &&
                            !Object(K.isHiddenFile)(e) &&
                            !$.a.isLangFileBinary(u.language, e)
                          );
                        }),
                        s || !a)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (h = {
                          error: null,
                          files: a.split('\n').filter(l),
                        }),
                        e.abrupt('return', h)
                      );
                    case 14:
                      if (!s || !s.includes('not found')) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (e.next = 17),
                        r.exec('find', '.', '-type', 'f', '-print0')
                      );
                    case 17:
                      if (
                        ((f = e.sent),
                        Object(E.track)(E.events.AG_NOT_AVAILABLE, {
                          language: u.language,
                        }),
                        !f.output)
                      ) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (h = {
                          error: null,
                          files: f.output.slice(2, -1).split('\0./').filter(l),
                        }),
                        e.abrupt('return', h)
                      );
                    case 22:
                      return (
                        'exit status 1' !== s &&
                          Y.c(
                            new Error(
                              'Find file command failed with error: '.concat(s)
                            )
                          ),
                        e.abrupt('return', {
                          error: s,
                          files: null,
                        })
                      );
                    case 24:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var U = (function () {
          var e = Object(a.a)(
            i.a.mark(function e(t, r, n) {
              var o, c, s, l, f, p, d, h;
              return i.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = function () {
                            return (s = Object(a.a)(
                              i.a.mark(function e(t) {
                                var r;
                                return i.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), o.request(t);
                                      case 2:
                                        if (!(r = e.sent).channelClosed) {
                                          e.next = 5;
                                          break;
                                        }
                                        throw new Error('channelClosed');
                                      case 5:
                                        if (!r.error) {
                                          e.next = 7;
                                          break;
                                        }
                                        throw new Error(r.error);
                                      case 7:
                                        return e.abrupt('return', r);
                                      case 8:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )).apply(this, arguments);
                          }),
                          (c = function (e) {
                            return s.apply(this, arguments);
                          }),
                          (e.next = 4),
                          y
                        );
                      case 4:
                        return (
                          (o = e.sent),
                          (e.prev = 5),
                          (e.next = 8),
                          c({
                            transferStart: {
                              path: t,
                              size: r.length,
                            },
                          })
                        );
                      case 8:
                        if (((l = e.sent), (f = l.transfer))) {
                          e.next = 12;
                          break;
                        }
                        throw new Error(
                          'Failed to start a transfer (no transfer id)'
                        );
                      case 12:
                        (p = r.toBuffer()),
                          (d = 512e3),
                          n(p.length, 0),
                          (h = 0);
                      case 16:
                        if (!(h < Math.ceil(r.length / d))) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (e.next = 19),
                          c({
                            transferChunk: {
                              id: f.id,
                              content: p.subarray(h * d, (h + 1) * d),
                            },
                          })
                        );
                      case 19:
                        n(p.length, Math.min(p.length, (h + 1) * d));
                      case 20:
                        h++, (e.next = 16);
                        break;
                      case 23:
                        return (
                          (e.next = 25),
                          c({
                            transferComplete: {
                              id: f.id,
                              crc32: w.buf(p),
                            },
                          })
                        );
                      case 25:
                        e.next = 36;
                        break;
                      case 27:
                        if (
                          ((e.prev = 27),
                          (e.t0 = e.catch(5)),
                          'channelClosed' !== e.t0.message)
                        ) {
                          e.next = 31;
                          break;
                        }
                        return e.abrupt('return', ce(V.transferFile, t, r, n));
                      case 31:
                        if (!e.t0.message.includes('not a directory')) {
                          e.next = 33;
                          break;
                        }
                        return e.abrupt('return', {
                          error: u.e.NotDirectory,
                        });
                      case 33:
                        if (!e.t0.message.includes('file exists')) {
                          e.next = 35;
                          break;
                        }
                        return e.abrupt('return', {
                          error: u.e.IsDirectory,
                        });
                      case 35:
                        throw e.t0;
                      case 36:
                        return (
                          N({
                            eventType: u.a.Create,
                            node: {
                              path: t,
                              type: u.d.File,
                            },
                          }),
                          e.abrupt('return', {
                            error: null,
                          })
                        );
                      case 38:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 27]]
              );
            })
          );
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })();

        function B(e) {
          var t = new Z(e, r);
          return (
            t.on('commitComplete', T),
            t.on('fileDirty', F),
            t.on('fileClean', F),
            t.on('commitStart', F),
            t
          );
        }
        var V = {
          getStatus: function () {
            return x;
          },
          onStatusChange: function (e) {
            return (
              j.push(e),
              function () {
                var t = j.indexOf(e);
                t > -1 && j.splice(t, 1);
              }
            );
          },
          watchDir: function (e, t) {
            var r = !1,
              o = function t() {
                (r = !0),
                  v[e] &&
                    ((v[e].listeners = v[e].listeners.filter(function (e) {
                      return e.dispose !== t;
                    })),
                    0 === v[e].listeners.length && delete v[e]);
              };
            return (
              V.readDir(e)
                .then(function (i) {
                  if (!r) {
                    if (i.error) {
                      var a = new Error(i.error);
                      return (a.code = i.error), t.onError(a), void o();
                    }
                    v[e] ||
                      ((v[e] = {
                        path: e,
                        type: u.d.Directory,
                        children: i.children,
                        listeners: [],
                      }),
                      n &&
                        n.send({
                          subscribeFile: {
                            files: [
                              {
                                path: e,
                              },
                            ],
                          },
                        })),
                      v[e].listeners.push(
                        re(
                          re({}, t),
                          {},
                          {
                            dispose: o,
                          }
                        )
                      ),
                      t.onChange(i.children);
                  }
                })
                .catch(function (e) {
                  o(), t.onError(e);
                }),
              o
            );
          },
          writeFile: function (e, t) {
            return Object(a.a)(
              i.a.mark(function r() {
                var n, o;
                return i.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          _(
                            {
                              write: {
                                path: e,
                                content: t.toBuffer(),
                              },
                            },
                            {
                              isMutative: !0,
                            }
                          )
                        );
                      case 2:
                        if (!(n = r.sent).error) {
                          r.next = 9;
                          break;
                        }
                        if (
                          ((o = null),
                          n.error.includes('not a directory')
                            ? (o = u.e.NotDirectory)
                            : n.error.includes('file exists') &&
                              (o = u.e.IsDirectory),
                          o)
                        ) {
                          r.next = 8;
                          break;
                        }
                        throw new Error(n.error);
                      case 8:
                        return r.abrupt('return', {
                          error: o,
                        });
                      case 9:
                        return (
                          g[e] ||
                          m[e] ||
                          (v[Object(l.e)(e)] &&
                            v[Object(l.e)(e)].children.some(function (t) {
                              return t.filename === Object(l.c)(e);
                            }))
                            ? N({
                                eventType: u.a.Modify,
                                node: {
                                  path: e,
                                  type: u.d.File,
                                },
                              })
                            : N({
                                eventType: u.a.Create,
                                node: {
                                  path: e,
                                  type: u.d.File,
                                },
                              }),
                          r.abrupt('return', {
                            error: null,
                          })
                        );
                      case 11:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          transferFile: function () {
            var e = arguments;
            return Object(a.a)(
              i.a.mark(function t() {
                var r;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          P((r = U.apply(void 0, Object(c.a)(e)))),
                          t.abrupt('return', r)
                        );
                      case 3:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          readFile: function (e) {
            return Object(a.a)(
              i.a.mark(function t() {
                var r, n;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          _(
                            {
                              read: {
                                path: e,
                              },
                            },
                            {
                              isMutative: !1,
                            }
                          )
                        );
                      case 2:
                        if (!(r = t.sent).error) {
                          t.next = 9;
                          break;
                        }
                        if (
                          ((n = null),
                          ie(r.error)
                            ? (n = u.e.NotFound)
                            : r.error.includes('is a directory') &&
                              (n = u.e.IsDirectory),
                          n)
                        ) {
                          t.next = 8;
                          break;
                        }
                        throw new Error(r.error);
                      case 8:
                        return t.abrupt('return', {
                          error: n,
                        });
                      case 9:
                        if (r.file && r.file.path && r.file.content) {
                          t.next = 11;
                          break;
                        }
                        throw new Error('Expected file');
                      case 11:
                        return t.abrupt('return', {
                          content: s.a.from(r.file.content),
                          error: null,
                        });
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          createDir: function (e) {
            return Object(a.a)(
              i.a.mark(function t() {
                var r, n;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          _(
                            {
                              mkdir: {
                                path: e,
                              },
                            },
                            {
                              isMutative: !0,
                            }
                          )
                        );
                      case 2:
                        if (!(r = t.sent).error) {
                          t.next = 9;
                          break;
                        }
                        if (
                          ((n = null),
                          r.error.includes('not a directory') &&
                            (n = u.e.NotDirectory),
                          n)
                        ) {
                          t.next = 8;
                          break;
                        }
                        throw new Error(r.error);
                      case 8:
                        return t.abrupt('return', {
                          error: n,
                        });
                      case 9:
                        return (
                          N({
                            eventType: u.a.Create,
                            node: {
                              path: e,
                              type: u.d.Directory,
                            },
                          }),
                          t.abrupt('return', {
                            error: null,
                          })
                        );
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          moveDir: function (e, t) {
            return Object(a.a)(
              i.a.mark(function r() {
                var n, o;
                return i.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          _(
                            {
                              move: {
                                oldPath: e,
                                newPath: t,
                              },
                            },
                            {
                              isMutative: !0,
                            }
                          )
                        );
                      case 2:
                        if (!(n = r.sent).error) {
                          r.next = 8;
                          break;
                        }
                        if ((o = ae(n.error))) {
                          r.next = 7;
                          break;
                        }
                        throw new Error(n.error);
                      case 7:
                        return r.abrupt('return', {
                          error: o,
                        });
                      case 8:
                        return (
                          N({
                            eventType: u.a.Move,
                            node: {
                              path: e,
                              type: u.d.Directory,
                            },
                            to: t,
                          }),
                          r.abrupt('return', {
                            error: null,
                          })
                        );
                      case 10:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          moveFile: function (e, t) {
            return Object(a.a)(
              i.a.mark(function r() {
                var n, o;
                return i.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          _(
                            {
                              move: {
                                oldPath: e,
                                newPath: t,
                              },
                            },
                            {
                              isMutative: !0,
                            }
                          )
                        );
                      case 2:
                        if (!(n = r.sent).error) {
                          r.next = 8;
                          break;
                        }
                        if ((o = ae(n.error))) {
                          r.next = 7;
                          break;
                        }
                        throw new Error(n.error);
                      case 7:
                        return r.abrupt('return', {
                          error: o,
                        });
                      case 8:
                        return (
                          N({
                            eventType: u.a.Move,
                            node: {
                              path: e,
                              type: u.d.File,
                            },
                            to: t,
                          }),
                          r.abrupt('return', {
                            error: null,
                          })
                        );
                      case 10:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          deleteFile: function (e) {
            return Object(a.a)(
              i.a.mark(function t() {
                var r, n;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          _(
                            {
                              remove: {
                                path: e,
                              },
                            },
                            {
                              isMutative: !0,
                            }
                          )
                        );
                      case 2:
                        if (!(r = t.sent).error) {
                          t.next = 9;
                          break;
                        }
                        if (
                          ((n = null), ie(r.error) && (n = u.e.NotFound), n)
                        ) {
                          t.next = 8;
                          break;
                        }
                        throw new Error(r.error);
                      case 8:
                        return t.abrupt('return', {
                          error: n,
                        });
                      case 9:
                        return (
                          N({
                            eventType: u.a.Delete,
                            node: {
                              path: e,
                              type: u.d.File,
                            },
                          }),
                          t.abrupt('return', {
                            error: null,
                          })
                        );
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          deleteDir: function (e) {
            return Object(a.a)(
              i.a.mark(function t() {
                var r, n;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          _(
                            {
                              remove: {
                                path: e,
                              },
                            },
                            {
                              isMutative: !0,
                            }
                          )
                        );
                      case 2:
                        if (!(r = t.sent).error) {
                          t.next = 9;
                          break;
                        }
                        if (
                          ((n = null), ie(r.error) && (n = u.e.NotFound), n)
                        ) {
                          t.next = 8;
                          break;
                        }
                        throw new Error(r.error);
                      case 8:
                        return t.abrupt('return', {
                          error: n,
                        });
                      case 9:
                        return (
                          N({
                            eventType: u.a.Delete,
                            node: {
                              path: e,
                              type: u.d.Directory,
                            },
                          }),
                          t.abrupt('return', {
                            error: null,
                          })
                        );
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          readDir: function (e) {
            return Object(a.a)(
              i.a.mark(function t() {
                var r, n, o, a;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          _(
                            {
                              readdir: {
                                path: e,
                              },
                            },
                            {
                              isMutative: !1,
                            }
                          )
                        );
                      case 2:
                        if (!(n = t.sent).error) {
                          t.next = 9;
                          break;
                        }
                        if (
                          ((o = null),
                          ie(n.error)
                            ? (o = u.e.NotFound)
                            : n.error.includes('not a directory') &&
                              (o = u.e.NotDirectory),
                          o)
                        ) {
                          t.next = 8;
                          break;
                        }
                        throw new Error(n.error);
                      case 8:
                        return t.abrupt('return', {
                          error: o,
                        });
                      case 9:
                        if (null !== (r = n.files) && void 0 !== r && r.files) {
                          t.next = 11;
                          break;
                        }
                        throw new Error('Expected filesChannel');
                      case 11:
                        return (
                          (a = n.files.files.map(function (e) {
                            if (!e.path) throw new Error('Expected path');
                            return {
                              filename: e.path,
                              type:
                                e.type === d.api.File.Type.DIRECTORY
                                  ? u.d.Directory
                                  : u.d.File,
                            };
                          })),
                          t.abrupt('return', {
                            children: a,
                            error: null,
                          })
                        );
                      case 13:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          stat: function (e) {
            return Object(a.a)(
              i.a.mark(function t() {
                var r;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          _(
                            {
                              stat: {
                                path: e,
                              },
                            },
                            {
                              isMutative: !1,
                            }
                          )
                        );
                      case 2:
                        if (!(r = t.sent).error) {
                          t.next = 5;
                          break;
                        }
                        throw new Error(r.error);
                      case 5:
                        if (r.statRes) {
                          t.next = 7;
                          break;
                        }
                        throw new Error('expected stat result');
                      case 7:
                        if (r.statRes.exists) {
                          t.next = 9;
                          break;
                        }
                        return t.abrupt('return', {
                          exists: !1,
                        });
                      case 9:
                        if (r.statRes.type !== d.api.File.Type.DIRECTORY) {
                          t.next = 11;
                          break;
                        }
                        return t.abrupt('return', {
                          exists: !0,
                          type: u.d.Directory,
                          lastModified: new Date(1e3 * r.statRes.modTime),
                        });
                      case 11:
                        return t.abrupt('return', {
                          exists: !0,
                          type: u.d.File,
                          lastModified: new Date(1e3 * r.statRes.modTime),
                          byteLength: Number(r.statRes.size),
                        });
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          watchOtFile: function (e, t, r) {
            var n = this;
            m[e] ||
              (m[e] = {
                path: e,
                type: u.d.File,
                listeners: [],
                otClient: B(e),
              }),
              r && (m[e].otClient.shouldTrackReconnects = !0);
            var o = !1,
              c = function () {},
              l = function l(p) {
                c();
                var d = function () {
                  var e;
                  return null === (e = t.onStatusChange) || void 0 === e
                    ? void 0
                    : e.call(t, u.c.Dirty);
                };
                m[e].otClient.on('fileDirty', d);
                var h = function () {
                  var e;
                  return null === (e = t.onStatusChange) || void 0 === e
                    ? void 0
                    : e.call(t, u.c.Clean);
                };
                m[e].otClient.on('fileClean', h);
                var b = function () {
                  var e;
                  return null === (e = t.onStatusChange) || void 0 === e
                    ? void 0
                    : e.call(t, u.c.Syncing);
                };
                m[e].otClient.on('commitStart', b);
                var v = function (e) {
                  var r;
                  return null === (r = t.onCursor) || void 0 === r
                    ? void 0
                    : r.call(t, e);
                };
                m[e].otClient.on('cursor', v);
                var g = function (e) {
                  var r;
                  return null === (r = t.onRemoveCursor) || void 0 === r
                    ? void 0
                    : r.call(t, e);
                };
                m[e].otClient.on('removeCursor', g);
                var y = (function () {
                    var t = Object(a.a)(
                      i.a.mark(function t(o) {
                        var a, c, u, l, f, p, d;
                        return i.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((a = m[e].otClient).destroy(),
                                  (c = function () {
                                    var t = B(e);
                                    return (
                                      r && (t.shouldTrackReconnects = !0),
                                      new Promise(function (r, n) {
                                        t.once('op', function () {
                                          var n = a.localContent,
                                            o = t.localContent,
                                            i = Object(S.b)(n, o);
                                          m[e].otClient = t;
                                          var c,
                                            s = ne(m[e].listeners);
                                          try {
                                            for (s.s(); !(c = s.n()).done; ) {
                                              (0, c.value.reregister)(i);
                                            }
                                          } catch (u) {
                                            s.e(u);
                                          } finally {
                                            s.f();
                                          }
                                          r();
                                        }),
                                          t.once('error', function (e) {
                                            return n(e);
                                          });
                                      })
                                    );
                                  }),
                                  'remote' !== o)
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                return (t.next = 6), c();
                              case 6:
                                return t.abrupt('return');
                              case 7:
                                return (
                                  (t.next = 9),
                                  n.writeFile(e, s.a.from(a.localContent))
                                );
                              case 9:
                                if (!(u = t.sent).error) {
                                  t.next = 16;
                                  break;
                                }
                                ((l = new Error(
                                  'Got error while overwriting file during reconnect'
                                )).code = u.error),
                                  (f = ne(m[e].listeners));
                                try {
                                  for (f.s(); !(p = f.n()).done; )
                                    (d = p.value).onError && d.onError(l),
                                      d.dispose();
                                } catch (i) {
                                  f.e(i);
                                } finally {
                                  f.f();
                                }
                                return t.abrupt('return');
                              case 16:
                                return (t.next = 18), c();
                              case 18:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  O = function () {
                    var e;
                    return null === (e = t.onReconnectFail) || void 0 === e
                      ? void 0
                      : e.call(t, y);
                  };
                m[e].otClient.on('promptUserReconnect', O),
                  m[e].listeners[0].reregister === l &&
                    m[e].otClient.on('promptUserReconnect', function () {
                      m[e] &&
                        (m[e].listeners.some(function (e) {
                          return e.onReconnectFail;
                        }) ||
                          y('remote'));
                    });
                var w = function (e, r) {
                  t.onError && t.onError(e, r), f();
                };
                m[e].otClient.on('error', w);
                var k,
                  x = function (r) {
                    m[e].otClient.writeOps(r);
                    var n,
                      o = ne(m[e].listeners);
                    try {
                      for (o.s(); !(n = o.n()).done; ) {
                        var i = n.value.onChange;
                        i &&
                          i !== t.onChange &&
                          i({
                            ops: r,
                            changeSource: u.b.Local,
                            version: m[e].otClient.version,
                            latestContent: m[e].otClient.localContent,
                          });
                      }
                    } catch (a) {
                      o.e(a);
                    } finally {
                      o.f();
                    }
                  },
                  j = function (t) {
                    m[e].otClient.updateCursors(t);
                  };
                (-1 !== m[e].otClient.version &&
                  setTimeout(function () {
                    var r;
                    o ||
                      null === (r = t.onReady) ||
                      void 0 === r ||
                      r.call(t, {
                        initialContent: s.a.from(m[e].otClient.localContent),
                        writeOps: x,
                        updateSelections: j,
                        fetchOps: m[e].otClient.fetchOps,
                        transformSelection: m[e].otClient.transformSelection,
                        version: m[e].otClient.version,
                      });
                  }),
                p) &&
                  (null === (k = t.onChange) ||
                    void 0 === k ||
                    k.call(t, {
                      ops: p,
                      changeSource: u.b.Container,
                      version: m[e].otClient.version,
                      latestContent: m[e].otClient.localContent,
                    }));
                var C = function (r) {
                  var n, i;
                  if (!o)
                    return (
                      (o = !0),
                      void (
                        null === (i = t.onReady) ||
                        void 0 === i ||
                        i.call(t, {
                          initialContent: s.a.from(m[e].otClient.localContent),
                          writeOps: x,
                          updateSelections: j,
                          fetchOps: m[e].otClient.fetchOps,
                          transformSelection: m[e].otClient.transformSelection,
                          version: m[e].otClient.version,
                        })
                      )
                    );
                  null === (n = t.onChange) ||
                    void 0 === n ||
                    n.call(t, {
                      ops: r,
                      changeSource: u.b.Container,
                      version: m[e].otClient.version,
                      latestContent: m[e].otClient.localContent,
                    });
                };
                m[e].otClient.on('op', C),
                  (c = function () {
                    m[e].otClient.removeListener('fileDirty', d),
                      m[e].otClient.removeListener('fileClean', h),
                      m[e].otClient.removeListener('commitStart', b),
                      m[e].otClient.removeListener('error', w),
                      m[e].otClient.removeListener('op', C),
                      m[e].otClient.removeListener('cursor', v),
                      m[e].otClient.removeListener('removeCursor', g),
                      m[e].otClient.removeListener('promptUserReconnect', O);
                  }),
                  F();
              },
              f = function t() {
                m[e] &&
                  ((o = !0),
                  c(),
                  (m[e].listeners = m[e].listeners.filter(function (e) {
                    return e.dispose !== t;
                  })),
                  0 === m[e].listeners.length &&
                    (m[e].otClient.destroy(), delete m[e]));
              };
            return (
              m[e].listeners.push(
                re(
                  re({}, t),
                  {},
                  {
                    dispose: f,
                    reregister: l,
                  }
                )
              ),
              l(),
              f
            );
          },
          watchFile: function (e, t) {
            var r = !1,
              o = function t() {
                (r = !0),
                  g[e] &&
                    ((g[e].listeners = g[e].listeners.filter(function (e) {
                      return e.dispose !== t;
                    })),
                    0 === g[e].listeners.length && delete g[e]);
              };
            return (
              V.readFile(e).then(function (i) {
                if (!r) {
                  if (i.error) {
                    var a = new Error(i.error);
                    return (a.code = i.error), t.onError(a), void o();
                  }
                  g[e] ||
                    ((g[e] = {
                      path: e,
                      type: u.d.File,
                      listeners: [],
                    }),
                    n &&
                      n.send({
                        subscribeFile: {
                          files: [
                            {
                              path: e,
                            },
                          ],
                        },
                      })),
                    g[e].listeners.push(
                      re(
                        re({}, t),
                        {},
                        {
                          dispose: o,
                        }
                      )
                    ),
                    t.onChange(i.content);
                }
              }),
              o
            );
          },
          listFiles: function () {
            return Object(a.a)(
              i.a.mark(function e() {
                var t;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(h && window.performance.now() - b < 1e4)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return', h);
                      case 2:
                        return (
                          o || ((o = L()), (b = window.performance.now())),
                          (e.next = 5),
                          o
                        );
                      case 5:
                        return (t = e.sent), (o = null), e.abrupt('return', t);
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          flush: function () {
            for (var e = [], t = 0, r = Object.values(m); t < r.length; t++) {
              var n = r[t];
              e.push(n.otClient.flush());
            }
            return Promise.all(
              [].concat(e, R).map(function (e) {
                return e.catch(function () {});
              })
            ).then(function () {});
          },
          persist: function (e) {
            var t = k();
            return e && e.skipDebounce && k.flush(), t;
          },
        };
        return V;
      }
    },
    VZNv: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return p;
      });
      var n = r('vJKn'),
        o = r.n(n),
        i = r('rg98'),
        a = r('0gYX'),
        c = r.n(a),
        s = r('5+mB'),
        u = r('HADy'),
        l = r('Fz/E'),
        f = r('6bXu');

      function p(e) {
        var t = e.container,
          r = e.beforeRun,
          n = Object(l.a)(),
          a = null,
          p = u.b.OFFLINE,
          d = 'none',
          h = !1,
          b = Math.random();

        function v() {
          var e = function (e) {
            p !== e && ((p = e), n.emit(u.a.STATE_CHANGE, p));
          };
          e(
            a
              ? h
                ? u.b.STOPPING
                : 'none' === d
                ? u.b.IDLE
                : u.b.RUNNING
              : u.b.OFFLINE
          );
        }

        function m() {
          return (m = Object(i.a)(
            o.a.mark(function e() {
              var t;
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (p === u.b.IDLE) {
                        e.next = 2;
                        break;
                      }
                      throw new Error(
                        'Cannot run while state is not IDLE, got state: ' + p
                      );
                    case 2:
                      return (
                        (t = Math.random()),
                        (b = t),
                        (d = 'before-run'),
                        v(),
                        (e.next = 8),
                        r()
                      );
                    case 8:
                      if (b === t) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt('return');
                    case 10:
                      if ('none' !== d) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt('return');
                    case 12:
                      if ('server' !== d) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt('return');
                    case 14:
                      if (a) {
                        e.next = 16;
                        break;
                      }
                      throw new Error(
                        'State is RUNNING but shellrunner is null?'
                      );
                    case 16:
                      (d = 'optimistic'),
                        a.send({
                          runMain: {},
                        });
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function g() {
          return (g = Object(i.a)(
            o.a.mark(function e(t) {
              return o.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (p === u.b.IDLE || p === u.b.RUNNING) {
                        e.next = 2;
                        break;
                      }
                      throw new Error(
                        'Can only send input when running or idle'
                      );
                    case 2:
                      if (a) {
                        e.next = 4;
                        break;
                      }
                      throw new Error(
                        'State is not OFFLINE but shellrunner is null?'
                      );
                    case 4:
                      a.send({
                        input: t,
                      });
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          t.openChannel(
            {
              name: 'shellrunner',
              service: 'shellrun2',
              skip: function (e) {
                var t,
                  r = e.repl;
                return (
                  !Object(f.a)() ||
                  ((t = r.language),
                  !(
                    !0 === c.a.usesInterpreter(t) ||
                    !1 !== c.a.usesRunProject(t)
                  ))
                );
              },
            },
            function (e) {
              var t = e.channel;
              if (!e.error) {
                if (!t) throw new Error('Expected error');
                return (
                  (a = t),
                  v(),
                  t.onCommand(function (e) {
                    if (null != e.state) {
                      var t = e.state === s.api.State.Stopped;
                      h && t && (h = !1),
                        t ? 'server' === d && (d = 'none') : (d = 'server'),
                        v();
                    } else null != e.output && n.emit(u.a.OUTPUT, e.output);
                  }),
                  function () {
                    (d = 'none'), (h = !1), (a = null), v();
                  }
                );
              }
            }
          ),
          {
            run: function () {
              return m.apply(this, arguments);
            },
            stopRun: function () {
              if (p !== u.b.RUNNING)
                throw new Error(
                  'stopRun must be called when running but got '.concat(p)
                );
              if (!a)
                throw new Error('State is RUNNING but shellrunner is null?');
              if ('before-run' === d) return (d = 'none'), void v();
              (d = 'none'),
                (h = !0),
                v(),
                a.send({
                  clear: {},
                });
            },
            sendInput: function (e) {
              return g.apply(this, arguments);
            },
            resizeTerminal: function (e) {
              if (!a)
                throw new Error('resizeTerminal must be called when online');
              a.send({
                resizeTerm: e,
              });
            },
            onOutput: function (e) {
              return (
                n.on(u.a.OUTPUT, e),
                function () {
                  n.removeListener(u.a.OUTPUT, e);
                }
              );
            },
            onStateChanged: function (e) {
              return (
                n.on(u.a.STATE_CHANGE, e),
                function () {
                  n.removeListener(u.a.STATE_CHANGE, e);
                }
              );
            },
            getRunState: function () {
              return p;
            },
          }
        );
      }
    },
    Yk1I: function (e, t) {
      var r = -1;

      function n(e, t, s, u) {
        if (e === t) return e ? [[0, e]] : [];
        if (null != s) {
          var l = (function (e, t, r) {
            var n =
                'number' === typeof r
                  ? {
                      index: r,
                      length: 0,
                    }
                  : r.oldRange,
              o = 'number' === typeof r ? null : r.newRange,
              i = e.length,
              a = t.length;
            if (0 === n.length && (null === o || 0 === o.length)) {
              var c = n.index,
                s = e.slice(0, c),
                u = e.slice(c),
                l = o ? o.index : null,
                f = c + a - i;
              if ((null === l || l === f) && !(f < 0 || f > a)) {
                var d = t.slice(0, f);
                if ((v = t.slice(f)) === u) {
                  var h = Math.min(c, f);
                  if ((g = s.slice(0, h)) === (O = d.slice(0, h)))
                    return p(g, s.slice(h), d.slice(h), u);
                }
              }
              if (null === l || l === c) {
                var b = c,
                  v = ((d = t.slice(0, b)), t.slice(b));
                if (d === s) {
                  var m = Math.min(i - b, a - b);
                  if (
                    (y = u.slice(u.length - m)) === (w = v.slice(v.length - m))
                  )
                    return p(
                      s,
                      u.slice(0, u.length - m),
                      v.slice(0, v.length - m),
                      y
                    );
                }
              }
            }
            if (n.length > 0 && o && 0 === o.length) {
              var g = e.slice(0, n.index),
                y = e.slice(n.index + n.length);
              if (!(a < (h = g.length) + (m = y.length))) {
                var O = t.slice(0, h),
                  w = t.slice(a - m);
                if (g === O && y === w)
                  return p(g, e.slice(h, i - m), t.slice(h, a - m), y);
              }
            }
            return null;
          })(e, t, s);
          if (l) return l;
        }
        var f = i(e, t),
          d = e.substring(0, f);
        f = a((e = e.substring(f)), (t = t.substring(f)));
        var h = e.substring(e.length - f),
          b = (function (e, t) {
            var c;
            if (!e) return [[1, t]];
            if (!t) return [[r, e]];
            var s = e.length > t.length ? e : t,
              u = e.length > t.length ? t : e,
              l = s.indexOf(u);
            if (-1 !== l)
              return (
                (c = [
                  [1, s.substring(0, l)],
                  [0, u],
                  [1, s.substring(l + u.length)],
                ]),
                e.length > t.length && (c[0][0] = c[2][0] = r),
                c
              );
            if (1 === u.length)
              return [
                [r, e],
                [1, t],
              ];
            var f = (function (e, t) {
              var r = e.length > t.length ? e : t,
                n = e.length > t.length ? t : e;
              if (r.length < 4 || 2 * n.length < r.length) return null;

              function o(e, t, r) {
                for (
                  var n,
                    o,
                    c,
                    s,
                    u = e.substring(r, r + Math.floor(e.length / 4)),
                    l = -1,
                    f = '';
                  -1 !== (l = t.indexOf(u, l + 1));

                ) {
                  var p = i(e.substring(r), t.substring(l)),
                    d = a(e.substring(0, r), t.substring(0, l));
                  f.length < d + p &&
                    ((f = t.substring(l - d, l) + t.substring(l, l + p)),
                    (n = e.substring(0, r - d)),
                    (o = e.substring(r + p)),
                    (c = t.substring(0, l - d)),
                    (s = t.substring(l + p)));
                }
                return 2 * f.length >= e.length ? [n, o, c, s, f] : null;
              }
              var c,
                s,
                u,
                l,
                f,
                p = o(r, n, Math.ceil(r.length / 4)),
                d = o(r, n, Math.ceil(r.length / 2));
              if (!p && !d) return null;
              c = d ? (p && p[4].length > d[4].length ? p : d) : p;
              e.length > t.length
                ? ((s = c[0]), (u = c[1]), (l = c[2]), (f = c[3]))
                : ((l = c[0]), (f = c[1]), (s = c[2]), (u = c[3]));
              var h = c[4];
              return [s, u, l, f, h];
            })(e, t);
            if (f) {
              var p = f[0],
                d = f[1],
                h = f[2],
                b = f[3],
                v = f[4],
                m = n(p, h),
                g = n(d, b);
              return m.concat([[0, v]], g);
            }
            return (function (e, t) {
              for (
                var n = e.length,
                  i = t.length,
                  a = Math.ceil((n + i) / 2),
                  c = a,
                  s = 2 * a,
                  u = new Array(s),
                  l = new Array(s),
                  f = 0;
                f < s;
                f++
              )
                (u[f] = -1), (l[f] = -1);
              (u[c + 1] = 0), (l[c + 1] = 0);
              for (
                var p = n - i,
                  d = p % 2 !== 0,
                  h = 0,
                  b = 0,
                  v = 0,
                  m = 0,
                  g = 0;
                g < a;
                g++
              ) {
                for (var y = -g + h; y <= g - b; y += 2) {
                  for (
                    var O = c + y,
                      w =
                        (E =
                          y === -g || (y !== g && u[O - 1] < u[O + 1])
                            ? u[O + 1]
                            : u[O - 1] + 1) - y;
                    E < n && w < i && e.charAt(E) === t.charAt(w);

                  )
                    E++, w++;
                  if (((u[O] = E), E > n)) b += 2;
                  else if (w > i) h += 2;
                  else if (d) {
                    if ((j = c + p - y) >= 0 && j < s && -1 !== l[j])
                      if (E >= (x = n - l[j])) return o(e, t, E, w);
                  }
                }
                for (var k = -g + v; k <= g - m; k += 2) {
                  for (
                    var x,
                      j = c + k,
                      C =
                        (x =
                          k === -g || (k !== g && l[j - 1] < l[j + 1])
                            ? l[j + 1]
                            : l[j - 1] + 1) - k;
                    x < n &&
                    C < i &&
                    e.charAt(n - x - 1) === t.charAt(i - C - 1);

                  )
                    x++, C++;
                  if (((l[j] = x), x > n)) m += 2;
                  else if (C > i) v += 2;
                  else if (!d) {
                    if ((O = c + p - k) >= 0 && O < s && -1 !== u[O]) {
                      var E;
                      w = c + (E = u[O]) - O;
                      if (E >= (x = n - x)) return o(e, t, E, w);
                    }
                  }
                }
              }
              return [
                [r, e],
                [1, t],
              ];
            })(e, t);
          })(
            (e = e.substring(0, e.length - f)),
            (t = t.substring(0, t.length - f))
          );
        return d && b.unshift([0, d]), h && b.push([0, h]), c(b, u), b;
      }

      function o(e, t, r, o) {
        var i = e.substring(0, r),
          a = t.substring(0, o),
          c = e.substring(r),
          s = t.substring(o),
          u = n(i, a),
          l = n(c, s);
        return u.concat(l);
      }

      function i(e, t) {
        if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
        for (var r = 0, n = Math.min(e.length, t.length), o = n, i = 0; r < o; )
          e.substring(i, o) == t.substring(i, o) ? (i = r = o) : (n = o),
            (o = Math.floor((n - r) / 2 + r));
        return s(e.charCodeAt(o - 1)) && o--, o;
      }

      function a(e, t) {
        if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
        for (var r = 0, n = Math.min(e.length, t.length), o = n, i = 0; r < o; )
          e.substring(e.length - o, e.length - i) ==
          t.substring(t.length - o, t.length - i)
            ? (i = r = o)
            : (n = o),
            (o = Math.floor((n - r) / 2 + r));
        return u(e.charCodeAt(e.length - o)) && o--, o;
      }

      function c(e, t) {
        e.push([0, '']);
        for (var n, o = 0, s = 0, u = 0, p = '', d = ''; o < e.length; )
          if (o < e.length - 1 && !e[o][1]) e.splice(o, 1);
          else
            switch (e[o][0]) {
              case 1:
                u++, (d += e[o][1]), o++;
                break;
              case r:
                s++, (p += e[o][1]), o++;
                break;
              case 0:
                var h = o - u - s - 1;
                if (t) {
                  if (h >= 0 && f(e[h][1])) {
                    var b = e[h][1].slice(-1);
                    if (
                      ((e[h][1] = e[h][1].slice(0, -1)),
                      (p = b + p),
                      (d = b + d),
                      !e[h][1])
                    ) {
                      e.splice(h, 1), o--;
                      var v = h - 1;
                      e[v] && 1 === e[v][0] && (u++, (d = e[v][1] + d), v--),
                        e[v] && e[v][0] === r && (s++, (p = e[v][1] + p), v--),
                        (h = v);
                    }
                  }
                  if (l(e[o][1])) {
                    b = e[o][1].charAt(0);
                    (e[o][1] = e[o][1].slice(1)), (p += b), (d += b);
                  }
                }
                if (o < e.length - 1 && !e[o][1]) {
                  e.splice(o, 1);
                  break;
                }
                if (p.length > 0 || d.length > 0) {
                  p.length > 0 &&
                    d.length > 0 &&
                    (0 !== (n = i(d, p)) &&
                      (h >= 0
                        ? (e[h][1] += d.substring(0, n))
                        : (e.splice(0, 0, [0, d.substring(0, n)]), o++),
                      (d = d.substring(n)),
                      (p = p.substring(n))),
                    0 !== (n = a(d, p)) &&
                      ((e[o][1] = d.substring(d.length - n) + e[o][1]),
                      (d = d.substring(0, d.length - n)),
                      (p = p.substring(0, p.length - n))));
                  var m = u + s;
                  0 === p.length && 0 === d.length
                    ? (e.splice(o - m, m), (o -= m))
                    : 0 === p.length
                    ? (e.splice(o - m, m, [1, d]), (o = o - m + 1))
                    : 0 === d.length
                    ? (e.splice(o - m, m, [r, p]), (o = o - m + 1))
                    : (e.splice(o - m, m, [r, p], [1, d]), (o = o - m + 2));
                }
                0 !== o && 0 === e[o - 1][0]
                  ? ((e[o - 1][1] += e[o][1]), e.splice(o, 1))
                  : o++,
                  (u = 0),
                  (s = 0),
                  (p = ''),
                  (d = '');
            }
        '' === e[e.length - 1][1] && e.pop();
        var g = !1;
        for (o = 1; o < e.length - 1; )
          0 === e[o - 1][0] &&
            0 === e[o + 1][0] &&
            (e[o][1].substring(e[o][1].length - e[o - 1][1].length) ===
            e[o - 1][1]
              ? ((e[o][1] =
                  e[o - 1][1] +
                  e[o][1].substring(0, e[o][1].length - e[o - 1][1].length)),
                (e[o + 1][1] = e[o - 1][1] + e[o + 1][1]),
                e.splice(o - 1, 1),
                (g = !0))
              : e[o][1].substring(0, e[o + 1][1].length) == e[o + 1][1] &&
                ((e[o - 1][1] += e[o + 1][1]),
                (e[o][1] = e[o][1].substring(e[o + 1][1].length) + e[o + 1][1]),
                e.splice(o + 1, 1),
                (g = !0))),
            o++;
        g && c(e, t);
      }

      function s(e) {
        return e >= 55296 && e <= 56319;
      }

      function u(e) {
        return e >= 56320 && e <= 57343;
      }

      function l(e) {
        return u(e.charCodeAt(0));
      }

      function f(e) {
        return s(e.charCodeAt(e.length - 1));
      }

      function p(e, t, n, o) {
        return f(e) || l(o)
          ? null
          : (function (e) {
              for (var t = [], r = 0; r < e.length; r++)
                e[r][1].length > 0 && t.push(e[r]);
              return t;
            })([
              [0, e],
              [r, t],
              [1, n],
              [0, o],
            ]);
      }

      function d(e, t, r) {
        return n(e, t, r, !0);
      }
      (d.INSERT = 1), (d.DELETE = r), (d.EQUAL = 0), (e.exports = d);
    },
    Z5Wq: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      }),
        (t.strPosToUni = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e.length,
              r = 0,
              n = 0;
            n < t;
            n++
          ) {
            var o = e.charCodeAt(n);
            o >= 55296 && o <= 57343 && (r++, n++);
          }
          if (n !== t) throw Error('Invalid offset - splits unicode bytes');
          return n - r;
        }),
        (t.uniToStrPos = function (e, t) {
          for (var r = 0; t > 0; t--) {
            var n = e.charCodeAt(r);
            r += n >= 55296 && n <= 57343 ? 2 : 1;
          }
          return r;
        });
    },
    cC09: function (e, t, r) {
      var n;
      (n = function (e) {
        e.version = '1.2.0';
        var t = (function () {
          for (var e = 0, t = new Array(256), r = 0; 256 != r; ++r)
            (e =
              1 &
              (e =
                1 &
                (e =
                  1 &
                  (e =
                    1 &
                    (e =
                      1 &
                      (e =
                        1 &
                        (e =
                          1 &
                          (e = 1 & (e = r) ? -306674912 ^ (e >>> 1) : e >>> 1)
                            ? -306674912 ^ (e >>> 1)
                            : e >>> 1)
                          ? -306674912 ^ (e >>> 1)
                          : e >>> 1)
                        ? -306674912 ^ (e >>> 1)
                        : e >>> 1)
                      ? -306674912 ^ (e >>> 1)
                      : e >>> 1)
                    ? -306674912 ^ (e >>> 1)
                    : e >>> 1)
                  ? -306674912 ^ (e >>> 1)
                  : e >>> 1)
                ? -306674912 ^ (e >>> 1)
                : e >>> 1),
              (t[r] = e);
          return 'undefined' !== typeof Int32Array ? new Int32Array(t) : t;
        })();
        (e.table = t),
          (e.bstr = function (e, r) {
            for (var n = -1 ^ r, o = e.length - 1, i = 0; i < o; )
              n =
                ((n = (n >>> 8) ^ t[255 & (n ^ e.charCodeAt(i++))]) >>> 8) ^
                t[255 & (n ^ e.charCodeAt(i++))];
            return (
              i === o && (n = (n >>> 8) ^ t[255 & (n ^ e.charCodeAt(i))]),
              -1 ^ n
            );
          }),
          (e.buf = function (e, r) {
            if (e.length > 1e4)
              return (function (e, r) {
                for (var n = -1 ^ r, o = e.length - 7, i = 0; i < o; )
                  n =
                    ((n =
                      ((n =
                        ((n =
                          ((n =
                            ((n =
                              ((n =
                                ((n = (n >>> 8) ^ t[255 & (n ^ e[i++])]) >>>
                                  8) ^
                                t[255 & (n ^ e[i++])]) >>>
                                8) ^
                              t[255 & (n ^ e[i++])]) >>>
                              8) ^
                            t[255 & (n ^ e[i++])]) >>>
                            8) ^
                          t[255 & (n ^ e[i++])]) >>>
                          8) ^
                        t[255 & (n ^ e[i++])]) >>>
                        8) ^
                      t[255 & (n ^ e[i++])]) >>>
                      8) ^
                    t[255 & (n ^ e[i++])];
                for (; i < o + 7; ) n = (n >>> 8) ^ t[255 & (n ^ e[i++])];
                return -1 ^ n;
              })(e, r);
            for (var n = -1 ^ r, o = e.length - 3, i = 0; i < o; )
              n =
                ((n =
                  ((n =
                    ((n = (n >>> 8) ^ t[255 & (n ^ e[i++])]) >>> 8) ^
                    t[255 & (n ^ e[i++])]) >>>
                    8) ^
                  t[255 & (n ^ e[i++])]) >>>
                  8) ^
                t[255 & (n ^ e[i++])];
            for (; i < o + 3; ) n = (n >>> 8) ^ t[255 & (n ^ e[i++])];
            return -1 ^ n;
          }),
          (e.str = function (e, r) {
            for (var n, o, i = -1 ^ r, a = 0, c = e.length; a < c; )
              (n = e.charCodeAt(a++)) < 128
                ? (i = (i >>> 8) ^ t[255 & (i ^ n)])
                : n < 2048
                ? (i =
                    ((i =
                      (i >>> 8) ^ t[255 & (i ^ (192 | ((n >> 6) & 31)))]) >>>
                      8) ^
                    t[255 & (i ^ (128 | (63 & n)))])
                : n >= 55296 && n < 57344
                ? ((n = 64 + (1023 & n)),
                  (o = 1023 & e.charCodeAt(a++)),
                  (i =
                    ((i =
                      ((i =
                        ((i =
                          (i >>> 8) ^ t[255 & (i ^ (240 | ((n >> 8) & 7)))]) >>>
                          8) ^
                        t[255 & (i ^ (128 | ((n >> 2) & 63)))]) >>>
                        8) ^
                      t[
                        255 & (i ^ (128 | ((o >> 6) & 15) | ((3 & n) << 4)))
                      ]) >>>
                      8) ^
                    t[255 & (i ^ (128 | (63 & o)))]))
                : (i =
                    ((i =
                      ((i =
                        (i >>> 8) ^ t[255 & (i ^ (224 | ((n >> 12) & 15)))]) >>>
                        8) ^
                      t[255 & (i ^ (128 | ((n >> 6) & 63)))]) >>>
                      8) ^
                    t[255 & (i ^ (128 | (63 & n)))]);
            return -1 ^ i;
          });
      }),
        'undefined' === typeof DO_NOT_EXPORT_CRC ? n(t) : n({});
    },
    'cHV+': function (e, t, r) {
      'use strict';
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var o = r('Z5Wq'),
        i = n(r('HtvZ')),
        a = n(r('qpVQ')),
        c = {
          create: function (e) {
            return e;
          },
          toString: function (e) {
            return e;
          },
          builder: function (e) {
            if ('string' !== typeof e)
              throw Error('Invalid document snapshot: ' + e);
            var t = [];
            return {
              skip: function (r) {
                var n = o.uniToStrPos(e, r);
                if (n > e.length)
                  throw Error('The op is too long for this document');
                t.push(e.slice(0, n)), (e = e.slice(n));
              },
              append: function (e) {
                t.push(e);
              },
              del: function (t) {
                e = e.slice(o.uniToStrPos(e, t));
              },
              build: function () {
                return t.join('') + e;
              },
            };
          },
        },
        s = i.default(c),
        u = Object.assign({}, s, {
          api: a.default,
        });
      t.type = u;
      var l = r('HtvZ');
      t.makeType = l.default;
    },
    gfZM: function (e, t, r) {
      'use strict';
      (function (e) {
        var n = r('H+61'),
          o = r('UlJF'),
          i = (function () {
            function t(r, o) {
              if (
                (Object(n.a)(this, t),
                (this.asEncoding = {}),
                (this.asBuffer = null),
                o && 'string' === typeof r)
              )
                this.asEncoding[o] = r;
              else if (void 0 === r || null === r) this.asBuffer = e.alloc(0);
              else if (r instanceof e) this.asBuffer = r;
              else if ('string' === typeof r) this.asEncoding.utf8 = r;
              else if (r instanceof ArrayBuffer) this.asBuffer = e.from(r);
              else {
                if (r instanceof t) return r;
                r instanceof Uint8Array
                  ? (this.asBuffer = e.from(r))
                  : 'object' === typeof r &&
                    'object' === typeof r.asEncoding &&
                    null !== r.asEncoding &&
                    (r.asBuffer instanceof e || null === r.asBuffer) &&
                    ((this.asBuffer = r.asBuffer || null),
                    'string' === typeof r.asEncoding.base64 &&
                      (this.asEncoding = {
                        base64: r.asEncoding.base64,
                      }),
                    'string' === typeof r.asEncoding.utf8 &&
                      (this.asEncoding = {
                        utf8: r.asEncoding.utf8,
                      }));
              }
            }
            return (
              Object(o.a)(t, null, [
                {
                  key: 'from',
                  value: function (e, r) {
                    return new t(e, r);
                  },
                },
                {
                  key: 'isBuffer',
                  value: function (e) {
                    return e instanceof t;
                  },
                },
              ]),
              Object(o.a)(t, [
                {
                  key: 'toString',
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'utf8';
                    if (void 0 !== this.asEncoding[e])
                      return this.asEncoding[e];
                    var t = this.toBuffer(),
                      r = t.toString(e);
                    return (this.asEncoding[e] = r), r;
                  },
                },
                {
                  key: 'toJSON',
                  value: function () {
                    return {
                      asEncoding: {
                        base64: this.toString('base64'),
                      },
                      asBuffer: null,
                    };
                  },
                },
                {
                  key: 'toBuffer',
                  value: function () {
                    if (this.asBuffer) return this.asBuffer;
                    for (var t in this.asEncoding) {
                      var r = this.asEncoding[t];
                      if ('string' === typeof r) {
                        var n = e.from(r, t);
                        return (this.asBuffer = n), n;
                      }
                    }
                    return (this.asBuffer = e.alloc(0)), this.asBuffer;
                  },
                },
                {
                  key: 'length',
                  get: function () {
                    return void 0 !== this.asEncoding.utf8
                      ? this.asEncoding.utf8.length
                      : this.toBuffer().length;
                  },
                },
              ]),
              t
            );
          })();
        t.a = i;
      }.call(this, r('HDXh').Buffer));
    },
    qpVQ: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var n = r('Z5Wq');

      function o(e, t) {
        return {
          get: e,
          getLength: function () {
            return e().length;
          },
          insert: function (r, o, i) {
            var a = n.strPosToUni(e(), r);
            return t([a, o], i);
          },
          remove: function (r, o, i) {
            var a = n.strPosToUni(e(), r);
            return t(
              [
                a,
                {
                  d: o,
                },
              ],
              i
            );
          },
          _onOp: function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var n = e[r];
              switch (typeof n) {
                case 'number':
                  (t += n), n;
                  break;
                case 'string':
                  this.onInsert && this.onInsert(t, n), (t += n.length);
                  break;
                case 'object':
                  this.onRemove && this.onRemove(t, n.d), n.d;
              }
            }
          },
          onInsert: null,
          onRemove: null,
        };
      }
      (t.default = o),
        (o.provides = {
          text: !0,
        });
    },
    tSgl: function (e, t) {
      e.exports = {
        isHiddenFile: function (e) {
          return /^(\.env$|\.npm$|\.npm\/|__pycache__|\.cache|\.git$|\.git\/|\.upm$|\.upm\/|node_modules$|node_modules\/|_test_runner)/.test(
            e
          );
        },
        ignoredDirs: ['.git', '.upm', '.cache', '__pycache__', 'node_modules'],
      };
    },
  },
]);
//# sourceMappingURL=14a324b7279b25513837d6be720eb3c7fba6b5df.5e10e98cf12931bafd5a.js.map

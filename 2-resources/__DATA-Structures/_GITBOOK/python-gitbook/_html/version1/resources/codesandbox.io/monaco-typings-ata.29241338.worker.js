!(function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: r,
        });
    }),
    (n.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(t, '__esModule', {
          value: !0,
        });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', {
          enumerable: !0,
          value: t,
        }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = 'https://codesandbox.io/'),
    n(
      (n.s =
        '../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/embed/components/Content/Monaco/workers/fetch-dependency-typings.js')
    );
})({
  '../../node_modules/@babel/runtime/helpers/asyncToGenerator.js': function (
    t,
    e
  ) {
    function n(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (s) {
        return void n(s);
      }
      c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    t.exports = function (t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);

          function c(t) {
            n(a, o, i, c, u, 'next', t);
          }

          function u(t) {
            n(a, o, i, c, u, 'throw', t);
          }
          c(void 0);
        });
      };
    };
  },
  '../../node_modules/@babel/runtime/regenerator/index.js': function (t, e, n) {
    t.exports = n('../../node_modules/regenerator-runtime/runtime.js');
  },
  '../../node_modules/path-browserify/index.js': function (t, e, n) {
    'use strict';
    (function (e) {
      function n(t) {
        if ('string' !== typeof t)
          throw new TypeError(
            'Path must be a string. Received ' + JSON.stringify(t)
          );
      }

      function r(t, e) {
        for (var n, r = '', o = 0, i = -1, a = 0, c = 0; c <= t.length; ++c) {
          if (c < t.length) n = t.charCodeAt(c);
          else {
            if (47 === n) break;
            n = 47;
          }
          if (47 === n) {
            if (i === c - 1 || 1 === a);
            else if (i !== c - 1 && 2 === a) {
              if (
                r.length < 2 ||
                2 !== o ||
                46 !== r.charCodeAt(r.length - 1) ||
                46 !== r.charCodeAt(r.length - 2)
              )
                if (r.length > 2) {
                  var u = r.lastIndexOf('/');
                  if (u !== r.length - 1) {
                    -1 === u
                      ? ((r = ''), (o = 0))
                      : (o =
                          (r = r.slice(0, u)).length - 1 - r.lastIndexOf('/')),
                      (i = c),
                      (a = 0);
                    continue;
                  }
                } else if (2 === r.length || 1 === r.length) {
                  (r = ''), (o = 0), (i = c), (a = 0);
                  continue;
                }
              e && (r.length > 0 ? (r += '/..') : (r = '..'), (o = 2));
            } else
              r.length > 0
                ? (r += '/' + t.slice(i + 1, c))
                : (r = t.slice(i + 1, c)),
                (o = c - i - 1);
            (i = c), (a = 0);
          } else 46 === n && -1 !== a ? ++a : (a = -1);
        }
        return r;
      }
      var o = {
        resolve: function () {
          for (
            var t, o = '', i = !1, a = arguments.length - 1;
            a >= -1 && !i;
            a--
          ) {
            var c;
            a >= 0
              ? (c = arguments[a])
              : (void 0 === t && (t = e.cwd()), (c = t)),
              n(c),
              0 !== c.length &&
                ((o = c + '/' + o), (i = 47 === c.charCodeAt(0)));
          }
          return (
            (o = r(o, !i)),
            i ? (o.length > 0 ? '/' + o : '/') : o.length > 0 ? o : '.'
          );
        },
        normalize: function (t) {
          if ((n(t), 0 === t.length)) return '.';
          var e = 47 === t.charCodeAt(0),
            o = 47 === t.charCodeAt(t.length - 1);
          return (
            0 !== (t = r(t, !e)).length || e || (t = '.'),
            t.length > 0 && o && (t += '/'),
            e ? '/' + t : t
          );
        },
        isAbsolute: function (t) {
          return n(t), t.length > 0 && 47 === t.charCodeAt(0);
        },
        join: function () {
          if (0 === arguments.length) return '.';
          for (var t, e = 0; e < arguments.length; ++e) {
            var r = arguments[e];
            n(r), r.length > 0 && (void 0 === t ? (t = r) : (t += '/' + r));
          }
          return void 0 === t ? '.' : o.normalize(t);
        },
        relative: function (t, e) {
          if ((n(t), n(e), t === e)) return '';
          if ((t = o.resolve(t)) === (e = o.resolve(e))) return '';
          for (var r = 1; r < t.length && 47 === t.charCodeAt(r); ++r);
          for (
            var i = t.length, a = i - r, c = 1;
            c < e.length && 47 === e.charCodeAt(c);
            ++c
          );
          for (
            var u = e.length - c, s = a < u ? a : u, l = -1, f = 0;
            f <= s;
            ++f
          ) {
            if (f === s) {
              if (u > s) {
                if (47 === e.charCodeAt(c + f)) return e.slice(c + f + 1);
                if (0 === f) return e.slice(c + f);
              } else
                a > s &&
                  (47 === t.charCodeAt(r + f) ? (l = f) : 0 === f && (l = 0));
              break;
            }
            var h = t.charCodeAt(r + f);
            if (h !== e.charCodeAt(c + f)) break;
            47 === h && (l = f);
          }
          var d = '';
          for (f = r + l + 1; f <= i; ++f)
            (f !== i && 47 !== t.charCodeAt(f)) ||
              (0 === d.length ? (d += '..') : (d += '/..'));
          return d.length > 0
            ? d + e.slice(c + l)
            : ((c += l), 47 === e.charCodeAt(c) && ++c, e.slice(c));
        },
        _makeLong: function (t) {
          return t;
        },
        dirname: function (t) {
          if ((n(t), 0 === t.length)) return '.';
          for (
            var e = t.charCodeAt(0),
              r = 47 === e,
              o = -1,
              i = !0,
              a = t.length - 1;
            a >= 1;
            --a
          )
            if (47 === (e = t.charCodeAt(a))) {
              if (!i) {
                o = a;
                break;
              }
            } else i = !1;
          return -1 === o
            ? r
              ? '/'
              : '.'
            : r && 1 === o
            ? '//'
            : t.slice(0, o);
        },
        basename: function (t, e) {
          if (void 0 !== e && 'string' !== typeof e)
            throw new TypeError('"ext" argument must be a string');
          n(t);
          var r,
            o = 0,
            i = -1,
            a = !0;
          if (void 0 !== e && e.length > 0 && e.length <= t.length) {
            if (e.length === t.length && e === t) return '';
            var c = e.length - 1,
              u = -1;
            for (r = t.length - 1; r >= 0; --r) {
              var s = t.charCodeAt(r);
              if (47 === s) {
                if (!a) {
                  o = r + 1;
                  break;
                }
              } else
                -1 === u && ((a = !1), (u = r + 1)),
                  c >= 0 &&
                    (s === e.charCodeAt(c)
                      ? -1 === --c && (i = r)
                      : ((c = -1), (i = u)));
            }
            return (
              o === i ? (i = u) : -1 === i && (i = t.length), t.slice(o, i)
            );
          }
          for (r = t.length - 1; r >= 0; --r)
            if (47 === t.charCodeAt(r)) {
              if (!a) {
                o = r + 1;
                break;
              }
            } else -1 === i && ((a = !1), (i = r + 1));
          return -1 === i ? '' : t.slice(o, i);
        },
        extname: function (t) {
          n(t);
          for (
            var e = -1, r = 0, o = -1, i = !0, a = 0, c = t.length - 1;
            c >= 0;
            --c
          ) {
            var u = t.charCodeAt(c);
            if (47 !== u)
              -1 === o && ((i = !1), (o = c + 1)),
                46 === u
                  ? -1 === e
                    ? (e = c)
                    : 1 !== a && (a = 1)
                  : -1 !== e && (a = -1);
            else if (!i) {
              r = c + 1;
              break;
            }
          }
          return -1 === e ||
            -1 === o ||
            0 === a ||
            (1 === a && e === o - 1 && e === r + 1)
            ? ''
            : t.slice(e, o);
        },
        format: function (t) {
          if (null === t || 'object' !== typeof t)
            throw new TypeError(
              'The "pathObject" argument must be of type Object. Received type ' +
                typeof t
            );
          return (function (t, e) {
            var n = e.dir || e.root,
              r = e.base || (e.name || '') + (e.ext || '');
            return n ? (n === e.root ? n + r : n + t + r) : r;
          })('/', t);
        },
        parse: function (t) {
          n(t);
          var e = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: '',
          };
          if (0 === t.length) return e;
          var r,
            o = t.charCodeAt(0),
            i = 47 === o;
          i ? ((e.root = '/'), (r = 1)) : (r = 0);
          for (
            var a = -1, c = 0, u = -1, s = !0, l = t.length - 1, f = 0;
            l >= r;
            --l
          )
            if (47 !== (o = t.charCodeAt(l)))
              -1 === u && ((s = !1), (u = l + 1)),
                46 === o
                  ? -1 === a
                    ? (a = l)
                    : 1 !== f && (f = 1)
                  : -1 !== a && (f = -1);
            else if (!s) {
              c = l + 1;
              break;
            }
          return (
            -1 === a ||
            -1 === u ||
            0 === f ||
            (1 === f && a === u - 1 && a === c + 1)
              ? -1 !== u &&
                (e.base = e.name = 0 === c && i ? t.slice(1, u) : t.slice(c, u))
              : (0 === c && i
                  ? ((e.name = t.slice(1, a)), (e.base = t.slice(1, u)))
                  : ((e.name = t.slice(c, a)), (e.base = t.slice(c, u))),
                (e.ext = t.slice(a, u))),
            c > 0 ? (e.dir = t.slice(0, c - 1)) : i && (e.dir = '/'),
            e
          );
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      };
      (o.posix = o), (t.exports = o);
    }.call(this, n('../../node_modules/process/browser.js')));
  },
  '../../node_modules/process/browser.js': function (t, e) {
    var n,
      r,
      o = (t.exports = {});

    function i() {
      throw new Error('setTimeout has not been defined');
    }

    function a() {
      throw new Error('clearTimeout has not been defined');
    }

    function c(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = 'function' === typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        r = 'function' === typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var u,
      s = [],
      l = !1,
      f = -1;

    function h() {
      l &&
        u &&
        ((l = !1), u.length ? (s = u.concat(s)) : (f = -1), s.length && d());
    }

    function d() {
      if (!l) {
        var t = c(h);
        l = !0;
        for (var e = s.length; e; ) {
          for (u = s, s = []; ++f < e; ) u && u[f].run();
          (f = -1), (e = s.length);
        }
        (u = null),
          (l = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }

    function p(t, e) {
      (this.fun = t), (this.array = e);
    }

    function v() {}
    (o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      s.push(new p(t, e)), 1 !== s.length || l || c(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = v),
      (o.addListener = v),
      (o.once = v),
      (o.off = v),
      (o.removeListener = v),
      (o.removeAllListeners = v),
      (o.emit = v),
      (o.prependListener = v),
      (o.prependOnceListener = v),
      (o.listeners = function (t) {
        return [];
      }),
      (o.binding = function (t) {
        throw new Error('process.binding is not supported');
      }),
      (o.cwd = function () {
        return '/';
      }),
      (o.chdir = function (t) {
        throw new Error('process.chdir is not supported');
      }),
      (o.umask = function () {
        return 0;
      });
  },
  '../../node_modules/regenerator-runtime/runtime.js': function (t, e, n) {
    var r = (function (t) {
      'use strict';
      var e = Object.prototype,
        n = e.hasOwnProperty,
        r = 'function' === typeof Symbol ? Symbol : {},
        o = r.iterator || '@@iterator',
        i = r.asyncIterator || '@@asyncIterator',
        a = r.toStringTag || '@@toStringTag';

      function c(t, e, n, r) {
        var o = e && e.prototype instanceof l ? e : l,
          i = Object.create(o.prototype),
          a = new j(r || []);
        return (
          (i._invoke = (function (t, e, n) {
            var r = 'suspendedStart';
            return function (o, i) {
              if ('executing' === r)
                throw new Error('Generator is already running');
              if ('completed' === r) {
                if ('throw' === o) throw i;
                return E();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var c = w(a, n);
                  if (c) {
                    if (c === s) continue;
                    return c;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = 'executing';
                var l = u(t, e, n);
                if ('normal' === l.type) {
                  if (
                    ((r = n.done ? 'completed' : 'suspendedYield'), l.arg === s)
                  )
                    continue;
                  return {
                    value: l.arg,
                    done: n.done,
                  };
                }
                'throw' === l.type &&
                  ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
              }
            };
          })(t, n, a)),
          i
        );
      }

      function u(t, e, n) {
        try {
          return {
            type: 'normal',
            arg: t.call(e, n),
          };
        } catch (r) {
          return {
            type: 'throw',
            arg: r,
          };
        }
      }
      t.wrap = c;
      var s = {};

      function l() {}

      function f() {}

      function h() {}
      var d = {};
      d[o] = function () {
        return this;
      };
      var p = Object.getPrototypeOf,
        v = p && p(p(_([])));
      v && v !== e && n.call(v, o) && (d = v);
      var m = (h.prototype = l.prototype = Object.create(d));

      function g(t) {
        ['next', 'throw', 'return'].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }

      function y(t, e) {
        var r;
        this._invoke = function (o, i) {
          function a() {
            return new e(function (r, a) {
              !(function r(o, i, a, c) {
                var s = u(t[o], t, i);
                if ('throw' !== s.type) {
                  var l = s.arg,
                    f = l.value;
                  return f && 'object' === typeof f && n.call(f, '__await')
                    ? e.resolve(f.__await).then(
                        function (t) {
                          r('next', t, a, c);
                        },
                        function (t) {
                          r('throw', t, a, c);
                        }
                      )
                    : e.resolve(f).then(
                        function (t) {
                          (l.value = t), a(l);
                        },
                        function (t) {
                          return r('throw', t, a, c);
                        }
                      );
                }
                c(s.arg);
              })(o, i, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }

      function w(t, e) {
        var n = t.iterator[e.method];
        if (void 0 === n) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = 'return'),
              (e.arg = void 0),
              w(t, e),
              'throw' === e.method)
            )
              return s;
            (e.method = 'throw'),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return s;
        }
        var r = u(n, t.iterator, e.arg);
        if ('throw' === r.type)
          return (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), s;
        var o = r.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)),
              (e.delegate = null),
              s)
            : o
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            s);
      }

      function b(t) {
        var e = {
          tryLoc: t[0],
        };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }

      function x(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }

      function j(t) {
        (this.tryEntries = [
          {
            tryLoc: 'root',
          },
        ]),
          t.forEach(b, this),
          this.reset(!0);
      }

      function _(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ('function' === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              i = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return {
          next: E,
        };
      }

      function E() {
        return {
          value: void 0,
          done: !0,
        };
      }
      return (
        (f.prototype = m.constructor = h),
        (h.constructor = f),
        (h[a] = f.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function (t) {
          var e = 'function' === typeof t && t.constructor;
          return (
            !!e &&
            (e === f || 'GeneratorFunction' === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), a in t || (t[a] = 'GeneratorFunction')),
            (t.prototype = Object.create(m)),
            t
          );
        }),
        (t.awrap = function (t) {
          return {
            __await: t,
          };
        }),
        g(y.prototype),
        (y.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = y),
        (t.async = function (e, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new y(c(e, n, r, o), i);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(m),
        (m[a] = 'Generator'),
        (m[o] = function () {
          return this;
        }),
        (m.toString = function () {
          return '[object Generator]';
        }),
        (t.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = _),
        (j.prototype = {
          constructor: j,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(x),
              !t)
            )
              for (var e in this)
                't' === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;

            function r(n, r) {
              return (
                (a.type = 'throw'),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = 'next'), (e.arg = void 0)),
                !!r
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ('root' === i.tryLoc) return r('end');
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, 'catchLoc'),
                  u = n.call(i, 'finallyLoc');
                if (c && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, 'finallyLoc') &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ('break' === t || 'continue' === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = 'next'), (this.next = i.finallyLoc), s)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              s
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), x(n), s;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ('throw' === r.type) {
                  var o = r.arg;
                  x(n);
                }
                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = {
                iterator: _(t),
                resultName: e,
                nextLoc: n,
              }),
              'next' === this.method && (this.arg = void 0),
              s
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (o) {
      Function('r', 'regeneratorRuntime = r')(r);
    }
  },
  '../../node_modules/thread-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./src/embed/components/Content/Monaco/workers/fetch-dependency-typings.js':
    function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('../../node_modules/@babel/runtime/regenerator/index.js'),
        o = n.n(r),
        i = n('../../node_modules/@babel/runtime/helpers/asyncToGenerator.js'),
        a = n.n(i),
        c = n('../../node_modules/path-browserify/index.js'),
        u = n.n(c);
      self.importScripts([
        'https://cdnjs.cloudflare.com/ajax/libs/typescript/2.7.2/typescript.min.js',
      ]);
      var s = 'https://cdn.jsdelivr.net/',
        l = [],
        f = function (t, e, n) {
          n[t] = e;
        },
        h = new Map(),
        d = function (t) {
          var e = h.get(t);
          if (e) return e;
          var n = fetch(t)
            .then(function (t) {
              if (t.status >= 200 && t.status < 300) return Promise.resolve(t);
              var e = new Error(t.statusText || t.status);
              return (e.response = t), Promise.reject(e);
            })
            .then(function (t) {
              return t.text();
            });
          return h.set(t, n), n;
        },
        p = function (t, e, n) {
          return d(
            ''
              .concat(s, 'npm/@types/')
              .concat(t.replace('@', '').replace(/\//g, '__'), '/index.d.ts')
          ).then(function (e) {
            f('node_modules/@types/'.concat(t, '/index.d.ts'), e, n);
          });
        },
        v = function (t) {
          var e = {};
          return (
            t.forEach(function (t) {
              e[t.name] = t;
            }),
            e
          );
        },
        m = function (t, e) {
          var n = '/'.concat(e);
          return t[''.concat(n, '.d.ts')]
            ? ''.concat(e, '.d.ts')
            : t[''.concat(n, '.ts')]
            ? ''.concat(e, '.ts')
            : t[n]
            ? e
            : t[''.concat(n, '/index.d.ts')]
            ? ''.concat(e, '/index.d.ts')
            : e;
        },
        g = function t(e, n, r, o, i) {
          var a = u.a.join('node_modules', n, r);
          return o[a]
            ? null
            : d(''.concat(e, '/').concat(r)).then(function (c) {
                return o[a]
                  ? null
                  : (f(a, c, o),
                    Promise.all(
                      (function (t, e) {
                        var n = [],
                          r = self.ts.createSourceFile(
                            t,
                            e,
                            self.ts.ScriptTarget.Latest,
                            !0,
                            self.ts.ScriptKind.TS
                          );
                        return (
                          self.ts.forEachChild(r, function (t) {
                            switch (t.kind) {
                              case self.ts.SyntaxKind.ImportDeclaration:
                                n.push(t.moduleSpecifier.text);
                                break;
                              case self.ts.SyntaxKind.ExportDeclaration:
                                t.moduleSpecifier &&
                                  n.push(t.moduleSpecifier.text);
                            }
                          }),
                          n
                        );
                      })(r, c)
                        .filter(function (t) {
                          return t.startsWith('.');
                        })
                        .map(function (t) {
                          return u.a.join(u.a.dirname(r), t);
                        })
                        .map(function (t) {
                          return m(i, t);
                        })
                        .map(function (r) {
                          return t(e, n, r, o, i);
                        })
                    ));
              });
        };

      function y(t, e, n) {
        var r = 'https://data.jsdelivr.com/v1/package/npm/'
          .concat(t, '@')
          .concat(e, '/flat');
        return d(r)
          .then(function (t) {
            return JSON.parse(t);
          })
          .then(function (r) {
            var o = function (t, e) {
                return t.reduce(function (t, n) {
                  return e.test(n.name) && t.push(n.name), t;
                }, []);
              },
              i = o(r.files, /\.d\.ts$/);
            if ((0 === i.length && (i = o(r.files, /\.ts$/)), 0 === i.length))
              throw new Error('No inline typings found.');
            return Promise.all(
              i.map(function (r) {
                return d(
                  'https://cdn.jsdelivr.net/npm/'
                    .concat(t, '@')
                    .concat(e)
                    .concat(r)
                )
                  .then(function (e) {
                    return f('node_modules/'.concat(t).concat(r), e, n);
                  })
                  .catch(function () {});
              })
            );
          });
      }

      function w(t, e, n) {
        var r = ''.concat(s, 'npm/').concat(t, '@').concat(e);
        return d(''.concat(r, '/package.json'))
          .then(function (t) {
            return JSON.parse(t);
          })
          .then(function (o) {
            var i = o.typings || o.types;
            if (i)
              return (
                f(
                  'node_modules/'.concat(t, '/package.json'),
                  JSON.stringify(o),
                  n
                ),
                (function (t, e, n) {
                  return d(
                    'https://data.jsdelivr.com/v1/package/npm/'
                      .concat(t, '@')
                      .concat(e, '/flat')
                  )
                    .then(function (t) {
                      return JSON.parse(t);
                    })
                    .then(function (t) {
                      return t.files.filter(function (t) {
                        return t.name.startsWith(n);
                      });
                    })
                    .then(v);
                })(t, e, u.a.join('/', u.a.dirname(i))).then(function (e) {
                  return g(r, t, m(e, i), n, e);
                })
              );
            throw new Error('No typings field in package.json');
          });
      }

      function b() {
        return (b = a()(
          o.a.mark(function t(e) {
            var n, r;
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = {}),
                      (r = Object.keys(e)),
                      (t.next = 4),
                      Promise.all(
                        r.map(
                          (function () {
                            var t = a()(
                              o.a.mark(function t(r) {
                                var i;
                                return o.a.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (((t.prev = 0), l.includes(r))) {
                                            t.next = 8;
                                            break;
                                          }
                                          return (
                                            l.push(r),
                                            (t.next = 5),
                                            d(
                                              'https://data.jsdelivr.com/v1/package/resolve/npm/'
                                                .concat(r, '@')
                                                .concat(e[r])
                                            )
                                              .then(function (t) {
                                                return JSON.parse(t);
                                              })
                                              .then(function (t) {
                                                return t.version;
                                              })
                                          );
                                        case 5:
                                          return (
                                            (i = t.sent),
                                            (t.next = 8),
                                            w(r, i, n).catch(function () {
                                              return y(r, i, n).catch(
                                                function () {
                                                  return p(r, 0, n);
                                                }
                                              );
                                            })
                                          );
                                        case 8:
                                          t.next = 13;
                                          break;
                                        case 10:
                                          (t.prev = 10), (t.t0 = t.catch(0));
                                        case 13:
                                        case 'end':
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 10]]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )
                      )
                    );
                  case 4:
                    self.postMessage(n);
                  case 5:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      self.addEventListener('message', function (t) {
        !(function (t) {
          b.apply(this, arguments);
        })(t.data.dependencies);
      });
    },
});
//# sourceMappingURL=monaco-typings-ata.29241338.worker.js.map

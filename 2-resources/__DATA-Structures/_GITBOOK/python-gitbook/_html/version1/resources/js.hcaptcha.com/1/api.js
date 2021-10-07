var hcaptcha = (function () {
  'use strict';

  function e(e) {
    var t = this.constructor;
    return this.then(
      function (n) {
        return t.resolve(e()).then(function () {
          return n;
        });
      },
      function (n) {
        return t.resolve(e()).then(function () {
          return t.reject(n);
        });
      }
    );
  }

  function t(e) {
    return new this(function (t, n) {
      if (!e || 'undefined' == typeof e.length)
        return n(
          new TypeError(
            typeof e +
              ' ' +
              e +
              ' is not iterable(cannot read property Symbol(Symbol.iterator))'
          )
        );
      var i = Array.prototype.slice.call(e);
      if (0 === i.length) return t([]);
      var o = i.length;

      function r(e, n) {
        if (n && ('object' == typeof n || 'function' == typeof n)) {
          var a = n.then;
          if ('function' == typeof a)
            return void a.call(
              n,
              function (t) {
                r(e, t);
              },
              function (n) {
                (i[e] = {
                  status: 'rejected',
                  reason: n,
                }),
                  0 == --o && t(i);
              }
            );
        }
        (i[e] = {
          status: 'fulfilled',
          value: n,
        }),
          0 == --o && t(i);
      }
      for (var a = 0; a < i.length; a++) r(a, i[a]);
    });
  }
  var n = setTimeout;

  function i(e) {
    return Boolean(e && 'undefined' != typeof e.length);
  }

  function o() {}

  function r(e) {
    if (!(this instanceof r))
      throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof e) throw new TypeError('not a function');
    (this._state = 0),
      (this._handled = !1),
      (this._value = undefined),
      (this._deferreds = []),
      d(e, this);
  }

  function a(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        r._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var i;
            try {
              i = n(e._value);
            } catch (o) {
              return void h(t.promise, o);
            }
            s(t.promise, i);
          } else (1 === e._state ? s : h)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }

  function s(e, t) {
    try {
      if (t === e)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (t && ('object' == typeof t || 'function' == typeof t)) {
        var n = t.then;
        if (t instanceof r) return (e._state = 3), (e._value = t), void c(e);
        if ('function' == typeof n)
          return void d(
            ((i = n),
            (o = t),
            function () {
              i.apply(o, arguments);
            }),
            e
          );
      }
      (e._state = 1), (e._value = t), c(e);
    } catch (a) {
      h(e, a);
    }
    var i, o;
  }

  function h(e, t) {
    (e._state = 2), (e._value = t), c(e);
  }

  function c(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      r._immediateFn(function () {
        e._handled || r._unhandledRejectionFn(e._value);
      });
    for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
    e._deferreds = null;
  }

  function l(e, t, n) {
    (this.onFulfilled = 'function' == typeof e ? e : null),
      (this.onRejected = 'function' == typeof t ? t : null),
      (this.promise = n);
  }

  function d(e, t) {
    var n = !1;
    try {
      e(
        function (e) {
          n || ((n = !0), s(t, e));
        },
        function (e) {
          n || ((n = !0), h(t, e));
        }
      );
    } catch (i) {
      if (n) return;
      (n = !0), h(t, i);
    }
  }
  (r.prototype['catch'] = function (e) {
    return this.then(null, e);
  }),
    (r.prototype.then = function (e, t) {
      var n = new this.constructor(o);
      return a(this, new l(e, t, n)), n;
    }),
    (r.prototype['finally'] = e),
    (r.all = function (e) {
      return new r(function (t, n) {
        if (!i(e)) return n(new TypeError('Promise.all accepts an array'));
        var o = Array.prototype.slice.call(e);
        if (0 === o.length) return t([]);
        var r = o.length;

        function a(e, i) {
          try {
            if (i && ('object' == typeof i || 'function' == typeof i)) {
              var s = i.then;
              if ('function' == typeof s)
                return void s.call(
                  i,
                  function (t) {
                    a(e, t);
                  },
                  n
                );
            }
            (o[e] = i), 0 == --r && t(o);
          } catch (h) {
            n(h);
          }
        }
        for (var s = 0; s < o.length; s++) a(s, o[s]);
      });
    }),
    (r.allSettled = t),
    (r.resolve = function (e) {
      return e && 'object' == typeof e && e.constructor === r
        ? e
        : new r(function (t) {
            t(e);
          });
    }),
    (r.reject = function (e) {
      return new r(function (t, n) {
        n(e);
      });
    }),
    (r.race = function (e) {
      return new r(function (t, n) {
        if (!i(e)) return n(new TypeError('Promise.race accepts an array'));
        for (var o = 0, a = e.length; o < a; o++) r.resolve(e[o]).then(t, n);
      });
    }),
    (r._immediateFn =
      ('function' == typeof setImmediate &&
        function (e) {
          setImmediate(e);
        }) ||
      function (e) {
        n(e, 0);
      }),
    (r._unhandledRejectionFn = function (e) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', e);
    });
  var u = (function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw new Error('unable to locate global object');
  })();
  'function' != typeof u.Promise
    ? (u.Promise = r)
    : u.Promise.prototype['finally']
    ? u.Promise.allSettled || (u.Promise.allSettled = t)
    : (u.Promise.prototype['finally'] = e);
  var p,
    f = (function () {
      if ('undefined' != typeof self) return self;
      if ('undefined' != typeof window) return window;
      if ('undefined' != typeof global) return global;
      throw new Error('unable to locate global object');
    })();
  f.Promise.allSettled || (f.Promise.allSettled = t),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = (function (e) {
        return function (t, n) {
          if (null === this || this === undefined)
            throw TypeError(
              'Array.prototype.indexOf called on null or undefined'
            );
          var i = e(this),
            o = i.length >>> 0,
            r = Math.min(0 | n, o);
          if (r < 0) r = Math.max(0, o + r);
          else if (r >= o) return -1;
          if (void 0 === t) {
            for (; r !== o; ++r) if (void 0 === i[r] && r in i) return r;
          } else if (t != t) {
            for (; r !== o; ++r) if (i[r] != i[r]) return r;
          } else for (; r !== o; ++r) if (i[r] === t) return r;
          return -1;
        };
      })(Object)),
    Array.isArray ||
      (Array.isArray = function (e) {
        return '[object Array]' === Object.prototype.toString.call(e);
      }),
    document.getElementsByClassName ||
      (window.Element.prototype.getElementsByClassName =
        document.constructor.prototype.getElementsByClassName =
          function (e) {
            if (document.querySelectorAll)
              return document.querySelectorAll('.' + e);
            for (
              var t = document.getElementsByTagName('*'),
                n = new RegExp('(^|\\s)' + e + '(\\s|$)'),
                i = [],
                o = 0;
              o < t.length;
              o++
            )
              n.test(t[o].className) && i.push(t[o]);
            return i;
          }),
    String.prototype.startsWith ||
      (String.prototype.startsWith = function (e, t) {
        return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
      }),
    String.prototype.endsWith ||
      (String.prototype.endsWith = function (e, t) {
        return (
          (t === undefined || t > this.length) && (t = this.length),
          this.substring(t - e.length, t) === e
        );
      });
  try {
    if (
      Object.defineProperty &&
      Object.getOwnPropertyDescriptor &&
      Object.getOwnPropertyDescriptor(Element.prototype, 'textContent') &&
      !Object.getOwnPropertyDescriptor(Element.prototype, 'textContent').get
    ) {
      var m = Object.getOwnPropertyDescriptor(Element.prototype, 'innerText');
      Object.defineProperty(Element.prototype, 'textContent', {
        get: function () {
          return m.get.call(this);
        },
        set: function (e) {
          m.set.call(this, e);
        },
      });
    }
  } catch (qt) {}
  Function.prototype.bind ||
    (Function.prototype.bind = function (e) {
      if ('function' != typeof this)
        throw new TypeError('Function.prototype.bind: Item Can Not Be Bound.');
      var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        i = function () {},
        o = function () {
          return n.apply(
            this instanceof i ? this : e,
            t.concat(Array.prototype.slice.call(arguments))
          );
        };
      return (
        this.prototype && (i.prototype = this.prototype),
        (o.prototype = new i()),
        o
      );
    }),
    'function' != typeof Object.create &&
      (Object.create = function (e, t) {
        function n() {}
        if (((n.prototype = e), 'object' == typeof t))
          for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        return new n();
      }),
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      }),
    window.console || (window.console = {});
  for (
    var g,
      y,
      v,
      w,
      b,
      _,
      x = ['error', 'info', 'log', 'show', 'table', 'trace', 'warn'],
      C = function (e) {},
      k = x.length;
    --k > -1;

  )
    (p = x[k]), window.console[p] || (window.console[p] = C);
  if (window.atob)
    try {
      window.atob(' ');
    } catch (Ht) {
      window.atob =
        ((g = window.atob),
        ((y = function (e) {
          return g(String(e).replace(/[\t\n\f\r ]+/g, ''));
        }).original = g),
        y);
    }
  else {
    var E = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      S =
        /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    window.atob = function (e) {
      if (((e = String(e).replace(/[\t\n\f\r ]+/g, '')), !S.test(e)))
        throw new TypeError(
          "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
        );
      var t, n, i;
      e += '=='.slice(2 - (3 & e.length));
      for (var o = '', r = 0; r < e.length; )
        (t =
          (E.indexOf(e.charAt(r++)) << 18) |
          (E.indexOf(e.charAt(r++)) << 12) |
          ((n = E.indexOf(e.charAt(r++))) << 6) |
          (i = E.indexOf(e.charAt(r++)))),
          (o +=
            64 === n
              ? String.fromCharCode((t >> 16) & 255)
              : 64 === i
              ? String.fromCharCode((t >> 16) & 255, (t >> 8) & 255)
              : String.fromCharCode((t >> 16) & 255, (t >> 8) & 255, 255 & t));
      return o;
    };
  }
  if (
    (Event.prototype.preventDefault ||
      (Event.prototype.preventDefault = function () {
        this.returnValue = !1;
      }),
    Event.prototype.stopPropagation ||
      (Event.prototype.stopPropagation = function () {
        this.cancelBubble = !0;
      }),
    window.Prototype && Array.prototype.toJSON)
  ) {
    console.error(
      '[hCaptcha] Custom JSON polyfill detected, please remove to ensure hCaptcha works properly'
    );
    var O = Array.prototype.toJSON,
      P = JSON.stringify;
    JSON.stringify = function (e) {
      try {
        return delete Array.prototype.toJSON, P(e);
      } finally {
        Array.prototype.toJSON = O;
      }
    };
  }
  Object.keys ||
    (Object.keys =
      ((v = Object.prototype.hasOwnProperty),
      (w = !Object.prototype.propertyIsEnumerable.call(
        {
          toString: null,
        },
        'toString'
      )),
      (_ = (b = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor',
      ]).length),
      function (e) {
        if ('function' != typeof e && ('object' != typeof e || null === e))
          throw new TypeError('Object.keys called on non-object');
        var t,
          n,
          i = [];
        for (t in e) v.call(e, t) && i.push(t);
        if (w) for (n = 0; n < _; n++) v.call(e, b[n]) && i.push(b[n]);
        return i;
      }));
  var I = [],
    B = [],
    T = {
      add: function (e) {
        I.push(e);
      },
      remove: function (e) {
        for (var t = !1, n = I.length; --n > -1 && !1 === t; )
          I[n].id === e.id && ((t = I[n]), I.splice(n, 1));
        return t;
      },
      each: function (e) {
        for (var t = -1; ++t < I.length; ) e(I[t]);
      },
      isValidId: function (e) {
        for (var t = !1, n = -1; ++n < I.length && !1 === t; )
          I[n].id === e && (t = !0);
        return t;
      },
      getByIndex: function (e) {
        for (var t = !1, n = -1; ++n < I.length && !1 === t; )
          n === e && (t = I[n]);
        return t;
      },
      getById: function (e) {
        for (var t = !1, n = -1; ++n < I.length && !1 === t; )
          I[n].id === e && (t = I[n]);
        return t;
      },
      getCaptchaIdList: function () {
        var e = [];
        return (
          T.each(function (t) {
            e.push(t.id);
          }),
          e
        );
      },
      pushSession: function (e, t) {
        B.push([e, t]), B.length > 10 && B.splice(0, B.length - 10);
      },
      getSession: function () {
        return B;
      },
    };
  var j = [
      {
        family: 'UC Browser',
        patterns: ['(UC? ?Browser|UCWEB|U3)[ /]?(\\d+)\\.(\\d+)\\.(\\d+)'],
      },
      {
        family: 'Opera',
        name_replace: 'Opera Mobile',
        patterns: [
          '(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)',
          '(Opera)/(\\d+)\\.(\\d+).+Opera Mobi',
          'Opera Mobi.+(Opera)(?:/|\\s+)(\\d+)\\.(\\d+)',
          'Opera Mobi',
          '(?:Mobile Safari).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)',
        ],
      },
      {
        family: 'Opera',
        name_replace: 'Opera Mini',
        patterns: [
          '(Opera Mini)(?:/att|)/?(\\d+|)(?:\\.(\\d+)|)(?:\\.(\\d+)|)',
          '(OPiOS)/(\\d+).(\\d+).(\\d+)',
        ],
      },
      {
        family: 'Opera',
        name_replace: 'Opera Neon',
        patterns: ['Chrome/.+( MMS)/(\\d+).(\\d+).(\\d+)'],
      },
      {
        name_replace: 'Opera',
        patterns: [
          '(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
          '(?:Chrome).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)',
        ],
      },
      {
        family: 'Firefox',
        name_replace: 'Firefox Mobile',
        patterns: [
          '(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)',
          '(Fennec)/(\\d+)\\.(\\d+)(pre)',
          '(Fennec)/(\\d+)\\.(\\d+)',
          '(?:Mobile|Tablet);.*(Firefox)/(\\d+)\\.(\\d+)',
          '(FxiOS)/(\\d+)\\.(\\d+)(\\.(\\d+)|)(\\.(\\d+)|)',
        ],
      },
      {
        name_replace: 'Coc Coc',
        patterns: ['(coc_coc_browser)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)'],
      },
      {
        family: 'QQ',
        name_replace: 'QQ Mini',
        patterns: ['(MQQBrowser/Mini)(?:(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)'],
      },
      {
        family: 'QQ',
        name_replace: 'QQ Mobile',
        patterns: ['(MQQBrowser)(?:/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)'],
      },
      {
        name_replace: 'QQ',
        patterns: [
          '(QQBrowser)(?:/(\\d+)(?:\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)|)',
        ],
      },
      {
        family: 'Edge',
        name: 'Edge Mobile',
        patterns: [
          'Windows Phone .*(Edge)/(\\d+)\\.(\\d+)',
          '(EdgiOS|EdgA)/(\\d+)\\.(\\d+).(\\d+).(\\d+)',
        ],
      },
      {
        name_replace: 'Edge',
        patterns: ['(Edge|Edg)/(\\d+)(?:\\.(\\d+)|)'],
      },
      {
        patterns: ['(Puffin)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)'],
      },
      {
        family: 'Chrome',
        name_replace: 'Chrome Mobile',
        patterns: [
          'Version/.+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
          '; wv\\).+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
          '(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
          '(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
          '(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile(?:[ /]|$)',
          ' Mobile .*(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)',
        ],
      },
      {
        family: 'Yandex',
        name_replace: 'Yandex Mobile',
        patterns: ['(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+).*Mobile'],
      },
      {
        name_replace: 'Yandex',
        patterns: ['(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)'],
      },
      {
        patterns: [
          '(Vivaldi)/(\\d+)\\.(\\d+)',
          '(Vivaldi)/(\\d+)\\.(\\d+)\\.(\\d+)',
        ],
      },
      {
        name_replace: 'Brave',
        patterns: ['(brave)/(\\d+)\\.(\\d+)\\.(\\d+) Chrome'],
      },
      {
        family: 'Chrome',
        patterns: [
          '(Chromium|Chrome)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)',
        ],
      },
      {
        name_replace: 'Internet Explorer Mobile',
        patterns: ['(IEMobile)[ /](\\d+)\\.(\\d+)'],
      },
      {
        family: 'Safari',
        name_replace: 'Safari Mobile',
        patterns: [
          '(iPod|iPhone|iPad).+Version/(d+).(d+)(?:.(d+)|).*[ +]Safari',
          '(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).* AppleNews\\/\\d+\\.\\d+\\.\\d+?',
          '(iPod|iPhone|iPad).+Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
          '(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile.*[ +]Safari',
          '(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile',
          '(iPod|iPod touch|iPhone|iPad).* Safari',
          '(iPod|iPod touch|iPhone|iPad)',
        ],
      },
      {
        name_replace: 'Safari',
        patterns: ['(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|).*Safari/'],
      },
      {
        name_replace: 'Internet Explorer',
        patterns: ['(Trident)/(7|8).(0)'],
        major_replace: '11',
      },
      {
        name_replace: 'Internet Explorer',
        patterns: ['(Trident)/(6)\\.(0)'],
        major_replace: '10',
      },
      {
        name_replace: 'Internet Explorer',
        patterns: ['(Trident)/(5)\\.(0)'],
        major_replace: '9',
      },
      {
        name_replace: 'Internet Explorer',
        patterns: ['(Trident)/(4)\\.(0)'],
        major_replace: '8',
      },
      {
        family: 'Firefox',
        patterns: [
          '(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)',
          '(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*|)',
        ],
      },
    ],
    M = [
      {
        family: 'Windows',
        name_replace: 'Windows Phone',
        patterns: [
          '(Windows Phone) (?:OS[ /])?(\\d+)\\.(\\d+)',
          '^UCWEB.*; (wds) (\\d+)\\.(d+)(?:\\.(\\d+)|);',
          '^UCWEB.*; (wds) (\\d+)\\.(\\d+)(?:\\.(\\d+)|);',
        ],
      },
      {
        family: 'Windows',
        name_replace: 'Windows Mobile',
        patterns: ['(Windows ?Mobile)'],
      },
      {
        name_replace: 'Android',
        patterns: [
          '(Android)[ \\-/](\\d+)(?:\\.(\\d+)|)(?:[.\\-]([a-z0-9]+)|)',
          '(Android) (d+);',
          '^UCWEB.*; (Adr) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+)|);',
          '^(JUC).*; ?U; ?(?:Android|)(\\d+)\\.(\\d+)(?:[\\.\\-]([a-z0-9]+)|)',
          '(android)\\s(?:mobile\\/)(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)',
          '(Silk-Accelerated=[a-z]{4,5})',
          'Puffin/[\\d\\.]+AT',
          'Puffin/[\\d\\.]+AP',
        ],
      },
      {
        name_replace: 'Chrome OS',
        patterns: [
          '(x86_64|aarch64)\\ (\\d+)\\.(\\d+)\\.(\\d+).*Chrome.*(?:CitrixChromeApp)$',
          '(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
        ],
      },
      {
        name_replace: 'Windows',
        patterns: ['(Windows 10)', '(Windows NT 6\\.4)', '(Windows NT 10\\.0)'],
        major_replace: '10',
      },
      {
        name_replace: 'Windows',
        patterns: ['(Windows NT 6\\.3; ARM;)', '(Windows NT 6.3)'],
        major_replace: '8',
        minor_replace: '1',
      },
      {
        name_replace: 'Windows',
        patterns: ['(Windows NT 6\\.2)'],
        major_replace: '8',
      },
      {
        name_replace: 'Windows',
        patterns: ['(Windows NT 6\\.1)'],
        major_replace: '7',
      },
      {
        name_replace: 'Windows',
        patterns: ['(Windows NT 6\\.0)'],
        major_replace: 'Vista',
      },
      {
        name_replace: 'Windows',
        patterns: ['(Windows (?:NT 5\\.2|NT 5\\.1))'],
        major_replace: 'XP',
      },
      {
        name_replace: 'Mac OS X',
        patterns: [
          '((?:Mac[ +]?|; )OS[ +]X)[\\s+/](?:(\\d+)[_.](\\d+)(?:[_.](\\d+)|)|Mach-O)',
          '\\w+\\s+Mac OS X\\s+\\w+\\s+(\\d+).(\\d+).(\\d+).*',
          '(?:PPC|Intel) (Mac OS X)',
        ],
      },
      {
        name_replace: 'Mac OS X',
        patterns: [' (Dar)(win)/(10).(d+).*((?:i386|x86_64))'],
        major_replace: '10',
        minor_replace: '6',
      },
      {
        name_replace: 'Mac OS X',
        patterns: [' (Dar)(win)/(11).(\\d+).*\\((?:i386|x86_64)\\)'],
        major_replace: '10',
        minor_replace: '7',
      },
      {
        name_replace: 'Mac OS X',
        patterns: [' (Dar)(win)/(12).(\\d+).*\\((?:i386|x86_64)\\)'],
        major_replace: '10',
        minor_replace: '8',
      },
      {
        name_replace: 'Mac OS X',
        patterns: [' (Dar)(win)/(13).(\\d+).*\\((?:i386|x86_64)\\)'],
        major_replace: '10',
        minor_replace: '9',
      },
      {
        name_replace: 'iOS',
        patterns: [
          '^UCWEB.*; (iPad|iPh|iPd) OS (\\d+)_(\\d+)(?:_(\\d+)|);',
          '(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(\\d+)[_\\.](\\d+)(?:[_\\.](\\d+)|)',
          '(iPhone|iPad|iPod); Opera',
          '(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)',
          '\\b(iOS[ /]|iOS; |iPhone(?:/| v|[ _]OS[/,]|; | OS : |\\d,\\d/|\\d,\\d; )|iPad/)(\\d{1,2})[_\\.](\\d{1,2})(?:[_\\.](\\d+)|)',
          '\\((iOS);',
          '(iPod|iPhone|iPad)',
          'Puffin/[\\d\\.]+IT',
          'Puffin/[\\d\\.]+IP',
        ],
      },
      {
        family: 'Chrome',
        name_replace: 'Chromecast',
        patterns: [
          '(CrKey -)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
          '(CrKey[ +]armv7l)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
          '(CrKey)(?:[/](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
        ],
      },
      {
        name_replace: 'Debian',
        patterns: ['([Dd]ebian)'],
      },
      {
        family: 'Linux',
        name_replace: 'Linux',
        patterns: ['(Linux Mint)(?:/(\\d+)|)'],
      },
      {
        family: 'Linux',
        patterns: [
          '(Ubuntu|Kubuntu|Arch Linux|CentOS|Slackware|Gentoo|openSUSE|SUSE|Red Hat|Fedora|PCLinuxOS|Mageia|(?:Free|Open|Net|\\b)BSD)',
          '(Mandriva)(?: Linux|)/(?:[\\d.-]+m[a-z]{2}(\\d+).(\\d)|)',
          '(Linux)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)',
          '\\(linux-gnu\\)',
        ],
      },
      {
        family: 'BlackBerry',
        name_replace: 'BlackBerry OS',
        patterns: [
          '(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)',
          '(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
          '(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)',
          '(Black[Bb]erry)',
        ],
      },
      {
        patterns: [
          '(Fedora|Red Hat|PCLinuxOS|Puppy|Ubuntu|Kindle|Bada|Sailfish|Lubuntu|BackTrack|Slackware|(?:Free|Open|Net|\\b)BSD)[/ ](\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)',
        ],
      },
    ],
    A = navigator.userAgent,
    L = function () {
      return A;
    },
    $ = function (e) {
      return N(e || A, j);
    },
    D = function (e) {
      return N(e || A, M);
    };

  function R(e, t) {
    try {
      var n = new RegExp(t).exec(e);
      return n
        ? {
            name: n[1] || 'Other',
            major: n[2] || '0',
            minor: n[3] || '0',
            patch: n[4] || '0',
          }
        : null;
    } catch (Ht) {
      return null;
    }
  }

  function N(e, t) {
    for (var n = null, i = null, o = -1, r = !1; ++o < t.length && !r; ) {
      n = t[o];
      for (var a = -1; ++a < n.patterns.length && !r; )
        r = null !== (i = R(e, n.patterns[a]));
    }
    return r
      ? ((i.family = n.family || n.name_replace || i.name),
        n.name_replace && (i.name = n.name_replace),
        n.major_replace && (i.major = n.major_replace),
        n.minor_replace && (i.minor = n.minor_replace),
        n.patch_replace && (i.minor = n.patch_replace),
        i)
      : {
          family: 'Other',
          name: 'Other',
          major: '0',
          minor: '0',
          patch: '0',
        };
  }

  function z() {
    var e = this,
      t = $(),
      n = L();
    (this.agent = n.toLowerCase()),
      (this.language =
        window.navigator.userLanguage || window.navigator.language),
      (this.isCSS1 = 'CSS1Compat' === (document.compatMode || '')),
      (this.width = function () {
        return window.innerWidth && window.document.documentElement.clientWidth
          ? Math.min(window.innerWidth, document.documentElement.clientWidth)
          : window.innerWidth ||
              window.document.documentElement.clientWidth ||
              document.body.clientWidth;
      }),
      (this.height = function () {
        return (
          window.innerHeight ||
          window.document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      }),
      (this.scrollX = function () {
        return window.pageXOffset !== undefined
          ? window.pageXOffset
          : e.isCSS1
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      }),
      (this.scrollY = function () {
        return window.pageYOffset !== undefined
          ? window.pageYOffset
          : e.isCSS1
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      }),
      (this.type =
        'Edge' === t.family
          ? 'edge'
          : 'Internet Explorer' === t.family
          ? 'ie'
          : 'Chrome' === t.family
          ? 'chrome'
          : 'Safari' === t.family
          ? 'safari'
          : 'Firefox' === t.family
          ? 'firefox'
          : t.family.toLowerCase()),
      (this.version = 1 * (t.major + '.' + t.minor) || 0),
      (this.hasPostMessage = !!window.postMessage);
  }
  (z.prototype.hasEvent = function (e, t) {
    return 'on' + e in (t || document.createElement('div'));
  }),
    (z.prototype.getScreenDimensions = function () {
      var e = {};
      for (var t in window.screen) e[t] = window.screen[t];
      return delete e.orientation, e;
    }),
    (z.prototype.interrogateNavigator = function () {
      var e = {};
      for (var t in window.navigator)
        try {
          e[t] = window.navigator[t];
        } catch (qt) {}
      if (
        (delete e.plugins,
        delete e.mimeTypes,
        (e.plugins = []),
        window.navigator.plugins)
      )
        for (var n = 0; n < window.navigator.plugins.length; n++)
          e.plugins[n] = window.navigator.plugins[n].filename;
      return e;
    }),
    (z.prototype.supportsCanvas = function () {
      var e = document.createElement('canvas');
      return !(!e.getContext || !e.getContext('2d'));
    }),
    (z.prototype.supportsWebAssembly = function () {
      try {
        if (
          'object' == typeof WebAssembly &&
          'function' == typeof WebAssembly.instantiate
        ) {
          var e = new WebAssembly.Module(
            Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
          );
          if (e instanceof WebAssembly.Module)
            return new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
        }
      } catch (Ht) {
        return !1;
      }
    });
  var W = {
      Browser: new z(),
      System: new (function () {
        var e,
          t,
          n = D(),
          i = L();
        (this.mobile =
          ((e = !!(
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
          )),
          (t = !1),
          n &&
            (t =
              [
                'iOS',
                'Windows Phone',
                'Windows Mobile',
                'Android',
                'BlackBerry OS',
              ].indexOf(n.name) >= 0),
          e && t)),
          (this.dpr = function () {
            return window.devicePixelRatio || 1;
          }),
          this.mobile &&
            n &&
            'Windows' === n.family &&
            i.indexOf('touch') < 0 &&
            (this.mobile = !1),
          (this.os =
            'iOS' === n.family
              ? 'ios'
              : 'Android' === n.family
              ? 'android'
              : 'Mac OS X' === n.family
              ? 'mac'
              : 'Windows' === n.family
              ? 'windows'
              : 'Linux' === n.family
              ? 'linux'
              : n.family.toLowerCase()),
          (this.version = (function () {
            if (!n) return 'unknown';
            var e = n.major;
            return (
              n.minor && (e += '.' + n.minor),
              n.patch && (e += '.' + n.patch),
              e
            );
          })());
      })(),
    },
    U = {
      host: null,
      file: null,
      sitekey: null,
      a11y_tfe: null,
      pingdom:
        'safari' === W.Browser.type &&
        'windows' !== W.System.os &&
        'mac' !== W.System.os &&
        'ios' !== W.System.os &&
        'android' !== W.System.os,
      assetDomain: 'https://newassets.hcaptcha.com',
      assetUrl: 'https://newassets.hcaptcha.com/captcha/v1/ff4a4ed/static',
      width: null,
      height: null,
      mobile: null,
    },
    F = {
      custom: !1,
      tplinks: 'on',
      language: null,
      reportapi: 'https://accounts.hcaptcha.com',
      endpoint: 'https://hcaptcha.com',
      endpointOverride: null,
      size: 'normal',
      theme: 'light',
      assethost: null,
      imghost: null,
      recaptchacompat: 'true',
    };

  function J(e, t) {
    (e.style.width = '304px'),
      (e.style.height = '78px'),
      (e.style.backgroundColor = '#f9e5e5'),
      (e.style.position = 'relative'),
      (e.innerHTML = '');
    var n = document.createElement('div');
    (n.style.width = '284px'),
      (n.style.position = 'absolute'),
      (n.style.top = '12px'),
      (n.style.left = '10px'),
      (n.style.fontFamily = 'arial, sans-serif'),
      (n.style.color = '#7c0a06'),
      (n.style.fontSize = '14px'),
      (n.style.fontWeight = 'normal'),
      (n.style.lineHeight = '18px'),
      (n.innerHTML =
        t ||
        "Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> to complete this captcha."),
      e.appendChild(n);
  }
  var q = !0;

  function H(e) {
    var t = {
      message: e.name + ': ' + e.message,
    };
    e.stack &&
      (t.stack_trace = {
        trace: e.stack,
      }),
      Y('report error', 'internal', 'debug', t),
      X('internal error', 'error', U.file);
  }

  function X(e, t, n) {
    q &&
      window.Raven &&
      Raven.captureMessage(e, {
        level: t,
        logger: n,
      });
  }

  function Y(e, t, n, i) {
    q &&
      window.Raven &&
      Raven.captureBreadcrumb({
        message: e,
        category: t,
        level: n,
        data: i,
      });
  }

  function V(e) {
    var t = [].slice.call(arguments, 1);
    'string' == typeof e
      ? window[e]
        ? 'function' == typeof window[e]
          ? window[e].apply(null, t)
          : console.log("[hCaptcha] Callback '" + e + "' is not a function.")
        : console.log("[hCaptcha] Callback '" + e + "' is not defined.")
      : 'function' == typeof e
      ? e.apply(null, t)
      : console.log("[hcaptcha] Invalid callback '" + e + "'.");
  }

  function Q() {
    try {
      V.apply(null, arguments);
    } catch (qt) {
      console.error('[hCaptcha] There was an error in your callback.'),
        console.error(qt);
    }
  }

  function G(e, t) {
    var n,
      i = 'attempts' in (t = t || {}) ? t.attempts : 1,
      o = t.delay || 0,
      r = t.onFail;
    return (
      (n = function (t, n, a) {
        e().then(t, function (e) {
          var t = i-- > 0;
          r && (t = !1 !== r(e) && t), t ? setTimeout(a, o) : n(e);
        });
      }),
      new Promise(function (e, t) {
        n(e, t, function i() {
          n(e, t, i);
        });
      })
    );
  }
  var K = {
      eventName: function (e) {
        var t = e;
        return (
          'down' === e ||
          'up' === e ||
          'move' === e ||
          'over' === e ||
          'out' === e
            ? (t =
                !W.System.mobile || ('down' !== e && 'up' !== e && 'move' !== e)
                  ? 'mouse' + e
                  : 'down' === e
                  ? 'touchstart'
                  : 'up' === e
                  ? 'touchend'
                  : 'touchmove')
            : 'enter' === e && (t = 'keydown'),
          t
        );
      },
      actionName: function (e) {
        var t = e;
        return (
          'touchstart' === t || 'mousedown' === t
            ? (t = 'down')
            : 'touchmove' === t || 'mousemove' === t
            ? (t = 'move')
            : 'touchend' === t || 'mouseup' === t
            ? (t = 'up')
            : 'mouseover' === t
            ? (t = 'over')
            : 'mouseout' === t && (t = 'out'),
          t
        );
      },
      eventCallback: function (e, t, n) {
        var i = K.actionName(e);
        return function (o) {
          if (
            ((o = o || window.event),
            'down' === i ||
              'move' === i ||
              'up' === i ||
              'over' === i ||
              'out' === i ||
              'click' === i)
          ) {
            var r = K.eventCoords(o),
              a = n.getBoundingClientRect();
            (o.windowX = r.x),
              (o.windowY = r.y),
              (o.elementX = o.windowX - (a.x || a.left)),
              (o.elementY = o.windowY - (a.y || a.top));
          }
          (o.keyNum = o.which || o.keyCode || 0),
            ('enter' === e && 13 !== o.keyNum && 32 !== o.keyNum) ||
              ((o.action = i), (o.targetElement = n), t(o));
        };
      },
      eventCoords: function (e) {
        var t = {
          x: 0,
          y: 0,
        };
        if (e.windowsPointer) return e;
        if (!e) return t;
        if (e.touches || e.changedTouches) {
          var n = (
            e.touches && e.touches.length >= 1 ? e.touches : e.changedTouches
          )[0];
          (t.x = n.pageX || n.clientX), (t.y = n.pageY || n.clientY);
        } else (t.x = e.pageX || e.clientX), (t.y = e.pageY || e.clientY);
        return t;
      },
    },
    Z = ['Webkit', 'Moz', 'ms'],
    ee = document.createElement('div').style,
    te = {};

  function ne(e) {
    var t = te[e];
    return (
      t ||
      (e in ee
        ? e
        : (te[e] =
            (function (e) {
              for (var t = e[0].toUpperCase() + e.slice(1), n = Z.length; n--; )
                if ((e = Z[n] + t) in ee) return e;
            })(e) || e))
    );
  }

  function ie(e, t, n) {
    if (
      ((this.dom = null),
      (this._clss = []),
      (this._nodes = []),
      (this._listeners = []),
      (this._frag = null),
      e && 'object' == typeof e)
    ) {
      this.dom = e;
      var i = [],
        o = [];
      'string' == typeof e.className && (o = e.className.split(' '));
      for (var r = 0; r < o.length; r++)
        '' !== o[r] && ' ' !== o[r] && i.push(o[r]);
      this._clss = i;
    } else
      (n !== undefined && null !== n) || (n = !0),
        (!e ||
          ('string' == typeof e &&
            (e.indexOf('#') >= 0 || e.indexOf('.') >= 0))) &&
          (e && (t = e), (e = 'div')),
        (this.dom = document.createElement(e)),
        t &&
          (t.indexOf('#') >= 0
            ? (this.dom.id = t.split('#')[1])
            : (t.indexOf('.') >= 0 && (t = t.split('.')[1]),
              this.addClass.call(this, t)));
    !0 === n &&
      ((this._frag = document.createDocumentFragment()),
      this._frag.appendChild(this.dom));
  }

  function oe(e) {
    if (null === e) return '';
    var t = [];
    return re(e, t), t.join('&');
  }

  function re(e, t) {
    var n, i;
    if ('object' == typeof e)
      for (i in e) !0 === ae((n = e[i])) ? re(n, t) : (t[t.length] = se(i, n));
    else if (!0 === Array.isArray(e))
      for (var o = 0; o < e.length; o++)
        !0 === ae((n = e[o])) ? re(e, t) : (t[t.length] = se(i, n));
    else t[t.length] = se(e);
  }

  function ae(e) {
    return !0 === Array.isArray(e) || 'object' == typeof e;
  }

  function se(e, t) {
    return (
      encodeURIComponent(e) + '=' + encodeURIComponent(null === t ? '' : t)
    );
  }
  (ie.prototype.createElement = function (e, t) {
    var n = new ie(e, t, !1);
    return this.appendElement.call(this, n), this._nodes.push(n), n;
  }),
    (ie.prototype.appendElement = function (e) {
      if (e === undefined)
        return H({
          name: 'DomElement Add Child',
          message: 'Child Element is undefined',
        });
      var t;
      t =
        e._frag !== undefined && null !== e._frag
          ? e._frag
          : e.dom !== undefined
          ? e.dom
          : e;
      try {
        e instanceof ie && (e._parent = this), this.dom.appendChild(t);
      } catch (Ht) {
        H({
          name: 'DomElement Add Child',
          message: 'Failed to append child.',
        });
      }
      return this;
    }),
    (ie.prototype.removeElement = function (e) {
      try {
        var t = e;
        if (e.dom) {
          t = t.dom;
          for (var n = e._nodes.length; --n > -1; )
            e.dom.removeChild(e._nodes[n].dom || e._nodes[n]),
              e._nodes.splice(n, 1);
        } else
          for (var i = this._nodes.length; --i > -1; )
            this._nodes[i] === t && this._nodes.splice(i, 1);
        t.parentNode === this.dom && this.dom.removeChild(t);
      } catch (Ht) {
        H({
          name: 'DomElement Remove Child',
          message: 'Failed to remove child.',
        });
      }
    }),
    (ie.prototype.addClass = function (e) {
      return (
        !1 === this.hasClass.call(this, e) &&
          (this._clss.push(e), (this.dom.className = this._clss.join(' '))),
        this
      );
    }),
    (ie.prototype.hasClass = function (e) {
      for (
        var t = -1 !== this.dom.className.split(' ').indexOf(e),
          n = this._clss.length;
        n-- && !t;

      )
        t = this._clss[n] === e;
      return t;
    }),
    (ie.prototype.removeClass = function (e) {
      for (var t = this._clss.length; --t > -1; )
        this._clss[t] === e && this._clss.splice(t, 1);
      return (this.dom.className = this._clss.join(' ')), this;
    }),
    (ie.prototype.text = function (e) {
      if (this && this.dom) {
        if (!e) return this.dom.textContent;
        for (
          var t, n, i, o, r = /&(.*?);/g, a = /<[a-z][\s\S]*>/i;
          null !== (t = r.exec(e));

        ) {
          !1 === a.test(t[0])
            ? ((i = t[0]),
              (o = void 0),
              ((o = document.createElement('div')).innerHTML = i),
              (n = o.textContent),
              (e = e.replace(new RegExp(t[0], 'g'), n)))
            : (e = e.replace(t[0], ''));
        }
        return (this.dom.textContent = e), this;
      }
    }),
    (ie.prototype.content = ie.prototype.text),
    (ie.prototype.css = function (e) {
      var t;
      for (var n in e) {
        t = e[n];
        try {
          if (
            ('opacity' !== n &&
              'zIndex' !== n &&
              'fontWeight' !== n &&
              isFinite(t) &&
              parseFloat(t) === t &&
              (t += 'px'),
            'ie' === W.Browser.type &&
              8 === W.Browser.version &&
              'opacity' === n)
          )
            this.dom.style.filter = 'alpha(opacity=' + 100 * t + ')';
          else {
            var i = ne(n);
            this.dom.style[i] = t;
          }
        } catch (qt) {}
      }
      return this;
    }),
    (ie.prototype.backgroundImage = function (e, t, n, i) {
      var o = t !== undefined && n !== undefined,
        r = {
          '-ms-high-contrast-adjust': 'none',
        };
      if (('object' == typeof t && (i = t), i === undefined && (i = {}), o)) {
        var a = e.width / e.height,
          s = t,
          h = s / a;
        i.cover && h < n && (s = (h = n) * a),
          i.contain && h > n && (s = (h = n) * a),
          (r.width = s),
          (r.height = h),
          i.center &&
            ((r.marginLeft = -s / 2),
            (r.marginTop = -h / 2),
            (r.position = 'absolute'),
            (r.left = '50%'),
            (r.top = '50%')),
          (i.left || i.right) && ((r.left = i.left || 0), (r.top = i.top || 0));
      }
      'ie' === W.Browser.type && 8 === W.Browser.version
        ? (r.filter =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            e.src +
            "',sizingMethod='scale')")
        : ((r.background = 'url(' + e.src + ')'),
          (r.backgroundPosition = '50% 50%'),
          (r.backgroundRepeat = 'no-repeat'),
          (r.backgroundSize = o
            ? s + 'px ' + h + 'px'
            : i.cover
            ? 'cover'
            : i.contain
            ? 'contain'
            : '100%')),
        this.css.call(this, r);
    }),
    (ie.prototype.setAttribute = function (e, t) {
      var n;
      if ('object' == typeof e)
        for (var i in e) (n = e[i]), this.dom.setAttribute(i, n);
      else this.dom.setAttribute(e, t);
    }),
    (ie.prototype.removeAttribute = function (e, t) {
      var n;
      if ('object' == typeof e)
        for (var i in e) (n = e[i]), this.dom.removeAttribute(i, n);
      else this.dom.removeAttribute(e, t);
    }),
    (ie.prototype.addEventListener = function (e, t, n) {
      var i = {
        event: K.eventName(e),
        handler: K.eventCallback(e, t, this.dom),
        callback: t,
      };
      this._listeners.push(i),
        this.dom.addEventListener
          ? this.dom.addEventListener(i.event, i.handler, n)
          : this.dom.attachEvent('on' + i.event, i.handler);
    }),
    (ie.prototype.removeEventListener = function (e, t, n) {
      for (var i, o = this._listeners.length; --o > -1; )
        (i = this._listeners[o]).event === e &&
          i.callback === t &&
          (this._listeners.splice(o, 1),
          this.dom.removeEventListener
            ? this.dom.removeEventListener(i.event, i.handler, n)
            : this.dom.detachEvent('on' + i.event, i.handler));
    }),
    (ie.prototype.focus = function () {
      this.dom.focus();
    }),
    (ie.prototype.blur = function () {
      this.dom.blur();
    }),
    (ie.prototype.html = function (e) {
      return e && (this.dom.innerHTML = e), this.dom.innerHTML;
    }),
    (ie.prototype.__destroy = function () {
      for (var e, t = this._listeners.length; --t > -1; )
        (e = this._listeners[t]),
          this._listeners.splice(t, 1),
          this.dom.removeEventListener
            ? this.dom.removeEventListener(e.event, e.handler)
            : this.dom.detachEvent('on' + e.event, e.handler);
      return (
        (this.dom = null),
        (this._clss = []),
        (this._nodes = []),
        (this._listeners = []),
        (this._frag = null),
        (e = null),
        null
      );
    });
  var he = {
      af: 'Afrikaans',
      sq: 'Albanian',
      am: 'Amharic',
      ar: 'Arabic',
      hy: 'Armenian',
      az: 'Azerbaijani',
      eu: 'Basque',
      be: 'Belarusian',
      bn: 'Bengali',
      bg: 'Bulgarian',
      bs: 'Bosnian',
      my: 'Burmese',
      ca: 'Catalan',
      ceb: 'Cebuano',
      zh: 'Chinese',
      'zh-CN': 'Chinese Simplified',
      'zh-TW': 'Chinese Traditional',
      co: 'Corsican',
      hr: 'Croatian',
      cs: 'Czech',
      da: 'Danish',
      nl: 'Dutch',
      en: 'English',
      eo: 'Esperanto',
      et: 'Estonian',
      fa: 'Persian',
      fi: 'Finnish',
      fr: 'French',
      fy: 'Frisian',
      gd: 'Gaelic',
      gl: 'Galacian',
      ka: 'Georgian',
      de: 'German',
      el: 'Greek',
      gu: 'Gujurati',
      ht: 'Haitian',
      ha: 'Hausa',
      haw: 'Hawaiian',
      he: 'Hebrew',
      hi: 'Hindi',
      hmn: 'Hmong',
      hu: 'Hungarian',
      is: 'Icelandic',
      ig: 'Igbo',
      id: 'Indonesian',
      ga: 'Irish',
      it: 'Italian',
      ja: 'Japanese',
      jw: 'Javanese',
      kn: 'Kannada',
      kk: 'Kazakh',
      km: 'Khmer',
      rw: 'Kinyarwanda',
      ky: 'Kirghiz',
      ko: 'Korean',
      ku: 'Kurdish',
      lo: 'Lao',
      la: 'Latin',
      lv: 'Latvian',
      lt: 'Lithuanian',
      lb: 'Luxembourgish',
      mk: 'Macedonian',
      mg: 'Malagasy',
      ms: 'Malay',
      ml: 'Malayalam',
      mt: 'Maltese',
      mi: 'Maori',
      mr: 'Marathi',
      mn: 'Mongolian',
      ne: 'Nepali',
      no: 'Norwegian',
      ny: 'Nyanja',
      or: 'Oriya',
      pl: 'Polish',
      'pt-BR': 'Portuguese (Brazil)',
      pt: 'Portuguese (Portugal)',
      ps: 'Pashto',
      pa: 'Punjabi',
      ro: 'Romanian',
      ru: 'Russian',
      sm: 'Samoan',
      sn: 'Shona',
      sd: 'Sindhi',
      si: 'Singhalese',
      sr: 'Serbian',
      sk: 'Slovak',
      sl: 'Slovenian',
      so: 'Somani',
      st: 'Southern Sotho',
      es: 'Spanish',
      su: 'Sundanese',
      sw: 'Swahili',
      sv: 'Swedish',
      tl: 'Tagalog',
      tg: 'Tajik',
      ta: 'Tamil',
      tt: 'Tatar',
      te: 'Teluga',
      th: 'Thai',
      tr: 'Turkish',
      tk: 'Turkmen',
      ug: 'Uyghur',
      uk: 'Ukrainian',
      ur: 'Urdu',
      uz: 'Uzbek',
      vi: 'Vietnamese',
      cy: 'Welsh',
      xh: 'Xhosa',
      yi: 'Yiddish',
      yo: 'Yoruba',
      zu: 'Zulu',
    },
    ce = {
      zh: {
        'I am human': '我是人',
      },
      ar: {
        'I am human': 'أنا الإنسان',
      },
      af: {
        'I am human': 'Ek is menslike',
      },
      am: {
        'I am human': 'እኔ ሰው ነኝ',
      },
      hy: {
        'I am human': 'Ես մարդ եմ',
      },
      az: {
        'I am human': 'Mən insanam',
      },
      eu: {
        'I am human': 'Gizakia naiz',
      },
      bn: {
        'I am human': 'আমি মানব নই',
      },
      bg: {
        'I am human': 'Аз съм човек',
      },
      ca: {
        'I am human': 'Sóc humà',
      },
      hr: {
        'I am human': 'Ja sam čovjek',
      },
      cs: {
        'I am human': 'Jsem člověk',
      },
      da: {
        'I am human': 'Jeg er et menneske',
      },
      nl: {
        'I am human': 'Ik ben een mens',
      },
      et: {
        'I am human': 'Ma olen inimeste',
      },
      fi: {
        'I am human': 'Olen ihminen',
      },
      fr: {
        'I am human': 'Je suis humain',
      },
      gl: {
        'I am human': 'Eu son humano',
      },
      ka: {
        'I am human': 'მე ვარ ადამიანი',
      },
      de: {
        'I am human': 'Ich bin ein Mensch',
      },
      el: {
        'I am human': 'Είμαι άνθρωπος',
      },
      gu: {
        'I am human': 'હું માનવ છું',
      },
      iw: {
        'I am human': '. אני אנושי',
      },
      hi: {
        'I am human': 'मैं मानव हूं',
      },
      hu: {
        'I am human': 'Nem vagyok robot',
      },
      is: {
        'I am human': 'Ég er manneskja',
      },
      id: {
        'I am human': 'Aku manusia',
      },
      it: {
        'I am human': 'Sono un essere umano',
      },
      ja: {
        'I am human': '私は人間です',
      },
      kn: {
        'I am human': 'ನಾನು ಮಾನವನು',
      },
      ko: {
        'I am human': '사람입니다',
      },
      lo: {
        'I am human': 'ຂ້ອຍເປັນມະນຸດ',
      },
      lv: {
        'I am human': 'Es esmu cilvēks',
      },
      lt: {
        'I am human': 'Aš esu žmogaus',
      },
      ms: {
        'I am human': 'Saya manusia',
      },
      ml: {
        'I am human': 'ഞാൻ മനുഷ്യനാണ്',
      },
      mr: {
        'I am human': 'मी मानवी आहे',
      },
      mn: {
        'I am human': 'Би бол хүн',
      },
      no: {
        'I am human': 'Jeg er menneskelig',
      },
      fa: {
        'I am human': 'من انسانی هستم',
      },
      pl: {
        'I am human': 'Jestem człowiekiem',
      },
      pt: {
        'I am human': 'Sou humano',
      },
      ro: {
        'I am human': 'Eu sunt om',
      },
      ru: {
        'I am human': 'Я человек',
      },
      sr: {
        'I am human': 'Ja sam ljudski',
      },
      si: {
        'I am human': 'මම මිනිස්සු',
      },
      sk: {
        'I am human': 'Ja som človek',
      },
      sl: {
        'I am human': 'Jaz sem človeški',
      },
      es: {
        'I am human': 'Soy humano',
      },
      sw: {
        'I am human': 'Mimi ni binadamu',
      },
      sv: {
        'I am human': 'Jag är människa',
      },
      ta: {
        'I am human': 'நான் மனித',
      },
      te: {
        'I am human': 'నేను మనిషిని',
      },
      th: {
        'I am human': 'ผมมนุษย์',
      },
      tr: {
        'I am human': 'Ben bir insanım',
      },
      uk: {
        'I am human': 'Я людини',
      },
      ur: {
        'I am human': 'میں انسان ہوں',
      },
      vi: {
        'I am human': 'Tôi là con người',
      },
      zu: {
        'I am human': 'Ngingumuntu',
      },
    },
    le = null,
    de = {
      translate: function (e) {
        var t = de.getBestTrans(ce);
        return (t && t[e]) || e;
      },
      getBestTrans: function (e) {
        var t = de.getLocale();
        return t in e
          ? e[t]
          : de.getShortLocale(t) in e
          ? e[de.getShortLocale(t)]
          : 'en' in e
          ? e.en
          : null;
      },
      getLocale: function () {
        var e =
            le || window.navigator.userLanguage || window.navigator.language,
          t = de.getShortLocale(e);
        return (
          'in' === t && (e = 'id'),
          'iw' === t && (e = 'he'),
          'nb' === t && (e = 'no'),
          'ji' === t && (e = 'yi'),
          'zh-CN' === e && (e = 'zh'),
          'jv' === t && (e = 'jw'),
          he[e] ? e : he[t] ? t : 'en'
        );
      },
      setLocale: function (e) {
        le = e;
      },
      getShortLocale: function (e) {
        return e.indexOf('-') >= 0 ? e.substring(0, e.indexOf('-')) : e;
      },
      isShortLocale: function (e) {
        return 2 === e.length || 3 === e.length;
      },
      addTable: function (e, t) {
        if ((t || (t = Object.create(null)), ce[e])) {
          var n = ce[e];
          for (var i in t) n[i] = t[i];
        } else ce[e] = t;
        return ce[e];
      },
      getTable: function (e) {
        return ce[e];
      },
      addTables: function (e) {
        for (var t in e) de.addTable(t, e[t]);
        return ce;
      },
      getTables: function () {
        return ce;
      },
    },
    ue = {
      400: 'Rate limited or network error. Please retry.',
      429: 'Your computer or network has sent too many requests.',
      500: 'Cannot contact hCaptcha. Check your connection and try again.',
    },
    pe = function (e) {
      try {
        return de.translate(ue[e]);
      } catch (Ht) {
        return !1;
      }
    },
    fe =
      'undefined' != typeof XDomainRequest &&
      !('withCredentials' in XMLHttpRequest.prototype);

  function me(e, t, n) {
    n = n || {};
    var i = {
      url: t,
      method: e.toUpperCase(),
      responseType: n.responseType || 'string',
      dataType: n.dataType || null,
      withCredentials: n.withCredentials || !1,
      headers: n.headers || null,
      data: n.data || null,
      timeout: n.timeout || null,
    };
    return (
      (i.legacy = i.withCredentials && fe),
      i.data &&
        ('json' === i.dataType &&
          'object' == typeof i.data &&
          (i.data = JSON.stringify(i.data)),
        'query' === i.dataType && (i.data = oe(i.data))),
      n.retry
        ? G(function () {
            return ge(i);
          }, n.retry)
        : ge(i)
    );
  }

  function ge(e) {
    var t = e.legacy ? new XDomainRequest() : new XMLHttpRequest(),
      n = 'function' == typeof e.url ? e.url() : e.url;
    return new Promise(function (i, o) {
      var r,
        a = function (r) {
          return function () {
            var a = t.response || t.responseText,
              s = t.statusText || '',
              h = t.status,
              c = t.readyState;
            if (4 === c || e.legacy) {
              if ('error' === r || (h >= 400 && h <= 511))
                return void o({
                  event: 'network-error',
                  endpoint: n,
                  state: c,
                  status: h,
                  message: pe(h || 400) || s,
                });
              'json' === e.responseType && a && (a = JSON.parse(a)),
                i({
                  state: c,
                  status: h,
                  body: a,
                  message: s,
                });
            }
          };
        };
      if (
        ((t.onload = a('complete')),
        (t.onerror = t.ontimeout = a('error')),
        t.open(e.method, n),
        e.timeout && (t.timeout = e.timeout),
        !e.legacy) &&
        ((t.withCredentials = e.withCredentials), e.headers)
      )
        for (var s in e.headers) (r = e.headers[s]), t.setRequestHeader(s, r);
      setTimeout(function () {
        t.send(e.data);
      }, 0);
    });
  }
  var ye = function (e, t) {
      if (
        ('object' == typeof e && t === undefined && (e = (t = e).url),
        null === e)
      )
        throw new Error('Url missing');
      return me('GET', e, t);
    },
    ve = function (e) {
      return e.toLowerCase().match(/\.(?:jpg|gif|png|jpeg|svg)$/g)
        ? 'image'
        : e.toLowerCase().match(/\.(?:js)$/g)
        ? 'script'
        : 'file';
    },
    we = function (e) {
      if (F.assethost && e.indexOf(U.assetDomain) >= 0)
        return F.assethost + e.replace(U.assetDomain, '');
      if (F.imghost && e.indexOf('imgs') >= 0) {
        var t =
          e.indexOf('.ai') >= 0 ? e.indexOf('.ai') + 3 : e.indexOf('.com') + 4;
        return F.imghost + e.substr(t, e.length);
      }
      return e;
    },
    be = ['svg', 'gif', 'png'];

  function _e(e, t) {
    t = t || {};
    var n,
      i = e;
    if (0 === i.indexOf('data:image'))
      for (var o = !1, r = be.length, a = -1; a++ < r && !o; )
        (o = i.indexOf(be[a]) >= 0) && (n = be[a]);
    else n = i.substr(i.lastIndexOf('.') + 1, i.length);
    !!(
      !document.createElementNS ||
      !document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        .createSVGRect
    ) &&
      t.fallback &&
      (t.fallback.indexOf('.') >= 0
        ? (n = (i = t.fallback).substr(i.lastIndexOf('.') + 1, i.length))
        : ((i = e.substr(0, e.indexOf(n)) + t.fallback), (n = t.fallback))),
      t.prefix && (i = t.prefix + '/' + i),
      (this.attribs = {
        crossOrigin: t.crossOrigin || null,
      }),
      (this.id = i),
      (this.src = we(i)),
      (this.ext = n),
      (this.width = 0),
      (this.height = 0),
      (this.aspect = 0),
      (this.loaded = !1),
      (this.error = !1),
      (this.element = null),
      (this.cb = {
        load: [],
        error: [],
      });
  }

  function xe(e, t, n) {
    for (var i = e[t], o = i.length, r = null; --o > -1; )
      (r = i[o]), i.splice(o, 1), r(n);
    'error' === t ? (e.load = []) : (e.error = []);
  }

  function Ce(e, t) {
    var n = e;
    t || (t = {}),
      t.prefix && (n = t.prefix + '/' + e),
      (this.attribs = {
        defer: t.defer || null,
        async: t.async || null,
        crossOrigin: t.crossOrigin || null,
      }),
      (this.id = n),
      (this.src = we(n)),
      (this.loaded = !1),
      (this.error = !1),
      (this.element = null),
      (this.cb = {
        load: [],
        error: [],
      });
  }

  function ke(e, t, n) {
    for (var i = e[t], o = i.length, r = null; --o > -1; )
      (r = i[o]), i.splice(o, 1), r(n);
    'error' === t ? (e.load = []) : (e.error = []);
  }

  function Ee(e, t) {
    var n = e;
    t || (t = {}),
      t.prefix && (n = t.prefix + '/' + e),
      (this.id = n),
      (this.src = we(n)),
      (this.loaded = !1),
      (this.error = !1),
      (this.cb = {
        load: [],
        error: [],
      }),
      (this.data = null);
  }

  function Se(e, t, n) {
    for (var i = e[t], o = i.length, r = null; --o > -1; )
      (r = i[o]), i.splice(o, 1), r(n);
    'error' === t ? (e.load = []) : (e.error = []);
  }
  (_e.prototype.load = function () {
    return 'svg' === this.ext ? this._loadSvg() : this._loadImg();
  }),
    (_e.prototype._loadSvg = function () {
      var e,
        t = this,
        n = this.src,
        i = this.id;
      if (0 === n.indexOf('data:image/svg+xml')) {
        var o = n.slice('data:image/svg+xml,'.length);
        e = Promise.resolve(decodeURIComponent(o));
      } else
        e = ye(n).then(function (e) {
          return e.body;
        });
      return e
        .then(function (e) {
          var n = new DOMParser().parseFromString(
              e,
              'image/svg+xml'
            ).documentElement,
            i = parseInt(n.getAttribute('width')),
            o = parseInt(n.getAttribute('height'));
          return t._imgLoaded(n, i, o), t;
        })
        ['catch'](function (e) {
          t.error = !0;
          var n = (e && e.message ? e.message : 'Loading Error') + ': ' + i;
          throw (xe(t.cb, 'error', n), n);
        });
    }),
    (_e.prototype._loadImg = function () {
      var e = this,
        t = this.attribs,
        n = this.src,
        i = this.id;
      return new Promise(function (o, r) {
        var a = new Image();
        t.crossOrigin && (a.crossOrigin = t.crossOrigin),
          (a.onerror = function (t) {
            (e.error = !0), (a.onload = a.onerror = null);
            var n = (t && t.message ? t.message : 'Loading Error') + ': ' + i;
            xe(e.cb, 'error', n), r(n);
          }),
          (a.onload = function () {
            e.loaded ||
              (e._imgLoaded(a, a.width, a.height),
              (a.onload = a.onerror = null),
              o(e));
          }),
          (a.src = n),
          a.complete && a.onload();
      });
    }),
    (_e.prototype._imgLoaded = function (e, t, n) {
      (this.element = new ie(e)),
        (this.width = t),
        (this.height = n),
        (this.aspect = t / n),
        (this.loaded = !0),
        xe(this.cb, 'load', this);
    }),
    (_e.prototype.onload = function (e) {
      this.error || (this.loaded ? e(this) : this.cb.load.push(e));
    }),
    (_e.prototype.onerror = function (e) {
      (this.loaded && !this.error) ||
        (this.error ? e(this) : this.cb.error.push(e));
    }),
    (Ce.prototype.load = function () {
      var e = this,
        t = this.attribs,
        n = this.src,
        i = this.id;
      return new Promise(function (o, r) {
        var a = document.createElement('script');
        (e.element = a),
          (a.onerror = function (t) {
            (e.error = !0),
              (a.onload = a.onreadystatechange = a.onerror = null);
            var n = (t.message || 'Loading Error') + ': ' + i;
            ke(e.cb, 'error', n), r(n);
          }),
          (a.onload = a.onreadystatechange =
            function () {
              this.loaded ||
                (a.readyState &&
                  'loaded' !== a.readyState &&
                  'complete' !== a.readyState) ||
                ((e.loaded = !0),
                (a.onload = a.onreadystatechange = a.onerror = null),
                document.body.removeChild(a),
                ke(e.cb, 'load', e),
                o(e));
            }),
          (a.type = 'text/javascript'),
          (a.src = n),
          t.crossOrigin && (a.crossorigin = t.crossOrigin),
          t.async && (a.async = !0),
          t.defer && (a.defer = !0),
          document.body.appendChild(a),
          a.complete && a.onload();
      });
    }),
    (Ce.prototype.onload = function (e) {
      this.error || (this.loaded ? e(this) : this.cb.load.push(e));
    }),
    (Ce.prototype.onerror = function (e) {
      (this.loaded && !this.error) ||
        (this.error ? e(this) : this.cb.error.push(e));
    }),
    (Ee.prototype.load = function () {
      var e = this,
        t = this.src,
        n = this.id;
      return new Promise(function (i, o) {
        var r = {};
        t.indexOf('json') >= 0 && (r.responseType = 'json'),
          ye(t, r)
            .then(function (t) {
              (e.loaded = !0), (e.data = t.body), Se(e.cb, 'load', e), i(e);
            })
            ['catch'](function (t) {
              e.error = !0;
              var i = (t && t.message ? t.message : 'Loading Error') + ': ' + n;
              Se(e.cb, 'error', i), o(i);
            });
      });
    }),
    (Ee.prototype.onload = function (e) {
      this.error || (this.loaded ? e(this) : this.cb.load.push(e));
    }),
    (Ee.prototype.onerror = function (e) {
      (this.loaded && !this.error) ||
        (this.error ? e(this) : this.cb.error.push(e));
    });
  var Oe = [],
    Pe = {
      add: function (e, t) {
        var n = ve(e);
        return Pe[n] ? Pe[n](e, t) : Promise.resolve(null);
      },
      batch: function (e, t) {
        for (var n = [], i = -1; ++i < e.length; ) {
          var o = e[i];
          n.push(Pe.add(o, t));
        }
        return Promise.all(n)['finally'](function () {
          n = [];
        });
      },
      image: function (e, t) {
        var n = new _e(e, t);
        return Oe.push(n), n.load();
      },
      script: function (e, t) {
        var n = new Ce(e, t);
        return Oe.push(n), n.load();
      },
      file: function (e, t) {
        var n = new Ee(e, t);
        return Oe.push(n), n.load();
      },
      retrieve: function (e) {
        return new Promise(function (t, n) {
          for (var i = Oe.length, o = !1, r = null; --i > -1 && !o; )
            o = -1 !== (r = Oe[i]).id.indexOf(e);
          if (!o) return t(null);
          r.onload(t), r.onerror(n);
        });
      },
    },
    Ie = function (e, t) {
      var n = {},
        i = Array.prototype.slice.call(arguments, 2);
      for (var o in (t.apply(e, i), e)) n[o] = e[o];
    },
    Be = function (e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
    };

  function Te() {
    var e = this;
    (this._bottom = 0),
      (this._top = 0),
      (this.storage = {}),
      (this.add = function (t) {
        return (e.storage[e._top] = t), e._top++, t;
      }),
      (this.remove = function () {
        if (!e.empty()) {
          var t = e._bottom,
            n = e.storage[t];
          return (e.storage[t] = null), e._bottom++, n;
        }
      }),
      (this.empty = function () {
        return e._top === e._bottom;
      }),
      (this.size = function () {
        return e._top - e._bottom;
      });
  }
  var je = {
    queue: Te,
    depth: function Xt(e, t, n) {
      if ('object' == typeof e && e[t] && e[t].length > 0)
        for (var i = e[t].length; --i > -1; ) Xt(e[t][i], t, n);
      e !== undefined && n(e);
    },
    breathe: function (e, t, n) {
      var i = new Te(),
        o = null;
      for (i.add(e), o = i.remove(); o; ) {
        for (var r = 0; r < o[t].length; r++) i.add(o[t][r]);
        n(o), (o = i.remove());
      }
    },
  };

  function Me(e, t) {
    Ie(this, ie, t || 'div', e), (this.children = []), (this._events = []);
  }

  function Ae(e) {
    Ie(this, Me, e.id || '.' + e.name),
      (this.state = {
        loaded: !1,
        name: e.name + '.svg',
        prefix:
          e.prefix ||
          'https://newassets.hcaptcha.com/captcha/v1/ff4a4ed/static/images',
        fill: e.fill,
        width: e.width || 25,
        height: e.height || e.width || 25,
      }),
      (this.img = null),
      (e.autoLoad || e.autoLoad === undefined) && this.load();
  }

  function Le(e, t) {
    (this._period = e),
      (this._interval = t),
      (this._date = []),
      (this._data = []),
      (this._prevTimestamp = 0),
      (this._meanPeriod = 0),
      (this._meanCounter = 0);
  }
  Be(Me, ie),
    (Me.prototype.initComponent = function (e, t, n) {
      var i = new e(t);
      return (
        (i._parent = this),
        this.children.push(i),
        i.dom &&
          (n !== undefined
            ? n.appendElement && n.appendElement(i)
            : this.appendElement(i)),
        i
      );
    }),
    (Me.prototype.destroy = function () {
      var e = this;
      try {
        je.depth(this, 'children', function (t) {
          if (e !== t)
            for (var n = e.children.length; --n > -1; )
              e.children[n] === t && e.children.splice(n, 1);
          t._destroy && t._destroy(), (t = null);
        });
      } catch (Ht) {
        throw new Error('Trouble destroying nodes: ' + Ht);
      }
      return null;
    }),
    (Me.prototype._destroy = function () {
      try {
        this.onDestroy && this.onDestroy(),
          this._parent.removeElement && this._parent.removeElement(this);
        for (var e = this._events.length; --e > -1; ) this._events.splice(e, 1);
        (this.children = null),
          (this._destroy = null),
          (this._events = null),
          (this.destroy = null),
          (this.emit = null),
          (this.on = null),
          (this.off = null),
          (this.initComponent = null);
      } catch (Ht) {
        H({
          name: 'DomComponent',
          message: 'Failed to destroy.',
        });
      }
    }),
    (Me.prototype.on = function (e, t) {
      for (var n = this._events.length, i = !1; --n > -1 && !1 === i; )
        this._events[n].event === e && (i = this._events[n]);
      !1 === i &&
        ((i = {
          event: e,
          listeners: [],
        }),
        this._events.push(i)),
        i.listeners.push(t);
    }),
    (Me.prototype.off = function (e, t) {
      for (var n = this._events.length; --n > -1; )
        if (this._events[n].event === e) {
          for (var i = this._events[n].listeners.length; --i > -1; )
            this._events[n].listeners[i] === t &&
              this._events[n].listeners.splice(i, 1);
          0 === this._events[n].listeners.length && this._events.splice(n, 1);
        }
    }),
    (Me.prototype.emit = function (e) {
      for (
        var t = Array.prototype.slice.call(arguments, 1),
          n = this._events.length;
        --n > -1 && this._events;

      )
        if (this._events[n].event === e)
          for (var i = this._events[n].listeners.length; --i > -1; )
            this._events[n].listeners[i].apply(this, t);
    }),
    Be(Ae, Me),
    (Ae.prototype.load = function () {
      if (!this.state.loaded) {
        this.state.loaded = !0;
        var e = this,
          t = e.state.name;
        return Pe.image(t, {
          prefix: e.state.prefix,
          fallback: 'png',
        })
          .then(function (t) {
            (e.img = t.element), e.appendElement(e.img), e._style();
          })
          ['catch'](function () {
            Y('svg failed to load', 'image', 'info', {
              svgName: t,
            });
          });
      }
    }),
    (Ae.prototype._style = function () {
      this.css({
        width: this.state.width,
        height: this.state.height,
      }),
        this.img.css({
          width: this.state.width,
          height: this.state.height,
          display: 'block',
        }),
        this.state.fill && this.fill(this.state.fill);
    }),
    (Ae.prototype.fill = function (e) {
      for (var t = this.img.dom.children, n = 0; n < t.length; n++)
        t[n].style && (t[n].style.fill = e);
    }),
    (Le.prototype.getMeanPeriod = function () {
      return this._meanPeriod;
    }),
    (Le.prototype.getData = function () {
      return this._cleanStaleData(), this._data;
    }),
    (Le.prototype.getSize = function () {
      return this._cleanStaleData(), this._data.length;
    }),
    (Le.prototype.getCapacity = function () {
      return 0 === this._period
        ? this._interval
        : Math.ceil(this._interval / this._period);
    }),
    (Le.prototype.push = function (e, t) {
      this._cleanStaleData();
      var n = 0 === this._date.length;
      if (
        (e - (this._date[this._date.length - 1] || 0) >= this._period &&
          (this._date.push(e), this._data.push(t)),
        !n)
      ) {
        var i = e - this._prevTimestamp;
        (this._meanPeriod =
          (this._meanPeriod * this._meanCounter + i) / (this._meanCounter + 1)),
          this._meanCounter++;
      }
      this._prevTimestamp = e;
    }),
    (Le.prototype._cleanStaleData = function () {
      for (var e = Date.now(), t = this._date.length - 1; t >= 0; t--) {
        if (e - this._date[t] >= this._interval) {
          this._date.splice(0, t + 1), this._data.splice(0, t + 1);
          break;
        }
      }
    });
  var $e = {
      touchstart: 'ts',
      touchend: 'te',
      touchmove: 'tm',
      touchcancel: 'tc',
    },
    De = {
      mousedown: 'md',
      mouseup: 'mu',
      mousemove: 'mm',
    },
    Re = {
      keydown: 'kd',
      keyup: 'ku',
    },
    Ne = {
      devicemotion: 'dm',
    },
    ze = function (e, t) {
      var n = De[e],
        i = null;
      return function (e) {
        (i = (function (e) {
          return [e.windowX, e.windowY, Date.now()];
        })(e)),
          t(n, i);
      };
    },
    We = function (e, t) {
      var n = $e[e],
        i = null;
      return function (e) {
        (i = (function (e) {
          var t = [];
          try {
            var n, i;
            if (
              (e.touches && e.touches.length >= 1
                ? (n = e.touches)
                : e.changedTouches &&
                  e.changedTouches.length >= 1 &&
                  (n = e.changedTouches),
              n)
            ) {
              for (var o = 0; o < n.length; o++)
                (i = K.eventCoords(n[o])), t.push([n[o].identifier, i.x, i.y]);
              t.push(Date.now());
            }
            return t;
          } catch (Ht) {
            return t;
          }
        })(e)),
          t(n, i);
      };
    },
    Ue = function (e, t) {
      var n = Re[e],
        i = null;
      return function (e) {
        (i = (function (e) {
          return [e.keyNum, Date.now()];
        })(e)),
          t(n, i);
      };
    },
    Fe = function (e, t) {
      var n = Ne[e],
        i = null,
        o = [];
      return function (e) {
        null !==
          (i = (function (e, t) {
            (e.acceleration === undefined ||
              (e.acceleration && e.acceleration.x === undefined)) &&
              (e.acceleration = {
                x: 0,
                y: 0,
                z: 0,
              });
            (e.rotationRate === undefined ||
              (e.rotationRate && e.rotationRate.alpha === undefined)) &&
              (e.rotationRate = {
                alpha: 0,
                beta: 0,
                gamma: 0,
              });
            var n = [
                e.acceleration.x,
                e.acceleration.y,
                e.acceleration.z,
                e.rotationRate.alpha,
                e.rotationRate.beta,
                e.rotationRate.gamma,
                Date.now(),
              ],
              i = [];
            if (0 === t.length) (t = n), (i = n);
            else {
              for (var o, r = 0, a = 0; a < 6; a++)
                (o = t[a] - n[a]), i.push(n[a]), (r += Math.abs(o));
              if ((i.push(Date.now()), (t = n), r <= 0)) return null;
            }
            return {
              motion: i,
              prevmotion: t,
            };
          })(e, o)) && ((o = i.prevmotion), (i = i.motion), t(n, i));
      };
    };

  function Je() {
    (this._manifest = {}),
      (this.state = {
        timeBuffers: {},
        loadTime: Date.now(),
        recording: !1,
        initRecord: !1,
        record: {
          mouse: !0,
          touch: !0,
          keys: !1,
          motion: !0,
        },
      }),
      (this._recordEvent = this._recordEvent.bind(this));
  }
  (Je.prototype.record = function (e, t, n, i) {
    if (
      ((this._manifest.st = Date.now()),
      (this.state.record.mouse = e === undefined ? this.state.record.mouse : e),
      (this.state.record.touch = n === undefined ? this.state.record.touch : n),
      (this.state.record.keys = t === undefined ? this.state.record.keys : t),
      (this.state.record.motion =
        i === undefined ? this.state.record.motion : i),
      !1 === this.state.initRecord)
    ) {
      var o = new ie(document.body);
      this.state.record.mouse &&
        (o.addEventListener('mousedown', ze('mousedown', this._recordEvent)),
        o.addEventListener('mousemove', ze('mousemove', this._recordEvent)),
        o.addEventListener('mouseup', ze('mouseup', this._recordEvent))),
        !0 === this.state.record.keys &&
          (o.addEventListener('keyup', Ue('keyup', this._recordEvent)),
          o.addEventListener('keydown', Ue('keydown', this._recordEvent))),
        this.state.record.touch &&
          !0 === W.Browser.hasEvent('touchstart', document.body) &&
          (o.addEventListener(
            'touchstart',
            We('touchstart', this._recordEvent)
          ),
          o.addEventListener('touchmove', We('touchmove', this._recordEvent)),
          o.addEventListener('touchend', We('touchend', this._recordEvent))),
        this.state.record.motion &&
          !0 === W.Browser.hasEvent('devicemotion', window) &&
          o.addEventListener(
            'devicemotion',
            Fe('devicemotion', this._recordEvent)
          ),
        (this.state.initRecord = !0);
    }
    this.state.recording = !0;
  }),
    (Je.prototype.stop = function () {
      this.state.recording = !1;
    }),
    (Je.prototype.time = function () {
      return this.state.loadTime;
    }),
    (Je.prototype.getData = function () {
      for (var e in this.state.timeBuffers)
        (this._manifest[e] = this.state.timeBuffers[e].getData()),
          (this._manifest[e + '-mp'] =
            this.state.timeBuffers[e].getMeanPeriod());
      return this._manifest;
    }),
    (Je.prototype.setData = function (e, t) {
      this._manifest[e] = t;
    }),
    (Je.prototype.resetData = function () {
      (this._manifest = {}), (this.state.timeBuffers = {});
    }),
    (Je.prototype.circBuffPush = function (e, t) {
      this._recordEvent(e, t);
    }),
    (Je.prototype._recordEvent = function (e, t) {
      if (!1 !== this.state.recording)
        try {
          var n = t[t.length - 1];
          this.state.timeBuffers[e] ||
            (this.state.timeBuffers[e] = new Le(16, 15e3)),
            this.state.timeBuffers[e].push(n, t);
        } catch (Ht) {
          X('Event recording error: ' + JSON.stringify(Ht), 'error', 'motion');
        }
    });
  var qe = new Je(),
    He = [],
    Xe = !1,
    Ye = !1;

  function Ve() {
    document.addEventListener
      ? (document.addEventListener('DOMContentLoaded', Ge),
        window.addEventListener('load', Ge))
      : (document.attachEvent('onreadystatechange', Qe),
        window.attachEvent('onload', Ge)),
      (Xe = !0);
  }

  function Qe() {
    ('interactive' !== document.readyState &&
      'loaded' !== document.readyState &&
      'complete' !== document.readyState) ||
      Ge();
  }

  function Ge() {
    if (!1 === Ye) {
      for (var e = 0; e < He.length; e++) He[e].fn.apply(null, He[e].args);
      He = [];
    }
    (Ye = !0),
      document.removeEventListener
        ? (document.removeEventListener('DOMContentLoaded', Ge),
          window.removeEventListener('load', Ge))
        : (document.detachEvent('onreadystatechange', Qe),
          window.detachEvent('onload', Ge));
  }
  new ie(document);
  var Ke = new ie(window);

  function Ze() {
    try {
      return Object.keys(window).sort().join(',');
    } catch (Ht) {
      return null;
    }
  }

  function et(e, t) {
    for (var n in t) {
      var i = t[n];
      switch (typeof i) {
        case 'string':
          e[n] = i;
          break;
        case 'object':
          (e[n] = e[n] || {}), et(e[n], i);
          break;
        default:
          throw new Error(
            'Source theme contains invalid data types. Only string and object types are supported.'
          );
      }
    }
  }

  function tt(e, t) {
    try {
      return e in t;
    } catch (n) {
      return !1;
    }
  }

  function nt(e) {
    return !!e && 'object' == typeof e;
  }

  function it(e) {
    return nt(e) ? ot({}, e) : e;
  }

  function ot(e, t) {
    var n,
      i = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) i[o[n]] = it(e[o[n]]);
    var r,
      a,
      s = Object.keys(t);
    for (n = 0; n < s.length; n++) {
      var h = s[n];
      if (
        !(
          !tt((r = h), (a = e)) ||
          (Object.hasOwnProperty.call(a, r) &&
            Object.propertyIsEnumerable.call(a, r))
        )
      )
        return;
      tt(h, e) && nt(e[h]) ? (i[h] = ot(e[h], t[h])) : (i[h] = it(t[h]));
    }
    return i;
  }
  var rt = {
      white: '#ffffff',
      black: '#000000',
    },
    at = {
      100: '#fafafa',
      200: '#f5f5f5',
      300: '#E0E0E0',
      400: '#D7D7D7',
      500: '#BFBFBF',
      600: '#919191',
      700: '#555555',
      800: '#333333',
      900: '#222222',
      1e3: '#14191F',
    },
    st = '#00838F',
    ht = {
      mode: 'light',
      grey: at,
      primary: {
        main: st,
      },
      warn: {
        light: '#EB5757',
        main: '#EB5757',
        dark: '#DE3F3F',
      },
      text: {
        heading: at[700],
        body: at[700],
      },
    },
    ct = {
      mode: 'dark',
      grey: at,
      primary: {
        main: st,
      },
      text: {
        heading: at[200],
        body: at[200],
      },
    };

  function lt(e, t) {
    return 'dark' === t && e in ct ? ct[e] : ht[e];
  }

  function dt() {
    (this._themes = Object.create(null)),
      (this._active = 'light'),
      this.add('light', {}),
      this.add('dark', {
        palette: {
          mode: 'dark',
        },
      });
  }
  (dt.prototype.get = function (e) {
    if (!e) return this._themes[this._active];
    var t = this._themes[e];
    if (!t) throw new Error('Cannot find theme with name: ' + e);
    return t;
  }),
    (dt.prototype.use = function (e) {
      this._themes[e]
        ? (this._active = e)
        : console.error('Cannot find theme with name: ' + e);
    }),
    (dt.prototype.active = function () {
      return this._active;
    }),
    (dt.prototype.add = function (e, t) {
      t || (t = {}),
        (t.palette = (function (e) {
          e || (e = {});
          var t = e.mode || 'light',
            n = e.primary || lt('primary', t),
            i = e.warn || lt('warn', t),
            o = e.grey || lt('grey', t),
            r = e.text || lt('text', t);
          return ot(
            {
              common: rt,
              mode: t,
              primary: n,
              grey: o,
              warn: i,
              text: r,
            },
            e
          );
        })(t.palette)),
        (t.component = t.component || Object.create(null)),
        (this._themes[e] = t);
    }),
    (dt.prototype.extend = function (e, t) {
      'string' == typeof t && (t = JSON.parse(t));
      var n = JSON.parse(JSON.stringify(this.get(e)));
      return et(n, t), n;
    }),
    (dt.merge = function (e, t) {
      return ot(e, t || {});
    });
  var ut = ['light', 'dark', 'contrast', 'grey-red'],
    pt = new dt();

  function ft(e) {
    var t = '',
      n = null;
    n = e ? T.getById(e) : T.getByIndex(0);
    try {
      for (var i = T.getSession(), o = i.length, r = !1; --o > -1 && !r; )
        (r = i[o][1] === n.id) && (t = i[o][0]);
    } catch (a) {
      t = '';
    }
    return t;
  }
  pt.add('contrast', {}),
    pt.add('grey-red', {
      component: {
        challenge: {
          main: {
            border: '#6a6a6a',
          },
        },
      },
    });
  var mt = function (e) {
    var t = [];
    for (var n in e) {
      var i = e[n];
      (i = 'object' == typeof i ? JSON.stringify(i) : i),
        t.push([encodeURIComponent(n), encodeURIComponent(i)].join('='));
    }
    return t.join('&');
  };

  function gt(e, t) {
    var n = e instanceof HTMLIFrameElement;
    try {
      n
        ? e.parentNode && e.contentWindow.postMessage(JSON.stringify(t), '*')
        : e.postMessage(JSON.stringify(t), '*');
    } catch (qt) {
      X(qt.message, 'error', 'messaging');
    }
  }

  function yt(e, t) {
    (this.target = e),
      (this.id = t),
      (this.messages = []),
      (this.incoming = []),
      (this.waiting = []);
  }

  function vt(e, t) {
    var n = this,
      i = {},
      o = new Promise(function (e, t) {
        (i.resolve = e), (i.reject = t);
      }),
      r = {
        source: 'hcaptcha',
        label: e,
        id: n.id,
        promise: null,
        lookup: t,
      };
    return (
      o
        .then(function (e) {
          (r.promise = 'resolve'),
            null !== e && (r.contents = e),
            gt(n.target, r);
        })
        ['catch'](function (e) {
          (r.promise = 'reject'), null !== e && (r.error = e), gt(n.target, r);
        }),
      i
    );
  }
  (yt.prototype.setID = function (e) {
    this.id = e;
  }),
    (yt.prototype.contact = function (e, t) {
      if (!this.id)
        throw new Error(
          'Chat requires unique id to communicate between windows'
        );
      var n = this,
        i = Date.now().toString(36),
        o = {
          source: 'hcaptcha',
          label: e,
          id: this.id,
          promise: 'create',
          lookup: i,
        };
      if (t) {
        if ('object' != typeof t) throw new Error('Message must be an object.');
        o.contents = t;
      }
      return new Promise(function (t, r) {
        n.waiting.push({
          label: e,
          reject: r,
          resolve: t,
          lookup: i,
        }),
          gt(n.target, o);
      });
    }),
    (yt.prototype.listen = function (e, t) {
      if (!this.id)
        throw new Error(
          'Chat requires unique id to communicate between windows'
        );
      for (var n = this.messages.length, i = !1; --n > -1 && !1 === i; )
        this.messages[n].label === e && (i = this.messages[n]);
      !1 === i &&
        ((i = {
          label: e,
          listeners: [],
        }),
        this.messages.push(i)),
        i.listeners.push(t);
    }),
    (yt.prototype.answer = function (e, t) {
      if (!this.id)
        throw new Error(
          'Chat requires unique id to communicate between windows'
        );
      for (var n = this.incoming.length, i = !1; --n > -1 && !1 === i; )
        this.incoming[n].label === e && (i = this.incoming[n]);
      !1 === i &&
        ((i = {
          label: e,
          listeners: [],
        }),
        this.incoming.push(i)),
        i.listeners.push(t);
    }),
    (yt.prototype.send = function (e, t) {
      if (!this.id)
        throw new Error(
          'Chat requires unique id to communicate between windows'
        );
      var n = {
        source: 'hcaptcha',
        label: e,
        id: this.id,
      };
      if (t) {
        if ('object' != typeof t) throw new Error('Message must be an object.');
        n.contents = t;
      }
      gt(this.target, n);
    }),
    (yt.prototype.check = function (e, t) {
      for (
        var n = [].concat.apply(
            [],
            [this.messages, this.incoming, this.waiting]
          ),
          i = [],
          o = -1;
        ++o < n.length;

      )
        if (n[o].label === e) {
          if (t && n[o].lookup && t !== n[o].lookup) continue;
          i.push(n[o]);
        }
      return i;
    }),
    (yt.prototype.respond = function (e) {
      for (
        var t,
          n,
          i = -1,
          o = 0,
          r = [].concat.apply([], [this.messages, this.incoming, this.waiting]);
        ++i < r.length;

      )
        if (r[i].label === e.label) {
          if (e.lookup && r[i].lookup && e.lookup !== r[i].lookup) continue;
          var a = [];
          if (
            ((t = r[i]),
            e.error && a.push(e.error),
            e.contents && a.push(e.contents),
            e.promise && 'create' !== e.promise)
          ) {
            t[e.promise].apply(t[e.promise], a);
            for (var s = this.waiting.length, h = !1; --s > -1 && !1 === h; )
              this.waiting[s].label === t.label &&
                this.waiting[s].lookup === t.lookup &&
                ((h = !0), this.waiting.splice(s, 1));
            continue;
          }
          for (o = 0; o < t.listeners.length; o++) {
            if (((n = t.listeners[o]), 'create' === e.promise)) {
              var c = vt.call(this, t.label, e.lookup);
              a.push(c);
            }
            n.apply(n, a);
          }
        }
      r = null;
    }),
    (yt.prototype.destroy = function () {
      return (
        (this.messages = null),
        (this.incoming = null),
        (this.waiting = null),
        null
      );
    });
  var wt = {
    chats: [],
    isSupported: function () {
      return !!window.postMessage;
    },
    createChat: function (e, t) {
      var n = new yt(e, t);
      return wt.chats.push(n), n;
    },
    addChat: function (e) {
      wt.chats.push(e);
    },
    removeChat: function (e) {
      for (var t = !1, n = wt.chats.length; --n > -1 && !1 === t; )
        e.id === wt.chats[n].id &&
          e.target === wt.chats[n].target &&
          ((t = wt.chats[n]), wt.chats.splice(n, 1));
      return t;
    },
    handle: function (e) {
      var t = e.data;
      if ('string' == typeof t)
        try {
          if (!(t.indexOf('hcaptcha') >= 0)) return;
          t = JSON.parse(t);
          for (var n, i = wt.chats, o = -1; ++o < i.length; )
            (n = i[o]).id === t.id && n.respond(t);
        } catch (qt) {
          Y('postMessage handler error', 'postMessage', 'debug', {
            event: e,
            error: qt,
          });
        }
    },
  };

  function bt(e, t) {
    (this.id = e),
      (this.width = null),
      (this.height = null),
      (this.mobile = !1),
      (this.ready = !1),
      (this.listeners = []),
      (this.config = t),
      (this._visible = !1),
      (this._selected = !1),
      (this.$iframe = new ie('iframe')),
      (this._host = U.host || window.location.hostname);
    var n = U.assetUrl;
    F.assethost && (n = F.assethost + U.assetUrl.replace(U.assetDomain, '')),
      (this.$iframe.dom.src =
        n +
        '/hcaptcha-challenge.html#id=' +
        this.id +
        '&host=' +
        this._host +
        (t ? '&' + mt(this.config) : '')),
      (this.$iframe.dom.title = 'Main content of the hCaptcha challenge'),
      (this.$iframe.dom.frameBorder = 0),
      (this.$iframe.dom.scrolling = 'no'),
      this.setupParentContainer(t),
      this._hasCustomContainer
        ? (this._hideIframe(), this._parent.appendChild(this.$iframe.dom))
        : ((this.$container = new ie('div')),
          (this.$wrapper = this.$container.createElement('div')),
          (this.$overlay = this.$container.createElement('div')),
          (this.$arrow = this.$container.createElement('div')),
          (this.$arrow.fg = this.$arrow.createElement('div')),
          (this.$arrow.bg = this.$arrow.createElement('div')),
          this.style.call(this),
          this.$wrapper.appendElement(this.$iframe),
          this._parent.appendChild(this.$container.dom),
          this.$container.setAttribute('aria-hidden', !0)),
      (this.chat = wt.createChat(this.$iframe.dom, e));
  }

  function _t(e, t, n) {
    (this.id = t),
      (this.response = null),
      (this.location = {
        tick: null,
        offset: null,
        bounding: null,
      }),
      (this.config = n),
      (this._ticked = !0),
      (this.$container = e instanceof ie ? e : new ie(e)),
      (this._host = U.host || window.location.hostname),
      (this.$iframe = new ie('iframe'));
    var i = U.assetUrl;
    F.assethost && (i = F.assethost + U.assetUrl.replace(U.assetDomain, '')),
      (this.$iframe.dom.src =
        i +
        '/hcaptcha-checkbox.html#id=' +
        this.id +
        '&host=' +
        this._host +
        (n ? '&' + mt(this.config) : '')),
      (this.$iframe.dom.title =
        'widget containing checkbox for hCaptcha security challenge'),
      (this.$iframe.dom.tabIndex = this.config.tabindex || 0),
      (this.$iframe.dom.frameBorder = '0'),
      (this.$iframe.dom.scrolling = 'no'),
      this.config.size &&
        'invisible' === this.config.size &&
        this.$iframe.setAttribute('aria-hidden', 'true'),
      this.$iframe.setAttribute('data-hcaptcha-widget-id', t),
      this.$iframe.setAttribute('data-hcaptcha-response', ''),
      this.$container.appendElement(this.$iframe),
      'off' !== F.recaptchacompat &&
        ((this.$textArea0 = this.$container.createElement(
          'textarea',
          '#g-recaptcha-response-' + t
        )),
        (this.$textArea0.dom.name = 'g-recaptcha-response'),
        this.$textArea0.css({
          display: 'none',
        })),
      (this.$textArea1 = this.$container.createElement(
        'textarea',
        '#h-captcha-response-' + t
      )),
      (this.$textArea1.dom.name = 'h-captcha-response'),
      this.$textArea1.css({
        display: 'none',
      }),
      (this.chat = wt.createChat(this.$iframe.dom, t)),
      (this.clearLoading = this.clearLoading.bind(this));
  }

  function xt(e, t, n) {
    if (!n.sitekey)
      throw new Ct(
        'Missing sitekey',
        'https://hcaptcha.com/docs/configuration#jsapi'
      );
    (this.id = t),
      (this.visible = !1),
      (this.overflow = {
        override: !1,
        cssUsed: !0,
        value: null,
        scroll: 0,
      }),
      (this.onError = null),
      (this.onPass = null),
      (this.onExpire = null),
      (this.onChalExpire = null),
      (this.onOpen = null),
      (this.onClose = null),
      (this._ready = !1),
      (this._active = !1),
      (this._listeners = []),
      (this.config = n),
      ut.indexOf(n.theme) >= 0 && pt.use(n.theme),
      (this._state = {
        escaped: !1,
        passed: !1,
        expiredChallenge: !1,
        expiredResponse: !1,
      }),
      (this._origData = null),
      (this._promise = null),
      (this._responseTimer = null),
      (this.challenge = new bt(t, n)),
      (this.checkbox = new _t(e, t, n)),
      (this.initChallenge = this.initChallenge.bind(this)),
      (this.closeChallenge = this.closeChallenge.bind(this)),
      (this.displayChallenge = this.displayChallenge.bind(this)),
      (this.getGetCaptchaManifest = this.getGetCaptchaManifest.bind(this));
  }

  function Ct(e, t) {
    var n = '[hCaptcha] ' + e;
    t && (n += ' - ' + t),
      (this.message =
        'hCaptcha has failed to initialize. Please see the developer tools console for more information.'),
      (this.reason = n);
  }

  function kt(e, t) {
    (this.name = 'ApiError'), (this.message = e), (this.type = t);
  }

  function Et(e, t) {
    'object' != typeof e || t || ((t = e), (e = null));
    var n,
      i,
      o,
      r = !0 === (t = t || {}).async,
      a = new Promise(function (e, t) {
        (i = e), (o = t);
      });
    if (
      ((a.resolve = i),
      (a.reject = o),
      (n = e ? T.getById(e) : T.getByIndex(0)))
    )
      qe.setData('exec', !0),
        r && n.setPromise(a),
        n.onReady(n.initChallenge, t);
    else if (e) {
      if (!r) throw Error('[hCaptcha] invalid captcha id: ' + e);
      a.reject(new kt('invalid captcha id: ' + e, 'invalidId'));
    } else {
      if (!r) throw Error('[hCaptcha] no captchas exist.');
      a.reject(new kt('no captchas exist.', 'noCaptcha'));
    }
    if (r) return a;
  }
  window.addEventListener
    ? window.addEventListener('message', wt.handle)
    : window.attachEvent('onmessage', wt.handle),
    (bt.prototype.setupParentContainer = function (e) {
      var t,
        n = e['challenge-container'];
      n && (t = 'string' == typeof n ? document.getElementById(n) : n),
        t
          ? ((this._hasCustomContainer = !0), (this._parent = t))
          : ((this._hasCustomContainer = !1), (this._parent = document.body));
    }),
    (bt.prototype._hideIframe = function () {
      var e = {};
      'ie' !== W.Browser.type ||
      ('ie' === W.Browser.type && 8 !== W.Browser.version)
        ? ((e.opacity = 0), (e.visibility = 'hidden'))
        : (e.display = 'none'),
        this.$iframe.setAttribute('aria-hidden', !0),
        this.$iframe.css(e);
    }),
    (bt.prototype._showIframe = function () {
      var e = {};
      'ie' !== W.Browser.type ||
      ('ie' === W.Browser.type && 8 !== W.Browser.version)
        ? ((e.opacity = 1), (e.visibility = 'visible'))
        : (e.display = 'block'),
        this.$iframe.removeAttribute('aria-hidden'),
        this.$iframe.css(e);
    }),
    (bt.prototype.style = function () {
      var e = (function (e) {
        var t = e.palette,
          n = e.component;
        return dt.merge(
          {
            main: {
              fill: t.common.white,
              border: t.grey[400],
            },
          },
          n.challenge
        );
      })(pt.get());
      if (this._hasCustomContainer)
        this.$iframe.css({
          border: 0,
          position: 'relative',
          backgroundColor: e.main.fill,
        });
      else {
        var t = {
          backgroundColor: e.main.fill,
          border: '1px solid ' + e.main.border,
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px',
          borderRadius: 4,
          left: -1e4,
          top: -1e4,
          zIndex: -9999999999999,
          position: 'absolute',
        };
        'ie' !== W.Browser.type ||
        ('ie' === W.Browser.type && 8 !== W.Browser.version)
          ? ((t.transition = 'opacity 0.15s ease-out'),
            (t.opacity = 0),
            (t.visibility = 'hidden'))
          : (t.display = 'none'),
          this.$container.css(t),
          this.$wrapper.css({
            position: 'relative',
            zIndex: 1,
          }),
          this.$overlay.css({
            width: '100%',
            height: '100%',
            position: 'fixed',
            pointerEvents: 'none',
            top: 0,
            left: 0,
            zIndex: 0,
            backgroundColor: e.main.fill,
            opacity: 0.05,
          }),
          this.$arrow.css({
            borderWidth: 11,
            position: 'absolute',
            pointerEvents: 'none',
            marginTop: -11,
            zIndex: 1,
            right: '100%',
          }),
          this.$arrow.fg.css({
            borderWidth: 10,
            borderStyle: 'solid',
            borderColor:
              'transparent rgb(255, 255, 255) transparent transparent',
            position: 'relative',
            top: 10,
            zIndex: 1,
          }),
          this.$arrow.bg.css({
            borderWidth: 11,
            borderStyle: 'solid',
            borderColor:
              'transparent ' + e.main.border + ' transparent transparent',
            position: 'relative',
            top: -11,
            zIndex: 0,
          }),
          this.$iframe.css({
            border: 0,
            zIndex: 2e9,
            position: 'relative',
          });
      }
    }),
    (bt.prototype.setup = function (e) {
      return this.chat.send('create-challenge', e);
    }),
    (bt.prototype.sendTranslation = function (e) {
      var t = {
        locale: e,
        table: de.getTable(e) || {},
      };
      this.chat && this.chat.send('challenge-translate', t);
    }),
    (bt.prototype.isVisible = function () {
      return this._visible;
    }),
    (bt.prototype.getDimensions = function (e, t) {
      return this._visible
        ? this.chat.contact('resize-challenge', {
            width: e,
            height: t,
          })
        : Promise.resolve(null);
    }),
    (bt.prototype.show = function () {
      if (!0 !== this._visible)
        if (((this._visible = !0), this._hasCustomContainer))
          this._showIframe();
        else {
          var e = {
            zIndex: 9999999999999,
          };
          'ie' !== W.Browser.type ||
          ('ie' === W.Browser.type && 8 !== W.Browser.version)
            ? ((e.opacity = 1), (e.visibility = 'visible'))
            : (e.display = 'block'),
            this.$container.css(e),
            this.$container.removeAttribute('aria-hidden'),
            this.$overlay.css({
              pointerEvents: 'auto',
              cursor: 'pointer',
            }),
            this.$iframe.dom.focus();
        }
    }),
    (bt.prototype.close = function (e) {
      if (((this._visible = !1), this._hasCustomContainer))
        return (
          this._hideIframe(),
          void this.chat.send('close-challenge', {
            event: e,
          })
        );
      var t = {
        left: -1e4,
        top: -1e4,
        zIndex: -9999999999999,
      };
      'ie' !== W.Browser.type ||
      ('ie' === W.Browser.type && 8 !== W.Browser.version)
        ? ((t.opacity = 0), (t.visibility = 'hidden'))
        : (t.display = 'none'),
        this.$container.css(t),
        this._hasCustomContainer ||
          this.$overlay.css({
            pointerEvents: 'none',
            cursor: 'default',
          }),
        this.chat.send('close-challenge', {
          event: e,
        }),
        this.$container.setAttribute('aria-hidden', !0);
    }),
    (bt.prototype.size = function (e, t, n) {
      (this.width = e),
        (this.height = t),
        (this.mobile = n),
        this.$iframe.css({
          width: e,
          height: t,
        }),
        this._hasCustomContainer ||
          (this.$wrapper.css({
            width: e,
            height: t,
          }),
          n
            ? this.$overlay.css({
                opacity: 0.5,
              })
            : this.$overlay.css({
                opacity: 0.05,
              }));
    }),
    (bt.prototype.position = function (e) {
      if (!this._hasCustomContainer && e) {
        var t = 10,
          n = window.document.documentElement,
          i = W.Browser.scrollY(),
          o = W.Browser.width(),
          r = W.Browser.height(),
          a =
            this.mobile ||
            'invisible' === this.config.size ||
            e.offset.left + e.tick.x <= e.tick.width / 2,
          s = Math.round(e.bounding.top) + i !== e.offset.top,
          h = this.height > n.clientHeight,
          c = a ? (o - this.width) / 2 : e.bounding.left + e.tick.right + 10;
        (c + this.width + t > o || c < 0) &&
          ((c = (o - this.width) / 2), (a = !0));
        var l =
            (n.scrollHeight < n.clientHeight
              ? n.clientHeight
              : n.scrollHeight) -
            this.height -
            t,
          d = a
            ? (r - this.height) / 2 + i
            : e.bounding.top + e.tick.y + i - this.height / 2;
        s && d < i && (d = i + t),
          s && d + this.height >= i + r && (d = i + r - (this.height + t)),
          (d = Math.max(Math.min(d, l), 10));
        var u = e.bounding.top + e.tick.y + i - d - 10,
          p = this.height - 10 - 30;
        return (
          (u = Math.max(Math.min(u, p), t)),
          this.$container.css({
            left: c,
            top: d,
          }),
          this.$arrow.fg.css({
            display: a ? 'none' : 'block',
          }),
          this.$arrow.bg.css({
            display: a ? 'none' : 'block',
          }),
          this.$arrow.css({
            top: u,
          }),
          (this.top = d),
          this.$container.dom.getBoundingClientRect(),
          h
        );
      }
    }),
    (bt.prototype.destroy = function () {
      this._visible && this.close.call(this),
        this._hasCustomContainer
          ? this._parent.removeChild(this.$iframe.dom)
          : (this._parent.removeChild(this.$container.dom),
            (this.$container = this.$container.__destroy())),
        (this.$iframe = this.$iframe.__destroy()),
        wt.removeChat(this.chat),
        (this.chat = this.chat.destroy());
    }),
    (bt.prototype.setReady = function (e) {
      if (((this.ready = e), this.ready))
        for (var t, n = this.listeners.length; --n > -1; )
          (t = this.listeners[n]), this.listeners.splice(n, 1), t();
    }),
    (bt.prototype.onReady = function (e) {
      var t = Array.prototype.slice.call(arguments, 1),
        n = function () {
          e.apply(null, t);
        };
      this.ready ? n() : this.listeners.push(n);
    }),
    (bt.prototype.onOverlayClick = function (e) {
      this._hasCustomContainer || this.$overlay.addEventListener('click', e);
    }),
    (bt.prototype.setConfig = function (e) {
      return this.chat
        ? this.chat.contact('challenge-update', e)
        : Promise.resolve();
    }),
    (bt.prototype.setData = function (e) {
      this.chat && this.chat.send('challenge-data', e);
    }),
    (_t.prototype.setResponse = function (e) {
      (this.response = e),
        this.$iframe.dom.setAttribute('data-hcaptcha-response', e),
        'off' !== F.recaptchacompat && (this.$textArea0.dom.value = e),
        (this.$textArea1.dom.value = e);
    }),
    (_t.prototype.style = function () {
      switch (this.config.size) {
        case 'compact':
          this.$iframe.css({
            width: 164,
            height: 144,
          });
          break;
        case 'invisible':
          this.$iframe.css({
            display: 'none',
          });
          break;
        default:
          this.$iframe.css({
            width: 303,
            height: 78,
            overflow: 'hidden',
          });
      }
    }),
    (_t.prototype.reset = function () {
      (this._ticked = !1), this.chat && this.chat.send('checkbox-reset');
    }),
    (_t.prototype.clearLoading = function () {
      this.chat && this.chat.send('checkbox-clear');
    }),
    (_t.prototype.sendTranslation = function (e) {
      var t = {
        locale: e,
        table: de.getTable(e) || {},
      };
      this.chat && this.chat.send('checkbox-translate', t);
    }),
    (_t.prototype.status = function (e, t) {
      this.chat &&
        this.chat.send('checkbox-status', {
          text: e || null,
          a11yOnly: t || !1,
        });
    }),
    (_t.prototype.tick = function () {
      (this._ticked = !0), this.chat && this.chat.send('checkbox-tick');
    }),
    (_t.prototype.getTickLocation = function () {
      return this.chat.contact('checkbox-location');
    }),
    (_t.prototype.getOffset = function () {
      var e = this.$iframe.dom;
      e.offsetParent || (e = e.parentElement);
      for (var t = 0, n = 0; e; )
        (t += e.offsetLeft), (n += e.offsetTop), (e = e.offsetParent);
      return {
        top: n,
        left: t,
      };
    }),
    (_t.prototype.getBounding = function () {
      return this.$iframe.dom.getBoundingClientRect();
    }),
    (_t.prototype.destroy = function () {
      this._ticked && this.reset(),
        this.$container.removeElement(this.$iframe),
        this.$container.removeElement(this.$textArea1),
        'off' !== F.recaptchacompat &&
          (this.$container.removeElement(this.$textArea0),
          (this.$textArea0 = this.$textArea0.__destroy())),
        (this.$textArea1 = this.$textArea1.__destroy()),
        (this.$container = this.$container.__destroy()),
        (this.$iframe = this.$iframe.__destroy()),
        wt.removeChat(this.chat),
        (this.chat = this.chat.destroy());
    }),
    (xt.prototype._resetTimer = function () {
      null !== this._responseTimer &&
        (clearTimeout(this._responseTimer), (this._responseTimer = null));
    }),
    (xt.prototype.initChallenge = function (e) {
      e || (e = {}), (this._origData = e);
      var t = this.getGetCaptchaManifest(),
        n = e.charity || null,
        i = e.a11yChallenge || !1,
        o = e.link || null,
        r = e.action || '',
        a = e.rqdata || null,
        s = W.Browser.width(),
        h = W.Browser.height();
      (this._active = !0),
        this._resetTimer(),
        this._resetState(),
        this.checkbox.setResponse(''),
        this.challenge.setup({
          a11yChallenge: i,
          manifest: t,
          width: s,
          height: h,
          charity: n,
          link: o,
          action: r,
          rqdata: a,
          wdata: Ze(),
        });
    }),
    (xt.prototype.getGetCaptchaManifest = function () {
      var e = (this._origData || {}).manifest || null;
      return (
        e || ((e = Object.create(null)).st = Date.now()),
        (e.v = 1),
        (e.topLevel = qe.getData()),
        (e.session = T.getSession()),
        (e.widgetList = T.getCaptchaIdList()),
        (e.widgetId = this.id),
        (e.href = window.location.href),
        (e.prev = JSON.parse(JSON.stringify(this._state))),
        e
      );
    }),
    (xt.prototype.displayChallenge = function (e) {
      if (this._active) {
        var t = this;
        this.visible = !0;
        var n = this.checkbox,
          i = this.challenge,
          o = W.Browser.height();
        if (!('ie' === W.Browser.type && 8 === W.Browser.version)) {
          var r = window
            .getComputedStyle(document.body)
            .getPropertyValue('overflow-y');
          (this.overflow.override = 'hidden' === r),
            this.overflow.override &&
              ((this.overflow.cssUsed =
                '' === document.body.style.overflow &&
                '' === document.body.style.overflowY),
              this.overflow.cssUsed ||
                (this.overflow.value = '' === r ? 'auto' : r),
              (this.overflow.scroll = W.Browser.scrollY()),
              (document.body.style.overflowY = 'auto'));
        }
        return new Promise(function (r) {
          n.status(),
            n.getTickLocation().then(function (a) {
              if (t._active) {
                if (
                  (i.size(e.width, e.height, e.mobile),
                  i.show(),
                  n.clearLoading(),
                  (n.location.bounding = n.getBounding()),
                  (n.location.tick = a),
                  (n.location.offset = n.getOffset()),
                  i.position(n.location))
                )
                  (
                    window.document.scrollingElement ||
                    document.getElementsByTagName('html')[0]
                  ).scrollTop = Math.abs(i.height - o) + i.top;
                r();
              }
            });
        }).then(function () {
          t.onOpen && Q(t.onOpen);
        });
      }
    }),
    (xt.prototype.resize = function (e, t, n) {
      var i = this,
        o = this.checkbox,
        r = this.challenge;
      r.getDimensions(e, t)
        .then(function (e) {
          e && r.size(e.width, e.height, e.mobile),
            (o.location.bounding = o.getBounding()),
            (o.location.offset = o.getOffset()),
            (W.System.mobile && !n) || r.position(o.location);
        })
        ['catch'](function (e) {
          i.closeChallenge.call(i, {
            event: 'challenge-error',
            message: 'Captcha resize caused error.',
            error: e,
          });
        });
    }),
    (xt.prototype.position = function () {
      var e = this.checkbox,
        t = this.challenge;
      W.System.mobile ||
        ((e.location.bounding = e.getBounding()), t.position(e.location));
    }),
    (xt.prototype.reset = function () {
      this.checkbox.reset(),
        this.checkbox.setResponse(''),
        this._resetTimer(),
        this._resetState();
    }),
    (xt.prototype._resetState = function () {
      for (var e in this._state) this._state[e] = !1;
    }),
    (xt.prototype.closeChallenge = function (e) {
      (this.visible = !1), (this._active = !1);
      var t = this,
        n = this.checkbox,
        i = this.challenge;
      this.overflow.override &&
        (((
          window.document.scrollingElement ||
          document.getElementsByTagName('html')[0]
        ).scrollTop = this.overflow.scroll),
        (this.overflow.override = !1),
        (this.overflow.scroll = 0),
        (document.body.style.overflowY = this.overflow.cssUsed
          ? null
          : this.overflow.value));
      var o = e.response || '';
      switch (
        (n.setResponse(o), i.close(e.event), n.$iframe.dom.focus(), e.event)
      ) {
        case 'challenge-escaped':
          (this._state.escaped = !0),
            n.reset(),
            t.onClose && Q(t.onClose),
            t._promise &&
              t._promise.reject(new kt('challenge closed', 'closed'));
          break;
        case 'challenge-expired':
          (this._state.expiredChallenge = !0),
            n.reset(),
            n.status('hCaptcha window closed due to timeout.', !0),
            t.onChalExpire && Q(t.onChalExpire),
            t._promise &&
              t._promise.reject(new kt('challenge expired', 'chalExpired'));
          break;
        case 'challenge-error':
        case 'bundle-error':
        case 'network-error':
          n.reset(),
            'network-error' === e.event && n.status(e.message),
            this.onError && Q(this.onError, e.message || ''),
            t._promise && t._promise.reject(new kt(e.message || '', 'error'));
          break;
        case 'challenge-passed':
          (this._state.passed = !0),
            n.tick(),
            this.onPass && Q(this.onPass, o),
            t._promise &&
              t._promise.resolve({
                response: o,
                key: ft(this.id),
              }),
            'number' == typeof e.expiration &&
              (t._resetTimer(),
              (t._responseTimer = setTimeout(function () {
                try {
                  n.reset(),
                    n.setResponse(''),
                    n.status(
                      'hCaptcha security token has expired. Please complete the challenge again.',
                      !0
                    );
                } catch (Ht) {
                  X(
                    'Checkbox not present or could not destroy on expiration: ' +
                      Ht.message,
                    'error',
                    'global'
                  );
                }
                t.onExpire && Q(t.onExpire),
                  (t._responseTimer = null),
                  (t._state.expiredResponse = !0);
              }, 1e3 * e.expiration)));
      }
      t._promise = null;
    }),
    (xt.prototype.updateTranslation = function (e) {
      this.checkbox.sendTranslation(e), this.challenge.sendTranslation(e);
    }),
    (xt.prototype.isReady = function () {
      return this._ready;
    }),
    (xt.prototype.setReady = function (e) {
      if (((this._ready = e), this._ready))
        for (var t, n = this._listeners.length; --n > -1; )
          (t = this._listeners[n]), this._listeners.splice(n, 1), t();
    }),
    (xt.prototype.setPromise = function (e) {
      this._promise = e;
    }),
    (xt.prototype.onReady = function (e) {
      var t = Array.prototype.slice.call(arguments, 1),
        n = function () {
          e.apply(null, t);
        };
      this._ready ? n() : this._listeners.push(n);
    }),
    (xt.prototype.destroy = function () {
      (this._resetTimer(), this.overflow.override) &&
        (((
          window.document.scrollingElement ||
          document.getElementsByTagName('html')[0]
        ).scrollTop = this.overflow.scroll),
        (this.overflow.override = !1),
        (this.overflow.scroll = 0),
        (document.body.style.overflowY = this.overflow.cssUsed
          ? null
          : this.overflow.value));
      this.challenge.destroy(),
        this.checkbox.destroy(),
        (this.challenge = null),
        (this.checkbox = null);
    }),
    (xt.prototype.setSiteConfig = function (e) {
      var t = e && e.features && e.features.custom_theme;
      if (this.config.themeConfig && t) {
        var n = 'custom-' + this.id;
        pt.add(n, pt.extend(pt.active(), this.config.themeConfig)),
          pt.use(n),
          this.challenge.style();
      }
      return this.challenge.setConfig({
        siteConfig: e,
        wdata: Ze(),
      });
    }),
    (kt.prototype = Error.prototype);
  var St = {
    getCookie: function (e) {
      var t = document.cookie.replace(/ /g, '').split(';');
      try {
        for (var n = '', i = t.length; i-- && !n; )
          t[i].indexOf(e) >= 0 && (n = t[i]);
        return n;
      } catch (Ht) {
        return '';
      }
    },
    hasCookie: function (e) {
      return !!St.getCookie(e);
    },
    supportsAPI: function () {
      try {
        return (
          'hasStorageAccess' in document && 'requestStorageAccess' in document
        );
      } catch (Ht) {
        return !1;
      }
    },
    hasAccess: function () {
      return new Promise(function (e) {
        document
          .hasStorageAccess()
          .then(function () {
            e(!0);
          })
          ['catch'](function () {
            e(!1);
          });
      });
    },
    requestAccess: function () {
      try {
        return document.requestStorageAccess();
      } catch (Ht) {
        return Promise.resolve();
      }
    },
  };

  function Ot() {
    Ie(this, ie, 'canvas');
    var e = this;
    (this.element = this.dom),
      (this.ctx = this.element.getContext('2d')),
      (this.scale = 1),
      (this.dpr = window.devicePixelRatio || 1),
      (this.clearColor = '#fff'),
      (this.ctx.roundedRect = function (t, n, i, o, r) {
        var a = i > 0 ? r : -r,
          s = o > 0 ? r : -r;
        e.ctx.beginPath(),
          e.ctx.moveTo(t + a, n),
          e.ctx.lineTo(t + i - a, n),
          e.ctx.quadraticCurveTo(t + i, n, t + i, n + s),
          e.ctx.lineTo(t + i, n + o - s),
          e.ctx.quadraticCurveTo(t + i, n + o, t + i - a, n + o),
          e.ctx.lineTo(t + a, n + o),
          e.ctx.quadraticCurveTo(t, n + o, t, n + o - s),
          e.ctx.lineTo(t, n + s),
          e.ctx.quadraticCurveTo(t, n, t + a, n),
          e.ctx.closePath();
      });
  }

  function Pt(e) {
    (e = e || {}),
      (this.x = e.x || 0),
      (this.y = e.y || 0),
      (this.rotate = this.rotate.bind(this)),
      (this.getDistance = this.getDistance.bind(this)),
      (this.radius = 0),
      (this.tolerance = 0),
      (this.fill = !1),
      (this.stroke = !1),
      (this.fillColor = '#fff'),
      (this.strokeColor = '#fff'),
      (this.strokeWidth = 1);
  }

  function It(e, t, n) {
    Ie(this, Pt, e),
      (this.handleIn = new Pt(t)),
      (this.handleOut = new Pt(n)),
      (this.prev = null),
      (this.next = null),
      (this.index = 0);
  }

  function Bt(e) {
    if ('en' === e) return Promise.resolve();
    var t = e + '.json';
    return new Promise(function (n, i) {
      Pe.retrieve(t)
        .then(function (n) {
          return (
            n ||
            Pe.file(t, {
              prefix:
                'https://newassets.hcaptcha.com/captcha/v1/ff4a4ed/static/i18n',
            }).then(function (t) {
              return de.addTable(e, t.data), t;
            })
          );
        })
        .then(function (e) {
          n(e.data);
        })
        ['catch'](function (e) {
          i(e);
        });
    });
  }
  Be(Ot, ie),
    (Ot.prototype.dimensions = function (e, t) {
      this.css({
        width: e,
        height: t,
      }),
        (this.element.width = Math.round(e / this.scale) * this.dpr),
        (this.element.height = Math.round(t / this.scale) * this.dpr),
        this.ctx.scale(this.dpr, this.dpr),
        (this.width = Math.round(e / this.scale)),
        (this.height = Math.round(t / this.scale));
    }),
    (Ot.prototype.clear = function () {
      this.ctx &&
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
    }),
    (Ot.prototype.draw = function () {
      this.ctx &&
        ((this.ctx.fillStyle = this.clearColor),
        this.ctx.fillRect(0, 0, this.element.width, this.element.height));
    }),
    (Ot.prototype._destroy = function () {
      this.__destroy(),
        (this.element = null),
        (this.ctx = null),
        (this.width = null),
        (this.height = null);
    }),
    (Pt.prototype.rotate = function (e, t) {
      var n = (function (e) {
          return e * (Math.PI / 180);
        })(t),
        i = Math.sin(n),
        o = Math.cos(n),
        r = this.x - e.x,
        a = this.y - e.y;
      (this.x = r * o - a * i + e.x), (this.y = r * i + a * o + e.y);
    }),
    (Pt.prototype.getDistance = function (e) {
      return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
    }),
    (Pt.prototype.getAngle = function (e) {
      var t = e.x - this.x,
        n = e.y - this.y,
        i = (180 * Math.atan2(n, t)) / Math.PI;
      return i < 0 && (i += 360), i;
    }),
    (Pt.prototype.hitTest = function (e) {
      return this.radius + this.tolerance >= this.getDistance(e);
    }),
    (Pt.prototype.restrict = function (e, t, n, i) {
      if ('x' !== e && 'y' !== e)
        throw new Error('Point.restrict requires a value: x or y');
      return (
        t + this[e] < n
          ? (t = this[e] - n)
          : t + this[e] > i && (t = i - this[e]),
        this[e] + t
      );
    }),
    (Pt.prototype.draw = function (e) {
      e.ctx.beginPath(),
        e.ctx.arc(this.x, this.y, this.radius / e.scale, 0, 2 * Math.PI, !1),
        this.fill && ((e.ctx.fillStyle = this.fillColor), e.ctx.fill()),
        this.stroke &&
          ((e.ctx.strokeStyle = this.strokeColor),
          (e.ctx.lineWidth = this.strokeWidth / e.scale),
          e.ctx.stroke());
    }),
    Be(It, Pt),
    (It.prototype.set = function (e, t, n) {
      (this.x = e.x || this.x),
        (this.y = e.y || this.y),
        t === undefined
          ? ((this.handleIn.x = this.x), (this.handleIn.y = this.y))
          : ((this.handleIn.x = t.x), (this.handleIn.y = t.y)),
        n === undefined
          ? ((this.handleOut.x = this.x), (this.handleOut.y = this.y))
          : ((this.handleOut.x = n.x), (this.handleOut.y = n.y));
    }),
    (It.prototype.clone = function () {
      var e = {
          x: this.x,
          y: this.y,
        },
        t = {
          x: this.handleIn.x,
          y: this.handleIn.y,
        },
        n = {
          x: this.handleOut.x,
          y: this.handleOut.y,
        },
        i = new It();
      return (
        t.x === n.x && t.y === n.y ? i.set(e) : i.set(e, t, n),
        (i.index = this.index),
        (i.prev = this.prev),
        (i.next = this.next),
        (i.radius = this.radius),
        (i.tolerance = this.tolerance),
        (i.fill = this.fill),
        (i.stroke = this.stroke),
        (i.fillColor = this.fillColor),
        (i.strokeColor = this.strokeColor),
        (i.strokeWidth = this.strokeWidth),
        i
      );
    }),
    (It.prototype.move = function (e, t) {
      (this.x += e),
        (this.y += t),
        (this.handleIn.x += e),
        (this.handleIn.y += t),
        (this.handleOut.x += e),
        (this.handleOut.y += t);
    }),
    (It.prototype.render = function (e) {
      this.handleIn.x !== this.x &&
        this.handleIn.y !== this.y &&
        this.handleIn.draw(e),
        this.handleOut.x !== this.x &&
          this.handleOut.y !== this.y &&
          this.handleOut.draw(e),
        this.draw(e);
    });
  var Tt = 0,
    jt = [
      'hl',
      'custom',
      'tplinks',
      'sitekey',
      'theme',
      'size',
      'tabindex',
      'challenge-container',
    ];
  var Mt = {
    render: function (e, t) {
      if (
        ('string' == typeof e && (e = document.getElementById(e)),
        e && 1 === e.nodeType)
      )
        if (
          (function (e) {
            if (!e || !('challenge-container' in e)) return !0;
            var t = e['challenge-container'];
            return (
              'string' == typeof t && (t = document.getElementById(t)),
              !!t && 1 === t.nodeType
            );
          })(t)
        ) {
          if (!1 !== wt.isSupported()) {
            for (
              var n, i, o = e.getElementsByTagName('iframe'), r = -1;
              ++r < o.length && !n;

            )
              (i = o[r].getAttribute('data-hcaptcha-widget-id')) && (n = !0);
            if (n)
              return (
                console.error(
                  'Only one captcha is permitted per parent container.'
                ),
                i
              );
            var a = (function (e, t) {
                for (
                  var n = [
                      'hl',
                      'custom',
                      'tplinks',
                      'sitekey',
                      'theme',
                      'type',
                      'size',
                      'tabindex',
                      'callback',
                      'expired-callback',
                      'chalexpired-callback',
                      'error-callback',
                      'open-callback',
                      'close-callback',
                      'endpoint',
                      'challenge-container',
                    ],
                    i = {},
                    o = 0;
                  o < n.length;
                  o++
                ) {
                  var r = n[o],
                    a = t && t[r];
                  a || (a = e.getAttribute('data-' + r)), a && (i[r] = a);
                }
                return i;
              })(e, t),
              s = Tt++ + Math.random().toString(36).substr(2),
              h = {
                sentry: q,
                reportapi: F.reportapi,
                recaptchacompat: F.recaptchacompat,
                custom: F.custom,
              };
            F.endpointOverride && (h.endpoint = F.endpointOverride),
              null !== F.language && (h.hl = de.getLocale()),
              F.assethost && (h.assethost = F.assethost),
              F.imghost && (h.imghost = F.imghost),
              F.tplinks && (h.tplinks = F.tplinks);
            for (var c = 0; c < jt.length; c++) {
              var l = jt[c];
              l in a && (h[l] = a[l]);
            }
            if (((h.theme = F.theme), a.theme))
              try {
                var d = a.theme;
                'string' == typeof d && (d = JSON.parse(d)),
                  (h.themeConfig = d);
              } catch (Ht) {
                h.theme = d;
              }
            if (
              e instanceof HTMLButtonElement ||
              e instanceof HTMLInputElement
            ) {
              var u = new ie('div', '.h-captcha');
              u.css({
                display: 'none',
              });
              for (var p = null, f = 0; f < e.attributes.length; f++)
                (p = e.attributes[f]).name.startsWith('data-') &&
                  u.setAttribute(p.name, p.value);
              var m =
                e.tagName.toLowerCase() +
                "[data-hcaptcha-widget-id='" +
                s +
                "']";
              e.setAttribute('data-hcaptcha-widget-id', s),
                u.setAttribute('data-hcaptcha-source-id', m),
                e.parentNode.insertBefore(u.dom, e),
                (e.onclick = function (e) {
                  return e.preventDefault(), Et(s);
                }),
                (e = u),
                (h.size = 'invisible');
            }
            try {
              var g = new xt(e, s, h);
              g.challenge.style(), g.checkbox.style();
            } catch (qt) {
              var y =
                'Your browser plugins or privacy policies are blocking the hCaptcha service. Please disable them for hCaptcha.com';
              return (
                qt instanceof Ct &&
                  ((y = qt.message), console.error(qt.reason)),
                void J(e, y)
              );
            }
            return (
              a.callback && (g.onPass = a.callback),
              a['expired-callback'] && (g.onExpire = a['expired-callback']),
              a['chalexpired-callback'] &&
                (g.onChalExpire = a['chalexpired-callback']),
              a['open-callback'] && (g.onOpen = a['open-callback']),
              a['close-callback'] && (g.onClose = a['close-callback']),
              a['error-callback'] && (g.onError = a['error-callback']),
              qe.setData('inv', 'invisible' === h.size),
              g.checkbox.chat.listen('checkbox-selected', function (e) {
                qe.setData('exec', !1), g.onReady(g.initChallenge, e);
              }),
              g.checkbox.chat.listen('checkbox-loaded', function (e) {
                (g.checkbox.location.bounding = g.checkbox.getBounding()),
                  (g.checkbox.location.tick = e),
                  (g.checkbox.location.offset = g.checkbox.getOffset()),
                  g.checkbox.sendTranslation(h.hl);
              }),
              g.checkbox.chat.listen('checkbox-setup', function (e) {
                F.endpointOverride && (e.endpoint = null),
                  g.challenge.onReady(function () {
                    g.setSiteConfig(e).then(function () {
                      g.setReady(!0);
                    });
                  });
              }),
              g.challenge.chat.listen('challenge-loaded', function () {
                g.challenge.setReady(!0), g.challenge.sendTranslation(h.hl);
              }),
              g.challenge.chat.answer('challenge-ready', function (e, t) {
                g.displayChallenge(e).then(t.resolve);
              }),
              g.challenge.chat.listen('challenge-resize', function () {
                var e = W.Browser.width(),
                  t = W.Browser.height();
                g.resize(e, t);
              }),
              g.challenge.chat.listen('challenge-closed', g.closeChallenge),
              g.challenge.chat.answer('get-url', function (e) {
                e.resolve(window.location.href);
              }),
              g.challenge.chat.answer('getcaptcha-manifest', function (e) {
                e.resolve(g.getGetCaptchaManifest());
              }),
              g.challenge.chat.answer('check-api', function (e) {
                e.resolve(qe.getData());
              }),
              g.challenge.chat.listen('challenge-key', function (e) {
                T.pushSession(e.key, g.id);
              }),
              g.challenge.onOverlayClick(function () {
                g.closeChallenge({
                  event: 'challenge-escaped',
                });
              }),
              g.challenge.chat.listen('challenge-language', v),
              v(
                {
                  locale: h.hl,
                },
                !0
              ),
              g.challenge.chat.answer('get-ac', function (e) {
                e.resolve(St.hasCookie('hc_accessibility'));
              }),
              T.add(g),
              s
            );
          }
          J(
            e,
            "Your browser is missing or has disabled Cross-Window Messaging. Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> or enable it for hCaptcha.com"
          );
        } else
          console.log(
            "[hCaptcha] render: invalid challenge container '" +
              t['challenge-container'] +
              "'."
          );
      else console.log("[hCaptcha] render: invalid container '" + e + "'.");

      function v(e, t) {
        var n = e.locale;

        function i(e) {
          if (e)
            try {
              e.updateTranslation(n);
            } catch (qt) {
              X(
                'Failed to update text translation: ' + JSON.stringify(qt),
                'error',
                'translation'
              );
            }
        }
        n &&
          Bt(n)
            .then(function () {
              t ? i(g) : T.each(i);
            })
            ['catch'](function (e) {
              X('Language failed to load: ' + n, 'error', 'api');
            });
      }
    },
    reset: function (e) {
      var t;
      if (e) {
        if (!(t = T.getById(e)))
          throw Error('[hCaptcha] invalid captcha id: ' + e);
        t.reset();
      } else {
        if (!(t = T.getByIndex(0)))
          throw Error('[hCaptcha] no captchas exist.');
        t.reset();
      }
    },
    remove: function (e) {
      var t = e ? T.getById(e) : T.getByIndex(0);
      if (!t)
        throw e
          ? Error('[hCaptcha] invalid captcha id: ' + e)
          : Error('[hCaptcha] no captchas exist.');
      T.remove(t), t.destroy(), (t = null);
    },
    execute: Et,
    getResponse: function (e) {
      var t, n;
      if (
        ((n = e ? T.getById(e) : T.getByIndex(0)) &&
          (t = n.checkbox.response || ''),
        void 0 !== t)
      )
        return t;
      throw e
        ? new Error('[hCaptcha] invalid captcha id: ' + e)
        : new Error('[hCaptcha] no captchas exist.');
    },
    getRespKey: ft,
    close: function (e) {
      var t = !1;
      if (!(t = e ? T.getById(e) : T.getByIndex(0)))
        throw e
          ? Error('[hCaptcha] invalid captcha id: ' + e)
          : Error('[hCaptcha] no captchas exist.');
      t.closeChallenge({
        event: 'challenge-escaped',
      });
    },
    setData: function (e, t) {
      if (
        ('object' != typeof e || t || ((t = e), (e = null)),
        !t || 'object' != typeof t)
      )
        throw Error('[hCaptcha] invalid data supplied');
      var n = !1;
      if (!(n = e ? T.getById(e) : T.getByIndex(0)))
        throw e
          ? Error('[hCaptcha] invalid captcha id: ' + e)
          : Error('[hCaptcha] no captchas exist.');
      var i = n.challenge.setData.bind(n.challenge);
      n.onReady(i, t);
    },
    nodes: T,
  };
  U.file = 'hcaptcha';
  var At = document.currentScript,
    Lt = !1,
    $t = !1,
    Dt = 'on',
    Rt = W.Browser.width() / W.Browser.height(),
    Nt = window.hcaptcha || !1;

  function zt() {
    var e = W.Browser.width(),
      t = W.Browser.height(),
      n = W.System.mobile && Rt !== e / t;
    (Rt = e / t),
      Ft(),
      Mt.nodes.each(function (i) {
        i.visible && i.resize(e, t, n);
      });
  }

  function Wt(e) {
    e.preventDefault && e.preventDefault(),
      Ut(),
      Mt.nodes.each(function (e) {
        e.visible && e.position();
      });
  }

  function Ut() {
    qe.circBuffPush('xy', [
      W.Browser.scrollX(),
      W.Browser.scrollY(),
      document.documentElement.clientWidth / W.Browser.width(),
      Date.now(),
    ]);
  }

  function Ft() {
    qe.circBuffPush('wn', [
      W.Browser.width(),
      W.Browser.height(),
      W.System.dpr(),
      Date.now(),
    ]);
  }
  !(function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    !0 !== Ye &&
    'interactive' !== document.readyState &&
    'loaded' !== document.readyState &&
    'complete' !== document.readyState
      ? (He.push({
          fn: e,
          args: t,
        }),
        !1 === Xe && Ve())
      : setTimeout(function () {
          e(t);
        }, 1);
  })(function () {
    Nt ||
      (!(function () {
        var e;
        e = At ? [At] : document.getElementsByTagName('script');
        var t = -1,
          n = !1,
          i = null,
          o = null;
        for (; ++t < e.length && !1 === n; )
          e[t] &&
            e[t].src &&
            ((o = (i = e[t].src.split('?'))[0]),
            /\/(hcaptcha|1\/api)\.js$/.test(o) &&
              ((n = e[t]),
              o &&
                -1 !== o.toLowerCase().indexOf('www.') &&
                console.warn(
                  '[hCaptcha] JS API is being loaded from www.hcaptcha.com. Please use https://js.hcaptcha.com/1/api.js'
                )));
        if (!1 === n) return;
        var r = (function (e) {
          for (
            var t,
              n,
              i,
              o = {},
              r = e ? (e.indexOf('&') >= 0 ? e.split('&') : [e]) : [],
              a = 0;
            a < r.length;
            a++
          )
            if (r[a].indexOf('=') >= 0) {
              if (
                ((t = r[a].split('=')),
                (n = decodeURIComponent(t[0])),
                ('false' !== (i = decodeURIComponent(t[1])) && 'true' !== i) ||
                  (i = 'true' === i),
                'theme' === n || 'themeConfig' === n)
              )
                try {
                  i = JSON.parse(i);
                } catch (Ht) {}
              o[n] = i;
            }
          return o;
        })(i[1]);
        (Lt = r.onload || !1),
          ($t = r.render || !1),
          'off' === r.tplinks && (Dt = 'off');
        (F.tplinks = Dt),
          (F.language = r.hl || null),
          r.endpoint && (F.endpointOverride = r.endpoint);
        (F.reportapi = r.reportapi || F.reportapi),
          (F.assethost = r.assethost || null),
          (F.imghost = r.imghost || null),
          (F.custom = r.custom || F.custom),
          (F.recaptchacompat = r.recaptchacompat || F.recaptchacompat),
          (U.host = r.host || window.location.hostname),
          (F.language =
            F.language ||
            window.navigator.userLanguage ||
            window.navigator.language),
          de.setLocale(F.language),
          (a = r.sentry === undefined || r.sentry),
          void (q = a),
          'off' === F.recaptchacompat
            ? console.log('recaptchacompat disabled')
            : (window.grecaptcha = Jt);
        var a;
      })(),
      (function () {
        var e = de.getLocale();
        if (e.indexOf('en') >= 0) return;
        Bt(e)
          .then(function () {
            Mt.nodes.each(function (t) {
              if (t)
                try {
                  t.updateTranslation(e);
                } catch (qt) {
                  X(
                    'Failed to update text translation: ' + JSON.stringify(qt),
                    'error',
                    'translation'
                  );
                }
            });
          })
          ['catch'](function () {
            X('Language failed to load: ' + e, 'error', 'api');
          });
      })(),
      !1 === $t || 'onload' === $t
        ? (function (e) {
            for (
              var t = document.getElementsByClassName('h-captcha'),
                n = [],
                i = 0;
              i < t.length;
              i++
            )
              n.push(t[i]);
            var o = [];
            if ('off' !== F.recaptchacompat)
              for (
                var r = document.getElementsByClassName('g-recaptcha'), a = 0;
                a < r.length;
                a++
              )
                o.push(r[a]);
            for (var s = [].concat(n, o), h = 0; h < s.length; h++) e(s[h]);
          })(Mt.render)
        : 'explicit' !== $t &&
          console.log(
            "hcaptcha: invalid render parameter '" +
              $t +
              "', using 'explicit' instead."
          ),
      Lt &&
        setTimeout(function () {
          Q(Lt);
        }, 1),
      (function () {
        try {
          qe.record(),
            qe.setData('sc', W.Browser.getScreenDimensions()),
            qe.setData('nv', W.Browser.interrogateNavigator()),
            qe.setData('dr', document.referrer),
            Ft(),
            Ut();
        } catch (qt) {}
      })(),
      Ke.addEventListener('resize', zt),
      Ke.addEventListener('scroll', Wt));
  });
  var Jt = {
    render: Mt.render,
    remove: Mt.remove,
    execute: Mt.execute,
    reset: Mt.reset,
    close: Mt.close,
    setData: Mt.setData,
    getResponse: Mt.getResponse,
    getRespKey: Mt.getRespKey,
  };
  return Jt;
})();

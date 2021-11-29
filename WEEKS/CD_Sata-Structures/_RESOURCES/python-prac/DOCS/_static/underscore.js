// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function () {
  function q(a, c, d) {
    if (a === c) return a !== 0 || 1 / a == 1 / c;
    if (a == null || c == null) return a === c;
    if (a._chain) a = a._wrapped;
    if (c._chain) c = c._wrapped;
    if (a.isEqual && b.isFunction(a.isEqual)) return a.isEqual(c);
    if (c.isEqual && b.isFunction(c.isEqual)) return c.isEqual(a);
    const e = l.call(a);
    if (e != l.call(c)) return false;
    switch (e) {
      case '[object String]':
        return a == String(c);
      case '[object Number]':
        return a != +a ? c != +c : a == 0 ? 1 / a == 1 / c : a == +c;
      case '[object Date]':
      case '[object Boolean]':
        return +a == +c;
      case '[object RegExp]':
        return (
          a.source == c.source &&
          a.global == c.global &&
          a.multiline == c.multiline &&
          a.ignoreCase == c.ignoreCase
        );
    }
    if (typeof a != 'object' || typeof c != 'object') return false;
    for (var f = d.length; f--; ) if (d[f] == a) return true;
    d.push(a);
    const f = 0;
    let g = true;
    if (e == '[object Array]') {
      if (((f = a.length), (g = f == c.length)))
        for (; f--; ) if (!(g = f in a == f in c && q(a[f], c[f], d))) break;
    } else {
      if (
        'constructor' in a != 'constructor' in c ||
        a.constructor != c.constructor
      )
        return false;
      for (var h in a)
        if (b.has(a, h) && (f++, !(g = b.has(c, h) && q(a[h], c[h], d)))) break;
      if (g) {
        for (h in c) if (b.has(c, h) && !f--) break;
        g = !f;
      }
    }
    d.pop();
    return g;
  }
  const r = this;
  const G = r._;
  const n = {};
  const k = Array.prototype;
  var o = Object.prototype;
  const i = k.slice;
  const H = k.unshift;
  var l = o.toString;
  const I = o.hasOwnProperty;
  const w = k.forEach;
  const x = k.map;
  const y = k.reduce;
  const z = k.reduceRight;
  const A = k.filter;
  const B = k.every;
  const C = k.some;
  const p = k.indexOf;
  const D = k.lastIndexOf;
  const o = Array.isArray;
  const J = Object.keys;
  const s = Function.prototype.bind;

  var b = (a) => {
    return new m(a);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      exports = module.exports = b;
    exports._ = b;
  } else r._ = b;
  b.VERSION = '1.3.1';
  const j =
    (b.each =
    b.forEach =
      (a, c, d) => {
        if (a != null)
          if (w && a.forEach === w) a.forEach(c, d);
          else if (a.length === +a.length)
            for (var e = 0, f = a.length; e < f; e++) {
              if (e in a && c.call(d, a[e], e, a) === n) break;
            }
          else
            for (e in a) if (b.has(a, e) && c.call(d, a[e], e, a) === n) break;
      });
  b.map = b.collect = (a, c, b) => {
    const e = [];
    if (a == null) return e;
    if (x && a.map === x) return a.map(c, b);
    j(a, (a, g, h) => {
      e[e.length] = c.call(b, a, g, h);
    });
    if (a.length === +a.length) e.length = a.length;
    return e;
  };
  b.reduce =
    b.foldl =
    b.inject =
      function (a, c, d, e) {
        let f = arguments.length > 2;
        a == null && (a = []);
        if (y && a.reduce === y)
          return e && (c = b.bind(c, e)), f ? a.reduce(c, d) : a.reduce(c);
        j(a, (a, b, i) => {
          f ? (d = c.call(e, d, a, b, i)) : ((d = a), (f = true));
        });
        if (!f)
          throw new TypeError('Reduce of empty array with no initial value');
        return d;
      };
  b.reduceRight = b.foldr = function (a, c, d, e) {
    const f = arguments.length > 2;
    a == null && (a = []);
    if (z && a.reduceRight === z)
      return (
        e && (c = b.bind(c, e)), f ? a.reduceRight(c, d) : a.reduceRight(c)
      );
    const g = b.toArray(a).reverse();
    e && !f && (c = b.bind(c, e));
    return f ? b.reduce(g, c, d, e) : b.reduce(g, c);
  };
  b.find = b.detect = (a, c, b) => {
    let e;
    E(a, (a, g, h) => {
      if (c.call(b, a, g, h)) return (e = a), true;
    });
    return e;
  };
  b.filter = b.select = (a, c, b) => {
    const e = [];
    if (a == null) return e;
    if (A && a.filter === A) return a.filter(c, b);
    j(a, (a, g, h) => {
      c.call(b, a, g, h) && (e[e.length] = a);
    });
    return e;
  };
  b.reject = (a, c, b) => {
    const e = [];
    if (a == null) return e;
    j(a, (a, g, h) => {
      c.call(b, a, g, h) || (e[e.length] = a);
    });
    return e;
  };
  b.every = b.all = (a, c, b) => {
    let e = true;
    if (a == null) return e;
    if (B && a.every === B) return a.every(c, b);
    j(a, (a, g, h) => {
      if (!(e = e && c.call(b, a, g, h))) return n;
    });
    return e;
  };
  var E =
    (b.some =
    b.any =
      (a, c, d) => {
        c || (c = b.identity);
        let e = false;
        if (a == null) return e;
        if (C && a.some === C) return a.some(c, d);
        j(a, (a, b, h) => {
          if (e || (e = c.call(d, a, b, h))) return n;
        });
        return !!e;
      });
  b.include = b.contains = (a, c) => {
    let b = false;
    if (a == null) return b;
    return p && a.indexOf === p
      ? a.indexOf(c) != -1
      : (b = E(a, (a) => {
          return a === c;
        }));
  };
  b.invoke = function (a, c) {
    const d = i.call(arguments, 2);
    return b.map(a, (a) => {
      return (b.isFunction(c) ? c || a : a[c]).apply(a, d);
    });
  };
  b.pluck = (a, c) => {
    return b.map(a, (a) => {
      return a[c];
    });
  };
  b.max = (a, c, d) => {
    if (!c && b.isArray(a)) return Math.max.apply(Math, a);
    if (!c && b.isEmpty(a)) return -Infinity;
    let e = { computed: -Infinity };
    j(a, (a, b, h) => {
      b = c ? c.call(d, a, b, h) : a;
      b >= e.computed && (e = { value: a, computed: b });
    });
    return e.value;
  };
  b.min = (a, c, d) => {
    if (!c && b.isArray(a)) return Math.min.apply(Math, a);
    if (!c && b.isEmpty(a)) return Infinity;
    let e = { computed: Infinity };
    j(a, (a, b, h) => {
      b = c ? c.call(d, a, b, h) : a;
      b < e.computed && (e = { value: a, computed: b });
    });
    return e.value;
  };
  b.shuffle = (a) => {
    const b = [];
    let d;
    j(a, (a, f) => {
      f == 0
        ? (b[0] = a)
        : ((d = Math.floor(Math.random() * (f + 1))),
          (b[f] = b[d]),
          (b[d] = a));
    });
    return b;
  };
  b.sortBy = (a, c, d) => {
    return b.pluck(
      b
        .map(a, (a, b, g) => {
          return { value: a, criteria: c.call(d, a, b, g) };
        })
        .sort((a, b) => {
          const c = a.criteria,
            d = b.criteria;
          return c < d ? -1 : c > d ? 1 : 0;
        }),
      'value'
    );
  };
  b.groupBy = (a, c) => {
    const d = {},
      e = b.isFunction(c)
        ? c
        : (a) => {
            return a[c];
          };
    j(a, (a, b) => {
      const c = e(a, b);
      (d[c] || (d[c] = [])).push(a);
    });
    return d;
  };
  b.sortedIndex = (a, c, d) => {
    d || (d = b.identity);
    for (var e = 0, f = a.length; e < f; ) {
      const g = (e + f) >> 1;
      d(a[g]) < d(c) ? (e = g + 1) : (f = g);
    }
    return e;
  };
  b.toArray = (a) => {
    return !a
      ? []
      : a.toArray
      ? a.toArray()
      : b.isArray(a)
      ? i.call(a)
      : b.isArguments(a)
      ? i.call(a)
      : b.values(a);
  };
  b.size = (a) => {
    return b.toArray(a).length;
  };
  b.first = b.head = (a, b, d) => {
    return b != null && !d ? i.call(a, 0, b) : a[0];
  };
  b.initial = (a, b, d) => {
    return i.call(a, 0, a.length - (b == null || d ? 1 : b));
  };
  b.last = (a, b, d) => {
    return b != null && !d
      ? i.call(a, Math.max(a.length - b, 0))
      : a[a.length - 1];
  };
  b.rest = b.tail = (a, b, d) => {
    return i.call(a, b == null || d ? 1 : b);
  };
  b.compact = (a) => {
    return b.filter(a, (a) => {
      return !!a;
    });
  };
  b.flatten = (a, c) => {
    return b.reduce(
      a,
      (a, e) => {
        if (b.isArray(e)) return a.concat(c ? e : b.flatten(e));
        a[a.length] = e;
        return a;
      },
      []
    );
  };
  b.without = function (a) {
    return b.difference(a, i.call(arguments, 1));
  };
  b.uniq = b.unique = (a, c, d) => {
    const d = d ? b.map(a, d) : a,
      e = [];
    b.reduce(
      d,
      (d, g, h) => {
        if (0 == h || (c === true ? b.last(d) != g : !b.include(d, g)))
          (d[d.length] = g), (e[e.length] = a[h]);
        return d;
      },
      []
    );
    return e;
  };
  b.union = function () {
    return b.uniq(b.flatten(arguments, true));
  };
  b.intersection = b.intersect = function (a) {
    const c = i.call(arguments, 1);
    return b.filter(b.uniq(a), (a) => {
      return b.every(c, (c) => {
        return b.indexOf(c, a) >= 0;
      });
    });
  };
  b.difference = function (a) {
    const c = b.flatten(i.call(arguments, 1));
    return b.filter(a, (a) => {
      return !b.include(c, a);
    });
  };
  b.zip = function () {
    for (
      var a = i.call(arguments),
        c = b.max(b.pluck(a, 'length')),
        d = Array(c),
        e = 0;
      e < c;
      e++
    )
      d[e] = b.pluck(a, '' + e);
    return d;
  };
  b.indexOf = (a, c, d) => {
    if (a == null) return -1;
    let e;
    if (d) return (d = b.sortedIndex(a, c)), a[d] === c ? d : -1;
    if (p && a.indexOf === p) return a.indexOf(c);
    for (d = 0, e = a.length; d < e; d++) if (d in a && a[d] === c) return d;
    return -1;
  };
  b.lastIndexOf = (a, b) => {
    if (a == null) return -1;
    if (D && a.lastIndexOf === D) return a.lastIndexOf(b);
    for (let d = a.length; d--; ) if (d in a && a[d] === b) return d;
    return -1;
  };
  b.range = function (a, b, d) {
    arguments.length <= 1 && ((b = a || 0), (a = 0));
    for (
      var d = arguments[2] || 1,
        e = Math.max(Math.ceil((b - a) / d), 0),
        f = 0,
        g = Array(e);
      f < e;

    )
      (g[f++] = a), (a += d);
    return g;
  };
  const F = () => {};
  b.bind = function (a, c) {
    let d, e;
    if (a.bind === s && s) return s.apply(a, i.call(arguments, 1));
    if (!b.isFunction(a)) throw new TypeError();
    e = i.call(arguments, 2);
    return (d = function () {
      if (!(this instanceof d)) return a.apply(c, e.concat(i.call(arguments)));
      F.prototype = a.prototype;
      const b = new F(),
        g = a.apply(b, e.concat(i.call(arguments)));
      return Object(g) === g ? g : b;
    });
  };
  b.bindAll = function (a) {
    let c = i.call(arguments, 1);
    c.length == 0 && (c = b.functions(a));
    j(c, (c) => {
      a[c] = b.bind(a[c], a);
    });
    return a;
  };
  b.memoize = (a, c) => {
    const d = {};
    c || (c = b.identity);
    return function () {
      const e = c.apply(this, arguments);
      return b.has(d, e) ? d[e] : (d[e] = a.apply(this, arguments));
    };
  };
  b.delay = function (a, b) {
    const d = i.call(arguments, 2);
    return setTimeout(() => {
      return a.apply(a, d);
    }, b);
  };
  b.defer = function (a) {
    return b.delay.apply(b, [a, 1].concat(i.call(arguments, 1)));
  };
  b.throttle = (a, c) => {
    let d;
    let e;
    let f;
    let g;
    let h;

    const i = b.debounce(() => {
      h = g = false;
    }, c);

    return function () {
      d = this;
      e = arguments;
      let b;
      f ||
        (f = setTimeout(() => {
          f = null;
          h && a.apply(d, e);
          i();
        }, c));
      g ? (h = true) : a.apply(d, e);
      i();
      g = true;
    };
  };
  b.debounce = (a, b) => {
    let d;
    return function () {
      const e = this,
        f = arguments;
      clearTimeout(d);
      d = setTimeout(() => {
        d = null;
        a.apply(e, f);
      }, b);
    };
  };
  b.once = (a) => {
    let b = false,
      d;
    return function () {
      if (b) return d;
      b = true;
      return (d = a.apply(this, arguments));
    };
  };
  b.wrap = (a, b) => {
    return function () {
      const d = [a].concat(i.call(arguments, 0));
      return b.apply(this, d);
    };
  };
  b.compose = function () {
    const a = arguments;
    return function () {
      for (var b = arguments, d = a.length - 1; d >= 0; d--)
        b = [a[d].apply(this, b)];
      return b[0];
    };
  };
  b.after = (a, b) => {
    return a <= 0
      ? b()
      : function () {
          if (--a < 1) return b.apply(this, arguments);
        };
  };
  b.keys =
    J ||
    ((a) => {
      if (a !== Object(a)) throw new TypeError('Invalid object');
      const c = [];
      let d;
      for (d in a) b.has(a, d) && (c[c.length] = d);
      return c;
    });
  b.values = (a) => {
    return b.map(a, b.identity);
  };
  b.functions = b.methods = (a) => {
    const c = [];
    let d;
    for (d in a) b.isFunction(a[d]) && c.push(d);
    return c.sort();
  };
  b.extend = function (a) {
    j(i.call(arguments, 1), (b) => {
      for (const d in b) a[d] = b[d];
    });
    return a;
  };
  b.defaults = function (a) {
    j(i.call(arguments, 1), (b) => {
      for (const d in b) a[d] == null && (a[d] = b[d]);
    });
    return a;
  };
  b.clone = (a) => {
    return !b.isObject(a) ? a : b.isArray(a) ? a.slice() : b.extend({}, a);
  };
  b.tap = (a, b) => {
    b(a);
    return a;
  };
  b.isEqual = (a, b) => {
    return q(a, b, []);
  };
  b.isEmpty = (a) => {
    if (b.isArray(a) || b.isString(a)) return a.length === 0;
    for (const c in a) if (b.has(a, c)) return false;
    return true;
  };
  b.isElement = (a) => {
    return !!(a && a.nodeType == 1);
  };
  b.isArray =
    o ||
    ((a) => {
      return l.call(a) == '[object Array]';
    });
  b.isObject = (a) => {
    return a === Object(a);
  };
  b.isArguments = (a) => {
    return l.call(a) == '[object Arguments]';
  };
  if (!b.isArguments(arguments))
    b.isArguments = (a) => {
      return !(!a || !b.has(a, 'callee'));
    };
  b.isFunction = (a) => {
    return l.call(a) == '[object Function]';
  };
  b.isString = (a) => {
    return l.call(a) == '[object String]';
  };
  b.isNumber = (a) => {
    return l.call(a) == '[object Number]';
  };
  b.isNaN = (a) => {
    return a !== a;
  };
  b.isBoolean = (a) => {
    return a === true || a === false || l.call(a) == '[object Boolean]';
  };
  b.isDate = (a) => {
    return l.call(a) == '[object Date]';
  };
  b.isRegExp = (a) => {
    return l.call(a) == '[object RegExp]';
  };
  b.isNull = (a) => {
    return a === null;
  };
  b.isUndefined = (a) => {
    return a === void 0;
  };
  b.has = (a, b) => {
    return I.call(a, b);
  };
  b.noConflict = function () {
    r._ = G;
    return this;
  };
  b.identity = (a) => {
    return a;
  };
  b.times = (a, b, d) => {
    for (let e = 0; e < a; e++) b.call(d, e);
  };
  b.escape = (a) => {
    return ('' + a)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };
  b.mixin = (a) => {
    j(b.functions(a), (c) => {
      K(c, (b[c] = a[c]));
    });
  };
  let L = 0;
  b.uniqueId = (a) => {
    const b = L++;
    return a ? a + b : b;
  };
  b.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g,
  };
  const t = /.^/,
    u = (a) => {
      return a.replace(/\\\\/g, '\\').replace(/\\'/g, "'");
    };
  b.template = (a, c) => {
    var d = b.templateSettings;

    const d =
      "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" +
      a
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(d.escape || t, (a, b) => {
          return "',_.escape(" + u(b) + "),'";
        })
        .replace(d.interpolate || t, (a, b) => {
          return "'," + u(b) + ",'";
        })
        .replace(d.evaluate || t, (a, b) => {
          return "');" + u(b).replace(/[\r\n\t]/g, ' ') + ";__p.push('";
        })
        .replace(/\r/g, '\\r')
        .replace(/\n/g, '\\n')
        .replace(/\t/g, '\\t') +
      "');}return __p.join('');";

    const e = new Function('obj', '_', d);
    return c
      ? e(c, b)
      : function (a) {
          return e.call(this, a, b);
        };
  };
  b.chain = (a) => {
    return b(a).chain();
  };

  class m {
    constructor(a) {
      this._wrapped = a;
    }

    chain() {
      this._chain = true;
      return this;
    }

    value() {
      return this._wrapped;
    }
  }

  b.prototype = m.prototype;

  const v = (a, c) => {
    return c ? b(a).chain() : a;
  };

  var K = (a, c) => {
    m.prototype[a] = function () {
      const a = i.call(arguments);
      H.call(a, this._wrapped);
      return v(c.apply(b, a), this._chain);
    };
  };

  b.mixin(b);
  j('pop,push,reverse,shift,sort,splice,unshift'.split(','), (a) => {
    const b = k[a];
    m.prototype[a] = function () {
      const d = this._wrapped;
      b.apply(d, arguments);
      const e = d.length;
      (a == 'shift' || a == 'splice') && e === 0 && delete d[0];
      return v(d, this._chain);
    };
  });
  j(['concat', 'join', 'slice'], (a) => {
    const b = k[a];
    m.prototype[a] = function () {
      return v(b.apply(this._wrapped, arguments), this._chain);
    };
  });
}.call(this));

var e, t;
(e = window), (t = function () {
  return (function (e) {
    var t = {};

    function r (n) {
      if (t[n]) return t[n].exports;
      var u = (t[n] = {
        i: n,
        l: !1,
        exports: {},
      });
      return e[n].call (u.exports, u, u.exports, r), (u.l = !0), u.exports;
    }
    return (r.m = e), (r.c = t), (r.d = function (e, t, n) {
      r.o (e, t) ||
        Object.defineProperty (e, t, {
          enumerable: !0,
          get: n,
        });
    }), (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty (e, Symbol.toStringTag, {
          value: 'Module',
        }), Object.defineProperty (e, '__esModule', {
        value: !0,
      });
    }), (r.t = function (e, t) {
      if ((1 & t && (e = r (e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create (null);
      if (
        (r.r (n), Object.defineProperty (n, 'default', {
          enumerable: !0,
          value: e,
        }), 2 & t && 'string' != typeof e)
      )
        for (var u in e)
          r.d (
            n,
            u,
            function (t) {
              return e[t];
            }.bind (null, u)
          );
      return n;
    }), (r.n = function (e) {
      var t = e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
      return r.d (t, 'a', t), t;
    }), (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call (e, t);
    }), (r.p = '/'), r ((r.s = 39));
  }) ([
    function (e, t, r) {
      'use strict';
      r.d (t, 'd', function () {
        return x;
      }), r.d (t, 'b', function () {
        return p;
      }), r.d (t, 'a', function () {
        return m;
      }), r.d (t, 'c', function () {
        return n;
      });
      var n,
        u,
        o,
        i,
        a = {},
        c = [],
        l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

      function s (e, t) {
        for (var r in t)
          e[r] = t[r];
        return e;
      }

      function f (e) {
        var t = e.parentNode;
        t && t.removeChild (e);
      }

      function p (e, t, r) {
        var n, u, o, i = arguments, a = {};
        for (o in t)
          'key' == o ? (n = t[o]) : 'ref' == o ? (u = t[o]) : (a[o] = t[o]);
        if (arguments.length > 3)
          for ((r = [r]), (o = 3); o < arguments.length; o++)
            r.push (i[o]);
        if (
          (null != r && (a.children = r), 'function' == typeof e &&
            null != e.defaultProps)
        )
          for (o in e.defaultProps)
            void 0 === a[o] && (a[o] = e.defaultProps[o]);
        return d (e, a, n, u, null);
      }

      function d (e, t, r, u, o) {
        var i = {
          type: e,
          props: t,
          key: r,
          ref: u,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == o ? ++n.__v : o,
        };
        return null != n.vnode && n.vnode (i), i;
      }

      function m (e) {
        return e.children;
      }

      function v (e, t) {
        (this.props = e), (this.context = t);
      }

      function D (e, t) {
        if (null == t) return e.__ ? D (e.__, e.__.__k.indexOf (e) + 1) : null;
        for (var r; t < e.__k.length; t++)
          if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return 'function' == typeof e.type ? D (e) : null;
      }

      function h (e) {
        var t, r;
        if (null != (e = e.__) && null != e.__c) {
          for ((e.__e = e.__c.base = null), (t = 0); t < e.__k.length; t++)
            if (null != (r = e.__k[t]) && null != r.__e) {
              e.__e = e.__c.base = r.__e;
              break;
            }
          return h (e);
        }
      }

      function y (e) {
        ((!e.__d && (e.__d = !0) && u.push (e) && !g.__r++) ||
          i !== n.debounceRendering) &&
          ((i = n.debounceRendering) || o) (g);
      }

      function g () {
        for (var e; (g.__r = u.length); )
          (e = u.sort (function (e, t) {
            return e.__v.__b - t.__v.__b;
          })), (u = []), e.some (function (e) {
            var t, r, n, u, o, i;
            e.__d &&
              ((o = (u = (t = e).__v).__e), (i = t.__P) &&
                ((r = []), ((n = s ({}, u)).__v = u.__v + 1), j (
                  i,
                  u,
                  n,
                  t.__n,
                  void 0 !== i.ownerSVGElement,
                  null != u.__h ? [o] : null,
                  r,
                  null == o ? D (u) : o,
                  u.__h
                ), P (r, u), u.__e != o && h (u)));
          });
      }

      function b (e, t, r, n, u, o, i, l, s, f) {
        var p, v, h, y, g, b, C, E = (n && n.__k) || c, F = E.length;
        for ((r.__k = []), (p = 0); p < t.length; p++)
          if (
            null !=
            (y = r.__k[p] = null == (y = t[p]) || 'boolean' == typeof y
              ? null
              : 'string' == typeof y ||
                  'number' == typeof y ||
                  'bigint' == typeof y
                  ? d (null, y, null, null, y)
                  : Array.isArray (y)
                      ? d (
                          m,
                          {
                            children: y,
                          },
                          null,
                          null,
                          null
                        )
                      : y.__b > 0 ? d (y.type, y.props, y.key, null, y.__v) : y)
          ) {
            if (
              ((y.__ = r), (y.__b = r.__b + 1), null === (h = E[p]) ||
                (h && y.key == h.key && y.type === h.type))
            )
              E[p] = void 0;
            else
              for (v = 0; v < F; v++) {
                if ((h = E[v]) && y.key == h.key && y.type === h.type) {
                  E[v] = void 0;
                  break;
                }
                h = null;
              }
            j (e, y, (h = h || a), u, o, i, l, s, f), (g = y.__e), (v =
              y.ref) &&
              h.ref != v &&
              (C || (C = []), h.ref && C.push (h.ref, null, y), C.push (
                v,
                y.__c || g,
                y
              )), null != g
              ? (null == b && (b = g), 'function' == typeof y.type &&
                  null != y.__k &&
                  y.__k === h.__k
                  ? (y.__d = s = O (y, s, e))
                  : (s = A (e, y, h, E, g, s)), f || 'option' !== r.type
                  ? 'function' == typeof r.type && (r.__d = s)
                  : (e.value = ''))
              : s && h.__e == s && s.parentNode != e && (s = D (h));
          }
        for ((r.__e = b), (p = F); p--; )
          null != E[p] &&
            ('function' == typeof r.type &&
              null != E[p].__e &&
              E[p].__e == r.__d &&
              (r.__d = D (n, p + 1)), B (E[p], E[p]));
        if (C) for (p = 0; p < C.length; p++) w (C[p], C[++p], C[++p]);
      }

      function O (e, t, r) {
        var n, u;
        for (n = 0; n < e.__k.length; n++)
          (u = e.__k[n]) &&
            ((u.__ = e), (t = 'function' == typeof u.type
              ? O (u, t, r)
              : A (r, u, u, e.__k, u.__e, t)));
        return t;
      }

      function A (e, t, r, n, u, o) {
        var i, a, c;
        if (void 0 !== t.__d) (i = t.__d), (t.__d = void 0);
        else if (null == r || u != o || null == u.parentNode)
          e: if (null == o || o.parentNode !== e) e.appendChild (u), (i = null);
          else {
            for ((a = o), (c = 0); (a = a.nextSibling) && c < n.length; c += 2)
              if (a == u) break e;
            e.insertBefore (u, o), (i = o);
          }
        return void 0 !== i ? i : u.nextSibling;
      }

      function C (e, t, r) {
        '-' === t[0]
          ? e.setProperty (t, r)
          : (e[t] = null == r
              ? ''
              : 'number' != typeof r || l.test (t) ? r : r + 'px');
      }

      function E (e, t, r, n, u) {
        var o;
        e: if ('style' === t)
          if ('string' == typeof r) e.style.cssText = r;
          else {
            if (('string' == typeof n && (e.style.cssText = n = ''), n))
              for (t in n)
                (r && t in r) || C (e.style, t, '');
            if (r) for (t in r) (n && r[t] === n[t]) || C (e.style, t, r[t]);
          }
        else if ('o' === t[0] && 'n' === t[1])
          (o = t !== (t = t.replace (/Capture$/, ''))), (t = t.toLowerCase () in
            e
            ? t.toLowerCase ().slice (2)
            : t.slice (2)), e.l || (e.l = {}), (e.l[t + o] = r), r
            ? n || e.addEventListener (t, o ? _ : F, o)
            : e.removeEventListener (t, o ? _ : F, o);
        else if ('dangerouslySetInnerHTML' !== t) {
          if (u) t = t.replace (/xlink[H:h]/, 'h').replace (/sName$/, 's');
          else if (
            'href' !== t &&
            'list' !== t &&
            'form' !== t &&
            'tabIndex' !== t &&
            'download' !== t &&
            t in e
          )
            try {
              e[t] = null == r ? '' : r;
              break e;
            } catch (e) {}
          'function' == typeof r ||
            (null != r && (!1 !== r || ('a' === t[0] && 'r' === t[1]))
              ? e.setAttribute (t, r)
              : e.removeAttribute (t));
        }
      }

      function F (e) {
        this.l[e.type + !1] (n.event ? n.event (e) : e);
      }

      function _ (e) {
        this.l[e.type + !0] (n.event ? n.event (e) : e);
      }

      function j (e, t, r, u, o, i, a, c, l) {
        var f, p, d, D, h, y, g, O, A, C, E, F = t.type;
        if (void 0 !== t.constructor) return null;
        null != r.__h &&
          ((l = r.__h), (c = t.__e = r.__e), (t.__h = null), (i = [c])), (f =
          n.__b) && f (t);
        try {
          e: if ('function' == typeof F) {
            if (
              ((O = t.props), (A = (f = F.contextType) && u[f.__c]), (C = f
                ? A ? A.props.value : f.__
                : u), r.__c
                ? (g = (p = t.__c = r.__c).__ = p.__E)
                : ('prototype' in F && F.prototype.render
                    ? (t.__c = p = new F (O, C))
                    : ((t.__c = p = new v (
                        O,
                        C
                      )), (p.constructor = F), (p.render = I)), A &&
                    A.sub (p), (p.props = O), p.state ||
                    (p.state = {}), (p.context = C), (p.__n = u), (d = p.__d = !0), (p.__h = [])), null ==
                p.__s && (p.__s = p.state), null !=
                F.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = s ({}, p.__s)), s (
                  p.__s,
                  F.getDerivedStateFromProps (O, p.__s)
                )), (D = p.props), (h = p.state), d)
            )
              null == F.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount (), null != p.componentDidMount &&
                p.__h.push (p.componentDidMount);
            else {
              if (
                (null == F.getDerivedStateFromProps &&
                  O !== D &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps (O, C), (!p.__e &&
                  null != p.shouldComponentUpdate &&
                  !1 === p.shouldComponentUpdate (O, p.__s, C)) ||
                  t.__v === r.__v)
              ) {
                (p.props = O), (p.state = p.__s), t.__v !== r.__v &&
                  (p.__d = !1), (p.__v = t), (t.__e = r.__e), (t.__k =
                  r.__k), t.__k.forEach (function (e) {
                  e && (e.__ = t);
                }), p.__h.length && a.push (p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate (O, p.__s, C), null !=
                p.componentDidUpdate &&
                p.__h.push (function () {
                  p.componentDidUpdate (D, h, y);
                });
            }
            (p.context = C), (p.props = O), (p.state = p.__s), (f = n.__r) &&
              f (t), (p.__d = !1), (p.__v = t), (p.__P = e), (f = p.render (
              p.props,
              p.state,
              p.context
            )), (p.state = p.__s), null != p.getChildContext &&
              (u = s (s ({}, u), p.getChildContext ())), d ||
              null == p.getSnapshotBeforeUpdate ||
              (y = p.getSnapshotBeforeUpdate (D, h)), (E = null != f &&
              f.type === m &&
              null == f.key
              ? f.props.children
              : f), b (
              e,
              Array.isArray (E) ? E : [E],
              t,
              r,
              u,
              o,
              i,
              a,
              c,
              l
            ), (p.base = t.__e), (t.__h = null), p.__h.length &&
              a.push (p), g && (p.__E = p.__ = null), (p.__e = !1);
          } else
            null == i && t.__v === r.__v
              ? ((t.__k = r.__k), (t.__e = r.__e))
              : (t.__e = S (r.__e, t, r, u, o, i, a, l));
          (f = n.diffed) && f (t);
        } catch (e) {
          (t.__v = null), (l || null != i) &&
            ((t.__e = c), (t.__h = !!l), (i[i.indexOf (c)] = null)), n.__e (
            e,
            t,
            r
          );
        }
      }

      function P (e, t) {
        n.__c && n.__c (t, e), e.some (function (t) {
          try {
            (e = t.__h), (t.__h = []), e.some (function (e) {
              e.call (t);
            });
          } catch (e) {
            n.__e (e, t.__v);
          }
        });
      }

      function S (e, t, r, n, u, o, i, l) {
        var s, p, d, m, v = r.props, D = t.props, h = t.type, y = 0;
        if (('svg' === h && (u = !0), null != o))
          for (; y < o.length; y++)
            if (
              (s = o[y]) &&
              (s === e || (h ? s.localName == h : 3 == s.nodeType))
            ) {
              (e = s), (o[y] = null);
              break;
            }
        if (null == e) {
          if (null === h) return document.createTextNode (D);
          (e = u
            ? document.createElementNS ('http://www.w3.org/2000/svg', h)
            : document.createElement (h, D.is && D)), (o = null), (l = !1);
        }
        if (null === h) v === D || (l && e.data === D) || (e.data = D);
        else {
          if (
            ((o = o && c.slice.call (e.childNodes)), (p = (v = r.props || a)
              .dangerouslySetInnerHTML), (d = D.dangerouslySetInnerHTML), !l)
          ) {
            if (null != o)
              for ((v = {}), (m = 0); m < e.attributes.length; m++)
                v[e.attributes[m].name] = e.attributes[m].value;
            (d || p) &&
              ((d &&
                ((p && d.__html == p.__html) || d.__html === e.innerHTML)) ||
                (e.innerHTML = (d && d.__html) || ''));
          }
          if (
            ((function (e, t, r, n, u) {
              var o;
              for (o in r)
                'children' === o ||
                  'key' === o ||
                  o in t ||
                  E (e, o, null, r[o], n);
              for (o in t)
                (u && 'function' != typeof t[o]) ||
                  'children' === o ||
                  'key' === o ||
                  'value' === o ||
                  'checked' === o ||
                  r[o] === t[o] ||
                  E (e, o, t[o], r[o], n);
            }) (e, D, v, u, l), d)
          )
            t.__k = [];
          else if (
            ((y = t.props.children), b (
              e,
              Array.isArray (y) ? y : [y],
              t,
              r,
              n,
              u && 'foreignObject' !== h,
              o,
              i,
              e.firstChild,
              l
            ), null != o)
          )
            for (y = o.length; y--; )
              null != o[y] && f (o[y]);
          l ||
            ('value' in D &&
              void 0 !== (y = D.value) &&
              (y !== e.value || ('progress' === h && !y)) &&
              E (e, 'value', y, v.value, !1), 'checked' in D &&
              void 0 !== (y = D.checked) &&
              y !== e.checked &&
              E (e, 'checked', y, v.checked, !1));
        }
        return e;
      }

      function w (e, t, r) {
        try {
          'function' == typeof e ? e (t) : (e.current = t);
        } catch (e) {
          n.__e (e, r);
        }
      }

      function B (e, t, r) {
        var u, o, i;
        if (
          (n.unmount && n.unmount (e), (u = e.ref) &&
            ((u.current && u.current !== e.__e) || w (u, null, t)), r ||
            'function' == typeof e.type ||
            (r = null != (o = e.__e)), (e.__e = e.__d = void 0), null !=
            (u = e.__c))
        ) {
          if (u.componentWillUnmount)
            try {
              u.componentWillUnmount ();
            } catch (e) {
              n.__e (e, t);
            }
          u.base = u.__P = null;
        }
        if ((u = e.__k)) for (i = 0; i < u.length; i++) u[i] && B (u[i], t, r);
        null != o && f (o);
      }

      function I (e, t, r) {
        return this.constructor (e, r);
      }

      function x (e, t, r) {
        var u, o, i;
        n.__ && n.__ (e, t), (o = (u = 'function' == typeof r)
          ? null
          : (r && r.__k) || t.__k), (i = []), j (
          t,
          (e = ((!u && r) || t).__k = p (m, null, [e])),
          o || a,
          a,
          void 0 !== t.ownerSVGElement,
          !u && r
            ? [r]
            : o ? null : t.firstChild ? c.slice.call (t.childNodes) : null,
          i,
          !u && r ? r : o ? o.__e : t.firstChild,
          u
        ), P (i, e);
      }
      (n = {
        __e: function (e, t) {
          for (var r, n, u; (t = t.__); )
            if ((r = t.__c) && !r.__)
              try {
                if (
                  ((n = r.constructor) &&
                    null != n.getDerivedStateFromError &&
                    (r.setState (n.getDerivedStateFromError (e)), (u =
                      r.__d)), null != r.componentDidCatch &&
                    (r.componentDidCatch (e), (u = r.__d)), u)
                )
                  return (r.__E = r);
              } catch (t) {
                e = t;
              }
          throw e;
        },
        __v: 0,
      }), (v.prototype.setState = function (e, t) {
        var r;
        (r = null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = s ({}, this.state))), 'function' == typeof e &&
          (e = e (s ({}, r), this.props)), e && s (r, e), null != e &&
          this.__v &&
          (t && this.__h.push (t), y (this));
      }), (v.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push (e), y (this));
      }), (v.prototype.render = m), (u = []), (o = 'function' == typeof Promise
        ? Promise.prototype.then.bind (Promise.resolve ())
        : setTimeout), (g.__r = 0);
    },
    ,
    function (e, t, r) {
      'use strict';
      r.d (t, 'b', function () {
        return n;
      }), r.d (t, 'a', function () {
        return u;
      });
      var n = '__aa-highlight__', u = '__/aa-highlight__';
    },
    function (e, t, r) {
      'use strict';
      r.r (t);
      var n = r (36);
      for (var u in n)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return n[e];
            });
          }) (u);
      var o = r (7);
      r.d (t, 'parseAlgoliaHitHighlight', function () {
        return o.a;
      });
      var i = r (17);
      r.d (t, 'parseAlgoliaHitReverseHighlight', function () {
        return i.a;
      });
      var a = r (18);
      r.d (t, 'parseAlgoliaHitReverseSnippet', function () {
        return a.a;
      });
      var c = r (8);
      r.d (t, 'parseAlgoliaHitSnippet', function () {
        return c.a;
      });
      var l = r (37);
      for (var u in l)
        [
          'default',
          'parseAlgoliaHitHighlight',
          'parseAlgoliaHitReverseHighlight',
          'parseAlgoliaHitReverseSnippet',
          'parseAlgoliaHitSnippet',
        ].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return l[e];
            });
          }) (u);
      var s = r (16);
      r.d (t, 'getAlgoliaFacetHits', function () {
        return s.a;
      });
      var f = r (14);
      r.d (t, 'getAlgoliaHits', function () {
        return f.a;
      });
      var p = r (15);
      r.d (t, 'getAlgoliaResults', function () {
        return p.a;
      });
    },
    ,
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return n;
      });
      var n = '1.0.0-alpha.45';
    },
    ,
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return a;
      });
      var n = r (13), u = r (9);

      function o (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return i (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return i (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? i (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function i (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function a (e) {
        var t = e.hit,
          r = e.attribute,
          i = Array.isArray (r) ? r : [r],
          a = Object (n.a) (t, ['_highlightResult'].concat (o (i), ['value']));
        return 'string' != typeof a && (a = Object (n.a) (t, i) || ''), Object (
          u.a
        ) ({
          highlightedValue: a,
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return a;
      });
      var n = r (13), u = r (9);

      function o (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return i (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return i (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? i (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function i (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function a (e) {
        var t = e.hit,
          r = e.attribute,
          i = Array.isArray (r) ? r : [r],
          a = Object (n.a) (t, ['_snippetResult'].concat (o (i), ['value']));
        return 'string' != typeof a && (a = Object (n.a) (t, i) || ''), Object (
          u.a
        ) ({
          highlightedValue: a,
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return u;
      });
      var n = r (2);

      function u (e) {
        var t = e.highlightedValue.split (n.b),
          r = t.shift (),
          u = (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [];
            return {
              get: function () {
                return e;
              },
              add: function (t) {
                var r = e[e.length - 1];
                (null == r ? void 0 : r.isHighlighted) === t.isHighlighted
                  ? (e[e.length - 1] = {
                      value: r.value + t.value,
                      isHighlighted: r.isHighlighted,
                    })
                  : e.push (t);
              },
            };
          }) (
            r
              ? [
                  {
                    value: r,
                    isHighlighted: !1,
                  },
                ]
              : []
          );
        return t.forEach (function (e) {
          var t = e.split (n.a);
          u.add ({
            value: t[0],
            isHighlighted: !0,
          }), '' !== t[1] &&
            u.add ({
              value: t[1],
              isHighlighted: !1,
            });
        }), u.get ();
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return n;
      });
      var n = '1.0.0-alpha.45';
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return s;
      });
      var n = r (2), u = r (10);

      function o (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function i (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o (Object (r), !0).forEach (function (t) {
                a (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : o (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function a (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function c (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return l (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return l (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? l (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function l (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function s (e) {
        var t = e.searchClient,
          r = e.queries,
          o = e.userAgents,
          a = void 0 === o ? [] : o;
        return 'function' == typeof t.addAlgoliaAgent &&
          [
            {
              segment: 'autocomplete-core',
              version: u.a,
            },
          ]
            .concat (c (a))
            .forEach (function (e) {
              var r = e.segment, n = e.version;
              t.addAlgoliaAgent (r, n);
            }), t.search (
          r.map (function (e) {
            var t = e.indexName, r = e.query, u = e.params;
            return {
              indexName: t,
              query: r,
              params: i (
                {
                  hitsPerPage: 5,
                  highlightPreTag: n.b,
                  highlightPostTag: n.a,
                },
                u
              ),
            };
          })
        );
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return f;
      });
      var n = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
      },
        u = new RegExp (/\w/i),
        o = /&(amp|quot|lt|gt|#39);/g,
        i = RegExp (o.source);

      function a (e, t) {
        var r,
          a,
          c,
          l = e[t],
          s =
            (null === (r = e[t + 1]) || void 0 === r
              ? void 0
              : r.isHighlighted) || !0,
          f =
            (null === (a = e[t - 1]) || void 0 === a
              ? void 0
              : a.isHighlighted) || !0;
        return u.test (
          (c = l.value) && i.test (c)
            ? c.replace (o, function (e) {
                return n[e];
              })
            : c
        ) || f !== s
          ? l.isHighlighted
          : f;
      }

      function c (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function l (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c (Object (r), !0).forEach (function (t) {
                s (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : c (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function s (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function f (e) {
        return e.some (function (e) {
          return e.isHighlighted;
        })
          ? e.map (function (t, r) {
              return l (
                l ({}, t),
                {},
                {
                  isHighlighted: !a (e, r),
                }
              );
            })
          : e.map (function (e) {
              return l (
                l ({}, e),
                {},
                {
                  isHighlighted: !1,
                }
              );
            });
      }
    },
    function (e, t, r) {
      'use strict';
      function n (e, t) {
        return t.reduce (function (e, t) {
          return e && e[t];
        }, e);
      }
      r.d (t, 'a', function () {
        return n;
      });
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return a;
      });
      var n = r (11);

      function u (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function o (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u (Object (r), !0).forEach (function (t) {
                i (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : u (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function i (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function a (e) {
        var t = e.searchClient, r = e.queries, u = e.userAgents;
        return Object (n.a) ({
          searchClient: t,
          queries: r,
          userAgents: u,
        }).then (function (e) {
          return e.results.map (function (e) {
            return e.hits.map (function (t) {
              return o (
                o ({}, t),
                {},
                {
                  __autocomplete_indexName: e.index,
                  __autocomplete_queryID: e.queryID,
                }
              );
            });
          });
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return u;
      });
      var n = r (11);

      function u (e) {
        var t = e.searchClient, r = e.queries, u = e.userAgents;
        return Object (n.a) ({
          searchClient: t,
          queries: r,
          userAgents: u,
        }).then (function (e) {
          return e.results;
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return s;
      });
      var n = r (2), u = r (10);

      function o (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function i (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o (Object (r), !0).forEach (function (t) {
                a (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : o (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function a (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function c (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return l (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return l (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? l (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function l (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function s (e) {
        return (function (e) {
          var t = e.searchClient,
            r = e.queries,
            o = e.userAgents,
            a = void 0 === o ? [] : o;
          return 'function' == typeof t.addAlgoliaAgent &&
            [
              {
                segment: 'autocomplete-core',
                version: u.a,
              },
            ]
              .concat (c (a))
              .forEach (function (e) {
                var r = e.segment, n = e.version;
                t.addAlgoliaAgent (r, n);
              }), t.searchForFacetValues (
            r.map (function (e) {
              var t = e.indexName, r = e.params;
              return {
                indexName: t,
                params: i (
                  {
                    highlightPreTag: n.b,
                    highlightPostTag: n.a,
                  },
                  r
                ),
              };
            })
          );
        }) ({
          searchClient: e.searchClient,
          queries: e.queries,
          userAgents: e.userAgents,
        }).then (function (e) {
          return e.map (function (e) {
            return e.facetHits.map (function (e) {
              return {
                label: e.value,
                count: e.count,
                _highlightResult: {
                  label: {
                    value: e.highlighted,
                  },
                },
              };
            });
          });
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return o;
      });
      var n = r (7), u = r (12);

      function o (e) {
        return Object (u.a) (Object (n.a) (e));
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return o;
      });
      var n = r (8), u = r (12);

      function o (e) {
        return Object (u.a) (Object (n.a) (e));
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return o;
      });
      var n = r (16), u = r (5);

      function o (e) {
        var t = e.searchClient, r = e.queries;
        return Object (n.a) ({
          searchClient: t,
          queries: r,
          userAgents: [
            {
              segment: 'autocomplete-js',
              version: u.a,
            },
          ],
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return o;
      });
      var n = r (14), u = r (5);

      function o (e) {
        var t = e.searchClient, r = e.queries;
        return Object (n.a) ({
          searchClient: t,
          queries: r,
          userAgents: [
            {
              segment: 'autocomplete-js',
              version: u.a,
            },
          ],
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.d (t, 'a', function () {
        return o;
      });
      var n = r (15), u = r (5);

      function o (e) {
        var t = e.searchClient, r = e.queries;
        return Object (n.a) ({
          searchClient: t,
          queries: r,
          userAgents: [
            {
              segment: 'autocomplete-js',
              version: u.a,
            },
          ],
        });
      }
    },
    function (e, t, r) {
      'use strict';
      r.r (t);
      var n = r (23);
      for (var u in n)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return n[e];
            });
          }) (u);
      var o = r (24);
      for (var u in o)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return o[e];
            });
          }) (u);
      var i = r (25);
      for (var u in i)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return i[e];
            });
          }) (u);
      var a = r (26);
      for (var u in a)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return a[e];
            });
          }) (u);
      var c = r (27);
      for (var u in c)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return c[e];
            });
          }) (u);
      var l = r (28);
      for (var u in l)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return l[e];
            });
          }) (u);
      var s = r (29);
      for (var u in s)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return s[e];
            });
          }) (u);
      var f = r (30);
      for (var u in f)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return f[e];
            });
          }) (u);
      var p = r (31);
      for (var u in p)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return p[e];
            });
          }) (u);
      var d = r (32);
      for (var u in d)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return d[e];
            });
          }) (u);
      var m = r (33);
      for (var u in m)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return m[e];
            });
          }) (u);
      var v = r (34);
      for (var u in v)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return v[e];
            });
          }) (u);
      var D = r (35);
      for (var u in D)
        ['default'].indexOf (u) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return D[e];
            });
          }) (u);
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t, r) {
      'use strict';
      function n (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function u (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function o (e, t, r) {
        var o = t.initialState;
        return {
          getState: function () {
            return o;
          },
          dispatch: function (i, a) {
            var c = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? n (Object (r), !0).forEach (function (t) {
                      u (e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties (
                          e,
                          Object.getOwnPropertyDescriptors (r)
                        )
                      : n (Object (r)).forEach (function (t) {
                          Object.defineProperty (
                            e,
                            t,
                            Object.getOwnPropertyDescriptor (r, t)
                          );
                        });
              }
              return e;
            }) ({}, o);
            (o = e (o, {
              type: i,
              props: t,
              payload: a,
            })), r ({
              state: o,
              prevState: c,
            });
          },
        };
      }

      function i (e) {
        return e.reduce (function (e, t) {
          return e.concat (t);
        }, []);
      }

      function a (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function c (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a (Object (r), !0).forEach (function (t) {
                l (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : a (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function l (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function s (e) {
        return 0 === e.collections.length
          ? 0
          : e.collections.reduce (function (e, t) {
              return e + t.items.length;
            }, 0);
      }
      r.d (t, 'a', function () {
        return nt;
      });
      var f = 0;

      function p () {
        return 'autocomplete-'.concat (f++);
      }
      var d = function () {};

      function m (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function v (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function D (e) {
        return (D = 'function' == typeof Symbol &&
          'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }) (e);
      }

      function h (e, t) {
        return Promise.resolve (e (t)).then (function (e) {
          return Array.isArray (
            e
          ), 'The `getSources` function must return an array of sources but returned type '.concat (JSON.stringify (D (e)), ':\n\n').concat (JSON.stringify (e, null, 2)), Promise.all (
            e
              .filter (function (e) {
                return Boolean (e);
              })
              .map (function (e) {
                e.sourceId;
                var t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? m (Object (r), !0).forEach (function (t) {
                          v (e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties (
                              e,
                              Object.getOwnPropertyDescriptors (r)
                            )
                          : m (Object (r)).forEach (function (t) {
                              Object.defineProperty (
                                e,
                                t,
                                Object.getOwnPropertyDescriptor (r, t)
                              );
                            });
                  }
                  return e;
                }) (
                  {
                    getItemInputValue: function (e) {
                      return e.state.query;
                    },
                    getItemUrl: function () {},
                    onSelect: function (e) {
                      (0, e.setIsOpen) (!1);
                    },
                    onActive: d,
                  },
                  e
                );
                return Promise.resolve (t);
              })
          );
        });
      }

      function y (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return g (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return g (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? g (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function g (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function b (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function O (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b (Object (r), !0).forEach (function (t) {
                A (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : b (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function A (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function C (e) {
        var t = (function (e) {
          var t = e.collections
            .map (function (e) {
              return e.items.length;
            })
            .reduce (function (e, t, r) {
              var n = (e[r - 1] || 0) + t;
              return e.push (n), e;
            }, [])
            .reduce (function (t, r) {
              return r <= e.activeItemId ? t + 1 : t;
            }, 0);
          return e.collections[t];
        }) (e);
        if (!t) return null;
        var r =
          t.items[
            (function (e) {
              for (
                var t = e.state, r = e.collection, n = !1, u = 0, o = 0;
                !1 === n;

              ) {
                var i = t.collections[u];
                if (i === r) {
                  n = !0;
                  break;
                }
                (o += i.items.length), u++;
              }
              return t.activeItemId - o;
            }) ({
              state: e,
              collection: t,
            })
          ],
          n = t.source;
        return {
          item: r,
          itemInputValue: n.getItemInputValue ({
            item: r,
            state: e,
          }),
          itemUrl: n.getItemUrl ({
            item: r,
            state: e,
          }),
          source: n,
        };
      }

      function E (e) {
        return (E = 'function' == typeof Symbol &&
          'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }) (e);
      }

      function F (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function _ (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F (Object (r), !0).forEach (function (t) {
                j (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : F (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function j (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function P (e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r, n, u = {}, o = Object.keys (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
            return u;
          }) (e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols (e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf (r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call (e, r) &&
                (u[r] = e[r]));
        }
        return u;
      }
      var S = null;

      function w (e) {
        var t = e.event,
          r = e.nextState,
          n = void 0 === r ? {} : r,
          u = e.props,
          o = e.query,
          i = e.refresh,
          a = e.store,
          c = P (e, [
            'event',
            'nextState',
            'props',
            'query',
            'refresh',
            'store',
          ]);
        S && u.environment.clearTimeout (S);
        var l,
          s = c.setCollections,
          f = c.setIsOpen,
          p = c.setQuery,
          d = c.setActiveItemId,
          m = c.setStatus;
        return p (o), d (u.defaultActiveItemId), o || !1 !== u.openOnFocus
          ? (m ('loading'), (S = u.environment.setTimeout (function () {
              m ('stalled');
            }, u.stallThreshold)), u
              .getSources (
                _ (
                  {
                    query: o,
                    refresh: i,
                    state: a.getState (),
                  },
                  c
                )
              )
              .then (function (e) {
                return m ('loading'), Promise.all (
                  e.map (function (e) {
                    return Promise.resolve (
                      e.getItems (
                        _ (
                          {
                            query: o,
                            refresh: i,
                            state: a.getState (),
                          },
                          c
                        )
                      )
                    ).then (function (t) {
                      return Array.isArray (
                        t
                      ), 'The `getItems` function must return an array of items but returned type '.concat (JSON.stringify (E (t)), ':\n\n').concat (JSON.stringify (t, null, 2)), {
                        source: e,
                        items: t,
                      };
                    });
                  })
                )
                  .then (function (e) {
                    var r;
                    m ('idle'), s (e);
                    var l = u.shouldPanelOpen ({
                      state: a.getState (),
                    });
                    f (
                      null !== (r = n.isOpen) && void 0 !== r
                        ? r
                        : (u.openOnFocus && !o && l) || l
                    );
                    var p = C (a.getState ());
                    if (null !== a.getState ().activeItemId && p) {
                      var d = p.item,
                        v = p.itemInputValue,
                        D = p.itemUrl,
                        h = p.source;
                      h.onActive (
                        _ (
                          {
                            event: t,
                            item: d,
                            itemInputValue: v,
                            itemUrl: D,
                            refresh: i,
                            source: h,
                            state: a.getState (),
                          },
                          c
                        )
                      );
                    }
                  })
                  .finally (function () {
                    S && u.environment.clearTimeout (S);
                  });
              }))
          : (m ('idle'), s (
              a.getState ().collections.map (function (e) {
                return _ (
                  _ ({}, e),
                  {},
                  {
                    items: [],
                  }
                );
              })
            ), f (
              null !== (l = n.isOpen) && void 0 !== l
                ? l
                : u.shouldPanelOpen ({
                    state: a.getState (),
                  })
            ), Promise.resolve ());
      }

      function B (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function I (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B (Object (r), !0).forEach (function (t) {
                x (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : B (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function x (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function k (e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r, n, u = {}, o = Object.keys (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
            return u;
          }) (e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols (e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf (r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call (e, r) &&
                (u[r] = e[r]));
        }
        return u;
      }

      function N (e, t) {
        return e === t || e.contains (t);
      }

      function q (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function T (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q (Object (r), !0).forEach (function (t) {
                R (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : q (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function R (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function M (e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r, n, u = {}, o = Object.keys (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
            return u;
          }) (e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols (e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf (r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call (e, r) &&
                (u[r] = e[r]));
        }
        return u;
      }

      function H (e) {
        var t = e.props,
          r = e.refresh,
          n = e.store,
          u = M (e, ['props', 'refresh', 'store']);
        return {
          getEnvironmentProps: function (e) {
            var r = e.inputElement, u = e.formElement, o = e.panelElement;
            return T (
              {
                onTouchStart: function (e) {
                  !1 !== n.getState ().isOpen &&
                    e.target !== r &&
                    !1 ===
                      [u, o].some (function (r) {
                        return (
                          N (r, e.target) ||
                          N (r, t.environment.document.activeElement)
                        );
                      }) &&
                    n.dispatch ('blur', null);
                },
                onTouchMove: function (e) {
                  !1 !== n.getState ().isOpen &&
                    r === t.environment.document.activeElement &&
                    e.target !== r &&
                    r.blur ();
                },
              },
              M (e, ['inputElement', 'formElement', 'panelElement'])
            );
          },
          getRootProps: function (e) {
            return T (
              {
                role: 'combobox',
                'aria-expanded': n.getState ().isOpen,
                'aria-haspopup': 'listbox',
                'aria-owns': n.getState ().isOpen
                  ? ''.concat (t.id, '-list')
                  : void 0,
                'aria-labelledby': ''.concat (t.id, '-label'),
              },
              e
            );
          },
          getFormProps: function (e) {
            return e.inputElement, T (
              {
                action: '',
                noValidate: !0,
                role: 'search',
                onSubmit: function (o) {
                  var i;
                  o.preventDefault (), t.onSubmit (
                    T (
                      {
                        event: o,
                        refresh: r,
                        state: n.getState (),
                      },
                      u
                    )
                  ), n.dispatch ('submit', null), null ===
                    (i = e.inputElement) ||
                    void 0 === i ||
                    i.blur ();
                },
                onReset: function (o) {
                  var i;
                  o.preventDefault (), t.onReset (
                    T (
                      {
                        event: o,
                        refresh: r,
                        state: n.getState (),
                      },
                      u
                    )
                  ), n.dispatch ('reset', null), null ===
                    (i = e.inputElement) ||
                    void 0 === i ||
                    i.focus ();
                },
              },
              M (e, ['inputElement'])
            );
          },
          getLabelProps: function (e) {
            return T (
              {
                htmlFor: ''.concat (t.id, '-input'),
                id: ''.concat (t.id, '-label'),
              },
              e
            );
          },
          getInputProps: function (e) {
            function o (e) {
              (t.openOnFocus || Boolean (n.getState ().query)) &&
                w (
                  T (
                    {
                      event: e,
                      props: t,
                      query: n.getState ().completion || n.getState ().query,
                      refresh: r,
                      store: n,
                    },
                    u
                  )
                ), n.dispatch ('focus', null);
            }
            var i = 'ontouchstart' in t.environment,
              a = e || {},
              c = (a.inputElement, a.maxLength),
              l = void 0 === c ? 512 : c,
              s = M (a, ['inputElement', 'maxLength']),
              f = C (n.getState ());
            return T (
              {
                'aria-autocomplete': 'both',
                'aria-activedescendant': n.getState ().isOpen &&
                  null !== n.getState ().activeItemId
                  ? ''
                      .concat (t.id, '-item-')
                      .concat (n.getState ().activeItemId)
                  : void 0,
                'aria-controls': n.getState ().isOpen
                  ? ''.concat (t.id, '-list')
                  : void 0,
                'aria-labelledby': ''.concat (t.id, '-label'),
                value: n.getState ().completion || n.getState ().query,
                id: ''.concat (t.id, '-input'),
                autoComplete: 'off',
                autoCorrect: 'off',
                autoCapitalize: 'off',
                enterKeyHint: null != f && f.itemUrl ? 'go' : 'search',
                spellCheck: 'false',
                autoFocus: t.autoFocus,
                placeholder: t.placeholder,
                maxLength: l,
                type: 'search',
                onChange: function (e) {
                  w (
                    T (
                      {
                        event: e,
                        props: t,
                        query: e.currentTarget.value.slice (0, l),
                        refresh: r,
                        store: n,
                      },
                      u
                    )
                  );
                },
                onKeyDown: function (e) {
                  !(function (e) {
                    var t = e.event,
                      r = e.props,
                      n = e.refresh,
                      u = e.store,
                      o = k (e, ['event', 'props', 'refresh', 'store']);
                    if ('ArrowUp' === t.key || 'ArrowDown' === t.key) {
                      t.preventDefault (), u.dispatch (t.key, null);
                      var i = r.environment.document.getElementById (
                        ''
                          .concat (r.id, '-item-')
                          .concat (u.getState ().activeItemId)
                      );
                      i &&
                        (i.scrollIntoViewIfNeeded
                          ? i.scrollIntoViewIfNeeded (!1)
                          : i.scrollIntoView (!1));
                      var a = C (u.getState ());
                      if (null !== u.getState ().activeItemId && a) {
                        var c = a.item,
                          l = a.itemInputValue,
                          s = a.itemUrl,
                          f = a.source;
                        f.onActive (
                          I (
                            {
                              event: t,
                              item: c,
                              itemInputValue: l,
                              itemUrl: s,
                              refresh: n,
                              source: f,
                              state: u.getState (),
                            },
                            o
                          )
                        );
                      }
                    } else if ('Escape' === t.key)
                      t.preventDefault (), u.dispatch (t.key, null);
                    else if ('Enter' === t.key) {
                      if (
                        null === u.getState ().activeItemId ||
                        u.getState ().collections.every (function (e) {
                          return 0 === e.items.length;
                        })
                      )
                        return;
                      t.preventDefault ();
                      var p = C (u.getState ()),
                        d = p.item,
                        m = p.itemInputValue,
                        v = p.itemUrl,
                        D = p.source;
                      if (t.metaKey || t.ctrlKey)
                        void 0 !== v &&
                          (D.onSelect (
                            I (
                              {
                                event: t,
                                item: d,
                                itemInputValue: m,
                                itemUrl: v,
                                refresh: n,
                                source: D,
                                state: u.getState (),
                              },
                              o
                            )
                          ), r.navigator.navigateNewTab ({
                            itemUrl: v,
                            item: d,
                            state: u.getState (),
                          }));
                      else if (t.shiftKey)
                        void 0 !== v &&
                          (D.onSelect (
                            I (
                              {
                                event: t,
                                item: d,
                                itemInputValue: m,
                                itemUrl: v,
                                refresh: n,
                                source: D,
                                state: u.getState (),
                              },
                              o
                            )
                          ), r.navigator.navigateNewWindow ({
                            itemUrl: v,
                            item: d,
                            state: u.getState (),
                          }));
                      else if (t.altKey);
                      else {
                        if (void 0 !== v)
                          return D.onSelect (
                            I (
                              {
                                event: t,
                                item: d,
                                itemInputValue: m,
                                itemUrl: v,
                                refresh: n,
                                source: D,
                                state: u.getState (),
                              },
                              o
                            )
                          ), void r.navigator.navigate ({
                            itemUrl: v,
                            item: d,
                            state: u.getState (),
                          });
                        w (
                          I (
                            {
                              event: t,
                              nextState: {
                                isOpen: !1,
                              },
                              props: r,
                              query: m,
                              refresh: n,
                              store: u,
                            },
                            o
                          )
                        ).then (function () {
                          D.onSelect (
                            I (
                              {
                                event: t,
                                item: d,
                                itemInputValue: m,
                                itemUrl: v,
                                refresh: n,
                                source: D,
                                state: u.getState (),
                              },
                              o
                            )
                          );
                        });
                      }
                    }
                  }) (
                    T (
                      {
                        event: e,
                        props: t,
                        refresh: r,
                        store: n,
                      },
                      u
                    )
                  );
                },
                onFocus: o,
                onBlur: function () {
                  i || n.dispatch ('blur', null);
                },
                onClick: function (r) {
                  e.inputElement !== t.environment.document.activeElement ||
                    n.getState ().isOpen ||
                    o (r);
                },
              },
              s
            );
          },
          getPanelProps: function (e) {
            return T (
              {
                onMouseDown: function (e) {
                  e.preventDefault ();
                },
                onMouseLeave: function () {
                  n.dispatch ('mouseleave', null);
                },
              },
              e
            );
          },
          getListProps: function (e) {
            return T (
              {
                role: 'listbox',
                'aria-labelledby': ''.concat (t.id, '-label'),
                id: ''.concat (t.id, '-list'),
              },
              e
            );
          },
          getItemProps: function (e) {
            var o = e.item, i = e.source, a = M (e, ['item', 'source']);
            return T (
              {
                id: ''.concat (t.id, '-item-').concat (o.__autocomplete_id),
                role: 'option',
                'aria-selected': n.getState ().activeItemId ===
                  o.__autocomplete_id,
                onMouseMove: function (e) {
                  if (o.__autocomplete_id !== n.getState ().activeItemId) {
                    n.dispatch ('mousemove', o.__autocomplete_id);
                    var t = C (n.getState ());
                    if (null !== n.getState ().activeItemId && t) {
                      var i = t.item,
                        a = t.itemInputValue,
                        c = t.itemUrl,
                        l = t.source;
                      l.onActive (
                        T (
                          {
                            event: e,
                            item: i,
                            itemInputValue: a,
                            itemUrl: c,
                            refresh: r,
                            source: l,
                            state: n.getState (),
                          },
                          u
                        )
                      );
                    }
                  }
                },
                onMouseDown: function (e) {
                  e.preventDefault ();
                },
                onClick: function (e) {
                  var a = i.getItemInputValue ({
                    item: o,
                    state: n.getState (),
                  }),
                    c = i.getItemUrl ({
                      item: o,
                      state: n.getState (),
                    });
                  (c
                    ? Promise.resolve ()
                    : w (
                        T (
                          {
                            event: e,
                            nextState: {
                              isOpen: !1,
                            },
                            props: t,
                            query: a,
                            refresh: r,
                            store: n,
                          },
                          u
                        )
                      )).then (function () {
                    i.onSelect (
                      T (
                        {
                          event: e,
                          item: o,
                          itemInputValue: a,
                          itemUrl: c,
                          refresh: r,
                          source: i,
                          state: n.getState (),
                        },
                        u
                      )
                    );
                  });
                },
              },
              a
            );
          },
        };
      }

      function L (e) {
        var t = e.state;
        return !1 === t.isOpen || null === t.activeItemId
          ? null
          : C (t).itemInputValue || null;
      }

      function U (e, t, r, n) {
        if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
        var u = (null === t ? -1 : t) + e;
        return u <= -1 || u >= r ? (null === n ? null : 0) : u;
      }

      function V (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function W (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V (Object (r), !0).forEach (function (t) {
                J (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : V (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function J (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }
      var Q = function (e, t) {
        switch (t.type) {
          case 'setActiveItemId':
            return W (
              W ({}, e),
              {},
              {
                activeItemId: t.payload,
              }
            );
          case 'setQuery':
            return W (
              W ({}, e),
              {},
              {
                query: t.payload,
                completion: null,
              }
            );
          case 'setCollections':
            return W (
              W ({}, e),
              {},
              {
                collections: t.payload,
              }
            );
          case 'setIsOpen':
            return W (
              W ({}, e),
              {},
              {
                isOpen: t.payload,
              }
            );
          case 'setStatus':
            return W (
              W ({}, e),
              {},
              {
                status: t.payload,
              }
            );
          case 'setContext':
            return W (
              W ({}, e),
              {},
              {
                context: W (W ({}, e.context), t.payload),
              }
            );
          case 'ArrowDown':
            var r = W (
              W ({}, e),
              {},
              {
                activeItemId: U (
                  1,
                  e.activeItemId,
                  s (e),
                  t.props.defaultActiveItemId
                ),
              }
            );
            return W (
              W ({}, r),
              {},
              {
                completion: L ({
                  state: r,
                }),
              }
            );
          case 'ArrowUp':
            var n = W (
              W ({}, e),
              {},
              {
                activeItemId: U (
                  -1,
                  e.activeItemId,
                  s (e),
                  t.props.defaultActiveItemId
                ),
              }
            );
            return W (
              W ({}, n),
              {},
              {
                completion: L ({
                  state: n,
                }),
              }
            );
          case 'Escape':
            return e.isOpen
              ? W (
                  W ({}, e),
                  {},
                  {
                    isOpen: !1,
                    completion: null,
                  }
                )
              : W (
                  W ({}, e),
                  {},
                  {
                    query: '',
                    status: 'idle',
                    collections: [],
                  }
                );
          case 'submit':
            return W (
              W ({}, e),
              {},
              {
                activeItemId: null,
                isOpen: !1,
                status: 'idle',
              }
            );
          case 'reset':
            return W (
              W ({}, e),
              {},
              {
                activeItemId: !0 === t.props.openOnFocus
                  ? t.props.defaultActiveItemId
                  : null,
                status: 'idle',
                query: '',
              }
            );
          case 'focus':
            return W (
              W ({}, e),
              {},
              {
                activeItemId: t.props.defaultActiveItemId,
                isOpen: (t.props.openOnFocus || Boolean (e.query)) &&
                  t.props.shouldPanelOpen ({
                    state: e,
                  }),
              }
            );
          case 'blur':
            return t.props.debug
              ? e
              : W (
                  W ({}, e),
                  {},
                  {
                    isOpen: !1,
                    activeItemId: null,
                  }
                );
          case 'mousemove':
            return W (
              W ({}, e),
              {},
              {
                activeItemId: t.payload,
              }
            );
          case 'mouseleave':
            return W (
              W ({}, e),
              {},
              {
                activeItemId: t.props.defaultActiveItemId,
              }
            );
          default:
            return 'The reducer action '.concat (
              JSON.stringify (t.type),
              ' is not supported.'
            ), e;
        }
      };

      function $ (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function z (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $ (Object (r), !0).forEach (function (t) {
                K (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : $ (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function K (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function G (e) {
        var t = [],
          r = (function (e, t) {
            var r,
              n = 'undefined' != typeof window ? window : {},
              u = e.plugins || [];
            return O (
              O (
                {
                  debug: !1,
                  openOnFocus: !1,
                  placeholder: '',
                  autoFocus: !1,
                  defaultActiveItemId: null,
                  stallThreshold: 300,
                  environment: n,
                  shouldPanelOpen: function (e) {
                    return s (e.state) > 0;
                  },
                },
                e
              ),
              {},
              {
                id: null !== (r = e.id) && void 0 !== r ? r : p (),
                plugins: u,
                initialState: O (
                  {
                    activeItemId: null,
                    query: '',
                    completion: null,
                    collections: [],
                    isOpen: !1,
                    status: 'idle',
                    context: {},
                  },
                  e.initialState
                ),
                onStateChange: function (t) {
                  var r;
                  null === (r = e.onStateChange) ||
                    void 0 === r ||
                    r.call (e, t), u.forEach (function (e) {
                    var r;
                    return null === (r = e.onStateChange) || void 0 === r
                      ? void 0
                      : r.call (e, t);
                  });
                },
                onSubmit: function (t) {
                  var r;
                  null === (r = e.onSubmit) ||
                    void 0 === r ||
                    r.call (e, t), u.forEach (function (e) {
                    var r;
                    return null === (r = e.onSubmit) || void 0 === r
                      ? void 0
                      : r.call (e, t);
                  });
                },
                onReset: function (t) {
                  var r;
                  null === (r = e.onReset) ||
                    void 0 === r ||
                    r.call (e, t), u.forEach (function (e) {
                    var r;
                    return null === (r = e.onReset) || void 0 === r
                      ? void 0
                      : r.call (e, t);
                  });
                },
                getSources: function (r) {
                  return Promise.all (
                    []
                      .concat (
                        y (
                          u.map (function (e) {
                            return e.getSources;
                          })
                        ),
                        [e.getSources]
                      )
                      .filter (Boolean)
                      .map (function (e) {
                        return h (e, r);
                      })
                  )
                    .then (function (e) {
                      return i (e);
                    })
                    .then (function (e) {
                      return e.map (function (e) {
                        return O (
                          O ({}, e),
                          {},
                          {
                            onSelect: function (r) {
                              e.onSelect (r), t.forEach (function (e) {
                                var t;
                                return null === (t = e.onSelect) || void 0 === t
                                  ? void 0
                                  : t.call (e, r);
                              });
                            },
                            onActive: function (r) {
                              e.onActive (r), t.forEach (function (e) {
                                var t;
                                return null === (t = e.onActive) || void 0 === t
                                  ? void 0
                                  : t.call (e, r);
                              });
                            },
                          }
                        );
                      });
                    });
                },
                navigator: O (
                  {
                    navigate: function (e) {
                      var t = e.itemUrl;
                      n.location.assign (t);
                    },
                    navigateNewTab: function (e) {
                      var t = e.itemUrl, r = n.open (t, '_blank', 'noopener');
                      null == r || r.focus ();
                    },
                    navigateNewWindow: function (e) {
                      var t = e.itemUrl;
                      n.open (t, '_blank', 'noopener');
                    },
                  },
                  e.navigator
                ),
              }
            );
          }) (e, t),
          n = o (Q, r, function (e) {
            var t = e.prevState, n = e.state;
            r.onStateChange (
              z (
                {
                  prevState: t,
                  state: n,
                  refresh: l,
                },
                u
              )
            );
          }),
          u = (function (e) {
            var t = e.store;
            return {
              setActiveItemId: function (e) {
                t.dispatch ('setActiveItemId', e);
              },
              setQuery: function (e) {
                t.dispatch ('setQuery', e);
              },
              setCollections: function (e) {
                var r = 0,
                  n = e.map (function (e) {
                    return c (
                      c ({}, e),
                      {},
                      {
                        items: i (e.items).map (function (e) {
                          return c (
                            c ({}, e),
                            {},
                            {
                              __autocomplete_id: r++,
                            }
                          );
                        }),
                      }
                    );
                  });
                t.dispatch ('setCollections', n);
              },
              setIsOpen: function (e) {
                t.dispatch ('setIsOpen', e);
              },
              setStatus: function (e) {
                t.dispatch ('setStatus', e);
              },
              setContext: function (e) {
                t.dispatch ('setContext', e);
              },
            };
          }) ({
            store: n,
          }),
          a = H (
            z (
              {
                props: r,
                refresh: l,
                store: n,
              },
              u
            )
          );

        function l () {
          return w (
            z (
              {
                event: new Event ('input'),
                nextState: {
                  isOpen: n.getState ().isOpen,
                },
                props: r,
                query: n.getState ().query,
                refresh: l,
                store: n,
              },
              u
            )
          );
        }
        return r.plugins.forEach (function (e) {
          var r;
          return null === (r = e.subscribe) || void 0 === r
            ? void 0
            : r.call (
                e,
                z (
                  z ({}, u),
                  {},
                  {
                    refresh: l,
                    onSelect: function (e) {
                      t.push ({
                        onSelect: e,
                      });
                    },
                    onActive: function (e) {
                      t.push ({
                        onActive: e,
                      });
                    },
                  }
                )
              );
        }), z (
          z (
            {
              refresh: l,
            },
            a
          ),
          u
        );
      }

      function X (e) {
        return {
          current: e,
        };
      }

      function Z (e, t) {
        var r = void 0;
        return function () {
          for (var n = arguments.length, u = new Array (n), o = 0; o < n; o++)
            u[o] = arguments[o];
          r && clearTimeout (r), (r = setTimeout (function () {
            return e.apply (void 0, u);
          }, t));
        };
      }

      function Y (e, t, r) {
        e[t] = null === r ? '' : 'number' != typeof r ? r : r + 'px';
      }

      function ee (e) {
        this._listeners[e.type] (e);
      }

      function te (e, t, r) {
        var n, u, o = e[t];
        if ('style' === t)
          if ('string' == typeof r) e.style = r;
          else if (null === r) e.style = '';
          else for (t in r) (o && r[t] === o[t]) || Y (e.style, t, r[t]);
        else
          'o' === t[0] && 'n' === t[1]
            ? ((n =
                t !==
                (t = t.replace (/Capture$/, ''))), (u = t.toLowerCase ()) in
                e && (t = u), (t = t.slice (2)), e._listeners ||
                (e._listeners = {}), (e._listeners[t] = r), r
                ? o || e.addEventListener (t, ee, n)
                : e.removeEventListener (t, ee, n))
            : 'list' !== t &&
                'tagName' !== t &&
                'form' !== t &&
                'type' !== t &&
                'size' !== t &&
                'download' !== t &&
                'href' !== t &&
                t in e
                ? (e[t] = null == r ? '' : r)
                : 'function' != typeof r &&
                    'dangerouslySetInnerHTML' !== t &&
                    (null == r || (!1 === r && !/^ar/.test (t))
                      ? e.removeAttribute (t)
                      : e.setAttribute (t, r));
      }

      function re (e) {
        switch (e) {
          case 'onChange':
            return 'onInput';
          default:
            return e;
        }
      }

      function ne (e, t) {
        for (var r in t)
          te (e, re (r), t[r]);
      }

      function ue (e, t) {
        for (var r in t)
          ('o' === r[0] && 'n' === r[1]) || te (e, re (r), t[r]);
      }

      function oe (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return ie (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return ie (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? ie (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function ie (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function ae (e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r, n, u = {}, o = Object.keys (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
            return u;
          }) (e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols (e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf (r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call (e, r) &&
                (u[r] = e[r]));
        }
        return u;
      }

      function ce (e, t) {
        var r = t.children,
          n = void 0 === r ? [] : r,
          u = ae (t, ['children']),
          o = document.createElement (e);
        return ne (o, u), o.append.apply (o, oe (n)), o;
      }
      var le = function () {
        var e = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
        e.setAttribute ('class', 'aa-SubmitIcon'), e.setAttribute (
          'viewBox',
          '0 0 24 24'
        ), e.setAttribute ('width', '20'), e.setAttribute (
          'height',
          '20'
        ), e.setAttribute ('fill', 'currentColor');
        var t = document.createElementNS ('http://www.w3.org/2000/svg', 'path');
        return t.setAttribute (
          'd',
          'M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z'
        ), e.appendChild (t), e;
      },
        se = function () {
          var e = document.createElementNS (
            'http://www.w3.org/2000/svg',
            'svg'
          );
          e.setAttribute ('class', 'aa-ClearIcon'), e.setAttribute (
            'viewBox',
            '0 0 24 24'
          ), e.setAttribute ('width', '18'), e.setAttribute (
            'height',
            '18'
          ), e.setAttribute ('fill', 'currentColor');
          var t = document.createElementNS (
            'http://www.w3.org/2000/svg',
            'path'
          );
          return t.setAttribute (
            'd',
            'M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z'
          ), e.appendChild (t), e;
        };

      function fe (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function pe (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fe (Object (r), !0).forEach (function (t) {
                de (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : fe (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function de (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function me (e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r, n, u = {}, o = Object.keys (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
            return u;
          }) (e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols (e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf (r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call (e, r) &&
                (u[r] = e[r]));
        }
        return u;
      }

      function ve (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function De (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ve (Object (r), !0).forEach (function (t) {
                he (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : ve (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function he (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function ye (e) {
        var t = e.autocomplete,
          r = e.autocompleteScopeApi,
          n = e.classNames,
          u = e.isDetached,
          o = e.placeholder,
          i = void 0 === o ? 'Search' : o,
          a = e.propGetters,
          c = e.state;

        function l () {
          t.setQuery (''), t.setIsOpen (
            !1
          ), t.refresh (), document.body.classList.remove ('aa-Detached');
        }
        var s,
          f = a.getRootProps (
            De (
              {
                state: c,
                props: t.getRootProps ({}),
              },
              r
            )
          ),
          p = ce (
            'div',
            De (
              {
                class: n.root,
              },
              f
            )
          ),
          d = ce ('div', {
            class: n.detachedContainer,
            onMouseDown: function (e) {
              e.stopPropagation ();
            },
          }),
          m = ce ('div', {
            class: n.detachedOverlay,
            children: [d],
            onMouseDown: function () {
              document.body.removeChild (m), l ();
            },
          }),
          v = a.getLabelProps (
            De (
              {
                state: c,
                props: t.getLabelProps ({}),
              },
              r
            )
          ),
          D = ce ('button', {
            class: n.submitButton,
            type: 'submit',
            title: 'Submit',
            children: [le ()],
          }),
          h = ce (
            'label',
            De (
              {
                class: n.label,
                children: [D],
              },
              v
            )
          ),
          y = ce ('button', {
            class: n.clearButton,
            type: 'reset',
            title: 'Clear',
            children: [se ()],
          }),
          g = ce ('div', {
            class: n.loadingIndicator,
            children: [
              ((s = document.createElementNS (
                'http://www.w3.org/2000/svg',
                'svg'
              )), s.setAttribute ('class', 'aa-LoadingIcon'), s.setAttribute (
                'viewBox',
                '0 0 100 100'
              ), s.setAttribute ('width', '20'), s.setAttribute (
                'height',
                '20'
              ), (s.innerHTML =
                '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>'), s),
            ],
          }),
          b = (function (e) {
            var t = e.autocompleteScopeApi,
              r = (e.classNames, e.getInputProps),
              n = e.getInputPropsCore,
              u = e.onDetachedEscape,
              o = e.state,
              i = ce (
                'input',
                me (e, [
                  'autocompleteScopeApi',
                  'classNames',
                  'getInputProps',
                  'getInputPropsCore',
                  'onDetachedEscape',
                  'state',
                ])
              ),
              a = r (
                pe (
                  {
                    state: o,
                    props: n ({
                      inputElement: i,
                    }),
                    inputElement: i,
                  },
                  t
                )
              );
            return ne (
              i,
              pe (
                pe ({}, a),
                {},
                {
                  onKeyDown: function (e) {
                    u && 'Escape' === e.key ? u () : a.onKeyDown (e);
                  },
                }
              )
            ), i;
          }) ({
            class: n.input,
            state: c,
            getInputProps: a.getInputProps,
            getInputPropsCore: t.getInputProps,
            autocompleteScopeApi: r,
            onDetachedEscape: u
              ? function () {
                  document.body.removeChild (m), l ();
                }
              : void 0,
          }),
          O = ce ('div', {
            class: n.inputWrapperPrefix,
            children: [h, g],
          }),
          A = ce ('div', {
            class: n.inputWrapperSuffix,
            children: [y],
          }),
          C = ce ('div', {
            class: n.inputWrapper,
            children: [b],
          }),
          E = a.getFormProps (
            De (
              {
                state: c,
                props: t.getFormProps ({
                  inputElement: b,
                }),
              },
              r
            )
          ),
          F = ce (
            'form',
            De (
              {
                class: n.form,
                children: [O, C, A],
              },
              E
            )
          ),
          _ = a.getPanelProps (
            De (
              {
                state: c,
                props: t.getPanelProps ({}),
              },
              r
            )
          ),
          j = ce (
            'div',
            De (
              {
                class: n.panel,
              },
              _
            )
          );

        function P () {
          document.body.appendChild (m), document.body.classList.add (
            'aa-Detached'
          ), b.focus ();
        }
        if (u) {
          var S = ce ('div', {
            class: n.detachedSearchButtonIcon,
            children: [le ()],
          }),
            w = ce ('div', {
              class: n.detachedSearchButtonPlaceholder,
              textContent: i,
            }),
            B = ce ('button', {
              class: n.detachedSearchButton,
              onClick: function (e) {
                e.preventDefault (), P ();
              },
              children: [S, w],
            }),
            I = ce ('button', {
              class: n.detachedCancelButton,
              textContent: 'Cancel',
              onClick: function () {
                document.body.removeChild (m), l ();
              },
            }),
            x = ce ('div', {
              class: n.detachedFormContainer,
              children: [F, I],
            });
          d.appendChild (x), p.appendChild (B);
        } else p.appendChild (F);
        return {
          openDetachedOverlay: P,
          detachedContainer: d,
          detachedOverlay: m,
          inputWrapper: C,
          input: b,
          root: p,
          form: F,
          label: h,
          submitButton: D,
          clearButton: y,
          loadingIndicator: g,
          panel: j,
        };
      }
      var ge = r (0), be = r (7);

      function Oe (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return Ae (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Ae (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? Ae (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function Ae (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }
      var Ce = r (17);

      function Ee (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return Fe (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Fe (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? Fe (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function Fe (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function _e (e) {
        var t = e.createElement, r = e.Fragment;
        return function (e) {
          var n = e.hit,
            u = e.attribute,
            o = e.tagName,
            i = void 0 === o ? 'mark' : o;
          return t.apply (
            void 0,
            [r, {}].concat (
              Ee (
                Object (Ce.a) ({
                  hit: n,
                  attribute: u,
                }).map (function (e, r) {
                  return e.isHighlighted
                    ? t (
                        i,
                        {
                          key: r,
                        },
                        e.value
                      )
                    : e.value;
                })
              )
            )
          );
        };
      }
      var je = r (18);

      function Pe (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return Se (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Se (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? Se (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function Se (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function we (e) {
        var t = e.createElement, r = e.Fragment;
        return function (e) {
          var n = e.hit,
            u = e.attribute,
            o = e.tagName,
            i = void 0 === o ? 'mark' : o;
          return t.apply (
            void 0,
            [r, {}].concat (
              Pe (
                Object (je.a) ({
                  hit: n,
                  attribute: u,
                }).map (function (e, r) {
                  return e.isHighlighted
                    ? t (
                        i,
                        {
                          key: r,
                        },
                        e.value
                      )
                    : e.value;
                })
              )
            )
          );
        };
      }
      var Be = r (8);

      function Ie (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return xe (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return xe (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? xe (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function xe (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function ke (e) {
        var t = e.createElement, r = e.Fragment;
        return function (e) {
          var n = e.hit,
            u = e.attribute,
            o = e.tagName,
            i = void 0 === o ? 'mark' : o;
          return t.apply (
            void 0,
            [r, {}].concat (
              Ie (
                Object (Be.a) ({
                  hit: n,
                  attribute: u,
                }).map (function (e, r) {
                  return e.isHighlighted
                    ? t (
                        i,
                        {
                          key: r,
                        },
                        e.value
                      )
                    : e.value;
                })
              )
            )
          );
        };
      }

      function Ne (e) {
        if ('string' == typeof e) {
          var t = document.querySelector (e);
          return 'The element '.concat (
            JSON.stringify (e),
            ' is not in the document.'
          ), t;
        }
        return e;
      }

      function qe () {
        for (var e = arguments.length, t = new Array (e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.reduce (function (e, t) {
          return Object.keys (t).forEach (function (r) {
            var n = e[r], u = t[r];
            n !== u && (e[r] = [n, u].filter (Boolean).join (' '));
          }), e;
        }, {});
      }

      function Te (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function Re (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Te (Object (r), !0).forEach (function (t) {
                Me (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : Te (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function Me (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function He (e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r, n, u = {}, o = Object.keys (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
            return u;
          }) (e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols (e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf (r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call (e, r) &&
                (u[r] = e[r]));
        }
        return u;
      }
      var Le = {
        clearButton: 'aa-ClearButton',
        detachedCancelButton: 'aa-DetachedCancelButton',
        detachedContainer: 'aa-DetachedContainer',
        detachedFormContainer: 'aa-DetachedFormContainer',
        detachedOverlay: 'aa-DetachedOverlay',
        detachedSearchButton: 'aa-DetachedSearchButton',
        detachedSearchButtonIcon: 'aa-DetachedSearchButtonIcon',
        detachedSearchButtonPlaceholder: 'aa-DetachedSearchButtonPlaceholder',
        form: 'aa-Form',
        input: 'aa-Input',
        inputWrapper: 'aa-InputWrapper',
        inputWrapperPrefix: 'aa-InputWrapperPrefix',
        inputWrapperSuffix: 'aa-InputWrapperSuffix',
        item: 'aa-Item',
        label: 'aa-Label',
        list: 'aa-List',
        loadingIndicator: 'aa-LoadingIndicator',
        panel: 'aa-Panel',
        panelLayout: 'aa-PanelLayout',
        root: 'aa-Autocomplete',
        source: 'aa-Source',
        sourceFooter: 'aa-SourceFooter',
        sourceHeader: 'aa-SourceHeader',
        sourceNoResults: 'aa-SourceNoResults',
        submitButton: 'aa-SubmitButton',
      },
        Ue = function (e, t) {
          var r = e.children;
          Object (ge.d) (r, t);
        },
        Ve = {
          createElement: ge.b,
          Fragment: ge.a,
        };

      function We (e) {
        var t = e.panelPlacement,
          r = e.container,
          n = e.form,
          u = e.environment,
          o = r.getBoundingClientRect (),
          i = r.offsetTop + o.height;
        switch (t) {
          case 'start':
            return {
              top: i,
              left: o.left,
            };
          case 'end':
            return {
              top: i,
              right: u.document.documentElement.clientWidth -
                (o.left + o.width),
            };
          case 'full-width':
            return {
              top: i,
              left: 0,
              right: 0,
              width: 'unset',
              maxWidth: 'unset',
            };
          case 'input-wrapper-width':
            var a = n.getBoundingClientRect ();
            return {
              top: i,
              left: a.left,
              right: u.document.documentElement.clientWidth -
                (a.left + a.width),
              width: 'unset',
              maxWidth: 'unset',
            };
          default:
            throw new Error (
              'The `panelPlacement` value '.concat (
                JSON.stringify (t),
                ' is not valid.'
              )
            );
        }
      }

      function Je () {
        return (Je =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call (r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply (this, arguments);
      }

      function Qe (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function $e (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qe (Object (r), !0).forEach (function (t) {
                ze (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : Qe (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function ze (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function Ke (e) {
        return (
          (function (e) {
            if (Array.isArray (e)) return Ge (e);
          }) (e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object (e))
              return Array.from (e);
          }) (e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Ge (e, t);
              var r = Object.prototype.toString.call (e).slice (8, -1);
              return 'Object' === r &&
                e.constructor &&
                (r = e.constructor.name), 'Map' === r || 'Set' === r
                ? Array.from (e)
                : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                    ? Ge (e, t)
                    : void 0;
            }
          }) (e) ||
          (function () {
            throw new TypeError (
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }) ()
        );
      }

      function Ge (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }

      function Xe (e) {
        return (Xe = 'function' == typeof Symbol &&
          'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }) (e);
      }
      var Ze = function (e) {
        return e && 'object' === Xe (e);
      };

      function Ye () {
        for (var e = arguments.length, t = new Array (e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.reduce (function (e, t) {
          return Object.keys (t).forEach (function (r) {
            var n = e[r], u = t[r];
            Array.isArray (n) && Array.isArray (u)
              ? (e[r] = n.concat.apply (n, Ke (u)))
              : Ze (n) && Ze (u) ? (e[r] = Ye (n, u)) : (e[r] = u);
          }), e;
        }, {});
      }

      function et (e, t) {
        var r = Object.keys (e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols (e);
          t &&
            (n = n.filter (function (t) {
              return Object.getOwnPropertyDescriptor (e, t).enumerable;
            })), r.push.apply (r, n);
        }
        return r;
      }

      function tt (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? et (Object (r), !0).forEach (function (t) {
                rt (e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
                ? Object.defineProperties (
                    e,
                    Object.getOwnPropertyDescriptors (r)
                  )
                : et (Object (r)).forEach (function (t) {
                    Object.defineProperty (
                      e,
                      t,
                      Object.getOwnPropertyDescriptor (r, t)
                    );
                  });
        }
        return e;
      }

      function rt (e, t, r) {
        return t in e
          ? Object.defineProperty (e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r), e;
      }

      function nt (e) {
        var t,
          r = (function () {
            var e = [], t = [];

            function r (r) {
              e.push (r);
              var n = r ();
              t.push (n);
            }
            return {
              runEffect: r,
              cleanupEffects: function () {
                var e = t;
                (t = []), e.forEach (function (e) {
                  e ();
                });
              },
              runEffects: function () {
                var t = e;
                (e = []), t.forEach (function (e) {
                  r (e);
                });
              },
            };
          }) (),
          n = r.runEffect,
          u = r.cleanupEffects,
          o = r.runEffects,
          i = ((t = []), {
            reactive: function (e) {
              var r = e (),
                n = {
                  _fn: e,
                  _ref: {
                    current: r,
                  },
                  get value () {
                    return this._ref.current;
                  },
                  set value (e) {
                    this._ref.current = e;
                  },
                };
              return t.push (n), n;
            },
            runReactives: function () {
              t.forEach (function (e) {
                e._ref.current = e._fn ();
              });
            },
          }),
          a = i.reactive,
          c = i.runReactives,
          l = X (!1),
          f = X (e),
          d = X (void 0),
          m = a (function () {
            return (function (e) {
              var t,
                r = e.classNames,
                n = e.container,
                u = e.getEnvironmentProps,
                o = e.getFormProps,
                i = e.getInputProps,
                a = e.getItemProps,
                c = e.getLabelProps,
                l = e.getListProps,
                s = e.getPanelProps,
                f = e.getRootProps,
                d = e.panelContainer,
                m = e.panelPlacement,
                v = e.render,
                D = e.renderNoResults,
                h = e.renderer,
                y = e.detachedMediaQuery,
                g = e.components,
                b = He (e, [
                  'classNames',
                  'container',
                  'getEnvironmentProps',
                  'getFormProps',
                  'getInputProps',
                  'getItemProps',
                  'getLabelProps',
                  'getListProps',
                  'getPanelProps',
                  'getRootProps',
                  'panelContainer',
                  'panelPlacement',
                  'render',
                  'renderNoResults',
                  'renderer',
                  'detachedMediaQuery',
                  'components',
                ]),
                O = Ne (n);
              O.tagName;
              var A,
                C,
                E,
                F = 'undefined' != typeof window ? window : {},
                _ = null != h ? h : Ve,
                j = {
                  Highlight: ((A = _), (C = A.createElement), (E =
                    A.Fragment), function (e) {
                    var t = e.hit,
                      r = e.attribute,
                      n = e.tagName,
                      u = void 0 === n ? 'mark' : n;
                    return C.apply (
                      void 0,
                      [E, {}].concat (
                        Oe (
                          Object (be.a) ({
                            hit: t,
                            attribute: r,
                          }).map (function (e, t) {
                            return e.isHighlighted
                              ? C (
                                  u,
                                  {
                                    key: t,
                                  },
                                  e.value
                                )
                              : e.value;
                          })
                        )
                      )
                    );
                  }),
                  ReverseHighlight: _e (_),
                  ReverseSnippet: we (_),
                  Snippet: ke (_),
                };
              return {
                renderer: {
                  classNames: qe (Le, null != r ? r : {}),
                  container: O,
                  getEnvironmentProps: null != u
                    ? u
                    : function (e) {
                        return e.props;
                      },
                  getFormProps: null != o
                    ? o
                    : function (e) {
                        return e.props;
                      },
                  getInputProps: null != i
                    ? i
                    : function (e) {
                        return e.props;
                      },
                  getItemProps: null != a
                    ? a
                    : function (e) {
                        return e.props;
                      },
                  getLabelProps: null != c
                    ? c
                    : function (e) {
                        return e.props;
                      },
                  getListProps: null != l
                    ? l
                    : function (e) {
                        return e.props;
                      },
                  getPanelProps: null != s
                    ? s
                    : function (e) {
                        return e.props;
                      },
                  getRootProps: null != f
                    ? f
                    : function (e) {
                        return e.props;
                      },
                  panelContainer: d ? Ne (d) : document.body,
                  panelPlacement: null != m ? m : 'input-wrapper-width',
                  render: null != v ? v : Ue,
                  renderNoResults: D,
                  renderer: _,
                  detachedMediaQuery: null != y
                    ? y
                    : getComputedStyle (
                        F.document.documentElement
                      ).getPropertyValue ('--aa-detached-media-query'),
                  components: Re (Re ({}, j), g),
                },
                core: Re (
                  Re ({}, b),
                  {},
                  {
                    id: null !== (t = b.id) && void 0 !== t ? t : p (),
                    environment: F,
                  }
                ),
              };
            }) (f.current);
          }),
          v = a (function () {
            return m.value.core.environment.matchMedia (
              m.value.renderer.detachedMediaQuery
            ).matches;
          }),
          D = a (function () {
            return G (
              tt (
                tt ({}, m.value.core),
                {},
                {
                  onStateChange: function (e) {
                    var t, r, n;
                    (l.current = e.state.collections.some (function (e) {
                      return e.source.templates.noResults;
                    })), null === (t = d.current) ||
                      void 0 === t ||
                      t.call (d, e), null ===
                      (r = (n = m.value.core).onStateChange) ||
                      void 0 === r ||
                      r.call (n, e);
                  },
                  shouldPanelOpen: f.current.shouldPanelOpen ||
                    function (e) {
                      var t = e.state, r = s (t) > 0;
                      if (!m.value.core.openOnFocus && !t.query) return r;
                      var n = Boolean (
                        l.current || m.value.renderer.renderNoResults
                      );
                      return (!r && n) || r;
                    },
                }
              )
            );
          }),
          h = X (
            tt (
              {
                collections: [],
                completion: null,
                context: {},
                isOpen: !1,
                query: '',
                activeItemId: null,
                status: 'idle',
              },
              m.value.core.initialState
            )
          ),
          y = {
            getEnvironmentProps: m.value.renderer.getEnvironmentProps,
            getFormProps: m.value.renderer.getFormProps,
            getInputProps: m.value.renderer.getInputProps,
            getItemProps: m.value.renderer.getItemProps,
            getLabelProps: m.value.renderer.getLabelProps,
            getListProps: m.value.renderer.getListProps,
            getPanelProps: m.value.renderer.getPanelProps,
            getRootProps: m.value.renderer.getRootProps,
          },
          g = {
            setActiveItemId: D.value.setActiveItemId,
            setQuery: D.value.setQuery,
            setCollections: D.value.setCollections,
            setIsOpen: D.value.setIsOpen,
            setStatus: D.value.setStatus,
            setContext: D.value.setContext,
            refresh: D.value.refresh,
          },
          b = a (function () {
            return ye ({
              autocomplete: D.value,
              autocompleteScopeApi: g,
              classNames: m.value.renderer.classNames,
              isDetached: v.value,
              placeholder: m.value.core.placeholder,
              propGetters: y,
              state: h.current,
            });
          });

        function O () {
          ne (b.value.panel, {
            style: v.value
              ? {}
              : We ({
                  panelPlacement: m.value.renderer.panelPlacement,
                  container: b.value.root,
                  form: b.value.form,
                  environment: m.value.core.environment,
                }),
          });
        }

        function A (e) {
          h.current = e;
          var t = {
            autocomplete: D.value,
            autocompleteScopeApi: g,
            classNames: m.value.renderer.classNames,
            components: m.value.renderer.components,
            container: m.value.renderer.container,
            createElement: m.value.renderer.renderer.createElement,
            dom: b.value,
            Fragment: m.value.renderer.renderer.Fragment,
            panelContainer: v.value
              ? b.value.detachedContainer
              : m.value.renderer.panelContainer,
            propGetters: y,
            state: h.current,
          },
            r =
              (!s (e) && !l.current && m.value.renderer.renderNoResults) ||
              m.value.renderer.render;
          !(function (e) {
            var t = e.autocomplete,
              r = e.autocompleteScopeApi,
              n = e.dom,
              u = e.propGetters,
              o = e.state;
            ue (
              n.root,
              u.getRootProps (
                $e (
                  {
                    state: o,
                    props: t.getRootProps ({}),
                  },
                  r
                )
              )
            ), ue (
              n.input,
              u.getInputProps (
                $e (
                  {
                    state: o,
                    props: t.getInputProps ({
                      inputElement: n.input,
                    }),
                    inputElement: n.input,
                  },
                  r
                )
              )
            ), ne (n.label, {
              hidden: 'stalled' === o.status,
            }), ne (n.loadingIndicator, {
              hidden: 'stalled' !== o.status,
            }), ne (n.clearButton, {
              hidden: !o.query,
            });
          }) (t), (function (e, t) {
            var r = t.autocomplete,
              n = t.autocompleteScopeApi,
              u = t.classNames,
              o = t.createElement,
              i = t.dom,
              a = t.Fragment,
              c = t.panelContainer,
              l = t.propGetters,
              s = t.state,
              f = t.components;
            if (s.isOpen) {
              c.contains (i.panel) ||
                'loading' === s.status ||
                c.appendChild (i.panel), i.panel.classList.toggle (
                'aa-Panel--stalled',
                'stalled' === s.status
              );
              var p = s.collections.map (function (e, t) {
                var i = e.source, c = e.items;
                return o (
                  'section',
                  {
                    key: t,
                    className: u.source,
                    'data-autocomplete-source-id': i.sourceId,
                  },
                  i.templates.header &&
                    o (
                      'div',
                      {
                        className: u.sourceHeader,
                      },
                      i.templates.header ({
                        components: f,
                        createElement: o,
                        Fragment: a,
                        items: c,
                        source: i,
                        state: s,
                      })
                    ),
                  0 === c.length && i.templates.noResults && s.query
                    ? o (
                        'div',
                        {
                          className: u.sourceNoResults,
                        },
                        i.templates.noResults ({
                          components: f,
                          createElement: o,
                          Fragment: a,
                          source: i,
                          state: s,
                        })
                      )
                    : o (
                        'ul',
                        Je (
                          {
                            className: u.list,
                          },
                          l.getListProps (
                            $e (
                              {
                                state: s,
                                props: r.getListProps ({}),
                              },
                              n
                            )
                          )
                        ),
                        c.map (function (e) {
                          var t = r.getItemProps ({
                            item: e,
                            source: i,
                          });
                          return o (
                            'li',
                            Je (
                              {
                                key: t.id,
                                className: u.item,
                              },
                              l.getItemProps (
                                $e (
                                  {
                                    state: s,
                                    props: t,
                                  },
                                  n
                                )
                              )
                            ),
                            i.templates.item ({
                              components: f,
                              createElement: o,
                              Fragment: a,
                              item: e,
                              state: s,
                            })
                          );
                        })
                      ),
                  i.templates.footer &&
                    o (
                      'div',
                      {
                        className: u.sourceFooter,
                      },
                      i.templates.footer ({
                        components: f,
                        createElement: o,
                        Fragment: a,
                        items: c,
                        source: i,
                        state: s,
                      })
                    )
                );
              }),
                d = o (
                  a,
                  null,
                  o (
                    'div',
                    {
                      className: 'aa-PanelLayout aa-Panel--scrollable',
                    },
                    p
                  ),
                  o ('div', {
                    className: 'aa-GradientBottom',
                  })
                ),
                m = p.reduce (function (e, t) {
                  return (e[t.props['data-autocomplete-source-id']] = t), e;
                }, {});
              e (
                {
                  children: d,
                  state: s,
                  sections: p,
                  elements: m,
                  createElement: o,
                  Fragment: a,
                  components: f,
                },
                i.panel
              );
            } else c.contains (i.panel) && c.removeChild (i.panel);
          }) (r, t);
        }

        function C () {
          var e = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          u (), (f.current = Ye (
            m.value.renderer,
            m.value.core,
            {
              initialState: h.current,
            },
            e
          )), c (), o (), D.value.refresh ().then (function () {
            A (h.current);
          });
        }
        return n (function () {
          var e = D.value.getEnvironmentProps ({
            formElement: b.value.form,
            panelElement: b.value.panel,
            inputElement: b.value.input,
          });
          return ne (m.value.core.environment, e), function () {
            ne (
              m.value.core.environment,
              Object.keys (e).reduce (function (e, t) {
                return tt (tt ({}, e), {}, rt ({}, t, void 0));
              }, {})
            );
          };
        }), n (function () {
          var e = v.value
            ? m.value.core.environment.document.body
            : m.value.renderer.panelContainer,
            t = v.value ? b.value.detachedOverlay : b.value.panel;
          return v.value &&
            h.current.isOpen &&
            b.value.openDetachedOverlay (), A (h.current), function () {
            e.contains (t) && e.removeChild (t);
          };
        }), n (function () {
          var e = m.value.renderer.container;
          return e.appendChild (b.value.root), function () {
            e.removeChild (b.value.root);
          };
        }), n (function () {
          var e = Z (function (e) {
            A (e.state);
          }, 0);
          return (d.current = function (t) {
            var r = t.state, n = t.prevState;
            r.isOpen && !n.isOpen && O (), r.query !== n.query &&
              document
                .querySelectorAll ('.aa-Panel--scrollable')
                .forEach (function (e) {
                  0 !== e.scrollTop && (e.scrollTop = 0);
                }), e ({
              state: r,
            });
          }), function () {
            d.current = void 0;
          };
        }), n (function () {
          var e = Z (function () {
            var e = v.value;
            (v.value = m.value.core.environment.matchMedia (
              m.value.renderer.detachedMediaQuery
            ).matches), e !== v.value ? C ({}) : requestAnimationFrame (O);
          }, 20);
          return m.value.core.environment.addEventListener (
            'resize',
            e
          ), function () {
            m.value.core.environment.removeEventListener ('resize', e);
          };
        }), n (function () {
          if (!v.value) return function () {};

          function e (e) {
            b.value.detachedContainer.classList.toggle (
              'aa-DetachedContainer--modal',
              e
            );
          }

          function t (t) {
            e (t.matches);
          }
          var r = m.value.core.environment.matchMedia (
            getComputedStyle (
              m.value.core.environment.document.documentElement
            ).getPropertyValue ('--aa-detached-modal-media-query')
          );
          return e (r.matches), r.addEventListener ('change', t), function () {
            r.removeEventListener ('change', t);
          };
        }), n (function () {
          return requestAnimationFrame (O), function () {};
        }), tt (
          tt ({}, g),
          {},
          {
            update: C,
            destroy: function () {
              u ();
            },
          }
        );
      }
    },
    function (e, t, r) {
      r (40), (e.exports = r (41));
    },
    function (e, t, r) {
      'use strict';
      r.r (t);
    },
    function (e, t, r) {
      'use strict';
      Object.defineProperty (t, '__esModule', {
        value: !0,
      });
      var n = r (42);
      e.exports = n.algoliasearchNetlify;
    },
    function (e, t, r) {
      'use strict';
      function n (e, t) {
        var r;
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray (e) ||
            (r = (function (e, t) {
              if (e) {
                if ('string' == typeof e) return u (e, t);
                var r = Object.prototype.toString.call (e).slice (8, -1);
                return 'Object' === r &&
                  e.constructor &&
                  (r = e.constructor.name), 'Map' === r || 'Set' === r
                  ? Array.from (e)
                  : 'Arguments' === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test (r)
                      ? u (e, t)
                      : void 0;
              }
            }) (e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            r && (e = r);
            var n = 0, o = function () {};
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
          throw new TypeError (
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i, a = !0, c = !1;
        return {
          s: function () {
            r = e[Symbol.iterator] ();
          },
          n: function () {
            var e = r.next ();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              a || null == r.return || r.return ();
            } finally {
              if (c) throw i;
            }
          },
        };
      }

      function u (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array (t); r < t; r++)
          n[r] = e[r];
        return n;
      }
      Object.defineProperty (t, '__esModule', {
        value: !0,
      }), (t.algoliasearchNetlify = void 0);
      var o = r (43),
        i = {
          analytics: !0,
          hitsPerPage: 5,
          debug: !1,
          poweredBy: !0,
          placeholder: 'Search...',
          openOnFocus: !1,
        },
        a = ['appId', 'apiKey', 'selector', 'siteId', 'branch'],
        c = [];
      t.algoliasearchNetlify = function (e) {
        var t, r = Object.assign (Object.assign ({}, i), e), u = n (a);
        try {
          for (u.s (); !(t = u.n ()).done; ) {
            var l = t.value;
            if (!r[l])
              throw new Error (
                '[algoliasearch-netlify] Missing mandatory key: '.concat (l)
              );
          }
        } catch (e) {
          u.e (e);
        } finally {
          u.f ();
        }
        var s = new o.AutocompleteWrapper (r);
        c.push (s);
        var f = function () {
          s.render ();
        };
        ['complete', 'interactive'].includes (document.readyState)
          ? f ()
          : document.addEventListener ('DOMContentLoaded', f);
      };
    },
    function (e, t, r) {
      'use strict';
      function n (e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in
            n && (n.writable = !0), Object.defineProperty (e, n.key, n);
        }
      }
      var u =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        };
      Object.defineProperty (t, '__esModule', {
        value: !0,
      }), (t.AutocompleteWrapper = void 0);
      var o = r (44),
        i = r (3),
        a = u (r (45)),
        c = r (46),
        l = r (47),
        s = (function () {
          function e (t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError ('Cannot call a class as a function');
            }) (
              this,
              e
            ), (this.$themeNode = null), (this.options = t), (this.client = this.createClient ()), (this.indexName = this.computeIndexName ());
          }
          var t, r, u;
          return (t = e), (r = [
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = document.querySelector (this.options.selector);
                if (t) {
                  var r = void 0;
                  void 0 !== this.options.detached &&
                    (r = !0 === this.options.detached
                      ? ''
                      : !1 === this.options.detached
                          ? 'none'
                          : this.options.detached.mediaQuery);
                  var n = o.autocomplete ({
                    container: t,
                    autoFocus: !1,
                    placeholder: this.options.placeholder,
                    debug: this.options.debug,
                    openOnFocus: this.options.openOnFocus,
                    panelPlacement: 'input-wrapper-width',
                    detachedMediaQuery: r,
                    getSources: function () {
                      return [e.getSources ()];
                    },
                  });
                  this.applyTheme (
                    t.firstElementChild
                  ), (this.autocomplete = n);
                } else
                  console.error (
                    '[algoliasearch-netlify] no element '.concat (
                      this.options.selector,
                      ' found'
                    )
                  );
              },
            },
            {
              key: 'computeIndexName',
              value: function () {
                var e = this.options,
                  t = e.siteId,
                  r = e.branch
                    .trim ()
                    .replace (
                      /(?:(?![\x2D\.0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])+/g,
                      '-'
                    )
                    .replace (/-{2,}/g, '-')
                    .toLocaleLowerCase ();
                return 'netlify_'.concat (t, '_').concat (r, '_all');
              },
            },
            {
              key: 'createClient',
              value: function () {
                var e = a.default (this.options.appId, this.options.apiKey);
                return e.addAlgoliaAgent (
                  'Netlify integration '.concat (c.version)
                ), e;
              },
            },
            {
              key: 'getSources',
              value: function () {
                var e = this, t = this.options.poweredBy;
                return {
                  sourceId: 'algoliaHits',
                  getItems: function (t) {
                    var r = t.query;
                    return i.getAlgoliaHits ({
                      searchClient: e.client,
                      queries: [
                        {
                          indexName: e.indexName,
                          query: r,
                          params: {
                            analytics: e.options.analytics,
                            hitsPerPage: e.options.hitsPerPage,
                          },
                        },
                      ],
                    });
                  },
                  getItemUrl: function (e) {
                    return e.item.url;
                  },
                  templates: {
                    header: function () {
                      return '';
                    },
                    item: function (e) {
                      var t = e.item, r = e.components;
                      return l.templates.item (t, r);
                    },
                    footer: function () {
                      return t
                        ? l.templates.poweredBy ({
                            hostname: window.location.host,
                          })
                        : '';
                    },
                  },
                };
              },
            },
            {
              key: 'applyTheme',
              value: function (e) {
                if (e && this.options.theme) {
                  var t = this.options.theme;
                  this.$themeNode = (function (e) {
                    var t,
                      r = arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                      n = null !==
                        (t = null != r
                          ? r
                          : document.querySelector (
                              'link[rel=stylesheet][href*="algoliasearchNetlify"]'
                            )) && void 0 !== t
                        ? t
                        : document.getElementsByTagName ('head')[0].lastChild,
                      u = document.createElement ('style');
                    return u.setAttribute ('type', 'text/css'), u.appendChild (
                      document.createTextNode (e)
                    ), n.parentNode.insertBefore (u, n.nextSibling);
                  }) (
                    '.aa-Autocomplete, .aa-Panel, .aa-DetachedContainer {\n      '
                      .concat (
                        t.mark && '--color-mark: '.concat (t.mark, ';'),
                        '\n      '
                      )
                      .concat (
                        t.mark &&
                          '--color-background: '.concat (t.background, ';'),
                        '\n      '
                      )
                      .concat (
                        t.mark && '--color-selected: '.concat (t.selected, ';'),
                        '\n      '
                      )
                      .concat (
                        t.mark && '--color-text: '.concat (t.text, ';'),
                        '\n      '
                      )
                      .concat (
                        t.mark &&
                          '--color-source-icon: '.concat (
                            t.colorSourceIcon,
                            ';'
                          ),
                        '\n    }'
                      ),
                    this.$themeNode
                  );
                }
              },
            },
          ]) && n (t.prototype, r), u && n (t, u), e;
        }) ();
      t.AutocompleteWrapper = s;
    },
    function (e, t, r) {
      'use strict';
      r.r (t);
      var n = r (38);
      r.d (t, 'autocomplete', function () {
        return n.a;
      });
      var u = r (19);
      r.d (t, 'getAlgoliaFacetHits', function () {
        return u.a;
      });
      var o = r (20);
      r.d (t, 'getAlgoliaHits', function () {
        return o.a;
      });
      var i = r (21);
      r.d (t, 'getAlgoliaResults', function () {
        return i.a;
      });
      var a = r (22);
      for (var c in a)
        [
          'default',
          'autocomplete',
          'getAlgoliaFacetHits',
          'getAlgoliaHits',
          'getAlgoliaResults',
        ].indexOf (c) < 0 &&
          (function (e) {
            r.d (t, e, function () {
              return a[e];
            });
          }) (c);
    },
    function (e, t, r) {
      /*! algoliasearch-lite.umd.js | 4.8.6 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
      e.exports = (function () {
        'use strict';
        function e (e, t, r) {
          return t in e
            ? Object.defineProperty (e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r), e;
        }

        function t (e, t) {
          var r = Object.keys (e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols (e);
            t &&
              (n = n.filter (function (t) {
                return Object.getOwnPropertyDescriptor (e, t).enumerable;
              })), r.push.apply (r, n);
          }
          return r;
        }

        function r (r) {
          for (var n = 1; n < arguments.length; n++) {
            var u = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? t (Object (u), !0).forEach (function (t) {
                  e (r, t, u[t]);
                })
              : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties (
                      r,
                      Object.getOwnPropertyDescriptors (u)
                    )
                  : t (Object (u)).forEach (function (e) {
                      Object.defineProperty (
                        r,
                        e,
                        Object.getOwnPropertyDescriptor (u, e)
                      );
                    });
          }
          return r;
        }

        function n (e, t) {
          if (null == e) return {};
          var r,
            n,
            u = (function (e, t) {
              if (null == e) return {};
              var r, n, u = {}, o = Object.keys (e);
              for (n = 0; n < o.length; n++)
                (r = o[n]), t.indexOf (r) >= 0 || (u[r] = e[r]);
              return u;
            }) (e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols (e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf (r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call (e, r) &&
                  (u[r] = e[r]));
          }
          return u;
        }

        function u (e, t) {
          return (
            (function (e) {
              if (Array.isArray (e)) return e;
            }) (e) ||
            (function (e, t) {
              if (
                Symbol.iterator in Object (e) ||
                '[object Arguments]' === Object.prototype.toString.call (e)
              ) {
                var r = [], n = !0, u = !1, o = void 0;
                try {
                  for (
                    var i, a = e[Symbol.iterator] ();
                    !(n = (i = a.next ()).done) &&
                    (r.push (i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (e) {
                  (u = !0), (o = e);
                } finally {
                  try {
                    n || null == a.return || a.return ();
                  } finally {
                    if (u) throw o;
                  }
                }
                return r;
              }
            }) (e, t) ||
            (function () {
              throw new TypeError (
                'Invalid attempt to destructure non-iterable instance'
              );
            }) ()
          );
        }

        function o (e) {
          return (
            (function (e) {
              if (Array.isArray (e)) {
                for (var t = 0, r = new Array (e.length); t < e.length; t++)
                  r[t] = e[t];
                return r;
              }
            }) (e) ||
            (function (e) {
              if (
                Symbol.iterator in Object (e) ||
                '[object Arguments]' === Object.prototype.toString.call (e)
              )
                return Array.from (e);
            }) (e) ||
            (function () {
              throw new TypeError (
                'Invalid attempt to spread non-iterable instance'
              );
            }) ()
          );
        }

        function i (e) {
          var t,
            r = 'algoliasearch-client-js-'.concat (e.key),
            n = function () {
              return void 0 === t &&
                (t = e.localStorage || window.localStorage), t;
            },
            o = function () {
              return JSON.parse (n ().getItem (r) || '{}');
            };
          return {
            get: function (e, t) {
              var r = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    miss: function () {
                      return Promise.resolve ();
                    },
                  };
              return Promise.resolve ()
                .then (function () {
                  var r = JSON.stringify (e), n = o ()[r];
                  return Promise.all ([n || t (), void 0 !== n]);
                })
                .then (function (e) {
                  var t = u (e, 2), n = t[0], o = t[1];
                  return Promise.all ([n, o || r.miss (n)]);
                })
                .then (function (e) {
                  return u (e, 1)[0];
                });
            },
            set: function (e, t) {
              return Promise.resolve ().then (function () {
                var u = o ();
                return (u[
                  JSON.stringify (e)
                ] = t), n ().setItem (r, JSON.stringify (u)), t;
              });
            },
            delete: function (e) {
              return Promise.resolve ().then (function () {
                var t = o ();
                delete t[
                  JSON.stringify (e)
                ], n ().setItem (r, JSON.stringify (t));
              });
            },
            clear: function () {
              return Promise.resolve ().then (function () {
                n ().removeItem (r);
              });
            },
          };
        }

        function a (e) {
          var t = o (e.caches), r = t.shift ();
          return void 0 === r
            ? {
                get: function (e, t) {
                  var r = arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve ();
                        },
                      };
                  return t ()
                    .then (function (e) {
                      return Promise.all ([e, r.miss (e)]);
                    })
                    .then (function (e) {
                      return u (e, 1)[0];
                    });
                },
                set: function (e, t) {
                  return Promise.resolve (t);
                },
                delete: function (e) {
                  return Promise.resolve ();
                },
                clear: function () {
                  return Promise.resolve ();
                },
              }
            : {
                get: function (e, n) {
                  var u = arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve ();
                        },
                      };
                  return r.get (e, n, u).catch (function () {
                    return a ({
                      caches: t,
                    }).get (e, n, u);
                  });
                },
                set: function (e, n) {
                  return r.set (e, n).catch (function () {
                    return a ({
                      caches: t,
                    }).set (e, n);
                  });
                },
                delete: function (e) {
                  return r.delete (e).catch (function () {
                    return a ({
                      caches: t,
                    }).delete (e);
                  });
                },
                clear: function () {
                  return r.clear ().catch (function () {
                    return a ({
                      caches: t,
                    }).clear ();
                  });
                },
              };
        }

        function c () {
          var e = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                serializable: !0,
              },
            t = {};
          return {
            get: function (r, n) {
              var u = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    miss: function () {
                      return Promise.resolve ();
                    },
                  },
                o = JSON.stringify (r);
              if (o in t)
                return Promise.resolve (
                  e.serializable ? JSON.parse (t[o]) : t[o]
                );
              var i = n (),
                a =
                  (u && u.miss) ||
                  function () {
                    return Promise.resolve ();
                  };
              return i
                .then (function (e) {
                  return a (e);
                })
                .then (function () {
                  return i;
                });
            },
            set: function (r, n) {
              return (t[JSON.stringify (r)] = e.serializable
                ? JSON.stringify (n)
                : n), Promise.resolve (n);
            },
            delete: function (e) {
              return delete t[JSON.stringify (e)], Promise.resolve ();
            },
            clear: function () {
              return (t = {}), Promise.resolve ();
            },
          };
        }

        function l (e) {
          for (var t = e.length - 1; t > 0; t--) {
            var r = Math.floor (Math.random () * (t + 1)), n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
          return e;
        }

        function s (e, t) {
          return t
            ? (Object.keys (t).forEach (function (r) {
                e[r] = t[r] (e);
              }), e)
            : e;
        }

        function f (e) {
          for (
            var t = arguments.length, r = new Array (t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          var u = 0;
          return e.replace (/%s/g, function () {
            return encodeURIComponent (r[u++]);
          });
        }
        var p = {
          WithinQueryParameters: 0,
          WithinHeaders: 1,
        };

        function d (e, t) {
          var r = e || {}, n = r.data || {};
          return Object.keys (r).forEach (function (e) {
            -1 ===
              [
                'timeout',
                'headers',
                'queryParameters',
                'data',
                'cacheable',
              ].indexOf (e) && (n[e] = r[e]);
          }), {
            data: Object.entries (n).length > 0 ? n : void 0,
            timeout: r.timeout || t,
            headers: r.headers || {},
            queryParameters: r.queryParameters || {},
            cacheable: r.cacheable,
          };
        }
        var m = {
          Read: 1,
          Write: 2,
          Any: 3,
        },
          v = 1,
          D = 2,
          h = 3;

        function y (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : v;
          return r (
            r ({}, e),
            {},
            {
              status: t,
              lastUpdate: Date.now (),
            }
          );
        }

        function g (e) {
          return 'string' == typeof e
            ? {
                protocol: 'https',
                url: e,
                accept: m.Any,
              }
            : {
                protocol: e.protocol || 'https',
                url: e.url,
                accept: e.accept || m.Any,
              };
        }
        var b = 'GET', O = 'POST';

        function A (e, t) {
          return Promise.all (
            t.map (function (t) {
              return e.get (t, function () {
                return Promise.resolve (y (t));
              });
            })
          ).then (function (e) {
            var r = e.filter (function (e) {
              return (function (e) {
                return e.status === v || Date.now () - e.lastUpdate > 12e4;
              }) (e);
            }),
              n = e.filter (function (e) {
                return (function (e) {
                  return e.status === h && Date.now () - e.lastUpdate <= 12e4;
                }) (e);
              }),
              u = [].concat (o (r), o (n));
            return {
              getTimeout: function (e, t) {
                return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
              },
              statelessHosts: u.length > 0
                ? u.map (function (e) {
                    return g (e);
                  })
                : t,
            };
          });
        }

        function C (e, t, n, u) {
          var i = [],
            a = (function (e, t) {
              if (e.method !== b && (void 0 !== e.data || void 0 !== t.data)) {
                var n = Array.isArray (e.data)
                  ? e.data
                  : r (r ({}, e.data), t.data);
                return JSON.stringify (n);
              }
            }) (n, u),
            c = (function (e, t) {
              var n = r (r ({}, e.headers), t.headers), u = {};
              return Object.keys (n).forEach (function (e) {
                var t = n[e];
                u[e.toLowerCase ()] = t;
              }), u;
            }) (e, u),
            l = n.method,
            s = n.method !== b ? {} : r (r ({}, n.data), u.data),
            f = r (
              r (
                r (
                  {
                    'x-algolia-agent': e.userAgent.value,
                  },
                  e.queryParameters
                ),
                s
              ),
              u.queryParameters
            ),
            p = 0,
            d = function t (r, o) {
              var s = r.pop ();
              if (void 0 === s)
                throw {
                  name: 'RetryError',
                  message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
                  transporterStackTrace: j (i),
                };
              var d = {
                data: a,
                headers: c,
                method: l,
                url: F (s, n.path, f),
                connectTimeout: o (p, e.timeouts.connect),
                responseTimeout: o (p, u.timeout),
              },
                m = function (e) {
                  var t = {
                    request: d,
                    response: e,
                    host: s,
                    triesLeft: r.length,
                  };
                  return i.push (t), t;
                },
                v = {
                  onSuccess: function (e) {
                    return (function (e) {
                      try {
                        return JSON.parse (e.content);
                      } catch (t) {
                        throw (function (e, t) {
                          return {
                            name: 'DeserializationError',
                            message: e,
                            response: t,
                          };
                        }) (t.message, e);
                      }
                    }) (e);
                  },
                  onRetry: function (n) {
                    var u = m (n);
                    return n.isTimedOut && p++, Promise.all ([
                      e.logger.info ('Retryable failure', P (u)),
                      e.hostsCache.set (s, y (s, n.isTimedOut ? h : D)),
                    ]).then (function () {
                      return t (r, o);
                    });
                  },
                  onFail: function (e) {
                    throw (m (e), (function (e, t) {
                      var r = e.content, n = e.status, u = r;
                      try {
                        u = JSON.parse (r).message;
                      } catch (e) {}
                      return (function (e, t, r) {
                        return {
                          name: 'ApiError',
                          message: e,
                          status: t,
                          transporterStackTrace: r,
                        };
                      }) (u, n, t);
                    }) (e, j (i)));
                  },
                };
              return e.requester.send (d).then (function (e) {
                return (function (e, t) {
                  return (function (e) {
                    var t = e.status;
                    return (
                      e.isTimedOut ||
                      (function (e) {
                        var t = e.isTimedOut, r = e.status;
                        return !t && 0 == ~~r;
                      }) (e) ||
                      (2 != ~~(t / 100) && 4 != ~~(t / 100))
                    );
                  }) (e)
                    ? t.onRetry (e)
                    : 2 == ~~(e.status / 100) ? t.onSuccess (e) : t.onFail (e);
                }) (e, v);
              });
            };
          return A (e.hostsCache, t).then (function (e) {
            return d (o (e.statelessHosts).reverse (), e.getTimeout);
          });
        }

        function E (e) {
          var t = {
            value: 'Algolia for JavaScript ('.concat (e, ')'),
            add: function (e) {
              var r = '; '
                .concat (e.segment)
                .concat (
                  void 0 !== e.version ? ' ('.concat (e.version, ')') : ''
                );
              return -1 === t.value.indexOf (r) &&
                (t.value = ''.concat (t.value).concat (r)), t;
            },
          };
          return t;
        }

        function F (e, t, r) {
          var n = _ (r),
            u = ''
              .concat (e.protocol, '://')
              .concat (e.url, '/')
              .concat ('/' === t.charAt (0) ? t.substr (1) : t);
          return n.length && (u += '?'.concat (n)), u;
        }

        function _ (e) {
          return Object.keys (e)
            .map (function (t) {
              return f (
                '%s=%s',
                t,
                ((r = e[t]), '[object Object]' ===
                  Object.prototype.toString.call (r) ||
                  '[object Array]' === Object.prototype.toString.call (r)
                  ? JSON.stringify (e[t])
                  : e[t])
              );
              var r;
            })
            .join ('&');
        }

        function j (e) {
          return e.map (function (e) {
            return P (e);
          });
        }

        function P (e) {
          var t = e.request.headers['x-algolia-api-key']
            ? {
                'x-algolia-api-key': '*****',
              }
            : {};
          return r (
            r ({}, e),
            {},
            {
              request: r (
                r ({}, e.request),
                {},
                {
                  headers: r (r ({}, e.request.headers), t),
                }
              ),
            }
          );
        }
        var S = function (e) {
          var t = e.appId,
            n = (function (e, t, r) {
              var n = {
                'x-algolia-api-key': r,
                'x-algolia-application-id': t,
              };
              return {
                headers: function () {
                  return e === p.WithinHeaders ? n : {};
                },
                queryParameters: function () {
                  return e === p.WithinQueryParameters ? n : {};
                },
              };
            }) (
              void 0 !== e.authMode ? e.authMode : p.WithinHeaders,
              t,
              e.apiKey
            ),
            o = (function (e) {
              var t = e.hostsCache,
                r = e.logger,
                n = e.requester,
                o = e.requestsCache,
                i = e.responsesCache,
                a = e.timeouts,
                c = e.userAgent,
                l = e.hosts,
                s = e.queryParameters,
                f = {
                  hostsCache: t,
                  logger: r,
                  requester: n,
                  requestsCache: o,
                  responsesCache: i,
                  timeouts: a,
                  userAgent: c,
                  headers: e.headers,
                  queryParameters: s,
                  hosts: l.map (function (e) {
                    return g (e);
                  }),
                  read: function (e, t) {
                    var r = d (t, f.timeouts.read),
                      n = function () {
                        return C (
                          f,
                          f.hosts.filter (function (e) {
                            return 0 != (e.accept & m.Read);
                          }),
                          e,
                          r
                        );
                      };
                    if (
                      !0 !==
                      (void 0 !== r.cacheable ? r.cacheable : e.cacheable)
                    )
                      return n ();
                    var o = {
                      request: e,
                      mappedRequestOptions: r,
                      transporter: {
                        queryParameters: f.queryParameters,
                        headers: f.headers,
                      },
                    };
                    return f.responsesCache.get (
                      o,
                      function () {
                        return f.requestsCache.get (o, function () {
                          return f.requestsCache
                            .set (o, n ())
                            .then (
                              function (e) {
                                return Promise.all ([
                                  f.requestsCache.delete (o),
                                  e,
                                ]);
                              },
                              function (e) {
                                return Promise.all ([
                                  f.requestsCache.delete (o),
                                  Promise.reject (e),
                                ]);
                              }
                            )
                            .then (function (e) {
                              var t = u (e, 2);
                              return t[0], t[1];
                            });
                        });
                      },
                      {
                        miss: function (e) {
                          return f.responsesCache.set (o, e);
                        },
                      }
                    );
                  },
                  write: function (e, t) {
                    return C (
                      f,
                      f.hosts.filter (function (e) {
                        return 0 != (e.accept & m.Write);
                      }),
                      e,
                      d (t, f.timeouts.write)
                    );
                  },
                };
              return f;
            }) (
              r (
                r (
                  {
                    hosts: [
                      {
                        url: ''.concat (t, '-dsn.algolia.net'),
                        accept: m.Read,
                      },
                      {
                        url: ''.concat (t, '.algolia.net'),
                        accept: m.Write,
                      },
                    ].concat (
                      l ([
                        {
                          url: ''.concat (t, '-1.algolianet.com'),
                        },
                        {
                          url: ''.concat (t, '-2.algolianet.com'),
                        },
                        {
                          url: ''.concat (t, '-3.algolianet.com'),
                        },
                      ])
                    ),
                  },
                  e
                ),
                {},
                {
                  headers: r (
                    r (r ({}, n.headers ()), {
                      'content-type': 'application/x-www-form-urlencoded',
                    }),
                    e.headers
                  ),
                  queryParameters: r (
                    r ({}, n.queryParameters ()),
                    e.queryParameters
                  ),
                }
              )
            );
          return s (
            {
              transporter: o,
              appId: t,
              addAlgoliaAgent: function (e, t) {
                o.userAgent.add ({
                  segment: e,
                  version: t,
                });
              },
              clearCache: function () {
                return Promise.all ([
                  o.requestsCache.clear (),
                  o.responsesCache.clear (),
                ]).then (function () {});
              },
            },
            e.methods
          );
        },
          w = function (e) {
            return function (t) {
              var r = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              return s (
                {
                  transporter: e.transporter,
                  appId: e.appId,
                  indexName: t,
                },
                r.methods
              );
            };
          },
          B = function (e) {
            return function (t, n) {
              var u = t.map (function (e) {
                return r (
                  r ({}, e),
                  {},
                  {
                    params: _ (e.params || {}),
                  }
                );
              });
              return e.transporter.read (
                {
                  method: O,
                  path: '1/indexes/*/queries',
                  data: {
                    requests: u,
                  },
                  cacheable: !0,
                },
                n
              );
            };
          },
          I = function (e) {
            return function (t, u) {
              return Promise.all (
                t.map (function (t) {
                  var o = t.params,
                    i = o.facetName,
                    a = o.facetQuery,
                    c = n (o, ['facetName', 'facetQuery']);
                  return w (e) (t.indexName, {
                    methods: {
                      searchForFacetValues: N,
                    },
                  }).searchForFacetValues (i, a, r (r ({}, u), c));
                })
              );
            };
          },
          x = function (e) {
            return function (t, r, n) {
              return e.transporter.read (
                {
                  method: O,
                  path: f ('1/answers/%s/prediction', e.indexName),
                  data: {
                    query: t,
                    queryLanguages: r,
                  },
                  cacheable: !0,
                },
                n
              );
            };
          },
          k = function (e) {
            return function (t, r) {
              return e.transporter.read (
                {
                  method: O,
                  path: f ('1/indexes/%s/query', e.indexName),
                  data: {
                    query: t,
                  },
                  cacheable: !0,
                },
                r
              );
            };
          },
          N = function (e) {
            return function (t, r, n) {
              return e.transporter.read (
                {
                  method: O,
                  path: f ('1/indexes/%s/facets/%s/query', e.indexName, t),
                  data: {
                    facetQuery: r,
                  },
                  cacheable: !0,
                },
                n
              );
            };
          },
          q = 1,
          T = 2,
          R = 3;

        function M (e, t, n) {
          var u,
            o = {
              appId: e,
              apiKey: t,
              timeouts: {
                connect: 1,
                read: 2,
                write: 30,
              },
              requester: {
                send: function (e) {
                  return new Promise (function (t) {
                    var r = new XMLHttpRequest ();
                    r.open (e.method, e.url, !0), Object.keys (
                      e.headers
                    ).forEach (function (t) {
                      return r.setRequestHeader (t, e.headers[t]);
                    });
                    var n,
                      u = function (e, n) {
                        return setTimeout (function () {
                          r.abort (), t ({
                            status: 0,
                            content: n,
                            isTimedOut: !0,
                          });
                        }, 1e3 * e);
                      },
                      o = u (e.connectTimeout, 'Connection timeout');
                    (r.onreadystatechange = function () {
                      r.readyState > r.OPENED &&
                        void 0 === n &&
                        (clearTimeout (o), (n = u (
                          e.responseTimeout,
                          'Socket timeout'
                        )));
                    }), (r.onerror = function () {
                      0 === r.status &&
                        (clearTimeout (o), clearTimeout (n), t ({
                          content: r.responseText || 'Network request failed',
                          status: r.status,
                          isTimedOut: !1,
                        }));
                    }), (r.onload = function () {
                      clearTimeout (o), clearTimeout (n), t ({
                        content: r.responseText,
                        status: r.status,
                        isTimedOut: !1,
                      });
                    }), r.send (e.data);
                  });
                },
              },
              logger: ((u = R), {
                debug: function (e, t) {
                  return q >= u && console.debug (e, t), Promise.resolve ();
                },
                info: function (e, t) {
                  return T >= u && console.info (e, t), Promise.resolve ();
                },
                error: function (e, t) {
                  return console.error (e, t), Promise.resolve ();
                },
              }),
              responsesCache: c (),
              requestsCache: c ({
                serializable: !1,
              }),
              hostsCache: a ({
                caches: [
                  i ({
                    key: ''.concat ('4.8.6', '-').concat (e),
                  }),
                  c (),
                ],
              }),
              userAgent: E ('4.8.6').add ({
                segment: 'Browser',
                version: 'lite',
              }),
              authMode: p.WithinQueryParameters,
            };
          return S (
            r (
              r (r ({}, o), n),
              {},
              {
                methods: {
                  search: B,
                  searchForFacetValues: I,
                  multipleQueries: B,
                  multipleSearchForFacetValues: I,
                  initIndex: function (e) {
                    return function (t) {
                      return w (e) (t, {
                        methods: {
                          search: k,
                          searchForFacetValues: N,
                          findAnswers: x,
                        },
                      });
                    };
                  },
                },
              }
            )
          );
        }
        return (M.version = '4.8.6'), M;
      }) ();
    },
    function (e) {
      e.exports = JSON.parse (
        '{"name":"@algolia/algoliasearch-netlify-frontend","version":"1.0.7","private":false,"author":"Algolia Team <contact@algolia.com>","license":"MIT","repository":"https://github.com/algolia/algoliasearch-netlify.git","bugs":{"url":"https://github.com/algolia/algoliasearch-netlify/issues"},"files":["README.md","dist/"],"scripts":{"build":"npx webpack --mode production","dev":"PORT=9100 npx webpack serve --mode development","postinstall":"[ -d dist/ ] || npm run build"},"devDependencies":{"@algolia/autocomplete-js":"1.0.0-alpha.45","@algolia/autocomplete-preset-algolia":"1.0.0-alpha.45","@algolia/autocomplete-theme-classic":"1.0.0-alpha.45","@algolia/transporter":"4.8.6","@babel/core":"7.13.15","@babel/preset-env":"7.13.15","@types/react":"17.0.3","algoliasearch":"4.8.6","babel-loader":"8.2.2","clean-webpack-plugin":"3.0.0","core-js":"3.10.1","css-loader":"5.2.0","fork-ts-checker-webpack-plugin":"6.2.1","mini-css-extract-plugin":"1.4.0","mustache":"4.2.0","node-sass":"5.0.0","postcss":"8.2.10","postcss-loader":"4.2.0","postcss-preset-env":"6.7.0","preact":"10.5.13","sass-loader":"10.1.1","terser-webpack-plugin":"4.2.3","ts-loader":"8.1.0","webpack":"4.46.0","webpack-cli":"4.6.0","webpack-dev-server":"3.11.2"},"keywords":["algolia","algoliasearch","crawl","crawler","indexing","jamstack","netlify-plugin","netlify-search","netlify","plugin","robots","search","ui"]}'
      );
    },
    function (e, t, r) {
      'use strict';
      Object.defineProperty (t, '__esModule', {
        value: !0,
      }), (t.templates = void 0);
      var n = r (48);

      function u (e, t) {
        var r = [], u = 0;
        if (!e.hierarchy) return r;
        for (var o = 1; o < 7 && u < 3; ++o)
          e.hierarchy['lvl'.concat (o)] &&
            e.hierarchy['lvl'.concat (o)].length > 0 &&
            (u > 0 && r.push (' > '), r.push (
              n.jsx (
                t.Highlight,
                {
                  hit: e,
                  attribute: 'description',
                },
                void 0
              )
            ), ++u);
        return r;
      }

      function o (e, t) {
        var r,
          u,
          o = null === (r = e._snippetResult) || void 0 === r
            ? void 0
            : r.description,
          i = null === (u = e._snippetResult) || void 0 === u
            ? void 0
            : u.content;
        return o && 'full' === o.matchLevel
          ? n.jsx (
              t.Snippet,
              {
                hit: e,
                attribute: 'description',
              },
              void 0
            )
          : i && 'full' === i.matchLevel
              ? n.jsx (
                  t.Snippet,
                  {
                    hit: e,
                    attribute: 'content',
                  },
                  void 0
                )
              : o && !i
                  ? n.jsx (
                      t.Snippet,
                      {
                        hit: e,
                        attribute: 'description',
                      },
                      void 0
                    )
                  : i
                      ? n.jsx (
                          t.Snippet,
                          {
                            hit: e,
                            attribute: 'content',
                          },
                          void 0
                        )
                      : e.description || e.content || '';
      }
      t.templates = {
        poweredBy: function (e) {
          var t = e.hostname, r = encodeURIComponent (t);
          return n.jsxs (
            'div',
            Object.assign (
              {
                className: 'aa-powered-by',
              },
              {
                children: [
                  'Search by',
                  n.jsx (
                    'a',
                    Object.assign (
                      {
                        href: 'https://www.algolia.com/?utm_source=netlify&utm_medium=link&utm_campaign=autocomplete-'.concat (
                          r
                        ),
                        className: 'aa-powered-by-link',
                      },
                      {
                        children: 'Algolia',
                      }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          );
        },
        item: function (e, t) {
          var r, i;
          return n.jsx (
            'a',
            Object.assign (
              {
                href: e.url,
              },
              {
                children: n.jsxs (
                  'div',
                  Object.assign (
                    {
                      className: 'aa-ItemContent',
                    },
                    {
                      children: [
                        n.jsx (
                          'div',
                          Object.assign (
                            {
                              className: 'aa-ItemIcon',
                            },
                            {
                              children: n.jsx (
                                'svg',
                                Object.assign (
                                  {
                                    width: '20',
                                    height: '20',
                                    viewBox: '0 0 20 20',
                                  },
                                  {
                                    children: n.jsx (
                                      'path',
                                      {
                                        d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
                                        stroke: 'currentColor',
                                        fill: 'none',
                                        fillRule: 'evenodd',
                                        strokeLinejoin: 'round',
                                      },
                                      void 0
                                    ),
                                  }
                                ),
                                void 0
                              ),
                            }
                          ),
                          void 0
                        ),
                        n.jsxs (
                          'div',
                          {
                            children: [
                              n.jsx (
                                'div',
                                Object.assign (
                                  {
                                    className: 'aa-ItemTitle',
                                  },
                                  {
                                    children: null !==
                                      (i = null === (r = e.hierarchy) ||
                                        void 0 === r
                                        ? void 0
                                        : r.lvl0) && void 0 !== i
                                      ? i
                                      : n.jsx (
                                          t.Highlight,
                                          {
                                            hit: e,
                                            attribute: 'title',
                                          },
                                          void 0
                                        ),
                                  }
                                ),
                                void 0
                              ),
                              e.hierarchy &&
                                n.jsx (
                                  'div',
                                  Object.assign (
                                    {
                                      className: 'aa-ItemHierarchy',
                                    },
                                    {
                                      children: u (e, t),
                                    }
                                  ),
                                  void 0
                                ),
                              n.jsx (
                                'div',
                                Object.assign (
                                  {
                                    className: 'aa-ItemDescription',
                                  },
                                  {
                                    children: o (e, t),
                                  }
                                ),
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
              }
            ),
            void 0
          );
        },
      };
    },
    function (e, t, r) {
      'use strict';
      r.r (t), r.d (t, 'jsx', function () {
        return u;
      }), r.d (t, 'jsxs', function () {
        return u;
      }), r.d (t, 'jsxDEV', function () {
        return u;
      });
      var n = r (0);

      function u (e, t, r, u, o) {
        var i = {};
        for (var a in t)
          'ref' != a && (i[a] = t[a]);
        var c,
          l,
          s = {
            type: e,
            props: i,
            key: r,
            ref: t && t.ref,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: ++n.c.__v,
            __source: u,
            __self: o,
          };
        if ('function' == typeof e && (c = e.defaultProps))
          for (l in c)
            void 0 === i[l] && (i[l] = c[l]);
        return n.c.vnode && n.c.vnode (s), s;
      }
      r.d (t, 'Fragment', function () {
        return n.a;
      });
    },
  ]);
}), 'object' == typeof exports && 'object' == typeof module
  ? (module.exports = t ())
  : 'function' == typeof define && define.amd
      ? define ([], t)
      : 'object' == typeof exports
          ? (exports.algoliasearchNetlify = t ())
          : (e.algoliasearchNetlify = t ());
//# sourceMappingURL=algoliasearchNetlify.js.map

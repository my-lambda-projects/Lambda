(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    AtEE: function (t, e, i) {
      'use strict';
      i.d(e, 'a', function () {
        return ot;
      }),
        i.d(e, 'b', function () {
          return rt;
        }),
        i.d(e, 'c', function () {
          return Kt;
        }),
        i.d(e, 'd', function () {
          return Si;
        }),
        i.d(e, 'e', function () {
          return Ct;
        }),
        i.d(e, 'f', function () {
          return Et;
        }),
        i.d(e, 'g', function () {
          return nt;
        }),
        i.d(e, 'h', function () {
          return Fi;
        }),
        i.d(e, 'i', function () {
          return os;
        }),
        i.d(e, 'j', function () {
          return es;
        }),
        i.d(e, 'k', function () {
          return Ri;
        }),
        i.d(e, 'l', function () {
          return Mt;
        }),
        i.d(e, 'm', function () {
          return Ni;
        });
      var s = i('4eob'),
        n = i('uZp5'),
        o = i('rknV'),
        r = i('wG49'),
        h = i('nqdA');

      function l(t) {
        return t.getSelection ? t.getSelection() : document.getSelection();
      }

      function a(t, e) {
        return !!e && t.contains(1 != e.nodeType ? e.parentNode : e);
      }

      function c(t, e) {
        if (!e.anchorNode) return !1;
        try {
          return a(t, e.anchorNode);
        } catch (i) {
          return !1;
        }
      }

      function d(t) {
        return 3 == t.nodeType
          ? A(t, 0, t.nodeValue.length).getClientRects()
          : 1 == t.nodeType
          ? t.getClientRects()
          : [];
      }

      function u(t, e, i, s) {
        return !!i && (g(t, e, i, s, -1) || g(t, e, i, s, 1));
      }

      function f(t) {
        for (var e = 0; ; e++) if (!(t = t.previousSibling)) return e;
      }

      function g(t, e, i, s, n) {
        for (;;) {
          if (t == i && e == s) return !0;
          if (e == (n < 0 ? 0 : p(t))) {
            if ('DIV' == t.nodeName) return !1;
            let i = t.parentNode;
            if (!i || 1 != i.nodeType) return !1;
            (e = f(t) + (n < 0 ? 0 : 1)), (t = i);
          } else {
            if (1 != t.nodeType) return !1;
            if (
              1 == (t = t.childNodes[e + (n < 0 ? -1 : 0)]).nodeType &&
              'false' == t.contentEditable
            )
              return !1;
            e = n < 0 ? p(t) : 0;
          }
        }
      }

      function p(t) {
        return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
      }
      const m = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      };

      function w(t, e) {
        let i = e ? t.left : t.right;
        return {
          left: i,
          right: i,
          top: t.top,
          bottom: t.bottom,
        };
      }

      function v(t) {
        return {
          left: 0,
          right: t.innerWidth,
          top: 0,
          bottom: t.innerHeight,
        };
      }
      class b {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        eq(t) {
          return (
            this.anchorNode == t.anchorNode &&
            this.anchorOffset == t.anchorOffset &&
            this.focusNode == t.focusNode &&
            this.focusOffset == t.focusOffset
          );
        }
        set(t) {
          (this.anchorNode = t.anchorNode),
            (this.anchorOffset = t.anchorOffset),
            (this.focusNode = t.focusNode),
            (this.focusOffset = t.focusOffset);
        }
      }
      let y,
        S = null;

      function x(t) {
        if (t.setActive) return t.setActive();
        if (S) return t.focus(S);
        let e = [];
        for (
          let i = t;
          i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument);
          i = i.parentNode
        );
        if (
          (t.focus(
            null == S
              ? {
                  get preventScroll() {
                    return (
                      (S = {
                        preventScroll: !0,
                      }),
                      !0
                    );
                  },
                }
              : void 0
          ),
          !S)
        ) {
          S = !1;
          for (let t = 0; t < e.length; ) {
            let i = e[t++],
              s = e[t++],
              n = e[t++];
            i.scrollTop != s && (i.scrollTop = s),
              i.scrollLeft != n && (i.scrollLeft = n);
          }
        }
      }

      function A(t, e, i = e) {
        let s = y || (y = document.createRange());
        return s.setEnd(t, i), s.setStart(t, e), s;
      }

      function M(t, e, i) {
        let s = {
            key: e,
            code: e,
            keyCode: i,
            which: i,
            cancelable: !0,
          },
          n = new KeyboardEvent('keydown', s);
        (n.synthetic = !0), t.dispatchEvent(n);
        let o = new KeyboardEvent('keyup', s);
        return (
          (o.synthetic = !0),
          t.dispatchEvent(o),
          n.defaultPrevented || o.defaultPrevented
        );
      }
      let k = null;

      function D() {
        if (null == k) {
          k = !1;
          let e = document.createElement('div');
          try {
            (e.contentEditable = 'plaintext-only'),
              (k = 'plaintext-only' == e.contentEditable);
          } catch (t) {}
        }
        return k;
      }
      class C {
        constructor(t, e, i = !0) {
          (this.node = t), (this.offset = e), (this.precise = i);
        }
        static before(t, e) {
          return new C(t.parentNode, f(t), e);
        }
        static after(t, e) {
          return new C(t.parentNode, f(t) + 1, e);
        }
      }
      const O = [];
      class T {
        constructor() {
          (this.parent = null), (this.dom = null), (this.dirty = 2);
        }
        get editorView() {
          if (!this.parent)
            throw new Error('Accessing view in orphan content view');
          return this.parent.editorView;
        }
        get overrideDOMText() {
          return null;
        }
        get posAtStart() {
          return this.parent ? this.parent.posBefore(this) : 0;
        }
        get posAtEnd() {
          return this.posAtStart + this.length;
        }
        posBefore(t) {
          let e = this.posAtStart;
          for (let i of this.children) {
            if (i == t) return e;
            e += i.length + i.breakAfter;
          }
          throw new RangeError('Invalid child in posBefore');
        }
        posAfter(t) {
          return this.posBefore(t) + t.length;
        }
        coordsAt(t, e) {
          return null;
        }
        sync(t) {
          var e;
          if (2 & this.dirty) {
            let i = this.dom,
              s = null;
            for (let o of this.children) {
              if (o.dirty) {
                let n = s ? s.nextSibling : i.firstChild;
                o.dom ||
                  !n ||
                  (null === (e = T.get(n)) || void 0 === e
                    ? void 0
                    : e.parent) ||
                  o.reuseDOM(n),
                  o.sync(t),
                  (o.dirty = 0);
              }
              t && t.node == i && s != o.dom && (t.written = !0),
                R(i, s, o.dom),
                (s = o.dom);
            }
            let n = s ? s.nextSibling : i.firstChild;
            for (n && t && t.node == i && (t.written = !0); n; ) n = E(n);
          } else if (1 & this.dirty)
            for (let i of this.children) i.dirty && (i.sync(t), (i.dirty = 0));
        }
        reuseDOM(t) {
          return !1;
        }
        localPosFromDOM(t, e) {
          let i;
          if (t == this.dom) i = this.dom.childNodes[e];
          else {
            let s = 0 == p(t) ? 0 : 0 == e ? -1 : 1;
            for (;;) {
              let e = t.parentNode;
              if (e == this.dom) break;
              0 == s &&
                e.firstChild != e.lastChild &&
                (s = t == e.firstChild ? -1 : 1),
                (t = e);
            }
            i = s < 0 ? t : t.nextSibling;
          }
          if (i == this.dom.firstChild) return 0;
          for (; i && !T.get(i); ) i = i.nextSibling;
          if (!i) return this.length;
          for (let s = 0, n = 0; ; s++) {
            let t = this.children[s];
            if (t.dom == i) return n;
            n += t.length + t.breakAfter;
          }
        }
        domBoundsAround(t, e, i = 0) {
          let s = -1,
            n = -1,
            o = -1,
            r = -1;
          for (let h = 0, l = i, a = i; h < this.children.length; h++) {
            let i = this.children[h],
              c = l + i.length;
            if (l < t && c > e) return i.domBoundsAround(t, e, l);
            if (
              (c >= t && -1 == s && ((s = h), (n = l)),
              l > e && i.dom.parentNode == this.dom)
            ) {
              (o = h), (r = a);
              break;
            }
            (a = c), (l = c + i.breakAfter);
          }
          return {
            from: n,
            to: r < 0 ? i + this.length : r,
            startDOM:
              (s ? this.children[s - 1].dom.nextSibling : null) ||
              this.dom.firstChild,
            endDOM:
              o < this.children.length && o >= 0 ? this.children[o].dom : null,
          };
        }
        markDirty(t = !1) {
          (this.dirty |= 2), this.markParentsDirty(t);
        }
        markParentsDirty(t) {
          for (let e = this.parent; e; e = e.parent) {
            if ((t && (e.dirty |= 2), 1 & e.dirty)) return;
            (e.dirty |= 1), (t = !1);
          }
        }
        setParent(t) {
          this.parent != t &&
            ((this.parent = t), this.dirty && this.markParentsDirty(!0));
        }
        setDOM(t) {
          this.dom && (this.dom.cmView = null),
            (this.dom = t),
            (t.cmView = this);
        }
        get rootView() {
          for (let t = this; ; ) {
            let e = t.parent;
            if (!e) return t;
            t = e;
          }
        }
        replaceChildren(t, e, i = O) {
          this.markDirty();
          for (let s = t; s < e; s++) {
            let t = this.children[s];
            t.parent == this && (t.parent = null);
          }
          this.children.splice(t, e - t, ...i);
          for (let s = 0; s < i.length; s++) i[s].setParent(this);
        }
        ignoreMutation(t) {
          return !1;
        }
        ignoreEvent(t) {
          return !1;
        }
        childCursor(t = this.length) {
          return new L(this.children, t, this.children.length);
        }
        childPos(t, e = 1) {
          return this.childCursor().findPos(t, e);
        }
        toString() {
          let t = this.constructor.name.replace('View', '');
          return (
            t +
            (this.children.length
              ? '(' + this.children.join() + ')'
              : this.length
              ? '[' + ('Text' == t ? this.text : this.length) + ']'
              : '') +
            (this.breakAfter ? '#' : '')
          );
        }
        static get(t) {
          return t.cmView;
        }
      }

      function E(t) {
        let e = t.nextSibling;
        return t.parentNode.removeChild(t), e;
      }

      function R(t, e, i) {
        let s = e ? e.nextSibling : t.firstChild;
        if (i.parentNode == t) for (; s != i; ) s = E(s);
        else t.insertBefore(i, s);
      }
      T.prototype.breakAfter = 0;
      class L {
        constructor(t, e, i) {
          (this.children = t), (this.pos = e), (this.i = i), (this.off = 0);
        }
        findPos(t, e = 1) {
          for (;;) {
            if (
              t > this.pos ||
              (t == this.pos &&
                (e > 0 || 0 == this.i || this.children[this.i - 1].breakAfter))
            )
              return (this.off = t - this.pos), this;
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter;
          }
        }
      }
      let [B, N] =
        'undefined' != typeof navigator
          ? [navigator, document]
          : [
              {
                userAgent: '',
                vendor: '',
                platform: '',
              },
              {
                documentElement: {
                  style: {},
                },
              },
            ];
      const V = /Edge\/(\d+)/.exec(B.userAgent),
        H = /MSIE \d/.test(B.userAgent),
        P = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(B.userAgent),
        W = !!(H || P || V),
        F = !W && /gecko\/(\d+)/i.test(B.userAgent),
        z = !W && /Chrome\/(\d+)/.exec(B.userAgent),
        q = 'webkitFontSmoothing' in N.documentElement.style,
        I = !W && /Apple Computer/.test(B.vendor);
      var j = {
        mac: /Mac/.test(B.platform),
        ie: W,
        ie_version: H ? N.documentMode || 6 : P ? +P[1] : V ? +V[1] : 0,
        gecko: F,
        gecko_version: F
          ? +(/Firefox\/(\d+)/.exec(B.userAgent) || [0, 0])[1]
          : 0,
        chrome: !!z,
        chrome_version: z ? +z[1] : 0,
        ios: I && (/Mobile\/\w+/.test(B.userAgent) || B.maxTouchPoints > 2),
        android: /Android\b/.test(B.userAgent),
        webkit: q,
        safari: I,
        webkit_version: q
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0,
        tabSize:
          null != N.documentElement.style.tabSize
            ? 'tab-size'
            : '-moz-tab-size',
      };
      const K = [];
      class G extends T {
        become(t) {
          return !1;
        }
        getSide() {
          return 0;
        }
      }
      G.prototype.children = K;
      class _ extends G {
        constructor(t) {
          super(), (this.text = t);
        }
        get length() {
          return this.text.length;
        }
        createDOM(t) {
          this.setDOM(t || document.createTextNode(this.text));
        }
        sync(t) {
          this.dom || this.createDOM(),
            this.dom.nodeValue != this.text &&
              (t && t.node == this.dom && (t.written = !0),
              (this.dom.nodeValue = this.text));
        }
        reuseDOM(t) {
          return 3 == t.nodeType && (this.createDOM(t), !0);
        }
        merge(t, e, i) {
          return (
            (!i ||
              (i instanceof _ && !(this.length - (e - t) + i.length > 256))) &&
            ((this.text =
              this.text.slice(0, t) + (i ? i.text : '') + this.text.slice(e)),
            this.markDirty(),
            !0)
          );
        }
        slice(t) {
          let e = new _(this.text.slice(t));
          return (this.text = this.text.slice(0, t)), e;
        }
        localPosFromDOM(t, e) {
          return t == this.dom ? e : e ? this.text.length : 0;
        }
        domAtPos(t) {
          return new C(this.dom, t);
        }
        domBoundsAround(t, e, i) {
          return {
            from: i,
            to: i + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling,
          };
        }
        coordsAt(t, e) {
          return U(this.dom, t, e);
        }
      }
      class $ extends G {
        constructor(t, e = [], i = 0) {
          super(), (this.mark = t), (this.children = e), (this.length = i);
          for (let s of e) s.setParent(this);
        }
        createDOM() {
          let t = document.createElement(this.mark.tagName);
          if (
            (this.mark.class && (t.className = this.mark.class),
            this.mark.attrs)
          )
            for (let e in this.mark.attrs)
              t.setAttribute(e, this.mark.attrs[e]);
          this.setDOM(t);
        }
        sync(t) {
          (!this.dom || 4 & this.dirty) && this.createDOM(), super.sync(t);
        }
        merge(t, e, i, s, n) {
          return (
            (!i ||
              !(
                !(i instanceof $ && i.mark.eq(this.mark)) ||
                (t && s <= 0) ||
                (e < this.length && n <= 0)
              )) &&
            (J(this, t, e, i ? i.children : K, s - 1, n - 1),
            this.markDirty(),
            !0)
          );
        }
        slice(t) {
          let e = [],
            i = 0,
            s = -1,
            n = 0;
          for (let r of this.children) {
            let o = i + r.length;
            o > t && e.push(i < t ? r.slice(t - i) : r),
              s < 0 && i >= t && (s = n),
              (i = o),
              n++;
          }
          let o = this.length - t;
          return (
            (this.length = t),
            s > -1 && this.replaceChildren(s, this.children.length),
            new $(this.mark, e, o)
          );
        }
        domAtPos(t) {
          return Q(this.dom, this.children, t);
        }
        coordsAt(t, e) {
          return tt(this, t, e);
        }
      }

      function U(t, e, i) {
        let s = t.nodeValue.length;
        e > s && (e = s);
        let n = e,
          o = e,
          r = 0;
        (0 == e && i < 0) || (e == s && i >= 0)
          ? j.chrome || j.gecko || (e ? (n--, (r = 1)) : (o++, (r = -1)))
          : i < 0
          ? n--
          : o++;
        let h = A(t, n, o).getClientRects();
        if (!h.length) return m;
        let l = h[(r ? r < 0 : i >= 0) ? 0 : h.length - 1];
        return (
          j.safari &&
            !r &&
            0 == l.width &&
            (l = Array.prototype.find.call(h, (t) => t.width) || l),
          r ? w(l, r < 0) : l
        );
      }
      class X extends G {
        constructor(t, e, i) {
          super(), (this.widget = t), (this.length = e), (this.side = i);
        }
        static create(t, e, i) {
          return new (t.customView || X)(t, e, i);
        }
        slice(t) {
          let e = X.create(this.widget, this.length - t, this.side);
          return (this.length -= t), e;
        }
        sync() {
          (this.dom && this.widget.updateDOM(this.dom)) ||
            (this.setDOM(this.widget.toDOM(this.editorView)),
            (this.dom.contentEditable = 'false'));
        }
        getSide() {
          return this.side;
        }
        merge(t, e, i, s, n) {
          return (
            !(
              i &&
              (!(i instanceof X && this.widget.compare(i.widget)) ||
                (t > 0 && s <= 0) ||
                (e < this.length && n <= 0))
            ) &&
            ((this.length = t + (i ? i.length : 0) + (this.length - e)), !0)
          );
        }
        become(t) {
          return (
            t.length == this.length &&
            t instanceof X &&
            t.side == this.side &&
            this.widget.constructor == t.widget.constructor &&
            (this.widget.eq(t.widget) || this.markDirty(!0),
            (this.widget = t.widget),
            !0)
          );
        }
        ignoreMutation() {
          return !0;
        }
        ignoreEvent(t) {
          return this.widget.ignoreEvent(t);
        }
        get overrideDOMText() {
          if (0 == this.length) return n.a.empty;
          let t = this;
          for (; t.parent; ) t = t.parent;
          let e = t.editorView,
            i = e && e.state.doc,
            s = this.posAtStart;
          return i ? i.slice(s, s + this.length) : n.a.empty;
        }
        domAtPos(t) {
          return 0 == t
            ? C.before(this.dom)
            : C.after(this.dom, t == this.length);
        }
        domBoundsAround() {
          return null;
        }
        coordsAt(t, e) {
          let i = this.dom.getClientRects(),
            s = null;
          if (!i.length) return m;
          for (
            let n = t > 0 ? i.length - 1 : 0;
            (s = i[n]),
              !(t > 0 ? 0 == n : n == i.length - 1 || s.top < s.bottom);
            n += t > 0 ? -1 : 1
          );
          return (0 == t && e > 0) || (t == this.length && e <= 0)
            ? s
            : w(s, 0 == t);
        }
      }
      class Y extends X {
        domAtPos(t) {
          return new C(this.widget.text, t);
        }
        sync() {
          this.dom || this.setDOM(this.widget.toDOM());
        }
        localPosFromDOM(t, e) {
          return e
            ? 3 == t.nodeType
              ? Math.min(e, this.length)
              : this.length
            : 0;
        }
        ignoreMutation() {
          return !1;
        }
        get overrideDOMText() {
          return null;
        }
        coordsAt(t, e) {
          return U(this.widget.text, t, e);
        }
      }

      function J(t, e, i, s, n, o) {
        let r = t.childCursor(),
          { i: h, off: l } = r.findPos(i, 1),
          { i: a, off: c } = r.findPos(e, -1),
          d = e - i;
        for (let f of s) d += f.length;
        t.length += d;
        let { children: u } = t;
        if (a == h && c) {
          let t = u[a];
          if (1 == s.length && t.merge(c, l, s[0], n, o)) return;
          if (0 == s.length) return void t.merge(c, l, null, n, o);
          let e = t.slice(l);
          e.merge(0, 0, s[s.length - 1], 0, o)
            ? (s[s.length - 1] = e)
            : s.push(e),
            h++,
            (o = l = 0);
        }
        if (l) {
          let t = u[h];
          s.length && t.merge(0, l, s[s.length - 1], 0, o)
            ? (s.pop(), (o = s.length ? 0 : n))
            : t.merge(0, l, null, 0, 0);
        } else
          h < u.length &&
            s.length &&
            u[h].merge(0, 0, s[s.length - 1], 0, o) &&
            (s.pop(), (o = s.length ? 0 : n));
        if (c) {
          let t = u[a];
          s.length && t.merge(c, t.length, s[0], n, 0)
            ? (s.shift(), (n = s.length ? 0 : o))
            : t.merge(c, t.length, null, 0, 0),
            a++;
        } else if (a && s.length) {
          let t = u[a - 1];
          t.merge(t.length, t.length, s[0], n, 0) &&
            (s.shift(), (n = s.length ? 0 : o));
        }
        for (; a < h && s.length && u[h - 1].become(s[s.length - 1]); )
          s.pop(), h--, (o = s.length ? 0 : n);
        for (; a < h && s.length && u[a].become(s[0]); )
          s.shift(), a++, (n = s.length ? 0 : o);
        !s.length &&
          a &&
          h < u.length &&
          u[h].merge(0, 0, u[a - 1], n, o) &&
          a--,
          (s.length || a != h) && t.replaceChildren(a, h, s);
      }

      function Q(t, e, i) {
        let s = 0;
        for (let n = 0; s < e.length; s++) {
          let o = e[s],
            r = n + o.length;
          if (!(r == n && o.getSide() <= 0)) {
            if (i > n && i < r && o.dom.parentNode == t)
              return o.domAtPos(i - n);
            if (i <= n) break;
            n = r;
          }
        }
        for (; s > 0; s--) {
          let i = e[s - 1].dom;
          if (i.parentNode == t) return C.after(i);
        }
        return new C(t, 0);
      }

      function Z(t, e, i) {
        let s,
          { children: n } = t;
        i > 0 &&
        e instanceof $ &&
        n.length &&
        (s = n[n.length - 1]) instanceof $ &&
        s.mark.eq(e.mark)
          ? Z(s, e.children[0], i - 1)
          : (n.push(e), e.setParent(t)),
          (t.length += e.length);
      }

      function tt(t, e, i) {
        for (let o = 0, r = 0; r < t.children.length; r++) {
          let s,
            n = t.children[r],
            h = o + n.length;
          if (
            (i <= 0 || h == t.length || n.getSide() > 0 ? h >= e : h > e) &&
            (e < h ||
              r + 1 == t.children.length ||
              (s = t.children[r + 1]).length ||
              s.getSide() > 0)
          ) {
            let t = 0;
            if (h == o) {
              if (n.getSide() <= 0) continue;
              t = i = -n.getSide();
            }
            let s = n.coordsAt(e - o, i);
            return t && s ? w(s, i < 0) : s;
          }
          o = h;
        }
        let s = t.dom.lastChild;
        if (!s) return t.dom.getBoundingClientRect();
        let n = d(s);
        return n[n.length - 1];
      }

      function et(t, e) {
        for (let i in t)
          'class' == i && e.class
            ? (e.class += ' ' + t.class)
            : 'style' == i && e.style
            ? (e.style += ';' + t.style)
            : (e[i] = t[i]);
        return e;
      }

      function it(t, e) {
        if (t == e) return !0;
        if (!t || !e) return !1;
        let i = Object.keys(t),
          s = Object.keys(e);
        if (i.length != s.length) return !1;
        for (let n of i) if (-1 == s.indexOf(n) || t[n] !== e[n]) return !1;
        return !0;
      }

      function st(t, e, i) {
        if (e) for (let s in e) (i && s in i) || t.removeAttribute(s);
        if (i) for (let s in i) (e && e[s] == i[s]) || t.setAttribute(s, i[s]);
      }
      class nt {
        eq(t) {
          return !1;
        }
        updateDOM(t) {
          return !1;
        }
        compare(t) {
          return this == t || (this.constructor == t.constructor && this.eq(t));
        }
        get estimatedHeight() {
          return -1;
        }
        ignoreEvent(t) {
          return !0;
        }
        get customView() {
          return null;
        }
      }
      var ot = (function (t) {
        return (
          (t[(t.Text = 0)] = 'Text'),
          (t[(t.WidgetBefore = 1)] = 'WidgetBefore'),
          (t[(t.WidgetAfter = 2)] = 'WidgetAfter'),
          (t[(t.WidgetRange = 3)] = 'WidgetRange'),
          t
        );
      })(ot || (ot = {}));
      class rt extends r.c {
        constructor(t, e, i, s) {
          super(),
            (this.startSide = t),
            (this.endSide = e),
            (this.widget = i),
            (this.spec = s);
        }
        get heightRelevant() {
          return !1;
        }
        static mark(t) {
          return new ht(t);
        }
        static widget(t) {
          let e = t.side || 0;
          return (
            t.block && (e += 200000001 * (e > 0 ? 1 : -1)),
            new at(t, e, e, !!t.block, t.widget || null, !1)
          );
        }
        static replace(t) {
          let e = !!t.block,
            { start: i, end: s } = ct(t);
          return new at(
            t,
            e ? -2e8 * (i ? 2 : 1) : 1e8 * (i ? -1 : 1),
            e ? 2e8 * (s ? 2 : 1) : 1e8 * (s ? 1 : -1),
            e,
            t.widget || null,
            !0
          );
        }
        static line(t) {
          return new lt(t);
        }
        static set(t, e = !1) {
          return r.a.of(t, e);
        }
        hasHeight() {
          return !!this.widget && this.widget.estimatedHeight > -1;
        }
      }
      rt.none = r.a.empty;
      class ht extends rt {
        constructor(t) {
          let { start: e, end: i } = ct(t);
          super(1e8 * (e ? -1 : 1), 1e8 * (i ? 1 : -1), null, t),
            (this.tagName = t.tagName || 'span'),
            (this.class = t.class || ''),
            (this.attrs = t.attributes || null);
        }
        eq(t) {
          return (
            this == t ||
            (t instanceof ht &&
              this.tagName == t.tagName &&
              this.class == t.class &&
              it(this.attrs, t.attrs))
          );
        }
        range(t, e = t) {
          if (t >= e) throw new RangeError('Mark decorations may not be empty');
          return super.range(t, e);
        }
      }
      ht.prototype.point = !1;
      class lt extends rt {
        constructor(t) {
          super(-1e8, -1e8, null, t);
        }
        eq(t) {
          return t instanceof lt && it(this.spec.attributes, t.spec.attributes);
        }
        range(t, e = t) {
          if (e != t)
            throw new RangeError('Line decoration ranges must be zero-length');
          return super.range(t, e);
        }
      }
      (lt.prototype.mapMode = s.i.TrackBefore), (lt.prototype.point = !0);
      class at extends rt {
        constructor(t, e, i, n, o, r) {
          super(e, i, o, t),
            (this.block = n),
            (this.isReplace = r),
            (this.mapMode = n
              ? e < 0
                ? s.i.TrackBefore
                : s.i.TrackAfter
              : s.i.TrackDel);
        }
        get type() {
          return this.startSide < this.endSide
            ? ot.WidgetRange
            : this.startSide < 0
            ? ot.WidgetBefore
            : ot.WidgetAfter;
        }
        get heightRelevant() {
          return (
            this.block || (!!this.widget && this.widget.estimatedHeight >= 5)
          );
        }
        eq(t) {
          return (
            t instanceof at &&
            ((e = this.widget),
            (i = t.widget),
            e == i || !!(e && i && e.compare(i))) &&
            this.block == t.block &&
            this.startSide == t.startSide &&
            this.endSide == t.endSide
          );
          var e, i;
        }
        range(t, e = t) {
          if (
            this.isReplace &&
            (t > e || (t == e && this.startSide > 0 && this.endSide < 0))
          )
            throw new RangeError('Invalid range for replacement decoration');
          if (!this.isReplace && e != t)
            throw new RangeError(
              'Widget decorations can only have zero-length ranges'
            );
          return super.range(t, e);
        }
      }

      function ct(t) {
        let { inclusiveStart: e, inclusiveEnd: i } = t;
        return (
          null == e && (e = t.inclusive),
          null == i && (i = t.inclusive),
          {
            start: e || !1,
            end: i || !1,
          }
        );
      }

      function dt(t, e, i, s = 0) {
        let n = i.length - 1;
        n >= 0 && i[n] + s > t ? (i[n] = Math.max(i[n], e)) : i.push(t, e);
      }
      at.prototype.point = !0;
      class ut extends T {
        constructor() {
          super(...arguments),
            (this.children = []),
            (this.length = 0),
            (this.prevAttrs = void 0),
            (this.attrs = null),
            (this.breakAfter = 0);
        }
        merge(t, e, i, s, n, o) {
          if (i) {
            if (!(i instanceof ut)) return !1;
            this.dom || i.transferDOM(this);
          }
          return (
            s && this.setDeco(i ? i.attrs : null),
            J(this, t, e, i ? i.children : ft, n, o),
            !0
          );
        }
        split(t) {
          let e = new ut();
          if (((e.breakAfter = this.breakAfter), 0 == this.length)) return e;
          let { i: i, off: s } = this.childPos(t);
          s &&
            (e.append(this.children[i].slice(s), 0),
            this.children[i].merge(s, this.children[i].length, null, 0, 0),
            i++);
          for (let n = i; n < this.children.length; n++)
            e.append(this.children[n], 0);
          for (; i > 0 && 0 == this.children[i - 1].length; )
            (this.children[i - 1].parent = null), i--;
          return (
            (this.children.length = i), this.markDirty(), (this.length = t), e
          );
        }
        transferDOM(t) {
          this.dom &&
            (t.setDOM(this.dom),
            (t.prevAttrs =
              void 0 === this.prevAttrs ? this.attrs : this.prevAttrs),
            (this.prevAttrs = void 0),
            (this.dom = null));
        }
        setDeco(t) {
          it(this.attrs, t) ||
            (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
            (this.attrs = t));
        }
        append(t, e) {
          Z(this, t, e);
        }
        addLineDeco(t) {
          let e = t.spec.attributes;
          e && (this.attrs = et(e, this.attrs || {}));
        }
        domAtPos(t) {
          return Q(this.dom, this.children, t);
        }
        sync(t) {
          (!this.dom || 4 & this.dirty) &&
            (this.setDOM(document.createElement('div')),
            (this.dom.className = 'cm-line'),
            (this.prevAttrs = this.attrs ? null : void 0)),
            void 0 !== this.prevAttrs &&
              (st(this.dom, this.prevAttrs, this.attrs),
              this.dom.classList.add('cm-line'),
              (this.prevAttrs = void 0)),
            super.sync(t);
          let e = this.dom.lastChild;
          for (; e && T.get(e) instanceof $; ) e = e.lastChild;
          if (
            !e ||
            ('BR' != e.nodeName &&
              T.get(e) instanceof X &&
              (!j.ios || !this.children.some((t) => t instanceof _)))
          ) {
            let t = document.createElement('BR');
            (t.cmIgnore = !0), this.dom.appendChild(t);
          }
        }
        measureTextSize() {
          if (0 == this.children.length || this.length > 20) return null;
          let t = 0;
          for (let e of this.children) {
            if (!(e instanceof _)) return null;
            let i = d(e.dom);
            if (1 != i.length) return null;
            t += i[0].width;
          }
          return {
            lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: t / this.length,
          };
        }
        coordsAt(t, e) {
          return tt(this, t, e);
        }
        match(t) {
          return !1;
        }
        get type() {
          return ot.Text;
        }
        static find(t, e) {
          for (let i = 0, s = 0; ; i++) {
            let n = t.children[i],
              o = s + n.length;
            if (o >= e) {
              if (n instanceof ut) return n;
              if (n.length) return null;
            }
            s = o + n.breakAfter;
          }
        }
      }
      const ft = [];
      class gt extends T {
        constructor(t, e, i) {
          super(),
            (this.widget = t),
            (this.length = e),
            (this.type = i),
            (this.breakAfter = 0);
        }
        merge(t, e, i, s, n, o) {
          return (
            !(
              i &&
              (!(i instanceof gt && this.widget.compare(i.widget)) ||
                (t > 0 && n <= 0) ||
                (e < this.length && o <= 0))
            ) &&
            ((this.length = t + (i ? i.length : 0) + (this.length - e)), !0)
          );
        }
        domAtPos(t) {
          return 0 == t
            ? C.before(this.dom)
            : C.after(this.dom, t == this.length);
        }
        split(t) {
          let e = this.length - t;
          return (this.length = t), new gt(this.widget, e, this.type);
        }
        get children() {
          return ft;
        }
        sync() {
          (this.dom && this.widget.updateDOM(this.dom)) ||
            (this.setDOM(this.widget.toDOM(this.editorView)),
            (this.dom.contentEditable = 'false'));
        }
        get overrideDOMText() {
          return this.parent
            ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
            : n.a.empty;
        }
        domBoundsAround() {
          return null;
        }
        match(t) {
          return (
            t instanceof gt &&
            t.type == this.type &&
            t.widget.constructor == this.widget.constructor &&
            (t.widget.eq(this.widget) || this.markDirty(!0),
            (this.widget = t.widget),
            (this.length = t.length),
            (this.breakAfter = t.breakAfter),
            !0)
          );
        }
        ignoreMutation() {
          return !0;
        }
        ignoreEvent(t) {
          return this.widget.ignoreEvent(t);
        }
      }
      class pt {
        constructor(t, e, i) {
          (this.doc = t),
            (this.pos = e),
            (this.end = i),
            (this.content = []),
            (this.curLine = null),
            (this.breakAtStart = 0),
            (this.openStart = -1),
            (this.openEnd = -1),
            (this.text = ''),
            (this.textOff = 0),
            (this.cursor = t.iter()),
            (this.skip = e);
        }
        posCovered() {
          if (0 == this.content.length)
            return (
              !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos
            );
          let t = this.content[this.content.length - 1];
          return (
            !t.breakAfter && !(t instanceof gt && t.type == ot.WidgetBefore)
          );
        }
        getLine() {
          return (
            this.curLine || this.content.push((this.curLine = new ut())),
            this.curLine
          );
        }
        addWidget(t) {
          (this.curLine = null), this.content.push(t);
        }
        finish() {
          this.posCovered() || this.getLine();
        }
        wrapMarks(t, e) {
          for (let i of e) t = new $(i, [t], t.length);
          return t;
        }
        buildText(t, e, i) {
          for (; t > 0; ) {
            if (this.textOff == this.text.length) {
              let {
                value: e,
                lineBreak: i,
                done: s,
              } = this.cursor.next(this.skip);
              if (((this.skip = 0), s))
                throw new Error(
                  'Ran out of text content when drawing inline views'
                );
              if (i) {
                this.posCovered() || this.getLine(),
                  this.content.length
                    ? (this.content[this.content.length - 1].breakAfter = 1)
                    : (this.breakAtStart = 1),
                  (this.curLine = null),
                  t--;
                continue;
              }
              (this.text = e), (this.textOff = 0);
            }
            let s = Math.min(this.text.length - this.textOff, t, 512);
            this.getLine().append(
              this.wrapMarks(
                new _(this.text.slice(this.textOff, this.textOff + s)),
                e
              ),
              i
            ),
              (this.textOff += s),
              (t -= s),
              (i = 0);
          }
        }
        span(t, e, i, s) {
          this.buildText(e - t, i, s),
            (this.pos = e),
            this.openStart < 0 && (this.openStart = s);
        }
        point(t, e, i, s, n) {
          let o = e - t;
          if (i instanceof at)
            if (i.block) {
              let { type: t } = i;
              t != ot.WidgetAfter || this.posCovered() || this.getLine(),
                this.addWidget(new gt(i.widget || new mt('div'), o, t));
            } else {
              let t = this.wrapMarks(
                X.create(i.widget || new mt('span'), o, i.startSide),
                s
              );
              this.getLine().append(t, n);
            }
          else
            this.doc.lineAt(this.pos).from == this.pos &&
              this.getLine().addLineDeco(i);
          o &&
            (this.textOff + o <= this.text.length
              ? (this.textOff += o)
              : ((this.skip += o - (this.text.length - this.textOff)),
                (this.text = ''),
                (this.textOff = 0)),
            (this.pos = e)),
            this.openStart < 0 && (this.openStart = n);
        }
        static build(t, e, i, s) {
          let n = new pt(t, e, i);
          return (
            (n.openEnd = r.a.spans(s, e, i, n)),
            n.openStart < 0 && (n.openStart = n.openEnd),
            n.finish(),
            n
          );
        }
      }
      class mt extends nt {
        constructor(t) {
          super(), (this.tag = t);
        }
        eq(t) {
          return t.tag == this.tag;
        }
        toDOM() {
          return document.createElement(this.tag);
        }
        updateDOM(t) {
          return t.nodeName.toLowerCase() == this.tag;
        }
      }
      const wt = [],
        vt = s.h.define(),
        bt = s.h.define(),
        yt = s.h.define(),
        St = s.h.define(),
        xt = s.h.define(),
        At = s.h.define();

      function Mt(t, e, i) {
        let s = t.facet(St);
        s.length
          ? s[0](e)
          : window.onerror
          ? window.onerror(String(e), i, void 0, void 0, e)
          : i
          ? console.error(i + ':', e)
          : console.error(e);
      }
      const kt = s.h.define({
        combine: (t) => !t.length || t[0],
      });
      class Dt {
        constructor(t, e) {
          (this.field = t), (this.get = e);
        }
      }
      class Ct {
        from(t) {
          return new Dt(this, t);
        }
        static define() {
          return new Ct();
        }
      }
      (Ct.decorations = Ct.define()),
        (Ct.atomicRanges = Ct.define()),
        (Ct.scrollMargins = Ct.define());
      let Ot = 0;
      const Tt = s.h.define();
      class Et {
        constructor(t, e, i) {
          (this.id = t),
            (this.create = e),
            (this.fields = i),
            (this.extension = Tt.of(this));
        }
        static define(t, e) {
          let { eventHandlers: i, provide: s, decorations: n } = e || {},
            o = [];
          if (s) for (let r of Array.isArray(s) ? s : [s]) o.push(r);
          return (
            i &&
              o.push(
                Rt.from((t) => ({
                  plugin: t,
                  handlers: i,
                }))
              ),
            n && o.push(Ct.decorations.from(n)),
            new Et(Ot++, t, o)
          );
        }
        static fromClass(t, e) {
          return Et.define((e) => new t(e), e);
        }
      }
      const Rt = Ct.define();
      class Lt {
        constructor(t) {
          (this.spec = t), (this.mustUpdate = null), (this.value = null);
        }
        takeField(t, e) {
          for (let { field: i, get: s } of this.spec.fields)
            i == t && e.push(s(this.value));
        }
        update(t) {
          if (this.value) {
            if (this.mustUpdate) {
              let t = this.mustUpdate;
              if (((this.mustUpdate = null), !this.value.update)) return this;
              try {
                this.value.update(t);
              } catch (e) {
                if (
                  (Mt(t.state, e, 'CodeMirror plugin crashed'),
                  this.value.destroy)
                )
                  try {
                    this.value.destroy();
                  } catch (i) {}
                return Lt.dummy;
              }
            }
          } else
            try {
              this.value = this.spec.create(t);
            } catch (e) {
              return Mt(t.state, e, 'CodeMirror plugin crashed'), Lt.dummy;
            }
          return this;
        }
        destroy(t) {
          var e;
          if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy)
            try {
              this.value.destroy();
            } catch (i) {
              Mt(t.state, i, 'CodeMirror plugin crashed');
            }
        }
      }
      Lt.dummy = new Lt(Et.define(() => ({})));
      const Bt = s.h.define({
          combine: (t) => t.reduce((t, e) => et(e, t), {}),
        }),
        Nt = s.h.define({
          combine: (t) => t.reduce((t, e) => et(e, t), {}),
        }),
        Vt = s.h.define(),
        Ht = s.h.define();
      class Pt {
        constructor(t, e, i, s) {
          (this.fromA = t), (this.toA = e), (this.fromB = i), (this.toB = s);
        }
        join(t) {
          return new Pt(
            Math.min(this.fromA, t.fromA),
            Math.max(this.toA, t.toA),
            Math.min(this.fromB, t.fromB),
            Math.max(this.toB, t.toB)
          );
        }
        addToSet(t) {
          let e = t.length,
            i = this;
          for (; e > 0; e--) {
            let s = t[e - 1];
            if (!(s.fromA > i.toA)) {
              if (s.toA < i.fromA) break;
              (i = i.join(s)), t.splice(e - 1, 1);
            }
          }
          return t.splice(e, 0, i), t;
        }
        static extendWithRanges(t, e) {
          if (0 == e.length) return t;
          let i = [];
          for (let s = 0, n = 0, o = 0, r = 0; ; s++) {
            let h = s == t.length ? null : t[s],
              l = o - r,
              a = h ? h.fromB : 1e9;
            for (; n < e.length && e[n] < a; ) {
              let t = e[n],
                s = e[n + 1],
                o = Math.max(r, t),
                h = Math.min(a, s);
              if ((o <= h && new Pt(o + l, h + l, o, h).addToSet(i), s > a))
                break;
              n += 2;
            }
            if (!h) return i;
            new Pt(h.fromA, h.toA, h.fromB, h.toB).addToSet(i),
              (o = h.toA),
              (r = h.toB);
          }
        }
      }
      class Wt {
        constructor(t, e, i = wt) {
          (this.view = t),
            (this.state = e),
            (this.transactions = i),
            (this.flags = 0),
            (this.startState = t.state),
            (this.changes = s.c.empty(this.startState.doc.length));
          for (let s of i) this.changes = this.changes.compose(s.changes);
          let n = [];
          this.changes.iterChangedRanges((t, e, i, s) =>
            n.push(new Pt(t, e, i, s))
          ),
            (this.changedRanges = n);
          let o = t.hasFocus;
          o != t.inputState.notifiedFocused &&
            ((t.inputState.notifiedFocused = o), (this.flags |= 1)),
            this.docChanged && (this.flags |= 2);
        }
        get viewportChanged() {
          return (4 & this.flags) > 0;
        }
        get heightChanged() {
          return (2 & this.flags) > 0;
        }
        get geometryChanged() {
          return this.docChanged || (18 & this.flags) > 0;
        }
        get focusChanged() {
          return (1 & this.flags) > 0;
        }
        get docChanged() {
          return this.transactions.some((t) => t.docChanged);
        }
        get selectionSet() {
          return this.transactions.some((t) => t.selection);
        }
        get empty() {
          return 0 == this.flags && 0 == this.transactions.length;
        }
      }
      class Ft extends T {
        constructor(t) {
          super(),
            (this.view = t),
            (this.compositionDeco = rt.none),
            (this.decorations = []),
            (this.minWidth = 0),
            (this.minWidthFrom = 0),
            (this.minWidthTo = 0),
            (this.impreciseAnchor = null),
            (this.impreciseHead = null),
            this.setDOM(t.contentDOM),
            (this.children = [new ut()]),
            this.children[0].setParent(this),
            this.updateInner(
              [new Pt(0, 0, 0, t.state.doc.length)],
              this.updateDeco(),
              0
            );
        }
        get root() {
          return this.view.root;
        }
        get editorView() {
          return this.view;
        }
        get length() {
          return this.view.state.doc.length;
        }
        update(t) {
          let e = t.changedRanges;
          this.minWidth > 0 &&
            e.length &&
            (e.every(
              ({ fromA: t, toA: e }) =>
                e < this.minWidthFrom || t > this.minWidthTo
            )
              ? ((this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1)),
                (this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)))
              : (this.minWidth = 0)),
            this.view.inputState.composing < 0
              ? (this.compositionDeco = rt.none)
              : t.transactions.length &&
                (this.compositionDeco = (function (t, e) {
                  let i = t.observer.selectionRange,
                    s = i.focusNode && It(i.focusNode, i.focusOffset, 0);
                  if (!s) return rt.none;
                  let n,
                    o,
                    r = t.docView.nearest(s),
                    h = s;
                  if (r instanceof G) {
                    for (; r.parent instanceof G; ) r = r.parent;
                    (n = r.posAtStart), (o = n + r.length), (h = r.dom);
                  } else {
                    if (!(r instanceof ut)) return rt.none;
                    {
                      for (; h.parentNode != r.dom; ) h = h.parentNode;
                      let t = h.previousSibling;
                      for (; t && !T.get(t); ) t = t.previousSibling;
                      n = o = t ? T.get(t).posAtEnd : r.posAtStart;
                    }
                  }
                  let l = e.mapPos(n, 1),
                    a = Math.max(l, e.mapPos(o, -1)),
                    c = s.nodeValue,
                    { state: d } = t;
                  if (a - l < c.length)
                    if (
                      d.sliceDoc(l, Math.min(d.doc.length, l + c.length)) == c
                    )
                      a = l + c.length;
                    else {
                      if (d.sliceDoc(Math.max(0, a - c.length), a) != c)
                        return rt.none;
                      l = a - c.length;
                    }
                  else if (d.sliceDoc(l, a) != c) return rt.none;
                  return rt.set(
                    rt
                      .replace({
                        widget: new qt(h, s),
                      })
                      .range(l, a)
                  );
                })(this.view, t.changes));
          let i =
              (j.ie || j.chrome) &&
              !this.compositionDeco.size &&
              t &&
              t.state.doc.lines != t.startState.doc.lines,
            s = this.decorations,
            n = this.updateDeco(),
            o = (function (t, e, i) {
              let s = new jt();
              return r.a.compare(t, e, i, s), s.changes;
            })(s, n, t.changes);
          e = Pt.extendWithRanges(e, o);
          let h = t.transactions.some((t) => t.isUserEvent('select.pointer'));
          return 0 == this.dirty &&
            0 == e.length &&
            !(12 & t.flags) &&
            t.state.selection.main.from >= this.view.viewport.from &&
            t.state.selection.main.to <= this.view.viewport.to
            ? (this.updateSelection(i, h), !1)
            : (this.updateInner(e, n, t.startState.doc.length, i, h), !0);
        }
        updateInner(t, e, i, s = !1, n = !1) {
          this.updateChildren(t, e, i);
          let { observer: o } = this.view;
          o.ignore(() => {
            (this.dom.style.height = this.view.viewState.domHeight + 'px'),
              (this.dom.style.minWidth = this.minWidth
                ? this.minWidth + 'px'
                : '');
            let t =
              j.chrome || j.ios
                ? {
                    node: o.selectionRange.focusNode,
                    written: !1,
                  }
                : void 0;
            this.sync(t),
              (this.dirty = 0),
              t &&
                (t.written || o.selectionRange.focusNode != t.node) &&
                (s = !0),
              this.updateSelection(s, n),
              (this.dom.style.height = '');
          });
        }
        updateChildren(t, e, i) {
          let s = this.childCursor(i);
          for (let n = t.length - 1; ; n--) {
            let i = n >= 0 ? t[n] : null;
            if (!i) break;
            let { fromA: o, toA: r, fromB: h, toB: l } = i,
              {
                content: a,
                breakAtStart: c,
                openStart: d,
                openEnd: u,
              } = pt.build(this.view.state.doc, h, l, e),
              { i: f, off: g } = s.findPos(r, 1),
              { i: p, off: m } = s.findPos(o, -1);
            this.replaceRange(p, m, f, g, a, c, d, u);
          }
        }
        replaceRange(t, e, i, s, n, o, r, h) {
          let l = this.children[t],
            a = n.length ? n[n.length - 1] : null,
            c = a ? a.breakAfter : o;
          if (
            t == i &&
            !o &&
            !c &&
            n.length < 2 &&
            l.merge(e, s, n.length ? a : null, 0 == e, r, h)
          )
            return;
          let d = this.children[i];
          for (
            s < d.length
              ? (t == i && ((d = d.split(s)), (s = 0)),
                !c && a && d.merge(0, s, a, !0, 0, h)
                  ? (n[n.length - 1] = d)
                  : (s && d.merge(0, s, null, !1, 0, h), n.push(d)))
              : d.breakAfter && (a ? (a.breakAfter = 1) : (o = 1)),
              i++,
              l.breakAfter = o,
              e > 0 &&
                (!o && n.length && l.merge(e, l.length, n[0], !1, r, 0)
                  ? (l.breakAfter = n.shift().breakAfter)
                  : (e < l.length ||
                      (l.children.length &&
                        0 == l.children[l.children.length - 1].length)) &&
                    l.merge(e, l.length, null, !1, r, 0),
                t++);
            t < i && n.length;

          )
            if (this.children[i - 1].match(n[n.length - 1])) i--, n.pop();
            else {
              if (!this.children[t].match(n[0])) break;
              t++, n.shift();
            }
          (t < i || n.length) && this.replaceChildren(t, i, n);
        }
        updateSelection(t = !1, e = !1) {
          if (
            (!e && !this.mayControlSelection()) ||
            (j.ios && this.view.inputState.rapidCompositionStart)
          )
            return;
          let i = this.view.state.selection.main,
            s = this.domAtPos(i.anchor),
            n = i.empty ? s : this.domAtPos(i.head);
          if (
            j.gecko &&
            i.empty &&
            1 == (o = s).node.nodeType &&
            o.node.firstChild &&
            (0 == o.offset ||
              'false' == o.node.childNodes[o.offset - 1].contentEditable) &&
            (o.offset == o.node.childNodes.length ||
              'false' == o.node.childNodes[o.offset].contentEditable)
          ) {
            let e = document.createTextNode('');
            this.view.observer.ignore(() =>
              s.node.insertBefore(e, s.node.childNodes[s.offset] || null)
            ),
              (s = n = new C(e, 0)),
              (t = !0);
          }
          var o;
          let r = this.view.observer.selectionRange;
          (!t &&
            r.focusNode &&
            u(s.node, s.offset, r.anchorNode, r.anchorOffset) &&
            u(n.node, n.offset, r.focusNode, r.focusOffset)) ||
            (this.view.observer.ignore(() => {
              let t = l(this.root);
              if (i.empty) {
                if (j.gecko) {
                  let t =
                    ((e = s.node),
                    (o = s.offset),
                    1 != e.nodeType
                      ? 0
                      : (o && 'false' == e.childNodes[o - 1].contentEditable
                          ? 1
                          : 0) |
                        (o < e.childNodes.length &&
                        'false' == e.childNodes[o].contentEditable
                          ? 2
                          : 0));
                  if (t && 3 != t) {
                    let e = It(s.node, s.offset, 1 == t ? 1 : -1);
                    e && (s = new C(e, 1 == t ? 0 : e.nodeValue.length));
                  }
                }
                t.collapse(s.node, s.offset),
                  null != i.bidiLevel &&
                    null != r.cursorBidiLevel &&
                    (r.cursorBidiLevel = i.bidiLevel);
              } else if (t.extend)
                t.collapse(s.node, s.offset), t.extend(n.node, n.offset);
              else {
                let e = document.createRange();
                i.anchor > i.head && ([s, n] = [n, s]),
                  e.setEnd(n.node, n.offset),
                  e.setStart(s.node, s.offset),
                  t.removeAllRanges(),
                  t.addRange(e);
              }
              var e, o;
            }),
            this.view.observer.setSelectionRange(s, n)),
            (this.impreciseAnchor = s.precise
              ? null
              : new C(r.anchorNode, r.anchorOffset)),
            (this.impreciseHead = n.precise
              ? null
              : new C(r.focusNode, r.focusOffset));
        }
        enforceCursorAssoc() {
          if (this.view.composing) return;
          let t = this.view.state.selection.main,
            e = l(this.root);
          if (!t.empty || !t.assoc || !e.modify) return;
          let i = ut.find(this, t.head);
          if (!i) return;
          let s = i.posAtStart;
          if (t.head == s || t.head == s + i.length) return;
          let n = this.coordsAt(t.head, -1),
            o = this.coordsAt(t.head, 1);
          if (!n || !o || n.bottom > o.top) return;
          let r = this.domAtPos(t.head + t.assoc);
          e.collapse(r.node, r.offset),
            e.modify(
              'move',
              t.assoc < 0 ? 'forward' : 'backward',
              'lineboundary'
            );
        }
        mayControlSelection() {
          return this.view.state.facet(kt)
            ? this.root.activeElement == this.dom
            : c(this.dom, this.view.observer.selectionRange);
        }
        nearest(t) {
          for (let e = t; e; ) {
            let t = T.get(e);
            if (t && t.rootView == this) return t;
            e = e.parentNode;
          }
          return null;
        }
        posFromDOM(t, e) {
          let i = this.nearest(t);
          if (!i)
            throw new RangeError(
              'Trying to find position for a DOM position outside of the document'
            );
          return i.localPosFromDOM(t, e) + i.posAtStart;
        }
        domAtPos(t) {
          let { i: e, off: i } = this.childCursor().findPos(t, -1);
          for (; e < this.children.length - 1; ) {
            let t = this.children[e];
            if (i < t.length || t instanceof ut) break;
            e++, (i = 0);
          }
          return this.children[e].domAtPos(i);
        }
        coordsAt(t, e) {
          for (let i = this.length, s = this.children.length - 1; ; s--) {
            let n = this.children[s],
              o = i - n.breakAfter - n.length;
            if (
              t > o ||
              (t == o &&
                n.type != ot.WidgetBefore &&
                n.type != ot.WidgetAfter &&
                (!s ||
                  2 == e ||
                  this.children[s - 1].breakAfter ||
                  (this.children[s - 1].type == ot.WidgetBefore && e > -2)))
            )
              return n.coordsAt(t - o, e);
            i = o;
          }
        }
        measureVisibleLineHeights() {
          let t = [],
            { from: e, to: i } = this.view.viewState.viewport,
            s = Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
          for (let n = 0, o = 0; o < this.children.length; o++) {
            let r = this.children[o],
              h = n + r.length;
            if (h > i) break;
            if (n >= e) {
              t.push(r.dom.getBoundingClientRect().height);
              let e = r.dom.scrollWidth;
              e > s &&
                ((this.minWidth = s = e),
                (this.minWidthFrom = n),
                (this.minWidthTo = h));
            }
            n = h + r.breakAfter;
          }
          return t;
        }
        measureTextSize() {
          for (let s of this.children)
            if (s instanceof ut) {
              let t = s.measureTextSize();
              if (t) return t;
            }
          let t,
            e,
            i = document.createElement('div');
          return (
            (i.className = 'cm-line'),
            (i.textContent = 'abc def ghi jkl mno pqr stu'),
            this.view.observer.ignore(() => {
              this.dom.appendChild(i);
              let s = d(i.firstChild)[0];
              (t = i.getBoundingClientRect().height),
                (e = s ? s.width / 27 : 7),
                i.remove();
            }),
            {
              lineHeight: t,
              charWidth: e,
            }
          );
        }
        childCursor(t = this.length) {
          let e = this.children.length;
          return (
            e && (t -= this.children[--e].length), new L(this.children, t, e)
          );
        }
        computeBlockGapDeco() {
          let t = [],
            e = this.view.viewState;
          for (let i = 0, s = 0; ; s++) {
            let n = s == e.viewports.length ? null : e.viewports[s],
              o = n ? n.from - 1 : this.length;
            if (o > i) {
              let s = e.lineAt(o, 0).bottom - e.lineAt(i, 0).top;
              t.push(
                rt
                  .replace({
                    widget: new zt(s),
                    block: !0,
                    inclusive: !0,
                  })
                  .range(i, o)
              );
            }
            if (!n) break;
            i = n.to + 1;
          }
          return rt.set(t);
        }
        updateDeco() {
          return (this.decorations = [
            ...this.view.pluginField(Ct.decorations),
            ...this.view.state.facet(Vt),
            this.compositionDeco,
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco,
          ]);
        }
        scrollPosIntoView(t, e) {
          let i = this.coordsAt(t, e);
          if (!i) return;
          let s = 0,
            n = 0,
            o = 0,
            r = 0;
          for (let h of this.view.pluginField(Ct.scrollMargins))
            if (h) {
              let { left: t, right: e, top: i, bottom: l } = h;
              null != t && (s = Math.max(s, t)),
                null != e && (n = Math.max(n, e)),
                null != i && (o = Math.max(o, i)),
                null != l && (r = Math.max(r, l));
            }
          !(function (t, e) {
            let i = t.ownerDocument,
              s = i.defaultView;
            for (let n = t.parentNode; n; )
              if (1 == n.nodeType) {
                let t,
                  o = n == i.body;
                if (o) t = v(s);
                else {
                  if (
                    n.scrollHeight <= n.clientHeight &&
                    n.scrollWidth <= n.clientWidth
                  ) {
                    n = n.parentNode;
                    continue;
                  }
                  let e = n.getBoundingClientRect();
                  t = {
                    left: e.left,
                    right: e.left + n.clientWidth,
                    top: e.top,
                    bottom: e.top + n.clientHeight,
                  };
                }
                let r = 0,
                  h = 0;
                if (
                  (e.top < t.top
                    ? (h = -(t.top - e.top + 5))
                    : e.bottom > t.bottom && (h = e.bottom - t.bottom + 5),
                  e.left < t.left
                    ? (r = -(t.left - e.left + 5))
                    : e.right > t.right && (r = e.right - t.right + 5),
                  r || h)
                )
                  if (o) s.scrollBy(r, h);
                  else {
                    if (h) {
                      let t = n.scrollTop;
                      (n.scrollTop += h), (h = n.scrollTop - t);
                    }
                    if (r) {
                      let t = n.scrollLeft;
                      (n.scrollLeft += r), (r = n.scrollLeft - t);
                    }
                    e = {
                      left: e.left - r,
                      top: e.top - h,
                      right: e.right - r,
                      bottom: e.bottom - h,
                    };
                  }
                if (o) break;
                n = n.assignedSlot || n.parentNode;
              } else {
                if (11 != n.nodeType) break;
                n = n.host;
              }
          })(this.dom, {
            left: i.left - s,
            top: i.top - o,
            right: i.right + n,
            bottom: i.bottom + r,
          });
        }
      }
      class zt extends nt {
        constructor(t) {
          super(), (this.height = t);
        }
        toDOM() {
          let t = document.createElement('div');
          return this.updateDOM(t), t;
        }
        eq(t) {
          return t.height == this.height;
        }
        updateDOM(t) {
          return (t.style.height = this.height + 'px'), !0;
        }
        get estimatedHeight() {
          return this.height;
        }
      }
      class qt extends nt {
        constructor(t, e) {
          super(), (this.top = t), (this.text = e);
        }
        eq(t) {
          return this.top == t.top && this.text == t.text;
        }
        toDOM() {
          return this.top;
        }
        ignoreEvent() {
          return !1;
        }
        get customView() {
          return Y;
        }
      }

      function It(t, e, i) {
        for (;;) {
          if (3 == t.nodeType) return t;
          if (1 == t.nodeType && e > 0 && i <= 0)
            e = p((t = t.childNodes[e - 1]));
          else {
            if (!(1 == t.nodeType && e < t.childNodes.length && i >= 0))
              return null;
            (t = t.childNodes[e]), (e = 0);
          }
        }
      }
      class jt {
        constructor() {
          this.changes = [];
        }
        compareRange(t, e) {
          dt(t, e, this.changes);
        }
        comparePoint(t, e) {
          dt(t, e, this.changes);
        }
      }
      var Kt = (function (t) {
        return (t[(t.LTR = 0)] = 'LTR'), (t[(t.RTL = 1)] = 'RTL'), t;
      })(Kt || (Kt = {}));
      const Gt = Kt.LTR,
        _t = Kt.RTL;

      function $t(t) {
        let e = [];
        for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
        return e;
      }
      const Ut = $t(
          '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008'
        ),
        Xt = $t(
          '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333'
        ),
        Yt = Object.create(null),
        Jt = [];
      for (let ls of ['()', '[]', '{}']) {
        let t = ls.charCodeAt(0),
          e = ls.charCodeAt(1);
        (Yt[t] = e), (Yt[e] = -t);
      }
      const Qt = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      class Zt {
        constructor(t, e, i) {
          (this.from = t), (this.to = e), (this.level = i);
        }
        get dir() {
          return this.level % 2 ? _t : Gt;
        }
        side(t, e) {
          return (this.dir == e) == t ? this.to : this.from;
        }
        static find(t, e, i, s) {
          let n = -1;
          for (let o = 0; o < t.length; o++) {
            let r = t[o];
            if (r.from <= e && r.to >= e) {
              if (r.level == i) return o;
              (n < 0 ||
                (0 != s
                  ? s < 0
                    ? r.from < e
                    : r.to > e
                  : t[n].level > r.level)) &&
                (n = o);
            }
          }
          if (n < 0) throw new RangeError('Index out of range');
          return n;
        }
      }
      const te = [];

      function ee(t, e) {
        let i = t.length,
          s = e == Gt ? 1 : 2,
          n = e == Gt ? 2 : 1;
        if (!t || (1 == s && !Qt.test(t))) return ie(i);
        for (let h = 0, l = s, a = s; h < i; h++) {
          let e =
            (o = t.charCodeAt(h)) <= 247
              ? Ut[o]
              : 1424 <= o && o <= 1524
              ? 2
              : 1536 <= o && o <= 1785
              ? Xt[o - 1536]
              : 1774 <= o && o <= 2220
              ? 4
              : (8192 <= o && o <= 8203) || 8204 == o
              ? 256
              : 1;
          512 == e ? (e = l) : 8 == e && 4 == a && (e = 16),
            (te[h] = 4 == e ? 2 : e),
            7 & e && (a = e),
            (l = e);
        }
        var o;
        for (let h = 0, l = s, a = s; h < i; h++) {
          let t = te[h];
          if (128 == t)
            h < i - 1 && l == te[h + 1] && 24 & l
              ? (t = te[h] = l)
              : (te[h] = 256);
          else if (64 == t) {
            let t = h + 1;
            for (; t < i && 64 == te[t]; ) t++;
            let e =
              (h && 8 == l) || (t < i && 8 == te[t]) ? (1 == a ? 1 : 8) : 256;
            for (let i = h; i < t; i++) te[i] = e;
            h = t - 1;
          } else 8 == t && 1 == a && (te[h] = 1);
          (l = t), 7 & t && (a = t);
        }
        for (let h, l, a, c = 0, d = 0, u = 0; c < i; c++)
          if ((l = Yt[(h = t.charCodeAt(c))]))
            if (l < 0) {
              for (let t = d - 3; t >= 0; t -= 3)
                if (Jt[t + 1] == -l) {
                  let e = Jt[t + 2],
                    i = 2 & e ? s : 4 & e ? (1 & e ? n : s) : 0;
                  i && (te[c] = te[Jt[t]] = i), (d = t);
                  break;
                }
            } else {
              if (189 == Jt.length) break;
              (Jt[d++] = c), (Jt[d++] = h), (Jt[d++] = u);
            }
          else if (2 == (a = te[c]) || 1 == a) {
            let t = a == s;
            u = t ? 0 : 1;
            for (let e = d - 3; e >= 0; e -= 3) {
              let i = Jt[e + 2];
              if (2 & i) break;
              if (t) Jt[e + 2] |= 2;
              else {
                if (4 & i) break;
                Jt[e + 2] |= 4;
              }
            }
          }
        for (let h = 0; h < i; h++)
          if (256 == te[h]) {
            let t = h + 1;
            for (; t < i && 256 == te[t]; ) t++;
            let e = 1 == (h ? te[h - 1] : s),
              n = e == (1 == (t < i ? te[t] : s)) ? (e ? 1 : 2) : s;
            for (let i = h; i < t; i++) te[i] = n;
            h = t - 1;
          }
        let r = [];
        if (1 == s)
          for (let h = 0; h < i; ) {
            let t = h,
              e = 1 != te[h++];
            for (; h < i && e == (1 != te[h]); ) h++;
            if (e)
              for (let i = h; i > t; ) {
                let e = i,
                  s = 2 != te[--i];
                for (; i > t && s == (2 != te[i - 1]); ) i--;
                r.push(new Zt(i, e, s ? 2 : 1));
              }
            else r.push(new Zt(t, h, 0));
          }
        else
          for (let h = 0; h < i; ) {
            let t = h,
              e = 2 == te[h++];
            for (; h < i && e == (2 == te[h]); ) h++;
            r.push(new Zt(t, h, e ? 1 : 2));
          }
        return r;
      }

      function ie(t) {
        return [new Zt(0, t, 0)];
      }
      let se = '';

      function ne(t, e, i, o, r) {
        var h;
        let l = o.head - t.from,
          a = -1;
        if (0 == l) {
          if (!r || !t.length) return null;
          e[0].level != i && ((l = e[0].side(!1, i)), (a = 0));
        } else if (l == t.length) {
          if (r) return null;
          let t = e[e.length - 1];
          t.level != i && ((l = t.side(!0, i)), (a = e.length - 1));
        }
        a < 0 &&
          (a = Zt.find(
            e,
            l,
            null !== (h = o.bidiLevel) && void 0 !== h ? h : -1,
            o.assoc
          ));
        let c = e[a];
        l == c.side(r, i) && ((c = e[(a += r ? 1 : -1)]), (l = c.side(!r, i)));
        let d = r == (c.dir == i),
          u = Object(n.e)(t.text, l, d);
        if (
          ((se = t.text.slice(Math.min(l, u), Math.max(l, u))),
          u != c.side(r, i))
        )
          return s.f.cursor(u + t.from, d ? -1 : 1, c.level);
        let f = a == (r ? e.length - 1 : 0) ? null : e[a + (r ? 1 : -1)];
        return f || c.level == i
          ? f && f.level < c.level
            ? s.f.cursor(f.side(!r, i) + t.from, r ? 1 : -1, f.level)
            : s.f.cursor(u + t.from, r ? -1 : 1, c.level)
          : s.f.cursor(r ? t.to : t.from, r ? -1 : 1, i);
      }

      function oe(t, e) {
        return e.left > t ? e.left - t : Math.max(0, t - e.right);
      }

      function re(t, e) {
        return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
      }

      function he(t, e) {
        return t.top < e.bottom - 1 && t.bottom > e.top + 1;
      }

      function le(t, e) {
        return e < t.top
          ? {
              top: e,
              left: t.left,
              right: t.right,
              bottom: t.bottom,
            }
          : t;
      }

      function ae(t, e) {
        return e > t.bottom
          ? {
              top: t.top,
              left: t.left,
              right: t.right,
              bottom: e,
            }
          : t;
      }

      function ce(t, e, i) {
        let s, n, o, r, h, l, a, c;
        for (let f = t.firstChild; f; f = f.nextSibling) {
          let t = d(f);
          for (let d = 0; d < t.length; d++) {
            let u = t[d];
            n && he(n, u) && (u = le(ae(u, n.bottom), n.top));
            let g = oe(e, u),
              p = re(i, u);
            if (0 == g && 0 == p)
              return 3 == f.nodeType ? de(f, e, i) : ce(f, e, i);
            (!s || r > p || (r == p && o > g)) &&
              ((s = f), (n = u), (o = g), (r = p)),
              0 == g
                ? i > u.bottom && (!a || a.bottom < u.bottom)
                  ? ((h = f), (a = u))
                  : i < u.top && (!c || c.top > u.top) && ((l = f), (c = u))
                : a && he(a, u)
                ? (a = ae(a, u.bottom))
                : c && he(c, u) && (c = le(c, u.top));
          }
        }
        if (
          (a && a.bottom >= i
            ? ((s = h), (n = a))
            : c && c.top <= i && ((s = l), (n = c)),
          !s)
        )
          return {
            node: t,
            offset: 0,
          };
        let u = Math.max(n.left, Math.min(n.right, e));
        return 3 == s.nodeType
          ? de(s, u, i)
          : o || 'true' != s.contentEditable
          ? {
              node: t,
              offset:
                Array.prototype.indexOf.call(t.childNodes, s) +
                (e >= (n.left + n.right) / 2 ? 1 : 0),
            }
          : ce(s, u, i);
      }

      function de(t, e, i) {
        let s = t.nodeValue.length,
          n = -1,
          o = 1e9,
          r = 0;
        for (let h = 0; h < s; h++) {
          let s = A(t, h, h + 1).getClientRects();
          for (let l = 0; l < s.length; l++) {
            let a = s[l];
            if (a.top == a.bottom) continue;
            r || (r = e - a.left);
            let c = (a.top > i ? a.top - i : i - a.bottom) - 1;
            if (a.left - 1 <= e && a.right + 1 >= e && c < o) {
              let i = e >= (a.left + a.right) / 2,
                s = i;
              if (j.chrome || j.gecko) {
                A(t, h).getBoundingClientRect().left == a.right && (s = !i);
              }
              if (c <= 0)
                return {
                  node: t,
                  offset: h + (s ? 1 : 0),
                };
              (n = h + (s ? 1 : 0)), (o = c);
            }
          }
        }
        return {
          node: t,
          offset: n > -1 ? n : r > 0 ? t.nodeValue.length : 0,
        };
      }

      function ue(t, { x: e, y: i }, s, n = -1) {
        let o,
          r = t.contentDOM.getBoundingClientRect(),
          h = t.defaultLineHeight / 2;
        for (let f = !1; ; ) {
          if (((o = t.blockAtHeight(i, r.top)), o.top > i || o.bottom < i)) {
            if (
              ((n = o.top > i ? -1 : 1),
              (i = Math.min(o.bottom - h, Math.max(o.top + h, i))),
              f)
            )
              return s ? null : 0;
            f = !0;
          }
          if (o.type == ot.Text) break;
          i = n > 0 ? o.bottom + h : o.top - h;
        }
        let l = o.from;
        if (
          ((e = Math.max(r.left + 1, Math.min(r.right - 1, e))),
          l < t.viewport.from)
        )
          return 0 == t.viewport.from ? 0 : fe(t, r, o, e, i);
        if (l > t.viewport.to)
          return t.viewport.to == t.state.doc.length
            ? t.state.doc.length
            : fe(t, r, o, e, i);
        let a,
          c = t.root,
          d = c.elementFromPoint(e, i),
          u = -1;
        if (
          d &&
          t.contentDOM.contains(d) &&
          !(t.docView.nearest(d) instanceof X)
        )
          if (c.caretPositionFromPoint) {
            let t = c.caretPositionFromPoint(e, i);
            t && ({ offsetNode: a, offset: u } = t);
          } else if (c.caretRangeFromPoint) {
            let t = c.caretRangeFromPoint(e, i);
            t &&
              (({ startContainer: a, startOffset: u } = t),
              j.safari &&
                (function (t, e, i) {
                  let s;
                  if (3 != t.nodeType || e != (s = t.nodeValue.length))
                    return !1;
                  for (let n = t.nextSibling; n; n = n.nextSibling)
                    if (1 != n.nodeType || 'BR' != n.nodeName) return !1;
                  return A(t, s - 1, s).getBoundingClientRect().left > i;
                })(a, u, e) &&
                (a = void 0));
          }
        if (!a || !t.docView.dom.contains(a)) {
          let s = ut.find(t.docView, l);
          ({ node: a, offset: u } = ce(s.dom, e, i));
        }
        return t.docView.posFromDOM(a, u);
      }

      function fe(t, e, i, s, o) {
        let r = Math.round((s - e.left) * t.defaultCharacterWidth);
        if (t.lineWrapping && i.height > 1.5 * t.defaultLineHeight) {
          r +=
            Math.floor((o - i.top) / t.defaultLineHeight) *
            t.viewState.heightOracle.lineLength;
        }
        let h = t.state.sliceDoc(i.from, i.to);
        return i.from + Object(n.f)(h, r, t.state.tabSize);
      }

      function ge(t, e, i, n) {
        let o = t.state.doc.lineAt(e.head),
          r = t.bidiSpans(o);
        for (let h = e, l = null; ; ) {
          let e = ne(o, r, t.textDirection, h, i),
            a = se;
          if (!e) {
            if (o.number == (i ? t.state.doc.lines : 1)) return h;
            (a = '\n'),
              (o = t.state.doc.line(o.number + (i ? 1 : -1))),
              (r = t.bidiSpans(o)),
              (e = s.f.cursor(i ? o.from : o.to));
          }
          if (l) {
            if (!l(a)) return h;
          } else {
            if (!n) return e;
            l = n(a);
          }
          h = e;
        }
      }

      function pe(t, e, i) {
        let n = t.pluginField(Ct.atomicRanges);
        for (;;) {
          let t = !1;
          for (let o of n)
            o.between(i.from - 1, i.from + 1, (n, o, r) => {
              i.from > n &&
                i.from < o &&
                ((i = e.from > i.from ? s.f.cursor(n, 1) : s.f.cursor(o, -1)),
                (t = !0));
            });
          if (!t) return i;
        }
      }
      class me {
        constructor(t) {
          (this.lastKeyCode = 0),
            (this.lastKeyTime = 0),
            (this.pendingIOSKey = null),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastEscPress = 0),
            (this.lastContextMenu = 0),
            (this.scrollHandlers = []),
            (this.registeredEvents = []),
            (this.customHandlers = []),
            (this.composing = -1),
            (this.compositionFirstChange = null),
            (this.compositionEndedAt = 0),
            (this.rapidCompositionStart = !1),
            (this.mouseSelection = null);
          for (let e in ye) {
            let i = ye[e];
            t.contentDOM.addEventListener(e, (s) => {
              ('keydown' == e && this.keydown(t, s)) ||
                (be(t, s) &&
                  !this.ignoreDuringComposition(s) &&
                  (this.mustFlushObserver(s) && t.observer.forceFlush(),
                  this.runCustomHandlers(e, t, s)
                    ? s.preventDefault()
                    : i(t, s)));
            }),
              this.registeredEvents.push(e);
          }
          (this.notifiedFocused = t.hasFocus),
            this.ensureHandlers(t),
            j.safari && t.contentDOM.addEventListener('input', () => null);
        }
        setSelectionOrigin(t) {
          (this.lastSelectionOrigin = t), (this.lastSelectionTime = Date.now());
        }
        ensureHandlers(t) {
          let e = (this.customHandlers = t.pluginField(Rt));
          for (let i of e)
            for (let e in i.handlers)
              this.registeredEvents.indexOf(e) < 0 &&
                'scroll' != e &&
                (this.registeredEvents.push(e),
                t.contentDOM.addEventListener(e, (i) => {
                  be(t, i) &&
                    this.runCustomHandlers(e, t, i) &&
                    i.preventDefault();
                }));
        }
        runCustomHandlers(t, e, i) {
          for (let n of this.customHandlers) {
            let o = n.handlers[t],
              r = !1;
            if (o) {
              try {
                r = o.call(n.plugin, i, e);
              } catch (s) {
                Mt(e.state, s);
              }
              if (r || i.defaultPrevented)
                return (
                  j.android &&
                    'keydown' == t &&
                    13 == i.keyCode &&
                    e.observer.flushSoon(),
                  !0
                );
            }
          }
          return !1;
        }
        runScrollHandlers(t, e) {
          for (let s of this.customHandlers) {
            let n = s.handlers.scroll;
            if (n)
              try {
                n.call(s.plugin, e, t);
              } catch (i) {
                Mt(t.state, i);
              }
          }
        }
        keydown(t, e) {
          return (
            (this.lastKeyCode = e.keyCode),
            (this.lastKeyTime = Date.now()),
            !!this.screenKeyEvent(t, e) ||
              (!(
                !j.ios ||
                (13 != e.keyCode && 8 != e.keyCode) ||
                e.ctrlKey ||
                e.altKey ||
                e.metaKey ||
                e.synthetic
              ) &&
                ((this.pendingIOSKey = 13 == e.keyCode ? 'enter' : 'backspace'),
                setTimeout(() => this.flushIOSKey(t), 250),
                !0))
          );
        }
        flushIOSKey(t) {
          if (!this.pendingIOSKey) return !1;
          let e = t.contentDOM,
            i = this.pendingIOSKey;
          return (
            (this.pendingIOSKey = null),
            'enter' == i ? M(e, 'Enter', 13) : M(e, 'Backspace', 8)
          );
        }
        ignoreDuringComposition(t) {
          return (
            !!/^key/.test(t.type) &&
            (this.composing > 0 ||
              (!!(j.safari && Date.now() - this.compositionEndedAt < 500) &&
                ((this.compositionEndedAt = 0), !0)))
          );
        }
        screenKeyEvent(t, e) {
          let i = 9 == e.keyCode && Date.now() < this.lastEscPress + 2e3;
          return (
            27 == e.keyCode
              ? (this.lastEscPress = Date.now())
              : we.indexOf(e.keyCode) < 0 && (this.lastEscPress = 0),
            i
          );
        }
        mustFlushObserver(t) {
          return (
            ('keydown' == t.type && 229 != t.keyCode) ||
            ('compositionend' == t.type && !j.ios)
          );
        }
        startMouseSelection(t, e, i) {
          this.mouseSelection && this.mouseSelection.destroy(),
            (this.mouseSelection = new ve(this, t, e, i));
        }
        update(t) {
          this.mouseSelection && this.mouseSelection.update(t),
            t.transactions.length &&
              (this.lastKeyCode = this.lastSelectionTime = 0);
        }
        destroy() {
          this.mouseSelection && this.mouseSelection.destroy();
        }
      }
      const we = [16, 17, 18, 20, 91, 92, 224, 225];
      class ve {
        constructor(t, e, i, n) {
          (this.inputState = t),
            (this.view = e),
            (this.style = n),
            (this.lastEvent = i);
          let o = e.contentDOM.ownerDocument;
          o.addEventListener('mousemove', (this.move = this.move.bind(this))),
            o.addEventListener('mouseup', (this.up = this.up.bind(this))),
            (this.extend = i.shiftKey),
            (this.multiple =
              e.state.facet(s.g.allowMultipleSelections) &&
              (function (t, e) {
                let i = t.state.facet(vt);
                return i.length ? i[0](e) : j.mac ? e.metaKey : e.ctrlKey;
              })(e, i)),
            (this.dragMove = (function (t, e) {
              let i = t.state.facet(bt);
              return i.length ? i[0](e) : j.mac ? !e.altKey : !e.ctrlKey;
            })(e, i)),
            (this.dragging =
              !!(function (t, e) {
                let { main: i } = t.state.selection;
                if (i.empty) return !1;
                let s = l(t.root);
                if (0 == s.rangeCount) return !0;
                let n = s.getRangeAt(0).getClientRects();
                for (let o = 0; o < n.length; o++) {
                  let t = n[o];
                  if (
                    t.left <= e.clientX &&
                    t.right >= e.clientX &&
                    t.top <= e.clientY &&
                    t.bottom >= e.clientY
                  )
                    return !0;
                }
                return !1;
              })(e, i) && null),
            !1 === this.dragging && (i.preventDefault(), this.select(i));
        }
        move(t) {
          if (0 == t.buttons) return this.destroy();
          !1 === this.dragging && this.select((this.lastEvent = t));
        }
        up(t) {
          null == this.dragging && this.select(this.lastEvent),
            this.dragging || t.preventDefault(),
            this.destroy();
        }
        destroy() {
          let t = this.view.contentDOM.ownerDocument;
          t.removeEventListener('mousemove', this.move),
            t.removeEventListener('mouseup', this.up),
            (this.inputState.mouseSelection = null);
        }
        select(t) {
          let e = this.style.get(t, this.extend, this.multiple);
          (e.eq(this.view.state.selection) &&
            e.main.assoc == this.view.state.selection.main.assoc) ||
            this.view.dispatch({
              selection: e,
              userEvent: 'select.pointer',
              scrollIntoView: !0,
            });
        }
        update(t) {
          t.docChanged &&
            this.dragging &&
            (this.dragging = this.dragging.map(t.changes)),
            this.style.update(t) &&
              setTimeout(() => this.select(this.lastEvent), 20);
        }
      }

      function be(t, e) {
        if (!e.bubbles) return !0;
        if (e.defaultPrevented) return !1;
        for (let i, s = e.target; s != t.contentDOM; s = s.parentNode)
          if (!s || 11 == s.nodeType || ((i = T.get(s)) && i.ignoreEvent(e)))
            return !1;
        return !0;
      }
      const ye = Object.create(null),
        Se = (j.ie && j.ie_version < 15) || (j.ios && j.webkit_version < 604);

      function xe(t, e) {
        let i,
          { state: n } = t,
          o = 1,
          r = n.toText(e),
          h = r.lines == n.selection.ranges.length;
        if (
          Ne &&
          n.selection.ranges.every((t) => t.empty) &&
          Ne == r.toString()
        ) {
          let t = -1;
          i = n.changeByRange((i) => {
            let l = n.doc.lineAt(i.from);
            if (l.from == t)
              return {
                range: i,
              };
            t = l.from;
            let a = n.toText((h ? r.line(o++).text : e) + n.lineBreak);
            return {
              changes: {
                from: l.from,
                insert: a,
              },
              range: s.f.cursor(i.from + a.length),
            };
          });
        } else
          i = h
            ? n.changeByRange((t) => {
                let e = r.line(o++);
                return {
                  changes: {
                    from: t.from,
                    to: t.to,
                    insert: e.text,
                  },
                  range: s.f.cursor(t.from + e.length),
                };
              })
            : n.replaceSelection(r);
        t.dispatch(i, {
          userEvent: 'input.paste',
          scrollIntoView: !0,
        });
      }
      ye.keydown = (t, e) => {
        t.inputState.setSelectionOrigin('select');
      };
      let Ae = 0;

      function Me(t, e, i, o) {
        if (1 == o) return s.f.cursor(e, i);
        if (2 == o)
          return (function (t, e, i = 1) {
            let o = t.charCategorizer(e),
              r = t.doc.lineAt(e),
              h = e - r.from;
            if (0 == r.length) return s.f.cursor(e);
            0 == h ? (i = 1) : h == r.length && (i = -1);
            let l = h,
              a = h;
            i < 0
              ? (l = Object(n.e)(r.text, h, !1))
              : (a = Object(n.e)(r.text, h));
            let c = o(r.text.slice(l, a));
            for (; l > 0; ) {
              let t = Object(n.e)(r.text, l, !1);
              if (o(r.text.slice(t, l)) != c) break;
              l = t;
            }
            for (; a < r.length; ) {
              let t = Object(n.e)(r.text, a);
              if (o(r.text.slice(a, t)) != c) break;
              a = t;
            }
            return s.f.range(l + r.from, a + r.from);
          })(t.state, e, i);
        {
          let i = ut.find(t.docView, e),
            n = t.state.doc.lineAt(i ? i.posAtEnd : e),
            o = i ? i.posAtStart : n.from,
            r = i ? i.posAtEnd : n.to;
          return r < t.state.doc.length && r == n.to && r++, s.f.range(o, r);
        }
      }
      (ye.touchstart = (t, e) => {
        (Ae = Date.now()), t.inputState.setSelectionOrigin('select.pointer');
      }),
        (ye.touchmove = (t) => {
          t.inputState.setSelectionOrigin('select.pointer');
        }),
        (ye.mousedown = (t, e) => {
          if ((t.observer.flush(), Ae > Date.now() - 2e3)) return;
          let i = null;
          for (let s of t.state.facet(yt)) if (((i = s(t, e)), i)) break;
          i ||
            0 != e.button ||
            (i = (function (t, e) {
              let i = Oe(t, e),
                n = (function (t) {
                  if (!Te) return t.detail;
                  let e = Ee,
                    i = Le;
                  return (
                    (Ee = t),
                    (Le = Date.now()),
                    (Re =
                      !e ||
                      (i > Date.now() - 400 &&
                        Math.abs(e.clientX - t.clientX) < 2 &&
                        Math.abs(e.clientY - t.clientY) < 2)
                        ? (Re + 1) % 3
                        : 1)
                  );
                })(e),
                o = t.state.selection,
                r = i,
                h = e;
              return {
                update(t) {
                  t.changes &&
                    (i && (i.pos = t.changes.mapPos(i.pos)),
                    (o = o.map(t.changes)),
                    (h = null));
                },
                get(e, l, a) {
                  let c;
                  if (
                    (h && e.clientX == h.clientX && e.clientY == h.clientY
                      ? (c = r)
                      : ((c = r = Oe(t, e)), (h = e)),
                    !c || !i)
                  )
                    return o;
                  let d = Me(t, c.pos, c.bias, n);
                  if (i.pos != c.pos && !l) {
                    let e = Me(t, i.pos, i.bias, n),
                      o = Math.min(e.from, d.from),
                      r = Math.max(e.to, d.to);
                    d = o < d.from ? s.f.range(o, r) : s.f.range(r, o);
                  }
                  return l
                    ? o.replaceRange(o.main.extend(d.from, d.to))
                    : a
                    ? o.addRange(d)
                    : s.f.create([d]);
                },
              };
            })(t, e)),
            i &&
              (t.root.activeElement != t.contentDOM &&
                t.observer.ignore(() => x(t.contentDOM)),
              t.inputState.startMouseSelection(t, e, i));
        });
      let ke = (t, e) => t >= e.top && t <= e.bottom,
        De = (t, e, i) => ke(e, i) && t >= i.left && t <= i.right;

      function Ce(t, e, i, s) {
        let n = ut.find(t.docView, e);
        if (!n) return 1;
        let o = e - n.posAtStart;
        if (0 == o) return 1;
        if (o == n.length) return -1;
        let r = n.coordsAt(o, -1);
        if (r && De(i, s, r)) return -1;
        let h = n.coordsAt(o, 1);
        return h && De(i, s, h) ? 1 : r && ke(s, r) ? -1 : 1;
      }

      function Oe(t, e) {
        let i = t.posAtCoords(
          {
            x: e.clientX,
            y: e.clientY,
          },
          !1
        );
        return {
          pos: i,
          bias: Ce(t, i, e.clientX, e.clientY),
        };
      }
      const Te = j.ie && j.ie_version <= 11;
      let Ee = null,
        Re = 0,
        Le = 0;

      function Be(t, e, i, s) {
        let n = t.posAtCoords({
          x: e.clientX,
          y: e.clientY,
        });
        if (null == n || !i) return;
        e.preventDefault();
        let { mouseSelection: o } = t.inputState,
          r =
            s && o && o.dragging && o.dragMove
              ? {
                  from: o.dragging.from,
                  to: o.dragging.to,
                }
              : null,
          h = {
            from: n,
            insert: i,
          },
          l = t.state.changes(r ? [r, h] : h);
        t.focus(),
          t.dispatch({
            changes: l,
            selection: {
              anchor: l.mapPos(n, -1),
              head: l.mapPos(n, 1),
            },
            userEvent: r ? 'move.drop' : 'input.drop',
          });
      }
      (ye.dragstart = (t, e) => {
        let {
            selection: { main: i },
          } = t.state,
          { mouseSelection: s } = t.inputState;
        s && (s.dragging = i),
          e.dataTransfer &&
            (e.dataTransfer.setData('Text', t.state.sliceDoc(i.from, i.to)),
            (e.dataTransfer.effectAllowed = 'copyMove'));
      }),
        (ye.drop = (t, e) => {
          if (!e.dataTransfer || !t.state.facet(kt)) return;
          let i = e.dataTransfer.files;
          if (i && i.length) {
            e.preventDefault();
            let s = Array(i.length),
              n = 0,
              o = () => {
                ++n == i.length &&
                  Be(
                    t,
                    e,
                    s.filter((t) => null != t).join(t.state.lineBreak),
                    !1
                  );
              };
            for (let t = 0; t < i.length; t++) {
              let e = new FileReader();
              (e.onerror = o),
                (e.onload = () => {
                  /[\x00-\x08\x0e-\x1f]{2}/.test(e.result) || (s[t] = e.result),
                    o();
                }),
                e.readAsText(i[t]);
            }
          } else Be(t, e, e.dataTransfer.getData('Text'), !0);
        }),
        (ye.paste = (t, e) => {
          if (!t.state.facet(kt)) return;
          t.observer.flush();
          let i = Se ? null : e.clipboardData,
            s = i && i.getData('text/plain');
          s
            ? (xe(t, s), e.preventDefault())
            : (function (t) {
                let e = t.dom.parentNode;
                if (!e) return;
                let i = e.appendChild(document.createElement('textarea'));
                (i.style.cssText =
                  'position: fixed; left: -10000px; top: 10px'),
                  i.focus(),
                  setTimeout(() => {
                    t.focus(), i.remove(), xe(t, i.value);
                  }, 50);
              })(t);
        });
      let Ne = null;

      function Ve(t, e) {
        if (t.docView.compositionDeco.size) {
          t.inputState.rapidCompositionStart = e;
          try {
            t.update([]);
          } finally {
            t.inputState.rapidCompositionStart = !1;
          }
        }
      }
      (ye.copy = ye.cut =
        (t, e) => {
          let {
            text: i,
            ranges: s,
            linewise: n,
          } = (function (t) {
            let e = [],
              i = [],
              s = !1;
            for (let n of t.selection.ranges)
              n.empty || (e.push(t.sliceDoc(n.from, n.to)), i.push(n));
            if (!e.length) {
              let n = -1;
              for (let { from: s } of t.selection.ranges) {
                let o = t.doc.lineAt(s);
                o.number > n &&
                  (e.push(o.text),
                  i.push({
                    from: o.from,
                    to: Math.min(t.doc.length, o.to + 1),
                  })),
                  (n = o.number);
              }
              s = !0;
            }
            return {
              text: e.join(t.lineBreak),
              ranges: i,
              linewise: s,
            };
          })(t.state);
          if (!i) return;
          Ne = n ? i : null;
          let o = Se ? null : e.clipboardData;
          o
            ? (e.preventDefault(), o.clearData(), o.setData('text/plain', i))
            : (function (t, e) {
                let i = t.dom.parentNode;
                if (!i) return;
                let s = i.appendChild(document.createElement('textarea'));
                (s.style.cssText =
                  'position: fixed; left: -10000px; top: 10px'),
                  (s.value = e),
                  s.focus(),
                  (s.selectionEnd = e.length),
                  (s.selectionStart = 0),
                  setTimeout(() => {
                    s.remove(), t.focus();
                  }, 50);
              })(t, i),
            'cut' == e.type &&
              t.state.facet(kt) &&
              t.dispatch({
                changes: s,
                scrollIntoView: !0,
                userEvent: 'delete.cut',
              });
        }),
        (ye.focus = ye.blur =
          (t) => {
            setTimeout(() => {
              t.hasFocus != t.inputState.notifiedFocused && t.update([]);
            }, 10);
          }),
        (ye.beforeprint = (t) => {
          (t.viewState.printing = !0),
            t.requestMeasure(),
            setTimeout(() => {
              (t.viewState.printing = !1), t.requestMeasure();
            }, 2e3);
        }),
        (ye.compositionstart = ye.compositionupdate =
          (t) => {
            null == t.inputState.compositionFirstChange &&
              (t.inputState.compositionFirstChange = !0),
              t.inputState.composing < 0 &&
                (t.docView.compositionDeco.size &&
                  (t.observer.flush(), Ve(t, !0)),
                (t.inputState.composing = 0));
          }),
        (ye.compositionend = (t) => {
          (t.inputState.composing = -1),
            (t.inputState.compositionEndedAt = Date.now()),
            (t.inputState.compositionFirstChange = null),
            setTimeout(() => {
              t.inputState.composing < 0 && Ve(t, !1);
            }, 50);
        }),
        (ye.contextmenu = (t) => {
          t.inputState.lastContextMenu = Date.now();
        });
      const He = ['pre-wrap', 'normal', 'pre-line'];
      class Pe {
        constructor() {
          (this.doc = n.a.empty),
            (this.lineWrapping = !1),
            (this.direction = Kt.LTR),
            (this.heightSamples = {}),
            (this.lineHeight = 14),
            (this.charWidth = 7),
            (this.lineLength = 30),
            (this.heightChanged = !1);
        }
        heightForGap(t, e) {
          let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
          return (
            this.lineWrapping &&
              (i += Math.ceil(
                (e - t - i * this.lineLength * 0.5) / this.lineLength
              )),
            this.lineHeight * i
          );
        }
        heightForLine(t) {
          if (!this.lineWrapping) return this.lineHeight;
          return (
            (1 +
              Math.max(
                0,
                Math.ceil((t - this.lineLength) / (this.lineLength - 5))
              )) *
            this.lineHeight
          );
        }
        setDoc(t) {
          return (this.doc = t), this;
        }
        mustRefresh(t, e, i) {
          let s = !1;
          for (let n = 0; n < t.length; n++) {
            let e = t[n];
            e < 0
              ? n++
              : this.heightSamples[Math.floor(10 * e)] ||
                ((s = !0), (this.heightSamples[Math.floor(10 * e)] = !0));
          }
          return (
            s || He.indexOf(e) > -1 != this.lineWrapping || this.direction != i
          );
        }
        refresh(t, e, i, s, n, o) {
          let r = He.indexOf(t) > -1,
            h =
              Math.round(i) != Math.round(this.lineHeight) ||
              this.lineWrapping != r ||
              this.direction != e;
          if (
            ((this.lineWrapping = r),
            (this.direction = e),
            (this.lineHeight = i),
            (this.charWidth = s),
            (this.lineLength = n),
            h)
          ) {
            this.heightSamples = {};
            for (let t = 0; t < o.length; t++) {
              let e = o[t];
              e < 0 ? t++ : (this.heightSamples[Math.floor(10 * e)] = !0);
            }
          }
          return h;
        }
      }
      class We {
        constructor(t, e) {
          (this.from = t), (this.heights = e), (this.index = 0);
        }
        get more() {
          return this.index < this.heights.length;
        }
      }
      class Fe {
        constructor(t, e, i, s, n) {
          (this.from = t),
            (this.length = e),
            (this.top = i),
            (this.height = s),
            (this.type = n);
        }
        get to() {
          return this.from + this.length;
        }
        get bottom() {
          return this.top + this.height;
        }
        join(t) {
          let e = (Array.isArray(this.type) ? this.type : [this]).concat(
            Array.isArray(t.type) ? t.type : [t]
          );
          return new Fe(
            this.from,
            this.length + t.length,
            this.top,
            this.height + t.height,
            e
          );
        }
      }
      var ze = (function (t) {
        return (
          (t[(t.ByPos = 0)] = 'ByPos'),
          (t[(t.ByHeight = 1)] = 'ByHeight'),
          (t[(t.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
          t
        );
      })(ze || (ze = {}));
      class qe {
        constructor(t, e, i = 2) {
          (this.length = t), (this.height = e), (this.flags = i);
        }
        get outdated() {
          return (2 & this.flags) > 0;
        }
        set outdated(t) {
          this.flags = (t ? 2 : 0) | (-3 & this.flags);
        }
        setHeight(t, e) {
          this.height != e &&
            (Math.abs(this.height - e) > 1e-4 && (t.heightChanged = !0),
            (this.height = e));
        }
        replace(t, e, i) {
          return qe.of(i);
        }
        decomposeLeft(t, e) {
          e.push(this);
        }
        decomposeRight(t, e) {
          e.push(this);
        }
        applyChanges(t, e, i, s) {
          let n = this;
          for (let o = s.length - 1; o >= 0; o--) {
            let { fromA: r, toA: h, fromB: l, toB: a } = s[o],
              c = n.lineAt(r, ze.ByPosNoHeight, e, 0, 0),
              d = c.to >= h ? c : n.lineAt(h, ze.ByPosNoHeight, e, 0, 0);
            for (a += d.to - h, h = d.to; o > 0 && c.from <= s[o - 1].toA; )
              (r = s[o - 1].fromA),
                (l = s[o - 1].fromB),
                o--,
                r < c.from && (c = n.lineAt(r, ze.ByPosNoHeight, e, 0, 0));
            (l += c.from - r), (r = c.from);
            let u = $e.build(i, t, l, a);
            n = n.replace(r, h, u);
          }
          return n.updateHeight(i, 0);
        }
        static empty() {
          return new je(0, 0);
        }
        static of(t) {
          if (1 == t.length) return t[0];
          let e = 0,
            i = t.length,
            s = 0,
            n = 0;
          for (;;)
            if (e == i)
              if (s > 2 * n) {
                let n = t[e - 1];
                n.break
                  ? t.splice(--e, 1, n.left, null, n.right)
                  : t.splice(--e, 1, n.left, n.right),
                  (i += 1 + n.break),
                  (s -= n.size);
              } else {
                if (!(n > 2 * s)) break;
                {
                  let e = t[i];
                  e.break
                    ? t.splice(i, 1, e.left, null, e.right)
                    : t.splice(i, 1, e.left, e.right),
                    (i += 2 + e.break),
                    (n -= e.size);
                }
              }
            else if (s < n) {
              let i = t[e++];
              i && (s += i.size);
            } else {
              let e = t[--i];
              e && (n += e.size);
            }
          let o = 0;
          return (
            null == t[e - 1] ? ((o = 1), e--) : null == t[e] && ((o = 1), i++),
            new Ge(qe.of(t.slice(0, e)), o, qe.of(t.slice(i)))
          );
        }
      }
      qe.prototype.size = 1;
      class Ie extends qe {
        constructor(t, e, i) {
          super(t, e), (this.type = i);
        }
        blockAt(t, e, i, s) {
          return new Fe(s, this.length, i, this.height, this.type);
        }
        lineAt(t, e, i, s, n) {
          return this.blockAt(0, i, s, n);
        }
        forEachLine(t, e, i, s, n, o) {
          o(this.blockAt(0, i, s, n));
        }
        updateHeight(t, e = 0, i = !1, s) {
          return (
            s &&
              s.from <= e &&
              s.more &&
              this.setHeight(t, s.heights[s.index++]),
            (this.outdated = !1),
            this
          );
        }
        toString() {
          return `block(${this.length})`;
        }
      }
      class je extends Ie {
        constructor(t, e) {
          super(t, e, ot.Text), (this.collapsed = 0), (this.widgetHeight = 0);
        }
        replace(t, e, i) {
          let s = i[0];
          return 1 == i.length &&
            (s instanceof je || (s instanceof Ke && 4 & s.flags)) &&
            Math.abs(this.length - s.length) < 10
            ? (s instanceof Ke
                ? (s = new je(s.length, this.height))
                : (s.height = this.height),
              this.outdated || (s.outdated = !1),
              s)
            : qe.of(i);
        }
        updateHeight(t, e = 0, i = !1, s) {
          return (
            s && s.from <= e && s.more
              ? this.setHeight(t, s.heights[s.index++])
              : (i || this.outdated) &&
                this.setHeight(
                  t,
                  Math.max(
                    this.widgetHeight,
                    t.heightForLine(this.length - this.collapsed)
                  )
                ),
            (this.outdated = !1),
            this
          );
        }
        toString() {
          return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${
            this.widgetHeight ? ':' + this.widgetHeight : ''
          })`;
        }
      }
      class Ke extends qe {
        constructor(t) {
          super(t, 0);
        }
        lines(t, e) {
          let i = t.lineAt(e).number,
            s = t.lineAt(e + this.length).number;
          return {
            firstLine: i,
            lastLine: s,
            lineHeight: this.height / (s - i + 1),
          };
        }
        blockAt(t, e, i, s) {
          let { firstLine: n, lastLine: o, lineHeight: r } = this.lines(e, s),
            h = Math.max(0, Math.min(o - n, Math.floor((t - i) / r))),
            { from: l, length: a } = e.line(n + h);
          return new Fe(l, a, i + r * h, r, ot.Text);
        }
        lineAt(t, e, i, s, n) {
          if (e == ze.ByHeight) return this.blockAt(t, i, s, n);
          if (e == ze.ByPosNoHeight) {
            let { from: e, to: s } = i.lineAt(t);
            return new Fe(e, s - e, 0, 0, ot.Text);
          }
          let { firstLine: o, lineHeight: r } = this.lines(i, n),
            { from: h, length: l, number: a } = i.lineAt(t);
          return new Fe(h, l, s + r * (a - o), r, ot.Text);
        }
        forEachLine(t, e, i, s, n, o) {
          let { firstLine: r, lineHeight: h } = this.lines(i, n);
          for (
            let l = Math.max(t, n), a = Math.min(n + this.length, e);
            l <= a;

          ) {
            let e = i.lineAt(l);
            l == t && (s += h * (e.number - r)),
              o(new Fe(e.from, e.length, s, h, ot.Text)),
              (s += h),
              (l = e.to + 1);
          }
        }
        replace(t, e, i) {
          let s = this.length - e;
          if (s > 0) {
            let t = i[i.length - 1];
            t instanceof Ke
              ? (i[i.length - 1] = new Ke(t.length + s))
              : i.push(null, new Ke(s - 1));
          }
          if (t > 0) {
            let e = i[0];
            e instanceof Ke
              ? (i[0] = new Ke(t + e.length))
              : i.unshift(new Ke(t - 1), null);
          }
          return qe.of(i);
        }
        decomposeLeft(t, e) {
          e.push(new Ke(t - 1), null);
        }
        decomposeRight(t, e) {
          e.push(null, new Ke(this.length - t - 1));
        }
        updateHeight(t, e = 0, i = !1, s) {
          let n = e + this.length;
          if (s && s.from <= e + this.length && s.more) {
            let i = [],
              o = Math.max(e, s.from);
            for (
              s.from > e && i.push(new Ke(s.from - e - 1).updateHeight(t, e));
              o <= n && s.more;

            ) {
              let e = t.doc.lineAt(o).length;
              i.length && i.push(null);
              let n = new je(e, s.heights[s.index++]);
              (n.outdated = !1), i.push(n), (o += e + 1);
            }
            return (
              o <= n && i.push(null, new Ke(n - o).updateHeight(t, o)),
              (t.heightChanged = !0),
              qe.of(i)
            );
          }
          return (
            (i || this.outdated) &&
              (this.setHeight(t, t.heightForGap(e, e + this.length)),
              (this.outdated = !1)),
            this
          );
        }
        toString() {
          return `gap(${this.length})`;
        }
      }
      class Ge extends qe {
        constructor(t, e, i) {
          super(
            t.length + e + i.length,
            t.height + i.height,
            e | (t.outdated || i.outdated ? 2 : 0)
          ),
            (this.left = t),
            (this.right = i),
            (this.size = t.size + i.size);
        }
        get break() {
          return 1 & this.flags;
        }
        blockAt(t, e, i, s) {
          let n = i + this.left.height;
          return t < n || 0 == this.right.height
            ? this.left.blockAt(t, e, i, s)
            : this.right.blockAt(t, e, n, s + this.left.length + this.break);
        }
        lineAt(t, e, i, s, n) {
          let o = s + this.left.height,
            r = n + this.left.length + this.break,
            h = e == ze.ByHeight ? t < o || 0 == this.right.height : t < r,
            l = h
              ? this.left.lineAt(t, e, i, s, n)
              : this.right.lineAt(t, e, i, o, r);
          if (this.break || (h ? l.to < r : l.from > r)) return l;
          let a = e == ze.ByPosNoHeight ? ze.ByPosNoHeight : ze.ByPos;
          return h
            ? l.join(this.right.lineAt(r, a, i, o, r))
            : this.left.lineAt(r, a, i, s, n).join(l);
        }
        forEachLine(t, e, i, s, n, o) {
          let r = s + this.left.height,
            h = n + this.left.length + this.break;
          if (this.break)
            t < h && this.left.forEachLine(t, e, i, s, n, o),
              e >= h && this.right.forEachLine(t, e, i, r, h, o);
          else {
            let l = this.lineAt(h, ze.ByPos, i, s, n);
            t < l.from && this.left.forEachLine(t, l.from - 1, i, s, n, o),
              l.to >= t && l.from <= e && o(l),
              e > l.to && this.right.forEachLine(l.to + 1, e, i, r, h, o);
          }
        }
        replace(t, e, i) {
          let s = this.left.length + this.break;
          if (e < s)
            return this.balanced(this.left.replace(t, e, i), this.right);
          if (t > this.left.length)
            return this.balanced(
              this.left,
              this.right.replace(t - s, e - s, i)
            );
          let n = [];
          t > 0 && this.decomposeLeft(t, n);
          let o = n.length;
          for (let r of i) n.push(r);
          if ((t > 0 && _e(n, o - 1), e < this.length)) {
            let t = n.length;
            this.decomposeRight(e, n), _e(n, t);
          }
          return qe.of(n);
        }
        decomposeLeft(t, e) {
          let i = this.left.length;
          if (t <= i) return this.left.decomposeLeft(t, e);
          e.push(this.left),
            this.break && (i++, t >= i && e.push(null)),
            t > i && this.right.decomposeLeft(t - i, e);
        }
        decomposeRight(t, e) {
          let i = this.left.length,
            s = i + this.break;
          if (t >= s) return this.right.decomposeRight(t - s, e);
          t < i && this.left.decomposeRight(t, e),
            this.break && t < s && e.push(null),
            e.push(this.right);
        }
        balanced(t, e) {
          return t.size > 2 * e.size || e.size > 2 * t.size
            ? qe.of(this.break ? [t, null, e] : [t, e])
            : ((this.left = t),
              (this.right = e),
              (this.height = t.height + e.height),
              (this.outdated = t.outdated || e.outdated),
              (this.size = t.size + e.size),
              (this.length = t.length + this.break + e.length),
              this);
        }
        updateHeight(t, e = 0, i = !1, s) {
          let { left: n, right: o } = this,
            r = e + n.length + this.break,
            h = null;
          return (
            s && s.from <= e + n.length && s.more
              ? (h = n = n.updateHeight(t, e, i, s))
              : n.updateHeight(t, e, i),
            s && s.from <= r + o.length && s.more
              ? (h = o = o.updateHeight(t, r, i, s))
              : o.updateHeight(t, r, i),
            h
              ? this.balanced(n, o)
              : ((this.height = this.left.height + this.right.height),
                (this.outdated = !1),
                this)
          );
        }
        toString() {
          return this.left + (this.break ? ' ' : '-') + this.right;
        }
      }

      function _e(t, e) {
        let i, s;
        null == t[e] &&
          (i = t[e - 1]) instanceof Ke &&
          (s = t[e + 1]) instanceof Ke &&
          t.splice(e - 1, 3, new Ke(i.length + 1 + s.length));
      }
      class $e {
        constructor(t, e) {
          (this.pos = t),
            (this.oracle = e),
            (this.nodes = []),
            (this.lineStart = -1),
            (this.lineEnd = -1),
            (this.covering = null),
            (this.writtenTo = t);
        }
        get isCovered() {
          return (
            this.covering && this.nodes[this.nodes.length - 1] == this.covering
          );
        }
        span(t, e) {
          if (this.lineStart > -1) {
            let t = Math.min(e, this.lineEnd),
              i = this.nodes[this.nodes.length - 1];
            i instanceof je
              ? (i.length += t - this.pos)
              : (t > this.pos || !this.isCovered) &&
                this.nodes.push(new je(t - this.pos, -1)),
              (this.writtenTo = t),
              e > t &&
                (this.nodes.push(null),
                this.writtenTo++,
                (this.lineStart = -1));
          }
          this.pos = e;
        }
        point(t, e, i) {
          if (t < e || i.heightRelevant) {
            let s = i.widget ? Math.max(0, i.widget.estimatedHeight) : 0,
              n = e - t;
            i.block
              ? this.addBlock(new Ie(n, s, i.type))
              : (n || s >= 5) && this.addLineDeco(s, n);
          } else e > t && this.span(t, e);
          this.lineEnd > -1 &&
            this.lineEnd < this.pos &&
            (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
        }
        enterLine() {
          if (this.lineStart > -1) return;
          let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
          (this.lineStart = t),
            (this.lineEnd = e),
            this.writtenTo < t &&
              ((this.writtenTo < t - 1 ||
                null == this.nodes[this.nodes.length - 1]) &&
                this.nodes.push(this.blankContent(this.writtenTo, t - 1)),
              this.nodes.push(null)),
            this.pos > t && this.nodes.push(new je(this.pos - t, -1)),
            (this.writtenTo = this.pos);
        }
        blankContent(t, e) {
          let i = new Ke(e - t);
          return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
        }
        ensureLine() {
          this.enterLine();
          let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
          if (t instanceof je) return t;
          let e = new je(0, -1);
          return this.nodes.push(e), e;
        }
        addBlock(t) {
          this.enterLine(),
            t.type != ot.WidgetAfter || this.isCovered || this.ensureLine(),
            this.nodes.push(t),
            (this.writtenTo = this.pos = this.pos + t.length),
            t.type != ot.WidgetBefore && (this.covering = t);
        }
        addLineDeco(t, e) {
          let i = this.ensureLine();
          (i.length += e),
            (i.collapsed += e),
            (i.widgetHeight = Math.max(i.widgetHeight, t)),
            (this.writtenTo = this.pos = this.pos + e);
        }
        finish(t) {
          let e =
            0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
          !(this.lineStart > -1) || e instanceof je || this.isCovered
            ? (this.writtenTo < this.pos || null == e) &&
              this.nodes.push(this.blankContent(this.writtenTo, this.pos))
            : this.nodes.push(new je(0, -1));
          let i = t;
          for (let s of this.nodes)
            s instanceof je && s.updateHeight(this.oracle, i),
              (i += s ? s.length : 1);
          return this.nodes;
        }
        static build(t, e, i, s) {
          let n = new $e(i, t);
          return r.a.spans(e, i, s, n, 0), n.finish(i);
        }
      }
      class Ue {
        constructor() {
          this.changes = [];
        }
        compareRange() {}
        comparePoint(t, e, i, s) {
          (t < e || (i && i.heightRelevant) || (s && s.heightRelevant)) &&
            dt(t, e, this.changes, 5);
        }
      }
      class Xe {
        constructor(t, e, i) {
          (this.from = t), (this.to = e), (this.size = i);
        }
        static same(t, e) {
          if (t.length != e.length) return !1;
          for (let i = 0; i < t.length; i++) {
            let s = t[i],
              n = e[i];
            if (s.from != n.from || s.to != n.to || s.size != n.size) return !1;
          }
          return !0;
        }
        draw(t) {
          return rt
            .replace({
              widget: new Ye(this.size, t),
            })
            .range(this.from, this.to);
        }
      }
      class Ye extends nt {
        constructor(t, e) {
          super(), (this.size = t), (this.vertical = e);
        }
        eq(t) {
          return t.size == this.size && t.vertical == this.vertical;
        }
        toDOM() {
          let t = document.createElement('div');
          return (
            this.vertical
              ? (t.style.height = this.size + 'px')
              : ((t.style.width = this.size + 'px'),
                (t.style.height = '2px'),
                (t.style.display = 'inline-block')),
            t
          );
        }
        get estimatedHeight() {
          return this.vertical ? this.size : -1;
        }
      }
      class Je {
        constructor(t) {
          (this.state = t),
            (this.pixelViewport = {
              left: 0,
              right: window.innerWidth,
              top: 0,
              bottom: 0,
            }),
            (this.inView = !0),
            (this.paddingTop = 0),
            (this.paddingBottom = 0),
            (this.contentWidth = 0),
            (this.heightOracle = new Pe()),
            (this.scaler = ii),
            (this.scrollTo = null),
            (this.printing = !1),
            (this.visibleRanges = []),
            (this.mustEnforceCursorAssoc = !1),
            (this.heightMap = qe
              .empty()
              .applyChanges(
                t.facet(Vt),
                n.a.empty,
                this.heightOracle.setDoc(t.doc),
                [new Pt(0, 0, 0, t.doc.length)]
              )),
            (this.viewport = this.getViewport(0, null)),
            this.updateForViewport(),
            (this.lineGaps = this.ensureLineGaps([])),
            (this.lineGapDeco = rt.set(this.lineGaps.map((t) => t.draw(!1)))),
            this.computeVisibleRanges();
        }
        updateForViewport() {
          let t = [this.viewport],
            { main: e } = this.state.selection;
          for (let i = 0; i <= 1; i++) {
            let s = i ? e.head : e.anchor;
            if (!t.some(({ from: t, to: e }) => s >= t && s <= e)) {
              let { from: e, to: i } = this.lineAt(s, 0);
              t.push(new Qe(e, i));
            }
          }
          (this.viewports = t.sort((t, e) => t.from - e.from)),
            (this.scaler =
              this.heightMap.height <= 7e6
                ? ii
                : new si(
                    this.heightOracle.doc,
                    this.heightMap,
                    this.viewports
                  ));
        }
        update(t, e = null) {
          let i = this.state;
          this.state = t.state;
          let n = this.state.facet(Vt),
            o = t.changedRanges,
            h = Pt.extendWithRanges(
              o,
              (function (t, e, i) {
                let s = new Ue();
                return r.a.compare(t, e, i, s, 0), s.changes;
              })(
                t.startState.facet(Vt),
                n,
                t ? t.changes : s.c.empty(this.state.doc.length)
              )
            ),
            l = this.heightMap.height;
          (this.heightMap = this.heightMap.applyChanges(
            n,
            i.doc,
            this.heightOracle.setDoc(this.state.doc),
            h
          )),
            this.heightMap.height != l && (t.flags |= 2);
          let a = h.length
            ? this.mapViewport(this.viewport, t.changes)
            : this.viewport;
          ((e && (e.head < a.from || e.head > a.to)) ||
            !this.viewportIsAppropriate(a)) &&
            (a = this.getViewport(0, e)),
            a.eq(this.viewport) || ((this.viewport = a), (t.flags |= 4)),
            this.updateForViewport(),
            (this.lineGaps.length ||
              this.viewport.to - this.viewport.from > 15e3) &&
              (t.flags |= this.updateLineGaps(
                this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))
              )),
            this.computeVisibleRanges(),
            e && (this.scrollTo = e),
            !this.mustEnforceCursorAssoc &&
              t.selectionSet &&
              t.view.lineWrapping &&
              t.state.selection.main.empty &&
              t.state.selection.main.assoc &&
              (this.mustEnforceCursorAssoc = !0);
        }
        measure(t, e) {
          let i = t.dom,
            s = '',
            n = Kt.LTR;
          if (!e) {
            let t = window.getComputedStyle(i);
            (s = t.whiteSpace),
              (n = 'rtl' == t.direction ? Kt.RTL : Kt.LTR),
              (this.paddingTop = parseInt(t.paddingTop) || 0),
              (this.paddingBottom = parseInt(t.paddingBottom) || 0);
          }
          let o = this.printing
              ? {
                  top: -1e8,
                  bottom: 1e8,
                  left: -1e8,
                  right: 1e8,
                }
              : (function (t, e) {
                  let i = t.getBoundingClientRect(),
                    s = Math.max(0, i.left),
                    n = Math.min(innerWidth, i.right),
                    o = Math.max(0, i.top),
                    r = Math.min(innerHeight, i.bottom);
                  for (let h = t.parentNode; h; )
                    if (1 == h.nodeType) {
                      let t = window.getComputedStyle(h);
                      if (
                        (h.scrollHeight > h.clientHeight ||
                          h.scrollWidth > h.clientWidth) &&
                        'visible' != t.overflow
                      ) {
                        let t = h.getBoundingClientRect();
                        (s = Math.max(s, t.left)),
                          (n = Math.min(n, t.right)),
                          (o = Math.max(o, t.top)),
                          (r = Math.min(r, t.bottom));
                      }
                      h =
                        'absolute' == t.position || 'fixed' == t.position
                          ? h.offsetParent
                          : h.parentNode;
                    } else {
                      if (11 != h.nodeType) break;
                      h = h.host;
                    }
                  return {
                    left: s - i.left,
                    right: n - i.left,
                    top: o - (i.top + e),
                    bottom: r - (i.top + e),
                  };
                })(i, this.paddingTop),
            r = o.top - this.pixelViewport.top,
            h = o.bottom - this.pixelViewport.bottom;
          if (
            ((this.pixelViewport = o),
            (this.inView =
              this.pixelViewport.bottom > this.pixelViewport.top &&
              this.pixelViewport.right > this.pixelViewport.left),
            !this.inView)
          )
            return 0;
          let l = t.measureVisibleLineHeights(),
            a = !1,
            c = 0,
            d = 0,
            u = this.heightOracle;
          if (!e) {
            let e = t.dom.clientWidth;
            if (
              u.mustRefresh(l, s, n) ||
              (u.lineWrapping && Math.abs(e - this.contentWidth) > u.charWidth)
            ) {
              let { lineHeight: i, charWidth: o } = t.measureTextSize();
              (a = u.refresh(s, n, i, o, e / o, l)),
                a && ((t.minWidth = 0), (d |= 16));
            }
            this.contentWidth != e && ((this.contentWidth = e), (d |= 16)),
              r > 0 && h > 0
                ? (c = Math.max(r, h))
                : r < 0 && h < 0 && (c = Math.min(r, h));
          }
          if (
            ((u.heightChanged = !1),
            (this.heightMap = this.heightMap.updateHeight(
              u,
              0,
              a,
              new We(this.viewport.from, l)
            )),
            u.heightChanged && (d |= 2),
            !this.viewportIsAppropriate(this.viewport, c) ||
              (this.scrollTo &&
                (this.scrollTo.head < this.viewport.from ||
                  this.scrollTo.head > this.viewport.to)))
          ) {
            let t = this.getViewport(c, this.scrollTo);
            (t.from == this.viewport.from && t.to == this.viewport.to) ||
              ((this.viewport = t), (d |= 4));
          }
          return (
            this.updateForViewport(),
            (this.lineGaps.length ||
              this.viewport.to - this.viewport.from > 15e3) &&
              (d |= this.updateLineGaps(
                this.ensureLineGaps(a ? [] : this.lineGaps)
              )),
            this.computeVisibleRanges(),
            this.mustEnforceCursorAssoc &&
              ((this.mustEnforceCursorAssoc = !1), t.enforceCursorAssoc()),
            d
          );
        }
        get visibleTop() {
          return this.scaler.fromDOM(this.pixelViewport.top, 0);
        }
        get visibleBottom() {
          return this.scaler.fromDOM(this.pixelViewport.bottom, 0);
        }
        getViewport(t, e) {
          let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)),
            s = this.heightMap,
            n = this.state.doc,
            { visibleTop: o, visibleBottom: r } = this,
            h = new Qe(
              s.lineAt(o - 1e3 * i, ze.ByHeight, n, 0, 0).from,
              s.lineAt(r + 1e3 * (1 - i), ze.ByHeight, n, 0, 0).to
            );
          if (e)
            if (e.head < h.from) {
              let { top: t } = s.lineAt(e.head, ze.ByPos, n, 0, 0);
              h = new Qe(
                s.lineAt(t - 500, ze.ByHeight, n, 0, 0).from,
                s.lineAt(t + (r - o) + 500, ze.ByHeight, n, 0, 0).to
              );
            } else if (e.head > h.to) {
              let { bottom: t } = s.lineAt(e.head, ze.ByPos, n, 0, 0);
              h = new Qe(
                s.lineAt(t - (r - o) - 500, ze.ByHeight, n, 0, 0).from,
                s.lineAt(t + 500, ze.ByHeight, n, 0, 0).to
              );
            }
          return h;
        }
        mapViewport(t, e) {
          let i = e.mapPos(t.from, -1),
            s = e.mapPos(t.to, 1);
          return new Qe(
            this.heightMap.lineAt(i, ze.ByPos, this.state.doc, 0, 0).from,
            this.heightMap.lineAt(s, ze.ByPos, this.state.doc, 0, 0).to
          );
        }
        viewportIsAppropriate({ from: t, to: e }, i = 0) {
          let { top: s } = this.heightMap.lineAt(
              t,
              ze.ByPos,
              this.state.doc,
              0,
              0
            ),
            { bottom: n } = this.heightMap.lineAt(
              e,
              ze.ByPos,
              this.state.doc,
              0,
              0
            ),
            { visibleTop: o, visibleBottom: r } = this;
          return (
            (0 == t || s <= o - Math.max(10, Math.min(-i, 250))) &&
            (e == this.state.doc.length ||
              n >= r + Math.max(10, Math.min(i, 250))) &&
            s > o - 2e3 &&
            n < r + 2e3
          );
        }
        mapLineGaps(t, e) {
          if (!t.length || e.empty) return t;
          let i = [];
          for (let s of t)
            e.touchesRange(s.from, s.to) ||
              i.push(new Xe(e.mapPos(s.from), e.mapPos(s.to), s.size));
          return i;
        }
        ensureLineGaps(t) {
          let e = [];
          return (
            this.heightOracle.direction != Kt.LTR ||
              this.heightMap.forEachLine(
                this.viewport.from,
                this.viewport.to,
                this.state.doc,
                0,
                0,
                (i) => {
                  if (i.length < 1e4) return;
                  let s,
                    n,
                    o = (function (t, e, i) {
                      let s = [],
                        n = t,
                        o = 0;
                      r.a.spans(
                        i.facet(Vt),
                        t,
                        e,
                        {
                          span() {},
                          point(t, e) {
                            t > n &&
                              (s.push({
                                from: n,
                                to: t,
                              }),
                              (o += t - n)),
                              (n = e);
                          },
                        },
                        20
                      ),
                        n < e &&
                          (s.push({
                            from: n,
                            to: e,
                          }),
                          (o += e - n));
                      return {
                        total: o,
                        ranges: s,
                      };
                    })(i.from, i.to, this.state);
                  if (o.total < 1e4) return;
                  if (this.heightOracle.lineWrapping)
                    (s =
                      i.from != this.viewport.from
                        ? i.from
                        : Ze(o, (this.visibleTop - i.top) / i.height)),
                      (n =
                        i.to != this.viewport.to
                          ? i.to
                          : Ze(o, (this.visibleBottom - i.top) / i.height));
                  else {
                    let t = o.total * this.heightOracle.charWidth;
                    (s = Ze(o, this.pixelViewport.left / t)),
                      (n = Ze(o, this.pixelViewport.right / t));
                  }
                  let h = this.state.selection.main;
                  h.from <= s && h.to >= i.from && (s = h.from),
                    h.from <= i.to && h.to >= n && (n = h.to);
                  let l = s - 1e4,
                    a = n + 1e4;
                  l > i.from + 5e3 &&
                    e.push(
                      ei(
                        t,
                        (t) =>
                          t.from == i.from && t.to > l - 5e3 && t.to < l + 5e3
                      ) || new Xe(i.from, l, this.gapSize(i, l, !0, o))
                    ),
                    a < i.to - 5e3 &&
                      e.push(
                        ei(
                          t,
                          (t) =>
                            t.to == i.to && t.from > a - 5e3 && t.from < a + 5e3
                        ) || new Xe(a, i.to, this.gapSize(i, a, !1, o))
                      );
                }
              ),
            e
          );
        }
        gapSize(t, e, i, s) {
          if (this.heightOracle.lineWrapping) {
            let n = t.height * ti(s, e);
            return i ? n : t.height - n;
          }
          {
            let t = ti(s, e);
            return s.total * this.heightOracle.charWidth * (i ? t : 1 - t);
          }
        }
        updateLineGaps(t) {
          return Xe.same(t, this.lineGaps)
            ? 0
            : ((this.lineGaps = t),
              (this.lineGapDeco = rt.set(
                t.map((t) => t.draw(this.heightOracle.lineWrapping))
              )),
              8);
        }
        computeVisibleRanges() {
          let t = this.state.facet(Vt);
          this.lineGaps.length && (t = t.concat(this.lineGapDeco));
          let e = [];
          r.a.spans(
            t,
            this.viewport.from,
            this.viewport.to,
            {
              span(t, i) {
                e.push({
                  from: t,
                  to: i,
                });
              },
              point() {},
            },
            20
          ),
            (this.visibleRanges = e);
        }
        lineAt(t, e) {
          return (
            (e += this.paddingTop),
            ni(
              this.heightMap.lineAt(t, ze.ByPos, this.state.doc, e, 0),
              this.scaler,
              e
            )
          );
        }
        lineAtHeight(t, e) {
          return (
            (e += this.paddingTop),
            ni(
              this.heightMap.lineAt(
                this.scaler.fromDOM(t, e),
                ze.ByHeight,
                this.state.doc,
                e,
                0
              ),
              this.scaler,
              e
            )
          );
        }
        blockAtHeight(t, e) {
          return (
            (e += this.paddingTop),
            ni(
              this.heightMap.blockAt(
                this.scaler.fromDOM(t, e),
                this.state.doc,
                e,
                0
              ),
              this.scaler,
              e
            )
          );
        }
        forEachLine(t, e, i, s) {
          return (
            (s += this.paddingTop),
            this.heightMap.forEachLine(
              t,
              e,
              this.state.doc,
              s,
              0,
              1 == this.scaler.scale ? i : (t) => i(ni(t, this.scaler, s))
            )
          );
        }
        get contentHeight() {
          return this.domHeight + this.paddingTop + this.paddingBottom;
        }
        get domHeight() {
          return this.scaler.toDOM(this.heightMap.height, this.paddingTop);
        }
      }
      class Qe {
        constructor(t, e) {
          (this.from = t), (this.to = e);
        }
        eq(t) {
          return this.from == t.from && this.to == t.to;
        }
      }

      function Ze({ total: t, ranges: e }, i) {
        if (i <= 0) return e[0].from;
        if (i >= 1) return e[e.length - 1].to;
        let s = Math.floor(t * i);
        for (let n = 0; ; n++) {
          let { from: t, to: i } = e[n],
            o = i - t;
          if (s <= o) return t + s;
          s -= o;
        }
      }

      function ti(t, e) {
        let i = 0;
        for (let { from: s, to: n } of t.ranges) {
          if (e <= n) {
            i += e - s;
            break;
          }
          i += n - s;
        }
        return i / t.total;
      }

      function ei(t, e) {
        for (let i of t) if (e(i)) return i;
      }
      const ii = {
        toDOM: (t) => t,
        fromDOM: (t) => t,
        scale: 1,
      };
      class si {
        constructor(t, e, i) {
          let s = 0,
            n = 0,
            o = 0;
          (this.viewports = i.map(({ from: i, to: n }) => {
            let o = e.lineAt(i, ze.ByPos, t, 0, 0).top,
              r = e.lineAt(n, ze.ByPos, t, 0, 0).bottom;
            return (
              (s += r - o),
              {
                from: i,
                to: n,
                top: o,
                bottom: r,
                domTop: 0,
                domBottom: 0,
              }
            );
          })),
            (this.scale = (7e6 - s) / (e.height - s));
          for (let r of this.viewports)
            (r.domTop = o + (r.top - n) * this.scale),
              (o = r.domBottom = r.domTop + (r.bottom - r.top)),
              (n = r.bottom);
        }
        toDOM(t, e) {
          t -= e;
          for (let i = 0, s = 0, n = 0; ; i++) {
            let o = i < this.viewports.length ? this.viewports[i] : null;
            if (!o || t < o.top) return n + (t - s) * this.scale + e;
            if (t <= o.bottom) return o.domTop + (t - o.top) + e;
            (s = o.bottom), (n = o.domBottom);
          }
        }
        fromDOM(t, e) {
          t -= e;
          for (let i = 0, s = 0, n = 0; ; i++) {
            let o = i < this.viewports.length ? this.viewports[i] : null;
            if (!o || t < o.domTop) return s + (t - n) / this.scale + e;
            if (t <= o.domBottom) return o.top + (t - o.domTop) + e;
            (s = o.bottom), (n = o.domBottom);
          }
        }
      }

      function ni(t, e, i) {
        if (1 == e.scale) return t;
        let s = e.toDOM(t.top, i),
          n = e.toDOM(t.bottom, i);
        return new Fe(
          t.from,
          t.length,
          s,
          n - s,
          Array.isArray(t.type) ? t.type.map((t) => ni(t, e, i)) : t.type
        );
      }
      const oi = s.h.define({
          combine: (t) => t.join(' '),
        }),
        ri = s.h.define({
          combine: (t) => t.indexOf(!0) > -1,
        }),
        hi = o.a.newName(),
        li = o.a.newName(),
        ai = o.a.newName(),
        ci = {
          '&light': '.' + li,
          '&dark': '.' + ai,
        };

      function di(t, e, i) {
        return new o.a(e, {
          finish: (e) =>
            /&/.test(e)
              ? e.replace(/&\w*/, (e) => {
                  if ('&' == e) return t;
                  if (!i || !i[e])
                    throw new RangeError(`Unsupported selector: ${e}`);
                  return i[e];
                })
              : t + ' ' + e,
        });
      }
      const ui = di(
          '.' + hi,
          {
            '&': {
              position: 'relative !important',
              boxSizing: 'border-box',
              '&.cm-focused': {
                outline: '1px dotted #212121',
              },
              display: 'flex !important',
              flexDirection: 'column',
            },
            '.cm-scroller': {
              display: 'flex !important',
              alignItems: 'flex-start !important',
              fontFamily: 'monospace',
              lineHeight: 1.4,
              height: '100%',
              overflowX: 'auto',
              position: 'relative',
              zIndex: 0,
            },
            '.cm-content': {
              margin: 0,
              flexGrow: 2,
              minHeight: '100%',
              display: 'block',
              whiteSpace: 'pre',
              wordWrap: 'normal',
              boxSizing: 'border-box',
              padding: '4px 0',
              outline: 'none',
            },
            '.cm-lineWrapping': {
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflowWrap: 'anywhere',
            },
            '&light .cm-content': {
              caretColor: 'black',
            },
            '&dark .cm-content': {
              caretColor: 'white',
            },
            '.cm-line': {
              display: 'block',
              padding: '0 2px 0 4px',
            },
            '.cm-selectionLayer': {
              zIndex: -1,
              contain: 'size style',
            },
            '.cm-selectionBackground': {
              position: 'absolute',
            },
            '&light .cm-selectionBackground': {
              background: '#d9d9d9',
            },
            '&dark .cm-selectionBackground': {
              background: '#222',
            },
            '&light.cm-focused .cm-selectionBackground': {
              background: '#d7d4f0',
            },
            '&dark.cm-focused .cm-selectionBackground': {
              background: '#233',
            },
            '.cm-cursorLayer': {
              zIndex: 100,
              contain: 'size style',
              pointerEvents: 'none',
            },
            '&.cm-focused .cm-cursorLayer': {
              animation: 'steps(1) cm-blink 1.2s infinite',
            },
            '@keyframes cm-blink': {
              '0%': {},
              '50%': {
                visibility: 'hidden',
              },
              '100%': {},
            },
            '@keyframes cm-blink2': {
              '0%': {},
              '50%': {
                visibility: 'hidden',
              },
              '100%': {},
            },
            '.cm-cursor': {
              position: 'absolute',
              borderLeft: '1.2px solid black',
              marginLeft: '-0.6px',
              pointerEvents: 'none',
              display: 'none',
            },
            '&dark .cm-cursor': {
              borderLeftColor: '#444',
            },
            '&.cm-focused .cm-cursor': {
              display: 'block',
            },
            '&light .cm-activeLine': {
              backgroundColor: '#f3f9ff',
            },
            '&dark .cm-activeLine': {
              backgroundColor: '#223039',
            },
            '&light .cm-specialChar': {
              color: 'red',
            },
            '&dark .cm-specialChar': {
              color: '#f78',
            },
            '.cm-tab': {
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
            },
            '.cm-placeholder': {
              color: '#888',
              display: 'inline-block',
            },
            '.cm-button': {
              verticalAlign: 'middle',
              color: 'inherit',
              fontSize: '70%',
              padding: '.2em 1em',
              borderRadius: '3px',
            },
            '&light .cm-button': {
              backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
              border: '1px solid #888',
              '&:active': {
                backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)',
              },
            },
            '&dark .cm-button': {
              backgroundImage: 'linear-gradient(#393939, #111)',
              border: '1px solid #888',
              '&:active': {
                backgroundImage: 'linear-gradient(#111, #333)',
              },
            },
            '.cm-textfield': {
              verticalAlign: 'middle',
              color: 'inherit',
              fontSize: '70%',
              border: '1px solid silver',
              padding: '.2em .5em',
            },
            '&light .cm-textfield': {
              backgroundColor: 'white',
            },
            '&dark .cm-textfield': {
              border: '1px solid #555',
              backgroundColor: 'inherit',
            },
          },
          ci
        ),
        fi = {
          childList: !0,
          characterData: !0,
          subtree: !0,
          attributes: !0,
          characterDataOldValue: !0,
        },
        gi = j.ie && j.ie_version <= 11;
      class pi {
        constructor(t, e, i) {
          (this.view = t),
            (this.onChange = e),
            (this.onScrollChanged = i),
            (this.active = !1),
            (this.ignoreSelection = new b()),
            (this.delayedFlush = -1),
            (this.queue = []),
            (this.lastFlush = 0),
            (this.scrollTargets = []),
            (this.intersection = null),
            (this.intersecting = !1),
            (this._selectionRange = null),
            (this.parentCheck = -1),
            (this.dom = t.contentDOM),
            (this.observer = new MutationObserver((e) => {
              for (let t of e) this.queue.push(t);
              (this._selectionRange = null),
                ((j.ie && j.ie_version <= 11) || (j.ios && t.composing)) &&
                e.some(
                  (t) =>
                    ('childList' == t.type && t.removedNodes.length) ||
                    ('characterData' == t.type &&
                      t.oldValue.length > t.target.nodeValue.length)
                )
                  ? this.flushSoon()
                  : this.flush();
            })),
            gi &&
              (this.onCharData = (t) => {
                this.queue.push({
                  target: t.target,
                  type: 'characterData',
                  oldValue: t.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this)),
            this.start(),
            (this.onScroll = this.onScroll.bind(this)),
            window.addEventListener('scroll', this.onScroll),
            'function' == typeof IntersectionObserver &&
              ((this.intersection = new IntersectionObserver((t) => {
                this.parentCheck < 0 &&
                  (this.parentCheck = setTimeout(
                    this.listenForScroll.bind(this),
                    1e3
                  )),
                  t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
                    ((this.intersecting = !this.intersecting),
                    this.intersecting != this.view.inView &&
                      this.onScrollChanged(document.createEvent('Event')));
              }, {})),
              this.intersection.observe(this.dom)),
            this.listenForScroll();
        }
        onScroll(t) {
          this.intersecting && this.flush(), this.onScrollChanged(t);
        }
        onSelectionChange(t) {
          this.lastFlush < Date.now() - 50 && (this._selectionRange = null);
          let { view: e } = this,
            i = this.selectionRange;
          if (
            e.state.facet(kt) ? e.root.activeElement != this.dom : !c(e.dom, i)
          )
            return;
          let s = i.anchorNode && e.docView.nearest(i.anchorNode);
          (s && s.ignoreEvent(t)) ||
            (j.ie &&
            j.ie_version <= 11 &&
            !e.state.selection.main.empty &&
            i.focusNode &&
            u(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset)
              ? this.flushSoon()
              : this.flush());
        }
        get selectionRange() {
          if (!this._selectionRange) {
            let { root: t } = this.view,
              e = l(t);
            j.safari &&
              11 == t.nodeType &&
              (function () {
                let t = document.activeElement;
                for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
                return t;
              })() == this.view.contentDOM &&
              (e =
                (function (t) {
                  let e = null;

                  function i(t) {
                    t.preventDefault(),
                      t.stopImmediatePropagation(),
                      (e = t.getTargetRanges()[0]);
                  }
                  if (
                    (t.contentDOM.addEventListener('beforeinput', i, !0),
                    document.execCommand('indent'),
                    t.contentDOM.removeEventListener('beforeinput', i, !0),
                    !e)
                  )
                    return null;
                  let s = e.startContainer,
                    n = e.startOffset,
                    o = e.endContainer,
                    r = e.endOffset,
                    h = t.docView.domAtPos(t.state.selection.main.anchor);
                  u(h.node, h.offset, o, r) && ([s, n, o, r] = [o, r, s, n]);
                  return {
                    anchorNode: s,
                    anchorOffset: n,
                    focusNode: o,
                    focusOffset: r,
                  };
                })(this.view) || e),
              (this._selectionRange = e);
          }
          return this._selectionRange;
        }
        setSelectionRange(t, e) {
          var i;
          (null === (i = this._selectionRange) || void 0 === i
            ? void 0
            : i.type) ||
            (this._selectionRange = {
              anchorNode: t.node,
              anchorOffset: t.offset,
              focusNode: e.node,
              focusOffset: e.offset,
            });
        }
        listenForScroll() {
          this.parentCheck = -1;
          let t = 0,
            e = null;
          for (let i = this.dom; i; )
            if (1 == i.nodeType)
              !e && t < this.scrollTargets.length && this.scrollTargets[t] == i
                ? t++
                : e || (e = this.scrollTargets.slice(0, t)),
                e && e.push(i),
                (i = i.assignedSlot || i.parentNode);
            else {
              if (11 != i.nodeType) break;
              i = i.host;
            }
          if (
            (t < this.scrollTargets.length &&
              !e &&
              (e = this.scrollTargets.slice(0, t)),
            e)
          ) {
            for (let t of this.scrollTargets)
              t.removeEventListener('scroll', this.onScroll);
            for (let t of (this.scrollTargets = e))
              t.addEventListener('scroll', this.onScroll);
          }
        }
        ignore(t) {
          if (!this.active) return t();
          try {
            return this.stop(), t();
          } finally {
            this.start(), this.clear();
          }
        }
        start() {
          this.active ||
            (this.observer.observe(this.dom, fi),
            this.dom.ownerDocument.addEventListener(
              'selectionchange',
              this.onSelectionChange
            ),
            gi &&
              this.dom.addEventListener(
                'DOMCharacterDataModified',
                this.onCharData
              ),
            (this.active = !0));
        }
        stop() {
          this.active &&
            ((this.active = !1),
            this.observer.disconnect(),
            this.dom.ownerDocument.removeEventListener(
              'selectionchange',
              this.onSelectionChange
            ),
            gi &&
              this.dom.removeEventListener(
                'DOMCharacterDataModified',
                this.onCharData
              ));
        }
        clearSelection() {
          this.ignoreSelection.set(this.selectionRange);
        }
        clear() {
          this.observer.takeRecords(),
            (this.queue.length = 0),
            this.clearSelection();
        }
        flushSoon() {
          this.delayedFlush < 0 &&
            (this.delayedFlush = window.setTimeout(() => {
              (this.delayedFlush = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.delayedFlush >= 0 &&
            (window.clearTimeout(this.delayedFlush),
            (this.delayedFlush = -1),
            this.flush());
        }
        flush() {
          if (this.delayedFlush >= 0) return;
          this.lastFlush = Date.now();
          let t = this.queue;
          for (let h of this.observer.takeRecords()) t.push(h);
          t.length && (this.queue = []);
          let e = this.selectionRange,
            i = !this.ignoreSelection.eq(e) && c(this.dom, e);
          if (0 == t.length && !i) return;
          let s = -1,
            n = -1,
            o = !1;
          for (let h of t) {
            let t = this.readMutation(h);
            t &&
              (t.typeOver && (o = !0),
              -1 == s
                ? ({ from: s, to: n } = t)
                : ((s = Math.min(t.from, s)), (n = Math.max(t.to, n))));
          }
          let r = this.view.state;
          (s > -1 || i) && this.onChange(s, n, o),
            this.view.state == r &&
              (this.view.docView.dirty &&
                (this.ignore(() => this.view.docView.sync()),
                (this.view.docView.dirty = 0)),
              i && this.view.docView.updateSelection()),
            this.clearSelection();
        }
        readMutation(t) {
          let e = this.view.docView.nearest(t.target);
          if (!e || e.ignoreMutation(t)) return null;
          if (
            (e.markDirty('attributes' == t.type),
            'attributes' == t.type && (e.dirty |= 4),
            'childList' == t.type)
          ) {
            let i = mi(e, t.previousSibling || t.target.previousSibling, -1),
              s = mi(e, t.nextSibling || t.target.nextSibling, 1);
            return {
              from: i ? e.posAfter(i) : e.posAtStart,
              to: s ? e.posBefore(s) : e.posAtEnd,
              typeOver: !1,
            };
          }
          return 'characterData' == t.type
            ? {
                from: e.posAtStart,
                to: e.posAtEnd,
                typeOver: t.target.nodeValue == t.oldValue,
              }
            : null;
        }
        destroy() {
          this.stop(), this.intersection && this.intersection.disconnect();
          for (let t of this.scrollTargets)
            t.removeEventListener('scroll', this.onScroll);
          window.removeEventListener('scroll', this.onScroll),
            clearTimeout(this.parentCheck);
        }
      }

      function mi(t, e, i) {
        for (; e; ) {
          let s = T.get(e);
          if (s && s.parent == t) return s;
          let n = e.parentNode;
          e = n != t.dom ? n : i > 0 ? e.nextSibling : e.previousSibling;
        }
        return null;
      }

      function wi(t, e, i, n) {
        let o,
          r,
          h,
          l = t.state.selection.main;
        if (e > -1 && (h = t.docView.domBoundsAround(e, i, 0))) {
          let { from: e, to: i } = h,
            n =
              t.docView.impreciseHead || t.docView.impreciseAnchor
                ? []
                : (function (t) {
                    let e = [];
                    if (t.root.activeElement != t.contentDOM) return e;
                    let {
                      anchorNode: i,
                      anchorOffset: s,
                      focusNode: n,
                      focusOffset: o,
                    } = t.observer.selectionRange;
                    i &&
                      (e.push(new yi(i, s)),
                      (n == i && o == s) || e.push(new yi(n, o)));
                    return e;
                  })(t),
            a = new vi(n, t);
          a.readRange(h.startDOM, h.endDOM),
            (r = (function (t, e) {
              if (0 == t.length) return null;
              let i = t[0].pos,
                n = 2 == t.length ? t[1].pos : i;
              return i > -1 && n > -1 ? s.f.single(i + e, n + e) : null;
            })(n, e));
          let c = l.from,
            d = null;
          ((8 === t.inputState.lastKeyCode &&
            t.inputState.lastKeyTime > Date.now() - 100) ||
            (j.android && a.text.length < i - e)) &&
            ((c = l.to), (d = 'end'));
          let u = (function (t, e, i, s) {
            let n = Math.min(t.length, e.length),
              o = 0;
            for (; o < n && t.charCodeAt(o) == e.charCodeAt(o); ) o++;
            if (o == n && t.length == e.length) return null;
            let r = t.length,
              h = e.length;
            for (
              ;
              r > 0 && h > 0 && t.charCodeAt(r - 1) == e.charCodeAt(h - 1);

            )
              r--, h--;
            if ('end' == s) {
              i -= r + Math.max(0, o - Math.min(r, h)) - o;
            }
            if (r < o && t.length < e.length) {
              (o -= i <= o && i >= r ? o - i : 0), (h = o + (h - r)), (r = o);
            } else if (h < o) {
              (o -= i <= o && i >= h ? o - i : 0), (r = o + (r - h)), (h = o);
            }
            return {
              from: o,
              toA: r,
              toB: h,
            };
          })(t.state.sliceDoc(e, i), a.text, c - e, d);
          u &&
            (o = {
              from: e + u.from,
              to: e + u.toA,
              insert: t.state.toText(a.text.slice(u.from, u.toB)),
            });
        } else if (t.hasFocus || !t.state.facet(kt)) {
          let e = t.observer.selectionRange,
            { impreciseHead: i, impreciseAnchor: n } = t.docView,
            o =
              (i && i.node == e.focusNode && i.offset == e.focusOffset) ||
              !a(t.contentDOM, e.focusNode)
                ? t.state.selection.main.head
                : t.docView.posFromDOM(e.focusNode, e.focusOffset),
            h =
              (n && n.node == e.anchorNode && n.offset == e.anchorOffset) ||
              !a(t.contentDOM, e.anchorNode)
                ? t.state.selection.main.anchor
                : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
          (o == l.head && h == l.anchor) || (r = s.f.single(h, o));
        }
        if (o || r)
          if (
            (!o && n && !l.empty && r && r.main.empty
              ? (o = {
                  from: l.from,
                  to: l.to,
                  insert: t.state.doc.slice(l.from, l.to),
                })
              : o &&
                o.from >= l.from &&
                o.to <= l.to &&
                (o.from != l.from || o.to != l.to) &&
                l.to - l.from - (o.to - o.from) <= 4 &&
                (o = {
                  from: l.from,
                  to: l.to,
                  insert: t.state.doc
                    .slice(l.from, o.from)
                    .append(o.insert)
                    .append(t.state.doc.slice(o.to, l.to)),
                }),
            o)
          ) {
            let e = t.state;
            if (
              (j.android &&
                ((o.from == l.from &&
                  o.to == l.to &&
                  1 == o.insert.length &&
                  2 == o.insert.lines &&
                  M(t.contentDOM, 'Enter', 13)) ||
                  (o.from == l.from - 1 &&
                    o.to == l.to &&
                    0 == o.insert.length &&
                    M(t.contentDOM, 'Backspace', 8)) ||
                  (o.from == l.from &&
                    o.to == l.to + 1 &&
                    0 == o.insert.length &&
                    M(t.contentDOM, 'Delete', 46)))) ||
              (j.ios && t.inputState.flushIOSKey(t))
            )
              return;
            let i,
              s = o.insert.toString();
            if (t.state.facet(At).some((e) => e(t, o.from, o.to, s))) return;
            if (
              (t.inputState.composing >= 0 && t.inputState.composing++,
              o.from >= l.from &&
                o.to <= l.to &&
                o.to - o.from >= (l.to - l.from) / 3 &&
                (!r ||
                  (r.main.empty && r.main.from == o.from + o.insert.length)))
            ) {
              let s = l.from < o.from ? e.sliceDoc(l.from, o.from) : '',
                n = l.to > o.to ? e.sliceDoc(o.to, l.to) : '';
              i = e.replaceSelection(
                t.state.toText(
                  s + o.insert.sliceString(0, void 0, t.state.lineBreak) + n
                )
              );
            } else {
              let t = e.changes(o);
              i = {
                changes: t,
                selection:
                  r && !e.selection.main.eq(r.main) && r.main.to <= t.newLength
                    ? e.selection.replaceRange(r.main)
                    : void 0,
              };
            }
            let n = 'input.type';
            t.composing &&
              ((n += '.compose'),
              t.inputState.compositionFirstChange &&
                ((n += '.start'), (t.inputState.compositionFirstChange = !1))),
              t.dispatch(i, {
                scrollIntoView: !0,
                userEvent: n,
              });
          } else if (r && !r.main.eq(l)) {
            let e = !1,
              i = 'select';
            t.inputState.lastSelectionTime > Date.now() - 50 &&
              ('select' == t.inputState.lastSelectionOrigin && (e = !0),
              (i = t.inputState.lastSelectionOrigin)),
              t.dispatch({
                selection: r,
                scrollIntoView: e,
                userEvent: i,
              });
          }
      }
      class vi {
        constructor(t, e) {
          (this.points = t),
            (this.view = e),
            (this.text = ''),
            (this.lineBreak = e.state.lineBreak);
        }
        readRange(t, e) {
          if (!t) return;
          let i = t.parentNode;
          for (let s = t; ; ) {
            this.findPointBefore(i, s), this.readNode(s);
            let t = s.nextSibling;
            if (t == e) break;
            let n = T.get(s),
              o = T.get(t);
            ((n ? n.breakAfter : bi(s)) ||
              ((o ? o.breakAfter : bi(t)) &&
                ('BR' != s.nodeName || s.cmIgnore))) &&
              (this.text += this.lineBreak),
              (s = t);
          }
          this.findPointBefore(i, e);
        }
        readNode(t) {
          if (t.cmIgnore) return;
          let e,
            i = T.get(t),
            s = i && i.overrideDOMText;
          null != s
            ? (e = s.sliceString(0, void 0, this.lineBreak))
            : 3 == t.nodeType
            ? (e = t.nodeValue)
            : 'BR' == t.nodeName
            ? (e = t.nextSibling ? this.lineBreak : '')
            : 1 == t.nodeType && this.readRange(t.firstChild, null),
            null != e &&
              (this.findPointIn(t, e.length),
              (this.text += e),
              j.chrome &&
                13 == this.view.inputState.lastKeyCode &&
                !t.nextSibling &&
                /\n\n$/.test(this.text) &&
                (this.text = this.text.slice(0, -1)));
        }
        findPointBefore(t, e) {
          for (let i of this.points)
            i.node == t &&
              t.childNodes[i.offset] == e &&
              (i.pos = this.text.length);
        }
        findPointIn(t, e) {
          for (let i of this.points)
            i.node == t && (i.pos = this.text.length + Math.min(i.offset, e));
        }
      }

      function bi(t) {
        return (
          1 == t.nodeType &&
          /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)
        );
      }
      class yi {
        constructor(t, e) {
          (this.node = t), (this.offset = e), (this.pos = -1);
        }
      }
      class Si {
        constructor(t = {}) {
          (this.plugins = []),
            (this.editorAttrs = {}),
            (this.contentAttrs = {}),
            (this.bidiCache = []),
            (this.updateState = 2),
            (this.measureScheduled = -1),
            (this.measureRequests = []),
            (this.contentDOM = document.createElement('div')),
            (this.scrollDOM = document.createElement('div')),
            (this.scrollDOM.tabIndex = -1),
            (this.scrollDOM.className = 'cm-scroller'),
            this.scrollDOM.appendChild(this.contentDOM),
            (this.announceDOM = document.createElement('div')),
            (this.announceDOM.style.cssText =
              'position: absolute; top: -10000px'),
            this.announceDOM.setAttribute('aria-live', 'polite'),
            (this.dom = document.createElement('div')),
            this.dom.appendChild(this.announceDOM),
            this.dom.appendChild(this.scrollDOM),
            (this._dispatch = t.dispatch || ((t) => this.update([t]))),
            (this.dispatch = this.dispatch.bind(this)),
            (this.root = t.root || document),
            (this.viewState = new Je(t.state || s.g.create())),
            (this.plugins = this.state
              .facet(Tt)
              .map((t) => new Lt(t).update(this))),
            (this.observer = new pi(
              this,
              (t, e, i) => {
                wi(this, t, e, i);
              },
              (t) => {
                this.inputState.runScrollHandlers(this, t),
                  this.observer.intersecting && this.measure();
              }
            )),
            (this.inputState = new me(this)),
            (this.docView = new Ft(this)),
            this.mountStyles(),
            this.updateAttrs(),
            (this.updateState = 0),
            window.addEventListener('resize', () => {
              -1 == Mi && (Mi = setTimeout(ki, 50));
            }),
            this.requestMeasure(),
            t.parent && t.parent.appendChild(this.dom);
        }
        get state() {
          return this.viewState.state;
        }
        get viewport() {
          return this.viewState.viewport;
        }
        get visibleRanges() {
          return this.viewState.visibleRanges;
        }
        get inView() {
          return this.viewState.inView;
        }
        get composing() {
          return this.inputState.composing > 0;
        }
        dispatch(...t) {
          this._dispatch(
            1 == t.length && t[0] instanceof s.m
              ? t[0]
              : this.state.update(...t)
          );
        }
        update(t) {
          if (0 != this.updateState)
            throw new Error(
              'Calls to EditorView.update are not allowed while an update is in progress'
            );
          let e,
            i,
            n = !1,
            o = this.state;
          for (let s of t) {
            if (s.startState != o)
              throw new RangeError(
                "Trying to update state with a transaction that doesn't start from the previous state."
              );
            o = s.state;
          }
          if (o.facet(s.g.phrases) != this.state.facet(s.g.phrases))
            return this.setState(o);
          e = new Wt(this, o, t);
          try {
            (this.updateState = 2),
              (i = t.some((t) => t.scrollIntoView) ? o.selection.main : null),
              this.viewState.update(e, i),
              (this.bidiCache = Ci.update(this.bidiCache, e.changes)),
              e.empty || (this.updatePlugins(e), this.inputState.update(e)),
              (n = this.docView.update(e)),
              this.state.facet(Ht) != this.styleModules && this.mountStyles(),
              this.updateAttrs(),
              this.showAnnouncements(t);
          } finally {
            this.updateState = 0;
          }
          if (
            ((n || i || this.viewState.mustEnforceCursorAssoc) &&
              this.requestMeasure(),
            !e.empty)
          )
            for (let s of this.state.facet(xt)) s(e);
        }
        setState(t) {
          if (0 != this.updateState)
            throw new Error(
              'Calls to EditorView.setState are not allowed while an update is in progress'
            );
          this.updateState = 2;
          try {
            for (let t of this.plugins) t.destroy(this);
            (this.viewState = new Je(t)),
              (this.plugins = t.facet(Tt).map((t) => new Lt(t).update(this))),
              (this.docView = new Ft(this)),
              this.inputState.ensureHandlers(this),
              this.mountStyles(),
              this.updateAttrs(),
              (this.bidiCache = []);
          } finally {
            this.updateState = 0;
          }
          this.requestMeasure();
        }
        updatePlugins(t) {
          let e = t.startState.facet(Tt),
            i = t.state.facet(Tt);
          if (e != i) {
            let s = [];
            for (let n of i) {
              let i = e.indexOf(n);
              if (i < 0) s.push(new Lt(n));
              else {
                let e = this.plugins[i];
                (e.mustUpdate = t), s.push(e);
              }
            }
            for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
            (this.plugins = s), this.inputState.ensureHandlers(this);
          } else for (let s of this.plugins) s.mustUpdate = t;
          for (let s = 0; s < this.plugins.length; s++)
            this.plugins[s] = this.plugins[s].update(this);
        }
        measure(t = !0) {
          this.measureScheduled > -1 &&
            cancelAnimationFrame(this.measureScheduled),
            (this.measureScheduled = -1),
            t && this.observer.flush();
          let e = null;
          try {
            for (let t = 0; ; t++) {
              this.updateState = 1;
              let s = this.viewState.measure(this.docView, t > 0),
                n = this.measureRequests;
              if (!s && !n.length && null == this.viewState.scrollTo) break;
              if (((this.measureRequests = []), t > 5)) {
                console.warn('Viewport failed to stabilize');
                break;
              }
              let o = n.map((t) => {
                  try {
                    return t.read(this);
                  } catch (e) {
                    return Mt(this.state, e), Di;
                  }
                }),
                r = new Wt(this, this.state);
              (r.flags |= s),
                e ? (e.flags |= s) : (e = r),
                (this.updateState = 2),
                r.empty || (this.updatePlugins(r), this.inputState.update(r)),
                this.updateAttrs(),
                s && this.docView.update(r);
              for (let t = 0; t < n.length; t++)
                if (o[t] != Di)
                  try {
                    n[t].write(o[t], this);
                  } catch (i) {
                    Mt(this.state, i);
                  }
              if (
                (this.viewState.scrollTo &&
                  (this.docView.scrollPosIntoView(
                    this.viewState.scrollTo.head,
                    this.viewState.scrollTo.assoc
                  ),
                  (this.viewState.scrollTo = null)),
                !(4 & s) && 0 == this.measureRequests.length)
              )
                break;
            }
          } finally {
            this.updateState = 0;
          }
          if (((this.measureScheduled = -1), e && !e.empty))
            for (let s of this.state.facet(xt)) s(e);
        }
        get themeClasses() {
          return (
            hi +
            ' ' +
            (this.state.facet(ri) ? ai : li) +
            ' ' +
            this.state.facet(oi)
          );
        }
        updateAttrs() {
          let t = et(this.state.facet(Bt), {
            class:
              'cm-editor' +
              (this.hasFocus ? ' cm-focused ' : ' ') +
              this.themeClasses,
          });
          st(this.dom, this.editorAttrs, t), (this.editorAttrs = t);
          let e = et(this.state.facet(Nt), {
            spellcheck: 'false',
            autocorrect: 'off',
            autocapitalize: 'off',
            contenteditable: this.state.facet(kt)
              ? D()
                ? 'plaintext-only'
                : 'true'
              : 'false',
            class: 'cm-content',
            style: `${j.tabSize}: ${this.state.tabSize}`,
            role: 'textbox',
            'aria-multiline': 'true',
          });
          st(this.contentDOM, this.contentAttrs, e), (this.contentAttrs = e);
        }
        showAnnouncements(t) {
          let e = !0;
          for (let i of t)
            for (let t of i.effects)
              if (t.is(Si.announce)) {
                e && (this.announceDOM.textContent = ''),
                  (e = !1),
                  (this.announceDOM.appendChild(
                    document.createElement('div')
                  ).textContent = t.value);
              }
        }
        mountStyles() {
          (this.styleModules = this.state.facet(Ht)),
            o.a.mount(this.root, this.styleModules.concat(ui).reverse());
        }
        readMeasured() {
          if (2 == this.updateState)
            throw new Error(
              "Reading the editor layout isn't allowed during an update"
            );
          0 == this.updateState &&
            this.measureScheduled > -1 &&
            this.measure(!1);
        }
        requestMeasure(t) {
          if (
            (this.measureScheduled < 0 &&
              (this.measureScheduled = requestAnimationFrame(() =>
                this.measure()
              )),
            t)
          ) {
            if (null != t.key)
              for (let e = 0; e < this.measureRequests.length; e++)
                if (this.measureRequests[e].key === t.key)
                  return void (this.measureRequests[e] = t);
            this.measureRequests.push(t);
          }
        }
        pluginField(t) {
          let e = [];
          for (let i of this.plugins) i.update(this).takeField(t, e);
          return e;
        }
        plugin(t) {
          for (let e of this.plugins)
            if (e.spec == t) return e.update(this).value;
          return null;
        }
        blockAtHeight(t, e) {
          return (
            this.readMeasured(),
            this.viewState.blockAtHeight(t, Ai(e, this.contentDOM))
          );
        }
        visualLineAtHeight(t, e) {
          return (
            this.readMeasured(),
            this.viewState.lineAtHeight(t, Ai(e, this.contentDOM))
          );
        }
        viewportLines(t, e) {
          let { from: i, to: s } = this.viewport;
          this.viewState.forEachLine(i, s, t, Ai(e, this.contentDOM));
        }
        visualLineAt(t, e = 0) {
          return this.viewState.lineAt(t, e);
        }
        get contentHeight() {
          return this.viewState.contentHeight;
        }
        moveByChar(t, e, i) {
          return pe(this, t, ge(this, t, e, i));
        }
        moveByGroup(t, e) {
          return pe(
            this,
            t,
            ge(this, t, e, (e) =>
              (function (t, e, i) {
                let n = t.state.charCategorizer(e),
                  o = n(i);
                return (t) => {
                  let e = n(t);
                  return o == s.d.Space && (o = e), o == e;
                };
              })(this, t.head, e)
            )
          );
        }
        moveToLineBoundary(t, e, i = !0) {
          return (function (t, e, i, n) {
            let o = t.state.doc.lineAt(e.head),
              r =
                n && t.lineWrapping
                  ? t.coordsAtPos(
                      e.assoc < 0 && e.head > o.from ? e.head - 1 : e.head
                    )
                  : null;
            if (r) {
              let e = t.dom.getBoundingClientRect(),
                n = t.posAtCoords({
                  x:
                    i == (t.textDirection == Kt.LTR) ? e.right - 1 : e.left + 1,
                  y: (r.top + r.bottom) / 2,
                });
              if (null != n) return s.f.cursor(n, i ? -1 : 1);
            }
            let h = ut.find(t.docView, e.head),
              l = h ? (i ? h.posAtEnd : h.posAtStart) : i ? o.to : o.from;
            return s.f.cursor(l, i ? -1 : 1);
          })(this, t, e, i);
        }
        moveVertically(t, e, i) {
          return pe(
            this,
            t,
            (function (t, e, i, n) {
              let o = e.head,
                r = i ? 1 : -1;
              if (o == (i ? t.state.doc.length : 0)) return s.f.cursor(o);
              let h,
                l = e.goalColumn,
                a = t.contentDOM.getBoundingClientRect(),
                c = t.coordsAtPos(o);
              if (c)
                null == l && (l = c.left - a.left),
                  (h = r < 0 ? c.top : c.bottom);
              else {
                let e = t.viewState.lineAt(
                  o,
                  t.dom.getBoundingClientRect().top
                );
                null == l &&
                  (l = Math.min(
                    a.right - a.left,
                    t.defaultCharacterWidth * (o - e.from)
                  )),
                  (h = r < 0 ? e.top : e.bottom);
              }
              let d = a.left + l,
                u = null !== n && void 0 !== n ? n : t.defaultLineHeight >> 1;
              for (let f = 0; ; f += 10) {
                let e = h + (u + f) * r,
                  i = ue(
                    t,
                    {
                      x: d,
                      y: e,
                    },
                    !1,
                    r
                  );
                if (e < a.top || e > a.bottom || (r < 0 ? i < o : i > o))
                  return s.f.cursor(i, void 0, void 0, l);
              }
            })(this, t, e, i)
          );
        }
        scrollPosIntoView(t) {
          (this.viewState.scrollTo = s.f.cursor(t)), this.requestMeasure();
        }
        domAtPos(t) {
          return this.docView.domAtPos(t);
        }
        posAtDOM(t, e = 0) {
          return this.docView.posFromDOM(t, e);
        }
        posAtCoords(t, e = !0) {
          return this.readMeasured(), ue(this, t, e);
        }
        coordsAtPos(t, e = 1) {
          this.readMeasured();
          let i = this.docView.coordsAt(t, e);
          if (!i || i.left == i.right) return i;
          let s = this.state.doc.lineAt(t),
            n = this.bidiSpans(s);
          return w(
            i,
            (n[Zt.find(n, t - s.from, -1, e)].dir == Kt.LTR) == e > 0
          );
        }
        get defaultCharacterWidth() {
          return this.viewState.heightOracle.charWidth;
        }
        get defaultLineHeight() {
          return this.viewState.heightOracle.lineHeight;
        }
        get textDirection() {
          return this.viewState.heightOracle.direction;
        }
        get lineWrapping() {
          return this.viewState.heightOracle.lineWrapping;
        }
        bidiSpans(t) {
          if (t.length > xi) return ie(t.length);
          let e = this.textDirection;
          for (let s of this.bidiCache)
            if (s.from == t.from && s.dir == e) return s.order;
          let i = ee(t.text, this.textDirection);
          return this.bidiCache.push(new Ci(t.from, t.to, e, i)), i;
        }
        get hasFocus() {
          var t;
          return (
            (document.hasFocus() ||
              (j.safari &&
                (null === (t = this.inputState) || void 0 === t
                  ? void 0
                  : t.lastContextMenu) >
                  Date.now() - 3e4)) &&
            this.root.activeElement == this.contentDOM
          );
        }
        focus() {
          this.observer.ignore(() => {
            x(this.contentDOM), this.docView.updateSelection();
          });
        }
        destroy() {
          for (let t of this.plugins) t.destroy(this);
          this.inputState.destroy(),
            this.dom.remove(),
            this.observer.destroy(),
            this.measureScheduled > -1 &&
              cancelAnimationFrame(this.measureScheduled);
        }
        static domEventHandlers(t) {
          return Et.define(() => ({}), {
            eventHandlers: t,
          });
        }
        static theme(t, e) {
          let i = o.a.newName(),
            s = [oi.of(i), Ht.of(di(`.${i}`, t))];
          return e && e.dark && s.push(ri.of(!0)), s;
        }
        static baseTheme(t) {
          return s.j.fallback(Ht.of(di('.' + hi, t, ci)));
        }
      }
      (Si.styleModule = Ht),
        (Si.inputHandler = At),
        (Si.exceptionSink = St),
        (Si.updateListener = xt),
        (Si.editable = kt),
        (Si.mouseSelectionStyle = yt),
        (Si.dragMovesSelection = bt),
        (Si.clickAddsSelectionRange = vt),
        (Si.decorations = Vt),
        (Si.contentAttributes = Nt),
        (Si.editorAttributes = Bt),
        (Si.lineWrapping = Si.contentAttributes.of({
          class: 'cm-lineWrapping',
        })),
        (Si.announce = s.k.define());
      const xi = 4096;

      function Ai(t, e) {
        return null == t ? e.getBoundingClientRect().top : t;
      }
      let Mi = -1;

      function ki() {
        Mi = -1;
        let t = document.querySelectorAll('.cm-content');
        for (let e = 0; e < t.length; e++) {
          let i = T.get(t[e]);
          i && i.editorView.requestMeasure();
        }
      }
      const Di = {};
      class Ci {
        constructor(t, e, i, s) {
          (this.from = t), (this.to = e), (this.dir = i), (this.order = s);
        }
        static update(t, e) {
          if (e.empty) return t;
          let i = [],
            s = t.length ? t[t.length - 1].dir : Kt.LTR;
          for (let n = Math.max(0, t.length - 10); n < t.length; n++) {
            let o = t[n];
            o.dir != s ||
              e.touchesRange(o.from, o.to) ||
              i.push(
                new Ci(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.order)
              );
          }
          return i;
        }
      }
      const Oi =
        'undefined' == typeof navigator
          ? 'key'
          : /Mac/.test(navigator.platform)
          ? 'mac'
          : /Win/.test(navigator.platform)
          ? 'win'
          : /Linux|X11/.test(navigator.platform)
          ? 'linux'
          : 'key';

      function Ti(t, e, i) {
        return (
          e.altKey && (t = 'Alt-' + t),
          e.ctrlKey && (t = 'Ctrl-' + t),
          e.metaKey && (t = 'Meta-' + t),
          !1 !== i && e.shiftKey && (t = 'Shift-' + t),
          t
        );
      }
      const Ei = Si.domEventHandlers({
          keydown: (t, e) => Hi(Bi(e.state), t, e, 'editor'),
        }),
        Ri = s.h.define({
          enables: Ei,
        }),
        Li = new WeakMap();

      function Bi(t) {
        let e = t.facet(Ri),
          i = Li.get(e);
        return (
          i ||
            Li.set(
              e,
              (i = (function (t, e = Oi) {
                let i = Object.create(null),
                  s = Object.create(null),
                  n = (t, e) => {
                    let i = s[t];
                    if (null == i) s[t] = e;
                    else if (i != e)
                      throw new Error(
                        'Key binding ' +
                          t +
                          ' is used both as a regular binding and as a multi-stroke prefix'
                      );
                  },
                  o = (t, s, o, r) => {
                    let h = i[t] || (i[t] = Object.create(null)),
                      l = s.split(/ (?!$)/).map((t) =>
                        (function (t, e) {
                          const i = t.split(/-(?!$)/);
                          let s,
                            n,
                            o,
                            r,
                            h = i[i.length - 1];
                          'Space' == h && (h = ' ');
                          for (let l = 0; l < i.length - 1; ++l) {
                            const t = i[l];
                            if (/^(cmd|meta|m)$/i.test(t)) r = !0;
                            else if (/^a(lt)?$/i.test(t)) s = !0;
                            else if (/^(c|ctrl|control)$/i.test(t)) n = !0;
                            else if (/^s(hift)?$/i.test(t)) o = !0;
                            else {
                              if (!/^mod$/i.test(t))
                                throw new Error(
                                  'Unrecognized modifier name: ' + t
                                );
                              'mac' == e ? (r = !0) : (n = !0);
                            }
                          }
                          return (
                            s && (h = 'Alt-' + h),
                            n && (h = 'Ctrl-' + h),
                            r && (h = 'Meta-' + h),
                            o && (h = 'Shift-' + h),
                            h
                          );
                        })(t, e)
                      );
                    for (let e = 1; e < l.length; e++) {
                      let i = l.slice(0, e).join(' ');
                      n(i, !0),
                        h[i] ||
                          (h[i] = {
                            preventDefault: !0,
                            commands: [
                              (e) => {
                                let s = (Vi = {
                                  view: e,
                                  prefix: i,
                                  scope: t,
                                });
                                return (
                                  setTimeout(() => {
                                    Vi == s && (Vi = null);
                                  }, 4e3),
                                  !0
                                );
                              },
                            ],
                          });
                    }
                    let a = l.join(' ');
                    n(a, !1);
                    let c =
                      h[a] ||
                      (h[a] = {
                        preventDefault: !1,
                        commands: [],
                      });
                    c.commands.push(o), r && (c.preventDefault = !0);
                  };
                for (let r of t) {
                  let t = r[e] || r.key;
                  if (t)
                    for (let e of r.scope ? r.scope.split(' ') : ['editor'])
                      o(e, t, r.run, r.preventDefault),
                        r.shift &&
                          o(e, 'Shift-' + t, r.shift, r.preventDefault);
                }
                return i;
              })(e.reduce((t, e) => t.concat(e), [])))
            ),
          i
        );
      }

      function Ni(t, e, i) {
        return Hi(Bi(t.state), e, t, i);
      }
      let Vi = null;

      function Hi(t, e, i, s) {
        let n = Object(h.b)(e),
          o = 1 == n.length && ' ' != n,
          r = '',
          l = !1;
        Vi &&
          Vi.view == i &&
          Vi.scope == s &&
          ((r = Vi.prefix + ' '),
          (l = we.indexOf(e.keyCode) < 0) && (Vi = null));
        let a,
          c = (t) => {
            if (t) {
              for (let e of t.commands) if (e(i)) return !0;
              t.preventDefault && (l = !0);
            }
            return !1;
          },
          d = t[s];
        if (d) {
          if (c(d[r + Ti(n, e, !o)])) return !0;
          if (
            o &&
            (e.shiftKey || e.altKey || e.metaKey) &&
            (a = h.a[e.keyCode]) &&
            a != n
          ) {
            if (c(d[r + Ti(a, e, !0)])) return !0;
          } else if (o && e.shiftKey && c(d[r + Ti(n, e, !0)])) return !0;
        }
        return l;
      }
      const Pi = !j.ios,
        Wi = s.h.define({
          combine: (t) =>
            Object(s.n)(
              t,
              {
                cursorBlinkRate: 1200,
                drawRangeCursor: !0,
              },
              {
                cursorBlinkRate: (t, e) => Math.min(t, e),
                drawRangeCursor: (t, e) => t || e,
              }
            ),
        });

      function Fi(t = {}) {
        return [Wi.of(t), qi, ji];
      }
      class zi {
        constructor(t, e, i, s, n) {
          (this.left = t),
            (this.top = e),
            (this.width = i),
            (this.height = s),
            (this.className = n);
        }
        draw() {
          let t = document.createElement('div');
          return (t.className = this.className), this.adjust(t), t;
        }
        adjust(t) {
          (t.style.left = this.left + 'px'),
            (t.style.top = this.top + 'px'),
            this.width >= 0 && (t.style.width = this.width + 'px'),
            (t.style.height = this.height + 'px');
        }
        eq(t) {
          return (
            this.left == t.left &&
            this.top == t.top &&
            this.width == t.width &&
            this.height == t.height &&
            this.className == t.className
          );
        }
      }
      const qi = Et.fromClass(
          class {
            constructor(t) {
              (this.view = t),
                (this.rangePieces = []),
                (this.cursors = []),
                (this.measureReq = {
                  read: this.readPos.bind(this),
                  write: this.drawSel.bind(this),
                }),
                (this.selectionLayer = t.scrollDOM.appendChild(
                  document.createElement('div')
                )),
                (this.selectionLayer.className = 'cm-selectionLayer'),
                this.selectionLayer.setAttribute('aria-hidden', 'true'),
                (this.cursorLayer = t.scrollDOM.appendChild(
                  document.createElement('div')
                )),
                (this.cursorLayer.className = 'cm-cursorLayer'),
                this.cursorLayer.setAttribute('aria-hidden', 'true'),
                t.requestMeasure(this.measureReq),
                this.setBlinkRate();
            }
            setBlinkRate() {
              this.cursorLayer.style.animationDuration =
                this.view.state.facet(Wi).cursorBlinkRate + 'ms';
            }
            update(t) {
              let e = t.startState.facet(Wi) != t.state.facet(Wi);
              (e || t.selectionSet || t.geometryChanged || t.viewportChanged) &&
                this.view.requestMeasure(this.measureReq),
                t.transactions.some((t) => t.scrollIntoView) &&
                  (this.cursorLayer.style.animationName =
                    'cm-blink' == this.cursorLayer.style.animationName
                      ? 'cm-blink2'
                      : 'cm-blink'),
                e && this.setBlinkRate();
            }
            readPos() {
              let { state: t } = this.view,
                e = t.facet(Wi),
                i = t.selection.ranges
                  .map((t) =>
                    t.empty
                      ? []
                      : (function (t, e) {
                          if (
                            e.to <= t.viewport.from ||
                            e.from >= t.viewport.to
                          )
                            return [];
                          let i = Math.max(e.from, t.viewport.from),
                            s = Math.min(e.to, t.viewport.to),
                            n = t.textDirection == Kt.LTR,
                            o = t.contentDOM,
                            r = o.getBoundingClientRect(),
                            h = Ki(t),
                            l = window.getComputedStyle(o.firstChild),
                            a = r.left + parseInt(l.paddingLeft),
                            c = r.right - parseInt(l.paddingRight),
                            d = _i(t, i),
                            u = _i(t, s),
                            f = d.type == ot.Text ? d : null,
                            g = u.type == ot.Text ? u : null;
                          t.lineWrapping &&
                            (f && (f = Gi(t, i, f)), g && (g = Gi(t, s, g)));
                          if (f && g && f.from == g.from)
                            return m(w(e.from, e.to, f));
                          {
                            let i = f ? w(e.from, null, f) : v(d, !1),
                              s = g ? w(null, e.to, g) : v(u, !0),
                              n = [];
                            return (
                              (f || d).to < (g || u).from - 1
                                ? n.push(p(a, i.bottom, c, s.top))
                                : i.bottom < s.top &&
                                  _i(t, (i.bottom + s.top) / 2).type ==
                                    ot.Text &&
                                  (i.bottom = s.top = (i.bottom + s.top) / 2),
                              m(i).concat(n).concat(m(s))
                            );
                          }

                          function p(t, e, i, s) {
                            return new zi(
                              t - h.left,
                              e - h.top,
                              i - t,
                              s - e,
                              'cm-selectionBackground'
                            );
                          }

                          function m({ top: t, bottom: e, horizontal: i }) {
                            let s = [];
                            for (let n = 0; n < i.length; n += 2)
                              s.push(p(i[n], t, i[n + 1], e));
                            return s;
                          }

                          function w(e, i, s) {
                            let o = 1e9,
                              r = -1e9,
                              h = [];

                            function l(e, i, l, d, u) {
                              let f = t.coordsAtPos(e, e == s.to ? -2 : 2),
                                g = t.coordsAtPos(l, l == s.from ? 2 : -2);
                              (o = Math.min(f.top, g.top, o)),
                                (r = Math.max(f.bottom, g.bottom, r)),
                                u == Kt.LTR
                                  ? h.push(
                                      n && i ? a : f.left,
                                      n && d ? c : g.right
                                    )
                                  : h.push(
                                      !n && d ? a : g.left,
                                      !n && i ? c : f.right
                                    );
                            }
                            let d = null !== e && void 0 !== e ? e : s.from,
                              u = null !== i && void 0 !== i ? i : s.to;
                            for (let n of t.visibleRanges)
                              if (n.to > d && n.from < u)
                                for (
                                  let s = Math.max(n.from, d),
                                    o = Math.min(n.to, u);
                                  ;

                                ) {
                                  let n = t.state.doc.lineAt(s);
                                  for (let r of t.bidiSpans(n)) {
                                    let t = r.from + n.from,
                                      h = r.to + n.from;
                                    if (t >= o) break;
                                    h > s &&
                                      l(
                                        Math.max(t, s),
                                        null == e && t <= d,
                                        Math.min(h, o),
                                        null == i && h >= u,
                                        r.dir
                                      );
                                  }
                                  if (((s = n.to + 1), s >= o)) break;
                                }
                            return (
                              0 == h.length &&
                                l(d, null == e, u, null == i, t.textDirection),
                              {
                                top: o,
                                bottom: r,
                                horizontal: h,
                              }
                            );
                          }

                          function v(t, e) {
                            let i = r.top + (e ? t.top : t.bottom);
                            return {
                              top: i,
                              bottom: i,
                              horizontal: [],
                            };
                          }
                        })(this.view, t)
                  )
                  .reduce((t, e) => t.concat(e)),
                s = [];
              for (let n of t.selection.ranges) {
                let i = n == t.selection.main;
                if (n.empty ? !i || Pi : e.drawRangeCursor) {
                  let t = $i(this.view, n, i);
                  t && s.push(t);
                }
              }
              return {
                rangePieces: i,
                cursors: s,
              };
            }
            drawSel({ rangePieces: t, cursors: e }) {
              if (
                t.length != this.rangePieces.length ||
                t.some((t, e) => !t.eq(this.rangePieces[e]))
              ) {
                this.selectionLayer.textContent = '';
                for (let e of t) this.selectionLayer.appendChild(e.draw());
                this.rangePieces = t;
              }
              if (
                e.length != this.cursors.length ||
                e.some((t, e) => !t.eq(this.cursors[e]))
              ) {
                let t = this.cursorLayer.children;
                if (t.length !== e.length) {
                  this.cursorLayer.textContent = '';
                  for (const t of e) this.cursorLayer.appendChild(t.draw());
                } else e.forEach((e, i) => e.adjust(t[i]));
                this.cursors = e;
              }
            }
            destroy() {
              this.selectionLayer.remove(), this.cursorLayer.remove();
            }
          }
        ),
        Ii = {
          '.cm-line': {
            '& ::selection': {
              backgroundColor: 'transparent !important',
            },
            '&::selection': {
              backgroundColor: 'transparent !important',
            },
          },
        };
      Pi && (Ii['.cm-line'].caretColor = 'transparent !important');
      const ji = s.j.override(Si.theme(Ii));

      function Ki(t) {
        let e = t.scrollDOM.getBoundingClientRect();
        return {
          left:
            (t.textDirection == Kt.LTR
              ? e.left
              : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft,
          top: e.top - t.scrollDOM.scrollTop,
        };
      }

      function Gi(t, e, i) {
        let n = s.f.cursor(e);
        return {
          from: Math.max(i.from, t.moveToLineBoundary(n, !1, !0).from),
          to: Math.min(i.to, t.moveToLineBoundary(n, !0, !0).from),
          type: ot.Text,
        };
      }

      function _i(t, e) {
        let i = t.visualLineAt(e);
        if (Array.isArray(i.type))
          for (let s of i.type)
            if (s.to > e || (s.to == e && (s.to == i.to || s.type == ot.Text)))
              return s;
        return i;
      }

      function $i(t, e, i) {
        let s = t.coordsAtPos(e.head, e.assoc || 1);
        if (!s) return null;
        let n = Ki(t);
        return new zi(
          s.left - n.left,
          s.top - n.top,
          -1,
          s.bottom - s.top,
          i ? 'cm-cursor cm-cursor-primary' : 'cm-cursor cm-cursor-secondary'
        );
      }

      function Ui(t, e, i, s, n) {
        e.lastIndex = 0;
        for (
          let o, r = t.iterRange(i, s), h = i;
          !r.next().done;
          h += r.value.length
        )
          if (!r.lineBreak)
            for (; (o = e.exec(r.value)); )
              n(h + o.index, h + o.index + o[0].length, o);
      }
      class Xi {
        constructor(t) {
          let { regexp: e, decoration: i, boundary: s } = t;
          if (!e.global)
            throw new RangeError(
              "The regular expression given to MatchDecorator should have its 'g' flag set"
            );
          (this.regexp = e),
            (this.getDeco = 'function' == typeof i ? i : () => i),
            (this.boundary = s);
        }
        createDeco(t) {
          let e = new r.b();
          for (let { from: i, to: s } of t.visibleRanges)
            Ui(t.state.doc, this.regexp, i, s, (i, s, n) =>
              e.add(i, s, this.getDeco(n, t, i))
            );
          return e.finish();
        }
        updateDeco(t, e) {
          let i = 1e9,
            s = -1;
          return (
            t.docChanged &&
              t.changes.iterChanges((e, n, o, r) => {
                r > t.view.viewport.from &&
                  o < t.view.viewport.to &&
                  ((i = Math.min(o, i)), (s = Math.max(r, s)));
              }),
            t.viewportChanged || s - i > 1e3
              ? this.createDeco(t.view)
              : s > -1
              ? this.updateRange(t.view, e.map(t.changes), i, s)
              : e
          );
        }
        updateRange(t, e, i, s) {
          for (let n of t.visibleRanges) {
            let o = Math.max(n.from, i),
              r = Math.min(n.to, s);
            if (r > o) {
              let i = t.state.doc.lineAt(o),
                s = i.to < r ? t.state.doc.lineAt(r) : i,
                h = Math.max(n.from, i.from),
                l = Math.min(n.to, s.to);
              if (this.boundary) {
                for (; o > i.from; o--)
                  if (this.boundary.test(i.text[o - 1 - i.from])) {
                    h = o;
                    break;
                  }
                for (; r < s.to; r++)
                  if (this.boundary.test(s.text[r - s.from])) {
                    l = r;
                    break;
                  }
              }
              let a,
                c = [];
              if (i == s)
                for (
                  this.regexp.lastIndex = h - i.from;
                  (a = this.regexp.exec(i.text)) && a.index < l - i.from;

                ) {
                  let e = a.index + i.from;
                  c.push(this.getDeco(a, t, e).range(e, e + a[0].length));
                }
              else
                Ui(t.state.doc, this.regexp, h, l, (e, i, s) =>
                  c.push(this.getDeco(s, t, e).range(e, i))
                );
              e = e.update({
                filterFrom: h,
                filterTo: l,
                filter: (t, e) => t < h || e > l,
                add: c,
              });
            }
          }
          return e;
        }
      }
      const Yi = null != /x/.unicode ? 'gu' : 'g',
        Ji = new RegExp(
          '[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]',
          Yi
        ),
        Qi = {
          0: 'null',
          7: 'bell',
          8: 'backspace',
          10: 'newline',
          11: 'vertical tab',
          13: 'carriage return',
          27: 'escape',
          8203: 'zero width space',
          8204: 'zero width non-joiner',
          8205: 'zero width joiner',
          8206: 'left-to-right mark',
          8207: 'right-to-left mark',
          8232: 'line separator',
          8233: 'paragraph separator',
          65279: 'zero width no-break space',
          65532: 'object replacement',
        };
      let Zi = null;
      const ts = s.h.define({
        combine(t) {
          let e = Object(s.n)(t, {
            render: null,
            specialChars: Ji,
            addSpecialChars: null,
          });
          return (
            (e.replaceTabs = !(function () {
              var t;
              if (
                null == Zi &&
                'undefined' != typeof document &&
                document.body
              ) {
                let e = document.body.style;
                Zi =
                  null !=
                  (null !== (t = e.tabSize) && void 0 !== t ? t : e.MozTabSize);
              }
              return Zi || !1;
            })()) &&
              (e.specialChars = new RegExp('\t|' + e.specialChars.source, Yi)),
            e.addSpecialChars &&
              (e.specialChars = new RegExp(
                e.specialChars.source + '|' + e.addSpecialChars.source,
                Yi
              )),
            e
          );
        },
      });

      function es(t = {}) {
        return [
          ts.of(t),
          is ||
            (is = Et.fromClass(
              class {
                constructor(t) {
                  (this.view = t),
                    (this.decorations = rt.none),
                    (this.decorationCache = Object.create(null)),
                    (this.decorator = this.makeDecorator(t.state.facet(ts))),
                    (this.decorations = this.decorator.createDeco(t));
                }
                makeDecorator(t) {
                  return new Xi({
                    regexp: t.specialChars,
                    decoration: (e, i, s) => {
                      let { doc: o } = i.state,
                        r = Object(n.b)(e[0], 0);
                      if (9 == r) {
                        let t = o.lineAt(s),
                          e = i.state.tabSize,
                          r = Object(n.d)(t.text, e, s - t.from);
                        return rt.replace({
                          widget: new ns(
                            (e - (r % e)) * this.view.defaultCharacterWidth
                          ),
                        });
                      }
                      return (
                        this.decorationCache[r] ||
                        (this.decorationCache[r] = rt.replace({
                          widget: new ss(t, r),
                        }))
                      );
                    },
                    boundary: t.replaceTabs ? void 0 : /[^]/,
                  });
                }
                update(t) {
                  let e = t.state.facet(ts);
                  t.startState.facet(ts) != e
                    ? ((this.decorator = this.makeDecorator(e)),
                      (this.decorations = this.decorator.createDeco(t.view)))
                    : (this.decorations = this.decorator.updateDeco(
                        t,
                        this.decorations
                      ));
                }
              },
              {
                decorations: (t) => t.decorations,
              }
            )),
        ];
      }
      let is = null;
      class ss extends nt {
        constructor(t, e) {
          super(), (this.options = t), (this.code = e);
        }
        eq(t) {
          return t.code == this.code;
        }
        toDOM(t) {
          let e =
            (i = this.code) >= 32
              ? '\u2022'
              : 10 == i
              ? '\u2424'
              : String.fromCharCode(9216 + i);
          var i;
          let s =
              t.state.phrase('Control character') +
              ' ' +
              (Qi[this.code] || '0x' + this.code.toString(16)),
            n = this.options.render && this.options.render(this.code, s, e);
          if (n) return n;
          let o = document.createElement('span');
          return (
            (o.textContent = e),
            (o.title = s),
            o.setAttribute('aria-label', s),
            (o.className = 'cm-specialChar'),
            o
          );
        }
        ignoreEvent() {
          return !1;
        }
      }
      class ns extends nt {
        constructor(t) {
          super(), (this.width = t);
        }
        eq(t) {
          return t.width == this.width;
        }
        toDOM() {
          let t = document.createElement('span');
          return (
            (t.textContent = '\t'),
            (t.className = 'cm-tab'),
            (t.style.width = this.width + 'px'),
            t
          );
        }
        ignoreEvent() {
          return !1;
        }
      }

      function os() {
        return hs;
      }
      const rs = rt.line({
          attributes: {
            class: 'cm-activeLine',
          },
        }),
        hs = Et.fromClass(
          class {
            constructor(t) {
              this.decorations = this.getDeco(t);
            }
            update(t) {
              (t.docChanged || t.selectionSet) &&
                (this.decorations = this.getDeco(t.view));
            }
            getDeco(t) {
              let e = -1,
                i = [];
              for (let s of t.state.selection.ranges) {
                if (!s.empty) return rt.none;
                let n = t.visualLineAt(s.head);
                n.from > e && (i.push(rs.range(n.from)), (e = n.from));
              }
              return rt.set(i);
            }
          },
          {
            decorations: (t) => t.decorations,
          }
        );
    },
  },
]);
//# sourceMappingURL=4ad82c5e.ae96a80a8c7d9bc243cb.js.map

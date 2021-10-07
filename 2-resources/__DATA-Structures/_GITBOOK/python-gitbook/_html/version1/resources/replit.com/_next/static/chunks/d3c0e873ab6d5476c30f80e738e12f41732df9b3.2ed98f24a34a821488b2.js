(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    '1FcE': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return re;
      }),
        n.d(t, 'b', function () {
          return c;
        }),
        n.d(t, 'c', function () {
          return oe;
        }),
        n.d(t, 'd', function () {
          return u;
        }),
        n.d(t, 'e', function () {
          return ne;
        });
      var i = n('4eob'),
        r = n('uZp5'),
        o = n('AtEE'),
        s = n('fK0Z'),
        a = n('yqQ+');
      class l {
        constructor(e, t, n) {
          (this.state = e),
            (this.pos = t),
            (this.explicit = n),
            (this.abortListeners = []);
        }
        tokenBefore(e) {
          let t = Object(a.w)(this.state).resolveInner(this.pos, -1);
          for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
          return t
            ? {
                from: t.from,
                to: this.pos,
                text: this.state.sliceDoc(t.from, this.pos),
                type: t.type,
              }
            : null;
        }
        matchBefore(e) {
          let t = this.state.doc.lineAt(this.pos),
            n = Math.max(t.from, this.pos - 250),
            i = t.text.slice(n - t.from, this.pos - t.from),
            r = i.search(p(e, !1));
          return r < 0
            ? null
            : {
                from: n + r,
                to: this.pos,
                text: i.slice(r),
              };
        }
        get aborted() {
          return null == this.abortListeners;
        }
        addEventListener(e, t) {
          'abort' == e && this.abortListeners && this.abortListeners.push(t);
        }
      }

      function h(e) {
        let t = Object.keys(e).join(''),
          n = /\w/.test(t);
        return (
          n && (t = t.replace(/\w/g, '')),
          `[${n ? '\\w' : ''}${t.replace(/[^\w\s]/g, '\\$&')}]`
        );
      }

      function c(e) {
        let t = e.map((e) =>
            'string' == typeof e
              ? {
                  label: e,
                }
              : e
          ),
          [n, i] = t.every((e) => /^\w+$/.test(e.label))
            ? [/\w*$/, /\w+$/]
            : (function (e) {
                let t = Object.create(null),
                  n = Object.create(null);
                for (let { label: r } of e) {
                  t[r[0]] = !0;
                  for (let e = 1; e < r.length; e++) n[r[e]] = !0;
                }
                let i = h(t) + h(n) + '*$';
                return [new RegExp('^' + i), new RegExp(i)];
              })(t);
        return (e) => {
          let r = e.matchBefore(i);
          return r || e.explicit
            ? {
                from: r ? r.from : e.pos,
                options: t,
                span: n,
              }
            : null;
        };
      }

      function u(e, t) {
        return (n) => {
          for (
            let t = Object(a.w)(n.state).resolveInner(n.pos, -1);
            t;
            t = t.parent
          )
            if (e.indexOf(t.name) > -1) return null;
          return t(n);
        };
      }
      class f {
        constructor(e, t, n) {
          (this.completion = e), (this.source = t), (this.match = n);
        }
      }

      function d(e) {
        return e.selection.main.head;
      }

      function p(e, t) {
        var n;
        let { source: i } = e,
          r = t && '^' != i[0],
          o = '$' != i[i.length - 1];
        return r || o
          ? new RegExp(
              `${r ? '^' : ''}(?:${i})${o ? '$' : ''}`,
              null !== (n = e.flags) && void 0 !== n
                ? n
                : e.ignoreCase
                ? 'i'
                : ''
            )
          : e;
      }

      function m(e, t) {
        let n = t.completion.apply || t.completion.label,
          i = t.source;
        'string' == typeof n
          ? e.dispatch({
              changes: {
                from: i.from,
                to: i.to,
                insert: n,
              },
              selection: {
                anchor: i.from + n.length,
              },
              userEvent: 'input.complete',
            })
          : n(e, t.completion, i.from, i.to);
      }
      const g = new WeakMap();

      function v(e) {
        if (!Array.isArray(e)) return e;
        let t = g.get(e);
        return t || g.set(e, (t = c(e))), t;
      }
      class b {
        constructor(e) {
          (this.pattern = e),
            (this.chars = []),
            (this.folded = []),
            (this.any = []),
            (this.precise = []),
            (this.byWord = []);
          for (let t = 0; t < e.length; ) {
            let n = Object(r.b)(e, t),
              i = Object(r.c)(n);
            this.chars.push(n);
            let o = e.slice(t, t + i),
              s = o.toUpperCase();
            this.folded.push(Object(r.b)(s == o ? o.toLowerCase() : s, 0)),
              (t += i);
          }
          this.astral = e.length != this.chars.length;
        }
        match(e) {
          if (0 == this.pattern.length) return [0];
          if (e.length < this.pattern.length) return null;
          let { chars: t, folded: n, any: i, precise: o, byWord: s } = this;
          if (1 == t.length) {
            let i = Object(r.b)(e, 0);
            return i == t[0]
              ? [0, 0, Object(r.c)(i)]
              : i == n[0]
              ? [-200, 0, Object(r.c)(i)]
              : null;
          }
          let a = e.indexOf(this.pattern);
          if (0 == a) return [0, 0, this.pattern.length];
          let l = t.length,
            h = 0;
          if (a < 0) {
            for (let o = 0, s = Math.min(e.length, 200); o < s && h < l; ) {
              let s = Object(r.b)(e, o);
              (s != t[h] && s != n[h]) || (i[h++] = o), (o += Object(r.c)(s));
            }
            if (h < l) return null;
          }
          let c = 0,
            u = 0,
            f = !1,
            d = 0,
            p = -1,
            m = -1,
            g = /[a-z]/.test(e);
          for (
            let v = 0, b = Math.min(e.length, 200), x = 0;
            v < b && u < l;

          ) {
            let i = Object(r.b)(e, v);
            a < 0 &&
              (c < l && i == t[c] && (o[c++] = v),
              d < l &&
                (i == t[d] || i == n[d]
                  ? (0 == d && (p = v), (m = v), d++)
                  : (d = 0)));
            let h,
              b =
                i < 255
                  ? (i >= 48 && i <= 57) || (i >= 97 && i <= 122)
                    ? 2
                    : i >= 65 && i <= 90
                    ? 1
                    : 0
                  : (h = Object(r.g)(i)) != h.toLowerCase()
                  ? 1
                  : h != h.toUpperCase()
                  ? 2
                  : 0;
            ((1 == b && g) || (0 == x && 0 != b)) &&
              (t[u] == i || (n[u] == i && (f = !0))) &&
              (s[u++] = v),
              (x = b),
              (v += Object(r.c)(i));
          }
          return u == l && 0 == s[0]
            ? this.result((f ? -200 : 0) - 100, s, e)
            : d == l && 0 == p
            ? [-200, 0, m]
            : a > -1
            ? [-700, a, a + this.pattern.length]
            : d == l
            ? [-900, p, m]
            : u == l
            ? this.result((f ? -200 : 0) - 100 - 700, s, e)
            : 2 == t.length
            ? null
            : this.result((i[0] ? -700 : 0) - 200 - 1100, i, e);
        }
        result(e, t, n) {
          let i = [e],
            o = 1;
          for (let s of t) {
            let e = s + (this.astral ? Object(r.c)(Object(r.b)(n, s)) : 1);
            o > 1 && i[o - 1] == s
              ? (i[o - 1] = e)
              : ((i[o++] = s), (i[o++] = e));
          }
          return i;
        }
      }
      const x = i.h.define({
        combine: (e) =>
          Object(i.n)(
            e,
            {
              activateOnTyping: !0,
              override: null,
              maxRenderedOptions: 100,
              defaultKeymap: !0,
              optionClass: () => '',
              icons: !0,
              addToOptions: [],
            },
            {
              defaultKeymap: (e, t) => e && t,
              icons: (e, t) => e && t,
              optionClass: (e, t) => (n) =>
                (function (e, t) {
                  return e ? (t ? e + ' ' + t : e) : t;
                })(e(n), t(n)),
              addToOptions: (e, t) => e.concat(t),
            }
          ),
      });
      const w = o.d.baseTheme({
        '.cm-tooltip.cm-tooltip-autocomplete': {
          '& > ul': {
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            overflow: 'auto',
            maxWidth_fallback: '700px',
            maxWidth: 'min(700px, 95vw)',
            maxHeight: '10em',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            '& > li': {
              cursor: 'pointer',
              padding: '1px 1em 1px 3px',
              lineHeight: 1.2,
            },
            '& > li[aria-selected]': {
              background_fallback: '#bdf',
              backgroundColor: 'Highlight',
              color_fallback: 'white',
              color: 'HighlightText',
            },
          },
        },
        '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after':
          {
            content: '"\xb7\xb7\xb7"',
            opacity: 0.5,
            display: 'block',
            textAlign: 'center',
          },
        '.cm-tooltip.cm-completionInfo': {
          position: 'absolute',
          padding: '3px 9px',
          width: 'max-content',
          maxWidth: '300px',
        },
        '.cm-completionInfo.cm-completionInfo-left': {
          right: '100%',
        },
        '.cm-completionInfo.cm-completionInfo-right': {
          left: '100%',
        },
        '&light .cm-snippetField': {
          backgroundColor: '#00000022',
        },
        '&dark .cm-snippetField': {
          backgroundColor: '#ffffff22',
        },
        '.cm-snippetFieldPosition': {
          verticalAlign: 'text-top',
          width: 0,
          height: '1.15em',
          margin: '0 -0.7px -.7em',
          borderLeft: '1.4px dotted #888',
        },
        '.cm-completionMatchedText': {
          textDecoration: 'underline',
        },
        '.cm-completionDetail': {
          marginLeft: '0.5em',
          fontStyle: 'italic',
        },
        '.cm-completionIcon': {
          fontSize: '90%',
          width: '.8em',
          display: 'inline-block',
          textAlign: 'center',
          paddingRight: '.6em',
          opacity: '0.6',
        },
        '.cm-completionIcon-function, .cm-completionIcon-method': {
          '&:after': {
            content: "'\u0192'",
          },
        },
        '.cm-completionIcon-class': {
          '&:after': {
            content: "'\u25cb'",
          },
        },
        '.cm-completionIcon-interface': {
          '&:after': {
            content: "'\u25cc'",
          },
        },
        '.cm-completionIcon-variable': {
          '&:after': {
            content: "'\ud835\udc65'",
          },
        },
        '.cm-completionIcon-constant': {
          '&:after': {
            content: "'\ud835\udc36'",
          },
        },
        '.cm-completionIcon-type': {
          '&:after': {
            content: "'\ud835\udc61'",
          },
        },
        '.cm-completionIcon-enum': {
          '&:after': {
            content: "'\u222a'",
          },
        },
        '.cm-completionIcon-property': {
          '&:after': {
            content: "'\u25a1'",
          },
        },
        '.cm-completionIcon-keyword': {
          '&:after': {
            content: "'\ud83d\udd11\ufe0e'",
          },
        },
        '.cm-completionIcon-namespace': {
          '&:after': {
            content: "'\u25a2'",
          },
        },
        '.cm-completionIcon-text': {
          '&:after': {
            content: "'abc'",
            fontSize: '50%',
            verticalAlign: 'middle',
          },
        },
      });

      function y(e, t, n) {
        if (e <= n)
          return {
            from: 0,
            to: e,
          };
        if (t <= e >> 1) {
          let e = Math.floor(t / n);
          return {
            from: e * n,
            to: (e + 1) * n,
          };
        }
        let i = Math.floor((e - t) / n);
        return {
          from: e - (i + 1) * n,
          to: e - i * n,
        };
      }
      class k {
        constructor(e, t) {
          (this.view = e),
            (this.stateField = t),
            (this.info = null),
            (this.placeInfo = {
              read: () => this.measureInfo(),
              write: (e) => this.positionInfo(e),
              key: this,
            });
          let n = e.state.field(t),
            { options: i, selected: r } = n.open,
            o = e.state.facet(x);
          (this.optionContent = (function (e) {
            let t = e.addToOptions.slice();
            return (
              e.icons &&
                t.push({
                  render(e) {
                    let t = document.createElement('div');
                    return (
                      t.classList.add('cm-completionIcon'),
                      e.type &&
                        t.classList.add(
                          ...e.type
                            .split(/\s+/g)
                            .map((e) => 'cm-completionIcon-' + e)
                        ),
                      t.setAttribute('aria-hidden', 'true'),
                      t
                    );
                  },
                  position: 20,
                }),
              t.push(
                {
                  render(e, t, n) {
                    let i = document.createElement('span');
                    i.className = 'cm-completionLabel';
                    let { label: r } = e,
                      o = 0;
                    for (let s = 1; s < n.length; ) {
                      let e = n[s++],
                        t = n[s++];
                      e > o &&
                        i.appendChild(document.createTextNode(r.slice(o, e)));
                      let a = i.appendChild(document.createElement('span'));
                      a.appendChild(document.createTextNode(r.slice(e, t))),
                        (a.className = 'cm-completionMatchedText'),
                        (o = t);
                    }
                    return (
                      o < r.length &&
                        i.appendChild(document.createTextNode(r.slice(o))),
                      i
                    );
                  },
                  position: 50,
                },
                {
                  render(e) {
                    if (!e.detail) return null;
                    let t = document.createElement('span');
                    return (
                      (t.className = 'cm-completionDetail'),
                      (t.textContent = e.detail),
                      t
                    );
                  },
                  position: 80,
                }
              ),
              t.sort((e, t) => e.position - t.position).map((e) => e.render)
            );
          })(o)),
            (this.optionClass = o.optionClass),
            (this.range = y(i.length, r, o.maxRenderedOptions)),
            (this.dom = document.createElement('div')),
            (this.dom.className = 'cm-tooltip-autocomplete'),
            this.dom.addEventListener('mousedown', (t) => {
              for (let n, r = t.target; r && r != this.dom; r = r.parentNode)
                if (
                  'LI' == r.nodeName &&
                  (n = /-(\d+)$/.exec(r.id)) &&
                  +n[1] < i.length
                )
                  return m(e, i[+n[1]]), void t.preventDefault();
            }),
            (this.list = this.dom.appendChild(
              this.createListBox(i, n.id, this.range)
            )),
            this.list.addEventListener('scroll', () => {
              this.info && this.view.requestMeasure(this.placeInfo);
            });
        }
        mount() {
          this.updateSel();
        }
        update(e) {
          e.state.field(this.stateField) !=
            e.startState.field(this.stateField) && this.updateSel();
        }
        positioned() {
          this.info && this.view.requestMeasure(this.placeInfo);
        }
        updateSel() {
          let e = this.view.state.field(this.stateField),
            t = e.open;
          if (
            ((t.selected < this.range.from || t.selected >= this.range.to) &&
              ((this.range = y(
                t.options.length,
                t.selected,
                this.view.state.facet(x).maxRenderedOptions
              )),
              this.list.remove(),
              (this.list = this.dom.appendChild(
                this.createListBox(t.options, e.id, this.range)
              )),
              this.list.addEventListener('scroll', () => {
                this.info && this.view.requestMeasure(this.placeInfo);
              })),
            this.updateSelectedOption(t.selected))
          ) {
            this.info && (this.info.remove(), (this.info = null));
            let e = t.options[t.selected];
            e.completion.info &&
              ((this.info = this.dom.appendChild(
                (function (e, t) {
                  let n = document.createElement('div');
                  n.className = 'cm-tooltip cm-completionInfo';
                  let { info: i } = e.completion;
                  if ('string' == typeof i) n.textContent = i;
                  else {
                    let r = i(e.completion);
                    r.then
                      ? r.then(
                          (e) => n.appendChild(e),
                          (e) => Object(o.l)(t.state, e, 'completion info')
                        )
                      : n.appendChild(r);
                  }
                  return n;
                })(e, this.view)
              )),
              this.view.requestMeasure(this.placeInfo));
          }
        }
        updateSelectedOption(e) {
          let t = null;
          for (
            let n = this.list.firstChild, i = this.range.from;
            n;
            n = n.nextSibling, i++
          )
            i == e
              ? n.hasAttribute('aria-selected') ||
                (n.setAttribute('aria-selected', 'true'), (t = n))
              : n.hasAttribute('aria-selected') &&
                n.removeAttribute('aria-selected');
          return (
            t &&
              (function (e, t) {
                let n = e.getBoundingClientRect(),
                  i = t.getBoundingClientRect();
                i.top < n.top
                  ? (e.scrollTop -= n.top - i.top)
                  : i.bottom > n.bottom && (e.scrollTop += i.bottom - n.bottom);
              })(this.list, t),
            t
          );
        }
        measureInfo() {
          let e = this.dom.querySelector('[aria-selected]');
          if (!e) return null;
          let t = this.dom.getBoundingClientRect(),
            n = e.getBoundingClientRect().top - t.top;
          if (n < 0 || n > this.list.clientHeight - 10) return null;
          let i = this.view.textDirection == o.c.RTL,
            r = t.left,
            s = innerWidth - t.right;
          return (
            i && r < Math.min(300, s)
              ? (i = !1)
              : !i && s < Math.min(300, r) && (i = !0),
            {
              top: n,
              left: i,
            }
          );
        }
        positionInfo(e) {
          this.info &&
            e &&
            ((this.info.style.top = e.top + 'px'),
            this.info.classList.toggle('cm-completionInfo-left', e.left),
            this.info.classList.toggle('cm-completionInfo-right', !e.left));
        }
        createListBox(e, t, n) {
          const i = document.createElement('ul');
          (i.id = t), i.setAttribute('role', 'listbox');
          for (let r = n.from; r < n.to; r++) {
            let { completion: n, match: o } = e[r];
            const s = i.appendChild(document.createElement('li'));
            (s.id = t + '-' + r), s.setAttribute('role', 'option');
            let a = this.optionClass(n);
            a && (s.className = a);
            for (let e of this.optionContent) {
              let t = e(n, this.view.state, o);
              t && s.appendChild(t);
            }
          }
          return (
            n.from && i.classList.add('cm-completionListIncompleteTop'),
            n.to < e.length &&
              i.classList.add('cm-completionListIncompleteBottom'),
            i
          );
        }
      }

      function S(e) {
        return (
          100 * (e.boost || 0) +
          (e.apply ? 10 : 0) +
          (e.info ? 5 : 0) +
          (e.type ? 1 : 0)
        );
      }
      class C {
        constructor(e, t, n, i, r) {
          (this.options = e),
            (this.attrs = t),
            (this.tooltip = n),
            (this.timestamp = i),
            (this.selected = r);
        }
        setSelected(e, t) {
          return e == this.selected || e >= this.options.length
            ? this
            : new C(this.options, j(t, e), this.tooltip, this.timestamp, e);
        }
        static build(e, t, n, i) {
          let r = (function (e, t) {
            let n = [],
              i = 0;
            for (let s of e)
              if (s.hasResult())
                if (!1 === s.result.filter)
                  for (let e of s.result.options)
                    n.push(new f(e, s, [1e9 - i++]));
                else {
                  let e,
                    i = new b(t.sliceDoc(s.from, s.to));
                  for (let t of s.result.options)
                    (e = i.match(t.label)) &&
                      (null != t.boost && (e[0] += t.boost),
                      n.push(new f(t, s, e)));
                }
            n.sort(E);
            let r = [],
              o = null;
            for (let s of n.sort(E)) {
              if (300 == r.length) break;
              o &&
              o.label == s.completion.label &&
              o.detail == s.completion.detail
                ? S(s.completion) > S(o) && (r[r.length - 1] = s)
                : r.push(s),
                (o = s.completion);
            }
            return r;
          })(e, t);
          if (!r.length) return null;
          let o = 0;
          if (i && i.selected) {
            let e = i.options[i.selected].completion;
            for (let t = 0; t < r.length && !o; t++)
              r[t].completion == e && (o = t);
          }
          return new C(
            r,
            j(n, o),
            {
              pos: e.reduce(
                (e, t) => (t.hasResult() ? Math.min(e, t.from) : e),
                1e8
              ),
              create: ((s = B), (e) => new k(e, s)),
            },
            i ? i.timestamp : Date.now(),
            o
          );
          var s;
        }
        map(e) {
          return new C(
            this.options,
            this.attrs,
            Object.assign(Object.assign({}, this.tooltip), {
              pos: e.mapPos(this.tooltip.pos),
            }),
            this.timestamp,
            this.selected
          );
        }
      }
      class A {
        constructor(e, t, n) {
          (this.active = e), (this.id = t), (this.open = n);
        }
        static start() {
          return new A(
            M,
            'cm-ac-' + Math.floor(2e6 * Math.random()).toString(36),
            null
          );
        }
        update(e) {
          let { state: t } = e,
            n = t.facet(x),
            i = (
              n.override || t.languageDataAt('autocomplete', d(t)).map(v)
            ).map((t) =>
              (
                this.active.find((e) => e.source == t) ||
                new L(t, this.active.some((e) => 0 != e.state) ? 1 : 0)
              ).update(e, n)
            );
          i.length == this.active.length &&
            i.every((e, t) => e == this.active[t]) &&
            (i = this.active);
          let r =
            e.selection ||
            i.some(
              (t) => t.hasResult() && e.changes.touchesRange(t.from, t.to)
            ) ||
            !(function (e, t) {
              if (e == t) return !0;
              for (let n = 0, i = 0; ; ) {
                for (; n < e.length && !e[n].hasResult; ) n++;
                for (; i < t.length && !t[i].hasResult; ) i++;
                let r = n == e.length,
                  o = i == t.length;
                if (r || o) return r == o;
                if (e[n++].result != t[i++].result) return !1;
              }
            })(i, this.active)
              ? C.build(i, t, this.id, this.open)
              : this.open && e.docChanged
              ? this.open.map(e.changes)
              : this.open;
          !r &&
            i.every((e) => 1 != e.state) &&
            i.some((e) => e.hasResult()) &&
            (i = i.map((e) => (e.hasResult() ? new L(e.source, 0) : e)));
          for (let o of e.effects)
            o.is(N) && (r = r && r.setSelected(o.value, this.id));
          return i == this.active && r == this.open
            ? this
            : new A(i, this.id, r);
        }
        get tooltip() {
          return this.open ? this.open.tooltip : null;
        }
        get attrs() {
          return this.open ? this.open.attrs : O;
        }
      }
      const O = {
        'aria-autocomplete': 'list',
        'aria-expanded': 'false',
      };

      function j(e, t) {
        return {
          'aria-autocomplete': 'list',
          'aria-expanded': 'true',
          'aria-activedescendant': e + '-' + t,
          'aria-controls': e,
        };
      }
      const M = [];

      function E(e, t) {
        let n = t.match[0] - e.match[0];
        return n || e.completion.label.localeCompare(t.completion.label);
      }

      function I(e) {
        return e.isUserEvent('input.type')
          ? 'input'
          : e.isUserEvent('delete.backward')
          ? 'delete'
          : null;
      }
      class L {
        constructor(e, t, n = -1) {
          (this.source = e), (this.state = t), (this.explicitPos = n);
        }
        hasResult() {
          return !1;
        }
        update(e, t) {
          let n = I(e),
            i = this;
          n
            ? (i = i.handleUserEvent(e, n, t))
            : e.docChanged
            ? (i = i.handleChange(e))
            : e.selection && 0 != i.state && (i = new L(i.source, 0));
          for (let r of e.effects)
            if (r.is(P)) i = new L(i.source, 1, r.value ? d(e.state) : -1);
            else if (r.is(D)) i = new L(i.source, 0);
            else if (r.is(R))
              for (let e of r.value) e.source == i.source && (i = e);
          return i;
        }
        handleUserEvent(e, t, n) {
          return 'delete' != t && n.activateOnTyping
            ? new L(this.source, 1)
            : this.map(e.changes);
        }
        handleChange(e) {
          return e.changes.touchesRange(d(e.startState))
            ? new L(this.source, 0)
            : this.map(e.changes);
        }
        map(e) {
          return e.empty || this.explicitPos < 0
            ? this
            : new L(this.source, this.state, e.mapPos(this.explicitPos));
        }
      }
      class T extends L {
        constructor(e, t, n, i, r, o) {
          super(e, 2, t),
            (this.result = n),
            (this.from = i),
            (this.to = r),
            (this.span = o);
        }
        hasResult() {
          return !0;
        }
        handleUserEvent(e, t, n) {
          let i = e.changes.mapPos(this.from),
            r = e.changes.mapPos(this.to, 1),
            o = d(e.state);
          if ((this.explicitPos > -1 ? o < i : o <= i) || o > r)
            return new L(
              this.source,
              'input' == t && n.activateOnTyping ? 1 : 0
            );
          let s =
            this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
          return this.span && (i == r || this.span.test(e.state.sliceDoc(i, r)))
            ? new T(this.source, s, this.result, i, r, this.span)
            : new L(this.source, 1, s);
        }
        handleChange(e) {
          return e.changes.touchesRange(this.from, this.to)
            ? new L(this.source, 0)
            : this.map(e.changes);
        }
        map(e) {
          return e.empty
            ? this
            : new T(
                this.source,
                this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos),
                this.result,
                e.mapPos(this.from),
                e.mapPos(this.to, 1),
                this.span
              );
        }
      }
      const P = i.k.define(),
        D = i.k.define(),
        R = i.k.define({
          map: (e, t) => e.map((e) => e.map(t)),
        }),
        N = i.k.define(),
        B = i.l.define({
          create: () => A.start(),
          update: (e, t) => e.update(t),
          provide: (e) => [
            s.b.from(e, (e) => e.tooltip),
            o.d.contentAttributes.from(e, (e) => e.attrs),
          ],
        });

      function q(e, t = 'option') {
        return (n) => {
          let i = n.state.field(B, !1);
          if (!i || !i.open || Date.now() - i.open.timestamp < 75) return !1;
          let r,
            o = 1;
          'page' == t &&
            (r = n.dom.querySelector('.cm-tooltip-autocomplete')) &&
            (o = Math.max(
              2,
              Math.floor(r.offsetHeight / r.firstChild.offsetHeight)
            ));
          let s = i.open.selected + o * (e ? 1 : -1),
            { length: a } = i.open.options;
          return (
            s < 0
              ? (s = 'page' == t ? 0 : a - 1)
              : s >= a && (s = 'page' == t ? a - 1 : 0),
            n.dispatch({
              effects: N.of(s),
            }),
            !0
          );
        };
      }
      class z {
        constructor(e, t) {
          (this.active = e),
            (this.context = t),
            (this.time = Date.now()),
            (this.updates = []),
            (this.done = void 0);
        }
      }
      const F = o.f.fromClass(
        class {
          constructor(e) {
            (this.view = e),
              (this.debounceUpdate = -1),
              (this.running = []),
              (this.debounceAccept = -1),
              (this.composing = 0);
            for (let t of e.state.field(B).active)
              1 == t.state && this.startQuery(t);
          }
          update(e) {
            let t = e.state.field(B);
            if (!e.selectionSet && !e.docChanged && e.startState.field(B) == t)
              return;
            let n = e.transactions.some(
              (e) => (e.selection || e.docChanged) && !I(e)
            );
            for (let r = 0; r < this.running.length; r++) {
              let t = this.running[r];
              if (
                n ||
                (t.updates.length + e.transactions.length > 50 &&
                  t.time - Date.now() > 1e3)
              ) {
                for (let e of t.context.abortListeners)
                  try {
                    e();
                  } catch (i) {
                    Object(o.l)(this.view.state, i);
                  }
                (t.context.abortListeners = null), this.running.splice(r--, 1);
              } else t.updates.push(...e.transactions);
            }
            if (
              (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
              (this.debounceUpdate = t.active.some(
                (e) =>
                  1 == e.state &&
                  !this.running.some((t) => t.active.source == e.source)
              )
                ? setTimeout(() => this.startUpdate(), 50)
                : -1),
              0 != this.composing)
            )
              for (let r of e.transactions)
                'input' == I(r)
                  ? (this.composing = 2)
                  : 2 == this.composing && r.selection && (this.composing = 3);
          }
          startUpdate() {
            this.debounceUpdate = -1;
            let { state: e } = this.view,
              t = e.field(B);
            for (let n of t.active)
              1 != n.state ||
                this.running.some((e) => e.active.source == n.source) ||
                this.startQuery(n);
          }
          startQuery(e) {
            let { state: t } = this.view,
              n = d(t),
              i = new l(t, n, e.explicitPos == n),
              r = new z(e, i);
            this.running.push(r),
              Promise.resolve(e.source(i)).then(
                (e) => {
                  r.context.aborted ||
                    ((r.done = e || null), this.scheduleAccept());
                },
                (e) => {
                  this.view.dispatch({
                    effects: D.of(null),
                  }),
                    Object(o.l)(this.view.state, e);
                }
              );
          }
          scheduleAccept() {
            this.running.every((e) => void 0 !== e.done)
              ? this.accept()
              : this.debounceAccept < 0 &&
                (this.debounceAccept = setTimeout(() => this.accept(), 50));
          }
          accept() {
            var e;
            this.debounceAccept > -1 && clearTimeout(this.debounceAccept),
              (this.debounceAccept = -1);
            let t = [],
              n = this.view.state.facet(x);
            for (let i = 0; i < this.running.length; i++) {
              let r = this.running[i];
              if (void 0 === r.done) continue;
              if ((this.running.splice(i--, 1), r.done)) {
                let i = new T(
                  r.active.source,
                  r.active.explicitPos,
                  r.done,
                  r.done.from,
                  null !== (e = r.done.to) && void 0 !== e
                    ? e
                    : d(
                        r.updates.length
                          ? r.updates[0].startState
                          : this.view.state
                      ),
                  r.done.span && !1 !== r.done.filter
                    ? p(r.done.span, !0)
                    : null
                );
                for (let e of r.updates) i = i.update(e, n);
                if (i.hasResult()) {
                  t.push(i);
                  continue;
                }
              }
              let o = this.view.state
                .field(B)
                .active.find((e) => e.source == r.active.source);
              if (o && 1 == o.state)
                if (null == r.done) {
                  let e = new L(r.active.source, 0);
                  for (let t of r.updates) e = e.update(t, n);
                  1 != e.state && t.push(e);
                } else this.startQuery(o);
            }
            t.length &&
              this.view.dispatch({
                effects: R.of(t),
              });
          }
        },
        {
          eventHandlers: {
            compositionstart() {
              this.composing = 1;
            },
            compositionend() {
              3 == this.composing &&
                setTimeout(
                  () =>
                    this.view.dispatch({
                      effects: P.of(!1),
                    }),
                  20
                ),
                (this.composing = 0);
            },
          },
        }
      );
      class V {
        constructor(e, t, n, i) {
          (this.field = e), (this.line = t), (this.from = n), (this.to = i);
        }
      }
      class W {
        constructor(e, t, n) {
          (this.field = e), (this.from = t), (this.to = n);
        }
        map(e) {
          return new W(
            this.field,
            e.mapPos(this.from, -1),
            e.mapPos(this.to, 1)
          );
        }
      }
      class _ {
        constructor(e, t) {
          (this.lines = e), (this.fieldPositions = t);
        }
        instantiate(e, t) {
          let n = [],
            i = [t],
            r = e.doc.lineAt(t),
            o = /^\s*/.exec(r.text)[0];
          for (let s of this.lines) {
            if (n.length) {
              let n = o,
                r = /^\t*/.exec(s)[0].length;
              for (let t = 0; t < r; t++) n += e.facet(a.t);
              i.push(t + n.length - r), (s = n + s.slice(r));
            }
            n.push(s), (t += s.length + 1);
          }
          return {
            text: n,
            ranges: this.fieldPositions.map(
              (e) => new W(e.field, i[e.line] + e.from, i[e.line] + e.to)
            ),
          };
        }
        static parse(e) {
          let t,
            n = [],
            i = [],
            r = [];
          for (let o of e.split(/\r\n?|\n/)) {
            for (; (t = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o)); ) {
              let e = t[1] ? +t[1] : null,
                s = t[2] || t[3],
                a = -1;
              for (let t = 0; t < n.length; t++)
                (null != e ? n[t].seq == e : s && n[t].name == s) && (a = t);
              if (a < 0) {
                let t = 0;
                for (
                  ;
                  t < n.length &&
                  (null == e || (null != n[t].seq && n[t].seq < e));

                )
                  t++;
                n.splice(t, 0, {
                  seq: e,
                  name: s || null,
                }),
                  (a = t);
                for (let e of r) e.field >= a && e.field++;
              }
              r.push(new V(a, i.length, t.index, t.index + s.length)),
                (o = o.slice(0, t.index) + s + o.slice(t.index + t[0].length));
            }
            i.push(o);
          }
          return new _(i, r);
        }
      }
      let U = o.b.widget({
          widget: new (class extends o.g {
            toDOM() {
              let e = document.createElement('span');
              return (e.className = 'cm-snippetFieldPosition'), e;
            }
            ignoreEvent() {
              return !1;
            }
          })(),
        }),
        H = o.b.mark({
          class: 'cm-snippetField',
        });
      class J {
        constructor(e, t) {
          (this.ranges = e),
            (this.active = t),
            (this.deco = o.b.set(
              e.map((e) => (e.from == e.to ? U : H).range(e.from, e.to))
            ));
        }
        map(e) {
          return new J(
            this.ranges.map((t) => t.map(e)),
            this.active
          );
        }
        selectionInsideField(e) {
          return e.ranges.every((e) =>
            this.ranges.some(
              (t) => t.field == this.active && t.from <= e.from && t.to >= e.to
            )
          );
        }
      }
      const $ = i.k.define({
          map: (e, t) => e && e.map(t),
        }),
        G = i.k.define(),
        Q = i.l.define({
          create: () => null,
          update(e, t) {
            for (let n of t.effects) {
              if (n.is($)) return n.value;
              if (n.is(G) && e) return new J(e.ranges, n.value);
            }
            return (
              e && t.docChanged && (e = e.map(t.changes)),
              e &&
                t.selection &&
                !e.selectionInsideField(t.selection) &&
                (e = null),
              e
            );
          },
          provide: (e) =>
            o.d.decorations.from(e, (e) => (e ? e.deco : o.b.none)),
        });

      function K(e, t) {
        return i.f.create(
          e.filter((e) => e.field == t).map((e) => i.f.range(e.from, e.to))
        );
      }

      function Y(e) {
        let t = _.parse(e);
        return (e, n, o, s) => {
          let { text: a, ranges: l } = t.instantiate(e.state, o),
            h = {
              changes: {
                from: o,
                to: s,
                insert: r.a.of(a),
              },
            };
          if ((l.length && (h.selection = K(l, 0)), l.length > 1)) {
            let t = new J(l, 0),
              n = (h.effects = [$.of(t)]);
            void 0 === e.state.field(Q, !1) &&
              n.push(i.k.appendConfig.of([Q.init(() => t), te, ie, w]));
          }
          e.dispatch(e.state.update(h));
        };
      }

      function X(e) {
        return ({ state: t, dispatch: n }) => {
          let i = t.field(Q, !1);
          if (!i || (e < 0 && 0 == i.active)) return !1;
          let r = i.active + e,
            o = e > 0 && !i.ranges.some((t) => t.field == r + e);
          return (
            n(
              t.update({
                selection: K(i.ranges, r),
                effects: $.of(o ? null : new J(i.ranges, r)),
              })
            ),
            !0
          );
        };
      }
      const Z = [
          {
            key: 'Tab',
            run: X(1),
            shift: X(-1),
          },
          {
            key: 'Escape',
            run: ({ state: e, dispatch: t }) =>
              !!e.field(Q, !1) &&
              (t(
                e.update({
                  effects: $.of(null),
                })
              ),
              !0),
          },
        ],
        ee = i.h.define({
          combine: (e) => (e.length ? e[0] : Z),
        }),
        te = i.j.override(o.k.compute([ee], (e) => e.facet(ee)));

      function ne(e, t) {
        return Object.assign(Object.assign({}, t), {
          apply: Y(e),
        });
      }
      const ie = o.d.domEventHandlers({
        mousedown(e, t) {
          let n,
            i = t.state.field(Q, !1);
          if (
            !i ||
            null ==
              (n = t.posAtCoords({
                x: e.clientX,
                y: e.clientY,
              }))
          )
            return !1;
          let r = i.ranges.find((e) => e.from <= n && e.to >= n);
          return (
            !(!r || r.field == i.active) &&
            (t.dispatch({
              selection: K(i.ranges, r.field),
              effects: $.of(
                i.ranges.some((e) => e.field > r.field)
                  ? new J(i.ranges, r.field)
                  : null
              ),
            }),
            !0)
          );
        },
      });

      function re(e = {}) {
        return [B, x.of(e), F, se, w];
      }
      const oe = [
          {
            key: 'Ctrl-Space',
            run: (e) =>
              !!e.state.field(B, !1) &&
              (e.dispatch({
                effects: P.of(!0),
              }),
              !0),
          },
          {
            key: 'Escape',
            run: (e) => {
              let t = e.state.field(B, !1);
              return (
                !(!t || !t.active.some((e) => 0 != e.state)) &&
                (e.dispatch({
                  effects: D.of(null),
                }),
                !0)
              );
            },
          },
          {
            key: 'ArrowDown',
            run: q(!0),
          },
          {
            key: 'ArrowUp',
            run: q(!1),
          },
          {
            key: 'PageDown',
            run: q(!0, 'page'),
          },
          {
            key: 'PageUp',
            run: q(!1, 'page'),
          },
          {
            key: 'Enter',
            run: (e) => {
              let t = e.state.field(B, !1);
              return (
                !(!t || !t.open || Date.now() - t.open.timestamp < 75) &&
                (m(e, t.open.options[t.open.selected]), !0)
              );
            },
          },
        ],
        se = i.j.override(
          o.k.computeN([x], (e) => (e.facet(x).defaultKeymap ? [oe] : []))
        );
    },
    '4eob': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return _;
      }),
        n.d(t, 'b', function () {
          return s;
        }),
        n.d(t, 'c', function () {
          return a;
        }),
        n.d(t, 'd', function () {
          return ee;
        }),
        n.d(t, 'e', function () {
          return T;
        }),
        n.d(t, 'f', function () {
          return m;
        }),
        n.d(t, 'g', function () {
          return re;
        }),
        n.d(t, 'h', function () {
          return x;
        }),
        n.d(t, 'i', function () {
          return o;
        }),
        n.d(t, 'j', function () {
          return I;
        }),
        n.d(t, 'k', function () {
          return J;
        }),
        n.d(t, 'l', function () {
          return A;
        }),
        n.d(t, 'm', function () {
          return $;
        }),
        n.d(t, 'n', function () {
          return oe;
        });
      var i = n('uZp5');
      const r = /\r\n?|\n/;
      var o = (function (e) {
        return (
          (e[(e.Simple = 0)] = 'Simple'),
          (e[(e.TrackDel = 1)] = 'TrackDel'),
          (e[(e.TrackBefore = 2)] = 'TrackBefore'),
          (e[(e.TrackAfter = 3)] = 'TrackAfter'),
          e
        );
      })(o || (o = {}));
      class s {
        constructor(e) {
          this.sections = e;
        }
        get length() {
          let e = 0;
          for (let t = 0; t < this.sections.length; t += 2)
            e += this.sections[t];
          return e;
        }
        get newLength() {
          let e = 0;
          for (let t = 0; t < this.sections.length; t += 2) {
            let n = this.sections[t + 1];
            e += n < 0 ? this.sections[t] : n;
          }
          return e;
        }
        get empty() {
          return (
            0 == this.sections.length ||
            (2 == this.sections.length && this.sections[1] < 0)
          );
        }
        iterGaps(e) {
          for (let t = 0, n = 0, i = 0; t < this.sections.length; ) {
            let r = this.sections[t++],
              o = this.sections[t++];
            o < 0 ? (e(n, i, r), (i += r)) : (i += o), (n += r);
          }
        }
        iterChangedRanges(e, t = !1) {
          c(this, e, t);
        }
        get invertedDesc() {
          let e = [];
          for (let t = 0; t < this.sections.length; ) {
            let n = this.sections[t++],
              i = this.sections[t++];
            i < 0 ? e.push(n, i) : e.push(i, n);
          }
          return new s(e);
        }
        composeDesc(e) {
          return this.empty ? e : e.empty ? this : f(this, e);
        }
        mapDesc(e, t = !1) {
          return e.empty ? this : u(this, e, t);
        }
        mapPos(e, t = -1, n = o.Simple) {
          let i = 0,
            r = 0;
          for (let s = 0; s < this.sections.length; ) {
            let a = this.sections[s++],
              l = this.sections[s++],
              h = i + a;
            if (l < 0) {
              if (h > e) return r + (e - i);
              r += a;
            } else {
              if (
                n != o.Simple &&
                h >= e &&
                ((n == o.TrackDel && i < e && h > e) ||
                  (n == o.TrackBefore && i < e) ||
                  (n == o.TrackAfter && h > e))
              )
                return null;
              if (h > e || (h == e && t < 0 && !a))
                return e == i || t < 0 ? r : r + l;
              r += l;
            }
            i = h;
          }
          if (e > i)
            throw new RangeError(
              `Position ${e} is out of range for changeset of length ${i}`
            );
          return r;
        }
        touchesRange(e, t = e) {
          for (let n = 0, i = 0; n < this.sections.length && i <= t; ) {
            let r = i + this.sections[n++];
            if (this.sections[n++] >= 0 && i <= t && r >= e)
              return !(i < e && r > t) || 'cover';
            i = r;
          }
          return !1;
        }
        toString() {
          let e = '';
          for (let t = 0; t < this.sections.length; ) {
            let n = this.sections[t++],
              i = this.sections[t++];
            e += (e ? ' ' : '') + n + (i >= 0 ? ':' + i : '');
          }
          return e;
        }
        toJSON() {
          return this.sections;
        }
        static fromJSON(e) {
          if (
            !Array.isArray(e) ||
            e.length % 2 ||
            e.some((e) => 'number' != typeof e)
          )
            throw new RangeError('Invalid JSON representation of ChangeDesc');
          return new s(e);
        }
      }
      class a extends s {
        constructor(e, t) {
          super(e), (this.inserted = t);
        }
        apply(e) {
          if (this.length != e.length)
            throw new RangeError(
              'Applying change set to a document with the wrong length'
            );
          return (
            c(this, (t, n, i, r, o) => (e = e.replace(i, i + (n - t), o)), !1),
            e
          );
        }
        mapDesc(e, t = !1) {
          return u(this, e, t, !0);
        }
        invert(e) {
          let t = this.sections.slice(),
            n = [];
          for (let r = 0, o = 0; r < t.length; r += 2) {
            let s = t[r],
              a = t[r + 1];
            if (a >= 0) {
              (t[r] = a), (t[r + 1] = s);
              let l = r >> 1;
              for (; n.length < l; ) n.push(i.a.empty);
              n.push(s ? e.slice(o, o + s) : i.a.empty);
            }
            o += s;
          }
          return new a(t, n);
        }
        compose(e) {
          return this.empty ? e : e.empty ? this : f(this, e, !0);
        }
        map(e, t = !1) {
          return e.empty ? this : u(this, e, t, !0);
        }
        iterChanges(e, t = !1) {
          c(this, e, t);
        }
        get desc() {
          return new s(this.sections);
        }
        filter(e) {
          let t = [],
            n = [],
            i = [],
            r = new d(this);
          e: for (let o = 0, s = 0; ; ) {
            let a = o == e.length ? 1e9 : e[o++];
            for (; s < a || (s == a && 0 == r.len); ) {
              if (r.done) break e;
              let e = Math.min(r.len, a - s);
              l(i, e, -1);
              let o = -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0;
              l(t, e, o), o > 0 && h(n, t, r.text), r.forward(e), (s += e);
            }
            let c = e[o++];
            for (; s < c; ) {
              if (r.done) break e;
              let e = Math.min(r.len, c - s);
              l(t, e, -1),
                l(i, e, -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0),
                r.forward(e),
                (s += e);
            }
          }
          return {
            changes: new a(t, n),
            filtered: new s(i),
          };
        }
        toJSON() {
          let e = [];
          for (let t = 0; t < this.sections.length; t += 2) {
            let n = this.sections[t],
              i = this.sections[t + 1];
            i < 0
              ? e.push(n)
              : 0 == i
              ? e.push([n])
              : e.push([n].concat(this.inserted[t >> 1].toJSON()));
          }
          return e;
        }
        static of(e, t, n) {
          let o = [],
            s = [],
            c = 0,
            u = null;

          function f(e = !1) {
            if (!e && !o.length) return;
            c < t && l(o, t - c, -1);
            let n = new a(o, s);
            (u = u ? u.compose(n.map(u)) : n), (o = []), (s = []), (c = 0);
          }
          return (
            (function e(d) {
              if (Array.isArray(d)) for (let t of d) e(t);
              else if (d instanceof a) {
                if (d.length != t)
                  throw new RangeError(
                    `Mismatched change set length (got ${d.length}, expected ${t})`
                  );
                f(), (u = u ? u.compose(d.map(u)) : d);
              } else {
                let { from: e, to: a = e, insert: u } = d;
                if (e > a || e < 0 || a > t)
                  throw new RangeError(
                    `Invalid change range ${e} to ${a} (in doc of length ${t})`
                  );
                let p = u
                    ? 'string' == typeof u
                      ? i.a.of(u.split(n || r))
                      : u
                    : i.a.empty,
                  m = p.length;
                if (e == a && 0 == m) return;
                e < c && f(),
                  e > c && l(o, e - c, -1),
                  l(o, a - e, m),
                  h(s, o, p),
                  (c = a);
              }
            })(e),
            f(!u),
            u
          );
        }
        static empty(e) {
          return new a(e ? [e, -1] : [], []);
        }
        static fromJSON(e) {
          if (!Array.isArray(e))
            throw new RangeError('Invalid JSON representation of ChangeSet');
          let t = [],
            n = [];
          for (let r = 0; r < e.length; r++) {
            let o = e[r];
            if ('number' == typeof o) t.push(o, -1);
            else {
              if (
                !Array.isArray(o) ||
                'number' != typeof o[0] ||
                o.some((e, t) => t && 'string' != typeof e)
              )
                throw new RangeError(
                  'Invalid JSON representation of ChangeSet'
                );
              if (1 == o.length) t.push(o[0], 0);
              else {
                for (; n.length < r; ) n.push(i.a.empty);
                (n[r] = i.a.of(o.slice(1))), t.push(o[0], n[r].length);
              }
            }
          }
          return new a(t, n);
        }
      }

      function l(e, t, n, i = !1) {
        if (0 == t && n <= 0) return;
        let r = e.length - 2;
        r >= 0 && n <= 0 && n == e[r + 1]
          ? (e[r] += t)
          : 0 == t && 0 == e[r]
          ? (e[r + 1] += n)
          : i
          ? ((e[r] += t), (e[r + 1] += n))
          : e.push(t, n);
      }

      function h(e, t, n) {
        if (0 == n.length) return;
        let r = (t.length - 2) >> 1;
        if (r < e.length) e[e.length - 1] = e[e.length - 1].append(n);
        else {
          for (; e.length < r; ) e.push(i.a.empty);
          e.push(n);
        }
      }

      function c(e, t, n) {
        let r = e.inserted;
        for (let o = 0, s = 0, a = 0; a < e.sections.length; ) {
          let l = e.sections[a++],
            h = e.sections[a++];
          if (h < 0) (o += l), (s += l);
          else {
            let c = o,
              u = s,
              f = i.a.empty;
            for (
              ;
              (c += l),
                (u += h),
                h && r && (f = f.append(r[(a - 2) >> 1])),
                !(n || a == e.sections.length || e.sections[a + 1] < 0);

            )
              (l = e.sections[a++]), (h = e.sections[a++]);
            t(o, c, s, u, f), (o = c), (s = u);
          }
        }
      }

      function u(e, t, n, i = !1) {
        let r = [],
          o = i ? [] : null,
          c = new d(e),
          u = new d(t);
        for (let f = 0, d = 0; ; )
          if (-1 == c.ins) (f += c.len), c.next();
          else if (-1 == u.ins && d < f) {
            let e = Math.min(u.len, f - d);
            u.forward(e), l(r, e, -1), (d += e);
          } else if (
            u.ins >= 0 &&
            (c.done ||
              d < f ||
              (d == f && (u.len < c.len || (u.len == c.len && !n))))
          ) {
            for (l(r, u.ins, -1); f > d && !c.done && f + c.len < d + u.len; )
              (f += c.len), c.next();
            (d += u.len), u.next();
          } else {
            if (!(c.ins >= 0)) {
              if (c.done && u.done) return o ? new a(r, o) : new s(r);
              throw new Error('Mismatched change set lengths');
            }
            {
              let e = 0,
                t = f + c.len;
              for (;;)
                if (u.ins >= 0 && d > f && d + u.len < t)
                  (e += u.ins), (d += u.len), u.next();
                else {
                  if (!(-1 == u.ins && d < t)) break;
                  {
                    let n = Math.min(u.len, t - d);
                    (e += n), u.forward(n), (d += n);
                  }
                }
              l(r, e, c.ins), o && h(o, r, c.text), (f = t), c.next();
            }
          }
      }

      function f(e, t, n = !1) {
        let i = [],
          r = n ? [] : null,
          o = new d(e),
          c = new d(t);
        for (let u = !1; ; ) {
          if (o.done && c.done) return r ? new a(i, r) : new s(i);
          if (0 == o.ins) l(i, o.len, 0, u), o.next();
          else if (0 != c.len || c.done) {
            if (o.done || c.done)
              throw new Error('Mismatched change set lengths');
            {
              let e = Math.min(o.len2, c.len),
                t = i.length;
              if (-1 == o.ins) {
                let t = -1 == c.ins ? -1 : c.off ? 0 : c.ins;
                l(i, e, t, u), r && t && h(r, i, c.text);
              } else
                -1 == c.ins
                  ? (l(i, o.off ? 0 : o.len, e, u), r && h(r, i, o.textBit(e)))
                  : (l(i, o.off ? 0 : o.len, c.off ? 0 : c.ins, u),
                    r && !c.off && h(r, i, c.text));
              (u =
                (o.ins > e || (c.ins >= 0 && c.len > e)) &&
                (u || i.length > t)),
                o.forward2(e),
                c.forward(e);
            }
          } else l(i, 0, c.ins, u), r && h(r, i, c.text), c.next();
        }
      }
      class d {
        constructor(e) {
          (this.set = e), (this.i = 0), this.next();
        }
        next() {
          let { sections: e } = this.set;
          this.i < e.length
            ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
            : ((this.len = 0), (this.ins = -2)),
            (this.off = 0);
        }
        get done() {
          return -2 == this.ins;
        }
        get len2() {
          return this.ins < 0 ? this.len : this.ins;
        }
        get text() {
          let { inserted: e } = this.set,
            t = (this.i - 2) >> 1;
          return t >= e.length ? i.a.empty : e[t];
        }
        textBit(e) {
          let { inserted: t } = this.set,
            n = (this.i - 2) >> 1;
          return n >= t.length && !e
            ? i.a.empty
            : t[n].slice(this.off, null == e ? void 0 : this.off + e);
        }
        forward(e) {
          e == this.len ? this.next() : ((this.len -= e), (this.off += e));
        }
        forward2(e) {
          -1 == this.ins
            ? this.forward(e)
            : e == this.ins
            ? this.next()
            : ((this.ins -= e), (this.off += e));
        }
      }
      class p {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.flags = n);
        }
        get anchor() {
          return 16 & this.flags ? this.to : this.from;
        }
        get head() {
          return 16 & this.flags ? this.from : this.to;
        }
        get empty() {
          return this.from == this.to;
        }
        get assoc() {
          return 4 & this.flags ? -1 : 8 & this.flags ? 1 : 0;
        }
        get bidiLevel() {
          let e = 3 & this.flags;
          return 3 == e ? null : e;
        }
        get goalColumn() {
          let e = this.flags >> 5;
          return 33554431 == e ? void 0 : e;
        }
        map(e, t = -1) {
          let n = e.mapPos(this.from, t),
            i = e.mapPos(this.to, t);
          return n == this.from && i == this.to
            ? this
            : new p(n, i, this.flags);
        }
        extend(e, t = e) {
          if (e <= this.anchor && t >= this.anchor) return m.range(e, t);
          let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
          return m.range(this.anchor, n);
        }
        eq(e) {
          return this.anchor == e.anchor && this.head == e.head;
        }
        toJSON() {
          return {
            anchor: this.anchor,
            head: this.head,
          };
        }
        static fromJSON(e) {
          if (!e || 'number' != typeof e.anchor || 'number' != typeof e.head)
            throw new RangeError(
              'Invalid JSON representation for SelectionRange'
            );
          return m.range(e.anchor, e.head);
        }
      }
      class m {
        constructor(e, t = 0) {
          (this.ranges = e), (this.mainIndex = t);
        }
        map(e, t = -1) {
          return e.empty
            ? this
            : m.create(
                this.ranges.map((n) => n.map(e, t)),
                this.mainIndex
              );
        }
        eq(e) {
          if (
            this.ranges.length != e.ranges.length ||
            this.mainIndex != e.mainIndex
          )
            return !1;
          for (let t = 0; t < this.ranges.length; t++)
            if (!this.ranges[t].eq(e.ranges[t])) return !1;
          return !0;
        }
        get main() {
          return this.ranges[this.mainIndex];
        }
        asSingle() {
          return 1 == this.ranges.length ? this : new m([this.main]);
        }
        addRange(e, t = !0) {
          return m.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
        }
        replaceRange(e, t = this.mainIndex) {
          let n = this.ranges.slice();
          return (n[t] = e), m.create(n, this.mainIndex);
        }
        toJSON() {
          return {
            ranges: this.ranges.map((e) => e.toJSON()),
            main: this.mainIndex,
          };
        }
        static fromJSON(e) {
          if (
            !e ||
            !Array.isArray(e.ranges) ||
            'number' != typeof e.main ||
            e.main >= e.ranges.length
          )
            throw new RangeError(
              'Invalid JSON representation for EditorSelection'
            );
          return new m(
            e.ranges.map((e) => p.fromJSON(e)),
            e.main
          );
        }
        static single(e, t = e) {
          return new m([m.range(e, t)], 0);
        }
        static create(e, t = 0) {
          if (0 == e.length)
            throw new RangeError('A selection needs at least one range');
          for (let n = 0, i = 0; i < e.length; i++) {
            let r = e[i];
            if (r.empty ? r.from <= n : r.from < n) return g(e.slice(), t);
            n = r.to;
          }
          return new m(e, t);
        }
        static cursor(e, t = 0, n, i) {
          return new p(
            e,
            e,
            (0 == t ? 0 : t < 0 ? 4 : 8) |
              (null == n ? 3 : Math.min(2, n)) |
              ((null !== i && void 0 !== i ? i : 33554431) << 5)
          );
        }
        static range(e, t, n) {
          let i = (null !== n && void 0 !== n ? n : 33554431) << 5;
          return t < e ? new p(t, e, 16 | i) : new p(e, t, i);
        }
      }

      function g(e, t = 0) {
        let n = e[t];
        e.sort((e, t) => e.from - t.from), (t = e.indexOf(n));
        for (let i = 1; i < e.length; i++) {
          let n = e[i],
            r = e[i - 1];
          if (n.empty ? n.from <= r.to : n.from < r.to) {
            let o = r.from,
              s = Math.max(n.to, r.to);
            i <= t && t--,
              e.splice(
                --i,
                2,
                n.anchor > n.head ? m.range(s, o) : m.range(o, s)
              );
          }
        }
        return new m(e, t);
      }

      function v(e, t) {
        for (let n of e.ranges)
          if (n.to > t)
            throw new RangeError('Selection points outside of document');
      }
      let b = 0;
      class x {
        constructor(e, t, n, i, r) {
          (this.combine = e),
            (this.compareInput = t),
            (this.compare = n),
            (this.isStatic = i),
            (this.extensions = r),
            (this.id = b++),
            (this.default = e([]));
        }
        static define(e = {}) {
          return new x(
            e.combine || ((e) => e),
            e.compareInput || ((e, t) => e === t),
            e.compare || (e.combine ? (e, t) => e === t : w),
            !!e.static,
            e.enables
          );
        }
        of(e) {
          return new y([], this, 0, e);
        }
        compute(e, t) {
          if (this.isStatic) throw new Error("Can't compute a static facet");
          return new y(e, this, 1, t);
        }
        computeN(e, t) {
          if (this.isStatic) throw new Error("Can't compute a static facet");
          return new y(e, this, 2, t);
        }
        from(e, t) {
          return t || (t = (e) => e), this.compute([e], (n) => t(n.field(e)));
        }
      }

      function w(e, t) {
        return (
          e == t || (e.length == t.length && e.every((e, n) => e === t[n]))
        );
      }
      class y {
        constructor(e, t, n, i) {
          (this.dependencies = e),
            (this.facet = t),
            (this.type = n),
            (this.value = i),
            (this.id = b++);
        }
        dynamicSlot(e) {
          var t;
          let n = this.value,
            i = this.facet.compareInput,
            r = e[this.id] >> 1,
            o = 2 == this.type,
            s = !1,
            a = !1,
            l = [];
          for (let h of this.dependencies)
            'doc' == h
              ? (s = !0)
              : 'selection' == h
              ? (a = !0)
              : 0 == (1 & (null !== (t = e[h.id]) && void 0 !== t ? t : 1)) &&
                l.push(e[h.id]);
          return (e, t) => {
            if (!t || t.reconfigured) return (e.values[r] = n(e)), 1;
            {
              if (
                !(
                  (s && t.docChanged) ||
                  (a && (t.docChanged || t.selection)) ||
                  l.some((t) => (1 & R(e, t)) > 0)
                )
              )
                return 0;
              let h = n(e),
                c = t.startState.values[r];
              return (
                o
                  ? (function (e, t, n) {
                      if (e.length != t.length) return !1;
                      for (let i = 0; i < e.length; i++)
                        if (!n(e[i], t[i])) return !1;
                      return !0;
                    })(h, c, i)
                  : i(h, c)
              )
                ? 0
                : ((e.values[r] = h), 1);
            }
          };
        }
      }

      function k(e, t, n) {
        let i = n.map((t) => e[t.id]),
          r = n.map((e) => e.type),
          o = i.filter((e) => !(1 & e)),
          s = e[t.id] >> 1;
        return (e, n) => {
          let a = n
              ? n.reconfigured
                ? n.startState.config.address[t.id]
                : s << 1
              : null,
            l = null == a;
          for (let t of o) 1 & R(e, t) && (l = !0);
          if (!l) return 0;
          let h = [];
          for (let t = 0; t < i.length; t++) {
            let n = N(e, i[t]);
            if (2 == r[t]) for (let e of n) h.push(e);
            else h.push(n);
          }
          let c = t.combine(h);
          return null != a && t.compare(c, N(n.startState, a))
            ? 0
            : ((e.values[s] = c), 1);
        };
      }

      function S(e, t) {
        let n = e.config.address[t];
        return null == n ? null : n >> 1;
      }
      const C = x.define({
        static: !0,
      });
      class A {
        constructor(e, t, n, i, r) {
          (this.id = e),
            (this.createF = t),
            (this.updateF = n),
            (this.compareF = i),
            (this.spec = r),
            (this.provides = void 0);
        }
        static define(e) {
          let t = new A(
            b++,
            e.create,
            e.update,
            e.compare || ((e, t) => e === t),
            e
          );
          return e.provide && (t.provides = e.provide(t)), t;
        }
        create(e) {
          let t = e.facet(C).find((e) => e.field == this);
          return (
            (null === t || void 0 === t ? void 0 : t.create) || this.createF
          )(e);
        }
        slot(e) {
          let t = e[this.id] >> 1;
          return (e, n) => {
            if (!n || (n.reconfigured && null == S(n.startState, this.id)))
              return (e.values[t] = this.create(e)), 1;
            let i,
              r = 0;
            n.reconfigured
              ? ((i = n.startState.values[S(n.startState, this.id)]), (r = 1))
              : (i = n.startState.values[t]);
            let o = this.updateF(i, n);
            return (
              r || this.compareF(i, o) || (r = 1), r && (e.values[t] = o), r
            );
          };
        }
        init(e) {
          return [
            this,
            C.of({
              field: this,
              create: e,
            }),
          ];
        }
        get extension() {
          return this;
        }
      }
      const O = 2,
        j = 1,
        M = 0;

      function E(e) {
        return (t) => new L(t, e);
      }
      const I = {
        fallback: E(3),
        default: E(O),
        extend: E(j),
        override: E(M),
      };
      class L {
        constructor(e, t) {
          (this.inner = e), (this.prec = t);
        }
      }
      class T {
        of(e) {
          return new P(this, e);
        }
        reconfigure(e) {
          return T.reconfigure.of({
            compartment: this,
            extension: e,
          });
        }
        get(e) {
          return e.config.compartments.get(this);
        }
      }
      class P {
        constructor(e, t) {
          (this.compartment = e), (this.inner = t);
        }
      }
      class D {
        constructor(e, t, n, i, r) {
          for (
            this.base = e,
              this.compartments = t,
              this.dynamicSlots = n,
              this.address = i,
              this.staticValues = r,
              this.statusTemplate = [];
            this.statusTemplate.length < n.length;

          )
            this.statusTemplate.push(0);
        }
        staticFacet(e) {
          let t = this.address[e.id];
          return null == t ? e.default : this.staticValues[t >> 1];
        }
        static resolve(e, t, n) {
          let i = [],
            r = Object.create(null),
            o = new Map();
          for (let h of (function (e, t, n) {
            let i = [[], [], [], []],
              r = new Map();

            function o(e, s) {
              let a = r.get(e);
              if (null != a) {
                if (a >= s) return;
                let t = i[a].indexOf(e);
                t > -1 && i[a].splice(t, 1),
                  e instanceof P && n.delete(e.compartment);
              }
              if ((r.set(e, s), Array.isArray(e))) for (let t of e) o(t, s);
              else if (e instanceof P) {
                if (n.has(e.compartment))
                  throw new RangeError(
                    'Duplicate use of compartment in extensions'
                  );
                let i = t.get(e.compartment) || e.inner;
                n.set(e.compartment, i), o(i, s);
              } else if (e instanceof L) o(e.inner, e.prec);
              else if (e instanceof A)
                i[s].push(e), e.provides && o(e.provides, s);
              else if (e instanceof y)
                i[s].push(e), e.facet.extensions && o(e.facet.extensions, s);
              else {
                let t = e.extension;
                if (!t)
                  throw new Error(
                    `Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
                  );
                o(t, s);
              }
            }
            return o(e, O), i.reduce((e, t) => e.concat(t));
          })(e, t, o))
            h instanceof A
              ? i.push(h)
              : (r[h.facet.id] || (r[h.facet.id] = [])).push(h);
          let s = Object.create(null),
            a = [],
            l = [];
          for (let h of i) (s[h.id] = l.length << 1), l.push((e) => h.slot(e));
          for (let h in r) {
            let e = r[h],
              t = e[0].facet;
            if (e.every((e) => 0 == e.type)) {
              s[t.id] = (a.length << 1) | 1;
              let i = t.combine(e.map((e) => e.value)),
                r = n ? n.config.address[t.id] : null;
              if (null != r) {
                let e = N(n, r);
                t.compare(i, e) && (i = e);
              }
              a.push(i);
            } else {
              for (let t of e)
                0 == t.type
                  ? ((s[t.id] = (a.length << 1) | 1), a.push(t.value))
                  : ((s[t.id] = l.length << 1),
                    l.push((e) => t.dynamicSlot(e)));
              (s[t.id] = l.length << 1), l.push((n) => k(n, t, e));
            }
          }
          return new D(
            e,
            o,
            l.map((e) => e(s)),
            s,
            a
          );
        }
      }

      function R(e, t) {
        if (1 & t) return 2;
        let n = t >> 1,
          i = e.status[n];
        if (4 == i)
          throw new Error('Cyclic dependency between fields and/or facets');
        if (2 & i) return i;
        e.status[n] = 4;
        let r = e.config.dynamicSlots[n](e, e.applying);
        return (e.status[n] = 2 | r);
      }

      function N(e, t) {
        return 1 & t ? e.config.staticValues[t >> 1] : e.values[t >> 1];
      }
      const B = x.define(),
        q = x.define({
          combine: (e) => e.some((e) => e),
          static: !0,
        }),
        z = x.define({
          combine: (e) => (e.length ? e[0] : void 0),
          static: !0,
        }),
        F = x.define(),
        V = x.define(),
        W = x.define();
      class _ {
        constructor(e, t) {
          (this.type = e), (this.value = t);
        }
        static define() {
          return new U();
        }
      }
      class U {
        of(e) {
          return new _(this, e);
        }
      }
      class H {
        constructor(e) {
          this.map = e;
        }
        of(e) {
          return new J(this, e);
        }
      }
      class J {
        constructor(e, t) {
          (this.type = e), (this.value = t);
        }
        map(e) {
          let t = this.type.map(this.value, e);
          return void 0 === t
            ? void 0
            : t == this.value
            ? this
            : new J(this.type, t);
        }
        is(e) {
          return this.type == e;
        }
        static define(e = {}) {
          return new H(e.map || ((e) => e));
        }
        static mapEffects(e, t) {
          if (!e.length) return e;
          let n = [];
          for (let i of e) {
            let e = i.map(t);
            e && n.push(e);
          }
          return n;
        }
      }
      (J.reconfigure = J.define()), (J.appendConfig = J.define());
      class $ {
        constructor(e, t, n, i, r, o) {
          (this.startState = e),
            (this.changes = t),
            (this.selection = n),
            (this.effects = i),
            (this.annotations = r),
            (this.scrollIntoView = o),
            (this._doc = null),
            (this._state = null),
            n && v(n, t.newLength),
            r.some((e) => e.type == $.time) ||
              (this.annotations = r.concat($.time.of(Date.now())));
        }
        get newDoc() {
          return (
            this._doc || (this._doc = this.changes.apply(this.startState.doc))
          );
        }
        get newSelection() {
          return this.selection || this.startState.selection.map(this.changes);
        }
        get state() {
          return (
            this._state || this.startState.applyTransaction(this), this._state
          );
        }
        annotation(e) {
          for (let t of this.annotations) if (t.type == e) return t.value;
        }
        get docChanged() {
          return !this.changes.empty;
        }
        get reconfigured() {
          return this.startState.config != this.state.config;
        }
        isUserEvent(e) {
          let t = this.annotation($.userEvent);
          return (
            t &&
            (t == e ||
              (t.length > e.length &&
                t.slice(0, e.length) == e &&
                '.' == t[e.length]))
          );
        }
      }

      function G(e, t) {
        let n = [];
        for (let i = 0, r = 0; ; ) {
          let o, s;
          if (i < e.length && (r == t.length || t[r] >= e[i]))
            (o = e[i++]), (s = e[i++]);
          else {
            if (!(r < t.length)) return n;
            (o = t[r++]), (s = t[r++]);
          }
          !n.length || n[n.length - 1] < o
            ? n.push(o, s)
            : n[n.length - 1] < s && (n[n.length - 1] = s);
        }
      }

      function Q(e, t, n) {
        var i;
        let r, o, s;
        return (
          n
            ? ((r = t.changes),
              (o = a.empty(t.changes.length)),
              (s = e.changes.compose(t.changes)))
            : ((r = t.changes.map(e.changes)),
              (o = e.changes.mapDesc(t.changes, !0)),
              (s = e.changes.compose(r))),
          {
            changes: s,
            selection: t.selection
              ? t.selection.map(o)
              : null === (i = e.selection) || void 0 === i
              ? void 0
              : i.map(r),
            effects: J.mapEffects(e.effects, r).concat(
              J.mapEffects(t.effects, o)
            ),
            annotations: e.annotations.length
              ? e.annotations.concat(t.annotations)
              : t.annotations,
            scrollIntoView: e.scrollIntoView || t.scrollIntoView,
          }
        );
      }

      function K(e, t, n) {
        let i = t.selection,
          r = Z(t.annotations);
        return (
          t.userEvent && (r = r.concat($.userEvent.of(t.userEvent))),
          {
            changes:
              t.changes instanceof a
                ? t.changes
                : a.of(t.changes || [], n, e.facet(z)),
            selection: i && (i instanceof m ? i : m.single(i.anchor, i.head)),
            effects: Z(t.effects),
            annotations: r,
            scrollIntoView: !!t.scrollIntoView,
          }
        );
      }

      function Y(e, t, n) {
        let i = K(e, t.length ? t[0] : {}, e.doc.length);
        t.length && !1 === t[0].filter && (n = !1);
        for (let o = 1; o < t.length; o++) {
          !1 === t[o].filter && (n = !1);
          let r = !!t[o].sequential;
          i = Q(i, K(e, t[o], r ? i.changes.newLength : e.doc.length), r);
        }
        let r = new $(
          e,
          i.changes,
          i.selection,
          i.effects,
          i.annotations,
          i.scrollIntoView
        );
        return (function (e) {
          let t = e.startState,
            n = t.facet(W),
            i = e;
          for (let r = n.length - 1; r >= 0; r--) {
            let o = n[r](e);
            o &&
              Object.keys(o).length &&
              (i = Q(e, K(t, o, e.changes.newLength), !0));
          }
          return i == e
            ? e
            : new $(
                t,
                e.changes,
                e.selection,
                i.effects,
                i.annotations,
                i.scrollIntoView
              );
        })(
          n
            ? (function (e) {
                let t = e.startState,
                  n = !0;
                for (let r of t.facet(F)) {
                  let t = r(e);
                  if (!1 === t) {
                    n = !1;
                    break;
                  }
                  Array.isArray(t) && (n = !0 === n ? t : G(n, t));
                }
                if (!0 !== n) {
                  let i, r;
                  if (!1 === n)
                    (r = e.changes.invertedDesc), (i = a.empty(t.doc.length));
                  else {
                    let t = e.changes.filter(n);
                    (i = t.changes), (r = t.filtered.invertedDesc);
                  }
                  e = new $(
                    t,
                    i,
                    e.selection && e.selection.map(r),
                    J.mapEffects(e.effects, r),
                    e.annotations,
                    e.scrollIntoView
                  );
                }
                let i = t.facet(V);
                for (let r = i.length - 1; r >= 0; r--) {
                  let n = i[r](e);
                  e =
                    n instanceof $
                      ? n
                      : Array.isArray(n) && 1 == n.length && n[0] instanceof $
                      ? n[0]
                      : Y(t, Z(n), !1);
                }
                return e;
              })(r)
            : r
        );
      }
      ($.time = _.define()),
        ($.userEvent = _.define()),
        ($.addToHistory = _.define()),
        ($.remote = _.define());
      const X = [];

      function Z(e) {
        return null == e ? X : Array.isArray(e) ? e : [e];
      }
      var ee = (function (e) {
        return (
          (e[(e.Word = 0)] = 'Word'),
          (e[(e.Space = 1)] = 'Space'),
          (e[(e.Other = 2)] = 'Other'),
          e
        );
      })(ee || (ee = {}));
      const te =
        /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      let ne;
      try {
        ne = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u');
      } catch (se) {}

      function ie(e) {
        return (t) => {
          if (!/\S/.test(t)) return ee.Space;
          if (
            (function (e) {
              if (ne) return ne.test(e);
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if (
                  /\w/.test(n) ||
                  (n > '\x80' &&
                    (n.toUpperCase() != n.toLowerCase() || te.test(n)))
                )
                  return !0;
              }
              return !1;
            })(t)
          )
            return ee.Word;
          for (let n = 0; n < e.length; n++)
            if (t.indexOf(e[n]) > -1) return ee.Word;
          return ee.Other;
        };
      }
      class re {
        constructor(e, t, n, i = null) {
          if (
            ((this.config = e),
            (this.doc = t),
            (this.selection = n),
            (this.applying = null),
            (this.status = e.statusTemplate.slice()),
            i && i.startState.config == e)
          )
            this.values = i.startState.values.slice();
          else if (((this.values = e.dynamicSlots.map((e) => null)), i))
            for (let r in e.address) {
              let t = e.address[r],
                n = i.startState.config.address[r];
              null != n &&
                0 == (1 & t) &&
                (this.values[t >> 1] = N(i.startState, n));
            }
          (this.applying = i), i && (i._state = this);
          for (let r = 0; r < this.config.dynamicSlots.length; r++)
            R(this, r << 1);
          this.applying = null;
        }
        field(e, t = !0) {
          let n = this.config.address[e.id];
          if (null != n) return R(this, n), N(this, n);
          if (t) throw new RangeError('Field is not present in this state');
        }
        update(...e) {
          return Y(this, e, !0);
        }
        applyTransaction(e) {
          let t = this.config,
            { base: n, compartments: i } = t;
          for (let r of e.effects)
            r.is(T.reconfigure)
              ? (t &&
                  ((i = new Map()),
                  t.compartments.forEach((e, t) => i.set(t, e)),
                  (t = null)),
                i.set(r.value.compartment, r.value.extension))
              : r.is(J.reconfigure)
              ? ((t = null), (n = r.value))
              : r.is(J.appendConfig) &&
                ((t = null), (n = Z(n).concat(r.value)));
          new re(t || D.resolve(n, i, this), e.newDoc, e.newSelection, e);
        }
        replaceSelection(e) {
          return (
            'string' == typeof e && (e = this.toText(e)),
            this.changeByRange((t) => ({
              changes: {
                from: t.from,
                to: t.to,
                insert: e,
              },
              range: m.cursor(t.from + e.length),
            }))
          );
        }
        changeByRange(e) {
          let t = this.selection,
            n = e(t.ranges[0]),
            i = this.changes(n.changes),
            r = [n.range],
            o = Z(n.effects);
          for (let s = 1; s < t.ranges.length; s++) {
            let n = e(t.ranges[s]),
              a = this.changes(n.changes),
              l = a.map(i);
            for (let e = 0; e < s; e++) r[e] = r[e].map(l);
            let h = i.mapDesc(a, !0);
            r.push(n.range.map(h)),
              (i = i.compose(l)),
              (o = J.mapEffects(o, l).concat(J.mapEffects(Z(n.effects), h)));
          }
          return {
            changes: i,
            selection: m.create(r, t.mainIndex),
            effects: o,
          };
        }
        changes(e = []) {
          return e instanceof a
            ? e
            : a.of(e, this.doc.length, this.facet(re.lineSeparator));
        }
        toText(e) {
          return i.a.of(e.split(this.facet(re.lineSeparator) || r));
        }
        sliceDoc(e = 0, t = this.doc.length) {
          return this.doc.sliceString(e, t, this.lineBreak);
        }
        facet(e) {
          let t = this.config.address[e.id];
          return null == t ? e.default : (R(this, t), N(this, t));
        }
        toJSON(e) {
          let t = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON(),
          };
          if (e)
            for (let n in e) {
              let i = e[n];
              i instanceof A && (t[n] = i.spec.toJSON(this.field(e[n]), this));
            }
          return t;
        }
        static fromJSON(e, t = {}, n) {
          if (!e || 'string' != typeof e.doc)
            throw new RangeError('Invalid JSON representation for EditorState');
          let i = [];
          if (n)
            for (let r in n) {
              let t = n[r],
                o = e[r];
              i.push(t.init((e) => t.spec.fromJSON(o, e)));
            }
          return re.create({
            doc: e.doc,
            selection: m.fromJSON(e.selection),
            extensions: t.extensions ? i.concat([t.extensions]) : i,
          });
        }
        static create(e = {}) {
          let t = D.resolve(e.extensions || [], new Map()),
            n =
              e.doc instanceof i.a
                ? e.doc
                : i.a.of(
                    (e.doc || '').split(t.staticFacet(re.lineSeparator) || r)
                  ),
            o = e.selection
              ? e.selection instanceof m
                ? e.selection
                : m.single(e.selection.anchor, e.selection.head)
              : m.single(0);
          return (
            v(o, n.length),
            t.staticFacet(q) || (o = o.asSingle()),
            new re(t, n, o)
          );
        }
        get tabSize() {
          return this.facet(re.tabSize);
        }
        get lineBreak() {
          return this.facet(re.lineSeparator) || '\n';
        }
        phrase(e) {
          for (let t of this.facet(re.phrases))
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          return e;
        }
        languageDataAt(e, t, n = -1) {
          let i = [];
          for (let r of this.facet(B))
            for (let o of r(this, t, n))
              Object.prototype.hasOwnProperty.call(o, e) && i.push(o[e]);
          return i;
        }
        charCategorizer(e) {
          return ie(this.languageDataAt('wordChars', e).join(''));
        }
        wordAt(e) {
          let { text: t, from: n, length: r } = this.doc.lineAt(e),
            o = this.charCategorizer(e),
            s = e - n,
            a = e - n;
          for (; s > 0; ) {
            let e = Object(i.e)(t, s, !1);
            if (o(t.slice(e, s)) != ee.Word) break;
            s = e;
          }
          for (; a < r; ) {
            let e = Object(i.e)(t, a);
            if (o(t.slice(a, e)) != ee.Word) break;
            a = e;
          }
          return s == a ? null : m.range(s + n, a + n);
        }
      }

      function oe(e, t, n = {}) {
        let i = {};
        for (let r of e)
          for (let e of Object.keys(r)) {
            let t = r[e],
              o = i[e];
            if (void 0 === o) i[e] = t;
            else if (o === t || void 0 === t);
            else {
              if (!Object.hasOwnProperty.call(n, e))
                throw new Error('Config merge conflict for field ' + e);
              i[e] = n[e](o, t);
            }
          }
        for (let r in t) void 0 === i[r] && (i[r] = t[r]);
        return i;
      }
      (re.allowMultipleSelections = q),
        (re.tabSize = x.define({
          combine: (e) => (e.length ? e[0] : 4),
        })),
        (re.lineSeparator = z),
        (re.phrases = x.define()),
        (re.languageData = B),
        (re.changeFilter = F),
        (re.transactionFilter = V),
        (re.transactionExtender = W),
        (T.reconfigure = J.define());
    },
    '8v8i': function (e, t, n) {
      'use strict';
      var i, r, o, s, a, l;
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return r;
        }),
        n.d(t, 'd', function () {
          return o;
        }),
        n.d(t, 'e', function () {
          return s;
        }),
        n.d(t, 'f', function () {
          return a;
        }),
        n.d(t, 'c', function () {
          return l;
        }),
        (function (e) {
          (e.Create = 'CREATE'),
            (e.Move = 'MOVE'),
            (e.Delete = 'DELETE'),
            (e.Modify = 'MODIFY');
        })(i || (i = {})),
        (function (e) {
          (e.Local = 'LOCAL'), (e.Container = 'CONTAINER');
        })(r || (r = {})),
        (function (e) {
          (e.File = 'FILE'), (e.Directory = 'DIRECTORY');
        })(o || (o = {})),
        (function (e) {
          (e.NotFound = 'NOT_FOUND'),
            (e.AlreadyExists = 'ALREADY_EXIST'),
            (e.NotDirectory = 'NOT_DIRECTORY'),
            (e.IsDirectory = 'IS_DIRECTORY');
        })(s || (s = {})),
        (function (e) {
          (e.Syncing = 'SYNCING'), (e.Clean = 'CLEAN');
        })(a || (a = {})),
        (function (e) {
          (e.Dirty = 'DIRTY'), (e.Syncing = 'SYNCING'), (e.Clean = 'CLEAN');
        })(l || (l = {}));
    },
    KV2Y: function (e, t, n) {
      'use strict';

      function i() {
        var e = arguments[0];
        'string' == typeof e && (e = document.createElement(e));
        var t = 1,
          n = arguments[1];
        if (
          n &&
          'object' == typeof n &&
          null == n.nodeType &&
          !Array.isArray(n)
        ) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var o = n[i];
              'string' == typeof o
                ? e.setAttribute(i, o)
                : null != o && (e[i] = o);
            }
          t++;
        }
        for (; t < arguments.length; t++) r(e, arguments[t]);
        return e;
      }

      function r(e, t) {
        if ('string' == typeof t) e.appendChild(document.createTextNode(t));
        else if (null == t);
        else if (null != t.nodeType) e.appendChild(t);
        else {
          if (!Array.isArray(t))
            throw new RangeError('Unsupported child node: ' + t);
          for (var n = 0; n < t.length; n++) r(e, t[n]);
        }
      }
      n.d(t, 'a', function () {
        return i;
      });
    },
    L4B9: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return se;
      }),
        n.d(t, 'b', function () {
          return re;
        }),
        n.d(t, 'c', function () {
          return ie;
        }),
        n.d(t, 'd', function () {
          return ae;
        });
      var i = n('4eob'),
        r = n('uZp5'),
        o = n('AtEE'),
        s = n('WYGy'),
        a = n('yqQ+'),
        l = n('lmln');

      function h(e, t) {
        return i.f.create(e.ranges.map(t), e.mainIndex);
      }

      function c(e, t) {
        return e.update({
          selection: t,
          scrollIntoView: !0,
          userEvent: 'select',
        });
      }

      function u({ state: e, dispatch: t }, n) {
        let i = h(e.selection, n);
        return !i.eq(e.selection) && (t(c(e, i)), !0);
      }

      function f(e, t) {
        return i.f.cursor(t ? e.to : e.from);
      }

      function d(e, t) {
        return u(e, (n) => (n.empty ? e.moveByChar(n, t) : f(n, t)));
      }
      const p = (e) => d(e, e.textDirection != o.c.LTR),
        m = (e) => d(e, e.textDirection == o.c.LTR);

      function g(e, t) {
        return u(e, (n) => (n.empty ? e.moveByGroup(n, t) : f(n, t)));
      }

      function v(e, t, n) {
        if (t.type.prop(n)) return !0;
        let i = t.to - t.from;
        return (
          (i && (i > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to)))) ||
          t.firstChild
        );
      }

      function b(e, t, n) {
        let r,
          o,
          h = Object(a.w)(e).resolveInner(t.head),
          c = n ? l.b.closedBy : l.b.openedBy;
        for (let i = t.head; ; ) {
          let t = n ? h.childAfter(i) : h.childBefore(i);
          if (!t) break;
          v(e, t, c) ? (h = t) : (i = n ? t.to : t.from);
        }
        return (
          (o =
            h.type.prop(c) &&
            (r = n ? Object(s.b)(e, h.from, 1) : Object(s.b)(e, h.to, -1)) &&
            r.matched
              ? n
                ? r.end.to
                : r.end.from
              : n
              ? h.to
              : h.from),
          i.f.cursor(o, n ? -1 : 1)
        );
      }

      function x(e, t) {
        return u(e, (n) => (n.empty ? e.moveVertically(n, t) : f(n, t)));
      }
      const w = (e) => x(e, !1),
        y = (e) => x(e, !0);

      function k(e, t) {
        return u(e, (n) =>
          n.empty ? e.moveVertically(n, t, e.dom.clientHeight) : f(n, t)
        );
      }
      const S = (e) => k(e, !1),
        C = (e) => k(e, !0);

      function A(e, t, n) {
        let r = e.visualLineAt(t.head),
          o = e.moveToLineBoundary(t, n);
        if (
          (o.head == t.head &&
            o.head != (n ? r.to : r.from) &&
            (o = e.moveToLineBoundary(t, n, !1)),
          !n && o.head == r.from && r.length)
        ) {
          let n = /^\s*/.exec(
            e.state.sliceDoc(r.from, Math.min(r.from + 100, r.to))
          )[0].length;
          n && t.head != r.from + n && (o = i.f.cursor(r.from + n));
        }
        return o;
      }
      const O = (e) => u(e, (t) => A(e, t, !0)),
        j = (e) => u(e, (t) => A(e, t, !1));

      function M(e, t, n) {
        let r = !1,
          o = h(e.selection, (t) => {
            let o =
              Object(s.b)(e, t.head, -1) ||
              Object(s.b)(e, t.head, 1) ||
              (t.head > 0 && Object(s.b)(e, t.head - 1, 1)) ||
              (t.head < e.doc.length && Object(s.b)(e, t.head + 1, -1));
            if (!o || !o.end) return t;
            r = !0;
            let a = o.start.from == t.head ? o.end.to : o.end.from;
            return n ? i.f.range(t.anchor, a) : i.f.cursor(a);
          });
        return !!r && (t(c(e, o)), !0);
      }

      function E(e, t) {
        let n = h(e.state.selection, (e) => {
          let n = t(e);
          return i.f.range(e.anchor, n.head, n.goalColumn);
        });
        return !n.eq(e.state.selection) && (e.dispatch(c(e.state, n)), !0);
      }

      function I(e, t) {
        return E(e, (n) => e.moveByChar(n, t));
      }
      const L = (e) => I(e, e.textDirection != o.c.LTR),
        T = (e) => I(e, e.textDirection == o.c.LTR);

      function P(e, t) {
        return E(e, (n) => e.moveByGroup(n, t));
      }

      function D(e, t) {
        return E(e, (n) => e.moveVertically(n, t));
      }
      const R = (e) => D(e, !1),
        N = (e) => D(e, !0);

      function B(e, t) {
        return E(e, (n) => e.moveVertically(n, t, e.dom.clientHeight));
      }
      const q = (e) => B(e, !1),
        z = (e) => B(e, !0),
        F = (e) => E(e, (t) => A(e, t, !0)),
        V = (e) => E(e, (t) => A(e, t, !1)),
        W = ({ state: e, dispatch: t }) => (
          t(
            c(e, {
              anchor: 0,
            })
          ),
          !0
        ),
        _ = ({ state: e, dispatch: t }) => (
          t(
            c(e, {
              anchor: e.doc.length,
            })
          ),
          !0
        ),
        U = ({ state: e, dispatch: t }) => (
          t(
            c(e, {
              anchor: e.selection.main.anchor,
              head: 0,
            })
          ),
          !0
        ),
        H = ({ state: e, dispatch: t }) => (
          t(
            c(e, {
              anchor: e.selection.main.anchor,
              head: e.doc.length,
            })
          ),
          !0
        );

      function J({ state: e, dispatch: t }, n) {
        let r = 'delete.selection',
          o = e.changeByRange((e) => {
            let { from: t, to: o } = e;
            if (t == o) {
              let e = n(t);
              e < t ? (r = 'delete.backward') : e > t && (r = 'delete.forward'),
                (t = Math.min(t, e)),
                (o = Math.max(o, e));
            }
            return t == o
              ? {
                  range: e,
                }
              : {
                  changes: {
                    from: t,
                    to: o,
                  },
                  range: i.f.cursor(t),
                };
          });
        return (
          !o.changes.empty &&
          (t(
            e.update(o, {
              scrollIntoView: !0,
              userEvent: r,
            })
          ),
          !0)
        );
      }
      const $ = (e, t) =>
          J(e, (n) => {
            let i,
              s,
              { state: l } = e,
              h = l.doc.lineAt(n);
            if (
              !t &&
              n > h.from &&
              n < h.from + 200 &&
              !/[^ \t]/.test((i = h.text.slice(0, n - h.from)))
            ) {
              if ('\t' == i[i.length - 1]) return n - 1;
              let e =
                Object(r.d)(i, l.tabSize) % Object(a.n)(l) || Object(a.n)(l);
              for (let t = 0; t < e && ' ' == i[i.length - 1 - t]; t++) n--;
              s = n;
            } else
              (s = Object(r.e)(h.text, n - h.from, t) + h.from),
                s == n &&
                  h.number != (t ? l.doc.lines : 1) &&
                  (s += t ? 1 : -1);
            if (e instanceof o.d)
              for (let r of e.pluginField(o.e.atomicRanges))
                r.between(s, s, (e, n) => {
                  s = t ? n : e;
                });
            return s;
          }),
        G = (e) => $(e, !1),
        Q = (e) => $(e, !0),
        K = (e, t) =>
          J(e, (n) => {
            let i = n,
              { state: o } = e,
              s = o.doc.lineAt(i),
              a = o.charCategorizer(i);
            for (let e = null; ; ) {
              if (i == (t ? s.to : s.from)) {
                i == n &&
                  s.number != (t ? o.doc.lines : 1) &&
                  (i += t ? 1 : -1);
                break;
              }
              let l = Object(r.e)(s.text, i - s.from, t) + s.from,
                h = s.text.slice(
                  Math.min(i, l) - s.from,
                  Math.max(i, l) - s.from
                ),
                c = a(h);
              if (null != e && c != e) break;
              (' ' == h && i == n) || (e = c), (i = l);
            }
            return i;
          }),
        Y = (e) => K(e, !1),
        X = (e) =>
          J(e, (t) => {
            let n = e.visualLineAt(t).to;
            return t < n ? n : Math.min(e.state.doc.length, t + 1);
          });

      function Z(e) {
        let t = [],
          n = -1;
        for (let i of e.selection.ranges) {
          let r = e.doc.lineAt(i.from),
            o = e.doc.lineAt(i.to);
          if (
            (i.empty || i.to != o.from || (o = e.doc.lineAt(i.to - 1)),
            n >= r.number)
          ) {
            let e = t[t.length - 1];
            (e.to = o.to), e.ranges.push(i);
          } else
            t.push({
              from: r.from,
              to: o.to,
              ranges: [i],
            });
          n = o.number + 1;
        }
        return t;
      }

      function ee(e, t, n) {
        let r = [],
          o = [];
        for (let s of Z(e)) {
          if (n ? s.to == e.doc.length : 0 == s.from) continue;
          let t = e.doc.lineAt(n ? s.to + 1 : s.from - 1),
            a = t.length + 1;
          if (n) {
            r.push(
              {
                from: s.to,
                to: t.to,
              },
              {
                from: s.from,
                insert: t.text + e.lineBreak,
              }
            );
            for (let t of s.ranges)
              o.push(
                i.f.range(
                  Math.min(e.doc.length, t.anchor + a),
                  Math.min(e.doc.length, t.head + a)
                )
              );
          } else {
            r.push(
              {
                from: t.from,
                to: s.from,
              },
              {
                from: s.to,
                insert: e.lineBreak + t.text,
              }
            );
            for (let e of s.ranges) o.push(i.f.range(e.anchor - a, e.head - a));
          }
        }
        return (
          !!r.length &&
          (t(
            e.update({
              changes: r,
              scrollIntoView: !0,
              selection: i.f.create(o, e.selection.mainIndex),
              userEvent: 'move.line',
            })
          ),
          !0)
        );
      }

      function te(e, t, n) {
        let i = [];
        for (let r of Z(e))
          n
            ? i.push({
                from: r.from,
                insert: e.doc.slice(r.from, r.to) + e.lineBreak,
              })
            : i.push({
                from: r.to,
                insert: e.lineBreak + e.doc.slice(r.from, r.to),
              });
        return (
          t(
            e.update({
              changes: i,
              scrollIntoView: !0,
              userEvent: 'input.copyline',
            })
          ),
          !0
        );
      }

      function ne(e, t) {
        let n = -1;
        return e.changeByRange((r) => {
          let o = [];
          for (let i = r.from; i <= r.to; ) {
            let s = e.doc.lineAt(i);
            s.number > n &&
              (r.empty || r.to > s.from) &&
              (t(s, o, r), (n = s.number)),
              (i = s.to + 1);
          }
          let s = e.changes(o);
          return {
            changes: o,
            range: i.f.range(s.mapPos(r.anchor, 1), s.mapPos(r.head, 1)),
          };
        });
      }
      const ie = ({ state: e, dispatch: t }) => {
          let n = Object.create(null),
            i = new a.a(e, {
              overrideIndentation: (e) => {
                let t = n[e];
                return null == t ? -1 : t;
              },
            }),
            r = ne(e, (t, r, o) => {
              let s = Object(a.o)(i, t.from);
              if (null == s) return;
              /\S/.test(t.text) || (s = 0);
              let l = /^\s*/.exec(t.text)[0],
                h = Object(a.s)(e, s);
              (l != h || o.from < t.from + l.length) &&
                ((n[t.from] = s),
                r.push({
                  from: t.from,
                  to: t.from + l.length,
                  insert: h,
                }));
            });
          return (
            r.changes.empty ||
              t(
                e.update(r, {
                  userEvent: 'indent',
                })
              ),
            !0
          );
        },
        re = ({ state: e, dispatch: t }) => (
          t(
            e.update(
              ne(e, (t, n) => {
                n.push({
                  from: t.from,
                  insert: e.facet(a.t),
                });
              }),
              {
                userEvent: 'input.indent',
              }
            )
          ),
          !0
        ),
        oe = ({ state: e, dispatch: t }) => (
          t(
            e.update(
              ne(e, (t, n) => {
                let i = /^\s*/.exec(t.text)[0];
                if (!i) return;
                let o = Object(r.d)(i, e.tabSize),
                  s = 0,
                  l = Object(a.s)(e, Math.max(0, o - Object(a.n)(e)));
                for (
                  ;
                  s < i.length &&
                  s < l.length &&
                  i.charCodeAt(s) == l.charCodeAt(s);

                )
                  s++;
                n.push({
                  from: t.from + s,
                  to: t.from + i.length,
                  insert: l.slice(s),
                });
              }),
              {
                userEvent: 'delete.dedent',
              }
            )
          ),
          !0
        ),
        se = [
          {
            key: 'Alt-ArrowLeft',
            mac: 'Ctrl-ArrowLeft',
            run: (e) => u(e, (t) => b(e.state, t, e.textDirection != o.c.LTR)),
            shift: (e) =>
              E(e, (t) => b(e.state, t, e.textDirection != o.c.LTR)),
          },
          {
            key: 'Alt-ArrowRight',
            mac: 'Ctrl-ArrowRight',
            run: (e) => u(e, (t) => b(e.state, t, e.textDirection == o.c.LTR)),
            shift: (e) =>
              E(e, (t) => b(e.state, t, e.textDirection == o.c.LTR)),
          },
          {
            key: 'Alt-ArrowUp',
            run: ({ state: e, dispatch: t }) => ee(e, t, !1),
          },
          {
            key: 'Shift-Alt-ArrowUp',
            run: ({ state: e, dispatch: t }) => te(e, t, !1),
          },
          {
            key: 'Alt-ArrowDown',
            run: ({ state: e, dispatch: t }) => ee(e, t, !0),
          },
          {
            key: 'Shift-Alt-ArrowDown',
            run: ({ state: e, dispatch: t }) => te(e, t, !0),
          },
          {
            key: 'Escape',
            run: ({ state: e, dispatch: t }) => {
              let n = e.selection,
                r = null;
              return (
                n.ranges.length > 1
                  ? (r = i.f.create([n.main]))
                  : n.main.empty || (r = i.f.create([i.f.cursor(n.main.head)])),
                !!r && (t(c(e, r)), !0)
              );
            },
          },
          {
            key: 'Alt-l',
            mac: 'Ctrl-l',
            run: ({ state: e, dispatch: t }) => {
              let n = Z(e).map(({ from: t, to: n }) =>
                i.f.range(t, Math.min(n + 1, e.doc.length))
              );
              return (
                t(
                  e.update({
                    selection: i.f.create(n),
                    userEvent: 'select',
                  })
                ),
                !0
              );
            },
          },
          {
            key: 'Mod-i',
            run: ({ state: e, dispatch: t }) => {
              let n = h(e.selection, (t) => {
                var n;
                let r = Object(a.w)(e).resolveInner(t.head, 1);
                for (
                  ;
                  !(
                    (r.from < t.from && r.to >= t.to) ||
                    (r.to > t.to && r.from <= t.from)
                  ) &&
                  (null === (n = r.parent) || void 0 === n ? void 0 : n.parent);

                )
                  r = r.parent;
                return i.f.range(r.to, r.from);
              });
              return t(c(e, n)), !0;
            },
            preventDefault: !0,
          },
          {
            key: 'Mod-[',
            run: oe,
          },
          {
            key: 'Mod-]',
            run: re,
          },
          {
            key: 'Mod-Alt-\\',
            run: ie,
          },
          {
            key: 'Shift-Mod-k',
            run: (e) => {
              let { state: t } = e,
                n = t.changes(
                  Z(t).map(
                    ({ from: e, to: n }) => (
                      e > 0 ? e-- : n < t.doc.length && n++,
                      {
                        from: e,
                        to: n,
                      }
                    )
                  )
                ),
                i = h(t.selection, (t) => e.moveVertically(t, !0)).map(n);
              return (
                e.dispatch({
                  changes: n,
                  selection: i,
                  scrollIntoView: !0,
                  userEvent: 'delete.line',
                }),
                !0
              );
            },
          },
          {
            key: 'Shift-Mod-\\',
            run: ({ state: e, dispatch: t }) => M(e, t, !1),
          },
        ].concat(
          [
            {
              key: 'ArrowLeft',
              run: p,
              shift: L,
              preventDefault: !0,
            },
            {
              key: 'Mod-ArrowLeft',
              mac: 'Alt-ArrowLeft',
              run: (e) => g(e, e.textDirection != o.c.LTR),
              shift: (e) => P(e, e.textDirection != o.c.LTR),
            },
            {
              mac: 'Cmd-ArrowLeft',
              run: j,
              shift: V,
            },
            {
              key: 'ArrowRight',
              run: m,
              shift: T,
              preventDefault: !0,
            },
            {
              key: 'Mod-ArrowRight',
              mac: 'Alt-ArrowRight',
              run: (e) => g(e, e.textDirection == o.c.LTR),
              shift: (e) => P(e, e.textDirection == o.c.LTR),
            },
            {
              mac: 'Cmd-ArrowRight',
              run: O,
              shift: F,
            },
            {
              key: 'ArrowUp',
              run: w,
              shift: R,
              preventDefault: !0,
            },
            {
              mac: 'Cmd-ArrowUp',
              run: W,
              shift: U,
            },
            {
              mac: 'Ctrl-ArrowUp',
              run: S,
              shift: q,
            },
            {
              key: 'ArrowDown',
              run: y,
              shift: N,
              preventDefault: !0,
            },
            {
              mac: 'Cmd-ArrowDown',
              run: _,
              shift: H,
            },
            {
              mac: 'Ctrl-ArrowDown',
              run: C,
              shift: z,
            },
            {
              key: 'PageUp',
              run: S,
              shift: q,
            },
            {
              key: 'PageDown',
              run: C,
              shift: z,
            },
            {
              key: 'Home',
              run: j,
              shift: V,
            },
            {
              key: 'Mod-Home',
              run: W,
              shift: U,
            },
            {
              key: 'End',
              run: O,
              shift: F,
            },
            {
              key: 'Mod-End',
              run: _,
              shift: H,
            },
            {
              key: 'Enter',
              run: ({ state: e, dispatch: t }) => {
                let n = e.changeByRange(({ from: t, to: n }) => {
                  let o =
                      t == n &&
                      (function (e, t) {
                        if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1)))
                          return {
                            from: t,
                            to: t,
                          };
                        let n,
                          i = Object(a.w)(e).resolveInner(t),
                          r = i.childBefore(t),
                          o = i.childAfter(t);
                        return r &&
                          o &&
                          r.to <= t &&
                          o.from >= t &&
                          (n = r.type.prop(l.b.closedBy)) &&
                          n.indexOf(o.name) > -1 &&
                          e.doc.lineAt(r.to).from == e.doc.lineAt(o.from).from
                          ? {
                              from: r.to,
                              to: o.from,
                            }
                          : null;
                      })(e, t),
                    s = new a.a(e, {
                      simulateBreak: t,
                      simulateDoubleBreak: !!o,
                    }),
                    h = Object(a.o)(s, t);
                  null == h &&
                    (h = /^\s*/.exec(e.doc.lineAt(t).text)[0].length);
                  let c = e.doc.lineAt(t);
                  for (; n < c.to && /\s/.test(c.text[n - c.from]); ) n++;
                  o
                    ? ({ from: t, to: n } = o)
                    : t > c.from &&
                      t < c.from + 100 &&
                      !/\S/.test(c.text.slice(0, t)) &&
                      (t = c.from);
                  let u = ['', Object(a.s)(e, h)];
                  return (
                    o && u.push(Object(a.s)(e, s.lineIndent(c.from, -1))),
                    {
                      changes: {
                        from: t,
                        to: n,
                        insert: r.a.of(u),
                      },
                      range: i.f.cursor(t + 1 + u[1].length),
                    }
                  );
                });
                return (
                  t(
                    e.update(n, {
                      scrollIntoView: !0,
                      userEvent: 'input',
                    })
                  ),
                  !0
                );
              },
            },
            {
              key: 'Mod-a',
              run: ({ state: e, dispatch: t }) => (
                t(
                  e.update({
                    selection: {
                      anchor: 0,
                      head: e.doc.length,
                    },
                    userEvent: 'select',
                  })
                ),
                !0
              ),
            },
            {
              key: 'Backspace',
              run: G,
              shift: G,
            },
            {
              key: 'Delete',
              run: Q,
              shift: Q,
            },
            {
              key: 'Mod-Backspace',
              mac: 'Alt-Backspace',
              run: Y,
            },
            {
              key: 'Mod-Delete',
              mac: 'Alt-Delete',
              run: (e) => K(e, !0),
            },
            {
              mac: 'Mod-Backspace',
              run: (e) =>
                J(e, (t) => {
                  let n = e.visualLineAt(t).from;
                  return t > n ? n : Math.max(0, t - 1);
                }),
            },
            {
              mac: 'Mod-Delete',
              run: X,
            },
          ].concat(
            [
              {
                key: 'Ctrl-b',
                run: p,
                shift: L,
                preventDefault: !0,
              },
              {
                key: 'Ctrl-f',
                run: m,
                shift: T,
              },
              {
                key: 'Ctrl-p',
                run: w,
                shift: R,
              },
              {
                key: 'Ctrl-n',
                run: y,
                shift: N,
              },
              {
                key: 'Ctrl-a',
                run: (e) =>
                  u(e, (t) => i.f.cursor(e.visualLineAt(t.head).from, 1)),
                shift: (e) =>
                  E(e, (t) => i.f.cursor(e.visualLineAt(t.head).from)),
              },
              {
                key: 'Ctrl-e',
                run: (e) =>
                  u(e, (t) => i.f.cursor(e.visualLineAt(t.head).to, -1)),
                shift: (e) =>
                  E(e, (t) => i.f.cursor(e.visualLineAt(t.head).to)),
              },
              {
                key: 'Ctrl-d',
                run: Q,
              },
              {
                key: 'Ctrl-h',
                run: G,
              },
              {
                key: 'Ctrl-k',
                run: X,
              },
              {
                key: 'Ctrl-Alt-h',
                run: Y,
              },
              {
                key: 'Ctrl-o',
                run: ({ state: e, dispatch: t }) => {
                  let n = e.changeByRange((e) => ({
                    changes: {
                      from: e.from,
                      to: e.to,
                      insert: r.a.of(['', '']),
                    },
                    range: i.f.cursor(e.from),
                  }));
                  return (
                    t(
                      e.update(n, {
                        scrollIntoView: !0,
                        userEvent: 'input',
                      })
                    ),
                    !0
                  );
                },
              },
              {
                key: 'Ctrl-t',
                run: ({ state: e, dispatch: t }) => {
                  let n = e.changeByRange((t) => {
                    if (!t.empty || 0 == t.from || t.from == e.doc.length)
                      return {
                        range: t,
                      };
                    let n = t.from,
                      o = e.doc.lineAt(n),
                      s =
                        n == o.from
                          ? n - 1
                          : Object(r.e)(o.text, n - o.from, !1) + o.from,
                      a =
                        n == o.to
                          ? n + 1
                          : Object(r.e)(o.text, n - o.from, !0) + o.from;
                    return {
                      changes: {
                        from: s,
                        to: a,
                        insert: e.doc.slice(n, a).append(e.doc.slice(s, n)),
                      },
                      range: i.f.cursor(a),
                    };
                  });
                  return (
                    !n.changes.empty &&
                    (t(
                      e.update(n, {
                        scrollIntoView: !0,
                        userEvent: 'move.character',
                      })
                    ),
                    !0)
                  );
                },
              },
              {
                key: 'Alt-<',
                run: W,
              },
              {
                key: 'Alt->',
                run: _,
              },
              {
                key: 'Ctrl-v',
                run: C,
              },
              {
                key: 'Alt-v',
                run: S,
              },
            ].map((e) => ({
              mac: e.key,
              run: e.run,
              shift: e.shift,
            }))
          )
        ),
        ae = {
          key: 'Tab',
          run: re,
          shift: oe,
        };
    },
    QpUv: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return w;
      }),
        n.d(t, 'b', function () {
          return f;
        });
      var i = n('AtEE'),
        r = n('4eob'),
        o = n('fK0Z'),
        s = n('cmz6'),
        a = n('KV2Y');
      class l {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.diagnostic = n);
        }
      }
      class h {
        constructor(e, t, n) {
          (this.diagnostics = e), (this.panel = t), (this.selected = n);
        }
        static init(e, t) {
          let n = i.b.set(
            e.map((e) =>
              e.from < e.to
                ? i.b
                    .mark({
                      attributes: {
                        class: 'cm-lintRange cm-lintRange-' + e.severity,
                      },
                      diagnostic: e,
                    })
                    .range(e.from, e.to)
                : i.b
                    .widget({
                      widget: new S(e),
                      diagnostic: e,
                    })
                    .range(e.from)
            ),
            !0
          );
          return new h(n, t, c(n));
        }
      }

      function c(e, t = null, n = 0) {
        let i = null;
        return (
          e.between(n, 1e9, (e, n, { spec: r }) => {
            if (!t || r.diagnostic == t)
              return (i = new l(e, n, r.diagnostic)), !1;
          }),
          i
        );
      }

      function u(e, t, n) {
        return e.field(g, !1)
          ? t
          : t.concat(
              r.k.appendConfig.of([
                g.init(n),
                i.d.decorations.compute([g], (e) => {
                  let { selected: t, panel: n } = e.field(g);
                  return t && n && t.from != t.to
                    ? i.b.set([v.range(t.from, t.to)])
                    : i.b.none;
                }),
                Object(o.a)(b),
                j,
              ])
            );
      }

      function f(e, t) {
        return {
          effects: u(e, [d.of(t)], () => h.init(t, null)),
        };
      }
      const d = r.k.define(),
        p = r.k.define(),
        m = r.k.define(),
        g = r.l.define({
          create: () => new h(i.b.none, null, null),
          update(e, t) {
            if (t.docChanged) {
              let n = e.diagnostics.map(t.changes),
                i = null;
              if (e.selected) {
                let r = t.changes.mapPos(e.selected.from, 1);
                i = c(n, e.selected.diagnostic, r) || c(n, null, r);
              }
              e = new h(n, e.panel, i);
            }
            for (let n of t.effects)
              n.is(d)
                ? (e = h.init(n.value, e.panel))
                : n.is(p)
                ? (e = new h(
                    e.diagnostics,
                    n.value ? A.open : null,
                    e.selected
                  ))
                : n.is(m) && (e = new h(e.diagnostics, e.panel, n.value));
            return e;
          },
          provide: (e) => [
            s.b.from(e, (e) => e.panel),
            i.d.decorations.from(e, (e) => e.diagnostics),
          ],
        }),
        v = i.b.mark({
          class: 'cm-lintRange cm-lintRange-active',
        });

      function b(e, t, n) {
        let { diagnostics: i } = e.state.field(g),
          r = [],
          o = 2e8,
          s = 0;
        return (
          i.between(
            t - (n < 0 ? 1 : 0),
            t + (n > 0 ? 1 : 0),
            (e, i, { spec: a }) => {
              t >= e &&
                t <= i &&
                (e == i || ((t > e || n > 0) && (t < i || n < 0))) &&
                (r.push(a.diagnostic),
                (o = Math.min(e, o)),
                (s = Math.max(i, s)));
            }
          ),
          r.length
            ? {
                pos: o,
                end: s,
                above: e.state.doc.lineAt(o).to < s,
                create: () => ({
                  dom: Object(a.a)(
                    'ul',
                    {
                      class: 'cm-tooltip-lint',
                    },
                    r.map((t) => k(e, t, !1))
                  ),
                }),
              }
            : null
        );
      }
      const x = (e) => {
          let t = e.state.field(g, !1);
          return (
            !(!t || !t.panel) &&
            (e.dispatch({
              effects: p.of(!1),
            }),
            !0)
          );
        },
        w = [
          {
            key: 'Mod-Shift-m',
            run: (e) => {
              let t = e.state.field(g, !1);
              (t && t.panel) ||
                e.dispatch({
                  effects: u(e.state, [p.of(!0)], () => h.init([], A.open)),
                });
              let n = Object(s.a)(e, A.open);
              return n && n.dom.querySelector('.cm-panel-lint ul').focus(), !0;
            },
          },
          {
            key: 'F8',
            run: (e) => {
              let t = e.state.field(g, !1);
              if (!t) return !1;
              let n = e.state.selection.main,
                i = t.diagnostics.iter(n.to + 1);
              return (
                !(
                  !i.value &&
                  ((i = t.diagnostics.iter(0)),
                  !i.value || (i.from == n.from && i.to == n.to))
                ) &&
                (e.dispatch({
                  selection: {
                    anchor: i.from,
                    head: i.to,
                  },
                  scrollIntoView: !0,
                }),
                !0)
              );
            },
          },
        ];

      function y(e) {
        let t = [];
        if (e)
          e: for (let { name: n } of e) {
            for (let e = 0; e < n.length; e++) {
              let i = n[e];
              if (
                /[a-zA-Z]/.test(i) &&
                !t.some((e) => e.toLowerCase() == i.toLowerCase())
              ) {
                t.push(i);
                continue e;
              }
            }
            t.push('');
          }
        return t;
      }

      function k(e, t, n) {
        var i;
        let r = n ? y(t.actions) : [];
        return Object(a.a)(
          'li',
          {
            class: 'cm-diagnostic cm-diagnostic-' + t.severity,
          },
          Object(a.a)(
            'span',
            {
              class: 'cm-diagnosticText',
            },
            t.message
          ),
          null === (i = t.actions) || void 0 === i
            ? void 0
            : i.map((n, i) => {
                let o = (i) => {
                    i.preventDefault();
                    let r = c(e.state.field(g).diagnostics, t);
                    r && n.apply(e, r.from, r.to);
                  },
                  { name: s } = n,
                  l = r[i] ? s.indexOf(r[i]) : -1,
                  h =
                    l < 0
                      ? s
                      : [
                          s.slice(0, l),
                          Object(a.a)('u', s.slice(l, l + 1)),
                          s.slice(l + 1),
                        ];
                return Object(a.a)(
                  'button',
                  {
                    class: 'cm-diagnosticAction',
                    onclick: o,
                    onmousedown: o,
                    'aria-label': ` Action: ${s}${
                      l < 0 ? '' : ` (access key "${r[i]})"`
                    }.`,
                  },
                  h
                );
              }),
          t.source &&
            Object(a.a)(
              'div',
              {
                class: 'cm-diagnosticSource',
              },
              t.source
            )
        );
      }
      class S extends i.g {
        constructor(e) {
          super(), (this.diagnostic = e);
        }
        eq(e) {
          return e.diagnostic == this.diagnostic;
        }
        toDOM() {
          return Object(a.a)('span', {
            class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity,
          });
        }
      }
      class C {
        constructor(e, t) {
          (this.diagnostic = t),
            (this.id =
              'item_' + Math.floor(4294967295 * Math.random()).toString(16)),
            (this.dom = k(e, t, !0)),
            (this.dom.id = this.id),
            this.dom.setAttribute('role', 'option');
        }
      }
      class A {
        constructor(e) {
          (this.view = e), (this.items = []);
          (this.list = Object(a.a)('ul', {
            tabIndex: 0,
            role: 'listbox',
            'aria-label': this.view.state.phrase('Diagnostics'),
            onkeydown: (t) => {
              if (27 == t.keyCode) x(this.view), this.view.focus();
              else if (38 == t.keyCode || 33 == t.keyCode)
                this.moveSelection(
                  (this.selectedIndex - 1 + this.items.length) %
                    this.items.length
                );
              else if (40 == t.keyCode || 34 == t.keyCode)
                this.moveSelection(
                  (this.selectedIndex + 1) % this.items.length
                );
              else if (36 == t.keyCode) this.moveSelection(0);
              else if (35 == t.keyCode)
                this.moveSelection(this.items.length - 1);
              else if (13 == t.keyCode) this.view.focus();
              else {
                if (
                  !(
                    t.keyCode >= 65 &&
                    t.keyCode <= 90 &&
                    this.selectedIndex >= 0
                  )
                )
                  return;
                {
                  let { diagnostic: n } = this.items[this.selectedIndex],
                    i = y(n.actions);
                  for (let r = 0; r < i.length; r++)
                    if (i[r].toUpperCase().charCodeAt(0) == t.keyCode) {
                      let t = c(this.view.state.field(g).diagnostics, n);
                      t && n.actions[r].apply(e, t.from, t.to);
                    }
                }
              }
              t.preventDefault();
            },
            onclick: (e) => {
              for (let t = 0; t < this.items.length; t++)
                this.items[t].dom.contains(e.target) && this.moveSelection(t);
            },
          })),
            (this.dom = Object(a.a)(
              'div',
              {
                class: 'cm-panel-lint',
              },
              this.list,
              Object(a.a)(
                'button',
                {
                  name: 'close',
                  'aria-label': this.view.state.phrase('close'),
                  onclick: () => x(this.view),
                },
                '\xd7'
              )
            )),
            this.update();
        }
        get selectedIndex() {
          let e = this.view.state.field(g).selected;
          if (!e) return -1;
          for (let t = 0; t < this.items.length; t++)
            if (this.items[t].diagnostic == e.diagnostic) return t;
          return -1;
        }
        update() {
          let { diagnostics: e, selected: t } = this.view.state.field(g),
            n = 0,
            i = !1,
            r = null;
          for (
            e.between(0, this.view.state.doc.length, (e, o, { spec: s }) => {
              let a,
                l = -1;
              for (let t = n; t < this.items.length; t++)
                if (this.items[t].diagnostic == s.diagnostic) {
                  l = t;
                  break;
                }
              l < 0
                ? ((a = new C(this.view, s.diagnostic)),
                  this.items.splice(n, 0, a),
                  (i = !0))
                : ((a = this.items[l]),
                  l > n && (this.items.splice(n, l - n), (i = !0))),
                t && a.diagnostic == t.diagnostic
                  ? a.dom.hasAttribute('aria-selected') ||
                    (a.dom.setAttribute('aria-selected', 'true'), (r = a))
                  : a.dom.hasAttribute('aria-selected') &&
                    a.dom.removeAttribute('aria-selected'),
                n++;
            });
            n < this.items.length &&
            !(1 == this.items.length && this.items[0].diagnostic.from < 0);

          )
            (i = !0), this.items.pop();
          0 == this.items.length &&
            (this.items.push(
              new C(this.view, {
                from: -1,
                to: -1,
                severity: 'info',
                message: this.view.state.phrase('No diagnostics'),
              })
            ),
            (i = !0)),
            r
              ? (this.list.setAttribute('aria-activedescendant', r.id),
                this.view.requestMeasure({
                  key: this,
                  read: () => ({
                    sel: r.dom.getBoundingClientRect(),
                    panel: this.list.getBoundingClientRect(),
                  }),
                  write: ({ sel: e, panel: t }) => {
                    e.top < t.top
                      ? (this.list.scrollTop -= t.top - e.top)
                      : e.bottom > t.bottom &&
                        (this.list.scrollTop += e.bottom - t.bottom);
                  },
                }))
              : this.selectedIndex < 0 &&
                this.list.removeAttribute('aria-activedescendant'),
            i && this.sync();
        }
        sync() {
          let e = this.list.firstChild;

          function t() {
            let t = e;
            (e = t.nextSibling), t.remove();
          }
          for (let n of this.items)
            if (n.dom.parentNode == this.list) {
              for (; e != n.dom; ) t();
              e = n.dom.nextSibling;
            } else this.list.insertBefore(n.dom, e);
          for (; e; ) t();
        }
        moveSelection(e) {
          if (this.selectedIndex < 0) return;
          let t = c(
            this.view.state.field(g).diagnostics,
            this.items[e].diagnostic
          );
          t &&
            this.view.dispatch({
              selection: {
                anchor: t.from,
                head: t.to,
              },
              scrollIntoView: !0,
              effects: m.of(t),
            });
        }
        static open(e) {
          return new A(e);
        }
      }

      function O(e) {
        if ('function' != typeof btoa) return 'none';
        return `url('data:image/svg+xml;base64,${btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="3">\n    <path d="m0 3 l2 -2 l1 0 l2 2 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>\n  </svg>`
        )}')`;
      }
      const j = i.d.baseTheme({
        '.cm-diagnostic': {
          padding: '3px 6px 3px 8px',
          marginLeft: '-1px',
          display: 'block',
          whiteSpace: 'pre-wrap',
        },
        '.cm-diagnostic-error': {
          borderLeft: '5px solid #d11',
        },
        '.cm-diagnostic-warning': {
          borderLeft: '5px solid orange',
        },
        '.cm-diagnostic-info': {
          borderLeft: '5px solid #999',
        },
        '.cm-diagnosticAction': {
          font: 'inherit',
          border: 'none',
          padding: '2px 4px',
          backgroundColor: '#444',
          color: 'white',
          borderRadius: '3px',
          marginLeft: '8px',
        },
        '.cm-diagnosticSource': {
          fontSize: '70%',
          opacity: 0.7,
        },
        '.cm-lintRange': {
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'repeat-x',
        },
        '.cm-lintRange-error': {
          backgroundImage: O('#d11'),
        },
        '.cm-lintRange-warning': {
          backgroundImage: O('orange'),
        },
        '.cm-lintRange-info': {
          backgroundImage: O('#999'),
        },
        '.cm-lintRange-active': {
          backgroundColor: '#ffdd9980',
        },
        '.cm-tooltip-lint': {
          padding: 0,
          margin: 0,
        },
        '.cm-lintPoint': {
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '-2px',
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderBottom: '4px solid #d11',
          },
        },
        '.cm-lintPoint-warning': {
          '&:after': {
            borderBottomColor: 'orange',
          },
        },
        '.cm-lintPoint-info': {
          '&:after': {
            borderBottomColor: '#999',
          },
        },
        '.cm-panel.cm-panel-lint': {
          position: 'relative',
          '& ul': {
            maxHeight: '100px',
            overflowY: 'auto',
            '& [aria-selected]': {
              backgroundColor: '#ddd',
              '& u': {
                textDecoration: 'underline',
              },
            },
            '&:focus [aria-selected]': {
              background_fallback: '#bdf',
              backgroundColor: 'Highlight',
              color_fallback: 'white',
              color: 'HighlightText',
            },
            '& u': {
              textDecoration: 'none',
            },
            padding: 0,
            margin: 0,
          },
          '& [name=close]': {
            position: 'absolute',
            top: '0',
            right: '2px',
            background: 'inherit',
            border: 'none',
            font: 'inherit',
            padding: 0,
            margin: 0,
          },
        },
      });
    },
    WYGy: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      }),
        n.d(t, 'b', function () {
          return m;
        });
      var i = n('4eob'),
        r = n('yqQ+'),
        o = n('AtEE'),
        s = n('lmln');
      const a = o.d.baseTheme({
          '.cm-matchingBracket': {
            color: '#0b0',
          },
          '.cm-nonmatchingBracket': {
            color: '#a22',
          },
        }),
        l = '()[]{}',
        h = i.h.define({
          combine: (e) =>
            Object(i.n)(e, {
              afterCursor: !0,
              brackets: l,
              maxScanDistance: 1e4,
            }),
        }),
        c = o.b.mark({
          class: 'cm-matchingBracket',
        }),
        u = o.b.mark({
          class: 'cm-nonmatchingBracket',
        }),
        f = [
          i.l.define({
            create: () => o.b.none,
            update(e, t) {
              if (!t.docChanged && !t.selection) return e;
              let n = [],
                i = t.state.facet(h);
              for (let r of t.state.selection.ranges) {
                if (!r.empty) continue;
                let e =
                  m(t.state, r.head, -1, i) ||
                  (r.head > 0 && m(t.state, r.head - 1, 1, i)) ||
                  (i.afterCursor &&
                    (m(t.state, r.head, 1, i) ||
                      (r.head < t.state.doc.length &&
                        m(t.state, r.head + 1, -1, i))));
                if (!e) continue;
                let o = e.matched ? c : u;
                n.push(o.range(e.start.from, e.start.to)),
                  e.end && n.push(o.range(e.end.from, e.end.to));
              }
              return o.b.set(n, !0);
            },
            provide: (e) => o.d.decorations.from(e),
          }),
          a,
        ];

      function d(e = {}) {
        return [h.of(e), f];
      }

      function p(e, t, n) {
        let i = e.prop(t < 0 ? s.b.openedBy : s.b.closedBy);
        if (i) return i;
        if (1 == e.name.length) {
          let i = n.indexOf(e.name);
          if (i > -1 && i % 2 == (t < 0 ? 1 : 0)) return [n[i + t]];
        }
        return null;
      }

      function m(e, t, n, i = {}) {
        let o,
          s = i.maxScanDistance || 1e4,
          a = i.brackets || l,
          h = Object(r.w)(e),
          c = h.resolve(t, n);
        return (o = p(c.type, n, a))
          ? (function (e, t, n, i, r, o) {
              let s = i.parent,
                a = {
                  from: i.from,
                  to: i.to,
                },
                l = 0,
                h = null === s || void 0 === s ? void 0 : s.cursor;
              if (h && (n < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
                do {
                  if (n < 0 ? h.to <= i.from : h.from >= i.to) {
                    if (0 == l && r.indexOf(h.type.name) > -1)
                      return {
                        start: a,
                        end: {
                          from: h.from,
                          to: h.to,
                        },
                        matched: !0,
                      };
                    if (p(h.type, n, o)) l++;
                    else if (p(h.type, -n, o) && (l--, 0 == l))
                      return {
                        start: a,
                        end: {
                          from: h.from,
                          to: h.to,
                        },
                        matched: !1,
                      };
                  }
                } while (n < 0 ? h.prevSibling() : h.nextSibling());
              return {
                start: a,
                matched: !1,
              };
            })(0, 0, n, c, o, a)
          : (function (e, t, n, i, r, o, s) {
              let a = n < 0 ? e.sliceDoc(t - 1, t) : e.sliceDoc(t, t + 1),
                l = s.indexOf(a);
              if (l < 0 || (l % 2 == 0) != n > 0) return null;
              let h = {
                  from: n < 0 ? t - 1 : t,
                  to: n > 0 ? t + 1 : t,
                },
                c = e.doc.iterRange(t, n > 0 ? e.doc.length : 0),
                u = 0;
              for (let f = 0; !c.next().done && f <= o; ) {
                let e = c.value;
                n < 0 && (f += e.length);
                let o = t + f * n;
                for (
                  let t = n > 0 ? 0 : e.length - 1, a = n > 0 ? e.length : -1;
                  t != a;
                  t += n
                ) {
                  let a = s.indexOf(e[t]);
                  if (!(a < 0 || i.resolve(o + t, 1).type != r))
                    if ((a % 2 == 0) == n > 0) u++;
                    else {
                      if (1 == u)
                        return {
                          start: h,
                          end: {
                            from: o + t,
                            to: o + t + 1,
                          },
                          matched: a >> 1 == l >> 1,
                        };
                      u--;
                    }
                }
                n > 0 && (f += e.length);
              }
              return c.done
                ? {
                    start: h,
                    matched: !1,
                  }
                : null;
            })(e, t, n, h, c.type, s, a);
      }
    },
    Wzyh: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return h;
      }),
        n.d(t, 'b', function () {
          return A;
        }),
        n.d(t, 'c', function () {
          return b;
        }),
        n.d(t, 'd', function () {
          return d;
        });
      var i = n('4eob'),
        r = n('AtEE'),
        o = n('yqQ+'),
        s = n('h5Ab'),
        a = n('wG49');

      function l(e, t) {
        let n = t.mapPos(e.from, 1),
          i = t.mapPos(e.to, -1);
        return n >= i
          ? void 0
          : {
              from: n,
              to: i,
            };
      }
      const h = i.k.define({
          map: l,
        }),
        c = i.k.define({
          map: l,
        });

      function u(e) {
        let t = [];
        for (let { head: n } of e.state.selection.ranges)
          t.some((e) => e.from <= n && e.to >= n) || t.push(e.visualLineAt(n));
        return t;
      }
      const f = i.l.define({
        create: () => r.b.none,
        update(e, t) {
          e = e.map(t.changes);
          for (let n of t.effects)
            n.is(h) && !m(e, n.value.from, n.value.to)
              ? (e = e.update({
                  add: [k.range(n.value.from, n.value.to)],
                }))
              : n.is(c) &&
                (e = e.update({
                  filter: (e, t) => n.value.from != e || n.value.to != t,
                  filterFrom: n.value.from,
                  filterTo: n.value.to,
                }));
          if (t.selection) {
            let n = !1,
              { head: i } = t.selection.main;
            e.between(i, i, (e, t) => {
              e < i && t > i && (n = !0);
            }),
              n &&
                (e = e.update({
                  filterFrom: i,
                  filterTo: i,
                  filter: (e, t) => t <= i || e >= i,
                }));
          }
          return e;
        },
        provide: (e) => r.d.decorations.from(e),
      });

      function d(e) {
        return e.field(f, !1) || a.a.empty;
      }

      function p(e, t, n) {
        var i;
        let r = null;
        return (
          null === (i = e.field(f, !1)) ||
            void 0 === i ||
            i.between(t, n, (e, t) => {
              (!r || r.from > e) &&
                (r = {
                  from: e,
                  to: t,
                });
            }),
          r
        );
      }

      function m(e, t, n) {
        let i = !1;
        return (
          e.between(t, t, (e, r) => {
            e == t && r == n && (i = !0);
          }),
          i
        );
      }

      function g(e, t) {
        return e.field(f, !1) ? t : t.concat(i.k.appendConfig.of(y()));
      }

      function v(e, t, n = !0) {
        let i = e.state.doc.lineAt(t.from).number,
          o = e.state.doc.lineAt(t.to).number;
        return r.d.announce.of(
          `${e.state.phrase(
            n ? 'Folded lines' : 'Unfolded lines'
          )} ${i} ${e.state.phrase('to')} ${o}.`
        );
      }
      const b = [
          {
            key: 'Ctrl-Shift-[',
            mac: 'Cmd-Alt-[',
            run: (e) => {
              for (let t of u(e)) {
                let n = Object(o.m)(e.state, t.from, t.to);
                if (n)
                  return (
                    e.dispatch({
                      effects: g(e.state, [h.of(n), v(e, n)]),
                    }),
                    !0
                  );
              }
              return !1;
            },
          },
          {
            key: 'Ctrl-Shift-]',
            mac: 'Cmd-Alt-]',
            run: (e) => {
              if (!e.state.field(f, !1)) return !1;
              let t = [];
              for (let n of u(e)) {
                let i = p(e.state, n.from, n.to);
                i && t.push(c.of(i), v(e, i, !1));
              }
              return (
                t.length &&
                  e.dispatch({
                    effects: t,
                  }),
                t.length > 0
              );
            },
          },
          {
            key: 'Ctrl-Alt-[',
            run: (e) => {
              let { state: t } = e,
                n = [];
              for (let i = 0; i < t.doc.length; ) {
                let r = e.visualLineAt(i),
                  s = Object(o.m)(t, r.from, r.to);
                s && n.push(h.of(s)),
                  (i = (s ? e.visualLineAt(s.to) : r).to + 1);
              }
              return (
                n.length &&
                  e.dispatch({
                    effects: g(e.state, n),
                  }),
                !!n.length
              );
            },
          },
          {
            key: 'Ctrl-Alt-]',
            run: (e) => {
              let t = e.state.field(f, !1);
              if (!t || !t.size) return !1;
              let n = [];
              return (
                t.between(0, e.state.doc.length, (e, t) => {
                  n.push(
                    c.of({
                      from: e,
                      to: t,
                    })
                  );
                }),
                e.dispatch({
                  effects: n,
                }),
                !0
              );
            },
          },
        ],
        x = {
          placeholderDOM: null,
          placeholderText: '\u2026',
        },
        w = i.h.define({
          combine: (e) => Object(i.n)(e, x),
        });

      function y(e) {
        let t = [f, O];
        return e && t.push(w.of(e)), t;
      }
      const k = r.b.replace({
          widget: new (class extends r.g {
            ignoreEvents() {
              return !1;
            }
            toDOM(e) {
              let { state: t } = e,
                n = t.facet(w);
              if (n.placeholderDOM) return n.placeholderDOM();
              let i = document.createElement('span');
              return (
                (i.textContent = n.placeholderText),
                i.setAttribute('aria-label', t.phrase('folded code')),
                (i.title = t.phrase('unfold')),
                (i.className = 'cm-foldPlaceholder'),
                (i.onclick = (t) => {
                  let n = e.visualLineAt(e.posAtDOM(t.target)),
                    i = p(e.state, n.from, n.to);
                  i &&
                    e.dispatch({
                      effects: c.of(i),
                    }),
                    t.preventDefault();
                }),
                i
              );
            }
          })(),
        }),
        S = {
          openText: '\u2304',
          closedText: '\u203a',
          markerDOM: null,
        };
      class C extends s.a {
        constructor(e, t) {
          super(), (this.config = e), (this.open = t);
        }
        eq(e) {
          return this.config == e.config && this.open == e.open;
        }
        toDOM(e) {
          if (this.config.markerDOM) return this.config.markerDOM(this.open);
          let t = document.createElement('span');
          return (
            (t.textContent = this.open
              ? this.config.openText
              : this.config.closedText),
            (t.title = e.state.phrase(this.open ? 'Fold line' : 'Unfold line')),
            t
          );
        }
      }

      function A(e = {}) {
        let t = Object.assign(Object.assign({}, S), e),
          n = new C(t, !0),
          i = new C(t, !1),
          l = r.f.fromClass(
            class {
              constructor(e) {
                (this.from = e.viewport.from),
                  (this.markers = this.buildMarkers(e));
              }
              update(e) {
                (e.docChanged ||
                  e.viewportChanged ||
                  e.startState.facet(o.u) != e.state.facet(o.u) ||
                  e.startState.field(f, !1) != e.state.field(f, !1)) &&
                  (this.markers = this.buildMarkers(e.view));
              }
              buildMarkers(e) {
                let t = new a.b();
                return (
                  e.viewportLines((r) => {
                    let s = p(e.state, r.from, r.to)
                      ? i
                      : Object(o.m)(e.state, r.from, r.to)
                      ? n
                      : null;
                    s && t.add(r.from, r.from, s);
                  }),
                  t.finish()
                );
              }
            }
          );
        return [
          l,
          Object(s.b)({
            class: 'cm-foldGutter',
            markers(e) {
              var t;
              return (
                (null === (t = e.plugin(l)) || void 0 === t
                  ? void 0
                  : t.markers) || a.a.empty
              );
            },
            initialSpacer: () => new C(t, !1),
            domEventHandlers: {
              click: (e, t) => {
                let n = p(e.state, t.from, t.to);
                if (n)
                  return (
                    e.dispatch({
                      effects: c.of(n),
                    }),
                    !0
                  );
                let i = Object(o.m)(e.state, t.from, t.to);
                return (
                  !!i &&
                  (e.dispatch({
                    effects: h.of(i),
                  }),
                  !0)
                );
              },
            },
          }),
          y(),
        ];
      }
      const O = r.d.baseTheme({
        '.cm-foldPlaceholder': {
          backgroundColor: '#eee',
          border: '1px solid #ddd',
          color: '#888',
          borderRadius: '.2em',
          margin: '0 1px',
          padding: '0 1px',
          cursor: 'pointer',
        },
        '.cm-foldGutter .cm-gutterElement': {
          padding: '0 1px',
          cursor: 'pointer',
        },
      });
    },
    cmz6: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var i = n('AtEE'),
        r = n('4eob');
      const o = r.h.define({
        combine(e) {
          let t, n;
          for (let i of e)
            (t = t || i.topContainer), (n = n || i.bottomContainer);
          return {
            topContainer: t,
            bottomContainer: n,
          };
        },
      });

      function s(e, t) {
        let n = e.plugin(a),
          i = n ? n.specs.indexOf(t) : -1;
        return i > -1 ? n.panels[i] : null;
      }
      const a = i.f.fromClass(
        class {
          constructor(e) {
            (this.input = e.state.facet(u)),
              (this.specs = this.input.filter((e) => e)),
              (this.panels = this.specs.map((t) => t(e)));
            let t = e.state.facet(o);
            (this.top = new l(e, !0, t.topContainer)),
              (this.bottom = new l(e, !1, t.bottomContainer)),
              this.top.sync(this.panels.filter((e) => e.top)),
              this.bottom.sync(this.panels.filter((e) => !e.top));
            for (let n of this.panels)
              n.dom.classList.add('cm-panel'), n.mount && n.mount();
          }
          update(e) {
            let t = e.state.facet(o);
            this.top.container != t.topContainer &&
              (this.top.sync([]),
              (this.top = new l(e.view, !0, t.topContainer))),
              this.bottom.container != t.bottomContainer &&
                (this.bottom.sync([]),
                (this.bottom = new l(e.view, !1, t.bottomContainer))),
              this.top.syncClasses(),
              this.bottom.syncClasses();
            let n = e.state.facet(u);
            if (n != this.input) {
              let t = n.filter((e) => e),
                i = [],
                r = [],
                o = [],
                s = [];
              for (let n of t) {
                let t,
                  a = this.specs.indexOf(n);
                a < 0
                  ? ((t = n(e.view)), s.push(t))
                  : ((t = this.panels[a]), t.update && t.update(e)),
                  i.push(t),
                  (t.top ? r : o).push(t);
              }
              (this.specs = t),
                (this.panels = i),
                this.top.sync(r),
                this.bottom.sync(o);
              for (let e of s)
                e.dom.classList.add('cm-panel'), e.mount && e.mount();
            } else for (let i of this.panels) i.update && i.update(e);
          }
          destroy() {
            this.top.sync([]), this.bottom.sync([]);
          }
        },
        {
          provide: i.e.scrollMargins.from((e) => ({
            top: e.top.scrollMargin(),
            bottom: e.bottom.scrollMargin(),
          })),
        }
      );
      class l {
        constructor(e, t, n) {
          (this.view = e),
            (this.top = t),
            (this.container = n),
            (this.dom = void 0),
            (this.classes = ''),
            (this.panels = []),
            this.syncClasses();
        }
        sync(e) {
          (this.panels = e), this.syncDOM();
        }
        syncDOM() {
          if (0 == this.panels.length)
            return void (this.dom && (this.dom.remove(), (this.dom = void 0)));
          if (!this.dom) {
            (this.dom = document.createElement('div')),
              (this.dom.className = this.top
                ? 'cm-panels cm-panels-top'
                : 'cm-panels cm-panels-bottom'),
              (this.dom.style[this.top ? 'top' : 'bottom'] = '0');
            let e = this.container || this.view.dom;
            e.insertBefore(this.dom, this.top ? e.firstChild : null);
          }
          let e = this.dom.firstChild;
          for (let t of this.panels)
            if (t.dom.parentNode == this.dom) {
              for (; e != t.dom; ) e = h(e);
              e = e.nextSibling;
            } else this.dom.insertBefore(t.dom, e);
          for (; e; ) e = h(e);
        }
        scrollMargin() {
          return !this.dom || this.container
            ? 0
            : Math.max(
                0,
                this.top
                  ? this.dom.getBoundingClientRect().bottom -
                      Math.max(
                        0,
                        this.view.scrollDOM.getBoundingClientRect().top
                      )
                  : Math.min(
                      innerHeight,
                      this.view.scrollDOM.getBoundingClientRect().bottom
                    ) - this.dom.getBoundingClientRect().top
              );
        }
        syncClasses() {
          if (this.container && this.classes != this.view.themeClasses) {
            for (let e of this.classes.split(' '))
              e && this.container.classList.remove(e);
            for (let e of (this.classes = this.view.themeClasses).split(' '))
              e && this.container.classList.add(e);
          }
        }
      }

      function h(e) {
        let t = e.nextSibling;
        return e.remove(), t;
      }
      const c = i.d.baseTheme({
          '.cm-panels': {
            boxSizing: 'border-box',
            position: 'sticky',
            left: 0,
            right: 0,
          },
          '&light .cm-panels': {
            backgroundColor: '#f5f5f5',
            color: 'black',
          },
          '&light .cm-panels-top': {
            borderBottom: '1px solid #ddd',
          },
          '&light .cm-panels-bottom': {
            borderTop: '1px solid #ddd',
          },
          '&dark .cm-panels': {
            backgroundColor: '#333338',
            color: 'white',
          },
        }),
        u = r.h.define({
          enables: [a, c],
        });
    },
    'dI/k': function (e, t, n) {
      'use strict';
      n.d(t, 'f', function () {
        return o;
      }),
        n.d(t, 'j', function () {
          return s;
        }),
        n.d(t, 'd', function () {
          return a;
        }),
        n.d(t, 'b', function () {
          return h;
        }),
        n.d(t, 'e', function () {
          return f;
        }),
        n.d(t, 'c', function () {
          return c;
        }),
        n.d(t, 'a', function () {
          return u;
        }),
        n.d(t, 'h', function () {
          return l;
        }),
        n.d(t, 'g', function () {
          return d;
        }),
        n.d(t, 'i', function () {
          return p;
        });
      var i = n('tpqs'),
        r = {
          pdf: 'application/pdf',
          '3gpp': 'video/3gpp',
          adp: 'audio/adpcm',
          au: 'audio/basic',
          snd: 'audio/basic',
          mid: 'audio/midi',
          midi: 'audio/midi',
          kar: 'audio/midi',
          rmi: 'audio/midi',
          mp3: 'audio/mpeg',
          m4a: 'audio/mp4',
          mp4a: 'audio/mp4',
          mpga: 'audio/mpeg',
          mp2: 'audio/mpeg',
          mp2a: 'audio/mpeg',
          m2a: 'audio/mpeg',
          m3a: 'audio/mpeg',
          oga: 'audio/ogg',
          ogg: 'audio/ogg',
          spx: 'audio/ogg',
          s3m: 'audio/s3m',
          sil: 'audio/silk',
          uva: 'audio/vnd.dece.audio',
          uvva: 'audio/vnd.dece.audio',
          eol: 'audio/vnd.digital-winds',
          dra: 'audio/vnd.dra',
          dts: 'audio/vnd.dts',
          dtshd: 'audio/vnd.dts.hd',
          lvp: 'audio/vnd.lucent.voice',
          pya: 'audio/vnd.ms-playready.media.pya',
          ecelp4800: 'audio/vnd.nuera.ecelp4800',
          ecelp7470: 'audio/vnd.nuera.ecelp7470',
          ecelp9600: 'audio/vnd.nuera.ecelp9600',
          rip: 'audio/vnd.rip',
          wav: 'audio/wave',
          weba: 'audio/webm',
          aac: 'audio/x-aac',
          aif: 'audio/x-aiff',
          aiff: 'audio/x-aiff',
          aifc: 'audio/x-aiff',
          caf: 'audio/x-caf',
          flac: 'audio/x-flac',
          mka: 'audio/x-matroska',
          m3u: 'audio/x-mpegurl',
          wax: 'audio/x-ms-wax',
          wma: 'audio/x-ms-wma',
          ram: 'audio/x-pn-realaudio',
          ra: 'audio/x-pn-realaudio',
          rmp: 'audio/x-pn-realaudio-plugin',
          xm: 'audio/xm',
          exr: 'image/aces',
          apng: 'image/apng',
          bmp: 'image/bmp',
          cgm: 'image/cgm',
          drle: 'image/dicom-rle',
          emf: 'image/emf',
          fits: 'image/fits',
          g3: 'image/g3fax',
          gif: 'image/gif',
          heic: 'image/heic',
          heics: 'image/heic-sequence',
          heif: 'image/heif',
          heifs: 'image/heif-sequence',
          hej2: 'image/hej2k',
          hsj2: 'image/hsj2',
          ief: 'image/ief',
          jls: 'image/jls',
          jp2: 'image/jp2',
          jpg2: 'image/jp2',
          jpeg: 'image/jpeg',
          jpg: 'image/jpeg',
          jpe: 'image/jpeg',
          jph: 'image/jph',
          jhc: 'image/jphc',
          jpm: 'image/jpm',
          jpx: 'image/jpx',
          jpf: 'image/jpx',
          jxr: 'image/jxr',
          jxra: 'image/jxra',
          jxrs: 'image/jxrs',
          jxs: 'image/jxs',
          jxsc: 'image/jxsc',
          jxsi: 'image/jxsi',
          jxss: 'image/jxss',
          ktx: 'image/ktx',
          png: 'image/png',
          btif: 'image/prs.btif',
          pti: 'image/prs.pti',
          sgi: 'image/sgi',
          svg: 'image/svg+xml',
          svgz: 'image/svg+xml',
          t38: 'image/t38',
          tif: 'image/tiff',
          tiff: 'image/tiff',
          tfx: 'image/tiff-fx',
          psd: 'image/vnd.adobe.photoshop',
          azv: 'image/vnd.airzip.accelerator.azv',
          uvi: 'image/vnd.dece.graphic',
          uvvi: 'image/vnd.dece.graphic',
          uvg: 'image/vnd.dece.graphic',
          uvvg: 'image/vnd.dece.graphic',
          djvu: 'image/vnd.djvu',
          djv: 'image/vnd.djvu',
          sub: 'image/vnd.dvb.subtitle',
          dwg: 'image/vnd.dwg',
          dxf: 'image/vnd.dxf',
          fbs: 'image/vnd.fastbidsheet',
          fpx: 'image/vnd.fpx',
          fst: 'image/vnd.fst',
          mmr: 'image/vnd.fujixerox.edmics-mmr',
          rlc: 'image/vnd.fujixerox.edmics-rlc',
          ico: 'image/vnd.microsoft.icon',
          dds: 'image/vnd.ms-dds',
          mdi: 'image/vnd.ms-modi',
          wdp: 'image/vnd.ms-photo',
          npx: 'image/vnd.net-fpx',
          tap: 'image/vnd.tencent.tap',
          vtf: 'image/vnd.valve.source.texture',
          wbmp: 'image/vnd.wap.wbmp',
          xif: 'image/vnd.xiff',
          pcx: 'image/vnd.zbrush.pcx',
          webp: 'image/webp',
          wmf: 'image/wmf',
          '3ds': 'image/x-3ds',
          ras: 'image/x-cmu-raster',
          cmx: 'image/x-cmx',
          fh: 'image/x-freehand',
          fhc: 'image/x-freehand',
          fh4: 'image/x-freehand',
          fh5: 'image/x-freehand',
          fh7: 'image/x-freehand',
          jng: 'image/x-jng',
          sid: 'image/x-mrsid-image',
          pic: 'image/x-pict',
          pct: 'image/x-pict',
          pnm: 'image/x-portable-anymap',
          pbm: 'image/x-portable-bitmap',
          pgm: 'image/x-portable-graymap',
          ppm: 'image/x-portable-pixmap',
          rgb: 'image/x-rgb',
          tga: 'image/x-tga',
          xbm: 'image/x-xbitmap',
          xpm: 'image/x-xpixmap',
          xwd: 'image/x-xwindowdump',
          '3gp': 'video/3gpp',
          '3g2': 'video/3gpp2',
          h261: 'video/h261',
          h263: 'video/h263',
          h264: 'video/h264',
          jpgv: 'video/jpeg',
          jpgm: 'video/jpm',
          mj2: 'video/mj2',
          mjp2: 'video/mj2',
          ts: 'video/mp2t',
          mp4: 'video/mp4',
          mp4v: 'video/mp4',
          mpg4: 'video/mp4',
          mpeg: 'video/mpeg',
          mpg: 'video/mpeg',
          mpe: 'video/mpeg',
          m1v: 'video/mpeg',
          m2v: 'video/mpeg',
          ogv: 'video/ogg',
          qt: 'video/quicktime',
          mov: 'video/quicktime',
          uvh: 'video/vnd.dece.hd',
          uvvh: 'video/vnd.dece.hd',
          uvm: 'video/vnd.dece.mobile',
          uvvm: 'video/vnd.dece.mobile',
          uvp: 'video/vnd.dece.pd',
          uvvp: 'video/vnd.dece.pd',
          uvs: 'video/vnd.dece.sd',
          uvvs: 'video/vnd.dece.sd',
          uvv: 'video/vnd.dece.video',
          uvvv: 'video/vnd.dece.video',
          dvb: 'video/vnd.dvb.file',
          fvt: 'video/vnd.fvt',
          mxu: 'video/vnd.mpegurl',
          m4u: 'video/vnd.mpegurl',
          pyv: 'video/vnd.ms-playready.media.pyv',
          uvu: 'video/vnd.uvvu.mp4',
          uvvu: 'video/vnd.uvvu.mp4',
          viv: 'video/vnd.vivo',
          webm: 'video/webm',
          f4v: 'video/x-f4v',
          fli: 'video/x-fli',
          flv: 'video/x-flv',
          m4v: 'video/x-m4v',
          mkv: 'video/x-matroska',
          mk3d: 'video/x-matroska',
          mks: 'video/x-matroska',
          mng: 'video/x-mng',
          asf: 'video/x-ms-asf',
          asx: 'video/x-ms-asf',
          vob: 'video/x-ms-vob',
          wm: 'video/x-ms-wm',
          wmv: 'video/x-ms-wmv',
          wmx: 'video/x-ms-wmx',
          wvx: 'video/x-ms-wvx',
          avi: 'video/x-msvideo',
          movie: 'video/x-sgi-movie',
          smv: 'video/x-smv',
        };

      function o(e) {
        return e.split('/')[0];
      }

      function s(e) {
        return e.split('/').slice(1).join('/');
      }

      function a(e) {
        return r[h(e).toLowerCase()];
      }

      function l(e) {
        return !e.endsWith('.ts') && !!a(e);
      }

      function h(e) {
        return Object(i.extname)(e).slice(1);
      }

      function c(e) {
        return e.split('/').pop();
      }

      function u(e) {
        return c(e).split('.')[0];
      }

      function f(e) {
        return e.split('/').slice(0, -1).join('/');
      }

      function d(e) {
        return e.endsWith('.draw');
      }

      function p(e) {
        return e.endsWith('.pedit') || e.endsWith('.kbmsprite');
      }
    },
    fK0Z: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return g;
      }),
        n.d(t, 'b', function () {
          return u;
        });
      var i = n('AtEE'),
        r = n('4eob');
      const o =
          'undefined' != typeof navigator &&
          !/Edge\/(\d+)/.exec(navigator.userAgent) &&
          /Apple Computer/.test(navigator.vendor) &&
          (/Mobile\/\w+/.test(navigator.userAgent) ||
            navigator.maxTouchPoints > 2),
        s = '-10000px';
      class a {
        constructor(e, t, n) {
          (this.facet = t),
            (this.createTooltipView = n),
            (this.input = e.state.facet(t)),
            (this.tooltips = this.input.filter((e) => e)),
            (this.tooltipViews = this.tooltips.map(n));
        }
        update(e) {
          let t = e.state.facet(this.facet),
            n = t.filter((e) => e);
          if (t === this.input) {
            for (let t of this.tooltipViews) t.update && t.update(e);
            return {
              shouldMeasure: !1,
            };
          }
          let i = [];
          for (let r = 0; r < n.length; r++) {
            let t = n[r],
              o = -1;
            if (t) {
              for (let e = 0; e < this.tooltips.length; e++) {
                let n = this.tooltips[e];
                n && n.create == t.create && (o = e);
              }
              if (o < 0) i[r] = this.createTooltipView(t);
              else {
                let t = (i[r] = this.tooltipViews[o]);
                t.update && t.update(e);
              }
            }
          }
          for (let r of this.tooltipViews) i.indexOf(r) < 0 && r.dom.remove();
          return (
            (this.input = t),
            (this.tooltips = n),
            (this.tooltipViews = i),
            {
              shouldMeasure: !0,
            }
          );
        }
      }
      const l = r.h.define({
          combine: (e) => (o ? 'absolute' : e.length ? e[0] : 'fixed'),
        }),
        h = i.f.fromClass(
          class {
            constructor(e) {
              (this.view = e),
                (this.inView = !0),
                (this.position = e.state.facet(l)),
                (this.measureReq = {
                  read: this.readMeasure.bind(this),
                  write: this.writeMeasure.bind(this),
                  key: this,
                }),
                (this.manager = new a(e, u, (e) => this.createTooltip(e)));
            }
            update(e) {
              let { shouldMeasure: t } = this.manager.update(e),
                n = e.state.facet(l);
              if (n != this.position) {
                this.position = n;
                for (let e of this.manager.tooltipViews)
                  e.dom.style.position = n;
                t = !0;
              }
              t && this.maybeMeasure();
            }
            createTooltip(e) {
              let t = e.create(this.view);
              return (
                t.dom.classList.add('cm-tooltip'),
                (t.dom.style.position = this.position),
                (t.dom.style.top = s),
                this.view.dom.appendChild(t.dom),
                t.mount && t.mount(this.view),
                t
              );
            }
            destroy() {
              for (let { dom: e } of this.manager.tooltipViews) e.remove();
            }
            readMeasure() {
              return {
                editor: this.view.dom.getBoundingClientRect(),
                pos: this.manager.tooltips.map((e) =>
                  this.view.coordsAtPos(e.pos)
                ),
                size: this.manager.tooltipViews.map(({ dom: e }) =>
                  e.getBoundingClientRect()
                ),
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
              };
            }
            writeMeasure(e) {
              let { editor: t } = e,
                n = [];
              for (let r = 0; r < this.manager.tooltips.length; r++) {
                let o = this.manager.tooltips[r],
                  a = this.manager.tooltipViews[r],
                  { dom: l } = a,
                  h = e.pos[r],
                  c = e.size[r];
                if (
                  !h ||
                  h.bottom <= t.top ||
                  h.top >= t.bottom ||
                  h.right <= t.left ||
                  h.left >= t.right
                ) {
                  l.style.top = s;
                  continue;
                }
                let u = c.right - c.left,
                  f = c.bottom - c.top,
                  d =
                    this.view.textDirection == i.c.LTR
                      ? Math.min(h.left, e.innerWidth - u)
                      : Math.max(0, h.left - u),
                  p = !!o.above;
                !o.strictSide &&
                  (p
                    ? h.top - (c.bottom - c.top) < 0
                    : h.bottom + (c.bottom - c.top) > e.innerHeight) &&
                  (p = !p);
                let m = p ? h.top - f : h.bottom,
                  g = d + u;
                for (let e of n)
                  e.left < g &&
                    e.right > d &&
                    e.top < m + f &&
                    e.bottom > m &&
                    (m = p ? e.top - f : e.bottom);
                'absolute' == this.position
                  ? ((l.style.top = m - t.top + 'px'),
                    (l.style.left = d - t.left + 'px'))
                  : ((l.style.top = m + 'px'), (l.style.left = d + 'px')),
                  n.push({
                    left: d,
                    top: m,
                    right: g,
                    bottom: m + f,
                  }),
                  l.classList.toggle('cm-tooltip-above', p),
                  l.classList.toggle('cm-tooltip-below', !p),
                  a.positioned && a.positioned();
              }
            }
            maybeMeasure() {
              if (
                this.manager.tooltips.length &&
                (this.view.inView && this.view.requestMeasure(this.measureReq),
                this.inView != this.view.inView &&
                  ((this.inView = this.view.inView), !this.inView))
              )
                for (let e of this.manager.tooltipViews) e.dom.style.top = s;
            }
          },
          {
            eventHandlers: {
              scroll() {
                this.maybeMeasure();
              },
            },
          }
        ),
        c = i.d.baseTheme({
          '.cm-tooltip': {
            zIndex: 100,
          },
          '&light .cm-tooltip': {
            border: '1px solid #ddd',
            backgroundColor: '#f5f5f5',
          },
          '&light .cm-tooltip-section:not(:first-child)': {
            borderTop: '1px solid #ddd',
          },
          '&dark .cm-tooltip': {
            backgroundColor: '#333338',
            color: 'white',
          },
        }),
        u = r.h.define({
          enables: [h, c],
        }),
        f = r.h.define();
      class d {
        constructor(e) {
          (this.view = e),
            (this.mounted = !1),
            (this.dom = document.createElement('div')),
            this.dom.classList.add('cm-tooltip-hover'),
            (this.manager = new a(e, f, (e) => this.createHostedView(e)));
        }
        static create(e) {
          return new d(e);
        }
        createHostedView(e) {
          let t = e.create(this.view);
          return (
            t.dom.classList.add('cm-tooltip-section'),
            this.dom.appendChild(t.dom),
            this.mounted && t.mount && t.mount(this.view),
            t
          );
        }
        mount(e) {
          for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
          this.mounted = !0;
        }
        positioned() {
          for (let e of this.manager.tooltipViews)
            e.positioned && e.positioned();
        }
        update(e) {
          this.manager.update(e);
        }
      }
      const p = u.compute([f], (e) => {
        let t = e.facet(f).filter((e) => e);
        return 0 === t.length
          ? null
          : {
              pos: Math.min(...t.map((e) => e.pos)),
              end: Math.max(
                ...t.filter((e) => null != e.end).map((e) => e.end)
              ),
              create: d.create,
              above: t[0].above,
            };
      });
      class m {
        constructor(e, t, n, i, r) {
          (this.view = e),
            (this.source = t),
            (this.field = n),
            (this.setHover = i),
            (this.hoverTime = r),
            (this.lastMouseMove = null),
            (this.lastMoveTime = 0),
            (this.hoverTimeout = -1),
            (this.restartTimeout = -1),
            (this.pending = null),
            (this.checkHover = this.checkHover.bind(this)),
            e.dom.addEventListener(
              'mouseleave',
              (this.mouseleave = this.mouseleave.bind(this))
            ),
            e.dom.addEventListener(
              'mousemove',
              (this.mousemove = this.mousemove.bind(this))
            );
        }
        update() {
          this.pending &&
            ((this.pending = null),
            clearTimeout(this.restartTimeout),
            (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
        }
        get active() {
          return this.view.state.field(this.field);
        }
        checkHover() {
          if (((this.hoverTimeout = -1), this.active)) return;
          let e = Date.now() - this.lastMoveTime;
          e < this.hoverTime
            ? (this.hoverTimeout = setTimeout(
                this.checkHover,
                this.hoverTime - e
              ))
            : this.startHover();
        }
        startHover() {
          var e;
          clearTimeout(this.restartTimeout);
          let t = this.lastMouseMove,
            n = {
              x: t.clientX,
              y: t.clientY,
            },
            r = this.view.contentDOM.contains(t.target)
              ? this.view.posAtCoords(n)
              : null;
          if (null == r) return;
          let o = this.view.coordsAtPos(r);
          if (
            null == o ||
            n.y < o.top ||
            n.y > o.bottom ||
            n.x < o.left - this.view.defaultCharacterWidth ||
            n.x > o.right + this.view.defaultCharacterWidth
          )
            return;
          let s = this.view
              .bidiSpans(this.view.state.doc.lineAt(r))
              .find((e) => e.from <= r && e.to >= r),
            a = s && s.dir == i.c.RTL ? -1 : 1,
            l = this.source(this.view, r, n.x < o.left ? -a : a);
          if (null === (e = l) || void 0 === e ? void 0 : e.then) {
            let e = (this.pending = {
              pos: r,
            });
            l.then(
              (t) => {
                this.pending == e &&
                  ((this.pending = null),
                  t &&
                    this.view.dispatch({
                      effects: this.setHover.of(t),
                    }));
              },
              (e) => Object(i.l)(this.view.state, e, 'hover tooltip')
            );
          } else
            l &&
              this.view.dispatch({
                effects: this.setHover.of(l),
              });
        }
        mousemove(e) {
          var t;
          (this.lastMouseMove = e),
            (this.lastMoveTime = Date.now()),
            this.hoverTimeout < 0 &&
              (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
          let n = this.active;
          if (
            (n &&
              !(function (e) {
                for (let t = e; t; t = t.parentNode)
                  if (1 == t.nodeType && t.classList.contains('cm-tooltip'))
                    return !0;
                return !1;
              })(e.target)) ||
            this.pending
          ) {
            let { pos: i } = n || this.pending,
              r =
                null !== (t = null === n || void 0 === n ? void 0 : n.end) &&
                void 0 !== t
                  ? t
                  : i;
            (i == r
              ? this.view.posAtCoords({
                  x: e.clientX,
                  y: e.clientY,
                }) == i
              : (function (e, t, n, i, r, o) {
                  let s = document.createRange(),
                    a = e.domAtPos(t),
                    l = e.domAtPos(n);
                  s.setEnd(l.node, l.offset), s.setStart(a.node, a.offset);
                  let h = s.getClientRects();
                  s.detach();
                  for (let c = 0; c < h.length; c++) {
                    let e = h[c];
                    if (
                      Math.max(
                        e.top - r,
                        r - e.bottom,
                        e.left - i,
                        i - e.right
                      ) <= o
                    )
                      return !0;
                  }
                  return !1;
                })(this.view, i, r, e.clientX, e.clientY, 6)) ||
              (this.view.dispatch({
                effects: this.setHover.of(null),
              }),
              (this.pending = null));
          }
        }
        mouseleave() {
          clearTimeout(this.hoverTimeout),
            (this.hoverTimeout = -1),
            this.active &&
              this.view.dispatch({
                effects: this.setHover.of(null),
              });
        }
        destroy() {
          clearTimeout(this.hoverTimeout),
            this.view.dom.removeEventListener('mouseleave', this.mouseleave),
            this.view.dom.removeEventListener('mousemove', this.mousemove);
        }
      }

      function g(e, t = {}) {
        let n = r.k.define(),
          o = r.l.define({
            create: () => null,
            update(e, i) {
              if (e && t.hideOnChange && (i.docChanged || i.selection))
                return null;
              for (let t of i.effects) if (t.is(n)) return t.value;
              if (e && i.docChanged) {
                let t = i.changes.mapPos(e.pos, -1, r.i.TrackDel);
                if (null == t) return null;
                let n = Object.assign(Object.create(null), e);
                return (
                  (n.pos = t),
                  null != e.end && (n.end = i.changes.mapPos(e.end)),
                  n
                );
              }
              return e;
            },
            provide: (e) => f.from(e),
          }),
          s = t.hoverTime || 750;
        return [o, i.f.define((t) => new m(t, e, o, n, s)), p];
      }
    },
    h5Ab: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      }),
        n.d(t, 'b', function () {
          return c;
        }),
        n.d(t, 'c', function () {
          return A;
        });
      var i = n('AtEE'),
        r = n('wG49'),
        o = n('4eob');
      class s extends r.c {
        compare(e) {
          return this == e || (this.constructor == e.constructor && this.eq(e));
        }
        eq(e) {
          return !1;
        }
      }
      (s.prototype.elementClass = ''),
        (s.prototype.toDOM = void 0),
        (s.prototype.mapMode = o.i.TrackBefore),
        (s.prototype.startSide = s.prototype.endSide = -1),
        (s.prototype.point = !0);
      const a = o.h.define(),
        l = {
          class: '',
          renderEmptyElements: !1,
          elementStyle: '',
          markers: () => r.a.empty,
          lineMarker: () => null,
          initialSpacer: null,
          updateSpacer: null,
          domEventHandlers: {},
        },
        h = o.h.define();

      function c(e) {
        return [d(), h.of(Object.assign(Object.assign({}, l), e))];
      }
      const u = i.d.baseTheme({
          '.cm-gutters': {
            display: 'flex',
            height: '100%',
            boxSizing: 'border-box',
            left: 0,
            zIndex: 200,
          },
          '&light .cm-gutters': {
            backgroundColor: '#f5f5f5',
            color: '#999',
            borderRight: '1px solid #ddd',
          },
          '&dark .cm-gutters': {
            backgroundColor: '#333338',
            color: '#ccc',
          },
          '.cm-gutter': {
            display: 'flex !important',
            flexDirection: 'column',
            flexShrink: 0,
            boxSizing: 'border-box',
            height: '100%',
            overflow: 'hidden',
          },
          '.cm-gutterElement': {
            boxSizing: 'border-box',
          },
          '.cm-lineNumbers .cm-gutterElement': {
            padding: '0 3px 0 5px',
            minWidth: '20px',
            textAlign: 'right',
            whiteSpace: 'nowrap',
          },
          '&light .cm-activeLineGutter': {
            backgroundColor: '#e2f2ff',
          },
          '&dark .cm-activeLineGutter': {
            backgroundColor: '#222227',
          },
        }),
        f = o.h.define({
          combine: (e) => e.some((e) => e),
        });

      function d(e) {
        let t = [p, u];
        return e && !1 === e.fixed && t.push(f.of(!0)), t;
      }
      const p = i.f.fromClass(
        class {
          constructor(e) {
            (this.view = e),
              (this.dom = document.createElement('div')),
              (this.dom.className = 'cm-gutters'),
              this.dom.setAttribute('aria-hidden', 'true'),
              (this.gutters = e.state.facet(h).map((t) => new b(e, t)));
            for (let t of this.gutters) this.dom.appendChild(t.dom);
            (this.fixed = !e.state.facet(f)),
              this.fixed && (this.dom.style.position = 'sticky'),
              e.scrollDOM.insertBefore(this.dom, e.contentDOM),
              this.syncGutters();
          }
          update(e) {
            this.updateGutters(e) && this.syncGutters();
          }
          syncGutters() {
            let e = r.a.iter(this.view.state.facet(a), this.view.viewport.from),
              t = [],
              n = this.gutters.map((e) => new v(e, this.view.viewport));
            this.view.viewportLines((r) => {
              let o;
              if (Array.isArray(r.type)) {
                for (let e of r.type)
                  if (e.type == i.a.Text) {
                    o = e;
                    break;
                  }
              } else o = r.type == i.a.Text ? r : void 0;
              if (o) {
                t.length && (t = []), g(e, t, r.from);
                for (let e of n) e.line(this.view, o, t);
              }
            }, 0);
            for (let i of n) i.finish();
            (this.dom.style.minHeight = this.view.contentHeight + 'px'),
              this.view.state.facet(f) != !this.fixed &&
                ((this.fixed = !this.fixed),
                (this.dom.style.position = this.fixed ? 'sticky' : ''));
          }
          updateGutters(e) {
            let t = e.startState.facet(h),
              n = e.state.facet(h),
              i =
                e.docChanged ||
                e.heightChanged ||
                e.viewportChanged ||
                !r.a.eq(
                  e.startState.facet(a),
                  e.state.facet(a),
                  e.view.viewport.from,
                  e.view.viewport.to
                );
            if (t == n) for (let r of this.gutters) r.update(e) && (i = !0);
            else {
              i = !0;
              let r = [];
              for (let i of n) {
                let n = t.indexOf(i);
                n < 0
                  ? r.push(new b(this.view, i))
                  : (this.gutters[n].update(e), r.push(this.gutters[n]));
              }
              for (let e of this.gutters) e.dom.remove();
              for (let e of r) this.dom.appendChild(e.dom);
              this.gutters = r;
            }
            return i;
          }
          destroy() {
            this.dom.remove();
          }
        },
        {
          provide: i.e.scrollMargins.from((e) =>
            0 != e.gutters.length && e.fixed
              ? e.view.textDirection == i.c.LTR
                ? {
                    left: e.dom.offsetWidth,
                  }
                : {
                    right: e.dom.offsetWidth,
                  }
              : null
          ),
        }
      );

      function m(e) {
        return Array.isArray(e) ? e : [e];
      }

      function g(e, t, n) {
        for (; e.value && e.from <= n; )
          e.from == n && t.push(e.value), e.next();
      }
      class v {
        constructor(e, t) {
          (this.gutter = e),
            (this.localMarkers = []),
            (this.i = 0),
            (this.height = 0),
            (this.cursor = r.a.iter(e.markers, t.from));
        }
        line(e, t, n) {
          this.localMarkers.length && (this.localMarkers = []),
            g(this.cursor, this.localMarkers, t.from);
          let i = n.length ? this.localMarkers.concat(n) : this.localMarkers,
            r = this.gutter.config.lineMarker(e, t, i);
          r && i.unshift(r);
          let o = this.gutter;
          if (0 == i.length && !o.config.renderEmptyElements) return;
          let s = t.top - this.height;
          if (this.i == o.elements.length) {
            let n = new x(e, t.height, s, i);
            o.elements.push(n), o.dom.appendChild(n.dom);
          } else {
            let n = o.elements[this.i];
            (function (e, t) {
              if (e.length != t.length) return !1;
              for (let n = 0; n < e.length; n++)
                if (!e[n].compare(t[n])) return !1;
              return !0;
            })(i, n.markers) && (i = n.markers),
              n.update(e, t.height, s, i);
          }
          (this.height = t.bottom), this.i++;
        }
        finish() {
          let e = this.gutter;
          for (; e.elements.length > this.i; )
            e.dom.removeChild(e.elements.pop().dom);
        }
      }
      class b {
        constructor(e, t) {
          (this.view = e),
            (this.config = t),
            (this.elements = []),
            (this.spacer = null),
            (this.dom = document.createElement('div')),
            (this.dom.className =
              'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''));
          for (let n in t.domEventHandlers)
            this.dom.addEventListener(n, (i) => {
              let r = e.visualLineAtHeight(
                i.clientY,
                e.contentDOM.getBoundingClientRect().top
              );
              t.domEventHandlers[n](e, r, i) && i.preventDefault();
            });
          (this.markers = m(t.markers(e))),
            t.initialSpacer &&
              ((this.spacer = new x(e, 0, 0, [t.initialSpacer(e)])),
              this.dom.appendChild(this.spacer.dom),
              (this.spacer.dom.style.cssText +=
                'visibility: hidden; pointer-events: none'));
        }
        update(e) {
          let t = this.markers;
          if (
            ((this.markers = m(this.config.markers(e.view))),
            this.spacer && this.config.updateSpacer)
          ) {
            let t = this.config.updateSpacer(this.spacer.markers[0], e);
            t != this.spacer.markers[0] &&
              this.spacer.update(e.view, 0, 0, [t]);
          }
          let n = e.view.viewport;
          return !r.a.eq(this.markers, t, n.from, n.to);
        }
      }
      class x {
        constructor(e, t, n, i) {
          (this.height = -1),
            (this.above = 0),
            (this.dom = document.createElement('div')),
            this.update(e, t, n, i);
        }
        update(e, t, n, i) {
          if (
            (this.height != t &&
              (this.dom.style.height = (this.height = t) + 'px'),
            this.above != n &&
              (this.dom.style.marginTop = (this.above = n) ? n + 'px' : ''),
            this.markers != i)
          ) {
            this.markers = i;
            for (let e; (e = this.dom.lastChild); ) e.remove();
            let t = 'cm-gutterElement';
            for (let n of i) {
              n.toDOM && this.dom.appendChild(n.toDOM(e));
              let i = n.elementClass;
              i && (t += ' ' + i);
            }
            this.dom.className = t;
          }
        }
      }
      const w = o.h.define(),
        y = o.h.define({
          combine: (e) =>
            Object(o.n)(
              e,
              {
                formatNumber: String,
                domEventHandlers: {},
              },
              {
                domEventHandlers(e, t) {
                  let n = Object.assign({}, e);
                  for (let i in t) {
                    let e = n[i],
                      r = t[i];
                    n[i] = e ? (t, n, i) => e(t, n, i) || r(t, n, i) : r;
                  }
                  return n;
                },
              }
            ),
        });
      class k extends s {
        constructor(e) {
          super(), (this.number = e);
        }
        eq(e) {
          return this.number == e.number;
        }
        toDOM(e) {
          return document.createTextNode(this.number);
        }
      }

      function S(e, t) {
        return e.state.facet(y).formatNumber(t, e.state);
      }
      const C = c({
        class: 'cm-lineNumbers',
        markers: (e) => e.state.facet(w),
        lineMarker: (e, t, n) =>
          n.some((e) => e.toDOM)
            ? null
            : new k(S(e, e.state.doc.lineAt(t.from).number)),
        initialSpacer: (e) => new k(S(e, O(e.state.doc.lines))),
        updateSpacer(e, t) {
          let n = S(t.view, O(t.view.state.doc.lines));
          return n == e.number ? e : new k(n);
        },
      });

      function A(e = {}) {
        return [y.of(e), C];
      }

      function O(e) {
        let t = 9;
        for (; t < e; ) t = 10 * t + 9;
        return t;
      }
    },
    ljhz: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return O;
        });
      var i = n('4eob'),
        r = n('AtEE');
      const o = i.a.define(),
        s = i.a.define(),
        a = i.h.define(),
        l = i.h.define({
          combine: (e) =>
            Object(i.n)(
              e,
              {
                minDepth: 100,
                newGroupDelay: 500,
              },
              {
                minDepth: Math.max,
                newGroupDelay: Math.min,
              }
            ),
        }),
        h = i.l.define({
          create: () => A.empty,
          update(e, t) {
            let n = t.state.facet(l),
              r = t.annotation(o);
            if (r) {
              let i = v.fromTransaction(t),
                o = r.side,
                s = 0 == o ? e.undone : e.done;
              return (
                (s = i
                  ? b(s, s.length, n.minDepth, i)
                  : y(s, t.startState.selection)),
                new A(0 == o ? r.rest : s, 0 == o ? s : r.rest)
              );
            }
            let a = t.annotation(s);
            if (
              (('full' != a && 'before' != a) || (e = e.isolate()),
              !1 === t.annotation(i.m.addToHistory))
            )
              return t.changes.empty ? e : e.addMapping(t.changes.desc);
            let h = v.fromTransaction(t),
              c = t.annotation(i.m.time),
              u = t.annotation(i.m.userEvent);
            return (
              h
                ? (e = e.addChanges(h, c, u, n.newGroupDelay, n.minDepth))
                : t.selection &&
                  (e = e.addSelection(
                    t.startState.selection,
                    c,
                    u,
                    n.newGroupDelay
                  )),
              ('full' != a && 'after' != a) || (e = e.isolate()),
              e
            );
          },
          toJSON: (e) => ({
            done: e.done.map((e) => e.toJSON()),
            undone: e.undone.map((e) => e.toJSON()),
          }),
          fromJSON: (e) =>
            new A(e.done.map(v.fromJSON), e.undone.map(v.fromJSON)),
        });

      function c(e = {}) {
        return [
          h,
          l.of(e),
          r.d.domEventHandlers({
            beforeinput: (e, t) =>
              'historyUndo' == e.inputType
                ? d(t)
                : 'historyRedo' == e.inputType && p(t),
          }),
        ];
      }
      const u = h;

      function f(e, t) {
        return function ({ state: n, dispatch: i }) {
          let r = n.field(h, !1);
          if (!r) return !1;
          let o = r.pop(e, n, t);
          return !!o && (i(o), !0);
        };
      }
      const d = f(0, !1),
        p = f(1, !1),
        m = f(0, !0),
        g = f(1, !0);
      class v {
        constructor(e, t, n, i, r) {
          (this.changes = e),
            (this.effects = t),
            (this.mapped = n),
            (this.startSelection = i),
            (this.selectionsAfter = r);
        }
        setSelAfter(e) {
          return new v(
            this.changes,
            this.effects,
            this.mapped,
            this.startSelection,
            e
          );
        }
        toJSON() {
          var e, t, n;
          return {
            changes:
              null === (e = this.changes) || void 0 === e ? void 0 : e.toJSON(),
            mapped:
              null === (t = this.mapped) || void 0 === t ? void 0 : t.toJSON(),
            startSelection:
              null === (n = this.startSelection) || void 0 === n
                ? void 0
                : n.toJSON(),
            selectionsAfter: this.selectionsAfter.map((e) => e.toJSON()),
          };
        }
        static fromJSON(e) {
          return new v(
            e.changes && i.c.fromJSON(e.changes),
            [],
            e.mapped && i.b.fromJSON(e.mapped),
            e.startSelection && i.f.fromJSON(e.startSelection),
            e.selectionsAfter.map(i.f.fromJSON)
          );
        }
        static fromTransaction(e) {
          let t = w;
          for (let n of e.startState.facet(a)) {
            let i = n(e);
            i.length && (t = t.concat(i));
          }
          return !t.length && e.changes.empty
            ? null
            : new v(
                e.changes.invert(e.startState.doc),
                t,
                void 0,
                e.startState.selection,
                w
              );
        }
        static selection(e) {
          return new v(void 0, w, void 0, void 0, e);
        }
      }

      function b(e, t, n, i) {
        let r = t + 1 > n + 20 ? t - n - 1 : 0,
          o = e.slice(r, t);
        return o.push(i), o;
      }

      function x(e, t) {
        return e.length ? (t.length ? e.concat(t) : e) : t;
      }
      const w = [];

      function y(e, t) {
        if (e.length) {
          let n = e[e.length - 1],
            i = n.selectionsAfter.slice(
              Math.max(0, n.selectionsAfter.length - 200)
            );
          return i.length && i[i.length - 1].eq(t)
            ? e
            : (i.push(t), b(e, e.length - 1, 1e9, n.setSelAfter(i)));
        }
        return [v.selection([t])];
      }

      function k(e) {
        let t = e[e.length - 1],
          n = e.slice();
        return (
          (n[e.length - 1] = t.setSelAfter(
            t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)
          )),
          n
        );
      }

      function S(e, t) {
        if (!e.length) return e;
        let n = e.length,
          i = w;
        for (; n; ) {
          let r = C(e[n - 1], t, i);
          if ((r.changes && !r.changes.empty) || r.effects.length) {
            let t = e.slice(0, n);
            return (t[n - 1] = r), t;
          }
          (t = r.mapped), n--, (i = r.selectionsAfter);
        }
        return i.length ? [v.selection(i)] : w;
      }

      function C(e, t, n) {
        let r = x(
          e.selectionsAfter.length ? e.selectionsAfter.map((e) => e.map(t)) : w,
          n
        );
        if (!e.changes) return v.selection(r);
        let o = e.changes.map(t),
          s = t.mapDesc(e.changes, !0),
          a = e.mapped ? e.mapped.composeDesc(s) : s;
        return new v(
          o,
          i.k.mapEffects(e.effects, t),
          a,
          e.startSelection.map(s),
          r
        );
      }
      class A {
        constructor(e, t, n = 0, i) {
          (this.done = e),
            (this.undone = t),
            (this.prevTime = n),
            (this.prevUserEvent = i);
        }
        isolate() {
          return this.prevTime ? new A(this.done, this.undone) : this;
        }
        addChanges(e, t, n, i, r) {
          let o = this.done,
            s = o[o.length - 1];
          return (
            (o =
              s &&
              s.changes &&
              !s.changes.empty &&
              e.changes &&
              ((!s.selectionsAfter.length &&
                t - this.prevTime < i &&
                (function (e, t) {
                  let n = [],
                    i = !1;
                  return (
                    e.iterChangedRanges((e, t) => n.push(e, t)),
                    t.iterChangedRanges((e, t, r, o) => {
                      for (let s = 0; s < n.length; ) {
                        let e = n[s++],
                          t = n[s++];
                        o >= e && r <= t && (i = !0);
                      }
                    }),
                    i
                  );
                })(s.changes, e.changes)) ||
                'input.type.compose' == n)
                ? b(
                    o,
                    o.length - 1,
                    r,
                    new v(
                      e.changes.compose(s.changes),
                      x(e.effects, s.effects),
                      s.mapped,
                      s.startSelection,
                      w
                    )
                  )
                : b(o, o.length, r, e)),
            new A(o, w, t, n)
          );
        }
        addSelection(e, t, n, i) {
          let r = this.done.length
            ? this.done[this.done.length - 1].selectionsAfter
            : w;
          return r.length > 0 &&
            t - this.prevTime < i &&
            n == this.prevUserEvent &&
            n &&
            /^select($|\.)/.test(n) &&
            ((o = r[r.length - 1]),
            (s = e),
            o.ranges.length == s.ranges.length &&
              0 ===
                o.ranges.filter((e, t) => e.empty != s.ranges[t].empty).length)
            ? this
            : new A(y(this.done, e), this.undone, t, n);
          var o, s;
        }
        addMapping(e) {
          return new A(
            S(this.done, e),
            S(this.undone, e),
            this.prevTime,
            this.prevUserEvent
          );
        }
        pop(e, t, n) {
          let i = 0 == e ? this.done : this.undone;
          if (0 == i.length) return null;
          let r = i[i.length - 1];
          if (n && r.selectionsAfter.length)
            return t.update({
              selection: r.selectionsAfter[r.selectionsAfter.length - 1],
              annotations: o.of({
                side: e,
                rest: k(i),
              }),
              userEvent: 0 == e ? 'select.undo' : 'select.redo',
            });
          if (r.changes) {
            let n = 1 == i.length ? w : i.slice(0, i.length - 1);
            return (
              r.mapped && (n = S(n, r.mapped)),
              t.update({
                changes: r.changes,
                selection: r.startSelection,
                effects: r.effects,
                annotations: o.of({
                  side: e,
                  rest: n,
                }),
                filter: !1,
                userEvent: 0 == e ? 'undo' : 'redo',
              })
            );
          }
          return null;
        }
      }
      A.empty = new A(w, w);
      const O = [
        {
          key: 'Mod-z',
          run: d,
          preventDefault: !0,
        },
        {
          key: 'Mod-y',
          mac: 'Mod-Shift-z',
          run: p,
          preventDefault: !0,
        },
        {
          key: 'Mod-u',
          run: m,
          preventDefault: !0,
        },
        {
          key: 'Alt-u',
          mac: 'Mod-Shift-u',
          run: g,
          preventDefault: !0,
        },
      ];
    },
    lmln: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return s;
        }),
        n.d(t, 'c', function () {
          return c;
        }),
        n.d(t, 'd', function () {
          return h;
        }),
        n.d(t, 'e', function () {
          return O;
        }),
        n.d(t, 'f', function () {
          return f;
        }),
        n.d(t, 'g', function () {
          return A;
        }),
        n.d(t, 'h', function () {
          return M;
        });
      const i = 1024;
      let r = 0;
      class o {
        constructor(e, t) {
          (this.from = e), (this.to = t);
        }
      }
      class s {
        constructor(e = {}) {
          (this.id = r++),
            (this.perNode = !!e.perNode),
            (this.deserialize =
              e.deserialize ||
              (() => {
                throw new Error(
                  "This node type doesn't define a deserialize function"
                );
              }));
        }
        add(e) {
          if (this.perNode)
            throw new RangeError("Can't add per-node props to node types");
          return (
            'function' != typeof e && (e = h.match(e)),
            (t) => {
              let n = e(t);
              return void 0 === n ? null : [this, n];
            }
          );
        }
      }
      (s.closedBy = new s({
        deserialize: (e) => e.split(' '),
      })),
        (s.openedBy = new s({
          deserialize: (e) => e.split(' '),
        })),
        (s.group = new s({
          deserialize: (e) => e.split(' '),
        })),
        (s.contextHash = new s({
          perNode: !0,
        })),
        (s.lookAhead = new s({
          perNode: !0,
        })),
        (s.mounted = new s({
          perNode: !0,
        }));
      class a {
        constructor(e, t, n) {
          (this.tree = e), (this.overlay = t), (this.parser = n);
        }
      }
      const l = Object.create(null);
      class h {
        constructor(e, t, n, i = 0) {
          (this.name = e), (this.props = t), (this.id = n), (this.flags = i);
        }
        static define(e) {
          let t = e.props && e.props.length ? Object.create(null) : l,
            n =
              (e.top ? 1 : 0) |
              (e.skipped ? 2 : 0) |
              (e.error ? 4 : 0) |
              (null == e.name ? 8 : 0),
            i = new h(e.name || '', t, e.id, n);
          if (e.props)
            for (let r of e.props)
              if ((Array.isArray(r) || (r = r(i)), r)) {
                if (r[0].perNode)
                  throw new RangeError(
                    "Can't store a per-node prop on a node type"
                  );
                t[r[0].id] = r[1];
              }
          return i;
        }
        prop(e) {
          return this.props[e.id];
        }
        get isTop() {
          return (1 & this.flags) > 0;
        }
        get isSkipped() {
          return (2 & this.flags) > 0;
        }
        get isError() {
          return (4 & this.flags) > 0;
        }
        get isAnonymous() {
          return (8 & this.flags) > 0;
        }
        is(e) {
          if ('string' == typeof e) {
            if (this.name == e) return !0;
            let t = this.prop(s.group);
            return !!t && t.indexOf(e) > -1;
          }
          return this.id == e;
        }
        static match(e) {
          let t = Object.create(null);
          for (let n in e) for (let i of n.split(' ')) t[i] = e[n];
          return (e) => {
            for (let n = e.prop(s.group), i = -1; i < (n ? n.length : 0); i++) {
              let r = t[i < 0 ? e.name : n[i]];
              if (r) return r;
            }
          };
        }
      }
      h.none = new h('', Object.create(null), 0, 8);
      class c {
        constructor(e) {
          this.types = e;
          for (let t = 0; t < e.length; t++)
            if (e[t].id != t)
              throw new RangeError(
                'Node type ids should correspond to array positions when creating a node set'
              );
        }
        extend(...e) {
          let t = [];
          for (let n of this.types) {
            let i = null;
            for (let t of e) {
              let e = t(n);
              e && (i || (i = Object.assign({}, n.props)), (i[e[0].id] = e[1]));
            }
            t.push(i ? new h(n.name, i, n.id, n.flags) : n);
          }
          return new c(t);
        }
      }
      const u = new WeakMap();
      class f {
        constructor(e, t, n, i, r) {
          if (
            ((this.type = e),
            (this.children = t),
            (this.positions = n),
            (this.length = i),
            (this.props = null),
            r && r.length)
          ) {
            this.props = Object.create(null);
            for (let [e, t] of r)
              this.props['number' == typeof e ? e : e.id] = t;
          }
        }
        toString() {
          let e = this.prop(s.mounted);
          if (e && !e.overlay) return e.tree.toString();
          let t = '';
          for (let n of this.children) {
            let e = n.toString();
            e && (t && (t += ','), (t += e));
          }
          return this.type.name
            ? (/\W/.test(this.type.name) && !this.type.isError
                ? JSON.stringify(this.type.name)
                : this.type.name) + (t.length ? '(' + t + ')' : '')
            : t;
        }
        cursor(e, t = 0) {
          let n = (null != e && u.get(this)) || this.topNode,
            i = new w(n);
          return null != e && (i.moveTo(e, t), u.set(this, i._tree)), i;
        }
        fullCursor() {
          return new w(this.topNode, 1);
        }
        get topNode() {
          return new g(this, 0, 0, null);
        }
        resolve(e, t = 0) {
          return this.cursor(e, t).node;
        }
        resolveInner(e, t = 0) {
          let n = this.topNode;
          for (;;) {
            let i = n.enter(e, t);
            if (!i) return n;
            n = i;
          }
        }
        iterate(e) {
          let { enter: t, leave: n, from: i = 0, to: r = this.length } = e;
          for (let o = this.cursor(), s = () => o.node; ; ) {
            let e = !1;
            if (
              o.from <= r &&
              o.to >= i &&
              (o.type.isAnonymous || !1 !== t(o.type, o.from, o.to, s))
            ) {
              if (o.firstChild()) continue;
              o.type.isAnonymous || (e = !0);
            }
            for (
              ;
              e && n && n(o.type, o.from, o.to, s),
                (e = o.type.isAnonymous),
                !o.nextSibling();

            ) {
              if (!o.parent()) return;
              e = !0;
            }
          }
        }
        prop(e) {
          return e.perNode
            ? this.props
              ? this.props[e.id]
              : void 0
            : this.type.prop(e);
        }
        get propValues() {
          let e = [];
          if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
          return e;
        }
        balance(e = {}) {
          return this.children.length <= 8
            ? this
            : C(
                this.type,
                this.children,
                this.positions,
                0,
                this.children.length,
                0,
                this.length,
                (e, t, n) => new f(this.type, e, t, n, this.propValues),
                e.makeTree || ((e, t, n) => new f(h.none, e, t, n))
              );
        }
        static build(e) {
          return (function (e) {
            var t;
            let {
                buffer: n,
                nodeSet: r,
                maxBufferLength: o = i,
                reused: a = [],
                minRepeatType: l = r.types.length,
              } = e,
              h = Array.isArray(n) ? new d(n, n.length) : n,
              c = r.types,
              u = 0,
              m = 0;

            function g(e, t, n, i, s) {
              let { id: f, start: d, end: k, size: S } = h,
                A = m;
              for (; S < 0; ) {
                if ((h.next(), -1 == S)) {
                  let t = a[f];
                  return n.push(t), void i.push(d - e);
                }
                if (-3 == S) return void (u = f);
                if (-4 == S) return void (m = f);
                throw new RangeError(`Unrecognized record size: ${S}`);
              }
              let O,
                j,
                M = c[f],
                E = d - e;
              if (k - d <= o && (j = w(h.pos - t, s))) {
                let t = new Uint16Array(j.size - j.skip),
                  n = h.pos - j.size,
                  i = t.length;
                for (; h.pos > n; ) i = y(j.start, t, i);
                (O = new p(t, k - j.start, r)), (E = j.start - e);
              } else {
                let e = h.pos - S;
                h.next();
                let t = [],
                  n = [],
                  i = f >= l ? f : -1,
                  r = 0,
                  s = k;
                for (; h.pos > e; )
                  i >= 0 && h.id == i && h.size >= 0
                    ? (h.end <= s - o &&
                        (b(t, n, d, r, h.end, s, i, A),
                        (r = t.length),
                        (s = h.end)),
                      h.next())
                    : g(d, e, t, n, i);
                if (
                  (i >= 0 && r > 0 && r < t.length && b(t, n, d, r, d, s, i, A),
                  t.reverse(),
                  n.reverse(),
                  i > -1 && r > 0)
                ) {
                  let e = v(M);
                  O = C(M, t, n, 0, t.length, 0, k - d, e, e);
                } else O = x(M, t, n, k - d, A - k);
              }
              n.push(O), i.push(E);
            }

            function v(e) {
              return (t, n, i) => {
                let r,
                  o,
                  a = 0,
                  l = t.length - 1;
                if (l >= 0 && (r = t[l]) instanceof f) {
                  if (!l && r.type == e && r.length == i) return r;
                  (o = r.prop(s.lookAhead)) && (a = n[l] + r.length + o);
                }
                return x(e, t, n, i, a);
              };
            }

            function b(e, t, n, i, o, s, a, l) {
              let h = [],
                c = [];
              for (; e.length > i; ) h.push(e.pop()), c.push(t.pop() + n - o);
              e.push(x(r.types[a], h, c, s - o, l - s)), t.push(o - n);
            }

            function x(e, t, n, i, r = 0, o) {
              if (u) {
                let e = [s.contextHash, u];
                o = o ? [e].concat(o) : [e];
              }
              if (r > 25) {
                let e = [s.lookAhead, r];
                o = o ? [e].concat(o) : [e];
              }
              return new f(e, t, n, i, o);
            }

            function w(e, t) {
              let n = h.fork(),
                i = 0,
                r = 0,
                s = 0,
                a = n.end - o,
                c = {
                  size: 0,
                  start: 0,
                  skip: 0,
                };
              e: for (let o = n.pos - e; n.pos > o; ) {
                let e = n.size;
                if (n.id == t && e >= 0) {
                  (c.size = i),
                    (c.start = r),
                    (c.skip = s),
                    (s += 4),
                    (i += 4),
                    n.next();
                  continue;
                }
                let h = n.pos - e;
                if (e < 0 || h < o || n.start < a) break;
                let u = n.id >= l ? 4 : 0,
                  f = n.start;
                for (n.next(); n.pos > h; ) {
                  if (n.size < 0) {
                    if (-3 != n.size) break e;
                    u += 4;
                  } else n.id >= l && (u += 4);
                  n.next();
                }
                (r = f), (i += e), (s += u);
              }
              return (
                (t < 0 || i == e) &&
                  ((c.size = i), (c.start = r), (c.skip = s)),
                c.size > 4 ? c : void 0
              );
            }

            function y(e, t, n) {
              let { id: i, start: r, end: o, size: s } = h;
              if ((h.next(), s >= 0 && i < l)) {
                let a = n;
                if (s > 4) {
                  let i = h.pos - (s - 4);
                  for (; h.pos > i; ) n = y(e, t, n);
                }
                (t[--n] = a), (t[--n] = o - e), (t[--n] = r - e), (t[--n] = i);
              } else -3 == s ? (u = i) : -4 == s && (m = i);
              return n;
            }
            let k = [],
              S = [];
            for (; h.pos > 0; ) g(e.start || 0, e.bufferStart || 0, k, S, -1);
            let A =
              null !== (t = e.length) && void 0 !== t
                ? t
                : k.length
                ? S[0] + k[0].length
                : 0;
            return new f(c[e.topID], k.reverse(), S.reverse(), A);
          })(e);
        }
      }
      f.empty = new f(h.none, [], [], 0);
      class d {
        constructor(e, t) {
          (this.buffer = e), (this.index = t);
        }
        get id() {
          return this.buffer[this.index - 4];
        }
        get start() {
          return this.buffer[this.index - 3];
        }
        get end() {
          return this.buffer[this.index - 2];
        }
        get size() {
          return this.buffer[this.index - 1];
        }
        get pos() {
          return this.index;
        }
        next() {
          this.index -= 4;
        }
        fork() {
          return new d(this.buffer, this.index);
        }
      }
      class p {
        constructor(e, t, n) {
          (this.buffer = e), (this.length = t), (this.set = n);
        }
        get type() {
          return h.none;
        }
        toString() {
          let e = [];
          for (let t = 0; t < this.buffer.length; )
            e.push(this.childString(t)), (t = this.buffer[t + 3]);
          return e.join(',');
        }
        childString(e) {
          let t = this.buffer[e],
            n = this.buffer[e + 3],
            i = this.set.types[t],
            r = i.name;
          if (
            (/\W/.test(r) && !i.isError && (r = JSON.stringify(r)),
            n == (e += 4))
          )
            return r;
          let o = [];
          for (; e < n; ) o.push(this.childString(e)), (e = this.buffer[e + 3]);
          return r + '(' + o.join(',') + ')';
        }
        findChild(e, t, n, i, r) {
          let { buffer: o } = this,
            s = -1;
          for (
            let a = e;
            a != t && !(m(r, i, o[a + 1], o[a + 2]) && ((s = a), n > 0));
            a = o[a + 3]
          );
          return s;
        }
        slice(e, t, n, i) {
          let r = this.buffer,
            o = new Uint16Array(t - e);
          for (let s = e, a = 0; s < t; )
            (o[a++] = r[s++]),
              (o[a++] = r[s++] - n),
              (o[a++] = r[s++] - n),
              (o[a++] = r[s++] - e);
          return new p(o, i - n, this.set);
        }
      }

      function m(e, t, n, i) {
        switch (e) {
          case -2:
            return n < t;
          case -1:
            return i >= t && n < t;
          case 0:
            return n < t && i > t;
          case 1:
            return n <= t && i > t;
          case 2:
            return i > t;
          case 4:
            return !0;
        }
      }
      class g {
        constructor(e, t, n, i) {
          (this.node = e),
            (this._from = t),
            (this.index = n),
            (this._parent = i);
        }
        get type() {
          return this.node.type;
        }
        get name() {
          return this.node.type.name;
        }
        get from() {
          return this._from;
        }
        get to() {
          return this._from + this.node.length;
        }
        nextChild(e, t, n, i, r = 0) {
          for (let o = this; ; ) {
            for (
              let { children: a, positions: l } = o.node,
                h = t > 0 ? a.length : -1;
              e != h;
              e += t
            ) {
              let h = a[e],
                c = l[e] + o._from;
              if (m(i, n, c, c + h.length))
                if (h instanceof p) {
                  if (2 & r) continue;
                  let s = h.findChild(0, h.buffer.length, t, n - c, i);
                  if (s > -1) return new x(new b(o, h, e, c), null, s);
                } else if (1 & r || !h.type.isAnonymous || y(h)) {
                  let a;
                  if (h.props && (a = h.prop(s.mounted)) && !a.overlay)
                    return new g(a.tree, c, e, o);
                  let l = new g(h, c, e, o);
                  return 1 & r || !l.type.isAnonymous
                    ? l
                    : l.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, i);
                }
            }
            if (1 & r || !o.type.isAnonymous) return null;
            if (
              ((e =
                o.index >= 0
                  ? o.index + t
                  : t < 0
                  ? -1
                  : o._parent.node.children.length),
              (o = o._parent),
              !o)
            )
              return null;
          }
        }
        get firstChild() {
          return this.nextChild(0, 1, 0, 4);
        }
        get lastChild() {
          return this.nextChild(this.node.children.length - 1, -1, 0, 4);
        }
        childAfter(e) {
          return this.nextChild(0, 1, e, 2);
        }
        childBefore(e) {
          return this.nextChild(this.node.children.length - 1, -1, e, -2);
        }
        enter(e, t, n = !0, i = !0) {
          let r;
          if (n && (r = this.node.prop(s.mounted)) && r.overlay) {
            let n = e - this.from;
            for (let { from: e, to: i } of r.overlay)
              if ((t > 0 ? e <= n : e < n) && (t < 0 ? i >= n : i > n))
                return new g(r.tree, r.overlay[0].from + this.from, -1, this);
          }
          return this.nextChild(0, 1, e, t, i ? 0 : 2);
        }
        nextSignificantParent() {
          let e = this;
          for (; e.type.isAnonymous && e._parent; ) e = e._parent;
          return e;
        }
        get parent() {
          return this._parent ? this._parent.nextSignificantParent() : null;
        }
        get nextSibling() {
          return this._parent && this.index >= 0
            ? this._parent.nextChild(this.index + 1, 1, 0, 4)
            : null;
        }
        get prevSibling() {
          return this._parent && this.index >= 0
            ? this._parent.nextChild(this.index - 1, -1, 0, 4)
            : null;
        }
        get cursor() {
          return new w(this);
        }
        get tree() {
          return this.node;
        }
        toTree() {
          return this.node;
        }
        resolve(e, t = 0) {
          return this.cursor.moveTo(e, t).node;
        }
        getChild(e, t = null, n = null) {
          let i = v(this, e, t, n);
          return i.length ? i[0] : null;
        }
        getChildren(e, t = null, n = null) {
          return v(this, e, t, n);
        }
        toString() {
          return this.node.toString();
        }
      }

      function v(e, t, n, i) {
        let r = e.cursor,
          o = [];
        if (!r.firstChild()) return o;
        if (null != n) for (; !r.type.is(n); ) if (!r.nextSibling()) return o;
        for (;;) {
          if (null != i && r.type.is(i)) return o;
          if ((r.type.is(t) && o.push(r.node), !r.nextSibling()))
            return null == i ? o : [];
        }
      }
      class b {
        constructor(e, t, n, i) {
          (this.parent = e),
            (this.buffer = t),
            (this.index = n),
            (this.start = i);
        }
      }
      class x {
        constructor(e, t, n) {
          (this.context = e),
            (this._parent = t),
            (this.index = n),
            (this.type = e.buffer.set.types[e.buffer.buffer[n]]);
        }
        get name() {
          return this.type.name;
        }
        get from() {
          return (
            this.context.start + this.context.buffer.buffer[this.index + 1]
          );
        }
        get to() {
          return (
            this.context.start + this.context.buffer.buffer[this.index + 2]
          );
        }
        child(e, t, n) {
          let { buffer: i } = this.context,
            r = i.findChild(
              this.index + 4,
              i.buffer[this.index + 3],
              e,
              t - this.context.start,
              n
            );
          return r < 0 ? null : new x(this.context, this, r);
        }
        get firstChild() {
          return this.child(1, 0, 4);
        }
        get lastChild() {
          return this.child(-1, 0, 4);
        }
        childAfter(e) {
          return this.child(1, e, 2);
        }
        childBefore(e) {
          return this.child(-1, e, -2);
        }
        enter(e, t, n, i = !0) {
          if (!i) return null;
          let { buffer: r } = this.context,
            o = r.findChild(
              this.index + 4,
              r.buffer[this.index + 3],
              t > 0 ? 1 : -1,
              e - this.context.start,
              t
            );
          return o < 0 ? null : new x(this.context, this, o);
        }
        get parent() {
          return this._parent || this.context.parent.nextSignificantParent();
        }
        externalSibling(e) {
          return this._parent
            ? null
            : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
        }
        get nextSibling() {
          let { buffer: e } = this.context,
            t = e.buffer[this.index + 3];
          return t <
            (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
            ? new x(this.context, this._parent, t)
            : this.externalSibling(1);
        }
        get prevSibling() {
          let { buffer: e } = this.context,
            t = this._parent ? this._parent.index + 4 : 0;
          return this.index == t
            ? this.externalSibling(-1)
            : new x(
                this.context,
                this._parent,
                e.findChild(t, this.index, -1, 0, 4)
              );
        }
        get cursor() {
          return new w(this);
        }
        get tree() {
          return null;
        }
        toTree() {
          let e = [],
            t = [],
            { buffer: n } = this.context,
            i = this.index + 4,
            r = n.buffer[this.index + 3];
          if (r > i) {
            let o = n.buffer[this.index + 1],
              s = n.buffer[this.index + 2];
            e.push(n.slice(i, r, o, s)), t.push(0);
          }
          return new f(this.type, e, t, this.to - this.from);
        }
        resolve(e, t = 0) {
          return this.cursor.moveTo(e, t).node;
        }
        toString() {
          return this.context.buffer.childString(this.index);
        }
        getChild(e, t = null, n = null) {
          let i = v(this, e, t, n);
          return i.length ? i[0] : null;
        }
        getChildren(e, t = null, n = null) {
          return v(this, e, t, n);
        }
      }
      class w {
        constructor(e, t = 0) {
          if (
            ((this.mode = t),
            (this.buffer = null),
            (this.stack = []),
            (this.index = 0),
            (this.bufferNode = null),
            e instanceof g)
          )
            this.yieldNode(e);
          else {
            (this._tree = e.context.parent), (this.buffer = e.context);
            for (let t = e._parent; t; t = t._parent)
              this.stack.unshift(t.index);
            (this.bufferNode = e), this.yieldBuf(e.index);
          }
        }
        get name() {
          return this.type.name;
        }
        yieldNode(e) {
          return (
            !!e &&
            ((this._tree = e),
            (this.type = e.type),
            (this.from = e.from),
            (this.to = e.to),
            !0)
          );
        }
        yieldBuf(e, t) {
          this.index = e;
          let { start: n, buffer: i } = this.buffer;
          return (
            (this.type = t || i.set.types[i.buffer[e]]),
            (this.from = n + i.buffer[e + 1]),
            (this.to = n + i.buffer[e + 2]),
            !0
          );
        }
        yield(e) {
          return (
            !!e &&
            (e instanceof g
              ? ((this.buffer = null), this.yieldNode(e))
              : ((this.buffer = e.context), this.yieldBuf(e.index, e.type)))
          );
        }
        toString() {
          return this.buffer
            ? this.buffer.buffer.childString(this.index)
            : this._tree.toString();
        }
        enterChild(e, t, n) {
          if (!this.buffer)
            return this.yield(
              this._tree.nextChild(
                e < 0 ? this._tree.node.children.length - 1 : 0,
                e,
                t,
                n,
                this.mode
              )
            );
          let { buffer: i } = this.buffer,
            r = i.findChild(
              this.index + 4,
              i.buffer[this.index + 3],
              e,
              t - this.buffer.start,
              n
            );
          return !(r < 0) && (this.stack.push(this.index), this.yieldBuf(r));
        }
        firstChild() {
          return this.enterChild(1, 0, 4);
        }
        lastChild() {
          return this.enterChild(-1, 0, 4);
        }
        childAfter(e) {
          return this.enterChild(1, e, 2);
        }
        childBefore(e) {
          return this.enterChild(-1, e, -2);
        }
        enter(e, t, n = !0, i = !0) {
          return this.buffer
            ? !!i && this.enterChild(1, e, t)
            : this.yield(this._tree.enter(e, t, n, i));
        }
        parent() {
          if (!this.buffer)
            return this.yieldNode(
              1 & this.mode ? this._tree._parent : this._tree.parent
            );
          if (this.stack.length) return this.yieldBuf(this.stack.pop());
          let e =
            1 & this.mode
              ? this.buffer.parent
              : this.buffer.parent.nextSignificantParent();
          return (this.buffer = null), this.yieldNode(e);
        }
        sibling(e) {
          if (!this.buffer)
            return (
              !!this._tree._parent &&
              this.yield(
                this._tree.index < 0
                  ? null
                  : this._tree._parent.nextChild(
                      this._tree.index + e,
                      e,
                      0,
                      4,
                      this.mode
                    )
              )
            );
          let { buffer: t } = this.buffer,
            n = this.stack.length - 1;
          if (e < 0) {
            let e = n < 0 ? 0 : this.stack[n] + 4;
            if (this.index != e)
              return this.yieldBuf(t.findChild(e, this.index, -1, 0, 4));
          } else {
            let e = t.buffer[this.index + 3];
            if (e < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
              return this.yieldBuf(e);
          }
          return (
            n < 0 &&
            this.yield(
              this.buffer.parent.nextChild(
                this.buffer.index + e,
                e,
                0,
                4,
                this.mode
              )
            )
          );
        }
        nextSibling() {
          return this.sibling(1);
        }
        prevSibling() {
          return this.sibling(-1);
        }
        atLastNode(e) {
          let t,
            n,
            { buffer: i } = this;
          if (i) {
            if (e > 0) {
              if (this.index < i.buffer.buffer.length) return !1;
            } else
              for (let e = 0; e < this.index; e++)
                if (i.buffer.buffer[e + 3] < this.index) return !1;
            ({ index: t, parent: n } = i);
          } else ({ index: t, _parent: n } = this._tree);
          for (; n; { index: t, _parent: n } = n)
            if (t > -1)
              for (
                let i = t + e, r = e < 0 ? -1 : n.node.children.length;
                i != r;
                i += e
              ) {
                let e = n.node.children[i];
                if (
                  1 & this.mode ||
                  e instanceof p ||
                  !e.type.isAnonymous ||
                  y(e)
                )
                  return !1;
              }
          return !0;
        }
        move(e, t) {
          if (t && this.enterChild(e, 0, 4)) return !0;
          for (;;) {
            if (this.sibling(e)) return !0;
            if (this.atLastNode(e) || !this.parent()) return !1;
          }
        }
        next(e = !0) {
          return this.move(1, e);
        }
        prev(e = !0) {
          return this.move(-1, e);
        }
        moveTo(e, t = 0) {
          for (
            ;
            (this.from == this.to ||
              (t < 1 ? this.from >= e : this.from > e) ||
              (t > -1 ? this.to <= e : this.to < e)) &&
            this.parent();

          );
          for (; this.enterChild(1, e, t); );
          return this;
        }
        get node() {
          if (!this.buffer) return this._tree;
          let e = this.bufferNode,
            t = null,
            n = 0;
          if (e && e.context == this.buffer)
            e: for (let i = this.index, r = this.stack.length; r >= 0; ) {
              for (let o = e; o; o = o._parent)
                if (o.index == i) {
                  if (i == this.index) return o;
                  (t = o), (n = r + 1);
                  break e;
                }
              i = this.stack[--r];
            }
          for (let i = n; i < this.stack.length; i++)
            t = new x(this.buffer, t, this.stack[i]);
          return (this.bufferNode = new x(this.buffer, t, this.index));
        }
        get tree() {
          return this.buffer ? null : this._tree.node;
        }
      }

      function y(e) {
        return e.children.some(
          (e) => e instanceof p || !e.type.isAnonymous || y(e)
        );
      }
      const k = new WeakMap();

      function S(e, t) {
        if (!e.isAnonymous || t instanceof p || t.type != e) return 1;
        let n = k.get(t);
        return (
          null == n &&
            ((n = t.children.reduce((t, n) => t + S(e, n), 1)), k.set(t, n)),
          n
        );
      }

      function C(e, t, n, i, r, o, s, a, l) {
        let h = 0;
        for (let d = i; d < r; d++) h += S(e, t[d]);
        let c = Math.ceil((1.5 * h) / 8),
          u = [],
          f = [];
        return (
          (function t(n, i, r, s, a) {
            for (let h = r; h < s; ) {
              let r = h,
                d = i[h],
                p = S(e, n[h]);
              for (h++; h < s; h++) {
                let t = S(e, n[h]);
                if (p + t >= c) break;
                p += t;
              }
              if (h == r + 1) {
                if (p > c) {
                  let e = n[r];
                  t(e.children, e.positions, 0, e.children.length, i[r] + a);
                  continue;
                }
                u.push(n[r]);
              } else {
                let t = i[h - 1] + n[h - 1].length - d;
                u.push(C(e, n, i, r, h, d, t, null, l));
              }
              f.push(d + a - o);
            }
          })(t, n, i, r, 0),
          (a || l)(u, f, s)
        );
      }
      class A {
        constructor(e, t, n, i, r = !1, o = !1) {
          (this.from = e),
            (this.to = t),
            (this.tree = n),
            (this.offset = i),
            (this.open = (r ? 1 : 0) | (o ? 2 : 0));
        }
        get openStart() {
          return (1 & this.open) > 0;
        }
        get openEnd() {
          return (2 & this.open) > 0;
        }
        static addTree(e, t = [], n = !1) {
          let i = [new A(0, e.length, e, 0, !1, n)];
          for (let r of t) r.to > e.length && i.push(r);
          return i;
        }
        static applyChanges(e, t, n = 128) {
          if (!t.length) return e;
          let i = [],
            r = 1,
            o = e.length ? e[0] : null;
          for (let s = 0, a = 0, l = 0; ; s++) {
            let h = s < t.length ? t[s] : null,
              c = h ? h.fromA : 1e9;
            if (c - a >= n)
              for (; o && o.from < c; ) {
                let t = o;
                if (a >= t.from || c <= t.to || l) {
                  let e = Math.max(t.from, a) - l,
                    n = Math.min(t.to, c) - l;
                  t =
                    e >= n
                      ? null
                      : new A(e, n, t.tree, t.offset + l, s > 0, !!h);
                }
                if ((t && i.push(t), o.to > c)) break;
                o = r < e.length ? e[r++] : null;
              }
            if (!h) break;
            (a = h.toA), (l = h.toA - h.toB);
          }
          return i;
        }
      }
      class O {
        startParse(e, t, n) {
          return (
            'string' == typeof e && (e = new j(e)),
            (n = n
              ? n.length
                ? n.map((e) => new o(e.from, e.to))
                : [new o(0, 0)]
              : [new o(0, e.length)]),
            this.createParse(e, t || [], n)
          );
        }
        parse(e, t, n) {
          let i = this.startParse(e, t, n);
          for (;;) {
            let e = i.advance();
            if (e) return e;
          }
        }
      }
      class j {
        constructor(e) {
          this.string = e;
        }
        get length() {
          return this.string.length;
        }
        chunk(e) {
          return this.string.slice(e);
        }
        get lineChunks() {
          return !1;
        }
        read(e, t) {
          return this.string.slice(e, t);
        }
      }

      function M(e) {
        return (t, n, i, r) => new L(t, e, n, i, r);
      }
      class E {
        constructor(e, t, n, i) {
          (this.parser = e),
            (this.parse = t),
            (this.overlay = n),
            (this.target = i);
        }
      }
      class I {
        constructor(e, t, n, i, r, o, s) {
          (this.parser = e),
            (this.predicate = t),
            (this.mounts = n),
            (this.index = i),
            (this.start = r),
            (this.target = o),
            (this.prev = s),
            (this.depth = 0),
            (this.ranges = []);
        }
      }
      class L {
        constructor(e, t, n, i, r) {
          (this.nest = t),
            (this.input = n),
            (this.fragments = i),
            (this.ranges = r),
            (this.inner = []),
            (this.innerDone = 0),
            (this.baseTree = null),
            (this.stoppedAt = null),
            (this.baseParse = e);
        }
        advance() {
          if (this.baseParse) {
            let e = this.baseParse.advance();
            if (!e) return null;
            (this.baseParse = null), (this.baseTree = e), this.startInner();
          }
          if (this.innerDone == this.inner.length) return this.baseTree;
          let e = this.inner[this.innerDone],
            t = e.parse.advance();
          if (t) {
            this.innerDone++;
            let n = Object.assign(Object.create(null), e.target.props);
            (n[s.mounted.id] = new a(t, e.overlay, e.parser)),
              (e.target.props = n);
          }
          return null;
        }
        get parsedPos() {
          if (this.baseParse) return 0;
          let e = this.inner[this.innerDone];
          return e ? e.parse.parsedPos : this.input.length;
        }
        stopAt(e) {
          if (((this.stoppedAt = e), this.baseParse)) this.baseParse.stopAt(e);
          else
            for (let t = this.innerDone; t < this.inner.length; t++)
              this.inner[t].parse.stopAt(e);
        }
        startInner() {
          let e = new R(this.fragments);
          e: for (let t, n = this.baseTree.fullCursor(), i = null; ; ) {
            let r,
              s = !0;
            if (e.hasNode(n)) {
              if (i) {
                let e = i.mounts.find(
                  (e) =>
                    e.frag.from <= n.from &&
                    e.frag.to >= n.to &&
                    e.mount.overlay
                );
                if (e)
                  for (let t of e.mount.overlay) {
                    let r = t.from + e.pos,
                      o = t.to + e.pos;
                    r >= n.from &&
                      o <= n.to &&
                      i.ranges.push({
                        from: r,
                        to: o,
                      });
                  }
              }
              s = !1;
            } else if (
              !n.type.isAnonymous &&
              n.from < n.to &&
              (t = this.nest(n, this.input))
            ) {
              n.tree || P(n);
              let r = e.findMounts(n.from, t.parser);
              if ('function' == typeof t.overlay)
                i = new I(
                  t.parser,
                  t.overlay,
                  r,
                  this.inner.length,
                  n.from,
                  n.tree,
                  i
                );
              else {
                let e = N(this.ranges, t.overlay || [new o(n.from, n.to)]);
                e.length &&
                  this.inner.push(
                    new E(
                      t.parser,
                      t.parser.startParse(this.input, q(r, e), e),
                      t.overlay
                        ? t.overlay.map(
                            (e) => new o(e.from - n.from, e.to - n.from)
                          )
                        : null,
                      n.tree
                    )
                  ),
                  (s = !1);
              }
            } else
              i &&
                (r = i.predicate(n)) &&
                (!0 === r && (r = new o(n.from, n.to)),
                r.from < r.to && i.ranges.push(r));
            if (s && n.firstChild()) i && i.depth++;
            else
              for (; !n.nextSibling(); ) {
                if (!n.parent()) break e;
                if (i && !--i.depth) {
                  let e = N(this.ranges, i.ranges);
                  e.length &&
                    this.inner.splice(
                      i.index,
                      0,
                      new E(
                        i.parser,
                        i.parser.startParse(this.input, q(i.mounts, e), e),
                        i.ranges.map(
                          (e) => new o(e.from - i.start, e.to - i.start)
                        ),
                        i.target
                      )
                    ),
                    (i = i.prev);
                }
              }
          }
        }
      }

      function T(e, t, n, i, r, o) {
        if (t < n) {
          let s = e.buffer[t + 1],
            a = e.buffer[n - 2];
          i.push(e.slice(t, n, s, a)), r.push(s - o);
        }
      }

      function P(e) {
        let { node: t } = e,
          n = 0;
        do {
          e.parent(), n++;
        } while (!e.tree);
        let i = 0,
          r = e.tree,
          o = 0;
        for (
          ;
          (o = r.positions[i] + e.from),
            !(o <= t.from && o + r.children[i].length >= t.to);
          i++
        );
        let s = r.children[i],
          a = s.buffer;
        r.children[i] = (function e(n, i, r, l) {
          let h = n;
          for (; a[h + 2] + o <= t.from; ) h = a[h + 3];
          let c = [],
            u = [];
          T(s, n, h, c, u, l);
          let d =
            a[h + 1] + o == t.from && a[h + 2] + o == t.to && a[h] == t.type.id;
          c.push(
            d ? t.toTree() : e(h + 4, a[h + 3], s.set.types[a[h]], a[h + 1])
          ),
            u.push(a[h + 1] - l),
            T(s, a[h + 3], i, c, u, l);
          let p = c.length - 1;
          return new f(r, c, u, u[p] + c[p].length);
        })(0, a.length, h.none, 0);
        for (let l = 0; l <= n; l++) e.childAfter(t.from);
      }
      class D {
        constructor(e, t) {
          (this.offset = t), (this.done = !1), (this.cursor = e.fullCursor());
        }
        moveTo(e) {
          let { cursor: t } = this,
            n = e - this.offset;
          for (; !this.done && t.from < n; )
            (t.to >= e && t.enter(n, 1, !1, !1)) ||
              t.next(!1) ||
              (this.done = !0);
        }
        hasNode(e) {
          if (
            (this.moveTo(e.from),
            !this.done && this.cursor.from + this.offset == e.from)
          )
            for (let t = this.cursor.tree; ; ) {
              if (t == e.tree) return !0;
              if (
                !(
                  t.children.length &&
                  0 == t.positions[0] &&
                  t.children[0] instanceof f
                )
              )
                break;
              t = t.children[0];
            }
          return !1;
        }
      }
      class R {
        constructor(e) {
          if (((this.fragments = e), (this.fragI = 0), e.length)) {
            let t = (this.curFrag = e[0]);
            this.inner = new D(t.tree, -t.offset);
          } else this.curFrag = this.inner = null;
        }
        hasNode(e) {
          for (; this.curFrag && e.from >= this.curFrag.to; ) this.nextFrag();
          return (
            this.curFrag &&
            this.curFrag.from <= e.from &&
            this.curFrag.to >= e.to &&
            this.inner.hasNode(e)
          );
        }
        nextFrag() {
          if ((this.fragI++, this.fragI == this.fragments.length))
            this.curFrag = this.inner = null;
          else {
            let e = (this.curFrag = this.fragments[this.fragI]);
            this.inner = new D(e.tree, -e.offset);
          }
        }
        findMounts(e, t) {
          var n;
          let i = [];
          if (this.inner) {
            this.inner.cursor.moveTo(e, 1);
            for (let e = this.inner.cursor.node; e; e = e.parent) {
              let r =
                null === (n = e.tree) || void 0 === n
                  ? void 0
                  : n.prop(s.mounted);
              if (r && r.parser == t)
                for (let t = this.fragI; t < this.fragments.length; t++) {
                  let n = this.fragments[t];
                  if (n.from >= e.to) break;
                  n.tree == this.curFrag.tree &&
                    i.push({
                      frag: n,
                      pos: e.from - n.offset,
                      mount: r,
                    });
                }
            }
          }
          return i;
        }
      }

      function N(e, t) {
        let n = null,
          i = t;
        for (let r = 1, s = 0; r < e.length; r++) {
          let a = e[r - 1].to,
            l = e[r].from;
          for (; s < i.length; s++) {
            let e = i[s];
            if (e.from >= l) break;
            e.to <= a ||
              (n || (i = n = t.slice()),
              e.from < a
                ? ((n[s] = new o(e.from, a)),
                  e.to > l && n.splice(s + 1, 0, new o(l, e.to)))
                : e.to > l
                ? (n[s--] = new o(l, e.to))
                : n.splice(s--, 1));
          }
        }
        return i;
      }

      function B(e, t, n, i) {
        let r = 0,
          s = 0,
          a = !1,
          l = !1,
          h = -1e9,
          c = [];
        for (;;) {
          let u = r == e.length ? 1e9 : a ? e[r].to : e[r].from,
            f = s == t.length ? 1e9 : l ? t[s].to : t[s].from;
          if (a != l) {
            let e = Math.max(h, n),
              t = Math.min(u, f, i);
            e < t && c.push(new o(e, t));
          }
          if (((h = Math.min(u, f)), 1e9 == h)) break;
          u == h && (a ? ((a = !1), r++) : (a = !0)),
            f == h && (l ? ((l = !1), s++) : (l = !0));
        }
        return c;
      }

      function q(e, t) {
        let n = [];
        for (let { pos: i, mount: r, frag: s } of e) {
          let e = i + (r.overlay ? r.overlay[0].from : 0),
            a = e + r.tree.length,
            l = Math.max(s.from, e),
            h = Math.min(s.to, a);
          if (r.overlay) {
            let a = B(
              t,
              r.overlay.map((e) => new o(e.from + i, e.to + i)),
              l,
              h
            );
            for (let t = 0, i = l; ; t++) {
              let o = t == a.length,
                l = o ? h : a[t].from;
              if (
                (l > i &&
                  n.push(new A(i, l, r.tree, -e, s.from >= i, s.to <= l)),
                o)
              )
                break;
              i = a[t].to;
            }
          } else n.push(new A(l, h, r.tree, -e, s.from >= e, s.to <= a));
        }
        return n;
      }
    },
    nqdA: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      }),
        n.d(t, 'b', function () {
          return d;
        });
      for (
        var i = {
            8: 'Backspace',
            9: 'Tab',
            10: 'Enter',
            12: 'NumLock',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            44: 'PrintScreen',
            45: 'Insert',
            46: 'Delete',
            59: ';',
            61: '=',
            91: 'Meta',
            92: 'Meta',
            106: '*',
            107: '+',
            108: ',',
            109: '-',
            110: '.',
            111: '/',
            144: 'NumLock',
            145: 'ScrollLock',
            160: 'Shift',
            161: 'Shift',
            162: 'Control',
            163: 'Control',
            164: 'Alt',
            165: 'Alt',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            229: 'q',
          },
          r = {
            48: ')',
            49: '!',
            50: '@',
            51: '#',
            52: '$',
            53: '%',
            54: '^',
            55: '&',
            56: '*',
            57: '(',
            59: ':',
            61: '+',
            173: '_',
            186: ':',
            187: '+',
            188: '<',
            189: '_',
            190: '>',
            191: '?',
            192: '~',
            219: '{',
            220: '|',
            221: '}',
            222: '"',
            229: 'Q',
          },
          o =
            'undefined' != typeof navigator &&
            /Chrome\/(\d+)/.exec(navigator.userAgent),
          s =
            'undefined' != typeof navigator &&
            /Apple Computer/.test(navigator.vendor),
          a =
            'undefined' != typeof navigator &&
            /Gecko\/\d+/.test(navigator.userAgent),
          l = 'undefined' != typeof navigator && /Mac/.test(navigator.platform),
          h =
            'undefined' != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent
            ),
          c = (o && (l || +o[1] < 57)) || (a && l),
          u = 0;
        u < 10;
        u++
      )
        i[48 + u] = i[96 + u] = String(u);
      for (u = 1; u <= 24; u++) i[u + 111] = 'F' + u;
      for (u = 65; u <= 90; u++)
        (i[u] = String.fromCharCode(u + 32)), (r[u] = String.fromCharCode(u));
      for (var f in i) r.hasOwnProperty(f) || (r[f] = i[f]);

      function d(e) {
        var t =
          (!(
            (c && (e.ctrlKey || e.altKey || e.metaKey)) ||
            ((s || h) && e.shiftKey && e.key && 1 == e.key.length)
          ) &&
            e.key) ||
          (e.shiftKey ? r : i)[e.keyCode] ||
          e.key ||
          'Unidentified';
        return (
          'Esc' == t && (t = 'Escape'),
          'Del' == t && (t = 'Delete'),
          'Left' == t && (t = 'ArrowLeft'),
          'Up' == t && (t = 'ArrowUp'),
          'Right' == t && (t = 'ArrowRight'),
          'Down' == t && (t = 'ArrowDown'),
          t
        );
      }
    },
    rknV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      const i =
          'undefined' == typeof Symbol ? '__\u037c' : Symbol.for('\u037c'),
        r =
          'undefined' == typeof Symbol
            ? '__styleSet' + Math.floor(1e8 * Math.random())
            : Symbol('styleSet'),
        o =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : {};
      class s {
        constructor(e, t) {
          this.rules = [];
          let { finish: n } = t || {};

          function i(e) {
            return /^@/.test(e) ? [e] : e.split(/,\s*/);
          }

          function r(e, t, o, s) {
            let a = [],
              l = /^@(\w+)\b/.exec(e[0]),
              h = l && 'keyframes' == l[1];
            if (l && null == t) return o.push(e[0] + ';');
            for (let n in t) {
              let s = t[n];
              if (/&/.test(n))
                r(
                  n
                    .split(/,\s*/)
                    .map((t) => e.map((e) => t.replace(/&/, e)))
                    .reduce((e, t) => e.concat(t)),
                  s,
                  o
                );
              else if (s && 'object' == typeof s) {
                if (!l)
                  throw new RangeError(
                    'The value of a property (' +
                      n +
                      ') should be a primitive value.'
                  );
                r(i(n), s, a, h);
              } else
                null != s &&
                  a.push(
                    n
                      .replace(/_.*/, '')
                      .replace(/[A-Z]/g, (e) => '-' + e.toLowerCase()) +
                      ': ' +
                      s +
                      ';'
                  );
            }
            (a.length || h) &&
              o.push(
                (!n || l || s ? e : e.map(n)).join(', ') +
                  ' {' +
                  a.join(' ') +
                  '}'
              );
          }
          for (let o in e) r(i(o), e[o], this.rules);
        }
        getRules() {
          return this.rules.join('\n');
        }
        static newName() {
          let e = o[i] || 1;
          return (o[i] = e + 1), '\u037c' + e.toString(36);
        }
        static mount(e, t) {
          (e[r] || new l(e)).mount(Array.isArray(t) ? t : [t]);
        }
      }
      let a = null;
      class l {
        constructor(e) {
          if (
            !e.head &&
            e.adoptedStyleSheets &&
            'undefined' != typeof CSSStyleSheet
          ) {
            if (a)
              return (
                (e.adoptedStyleSheets = [a.sheet].concat(e.adoptedStyleSheets)),
                (e[r] = a)
              );
            (this.sheet = new CSSStyleSheet()),
              (e.adoptedStyleSheets = [this.sheet].concat(
                e.adoptedStyleSheets
              )),
              (a = this);
          } else {
            this.styleTag = (e.ownerDocument || e).createElement('style');
            let t = e.head || e;
            t.insertBefore(this.styleTag, t.firstChild);
          }
          (this.modules = []), (e[r] = this);
        }
        mount(e) {
          let t = this.sheet,
            n = 0,
            i = 0;
          for (let r = 0; r < e.length; r++) {
            let o = e[r],
              s = this.modules.indexOf(o);
            if (
              (s < i && s > -1 && (this.modules.splice(s, 1), i--, (s = -1)),
              -1 == s)
            ) {
              if ((this.modules.splice(i++, 0, o), t))
                for (let e = 0; e < o.rules.length; e++)
                  t.insertRule(o.rules[e], n++);
            } else {
              for (; i < s; ) n += this.modules[i++].rules.length;
              (n += o.rules.length), i++;
            }
          }
          if (!t) {
            let e = '';
            for (let t = 0; t < this.modules.length; t++)
              e += this.modules[t].getRules() + '\n';
            this.styleTag.textContent = e;
          }
        }
      }
    },
    uZp5: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return g;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return d;
        }),
        n.d(t, 'd', function () {
          return p;
        }),
        n.d(t, 'e', function () {
          return s;
        }),
        n.d(t, 'f', function () {
          return m;
        }),
        n.d(t, 'g', function () {
          return f;
        });
      let i =
        'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
          .split(',')
          .map((e) => (e ? parseInt(e, 36) : 1));
      for (let A = 1; A < i.length; A++) i[A] += i[A - 1];

      function r(e) {
        for (let t = 1; t < i.length; t += 2)
          if (i[t] > e) return i[t - 1] <= e;
        return !1;
      }

      function o(e) {
        return e >= 127462 && e <= 127487;
      }

      function s(e, t, n = !0) {
        return (n ? a : l)(e, t);
      }

      function a(e, t) {
        if (t == e.length) return t;
        t && h(e.charCodeAt(t)) && c(e.charCodeAt(t - 1)) && t--;
        let n = u(e, t);
        for (t += d(n); t < e.length; ) {
          let i = u(e, t);
          if (8205 == n || 8205 == i || r(i)) (t += d(i)), (n = i);
          else {
            if (!o(i)) break;
            {
              let n = 0,
                i = t - 2;
              for (; i >= 0 && o(u(e, i)); ) n++, (i -= 2);
              if (n % 2 == 0) break;
              t += 2;
            }
          }
        }
        return t;
      }

      function l(e, t) {
        for (; t > 0; ) {
          let n = a(e, t - 2);
          if (n < t) return n;
          t--;
        }
        return 0;
      }

      function h(e) {
        return e >= 56320 && e < 57344;
      }

      function c(e) {
        return e >= 55296 && e < 56320;
      }

      function u(e, t) {
        let n = e.charCodeAt(t);
        if (!c(n) || t + 1 == e.length) return n;
        let i = e.charCodeAt(t + 1);
        return h(i) ? i - 56320 + ((n - 55296) << 10) + 65536 : n;
      }

      function f(e) {
        return e <= 65535
          ? String.fromCharCode(e)
          : ((e -= 65536),
            String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
      }

      function d(e) {
        return e < 65536 ? 1 : 2;
      }

      function p(e, t, n = e.length) {
        let i = 0;
        for (let r = 0; r < n; )
          9 == e.charCodeAt(r)
            ? ((i += t - (i % t)), r++)
            : (i++, (r = s(e, r)));
        return i;
      }

      function m(e, t, n) {
        for (let i = 0, r = 0; i < e.length; ) {
          if (r >= t) return i;
          (r += 9 == e.charCodeAt(i) ? n - (r % n) : 1), (i = s(e, i));
        }
        return e.length;
      }
      class g {
        constructor() {}
        lineAt(e) {
          if (e < 0 || e > this.length)
            throw new RangeError(
              `Invalid position ${e} in document of length ${this.length}`
            );
          return this.lineInner(e, !1, 1, 0);
        }
        line(e) {
          if (e < 1 || e > this.lines)
            throw new RangeError(
              `Invalid line number ${e} in ${this.lines}-line document`
            );
          return this.lineInner(e, !0, 1, 0);
        }
        replace(e, t, n) {
          let i = [];
          return (
            this.decompose(0, e, i, 2),
            n.length && n.decompose(0, n.length, i, 3),
            this.decompose(t, this.length, i, 1),
            b.from(i, this.length - (t - e) + n.length)
          );
        }
        append(e) {
          return this.replace(this.length, this.length, e);
        }
        slice(e, t = this.length) {
          let n = [];
          return this.decompose(e, t, n, 0), b.from(n, t - e);
        }
        eq(e) {
          if (e == this) return !0;
          if (e.length != this.length || e.lines != this.lines) return !1;
          let t = new y(this),
            n = new y(e);
          for (;;) {
            if (
              (t.next(),
              n.next(),
              t.lineBreak != n.lineBreak ||
                t.done != n.done ||
                t.value != n.value)
            )
              return !1;
            if (t.done) return !0;
          }
        }
        iter(e = 1) {
          return new y(this, e);
        }
        iterRange(e, t = this.length) {
          return new k(this, e, t);
        }
        iterLines(e, t) {
          let n;
          if (null == e) n = this.iter();
          else {
            null == t && (t = this.lines + 1);
            let i = this.line(e).from;
            n = this.iterRange(
              i,
              Math.max(
                i,
                t == this.lines + 1
                  ? this.length
                  : t <= 1
                  ? 0
                  : this.line(t - 1).to
              )
            );
          }
          return new S(n);
        }
        toString() {
          return this.sliceString(0);
        }
        toJSON() {
          let e = [];
          return this.flatten(e), e;
        }
        static of(e) {
          if (0 == e.length)
            throw new RangeError('A document must have at least one line');
          return 1 != e.length || e[0]
            ? e.length <= 32
              ? new v(e)
              : b.from(v.split(e, []))
            : g.empty;
        }
      }
      'undefined' != typeof Symbol &&
        (g.prototype[Symbol.iterator] = function () {
          return this.iter();
        });
      class v extends g {
        constructor(
          e,
          t = (function (e) {
            let t = -1;
            for (let n of e) t += n.length + 1;
            return t;
          })(e)
        ) {
          super(), (this.text = e), (this.length = t);
        }
        get lines() {
          return this.text.length;
        }
        get children() {
          return null;
        }
        lineInner(e, t, n, i) {
          for (let r = 0; ; r++) {
            let o = this.text[r],
              s = i + o.length;
            if ((t ? n : s) >= e) return new C(i, s, n, o);
            (i = s + 1), n++;
          }
        }
        decompose(e, t, n, i) {
          let r =
            e <= 0 && t >= this.length
              ? this
              : new v(
                  w(this.text, e, t),
                  Math.min(t, this.length) - Math.max(0, e)
                );
          if (1 & i) {
            let e = n.pop(),
              t = x(r.text, e.text.slice(), 0, r.length);
            if (t.length <= 32) n.push(new v(t, e.length + r.length));
            else {
              let e = t.length >> 1;
              n.push(new v(t.slice(0, e)), new v(t.slice(e)));
            }
          } else n.push(r);
        }
        replace(e, t, n) {
          if (!(n instanceof v)) return super.replace(e, t, n);
          let i = x(this.text, x(n.text, w(this.text, 0, e)), t),
            r = this.length + n.length - (t - e);
          return i.length <= 32 ? new v(i, r) : b.from(v.split(i, []), r);
        }
        sliceString(e, t = this.length, n = '\n') {
          let i = '';
          for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
            let s = this.text[o],
              a = r + s.length;
            r > e && o && (i += n),
              e < a && t > r && (i += s.slice(Math.max(0, e - r), t - r)),
              (r = a + 1);
          }
          return i;
        }
        flatten(e) {
          for (let t of this.text) e.push(t);
        }
        static split(e, t) {
          let n = [],
            i = -1;
          for (let r of e)
            n.push(r),
              (i += r.length + 1),
              32 == n.length && (t.push(new v(n, i)), (n = []), (i = -1));
          return i > -1 && t.push(new v(n, i)), t;
        }
      }
      class b extends g {
        constructor(e, t) {
          super(), (this.children = e), (this.length = t), (this.lines = 0);
          for (let n of e) this.lines += n.lines;
        }
        lineInner(e, t, n, i) {
          for (let r = 0; ; r++) {
            let o = this.children[r],
              s = i + o.length,
              a = n + o.lines - 1;
            if ((t ? a : s) >= e) return o.lineInner(e, t, n, i);
            (i = s + 1), (n = a + 1);
          }
        }
        decompose(e, t, n, i) {
          for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
            let s = this.children[r],
              a = o + s.length;
            if (e <= a && t >= o) {
              let r = i & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
              o >= e && a <= t && !r
                ? n.push(s)
                : s.decompose(e - o, t - o, n, r);
            }
            o = a + 1;
          }
        }
        replace(e, t, n) {
          if (n.lines < this.lines)
            for (let i = 0, r = 0; i < this.children.length; i++) {
              let o = this.children[i],
                s = r + o.length;
              if (e >= r && t <= s) {
                let a = o.replace(e - r, t - r, n),
                  l = this.lines - o.lines + a.lines;
                if (a.lines < l >> 4 && a.lines > l >> 6) {
                  let r = this.children.slice();
                  return (r[i] = a), new b(r, this.length - (t - e) + n.length);
                }
                return super.replace(r, s, a);
              }
              r = s + 1;
            }
          return super.replace(e, t, n);
        }
        sliceString(e, t = this.length, n = '\n') {
          let i = '';
          for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
            let s = this.children[r],
              a = o + s.length;
            o > e && r && (i += n),
              e < a && t > o && (i += s.sliceString(e - o, t - o, n)),
              (o = a + 1);
          }
          return i;
        }
        flatten(e) {
          for (let t of this.children) t.flatten(e);
        }
        static from(e, t = e.reduce((e, t) => e + t.length + 1, -1)) {
          let n = 0;
          for (let f of e) n += f.lines;
          if (n < 32) {
            let n = [];
            for (let t of e) t.flatten(n);
            return new v(n, t);
          }
          let i = Math.max(32, n >> 5),
            r = i << 1,
            o = i >> 1,
            s = [],
            a = 0,
            l = -1,
            h = [];

          function c(e) {
            let t;
            if (e.lines > r && e instanceof b) for (let n of e.children) c(n);
            else
              e.lines > o && (a > o || !a)
                ? (u(), s.push(e))
                : e instanceof v &&
                  a &&
                  (t = h[h.length - 1]) instanceof v &&
                  e.lines + t.lines <= 32
                ? ((a += e.lines),
                  (l += e.length + 1),
                  (h[h.length - 1] = new v(
                    t.text.concat(e.text),
                    t.length + 1 + e.length
                  )))
                : (a + e.lines > i && u(),
                  (a += e.lines),
                  (l += e.length + 1),
                  h.push(e));
          }

          function u() {
            0 != a &&
              (s.push(1 == h.length ? h[0] : b.from(h, l)),
              (l = -1),
              (a = h.length = 0));
          }
          for (let f of e) c(f);
          return u(), 1 == s.length ? s[0] : new b(s, t);
        }
      }

      function x(e, t, n = 0, i = 1e9) {
        for (let r = 0, o = 0, s = !0; o < e.length && r <= i; o++) {
          let a = e[o],
            l = r + a.length;
          l >= n &&
            (l > i && (a = a.slice(0, i - r)),
            r < n && (a = a.slice(n - r)),
            s ? ((t[t.length - 1] += a), (s = !1)) : t.push(a)),
            (r = l + 1);
        }
        return t;
      }

      function w(e, t, n) {
        return x(e, [''], t, n);
      }
      g.empty = new v([''], 0);
      class y {
        constructor(e, t = 1) {
          (this.dir = t),
            (this.done = !1),
            (this.lineBreak = !1),
            (this.value = ''),
            (this.nodes = [e]),
            (this.offsets = [
              t > 0
                ? 1
                : (e instanceof v ? e.text.length : e.children.length) << 1,
            ]);
        }
        nextInner(e, t) {
          for (this.done = this.lineBreak = !1; ; ) {
            let n = this.nodes.length - 1,
              i = this.nodes[n],
              r = this.offsets[n],
              o = r >> 1,
              s = i instanceof v ? i.text.length : i.children.length;
            if (o == (t > 0 ? s : 0)) {
              if (0 == n) return (this.done = !0), (this.value = ''), this;
              t > 0 && this.offsets[n - 1]++,
                this.nodes.pop(),
                this.offsets.pop();
            } else if ((1 & r) == (t > 0 ? 0 : 1)) {
              if (((this.offsets[n] += t), 0 == e))
                return (this.lineBreak = !0), (this.value = '\n'), this;
              e--;
            } else if (i instanceof v) {
              let r = i.text[o + (t < 0 ? -1 : 0)];
              if (((this.offsets[n] += t), r.length > Math.max(0, e)))
                return (
                  (this.value =
                    0 == e ? r : t > 0 ? r.slice(e) : r.slice(0, r.length - e)),
                  this
                );
              e -= r.length;
            } else {
              let r = i.children[o + (t < 0 ? -1 : 0)];
              e > r.length
                ? ((e -= r.length), (this.offsets[n] += t))
                : (t < 0 && this.offsets[n]--,
                  this.nodes.push(r),
                  this.offsets.push(
                    t > 0
                      ? 1
                      : (r instanceof v ? r.text.length : r.children.length) <<
                          1
                  ));
            }
          }
        }
        next(e = 0) {
          return (
            e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
            this.nextInner(e, this.dir)
          );
        }
      }
      class k {
        constructor(e, t, n) {
          (this.value = ''),
            (this.done = !1),
            (this.cursor = new y(e, t > n ? -1 : 1)),
            (this.pos = t > n ? e.length : 0),
            (this.from = Math.min(t, n)),
            (this.to = Math.max(t, n));
        }
        nextInner(e, t) {
          if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
            return (this.value = ''), (this.done = !0), this;
          (this.done = !1),
            (e += Math.max(
              0,
              t < 0 ? this.pos - this.to : this.from - this.pos
            ));
          let n = t < 0 ? this.pos - this.from : this.to - this.pos;
          e > n && (e = n), (n -= e);
          let { value: i } = this.cursor.next(e);
          return (
            (this.pos += (i.length + e) * t),
            (this.value =
              i.length <= n
                ? i
                : t < 0
                ? i.slice(i.length - n)
                : i.slice(0, n)),
            this
          );
        }
        next(e = 0) {
          return (
            e < 0
              ? (e = Math.max(e, this.from - this.pos))
              : e > 0 && (e = Math.min(e, this.to - this.pos)),
            this.nextInner(e, this.cursor.dir)
          );
        }
        get lineBreak() {
          return this.cursor.lineBreak && '' != this.value;
        }
      }
      class S {
        constructor(e) {
          (this.inner = e),
            (this.afterBreak = !0),
            (this.value = ''),
            (this.done = !1);
        }
        next(e = 0) {
          let { done: t, lineBreak: n, value: i } = this.inner.next(e);
          return (
            t
              ? ((this.done = !0), (this.value = ''))
              : n
              ? this.afterBreak
                ? (this.value = '')
                : ((this.afterBreak = !0), this.next())
              : ((this.value = i), (this.afterBreak = !1)),
            this
          );
        }
        get lineBreak() {
          return !1;
        }
      }
      class C {
        constructor(e, t, n, i) {
          (this.from = e), (this.to = t), (this.number = n), (this.text = i);
        }
        get length() {
          return this.to - this.from;
        }
      }
    },
    ubVE: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return w;
      }),
        n.d(t, 'b', function () {
          return W;
        }),
        n.d(t, 'c', function () {
          return p;
        }),
        n.d(t, 'd', function () {
          return V;
        });
      var i = n('lmln'),
        r = n('rknV'),
        o = n('AtEE'),
        s = n('4eob'),
        a = n('yqQ+'),
        l = n('wG49');
      let h = 0;
      class c {
        constructor(e, t, n) {
          (this.set = e), (this.base = t), (this.modified = n), (this.id = h++);
        }
        static define(e) {
          if (null === e || void 0 === e ? void 0 : e.base)
            throw new Error('Can not derive from a modified tag');
          let t = new c([], null, []);
          if ((t.set.push(t), e)) for (let n of e.set) t.set.push(n);
          return t;
        }
        static defineModifier() {
          let e = new f();
          return (t) =>
            t.modified.indexOf(e) > -1
              ? t
              : f.get(
                  t.base || t,
                  t.modified.concat(e).sort((e, t) => e.id - t.id)
                );
        }
      }
      let u = 0;
      class f {
        constructor() {
          (this.instances = []), (this.id = u++);
        }
        static get(e, t) {
          if (!t.length) return e;
          let n = t[0].instances.find((n) => {
            return (
              n.base == e &&
              ((i = t),
              (r = n.modified),
              i.length == r.length && i.every((e, t) => e == r[t]))
            );
            var i, r;
          });
          if (n) return n;
          let i = [],
            r = new c(i, e, t);
          for (let s of t) s.instances.push(r);
          let o = d(t);
          for (let s of e.set) for (let e of o) i.push(f.get(s, e));
          return r;
        }
      }

      function d(e) {
        let t = [e];
        for (let n = 0; n < e.length; n++)
          for (let i of d(e.slice(0, n).concat(e.slice(n + 1)))) t.push(i);
        return t;
      }

      function p(e) {
        let t = Object.create(null);
        for (let n in e) {
          let i = e[n];
          Array.isArray(i) || (i = [i]);
          for (let e of n.split(' '))
            if (e) {
              let n = [],
                r = 2,
                o = e;
              for (let t = 0; ; ) {
                if ('...' == o && t > 0 && t + 3 == e.length) {
                  r = 1;
                  break;
                }
                let i = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);
                if (!i) throw new RangeError('Invalid path: ' + e);
                if (
                  (n.push(
                    '*' == i[0]
                      ? null
                      : '"' == i[0][0]
                      ? JSON.parse(i[0])
                      : i[0]
                  ),
                  (t += i[0].length),
                  t == e.length)
                )
                  break;
                let s = e[t++];
                if (t == e.length && '!' == s) {
                  r = 0;
                  break;
                }
                if ('/' != s) throw new RangeError('Invalid path: ' + e);
                o = e.slice(t);
              }
              let s = n.length - 1,
                a = n[s];
              if (!a) throw new RangeError('Invalid path: ' + e);
              let l = new x(i, r, s > 0 ? n.slice(0, s) : null);
              t[a] = l.sort(t[a]);
            }
        }
        return m.add(t);
      }
      const m = new i.b(),
        g = s.h.define({
          combine: (e) => (e.length ? w.combinedMatch(e) : null),
        }),
        v = s.h.define({
          combine: (e) => (e.length ? e[0].match : null),
        });

      function b(e) {
        return e.facet(g) || e.facet(v);
      }
      class x {
        constructor(e, t, n, i) {
          (this.tags = e), (this.mode = t), (this.context = n), (this.next = i);
        }
        sort(e) {
          return !e || e.depth < this.depth
            ? ((this.next = e), this)
            : ((e.next = this.sort(e.next)), e);
        }
        get depth() {
          return this.context ? this.context.length : 0;
        }
      }
      class w {
        constructor(e, t) {
          let n;

          function i(e) {
            let t = r.a.newName();
            return ((n || (n = Object.create(null)))['.' + t] = e), t;
          }
          (this.map = Object.create(null)),
            (this.all =
              'string' == typeof t.all ? t.all : t.all ? i(t.all) : null);
          for (let r of e) {
            let e =
                (r.class ||
                  i(
                    Object.assign({}, r, {
                      tag: null,
                    })
                  )) + (this.all ? ' ' + this.all : ''),
              t = r.tag;
            if (Array.isArray(t)) for (let n of t) this.map[n.id] = e;
            else this.map[t.id] = e;
          }
          (this.module = n ? new r.a(n) : null),
            (this.scope = t.scope || null),
            (this.match = this.match.bind(this));
          let s = [k];
          this.module && s.push(o.d.styleModule.of(this.module)),
            (this.extension = s.concat(g.of(this))),
            (this.fallback = s.concat(v.of(this)));
        }
        match(e, t) {
          if (this.scope && t != this.scope) return null;
          for (let n of e.set) {
            let t = this.map[n.id];
            if (void 0 !== t) return n != e && (this.map[e.id] = t), t;
          }
          return (this.map[e.id] = this.all);
        }
        static combinedMatch(e) {
          if (1 == e.length) return e[0].match;
          let t = e.some((e) => e.scope) ? void 0 : Object.create(null);
          return (n, i) => {
            let r = t && t[n.id];
            if (void 0 !== r) return r;
            let o = null;
            for (let t of e) {
              let e = t.match(n, i);
              e && (o = o ? o + ' ' + e : e);
            }
            return t && (t[n.id] = o), o;
          };
        }
        static define(e, t) {
          return new w(e, t || {});
        }
        static get(e, t, n) {
          let r = b(e);
          return r && r(t, n || i.d.none);
        }
      }
      class y {
        constructor(e) {
          (this.markCache = Object.create(null)),
            (this.tree = Object(a.w)(e.state)),
            (this.decorations = this.buildDeco(e, b(e.state)));
        }
        update(e) {
          let t = Object(a.w)(e.state),
            n = b(e.state),
            i = n != e.startState.facet(g);
          t.length < e.view.viewport.to && !i && t.type == this.tree.type
            ? (this.decorations = this.decorations.map(e.changes))
            : (t != this.tree || e.viewportChanged || i) &&
              ((this.tree = t), (this.decorations = this.buildDeco(e.view, n)));
        }
        buildDeco(e, t) {
          if (!t || !this.tree.length) return o.b.none;
          let n = new l.b();
          for (let { from: i, to: r } of e.visibleRanges)
            A(this.tree, i, r, t, (e, t, i) => {
              n.add(
                e,
                t,
                this.markCache[i] ||
                  (this.markCache[i] = o.b.mark({
                    class: i,
                  }))
              );
            });
          return n.finish();
        }
      }
      const k = s.j.extend(
          o.f.fromClass(y, {
            decorations: (e) => e.decorations,
          })
        ),
        S = [''];
      class C {
        constructor(e, t, n) {
          (this.at = e), (this.style = t), (this.span = n), (this.class = '');
        }
        startSpan(e, t) {
          t != this.class &&
            (this.flush(e), e > this.at && (this.at = e), (this.class = t));
        }
        flush(e) {
          e > this.at && this.class && this.span(this.at, e, this.class);
        }
        highlightRange(e, t, n, r, o, s) {
          let { type: a, from: l, to: h } = e;
          if (l >= n || h <= t) return;
          (S[o] = a.name), a.isTop && (s = a);
          let c = r,
            u = a.prop(m),
            f = !1;
          for (; u; ) {
            if (!u.context || O(u.context, S, o)) {
              for (let e of u.tags) {
                let t = this.style(e, s);
                t &&
                  (c && (c += ' '),
                  (c += t),
                  1 == u.mode
                    ? (r += (r ? ' ' : '') + t)
                    : 0 == u.mode && (f = !0));
              }
              break;
            }
            u = u.next;
          }
          if ((this.startSpan(e.from, c), f)) return;
          let d = e.tree && e.tree.prop(i.b.mounted);
          if (d && d.overlay) {
            let t = e.node.enter(d.overlay[0].from + l, 1),
              i = e.firstChild();
            for (let a = 0, u = l; ; a++) {
              let f = a < d.overlay.length ? d.overlay[a] : null,
                p = f ? f.from + l : h;
              if (p > u && i)
                for (
                  ;
                  e.from < p &&
                  (this.highlightRange(e, u, p, r, o + 1, s),
                  this.startSpan(Math.min(n, e.to), c),
                  !(e.to >= p) && e.nextSibling());

                );
              if (!f) break;
              this.highlightRange(
                t.cursor,
                f.from + l,
                f.to + l,
                r,
                o,
                d.tree.type
              ),
                (u = f.to + l),
                this.startSpan(u, c);
            }
            i && e.parent();
          } else if (e.firstChild()) {
            do {
              if (!(e.to <= t)) {
                if (e.from >= n) break;
                this.highlightRange(e, t, n, r, o + 1, s),
                  this.startSpan(Math.min(n, e.to), c);
              }
            } while (e.nextSibling());
            e.parent();
          }
        }
      }

      function A(e, t, n, i, r) {
        let o = new C(t, i, r);
        o.highlightRange(e.cursor(), t, n, '', 0, e.type), o.flush(n);
      }

      function O(e, t, n) {
        if (e.length > n - 1) return !1;
        for (let i = n - 1, r = e.length - 1; r >= 0; r--, i--) {
          let n = e[r];
          if (n && n != t[i]) return !1;
        }
        return !0;
      }
      const j = c.define,
        M = j(),
        E = j(),
        I = j(E),
        L = j(),
        T = j(L),
        P = j(L),
        D = j(),
        R = j(D),
        N = j(),
        B = j(),
        q = j(),
        z = j(q),
        F = j(),
        V = {
          comment: M,
          lineComment: j(M),
          blockComment: j(M),
          docComment: j(M),
          name: E,
          variableName: j(E),
          typeName: I,
          tagName: j(I),
          propertyName: j(E),
          className: j(E),
          labelName: j(E),
          namespace: j(E),
          macroName: j(E),
          literal: L,
          string: T,
          docString: j(T),
          character: j(T),
          number: P,
          integer: j(P),
          float: j(P),
          bool: j(L),
          regexp: j(L),
          escape: j(L),
          color: j(L),
          url: j(L),
          keyword: N,
          self: j(N),
          null: j(N),
          atom: j(N),
          unit: j(N),
          modifier: j(N),
          operatorKeyword: j(N),
          controlKeyword: j(N),
          definitionKeyword: j(N),
          operator: B,
          derefOperator: j(B),
          arithmeticOperator: j(B),
          logicOperator: j(B),
          bitwiseOperator: j(B),
          compareOperator: j(B),
          updateOperator: j(B),
          definitionOperator: j(B),
          typeOperator: j(B),
          controlOperator: j(B),
          punctuation: q,
          separator: j(q),
          bracket: z,
          angleBracket: j(z),
          squareBracket: j(z),
          paren: j(z),
          brace: j(z),
          content: D,
          heading: R,
          heading1: j(R),
          heading2: j(R),
          heading3: j(R),
          heading4: j(R),
          heading5: j(R),
          heading6: j(R),
          contentSeparator: j(D),
          list: j(D),
          quote: j(D),
          emphasis: j(D),
          strong: j(D),
          link: j(D),
          monospace: j(D),
          strikethrough: j(D),
          inserted: j(),
          deleted: j(),
          changed: j(),
          invalid: j(),
          meta: F,
          documentMeta: j(F),
          annotation: j(F),
          processingInstruction: j(F),
          definition: c.defineModifier(),
          constant: c.defineModifier(),
          function: c.defineModifier(),
          standard: c.defineModifier(),
          local: c.defineModifier(),
          special: c.defineModifier(),
        },
        W = w.define([
          {
            tag: V.link,
            textDecoration: 'underline',
          },
          {
            tag: V.heading,
            textDecoration: 'underline',
            fontWeight: 'bold',
          },
          {
            tag: V.emphasis,
            fontStyle: 'italic',
          },
          {
            tag: V.strong,
            fontWeight: 'bold',
          },
          {
            tag: V.strikethrough,
            textDecoration: 'line-through',
          },
          {
            tag: V.keyword,
            color: '#708',
          },
          {
            tag: [V.atom, V.bool, V.url, V.contentSeparator, V.labelName],
            color: '#219',
          },
          {
            tag: [V.literal, V.inserted],
            color: '#164',
          },
          {
            tag: [V.string, V.deleted],
            color: '#a11',
          },
          {
            tag: [V.regexp, V.escape, V.special(V.string)],
            color: '#e40',
          },
          {
            tag: V.definition(V.variableName),
            color: '#00f',
          },
          {
            tag: V.local(V.variableName),
            color: '#30a',
          },
          {
            tag: [V.typeName, V.namespace],
            color: '#085',
          },
          {
            tag: V.className,
            color: '#167',
          },
          {
            tag: [V.special(V.variableName), V.macroName],
            color: '#256',
          },
          {
            tag: V.definition(V.propertyName),
            color: '#00c',
          },
          {
            tag: V.comment,
            color: '#940',
          },
          {
            tag: V.meta,
            color: '#7a757a',
          },
          {
            tag: V.invalid,
            color: '#f00',
          },
        ]);
      V.link,
        V.heading,
        V.emphasis,
        V.strong,
        V.keyword,
        V.atom,
        V.bool,
        V.url,
        V.labelName,
        V.inserted,
        V.deleted,
        V.literal,
        V.string,
        V.number,
        V.regexp,
        V.escape,
        V.string,
        V.variableName,
        V.variableName,
        V.variableName,
        V.variableName,
        V.typeName,
        V.namespace,
        V.macroName,
        V.propertyName,
        V.operator,
        V.comment,
        V.meta,
        V.invalid,
        V.punctuation;
    },
    vyFI: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return kt;
      });
      var i = n('z7pX'),
        r = n('vJKn'),
        o = n.n(r),
        s = n('rg98'),
        a = n('xvhg'),
        l = n('q1tI'),
        h = n('tpqs'),
        c = n('AtEE'),
        u = n('4eob'),
        f = n('H+61'),
        d = n('UlJF'),
        p = n('7LId'),
        m = n('VIvw'),
        g = n('iHvq'),
        v = n('yqQ+'),
        b = n('wG49');

      function x(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return w(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return w(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[i++],
                    };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          s = !0,
          a = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (a = !0), (o = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (a) throw o;
            }
          },
        };
      }

      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }

      function y(e) {
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
            i = Object(g.a)(e);
          if (t) {
            var r = Object(g.a)(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return Object(m.a)(this, n);
        };
      }
      var k = c.b.mark({
          class: 'cm-indentation-marker',
          tagName: 'span',
        }),
        S = (function (e) {
          Object(p.a)(n, e);
          var t = y(n);

          function n(e, i) {
            var r;
            return (
              Object(f.a)(this, n),
              ((r = t.call(this)).numIndent = e),
              (r.indentSize = i),
              r
            );
          }
          return (
            Object(d.a)(n, [
              {
                key: 'eq',
                value: function (e) {
                  return (
                    this.numIndent === e.numIndent &&
                    this.indentSize === e.indentSize
                  );
                },
              },
              {
                key: 'toDOM',
                value: function (e) {
                  var t = Object(v.n)(e.state),
                    n = document.createElement('span');
                  (n.style.top = '0'),
                    (n.style.left = '4px'),
                    (n.style.position = 'absolute');
                  for (var i = 0; i < this.numIndent; i++) {
                    var r = document.createElement('span');
                    (r.className = 'cm-indentation-marker'),
                      (r.innerHTML = ''.concat(' '.repeat(t))),
                      n.appendChild(r);
                  }
                  return n;
                },
              },
            ]),
            n
          );
        })(c.g);

      function C(e, t, n) {
        for (var i = 0, r = 0, o = null, s = 0; s < e.length; s++) {
          if (' ' !== e[s] && '\t' !== e[s])
            return r % t === 0 && 0 !== s && i++, i;
          ('\t' === o || r % t === 0) && (i++, n && n(s)),
            ' ' === e[s] ? r++ : (r = 0),
            (o = e[s]);
        }
        return i;
      }

      function A(e, t) {
        var n = Math.min(e, t),
          i = Math.max(e, t);
        return 0 === n && i > 0 ? 1 : n === i && n > 0 ? n - 1 : n;
      }

      function O(e, t, n) {
        for (var i = e.lines, r = t; r <= i; ) {
          var o = e.line(r).text;
          if (0 !== o.trim().length) return [r, C(o, n)];
          r++;
        }
        return [i + 1, 0];
      }

      function j(e) {
        var t,
          n = new b.b(),
          i = Object(v.n)(e.state),
          r = x(e.visibleRanges);
        try {
          for (r.s(); !(t = r.n()).done; )
            for (
              var o = t.value,
                s = o.from,
                l = o.to,
                h = s,
                u = 0,
                f = 0,
                d = 0,
                p = function () {
                  var t = e.state.doc.lineAt(h),
                    r = t.text;
                  if (0 === r.trim().length) {
                    if (d < t.number) {
                      var o = O(e.state.doc, t.number + 1, i),
                        s = Object(a.a)(o, 2),
                        l = s[0],
                        p = s[1];
                      (d = l), (f = p);
                    }
                    var m = A(u, f),
                      g = c.b.widget({
                        widget: new S(m, i),
                      });
                    return n.add(t.from, t.from, g), (h = t.to + 1), 'continue';
                  }
                  (u = C(r, i, function (e) {
                    var i = t.from + e;
                    n.add(i, i + 1, k);
                  })),
                    (h = t.to + 1);
                };
              h <= l;

            )
              p();
        } catch (m) {
          r.e(m);
        } finally {
          r.f();
        }
        return n.finish();
      }
      var M = c.d.baseTheme({
        '.cm-line': {
          position: 'relative',
        },
        '.cm-indentation-marker': {
          display: 'inline-block',
        },
        '&light .cm-indentation-marker': {
          background:
            'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") left repeat-y',
        },
        '&dark .cm-indentation-marker': {
          background:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) left repeat-y',
        },
      });

      function E(e, t, n) {
        var i = [u.g.tabSize.of(e), v.t.of(t ? ' '.repeat(e) : '\t')];
        return n
          ? [
              c.f.define(
                function (e) {
                  return {
                    decorations: j(e),
                    update: function (e) {
                      (e.docChanged || e.viewportChanged) &&
                        (this.decorations = j(e.view));
                    },
                  };
                },
                {
                  decorations: function (e) {
                    return e.decorations;
                  },
                }
              ),
              M,
            ].concat(i)
          : i;
      }
      var I = n('cpVT'),
        L = n('ubVE'),
        T = n('0bU4');

      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }

      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                Object(I.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var R = 'var(--deprecated-color-background-1)',
        N = 'var(--deprecated-color-foreground-1)',
        B = function (e, t) {
          return {
            '&': {
              backgroundColor: R,
              color: N,
              '&.cm-focused': {
                outline: '0 none',
              },
              fontSize: ''.concat(e, 'px'),
            },
            '.cm-content': {
              fontFamily: 'var(--deprecated-font-family-monospace)',
              paddingBottom: ''.concat(t ? '400px' : '0px'),
            },
            '.cm-scroller': {
              overflow: 'auto',
              fontFamily: 'var(--deprecated-font-family-monospace)',
              fontSize: ''.concat(e, 'px'),
            },
            '.cm-gutters': {
              backgroundColor: R,
              color: 'var(--deprecated-color-foreground-3)',
              border: 'none',
              paddingRight: 'var(--deprecated-spacing-half)',
              minWidth: '50px',
              display: 'flex',
              justifyContent: 'flex-end',
            },
            '.cm-selectionBackground': {
              background: 'var(--deprecated-color-primary-transparent-2)',
            },
            '&.cm-focused .cm-selectionBackgroundFocused': {
              background: 'var(--deprecated-color-primary-transparent-1)',
            },
            '.cm-cursor': {
              borderLeftColor: 'var(--deprecated-color-primary-2)',
            },
            '.cm-cursorFocused': {
              borderLeftColor: 'var(--deprecated-color-primary-1)',
            },
            '.cm-activeLine': {
              backgroundColor: 'var(--deprecated-color-primary-transparent-3)',
            },
            '.cm-specialChar': {
              color: 'var(--deprecated-color-negative-1)',
            },
            '.cm-placeholder': {
              color: 'var(--deprecated-color-foreground-2)',
              display: 'inline-block',
            },
            '.cm-textfield': {
              border: '1px solid var(--deprecated-color-border)',
              backgroundColor: R,
            },
            '.cm-foldPlaceholder': {
              padding: '0 var(--deprecated-spacing-half)',
              borderRadius: 'var(--deprecated-border-radius-1)',
              backgroundColor: 'var(--deprecated-color-background-3)',
              border: 'none',
              color: 'var(--deprecated-color-foreground-2)',
            },
            '.cm-panels': {
              backgroundColor: 'var(--deprecated-color-background-3)',
              color: N,
            },
            '.cm-panels.top': {
              borderBottom: '2px solid var(--deprecated-color-border)',
            },
            '.cm-panels.bottom': {
              borderTop: '2px solid var(--deprecated-color-border)',
            },
            '.cm-searchMatch': {
              backgroundColor: 'var(--deprecated-color-primary-transparent-2)',
            },
            '.cm-searchMatch.selected': {
              backgroundColor: 'var(--deprecated-color-primary-transparent-1)',
            },
            '.cm-matchingBracket, .cm-nonmatchingBracket': {
              color: 'inherit',
              boxShadow: 'inset 0 0 0 1px ' + T.f.outlineDefault,
            },
            '.cm-tooltip': {
              backgroundColor: 'var(--deprecated-color-background-1)',
              color: 'var(--deprecated-color-foreground-1)',
              boxShadow: 'var(--deprecated-shadow-1)',
              border: '1px solid var(--deprecated-color-border)',
              borderRadius: 'var(--deprecated-border-radius-1)',
              padding: 'var(--deprecated-spacing-half)',
            },
            '.cm-tooltip.multiplayer-tooltip': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '0 none',
              padding: '0px',
            },
            '.cm-tooltip .multiplayer-cursor': {
              top: 'calc(100% - 1px)',
              left: '-1px',
              width: '2px',
              borderRadius: 'var(--deprecated-border-radius-1)',
              pointerEvents: 'none',
              position: 'absolute',
              color: 'transparent',
            },
            '.cm-tooltip .multiplayer-label': {
              boxShadow: 'var(--deprecated-shadow-1)',
              padding: '1px',
              position: 'relative',
              left: '-1px',
              borderRadius: 'var(--deprecated-border-radius-1)',
              borderBottomLeftRadius: '0px',
              animation: 'fadeOut 2s ease-in forwards',
            },
            '@keyframes fadeOut': {
              '0%': {
                opacity: 1,
              },
              '100%': {
                opacity: 0,
              },
            },
            '.cm-tooltip.autocomplete': {
              '& > ul > li[aria-selected]': {
                backgroundColor: 'var(--deprecated-color-primary-1)',
                color: 'var(--white)',
              },
            },
          };
        };

      function q(e) {
        var t = e.theme,
          n = e.fontSize,
          i = e.hasExtraPadding;
        return 'replitDark' === t
          ? (function (e) {
              return {
                base: c.d.theme(D({}, B(e.fontSize, e.hasExtraPadding)), {
                  dark: !0,
                }),
                highlight: L.a.define([
                  {
                    tag: L.d.link,
                    textDecoration: 'underline',
                  },
                  {
                    tag: L.d.heading,
                    fontWeight: 'bold',
                  },
                  {
                    tag: L.d.emphasis,
                    fontStyle: 'italic',
                  },
                  {
                    tag: L.d.strong,
                    fontWeight: 'bold',
                  },
                  {
                    tag: [L.d.keyword, L.d.operator],
                    color: '#569cd6',
                  },
                  {
                    tag: [
                      L.d.atom,
                      L.d.bool,
                      L.d.url,
                      L.d.contentSeparator,
                      L.d.labelName,
                    ],
                    color: '#70b6f0',
                  },
                  {
                    tag: [L.d.literal, L.d.inserted, L.d.number],
                    color: '#b5cea8',
                  },
                  {
                    tag: [L.d.string, L.d.deleted],
                    color: '#ce9178',
                  },
                  {
                    tag: [L.d.regexp, L.d.escape, L.d.special(L.d.string)],
                    color: '#d16969',
                  },
                  {
                    tag: L.d.definition(L.d.variableName),
                    color: 'var(--deprecated-color-foreground-1)',
                  },
                  {
                    tag: L.d.local(L.d.variableName),
                    color: '#74b0df',
                  },
                  {
                    tag: [L.d.typeName, L.d.namespace],
                    color: '#dcdcaa',
                  },
                  {
                    tag: [
                      L.d.className,
                      L.d.variableName,
                      L.d.special(L.d.variableName),
                      L.d.macroName,
                    ],
                    color: '#dcdcaa',
                  },
                  {
                    tag: L.d.definition(L.d.propertyName),
                    color: '#9cdcfe',
                  },
                  {
                    tag: L.d.comment,
                    color: 'var(--deprecated-color-foreground-2)',
                  },
                  {
                    tag: L.d.meta,
                    color: '#74b0df',
                  },
                  {
                    tag: L.d.invalid,
                    color: '#ff69b4',
                  },
                ]),
              };
            })({
              fontSize: n,
              hasExtraPadding: i,
            })
          : (function (e) {
              return {
                base: c.d.theme(D({}, B(e.fontSize, e.hasExtraPadding)), {
                  dark: !1,
                }),
                highlight: L.a.define([
                  {
                    tag: L.d.link,
                    textDecoration: 'underline',
                  },
                  {
                    tag: L.d.heading,
                    fontWeight: 'bold',
                  },
                  {
                    tag: L.d.emphasis,
                    fontStyle: 'italic',
                  },
                  {
                    tag: L.d.strong,
                    fontWeight: 'bold',
                  },
                  {
                    tag: [L.d.keyword, L.d.operator],
                    color: '#0072BD',
                  },
                  {
                    tag: [
                      L.d.atom,
                      L.d.bool,
                      L.d.url,
                      L.d.contentSeparator,
                      L.d.labelName,
                    ],
                    color: '#0072BD',
                  },
                  {
                    tag: [L.d.literal, L.d.inserted, L.d.number],
                    color: '#09885a',
                  },
                  {
                    tag: [L.d.string, L.d.deleted],
                    color: '#a31515',
                  },
                  {
                    tag: [L.d.regexp, L.d.escape, L.d.special(L.d.string)],
                    color: '#227e80',
                  },
                  {
                    tag: L.d.definition(L.d.variableName),
                    color: 'var(--deprecated-color-foreground-1)',
                  },
                  {
                    tag: L.d.local(L.d.variableName),
                    color: '#001188',
                  },
                  {
                    tag: [L.d.typeName, L.d.namespace],
                    color: '#7b2cb3',
                  },
                  {
                    tag: [
                      L.d.className,
                      L.d.variableName,
                      L.d.special(L.d.variableName),
                      L.d.macroName,
                    ],
                    color: '#7b2cb3',
                  },
                  {
                    tag: L.d.definition(L.d.propertyName),
                    color: '#984e9c',
                  },
                  {
                    tag: L.d.comment,
                    color: '#aaaaaa',
                  },
                  {
                    tag: L.d.meta,
                    color: '#00808',
                  },
                  {
                    tag: L.d.invalid,
                    color: '#ff69b4',
                  },
                ]),
              };
            })({
              fontSize: n,
              hasExtraPadding: i,
            });
      }

      function z(e) {
        return n
          .e(272)
          .then(n.bind(null, 'GSh6'))
          .then((t) => new v.e(t.StreamLanguage.define(e)));
      }

      function F(e) {
        return Promise.all([n.e(8), n.e(187)])
          .then(n.bind(null, 'kd5f'))
          .then((t) =>
            t.sql({
              dialect: t[e],
            })
          );
      }
      const V = [
        v.d.of({
          name: 'C',
          extensions: ['c', 'h', 'ino'],
          load: () =>
            Promise.all([n.e(8), n.e(64)])
              .then(n.bind(null, 'Svhn'))
              .then((e) => e.cpp()),
        }),
        v.d.of({
          name: 'C++',
          alias: ['cpp'],
          extensions: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
          load: () =>
            Promise.all([n.e(8), n.e(64)])
              .then(n.bind(null, 'Svhn'))
              .then((e) => e.cpp()),
        }),
        v.d.of({
          name: 'CQL',
          alias: ['cassandra'],
          extensions: ['cql'],
          load: () => F('Cassandra'),
        }),
        v.d.of({
          name: 'CSS',
          extensions: ['css'],
          load: () =>
            Promise.all([n.e(8), n.e(19)])
              .then(n.bind(null, 'Bxk6'))
              .then((e) => e.css()),
        }),
        v.d.of({
          name: 'HTML',
          alias: ['xhtml'],
          extensions: ['html', 'htm', 'handlebars', 'hbs'],
          load: () =>
            Promise.all([n.e(8), n.e(19), n.e(18)])
              .then(n.bind(null, 'PQU8'))
              .then((e) => e.html()),
        }),
        v.d.of({
          name: 'Java',
          extensions: ['java'],
          load: () =>
            Promise.all([n.e(8), n.e(183)])
              .then(n.bind(null, '7GUI'))
              .then((e) => e.java()),
        }),
        v.d.of({
          name: 'JavaScript',
          alias: ['ecmascript', 'js', 'node'],
          extensions: ['js', 'mjs', 'cjs'],
          load: () =>
            Promise.all([n.e(8), n.e(19)])
              .then(n.bind(null, 'tzg4'))
              .then((e) => e.javascript()),
        }),
        v.d.of({
          name: 'JSON',
          alias: ['json5'],
          extensions: ['json', 'map'],
          load: () =>
            Promise.all([n.e(8), n.e(184)])
              .then(n.bind(null, 'Uo6K'))
              .then((e) => e.json()),
        }),
        v.d.of({
          name: 'JSX',
          extensions: ['jsx'],
          load: () =>
            Promise.all([n.e(8), n.e(19)])
              .then(n.bind(null, 'tzg4'))
              .then((e) =>
                e.javascript({
                  jsx: !0,
                })
              ),
        }),
        v.d.of({
          name: 'MariaDB SQL',
          load: () => F('MariaSQL'),
        }),
        v.d.of({
          name: 'Markdown',
          extensions: ['md', 'markdown', 'mkd'],
          load: () =>
            Promise.all([n.e(8), n.e(19), n.e(18), n.e(46)])
              .then(n.bind(null, 'S0tx'))
              .then((e) => e.markdown()),
        }),
        v.d.of({
          name: 'MS SQL',
          load: () => F('MSSQL'),
        }),
        v.d.of({
          name: 'MySQL',
          load: () => F('MySQL'),
        }),
        v.d.of({
          name: 'PLSQL',
          extensions: ['pls'],
          load: () => F('PLSQL'),
        }),
        v.d.of({
          name: 'PostgreSQL',
          load: () => F('PostgreSQL'),
        }),
        v.d.of({
          name: 'Python',
          extensions: ['BUILD', 'bzl', 'py', 'pyw'],
          filename: /^(BUCK|BUILD)$/,
          load: () =>
            Promise.all([n.e(8), n.e(185)])
              .then(n.bind(null, 'pAYy'))
              .then((e) => e.python()),
        }),
        v.d.of({
          name: 'Rust',
          extensions: ['rs'],
          load: () =>
            Promise.all([n.e(8), n.e(186)])
              .then(n.bind(null, 'ALsg'))
              .then((e) => e.rust()),
        }),
        v.d.of({
          name: 'SQL',
          extensions: ['sql'],
          load: () => F('StandardSQL'),
        }),
        v.d.of({
          name: 'SQLite',
          load: () => F('SQLite'),
        }),
        v.d.of({
          name: 'TSX',
          extensions: ['tsx'],
          load: () =>
            Promise.all([n.e(8), n.e(19)])
              .then(n.bind(null, 'tzg4'))
              .then((e) =>
                e.javascript({
                  jsx: !0,
                  typescript: !0,
                })
              ),
        }),
        v.d.of({
          name: 'TypeScript',
          alias: ['ts'],
          extensions: ['ts'],
          load: () =>
            Promise.all([n.e(8), n.e(19)])
              .then(n.bind(null, 'tzg4'))
              .then((e) =>
                e.javascript({
                  typescript: !0,
                })
              ),
        }),
        v.d.of({
          name: 'XML',
          alias: ['rss', 'wsdl', 'xsd'],
          extensions: ['xml', 'xsl', 'xsd', 'svg'],
          load: () =>
            Promise.all([n.e(8), n.e(188)])
              .then(n.bind(null, 'Kccl'))
              .then((e) => e.xml()),
        }),
        v.d.of({
          name: 'APL',
          extensions: ['dyalog', 'apl'],
          load: () =>
            n
              .e(189)
              .then(n.bind(null, 'g9VL'))
              .then((e) => z(e.apl)),
        }),
        v.d.of({
          name: 'PGP',
          alias: ['asciiarmor'],
          extensions: ['asc', 'pgp', 'sig'],
          load: () =>
            n
              .e(190)
              .then(n.bind(null, '96P/'))
              .then((e) => z(e.asciiArmor)),
        }),
        v.d.of({
          name: 'ASN.1',
          extensions: ['asn', 'asn1'],
          load: () =>
            n
              .e(191)
              .then(n.bind(null, 'wBE/'))
              .then((e) => z(e.asn1({}))),
        }),
        v.d.of({
          name: 'Asterisk',
          filename: /^extensions\.conf$/i,
          load: () =>
            n
              .e(192)
              .then(n.bind(null, 'qy5e'))
              .then((e) => z(e.asterisk)),
        }),
        v.d.of({
          name: 'Brainfuck',
          extensions: ['b', 'bf'],
          load: () =>
            n
              .e(193)
              .then(n.bind(null, 'M3ys'))
              .then((e) => z(e.brainfuck)),
        }),
        v.d.of({
          name: 'Cobol',
          extensions: ['cob', 'cpy'],
          load: () =>
            n
              .e(195)
              .then(n.bind(null, 'jV/Y'))
              .then((e) => z(e.cobol)),
        }),
        v.d.of({
          name: 'C#',
          alias: ['csharp', 'cs'],
          extensions: ['cs'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.csharp)),
        }),
        v.d.of({
          name: 'Clojure',
          extensions: ['clj', 'cljc', 'cljx'],
          load: () =>
            n
              .e(47)
              .then(n.bind(null, 'cSPx'))
              .then((e) => z(e.clojure)),
        }),
        v.d.of({
          name: 'ClojureScript',
          extensions: ['cljs'],
          load: () =>
            n
              .e(47)
              .then(n.bind(null, 'cSPx'))
              .then((e) => z(e.clojure)),
        }),
        v.d.of({
          name: 'Closure Stylesheets (GSS)',
          extensions: ['gss'],
          load: () =>
            n
              .e(48)
              .then(n.bind(null, 'OIku'))
              .then((e) => z(e.gss)),
        }),
        v.d.of({
          name: 'CMake',
          extensions: ['cmake', 'cmake.in'],
          filename: /^CMakeLists\.txt$/,
          load: () =>
            n
              .e(194)
              .then(n.bind(null, 'RHrG'))
              .then((e) => z(e.cmake)),
        }),
        v.d.of({
          name: 'CoffeeScript',
          alias: ['coffee', 'coffee-script'],
          extensions: ['coffee'],
          load: () =>
            n
              .e(196)
              .then(n.bind(null, 'mpcK'))
              .then((e) => z(e.coffeeScript)),
        }),
        v.d.of({
          name: 'Common Lisp',
          alias: ['lisp'],
          extensions: ['cl', 'lisp', 'el'],
          load: () =>
            n
              .e(197)
              .then(n.bind(null, 'IIfy'))
              .then((e) => z(e.commonLisp)),
        }),
        v.d.of({
          name: 'Cypher',
          extensions: ['cyp', 'cypher'],
          load: () =>
            n
              .e(199)
              .then(n.bind(null, 'Z15M'))
              .then((e) => z(e.cypher)),
        }),
        v.d.of({
          name: 'Cython',
          extensions: ['pyx', 'pxd', 'pxi'],
          load: () =>
            n
              .e(240)
              .then(n.bind(null, '8PrD'))
              .then((e) => z(e.cython)),
        }),
        v.d.of({
          name: 'Crystal',
          extensions: ['cr'],
          load: () =>
            n
              .e(198)
              .then(n.bind(null, 'Yidh'))
              .then((e) => z(e.crystal)),
        }),
        v.d.of({
          name: 'D',
          extensions: ['d'],
          load: () =>
            n
              .e(200)
              .then(n.bind(null, 'nwm4'))
              .then((e) => z(e.d)),
        }),
        v.d.of({
          name: 'Dart',
          extensions: ['dart'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.dart)),
        }),
        v.d.of({
          name: 'diff',
          extensions: ['diff', 'patch'],
          load: () =>
            n
              .e(201)
              .then(n.bind(null, 'hTkR'))
              .then((e) => z(e.diff)),
        }),
        v.d.of({
          name: 'Dockerfile',
          filename: /^Dockerfile$/,
          load: () =>
            n
              .e(177)
              .then(n.bind(null, 'Wzah'))
              .then((e) => z(e.dockerFile)),
        }),
        v.d.of({
          name: 'DTD',
          extensions: ['dtd'],
          load: () =>
            n
              .e(202)
              .then(n.bind(null, 'RfdW'))
              .then((e) => z(e.dtd)),
        }),
        v.d.of({
          name: 'Dylan',
          extensions: ['dylan', 'dyl', 'intr'],
          load: () =>
            n
              .e(203)
              .then(n.bind(null, '67s+'))
              .then((e) => z(e.dylan)),
        }),
        v.d.of({
          name: 'EBNF',
          load: () =>
            n
              .e(204)
              .then(n.bind(null, 'vIuv'))
              .then((e) => z(e.ebnf)),
        }),
        v.d.of({
          name: 'ECL',
          extensions: ['ecl'],
          load: () =>
            n
              .e(205)
              .then(n.bind(null, 'EvdV'))
              .then((e) => z(e.ecl)),
        }),
        v.d.of({
          name: 'edn',
          extensions: ['edn'],
          load: () =>
            n
              .e(47)
              .then(n.bind(null, 'cSPx'))
              .then((e) => z(e.clojure)),
        }),
        v.d.of({
          name: 'Eiffel',
          extensions: ['e'],
          load: () =>
            n
              .e(206)
              .then(n.bind(null, '+CMO'))
              .then((e) => z(e.eiffel)),
        }),
        v.d.of({
          name: 'Elm',
          extensions: ['elm'],
          load: () =>
            n
              .e(207)
              .then(n.bind(null, 'Eu0O'))
              .then((e) => z(e.elm)),
        }),
        v.d.of({
          name: 'Erlang',
          extensions: ['erl'],
          load: () =>
            n
              .e(208)
              .then(n.bind(null, '+L+n'))
              .then((e) => z(e.erlang)),
        }),
        v.d.of({
          name: 'Esper',
          load: () =>
            n
              .e(51)
              .then(n.bind(null, 'oOL1'))
              .then((e) => z(e.esper)),
        }),
        v.d.of({
          name: 'Factor',
          extensions: ['factor'],
          load: () =>
            n
              .e(178)
              .then(n.bind(null, 'lhRg'))
              .then((e) => z(e.factor)),
        }),
        v.d.of({
          name: 'FCL',
          load: () =>
            n
              .e(209)
              .then(n.bind(null, 'au/F'))
              .then((e) => z(e.fcl)),
        }),
        v.d.of({
          name: 'Forth',
          extensions: ['forth', 'fth', '4th'],
          load: () =>
            n
              .e(210)
              .then(n.bind(null, '/Lqz'))
              .then((e) => z(e.forth)),
        }),
        v.d.of({
          name: 'Fortran',
          extensions: ['f', 'for', 'f77', 'f90', 'f95'],
          load: () =>
            n
              .e(211)
              .then(n.bind(null, 'YzgE'))
              .then((e) => z(e.fortran)),
        }),
        v.d.of({
          name: 'F#',
          alias: ['fsharp'],
          extensions: ['fs'],
          load: () =>
            n
              .e(49)
              .then(n.bind(null, 'oLAf'))
              .then((e) => z(e.fSharp)),
        }),
        v.d.of({
          name: 'Gas',
          extensions: ['s'],
          load: () =>
            n
              .e(212)
              .then(n.bind(null, 'ZPlC'))
              .then((e) => z(e.gas)),
        }),
        v.d.of({
          name: 'Gherkin',
          extensions: ['feature'],
          load: () =>
            n
              .e(213)
              .then(n.bind(null, 'FozL'))
              .then((e) => z(e.gherkin)),
        }),
        v.d.of({
          name: 'Go',
          extensions: ['go'],
          load: () =>
            n
              .e(214)
              .then(n.bind(null, 'griq'))
              .then((e) => z(e.go)),
        }),
        v.d.of({
          name: 'Groovy',
          extensions: ['groovy', 'gradle'],
          filename: /^Jenkinsfile$/,
          load: () =>
            n
              .e(215)
              .then(n.bind(null, 'Np2s'))
              .then((e) => z(e.groovy)),
        }),
        v.d.of({
          name: 'Haskell',
          extensions: ['hs'],
          load: () =>
            n
              .e(216)
              .then(n.bind(null, 'nxWY'))
              .then((e) => z(e.haskell)),
        }),
        v.d.of({
          name: 'Haxe',
          extensions: ['hx'],
          load: () =>
            n
              .e(65)
              .then(n.bind(null, 'pUO9'))
              .then((e) => z(e.haxe)),
        }),
        v.d.of({
          name: 'HXML',
          extensions: ['hxml'],
          load: () =>
            n
              .e(65)
              .then(n.bind(null, 'pUO9'))
              .then((e) => z(e.hxml)),
        }),
        v.d.of({
          name: 'HTTP',
          load: () =>
            n
              .e(217)
              .then(n.bind(null, '+Tez'))
              .then((e) => z(e.http)),
        }),
        v.d.of({
          name: 'IDL',
          extensions: ['pro'],
          load: () =>
            n
              .e(218)
              .then(n.bind(null, 'MXbv'))
              .then((e) => z(e.idl)),
        }),
        v.d.of({
          name: 'JSON-LD',
          alias: ['jsonld'],
          extensions: ['jsonld'],
          load: () =>
            n
              .e(219)
              .then(n.bind(null, 'tsaj'))
              .then((e) => z(e.jsonld)),
        }),
        v.d.of({
          name: 'Jinja2',
          extensions: ['j2', 'jinja', 'jinja2'],
          load: () =>
            n
              .e(220)
              .then(n.bind(null, 'cCsL'))
              .then((e) => z(e.jinja2)),
        }),
        v.d.of({
          name: 'Julia',
          extensions: ['jl'],
          load: () =>
            n
              .e(221)
              .then(n.bind(null, 'I2Bw'))
              .then((e) => z(e.julia)),
        }),
        v.d.of({
          name: 'Kotlin',
          extensions: ['kt'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.kotlin)),
        }),
        v.d.of({
          name: 'LESS',
          extensions: ['less'],
          load: () =>
            n
              .e(48)
              .then(n.bind(null, 'OIku'))
              .then((e) => z(e.less)),
        }),
        v.d.of({
          name: 'LiveScript',
          alias: ['ls'],
          extensions: ['ls'],
          load: () =>
            n
              .e(222)
              .then(n.bind(null, 'RYTb'))
              .then((e) => z(e.liveScript)),
        }),
        v.d.of({
          name: 'Lua',
          extensions: ['lua'],
          load: () =>
            n
              .e(223)
              .then(n.bind(null, 'uvw6'))
              .then((e) => z(e.lua)),
        }),
        v.d.of({
          name: 'mIRC',
          load: () =>
            n
              .e(226)
              .then(n.bind(null, 'F4Vt'))
              .then((e) => z(e.mirc)),
        }),
        v.d.of({
          name: 'Mathematica',
          extensions: ['m', 'nb', 'wl', 'wls'],
          load: () =>
            n
              .e(224)
              .then(n.bind(null, 'PzU8'))
              .then((e) => z(e.mathematica)),
        }),
        v.d.of({
          name: 'Modelica',
          extensions: ['mo'],
          load: () =>
            n
              .e(227)
              .then(n.bind(null, '3/kI'))
              .then((e) => z(e.modelica)),
        }),
        v.d.of({
          name: 'MUMPS',
          extensions: ['mps'],
          load: () =>
            n
              .e(228)
              .then(n.bind(null, 'ULPp'))
              .then((e) => z(e.mumps)),
        }),
        v.d.of({
          name: 'mbox',
          extensions: ['mbox'],
          load: () =>
            n
              .e(225)
              .then(n.bind(null, 'Q18N'))
              .then((e) => z(e.mbox)),
        }),
        v.d.of({
          name: 'Nginx',
          filename: /nginx.*\.conf$/i,
          load: () =>
            n
              .e(229)
              .then(n.bind(null, 'ICq2'))
              .then((e) => z(e.nginx)),
        }),
        v.d.of({
          name: 'NSIS',
          extensions: ['nsh', 'nsi'],
          load: () =>
            n
              .e(179)
              .then(n.bind(null, '8u88'))
              .then((e) => z(e.nsis)),
        }),
        v.d.of({
          name: 'NTriples',
          extensions: ['nt', 'nq'],
          load: () =>
            n
              .e(230)
              .then(n.bind(null, 'lBKo'))
              .then((e) => z(e.ntriples)),
        }),
        v.d.of({
          name: 'Objective-C',
          alias: ['objective-c', 'objc'],
          extensions: ['m'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.objectiveC)),
        }),
        v.d.of({
          name: 'Objective-C++',
          alias: ['objective-c++', 'objc++'],
          extensions: ['mm'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.objectiveCpp)),
        }),
        v.d.of({
          name: 'OCaml',
          extensions: ['ml', 'mli', 'mll', 'mly'],
          load: () =>
            n
              .e(49)
              .then(n.bind(null, 'oLAf'))
              .then((e) => z(e.oCaml)),
        }),
        v.d.of({
          name: 'Octave',
          extensions: ['m'],
          load: () =>
            n
              .e(231)
              .then(n.bind(null, 'yWou'))
              .then((e) => z(e.octave)),
        }),
        v.d.of({
          name: 'Oz',
          extensions: ['oz'],
          load: () =>
            n
              .e(232)
              .then(n.bind(null, 'nFh2'))
              .then((e) => z(e.oz)),
        }),
        v.d.of({
          name: 'Pascal',
          extensions: ['p', 'pas'],
          load: () =>
            n
              .e(233)
              .then(n.bind(null, 'qxHX'))
              .then((e) => z(e.pascal)),
        }),
        v.d.of({
          name: 'Perl',
          extensions: ['pl', 'pm'],
          load: () =>
            n
              .e(234)
              .then(n.bind(null, 'uZCc'))
              .then((e) => z(e.perl)),
        }),
        v.d.of({
          name: 'Pig',
          extensions: ['pig'],
          load: () =>
            n
              .e(235)
              .then(n.bind(null, 'Azj+'))
              .then((e) => z(e.pig)),
        }),
        v.d.of({
          name: 'PowerShell',
          extensions: ['ps1', 'psd1', 'psm1'],
          load: () =>
            n
              .e(236)
              .then(n.bind(null, 'hwb1'))
              .then((e) => z(e.powerShell)),
        }),
        v.d.of({
          name: 'Properties files',
          alias: ['ini', 'properties'],
          extensions: ['properties', 'ini', 'in'],
          load: () =>
            n
              .e(237)
              .then(n.bind(null, 'IAoW'))
              .then((e) => z(e.properties)),
        }),
        v.d.of({
          name: 'ProtoBuf',
          extensions: ['proto'],
          load: () =>
            n
              .e(238)
              .then(n.bind(null, 'IzQd'))
              .then((e) => z(e.protobuf)),
        }),
        v.d.of({
          name: 'Puppet',
          extensions: ['pp'],
          load: () =>
            n
              .e(239)
              .then(n.bind(null, '0DmX'))
              .then((e) => z(e.puppet)),
        }),
        v.d.of({
          name: 'Q',
          extensions: ['q'],
          load: () =>
            n
              .e(241)
              .then(n.bind(null, '65TJ'))
              .then((e) => z(e.q)),
        }),
        v.d.of({
          name: 'R',
          alias: ['rscript'],
          extensions: ['r', 'R'],
          load: () =>
            n
              .e(242)
              .then(n.bind(null, 'j/lf'))
              .then((e) => z(e.r)),
        }),
        v.d.of({
          name: 'RPM Changes',
          load: () =>
            n
              .e(66)
              .then(n.bind(null, '8U6X'))
              .then((e) => z(e.rpmChanges)),
        }),
        v.d.of({
          name: 'RPM Spec',
          extensions: ['spec'],
          load: () =>
            n
              .e(66)
              .then(n.bind(null, '8U6X'))
              .then((e) => z(e.rpmSpec)),
        }),
        v.d.of({
          name: 'Ruby',
          alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
          extensions: ['rb'],
          load: () =>
            n
              .e(243)
              .then(n.bind(null, 'DkjX'))
              .then((e) => z(e.ruby)),
        }),
        v.d.of({
          name: 'SAS',
          extensions: ['sas'],
          load: () =>
            n
              .e(244)
              .then(n.bind(null, 'kGTw'))
              .then((e) => z(e.sas)),
        }),
        v.d.of({
          name: 'Scala',
          extensions: ['scala'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.scala)),
        }),
        v.d.of({
          name: 'Scheme',
          extensions: ['scm', 'ss'],
          load: () =>
            n
              .e(245)
              .then(n.bind(null, 't0Vk'))
              .then((e) => z(e.scheme)),
        }),
        v.d.of({
          name: 'SCSS',
          extensions: ['scss'],
          load: () =>
            n
              .e(48)
              .then(n.bind(null, 'OIku'))
              .then((e) => z(e.sCSS)),
        }),
        v.d.of({
          name: 'Shell',
          alias: ['bash', 'sh', 'zsh'],
          extensions: ['sh', 'ksh', 'bash'],
          filename: /^PKGBUILD$/,
          load: () =>
            n
              .e(246)
              .then(n.bind(null, 'rllI'))
              .then((e) => z(e.shell)),
        }),
        v.d.of({
          name: 'Sieve',
          extensions: ['siv', 'sieve'],
          load: () =>
            n
              .e(247)
              .then(n.bind(null, 'goX1'))
              .then((e) => z(e.sieve)),
        }),
        v.d.of({
          name: 'Smalltalk',
          extensions: ['st'],
          load: () =>
            n
              .e(248)
              .then(n.bind(null, '/iFA'))
              .then((e) => z(e.smalltalk)),
        }),
        v.d.of({
          name: 'Solr',
          load: () =>
            n
              .e(249)
              .then(n.bind(null, 'A4kd'))
              .then((e) => z(e.solr)),
        }),
        v.d.of({
          name: 'SML',
          extensions: ['sml', 'sig', 'fun', 'smackspec'],
          load: () =>
            n
              .e(49)
              .then(n.bind(null, 'oLAf'))
              .then((e) => z(e.sml)),
        }),
        v.d.of({
          name: 'SPARQL',
          alias: ['sparul'],
          extensions: ['rq', 'sparql'],
          load: () =>
            n
              .e(250)
              .then(n.bind(null, 'tRWl'))
              .then((e) => z(e.sparql)),
        }),
        v.d.of({
          name: 'Spreadsheet',
          alias: ['excel', 'formula'],
          load: () =>
            n
              .e(251)
              .then(n.bind(null, 'NwTP'))
              .then((e) => z(e.spreadsheet)),
        }),
        v.d.of({
          name: 'SQL',
          extensions: ['sql'],
          load: () =>
            n
              .e(51)
              .then(n.bind(null, 'oOL1'))
              .then((e) => z(e.standardSQL)),
        }),
        v.d.of({
          name: 'SQLite',
          load: () =>
            n
              .e(51)
              .then(n.bind(null, 'oOL1'))
              .then((e) => z(e.sqlite)),
        }),
        v.d.of({
          name: 'Squirrel',
          extensions: ['nut'],
          load: () =>
            n
              .e(30)
              .then(n.bind(null, 'SR4r'))
              .then((e) => z(e.squirrel)),
        }),
        v.d.of({
          name: 'Stylus',
          extensions: ['styl'],
          load: () =>
            n
              .e(252)
              .then(n.bind(null, 'Ipt9'))
              .then((e) => z(e.stylus)),
        }),
        v.d.of({
          name: 'Swift',
          extensions: ['swift'],
          load: () =>
            n
              .e(253)
              .then(n.bind(null, 'csCD'))
              .then((e) => z(e.swift)),
        }),
        v.d.of({
          name: 'sTeX',
          load: () =>
            n
              .e(67)
              .then(n.bind(null, '5DRb'))
              .then((e) => z(e.stex)),
        }),
        v.d.of({
          name: 'LaTeX',
          alias: ['tex'],
          extensions: ['text', 'ltx', 'tex'],
          load: () =>
            n
              .e(67)
              .then(n.bind(null, '5DRb'))
              .then((e) => z(e.stex)),
        }),
        v.d.of({
          name: 'SystemVerilog',
          extensions: ['v', 'sv', 'svh'],
          load: () =>
            n
              .e(68)
              .then(n.bind(null, '/UVJ'))
              .then((e) => z(e.verilog)),
        }),
        v.d.of({
          name: 'Tcl',
          extensions: ['tcl'],
          load: () =>
            n
              .e(254)
              .then(n.bind(null, 'lEgO'))
              .then((e) => z(e.tcl)),
        }),
        v.d.of({
          name: 'Textile',
          extensions: ['textile'],
          load: () =>
            n
              .e(255)
              .then(n.bind(null, '3whL'))
              .then((e) => z(e.textile)),
        }),
        v.d.of({
          name: 'TiddlyWiki',
          load: () =>
            n
              .e(256)
              .then(n.bind(null, 'SNaM'))
              .then((e) => z(e.tiddlyWiki)),
        }),
        v.d.of({
          name: 'Tiki wiki',
          load: () =>
            n
              .e(257)
              .then(n.bind(null, 'UpF4'))
              .then((e) => z(e.tiki)),
        }),
        v.d.of({
          name: 'TOML',
          extensions: ['toml'],
          load: () =>
            n
              .e(258)
              .then(n.bind(null, 'w4+J'))
              .then((e) => z(e.toml)),
        }),
        v.d.of({
          name: 'troff',
          extensions: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          load: () =>
            n
              .e(259)
              .then(n.bind(null, 'jIa3'))
              .then((e) => z(e.troff)),
        }),
        v.d.of({
          name: 'TTCN',
          extensions: ['ttcn', 'ttcn3', 'ttcnpp'],
          load: () =>
            n
              .e(261)
              .then(n.bind(null, 'OAZt'))
              .then((e) => z(e.ttcn)),
        }),
        v.d.of({
          name: 'TTCN_CFG',
          extensions: ['cfg'],
          load: () =>
            n
              .e(260)
              .then(n.bind(null, 'b5NJ'))
              .then((e) => z(e.ttcnCfg)),
        }),
        v.d.of({
          name: 'Turtle',
          extensions: ['ttl'],
          load: () =>
            n
              .e(262)
              .then(n.bind(null, 'MeIH'))
              .then((e) => z(e.turtle)),
        }),
        v.d.of({
          name: 'Web IDL',
          extensions: ['webidl'],
          load: () =>
            n
              .e(267)
              .then(n.bind(null, '7CpF'))
              .then((e) => z(e.webIDL)),
        }),
        v.d.of({
          name: 'VB.NET',
          extensions: ['vb'],
          load: () =>
            n
              .e(263)
              .then(n.bind(null, 'iFd0'))
              .then((e) => z(e.vb)),
        }),
        v.d.of({
          name: 'VBScript',
          extensions: ['vbs'],
          load: () =>
            n
              .e(264)
              .then(n.bind(null, 'dzOX'))
              .then((e) => z(e.vbScript)),
        }),
        v.d.of({
          name: 'Velocity',
          extensions: ['vtl'],
          load: () =>
            n
              .e(265)
              .then(n.bind(null, 'KcTb'))
              .then((e) => z(e.velocity)),
        }),
        v.d.of({
          name: 'Verilog',
          extensions: ['v'],
          load: () =>
            n
              .e(68)
              .then(n.bind(null, '/UVJ'))
              .then((e) => z(e.verilog)),
        }),
        v.d.of({
          name: 'VHDL',
          extensions: ['vhd', 'vhdl'],
          load: () =>
            n
              .e(266)
              .then(n.bind(null, 'Ptms'))
              .then((e) => z(e.vhdl)),
        }),
        v.d.of({
          name: 'XQuery',
          extensions: ['xy', 'xquery'],
          load: () =>
            n
              .e(268)
              .then(n.bind(null, 'm+MU'))
              .then((e) => z(e.xQuery)),
        }),
        v.d.of({
          name: 'Yacas',
          extensions: ['ys'],
          load: () =>
            n
              .e(269)
              .then(n.bind(null, 'K/14'))
              .then((e) => z(e.yacas)),
        }),
        v.d.of({
          name: 'YAML',
          alias: ['yml'],
          extensions: ['yaml', 'yml'],
          load: () =>
            n
              .e(270)
              .then(n.bind(null, 'm9fM'))
              .then((e) => z(e.yaml)),
        }),
        v.d.of({
          name: 'Z80',
          extensions: ['z80'],
          load: () =>
            n
              .e(271)
              .then(n.bind(null, '5HJn'))
              .then((e) => z(e.z80)),
        }),
        v.d.of({
          name: 'mscgen',
          extensions: ['mscgen', 'mscin', 'msc'],
          load: () =>
            n
              .e(50)
              .then(n.bind(null, 'leU/'))
              .then((e) => z(e.mscgen)),
        }),
        v.d.of({
          name: 'xu',
          extensions: ['xu'],
          load: () =>
            n
              .e(50)
              .then(n.bind(null, 'leU/'))
              .then((e) => z(e.xu)),
        }),
        v.d.of({
          name: 'msgenny',
          extensions: ['msgenny'],
          load: () =>
            n
              .e(50)
              .then(n.bind(null, 'leU/'))
              .then((e) => z(e.msgenny)),
        }),
        v.d.of({
          name: 'WebAssembly',
          extensions: ['wat', 'wast'],
          load: () =>
            n
              .e(180)
              .then(n.bind(null, 'fTjj'))
              .then((e) => z(e.wast)),
        }),
      ];
      var W = n('h5Ab'),
        _ = n('Wzyh'),
        U = n('ljhz'),
        H = n('WYGy'),
        J = n('uZp5');
      const $ = {
          brackets: ['(', '[', '{', "'", '"'],
          before: ')]}\'":;>',
        },
        G = u.k.define({
          map(e, t) {
            let n = t.mapPos(e, -1, u.i.TrackAfter);
            return null == n ? void 0 : n;
          },
        }),
        Q = u.k.define({
          map: (e, t) => t.mapPos(e),
        }),
        K = new (class extends b.c {})();
      (K.startSide = 1), (K.endSide = -1);
      const Y = u.l.define({
        create: () => b.a.empty,
        update(e, t) {
          if (t.selection) {
            let n = t.state.doc.lineAt(t.selection.main.head).from,
              i = t.startState.doc.lineAt(
                t.startState.selection.main.head
              ).from;
            n != t.changes.mapPos(i, -1) && (e = b.a.empty);
          }
          e = e.map(t.changes);
          for (let n of t.effects)
            n.is(G)
              ? (e = e.update({
                  add: [K.range(n.value, n.value + 1)],
                }))
              : n.is(Q) &&
                (e = e.update({
                  filter: (e) => e != n.value,
                }));
          return e;
        },
      });

      function X() {
        return [c.d.inputHandler.of(ne), Y];
      }
      const Z = '()[]{}<>';

      function ee(e) {
        for (let t = 0; t < Z.length; t += 2)
          if (Z.charCodeAt(t) == e) return Z.charAt(t + 1);
        return Object(J.g)(e < 128 ? e : e + 1);
      }

      function te(e, t) {
        return e.languageDataAt('closeBrackets', t)[0] || $;
      }

      function ne(e, t, n, i) {
        if (e.composing) return !1;
        let r = e.state.selection.main;
        if (
          i.length > 2 ||
          (2 == i.length && 1 == Object(J.c)(Object(J.b)(i, 0))) ||
          t != r.from ||
          n != r.to
        )
          return !1;
        let o = (function (e, t) {
          let n = te(e, e.selection.main.head),
            i = n.brackets || $.brackets;
          for (let r of i) {
            let o = ee(Object(J.b)(r, 0));
            if (t == r)
              return o == r
                ? le(e, r, i.indexOf(r + r + r) > -1)
                : se(e, r, o, n.before || $.before);
            if (t == o && re(e, e.selection.main.from)) return ae(e, r, o);
          }
          return null;
        })(e.state, i);
        return !!o && (e.dispatch(o), !0);
      }
      const ie = [
        {
          key: 'Backspace',
          run: ({ state: e, dispatch: t }) => {
            let n = te(e, e.selection.main.head).brackets || $.brackets,
              i = null,
              r = e.changeByRange((t) => {
                if (t.empty) {
                  let i = (function (e, t) {
                    let n = e.sliceString(t - 2, t);
                    return Object(J.c)(Object(J.b)(n, 0)) == n.length
                      ? n
                      : n.slice(1);
                  })(e.doc, t.head);
                  for (let r of n)
                    if (r == i && oe(e.doc, t.head) == ee(Object(J.b)(r, 0)))
                      return {
                        changes: {
                          from: t.head - r.length,
                          to: t.head + r.length,
                        },
                        range: u.f.cursor(t.head - r.length),
                        userEvent: 'delete.backward',
                      };
                }
                return {
                  range: (i = t),
                };
              });
            return (
              i ||
                t(
                  e.update(r, {
                    scrollIntoView: !0,
                  })
                ),
              !i
            );
          },
        },
      ];

      function re(e, t) {
        let n = !1;
        return (
          e.field(Y).between(0, e.doc.length, (e) => {
            e == t && (n = !0);
          }),
          n
        );
      }

      function oe(e, t) {
        let n = e.sliceString(t, t + 2);
        return n.slice(0, Object(J.c)(Object(J.b)(n, 0)));
      }

      function se(e, t, n, i) {
        let r = null,
          o = e.changeByRange((o) => {
            if (!o.empty)
              return {
                changes: [
                  {
                    insert: t,
                    from: o.from,
                  },
                  {
                    insert: n,
                    from: o.to,
                  },
                ],
                effects: G.of(o.to + t.length),
                range: u.f.range(o.anchor + t.length, o.head + t.length),
              };
            let s = oe(e.doc, o.head);
            return !s || /\s/.test(s) || i.indexOf(s) > -1
              ? {
                  changes: {
                    insert: t + n,
                    from: o.head,
                  },
                  effects: G.of(o.head + t.length),
                  range: u.f.cursor(o.head + t.length),
                }
              : {
                  range: (r = o),
                };
          });
        return r
          ? null
          : e.update(o, {
              scrollIntoView: !0,
              userEvent: 'input.type',
            });
      }

      function ae(e, t, n) {
        let i = null,
          r = e.selection.ranges.map((t) =>
            t.empty && oe(e.doc, t.head) == n
              ? u.f.cursor(t.head + n.length)
              : (i = t)
          );
        return i
          ? null
          : e.update({
              selection: u.f.create(r, e.selection.mainIndex),
              scrollIntoView: !0,
              effects: e.selection.ranges.map(({ from: e }) => Q.of(e)),
            });
      }

      function le(e, t, n) {
        let i = null,
          r = e.changeByRange((r) => {
            if (!r.empty)
              return {
                changes: [
                  {
                    insert: t,
                    from: r.from,
                  },
                  {
                    insert: t,
                    from: r.to,
                  },
                ],
                effects: G.of(r.to + t.length),
                range: u.f.range(r.anchor + t.length, r.head + t.length),
              };
            let o = r.head,
              s = oe(e.doc, o);
            if (s == t) {
              if (he(e, o))
                return {
                  changes: {
                    insert: t + t,
                    from: o,
                  },
                  effects: G.of(o + t.length),
                  range: u.f.cursor(o + t.length),
                };
              if (re(e, o)) {
                let i = n && e.sliceDoc(o, o + 3 * t.length) == t + t + t;
                return {
                  range: u.f.cursor(o + t.length * (i ? 3 : 1)),
                  effects: Q.of(o),
                };
              }
            } else {
              if (
                n &&
                e.sliceDoc(o - 2 * t.length, o) == t + t &&
                he(e, o - 2 * t.length)
              )
                return {
                  changes: {
                    insert: t + t + t + t,
                    from: o,
                  },
                  effects: G.of(o + t.length),
                  range: u.f.cursor(o + t.length),
                };
              if (e.charCategorizer(o)(s) != u.d.Word) {
                let n = e.sliceDoc(o - 1, o);
                if (n != t && e.charCategorizer(o)(n) != u.d.Word)
                  return {
                    changes: {
                      insert: t + t,
                      from: o,
                    },
                    effects: G.of(o + t.length),
                    range: u.f.cursor(o + t.length),
                  };
              }
            }
            return {
              range: (i = r),
            };
          });
        return i
          ? null
          : e.update(r, {
              scrollIntoView: !0,
              userEvent: 'input.type',
            });
      }

      function he(e, t) {
        let n = Object(v.w)(e).resolveInner(t + 1);
        return n.parent && n.from == t;
      }
      var ce = n('1FcE');
      const ue = 2e3;

      function fe(e, t) {
        let n = e.posAtCoords(
            {
              x: t.clientX,
              y: t.clientY,
            },
            !1
          ),
          i = e.state.doc.lineAt(n),
          r = n - i.from,
          o =
            r > ue
              ? -1
              : r == i.length
              ? (function (e, t) {
                  let n = e.coordsAtPos(e.viewport.from);
                  return n
                    ? Math.round(
                        Math.abs((n.left - t) / e.defaultCharacterWidth)
                      )
                    : -1;
                })(e, t.clientX)
              : Object(J.d)(i.text, e.state.tabSize, n - i.from);
        return {
          line: i.number,
          col: o,
          off: r,
        };
      }

      function de(e, t) {
        let n = fe(e, t),
          i = e.state.selection;
        return n
          ? {
              update(e) {
                if (e.docChanged) {
                  let t = e.changes.mapPos(e.startState.doc.line(n.line).from),
                    r = e.state.doc.lineAt(t);
                  (n = {
                    line: r.number,
                    col: n.col,
                    off: Math.min(n.off, r.length),
                  }),
                    (i = i.map(e.changes));
                }
              },
              get(t, r, o) {
                let s = fe(e, t);
                if (!s) return i;
                let a = (function (e, t, n) {
                  let i = Math.min(t.line, n.line),
                    r = Math.max(t.line, n.line),
                    o = [];
                  if (t.off > ue || n.off > ue || t.col < 0 || n.col < 0) {
                    let s = Math.min(t.off, n.off),
                      a = Math.max(t.off, n.off);
                    for (let t = i; t <= r; t++) {
                      let n = e.doc.line(t);
                      n.length <= a && o.push(u.f.range(n.from + s, n.to + a));
                    }
                  } else {
                    let s = Math.min(t.col, n.col),
                      a = Math.max(t.col, n.col);
                    for (let t = i; t <= r; t++) {
                      let n = e.doc.line(t),
                        i = Object(J.f)(n.text, s, e.tabSize),
                        r = Object(J.f)(n.text, a, e.tabSize);
                      i < r && o.push(u.f.range(n.from + i, n.from + r));
                    }
                  }
                  return o;
                })(e.state, n, s);
                return a.length
                  ? o
                    ? u.f.create(a.concat(i.ranges))
                    : u.f.create(a)
                  : i;
              },
            }
          : null;
      }

      function pe(e) {
        let t =
          (null === e || void 0 === e ? void 0 : e.eventFilter) ||
          ((e) => e.altKey && 0 == e.button);
        return c.d.mouseSelectionStyle.of((e, n) => (t(n) ? de(e, n) : null));
      }
      var me = n('cmz6'),
        ge = n('KV2Y');
      const ve =
        'function' == typeof String.prototype.normalize
          ? (e) => e.normalize('NFKD')
          : (e) => e;
      class be {
        constructor(e, t, n = 0, i = e.length, r) {
          (this.value = {
            from: 0,
            to: 0,
          }),
            (this.done = !1),
            (this.matches = []),
            (this.buffer = ''),
            (this.bufferPos = 0),
            (this.iter = e.iterRange(n, i)),
            (this.bufferStart = n),
            (this.normalize = r ? (e) => r(ve(e)) : ve),
            (this.query = this.normalize(t));
        }
        peek() {
          if (this.bufferPos == this.buffer.length) {
            if (
              ((this.bufferStart += this.buffer.length),
              this.iter.next(),
              this.iter.done)
            )
              return -1;
            (this.bufferPos = 0), (this.buffer = this.iter.value);
          }
          return Object(J.b)(this.buffer, this.bufferPos);
        }
        next() {
          for (; this.matches.length; ) this.matches.pop();
          return this.nextOverlapping();
        }
        nextOverlapping() {
          for (;;) {
            let e = this.peek();
            if (e < 0) return (this.done = !0), this;
            let t = Object(J.g)(e),
              n = this.bufferStart + this.bufferPos;
            this.bufferPos += Object(J.c)(e);
            let i = this.normalize(t);
            for (let r = 0, o = n; ; r++) {
              let e = i.charCodeAt(r),
                s = this.match(e, o);
              if (s) return (this.value = s), this;
              if (r == i.length - 1) break;
              o == n && r < t.length && t.charCodeAt(r) == e && o++;
            }
          }
        }
        match(e, t) {
          let n = null;
          for (let i = 0; i < this.matches.length; i += 2) {
            let r = this.matches[i],
              o = !1;
            this.query.charCodeAt(r) == e &&
              (r == this.query.length - 1
                ? (n = {
                    from: this.matches[i + 1],
                    to: t + 1,
                  })
                : (this.matches[i]++, (o = !0))),
              o || (this.matches.splice(i, 2), (i -= 2));
          }
          return (
            this.query.charCodeAt(0) == e &&
              (1 == this.query.length
                ? (n = {
                    from: t,
                    to: t + 1,
                  })
                : this.matches.push(1, t)),
            n
          );
        }
      }
      const xe = {
          from: -1,
          to: -1,
          match: /.*/.exec(''),
        },
        we = 'gm' + (null == /x/.unicode ? '' : 'u');
      class ye {
        constructor(e, t, n, i = 0, r = e.length) {
          if (
            ((this.to = r),
            (this.curLine = ''),
            (this.done = !1),
            (this.value = xe),
            /\\[sWDnr]|\n|\r|\[\^/.test(t))
          )
            return new Ce(e, t, n, i, r);
          (this.re = new RegExp(
            t,
            we +
              ((null === n || void 0 === n ? void 0 : n.ignoreCase) ? 'i' : '')
          )),
            (this.iter = e.iter());
          let o = e.lineAt(i);
          (this.curLineStart = o.from),
            (this.matchPos = i),
            this.getLine(this.curLineStart);
        }
        getLine(e) {
          this.iter.next(e),
            this.iter.lineBreak
              ? (this.curLine = '')
              : ((this.curLine = this.iter.value),
                this.curLineStart + this.curLine.length > this.to &&
                  (this.curLine = this.curLine.slice(
                    0,
                    this.to - this.curLineStart
                  )),
                this.iter.next());
        }
        nextLine() {
          (this.curLineStart = this.curLineStart + this.curLine.length + 1),
            this.curLineStart > this.to ? (this.curLine = '') : this.getLine(0);
        }
        next() {
          for (let e = this.matchPos - this.curLineStart; ; ) {
            this.re.lastIndex = e;
            let t = this.matchPos <= this.to && this.re.exec(this.curLine);
            if (t) {
              let n = this.curLineStart + t.index,
                i = n + t[0].length;
              if (
                ((this.matchPos = i + (n == i ? 1 : 0)),
                n == this.curLine.length && this.nextLine(),
                n < i || n > this.value.to)
              )
                return (
                  (this.value = {
                    from: n,
                    to: i,
                    match: t,
                  }),
                  this
                );
              e = this.matchPos - this.curLineStart;
            } else {
              if (!(this.curLineStart + this.curLine.length < this.to))
                return (this.done = !0), this;
              this.nextLine(), (e = 0);
            }
          }
        }
      }
      const ke = new WeakMap();
      class Se {
        constructor(e, t) {
          (this.from = e), (this.text = t);
        }
        get to() {
          return this.from + this.text.length;
        }
        static get(e, t, n) {
          let i = ke.get(e);
          if (!i || i.from >= n || i.to <= t) {
            let i = new Se(t, e.sliceString(t, n));
            return ke.set(e, i), i;
          }
          if (i.from == t && i.to == n) return i;
          let { text: r, from: o } = i;
          return (
            o > t && ((r = e.sliceString(t, o) + r), (o = t)),
            i.to < n && (r += e.sliceString(i.to, n)),
            ke.set(e, new Se(o, r)),
            new Se(t, r.slice(t - o, n - o))
          );
        }
      }
      class Ce {
        constructor(e, t, n, i, r) {
          (this.text = e),
            (this.to = r),
            (this.done = !1),
            (this.value = xe),
            (this.matchPos = i),
            (this.re = new RegExp(
              t,
              we +
                ((null === n || void 0 === n ? void 0 : n.ignoreCase)
                  ? 'i'
                  : '')
            )),
            (this.flat = Se.get(e, i, this.chunkEnd(i + 5e3)));
        }
        chunkEnd(e) {
          return e >= this.to ? this.to : this.text.lineAt(e).to;
        }
        next() {
          for (;;) {
            let e = (this.re.lastIndex = this.matchPos - this.flat.from),
              t = this.re.exec(this.flat.text);
            if (
              (t &&
                !t[0] &&
                t.index == e &&
                ((this.re.lastIndex = e + 1),
                (t = this.re.exec(this.flat.text))),
              t &&
                this.flat.to < this.to &&
                t.index + t[0].length > this.flat.text.length - 10 &&
                (t = null),
              t)
            ) {
              let e = this.flat.from + t.index,
                n = e + t[0].length;
              return (
                (this.value = {
                  from: e,
                  to: n,
                  match: t,
                }),
                (this.matchPos = n + (e == n ? 1 : 0)),
                this
              );
            }
            if (this.flat.to == this.to) return (this.done = !0), this;
            this.flat = Se.get(
              this.text,
              this.flat.from,
              this.chunkEnd(this.flat.from + 2 * this.flat.text.length)
            );
          }
        }
      }

      function Ae(e) {
        let t = Object(ge.a)('input', {
          class: 'cm-textfield',
          name: 'line',
        });

        function n() {
          let n = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
          if (!n) return;
          let { state: i } = e,
            r = i.doc.lineAt(i.selection.main.head),
            [, o, s, a, l] = n,
            h = a ? +a.slice(1) : 0,
            c = s ? +s : r.number;
          if (s && l) {
            let e = c / 100;
            o && (e = e * ('-' == o ? -1 : 1) + r.number / i.doc.lines),
              (c = Math.round(i.doc.lines * e));
          } else s && o && (c = c * ('-' == o ? -1 : 1) + r.number);
          let f = i.doc.line(Math.max(1, Math.min(i.doc.lines, c)));
          e.dispatch({
            effects: Oe.of(!1),
            selection: u.f.cursor(f.from + Math.max(0, Math.min(h, f.length))),
            scrollIntoView: !0,
          }),
            e.focus();
        }
        return {
          dom: Object(ge.a)(
            'form',
            {
              class: 'cm-gotoLine',
              onkeydown: (t) => {
                27 == t.keyCode
                  ? (t.preventDefault(),
                    e.dispatch({
                      effects: Oe.of(!1),
                    }),
                    e.focus())
                  : 13 == t.keyCode && (t.preventDefault(), n());
              },
              onsubmit: (e) => {
                e.preventDefault(), n();
              },
            },
            Object(ge.a)('label', e.state.phrase('Go to line'), ': ', t),
            ' ',
            Object(ge.a)(
              'button',
              {
                class: 'cm-button',
                type: 'submit',
              },
              e.state.phrase('go')
            )
          ),
          pos: -10,
        };
      }
      const Oe = u.k.define(),
        je = u.l.define({
          create: () => !0,
          update(e, t) {
            for (let n of t.effects) n.is(Oe) && (e = n.value);
            return e;
          },
          provide: (e) => me.b.from(e, (e) => (e ? Ae : null)),
        }),
        Me = c.d.baseTheme({
          '.cm-panel.cm-gotoLine': {
            padding: '2px 6px 4px',
            '& label': {
              fontSize: '80%',
            },
          },
        }),
        Ee = {
          highlightWordAroundCursor: !1,
          minSelectionLength: 1,
          maxMatches: 100,
        },
        Ie = u.h.define({
          combine: (e) =>
            Object(u.n)(e, Ee, {
              highlightWordAroundCursor: (e, t) => e || t,
              minSelectionLength: Math.min,
              maxMatches: Math.min,
            }),
        });

      function Le(e) {
        let t = [Re, De];
        return e && t.push(Ie.of(e)), t;
      }
      const Te = c.b.mark({
          class: 'cm-selectionMatch',
        }),
        Pe = c.b.mark({
          class: 'cm-selectionMatch cm-selectionMatch-main',
        }),
        De = c.f.fromClass(
          class {
            constructor(e) {
              this.decorations = this.getDeco(e);
            }
            update(e) {
              (e.selectionSet || e.docChanged || e.viewportChanged) &&
                (this.decorations = this.getDeco(e.view));
            }
            getDeco(e) {
              let t = e.state.facet(Ie),
                { state: n } = e,
                i = n.selection;
              if (i.ranges.length > 1) return c.b.none;
              let r,
                o = i.main,
                s = null;
              if (o.empty) {
                if (!t.highlightWordAroundCursor) return c.b.none;
                let e = n.wordAt(o.head);
                if (!e) return c.b.none;
                (s = n.charCategorizer(o.head)), (r = n.sliceDoc(e.from, e.to));
              } else {
                let e = o.to - o.from;
                if (e < t.minSelectionLength || e > 200) return c.b.none;
                if (((r = n.sliceDoc(o.from, o.to).trim()), !r))
                  return c.b.none;
              }
              let a = [];
              for (let l of e.visibleRanges) {
                let e = new be(n.doc, r, l.from, l.to);
                for (; !e.nextOverlapping().done; ) {
                  let { from: i, to: r } = e.value;
                  if (
                    (!s ||
                      ((0 == i || s(n.sliceDoc(i - 1, i)) != u.d.Word) &&
                        (r == n.doc.length ||
                          s(n.sliceDoc(r, r + 1)) != u.d.Word))) &&
                    (s && i <= o.from && r >= o.to
                      ? a.push(Pe.range(i, r))
                      : (i >= o.to || r <= o.from) && a.push(Te.range(i, r)),
                    a.length > t.maxMatches)
                  )
                    return c.b.none;
                }
              }
              return c.b.set(a);
            }
          },
          {
            decorations: (e) => e.decorations,
          }
        ),
        Re = c.d.baseTheme({
          '.cm-selectionMatch': {
            backgroundColor: '#99ff7780',
          },
          '.cm-searchMatch .cm-selectionMatch': {
            backgroundColor: 'transparent',
          },
        });
      const Ne = u.h.define({
        combine: (e) => ({
          top: e.some((e) => e.top),
        }),
      });
      class Be {
        constructor(e, t, n) {
          (this.search = e), (this.replace = t), (this.caseInsensitive = n);
        }
        eq(e) {
          return (
            this.search == e.search &&
            this.replace == e.replace &&
            this.caseInsensitive == e.caseInsensitive &&
            this.constructor == e.constructor
          );
        }
      }
      class qe extends Be {
        constructor(e, t, n) {
          super(e, t, n),
            (this.unquoted = e.replace(/\\([nrt\\])/g, (e, t) =>
              'n' == t ? '\n' : 'r' == t ? '\r' : 't' == t ? '\t' : '\\'
            ));
        }
        cursor(e, t = 0, n = e.length) {
          return new be(
            e,
            this.unquoted,
            t,
            n,
            this.caseInsensitive ? (e) => e.toLowerCase() : void 0
          );
        }
        nextMatch(e, t, n) {
          let i = this.cursor(e, n).nextOverlapping();
          return (
            i.done && (i = this.cursor(e, 0, t).nextOverlapping()),
            i.done ? null : i.value
          );
        }
        prevMatchInRange(e, t, n) {
          for (let i = n; ; ) {
            let n = Math.max(t, i - 1e4 - this.unquoted.length),
              r = this.cursor(e, n, i),
              o = null;
            for (; !r.nextOverlapping().done; ) o = r.value;
            if (o) return o;
            if (n == t) return null;
            i -= 1e4;
          }
        }
        prevMatch(e, t, n) {
          return (
            this.prevMatchInRange(e, 0, t) ||
            this.prevMatchInRange(e, n, e.length)
          );
        }
        getReplacement(e) {
          return this.replace;
        }
        matchAll(e, t) {
          let n = this.cursor(e),
            i = [];
          for (; !n.next().done; ) {
            if (i.length >= t) return null;
            i.push(n.value);
          }
          return i;
        }
        highlight(e, t, n, i) {
          let r = this.cursor(
            e,
            Math.max(0, t - this.unquoted.length),
            Math.min(n + this.unquoted.length, e.length)
          );
          for (; !r.next().done; ) i(r.value.from, r.value.to);
        }
        get valid() {
          return !!this.search;
        }
      }
      class ze extends Be {
        constructor(e, t, n) {
          super(e, t, n),
            (this.valid =
              !!e &&
              (function (e) {
                try {
                  return new RegExp(e, we), !0;
                } catch (t) {
                  return !1;
                }
              })(e));
        }
        cursor(e, t = 0, n = e.length) {
          return new ye(
            e,
            this.search,
            this.caseInsensitive
              ? {
                  ignoreCase: !0,
                }
              : void 0,
            t,
            n
          );
        }
        nextMatch(e, t, n) {
          let i = this.cursor(e, n).next();
          return (
            i.done && (i = this.cursor(e, 0, t).next()), i.done ? null : i.value
          );
        }
        prevMatchInRange(e, t, n) {
          for (let i = 1; ; i++) {
            let r = Math.max(t, n - 1e4 * i),
              o = this.cursor(e, r, n),
              s = null;
            for (; !o.next().done; ) s = o.value;
            if (s && (r == t || s.from > r + 10)) return s;
            if (r == t) return null;
          }
        }
        prevMatch(e, t, n) {
          return (
            this.prevMatchInRange(e, 0, t) ||
            this.prevMatchInRange(e, n, e.length)
          );
        }
        getReplacement(e) {
          return this.replace.replace(/\$([$&\d+])/g, (t, n) =>
            '$' == n
              ? '$'
              : '&' == n
              ? e.match[0]
              : '0' != n && +n < e.match.length
              ? e.match[n]
              : t
          );
        }
        matchAll(e, t) {
          let n = this.cursor(e),
            i = [];
          for (; !n.next().done; ) {
            if (i.length >= t) return null;
            i.push(n.value);
          }
          return i;
        }
        highlight(e, t, n, i) {
          let r = this.cursor(
            e,
            Math.max(0, t - 250),
            Math.min(n + 250, e.length)
          );
          for (; !r.next().done; ) i(r.value.from, r.value.to);
        }
      }
      const Fe = u.k.define(),
        Ve = u.k.define(),
        We = u.l.define({
          create: (e) => new _e(et(e), Ze),
          update(e, t) {
            for (let n of t.effects)
              n.is(Fe)
                ? (e = new _e(n.value, e.panel))
                : n.is(Ve) && (e = new _e(e.query, n.value ? Ze : null));
            return e;
          },
          provide: (e) => me.b.from(e, (e) => e.panel),
        });
      class _e {
        constructor(e, t) {
          (this.query = e), (this.panel = t);
        }
      }
      const Ue = c.b.mark({
          class: 'cm-searchMatch',
        }),
        He = c.b.mark({
          class: 'cm-searchMatch cm-searchMatch-selected',
        }),
        Je = c.f.fromClass(
          class {
            constructor(e) {
              (this.view = e),
                (this.decorations = this.highlight(e.state.field(We)));
            }
            update(e) {
              let t = e.state.field(We);
              (t != e.startState.field(We) || e.docChanged || e.selectionSet) &&
                (this.decorations = this.highlight(t));
            }
            highlight({ query: e, panel: t }) {
              if (!t || !e.valid) return c.b.none;
              let { view: n } = this,
                i = new b.b();
              for (let r = 0, o = n.visibleRanges, s = o.length; r < s; r++) {
                let { from: t, to: a } = o[r];
                for (; r < s - 1 && a > o[r + 1].from - 500; ) a = o[++r].to;
                e.highlight(n.state.doc, t, a, (e, t) => {
                  let r = n.state.selection.ranges.some(
                    (n) => n.from == e && n.to == t
                  );
                  i.add(e, t, r ? He : Ue);
                });
              }
              return i.finish();
            }
          },
          {
            decorations: (e) => e.decorations,
          }
        );

      function $e(e) {
        return (t) => {
          let n = t.state.field(We, !1);
          return n && n.query.valid ? e(t, n) : tt(t);
        };
      }
      const Ge = $e((e, { query: t }) => {
          let { from: n, to: i } = e.state.selection.main,
            r = t.nextMatch(e.state.doc, n, i);
          return (
            !(!r || (r.from == n && r.to == i)) &&
            (e.dispatch({
              selection: {
                anchor: r.from,
                head: r.to,
              },
              scrollIntoView: !0,
              effects: st(e, r),
            }),
            !0)
          );
        }),
        Qe = $e((e, { query: t }) => {
          let { state: n } = e,
            { from: i, to: r } = n.selection.main,
            o = t.prevMatch(n.doc, i, r);
          return (
            !!o &&
            (e.dispatch({
              selection: {
                anchor: o.from,
                head: o.to,
              },
              scrollIntoView: !0,
              effects: st(e, o),
            }),
            !0)
          );
        }),
        Ke = $e((e, { query: t }) => {
          let n = t.matchAll(e.state.doc, 1e3);
          return (
            !(!n || !n.length) &&
            (e.dispatch({
              selection: u.f.create(n.map((e) => u.f.range(e.from, e.to))),
            }),
            !0)
          );
        }),
        Ye = $e((e, { query: t }) => {
          let { state: n } = e,
            { from: i, to: r } = n.selection.main,
            o = t.nextMatch(n.doc, i, i);
          if (!o) return !1;
          let s,
            a,
            l = [];
          if (
            (o.from == i &&
              o.to == r &&
              ((a = n.toText(t.getReplacement(o))),
              l.push({
                from: o.from,
                to: o.to,
                insert: a,
              }),
              (o = t.nextMatch(n.doc, o.from, o.to))),
            o)
          ) {
            let e =
              0 == l.length || l[0].from >= o.to ? 0 : o.to - o.from - a.length;
            s = {
              anchor: o.from - e,
              head: o.to - e,
            };
          }
          return (
            e.dispatch({
              changes: l,
              selection: s,
              scrollIntoView: !!s,
              effects: o ? st(e, o) : void 0,
            }),
            !0
          );
        }),
        Xe = $e((e, { query: t }) => {
          let n = t.matchAll(e.state.doc, 1e9).map((e) => {
            let { from: n, to: i } = e;
            return {
              from: n,
              to: i,
              insert: t.getReplacement(e),
            };
          });
          return (
            !!n.length &&
            (e.dispatch({
              changes: n,
            }),
            !0)
          );
        });

      function Ze(e) {
        let { query: t } = e.state.field(We);
        return {
          dom: rt({
            view: e,
            query: t,
            updateQuery(n) {
              t.eq(n) ||
                ((t = n),
                e.dispatch({
                  effects: Fe.of(t),
                }));
            },
          }),
          mount() {
            this.dom.querySelector('[name=search]').select();
          },
          pos: 80,
          top: e.state.facet(Ne).top,
        };
      }

      function et(e, t) {
        let n = e.selection.main,
          i = n.empty || n.to > n.from + 100 ? '' : e.sliceDoc(n.from, n.to);
        return t && !i
          ? t
          : new qe(
              i.replace(/\n/g, '\\n'),
              '',
              (null === t || void 0 === t ? void 0 : t.caseInsensitive) || !1
            );
      }
      const tt = (e) => {
          let t = e.state.field(We, !1);
          if (t && t.panel) {
            let t = Object(me.a)(e, Ze);
            if (!t) return !1;
            t.dom.querySelector('[name=search]').focus();
          } else
            e.dispatch({
              effects: [
                Ve.of(!0),
                t ? Fe.of(et(e.state, t.query)) : u.k.appendConfig.of(lt),
              ],
            });
          return !0;
        },
        nt = (e) => {
          let t = e.state.field(We, !1);
          if (!t || !t.panel) return !1;
          let n = Object(me.a)(e, Ze);
          return (
            n && n.dom.contains(e.root.activeElement) && e.focus(),
            e.dispatch({
              effects: Ve.of(!1),
            }),
            !0
          );
        },
        it = [
          {
            key: 'Mod-f',
            run: tt,
            scope: 'editor search-panel',
          },
          {
            key: 'F3',
            run: Ge,
            shift: Qe,
            scope: 'editor search-panel',
          },
          {
            key: 'Mod-g',
            run: Ge,
            shift: Qe,
            scope: 'editor search-panel',
          },
          {
            key: 'Escape',
            run: nt,
            scope: 'editor search-panel',
          },
          {
            key: 'Mod-Shift-l',
            run: ({ state: e, dispatch: t }) => {
              let n = e.selection;
              if (n.ranges.length > 1 || n.main.empty) return !1;
              let { from: i, to: r } = n.main,
                o = [],
                s = 0;
              for (let a = new be(e.doc, e.sliceDoc(i, r)); !a.next().done; ) {
                if (o.length > 1e3) return !1;
                a.value.from == i && (s = o.length),
                  o.push(u.f.range(a.value.from, a.value.to));
              }
              return (
                t(
                  e.update({
                    selection: u.f.create(o, s),
                  })
                ),
                !0
              );
            },
          },
          {
            key: 'Alt-g',
            run: (e) => {
              let t = Object(me.a)(e, Ae);
              if (!t) {
                let n = [Oe.of(!0)];
                null == e.state.field(je, !1) &&
                  n.push(u.k.appendConfig.of([je, Me])),
                  e.dispatch({
                    effects: n,
                  }),
                  (t = Object(me.a)(e, Ae));
              }
              return t && t.dom.querySelector('input').focus(), !0;
            },
          },
          {
            key: 'Mod-d',
            run: ({ state: e, dispatch: t }) => {
              let { ranges: n } = e.selection;
              if (n.some((e) => e.from === e.to))
                return (({ state: e, dispatch: t }) => {
                  let { selection: n } = e,
                    i = u.f.create(
                      n.ranges.map(
                        (t) => e.wordAt(t.head) || u.f.cursor(t.head)
                      ),
                      n.mainIndex
                    );
                  return (
                    !i.eq(n) &&
                    (t(
                      e.update({
                        selection: i,
                      })
                    ),
                    !0)
                  );
                })({
                  state: e,
                  dispatch: t,
                });
              let i = e.sliceDoc(n[0].from, n[0].to);
              if (e.selection.ranges.some((t) => e.sliceDoc(t.from, t.to) != i))
                return !1;
              let r = (function (e, t) {
                let { ranges: n } = e.selection,
                  i = new be(e.doc, t, n[n.length - 1].to).next();
                if (!i.done) return i.value;
                let r = new be(
                  e.doc,
                  t,
                  0,
                  Math.max(0, n[n.length - 1].from - 1)
                );
                for (; !r.next().done; )
                  if (!n.some((e) => e.from === r.value.from)) return r.value;
                return null;
              })(e, i);
              return (
                !!r &&
                (t(
                  e.update({
                    selection: e.selection.addRange(u.f.range(r.from, r.to)),
                    scrollIntoView: !0,
                  })
                ),
                !0)
              );
            },
            preventDefault: !0,
          },
        ];

      function rt(e) {
        function t(t) {
          return e.view.state.phrase(t);
        }
        let n = Object(ge.a)('input', {
            value: e.query.search,
            placeholder: t('Find'),
            'aria-label': t('Find'),
            class: 'cm-textfield',
            name: 'search',
            onchange: s,
            onkeyup: s,
          }),
          i = Object(ge.a)('input', {
            value: e.query.replace,
            placeholder: t('Replace'),
            'aria-label': t('Replace'),
            class: 'cm-textfield',
            name: 'replace',
            onchange: s,
            onkeyup: s,
          }),
          r = Object(ge.a)('input', {
            type: 'checkbox',
            name: 'case',
            checked: !e.query.caseInsensitive,
            onchange: s,
          }),
          o = Object(ge.a)('input', {
            type: 'checkbox',
            name: 're',
            checked: e.query instanceof ze,
            onchange: s,
          });

        function s() {
          e.updateQuery(
            new (o.checked ? ze : qe)(n.value, i.value, !r.checked)
          );
        }

        function a(e, t, n) {
          return Object(ge.a)(
            'button',
            {
              class: 'cm-button',
              name: e,
              onclick: t,
            },
            n
          );
        }
        return Object(ge.a)(
          'div',
          {
            onkeydown: function (t) {
              Object(c.m)(e.view, t, 'search-panel')
                ? t.preventDefault()
                : 13 == t.keyCode && t.target == n
                ? (t.preventDefault(), (t.shiftKey ? Qe : Ge)(e.view))
                : 13 == t.keyCode &&
                  t.target == i &&
                  (t.preventDefault(), Ye(e.view));
            },
            class: 'cm-search',
          },
          [
            n,
            a('next', () => Ge(e.view), [t('next')]),
            a('prev', () => Qe(e.view), [t('previous')]),
            a('select', () => Ke(e.view), [t('all')]),
            Object(ge.a)('label', null, [r, t('match case')]),
            Object(ge.a)('label', null, [o, t('regexp')]),
            Object(ge.a)('br'),
            i,
            a('replace', () => Ye(e.view), [t('replace')]),
            a('replaceAll', () => Xe(e.view), [t('replace all')]),
            Object(ge.a)(
              'button',
              {
                name: 'close',
                onclick: () => nt(e.view),
                'aria-label': t('close'),
              },
              ['\xd7']
            ),
          ]
        );
      }
      const ot = /[\s\.,:;?!]/;

      function st(e, { from: t, to: n }) {
        let i = e.state.doc.lineAt(t).from,
          r = e.state.doc.lineAt(n).to,
          o = Math.max(i, t - 30),
          s = Math.min(r, n + 30),
          a = e.state.sliceDoc(o, s);
        if (o != i)
          for (let l = 0; l < 30; l++)
            if (!ot.test(a[l + 1]) && ot.test(a[l])) {
              a = a.slice(l);
              break;
            }
        if (s != r)
          for (let l = a.length - 1; l > a.length - 30; l--)
            if (!ot.test(a[l - 1]) && ot.test(a[l])) {
              a = a.slice(0, l);
              break;
            }
        return c.d.announce.of(
          `${e.state.phrase('current match')}. ${a} ${e.state.phrase(
            'on line'
          )} ${e.state.doc.lineAt(t).number}`
        );
      }
      const at = c.d.baseTheme({
          '.cm-panel.cm-search': {
            padding: '2px 6px 4px',
            position: 'relative',
            '& [name=close]': {
              position: 'absolute',
              top: '0',
              right: '4px',
              backgroundColor: 'inherit',
              border: 'none',
              font: 'inherit',
              padding: 0,
              margin: 0,
            },
            '& input, & button, & label': {
              margin: '.2em .6em .2em 0',
            },
            '& input[type=checkbox]': {
              marginRight: '.2em',
            },
            '& label': {
              fontSize: '80%',
              whiteSpace: 'pre',
            },
          },
          '&light .cm-searchMatch': {
            backgroundColor: '#ffff0054',
          },
          '&dark .cm-searchMatch': {
            backgroundColor: '#00ffff8a',
          },
          '&light .cm-searchMatch-selected': {
            backgroundColor: '#ff6a0054',
          },
          '&dark .cm-searchMatch-selected': {
            backgroundColor: '#ff00ff8a',
          },
        }),
        lt = [We, u.j.fallback(Je), at];
      var ht = n('L4B9');

      function ct(e, t) {
        return ({ state: n, dispatch: i }) => {
          let r = e(t, n.selection.ranges, n);
          return !!r && (i(n.update(r)), !0);
        };
      }
      const ut = ct(gt, 0),
        ft = ct(mt, 0),
        dt = [
          {
            key: 'Mod-/',
            run: (e) => {
              let t = pt(e.state);
              return t.line ? ut(e) : !!t.block && ft(e);
            },
          },
          {
            key: 'Alt-A',
            run: ft,
          },
        ];

      function pt(e, t = e.selection.main.head) {
        let n = e.languageDataAt('commentTokens', t);
        return n.length ? n[0] : {};
      }

      function mt(e, t, n) {
        let i = t.map((e) => pt(n, e.from).block);
        if (!i.every((e) => e)) return null;
        let r = t.map((e, t) =>
          (function (e, { open: t, close: n }, i, r) {
            let o,
              s,
              a = e.sliceDoc(i - 50, i),
              l = e.sliceDoc(r, r + 50),
              h = /\s*$/.exec(a)[0].length,
              c = /^\s*/.exec(l)[0].length,
              u = a.length - h;
            if (a.slice(u - t.length, u) == t && l.slice(c, c + n.length) == n)
              return {
                open: {
                  pos: i - h,
                  margin: h && 1,
                },
                close: {
                  pos: r + c,
                  margin: c && 1,
                },
              };
            r - i <= 100
              ? (o = s = e.sliceDoc(i, r))
              : ((o = e.sliceDoc(i, i + 50)), (s = e.sliceDoc(r - 50, r)));
            let f = /^\s*/.exec(o)[0].length,
              d = /\s*$/.exec(s)[0].length,
              p = s.length - d - n.length;
            return o.slice(f, f + t.length) == t &&
              s.slice(p, p + n.length) == n
              ? {
                  open: {
                    pos: i + f + t.length,
                    margin: /\s/.test(o.charAt(f + t.length)) ? 1 : 0,
                  },
                  close: {
                    pos: r - d - n.length,
                    margin: /\s/.test(s.charAt(p - 1)) ? 1 : 0,
                  },
                }
              : null;
          })(n, i[t], e.from, e.to)
        );
        if (2 != e && !r.every((e) => e)) {
          let e = 0;
          return n.changeByRange((t) => {
            let { open: n, close: o } = i[e++];
            if (r[e])
              return {
                range: t,
              };
            let s = n.length + 1;
            return {
              changes: [
                {
                  from: t.from,
                  insert: n + ' ',
                },
                {
                  from: t.to,
                  insert: ' ' + o,
                },
              ],
              range: u.f.range(t.anchor + s, t.head + s),
            };
          });
        }
        if (1 != e && r.some((e) => e)) {
          let e = [];
          for (let t, n = 0; n < r.length; n++)
            if ((t = r[n])) {
              let r = i[n],
                { open: o, close: s } = t;
              e.push(
                {
                  from: o.pos - r.open.length,
                  to: o.pos + o.margin,
                },
                {
                  from: s.pos - s.margin,
                  to: s.pos + r.close.length,
                }
              );
            }
          return {
            changes: e,
          };
        }
        return null;
      }

      function gt(e, t, n) {
        let i = [],
          r = -1;
        for (let { from: o, to: s } of t) {
          let e = i.length,
            t = 1e9;
          for (let a = o; a <= s; ) {
            let e = n.doc.lineAt(a);
            if (e.from > r && (o == s || s > e.from)) {
              r = e.from;
              let o = pt(n, a).line;
              if (!o) continue;
              let s = /^\s*/.exec(e.text)[0].length,
                l = s == e.length,
                h = e.text.slice(s, s + o.length) == o ? s : -1;
              s < e.text.length && s < t && (t = s),
                i.push({
                  line: e,
                  comment: h,
                  token: o,
                  indent: s,
                  empty: l,
                  single: !1,
                });
            }
            a = e.to + 1;
          }
          if (t < 1e9)
            for (let n = e; n < i.length; n++)
              i[n].indent < i[n].line.text.length && (i[n].indent = t);
          i.length == e + 1 && (i[e].single = !0);
        }
        if (2 != e && i.some((e) => e.comment < 0 && (!e.empty || e.single))) {
          let e = [];
          for (let { line: n, token: r, indent: o, empty: s, single: a } of i)
            (!a && s) ||
              e.push({
                from: n.from + o,
                insert: r + ' ',
              });
          let t = n.changes(e);
          return {
            changes: t,
            selection: n.selection.map(t, 1),
          };
        }
        if (1 != e && i.some((e) => e.comment >= 0)) {
          let e = [];
          for (let { line: t, comment: n, token: r } of i)
            if (n >= 0) {
              let i = t.from + n,
                o = i + r.length;
              ' ' == t.text[o - t.from] && o++,
                e.push({
                  from: i,
                  to: o,
                });
            }
          return {
            changes: e,
          };
        }
        return null;
      }
      var vt = n('QpUv');
      const bt = '#e06c75',
        xt = '#abb2bf',
        wt = '#7d8799',
        yt = '#d19a66';
      L.d.keyword,
        L.d.name,
        L.d.deleted,
        L.d.character,
        L.d.propertyName,
        L.d.macroName,
        L.d.variableName,
        L.d.labelName,
        L.d.color,
        L.d.name,
        L.d.name,
        L.d.name,
        L.d.separator,
        L.d.typeName,
        L.d.className,
        L.d.number,
        L.d.changed,
        L.d.annotation,
        L.d.modifier,
        L.d.self,
        L.d.namespace,
        L.d.operator,
        L.d.operatorKeyword,
        L.d.url,
        L.d.escape,
        L.d.regexp,
        L.d.link,
        L.d.string,
        L.d.meta,
        L.d.comment,
        L.d.strong,
        L.d.emphasis,
        L.d.strikethrough,
        L.d.link,
        L.d.heading,
        L.d.atom,
        L.d.bool,
        L.d.variableName,
        L.d.processingInstruction,
        L.d.string,
        L.d.inserted,
        L.d.invalid;

      function kt() {
        var e = l.useState(null),
          t = Object(a.a)(e, 2),
          n = t[0],
          i = t[1],
          r = l.useState(null),
          h = Object(a.a)(r, 2),
          f = h[0],
          d = h[1];
        return (
          l.useEffect(
            function () {
              if (n) {
                var e,
                  t = !1;
                return (
                  (function () {
                    i.apply(this, arguments);
                  })(),
                  function () {
                    (t = !0), d(null), e && (e.destroy(), (e = null));
                  }
                );
              }

              function i() {
                return (i = Object(s.a)(
                  o.a.mark(function i() {
                    var r, s, a, l, h, f, p;
                    return o.a.wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            if (n && !t) {
                              i.next = 2;
                              break;
                            }
                            return i.abrupt('return');
                          case 2:
                            (r = new u.e()),
                              (s = new u.e()),
                              (a = new u.e()),
                              (l = new u.e()),
                              (h = new u.e()),
                              (f = new u.e()),
                              (p = new u.e()),
                              (e = new c.d({
                                parent: n,
                              })),
                              d({
                                view: e,
                                setTheme: function (t) {
                                  if (!e) throw new Error('Expected view');
                                  var n = q(t);
                                  e.dispatch({
                                    effects: [
                                      r.reconfigure(n.base),
                                      s.reconfigure(n.highlight),
                                    ],
                                  });
                                },
                                setIndentSize: function (t) {
                                  if (!e) throw new Error('Expected view');
                                  var n = E(
                                    t.indentSize,
                                    t.indentIsSpace,
                                    t.areIndentationMarkersEnabled
                                  );
                                  e.dispatch({
                                    effects: [a.reconfigure(n)],
                                  });
                                },
                                setLspExtensions: function (n) {
                                  var i;
                                  if (!t && !e)
                                    throw new Error('Expected view');
                                  null === (i = e) ||
                                    void 0 === i ||
                                    i.dispatch({
                                      effects: l.reconfigure(n),
                                    });
                                },
                                setDebuggerExtensions: function (n) {
                                  var i;
                                  if (!t && !e)
                                    throw new Error('Expected view');
                                  null === (i = e) ||
                                    void 0 === i ||
                                    i.dispatch({
                                      effects: h.reconfigure(n),
                                    });
                                },
                                setLineWrapping: function (t) {
                                  if (!e) throw new Error('Expected view');
                                  e.dispatch({
                                    effects: f.reconfigure(
                                      t ? c.d.lineWrapping : []
                                    ),
                                  });
                                },
                                loadExtensions: function (e) {
                                  return Et({
                                    filename: e.filename,
                                    language: e.language,
                                    theme: e.theme,
                                    indentation: e.indentation,
                                    keyBindings: e.keyBindings,
                                    enableSearchKeyBinding:
                                      e.enableSearchKeyBinding,
                                    tabBinding: e.tabBinding,
                                    isSoftWrap: e.isSoftWrap,
                                    hideGutter: e.hideGutter,
                                    themeCompartment: r,
                                    highlightCompartment: s,
                                    indentSizeCompartment: a,
                                    lspCompartment: l,
                                    debuggerCompartment: h,
                                    lineWrappingCompartment: f,
                                    gutterCompartment: p,
                                  });
                                },
                              });
                          case 11:
                          case 'end':
                            return i.stop();
                        }
                    }, i);
                  })
                )).apply(this, arguments);
              }
            },
            [n]
          ),
          [f, i]
        );
      }

      function St(e) {
        return Ct.apply(this, arguments);
      }

      function Ct() {
        return (Ct = Object(s.a)(
          o.a.mark(function e(t) {
            var i, r, s, a;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      'Markdown' !==
                      (null === (i = t ? v.d.matchFilename(V, t) : null) ||
                      void 0 === i
                        ? void 0
                        : i.name)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (e.next = 4),
                      Promise.all([n.e(8), n.e(19), n.e(18), n.e(46)]).then(
                        n.bind(null, 'S0tx')
                      )
                    );
                  case 4:
                    return (
                      (r = e.sent),
                      e.abrupt(
                        'return',
                        r.markdown({
                          codeLanguages: V.filter(function (e) {
                            return 'Markdown' !== e.name;
                          }),
                        })
                      )
                    );
                  case 6:
                    if (!i) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', i.load());
                  case 8:
                    if (
                      ((s = Object(h.extname)(t).slice(1)),
                      !['php', 'vue', 'svelte'].includes(s))
                    ) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (a = V.find(function (e) {
                        return 'HTML' === e.name;
                      })),
                      e.abrupt('return', a ? a.load() : null)
                    );
                  case 12:
                    return e.abrupt('return', null);
                  case 13:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }

      function At(e) {
        return Ot.apply(this, arguments);
      }

      function Ot() {
        return (Ot = Object(s.a)(
          o.a.mark(function e(t) {
            var i, r, s;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      'Markdown' !==
                      (null === (i = v.d.matchLanguageName(V, t, !0)) ||
                      void 0 === i
                        ? void 0
                        : i.name)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (e.next = 4),
                      Promise.all([n.e(8), n.e(19), n.e(18), n.e(46)]).then(
                        n.bind(null, 'S0tx')
                      )
                    );
                  case 4:
                    return (
                      (r = e.sent),
                      e.abrupt(
                        'return',
                        r.markdown({
                          codeLanguages: V.filter(function (e) {
                            return 'Markdown' !== e.name;
                          }),
                        })
                      )
                    );
                  case 6:
                    if (!i) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', i.load());
                  case 8:
                    if ('php' !== t) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (s = V.find(function (e) {
                        return 'HTML' === e.name;
                      })),
                      e.abrupt('return', s ? s.load() : null)
                    );
                  case 11:
                    return e.abrupt('return', null);
                  case 12:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }

      function jt(e, t) {
        return Mt.apply(this, arguments);
      }

      function Mt() {
        return (Mt = Object(s.a)(
          o.a.mark(function e(t, n) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt('return', St(t));
                  case 2:
                    if (!n) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt('return', At(n));
                  case 4:
                    return e.abrupt('return', null);
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }

      function Et(e) {
        return It.apply(this, arguments);
      }

      function It() {
        return (It = Object(s.a)(
          o.a.mark(function e(t) {
            var n, r, s, a, l, h, f, d, p, m, g, b, x, w, y, k, S, C, A, O, j;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.filename),
                      (r = t.language),
                      (s = t.theme),
                      (a = t.indentation),
                      (l = t.keyBindings),
                      (h = t.themeCompartment),
                      (f = t.highlightCompartment),
                      (d = t.indentSizeCompartment),
                      (p = t.tabBinding),
                      (m = t.enableSearchKeyBinding),
                      (g = void 0 === m || m),
                      (b = t.lspCompartment),
                      (x = t.debuggerCompartment),
                      (w = t.lineWrappingCompartment),
                      (y = t.gutterCompartment),
                      (k = t.isSoftWrap),
                      (S = t.hideGutter),
                      (e.next = 3),
                      jt(n, r)
                    );
                  case 3:
                    return (
                      (C = e.sent),
                      (A = q(s)),
                      (O = E(
                        a.indentSize,
                        a.indentIsSpace,
                        a.areIndentationMarkersEnabled
                      )),
                      (j = [
                        y.of(S ? [] : [Object(W.c)(), Object(_.b)()]),
                        Object(c.j)(),
                        Object(U.a)(),
                        Object(c.h)(),
                        u.g.allowMultipleSelections.of(!0),
                        Object(v.q)(),
                        Object(H.a)(),
                        X(),
                        Object(ce.a)(),
                        pe(),
                        Le(),
                      ].concat(Object(i.a)(C ? [C] : []), [
                        h.of(A.base),
                        f.of(A.highlight),
                        d.of(O),
                        b.of([]),
                        x.of([]),
                        w.of(k ? c.d.lineWrapping : []),
                        c.k.of(
                          [].concat(
                            Object(i.a)(ht.a),
                            Object(i.a)(ie),
                            Object(i.a)(U.c),
                            Object(i.a)(_.c),
                            Object(i.a)(dt),
                            Object(i.a)(ce.c),
                            Object(i.a)(vt.a),
                            Object(i.a)(g ? it : []),
                            [p || ht.d],
                            Object(i.a)(l || [])
                          )
                        ),
                      ])),
                      e.abrupt('return', j)
                    );
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    wG49: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      }),
        n.d(t, 'b', function () {
          return h;
        }),
        n.d(t, 'c', function () {
          return r;
        });
      var i = n('4eob');
      class r {
        eq(e) {
          return this == e;
        }
        range(e, t = e) {
          return new o(e, t, this);
        }
      }
      (r.prototype.startSide = r.prototype.endSide = 0),
        (r.prototype.point = !1),
        (r.prototype.mapMode = i.i.TrackDel);
      class o {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.value = n);
        }
      }

      function s(e, t) {
        return e.from - t.from || e.value.startSide - t.value.startSide;
      }
      class a {
        constructor(e, t, n, i) {
          (this.from = e), (this.to = t), (this.value = n), (this.maxPoint = i);
        }
        get length() {
          return this.to[this.to.length - 1];
        }
        findIndex(e, t, n, i = 0) {
          let r = n ? this.to : this.from;
          for (let o = i, s = r.length; ; ) {
            if (o == s) return o;
            let i = (o + s) >> 1,
              a =
                r[i] - e ||
                (n ? this.value[i].endSide : this.value[i].startSide) - t;
            if (i == o) return a >= 0 ? o : s;
            a >= 0 ? (s = i) : (o = i + 1);
          }
        }
        between(e, t, n, i) {
          for (
            let r = this.findIndex(t, -1e9, !0),
              o = this.findIndex(n, 1e9, !1, r);
            r < o;
            r++
          )
            if (!1 === i(this.from[r] + e, this.to[r] + e, this.value[r]))
              return !1;
        }
        map(e, t) {
          let n = [],
            i = [],
            r = [],
            o = -1,
            s = -1;
          for (let a = 0; a < this.value.length; a++) {
            let l,
              h,
              c = this.value[a],
              u = this.from[a] + e,
              f = this.to[a] + e;
            if (u == f) {
              let e = t.mapPos(u, c.startSide, c.mapMode);
              if (null == e) continue;
              l = h = e;
            } else if (
              ((l = t.mapPos(u, c.startSide)),
              (h = t.mapPos(f, c.endSide)),
              l > h || (l == h && c.startSide > 0 && c.endSide <= 0))
            )
              continue;
            (h - l || c.endSide - c.startSide) < 0 ||
              (o < 0 && (o = l),
              c.point && (s = Math.max(s, h - l)),
              n.push(c),
              i.push(l - o),
              r.push(h - o));
          }
          return {
            mapped: n.length ? new a(i, r, n, s) : null,
            pos: o,
          };
        }
      }
      class l {
        constructor(e, t, n = l.empty, i) {
          (this.chunkPos = e),
            (this.chunk = t),
            (this.nextLayer = n),
            (this.maxPoint = i);
        }
        get length() {
          let e = this.chunk.length - 1;
          return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
        }
        get size() {
          if (this.isEmpty) return 0;
          let e = this.nextLayer.size;
          for (let t of this.chunk) e += t.value.length;
          return e;
        }
        chunkEnd(e) {
          return this.chunkPos[e] + this.chunk[e].length;
        }
        update(e) {
          let {
              add: t = [],
              sort: n = !1,
              filterFrom: i = 0,
              filterTo: r = this.length,
            } = e,
            a = e.filter;
          if (0 == t.length && !a) return this;
          if ((n && t.slice().sort(s), this.isEmpty))
            return t.length ? l.of(t) : this;
          let c = new u(this, null, -1).goto(0),
            f = 0,
            d = [],
            p = new h();
          for (; c.value || f < t.length; )
            if (
              f < t.length &&
              (c.from - t[f].from || c.startSide - t[f].value.startSide) >= 0
            ) {
              let e = t[f++];
              p.addInner(e.from, e.to, e.value) || d.push(e);
            } else
              1 == c.rangeIndex &&
              c.chunkIndex < this.chunk.length &&
              (f == t.length || this.chunkEnd(c.chunkIndex) < t[f].from) &&
              (!a ||
                i > this.chunkEnd(c.chunkIndex) ||
                r < this.chunkPos[c.chunkIndex]) &&
              p.addChunk(this.chunkPos[c.chunkIndex], this.chunk[c.chunkIndex])
                ? c.nextChunk()
                : ((!a || i > c.to || r < c.from || a(c.from, c.to, c.value)) &&
                    (p.addInner(c.from, c.to, c.value) ||
                      d.push(new o(c.from, c.to, c.value))),
                  c.next());
          return p.finishInner(
            this.nextLayer.isEmpty && !d.length
              ? l.empty
              : this.nextLayer.update({
                  add: d,
                  filter: a,
                  filterFrom: i,
                  filterTo: r,
                })
          );
        }
        map(e) {
          if (0 == e.length || this.isEmpty) return this;
          let t = [],
            n = [],
            i = -1;
          for (let o = 0; o < this.chunk.length; o++) {
            let r = this.chunkPos[o],
              s = this.chunk[o],
              a = e.touchesRange(r, r + s.length);
            if (!1 === a)
              (i = Math.max(i, s.maxPoint)), t.push(s), n.push(e.mapPos(r));
            else if (!0 === a) {
              let { mapped: o, pos: a } = s.map(r, e);
              o && ((i = Math.max(i, o.maxPoint)), t.push(o), n.push(a));
            }
          }
          let r = this.nextLayer.map(e);
          return 0 == t.length ? r : new l(n, t, r, i);
        }
        between(e, t, n) {
          if (!this.isEmpty) {
            for (let i = 0; i < this.chunk.length; i++) {
              let r = this.chunkPos[i],
                o = this.chunk[i];
              if (
                t >= r &&
                e <= r + o.length &&
                !1 === o.between(r, e - r, t - r, n)
              )
                return;
            }
            this.nextLayer.between(e, t, n);
          }
        }
        iter(e = 0) {
          return f.from([this]).goto(e);
        }
        get isEmpty() {
          return this.nextLayer == this;
        }
        static iter(e, t = 0) {
          return f.from(e).goto(t);
        }
        static compare(e, t, n, i, r = -1) {
          let o = e.filter(
              (e) =>
                e.maxPoint >= 500 ||
                (!e.isEmpty && t.indexOf(e) < 0 && e.maxPoint >= r)
            ),
            s = t.filter(
              (t) =>
                t.maxPoint >= 500 ||
                (!t.isEmpty && e.indexOf(t) < 0 && t.maxPoint >= r)
            ),
            a = c(o, s),
            l = new p(o, a, r),
            h = new p(s, a, r);
          n.iterGaps((e, t, n) => m(l, e, h, t, n, i)),
            n.empty && 0 == n.length && m(l, 0, h, 0, 0, i);
        }
        static eq(e, t, n = 0, i) {
          null == i && (i = 1e9);
          let r = e.filter((e) => !e.isEmpty && t.indexOf(e) < 0),
            o = t.filter((t) => !t.isEmpty && e.indexOf(t) < 0);
          if (r.length != o.length) return !1;
          if (!r.length) return !0;
          let s = c(r, o),
            a = new p(r, s, 0).goto(n),
            l = new p(o, s, 0).goto(n);
          for (;;) {
            if (
              a.to != l.to ||
              !g(a.active, l.active) ||
              (a.point && (!l.point || !a.point.eq(l.point)))
            )
              return !1;
            if (a.to >= i) return !0;
            a.next(), l.next();
          }
        }
        static spans(e, t, n, i, r = -1) {
          let o = new p(e, null, r).goto(t),
            s = t,
            a = o.openStart;
          for (;;) {
            let e = Math.min(o.to, n);
            if (
              (o.point
                ? (i.point(s, e, o.point, o.activeForPoint(o.to), a),
                  (a = o.openEnd(e) + (o.to > e ? 1 : 0)))
                : e > s && (i.span(s, e, o.active, a), (a = o.openEnd(e))),
              o.to > n)
            )
              break;
            (s = o.to), o.next();
          }
          return a;
        }
        static of(e, t = !1) {
          let n = new h();
          for (let i of e instanceof o
            ? [e]
            : t
            ? (function (e) {
                if (e.length > 1)
                  for (let t = e[0], n = 1; n < e.length; n++) {
                    let i = e[n];
                    if (s(t, i) > 0) return e.slice().sort(s);
                    t = i;
                  }
                return e;
              })(e)
            : e)
            n.add(i.from, i.to, i.value);
          return n.finish();
        }
      }
      (l.empty = new l([], [], null, -1)), (l.empty.nextLayer = l.empty);
      class h {
        constructor() {
          (this.chunks = []),
            (this.chunkPos = []),
            (this.chunkStart = -1),
            (this.last = null),
            (this.lastFrom = -1e9),
            (this.lastTo = -1e9),
            (this.from = []),
            (this.to = []),
            (this.value = []),
            (this.maxPoint = -1),
            (this.setMaxPoint = -1),
            (this.nextLayer = null);
        }
        finishChunk(e) {
          this.chunks.push(
            new a(this.from, this.to, this.value, this.maxPoint)
          ),
            this.chunkPos.push(this.chunkStart),
            (this.chunkStart = -1),
            (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
            (this.maxPoint = -1),
            e && ((this.from = []), (this.to = []), (this.value = []));
        }
        add(e, t, n) {
          this.addInner(e, t, n) ||
            (this.nextLayer || (this.nextLayer = new h())).add(e, t, n);
        }
        addInner(e, t, n) {
          let i = e - this.lastTo || n.startSide - this.last.endSide;
          if (
            i <= 0 &&
            (e - this.lastFrom || n.startSide - this.last.startSide) < 0
          )
            throw new Error(
              'Ranges must be added sorted by `from` position and `startSide`'
            );
          return (
            !(i < 0) &&
            (250 == this.from.length && this.finishChunk(!0),
            this.chunkStart < 0 && (this.chunkStart = e),
            this.from.push(e - this.chunkStart),
            this.to.push(t - this.chunkStart),
            (this.last = n),
            (this.lastFrom = e),
            (this.lastTo = t),
            this.value.push(n),
            n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
            !0)
          );
        }
        addChunk(e, t) {
          if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
            return !1;
          this.from.length && this.finishChunk(!0),
            (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
            this.chunks.push(t),
            this.chunkPos.push(e);
          let n = t.value.length - 1;
          return (
            (this.last = t.value[n]),
            (this.lastFrom = t.from[n] + e),
            (this.lastTo = t.to[n] + e),
            !0
          );
        }
        finish() {
          return this.finishInner(l.empty);
        }
        finishInner(e) {
          if (
            (this.from.length && this.finishChunk(!1), 0 == this.chunks.length)
          )
            return e;
          let t = new l(
            this.chunkPos,
            this.chunks,
            this.nextLayer ? this.nextLayer.finishInner(e) : e,
            this.setMaxPoint
          );
          return (this.from = null), t;
        }
      }

      function c(e, t) {
        let n = new Map();
        for (let r of e)
          for (let e = 0; e < r.chunk.length; e++)
            r.chunk[e].maxPoint < 500 && n.set(r.chunk[e], r.chunkPos[e]);
        let i = new Set();
        for (let r of t)
          for (let e = 0; e < r.chunk.length; e++)
            n.get(r.chunk[e]) == r.chunkPos[e] && i.add(r.chunk[e]);
        return i;
      }
      class u {
        constructor(e, t, n, i = 0) {
          (this.layer = e),
            (this.skip = t),
            (this.minPoint = n),
            (this.rank = i);
        }
        get startSide() {
          return this.value ? this.value.startSide : 0;
        }
        get endSide() {
          return this.value ? this.value.endSide : 0;
        }
        goto(e, t = -1e9) {
          return (
            (this.chunkIndex = this.rangeIndex = 0),
            this.gotoInner(e, t, !1),
            this
          );
        }
        gotoInner(e, t, n) {
          for (; this.chunkIndex < this.layer.chunk.length; ) {
            let t = this.layer.chunk[this.chunkIndex];
            if (
              !(
                (this.skip && this.skip.has(t)) ||
                this.layer.chunkEnd(this.chunkIndex) < e ||
                t.maxPoint < this.minPoint
              )
            )
              break;
            this.chunkIndex++, (n = !1);
          }
          if (this.chunkIndex < this.layer.chunk.length) {
            let i = this.layer.chunk[this.chunkIndex].findIndex(
              e - this.layer.chunkPos[this.chunkIndex],
              t,
              !0
            );
            (!n || this.rangeIndex < i) && this.setRangeIndex(i);
          }
          this.next();
        }
        forward(e, t) {
          (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
        }
        next() {
          for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
              (this.from = this.to = 1e9), (this.value = null);
              break;
            }
            {
              let e = this.layer.chunkPos[this.chunkIndex],
                t = this.layer.chunk[this.chunkIndex],
                n = e + t.from[this.rangeIndex];
              if (
                ((this.from = n),
                (this.to = e + t.to[this.rangeIndex]),
                (this.value = t.value[this.rangeIndex]),
                this.setRangeIndex(this.rangeIndex + 1),
                this.minPoint < 0 ||
                  (this.value.point && this.to - this.from >= this.minPoint))
              )
                break;
            }
          }
        }
        setRangeIndex(e) {
          if (e == this.layer.chunk[this.chunkIndex].value.length) {
            if ((this.chunkIndex++, this.skip))
              for (
                ;
                this.chunkIndex < this.layer.chunk.length &&
                this.skip.has(this.layer.chunk[this.chunkIndex]);

              )
                this.chunkIndex++;
            this.rangeIndex = 0;
          } else this.rangeIndex = e;
        }
        nextChunk() {
          this.chunkIndex++, (this.rangeIndex = 0), this.next();
        }
        compare(e) {
          return (
            this.from - e.from ||
            this.startSide - e.startSide ||
            this.to - e.to ||
            this.endSide - e.endSide
          );
        }
      }
      class f {
        constructor(e) {
          this.heap = e;
        }
        static from(e, t = null, n = -1) {
          let i = [];
          for (let r = 0; r < e.length; r++)
            for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
              o.maxPoint >= n && i.push(new u(o, t, n, r));
          return 1 == i.length ? i[0] : new f(i);
        }
        get startSide() {
          return this.value ? this.value.startSide : 0;
        }
        goto(e, t = -1e9) {
          for (let n of this.heap) n.goto(e, t);
          for (let n = this.heap.length >> 1; n >= 0; n--) d(this.heap, n);
          return this.next(), this;
        }
        forward(e, t) {
          for (let n of this.heap) n.forward(e, t);
          for (let n = this.heap.length >> 1; n >= 0; n--) d(this.heap, n);
          (this.to - e || this.value.endSide - t) < 0 && this.next();
        }
        next() {
          if (0 == this.heap.length)
            (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
          else {
            let e = this.heap[0];
            (this.from = e.from),
              (this.to = e.to),
              (this.value = e.value),
              (this.rank = e.rank),
              e.value && e.next(),
              d(this.heap, 0);
          }
        }
      }

      function d(e, t) {
        for (let n = e[t]; ; ) {
          let i = 1 + (t << 1);
          if (i >= e.length) break;
          let r = e[i];
          if (
            (i + 1 < e.length &&
              r.compare(e[i + 1]) >= 0 &&
              ((r = e[i + 1]), i++),
            n.compare(r) < 0)
          )
            break;
          (e[i] = n), (e[t] = r), (t = i);
        }
      }
      class p {
        constructor(e, t, n) {
          (this.minPoint = n),
            (this.active = []),
            (this.activeTo = []),
            (this.activeRank = []),
            (this.minActive = -1),
            (this.point = null),
            (this.pointFrom = 0),
            (this.pointRank = 0),
            (this.to = -1e9),
            (this.endSide = 0),
            (this.openStart = -1),
            (this.cursor = f.from(e, t, n));
        }
        goto(e, t = -1e9) {
          return (
            this.cursor.goto(e, t),
            (this.active.length =
              this.activeTo.length =
              this.activeRank.length =
                0),
            (this.minActive = -1),
            (this.to = e),
            (this.endSide = t),
            (this.openStart = -1),
            this.next(),
            this
          );
        }
        forward(e, t) {
          for (
            ;
            this.minActive > -1 &&
            (this.activeTo[this.minActive] - e ||
              this.active[this.minActive].endSide - t) < 0;

          )
            this.removeActive(this.minActive);
          this.cursor.forward(e, t);
        }
        removeActive(e) {
          v(this.active, e),
            v(this.activeTo, e),
            v(this.activeRank, e),
            (this.minActive = x(this.active, this.activeTo));
        }
        addActive(e) {
          let t = 0,
            { value: n, to: i, rank: r } = this.cursor;
          for (; t < this.activeRank.length && this.activeRank[t] <= r; ) t++;
          b(this.active, t, n),
            b(this.activeTo, t, i),
            b(this.activeRank, t, r),
            e && b(e, t, this.cursor.from),
            (this.minActive = x(this.active, this.activeTo));
        }
        next() {
          let e = this.to,
            t = this.point;
          this.point = null;
          let n = this.openStart < 0 ? [] : null,
            i = 0;
          for (;;) {
            let r = this.minActive;
            if (
              r > -1 &&
              (this.activeTo[r] - this.cursor.from ||
                this.active[r].endSide - this.cursor.startSide) < 0
            ) {
              if (this.activeTo[r] > e) {
                (this.to = this.activeTo[r]),
                  (this.endSide = this.active[r].endSide);
                break;
              }
              this.removeActive(r), n && v(n, r);
            } else {
              if (!this.cursor.value) {
                this.to = this.endSide = 1e9;
                break;
              }
              if (this.cursor.from > e) {
                (this.to = this.cursor.from),
                  (this.endSide = this.cursor.startSide);
                break;
              }
              {
                let r = this.cursor.value;
                if (r.point) {
                  if (
                    !(
                      t &&
                      this.cursor.to == this.to &&
                      this.cursor.from < this.cursor.to &&
                      r.endSide == this.endSide
                    )
                  ) {
                    (this.point = r),
                      (this.pointFrom = this.cursor.from),
                      (this.pointRank = this.cursor.rank),
                      (this.to = this.cursor.to),
                      (this.endSide = r.endSide),
                      this.cursor.from < e && (i = 1),
                      this.cursor.next(),
                      this.to > e && this.forward(this.to, this.endSide);
                    break;
                  }
                  this.cursor.next();
                } else this.addActive(n), this.cursor.next();
              }
            }
          }
          if (n) {
            let t = 0;
            for (; t < n.length && n[t] < e; ) t++;
            this.openStart = t + i;
          }
        }
        activeForPoint(e) {
          if (!this.active.length) return this.active;
          let t = [];
          for (
            let n = this.active.length - 1;
            n >= 0 && !(this.activeRank[n] < this.pointRank);
            n--
          )
            (this.activeTo[n] > e ||
              (this.activeTo[n] == e &&
                this.active[n].endSide >= this.point.endSide)) &&
              t.push(this.active[n]);
          return t.reverse();
        }
        openEnd(e) {
          let t = 0;
          for (
            let n = this.activeTo.length - 1;
            n >= 0 && this.activeTo[n] > e;
            n--
          )
            t++;
          return t;
        }
      }

      function m(e, t, n, i, r, o) {
        e.goto(t), n.goto(i);
        let s = i + r,
          a = i,
          l = i - t;
        for (;;) {
          let t = e.to + l - n.to || e.endSide - n.endSide,
            i = t < 0 ? e.to + l : n.to,
            r = Math.min(i, s);
          if (
            (e.point || n.point
              ? (e.point &&
                  n.point &&
                  (e.point == n.point || e.point.eq(n.point)) &&
                  g(e.activeForPoint(e.to + l), n.activeForPoint(n.to))) ||
                o.comparePoint(a, r, e.point, n.point)
              : r > a &&
                !g(e.active, n.active) &&
                o.compareRange(a, r, e.active, n.active),
            i > s)
          )
            break;
          (a = i), t <= 0 && e.next(), t >= 0 && n.next();
        }
      }

      function g(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (e[n] != t[n] && !e[n].eq(t[n])) return !1;
        return !0;
      }

      function v(e, t) {
        for (let n = t, i = e.length - 1; n < i; n++) e[n] = e[n + 1];
        e.pop();
      }

      function b(e, t, n) {
        for (let i = e.length - 1; i >= t; i--) e[i + 1] = e[i];
        e[t] = n;
      }

      function x(e, t) {
        let n = -1,
          i = 1e9;
        for (let r = 0; r < t.length; r++)
          (t[r] - i || e[r].endSide - e[n].endSide) < 0 &&
            ((n = r), (i = t[r]));
        return n;
      }
    },
    'yqQ+': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return E;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return h;
        }),
        n.d(t, 'd', function () {
          return S;
        }),
        n.d(t, 'e', function () {
          return k;
        }),
        n.d(t, 'f', function () {
          return m;
        }),
        n.d(t, 'g', function () {
          return z;
        }),
        n.d(t, 'h', function () {
          return l;
        }),
        n.d(t, 'i', function () {
          return N;
        }),
        n.d(t, 'j', function () {
          return q;
        }),
        n.d(t, 'k', function () {
          return _;
        }),
        n.d(t, 'l', function () {
          return W;
        }),
        n.d(t, 'm', function () {
          return U;
        }),
        n.d(t, 'n', function () {
          return O;
        }),
        n.d(t, 'o', function () {
          return M;
        }),
        n.d(t, 'p', function () {
          return I;
        }),
        n.d(t, 'q', function () {
          return F;
        }),
        n.d(t, 'r', function () {
          return C;
        }),
        n.d(t, 's', function () {
          return j;
        }),
        n.d(t, 't', function () {
          return A;
        }),
        n.d(t, 'u', function () {
          return y;
        }),
        n.d(t, 'v', function () {
          return a;
        }),
        n.d(t, 'w', function () {
          return f;
        });
      var i = n('lmln'),
        r = n('4eob'),
        o = n('AtEE'),
        s = n('uZp5');
      const a = new i.b();

      function l(e) {
        return r.h.define({
          combine: e ? (t) => t.concat(e) : void 0,
        });
      }
      class h {
        constructor(e, t, n, i = []) {
          (this.data = e),
            (this.topNode = n),
            r.g.prototype.hasOwnProperty('tree') ||
              Object.defineProperty(r.g.prototype, 'tree', {
                get() {
                  return f(this);
                },
              }),
            (this.parser = t),
            (this.extension = [
              y.of(this),
              r.g.languageData.of((e, t, n) => e.facet(c(e, t, n))),
            ].concat(i));
        }
        isActiveAt(e, t, n = -1) {
          return c(e, t, n) == this.data;
        }
        findRegions(e) {
          let t = e.facet(y);
          if ((null === t || void 0 === t ? void 0 : t.data) == this.data)
            return [
              {
                from: 0,
                to: e.doc.length,
              },
            ];
          if (!t || !t.allowsNesting) return [];
          let n = [],
            r = (e, t) => {
              if (e.prop(a) == this.data)
                return void n.push({
                  from: t,
                  to: t + e.length,
                });
              let o = e.prop(i.b.mounted);
              if (o) {
                if (o.tree.prop(a) == this.data) {
                  if (o.overlay)
                    for (let e of o.overlay)
                      n.push({
                        from: e.from + t,
                        to: e.to + t,
                      });
                  else
                    n.push({
                      from: t,
                      to: t + e.length,
                    });
                  return;
                }
                if (o.overlay) {
                  let e = n.length;
                  if ((r(o.tree, o.overlay[0].from + t), n.length > e)) return;
                }
              }
              for (let n = 0; n < e.children.length; n++) {
                let o = e.children[n];
                o instanceof i.f && r(o, e.positions[n] + t);
              }
            };
          return r(f(e), 0), n;
        }
        get allowsNesting() {
          return !0;
        }
      }

      function c(e, t, n) {
        let i = e.facet(y);
        if (!i) return null;
        let r = i.data;
        if (i.allowsNesting)
          for (let o = f(e).topNode; o; o = o.enter(t, n, !0, !1))
            r = o.type.prop(a) || r;
        return r;
      }
      h.setState = r.k.define();
      class u extends h {
        constructor(e, t) {
          super(e, t, t.topNode), (this.parser = t);
        }
        static define(e) {
          let t = l(e.languageData);
          return new u(
            t,
            e.parser.configure({
              props: [a.add((e) => (e.isTop ? t : void 0))],
            })
          );
        }
        configure(e) {
          return new u(this.data, this.parser.configure(e));
        }
        get allowsNesting() {
          return this.parser.wrappers.length > 0;
        }
      }

      function f(e) {
        let t = e.field(h.state, !1);
        return t ? t.tree : i.f.empty;
      }
      class d {
        constructor(e, t = e.length) {
          (this.doc = e),
            (this.length = t),
            (this.cursorPos = 0),
            (this.string = ''),
            (this.cursor = e.iter());
        }
        syncTo(e) {
          return (
            (this.string = this.cursor.next(e - this.cursorPos).value),
            (this.cursorPos = e + this.string.length),
            this.cursorPos - this.string.length
          );
        }
        chunk(e) {
          return this.syncTo(e), this.string;
        }
        get lineChunks() {
          return !0;
        }
        read(e, t) {
          let n = this.cursorPos - this.string.length;
          return e < n || t >= this.cursorPos
            ? this.doc.sliceString(e, t)
            : this.string.slice(e - n, t - n);
        }
      }
      let p = null;
      class m {
        constructor(e, t, n = [], i, r, o, s, a) {
          (this.parser = e),
            (this.state = t),
            (this.fragments = n),
            (this.tree = i),
            (this.treeLen = r),
            (this.viewport = o),
            (this.skipped = s),
            (this.scheduleOn = a),
            (this.parse = null),
            (this.tempSkipped = []);
        }
        startParse() {
          return this.parser.startParse(new d(this.state.doc), this.fragments);
        }
        work(e, t) {
          return (
            null != t && t >= this.state.doc.length && (t = void 0),
            this.tree != i.f.empty &&
            (null == t
              ? this.treeLen == this.state.doc.length
              : this.treeLen >= t)
              ? (this.takeTree(), !0)
              : this.withContext(() => {
                  var n;
                  this.parse || (this.parse = this.startParse()),
                    null != t &&
                      (null == this.parse.stoppedAt ||
                        this.parse.stoppedAt > t) &&
                      t < this.state.doc.length &&
                      this.parse.stopAt(t);
                  let r = Date.now() + e;
                  for (;;) {
                    let e = this.parse.advance();
                    if (e) {
                      if (
                        ((this.fragments = this.withoutTempSkipped(
                          i.g.addTree(
                            e,
                            this.fragments,
                            null != this.parse.stoppedAt
                          )
                        )),
                        (this.treeLen =
                          null !== (n = this.parse.stoppedAt) && void 0 !== n
                            ? n
                            : this.state.doc.length),
                        (this.tree = e),
                        (this.parse = null),
                        !(
                          this.treeLen <
                          (null !== t && void 0 !== t
                            ? t
                            : this.state.doc.length)
                        ))
                      )
                        return !0;
                      this.parse = this.startParse();
                    }
                    if (Date.now() > r) return !1;
                  }
                })
          );
        }
        takeTree() {
          let e, t;
          this.parse &&
            (e = this.parse.parsedPos) > this.treeLen &&
            ((null == this.parse.stoppedAt || this.parse.stoppedAt > e) &&
              this.parse.stopAt(e),
            this.withContext(() => {
              for (; !(t = this.parse.advance()); );
            }),
            (this.tree = t),
            (this.fragments = this.withoutTempSkipped(
              i.g.addTree(this.tree, this.fragments, !0)
            )),
            (this.parse = null));
        }
        withContext(e) {
          let t = p;
          p = this;
          try {
            return e();
          } finally {
            p = t;
          }
        }
        withoutTempSkipped(e) {
          for (let t; (t = this.tempSkipped.pop()); ) e = g(e, t.from, t.to);
          return e;
        }
        changes(e, t) {
          let {
            fragments: n,
            tree: r,
            treeLen: o,
            viewport: s,
            skipped: a,
          } = this;
          if ((this.takeTree(), !e.empty)) {
            let t = [];
            if (
              (e.iterChangedRanges((e, n, i, r) =>
                t.push({
                  fromA: e,
                  toA: n,
                  fromB: i,
                  toB: r,
                })
              ),
              (n = i.g.applyChanges(n, t)),
              (r = i.f.empty),
              (o = 0),
              (s = {
                from: e.mapPos(s.from, -1),
                to: e.mapPos(s.to, 1),
              }),
              this.skipped.length)
            ) {
              a = [];
              for (let t of this.skipped) {
                let n = e.mapPos(t.from, 1),
                  i = e.mapPos(t.to, -1);
                n < i &&
                  a.push({
                    from: n,
                    to: i,
                  });
              }
            }
          }
          return new m(this.parser, t, n, r, o, s, a, this.scheduleOn);
        }
        updateViewport(e) {
          this.viewport = e;
          let t = this.skipped.length;
          for (let n = 0; n < this.skipped.length; n++) {
            let { from: t, to: i } = this.skipped[n];
            t < e.to &&
              i > e.from &&
              ((this.fragments = g(this.fragments, t, i)),
              this.skipped.splice(n--, 1));
          }
          return this.skipped.length < t;
        }
        reset() {
          this.parse && (this.takeTree(), (this.parse = null));
        }
        skipUntilInView(e, t) {
          this.skipped.push({
            from: e,
            to: t,
          });
        }
        static getSkippingParser(e) {
          return new (class extends i.e {
            createParse(t, n, r) {
              let o = r[0].from,
                s = r[r.length - 1].to;
              return {
                parsedPos: o,
                advance() {
                  let t = p;
                  if (t) {
                    for (let e of r) t.tempSkipped.push(e);
                    e &&
                      (t.scheduleOn = t.scheduleOn
                        ? Promise.all([t.scheduleOn, e])
                        : e);
                  }
                  return (this.parsedPos = s), new i.f(i.d.none, [], [], s - o);
                },
                stoppedAt: null,
                stopAt() {},
              };
            }
          })();
        }
        movedPast(e) {
          return this.treeLen < e && this.parse && this.parse.parsedPos >= e;
        }
        static get() {
          return p;
        }
      }

      function g(e, t, n) {
        return i.g.applyChanges(e, [
          {
            fromA: t,
            toA: n,
            fromB: t,
            toB: n,
          },
        ]);
      }
      class v {
        constructor(e) {
          (this.context = e), (this.tree = e.tree);
        }
        apply(e) {
          if (!e.docChanged) return this;
          let t = this.context.changes(e.changes, e.state),
            n =
              this.context.treeLen == e.startState.doc.length
                ? void 0
                : Math.max(
                    e.changes.mapPos(this.context.treeLen),
                    t.viewport.to
                  );
          return t.work(25, n) || t.takeTree(), new v(t);
        }
        static init(e) {
          let t = new m(
            e.facet(y).parser,
            e,
            [],
            i.f.empty,
            0,
            {
              from: 0,
              to: e.doc.length,
            },
            [],
            null
          );
          return t.work(25) || t.takeTree(), new v(t);
        }
      }
      h.state = r.l.define({
        create: v.init,
        update(e, t) {
          for (let n of t.effects) if (n.is(h.setState)) return n.value;
          return t.startState.facet(y) != t.state.facet(y)
            ? v.init(t.state)
            : e.apply(t);
        },
      });
      let b =
          ('undefined' != typeof window && window.requestIdleCallback) ||
          ((e, { timeout: t }) => setTimeout(e, t)),
        x =
          ('undefined' != typeof window && window.cancelIdleCallback) ||
          clearTimeout;
      const w = o.f.fromClass(
          class {
            constructor(e) {
              (this.view = e),
                (this.working = -1),
                (this.chunkEnd = -1),
                (this.chunkBudget = -1),
                (this.work = this.work.bind(this)),
                this.scheduleWork();
            }
            update(e) {
              let t = this.view.state.field(h.state).context;
              e.viewportChanged &&
                (t.updateViewport(e.view.viewport) && t.reset(),
                this.view.viewport.to > t.treeLen && this.scheduleWork()),
                e.docChanged &&
                  (this.view.hasFocus && (this.chunkBudget += 50),
                  this.scheduleWork()),
                this.checkAsyncSchedule(t);
            }
            scheduleWork() {
              if (this.working > -1) return;
              let { state: e } = this.view,
                t = e.field(h.state),
                n = t.context.fragments;
              (t.tree == t.context.tree &&
                t.context.treeLen >= e.doc.length &&
                n.length &&
                0 == n[0].from &&
                n[0].to >= e.doc.length) ||
                (this.working = b(this.work, {
                  timeout: 500,
                }));
            }
            work(e) {
              this.working = -1;
              let t = Date.now();
              if (
                (this.chunkEnd < t &&
                  (this.chunkEnd < 0 || this.view.hasFocus) &&
                  ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
                this.chunkBudget <= 0)
              )
                return;
              let {
                  state: n,
                  viewport: { to: i },
                } = this.view,
                r = n.field(h.state);
              if (r.tree == r.context.tree && r.context.treeLen >= i + 1e6)
                return;
              let o = Math.min(
                  this.chunkBudget,
                  e ? Math.max(25, e.timeRemaining()) : 100
                ),
                s = r.context.work(o, i + 1e6);
              (this.chunkBudget -= Date.now() - t),
                (s || this.chunkBudget <= 0 || r.context.movedPast(i)) &&
                  (r.context.takeTree(),
                  this.view.dispatch({
                    effects: h.setState.of(new v(r.context)),
                  })),
                !s && this.chunkBudget > 0 && this.scheduleWork(),
                this.checkAsyncSchedule(r.context);
            }
            checkAsyncSchedule(e) {
              e.scheduleOn &&
                (e.scheduleOn.then(() => this.scheduleWork()),
                (e.scheduleOn = null));
            }
            destroy() {
              this.working >= 0 && x(this.working);
            }
          },
          {
            eventHandlers: {
              focus() {
                this.scheduleWork();
              },
            },
          }
        ),
        y = r.h.define({
          combine: (e) => (e.length ? e[0] : null),
          enables: [h.state, w],
        });
      class k {
        constructor(e, t = []) {
          (this.language = e), (this.support = t), (this.extension = [e, t]);
        }
      }
      class S {
        constructor(e, t, n, i, r) {
          (this.name = e),
            (this.alias = t),
            (this.extensions = n),
            (this.filename = i),
            (this.loadFunc = r),
            (this.support = void 0),
            (this.loading = null);
        }
        load() {
          return (
            this.loading ||
            (this.loading = this.loadFunc().then(
              (e) => (this.support = e),
              (e) => {
                throw ((this.loading = null), e);
              }
            ))
          );
        }
        static of(e) {
          return new S(
            e.name,
            (e.alias || []).concat(e.name).map((e) => e.toLowerCase()),
            e.extensions || [],
            e.filename,
            e.load
          );
        }
        static matchFilename(e, t) {
          for (let i of e) if (i.filename && i.filename.test(t)) return i;
          let n = /\.([^.]+)$/.exec(t);
          if (n) for (let i of e) if (i.extensions.indexOf(n[1]) > -1) return i;
          return null;
        }
        static matchLanguageName(e, t, n = !0) {
          t = t.toLowerCase();
          for (let i of e) if (i.alias.some((e) => e == t)) return i;
          if (n)
            for (let i of e)
              for (let e of i.alias) {
                let n = t.indexOf(e);
                if (
                  n > -1 &&
                  (e.length > 2 ||
                    (!/\w/.test(t[n - 1]) && !/\w/.test(t[n + e.length])))
                )
                  return i;
              }
          return null;
        }
      }
      const C = r.h.define(),
        A = r.h.define({
          combine: (e) => {
            if (!e.length) return '  ';
            if (!/^(?: +|\t+)$/.test(e[0]))
              throw new Error('Invalid indent unit: ' + JSON.stringify(e[0]));
            return e[0];
          },
        });

      function O(e) {
        let t = e.facet(A);
        return 9 == t.charCodeAt(0) ? e.tabSize * t.length : t.length;
      }

      function j(e, t) {
        let n = '',
          i = e.tabSize;
        if (9 == e.facet(A).charCodeAt(0))
          for (; t >= i; ) (n += '\t'), (t -= i);
        for (let r = 0; r < t; r++) n += ' ';
        return n;
      }

      function M(e, t) {
        e instanceof r.g && (e = new E(e));
        for (let i of e.state.facet(C)) {
          let n = i(e, t);
          if (null != n) return n;
        }
        let n = f(e.state);
        return n
          ? (function (e, t, n) {
              let i = t.resolveInner(n);
              for (let r = i, o = n; ; ) {
                let e = r.childBefore(o);
                if (!e) break;
                e.type.isError && e.from == e.to
                  ? ((i = r), (o = e.from))
                  : ((r = e), (o = r.to + 1));
              }
              return T(i, n, e);
            })(e, n, t)
          : null;
      }
      class E {
        constructor(e, t = {}) {
          (this.state = e), (this.options = t), (this.unit = O(e));
        }
        lineAt(e, t = 1) {
          let n = this.state.doc.lineAt(e),
            { simulateBreak: i } = this.options;
          return null != i && i >= n.from && i <= n.to
            ? (t < 0 ? i < e : i <= e)
              ? {
                  text: n.text.slice(i - n.from),
                  from: i,
                }
              : {
                  text: n.text.slice(0, i - n.from),
                  from: n.from,
                }
            : n;
        }
        textAfterPos(e, t = 1) {
          if (
            this.options.simulateDoubleBreak &&
            e == this.options.simulateBreak
          )
            return '';
          let { text: n, from: i } = this.lineAt(e, t);
          return n.slice(e - i, Math.min(n.length, e + 100 - i));
        }
        column(e, t = 1) {
          let { text: n, from: i } = this.lineAt(e, t),
            r = this.countColumn(n, e - i),
            o = this.options.overrideIndentation
              ? this.options.overrideIndentation(i)
              : -1;
          return o > -1 && (r += o - this.countColumn(n, n.search(/\S|$/))), r;
        }
        countColumn(e, t = e.length) {
          return Object(s.d)(e, this.state.tabSize, t);
        }
        lineIndent(e, t = 1) {
          let { text: n, from: i } = this.lineAt(e, t),
            r = this.options.overrideIndentation;
          if (r) {
            let e = r(i);
            if (e > -1) return e;
          }
          return this.countColumn(n, n.search(/\S|$/));
        }
        get simulatedBreak() {
          return this.options.simulateBreak || null;
        }
      }
      const I = new i.b();

      function L(e) {
        let t = e.type.prop(I);
        if (t) return t;
        let n,
          r = e.firstChild;
        if (r && (n = r.type.prop(i.b.closedBy))) {
          let t = e.lastChild,
            i = t && n.indexOf(t.name) > -1;
          return (e) =>
            B(
              e,
              !0,
              1,
              void 0,
              i &&
                !(function (e) {
                  return (
                    e.pos == e.options.simulateBreak &&
                    e.options.simulateDoubleBreak
                  );
                })(e)
                ? t.from
                : void 0
            );
        }
        return null == e.parent ? P : null;
      }

      function T(e, t, n) {
        for (; e; e = e.parent) {
          let i = L(e);
          if (i) return i(new D(n, t, e));
        }
        return null;
      }

      function P() {
        return 0;
      }
      class D extends E {
        constructor(e, t, n) {
          super(e.state, e.options),
            (this.base = e),
            (this.pos = t),
            (this.node = n);
        }
        get textAfter() {
          return this.textAfterPos(this.pos);
        }
        get baseIndent() {
          let e = this.state.doc.lineAt(this.node.from);
          for (;;) {
            let t = this.node.resolve(e.from);
            for (; t.parent && t.parent.from == t.from; ) t = t.parent;
            if (R(t, this.node)) break;
            e = this.state.doc.lineAt(t.from);
          }
          return this.lineIndent(e.from);
        }
        continue() {
          let e = this.node.parent;
          return e ? T(e, this.pos, this.base) : 0;
        }
      }

      function R(e, t) {
        for (let n = t; n; n = n.parent) if (e == n) return !0;
        return !1;
      }

      function N({ closing: e, align: t = !0, units: n = 1 }) {
        return (i) => B(i, t, n, e);
      }

      function B(e, t, n, i, r) {
        let o = e.textAfter,
          s = o.match(/^\s*/)[0].length,
          a = (i && o.slice(s, s + i.length) == i) || r == e.pos + s,
          l = t
            ? (function (e) {
                let t = e.node,
                  n = t.childAfter(t.from),
                  i = t.lastChild;
                if (!n) return null;
                let r = e.options.simulateBreak,
                  o = e.state.doc.lineAt(n.from),
                  s = null == r || r <= o.from ? o.to : Math.min(o.to, r);
                for (let a = n.to; ; ) {
                  let e = t.childAfter(a);
                  if (!e || e == i) return null;
                  if (!e.type.isSkipped) return e.from < s ? n : null;
                  a = e.to;
                }
              })(e)
            : null;
        return l
          ? a
            ? e.column(l.from)
            : e.column(l.to)
          : e.baseIndent + (a ? 0 : e.unit * n);
      }
      const q = (e) => e.baseIndent;

      function z({ except: e, units: t = 1 } = {}) {
        return (n) => {
          let i = e && e.test(n.textAfter);
          return n.baseIndent + (i ? 0 : t * n.unit);
        };
      }

      function F() {
        return r.g.transactionFilter.of((e) => {
          if (!e.docChanged || !e.isUserEvent('input.type')) return e;
          let t = e.startState.languageDataAt(
            'indentOnInput',
            e.startState.selection.main.head
          );
          if (!t.length) return e;
          let n = e.newDoc,
            { head: i } = e.newSelection.main,
            r = n.lineAt(i);
          if (i > r.from + 200) return e;
          let o = n.sliceString(r.from, i);
          if (!t.some((e) => e.test(o))) return e;
          let { state: s } = e,
            a = -1,
            l = [];
          for (let { head: h } of s.selection.ranges) {
            let e = s.doc.lineAt(h);
            if (e.from == a) continue;
            a = e.from;
            let t = M(s, e.from);
            if (null == t) continue;
            let n = /^\s*/.exec(e.text)[0],
              i = j(s, t);
            n != i &&
              l.push({
                from: e.from,
                to: e.from + n.length,
                insert: i,
              });
          }
          return l.length
            ? [
                e,
                {
                  changes: l,
                  sequential: !0,
                },
              ]
            : e;
        });
      }
      const V = r.h.define(),
        W = new i.b();

      function _(e) {
        let t = e.firstChild,
          n = e.lastChild;
        return t && t.to < n.from
          ? {
              from: t.to,
              to: n.type.isError ? e.to : n.from,
            }
          : null;
      }

      function U(e, t, n) {
        for (let i of e.facet(V)) {
          let r = i(e, t, n);
          if (r) return r;
        }
        return (function (e, t, n) {
          let i = f(e);
          if (0 == i.length) return null;
          let r = null;
          for (let o = i.resolveInner(n); o; o = o.parent) {
            if (o.to <= n || o.from > n) continue;
            if (r && o.from < t) break;
            let i = o.type.prop(W);
            if (i) {
              let s = i(o, e);
              s && s.from <= n && s.from >= t && s.to > n && (r = s);
            }
          }
          return r;
        })(e, t, n);
      }
    },
  },
]);
//# sourceMappingURL=d3c0e873ab6d5476c30f80e738e12f41732df9b3.2ed98f24a34a821488b2.js.map

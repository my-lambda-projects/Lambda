(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [272],
  {
    GSh6: function (t, e, s) {
      'use strict';
      s.r(e),
        s.d(e, 'StreamLanguage', function () {
          return l;
        }),
        s.d(e, 'StringStream', function () {
          return a;
        });
      var i = s('lmln'),
        n = s('ubVE'),
        r = s('yqQ+');

      function h(t, e, s, i = 0, n = 0) {
        null == e && -1 == (e = t.search(/[^\s\u00a0]/)) && (e = t.length);
        let r = n;
        for (let h = i; h < e; h++)
          9 == t.charCodeAt(h) ? (r += s - (r % s)) : r++;
        return r;
      }
      class a {
        constructor(t, e, s) {
          (this.string = t),
            (this.tabSize = e),
            (this.indentUnit = s),
            (this.pos = 0),
            (this.start = 0),
            (this.lastColumnPos = 0),
            (this.lastColumnValue = 0);
        }
        eol() {
          return this.pos >= this.string.length;
        }
        sol() {
          return 0 == this.pos;
        }
        peek() {
          return this.string.charAt(this.pos) || void 0;
        }
        next() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++);
        }
        eat(t) {
          let e,
            s = this.string.charAt(this.pos);
          if (
            ((e =
              'string' == typeof t
                ? s == t
                : s && (t instanceof RegExp ? t.test(s) : t(s))),
            e)
          )
            return ++this.pos, s;
        }
        eatWhile(t) {
          let e = this.pos;
          for (; this.eat(t); );
          return this.pos > e;
        }
        eatSpace() {
          let t = this.pos;
          for (; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
          return this.pos > t;
        }
        skipToEnd() {
          this.pos = this.string.length;
        }
        skipTo(t) {
          let e = this.string.indexOf(t, this.pos);
          if (e > -1) return (this.pos = e), !0;
        }
        backUp(t) {
          this.pos -= t;
        }
        column() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = h(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue
          );
        }
        indentation() {
          return h(this.string, null, this.tabSize);
        }
        match(t, e, s) {
          if ('string' == typeof t) {
            let i = (t) => (s ? t.toLowerCase() : t);
            return i(this.string.substr(this.pos, t.length)) == i(t)
              ? (!1 !== e && (this.pos += t.length), !0)
              : null;
          }
          {
            let s = this.string.slice(this.pos).match(t);
            return s && s.index > 0
              ? null
              : (s && !1 !== e && (this.pos += s[0].length), s);
          }
        }
        current() {
          return this.string.slice(this.start, this.pos);
        }
      }

      function o(t) {
        if ('object' != typeof t) return t;
        let e = {};
        for (let s in t) {
          let i = t[s];
          e[s] = i instanceof Array ? i.slice() : i;
        }
        return e;
      }
      class l extends r.c {
        constructor(t) {
          let e,
            s = Object(r.h)(t.languageData),
            n = {
              token: (h = t).token,
              blankLine: h.blankLine || (() => {}),
              startState: h.startState || (() => !0),
              copyState: h.copyState || o,
              indent: h.indent || (() => null),
              languageData: h.languageData || {},
            };
          var h;
          super(
            s,
            new (class extends i.e {
              createParse(t, s, i) {
                return new f(e, t, s, i);
              }
            })(),
            (function (t) {
              let e = i.d.define({
                id: g.length,
                name: 'Document',
                props: [r.v.add(() => t)],
              });
              return g.push(e), e;
            })(s),
            [r.r.of((t, e) => this.getIndent(t, e))]
          ),
            (e = this),
            (this.streamParser = n),
            (this.stateAfter = new i.b({
              perNode: !0,
            }));
        }
        static define(t) {
          return new l(t);
        }
        getIndent(t, e) {
          let s = Object(r.w)(t.state),
            i = s.resolve(e);
          for (; i && i.type != this.topNode; ) i = i.parent;
          if (!i) return null;
          let n,
            h,
            o = u(this, s, 0, i.from, e);
          if (
            (o
              ? ((h = o.state), (n = o.pos + 1))
              : ((h = this.streamParser.startState(t.unit)), (n = 0)),
            e - n > 1e4)
          )
            return null;
          for (; n < e; ) {
            let s = t.state.doc.lineAt(n),
              i = Math.min(e, s.to);
            if (s.length) {
              let e = new a(s.text, t.state.tabSize, t.unit);
              for (; e.pos < i - s.from; ) c(this.streamParser.token, e, h);
            } else this.streamParser.blankLine(h, t.unit);
            if (i == e) break;
            n = s.to + 1;
          }
          let { text: l } = t.state.doc.lineAt(e);
          return this.streamParser.indent(h, /^\s*(.*)/.exec(l)[1], t);
        }
        get allowsNesting() {
          return !1;
        }
      }

      function u(t, e, s, n, r) {
        let h = s >= n && s + e.length <= r && e.prop(t.stateAfter);
        if (h)
          return {
            state: t.streamParser.copyState(h),
            pos: s + e.length,
          };
        for (let a = e.children.length - 1; a >= 0; a--) {
          let h = e.children[a],
            o = s + e.positions[a],
            l = h instanceof i.f && o < r && u(t, h, o, n, r);
          if (l) return l;
        }
        return null;
      }

      function p(t, e, s, n, r) {
        if (r && s <= 0 && n >= e.length) return e;
        r || e.type != t.topNode || (r = !0);
        for (let h = e.children.length - 1; h >= 0; h--) {
          let a,
            o = e.positions[h] + s,
            l = e.children[h];
          if (o < n && l instanceof i.f) {
            if (!(a = p(t, l, s - o, n - o, r))) break;
            return r
              ? new i.f(
                  e.type,
                  e.children.slice(0, h).concat(a),
                  e.positions.slice(0, h + 1),
                  o + a.length
                )
              : a;
          }
        }
        return null;
      }
      class f {
        constructor(t, e, s, n) {
          (this.lang = t),
            (this.input = e),
            (this.fragments = s),
            (this.ranges = n),
            (this.stoppedAt = null),
            (this.chunks = []),
            (this.chunkPos = []),
            (this.chunk = []),
            (this.chunkReused = void 0),
            (this.rangeIndex = 0),
            (this.to = n[n.length - 1].to);
          let h = r.f.get(),
            a = n[0].from,
            { state: o, tree: l } = (function (t, e, s, n) {
              for (let i of e) {
                let e,
                  n =
                    i.from <= s &&
                    i.to > s &&
                    u(t, i.tree, 0 - i.offset, s, i.to);
                if (n && (e = p(t, i.tree, s + i.offset, n.pos + i.offset, !1)))
                  return {
                    state: n.state,
                    tree: e,
                  };
              }
              return {
                state: t.streamParser.startState(n ? Object(r.n)(n) : 4),
                tree: i.f.empty,
              };
            })(t, s, a, null === h || void 0 === h ? void 0 : h.state);
          (this.state = o),
            (this.parsedPos = this.chunkStart = a + l.length),
            l.length && (this.chunks.push(l), this.chunkPos.push(0)),
            h &&
              this.parsedPos < h.viewport.from - 1e5 &&
              ((this.state = this.lang.streamParser.startState(
                Object(r.n)(h.state)
              )),
              h.skipUntilInView(this.parsedPos, h.viewport.from),
              (this.parsedPos = h.viewport.from));
        }
        advance() {
          let t = r.f.get(),
            e = null == this.stoppedAt ? this.to : this.stoppedAt,
            s = Math.min(e, this.chunkStart + 2048);
          for (t && (s = Math.min(s, t.viewport.to)); this.parsedPos < s; )
            this.parseLine(t);
          return (
            this.chunkStart < this.parsedPos && this.finishChunk(),
            this.parsedPos >= e
              ? this.finish()
              : t && this.parsedPos > t.viewport.to
              ? (t.skipUntilInView(this.parsedPos, e), this.finish())
              : null
          );
        }
        stopAt(t) {
          this.stoppedAt = t;
        }
        lineAfter(t) {
          let e = this.input.chunk(t);
          if (this.input.lineChunks) '\n' == e && (e = '');
          else {
            let t = e.indexOf('\n');
            t > -1 && (e = e.slice(0, t));
          }
          return t + e.length <= this.to ? e : e.slice(0, this.to - t);
        }
        nextLine() {
          let t = this.parsedPos,
            e = this.lineAfter(t),
            s = t + e.length;
          for (let i = this.rangeIndex; ; ) {
            let t = this.ranges[i].to;
            if (t >= s) break;
            if (
              ((e = e.slice(0, t - (s - e.length))),
              i++,
              i == this.ranges.length)
            )
              break;
            let n = this.ranges[i].from,
              r = this.lineAfter(n);
            (e += r), (s = n + r.length);
          }
          return {
            line: e,
            end: s,
          };
        }
        skipGapsTo(t, e, s) {
          for (;;) {
            let i = this.ranges[this.rangeIndex].to,
              n = t + e;
            if (s > 0 ? i > n : i >= n) break;
            e += this.ranges[++this.rangeIndex].from - i;
          }
          return e;
        }
        emitToken(t, e, s, i, n) {
          if (this.ranges.length > 1) {
            e += n = this.skipGapsTo(e, n, 1);
            let t = this.chunk.length;
            (s += n = this.skipGapsTo(s, n, -1)), (i += this.chunk.length - t);
          }
          return this.chunk.push(t, e, s, i), n;
        }
        parseLine(t) {
          let { line: e, end: s } = this.nextLine(),
            i = 0,
            { streamParser: n } = this.lang,
            h = new a(e, t ? t.state.tabSize : 4, t ? Object(r.n)(t.state) : 2);
          if (h.eol()) n.blankLine(this.state, h.indentUnit);
          else
            for (; !h.eol(); ) {
              let t = c(n.token, h, this.state);
              t &&
                (i = this.emitToken(
                  b(t),
                  this.parsedPos + h.start,
                  this.parsedPos + h.pos,
                  4,
                  i
                ));
            }
          (this.parsedPos = s), this.parsedPos < this.to && this.parsedPos++;
        }
        finishChunk() {
          let t = i.f.build({
            buffer: this.chunk,
            start: this.chunkStart,
            length: this.parsedPos - this.chunkStart,
            nodeSet: m,
            topID: 0,
            maxBufferLength: 2048,
            reused: this.chunkReused,
          });
          (t = new i.f(t.type, t.children, t.positions, t.length, [
            [
              this.lang.stateAfter,
              this.lang.streamParser.copyState(this.state),
            ],
          ])),
            this.chunks.push(t),
            this.chunkPos.push(this.chunkStart - this.ranges[0].from),
            (this.chunk = []),
            (this.chunkReused = void 0),
            (this.chunkStart = this.parsedPos);
        }
        finish() {
          return new i.f(
            this.lang.topNode,
            this.chunks,
            this.chunkPos,
            this.parsedPos - this.ranges[0].from
          ).balance();
        }
      }

      function c(t, e, s) {
        e.start = e.pos;
        for (let i = 0; i < 10; i++) {
          let i = t(e, s);
          if (e.pos > e.start) return i;
        }
        throw new Error('Stream parser failed to advance stream.');
      }
      const d = Object.create(null),
        g = [i.d.none],
        m = new i.c(g),
        k = [];

      function b(t) {
        return t
          ? d[t] ||
              (d[t] = (function (t) {
                let e = null;
                for (let i of t.split('.')) {
                  let t = n.d[i];
                  t
                    ? 'function' == typeof t
                      ? e
                        ? (e = t(e))
                        : P(i, `Modifier ${i} used at start of tag`)
                      : e
                      ? P(i, `Tag ${i} used as modifier`)
                      : (e = t)
                    : P(i, `Unknown highlighting tag ${i}`);
                }
                if (!e) return 0;
                let s = t.replace(/ /g, '_'),
                  r = i.d.define({
                    id: g.length,
                    name: s,
                    props: [
                      Object(n.c)({
                        [s]: e,
                      }),
                    ],
                  });
                return g.push(r), r.id;
              })(t))
          : 0;
      }
      for (let [w, S] of [
        ['variable', 'variableName'],
        ['variable-2', 'variableName.special'],
        ['string-2', 'string.special'],
        ['def', 'variableName.definition'],
        ['tag', 'typeName'],
        ['attribute', 'propertyName'],
        ['type', 'typeName'],
        ['builtin', 'variableName.standard'],
        ['qualifier', 'modifier'],
        ['error', 'invalid'],
        ['header', 'heading'],
        ['property', 'propertyName'],
      ])
        d[w] = b(S);

      function P(t, e) {
        k.indexOf(t) > -1 || (k.push(t), console.warn(e));
      }
    },
  },
]);
//# sourceMappingURL=272.6d9a9e1e66a1f794d03b.js.map

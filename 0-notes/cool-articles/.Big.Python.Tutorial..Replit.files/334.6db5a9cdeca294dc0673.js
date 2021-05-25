(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [334],
  {
    "0fl0": function (e, t, i) {
      self,
        (e.exports = (() => {
          "use strict";
          const e = {
              258: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.SearchAddon = void 0);
                const i = " ~!@#$%^&*()+`-=[]{}|;:\"',./<>?",
                  r = (() => {
                    function e() {
                      this._linesCacheTimeoutId = 0;
                    }
                    return (
                      (e.prototype.activate = function (e) {
                        this._terminal = e;
                      }),
                      (e.prototype.dispose = () => {}),
                      (e.prototype.findNext = function (e, t) {
                        if (!this._terminal)
                          throw new Error(
                            "Cannot use addon until it has been loaded"
                          );
                        if (!e || 0 === e.length)
                          return this._terminal.clearSelection(), !1;
                        let i,
                          r = 0,
                          n = 0;
                        if (this._terminal.hasSelection()) {
                          const s = !!t && t.incremental;
                          (i = this._terminal.getSelectionPosition()),
                            (n = s ? i.startRow : i.endRow),
                            (r = s ? i.startColumn : i.endColumn);
                        }
                        this._initLinesCache();
                        const o = { startRow: n, startCol: r };
                        let a = this._findInLine(e, o, t);
                        if (!a)
                          for (
                            var l = n + 1;
                            l <
                              this._terminal.buffer.active.baseY +
                                this._terminal.rows &&
                            ((o.startRow = l),
                            (o.startCol = 0),
                            !(a = this._findInLine(e, o, t)));
                            l++
                          );
                        if (!a && 0 !== n)
                          for (
                            l = 0;
                            l < n &&
                            ((o.startRow = l),
                            (o.startCol = 0),
                            !(a = this._findInLine(e, o, t)));
                            l++
                          );
                        return (
                          !a &&
                            i &&
                            ((o.startRow = i.startRow),
                            (o.startCol = 0),
                            (a = this._findInLine(e, o, t))),
                          this._selectResult(a)
                        );
                      }),
                      (e.prototype.findPrevious = function (e, t) {
                        if (!this._terminal)
                          throw new Error(
                            "Cannot use addon until it has been loaded"
                          );
                        if (!e || 0 === e.length)
                          return this._terminal.clearSelection(), !1;
                        let i;
                        let r;
                        const n = !0;

                        let s =
                          this._terminal.buffer.active.baseY +
                          this._terminal.rows;

                        let o = this._terminal.cols;
                        const a = !!t && t.incremental;
                        this._terminal.hasSelection() &&
                          ((s = (r = this._terminal.getSelectionPosition())
                            .startRow),
                          (o = r.startColumn)),
                          this._initLinesCache();
                        const l = { startRow: s, startCol: o };
                        if (
                          (a
                            ? ((i = this._findInLine(e, l, t, !1)) &&
                                i.row === s &&
                                i.col === o) ||
                              (r &&
                                ((l.startRow = r.endRow),
                                (l.startCol = r.endColumn)),
                              (i = this._findInLine(e, l, t, !0)))
                            : (i = this._findInLine(e, l, t, n)),
                          !i)
                        ) {
                          l.startCol = Math.max(
                            l.startCol,
                            this._terminal.cols
                          );
                          for (
                            var h = s - 1;
                            h >= 0 &&
                            ((l.startRow = h),
                            !(i = this._findInLine(e, l, t, n)));
                            h--
                          );
                        }
                        if (
                          !i &&
                          s !==
                            this._terminal.buffer.active.baseY +
                              this._terminal.rows
                        )
                          for (
                            h =
                              this._terminal.buffer.active.baseY +
                              this._terminal.rows;
                            h >= s &&
                            ((l.startRow = h),
                            !(i = this._findInLine(e, l, t, n)));
                            h--
                          );
                        return !(i || !r) || this._selectResult(i);
                      }),
                      (e.prototype._initLinesCache = function () {
                        const e = this,
                          t = this._terminal;
                        this._linesCache ||
                          ((this._linesCache = new Array(
                            t.buffer.active.length
                          )),
                          (this._cursorMoveListener = t.onCursorMove(() => {
                            return e._destroyLinesCache();
                          })),
                          (this._resizeListener = t.onResize(() => {
                            return e._destroyLinesCache();
                          }))),
                          window.clearTimeout(this._linesCacheTimeoutId),
                          (this._linesCacheTimeoutId = window.setTimeout(() => {
                            return e._destroyLinesCache();
                          }, 15e3));
                      }),
                      (e.prototype._destroyLinesCache = function () {
                        (this._linesCache = void 0),
                          this._cursorMoveListener &&
                            (this._cursorMoveListener.dispose(),
                            (this._cursorMoveListener = void 0)),
                          this._resizeListener &&
                            (this._resizeListener.dispose(),
                            (this._resizeListener = void 0)),
                          this._linesCacheTimeoutId &&
                            (window.clearTimeout(this._linesCacheTimeoutId),
                            (this._linesCacheTimeoutId = 0));
                      }),
                      (e.prototype._isWholeWord = (e, t, r) => {
                        return !(
                          (0 !== e && -1 === i.indexOf(t[e - 1])) ||
                          (e + r.length !== t.length &&
                            -1 === i.indexOf(t[e + r.length]))
                        );
                      }),
                      (e.prototype._findInLine = function (e, t, i, r) {
                        void 0 === i && (i = {}), void 0 === r && (r = !1);
                        const n = this._terminal;
                        let s = t.startRow;
                        const o = t.startCol;
                        const a = n.buffer.active.getLine(s);
                        if (a && a.isWrapped)
                          return r
                            ? void (t.startCol += n.cols)
                            : (t.startRow--,
                              (t.startCol += n.cols),
                              this._findInLine(e, t, i));
                        let l = this._linesCache ? this._linesCache[s] : void 0;
                        void 0 === l &&
                          ((l = this._translateBufferLineToStringWithWrap(
                            s,
                            !0
                          )),
                          this._linesCache && (this._linesCache[s] = l));
                        const h = i.caseSensitive ? e : e.toLowerCase();
                        const c = i.caseSensitive ? l : l.toLowerCase();
                        let f = -1;
                        if (i.regex) {
                          const u = RegExp(h, "g");
                          let _ = void 0;
                          if (r)
                            for (; (_ = u.exec(c.slice(0, o))); )
                              (f = u.lastIndex - _[0].length),
                                (e = _[0]),
                                (u.lastIndex -= e.length - 1);
                          else
                            (_ = u.exec(c.slice(o))) &&
                              _[0].length > 0 &&
                              ((f = o + (u.lastIndex - _[0].length)),
                              (e = _[0]));
                        } else
                          r
                            ? o - h.length >= 0 &&
                              (f = c.lastIndexOf(h, o - h.length))
                            : (f = c.indexOf(h, o));
                        if (f >= 0) {
                          if (
                            (f >= n.cols &&
                              ((s += Math.floor(f / n.cols)), (f %= n.cols)),
                            i.wholeWord && !this._isWholeWord(f, c, e))
                          )
                            return;
                          const d = n.buffer.active.getLine(s);
                          if (d)
                            for (let v = 0; v < f; v++) {
                              const w = d.getCell(v);
                              if (!w) break;
                              const p = w.getChars();
                              p.length > 1 && (f -= p.length - 1),
                                0 === w.getWidth() && f++;
                            }
                          return { term: e, col: f, row: s };
                        }
                      }),
                      (e.prototype._translateBufferLineToStringWithWrap =
                        function (e, t) {
                          let i;
                          const r = this._terminal;
                          let n = "";
                          do {
                            const s = r.buffer.active.getLine(e + 1);
                            i = !!s && s.isWrapped;
                            const o = r.buffer.active.getLine(e);
                            if (!o) break;
                            (n += o
                              .translateToString(!i && t)
                              .substring(0, r.cols)),
                              e++;
                          } while (i);
                          return n;
                        }),
                      (e.prototype._selectResult = function (e) {
                        const t = this._terminal;
                        if (!e) return t.clearSelection(), !1;
                        if (
                          (t.select(e.col, e.row, e.term.length),
                          e.row >= t.buffer.active.viewportY + t.rows ||
                            e.row < t.buffer.active.viewportY)
                        ) {
                          let i = e.row - t.buffer.active.viewportY;
                          (i -= Math.floor(t.rows / 2)), t.scrollLines(i);
                        }
                        return !0;
                      }),
                      e
                    );
                  })();
                t.SearchAddon = r;
              },
            },
            t = {};
          return (function i(r) {
            if (t[r]) return t[r].exports;
            const n = (t[r] = { exports: {} });
            return e[r](n, n.exports, i), n.exports;
          })(258);
        })());
    },
  },
]);

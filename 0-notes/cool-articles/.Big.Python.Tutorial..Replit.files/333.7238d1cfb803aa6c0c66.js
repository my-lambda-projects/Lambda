(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [333],
  {
    R9As(e, t, r) {
      self,
        (e.exports = (() => {
          "use strict";
          const e = {
              775: (e, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.FitAddon = void 0);
                const r = (() => {
                  function e() {}
                  return (
                    (e.prototype.activate = function (e) {
                      this._terminal = e;
                    }),
                    (e.prototype.dispose = () => {}),
                    (e.prototype.fit = function () {
                      const e = this.proposeDimensions();
                      if (e && this._terminal) {
                        const t = this._terminal._core;
                        (this._terminal.rows === e.rows &&
                          this._terminal.cols === e.cols) ||
                          (t._renderService.clear(),
                          this._terminal.resize(e.cols, e.rows));
                      }
                    }),
                    (e.prototype.proposeDimensions = function () {
                      if (
                        this._terminal &&
                        this._terminal.element &&
                        this._terminal.element.parentElement
                      ) {
                        const e = this._terminal._core;
                        if (
                          0 !== e._renderService.dimensions.actualCellWidth &&
                          0 !== e._renderService.dimensions.actualCellHeight
                        ) {
                          const t = window.getComputedStyle(
                              this._terminal.element.parentElement
                            ),
                            r = parseInt(t.getPropertyValue("height")),
                            i = Math.max(
                              0,
                              parseInt(t.getPropertyValue("width"))
                            ),
                            n = window.getComputedStyle(this._terminal.element),
                            o =
                              r -
                              (parseInt(n.getPropertyValue("padding-top")) +
                                parseInt(n.getPropertyValue("padding-bottom"))),
                            a =
                              i -
                              (parseInt(n.getPropertyValue("padding-right")) +
                                parseInt(n.getPropertyValue("padding-left"))) -
                              e.viewport.scrollBarWidth;
                          return {
                            cols: Math.max(
                              2,
                              Math.floor(
                                a / e._renderService.dimensions.actualCellWidth
                              )
                            ),
                            rows: Math.max(
                              1,
                              Math.floor(
                                o / e._renderService.dimensions.actualCellHeight
                              )
                            ),
                          };
                        }
                      }
                    }),
                    e
                  );
                })();
                t.FitAddon = r;
              },
            },
            t = {};
          return (function r(i) {
            if (t[i]) return t[i].exports;
            const n = (t[i] = { exports: {} });
            return e[i](n, n.exports, r), n.exports;
          })(775);
        })());
    },
  },
]);

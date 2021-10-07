(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [345],
  {
    R9As: function (e, t, r) {
      self,
        (e.exports = (() => {
          'use strict';
          var e = {
              775: (e, t) => {
                Object.defineProperty(t, '__esModule', {
                  value: !0,
                }),
                  (t.FitAddon = void 0);
                var r = (function () {
                  function e() {}
                  return (
                    (e.prototype.activate = function (e) {
                      this._terminal = e;
                    }),
                    (e.prototype.dispose = function () {}),
                    (e.prototype.fit = function () {
                      var e = this.proposeDimensions();
                      if (e && this._terminal) {
                        var t = this._terminal._core;
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
                        var e = this._terminal._core;
                        if (
                          0 !== e._renderService.dimensions.actualCellWidth &&
                          0 !== e._renderService.dimensions.actualCellHeight
                        ) {
                          var t = window.getComputedStyle(
                              this._terminal.element.parentElement
                            ),
                            r = parseInt(t.getPropertyValue('height')),
                            i = Math.max(
                              0,
                              parseInt(t.getPropertyValue('width'))
                            ),
                            n = window.getComputedStyle(this._terminal.element),
                            o =
                              r -
                              (parseInt(n.getPropertyValue('padding-top')) +
                                parseInt(n.getPropertyValue('padding-bottom'))),
                            a =
                              i -
                              (parseInt(n.getPropertyValue('padding-right')) +
                                parseInt(n.getPropertyValue('padding-left'))) -
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
            var n = (t[i] = {
              exports: {},
            });
            return e[i](n, n.exports, r), n.exports;
          })(775);
        })());
    },
  },
]);
//# sourceMappingURL=345.62d978f353f21a710bb2.js.map

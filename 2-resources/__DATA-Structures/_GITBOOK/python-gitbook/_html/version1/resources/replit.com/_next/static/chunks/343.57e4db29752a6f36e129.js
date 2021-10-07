(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [343],
  {
    'Po+R': function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'FileParserAddon', function () {
          return h;
        });
      var n = r('H+61'),
        i = r('UlJF'),
        a = r('cpVT'),
        s = r('z7pX'),
        c = r('xvhg'),
        u = r('vJKn'),
        o = r.n(u),
        l = r('rg98'),
        f = (function () {
          function e(t, r, i, a) {
            Object(n.a)(this, e),
              (this.terminal = t),
              (this.handler = r),
              (this.replDirectory = i),
              (this.listFiles = a);
          }
          return (
            Object(i.a)(e, [
              {
                key: 'provideLinks',
                value: (function () {
                  var e = Object(l.a)(
                    o.a.mark(function e(t, r) {
                      return o.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = r),
                                  (e.next = 3),
                                  p.computeLink(
                                    t,
                                    this.terminal,
                                    this.handler,
                                    this.replDirectory,
                                    this.listFiles
                                  )
                                );
                              case 3:
                                (e.t1 = e.sent), (0, e.t0)(e.t1);
                              case 5:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        p = (function () {
          function e() {
            Object(n.a)(this, e);
          }
          return (
            Object(i.a)(e, null, [
              {
                key: 'computeLink',
                value: (function () {
                  var t = Object(l.a)(
                    o.a.mark(function t(r, n, i, a, u) {
                      var l, f, p, h, b, d, v, k, x, g, w, j, y;
                      return o.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (l = new RegExp(/([^"(\s.]+\.[a-zA-Z]+)/g)),
                                (f = new RegExp(/(:\d+:?\d*|:?\d+:\d*)/g)),
                                (p = new RegExp(/(line \d+)/g)),
                                (h = e.translateBufferLineToStringWithWrap(
                                  r - 1,
                                  !1,
                                  n
                                )),
                                (b = Object(c.a)(h, 2)),
                                (d = b[0]),
                                (v = b[1]),
                                (k = v + 1),
                                (g = -1),
                                (w = []),
                                (j = o.a.mark(function e() {
                                  var t, r, c, h, b, v, j, y, O, m, L, W, F, I;
                                  return o.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if ((r = x[1])) {
                                            e.next = 3;
                                            break;
                                          }
                                          return e.abrupt('return', 'break');
                                        case 3:
                                          if (
                                            ((g = d.indexOf(r, g + 1)),
                                            (l.lastIndex = g + r.length),
                                            !(g < 0))
                                          ) {
                                            e.next = 7;
                                            break;
                                          }
                                          return e.abrupt('return', 'break');
                                        case 7:
                                          return (
                                            (c = r),
                                            r.startsWith(a) &&
                                              (c = r.slice(a.length)),
                                            (e.next = 11),
                                            u()
                                          );
                                        case 11:
                                          if (
                                            ((e.t1 = t = e.sent),
                                            (e.t0 = null === e.t1),
                                            e.t0)
                                          ) {
                                            e.next = 15;
                                            break;
                                          }
                                          e.t0 = void 0 === t;
                                        case 15:
                                          if (!e.t0) {
                                            e.next = 19;
                                            break;
                                          }
                                          (e.t2 = void 0), (e.next = 20);
                                          break;
                                        case 19:
                                          e.t2 = t.files;
                                        case 20:
                                          if ((h = e.t2)) {
                                            e.next = 23;
                                            break;
                                          }
                                          return e.abrupt('return', {
                                            v: [],
                                          });
                                        case 23:
                                          if (
                                            null !==
                                              (b = [].concat(
                                                Object(s.a)(
                                                  h.filter(function (e) {
                                                    return c === e;
                                                  })
                                                ),
                                                Object(s.a)(
                                                  h.filter(function (e) {
                                                    return (
                                                      c === e.split('/').pop()
                                                    );
                                                  })
                                                )
                                              )) &&
                                            void 0 !== b &&
                                            b.length
                                          ) {
                                            e.next = 26;
                                            break;
                                          }
                                          return e.abrupt('return', 'continue');
                                        case 26:
                                          (v = void 0),
                                            (j = void 0),
                                            (f.lastIndex = g + r.length),
                                            (y = f.exec(d)) && y[1]
                                              ? ((O = y[1]
                                                  .split(':')
                                                  .filter(function (e) {
                                                    return e;
                                                  })).length &&
                                                  (v = parseInt(O[0], 10)),
                                                2 === O.length &&
                                                  (j = parseInt(O[1], 10)))
                                              : ((p.lastIndex = g + r.length),
                                                (m = p.exec(d)) &&
                                                  m[1] &&
                                                  (v = parseInt(
                                                    m[1].slice(5),
                                                    10
                                                  ))),
                                            (L = (g + 1) % n.cols),
                                            (W =
                                              k + Math.floor((g + 1) / n.cols)),
                                            (F = (g + r.length) % n.cols),
                                            (I =
                                              k +
                                              Math.floor(
                                                (g + r.length) / n.cols
                                              )),
                                            w.push({
                                              range: {
                                                start: {
                                                  x: L,
                                                  y: W,
                                                },
                                                end: {
                                                  x: F,
                                                  y: I,
                                                },
                                              },
                                              text: b[0],
                                              activate: function (e, t) {
                                                return i(t, v, j);
                                              },
                                            });
                                        case 36:
                                        case 'end':
                                          return e.stop();
                                      }
                                  }, e);
                                }));
                            case 8:
                              if (null === (x = l.exec(d))) {
                                t.next = 19;
                                break;
                              }
                              return t.delegateYield(j(), 't0', 10);
                            case 10:
                              if ('break' !== (y = t.t0)) {
                                t.next = 13;
                                break;
                              }
                              return t.abrupt('break', 19);
                            case 13:
                              if ('continue' !== y) {
                                t.next = 15;
                                break;
                              }
                              return t.abrupt('continue', 8);
                            case 15:
                              if ('object' !== typeof y) {
                                t.next = 17;
                                break;
                              }
                              return t.abrupt('return', y.v);
                            case 17:
                              t.next = 8;
                              break;
                            case 19:
                              return t.abrupt('return', w);
                            case 20:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, r, n, i, a) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'translateBufferLineToStringWithWrap',
                value: function (e, t, r) {
                  var n,
                    i,
                    a = '';
                  do {
                    var s = r.buffer.active.getLine(e);
                    if (!s) break;
                    s.isWrapped && e--, (i = s.isWrapped);
                  } while (i);
                  var c = e;
                  do {
                    var u = r.buffer.active.getLine(e + 1);
                    n = !!u && u.isWrapped;
                    var o = r.buffer.active.getLine(e);
                    if (!o) break;
                    (a += o.translateToString(!n && t).substring(0, r.cols)),
                      e++;
                  } while (n);
                  return [a, c];
                },
              },
            ]),
            e
          );
        })(),
        h = (function () {
          function e(t, r, i) {
            Object(n.a)(this, e),
              (this.handler = t),
              (this.listFiles = r),
              Object(a.a)(this, 'terminal', void 0),
              Object(a.a)(this, 'linkProvider', void 0),
              Object(a.a)(this, 'replDirectory', void 0),
              (this.replDirectory = '/home/runner/'.concat(i, '/'));
          }
          return (
            Object(i.a)(e, [
              {
                key: 'activate',
                value: function (e) {
                  (this.terminal = e),
                    (this.linkProvider = this.terminal.registerLinkProvider(
                      new f(
                        this.terminal,
                        this.handler,
                        this.replDirectory,
                        this.listFiles
                      )
                    ));
                },
              },
              {
                key: 'dispose',
                value: function () {
                  var e;
                  null === (e = this.linkProvider) ||
                    void 0 === e ||
                    e.dispose();
                },
              },
            ]),
            e
          );
        })();
    },
  },
]);
//# sourceMappingURL=343.57e4db29752a6f36e129.js.map

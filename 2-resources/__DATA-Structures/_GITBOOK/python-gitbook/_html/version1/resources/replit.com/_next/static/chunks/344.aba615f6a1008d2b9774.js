(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [344],
  {
    I8Nj: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r('BGKE'),
        a = r('cpVT'),
        c = r('xvhg'),
        i = r('MX0m'),
        o = r.n(i),
        d = r('q1tI'),
        s = r('+Jnw'),
        l = r('8bOe'),
        b = r('5ZtL'),
        p = r('h7rM'),
        u = r('jmGw'),
        f = r('gfZM'),
        m = r('SXYe'),
        v = r('0LUh'),
        j = r('IdsG'),
        O = r('mU7w'),
        g = r('QiR7'),
        w = r('rYih');
      r('Wlt/');

      function y() {
        var e = Object(w.a)().session,
          t = d.useState(e.getCursorPosition()),
          r = Object(c.a)(t, 2),
          n = r[0],
          a = r[1];
        return (
          d.useEffect(
            function () {
              return a(e.getCursorPosition()), e.onCursorPositionChanged(a);
            },
            [e]
          ),
          n
        );
      }
      var h = r('koLh'),
        k = r('hKI/'),
        x = r.n(k),
        _ = r('dI/k');

      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var M = x()(function (e) {
          e.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 100),
        N = function (e) {
          var t = Object(w.a)().fs,
            r = y(),
            a = Object(b.a)(),
            i = Object(w.a)().session,
            v = Object(l.h)({
              fs: t,
            }),
            j = d.useState(!1),
            O = Object(c.a)(j, 2),
            k = O[0],
            x = O[1],
            P = Object(p.b)(e.wid, e.pud, 'markdownviewer'),
            N = Object(c.a)(P, 1)[0].files,
            I = Object(g.a)();
          d.useEffect(
            function () {
              a && I !== a && 'md' === Object(_.b)(a) && i.setPreviewedFile(a);
            },
            [I, a, i]
          );
          var S = d.useRef(null),
            C = Object(h.a)(
              function () {
                x(!0),
                  S.current && clearTimeout(S.current),
                  (S.current = setTimeout(function () {
                    x(!1);
                  }, 150));
              },
              {
                type: 'throttle',
                wait: 37.5,
              }
            );
          d.useLayoutEffect(
            function () {
              if (!k && a === I) {
                var e = document.querySelectorAll(
                    '.rendered-markdown [data-sourcepos]'
                  ),
                  t = Array.from(e);
                if (t)
                  for (
                    var n = r.lineNumber, i = r.column, o = 0, d = t;
                    o < d.length;
                    o++
                  ) {
                    var s = d[o],
                      l = s.dataset.sourcepos;
                    if (!l)
                      throw new Error(
                        'Expected data source pos on selected element'
                      );
                    var b = l.split('-'),
                      p = Object(c.a)(b, 2),
                      u = p[0],
                      f = p[1],
                      m = u.split(':').map(Number),
                      v = Object(c.a)(m, 2),
                      j = v[0],
                      O = v[1],
                      g = f.split(':').map(Number),
                      w = Object(c.a)(g, 2),
                      y = w[0],
                      h = w[1];
                    if (n >= j && i >= O && (n < y || (n === y && i <= h)))
                      return void M(s);
                  }
              }
            },
            [r, k, a, I]
          );
          var L = d.useCallback(
            function (e) {
              var t = e.src;
              return Object(n.b)(l.a, {
                previewFilePath: I,
                src: t,
                getImageContent: v,
                deeplink: !0,
              });
            },
            [v, I]
          );
          return d.useMemo(
            function () {
              if (!I)
                return Object(n.b)('div', {
                  style: e.style,
                  children: 'No current file',
                });
              var t = N[I],
                r = 'Loading File...';
              return (
                t && !0 === t.loaded && (r = f.a.from(t.content).toString()),
                Object(n.c)('div', {
                  ref: C,
                  className:
                    o.a.dynamic([['1859824911', [m.a.tabletMin]]]) + ' root',
                  children: [
                    Object(n.b)(E, {}),
                    Object(n.b)('div', {
                      className:
                        o.a.dynamic([['1859824911', [m.a.tabletMin]]]) +
                        ' content',
                      children: Object(n.b)(s.a, {
                        source: r,
                        renderers: {
                          code: u.a,
                          linkReference: l.d,
                          image: L,
                          html: l.b,
                        },
                        sourcePos: !0,
                      }),
                    }),
                    Object(n.b)(o.a, {
                      id: '1859824911',
                      dynamic: [m.a.tabletMin],
                      children: [
                        '.root.__jsx-style-dynamic-selector{height:100%;width:100%;overflow:auto;background:var(--deprecated-color-background-1);z-index:2;position:relative;}',
                        '.content.__jsx-style-dynamic-selector{max-width:840px;margin:0 auto;padding:var(--deprecated-spacing-4) var(--deprecated-spacing-2);}',
                        '@media only screen and (min-width:'.concat(
                          m.a.tabletMin,
                          'px){.content.__jsx-style-dynamic-selector{padding:var(--deprecated-spacing-6) var(--deprecated-spacing-4);}}'
                        ),
                      ],
                    }),
                  ],
                })
              );
            },
            [I, N, L, e, C]
          );
        },
        E = function () {
          var e = Object(g.a)();
          return Object(n.c)('div', {
            className:
              o.a.dynamic([['3291020878', [m.a.tabletMin]]]) +
              ' preview-link-container',
            children: [
              Object(n.b)(v.a, {}),
              Object(n.c)(j.a, {
                className: 'preview-text',
                foreground: 2,
                size: 'small',
                children: [
                  'Preview of ',
                  Object(n.b)('a', {
                    href: '#'.concat(e),
                    className: o.a.dynamic([['3291020878', [m.a.tabletMin]]]),
                    children: e,
                  }),
                ],
              }),
              Object(n.b)(o.a, {
                id: '3291020878',
                dynamic: [m.a.tabletMin],
                children: [
                  '.preview-link-container.__jsx-style-dynamic-selector{position:absolute;color:var(--deprecated-color-foreground-2);background-color:var(--deprecated-color-background-1);padding:var(--deprecated-spacing-1) var(--deprecated-spacing-2);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:calc(100% - var(--deprecated-spacing-2));-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                  '.preview-link-container.__jsx-style-dynamic-selector .preview-text{margin-left:var(--deprecated-spacing-half);}',
                  '@media only screen and (min-width:'.concat(
                    m.a.tabletMin,
                    'px){.preview-link-container.__jsx-style-dynamic-selector{padding:var(--deprecated-spacing-1) var(--deprecated-spacing-4);}}'
                  ),
                ],
              }),
            ],
          });
        };
      t.default = function (e) {
        var t,
          r = Object(p.b)(e.wid, e.pud, 'markdownviewer'),
          i = Object(c.a)(r, 1)[0].files,
          o = Object(g.a)();
        return o && null !== (t = i[o]) && void 0 !== t && t.loaded
          ? Object(n.b)(
              N,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? P(Object(r), !0).forEach(function (t) {
                        Object(a.a)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : P(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })({}, e)
            )
          : Object(n.b)(O.a, {
              preventHighlightBorder: !0,
            });
      };
    },
  },
]);
//# sourceMappingURL=344.aba615f6a1008d2b9774.js.map

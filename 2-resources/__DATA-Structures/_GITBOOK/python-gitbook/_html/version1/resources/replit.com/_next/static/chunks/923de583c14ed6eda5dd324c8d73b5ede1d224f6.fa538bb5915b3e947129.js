(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [26],
  {
    '/TwY': function (e, t, n) {
      'use strict';
      t.a = [
        'package.json',
        'package-lock.json',
        'yarn.lock',
        'node_modules',
        'poetry.lock',
        'pyproject.toml',
        'requirements.txt',
        '.venv/',
        '.local',
        'go.mod',
        'go.sum',
        'Gemfile',
        'Gemfile.lock',
        'pom.xml',
        'target',
      ];
    },
    '0HhJ': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var r = n('cpVT'),
        a = n('BGKE'),
        i = (n('q1tI'), n('pDQI'));

      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function l(e) {
        return Object(a.c)(
          i.a,
          o(
            o({}, e),
            {},
            {
              children: [
                Object(a.b)('path', {
                  d: 'M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L16.5 4.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                Object(a.b)('path', {
                  d: 'M3.27002 6.95996L7.63502 9.48496L12 12.01L20.73 6.95996',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                Object(a.b)('path', {
                  d: 'M12 22.08V12',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }
          )
        );
      }
    },
    '5ZtL': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('qpca');

      function a() {
        var e = Object(r.a)(),
          t = e.openFiles,
          n = e.activeTab;
        return t[n] ? t[n] : null;
      }
    },
    '7lhO': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('q1tI'),
        a = n('f47c');

      function i() {
        var e = r.useContext(a.a);
        if (!e) throw new Error('Expected repl id to be in context');
        return e;
      }
    },
    '93FD': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return ie;
      });
      var r = n('BGKE'),
        a = n('cpVT'),
        i = n('xvhg'),
        c = n('dhJC'),
        o = n('MX0m'),
        l = n.n(o),
        s = n('q1tI'),
        u = n('TSYQ'),
        d = n.n(u),
        p = n('qJlv'),
        f = n('xhau'),
        b = n('vJKn'),
        g = n.n(b),
        h = n('rg98'),
        m = n('z7pX'),
        v = n('/TwY'),
        x = n('zgDP'),
        j = n('8v8i'),
        y = n('up5I'),
        O = n('FtpG');

      function w(e) {
        var t = e.onCreateClick,
          n = e.depth;
        return Object(r.c)(O.c, {
          interactive: !1,
          depth: n,
          children: [
            Object(r.c)('div', {
              className: 'jsx-3022828519',
              children: [
                'Add a ',
                Object(r.b)(y.a, {
                  size: 'small',
                  border: !1,
                  onClick: function () {
                    return t(j.d.File);
                  },
                  children: 'file',
                }),
                '  or ',
                Object(r.b)(y.a, {
                  size: 'small',
                  border: !1,
                  onClick: function () {
                    return t(j.d.Directory);
                  },
                  children: 'folder',
                }),
              ],
            }),
            Object(r.b)(l.a, {
              id: '3022828519',
              children: [
                'div.jsx-3022828519{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;overflow:hidden;white-space:nowrap;}',
              ],
            }),
          ],
        });
      }
      var k = n('9V9U'),
        E = n('eZMQ'),
        C = n('IjuC'),
        N = n('9vYF'),
        D = n('yoNG'),
        P = n('VoYB'),
        R = n('t5A9');

      function _(e) {
        var t = Object(R.a)(e.progress),
          n = e.size / 2,
          a = n / 2,
          i = 2 * a * Math.PI,
          c = i - t * i;
        return Object(r.c)('svg', {
          height: 2 * n,
          width: 2 * n,
          className: 'jsx-1635236015 circle',
          children: [
            Object(r.b)('circle', {
              fill: 'var(--deprecated-color-control-3)',
              r: n,
              cx: n,
              cy: n,
              className: 'jsx-1635236015',
            }),
            Object(r.b)('circle', {
              stroke: 'var(--deprecated-color-foreground-3)',
              fill: 'transparent',
              strokeWidth: n,
              strokeDasharray: i + ' ' + i,
              style: {
                strokeDashoffset: c,
              },
              r: a,
              cx: n,
              cy: n,
              className: 'jsx-1635236015',
            }),
            Object(r.b)(l.a, {
              id: '1635236015',
              children: [
                '.circle.jsx-1635236015{margin:4px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;}',
              ],
            }),
          ],
        });
      }
      var T = n('7lhO'),
        S = n('tZOq'),
        F = n('NuhN');
      var I = n('rYih');

      function U(e) {
        var t = e.path,
          n = Object(T.a)(),
          a = Object(I.a)().presence,
          c = Object(S.Zc)({
            variables: {
              replId: n,
            },
          }).data,
          o = (function (e) {
            var t = e.presence,
              n = e.path,
              r = t.getPathToUserIds()[n] || [],
              a = s.useState(r),
              c = Object(i.a)(a, 2),
              o = c[0],
              l = c[1];
            return (
              s.useEffect(
                function () {
                  l(t.getPathToUserIds()[n] || []);
                  var e = t.onUserLeave(function (e) {
                      l(function (t) {
                        return t.filter(function (t) {
                          return t !== e.id;
                        });
                      });
                    }),
                    r = t.onUserOpenedFile(function (e) {
                      var t = e.user,
                        r = e.file;
                      r && (n === r || Object(F.b)(n, r))
                        ? l(function (e) {
                            return e.includes(t.id)
                              ? e
                              : [].concat(Object(m.a)(e), [t.id]);
                          })
                        : l(function (e) {
                            return e.filter(function (e) {
                              return e !== t.id;
                            });
                          });
                    });
                  return function () {
                    e(), r();
                  };
                },
                [t, n]
              ),
              o
            );
          })({
            presence: a,
            path: t,
          });
        if (
          0 === o.length ||
          'Repl' !==
            (null === c || void 0 === c ? void 0 : c.repl.__typename) ||
          !c.currentUser
        )
          return null;
        var u = c.repl,
          d = c.currentUser,
          p = o.filter(function (e) {
            return e !== d.id;
          });
        if (0 === p.length) return null;
        var f = []
            .concat(Object(m.a)(u.multiplayers), [u.user])
            .filter(function (e) {
              return Boolean(e);
            }),
          b = a.getActiveUsers(),
          g = p
            .filter(function (e) {
              return (
                b.some(function (t) {
                  return t.id === e;
                }) &&
                f.some(function (t) {
                  return t.id === e;
                })
              );
            })
            .map(function (e) {
              var t = b.find(function (t) {
                return t.id === e;
              });
              if (!t) throw new Error('Expected online user');
              var n = f.find(function (t) {
                return t.id === e;
              });
              if (!n) throw new Error('Expected user from graph');
              var r = t.id,
                a = t.username;
              return {
                id: r,
                color: t.color,
                image: n.image,
                username: a,
              };
            }),
          h = g.length;
        return Object(r.c)('div', {
          className: 'jsx-1200233977 avatars-container',
          children: [
            g.slice(0, 2).map(function (e) {
              return Object(r.b)(
                'img',
                {
                  src: e.image,
                  title: e.username,
                  style: {
                    border: '2px solid '.concat(e.color),
                  },
                  className: 'jsx-1200233977 avatar-image',
                },
                e.username
              );
            }),
            3 === h &&
              Object(r.b)(
                'img',
                {
                  src: g[h - 1].image,
                  title: g[h - 1].username,
                  style: {
                    border: '2px solid '.concat(g[h - 1].color),
                  },
                  className: 'jsx-1200233977 avatar-image',
                },
                g[h - 1].username
              ),
            h > 3 &&
              Object(r.c)('div', {
                className: 'jsx-1200233977 more-users',
                children: ['+', g.length - 3 + 1],
              }),
            Object(r.b)(l.a, {
              id: '1200233977',
              children: [
                '.avatars-container.jsx-1200233977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
                '.avatar-image.jsx-1200233977{background-color:white;}',
                '.avatar-image.jsx-1200233977,.more-users.jsx-1200233977{width:'
                  .concat(24, 'px;min-width:')
                  .concat(24, 'px;height:')
                  .concat(
                    24,
                    'px;border-radius:20px;margin-left:-10px;object-fit:cover;}'
                  ),
                '.more-users.jsx-1200233977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px;cursor:pointer;padding:0px;border:0 none;color:var(--deprecated-color-foreground-2);background-color:var(--deprecated-color-background-1);}',
                '.more-users.jsx-1200233977:focus{outline:0 none;}',
              ],
            }),
          ],
        });
      }

      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function G(e) {
        var t = e.path,
          n = e.readOnly,
          a = e.onRename,
          o = e.onDownload,
          u = e.onDelete,
          p = e.overwriteNode,
          f = e.getNodeType,
          b = e.progress,
          g = Object(c.a)(e, [
            'path',
            'readOnly',
            'onRename',
            'onDownload',
            'onDelete',
            'overwriteNode',
            'getNodeType',
            'progress',
          ]),
          h = t.split('/'),
          m = h[h.length - 1],
          v = h.length - 1,
          x = s.useState(null),
          y = Object(i.a)(x, 2),
          w = y[0],
          R = y[1],
          T = Object(P.a)().showError,
          S = s.useState(null),
          F = Object(i.a)(S, 2),
          I = F[0],
          A = F[1];
        s.useEffect(
          function () {
            if (w) {
              var e = !1;
              return (
                w.file.then(function (n) {
                  if (!e) {
                    if (n.error) {
                      if (n.error === j.e.AlreadyExists) {
                        var r =
                          '.' === w.path ? m : ''.concat(w.path, '/').concat(m);
                        return (
                          f(r).then(function (e) {
                            r !== t &&
                              A({
                                path: r,
                                type: e,
                              });
                          }),
                          void R(null)
                        );
                      }
                      T('Something went wrong trying to remove '.concat(m));
                    }
                    R(null);
                  }
                }),
                function () {
                  e = !0;
                }
              );
            }
          },
          [w, m, t, f, T]
        );
        var G = Object(k.a)({
            type: j.d.File,
            item: {
              type: j.d.File,
              path: t,
            },
            canDrag: function () {
              return !n;
            },
            collect: function (e) {
              return {
                isDragging: e.isDragging(),
              };
            },
            end: function (e, t) {
              if (t.didDrop()) {
                var n = t.getDropResult();
                n.file && R(n);
              }
            },
          }),
          z = Object(i.a)(G, 2),
          q = z[0].isDragging,
          M = z[1],
          B = [E.a.Rename, E.a.OpenTab, E.a.CopyLink, E.a.Download, E.a.Delete];
        return Object(r.c)('div', {
          ref: M,
          className:
            'jsx-791418946 ' +
            (d()({
              'is-dragging': q,
              'is-removing': w,
            }) || ''),
          children: [
            Object(r.b)(
              O.c,
              L(
                L(
                  {
                    depth: v,
                  },
                  g
                ),
                {},
                {
                  actions: n ? void 0 : B,
                  onAction: function (e) {
                    switch (e) {
                      case E.a.Rename:
                        return void a();
                      case E.a.OpenTab:
                        return void g.onClick({
                          newTab: !0,
                        });
                      case E.a.CopyLink:
                        var n = window.location.href,
                          r = n.includes('#') ? n.indexOf('#') : n.length,
                          i = ''.concat(n.slice(0, r), '#').concat(t);
                        try {
                          i = window.encodeURI(i);
                        } catch (c) {}
                        return void Object(C.a)(i);
                      case E.a.Download:
                        return void o();
                      case E.a.Delete:
                        u();
                    }
                  },
                  children: Object(r.c)('div', {
                    className: 'jsx-791418946 node-info',
                    children: [
                      Object(r.b)(O.a, {
                        type: j.d.File,
                        path: t,
                        active: g.active,
                      }),
                      Object(r.b)(O.b, {
                        children: m,
                      }),
                      n
                        ? null
                        : Object(r.b)(U, {
                            path: t,
                          }),
                      b &&
                        Object(r.b)(_, {
                          size: 16,
                          progress: b,
                        }),
                    ],
                  }),
                }
              )
            ),
            Object(r.b)(N.c, {
              isOpen: Boolean(I),
              onRequestClose: function () {
                return A(null);
              },
              children: I
                ? Object(r.b)(D.a, {
                    paths: [I.path],
                    onCancel: function () {
                      return A(null);
                    },
                    onConfirm: function () {
                      p(I), A(null);
                    },
                  })
                : null,
            }),
            Object(r.b)(l.a, {
              id: '791418946',
              children: [
                'div.jsx-791418946{max-width:100%;width:100%;}',
                '.node-info.jsx-791418946{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}',
                '.is-removing.jsx-791418946{opacity:0.5;pointer-events:none;}',
                '.is-dragging.jsx-791418946{opacity:0.7;}',
              ],
            }),
          ],
        });
      }
      var z = n('j/ei'),
        q = n('7njZ'),
        M = n('8/ze');

      function B(e) {
        var t = e.type,
          n = e.create,
          a = e.onCreate,
          c = e.onError,
          o = e.onCancel,
          u = e.parentPath,
          d = e.siblings,
          p = u === M.a ? 0 : u.split('/').length,
          f = Object(q.a)(),
          b = s.useState(null),
          g = Object(i.a)(b, 2),
          h = g[0],
          m = g[1];
        return h
          ? Object(r.c)('div', {
              className: 'jsx-4270797373 pending-node',
              children: [
                Object(r.c)(O.c, {
                  depth: p,
                  onClick: function () {
                    return null;
                  },
                  children: [
                    Object(r.b)(O.a, {
                      path: h.filename,
                      type: h.type,
                    }),
                    Object(r.b)(O.b, {
                      children: h.filename,
                    }),
                  ],
                }),
                Object(r.b)(l.a, {
                  id: '4270797373',
                  children: [
                    '.pending-node.jsx-4270797373{pointer-events:none;opacity:0.5;}',
                  ],
                }),
              ],
            })
          : Object(r.b)(z.a, {
              parentPath: u,
              siblings: d,
              type: t,
              onCancel: o,
              onSubmit: function (e) {
                if (!h) {
                  var r = {
                    path: u === M.a ? e : u + '/' + e,
                    type: t,
                  };
                  m({
                    filename: e,
                    type: t,
                  }),
                    n(r)
                      .then(function () {
                        f.current && (m(null), a(r));
                      })
                      .catch(function (e) {
                        f.current && c(e);
                      });
                }
              },
            });
      }
      var H = n('gfZM'),
        V = n('V6K1'),
        Y = n('xom/'),
        K = n('IdsG');

      function X(e) {
        var t = e.filename,
          n = e.entityType,
          a = e.onCancel,
          i = e.onConfirm;
        return Object(r.c)('div', {
          className: 'jsx-2932454058 content',
          children: [
            Object(r.c)(Y.b, {
              spacing: 4,
              children: [
                Object(r.c)(Y.b, {
                  spacing: 1,
                  children: [
                    Object(r.c)(V.a, {
                      level: 3,
                      children: ['Delete ', t, '?'],
                    }),
                    Object(r.c)(K.a, {
                      foreground: 2,
                      children: [
                        'Are you sure you want to delete this ',
                        n,
                        '? This cannot be undone.',
                      ],
                    }),
                  ],
                }),
                Object(r.c)(Y.a, {
                  spacing: 1,
                  children: [
                    Object(r.b)(y.a, {
                      autoFocus: !0,
                      onClick: a,
                      children: 'Cancel',
                    }),
                    Object(r.c)(y.a, {
                      color: 'negative',
                      filled: !0,
                      onClick: i,
                      children: ['Yes, delete this ', n],
                    }),
                  ],
                }),
              ],
            }),
            Object(r.b)(l.a, {
              id: '2932454058',
              children: [
                '.content.jsx-2932454058{padding:var(--deprecated-spacing-4);}',
              ],
            }),
          ],
        });
      }
      var Z = n('GRpk');

      function J(e) {
        var t = e.rows,
          n = void 0 === t ? 3 : t,
          a = e.depth,
          i = void 0 === a ? 0 : a,
          c = 'fileTreeLoader-' + Math.random().toString();
        return Object(r.c)('div', {
          className: l.a.dynamic([['2654650656', [i]]]) + ' loader',
          children: [
            Object(r.b)(Z.a, {
              primaryColor: 'var(--deprecated-color-control-1)',
              secondaryColor: 'var(--deprecated-color-control-3)',
              height: 32 * n,
              width: 250,
              className: 'content-loader',
              uniquekey: c,
              children: Array(n)
                .fill(null)
                .map(function (e, t) {
                  return Object(r.c)(
                    s.Fragment,
                    {
                      children: [
                        Object(r.b)('circle', {
                          cx: '28',
                          cy: ''.concat(16 + 32 * t),
                          r: '8',
                          className: l.a.dynamic([['2654650656', [i]]]),
                        }),
                        Object(r.b)('rect', {
                          x: 48,
                          y: ''.concat(7 + 32 * t),
                          rx: '3',
                          ry: '3',
                          width: ''.concat(
                            100 + ((n = t), n % 2 !== 0 ? -10 * n : 10 * n)
                          ),
                          height: '16',
                          className: l.a.dynamic([['2654650656', [i]]]),
                        }),
                      ],
                    },
                    t
                  );
                  var n;
                }),
            }),
            Object(r.b)(l.a, {
              id: '2654650656',
              dynamic: [i],
              children: [
                '.loader.__jsx-style-dynamic-selector{width:100%;height:100%;overflow:hidden;padding-left:calc('.concat(
                  i,
                  ' * var(--deprecated-spacing-2));}'
                ),
                '.loader.__jsx-style-dynamic-selector>svg{width:250px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}',
              ],
            }),
          ],
        });
      }
      var W = n('dI/k');

      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function ee(e) {
        var t,
          n = e.parentPath,
          a = e.nodes,
          o = e.loading,
          l = e.error,
          u = e.readOnly,
          d = Object(c.a)(e, [
            'parentPath',
            'nodes',
            'loading',
            'error',
            'readOnly',
          ]),
          p = Object(P.a)().showError,
          f = n === M.a ? [] : n.split('/'),
          b = d.fs,
          y = d.pendingFileType,
          k = d.setPendingFileType,
          E = d.onNodeClick,
          C = d.activePath,
          D = (function (e) {
            var t = s.useState(null),
              n = Object(i.a)(t, 2),
              r = n[0],
              a = n[1],
              c = s.useState(null),
              o = Object(i.a)(c, 2),
              l = o[0],
              u = o[1];
            return (
              s.useEffect(
                function () {
                  if (l) {
                    var t = !1;
                    return (
                      'rename' === l.type
                        ? (l.fileType === j.d.File
                            ? e.moveFile(l.path, l.to)
                            : e.moveDir(l.path, l.to)
                          ).then(function (e) {
                            t || (u(null), e.error && a(e.error));
                          })
                        : (l.fileType === j.d.File
                            ? e.deleteFile(l.path)
                            : e.deleteDir(l.path)
                          ).then(function (e) {
                            t || (u(null), e.error && a(e.error));
                          }),
                      function () {
                        t = !0;
                      }
                    );
                  }
                  a(null);
                },
                [l, e]
              ),
              {
                renameNode: function (e) {
                  return u(
                    $(
                      $({}, e),
                      {},
                      {
                        type: 'rename',
                      }
                    )
                  );
                },
                deleteNode: function (e) {
                  return u(
                    $(
                      $({}, e),
                      {},
                      {
                        type: 'delete',
                      }
                    )
                  );
                },
                currentOp: l,
                error: r,
              }
            );
          })(b),
          R = D.renameNode,
          _ = D.deleteNode,
          T = D.currentOp,
          S = D.error,
          F = s.useState(null),
          I = Object(i.a)(F, 2),
          U = I[0],
          A = I[1],
          L = s.useState(null),
          q = Object(i.a)(L, 2),
          V = q[0],
          Y = q[1];
        if (
          (s.useEffect(
            function () {
              S && p('Something went wrong trying to move or remove a file.');
            },
            [S, p]
          ),
          o)
        )
          return Object(r.b)(J, {
            rows: n === M.a ? 5 : 1,
            depth: f.length,
          });
        if (l)
          return Object(r.b)(O.c, {
            depth: f.length,
            interactive: !1,
            children: l,
          });
        if (!a) return null;
        var K = a.some(function (e) {
            if (C)
              return (
                e.type === j.d.File &&
                (n === M.a ? C === e.filename : C === n + '/' + e.filename)
              );
          }),
          Z =
            !u &&
            y &&
            ((n === M.a && !C) ||
              C === n ||
              K ||
              (n === M.a && C && v.a.includes(C))),
          Q = new Set(
            a.map(function (e) {
              return e.filename;
            })
          ),
          ee = (
            null !== (t = d.pendingUploads) && void 0 !== t ? t : []
          ).filter(function (e) {
            var t = e.targetPath,
              r = t.lastIndexOf('/');
            return (-1 !== r ? t.slice(0, r) : void 0) === n && !Q.has(t);
          });
        return Object(r.c)(r.a, {
          children: [
            Object(r.b)('div', {
              style: {
                position: 'relative',
              },
              children: Object(r.b)('div', {
                style: {
                  position: 'absolute',
                  top: 0,
                  display: 'none',
                  left: 0,
                },
                children: Object(r.b)(J, {
                  rows: n === M.a ? 6 : 3,
                  depth: f.length,
                }),
              }),
            }),
            a.map(function (e) {
              var t = e.filename,
                i = e.type,
                c = [].concat(Object(m.a)(f), [t]).join('/'),
                o = a.filter(function (e) {
                  return e.filename !== t;
                });
              if ((null === T || void 0 === T ? void 0 : T.path) === c)
                return 'rename' === T.type
                  ? Object(r.c)(
                      O.c,
                      {
                        depth: f.length,
                        onClick: function () {
                          return null;
                        },
                        children: [
                          Object(r.b)(O.a, {
                            type: j.d.File,
                            path: c,
                          }),
                          Object(r.b)(O.b, {
                            children: T.path.split('/').pop() || '',
                          }),
                        ],
                      },
                      t
                    )
                  : null;
              if ((null === U || void 0 === U ? void 0 : U.filename) === t)
                return Object(r.b)(
                  O.c,
                  {
                    depth: 0,
                    onClick: function () {
                      return null;
                    },
                    children: Object(r.b)(z.a, {
                      type: i,
                      parentPath: n,
                      siblings: o,
                      initialValue: t,
                      rename: !0,
                      onSubmit: function (e) {
                        var t = [].concat(Object(m.a)(f), [e]).join('/');
                        R({
                          fileType: i,
                          path: c,
                          to: t,
                        });
                      },
                      onCancel: function () {
                        return A(null);
                      },
                    }),
                  },
                  t
                );
              var l = {
                siblings: o,
                readOnly: u,
                active: C === c,
                path: c,
                key: t,
                getNodeType: (function () {
                  var e = Object(h.a)(
                    g.a.mark(function e(t) {
                      var n;
                      return g.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), b.readFile(t);
                            case 2:
                              return (
                                (n = e.sent),
                                e.abrupt(
                                  'return',
                                  n.error === j.e.IsDirectory
                                    ? j.d.Directory
                                    : j.d.File
                                )
                              );
                            case 4:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                overwriteNode: (function () {
                  var e = Object(h.a)(
                    g.a.mark(function e(t) {
                      var n, r, a;
                      return g.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.path),
                                (r = t.type),
                                (a =
                                  r === j.d.Directory
                                    ? b.deleteDir
                                    : b.deleteFile),
                                (e.next = 4),
                                a(n)
                              );
                            case 4:
                              if (!e.sent.error) {
                                e.next = 8;
                                break;
                              }
                              return (
                                p(
                                  'Something went wrong trying to move: '.concat(
                                    c
                                  )
                                ),
                                e.abrupt('return')
                              );
                            case 8:
                              R({
                                path: c,
                                fileType: i,
                                to: n,
                              });
                            case 9:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                onClick: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {
                            newTab: !1,
                          },
                    t = e.newTab;
                  return E({
                    path: c,
                    type: i,
                    newTab: t,
                  });
                },
                onRename: function () {
                  return A({
                    filename: t,
                    type: i,
                  });
                },
                onDownload: (function () {
                  var e = Object(h.a)(
                    g.a.mark(function e() {
                      var n, r, a;
                      return g.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), b.readFile(c);
                            case 2:
                              if (!(n = e.sent).error) {
                                e.next = 6;
                                break;
                              }
                              return p(n.error), e.abrupt('return');
                            case 6:
                              (r = Object(W.d)(c)),
                                (a = document.createElement('a')).setAttribute(
                                  'href',
                                  'data:'
                                    .concat(r, ';base64,')
                                    .concat(n.content.toString('base64'))
                                ),
                                a.setAttribute('download', t),
                                (a.style.display = 'none'),
                                document.body.appendChild(a),
                                a.click(),
                                document.body.removeChild(a);
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                onDelete: function () {
                  return Y({
                    filename: t,
                    type: i,
                  });
                },
              };
              return i === j.d.File
                ? Object(r.b)(G, $({}, l))
                : Object(r.b)(ie, $($({}, l), d));
            }),
            ee.map(function (e, t) {
              var n = e.targetPath,
                i = e.progress;
              return Object(r.b)(
                G,
                {
                  onRename: function () {
                    return null;
                  },
                  onDownload: function () {
                    return null;
                  },
                  onDelete: function () {
                    return null;
                  },
                  overwriteNode: function () {
                    return null;
                  },
                  getNodeType: Object(h.a)(
                    g.a.mark(function e() {
                      return g.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt('return', j.d.File);
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  siblings: a.filter(function (e) {
                    return e.filename !== n;
                  }),
                  path: n,
                  progress: i,
                  readOnly: !0,
                  onClick: function () {
                    return null;
                  },
                },
                ''.concat(n, '_').concat(t)
              );
            }),
            u || a.length || Z
              ? null
              : Object(r.b)(w, {
                  depth: f.length,
                  onCreateClick: function (e) {
                    n &&
                      E({
                        path: n,
                        type: j.d.Directory,
                      }),
                      k(e);
                  },
                }),
            Z && y
              ? Object(r.b)(B, {
                  siblings: a || [],
                  parentPath: n,
                  create: function (e) {
                    var t = e.path,
                      n = e.type;
                    return (
                      n === j.d.File &&
                        'readme.md' === t.toLowerCase() &&
                        Object(x.track)(x.events.README_CREATED),
                      n === j.d.File
                        ? b.writeFile(t, H.a.from(''))
                        : b.createDir(t)
                    );
                  },
                  type: y,
                  onError: function (e) {
                    return p('Something went wrong: '.concat(e));
                  },
                  onCancel: function () {
                    return k(null);
                  },
                  onCreate: function (e) {
                    k(null), E(e);
                  },
                })
              : null,
            Object(r.b)(N.c, {
              isOpen: Boolean(V),
              onRequestClose: function () {
                return Y(null);
              },
              children: V
                ? Object(r.b)(X, {
                    filename: V.filename,
                    entityType: V.type === j.d.File ? 'file' : 'folder',
                    onCancel: function () {
                      return Y(null);
                    },
                    onConfirm: function () {
                      Y(null),
                        _({
                          fileType: V.type,
                          path: []
                            .concat(Object(m.a)(f), [V.filename])
                            .join('/'),
                        });
                    },
                  })
                : null,
            }),
          ],
        });
      }
      var te = n('pMk8'),
        ne = n('v0rv');

      function re(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? re(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function ie(e) {
        var t = e.path,
          n = e.active,
          a = e.onClick,
          o = e.onRename,
          u = e.onDelete,
          b = e.overwriteNode,
          g = Object(c.a)(e, [
            'path',
            'active',
            'onClick',
            'onRename',
            'onDelete',
            'overwriteNode',
          ]),
          h = g.fs,
          m = g.transformChildren,
          x = g.uploadFiles,
          y = g.readOnly,
          w = g.getNodeType,
          C = g.setPendingFileType,
          R = g.activePath ? g.activePath.split('/') : [],
          _ = t.split('/'),
          T = _.length - 1,
          S = _[T],
          I = t === M.a,
          A =
            I ||
            (R.length > T + 1 &&
              R.slice(0, T + 1).every(function (e, t) {
                return _[t] === e;
              })),
          L = Object(P.a)().showError,
          G = s.useState(null),
          z = Object(i.a)(G, 2),
          q = z[0],
          B = z[1],
          H = s.useState(null),
          V = Object(i.a)(H, 2),
          Y = V[0],
          K = V[1],
          X = s.useState([]),
          Z = Object(i.a)(X, 2),
          J = Z[0],
          W = Z[1];
        s.useEffect(
          function () {
            if (q) {
              var e = !1;
              return (
                q.dir.then(function (t) {
                  if (!e) {
                    if (t.error) {
                      if (t.error === j.e.AlreadyExists) {
                        var n =
                          '.' === q.path ? S : ''.concat(q.path, '/').concat(S);
                        return void w(n).then(function (e) {
                          K({
                            path: n,
                            type: e,
                          }),
                            B(null);
                        });
                      }
                      L('Something went wrong trying to remove '.concat(S));
                    }
                    B(null);
                  }
                }),
                function () {
                  e = !0;
                }
              );
            }
          },
          [q, S, w, L]
        );
        var Q = s.useState(null),
          $ = Object(i.a)(Q, 2),
          ne = $[0],
          re = $[1];
        s.useEffect(
          function () {
            if (ne) {
              var e = !1;
              return (
                ('dir' in ne ? ne.dir : ne.file).then(function () {
                  e || re(null);
                }),
                function () {
                  e = !0;
                }
              );
            }
          },
          [ne]
        );
        var ie = Object(f.a)({
            path: t,
            initialExpanded: I || A || n,
            fs: g.fs,
          }),
          oe = ie.collapse,
          le = ie.expand,
          se = ie.children,
          ue = ie.loading,
          de = ie.error,
          pe = ie.expanded;
        s.useEffect(
          function () {
            !pe && A && le();
          },
          [le, pe, A]
        ),
          s.useEffect(
            function () {
              !pe && n && g.pendingFileType && le();
            },
            [le, pe, n, g.pendingFileType]
          );
        var fe = Object(k.a)({
            item: {
              type: j.d.Directory,
              path: t,
            },
            type: j.d.Directory,
            canDrag: function () {
              return !g.readOnly;
            },
            collect: function (e) {
              return {
                isDragging: e.isDragging(),
              };
            },
            end: function (e, t) {
              t.didDrop() && B(t.getDropResult());
            },
          }),
          be = Object(i.a)(fe, 2),
          ge = be[0].isDragging,
          he = be[1],
          me = Object(te.a)({
            accept: [j.d.File, j.d.Directory, p.b.FILE],
            canDrop: function (e) {
              return (
                'files' in e ||
                (e.path !== t &&
                  !Object(F.b)(e.path, t) &&
                  !(
                    Object(F.a)(t, e.path) ||
                    (t === M.a && !e.path.includes('/'))
                  ))
              );
            },
            drop: function (e, n) {
              if (!n.didDrop()) {
                if (!('dirContent' in e)) {
                  var r = e.path.split('/'),
                    a = r[r.length - 1];
                  if (
                    null === se || void 0 === se
                      ? void 0
                      : se.find(function (e) {
                          return e.filename === a;
                        })
                  )
                    return e.type === j.d.Directory
                      ? {
                          dir: Promise.resolve({
                            error: j.e.AlreadyExists,
                          }),
                          path: t,
                        }
                      : {
                          file: Promise.resolve({
                            error: j.e.AlreadyExists,
                          }),
                          path: t,
                        };
                  if (
                    null !== se &&
                    void 0 !== se &&
                    se.some(function (n) {
                      return (
                        ''.concat(t, '/').concat(n.filename, '}') === e.path
                      );
                    })
                  ) {
                    var i = Promise.resolve({
                      error: null,
                    });
                    return e.type === j.d.Directory
                      ? {
                          dir: i,
                          path: t,
                        }
                      : {
                          file: i,
                          path: t,
                        };
                  }
                  var c = t + '/' + a;
                  if (e.type === j.d.Directory) {
                    var o = h.moveDir(e.path, c);
                    return (
                      re({
                        dir: o,
                      }),
                      {
                        dir: o,
                        path: t,
                      }
                    );
                  }
                  var l = h.moveFile(e.path, c);
                  return (
                    re({
                      file: l,
                    }),
                    {
                      file: l,
                      path: t,
                    }
                  );
                }
                e.dirContent.then(function (e) {
                  x({
                    parentPath: I ? void 0 : t,
                    files: e,
                  });
                });
              }
            },
            collect: function (e) {
              return {
                isOver:
                  e.canDrop() &&
                  e.isOver({
                    shallow: !0,
                  }),
              };
            },
          }),
          ve = Object(i.a)(me, 2),
          xe = ve[0].isOver,
          je = ve[1];
        s.useEffect(
          function () {
            if (xe && !pe) {
              var e = setTimeout(le, 500);
              return function () {
                clearTimeout(e);
              };
            }
          },
          [xe, le, pe]
        ),
          s.useEffect(
            function () {
              se &&
                t === M.a &&
                W(
                  se.filter(function (e) {
                    return v.a.includes(e.filename);
                  })
                );
            },
            [t, se]
          );
        var ye = se;
        return (
          ye &&
            m &&
            (ye = m({
              children: ye,
              path: t,
            })),
          Object(r.c)('div', {
            ref: function (e) {
              je(e), he(e);
            },
            className:
              'jsx-2426283221 ' +
              (d()('dir-node', {
                'is-dropping': xe,
                'is-dragging': ge,
                'is-removing': q,
                'root-node': t === M.a,
              }) || ''),
            children: [
              I
                ? null
                : Object(r.b)(O.c, {
                    active: n || xe,
                    depth: T,
                    onClick: function (e) {
                      pe ? oe() : le(), a(e);
                    },
                    actions: y
                      ? void 0
                      : [E.a.Rename, E.a.AddFile, E.a.AddFolder, E.a.Delete],
                    onAction: function (e) {
                      switch ((n || a(), pe || le(), e)) {
                        case E.a.Rename:
                          return void o();
                        case E.a.AddFile:
                          return void C(j.d.File);
                        case E.a.AddFolder:
                          return void C(j.d.Directory);
                        case E.a.Delete:
                          u();
                      }
                    },
                    children: Object(r.c)('div', {
                      className: 'jsx-2426283221 node-info',
                      children: [
                        Object(r.b)(O.a, {
                          type: j.d.Directory,
                          path: t,
                          expanded: pe,
                          active: n,
                        }),
                        Object(r.b)(O.b, {
                          children: S,
                        }),
                        pe || y
                          ? null
                          : Object(r.b)(U, {
                              path: t,
                            }),
                      ],
                    }),
                  }),
              Object(r.b)('div', {
                className:
                  'jsx-2426283221 ' +
                  (d()({
                    hidden: !pe,
                  }) || ''),
                children: Object(r.b)(
                  ee,
                  ae(
                    {
                      parentPath: t,
                      nodes: ye,
                      loading: ue || (I && !m),
                      error: de,
                    },
                    g
                  )
                ),
              }),
              J.length
                ? Object(r.b)(ce, {
                    socialView: Boolean(y),
                    children: Object(r.b)(
                      ee,
                      ae(
                        ae({}, g),
                        {},
                        {
                          uploadFiles: function () {},
                          pendingFileType: null,
                          setPendingFileType: function () {},
                          nodes: J,
                          parentPath: t,
                        }
                      )
                    ),
                  })
                : null,
              Object(r.b)(N.c, {
                isOpen: Boolean(Y),
                onRequestClose: function () {
                  return K(null);
                },
                children: Y
                  ? Object(r.b)(D.a, {
                      paths: [Y.path],
                      onCancel: function () {
                        return K(null);
                      },
                      onConfirm: function () {
                        b(Y), K(null);
                      },
                    })
                  : null,
              }),
              Object(r.b)(l.a, {
                id: '2426283221',
                children: [
                  '.dir-node.jsx-2426283221{border-radius:var(--deprecated-border-radius-1);width:100%;}',
                  '.root-node.jsx-2426283221{overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:var(--deprecated-spacing-1);padding-top:0;}',
                  '.node-info.jsx-2426283221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}',
                  '.hidden.jsx-2426283221{display:none;height:0;width:0;}',
                  '.is-removing.jsx-2426283221{opacity:0.5;pointer-events:none;}',
                  '.is-dropping.jsx-2426283221{background-color:var(--deprecated-color-primary-transparent-2);}',
                  '.is-dragging.jsx-2426283221{opacity:0.7;}',
                ],
              }),
            ],
          })
        );
      }

      function ce(e) {
        var t = e.socialView,
          n = e.children;
        return t
          ? Object(r.c)(r.a, {
              children: [
                Object(r.b)(ne.a, {
                  height: 1,
                }),
                Object(r.c)(Y.b, {
                  align: 'stretch',
                  spacing: 1,
                  children: [
                    Object(r.b)('span', {
                      className: 'jsx-45189092 eyebrow',
                      children: 'Package files',
                    }),
                    Object(r.b)('div', {
                      className: 'jsx-45189092 packager-nodes-wrapper',
                      children: n,
                    }),
                  ],
                }),
                Object(r.b)(l.a, {
                  id: '45189092',
                  children: [
                    '.eyebrow.jsx-45189092{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;font-size:var(--deprecated-font-size-desktop-text-xsmall);color:var(--deprecated-color-foreground-2);font-weight:var(--deprecated-font-weight-medium);text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-align:center;}',
                    '.packager-nodes-wrapper.jsx-45189092{position:relative;width:100%;}',
                  ],
                }),
              ],
            })
          : Object(r.c)(Y.b, {
              spacing: 0,
              children: [
                Object(r.b)('div', {
                  className: 'jsx-2992974968 heading-container',
                  children: Object(r.b)(V.a, {
                    level: 5,
                    children: 'Packager files',
                  }),
                }),
                n,
                Object(r.b)(l.a, {
                  id: '2992974968',
                  children: [
                    '.heading-container.jsx-2992974968{padding:var(--deprecated-spacing-2) var(--deprecated-spacing-1) var(--deprecated-spacing-2) var(--deprecated-spacing-2);white-space:nowrap;}',
                  ],
                }),
              ],
            });
      }
    },
    EP3k: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var r = n('vJKn'),
        a = n.n(r),
        i = n('rg98'),
        c = n('0gYX'),
        o = n.n(c),
        l = n('gfZM');

      function s(e) {
        return u.apply(this, arguments);
      }

      function u() {
        return (u = Object(i.a)(
          a.a.mark(function e(t) {
            var n, r, i, c, s, u;
            return a.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.fs), (r = t.language), (e.next = 3), n.readDir('.')
                    );
                  case 3:
                    if (!(i = e.sent).error) {
                      e.next = 6;
                      break;
                    }
                    throw new Error('Could not read files');
                  case 6:
                    return (
                      (c = i.children),
                      !(s = o.a.getMainFileName(r)) &&
                        c.length &&
                        (s = c[0].filename),
                      (e.next = 11),
                      n.readFile(s)
                    );
                  case 11:
                    if (!(u = e.sent).error) {
                      e.next = 14;
                      break;
                    }
                    throw u.error;
                  case 14:
                    return e.abrupt('return', l.a.from(u.content).toString());
                  case 15:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    FtpG: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return O;
      }),
        n.d(t, 'a', function () {
          return w;
        }),
        n.d(t, 'b', function () {
          return k;
        });
      var r = n('BGKE'),
        a = n('xvhg'),
        i = n('MX0m'),
        c = n.n(i),
        o = n('q1tI'),
        l = n('TSYQ'),
        s = n.n(l),
        u = n('YuJD'),
        d = n('/TwY'),
        p = n('eZMQ'),
        f = n('8PE+'),
        b = n('kx/0'),
        g = n('nXXz'),
        h = n('8v8i'),
        m = n('VwSA'),
        v = n('UWUU'),
        x = n('0HhJ'),
        j = n('Wjzo'),
        y = n('dI/k');

      function O(e) {
        var t = e.depth,
          n = e.active,
          i = e.children,
          l = e.onClick,
          d = e.interactive,
          f = void 0 === d || d,
          b = e.className,
          g = e.actions,
          h = e.onAction,
          m = o.useRef(null),
          v = o.useState(!1),
          x = Object(a.a)(v, 2),
          j = x[0],
          y = x[1],
          O = o.useRef(null);
        return Object(r.c)('div', {
          ref: m,
          onClick: l
            ? function (e) {
                return l({
                  newTab: Object(u.b)(e),
                });
              }
            : void 0,
          onContextMenu: function (e) {
            O.current && (e.preventDefault(), O.current.open());
          },
          className:
            c.a.dynamic([
              ['61185252', [t, n || j ? 'flex' : 'none', n || j ? 1 : 0]],
            ]) +
            ' ' +
            (s()(b, 'node', {
              active: n,
              interactive: f,
            }) || ''),
          children: [
            i,
            g && g.length && h
              ? Object(r.b)('div', {
                  className:
                    c.a.dynamic([
                      [
                        '61185252',
                        [t, n || j ? 'flex' : 'none', n || j ? 1 : 0],
                      ],
                    ]) + ' actions',
                  children: Object(r.b)(p.b, {
                    ref: O,
                    onOpenChange: y,
                    actions: g,
                    onAction: h,
                    isActive: n,
                  }),
                })
              : null,
            Object(r.b)(c.a, {
              id: '61185252',
              dynamic: [t, n || j ? 'flex' : 'none', n || j ? 1 : 0],
              children: [
                '.node.__jsx-style-dynamic-selector{height:var(--deprecated-spacing-4);cursor:pointer;color:var(--deprecated-color-foreground-2);border-radius:var(--deprecated-border-radius-1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:calc('.concat(
                  t,
                  ' * var(--deprecated-spacing-2));font-size:var(--deprecated-font-size-desktop-text-small);}'
                ),
                '.node.interactive.__jsx-style-dynamic-selector:hover{background-color:var(--deprecated-color-control-3);color:var(--deprecated-color-foreground-1);}',
                '.node.interactive.__jsx-style-dynamic-selector:active{background-color:var(--deprecated-color-control-2);}',
                '.node.interactive.active.__jsx-style-dynamic-selector{background-color:var(--deprecated-color-primary-1);color:var(--white);}',
                '.node.interactive.active.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{background-color:var(--deprecated-color-primary-1);color:var(--white);font-weight:var(--deprecated-font-weight-medium);}',
                '.actions.__jsx-style-dynamic-selector{display:'
                  .concat(n || j ? 'flex' : 'none', ';opacity:')
                  .concat(
                    n || j ? 1 : 0,
                    ';-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;-webkit-transition:opacity;transition:opacity;height:100%;}'
                  ),
                '.is-touch-device .actions.__jsx-style-dynamic-selector,.node.__jsx-style-dynamic-selector:hover .actions.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:1;}',
              ],
            }),
          ],
        });
      }

      function w(e) {
        var t = e.expanded,
          n = e.active,
          a = e.type,
          i = e.path,
          o = null;
        if (a === h.d.Directory)
          o = Object(r.b)(f.a, {
            filled: n,
          });
        else if (d.a.includes(i))
          o = Object(r.b)(x.a, {
            filled: n,
          });
        else if (Object(y.g)(i))
          o = Object(r.b)(j.a, {
            filled: n,
          });
        else {
          var l = i.split('.').pop();
          if (l && l in m.a) {
            var s = n ? 'var(--white)' : m.a[l];
            o = Object(r.b)(v.LanguageIcon, {
              language: l,
              fill: s,
            });
          } else
            o = Object(r.b)(b.a, {
              filled: n,
            });
        }
        return Object(r.c)('div', {
          className:
            'jsx-2961266893 ' +
            c.a.dynamic([['73314849', [t ? 0 : -90]]]) +
            ' node-icon',
          children: [
            Object(r.b)('div', {
              className:
                'jsx-2961266893 ' +
                c.a.dynamic([['73314849', [t ? 0 : -90]]]) +
                ' gutter',
              children:
                a === h.d.Directory
                  ? Object(r.b)('div', {
                      className:
                        'jsx-2961266893 ' +
                        c.a.dynamic([['73314849', [t ? 0 : -90]]]) +
                        ' chevron',
                      children: Object(r.b)(g.a, {}),
                    })
                  : null,
            }),
            Object(r.b)('div', {
              className:
                'jsx-2961266893 ' +
                c.a.dynamic([['73314849', [t ? 0 : -90]]]) +
                ' icon',
              children: o,
            }),
            Object(r.b)(c.a, {
              id: '73314849',
              dynamic: [t ? 0 : -90],
              children: [
                '.chevron.__jsx-style-dynamic-selector{-webkit-transform:rotate('
                  .concat(t ? 0 : -90, 'deg);-ms-transform:rotate(')
                  .concat(t ? 0 : -90, 'deg);transform:rotate(')
                  .concat(t ? 0 : -90, 'deg);}'),
              ],
            }),
            Object(r.b)(c.a, {
              id: '2961266893',
              children: [
                '.node-icon.jsx-2961266893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',
                '.icon.jsx-2961266893{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:24px;height:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                '.gutter.jsx-2961266893{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:var(--deprecated-spacing-2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}',
                '.chevron.jsx-2961266893{-webkit-transition:0.1s -webkit-transform;-webkit-transition:0.1s transform;transition:0.1s transform;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}',
              ],
            }),
          ],
        });
      }

      function k(e) {
        var t = e.children;
        return Object(r.c)('div', {
          title: t,
          className: 'jsx-1172975031',
          children: [
            Object(r.b)('span', {
              className: 'jsx-1172975031',
              children: t,
            }),
            Object(r.b)(c.a, {
              id: '1172975031',
              children: [
                'div.jsx-1172975031{font-size:var(--deprecated-font-size-desktop-text-small);-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding-left:var(--deprecated-spacing-1);padding-right:var(--deprecated-spacing-half);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
              ],
            }),
          ],
        });
      }
    },
    IjuC: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var r = n('vJKn'),
        a = n.n(r),
        i = n('rg98');

      function c(e) {
        return o.apply(this, arguments);
      }

      function o() {
        return (o = Object(i.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (window.navigator.clipboard) {
                        e.next = 3;
                        break;
                      }
                      return l(t), e.abrupt('return');
                    case 3:
                      return (
                        (e.prev = 3),
                        (e.next = 6),
                        window.navigator.clipboard.writeText(t)
                      );
                    case 6:
                      e.next = 11;
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(3)), l(t);
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 8]]
            );
          })
        )).apply(this, arguments);
      }

      function l(e) {
        var t = document.createElement('textarea');
        (t.value = e),
          (t.style.top = '0'),
          (t.style.left = '0'),
          (t.style.position = 'fixed'),
          document.body.appendChild(t),
          t.focus(),
          t.select(),
          document.execCommand('copy'),
          document.body.removeChild(t);
      }
    },
    LTTG: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'a', function () {
          return d;
        });
        var r = n('vJKn'),
          a = n.n(r),
          i = n('rg98'),
          c = n('RPwF'),
          o = n('zgDP'),
          l = n('dZ/7'),
          s = n('HADy'),
          u = n('Fz/E');

        function d(t) {
          var r,
            d = t.beforeRun,
            p = t.getMainFileContents,
            f = Object(u.a)(),
            b = s.b.OFFLINE;

          function g(e) {
            (b = e), f.emit(l.a.STATE_CHANGE, b);
          }

          function h(e) {
            return m.apply(this, arguments);
          }

          function m() {
            return (m = Object(i.a)(
              a.a.mark(function t(i) {
                var u, d, p, b, m, x, j, y, O, w, k, E;
                return a.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (u = i.replId),
                          (d = i.hostedUrl),
                          (p = i.language),
                          (b = i.iframeParent),
                          (m = i.timeout),
                          (x = void 0 === m ? 5e3 : m),
                          r && v(),
                          (t.next = 4),
                          n
                            .e(273)
                            .then(n.t.bind(null, 'i5jj', 7))
                            .then(function (e) {
                              return e.default;
                            })
                        );
                      case 4:
                        if (((j = t.sent), b))
                          for (; b.firstChild; ) b.removeChild(b.firstChild);
                        if (
                          ((y = new j(p, {
                            useIframe: !0,
                            iframeParent: b,
                            track: o.track,
                          })).on('warn', function (e) {
                            f.emit(l.a.OUTPUT, e);
                          }),
                          (O = e.env.PR_REVIEW_APP
                            ? '/public/secure/'
                            : 'https://replbox.repl.it/public/secure/'),
                          'html' !== p && 'kaboom' !== p)
                        ) {
                          t.next = 13;
                          break;
                        }
                        if (d) {
                          t.next = 12;
                          break;
                        }
                        throw new Error('Expected hostedUrl for ' + p);
                      case 12:
                        O = d + '/__debug_wrapper.html';
                      case 13:
                        return (
                          (w = 'kaboom' === p ? 'html' : p),
                          (k = ''
                            .concat(
                              window.location.origin,
                              '/public/replbox_lang/'
                            )
                            .concat(c.version, '/')
                            .concat(w, '.js')),
                          (E = !1),
                          (t.next = 18),
                          new Promise(function (e, t) {
                            var n = setTimeout(function () {
                                (E = !0),
                                  Object(o.track)(
                                    o.events.LOAD_REPLBOX_ENGINE_TIMED_OUT,
                                    {
                                      language: p,
                                    }
                                  ),
                                  e();
                              }, x),
                              r = window.performance.now();
                            y.load({
                              iframeOrigin: O,
                              languageBundleSrc: k,
                            })
                              .then(function () {
                                clearTimeout(n),
                                  Object(o.track)(
                                    o.events.LOAD_REPLBOX_ENGINE_TIME,
                                    {
                                      time: window.performance.now() - r,
                                    }
                                  ),
                                  e();
                              })
                              .catch(function (e) {
                                clearTimeout(n), t(e);
                              });
                          })
                        );
                      case 18:
                        if (!E) {
                          t.next = 21;
                          break;
                        }
                        return (
                          y.destroy(),
                          t.abrupt(
                            'return',
                            h({
                              replId: u,
                              language: p,
                              hostedUrl: d,
                              iframeParent: b,
                            })
                          )
                        );
                      case 21:
                        (r = {
                          replId: u,
                          replbox: y,
                          language: p,
                          hostedUrl: d,
                        }),
                          g(s.b.IDLE);
                      case 23:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }

          function v() {
            var e;
            if (null === (e = r) || void 0 === e || !e.replbox)
              throw new Error('replbox not loaded. runState is; ' + b);
            g(s.b.OFFLINE), r.replbox.destroy(), (r = null);
          }

          function x() {
            return (x = Object(i.a)(
              a.a.mark(function e() {
                var t;
                return a.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (r) {
                          e.next = 2;
                          break;
                        }
                        throw new Error(
                          'replbox not loaded. runState is; ' + b
                        );
                      case 2:
                        if ('web_project' !== r.language) {
                          e.next = 4;
                          break;
                        }
                        throw new Error('TODO?');
                      case 4:
                        return g(s.b.RUNNING), (e.next = 7), d(r.language);
                      case 7:
                        if (b === s.b.RUNNING) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt('return');
                      case 9:
                        if (r) {
                          e.next = 11;
                          break;
                        }
                        throw new Error(
                          'replbox not loaded. runState is; ' + b
                        );
                      case 11:
                        return (e.next = 13), r.replbox.reset();
                      case 13:
                        if ((f.emit(l.a.RESET), b === s.b.RUNNING)) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt('return');
                      case 16:
                        if ('html' !== r.language && 'kaboom' !== r.language) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (e.next = 19),
                          r.replbox.runProject([], {
                            stdout: function (e) {
                              return f.emit(l.a.OUTPUT, e);
                            },
                            stderr: function (e) {
                              return f.emit(l.a.ERROR, e);
                            },
                            replId: r.replId,
                            url: r.hostedUrl,
                          })
                        );
                      case 19:
                        return (
                          b === s.b.RUNNING && g(s.b.IDLE), e.abrupt('return')
                        );
                      case 21:
                        return (e.next = 23), p(r.language);
                      case 23:
                        if (((t = e.sent), b === s.b.RUNNING)) {
                          e.next = 26;
                          break;
                        }
                        return e.abrupt('return');
                      case 26:
                        return e.abrupt('return', j(t));
                      case 27:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }

          function j(e) {
            return y.apply(this, arguments);
          }

          function y() {
            return (y = Object(i.a)(
              a.a.mark(function e(t) {
                var n;
                return a.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (r) {
                          e.next = 2;
                          break;
                        }
                        throw new Error(
                          'replbox not loaded. runState is; ' + b
                        );
                      case 2:
                        return (
                          b !== s.b.RUNNING && g(s.b.RUNNING),
                          (e.next = 5),
                          r.replbox.evaluate(t, {
                            stdout: function (e) {
                              return f.emit(l.a.OUTPUT, e);
                            },
                          })
                        );
                      case 5:
                        if (((n = e.sent), b === s.b.RUNNING)) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt('return');
                      case 8:
                        if (!n.error) {
                          e.next = 11;
                          break;
                        }
                        return f.emit(l.a.ERROR, n.error), e.abrupt('return');
                      case 11:
                        f.emit(l.a.RESULT, n.data), g(s.b.IDLE);
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            f.on(l.a.ERROR, function () {
              g(s.b.IDLE);
            }),
            {
              load: h,
              run: function () {
                return x.apply(this, arguments);
              },
              write: function (e) {
                if (!r)
                  throw new Error('replbox not loaded. runState is; ' + b);
                if (b !== s.b.RUNNING)
                  throw new Error('replbox is not running. runState is; ' + b);
                r.replbox.write(e);
              },
              evalCode: j,
              refreshWebview: function () {
                if (!r)
                  throw new Error('replbox not loaded. runState is; ' + b);
                r.replbox.refreshWebProject();
              },
              stopRun: function () {
                if (!r)
                  throw new Error('replbox not loaded. runState is; ' + b);
                try {
                  r.replbox.stop();
                } catch (e) {
                  if (e.message.match(/postmessage/i)) return;
                  throw e;
                }
                g(s.b.IDLE);
              },
              destroy: v,
              onResult: function (e) {
                return (
                  f.on(l.a.RESULT, e),
                  function () {
                    f.removeListener(l.a.RESULT, e);
                  }
                );
              },
              onOutput: function (e) {
                return (
                  f.on(l.a.OUTPUT, e),
                  function () {
                    f.removeListener(l.a.OUTPUT, e);
                  }
                );
              },
              onError: function (e) {
                return (
                  f.on(l.a.ERROR, e),
                  function () {
                    f.removeListener(l.a.ERROR, e);
                  }
                );
              },
              onReset: function (e) {
                return (
                  f.on(l.a.RESET, e),
                  function () {
                    f.removeListener(l.a.RESET, e);
                  }
                );
              },
              onStateChanged: function (e) {
                return (
                  f.on(l.a.STATE_CHANGE, e),
                  function () {
                    f.removeListener(l.a.STATE_CHANGE, e);
                  }
                );
              },
              getRunState: function () {
                return b;
              },
            }
          );
        }
      }.call(this, n('8oxB')));
    },
    RPwF: function (e) {
      e.exports = JSON.parse(
        '{"name":"@replit/replbox","version":"2.20.0","description":"A sandboxed browser REPL","main":"dist/index.js","files":["/dist"],"scripts":{"prepublishOnly":"yarn build && cp stuffjschild.html dist","clean":"rm -rf ./dist","build":"yarn clean && NODE_ENV=production webpack --config ./webpack.config.js --bail","test":"prettier --check  \\"src/**/*.js\\" && jest","prettier":"prettier --write \\"src/**/*.js\\"","dev":"NODE_ENV=development node dev_server.js"},"author":"amjad@repl.it","license":"UNLICENSED","devDependencies":{"@replit/alcor":"^0.1.0","@sentry/browser":"^5.7.1","apl":"git+https://github.com/ngn/apl.git#cc314fe3be5f2d018d556b7e91916711e46d265e","babel-core":"^6.25.0","babel-generator":"6.26.0","babel-loader":"7.1.2","babel-polyfill":"6.26.0","babel-preset-env":"1.6.1","babel-preset-stage-2":"6.24.1","babel-template":"6.26.0","babel-traverse":"6.26.0","babel-types":"^6.26.0","babylon":"6.18.0","biwascheme":"git+https://github.com/masad-frost/biwascheme.git#3c0d5a67cd1af696c69ab7fb085b2f42c8b0586c","codemirror":"^5.52.0","context-eval":"^0.1.0","empty-module":"^0.0.2","express":"^4.17.1","happypack":"^4.0.1","inspect-x":"1.7.0","jasmine-core":"^2.4.1","jasmine_dom_matchers":"^1.4.0","jest":"^24.9.0","prettier":"^1.18.2","puppeteer":"^1.11.0","script-loader":"0.7.0","serve-handler":"^6.1.2","stuff.js":"^0.4.1","underscore":"1.2.2","underscore.string":"2.0.0","webpack":"3.10","webpack-dev-middleware":"^2","whatwg-fetch":"^3.0.0"},"dependencies":{},"jest":{"globalSetup":"<rootDir>/jest_setup.js","globalTeardown":"<rootDir>/jest_teardown.js","verbose":true,"bail":1},"prettier":{"trailingComma":"all","tabWidth":2,"semi":true,"singleQuote":true}}'
      );
    },
    VGyt: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var r = n('0gYX'),
        a = n.n(r),
        i = n('/TwY'),
        c = n('8v8i'),
        o = n('8/ze');

      function l(e, t) {
        return function (n) {
          var r = n.path,
            l = n.children;
          var s =
              r === o.a
                ? l.filter(function (n) {
                    var c = n.filename;
                    return (
                      !a.a.isLangFileBinary(e, c) &&
                      (r !== o.a || '.env' !== c) &&
                      (r !== o.a || '.breakpoints' !== c) &&
                      !i.a.includes(c) &&
                      (!e.includes('nix') ||
                        !t ||
                        !('.replit' === c || 'replit.nix' === c))
                    );
                  })
                : l,
            u = a.a.getMainFileName(e);
          return s.sort(function (e, t) {
            return r === o.a && e.filename === u
              ? -1
              : (r === o.a && t.filename === u) ||
                (t.type === c.d.Directory && e.type !== c.d.Directory)
              ? 1
              : e.type === c.d.Directory && t.type !== c.d.Directory
              ? -1
              : e.filename.localeCompare(t.filename);
          });
        };
      }
    },
    VwSA: function (e, t, n) {
      'use strict';
      t.a = {
        py: '#78ABC0',
        rb: '#DD646A',
        js: '#C5B007',
        jsx: '#C5B007',
        java: '#84BEE2',
        html: '#F98545',
        css: '#28AAE6',
        cpp: '#659AD1',
        c: '#A8B9CB',
      };
    },
    'X07/': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return h;
      }),
        n.d(t, 'b', function () {
          return m;
        });
      var r = n('vJKn'),
        a = n.n(r),
        i = n('xvhg'),
        c = n('rg98'),
        o = n('0gYX'),
        l = n.n(o),
        s = n('tSgl'),
        u = n('8v8i'),
        d = n('8/ze'),
        p = n('nmgF'),
        f = n('tZOq'),
        b = '.replit',
        g = 'replit.nix';

      function h(e, t) {
        var n = t.startsWith('nix'),
          r = n ? null : l.a.getMainFileName(t);
        if (r && l.a.usesInterpreter(t) && e.includes(r)) return r;
        if (e.includes('Makefile')) return 'Makefile';
        if (r && e.includes(r)) return r;
        if (!n && e.includes(b)) return '.replit';
        var a = e.find(function (e) {
          return e.endsWith('.md');
        });
        return (
          a ||
          e.find(function (e) {
            return (!n || ![b, g].includes(e)) && !Object(s.isHiddenFile)(e);
          })
        );
      }

      function m(e) {
        return v.apply(this, arguments);
      }

      function v() {
        return (v = Object(c.a)(
          a.a.mark(function e(t) {
            var n, r, c, o, l, s, b, g, m, v, x, j, y, O;
            return a.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((r = t.container), (c = t.fs), (o = t.replId), p.a)) {
                      e.next = 3;
                      break;
                    }
                    throw new Error('Expected apollo client');
                  case 3:
                    return (
                      (e.next = 5),
                      p.a.query({
                        query: f.u,
                        variables: {
                          replId: o,
                        },
                      })
                    );
                  case 5:
                    return (
                      (l = e.sent),
                      (s = l.data),
                      (e.next = 9),
                      Promise.all([c.readDir(d.a), r.getDotReplit()])
                    );
                  case 9:
                    if (
                      ((b = e.sent),
                      (g = Object(i.a)(b, 2)),
                      (m = g[0]),
                      (v = g[1].dotReplit),
                      m && !m.error)
                    ) {
                      e.next = 15;
                      break;
                    }
                    throw new Error('Could not read files');
                  case 15:
                    if (
                      ((x = m.children),
                      (j = x.find(function (e) {
                        return (
                          e.type === u.d.File &&
                          e.filename.toLowerCase().endsWith('readme.md')
                        );
                      })),
                      null === v || void 0 === v || !v.entrypoint)
                    ) {
                      e.next = 19;
                      break;
                    }
                    return e.abrupt('return', {
                      entrypoint: v.entrypoint,
                      readmeFile:
                        null === j || void 0 === j ? void 0 : j.filename,
                    });
                  case 19:
                    if (
                      ((y =
                        'Repl' === s.repl.__typename ? s.repl.language : ''),
                      (O = x
                        .filter(function (e) {
                          return e.type === u.d.File;
                        })
                        .map(function (e) {
                          return e.filename;
                        })),
                      ('CurrentUser' ===
                        (null === (n = s.currentUser) || void 0 === n
                          ? void 0
                          : n.__typename) &&
                        s.currentUser.flagReadmePreview) ||
                        null === j ||
                        void 0 === j ||
                        !j.filename)
                    ) {
                      e.next = 24;
                      break;
                    }
                    return e.abrupt('return', {
                      entrypoint: j.filename,
                      readmeFile: j.filename,
                    });
                  case 24:
                    return e.abrupt('return', {
                      entrypoint: h(O, y),
                      readmeFile:
                        null === j || void 0 === j ? void 0 : j.filename,
                    });
                  case 25:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    bG4O: function (e, t, n) {
      'use strict';
      var r = n('vJKn'),
        a = n.n(r),
        i = n('rg98'),
        c = n('0gYX'),
        o = n.n(c),
        l = (function () {
          var e = Object(i.a)(
            a.a.mark(function e(t) {
              var n, r, i, c, l;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((n = t.getContext())) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt('return', !1);
                    case 3:
                      if (!o.a.supportsPackager3(n.repl.language)) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', !0);
                    case 5:
                      if (
                        !n.repl.language.startsWith('nix') ||
                        !n.repl.flagOwnerDotReplitPackager
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 8), t.getDotReplit();
                    case 8:
                      if (
                        ((c = e.sent),
                        null === (l = c.dotReplit) ||
                          void 0 === l ||
                          null === (r = l.packager) ||
                          void 0 === r ||
                          null === (i = r.features) ||
                          void 0 === i ||
                          !i.guessImports)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt('return', !0);
                    case 12:
                      return e.abrupt('return', !1);
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      t.a = l;
    },
    'dZ/7': function (e, t, n) {
      'use strict';
      var r;
      n.d(t, 'a', function () {
        return r;
      }),
        (function (e) {
          (e.STATE_CHANGE = 'STATE_CHANGE'),
            (e.OUTPUT = 'OUTPUT'),
            (e.ERROR = 'ERROR'),
            (e.RESULT = 'RESULT'),
            (e.RESET = 'RESET');
        })(r || (r = {}));
    },
    eZMQ: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r,
        a,
        i = n('BGKE'),
        c = n('cpVT'),
        o = n('MX0m'),
        l = n.n(o),
        s = n('q1tI'),
        u = n('TSYQ'),
        d = n.n(u),
        p = n('IdsG'),
        f = n('AYTL'),
        b = n('M85P');

      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                Object(c.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      !(function (e) {
        (e.AddFile = 'AddFile'),
          (e.AddFolder = 'AddFolder'),
          (e.UploadFile = 'UploadFile'),
          (e.UploadFolder = 'UploadFolder'),
          (e.DownloadZip = 'DownloadZip'),
          (e.ShowConfigFiles = 'ShowConfigFiles'),
          (e.HideConfigFiles = 'HideConfigFiles'),
          (e.OpenTab = 'OpenTab'),
          (e.CopyLink = 'CopyLink'),
          (e.Rename = 'Rename'),
          (e.Download = 'Download'),
          (e.Delete = 'Delete');
      })(a || (a = {}));
      var m =
        ((r = {}),
        Object(c.a)(r, a.AddFile, 'Add file'),
        Object(c.a)(r, a.AddFolder, 'Add folder'),
        Object(c.a)(r, a.UploadFile, 'Upload file'),
        Object(c.a)(r, a.UploadFolder, 'Upload folder'),
        Object(c.a)(r, a.ShowConfigFiles, 'Show config files'),
        Object(c.a)(r, a.HideConfigFiles, 'Hide config files'),
        Object(c.a)(r, a.DownloadZip, 'Download as zip'),
        Object(c.a)(r, a.OpenTab, 'Open tab'),
        Object(c.a)(r, a.CopyLink, 'Copy link'),
        Object(c.a)(r, a.Rename, 'Rename'),
        Object(c.a)(r, a.Download, 'Download'),
        Object(c.a)(r, a.Delete, 'Delete'),
        r);

      function v(e) {
        var t = e.isNegative,
          n = e.isHighlighted,
          r = e.children;
        return Object(i.c)('div', {
          className:
            'jsx-3832556683 ' +
            (d()({
              'is-negative': t,
              'is-highlighted': n,
            }) || ''),
          children: [
            Object(i.b)(p.a, {
              size: 'small',
              children: r,
            }),
            Object(i.b)(l.a, {
              id: '3832556683',
              children: [
                'div.jsx-3832556683{color:var(--deprecated-color-foreground-1);padding:var(--deprecated-spacing-1);margin:var(--deprecated-spacing-half);border-radius:var(--deprecated-border-radius-1);font-weight:var(--deprecated-font-weight-regular);cursor:pointer;white-space:nowrap;}',
                'div.jsx-3832556683:hover{cursor:pointer;}',
                '.is-highlighted.jsx-3832556683{background-color:var(--deprecated-color-control-3);}',
                '.is-negative.jsx-3832556683 *{color:var(--deprecated-color-negative-1) !important;}',
                '.is-negative.jsx-3832556683:hover{background-color:var(--deprecated-color-negative-1);}',
                '.is-negative.jsx-3832556683:hover *{color:var(--white) !important;}',
              ],
            }),
          ],
        });
      }
      var x = function (e, t) {
        var n = e.isActive,
          r = e.actions,
          c = e.onAction,
          o = e.onOpenChange,
          u = Object(b.d)({
            items: r,
            onSelectedItemChange: function (e) {
              var t = e.selectedItem;
              t && (c(t), O());
            },
          }),
          d = u.isOpen,
          p = u.getToggleButtonProps,
          g = u.getMenuProps,
          x = u.highlightedIndex,
          j = u.getItemProps,
          y = u.openMenu,
          O = u.reset;
        s.useImperativeHandle(t, function () {
          return {
            open: y,
          };
        }),
          s.useEffect(
            function () {
              o && o(d);
            },
            [d, o]
          );
        var w = p(),
          k = r.includes(a.UploadFile);
        return Object(i.c)('div', {
          className:
            l.a.dynamic([
              [
                '1079488551',
                [
                  n ? 'var(--white)' : 'var(--deprecated-color-foreground-3)',
                  n ? 'auto' : 'var(--deprecated-color-foreground-1)',
                ],
              ],
            ]) + ' node-actions-menu',
          children: [
            Object(i.b)(
              'button',
              h(
                h({}, w),
                {},
                {
                  onClick: function (e) {
                    e.stopPropagation(), w.onClick(e);
                  },
                  className:
                    l.a.dynamic([
                      [
                        '1079488551',
                        [
                          n
                            ? 'var(--white)'
                            : 'var(--deprecated-color-foreground-3)',
                          n ? 'auto' : 'var(--deprecated-color-foreground-1)',
                        ],
                      ],
                    ]) +
                    ' ' +
                    ((w && null != w.className && w.className) || ''),
                  children: Object(i.b)(f.a, {
                    size: 'large',
                  }),
                }
              )
            ),
            Object(i.b)(
              'div',
              h(
                h({}, g()),
                {},
                {
                  className: l.a.dynamic([
                    [
                      '1079488551',
                      [
                        n
                          ? 'var(--white)'
                          : 'var(--deprecated-color-foreground-3)',
                        n ? 'auto' : 'var(--deprecated-color-foreground-1)',
                      ],
                    ],
                  ]),
                  children: d
                    ? Object(i.c)('ul', {
                        className: l.a.dynamic([
                          [
                            '1079488551',
                            [
                              n
                                ? 'var(--white)'
                                : 'var(--deprecated-color-foreground-3)',
                              n
                                ? 'auto'
                                : 'var(--deprecated-color-foreground-1)',
                            ],
                          ],
                        ]),
                        children: [
                          r.map(function (e, t) {
                            return Object(i.b)(
                              'li',
                              h(
                                h(
                                  {},
                                  j({
                                    item: e,
                                    index: t,
                                    onClick: function (e) {
                                      return e.stopPropagation();
                                    },
                                  })
                                ),
                                {},
                                {
                                  className: l.a.dynamic([
                                    [
                                      '1079488551',
                                      [
                                        n
                                          ? 'var(--white)'
                                          : 'var(--deprecated-color-foreground-3)',
                                        n
                                          ? 'auto'
                                          : 'var(--deprecated-color-foreground-1)',
                                      ],
                                    ],
                                  ]),
                                  children: Object(i.b)(v, {
                                    isHighlighted: x === t,
                                    isNegative: e === a.Delete,
                                    children: m[e],
                                  }),
                                }
                              ),
                              e
                            );
                          }),
                          k
                            ? Object(i.c)('div', {
                                className:
                                  l.a.dynamic([
                                    [
                                      '1079488551',
                                      [
                                        n
                                          ? 'var(--white)'
                                          : 'var(--deprecated-color-foreground-3)',
                                        n
                                          ? 'auto'
                                          : 'var(--deprecated-color-foreground-1)',
                                      ],
                                    ],
                                  ]) + ' protip',
                                children: [
                                  Object(i.b)('span', {
                                    className: l.a.dynamic([
                                      [
                                        '1079488551',
                                        [
                                          n
                                            ? 'var(--white)'
                                            : 'var(--deprecated-color-foreground-3)',
                                          n
                                            ? 'auto'
                                            : 'var(--deprecated-color-foreground-1)',
                                        ],
                                      ],
                                    ]),
                                    children: 'PROTIP:',
                                  }),
                                  ' drag and drop files or folders to upload!',
                                ],
                              })
                            : null,
                        ],
                      })
                    : null,
                }
              )
            ),
            Object(i.b)(l.a, {
              id: '1079488551',
              dynamic: [
                n ? 'var(--white)' : 'var(--deprecated-color-foreground-3)',
                n ? 'auto' : 'var(--deprecated-color-foreground-1)',
              ],
              children: [
                '.node-actions-menu.__jsx-style-dynamic-selector{position:relative;width:20px;height:100%;}',
                '.is-touch-device .protip.__jsx-style-dynamic-selector{display:none;}',
                '.protip.__jsx-style-dynamic-selector{font-size:13px;padding:10px 5px;text-align:center;color:var(--deprecated-color-foreground-1);border-top:1px solid var(--deprecated-color-foreground-3);}',
                '.protip.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{color:var(--deprecated-color-positive-1);font-weight:var(--deprecated-font-weight-bold);font-size:12px;}',
                'button.__jsx-style-dynamic-selector{top:0;width:100%;height:100%;display:block;background-color:transparent;border:0 none;cursor:pointer;color:'.concat(
                  n ? 'var(--white)' : 'var(--deprecated-color-foreground-3)',
                  ';border-radius:var(--deprecated-border-radius-1);}'
                ),
                'button.__jsx-style-dynamic-selector:hover{color:'.concat(
                  n ? 'auto' : 'var(--deprecated-color-foreground-1)',
                  ';}'
                ),
                'button.__jsx-style-dynamic-selector:focus{outline:none;}',
                'ul.__jsx-style-dynamic-selector{width:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:var(--deprecated-color-background-1);border-radius:var(--deprecated-border-radius-1);box-shadow:0px 8px 16px 0px rgba(2,2,3,0.32);list-style:none;position:absolute;right:var(--deprecated-spacing-1);top:calc(100% - var(--deprecated-spacing-1));z-index:1;}',
                'ul.__jsx-style-dynamic-selector:focus{outline:none;}',
              ],
            }),
          ],
        });
      };
      t.b = s.forwardRef(x);
    },
    f47c: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        a = r.createContext(null);
      t.a = a;
    },
    gnTG: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      });
      var r,
        a = n('xvhg'),
        i = n('vJKn'),
        c = n.n(i),
        o = n('rg98'),
        l = n('Fz/E'),
        s = n('gtzJ'),
        u = n('5+mB'),
        d = n('XWHH'),
        p = n.n(d);

      function f(e) {
        var t = e.container,
          n = Object(l.a)(),
          i = null,
          d = !1;

        function f() {
          return b.apply(this, arguments);
        }

        function b() {
          return (b = Object(o.a)(
            c.a.mark(function e() {
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((d || m(), !i || 'open' !== i.status)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt('return', i);
                    case 3:
                      return e.abrupt(
                        'return',
                        new Promise(function (e) {
                          n.once(r.CHANNEL_OPENED, function (t) {
                            e(t);
                          });
                        })
                      );
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function g() {
          return h.apply(this, arguments);
        }

        function h() {
          return (h = Object(o.a)(
            c.a.mark(function e() {
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        new Promise(function (e, n) {
                          var r = !1,
                            a = t.openChannel(
                              {
                                service: 'packager3',
                              },
                              function (t) {
                                var i = t.channel,
                                  c = t.error;
                                if (r)
                                  throw new Error(
                                    'getAnonymousChannel fullfilled but openChannelCb called again'
                                  );
                                if (!c)
                                  return (
                                    e([i, a]),
                                    function (e) {
                                      e.willReconnect && a(),
                                        r ||
                                          ((r = !0),
                                          n(
                                            new Error(
                                              'Expected getAnonymousChannel promise to be fulfilled when closing'
                                            )
                                          ));
                                    }
                                  );
                                n(c);
                              }
                            );
                        })
                      );
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function m() {
          if (d) throw new Error('Already called open channel');
          (d = !0),
            t.openChannel(
              {
                service: 'packager3',
                name: 'packager',
              },
              function (e) {
                var t = e.channel;
                if (!e.error) {
                  if (!t) throw new Error('Expected channel');
                  return (
                    t.onCommand(function (e) {
                      if (null != e.state) {
                        var t = e.state === u.api.State.Running;
                        n.emit(r.STATE_CHANGED, t);
                      } else null != e.output ? n.emit(r.OUTPUT, e.output) : null != e.error && n.emit(r.ERROR, e.error);
                    }),
                    (i = t),
                    n.emit(r.CHANNEL_OPENED, t),
                    function () {
                      i = null;
                    }
                  );
                }
              }
            );
        }
        return {
          addPackages: function (e) {
            return Object(o.a)(
              c.a.mark(function t() {
                var n, r, a;
                return c.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), f();
                      case 2:
                        return (
                          (n = t.sent),
                          (r = e.map(function (e) {
                            return {
                              name: e,
                            };
                          })),
                          (t.next = 6),
                          n.request({
                            packageAdd: {
                              pkgs: r,
                            },
                          })
                        );
                      case 6:
                        if (!(a = t.sent).channelClosed) {
                          t.next = 9;
                          break;
                        }
                        return t.abrupt('return', !1);
                      case 9:
                        return t.abrupt('return', Boolean(a.ok));
                      case 10:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          removePackages: function (e) {
            return Object(o.a)(
              c.a.mark(function t() {
                var n, r, a;
                return c.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), f();
                      case 2:
                        return (
                          (n = t.sent),
                          (r = e.map(function (e) {
                            return {
                              name: e,
                            };
                          })),
                          (t.next = 6),
                          n.request({
                            packageRemove: {
                              pkgs: r,
                            },
                          })
                        );
                      case 6:
                        if (!(a = t.sent).channelClosed) {
                          t.next = 9;
                          break;
                        }
                        return t.abrupt('return', !1);
                      case 9:
                        return t.abrupt('return', Boolean(a.ok));
                      case 10:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          searchPackages: function (e) {
            return Object(o.a)(
              c.a.mark(function n() {
                var r, i, o, l, u, d, f;
                return c.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            !(
                              (null !==
                                (i =
                                  null === (r = t.getContext()) || void 0 === r
                                    ? void 0
                                    : r.repl.language) &&
                                void 0 !== i &&
                                i.includes('python')) ||
                              'pygame' === i
                            )
                          ) {
                            n.next = 10;
                            break;
                          }
                          return (
                            (n.prev = 2),
                            n.abrupt(
                              'return',
                              p()(
                                'https://pipsearch.amasad.repl.co/search?name=' +
                                  encodeURIComponent(e),
                                {
                                  mode: 'cors',
                                }
                              ).then(function (e) {
                                return e.json();
                              })
                            )
                          );
                        case 6:
                          return (
                            (n.prev = 6),
                            (n.t0 = n.catch(2)),
                            s.c(n.t0),
                            n.abrupt('return', [])
                          );
                        case 10:
                          return (n.next = 12), g();
                        case 12:
                          return (
                            (o = n.sent),
                            (l = Object(a.a)(o, 2)),
                            (u = l[0]),
                            (d = l[1]),
                            (n.next = 18),
                            u.request({
                              packageSearch: {
                                query: e,
                              },
                            })
                          );
                        case 18:
                          if (!(f = n.sent).channelClosed) {
                            n.next = 21;
                            break;
                          }
                          return n.abrupt('return', []);
                        case 21:
                          if (
                            (d(),
                            'packageSearchResp' !== f.body ||
                              !f.packageSearchResp)
                          ) {
                            n.next = 24;
                            break;
                          }
                          return n.abrupt(
                            'return',
                            f.packageSearchResp.results || []
                          );
                        case 24:
                          return (
                            s.c(
                              new Error(
                                'Unknown packager3 command '.concat(
                                  f.body,
                                  '. '
                                ) +
                                  'Expected packageSearchResp. Received error: '.concat(
                                    f.error
                                  )
                              )
                            ),
                            n.abrupt('return', [])
                          );
                        case 26:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 6]]
                );
              })
            )();
          },
          fetchPackageInfo: function (e) {
            return Object(o.a)(
              c.a.mark(function t() {
                var n, r, i, o, l;
                return c.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), g();
                      case 2:
                        return (
                          (n = t.sent),
                          (r = Object(a.a)(n, 2)),
                          (i = r[0]),
                          (o = r[1]),
                          (t.next = 8),
                          i.request({
                            packageInfo: {
                              pkg: {
                                name: e,
                              },
                            },
                          })
                        );
                      case 8:
                        if (!(l = t.sent).channelClosed) {
                          t.next = 11;
                          break;
                        }
                        return t.abrupt('return', void 0);
                      case 11:
                        if (
                          (o(),
                          'packageInfoResp' !== l.body || !l.packageInfoResp)
                        ) {
                          t.next = 14;
                          break;
                        }
                        return t.abrupt(
                          'return',
                          l.packageInfoResp.pkg || void 0
                        );
                      case 14:
                        return (
                          s.c(
                            new Error(
                              'Unknown packager3 command '.concat(
                                l.body,
                                '. '
                              ) +
                                'Expected packageInfoResp. Received error: '.concat(
                                  l.error
                                )
                            )
                          ),
                          t.abrupt('return', void 0)
                        );
                      case 16:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          installPackages: function () {
            return Object(o.a)(
              c.a.mark(function e() {
                var t, n;
                return c.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), f();
                      case 2:
                        return (
                          (t = e.sent),
                          (e.next = 5),
                          t.request({
                            packageInstall: {},
                          })
                        );
                      case 5:
                        if (!(n = e.sent).channelClosed) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt('return', !1);
                      case 8:
                        return e.abrupt('return', Boolean(n.ok));
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          listSpecfile: function () {
            return Object(o.a)(
              c.a.mark(function e() {
                var t, n, r, i, o, l, u, d;
                return c.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), g();
                      case 2:
                        return (
                          (t = e.sent),
                          (n = Object(a.a)(t, 2)),
                          (r = n[0]),
                          (i = n[1]),
                          (e.next = 8),
                          r.request({
                            packageListSpecfile: {},
                          })
                        );
                      case 8:
                        if (!(o = e.sent).channelClosed) {
                          e.next = 11;
                          break;
                        }
                        return e.abrupt('return', {
                          packages: null,
                          error: 'channel closed',
                        });
                      case 11:
                        i(),
                          (e.t0 = o.body),
                          (e.next =
                            'error' === e.t0
                              ? 15
                              : 'packageListSpecfileResp' === e.t0
                              ? 16
                              : 20);
                        break;
                      case 15:
                        return e.abrupt('return', {
                          packages: null,
                          error: 'list specfile failed: '.concat(o.error),
                        });
                      case 16:
                        if (
                          (u =
                            null === (l = o.packageListSpecfileResp) ||
                            void 0 === l
                              ? void 0
                              : l.pkgs)
                        ) {
                          e.next = 19;
                          break;
                        }
                        return e.abrupt('return', {
                          packages: null,
                          error: 'list specfile returned an empty response',
                        });
                      case 19:
                        return e.abrupt('return', {
                          packages: u,
                          error: null,
                        });
                      case 20:
                        return (
                          (d =
                            'Unknown packager3 listSpecFile command '.concat(
                              o.body,
                              '. '
                            ) + 'Expected error or packageListSpecfileResp'),
                          s.c(new Error(d)),
                          e.abrupt('return', {
                            packages: null,
                            error: d,
                          })
                        );
                      case 23:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          onOutput: function (e) {
            return (
              n.on(r.OUTPUT, e),
              function () {
                n.removeListener(r.OUTPUT, e);
              }
            );
          },
          onError: function (e) {
            return (
              n.on(r.ERROR, e),
              function () {
                n.removeListener(r.ERROR, e);
              }
            );
          },
          onStateChanged: function (e) {
            return (
              n.on(r.STATE_CHANGED, e),
              function () {
                n.removeListener(r.STATE_CHANGED, e);
              }
            );
          },
        };
      }
      !(function (e) {
        (e.OUTPUT = 'OUTPUT'),
          (e.ERROR = 'ERROR'),
          (e.STATE_CHANGED = 'STATE_CHANGED'),
          (e.CHANNEL_OPENED = 'CHANNEL_OPENED');
      })(r || (r = {}));
    },
    'j/ei': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return P;
      });
      var r = n('BGKE'),
        a = n('cpVT'),
        i = n('z7pX'),
        c = n('xvhg'),
        o = n('MX0m'),
        l = n.n(o),
        s = n('q1tI'),
        u = n('8v8i'),
        d = n('yzOi'),
        p = n('KRxe'),
        f = n('FtpG'),
        b = n('5QjX'),
        g = n('7lhO'),
        h = n('tZOq'),
        m = n('0gYX'),
        v = n.n(m),
        x = n('M85P'),
        j = n('rYih'),
        y = n('tpqs'),
        O = n('tQ+K'),
        w = n('tSgl'),
        k = n('8/ze');

      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }

      function N(e) {
        var t = e.siblingNames,
          n = e.fileName,
          r = e.initialValue,
          a = e.parentPath;
        if (n.includes('/')) return 'File names cannot include forward slashes';
        if ('.' === n || '..' === n)
          return 'File names cannot be "'.concat(n, '"');
        if (r !== n && t.includes(n))
          return 'A file or folder with that name already exists';
        if (n.length > 100)
          return 'File names cannot be longer than 100 characters';
        var i = a === k.a ? n : a + '/' + n;
        return '.env' === i
          ? 'You can create environment variables via the environment variables sidebar! (.env files are deprecated)'
          : Object(w.isHiddenFile)(i)
          ? '"'.concat(i, '" is reserved')
          : null;
      }
      var D = function (e) {
        var t = e.onSelect,
          n = e.onCancel,
          a = e.parentPath,
          o = e.type,
          u = e.siblings,
          d = a === k.a ? 0 : a.split('/').length,
          b = Object(g.a)(),
          m = Object(h.Yc)({
            variables: {
              replId: b,
            },
          }).data,
          w = ['.md', '.draw'],
          E = ['.gitignore', '.replit'],
          D = s.useState(''),
          P = Object(c.a)(D, 2),
          R = P[0],
          _ = P[1];
        if (
          (s.useEffect(
            function () {
              R && t(R);
            },
            [R, t]
          ),
          'Repl' === (null === m || void 0 === m ? void 0 : m.repl.__typename))
        ) {
          var T = v.a.getMainFileName(m.repl.language);
          w.unshift(Object(y.extname)(T));
        }
        var S = s.useRef(null),
          F = Object(j.a)()
            .session.getRecentFiles()
            .map(function (e) {
              return Object(y.extname)(e);
            })[0];
        '.' !== F && F && w.unshift(F);
        var I = Object(i.a)(new Set(w)),
          U = v.a
            .allSupportedByPopularity()
            .map(function (e) {
              return '.' + e.ext;
            })
            .sort(),
          A = Object(i.a)(
            new Set(
              I.concat(U).concat(['.json', '.txt', '.toml', '.css', '.nix'])
            )
          ),
          L = s.useState(I),
          G = Object(c.a)(L, 2),
          z = G[0],
          q = G[1],
          M = Object(x.c)({
            items: z,
            defaultHighlightedIndex: 0,
            initialHighlightedIndex: 0,
            onInputValueChange: function (e) {
              var t = e.inputValue;
              if (t) {
                var n = t.includes('.') ? t.slice(0, t.lastIndexOf('.')) : t,
                  r = t.includes('.') ? Object(y.extname)(t) : null,
                  i = (
                    '' === r
                      ? E
                      : '.' === r || null === r || I.includes(r)
                      ? I
                      : A
                  )
                    .map(function (e) {
                      return n + e;
                    })
                    .filter(function (e) {
                      return !N({
                        siblingNames: u.map(function (e) {
                          return e.filename;
                        }),
                        fileName: e,
                        parentPath: a,
                      });
                    });
                if (i) {
                  if ((i.includes(t) || i.unshift(t), 'string' === typeof r)) {
                    var c = i.filter(function (e) {
                      return e.startsWith(t);
                    });
                    return 0 === c.length ? void M.reset() : void q(c);
                  }
                  q(i);
                } else M.reset();
              } else M.reset();
            },
            onSelectedItemChange: function (e) {
              e.selectedItem && _(B);
            },
          }),
          B =
            M.highlightedIndex > -1 && M.inputValue
              ? z[M.highlightedIndex]
              : '',
          H = N({
            siblingNames: u.map(function (e) {
              return e.filename;
            }),
            fileName: B,
            parentPath: a,
          });
        return Object(r.c)('div', {
          children: [
            Object(r.b)(
              'div',
              C(
                C(
                  {
                    className: 'combobox',
                  },
                  M.getComboboxProps()
                ),
                {},
                {
                  children: Object(r.b)(
                    p.b,
                    C(
                      {
                        autoFocus: !0,
                        validationResults: H
                          ? [
                              {
                                state: 'error',
                                message: H,
                              },
                            ]
                          : void 0,
                      },
                      M.getInputProps({
                        placeholder: '',
                        ref: S,
                        onBlur: function () {
                          n();
                        },
                      })
                    )
                  ),
                }
              )
            ),
            Object(r.c)(
              'div',
              C(
                C({}, M.getMenuProps()),
                {},
                {
                  className: l.a.dynamic([['2342764326', [d, d]]]),
                  children: [
                    M.isOpen
                      ? Object(r.b)('ul', {
                          className:
                            l.a.dynamic([['2342764326', [d, d]]]) + ' menu',
                          children: z.map(function (e, t) {
                            return Object(r.c)(
                              'div',
                              {
                                className:
                                  l.a.dynamic([['2342764326', [d, d]]]) +
                                  ' liwrap',
                                children: [
                                  Object(r.b)('div', {
                                    className:
                                      l.a.dynamic([['2342764326', [d, d]]]) +
                                      ' icon',
                                    children: Object(r.b)(f.a, {
                                      type: o,
                                      path: e,
                                    }),
                                  }),
                                  Object(r.b)(
                                    'li',
                                    C(
                                      C(
                                        {
                                          style:
                                            M.highlightedIndex === t
                                              ? {
                                                  backgroundColor:
                                                    'var(--deprecated-color-primary-transparent-2)',
                                                }
                                              : {},
                                        },
                                        M.getItemProps({
                                          item: e,
                                          index: t,
                                        })
                                      ),
                                      {},
                                      {
                                        onMouseDown: function () {
                                          _(e);
                                        },
                                        className:
                                          l.a.dynamic([
                                            ['2342764326', [d, d]],
                                          ]) + ' truncate',
                                        children: M.inputValue
                                          ? Object(r.b)('bdi', {
                                              className: l.a.dynamic([
                                                ['2342764326', [d, d]],
                                              ]),
                                              children: Object(r.b)(O.c, {
                                                source: e,
                                                match: M.inputValue,
                                                matchStyle: {
                                                  color:
                                                    M.highlightedIndex === t
                                                      ? 'var(--deprecated-color-primary-2)'
                                                      : 'var(--deprecated-color-foreground-4)',
                                                },
                                                style: {
                                                  color:
                                                    M.highlightedIndex === t
                                                      ? 'var(--deprecated-color-primary-2)'
                                                      : 'var(--deprecated-color-foreground-2)',
                                                },
                                              }),
                                            })
                                          : e,
                                      }
                                    ),
                                    ''.concat(e).concat(t)
                                  ),
                                ],
                              },
                              ''.concat(t).concat(e).concat(t)
                            );
                          }),
                        })
                      : null,
                    Object(r.b)(l.a, {
                      id: '2342764326',
                      dynamic: [d, d],
                      children: [
                        '.menu.__jsx-style-dynamic-selector{font-weight:var(--deprecated-font-weight-regular);cursor:pointer;overflow-y:auto;top:100%;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:var(--deprecated-color-background-1);border:1px solid var(--deprecated-color-control-2);border-radius:var(--deprecated-border-radius-1);list-style:none;z-index:1;position:absolute;box-shadow:var(--deprecated-shadow-1);}',
                        '.truncate.__jsx-style-dynamic-selector{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;direction:rtl;text-align:left;}',
                        '@media not all and (min-resolution:0.001dpcm){@media{.truncate.__jsx-style-dynamic-selector{direction:ltr;}}}',
                        '@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){@media{.truncate.__jsx-style-dynamic-selector{direction:ltr;}}}',
                        '@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){.truncate.__jsx-style-dynamic-selector{direction:ltr;}}}',
                        ".combobox.__jsx-style-dynamic-selector{display:'inline-block';}",
                        '.li-wrap.__jsx-style-dynamic-selector{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;}',
                        'li.__jsx-style-dynamic-selector{color:var(--deprecated-color-foreground-1);margin:var(--deprecated-spacing-half);border-radius:var(--deprecated-border-radius-1);font-weight:var(--deprecated-font-weight-regular);cursor:pointer;white-space:nowrap;padding-top:var(--deprecated-spacing-1);padding-right:var(--deprecated-spacing-1);padding-bottom:var(--deprecated-spacing-1);padding-left:calc( '.concat(
                          d,
                          ' * var(--deprecated-spacing-2) + var(--deprecated-spacing-6) );}'
                        ),
                        '.icon.__jsx-style-dynamic-selector{position:absolute;padding-left:calc('.concat(
                          d,
                          ' * var(--deprecated-spacing-2));margin-top:var(--deprecated-spacing-half);color:var(--deprecated-color-foreground-2);}'
                        ),
                      ],
                    }),
                  ],
                }
              )
            ),
          ],
        });
      };

      function P(e) {
        var t = e.type,
          n = e.initialValue,
          a = e.onSubmit,
          i = e.onCancel,
          c = e.siblings,
          o = e.parentPath,
          g = e.rename,
          h = o === k.a ? 0 : o.split('/').length,
          m = s.useRef(null),
          v = Object(b.a)('flag-autocomplete'),
          x = Object(d.a)(n || '', function (e) {
            var t = N({
              siblingNames: c.map(function (e) {
                return e.filename;
              }),
              fileName: e,
              initialValue: n,
              parentPath: o,
            });
            return t
              ? {
                  message: t,
                }
              : null;
          });
        return (
          s.useEffect(
            function () {
              if (n) {
                var e = n.lastIndexOf('.');
                -1 === e && (e = n.length),
                  m.current && m.current.setSelectionRange(0, e);
              }
            },
            [n]
          ),
          Object(r.c)('div', {
            className:
              'jsx-2075624227 ' +
              l.a.dynamic([['856310822', [h, h]]]) +
              ' input-wrap',
            children: [
              g || t === u.d.Directory || !v
                ? Object(r.c)(r.a, {
                    children: [
                      Object(r.b)(p.b, {
                        ref: m,
                        validationResults: x.error
                          ? [
                              {
                                state: 'error',
                                message: x.error.message,
                              },
                            ]
                          : void 0,
                        autoFocus: !0,
                        value: x.value,
                        onBlur: function () {
                          x.value && x.value !== n
                            ? x.error
                              ? i()
                              : a(x.value)
                            : i();
                        },
                        onKeyUp: x.validate,
                        onKeyDown: function (e) {
                          if ('Enter' === e.key) {
                            if (x.error) return;
                            return x.value !== n && x.value
                              ? void a(x.value)
                              : void i();
                          }
                          'Escape' === e.key && i();
                        },
                        onChange: function (e) {
                          x.setValue(e.target.value);
                        },
                      }),
                      Object(r.b)('div', {
                        className:
                          'jsx-2075624227 ' +
                          l.a.dynamic([['856310822', [h, h]]]) +
                          ' icon',
                        children: Object(r.b)(f.a, {
                          type: t,
                          path: x.value,
                        }),
                      }),
                    ],
                  })
                : Object(r.b)(D, {
                    onSelect: function (e) {
                      N({
                        siblingNames: c.map(function (e) {
                          return e.filename;
                        }),
                        fileName: e,
                        parentPath: o,
                      }) || a(e);
                    },
                    onCancel: i,
                    parentPath: o,
                    type: t,
                    siblings: c,
                  }),
              Object(r.b)(l.a, {
                id: '856310822',
                dynamic: [h, h],
                children: [
                  '.input-wrap.__jsx-style-dynamic-selector input{padding-left:calc( '.concat(
                    h,
                    ' * var(--deprecated-spacing-2) + var(--deprecated-spacing-6) );}'
                  ),
                  '.icon.__jsx-style-dynamic-selector{padding-left:calc('.concat(
                    h,
                    ' * var(--deprecated-spacing-2));}'
                  ),
                ],
              }),
              Object(r.b)(l.a, {
                id: '2075624227',
                children: [
                  '.input-wrap.jsx-2075624227{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;font-size:var(--deprecated-font-size-desktop-text-small);position:relative;}',
                  '.input-wrap.jsx-2075624227 input{font-size:inherit;padding-top:var(--deprecated-spacing-half);padding-bottom:var(--deprecated-spacing-half);}',
                  '.icon.jsx-2075624227{color:var(--deprecated-color-foreground-2);pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0;height:100%;}',
                ],
              }),
            ],
          })
        );
      }
    },
    qpca: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var r = n('xvhg'),
        a = n('q1tI'),
        i = n('rYih');

      function c() {
        var e = Object(i.a)().session,
          t = a.useState(e.getState()),
          n = Object(r.a)(t, 2),
          c = n[0],
          o = n[1];
        return (
          a.useEffect(
            function () {
              return o(e.getState()), e.onSessionStateChanged(o);
            },
            [e]
          ),
          c
        );
      }
    },
    t5A9: function (e, t, n) {
      'use strict';
      var r = n('xvhg'),
        a = n('q1tI');
      t.a = function (e) {
        var t = a.useState(e ? e.current : null),
          n = Object(r.a)(t, 2),
          i = n[0],
          c = n[1];
        return (
          a.useEffect(
            function () {
              if ((c(e ? e.current : null), e)) return e.subscribe(c);
            },
            [e]
          ),
          i
        );
      };
    },
    xKAX: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      }),
        n.d(t, 'b', function () {
          return o;
        });
      var r = n('q1tI'),
        a = n('aUsF'),
        i = n.n(a);

      function c(e) {
        var t = e.repl,
          n = e.currentUser;
        return {
          asViewer: e.asViewer,
          repl: {
            __typename: 'Repl',
            currentUserPermissions: t.currentUserPermissions,
            flagOwnerDotReplitPackager: t.flagOwnerDotReplitPackager,
            id: t.id,
            language: t.language,
            slug: t.slug,
          },
          currentUser: n
            ? {
                __typename: 'CurrentUser',
                id: n.id,
                username: n.username,
                flagTrackOtClientDataLoss: n.flagTrackOtClientDataLoss,
                isSubscribed: n.isSubscribed,
              }
            : void 0,
        };
      }

      function o(e) {
        var t = e ? c(e) : null,
          n = r.useRef(t);
        return i()(t, n.current) || (n.current = t), n.current;
      }
    },
    xhau: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var r = n('xvhg'),
        a = n('q1tI'),
        i = n('7njZ'),
        c = n('tSgl'),
        o = n('8/ze');

      function l(e) {
        var t = e.path,
          n = e.initialExpanded,
          l = e.fs,
          s = a.useState(null),
          u = Object(r.a)(s, 2),
          d = u[0],
          p = u[1],
          f = a.useState(null),
          b = Object(r.a)(f, 2),
          g = b[0],
          h = b[1],
          m = a.useState(Boolean(n)),
          v = Object(r.a)(m, 2),
          x = v[0],
          j = v[1],
          y = Object(i.a)();
        a.useEffect(
          function () {
            if (x) {
              var e = l.watchDir(t, {
                onChange: function (e) {
                  p(
                    e.filter(function (e) {
                      return !Object(c.isHiddenFile)(
                        t === o.a ? e.filename : t + '/' + e.filename
                      );
                    })
                  );
                },
                onError: function (e) {
                  h(e);
                },
              });
              return function () {
                y.current && p(null), e();
              };
            }
          },
          [l, t, x, p, h]
        );
        var O = a.useCallback(function () {
            j(!0);
          }, []),
          w = a.useCallback(function () {
            j(!1);
          }, []);
        return x
          ? g
            ? {
                collapse: w,
                expand: O,
                children: null,
                expanded: x,
                loading: !1,
                error: g,
              }
            : d
            ? {
                collapse: w,
                expand: O,
                children: d,
                loading: !1,
                error: g,
                expanded: x,
              }
            : {
                collapse: w,
                expand: O,
                children: d,
                loading: !0,
                error: g,
                expanded: x,
              }
          : {
              collapse: w,
              expand: O,
              children: null,
              loading: !1,
              error: null,
              expanded: x,
            };
      }
    },
    yoNG: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return d;
      });
      var r = n('BGKE'),
        a = n('MX0m'),
        i = n.n(a),
        c = (n('q1tI'), n('up5I')),
        o = n('V6K1'),
        l = n('xom/'),
        s = n('IdsG'),
        u = n('dI/k');

      function d(e) {
        var t,
          n = e.paths,
          a = e.onCancel,
          d = e.onConfirm;
        return Object(r.c)('div', {
          className: 'jsx-2932454058 content',
          children: [
            Object(r.c)(l.b, {
              spacing: 4,
              children: [
                Object(r.c)(l.b, {
                  spacing: 1,
                  children: [
                    Object(r.b)(o.a, {
                      level: 3,
                      children: 'Overwrite?',
                    }),
                    Object(r.c)(s.a, {
                      foreground: 2,
                      children: [
                        ((t = n),
                        (t = t.map(u.c)).length < 2
                          ? t[0]
                          : ''
                              .concat(t.slice(0, -1).join(', '), ' and ')
                              .concat(t.slice(-1))),
                        ' already exist in destination, are you sure you want overwrite them?',
                      ],
                    }),
                    Object(r.b)(s.a, {
                      foreground: 2,
                      children: 'This action cannot be reversed.',
                    }),
                  ],
                }),
                Object(r.c)(l.a, {
                  spacing: 1,
                  children: [
                    Object(r.b)(c.a, {
                      onClick: function () {
                        return a();
                      },
                      children: 'Cancel',
                    }),
                    Object(r.b)(c.a, {
                      color: 'negative',
                      filled: !0,
                      onClick: function () {
                        return d();
                      },
                      children: 'Replace',
                    }),
                  ],
                }),
              ],
            }),
            Object(r.b)(i.a, {
              id: '2932454058',
              children: [
                '.content.jsx-2932454058{padding:var(--deprecated-spacing-4);}',
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=923de583c14ed6eda5dd324c8d73b5ede1d224f6.fa538bb5915b3e947129.js.map

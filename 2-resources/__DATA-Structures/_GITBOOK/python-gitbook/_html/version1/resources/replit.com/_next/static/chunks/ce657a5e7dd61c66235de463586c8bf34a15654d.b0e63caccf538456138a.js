(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    '/1YH': function (e, t, r) {
      'use strict';
      var n = r('nKUr'),
        a = r('cpVT'),
        c = r('H+61'),
        o = r('UlJF'),
        i = r('7LId'),
        s = r('VIvw'),
        u = r('iHvq'),
        l = r('MX0m'),
        p = r.n(l),
        b = r('q1tI'),
        d = r('BvvR'),
        h = r('KRxe');

      function f(e, t) {
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

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                Object(a.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function v(e) {
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
          var r,
            n = Object(u.a)(e);
          if (t) {
            var a = Object(u.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(s.a)(this, r);
        };
      }
      var g = (function (e) {
        Object(i.a)(r, e);
        var t = v(r);

        function r() {
          var e;
          Object(c.a)(this, r);
          for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
            a[o] = arguments[o];
          return (
            ((e = t.call.apply(t, [this].concat(a))).state = {
              isShown: !1,
            }),
            (e.toggleShowHide = function () {
              e.setState({
                isShown: !e.state.isShown,
              });
            }),
            e
          );
        }
        return (
          Object(o.a)(r, [
            {
              key: 'focus',
              value: function () {
                this.input && this.input.focus();
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.state.isShown,
                  r = t ? 'HIDE' : 'SHOW';
                return Object(n.jsxs)('div', {
                  className: 'jsx-3588716774 password-input',
                  children: [
                    this.props.validated
                      ? Object(n.jsx)(
                          d.a,
                          m(
                            m(
                              {
                                ref: function (t) {
                                  return (e.input = t);
                                },
                                type: t ? 'text' : 'password',
                              },
                              this.props
                            ),
                            {},
                            {
                              validated: void 0,
                            }
                          )
                        )
                      : Object(n.jsx)(
                          h.b,
                          m(
                            m(
                              {
                                ref: function (t) {
                                  return (e.input = t);
                                },
                              },
                              this.props
                            ),
                            {},
                            {
                              type: t ? 'text' : 'password',
                              validated: void 0,
                            }
                          )
                        ),
                    this.props.value &&
                      this.props.value.length > 0 &&
                      Object(n.jsx)('div', {
                        onClick: this.toggleShowHide,
                        className: 'jsx-3588716774 password-show-toggle',
                        children: r,
                      }),
                    Object(n.jsx)(p.a, {
                      id: '3588716774',
                      children: [
                        '.password-input.jsx-3588716774{position:relative;}',
                        '.password-input.jsx-3588716774 input{padding-right:67px !important;}',
                        '.password-show-toggle.jsx-3588716774{position:absolute;right:19px;line-height:16px;top:12px;cursor:pointer;}',
                      ],
                    }),
                  ],
                });
              },
            },
          ]),
          r
        );
      })(b.Component);
      (g.defaultProps = {
        validated: !1,
        theme: 'replitLight',
      }),
        (t.a = g);
    },
    '01Dr': function (e, t, r) {
      'use strict';
      var n = r('vJKn'),
        a = r.n(n),
        c = r('rg98'),
        o = r('eWa3'),
        i = r.n(o),
        s = r('91Rb'),
        u = r.n(s),
        l = r('G5Ub');
      t.a = {
        email: (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (i()(t)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', {
                        message: 'Invalid email address',
                      });
                    case 2:
                      return (
                        (e.next = 4),
                        Object(l.d)('/data/user/exists', {
                          email: t,
                        })
                      );
                    case 4:
                      if (((r = e.sent), !r.exists)) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt('return', {
                        message: 'Email already in use',
                      });
                    case 8:
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
        username: (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        u()(t, {
                          min: 2,
                          max: 15,
                        })
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', {
                        message:
                          'Your username must be between 2 and 15 characters',
                      });
                    case 2:
                      if (t.match(/^[0-9a-zA-Z]+$/)) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt('return', {
                        message:
                          'Your username can only contain alphanumeric characters (letters A-Z, numbers 0-9)',
                      });
                    case 4:
                      return (
                        (e.next = 6),
                        Object(l.d)('/data/user/exists', {
                          username: t,
                        })
                      );
                    case 6:
                      if (((r = e.sent), !r.exists)) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt('return', {
                        message: 'Username is taken',
                      });
                    case 10:
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
        password: function (e) {
          return u()(e, {
            min: 8,
            max: 255,
          })
            ? /[A-Z]+/.test(e)
              ? /[a-z]+/.test(e)
                ? /[0-9]+/.test(e)
                  ? /.*[^0-9a-zA-Z\s].*/.test(e)
                    ? void 0
                    : {
                        message:
                          'Your password must contain a special character',
                      }
                  : {
                      message: 'Your password must contain a number',
                    }
                : {
                    message: 'Your password must contain a lowercase character',
                  }
              : {
                  message: 'Your password must contain an uppercase character',
                }
            : {
                message: 'Your password must be at least 8 characters long',
              };
        },
        school: function (e) {
          0;
        },
      };
    },
    '7J1T': function (e, t, r) {
      'use strict';
      r.d(t, 'f', function () {
        return l;
      }),
        r.d(t, 'd', function () {
          return p;
        }),
        r.d(t, 'a', function () {
          return b;
        }),
        r.d(t, 'e', function () {
          return d;
        }),
        r.d(t, 'c', function () {
          return h;
        }),
        r.d(t, 'b', function () {
          return f;
        });
      var n = r('cpVT'),
        a = r('vJKn'),
        c = r.n(a),
        o = r('rg98'),
        i = r('G5Ub');

      function s(e, t) {
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

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }

      function l(e) {
        var t = e.username,
          r = e.email,
          n = e.password,
          a = e.teacher,
          s = e.hCaptchaResponse,
          u = e.hCaptchaSiteKey,
          l = e.privacyInvite,
          p = e.source;
        return (function () {
          var e = Object(o.a)(
            c.a.mark(function e(o, b) {
              var d;
              return c.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          o({
                            type: 'FETCH_SIGNUP_REQUEST',
                          }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(i.d)('/signup', {
                            email: r,
                            username: t,
                            password: n,
                            teacher: a,
                            privacyInvite: l,
                            hCaptchaResponse: s,
                            hCaptchaSiteKey: u,
                            source: p,
                          })
                        );
                      case 4:
                        (d = e.sent), (e.next = 11);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          o({
                            type: 'FETCH_SIGNUP_FAILURE',
                            error: e.t0,
                          }),
                          e.abrupt('return', {
                            error: e.t0,
                          })
                        );
                      case 11:
                        return (
                          o({
                            type: 'FETCH_SIGNUP_SUCCESS',
                            user: d,
                          }),
                          e.abrupt('return', {
                            user: b().user.userInfo,
                          })
                        );
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      }

      function p(e) {
        var t = e.username,
          r = e.password,
          n = e.teacher,
          a = e.hCaptchaResponse,
          s = e.hCaptchaSiteKey;
        return (function () {
          var e = Object(o.a)(
            c.a.mark(function e(o, u) {
              var l;
              return c.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          o({
                            type: 'FETCH_LOGIN_REQUEST',
                          }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(i.d)('/login', {
                            username: t,
                            password: r,
                            teacher: n,
                            hCaptchaResponse: a,
                            hCaptchaSiteKey: s,
                          })
                        );
                      case 4:
                        (l = e.sent), (e.next = 11);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          o({
                            type: 'FETCH_LOGIN_FAILURE',
                            error: e.t0,
                          }),
                          e.abrupt('return', {
                            error: e.t0,
                          })
                        );
                      case 11:
                        return (
                          o({
                            type: 'FETCH_LOGIN_SUCCESS',
                            user: l,
                          }),
                          e.abrupt('return', {
                            user: u().user.userInfo,
                          })
                        );
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      }

      function b(e) {
        var t = e.provider;
        return (function () {
          var e = Object(o.a)(
            c.a.mark(function e(r, n) {
              var a, o;
              return c.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r({
                            type: 'FETCH_USER_INFO_REQUEST',
                          }),
                          (e.prev = 1),
                          (e.next = 4),
                          Object(i.b)('/is_authenticated')
                        );
                      case 4:
                        (a = e.sent), (e.next = 11);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          r({
                            type: 'FETCH_USER_INFO_FAILURE',
                            error: e.t0,
                          }),
                          e.abrupt('return', {
                            error: e.t0,
                          })
                        );
                      case 11:
                        if (a.success) {
                          e.next = 16;
                          break;
                        }
                        return (
                          ((o = new Error('Unauthorized')).status = 401),
                          r({
                            type: 'FETCH_USER_INFO_FAILURE',
                            error: o,
                          }),
                          e.abrupt('return', {
                            error: o,
                          })
                        );
                      case 16:
                        return (
                          r({
                            type: 'FETCH_USER_INFO_SUCCESS',
                            user: u(
                              u({}, a.user),
                              {},
                              {
                                loginMethod: t,
                                should_complete_profile:
                                  a.should_complete_profile,
                              }
                            ),
                          }),
                          e.abrupt('return', {
                            user: n().user.userInfo,
                          })
                        );
                      case 18:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      }

      function d() {
        return {
          type: 'AUTH_MODAL_SHOW',
        };
      }

      function h() {
        return {
          type: 'AUTH_MODAL_INCREMENT_PROMPT_COUNT',
        };
      }

      function f() {
        return {
          type: 'AUTH_MODAL_DISSMISS',
        };
      }
    },
    '8TBL': function (e, t, r) {
      'use strict';
      var n = r('BGKE'),
        a = r('MX0m'),
        c = r.n(a),
        o = r('q1tI'),
        i = r('vJKn'),
        s = r.n(i),
        u = r('rg98'),
        l = r('xvhg'),
        p = r('/MKj'),
        b = r('XLFt'),
        d = r('KRxe'),
        h = r('01Dr'),
        f = r('7J1T'),
        m = r('JxgA'),
        v = r('up5I'),
        g = r('IdsG'),
        O = r('yzOi'),
        j = r('xom/'),
        w = r('V6K1'),
        x = r('v0rv'),
        y = (r('dovX'), 'a20d9b66-6747-404a-9393-c449c4611661');

      function C(e) {
        return e.error
          ? [
              {
                message: e.error.message,
                state: 'error',
              },
            ]
          : e.isValid
          ? [
              {
                message: '',
                state: 'success',
              },
            ]
          : e.touched
          ? [
              {
                message: '',
                state: 'loading',
              },
            ]
          : void 0;
      }
      var S = function (e) {
          var t = e.email,
            r = void 0 === t ? '' : t,
            a = e.username,
            c = void 0 === a ? '' : a,
            i = e.password,
            S = void 0 === i ? '' : i,
            k = e.schoolName,
            E = void 0 === k ? '' : k,
            _ = e.isTeacher,
            T = e.randomUsername,
            U = void 0 === T ? '' : T,
            P = e.privacyInvite,
            R = e.onSubmit,
            I = e.onChangeAuth,
            N = e.toggleTeacher,
            F = e.source,
            H = void 0 === F ? 'explicit' : F,
            L = o.useState(!1),
            A = Object(l.a)(L, 2),
            D = A[0],
            z = A[1],
            B = Object(p.e)(),
            K = Object(O.a)(P ? U : c, h.a.username),
            M = Object(O.a)(
              P ? ''.concat(U, '@teams.noreply.replit.com') : r,
              h.a.email
            ),
            V = Object(O.a)(S || '', h.a.password),
            Y = Object(O.a)(E || '', h.a.school),
            G = (function () {
              var e = Object(u.a)(
                s.a.mark(function e(t) {
                  var r, n, a, c;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((t.preventDefault(), z(!0), K.isValid)) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 5), K.validate();
                          case 5:
                            if (!e.sent) {
                              e.next = 9;
                              break;
                            }
                            return z(!1), e.abrupt('return');
                          case 9:
                            if (M.isValid) {
                              e.next = 16;
                              break;
                            }
                            return (e.next = 12), M.validate();
                          case 12:
                            if (!e.sent) {
                              e.next = 16;
                              break;
                            }
                            return z(!1), e.abrupt('return');
                          case 16:
                            if (V.isValid) {
                              e.next = 23;
                              break;
                            }
                            return (e.next = 19), V.validate();
                          case 19:
                            if (!e.sent) {
                              e.next = 23;
                              break;
                            }
                            return z(!1), e.abrupt('return');
                          case 23:
                            return (e.prev = 23), (e.next = 26), Object(m.b)(y);
                          case 26:
                            (r = e.sent), (e.next = 34);
                            break;
                          case 29:
                            return (
                              (e.prev = 29),
                              (e.t0 = e.catch(23)),
                              R({
                                error:
                                  'Something went wrong trying to submit. Please try again.',
                              }),
                              z(!1),
                              e.abrupt('return')
                            );
                          case 34:
                            return (
                              (e.next = 36),
                              B(
                                Object(f.f)({
                                  username: K.value,
                                  password: V.value,
                                  privacyInvite: P,
                                  email: M.value,
                                  teacher: _,
                                  hCaptchaResponse: r,
                                  hCaptchaSiteKey: y,
                                  source: H,
                                })
                              )
                            );
                          case 36:
                            if (((n = e.sent), z(!1), !('error' in n))) {
                              e.next = 44;
                              break;
                            }
                            if (
                              ((a = n.error),
                              R({
                                error:
                                  a.status && a.message
                                    ? a.message
                                    : 'Something went wrong',
                              }),
                              !(a.status && a.status >= 500))
                            ) {
                              e.next = 43;
                              break;
                            }
                            throw a;
                          case 43:
                            return e.abrupt('return');
                          case 44:
                            (c = n.user),
                              R({
                                user: c,
                                newUser: !0,
                              });
                          case 46:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[23, 29]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(n.b)('form', {
            onSubmit: G,
            children: Object(n.c)(j.b, {
              align: 'stretch',
              spacing: 1,
              children: [
                Object(n.b)(w.a, {
                  level: 4,
                  children: _
                    ? 'Create a teacher account'
                    : 'Create a Replit account',
                }),
                !P &&
                  Object(n.b)('div', {
                    onClick: function (e) {
                      e.preventDefault(), N();
                    },
                    children: Object(n.b)(g.a, {
                      size: 'small',
                      children: _
                        ? Object(n.b)('a', {
                            children: 'Not a teacher?',
                          })
                        : Object(n.b)('a', {
                            children:
                              'Teacher? Sign up for our education product.',
                          }),
                    }),
                  }),
                Object(n.b)(d.b, {
                  label: P
                    ? "Use our default or pick a username that's not your real name."
                    : void 0,
                  name: 'username',
                  ref: K.ref,
                  placeholder: 'Username',
                  onBlur: K.handleBlur,
                  validationResults: C(K),
                  onChange: function (e) {
                    return K.setValue(e.target.value);
                  },
                  value: K.value,
                  autoComplete: 'on',
                  autoFocus: !0,
                  autoCorrect: 'off',
                  autoCapitalize: 'off',
                }),
                P
                  ? null
                  : Object(n.b)(d.b, {
                      name: 'email',
                      placeholder: 'Email',
                      onBlur: M.handleBlur,
                      validationResults: C(M),
                      onChange: function (e) {
                        return M.setValue(e.target.value);
                      },
                      value: M.value,
                      autoComplete: 'on',
                      autoCorrect: 'off',
                      autoCapitalize: 'off',
                    }),
                Object(n.b)(d.b, {
                  name: 'password',
                  type: 'password',
                  placeholder: 'Password',
                  onBlur: V.handleBlur,
                  validationResults: C(V),
                  onChange: function (e) {
                    return V.setValue(e.target.value);
                  },
                  value: V.value,
                }),
                _
                  ? Object(n.b)(d.b, {
                      type: 'text',
                      name: 'organization',
                      placeholder: 'School or Organization name',
                      onBlur: Y.handleBlur,
                      validationResults: C(Y),
                      onChange: function (e) {
                        return Y.setValue(e.target.value);
                      },
                      value: Y.value,
                    })
                  : null,
                Object(n.c)('div', {
                  children: [
                    D
                      ? Object(n.b)(b.a, {
                          style: {
                            margin: '0 auto',
                            width: '32px',
                            height: '32px',
                          },
                        })
                      : Object(n.b)(v.a, {
                          type: 'submit',
                          color: 'primary',
                          filled: !0,
                          fullWidth: !0,
                          children: 'Create account',
                        }),
                    Object(n.b)(x.a, {}),
                    !P &&
                      I &&
                      Object(n.c)(g.a, {
                        size: 'small',
                        children: [
                          'Have an account?',
                          ' ',
                          Object(n.b)('a', {
                            onClick: function (e) {
                              I && (e.preventDefault(), I());
                            },
                            children: 'Log in',
                          }),
                        ],
                      }),
                  ],
                }),
                !1,
              ],
            }),
          });
        },
        k = r('YFqc'),
        E = r.n(k),
        _ = r('/1YH'),
        T = r('zgDP');

      function U(e) {
        var t = e.username,
          r = void 0 === t ? '' : t,
          a = e.password,
          c = void 0 === a ? '' : a,
          i = e.isTeacher,
          h = e.onSubmit,
          y = e.onChangeAuth,
          C = e.source,
          S = o.useState(!1),
          k = Object(l.a)(S, 2),
          U = k[0],
          P = k[1],
          R = Object(p.e)(),
          I = Object(O.a)(r, function (e) {
            if (!e)
              return {
                message: 'Please enter your email or username',
              };
          }),
          N = Object(O.a)(c, function (e) {
            if (!e)
              return {
                message: 'Please type in your password',
              };
          }),
          F = (function () {
            var e = Object(u.a)(
              s.a.mark(function e(t) {
                var r, n, a, c;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (t && t.preventDefault && t.preventDefault(), !U)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          return P(!0), (e.next = 6), I.validate();
                        case 6:
                          if (!e.sent) {
                            e.next = 11;
                            break;
                          }
                          return (
                            null === (r = I.ref.current) ||
                              void 0 === r ||
                              r.focus(),
                            P(!1),
                            e.abrupt('return')
                          );
                        case 11:
                          return (e.next = 13), N.validate();
                        case 13:
                          if (!e.sent) {
                            e.next = 17;
                            break;
                          }
                          return P(!1), e.abrupt('return');
                        case 17:
                          return (e.prev = 17), (e.next = 20), Object(m.b)();
                        case 20:
                          (n = e.sent), (e.next = 28);
                          break;
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t0 = e.catch(17)),
                            h({
                              error:
                                'Something went wrong trying to submit. Please try again.',
                            }),
                            P(!1),
                            e.abrupt('return')
                          );
                        case 28:
                          return (
                            (e.next = 30),
                            R(
                              Object(f.d)({
                                username: I.value,
                                password: N.value,
                                hCaptchaResponse: n,
                                hCaptchaSiteKey: m.a,
                                teacher: i,
                              })
                            )
                          );
                        case 30:
                          if (((a = e.sent), P(!1), !('error' in a))) {
                            e.next = 38;
                            break;
                          }
                          if (
                            ((c = a.error),
                            h({
                              error:
                                c.status && c.message
                                  ? c.message
                                  : 'Something went wrong',
                            }),
                            !(c.status && c.status >= 500))
                          ) {
                            e.next = 37;
                            break;
                          }
                          throw c;
                        case 37:
                          return e.abrupt('return');
                        case 38:
                          Object(T.track)(T.events.LOGIN_SUCCESSFUL, {
                            source: C,
                          }),
                            h({
                              user: a.user,
                            });
                        case 40:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[17, 23]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(n.b)('div', {
          children: Object(n.c)('form', {
            className: 'login-form',
            onSubmit: F,
            method: 'POST',
            action: '/login',
            children: [
              Object(n.b)(w.a, {
                level: 4,
                children: 'Log in to your account',
              }),
              Object(n.b)(x.a, {
                size: 3,
              }),
              Object(n.c)(j.b, {
                align: 'stretch',
                spacing: 1,
                children: [
                  Object(n.b)(d.b, {
                    ref: I.ref,
                    name: 'username',
                    placeholder: 'Email or Username',
                    value: I.value,
                    onBlur: I.handleBlur,
                    onChange: function (e) {
                      return I.setValue(e.currentTarget.value);
                    },
                    autoComplete: 'on',
                    autoFocus: !0,
                    autoCorrect: 'off',
                    autoCapitalize: 'off',
                    validationResults: I.error
                      ? [
                          {
                            message: I.error.message,
                            state: 'error',
                          },
                        ]
                      : void 0,
                    required: !0,
                  }),
                  Object(n.b)(
                    _.a,
                    {
                      validated: !1,
                      name: 'password',
                      placeholder: 'Password',
                      value: N.value,
                      onBlur: N.handleBlur,
                      onChange: function (e) {
                        return N.setValue(e.currentTarget.value);
                      },
                      validationResults: N.error
                        ? [
                            {
                              message: N.error.message,
                              state: 'error',
                            },
                          ]
                        : void 0,
                      required: !0,
                    },
                    'password'
                  ),
                  U
                    ? Object(n.b)(b.a, {
                        style: {
                          margin: '0 auto',
                          width: '32px',
                          height: '32px',
                        },
                      })
                    : Object(n.b)(v.a, {
                        color: 'primary',
                        onClick: F,
                        type: 'submit',
                        filled: !0,
                        size: 'medium',
                        fullWidth: !0,
                        'data-cy': 'log-in-btn',
                        children: 'Log in',
                      }),
                  Object(n.b)(x.a, {}),
                  Object(n.b)(g.a, {
                    size: 'small',
                    children: Object(n.b)(E.a, {
                      href: '/forgot',
                      children: Object(n.b)('a', {
                        children: 'Forgot password?',
                      }),
                    }),
                  }),
                  y &&
                    Object(n.c)(g.a, {
                      size: 'small',
                      children: [
                        'New to Replit?',
                        ' ',
                        Object(n.b)('a', {
                          href: '/signup',
                          onClick: function (e) {
                            e.preventDefault(), y();
                          },
                          children: 'Sign up',
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      }
      var P = r('cpVT'),
        R = r('TSYQ'),
        I = r.n(R),
        N = ['google', 'github', 'facebook'];
      var F = function (e) {
          var t = e.onClick,
            r = e.provider;
          return Object(n.c)('div', {
            className: 'jsx-1591739884 social-login-container',
            children: [
              Object(n.b)(v.a, {
                onClick: t,
                fullWidth: !0,
                size: 'small',
                children: Object(n.c)(j.a, {
                  align: 'center',
                  justify: 'space-between',
                  spacing: 2,
                  children: [
                    Object(n.b)('div', {
                      style: {
                        backgroundImage: 'url(/public/images/'.concat(
                          r,
                          '.png)'
                        ),
                      },
                      className:
                        'jsx-1591739884 ' +
                        (I()('social-login-icon', Object(P.a)({}, r, r)) || ''),
                    }),
                    Object(n.c)(g.a, {
                      size: 'small',
                      children: [
                        'Continue with',
                        ' ',
                        ''
                          .concat(r.substring(0, 1).toUpperCase())
                          .concat(r.substring(1)),
                      ],
                    }),
                    Object(n.b)(x.a, {}),
                  ],
                }),
              }),
              Object(n.b)(c.a, {
                id: '1591739884',
                children: [
                  '.social-login-container.jsx-1591739884{min-width:280px;}',
                  '.social-login-container.jsx-1591739884 button .content{width:100%;}',
                  '.social-login-icon.jsx-1591739884{height:22px;width:22px;background-size:contain;background-repeat:no-repeat;}',
                  '.replit-ui-theme-root.dark .social-login-icon.github{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1);}',
                ],
              }),
            ],
          });
        },
        H = function (e) {
          var t = e.isTeacher,
            r = e.isLogin,
            a = e.onSubmit,
            i = e.source,
            l = e.googleClassroom,
            b = Object(p.e)(),
            d = o.useRef(null),
            h = function (e, n) {
              e.preventDefault();
              var c = '/auth/'.concat(n, '/get?close=1');
              t && (c += '&teacher=1'), i && (c += '&source='.concat(i));
              var o = window.open(c),
                l = (function () {
                  var e = Object(u.a)(
                    s.a.mark(function e(t) {
                      var c, u, l, p;
                      return s.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t.origin === window.location.origin ||
                                  'https://replit.com' === t.origin ||
                                  'https://repl.it' === t.origin) &&
                                ('authenticated' === t.data ||
                                  'authenticated:new_user' === t.data)
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt('return');
                            case 2:
                              return (
                                d.current && d.current(),
                                o && o.close(),
                                (e.next = 6),
                                b(
                                  Object(f.a)({
                                    provider: n,
                                  })
                                )
                              );
                            case 6:
                              if (!('error' in (c = e.sent))) {
                                e.next = 13;
                                break;
                              }
                              if (
                                ((u = c.error),
                                a({
                                  error:
                                    u.status && u.message
                                      ? u.message
                                      : 'Something went wrong',
                                }),
                                401 === u.status)
                              ) {
                                e.next = 12;
                                break;
                              }
                              throw u;
                            case 12:
                              return e.abrupt('return');
                            case 13:
                              (l = c.user),
                                (p = 'authenticated:new_user' === t.data),
                                r &&
                                  !p &&
                                  Object(T.track)(T.events.LOGIN_SUCCESSFUL, {
                                    source: i,
                                  }),
                                a({
                                  user: l,
                                  social: !0,
                                  newUser: p,
                                });
                            case 17:
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
              window.addEventListener('message', l),
                (d.current = function () {
                  (d.current = null), window.removeEventListener('message', l);
                });
            };
          return (
            o.useEffect(function () {
              return function () {
                d.current && d.current();
              };
            }, []),
            Object(n.c)(j.b, {
              children: [
                l
                  ? Object(n.c)(j.b, {
                      align: 'center',
                      children: [
                        Object(n.b)(w.a, {
                          level: 4,
                          align: 'center',
                          children: 'Login with Google',
                        }),
                        Object(n.b)('div', {
                          className: 'jsx-1763192200',
                          children: Object(n.b)(F, {
                            provider: 'google',
                            onClick: function (e) {
                              return h(e, 'google');
                            },
                          }),
                        }),
                      ],
                    })
                  : Object(n.c)(n.a, {
                      children: [
                        Object(n.b)(x.a, {
                          size: 2,
                        }),
                        Object(n.b)('div', {
                          className: 'jsx-1763192200 social-spacer',
                        }),
                        Object(n.b)(x.a, {}),
                        Object(n.b)(j.b, {
                          spacing: 1,
                          children: N.map(function (e) {
                            return Object(n.b)(
                              F,
                              {
                                onClick: function (t) {
                                  return h(t, e);
                                },
                                provider: e,
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                Object(n.b)(c.a, {
                  id: '1763192200',
                  children: [
                    '.social-spacer.jsx-1763192200{width:100%;border-bottom:1px solid var(--deprecated-color-border);}',
                  ],
                }),
              ],
            })
          );
        },
        L = r('ZY4o');
      t.a = function (e) {
        var t = e.onSubmit,
          r = e.isLogin,
          a = e.email,
          o = e.isTeacher,
          i = e.toggleTeacher,
          s = e.onChangeAuth,
          u = e.privacyInvite,
          l = e.randomUsername,
          p = e.source,
          b = void 0 === p ? 'explicit' : p,
          d = e.googleClassroom;
        return Object(n.c)('div', {
          className: 'jsx-3098784620',
          children: [
            Object(n.b)(c.a, {
              id: '3098784620',
              children: [
                'div.jsx-3098784620{max-width:280px;margin-top:auto;margin-bottom:auto;color:var(--accent-foreground-default);}',
              ],
            }),
            r &&
              Object(n.b)(U, {
                isTeacher: o,
                onSubmit: t,
                onChangeAuth: s,
                source: b,
              }),
            !r &&
              !d &&
              Object(n.b)(S, {
                isTeacher: o,
                email: a,
                onSubmit: t,
                toggleTeacher: i,
                onChangeAuth: s,
                privacyInvite: u,
                randomUsername: l,
                source: b,
              }),
            !u &&
              Object(n.b)(H, {
                isTeacher: o,
                onSubmit: t,
                source: b,
                isLogin: r,
                googleClassroom: d,
              }),
            Object(n.b)(L.a, {}),
          ],
        });
      };
    },
    JxgA: function (e, t, r) {
      'use strict';
      (function (e) {
        r.d(t, 'a', function () {
          return o;
        }),
          r.d(t, 'b', function () {
            return d;
          });
        var n = r('vJKn'),
          a = r.n(n),
          c = r('rg98'),
          o = e.env.BYPASS_CAPTCHA_CYPRESS
            ? '20000000-ffff-ffff-ffff-000000000002'
            : '473079ba-e99f-4e25-a635-e9b661c7dd3e',
          i = 0;

        function s() {
          var e = Math.floor(500 * Math.random());
          return 1e3 * Math.pow(1.7, i) + e;
        }
        var u = null;

        function l() {
          return p.apply(this, arguments);
        }

        function p() {
          return (p = Object(c.a)(
            a.a.mark(function e() {
              var t;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        ((t = document.createElement('script')).src =
                          'https://js.hcaptcha.com/1/api.js?render=explicit&host=repl.it'),
                        e.abrupt(
                          'return',
                          new Promise(function (e, r) {
                            (t.onload = b(function () {
                              (u = null), e();
                            })),
                              (t.onerror = function () {
                                i++,
                                  (u = new Promise(function (e, t) {
                                    setTimeout(function () {
                                      l().then(e, t);
                                    }, s());
                                  })),
                                  5 === i &&
                                    r(
                                      new Error(
                                        'Failed to load captcha script after '.concat(
                                          5,
                                          ' times'
                                        )
                                      )
                                    );
                              }),
                              window.document.head.appendChild(t);
                          })
                        )
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }

        function b(e) {
          return function () {
            'undefined' === typeof window.hcaptcha
              ? setTimeout(function () {
                  b(e);
                }, 100)
              : e();
          };
        }

        function d(e) {
          return h.apply(this, arguments);
        }

        function h() {
          return (h = Object(c.a)(
            a.a.mark(function e(t) {
              var r;
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.next = 2;
                      break;
                    case 2:
                      if ((window.location.hostname, !u)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 6), u;
                    case 6:
                      return (
                        (r = window.hcaptcha),
                        e.abrupt(
                          'return',
                          new Promise(function (e, n) {
                            var a = document.createElement('div'),
                              c = r.render(a, {
                                sitekey: t || o,
                                size: 'invisible',
                                callback: function (t) {
                                  r.reset(c),
                                    window.document.body.contains(a) &&
                                      window.document.body.removeChild(a),
                                    e(t);
                                },
                                'error-callback': function () {
                                  r.reset(c),
                                    window.document.body.contains(a) &&
                                      window.document.body.removeChild(a),
                                    n(new Error('HCaptcha render error'));
                                },
                                'expired-callback': function () {
                                  r.reset(c),
                                    window.document.body.contains(a) &&
                                      window.document.body.removeChild(a),
                                    n(new Error('HCaptcha render expired'));
                                },
                              });
                            window.document.body.appendChild(a), r.execute(c);
                          })
                        )
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        u = l();
      }.call(this, r('8oxB')));
    },
    ZY4o: function (e, t, r) {
      'use strict';
      var n = r('BGKE'),
        a = r('MX0m'),
        c = r.n(a);
      r('q1tI');
      t.a = function () {
        return Object(n.c)('div', {
          className: 'jsx-1071066821 signup-form-email-disclaimer',
          children: [
            "By continuing, you agree to Replit's",
            ' ',
            Object(n.b)('a', {
              href: '/site/terms',
              target: '_blank',
              className: 'jsx-1071066821',
              children: 'Terms of Service',
            }),
            ' ',
            'and',
            ' ',
            Object(n.b)('a', {
              href: '/site/privacy',
              target: '_blank',
              className: 'jsx-1071066821',
              children: 'Privacy Policy',
            }),
            ', and to receiving emails with updates.',
            Object(n.b)(c.a, {
              id: '1071066821',
              children: [
                '.signup-form-email-disclaimer.jsx-1071066821{font-size:12px;margin-top:20px;color:var(--deprecated-color-foreground-2);line-height:14px;}',
              ],
            }),
          ],
        });
      };
    },
    dovX: function (e, t, r) {
      var n = r('HEbw');
      e.exports = function () {
        return n.randomBytes(8).toString('base64') + Math.random() + 'aA';
      };
    },
  },
]);
//# sourceMappingURL=ce657a5e7dd61c66235de463586c8bf34a15654d.b0e63caccf538456138a.js.map

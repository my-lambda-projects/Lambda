/*! For license information please see ext-692923f314c76dfe603fb.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    100: function (t, e, n) {
      var r = n(153),
        i = n(152);
      t.exports = function (t) {
        return null != t && i(t.length) && !r(t);
      };
    },
    101: function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t !== t && e !== e);
      };
    },
    102: function (t, e, n) {
      var r = n(119);
      t.exports = function (t) {
        if ('string' == typeof t || r(t)) return t;
        var e = t + '';
        return '0' == e && 1 / t == -Infinity ? '-0' : e;
      };
    },
    1081: function (t, e, n) {
      (function (t, r) {
        var i;

        function o(t) {
          return (o =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        (function () {
          'use strict';
          var a = {
              function: !0,
              object: !0,
            },
            s =
              (a['undefined' === typeof window ? 'undefined' : o(window)] &&
                window) ||
              this,
            u = a[o(e)] && e,
            c = a[o(t)] && t && !t.nodeType && t,
            h =
              u &&
              c &&
              'object' == ('undefined' === typeof r ? 'undefined' : o(r)) &&
              r;
          !h || (h.global !== h && h.window !== h && h.self !== h) || (s = h);
          var l = Math.pow(2, 53) - 1,
            f = /\bOpera/,
            p = Object.prototype,
            d = p.hasOwnProperty,
            v = p.toString;

          function y(t) {
            return (t = String(t)).charAt(0).toUpperCase() + t.slice(1);
          }

          function g(t) {
            return (t = E(t)), /^(?:webOS|i(?:OS|P))/.test(t) ? t : y(t);
          }

          function m(t, e) {
            for (var n in t) d.call(t, n) && e(t[n], n, t);
          }

          function _(t) {
            return null == t ? y(t) : v.call(t).slice(8, -1);
          }

          function b(t) {
            return String(t).replace(/([ -])(?!$)/g, '$1?');
          }

          function w(t, e) {
            var n = null;
            return (
              (function (t, e) {
                var n = -1,
                  r = t ? t.length : 0;
                if ('number' == typeof r && r > -1 && r <= l)
                  for (; ++n < r; ) e(t[n], n, t);
                else m(t, e);
              })(t, function (r, i) {
                n = e(n, r, i, t);
              }),
              n
            );
          }

          function E(t) {
            return String(t).replace(/^ +| +$/g, '');
          }
          var C = (function t(e) {
            var n = s,
              r = e && 'object' == o(e) && 'String' != _(e);
            r && ((n = e), (e = null));
            var i = n.navigator || {},
              a = i.userAgent || '';
            e || (e = a);
            var u,
              c,
              h,
              l,
              p,
              d = r
                ? !!i.likeChrome
                : /\bChrome\b/.test(e) && !/internal|\n/i.test(v.toString()),
              y = 'Object',
              C = r ? y : 'ScriptBridgingProxyObject',
              S = r ? y : 'Environment',
              I = r && n.java ? 'JavaPackage' : _(n.java),
              T = r ? y : 'RuntimeObject',
              N = /\bJava/.test(I) && n.java,
              A = N && _(n.environment) == S,
              O = N ? 'a' : '\u03b1',
              P = N ? 'b' : '\u03b2',
              k = n.document || {},
              x = n.operamini || n.opera,
              R = f.test((R = r && x ? x['[[Class]]'] : _(x))) ? R : (x = null),
              D = e,
              L = [],
              M = null,
              F = e == a,
              j = F && x && 'function' == typeof x.version && x.version(),
              U = w(
                [
                  {
                    label: 'EdgeHTML',
                    pattern: 'Edge',
                  },
                  'Trident',
                  {
                    label: 'WebKit',
                    pattern: 'AppleWebKit',
                  },
                  'iCab',
                  'Presto',
                  'NetFront',
                  'Tasman',
                  'KHTML',
                  'Gecko',
                ],
                function (t, n) {
                  return (
                    t ||
                    (RegExp('\\b' + (n.pattern || b(n)) + '\\b', 'i').exec(e) &&
                      (n.label || n))
                  );
                }
              ),
              V = (function (t) {
                return w(t, function (t, n) {
                  return (
                    t ||
                    (RegExp('\\b' + (n.pattern || b(n)) + '\\b', 'i').exec(e) &&
                      (n.label || n))
                  );
                });
              })([
                'Adobe AIR',
                'Arora',
                'Avant Browser',
                'Breach',
                'Camino',
                'Electron',
                'Epiphany',
                'Fennec',
                'Flock',
                'Galeon',
                'GreenBrowser',
                'iCab',
                'Iceweasel',
                'K-Meleon',
                'Konqueror',
                'Lunascape',
                'Maxthon',
                {
                  label: 'Microsoft Edge',
                  pattern: 'Edge',
                },
                'Midori',
                'Nook Browser',
                'PaleMoon',
                'PhantomJS',
                'Raven',
                'Rekonq',
                'RockMelt',
                {
                  label: 'Samsung Internet',
                  pattern: 'SamsungBrowser',
                },
                'SeaMonkey',
                {
                  label: 'Silk',
                  pattern: '(?:Cloud9|Silk-Accelerated)',
                },
                'Sleipnir',
                'SlimBrowser',
                {
                  label: 'SRWare Iron',
                  pattern: 'Iron',
                },
                'Sunrise',
                'Swiftfox',
                'Waterfox',
                'WebPositive',
                'Opera Mini',
                {
                  label: 'Opera Mini',
                  pattern: 'OPiOS',
                },
                'Opera',
                {
                  label: 'Opera',
                  pattern: 'OPR',
                },
                'Chrome',
                {
                  label: 'Chrome Mobile',
                  pattern: '(?:CriOS|CrMo)',
                },
                {
                  label: 'Firefox',
                  pattern: '(?:Firefox|Minefield)',
                },
                {
                  label: 'Firefox for iOS',
                  pattern: 'FxiOS',
                },
                {
                  label: 'IE',
                  pattern: 'IEMobile',
                },
                {
                  label: 'IE',
                  pattern: 'MSIE',
                },
                'Safari',
              ]),
              W = H([
                {
                  label: 'BlackBerry',
                  pattern: 'BB10',
                },
                'BlackBerry',
                {
                  label: 'Galaxy S',
                  pattern: 'GT-I9000',
                },
                {
                  label: 'Galaxy S2',
                  pattern: 'GT-I9100',
                },
                {
                  label: 'Galaxy S3',
                  pattern: 'GT-I9300',
                },
                {
                  label: 'Galaxy S4',
                  pattern: 'GT-I9500',
                },
                {
                  label: 'Galaxy S5',
                  pattern: 'SM-G900',
                },
                {
                  label: 'Galaxy S6',
                  pattern: 'SM-G920',
                },
                {
                  label: 'Galaxy S6 Edge',
                  pattern: 'SM-G925',
                },
                {
                  label: 'Galaxy S7',
                  pattern: 'SM-G930',
                },
                {
                  label: 'Galaxy S7 Edge',
                  pattern: 'SM-G935',
                },
                'Google TV',
                'Lumia',
                'iPad',
                'iPod',
                'iPhone',
                'Kindle',
                {
                  label: 'Kindle Fire',
                  pattern: '(?:Cloud9|Silk-Accelerated)',
                },
                'Nexus',
                'Nook',
                'PlayBook',
                'PlayStation Vita',
                'PlayStation',
                'TouchPad',
                'Transformer',
                {
                  label: 'Wii U',
                  pattern: 'WiiU',
                },
                'Wii',
                'Xbox One',
                {
                  label: 'Xbox 360',
                  pattern: 'Xbox',
                },
                'Xoom',
              ]),
              q = (function (t) {
                return w(t, function (t, n, r) {
                  return (
                    t ||
                    ((n[W] ||
                      n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(W)] ||
                      RegExp('\\b' + b(r) + '(?:\\b|\\w*\\d)', 'i').exec(e)) &&
                      r)
                  );
                });
              })({
                Apple: {
                  iPad: 1,
                  iPhone: 1,
                  iPod: 1,
                },
                Archos: {},
                Amazon: {
                  Kindle: 1,
                  'Kindle Fire': 1,
                },
                Asus: {
                  Transformer: 1,
                },
                'Barnes & Noble': {
                  Nook: 1,
                },
                BlackBerry: {
                  PlayBook: 1,
                },
                Google: {
                  'Google TV': 1,
                  Nexus: 1,
                },
                HP: {
                  TouchPad: 1,
                },
                HTC: {},
                LG: {},
                Microsoft: {
                  Xbox: 1,
                  'Xbox One': 1,
                },
                Motorola: {
                  Xoom: 1,
                },
                Nintendo: {
                  'Wii U': 1,
                  Wii: 1,
                },
                Nokia: {
                  Lumia: 1,
                },
                Samsung: {
                  'Galaxy S': 1,
                  'Galaxy S2': 1,
                  'Galaxy S3': 1,
                  'Galaxy S4': 1,
                },
                Sony: {
                  PlayStation: 1,
                  'PlayStation Vita': 1,
                },
              }),
              B = (function (t) {
                return w(t, function (t, n) {
                  var r = n.pattern || b(n);
                  return (
                    !t &&
                      (t = RegExp(
                        '\\b' + r + '(?:/[\\d.]+|[ \\w.]*)',
                        'i'
                      ).exec(e)) &&
                      (t = (function (t, e, n) {
                        var r = {
                          '10.0': '10',
                          6.4: '10 Technical Preview',
                          6.3: '8.1',
                          6.2: '8',
                          6.1: 'Server 2008 R2 / 7',
                          '6.0': 'Server 2008 / Vista',
                          5.2: 'Server 2003 / XP 64-bit',
                          5.1: 'XP',
                          5.01: '2000 SP1',
                          '5.0': '2000',
                          '4.0': 'NT',
                          '4.90': 'ME',
                        };
                        return (
                          e &&
                            n &&
                            /^Win/i.test(t) &&
                            !/^Windows Phone /i.test(t) &&
                            (r = r[/[\d.]+$/.exec(t)]) &&
                            (t = 'Windows ' + r),
                          (t = String(t)),
                          e && n && (t = t.replace(RegExp(e, 'i'), n)),
                          g(
                            t
                              .replace(/ ce$/i, ' CE')
                              .replace(/\bhpw/i, 'web')
                              .replace(/\bMacintosh\b/, 'Mac OS')
                              .replace(/_PowerPC\b/i, ' OS')
                              .replace(/\b(OS X) [^ \d]+/i, '$1')
                              .replace(/\bMac (OS X)\b/, '$1')
                              .replace(/\/(\d)/, ' $1')
                              .replace(/_/g, '.')
                              .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                              .replace(/\bx86\.64\b/gi, 'x86_64')
                              .replace(/\b(Windows Phone) OS\b/, '$1')
                              .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                              .split(' on ')[0]
                          )
                        );
                      })(t, r, n.label || n)),
                    t
                  );
                });
              })([
                'Windows Phone',
                'Android',
                'CentOS',
                {
                  label: 'Chrome OS',
                  pattern: 'CrOS',
                },
                'Debian',
                'Fedora',
                'FreeBSD',
                'Gentoo',
                'Haiku',
                'Kubuntu',
                'Linux Mint',
                'OpenBSD',
                'Red Hat',
                'SuSE',
                'Ubuntu',
                'Xubuntu',
                'Cygwin',
                'Symbian OS',
                'hpwOS',
                'webOS ',
                'webOS',
                'Tablet OS',
                'Tizen',
                'Linux',
                'Mac OS X',
                'Macintosh',
                'Mac',
                'Windows 98;',
                'Windows ',
              ]);

            function H(t) {
              return w(t, function (t, n) {
                var r = n.pattern || b(n);
                return (
                  !t &&
                    (t =
                      RegExp('\\b' + r + ' *\\d+[.\\w_]*', 'i').exec(e) ||
                      RegExp('\\b' + r + ' *\\w+-[\\w]*', 'i').exec(e) ||
                      RegExp(
                        '\\b' +
                          r +
                          '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)',
                        'i'
                      ).exec(e)) &&
                    ((t = String(
                      n.label && !RegExp(r, 'i').test(n.label) ? n.label : t
                    ).split('/'))[1] &&
                      !/[\d.]+/.test(t[0]) &&
                      (t[0] += ' ' + t[1]),
                    (n = n.label || n),
                    (t = g(
                      t[0]
                        .replace(RegExp(r, 'i'), n)
                        .replace(RegExp('; *(?:' + n + '[_-])?', 'i'), ' ')
                        .replace(RegExp('(' + n + ')[-_.]?(\\w)', 'i'), '$1 $2')
                    ))),
                  t
                );
              });
            }
            if (
              (U && (U = [U]),
              q && !W && (W = H([q])),
              (u = /\bGoogle TV\b/.exec(W)) && (W = u[0]),
              /\bSimulator\b/i.test(e) &&
                (W = (W ? W + ' ' : '') + 'Simulator'),
              'Opera Mini' == V &&
                /\bOPiOS\b/.test(e) &&
                L.push('running in Turbo/Uncompressed mode'),
              'IE' == V && /\blike iPhone OS\b/.test(e)
                ? ((q = (u = t(e.replace(/like iPhone OS/, ''))).manufacturer),
                  (W = u.product))
                : /^iP/.test(W)
                ? (V || (V = 'Safari'),
                  (B =
                    'iOS' +
                    ((u = / OS ([\d_]+)/i.exec(e))
                      ? ' ' + u[1].replace(/_/g, '.')
                      : '')))
                : 'Konqueror' != V || /buntu/i.test(B)
                ? (q &&
                    'Google' != q &&
                    ((/Chrome/.test(V) && !/\bMobile Safari\b/i.test(e)) ||
                      /\bVita\b/.test(W))) ||
                  (/\bAndroid\b/.test(B) &&
                    /^Chrome/.test(V) &&
                    /\bVersion\//i.test(e))
                  ? ((V = 'Android Browser'),
                    (B = /\bAndroid\b/.test(B) ? B : 'Android'))
                  : 'Silk' == V
                  ? (/\bMobi/i.test(e) ||
                      ((B = 'Android'), L.unshift('desktop mode')),
                    /Accelerated *= *true/i.test(e) && L.unshift('accelerated'))
                  : 'PaleMoon' == V && (u = /\bFirefox\/([\d.]+)\b/.exec(e))
                  ? L.push('identifying as Firefox ' + u[1])
                  : 'Firefox' == V && (u = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                  ? (B || (B = 'Firefox OS'), W || (W = u[1]))
                  : !V ||
                    (u =
                      !/\bMinefield\b/i.test(e) &&
                      /\b(?:Firefox|Safari)\b/.exec(V))
                  ? (V &&
                      !W &&
                      /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(u + '/') + 8)) &&
                      (V = null),
                    (u = W || q || B) &&
                      (W ||
                        q ||
                        /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) &&
                      (V =
                        /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : u) +
                        ' Browser'))
                  : 'Electron' == V &&
                    (u = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                    L.push('Chromium ' + u)
                : (B = 'Kubuntu'),
              j ||
                (j = w(
                  [
                    '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
                    'Version',
                    b(V),
                    '(?:Firefox|Minefield|NetFront)',
                  ],
                  function (t, n) {
                    return (
                      t ||
                      (RegExp(
                        n +
                          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)',
                        'i'
                      ).exec(e) || 0)[1] ||
                      null
                    );
                  }
                )),
              (u =
                ('iCab' == U && parseFloat(j) > 3
                  ? 'WebKit'
                  : /\bOpera\b/.test(V) &&
                    (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(e) &&
                  !/^(?:Trident|EdgeHTML)$/.test(U) &&
                  'WebKit') ||
                (!U &&
                  /\bMSIE\b/i.test(e) &&
                  ('Mac OS' == B ? 'Tasman' : 'Trident')) ||
                ('WebKit' == U &&
                  /\bPlayStation\b(?! Vita\b)/i.test(V) &&
                  'NetFront')) && (U = [u]),
              'IE' == V && (u = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                ? ((V += ' Mobile'),
                  (B = 'Windows Phone ' + (/\+$/.test(u) ? u : u + '.x')),
                  L.unshift('desktop mode'))
                : /\bWPDesktop\b/i.test(e)
                ? ((V = 'IE Mobile'),
                  (B = 'Windows Phone 8.x'),
                  L.unshift('desktop mode'),
                  j || (j = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                : 'IE' != V &&
                  'Trident' == U &&
                  (u = /\brv:([\d.]+)/.exec(e)) &&
                  (V && L.push('identifying as ' + V + (j ? ' ' + j : '')),
                  (V = 'IE'),
                  (j = u[1])),
              F)
            ) {
              if (
                ((l = 'global'),
                (p = null != (h = n) ? o(h[l]) : 'number'),
                /^(?:boolean|number|string|undefined)$/.test(p) ||
                  ('object' == p && !h[l]))
              )
                _((u = n.runtime)) == C
                  ? ((V = 'Adobe AIR'), (B = u.flash.system.Capabilities.os))
                  : _((u = n.phantom)) == T
                  ? ((V = 'PhantomJS'),
                    (j =
                      (u = u.version || null) &&
                      u.major + '.' + u.minor + '.' + u.patch))
                  : 'number' == typeof k.documentMode &&
                    (u = /\bTrident\/(\d+)/i.exec(e))
                  ? ((j = [j, k.documentMode]),
                    (u = +u[1] + 4) != j[1] &&
                      (L.push('IE ' + j[1] + ' mode'),
                      U && (U[1] = ''),
                      (j[1] = u)),
                    (j = 'IE' == V ? String(j[1].toFixed(1)) : j[0]))
                  : 'number' == typeof k.documentMode &&
                    /^(?:Chrome|Firefox)\b/.test(V) &&
                    (L.push('masking as ' + V + ' ' + j),
                    (V = 'IE'),
                    (j = '11.0'),
                    (U = ['Trident']),
                    (B = 'Windows'));
              else if (
                (N &&
                  ((D = (u = N.lang.System).getProperty('os.arch')),
                  (B =
                    B ||
                    u.getProperty('os.name') +
                      ' ' +
                      u.getProperty('os.version'))),
                A)
              ) {
                try {
                  (j = n.require('ringo/engine').version.join('.')),
                    (V = 'RingoJS');
                } catch (K) {
                  (u = n.system) &&
                    u.global.system == n.system &&
                    ((V = 'Narwhal'), B || (B = u[0].os || null));
                }
                V || (V = 'Rhino');
              } else
                'object' == o(n.process) &&
                  !n.process.browser &&
                  (u = n.process) &&
                  ('object' == o(u.versions) &&
                    ('string' == typeof u.versions.electron
                      ? (L.push('Node ' + u.versions.node),
                        (V = 'Electron'),
                        (j = u.versions.electron))
                      : 'string' == typeof u.versions.nw &&
                        (L.push('Chromium ' + j, 'Node ' + u.versions.node),
                        (V = 'NW.js'),
                        (j = u.versions.nw))),
                  V ||
                    ((V = 'Node.js'),
                    (D = u.arch),
                    (B = u.platform),
                    (j = (j = /[\d.]+/.exec(u.version)) ? j[0] : null)));
              B = B && g(B);
            }
            if (
              (j &&
                (u =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(j) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(
                    e + ';' + (F && i.appMinorVersion)
                  ) ||
                  (/\bMinefield\b/i.test(e) && 'a')) &&
                ((M = /b/i.test(u) ? 'beta' : 'alpha'),
                (j =
                  j.replace(RegExp(u + '\\+?$'), '') +
                  ('beta' == M ? P : O) +
                  (/\d+\+?/.exec(u) || ''))),
              'Fennec' == V ||
                ('Firefox' == V && /\b(?:Android|Firefox OS)\b/.test(B)))
            )
              V = 'Firefox Mobile';
            else if ('Maxthon' == V && j) j = j.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(W))
              'Xbox 360' == W && (B = null),
                'Xbox 360' == W &&
                  /\bIEMobile\b/.test(e) &&
                  L.unshift('mobile mode');
            else if (
              (!/^(?:Chrome|IE|Opera)$/.test(V) &&
                (!V || W || /Browser|Mobi/.test(V))) ||
              ('Windows CE' != B && !/Mobi/i.test(e))
            )
              if ('IE' == V && F)
                try {
                  null === n.external && L.unshift('platform preview');
                } catch (K) {
                  L.unshift('embedded');
                }
              else
                (/\bBlackBerry\b/.test(W) || /\bBB10\b/.test(e)) &&
                (u =
                  (RegExp(W.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) ||
                    0)[1] || j)
                  ? ((B =
                      ((u = [u, /BB10/.test(e)])[1]
                        ? ((W = null), (q = 'BlackBerry'))
                        : 'Device Software') +
                      ' ' +
                      u[0]),
                    (j = null))
                  : this != m &&
                    'Wii' != W &&
                    ((F && x) ||
                      (/Opera/.test(V) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                      ('Firefox' == V && /\bOS X (?:\d+\.){2,}/.test(B)) ||
                      ('IE' == V &&
                        ((B && !/^Win/.test(B) && j > 5.5) ||
                          (/\bWindows XP\b/.test(B) && j > 8) ||
                          (8 == j && !/\bTrident\b/.test(e))))) &&
                    !f.test((u = t.call(m, e.replace(f, '') + ';'))) &&
                    u.name &&
                    ((u =
                      'ing as ' + u.name + ((u = u.version) ? ' ' + u : '')),
                    f.test(V)
                      ? (/\bIE\b/.test(u) && 'Mac OS' == B && (B = null),
                        (u = 'identify' + u))
                      : ((u = 'mask' + u),
                        (V = R
                          ? g(R.replace(/([a-z])([A-Z])/g, '$1 $2'))
                          : 'Opera'),
                        /\bIE\b/.test(u) && (B = null),
                        F || (j = null)),
                    (U = ['Presto']),
                    L.push(u));
            else V += ' Mobile';
            (u = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
              ((u = [parseFloat(u.replace(/\.(\d)$/, '.0$1')), u]),
              'Safari' == V && '+' == u[1].slice(-1)
                ? ((V = 'WebKit Nightly'),
                  (M = 'alpha'),
                  (j = u[1].slice(0, -1)))
                : (j != u[1] &&
                    j != (u[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) ||
                  (j = null),
              (u[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]),
              537.36 == u[0] &&
                537.36 == u[2] &&
                parseFloat(u[1]) >= 28 &&
                'WebKit' == U &&
                (U = ['Blink']),
              F && (d || u[1])
                ? (U && (U[1] = 'like Chrome'),
                  (u =
                    u[1] ||
                    ((u = u[0]) < 530
                      ? 1
                      : u < 532
                      ? 2
                      : u < 532.05
                      ? 3
                      : u < 533
                      ? 4
                      : u < 534.03
                      ? 5
                      : u < 534.07
                      ? 6
                      : u < 534.1
                      ? 7
                      : u < 534.13
                      ? 8
                      : u < 534.16
                      ? 9
                      : u < 534.24
                      ? 10
                      : u < 534.3
                      ? 11
                      : u < 535.01
                      ? 12
                      : u < 535.02
                      ? '13+'
                      : u < 535.07
                      ? 15
                      : u < 535.11
                      ? 16
                      : u < 535.19
                      ? 17
                      : u < 536.05
                      ? 18
                      : u < 536.1
                      ? 19
                      : u < 537.01
                      ? 20
                      : u < 537.11
                      ? '21+'
                      : u < 537.13
                      ? 23
                      : u < 537.18
                      ? 24
                      : u < 537.24
                      ? 25
                      : u < 537.36
                      ? 26
                      : 'Blink' != U
                      ? '27'
                      : '28')))
                : (U && (U[1] = 'like Safari'),
                  (u =
                    (u = u[0]) < 400
                      ? 1
                      : u < 500
                      ? 2
                      : u < 526
                      ? 3
                      : u < 533
                      ? 4
                      : u < 534
                      ? '4+'
                      : u < 535
                      ? 5
                      : u < 537
                      ? 6
                      : u < 538
                      ? 7
                      : u < 601
                      ? 8
                      : '8')),
              U &&
                (U[1] +=
                  ' ' +
                  (u +=
                    'number' == typeof u ? '.x' : /[.+]/.test(u) ? '' : '+')),
              'Safari' == V && (!j || parseInt(j) > 45) && (j = u)),
              'Opera' == V && (u = /\bzbov|zvav$/.exec(B))
                ? ((V += ' '),
                  L.unshift('desktop mode'),
                  'zvav' == u ? ((V += 'Mini'), (j = null)) : (V += 'Mobile'),
                  (B = B.replace(RegExp(' *' + u + '$'), '')))
                : 'Safari' == V &&
                  /\bChrome\b/.exec(U && U[1]) &&
                  (L.unshift('desktop mode'),
                  (V = 'Chrome Mobile'),
                  (j = null),
                  /\bOS X\b/.test(B)
                    ? ((q = 'Apple'), (B = 'iOS 4.3+'))
                    : (B = null)),
              j &&
                0 == j.indexOf((u = /[\d.]+$/.exec(B))) &&
                e.indexOf('/' + u + '-') > -1 &&
                (B = E(B.replace(u, ''))),
              U &&
                !/\b(?:Avant|Nook)\b/.test(V) &&
                (/Browser|Lunascape|Maxthon/.test(V) ||
                  ('Safari' != V &&
                    /^iOS/.test(B) &&
                    /\bSafari\b/.test(U[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                    V
                  ) &&
                    U[1])) &&
                (u = U[U.length - 1]) &&
                L.push(u),
              L.length && (L = ['(' + L.join('; ') + ')']),
              q && W && W.indexOf(q) < 0 && L.push('on ' + q),
              W && L.push((/^on /.test(L[L.length - 1]) ? '' : 'on ') + W),
              B &&
                ((u = / ([\d.+]+)$/.exec(B)),
                (c = u && '/' == B.charAt(B.length - u[0].length - 1)),
                (B = {
                  architecture: 32,
                  family: u && !c ? B.replace(u[0], '') : B,
                  version: u ? u[1] : null,
                  toString: function () {
                    var t = this.version;
                    return (
                      this.family +
                      (t && !c ? ' ' + t : '') +
                      (64 == this.architecture ? ' 64-bit' : '')
                    );
                  },
                })),
              (u = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(D)) &&
              !/\bi686\b/i.test(D)
                ? (B &&
                    ((B.architecture = 64),
                    (B.family = B.family.replace(RegExp(' *' + u), ''))),
                  V &&
                    (/\bWOW64\b/i.test(e) ||
                      (F &&
                        /\w(?:86|32)$/.test(i.cpuClass || i.platform) &&
                        !/\bWin64; x64\b/i.test(e))) &&
                    L.unshift('32-bit'))
                : B &&
                  /^OS X/.test(B.family) &&
                  'Chrome' == V &&
                  parseFloat(j) >= 39 &&
                  (B.architecture = 64),
              e || (e = null);
            var Q = {};
            return (
              (Q.description = e),
              (Q.layout = U && U[0]),
              (Q.manufacturer = q),
              (Q.name = V),
              (Q.prerelease = M),
              (Q.product = W),
              (Q.ua = e),
              (Q.version = V && j),
              (Q.os = B || {
                architecture: null,
                family: null,
                version: null,
                toString: function () {
                  return 'null';
                },
              }),
              (Q.parse = t),
              (Q.toString = function () {
                return this.description || '';
              }),
              Q.version && L.unshift(j),
              Q.name && L.unshift(V),
              B &&
                V &&
                (B != String(B).split(' ')[0] ||
                  (B != V.split(' ')[0] && !W)) &&
                L.push(W ? '(' + B + ')' : 'on ' + B),
              L.length && (Q.description = L.join(' ')),
              Q
            );
          })();
          'object' == o(n(262)) && n(262)
            ? ((s.platform = C),
              void 0 ===
                (i = function () {
                  return C;
                }.call(e, n, e, t)) || (t.exports = i))
            : u && c
            ? m(C, function (t, e) {
                u[e] = t;
              })
            : (s.platform = C);
        }.call(this));
      }.call(this, n(99)(t), n(27)));
    },
    115: function (t, e, n) {
      var r = n(386),
        i = n(387),
        o = n(388),
        a = n(389),
        s = n(390);

      function u(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = a),
        (u.prototype.set = s),
        (t.exports = u);
    },
    1153: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', {
        value: !0,
      });
      var r = n(710),
        i = n(998),
        o = (function () {
          function t(t, e, n) {
            (this.name = t),
              (this.instanceFactory = e),
              (this.type = n),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = 'LAZY');
          }
          return (
            (t.prototype.setInstantiationMode = function (t) {
              return (this.instantiationMode = t), this;
            }),
            (t.prototype.setMultipleInstances = function (t) {
              return (this.multipleInstances = t), this;
            }),
            (t.prototype.setServiceProps = function (t) {
              return (this.serviceProps = t), this;
            }),
            t
          );
        })(),
        a = '[DEFAULT]',
        s = (function () {
          function t(t, e) {
            (this.name = t),
              (this.container = e),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map());
          }
          return (
            (t.prototype.get = function (t) {
              void 0 === t && (t = a);
              var e = this.normalizeInstanceIdentifier(t);
              if (!this.instancesDeferred.has(e)) {
                var n = new i.Deferred();
                this.instancesDeferred.set(e, n);
                try {
                  var r = this.getOrInitializeService(e);
                  r && n.resolve(r);
                } catch (o) {}
              }
              return this.instancesDeferred.get(e).promise;
            }),
            (t.prototype.getImmediate = function (t) {
              var e = r.__assign(
                  {
                    identifier: a,
                    optional: !1,
                  },
                  t
                ),
                n = e.identifier,
                i = e.optional,
                o = this.normalizeInstanceIdentifier(n);
              try {
                var s = this.getOrInitializeService(o);
                if (!s) {
                  if (i) return null;
                  throw Error('Service ' + this.name + ' is not available');
                }
                return s;
              } catch (u) {
                if (i) return null;
                throw u;
              }
            }),
            (t.prototype.getComponent = function () {
              return this.component;
            }),
            (t.prototype.setComponent = function (t) {
              var e, n;
              if (t.name !== this.name)
                throw Error(
                  'Mismatching Component ' +
                    t.name +
                    ' for Provider ' +
                    this.name +
                    '.'
                );
              if (this.component)
                throw Error(
                  'Component for ' + this.name + ' has already been provided'
                );
              if (
                ((this.component = t),
                (function (t) {
                  return 'EAGER' === t.instantiationMode;
                })(t))
              )
                try {
                  this.getOrInitializeService(a);
                } catch (f) {}
              try {
                for (
                  var i = r.__values(this.instancesDeferred.entries()),
                    o = i.next();
                  !o.done;
                  o = i.next()
                ) {
                  var s = r.__read(o.value, 2),
                    u = s[0],
                    c = s[1],
                    h = this.normalizeInstanceIdentifier(u);
                  try {
                    var l = this.getOrInitializeService(h);
                    c.resolve(l);
                  } catch (f) {}
                }
              } catch (p) {
                e = {
                  error: p,
                };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (t.prototype.clearInstance = function (t) {
              void 0 === t && (t = a),
                this.instancesDeferred.delete(t),
                this.instances.delete(t);
            }),
            (t.prototype.delete = function () {
              return r.__awaiter(this, void 0, void 0, function () {
                var t;
                return r.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Array.from(this.instances.values())),
                        [
                          4,
                          Promise.all(
                            t
                              .filter(function (t) {
                                return 'INTERNAL' in t;
                              })
                              .map(function (t) {
                                return t.INTERNAL.delete();
                              })
                          ),
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.isComponentSet = function () {
              return null != this.component;
            }),
            (t.prototype.getOrInitializeService = function (t) {
              var e = this.instances.get(t);
              return (
                !e &&
                  this.component &&
                  ((e = this.component.instanceFactory(
                    this.container,
                    (function (t) {
                      return t === a ? void 0 : t;
                    })(t)
                  )),
                  this.instances.set(t, e)),
                e || null
              );
            }),
            (t.prototype.normalizeInstanceIdentifier = function (t) {
              return this.component
                ? this.component.multipleInstances
                  ? t
                  : a
                : t;
            }),
            t
          );
        })();
      var u = (function () {
        function t(t) {
          (this.name = t), (this.providers = new Map());
        }
        return (
          (t.prototype.addComponent = function (t) {
            var e = this.getProvider(t.name);
            if (e.isComponentSet())
              throw new Error(
                'Component ' +
                  t.name +
                  ' has already been registered with ' +
                  this.name
              );
            e.setComponent(t);
          }),
          (t.prototype.addOrOverwriteComponent = function (t) {
            this.getProvider(t.name).isComponentSet() &&
              this.providers.delete(t.name),
              this.addComponent(t);
          }),
          (t.prototype.getProvider = function (t) {
            if (this.providers.has(t)) return this.providers.get(t);
            var e = new s(t, this);
            return this.providers.set(t, e), e;
          }),
          (t.prototype.getProviders = function () {
            return Array.from(this.providers.values());
          }),
          t
        );
      })();
      (e.Component = o), (e.ComponentContainer = u), (e.Provider = s);
    },
    1154: function (t, e, n) {
      'use strict';

      function r() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      var i;
      n.r(e),
        n.d(e, 'LogLevel', function () {
          return o;
        }),
        n.d(e, 'Logger', function () {
          return l;
        }),
        n.d(e, 'setLogLevel', function () {
          return f;
        }),
        n.d(e, 'setUserLogHandler', function () {
          return p;
        });
      var o,
        a = [];
      !(function (t) {
        (t[(t.DEBUG = 0)] = 'DEBUG'),
          (t[(t.VERBOSE = 1)] = 'VERBOSE'),
          (t[(t.INFO = 2)] = 'INFO'),
          (t[(t.WARN = 3)] = 'WARN'),
          (t[(t.ERROR = 4)] = 'ERROR'),
          (t[(t.SILENT = 5)] = 'SILENT');
      })(o || (o = {}));
      var s = {
          debug: o.DEBUG,
          verbose: o.VERBOSE,
          info: o.INFO,
          warn: o.WARN,
          error: o.ERROR,
          silent: o.SILENT,
        },
        u = o.INFO,
        c =
          (((i = {})[o.DEBUG] = 'log'),
          (i[o.VERBOSE] = 'log'),
          (i[o.INFO] = 'info'),
          (i[o.WARN] = 'warn'),
          (i[o.ERROR] = 'error'),
          i),
        h = function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          if (!(e < t.logLevel)) {
            var o = new Date().toISOString(),
              a = c[e];
            if (!a)
              throw new Error(
                'Attempted to log a message with an invalid logType (value: ' +
                  e +
                  ')'
              );
            console[a].apply(console, r(['[' + o + ']  ' + t.name + ':'], n));
          }
        },
        l = (function () {
          function t(t) {
            (this.name = t),
              (this._logLevel = u),
              (this._logHandler = h),
              (this._userLogHandler = null),
              a.push(this);
          }
          return (
            Object.defineProperty(t.prototype, 'logLevel', {
              get: function () {
                return this._logLevel;
              },
              set: function (t) {
                if (!(t in o))
                  throw new TypeError('Invalid value assigned to `logLevel`');
                this._logLevel = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'logHandler', {
              get: function () {
                return this._logHandler;
              },
              set: function (t) {
                if ('function' !== typeof t)
                  throw new TypeError(
                    'Value assigned to `logHandler` must be a function'
                  );
                this._logHandler = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'userLogHandler', {
              get: function () {
                return this._userLogHandler;
              },
              set: function (t) {
                this._userLogHandler = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, o.DEBUG], t)),
                this._logHandler.apply(this, r([this, o.DEBUG], t));
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, o.VERBOSE], t)),
                this._logHandler.apply(this, r([this, o.VERBOSE], t));
            }),
            (t.prototype.info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, o.INFO], t)),
                this._logHandler.apply(this, r([this, o.INFO], t));
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, o.WARN], t)),
                this._logHandler.apply(this, r([this, o.WARN], t));
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, r([this, o.ERROR], t)),
                this._logHandler.apply(this, r([this, o.ERROR], t));
            }),
            t
          );
        })();

      function f(t) {
        var e = 'string' === typeof t ? s[t] : t;
        a.forEach(function (t) {
          t.logLevel = e;
        });
      }

      function p(t, e) {
        for (
          var n = function (n) {
              var r = null;
              e && e.level && (r = s[e.level]),
                (n.userLogHandler =
                  null === t
                    ? null
                    : function (e, n) {
                        for (var i = [], a = 2; a < arguments.length; a++)
                          i[a - 2] = arguments[a];
                        var s = i
                          .map(function (t) {
                            if (null == t) return null;
                            if ('string' === typeof t) return t;
                            if ('number' === typeof t || 'boolean' === typeof t)
                              return t.toString();
                            if (t instanceof Error) return t.message;
                            try {
                              return JSON.stringify(t);
                            } catch (e) {
                              return null;
                            }
                          })
                          .filter(function (t) {
                            return t;
                          })
                          .join(' ');
                        n >= (null !== r && void 0 !== r ? r : e.logLevel) &&
                          t({
                            level: o[n].toLowerCase(),
                            message: s,
                            args: i,
                            type: e.name,
                          });
                      });
            },
            r = 0,
            i = a;
          r < i.length;
          r++
        ) {
          n(i[r]);
        }
      }
    },
    1155: function (t, e, n) {
      'use strict';
      (function (r) {
        function i(t) {
          return (i =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
        var o,
          a,
          s =
            (o = n(42)) && 'object' === i(o) && 'default' in o ? o.default : o,
          u = n(710),
          c = n(998),
          h = n(1154),
          l = n(1153),
          f = (function () {
            function t(t) {
              (this.domStorage_ = t), (this.prefix_ = 'firebase:');
            }
            return (
              (t.prototype.set = function (t, e) {
                null == e
                  ? this.domStorage_.removeItem(this.prefixedName_(t))
                  : this.domStorage_.setItem(
                      this.prefixedName_(t),
                      c.stringify(e)
                    );
              }),
              (t.prototype.get = function (t) {
                var e = this.domStorage_.getItem(this.prefixedName_(t));
                return null == e ? null : c.jsonEval(e);
              }),
              (t.prototype.remove = function (t) {
                this.domStorage_.removeItem(this.prefixedName_(t));
              }),
              (t.prototype.prefixedName_ = function (t) {
                return this.prefix_ + t;
              }),
              (t.prototype.toString = function () {
                return this.domStorage_.toString();
              }),
              t
            );
          })(),
          p = (function () {
            function t() {
              (this.cache_ = {}), (this.isInMemoryStorage = !0);
            }
            return (
              (t.prototype.set = function (t, e) {
                null == e ? delete this.cache_[t] : (this.cache_[t] = e);
              }),
              (t.prototype.get = function (t) {
                return c.contains(this.cache_, t) ? this.cache_[t] : null;
              }),
              (t.prototype.remove = function (t) {
                delete this.cache_[t];
              }),
              t
            );
          })(),
          d = function (t) {
            try {
              if (
                'undefined' !== typeof window &&
                'undefined' !== typeof window[t]
              ) {
                var e = window[t];
                return (
                  e.setItem('firebase:sentinel', 'cache'),
                  e.removeItem('firebase:sentinel'),
                  new f(e)
                );
              }
            } catch (n) {}
            return new p();
          },
          v = d('localStorage'),
          y = d('sessionStorage'),
          g = new h.Logger('@firebase/database'),
          m =
            ((a = 1),
            function () {
              return a++;
            }),
          _ = function (t) {
            var e = c.stringToByteArray(t),
              n = new c.Sha1();
            n.update(e);
            var r = n.digest();
            return c.base64.encodeByteArray(r);
          },
          b = function t() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            for (var r = '', o = 0; o < e.length; o++) {
              var a = e[o];
              Array.isArray(a) ||
              (a && 'object' === i(a) && 'number' === typeof a.length)
                ? (r += t.apply(null, a))
                : 'object' === i(a)
                ? (r += c.stringify(a))
                : (r += a),
                (r += ' ');
            }
            return r;
          },
          w = null,
          E = !0,
          C = function (t, e) {
            c.assert(
              !e || !0 === t || !1 === t,
              "Can't turn on custom loggers persistently."
            ),
              !0 === t
                ? ((g.logLevel = h.LogLevel.VERBOSE),
                  (w = g.log.bind(g)),
                  e && y.set('logging_enabled', !0))
                : 'function' === typeof t
                ? (w = t)
                : ((w = null), y.remove('logging_enabled'));
          },
          S = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if (
              (!0 === E &&
                ((E = !1),
                null === w && !0 === y.get('logging_enabled') && C(!0)),
              w)
            ) {
              var n = b.apply(null, t);
              w(n);
            }
          },
          I = function (t) {
            return function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              S.apply(void 0, u.__spread([t], e));
            };
          },
          T = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n =
              'FIREBASE INTERNAL ERROR: ' + b.apply(void 0, u.__spread(t));
            g.error(n);
          },
          N = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = 'FIREBASE FATAL ERROR: ' + b.apply(void 0, u.__spread(t));
            throw (g.error(n), new Error(n));
          },
          A = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = 'FIREBASE WARNING: ' + b.apply(void 0, u.__spread(t));
            g.warn(n);
          },
          O = function (t) {
            return (
              'number' === typeof t &&
              (t !== t ||
                t === Number.POSITIVE_INFINITY ||
                t === Number.NEGATIVE_INFINITY)
            );
          },
          P = '[MIN_NAME]',
          k = '[MAX_NAME]',
          x = function (t, e) {
            if (t === e) return 0;
            if (t === P || e === k) return -1;
            if (e === P || t === k) return 1;
            var n = V(t),
              r = V(e);
            return null !== n
              ? null !== r
                ? n - r === 0
                  ? t.length - e.length
                  : n - r
                : -1
              : null !== r
              ? 1
              : t < e
              ? -1
              : 1;
          },
          R = function (t, e) {
            return t === e ? 0 : t < e ? -1 : 1;
          },
          D = function (t, e) {
            if (e && t in e) return e[t];
            throw new Error(
              'Missing required key (' + t + ') in object: ' + c.stringify(e)
            );
          },
          L = function t(e) {
            if ('object' !== i(e) || null === e) return c.stringify(e);
            var n = [];
            for (var r in e) n.push(r);
            n.sort();
            for (var o = '{', a = 0; a < n.length; a++)
              0 !== a && (o += ','),
                (o += c.stringify(n[a])),
                (o += ':'),
                (o += t(e[n[a]]));
            return (o += '}');
          },
          M = function (t, e) {
            var n = t.length;
            if (n <= e) return [t];
            for (var r = [], i = 0; i < n; i += e)
              i + e > n
                ? r.push(t.substring(i, n))
                : r.push(t.substring(i, i + e));
            return r;
          };

        function F(t, e) {
          for (var n in t) t.hasOwnProperty(n) && e(n, t[n]);
        }
        var j = function (t) {
            c.assert(!O(t), 'Invalid JSON number');
            var e,
              n,
              r,
              i,
              o,
              a = 1023;
            0 === t
              ? ((n = 0), (r = 0), (e = 1 / t === -1 / 0 ? 1 : 0))
              : ((e = t < 0),
                (t = Math.abs(t)) >= Math.pow(2, -1022)
                  ? ((n =
                      (i = Math.min(Math.floor(Math.log(t) / Math.LN2), a)) +
                      a),
                    (r = Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))))
                  : ((n = 0), (r = Math.round(t / Math.pow(2, -1074)))));
            var s = [];
            for (o = 52; o; o -= 1)
              s.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
            for (o = 11; o; o -= 1)
              s.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
            s.push(e ? 1 : 0), s.reverse();
            var u = s.join(''),
              h = '';
            for (o = 0; o < 64; o += 8) {
              var l = parseInt(u.substr(o, 8), 2).toString(16);
              1 === l.length && (l = '0' + l), (h += l);
            }
            return h.toLowerCase();
          },
          U = new RegExp('^-?(0*)\\d{1,10}$'),
          V = function (t) {
            if (U.test(t)) {
              var e = Number(t);
              if (e >= -2147483648 && e <= 2147483647) return e;
            }
            return null;
          },
          W = function (t) {
            try {
              t();
            } catch (e) {
              setTimeout(function () {
                var t = e.stack || '';
                throw (A('Exception was thrown by user callback.', t), e);
              }, Math.floor(0));
            }
          },
          q = function (t, e) {
            var n = setTimeout(t, e);
            return 'object' === i(n) && n.unref && n.unref(), n;
          },
          B = (function () {
            function t(t, e) {
              if (void 0 === e) {
                this.pieces_ = t.split('/');
                for (var n = 0, r = 0; r < this.pieces_.length; r++)
                  this.pieces_[r].length > 0 &&
                    ((this.pieces_[n] = this.pieces_[r]), n++);
                (this.pieces_.length = n), (this.pieceNum_ = 0);
              } else (this.pieces_ = t), (this.pieceNum_ = e);
            }
            return (
              Object.defineProperty(t, 'Empty', {
                get: function () {
                  return new t('');
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getFront = function () {
                return this.pieceNum_ >= this.pieces_.length
                  ? null
                  : this.pieces_[this.pieceNum_];
              }),
              (t.prototype.getLength = function () {
                return this.pieces_.length - this.pieceNum_;
              }),
              (t.prototype.popFront = function () {
                var e = this.pieceNum_;
                return e < this.pieces_.length && e++, new t(this.pieces_, e);
              }),
              (t.prototype.getBack = function () {
                return this.pieceNum_ < this.pieces_.length
                  ? this.pieces_[this.pieces_.length - 1]
                  : null;
              }),
              (t.prototype.toString = function () {
                for (
                  var t = '', e = this.pieceNum_;
                  e < this.pieces_.length;
                  e++
                )
                  '' !== this.pieces_[e] && (t += '/' + this.pieces_[e]);
                return t || '/';
              }),
              (t.prototype.toUrlEncodedString = function () {
                for (
                  var t = '', e = this.pieceNum_;
                  e < this.pieces_.length;
                  e++
                )
                  '' !== this.pieces_[e] &&
                    (t += '/' + encodeURIComponent(String(this.pieces_[e])));
                return t || '/';
              }),
              (t.prototype.slice = function (t) {
                return (
                  void 0 === t && (t = 0),
                  this.pieces_.slice(this.pieceNum_ + t)
                );
              }),
              (t.prototype.parent = function () {
                if (this.pieceNum_ >= this.pieces_.length) return null;
                for (
                  var e = [], n = this.pieceNum_;
                  n < this.pieces_.length - 1;
                  n++
                )
                  e.push(this.pieces_[n]);
                return new t(e, 0);
              }),
              (t.prototype.child = function (e) {
                for (
                  var n = [], r = this.pieceNum_;
                  r < this.pieces_.length;
                  r++
                )
                  n.push(this.pieces_[r]);
                if (e instanceof t)
                  for (r = e.pieceNum_; r < e.pieces_.length; r++)
                    n.push(e.pieces_[r]);
                else {
                  var i = e.split('/');
                  for (r = 0; r < i.length; r++)
                    i[r].length > 0 && n.push(i[r]);
                }
                return new t(n, 0);
              }),
              (t.prototype.isEmpty = function () {
                return this.pieceNum_ >= this.pieces_.length;
              }),
              (t.relativePath = function (e, n) {
                var r = e.getFront(),
                  i = n.getFront();
                if (null === r) return n;
                if (r === i) return t.relativePath(e.popFront(), n.popFront());
                throw new Error(
                  'INTERNAL ERROR: innerPath (' +
                    n +
                    ') is not within outerPath (' +
                    e +
                    ')'
                );
              }),
              (t.comparePaths = function (t, e) {
                for (
                  var n = t.slice(), r = e.slice(), i = 0;
                  i < n.length && i < r.length;
                  i++
                ) {
                  var o = x(n[i], r[i]);
                  if (0 !== o) return o;
                }
                return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
              }),
              (t.prototype.equals = function (t) {
                if (this.getLength() !== t.getLength()) return !1;
                for (
                  var e = this.pieceNum_, n = t.pieceNum_;
                  e <= this.pieces_.length;
                  e++, n++
                )
                  if (this.pieces_[e] !== t.pieces_[n]) return !1;
                return !0;
              }),
              (t.prototype.contains = function (t) {
                var e = this.pieceNum_,
                  n = t.pieceNum_;
                if (this.getLength() > t.getLength()) return !1;
                for (; e < this.pieces_.length; ) {
                  if (this.pieces_[e] !== t.pieces_[n]) return !1;
                  ++e, ++n;
                }
                return !0;
              }),
              t
            );
          })(),
          H = (function () {
            function t(t, e) {
              (this.errorPrefix_ = e),
                (this.parts_ = t.slice()),
                (this.byteLength_ = Math.max(1, this.parts_.length));
              for (var n = 0; n < this.parts_.length; n++)
                this.byteLength_ += c.stringLength(this.parts_[n]);
              this.checkValid_();
            }
            return (
              Object.defineProperty(t, 'MAX_PATH_DEPTH', {
                get: function () {
                  return 32;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t, 'MAX_PATH_LENGTH_BYTES', {
                get: function () {
                  return 768;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.push = function (t) {
                this.parts_.length > 0 && (this.byteLength_ += 1),
                  this.parts_.push(t),
                  (this.byteLength_ += c.stringLength(t)),
                  this.checkValid_();
              }),
              (t.prototype.pop = function () {
                var t = this.parts_.pop();
                (this.byteLength_ -= c.stringLength(t)),
                  this.parts_.length > 0 && (this.byteLength_ -= 1);
              }),
              (t.prototype.checkValid_ = function () {
                if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES)
                  throw new Error(
                    this.errorPrefix_ +
                      'has a key path longer than ' +
                      t.MAX_PATH_LENGTH_BYTES +
                      ' bytes (' +
                      this.byteLength_ +
                      ').'
                  );
                if (this.parts_.length > t.MAX_PATH_DEPTH)
                  throw new Error(
                    this.errorPrefix_ +
                      'path specified exceeds the maximum depth that can be written (' +
                      t.MAX_PATH_DEPTH +
                      ') or object contains a cycle ' +
                      this.toErrorString()
                  );
              }),
              (t.prototype.toErrorString = function () {
                return 0 === this.parts_.length
                  ? ''
                  : "in property '" + this.parts_.join('.') + "'";
              }),
              t
            );
          })(),
          Q = '5',
          K = 'firebaseio.com',
          G = 'websocket',
          z = 'long_polling',
          Y = (function () {
            function t(t, e, n, r, i, o) {
              void 0 === i && (i = ''),
                void 0 === o && (o = !1),
                (this.secure = e),
                (this.namespace = n),
                (this.webSocketOnly = r),
                (this.persistenceKey = i),
                (this.includeNamespaceInQueryParams = o),
                (this.host = t.toLowerCase()),
                (this.domain = this.host.substr(this.host.indexOf('.') + 1)),
                (this.internalHost = v.get('host:' + t) || this.host);
            }
            return (
              (t.prototype.needsQueryParam = function () {
                return (
                  this.host !== this.internalHost ||
                  this.isCustomHost() ||
                  this.includeNamespaceInQueryParams
                );
              }),
              (t.prototype.isCacheableHost = function () {
                return 's-' === this.internalHost.substr(0, 2);
              }),
              (t.prototype.isDemoHost = function () {
                return 'firebaseio-demo.com' === this.domain;
              }),
              (t.prototype.isCustomHost = function () {
                return (
                  'firebaseio.com' !== this.domain &&
                  'firebaseio-demo.com' !== this.domain
                );
              }),
              (t.prototype.updateHost = function (t) {
                t !== this.internalHost &&
                  ((this.internalHost = t),
                  this.isCacheableHost() &&
                    v.set('host:' + this.host, this.internalHost));
              }),
              (t.prototype.connectionURL = function (t, e) {
                var n;
                if (
                  (c.assert(
                    'string' === typeof t,
                    'typeof type must == string'
                  ),
                  c.assert('object' === i(e), 'typeof params must == object'),
                  t === G)
                )
                  n =
                    (this.secure ? 'wss://' : 'ws://') +
                    this.internalHost +
                    '/.ws?';
                else {
                  if (t !== z) throw new Error('Unknown connection type: ' + t);
                  n =
                    (this.secure ? 'https://' : 'http://') +
                    this.internalHost +
                    '/.lp?';
                }
                this.needsQueryParam() && (e.ns = this.namespace);
                var r = [];
                return (
                  F(e, function (t, e) {
                    r.push(t + '=' + e);
                  }),
                  n + r.join('&')
                );
              }),
              (t.prototype.toString = function () {
                var t = this.toURLString();
                return (
                  this.persistenceKey && (t += '<' + this.persistenceKey + '>'),
                  t
                );
              }),
              (t.prototype.toURLString = function () {
                return (this.secure ? 'https://' : 'http://') + this.host;
              }),
              t
            );
          })();
        var X,
          $,
          J,
          Z,
          tt,
          et = function (t) {
            var e = nt(t),
              n = e.namespace;
            'firebase' === e.domain &&
              N(
                e.host +
                  ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
              ),
              (n && 'undefined' !== n) ||
                'localhost' === e.domain ||
                N(
                  'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
                ),
              e.secure ||
                ('undefined' !== typeof window &&
                  window.location &&
                  window.location.protocol &&
                  -1 !== window.location.protocol.indexOf('https:') &&
                  A(
                    'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
                  ));
            var r = 'ws' === e.scheme || 'wss' === e.scheme;
            return {
              repoInfo: new Y(e.host, e.secure, n, r, '', n !== e.subdomain),
              path: new B(e.pathString),
            };
          },
          nt = function (t) {
            var e = '',
              n = '',
              r = '',
              i = '',
              o = '',
              a = !0,
              s = 'https',
              c = 443;
            if ('string' === typeof t) {
              var h = t.indexOf('//');
              h >= 0 && ((s = t.substring(0, h - 1)), (t = t.substring(h + 2)));
              var l = t.indexOf('/');
              -1 === l && (l = t.length);
              var f = t.indexOf('?');
              -1 === f && (f = t.length),
                (e = t.substring(0, Math.min(l, f))),
                l < f &&
                  (i = (function (t) {
                    for (var e = '', n = t.split('/'), r = 0; r < n.length; r++)
                      if (n[r].length > 0) {
                        var i = n[r];
                        try {
                          i = decodeURIComponent(i.replace(/\+/g, ' '));
                        } catch (o) {}
                        e += '/' + i;
                      }
                    return e;
                  })(t.substring(l, f)));
              var p = (function (t) {
                var e,
                  n,
                  r = {};
                '?' === t.charAt(0) && (t = t.substring(1));
                try {
                  for (
                    var i = u.__values(t.split('&')), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    if (0 !== a.length) {
                      var s = a.split('=');
                      2 === s.length
                        ? (r[decodeURIComponent(s[0])] = decodeURIComponent(
                            s[1]
                          ))
                        : A(
                            "Invalid query segment '" +
                              a +
                              "' in query '" +
                              t +
                              "'"
                          );
                    }
                  }
                } catch (c) {
                  e = {
                    error: c,
                  };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              })(t.substring(Math.min(t.length, f)));
              (h = e.indexOf(':')) >= 0
                ? ((a = 'https' === s || 'wss' === s),
                  (c = parseInt(e.substring(h + 1), 10)))
                : (h = t.length);
              var d = e.split('.');
              3 === d.length
                ? ((n = d[1]), (o = r = d[0].toLowerCase()))
                : 2 === d.length
                ? (n = d[0])
                : 'localhost' === d[0].slice(0, h).toLowerCase() &&
                  (n = 'localhost'),
                'ns' in p && (o = p.ns);
            }
            return {
              host: e,
              port: c,
              domain: n,
              subdomain: r,
              secure: a,
              scheme: s,
              pathString: i,
              namespace: o,
            };
          },
          rt = /[\[\].#$\/\u0000-\u001F\u007F]/,
          it = /[\[\].#$\u0000-\u001F\u007F]/,
          ot = 10485760,
          at = function (t) {
            return 'string' === typeof t && 0 !== t.length && !rt.test(t);
          },
          st = function (t) {
            return 'string' === typeof t && 0 !== t.length && !it.test(t);
          },
          ut = function (t) {
            return (
              null === t ||
              'string' === typeof t ||
              ('number' === typeof t && !O(t)) ||
              (t && 'object' === i(t) && c.contains(t, '.sv'))
            );
          },
          ct = function (t, e, n, r, i) {
            (i && void 0 === n) || ht(c.errorPrefix(t, e, i), n, r);
          },
          ht = function t(e, n, r) {
            var o = r instanceof B ? new H(r, e) : r;
            if (void 0 === n)
              throw new Error(e + 'contains undefined ' + o.toErrorString());
            if ('function' === typeof n)
              throw new Error(
                e +
                  'contains a function ' +
                  o.toErrorString() +
                  ' with contents = ' +
                  n.toString()
              );
            if (O(n))
              throw new Error(
                e + 'contains ' + n.toString() + ' ' + o.toErrorString()
              );
            if (
              'string' === typeof n &&
              n.length > ot / 3 &&
              c.stringLength(n) > ot
            )
              throw new Error(
                e +
                  'contains a string greater than ' +
                  '10485760 utf8 bytes ' +
                  o.toErrorString() +
                  " ('" +
                  n.substring(0, 50) +
                  "...')"
              );
            if (n && 'object' === i(n)) {
              var a = !1,
                s = !1;
              if (
                (F(n, function (n, r) {
                  if ('.value' === n) a = !0;
                  else if (
                    '.priority' !== n &&
                    '.sv' !== n &&
                    ((s = !0), !at(n))
                  )
                    throw new Error(
                      e +
                        ' contains an invalid key (' +
                        n +
                        ') ' +
                        o.toErrorString() +
                        '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
                  o.push(n), t(e, r, o), o.pop();
                }),
                a && s)
              )
                throw new Error(
                  e +
                    ' contains ".value" child ' +
                    o.toErrorString() +
                    ' in addition to actual children.'
                );
            }
          },
          lt = function (t, e, n, r, o) {
            if (!o || void 0 !== n) {
              var a = c.errorPrefix(t, e, o);
              if (!n || 'object' !== i(n) || Array.isArray(n))
                throw new Error(
                  a + ' must be an object containing the children to replace.'
                );
              var s = [];
              F(n, function (t, e) {
                var n = new B(t);
                if (
                  (ht(a, e, r.child(n)), '.priority' === n.getBack() && !ut(e))
                )
                  throw new Error(
                    a +
                      "contains an invalid value for '" +
                      n.toString() +
                      "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                  );
                s.push(n);
              }),
                (function (t, e) {
                  var n, r;
                  for (n = 0; n < e.length; n++)
                    for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++)
                      if ('.priority' === i[o] && o === i.length - 1);
                      else if (!at(i[o]))
                        throw new Error(
                          t +
                            'contains an invalid key (' +
                            i[o] +
                            ') in path ' +
                            r.toString() +
                            '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                        );
                  e.sort(B.comparePaths);
                  var a = null;
                  for (n = 0; n < e.length; n++) {
                    if (((r = e[n]), null !== a && a.contains(r)))
                      throw new Error(
                        t +
                          'contains a path ' +
                          a.toString() +
                          ' that is ancestor of another path ' +
                          r.toString()
                      );
                    a = r;
                  }
                })(a, s);
            }
          },
          ft = function (t, e, n, r) {
            if (!r || void 0 !== n) {
              if (O(n))
                throw new Error(
                  c.errorPrefix(t, e, r) +
                    'is ' +
                    n.toString() +
                    ', but must be a valid Firebase priority (a string, finite number, server value, or null).'
                );
              if (!ut(n))
                throw new Error(
                  c.errorPrefix(t, e, r) +
                    'must be a valid Firebase priority (a string, finite number, server value, or null).'
                );
            }
          },
          pt = function (t, e, n, r) {
            if (!r || void 0 !== n)
              switch (n) {
                case 'value':
                case 'child_added':
                case 'child_removed':
                case 'child_changed':
                case 'child_moved':
                  break;
                default:
                  throw new Error(
                    c.errorPrefix(t, e, r) +
                      'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                  );
              }
          },
          dt = function (t, e, n, r) {
            if ((!r || void 0 !== n) && !at(n))
              throw new Error(
                c.errorPrefix(t, e, r) +
                  'was an invalid key = "' +
                  n +
                  '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
              );
          },
          vt = function (t, e, n, r) {
            if ((!r || void 0 !== n) && !st(n))
              throw new Error(
                c.errorPrefix(t, e, r) +
                  'was an invalid path = "' +
                  n +
                  '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
              );
          },
          yt = function (t, e, n, r) {
            n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), vt(t, e, n, r);
          },
          gt = function (t, e) {
            if ('.info' === e.getFront())
              throw new Error(t + " failed = Can't modify data under /.info/");
          },
          mt = function (t, e, n) {
            var r = n.path.toString();
            if (
              'string' !== typeof n.repoInfo.host ||
              0 === n.repoInfo.host.length ||
              (!at(n.repoInfo.namespace) &&
                'localhost' !== n.repoInfo.host.split(':')[0]) ||
              (0 !== r.length &&
                !(function (t) {
                  return t && (t = t.replace(/^\/*\.info(\/|$)/, '/')), st(t);
                })(r))
            )
              throw new Error(
                c.errorPrefix(t, e, !1) +
                  'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
              );
          },
          _t = function (t, e, n, r) {
            if ((!r || void 0 !== n) && 'boolean' !== typeof n)
              throw new Error(c.errorPrefix(t, e, r) + 'must be a boolean.');
          },
          bt = (function () {
            function t(t, e) {
              (this.repo_ = t), (this.path_ = e);
            }
            return (
              (t.prototype.cancel = function (t) {
                c.validateArgCount(
                  'OnDisconnect.cancel',
                  0,
                  1,
                  arguments.length
                ),
                  c.validateCallback('OnDisconnect.cancel', 1, t, !0);
                var e = new c.Deferred();
                return (
                  this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)),
                  e.promise
                );
              }),
              (t.prototype.remove = function (t) {
                c.validateArgCount(
                  'OnDisconnect.remove',
                  0,
                  1,
                  arguments.length
                ),
                  gt('OnDisconnect.remove', this.path_),
                  c.validateCallback('OnDisconnect.remove', 1, t, !0);
                var e = new c.Deferred();
                return (
                  this.repo_.onDisconnectSet(
                    this.path_,
                    null,
                    e.wrapCallback(t)
                  ),
                  e.promise
                );
              }),
              (t.prototype.set = function (t, e) {
                c.validateArgCount('OnDisconnect.set', 1, 2, arguments.length),
                  gt('OnDisconnect.set', this.path_),
                  ct('OnDisconnect.set', 1, t, this.path_, !1),
                  c.validateCallback('OnDisconnect.set', 2, e, !0);
                var n = new c.Deferred();
                return (
                  this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)),
                  n.promise
                );
              }),
              (t.prototype.setWithPriority = function (t, e, n) {
                c.validateArgCount(
                  'OnDisconnect.setWithPriority',
                  2,
                  3,
                  arguments.length
                ),
                  gt('OnDisconnect.setWithPriority', this.path_),
                  ct('OnDisconnect.setWithPriority', 1, t, this.path_, !1),
                  ft('OnDisconnect.setWithPriority', 2, e, !1),
                  c.validateCallback('OnDisconnect.setWithPriority', 3, n, !0);
                var r = new c.Deferred();
                return (
                  this.repo_.onDisconnectSetWithPriority(
                    this.path_,
                    t,
                    e,
                    r.wrapCallback(n)
                  ),
                  r.promise
                );
              }),
              (t.prototype.update = function (t, e) {
                if (
                  (c.validateArgCount(
                    'OnDisconnect.update',
                    1,
                    2,
                    arguments.length
                  ),
                  gt('OnDisconnect.update', this.path_),
                  Array.isArray(t))
                ) {
                  for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r];
                  (t = n),
                    A(
                      'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                    );
                }
                lt('OnDisconnect.update', 1, t, this.path_, !1),
                  c.validateCallback('OnDisconnect.update', 2, e, !0);
                var i = new c.Deferred();
                return (
                  this.repo_.onDisconnectUpdate(
                    this.path_,
                    t,
                    i.wrapCallback(e)
                  ),
                  i.promise
                );
              }),
              t
            );
          })(),
          wt = (function () {
            function t(t, e) {
              (this.committed = t), (this.snapshot = e);
            }
            return (
              (t.prototype.toJSON = function () {
                return (
                  c.validateArgCount(
                    'TransactionResult.toJSON',
                    0,
                    1,
                    arguments.length
                  ),
                  {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON(),
                  }
                );
              }),
              t
            );
          })(),
          Et =
            ((X =
              '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'),
            ($ = 0),
            (J = []),
            function (t) {
              var e,
                n = t === $;
              $ = t;
              var r = new Array(8);
              for (e = 7; e >= 0; e--)
                (r[e] = X.charAt(t % 64)), (t = Math.floor(t / 64));
              c.assert(0 === t, 'Cannot push at time == 0');
              var i = r.join('');
              if (n) {
                for (e = 11; e >= 0 && 63 === J[e]; e--) J[e] = 0;
                J[e]++;
              } else
                for (e = 0; e < 12; e++) J[e] = Math.floor(64 * Math.random());
              for (e = 0; e < 12; e++) i += X.charAt(J[e]);
              return (
                c.assert(20 === i.length, 'nextPushId: Length should be 20.'), i
              );
            }),
          Ct = (function () {
            function t(t, e) {
              (this.name = t), (this.node = e);
            }
            return (
              (t.Wrap = function (e, n) {
                return new t(e, n);
              }),
              t
            );
          })(),
          St = (function () {
            function t() {}
            return (
              (t.prototype.getCompare = function () {
                return this.compare.bind(this);
              }),
              (t.prototype.indexedValueChanged = function (t, e) {
                var n = new Ct(P, t),
                  r = new Ct(P, e);
                return 0 !== this.compare(n, r);
              }),
              (t.prototype.minPost = function () {
                return Ct.MIN;
              }),
              t
            );
          })(),
          It = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              u.__extends(e, t),
              Object.defineProperty(e, '__EMPTY_NODE', {
                get: function () {
                  return Z;
                },
                set: function (t) {
                  Z = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.compare = function (t, e) {
                return x(t.name, e.name);
              }),
              (e.prototype.isDefinedOn = function (t) {
                throw c.assertionError(
                  'KeyIndex.isDefinedOn not expected to be called.'
                );
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !1;
              }),
              (e.prototype.minPost = function () {
                return Ct.MIN;
              }),
              (e.prototype.maxPost = function () {
                return new Ct(k, Z);
              }),
              (e.prototype.makePost = function (t, e) {
                return (
                  c.assert(
                    'string' === typeof t,
                    'KeyIndex indexValue must always be a string.'
                  ),
                  new Ct(t, Z)
                );
              }),
              (e.prototype.toString = function () {
                return '.key';
              }),
              e
            );
          })(St),
          Tt = new It();
        var Nt,
          At,
          Ot,
          Pt = function (t) {
            return 'number' === typeof t ? 'number:' + j(t) : 'string:' + t;
          },
          kt = function (t) {
            if (t.isLeafNode()) {
              var e = t.val();
              c.assert(
                'string' === typeof e ||
                  'number' === typeof e ||
                  ('object' === i(e) && c.contains(e, '.sv')),
                'Priority must be a string or number.'
              );
            } else
              c.assert(t === tt || t.isEmpty(), 'priority of unexpected type.');
            c.assert(
              t === tt || t.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
          },
          xt = (function () {
            function t(e, n) {
              void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE),
                (this.value_ = e),
                (this.priorityNode_ = n),
                (this.lazyHash_ = null),
                c.assert(
                  void 0 !== this.value_ && null !== this.value_,
                  "LeafNode shouldn't be created with null/undefined value."
                ),
                kt(this.priorityNode_);
            }
            return (
              Object.defineProperty(t, '__childrenNodeConstructor', {
                get: function () {
                  return Nt;
                },
                set: function (t) {
                  Nt = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isLeafNode = function () {
                return !0;
              }),
              (t.prototype.getPriority = function () {
                return this.priorityNode_;
              }),
              (t.prototype.updatePriority = function (e) {
                return new t(this.value_, e);
              }),
              (t.prototype.getImmediateChild = function (e) {
                return '.priority' === e
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.getChild = function (e) {
                return e.isEmpty()
                  ? this
                  : '.priority' === e.getFront()
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE;
              }),
              (t.prototype.hasChild = function () {
                return !1;
              }),
              (t.prototype.getPredecessorChildName = function (t, e) {
                return null;
              }),
              (t.prototype.updateImmediateChild = function (e, n) {
                return '.priority' === e
                  ? this.updatePriority(n)
                  : n.isEmpty() && '.priority' !== e
                  ? this
                  : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                      e,
                      n
                    ).updatePriority(this.priorityNode_);
              }),
              (t.prototype.updateChild = function (e, n) {
                var r = e.getFront();
                return null === r
                  ? n
                  : n.isEmpty() && '.priority' !== r
                  ? this
                  : (c.assert(
                      '.priority' !== r || 1 === e.getLength(),
                      '.priority must be the last token in a path'
                    ),
                    this.updateImmediateChild(
                      r,
                      t.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                        e.popFront(),
                        n
                      )
                    ));
              }),
              (t.prototype.isEmpty = function () {
                return !1;
              }),
              (t.prototype.numChildren = function () {
                return 0;
              }),
              (t.prototype.forEachChild = function (t, e) {
                return !1;
              }),
              (t.prototype.val = function (t) {
                return t && !this.getPriority().isEmpty()
                  ? {
                      '.value': this.getValue(),
                      '.priority': this.getPriority().val(),
                    }
                  : this.getValue();
              }),
              (t.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var t = '';
                  this.priorityNode_.isEmpty() ||
                    (t += 'priority:' + Pt(this.priorityNode_.val()) + ':');
                  var e = i(this.value_);
                  (t += e + ':'),
                    (t += 'number' === e ? j(this.value_) : this.value_),
                    (this.lazyHash_ = _(t));
                }
                return this.lazyHash_;
              }),
              (t.prototype.getValue = function () {
                return this.value_;
              }),
              (t.prototype.compareTo = function (e) {
                return e === t.__childrenNodeConstructor.EMPTY_NODE
                  ? 1
                  : e instanceof t.__childrenNodeConstructor
                  ? -1
                  : (c.assert(e.isLeafNode(), 'Unknown node type'),
                    this.compareToLeafNode_(e));
              }),
              (t.prototype.compareToLeafNode_ = function (e) {
                var n = i(e.value_),
                  r = i(this.value_),
                  o = t.VALUE_TYPE_ORDER.indexOf(n),
                  a = t.VALUE_TYPE_ORDER.indexOf(r);
                return (
                  c.assert(o >= 0, 'Unknown leaf type: ' + n),
                  c.assert(a >= 0, 'Unknown leaf type: ' + r),
                  o === a
                    ? 'object' === r
                      ? 0
                      : this.value_ < e.value_
                      ? -1
                      : this.value_ === e.value_
                      ? 0
                      : 1
                    : a - o
                );
              }),
              (t.prototype.withIndex = function () {
                return this;
              }),
              (t.prototype.isIndexed = function () {
                return !0;
              }),
              (t.prototype.equals = function (t) {
                if (t === this) return !0;
                if (t.isLeafNode()) {
                  var e = t;
                  return (
                    this.value_ === e.value_ &&
                    this.priorityNode_.equals(e.priorityNode_)
                  );
                }
                return !1;
              }),
              (t.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']),
              t
            );
          })();
        var Rt,
          Dt,
          Lt = new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              u.__extends(e, t),
              (e.prototype.compare = function (t, e) {
                var n = t.node.getPriority(),
                  r = e.node.getPriority(),
                  i = n.compareTo(r);
                return 0 === i ? x(t.name, e.name) : i;
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !t.getPriority().isEmpty();
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !t.getPriority().equals(e.getPriority());
              }),
              (e.prototype.minPost = function () {
                return Ct.MIN;
              }),
              (e.prototype.maxPost = function () {
                return new Ct(k, new xt('[PRIORITY-POST]', Ot));
              }),
              (e.prototype.makePost = function (t, e) {
                var n = At(t);
                return new Ct(e, new xt('[PRIORITY-POST]', n));
              }),
              (e.prototype.toString = function () {
                return '.priority';
              }),
              e
            );
          })(St))(),
          Mt = (function () {
            function t(t, e, n, r, i) {
              void 0 === i && (i = null),
                (this.isReverse_ = r),
                (this.resultGenerator_ = i),
                (this.nodeStack_ = []);
              for (var o = 1; !t.isEmpty(); )
                if (((t = t), (o = e ? n(t.key, e) : 1), r && (o *= -1), o < 0))
                  t = this.isReverse_ ? t.left : t.right;
                else {
                  if (0 === o) {
                    this.nodeStack_.push(t);
                    break;
                  }
                  this.nodeStack_.push(t),
                    (t = this.isReverse_ ? t.right : t.left);
                }
            }
            return (
              (t.prototype.getNext = function () {
                if (0 === this.nodeStack_.length) return null;
                var t,
                  e = this.nodeStack_.pop();
                if (
                  ((t = this.resultGenerator_
                    ? this.resultGenerator_(e.key, e.value)
                    : {
                        key: e.key,
                        value: e.value,
                      }),
                  this.isReverse_)
                )
                  for (e = e.left; !e.isEmpty(); )
                    this.nodeStack_.push(e), (e = e.right);
                else
                  for (e = e.right; !e.isEmpty(); )
                    this.nodeStack_.push(e), (e = e.left);
                return t;
              }),
              (t.prototype.hasNext = function () {
                return this.nodeStack_.length > 0;
              }),
              (t.prototype.peek = function () {
                if (0 === this.nodeStack_.length) return null;
                var t = this.nodeStack_[this.nodeStack_.length - 1];
                return this.resultGenerator_
                  ? this.resultGenerator_(t.key, t.value)
                  : {
                      key: t.key,
                      value: t.value,
                    };
              }),
              t
            );
          })(),
          Ft = (function () {
            function t(e, n, r, i, o) {
              (this.key = e),
                (this.value = n),
                (this.color = null != r ? r : t.RED),
                (this.left = null != i ? i : Ut.EMPTY_NODE),
                (this.right = null != o ? o : Ut.EMPTY_NODE);
            }
            return (
              (t.prototype.copy = function (e, n, r, i, o) {
                return new t(
                  null != e ? e : this.key,
                  null != n ? n : this.value,
                  null != r ? r : this.color,
                  null != i ? i : this.left,
                  null != o ? o : this.right
                );
              }),
              (t.prototype.count = function () {
                return this.left.count() + 1 + this.right.count();
              }),
              (t.prototype.isEmpty = function () {
                return !1;
              }),
              (t.prototype.inorderTraversal = function (t) {
                return (
                  this.left.inorderTraversal(t) ||
                  !!t(this.key, this.value) ||
                  this.right.inorderTraversal(t)
                );
              }),
              (t.prototype.reverseTraversal = function (t) {
                return (
                  this.right.reverseTraversal(t) ||
                  t(this.key, this.value) ||
                  this.left.reverseTraversal(t)
                );
              }),
              (t.prototype.min_ = function () {
                return this.left.isEmpty() ? this : this.left.min_();
              }),
              (t.prototype.minKey = function () {
                return this.min_().key;
              }),
              (t.prototype.maxKey = function () {
                return this.right.isEmpty() ? this.key : this.right.maxKey();
              }),
              (t.prototype.insert = function (t, e, n) {
                var r = this,
                  i = n(t, r.key);
                return (r =
                  i < 0
                    ? r.copy(null, null, null, r.left.insert(t, e, n), null)
                    : 0 === i
                    ? r.copy(null, e, null, null, null)
                    : r.copy(
                        null,
                        null,
                        null,
                        null,
                        r.right.insert(t, e, n)
                      )).fixUp_();
              }),
              (t.prototype.removeMin_ = function () {
                if (this.left.isEmpty()) return Ut.EMPTY_NODE;
                var t = this;
                return (
                  t.left.isRed_() ||
                    t.left.left.isRed_() ||
                    (t = t.moveRedLeft_()),
                  (t = t.copy(
                    null,
                    null,
                    null,
                    t.left.removeMin_(),
                    null
                  )).fixUp_()
                );
              }),
              (t.prototype.remove = function (t, e) {
                var n, r;
                if (e(t, (n = this).key) < 0)
                  n.left.isEmpty() ||
                    n.left.isRed_() ||
                    n.left.left.isRed_() ||
                    (n = n.moveRedLeft_()),
                    (n = n.copy(null, null, null, n.left.remove(t, e), null));
                else {
                  if (
                    (n.left.isRed_() && (n = n.rotateRight_()),
                    n.right.isEmpty() ||
                      n.right.isRed_() ||
                      n.right.left.isRed_() ||
                      (n = n.moveRedRight_()),
                    0 === e(t, n.key))
                  ) {
                    if (n.right.isEmpty()) return Ut.EMPTY_NODE;
                    (r = n.right.min_()),
                      (n = n.copy(
                        r.key,
                        r.value,
                        null,
                        null,
                        n.right.removeMin_()
                      ));
                  }
                  n = n.copy(null, null, null, null, n.right.remove(t, e));
                }
                return n.fixUp_();
              }),
              (t.prototype.isRed_ = function () {
                return this.color;
              }),
              (t.prototype.fixUp_ = function () {
                var t = this;
                return (
                  t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
                  t.left.isRed_() &&
                    t.left.left.isRed_() &&
                    (t = t.rotateRight_()),
                  t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
                  t
                );
              }),
              (t.prototype.moveRedLeft_ = function () {
                var t = this.colorFlip_();
                return (
                  t.right.left.isRed_() &&
                    (t = (t = (t = t.copy(
                      null,
                      null,
                      null,
                      null,
                      t.right.rotateRight_()
                    )).rotateLeft_()).colorFlip_()),
                  t
                );
              }),
              (t.prototype.moveRedRight_ = function () {
                var t = this.colorFlip_();
                return (
                  t.left.left.isRed_() &&
                    (t = (t = t.rotateRight_()).colorFlip_()),
                  t
                );
              }),
              (t.prototype.rotateLeft_ = function () {
                var e = this.copy(null, null, t.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, e, null);
              }),
              (t.prototype.rotateRight_ = function () {
                var e = this.copy(null, null, t.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, e);
              }),
              (t.prototype.colorFlip_ = function () {
                var t = this.left.copy(
                    null,
                    null,
                    !this.left.color,
                    null,
                    null
                  ),
                  e = this.right.copy(
                    null,
                    null,
                    !this.right.color,
                    null,
                    null
                  );
                return this.copy(null, null, !this.color, t, e);
              }),
              (t.prototype.checkMaxDepth_ = function () {
                var t = this.check_();
                return Math.pow(2, t) <= this.count() + 1;
              }),
              (t.prototype.check_ = function () {
                if (this.isRed_() && this.left.isRed_())
                  throw new Error(
                    'Red node has red child(' +
                      this.key +
                      ',' +
                      this.value +
                      ')'
                  );
                if (this.right.isRed_())
                  throw new Error(
                    'Right child of (' +
                      this.key +
                      ',' +
                      this.value +
                      ') is red'
                  );
                var t = this.left.check_();
                if (t !== this.right.check_())
                  throw new Error('Black depths differ');
                return t + (this.isRed_() ? 0 : 1);
              }),
              (t.RED = !0),
              (t.BLACK = !1),
              t
            );
          })(),
          jt = (function () {
            function t() {}
            return (
              (t.prototype.copy = function (t, e, n, r, i) {
                return this;
              }),
              (t.prototype.insert = function (t, e, n) {
                return new Ft(t, e, null);
              }),
              (t.prototype.remove = function (t, e) {
                return this;
              }),
              (t.prototype.count = function () {
                return 0;
              }),
              (t.prototype.isEmpty = function () {
                return !0;
              }),
              (t.prototype.inorderTraversal = function (t) {
                return !1;
              }),
              (t.prototype.reverseTraversal = function (t) {
                return !1;
              }),
              (t.prototype.minKey = function () {
                return null;
              }),
              (t.prototype.maxKey = function () {
                return null;
              }),
              (t.prototype.check_ = function () {
                return 0;
              }),
              (t.prototype.isRed_ = function () {
                return !1;
              }),
              t
            );
          })(),
          Ut = (function () {
            function t(e, n) {
              void 0 === n && (n = t.EMPTY_NODE),
                (this.comparator_ = e),
                (this.root_ = n);
            }
            return (
              (t.prototype.insert = function (e, n) {
                return new t(
                  this.comparator_,
                  this.root_
                    .insert(e, n, this.comparator_)
                    .copy(null, null, Ft.BLACK, null, null)
                );
              }),
              (t.prototype.remove = function (e) {
                return new t(
                  this.comparator_,
                  this.root_
                    .remove(e, this.comparator_)
                    .copy(null, null, Ft.BLACK, null, null)
                );
              }),
              (t.prototype.get = function (t) {
                for (var e, n = this.root_; !n.isEmpty(); ) {
                  if (0 === (e = this.comparator_(t, n.key))) return n.value;
                  e < 0 ? (n = n.left) : e > 0 && (n = n.right);
                }
                return null;
              }),
              (t.prototype.getPredecessorKey = function (t) {
                for (var e, n = this.root_, r = null; !n.isEmpty(); ) {
                  if (0 === (e = this.comparator_(t, n.key))) {
                    if (n.left.isEmpty()) return r ? r.key : null;
                    for (n = n.left; !n.right.isEmpty(); ) n = n.right;
                    return n.key;
                  }
                  e < 0 ? (n = n.left) : e > 0 && ((r = n), (n = n.right));
                }
                throw new Error(
                  'Attempted to find predecessor key for a nonexistent key.  What gives?'
                );
              }),
              (t.prototype.isEmpty = function () {
                return this.root_.isEmpty();
              }),
              (t.prototype.count = function () {
                return this.root_.count();
              }),
              (t.prototype.minKey = function () {
                return this.root_.minKey();
              }),
              (t.prototype.maxKey = function () {
                return this.root_.maxKey();
              }),
              (t.prototype.inorderTraversal = function (t) {
                return this.root_.inorderTraversal(t);
              }),
              (t.prototype.reverseTraversal = function (t) {
                return this.root_.reverseTraversal(t);
              }),
              (t.prototype.getIterator = function (t) {
                return new Mt(this.root_, null, this.comparator_, !1, t);
              }),
              (t.prototype.getIteratorFrom = function (t, e) {
                return new Mt(this.root_, t, this.comparator_, !1, e);
              }),
              (t.prototype.getReverseIteratorFrom = function (t, e) {
                return new Mt(this.root_, t, this.comparator_, !0, e);
              }),
              (t.prototype.getReverseIterator = function (t) {
                return new Mt(this.root_, null, this.comparator_, !0, t);
              }),
              (t.EMPTY_NODE = new jt()),
              t
            );
          })(),
          Vt = Math.log(2),
          Wt = (function () {
            function t(t) {
              var e;
              (this.count = ((e = t + 1), parseInt(Math.log(e) / Vt, 10))),
                (this.current_ = this.count - 1);
              var n,
                r = ((n = this.count), parseInt(Array(n + 1).join('1'), 2));
              this.bits_ = (t + 1) & r;
            }
            return (
              (t.prototype.nextBitIsOne = function () {
                var t = !(this.bits_ & (1 << this.current_));
                return this.current_--, t;
              }),
              t
            );
          })(),
          qt = function (t, e, n, r) {
            t.sort(e);
            var i = function e(r, i) {
                var o,
                  a,
                  s = i - r;
                if (0 === s) return null;
                if (1 === s)
                  return (
                    (o = t[r]),
                    (a = n ? n(o) : o),
                    new Ft(a, o.node, Ft.BLACK, null, null)
                  );
                var u = parseInt(s / 2, 10) + r,
                  c = e(r, u),
                  h = e(u + 1, i);
                return (
                  (o = t[u]),
                  (a = n ? n(o) : o),
                  new Ft(a, o.node, Ft.BLACK, c, h)
                );
              },
              o = (function (e) {
                for (
                  var r = null,
                    o = null,
                    a = t.length,
                    s = function (e, r) {
                      var o = a - e,
                        s = a;
                      a -= e;
                      var c = i(o + 1, s),
                        h = t[o],
                        l = n ? n(h) : h;
                      u(new Ft(l, h.node, r, null, c));
                    },
                    u = function (t) {
                      r ? ((r.left = t), (r = t)) : ((o = t), (r = t));
                    },
                    c = 0;
                  c < e.count;
                  ++c
                ) {
                  var h = e.nextBitIsOne(),
                    l = Math.pow(2, e.count - (c + 1));
                  h ? s(l, Ft.BLACK) : (s(l, Ft.BLACK), s(l, Ft.RED));
                }
                return o;
              })(new Wt(t.length));
            return new Ut(r || e, o);
          },
          Bt = {},
          Ht = (function () {
            function t(t, e) {
              (this.indexes_ = t), (this.indexSet_ = e);
            }
            return (
              Object.defineProperty(t, 'Default', {
                get: function () {
                  return (
                    c.assert(Bt && Lt, 'ChildrenNode.ts has not been loaded'),
                    (Rt =
                      Rt ||
                      new t(
                        {
                          '.priority': Bt,
                        },
                        {
                          '.priority': Lt,
                        }
                      ))
                  );
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var e = c.safeGet(this.indexes_, t);
                if (!e) throw new Error('No index defined for ' + t);
                return e instanceof Ut ? e : null;
              }),
              (t.prototype.hasIndex = function (t) {
                return c.contains(this.indexSet_, t.toString());
              }),
              (t.prototype.addIndex = function (e, n) {
                c.assert(
                  e !== Tt,
                  "KeyIndex always exists and isn't meant to be added to the IndexMap."
                );
                for (
                  var r,
                    i = [],
                    o = !1,
                    a = n.getIterator(Ct.Wrap),
                    s = a.getNext();
                  s;

                )
                  (o = o || e.isDefinedOn(s.node)),
                    i.push(s),
                    (s = a.getNext());
                r = o ? qt(i, e.getCompare()) : Bt;
                var h = e.toString(),
                  l = u.__assign({}, this.indexSet_);
                l[h] = e;
                var f = u.__assign({}, this.indexes_);
                return (f[h] = r), new t(f, l);
              }),
              (t.prototype.addToIndexes = function (e, n) {
                var r = this;
                return new t(
                  c.map(this.indexes_, function (t, i) {
                    var o = c.safeGet(r.indexSet_, i);
                    if (
                      (c.assert(o, 'Missing index implementation for ' + i),
                      t === Bt)
                    ) {
                      if (o.isDefinedOn(e.node)) {
                        for (
                          var a = [],
                            s = n.getIterator(Ct.Wrap),
                            u = s.getNext();
                          u;

                        )
                          u.name !== e.name && a.push(u), (u = s.getNext());
                        return a.push(e), qt(a, o.getCompare());
                      }
                      return Bt;
                    }
                    var h = n.get(e.name),
                      l = t;
                    return (
                      h && (l = l.remove(new Ct(e.name, h))),
                      l.insert(e, e.node)
                    );
                  }),
                  this.indexSet_
                );
              }),
              (t.prototype.removeFromIndexes = function (e, n) {
                return new t(
                  c.map(this.indexes_, function (t) {
                    if (t === Bt) return t;
                    var r = n.get(e.name);
                    return r ? t.remove(new Ct(e.name, r)) : t;
                  }),
                  this.indexSet_
                );
              }),
              t
            );
          })();

        function Qt(t, e) {
          return x(t.name, e.name);
        }

        function Kt(t, e) {
          return x(t, e);
        }
        var Gt = (function () {
            function t(t, e, n) {
              (this.children_ = t),
                (this.priorityNode_ = e),
                (this.indexMap_ = n),
                (this.lazyHash_ = null),
                this.priorityNode_ && kt(this.priorityNode_),
                this.children_.isEmpty() &&
                  c.assert(
                    !this.priorityNode_ || this.priorityNode_.isEmpty(),
                    'An empty node cannot have a priority'
                  );
            }
            return (
              Object.defineProperty(t, 'EMPTY_NODE', {
                get: function () {
                  return Dt || (Dt = new t(new Ut(Kt), null, Ht.Default));
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isLeafNode = function () {
                return !1;
              }),
              (t.prototype.getPriority = function () {
                return this.priorityNode_ || Dt;
              }),
              (t.prototype.updatePriority = function (e) {
                return this.children_.isEmpty()
                  ? this
                  : new t(this.children_, e, this.indexMap_);
              }),
              (t.prototype.getImmediateChild = function (t) {
                if ('.priority' === t) return this.getPriority();
                var e = this.children_.get(t);
                return null === e ? Dt : e;
              }),
              (t.prototype.getChild = function (t) {
                var e = t.getFront();
                return null === e
                  ? this
                  : this.getImmediateChild(e).getChild(t.popFront());
              }),
              (t.prototype.hasChild = function (t) {
                return null !== this.children_.get(t);
              }),
              (t.prototype.updateImmediateChild = function (e, n) {
                if (
                  (c.assert(n, 'We should always be passing snapshot nodes'),
                  '.priority' === e)
                )
                  return this.updatePriority(n);
                var r = new Ct(e, n),
                  i = void 0,
                  o = void 0;
                n.isEmpty()
                  ? ((i = this.children_.remove(e)),
                    (o = this.indexMap_.removeFromIndexes(r, this.children_)))
                  : ((i = this.children_.insert(e, n)),
                    (o = this.indexMap_.addToIndexes(r, this.children_)));
                var a = i.isEmpty() ? Dt : this.priorityNode_;
                return new t(i, a, o);
              }),
              (t.prototype.updateChild = function (t, e) {
                var n = t.getFront();
                if (null === n) return e;
                c.assert(
                  '.priority' !== t.getFront() || 1 === t.getLength(),
                  '.priority must be the last token in a path'
                );
                var r = this.getImmediateChild(n).updateChild(t.popFront(), e);
                return this.updateImmediateChild(n, r);
              }),
              (t.prototype.isEmpty = function () {
                return this.children_.isEmpty();
              }),
              (t.prototype.numChildren = function () {
                return this.children_.count();
              }),
              (t.prototype.val = function (e) {
                if (this.isEmpty()) return null;
                var n = {},
                  r = 0,
                  i = 0,
                  o = !0;
                if (
                  (this.forEachChild(Lt, function (a, s) {
                    (n[a] = s.val(e)),
                      r++,
                      o && t.INTEGER_REGEXP_.test(a)
                        ? (i = Math.max(i, Number(a)))
                        : (o = !1);
                  }),
                  !e && o && i < 2 * r)
                ) {
                  var a = [];
                  for (var s in n) a[s] = n[s];
                  return a;
                }
                return (
                  e &&
                    !this.getPriority().isEmpty() &&
                    (n['.priority'] = this.getPriority().val()),
                  n
                );
              }),
              (t.prototype.hash = function () {
                if (null === this.lazyHash_) {
                  var t = '';
                  this.getPriority().isEmpty() ||
                    (t += 'priority:' + Pt(this.getPriority().val()) + ':'),
                    this.forEachChild(Lt, function (e, n) {
                      var r = n.hash();
                      '' !== r && (t += ':' + e + ':' + r);
                    }),
                    (this.lazyHash_ = '' === t ? '' : _(t));
                }
                return this.lazyHash_;
              }),
              (t.prototype.getPredecessorChildName = function (t, e, n) {
                var r = this.resolveIndex_(n);
                if (r) {
                  var i = r.getPredecessorKey(new Ct(t, e));
                  return i ? i.name : null;
                }
                return this.children_.getPredecessorKey(t);
              }),
              (t.prototype.getFirstChildName = function (t) {
                var e = this.resolveIndex_(t);
                if (e) {
                  var n = e.minKey();
                  return n && n.name;
                }
                return this.children_.minKey();
              }),
              (t.prototype.getFirstChild = function (t) {
                var e = this.getFirstChildName(t);
                return e ? new Ct(e, this.children_.get(e)) : null;
              }),
              (t.prototype.getLastChildName = function (t) {
                var e = this.resolveIndex_(t);
                if (e) {
                  var n = e.maxKey();
                  return n && n.name;
                }
                return this.children_.maxKey();
              }),
              (t.prototype.getLastChild = function (t) {
                var e = this.getLastChildName(t);
                return e ? new Ct(e, this.children_.get(e)) : null;
              }),
              (t.prototype.forEachChild = function (t, e) {
                var n = this.resolveIndex_(t);
                return n
                  ? n.inorderTraversal(function (t) {
                      return e(t.name, t.node);
                    })
                  : this.children_.inorderTraversal(e);
              }),
              (t.prototype.getIterator = function (t) {
                return this.getIteratorFrom(t.minPost(), t);
              }),
              (t.prototype.getIteratorFrom = function (t, e) {
                var n = this.resolveIndex_(e);
                if (n)
                  return n.getIteratorFrom(t, function (t) {
                    return t;
                  });
                for (
                  var r = this.children_.getIteratorFrom(t.name, Ct.Wrap),
                    i = r.peek();
                  null != i && e.compare(i, t) < 0;

                )
                  r.getNext(), (i = r.peek());
                return r;
              }),
              (t.prototype.getReverseIterator = function (t) {
                return this.getReverseIteratorFrom(t.maxPost(), t);
              }),
              (t.prototype.getReverseIteratorFrom = function (t, e) {
                var n = this.resolveIndex_(e);
                if (n)
                  return n.getReverseIteratorFrom(t, function (t) {
                    return t;
                  });
                for (
                  var r = this.children_.getReverseIteratorFrom(
                      t.name,
                      Ct.Wrap
                    ),
                    i = r.peek();
                  null != i && e.compare(i, t) > 0;

                )
                  r.getNext(), (i = r.peek());
                return r;
              }),
              (t.prototype.compareTo = function (t) {
                return this.isEmpty()
                  ? t.isEmpty()
                    ? 0
                    : -1
                  : t.isLeafNode() || t.isEmpty()
                  ? 1
                  : t === zt
                  ? -1
                  : 0;
              }),
              (t.prototype.withIndex = function (e) {
                if (e === Tt || this.indexMap_.hasIndex(e)) return this;
                var n = this.indexMap_.addIndex(e, this.children_);
                return new t(this.children_, this.priorityNode_, n);
              }),
              (t.prototype.isIndexed = function (t) {
                return t === Tt || this.indexMap_.hasIndex(t);
              }),
              (t.prototype.equals = function (t) {
                if (t === this) return !0;
                if (t.isLeafNode()) return !1;
                var e = t;
                if (this.getPriority().equals(e.getPriority())) {
                  if (this.children_.count() === e.children_.count()) {
                    for (
                      var n = this.getIterator(Lt),
                        r = e.getIterator(Lt),
                        i = n.getNext(),
                        o = r.getNext();
                      i && o;

                    ) {
                      if (i.name !== o.name || !i.node.equals(o.node))
                        return !1;
                      (i = n.getNext()), (o = r.getNext());
                    }
                    return null === i && null === o;
                  }
                  return !1;
                }
                return !1;
              }),
              (t.prototype.resolveIndex_ = function (t) {
                return t === Tt ? null : this.indexMap_.get(t.toString());
              }),
              (t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
              t
            );
          })(),
          zt = new ((function (t) {
            function e() {
              return (
                t.call(this, new Ut(Kt), Gt.EMPTY_NODE, Ht.Default) || this
              );
            }
            return (
              u.__extends(e, t),
              (e.prototype.compareTo = function (t) {
                return t === this ? 0 : 1;
              }),
              (e.prototype.equals = function (t) {
                return t === this;
              }),
              (e.prototype.getPriority = function () {
                return this;
              }),
              (e.prototype.getImmediateChild = function (t) {
                return Gt.EMPTY_NODE;
              }),
              (e.prototype.isEmpty = function () {
                return !1;
              }),
              e
            );
          })(Gt))();
        Object.defineProperties(Ct, {
          MIN: {
            value: new Ct(P, Gt.EMPTY_NODE),
          },
          MAX: {
            value: new Ct(k, zt),
          },
        }),
          (It.__EMPTY_NODE = Gt.EMPTY_NODE),
          (xt.__childrenNodeConstructor = Gt),
          (tt = zt),
          (function (t) {
            Ot = t;
          })(zt);

        function Yt(t, e) {
          if ((void 0 === e && (e = null), null === t)) return Gt.EMPTY_NODE;
          if (
            ('object' === i(t) && '.priority' in t && (e = t['.priority']),
            c.assert(
              null === e ||
                'string' === typeof e ||
                'number' === typeof e ||
                ('object' === i(e) && '.sv' in e),
              'Invalid priority type found: ' + i(e)
            ),
            'object' === i(t) &&
              '.value' in t &&
              null !== t['.value'] &&
              (t = t['.value']),
            'object' !== i(t) || '.sv' in t)
          )
            return new xt(t, Yt(e));
          if (t instanceof Array) {
            var n = Gt.EMPTY_NODE;
            return (
              F(t, function (e, r) {
                if (c.contains(t, e) && '.' !== e.substring(0, 1)) {
                  var i = Yt(r);
                  (!i.isLeafNode() && i.isEmpty()) ||
                    (n = n.updateImmediateChild(e, i));
                }
              }),
              n.updatePriority(Yt(e))
            );
          }
          var r = [],
            o = !1;
          if (
            (F(t, function (t, e) {
              if ('.' !== t.substring(0, 1)) {
                var n = Yt(e);
                n.isEmpty() ||
                  ((o = o || !n.getPriority().isEmpty()), r.push(new Ct(t, n)));
              }
            }),
            0 === r.length)
          )
            return Gt.EMPTY_NODE;
          var a = qt(
            r,
            Qt,
            function (t) {
              return t.name;
            },
            Kt
          );
          if (o) {
            var s = qt(r, Lt.getCompare());
            return new Gt(
              a,
              Yt(e),
              new Ht(
                {
                  '.priority': s,
                },
                {
                  '.priority': Lt,
                }
              )
            );
          }
          return new Gt(a, Yt(e), Ht.Default);
        }
        !(function (t) {
          At = t;
        })(Yt);
        var Xt,
          $t,
          Jt = new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              u.__extends(e, t),
              (e.prototype.compare = function (t, e) {
                var n = t.node.compareTo(e.node);
                return 0 === n ? x(t.name, e.name) : n;
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !0;
              }),
              (e.prototype.indexedValueChanged = function (t, e) {
                return !t.equals(e);
              }),
              (e.prototype.minPost = function () {
                return Ct.MIN;
              }),
              (e.prototype.maxPost = function () {
                return Ct.MAX;
              }),
              (e.prototype.makePost = function (t, e) {
                var n = Yt(t);
                return new Ct(e, n);
              }),
              (e.prototype.toString = function () {
                return '.value';
              }),
              e
            );
          })(St))(),
          Zt = (function (t) {
            function e(e) {
              var n = t.call(this) || this;
              return (
                (n.indexPath_ = e),
                c.assert(
                  !e.isEmpty() && '.priority' !== e.getFront(),
                  "Can't create PathIndex with empty path or .priority key"
                ),
                n
              );
            }
            return (
              u.__extends(e, t),
              (e.prototype.extractChild = function (t) {
                return t.getChild(this.indexPath_);
              }),
              (e.prototype.isDefinedOn = function (t) {
                return !t.getChild(this.indexPath_).isEmpty();
              }),
              (e.prototype.compare = function (t, e) {
                var n = this.extractChild(t.node),
                  r = this.extractChild(e.node),
                  i = n.compareTo(r);
                return 0 === i ? x(t.name, e.name) : i;
              }),
              (e.prototype.makePost = function (t, e) {
                var n = Yt(t),
                  r = Gt.EMPTY_NODE.updateChild(this.indexPath_, n);
                return new Ct(e, r);
              }),
              (e.prototype.maxPost = function () {
                var t = Gt.EMPTY_NODE.updateChild(this.indexPath_, zt);
                return new Ct(k, t);
              }),
              (e.prototype.toString = function () {
                return this.indexPath_.slice().join('/');
              }),
              e
            );
          })(St),
          te = (function () {
            function t(t, e, n) {
              (this.node_ = t), (this.ref_ = e), (this.index_ = n);
            }
            return (
              (t.prototype.val = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.val',
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.val()
                );
              }),
              (t.prototype.exportVal = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.exportVal',
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.val(!0)
                );
              }),
              (t.prototype.toJSON = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.toJSON',
                    0,
                    1,
                    arguments.length
                  ),
                  this.exportVal()
                );
              }),
              (t.prototype.exists = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.exists',
                    0,
                    0,
                    arguments.length
                  ),
                  !this.node_.isEmpty()
                );
              }),
              (t.prototype.child = function (e) {
                c.validateArgCount(
                  'DataSnapshot.child',
                  0,
                  1,
                  arguments.length
                ),
                  (e = String(e)),
                  vt('DataSnapshot.child', 1, e, !1);
                var n = new B(e),
                  r = this.ref_.child(n);
                return new t(this.node_.getChild(n), r, Lt);
              }),
              (t.prototype.hasChild = function (t) {
                c.validateArgCount(
                  'DataSnapshot.hasChild',
                  1,
                  1,
                  arguments.length
                ),
                  vt('DataSnapshot.hasChild', 1, t, !1);
                var e = new B(t);
                return !this.node_.getChild(e).isEmpty();
              }),
              (t.prototype.getPriority = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.getPriority',
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.getPriority().val()
                );
              }),
              (t.prototype.forEach = function (e) {
                var n = this;
                if (
                  (c.validateArgCount(
                    'DataSnapshot.forEach',
                    1,
                    1,
                    arguments.length
                  ),
                  c.validateCallback('DataSnapshot.forEach', 1, e, !1),
                  this.node_.isLeafNode())
                )
                  return !1;
                var r = this.node_;
                return !!r.forEachChild(this.index_, function (r, i) {
                  return e(new t(i, n.ref_.child(r), Lt));
                });
              }),
              (t.prototype.hasChildren = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.hasChildren',
                    0,
                    0,
                    arguments.length
                  ),
                  !this.node_.isLeafNode() && !this.node_.isEmpty()
                );
              }),
              Object.defineProperty(t.prototype, 'key', {
                get: function () {
                  return this.ref_.getKey();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.numChildren = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.numChildren',
                    0,
                    0,
                    arguments.length
                  ),
                  this.node_.numChildren()
                );
              }),
              (t.prototype.getRef = function () {
                return (
                  c.validateArgCount(
                    'DataSnapshot.ref',
                    0,
                    0,
                    arguments.length
                  ),
                  this.ref_
                );
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function () {
                  return this.getRef();
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          ee = (function () {
            function t(t, e, n, r) {
              (this.eventType = t),
                (this.eventRegistration = e),
                (this.snapshot = n),
                (this.prevName = r);
            }
            return (
              (t.prototype.getPath = function () {
                var t = this.snapshot.getRef();
                return 'value' === this.eventType ? t.path : t.getParent().path;
              }),
              (t.prototype.getEventType = function () {
                return this.eventType;
              }),
              (t.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function () {
                return (
                  this.getPath().toString() +
                  ':' +
                  this.eventType +
                  ':' +
                  c.stringify(this.snapshot.exportVal())
                );
              }),
              t
            );
          })(),
          ne = (function () {
            function t(t, e, n) {
              (this.eventRegistration = t), (this.error = e), (this.path = n);
            }
            return (
              (t.prototype.getPath = function () {
                return this.path;
              }),
              (t.prototype.getEventType = function () {
                return 'cancel';
              }),
              (t.prototype.getEventRunner = function () {
                return this.eventRegistration.getEventRunner(this);
              }),
              (t.prototype.toString = function () {
                return this.path.toString() + ':cancel';
              }),
              t
            );
          })(),
          re = (function () {
            function t(t, e, n) {
              (this.callback_ = t),
                (this.cancelCallback_ = e),
                (this.context_ = n);
            }
            return (
              (t.prototype.respondsTo = function (t) {
                return 'value' === t;
              }),
              (t.prototype.createEvent = function (t, e) {
                var n = e.getQueryParams().getIndex();
                return new ee(
                  'value',
                  this,
                  new te(t.snapshotNode, e.getRef(), n)
                );
              }),
              (t.prototype.getEventRunner = function (t) {
                var e = this.context_;
                if ('cancel' === t.getEventType()) {
                  c.assert(
                    this.cancelCallback_,
                    'Raising a cancel event on a listener with no cancel callback'
                  );
                  var n = this.cancelCallback_;
                  return function () {
                    n.call(e, t.error);
                  };
                }
                var r = this.callback_;
                return function () {
                  r.call(e, t.snapshot);
                };
              }),
              (t.prototype.createCancelEvent = function (t, e) {
                return this.cancelCallback_ ? new ne(this, t, e) : null;
              }),
              (t.prototype.matches = function (e) {
                return (
                  e instanceof t &&
                  (!e.callback_ ||
                    !this.callback_ ||
                    (e.callback_ === this.callback_ &&
                      e.context_ === this.context_))
                );
              }),
              (t.prototype.hasAnyCallback = function () {
                return null !== this.callback_;
              }),
              t
            );
          })(),
          ie = (function () {
            function t(t, e, n) {
              (this.callbacks_ = t),
                (this.cancelCallback_ = e),
                (this.context_ = n);
            }
            return (
              (t.prototype.respondsTo = function (t) {
                var e = 'children_added' === t ? 'child_added' : t;
                return (
                  (e = 'children_removed' === e ? 'child_removed' : e),
                  c.contains(this.callbacks_, e)
                );
              }),
              (t.prototype.createCancelEvent = function (t, e) {
                return this.cancelCallback_ ? new ne(this, t, e) : null;
              }),
              (t.prototype.createEvent = function (t, e) {
                c.assert(
                  null != t.childName,
                  'Child events should have a childName.'
                );
                var n = e.getRef().child(t.childName),
                  r = e.getQueryParams().getIndex();
                return new ee(
                  t.type,
                  this,
                  new te(t.snapshotNode, n, r),
                  t.prevName
                );
              }),
              (t.prototype.getEventRunner = function (t) {
                var e = this.context_;
                if ('cancel' === t.getEventType()) {
                  c.assert(
                    this.cancelCallback_,
                    'Raising a cancel event on a listener with no cancel callback'
                  );
                  var n = this.cancelCallback_;
                  return function () {
                    n.call(e, t.error);
                  };
                }
                var r = this.callbacks_[t.eventType];
                return function () {
                  r.call(e, t.snapshot, t.prevName);
                };
              }),
              (t.prototype.matches = function (e) {
                var n = this;
                if (e instanceof t) {
                  if (!this.callbacks_ || !e.callbacks_) return !0;
                  if (this.context_ === e.context_) {
                    var r = Object.keys(e.callbacks_),
                      i = Object.keys(this.callbacks_),
                      o = r.length;
                    if (o === i.length) {
                      if (1 === o) {
                        var a = r[0],
                          s = i[0];
                        return (
                          s === a &&
                          (!e.callbacks_[a] ||
                            !this.callbacks_[s] ||
                            e.callbacks_[a] === this.callbacks_[s])
                        );
                      }
                      return i.every(function (t) {
                        return e.callbacks_[t] === n.callbacks_[t];
                      });
                    }
                  }
                }
                return !1;
              }),
              (t.prototype.hasAnyCallback = function () {
                return null !== this.callbacks_;
              }),
              t
            );
          })(),
          oe = (function () {
            function t(t, e, n, r) {
              (this.repo = t),
                (this.path = e),
                (this.queryParams_ = n),
                (this.orderByCalled_ = r);
            }
            return (
              Object.defineProperty(t, '__referenceConstructor', {
                get: function () {
                  return c.assert(Xt, 'Reference.ts has not been loaded'), Xt;
                },
                set: function (t) {
                  Xt = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.validateQueryEndpoints_ = function (t) {
                var e = null,
                  n = null;
                if (
                  (t.hasStart() && (e = t.getIndexStartValue()),
                  t.hasEnd() && (n = t.getIndexEndValue()),
                  t.getIndex() === Tt)
                ) {
                  var r =
                      'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
                    o =
                      'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.';
                  if (t.hasStart()) {
                    if (t.getIndexStartName() !== P) throw new Error(r);
                    if ('string' !== typeof e) throw new Error(o);
                  }
                  if (t.hasEnd()) {
                    if (t.getIndexEndName() !== k) throw new Error(r);
                    if ('string' !== typeof n) throw new Error(o);
                  }
                } else if (t.getIndex() === Lt) {
                  if ((null != e && !ut(e)) || (null != n && !ut(n)))
                    throw new Error(
                      'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).'
                    );
                } else if (
                  (c.assert(
                    t.getIndex() instanceof Zt || t.getIndex() === Jt,
                    'unknown index type.'
                  ),
                  (null != e && 'object' === i(e)) ||
                    (null != n && 'object' === i(n)))
                )
                  throw new Error(
                    'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.'
                  );
              }),
              (t.validateLimit_ = function (t) {
                if (
                  t.hasStart() &&
                  t.hasEnd() &&
                  t.hasLimit() &&
                  !t.hasAnchoredLimit()
                )
                  throw new Error(
                    "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
                  );
              }),
              (t.prototype.validateNoPreviousOrderByCall_ = function (t) {
                if (!0 === this.orderByCalled_)
                  throw new Error(
                    t + ": You can't combine multiple orderBy calls."
                  );
              }),
              (t.prototype.getQueryParams = function () {
                return this.queryParams_;
              }),
              (t.prototype.getRef = function () {
                return (
                  c.validateArgCount('Query.ref', 0, 0, arguments.length),
                  new t.__referenceConstructor(this.repo, this.path)
                );
              }),
              (t.prototype.on = function (e, n, r, i) {
                c.validateArgCount('Query.on', 2, 4, arguments.length),
                  pt('Query.on', 1, e, !1),
                  c.validateCallback('Query.on', 2, n, !1);
                var o = t.getCancelAndContextArgs_('Query.on', r, i);
                if ('value' === e) this.onValueEvent(n, o.cancel, o.context);
                else {
                  var a = {};
                  (a[e] = n), this.onChildEvent(a, o.cancel, o.context);
                }
                return n;
              }),
              (t.prototype.onValueEvent = function (t, e, n) {
                var r = new re(t, e || null, n || null);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.onChildEvent = function (t, e, n) {
                var r = new ie(t, e, n);
                this.repo.addEventCallbackForQuery(this, r);
              }),
              (t.prototype.off = function (t, e, n) {
                c.validateArgCount('Query.off', 0, 3, arguments.length),
                  pt('Query.off', 1, t, !0),
                  c.validateCallback('Query.off', 2, e, !0),
                  c.validateContextObject('Query.off', 3, n, !0);
                var r = null,
                  i = null;
                if ('value' === t) {
                  var o = e || null;
                  r = new re(o, null, n || null);
                } else
                  t &&
                    (e && ((i = {})[t] = e), (r = new ie(i, null, n || null)));
                this.repo.removeEventCallbackForQuery(this, r);
              }),
              (t.prototype.once = function (e, n, r, i) {
                var o = this;
                c.validateArgCount('Query.once', 1, 4, arguments.length),
                  pt('Query.once', 1, e, !1),
                  c.validateCallback('Query.once', 2, n, !0);
                var a = t.getCancelAndContextArgs_('Query.once', r, i),
                  s = !0,
                  u = new c.Deferred();
                u.promise.catch(function () {});
                var h = function t(r) {
                  s &&
                    ((s = !1),
                    o.off(e, t),
                    n && n.bind(a.context)(r),
                    u.resolve(r));
                };
                return (
                  this.on(e, h, function (t) {
                    o.off(e, h),
                      a.cancel && a.cancel.bind(a.context)(t),
                      u.reject(t);
                  }),
                  u.promise
                );
              }),
              (t.prototype.limitToFirst = function (e) {
                if (
                  (c.validateArgCount(
                    'Query.limitToFirst',
                    1,
                    1,
                    arguments.length
                  ),
                  'number' !== typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw new Error(
                    'Query.limitToFirst: First argument must be a positive integer.'
                  );
                if (this.queryParams_.hasLimit())
                  throw new Error(
                    'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.queryParams_.limitToFirst(e),
                  this.orderByCalled_
                );
              }),
              (t.prototype.limitToLast = function (e) {
                if (
                  (c.validateArgCount(
                    'Query.limitToLast',
                    1,
                    1,
                    arguments.length
                  ),
                  'number' !== typeof e || Math.floor(e) !== e || e <= 0)
                )
                  throw new Error(
                    'Query.limitToLast: First argument must be a positive integer.'
                  );
                if (this.queryParams_.hasLimit())
                  throw new Error(
                    'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                  );
                return new t(
                  this.repo,
                  this.path,
                  this.queryParams_.limitToLast(e),
                  this.orderByCalled_
                );
              }),
              (t.prototype.orderByChild = function (e) {
                if (
                  (c.validateArgCount(
                    'Query.orderByChild',
                    1,
                    1,
                    arguments.length
                  ),
                  '$key' === e)
                )
                  throw new Error(
                    'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
                  );
                if ('$priority' === e)
                  throw new Error(
                    'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
                  );
                if ('$value' === e)
                  throw new Error(
                    'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
                  );
                vt('Query.orderByChild', 1, e, !1),
                  this.validateNoPreviousOrderByCall_('Query.orderByChild');
                var n = new B(e);
                if (n.isEmpty())
                  throw new Error(
                    'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.'
                  );
                var r = new Zt(n),
                  i = this.queryParams_.orderBy(r);
                return (
                  t.validateQueryEndpoints_(i),
                  new t(this.repo, this.path, i, !0)
                );
              }),
              (t.prototype.orderByKey = function () {
                c.validateArgCount('Query.orderByKey', 0, 0, arguments.length),
                  this.validateNoPreviousOrderByCall_('Query.orderByKey');
                var e = this.queryParams_.orderBy(Tt);
                return (
                  t.validateQueryEndpoints_(e),
                  new t(this.repo, this.path, e, !0)
                );
              }),
              (t.prototype.orderByPriority = function () {
                c.validateArgCount(
                  'Query.orderByPriority',
                  0,
                  0,
                  arguments.length
                ),
                  this.validateNoPreviousOrderByCall_('Query.orderByPriority');
                var e = this.queryParams_.orderBy(Lt);
                return (
                  t.validateQueryEndpoints_(e),
                  new t(this.repo, this.path, e, !0)
                );
              }),
              (t.prototype.orderByValue = function () {
                c.validateArgCount(
                  'Query.orderByValue',
                  0,
                  0,
                  arguments.length
                ),
                  this.validateNoPreviousOrderByCall_('Query.orderByValue');
                var e = this.queryParams_.orderBy(Jt);
                return (
                  t.validateQueryEndpoints_(e),
                  new t(this.repo, this.path, e, !0)
                );
              }),
              (t.prototype.startAt = function (e, n) {
                void 0 === e && (e = null),
                  c.validateArgCount('Query.startAt', 0, 2, arguments.length),
                  ct('Query.startAt', 1, e, this.path, !0),
                  dt('Query.startAt', 2, n, !0);
                var r = this.queryParams_.startAt(e, n);
                if (
                  (t.validateLimit_(r),
                  t.validateQueryEndpoints_(r),
                  this.queryParams_.hasStart())
                )
                  throw new Error(
                    'Query.startAt: Starting point was already set (by another call to startAt or equalTo).'
                  );
                return (
                  void 0 === e && ((e = null), (n = null)),
                  new t(this.repo, this.path, r, this.orderByCalled_)
                );
              }),
              (t.prototype.endAt = function (e, n) {
                void 0 === e && (e = null),
                  c.validateArgCount('Query.endAt', 0, 2, arguments.length),
                  ct('Query.endAt', 1, e, this.path, !0),
                  dt('Query.endAt', 2, n, !0);
                var r = this.queryParams_.endAt(e, n);
                if (
                  (t.validateLimit_(r),
                  t.validateQueryEndpoints_(r),
                  this.queryParams_.hasEnd())
                )
                  throw new Error(
                    'Query.endAt: Ending point was already set (by another call to endAt or equalTo).'
                  );
                return new t(this.repo, this.path, r, this.orderByCalled_);
              }),
              (t.prototype.equalTo = function (t, e) {
                if (
                  (c.validateArgCount('Query.equalTo', 1, 2, arguments.length),
                  ct('Query.equalTo', 1, t, this.path, !1),
                  dt('Query.equalTo', 2, e, !0),
                  this.queryParams_.hasStart())
                )
                  throw new Error(
                    'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).'
                  );
                if (this.queryParams_.hasEnd())
                  throw new Error(
                    'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).'
                  );
                return this.startAt(t, e).endAt(t, e);
              }),
              (t.prototype.toString = function () {
                return (
                  c.validateArgCount('Query.toString', 0, 0, arguments.length),
                  this.repo.toString() + this.path.toUrlEncodedString()
                );
              }),
              (t.prototype.toJSON = function () {
                return (
                  c.validateArgCount('Query.toJSON', 0, 1, arguments.length),
                  this.toString()
                );
              }),
              (t.prototype.queryObject = function () {
                return this.queryParams_.getQueryObject();
              }),
              (t.prototype.queryIdentifier = function () {
                var t = this.queryObject(),
                  e = L(t);
                return '{}' === e ? 'default' : e;
              }),
              (t.prototype.isEqual = function (e) {
                if (
                  (c.validateArgCount('Query.isEqual', 1, 1, arguments.length),
                  !(e instanceof t))
                ) {
                  var n =
                    'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
                  throw new Error(n);
                }
                var r = this.repo === e.repo,
                  i = this.path.equals(e.path),
                  o = this.queryIdentifier() === e.queryIdentifier();
                return r && i && o;
              }),
              (t.getCancelAndContextArgs_ = function (t, e, n) {
                var r = {
                  cancel: null,
                  context: null,
                };
                if (e && n)
                  (r.cancel = e),
                    c.validateCallback(t, 3, r.cancel, !0),
                    (r.context = n),
                    c.validateContextObject(t, 4, r.context, !0);
                else if (e)
                  if ('object' === i(e) && null !== e) r.context = e;
                  else {
                    if ('function' !== typeof e)
                      throw new Error(
                        c.errorPrefix(t, 3, !0) +
                          ' must either be a cancel callback or a context object.'
                      );
                    r.cancel = e;
                  }
                return r;
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function () {
                  return this.getRef();
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          ae = (function () {
            function t() {
              (this.value = null), (this.children = new Map());
            }
            return (
              (t.prototype.find = function (t) {
                if (null != this.value) return this.value.getChild(t);
                if (!t.isEmpty() && this.children.size > 0) {
                  var e = t.getFront();
                  return (
                    (t = t.popFront()),
                    this.children.has(e) ? this.children.get(e).find(t) : null
                  );
                }
                return null;
              }),
              (t.prototype.remember = function (e, n) {
                if (e.isEmpty()) (this.value = n), this.children.clear();
                else if (null !== this.value)
                  this.value = this.value.updateChild(e, n);
                else {
                  var r = e.getFront();
                  this.children.has(r) || this.children.set(r, new t());
                  var i = this.children.get(r);
                  (e = e.popFront()), i.remember(e, n);
                }
              }),
              (t.prototype.forget = function (t) {
                if (t.isEmpty())
                  return (this.value = null), this.children.clear(), !0;
                if (null !== this.value) {
                  if (this.value.isLeafNode()) return !1;
                  var e = this.value;
                  this.value = null;
                  var n = this;
                  return (
                    e.forEachChild(Lt, function (t, e) {
                      n.remember(new B(t), e);
                    }),
                    this.forget(t)
                  );
                }
                if (this.children.size > 0) {
                  var r = t.getFront();
                  if (((t = t.popFront()), this.children.has(r)))
                    this.children.get(r).forget(t) && this.children.delete(r);
                  return 0 === this.children.size;
                }
                return !0;
              }),
              (t.prototype.forEachTree = function (t, e) {
                null !== this.value
                  ? e(t, this.value)
                  : this.forEachChild(function (n, r) {
                      var i = new B(t.toString() + '/' + n);
                      r.forEachTree(i, e);
                    });
              }),
              (t.prototype.forEachChild = function (t) {
                this.children.forEach(function (e, n) {
                  t(n, e);
                });
              }),
              t
            );
          })(),
          se = function (t, e) {
            return t && 'object' === i(t)
              ? (c.assert(
                  '.sv' in t,
                  'Unexpected leaf node or priority contents'
                ),
                e[t['.sv']])
              : t;
          },
          ue = function t(e, n) {
            var r,
              i = e.getPriority().val(),
              o = se(i, n);
            if (e.isLeafNode()) {
              var a = e,
                s = se(a.getValue(), n);
              return s !== a.getValue() || o !== a.getPriority().val()
                ? new xt(s, Yt(o))
                : e;
            }
            var u = e;
            return (
              (r = u),
              o !== u.getPriority().val() && (r = r.updatePriority(new xt(o))),
              u.forEachChild(Lt, function (e, i) {
                var o = t(i, n);
                o !== i && (r = r.updateImmediateChild(e, o));
              }),
              r
            );
          };
        !(function (t) {
          (t[(t.OVERWRITE = 0)] = 'OVERWRITE'),
            (t[(t.MERGE = 1)] = 'MERGE'),
            (t[(t.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
            (t[(t.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE');
        })($t || ($t = {}));
        var ce,
          he,
          le = (function () {
            function t(t, e, n, r) {
              (this.fromUser = t),
                (this.fromServer = e),
                (this.queryId = n),
                (this.tagged = r),
                c.assert(!r || e, 'Tagged queries must be from server.');
            }
            return (
              (t.User = new t(!0, !1, null, !1)),
              (t.Server = new t(!1, !0, null, !1)),
              (t.forServerTaggedQuery = function (e) {
                return new t(!1, !0, e, !0);
              }),
              t
            );
          })(),
          fe = (function () {
            function t(t, e, n) {
              (this.path = t),
                (this.affectedTree = e),
                (this.revert = n),
                (this.type = $t.ACK_USER_WRITE),
                (this.source = le.User);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                  if (null != this.affectedTree.value)
                    return (
                      c.assert(
                        this.affectedTree.children.isEmpty(),
                        'affectedTree should not have overlapping affected paths.'
                      ),
                      this
                    );
                  var n = this.affectedTree.subtree(new B(e));
                  return new t(B.Empty, n, this.revert);
                }
                return (
                  c.assert(
                    this.path.getFront() === e,
                    'operationForChild called for unrelated child.'
                  ),
                  new t(this.path.popFront(), this.affectedTree, this.revert)
                );
              }),
              t
            );
          })(),
          pe = (function () {
            function t(t, e) {
              void 0 === e && (ce || (ce = new Ut(R)), (e = ce)),
                (this.value = t),
                (this.children = e);
            }
            return (
              (t.fromObject = function (e) {
                var n = t.Empty;
                return (
                  F(e, function (t, e) {
                    n = n.set(new B(t), e);
                  }),
                  n
                );
              }),
              (t.prototype.isEmpty = function () {
                return null === this.value && this.children.isEmpty();
              }),
              (t.prototype.findRootMostMatchingPathAndValue = function (t, e) {
                if (null != this.value && e(this.value))
                  return {
                    path: B.Empty,
                    value: this.value,
                  };
                if (t.isEmpty()) return null;
                var n = t.getFront(),
                  r = this.children.get(n);
                if (null !== r) {
                  var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                  return null != i
                    ? {
                        path: new B(n).child(i.path),
                        value: i.value,
                      }
                    : null;
                }
                return null;
              }),
              (t.prototype.findRootMostValueAndPath = function (t) {
                return this.findRootMostMatchingPathAndValue(t, function () {
                  return !0;
                });
              }),
              (t.prototype.subtree = function (e) {
                if (e.isEmpty()) return this;
                var n = e.getFront(),
                  r = this.children.get(n);
                return null !== r ? r.subtree(e.popFront()) : t.Empty;
              }),
              (t.prototype.set = function (e, n) {
                if (e.isEmpty()) return new t(n, this.children);
                var r = e.getFront(),
                  i = (this.children.get(r) || t.Empty).set(e.popFront(), n),
                  o = this.children.insert(r, i);
                return new t(this.value, o);
              }),
              (t.prototype.remove = function (e) {
                if (e.isEmpty())
                  return this.children.isEmpty()
                    ? t.Empty
                    : new t(null, this.children);
                var n = e.getFront(),
                  r = this.children.get(n);
                if (r) {
                  var i = r.remove(e.popFront()),
                    o = void 0;
                  return (
                    (o = i.isEmpty()
                      ? this.children.remove(n)
                      : this.children.insert(n, i)),
                    null === this.value && o.isEmpty()
                      ? t.Empty
                      : new t(this.value, o)
                  );
                }
                return this;
              }),
              (t.prototype.get = function (t) {
                if (t.isEmpty()) return this.value;
                var e = t.getFront(),
                  n = this.children.get(e);
                return n ? n.get(t.popFront()) : null;
              }),
              (t.prototype.setTree = function (e, n) {
                if (e.isEmpty()) return n;
                var r = e.getFront(),
                  i = (this.children.get(r) || t.Empty).setTree(
                    e.popFront(),
                    n
                  ),
                  o = void 0;
                return (
                  (o = i.isEmpty()
                    ? this.children.remove(r)
                    : this.children.insert(r, i)),
                  new t(this.value, o)
                );
              }),
              (t.prototype.fold = function (t) {
                return this.fold_(B.Empty, t);
              }),
              (t.prototype.fold_ = function (t, e) {
                var n = {};
                return (
                  this.children.inorderTraversal(function (r, i) {
                    n[r] = i.fold_(t.child(r), e);
                  }),
                  e(t, this.value, n)
                );
              }),
              (t.prototype.findOnPath = function (t, e) {
                return this.findOnPath_(t, B.Empty, e);
              }),
              (t.prototype.findOnPath_ = function (t, e, n) {
                var r = !!this.value && n(e, this.value);
                if (r) return r;
                if (t.isEmpty()) return null;
                var i = t.getFront(),
                  o = this.children.get(i);
                return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null;
              }),
              (t.prototype.foreachOnPath = function (t, e) {
                return this.foreachOnPath_(t, B.Empty, e);
              }),
              (t.prototype.foreachOnPath_ = function (e, n, r) {
                if (e.isEmpty()) return this;
                this.value && r(n, this.value);
                var i = e.getFront(),
                  o = this.children.get(i);
                return o
                  ? o.foreachOnPath_(e.popFront(), n.child(i), r)
                  : t.Empty;
              }),
              (t.prototype.foreach = function (t) {
                this.foreach_(B.Empty, t);
              }),
              (t.prototype.foreach_ = function (t, e) {
                this.children.inorderTraversal(function (n, r) {
                  r.foreach_(t.child(n), e);
                }),
                  this.value && e(t, this.value);
              }),
              (t.prototype.foreachChild = function (t) {
                this.children.inorderTraversal(function (e, n) {
                  n.value && t(e, n.value);
                });
              }),
              (t.Empty = new t(null)),
              t
            );
          })(),
          de = (function () {
            function t(t, e) {
              (this.source = t),
                (this.path = e),
                (this.type = $t.LISTEN_COMPLETE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                return this.path.isEmpty()
                  ? new t(this.source, B.Empty)
                  : new t(this.source, this.path.popFront());
              }),
              t
            );
          })(),
          ve = (function () {
            function t(t, e, n) {
              (this.source = t),
                (this.path = e),
                (this.snap = n),
                (this.type = $t.OVERWRITE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                return this.path.isEmpty()
                  ? new t(this.source, B.Empty, this.snap.getImmediateChild(e))
                  : new t(this.source, this.path.popFront(), this.snap);
              }),
              t
            );
          })(),
          ye = (function () {
            function t(t, e, n) {
              (this.source = t),
                (this.path = e),
                (this.children = n),
                (this.type = $t.MERGE);
            }
            return (
              (t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                  var n = this.children.subtree(new B(e));
                  return n.isEmpty()
                    ? null
                    : n.value
                    ? new ve(this.source, B.Empty, n.value)
                    : new t(this.source, B.Empty, n);
                }
                return (
                  c.assert(
                    this.path.getFront() === e,
                    "Can't get a merge for a child not on the path of the operation"
                  ),
                  new t(this.source, this.path.popFront(), this.children)
                );
              }),
              (t.prototype.toString = function () {
                return (
                  'Operation(' +
                  this.path +
                  ': ' +
                  this.source.toString() +
                  ' merge: ' +
                  this.children.toString() +
                  ')'
                );
              }),
              t
            );
          })(),
          ge = (function () {
            function t(t, e, n) {
              (this.node_ = t),
                (this.fullyInitialized_ = e),
                (this.filtered_ = n);
            }
            return (
              (t.prototype.isFullyInitialized = function () {
                return this.fullyInitialized_;
              }),
              (t.prototype.isFiltered = function () {
                return this.filtered_;
              }),
              (t.prototype.isCompleteForPath = function (t) {
                if (t.isEmpty())
                  return this.isFullyInitialized() && !this.filtered_;
                var e = t.getFront();
                return this.isCompleteForChild(e);
              }),
              (t.prototype.isCompleteForChild = function (t) {
                return (
                  (this.isFullyInitialized() && !this.filtered_) ||
                  this.node_.hasChild(t)
                );
              }),
              (t.prototype.getNode = function () {
                return this.node_;
              }),
              t
            );
          })(),
          me = (function () {
            function t(t, e) {
              (this.eventCache_ = t), (this.serverCache_ = e);
            }
            return (
              (t.prototype.updateEventSnap = function (e, n, r) {
                return new t(new ge(e, n, r), this.serverCache_);
              }),
              (t.prototype.updateServerSnap = function (e, n, r) {
                return new t(this.eventCache_, new ge(e, n, r));
              }),
              (t.prototype.getEventCache = function () {
                return this.eventCache_;
              }),
              (t.prototype.getCompleteEventSnap = function () {
                return this.eventCache_.isFullyInitialized()
                  ? this.eventCache_.getNode()
                  : null;
              }),
              (t.prototype.getServerCache = function () {
                return this.serverCache_;
              }),
              (t.prototype.getCompleteServerSnap = function () {
                return this.serverCache_.isFullyInitialized()
                  ? this.serverCache_.getNode()
                  : null;
              }),
              (t.Empty = new t(
                new ge(Gt.EMPTY_NODE, !1, !1),
                new ge(Gt.EMPTY_NODE, !1, !1)
              )),
              t
            );
          })(),
          _e = (function () {
            function t(t, e, n, r, i) {
              (this.type = t),
                (this.snapshotNode = e),
                (this.childName = n),
                (this.oldSnap = r),
                (this.prevName = i);
            }
            return (
              (t.valueChange = function (e) {
                return new t(t.VALUE, e);
              }),
              (t.childAddedChange = function (e, n) {
                return new t(t.CHILD_ADDED, n, e);
              }),
              (t.childRemovedChange = function (e, n) {
                return new t(t.CHILD_REMOVED, n, e);
              }),
              (t.childChangedChange = function (e, n, r) {
                return new t(t.CHILD_CHANGED, n, e, r);
              }),
              (t.childMovedChange = function (e, n) {
                return new t(t.CHILD_MOVED, n, e);
              }),
              (t.CHILD_ADDED = 'child_added'),
              (t.CHILD_REMOVED = 'child_removed'),
              (t.CHILD_CHANGED = 'child_changed'),
              (t.CHILD_MOVED = 'child_moved'),
              (t.VALUE = 'value'),
              t
            );
          })(),
          be = (function () {
            function t(t) {
              this.index_ = t;
            }
            return (
              (t.prototype.updateChild = function (t, e, n, r, i, o) {
                c.assert(
                  t.isIndexed(this.index_),
                  'A node must be indexed if only a child is updated'
                );
                var a = t.getImmediateChild(e);
                return a.getChild(r).equals(n.getChild(r)) &&
                  a.isEmpty() === n.isEmpty()
                  ? t
                  : (null != o &&
                      (n.isEmpty()
                        ? t.hasChild(e)
                          ? o.trackChildChange(_e.childRemovedChange(e, a))
                          : c.assert(
                              t.isLeafNode(),
                              'A child remove without an old child only makes sense on a leaf node'
                            )
                        : a.isEmpty()
                        ? o.trackChildChange(_e.childAddedChange(e, n))
                        : o.trackChildChange(_e.childChangedChange(e, n, a))),
                    t.isLeafNode() && n.isEmpty()
                      ? t
                      : t.updateImmediateChild(e, n).withIndex(this.index_));
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                return (
                  null != n &&
                    (t.isLeafNode() ||
                      t.forEachChild(Lt, function (t, r) {
                        e.hasChild(t) ||
                          n.trackChildChange(_e.childRemovedChange(t, r));
                      }),
                    e.isLeafNode() ||
                      e.forEachChild(Lt, function (e, r) {
                        if (t.hasChild(e)) {
                          var i = t.getImmediateChild(e);
                          i.equals(r) ||
                            n.trackChildChange(_e.childChangedChange(e, r, i));
                        } else n.trackChildChange(_e.childAddedChange(e, r));
                      })),
                  e.withIndex(this.index_)
                );
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t.isEmpty() ? Gt.EMPTY_NODE : t.updatePriority(e);
              }),
              (t.prototype.filtersNodes = function () {
                return !1;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              t
            );
          })(),
          we = (function () {
            function t() {
              this.changeMap = new Map();
            }
            return (
              (t.prototype.trackChildChange = function (t) {
                var e = t.type,
                  n = t.childName;
                c.assert(
                  e === _e.CHILD_ADDED ||
                    e === _e.CHILD_CHANGED ||
                    e === _e.CHILD_REMOVED,
                  'Only child changes supported for tracking'
                ),
                  c.assert(
                    '.priority' !== n,
                    'Only non-priority child changes can be tracked.'
                  );
                var r = this.changeMap.get(n);
                if (r) {
                  var i = r.type;
                  if (e === _e.CHILD_ADDED && i === _e.CHILD_REMOVED)
                    this.changeMap.set(
                      n,
                      _e.childChangedChange(n, t.snapshotNode, r.snapshotNode)
                    );
                  else if (e === _e.CHILD_REMOVED && i === _e.CHILD_ADDED)
                    this.changeMap.delete(n);
                  else if (e === _e.CHILD_REMOVED && i === _e.CHILD_CHANGED)
                    this.changeMap.set(n, _e.childRemovedChange(n, r.oldSnap));
                  else if (e === _e.CHILD_CHANGED && i === _e.CHILD_ADDED)
                    this.changeMap.set(
                      n,
                      _e.childAddedChange(n, t.snapshotNode)
                    );
                  else {
                    if (e !== _e.CHILD_CHANGED || i !== _e.CHILD_CHANGED)
                      throw c.assertionError(
                        'Illegal combination of changes: ' +
                          t +
                          ' occurred after ' +
                          r
                      );
                    this.changeMap.set(
                      n,
                      _e.childChangedChange(n, t.snapshotNode, r.oldSnap)
                    );
                  }
                } else this.changeMap.set(n, t);
              }),
              (t.prototype.getChanges = function () {
                return Array.from(this.changeMap.values());
              }),
              t
            );
          })(),
          Ee = new ((function () {
            function t() {}
            return (
              (t.prototype.getCompleteChild = function (t) {
                return null;
              }),
              (t.prototype.getChildAfterChild = function (t, e, n) {
                return null;
              }),
              t
            );
          })())(),
          Ce = (function () {
            function t(t, e, n) {
              void 0 === n && (n = null),
                (this.writes_ = t),
                (this.viewCache_ = e),
                (this.optCompleteServerCache_ = n);
            }
            return (
              (t.prototype.getCompleteChild = function (t) {
                var e = this.viewCache_.getEventCache();
                if (e.isCompleteForChild(t))
                  return e.getNode().getImmediateChild(t);
                var n =
                  null != this.optCompleteServerCache_
                    ? new ge(this.optCompleteServerCache_, !0, !1)
                    : this.viewCache_.getServerCache();
                return this.writes_.calcCompleteChild(t, n);
              }),
              (t.prototype.getChildAfterChild = function (t, e, n) {
                var r =
                    null != this.optCompleteServerCache_
                      ? this.optCompleteServerCache_
                      : this.viewCache_.getCompleteServerSnap(),
                  i = this.writes_.calcIndexedSlice(r, e, 1, n, t);
                return 0 === i.length ? null : i[0];
              }),
              t
            );
          })(),
          Se = function (t, e) {
            (this.viewCache = t), (this.changes = e);
          },
          Ie = (function () {
            function t(t) {
              this.filter_ = t;
            }
            return (
              (t.prototype.assertIndexed = function (t) {
                c.assert(
                  t
                    .getEventCache()
                    .getNode()
                    .isIndexed(this.filter_.getIndex()),
                  'Event snap not indexed'
                ),
                  c.assert(
                    t
                      .getServerCache()
                      .getNode()
                      .isIndexed(this.filter_.getIndex()),
                    'Server snap not indexed'
                  );
              }),
              (t.prototype.applyOperation = function (e, n, r, i) {
                var o,
                  a,
                  s = new we();
                if (n.type === $t.OVERWRITE) {
                  var u = n;
                  u.source.fromUser
                    ? (o = this.applyUserOverwrite_(e, u.path, u.snap, r, i, s))
                    : (c.assert(u.source.fromServer, 'Unknown source.'),
                      (a =
                        u.source.tagged ||
                        (e.getServerCache().isFiltered() && !u.path.isEmpty())),
                      (o = this.applyServerOverwrite_(
                        e,
                        u.path,
                        u.snap,
                        r,
                        i,
                        a,
                        s
                      )));
                } else if (n.type === $t.MERGE) {
                  var h = n;
                  h.source.fromUser
                    ? (o = this.applyUserMerge_(e, h.path, h.children, r, i, s))
                    : (c.assert(h.source.fromServer, 'Unknown source.'),
                      (a = h.source.tagged || e.getServerCache().isFiltered()),
                      (o = this.applyServerMerge_(
                        e,
                        h.path,
                        h.children,
                        r,
                        i,
                        a,
                        s
                      )));
                } else if (n.type === $t.ACK_USER_WRITE) {
                  var l = n;
                  o = l.revert
                    ? this.revertUserWrite_(e, l.path, r, i, s)
                    : this.ackUserWrite_(e, l.path, l.affectedTree, r, i, s);
                } else {
                  if (n.type !== $t.LISTEN_COMPLETE)
                    throw c.assertionError('Unknown operation type: ' + n.type);
                  o = this.listenComplete_(e, n.path, r, s);
                }
                var f = s.getChanges();
                return t.maybeAddValueEvent_(e, o, f), new Se(o, f);
              }),
              (t.maybeAddValueEvent_ = function (t, e, n) {
                var r = e.getEventCache();
                if (r.isFullyInitialized()) {
                  var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                    o = t.getCompleteEventSnap();
                  (n.length > 0 ||
                    !t.getEventCache().isFullyInitialized() ||
                    (i && !r.getNode().equals(o)) ||
                    !r.getNode().getPriority().equals(o.getPriority())) &&
                    n.push(_e.valueChange(e.getCompleteEventSnap()));
                }
              }),
              (t.prototype.generateEventCacheAfterServerEvent_ = function (
                t,
                e,
                n,
                r,
                i
              ) {
                var o = t.getEventCache();
                if (null != n.shadowingWrite(e)) return t;
                var a = void 0,
                  s = void 0;
                if (e.isEmpty())
                  if (
                    (c.assert(
                      t.getServerCache().isFullyInitialized(),
                      'If change path is empty, we must have complete server data'
                    ),
                    t.getServerCache().isFiltered())
                  ) {
                    var u = t.getCompleteServerSnap(),
                      h = u instanceof Gt ? u : Gt.EMPTY_NODE,
                      l = n.calcCompleteEventChildren(h);
                    a = this.filter_.updateFullNode(
                      t.getEventCache().getNode(),
                      l,
                      i
                    );
                  } else {
                    var f = n.calcCompleteEventCache(t.getCompleteServerSnap());
                    a = this.filter_.updateFullNode(
                      t.getEventCache().getNode(),
                      f,
                      i
                    );
                  }
                else {
                  var p = e.getFront();
                  if ('.priority' === p) {
                    c.assert(
                      1 === e.getLength(),
                      "Can't have a priority with additional path components"
                    );
                    var d = o.getNode();
                    s = t.getServerCache().getNode();
                    var v = n.calcEventCacheAfterServerOverwrite(e, d, s);
                    a =
                      null != v
                        ? this.filter_.updatePriority(d, v)
                        : o.getNode();
                  } else {
                    var y = e.popFront(),
                      g = void 0;
                    if (o.isCompleteForChild(p)) {
                      s = t.getServerCache().getNode();
                      var m = n.calcEventCacheAfterServerOverwrite(
                        e,
                        o.getNode(),
                        s
                      );
                      g =
                        null != m
                          ? o.getNode().getImmediateChild(p).updateChild(y, m)
                          : o.getNode().getImmediateChild(p);
                    } else g = n.calcCompleteChild(p, t.getServerCache());
                    a =
                      null != g
                        ? this.filter_.updateChild(o.getNode(), p, g, y, r, i)
                        : o.getNode();
                  }
                }
                return t.updateEventSnap(
                  a,
                  o.isFullyInitialized() || e.isEmpty(),
                  this.filter_.filtersNodes()
                );
              }),
              (t.prototype.applyServerOverwrite_ = function (
                t,
                e,
                n,
                r,
                i,
                o,
                a
              ) {
                var s,
                  u = t.getServerCache(),
                  c = o ? this.filter_ : this.filter_.getIndexedFilter();
                if (e.isEmpty()) s = c.updateFullNode(u.getNode(), n, null);
                else if (c.filtersNodes() && !u.isFiltered()) {
                  var h = u.getNode().updateChild(e, n);
                  s = c.updateFullNode(u.getNode(), h, null);
                } else {
                  var l = e.getFront();
                  if (!u.isCompleteForPath(e) && e.getLength() > 1) return t;
                  var f = e.popFront(),
                    p = u.getNode().getImmediateChild(l).updateChild(f, n);
                  s =
                    '.priority' === l
                      ? c.updatePriority(u.getNode(), p)
                      : c.updateChild(u.getNode(), l, p, f, Ee, null);
                }
                var d = t.updateServerSnap(
                    s,
                    u.isFullyInitialized() || e.isEmpty(),
                    c.filtersNodes()
                  ),
                  v = new Ce(r, d, i);
                return this.generateEventCacheAfterServerEvent_(d, e, r, v, a);
              }),
              (t.prototype.applyUserOverwrite_ = function (t, e, n, r, i, o) {
                var a,
                  s,
                  u = t.getEventCache(),
                  c = new Ce(r, t, i);
                if (e.isEmpty())
                  (s = this.filter_.updateFullNode(
                    t.getEventCache().getNode(),
                    n,
                    o
                  )),
                    (a = t.updateEventSnap(s, !0, this.filter_.filtersNodes()));
                else {
                  var h = e.getFront();
                  if ('.priority' === h)
                    (s = this.filter_.updatePriority(
                      t.getEventCache().getNode(),
                      n
                    )),
                      (a = t.updateEventSnap(
                        s,
                        u.isFullyInitialized(),
                        u.isFiltered()
                      ));
                  else {
                    var l = e.popFront(),
                      f = u.getNode().getImmediateChild(h),
                      p = void 0;
                    if (l.isEmpty()) p = n;
                    else {
                      var d = c.getCompleteChild(h);
                      p =
                        null != d
                          ? '.priority' === l.getBack() &&
                            d.getChild(l.parent()).isEmpty()
                            ? d
                            : d.updateChild(l, n)
                          : Gt.EMPTY_NODE;
                    }
                    if (f.equals(p)) a = t;
                    else {
                      var v = this.filter_.updateChild(
                        u.getNode(),
                        h,
                        p,
                        l,
                        c,
                        o
                      );
                      a = t.updateEventSnap(
                        v,
                        u.isFullyInitialized(),
                        this.filter_.filtersNodes()
                      );
                    }
                  }
                }
                return a;
              }),
              (t.cacheHasChild_ = function (t, e) {
                return t.getEventCache().isCompleteForChild(e);
              }),
              (t.prototype.applyUserMerge_ = function (e, n, r, i, o, a) {
                var s = this,
                  u = e;
                return (
                  r.foreach(function (r, c) {
                    var h = n.child(r);
                    t.cacheHasChild_(e, h.getFront()) &&
                      (u = s.applyUserOverwrite_(u, h, c, i, o, a));
                  }),
                  r.foreach(function (r, c) {
                    var h = n.child(r);
                    t.cacheHasChild_(e, h.getFront()) ||
                      (u = s.applyUserOverwrite_(u, h, c, i, o, a));
                  }),
                  u
                );
              }),
              (t.prototype.applyMerge_ = function (t, e) {
                return (
                  e.foreach(function (e, n) {
                    t = t.updateChild(e, n);
                  }),
                  t
                );
              }),
              (t.prototype.applyServerMerge_ = function (t, e, n, r, i, o, a) {
                var s = this;
                if (
                  t.getServerCache().getNode().isEmpty() &&
                  !t.getServerCache().isFullyInitialized()
                )
                  return t;
                var u,
                  c = t;
                u = e.isEmpty() ? n : pe.Empty.setTree(e, n);
                var h = t.getServerCache().getNode();
                return (
                  u.children.inorderTraversal(function (e, n) {
                    if (h.hasChild(e)) {
                      var u = t.getServerCache().getNode().getImmediateChild(e),
                        l = s.applyMerge_(u, n);
                      c = s.applyServerOverwrite_(c, new B(e), l, r, i, o, a);
                    }
                  }),
                  u.children.inorderTraversal(function (e, n) {
                    var u =
                      !t.getServerCache().isCompleteForChild(e) &&
                      null == n.value;
                    if (!h.hasChild(e) && !u) {
                      var l = t.getServerCache().getNode().getImmediateChild(e),
                        f = s.applyMerge_(l, n);
                      c = s.applyServerOverwrite_(c, new B(e), f, r, i, o, a);
                    }
                  }),
                  c
                );
              }),
              (t.prototype.ackUserWrite_ = function (t, e, n, r, i, o) {
                if (null != r.shadowingWrite(e)) return t;
                var a = t.getServerCache().isFiltered(),
                  s = t.getServerCache();
                if (null != n.value) {
                  if (
                    (e.isEmpty() && s.isFullyInitialized()) ||
                    s.isCompleteForPath(e)
                  )
                    return this.applyServerOverwrite_(
                      t,
                      e,
                      s.getNode().getChild(e),
                      r,
                      i,
                      a,
                      o
                    );
                  if (e.isEmpty()) {
                    var u = pe.Empty;
                    return (
                      s.getNode().forEachChild(Tt, function (t, e) {
                        u = u.set(new B(t), e);
                      }),
                      this.applyServerMerge_(t, e, u, r, i, a, o)
                    );
                  }
                  return t;
                }
                var c = pe.Empty;
                return (
                  n.foreach(function (t, n) {
                    var r = e.child(t);
                    s.isCompleteForPath(r) &&
                      (c = c.set(t, s.getNode().getChild(r)));
                  }),
                  this.applyServerMerge_(t, e, c, r, i, a, o)
                );
              }),
              (t.prototype.listenComplete_ = function (t, e, n, r) {
                var i = t.getServerCache(),
                  o = t.updateServerSnap(
                    i.getNode(),
                    i.isFullyInitialized() || e.isEmpty(),
                    i.isFiltered()
                  );
                return this.generateEventCacheAfterServerEvent_(o, e, n, Ee, r);
              }),
              (t.prototype.revertUserWrite_ = function (t, e, n, r, i) {
                var o;
                if (null != n.shadowingWrite(e)) return t;
                var a = new Ce(n, t, r),
                  s = t.getEventCache().getNode(),
                  u = void 0;
                if (e.isEmpty() || '.priority' === e.getFront()) {
                  var h = void 0;
                  if (t.getServerCache().isFullyInitialized())
                    h = n.calcCompleteEventCache(t.getCompleteServerSnap());
                  else {
                    var l = t.getServerCache().getNode();
                    c.assert(
                      l instanceof Gt,
                      'serverChildren would be complete if leaf node'
                    ),
                      (h = n.calcCompleteEventChildren(l));
                  }
                  (h = h), (u = this.filter_.updateFullNode(s, h, i));
                } else {
                  var f = e.getFront(),
                    p = n.calcCompleteChild(f, t.getServerCache());
                  null == p &&
                    t.getServerCache().isCompleteForChild(f) &&
                    (p = s.getImmediateChild(f)),
                    (u =
                      null != p
                        ? this.filter_.updateChild(s, f, p, e.popFront(), a, i)
                        : t.getEventCache().getNode().hasChild(f)
                        ? this.filter_.updateChild(
                            s,
                            f,
                            Gt.EMPTY_NODE,
                            e.popFront(),
                            a,
                            i
                          )
                        : s).isEmpty() &&
                      t.getServerCache().isFullyInitialized() &&
                      (o = n.calcCompleteEventCache(
                        t.getCompleteServerSnap()
                      )).isLeafNode() &&
                      (u = this.filter_.updateFullNode(u, o, i));
                }
                return (
                  (o =
                    t.getServerCache().isFullyInitialized() ||
                    null != n.shadowingWrite(B.Empty)),
                  t.updateEventSnap(u, o, this.filter_.filtersNodes())
                );
              }),
              t
            );
          })(),
          Te = (function () {
            function t(t) {
              (this.query_ = t),
                (this.index_ = this.query_.getQueryParams().getIndex());
            }
            return (
              (t.prototype.generateEventsForChanges = function (t, e, n) {
                var r = this,
                  i = [],
                  o = [];
                return (
                  t.forEach(function (t) {
                    t.type === _e.CHILD_CHANGED &&
                      r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                      o.push(_e.childMovedChange(t.childName, t.snapshotNode));
                  }),
                  this.generateEventsForType_(i, _e.CHILD_REMOVED, t, n, e),
                  this.generateEventsForType_(i, _e.CHILD_ADDED, t, n, e),
                  this.generateEventsForType_(i, _e.CHILD_MOVED, o, n, e),
                  this.generateEventsForType_(i, _e.CHILD_CHANGED, t, n, e),
                  this.generateEventsForType_(i, _e.VALUE, t, n, e),
                  i
                );
              }),
              (t.prototype.generateEventsForType_ = function (t, e, n, r, i) {
                var o = this,
                  a = n.filter(function (t) {
                    return t.type === e;
                  });
                a.sort(this.compareChanges_.bind(this)),
                  a.forEach(function (e) {
                    var n = o.materializeSingleChange_(e, i);
                    r.forEach(function (r) {
                      r.respondsTo(e.type) &&
                        t.push(r.createEvent(n, o.query_));
                    });
                  });
              }),
              (t.prototype.materializeSingleChange_ = function (t, e) {
                return (
                  'value' === t.type ||
                    'child_removed' === t.type ||
                    (t.prevName = e.getPredecessorChildName(
                      t.childName,
                      t.snapshotNode,
                      this.index_
                    )),
                  t
                );
              }),
              (t.prototype.compareChanges_ = function (t, e) {
                if (null == t.childName || null == e.childName)
                  throw c.assertionError('Should only compare child_ events.');
                var n = new Ct(t.childName, t.snapshotNode),
                  r = new Ct(e.childName, e.snapshotNode);
                return this.index_.compare(n, r);
              }),
              t
            );
          })(),
          Ne = (function () {
            function t(t, e) {
              (this.query_ = t), (this.eventRegistrations_ = []);
              var n = this.query_.getQueryParams(),
                r = new be(n.getIndex()),
                i = n.getNodeFilter();
              this.processor_ = new Ie(i);
              var o = e.getServerCache(),
                a = e.getEventCache(),
                s = r.updateFullNode(Gt.EMPTY_NODE, o.getNode(), null),
                u = i.updateFullNode(Gt.EMPTY_NODE, a.getNode(), null),
                c = new ge(s, o.isFullyInitialized(), r.filtersNodes()),
                h = new ge(u, a.isFullyInitialized(), i.filtersNodes());
              (this.viewCache_ = new me(h, c)),
                (this.eventGenerator_ = new Te(this.query_));
            }
            return (
              (t.prototype.getQuery = function () {
                return this.query_;
              }),
              (t.prototype.getServerCache = function () {
                return this.viewCache_.getServerCache().getNode();
              }),
              (t.prototype.getCompleteServerCache = function (t) {
                var e = this.viewCache_.getCompleteServerSnap();
                return e &&
                  (this.query_.getQueryParams().loadsAllData() ||
                    (!t.isEmpty() &&
                      !e.getImmediateChild(t.getFront()).isEmpty()))
                  ? e.getChild(t)
                  : null;
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.eventRegistrations_.length;
              }),
              (t.prototype.addEventRegistration = function (t) {
                this.eventRegistrations_.push(t);
              }),
              (t.prototype.removeEventRegistration = function (t, e) {
                var n = [];
                if (e) {
                  c.assert(
                    null == t,
                    'A cancel should cancel all event registrations.'
                  );
                  var r = this.query_.path;
                  this.eventRegistrations_.forEach(function (t) {
                    e = e;
                    var i = t.createCancelEvent(e, r);
                    i && n.push(i);
                  });
                }
                if (t) {
                  for (
                    var i = [], o = 0;
                    o < this.eventRegistrations_.length;
                    ++o
                  ) {
                    var a = this.eventRegistrations_[o];
                    if (a.matches(t)) {
                      if (t.hasAnyCallback()) {
                        i = i.concat(this.eventRegistrations_.slice(o + 1));
                        break;
                      }
                    } else i.push(a);
                  }
                  this.eventRegistrations_ = i;
                } else this.eventRegistrations_ = [];
                return n;
              }),
              (t.prototype.applyOperation = function (t, e, n) {
                t.type === $t.MERGE &&
                  null !== t.source.queryId &&
                  (c.assert(
                    this.viewCache_.getCompleteServerSnap(),
                    'We should always have a full cache before handling merges'
                  ),
                  c.assert(
                    this.viewCache_.getCompleteEventSnap(),
                    'Missing event cache, even though we have a server cache'
                  ));
                var r = this.viewCache_,
                  i = this.processor_.applyOperation(r, t, e, n);
                return (
                  this.processor_.assertIndexed(i.viewCache),
                  c.assert(
                    i.viewCache.getServerCache().isFullyInitialized() ||
                      !r.getServerCache().isFullyInitialized(),
                    'Once a server snap is complete, it should never go back'
                  ),
                  (this.viewCache_ = i.viewCache),
                  this.generateEventsForChanges_(
                    i.changes,
                    i.viewCache.getEventCache().getNode(),
                    null
                  )
                );
              }),
              (t.prototype.getInitialEvents = function (t) {
                var e = this.viewCache_.getEventCache(),
                  n = [];
                e.getNode().isLeafNode() ||
                  e.getNode().forEachChild(Lt, function (t, e) {
                    n.push(_e.childAddedChange(t, e));
                  });
                return (
                  e.isFullyInitialized() && n.push(_e.valueChange(e.getNode())),
                  this.generateEventsForChanges_(n, e.getNode(), t)
                );
              }),
              (t.prototype.generateEventsForChanges_ = function (t, e, n) {
                var r = n ? [n] : this.eventRegistrations_;
                return this.eventGenerator_.generateEventsForChanges(t, e, r);
              }),
              t
            );
          })(),
          Ae = (function () {
            function t() {
              this.views = new Map();
            }
            return (
              Object.defineProperty(t, '__referenceConstructor', {
                get: function () {
                  return c.assert(he, 'Reference.ts has not been loaded'), he;
                },
                set: function (t) {
                  c.assert(
                    !he,
                    '__referenceConstructor has already been defined'
                  ),
                    (he = t);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isEmpty = function () {
                return 0 === this.views.size;
              }),
              (t.prototype.applyOperation = function (t, e, n) {
                var r,
                  i,
                  o = t.source.queryId;
                if (null !== o) {
                  var a = this.views.get(o);
                  return (
                    c.assert(
                      null != a,
                      'SyncTree gave us an op for an invalid query.'
                    ),
                    a.applyOperation(t, e, n)
                  );
                }
                var s = [];
                try {
                  for (
                    var h = u.__values(this.views.values()), l = h.next();
                    !l.done;
                    l = h.next()
                  ) {
                    a = l.value;
                    s = s.concat(a.applyOperation(t, e, n));
                  }
                } catch (f) {
                  r = {
                    error: f,
                  };
                } finally {
                  try {
                    l && !l.done && (i = h.return) && i.call(h);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return s;
              }),
              (t.prototype.addEventRegistration = function (t, e, n, r, i) {
                var o = t.queryIdentifier(),
                  a = this.views.get(o);
                if (!a) {
                  var s = n.calcCompleteEventCache(i ? r : null),
                    u = !1;
                  s
                    ? (u = !0)
                    : r instanceof Gt
                    ? ((s = n.calcCompleteEventChildren(r)), (u = !1))
                    : ((s = Gt.EMPTY_NODE), (u = !1));
                  var c = new me(new ge(s, u, !1), new ge(r, i, !1));
                  (a = new Ne(t, c)), this.views.set(o, a);
                }
                return a.addEventRegistration(e), a.getInitialEvents(e);
              }),
              (t.prototype.removeEventRegistration = function (e, n, r) {
                var i,
                  o,
                  a = e.queryIdentifier(),
                  s = [],
                  c = [],
                  h = this.hasCompleteView();
                if ('default' === a)
                  try {
                    for (
                      var l = u.__values(this.views.entries()), f = l.next();
                      !f.done;
                      f = l.next()
                    ) {
                      var p = u.__read(f.value, 2),
                        d = p[0],
                        v = p[1];
                      (c = c.concat(v.removeEventRegistration(n, r))),
                        v.isEmpty() &&
                          (this.views.delete(d),
                          v.getQuery().getQueryParams().loadsAllData() ||
                            s.push(v.getQuery()));
                    }
                  } catch (y) {
                    i = {
                      error: y,
                    };
                  } finally {
                    try {
                      f && !f.done && (o = l.return) && o.call(l);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                else
                  (v = this.views.get(a)) &&
                    ((c = c.concat(v.removeEventRegistration(n, r))),
                    v.isEmpty() &&
                      (this.views.delete(a),
                      v.getQuery().getQueryParams().loadsAllData() ||
                        s.push(v.getQuery())));
                return (
                  h &&
                    !this.hasCompleteView() &&
                    s.push(new t.__referenceConstructor(e.repo, e.path)),
                  {
                    removed: s,
                    events: c,
                  }
                );
              }),
              (t.prototype.getQueryViews = function () {
                var t,
                  e,
                  n = [];
                try {
                  for (
                    var r = u.__values(this.views.values()), i = r.next();
                    !i.done;
                    i = r.next()
                  ) {
                    var o = i.value;
                    o.getQuery().getQueryParams().loadsAllData() || n.push(o);
                  }
                } catch (a) {
                  t = {
                    error: a,
                  };
                } finally {
                  try {
                    i && !i.done && (e = r.return) && e.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return n;
              }),
              (t.prototype.getCompleteServerCache = function (t) {
                var e,
                  n,
                  r = null;
                try {
                  for (
                    var i = u.__values(this.views.values()), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    r = r || a.getCompleteServerCache(t);
                  }
                } catch (s) {
                  e = {
                    error: s,
                  };
                } finally {
                  try {
                    o && !o.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              }),
              (t.prototype.viewForQuery = function (t) {
                if (t.getQueryParams().loadsAllData())
                  return this.getCompleteView();
                var e = t.queryIdentifier();
                return this.views.get(e);
              }),
              (t.prototype.viewExistsForQuery = function (t) {
                return null != this.viewForQuery(t);
              }),
              (t.prototype.hasCompleteView = function () {
                return null != this.getCompleteView();
              }),
              (t.prototype.getCompleteView = function () {
                var t, e;
                try {
                  for (
                    var n = u.__values(this.views.values()), r = n.next();
                    !r.done;
                    r = n.next()
                  ) {
                    var i = r.value;
                    if (i.getQuery().getQueryParams().loadsAllData()) return i;
                  }
                } catch (o) {
                  t = {
                    error: o,
                  };
                } finally {
                  try {
                    r && !r.done && (e = n.return) && e.call(n);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return null;
              }),
              t
            );
          })(),
          Oe = (function () {
            function t(t) {
              this.writeTree_ = t;
            }
            return (
              (t.prototype.addWrite = function (e, n) {
                if (e.isEmpty()) return new t(new pe(n));
                var r = this.writeTree_.findRootMostValueAndPath(e);
                if (null != r) {
                  var i = r.path,
                    o = r.value,
                    a = B.relativePath(i, e);
                  return (
                    (o = o.updateChild(a, n)), new t(this.writeTree_.set(i, o))
                  );
                }
                var s = new pe(n);
                return new t(this.writeTree_.setTree(e, s));
              }),
              (t.prototype.addWrites = function (t, e) {
                var n = this;
                return (
                  F(e, function (e, r) {
                    n = n.addWrite(t.child(e), r);
                  }),
                  n
                );
              }),
              (t.prototype.removeWrite = function (e) {
                return e.isEmpty()
                  ? t.Empty
                  : new t(this.writeTree_.setTree(e, pe.Empty));
              }),
              (t.prototype.hasCompleteWrite = function (t) {
                return null != this.getCompleteNode(t);
              }),
              (t.prototype.getCompleteNode = function (t) {
                var e = this.writeTree_.findRootMostValueAndPath(t);
                return null != e
                  ? this.writeTree_
                      .get(e.path)
                      .getChild(B.relativePath(e.path, t))
                  : null;
              }),
              (t.prototype.getCompleteChildren = function () {
                var t = [],
                  e = this.writeTree_.value;
                return (
                  null != e
                    ? e.isLeafNode() ||
                      e.forEachChild(Lt, function (e, n) {
                        t.push(new Ct(e, n));
                      })
                    : this.writeTree_.children.inorderTraversal(function (
                        e,
                        n
                      ) {
                        null != n.value && t.push(new Ct(e, n.value));
                      }),
                  t
                );
              }),
              (t.prototype.childCompoundWrite = function (e) {
                if (e.isEmpty()) return this;
                var n = this.getCompleteNode(e);
                return new t(
                  null != n ? new pe(n) : this.writeTree_.subtree(e)
                );
              }),
              (t.prototype.isEmpty = function () {
                return this.writeTree_.isEmpty();
              }),
              (t.prototype.apply = function (t) {
                return Pe(B.Empty, this.writeTree_, t);
              }),
              (t.Empty = new t(new pe(null))),
              t
            );
          })();

        function Pe(t, e, n) {
          if (null != e.value) return n.updateChild(t, e.value);
          var r = null;
          return (
            e.children.inorderTraversal(function (e, i) {
              '.priority' === e
                ? (c.assert(
                    null !== i.value,
                    'Priority writes must always be leaf nodes'
                  ),
                  (r = i.value))
                : (n = Pe(t.child(e), i, n));
            }),
            n.getChild(t).isEmpty() ||
              null === r ||
              (n = n.updateChild(t.child('.priority'), r)),
            n
          );
        }
        var ke = (function () {
            function t() {
              (this.visibleWrites_ = Oe.Empty),
                (this.allWrites_ = []),
                (this.lastWriteId_ = -1);
            }
            return (
              (t.prototype.childWrites = function (t) {
                return new xe(t, this);
              }),
              (t.prototype.addOverwrite = function (t, e, n, r) {
                c.assert(
                  n > this.lastWriteId_,
                  'Stacking an older write on top of newer ones'
                ),
                  void 0 === r && (r = !0),
                  this.allWrites_.push({
                    path: t,
                    snap: e,
                    writeId: n,
                    visible: r,
                  }),
                  r &&
                    (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)),
                  (this.lastWriteId_ = n);
              }),
              (t.prototype.addMerge = function (t, e, n) {
                c.assert(
                  n > this.lastWriteId_,
                  'Stacking an older merge on top of newer ones'
                ),
                  this.allWrites_.push({
                    path: t,
                    children: e,
                    writeId: n,
                    visible: !0,
                  }),
                  (this.visibleWrites_ = this.visibleWrites_.addWrites(t, e)),
                  (this.lastWriteId_ = n);
              }),
              (t.prototype.getWrite = function (t) {
                for (var e = 0; e < this.allWrites_.length; e++) {
                  var n = this.allWrites_[e];
                  if (n.writeId === t) return n;
                }
                return null;
              }),
              (t.prototype.removeWrite = function (t) {
                var e = this,
                  n = this.allWrites_.findIndex(function (e) {
                    return e.writeId === t;
                  });
                c.assert(
                  n >= 0,
                  'removeWrite called with nonexistent writeId.'
                );
                var r = this.allWrites_[n];
                this.allWrites_.splice(n, 1);
                for (
                  var i = r.visible, o = !1, a = this.allWrites_.length - 1;
                  i && a >= 0;

                ) {
                  var s = this.allWrites_[a];
                  s.visible &&
                    (a >= n && this.recordContainsPath_(s, r.path)
                      ? (i = !1)
                      : r.path.contains(s.path) && (o = !0)),
                    a--;
                }
                if (i) {
                  if (o) return this.resetTree_(), !0;
                  r.snap
                    ? (this.visibleWrites_ = this.visibleWrites_.removeWrite(
                        r.path
                      ))
                    : F(r.children, function (t) {
                        e.visibleWrites_ = e.visibleWrites_.removeWrite(
                          r.path.child(t)
                        );
                      });
                  return !0;
                }
                return !1;
              }),
              (t.prototype.getCompleteWriteData = function (t) {
                return this.visibleWrites_.getCompleteNode(t);
              }),
              (t.prototype.calcCompleteEventCache = function (e, n, r, i) {
                if (r || i) {
                  var o = this.visibleWrites_.childCompoundWrite(e);
                  if (!i && o.isEmpty()) return n;
                  if (i || null != n || o.hasCompleteWrite(B.Empty)) {
                    var a = t.layerTree_(
                      this.allWrites_,
                      function (t) {
                        return (
                          (t.visible || i) &&
                          (!r || !~r.indexOf(t.writeId)) &&
                          (t.path.contains(e) || e.contains(t.path))
                        );
                      },
                      e
                    );
                    c = n || Gt.EMPTY_NODE;
                    return a.apply(c);
                  }
                  return null;
                }
                var s = this.visibleWrites_.getCompleteNode(e);
                if (null != s) return s;
                var u = this.visibleWrites_.childCompoundWrite(e);
                if (u.isEmpty()) return n;
                if (null != n || u.hasCompleteWrite(B.Empty)) {
                  var c = n || Gt.EMPTY_NODE;
                  return u.apply(c);
                }
                return null;
              }),
              (t.prototype.calcCompleteEventChildren = function (t, e) {
                var n = Gt.EMPTY_NODE,
                  r = this.visibleWrites_.getCompleteNode(t);
                if (r)
                  return (
                    r.isLeafNode() ||
                      r.forEachChild(Lt, function (t, e) {
                        n = n.updateImmediateChild(t, e);
                      }),
                    n
                  );
                if (e) {
                  var i = this.visibleWrites_.childCompoundWrite(t);
                  return (
                    e.forEachChild(Lt, function (t, e) {
                      var r = i.childCompoundWrite(new B(t)).apply(e);
                      n = n.updateImmediateChild(t, r);
                    }),
                    i.getCompleteChildren().forEach(function (t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                    n
                  );
                }
                return (
                  this.visibleWrites_
                    .childCompoundWrite(t)
                    .getCompleteChildren()
                    .forEach(function (t) {
                      n = n.updateImmediateChild(t.name, t.node);
                    }),
                  n
                );
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function (
                t,
                e,
                n,
                r
              ) {
                c.assert(
                  n || r,
                  'Either existingEventSnap or existingServerSnap must exist'
                );
                var i = t.child(e);
                if (this.visibleWrites_.hasCompleteWrite(i)) return null;
                var o = this.visibleWrites_.childCompoundWrite(i);
                return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e));
              }),
              (t.prototype.calcCompleteChild = function (t, e, n) {
                var r = t.child(e),
                  i = this.visibleWrites_.getCompleteNode(r);
                return null != i
                  ? i
                  : n.isCompleteForChild(e)
                  ? this.visibleWrites_
                      .childCompoundWrite(r)
                      .apply(n.getNode().getImmediateChild(e))
                  : null;
              }),
              (t.prototype.shadowingWrite = function (t) {
                return this.visibleWrites_.getCompleteNode(t);
              }),
              (t.prototype.calcIndexedSlice = function (t, e, n, r, i, o) {
                var a,
                  s = this.visibleWrites_.childCompoundWrite(t),
                  u = s.getCompleteNode(B.Empty);
                if (null != u) a = u;
                else {
                  if (null == e) return [];
                  a = s.apply(e);
                }
                if ((a = a.withIndex(o)).isEmpty() || a.isLeafNode()) return [];
                for (
                  var c = [],
                    h = o.getCompare(),
                    l = i
                      ? a.getReverseIteratorFrom(n, o)
                      : a.getIteratorFrom(n, o),
                    f = l.getNext();
                  f && c.length < r;

                )
                  0 !== h(f, n) && c.push(f), (f = l.getNext());
                return c;
              }),
              (t.prototype.recordContainsPath_ = function (t, e) {
                if (t.snap) return t.path.contains(e);
                for (var n in t.children)
                  if (
                    t.children.hasOwnProperty(n) &&
                    t.path.child(n).contains(e)
                  )
                    return !0;
                return !1;
              }),
              (t.prototype.resetTree_ = function () {
                (this.visibleWrites_ = t.layerTree_(
                  this.allWrites_,
                  t.DefaultFilter_,
                  B.Empty
                )),
                  this.allWrites_.length > 0
                    ? (this.lastWriteId_ =
                        this.allWrites_[this.allWrites_.length - 1].writeId)
                    : (this.lastWriteId_ = -1);
              }),
              (t.DefaultFilter_ = function (t) {
                return t.visible;
              }),
              (t.layerTree_ = function (t, e, n) {
                for (var r = Oe.Empty, i = 0; i < t.length; ++i) {
                  var o = t[i];
                  if (e(o)) {
                    var a = o.path,
                      s = void 0;
                    if (o.snap)
                      n.contains(a)
                        ? ((s = B.relativePath(n, a)),
                          (r = r.addWrite(s, o.snap)))
                        : a.contains(n) &&
                          ((s = B.relativePath(a, n)),
                          (r = r.addWrite(B.Empty, o.snap.getChild(s))));
                    else {
                      if (!o.children)
                        throw c.assertionError(
                          'WriteRecord should have .snap or .children'
                        );
                      if (n.contains(a))
                        (s = B.relativePath(n, a)),
                          (r = r.addWrites(s, o.children));
                      else if (a.contains(n))
                        if ((s = B.relativePath(a, n)).isEmpty())
                          r = r.addWrites(B.Empty, o.children);
                        else {
                          var u = c.safeGet(o.children, s.getFront());
                          if (u) {
                            var h = u.getChild(s.popFront());
                            r = r.addWrite(B.Empty, h);
                          }
                        }
                    }
                  }
                }
                return r;
              }),
              t
            );
          })(),
          xe = (function () {
            function t(t, e) {
              (this.treePath_ = t), (this.writeTree_ = e);
            }
            return (
              (t.prototype.calcCompleteEventCache = function (t, e, n) {
                return this.writeTree_.calcCompleteEventCache(
                  this.treePath_,
                  t,
                  e,
                  n
                );
              }),
              (t.prototype.calcCompleteEventChildren = function (t) {
                return this.writeTree_.calcCompleteEventChildren(
                  this.treePath_,
                  t
                );
              }),
              (t.prototype.calcEventCacheAfterServerOverwrite = function (
                t,
                e,
                n
              ) {
                return this.writeTree_.calcEventCacheAfterServerOverwrite(
                  this.treePath_,
                  t,
                  e,
                  n
                );
              }),
              (t.prototype.shadowingWrite = function (t) {
                return this.writeTree_.shadowingWrite(this.treePath_.child(t));
              }),
              (t.prototype.calcIndexedSlice = function (t, e, n, r, i) {
                return this.writeTree_.calcIndexedSlice(
                  this.treePath_,
                  t,
                  e,
                  n,
                  r,
                  i
                );
              }),
              (t.prototype.calcCompleteChild = function (t, e) {
                return this.writeTree_.calcCompleteChild(this.treePath_, t, e);
              }),
              (t.prototype.child = function (e) {
                return new t(this.treePath_.child(e), this.writeTree_);
              }),
              t
            );
          })(),
          Re = (function () {
            function t(t) {
              (this.listenProvider_ = t),
                (this.syncPointTree_ = pe.Empty),
                (this.pendingWriteTree_ = new ke()),
                (this.tagToQueryMap = new Map()),
                (this.queryToTagMap = new Map());
            }
            return (
              (t.prototype.applyUserOverwrite = function (t, e, n, r) {
                return (
                  this.pendingWriteTree_.addOverwrite(t, e, n, r),
                  r
                    ? this.applyOperationToSyncPoints_(new ve(le.User, t, e))
                    : []
                );
              }),
              (t.prototype.applyUserMerge = function (t, e, n) {
                this.pendingWriteTree_.addMerge(t, e, n);
                var r = pe.fromObject(e);
                return this.applyOperationToSyncPoints_(new ye(le.User, t, r));
              }),
              (t.prototype.ackUserWrite = function (t, e) {
                void 0 === e && (e = !1);
                var n = this.pendingWriteTree_.getWrite(t);
                if (this.pendingWriteTree_.removeWrite(t)) {
                  var r = pe.Empty;
                  return (
                    null != n.snap
                      ? (r = r.set(B.Empty, !0))
                      : F(n.children, function (t, e) {
                          r = r.set(new B(t), e);
                        }),
                    this.applyOperationToSyncPoints_(new fe(n.path, r, e))
                  );
                }
                return [];
              }),
              (t.prototype.applyServerOverwrite = function (t, e) {
                return this.applyOperationToSyncPoints_(
                  new ve(le.Server, t, e)
                );
              }),
              (t.prototype.applyServerMerge = function (t, e) {
                var n = pe.fromObject(e);
                return this.applyOperationToSyncPoints_(
                  new ye(le.Server, t, n)
                );
              }),
              (t.prototype.applyListenComplete = function (t) {
                return this.applyOperationToSyncPoints_(new de(le.Server, t));
              }),
              (t.prototype.applyTaggedQueryOverwrite = function (e, n, r) {
                var i = this.queryKeyForTag_(r);
                if (null != i) {
                  var o = t.parseQueryKey_(i),
                    a = o.path,
                    s = o.queryId,
                    u = B.relativePath(a, e),
                    c = new ve(le.forServerTaggedQuery(s), u, n);
                  return this.applyTaggedOperation_(a, c);
                }
                return [];
              }),
              (t.prototype.applyTaggedQueryMerge = function (e, n, r) {
                var i = this.queryKeyForTag_(r);
                if (i) {
                  var o = t.parseQueryKey_(i),
                    a = o.path,
                    s = o.queryId,
                    u = B.relativePath(a, e),
                    c = pe.fromObject(n),
                    h = new ye(le.forServerTaggedQuery(s), u, c);
                  return this.applyTaggedOperation_(a, h);
                }
                return [];
              }),
              (t.prototype.applyTaggedListenComplete = function (e, n) {
                var r = this.queryKeyForTag_(n);
                if (r) {
                  var i = t.parseQueryKey_(r),
                    o = i.path,
                    a = i.queryId,
                    s = B.relativePath(o, e),
                    u = new de(le.forServerTaggedQuery(a), s);
                  return this.applyTaggedOperation_(o, u);
                }
                return [];
              }),
              (t.prototype.addEventRegistration = function (e, n) {
                var r = e.path,
                  i = null,
                  o = !1;
                this.syncPointTree_.foreachOnPath(r, function (t, e) {
                  var n = B.relativePath(t, r);
                  (i = i || e.getCompleteServerCache(n)),
                    (o = o || e.hasCompleteView());
                });
                var a,
                  s = this.syncPointTree_.get(r);
                (s
                  ? ((o = o || s.hasCompleteView()),
                    (i = i || s.getCompleteServerCache(B.Empty)))
                  : ((s = new Ae()),
                    (this.syncPointTree_ = this.syncPointTree_.set(r, s))),
                null != i)
                  ? (a = !0)
                  : ((a = !1),
                    (i = Gt.EMPTY_NODE),
                    this.syncPointTree_
                      .subtree(r)
                      .foreachChild(function (t, e) {
                        var n = e.getCompleteServerCache(B.Empty);
                        n && (i = i.updateImmediateChild(t, n));
                      }));
                var u = s.viewExistsForQuery(e);
                if (!u && !e.getQueryParams().loadsAllData()) {
                  var h = t.makeQueryKey_(e);
                  c.assert(
                    !this.queryToTagMap.has(h),
                    'View does not exist, but we have a tag'
                  );
                  var l = t.getNextQueryTag_();
                  this.queryToTagMap.set(h, l), this.tagToQueryMap.set(l, h);
                }
                var f = this.pendingWriteTree_.childWrites(r),
                  p = s.addEventRegistration(e, n, f, i, a);
                if (!u && !o) {
                  var d = s.viewForQuery(e);
                  p = p.concat(this.setupListener_(e, d));
                }
                return p;
              }),
              (t.prototype.removeEventRegistration = function (e, n, r) {
                var i = this,
                  o = e.path,
                  a = this.syncPointTree_.get(o),
                  s = [];
                if (
                  a &&
                  ('default' === e.queryIdentifier() || a.viewExistsForQuery(e))
                ) {
                  var u = a.removeEventRegistration(e, n, r);
                  a.isEmpty() &&
                    (this.syncPointTree_ = this.syncPointTree_.remove(o));
                  var c = u.removed;
                  s = u.events;
                  var h =
                      -1 !==
                      c.findIndex(function (t) {
                        return t.getQueryParams().loadsAllData();
                      }),
                    l = this.syncPointTree_.findOnPath(o, function (t, e) {
                      return e.hasCompleteView();
                    });
                  if (h && !l) {
                    var f = this.syncPointTree_.subtree(o);
                    if (!f.isEmpty())
                      for (
                        var p = this.collectDistinctViewsForSubTree_(f), d = 0;
                        d < p.length;
                        ++d
                      ) {
                        var v = p[d],
                          y = v.getQuery(),
                          g = this.createListenerForView_(v);
                        this.listenProvider_.startListening(
                          t.queryForListening_(y),
                          this.tagForQuery_(y),
                          g.hashFn,
                          g.onComplete
                        );
                      }
                  }
                  if (!l && c.length > 0 && !r)
                    if (h) {
                      this.listenProvider_.stopListening(
                        t.queryForListening_(e),
                        null
                      );
                    } else
                      c.forEach(function (e) {
                        var n = i.queryToTagMap.get(t.makeQueryKey_(e));
                        i.listenProvider_.stopListening(
                          t.queryForListening_(e),
                          n
                        );
                      });
                  this.removeTags_(c);
                }
                return s;
              }),
              (t.prototype.calcCompleteEventCache = function (t, e) {
                var n = this.pendingWriteTree_,
                  r = this.syncPointTree_.findOnPath(t, function (e, n) {
                    var r = B.relativePath(e, t),
                      i = n.getCompleteServerCache(r);
                    if (i) return i;
                  });
                return n.calcCompleteEventCache(t, r, e, !0);
              }),
              (t.prototype.collectDistinctViewsForSubTree_ = function (t) {
                return t.fold(function (t, e, n) {
                  if (e && e.hasCompleteView()) return [e.getCompleteView()];
                  var r = [];
                  return (
                    e && (r = e.getQueryViews()),
                    F(n, function (t, e) {
                      r = r.concat(e);
                    }),
                    r
                  );
                });
              }),
              (t.prototype.removeTags_ = function (e) {
                for (var n = 0; n < e.length; ++n) {
                  var r = e[n];
                  if (!r.getQueryParams().loadsAllData()) {
                    var i = t.makeQueryKey_(r),
                      o = this.queryToTagMap.get(i);
                    this.queryToTagMap.delete(i), this.tagToQueryMap.delete(o);
                  }
                }
              }),
              (t.queryForListening_ = function (t) {
                return t.getQueryParams().loadsAllData() &&
                  !t.getQueryParams().isDefault()
                  ? t.getRef()
                  : t;
              }),
              (t.prototype.setupListener_ = function (e, n) {
                var r = e.path,
                  i = this.tagForQuery_(e),
                  o = this.createListenerForView_(n),
                  a = this.listenProvider_.startListening(
                    t.queryForListening_(e),
                    i,
                    o.hashFn,
                    o.onComplete
                  ),
                  s = this.syncPointTree_.subtree(r);
                if (i)
                  c.assert(
                    !s.value.hasCompleteView(),
                    "If we're adding a query, it shouldn't be shadowed"
                  );
                else
                  for (
                    var u = s.fold(function (t, e, n) {
                        if (!t.isEmpty() && e && e.hasCompleteView())
                          return [e.getCompleteView().getQuery()];
                        var r = [];
                        return (
                          e &&
                            (r = r.concat(
                              e.getQueryViews().map(function (t) {
                                return t.getQuery();
                              })
                            )),
                          F(n, function (t, e) {
                            r = r.concat(e);
                          }),
                          r
                        );
                      }),
                      h = 0;
                    h < u.length;
                    ++h
                  ) {
                    var l = u[h];
                    this.listenProvider_.stopListening(
                      t.queryForListening_(l),
                      this.tagForQuery_(l)
                    );
                  }
                return a;
              }),
              (t.prototype.createListenerForView_ = function (t) {
                var e = this,
                  n = t.getQuery(),
                  r = this.tagForQuery_(n);
                return {
                  hashFn: function () {
                    return (t.getServerCache() || Gt.EMPTY_NODE).hash();
                  },
                  onComplete: function (t) {
                    if ('ok' === t)
                      return r
                        ? e.applyTaggedListenComplete(n.path, r)
                        : e.applyListenComplete(n.path);
                    var i = (function (t, e) {
                      var n = 'Unknown Error';
                      'too_big' === t
                        ? (n =
                            'The data requested exceeds the maximum size that can be accessed with a single request.')
                        : 'permission_denied' === t
                        ? (n =
                            "Client doesn't have permission to access the desired data.")
                        : 'unavailable' === t &&
                          (n = 'The service is unavailable');
                      var r = new Error(
                        t + ' at ' + e.path.toString() + ': ' + n
                      );
                      return (r.code = t.toUpperCase()), r;
                    })(t, n);
                    return e.removeEventRegistration(n, null, i);
                  },
                };
              }),
              (t.makeQueryKey_ = function (t) {
                return t.path.toString() + '$' + t.queryIdentifier();
              }),
              (t.parseQueryKey_ = function (t) {
                var e = t.indexOf('$');
                return (
                  c.assert(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
                  {
                    queryId: t.substr(e + 1),
                    path: new B(t.substr(0, e)),
                  }
                );
              }),
              (t.prototype.queryKeyForTag_ = function (t) {
                return this.tagToQueryMap.get(t);
              }),
              (t.prototype.tagForQuery_ = function (e) {
                var n = t.makeQueryKey_(e);
                return this.queryToTagMap.get(n);
              }),
              (t.getNextQueryTag_ = function () {
                return t.nextQueryTag_++;
              }),
              (t.prototype.applyTaggedOperation_ = function (t, e) {
                var n = this.syncPointTree_.get(t);
                c.assert(
                  n,
                  "Missing sync point for query tag that we're tracking"
                );
                var r = this.pendingWriteTree_.childWrites(t);
                return n.applyOperation(e, r, null);
              }),
              (t.prototype.applyOperationToSyncPoints_ = function (t) {
                return this.applyOperationHelper_(
                  t,
                  this.syncPointTree_,
                  null,
                  this.pendingWriteTree_.childWrites(B.Empty)
                );
              }),
              (t.prototype.applyOperationHelper_ = function (t, e, n, r) {
                if (t.path.isEmpty())
                  return this.applyOperationDescendantsHelper_(t, e, n, r);
                var i = e.get(B.Empty);
                null == n &&
                  null != i &&
                  (n = i.getCompleteServerCache(B.Empty));
                var o = [],
                  a = t.path.getFront(),
                  s = t.operationForChild(a),
                  u = e.children.get(a);
                if (u && s) {
                  var c = n ? n.getImmediateChild(a) : null,
                    h = r.child(a);
                  o = o.concat(this.applyOperationHelper_(s, u, c, h));
                }
                return i && (o = o.concat(i.applyOperation(t, r, n))), o;
              }),
              (t.prototype.applyOperationDescendantsHelper_ = function (
                t,
                e,
                n,
                r
              ) {
                var i = this,
                  o = e.get(B.Empty);
                null == n &&
                  null != o &&
                  (n = o.getCompleteServerCache(B.Empty));
                var a = [];
                return (
                  e.children.inorderTraversal(function (e, o) {
                    var s = n ? n.getImmediateChild(e) : null,
                      u = r.child(e),
                      c = t.operationForChild(e);
                    c &&
                      (a = a.concat(
                        i.applyOperationDescendantsHelper_(c, o, s, u)
                      ));
                  }),
                  o && (a = a.concat(o.applyOperation(t, r, n))),
                  a
                );
              }),
              (t.nextQueryTag_ = 1),
              t
            );
          })(),
          De = (function () {
            function t() {
              this.rootNode_ = Gt.EMPTY_NODE;
            }
            return (
              (t.prototype.getNode = function (t) {
                return this.rootNode_.getChild(t);
              }),
              (t.prototype.updateSnapshot = function (t, e) {
                this.rootNode_ = this.rootNode_.updateChild(t, e);
              }),
              t
            );
          })(),
          Le = (function () {
            function t(t, e) {
              var n = this;
              (this.app_ = t),
                (this.authProvider_ = e),
                (this.auth_ = null),
                (this.auth_ = e.getImmediate({
                  optional: !0,
                })),
                this.auth_ ||
                  e.get().then(function (t) {
                    return (n.auth_ = t);
                  });
            }
            return (
              (t.prototype.getToken = function (t) {
                return this.auth_
                  ? this.auth_.getToken(t).catch(function (t) {
                      return t && 'auth/token-not-initialized' === t.code
                        ? (S(
                            'Got auth/token-not-initialized error.  Treating as null token.'
                          ),
                          null)
                        : Promise.reject(t);
                    })
                  : Promise.resolve(null);
              }),
              (t.prototype.addTokenChangeListener = function (t) {
                this.auth_
                  ? this.auth_.addAuthTokenListener(t)
                  : (setTimeout(function () {
                      return t(null);
                    }, 0),
                    this.authProvider_.get().then(function (e) {
                      return e.addAuthTokenListener(t);
                    }));
              }),
              (t.prototype.removeTokenChangeListener = function (t) {
                this.authProvider_.get().then(function (e) {
                  return e.removeAuthTokenListener(t);
                });
              }),
              (t.prototype.notifyForInvalidToken = function () {
                var t =
                  'Provided authentication credentials for the app named "' +
                  this.app_.name +
                  '" are invalid. This usually indicates your app was not initialized correctly. ';
                'credential' in this.app_.options
                  ? (t +=
                      'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : 'serviceAccount' in this.app_.options
                  ? (t +=
                      'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : (t +=
                      'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                  A(t);
              }),
              t
            );
          })(),
          Me = (function () {
            function t() {
              this.counters_ = {};
            }
            return (
              (t.prototype.incrementCounter = function (t, e) {
                void 0 === e && (e = 1),
                  c.contains(this.counters_, t) || (this.counters_[t] = 0),
                  (this.counters_[t] += e);
              }),
              (t.prototype.get = function () {
                return c.deepCopy(this.counters_);
              }),
              t
            );
          })(),
          Fe = (function () {
            function t() {}
            return (
              (t.getCollection = function (t) {
                var e = t.toString();
                return (
                  this.collections_[e] || (this.collections_[e] = new Me()),
                  this.collections_[e]
                );
              }),
              (t.getOrCreateReporter = function (t, e) {
                var n = t.toString();
                return (
                  this.reporters_[n] || (this.reporters_[n] = e()),
                  this.reporters_[n]
                );
              }),
              (t.collections_ = {}),
              (t.reporters_ = {}),
              t
            );
          })(),
          je = (function () {
            function t(t) {
              (this.collection_ = t), (this.last_ = null);
            }
            return (
              (t.prototype.get = function () {
                var t = this.collection_.get(),
                  e = u.__assign({}, t);
                return (
                  this.last_ &&
                    F(this.last_, function (t, n) {
                      e[t] = e[t] - n;
                    }),
                  (this.last_ = t),
                  e
                );
              }),
              t
            );
          })(),
          Ue = (function () {
            function t(t, e) {
              (this.server_ = e),
                (this.statsToReport_ = {}),
                (this.statsListener_ = new je(t));
              var n = 1e4 + 2e4 * Math.random();
              q(this.reportStats_.bind(this), Math.floor(n));
            }
            return (
              (t.prototype.includeStat = function (t) {
                this.statsToReport_[t] = !0;
              }),
              (t.prototype.reportStats_ = function () {
                var t = this,
                  e = this.statsListener_.get(),
                  n = {},
                  r = !1;
                F(e, function (e, i) {
                  i > 0 &&
                    c.contains(t.statsToReport_, e) &&
                    ((n[e] = i), (r = !0));
                }),
                  r && this.server_.reportStats(n),
                  q(
                    this.reportStats_.bind(this),
                    Math.floor(2 * Math.random() * 3e5)
                  );
              }),
              t
            );
          })(),
          Ve = (function () {
            function t() {
              (this.eventLists_ = []), (this.recursionDepth_ = 0);
            }
            return (
              (t.prototype.queueEvents = function (t) {
                for (var e = null, n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.getPath();
                  null === e ||
                    i.equals(e.getPath()) ||
                    (this.eventLists_.push(e), (e = null)),
                    null === e && (e = new We(i)),
                    e.add(r);
                }
                e && this.eventLists_.push(e);
              }),
              (t.prototype.raiseEventsAtPath = function (t, e) {
                this.queueEvents(e),
                  this.raiseQueuedEventsMatchingPredicate_(function (e) {
                    return e.equals(t);
                  });
              }),
              (t.prototype.raiseEventsForChangedPath = function (t, e) {
                this.queueEvents(e),
                  this.raiseQueuedEventsMatchingPredicate_(function (e) {
                    return e.contains(t) || t.contains(e);
                  });
              }),
              (t.prototype.raiseQueuedEventsMatchingPredicate_ = function (t) {
                this.recursionDepth_++;
                for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                  var r = this.eventLists_[n];
                  if (r)
                    t(r.getPath())
                      ? (this.eventLists_[n].raise(),
                        (this.eventLists_[n] = null))
                      : (e = !1);
                }
                e && (this.eventLists_ = []), this.recursionDepth_--;
              }),
              t
            );
          })(),
          We = (function () {
            function t(t) {
              (this.path_ = t), (this.events_ = []);
            }
            return (
              (t.prototype.add = function (t) {
                this.events_.push(t);
              }),
              (t.prototype.raise = function () {
                for (var t = 0; t < this.events_.length; t++) {
                  var e = this.events_[t];
                  if (null !== e) {
                    this.events_[t] = null;
                    var n = e.getEventRunner();
                    w && S('event: ' + e.toString()), W(n);
                  }
                }
              }),
              (t.prototype.getPath = function () {
                return this.path_;
              }),
              t
            );
          })(),
          qe = (function () {
            function t(t) {
              (this.allowedEvents_ = t),
                (this.listeners_ = {}),
                c.assert(
                  Array.isArray(t) && t.length > 0,
                  'Requires a non-empty array'
                );
            }
            return (
              (t.prototype.trigger = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[t]))
                  for (
                    var r = u.__spread(this.listeners_[t]), i = 0;
                    i < r.length;
                    i++
                  )
                    r[i].callback.apply(r[i].context, e);
              }),
              (t.prototype.on = function (t, e, n) {
                this.validateEventType_(t),
                  (this.listeners_[t] = this.listeners_[t] || []),
                  this.listeners_[t].push({
                    callback: e,
                    context: n,
                  });
                var r = this.getInitialEvent(t);
                r && e.apply(n, r);
              }),
              (t.prototype.off = function (t, e, n) {
                this.validateEventType_(t);
                for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                  if (r[i].callback === e && (!n || n === r[i].context))
                    return void r.splice(i, 1);
              }),
              (t.prototype.validateEventType_ = function (t) {
                c.assert(
                  this.allowedEvents_.find(function (e) {
                    return e === t;
                  }),
                  'Unknown event: ' + t
                );
              }),
              t
            );
          })(),
          Be = (function (t) {
            function e() {
              var e,
                n,
                r = t.call(this, ['visible']) || this;
              return (
                'undefined' !== typeof document &&
                  'undefined' !== typeof document.addEventListener &&
                  ('undefined' !== typeof document.hidden
                    ? ((n = 'visibilitychange'), (e = 'hidden'))
                    : 'undefined' !== typeof document.mozHidden
                    ? ((n = 'mozvisibilitychange'), (e = 'mozHidden'))
                    : 'undefined' !== typeof document.msHidden
                    ? ((n = 'msvisibilitychange'), (e = 'msHidden'))
                    : 'undefined' !== typeof document.webkitHidden &&
                      ((n = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
                (r.visible_ = !0),
                n &&
                  document.addEventListener(
                    n,
                    function () {
                      var t = !document[e];
                      t !== r.visible_ &&
                        ((r.visible_ = t), r.trigger('visible', t));
                    },
                    !1
                  ),
                r
              );
            }
            return (
              u.__extends(e, t),
              (e.getInstance = function () {
                return new e();
              }),
              (e.prototype.getInitialEvent = function (t) {
                return (
                  c.assert('visible' === t, 'Unknown event type: ' + t),
                  [this.visible_]
                );
              }),
              e
            );
          })(qe),
          He = (function (t) {
            function e() {
              var e = t.call(this, ['online']) || this;
              return (
                (e.online_ = !0),
                'undefined' === typeof window ||
                  'undefined' === typeof window.addEventListener ||
                  c.isMobileCordova() ||
                  (window.addEventListener(
                    'online',
                    function () {
                      e.online_ || ((e.online_ = !0), e.trigger('online', !0));
                    },
                    !1
                  ),
                  window.addEventListener(
                    'offline',
                    function () {
                      e.online_ && ((e.online_ = !1), e.trigger('online', !1));
                    },
                    !1
                  )),
                e
              );
            }
            return (
              u.__extends(e, t),
              (e.getInstance = function () {
                return new e();
              }),
              (e.prototype.getInitialEvent = function (t) {
                return (
                  c.assert('online' === t, 'Unknown event type: ' + t),
                  [this.online_]
                );
              }),
              (e.prototype.currentlyOnline = function () {
                return this.online_;
              }),
              e
            );
          })(qe),
          Qe = (function () {
            function t(t) {
              (this.onMessage_ = t),
                (this.pendingResponses = []),
                (this.currentResponseNum = 0),
                (this.closeAfterResponse = -1),
                (this.onClose = null);
            }
            return (
              (t.prototype.closeAfter = function (t, e) {
                (this.closeAfterResponse = t),
                  (this.onClose = e),
                  this.closeAfterResponse < this.currentResponseNum &&
                    (this.onClose(), (this.onClose = null));
              }),
              (t.prototype.handleResponse = function (t, e) {
                var n = this;
                this.pendingResponses[t] = e;
                for (
                  var r = function () {
                      var t = i.pendingResponses[i.currentResponseNum];
                      delete i.pendingResponses[i.currentResponseNum];
                      for (
                        var e = function (e) {
                            t[e] &&
                              W(function () {
                                n.onMessage_(t[e]);
                              });
                          },
                          r = 0;
                        r < t.length;
                        ++r
                      )
                        e(r);
                      if (i.currentResponseNum === i.closeAfterResponse)
                        return (
                          i.onClose && (i.onClose(), (i.onClose = null)),
                          'break'
                        );
                      i.currentResponseNum++;
                    },
                    i = this;
                  this.pendingResponses[this.currentResponseNum];

                ) {
                  if ('break' === r()) break;
                }
              }),
              t
            );
          })(),
          Ke = 'start',
          Ge = 'close',
          ze = (function () {
            function t(t, e, n, r) {
              (this.connId = t),
                (this.repoInfo = e),
                (this.transportSessionId = n),
                (this.lastSessionId = r),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.everConnected_ = !1),
                (this.log_ = I(t)),
                (this.stats_ = Fe.getCollection(e)),
                (this.urlFn = function (t) {
                  return e.connectionURL(z, t);
                });
            }
            return (
              (t.prototype.open = function (t, e) {
                var n = this;
                (this.curSegmentNum = 0),
                  (this.onDisconnect_ = e),
                  (this.myPacketOrderer = new Qe(t)),
                  (this.isClosed_ = !1),
                  (this.connectTimeoutTimer_ = setTimeout(function () {
                    n.log_('Timed out trying to connect.'),
                      n.onClosed_(),
                      (n.connectTimeoutTimer_ = null);
                  }, Math.floor(3e4))),
                  (function (t) {
                    if (c.isNodeSdk() || 'complete' === document.readyState)
                      t();
                    else {
                      var e = !1,
                        n = function n() {
                          document.body
                            ? e || ((e = !0), t())
                            : setTimeout(n, Math.floor(10));
                        };
                      document.addEventListener
                        ? (document.addEventListener('DOMContentLoaded', n, !1),
                          window.addEventListener('load', n, !1))
                        : document.attachEvent &&
                          (document.attachEvent(
                            'onreadystatechange',
                            function () {
                              'complete' === document.readyState && n();
                            }
                          ),
                          window.attachEvent('onload', n));
                    }
                  })(function () {
                    if (!n.isClosed_) {
                      n.scriptTagHolder = new Ye(
                        function () {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          var r = u.__read(t, 5),
                            i = r[0],
                            o = r[1],
                            a = r[2];
                          r[3], r[4];
                          if ((n.incrementIncomingBytes_(t), n.scriptTagHolder))
                            if (
                              (n.connectTimeoutTimer_ &&
                                (clearTimeout(n.connectTimeoutTimer_),
                                (n.connectTimeoutTimer_ = null)),
                              (n.everConnected_ = !0),
                              i === Ke)
                            )
                              (n.id = o), (n.password = a);
                            else {
                              if (i !== Ge)
                                throw new Error(
                                  'Unrecognized command received: ' + i
                                );
                              o
                                ? ((n.scriptTagHolder.sendNewPolls = !1),
                                  n.myPacketOrderer.closeAfter(o, function () {
                                    n.onClosed_();
                                  }))
                                : n.onClosed_();
                            }
                        },
                        function () {
                          for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                          var r = u.__read(t, 2),
                            i = r[0],
                            o = r[1];
                          n.incrementIncomingBytes_(t),
                            n.myPacketOrderer.handleResponse(i, o);
                        },
                        function () {
                          n.onClosed_();
                        },
                        n.urlFn
                      );
                      var t = {
                        start: 't',
                      };
                      (t.ser = Math.floor(1e8 * Math.random())),
                        n.scriptTagHolder.uniqueCallbackIdentifier &&
                          (t.cb = n.scriptTagHolder.uniqueCallbackIdentifier),
                        (t.v = Q),
                        n.transportSessionId && (t.s = n.transportSessionId),
                        n.lastSessionId && (t.ls = n.lastSessionId),
                        'undefined' !== typeof location &&
                          location.href &&
                          -1 !== location.href.indexOf(K) &&
                          (t.r = 'f');
                      var e = n.urlFn(t);
                      n.log_('Connecting via long-poll to ' + e),
                        n.scriptTagHolder.addTag(e, function () {});
                    }
                  });
              }),
              (t.prototype.start = function () {
                this.scriptTagHolder.startLongPoll(this.id, this.password),
                  this.addDisconnectPingFrame(this.id, this.password);
              }),
              (t.forceAllow = function () {
                t.forceAllow_ = !0;
              }),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0;
              }),
              (t.isAvailable = function () {
                return (
                  !c.isNodeSdk() &&
                  (!!t.forceAllow_ ||
                    (!t.forceDisallow_ &&
                      'undefined' !== typeof document &&
                      null != document.createElement &&
                      !(
                        'object' ===
                          ('undefined' === typeof window
                            ? 'undefined'
                            : i(window)) &&
                        window.chrome &&
                        window.chrome.extension &&
                        !/^chrome/.test(window.location.href)
                      ) &&
                      !(
                        'object' ===
                          ('undefined' === typeof Windows
                            ? 'undefined'
                            : i(Windows)) && 'object' === i(Windows.UI)
                      )))
                );
              }),
              (t.prototype.markConnectionHealthy = function () {}),
              (t.prototype.shutdown_ = function () {
                (this.isClosed_ = !0),
                  this.scriptTagHolder &&
                    (this.scriptTagHolder.close(),
                    (this.scriptTagHolder = null)),
                  this.myDisconnFrame &&
                    (document.body.removeChild(this.myDisconnFrame),
                    (this.myDisconnFrame = null)),
                  this.connectTimeoutTimer_ &&
                    (clearTimeout(this.connectTimeoutTimer_),
                    (this.connectTimeoutTimer_ = null));
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_('Longpoll is closing itself'),
                  this.shutdown_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(this.everConnected_),
                    (this.onDisconnect_ = null)));
              }),
              (t.prototype.close = function () {
                this.isClosed_ ||
                  (this.log_('Longpoll is being closed.'), this.shutdown_());
              }),
              (t.prototype.send = function (t) {
                var e = c.stringify(t);
                (this.bytesSent += e.length),
                  this.stats_.incrementCounter('bytes_sent', e.length);
                for (
                  var n = c.base64Encode(e), r = M(n, 1840), i = 0;
                  i < r.length;
                  i++
                )
                  this.scriptTagHolder.enqueueSegment(
                    this.curSegmentNum,
                    r.length,
                    r[i]
                  ),
                    this.curSegmentNum++;
              }),
              (t.prototype.addDisconnectPingFrame = function (t, e) {
                if (!c.isNodeSdk()) {
                  this.myDisconnFrame = document.createElement('iframe');
                  var n = {
                    dframe: 't',
                  };
                  (n.id = t),
                    (n.pw = e),
                    (this.myDisconnFrame.src = this.urlFn(n)),
                    (this.myDisconnFrame.style.display = 'none'),
                    document.body.appendChild(this.myDisconnFrame);
                }
              }),
              (t.prototype.incrementIncomingBytes_ = function (t) {
                var e = c.stringify(t).length;
                (this.bytesReceived += e),
                  this.stats_.incrementCounter('bytes_received', e);
              }),
              t
            );
          })(),
          Ye = (function () {
            function t(e, n, r, i) {
              if (
                ((this.onDisconnect = r),
                (this.urlFn = i),
                (this.outstandingRequests = new Set()),
                (this.pendingSegs = []),
                (this.currentSerial = Math.floor(1e8 * Math.random())),
                (this.sendNewPolls = !0),
                c.isNodeSdk())
              )
                (this.commandCB = e), (this.onMessageCB = n);
              else {
                (this.uniqueCallbackIdentifier = m()),
                  (window['pLPCommand' + this.uniqueCallbackIdentifier] = e),
                  (window['pRTLPCB' + this.uniqueCallbackIdentifier] = n),
                  (this.myIFrame = t.createIFrame_());
                var o = '';
                if (
                  this.myIFrame.src &&
                  'javascript:' ===
                    this.myIFrame.src.substr(0, 'javascript:'.length)
                )
                  o =
                    '<script>document.domain="' +
                    document.domain +
                    '";</script>';
                var a = '<html><body>' + o + '</body></html>';
                try {
                  this.myIFrame.doc.open(),
                    this.myIFrame.doc.write(a),
                    this.myIFrame.doc.close();
                } catch (s) {
                  S('frame writing exception'), s.stack && S(s.stack), S(s);
                }
              }
            }
            return (
              (t.createIFrame_ = function () {
                var t = document.createElement('iframe');
                if (((t.style.display = 'none'), !document.body))
                  throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
                document.body.appendChild(t);
                try {
                  t.contentWindow.document ||
                    S('No IE domain setting required');
                } catch (n) {
                  var e = document.domain;
                  t.src =
                    "javascript:void((function(){document.open();document.domain='" +
                    e +
                    "';document.close();})())";
                }
                return (
                  t.contentDocument
                    ? (t.doc = t.contentDocument)
                    : t.contentWindow
                    ? (t.doc = t.contentWindow.document)
                    : t.document && (t.doc = t.document),
                  t
                );
              }),
              (t.prototype.close = function () {
                var t = this;
                (this.alive = !1),
                  this.myIFrame &&
                    ((this.myIFrame.doc.body.innerHTML = ''),
                    setTimeout(function () {
                      null !== t.myIFrame &&
                        (document.body.removeChild(t.myIFrame),
                        (t.myIFrame = null));
                    }, Math.floor(0)));
                var e = this.onDisconnect;
                e && ((this.onDisconnect = null), e());
              }),
              (t.prototype.startLongPoll = function (t, e) {
                for (
                  this.myID = t, this.myPW = e, this.alive = !0;
                  this.newRequest_();

                );
              }),
              (t.prototype.newRequest_ = function () {
                if (
                  this.alive &&
                  this.sendNewPolls &&
                  this.outstandingRequests.size <
                    (this.pendingSegs.length > 0 ? 2 : 1)
                ) {
                  this.currentSerial++;
                  var t = {};
                  (t.id = this.myID),
                    (t.pw = this.myPW),
                    (t.ser = this.currentSerial);
                  for (
                    var e = this.urlFn(t), n = '', r = 0;
                    this.pendingSegs.length > 0;

                  ) {
                    if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870))
                      break;
                    var i = this.pendingSegs.shift();
                    (n =
                      n +
                      '&seg' +
                      r +
                      '=' +
                      i.seg +
                      '&ts' +
                      r +
                      '=' +
                      i.ts +
                      '&d' +
                      r +
                      '=' +
                      i.d),
                      r++;
                  }
                  return (
                    (e += n), this.addLongPollTag_(e, this.currentSerial), !0
                  );
                }
                return !1;
              }),
              (t.prototype.enqueueSegment = function (t, e, n) {
                this.pendingSegs.push({
                  seg: t,
                  ts: e,
                  d: n,
                }),
                  this.alive && this.newRequest_();
              }),
              (t.prototype.addLongPollTag_ = function (t, e) {
                var n = this;
                this.outstandingRequests.add(e);
                var r = function () {
                    n.outstandingRequests.delete(e), n.newRequest_();
                  },
                  i = setTimeout(r, Math.floor(25e3));
                this.addTag(t, function () {
                  clearTimeout(i), r();
                });
              }),
              (t.prototype.addTag = function (t, e) {
                var n = this;
                c.isNodeSdk()
                  ? this.doNodeLongPoll(t, e)
                  : setTimeout(function () {
                      try {
                        if (!n.sendNewPolls) return;
                        var r = n.myIFrame.doc.createElement('script');
                        (r.type = 'text/javascript'),
                          (r.async = !0),
                          (r.src = t),
                          (r.onload = r.onreadystatechange =
                            function () {
                              var t = r.readyState;
                              (t && 'loaded' !== t && 'complete' !== t) ||
                                ((r.onload = r.onreadystatechange = null),
                                r.parentNode && r.parentNode.removeChild(r),
                                e());
                            }),
                          (r.onerror = function () {
                            S('Long-poll script failed to load: ' + t),
                              (n.sendNewPolls = !1),
                              n.close();
                          }),
                          n.myIFrame.doc.body.appendChild(r);
                      } catch (i) {}
                    }, Math.floor(1));
              }),
              t
            );
          })(),
          Xe = '';
        var $e = null;
        'undefined' !== typeof MozWebSocket
          ? ($e = MozWebSocket)
          : 'undefined' !== typeof WebSocket && ($e = WebSocket);
        var Je = (function () {
            function t(e, n, r, i) {
              (this.connId = e),
                (this.keepaliveTimer = null),
                (this.frames = null),
                (this.totalFrames = 0),
                (this.bytesSent = 0),
                (this.bytesReceived = 0),
                (this.log_ = I(this.connId)),
                (this.stats_ = Fe.getCollection(n)),
                (this.connURL = t.connectionURL_(n, r, i));
            }
            return (
              (t.connectionURL_ = function (t, e, n) {
                var r = {};
                return (
                  (r.v = Q),
                  !c.isNodeSdk() &&
                    'undefined' !== typeof location &&
                    location.href &&
                    -1 !== location.href.indexOf(K) &&
                    (r.r = 'f'),
                  e && (r.s = e),
                  n && (r.ls = n),
                  t.connectionURL(G, r)
                );
              }),
              (t.prototype.open = function (t, e) {
                var n = this;
                (this.onDisconnect = e),
                  (this.onMessage = t),
                  this.log_('Websocket connecting to ' + this.connURL),
                  (this.everConnected_ = !1),
                  v.set('previous_websocket_failure', !0);
                try {
                  if (c.isNodeSdk()) {
                    var i = c.CONSTANTS.NODE_ADMIN ? 'AdminNode' : 'Node',
                      o = {
                        headers: {
                          'User-Agent':
                            'Firebase/5/' + Xe + '/' + r.platform + '/' + i,
                        },
                      },
                      a = r.env,
                      s =
                        0 === this.connURL.indexOf('wss://')
                          ? a.HTTPS_PROXY || a.https_proxy
                          : a.HTTP_PROXY || a.http_proxy;
                    s &&
                      (o.proxy = {
                        origin: s,
                      }),
                      (this.mySock = new $e(this.connURL, [], o));
                  } else this.mySock = new $e(this.connURL);
                } catch (h) {
                  this.log_('Error instantiating WebSocket.');
                  var u = h.message || h.data;
                  return u && this.log_(u), void this.onClosed_();
                }
                (this.mySock.onopen = function () {
                  n.log_('Websocket connected.'), (n.everConnected_ = !0);
                }),
                  (this.mySock.onclose = function () {
                    n.log_('Websocket connection was disconnected.'),
                      (n.mySock = null),
                      n.onClosed_();
                  }),
                  (this.mySock.onmessage = function (t) {
                    n.handleIncomingFrame(t);
                  }),
                  (this.mySock.onerror = function (t) {
                    n.log_('WebSocket error.  Closing connection.');
                    var e = t.message || t.data;
                    e && n.log_(e), n.onClosed_();
                  });
              }),
              (t.prototype.start = function () {}),
              (t.forceDisallow = function () {
                t.forceDisallow_ = !0;
              }),
              (t.isAvailable = function () {
                var e = !1;
                if ('undefined' !== typeof navigator && navigator.userAgent) {
                  var n = navigator.userAgent.match(
                    /Android ([0-9]{0,}\.[0-9]{0,})/
                  );
                  n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0);
                }
                return !e && null !== $e && !t.forceDisallow_;
              }),
              (t.previouslyFailed = function () {
                return (
                  v.isInMemoryStorage ||
                  !0 === v.get('previous_websocket_failure')
                );
              }),
              (t.prototype.markConnectionHealthy = function () {
                v.remove('previous_websocket_failure');
              }),
              (t.prototype.appendFrame_ = function (t) {
                if (
                  (this.frames.push(t), this.frames.length === this.totalFrames)
                ) {
                  var e = this.frames.join('');
                  this.frames = null;
                  var n = c.jsonEval(e);
                  this.onMessage(n);
                }
              }),
              (t.prototype.handleNewFrameCount_ = function (t) {
                (this.totalFrames = t), (this.frames = []);
              }),
              (t.prototype.extractFrameCount_ = function (t) {
                if (
                  (c.assert(
                    null === this.frames,
                    'We already have a frame buffer'
                  ),
                  t.length <= 6)
                ) {
                  var e = Number(t);
                  if (!isNaN(e)) return this.handleNewFrameCount_(e), null;
                }
                return this.handleNewFrameCount_(1), t;
              }),
              (t.prototype.handleIncomingFrame = function (t) {
                if (null !== this.mySock) {
                  var e = t.data;
                  if (
                    ((this.bytesReceived += e.length),
                    this.stats_.incrementCounter('bytes_received', e.length),
                    this.resetKeepAlive(),
                    null !== this.frames)
                  )
                    this.appendFrame_(e);
                  else {
                    var n = this.extractFrameCount_(e);
                    null !== n && this.appendFrame_(n);
                  }
                }
              }),
              (t.prototype.send = function (t) {
                this.resetKeepAlive();
                var e = c.stringify(t);
                (this.bytesSent += e.length),
                  this.stats_.incrementCounter('bytes_sent', e.length);
                var n = M(e, 16384);
                n.length > 1 && this.sendString_(String(n.length));
                for (var r = 0; r < n.length; r++) this.sendString_(n[r]);
              }),
              (t.prototype.shutdown_ = function () {
                (this.isClosed_ = !0),
                  this.keepaliveTimer &&
                    (clearInterval(this.keepaliveTimer),
                    (this.keepaliveTimer = null)),
                  this.mySock && (this.mySock.close(), (this.mySock = null));
              }),
              (t.prototype.onClosed_ = function () {
                this.isClosed_ ||
                  (this.log_('WebSocket is closing itself'),
                  this.shutdown_(),
                  this.onDisconnect &&
                    (this.onDisconnect(this.everConnected_),
                    (this.onDisconnect = null)));
              }),
              (t.prototype.close = function () {
                this.isClosed_ ||
                  (this.log_('WebSocket is being closed'), this.shutdown_());
              }),
              (t.prototype.resetKeepAlive = function () {
                var t = this;
                clearInterval(this.keepaliveTimer),
                  (this.keepaliveTimer = setInterval(function () {
                    t.mySock && t.sendString_('0'), t.resetKeepAlive();
                  }, Math.floor(45e3)));
              }),
              (t.prototype.sendString_ = function (t) {
                try {
                  this.mySock.send(t);
                } catch (e) {
                  this.log_(
                    'Exception thrown from WebSocket.send():',
                    e.message || e.data,
                    'Closing connection.'
                  ),
                    setTimeout(this.onClosed_.bind(this), 0);
                }
              }),
              (t.responsesRequiredToBeHealthy = 2),
              (t.healthyTimeout = 3e4),
              t
            );
          })(),
          Ze = (function () {
            function t(t) {
              this.initTransports_(t);
            }
            return (
              Object.defineProperty(t, 'ALL_TRANSPORTS', {
                get: function () {
                  return [ze, Je];
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.initTransports_ = function (e) {
                var n,
                  r,
                  i = Je && Je.isAvailable(),
                  o = i && !Je.previouslyFailed();
                if (
                  (e.webSocketOnly &&
                    (i ||
                      A(
                        "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                      ),
                    (o = !0)),
                  o)
                )
                  this.transports_ = [Je];
                else {
                  var a = (this.transports_ = []);
                  try {
                    for (
                      var s = u.__values(t.ALL_TRANSPORTS), c = s.next();
                      !c.done;
                      c = s.next()
                    ) {
                      var h = c.value;
                      h && h.isAvailable() && a.push(h);
                    }
                  } catch (l) {
                    n = {
                      error: l,
                    };
                  } finally {
                    try {
                      c && !c.done && (r = s.return) && r.call(s);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
              }),
              (t.prototype.initialTransport = function () {
                if (this.transports_.length > 0) return this.transports_[0];
                throw new Error('No transports available');
              }),
              (t.prototype.upgradeTransport = function () {
                return this.transports_.length > 1 ? this.transports_[1] : null;
              }),
              t
            );
          })(),
          tn = (function () {
            function t(t, e, n, r, i, o, a) {
              (this.id = t),
                (this.repoInfo_ = e),
                (this.onMessage_ = n),
                (this.onReady_ = r),
                (this.onDisconnect_ = i),
                (this.onKill_ = o),
                (this.lastSessionId = a),
                (this.connectionCount = 0),
                (this.pendingDataMessages = []),
                (this.state_ = 0),
                (this.log_ = I('c:' + this.id + ':')),
                (this.transportManager_ = new Ze(e)),
                this.log_('Connection created'),
                this.start_();
            }
            return (
              (t.prototype.start_ = function () {
                var t = this,
                  e = this.transportManager_.initialTransport();
                (this.conn_ = new e(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  void 0,
                  this.lastSessionId
                )),
                  (this.primaryResponsesRequired_ =
                    e.responsesRequiredToBeHealthy || 0);
                var n = this.connReceiver_(this.conn_),
                  r = this.disconnReceiver_(this.conn_);
                (this.tx_ = this.conn_),
                  (this.rx_ = this.conn_),
                  (this.secondaryConn_ = null),
                  (this.isHealthy_ = !1),
                  setTimeout(function () {
                    t.conn_ && t.conn_.open(n, r);
                  }, Math.floor(0));
                var i = e.healthyTimeout || 0;
                i > 0 &&
                  (this.healthyTimeout_ = q(function () {
                    (t.healthyTimeout_ = null),
                      t.isHealthy_ ||
                        (t.conn_ && t.conn_.bytesReceived > 102400
                          ? (t.log_(
                              'Connection exceeded healthy timeout but has received ' +
                                t.conn_.bytesReceived +
                                ' bytes.  Marking connection healthy.'
                            ),
                            (t.isHealthy_ = !0),
                            t.conn_.markConnectionHealthy())
                          : t.conn_ && t.conn_.bytesSent > 10240
                          ? t.log_(
                              'Connection exceeded healthy timeout but has sent ' +
                                t.conn_.bytesSent +
                                ' bytes.  Leaving connection alive.'
                            )
                          : (t.log_(
                              'Closing unhealthy connection after timeout.'
                            ),
                            t.close()));
                  }, Math.floor(i)));
              }),
              (t.prototype.nextTransportId_ = function () {
                return 'c:' + this.id + ':' + this.connectionCount++;
              }),
              (t.prototype.disconnReceiver_ = function (t) {
                var e = this;
                return function (n) {
                  t === e.conn_
                    ? e.onConnectionLost_(n)
                    : t === e.secondaryConn_
                    ? (e.log_('Secondary connection lost.'),
                      e.onSecondaryConnectionLost_())
                    : e.log_('closing an old connection');
                };
              }),
              (t.prototype.connReceiver_ = function (t) {
                var e = this;
                return function (n) {
                  2 !== e.state_ &&
                    (t === e.rx_
                      ? e.onPrimaryMessageReceived_(n)
                      : t === e.secondaryConn_
                      ? e.onSecondaryMessageReceived_(n)
                      : e.log_('message on old connection'));
                };
              }),
              (t.prototype.sendRequest = function (t) {
                var e = {
                  t: 'd',
                  d: t,
                };
                this.sendData_(e);
              }),
              (t.prototype.tryCleanupConnection = function () {
                this.tx_ === this.secondaryConn_ &&
                  this.rx_ === this.secondaryConn_ &&
                  (this.log_(
                    'cleaning up and promoting a connection: ' +
                      this.secondaryConn_.connId
                  ),
                  (this.conn_ = this.secondaryConn_),
                  (this.secondaryConn_ = null));
              }),
              (t.prototype.onSecondaryControl_ = function (t) {
                if ('t' in t) {
                  var e = t.t;
                  'a' === e
                    ? this.upgradeIfSecondaryHealthy_()
                    : 'r' === e
                    ? (this.log_('Got a reset on secondary, closing it'),
                      this.secondaryConn_.close(),
                      (this.tx_ !== this.secondaryConn_ &&
                        this.rx_ !== this.secondaryConn_) ||
                        this.close())
                    : 'o' === e &&
                      (this.log_('got pong on secondary.'),
                      this.secondaryResponsesRequired_--,
                      this.upgradeIfSecondaryHealthy_());
                }
              }),
              (t.prototype.onSecondaryMessageReceived_ = function (t) {
                var e = D('t', t),
                  n = D('d', t);
                if ('c' === e) this.onSecondaryControl_(n);
                else {
                  if ('d' !== e)
                    throw new Error('Unknown protocol layer: ' + e);
                  this.pendingDataMessages.push(n);
                }
              }),
              (t.prototype.upgradeIfSecondaryHealthy_ = function () {
                this.secondaryResponsesRequired_ <= 0
                  ? (this.log_('Secondary connection is healthy.'),
                    (this.isHealthy_ = !0),
                    this.secondaryConn_.markConnectionHealthy(),
                    this.proceedWithUpgrade_())
                  : (this.log_('sending ping on secondary.'),
                    this.secondaryConn_.send({
                      t: 'c',
                      d: {
                        t: 'p',
                        d: {},
                      },
                    }));
              }),
              (t.prototype.proceedWithUpgrade_ = function () {
                this.secondaryConn_.start(),
                  this.log_('sending client ack on secondary'),
                  this.secondaryConn_.send({
                    t: 'c',
                    d: {
                      t: 'a',
                      d: {},
                    },
                  }),
                  this.log_('Ending transmission on primary'),
                  this.conn_.send({
                    t: 'c',
                    d: {
                      t: 'n',
                      d: {},
                    },
                  }),
                  (this.tx_ = this.secondaryConn_),
                  this.tryCleanupConnection();
              }),
              (t.prototype.onPrimaryMessageReceived_ = function (t) {
                var e = D('t', t),
                  n = D('d', t);
                'c' === e
                  ? this.onControl_(n)
                  : 'd' === e && this.onDataMessage_(n);
              }),
              (t.prototype.onDataMessage_ = function (t) {
                this.onPrimaryResponse_(), this.onMessage_(t);
              }),
              (t.prototype.onPrimaryResponse_ = function () {
                this.isHealthy_ ||
                  (this.primaryResponsesRequired_--,
                  this.primaryResponsesRequired_ <= 0 &&
                    (this.log_('Primary connection is healthy.'),
                    (this.isHealthy_ = !0),
                    this.conn_.markConnectionHealthy()));
              }),
              (t.prototype.onControl_ = function (t) {
                var e = D('t', t);
                if ('d' in t) {
                  var n = t.d;
                  if ('h' === e) this.onHandshake_(n);
                  else if ('n' === e) {
                    this.log_('recvd end transmission on primary'),
                      (this.rx_ = this.secondaryConn_);
                    for (var r = 0; r < this.pendingDataMessages.length; ++r)
                      this.onDataMessage_(this.pendingDataMessages[r]);
                    (this.pendingDataMessages = []),
                      this.tryCleanupConnection();
                  } else
                    's' === e
                      ? this.onConnectionShutdown_(n)
                      : 'r' === e
                      ? this.onReset_(n)
                      : 'e' === e
                      ? T('Server Error: ' + n)
                      : 'o' === e
                      ? (this.log_('got pong on primary.'),
                        this.onPrimaryResponse_(),
                        this.sendPingOnPrimaryIfNecessary_())
                      : T('Unknown control packet command: ' + e);
                }
              }),
              (t.prototype.onHandshake_ = function (t) {
                var e = t.ts,
                  n = t.v,
                  r = t.h;
                (this.sessionId = t.s),
                  this.repoInfo_.updateHost(r),
                  0 === this.state_ &&
                    (this.conn_.start(),
                    this.onConnectionEstablished_(this.conn_, e),
                    Q !== n && A('Protocol version mismatch detected'),
                    this.tryStartUpgrade_());
              }),
              (t.prototype.tryStartUpgrade_ = function () {
                var t = this.transportManager_.upgradeTransport();
                t && this.startUpgrade_(t);
              }),
              (t.prototype.startUpgrade_ = function (t) {
                var e = this;
                (this.secondaryConn_ = new t(
                  this.nextTransportId_(),
                  this.repoInfo_,
                  this.sessionId
                )),
                  (this.secondaryResponsesRequired_ =
                    t.responsesRequiredToBeHealthy || 0);
                var n = this.connReceiver_(this.secondaryConn_),
                  r = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, r),
                  q(function () {
                    e.secondaryConn_ &&
                      (e.log_('Timed out trying to upgrade.'),
                      e.secondaryConn_.close());
                  }, Math.floor(6e4));
              }),
              (t.prototype.onReset_ = function (t) {
                this.log_('Reset packet received.  New host: ' + t),
                  this.repoInfo_.updateHost(t),
                  1 === this.state_
                    ? this.close()
                    : (this.closeConnections_(), this.start_());
              }),
              (t.prototype.onConnectionEstablished_ = function (t, e) {
                var n = this;
                this.log_('Realtime connection established.'),
                  (this.conn_ = t),
                  (this.state_ = 1),
                  this.onReady_ &&
                    (this.onReady_(e, this.sessionId), (this.onReady_ = null)),
                  0 === this.primaryResponsesRequired_
                    ? (this.log_('Primary connection is healthy.'),
                      (this.isHealthy_ = !0))
                    : q(function () {
                        n.sendPingOnPrimaryIfNecessary_();
                      }, Math.floor(5e3));
              }),
              (t.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                this.isHealthy_ ||
                  1 !== this.state_ ||
                  (this.log_('sending ping on primary.'),
                  this.sendData_({
                    t: 'c',
                    d: {
                      t: 'p',
                      d: {},
                    },
                  }));
              }),
              (t.prototype.onSecondaryConnectionLost_ = function () {
                var t = this.secondaryConn_;
                (this.secondaryConn_ = null),
                  (this.tx_ !== t && this.rx_ !== t) || this.close();
              }),
              (t.prototype.onConnectionLost_ = function (t) {
                (this.conn_ = null),
                  t || 0 !== this.state_
                    ? 1 === this.state_ &&
                      this.log_('Realtime connection lost.')
                    : (this.log_('Realtime connection failed.'),
                      this.repoInfo_.isCacheableHost() &&
                        (v.remove('host:' + this.repoInfo_.host),
                        (this.repoInfo_.internalHost = this.repoInfo_.host))),
                  this.close();
              }),
              (t.prototype.onConnectionShutdown_ = function (t) {
                this.log_(
                  'Connection shutdown command received. Shutting down...'
                ),
                  this.onKill_ && (this.onKill_(t), (this.onKill_ = null)),
                  (this.onDisconnect_ = null),
                  this.close();
              }),
              (t.prototype.sendData_ = function (t) {
                if (1 !== this.state_) throw 'Connection is not connected';
                this.tx_.send(t);
              }),
              (t.prototype.close = function () {
                2 !== this.state_ &&
                  (this.log_('Closing realtime connection.'),
                  (this.state_ = 2),
                  this.closeConnections_(),
                  this.onDisconnect_ &&
                    (this.onDisconnect_(), (this.onDisconnect_ = null)));
              }),
              (t.prototype.closeConnections_ = function () {
                this.log_('Shutting down all connections'),
                  this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                  this.secondaryConn_ &&
                    (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
                  this.healthyTimeout_ &&
                    (clearTimeout(this.healthyTimeout_),
                    (this.healthyTimeout_ = null));
              }),
              t
            );
          })(),
          en = (function () {
            function t() {}
            return (
              (t.prototype.put = function (t, e, n, r) {}),
              (t.prototype.merge = function (t, e, n, r) {}),
              (t.prototype.refreshAuthToken = function (t) {}),
              (t.prototype.onDisconnectPut = function (t, e, n) {}),
              (t.prototype.onDisconnectMerge = function (t, e, n) {}),
              (t.prototype.onDisconnectCancel = function (t, e) {}),
              (t.prototype.reportStats = function (t) {}),
              t
            );
          })(),
          nn = 1e3,
          rn = (function (t) {
            function e(n, r, i, o, a, s) {
              var u = t.call(this) || this;
              if (
                ((u.repoInfo_ = n),
                (u.onDataUpdate_ = r),
                (u.onConnectStatus_ = i),
                (u.onServerInfoUpdate_ = o),
                (u.authTokenProvider_ = a),
                (u.authOverride_ = s),
                (u.id = e.nextPersistentConnectionId_++),
                (u.log_ = I('p:' + u.id + ':')),
                (u.interruptReasons_ = {}),
                (u.listens = new Map()),
                (u.outstandingPuts_ = []),
                (u.outstandingPutCount_ = 0),
                (u.onDisconnectRequestQueue_ = []),
                (u.connected_ = !1),
                (u.reconnectDelay_ = nn),
                (u.maxReconnectDelay_ = 3e5),
                (u.securityDebugCallback_ = null),
                (u.lastSessionId = null),
                (u.establishConnectionTimer_ = null),
                (u.visible_ = !1),
                (u.requestCBHash_ = {}),
                (u.requestNumber_ = 0),
                (u.realtime_ = null),
                (u.authToken_ = null),
                (u.forceTokenRefresh_ = !1),
                (u.invalidAuthTokenCount_ = 0),
                (u.firstConnection_ = !0),
                (u.lastConnectionAttemptTime_ = null),
                (u.lastConnectionEstablishedTime_ = null),
                s && !c.isNodeSdk())
              )
                throw new Error(
                  'Auth override specified in options, but not supported on non Node.js platforms'
                );
              return (
                u.scheduleConnect_(0),
                Be.getInstance().on('visible', u.onVisible_, u),
                -1 === n.host.indexOf('fblocal') &&
                  He.getInstance().on('online', u.onOnline_, u),
                u
              );
            }
            return (
              u.__extends(e, t),
              (e.prototype.sendRequest = function (t, e, n) {
                var r = ++this.requestNumber_,
                  i = {
                    r: r,
                    a: t,
                    b: e,
                  };
                this.log_(c.stringify(i)),
                  c.assert(
                    this.connected_,
                    "sendRequest call when we're not connected not allowed."
                  ),
                  this.realtime_.sendRequest(i),
                  n && (this.requestCBHash_[r] = n);
              }),
              (e.prototype.listen = function (t, e, n, r) {
                var i = t.queryIdentifier(),
                  o = t.path.toString();
                this.log_('Listen called for ' + o + ' ' + i),
                  this.listens.has(o) || this.listens.set(o, new Map()),
                  c.assert(
                    t.getQueryParams().isDefault() ||
                      !t.getQueryParams().loadsAllData(),
                    'listen() called for non-default but complete query'
                  ),
                  c.assert(
                    !this.listens.get(o).has(i),
                    'listen() called twice for same path/queryId.'
                  );
                var a = {
                  onComplete: r,
                  hashFn: e,
                  query: t,
                  tag: n,
                };
                this.listens.get(o).set(i, a),
                  this.connected_ && this.sendListen_(a);
              }),
              (e.prototype.sendListen_ = function (t) {
                var n = this,
                  r = t.query,
                  i = r.path.toString(),
                  o = r.queryIdentifier();
                this.log_('Listen on ' + i + ' for ' + o);
                var a = {
                  p: i,
                };
                t.tag && ((a.q = r.queryObject()), (a.t = t.tag)),
                  (a.h = t.hashFn()),
                  this.sendRequest('q', a, function (a) {
                    var s = a.d,
                      u = a.s;
                    e.warnOnListenWarnings_(s, r),
                      (n.listens.get(i) && n.listens.get(i).get(o)) === t &&
                        (n.log_('listen response', a),
                        'ok' !== u && n.removeListen_(i, o),
                        t.onComplete && t.onComplete(u, s));
                  });
              }),
              (e.warnOnListenWarnings_ = function (t, e) {
                if (t && 'object' === i(t) && c.contains(t, 'w')) {
                  var n = c.safeGet(t, 'w');
                  if (Array.isArray(n) && ~n.indexOf('no_index')) {
                    var r =
                        '".indexOn": "' +
                        e.getQueryParams().getIndex().toString() +
                        '"',
                      o = e.path.toString();
                    A(
                      'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                        r +
                        ' at ' +
                        o +
                        ' to your security rules for better performance.'
                    );
                  }
                }
              }),
              (e.prototype.refreshAuthToken = function (t) {
                (this.authToken_ = t),
                  this.log_('Auth token refreshed'),
                  this.authToken_
                    ? this.tryAuth()
                    : this.connected_ &&
                      this.sendRequest('unauth', {}, function () {}),
                  this.reduceReconnectDelayIfAdminCredential_(t);
              }),
              (e.prototype.reduceReconnectDelayIfAdminCredential_ = function (
                t
              ) {
                ((t && 40 === t.length) || c.isAdmin(t)) &&
                  (this.log_(
                    'Admin auth credential detected.  Reducing max reconnect time.'
                  ),
                  (this.maxReconnectDelay_ = 3e4));
              }),
              (e.prototype.tryAuth = function () {
                var t = this;
                if (this.connected_ && this.authToken_) {
                  var e = this.authToken_,
                    n = c.isValidFormat(e) ? 'auth' : 'gauth',
                    r = {
                      cred: e,
                    };
                  null === this.authOverride_
                    ? (r.noauth = !0)
                    : 'object' === i(this.authOverride_) &&
                      (r.authvar = this.authOverride_),
                    this.sendRequest(n, r, function (n) {
                      var r = n.s,
                        i = n.d || 'error';
                      t.authToken_ === e &&
                        ('ok' === r
                          ? (t.invalidAuthTokenCount_ = 0)
                          : t.onAuthRevoked_(r, i));
                    });
                }
              }),
              (e.prototype.unlisten = function (t, e) {
                var n = t.path.toString(),
                  r = t.queryIdentifier();
                this.log_('Unlisten called for ' + n + ' ' + r),
                  c.assert(
                    t.getQueryParams().isDefault() ||
                      !t.getQueryParams().loadsAllData(),
                    'unlisten() called for non-default but complete query'
                  ),
                  this.removeListen_(n, r) &&
                    this.connected_ &&
                    this.sendUnlisten_(n, r, t.queryObject(), e);
              }),
              (e.prototype.sendUnlisten_ = function (t, e, n, r) {
                this.log_('Unlisten on ' + t + ' for ' + e);
                var i = {
                  p: t,
                };
                r && ((i.q = n), (i.t = r)), this.sendRequest('n', i);
              }),
              (e.prototype.onDisconnectPut = function (t, e, n) {
                this.connected_
                  ? this.sendOnDisconnect_('o', t, e, n)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: 'o',
                      data: e,
                      onComplete: n,
                    });
              }),
              (e.prototype.onDisconnectMerge = function (t, e, n) {
                this.connected_
                  ? this.sendOnDisconnect_('om', t, e, n)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: 'om',
                      data: e,
                      onComplete: n,
                    });
              }),
              (e.prototype.onDisconnectCancel = function (t, e) {
                this.connected_
                  ? this.sendOnDisconnect_('oc', t, null, e)
                  : this.onDisconnectRequestQueue_.push({
                      pathString: t,
                      action: 'oc',
                      data: null,
                      onComplete: e,
                    });
              }),
              (e.prototype.sendOnDisconnect_ = function (t, e, n, r) {
                var i = {
                  p: e,
                  d: n,
                };
                this.log_('onDisconnect ' + t, i),
                  this.sendRequest(t, i, function (t) {
                    r &&
                      setTimeout(function () {
                        r(t.s, t.d);
                      }, Math.floor(0));
                  });
              }),
              (e.prototype.put = function (t, e, n, r) {
                this.putInternal('p', t, e, n, r);
              }),
              (e.prototype.merge = function (t, e, n, r) {
                this.putInternal('m', t, e, n, r);
              }),
              (e.prototype.putInternal = function (t, e, n, r, i) {
                var o = {
                  p: e,
                  d: n,
                };
                void 0 !== i && (o.h = i),
                  this.outstandingPuts_.push({
                    action: t,
                    request: o,
                    onComplete: r,
                  }),
                  this.outstandingPutCount_++;
                var a = this.outstandingPuts_.length - 1;
                this.connected_
                  ? this.sendPut_(a)
                  : this.log_('Buffering put: ' + e);
              }),
              (e.prototype.sendPut_ = function (t) {
                var e = this,
                  n = this.outstandingPuts_[t].action,
                  r = this.outstandingPuts_[t].request,
                  i = this.outstandingPuts_[t].onComplete;
                (this.outstandingPuts_[t].queued = this.connected_),
                  this.sendRequest(n, r, function (r) {
                    e.log_(n + ' response', r),
                      delete e.outstandingPuts_[t],
                      e.outstandingPutCount_--,
                      0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []),
                      i && i(r.s, r.d);
                  });
              }),
              (e.prototype.reportStats = function (t) {
                var e = this;
                if (this.connected_) {
                  var n = {
                    c: t,
                  };
                  this.log_('reportStats', n),
                    this.sendRequest('s', n, function (t) {
                      if ('ok' !== t.s) {
                        var n = t.d;
                        e.log_('reportStats', 'Error sending stats: ' + n);
                      }
                    });
                }
              }),
              (e.prototype.onDataMessage_ = function (t) {
                if ('r' in t) {
                  this.log_('from server: ' + c.stringify(t));
                  var e = t.r,
                    n = this.requestCBHash_[e];
                  n && (delete this.requestCBHash_[e], n(t.b));
                } else {
                  if ('error' in t)
                    throw 'A server-side error has occurred: ' + t.error;
                  'a' in t && this.onDataPush_(t.a, t.b);
                }
              }),
              (e.prototype.onDataPush_ = function (t, e) {
                this.log_('handleServerMessage', t, e),
                  'd' === t
                    ? this.onDataUpdate_(e.p, e.d, !1, e.t)
                    : 'm' === t
                    ? this.onDataUpdate_(e.p, e.d, !0, e.t)
                    : 'c' === t
                    ? this.onListenRevoked_(e.p, e.q)
                    : 'ac' === t
                    ? this.onAuthRevoked_(e.s, e.d)
                    : 'sd' === t
                    ? this.onSecurityDebugPacket_(e)
                    : T(
                        'Unrecognized action received from server: ' +
                          c.stringify(t) +
                          '\nAre you using the latest client?'
                      );
              }),
              (e.prototype.onReady_ = function (t, e) {
                this.log_('connection ready'),
                  (this.connected_ = !0),
                  (this.lastConnectionEstablishedTime_ = new Date().getTime()),
                  this.handleTimestamp_(t),
                  (this.lastSessionId = e),
                  this.firstConnection_ && this.sendConnectStats_(),
                  this.restoreState_(),
                  (this.firstConnection_ = !1),
                  this.onConnectStatus_(!0);
              }),
              (e.prototype.scheduleConnect_ = function (t) {
                var e = this;
                c.assert(
                  !this.realtime_,
                  "Scheduling a connect when we're already connected/ing?"
                ),
                  this.establishConnectionTimer_ &&
                    clearTimeout(this.establishConnectionTimer_),
                  (this.establishConnectionTimer_ = setTimeout(function () {
                    (e.establishConnectionTimer_ = null),
                      e.establishConnection_();
                  }, Math.floor(t)));
              }),
              (e.prototype.onVisible_ = function (t) {
                t &&
                  !this.visible_ &&
                  this.reconnectDelay_ === this.maxReconnectDelay_ &&
                  (this.log_('Window became visible.  Reducing delay.'),
                  (this.reconnectDelay_ = nn),
                  this.realtime_ || this.scheduleConnect_(0)),
                  (this.visible_ = t);
              }),
              (e.prototype.onOnline_ = function (t) {
                t
                  ? (this.log_('Browser went online.'),
                    (this.reconnectDelay_ = nn),
                    this.realtime_ || this.scheduleConnect_(0))
                  : (this.log_('Browser went offline.  Killing connection.'),
                    this.realtime_ && this.realtime_.close());
              }),
              (e.prototype.onRealtimeDisconnect_ = function () {
                if (
                  (this.log_('data client disconnected'),
                  (this.connected_ = !1),
                  (this.realtime_ = null),
                  this.cancelSentTransactions_(),
                  (this.requestCBHash_ = {}),
                  this.shouldReconnect_())
                ) {
                  if (this.visible_) {
                    if (this.lastConnectionEstablishedTime_) {
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ >
                        3e4 && (this.reconnectDelay_ = nn),
                        (this.lastConnectionEstablishedTime_ = null);
                    }
                  } else
                    this.log_("Window isn't visible.  Delaying reconnect."),
                      (this.reconnectDelay_ = this.maxReconnectDelay_),
                      (this.lastConnectionAttemptTime_ = new Date().getTime());
                  var t =
                      new Date().getTime() - this.lastConnectionAttemptTime_,
                    e = Math.max(0, this.reconnectDelay_ - t);
                  (e = Math.random() * e),
                    this.log_('Trying to reconnect in ' + e + 'ms'),
                    this.scheduleConnect_(e),
                    (this.reconnectDelay_ = Math.min(
                      this.maxReconnectDelay_,
                      1.3 * this.reconnectDelay_
                    ));
                }
                this.onConnectStatus_(!1);
              }),
              (e.prototype.establishConnection_ = function () {
                if (this.shouldReconnect_()) {
                  this.log_('Making a connection attempt'),
                    (this.lastConnectionAttemptTime_ = new Date().getTime()),
                    (this.lastConnectionEstablishedTime_ = null);
                  var t = this.onDataMessage_.bind(this),
                    n = this.onReady_.bind(this),
                    r = this.onRealtimeDisconnect_.bind(this),
                    i = this.id + ':' + e.nextConnectionId_++,
                    o = this,
                    a = this.lastSessionId,
                    s = !1,
                    u = null,
                    h = function () {
                      u ? u.close() : ((s = !0), r());
                    };
                  this.realtime_ = {
                    close: h,
                    sendRequest: function (t) {
                      c.assert(
                        u,
                        "sendRequest call when we're not connected not allowed."
                      ),
                        u.sendRequest(t);
                    },
                  };
                  var l = this.forceTokenRefresh_;
                  (this.forceTokenRefresh_ = !1),
                    this.authTokenProvider_
                      .getToken(l)
                      .then(function (e) {
                        s
                          ? S('getToken() completed but was canceled')
                          : (S('getToken() completed. Creating connection.'),
                            (o.authToken_ = e && e.accessToken),
                            (u = new tn(
                              i,
                              o.repoInfo_,
                              t,
                              n,
                              r,
                              function (t) {
                                A(t + ' (' + o.repoInfo_.toString() + ')'),
                                  o.interrupt('server_kill');
                              },
                              a
                            )));
                      })
                      .then(null, function (t) {
                        o.log_('Failed to get token: ' + t),
                          s || (c.CONSTANTS.NODE_ADMIN && A(t), h());
                      });
                }
              }),
              (e.prototype.interrupt = function (t) {
                S('Interrupting connection for reason: ' + t),
                  (this.interruptReasons_[t] = !0),
                  this.realtime_
                    ? this.realtime_.close()
                    : (this.establishConnectionTimer_ &&
                        (clearTimeout(this.establishConnectionTimer_),
                        (this.establishConnectionTimer_ = null)),
                      this.connected_ && this.onRealtimeDisconnect_());
              }),
              (e.prototype.resume = function (t) {
                S('Resuming connection for reason: ' + t),
                  delete this.interruptReasons_[t],
                  c.isEmpty(this.interruptReasons_) &&
                    ((this.reconnectDelay_ = nn),
                    this.realtime_ || this.scheduleConnect_(0));
              }),
              (e.prototype.handleTimestamp_ = function (t) {
                var e = t - new Date().getTime();
                this.onServerInfoUpdate_({
                  serverTimeOffset: e,
                });
              }),
              (e.prototype.cancelSentTransactions_ = function () {
                for (var t = 0; t < this.outstandingPuts_.length; t++) {
                  var e = this.outstandingPuts_[t];
                  e &&
                    'h' in e.request &&
                    e.queued &&
                    (e.onComplete && e.onComplete('disconnect'),
                    delete this.outstandingPuts_[t],
                    this.outstandingPutCount_--);
                }
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
              }),
              (e.prototype.onListenRevoked_ = function (t, e) {
                var n;
                n = e
                  ? e
                      .map(function (t) {
                        return L(t);
                      })
                      .join('$')
                  : 'default';
                var r = this.removeListen_(t, n);
                r && r.onComplete && r.onComplete('permission_denied');
              }),
              (e.prototype.removeListen_ = function (t, e) {
                var n,
                  r = new B(t).toString();
                if (this.listens.has(r)) {
                  var i = this.listens.get(r);
                  (n = i.get(e)),
                    i.delete(e),
                    0 === i.size && this.listens.delete(r);
                } else n = void 0;
                return n;
              }),
              (e.prototype.onAuthRevoked_ = function (t, e) {
                S('Auth token revoked: ' + t + '/' + e),
                  (this.authToken_ = null),
                  (this.forceTokenRefresh_ = !0),
                  this.realtime_.close(),
                  ('invalid_token' !== t && 'permission_denied' !== t) ||
                    (this.invalidAuthTokenCount_++,
                    this.invalidAuthTokenCount_ >= 3 &&
                      ((this.reconnectDelay_ = 3e4),
                      this.authTokenProvider_.notifyForInvalidToken()));
              }),
              (e.prototype.onSecurityDebugPacket_ = function (t) {
                this.securityDebugCallback_
                  ? this.securityDebugCallback_(t)
                  : 'msg' in t &&
                    console.log(
                      'FIREBASE: ' + t.msg.replace('\n', '\nFIREBASE: ')
                    );
              }),
              (e.prototype.restoreState_ = function () {
                var t, e, n, r;
                this.tryAuth();
                try {
                  for (
                    var i = u.__values(this.listens.values()), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    try {
                      for (
                        var s = ((n = void 0), u.__values(a.values())),
                          c = s.next();
                        !c.done;
                        c = s.next()
                      ) {
                        var h = c.value;
                        this.sendListen_(h);
                      }
                    } catch (p) {
                      n = {
                        error: p,
                      };
                    } finally {
                      try {
                        c && !c.done && (r = s.return) && r.call(s);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (d) {
                  t = {
                    error: d,
                  };
                } finally {
                  try {
                    o && !o.done && (e = i.return) && e.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                for (var l = 0; l < this.outstandingPuts_.length; l++)
                  this.outstandingPuts_[l] && this.sendPut_(l);
                for (; this.onDisconnectRequestQueue_.length; ) {
                  var f = this.onDisconnectRequestQueue_.shift();
                  this.sendOnDisconnect_(
                    f.action,
                    f.pathString,
                    f.data,
                    f.onComplete
                  );
                }
              }),
              (e.prototype.sendConnectStats_ = function () {
                var t = {},
                  e = 'js';
                c.CONSTANTS.NODE_ADMIN
                  ? (e = 'admin_node')
                  : c.CONSTANTS.NODE_CLIENT && (e = 'node'),
                  (t['sdk.' + e + '.' + Xe.replace(/\./g, '-')] = 1),
                  c.isMobileCordova()
                    ? (t['framework.cordova'] = 1)
                    : c.isReactNative() && (t['framework.reactnative'] = 1),
                  this.reportStats(t);
              }),
              (e.prototype.shouldReconnect_ = function () {
                var t = He.getInstance().currentlyOnline();
                return c.isEmpty(this.interruptReasons_) && t;
              }),
              (e.nextPersistentConnectionId_ = 0),
              (e.nextConnectionId_ = 0),
              e
            );
          })(en),
          on = (function (t) {
            function e(e, n, r) {
              var i = t.call(this) || this;
              return (
                (i.repoInfo_ = e),
                (i.onDataUpdate_ = n),
                (i.authTokenProvider_ = r),
                (i.log_ = I('p:rest:')),
                (i.listens_ = {}),
                i
              );
            }
            return (
              u.__extends(e, t),
              (e.prototype.reportStats = function (t) {
                throw new Error('Method not implemented.');
              }),
              (e.getListenId_ = function (t, e) {
                return void 0 !== e
                  ? 'tag$' + e
                  : (c.assert(
                      t.getQueryParams().isDefault(),
                      "should have a tag if it's not a default query."
                    ),
                    t.path.toString());
              }),
              (e.prototype.listen = function (t, n, r, i) {
                var o = this,
                  a = t.path.toString();
                this.log_('Listen called for ' + a + ' ' + t.queryIdentifier());
                var s = e.getListenId_(t, r),
                  u = {};
                this.listens_[s] = u;
                var h = t.getQueryParams().toRestQueryStringParameters();
                this.restRequest_(a + '.json', h, function (t, e) {
                  var n = e;
                  (404 === t && ((n = null), (t = null)),
                  null === t && o.onDataUpdate_(a, n, !1, r),
                  c.safeGet(o.listens_, s) === u) &&
                    i(
                      t
                        ? 401 === t
                          ? 'permission_denied'
                          : 'rest_error:' + t
                        : 'ok',
                      null
                    );
                });
              }),
              (e.prototype.unlisten = function (t, n) {
                var r = e.getListenId_(t, n);
                delete this.listens_[r];
              }),
              (e.prototype.refreshAuthToken = function (t) {}),
              (e.prototype.restRequest_ = function (t, e, n) {
                var r = this;
                void 0 === e && (e = {}),
                  (e.format = 'export'),
                  this.authTokenProvider_.getToken(!1).then(function (i) {
                    var o = i && i.accessToken;
                    o && (e.auth = o);
                    var a =
                      (r.repoInfo_.secure ? 'https://' : 'http://') +
                      r.repoInfo_.host +
                      t +
                      '?ns=' +
                      r.repoInfo_.namespace +
                      c.querystring(e);
                    r.log_('Sending REST request for ' + a);
                    var s = new XMLHttpRequest();
                    (s.onreadystatechange = function () {
                      if (n && 4 === s.readyState) {
                        r.log_(
                          'REST Response for ' + a + ' received. status:',
                          s.status,
                          'response:',
                          s.responseText
                        );
                        var t = null;
                        if (s.status >= 200 && s.status < 300) {
                          try {
                            t = c.jsonEval(s.responseText);
                          } catch (e) {
                            A(
                              'Failed to parse JSON response for ' +
                                a +
                                ': ' +
                                s.responseText
                            );
                          }
                          n(null, t);
                        } else
                          401 !== s.status &&
                            404 !== s.status &&
                            A(
                              'Got unsuccessful REST response for ' +
                                a +
                                ' Status: ' +
                                s.status
                            ),
                            n(s.status);
                        n = null;
                      }
                    }),
                      s.open('GET', a, !0),
                      s.send();
                  });
              }),
              e
            );
          })(en),
          an = 'repo_interrupt',
          sn = (function () {
            function t(t, e, n, r) {
              var o = this;
              (this.repoInfo_ = t),
                (this.app = n),
                (this.dataUpdateCount = 0),
                (this.statsListener_ = null),
                (this.eventQueue_ = new Ve()),
                (this.nextWriteId_ = 1),
                (this.interceptServerDataCallback_ = null),
                (this.onDisconnect_ = new ae()),
                (this.persistentConnection_ = null);
              var a = new Le(n, r);
              if (
                ((this.stats_ = Fe.getCollection(t)),
                e ||
                  (
                    ('object' ===
                      ('undefined' === typeof window
                        ? 'undefined'
                        : i(window)) &&
                      window.navigator &&
                      window.navigator.userAgent) ||
                    ''
                  ).search(
                    /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
                  ) >= 0)
              )
                (this.server_ = new on(
                  this.repoInfo_,
                  this.onDataUpdate_.bind(this),
                  a
                )),
                  setTimeout(this.onConnectStatus_.bind(this, !0), 0);
              else {
                var s = n.options.databaseAuthVariableOverride;
                if ('undefined' !== typeof s && null !== s) {
                  if ('object' !== i(s))
                    throw new Error(
                      'Only objects are supported for option databaseAuthVariableOverride'
                    );
                  try {
                    c.stringify(s);
                  } catch (u) {
                    throw new Error('Invalid authOverride provided: ' + u);
                  }
                }
                (this.persistentConnection_ = new rn(
                  this.repoInfo_,
                  this.onDataUpdate_.bind(this),
                  this.onConnectStatus_.bind(this),
                  this.onServerInfoUpdate_.bind(this),
                  a,
                  s
                )),
                  (this.server_ = this.persistentConnection_);
              }
              a.addTokenChangeListener(function (t) {
                o.server_.refreshAuthToken(t);
              }),
                (this.statsReporter_ = Fe.getOrCreateReporter(t, function () {
                  return new Ue(o.stats_, o.server_);
                })),
                this.transactionsInit_(),
                (this.infoData_ = new De()),
                (this.infoSyncTree_ = new Re({
                  startListening: function (t, e, n, r) {
                    var i = [],
                      a = o.infoData_.getNode(t.path);
                    return (
                      a.isEmpty() ||
                        ((i = o.infoSyncTree_.applyServerOverwrite(t.path, a)),
                        setTimeout(function () {
                          r('ok');
                        }, 0)),
                      i
                    );
                  },
                  stopListening: function () {},
                })),
                this.updateInfo_('connected', !1),
                (this.serverSyncTree_ = new Re({
                  startListening: function (t, e, n, r) {
                    return (
                      o.server_.listen(t, n, e, function (e, n) {
                        var i = r(e, n);
                        o.eventQueue_.raiseEventsForChangedPath(t.path, i);
                      }),
                      []
                    );
                  },
                  stopListening: function (t, e) {
                    o.server_.unlisten(t, e);
                  },
                }));
            }
            return (
              (t.prototype.toString = function () {
                return (
                  (this.repoInfo_.secure ? 'https://' : 'http://') +
                  this.repoInfo_.host
                );
              }),
              (t.prototype.name = function () {
                return this.repoInfo_.namespace;
              }),
              (t.prototype.serverTime = function () {
                var t =
                  this.infoData_
                    .getNode(new B('.info/serverTimeOffset'))
                    .val() || 0;
                return new Date().getTime() + t;
              }),
              (t.prototype.generateServerValues = function () {
                return (
                  ((t =
                    (t = {
                      timestamp: this.serverTime(),
                    }) || {}).timestamp = t.timestamp || new Date().getTime()),
                  t
                );
                var t;
              }),
              (t.prototype.onDataUpdate_ = function (t, e, n, r) {
                this.dataUpdateCount++;
                var i = new B(t);
                e = this.interceptServerDataCallback_
                  ? this.interceptServerDataCallback_(t, e)
                  : e;
                var o = [];
                if (r)
                  if (n) {
                    var a = c.map(e, function (t) {
                      return Yt(t);
                    });
                    o = this.serverSyncTree_.applyTaggedQueryMerge(i, a, r);
                  } else {
                    var s = Yt(e);
                    o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, s, r);
                  }
                else if (n) {
                  var u = c.map(e, function (t) {
                    return Yt(t);
                  });
                  o = this.serverSyncTree_.applyServerMerge(i, u);
                } else {
                  var h = Yt(e);
                  o = this.serverSyncTree_.applyServerOverwrite(i, h);
                }
                var l = i;
                o.length > 0 && (l = this.rerunTransactions_(i)),
                  this.eventQueue_.raiseEventsForChangedPath(l, o);
              }),
              (t.prototype.interceptServerData_ = function (t) {
                this.interceptServerDataCallback_ = t;
              }),
              (t.prototype.onConnectStatus_ = function (t) {
                this.updateInfo_('connected', t),
                  !1 === t && this.runOnDisconnectEvents_();
              }),
              (t.prototype.onServerInfoUpdate_ = function (t) {
                var e = this;
                F(t, function (t, n) {
                  e.updateInfo_(t, n);
                });
              }),
              (t.prototype.updateInfo_ = function (t, e) {
                var n = new B('/.info/' + t),
                  r = Yt(e);
                this.infoData_.updateSnapshot(n, r);
                var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                this.eventQueue_.raiseEventsForChangedPath(n, i);
              }),
              (t.prototype.getNextWriteId_ = function () {
                return this.nextWriteId_++;
              }),
              (t.prototype.setWithPriority = function (t, e, n, r) {
                var i = this;
                this.log_('set', {
                  path: t.toString(),
                  value: e,
                  priority: n,
                });
                var o = this.generateServerValues(),
                  a = Yt(e, n),
                  s = ue(a, o),
                  u = this.getNextWriteId_(),
                  c = this.serverSyncTree_.applyUserOverwrite(t, s, u, !0);
                this.eventQueue_.queueEvents(c),
                  this.server_.put(t.toString(), a.val(!0), function (e, n) {
                    var o = 'ok' === e;
                    o || A('set at ' + t + ' failed: ' + e);
                    var a = i.serverSyncTree_.ackUserWrite(u, !o);
                    i.eventQueue_.raiseEventsForChangedPath(t, a),
                      i.callOnCompleteCallback(r, e, n);
                  });
                var h = this.abortTransactions_(t);
                this.rerunTransactions_(h),
                  this.eventQueue_.raiseEventsForChangedPath(h, []);
              }),
              (t.prototype.update = function (t, e, n) {
                var r = this;
                this.log_('update', {
                  path: t.toString(),
                  value: e,
                });
                var i = !0,
                  o = this.generateServerValues(),
                  a = {};
                if (
                  (F(e, function (t, e) {
                    i = !1;
                    var n = Yt(e);
                    a[t] = ue(n, o);
                  }),
                  i)
                )
                  S("update() called with empty data.  Don't do anything."),
                    this.callOnCompleteCallback(n, 'ok');
                else {
                  var s = this.getNextWriteId_(),
                    u = this.serverSyncTree_.applyUserMerge(t, a, s);
                  this.eventQueue_.queueEvents(u),
                    this.server_.merge(t.toString(), e, function (e, i) {
                      var o = 'ok' === e;
                      o || A('update at ' + t + ' failed: ' + e);
                      var a = r.serverSyncTree_.ackUserWrite(s, !o),
                        u = a.length > 0 ? r.rerunTransactions_(t) : t;
                      r.eventQueue_.raiseEventsForChangedPath(u, a),
                        r.callOnCompleteCallback(n, e, i);
                    }),
                    F(e, function (e) {
                      var n = r.abortTransactions_(t.child(e));
                      r.rerunTransactions_(n);
                    }),
                    this.eventQueue_.raiseEventsForChangedPath(t, []);
                }
              }),
              (t.prototype.runOnDisconnectEvents_ = function () {
                var t = this;
                this.log_('onDisconnectEvents');
                var e = this.generateServerValues(),
                  n = (function (t, e) {
                    var n = new ae();
                    return (
                      t.forEachTree(new B(''), function (t, r) {
                        n.remember(t, ue(r, e));
                      }),
                      n
                    );
                  })(this.onDisconnect_, e),
                  r = [];
                n.forEachTree(B.Empty, function (e, n) {
                  r = r.concat(t.serverSyncTree_.applyServerOverwrite(e, n));
                  var i = t.abortTransactions_(e);
                  t.rerunTransactions_(i);
                }),
                  (this.onDisconnect_ = new ae()),
                  this.eventQueue_.raiseEventsForChangedPath(B.Empty, r);
              }),
              (t.prototype.onDisconnectCancel = function (t, e) {
                var n = this;
                this.server_.onDisconnectCancel(t.toString(), function (r, i) {
                  'ok' === r && n.onDisconnect_.forget(t),
                    n.callOnCompleteCallback(e, r, i);
                });
              }),
              (t.prototype.onDisconnectSet = function (t, e, n) {
                var r = this,
                  i = Yt(e);
                this.server_.onDisconnectPut(
                  t.toString(),
                  i.val(!0),
                  function (e, o) {
                    'ok' === e && r.onDisconnect_.remember(t, i),
                      r.callOnCompleteCallback(n, e, o);
                  }
                );
              }),
              (t.prototype.onDisconnectSetWithPriority = function (t, e, n, r) {
                var i = this,
                  o = Yt(e, n);
                this.server_.onDisconnectPut(
                  t.toString(),
                  o.val(!0),
                  function (e, n) {
                    'ok' === e && i.onDisconnect_.remember(t, o),
                      i.callOnCompleteCallback(r, e, n);
                  }
                );
              }),
              (t.prototype.onDisconnectUpdate = function (t, e, n) {
                var r = this;
                if (c.isEmpty(e))
                  return (
                    S(
                      "onDisconnect().update() called with empty data.  Don't do anything."
                    ),
                    void this.callOnCompleteCallback(n, 'ok')
                  );
                this.server_.onDisconnectMerge(
                  t.toString(),
                  e,
                  function (i, o) {
                    'ok' === i &&
                      F(e, function (e, n) {
                        var i = Yt(n);
                        r.onDisconnect_.remember(t.child(e), i);
                      }),
                      r.callOnCompleteCallback(n, i, o);
                  }
                );
              }),
              (t.prototype.addEventCallbackForQuery = function (t, e) {
                var n;
                (n =
                  '.info' === t.path.getFront()
                    ? this.infoSyncTree_.addEventRegistration(t, e)
                    : this.serverSyncTree_.addEventRegistration(t, e)),
                  this.eventQueue_.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.removeEventCallbackForQuery = function (t, e) {
                var n;
                (n =
                  '.info' === t.path.getFront()
                    ? this.infoSyncTree_.removeEventRegistration(t, e)
                    : this.serverSyncTree_.removeEventRegistration(t, e)),
                  this.eventQueue_.raiseEventsAtPath(t.path, n);
              }),
              (t.prototype.interrupt = function () {
                this.persistentConnection_ &&
                  this.persistentConnection_.interrupt(an);
              }),
              (t.prototype.resume = function () {
                this.persistentConnection_ &&
                  this.persistentConnection_.resume(an);
              }),
              (t.prototype.stats = function (t) {
                if (
                  (void 0 === t && (t = !1), 'undefined' !== typeof console)
                ) {
                  var e;
                  t
                    ? (this.statsListener_ ||
                        (this.statsListener_ = new je(this.stats_)),
                      (e = this.statsListener_.get()))
                    : (e = this.stats_.get());
                  var n = Object.keys(e).reduce(function (t, e) {
                    return Math.max(e.length, t);
                  }, 0);
                  F(e, function (t, e) {
                    for (var r = t, i = t.length; i < n + 2; i++) r += ' ';
                    console.log(r + e);
                  });
                }
              }),
              (t.prototype.statsIncrementCounter = function (t) {
                this.stats_.incrementCounter(t),
                  this.statsReporter_.includeStat(t);
              }),
              (t.prototype.log_ = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = '';
                this.persistentConnection_ &&
                  (n = this.persistentConnection_.id + ':'),
                  S.apply(void 0, u.__spread([n], t));
              }),
              (t.prototype.callOnCompleteCallback = function (t, e, n) {
                t &&
                  W(function () {
                    if ('ok' === e) t(null);
                    else {
                      var r = (e || 'error').toUpperCase(),
                        i = r;
                      n && (i += ': ' + n);
                      var o = new Error(i);
                      (o.code = r), t(o);
                    }
                  });
              }),
              Object.defineProperty(t.prototype, 'database', {
                get: function () {
                  return this.__database || (this.__database = new gn(this));
                },
                enumerable: !0,
                configurable: !0,
              }),
              t
            );
          })(),
          un = (function () {
            function t(e) {
              (this.indexedFilter_ = new be(e.getIndex())),
                (this.index_ = e.getIndex()),
                (this.startPost_ = t.getStartPost_(e)),
                (this.endPost_ = t.getEndPost_(e));
            }
            return (
              (t.prototype.getStartPost = function () {
                return this.startPost_;
              }),
              (t.prototype.getEndPost = function () {
                return this.endPost_;
              }),
              (t.prototype.matches = function (t) {
                return (
                  this.index_.compare(this.getStartPost(), t) <= 0 &&
                  this.index_.compare(t, this.getEndPost()) <= 0
                );
              }),
              (t.prototype.updateChild = function (t, e, n, r, i, o) {
                return (
                  this.matches(new Ct(e, n)) || (n = Gt.EMPTY_NODE),
                  this.indexedFilter_.updateChild(t, e, n, r, i, o)
                );
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                e.isLeafNode() && (e = Gt.EMPTY_NODE);
                var r = e.withIndex(this.index_);
                r = r.updatePriority(Gt.EMPTY_NODE);
                var i = this;
                return (
                  e.forEachChild(Lt, function (t, e) {
                    i.matches(new Ct(t, e)) ||
                      (r = r.updateImmediateChild(t, Gt.EMPTY_NODE));
                  }),
                  this.indexedFilter_.updateFullNode(t, r, n)
                );
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function () {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this.indexedFilter_;
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.getStartPost_ = function (t) {
                if (t.hasStart()) {
                  var e = t.getIndexStartName();
                  return t.getIndex().makePost(t.getIndexStartValue(), e);
                }
                return t.getIndex().minPost();
              }),
              (t.getEndPost_ = function (t) {
                if (t.hasEnd()) {
                  var e = t.getIndexEndName();
                  return t.getIndex().makePost(t.getIndexEndValue(), e);
                }
                return t.getIndex().maxPost();
              }),
              t
            );
          })(),
          cn = (function () {
            function t(t) {
              (this.rangedFilter_ = new un(t)),
                (this.index_ = t.getIndex()),
                (this.limit_ = t.getLimit()),
                (this.reverse_ = !t.isViewFromLeft());
            }
            return (
              (t.prototype.updateChild = function (t, e, n, r, i, o) {
                return (
                  this.rangedFilter_.matches(new Ct(e, n)) ||
                    (n = Gt.EMPTY_NODE),
                  t.getImmediateChild(e).equals(n)
                    ? t
                    : t.numChildren() < this.limit_
                    ? this.rangedFilter_
                        .getIndexedFilter()
                        .updateChild(t, e, n, r, i, o)
                    : this.fullLimitUpdateChild_(t, e, n, i, o)
                );
              }),
              (t.prototype.updateFullNode = function (t, e, n) {
                var r;
                if (e.isLeafNode() || e.isEmpty())
                  r = Gt.EMPTY_NODE.withIndex(this.index_);
                else if (
                  2 * this.limit_ < e.numChildren() &&
                  e.isIndexed(this.index_)
                ) {
                  r = Gt.EMPTY_NODE.withIndex(this.index_);
                  var i = void 0;
                  i = this.reverse_
                    ? e.getReverseIteratorFrom(
                        this.rangedFilter_.getEndPost(),
                        this.index_
                      )
                    : e.getIteratorFrom(
                        this.rangedFilter_.getStartPost(),
                        this.index_
                      );
                  for (var o = 0; i.hasNext() && o < this.limit_; ) {
                    var a = i.getNext();
                    if (
                      !(this.reverse_
                        ? this.index_.compare(
                            this.rangedFilter_.getStartPost(),
                            a
                          ) <= 0
                        : this.index_.compare(
                            a,
                            this.rangedFilter_.getEndPost()
                          ) <= 0)
                    )
                      break;
                    (r = r.updateImmediateChild(a.name, a.node)), o++;
                  }
                } else {
                  r = (r = e.withIndex(this.index_)).updatePriority(
                    Gt.EMPTY_NODE
                  );
                  var s = void 0,
                    u = void 0,
                    c = void 0;
                  i = void 0;
                  if (this.reverse_) {
                    (i = r.getReverseIterator(this.index_)),
                      (s = this.rangedFilter_.getEndPost()),
                      (u = this.rangedFilter_.getStartPost());
                    var h = this.index_.getCompare();
                    c = function (t, e) {
                      return h(e, t);
                    };
                  } else
                    (i = r.getIterator(this.index_)),
                      (s = this.rangedFilter_.getStartPost()),
                      (u = this.rangedFilter_.getEndPost()),
                      (c = this.index_.getCompare());
                  o = 0;
                  for (var l = !1; i.hasNext(); ) {
                    a = i.getNext();
                    !l && c(s, a) <= 0 && (l = !0),
                      l && o < this.limit_ && c(a, u) <= 0
                        ? o++
                        : (r = r.updateImmediateChild(a.name, Gt.EMPTY_NODE));
                  }
                }
                return this.rangedFilter_
                  .getIndexedFilter()
                  .updateFullNode(t, r, n);
              }),
              (t.prototype.updatePriority = function (t, e) {
                return t;
              }),
              (t.prototype.filtersNodes = function () {
                return !0;
              }),
              (t.prototype.getIndexedFilter = function () {
                return this.rangedFilter_.getIndexedFilter();
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.prototype.fullLimitUpdateChild_ = function (t, e, n, r, i) {
                var o;
                if (this.reverse_) {
                  var a = this.index_.getCompare();
                  o = function (t, e) {
                    return a(e, t);
                  };
                } else o = this.index_.getCompare();
                var s = t;
                c.assert(s.numChildren() === this.limit_, '');
                var u = new Ct(e, n),
                  h = this.reverse_
                    ? s.getFirstChild(this.index_)
                    : s.getLastChild(this.index_),
                  l = this.rangedFilter_.matches(u);
                if (s.hasChild(e)) {
                  for (
                    var f = s.getImmediateChild(e),
                      p = r.getChildAfterChild(this.index_, h, this.reverse_);
                    null != p && (p.name === e || s.hasChild(p.name));

                  )
                    p = r.getChildAfterChild(this.index_, p, this.reverse_);
                  var d = null == p ? 1 : o(p, u);
                  if (l && !n.isEmpty() && d >= 0)
                    return (
                      null != i &&
                        i.trackChildChange(_e.childChangedChange(e, n, f)),
                      s.updateImmediateChild(e, n)
                    );
                  null != i && i.trackChildChange(_e.childRemovedChange(e, f));
                  var v = s.updateImmediateChild(e, Gt.EMPTY_NODE);
                  return null != p && this.rangedFilter_.matches(p)
                    ? (null != i &&
                        i.trackChildChange(_e.childAddedChange(p.name, p.node)),
                      v.updateImmediateChild(p.name, p.node))
                    : v;
                }
                return n.isEmpty()
                  ? t
                  : l && o(h, u) >= 0
                  ? (null != i &&
                      (i.trackChildChange(
                        _e.childRemovedChange(h.name, h.node)
                      ),
                      i.trackChildChange(_e.childAddedChange(e, n))),
                    s
                      .updateImmediateChild(e, n)
                      .updateImmediateChild(h.name, Gt.EMPTY_NODE))
                  : t;
              }),
              t
            );
          })(),
          hn = (function () {
            function t() {
              (this.limitSet_ = !1),
                (this.startSet_ = !1),
                (this.startNameSet_ = !1),
                (this.endSet_ = !1),
                (this.endNameSet_ = !1),
                (this.limit_ = 0),
                (this.viewFrom_ = ''),
                (this.indexStartValue_ = null),
                (this.indexStartName_ = ''),
                (this.indexEndValue_ = null),
                (this.indexEndName_ = ''),
                (this.index_ = Lt);
            }
            return (
              (t.prototype.hasStart = function () {
                return this.startSet_;
              }),
              (t.prototype.isViewFromLeft = function () {
                return '' === this.viewFrom_
                  ? this.startSet_
                  : this.viewFrom_ ===
                      t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
              }),
              (t.prototype.getIndexStartValue = function () {
                return (
                  c.assert(this.startSet_, 'Only valid if start has been set'),
                  this.indexStartValue_
                );
              }),
              (t.prototype.getIndexStartName = function () {
                return (
                  c.assert(this.startSet_, 'Only valid if start has been set'),
                  this.startNameSet_ ? this.indexStartName_ : P
                );
              }),
              (t.prototype.hasEnd = function () {
                return this.endSet_;
              }),
              (t.prototype.getIndexEndValue = function () {
                return (
                  c.assert(this.endSet_, 'Only valid if end has been set'),
                  this.indexEndValue_
                );
              }),
              (t.prototype.getIndexEndName = function () {
                return (
                  c.assert(this.endSet_, 'Only valid if end has been set'),
                  this.endNameSet_ ? this.indexEndName_ : k
                );
              }),
              (t.prototype.hasLimit = function () {
                return this.limitSet_;
              }),
              (t.prototype.hasAnchoredLimit = function () {
                return this.limitSet_ && '' !== this.viewFrom_;
              }),
              (t.prototype.getLimit = function () {
                return (
                  c.assert(this.limitSet_, 'Only valid if limit has been set'),
                  this.limit_
                );
              }),
              (t.prototype.getIndex = function () {
                return this.index_;
              }),
              (t.prototype.copy_ = function () {
                var e = new t();
                return (
                  (e.limitSet_ = this.limitSet_),
                  (e.limit_ = this.limit_),
                  (e.startSet_ = this.startSet_),
                  (e.indexStartValue_ = this.indexStartValue_),
                  (e.startNameSet_ = this.startNameSet_),
                  (e.indexStartName_ = this.indexStartName_),
                  (e.endSet_ = this.endSet_),
                  (e.indexEndValue_ = this.indexEndValue_),
                  (e.endNameSet_ = this.endNameSet_),
                  (e.indexEndName_ = this.indexEndName_),
                  (e.index_ = this.index_),
                  (e.viewFrom_ = this.viewFrom_),
                  e
                );
              }),
              (t.prototype.limit = function (t) {
                var e = this.copy_();
                return (
                  (e.limitSet_ = !0), (e.limit_ = t), (e.viewFrom_ = ''), e
                );
              }),
              (t.prototype.limitToFirst = function (e) {
                var n = this.copy_();
                return (
                  (n.limitSet_ = !0),
                  (n.limit_ = e),
                  (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
                  n
                );
              }),
              (t.prototype.limitToLast = function (e) {
                var n = this.copy_();
                return (
                  (n.limitSet_ = !0),
                  (n.limit_ = e),
                  (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
                  n
                );
              }),
              (t.prototype.startAt = function (t, e) {
                var n = this.copy_();
                return (
                  (n.startSet_ = !0),
                  void 0 === t && (t = null),
                  (n.indexStartValue_ = t),
                  null != e
                    ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
                    : ((n.startNameSet_ = !1), (n.indexStartName_ = '')),
                  n
                );
              }),
              (t.prototype.endAt = function (t, e) {
                var n = this.copy_();
                return (
                  (n.endSet_ = !0),
                  void 0 === t && (t = null),
                  (n.indexEndValue_ = t),
                  void 0 !== e
                    ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
                    : ((n.endNameSet_ = !1), (n.indexEndName_ = '')),
                  n
                );
              }),
              (t.prototype.orderBy = function (t) {
                var e = this.copy_();
                return (e.index_ = t), e;
              }),
              (t.prototype.getQueryObject = function () {
                var e = t.WIRE_PROTOCOL_CONSTANTS_,
                  n = {};
                if (
                  (this.startSet_ &&
                    ((n[e.INDEX_START_VALUE] = this.indexStartValue_),
                    this.startNameSet_ &&
                      (n[e.INDEX_START_NAME] = this.indexStartName_)),
                  this.endSet_ &&
                    ((n[e.INDEX_END_VALUE] = this.indexEndValue_),
                    this.endNameSet_ &&
                      (n[e.INDEX_END_NAME] = this.indexEndName_)),
                  this.limitSet_)
                ) {
                  n[e.LIMIT] = this.limit_;
                  var r = this.viewFrom_;
                  '' === r &&
                    (r = this.isViewFromLeft()
                      ? e.VIEW_FROM_LEFT
                      : e.VIEW_FROM_RIGHT),
                    (n[e.VIEW_FROM] = r);
                }
                return (
                  this.index_ !== Lt && (n[e.INDEX] = this.index_.toString()), n
                );
              }),
              (t.prototype.loadsAllData = function () {
                return !(this.startSet_ || this.endSet_ || this.limitSet_);
              }),
              (t.prototype.isDefault = function () {
                return this.loadsAllData() && this.index_ === Lt;
              }),
              (t.prototype.getNodeFilter = function () {
                return this.loadsAllData()
                  ? new be(this.getIndex())
                  : this.hasLimit()
                  ? new cn(this)
                  : new un(this);
              }),
              (t.prototype.toRestQueryStringParameters = function () {
                var e,
                  n = t.REST_QUERY_CONSTANTS_,
                  r = {};
                return (
                  this.isDefault() ||
                    (this.index_ === Lt
                      ? (e = n.PRIORITY_INDEX)
                      : this.index_ === Jt
                      ? (e = n.VALUE_INDEX)
                      : this.index_ === Tt
                      ? (e = n.KEY_INDEX)
                      : (c.assert(
                          this.index_ instanceof Zt,
                          'Unrecognized index type!'
                        ),
                        (e = this.index_.toString())),
                    (r[n.ORDER_BY] = c.stringify(e)),
                    this.startSet_ &&
                      ((r[n.START_AT] = c.stringify(this.indexStartValue_)),
                      this.startNameSet_ &&
                        (r[n.START_AT] +=
                          ',' + c.stringify(this.indexStartName_))),
                    this.endSet_ &&
                      ((r[n.END_AT] = c.stringify(this.indexEndValue_)),
                      this.endNameSet_ &&
                        (r[n.END_AT] += ',' + c.stringify(this.indexEndName_))),
                    this.limitSet_ &&
                      (this.isViewFromLeft()
                        ? (r[n.LIMIT_TO_FIRST] = this.limit_)
                        : (r[n.LIMIT_TO_LAST] = this.limit_))),
                  r
                );
              }),
              (t.WIRE_PROTOCOL_CONSTANTS_ = {
                INDEX_START_VALUE: 'sp',
                INDEX_START_NAME: 'sn',
                INDEX_END_VALUE: 'ep',
                INDEX_END_NAME: 'en',
                LIMIT: 'l',
                VIEW_FROM: 'vf',
                VIEW_FROM_LEFT: 'l',
                VIEW_FROM_RIGHT: 'r',
                INDEX: 'i',
              }),
              (t.REST_QUERY_CONSTANTS_ = {
                ORDER_BY: 'orderBy',
                PRIORITY_INDEX: '$priority',
                VALUE_INDEX: '$value',
                KEY_INDEX: '$key',
                START_AT: 'startAt',
                END_AT: 'endAt',
                LIMIT_TO_FIRST: 'limitToFirst',
                LIMIT_TO_LAST: 'limitToLast',
              }),
              (t.DEFAULT = new t()),
              t
            );
          })(),
          ln = (function (t) {
            function e(e, n) {
              if (!(e instanceof sn))
                throw new Error(
                  'new Reference() no longer supported - use app.database().'
                );
              return t.call(this, e, n, hn.DEFAULT, !1) || this;
            }
            return (
              u.__extends(e, t),
              (e.prototype.getKey = function () {
                return (
                  c.validateArgCount('Reference.key', 0, 0, arguments.length),
                  this.path.isEmpty() ? null : this.path.getBack()
                );
              }),
              (e.prototype.child = function (t) {
                return (
                  c.validateArgCount('Reference.child', 1, 1, arguments.length),
                  'number' === typeof t
                    ? (t = String(t))
                    : t instanceof B ||
                      (null === this.path.getFront()
                        ? yt('Reference.child', 1, t, !1)
                        : vt('Reference.child', 1, t, !1)),
                  new e(this.repo, this.path.child(t))
                );
              }),
              (e.prototype.getParent = function () {
                c.validateArgCount('Reference.parent', 0, 0, arguments.length);
                var t = this.path.parent();
                return null === t ? null : new e(this.repo, t);
              }),
              (e.prototype.getRoot = function () {
                c.validateArgCount('Reference.root', 0, 0, arguments.length);
                for (var t = this; null !== t.getParent(); ) t = t.getParent();
                return t;
              }),
              (e.prototype.databaseProp = function () {
                return this.repo.database;
              }),
              (e.prototype.set = function (t, e) {
                c.validateArgCount('Reference.set', 1, 2, arguments.length),
                  gt('Reference.set', this.path),
                  ct('Reference.set', 1, t, this.path, !1),
                  c.validateCallback('Reference.set', 2, e, !0);
                var n = new c.Deferred();
                return (
                  this.repo.setWithPriority(
                    this.path,
                    t,
                    null,
                    n.wrapCallback(e)
                  ),
                  n.promise
                );
              }),
              (e.prototype.update = function (t, e) {
                if (
                  (c.validateArgCount(
                    'Reference.update',
                    1,
                    2,
                    arguments.length
                  ),
                  gt('Reference.update', this.path),
                  Array.isArray(t))
                ) {
                  for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r];
                  (t = n),
                    A(
                      'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                    );
                }
                lt('Reference.update', 1, t, this.path, !1),
                  c.validateCallback('Reference.update', 2, e, !0);
                var i = new c.Deferred();
                return (
                  this.repo.update(this.path, t, i.wrapCallback(e)), i.promise
                );
              }),
              (e.prototype.setWithPriority = function (t, e, n) {
                if (
                  (c.validateArgCount(
                    'Reference.setWithPriority',
                    2,
                    3,
                    arguments.length
                  ),
                  gt('Reference.setWithPriority', this.path),
                  ct('Reference.setWithPriority', 1, t, this.path, !1),
                  ft('Reference.setWithPriority', 2, e, !1),
                  c.validateCallback('Reference.setWithPriority', 3, n, !0),
                  '.length' === this.getKey() || '.keys' === this.getKey())
                )
                  throw (
                    'Reference.setWithPriority failed: ' +
                    this.getKey() +
                    ' is a read-only object.'
                  );
                var r = new c.Deferred();
                return (
                  this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)),
                  r.promise
                );
              }),
              (e.prototype.remove = function (t) {
                return (
                  c.validateArgCount(
                    'Reference.remove',
                    0,
                    1,
                    arguments.length
                  ),
                  gt('Reference.remove', this.path),
                  c.validateCallback('Reference.remove', 1, t, !0),
                  this.set(null, t)
                );
              }),
              (e.prototype.transaction = function (t, e, n) {
                if (
                  (c.validateArgCount(
                    'Reference.transaction',
                    1,
                    3,
                    arguments.length
                  ),
                  gt('Reference.transaction', this.path),
                  c.validateCallback('Reference.transaction', 1, t, !1),
                  c.validateCallback('Reference.transaction', 2, e, !0),
                  _t('Reference.transaction', 3, n, !0),
                  '.length' === this.getKey() || '.keys' === this.getKey())
                )
                  throw (
                    'Reference.transaction failed: ' +
                    this.getKey() +
                    ' is a read-only object.'
                  );
                void 0 === n && (n = !0);
                var r = new c.Deferred();
                'function' === typeof e && r.promise.catch(function () {});
                var i = function (t, n, i) {
                  t ? r.reject(t) : r.resolve(new wt(n, i)),
                    'function' === typeof e && e(t, n, i);
                };
                return (
                  this.repo.startTransaction(this.path, t, i, n), r.promise
                );
              }),
              (e.prototype.setPriority = function (t, e) {
                c.validateArgCount(
                  'Reference.setPriority',
                  1,
                  2,
                  arguments.length
                ),
                  gt('Reference.setPriority', this.path),
                  ft('Reference.setPriority', 1, t, !1),
                  c.validateCallback('Reference.setPriority', 2, e, !0);
                var n = new c.Deferred();
                return (
                  this.repo.setWithPriority(
                    this.path.child('.priority'),
                    t,
                    null,
                    n.wrapCallback(e)
                  ),
                  n.promise
                );
              }),
              (e.prototype.push = function (t, e) {
                c.validateArgCount('Reference.push', 0, 2, arguments.length),
                  gt('Reference.push', this.path),
                  ct('Reference.push', 1, t, this.path, !0),
                  c.validateCallback('Reference.push', 2, e, !0);
                var n,
                  r = this.repo.serverTime(),
                  i = Et(r),
                  o = this.child(i),
                  a = this.child(i);
                return (
                  (n =
                    null != t
                      ? o.set(t, e).then(function () {
                          return a;
                        })
                      : Promise.resolve(a)),
                  (o.then = n.then.bind(n)),
                  (o.catch = n.then.bind(n, void 0)),
                  'function' === typeof e && n.catch(function () {}),
                  o
                );
              }),
              (e.prototype.onDisconnect = function () {
                return (
                  gt('Reference.onDisconnect', this.path),
                  new bt(this.repo, this.path)
                );
              }),
              Object.defineProperty(e.prototype, 'database', {
                get: function () {
                  return this.databaseProp();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'key', {
                get: function () {
                  return this.getKey();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'parent', {
                get: function () {
                  return this.getParent();
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'root', {
                get: function () {
                  return this.getRoot();
                },
                enumerable: !0,
                configurable: !0,
              }),
              e
            );
          })(oe);
        (oe.__referenceConstructor = ln), (Ae.__referenceConstructor = ln);
        var fn,
          pn = function () {
            (this.children = {}), (this.childCount = 0), (this.value = null);
          },
          dn = (function () {
            function t(t, e, n) {
              void 0 === t && (t = ''),
                void 0 === e && (e = null),
                void 0 === n && (n = new pn()),
                (this.name_ = t),
                (this.parent_ = e),
                (this.node_ = n);
            }
            return (
              (t.prototype.subTree = function (e) {
                for (
                  var n = e instanceof B ? e : new B(e),
                    r = this,
                    i = n.getFront();
                  null !== i;

                ) {
                  (r = new t(i, r, c.safeGet(r.node_.children, i) || new pn())),
                    (i = (n = n.popFront()).getFront());
                }
                return r;
              }),
              (t.prototype.getValue = function () {
                return this.node_.value;
              }),
              (t.prototype.setValue = function (t) {
                c.assert(
                  'undefined' !== typeof t,
                  'Cannot set value to undefined'
                ),
                  (this.node_.value = t),
                  this.updateParents_();
              }),
              (t.prototype.clear = function () {
                (this.node_.value = null),
                  (this.node_.children = {}),
                  (this.node_.childCount = 0),
                  this.updateParents_();
              }),
              (t.prototype.hasChildren = function () {
                return this.node_.childCount > 0;
              }),
              (t.prototype.isEmpty = function () {
                return null === this.getValue() && !this.hasChildren();
              }),
              (t.prototype.forEachChild = function (e) {
                var n = this;
                F(this.node_.children, function (r, i) {
                  e(new t(r, n, i));
                });
              }),
              (t.prototype.forEachDescendant = function (t, e, n) {
                e && !n && t(this),
                  this.forEachChild(function (e) {
                    e.forEachDescendant(t, !0, n);
                  }),
                  e && n && t(this);
              }),
              (t.prototype.forEachAncestor = function (t, e) {
                for (var n = e ? this : this.parent(); null !== n; ) {
                  if (t(n)) return !0;
                  n = n.parent();
                }
                return !1;
              }),
              (t.prototype.forEachImmediateDescendantWithValue = function (t) {
                this.forEachChild(function (e) {
                  null !== e.getValue()
                    ? t(e)
                    : e.forEachImmediateDescendantWithValue(t);
                });
              }),
              (t.prototype.path = function () {
                return new B(
                  null === this.parent_
                    ? this.name_
                    : this.parent_.path() + '/' + this.name_
                );
              }),
              (t.prototype.name = function () {
                return this.name_;
              }),
              (t.prototype.parent = function () {
                return this.parent_;
              }),
              (t.prototype.updateParents_ = function () {
                null !== this.parent_ &&
                  this.parent_.updateChild_(this.name_, this);
              }),
              (t.prototype.updateChild_ = function (t, e) {
                var n = e.isEmpty(),
                  r = c.contains(this.node_.children, t);
                n && r
                  ? (delete this.node_.children[t],
                    this.node_.childCount--,
                    this.updateParents_())
                  : n ||
                    r ||
                    ((this.node_.children[t] = e.node_),
                    this.node_.childCount++,
                    this.updateParents_());
              }),
              t
            );
          })();
        !(function (t) {
          (t[(t.RUN = 0)] = 'RUN'),
            (t[(t.SENT = 1)] = 'SENT'),
            (t[(t.COMPLETED = 2)] = 'COMPLETED'),
            (t[(t.SENT_NEEDS_ABORT = 3)] = 'SENT_NEEDS_ABORT'),
            (t[(t.NEEDS_ABORT = 4)] = 'NEEDS_ABORT');
        })(fn || (fn = {})),
          (sn.MAX_TRANSACTION_RETRIES_ = 25),
          (sn.prototype.transactionsInit_ = function () {
            this.transactionQueueTree_ = new dn();
          }),
          (sn.prototype.startTransaction = function (t, e, n, r) {
            this.log_('transaction on ' + t);
            var o = function () {},
              a = new ln(this, t);
            a.on('value', o);
            var s = {
                path: t,
                update: e,
                onComplete: n,
                status: null,
                order: m(),
                applyLocally: r,
                retryCount: 0,
                unwatcher: function () {
                  a.off('value', o);
                },
                abortReason: null,
                currentWriteId: null,
                currentInputSnapshot: null,
                currentOutputSnapshotRaw: null,
                currentOutputSnapshotResolved: null,
              },
              u = this.getLatestState_(t);
            s.currentInputSnapshot = u;
            var h = s.update(u.val());
            if (void 0 === h) {
              if (
                (s.unwatcher(),
                (s.currentOutputSnapshotRaw = null),
                (s.currentOutputSnapshotResolved = null),
                s.onComplete)
              ) {
                var l = new te(
                  s.currentInputSnapshot,
                  new ln(this, s.path),
                  Lt
                );
                s.onComplete(null, !1, l);
              }
            } else {
              ht('transaction failed: Data returned ', h, s.path),
                (s.status = fn.RUN);
              var f = this.transactionQueueTree_.subTree(t),
                p = f.getValue() || [];
              p.push(s), f.setValue(p);
              var d = void 0;
              if ('object' === i(h) && null !== h && c.contains(h, '.priority'))
                (d = c.safeGet(h, '.priority')),
                  c.assert(
                    ut(d),
                    'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.'
                  );
              else
                d = (
                  this.serverSyncTree_.calcCompleteEventCache(t) ||
                  Gt.EMPTY_NODE
                )
                  .getPriority()
                  .val();
              d = d;
              var v = this.generateServerValues(),
                y = Yt(h, d),
                g = ue(y, v);
              (s.currentOutputSnapshotRaw = y),
                (s.currentOutputSnapshotResolved = g),
                (s.currentWriteId = this.getNextWriteId_());
              var _ = this.serverSyncTree_.applyUserOverwrite(
                t,
                g,
                s.currentWriteId,
                s.applyLocally
              );
              this.eventQueue_.raiseEventsForChangedPath(t, _),
                this.sendReadyTransactions_();
            }
          }),
          (sn.prototype.getLatestState_ = function (t, e) {
            return (
              this.serverSyncTree_.calcCompleteEventCache(t, e) || Gt.EMPTY_NODE
            );
          }),
          (sn.prototype.sendReadyTransactions_ = function (t) {
            var e = this;
            if (
              (void 0 === t && (t = this.transactionQueueTree_),
              t || this.pruneCompletedTransactionsBelowNode_(t),
              null !== t.getValue())
            ) {
              var n = this.buildTransactionQueue_(t);
              c.assert(n.length > 0, 'Sending zero length transaction queue'),
                n.every(function (t) {
                  return t.status === fn.RUN;
                }) && this.sendTransactionQueue_(t.path(), n);
            } else
              t.hasChildren() &&
                t.forEachChild(function (t) {
                  e.sendReadyTransactions_(t);
                });
          }),
          (sn.prototype.sendTransactionQueue_ = function (t, e) {
            for (
              var n = this,
                r = e.map(function (t) {
                  return t.currentWriteId;
                }),
                i = this.getLatestState_(t, r),
                o = i,
                a = i.hash(),
                s = 0;
              s < e.length;
              s++
            ) {
              var u = e[s];
              c.assert(
                u.status === fn.RUN,
                'tryToSendTransactionQueue_: items in queue should all be run.'
              ),
                (u.status = fn.SENT),
                u.retryCount++;
              var h = B.relativePath(t, u.path);
              o = o.updateChild(h, u.currentOutputSnapshotRaw);
            }
            var l = o.val(!0),
              f = t;
            this.server_.put(
              f.toString(),
              l,
              function (r) {
                n.log_('transaction put response', {
                  path: f.toString(),
                  status: r,
                });
                var i = [];
                if ('ok' === r) {
                  for (var o = [], a = 0; a < e.length; a++) {
                    if (
                      ((e[a].status = fn.COMPLETED),
                      (i = i.concat(
                        n.serverSyncTree_.ackUserWrite(e[a].currentWriteId)
                      )),
                      e[a].onComplete)
                    ) {
                      var s = e[a].currentOutputSnapshotResolved,
                        u = new ln(n, e[a].path),
                        c = new te(s, u, Lt);
                      o.push(e[a].onComplete.bind(null, null, !0, c));
                    }
                    e[a].unwatcher();
                  }
                  n.pruneCompletedTransactionsBelowNode_(
                    n.transactionQueueTree_.subTree(t)
                  ),
                    n.sendReadyTransactions_(),
                    n.eventQueue_.raiseEventsForChangedPath(t, i);
                  for (a = 0; a < o.length; a++) W(o[a]);
                } else {
                  if ('datastale' === r)
                    for (a = 0; a < e.length; a++)
                      e[a].status === fn.SENT_NEEDS_ABORT
                        ? (e[a].status = fn.NEEDS_ABORT)
                        : (e[a].status = fn.RUN);
                  else {
                    A('transaction at ' + f.toString() + ' failed: ' + r);
                    for (a = 0; a < e.length; a++)
                      (e[a].status = fn.NEEDS_ABORT), (e[a].abortReason = r);
                  }
                  n.rerunTransactions_(t);
                }
              },
              a
            );
          }),
          (sn.prototype.rerunTransactions_ = function (t) {
            var e = this.getAncestorTransactionNode_(t),
              n = e.path(),
              r = this.buildTransactionQueue_(e);
            return this.rerunTransactionQueue_(r, n), n;
          }),
          (sn.prototype.rerunTransactionQueue_ = function (t, e) {
            if (0 !== t.length) {
              for (
                var n,
                  r = [],
                  o = [],
                  a = t
                    .filter(function (t) {
                      return t.status === fn.RUN;
                    })
                    .map(function (t) {
                      return t.currentWriteId;
                    }),
                  s = 0;
                s < t.length;
                s++
              ) {
                var u = t[s],
                  h = B.relativePath(e, u.path),
                  l = !1,
                  f = void 0;
                if (
                  (c.assert(
                    null !== h,
                    'rerunTransactionsUnderNode_: relativePath should not be null.'
                  ),
                  u.status === fn.NEEDS_ABORT)
                )
                  (l = !0),
                    (f = u.abortReason),
                    (o = o.concat(
                      this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0)
                    ));
                else if (u.status === fn.RUN)
                  if (u.retryCount >= sn.MAX_TRANSACTION_RETRIES_)
                    (l = !0),
                      (f = 'maxretry'),
                      (o = o.concat(
                        this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0)
                      ));
                  else {
                    var p = this.getLatestState_(u.path, a);
                    u.currentInputSnapshot = p;
                    var d = t[s].update(p.val());
                    if (void 0 !== d) {
                      ht('transaction failed: Data returned ', d, u.path);
                      var v = Yt(d);
                      ('object' === i(d) &&
                        null != d &&
                        c.contains(d, '.priority')) ||
                        (v = v.updatePriority(p.getPriority()));
                      var y = u.currentWriteId,
                        g = this.generateServerValues(),
                        m = ue(v, g);
                      (u.currentOutputSnapshotRaw = v),
                        (u.currentOutputSnapshotResolved = m),
                        (u.currentWriteId = this.getNextWriteId_()),
                        a.splice(a.indexOf(y), 1),
                        (o = (o = o.concat(
                          this.serverSyncTree_.applyUserOverwrite(
                            u.path,
                            m,
                            u.currentWriteId,
                            u.applyLocally
                          )
                        )).concat(this.serverSyncTree_.ackUserWrite(y, !0)));
                    } else
                      (l = !0),
                        (f = 'nodata'),
                        (o = o.concat(
                          this.serverSyncTree_.ackUserWrite(
                            u.currentWriteId,
                            !0
                          )
                        ));
                  }
                if (
                  (this.eventQueue_.raiseEventsForChangedPath(e, o),
                  (o = []),
                  l &&
                    ((t[s].status = fn.COMPLETED),
                    (n = t[s].unwatcher),
                    setTimeout(n, Math.floor(0)),
                    t[s].onComplete))
                )
                  if ('nodata' === f) {
                    var _ = new ln(this, t[s].path),
                      b = t[s].currentInputSnapshot,
                      w = new te(b, _, Lt);
                    r.push(t[s].onComplete.bind(null, null, !1, w));
                  } else
                    r.push(t[s].onComplete.bind(null, new Error(f), !1, null));
              }
              this.pruneCompletedTransactionsBelowNode_(
                this.transactionQueueTree_
              );
              for (s = 0; s < r.length; s++) W(r[s]);
              this.sendReadyTransactions_();
            }
          }),
          (sn.prototype.getAncestorTransactionNode_ = function (t) {
            var e,
              n = this.transactionQueueTree_;
            for (e = t.getFront(); null !== e && null === n.getValue(); )
              (n = n.subTree(e)), (e = (t = t.popFront()).getFront());
            return n;
          }),
          (sn.prototype.buildTransactionQueue_ = function (t) {
            var e = [];
            return (
              this.aggregateTransactionQueuesForNode_(t, e),
              e.sort(function (t, e) {
                return t.order - e.order;
              }),
              e
            );
          }),
          (sn.prototype.aggregateTransactionQueuesForNode_ = function (t, e) {
            var n = this,
              r = t.getValue();
            if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i]);
            t.forEachChild(function (t) {
              n.aggregateTransactionQueuesForNode_(t, e);
            });
          }),
          (sn.prototype.pruneCompletedTransactionsBelowNode_ = function (t) {
            var e = this,
              n = t.getValue();
            if (n) {
              for (var r = 0, i = 0; i < n.length; i++)
                n[i].status !== fn.COMPLETED && ((n[r] = n[i]), r++);
              (n.length = r), t.setValue(n.length > 0 ? n : null);
            }
            t.forEachChild(function (t) {
              e.pruneCompletedTransactionsBelowNode_(t);
            });
          }),
          (sn.prototype.abortTransactions_ = function (t) {
            var e = this,
              n = this.getAncestorTransactionNode_(t).path(),
              r = this.transactionQueueTree_.subTree(t);
            return (
              r.forEachAncestor(function (t) {
                e.abortTransactionsOnNode_(t);
              }),
              this.abortTransactionsOnNode_(r),
              r.forEachDescendant(function (t) {
                e.abortTransactionsOnNode_(t);
              }),
              n
            );
          }),
          (sn.prototype.abortTransactionsOnNode_ = function (t) {
            var e = t.getValue();
            if (null !== e) {
              for (var n = [], r = [], i = -1, o = 0; o < e.length; o++)
                if (e[o].status === fn.SENT_NEEDS_ABORT);
                else if (e[o].status === fn.SENT)
                  c.assert(
                    i === o - 1,
                    'All SENT items should be at beginning of queue.'
                  ),
                    (i = o),
                    (e[o].status = fn.SENT_NEEDS_ABORT),
                    (e[o].abortReason = 'set');
                else if (
                  (c.assert(
                    e[o].status === fn.RUN,
                    'Unexpected transaction status in abort'
                  ),
                  e[o].unwatcher(),
                  (r = r.concat(
                    this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)
                  )),
                  e[o].onComplete)
                ) {
                  n.push(
                    e[o].onComplete.bind(null, new Error('set'), !1, null)
                  );
                }
              -1 === i ? t.setValue(null) : (e.length = i + 1),
                this.eventQueue_.raiseEventsForChangedPath(t.path(), r);
              for (o = 0; o < n.length; o++) W(n[o]);
            }
          });
        var vn,
          yn = (function () {
            function t() {
              (this.repos_ = {}), (this.useRestClient_ = !1);
            }
            return (
              (t.getInstance = function () {
                return vn || (vn = new t()), vn;
              }),
              (t.prototype.interrupt = function () {
                var t, e, n, r;
                try {
                  for (
                    var i = u.__values(Object.keys(this.repos_)), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    try {
                      for (
                        var s =
                            ((n = void 0),
                            u.__values(Object.keys(this.repos_[a]))),
                          c = s.next();
                        !c.done;
                        c = s.next()
                      ) {
                        var h = c.value;
                        this.repos_[a][h].interrupt();
                      }
                    } catch (l) {
                      n = {
                        error: l,
                      };
                    } finally {
                      try {
                        c && !c.done && (r = s.return) && r.call(s);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (f) {
                  t = {
                    error: f,
                  };
                } finally {
                  try {
                    o && !o.done && (e = i.return) && e.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.resume = function () {
                var t, e, n, r;
                try {
                  for (
                    var i = u.__values(Object.keys(this.repos_)), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var a = o.value;
                    try {
                      for (
                        var s =
                            ((n = void 0),
                            u.__values(Object.keys(this.repos_[a]))),
                          c = s.next();
                        !c.done;
                        c = s.next()
                      ) {
                        var h = c.value;
                        this.repos_[a][h].resume();
                      }
                    } catch (l) {
                      n = {
                        error: l,
                      };
                    } finally {
                      try {
                        c && !c.done && (r = s.return) && r.call(s);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  }
                } catch (f) {
                  t = {
                    error: f,
                  };
                } finally {
                  try {
                    o && !o.done && (e = i.return) && e.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (t.prototype.databaseFromApp = function (t, e, n) {
                var i = n || t.options.databaseURL;
                void 0 === i &&
                  N(
                    "Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp()."
                  );
                var o = et(i),
                  a = o.repoInfo,
                  s = void 0;
                return (
                  'undefined' !== typeof r &&
                    (s = r.env.FIREBASE_DATABASE_EMULATOR_HOST),
                  s &&
                    ((i = 'http://' + s + '?ns=' + a.namespace),
                    (a = (o = et(i)).repoInfo)),
                  mt('Invalid Firebase Database URL', 1, o),
                  o.path.isEmpty() ||
                    N(
                      'Database URL must point to the root of a Firebase Database (not including a child path).'
                    ),
                  this.createRepo(a, t, e).database
                );
              }),
              (t.prototype.deleteRepo = function (t) {
                var e = c.safeGet(this.repos_, t.app.name);
                (e && c.safeGet(e, t.repoInfo_.toURLString()) === t) ||
                  N(
                    'Database ' +
                      t.app.name +
                      '(' +
                      t.repoInfo_ +
                      ') has already been deleted.'
                  ),
                  t.interrupt(),
                  delete e[t.repoInfo_.toURLString()];
              }),
              (t.prototype.createRepo = function (t, e, n) {
                var r = c.safeGet(this.repos_, e.name);
                r || ((r = {}), (this.repos_[e.name] = r));
                var i = c.safeGet(r, t.toURLString());
                return (
                  i &&
                    N(
                      'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
                    ),
                  (i = new sn(t, this.useRestClient_, e, n)),
                  (r[t.toURLString()] = i),
                  i
                );
              }),
              (t.prototype.forceRestClient = function (t) {
                this.useRestClient_ = t;
              }),
              t
            );
          })(),
          gn = (function () {
            function t(t) {
              (this.repo_ = t),
                t instanceof sn ||
                  N(
                    "Don't call new Database() directly - please use firebase.database()."
                  ),
                (this.root_ = new ln(t, B.Empty)),
                (this.INTERNAL = new mn(this));
            }
            return (
              Object.defineProperty(t.prototype, 'app', {
                get: function () {
                  return this.repo_.app;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.ref = function (t) {
                return (
                  this.checkDeleted_('ref'),
                  c.validateArgCount('database.ref', 0, 1, arguments.length),
                  t instanceof ln
                    ? this.refFromURL(t.toString())
                    : void 0 !== t
                    ? this.root_.child(t)
                    : this.root_
                );
              }),
              (t.prototype.refFromURL = function (t) {
                var e = 'database.refFromURL';
                this.checkDeleted_(e),
                  c.validateArgCount(e, 1, 1, arguments.length);
                var n = et(t);
                mt(e, 1, n);
                var r = n.repoInfo;
                return (
                  r.host !== this.repo_.repoInfo_.host &&
                    N(
                      e +
                        ': Host name does not match the current database: (found ' +
                        r.host +
                        ' but expected ' +
                        this.repo_.repoInfo_.host +
                        ')'
                    ),
                  this.ref(n.path.toString())
                );
              }),
              (t.prototype.checkDeleted_ = function (t) {
                null === this.repo_ &&
                  N('Cannot call ' + t + ' on a deleted database.');
              }),
              (t.prototype.goOffline = function () {
                c.validateArgCount(
                  'database.goOffline',
                  0,
                  0,
                  arguments.length
                ),
                  this.checkDeleted_('goOffline'),
                  this.repo_.interrupt();
              }),
              (t.prototype.goOnline = function () {
                c.validateArgCount('database.goOnline', 0, 0, arguments.length),
                  this.checkDeleted_('goOnline'),
                  this.repo_.resume();
              }),
              (t.ServerValue = {
                TIMESTAMP: {
                  '.sv': 'timestamp',
                },
              }),
              t
            );
          })(),
          mn = (function () {
            function t(t) {
              this.database = t;
            }
            return (
              (t.prototype.delete = function () {
                return u.__awaiter(this, void 0, void 0, function () {
                  return u.__generator(this, function (t) {
                    return (
                      this.database.checkDeleted_('delete'),
                      yn.getInstance().deleteRepo(this.database.repo_),
                      (this.database.repo_ = null),
                      (this.database.root_ = null),
                      (this.database.INTERNAL = null),
                      (this.database = null),
                      [2]
                    );
                  });
                });
              }),
              t
            );
          })(),
          _n = Object.freeze({
            __proto__: null,
            forceLongPolling: function () {
              Je.forceDisallow(), ze.forceAllow();
            },
            forceWebSockets: function () {
              ze.forceDisallow();
            },
            isWebSocketsAvailable: function () {
              return Je.isAvailable();
            },
            setSecurityDebugCallback: function (t, e) {
              t.repo.persistentConnection_.securityDebugCallback_ = e;
            },
            stats: function (t, e) {
              t.repo.stats(e);
            },
            statsIncrementCounter: function (t, e) {
              t.repo.statsIncrementCounter(e);
            },
            dataUpdateCount: function (t) {
              return t.repo.dataUpdateCount;
            },
            interceptServerData: function (t, e) {
              return t.repo.interceptServerData_(e);
            },
          }),
          bn = rn;
        (rn.prototype.simpleListen = function (t, e) {
          this.sendRequest(
            'q',
            {
              p: t,
            },
            e
          );
        }),
          (rn.prototype.echo = function (t, e) {
            this.sendRequest(
              'echo',
              {
                d: t,
              },
              e
            );
          });
        var wn = tn,
          En = Y,
          Cn = Object.freeze({
            __proto__: null,
            DataConnection: bn,
            RealTimeConnection: wn,
            hijackHash: function (t) {
              var e = rn.prototype.put;
              return (
                (rn.prototype.put = function (n, r, i, o) {
                  void 0 !== o && (o = t()), e.call(this, n, r, i, o);
                }),
                function () {
                  rn.prototype.put = e;
                }
              );
            },
            ConnectionTarget: En,
            queryIdentifier: function (t) {
              return t.queryIdentifier();
            },
            forceRestClient: function (t) {
              yn.getInstance().forceRestClient(t);
            },
          }),
          Sn = gn.ServerValue;

        function In(e) {
          !(function (t) {
            Xe = t;
          })(e.SDK_VERSION);
          var n = e.INTERNAL.registerComponent(
            new l.Component(
              'database',
              function (t, e) {
                var n = t.getProvider('app').getImmediate(),
                  r = t.getProvider('auth-internal');
                return yn.getInstance().databaseFromApp(n, r, e);
              },
              'PUBLIC'
            )
              .setServiceProps({
                Reference: ln,
                Query: oe,
                Database: gn,
                DataSnapshot: te,
                enableLogging: C,
                INTERNAL: _n,
                ServerValue: Sn,
                TEST_ACCESS: Cn,
              })
              .setMultipleInstances(!0)
          );
          e.registerVersion('@firebase/database', '0.5.24'),
            c.isNodeSdk() && (t.exports = n);
        }
        In(s),
          (e.DataSnapshot = te),
          (e.Database = gn),
          (e.OnDisconnect = bt),
          (e.Query = oe),
          (e.Reference = ln),
          (e.ServerValue = Sn),
          (e.enableLogging = C),
          (e.registerDatabase = In);
      }.call(this, n(89)));
    },
    1156: function (t, e, n) {
      'use strict';
      (function (t) {
        var e = n(42),
          r = n.n(e);

        function i(t) {
          return (i =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        (function () {
          var e,
            n =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function (t, e, n) {
                    t != Array.prototype &&
                      t != Object.prototype &&
                      (t[e] = n.value);
                  };
          var o = (function (e) {
            e = [
              'object' ==
                ('undefined' === typeof window ? 'undefined' : i(window)) &&
                window,
              'object' ==
                ('undefined' === typeof self ? 'undefined' : i(self)) && self,
              'object' == ('undefined' === typeof t ? 'undefined' : i(t)) && t,
              e,
            ];
            for (var n = 0; n < e.length; ++n) {
              var r = e[n];
              if (r && r.Math == Math) return r;
            }
            return globalThis;
          })(this);

          function a(t) {
            var e = 0;
            return function () {
              return e < t.length
                ? {
                    done: !1,
                    value: t[e++],
                  }
                : {
                    done: !0,
                  };
            };
          }

          function s(t) {
            var e =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              t[Symbol.iterator];
            return e
              ? e.call(t)
              : {
                  next: a(t),
                };
          }
          !(function (t, e) {
            if (e) {
              var r = o;
              t = t.split('.');
              for (var i = 0; i < t.length - 1; i++) {
                var a = t[i];
                a in r || (r[a] = {}), (r = r[a]);
              }
              (e = e((i = r[(t = t[t.length - 1])]))) != i &&
                null != e &&
                n(r, t, {
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
            }
          })('Promise', function (t) {
            function e(t) {
              (this.b = 0), (this.c = void 0), (this.a = []);
              var e = this.f();
              try {
                t(e.resolve, e.reject);
              } catch (n) {
                e.reject(n);
              }
            }

            function n() {
              this.a = null;
            }

            function r(t) {
              return t instanceof e
                ? t
                : new e(function (e) {
                    e(t);
                  });
            }
            if (t) return t;
            n.prototype.b = function (t) {
              if (null == this.a) {
                this.a = [];
                var e = this;
                this.c(function () {
                  e.g();
                });
              }
              this.a.push(t);
            };
            var a = o.setTimeout;
            (n.prototype.c = function (t) {
              a(t, 0);
            }),
              (n.prototype.g = function () {
                for (; this.a && this.a.length; ) {
                  var t = this.a;
                  this.a = [];
                  for (var e = 0; e < t.length; ++e) {
                    var n = t[e];
                    t[e] = null;
                    try {
                      n();
                    } catch (r) {
                      this.f(r);
                    }
                  }
                }
                this.a = null;
              }),
              (n.prototype.f = function (t) {
                this.c(function () {
                  throw t;
                });
              }),
              (e.prototype.f = function () {
                function t(t) {
                  return function (r) {
                    n || ((n = !0), t.call(e, r));
                  };
                }
                var e = this,
                  n = !1;
                return {
                  resolve: t(this.m),
                  reject: t(this.g),
                };
              }),
              (e.prototype.m = function (t) {
                if (t === this)
                  this.g(new TypeError('A Promise cannot resolve to itself'));
                else if (t instanceof e) this.s(t);
                else {
                  t: switch (i(t)) {
                    case 'object':
                      var n = null != t;
                      break t;
                    case 'function':
                      n = !0;
                      break t;
                    default:
                      n = !1;
                  }
                  n ? this.u(t) : this.h(t);
                }
              }),
              (e.prototype.u = function (t) {
                var e = void 0;
                try {
                  e = t.then;
                } catch (n) {
                  return void this.g(n);
                }
                'function' == typeof e ? this.w(e, t) : this.h(t);
              }),
              (e.prototype.g = function (t) {
                this.i(2, t);
              }),
              (e.prototype.h = function (t) {
                this.i(1, t);
              }),
              (e.prototype.i = function (t, e) {
                if (0 != this.b)
                  throw Error(
                    'Cannot settle(' +
                      t +
                      ', ' +
                      e +
                      '): Promise already settled in state' +
                      this.b
                  );
                (this.b = t), (this.c = e), this.l();
              }),
              (e.prototype.l = function () {
                if (null != this.a) {
                  for (var t = 0; t < this.a.length; ++t) u.b(this.a[t]);
                  this.a = null;
                }
              });
            var u = new n();
            return (
              (e.prototype.s = function (t) {
                var e = this.f();
                t.Oa(e.resolve, e.reject);
              }),
              (e.prototype.w = function (t, e) {
                var n = this.f();
                try {
                  t.call(e, n.resolve, n.reject);
                } catch (r) {
                  n.reject(r);
                }
              }),
              (e.prototype.then = function (t, n) {
                function r(t, e) {
                  return 'function' == typeof t
                    ? function (e) {
                        try {
                          i(t(e));
                        } catch (n) {
                          o(n);
                        }
                      }
                    : e;
                }
                var i,
                  o,
                  a = new e(function (t, e) {
                    (i = t), (o = e);
                  });
                return this.Oa(r(t, i), r(n, o)), a;
              }),
              (e.prototype.catch = function (t) {
                return this.then(void 0, t);
              }),
              (e.prototype.Oa = function (t, e) {
                function n() {
                  switch (r.b) {
                    case 1:
                      t(r.c);
                      break;
                    case 2:
                      e(r.c);
                      break;
                    default:
                      throw Error('Unexpected state: ' + r.b);
                  }
                }
                var r = this;
                null == this.a ? u.b(n) : this.a.push(n);
              }),
              (e.resolve = r),
              (e.reject = function (t) {
                return new e(function (e, n) {
                  n(t);
                });
              }),
              (e.race = function (t) {
                return new e(function (e, n) {
                  for (var i = s(t), o = i.next(); !o.done; o = i.next())
                    r(o.value).Oa(e, n);
                });
              }),
              (e.all = function (t) {
                var n = s(t),
                  i = n.next();
                return i.done
                  ? r([])
                  : new e(function (t, e) {
                      function o(e) {
                        return function (n) {
                          (a[e] = n), 0 == --s && t(a);
                        };
                      }
                      var a = [],
                        s = 0;
                      do {
                        a.push(void 0),
                          s++,
                          r(i.value).Oa(o(a.length - 1), e),
                          (i = n.next());
                      } while (!i.done);
                    });
              }),
              e
            );
          });
          var u = u || {},
            c = this || self,
            h = /^[\w+/_-]+[=]{0,2}$/,
            l = null;

          function f() {}

          function p(t) {
            var e = i(t);
            if ('object' == e) {
              if (!t) return 'null';
              if (t instanceof Array) return 'array';
              if (t instanceof Object) return e;
              var n = Object.prototype.toString.call(t);
              if ('[object Window]' == n) return 'object';
              if (
                '[object Array]' == n ||
                ('number' == typeof t.length &&
                  'undefined' != typeof t.splice &&
                  'undefined' != typeof t.propertyIsEnumerable &&
                  !t.propertyIsEnumerable('splice'))
              )
                return 'array';
              if (
                '[object Function]' == n ||
                ('undefined' != typeof t.call &&
                  'undefined' != typeof t.propertyIsEnumerable &&
                  !t.propertyIsEnumerable('call'))
              )
                return 'function';
            } else if ('function' == e && 'undefined' == typeof t.call)
              return 'object';
            return e;
          }

          function d(t) {
            var e = p(t);
            return (
              'array' == e || ('object' == e && 'number' == typeof t.length)
            );
          }

          function v(t) {
            return 'function' == p(t);
          }

          function y(t) {
            var e = i(t);
            return ('object' == e && null != t) || 'function' == e;
          }

          function g(t) {
            return (
              (Object.prototype.hasOwnProperty.call(t, m) && t[m]) ||
              (t[m] = ++_)
            );
          }
          var m = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
            _ = 0;

          function b(t, e, n) {
            return t.call.apply(t.bind, arguments);
          }

          function w(t, e, n) {
            if (!t) throw Error();
            if (2 < arguments.length) {
              var r = Array.prototype.slice.call(arguments, 2);
              return function () {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, r), t.apply(e, n);
              };
            }
            return function () {
              return t.apply(e, arguments);
            };
          }

          function E(t, e, n) {
            return (E =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf('native code')
                ? b
                : w).apply(null, arguments);
          }

          function C(t, e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function () {
              var e = n.slice();
              return e.push.apply(e, arguments), t.apply(this, e);
            };
          }
          var S =
            Date.now ||
            function () {
              return +new Date();
            };

          function I(t, e) {
            function n() {}
            (n.prototype = e.prototype),
              (t.Za = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }

          function T(t, e, n) {
            (this.code = O + t),
              (this.message = e || P[t] || ''),
              (this.a = n || null);
          }

          function N(t) {
            var e = t && t.code;
            return e
              ? new T(e.substring(O.length), t.message, t.serverResponse)
              : null;
          }
          I(T, Error),
            (T.prototype.v = function () {
              var t = {
                code: this.code,
                message: this.message,
              };
              return this.a && (t.serverResponse = this.a), t;
            }),
            (T.prototype.toJSON = function () {
              return this.v();
            });
          var A,
            O = 'auth/',
            P = {
              'admin-restricted-operation':
                'This operation is restricted to administrators only.',
              'argument-error': '',
              'app-not-authorized':
                "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              'app-not-installed':
                'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
              'captcha-check-failed':
                'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
              'code-expired':
                'The SMS code has expired. Please re-send the verification code to try again.',
              'cordova-not-ready': 'Cordova framework is not ready.',
              'cors-unsupported': 'This browser is not supported.',
              'credential-already-in-use':
                'This credential is already associated with a different user account.',
              'custom-token-mismatch':
                'The custom token corresponds to a different audience.',
              'requires-recent-login':
                'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
              'dynamic-link-not-activated':
                'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
              'email-change-needs-verification':
                'Multi-factor users must always have a verified email.',
              'email-already-in-use':
                'The email address is already in use by another account.',
              'expired-action-code': 'The action code has expired. ',
              'cancelled-popup-request':
                'This operation has been cancelled due to another conflicting popup being opened.',
              'internal-error': 'An internal error has occurred.',
              'invalid-app-credential':
                'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
              'invalid-app-id':
                'The mobile app identifier is not registed for the current project.',
              'invalid-user-token':
                "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              'invalid-auth-event': 'An internal error has occurred.',
              'invalid-verification-code':
                'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
              'invalid-continue-uri':
                'The continue URL provided in the request is invalid.',
              'invalid-cordova-configuration':
                'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
              'invalid-custom-token':
                'The custom token format is incorrect. Please check the documentation.',
              'invalid-dynamic-link-domain':
                'The provided dynamic link domain is not configured or authorized for the current project.',
              'invalid-email': 'The email address is badly formatted.',
              'invalid-api-key':
                'Your API key is invalid, please check you have copied it correctly.',
              'invalid-cert-hash':
                'The SHA-1 certificate hash provided is invalid.',
              'invalid-credential':
                'The supplied auth credential is malformed or has expired.',
              'invalid-message-payload':
                'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
              'invalid-multi-factor-session':
                'The request does not contain a valid proof of first factor successful sign-in.',
              'invalid-oauth-provider':
                'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
              'invalid-oauth-client-id':
                'The OAuth client ID provided is either invalid or does not match the specified API key.',
              'unauthorized-domain':
                'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
              'invalid-action-code':
                'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
              'wrong-password':
                'The password is invalid or the user does not have a password.',
              'invalid-persistence-type':
                'The specified persistence type is invalid. It can only be local, session or none.',
              'invalid-phone-number':
                'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
              'invalid-provider-id': 'The specified provider ID is invalid.',
              'invalid-recipient-email':
                'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
              'invalid-sender':
                'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
              'invalid-verification-id':
                'The verification ID used to create the phone auth credential is invalid.',
              'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
              'multi-factor-info-not-found':
                'The user does not have a second factor matching the identifier provided.',
              'multi-factor-auth-required':
                'Proof of ownership of a second factor is required to complete sign-in.',
              'missing-android-pkg-name':
                'An Android Package Name must be provided if the Android App is required to be installed.',
              'auth-domain-config-required':
                'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
              'missing-app-credential':
                'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
              'missing-verification-code':
                'The phone auth credential was created with an empty SMS verification code.',
              'missing-continue-uri':
                'A continue URL must be provided in the request.',
              'missing-iframe-start': 'An internal error has occurred.',
              'missing-ios-bundle-id':
                'An iOS Bundle ID must be provided if an App Store ID is provided.',
              'missing-multi-factor-info':
                'No second factor identifier is provided.',
              'missing-multi-factor-session':
                'The request is missing proof of first factor successful sign-in.',
              'missing-or-invalid-nonce':
                'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
              'missing-phone-number':
                'To send verification codes, provide a phone number for the recipient.',
              'missing-verification-id':
                'The phone auth credential was created with an empty verification ID.',
              'app-deleted': 'This instance of FirebaseApp has been deleted.',
              'account-exists-with-different-credential':
                'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
              'network-request-failed':
                'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
              'no-auth-event': 'An internal error has occurred.',
              'no-such-provider':
                'User was not linked to an account with the given provider.',
              'null-user':
                'A null user object was provided as the argument for an operation which requires a non-null user object.',
              'operation-not-allowed':
                'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
              'operation-not-supported-in-this-environment':
                'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              'popup-blocked':
                'Unable to establish a connection with the popup. It may have been blocked by the browser.',
              'popup-closed-by-user':
                'The popup has been closed by the user before finalizing the operation.',
              'provider-already-linked':
                'User can only be linked to one identity for the given provider.',
              'quota-exceeded':
                "The project's quota for this operation has been exceeded.",
              'redirect-cancelled-by-user':
                'The redirect operation has been cancelled by the user before finalizing.',
              'redirect-operation-pending':
                'A redirect sign-in operation is already pending.',
              'rejected-credential':
                'The request contains malformed or mismatching credentials.',
              'second-factor-already-in-use':
                'The second factor is already enrolled on this account.',
              'maximum-second-factor-count-exceeded':
                'The maximum allowed number of second factors on a user has been exceeded.',
              'tenant-id-mismatch':
                "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: 'The operation has timed out.',
              'user-token-expired':
                "The user's credential is no longer valid. The user must sign in again.",
              'too-many-requests':
                'We have blocked all requests from this device due to unusual activity. Try again later.',
              'unauthorized-continue-uri':
                'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
              'unsupported-first-factor':
                'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
              'unsupported-persistence-type':
                'The current environment does not support the specified persistence type.',
              'unsupported-tenant-operation':
                'This operation is not supported in a multi-tenant context.',
              'unverified-email': 'The operation requires a verified email.',
              'user-cancelled':
                'The user did not grant your application the permissions it requested.',
              'user-not-found':
                'There is no user record corresponding to this identifier. The user may have been deleted.',
              'user-disabled':
                'The user account has been disabled by an administrator.',
              'user-mismatch':
                'The supplied credentials do not correspond to the previously signed in user.',
              'user-signed-out': '',
              'weak-password':
                'The password must be 6 characters long or more.',
              'web-storage-unsupported':
                'This browser is not supported or 3rd party cookies and data may be disabled.',
            },
            k = {
              hd: {
                Ra: 'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
                Xa: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
                Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
                id: 'b',
              },
              pd: {
                Ra: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
                Xa: 'https://securetoken.googleapis.com/v1/token',
                Ua: 'https://identitytoolkit.googleapis.com/v2/',
                id: 'p',
              },
              rd: {
                Ra: 'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
                Xa: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
                Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
                id: 's',
              },
              sd: {
                Ra: 'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
                Xa: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
                Ua: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
                id: 't',
              },
            };

          function x(t) {
            for (var e in k)
              if (k[e].id === t)
                return {
                  firebaseEndpoint: (t = k[e]).Ra,
                  secureTokenEndpoint: t.Xa,
                  identityPlatformEndpoint: t.Ua,
                };
            return null;
          }

          function R(t) {
            if (!t) return !1;
            try {
              return !!t.$goog_Thenable;
            } catch (e) {
              return !1;
            }
          }

          function D(t) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, D);
            else {
              var e = Error().stack;
              e && (this.stack = e);
            }
            t && (this.message = String(t));
          }

          function L(t, e) {
            for (
              var n = '', r = (t = t.split('%s')).length - 1, i = 0;
              i < r;
              i++
            )
              n += t[i] + (i < e.length ? e[i] : '%s');
            D.call(this, n + t[r]);
          }

          function M(t, e) {
            throw new L(
              'Failure' + (t ? ': ' + t : ''),
              Array.prototype.slice.call(arguments, 1)
            );
          }

          function F(t, e) {
            (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
          }

          function j(t, e) {
            t.f(e), 100 > t.b && (t.b++, (e.next = t.a), (t.a = e));
          }

          function U() {
            this.b = this.a = null;
          }
          (A = x('__EID__') ? '__EID__' : void 0),
            I(D, Error),
            (D.prototype.name = 'CustomError'),
            I(L, D),
            (L.prototype.name = 'AssertionError'),
            (F.prototype.get = function () {
              if (0 < this.b) {
                this.b--;
                var t = this.a;
                (this.a = t.next), (t.next = null);
              } else t = this.c();
              return t;
            });
          var V = new F(
            function () {
              return new q();
            },
            function (t) {
              t.reset();
            }
          );

          function W() {
            var t = _e,
              e = null;
            return (
              t.a &&
                ((e = t.a),
                (t.a = t.a.next),
                t.a || (t.b = null),
                (e.next = null)),
              e
            );
          }

          function q() {
            this.next = this.b = this.a = null;
          }
          (U.prototype.add = function (t, e) {
            var n = V.get();
            n.set(t, e),
              this.b ? (this.b.next = n) : (this.a = n),
              (this.b = n);
          }),
            (q.prototype.set = function (t, e) {
              (this.a = t), (this.b = e), (this.next = null);
            }),
            (q.prototype.reset = function () {
              this.next = this.b = this.a = null;
            });
          var B = Array.prototype.indexOf
              ? function (t, e) {
                  return Array.prototype.indexOf.call(t, e, void 0);
                }
              : function (t, e) {
                  if ('string' === typeof t)
                    return 'string' !== typeof e || 1 != e.length
                      ? -1
                      : t.indexOf(e, 0);
                  for (var n = 0; n < t.length; n++)
                    if (n in t && t[n] === e) return n;
                  return -1;
                },
            H = Array.prototype.forEach
              ? function (t, e, n) {
                  Array.prototype.forEach.call(t, e, n);
                }
              : function (t, e, n) {
                  for (
                    var r = t.length,
                      i = 'string' === typeof t ? t.split('') : t,
                      o = 0;
                    o < r;
                    o++
                  )
                    o in i && e.call(n, i[o], o, t);
                };
          var Q = Array.prototype.filter
              ? function (t, e) {
                  return Array.prototype.filter.call(t, e, void 0);
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      r = [],
                      i = 0,
                      o = 'string' === typeof t ? t.split('') : t,
                      a = 0;
                    a < n;
                    a++
                  )
                    if (a in o) {
                      var s = o[a];
                      e.call(void 0, s, a, t) && (r[i++] = s);
                    }
                  return r;
                },
            K = Array.prototype.map
              ? function (t, e) {
                  return Array.prototype.map.call(t, e, void 0);
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      r = Array(n),
                      i = 'string' === typeof t ? t.split('') : t,
                      o = 0;
                    o < n;
                    o++
                  )
                    o in i && (r[o] = e.call(void 0, i[o], o, t));
                  return r;
                },
            G = Array.prototype.some
              ? function (t, e) {
                  return Array.prototype.some.call(t, e, void 0);
                }
              : function (t, e) {
                  for (
                    var n = t.length,
                      r = 'string' === typeof t ? t.split('') : t,
                      i = 0;
                    i < n;
                    i++
                  )
                    if (i in r && e.call(void 0, r[i], i, t)) return !0;
                  return !1;
                };

          function z(t, e) {
            return 0 <= B(t, e);
          }

          function Y(t, e) {
            var n;
            return (
              (n = 0 <= (e = B(t, e))) && Array.prototype.splice.call(t, e, 1),
              n
            );
          }

          function X(t, e) {
            !(function (t, e) {
              for (
                var n = 'string' === typeof t ? t.split('') : t,
                  r = t.length - 1;
                0 <= r;
                --r
              )
                r in n && e.call(void 0, n[r], r, t);
            })(t, function (n, r) {
              e.call(void 0, n, r, t) &&
                1 == Array.prototype.splice.call(t, r, 1).length &&
                0;
            });
          }

          function $(t) {
            return Array.prototype.concat.apply([], arguments);
          }

          function J(t) {
            var e = t.length;
            if (0 < e) {
              for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
              return n;
            }
            return [];
          }
          var Z,
            tt = String.prototype.trim
              ? function (t) {
                  return t.trim();
                }
              : function (t) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
                },
            et = /&/g,
            nt = /</g,
            rt = />/g,
            it = /"/g,
            ot = /'/g,
            at = /\x00/g,
            st = /[\x00&<>"']/;

          function ut(t, e) {
            return -1 != t.indexOf(e);
          }

          function ct(t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
          }
          t: {
            var ht = c.navigator;
            if (ht) {
              var lt = ht.userAgent;
              if (lt) {
                Z = lt;
                break t;
              }
            }
            Z = '';
          }

          function ft(t) {
            return ut(Z, t);
          }

          function pt(t, e) {
            for (var n in t) e.call(void 0, t[n], n, t);
          }

          function dt(t) {
            for (var e in t) return !1;
            return !0;
          }

          function vt(t) {
            var e,
              n = {};
            for (e in t) n[e] = t[e];
            return n;
          }
          var yt =
            'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
              ' '
            );

          function gt(t, e) {
            for (var n, r, i = 1; i < arguments.length; i++) {
              for (n in (r = arguments[i])) t[n] = r[n];
              for (var o = 0; o < yt.length; o++)
                (n = yt[o]),
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
          }

          function mt(t, e) {
            t: {
              try {
                var n = t && t.ownerDocument,
                  r = n && (n.defaultView || n.parentWindow);
                if ((r = r || c).Element && r.Location) {
                  var o = r;
                  break t;
                }
              } catch (s) {}
              o = null;
            }
            if (
              o &&
              'undefined' != typeof o[e] &&
              (!t ||
                (!(t instanceof o[e]) &&
                  (t instanceof o.Location || t instanceof o.Element)))
            ) {
              if (y(t))
                try {
                  var a =
                    t.constructor.displayName ||
                    t.constructor.name ||
                    Object.prototype.toString.call(t);
                } catch (s) {
                  a = '<object could not be stringified>';
                }
              else a = void 0 === t ? 'undefined' : null === t ? 'null' : i(t);
              M(
                'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
                e,
                a
              );
            }
          }

          function _t(t, e) {
            (this.a = (t === Et && e) || ''), (this.b = wt);
          }

          function bt(t) {
            return t instanceof _t && t.constructor === _t && t.b === wt
              ? t.a
              : (M("expected object of type Const, got '" + t + "'"),
                'type_error:Const');
          }
          (_t.prototype.ra = !0),
            (_t.prototype.qa = function () {
              return this.a;
            }),
            (_t.prototype.toString = function () {
              return 'Const{' + this.a + '}';
            });
          var wt = {},
            Et = {},
            Ct = new _t(Et, '');

          function St(t, e) {
            (this.a = (t === Pt && e) || ''), (this.b = Ot);
          }

          function It(t) {
            return t instanceof St && t.constructor === St && t.b === Ot
              ? t.a
              : (M(
                  "expected object of type TrustedResourceUrl, got '" +
                    t +
                    "' of type " +
                    p(t)
                ),
                'type_error:TrustedResourceUrl');
          }

          function Tt(t, e) {
            var n = bt(t);
            if (!At.test(n))
              throw Error('Invalid TrustedResourceUrl format: ' + n);
            return (
              (t = n.replace(Nt, function (t, r) {
                if (!Object.prototype.hasOwnProperty.call(e, r))
                  throw Error(
                    'Found marker, "' +
                      r +
                      '", in format string, "' +
                      n +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(e)
                  );
                return (t = e[r]) instanceof _t
                  ? bt(t)
                  : encodeURIComponent(String(t));
              })),
              new St(Pt, t)
            );
          }
          (St.prototype.ra = !0),
            (St.prototype.qa = function () {
              return this.a.toString();
            }),
            (St.prototype.toString = function () {
              return 'TrustedResourceUrl{' + this.a + '}';
            });
          var Nt = /%{(\w+)}/g,
            At =
              /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            Ot = {},
            Pt = {};

          function kt(t, e) {
            (this.a = (t === Mt && e) || ''), (this.b = Lt);
          }

          function xt(t) {
            return t instanceof kt && t.constructor === kt && t.b === Lt
              ? t.a
              : (M(
                  "expected object of type SafeUrl, got '" +
                    t +
                    "' of type " +
                    p(t)
                ),
                'type_error:SafeUrl');
          }
          (kt.prototype.ra = !0),
            (kt.prototype.qa = function () {
              return this.a.toString();
            }),
            (kt.prototype.toString = function () {
              return 'SafeUrl{' + this.a + '}';
            });
          var Rt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

          function Dt(t) {
            return t instanceof kt
              ? t
              : ((t = 'object' == i(t) && t.ra ? t.qa() : String(t)),
                Rt.test(t) || (t = 'about:invalid#zClosurez'),
                new kt(Mt, t));
          }
          var Lt = {},
            Mt = {};

          function Ft() {
            (this.a = ''), (this.b = Ut);
          }

          function jt(t) {
            return t instanceof Ft && t.constructor === Ft && t.b === Ut
              ? t.a
              : (M(
                  "expected object of type SafeHtml, got '" +
                    t +
                    "' of type " +
                    p(t)
                ),
                'type_error:SafeHtml');
          }
          (Ft.prototype.ra = !0),
            (Ft.prototype.qa = function () {
              return this.a.toString();
            }),
            (Ft.prototype.toString = function () {
              return 'SafeHtml{' + this.a + '}';
            });
          var Ut = {};

          function Vt(t) {
            var e = new Ft();
            return (e.a = t), e;
          }
          Vt('<!DOCTYPE html>');
          var Wt = Vt('');

          function qt(t, e) {
            for (
              var n = t.split('%s'),
                r = '',
                i = Array.prototype.slice.call(arguments, 1);
              i.length && 1 < n.length;

            )
              r += n.shift() + i.shift();
            return r + n.join('%s');
          }

          function Bt(t) {
            return (
              st.test(t) &&
                (-1 != t.indexOf('&') && (t = t.replace(et, '&amp;')),
                -1 != t.indexOf('<') && (t = t.replace(nt, '&lt;')),
                -1 != t.indexOf('>') && (t = t.replace(rt, '&gt;')),
                -1 != t.indexOf('"') && (t = t.replace(it, '&quot;')),
                -1 != t.indexOf("'") && (t = t.replace(ot, '&#39;')),
                -1 != t.indexOf('\0') && (t = t.replace(at, '&#0;'))),
              t
            );
          }

          function Ht(t) {
            return Ht[' '](t), t;
          }
          Vt('<br>'), (Ht[' '] = f);
          var Qt,
            Kt,
            Gt = ft('Opera'),
            zt = ft('Trident') || ft('MSIE'),
            Yt = ft('Edge'),
            Xt = Yt || zt,
            $t =
              ft('Gecko') &&
              !(ut(Z.toLowerCase(), 'webkit') && !ft('Edge')) &&
              !(ft('Trident') || ft('MSIE')) &&
              !ft('Edge'),
            Jt = ut(Z.toLowerCase(), 'webkit') && !ft('Edge');

          function Zt() {
            var t = c.document;
            return t ? t.documentMode : void 0;
          }
          t: {
            var te = '',
              ee =
                ((Kt = Z),
                $t
                  ? /rv:([^\);]+)(\)|;)/.exec(Kt)
                  : Yt
                  ? /Edge\/([\d\.]+)/.exec(Kt)
                  : zt
                  ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Kt)
                  : Jt
                  ? /WebKit\/(\S+)/.exec(Kt)
                  : Gt
                  ? /(?:Version)[ \/]?(\S+)/.exec(Kt)
                  : void 0);
            if ((ee && (te = ee ? ee[1] : ''), zt)) {
              var ne = Zt();
              if (null != ne && ne > parseFloat(te)) {
                Qt = String(ne);
                break t;
              }
            }
            Qt = te;
          }
          var re,
            ie = {};

          function oe(t) {
            return (function (t, e) {
              var n = ie;
              return Object.prototype.hasOwnProperty.call(n, t)
                ? n[t]
                : (n[t] = e(t));
            })(t, function () {
              for (
                var e = 0,
                  n = tt(String(Qt)).split('.'),
                  r = tt(String(t)).split('.'),
                  i = Math.max(n.length, r.length),
                  o = 0;
                0 == e && o < i;
                o++
              ) {
                var a = n[o] || '',
                  s = r[o] || '';
                do {
                  if (
                    ((a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                    (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                    0 == a[0].length && 0 == s[0].length)
                  )
                    break;
                  (e =
                    ct(
                      0 == a[1].length ? 0 : parseInt(a[1], 10),
                      0 == s[1].length ? 0 : parseInt(s[1], 10)
                    ) ||
                    ct(0 == a[2].length, 0 == s[2].length) ||
                    ct(a[2], s[2])),
                    (a = a[3]),
                    (s = s[3]);
                } while (0 == e);
              }
              return 0 <= e;
            });
          }
          re = c.document && zt ? Zt() : void 0;
          try {
            new self.OffscreenCanvas(0, 0).getContext('2d');
          } catch (Kt) {}
          var ae = !zt || 9 <= Number(re);

          function se(t) {
            var e = document;
            return 'string' === typeof t ? e.getElementById(t) : t;
          }

          function ue(t, e) {
            pt(e, function (e, n) {
              e && 'object' == i(e) && e.ra && (e = e.qa()),
                'style' == n
                  ? (t.style.cssText = e)
                  : 'class' == n
                  ? (t.className = e)
                  : 'for' == n
                  ? (t.htmlFor = e)
                  : le.hasOwnProperty(n)
                  ? t.setAttribute(le[n], e)
                  : 0 == n.lastIndexOf('aria-', 0) ||
                    0 == n.lastIndexOf('data-', 0)
                  ? t.setAttribute(n, e)
                  : (t[n] = e);
            });
          }
          var ce,
            he,
            le = {
              cellpadding: 'cellPadding',
              cellspacing: 'cellSpacing',
              colspan: 'colSpan',
              frameborder: 'frameBorder',
              height: 'height',
              maxlength: 'maxLength',
              nonce: 'nonce',
              role: 'role',
              rowspan: 'rowSpan',
              type: 'type',
              usemap: 'useMap',
              valign: 'vAlign',
              width: 'width',
            };

          function fe(t, e, n) {
            function r(n) {
              n &&
                e.appendChild('string' === typeof n ? t.createTextNode(n) : n);
            }
            for (var i = 2; i < n.length; i++) {
              var o = n[i];
              !d(o) || (y(o) && 0 < o.nodeType) ? r(o) : H(de(o) ? J(o) : o, r);
            }
          }

          function pe(t, e) {
            return (
              (e = String(e)),
              'application/xhtml+xml' === t.contentType &&
                (e = e.toLowerCase()),
              t.createElement(e)
            );
          }

          function de(t) {
            if (t && 'number' == typeof t.length) {
              if (y(t))
                return 'function' == typeof t.item || 'string' == typeof t.item;
              if (v(t)) return 'function' == typeof t.item;
            }
            return !1;
          }

          function ve(t) {
            c.setTimeout(function () {
              throw t;
            }, 0);
          }

          function ye() {
            var t = c.MessageChannel;
            if (
              ('undefined' === typeof t &&
                'undefined' !== typeof window &&
                window.postMessage &&
                window.addEventListener &&
                !ft('Presto') &&
                (t = function () {
                  var t = pe(document, 'IFRAME');
                  (t.style.display = 'none'),
                    (function (t) {
                      var e = new St(Pt, bt(Ct));
                      mt(t, 'HTMLIFrameElement'), (t.src = It(e).toString());
                    })(t),
                    document.documentElement.appendChild(t);
                  var e = t.contentWindow;
                  (t = e.document).open(), t.write(jt(Wt)), t.close();
                  var n = 'callImmediate' + Math.random(),
                    r =
                      'file:' == e.location.protocol
                        ? '*'
                        : e.location.protocol + '//' + e.location.host;
                  (t = E(function (t) {
                    ('*' != r && t.origin != r) ||
                      t.data != n ||
                      this.port1.onmessage();
                  }, this)),
                    e.addEventListener('message', t, !1),
                    (this.port1 = {}),
                    (this.port2 = {
                      postMessage: function () {
                        e.postMessage(n, r);
                      },
                    });
                }),
              'undefined' !== typeof t && !ft('Trident') && !ft('MSIE'))
            ) {
              var e = new t(),
                n = {},
                r = n;
              return (
                (e.port1.onmessage = function () {
                  if (void 0 !== n.next) {
                    var t = (n = n.next).Db;
                    (n.Db = null), t();
                  }
                }),
                function (t) {
                  (r.next = {
                    Db: t,
                  }),
                    (r = r.next),
                    e.port2.postMessage(0);
                }
              );
            }
            return function (t) {
              c.setTimeout(t, 0);
            };
          }

          function ge(t, e) {
            he ||
              (function () {
                if (c.Promise && c.Promise.resolve) {
                  var t = c.Promise.resolve(void 0);
                  he = function () {
                    t.then(be);
                  };
                } else
                  he = function () {
                    var t = be;
                    !v(c.setImmediate) ||
                    (c.Window &&
                      c.Window.prototype &&
                      !ft('Edge') &&
                      c.Window.prototype.setImmediate == c.setImmediate)
                      ? (ce || (ce = ye()), ce(t))
                      : c.setImmediate(t);
                  };
              })(),
              me || (he(), (me = !0)),
              _e.add(t, e);
          }
          var me = !1,
            _e = new U();

          function be() {
            for (var t; (t = W()); ) {
              try {
                t.a.call(t.b);
              } catch (e) {
                ve(e);
              }
              j(V, t);
            }
            me = !1;
          }

          function we(t, e) {
            if (
              ((this.a = Ee),
              (this.i = void 0),
              (this.f = this.b = this.c = null),
              (this.g = this.h = !1),
              t != f)
            )
              try {
                var n = this;
                t.call(
                  e,
                  function (t) {
                    Le(n, Ce, t);
                  },
                  function (t) {
                    if (!(t instanceof qe))
                      try {
                        if (t instanceof Error) throw t;
                        throw Error('Promise rejected.');
                      } catch (e) {}
                    Le(n, Se, t);
                  }
                );
              } catch (r) {
                Le(this, Se, r);
              }
          }
          var Ee = 0,
            Ce = 2,
            Se = 3;

          function Ie() {
            (this.next = this.f = this.b = this.g = this.a = null),
              (this.c = !1);
          }
          Ie.prototype.reset = function () {
            (this.f = this.b = this.g = this.a = null), (this.c = !1);
          };
          var Te = new F(
            function () {
              return new Ie();
            },
            function (t) {
              t.reset();
            }
          );

          function Ne(t, e, n) {
            var r = Te.get();
            return (r.g = t), (r.b = e), (r.f = n), r;
          }

          function Ae(t) {
            if (t instanceof we) return t;
            var e = new we(f);
            return Le(e, Ce, t), e;
          }

          function Oe(t) {
            return new we(function (e, n) {
              n(t);
            });
          }

          function Pe(t, e, n) {
            Me(t, e, n, null) || ge(C(e, t));
          }

          function ke(t) {
            return new we(function (e) {
              var n = t.length,
                r = [];
              if (n)
                for (
                  var i = function (t, i, o) {
                      n--,
                        (r[t] = i
                          ? {
                              Mb: !0,
                              value: o,
                            }
                          : {
                              Mb: !1,
                              reason: o,
                            }),
                        0 == n && e(r);
                    },
                    o = 0;
                  o < t.length;
                  o++
                )
                  Pe(t[o], C(i, o, !0), C(i, o, !1));
              else e(r);
            });
          }

          function xe(t, e) {
            if (t.a == Ee)
              if (t.c) {
                var n = t.c;
                if (n.b) {
                  for (
                    var r = 0, i = null, o = null, a = n.b;
                    a && (a.c || (r++, a.a == t && (i = a), !(i && 1 < r)));
                    a = a.next
                  )
                    i || (o = a);
                  i &&
                    (n.a == Ee && 1 == r
                      ? xe(n, e)
                      : (o
                          ? ((r = o).next == n.f && (n.f = r),
                            (r.next = r.next.next))
                          : je(n),
                        Ue(n, i, Se, e)));
                }
                t.c = null;
              } else Le(t, Se, e);
          }

          function Re(t, e) {
            t.b || (t.a != Ce && t.a != Se) || Fe(t),
              t.f ? (t.f.next = e) : (t.b = e),
              (t.f = e);
          }

          function De(t, e, n, r) {
            var i = Ne(null, null, null);
            return (
              (i.a = new we(function (t, o) {
                (i.g = e
                  ? function (n) {
                      try {
                        var i = e.call(r, n);
                        t(i);
                      } catch (a) {
                        o(a);
                      }
                    }
                  : t),
                  (i.b = n
                    ? function (e) {
                        try {
                          var i = n.call(r, e);
                          void 0 === i && e instanceof qe ? o(e) : t(i);
                        } catch (a) {
                          o(a);
                        }
                      }
                    : o);
              })),
              (i.a.c = t),
              Re(t, i),
              i.a
            );
          }

          function Le(t, e, n) {
            t.a == Ee &&
              (t === n &&
                ((e = Se),
                (n = new TypeError('Promise cannot resolve to itself'))),
              (t.a = 1),
              Me(n, t.Yc, t.Zc, t) ||
                ((t.i = n),
                (t.a = e),
                (t.c = null),
                Fe(t),
                e != Se ||
                  n instanceof qe ||
                  (function (t, e) {
                    (t.g = !0),
                      ge(function () {
                        t.g && We.call(null, e);
                      });
                  })(t, n)));
          }

          function Me(t, e, n, r) {
            if (t instanceof we) return Re(t, Ne(e || f, n || null, r)), !0;
            if (R(t)) return t.then(e, n, r), !0;
            if (y(t))
              try {
                var i = t.then;
                if (v(i))
                  return (
                    (function (t, e, n, r, i) {
                      function o(t) {
                        s || ((s = !0), r.call(i, t));
                      }

                      function a(t) {
                        s || ((s = !0), n.call(i, t));
                      }
                      var s = !1;
                      try {
                        e.call(t, a, o);
                      } catch (u) {
                        o(u);
                      }
                    })(t, i, e, n, r),
                    !0
                  );
              } catch (o) {
                return n.call(r, o), !0;
              }
            return !1;
          }

          function Fe(t) {
            t.h || ((t.h = !0), ge(t.ec, t));
          }

          function je(t) {
            var e = null;
            return (
              t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
              t.b || (t.f = null),
              e
            );
          }

          function Ue(t, e, n, r) {
            if (n == Se && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1;
            if (e.a) (e.a.c = null), Ve(e, n, r);
            else
              try {
                e.c ? e.g.call(e.f) : Ve(e, n, r);
              } catch (i) {
                We.call(null, i);
              }
            j(Te, e);
          }

          function Ve(t, e, n) {
            e == Ce ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
          }
          (we.prototype.then = function (t, e, n) {
            return De(this, v(t) ? t : null, v(e) ? e : null, n);
          }),
            (we.prototype.$goog_Thenable = !0),
            ((e = we.prototype).ma = function (t, e) {
              return ((t = Ne(t, t, e)).c = !0), Re(this, t), this;
            }),
            (e.o = function (t, e) {
              return De(this, null, t, e);
            }),
            (e.cancel = function (t) {
              if (this.a == Ee) {
                var e = new qe(t);
                ge(function () {
                  xe(this, e);
                }, this);
              }
            }),
            (e.Yc = function (t) {
              (this.a = Ee), Le(this, Ce, t);
            }),
            (e.Zc = function (t) {
              (this.a = Ee), Le(this, Se, t);
            }),
            (e.ec = function () {
              for (var t; (t = je(this)); ) Ue(this, t, this.a, this.i);
              this.h = !1;
            });
          var We = ve;

          function qe(t) {
            D.call(this, t);
          }

          function Be() {
            0 != He && (Qe[g(this)] = this),
              (this.wa = this.wa),
              (this.na = this.na);
          }
          I(qe, D), (qe.prototype.name = 'cancel');
          var He = 0,
            Qe = {};

          function Ke(t) {
            if (!t.wa && ((t.wa = !0), t.Ba(), 0 != He)) {
              var e = g(t);
              if (0 != He && t.na && 0 < t.na.length)
                throw Error(
                  t +
                    " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
                );
              delete Qe[e];
            }
          }
          (Be.prototype.wa = !1),
            (Be.prototype.Ba = function () {
              if (this.na) for (; this.na.length; ) this.na.shift()();
            });
          var Ge =
              Object.freeze ||
              function (t) {
                return t;
              },
            ze = !zt || 9 <= Number(re),
            Ye = zt && !oe('9'),
            Xe = (function () {
              if (!c.addEventListener || !Object.defineProperty) return !1;
              var t = !1,
                e = Object.defineProperty({}, 'passive', {
                  get: function () {
                    t = !0;
                  },
                });
              try {
                c.addEventListener('test', f, e),
                  c.removeEventListener('test', f, e);
              } catch (n) {}
              return t;
            })();

          function $e(t, e) {
            (this.type = t),
              (this.b = this.target = e),
              (this.defaultPrevented = !1);
          }

          function Je(t, e) {
            if (
              ($e.call(this, t ? t.type : ''),
              (this.relatedTarget = this.b = this.target = null),
              (this.button =
                this.screenY =
                this.screenX =
                this.clientY =
                this.clientX =
                  0),
              (this.key = ''),
              (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
              (this.pointerId = 0),
              (this.pointerType = ''),
              (this.a = null),
              t)
            ) {
              var n = (this.type = t.type),
                r =
                  t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : null;
              if (
                ((this.target = t.target || t.srcElement),
                (this.b = e),
                (e = t.relatedTarget))
              ) {
                if ($t) {
                  t: {
                    try {
                      Ht(e.nodeName);
                      var i = !0;
                      break t;
                    } catch (o) {}
                    i = !1;
                  }
                  i || (e = null);
                }
              } else
                'mouseover' == n
                  ? (e = t.fromElement)
                  : 'mouseout' == n && (e = t.toElement);
              (this.relatedTarget = e),
                r
                  ? ((this.clientX =
                      void 0 !== r.clientX ? r.clientX : r.pageX),
                    (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                    (this.screenX = r.screenX || 0),
                    (this.screenY = r.screenY || 0))
                  : ((this.clientX =
                      void 0 !== t.clientX ? t.clientX : t.pageX),
                    (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                    (this.screenX = t.screenX || 0),
                    (this.screenY = t.screenY || 0)),
                (this.button = t.button),
                (this.key = t.key || ''),
                (this.ctrlKey = t.ctrlKey),
                (this.altKey = t.altKey),
                (this.shiftKey = t.shiftKey),
                (this.metaKey = t.metaKey),
                (this.pointerId = t.pointerId || 0),
                (this.pointerType =
                  'string' === typeof t.pointerType
                    ? t.pointerType
                    : Ze[t.pointerType] || ''),
                (this.a = t),
                t.defaultPrevented && this.preventDefault();
            }
          }
          ($e.prototype.preventDefault = function () {
            this.defaultPrevented = !0;
          }),
            I(Je, $e);
          var Ze = Ge({
            2: 'touch',
            3: 'pen',
            4: 'mouse',
          });
          (Je.prototype.preventDefault = function () {
            Je.Za.preventDefault.call(this);
            var t = this.a;
            if (t.preventDefault) t.preventDefault();
            else if (((t.returnValue = !1), Ye))
              try {
                (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) &&
                  (t.keyCode = -1);
              } catch (e) {}
          }),
            (Je.prototype.f = function () {
              return this.a;
            });
          var tn = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
            en = 0;

          function nn(t, e, n, r, i) {
            (this.listener = t),
              (this.proxy = null),
              (this.src = e),
              (this.type = n),
              (this.capture = !!r),
              (this.Ta = i),
              (this.key = ++en),
              (this.ua = this.Na = !1);
          }

          function rn(t) {
            (t.ua = !0),
              (t.listener = null),
              (t.proxy = null),
              (t.src = null),
              (t.Ta = null);
          }

          function on(t) {
            (this.src = t), (this.a = {}), (this.b = 0);
          }

          function an(t, e) {
            var n = e.type;
            n in t.a &&
              Y(t.a[n], e) &&
              (rn(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
          }

          function sn(t, e, n, r) {
            for (var i = 0; i < t.length; ++i) {
              var o = t[i];
              if (!o.ua && o.listener == e && o.capture == !!n && o.Ta == r)
                return i;
            }
            return -1;
          }
          on.prototype.add = function (t, e, n, r, i) {
            var o = t.toString();
            (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
            var a = sn(t, e, r, i);
            return (
              -1 < a
                ? ((e = t[a]), n || (e.Na = !1))
                : (((e = new nn(e, this.src, o, !!r, i)).Na = n), t.push(e)),
              e
            );
          };
          var un = 'closure_lm_' + ((1e6 * Math.random()) | 0),
            cn = {};

          function hn(t, e, n, r, i) {
            if (r && r.once) fn(t, e, n, r, i);
            else if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) hn(t, e[o], n, r, i);
            else
              (n = wn(n)),
                t && t[tn]
                  ? Cn(t, e, n, y(r) ? !!r.capture : !!r, i)
                  : ln(t, e, n, !1, r, i);
          }

          function ln(t, e, n, r, i, o) {
            if (!e) throw Error('Invalid event type');
            var a = y(i) ? !!i.capture : !!i,
              s = _n(t);
            if (
              (s || (t[un] = s = new on(t)), !(n = s.add(e, n, r, a, o)).proxy)
            ) {
              if (
                ((r = (function () {
                  var t = mn,
                    e = ze
                      ? function (n) {
                          return t.call(e.src, e.listener, n);
                        }
                      : function (n) {
                          if (!(n = t.call(e.src, e.listener, n))) return n;
                        };
                  return e;
                })()),
                (n.proxy = r),
                (r.src = t),
                (r.listener = n),
                t.addEventListener)
              )
                Xe || (i = a),
                  void 0 === i && (i = !1),
                  t.addEventListener(e.toString(), r, i);
              else if (t.attachEvent) t.attachEvent(vn(e.toString()), r);
              else {
                if (!t.addListener || !t.removeListener)
                  throw Error(
                    'addEventListener and attachEvent are unavailable.'
                  );
                t.addListener(r);
              }
              0;
            }
          }

          function fn(t, e, n, r, i) {
            if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) fn(t, e[o], n, r, i);
            else
              (n = wn(n)),
                t && t[tn]
                  ? Sn(t, e, n, y(r) ? !!r.capture : !!r, i)
                  : ln(t, e, n, !0, r, i);
          }

          function pn(t, e, n, r, i) {
            if (Array.isArray(e))
              for (var o = 0; o < e.length; o++) pn(t, e[o], n, r, i);
            else
              (r = y(r) ? !!r.capture : !!r),
                (n = wn(n)),
                t && t[tn]
                  ? ((t = t.u),
                    (e = String(e).toString()) in t.a &&
                      -1 < (n = sn((o = t.a[e]), n, r, i)) &&
                      (rn(o[n]),
                      Array.prototype.splice.call(o, n, 1),
                      0 == o.length && (delete t.a[e], t.b--)))
                  : t &&
                    (t = _n(t)) &&
                    ((e = t.a[e.toString()]),
                    (t = -1),
                    e && (t = sn(e, n, r, i)),
                    (n = -1 < t ? e[t] : null) && dn(n));
          }

          function dn(t) {
            if ('number' !== typeof t && t && !t.ua) {
              var e = t.src;
              if (e && e[tn]) an(e.u, t);
              else {
                var n = t.type,
                  r = t.proxy;
                e.removeEventListener
                  ? e.removeEventListener(n, r, t.capture)
                  : e.detachEvent
                  ? e.detachEvent(vn(n), r)
                  : e.addListener && e.removeListener && e.removeListener(r),
                  (n = _n(e))
                    ? (an(n, t), 0 == n.b && ((n.src = null), (e[un] = null)))
                    : rn(t);
              }
            }
          }

          function vn(t) {
            return t in cn ? cn[t] : (cn[t] = 'on' + t);
          }

          function yn(t, e, n, r) {
            var i = !0;
            if ((t = _n(t)) && (e = t.a[e.toString()]))
              for (e = e.concat(), t = 0; t < e.length; t++) {
                var o = e[t];
                o &&
                  o.capture == n &&
                  !o.ua &&
                  ((o = gn(o, r)), (i = i && !1 !== o));
              }
            return i;
          }

          function gn(t, e) {
            var n = t.listener,
              r = t.Ta || t.src;
            return t.Na && dn(t), n.call(r, e);
          }

          function mn(t, e) {
            if (t.ua) return !0;
            if (!ze) {
              if (!e)
                t: {
                  e = ['window', 'event'];
                  for (var n = c, r = 0; r < e.length; r++)
                    if (null == (n = n[e[r]])) {
                      e = null;
                      break t;
                    }
                  e = n;
                }
              if (
                ((e = new Je((r = e), this)),
                (n = !0),
                !(0 > r.keyCode || void 0 != r.returnValue))
              ) {
                t: {
                  var i = !1;
                  if (0 == r.keyCode)
                    try {
                      r.keyCode = -1;
                      break t;
                    } catch (a) {
                      i = !0;
                    }
                  (i || void 0 == r.returnValue) && (r.returnValue = !0);
                }
                for (r = [], i = e.b; i; i = i.parentNode) r.push(i);
                for (t = t.type, i = r.length - 1; 0 <= i; i--) {
                  e.b = r[i];
                  var o = yn(r[i], t, !0, e);
                  n = n && o;
                }
                for (i = 0; i < r.length; i++)
                  (e.b = r[i]), (o = yn(r[i], t, !1, e)), (n = n && o);
              }
              return n;
            }
            return gn(t, new Je(e, this));
          }

          function _n(t) {
            return (t = t[un]) instanceof on ? t : null;
          }
          var bn = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);

          function wn(t) {
            return v(t)
              ? t
              : (t[bn] ||
                  (t[bn] = function (e) {
                    return t.handleEvent(e);
                  }),
                t[bn]);
          }

          function En() {
            Be.call(this),
              (this.u = new on(this)),
              (this.Yb = this),
              (this.eb = null);
          }

          function Cn(t, e, n, r, i) {
            t.u.add(String(e), n, !1, r, i);
          }

          function Sn(t, e, n, r, i) {
            t.u.add(String(e), n, !0, r, i);
          }

          function In(t, e, n, r) {
            if (!(e = t.u.a[String(e)])) return !0;
            e = e.concat();
            for (var i = !0, o = 0; o < e.length; ++o) {
              var a = e[o];
              if (a && !a.ua && a.capture == n) {
                var s = a.listener,
                  u = a.Ta || a.src;
                a.Na && an(t.u, a), (i = !1 !== s.call(u, r) && i);
              }
            }
            return i && !r.defaultPrevented;
          }

          function Tn(t, e, n) {
            if (v(t)) n && (t = E(t, n));
            else {
              if (!t || 'function' != typeof t.handleEvent)
                throw Error('Invalid listener argument');
              t = E(t.handleEvent, t);
            }
            return 2147483647 < Number(e) ? -1 : c.setTimeout(t, e || 0);
          }

          function Nn(t) {
            var e = null;
            return new we(function (n, r) {
              -1 ==
                (e = Tn(function () {
                  n(void 0);
                }, t)) && r(Error('Failed to schedule timer.'));
            }).o(function (t) {
              throw (c.clearTimeout(e), t);
            });
          }

          function An(t) {
            if (t.V && 'function' == typeof t.V) return t.V();
            if ('string' === typeof t) return t.split('');
            if (d(t)) {
              for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
              return e;
            }
            for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
            return e;
          }

          function On(t) {
            if (t.X && 'function' == typeof t.X) return t.X();
            if (!t.V || 'function' != typeof t.V) {
              if (d(t) || 'string' === typeof t) {
                var e = [];
                t = t.length;
                for (var n = 0; n < t; n++) e.push(n);
                return e;
              }
              for (var r in ((e = []), (n = 0), t)) e[n++] = r;
              return e;
            }
          }

          function Pn(t, e) {
            (this.b = {}), (this.a = []), (this.c = 0);
            var n = arguments.length;
            if (1 < n) {
              if (n % 2) throw Error('Uneven number of arguments');
              for (var r = 0; r < n; r += 2)
                this.set(arguments[r], arguments[r + 1]);
            } else if (t)
              if (t instanceof Pn)
                for (n = t.X(), r = 0; r < n.length; r++)
                  this.set(n[r], t.get(n[r]));
              else for (r in t) this.set(r, t[r]);
          }

          function kn(t) {
            if (t.c != t.a.length) {
              for (var e = 0, n = 0; e < t.a.length; ) {
                var r = t.a[e];
                xn(t.b, r) && (t.a[n++] = r), e++;
              }
              t.a.length = n;
            }
            if (t.c != t.a.length) {
              var i = {};
              for (n = e = 0; e < t.a.length; )
                xn(i, (r = t.a[e])) || ((t.a[n++] = r), (i[r] = 1)), e++;
              t.a.length = n;
            }
          }

          function xn(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          I(En, Be),
            (En.prototype[tn] = !0),
            (En.prototype.addEventListener = function (t, e, n, r) {
              hn(this, t, e, n, r);
            }),
            (En.prototype.removeEventListener = function (t, e, n, r) {
              pn(this, t, e, n, r);
            }),
            (En.prototype.dispatchEvent = function (t) {
              var e,
                n = this.eb;
              if (n) for (e = []; n; n = n.eb) e.push(n);
              n = this.Yb;
              var r = t.type || t;
              if ('string' === typeof t) t = new $e(t, n);
              else if (t instanceof $e) t.target = t.target || n;
              else {
                var i = t;
                gt((t = new $e(r, n)), i);
              }
              if (((i = !0), e))
                for (var o = e.length - 1; 0 <= o; o--) {
                  var a = (t.b = e[o]);
                  i = In(a, r, !0, t) && i;
                }
              if (
                ((i = In((a = t.b = n), r, !0, t) && i),
                (i = In(a, r, !1, t) && i),
                e)
              )
                for (o = 0; o < e.length; o++)
                  i = In((a = t.b = e[o]), r, !1, t) && i;
              return i;
            }),
            (En.prototype.Ba = function () {
              if ((En.Za.Ba.call(this), this.u)) {
                var t,
                  e = this.u;
                for (t in e.a) {
                  for (var n = e.a[t], r = 0; r < n.length; r++) rn(n[r]);
                  delete e.a[t], e.b--;
                }
              }
              this.eb = null;
            }),
            ((e = Pn.prototype).V = function () {
              kn(this);
              for (var t = [], e = 0; e < this.a.length; e++)
                t.push(this.b[this.a[e]]);
              return t;
            }),
            (e.X = function () {
              return kn(this), this.a.concat();
            }),
            (e.clear = function () {
              (this.b = {}), (this.c = this.a.length = 0);
            }),
            (e.get = function (t, e) {
              return xn(this.b, t) ? this.b[t] : e;
            }),
            (e.set = function (t, e) {
              xn(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
            }),
            (e.forEach = function (t, e) {
              for (var n = this.X(), r = 0; r < n.length; r++) {
                var i = n[r],
                  o = this.get(i);
                t.call(e, o, i, this);
              }
            });
          var Rn =
            /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

          function Dn(t, e) {
            var n;
            (this.b = this.i = this.f = ''),
              (this.l = null),
              (this.g = this.c = ''),
              (this.h = !1),
              t instanceof Dn
                ? ((this.h = void 0 !== e ? e : t.h),
                  Ln(this, t.f),
                  (this.i = t.i),
                  (this.b = t.b),
                  Mn(this, t.l),
                  (this.c = t.c),
                  Fn(this, nr(t.a)),
                  (this.g = t.g))
                : t && (n = String(t).match(Rn))
                ? ((this.h = !!e),
                  Ln(this, n[1] || '', !0),
                  (this.i = qn(n[2] || '')),
                  (this.b = qn(n[3] || '', !0)),
                  Mn(this, n[4]),
                  (this.c = qn(n[5] || '', !0)),
                  Fn(this, n[6] || '', !0),
                  (this.g = qn(n[7] || '')))
                : ((this.h = !!e), (this.a = new Xn(null, this.h)));
          }

          function Ln(t, e, n) {
            (t.f = n ? qn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
          }

          function Mn(t, e) {
            if (e) {
              if (((e = Number(e)), isNaN(e) || 0 > e))
                throw Error('Bad port number ' + e);
              t.l = e;
            } else t.l = null;
          }

          function Fn(t, e, n) {
            e instanceof Xn
              ? ((t.a = e),
                (function (t, e) {
                  e &&
                    !t.f &&
                    ($n(t),
                    (t.c = null),
                    t.a.forEach(function (t, e) {
                      var n = e.toLowerCase();
                      e != n && (Zn(this, e), er(this, n, t));
                    }, t)),
                    (t.f = e);
                })(t.a, t.h))
              : (n || (e = Bn(e, zn)), (t.a = new Xn(e, t.h)));
          }

          function jn(t, e, n) {
            t.a.set(e, n);
          }

          function Un(t, e) {
            return t.a.get(e);
          }

          function Vn(t) {
            return t instanceof Dn ? new Dn(t) : new Dn(t, void 0);
          }

          function Wn(t, e) {
            var n = new Dn(null, void 0);
            return Ln(n, 'https'), t && (n.b = t), e && (n.c = e), n;
          }

          function qn(t, e) {
            return t
              ? e
                ? decodeURI(t.replace(/%25/g, '%2525'))
                : decodeURIComponent(t)
              : '';
          }

          function Bn(t, e, n) {
            return 'string' === typeof t
              ? ((t = encodeURI(t).replace(e, Hn)),
                n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
                t)
              : null;
          }

          function Hn(t) {
            return (
              '%' +
              (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
              (15 & t).toString(16)
            );
          }
          (Dn.prototype.toString = function () {
            var t = [],
              e = this.f;
            e && t.push(Bn(e, Qn, !0), ':');
            var n = this.b;
            return (
              (n || 'file' == e) &&
                (t.push('//'),
                (e = this.i) && t.push(Bn(e, Qn, !0), '@'),
                t.push(
                  encodeURIComponent(String(n)).replace(
                    /%25([0-9a-fA-F]{2})/g,
                    '%$1'
                  )
                ),
                null != (n = this.l) && t.push(':', String(n))),
              (n = this.c) &&
                (this.b && '/' != n.charAt(0) && t.push('/'),
                t.push(Bn(n, '/' == n.charAt(0) ? Gn : Kn, !0))),
              (n = this.a.toString()) && t.push('?', n),
              (n = this.g) && t.push('#', Bn(n, Yn)),
              t.join('')
            );
          }),
            (Dn.prototype.resolve = function (t) {
              var e = new Dn(this),
                n = !!t.f;
              n ? Ln(e, t.f) : (n = !!t.i),
                n ? (e.i = t.i) : (n = !!t.b),
                n ? (e.b = t.b) : (n = null != t.l);
              var r = t.c;
              if (n) Mn(e, t.l);
              else if ((n = !!t.c)) {
                if ('/' != r.charAt(0))
                  if (this.b && !this.c) r = '/' + r;
                  else {
                    var i = e.c.lastIndexOf('/');
                    -1 != i && (r = e.c.substr(0, i + 1) + r);
                  }
                if ('..' == (i = r) || '.' == i) r = '';
                else if (ut(i, './') || ut(i, '/.')) {
                  (r = 0 == i.lastIndexOf('/', 0)), (i = i.split('/'));
                  for (var o = [], a = 0; a < i.length; ) {
                    var s = i[a++];
                    '.' == s
                      ? r && a == i.length && o.push('')
                      : '..' == s
                      ? ((1 < o.length || (1 == o.length && '' != o[0])) &&
                          o.pop(),
                        r && a == i.length && o.push(''))
                      : (o.push(s), (r = !0));
                  }
                  r = o.join('/');
                } else r = i;
              }
              return (
                n ? (e.c = r) : (n = '' !== t.a.toString()),
                n ? Fn(e, nr(t.a)) : (n = !!t.g),
                n && (e.g = t.g),
                e
              );
            });
          var Qn = /[#\/\?@]/g,
            Kn = /[#\?:]/g,
            Gn = /[#\?]/g,
            zn = /[#\?@]/g,
            Yn = /#/g;

          function Xn(t, e) {
            (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
          }

          function $n(t) {
            t.a ||
              ((t.a = new Pn()),
              (t.b = 0),
              t.c &&
                (function (t, e) {
                  if (t) {
                    t = t.split('&');
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n].indexOf('='),
                        i = null;
                      if (0 <= r) {
                        var o = t[n].substring(0, r);
                        i = t[n].substring(r + 1);
                      } else o = t[n];
                      e(o, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
                    }
                  }
                })(t.c, function (e, n) {
                  t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
                }));
          }

          function Jn(t) {
            var e = On(t);
            if ('undefined' == typeof e) throw Error('Keys are undefined');
            var n = new Xn(null, void 0);
            t = An(t);
            for (var r = 0; r < e.length; r++) {
              var i = e[r],
                o = t[r];
              Array.isArray(o) ? er(n, i, o) : n.add(i, o);
            }
            return n;
          }

          function Zn(t, e) {
            $n(t),
              (e = rr(t, e)),
              xn(t.a.b, e) &&
                ((t.c = null),
                (t.b -= t.a.get(e).length),
                xn((t = t.a).b, e) &&
                  (delete t.b[e], t.c--, t.a.length > 2 * t.c && kn(t)));
          }

          function tr(t, e) {
            return $n(t), (e = rr(t, e)), xn(t.a.b, e);
          }

          function er(t, e, n) {
            Zn(t, e),
              0 < n.length &&
                ((t.c = null), t.a.set(rr(t, e), J(n)), (t.b += n.length));
          }

          function nr(t) {
            var e = new Xn();
            return (e.c = t.c), t.a && ((e.a = new Pn(t.a)), (e.b = t.b)), e;
          }

          function rr(t, e) {
            return (e = String(e)), t.f && (e = e.toLowerCase()), e;
          }

          function ir(t) {
            var e = [];
            return ar(new or(), t, e), e.join('');
          }

          function or() {}

          function ar(t, e, n) {
            if (null == e) n.push('null');
            else {
              if ('object' == i(e)) {
                if (Array.isArray(e)) {
                  var r = e;
                  (e = r.length), n.push('[');
                  for (var o = '', a = 0; a < e; a++)
                    n.push(o), ar(t, r[a], n), (o = ',');
                  return void n.push(']');
                }
                if (
                  !(
                    e instanceof String ||
                    e instanceof Number ||
                    e instanceof Boolean
                  )
                ) {
                  for (r in (n.push('{'), (o = ''), e))
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      'function' != typeof (a = e[r]) &&
                      (n.push(o),
                      cr(r, n),
                      n.push(':'),
                      ar(t, a, n),
                      (o = ','));
                  return void n.push('}');
                }
                e = e.valueOf();
              }
              switch (i(e)) {
                case 'string':
                  cr(e, n);
                  break;
                case 'number':
                  n.push(isFinite(e) && !isNaN(e) ? String(e) : 'null');
                  break;
                case 'boolean':
                  n.push(String(e));
                  break;
                case 'function':
                  n.push('null');
                  break;
                default:
                  throw Error('Unknown type: ' + i(e));
              }
            }
          }
          ((e = Xn.prototype).add = function (t, e) {
            $n(this), (this.c = null), (t = rr(this, t));
            var n = this.a.get(t);
            return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
          }),
            (e.clear = function () {
              (this.a = this.c = null), (this.b = 0);
            }),
            (e.forEach = function (t, e) {
              $n(this),
                this.a.forEach(function (n, r) {
                  H(
                    n,
                    function (n) {
                      t.call(e, n, r, this);
                    },
                    this
                  );
                }, this);
            }),
            (e.X = function () {
              $n(this);
              for (
                var t = this.a.V(), e = this.a.X(), n = [], r = 0;
                r < e.length;
                r++
              )
                for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
              return n;
            }),
            (e.V = function (t) {
              $n(this);
              var e = [];
              if ('string' === typeof t)
                tr(this, t) && (e = $(e, this.a.get(rr(this, t))));
              else {
                t = this.a.V();
                for (var n = 0; n < t.length; n++) e = $(e, t[n]);
              }
              return e;
            }),
            (e.set = function (t, e) {
              return (
                $n(this),
                (this.c = null),
                tr(this, (t = rr(this, t))) && (this.b -= this.a.get(t).length),
                this.a.set(t, [e]),
                (this.b += 1),
                this
              );
            }),
            (e.get = function (t, e) {
              return t && 0 < (t = this.V(t)).length ? String(t[0]) : e;
            }),
            (e.toString = function () {
              if (this.c) return this.c;
              if (!this.a) return '';
              for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
                var r = e[n],
                  i = encodeURIComponent(String(r));
                r = this.V(r);
                for (var o = 0; o < r.length; o++) {
                  var a = i;
                  '' !== r[o] && (a += '=' + encodeURIComponent(String(r[o]))),
                    t.push(a);
                }
              }
              return (this.c = t.join('&'));
            });
          var sr = {
              '"': '\\"',
              '\\': '\\\\',
              '/': '\\/',
              '\b': '\\b',
              '\f': '\\f',
              '\n': '\\n',
              '\r': '\\r',
              '\t': '\\t',
              '\v': '\\u000b',
            },
            ur = /\uffff/.test('\uffff')
              ? /[\\"\x00-\x1f\x7f-\uffff]/g
              : /[\\"\x00-\x1f\x7f-\xff]/g;

          function cr(t, e) {
            e.push(
              '"',
              t.replace(ur, function (t) {
                var e = sr[t];
                return (
                  e ||
                    ((e =
                      '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                    (sr[t] = e)),
                  e
                );
              }),
              '"'
            );
          }

          function hr() {
            var t = Pr();
            return (zt && !!re && 11 == re) || /Edge\/\d+/.test(t);
          }

          function lr() {
            return (
              (c.window && c.window.location.href) ||
              (self && self.location && self.location.href) ||
              ''
            );
          }

          function fr(t, e) {
            e = e || c.window;
            var n = 'about:blank';
            t && (n = xt(Dt(t))), (e.location.href = n);
          }

          function pr(t, e) {
            var n,
              r = [];
            for (n in t)
              n in e
                ? i(t[n]) != i(e[n])
                  ? r.push(n)
                  : 'object' == i(t[n]) && null != t[n] && null != e[n]
                  ? 0 < pr(t[n], e[n]).length && r.push(n)
                  : t[n] !== e[n] && r.push(n)
                : r.push(n);
            for (n in e) n in t || r.push(n);
            return r;
          }

          function dr(t) {
            return !!(
              (t = (t || Pr()).toLowerCase()).match(/android/) ||
              t.match(/webos/) ||
              t.match(/iphone|ipad|ipod/) ||
              t.match(/blackberry/) ||
              t.match(/windows phone/) ||
              t.match(/iemobile/)
            );
          }

          function vr(t) {
            t = t || c.window;
            try {
              t.close();
            } catch (e) {}
          }

          function yr(t, e, n) {
            var r = Math.floor(1e9 * Math.random()).toString();
            (e = e || 500), (n = n || 600);
            var o = (window.screen.availHeight - n) / 2,
              a = (window.screen.availWidth - e) / 2;
            for (s in ((e = {
              width: e,
              height: n,
              top: 0 < o ? o : 0,
              left: 0 < a ? a : 0,
              location: !0,
              resizable: !0,
              statusbar: !0,
              toolbar: !1,
            }),
            (n = Pr().toLowerCase()),
            r && ((e.target = r), ut(n, 'crios/') && (e.target = '_blank')),
            Nr(Pr()) == Ir &&
              ((t = t || 'http://localhost'), (e.scrollbars = !0)),
            (n = t || ''),
            (t = e) || (t = {}),
            (r = window),
            (e =
              n instanceof kt
                ? n
                : Dt('undefined' != typeof n.href ? n.href : String(n))),
            (n = t.target || n.target),
            (o = []),
            t))
              switch (s) {
                case 'width':
                case 'height':
                case 'top':
                case 'left':
                  o.push(s + '=' + t[s]);
                  break;
                case 'target':
                case 'noopener':
                case 'noreferrer':
                  break;
                default:
                  o.push(s + '=' + (t[s] ? 1 : 0));
              }
            var s = o.join(',');
            if (
              (((ft('iPhone') && !ft('iPod') && !ft('iPad')) ||
                ft('iPad') ||
                ft('iPod')) &&
              r.navigator &&
              r.navigator.standalone &&
              n &&
              '_self' != n
                ? (mt((s = pe(document, 'A')), 'HTMLAnchorElement'),
                  e instanceof kt ||
                    e instanceof kt ||
                    ((e = 'object' == i(e) && e.ra ? e.qa() : String(e)),
                    Rt.test(e) || (e = 'about:invalid#zClosurez'),
                    (e = new kt(Mt, e))),
                  (s.href = xt(e)),
                  s.setAttribute('target', n),
                  t.noreferrer && s.setAttribute('rel', 'noreferrer'),
                  (t = document.createEvent('MouseEvent')).initMouseEvent(
                    'click',
                    !0,
                    !0,
                    r,
                    1
                  ),
                  s.dispatchEvent(t),
                  (s = {}))
                : t.noreferrer
                ? ((s = r.open('', n, s)),
                  (t = xt(e)),
                  s &&
                    (Xt &&
                      ut(t, ';') &&
                      (t = "'" + t.replace(/'/g, '%27') + "'"),
                    (s.opener = null),
                    (t = Vt(
                      '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                        Bt(t) +
                        '">'
                    )),
                    (r = s.document)) &&
                    (r.write(jt(t)), r.close()))
                : (s = r.open(xt(e), n, s)) && t.noopener && (s.opener = null),
              s)
            )
              try {
                s.focus();
              } catch (u) {}
            return s;
          }
          var gr = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            mr = /^[^@]+@[^@]+$/;

          function _r() {
            var t = null;
            return new we(function (e) {
              'complete' == c.document.readyState
                ? e()
                : ((t = function () {
                    e();
                  }),
                  fn(window, 'load', t));
            }).o(function (e) {
              throw (pn(window, 'load', t), e);
            });
          }

          function br(t) {
            return (
              (t = t || Pr()),
              !(
                ('file:' !== Lr() && 'ionic:' !== Lr()) ||
                !t.toLowerCase().match(/iphone|ipad|ipod|android/)
              )
            );
          }

          function wr() {
            var t = c.window;
            try {
              return !(!t || t == t.top);
            } catch (e) {
              return !1;
            }
          }

          function Er() {
            return (
              'undefined' !== typeof c.WorkerGlobalScope &&
              'function' === typeof c.importScripts
            );
          }

          function Cr() {
            return r.a.INTERNAL.hasOwnProperty('reactNative')
              ? 'ReactNative'
              : r.a.INTERNAL.hasOwnProperty('node')
              ? 'Node'
              : Er()
              ? 'Worker'
              : 'Browser';
          }

          function Sr() {
            var t = Cr();
            return 'ReactNative' === t || 'Node' === t;
          }
          var Ir = 'Firefox',
            Tr = 'Chrome';

          function Nr(t) {
            var e = t.toLowerCase();
            return ut(e, 'opera/') || ut(e, 'opr/') || ut(e, 'opios/')
              ? 'Opera'
              : ut(e, 'iemobile')
              ? 'IEMobile'
              : ut(e, 'msie') || ut(e, 'trident/')
              ? 'IE'
              : ut(e, 'edge/')
              ? 'Edge'
              : ut(e, 'firefox/')
              ? Ir
              : ut(e, 'silk/')
              ? 'Silk'
              : ut(e, 'blackberry')
              ? 'Blackberry'
              : ut(e, 'webos')
              ? 'Webos'
              : !ut(e, 'safari/') ||
                ut(e, 'chrome/') ||
                ut(e, 'crios/') ||
                ut(e, 'android')
              ? (!ut(e, 'chrome/') && !ut(e, 'crios/')) || ut(e, 'edge/')
                ? ut(e, 'android')
                  ? 'Android'
                  : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                    2 == t.length
                  ? t[1]
                  : 'Other'
                : Tr
              : 'Safari';
          }
          var Ar = {
            jd: 'FirebaseCore-web',
            ld: 'FirebaseUI-web',
          };

          function Or(t, e) {
            e = e || [];
            var n,
              r = [],
              i = {};
            for (n in Ar) i[Ar[n]] = !0;
            for (n = 0; n < e.length; n++)
              'undefined' !== typeof i[e[n]] && (delete i[e[n]], r.push(e[n]));
            return (
              r.sort(),
              (e = r).length || (e = ['FirebaseCore-web']),
              'Browser' === (r = Cr())
                ? (r = Nr((i = Pr())))
                : 'Worker' === r && (r = Nr((i = Pr())) + '-' + r),
              r + '/JsCore/' + t + '/' + e.join(',')
            );
          }

          function Pr() {
            return (c.navigator && c.navigator.userAgent) || '';
          }

          function kr(t, e) {
            (t = t.split('.')), (e = e || c);
            for (var n = 0; n < t.length && 'object' == i(e) && null != e; n++)
              e = e[t[n]];
            return n != t.length && (e = void 0), e;
          }

          function xr() {
            try {
              var t = c.localStorage,
                e = Vr();
              if (t)
                return (
                  t.setItem(e, '1'), t.removeItem(e), !hr() || !!c.indexedDB
                );
            } catch (n) {
              return Er() && !!c.indexedDB;
            }
            return !1;
          }

          function Rr() {
            return (
              (Dr() || 'chrome-extension:' === Lr() || br()) &&
              !Sr() &&
              xr() &&
              !Er()
            );
          }

          function Dr() {
            return 'http:' === Lr() || 'https:' === Lr();
          }

          function Lr() {
            return (c.location && c.location.protocol) || null;
          }

          function Mr(t) {
            return !dr((t = t || Pr())) && Nr(t) != Ir;
          }

          function Fr(t) {
            return 'undefined' === typeof t ? null : ir(t);
          }

          function jr(t) {
            var e,
              n = {};
            for (e in t)
              t.hasOwnProperty(e) &&
                null !== t[e] &&
                void 0 !== t[e] &&
                (n[e] = t[e]);
            return n;
          }

          function Ur(t) {
            if (null !== t) return JSON.parse(t);
          }

          function Vr(t) {
            return t || Math.floor(1e9 * Math.random()).toString();
          }

          function Wr(t) {
            return (
              'Safari' != Nr((t = t || Pr())) &&
              !t.toLowerCase().match(/iphone|ipad|ipod/)
            );
          }

          function qr() {
            var t = c.___jsl;
            if (t && t.H)
              for (var e in t.H)
                if (
                  ((t.H[e].r = t.H[e].r || []),
                  (t.H[e].L = t.H[e].L || []),
                  (t.H[e].r = t.H[e].L.concat()),
                  t.CP)
                )
                  for (var n = 0; n < t.CP.length; n++) t.CP[n] = null;
          }

          function Br(t, e) {
            if (t > e)
              throw Error('Short delay should be less than long delay!');
            (this.a = t),
              (this.c = e),
              (t = Pr()),
              (e = Cr()),
              (this.b = dr(t) || 'ReactNative' === e);
          }

          function Hr() {
            var t = c.document;
            return (
              !t ||
              'undefined' === typeof t.visibilityState ||
              'visible' == t.visibilityState
            );
          }

          function Qr(t) {
            try {
              var e = new Date(parseInt(t, 10));
              if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
                return e.toUTCString();
            } catch (n) {}
            return null;
          }

          function Kr() {
            return !(
              !kr('fireauth.oauthhelper', c) && !kr('fireauth.iframe', c)
            );
          }
          Br.prototype.get = function () {
            var t = c.navigator;
            return !t ||
              'boolean' !== typeof t.onLine ||
              (!Dr() &&
                'chrome-extension:' !== Lr() &&
                'undefined' === typeof t.connection) ||
              t.onLine
              ? this.b
                ? this.c
                : this.a
              : Math.min(5e3, this.a);
          };
          var Gr,
            zr = {};

          function Yr(t) {
            zr[t] ||
              ((zr[t] = !0),
              'undefined' !== typeof console &&
                'function' === typeof console.warn &&
                console.warn(t));
          }
          try {
            var Xr = {};
            Object.defineProperty(Xr, 'abcd', {
              configurable: !0,
              enumerable: !0,
              value: 1,
            }),
              Object.defineProperty(Xr, 'abcd', {
                configurable: !0,
                enumerable: !0,
                value: 2,
              }),
              (Gr = 2 == Xr.abcd);
          } catch (Kt) {
            Gr = !1;
          }

          function $r(t, e, n) {
            Gr
              ? Object.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                })
              : (t[e] = n);
          }

          function Jr(t, e) {
            if (e) for (var n in e) e.hasOwnProperty(n) && $r(t, n, e[n]);
          }

          function Zr(t) {
            var e = {};
            return Jr(e, t), e;
          }

          function ti(t) {
            var e = t;
            if ('object' == i(t) && null != t)
              for (var n in ((e = 'length' in t ? [] : {}), t))
                $r(e, n, ti(t[n]));
            return e;
          }

          function ei(t) {
            var e = t && (t[ai] ? 'phone' : null);
            if (!(e && t && t[oi]))
              throw new T(
                'internal-error',
                'Internal assert: invalid MultiFactorInfo object'
              );
            $r(this, 'uid', t[oi]), $r(this, 'displayName', t[ri] || null);
            var n = null;
            t[ii] && (n = new Date(t[ii]).toUTCString()),
              $r(this, 'enrollmentTime', n),
              $r(this, 'factorId', e);
          }

          function ni(t) {
            try {
              var e = new si(t);
            } catch (n) {
              e = null;
            }
            return e;
          }
          ei.prototype.v = function () {
            return {
              uid: this.uid,
              displayName: this.displayName,
              factorId: this.factorId,
              enrollmentTime: this.enrollmentTime,
            };
          };
          var ri = 'displayName',
            ii = 'enrolledAt',
            oi = 'mfaEnrollmentId',
            ai = 'phoneInfo';

          function si(t) {
            ei.call(this, t), $r(this, 'phoneNumber', t[ai]);
          }

          function ui(t) {
            var e = {},
              n = t[fi],
              r = t[di],
              i = t[vi];
            if (
              ((t = ni(t[pi])),
              !i ||
                (i != hi && i != li && !n) ||
                (i == li && !r) ||
                (i == ci && !t))
            )
              throw Error('Invalid checkActionCode response!');
            i == li
              ? ((e[gi] = n || null), (e[_i] = n || null), (e[yi] = r))
              : ((e[gi] = r || null), (e[_i] = r || null), (e[yi] = n || null)),
              (e[mi] = t || null),
              $r(this, wi, i),
              $r(this, bi, ti(e));
          }
          I(si, ei),
            (si.prototype.v = function () {
              var t = si.Za.v.call(this);
              return (t.phoneNumber = this.phoneNumber), t;
            });
          var ci = 'REVERT_SECOND_FACTOR_ADDITION',
            hi = 'EMAIL_SIGNIN',
            li = 'VERIFY_AND_CHANGE_EMAIL',
            fi = 'email',
            pi = 'mfaInfo',
            di = 'newEmail',
            vi = 'requestType',
            yi = 'email',
            gi = 'fromEmail',
            mi = 'multiFactorInfo',
            _i = 'previousEmail',
            bi = 'data',
            wi = 'operation';

          function Ei(t) {
            var e = Un((t = Vn(t)), Ci) || null,
              n = Un(t, Si) || null,
              r = Un(t, Ni) || null;
            if (((r = (r && Oi[r]) || null), !e || !n || !r))
              throw new T(
                'argument-error',
                Ci +
                  ', ' +
                  Si +
                  'and ' +
                  Ni +
                  ' are required in a valid action code URL.'
              );
            Jr(this, {
              apiKey: e,
              operation: r,
              code: n,
              continueUrl: Un(t, Ii) || null,
              languageCode: Un(t, Ti) || null,
              tenantId: Un(t, Ai) || null,
            });
          }
          var Ci = 'apiKey',
            Si = 'oobCode',
            Ii = 'continueUrl',
            Ti = 'languageCode',
            Ni = 'mode',
            Ai = 'tenantId',
            Oi = {
              recoverEmail: 'RECOVER_EMAIL',
              resetPassword: 'PASSWORD_RESET',
              revertSecondFactorAddition: ci,
              signIn: hi,
              verifyAndChangeEmail: li,
              verifyEmail: 'VERIFY_EMAIL',
            };

          function Pi(t) {
            try {
              return new Ei(t);
            } catch (e) {
              return null;
            }
          }

          function ki(t) {
            var e = t[Mi];
            if ('undefined' === typeof e) throw new T('missing-continue-uri');
            if ('string' !== typeof e || ('string' === typeof e && !e.length))
              throw new T('invalid-continue-uri');
            (this.h = e), (this.b = this.a = null), (this.g = !1);
            var n = t[xi];
            if (n && 'object' === i(n)) {
              e = n[Ui];
              var r = n[Fi];
              if (((n = n[ji]), 'string' === typeof e && e.length)) {
                if (
                  ((this.a = e),
                  'undefined' !== typeof r && 'boolean' !== typeof r)
                )
                  throw new T(
                    'argument-error',
                    Fi + ' property must be a boolean when specified.'
                  );
                if (
                  ((this.g = !!r),
                  'undefined' !== typeof n &&
                    ('string' !== typeof n ||
                      ('string' === typeof n && !n.length)))
                )
                  throw new T(
                    'argument-error',
                    ji + ' property must be a non empty string when specified.'
                  );
                this.b = n || null;
              } else {
                if ('undefined' !== typeof e)
                  throw new T(
                    'argument-error',
                    Ui + ' property must be a non empty string when specified.'
                  );
                if ('undefined' !== typeof r || 'undefined' !== typeof n)
                  throw new T('missing-android-pkg-name');
              }
            } else if ('undefined' !== typeof n)
              throw new T(
                'argument-error',
                xi + ' property must be a non null object when specified.'
              );
            if (((this.f = null), (e = t[Li]) && 'object' === i(e))) {
              if ('string' === typeof (e = e[Vi]) && e.length) this.f = e;
              else if ('undefined' !== typeof e)
                throw new T(
                  'argument-error',
                  Vi + ' property must be a non empty string when specified.'
                );
            } else if ('undefined' !== typeof e)
              throw new T(
                'argument-error',
                Li + ' property must be a non null object when specified.'
              );
            if ('undefined' !== typeof (e = t[Di]) && 'boolean' !== typeof e)
              throw new T(
                'argument-error',
                Di + ' property must be a boolean when specified.'
              );
            if (
              ((this.c = !!e),
              'undefined' !== typeof (t = t[Ri]) &&
                ('string' !== typeof t || ('string' === typeof t && !t.length)))
            )
              throw new T(
                'argument-error',
                Ri + ' property must be a non empty string when specified.'
              );
            this.i = t || null;
          }
          var xi = 'android',
            Ri = 'dynamicLinkDomain',
            Di = 'handleCodeInApp',
            Li = 'iOS',
            Mi = 'url',
            Fi = 'installApp',
            ji = 'minimumVersion',
            Ui = 'packageName',
            Vi = 'bundleId';

          function Wi(t) {
            var e = {};
            for (var n in ((e.continueUrl = t.h),
            (e.canHandleCodeInApp = t.c),
            (e.androidPackageName = t.a) &&
              ((e.androidMinimumVersion = t.b), (e.androidInstallApp = t.g)),
            (e.iOSBundleId = t.f),
            (e.dynamicLinkDomain = t.i),
            e))
              null === e[n] && delete e[n];
            return e;
          }
          var qi = null;

          function Bi(t) {
            var e = '';
            return (
              (function (t, e) {
                function n(e) {
                  for (; r < t.length; ) {
                    var n = t.charAt(r++),
                      i = qi[n];
                    if (null != i) return i;
                    if (!/^[\s\xa0]*$/.test(n))
                      throw Error('Unknown base64 encoding at char: ' + n);
                  }
                  return e;
                }
                !(function () {
                  if (!qi) {
                    qi = {};
                    for (
                      var t =
                          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                            ''
                          ),
                        e = ['+/=', '+/', '-_=', '-_.', '-_'],
                        n = 0;
                      5 > n;
                      n++
                    )
                      for (
                        var r = t.concat(e[n].split('')), i = 0;
                        i < r.length;
                        i++
                      ) {
                        var o = r[i];
                        void 0 === qi[o] && (qi[o] = i);
                      }
                  }
                })();
                for (var r = 0; ; ) {
                  var i = n(-1),
                    o = n(0),
                    a = n(64),
                    s = n(64);
                  if (64 === s && -1 === i) break;
                  e((i << 2) | (o >> 4)),
                    64 != a &&
                      (e(((o << 4) & 240) | (a >> 2)),
                      64 != s && e(((a << 6) & 192) | s));
                }
              })(t, function (t) {
                e += String.fromCharCode(t);
              }),
              e
            );
          }

          function Hi(t) {
            var e = Ki(t);
            if (!(e && e.sub && e.iss && e.aud && e.exp))
              throw Error('Invalid JWT');
            (this.g = t),
              (this.c = e.exp),
              (this.h = e.sub),
              S(),
              (this.a =
                e.provider_id ||
                (e.firebase && e.firebase.sign_in_provider) ||
                null),
              (this.f = (e.firebase && e.firebase.tenant) || null),
              (this.b = !!e.is_anonymous || 'anonymous' == this.a);
          }

          function Qi(t) {
            try {
              return new Hi(t);
            } catch (e) {
              return null;
            }
          }

          function Ki(t) {
            if (!t) return null;
            if (3 != (t = t.split('.')).length) return null;
            for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++)
              t += '.';
            try {
              return JSON.parse(Bi(t));
            } catch (r) {}
            return null;
          }
          (Hi.prototype.S = function () {
            return this.f;
          }),
            (Hi.prototype.i = function () {
              return this.b;
            }),
            (Hi.prototype.toString = function () {
              return this.g;
            });
          var Gi =
              'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
                ' '
              ),
            zi = [
              'client_id',
              'response_type',
              'scope',
              'redirect_uri',
              'state',
            ],
            Yi = {
              kd: {
                Ha: 'locale',
                ta: 700,
                sa: 600,
                ea: 'facebook.com',
                Va: zi,
              },
              md: {
                Ha: null,
                ta: 500,
                sa: 750,
                ea: 'github.com',
                Va: zi,
              },
              nd: {
                Ha: 'hl',
                ta: 515,
                sa: 680,
                ea: 'google.com',
                Va: zi,
              },
              td: {
                Ha: 'lang',
                ta: 485,
                sa: 705,
                ea: 'twitter.com',
                Va: Gi,
              },
              gd: {
                Ha: 'locale',
                ta: 600,
                sa: 600,
                ea: 'apple.com',
                Va: [],
              },
            };

          function Xi(t) {
            for (var e in Yi) if (Yi[e].ea == t) return Yi[e];
            return null;
          }

          function $i(t) {
            var e = {};
            (e['facebook.com'] = no),
              (e['google.com'] = io),
              (e['github.com'] = ro),
              (e['twitter.com'] = oo);
            var n = t && t[Zi];
            try {
              if (n) return e[n] ? new e[n](t) : new eo(t);
              if ('undefined' !== typeof t[Ji]) return new to(t);
            } catch (r) {}
            return null;
          }
          var Ji = 'idToken',
            Zi = 'providerId';

          function to(t) {
            var e = t[Zi];
            if (!e && t[Ji]) {
              var n = Qi(t[Ji]);
              n && n.a && (e = n.a);
            }
            if (!e) throw Error('Invalid additional user info!');
            ('anonymous' != e && 'custom' != e) || (e = null),
              (n = !1),
              'undefined' !== typeof t.isNewUser
                ? (n = !!t.isNewUser)
                : 'identitytoolkit#SignupNewUserResponse' === t.kind &&
                  (n = !0),
              $r(this, 'providerId', e),
              $r(this, 'isNewUser', n);
          }

          function eo(t) {
            to.call(this, t),
              $r(this, 'profile', ti((t = Ur(t.rawUserInfo || '{}')) || {}));
          }

          function no(t) {
            if ((eo.call(this, t), 'facebook.com' != this.providerId))
              throw Error('Invalid provider ID!');
          }

          function ro(t) {
            if ((eo.call(this, t), 'github.com' != this.providerId))
              throw Error('Invalid provider ID!');
            $r(this, 'username', (this.profile && this.profile.login) || null);
          }

          function io(t) {
            if ((eo.call(this, t), 'google.com' != this.providerId))
              throw Error('Invalid provider ID!');
          }

          function oo(t) {
            if ((eo.call(this, t), 'twitter.com' != this.providerId))
              throw Error('Invalid provider ID!');
            $r(this, 'username', t.screenName || null);
          }

          function ao(t) {
            var e = Vn(t),
              n = Un(e, 'link'),
              r = Un(Vn(n), 'link');
            return (
              (e = Un(e, 'deep_link_id')), Un(Vn(e), 'link') || e || r || n || t
            );
          }

          function so(t, e) {
            if (!t && !e)
              throw new T(
                'internal-error',
                'Internal assert: no raw session string available'
              );
            if (t && e)
              throw new T(
                'internal-error',
                'Internal assert: unable to determine the session type'
              );
            (this.a = t || null),
              (this.b = e || null),
              (this.type = this.a ? uo : co);
          }
          I(eo, to), I(no, eo), I(ro, eo), I(io, eo), I(oo, eo);
          var uo = 'enroll',
            co = 'signin';

          function ho() {}

          function lo(t, e) {
            return t
              .then(function (t) {
                if (t[ts]) {
                  var n = Qi(t[ts]);
                  if (!n || e != n.h) throw new T('user-mismatch');
                  return t;
                }
                throw new T('user-mismatch');
              })
              .o(function (t) {
                throw t && t.code && t.code == O + 'user-not-found'
                  ? new T('user-mismatch')
                  : t;
              });
          }

          function fo(t, e) {
            if (!e)
              throw new T('internal-error', 'failed to construct a credential');
            (this.a = e),
              $r(this, 'providerId', t),
              $r(this, 'signInMethod', t);
          }

          function po(t) {
            return {
              pendingToken: t.a,
              requestUri: 'http://localhost',
            };
          }

          function vo(t) {
            if (
              t &&
              t.providerId &&
              t.signInMethod &&
              0 == t.providerId.indexOf('saml.') &&
              t.pendingToken
            )
              try {
                return new fo(t.providerId, t.pendingToken);
              } catch (e) {}
            return null;
          }

          function yo(t, e, n) {
            if (((this.a = null), e.idToken || e.accessToken))
              e.idToken && $r(this, 'idToken', e.idToken),
                e.accessToken && $r(this, 'accessToken', e.accessToken),
                e.nonce && !e.pendingToken && $r(this, 'nonce', e.nonce),
                e.pendingToken && (this.a = e.pendingToken);
            else {
              if (!e.oauthToken || !e.oauthTokenSecret)
                throw new T(
                  'internal-error',
                  'failed to construct a credential'
                );
              $r(this, 'accessToken', e.oauthToken),
                $r(this, 'secret', e.oauthTokenSecret);
            }
            $r(this, 'providerId', t), $r(this, 'signInMethod', n);
          }

          function go(t) {
            var e = {};
            return (
              t.idToken && (e.id_token = t.idToken),
              t.accessToken && (e.access_token = t.accessToken),
              t.secret && (e.oauth_token_secret = t.secret),
              (e.providerId = t.providerId),
              t.nonce && !t.a && (e.nonce = t.nonce),
              (e = {
                postBody: Jn(e).toString(),
                requestUri: 'http://localhost',
              }),
              t.a && (delete e.postBody, (e.pendingToken = t.a)),
              e
            );
          }

          function mo(t) {
            if (t && t.providerId && t.signInMethod) {
              var e = {
                idToken: t.oauthIdToken,
                accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                oauthTokenSecret: t.oauthTokenSecret,
                oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                nonce: t.nonce,
                pendingToken: t.pendingToken,
              };
              try {
                return new yo(t.providerId, e, t.signInMethod);
              } catch (n) {}
            }
            return null;
          }

          function _o(t, e) {
            (this.Oc = e || []),
              Jr(this, {
                providerId: t,
                isOAuthProvider: !0,
              }),
              (this.Fb = {}),
              (this.lb = (Xi(t) || {}).Ha || null),
              (this.kb = null);
          }

          function bo(t) {
            if ('string' !== typeof t || 0 != t.indexOf('saml.'))
              throw new T(
                'argument-error',
                'SAML provider IDs must be prefixed with "saml."'
              );
            _o.call(this, t, []);
          }

          function wo(t) {
            _o.call(this, t, zi), (this.a = []);
          }

          function Eo() {
            wo.call(this, 'facebook.com');
          }

          function Co(t) {
            if (!t)
              throw new T(
                'argument-error',
                'credential failed: expected 1 argument (the OAuth access token).'
              );
            var e = t;
            return (
              y(t) && (e = t.accessToken),
              new Eo().credential({
                accessToken: e,
              })
            );
          }

          function So() {
            wo.call(this, 'github.com');
          }

          function Io(t) {
            if (!t)
              throw new T(
                'argument-error',
                'credential failed: expected 1 argument (the OAuth access token).'
              );
            var e = t;
            return (
              y(t) && (e = t.accessToken),
              new So().credential({
                accessToken: e,
              })
            );
          }

          function To() {
            wo.call(this, 'google.com'), this.Aa('profile');
          }

          function No(t, e) {
            var n = t;
            return (
              y(t) && ((n = t.idToken), (e = t.accessToken)),
              new To().credential({
                idToken: n,
                accessToken: e,
              })
            );
          }

          function Ao() {
            _o.call(this, 'twitter.com', Gi);
          }

          function Oo(t, e) {
            var n = t;
            if (
              (y(n) ||
                (n = {
                  oauthToken: t,
                  oauthTokenSecret: e,
                }),
              !n.oauthToken || !n.oauthTokenSecret)
            )
              throw new T(
                'argument-error',
                'credential failed: expected 2 arguments (the OAuth access token and secret).'
              );
            return new yo('twitter.com', n, 'twitter.com');
          }

          function Po(t, e, n) {
            (this.a = t),
              (this.f = e),
              $r(this, 'providerId', 'password'),
              $r(
                this,
                'signInMethod',
                n === xo.EMAIL_LINK_SIGN_IN_METHOD
                  ? xo.EMAIL_LINK_SIGN_IN_METHOD
                  : xo.EMAIL_PASSWORD_SIGN_IN_METHOD
              );
          }

          function ko(t) {
            return t && t.email && t.password
              ? new Po(t.email, t.password, t.signInMethod)
              : null;
          }

          function xo() {
            Jr(this, {
              providerId: 'password',
              isOAuthProvider: !1,
            });
          }

          function Ro(t, e) {
            if (!(e = Do(e)))
              throw new T('argument-error', 'Invalid email link!');
            return new Po(t, e.code, xo.EMAIL_LINK_SIGN_IN_METHOD);
          }

          function Do(t) {
            return (t = Pi((t = ao(t)))) && t.operation === hi ? t : null;
          }

          function Lo(t) {
            if (!((t.bb && t.ab) || (t.Ja && t.da)))
              throw new T('internal-error');
            (this.a = t),
              $r(this, 'providerId', 'phone'),
              (this.ea = 'phone'),
              $r(this, 'signInMethod', 'phone');
          }

          function Mo(t) {
            if (
              t &&
              'phone' === t.providerId &&
              ((t.verificationId && t.verificationCode) ||
                (t.temporaryProof && t.phoneNumber))
            ) {
              var e = {};
              return (
                H(
                  [
                    'verificationId',
                    'verificationCode',
                    'temporaryProof',
                    'phoneNumber',
                  ],
                  function (n) {
                    t[n] && (e[n] = t[n]);
                  }
                ),
                new Lo(e)
              );
            }
            return null;
          }

          function Fo(t) {
            return t.a.Ja && t.a.da
              ? {
                  temporaryProof: t.a.Ja,
                  phoneNumber: t.a.da,
                }
              : {
                  sessionInfo: t.a.bb,
                  code: t.a.ab,
                };
          }

          function jo(t) {
            try {
              this.a = t || r.a.auth();
            } catch (e) {
              throw new T(
                'argument-error',
                'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
              );
            }
            Jr(this, {
              providerId: 'phone',
              isOAuthProvider: !1,
            });
          }

          function Uo(t, e) {
            if (!t) throw new T('missing-verification-id');
            if (!e) throw new T('missing-verification-code');
            return new Lo({
              bb: t,
              ab: e,
            });
          }

          function Vo(t) {
            if (t.temporaryProof && t.phoneNumber)
              return new Lo({
                Ja: t.temporaryProof,
                da: t.phoneNumber,
              });
            var e = t && t.providerId;
            if (!e || 'password' === e) return null;
            var n = t && t.oauthAccessToken,
              r = t && t.oauthTokenSecret,
              i = t && t.nonce,
              o = t && t.oauthIdToken,
              a = t && t.pendingToken;
            try {
              switch (e) {
                case 'google.com':
                  return No(o, n);
                case 'facebook.com':
                  return Co(n);
                case 'github.com':
                  return Io(n);
                case 'twitter.com':
                  return Oo(n, r);
                default:
                  return n || r || o || a
                    ? a
                      ? 0 == e.indexOf('saml.')
                        ? new fo(e, a)
                        : new yo(
                            e,
                            {
                              pendingToken: a,
                              idToken: t.oauthIdToken,
                              accessToken: t.oauthAccessToken,
                            },
                            e
                          )
                      : new wo(e).credential({
                          idToken: o,
                          accessToken: n,
                          rawNonce: i,
                        })
                    : null;
              }
            } catch (s) {
              return null;
            }
          }

          function Wo(t) {
            if (!t.isOAuthProvider) throw new T('invalid-oauth-provider');
          }

          function qo(t, e, n, r, i, o, a) {
            if (
              ((this.c = t),
              (this.b = e || null),
              (this.g = n || null),
              (this.f = r || null),
              (this.i = o || null),
              (this.h = a || null),
              (this.a = i || null),
              !this.g && !this.a)
            )
              throw new T('invalid-auth-event');
            if (this.g && this.a) throw new T('invalid-auth-event');
            if (this.g && !this.f) throw new T('invalid-auth-event');
          }

          function Bo(t) {
            return (t = t || {}).type
              ? new qo(
                  t.type,
                  t.eventId,
                  t.urlResponse,
                  t.sessionId,
                  t.error && N(t.error),
                  t.postBody,
                  t.tenantId
                )
              : null;
          }

          function Ho() {
            (this.b = null), (this.a = []);
          }
          (so.prototype.Fa = function () {
            return this.a ? Ae(this.a) : Ae(this.b);
          }),
            (so.prototype.v = function () {
              return this.type == uo
                ? {
                    multiFactorSession: {
                      idToken: this.a,
                    },
                  }
                : {
                    multiFactorSession: {
                      pendingCredential: this.b,
                    },
                  };
            }),
            (ho.prototype.ia = function () {}),
            (ho.prototype.b = function () {}),
            (ho.prototype.c = function () {}),
            (ho.prototype.v = function () {}),
            (fo.prototype.ia = function (t) {
              return bs(t, po(this));
            }),
            (fo.prototype.b = function (t, e) {
              var n = po(this);
              return (n.idToken = e), ws(t, n);
            }),
            (fo.prototype.c = function (t, e) {
              return lo(Es(t, po(this)), e);
            }),
            (fo.prototype.v = function () {
              return {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
                pendingToken: this.a,
              };
            }),
            (yo.prototype.ia = function (t) {
              return bs(t, go(this));
            }),
            (yo.prototype.b = function (t, e) {
              var n = go(this);
              return (n.idToken = e), ws(t, n);
            }),
            (yo.prototype.c = function (t, e) {
              return lo(Es(t, go(this)), e);
            }),
            (yo.prototype.v = function () {
              var t = {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
              };
              return (
                this.idToken && (t.oauthIdToken = this.idToken),
                this.accessToken && (t.oauthAccessToken = this.accessToken),
                this.secret && (t.oauthTokenSecret = this.secret),
                this.nonce && (t.nonce = this.nonce),
                this.a && (t.pendingToken = this.a),
                t
              );
            }),
            (_o.prototype.Ia = function (t) {
              return (this.Fb = vt(t)), this;
            }),
            I(bo, _o),
            I(wo, _o),
            (wo.prototype.Aa = function (t) {
              return z(this.a, t) || this.a.push(t), this;
            }),
            (wo.prototype.Nb = function () {
              return J(this.a);
            }),
            (wo.prototype.credential = function (t, e) {
              var n;
              if (
                !(n = y(t)
                  ? {
                      idToken: t.idToken || null,
                      accessToken: t.accessToken || null,
                      nonce: t.rawNonce || null,
                    }
                  : {
                      idToken: t || null,
                      accessToken: e || null,
                    }).idToken &&
                !n.accessToken
              )
                throw new T(
                  'argument-error',
                  'credential failed: must provide the ID token and/or the access token.'
                );
              return new yo(this.providerId, n, this.providerId);
            }),
            I(Eo, wo),
            $r(Eo, 'PROVIDER_ID', 'facebook.com'),
            $r(Eo, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
            I(So, wo),
            $r(So, 'PROVIDER_ID', 'github.com'),
            $r(So, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
            I(To, wo),
            $r(To, 'PROVIDER_ID', 'google.com'),
            $r(To, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
            I(Ao, _o),
            $r(Ao, 'PROVIDER_ID', 'twitter.com'),
            $r(Ao, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
            (Po.prototype.ia = function (t) {
              return this.signInMethod == xo.EMAIL_LINK_SIGN_IN_METHOD
                ? ru(t, Ps, {
                    email: this.a,
                    oobCode: this.f,
                  })
                : ru(t, Js, {
                    email: this.a,
                    password: this.f,
                  });
            }),
            (Po.prototype.b = function (t, e) {
              return this.signInMethod == xo.EMAIL_LINK_SIGN_IN_METHOD
                ? ru(t, ks, {
                    idToken: e,
                    email: this.a,
                    oobCode: this.f,
                  })
                : ru(t, Hs, {
                    idToken: e,
                    email: this.a,
                    password: this.f,
                  });
            }),
            (Po.prototype.c = function (t, e) {
              return lo(this.ia(t), e);
            }),
            (Po.prototype.v = function () {
              return {
                email: this.a,
                password: this.f,
                signInMethod: this.signInMethod,
              };
            }),
            Jr(xo, {
              PROVIDER_ID: 'password',
            }),
            Jr(xo, {
              EMAIL_LINK_SIGN_IN_METHOD: 'emailLink',
            }),
            Jr(xo, {
              EMAIL_PASSWORD_SIGN_IN_METHOD: 'password',
            }),
            (Lo.prototype.ia = function (t) {
              return t.cb(Fo(this));
            }),
            (Lo.prototype.b = function (t, e) {
              var n = Fo(this);
              return (n.idToken = e), ru(t, tu, n);
            }),
            (Lo.prototype.c = function (t, e) {
              var n = Fo(this);
              return (n.operation = 'REAUTH'), lo((t = ru(t, eu, n)), e);
            }),
            (Lo.prototype.v = function () {
              var t = {
                providerId: 'phone',
              };
              return (
                this.a.bb && (t.verificationId = this.a.bb),
                this.a.ab && (t.verificationCode = this.a.ab),
                this.a.Ja && (t.temporaryProof = this.a.Ja),
                this.a.da && (t.phoneNumber = this.a.da),
                t
              );
            }),
            (jo.prototype.cb = function (t, e) {
              var n = this.a.b;
              return Ae(e.verify()).then(function (r) {
                if ('string' !== typeof r)
                  throw new T(
                    'argument-error',
                    'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
                  );
                switch (e.type) {
                  case 'recaptcha':
                    var i = y(t) ? t.session : null,
                      o = y(t) ? t.phoneNumber : t;
                    return (
                      i && i.type == uo
                        ? i.Fa().then(function (t) {
                            return (function (t, e) {
                              return ru(t, Ks, e).then(function (t) {
                                return t.phoneSessionInfo.sessionInfo;
                              });
                            })(n, {
                              idToken: t,
                              phoneEnrollmentInfo: {
                                phoneNumber: o,
                                recaptchaToken: r,
                              },
                            });
                          })
                        : i && i.type == co
                        ? i.Fa().then(function (e) {
                            return (function (t, e) {
                              return ru(t, Gs, e).then(function (t) {
                                return t.phoneResponseInfo.sessionInfo;
                              });
                            })(n, {
                              mfaPendingCredential: e,
                              mfaEnrollmentId:
                                (t.multiFactorHint && t.multiFactorHint.uid) ||
                                t.multiFactorUid,
                              phoneSignInInfo: {
                                recaptchaToken: r,
                              },
                            });
                          })
                        : (function (t, e) {
                            return ru(t, qs, e);
                          })(n, {
                            phoneNumber: o,
                            recaptchaToken: r,
                          })
                    ).then(
                      function (t) {
                        return 'function' === typeof e.reset && e.reset(), t;
                      },
                      function (t) {
                        throw ('function' === typeof e.reset && e.reset(), t);
                      }
                    );
                  default:
                    throw new T(
                      'argument-error',
                      'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                    );
                }
              });
            }),
            Jr(jo, {
              PROVIDER_ID: 'phone',
            }),
            Jr(jo, {
              PHONE_SIGN_IN_METHOD: 'phone',
            }),
            (qo.prototype.getUid = function () {
              var t = [];
              return (
                t.push(this.c),
                this.b && t.push(this.b),
                this.f && t.push(this.f),
                this.h && t.push(this.h),
                t.join('-')
              );
            }),
            (qo.prototype.S = function () {
              return this.h;
            }),
            (qo.prototype.v = function () {
              return {
                type: this.c,
                eventId: this.b,
                urlResponse: this.g,
                sessionId: this.f,
                postBody: this.i,
                tenantId: this.h,
                error: this.a && this.a.v(),
              };
            });
          var Qo,
            Ko = null;

          function Go(t) {
            var e = 'unauthorized-domain',
              n = void 0,
              r = Vn(t);
            (t = r.b),
              'chrome-extension' == (r = r.f)
                ? (n = qt(
                    'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                    t
                  ))
                : 'http' == r || 'https' == r
                ? (n = qt(
                    'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                    t
                  ))
                : (e = 'operation-not-supported-in-this-environment'),
              T.call(this, e, n);
          }

          function zo(t, e, n) {
            T.call(this, t, n),
              (t = e || {}).Gb && $r(this, 'email', t.Gb),
              t.da && $r(this, 'phoneNumber', t.da),
              t.credential && $r(this, 'credential', t.credential),
              t.Wb && $r(this, 'tenantId', t.Wb);
          }

          function Yo(t) {
            if (t.code) {
              var e = t.code || '';
              0 == e.indexOf(O) && (e = e.substring(O.length));
              var n = {
                credential: Vo(t),
                Wb: t.tenantId,
              };
              if (t.email) n.Gb = t.email;
              else if (t.phoneNumber) n.da = t.phoneNumber;
              else if (!n.credential) return new T(e, t.message || void 0);
              return new zo(e, n, t.message);
            }
            return null;
          }

          function Xo() {}

          function $o(t) {
            return t.c || (t.c = t.b());
          }

          function Jo() {}

          function Zo(t) {
            if (
              !t.f &&
              'undefined' == typeof XMLHttpRequest &&
              'undefined' != typeof ActiveXObject
            ) {
              for (
                var e = [
                    'MSXML2.XMLHTTP.6.0',
                    'MSXML2.XMLHTTP.3.0',
                    'MSXML2.XMLHTTP',
                    'Microsoft.XMLHTTP',
                  ],
                  n = 0;
                n < e.length;
                n++
              ) {
                var r = e[n];
                try {
                  return new ActiveXObject(r), (t.f = r);
                } catch (i) {}
              }
              throw Error(
                'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
              );
            }
            return t.f;
          }

          function ta() {}

          function ea() {
            (this.a = new XDomainRequest()),
              (this.readyState = 0),
              (this.onreadystatechange = null),
              (this.responseType = this.responseText = this.response = ''),
              (this.status = -1),
              (this.statusText = ''),
              (this.a.onload = E(this.oc, this)),
              (this.a.onerror = E(this.Pb, this)),
              (this.a.onprogress = E(this.pc, this)),
              (this.a.ontimeout = E(this.tc, this));
          }

          function na(t, e) {
            (t.readyState = e), t.onreadystatechange && t.onreadystatechange();
          }

          function ra(t, e, n) {
            this.reset(t, e, n, void 0, void 0);
          }
          I(Go, T),
            I(zo, T),
            (zo.prototype.v = function () {
              var t = {
                code: this.code,
                message: this.message,
              };
              this.email && (t.email = this.email),
                this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                this.tenantId && (t.tenantId = this.tenantId);
              var e = this.credential && this.credential.v();
              return e && gt(t, e), t;
            }),
            (zo.prototype.toJSON = function () {
              return this.v();
            }),
            (Xo.prototype.c = null),
            I(Jo, Xo),
            (Jo.prototype.a = function () {
              var t = Zo(this);
              return t ? new ActiveXObject(t) : new XMLHttpRequest();
            }),
            (Jo.prototype.b = function () {
              var t = {};
              return Zo(this) && ((t[0] = !0), (t[1] = !0)), t;
            }),
            (Qo = new Jo()),
            I(ta, Xo),
            (ta.prototype.a = function () {
              var t = new XMLHttpRequest();
              if ('withCredentials' in t) return t;
              if ('undefined' != typeof XDomainRequest) return new ea();
              throw Error('Unsupported browser');
            }),
            (ta.prototype.b = function () {
              return {};
            }),
            ((e = ea.prototype).open = function (t, e, n) {
              if (null != n && !n)
                throw Error('Only async requests are supported.');
              this.a.open(t, e);
            }),
            (e.send = function (t) {
              if (t) {
                if ('string' != typeof t)
                  throw Error('Only string data is supported');
                this.a.send(t);
              } else this.a.send();
            }),
            (e.abort = function () {
              this.a.abort();
            }),
            (e.setRequestHeader = function () {}),
            (e.getResponseHeader = function (t) {
              return 'content-type' == t.toLowerCase()
                ? this.a.contentType
                : '';
            }),
            (e.oc = function () {
              (this.status = 200),
                (this.response = this.responseText = this.a.responseText),
                na(this, 4);
            }),
            (e.Pb = function () {
              (this.status = 500),
                (this.response = this.responseText = ''),
                na(this, 4);
            }),
            (e.tc = function () {
              this.Pb();
            }),
            (e.pc = function () {
              (this.status = 200), na(this, 1);
            }),
            (e.getAllResponseHeaders = function () {
              return 'content-type: ' + this.a.contentType;
            }),
            (ra.prototype.a = null);

          function ia(t) {
            (this.f = t), (this.b = this.c = this.a = null);
          }

          function oa(t, e) {
            (this.name = t), (this.value = e);
          }
          (ra.prototype.reset = function (t, e, n, r, i) {
            'number' == typeof i || 0, r || S(), delete this.a;
          }),
            (oa.prototype.toString = function () {
              return this.name;
            });
          var aa = new oa('SEVERE', 1e3),
            sa = new oa('WARNING', 900),
            ua = new oa('CONFIG', 700),
            ca = new oa('FINE', 500);

          function ha(t) {
            return t.c
              ? t.c
              : t.a
              ? ha(t.a)
              : (M('Root logger has no level set.'), null);
          }
          ia.prototype.log = function (t, e, n) {
            if (t.value >= ha(this).value)
              for (
                v(e) && (e = e()),
                  t = new ra(t, String(e), this.f),
                  n && (t.a = n),
                  n = this;
                n;

              )
                n = n.a;
          };
          var la = {},
            fa = null;

          function pa(t) {
            var e;
            if (
              (fa || ((fa = new ia('')), (la[''] = fa), (fa.c = ua)),
              !(e = la[t]))
            ) {
              e = new ia(t);
              var n = t.lastIndexOf('.'),
                r = t.substr(n + 1);
              (n = pa(t.substr(0, n))).b || (n.b = {}),
                (n.b[r] = e),
                (e.a = n),
                (la[t] = e);
            }
            return e;
          }

          function da(t, e) {
            t && t.log(ca, e, void 0);
          }

          function va(t) {
            this.f = t;
          }

          function ya(t) {
            En.call(this),
              (this.s = t),
              (this.readyState = ga),
              (this.status = 0),
              (this.responseType =
                this.responseText =
                this.response =
                this.statusText =
                  ''),
              (this.onreadystatechange = null),
              (this.i = new Headers()),
              (this.b = null),
              (this.m = 'GET'),
              (this.g = ''),
              (this.a = !1),
              (this.h = pa('goog.net.FetchXmlHttp')),
              (this.l = this.c = this.f = null);
          }
          I(va, Xo),
            (va.prototype.a = function () {
              return new ya(this.f);
            }),
            (va.prototype.b = (function (t) {
              return function () {
                return t;
              };
            })({})),
            I(ya, En);
          var ga = 0;

          function ma(t) {
            t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t));
          }

          function _a(t, e) {
            e &&
              t.f &&
              ((t.status = t.f.status), (t.statusText = t.f.statusText)),
              (t.readyState = 4),
              (t.f = null),
              (t.c = null),
              (t.l = null),
              ba(t);
          }

          function ba(t) {
            t.onreadystatechange && t.onreadystatechange.call(t);
          }

          function wa(t) {
            En.call(this),
              (this.headers = new Pn()),
              (this.D = t || null),
              (this.c = !1),
              (this.B = this.a = null),
              (this.h = this.P = this.l = ''),
              (this.f = this.O = this.i = this.N = !1),
              (this.g = 0),
              (this.s = null),
              (this.m = Ea),
              (this.w = this.R = !1);
          }
          ((e = ya.prototype).open = function (t, e) {
            if (this.readyState != ga)
              throw (this.abort(), Error('Error reopening a connection'));
            (this.m = t), (this.g = e), (this.readyState = 1), ba(this);
          }),
            (e.send = function (t) {
              if (1 != this.readyState)
                throw (this.abort(), Error('need to call open() first. '));
              this.a = !0;
              var e = {
                headers: this.i,
                method: this.m,
                credentials: void 0,
                cache: void 0,
              };
              t && (e.body = t),
                this.s
                  .fetch(new Request(this.g, e))
                  .then(this.sc.bind(this), this.Sa.bind(this));
            }),
            (e.abort = function () {
              (this.response = this.responseText = ''),
                (this.i = new Headers()),
                (this.status = 0),
                this.c && this.c.cancel('Request was aborted.'),
                1 <= this.readyState &&
                  this.a &&
                  4 != this.readyState &&
                  ((this.a = !1), _a(this, !1)),
                (this.readyState = ga);
            }),
            (e.sc = function (t) {
              this.a &&
                ((this.f = t),
                this.b ||
                  ((this.b = t.headers), (this.readyState = 2), ba(this)),
                this.a &&
                  ((this.readyState = 3),
                  ba(this),
                  this.a &&
                    ('arraybuffer' === this.responseType
                      ? t
                          .arrayBuffer()
                          .then(this.qc.bind(this), this.Sa.bind(this))
                      : 'undefined' !== typeof c.ReadableStream && 'body' in t
                      ? ((this.response = this.responseText = ''),
                        (this.c = t.body.getReader()),
                        (this.l = new TextDecoder()),
                        ma(this))
                      : t
                          .text()
                          .then(this.rc.bind(this), this.Sa.bind(this)))));
            }),
            (e.nc = function (t) {
              if (this.a) {
                var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                  stream: !t.done,
                });
                e && (this.response = this.responseText += e),
                  t.done ? _a(this, !0) : ba(this),
                  3 == this.readyState && ma(this);
              }
            }),
            (e.rc = function (t) {
              this.a && ((this.response = this.responseText = t), _a(this, !0));
            }),
            (e.qc = function (t) {
              this.a && ((this.response = t), _a(this, !0));
            }),
            (e.Sa = function (t) {
              var e = this.h;
              e &&
                e.log(
                  sa,
                  'Failed to fetch url ' + this.g,
                  t instanceof Error ? t : Error(t)
                ),
                this.a && _a(this, !0);
            }),
            (e.setRequestHeader = function (t, e) {
              this.i.append(t, e);
            }),
            (e.getResponseHeader = function (t) {
              return this.b
                ? this.b.get(t.toLowerCase()) || ''
                : ((t = this.h) &&
                    t.log(
                      sa,
                      'Attempting to get response header but no headers have been received for url: ' +
                        this.g,
                      void 0
                    ),
                  '');
            }),
            (e.getAllResponseHeaders = function () {
              if (!this.b) {
                var t = this.h;
                return (
                  t &&
                    t.log(
                      sa,
                      'Attempting to get all response headers but no headers have been received for url: ' +
                        this.g,
                      void 0
                    ),
                  ''
                );
              }
              t = [];
              for (var e = this.b.entries(), n = e.next(); !n.done; )
                (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next());
              return t.join('\r\n');
            }),
            I(wa, En);
          var Ea = '';
          wa.prototype.b = pa('goog.net.XhrIo');
          var Ca = /^https?$/i,
            Sa = ['POST', 'PUT'];

          function Ia(t, e, n, r, i) {
            if (t.a)
              throw Error(
                '[goog.net.XhrIo] Object is active with another request=' +
                  t.l +
                  '; newUri=' +
                  e
              );
            (n = n ? n.toUpperCase() : 'GET'),
              (t.l = e),
              (t.h = ''),
              (t.P = n),
              (t.N = !1),
              (t.c = !0),
              (t.a = t.D ? t.D.a() : Qo.a()),
              (t.B = t.D ? $o(t.D) : $o(Qo)),
              (t.a.onreadystatechange = E(t.Sb, t));
            try {
              da(t.b, Da(t, 'Opening Xhr')),
                (t.O = !0),
                t.a.open(n, String(e), !0),
                (t.O = !1);
            } catch (a) {
              return (
                da(t.b, Da(t, 'Error opening Xhr: ' + a.message)), void Na(t, a)
              );
            }
            e = r || '';
            var o = new Pn(t.headers);
            i &&
              (function (t, e) {
                if (t.forEach && 'function' == typeof t.forEach)
                  t.forEach(e, void 0);
                else if (d(t) || 'string' === typeof t) H(t, e, void 0);
                else
                  for (
                    var n = On(t), r = An(t), i = r.length, o = 0;
                    o < i;
                    o++
                  )
                    e.call(void 0, r[o], n && n[o], t);
              })(i, function (t, e) {
                o.set(e, t);
              }),
              (i = (function (t) {
                t: {
                  for (
                    var e = Ta,
                      n = t.length,
                      r = 'string' === typeof t ? t.split('') : t,
                      i = 0;
                    i < n;
                    i++
                  )
                    if (i in r && e.call(void 0, r[i], i, t)) {
                      e = i;
                      break t;
                    }
                  e = -1;
                }
                return 0 > e
                  ? null
                  : 'string' === typeof t
                  ? t.charAt(e)
                  : t[e];
              })(o.X())),
              (r = c.FormData && e instanceof c.FormData),
              !z(Sa, n) ||
                i ||
                r ||
                o.set(
                  'Content-Type',
                  'application/x-www-form-urlencoded;charset=utf-8'
                ),
              o.forEach(function (t, e) {
                this.a.setRequestHeader(e, t);
              }, t),
              t.m && (t.a.responseType = t.m),
              'withCredentials' in t.a &&
                t.a.withCredentials !== t.R &&
                (t.a.withCredentials = t.R);
            try {
              ka(t),
                0 < t.g &&
                  ((t.w = (function (t) {
                    return (
                      zt &&
                      oe(9) &&
                      'number' === typeof t.timeout &&
                      void 0 !== t.ontimeout
                    );
                  })(t.a)),
                  da(
                    t.b,
                    Da(
                      t,
                      'Will abort after ' +
                        t.g +
                        'ms if incomplete, xhr2 ' +
                        t.w
                    )
                  ),
                  t.w
                    ? ((t.a.timeout = t.g), (t.a.ontimeout = E(t.Ka, t)))
                    : (t.s = Tn(t.Ka, t.g, t))),
                da(t.b, Da(t, 'Sending request')),
                (t.i = !0),
                t.a.send(e),
                (t.i = !1);
            } catch (a) {
              da(t.b, Da(t, 'Send error: ' + a.message)), Na(t, a);
            }
          }

          function Ta(t) {
            return 'content-type' == t.toLowerCase();
          }

          function Na(t, e) {
            (t.c = !1),
              t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
              (t.h = e),
              Aa(t),
              Pa(t);
          }

          function Aa(t) {
            t.N ||
              ((t.N = !0),
              t.dispatchEvent('complete'),
              t.dispatchEvent('error'));
          }

          function Oa(t) {
            if (t.c && 'undefined' != typeof u)
              if (t.B[1] && 4 == xa(t) && 2 == Ra(t))
                da(t.b, Da(t, 'Local request error detected and ignored'));
              else if (t.i && 4 == xa(t)) Tn(t.Sb, 0, t);
              else if ((t.dispatchEvent('readystatechange'), 4 == xa(t))) {
                da(t.b, Da(t, 'Request complete')), (t.c = !1);
                try {
                  var e,
                    n = Ra(t);
                  t: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                      var r = !0;
                      break t;
                    default:
                      r = !1;
                  }
                  if (!(e = r)) {
                    var i;
                    if ((i = 0 === n)) {
                      var o = String(t.l).match(Rn)[1] || null;
                      if (!o && c.self && c.self.location) {
                        var a = c.self.location.protocol;
                        o = a.substr(0, a.length - 1);
                      }
                      i = !Ca.test(o ? o.toLowerCase() : '');
                    }
                    e = i;
                  }
                  if (e)
                    t.dispatchEvent('complete'), t.dispatchEvent('success');
                  else {
                    try {
                      var s = 2 < xa(t) ? t.a.statusText : '';
                    } catch (h) {
                      da(t.b, 'Can not get status: ' + h.message), (s = '');
                    }
                    (t.h = s + ' [' + Ra(t) + ']'), Aa(t);
                  }
                } finally {
                  Pa(t);
                }
              }
          }

          function Pa(t, e) {
            if (t.a) {
              ka(t);
              var n = t.a,
                r = t.B[0] ? f : null;
              (t.a = null), (t.B = null), e || t.dispatchEvent('ready');
              try {
                n.onreadystatechange = r;
              } catch (i) {
                (t = t.b) &&
                  t.log(
                    aa,
                    'Problem encountered resetting onreadystatechange: ' +
                      i.message,
                    void 0
                  );
              }
            }
          }

          function ka(t) {
            t.a && t.w && (t.a.ontimeout = null),
              t.s && (c.clearTimeout(t.s), (t.s = null));
          }

          function xa(t) {
            return t.a ? t.a.readyState : 0;
          }

          function Ra(t) {
            try {
              return 2 < xa(t) ? t.a.status : -1;
            } catch (e) {
              return -1;
            }
          }

          function Da(t, e) {
            return e + ' [' + t.P + ' ' + t.l + ' ' + Ra(t) + ']';
          }

          function La(t) {
            var e = Ka;
            (this.g = []),
              (this.w = e),
              (this.s = t || null),
              (this.f = this.a = !1),
              (this.c = void 0),
              (this.u = this.B = this.i = !1),
              (this.h = 0),
              (this.b = null),
              (this.l = 0);
          }

          function Ma(t, e, n) {
            (t.a = !0), (t.c = n), (t.f = !e), Va(t);
          }

          function Fa(t) {
            if (t.a) {
              if (!t.u) throw new Wa(t);
              t.u = !1;
            }
          }

          function ja(t, e, n, r) {
            t.g.push([e, n, r]), t.a && Va(t);
          }

          function Ua(t) {
            return G(t.g, function (t) {
              return v(t[1]);
            });
          }

          function Va(t) {
            if (t.h && t.a && Ua(t)) {
              var e = t.h,
                n = Ha[e];
              n && (c.clearTimeout(n.a), delete Ha[e]), (t.h = 0);
            }
            t.b && (t.b.l--, delete t.b), (e = t.c);
            for (var r = (n = !1); t.g.length && !t.i; ) {
              var i = t.g.shift(),
                o = i[0],
                a = i[1];
              if (((i = i[2]), (o = t.f ? a : o)))
                try {
                  var s = o.call(i || t.s, e);
                  void 0 !== s &&
                    ((t.f = t.f && (s == e || s instanceof Error)),
                    (t.c = e = s)),
                    (R(e) ||
                      ('function' === typeof c.Promise &&
                        e instanceof c.Promise)) &&
                      ((r = !0), (t.i = !0));
                } catch (u) {
                  (e = u), (t.f = !0), Ua(t) || (n = !0);
                }
            }
            (t.c = e),
              r &&
                ((s = E(t.m, t, !0)),
                (r = E(t.m, t, !1)),
                e instanceof La ? (ja(e, s, r), (e.B = !0)) : e.then(s, r)),
              n && ((e = new Ba(e)), (Ha[e.a] = e), (t.h = e.a));
          }

          function Wa() {
            D.call(this);
          }

          function qa() {
            D.call(this);
          }

          function Ba(t) {
            (this.a = c.setTimeout(E(this.c, this), 0)), (this.b = t);
          }
          ((e = wa.prototype).Ka = function () {
            'undefined' != typeof u &&
              this.a &&
              ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
              da(this.b, Da(this, this.h)),
              this.dispatchEvent('timeout'),
              this.abort(8));
          }),
            (e.abort = function () {
              this.a &&
                this.c &&
                (da(this.b, Da(this, 'Aborting')),
                (this.c = !1),
                (this.f = !0),
                this.a.abort(),
                (this.f = !1),
                this.dispatchEvent('complete'),
                this.dispatchEvent('abort'),
                Pa(this));
            }),
            (e.Ba = function () {
              this.a &&
                (this.c &&
                  ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
                Pa(this, !0)),
                wa.Za.Ba.call(this);
            }),
            (e.Sb = function () {
              this.wa || (this.O || this.i || this.f ? Oa(this) : this.Hc());
            }),
            (e.Hc = function () {
              Oa(this);
            }),
            (e.getResponse = function () {
              try {
                if (!this.a) return null;
                if ('response' in this.a) return this.a.response;
                switch (this.m) {
                  case Ea:
                  case 'text':
                    return this.a.responseText;
                  case 'arraybuffer':
                    if ('mozResponseArrayBuffer' in this.a)
                      return this.a.mozResponseArrayBuffer;
                }
                var t = this.b;
                return (
                  t &&
                    t.log(
                      aa,
                      'Response type ' +
                        this.m +
                        ' is not supported on this browser',
                      void 0
                    ),
                  null
                );
              } catch (e) {
                return da(this.b, 'Can not get response: ' + e.message), null;
              }
            }),
            (La.prototype.cancel = function (t) {
              if (this.a) this.c instanceof La && this.c.cancel();
              else {
                if (this.b) {
                  var e = this.b;
                  delete this.b,
                    t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel());
                }
                this.w ? this.w.call(this.s, this) : (this.u = !0),
                  this.a || ((t = new qa(this)), Fa(this), Ma(this, !1, t));
              }
            }),
            (La.prototype.m = function (t, e) {
              (this.i = !1), Ma(this, t, e);
            }),
            (La.prototype.then = function (t, e, n) {
              var r,
                i,
                o = new we(function (t, e) {
                  (r = t), (i = e);
                });
              return (
                ja(this, r, function (t) {
                  t instanceof qa ? o.cancel() : i(t);
                }),
                o.then(t, e, n)
              );
            }),
            (La.prototype.$goog_Thenable = !0),
            I(Wa, D),
            (Wa.prototype.message = 'Deferred has already fired'),
            (Wa.prototype.name = 'AlreadyCalledError'),
            I(qa, D),
            (qa.prototype.message = 'Deferred was canceled'),
            (qa.prototype.name = 'CanceledError'),
            (Ba.prototype.c = function () {
              throw (delete Ha[this.a], this.b);
            });
          var Ha = {};

          function Qa(t) {
            var e = {},
              n = e.document || document,
              r = It(t).toString(),
              i = pe(document, 'SCRIPT'),
              o = {
                Tb: i,
                Ka: void 0,
              },
              a = new La(o),
              s = null,
              u = null != e.timeout ? e.timeout : 5e3;
            return (
              0 < u &&
                ((s = window.setTimeout(function () {
                  Ga(i, !0);
                  var t = new Xa(Ya, 'Timeout reached for loading script ' + r);
                  Fa(a), Ma(a, !1, t);
                }, u)),
                (o.Ka = s)),
              (i.onload = i.onreadystatechange =
                function () {
                  (i.readyState &&
                    'loaded' != i.readyState &&
                    'complete' != i.readyState) ||
                    (Ga(i, e.ud || !1, s), Fa(a), Ma(a, !0, null));
                }),
              (i.onerror = function () {
                Ga(i, !0, s);
                var t = new Xa(za, 'Error while loading script ' + r);
                Fa(a), Ma(a, !1, t);
              }),
              gt((o = e.attributes || {}), {
                type: 'text/javascript',
                charset: 'UTF-8',
              }),
              ue(i, o),
              (function (t, e) {
                mt(t, 'HTMLScriptElement'),
                  (t.src = It(e)),
                  null === l &&
                    (l =
                      (e =
                        (e = c.document).querySelector &&
                        e.querySelector('script[nonce]')) &&
                      (e = e.nonce || e.getAttribute('nonce')) &&
                      h.test(e)
                        ? e
                        : ''),
                  (e = l) && t.setAttribute('nonce', e);
              })(i, t),
              (function (t) {
                var e;
                return (e = (t || document).getElementsByTagName('HEAD')) &&
                  0 != e.length
                  ? e[0]
                  : t.documentElement;
              })(n).appendChild(i),
              a
            );
          }

          function Ka() {
            if (this && this.Tb) {
              var t = this.Tb;
              t && 'SCRIPT' == t.tagName && Ga(t, !0, this.Ka);
            }
          }

          function Ga(t, e, n) {
            null != n && c.clearTimeout(n),
              (t.onload = f),
              (t.onerror = f),
              (t.onreadystatechange = f),
              e &&
                window.setTimeout(function () {
                  t && t.parentNode && t.parentNode.removeChild(t);
                }, 0);
          }
          var za = 0,
            Ya = 1;

          function Xa(t, e) {
            var n = 'Jsloader error (code #' + t + ')';
            e && (n += ': ' + e), D.call(this, n), (this.code = t);
          }

          function $a(t) {
            this.f = t;
          }

          function Ja(t, e, n) {
            if (
              ((this.c = t),
              (t = e || {}),
              (this.u =
                t.secureTokenEndpoint ||
                'https://securetoken.googleapis.com/v1/token'),
              (this.m = t.secureTokenTimeout || es),
              (this.g = vt(t.secureTokenHeaders || ns)),
              (this.h =
                t.firebaseEndpoint ||
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
              (this.l =
                t.identityPlatformEndpoint ||
                'https://identitytoolkit.googleapis.com/v2/'),
              (this.i = t.firebaseTimeout || rs),
              (this.a = vt(t.firebaseHeaders || is)),
              n &&
                ((this.a['X-Client-Version'] = n),
                (this.g['X-Client-Version'] = n)),
              (n = 'Node' == Cr()),
              !(n =
                c.XMLHttpRequest ||
                (n && r.a.INTERNAL.node && r.a.INTERNAL.node.XMLHttpRequest)) &&
                !Er())
            )
              throw new T(
                'internal-error',
                'The XMLHttpRequest compatibility library was not found.'
              );
            (this.f = void 0),
              Er()
                ? (this.f = new va(self))
                : Sr()
                ? (this.f = new $a(n))
                : (this.f = new ta()),
              (this.b = null);
          }
          I(Xa, D),
            I($a, Xo),
            ($a.prototype.a = function () {
              return new this.f();
            }),
            ($a.prototype.b = function () {
              return {};
            });
          var Za,
            ts = 'idToken',
            es = new Br(3e4, 6e4),
            ns = {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            rs = new Br(3e4, 6e4),
            is = {
              'Content-Type': 'application/json',
            };

          function os(t, e) {
            e
              ? (t.a['X-Firebase-Locale'] = e)
              : delete t.a['X-Firebase-Locale'];
          }

          function as(t, e) {
            e
              ? ((t.a['X-Client-Version'] = e), (t.g['X-Client-Version'] = e))
              : (delete t.a['X-Client-Version'],
                delete t.g['X-Client-Version']);
          }

          function ss(t, e, n, r, i, o, a) {
            (function () {
              var t = Pr();
              return (
                !(
                  (t =
                    Nr(t) != Tr
                      ? null
                      : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                      ? parseInt(t[1], 10)
                      : null) && 30 > t
                ) &&
                (!zt || !re || 9 < re)
              );
            })() || Er()
              ? (t = E(t.w, t))
              : (Za ||
                  (Za = new we(function (t, e) {
                    !(function (t, e) {
                      if (((window.gapi || {}).client || {}).request) t();
                      else {
                        (c[cs] = function () {
                          ((window.gapi || {}).client || {}).request
                            ? t()
                            : e(Error('CORS_UNSUPPORTED'));
                        }),
                          (function (t, e) {
                            ja(t, null, e, void 0);
                          })(
                            Qa(
                              Tt(us, {
                                onload: cs,
                              })
                            ),
                            function () {
                              e(Error('CORS_UNSUPPORTED'));
                            }
                          );
                      }
                    })(t, e);
                  })),
                (t = E(t.s, t))),
              t(e, n, r, i, o, a);
          }
          (Ja.prototype.S = function () {
            return this.b;
          }),
            (Ja.prototype.w = function (t, e, n, r, i, o) {
              if (
                Er() &&
                ('undefined' === typeof c.fetch ||
                  'undefined' === typeof c.Headers ||
                  'undefined' === typeof c.Request)
              )
                throw new T(
                  'operation-not-supported-in-this-environment',
                  'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
                );
              var a = new wa(this.f);
              if (o) {
                a.g = Math.max(0, o);
                var s = setTimeout(function () {
                  a.dispatchEvent('timeout');
                }, o);
              }
              Cn(a, 'complete', function () {
                s && clearTimeout(s);
                var t = null;
                try {
                  t =
                    JSON.parse(
                      (function (t) {
                        try {
                          return t.a ? t.a.responseText : '';
                        } catch (e) {
                          return (
                            da(t.b, 'Can not get responseText: ' + e.message),
                            ''
                          );
                        }
                      })(this)
                    ) || null;
                } catch (n) {
                  t = null;
                }
                e && e(t);
              }),
                Sn(a, 'ready', function () {
                  s && clearTimeout(s), Ke(this);
                }),
                Sn(a, 'timeout', function () {
                  s && clearTimeout(s), Ke(this), e && e(null);
                }),
                Ia(a, t, n, r, i);
            });
          var us = new _t(
              Et,
              'https://apis.google.com/js/client.js?onload=%{onload}'
            ),
            cs = '__fcb' + Math.floor(1e6 * Math.random()).toString();

          function hs(t, e, n, r, i, o, a) {
            var s = Vn(e + n);
            jn(s, 'key', t.c), a && jn(s, 'cb', S().toString());
            var u = 'GET' == r;
            if (u) for (var c in i) i.hasOwnProperty(c) && jn(s, c, i[c]);
            return new we(function (e, n) {
              ss(
                t,
                s.toString(),
                function (t) {
                  t
                    ? t.error
                      ? n(ou(t, o || {}))
                      : e(t)
                    : n(new T('network-request-failed'));
                },
                r,
                u ? void 0 : ir(jr(i)),
                t.a,
                t.i.get()
              );
            });
          }

          function ls(t) {
            if ('string' !== typeof (t = t.email) || !mr.test(t))
              throw new T('invalid-email');
          }

          function fs(t) {
            'email' in t && ls(t);
          }

          function ps(t) {
            if (!t[ts]) {
              if (t.mfaPendingCredential)
                throw new T('multi-factor-auth-required', null, vt(t));
              throw new T('internal-error');
            }
          }

          function ds(t) {
            if (t.phoneNumber || t.temporaryProof) {
              if (!t.phoneNumber || !t.temporaryProof)
                throw new T('internal-error');
            } else {
              if (!t.sessionInfo) throw new T('missing-verification-id');
              if (!t.code) throw new T('missing-verification-code');
            }
          }
          (Ja.prototype.s = function (t, e, n, r, i) {
            var o = this;
            Za.then(function () {
              window.gapi.client.setApiKey(o.c);
              var a = window.gapi.auth.getToken();
              window.gapi.auth.setToken(null),
                window.gapi.client.request({
                  path: t,
                  method: n,
                  body: r,
                  headers: i,
                  authType: 'none',
                  callback: function (t) {
                    window.gapi.auth.setToken(a), e && e(t);
                  },
                });
            }).o(function (t) {
              e &&
                e({
                  error: {
                    message: (t && t.message) || 'CORS_UNSUPPORTED',
                  },
                });
            });
          }),
            (Ja.prototype.vb = function () {
              return ru(this, Qs, {});
            }),
            (Ja.prototype.xb = function (t, e) {
              return ru(this, Bs, {
                idToken: t,
                email: e,
              });
            }),
            (Ja.prototype.yb = function (t, e) {
              return ru(this, Hs, {
                idToken: t,
                password: e,
              });
            });
          var vs = {
            displayName: 'DISPLAY_NAME',
            photoUrl: 'PHOTO_URL',
          };

          function ys(t) {
            if (!t.phoneVerificationInfo) throw new T('internal-error');
            if (!t.phoneVerificationInfo.sessionInfo)
              throw new T('missing-verification-id');
            if (!t.phoneVerificationInfo.code)
              throw new T('missing-verification-code');
          }

          function gs(t) {
            if (
              !t.requestUri ||
              (!t.sessionId && !t.postBody && !t.pendingToken)
            )
              throw new T('internal-error');
          }

          function ms(t, e) {
            return (
              e.oauthIdToken &&
                e.providerId &&
                0 == e.providerId.indexOf('oidc.') &&
                !e.pendingToken &&
                (t.sessionId
                  ? (e.nonce = t.sessionId)
                  : t.postBody &&
                    tr((t = new Xn(t.postBody)), 'nonce') &&
                    (e.nonce = t.get('nonce'))),
              e
            );
          }

          function _s(t) {
            var e = null;
            if (
              (t.needConfirmation
                ? ((t.code = 'account-exists-with-different-credential'),
                  (e = Yo(t)))
                : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
                ? ((t.code = 'credential-already-in-use'), (e = Yo(t)))
                : 'EMAIL_EXISTS' == t.errorMessage
                ? ((t.code = 'email-already-in-use'), (e = Yo(t)))
                : t.errorMessage && (e = iu(t.errorMessage)),
              e)
            )
              throw e;
            ps(t);
          }

          function bs(t, e) {
            return (e.returnIdpCredential = !0), ru(t, zs, e);
          }

          function ws(t, e) {
            return (e.returnIdpCredential = !0), ru(t, Xs, e);
          }

          function Es(t, e) {
            return (
              (e.returnIdpCredential = !0), (e.autoCreate = !1), ru(t, Ys, e)
            );
          }

          function Cs(t) {
            if (!t.oobCode) throw new T('invalid-action-code');
          }
          ((e = Ja.prototype).zb = function (t, e) {
            var n = {
                idToken: t,
              },
              r = [];
            return (
              pt(vs, function (t, i) {
                var o = e[i];
                null === o ? r.push(t) : i in e && (n[i] = o);
              }),
              r.length && (n.deleteAttribute = r),
              ru(this, Bs, n)
            );
          }),
            (e.rb = function (t, e) {
              return (
                gt(
                  (t = {
                    requestType: 'PASSWORD_RESET',
                    email: t,
                  }),
                  e
                ),
                ru(this, js, t)
              );
            }),
            (e.sb = function (t, e) {
              return (
                gt(
                  (t = {
                    requestType: 'EMAIL_SIGNIN',
                    email: t,
                  }),
                  e
                ),
                ru(this, Ls, t)
              );
            }),
            (e.qb = function (t, e) {
              return (
                gt(
                  (t = {
                    requestType: 'VERIFY_EMAIL',
                    idToken: t,
                  }),
                  e
                ),
                ru(this, Ms, t)
              );
            }),
            (e.Ab = function (t, e, n) {
              return (
                gt(
                  (t = {
                    requestType: 'VERIFY_AND_CHANGE_EMAIL',
                    idToken: t,
                    newEmail: e,
                  }),
                  n
                ),
                ru(this, Fs, t)
              );
            }),
            (e.cb = function (t) {
              return ru(this, Zs, t);
            }),
            (e.jb = function (t, e) {
              return ru(this, Ws, {
                oobCode: t,
                newPassword: e,
              });
            }),
            (e.Pa = function (t) {
              return ru(this, Is, {
                oobCode: t,
              });
            }),
            (e.fb = function (t) {
              return ru(this, Ss, {
                oobCode: t,
              });
            });
          var Ss = {
              endpoint: 'setAccountInfo',
              A: Cs,
              Y: 'email',
              C: !0,
            },
            Is = {
              endpoint: 'resetPassword',
              A: Cs,
              G: function (t) {
                var e = t.requestType;
                if (
                  !e ||
                  (!t.email &&
                    'EMAIL_SIGNIN' != e &&
                    'VERIFY_AND_CHANGE_EMAIL' != e)
                )
                  throw new T('internal-error');
              },
              C: !0,
            },
            Ts = {
              endpoint: 'signupNewUser',
              A: function (t) {
                if ((ls(t), !t.password)) throw new T('weak-password');
              },
              G: ps,
              U: !0,
              C: !0,
            },
            Ns = {
              endpoint: 'createAuthUri',
              C: !0,
            },
            As = {
              endpoint: 'deleteAccount',
              M: ['idToken'],
            },
            Os = {
              endpoint: 'setAccountInfo',
              M: ['idToken', 'deleteProvider'],
              A: function (t) {
                if ('array' != p(t.deleteProvider))
                  throw new T('internal-error');
              },
            },
            Ps = {
              endpoint: 'emailLinkSignin',
              M: ['email', 'oobCode'],
              A: ls,
              G: ps,
              U: !0,
              C: !0,
            },
            ks = {
              endpoint: 'emailLinkSignin',
              M: ['idToken', 'email', 'oobCode'],
              A: ls,
              G: ps,
              U: !0,
            },
            xs = {
              endpoint: 'accounts/mfaEnrollment:finalize',
              M: ['idToken', 'phoneVerificationInfo'],
              A: ys,
              G: ps,
              C: !0,
              La: !0,
            },
            Rs = {
              endpoint: 'accounts/mfaSignIn:finalize',
              M: ['mfaPendingCredential', 'phoneVerificationInfo'],
              A: ys,
              G: ps,
              C: !0,
              La: !0,
            },
            Ds = {
              endpoint: 'getAccountInfo',
            },
            Ls = {
              endpoint: 'getOobConfirmationCode',
              M: ['requestType'],
              A: function (t) {
                if ('EMAIL_SIGNIN' != t.requestType)
                  throw new T('internal-error');
                ls(t);
              },
              Y: 'email',
              C: !0,
            },
            Ms = {
              endpoint: 'getOobConfirmationCode',
              M: ['idToken', 'requestType'],
              A: function (t) {
                if ('VERIFY_EMAIL' != t.requestType)
                  throw new T('internal-error');
              },
              Y: 'email',
              C: !0,
            },
            Fs = {
              endpoint: 'getOobConfirmationCode',
              M: ['idToken', 'newEmail', 'requestType'],
              A: function (t) {
                if ('VERIFY_AND_CHANGE_EMAIL' != t.requestType)
                  throw new T('internal-error');
              },
              Y: 'email',
              C: !0,
            },
            js = {
              endpoint: 'getOobConfirmationCode',
              M: ['requestType'],
              A: function (t) {
                if ('PASSWORD_RESET' != t.requestType)
                  throw new T('internal-error');
                ls(t);
              },
              Y: 'email',
              C: !0,
            },
            Us = {
              hb: !0,
              endpoint: 'getProjectConfig',
              Rb: 'GET',
            },
            Vs = {
              hb: !0,
              endpoint: 'getRecaptchaParam',
              Rb: 'GET',
              G: function (t) {
                if (!t.recaptchaSiteKey) throw new T('internal-error');
              },
            },
            Ws = {
              endpoint: 'resetPassword',
              A: Cs,
              Y: 'email',
              C: !0,
            },
            qs = {
              endpoint: 'sendVerificationCode',
              M: ['phoneNumber', 'recaptchaToken'],
              Y: 'sessionInfo',
              C: !0,
            },
            Bs = {
              endpoint: 'setAccountInfo',
              M: ['idToken'],
              A: fs,
              U: !0,
            },
            Hs = {
              endpoint: 'setAccountInfo',
              M: ['idToken'],
              A: function (t) {
                if ((fs(t), !t.password)) throw new T('weak-password');
              },
              G: ps,
              U: !0,
            },
            Qs = {
              endpoint: 'signupNewUser',
              G: ps,
              U: !0,
              C: !0,
            },
            Ks = {
              endpoint: 'accounts/mfaEnrollment:start',
              M: ['idToken', 'phoneEnrollmentInfo'],
              A: function (t) {
                if (!t.phoneEnrollmentInfo) throw new T('internal-error');
                if (!t.phoneEnrollmentInfo.phoneNumber)
                  throw new T('missing-phone-number');
                if (!t.phoneEnrollmentInfo.recaptchaToken)
                  throw new T('missing-app-credential');
              },
              G: function (t) {
                if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                  throw new T('internal-error');
              },
              C: !0,
              La: !0,
            },
            Gs = {
              endpoint: 'accounts/mfaSignIn:start',
              M: ['mfaPendingCredential', 'mfaEnrollmentId', 'phoneSignInInfo'],
              A: function (t) {
                if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                  throw new T('missing-app-credential');
              },
              G: function (t) {
                if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                  throw new T('internal-error');
              },
              C: !0,
              La: !0,
            },
            zs = {
              endpoint: 'verifyAssertion',
              A: gs,
              Wa: ms,
              G: _s,
              U: !0,
              C: !0,
            },
            Ys = {
              endpoint: 'verifyAssertion',
              A: gs,
              Wa: ms,
              G: function (t) {
                if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage)
                  throw new T('user-not-found');
                if (t.errorMessage) throw iu(t.errorMessage);
                ps(t);
              },
              U: !0,
              C: !0,
            },
            Xs = {
              endpoint: 'verifyAssertion',
              A: function (t) {
                if ((gs(t), !t.idToken)) throw new T('internal-error');
              },
              Wa: ms,
              G: _s,
              U: !0,
            },
            $s = {
              endpoint: 'verifyCustomToken',
              A: function (t) {
                if (!t.token) throw new T('invalid-custom-token');
              },
              G: ps,
              U: !0,
              C: !0,
            },
            Js = {
              endpoint: 'verifyPassword',
              A: function (t) {
                if ((ls(t), !t.password)) throw new T('wrong-password');
              },
              G: ps,
              U: !0,
              C: !0,
            },
            Zs = {
              endpoint: 'verifyPhoneNumber',
              A: ds,
              G: ps,
              C: !0,
            },
            tu = {
              endpoint: 'verifyPhoneNumber',
              A: function (t) {
                if (!t.idToken) throw new T('internal-error');
                ds(t);
              },
              G: function (t) {
                if (t.temporaryProof)
                  throw ((t.code = 'credential-already-in-use'), Yo(t));
                ps(t);
              },
            },
            eu = {
              Eb: {
                USER_NOT_FOUND: 'user-not-found',
              },
              endpoint: 'verifyPhoneNumber',
              A: ds,
              G: ps,
              C: !0,
            },
            nu = {
              endpoint: 'accounts/mfaEnrollment:withdraw',
              M: ['idToken', 'mfaEnrollmentId'],
              G: function (t) {
                if (!!t[ts] ^ !!t.refreshToken) throw new T('internal-error');
              },
              C: !0,
              La: !0,
            };

          function ru(t, e, n) {
            if (
              !(function (t, e) {
                if (!e || !e.length) return !0;
                if (!t) return !1;
                for (var n = 0; n < e.length; n++) {
                  var r = t[e[n]];
                  if (void 0 === r || null === r || '' === r) return !1;
                }
                return !0;
              })(n, e.M)
            )
              return Oe(new T('internal-error'));
            var r,
              i = !!e.La,
              o = e.Rb || 'POST';
            return Ae(n)
              .then(e.A)
              .then(function () {
                return (
                  e.U && (n.returnSecureToken = !0),
                  e.C &&
                    t.b &&
                    'undefined' === typeof n.tenantId &&
                    (n.tenantId = t.b),
                  hs(t, i ? t.l : t.h, e.endpoint, o, n, e.Eb, e.hb || !1)
                );
              })
              .then(function (t) {
                return (r = t), e.Wa ? e.Wa(n, r) : r;
              })
              .then(e.G)
              .then(function () {
                if (!e.Y) return r;
                if (!(e.Y in r)) throw new T('internal-error');
                return r[e.Y];
              });
          }

          function iu(t) {
            return ou({
              error: {
                errors: [
                  {
                    message: t,
                  },
                ],
                code: 400,
                message: t,
              },
            });
          }

          function ou(t, e) {
            var n =
                ((t.error && t.error.errors && t.error.errors[0]) || {})
                  .reason || '',
              r = {
                keyInvalid: 'invalid-api-key',
                ipRefererBlocked: 'app-not-authorized',
              };
            if ((n = r[n] ? new T(r[n]) : null)) return n;
            for (var i in ((n = (t.error && t.error.message) || ''),
            gt(
              (r = {
                INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
                CREDENTIAL_MISMATCH: 'custom-token-mismatch',
                MISSING_CUSTOM_TOKEN: 'internal-error',
                INVALID_IDENTIFIER: 'invalid-email',
                MISSING_CONTINUE_URI: 'internal-error',
                INVALID_EMAIL: 'invalid-email',
                INVALID_PASSWORD: 'wrong-password',
                USER_DISABLED: 'user-disabled',
                MISSING_PASSWORD: 'internal-error',
                EMAIL_EXISTS: 'email-already-in-use',
                PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
                INVALID_IDP_RESPONSE: 'invalid-credential',
                INVALID_PENDING_TOKEN: 'invalid-credential',
                FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
                MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
                INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
                INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
                INVALID_SENDER: 'invalid-sender',
                EMAIL_NOT_FOUND: 'user-not-found',
                RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
                EXPIRED_OOB_CODE: 'expired-action-code',
                INVALID_OOB_CODE: 'invalid-action-code',
                MISSING_OOB_CODE: 'internal-error',
                INVALID_PROVIDER_ID: 'invalid-provider-id',
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
                INVALID_ID_TOKEN: 'invalid-user-token',
                TOKEN_EXPIRED: 'user-token-expired',
                USER_NOT_FOUND: 'user-token-expired',
                CORS_UNSUPPORTED: 'cors-unsupported',
                DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
                INVALID_APP_ID: 'invalid-app-id',
                TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
                WEAK_PASSWORD: 'weak-password',
                OPERATION_NOT_ALLOWED: 'operation-not-allowed',
                USER_CANCELLED: 'user-cancelled',
                CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
                INVALID_APP_CREDENTIAL: 'invalid-app-credential',
                INVALID_CODE: 'invalid-verification-code',
                INVALID_PHONE_NUMBER: 'invalid-phone-number',
                INVALID_SESSION_INFO: 'invalid-verification-id',
                INVALID_TEMPORARY_PROOF: 'invalid-credential',
                MISSING_APP_CREDENTIAL: 'missing-app-credential',
                MISSING_CODE: 'missing-verification-code',
                MISSING_PHONE_NUMBER: 'missing-phone-number',
                MISSING_SESSION_INFO: 'missing-verification-id',
                QUOTA_EXCEEDED: 'quota-exceeded',
                SESSION_EXPIRED: 'code-expired',
                REJECTED_CREDENTIAL: 'rejected-credential',
                INVALID_CONTINUE_URI: 'invalid-continue-uri',
                MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
                MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
                UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
                INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
                INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
                INVALID_CERT_HASH: 'invalid-cert-hash',
                UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
                INVALID_TENANT_ID: 'invalid-tenant-id',
                TENANT_ID_MISMATCH: 'tenant-id-mismatch',
                ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
                INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
                MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
                MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
                MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
                EMAIL_CHANGE_NEEDS_VERIFICATION:
                  'email-change-needs-verification',
                SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
                SECOND_FACTOR_LIMIT_EXCEEDED:
                  'maximum-second-factor-count-exceeded',
                UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
                UNVERIFIED_EMAIL: 'unverified-email',
              }),
              e || {}
            ),
            (e =
              (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length
                ? e[1]
                : void 0),
            r))
              if (0 === n.indexOf(i)) return new T(r[i], e);
            return !e && t && (e = Fr(t)), new T('internal-error', e);
          }

          function au(t) {
            (this.b = t),
              (this.a = null),
              (this.nb = (function (t) {
                return (
                  hu ||
                  (hu = new we(function (t, e) {
                    function n() {
                      qr(),
                        kr('gapi.load')('gapi.iframes', {
                          callback: t,
                          ontimeout: function () {
                            qr(), e(Error('Network Error'));
                          },
                          timeout: uu.get(),
                        });
                    }
                    if (kr('gapi.iframes.Iframe')) t();
                    else if (kr('gapi.load')) n();
                    else {
                      var r =
                        '__iframefcb' +
                        Math.floor(1e6 * Math.random()).toString();
                      (c[r] = function () {
                        kr('gapi.load') ? n() : e(Error('Network Error'));
                      }),
                        Ae(
                          Qa(
                            (r = Tt(su, {
                              onload: r,
                            }))
                          )
                        ).o(function () {
                          e(Error('Network Error'));
                        });
                    }
                  }).o(function (t) {
                    throw ((hu = null), t);
                  }))
                ).then(function () {
                  return new we(function (e, n) {
                    kr('gapi.iframes.getContext')().open(
                      {
                        where: document.body,
                        url: t.b,
                        messageHandlersFilter: kr(
                          'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'
                        ),
                        attributes: {
                          style: {
                            position: 'absolute',
                            top: '-100px',
                            width: '1px',
                            height: '1px',
                          },
                        },
                        dontclear: !0,
                      },
                      function (r) {
                        function i() {
                          clearTimeout(o), e();
                        }
                        (t.a = r),
                          t.a.restyle({
                            setHideOnLeave: !1,
                          });
                        var o = setTimeout(function () {
                          n(Error('Network Error'));
                        }, cu.get());
                        r.ping(i).then(i, function () {
                          n(Error('Network Error'));
                        });
                      }
                    );
                  });
                });
              })(this));
          }
          var su = new _t(
              Et,
              'https://apis.google.com/js/api.js?onload=%{onload}'
            ),
            uu = new Br(3e4, 6e4),
            cu = new Br(5e3, 15e3),
            hu = null;

          function lu(t, e, n) {
            (this.i = t),
              (this.g = e),
              (this.h = n),
              (this.f = null),
              (this.a = Wn(this.i, '/__/auth/iframe')),
              jn(this.a, 'apiKey', this.g),
              jn(this.a, 'appName', this.h),
              (this.b = null),
              (this.c = []);
          }

          function fu(t, e, n, r, i) {
            (this.s = t),
              (this.m = e),
              (this.c = n),
              (this.u = r),
              (this.i = this.g = this.l = null),
              (this.a = i),
              (this.h = this.f = null);
          }

          function pu(t) {
            try {
              return r.a.app(t).auth().Ea();
            } catch (e) {
              return [];
            }
          }

          function du(t, e, n, r, i) {
            (this.u = t),
              (this.f = e),
              (this.b = n),
              (this.c = r || null),
              (this.h = i || null),
              (this.m = this.s = this.w = null),
              (this.g = []),
              (this.l = this.a = null);
          }

          function vu(t) {
            var e = lr();
            return (function (t) {
              return ru(t, Us, {}).then(function (t) {
                return t.authorizedDomains || [];
              });
            })(t).then(function (t) {
              t: {
                var n = Vn(e),
                  r = n.f;
                n = n.b;
                for (var i = 0; i < t.length; i++) {
                  var o = t[i],
                    a = n,
                    s = r;
                  if (
                    (0 == o.indexOf('chrome-extension://')
                      ? (a = Vn(o).b == a && 'chrome-extension' == s)
                      : 'http' != s && 'https' != s
                      ? (a = !1)
                      : gr.test(o)
                      ? (a = a == o)
                      : ((o = o.split('.').join('\\.')),
                        (a = new RegExp(
                          '^(.+\\.' + o + '|' + o + ')$',
                          'i'
                        ).test(a))),
                    a)
                  ) {
                    t = !0;
                    break t;
                  }
                }
                t = !1;
              }
              if (!t) throw new Go(lr());
            });
          }

          function yu(t) {
            return (
              t.l ||
                (t.l = _r().then(function () {
                  if (!t.s) {
                    var e = t.c,
                      n = t.h,
                      r = pu(t.b),
                      i = new lu(t.u, t.f, t.b);
                    (i.f = e),
                      (i.b = n),
                      (i.c = J(r || [])),
                      (t.s = i.toString());
                  }
                  (t.i = new au(t.s)),
                    (function (t) {
                      if (!t.i) throw Error('IfcHandler must be initialized!');
                      !(function (t, e) {
                        t.nb.then(function () {
                          t.a.register(
                            'authEvent',
                            e,
                            kr('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                          );
                        });
                      })(t.i, function (e) {
                        var n = {};
                        if (e && e.authEvent) {
                          var r = !1;
                          for (e = Bo(e.authEvent), n = 0; n < t.g.length; n++)
                            r = t.g[n](e) || r;
                          return ((n = {}).status = r ? 'ACK' : 'ERROR'), Ae(n);
                        }
                        return (n.status = 'ERROR'), Ae(n);
                      });
                    })(t);
                })),
              t.l
            );
          }

          function gu(t) {
            return (
              t.m ||
                ((t.w = t.c ? Or(t.c, pu(t.b)) : null),
                (t.m = new Ja(t.f, x(t.h), t.w))),
              t.m
            );
          }

          function mu(t, e, n, r, i, o, a, s, u, c, h) {
            return (
              ((t = new fu(t, e, n, r, i)).l = o),
              (t.g = a),
              (t.i = s),
              (t.b = vt(u || null)),
              (t.f = c),
              t.ub(h).toString()
            );
          }

          function _u(t) {
            if (
              ((this.a =
                t ||
                (r.a.INTERNAL.reactNative &&
                  r.a.INTERNAL.reactNative.AsyncStorage)),
              !this.a)
            )
              throw new T(
                'internal-error',
                'The React Native compatibility library was not found.'
              );
            this.type = 'asyncStorage';
          }

          function bu(t) {
            (this.b = t), (this.a = {}), (this.f = E(this.c, this));
          }
          (lu.prototype.toString = function () {
            return (
              this.f ? jn(this.a, 'v', this.f) : Zn(this.a.a, 'v'),
              this.b ? jn(this.a, 'eid', this.b) : Zn(this.a.a, 'eid'),
              this.c.length
                ? jn(this.a, 'fw', this.c.join(','))
                : Zn(this.a.a, 'fw'),
              this.a.toString()
            );
          }),
            (fu.prototype.ub = function (t) {
              return (this.h = t), this;
            }),
            (fu.prototype.toString = function () {
              var t = Wn(this.s, '/__/auth/handler');
              if (
                (jn(t, 'apiKey', this.m),
                jn(t, 'appName', this.c),
                jn(t, 'authType', this.u),
                this.a.isOAuthProvider)
              ) {
                var e = this.a;
                try {
                  var n = r.a.app(this.c).auth().ja();
                } catch (u) {
                  n = null;
                }
                for (var i in ((e.kb = n),
                jn(t, 'providerId', this.a.providerId),
                (n = jr((e = this.a).Fb))))
                  n[i] = n[i].toString();
                (i = e.Oc), (n = vt(n));
                for (var o = 0; o < i.length; o++) {
                  var a = i[o];
                  a in n && delete n[a];
                }
                e.lb && e.kb && !n[e.lb] && (n[e.lb] = e.kb),
                  dt(n) || jn(t, 'customParameters', Fr(n));
              }
              if (
                ('function' === typeof this.a.Nb &&
                  (e = this.a.Nb()).length &&
                  jn(t, 'scopes', e.join(',')),
                this.l ? jn(t, 'redirectUrl', this.l) : Zn(t.a, 'redirectUrl'),
                this.g ? jn(t, 'eventId', this.g) : Zn(t.a, 'eventId'),
                this.i ? jn(t, 'v', this.i) : Zn(t.a, 'v'),
                this.b)
              )
                for (var s in this.b)
                  this.b.hasOwnProperty(s) && !Un(t, s) && jn(t, s, this.b[s]);
              return (
                this.h ? jn(t, 'tid', this.h) : Zn(t.a, 'tid'),
                this.f ? jn(t, 'eid', this.f) : Zn(t.a, 'eid'),
                (s = pu(this.c)).length && jn(t, 'fw', s.join(',')),
                t.toString()
              );
            }),
            ((e = du.prototype).Lb = function (t, e, n) {
              var r = new T('popup-closed-by-user'),
                i = new T('web-storage-unsupported'),
                o = this,
                a = !1;
              return this.ka()
                .then(function () {
                  (function (t) {
                    var e = {
                      type: 'webStorageSupport',
                    };
                    return yu(t)
                      .then(function () {
                        return (function (t, e) {
                          return t.nb.then(function () {
                            return new we(function (n) {
                              t.a.send(
                                e.type,
                                e,
                                n,
                                kr('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                              );
                            });
                          });
                        })(t.i, e);
                      })
                      .then(function (t) {
                        if (
                          t &&
                          t.length &&
                          'undefined' !== typeof t[0].webStorageSupport
                        )
                          return t[0].webStorageSupport;
                        throw Error();
                      });
                  })(o).then(function (n) {
                    n || (t && vr(t), e(i), (a = !0));
                  });
                })
                .o(function () {})
                .then(function () {
                  if (!a)
                    return (function (t) {
                      return new we(function (e) {
                        return (function n() {
                          Nn(2e3).then(function () {
                            if (t && !t.closed) return n();
                            e();
                          });
                        })();
                      });
                    })(t);
                })
                .then(function () {
                  if (!a)
                    return Nn(n).then(function () {
                      e(r);
                    });
                });
            }),
            (e.Ub = function () {
              var t = Pr();
              return !Mr(t) && !Wr(t);
            }),
            (e.Qb = function () {
              return !1;
            }),
            (e.Jb = function (t, e, n, r, i, o, a, s) {
              if (!t) return Oe(new T('popup-blocked'));
              if (a && !Mr())
                return (
                  this.ka().o(function (e) {
                    vr(t), i(e);
                  }),
                  r(),
                  Ae()
                );
              this.a || (this.a = vu(gu(this)));
              var u = this;
              return this.a
                .then(function () {
                  var e = u.ka().o(function (e) {
                    throw (vr(t), i(e), e);
                  });
                  return r(), e;
                })
                .then(function () {
                  (Wo(n), a) ||
                    fr(
                      mu(u.u, u.f, u.b, e, n, null, o, u.c, void 0, u.h, s),
                      t
                    );
                })
                .o(function (t) {
                  throw (
                    ('auth/network-request-failed' == t.code && (u.a = null), t)
                  );
                });
            }),
            (e.Kb = function (t, e, n, r) {
              this.a || (this.a = vu(gu(this)));
              var i = this;
              return this.a
                .then(function () {
                  Wo(e),
                    fr(mu(i.u, i.f, i.b, t, e, lr(), n, i.c, void 0, i.h, r));
                })
                .o(function (t) {
                  throw (
                    ('auth/network-request-failed' == t.code && (i.a = null), t)
                  );
                });
            }),
            (e.ka = function () {
              var t = this;
              return yu(this)
                .then(function () {
                  return t.i.nb;
                })
                .o(function () {
                  throw ((t.a = null), new T('network-request-failed'));
                });
            }),
            (e.Xb = function () {
              return !0;
            }),
            (e.Ca = function (t) {
              this.g.push(t);
            }),
            (e.Qa = function (t) {
              X(this.g, function (e) {
                return e == t;
              });
            }),
            ((e = _u.prototype).get = function (t) {
              return Ae(this.a.getItem(t)).then(function (t) {
                return t && Ur(t);
              });
            }),
            (e.set = function (t, e) {
              return Ae(this.a.setItem(t, Fr(e)));
            }),
            (e.T = function (t) {
              return Ae(this.a.removeItem(t));
            }),
            (e.ba = function () {}),
            (e.ha = function () {});
          var wu,
            Eu = [];

          function Cu(t, e, n) {
            dt(t.a) && t.b.addEventListener('message', t.f),
              'undefined' === typeof t.a[e] && (t.a[e] = []),
              t.a[e].push(n);
          }

          function Su(t) {
            this.a = t;
          }

          function Iu(t) {
            (this.c = t), (this.b = !1), (this.a = []);
          }

          function Tu(t, e, n, r) {
            var i,
              o,
              a,
              s,
              u = n || {},
              c = null;
            if (t.b) return Oe(Error('connection_unavailable'));
            var h = r ? 800 : 50,
              l =
                'undefined' !== typeof MessageChannel
                  ? new MessageChannel()
                  : null;
            return new we(function (n, r) {
              l
                ? ((i = Math.floor(
                    Math.random() * Math.pow(10, 20)
                  ).toString()),
                  l.port1.start(),
                  (a = setTimeout(function () {
                    r(Error('unsupported_event'));
                  }, h)),
                  (c = {
                    messageChannel: l,
                    onMessage: (o = function (t) {
                      t.data.eventId === i &&
                        ('ack' === t.data.status
                          ? (clearTimeout(a),
                            (s = setTimeout(function () {
                              r(Error('timeout'));
                            }, 3e3)))
                          : 'done' === t.data.status
                          ? (clearTimeout(s),
                            'undefined' !== typeof t.data.response
                              ? n(t.data.response)
                              : r(Error('unknown_error')))
                          : (clearTimeout(a),
                            clearTimeout(s),
                            r(Error('invalid_response'))));
                    }),
                  }),
                  t.a.push(c),
                  l.port1.addEventListener('message', o),
                  t.c.postMessage(
                    {
                      eventType: e,
                      eventId: i,
                      data: u,
                    },
                    [l.port2]
                  ))
                : r(Error('connection_unavailable'));
            })
              .then(function (e) {
                return Nu(t, c), e;
              })
              .o(function (e) {
                throw (Nu(t, c), e);
              });
          }

          function Nu(t, e) {
            if (e) {
              var n = e.messageChannel,
                r = e.onMessage;
              n && (n.port1.removeEventListener('message', r), n.port1.close()),
                X(t.a, function (t) {
                  return t == e;
                });
            }
          }

          function Au() {
            if (!ku()) throw new T('web-storage-unsupported');
            (this.c = {}),
              (this.a = []),
              (this.b = 0),
              (this.u = c.indexedDB),
              (this.type = 'indexedDB'),
              (this.g = this.l = this.f = this.i = null),
              (this.s = !1),
              (this.h = null);
            var t = this;
            Er() && self
              ? ((this.l = (function () {
                  var t = Er() ? self : null;
                  if (
                    (H(Eu, function (n) {
                      n.b == t && (e = n);
                    }),
                    !e)
                  ) {
                    var e = new bu(t);
                    Eu.push(e);
                  }
                  return e;
                })()),
                Cu(this.l, 'keyChanged', function (e, n) {
                  return Mu(t).then(function (e) {
                    return (
                      0 < e.length &&
                        H(t.a, function (t) {
                          t(e);
                        }),
                      {
                        keyProcessed: z(e, n.key),
                      }
                    );
                  });
                }),
                Cu(this.l, 'ping', function () {
                  return Ae(['keyChanged']);
                }))
              : (function () {
                  var t = c.navigator;
                  return t && t.serviceWorker
                    ? Ae()
                        .then(function () {
                          return t.serviceWorker.ready;
                        })
                        .then(function (t) {
                          return t.active || null;
                        })
                        .o(function () {
                          return null;
                        })
                    : Ae(null);
                })().then(function (e) {
                  (t.h = e) &&
                    ((t.g = new Iu(new Su(e))),
                    Tu(t.g, 'ping', null, !0)
                      .then(function (e) {
                        e[0].fulfilled &&
                          z(e[0].value, 'keyChanged') &&
                          (t.s = !0);
                      })
                      .o(function () {}));
                });
          }

          function Ou(t) {
            return new we(function (e, n) {
              var r = t.u.open('firebaseLocalStorageDb', 1);
              (r.onerror = function (t) {
                try {
                  t.preventDefault();
                } catch (e) {}
                n(Error(t.target.error));
              }),
                (r.onupgradeneeded = function (t) {
                  t = t.target.result;
                  try {
                    t.createObjectStore('firebaseLocalStorage', {
                      keyPath: 'fbase_key',
                    });
                  } catch (e) {
                    n(e);
                  }
                }),
                (r.onsuccess = function (r) {
                  (r = r.target.result).objectStoreNames.contains(
                    'firebaseLocalStorage'
                  )
                    ? e(r)
                    : (function (t) {
                        return new we(function (e, n) {
                          var r = t.u.deleteDatabase('firebaseLocalStorageDb');
                          (r.onsuccess = function () {
                            e();
                          }),
                            (r.onerror = function (t) {
                              n(Error(t.target.error));
                            });
                        });
                      })(t)
                        .then(function () {
                          return Ou(t);
                        })
                        .then(function (t) {
                          e(t);
                        })
                        .o(function (t) {
                          n(t);
                        });
                });
            });
          }

          function Pu(t) {
            return t.m || (t.m = Ou(t)), t.m;
          }

          function ku() {
            try {
              return !!c.indexedDB;
            } catch (Kt) {
              return !1;
            }
          }

          function xu(t) {
            return t.objectStore('firebaseLocalStorage');
          }

          function Ru(t, e) {
            return t.transaction(
              ['firebaseLocalStorage'],
              e ? 'readwrite' : 'readonly'
            );
          }

          function Du(t) {
            return new we(function (e, n) {
              (t.onsuccess = function (t) {
                t && t.target ? e(t.target.result) : e();
              }),
                (t.onerror = function (t) {
                  n(t.target.error);
                });
            });
          }

          function Lu(t, e) {
            return t.g &&
              t.h &&
              (function () {
                var t = c.navigator;
                return (
                  (t && t.serviceWorker && t.serviceWorker.controller) || null
                );
              })() === t.h
              ? Tu(
                  t.g,
                  'keyChanged',
                  {
                    key: e,
                  },
                  t.s
                )
                  .then(function () {})
                  .o(function () {})
              : Ae();
          }

          function Mu(t) {
            return Pu(t)
              .then(function (t) {
                var e = xu(Ru(t, !1));
                return e.getAll
                  ? Du(e.getAll())
                  : new we(function (t, n) {
                      var r = [],
                        i = e.openCursor();
                      (i.onsuccess = function (e) {
                        (e = e.target.result)
                          ? (r.push(e.value), e.continue())
                          : t(r);
                      }),
                        (i.onerror = function (t) {
                          n(t.target.error);
                        });
                    });
              })
              .then(function (e) {
                var n = {},
                  r = [];
                if (0 == t.b) {
                  for (r = 0; r < e.length; r++) n[e[r].fbase_key] = e[r].value;
                  (r = pr(t.c, n)), (t.c = n);
                }
                return r;
              });
          }

          function Fu(t) {
            t.i && t.i.cancel('STOP_EVENT'),
              t.f && (clearTimeout(t.f), (t.f = null));
          }

          function ju(t) {
            var e = this,
              n = null;
            (this.a = []),
              (this.type = 'indexedDB'),
              (this.c = t),
              (this.b = Ae()
                .then(function () {
                  if (ku()) {
                    var t = Vr(),
                      r = '__sak' + t;
                    return (
                      wu || (wu = new Au()),
                      (n = wu)
                        .set(r, t)
                        .then(function () {
                          return n.get(r);
                        })
                        .then(function (e) {
                          if (e !== t) throw Error('indexedDB not supported!');
                          return n.T(r);
                        })
                        .then(function () {
                          return n;
                        })
                        .o(function () {
                          return e.c;
                        })
                    );
                  }
                  return e.c;
                })
                .then(function (t) {
                  return (
                    (e.type = t.type),
                    t.ba(function (t) {
                      H(e.a, function (e) {
                        e(t);
                      });
                    }),
                    t
                  );
                }));
          }

          function Uu() {
            (this.a = {}), (this.type = 'inMemory');
          }

          function Vu() {
            if (
              !(function () {
                var t = 'Node' == Cr();
                if (
                  !(t =
                    Wu() ||
                    (t && r.a.INTERNAL.node && r.a.INTERNAL.node.localStorage))
                )
                  return !1;
                try {
                  return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
                } catch (e) {
                  return !1;
                }
              })()
            ) {
              if ('Node' == Cr())
                throw new T(
                  'internal-error',
                  'The LocalStorage compatibility library was not found.'
                );
              throw new T('web-storage-unsupported');
            }
            (this.a = Wu() || r.a.INTERNAL.node.localStorage),
              (this.type = 'localStorage');
          }

          function Wu() {
            try {
              var t = c.localStorage,
                e = Vr();
              return t && (t.setItem(e, '1'), t.removeItem(e)), t;
            } catch (n) {
              return null;
            }
          }

          function qu() {
            this.type = 'nullStorage';
          }

          function Bu() {
            if (
              !(function () {
                var t = 'Node' == Cr();
                if (
                  !(t =
                    Hu() ||
                    (t &&
                      r.a.INTERNAL.node &&
                      r.a.INTERNAL.node.sessionStorage))
                )
                  return !1;
                try {
                  return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
                } catch (e) {
                  return !1;
                }
              })()
            ) {
              if ('Node' == Cr())
                throw new T(
                  'internal-error',
                  'The SessionStorage compatibility library was not found.'
                );
              throw new T('web-storage-unsupported');
            }
            (this.a = Hu() || r.a.INTERNAL.node.sessionStorage),
              (this.type = 'sessionStorage');
          }

          function Hu() {
            try {
              var t = c.sessionStorage,
                e = Vr();
              return t && (t.setItem(e, '1'), t.removeItem(e)), t;
            } catch (n) {
              return null;
            }
          }

          function Qu() {
            var t = {};
            (t.Browser = zu),
              (t.Node = Yu),
              (t.ReactNative = Xu),
              (t.Worker = $u),
              (this.a = t[Cr()]);
          }
          (bu.prototype.c = function (t) {
            var e = t.data.eventType,
              n = t.data.eventId,
              r = this.a[e];
            if (r && 0 < r.length) {
              t.ports[0].postMessage({
                status: 'ack',
                eventId: n,
                eventType: e,
                response: null,
              });
              var i = [];
              H(r, function (e) {
                i.push(
                  Ae().then(function () {
                    return e(t.origin, t.data.data);
                  })
                );
              }),
                ke(i).then(function (r) {
                  var i = [];
                  H(r, function (t) {
                    i.push({
                      fulfilled: t.Mb,
                      value: t.value,
                      reason: t.reason ? t.reason.message : void 0,
                    });
                  }),
                    H(i, function (t) {
                      for (var e in t)
                        'undefined' === typeof t[e] && delete t[e];
                    }),
                    t.ports[0].postMessage({
                      status: 'done',
                      eventId: n,
                      eventType: e,
                      response: i,
                    });
                });
            }
          }),
            (Su.prototype.postMessage = function (t, e) {
              this.a.postMessage(t, e);
            }),
            (Iu.prototype.close = function () {
              for (; 0 < this.a.length; ) Nu(this, this.a[0]);
              this.b = !0;
            }),
            ((e = Au.prototype).set = function (t, e) {
              var n,
                r = !1,
                i = this;
              return Pu(this)
                .then(function (e) {
                  return Du((e = xu(Ru((n = e), !0))).get(t));
                })
                .then(function (o) {
                  var a = xu(Ru(n, !0));
                  return o
                    ? ((o.value = e), Du(a.put(o)))
                    : (i.b++,
                      (r = !0),
                      ((o = {}).fbase_key = t),
                      (o.value = e),
                      Du(a.add(o)));
                })
                .then(function () {
                  return (i.c[t] = e), Lu(i, t);
                })
                .ma(function () {
                  r && i.b--;
                });
            }),
            (e.get = function (t) {
              return Pu(this)
                .then(function (e) {
                  return Du(xu(Ru(e, !1)).get(t));
                })
                .then(function (t) {
                  return t && t.value;
                });
            }),
            (e.T = function (t) {
              var e = !1,
                n = this;
              return Pu(this)
                .then(function (r) {
                  return (e = !0), n.b++, Du(xu(Ru(r, !0)).delete(t));
                })
                .then(function () {
                  return delete n.c[t], Lu(n, t);
                })
                .ma(function () {
                  e && n.b--;
                });
            }),
            (e.ba = function (t) {
              0 == this.a.length &&
                (function (t) {
                  function e() {
                    t.f = setTimeout(function () {
                      t.i = Mu(t)
                        .then(function (e) {
                          0 < e.length &&
                            H(t.a, function (t) {
                              t(e);
                            });
                        })
                        .then(function () {
                          e();
                        })
                        .o(function (t) {
                          'STOP_EVENT' != t.message && e();
                        });
                    }, 800);
                  }
                  Fu(t), e();
                })(this),
                this.a.push(t);
            }),
            (e.ha = function (t) {
              X(this.a, function (e) {
                return e == t;
              }),
                0 == this.a.length && Fu(this);
            }),
            ((e = ju.prototype).get = function (t) {
              return this.b.then(function (e) {
                return e.get(t);
              });
            }),
            (e.set = function (t, e) {
              return this.b.then(function (n) {
                return n.set(t, e);
              });
            }),
            (e.T = function (t) {
              return this.b.then(function (e) {
                return e.T(t);
              });
            }),
            (e.ba = function (t) {
              this.a.push(t);
            }),
            (e.ha = function (t) {
              X(this.a, function (e) {
                return e == t;
              });
            }),
            ((e = Uu.prototype).get = function (t) {
              return Ae(this.a[t]);
            }),
            (e.set = function (t, e) {
              return (this.a[t] = e), Ae();
            }),
            (e.T = function (t) {
              return delete this.a[t], Ae();
            }),
            (e.ba = function () {}),
            (e.ha = function () {}),
            ((e = Vu.prototype).get = function (t) {
              var e = this;
              return Ae().then(function () {
                return Ur(e.a.getItem(t));
              });
            }),
            (e.set = function (t, e) {
              var n = this;
              return Ae().then(function () {
                var r = Fr(e);
                null === r ? n.T(t) : n.a.setItem(t, r);
              });
            }),
            (e.T = function (t) {
              var e = this;
              return Ae().then(function () {
                e.a.removeItem(t);
              });
            }),
            (e.ba = function (t) {
              c.window && hn(c.window, 'storage', t);
            }),
            (e.ha = function (t) {
              c.window && pn(c.window, 'storage', t);
            }),
            ((e = qu.prototype).get = function () {
              return Ae(null);
            }),
            (e.set = function () {
              return Ae();
            }),
            (e.T = function () {
              return Ae();
            }),
            (e.ba = function () {}),
            (e.ha = function () {}),
            ((e = Bu.prototype).get = function (t) {
              var e = this;
              return Ae().then(function () {
                return Ur(e.a.getItem(t));
              });
            }),
            (e.set = function (t, e) {
              var n = this;
              return Ae().then(function () {
                var r = Fr(e);
                null === r ? n.T(t) : n.a.setItem(t, r);
              });
            }),
            (e.T = function (t) {
              var e = this;
              return Ae().then(function () {
                e.a.removeItem(t);
              });
            }),
            (e.ba = function () {}),
            (e.ha = function () {});
          var Ku,
            Gu,
            zu = {
              F: Vu,
              $a: Bu,
            },
            Yu = {
              F: Vu,
              $a: Bu,
            },
            Xu = {
              F: _u,
              $a: qu,
            },
            $u = {
              F: Vu,
              $a: qu,
            },
            Ju = {
              od: 'local',
              NONE: 'none',
              qd: 'session',
            };

          function Zu() {
            var t = !(Wr(Pr()) || !wr()),
              e = Mr(),
              n = xr();
            (this.m = t),
              (this.h = e),
              (this.l = n),
              (this.a = {}),
              Ku || (Ku = new Qu()),
              (t = Ku);
            try {
              this.g =
                (!hr() && Kr()) || !c.indexedDB
                  ? new t.a.F()
                  : new ju(Er() ? new Uu() : new t.a.F());
            } catch (r) {
              (this.g = new Uu()), (this.h = !0);
            }
            try {
              this.i = new t.a.$a();
            } catch (r) {
              this.i = new Uu();
            }
            (this.u = new Uu()), (this.f = E(this.Vb, this)), (this.b = {});
          }

          function tc() {
            return Gu || (Gu = new Zu()), Gu;
          }

          function ec(t, e) {
            switch (e) {
              case 'session':
                return t.i;
              case 'none':
                return t.u;
              default:
                return t.g;
            }
          }

          function nc(t, e) {
            return 'firebase:' + t.name + (e ? ':' + e : '');
          }

          function rc(t, e, n) {
            return (
              (n = nc(e, n)), 'local' == e.F && (t.b[n] = null), ec(t, e.F).T(n)
            );
          }

          function ic(t) {
            t.c && (clearInterval(t.c), (t.c = null));
          }

          function oc(t) {
            (this.a = t), (this.b = tc());
          }
          ((e = Zu.prototype).get = function (t, e) {
            return ec(this, t.F).get(nc(t, e));
          }),
            (e.set = function (t, e, n) {
              var r = nc(t, n),
                i = this,
                o = ec(this, t.F);
              return o
                .set(r, e)
                .then(function () {
                  return o.get(r);
                })
                .then(function (e) {
                  'local' == t.F && (i.b[r] = e);
                });
            }),
            (e.addListener = function (t, e, n) {
              (t = nc(t, e)),
                this.l && (this.b[t] = c.localStorage.getItem(t)),
                dt(this.a) &&
                  (ec(this, 'local').ba(this.f),
                  this.h ||
                    ((hr() || !Kr()) && c.indexedDB) ||
                    !this.l ||
                    (function (t) {
                      ic(t),
                        (t.c = setInterval(function () {
                          for (var e in t.a) {
                            var n = c.localStorage.getItem(e),
                              r = t.b[e];
                            n != r &&
                              ((t.b[e] = n),
                              (n = new Je({
                                type: 'storage',
                                key: e,
                                target: window,
                                oldValue: r,
                                newValue: n,
                                a: !0,
                              })),
                              t.Vb(n));
                          }
                        }, 1e3));
                    })(this)),
                this.a[t] || (this.a[t] = []),
                this.a[t].push(n);
            }),
            (e.removeListener = function (t, e, n) {
              (t = nc(t, e)),
                this.a[t] &&
                  (X(this.a[t], function (t) {
                    return t == n;
                  }),
                  0 == this.a[t].length && delete this.a[t]),
                dt(this.a) && (ec(this, 'local').ha(this.f), ic(this));
            }),
            (e.Vb = function (t) {
              if (t && t.f) {
                var e = t.a.key;
                if (null == e)
                  for (var n in this.a) {
                    var r = this.b[n];
                    'undefined' === typeof r && (r = null);
                    var i = c.localStorage.getItem(n);
                    i !== r && ((this.b[n] = i), this.ib(n));
                  }
                else if (0 == e.indexOf('firebase:') && this.a[e]) {
                  if (
                    ('undefined' !== typeof t.a.a
                      ? ec(this, 'local').ha(this.f)
                      : ic(this),
                    this.m)
                  )
                    if (
                      ((n = c.localStorage.getItem(e)),
                      (r = t.a.newValue) !== n)
                    )
                      null !== r
                        ? c.localStorage.setItem(e, r)
                        : c.localStorage.removeItem(e);
                    else if (this.b[e] === r && 'undefined' === typeof t.a.a)
                      return;
                  var o = this;
                  (n = function () {
                    ('undefined' === typeof t.a.a &&
                      o.b[e] === c.localStorage.getItem(e)) ||
                      ((o.b[e] = c.localStorage.getItem(e)), o.ib(e));
                  }),
                    zt &&
                    re &&
                    10 == re &&
                    c.localStorage.getItem(e) !== t.a.newValue &&
                    t.a.newValue !== t.a.oldValue
                      ? setTimeout(n, 10)
                      : n();
                }
              } else H(t, E(this.ib, this));
            }),
            (e.ib = function (t) {
              this.a[t] &&
                H(this.a[t], function (t) {
                  t();
                });
            });
          var ac,
            sc = {
              name: 'authEvent',
              F: 'local',
            };

          function uc() {
            this.a = tc();
          }

          function cc(t, e) {
            (this.b = hc),
              (this.f = c.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
              (this.g = this.c = 0),
              (this.a = []),
              (this.i = t),
              (this.h = e),
              (this.l = c.Int32Array ? new Int32Array(64) : Array(64)),
              void 0 === ac && (ac = c.Int32Array ? new Int32Array(gc) : gc),
              this.reset();
          }
          I(cc, function () {
            this.b = -1;
          });
          for (var hc = 64, lc = hc - 1, fc = [], pc = 0; pc < lc; pc++)
            fc[pc] = 0;
          var dc = $(128, fc);

          function vc(t) {
            for (var e = t.f, n = t.l, r = 0, i = 0; i < e.length; )
              (n[r++] =
                (e[i] << 24) | (e[i + 1] << 16) | (e[i + 2] << 8) | e[i + 3]),
                (i = 4 * r);
            for (e = 16; 64 > e; e++) {
              (i = 0 | n[e - 15]), (r = 0 | n[e - 2]);
              var o =
                  ((0 | n[e - 16]) +
                    (((i >>> 7) | (i << 25)) ^
                      ((i >>> 18) | (i << 14)) ^
                      (i >>> 3))) |
                  0,
                a =
                  ((0 | n[e - 7]) +
                    (((r >>> 17) | (r << 15)) ^
                      ((r >>> 19) | (r << 13)) ^
                      (r >>> 10))) |
                  0;
              n[e] = (o + a) | 0;
            }
            (r = 0 | t.a[0]), (i = 0 | t.a[1]);
            var s = 0 | t.a[2],
              u = 0 | t.a[3],
              c = 0 | t.a[4],
              h = 0 | t.a[5],
              l = 0 | t.a[6];
            for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
              var f =
                ((((r >>> 2) | (r << 30)) ^
                  ((r >>> 13) | (r << 19)) ^
                  ((r >>> 22) | (r << 10))) +
                  ((r & i) ^ (r & s) ^ (i & s))) |
                0;
              (a =
                ((o =
                  (o +
                    (((c >>> 6) | (c << 26)) ^
                      ((c >>> 11) | (c << 21)) ^
                      ((c >>> 25) | (c << 7)))) |
                  0) +
                  (((a = ((a = (c & h) ^ (~c & l)) + (0 | ac[e])) | 0) +
                    (0 | n[e])) |
                    0)) |
                0),
                (o = l),
                (l = h),
                (h = c),
                (c = (u + a) | 0),
                (u = s),
                (s = i),
                (i = r),
                (r = (a + f) | 0);
            }
            (t.a[0] = (t.a[0] + r) | 0),
              (t.a[1] = (t.a[1] + i) | 0),
              (t.a[2] = (t.a[2] + s) | 0),
              (t.a[3] = (t.a[3] + u) | 0),
              (t.a[4] = (t.a[4] + c) | 0),
              (t.a[5] = (t.a[5] + h) | 0),
              (t.a[6] = (t.a[6] + l) | 0),
              (t.a[7] = (t.a[7] + o) | 0);
          }

          function yc(t, e, n) {
            void 0 === n && (n = e.length);
            var r = 0,
              i = t.c;
            if ('string' === typeof e)
              for (; r < n; )
                (t.f[i++] = e.charCodeAt(r++)), i == t.b && (vc(t), (i = 0));
            else {
              if (!d(e)) throw Error('message must be string or array');
              for (; r < n; ) {
                var o = e[r++];
                if (
                  !('number' == typeof o && 0 <= o && 255 >= o && o == (0 | o))
                )
                  throw Error('message must be a byte array');
                (t.f[i++] = o), i == t.b && (vc(t), (i = 0));
              }
            }
            (t.c = i), (t.g += n);
          }
          cc.prototype.reset = function () {
            (this.g = this.c = 0),
              (this.a = c.Int32Array ? new Int32Array(this.h) : J(this.h));
          };
          var gc = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ];

          function mc() {
            cc.call(this, 8, _c);
          }
          I(mc, cc);
          var _c = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ];

          function bc(t, e, n, r, i) {
            (this.u = t),
              (this.i = e),
              (this.l = n),
              (this.m = r || null),
              (this.s = i || null),
              (this.h = e + ':' + n),
              (this.w = new uc()),
              (this.g = new oc(this.h)),
              (this.f = null),
              (this.b = []),
              (this.a = this.c = null);
          }

          function wc(t) {
            return new T('invalid-cordova-configuration', t);
          }

          function Ec(t) {
            var e = new mc();
            yc(e, t), (t = []);
            var n = 8 * e.g;
            56 > e.c ? yc(e, dc, 56 - e.c) : yc(e, dc, e.b - (e.c - 56));
            for (var r = 63; 56 <= r; r--) (e.f[r] = 255 & n), (n /= 256);
            for (vc(e), r = n = 0; r < e.i; r++)
              for (var i = 24; 0 <= i; i -= 8) t[n++] = (e.a[r] >> i) & 255;
            return (function (t) {
              return K(t, function (t) {
                return 1 < (t = t.toString(16)).length ? t : '0' + t;
              }).join('');
            })(t);
          }

          function Cc(t, e) {
            for (var n = 0; n < t.b.length; n++)
              try {
                t.b[n](e);
              } catch (r) {}
          }

          function Sc(t) {
            return (
              t.f ||
                (t.f = t.ka().then(function () {
                  return new we(function (e) {
                    t.Ca(function n(r) {
                      return e(r), t.Qa(n), !1;
                    }),
                      (function (t) {
                        function e(e) {
                          (r = !0),
                            o && o.cancel(),
                            Ic(t).then(function (r) {
                              var o = n;
                              if (r && e && e.url) {
                                var a = null;
                                -1 !=
                                  (o = ao(e.url)).indexOf(
                                    '/__/auth/callback'
                                  ) &&
                                  (a = (a =
                                    'object' ===
                                    i(
                                      (a = Ur(
                                        Un((a = Vn(o)), 'firebaseError') || null
                                      ))
                                    )
                                      ? N(a)
                                      : null)
                                    ? new qo(
                                        r.c,
                                        r.b,
                                        null,
                                        null,
                                        a,
                                        null,
                                        r.S()
                                      )
                                    : new qo(
                                        r.c,
                                        r.b,
                                        o,
                                        r.f,
                                        null,
                                        null,
                                        r.S()
                                      )),
                                  (o = a || n);
                              }
                              Cc(t, o);
                            });
                        }
                        var n = new qo(
                            'unknown',
                            null,
                            null,
                            null,
                            new T('no-auth-event')
                          ),
                          r = !1,
                          o = Nn(500).then(function () {
                            return Ic(t).then(function () {
                              r || Cc(t, n);
                            });
                          }),
                          a = c.handleOpenURL;
                        (c.handleOpenURL = function (t) {
                          if (
                            (0 ==
                              t
                                .toLowerCase()
                                .indexOf(
                                  kr('BuildInfo.packageName', c).toLowerCase() +
                                    '://'
                                ) &&
                              e({
                                url: t,
                              }),
                            'function' === typeof a)
                          )
                            try {
                              a(t);
                            } catch (n) {
                              console.error(n);
                            }
                        }),
                          Ko || (Ko = new Ho()),
                          (function (t) {
                            var e = Ko;
                            e.a.push(t),
                              e.b ||
                                ((e.b = function (t) {
                                  for (var n = 0; n < e.a.length; n++)
                                    e.a[n](t);
                                }),
                                'function' ===
                                  typeof (t = kr(
                                    'universalLinks.subscribe',
                                    c
                                  )) && t(null, e.b));
                          })(e);
                      })(t);
                  });
                })),
              t.f
            );
          }

          function Ic(t) {
            var e = null;
            return (function (t) {
              return t.b.get(sc, t.a).then(function (t) {
                return Bo(t);
              });
            })(t.g)
              .then(function (n) {
                return (e = n), rc((n = t.g).b, sc, n.a);
              })
              .then(function () {
                return e;
              });
          }

          function Tc(t) {
            (this.a = t), (this.b = tc());
          }
          ((e = bc.prototype).ka = function () {
            return this.Ga
              ? this.Ga
              : (this.Ga = (
                  br(void 0)
                    ? _r().then(function () {
                        return new we(function (t, e) {
                          var n = c.document,
                            r = setTimeout(function () {
                              e(Error('Cordova framework is not ready.'));
                            }, 1e3);
                          n.addEventListener(
                            'deviceready',
                            function () {
                              clearTimeout(r), t();
                            },
                            !1
                          );
                        });
                      })
                    : Oe(
                        Error(
                          'Cordova must run in an Android or iOS file scheme.'
                        )
                      )
                ).then(
                  function () {
                    if ('function' !== typeof kr('universalLinks.subscribe', c))
                      throw wc(
                        'cordova-universal-links-plugin-fix is not installed'
                      );
                    if ('undefined' === typeof kr('BuildInfo.packageName', c))
                      throw wc('cordova-plugin-buildinfo is not installed');
                    if (
                      'function' !==
                      typeof kr('cordova.plugins.browsertab.openUrl', c)
                    )
                      throw wc('cordova-plugin-browsertab is not installed');
                    if (
                      'function' !== typeof kr('cordova.InAppBrowser.open', c)
                    )
                      throw wc('cordova-plugin-inappbrowser is not installed');
                  },
                  function () {
                    throw new T('cordova-not-ready');
                  }
                ));
          }),
            (e.Lb = function (t, e) {
              return (
                e(new T('operation-not-supported-in-this-environment')), Ae()
              );
            }),
            (e.Jb = function () {
              return Oe(new T('operation-not-supported-in-this-environment'));
            }),
            (e.Xb = function () {
              return !1;
            }),
            (e.Ub = function () {
              return !0;
            }),
            (e.Qb = function () {
              return !0;
            }),
            (e.Kb = function (t, e, n, r) {
              if (this.c) return Oe(new T('redirect-operation-pending'));
              var i = this,
                o = c.document,
                a = null,
                s = null,
                u = null,
                h = null;
              return (this.c = Ae()
                .then(function () {
                  return Wo(e), Sc(i);
                })
                .then(function () {
                  return (function (t, e, n, r, i) {
                    var o = (function () {
                        for (var t = 20, e = []; 0 < t; )
                          e.push(
                            '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                              Math.floor(62 * Math.random())
                            )
                          ),
                            t--;
                        return e.join('');
                      })(),
                      a = new qo(
                        e,
                        r,
                        null,
                        o,
                        new T('no-auth-event'),
                        null,
                        i
                      ),
                      s = kr('BuildInfo.packageName', c);
                    if ('string' !== typeof s)
                      throw new T('invalid-cordova-configuration');
                    var u = kr('BuildInfo.displayName', c),
                      h = {};
                    if (
                      Pr()
                        .toLowerCase()
                        .match(/iphone|ipad|ipod/)
                    )
                      h.ibi = s;
                    else {
                      if (
                        !Pr()
                          .toLowerCase()
                          .match(/android/)
                      )
                        return Oe(
                          new T('operation-not-supported-in-this-environment')
                        );
                      h.apn = s;
                    }
                    u && (h.appDisplayName = u), (o = Ec(o)), (h.sessionId = o);
                    var l = mu(t.u, t.i, t.l, e, n, null, r, t.m, h, t.s, i);
                    return t
                      .ka()
                      .then(function () {
                        var e = t.h;
                        return t.w.a.set(sc, a.v(), e);
                      })
                      .then(function () {
                        var e = kr('cordova.plugins.browsertab.isAvailable', c);
                        if ('function' !== typeof e)
                          throw new T('invalid-cordova-configuration');
                        var n = null;
                        e(function (e) {
                          if (e) {
                            if (
                              'function' !==
                              typeof (n = kr(
                                'cordova.plugins.browsertab.openUrl',
                                c
                              ))
                            )
                              throw new T('invalid-cordova-configuration');
                            n(l);
                          } else {
                            if (
                              'function' !==
                              typeof (n = kr('cordova.InAppBrowser.open', c))
                            )
                              throw new T('invalid-cordova-configuration');
                            (e = Pr()),
                              (t.a = n(
                                l,
                                e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                  e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                  ? '_blank'
                                  : '_system',
                                'location=yes'
                              ));
                          }
                        });
                      });
                  })(i, t, e, n, r);
                })
                .then(function () {
                  return new we(function (t, e) {
                    (s = function () {
                      var e = kr('cordova.plugins.browsertab.close', c);
                      return (
                        t(),
                        'function' === typeof e && e(),
                        i.a &&
                          'function' === typeof i.a.close &&
                          (i.a.close(), (i.a = null)),
                        !1
                      );
                    }),
                      i.Ca(s),
                      (u = function () {
                        a ||
                          (a = Nn(2e3).then(function () {
                            e(new T('redirect-cancelled-by-user'));
                          }));
                      }),
                      (h = function () {
                        Hr() && u();
                      }),
                      o.addEventListener('resume', u, !1),
                      Pr()
                        .toLowerCase()
                        .match(/android/) ||
                        o.addEventListener('visibilitychange', h, !1);
                  }).o(function (t) {
                    return Ic(i).then(function () {
                      throw t;
                    });
                  });
                })
                .ma(function () {
                  u && o.removeEventListener('resume', u, !1),
                    h && o.removeEventListener('visibilitychange', h, !1),
                    a && a.cancel(),
                    s && i.Qa(s),
                    (i.c = null);
                }));
            }),
            (e.Ca = function (t) {
              this.b.push(t),
                Sc(this).o(function (e) {
                  'auth/invalid-cordova-configuration' === e.code &&
                    ((e = new qo(
                      'unknown',
                      null,
                      null,
                      null,
                      new T('no-auth-event')
                    )),
                    t(e));
                });
            }),
            (e.Qa = function (t) {
              X(this.b, function (e) {
                return e == t;
              });
            });
          var Nc = {
            name: 'pendingRedirect',
            F: 'session',
          };

          function Ac(t) {
            return rc(t.b, Nc, t.a);
          }

          function Oc(t, e, n) {
            (this.i = {}),
              (this.w = 0),
              (this.D = t),
              (this.u = e),
              (this.m = n),
              (this.h = []),
              (this.f = !1),
              (this.l = E(this.s, this)),
              (this.b = new Bc()),
              (this.B = new zc()),
              (this.g = new Tc(this.u + ':' + this.m)),
              (this.c = {}),
              (this.c.unknown = this.b),
              (this.c.signInViaRedirect = this.b),
              (this.c.linkViaRedirect = this.b),
              (this.c.reauthViaRedirect = this.b),
              (this.c.signInViaPopup = this.B),
              (this.c.linkViaPopup = this.B),
              (this.c.reauthViaPopup = this.B),
              (this.a = Pc(this.D, this.u, this.m, A));
          }

          function Pc(t, e, n, i) {
            var o = r.a.SDK_VERSION || null;
            return br() ? new bc(t, e, n, o, i) : new du(t, e, n, o, i);
          }

          function kc(t) {
            t.f || ((t.f = !0), t.a.Ca(t.l));
            var e = t.a;
            return t.a.ka().o(function (n) {
              throw (t.a == e && t.reset(), n);
            });
          }

          function xc(t) {
            t.a.Ub() &&
              kc(t).o(function (e) {
                var n = new qo(
                  'unknown',
                  null,
                  null,
                  null,
                  new T('operation-not-supported-in-this-environment')
                );
                jc(e) && t.s(n);
              }),
              t.a.Qb() || Hc(t.b);
          }

          function Rc(t, e) {
            z(t.h, e) || t.h.push(e),
              t.f ||
                (function (t) {
                  return t.b.get(Nc, t.a).then(function (t) {
                    return 'pending' == t;
                  });
                })(t.g)
                  .then(function (e) {
                    e
                      ? Ac(t.g).then(function () {
                          kc(t).o(function (e) {
                            var n = new qo(
                              'unknown',
                              null,
                              null,
                              null,
                              new T(
                                'operation-not-supported-in-this-environment'
                              )
                            );
                            jc(e) && t.s(n);
                          });
                        })
                      : xc(t);
                  })
                  .o(function () {
                    xc(t);
                  });
          }

          function Dc(t, e) {
            X(t.h, function (t) {
              return t == e;
            });
          }
          (Oc.prototype.reset = function () {
            (this.f = !1),
              this.a.Qa(this.l),
              (this.a = Pc(this.D, this.u, this.m)),
              (this.i = {});
          }),
            (Oc.prototype.s = function (t) {
              if (!t) throw new T('invalid-auth-event');
              if (
                (6e5 <= S() - this.w && ((this.i = {}), (this.w = 0)),
                t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
              )
                return !1;
              for (var e = !1, n = 0; n < this.h.length; n++) {
                var r = this.h[n];
                if (r.Cb(t.c, t.b)) {
                  (e = this.c[t.c]) &&
                    (e.h(t, r),
                    t &&
                      (t.f || t.b) &&
                      ((this.i[t.getUid()] = !0), (this.w = S()))),
                    (e = !0);
                  break;
                }
              }
              return Hc(this.b), e;
            });
          var Lc = new Br(2e3, 1e4),
            Mc = new Br(3e4, 6e4);

          function Fc(t, e, n, r, i, o, a) {
            return t.a.Jb(
              e,
              n,
              r,
              function () {
                t.f || ((t.f = !0), t.a.Ca(t.l));
              },
              function () {
                t.reset();
              },
              i,
              o,
              a
            );
          }

          function jc(t) {
            return !(!t || 'auth/cordova-not-ready' != t.code);
          }

          function Uc(t, e, n, r, i) {
            var o;
            return (function (t) {
              return t.b.set(Nc, 'pending', t.a);
            })(t.g).then(function () {
              return t.a
                .Kb(e, n, r, i)
                .o(function (e) {
                  if (jc(e))
                    throw new T('operation-not-supported-in-this-environment');
                  return (
                    (o = e),
                    Ac(t.g).then(function () {
                      throw o;
                    })
                  );
                })
                .then(function () {
                  return t.a.Xb()
                    ? new we(function () {})
                    : Ac(t.g)
                        .then(function () {
                          return t.pa();
                        })
                        .then(function () {})
                        .o(function () {});
                });
            });
          }

          function Vc(t, e, n, r, i) {
            return t.a.Lb(
              r,
              function (t) {
                e.la(n, null, t, i);
              },
              Lc.get()
            );
          }
          Oc.prototype.pa = function () {
            return this.b.pa();
          };
          var Wc = {};

          function qc(t, e, n) {
            var r = e + ':' + n;
            return Wc[r] || (Wc[r] = new Oc(t, e, n)), Wc[r];
          }

          function Bc() {
            (this.b = null),
              (this.f = []),
              (this.c = []),
              (this.a = null),
              (this.i = this.g = !1);
          }

          function Hc(t) {
            t.g || ((t.g = !0), Gc(t, !1, null, null));
          }

          function Qc(t) {
            t.g && !t.i && Gc(t, !1, null, null);
          }

          function Kc(t, e) {
            if (
              ((t.b = function () {
                return Ae(e);
              }),
              t.f.length)
            )
              for (var n = 0; n < t.f.length; n++) t.f[n](e);
          }

          function Gc(t, e, n, r) {
            e
              ? r
                ? (function (t, e) {
                    if (
                      ((t.b = function () {
                        return Oe(e);
                      }),
                      t.c.length)
                    )
                      for (var n = 0; n < t.c.length; n++) t.c[n](e);
                  })(t, r)
                : Kc(t, n)
              : Kc(t, {
                  user: null,
                }),
              (t.f = []),
              (t.c = []);
          }

          function zc() {}

          function Yc() {
            (this.Bb = !1),
              Object.defineProperty(this, 'appVerificationDisabled', {
                get: function () {
                  return this.Bb;
                },
                set: function (t) {
                  this.Bb = t;
                },
                enumerable: !1,
              });
          }

          function Xc(t, e) {
            (this.a = e), $r(this, 'verificationId', t);
          }

          function $c(t, e, n, r) {
            return new jo(t).cb(e, n).then(function (t) {
              return new Xc(t, r);
            });
          }

          function Jc(t) {
            var e = Ki(t);
            if (!(e && e.exp && e.auth_time && e.iat))
              throw new T(
                'internal-error',
                'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
              );
            Jr(this, {
              token: t,
              expirationTime: Qr(1e3 * e.exp),
              authTime: Qr(1e3 * e.auth_time),
              issuedAtTime: Qr(1e3 * e.iat),
              signInProvider:
                e.firebase && e.firebase.sign_in_provider
                  ? e.firebase.sign_in_provider
                  : null,
              signInSecondFactor:
                e.firebase && e.firebase.sign_in_second_factor
                  ? e.firebase.sign_in_second_factor
                  : null,
              claims: e,
            });
          }

          function Zc(t, e, n) {
            var r = e && e[eh];
            if (!r)
              throw new T(
                'argument-error',
                'Internal assert: Invalid MultiFactorResolver'
              );
            (this.a = t),
              (this.f = vt(e)),
              (this.g = n),
              (this.c = new so(null, r)),
              (this.b = []);
            var i = this;
            H(e[th] || [], function (t) {
              (t = ni(t)) && i.b.push(t);
            }),
              $r(this, 'auth', this.a),
              $r(this, 'session', this.c),
              $r(this, 'hints', this.b);
          }
          (Bc.prototype.reset = function () {
            (this.b = null), this.a && (this.a.cancel(), (this.a = null));
          }),
            (Bc.prototype.h = function (t, e) {
              if (t) {
                this.reset(), (this.g = !0);
                var n = t.c,
                  r = t.b,
                  i = t.a && 'auth/web-storage-unsupported' == t.a.code,
                  o =
                    t.a &&
                    'auth/operation-not-supported-in-this-environment' ==
                      t.a.code;
                (this.i = !(!i && !o)),
                  'unknown' != n || i || o
                    ? t.a
                      ? (Gc(this, !0, null, t.a), Ae())
                      : e.Da(n, r)
                      ? (function (t, e, n) {
                          n = n.Da(e.c, e.b);
                          var r = e.g,
                            i = e.f,
                            o = e.i,
                            a = e.S(),
                            s = !!e.c.match(/Redirect$/);
                          n(r, i, a, o)
                            .then(function (e) {
                              Gc(t, s, e, null);
                            })
                            .o(function (e) {
                              Gc(t, s, null, e);
                            });
                        })(this, t, e)
                      : Oe(new T('invalid-auth-event'))
                    : (Gc(this, !1, null, null), Ae());
              } else Oe(new T('invalid-auth-event'));
            }),
            (Bc.prototype.pa = function () {
              var t = this;
              return new we(function (e, n) {
                t.b
                  ? t.b().then(e, n)
                  : (t.f.push(e),
                    t.c.push(n),
                    (function (t) {
                      var e = new T('timeout');
                      t.a && t.a.cancel(),
                        (t.a = Nn(Mc.get()).then(function () {
                          t.b || ((t.g = !0), Gc(t, !0, null, e));
                        }));
                    })(t));
              });
            }),
            (zc.prototype.h = function (t, e) {
              if (t) {
                var n = t.c,
                  r = t.b;
                t.a
                  ? (e.la(t.c, null, t.a, t.b), Ae())
                  : e.Da(n, r)
                  ? (function (t, e) {
                      var n = t.b,
                        r = t.c;
                      e.Da(r, n)(t.g, t.f, t.S(), t.i)
                        .then(function (t) {
                          e.la(r, t, null, n);
                        })
                        .o(function (t) {
                          e.la(r, null, t, n);
                        });
                    })(t, e)
                  : Oe(new T('invalid-auth-event'));
              } else Oe(new T('invalid-auth-event'));
            }),
            (Xc.prototype.confirm = function (t) {
              return (t = Uo(this.verificationId, t)), this.a(t);
            });
          var th = 'mfaInfo',
            eh = 'mfaPendingCredential';

          function nh(t, e, n, r) {
            T.call(this, 'multi-factor-auth-required', r, e),
              (this.b = new Zc(t, e, n)),
              $r(this, 'resolver', this.b);
          }

          function rh(t, e, n) {
            if (
              t &&
              y(t.serverResponse) &&
              'auth/multi-factor-auth-required' === t.code
            )
              try {
                return new nh(e, t.serverResponse, n, t.message);
              } catch (r) {}
            return null;
          }

          function ih() {}

          function oh(t) {
            $r(this, 'factorId', t.ea), (this.a = t);
          }

          function ah(t) {
            if ((oh.call(this, t), this.a.ea != jo.PROVIDER_ID))
              throw new T(
                'argument-error',
                'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential'
              );
          }

          function sh(t, e) {
            for (var n in ($e.call(this, t), e)) this[n] = e[n];
          }

          function uh(t, e) {
            (this.a = t),
              (this.b = []),
              (this.c = E(this.wc, this)),
              hn(this.a, 'userReloaded', this.c);
            var n = [];
            e &&
              e.multiFactor &&
              e.multiFactor.enrolledFactors &&
              H(e.multiFactor.enrolledFactors, function (t) {
                var e = null,
                  r = {};
                if (t) {
                  t.uid && (r[oi] = t.uid),
                    t.displayName && (r[ri] = t.displayName),
                    t.enrollmentTime &&
                      (r[ii] = new Date(t.enrollmentTime).toISOString()),
                    t.phoneNumber && (r[ai] = t.phoneNumber);
                  try {
                    e = new si(r);
                  } catch (i) {}
                  t = e;
                } else t = null;
                t && n.push(t);
              }),
              ch(this, n);
          }

          function ch(t, e) {
            (t.b = e), $r(t, 'enrolledFactors', e);
          }

          function hh(t, e, n) {
            if (
              ((this.h = t),
              (this.i = e),
              (this.g = n),
              (this.c = 3e4),
              (this.f = 96e4),
              (this.b = null),
              (this.a = this.c),
              this.f < this.c)
            )
              throw Error(
                'Proactive refresh lower bound greater than upper bound!'
              );
          }

          function lh(t, e) {
            t.stop(),
              (t.b = Nn(
                (function (t, e) {
                  return e
                    ? ((t.a = t.c), t.g())
                    : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e);
                })(t, e)
              )
                .then(function () {
                  return (function () {
                    var t = c.document,
                      e = null;
                    return Hr() || !t
                      ? Ae()
                      : new we(function (n) {
                          (e = function () {
                            Hr() &&
                              (t.removeEventListener('visibilitychange', e, !1),
                              n());
                          }),
                            t.addEventListener('visibilitychange', e, !1);
                        }).o(function (n) {
                          throw (
                            (t.removeEventListener('visibilitychange', e, !1),
                            n)
                          );
                        });
                  })();
                })
                .then(function () {
                  return t.h();
                })
                .then(function () {
                  lh(t, !0);
                })
                .o(function (e) {
                  t.i(e) && lh(t, !1);
                }));
          }

          function fh(t) {
            (this.c = t), (this.b = this.a = null);
          }

          function ph(t) {
            return (t.b && 1e3 * t.b.c) || 0;
          }

          function dh(t, e) {
            var n = e.refreshToken;
            (t.b = Qi(e[ts] || '')), (t.a = n);
          }

          function vh(t, e) {
            return (function (t, e) {
              return new we(function (n, r) {
                ('refresh_token' == e.grant_type && e.refresh_token) ||
                ('authorization_code' == e.grant_type && e.code)
                  ? ss(
                      t,
                      t.u + '?key=' + encodeURIComponent(t.c),
                      function (t) {
                        t
                          ? t.error
                            ? r(ou(t))
                            : t.access_token && t.refresh_token
                            ? n(t)
                            : r(new T('internal-error'))
                          : r(new T('network-request-failed'));
                      },
                      'POST',
                      Jn(e).toString(),
                      t.g,
                      t.m.get()
                    )
                  : r(new T('internal-error'));
              });
            })(t.c, e)
              .then(function (e) {
                return (
                  (t.b = Qi(e.access_token)),
                  (t.a = e.refresh_token),
                  {
                    accessToken: t.b.toString(),
                    refreshToken: t.a,
                  }
                );
              })
              .o(function (e) {
                throw ('auth/user-token-expired' == e.code && (t.a = null), e);
              });
          }

          function yh(t, e) {
            (this.a = t || null),
              (this.b = e || null),
              Jr(this, {
                lastSignInTime: Qr(e || null),
                creationTime: Qr(t || null),
              });
          }

          function gh(t, e, n, r, i, o) {
            Jr(this, {
              uid: t,
              displayName: r || null,
              photoURL: i || null,
              email: n || null,
              phoneNumber: o || null,
              providerId: e,
            });
          }

          function mh(t, e, n) {
            (this.N = []),
              (this.l = t.apiKey),
              (this.m = t.appName),
              (this.s = t.authDomain || null),
              (t = r.a.SDK_VERSION ? Or(r.a.SDK_VERSION) : null),
              (this.a = new Ja(this.l, x(A), t)),
              (this.b = new fh(this.a)),
              Ih(this, e[ts]),
              dh(this.b, e),
              $r(this, 'refreshToken', this.b.a),
              Ah(this, n || {}),
              En.call(this),
              (this.P = !1),
              this.s && Rr() && (this.i = qc(this.s, this.l, this.m)),
              (this.R = []),
              (this.h = null),
              (this.B = (function (t) {
                return new hh(
                  function () {
                    return t.I(!0);
                  },
                  function (t) {
                    return !(!t || 'auth/network-request-failed' != t.code);
                  },
                  function () {
                    var e = ph(t.b) - S() - 3e5;
                    return 0 < e ? e : 0;
                  }
                );
              })(this)),
              (this.Z = E(this.Ma, this));
            var i = this;
            (this.oa = null),
              (this.za = function (t) {
                i.va(t.g);
              }),
              (this.aa = null),
              (this.W = []),
              (this.ya = function (t) {
                bh(i, t.c);
              }),
              (this.$ = null),
              (this.O = new uh(this, n)),
              $r(this, 'multiFactor', this.O);
          }

          function _h(t, e) {
            t.aa && pn(t.aa, 'languageCodeChanged', t.za),
              (t.aa = e) && hn(e, 'languageCodeChanged', t.za);
          }

          function bh(t, e) {
            (t.W = e),
              as(t.a, r.a.SDK_VERSION ? Or(r.a.SDK_VERSION, t.W) : null);
          }

          function wh(t, e) {
            t.$ && pn(t.$, 'frameworkChanged', t.ya),
              (t.$ = e) && hn(e, 'frameworkChanged', t.ya);
          }

          function Eh(t) {
            try {
              return r.a.app(t.m).auth();
            } catch (e) {
              throw new T(
                'internal-error',
                "No firebase.auth.Auth instance is available for the Firebase App '" +
                  t.m +
                  "'!"
              );
            }
          }

          function Ch(t) {
            t.D ||
              t.B.b ||
              (t.B.start(),
              pn(t, 'tokenChanged', t.Z),
              hn(t, 'tokenChanged', t.Z));
          }

          function Sh(t) {
            pn(t, 'tokenChanged', t.Z), t.B.stop();
          }

          function Ih(t, e) {
            (t.xa = e), $r(t, '_lat', e);
          }

          function Th(t) {
            for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t));
            return ke(e).then(function () {
              return t;
            });
          }

          function Nh(t) {
            t.i && !t.P && ((t.P = !0), Rc(t.i, t));
          }

          function Ah(t, e) {
            Jr(t, {
              uid: e.uid,
              displayName: e.displayName || null,
              photoURL: e.photoURL || null,
              email: e.email || null,
              emailVerified: e.emailVerified || !1,
              phoneNumber: e.phoneNumber || null,
              isAnonymous: e.isAnonymous || !1,
              tenantId: e.tenantId || null,
              metadata: new yh(e.createdAt, e.lastLoginAt),
              providerData: [],
            }),
              (t.a.b = t.tenantId);
          }

          function Oh() {}

          function Ph(t) {
            return Ae().then(function () {
              if (t.D) throw new T('app-deleted');
            });
          }

          function kh(t) {
            return K(t.providerData, function (t) {
              return t.providerId;
            });
          }

          function xh(t, e) {
            e && (Rh(t, e.providerId), t.providerData.push(e));
          }

          function Rh(t, e) {
            X(t.providerData, function (t) {
              return t.providerId == e;
            });
          }

          function Dh(t, e, n) {
            ('uid' != e || n) && t.hasOwnProperty(e) && $r(t, e, n);
          }

          function Lh(t, e) {
            t != e &&
              (Jr(t, {
                uid: e.uid,
                displayName: e.displayName,
                photoURL: e.photoURL,
                email: e.email,
                emailVerified: e.emailVerified,
                phoneNumber: e.phoneNumber,
                isAnonymous: e.isAnonymous,
                tenantId: e.tenantId,
                providerData: [],
              }),
              e.metadata
                ? $r(
                    t,
                    'metadata',
                    (function (t) {
                      return new yh(t.a, t.b);
                    })(e.metadata)
                  )
                : $r(t, 'metadata', new yh()),
              H(e.providerData, function (e) {
                xh(t, e);
              }),
              (function (t, e) {
                (t.b = e.b), (t.a = e.a);
              })(t.b, e.b),
              $r(t, 'refreshToken', t.b.a),
              ch(t.O, e.O.b));
          }

          function Mh(t) {
            return t.I().then(function (e) {
              var n = t.isAnonymous;
              return (function (t, e) {
                return ru(t.a, Ds, {
                  idToken: e,
                }).then(E(t.Ic, t));
              })(t, e).then(function () {
                return n || Dh(t, 'isAnonymous', !1), e;
              });
            });
          }

          function Fh(t, e) {
            e[ts] &&
              t.xa != e[ts] &&
              (dh(t.b, e),
              t.dispatchEvent(new sh('tokenChanged')),
              Ih(t, e[ts]),
              Dh(t, 'refreshToken', t.b.a));
          }

          function jh(t, e) {
            return Mh(t).then(function () {
              if (z(kh(t), e))
                return Th(t).then(function () {
                  throw new T('provider-already-linked');
                });
            });
          }

          function Uh(t, e, n) {
            return Zr({
              user: t,
              credential: Vo(e),
              additionalUserInfo: (e = $i(e)),
              operationType: n,
            });
          }

          function Vh(t, e) {
            return (
              Fh(t, e),
              t.reload().then(function () {
                return t;
              })
            );
          }

          function Wh(t, e, n, i, o) {
            if (!Rr())
              return Oe(new T('operation-not-supported-in-this-environment'));
            if (t.h && !o) return Oe(t.h);
            var a = Xi(n.providerId),
              s = Vr(t.uid + ':::'),
              u = null;
            (!Mr() || wr()) &&
              t.s &&
              n.isOAuthProvider &&
              (u = mu(
                t.s,
                t.l,
                t.m,
                e,
                n,
                null,
                s,
                r.a.SDK_VERSION || null,
                null,
                null,
                t.tenantId
              ));
            var c = yr(u, a && a.ta, a && a.sa);
            return (
              (i = i()
                .then(function () {
                  if ((Bh(t), !o)) return t.I().then(function () {});
                })
                .then(function () {
                  return Fc(t.i, c, e, n, s, !!u, t.tenantId);
                })
                .then(function () {
                  return new we(function (n, r) {
                    t.la(
                      e,
                      null,
                      new T('cancelled-popup-request'),
                      t.g || null
                    ),
                      (t.f = n),
                      (t.w = r),
                      (t.g = s),
                      (t.c = Vc(t.i, t, e, c, s));
                  });
                })
                .then(function (t) {
                  return c && vr(c), t ? Zr(t) : null;
                })
                .o(function (t) {
                  throw (c && vr(c), t);
                })),
              Hh(t, i, o)
            );
          }

          function qh(t, e, n, r, i) {
            if (!Rr())
              return Oe(new T('operation-not-supported-in-this-environment'));
            if (t.h && !i) return Oe(t.h);
            var o = null,
              a = Vr(t.uid + ':::');
            return (
              (r = r()
                .then(function () {
                  if ((Bh(t), !i)) return t.I().then(function () {});
                })
                .then(function () {
                  return (t.fa = a), Th(t);
                })
                .then(function (e) {
                  return t.ga && (e = (e = t.ga).b.set(Gh, t.v(), e.a)), e;
                })
                .then(function () {
                  return Uc(t.i, e, n, a, t.tenantId);
                })
                .o(function (e) {
                  if (((o = e), t.ga)) return zh(t.ga);
                  throw o;
                })
                .then(function () {
                  if (o) throw o;
                })),
              Hh(t, r, i)
            );
          }

          function Bh(t) {
            if (!t.i || !t.P) {
              if (t.i && !t.P) throw new T('internal-error');
              throw new T('auth-domain-config-required');
            }
          }

          function Hh(t, e, n) {
            var r = (function (t, e, n) {
              return t.h && !n
                ? (e.cancel(), Oe(t.h))
                : e.o(function (e) {
                    throw (
                      (!e ||
                        ('auth/user-disabled' != e.code &&
                          'auth/user-token-expired' != e.code) ||
                        (t.h || t.dispatchEvent(new sh('userInvalidated')),
                        (t.h = e)),
                      e)
                    );
                  });
            })(t, e, n);
            return (
              t.N.push(r),
              r.ma(function () {
                Y(t.N, r);
              }),
              r.o(function (e) {
                var n = null;
                throw (
                  (e &&
                    'auth/multi-factor-auth-required' === e.code &&
                    (n = rh(e.v(), Eh(t), E(t.hc, t))),
                  n || e)
                );
              })
            );
          }

          function Qh(t) {
            if (!t.apiKey) return null;
            var e = {
                apiKey: t.apiKey,
                authDomain: t.authDomain,
                appName: t.appName,
              },
              n = {};
            if (!t.stsTokenManager || !t.stsTokenManager.accessToken)
              return null;
            (n[ts] = t.stsTokenManager.accessToken),
              (n.refreshToken = t.stsTokenManager.refreshToken || null);
            var r = new mh(e, n, t);
            return (
              t.providerData &&
                H(t.providerData, function (t) {
                  t && xh(r, Zr(t));
                }),
              t.redirectEventId && (r.fa = t.redirectEventId),
              r
            );
          }

          function Kh(t) {
            (this.a = t), (this.b = tc());
          }
          (Zc.prototype.Pc = function (t) {
            var e = this;
            return t.ob(this.a.b, this.c).then(function (t) {
              var n = vt(e.f);
              return delete n[th], delete n[eh], gt(n, t), e.g(n);
            });
          }),
            I(nh, T),
            (ih.prototype.ob = function (t, e, n) {
              return e.type == uo
                ? (function (t, e, n, r) {
                    return n.Fa().then(function (n) {
                      return (
                        (n = {
                          idToken: n,
                        }),
                        'undefined' !== typeof r && (n.displayName = r),
                        gt(n, {
                          phoneVerificationInfo: Fo(t.a),
                        }),
                        ru(e, xs, n)
                      );
                    });
                  })(this, t, e, n)
                : (function (t, e, n) {
                    return n.Fa().then(function (n) {
                      return (
                        gt(
                          (n = {
                            mfaPendingCredential: n,
                          }),
                          {
                            phoneVerificationInfo: Fo(t.a),
                          }
                        ),
                        ru(e, Rs, n)
                      );
                    });
                  })(this, t, e);
            }),
            I(oh, ih),
            I(ah, oh),
            I(sh, $e),
            ((e = uh.prototype).wc = function (t) {
              ch(
                this,
                (function (t) {
                  var e = [];
                  return (
                    H(t.mfaInfo || [], function (t) {
                      (t = ni(t)) && e.push(t);
                    }),
                    e
                  );
                })(t.ed)
              );
            }),
            (e.Ob = function () {
              return this.a.I().then(function (t) {
                return new so(t, null);
              });
            }),
            (e.dc = function (t, e) {
              var n = this,
                r = this.a.a;
              return this.Ob()
                .then(function (n) {
                  return t.ob(r, n, e);
                })
                .then(function (t) {
                  return Fh(n.a, t), n.a.reload();
                });
            }),
            (e.$c = function (t) {
              var e = this,
                n = 'string' === typeof t ? t : t.uid,
                r = this.a.a;
              return this.a
                .I()
                .then(function (t) {
                  return ru(r, nu, {
                    idToken: t,
                    mfaEnrollmentId: n,
                  });
                })
                .then(function (t) {
                  var r = Q(e.b, function (t) {
                    return t.uid != n;
                  });
                  return (
                    ch(e, r),
                    Fh(e.a, t),
                    e.a.reload().o(function (t) {
                      if ('auth/user-token-expired' != t.code) throw t;
                    })
                  );
                });
            }),
            (e.v = function () {
              return {
                multiFactor: {
                  enrolledFactors: K(this.b, function (t) {
                    return t.v();
                  }),
                },
              };
            }),
            (hh.prototype.start = function () {
              (this.a = this.c), lh(this, !0);
            }),
            (hh.prototype.stop = function () {
              this.b && (this.b.cancel(), (this.b = null));
            }),
            (fh.prototype.v = function () {
              return {
                apiKey: this.c.c,
                refreshToken: this.a,
                accessToken: this.b && this.b.toString(),
                expirationTime: ph(this),
              };
            }),
            (fh.prototype.getToken = function (t) {
              return (
                (t = !!t),
                this.b && !this.a
                  ? Oe(new T('user-token-expired'))
                  : t || !this.b || S() > ph(this) - 3e4
                  ? this.a
                    ? vh(this, {
                        grant_type: 'refresh_token',
                        refresh_token: this.a,
                      })
                    : Ae(null)
                  : Ae({
                      accessToken: this.b.toString(),
                      refreshToken: this.a,
                    })
              );
            }),
            (yh.prototype.v = function () {
              return {
                lastLoginAt: this.b,
                createdAt: this.a,
              };
            }),
            I(mh, En),
            (mh.prototype.va = function (t) {
              (this.oa = t), os(this.a, t);
            }),
            (mh.prototype.ja = function () {
              return this.oa;
            }),
            (mh.prototype.Ea = function () {
              return J(this.W);
            }),
            (mh.prototype.Ma = function () {
              this.B.b && (this.B.stop(), this.B.start());
            }),
            $r(mh.prototype, 'providerId', 'firebase'),
            ((e = mh.prototype).reload = function () {
              var t = this;
              return Hh(
                this,
                Ph(this).then(function () {
                  return Mh(t)
                    .then(function () {
                      return Th(t);
                    })
                    .then(Oh);
                })
              );
            }),
            (e.mc = function (t) {
              return this.I(t).then(function (t) {
                return new Jc(t);
              });
            }),
            (e.I = function (t) {
              var e = this;
              return Hh(
                this,
                Ph(this)
                  .then(function () {
                    return e.b.getToken(t);
                  })
                  .then(function (t) {
                    if (!t) throw new T('internal-error');
                    return (
                      t.accessToken != e.xa &&
                        (Ih(e, t.accessToken),
                        e.dispatchEvent(new sh('tokenChanged'))),
                      Dh(e, 'refreshToken', t.refreshToken),
                      t.accessToken
                    );
                  })
              );
            }),
            (e.Ic = function (t) {
              if (!(t = t.users) || !t.length) throw new T('internal-error');
              Ah(this, {
                uid: (t = t[0]).localId,
                displayName: t.displayName,
                photoURL: t.photoUrl,
                email: t.email,
                emailVerified: !!t.emailVerified,
                phoneNumber: t.phoneNumber,
                lastLoginAt: t.lastLoginAt,
                createdAt: t.createdAt,
                tenantId: t.tenantId,
              });
              for (
                var e = (function (t) {
                    return (t = t.providerUserInfo) && t.length
                      ? K(t, function (t) {
                          return new gh(
                            t.rawId,
                            t.providerId,
                            t.email,
                            t.displayName,
                            t.photoUrl,
                            t.phoneNumber
                          );
                        })
                      : [];
                  })(t),
                  n = 0;
                n < e.length;
                n++
              )
                xh(this, e[n]);
              Dh(
                this,
                'isAnonymous',
                !(this.email && t.passwordHash) &&
                  !(this.providerData && this.providerData.length)
              ),
                this.dispatchEvent(
                  new sh('userReloaded', {
                    ed: t,
                  })
                );
            }),
            (e.Jc = function (t) {
              return (
                Yr(
                  'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.'
                ),
                this.pb(t)
              );
            }),
            (e.pb = function (t) {
              var e = this,
                n = null;
              return Hh(
                this,
                t
                  .c(this.a, this.uid)
                  .then(function (t) {
                    return (
                      Fh(e, t),
                      (n = Uh(e, t, 'reauthenticate')),
                      (e.h = null),
                      e.reload()
                    );
                  })
                  .then(function () {
                    return n;
                  }),
                !0
              );
            }),
            (e.Ac = function (t) {
              return (
                Yr(
                  'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.'
                ),
                this.mb(t)
              );
            }),
            (e.mb = function (t) {
              var e = this,
                n = null;
              return Hh(
                this,
                jh(this, t.providerId)
                  .then(function () {
                    return e.I();
                  })
                  .then(function (n) {
                    return t.b(e.a, n);
                  })
                  .then(function (t) {
                    return (n = Uh(e, t, 'link')), Vh(e, t);
                  })
                  .then(function () {
                    return n;
                  })
              );
            }),
            (e.Bc = function (t, e) {
              var n = this;
              return Hh(
                this,
                jh(this, 'phone').then(function () {
                  return $c(Eh(n), t, e, E(n.mb, n));
                })
              );
            }),
            (e.Kc = function (t, e) {
              var n = this;
              return Hh(
                this,
                Ae().then(function () {
                  return $c(Eh(n), t, e, E(n.pb, n));
                }),
                !0
              );
            }),
            (e.xb = function (t) {
              var e = this;
              return Hh(
                this,
                this.I()
                  .then(function (n) {
                    return e.a.xb(n, t);
                  })
                  .then(function (t) {
                    return Fh(e, t), e.reload();
                  })
              );
            }),
            (e.cd = function (t) {
              var e = this;
              return Hh(
                this,
                this.I()
                  .then(function (n) {
                    return t.b(e.a, n);
                  })
                  .then(function (t) {
                    return Fh(e, t), e.reload();
                  })
              );
            }),
            (e.yb = function (t) {
              var e = this;
              return Hh(
                this,
                this.I()
                  .then(function (n) {
                    return e.a.yb(n, t);
                  })
                  .then(function (t) {
                    return Fh(e, t), e.reload();
                  })
              );
            }),
            (e.zb = function (t) {
              if (void 0 === t.displayName && void 0 === t.photoURL)
                return Ph(this);
              var e = this;
              return Hh(
                this,
                this.I()
                  .then(function (n) {
                    return e.a.zb(n, {
                      displayName: t.displayName,
                      photoUrl: t.photoURL,
                    });
                  })
                  .then(function (t) {
                    return (
                      Fh(e, t),
                      Dh(e, 'displayName', t.displayName || null),
                      Dh(e, 'photoURL', t.photoUrl || null),
                      H(e.providerData, function (t) {
                        'password' === t.providerId &&
                          ($r(t, 'displayName', e.displayName),
                          $r(t, 'photoURL', e.photoURL));
                      }),
                      Th(e)
                    );
                  })
                  .then(Oh)
              );
            }),
            (e.ad = function (t) {
              var e = this;
              return Hh(
                this,
                Mh(this).then(function (n) {
                  return z(kh(e), t)
                    ? (function (t, e, n) {
                        return ru(t, Os, {
                          idToken: e,
                          deleteProvider: n,
                        });
                      })(e.a, n, [t]).then(function (t) {
                        var n = {};
                        return (
                          H(t.providerUserInfo || [], function (t) {
                            n[t.providerId] = !0;
                          }),
                          H(kh(e), function (t) {
                            n[t] || Rh(e, t);
                          }),
                          n[jo.PROVIDER_ID] || $r(e, 'phoneNumber', null),
                          Th(e)
                        );
                      })
                    : Th(e).then(function () {
                        throw new T('no-such-provider');
                      });
                })
              );
            }),
            (e.delete = function () {
              var t = this;
              return Hh(
                this,
                this.I()
                  .then(function (e) {
                    return ru(t.a, As, {
                      idToken: e,
                    });
                  })
                  .then(function () {
                    t.dispatchEvent(new sh('userDeleted'));
                  })
              ).then(function () {
                for (var e = 0; e < t.N.length; e++)
                  t.N[e].cancel('app-deleted');
                _h(t, null),
                  wh(t, null),
                  (t.N = []),
                  (t.D = !0),
                  Sh(t),
                  $r(t, 'refreshToken', null),
                  t.i && Dc(t.i, t);
              });
            }),
            (e.Cb = function (t, e) {
              return !!(
                ('linkViaPopup' == t && (this.g || null) == e && this.f) ||
                ('reauthViaPopup' == t && (this.g || null) == e && this.f) ||
                ('linkViaRedirect' == t && (this.fa || null) == e) ||
                ('reauthViaRedirect' == t && (this.fa || null) == e)
              );
            }),
            (e.la = function (t, e, n, r) {
              ('linkViaPopup' != t && 'reauthViaPopup' != t) ||
                r != (this.g || null) ||
                (n && this.w ? this.w(n) : e && !n && this.f && this.f(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.f,
                delete this.w);
            }),
            (e.Da = function (t, e) {
              return 'linkViaPopup' == t && e == (this.g || null)
                ? E(this.Hb, this)
                : 'reauthViaPopup' == t && e == (this.g || null)
                ? E(this.Ib, this)
                : 'linkViaRedirect' == t && (this.fa || null) == e
                ? E(this.Hb, this)
                : 'reauthViaRedirect' == t && (this.fa || null) == e
                ? E(this.Ib, this)
                : null;
            }),
            (e.Cc = function (t) {
              var e = this;
              return Wh(
                this,
                'linkViaPopup',
                t,
                function () {
                  return jh(e, t.providerId).then(function () {
                    return Th(e);
                  });
                },
                !1
              );
            }),
            (e.Lc = function (t) {
              return Wh(
                this,
                'reauthViaPopup',
                t,
                function () {
                  return Ae();
                },
                !0
              );
            }),
            (e.Dc = function (t) {
              var e = this;
              return qh(
                this,
                'linkViaRedirect',
                t,
                function () {
                  return jh(e, t.providerId);
                },
                !1
              );
            }),
            (e.Mc = function (t) {
              return qh(
                this,
                'reauthViaRedirect',
                t,
                function () {
                  return Ae();
                },
                !0
              );
            }),
            (e.Hb = function (t, e, n, r) {
              var i = this;
              this.c && (this.c.cancel(), (this.c = null));
              var o = null;
              return Hh(
                this,
                this.I()
                  .then(function (n) {
                    return ws(i.a, {
                      requestUri: t,
                      postBody: r,
                      sessionId: e,
                      idToken: n,
                    });
                  })
                  .then(function (t) {
                    return (o = Uh(i, t, 'link')), Vh(i, t);
                  })
                  .then(function () {
                    return o;
                  })
              );
            }),
            (e.Ib = function (t, e, n, r) {
              var i = this;
              this.c && (this.c.cancel(), (this.c = null));
              var o = null;
              return Hh(
                this,
                Ae()
                  .then(function () {
                    return lo(
                      Es(i.a, {
                        requestUri: t,
                        sessionId: e,
                        postBody: r,
                        tenantId: n,
                      }),
                      i.uid
                    );
                  })
                  .then(function (t) {
                    return (
                      (o = Uh(i, t, 'reauthenticate')),
                      Fh(i, t),
                      (i.h = null),
                      i.reload()
                    );
                  })
                  .then(function () {
                    return o;
                  }),
                !0
              );
            }),
            (e.qb = function (t) {
              var e = this,
                n = null;
              return Hh(
                this,
                this.I()
                  .then(function (e) {
                    return (
                      (n = e),
                      'undefined' === typeof t || dt(t) ? {} : Wi(new ki(t))
                    );
                  })
                  .then(function (t) {
                    return e.a.qb(n, t);
                  })
                  .then(function (t) {
                    if (e.email != t) return e.reload();
                  })
                  .then(function () {})
              );
            }),
            (e.Ab = function (t, e) {
              var n = this,
                r = null;
              return Hh(
                this,
                this.I()
                  .then(function (t) {
                    return (
                      (r = t),
                      'undefined' === typeof e || dt(e) ? {} : Wi(new ki(e))
                    );
                  })
                  .then(function (e) {
                    return n.a.Ab(r, t, e);
                  })
                  .then(function (t) {
                    if (n.email != t) return n.reload();
                  })
                  .then(function () {})
              );
            }),
            (e.hc = function (t) {
              var e = null,
                n = this;
              return Hh(
                this,
                (t = lo(Ae(t), n.uid)
                  .then(function (t) {
                    return (
                      (e = Uh(n, t, 'reauthenticate')),
                      Fh(n, t),
                      (n.h = null),
                      n.reload()
                    );
                  })
                  .then(function () {
                    return e;
                  })),
                !0
              );
            }),
            (e.toJSON = function () {
              return this.v();
            }),
            (e.v = function () {
              var t = {
                uid: this.uid,
                displayName: this.displayName,
                photoURL: this.photoURL,
                email: this.email,
                emailVerified: this.emailVerified,
                phoneNumber: this.phoneNumber,
                isAnonymous: this.isAnonymous,
                tenantId: this.tenantId,
                providerData: [],
                apiKey: this.l,
                appName: this.m,
                authDomain: this.s,
                stsTokenManager: this.b.v(),
                redirectEventId: this.fa || null,
              };
              return (
                this.metadata && gt(t, this.metadata.v()),
                H(this.providerData, function (e) {
                  t.providerData.push(
                    (function (t) {
                      var e,
                        n = {};
                      for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                      return n;
                    })(e)
                  );
                }),
                gt(t, this.O.v()),
                t
              );
            });
          var Gh = {
            name: 'redirectUser',
            F: 'session',
          };

          function zh(t) {
            return rc(t.b, Gh, t.a);
          }

          function Yh(t) {
            (this.a = t),
              (this.b = tc()),
              (this.c = null),
              (this.f = (function (t) {
                var e = Jh('local'),
                  n = Jh('session'),
                  r = Jh('none');
                return (function (t, e, n) {
                  var r = nc(e, n),
                    i = ec(t, e.F);
                  return t.get(e, n).then(function (o) {
                    var a = null;
                    try {
                      a = Ur(c.localStorage.getItem(r));
                    } catch (s) {}
                    if (a && !o)
                      return c.localStorage.removeItem(r), t.set(e, a, n);
                    a &&
                      o &&
                      'localStorage' != i.type &&
                      c.localStorage.removeItem(r);
                  });
                })(t.b, e, t.a)
                  .then(function () {
                    return t.b.get(n, t.a);
                  })
                  .then(function (i) {
                    return i
                      ? n
                      : t.b.get(r, t.a).then(function (n) {
                          return n
                            ? r
                            : t.b.get(e, t.a).then(function (n) {
                                return n
                                  ? e
                                  : t.b.get($h, t.a).then(function (t) {
                                      return t ? Jh(t) : e;
                                    });
                              });
                        });
                  })
                  .then(function (e) {
                    return (t.c = e), Xh(t, e.F);
                  })
                  .o(function () {
                    t.c || (t.c = e);
                  });
              })(this)),
              this.b.addListener(Jh('local'), this.a, E(this.g, this));
          }

          function Xh(t, e) {
            var n,
              r = [];
            for (n in Ju) Ju[n] !== e && r.push(rc(t.b, Jh(Ju[n]), t.a));
            return (
              r.push(rc(t.b, $h, t.a)),
              (function (t) {
                return new we(function (e, n) {
                  var r = t.length,
                    i = [];
                  if (r)
                    for (
                      var o = function (t, n) {
                          r--, (i[t] = n), 0 == r && e(i);
                        },
                        a = function (t) {
                          n(t);
                        },
                        s = 0;
                      s < t.length;
                      s++
                    )
                      Pe(t[s], C(o, s), a);
                  else e(i);
                });
              })(r)
            );
          }
          Yh.prototype.g = function () {
            var t = this,
              e = Jh('local');
            nl(this, function () {
              return Ae()
                .then(function () {
                  return t.c && 'local' != t.c.F ? t.b.get(e, t.a) : null;
                })
                .then(function (n) {
                  if (n)
                    return Xh(t, 'local').then(function () {
                      t.c = e;
                    });
                });
            });
          };
          var $h = {
            name: 'persistence',
            F: 'session',
          };

          function Jh(t) {
            return {
              name: 'authUser',
              F: t,
            };
          }

          function Zh(t, e) {
            return nl(t, function () {
              return t.b.set(t.c, e.v(), t.a);
            });
          }

          function tl(t) {
            return nl(t, function () {
              return rc(t.b, t.c, t.a);
            });
          }

          function el(t, e) {
            return nl(t, function () {
              return t.b.get(t.c, t.a).then(function (t) {
                return t && e && (t.authDomain = e), Qh(t || {});
              });
            });
          }

          function nl(t, e) {
            return (t.f = t.f.then(e, e)), t.f;
          }

          function rl(t) {
            if (
              ((this.l = !1),
              $r(this, 'settings', new Yc()),
              $r(this, 'app', t),
              !ll(this).options || !ll(this).options.apiKey)
            )
              throw new T('invalid-api-key');
            (t = r.a.SDK_VERSION ? Or(r.a.SDK_VERSION) : null),
              (this.b = new Ja(
                ll(this).options && ll(this).options.apiKey,
                x(A),
                t
              )),
              (this.P = []),
              (this.m = []),
              (this.O = []),
              (this.$b = r.a.INTERNAL.createSubscribe(E(this.xc, this))),
              (this.W = void 0),
              (this.ac = r.a.INTERNAL.createSubscribe(E(this.yc, this))),
              cl(this, null),
              (this.i = new Yh(ll(this).options.apiKey + ':' + ll(this).name)),
              (this.B = new Kh(ll(this).options.apiKey + ':' + ll(this).name)),
              (this.Z = vl(
                this,
                (function (t) {
                  var e = ll(t).options.authDomain,
                    n = (function (t) {
                      var e = (function (t, e) {
                        return t.b.get(Gh, t.a).then(function (t) {
                          return t && e && (t.authDomain = e), Qh(t || {});
                        });
                      })(t.B, ll(t).options.authDomain).then(function (e) {
                        return (t.D = e) && (e.ga = t.B), zh(t.B);
                      });
                      return vl(t, e);
                    })(t)
                      .then(function () {
                        return el(t.i, e);
                      })
                      .then(function (e) {
                        return e
                          ? ((e.ga = t.B),
                            t.D && (t.D.fa || null) == (e.fa || null)
                              ? e
                              : e
                                  .reload()
                                  .then(function () {
                                    return Zh(t.i, e).then(function () {
                                      return e;
                                    });
                                  })
                                  .o(function (n) {
                                    return 'auth/network-request-failed' ==
                                      n.code
                                      ? e
                                      : tl(t.i);
                                  }))
                          : null;
                      })
                      .then(function (e) {
                        cl(t, e || null);
                      });
                  return vl(t, n);
                })(this)
              )),
              (this.h = vl(
                this,
                (function (t) {
                  return t.Z.then(function () {
                    return sl(t);
                  })
                    .o(function () {})
                    .then(function () {
                      if (!t.l) return t.oa();
                    })
                    .o(function () {})
                    .then(function () {
                      if (!t.l) {
                        t.aa = !0;
                        var e = t.i;
                        e.b.addListener(Jh('local'), e.a, t.oa);
                      }
                    });
                })(this)
              )),
              (this.aa = !1),
              (this.oa = E(this.Xc, this)),
              (this.Ma = E(this.ca, this)),
              (this.xa = E(this.jc, this)),
              (this.ya = E(this.uc, this)),
              (this.za = E(this.vc, this)),
              (this.a = null),
              (function (t) {
                var e = ll(t).options.authDomain,
                  n = ll(t).options.apiKey;
                e &&
                  Rr() &&
                  (t.Zb = t.Z.then(function () {
                    if (!t.l) {
                      if (
                        ((t.a = qc(e, n, ll(t).name)),
                        Rc(t.a, t),
                        fl(t) && Nh(fl(t)),
                        t.D)
                      ) {
                        Nh(t.D);
                        var r = t.D;
                        r.va(t.ja()),
                          _h(r, t),
                          bh((r = t.D), t.N),
                          wh(r, t),
                          (t.D = null);
                      }
                      return t.a;
                    }
                  }));
              })(this),
              (this.INTERNAL = {}),
              (this.INTERNAL.delete = E(this.delete, this)),
              (this.INTERNAL.logFramework = E(this.Ec, this)),
              (this.s = 0),
              En.call(this),
              (function (t) {
                Object.defineProperty(t, 'lc', {
                  get: function () {
                    return this.ja();
                  },
                  set: function (t) {
                    this.va(t);
                  },
                  enumerable: !1,
                }),
                  (t.$ = null),
                  Object.defineProperty(t, 'ti', {
                    get: function () {
                      return this.S();
                    },
                    set: function (t) {
                      this.ub(t);
                    },
                    enumerable: !1,
                  }),
                  (t.R = null);
              })(this),
              (this.N = []);
          }

          function il(t) {
            $e.call(this, 'languageCodeChanged'), (this.g = t);
          }

          function ol(t) {
            $e.call(this, 'frameworkChanged'), (this.c = t);
          }

          function al(t) {
            return t.Zb || Oe(new T('auth-domain-config-required'));
          }

          function sl(t) {
            if (!Rr())
              return Oe(new T('operation-not-supported-in-this-environment'));
            var e = al(t)
              .then(function () {
                return t.a.pa();
              })
              .then(function (t) {
                return t ? Zr(t) : null;
              });
            return vl(t, e);
          }

          function ul(t, e) {
            var n = {};
            return (
              (n.apiKey = ll(t).options.apiKey),
              (n.authDomain = ll(t).options.authDomain),
              (n.appName = ll(t).name),
              t.Z.then(function () {
                return (function (t, e, n, r) {
                  var i = new mh(t, e);
                  return (
                    n && (i.ga = n),
                    r && bh(i, r),
                    i.reload().then(function () {
                      return i;
                    })
                  );
                })(n, e, t.B, t.Ea());
              })
                .then(function (e) {
                  return fl(t) && e.uid == fl(t).uid
                    ? (Lh(fl(t), e), t.ca(e))
                    : (cl(t, e), Nh(e), t.ca(e));
                })
                .then(function () {
                  dl(t);
                })
            );
          }

          function cl(t, e) {
            fl(t) &&
              ((function (t, e) {
                X(t.R, function (t) {
                  return t == e;
                });
              })(fl(t), t.Ma),
              pn(fl(t), 'tokenChanged', t.xa),
              pn(fl(t), 'userDeleted', t.ya),
              pn(fl(t), 'userInvalidated', t.za),
              Sh(fl(t))),
              e &&
                (e.R.push(t.Ma),
                hn(e, 'tokenChanged', t.xa),
                hn(e, 'userDeleted', t.ya),
                hn(e, 'userInvalidated', t.za),
                0 < t.s && Ch(e)),
              $r(t, 'currentUser', e),
              e && (e.va(t.ja()), _h(e, t), bh(e, t.N), wh(e, t));
          }

          function hl(t, e) {
            var n = null,
              r = null;
            return vl(
              t,
              e
                .then(
                  function (e) {
                    return (n = Vo(e)), (r = $i(e)), ul(t, e);
                  },
                  function (e) {
                    var n = null;
                    throw (
                      (e &&
                        'auth/multi-factor-auth-required' === e.code &&
                        (n = rh(e.v(), t, E(t.ic, t))),
                      n || e)
                    );
                  }
                )
                .then(function () {
                  return Zr({
                    user: fl(t),
                    credential: n,
                    additionalUserInfo: r,
                    operationType: 'signIn',
                  });
                })
            );
          }

          function ll(t) {
            return t.app;
          }

          function fl(t) {
            return t.currentUser;
          }

          function pl(t) {
            return (fl(t) && fl(t)._lat) || null;
          }

          function dl(t) {
            if (t.aa) {
              for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](pl(t));
              if (t.W !== t.getUid() && t.O.length)
                for (t.W = t.getUid(), e = 0; e < t.O.length; e++)
                  t.O[e] && t.O[e](pl(t));
            }
          }

          function vl(t, e) {
            return (
              t.P.push(e),
              e.ma(function () {
                Y(t.P, e);
              }),
              e
            );
          }

          function yl() {}

          function gl() {
            (this.a = {}), (this.b = 1e12);
          }
          (Yh.prototype.tb = function (t) {
            var e = null,
              n = this;
            return (
              (function (t) {
                var e = new T('invalid-persistence-type'),
                  n = new T('unsupported-persistence-type');
                t: {
                  for (r in Ju)
                    if (Ju[r] == t) {
                      var r = !0;
                      break t;
                    }
                  r = !1;
                }
                if (!r || 'string' !== typeof t) throw e;
                switch (Cr()) {
                  case 'ReactNative':
                    if ('session' === t) throw n;
                    break;
                  case 'Node':
                    if ('none' !== t) throw n;
                    break;
                  default:
                    if (!xr() && 'none' !== t) throw n;
                }
              })(t),
              nl(this, function () {
                return t != n.c.F
                  ? n.b
                      .get(n.c, n.a)
                      .then(function (r) {
                        return (e = r), Xh(n, t);
                      })
                      .then(function () {
                        if (((n.c = Jh(t)), e)) return n.b.set(n.c, e, n.a);
                      })
                  : Ae();
              })
            );
          }),
            I(rl, En),
            I(il, $e),
            I(ol, $e),
            ((e = rl.prototype).tb = function (t) {
              return vl(this, (t = this.i.tb(t)));
            }),
            (e.va = function (t) {
              this.$ === t ||
                this.l ||
                ((this.$ = t),
                os(this.b, this.$),
                this.dispatchEvent(new il(this.ja())));
            }),
            (e.ja = function () {
              return this.$;
            }),
            (e.dd = function () {
              var t = c.navigator;
              this.va(
                (t &&
                  ((t.languages && t.languages[0]) ||
                    t.language ||
                    t.userLanguage)) ||
                  null
              );
            }),
            (e.Ec = function (t) {
              this.N.push(t),
                as(
                  this.b,
                  r.a.SDK_VERSION ? Or(r.a.SDK_VERSION, this.N) : null
                ),
                this.dispatchEvent(new ol(this.N));
            }),
            (e.Ea = function () {
              return J(this.N);
            }),
            (e.ub = function (t) {
              this.R === t || this.l || ((this.R = t), (this.b.b = this.R));
            }),
            (e.S = function () {
              return this.R;
            }),
            (e.toJSON = function () {
              return {
                apiKey: ll(this).options.apiKey,
                authDomain: ll(this).options.authDomain,
                appName: ll(this).name,
                currentUser: fl(this) && fl(this).v(),
              };
            }),
            (e.Cb = function (t, e) {
              switch (t) {
                case 'unknown':
                case 'signInViaRedirect':
                  return !0;
                case 'signInViaPopup':
                  return this.g == e && !!this.f;
                default:
                  return !1;
              }
            }),
            (e.la = function (t, e, n, r) {
              'signInViaPopup' == t &&
                this.g == r &&
                (n && this.w ? this.w(n) : e && !n && this.f && this.f(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.f,
                delete this.w);
            }),
            (e.Da = function (t, e) {
              return 'signInViaRedirect' == t ||
                ('signInViaPopup' == t && this.g == e && this.f)
                ? E(this.gc, this)
                : null;
            }),
            (e.gc = function (t, e, n, r) {
              var i = this,
                o = {
                  requestUri: t,
                  postBody: r,
                  sessionId: e,
                  tenantId: n,
                };
              return (
                this.c && (this.c.cancel(), (this.c = null)),
                i.Z.then(function () {
                  return hl(i, bs(i.b, o));
                })
              );
            }),
            (e.Vc = function (t) {
              if (!Rr())
                return Oe(new T('operation-not-supported-in-this-environment'));
              var e = this,
                n = Xi(t.providerId),
                i = Vr(),
                o = null;
              (!Mr() || wr()) &&
                ll(this).options.authDomain &&
                t.isOAuthProvider &&
                (o = mu(
                  ll(this).options.authDomain,
                  ll(this).options.apiKey,
                  ll(this).name,
                  'signInViaPopup',
                  t,
                  null,
                  i,
                  r.a.SDK_VERSION || null,
                  null,
                  null,
                  this.S()
                ));
              var a = yr(o, n && n.ta, n && n.sa);
              return vl(
                this,
                (n = al(this)
                  .then(function (n) {
                    return Fc(n, a, 'signInViaPopup', t, i, !!o, e.S());
                  })
                  .then(function () {
                    return new we(function (t, n) {
                      e.la(
                        'signInViaPopup',
                        null,
                        new T('cancelled-popup-request'),
                        e.g
                      ),
                        (e.f = t),
                        (e.w = n),
                        (e.g = i),
                        (e.c = Vc(e.a, e, 'signInViaPopup', a, i));
                    });
                  })
                  .then(function (t) {
                    return a && vr(a), t ? Zr(t) : null;
                  })
                  .o(function (t) {
                    throw (a && vr(a), t);
                  }))
              );
            }),
            (e.Wc = function (t) {
              if (!Rr())
                return Oe(new T('operation-not-supported-in-this-environment'));
              var e = this;
              return vl(
                this,
                al(this)
                  .then(function () {
                    return (function (t) {
                      return nl(t, function () {
                        return t.b.set($h, t.c.F, t.a);
                      });
                    })(e.i);
                  })
                  .then(function () {
                    return Uc(e.a, 'signInViaRedirect', t, void 0, e.S());
                  })
              );
            }),
            (e.pa = function () {
              var t = this;
              return sl(this)
                .then(function (e) {
                  return t.a && Qc(t.a.b), e;
                })
                .o(function (e) {
                  throw (t.a && Qc(t.a.b), e);
                });
            }),
            (e.bd = function (t) {
              if (!t) return Oe(new T('null-user'));
              if (this.R != t.tenantId) return Oe(new T('tenant-id-mismatch'));
              var e = this,
                n = {};
              (n.apiKey = ll(this).options.apiKey),
                (n.authDomain = ll(this).options.authDomain),
                (n.appName = ll(this).name);
              var r = (function (t, e, n, r) {
                var i = t.b,
                  o = {};
                return (
                  (o[ts] = i.b && i.b.toString()),
                  (o.refreshToken = i.a),
                  (e = new mh(
                    e || {
                      apiKey: t.l,
                      authDomain: t.s,
                      appName: t.m,
                    },
                    o
                  )),
                  n && (e.ga = n),
                  r && bh(e, r),
                  Lh(e, t),
                  e
                );
              })(t, n, e.B, e.Ea());
              return vl(
                this,
                this.h
                  .then(function () {
                    if (ll(e).options.apiKey != t.l) return r.reload();
                  })
                  .then(function () {
                    return fl(e) && t.uid == fl(e).uid
                      ? (Lh(fl(e), t), e.ca(t))
                      : (cl(e, r), Nh(r), e.ca(r));
                  })
                  .then(function () {
                    dl(e);
                  })
              );
            }),
            (e.wb = function () {
              var t = this;
              return vl(
                this,
                this.h.then(function () {
                  return (
                    t.a && Qc(t.a.b),
                    fl(t)
                      ? (cl(t, null),
                        tl(t.i).then(function () {
                          dl(t);
                        }))
                      : Ae()
                  );
                })
              );
            }),
            (e.Xc = function () {
              var t = this;
              return el(this.i, ll(this).options.authDomain).then(function (e) {
                if (!t.l) {
                  var n;
                  if ((n = fl(t) && e)) {
                    n = fl(t).uid;
                    var r = e.uid;
                    n =
                      void 0 !== n &&
                      null !== n &&
                      '' !== n &&
                      void 0 !== r &&
                      null !== r &&
                      '' !== r &&
                      n == r;
                  }
                  if (n) return Lh(fl(t), e), fl(t).I();
                  (fl(t) || e) &&
                    (cl(t, e),
                    e && (Nh(e), (e.ga = t.B)),
                    t.a && Rc(t.a, t),
                    dl(t));
                }
              });
            }),
            (e.ca = function (t) {
              return Zh(this.i, t);
            }),
            (e.jc = function () {
              dl(this), this.ca(fl(this));
            }),
            (e.uc = function () {
              this.wb();
            }),
            (e.vc = function () {
              this.wb();
            }),
            (e.ic = function (t) {
              var e = this;
              return this.h.then(function () {
                return hl(e, Ae(t));
              });
            }),
            (e.xc = function (t) {
              var e = this;
              this.addAuthTokenListener(function () {
                t.next(fl(e));
              });
            }),
            (e.yc = function (t) {
              var e = this;
              !(function (t, e) {
                t.O.push(e),
                  vl(
                    t,
                    t.h.then(function () {
                      !t.l &&
                        z(t.O, e) &&
                        t.W !== t.getUid() &&
                        ((t.W = t.getUid()), e(pl(t)));
                    })
                  );
              })(this, function () {
                t.next(fl(e));
              });
            }),
            (e.Gc = function (t, e, n) {
              var r = this;
              return (
                this.aa &&
                  Promise.resolve().then(function () {
                    v(t) ? t(fl(r)) : v(t.next) && t.next(fl(r));
                  }),
                this.$b(t, e, n)
              );
            }),
            (e.Fc = function (t, e, n) {
              var r = this;
              return (
                this.aa &&
                  Promise.resolve().then(function () {
                    (r.W = r.getUid()),
                      v(t) ? t(fl(r)) : v(t.next) && t.next(fl(r));
                  }),
                this.ac(t, e, n)
              );
            }),
            (e.kc = function (t) {
              var e = this;
              return vl(
                this,
                this.h.then(function () {
                  return fl(e)
                    ? fl(e)
                        .I(t)
                        .then(function (t) {
                          return {
                            accessToken: t,
                          };
                        })
                    : null;
                })
              );
            }),
            (e.Rc = function (t) {
              var e = this;
              return this.h
                .then(function () {
                  return hl(
                    e,
                    ru(e.b, $s, {
                      token: t,
                    })
                  );
                })
                .then(function (t) {
                  var n = t.user;
                  return Dh(n, 'isAnonymous', !1), e.ca(n), t;
                });
            }),
            (e.Sc = function (t, e) {
              var n = this;
              return this.h.then(function () {
                return hl(
                  n,
                  ru(n.b, Js, {
                    email: t,
                    password: e,
                  })
                );
              });
            }),
            (e.cc = function (t, e) {
              var n = this;
              return this.h.then(function () {
                return hl(
                  n,
                  ru(n.b, Ts, {
                    email: t,
                    password: e,
                  })
                );
              });
            }),
            (e.Ya = function (t) {
              var e = this;
              return this.h.then(function () {
                return hl(e, t.ia(e.b));
              });
            }),
            (e.Qc = function (t) {
              return (
                Yr(
                  'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.'
                ),
                this.Ya(t)
              );
            }),
            (e.vb = function () {
              var t = this;
              return this.h.then(function () {
                var e = fl(t);
                if (e && e.isAnonymous) {
                  var n = Zr({
                    providerId: null,
                    isNewUser: !1,
                  });
                  return Zr({
                    user: e,
                    credential: null,
                    additionalUserInfo: n,
                    operationType: 'signIn',
                  });
                }
                return hl(t, t.b.vb()).then(function (e) {
                  var n = e.user;
                  return Dh(n, 'isAnonymous', !0), t.ca(n), e;
                });
              });
            }),
            (e.getUid = function () {
              return (fl(this) && fl(this).uid) || null;
            }),
            (e.bc = function (t) {
              this.addAuthTokenListener(t),
                this.s++,
                0 < this.s && fl(this) && Ch(fl(this));
            }),
            (e.Nc = function (t) {
              var e = this;
              H(this.m, function (n) {
                n == t && e.s--;
              }),
                0 > this.s && (this.s = 0),
                0 == this.s && fl(this) && Sh(fl(this)),
                this.removeAuthTokenListener(t);
            }),
            (e.addAuthTokenListener = function (t) {
              var e = this;
              this.m.push(t),
                vl(
                  this,
                  this.h.then(function () {
                    e.l || (z(e.m, t) && t(pl(e)));
                  })
                );
            }),
            (e.removeAuthTokenListener = function (t) {
              X(this.m, function (e) {
                return e == t;
              });
            }),
            (e.delete = function () {
              this.l = !0;
              for (var t = 0; t < this.P.length; t++)
                this.P[t].cancel('app-deleted');
              return (
                (this.P = []),
                this.i &&
                  (t = this.i).b.removeListener(Jh('local'), t.a, this.oa),
                this.a && (Dc(this.a, this), Qc(this.a.b)),
                Promise.resolve()
              );
            }),
            (e.fc = function (t) {
              return vl(
                this,
                (function (t, e) {
                  return ru(t, Ns, {
                    identifier: e,
                    continueUri: Dr() ? lr() : 'http://localhost',
                  }).then(function (t) {
                    return t.signinMethods || [];
                  });
                })(this.b, t)
              );
            }),
            (e.zc = function (t) {
              return !!Do(t);
            }),
            (e.sb = function (t, e) {
              var n = this;
              return vl(
                this,
                Ae()
                  .then(function () {
                    var t = new ki(e);
                    if (!t.c)
                      throw new T(
                        'argument-error',
                        Di + ' must be true when sending sign in link to email'
                      );
                    return Wi(t);
                  })
                  .then(function (e) {
                    return n.b.sb(t, e);
                  })
                  .then(function () {})
              );
            }),
            (e.fd = function (t) {
              return this.Pa(t).then(function (t) {
                return t.data.email;
              });
            }),
            (e.jb = function (t, e) {
              return vl(
                this,
                this.b.jb(t, e).then(function () {})
              );
            }),
            (e.Pa = function (t) {
              return vl(
                this,
                this.b.Pa(t).then(function (t) {
                  return new ui(t);
                })
              );
            }),
            (e.fb = function (t) {
              return vl(
                this,
                this.b.fb(t).then(function () {})
              );
            }),
            (e.rb = function (t, e) {
              var n = this;
              return vl(
                this,
                Ae()
                  .then(function () {
                    return 'undefined' === typeof e || dt(e)
                      ? {}
                      : Wi(new ki(e));
                  })
                  .then(function (e) {
                    return n.b.rb(t, e);
                  })
                  .then(function () {})
              );
            }),
            (e.Uc = function (t, e) {
              return vl(this, $c(this, t, e, E(this.Ya, this)));
            }),
            (e.Tc = function (t, e) {
              var n = this;
              return vl(
                this,
                Ae().then(function () {
                  var r = e || lr(),
                    i = Ro(t, r);
                  if (!(r = Do(r)))
                    throw new T('argument-error', 'Invalid email link!');
                  if (r.tenantId !== n.S()) throw new T('tenant-id-mismatch');
                  return n.Ya(i);
                })
              );
            }),
            (yl.prototype.render = function () {}),
            (yl.prototype.reset = function () {}),
            (yl.prototype.getResponse = function () {}),
            (yl.prototype.execute = function () {});
          var ml = null;

          function _l(t, e) {
            return ((e = bl(e)) && t.a[e]) || null;
          }

          function bl(t) {
            return (t = 'undefined' === typeof t ? 1e12 : t)
              ? t.toString()
              : null;
          }

          function wl(t, e) {
            (this.g = !1),
              (this.c = e),
              (this.a = this.b = null),
              (this.h = 'invisible' !== this.c.size),
              (this.f = se(t));
            var n = this;
            (this.i = function () {
              n.execute();
            }),
              this.h ? this.execute() : hn(this.f, 'click', this.i);
          }

          function El(t) {
            if (t.g) throw Error('reCAPTCHA mock was already deleted!');
          }

          function Cl() {}

          function Sl() {}
          (gl.prototype.render = function (t, e) {
            return (this.a[this.b.toString()] = new wl(t, e)), this.b++;
          }),
            (gl.prototype.reset = function (t) {
              var e = _l(this, t);
              (t = bl(t)), e && t && (e.delete(), delete this.a[t]);
            }),
            (gl.prototype.getResponse = function (t) {
              return (t = _l(this, t)) ? t.getResponse() : null;
            }),
            (gl.prototype.execute = function (t) {
              (t = _l(this, t)) && t.execute();
            }),
            (wl.prototype.getResponse = function () {
              return El(this), this.b;
            }),
            (wl.prototype.execute = function () {
              El(this);
              var t = this;
              this.a ||
                (this.a = setTimeout(function () {
                  t.b = (function () {
                    for (var t = 50, e = []; 0 < t; )
                      e.push(
                        '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                          Math.floor(62 * Math.random())
                        )
                      ),
                        t--;
                    return e.join('');
                  })();
                  var e = t.c.callback,
                    n = t.c['expired-callback'];
                  if (e)
                    try {
                      e(t.b);
                    } catch (r) {}
                  t.a = setTimeout(function () {
                    if (((t.a = null), (t.b = null), n))
                      try {
                        n();
                      } catch (r) {}
                    t.h && t.execute();
                  }, 6e4);
                }, 500));
            }),
            (wl.prototype.delete = function () {
              El(this),
                (this.g = !0),
                clearTimeout(this.a),
                (this.a = null),
                pn(this.f, 'click', this.i);
            }),
            $r(Cl, 'FACTOR_ID', 'phone'),
            (Sl.prototype.g = function () {
              return ml || (ml = new gl()), Ae(ml);
            }),
            (Sl.prototype.c = function () {});
          var Il = null;

          function Tl() {
            (this.b = c.grecaptcha ? 1 / 0 : 0),
              (this.f = null),
              (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString());
          }
          var Nl = new _t(
              Et,
              'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'
            ),
            Al = new Br(3e4, 6e4);
          (Tl.prototype.g = function (t) {
            var e = this;
            return new we(function (n, r) {
              var i = setTimeout(function () {
                r(new T('network-request-failed'));
              }, Al.get());
              !c.grecaptcha || (t !== e.f && !e.b)
                ? ((c[e.a] = function () {
                    if (c.grecaptcha) {
                      e.f = t;
                      var o = c.grecaptcha.render;
                      (c.grecaptcha.render = function (t, n) {
                        return (t = o(t, n)), e.b++, t;
                      }),
                        clearTimeout(i),
                        n(c.grecaptcha);
                    } else clearTimeout(i), r(new T('internal-error'));
                    delete c[e.a];
                  }),
                  Ae(
                    Qa(
                      Tt(Nl, {
                        onload: e.a,
                        hl: t || '',
                      })
                    )
                  ).o(function () {
                    clearTimeout(i),
                      r(
                        new T(
                          'internal-error',
                          'Unable to load external reCAPTCHA dependencies!'
                        )
                      );
                  }))
                : (clearTimeout(i), n(c.grecaptcha));
            });
          }),
            (Tl.prototype.c = function () {
              this.b--;
            });
          var Ol = null;

          function Pl(t, e, n, r, i, o, a) {
            if (
              ($r(this, 'type', 'recaptcha'),
              (this.c = this.f = null),
              (this.D = !1),
              (this.u = e),
              (this.g = null),
              a
                ? (Il || (Il = new Sl()), (a = Il))
                : (Ol || (Ol = new Tl()), (a = Ol)),
              (this.m = a),
              (this.a = n || {
                theme: 'light',
                type: 'image',
              }),
              (this.h = []),
              this.a[Rl])
            )
              throw new T(
                'argument-error',
                'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
              );
            if (((this.i = 'invisible' === this.a[Dl]), !c.document))
              throw new T(
                'operation-not-supported-in-this-environment',
                'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
              );
            if (!se(e) || (!this.i && se(e).hasChildNodes()))
              throw new T(
                'argument-error',
                'reCAPTCHA container is either not found or already contains inner elements!'
              );
            (this.s = new Ja(t, o || null, i || null)),
              (this.w =
                r ||
                function () {
                  return null;
                });
            var s = this;
            this.l = [];
            var u = this.a[kl];
            this.a[kl] = function (t) {
              if ((Ll(s, t), 'function' === typeof u)) u(t);
              else if ('string' === typeof u) {
                var e = kr(u, c);
                'function' === typeof e && e(t);
              }
            };
            var h = this.a[xl];
            this.a[xl] = function () {
              if ((Ll(s, null), 'function' === typeof h)) h();
              else if ('string' === typeof h) {
                var t = kr(h, c);
                'function' === typeof t && t();
              }
            };
          }
          var kl = 'callback',
            xl = 'expired-callback',
            Rl = 'sitekey',
            Dl = 'size';

          function Ll(t, e) {
            for (var n = 0; n < t.l.length; n++)
              try {
                t.l[n](e);
              } catch (r) {}
          }

          function Ml(t, e) {
            return (
              t.h.push(e),
              e.ma(function () {
                Y(t.h, e);
              }),
              e
            );
          }

          function Fl(t) {
            if (t.D)
              throw new T(
                'internal-error',
                'RecaptchaVerifier instance has been destroyed.'
              );
          }

          function jl(t, e, n) {
            var i = !1;
            try {
              this.b = n || r.a.app();
            } catch (s) {
              throw new T(
                'argument-error',
                'No firebase.app.App instance is currently initialized.'
              );
            }
            if (!this.b.options || !this.b.options.apiKey)
              throw new T('invalid-api-key');
            n = this.b.options.apiKey;
            var o = this,
              a = null;
            try {
              a = this.b.auth().Ea();
            } catch (s) {}
            try {
              i = this.b.auth().settings.appVerificationDisabledForTesting;
            } catch (s) {}
            (a = r.a.SDK_VERSION ? Or(r.a.SDK_VERSION, a) : null),
              Pl.call(
                this,
                n,
                t,
                e,
                function () {
                  try {
                    var t = o.b.auth().ja();
                  } catch (e) {
                    t = null;
                  }
                  return t;
                },
                a,
                x(A),
                i
              );
          }

          function Ul(t, e, n, r) {
            t: {
              n = Array.prototype.slice.call(n);
              for (var i = 0, o = !1, a = 0; a < e.length; a++)
                if (e[a].optional) o = !0;
                else {
                  if (o)
                    throw new T(
                      'internal-error',
                      'Argument validator encountered a required argument after an optional argument.'
                    );
                  i++;
                }
              if (((o = e.length), n.length < i || o < n.length))
                r =
                  'Expected ' +
                  (i == o
                    ? 1 == i
                      ? '1 argument'
                      : i + ' arguments'
                    : i + '-' + o + ' arguments') +
                  ' but got ' +
                  n.length +
                  '.';
              else {
                for (i = 0; i < n.length; i++)
                  if (
                    ((o = e[i].optional && void 0 === n[i]),
                    !e[i].K(n[i]) && !o)
                  ) {
                    if (((e = e[i]), 0 > i || i >= Vl.length))
                      throw new T(
                        'internal-error',
                        'Argument validator received an unsupported number of arguments.'
                      );
                    (n = Vl[i]),
                      (r =
                        (r ? '' : n + ' argument ') +
                        (e.name ? '"' + e.name + '" ' : '') +
                        'must be ' +
                        e.J +
                        '.');
                    break t;
                  }
                r = null;
              }
            }
            if (r) throw new T('argument-error', t + ' failed: ' + r);
          }
          ((e = Pl.prototype).Ga = function () {
            var t = this;
            return this.f
              ? this.f
              : (this.f = Ml(
                  this,
                  Ae()
                    .then(function () {
                      if (Dr() && !Er()) return _r();
                      throw new T(
                        'operation-not-supported-in-this-environment',
                        'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
                      );
                    })
                    .then(function () {
                      return t.m.g(t.w());
                    })
                    .then(function (e) {
                      return (t.g = e), ru(t.s, Vs, {});
                    })
                    .then(function (e) {
                      t.a[Rl] = e.recaptchaSiteKey;
                    })
                    .o(function (e) {
                      throw ((t.f = null), e);
                    })
                ));
          }),
            (e.render = function () {
              Fl(this);
              var t = this;
              return Ml(
                this,
                this.Ga().then(function () {
                  if (null === t.c) {
                    var e = t.u;
                    if (!t.i) {
                      var n = se(e);
                      (e = (function (t, e, n) {
                        var r = arguments,
                          i = document,
                          o = String(r[0]),
                          a = r[1];
                        if (!ae && a && (a.name || a.type)) {
                          if (
                            ((o = ['<', o]),
                            a.name && o.push(' name="', Bt(a.name), '"'),
                            a.type)
                          ) {
                            o.push(' type="', Bt(a.type), '"');
                            var s = {};
                            gt(s, a), delete s.type, (a = s);
                          }
                          o.push('>'), (o = o.join(''));
                        }
                        return (
                          (o = pe(i, o)),
                          a &&
                            ('string' === typeof a
                              ? (o.className = a)
                              : Array.isArray(a)
                              ? (o.className = a.join(' '))
                              : ue(o, a)),
                          2 < r.length && fe(i, o, r),
                          o
                        );
                      })('DIV')),
                        n.appendChild(e);
                    }
                    t.c = t.g.render(e, t.a);
                  }
                  return t.c;
                })
              );
            }),
            (e.verify = function () {
              Fl(this);
              var t = this;
              return Ml(
                this,
                this.render().then(function (e) {
                  return new we(function (n) {
                    var r = t.g.getResponse(e);
                    if (r) n(r);
                    else {
                      t.l.push(function e(r) {
                        r &&
                          ((function (t, e) {
                            X(t.l, function (t) {
                              return t == e;
                            });
                          })(t, e),
                          n(r));
                      }),
                        t.i && t.g.execute(t.c);
                    }
                  });
                })
              );
            }),
            (e.reset = function () {
              Fl(this), null !== this.c && this.g.reset(this.c);
            }),
            (e.clear = function () {
              Fl(this), (this.D = !0), this.m.c();
              for (var t = 0; t < this.h.length; t++)
                this.h[t].cancel(
                  'RecaptchaVerifier instance has been destroyed.'
                );
              if (!this.i) {
                t = se(this.u);
                for (var e; (e = t.firstChild); ) t.removeChild(e);
              }
            }),
            I(jl, Pl);
          var Vl =
            'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
              ' '
            );

          function Wl(t, e) {
            return {
              name: t || '',
              J: 'a valid string',
              optional: !!e,
              K: function (t) {
                return 'string' === typeof t;
              },
            };
          }

          function ql(t, e) {
            return {
              name: t || '',
              J: 'a boolean',
              optional: !!e,
              K: function (t) {
                return 'boolean' === typeof t;
              },
            };
          }

          function Bl(t, e) {
            return {
              name: t || '',
              J: 'a valid object',
              optional: !!e,
              K: y,
            };
          }

          function Hl(t, e) {
            return {
              name: t || '',
              J: 'a function',
              optional: !!e,
              K: v,
            };
          }

          function Ql(t, e) {
            return {
              name: t || '',
              J: 'null',
              optional: !!e,
              K: function (t) {
                return null === t;
              },
            };
          }

          function Kl(t) {
            return {
              name: t ? t + 'Credential' : 'credential',
              J: t ? 'a valid ' + t + ' credential' : 'a valid credential',
              optional: !1,
              K: function (e) {
                if (!e) return !1;
                var n = !t || e.providerId === t;
                return !(!e.ia || !n);
              },
            };
          }

          function Gl(t, e) {
            return (
              y(t) && 'string' === typeof t.type && t.type === e && v(t.Fa)
            );
          }

          function zl(t) {
            return y(t) && 'string' === typeof t.uid;
          }

          function Yl() {
            return {
              name: 'applicationVerifier',
              J: 'an implementation of firebase.auth.ApplicationVerifier',
              optional: !1,
              K: function (t) {
                return !(!t || 'string' !== typeof t.type || !v(t.verify));
              },
            };
          }

          function Xl(t, e, n, r) {
            return {
              name: n || '',
              J: t.J + ' or ' + e.J,
              optional: !!r,
              K: function (n) {
                return t.K(n) || e.K(n);
              },
            };
          }

          function $l(t, e) {
            for (var n in e) {
              var r = e[n].name;
              t[r] = tf(r, t[n], e[n].j);
            }
          }

          function Jl(t, e) {
            for (var n in e) {
              var r = e[n].name;
              r !== n &&
                Object.defineProperty(t, r, {
                  get: C(function (t) {
                    return this[t];
                  }, n),
                  set: C(
                    function (t, e, n, r) {
                      Ul(t, [n], [r], !0), (this[e] = r);
                    },
                    r,
                    n,
                    e[n].gb
                  ),
                  enumerable: !0,
                });
            }
          }

          function Zl(t, e, n, r) {
            t[e] = tf(e, n, r);
          }

          function tf(t, e, n) {
            function r() {
              var t = Array.prototype.slice.call(arguments);
              return Ul(o, n, t), e.apply(this, t);
            }
            if (!n) return e;
            var i,
              o = (function (t) {
                return (t = t.split('.'))[t.length - 1];
              })(t);
            for (i in e) r[i] = e[i];
            for (i in e.prototype) r.prototype[i] = e.prototype[i];
            return r;
          }
          $l(rl.prototype, {
            fb: {
              name: 'applyActionCode',
              j: [Wl('code')],
            },
            Pa: {
              name: 'checkActionCode',
              j: [Wl('code')],
            },
            jb: {
              name: 'confirmPasswordReset',
              j: [Wl('code'), Wl('newPassword')],
            },
            cc: {
              name: 'createUserWithEmailAndPassword',
              j: [Wl('email'), Wl('password')],
            },
            fc: {
              name: 'fetchSignInMethodsForEmail',
              j: [Wl('email')],
            },
            pa: {
              name: 'getRedirectResult',
              j: [],
            },
            zc: {
              name: 'isSignInWithEmailLink',
              j: [Wl('emailLink')],
            },
            Fc: {
              name: 'onAuthStateChanged',
              j: [
                Xl(Bl(), Hl(), 'nextOrObserver'),
                Hl('opt_error', !0),
                Hl('opt_completed', !0),
              ],
            },
            Gc: {
              name: 'onIdTokenChanged',
              j: [
                Xl(Bl(), Hl(), 'nextOrObserver'),
                Hl('opt_error', !0),
                Hl('opt_completed', !0),
              ],
            },
            rb: {
              name: 'sendPasswordResetEmail',
              j: [
                Wl('email'),
                Xl(
                  Bl('opt_actionCodeSettings', !0),
                  Ql(null, !0),
                  'opt_actionCodeSettings',
                  !0
                ),
              ],
            },
            sb: {
              name: 'sendSignInLinkToEmail',
              j: [Wl('email'), Bl('actionCodeSettings')],
            },
            tb: {
              name: 'setPersistence',
              j: [Wl('persistence')],
            },
            Qc: {
              name: 'signInAndRetrieveDataWithCredential',
              j: [Kl()],
            },
            vb: {
              name: 'signInAnonymously',
              j: [],
            },
            Ya: {
              name: 'signInWithCredential',
              j: [Kl()],
            },
            Rc: {
              name: 'signInWithCustomToken',
              j: [Wl('token')],
            },
            Sc: {
              name: 'signInWithEmailAndPassword',
              j: [Wl('email'), Wl('password')],
            },
            Tc: {
              name: 'signInWithEmailLink',
              j: [Wl('email'), Wl('emailLink', !0)],
            },
            Uc: {
              name: 'signInWithPhoneNumber',
              j: [Wl('phoneNumber'), Yl()],
            },
            Vc: {
              name: 'signInWithPopup',
              j: [
                {
                  name: 'authProvider',
                  J: 'a valid Auth provider',
                  optional: !1,
                  K: function (t) {
                    return !!(
                      t &&
                      t.providerId &&
                      t.hasOwnProperty &&
                      t.hasOwnProperty('isOAuthProvider')
                    );
                  },
                },
              ],
            },
            Wc: {
              name: 'signInWithRedirect',
              j: [
                {
                  name: 'authProvider',
                  J: 'a valid Auth provider',
                  optional: !1,
                  K: function (t) {
                    return !!(
                      t &&
                      t.providerId &&
                      t.hasOwnProperty &&
                      t.hasOwnProperty('isOAuthProvider')
                    );
                  },
                },
              ],
            },
            bd: {
              name: 'updateCurrentUser',
              j: [
                Xl(
                  {
                    name: 'user',
                    J: 'an instance of Firebase User',
                    optional: !1,
                    K: function (t) {
                      return !!(t && t instanceof mh);
                    },
                  },
                  Ql(),
                  'user'
                ),
              ],
            },
            wb: {
              name: 'signOut',
              j: [],
            },
            toJSON: {
              name: 'toJSON',
              j: [Wl(null, !0)],
            },
            dd: {
              name: 'useDeviceLanguage',
              j: [],
            },
            fd: {
              name: 'verifyPasswordResetCode',
              j: [Wl('code')],
            },
          }),
            Jl(rl.prototype, {
              lc: {
                name: 'languageCode',
                gb: Xl(Wl(), Ql(), 'languageCode'),
              },
              ti: {
                name: 'tenantId',
                gb: Xl(Wl(), Ql(), 'tenantId'),
              },
            }),
            (rl.Persistence = Ju),
            (rl.Persistence.LOCAL = 'local'),
            (rl.Persistence.SESSION = 'session'),
            (rl.Persistence.NONE = 'none'),
            $l(mh.prototype, {
              delete: {
                name: 'delete',
                j: [],
              },
              mc: {
                name: 'getIdTokenResult',
                j: [ql('opt_forceRefresh', !0)],
              },
              I: {
                name: 'getIdToken',
                j: [ql('opt_forceRefresh', !0)],
              },
              Ac: {
                name: 'linkAndRetrieveDataWithCredential',
                j: [Kl()],
              },
              mb: {
                name: 'linkWithCredential',
                j: [Kl()],
              },
              Bc: {
                name: 'linkWithPhoneNumber',
                j: [Wl('phoneNumber'), Yl()],
              },
              Cc: {
                name: 'linkWithPopup',
                j: [
                  {
                    name: 'authProvider',
                    J: 'a valid Auth provider',
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              Dc: {
                name: 'linkWithRedirect',
                j: [
                  {
                    name: 'authProvider',
                    J: 'a valid Auth provider',
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              Jc: {
                name: 'reauthenticateAndRetrieveDataWithCredential',
                j: [Kl()],
              },
              pb: {
                name: 'reauthenticateWithCredential',
                j: [Kl()],
              },
              Kc: {
                name: 'reauthenticateWithPhoneNumber',
                j: [Wl('phoneNumber'), Yl()],
              },
              Lc: {
                name: 'reauthenticateWithPopup',
                j: [
                  {
                    name: 'authProvider',
                    J: 'a valid Auth provider',
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              Mc: {
                name: 'reauthenticateWithRedirect',
                j: [
                  {
                    name: 'authProvider',
                    J: 'a valid Auth provider',
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              reload: {
                name: 'reload',
                j: [],
              },
              qb: {
                name: 'sendEmailVerification',
                j: [
                  Xl(
                    Bl('opt_actionCodeSettings', !0),
                    Ql(null, !0),
                    'opt_actionCodeSettings',
                    !0
                  ),
                ],
              },
              toJSON: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
              ad: {
                name: 'unlink',
                j: [Wl('provider')],
              },
              xb: {
                name: 'updateEmail',
                j: [Wl('email')],
              },
              yb: {
                name: 'updatePassword',
                j: [Wl('password')],
              },
              cd: {
                name: 'updatePhoneNumber',
                j: [Kl('phone')],
              },
              zb: {
                name: 'updateProfile',
                j: [Bl('profile')],
              },
              Ab: {
                name: 'verifyBeforeUpdateEmail',
                j: [
                  Wl('email'),
                  Xl(
                    Bl('opt_actionCodeSettings', !0),
                    Ql(null, !0),
                    'opt_actionCodeSettings',
                    !0
                  ),
                ],
              },
            }),
            $l(gl.prototype, {
              execute: {
                name: 'execute',
              },
              render: {
                name: 'render',
              },
              reset: {
                name: 'reset',
              },
              getResponse: {
                name: 'getResponse',
              },
            }),
            $l(yl.prototype, {
              execute: {
                name: 'execute',
              },
              render: {
                name: 'render',
              },
              reset: {
                name: 'reset',
              },
              getResponse: {
                name: 'getResponse',
              },
            }),
            $l(we.prototype, {
              ma: {
                name: 'finally',
              },
              o: {
                name: 'catch',
              },
              then: {
                name: 'then',
              },
            }),
            Jl(Yc.prototype, {
              appVerificationDisabled: {
                name: 'appVerificationDisabledForTesting',
                gb: ql('appVerificationDisabledForTesting'),
              },
            }),
            $l(Xc.prototype, {
              confirm: {
                name: 'confirm',
                j: [Wl('verificationCode')],
              },
            }),
            Zl(
              ho,
              'fromJSON',
              function (t) {
                t = 'string' === typeof t ? JSON.parse(t) : t;
                for (var e, n = [mo, ko, Mo, vo], r = 0; r < n.length; r++)
                  if ((e = n[r](t))) return e;
                return null;
              },
              [Xl(Wl(), Bl(), 'json')]
            ),
            Zl(
              xo,
              'credential',
              function (t, e) {
                return new Po(t, e);
              },
              [Wl('email'), Wl('password')]
            ),
            $l(Po.prototype, {
              v: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(Eo.prototype, {
              Aa: {
                name: 'addScope',
                j: [Wl('scope')],
              },
              Ia: {
                name: 'setCustomParameters',
                j: [Bl('customOAuthParameters')],
              },
            }),
            Zl(Eo, 'credential', Co, [Xl(Wl(), Bl(), 'token')]),
            Zl(xo, 'credentialWithLink', Ro, [Wl('email'), Wl('emailLink')]),
            $l(So.prototype, {
              Aa: {
                name: 'addScope',
                j: [Wl('scope')],
              },
              Ia: {
                name: 'setCustomParameters',
                j: [Bl('customOAuthParameters')],
              },
            }),
            Zl(So, 'credential', Io, [Xl(Wl(), Bl(), 'token')]),
            $l(To.prototype, {
              Aa: {
                name: 'addScope',
                j: [Wl('scope')],
              },
              Ia: {
                name: 'setCustomParameters',
                j: [Bl('customOAuthParameters')],
              },
            }),
            Zl(To, 'credential', No, [
              Xl(Wl(), Xl(Bl(), Ql()), 'idToken'),
              Xl(Wl(), Ql(), 'accessToken', !0),
            ]),
            $l(Ao.prototype, {
              Ia: {
                name: 'setCustomParameters',
                j: [Bl('customOAuthParameters')],
              },
            }),
            Zl(Ao, 'credential', Oo, [
              Xl(Wl(), Bl(), 'token'),
              Wl('secret', !0),
            ]),
            $l(wo.prototype, {
              Aa: {
                name: 'addScope',
                j: [Wl('scope')],
              },
              credential: {
                name: 'credential',
                j: [
                  Xl(Wl(), Xl(Bl(), Ql()), 'optionsOrIdToken'),
                  Xl(Wl(), Ql(), 'accessToken', !0),
                ],
              },
              Ia: {
                name: 'setCustomParameters',
                j: [Bl('customOAuthParameters')],
              },
            }),
            $l(yo.prototype, {
              v: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(fo.prototype, {
              v: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            Zl(jo, 'credential', Uo, [
              Wl('verificationId'),
              Wl('verificationCode'),
            ]),
            $l(jo.prototype, {
              cb: {
                name: 'verifyPhoneNumber',
                j: [
                  Xl(
                    Wl(),
                    {
                      name: 'phoneInfoOptions',
                      J: 'valid phone info options',
                      optional: !1,
                      K: function (t) {
                        return (
                          !!t &&
                          (t.session && t.phoneNumber
                            ? Gl(t.session, uo) &&
                              'string' === typeof t.phoneNumber
                            : t.session && t.multiFactorHint
                            ? Gl(t.session, co) && zl(t.multiFactorHint)
                            : t.session && t.multiFactorUid
                            ? Gl(t.session, co) &&
                              'string' === typeof t.multiFactorUid
                            : !!t.phoneNumber &&
                              'string' === typeof t.phoneNumber)
                        );
                      },
                    },
                    'phoneInfoOptions'
                  ),
                  Yl(),
                ],
              },
            }),
            $l(Lo.prototype, {
              v: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(T.prototype, {
              toJSON: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(zo.prototype, {
              toJSON: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(Go.prototype, {
              toJSON: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(nh.prototype, {
              toJSON: {
                name: 'toJSON',
                j: [Wl(null, !0)],
              },
            }),
            $l(Zc.prototype, {
              Pc: {
                name: 'resolveSignIn',
                j: [
                  {
                    name: 'multiFactorAssertion',
                    J: 'a valid multiFactorAssertion',
                    optional: !1,
                    K: function (t) {
                      return !!t && !!t.ob;
                    },
                  },
                ],
              },
            }),
            $l(uh.prototype, {
              Ob: {
                name: 'getSession',
                j: [],
              },
              dc: {
                name: 'enroll',
                j: [
                  {
                    name: 'multiFactorAssertion',
                    J: 'a valid multiFactorAssertion',
                    optional: !1,
                    K: function (t) {
                      return !!t && !!t.ob;
                    },
                  },
                  Wl('displayName', !0),
                ],
              },
              $c: {
                name: 'unenroll',
                j: [
                  Xl(
                    {
                      name: 'multiFactorInfo',
                      J: 'a valid multiFactorInfo',
                      optional: !1,
                      K: zl,
                    },
                    Wl(),
                    'multiFactorInfoIdentifier'
                  ),
                ],
              },
            }),
            $l(jl.prototype, {
              clear: {
                name: 'clear',
                j: [],
              },
              render: {
                name: 'render',
                j: [],
              },
              verify: {
                name: 'verify',
                j: [],
              },
            }),
            Zl(Ei, 'parseLink', Pi, [Wl('link')]),
            Zl(
              Cl,
              'assertion',
              function (t) {
                return new ah(t);
              },
              [Kl('phone')]
            ),
            (function () {
              if (
                'undefined' === typeof r.a ||
                !r.a.INTERNAL ||
                !r.a.INTERNAL.registerComponent
              )
                throw Error(
                  'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
                );
              var t = {
                ActionCodeInfo: {
                  Operation: {
                    EMAIL_SIGNIN: hi,
                    PASSWORD_RESET: 'PASSWORD_RESET',
                    RECOVER_EMAIL: 'RECOVER_EMAIL',
                    REVERT_SECOND_FACTOR_ADDITION: ci,
                    VERIFY_AND_CHANGE_EMAIL: li,
                    VERIFY_EMAIL: 'VERIFY_EMAIL',
                  },
                },
                Auth: rl,
                AuthCredential: ho,
                Error: T,
              };
              Zl(t, 'EmailAuthProvider', xo, []),
                Zl(t, 'FacebookAuthProvider', Eo, []),
                Zl(t, 'GithubAuthProvider', So, []),
                Zl(t, 'GoogleAuthProvider', To, []),
                Zl(t, 'TwitterAuthProvider', Ao, []),
                Zl(t, 'OAuthProvider', wo, [Wl('providerId')]),
                Zl(t, 'SAMLAuthProvider', bo, [Wl('providerId')]),
                Zl(t, 'PhoneAuthProvider', jo, [
                  {
                    name: 'auth',
                    J: 'an instance of Firebase Auth',
                    optional: !0,
                    K: function (t) {
                      return !!(t && t instanceof rl);
                    },
                  },
                ]),
                Zl(t, 'RecaptchaVerifier', jl, [
                  Xl(
                    Wl(),
                    {
                      name: '',
                      J: 'an HTML element',
                      optional: !1,
                      K: function (t) {
                        return !!(t && t instanceof Element);
                      },
                    },
                    'recaptchaContainer'
                  ),
                  Bl('recaptchaParameters', !0),
                  {
                    name: 'app',
                    J: 'an instance of Firebase App',
                    optional: !0,
                    K: function (t) {
                      return !!(t && t instanceof r.a.app.App);
                    },
                  },
                ]),
                Zl(t, 'ActionCodeURL', Ei, []),
                Zl(t, 'PhoneMultiFactorGenerator', Cl, []),
                r.a.INTERNAL.registerComponent({
                  name: 'auth',
                  instanceFactory: function (t) {
                    return new rl((t = t.getProvider('app').getImmediate()));
                  },
                  multipleInstances: !1,
                  serviceProps: t,
                  instantiationMode: 'LAZY',
                  type: 'PUBLIC',
                }),
                r.a.INTERNAL.registerComponent({
                  name: 'auth-internal',
                  instanceFactory: function (t) {
                    return {
                      getUid: E(
                        (t = t.getProvider('auth').getImmediate()).getUid,
                        t
                      ),
                      getToken: E(t.kc, t),
                      addAuthTokenListener: E(t.bc, t),
                      removeAuthTokenListener: E(t.Nc, t),
                    };
                  },
                  multipleInstances: !1,
                  instantiationMode: 'LAZY',
                  type: 'PRIVATE',
                }),
                r.a.registerVersion('@firebase/auth', '0.14.1'),
                r.a.INTERNAL.extendNamespace({
                  User: mh,
                });
            })();
        }.apply(
          'undefined' !== typeof t
            ? t
            : 'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : {}
        ));
      }.call(this, n(27)));
    },
    116: function (t, e, n) {
      var r = n(101);
      t.exports = function (t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    117: function (t, e, n) {
      var r = n(65)(Object, 'create');
      t.exports = r;
    },
    118: function (t, e, n) {
      var r = n(404);
      t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
      };
    },
    119: function (t, e, n) {
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var i = n(61),
        o = n(55);
      t.exports = function (t) {
        return 'symbol' == r(t) || (o(t) && '[object Symbol]' == i(t));
      };
    },
    131: function (t, e, n) {
      var r = n(156);
      t.exports = function (t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i;
      };
    },
    138: function (t, e, n) {
      var r = n(379),
        i = n(55),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        u = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (t) {
              return i(t) && a.call(t, 'callee') && !s.call(t, 'callee');
            };
      t.exports = u;
    },
    139: function (t, e, n) {
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var i = n(384),
        o = n(417),
        a = n(159),
        s = n(26),
        u = n(423);
      t.exports = function (t) {
        return 'function' == typeof t
          ? t
          : null == t
          ? a
          : 'object' == r(t)
          ? s(t)
            ? o(t[0], t[1])
            : i(t)
          : u(t);
      };
    },
    150: function (t, e, n) {
      (function (t) {
        function r(t) {
          return (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        var i = n(33),
          o = n(380),
          a = 'object' == r(e) && e && !e.nodeType && e,
          s = a && 'object' == r(t) && t && !t.nodeType && t,
          u = s && s.exports === a ? i.Buffer : void 0,
          c = (u ? u.isBuffer : void 0) || o;
        t.exports = c;
      }.call(this, n(99)(t)));
    },
    151: function (t, e) {
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var r = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, e) {
        var i = n(t);
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ('number' == i || ('symbol' != i && r.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    152: function (t, e) {
      t.exports = function (t) {
        return (
          'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    153: function (t, e, n) {
      var r = n(61),
        i = n(56);
      t.exports = function (t) {
        if (!i(t)) return !1;
        var e = r(t);
        return (
          '[object Function]' == e ||
          '[object GeneratorFunction]' == e ||
          '[object AsyncFunction]' == e ||
          '[object Proxy]' == e
        );
      };
    },
    154: function (t, e, n) {
      var r = n(65)(n(33), 'Map');
      t.exports = r;
    },
    155: function (t, e, n) {
      var r = n(396),
        i = n(403),
        o = n(405),
        a = n(406),
        s = n(407);

      function u(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = a),
        (u.prototype.set = s),
        (t.exports = u);
    },
    156: function (t, e, n) {
      var r = n(157),
        i = n(102);
      t.exports = function (t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
          t = t[i(e[n++])];
        return n && n == o ? t : void 0;
      };
    },
    157: function (t, e, n) {
      var r = n(26),
        i = n(158),
        o = n(418),
        a = n(209);
      t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t));
      };
    },
    158: function (t, e, n) {
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var i = n(26),
        o = n(119),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
      t.exports = function (t, e) {
        if (i(t)) return !1;
        var n = r(t);
        return (
          !(
            'number' != n &&
            'symbol' != n &&
            'boolean' != n &&
            null != t &&
            !o(t)
          ) ||
          s.test(t) ||
          !a.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    159: function (t, e) {
      t.exports = function (t) {
        return t;
      };
    },
    176: function (t, e, n) {
      var r = n(381),
        i = n(226),
        o = n(291),
        a = o && o.isTypedArray,
        s = a ? i(a) : r;
      t.exports = s;
    },
    177: function (t, e, n) {
      var r = n(115),
        i = n(391),
        o = n(392),
        a = n(393),
        s = n(394),
        u = n(395);

      function c(t) {
        var e = (this.__data__ = new r(t));
        this.size = e.size;
      }
      (c.prototype.clear = i),
        (c.prototype.delete = o),
        (c.prototype.get = a),
        (c.prototype.has = s),
        (c.prototype.set = u),
        (t.exports = c);
    },
    190: function (t, e, n) {
      (function (e) {
        function n(t) {
          return (n =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        var r =
          'object' == ('undefined' === typeof e ? 'undefined' : n(e)) &&
          e &&
          e.Object === Object &&
          e;
        t.exports = r;
      }.call(this, n(27)));
    },
    191: function (t, e) {
      var n = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + '';
          } catch (e) {}
        }
        return '';
      };
    },
    192: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
          i[n] = e(t[n], n, t);
        return i;
      };
    },
    193: function (t, e, n) {
      var r = n(300);
      t.exports = function (t, e, n) {
        '__proto__' == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    206: function (t, e, n) {
      var r = n(376),
        i = n(383)(r);
      t.exports = i;
    },
    207: function (t, e) {
      var n = Object.prototype;
      t.exports = function (t) {
        var e = t && t.constructor;
        return t === (('function' == typeof e && e.prototype) || n);
      };
    },
    208: function (t, e, n) {
      var r = n(408),
        i = n(55);
      t.exports = function t(e, n, o, a, s) {
        return (
          e === n ||
          (null == e || null == n || (!i(e) && !i(n))
            ? e !== e && n !== n
            : r(e, n, o, a, t, s))
        );
      };
    },
    209: function (t, e, n) {
      var r = n(332);
      t.exports = function (t) {
        return null == t ? '' : r(t);
      };
    },
    226: function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    227: function (t, e, n) {
      var r = n(323),
        i = n(324),
        o = n(325);
      t.exports = function (t, e, n, a, s, u) {
        var c = 1 & n,
          h = t.length,
          l = e.length;
        if (h != l && !(c && l > h)) return !1;
        var f = u.get(t),
          p = u.get(e);
        if (f && p) return f == e && p == t;
        var d = -1,
          v = !0,
          y = 2 & n ? new r() : void 0;
        for (u.set(t, e), u.set(e, t); ++d < h; ) {
          var g = t[d],
            m = e[d];
          if (a) var _ = c ? a(m, g, d, e, t, u) : a(g, m, d, t, e, u);
          if (void 0 !== _) {
            if (_) continue;
            v = !1;
            break;
          }
          if (y) {
            if (
              !i(e, function (t, e) {
                if (!o(y, e) && (g === t || s(g, t, n, a, u))) return y.push(e);
              })
            ) {
              v = !1;
              break;
            }
          } else if (g !== m && !s(g, m, n, a, u)) {
            v = !1;
            break;
          }
        }
        return u.delete(t), u.delete(e), v;
      };
    },
    228: function (t, e, n) {
      var r = n(414),
        i = n(154),
        o = n(415),
        a = n(330),
        s = n(331),
        u = n(61),
        c = n(191),
        h = '[object Map]',
        l = '[object Promise]',
        f = '[object Set]',
        p = '[object WeakMap]',
        d = '[object DataView]',
        v = c(r),
        y = c(i),
        g = c(o),
        m = c(a),
        _ = c(s),
        b = u;
      ((r && b(new r(new ArrayBuffer(1))) != d) ||
        (i && b(new i()) != h) ||
        (o && b(o.resolve()) != l) ||
        (a && b(new a()) != f) ||
        (s && b(new s()) != p)) &&
        (b = function (t) {
          var e = u(t),
            n = '[object Object]' == e ? t.constructor : void 0,
            r = n ? c(n) : '';
          if (r)
            switch (r) {
              case v:
                return d;
              case y:
                return h;
              case g:
                return l;
              case m:
                return f;
              case _:
                return p;
            }
          return e;
        }),
        (t.exports = b);
    },
    229: function (t, e, n) {
      var r = n(56);
      t.exports = function (t) {
        return t === t && !r(t);
      };
    },
    230: function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    259: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
        return t;
      };
    },
    26: function (t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    260: function (t, e, n) {
      var r = n(193),
        i = n(101),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n) {
        var a = t[e];
        (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
      };
    },
    262: function (t, e) {
      (function (e) {
        t.exports = e;
      }.call(this, {}));
    },
    265: function (t, e) {
      t.exports = function (t) {
        return null == t;
      };
    },
    266: function (t, e, n) {
      var r = n(61),
        i = n(55);
      t.exports = function (t) {
        return 'number' == typeof t || (i(t) && '[object Number]' == r(t));
      };
    },
    267: function (t, e, n) {
      var r = n(568),
        i = n(206),
        o = n(139),
        a = n(569),
        s = n(26);
      t.exports = function (t, e, n) {
        var u = s(t) ? r : a,
          c = arguments.length < 3;
        return u(t, o(e, 4), n, c, i);
      };
    },
    268: function (t, e, n) {
      var r = n(61),
        i = n(26),
        o = n(55);
      t.exports = function (t) {
        return (
          'string' == typeof t || (!i(t) && o(t) && '[object String]' == r(t))
        );
      };
    },
    269: function (t, e, n) {
      var r = n(260),
        i = n(588);
      t.exports = function (t, e) {
        return i(t || [], e || [], r);
      };
    },
    27: function (t, e) {
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function('return this')();
      } catch (i) {
        'object' ===
          ('undefined' === typeof window ? 'undefined' : n(window)) &&
          (r = window);
      }
      t.exports = r;
    },
    287: function (t, e, n) {
      var r = n(82),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = o.call(t, s),
          n = t[s];
        try {
          t[s] = void 0;
          var r = !0;
        } catch (u) {}
        var i = a.call(t);
        return r && (e ? (t[s] = n) : delete t[s]), i;
      };
    },
    288: function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        return n.call(t);
      };
    },
    289: function (t, e, n) {
      var r = n(377)();
      t.exports = r;
    },
    290: function (t, e, n) {
      var r = n(378),
        i = n(138),
        o = n(26),
        a = n(150),
        s = n(151),
        u = n(176),
        c = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = o(t),
          h = !n && i(t),
          l = !n && !h && a(t),
          f = !n && !h && !l && u(t),
          p = n || h || l || f,
          d = p ? r(t.length, String) : [],
          v = d.length;
        for (var y in t)
          (!e && !c.call(t, y)) ||
            (p &&
              ('length' == y ||
                (l && ('offset' == y || 'parent' == y)) ||
                (f &&
                  ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
                s(y, v))) ||
            d.push(y);
        return d;
      };
    },
    291: function (t, e, n) {
      (function (t) {
        function r(t) {
          return (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        var i = n(190),
          o = 'object' == r(e) && e && !e.nodeType && e,
          a = o && 'object' == r(t) && t && !t.nodeType && t,
          s = a && a.exports === o && i.process,
          u = (function () {
            try {
              var t = a && a.require && a.require('util').types;
              return t || (s && s.binding && s.binding('util'));
            } catch (e) {}
          })();
        t.exports = u;
      }.call(this, n(99)(t)));
    },
    292: function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    293: function (t, e, n) {
      var r = n(153),
        i = n(294),
        o = n(56),
        a = n(191),
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        c = Object.prototype,
        h = u.toString,
        l = c.hasOwnProperty,
        f = RegExp(
          '^' +
            h
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      t.exports = function (t) {
        return !(!o(t) || i(t)) && (r(t) ? f : s).test(a(t));
      };
    },
    294: function (t, e, n) {
      var r,
        i = n(295),
        o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + r
          : '';
      t.exports = function (t) {
        return !!o && o in t;
      };
    },
    295: function (t, e, n) {
      var r = n(33)['__core-js_shared__'];
      t.exports = r;
    },
    296: function (t, e) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    297: function (t, e, n) {
      var r = n(33).Uint8Array;
      t.exports = r;
    },
    298: function (t, e) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      };
    },
    299: function (t, e, n) {
      var r = n(328),
        i = n(329),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        s = a
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  r(a(t), function (e) {
                    return o.call(t, e);
                  }));
            }
          : i;
      t.exports = s;
    },
    300: function (t, e, n) {
      var r = n(65),
        i = (function () {
          try {
            var t = r(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (e) {}
        })();
      t.exports = i;
    },
    322: function (t, e, n) {
      var r = n(207),
        i = n(382),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t))
          o.call(t, n) && 'constructor' != n && e.push(n);
        return e;
      };
    },
    323: function (t, e, n) {
      var r = n(155),
        i = n(409),
        o = n(410);

      function a(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
      }
      (a.prototype.add = a.prototype.push = i),
        (a.prototype.has = o),
        (t.exports = a);
    },
    324: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
    },
    325: function (t, e) {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    326: function (t, e, n) {
      var r = n(327),
        i = n(299),
        o = n(83);
      t.exports = function (t) {
        return r(t, o, i);
      };
    },
    327: function (t, e, n) {
      var r = n(259),
        i = n(26);
      t.exports = function (t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t));
      };
    },
    328: function (t, e) {
      t.exports = function (t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
          ++n < r;

        ) {
          var a = t[n];
          e(a, n, t) && (o[i++] = a);
        }
        return o;
      };
    },
    329: function (t, e) {
      t.exports = function () {
        return [];
      };
    },
    33: function (t, e, n) {
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var i = n(190),
        o =
          'object' == ('undefined' === typeof self ? 'undefined' : r(self)) &&
          self &&
          self.Object === Object &&
          self,
        a = i || o || Function('return this')();
      t.exports = a;
    },
    330: function (t, e, n) {
      var r = n(65)(n(33), 'Set');
      t.exports = r;
    },
    331: function (t, e, n) {
      var r = n(65)(n(33), 'WeakMap');
      t.exports = r;
    },
    332: function (t, e, n) {
      var r = n(82),
        i = n(192),
        o = n(26),
        a = n(119),
        s = r ? r.prototype : void 0,
        u = s ? s.toString : void 0;
      t.exports = function t(e) {
        if ('string' == typeof e) return e;
        if (o(e)) return i(e, t) + '';
        if (a(e)) return u ? u.call(e) : '';
        var n = e + '';
        return '0' == n && 1 / e == -Infinity ? '-0' : n;
      };
    },
    333: function (t, e, n) {
      var r = n(421),
        i = n(422);
      t.exports = function (t, e) {
        return null != t && i(t, e, r);
      };
    },
    376: function (t, e, n) {
      var r = n(289),
        i = n(83);
      t.exports = function (t, e) {
        return t && r(t, e, i);
      };
    },
    377: function (t, e) {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
            var u = a[t ? s : ++i];
            if (!1 === n(o[u], u, o)) break;
          }
          return e;
        };
      };
    },
    378: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    379: function (t, e, n) {
      var r = n(61),
        i = n(55);
      t.exports = function (t) {
        return i(t) && '[object Arguments]' == r(t);
      };
    },
    380: function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
    381: function (t, e, n) {
      var r = n(61),
        i = n(152),
        o = n(55),
        a = {};
      (a['[object Float32Array]'] =
        a['[object Float64Array]'] =
        a['[object Int8Array]'] =
        a['[object Int16Array]'] =
        a['[object Int32Array]'] =
        a['[object Uint8Array]'] =
        a['[object Uint8ClampedArray]'] =
        a['[object Uint16Array]'] =
        a['[object Uint32Array]'] =
          !0),
        (a['[object Arguments]'] =
          a['[object Array]'] =
          a['[object ArrayBuffer]'] =
          a['[object Boolean]'] =
          a['[object DataView]'] =
          a['[object Date]'] =
          a['[object Error]'] =
          a['[object Function]'] =
          a['[object Map]'] =
          a['[object Number]'] =
          a['[object Object]'] =
          a['[object RegExp]'] =
          a['[object Set]'] =
          a['[object String]'] =
          a['[object WeakMap]'] =
            !1),
        (t.exports = function (t) {
          return o(t) && i(t.length) && !!a[r(t)];
        });
    },
    382: function (t, e, n) {
      var r = n(292)(Object.keys, Object);
      t.exports = r;
    },
    383: function (t, e, n) {
      var r = n(100);
      t.exports = function (t, e) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return t(n, i);
          for (
            var o = n.length, a = e ? o : -1, s = Object(n);
            (e ? a-- : ++a < o) && !1 !== i(s[a], a, s);

          );
          return n;
        };
      };
    },
    384: function (t, e, n) {
      var r = n(385),
        i = n(416),
        o = n(230);
      t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2]
          ? o(e[0][0], e[0][1])
          : function (n) {
              return n === t || r(n, t, e);
            };
      };
    },
    385: function (t, e, n) {
      var r = n(177),
        i = n(208);
      t.exports = function (t, e, n, o) {
        var a = n.length,
          s = a,
          u = !o;
        if (null == t) return !s;
        for (t = Object(t); a--; ) {
          var c = n[a];
          if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
        }
        for (; ++a < s; ) {
          var h = (c = n[a])[0],
            l = t[h],
            f = c[1];
          if (u && c[2]) {
            if (void 0 === l && !(h in t)) return !1;
          } else {
            var p = new r();
            if (o) var d = o(l, f, h, t, e, p);
            if (!(void 0 === d ? i(f, l, 3, o, p) : d)) return !1;
          }
        }
        return !0;
      };
    },
    386: function (t, e) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    387: function (t, e, n) {
      var r = n(116),
        i = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0)
        );
      };
    },
    388: function (t, e, n) {
      var r = n(116);
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    389: function (t, e, n) {
      var r = n(116);
      t.exports = function (t) {
        return r(this.__data__, t) > -1;
      };
    },
    390: function (t, e, n) {
      var r = n(116);
      t.exports = function (t, e) {
        var n = this.__data__,
          i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
      };
    },
    391: function (t, e, n) {
      var r = n(115);
      t.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    392: function (t, e) {
      t.exports = function (t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    393: function (t, e) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    394: function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    395: function (t, e, n) {
      var r = n(115),
        i = n(154),
        o = n(155);
      t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
          var a = n.__data__;
          if (!i || a.length < 199)
            return a.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new o(a);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    396: function (t, e, n) {
      var r = n(397),
        i = n(115),
        o = n(154);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (o || i)(),
            string: new r(),
          });
      };
    },
    397: function (t, e, n) {
      var r = n(398),
        i = n(399),
        o = n(400),
        a = n(401),
        s = n(402);

      function u(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = a),
        (u.prototype.set = s),
        (t.exports = u);
    },
    398: function (t, e, n) {
      var r = n(117);
      t.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    399: function (t, e) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    400: function (t, e, n) {
      var r = n(117),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return '__lodash_hash_undefined__' === n ? void 0 : n;
        }
        return i.call(e, t) ? e[t] : void 0;
      };
    },
    401: function (t, e, n) {
      var r = n(117),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t);
      };
    },
    402: function (t, e, n) {
      var r = n(117);
      t.exports = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = r && void 0 === e ? '__lodash_hash_undefined__' : e),
          this
        );
      };
    },
    403: function (t, e, n) {
      var r = n(118);
      t.exports = function (t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    404: function (t, e) {
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      t.exports = function (t) {
        var e = n(t);
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
          ? '__proto__' !== t
          : null === t;
      };
    },
    405: function (t, e, n) {
      var r = n(118);
      t.exports = function (t) {
        return r(this, t).get(t);
      };
    },
    406: function (t, e, n) {
      var r = n(118);
      t.exports = function (t) {
        return r(this, t).has(t);
      };
    },
    407: function (t, e, n) {
      var r = n(118);
      t.exports = function (t, e) {
        var n = r(this, t),
          i = n.size;
        return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    408: function (t, e, n) {
      var r = n(177),
        i = n(227),
        o = n(411),
        a = n(413),
        s = n(228),
        u = n(26),
        c = n(150),
        h = n(176),
        l = '[object Arguments]',
        f = '[object Array]',
        p = '[object Object]',
        d = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, v, y, g) {
        var m = u(t),
          _ = u(e),
          b = m ? f : s(t),
          w = _ ? f : s(e),
          E = (b = b == l ? p : b) == p,
          C = (w = w == l ? p : w) == p,
          S = b == w;
        if (S && c(t)) {
          if (!c(e)) return !1;
          (m = !0), (E = !1);
        }
        if (S && !E)
          return (
            g || (g = new r()),
            m || h(t) ? i(t, e, n, v, y, g) : o(t, e, b, n, v, y, g)
          );
        if (!(1 & n)) {
          var I = E && d.call(t, '__wrapped__'),
            T = C && d.call(e, '__wrapped__');
          if (I || T) {
            var N = I ? t.value() : t,
              A = T ? e.value() : e;
            return g || (g = new r()), y(N, A, n, v, g);
          }
        }
        return !!S && (g || (g = new r()), a(t, e, n, v, y, g));
      };
    },
    409: function (t, e) {
      t.exports = function (t) {
        return this.__data__.set(t, '__lodash_hash_undefined__'), this;
      };
    },
    410: function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    411: function (t, e, n) {
      var r = n(82),
        i = n(297),
        o = n(101),
        a = n(227),
        s = n(412),
        u = n(298),
        c = r ? r.prototype : void 0,
        h = c ? c.valueOf : void 0;
      t.exports = function (t, e, n, r, c, l, f) {
        switch (n) {
          case '[object DataView]':
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case '[object ArrayBuffer]':
            return !(t.byteLength != e.byteLength || !l(new i(t), new i(e)));
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return o(+t, +e);
          case '[object Error]':
            return t.name == e.name && t.message == e.message;
          case '[object RegExp]':
          case '[object String]':
            return t == e + '';
          case '[object Map]':
            var p = s;
          case '[object Set]':
            var d = 1 & r;
            if ((p || (p = u), t.size != e.size && !d)) return !1;
            var v = f.get(t);
            if (v) return v == e;
            (r |= 2), f.set(t, e);
            var y = a(p(t), p(e), r, c, l, f);
            return f.delete(t), y;
          case '[object Symbol]':
            if (h) return h.call(t) == h.call(e);
        }
        return !1;
      };
    },
    412: function (t, e) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      };
    },
    413: function (t, e, n) {
      var r = n(326),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, o, a, s) {
        var u = 1 & n,
          c = r(t),
          h = c.length;
        if (h != r(e).length && !u) return !1;
        for (var l = h; l--; ) {
          var f = c[l];
          if (!(u ? f in e : i.call(e, f))) return !1;
        }
        var p = s.get(t),
          d = s.get(e);
        if (p && d) return p == e && d == t;
        var v = !0;
        s.set(t, e), s.set(e, t);
        for (var y = u; ++l < h; ) {
          var g = t[(f = c[l])],
            m = e[f];
          if (o) var _ = u ? o(m, g, f, e, t, s) : o(g, m, f, t, e, s);
          if (!(void 0 === _ ? g === m || a(g, m, n, o, s) : _)) {
            v = !1;
            break;
          }
          y || (y = 'constructor' == f);
        }
        if (v && !y) {
          var b = t.constructor,
            w = e.constructor;
          b == w ||
            !('constructor' in t) ||
            !('constructor' in e) ||
            ('function' == typeof b &&
              b instanceof b &&
              'function' == typeof w &&
              w instanceof w) ||
            (v = !1);
        }
        return s.delete(t), s.delete(e), v;
      };
    },
    414: function (t, e, n) {
      var r = n(65)(n(33), 'DataView');
      t.exports = r;
    },
    415: function (t, e, n) {
      var r = n(65)(n(33), 'Promise');
      t.exports = r;
    },
    416: function (t, e, n) {
      var r = n(229),
        i = n(83);
      t.exports = function (t) {
        for (var e = i(t), n = e.length; n--; ) {
          var o = e[n],
            a = t[o];
          e[n] = [o, a, r(a)];
        }
        return e;
      };
    },
    417: function (t, e, n) {
      var r = n(208),
        i = n(131),
        o = n(333),
        a = n(158),
        s = n(229),
        u = n(230),
        c = n(102);
      t.exports = function (t, e) {
        return a(t) && s(e)
          ? u(c(t), e)
          : function (n) {
              var a = i(n, t);
              return void 0 === a && a === e ? o(n, t) : r(e, a, 3);
            };
      };
    },
    418: function (t, e, n) {
      var r = n(419),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(i, function (t, n, r, i) {
              e.push(r ? i.replace(o, '$1') : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    419: function (t, e, n) {
      var r = n(420);
      t.exports = function (t) {
        var e = r(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    42: function (t, e, n) {
      'use strict';

      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, '__esModule', {
        value: !0,
      });
      var i,
        o,
        a = n(710),
        s = n(998),
        u = n(1153),
        c = n(1154),
        h =
          (((i = {})['no-app'] =
            "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (i['bad-app-name'] = "Illegal App name: '{$appName}"),
          (i['duplicate-app'] =
            "Firebase App named '{$appName}' already exists"),
          (i['app-deleted'] =
            "Firebase App named '{$appName}' already deleted"),
          (i['invalid-app-argument'] =
            'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
          (i['invalid-log-argument'] =
            'First argument to `onLog` must be null or a function.'),
          i),
        l = new s.ErrorFactory('app', 'Firebase', h),
        f = '@firebase/app',
        p = '[DEFAULT]',
        d =
          (((o = {})[f] = 'fire-core'),
          (o['@firebase/analytics'] = 'fire-analytics'),
          (o['@firebase/auth'] = 'fire-auth'),
          (o['@firebase/database'] = 'fire-rtdb'),
          (o['@firebase/functions'] = 'fire-fn'),
          (o['@firebase/installations'] = 'fire-iid'),
          (o['@firebase/messaging'] = 'fire-fcm'),
          (o['@firebase/performance'] = 'fire-perf'),
          (o['@firebase/remote-config'] = 'fire-rc'),
          (o['@firebase/storage'] = 'fire-gcs'),
          (o['@firebase/firestore'] = 'fire-fst'),
          (o['fire-js'] = 'fire-js'),
          (o['firebase-wrapper'] = 'fire-js-all'),
          o),
        v = new c.Logger('@firebase/app'),
        y = (function () {
          function t(t, e, n) {
            var r,
              i,
              o = this;
            (this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.name_ = e.name),
              (this.automaticDataCollectionEnabled_ =
                e.automaticDataCollectionEnabled || !1),
              (this.options_ = s.deepCopy(t)),
              (this.container = new u.ComponentContainer(e.name)),
              this._addComponent(
                new u.Component(
                  'app',
                  function () {
                    return o;
                  },
                  'PUBLIC'
                )
              );
            try {
              for (
                var c = a.__values(this.firebase_.INTERNAL.components.values()),
                  h = c.next();
                !h.done;
                h = c.next()
              ) {
                var l = h.value;
                this._addComponent(l);
              }
            } catch (f) {
              r = {
                error: f,
              };
            } finally {
              try {
                h && !h.done && (i = c.return) && i.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return (
            Object.defineProperty(
              t.prototype,
              'automaticDataCollectionEnabled',
              {
                get: function () {
                  return (
                    this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                  );
                },
                set: function (t) {
                  this.checkDestroyed_(),
                    (this.automaticDataCollectionEnabled_ = t);
                },
                enumerable: !0,
                configurable: !0,
              }
            ),
            Object.defineProperty(t.prototype, 'name', {
              get: function () {
                return this.checkDestroyed_(), this.name_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'options', {
              get: function () {
                return this.checkDestroyed_(), this.options_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.delete = function () {
              var t = this;
              return new Promise(function (e) {
                t.checkDestroyed_(), e();
              })
                .then(function () {
                  return (
                    t.firebase_.INTERNAL.removeApp(t.name_),
                    Promise.all(
                      t.container.getProviders().map(function (t) {
                        return t.delete();
                      })
                    )
                  );
                })
                .then(function () {
                  t.isDeleted_ = !0;
                });
            }),
            (t.prototype._getService = function (t, e) {
              return (
                void 0 === e && (e = p),
                this.checkDestroyed_(),
                this.container.getProvider(t).getImmediate({
                  identifier: e,
                })
              );
            }),
            (t.prototype._removeServiceInstance = function (t, e) {
              void 0 === e && (e = p),
                this.container.getProvider(t).clearInstance(e);
            }),
            (t.prototype._addComponent = function (t) {
              try {
                this.container.addComponent(t);
              } catch (e) {
                v.debug(
                  'Component ' +
                    t.name +
                    ' failed to register with FirebaseApp ' +
                    this.name,
                  e
                );
              }
            }),
            (t.prototype._addOrOverwriteComponent = function (t) {
              this.container.addOrOverwriteComponent(t);
            }),
            (t.prototype.checkDestroyed_ = function () {
              if (this.isDeleted_)
                throw l.create('app-deleted', {
                  appName: this.name_,
                });
            }),
            t
          );
        })();
      (y.prototype.name && y.prototype.options) ||
        y.prototype.delete ||
        console.log('dc');
      var g = (function t() {
          var e = (function (t) {
            var e = {},
              n = new Map(),
              i = {
                __esModule: !0,
                initializeApp: function (n, o) {
                  void 0 === o && (o = {}),
                    ('object' === r(o) && null !== o) ||
                      (o = {
                        name: o,
                      });
                  var a = o;
                  void 0 === a.name && (a.name = p);
                  var u = a.name;
                  if ('string' !== typeof u || !u)
                    throw l.create('bad-app-name', {
                      appName: String(u),
                    });
                  if (s.contains(e, u))
                    throw l.create('duplicate-app', {
                      appName: u,
                    });
                  var c = new t(n, a, i);
                  return (e[u] = c), c;
                },
                app: o,
                registerVersion: function (t, e, n) {
                  var r,
                    i = null !== (r = d[t]) && void 0 !== r ? r : t;
                  n && (i += '-' + n);
                  var o = i.match(/\s|\//),
                    a = e.match(/\s|\//);
                  if (o || a) {
                    var s = [
                      'Unable to register library "' +
                        i +
                        '" with version "' +
                        e +
                        '":',
                    ];
                    return (
                      o &&
                        s.push(
                          'library name "' +
                            i +
                            '" contains illegal characters (whitespace or "/")'
                        ),
                      o && a && s.push('and'),
                      a &&
                        s.push(
                          'version name "' +
                            e +
                            '" contains illegal characters (whitespace or "/")'
                        ),
                      void v.warn(s.join(' '))
                    );
                  }
                  h(
                    new u.Component(
                      i + '-version',
                      function () {
                        return {
                          library: i,
                          version: e,
                        };
                      },
                      'VERSION'
                    )
                  );
                },
                setLogLevel: c.setLogLevel,
                onLog: function (t, e) {
                  if (null !== t && 'function' !== typeof t)
                    throw l.create('invalid-log-argument', {
                      appName: name,
                    });
                  c.setUserLogHandler(t, e);
                },
                apps: null,
                SDK_VERSION: '7.12.0',
                INTERNAL: {
                  registerComponent: h,
                  removeApp: function (t) {
                    delete e[t];
                  },
                  components: n,
                  useAsService: function (t, e) {
                    return 'serverAuth' === e ? null : e;
                  },
                },
              };

            function o(t) {
              if (((t = t || p), !s.contains(e, t)))
                throw l.create('no-app', {
                  appName: t,
                });
              return e[t];
            }

            function h(r) {
              var u,
                c,
                h = r.name;
              if (n.has(h))
                return (
                  v.debug(
                    'There were multiple attempts to register component ' +
                      h +
                      '.'
                  ),
                  'PUBLIC' === r.type ? i[h] : null
                );
              if ((n.set(h, r), 'PUBLIC' === r.type)) {
                var f = function (t) {
                  if ((void 0 === t && (t = o()), 'function' !== typeof t[h]))
                    throw l.create('invalid-app-argument', {
                      appName: h,
                    });
                  return t[h]();
                };
                void 0 !== r.serviceProps && s.deepExtend(f, r.serviceProps),
                  (i[h] = f),
                  (t.prototype[h] = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return this._getService
                      .bind(this, h)
                      .apply(this, r.multipleInstances ? t : []);
                  });
              }
              try {
                for (
                  var p = a.__values(Object.keys(e)), d = p.next();
                  !d.done;
                  d = p.next()
                ) {
                  var y = d.value;
                  e[y]._addComponent(r);
                }
              } catch (g) {
                u = {
                  error: g,
                };
              } finally {
                try {
                  d && !d.done && (c = p.return) && c.call(p);
                } finally {
                  if (u) throw u.error;
                }
              }
              return 'PUBLIC' === r.type ? i[h] : null;
            }
            return (
              (i.default = i),
              Object.defineProperty(i, 'apps', {
                get: function () {
                  return Object.keys(e).map(function (t) {
                    return e[t];
                  });
                },
              }),
              (o.App = t),
              i
            );
          })(y);
          return (
            (e.INTERNAL = a.__assign(a.__assign({}, e.INTERNAL), {
              createFirebaseNamespace: t,
              extendNamespace: function (t) {
                s.deepExtend(e, t);
              },
              createSubscribe: s.createSubscribe,
              ErrorFactory: s.ErrorFactory,
              deepExtend: s.deepExtend,
            })),
            e
          );
        })(),
        m = (function () {
          function t(t) {
            this.container = t;
          }
          return (
            (t.prototype.getPlatformInfoString = function () {
              return this.container
                .getProviders()
                .map(function (t) {
                  if (
                    (function (t) {
                      var e = t.getComponent();
                      return (
                        'VERSION' ===
                        (null === e || void 0 === e ? void 0 : e.type)
                      );
                    })(t)
                  ) {
                    var e = t.getImmediate();
                    return e.library + '/' + e.version;
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .join(' ');
            }),
            t
          );
        })();
      if (s.isBrowser() && void 0 !== self.firebase) {
        v.warn(
          '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  '
        );
        var _ = self.firebase.SDK_VERSION;
        _ &&
          _.indexOf('LITE') >= 0 &&
          v.warn(
            '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    '
          );
      }
      var b = g.initializeApp;
      g.initializeApp = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          s.isNode() &&
            v.warn(
              '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '
            ),
          b.apply(void 0, t)
        );
      };
      var w = g;
      !(function (t, e) {
        t.INTERNAL.registerComponent(
          new u.Component(
            'platform-logger',
            function (t) {
              return new m(t);
            },
            'PRIVATE'
          )
        ),
          t.registerVersion(f, '0.6.0', e),
          t.registerVersion('fire-js', '');
      })(w),
        (e.default = w),
        (e.firebase = w);
    },
    420: function (t, e, n) {
      var r = n(155);

      function i(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw new TypeError('Expected a function');
        var n = function n() {
          var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var a = t.apply(this, r);
          return (n.cache = o.set(i, a) || o), a;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (t.exports = i);
    },
    421: function (t, e) {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    422: function (t, e, n) {
      var r = n(157),
        i = n(138),
        o = n(26),
        a = n(151),
        s = n(152),
        u = n(102);
      t.exports = function (t, e, n) {
        for (var c = -1, h = (e = r(e, t)).length, l = !1; ++c < h; ) {
          var f = u(e[c]);
          if (!(l = null != t && n(t, f))) break;
          t = t[f];
        }
        return l || ++c != h
          ? l
          : !!(h = null == t ? 0 : t.length) &&
              s(h) &&
              a(f, h) &&
              (o(t) || i(t));
      };
    },
    423: function (t, e, n) {
      var r = n(424),
        i = n(425),
        o = n(158),
        a = n(102);
      t.exports = function (t) {
        return o(t) ? r(a(t)) : i(t);
      };
    },
    424: function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    425: function (t, e, n) {
      var r = n(156);
      t.exports = function (t) {
        return function (e) {
          return r(e, t);
        };
      };
    },
    55: function (t, e) {
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      t.exports = function (t) {
        return null != t && 'object' == n(t);
      };
    },
    56: function (t, e) {
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      t.exports = function (t) {
        var e = n(t);
        return null != t && ('object' == e || 'function' == e);
      };
    },
    568: function (t, e) {
      t.exports = function (t, e, n, r) {
        var i = -1,
          o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
        return n;
      };
    },
    569: function (t, e) {
      t.exports = function (t, e, n, r, i) {
        return (
          i(t, function (t, i, o) {
            n = r ? ((r = !1), t) : e(n, t, i, o);
          }),
          n
        );
      };
    },
    588: function (t, e) {
      t.exports = function (t, e, n) {
        for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i; ) {
          var s = r < o ? e[r] : void 0;
          n(a, t[r], s);
        }
        return a;
      };
    },
    61: function (t, e, n) {
      var r = n(82),
        i = n(287),
        o = n(288),
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(t)
          ? i(t)
          : o(t);
      };
    },
    65: function (t, e, n) {
      var r = n(293),
        i = n(296);
      t.exports = function (t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0;
      };
    },
    710: function (t, e, n) {
      'use strict';

      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      n.r(e),
        n.d(e, '__extends', function () {
          return o;
        }),
        n.d(e, '__assign', function () {
          return a;
        }),
        n.d(e, '__rest', function () {
          return s;
        }),
        n.d(e, '__decorate', function () {
          return u;
        }),
        n.d(e, '__param', function () {
          return c;
        }),
        n.d(e, '__metadata', function () {
          return h;
        }),
        n.d(e, '__awaiter', function () {
          return l;
        }),
        n.d(e, '__generator', function () {
          return f;
        }),
        n.d(e, '__exportStar', function () {
          return p;
        }),
        n.d(e, '__values', function () {
          return d;
        }),
        n.d(e, '__read', function () {
          return v;
        }),
        n.d(e, '__spread', function () {
          return y;
        }),
        n.d(e, '__spreadArrays', function () {
          return g;
        }),
        n.d(e, '__await', function () {
          return m;
        }),
        n.d(e, '__asyncGenerator', function () {
          return _;
        }),
        n.d(e, '__asyncDelegator', function () {
          return b;
        }),
        n.d(e, '__asyncValues', function () {
          return w;
        }),
        n.d(e, '__makeTemplateObject', function () {
          return E;
        }),
        n.d(e, '__importStar', function () {
          return C;
        }),
        n.d(e, '__importDefault', function () {
          return S;
        }),
        n.d(e, '__classPrivateFieldGet', function () {
          return I;
        }),
        n.d(e, '__classPrivateFieldSet', function () {
          return T;
        });
      var i = function (t, e) {
        return (i =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };

      function o(t, e) {
        function n() {
          this.constructor = t;
        }
        i(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var a = function () {
        return (a =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };

      function s(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }

      function u(t, e, n, i) {
        var o,
          a = arguments.length,
          s =
            a < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if (
          'object' ===
            ('undefined' === typeof Reflect ? 'undefined' : r(Reflect)) &&
          'function' === typeof Reflect.decorate
        )
          s = Reflect.decorate(t, e, n, i);
        else
          for (var u = t.length - 1; u >= 0; u--)
            (o = t[u]) &&
              (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
        return a > 3 && s && Object.defineProperty(e, n, s), s;
      }

      function c(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }

      function h(t, e) {
        if (
          'object' ===
            ('undefined' === typeof Reflect ? 'undefined' : r(Reflect)) &&
          'function' === typeof Reflect.metadata
        )
          return Reflect.metadata(t, e);
      }

      function l(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              u(r.next(t));
            } catch (e) {
              o(e);
            }
          }

          function s(t) {
            try {
              u(r.throw(t));
            } catch (e) {
              o(e);
            }
          }

          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }

      function f(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = {
            next: s(0),
            throw: s(1),
            return: s(2),
          }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );

        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return (
                        a.label++,
                        {
                          value: o[1],
                          done: !1,
                        }
                      );
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (s) {
                  (o = [6, s]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return {
                value: o[0] ? o[1] : void 0,
                done: !0,
              };
            })([o, s]);
          };
        }
      }

      function p(t, e) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }

      function d(t) {
        var e = 'function' === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && 'number' === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                {
                  value: t && t[r++],
                  done: !t,
                }
              );
            },
          };
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      }

      function v(t, e) {
        var n = 'function' === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (s) {
          i = {
            error: s,
          };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }

      function y() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(v(arguments[e]));
        return t;
      }

      function g() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }

      function m(t) {
        return this instanceof m ? ((this.v = t), this) : new m(t);
      }

      function _(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          i = n.apply(t, e || []),
          o = [];
        return (
          (r = {}),
          a('next'),
          a('throw'),
          a('return'),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );

        function a(t) {
          i[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                o.push([t, e, n, r]) > 1 || s(t, e);
              });
            });
        }

        function s(t, e) {
          try {
            (n = i[t](e)).value instanceof m
              ? Promise.resolve(n.value.v).then(u, c)
              : h(o[0][2], n);
          } catch (r) {
            h(o[0][3], r);
          }
          var n;
        }

        function u(t) {
          s('next', t);
        }

        function c(t) {
          s('throw', t);
        }

        function h(t, e) {
          t(e), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }

      function b(t) {
        var e, n;
        return (
          (e = {}),
          r('next'),
          r('throw', function (t) {
            throw t;
          }),
          r('return'),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );

        function r(r, i) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n)
                  ? {
                      value: m(t[r](e)),
                      done: 'return' === r,
                    }
                  : i
                  ? i(e)
                  : e;
              }
            : i;
        }
      }

      function w(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = d(t)),
            (e = {}),
            r('next'),
            r('throw'),
            r('return'),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);

        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, i) {
                (function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({
                      value: e,
                      done: n,
                    });
                  }, e);
                })(r, i, (e = t[n](e)).done, e.value);
              });
            };
        }
      }

      function E(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, 'raw', {
                value: e,
              })
            : (t.raw = e),
          t
        );
      }

      function C(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }

      function S(t) {
        return t && t.__esModule
          ? t
          : {
              default: t,
            };
      }

      function I(t, e) {
        if (!e.has(t))
          throw new TypeError('attempted to get private field on non-instance');
        return e.get(t);
      }

      function T(t, e, n) {
        if (!e.has(t))
          throw new TypeError('attempted to set private field on non-instance');
        return e.set(t, n), n;
      }
    },
    82: function (t, e, n) {
      var r = n(33).Symbol;
      t.exports = r;
    },
    83: function (t, e, n) {
      var r = n(290),
        i = n(322),
        o = n(100);
      t.exports = function (t) {
        return o(t) ? r(t) : i(t);
      };
    },
    88: function (t, e, n) {
      'use strict';

      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var i,
        o = (i = n(42)) && 'object' === r(i) && 'default' in i ? i.default : i;
      o.registerVersion('firebase', '7.12.0', 'app'), (t.exports = o);
    },
    89: function (t, e) {
      var n,
        r,
        i = (t.exports = {});

      function o() {
        throw new Error('setTimeout has not been defined');
      }

      function a() {
        throw new Error('clearTimeout has not been defined');
      }

      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var u,
        c = [],
        h = !1,
        l = -1;

      function f() {
        h &&
          u &&
          ((h = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && p());
      }

      function p() {
        if (!h) {
          var t = s(f);
          h = !0;
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++l < e; ) u && u[l].run();
            (l = -1), (e = c.length);
          }
          (u = null),
            (h = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }

      function d(t, e) {
        (this.fun = t), (this.array = e);
      }

      function v() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new d(t, e)), 1 !== c.length || h || s(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = v),
        (i.addListener = v),
        (i.once = v),
        (i.off = v),
        (i.removeListener = v),
        (i.removeAllListeners = v),
        (i.emit = v),
        (i.prependListener = v),
        (i.prependOnceListener = v),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function () {
          return '/';
        }),
        (i.chdir = function (t) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function () {
          return 0;
        });
    },
    99: function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    998: function (t, e, n) {
      'use strict';
      (function (t) {
        function r(t) {
          return (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
        var i = n(710),
          o = {
            NODE_CLIENT: !1,
            NODE_ADMIN: !1,
            SDK_VERSION: '${JSCORE_VERSION}',
          },
          a = function (t, e) {
            if (!t) throw s(e);
          },
          s = function (t) {
            return new Error(
              'Firebase Database (' +
                o.SDK_VERSION +
                ') INTERNAL ASSERT FAILED: ' +
                t
            );
          },
          u = function (t) {
            for (var e = [], n = 0, r = 0; r < t.length; r++) {
              var i = t.charCodeAt(r);
              i < 128
                ? (e[n++] = i)
                : i < 2048
                ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
                : 55296 === (64512 & i) &&
                  r + 1 < t.length &&
                  56320 === (64512 & t.charCodeAt(r + 1))
                ? ((i =
                    65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r))),
                  (e[n++] = (i >> 18) | 240),
                  (e[n++] = ((i >> 12) & 63) | 128),
                  (e[n++] = ((i >> 6) & 63) | 128),
                  (e[n++] = (63 & i) | 128))
                : ((e[n++] = (i >> 12) | 224),
                  (e[n++] = ((i >> 6) & 63) | 128),
                  (e[n++] = (63 & i) | 128));
            }
            return e;
          },
          c = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + '+/=';
            },
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + '-_.';
            },
            HAS_NATIVE_SUPPORT: 'function' === typeof atob,
            encodeByteArray: function (t, e) {
              if (!Array.isArray(t))
                throw Error('encodeByteArray takes an array as a parameter');
              this.init_();
              for (
                var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                  r = [],
                  i = 0;
                i < t.length;
                i += 3
              ) {
                var o = t[i],
                  a = i + 1 < t.length,
                  s = a ? t[i + 1] : 0,
                  u = i + 2 < t.length,
                  c = u ? t[i + 2] : 0,
                  h = o >> 2,
                  l = ((3 & o) << 4) | (s >> 4),
                  f = ((15 & s) << 2) | (c >> 6),
                  p = 63 & c;
                u || ((p = 64), a || (f = 64)), r.push(n[h], n[l], n[f], n[p]);
              }
              return r.join('');
            },
            encodeString: function (t, e) {
              return this.HAS_NATIVE_SUPPORT && !e
                ? btoa(t)
                : this.encodeByteArray(u(t), e);
            },
            decodeString: function (t, e) {
              return this.HAS_NATIVE_SUPPORT && !e
                ? atob(t)
                : (function (t) {
                    for (var e = [], n = 0, r = 0; n < t.length; ) {
                      var i = t[n++];
                      if (i < 128) e[r++] = String.fromCharCode(i);
                      else if (i > 191 && i < 224) {
                        var o = t[n++];
                        e[r++] = String.fromCharCode(
                          ((31 & i) << 6) | (63 & o)
                        );
                      } else if (i > 239 && i < 365) {
                        var a =
                          (((7 & i) << 18) |
                            ((63 & (o = t[n++])) << 12) |
                            ((63 & (s = t[n++])) << 6) |
                            (63 & t[n++])) -
                          65536;
                        (e[r++] = String.fromCharCode(55296 + (a >> 10))),
                          (e[r++] = String.fromCharCode(56320 + (1023 & a)));
                      } else {
                        o = t[n++];
                        var s = t[n++];
                        e[r++] = String.fromCharCode(
                          ((15 & i) << 12) | ((63 & o) << 6) | (63 & s)
                        );
                      }
                    }
                    return e.join('');
                  })(this.decodeStringToByteArray(t, e));
            },
            decodeStringToByteArray: function (t, e) {
              this.init_();
              for (
                var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                  r = [],
                  i = 0;
                i < t.length;

              ) {
                var o = n[t.charAt(i++)],
                  a = i < t.length ? n[t.charAt(i)] : 0,
                  s = ++i < t.length ? n[t.charAt(i)] : 64,
                  u = ++i < t.length ? n[t.charAt(i)] : 64;
                if ((++i, null == o || null == a || null == s || null == u))
                  throw Error();
                var c = (o << 2) | (a >> 4);
                if ((r.push(c), 64 !== s)) {
                  var h = ((a << 4) & 240) | (s >> 2);
                  if ((r.push(h), 64 !== u)) {
                    var l = ((s << 6) & 192) | u;
                    r.push(l);
                  }
                }
              }
              return r;
            },
            init_: function () {
              if (!this.byteToCharMap_) {
                (this.byteToCharMap_ = {}),
                  (this.charToByteMap_ = {}),
                  (this.byteToCharMapWebSafe_ = {}),
                  (this.charToByteMapWebSafe_ = {});
                for (var t = 0; t < this.ENCODED_VALS.length; t++)
                  (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                    (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                    (this.byteToCharMapWebSafe_[t] =
                      this.ENCODED_VALS_WEBSAFE.charAt(t)),
                    (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] =
                      t),
                    t >= this.ENCODED_VALS_BASE.length &&
                      ((this.charToByteMap_[
                        this.ENCODED_VALS_WEBSAFE.charAt(t)
                      ] = t),
                      (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] =
                        t));
              }
            },
          },
          h = function (t) {
            try {
              return c.decodeString(t, !0);
            } catch (e) {
              console.error('base64Decode failed: ', e);
            }
            return null;
          };

        function l(t, e) {
          if (!(e instanceof Object)) return e;
          switch (e.constructor) {
            case Date:
              return new Date(e.getTime());
            case Object:
              void 0 === t && (t = {});
              break;
            case Array:
              t = [];
              break;
            default:
              return e;
          }
          for (var n in e) e.hasOwnProperty(n) && (t[n] = l(t[n], e[n]));
          return t;
        }
        var f = (function () {
          function t() {
            var t = this;
            (this.reject = function () {}),
              (this.resolve = function () {}),
              (this.promise = new Promise(function (e, n) {
                (t.resolve = e), (t.reject = n);
              }));
          }
          return (
            (t.prototype.wrapCallback = function (t) {
              var e = this;
              return function (n, r) {
                n ? e.reject(n) : e.resolve(r),
                  'function' === typeof t &&
                    (e.promise.catch(function () {}),
                    1 === t.length ? t(n) : t(n, r));
              };
            }),
            t
          );
        })();

        function p() {
          return 'undefined' !== typeof navigator &&
            'string' === typeof navigator.userAgent
            ? navigator.userAgent
            : '';
        }
        var d = (function (t) {
            function e(n, r) {
              var i = t.call(this, r) || this;
              return (
                (i.code = n),
                (i.name = 'FirebaseError'),
                Object.setPrototypeOf(i, e.prototype),
                Error.captureStackTrace &&
                  Error.captureStackTrace(i, v.prototype.create),
                i
              );
            }
            return i.__extends(e, t), e;
          })(Error),
          v = (function () {
            function t(t, e, n) {
              (this.service = t), (this.serviceName = e), (this.errors = n);
            }
            return (
              (t.prototype.create = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                for (
                  var r = e[0] || {},
                    i = this.service + '/' + t,
                    o = this.errors[t],
                    a = o ? y(o, r) : 'Error',
                    s = this.serviceName + ': ' + a + ' (' + i + ').',
                    u = new d(i, s),
                    c = 0,
                    h = Object.keys(r);
                  c < h.length;
                  c++
                ) {
                  var l = h[c];
                  '_' !== l.slice(-1) &&
                    (l in u &&
                      console.warn(
                        'Overwriting FirebaseError base field "' +
                          l +
                          '" can cause unexpected behavior.'
                      ),
                    (u[l] = r[l]));
                }
                return u;
              }),
              t
            );
          })();

        function y(t, e) {
          return t.replace(g, function (t, n) {
            var r = e[n];
            return null != r ? r.toString() : '<' + n + '?>';
          });
        }
        var g = /\{\$([^}]+)}/g;

        function m(t) {
          return JSON.parse(t);
        }
        var _ = function (t) {
          var e = {},
            n = {},
            r = {},
            i = '';
          try {
            var o = t.split('.');
            (e = m(h(o[0]) || '')),
              (n = m(h(o[1]) || '')),
              (i = o[2]),
              (r = n.d || {}),
              delete n.d;
          } catch (a) {}
          return {
            header: e,
            claims: n,
            data: r,
            signature: i,
          };
        };
        var b = (function () {
          function t() {
            (this.chain_ = []),
              (this.buf_ = []),
              (this.W_ = []),
              (this.pad_ = []),
              (this.inbuf_ = 0),
              (this.total_ = 0),
              (this.blockSize = 64),
              (this.pad_[0] = 128);
            for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
            this.reset();
          }
          return (
            (t.prototype.reset = function () {
              (this.chain_[0] = 1732584193),
                (this.chain_[1] = 4023233417),
                (this.chain_[2] = 2562383102),
                (this.chain_[3] = 271733878),
                (this.chain_[4] = 3285377520),
                (this.inbuf_ = 0),
                (this.total_ = 0);
            }),
            (t.prototype.compress_ = function (t, e) {
              e || (e = 0);
              var n = this.W_;
              if ('string' === typeof t)
                for (var r = 0; r < 16; r++)
                  (n[r] =
                    (t.charCodeAt(e) << 24) |
                    (t.charCodeAt(e + 1) << 16) |
                    (t.charCodeAt(e + 2) << 8) |
                    t.charCodeAt(e + 3)),
                    (e += 4);
              else
                for (r = 0; r < 16; r++)
                  (n[r] =
                    (t[e] << 24) |
                    (t[e + 1] << 16) |
                    (t[e + 2] << 8) |
                    t[e + 3]),
                    (e += 4);
              for (r = 16; r < 80; r++) {
                var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                n[r] = 4294967295 & ((i << 1) | (i >>> 31));
              }
              var o,
                a,
                s = this.chain_[0],
                u = this.chain_[1],
                c = this.chain_[2],
                h = this.chain_[3],
                l = this.chain_[4];
              for (r = 0; r < 80; r++) {
                r < 40
                  ? r < 20
                    ? ((o = h ^ (u & (c ^ h))), (a = 1518500249))
                    : ((o = u ^ c ^ h), (a = 1859775393))
                  : r < 60
                  ? ((o = (u & c) | (h & (u | c))), (a = 2400959708))
                  : ((o = u ^ c ^ h), (a = 3395469782));
                i = (((s << 5) | (s >>> 27)) + o + l + a + n[r]) & 4294967295;
                (l = h),
                  (h = c),
                  (c = 4294967295 & ((u << 30) | (u >>> 2))),
                  (u = s),
                  (s = i);
              }
              (this.chain_[0] = (this.chain_[0] + s) & 4294967295),
                (this.chain_[1] = (this.chain_[1] + u) & 4294967295),
                (this.chain_[2] = (this.chain_[2] + c) & 4294967295),
                (this.chain_[3] = (this.chain_[3] + h) & 4294967295),
                (this.chain_[4] = (this.chain_[4] + l) & 4294967295);
            }),
            (t.prototype.update = function (t, e) {
              if (null != t) {
                void 0 === e && (e = t.length);
                for (
                  var n = e - this.blockSize,
                    r = 0,
                    i = this.buf_,
                    o = this.inbuf_;
                  r < e;

                ) {
                  if (0 === o)
                    for (; r <= n; )
                      this.compress_(t, r), (r += this.blockSize);
                  if ('string' === typeof t) {
                    for (; r < e; )
                      if (
                        ((i[o] = t.charCodeAt(r)), ++r, ++o === this.blockSize)
                      ) {
                        this.compress_(i), (o = 0);
                        break;
                      }
                  } else
                    for (; r < e; )
                      if (((i[o] = t[r]), ++r, ++o === this.blockSize)) {
                        this.compress_(i), (o = 0);
                        break;
                      }
                }
                (this.inbuf_ = o), (this.total_ += e);
              }
            }),
            (t.prototype.digest = function () {
              var t = [],
                e = 8 * this.total_;
              this.inbuf_ < 56
                ? this.update(this.pad_, 56 - this.inbuf_)
                : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
              for (var n = this.blockSize - 1; n >= 56; n--)
                (this.buf_[n] = 255 & e), (e /= 256);
              this.compress_(this.buf_);
              var r = 0;
              for (n = 0; n < 5; n++)
                for (var i = 24; i >= 0; i -= 8)
                  (t[r] = (this.chain_[n] >> i) & 255), ++r;
              return t;
            }),
            t
          );
        })();
        var w = (function () {
          function t(t, e) {
            var n = this;
            (this.observers = []),
              (this.unsubscribes = []),
              (this.observerCount = 0),
              (this.task = Promise.resolve()),
              (this.finalized = !1),
              (this.onNoObservers = e),
              this.task
                .then(function () {
                  t(n);
                })
                .catch(function (t) {
                  n.error(t);
                });
          }
          return (
            (t.prototype.next = function (t) {
              this.forEachObserver(function (e) {
                e.next(t);
              });
            }),
            (t.prototype.error = function (t) {
              this.forEachObserver(function (e) {
                e.error(t);
              }),
                this.close(t);
            }),
            (t.prototype.complete = function () {
              this.forEachObserver(function (t) {
                t.complete();
              }),
                this.close();
            }),
            (t.prototype.subscribe = function (t, e, n) {
              var i,
                o = this;
              if (void 0 === t && void 0 === e && void 0 === n)
                throw new Error('Missing Observer.');
              void 0 ===
                (i = (function (t, e) {
                  if ('object' !== r(t) || null === t) return !1;
                  for (var n = 0, i = e; n < i.length; n++) {
                    var o = i[n];
                    if (o in t && 'function' === typeof t[o]) return !0;
                  }
                  return !1;
                })(t, ['next', 'error', 'complete'])
                  ? t
                  : {
                      next: t,
                      error: e,
                      complete: n,
                    }).next && (i.next = E),
                void 0 === i.error && (i.error = E),
                void 0 === i.complete && (i.complete = E);
              var a = this.unsubscribeOne.bind(this, this.observers.length);
              return (
                this.finalized &&
                  this.task.then(function () {
                    try {
                      o.finalError ? i.error(o.finalError) : i.complete();
                    } catch (t) {}
                  }),
                this.observers.push(i),
                a
              );
            }),
            (t.prototype.unsubscribeOne = function (t) {
              void 0 !== this.observers &&
                void 0 !== this.observers[t] &&
                (delete this.observers[t],
                (this.observerCount -= 1),
                0 === this.observerCount &&
                  void 0 !== this.onNoObservers &&
                  this.onNoObservers(this));
            }),
            (t.prototype.forEachObserver = function (t) {
              if (!this.finalized)
                for (var e = 0; e < this.observers.length; e++)
                  this.sendOne(e, t);
            }),
            (t.prototype.sendOne = function (t, e) {
              var n = this;
              this.task.then(function () {
                if (void 0 !== n.observers && void 0 !== n.observers[t])
                  try {
                    e(n.observers[t]);
                  } catch (r) {
                    'undefined' !== typeof console &&
                      console.error &&
                      console.error(r);
                  }
              });
            }),
            (t.prototype.close = function (t) {
              var e = this;
              this.finalized ||
                ((this.finalized = !0),
                void 0 !== t && (this.finalError = t),
                this.task.then(function () {
                  (e.observers = void 0), (e.onNoObservers = void 0);
                }));
            }),
            t
          );
        })();

        function E() {}

        function C(t, e, n) {
          var r = '';
          switch (e) {
            case 1:
              r = n ? 'first' : 'First';
              break;
            case 2:
              r = n ? 'second' : 'Second';
              break;
            case 3:
              r = n ? 'third' : 'Third';
              break;
            case 4:
              r = n ? 'fourth' : 'Fourth';
              break;
            default:
              throw new Error(
                'errorPrefix called with argumentNumber > 4.  Need to update it?'
              );
          }
          var i = t + ' failed: ';
          return (i += r + ' argument ');
        }
        (e.CONSTANTS = o),
          (e.Deferred = f),
          (e.ErrorFactory = v),
          (e.FirebaseError = d),
          (e.Sha1 = b),
          (e.assert = a),
          (e.assertionError = s),
          (e.async = function (t, e) {
            return function () {
              for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              Promise.resolve(!0)
                .then(function () {
                  t.apply(void 0, n);
                })
                .catch(function (t) {
                  e && e(t);
                });
            };
          }),
          (e.base64 = c),
          (e.base64Decode = h),
          (e.base64Encode = function (t) {
            var e = u(t);
            return c.encodeByteArray(e, !0);
          }),
          (e.contains = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.createSubscribe = function (t, e) {
            var n = new w(t, e);
            return n.subscribe.bind(n);
          }),
          (e.decode = _),
          (e.deepCopy = function (t) {
            return l(void 0, t);
          }),
          (e.deepExtend = l),
          (e.errorPrefix = C),
          (e.getUA = p),
          (e.isAdmin = function (t) {
            var e = _(t).claims;
            return 'object' === r(e) && !0 === e.admin;
          }),
          (e.isBrowser = function () {
            return (
              'object' ===
                ('undefined' === typeof self ? 'undefined' : r(self)) &&
              self.self === self
            );
          }),
          (e.isBrowserExtension = function () {
            var t =
              'object' ===
              ('undefined' === typeof chrome ? 'undefined' : r(chrome))
                ? chrome.runtime
                : 'object' ===
                  ('undefined' === typeof browser ? 'undefined' : r(browser))
                ? browser.runtime
                : void 0;
            return 'object' === r(t) && void 0 !== t.id;
          }),
          (e.isElectron = function () {
            return p().indexOf('Electron/') >= 0;
          }),
          (e.isEmpty = function (t) {
            for (var e in t)
              if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
            return !0;
          }),
          (e.isIE = function () {
            var t = p();
            return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
          }),
          (e.isMobileCordova = function () {
            return (
              'undefined' !== typeof window &&
              !!(window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())
            );
          }),
          (e.isNode = function () {
            try {
              return (
                '[object process]' === Object.prototype.toString.call(t.process)
              );
            } catch (e) {
              return !1;
            }
          }),
          (e.isNodeSdk = function () {
            return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN;
          }),
          (e.isReactNative = function () {
            return (
              'object' ===
                ('undefined' === typeof navigator
                  ? 'undefined'
                  : r(navigator)) && 'ReactNative' === navigator.product
            );
          }),
          (e.isUWP = function () {
            return p().indexOf('MSAppHost/') >= 0;
          }),
          (e.isValidFormat = function (t) {
            var e = _(t).claims;
            return !!e && 'object' === r(e) && e.hasOwnProperty('iat');
          }),
          (e.isValidTimestamp = function (t) {
            var e = _(t).claims,
              n = Math.floor(new Date().getTime() / 1e3),
              i = 0,
              o = 0;
            return (
              'object' === r(e) &&
                (e.hasOwnProperty('nbf')
                  ? (i = e.nbf)
                  : e.hasOwnProperty('iat') && (i = e.iat),
                (o = e.hasOwnProperty('exp') ? e.exp : i + 86400)),
              !!n && !!i && !!o && n >= i && n <= o
            );
          }),
          (e.issuedAtTime = function (t) {
            var e = _(t).claims;
            return 'object' === r(e) && e.hasOwnProperty('iat') ? e.iat : null;
          }),
          (e.jsonEval = m),
          (e.map = function (t, e, n) {
            var r = {};
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) &&
                (r[i] = e.call(n, t[i], i, t));
            return r;
          }),
          (e.querystring = function (t) {
            for (
              var e = [],
                n = function (t, n) {
                  Array.isArray(n)
                    ? n.forEach(function (n) {
                        e.push(
                          encodeURIComponent(t) + '=' + encodeURIComponent(n)
                        );
                      })
                    : e.push(
                        encodeURIComponent(t) + '=' + encodeURIComponent(n)
                      );
                },
                r = 0,
                i = Object.entries(t);
              r < i.length;
              r++
            ) {
              var o = i[r];
              n(o[0], o[1]);
            }
            return e.length ? '&' + e.join('&') : '';
          }),
          (e.querystringDecode = function (t) {
            var e = {};
            return (
              t
                .replace(/^\?/, '')
                .split('&')
                .forEach(function (t) {
                  if (t) {
                    var n = t.split('=');
                    e[n[0]] = n[1];
                  }
                }),
              e
            );
          }),
          (e.safeGet = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
          }),
          (e.stringLength = function (t) {
            for (var e = 0, n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              r < 128
                ? e++
                : r < 2048
                ? (e += 2)
                : r >= 55296 && r <= 56319
                ? ((e += 4), n++)
                : (e += 3);
            }
            return e;
          }),
          (e.stringToByteArray = function (t) {
            for (var e = [], n = 0, r = 0; r < t.length; r++) {
              var i = t.charCodeAt(r);
              if (i >= 55296 && i <= 56319) {
                var o = i - 55296;
                r++,
                  a(r < t.length, 'Surrogate pair missing trail surrogate.'),
                  (i = 65536 + (o << 10) + (t.charCodeAt(r) - 56320));
              }
              i < 128
                ? (e[n++] = i)
                : i < 2048
                ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
                : i < 65536
                ? ((e[n++] = (i >> 12) | 224),
                  (e[n++] = ((i >> 6) & 63) | 128),
                  (e[n++] = (63 & i) | 128))
                : ((e[n++] = (i >> 18) | 240),
                  (e[n++] = ((i >> 12) & 63) | 128),
                  (e[n++] = ((i >> 6) & 63) | 128),
                  (e[n++] = (63 & i) | 128));
            }
            return e;
          }),
          (e.stringify = function (t) {
            return JSON.stringify(t);
          }),
          (e.validateArgCount = function (t, e, n, r) {
            var i;
            if (
              (r < e
                ? (i = 'at least ' + e)
                : r > n && (i = 0 === n ? 'none' : 'no more than ' + n),
              i)
            )
              throw new Error(
                t +
                  ' failed: Was called with ' +
                  r +
                  (1 === r ? ' argument.' : ' arguments.') +
                  ' Expects ' +
                  i +
                  '.'
              );
          }),
          (e.validateCallback = function (t, e, n, r) {
            if ((!r || n) && 'function' !== typeof n)
              throw new Error(C(t, e, r) + 'must be a valid function.');
          }),
          (e.validateContextObject = function (t, e, n, i) {
            if ((!i || n) && ('object' !== r(n) || null === n))
              throw new Error(C(t, e, i) + 'must be a valid context object.');
          }),
          (e.validateNamespace = function (t, e, n, r) {
            if ((!r || n) && 'string' !== typeof n)
              throw new Error(
                C(t, e, r) + 'must be a valid firebase namespace.'
              );
          });
      }.call(this, n(27)));
    },
  },
]);

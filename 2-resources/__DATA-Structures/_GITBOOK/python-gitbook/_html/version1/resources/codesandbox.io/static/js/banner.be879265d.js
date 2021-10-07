!(function (n) {
  var e = {};

  function t(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = {
      i: o,
      l: !1,
      exports: {},
    });
    return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function (n, e, o) {
      t.o(n, e) ||
        Object.defineProperty(n, e, {
          enumerable: !0,
          get: o,
        });
    }),
    (t.r = function (n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(n, '__esModule', {
          value: !0,
        });
    }),
    (t.t = function (n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && 'object' === typeof n && n && n.__esModule) return n;
      var o = Object.create(null);
      if (
        (t.r(o),
        Object.defineProperty(o, 'default', {
          enumerable: !0,
          value: n,
        }),
        2 & e && 'string' != typeof n)
      )
        for (var r in n)
          t.d(
            o,
            r,
            function (e) {
              return n[e];
            }.bind(null, r)
          );
      return o;
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, 'a', e), e;
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = 'https://codesandbox.io/'),
    t((t.s = './src/banner.js'));
})({
  './src/banner.js': function (n, e) {
    var t;
    var o = function n() {
      if (
        ('undefined' === typeof window ||
          (window.location &&
            window.location.href.indexOf('?standalone') > -1) ||
          (!window.opener && window.parent === window)) &&
        !localStorage.HIDE_PHISHING_BANNER
      ) {
        var e = document.createElement('iframe'),
          o = 'sb__open-sandbox'.concat(Math.floor(100 * Math.random()));
        e.setAttribute(
          'style',
          '\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  left: 0;\n  border: none;\n  width: 100%;\n  z-index: 9999999999999;\n'
        ),
          e.setAttribute('id', o),
          clearInterval(t),
          (t = setInterval(function () {
            document.getElementById(o) || n();
          }, 1e3)),
          (e.srcdoc =
            '\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n    <style>\n      body {\n        margin: 0;\n      }\n      #banner {\n        background: red;\n        color: white;\n        display: flex;\n        padding: 10px;\n        font-size: 14px;\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,\n          Roboto, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: antialiased;\n      }\n      #banner svg {\n        flex-shrink: 0;\n        margin-right: 12px;\n      }\n      #banner p {\n        margin: 0;\n      }\n      #banner a {\n        color: white;\n      }\n    </style>\n    <script>\n      function hideBanner() {\n        localStorage.HIDE_PHISHING_BANNER = true;\n        document.querySelector(\'#banner\').style.display = \'none\'\n      }\n    </script>\n  </head>\n\n  <body>\n    <div id="banner">\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="24"\n        height="24"\n        viewBox="0 0 24 24"\n        fill="none"\n        stroke="currentColor"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      >\n        <circle cx="12" cy="12" r="10" />\n        <line x1="12" y1="8" x2="12" y2="12" />\n        <line x1="12" y1="16" x2="12.01" y2="16" />\n      </svg>\n      <p>\n        This sandbox has been marked as a potential phishing page.\n        <br /><br />Please do not enter username, password or other sensitive\n        information on this page.\n        <br /><br />\n        <button onclick="hideBanner()">Don\'t show me this message</button>\n      </p>\n    </div>\n  </body>\n</html>'),
          (e.onload = function () {
            var t = new MutationObserver(function () {
              document.body.removeChild(e), t.disconnect(), n();
            });
            t.observe(e, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            });
          }),
          document.body.appendChild(e);
      }
    };
    try {
      var r = document.location.host.split('.')[0];
      fetch('https://codesandbox.io/api/v1/sandboxes/'.concat(r, '/phishing'))
        .then(function (n) {
          return n.json();
        })
        .then(function (n) {
          n.deleted && window.location.replace('https://codesandbox.io/phew'),
            n.flagged &&
              setTimeout(function () {
                return o();
              }, 250);
        })
        .catch(function () {});
    } catch (i) {
      console.error(i);
    }
  },
});
//# sourceMappingURL=banner.be879265d.js.map

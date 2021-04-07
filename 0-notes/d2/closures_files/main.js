/* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+c+java+objectivec+plsql+python+jsx+tsx+sql+swift+typescript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function ( u ) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      C = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e( n ) {
            return n instanceof _ ? new _( n.type, e( n.content ), n.alias ) : Array.isArray( n ) ? n.map( e ) : n.replace( /&/g, "&amp;" ).replace( /</g, "&lt;" ).replace( /\u00a0/g, " " )
          },
          type: function ( e ) {
            return Object.prototype.toString.call( e ).slice( 8, -1 )
          },
          objId: function ( e ) {
            return e.__id || Object.defineProperty( e, "__id", {
              value: ++n
            } ), e.__id
          },
          clone: function t( e, r ) {
            var a, n, l = C.util.type( e );
            switch ( r = r || {}, l ) {
              case "Object":
                if ( n = C.util.objId( e ), r[ n ] ) return r[ n ];
                for ( var i in a = {}, r[ n ] = a, e ) e.hasOwnProperty( i ) && ( a[ i ] = t( e[ i ], r ) );
                return a;
              case "Array":
                return n = C.util.objId( e ), r[ n ] ? r[ n ] : ( a = [], r[ n ] = a, e.forEach( function ( e, n ) {
                  a[ n ] = t( e, r )
                } ), a );
              default:
                return e
            }
          },
          getLanguage: function ( e ) {
            for ( ; e && !c.test( e.className ); ) e = e.parentElement;
            return e ? ( e.className.match( c ) || [ , "none" ] )[ 1 ].toLowerCase() : "none"
          },
          currentScript: function () {
            if ( "undefined" == typeof document ) return null;
            if ( "currentScript" in document ) return document.currentScript;
            try {
              throw new Error
            } catch ( e ) {
              var n = ( /at [^(\r\n]*\((.*):.+:.+\)$/i.exec( e.stack ) || [] )[ 1 ];
              if ( n ) {
                var t = document.getElementsByTagName( "script" );
                for ( var r in t )
                  if ( t[ r ].src == n ) return t[ r ]
              }
              return null
            }
          }
        },
        languages: {
          extend: function ( e, n ) {
            var t = C.util.clone( C.languages[ e ] );
            for ( var r in n ) t[ r ] = n[ r ];
            return t
          },
          insertBefore: function ( t, e, n, r ) {
            var a = ( r = r || C.languages )[ t ],
              l = {};
            for ( var i in a )
              if ( a.hasOwnProperty( i ) ) {
                if ( i == e )
                  for ( var o in n ) n.hasOwnProperty( o ) && ( l[ o ] = n[ o ] );
                n.hasOwnProperty( i ) || ( l[ i ] = a[ i ] )
              } var s = r[ t ];
            return r[ t ] = l, C.languages.DFS( C.languages, function ( e, n ) {
              n === s && e != t && ( this[ e ] = l )
            } ), l
          },
          DFS: function e( n, t, r, a ) {
            a = a || {};
            var l = C.util.objId;
            for ( var i in n )
              if ( n.hasOwnProperty( i ) ) {
                t.call( n, i, n[ i ], r || i );
                var o = n[ i ],
                  s = C.util.type( o );
                "Object" !== s || a[ l( o ) ] ? "Array" !== s || a[ l( o ) ] || ( a[ l( o ) ] = !0, e( o, t, i, a ) ) : ( a[ l( o ) ] = !0, e( o, t, null, a ) )
              }
          }
        },
        plugins: {},
        highlightAll: function ( e, n ) {
          C.highlightAllUnder( document, e, n )
        },
        highlightAllUnder: function ( e, n, t ) {
          var r = {
            callback: t,
            container: e,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          C.hooks.run( "before-highlightall", r ), r.elements = Array.prototype.slice.apply( r.container.querySelectorAll( r.selector ) ), C.hooks.run( "before-all-elements-highlight", r );
          for ( var a, l = 0; a = r.elements[ l++ ]; ) C.highlightElement( a, !0 === n, r.callback )
        },
        highlightElement: function ( e, n, t ) {
          var r = C.util.getLanguage( e ),
            a = C.languages[ r ];
          e.className = e.className.replace( c, "" ).replace( /\s+/g, " " ) + " language-" + r;
          var l = e.parentNode;
          l && "pre" === l.nodeName.toLowerCase() && ( l.className = l.className.replace( c, "" ).replace( /\s+/g, " " ) + " language-" + r );
          var i = {
            element: e,
            language: r,
            grammar: a,
            code: e.textContent
          };

          function o( e ) {
            i.highlightedCode = e, C.hooks.run( "before-insert", i ), i.element.innerHTML = i.highlightedCode, C.hooks.run( "after-highlight", i ), C.hooks.run( "complete", i ), t && t.call( i.element )
          }
          if ( C.hooks.run( "before-sanity-check", i ), !i.code ) return C.hooks.run( "complete", i ), void( t && t.call( i.element ) );
          if ( C.hooks.run( "before-highlight", i ), i.grammar )
            if ( n && u.Worker ) {
              var s = new Worker( C.filename );
              s.onmessage = function ( e ) {
                o( e.data )
              }, s.postMessage( JSON.stringify( {
                language: i.language,
                code: i.code,
                immediateClose: !0
              } ) )
            } else o( C.highlight( i.code, i.grammar, i.language ) );
          else o( C.util.encode( i.code ) )
        },
        highlight: function ( e, n, t ) {
          var r = {
            code: e,
            grammar: n,
            language: t
          };
          return C.hooks.run( "before-tokenize", r ), r.tokens = C.tokenize( r.code, r.grammar ), C.hooks.run( "after-tokenize", r ), _.stringify( C.util.encode( r.tokens ), r.language )
        },
        tokenize: function ( e, n ) {
          var t = n.rest;
          if ( t ) {
            for ( var r in t ) n[ r ] = t[ r ];
            delete n.rest
          }
          var a = new l;
          return M( a, a.head, e ),
            function e( n, t, r, a, l, i, o ) {
              for ( var s in r )
                if ( r.hasOwnProperty( s ) && r[ s ] ) {
                  var u = r[ s ];
                  u = Array.isArray( u ) ? u : [ u ];
                  for ( var c = 0; c < u.length; ++c ) {
                    if ( o && o == s + "," + c ) return;
                    var g = u[ c ],
                      f = g.inside,
                      h = !!g.lookbehind,
                      d = !!g.greedy,
                      v = 0,
                      p = g.alias;
                    if ( d && !g.pattern.global ) {
                      var m = g.pattern.toString().match( /[imsuy]*$/ )[ 0 ];
                      g.pattern = RegExp( g.pattern.source, m + "g" )
                    }
                    g = g.pattern || g;
                    for ( var y = a.next, k = l; y !== t.tail; k += y.value.length, y = y.next ) {
                      var b = y.value;
                      if ( t.length > n.length ) return;
                      if ( !( b instanceof _ ) ) {
                        var x = 1;
                        if ( d && y != t.tail.prev ) {
                          g.lastIndex = k;
                          var w = g.exec( n );
                          if ( !w ) break;
                          var A = w.index + ( h && w[ 1 ] ? w[ 1 ].length : 0 ),
                            P = w.index + w[ 0 ].length,
                            S = k;
                          for ( S += y.value.length; S <= A; ) y = y.next, S += y.value.length;
                          if ( S -= y.value.length, k = S, y.value instanceof _ ) continue;
                          for ( var O = y; O !== t.tail && ( S < P || "string" == typeof O.value && !O.prev.value.greedy ); O = O.next ) x++, S += O.value.length;
                          x--, b = n.slice( k, S ), w.index -= k
                        } else {
                          g.lastIndex = 0;
                          var w = g.exec( b )
                        }
                        if ( w ) {
                          h && ( v = w[ 1 ] ? w[ 1 ].length : 0 );
                          var A = w.index + v,
                            w = w[ 0 ].slice( v ),
                            P = A + w.length,
                            E = b.slice( 0, A ),
                            N = b.slice( P ),
                            j = y.prev;
                          E && ( j = M( t, j, E ), k += E.length ), W( t, j, x );
                          var L = new _( s, f ? C.tokenize( w, f ) : w, p, w, d );
                          if ( y = M( t, j, L ), N && M( t, y, N ), 1 < x && e( n, t, r, y.prev, k, !0, s + "," + c ), i ) break
                        } else if ( i ) break
                      }
                    }
                  }
                }
            }( e, a, n, a.head, 0 ),
            function ( e ) {
              var n = [],
                t = e.head.next;
              for ( ; t !== e.tail; ) n.push( t.value ), t = t.next;
              return n
            }( a )
        },
        hooks: {
          all: {},
          add: function ( e, n ) {
            var t = C.hooks.all;
            t[ e ] = t[ e ] || [], t[ e ].push( n )
          },
          run: function ( e, n ) {
            var t = C.hooks.all[ e ];
            if ( t && t.length )
              for ( var r, a = 0; r = t[ a++ ]; ) r( n )
          }
        },
        Token: _
      };

    function _( e, n, t, r, a ) {
      this.type = e, this.content = n, this.alias = t, this.length = 0 | ( r || "" ).length, this.greedy = !!a
    }

    function l() {
      var e = {
          value: null,
          prev: null,
          next: null
        },
        n = {
          value: null,
          prev: e,
          next: null
        };
      e.next = n, this.head = e, this.tail = n, this.length = 0
    }

    function M( e, n, t ) {
      var r = n.next,
        a = {
          value: t,
          prev: n,
          next: r
        };
      return n.next = a, r.prev = a, e.length++, a
    }

    function W( e, n, t ) {
      for ( var r = n.next, a = 0; a < t && r !== e.tail; a++ ) r = r.next;
      ( n.next = r ).prev = n, e.length -= a
    }
    if ( u.Prism = C, _.stringify = function n( e, t ) {
        if ( "string" == typeof e ) return e;
        if ( Array.isArray( e ) ) {
          var r = "";
          return e.forEach( function ( e ) {
            r += n( e, t )
          } ), r
        }
        var a = {
            type: e.type,
            content: n( e.content, t ),
            tag: "span",
            classes: [ "token", e.type ],
            attributes: {},
            language: t
          },
          l = e.alias;
        l && ( Array.isArray( l ) ? Array.prototype.push.apply( a.classes, l ) : a.classes.push( l ) ), C.hooks.run( "wrap", a );
        var i = "";
        for ( var o in a.attributes ) i += " " + o + '="' + ( a.attributes[ o ] || "" ).replace( /"/g, "&quot;" ) + '"';
        return "<" + a.tag + ' class="' + a.classes.join( " " ) + '"' + i + ">" + a.content + "</" + a.tag + ">"
      }, !u.document ) return u.addEventListener && ( C.disableWorkerMessageHandler || u.addEventListener( "message", function ( e ) {
      var n = JSON.parse( e.data ),
        t = n.language,
        r = n.code,
        a = n.immediateClose;
      u.postMessage( C.highlight( r, C.languages[ t ], t ) ), a && u.close()
    }, !1 ) ), C;
    var e = C.util.currentScript();

    function t() {
      C.manual || C.highlightAll()
    }
    if ( e && ( C.filename = e.src, e.hasAttribute( "data-manual" ) && ( C.manual = !0 ) ), !C.manual ) {
      var r = document.readyState;
      "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener( "DOMContentLoaded", t ) : window.requestAnimationFrame ? window.requestAnimationFrame( t ) : window.setTimeout( t, 16 )
    }
    return C
  }( _self );
"undefined" != typeof module && module.exports && ( module.exports = Prism ), "undefined" != typeof global && ( global.Prism = Prism );
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/,
      name: /[^\s<>'"]+/
    }
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [ {
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/ ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [ {
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i ]
}, Prism.languages.markup.tag.inside[ "attr-value" ].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside[ "internal-subset" ].inside = Prism.languages.markup, Prism.hooks.add( "wrap", function ( a ) {
  "entity" === a.type && ( a.attributes.title = a.content.replace( /&amp;/, "&" ) )
} ), Object.defineProperty( Prism.languages.markup.tag, "addInlined", {
  value: function ( a, e ) {
    var s = {};
    s[ "language-" + e ] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[ e ]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    n[ "language-" + e ] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[ e ]
    };
    var t = {};
    t[ a ] = {
      pattern: RegExp( "(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace( /__/g, function () {
        return a
      } ), "i" ),
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, Prism.languages.insertBefore( "markup", "cdata", t )
  }
} ), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend( "markup", {} ), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
! function ( s ) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        }
      }
    },
    url: {
      pattern: RegExp( "url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i" ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/
      }
    },
    selector: RegExp( "[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)" ),
    string: {
      pattern: e,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && ( t.tag.addInlined( "style", "css" ), s.languages.insertBefore( "inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: t.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: s.languages.css
        }
      },
      alias: "language-css"
    }
  }, t.tag ) )
}( Prism );
Prism.languages.clike = {
  comment: [ {
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  } ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend( "clike", {
  "class-name": [ Prism.languages.clike[ "class-name" ], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  } ],
  keyword: [ {
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  } ],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
} ), Prism.languages.javascript[ "class-name" ][ 0 ].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore( "javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [ {
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  } ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
} ), Prism.languages.insertBefore( "javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
} ), Prism.languages.markup && Prism.languages.markup.tag.addInlined( "script", "javascript" ), Prism.languages.js = Prism.languages.javascript;
Prism.languages.c = Prism.languages.extend( "clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,
    lookbehind: !0
  },
  keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  function: /[a-z_]\w*(?=\s*\()/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
} ), Prism.languages.insertBefore( "c", "string", {
  macro: {
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [ {
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: !0
      }, Prism.languages.c.string ],
      comment: Prism.languages.c.comment,
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      }
    }
  },
  constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
} ), delete Prism.languages.c.boolean;
! function ( e ) {
  var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
    a = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
  e.languages.java = e.languages.extend( "clike", {
    "class-name": [ a, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/ ],
    keyword: t,
    function: [ e.languages.clike.function, {
      pattern: /(\:\:)[a-z_]\w*/,
      lookbehind: !0
    } ],
    number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    }
  } ), e.languages.insertBefore( "java", "string", {
    "triple-quoted-string": {
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    }
  } ), e.languages.insertBefore( "java", "class-name", {
    annotation: {
      alias: "punctuation",
      pattern: /(^|[^.])@\w+/,
      lookbehind: !0
    },
    namespace: {
      pattern: RegExp( "(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace( /<keyword>/g, function () {
        return t.source
      } ) ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    },
    generics: {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        "class-name": a,
        keyword: t,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    }
  } )
}( Prism );
Prism.languages.objectivec = Prism.languages.extend( "c", {
  keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
} ), delete Prism.languages.objectivec[ "class-name" ], Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [ {
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: !0
  }, /@[\w.$]+/ ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
! function ( E ) {
  var A = E.languages.plsql = E.languages.extend( "sql", {
      comment: [ /\/\*[\s\S]*?\*\//, /--.*/ ]
    } ),
    T = A.keyword;
  Array.isArray( T ) || ( T = A.keyword = [ T ] ), T.unshift( /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i );
  var R = A.operator;
  Array.isArray( R ) || ( R = A.operator = [ R ] ), R.unshift( /:=/ )
}( Prism );
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0
  },
  "string-interpolation": {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: !0,
    alias: [ "annotation", "punctuation" ],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:True|False|None)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
}, Prism.languages.python[ "string-interpolation" ].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
! function ( i ) {
  var t = i.util.clone( i.languages.javascript );
  i.languages.jsx = i.languages.extend( "markup", t ), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside[ "attr-value" ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside[ "class-name" ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore( "inside", "attr-name", {
    spread: {
      pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
      inside: {
        punctuation: /\.{3}|[{}.]/,
        "attr-value": /\w+/
      }
    }
  }, i.languages.jsx.tag ), i.languages.insertBefore( "inside", "attr-value", {
    script: {
      pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
      inside: {
        "script-punctuation": {
          pattern: /^=(?={)/,
          alias: "punctuation"
        },
        rest: i.languages.jsx
      },
      alias: "language-javascript"
    }
  }, i.languages.jsx.tag );
  var o = function ( t ) {
      return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map( o ).join( "" ) : ""
    },
    p = function ( t ) {
      for ( var n = [], e = 0; e < t.length; e++ ) {
        var a = t[ e ],
          s = !1;
        if ( "string" != typeof a && ( "tag" === a.type && a.content[ 0 ] && "tag" === a.content[ 0 ].type ? "</" === a.content[ 0 ].content[ 0 ].content ? 0 < n.length && n[ n.length - 1 ].tagName === o( a.content[ 0 ].content[ 1 ] ) && n.pop() : "/>" === a.content[ a.content.length - 1 ].content || n.push( {
            tagName: o( a.content[ 0 ].content[ 1 ] ),
            openedBraces: 0
          } ) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[ n.length - 1 ].openedBraces++ : 0 < n.length && 0 < n[ n.length - 1 ].openedBraces && "punctuation" === a.type && "}" === a.content ? n[ n.length - 1 ].openedBraces-- : s = !0 ), ( s || "string" == typeof a ) && 0 < n.length && 0 === n[ n.length - 1 ].openedBraces ) {
          var g = o( a );
          e < t.length - 1 && ( "string" == typeof t[ e + 1 ] || "plain-text" === t[ e + 1 ].type ) && ( g += o( t[ e + 1 ] ), t.splice( e + 1, 1 ) ), 0 < e && ( "string" == typeof t[ e - 1 ] || "plain-text" === t[ e - 1 ].type ) && ( g = o( t[ e - 1 ] ) + g, t.splice( e - 1, 1 ), e-- ), t[ e ] = new i.Token( "plain-text", g, null, g )
        }
        a.content && "string" != typeof a.content && p( a.content )
      }
    };
  i.hooks.add( "after-tokenize", function ( t ) {
    "jsx" !== t.language && "tsx" !== t.language || p( t.tokens )
  } )
}( Prism );
! function ( e ) {
  e.languages.typescript = e.languages.extend( "javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
    },
    keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  } ), delete e.languages.typescript.parameter;
  var n = e.languages.extend( "typescript", {} );
  delete n[ "class-name" ], e.languages.typescript[ "class-name" ].inside = n, e.languages.insertBefore( "typescript", "function", {
    "generic-function": {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: n
        }
      }
    }
  } ), e.languages.ts = e.languages.typescript
}( Prism );
var typescript = Prism.util.clone( Prism.languages.typescript );
Prism.languages.tsx = Prism.languages.extend( "jsx", typescript );
Prism.languages.swift = Prism.languages.extend( "clike", {
  string: {
    pattern: /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
        inside: {
          delimiter: {
            pattern: /^\\\(|\)$/,
            alias: "variable"
          }
        }
      }
    }
  },
  keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
  builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
} ), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.languages.swift;

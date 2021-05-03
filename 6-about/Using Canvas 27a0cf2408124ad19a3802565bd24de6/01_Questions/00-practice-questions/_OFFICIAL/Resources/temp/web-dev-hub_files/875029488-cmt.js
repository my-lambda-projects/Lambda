( function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var aa = "INPUT",
    ba = "_imgFileNameError",
    ca = "_imgUrlTextError",
    da = "about:invalid#zClosurez",
    ea = "allHolder",
    fa = "aria-expanded",
    ha = "bgresponse",
    ia = "chooseWidget",
    ja = "commentBodyField",
    e = "complete",
    ka = "displayModeLayout",
    ma = "displayModeNone",
    h = "div",
    na = "encodedSelectedId",
    m = "function",
    oa = "goog-zippy-collapsed",
    pa = "goog-zippy-expanded",
    qa = "hidden",
    ra = "identity-type-",
    sa = "identityHolder",
    ta = "identityMenu",
    ua = "keypress",
    va = "layout-widget-description",
    wa = "layout-widget-title",
    xa = "main-status-holder",
    ya = "nameUrlIdentityHolder",
    n = "none",
    za = "number",
    p = "object",
    Aa = "postCommentSubmit",
    Ba = "ready",
    Ca = "rotate(-45deg)",
    Da = "sectionWidth",
    Ea = "select-multiple",
    Fa = "showPreview",
    Ga = "status-message",
    Ha = "status-message-inner",
    q = "string",
    Ia = "subscribeButtonHolder",
    Ja = "success",
    r, Ka = function ( a ) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[ b++ ]
        } : {
          done: !0
        }
      }
    },
    La = La || {},
    u = this || self,
    Oa = function ( a ) {
      if ( a && a != u ) return Ma( a.document );
      null === Na && ( Na = Ma( u.document ) );
      return Na
    },
    Pa = /^[\w+/_-]+[=]{0,2}$/,
    Na = null,
    Ma = function ( a ) {
      return ( a =
        a.querySelector && a.querySelector( "script[nonce]" ) ) && ( a = a.nonce || a.getAttribute( "nonce" ) ) && Pa.test( a ) ? a : ""
    },
    Qa = function () {},
    Ra = function ( a ) {
      a.zc = void 0;
      a.lg = function () {
        return a.zc ? a.zc : a.zc = new a
      }
    },
    Sa = function ( a ) {
      var b = typeof a;
      b = b != p ? b : a ? Array.isArray( a ) ? "array" : b : "null";
      return "array" == b || b == p && typeof a.length == za
    },
    v = function ( a ) {
      var b = typeof a;
      return b == p && null != a || b == m
    },
    Va = function ( a ) {
      return Object.prototype.hasOwnProperty.call( a, Ta ) && a[ Ta ] || ( a[ Ta ] = ++Ua )
    },
    Ta = "closure_uid_" + ( 1E9 * Math.random() >>> 0 ),
    Ua = 0,
    Wa = function ( a, b, c ) {
      return a.call.apply( a.bind, arguments )
    },
    Xa = function ( a, b, c ) {
      if ( !a ) throw Error();
      if ( 2 < arguments.length ) {
        var d = Array.prototype.slice.call( arguments, 2 );
        return function () {
          var f = Array.prototype.slice.call( arguments );
          Array.prototype.unshift.apply( f, d );
          return a.apply( b, f )
        }
      }
      return function () {
        return a.apply( b, arguments )
      }
    },
    w = function ( a, b, c ) {
      w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf( "native code" ) ? Wa : Xa;
      return w.apply( null, arguments )
    },
    x = function ( a, b, c ) {
      a =
        a.split( "." );
      c = c || u;
      a[ 0 ] in c || "undefined" == typeof c.execScript || c.execScript( "var " + a[ 0 ] );
      for ( var d; a.length && ( d = a.shift() ); ) a.length || void 0 === b ? c = c[ d ] && c[ d ] !== Object.prototype[ d ] ? c[ d ] : c[ d ] = {} : c[ d ] = b
    },
    y = function ( a, b ) {
      function c() {}
      c.prototype = b.prototype;
      a.A = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.Rh = function ( d, f, g ) {
        for ( var k = Array( arguments.length - 2 ), l = 2; l < arguments.length; l++ ) k[ l - 2 ] = arguments[ l ];
        return b.prototype[ f ].apply( d, k )
      }
    },
    Ya = function ( a ) {
      return a
    };

  function Za( a ) {
    if ( Error.captureStackTrace ) Error.captureStackTrace( this, Za );
    else {
      var b = Error().stack;
      b && ( this.stack = b )
    }
    a && ( this.message = String( a ) )
  }
  y( Za, Error );
  Za.prototype.name = "CustomError";
  var $a;
  var ab = function ( a, b ) {
    a = a.split( "%s" );
    for ( var c = "", d = a.length - 1, f = 0; f < d; f++ ) c += a[ f ] + ( f < b.length ? b[ f ] : "%s" );
    Za.call( this, c + a[ d ] )
  };
  y( ab, Za );
  ab.prototype.name = "AssertionError";
  var cb = Array.prototype.indexOf ? function ( a, b, c ) {
      return Array.prototype.indexOf.call( a, b, c )
    } : function ( a, b, c ) {
      c = null == c ? 0 : 0 > c ? Math.max( 0, a.length + c ) : c;
      if ( typeof a === q ) return typeof b !== q || 1 != b.length ? -1 : a.indexOf( b, c );
      for ( ; c < a.length; c++ )
        if ( c in a && a[ c ] === b ) return c;
      return -1
    },
    db = Array.prototype.lastIndexOf ? function ( a, b, c ) {
      return Array.prototype.lastIndexOf.call( a, b, null == c ? a.length - 1 : c )
    } : function ( a, b, c ) {
      c = null == c ? a.length - 1 : c;
      0 > c && ( c = Math.max( 0, a.length + c ) );
      if ( typeof a === q ) return typeof b !== q || 1 != b.length ?
        -1 : a.lastIndexOf( b, c );
      for ( ; 0 <= c; c-- )
        if ( c in a && a[ c ] === b ) return c;
      return -1
    },
    eb = Array.prototype.forEach ? function ( a, b, c ) {
      Array.prototype.forEach.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d = a.length, f = typeof a === q ? a.split( "" ) : a, g = 0; g < d; g++ ) g in f && b.call( c, f[ g ], g, a )
    },
    fb = Array.prototype.filter ? function ( a, b, c ) {
      return Array.prototype.filter.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d = a.length, f = [], g = 0, k = typeof a === q ? a.split( "" ) : a, l = 0; l < d; l++ )
        if ( l in k ) {
          var t = k[ l ];
          b.call( c, t, l, a ) && ( f[ g++ ] = t )
        } return f
    },
    gb = Array.prototype.map ?
    function ( a, b, c ) {
      return Array.prototype.map.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d = a.length, f = Array( d ), g = typeof a === q ? a.split( "" ) : a, k = 0; k < d; k++ ) k in g && ( f[ k ] = b.call( c, g[ k ], k, a ) );
      return f
    },
    hb = Array.prototype.some ? function ( a, b, c ) {
      return Array.prototype.some.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d = a.length, f = typeof a === q ? a.split( "" ) : a, g = 0; g < d; g++ )
        if ( g in f && b.call( c, f[ g ], g, a ) ) return !0;
      return !1
    },
    ib = Array.prototype.every ? function ( a, b, c ) {
      return Array.prototype.every.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d =
          a.length, f = typeof a === q ? a.split( "" ) : a, g = 0; g < d; g++ )
        if ( g in f && !b.call( c, f[ g ], g, a ) ) return !1;
      return !0
    };

  function jb( a, b, c ) {
    a: {
      for ( var d = a.length, f = typeof a === q ? a.split( "" ) : a, g = 0; g < d; g++ )
        if ( g in f && b.call( c, f[ g ], g, a ) ) {
          b = g;
          break a
        } b = -1
    }
    return 0 > b ? null : typeof a === q ? a.charAt( b ) : a[ b ]
  }

  function z( a, b ) {
    return 0 <= cb( a, b )
  }

  function kb( a ) {
    if ( !Array.isArray( a ) )
      for ( var b = a.length - 1; 0 <= b; b-- ) delete a[ b ];
    a.length = 0
  }

  function lb( a, b ) {
    b = cb( a, b );
    var c;
    ( c = 0 <= b ) && Array.prototype.splice.call( a, b, 1 );
    return c
  }

  function mb( a ) {
    return Array.prototype.concat.apply( [], arguments )
  }

  function nb( a ) {
    var b = a.length;
    if ( 0 < b ) {
      for ( var c = Array( b ), d = 0; d < b; d++ ) c[ d ] = a[ d ];
      return c
    }
    return []
  }

  function ob( a, b, c ) {
    return 2 >= arguments.length ? Array.prototype.slice.call( a, b ) : Array.prototype.slice.call( a, b, c )
  };
  var pb = String.prototype.trim ? function ( a ) {
      return a.trim()
    } : function ( a ) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec( a )[ 1 ]
    },
    qb = /&/g,
    rb = /</g,
    sb = />/g,
    tb = /"/g,
    ub = /'/g,
    vb = /\x00/g,
    wb = /[\x00&<>"']/,
    A = function ( a, b ) {
      return -1 != a.indexOf( b )
    },
    xb = function ( a, b ) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var B;
  a: {
    var yb = u.navigator;
    if ( yb ) {
      var zb = yb.userAgent;
      if ( zb ) {
        B = zb;
        break a
      }
    }
    B = ""
  };
  var Ab = function ( a, b, c ) {
      for ( var d in a ) b.call( c, a[ d ], d, a )
    },
    Cb = function ( a, b, c ) {
      for ( var d in a )
        if ( b.call( c, a[ d ], d, a ) ) return !0;
      return !1
    },
    Db = function ( a ) {
      var b = [],
        c = 0,
        d;
      for ( d in a ) b[ c++ ] = a[ d ];
      return b
    },
    Eb = function ( a ) {
      var b = [],
        c = 0,
        d;
      for ( d in a ) b[ c++ ] = d;
      return b
    },
    Fb = function ( a, b ) {
      for ( var c in a )
        if ( a[ c ] == b ) return !0;
      return !1
    },
    Gb = function ( a ) {
      for ( var b in a ) return !1;
      return !0
    },
    Hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split( " " ),
    Ib = function ( a, b ) {
      for ( var c,
          d, f = 1; f < arguments.length; f++ ) {
        d = arguments[ f ];
        for ( c in d ) a[ c ] = d[ c ];
        for ( var g = 0; g < Hb.length; g++ ) c = Hb[ g ], Object.prototype.hasOwnProperty.call( d, c ) && ( a[ c ] = d[ c ] )
      }
    };
  var Jb = function ( a ) {
    return a
  };
  var Kb, Lb = function () {
    if ( void 0 === Kb ) {
      var a = null,
        b = u.trustedTypes;
      if ( b && b.createPolicy ) try {
        a = b.createPolicy( "goog#html", {
          createHTML: Ya,
          createScript: Ya,
          createScriptURL: Ya
        } )
      } catch ( c ) {
        u.console && u.console.error( c.message )
      }
      Kb = a
    }
    return Kb
  };
  var Ob = function ( a, b ) {
    this.Ye = a === Mb && b || "";
    this.Cf = Nb
  };
  Ob.prototype.ka = !0;
  Ob.prototype.ea = function () {
    return this.Ye
  };
  var Nb = {},
    Mb = {};
  var Qb = function ( a, b ) {
    this.Je = b === Pb ? a : ""
  };
  Qb.prototype.ka = !0;
  Qb.prototype.ea = function () {
    return this.Je.toString()
  };
  var Pb = {};
  var C = function ( a, b ) {
    this.Ie = b === Rb ? a : ""
  };
  C.prototype.ka = !0;
  C.prototype.ea = function () {
    return this.Ie.toString()
  };
  var Sb = function ( a ) {
      return a instanceof C && a.constructor === C ? a.Ie : "type_error:SafeUrl"
    },
    Tb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    Ub = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Vb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Wb = function ( a ) {
      if ( a instanceof C ) return a;
      a = typeof a == p && a.ka ? a.ea() : String( a );
      if ( Vb.test( a ) ) a = new C( a, Rb );
      else {
        a = String( a );
        a = a.replace( /(%0A|%0D)/g, "" );
        var b = a.match( Ub );
        a = b && Tb.test( b[ 1 ] ) ? new C( a, Rb ) : null
      }
      return a
    },
    Rb = {},
    Xb = new C( da, Rb );
  var Zb = function ( a, b ) {
    this.He = b === Yb ? a : ""
  };
  Zb.prototype.ka = !0;
  Zb.prototype.ea = function () {
    return this.He
  };
  var Yb = {},
    $b = new Zb( "", Yb ),
    gc = function ( a ) {
      if ( a instanceof C ) return 'url("' + Sb( a ).replace( /</g, "%3c" ).replace( /[\\"]/g, "\\$&" ) + '")';
      if ( a instanceof Ob ) a = a instanceof Ob && a.constructor === Ob && a.Cf === Nb ? a.Ye : "type_error:Const";
      else {
        a = String( a );
        var b = a.replace( ac, "$1" ).replace( ac, "$1" ).replace( bc, "url" );
        if ( cc.test( b ) ) {
          if ( b = !dc.test( a ) ) {
            for ( var c = b = !0, d = 0; d < a.length; d++ ) {
              var f = a.charAt( d );
              "'" == f && c ? b = !b : '"' == f && b && ( c = !c )
            }
            b = b && c && ec( a )
          }
          a = b ? fc( a ) : "zClosurez"
        } else a = "zClosurez"
      }
      if ( /[{;}]/.test( a ) ) throw new ab( "Value does not allow [{;}], got: %s.",
        [ a ] );
      return a
    },
    ec = function ( a ) {
      for ( var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++ ) {
        var f = a.charAt( d );
        if ( "]" == f ) {
          if ( b ) return !1;
          b = !0
        } else if ( "[" == f ) {
          if ( !b ) return !1;
          b = !1
        } else if ( !b && !c.test( f ) ) return !1
      }
      return b
    },
    cc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    bc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    ac = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    dc = /\/\*/,
    fc = function ( a ) {
      return a.replace( bc,
        function ( b, c, d, f ) {
          var g = "";
          d = d.replace( /^(['"])(.*)\1$/, function ( k, l, t ) {
            g = l;
            return t
          } );
          b = ( Wb( d ) || Xb ).ea();
          return c + g + b + g + f
        } )
    };
  var hc = {},
    ic = function ( a, b ) {
      this.Ge = b === hc ? a : "";
      this.ka = !0
    },
    jc = function ( a, b ) {
      if ( A( a, "<" ) ) throw Error( "Selector does not allow '<', got: " + a );
      var c = a.replace( /('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "" );
      if ( !/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test( c ) ) throw Error( "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a );
      a: {
        for ( var d = {
            "(": ")",
            "[": "]"
          }, f = [], g = 0; g < c.length; g++ ) {
          var k = c[ g ];
          if ( d[ k ] ) f.push( d[ k ] );
          else if ( Fb( d, k ) && f.pop() != k ) {
            c = !1;
            break a
          }
        }
        c = 0 == f.length
      }
      if ( !c ) throw Error( "() and [] in selector must be balanced, got: " +
        a );
      if ( !( b instanceof Zb ) ) {
        c = "";
        for ( var l in b )
          if ( Object.prototype.hasOwnProperty.call( b, l ) ) {
            if ( !/^[-_a-zA-Z0-9]+$/.test( l ) ) throw Error( "Name allows only [-_a-zA-Z0-9], got: " + l );
            d = b[ l ];
            null != d && ( d = Array.isArray( d ) ? gb( d, gc ).join( " " ) : gc( d ), c += l + ":" + d + ";" )
          } b = c ? new Zb( c, Yb ) : $b
      }
      a = a + "{" + ( b instanceof Zb && b.constructor === Zb ? b.He : "type_error:SafeStyle" ).replace( /</g, "\\3C " ) + "}";
      return new ic( a, hc )
    },
    lc = function ( a ) {
      var b = "",
        c = function ( d ) {
          Array.isArray( d ) ? eb( d, c ) : b += kc( d )
        };
      eb( arguments, c );
      return new ic( b,
        hc )
    };
  ic.prototype.ea = function () {
    return this.Ge
  };
  var kc = function ( a ) {
    return a instanceof ic && a.constructor === ic ? a.Ge : "type_error:SafeStyleSheet"
  };
  var nc = function ( a, b, c ) {
    this.Fe = c === mc ? a : ""
  };
  nc.prototype.ka = !0;
  nc.prototype.ea = function () {
    return this.Fe.toString()
  };
  var oc = function ( a ) {
      return a instanceof nc && a.constructor === nc ? a.Fe : "type_error:SafeHtml"
    },
    mc = {},
    pc = new nc( u.trustedTypes && u.trustedTypes.emptyHTML || "", 0, mc );
  var qc = function ( a ) {
      var b = !1,
        c;
      return function () {
        b || ( c = a(), b = !0 );
        return c
      }
    }( function () {
      var a = document.createElement( h ),
        b = document.createElement( h );
      b.appendChild( document.createElement( h ) );
      a.appendChild( b );
      b = a.firstChild.firstChild;
      a.innerHTML = oc( pc );
      return !b.parentElement
    } ),
    rc = function ( a, b ) {
      if ( qc() )
        for ( ; a.lastChild; ) a.removeChild( a.lastChild );
      a.innerHTML = oc( b )
    };
  var sc = function ( a ) {
      return a.replace( /(\r\n|\r|\n)+/g, " " )
    },
    tc = function ( a ) {
      return a.replace( /\xa0|[ \t]+/g, " " )
    },
    uc = function ( a, b ) {
      b ? a = a.replace( qb, "&amp;" ).replace( rb, "&lt;" ).replace( sb, "&gt;" ).replace( tb, "&quot;" ).replace( ub, "&#39;" ).replace( vb, "&#0;" ) : wb.test( a ) && ( -1 != a.indexOf( "&" ) && ( a = a.replace( qb, "&amp;" ) ), -1 != a.indexOf( "<" ) && ( a = a.replace( rb, "&lt;" ) ), -1 != a.indexOf( ">" ) && ( a = a.replace( sb, "&gt;" ) ), -1 != a.indexOf( '"' ) && ( a = a.replace( tb, "&quot;" ) ), -1 != a.indexOf( "'" ) && ( a = a.replace( ub, "&#39;" ) ), -1 != a.indexOf( "\x00" ) &&
        ( a = a.replace( vb, "&#0;" ) ) );
      return a
    };
  var vc = function ( a ) {
    vc[ " " ]( a );
    return a
  };
  vc[ " " ] = Qa;
  var wc = function ( a, b, c, d ) {
    d = d ? d( b ) : b;
    return Object.prototype.hasOwnProperty.call( a, d ) ? a[ d ] : a[ d ] = c( b )
  };
  var xc = A( B, "Opera" ),
    E = A( B, "Trident" ) || A( B, "MSIE" ),
    yc = A( B, "Edge" ),
    F = A( B, "Gecko" ) && !( A( B.toLowerCase(), "webkit" ) && !A( B, "Edge" ) ) && !( A( B, "Trident" ) || A( B, "MSIE" ) ) && !A( B, "Edge" ),
    G = A( B.toLowerCase(), "webkit" ) && !A( B, "Edge" ),
    H = A( B, "Macintosh" ),
    zc = function () {
      var a = u.document;
      return a ? a.documentMode : void 0
    },
    Ac;
  a: {
    var Bc = "",
      Cc = function () {
        var a = B;
        if ( F ) return /rv:([^\);]+)(\)|;)/.exec( a );
        if ( yc ) return /Edge\/([\d\.]+)/.exec( a );
        if ( E ) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec( a );
        if ( G ) return /WebKit\/(\S+)/.exec( a );
        if ( xc ) return /(?:Version)[ \/]?(\S+)/.exec( a )
      }();Cc && ( Bc = Cc ? Cc[ 1 ] : "" );
    if ( E ) {
      var Dc = zc();
      if ( null != Dc && Dc > parseFloat( Bc ) ) {
        Ac = String( Dc );
        break a
      }
    }
    Ac = Bc
  }
  var Ec = Ac,
    Fc = {},
    Gc = function ( a ) {
      return wc( Fc, a, function () {
        for ( var b = 0, c = pb( String( Ec ) ).split( "." ), d = pb( String( a ) ).split( "." ), f = Math.max( c.length, d.length ), g = 0; 0 == b && g < f; g++ ) {
          var k = c[ g ] || "",
            l = d[ g ] || "";
          do {
            k = /(\d*)(\D*)(.*)/.exec( k ) || [ "", "", "", "" ];
            l = /(\d*)(\D*)(.*)/.exec( l ) || [ "", "", "", "" ];
            if ( 0 == k[ 0 ].length && 0 == l[ 0 ].length ) break;
            b = xb( 0 == k[ 1 ].length ? 0 : parseInt( k[ 1 ], 10 ), 0 == l[ 1 ].length ? 0 : parseInt( l[ 1 ], 10 ) ) || xb( 0 == k[ 2 ].length, 0 == l[ 2 ].length ) || xb( k[ 2 ], l[ 2 ] );
            k = k[ 3 ];
            l = l[ 3 ]
          } while ( 0 == b )
        }
        return 0 <= b
      } )
    },
    Hc;
  if ( u.document && E ) {
    var Ic = zc();
    Hc = Ic ? Ic : parseInt( Ec, 10 ) || void 0
  } else Hc = void 0;
  var Jc = Hc;
  var Kc = !E || 9 <= Number( Jc );
  var Lc = function ( a, b ) {
    this.width = a;
    this.height = b
  };
  r = Lc.prototype;
  r.clone = function () {
    return new Lc( this.width, this.height )
  };
  r.Uf = function () {
    return this.width * this.height
  };
  r.aspectRatio = function () {
    return this.width / this.height
  };
  r.isEmpty = function () {
    return !this.Uf()
  };
  r.ceil = function () {
    this.width = Math.ceil( this.width );
    this.height = Math.ceil( this.height );
    return this
  };
  r.floor = function () {
    this.width = Math.floor( this.width );
    this.height = Math.floor( this.height );
    return this
  };
  r.round = function () {
    this.width = Math.round( this.width );
    this.height = Math.round( this.height );
    return this
  };
  r.scale = function ( a, b ) {
    this.width *= a;
    this.height *= typeof b === za ? b : a;
    return this
  };
  var Oc = function ( a ) {
      return a ? new Mc( Nc( a ) ) : $a || ( $a = new Mc )
    },
    K = function ( a ) {
      return Pc( document, a )
    },
    Pc = function ( a, b ) {
      return typeof b === q ? a.getElementById( b ) : b
    },
    Rc = function ( a, b ) {
      Ab( b, function ( c, d ) {
        c && typeof c == p && c.ka && ( c = c.ea() );
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Qc.hasOwnProperty( d ) ? a.setAttribute( Qc[ d ], c ) : 0 == d.lastIndexOf( "aria-", 0 ) || 0 == d.lastIndexOf( "data-", 0 ) ? a.setAttribute( d, c ) : a[ d ] = c
      } )
    },
    Qc = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    Tc = function ( a, b, c ) {
      return Sc( document, arguments )
    },
    Sc = function ( a, b ) {
      var c = String( b[ 0 ] ),
        d = b[ 1 ];
      if ( !Kc && d && ( d.name || d.type ) ) {
        c = [ "<", c ];
        d.name && c.push( ' name="', uc( d.name ), '"' );
        if ( d.type ) {
          c.push( ' type="', uc( d.type ), '"' );
          var f = {};
          Ib( f, d );
          delete f.type;
          d = f
        }
        c.push( ">" );
        c = c.join( "" )
      }
      c = Uc( a, c );
      d && ( typeof d === q ? c.className = d : Array.isArray( d ) ?
        c.className = d.join( " " ) : Rc( c, d ) );
      2 < b.length && Vc( a, c, b, 2 );
      return c
    },
    Vc = function ( a, b, c, d ) {
      function f( l ) {
        l && b.appendChild( typeof l === q ? a.createTextNode( l ) : l )
      }
      for ( ; d < c.length; d++ ) {
        var g = c[ d ];
        if ( !Sa( g ) || v( g ) && 0 < g.nodeType ) f( g );
        else {
          a: {
            if ( g && typeof g.length == za ) {
              if ( v( g ) ) {
                var k = typeof g.item == m || typeof g.item == q;
                break a
              }
              if ( typeof g === m ) {
                k = typeof g.item == m;
                break a
              }
            }
            k = !1
          }
          eb( k ? nb( g ) : g, f )
        }
      }
    },
    Uc = function ( a, b ) {
      b = String( b );
      "application/xhtml+xml" === a.contentType && ( b = b.toLowerCase() );
      return a.createElement( b )
    },
    Wc = function ( a ) {
      for ( var b; b = a.firstChild; ) a.removeChild( b )
    },
    Nc = function ( a ) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    Mc = function ( a ) {
      this.qa = a || u.document || document
    };
  r = Mc.prototype;
  r.Da = function ( a ) {
    return Pc( this.qa, a )
  };
  r.$ = Mc.prototype.Da;
  r.getElementsByTagName = function ( a, b ) {
    return ( b || this.qa ).getElementsByTagName( String( a ) )
  };
  r.Sd = function ( a, b, c ) {
    c = c || this.qa;
    a = a && "*" != a ? String( a ).toUpperCase() : "";
    if ( c.querySelectorAll && c.querySelector && ( a || b ) ) b = c.querySelectorAll( a + ( b ? "." + b : "" ) );
    else if ( b && c.getElementsByClassName )
      if ( c = c.getElementsByClassName( b ), a ) {
        for ( var d = {}, f = 0, g = 0, k; k = c[ g ]; g++ ) a == k.nodeName && ( d[ f++ ] = k );
        d.length = f;
        b = d
      } else b = c;
    else if ( c = c.getElementsByTagName( a || "*" ), b ) {
      d = {};
      for ( g = f = 0; k = c[ g ]; g++ ) a = k.className, typeof a.split == m && z( a.split( /\s+/ ), b ) && ( d[ f++ ] = k );
      d.length = f;
      b = d
    } else b = c;
    return b
  };
  r.kc = function ( a, b, c ) {
    return Sc( this.qa, arguments )
  };
  r.createElement = function ( a ) {
    return Uc( this.qa, a )
  };
  r.createTextNode = function ( a ) {
    return this.qa.createTextNode( String( a ) )
  };
  r.appendChild = function ( a, b ) {
    a.appendChild( b )
  };
  r.append = function ( a, b ) {
    Vc( Nc( a ), a, arguments, 1 )
  };
  r.canHaveChildren = function ( a ) {
    if ( 1 != a.nodeType ) return !1;
    switch ( a.tagName ) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case aa:
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1
    }
    return !0
  };
  r.removeNode = function ( a ) {
    return a && a.parentNode ? a.parentNode.removeChild( a ) : null
  };
  r.isWindow = function ( a ) {
    return v( a ) && a.window == a
  };
  r.contains = function ( a, b ) {
    if ( !a || !b ) return !1;
    if ( a.contains && 1 == b.nodeType ) return a == b || a.contains( b );
    if ( "undefined" != typeof a.compareDocumentPosition ) return a == b || !!( a.compareDocumentPosition( b ) & 16 );
    for ( ; b && a != b; ) b = b.parentNode;
    return b == a
  };
  var Xc = "StopIteration" in u ? u.StopIteration : {
      message: "StopIteration",
      stack: ""
    },
    Yc = function () {};
  Yc.prototype.next = function () {
    throw Xc;
  };
  Yc.prototype.dc = function () {
    return this
  };
  var Zc = function ( a, b ) {
    this.o = {};
    this.h = [];
    this.ob = this.i = 0;
    var c = arguments.length;
    if ( 1 < c ) {
      if ( c % 2 ) throw Error( "Uneven number of arguments" );
      for ( var d = 0; d < c; d += 2 ) this.set( arguments[ d ], arguments[ d + 1 ] )
    } else a && this.addAll( a )
  };
  r = Zc.prototype;
  r.m = function () {
    return this.i
  };
  r.B = function () {
    this.Sa();
    for ( var a = [], b = 0; b < this.h.length; b++ ) a.push( this.o[ this.h[ b ] ] );
    return a
  };
  r.R = function () {
    this.Sa();
    return this.h.concat()
  };
  r.oa = function ( a ) {
    return $c( this.o, a )
  };
  r.Ua = function ( a ) {
    for ( var b = 0; b < this.h.length; b++ ) {
      var c = this.h[ b ];
      if ( $c( this.o, c ) && this.o[ c ] == a ) return !0
    }
    return !1
  };
  r.equals = function ( a, b ) {
    if ( this === a ) return !0;
    if ( this.i != a.m() ) return !1;
    b = b || ad;
    this.Sa();
    for ( var c, d = 0; c = this.h[ d ]; d++ )
      if ( !b( this.get( c ), a.get( c ) ) ) return !1;
    return !0
  };
  var ad = function ( a, b ) {
    return a === b
  };
  r = Zc.prototype;
  r.isEmpty = function () {
    return 0 == this.i
  };
  r.clear = function () {
    this.o = {};
    this.ob = this.i = this.h.length = 0
  };
  r.remove = function ( a ) {
    return $c( this.o, a ) ? ( delete this.o[ a ], this.i--, this.ob++, this.h.length > 2 * this.i && this.Sa(), !0 ) : !1
  };
  r.Sa = function () {
    if ( this.i != this.h.length ) {
      for ( var a = 0, b = 0; a < this.h.length; ) {
        var c = this.h[ a ];
        $c( this.o, c ) && ( this.h[ b++ ] = c );
        a++
      }
      this.h.length = b
    }
    if ( this.i != this.h.length ) {
      var d = {};
      for ( b = a = 0; a < this.h.length; ) c = this.h[ a ], $c( d, c ) || ( this.h[ b++ ] = c, d[ c ] = 1 ), a++;
      this.h.length = b
    }
  };
  r.get = function ( a, b ) {
    return $c( this.o, a ) ? this.o[ a ] : b
  };
  r.set = function ( a, b ) {
    $c( this.o, a ) || ( this.i++, this.h.push( a ), this.ob++ );
    this.o[ a ] = b
  };
  r.addAll = function ( a ) {
    if ( a instanceof Zc )
      for ( var b = a.R(), c = 0; c < b.length; c++ ) this.set( b[ c ], a.get( b[ c ] ) );
    else
      for ( b in a ) this.set( b, a[ b ] )
  };
  r.forEach = function ( a, b ) {
    for ( var c = this.R(), d = 0; d < c.length; d++ ) {
      var f = c[ d ],
        g = this.get( f );
      a.call( b, g, f, this )
    }
  };
  r.clone = function () {
    return new Zc( this )
  };
  r.dc = function ( a ) {
    this.Sa();
    var b = 0,
      c = this.ob,
      d = this,
      f = new Yc;
    f.next = function () {
      if ( c != d.ob ) throw Error( "The map has changed since the iterator was created" );
      if ( b >= d.h.length ) throw Xc;
      var g = d.h[ b++ ];
      return a ? g : d.o[ g ]
    };
    return f
  };
  var $c = function ( a, b ) {
    return Object.prototype.hasOwnProperty.call( a, b )
  };
  var L = function () {
    this.za = this.za;
    this.Pb = this.Pb
  };
  L.prototype.za = !1;
  L.prototype.pa = function () {
    this.za || ( this.za = !0, this.s() )
  };
  L.prototype.s = function () {
    if ( this.Pb )
      for ( ; this.Pb.length; ) this.Pb.shift()()
  };
  var bd = function ( a ) {
    a && typeof a.pa == m && a.pa()
  };
  var cd = !E || 9 <= Number( Jc ),
    dd = E && !Gc( "9" ),
    ed = function () {
      if ( !u.addEventListener || !Object.defineProperty ) return !1;
      var a = !1,
        b = Object.defineProperty( {}, "passive", {
          get: function () {
            a = !0
          }
        } );
      try {
        u.addEventListener( "test", Qa, b ), u.removeEventListener( "test", Qa, b )
      } catch ( c ) {}
      return a
    }();
  var M = function ( a, b ) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.wa = !1
  };
  M.prototype.stopPropagation = function () {
    this.wa = !0
  };
  M.prototype.preventDefault = function () {
    this.defaultPrevented = !0
  };
  var P = function ( a, b ) {
    M.call( this, a ? a.type : "" );
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.Ba = null;
    a && this.fe( a, b )
  };
  y( P, M );
  var fd = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  P.prototype.fe = function ( a, b ) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[ 0 ] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if ( b = a.relatedTarget ) {
      if ( F ) {
        a: {
          try {
            vc( b.nodeName );
            var f = !0;
            break a
          } catch ( g ) {}
          f = !1
        }
        f || ( b = null )
      }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && ( b = a.toElement );
    this.relatedTarget = b;
    d ? ( this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
      d.screenY || 0 ) : ( this.offsetX = G || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = G || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0 );
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ( c == ua ? a.keyCode : 0 );
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId ||
      0;
    this.pointerType = typeof a.pointerType === q ? a.pointerType : fd[ a.pointerType ] || "";
    this.state = a.state;
    this.Ba = a;
    a.defaultPrevented && this.preventDefault()
  };
  P.prototype.stopPropagation = function () {
    P.A.stopPropagation.call( this );
    this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
  };
  P.prototype.preventDefault = function () {
    P.A.preventDefault.call( this );
    var a = this.Ba;
    if ( a.preventDefault ) a.preventDefault();
    else if ( a.returnValue = !1, dd ) try {
      if ( a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode ) a.keyCode = -1
    } catch ( b ) {}
  };
  var gd = "closure_listenable_" + ( 1E6 * Math.random() | 0 ),
    hd = function ( a ) {
      return !( !a || !a[ gd ] )
    },
    id = 0;
  var jd = function ( a, b, c, d, f, g ) {
    this.listener = a;
    this.proxy = b;
    this.src = c;
    this.type = d;
    this.capture = !!f;
    this.Cb = g;
    this.key = ++id;
    this.La = this.tb = !1
  };
  jd.prototype.Nb = function () {
    this.La = !0;
    this.Cb = this.src = this.proxy = this.listener = null
  };
  var kd = function ( a ) {
    this.src = a;
    this.v = {};
    this.mb = 0
  };
  r = kd.prototype;
  r.add = function ( a, b, c, d, f ) {
    var g = a.toString();
    a = this.v[ g ];
    a || ( a = this.v[ g ] = [], this.mb++ );
    var k = ld( a, b, d, f ); - 1 < k ? ( b = a[ k ], c || ( b.tb = !1 ) ) : ( b = new jd( b, null, this.src, g, !!d, f ), b.tb = c, a.push( b ) );
    return b
  };
  r.remove = function ( a, b, c, d ) {
    a = a.toString();
    if ( !( a in this.v ) ) return !1;
    var f = this.v[ a ];
    b = ld( f, b, c, d );
    return -1 < b ? ( f[ b ].Nb(), Array.prototype.splice.call( f, b, 1 ), 0 == f.length && ( delete this.v[ a ], this.mb-- ), !0 ) : !1
  };
  r.Le = function ( a ) {
    var b = a.type;
    if ( !( b in this.v ) ) return !1;
    var c = lb( this.v[ b ], a );
    c && ( a.Nb(), 0 == this.v[ b ].length && ( delete this.v[ b ], this.mb-- ) );
    return c
  };
  r.Qb = function ( a ) {
    a = a && a.toString();
    var b = 0,
      c;
    for ( c in this.v )
      if ( !a || c == a ) {
        for ( var d = this.v[ c ], f = 0; f < d.length; f++ ) ++b, d[ f ].Nb();
        delete this.v[ c ];
        this.mb--
      } return b
  };
  r.Xa = function ( a, b, c, d ) {
    a = this.v[ a.toString() ];
    var f = -1;
    a && ( f = ld( a, b, c, d ) );
    return -1 < f ? a[ f ] : null
  };
  r.hasListener = function ( a, b ) {
    var c = void 0 !== a,
      d = c ? a.toString() : "",
      f = void 0 !== b;
    return Cb( this.v, function ( g ) {
      for ( var k = 0; k < g.length; ++k )
        if ( !( c && g[ k ].type != d || f && g[ k ].capture != b ) ) return !0;
      return !1
    } )
  };
  var ld = function ( a, b, c, d ) {
    for ( var f = 0; f < a.length; ++f ) {
      var g = a[ f ];
      if ( !g.La && g.listener == b && g.capture == !!c && g.Cb == d ) return f
    }
    return -1
  };
  var md = "closure_lm_" + ( 1E6 * Math.random() | 0 ),
    nd = {},
    od = 0,
    Q = function ( a, b, c, d, f ) {
      if ( d && d.once ) return pd( a, b, c, d, f );
      if ( Array.isArray( b ) ) {
        for ( var g = 0; g < b.length; g++ ) Q( a, b[ g ], c, d, f );
        return null
      }
      c = qd( c );
      return hd( a ) ? a.Ja( b, c, v( d ) ? !!d.capture : !!d, f ) : rd( a, b, c, !1, d, f )
    },
    rd = function ( a, b, c, d, f, g ) {
      if ( !b ) throw Error( "Invalid event type" );
      var k = v( f ) ? !!f.capture : !!f,
        l = sd( a );
      l || ( a[ md ] = l = new kd( a ) );
      c = l.add( b, c, d, k, g );
      if ( c.proxy ) return c;
      d = td();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if ( a.addEventListener ) ed || ( f = k ), void 0 === f &&
        ( f = !1 ), a.addEventListener( b.toString(), d, f );
      else if ( a.attachEvent ) a.attachEvent( ud( b.toString() ), d );
      else if ( a.addListener && a.removeListener ) a.addListener( d );
      else throw Error( "addEventListener and attachEvent are unavailable." );
      od++;
      return c
    },
    td = function () {
      var a = vd,
        b = cd ? function ( c ) {
          return a.call( b.src, b.listener, c )
        } : function ( c ) {
          c = a.call( b.src, b.listener, c );
          if ( !c ) return c
        };
      return b
    },
    pd = function ( a, b, c, d, f ) {
      if ( Array.isArray( b ) ) {
        for ( var g = 0; g < b.length; g++ ) pd( a, b[ g ], c, d, f );
        return null
      }
      c = qd( c );
      return hd( a ) ?
        a.Hc( b, c, v( d ) ? !!d.capture : !!d, f ) : rd( a, b, c, !0, d, f )
    },
    wd = function ( a, b, c, d, f ) {
      if ( Array.isArray( b ) ) {
        for ( var g = 0; g < b.length; g++ ) wd( a, b[ g ], c, d, f );
        return null
      }
      d = v( d ) ? !!d.capture : !!d;
      c = qd( c );
      if ( hd( a ) ) return a.Vb( b, c, d, f );
      if ( !a ) return !1;
      if ( a = sd( a ) )
        if ( b = a.Xa( b, c, d, f ) ) return xd( b );
      return !1
    },
    xd = function ( a ) {
      if ( typeof a === za || !a || a.La ) return !1;
      var b = a.src;
      if ( hd( b ) ) return b.$e( a );
      var c = a.type,
        d = a.proxy;
      b.removeEventListener ? b.removeEventListener( c, d, a.capture ) : b.detachEvent ? b.detachEvent( ud( c ), d ) : b.addListener &&
        b.removeListener && b.removeListener( d );
      od--;
      ( c = sd( b ) ) ? ( c.Le( a ), 0 == c.mb && ( c.src = null, b[ md ] = null ) ) : a.Nb();
      return !0
    },
    yd = function ( a, b ) {
      if ( !a ) return 0;
      if ( hd( a ) ) return a.Ke( b );
      a = sd( a );
      if ( !a ) return 0;
      var c = 0;
      b = b && b.toString();
      for ( var d in a.v )
        if ( !b || d == b )
          for ( var f = a.v[ d ].concat(), g = 0; g < f.length; ++g ) xd( f[ g ] ) && ++c;
      return c
    },
    ud = function ( a ) {
      return a in nd ? nd[ a ] : nd[ a ] = "on" + a
    },
    Ad = function ( a, b, c, d ) {
      var f = !0;
      if ( a = sd( a ) )
        if ( b = a.v[ b.toString() ] )
          for ( b = b.concat(), a = 0; a < b.length; a++ ) {
            var g = b[ a ];
            g && g.capture == c && !g.La &&
              ( g = zd( g, d ), f = f && !1 !== g )
          }
      return f
    },
    zd = function ( a, b ) {
      var c = a.listener,
        d = a.Cb || a.src;
      a.tb && xd( a );
      return c.call( d, b )
    },
    vd = function ( a, b ) {
      if ( a.La ) return !0;
      if ( !cd ) {
        if ( !b ) a: {
          b = [ "window", "event" ];
          for ( var c = u, d = 0; d < b.length; d++ )
            if ( c = c[ b[ d ] ], null == c ) {
              b = null;
              break a
            } b = c
        }
        d = b;
        b = new P( d, this );
        c = !0;
        if ( !( 0 > d.keyCode || void 0 != d.returnValue ) ) {
          a: {
            var f = !1;
            if ( 0 == d.keyCode ) try {
              d.keyCode = -1;
              break a
            } catch ( k ) {
              f = !0
            }
            if ( f || void 0 == d.returnValue ) d.returnValue = !0
          }
          d = [];
          for ( f = b.currentTarget; f; f = f.parentNode ) d.push( f );a = a.type;
          for ( f =
            d.length - 1; !b.wa && 0 <= f; f-- ) {
            b.currentTarget = d[ f ];
            var g = Ad( d[ f ], a, !0, b );
            c = c && g
          }
          for ( f = 0; !b.wa && f < d.length; f++ ) b.currentTarget = d[ f ],
          g = Ad( d[ f ], a, !1, b ),
          c = c && g
        }
        return c
      }
      return zd( a, new P( b, this ) )
    },
    sd = function ( a ) {
      a = a[ md ];
      return a instanceof kd ? a : null
    },
    Bd = "__closure_events_fn_" + ( 1E9 * Math.random() >>> 0 ),
    qd = function ( a ) {
      if ( typeof a === m ) return a;
      a[ Bd ] || ( a[ Bd ] = function ( b ) {
        return a.handleEvent( b )
      } );
      return a[ Bd ]
    };
  var R = function () {
    L.call( this );
    this.aa = new kd( this );
    this.Of = this;
    this.Oc = null
  };
  y( R, L );
  R.prototype[ gd ] = !0;
  r = R.prototype;
  r.addEventListener = function ( a, b, c, d ) {
    Q( this, a, b, c, d )
  };
  r.removeEventListener = function ( a, b, c, d ) {
    wd( this, a, b, c, d )
  };
  r.dispatchEvent = function ( a ) {
    var b = this.Oc;
    if ( b ) {
      var c = [];
      for ( var d = 1; b; b = b.Oc ) c.push( b ), ++d
    }
    b = this.Of;
    d = a.type || a;
    if ( typeof a === q ) a = new M( a, b );
    else if ( a instanceof M ) a.target = a.target || b;
    else {
      var f = a;
      a = new M( d, b );
      Ib( a, f )
    }
    f = !0;
    if ( c )
      for ( var g = c.length - 1; !a.wa && 0 <= g; g-- ) {
        var k = a.currentTarget = c[ g ];
        f = k.yb( d, !0, a ) && f
      }
    a.wa || ( k = a.currentTarget = b, f = k.yb( d, !0, a ) && f, a.wa || ( f = k.yb( d, !1, a ) && f ) );
    if ( c )
      for ( g = 0; !a.wa && g < c.length; g++ ) k = a.currentTarget = c[ g ], f = k.yb( d, !1, a ) && f;
    return f
  };
  r.s = function () {
    R.A.s.call( this );
    this.Ke();
    this.Oc = null
  };
  r.Ja = function ( a, b, c, d ) {
    return this.aa.add( String( a ), b, !1, c, d )
  };
  r.Hc = function ( a, b, c, d ) {
    return this.aa.add( String( a ), b, !0, c, d )
  };
  r.Vb = function ( a, b, c, d ) {
    return this.aa.remove( String( a ), b, c, d )
  };
  r.$e = function ( a ) {
    return this.aa.Le( a )
  };
  r.Ke = function ( a ) {
    return this.aa ? this.aa.Qb( a ) : 0
  };
  r.yb = function ( a, b, c ) {
    a = this.aa.v[ String( a ) ];
    if ( !a ) return !0;
    a = a.concat();
    for ( var d = !0, f = 0; f < a.length; ++f ) {
      var g = a[ f ];
      if ( g && !g.La && g.capture == b ) {
        var k = g.listener,
          l = g.Cb || g.src;
        g.tb && this.$e( g );
        d = !1 !== k.call( l, c ) && d
      }
    }
    return d && !c.defaultPrevented
  };
  r.Xa = function ( a, b, c, d ) {
    return this.aa.Xa( String( a ), b, c, d )
  };
  r.hasListener = function ( a, b ) {
    return this.aa.hasListener( void 0 !== a ? String( a ) : void 0, b )
  };
  var Cd = function ( a ) {
    a = String( a );
    if ( /^\s*$/.test( a ) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test( a.replace( /\\["\\\/bfnrtu]/g, "@" ).replace( /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]" ).replace( /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "" ) ) ) try {
      return eval( "(" + a + ")" )
    } catch ( b ) {}
    throw Error( "Invalid JSON string: " + a );
  };
  var Dd = function () {};
  Dd.prototype.Cd = null;
  Dd.prototype.Yd = function () {
    return this.Cd || ( this.Cd = this.Mg() )
  };
  var Ed, Fd = function () {};
  y( Fd, Dd );
  Fd.prototype.Hd = function () {
    var a = this.Zd();
    return a ? new ActiveXObject( a ) : new XMLHttpRequest
  };
  Fd.prototype.Mg = function () {
    var a = {};
    this.Zd() && ( a[ 0 ] = !0, a[ 1 ] = !0 );
    return a
  };
  Fd.prototype.Zd = function () {
    if ( !this.de && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject ) {
      for ( var a = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ], b = 0; b < a.length; b++ ) {
        var c = a[ b ];
        try {
          return new ActiveXObject( c ), this.de = c
        } catch ( d ) {}
      }
      throw Error( "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed" );
    }
    return this.de
  };
  Ed = new Fd;
  var Gd = function ( a ) {
      if ( a.m && typeof a.m == m ) a = a.m();
      else if ( Sa( a ) || typeof a === q ) a = a.length;
      else {
        var b = 0,
          c;
        for ( c in a ) b++;
        a = b
      }
      return a
    },
    Hd = function ( a ) {
      if ( a.B && typeof a.B == m ) return a.B();
      if ( typeof a === q ) return a.split( "" );
      if ( Sa( a ) ) {
        for ( var b = [], c = a.length, d = 0; d < c; d++ ) b.push( a[ d ] );
        return b
      }
      return Db( a )
    },
    Id = function ( a ) {
      if ( a.R && typeof a.R == m ) return a.R();
      if ( !a.B || typeof a.B != m ) {
        if ( Sa( a ) || typeof a === q ) {
          var b = [];
          a = a.length;
          for ( var c = 0; c < a; c++ ) b.push( c );
          return b
        }
        return Eb( a )
      }
    },
    Jd = function ( a, b, c ) {
      if ( a.forEach &&
        typeof a.forEach == m ) a.forEach( b, c );
      else if ( Sa( a ) || typeof a === q ) eb( a, b, c );
      else
        for ( var d = Id( a ), f = Hd( a ), g = f.length, k = 0; k < g; k++ ) b.call( c, f[ k ], d && d[ k ], a )
    },
    Kd = function ( a, b, c ) {
      if ( typeof a.every == m ) return a.every( b, c );
      if ( Sa( a ) || typeof a === q ) return ib( a, b, c );
      for ( var d = Id( a ), f = Hd( a ), g = f.length, k = 0; k < g; k++ )
        if ( !b.call( c, f[ k ], d && d[ k ], a ) ) return !1;
      return !0
    };
  var Ld = function ( a, b, c ) {
    if ( typeof a === m ) c && ( a = w( a, c ) );
    else if ( a && typeof a.handleEvent == m ) a = w( a.handleEvent, a );
    else throw Error( "Invalid listener argument" );
    return 2147483647 < Number( b ) ? -1 : u.setTimeout( a, b || 0 )
  };
  var Md = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    Nd = function ( a, b ) {
      if ( a ) {
        a = a.split( "&" );
        for ( var c = 0; c < a.length; c++ ) {
          var d = a[ c ].indexOf( "=" ),
            f = null;
          if ( 0 <= d ) {
            var g = a[ c ].substring( 0, d );
            f = a[ c ].substring( d + 1 )
          } else g = a[ c ];
          b( g, f ? decodeURIComponent( f.replace( /\+/g, " " ) ) : "" )
        }
      }
    };
  var S = function ( a ) {
    R.call( this );
    this.headers = new Zc;
    this.$b = a || null;
    this.ha = !1;
    this.Zb = this.g = null;
    this.Gc = "";
    this.Ia = 0;
    this.ua = this.yc = this.Fb = this.pc = !1;
    this.ya = 0;
    this.Ub = null;
    this.Ma = "";
    this.fd = this.Ah = this.ga = !1
  };
  y( S, R );
  var Od = /^https?$/i,
    Pd = [ "POST", "PUT" ],
    Qd = [],
    Rd = function ( a, b, c, d, f, g, k ) {
      var l = new S;
      Qd.push( l );
      b && l.Ja( e, b );
      l.Hc( Ba, l.Yf );
      g && l.ad( g );
      k && l.cd( k );
      l.send( a, c, d, f );
      return l
    };
  r = S.prototype;
  r.Yf = function () {
    this.pa();
    lb( Qd, this )
  };
  r.ad = function ( a ) {
    this.ya = Math.max( 0, a )
  };
  r.Jh = function ( a ) {
    this.Ma = a
  };
  r.cd = function ( a ) {
    this.ga = a
  };
  r.send = function ( a, b, c, d ) {
    if ( this.g ) throw Error( "[goog.net.XhrIo] Object is active with another request=" + this.Gc + "; newUri=" + a );
    b = b ? b.toUpperCase() : "GET";
    this.Gc = a;
    this.Ia = 0;
    this.pc = !1;
    this.ha = !0;
    this.g = this.ag();
    this.Zb = this.$b ? this.$b.Yd() : Ed.Yd();
    this.g.onreadystatechange = w( this.Be, this );
    this.Ah && "onprogress" in this.g && ( this.g.onprogress = w( function ( g ) {
      this.ze( g, !0 )
    }, this ), this.g.upload && ( this.g.upload.onprogress = w( this.ze, this ) ) );
    try {
      this.yc = !0, this.g.open( b, String( a ), !0 ), this.yc = !1
    } catch ( g ) {
      this.Qd( 5,
        g );
      return
    }
    a = c || "";
    var f = this.headers.clone();
    d && Jd( d, function ( g, k ) {
      f.set( k, g )
    } );
    d = jb( f.R(), Sd );
    c = u.FormData && a instanceof u.FormData;
    !z( Pd, b ) || d || c || f.set( "Content-Type", "application/x-www-form-urlencoded;charset=utf-8" );
    f.forEach( function ( g, k ) {
      this.g.setRequestHeader( k, g )
    }, this );
    this.Ma && ( this.g.responseType = this.Ma );
    "withCredentials" in this.g && this.g.withCredentials !== this.ga && ( this.g.withCredentials = this.ga );
    try {
      this.Ed(), 0 < this.ya && ( ( this.fd = Td( this.g ) ) ? ( this.g.timeout = this.ya, this.g.ontimeout =
        w( this.Ze, this ) ) : this.Ub = Ld( this.Ze, this.ya, this ) ), this.Fb = !0, this.g.send( a ), this.Fb = !1
    } catch ( g ) {
      this.Qd( 5, g )
    }
  };
  var Td = function ( a ) {
      return E && Gc( 9 ) && typeof a.timeout === za && void 0 !== a.ontimeout
    },
    Sd = function ( a ) {
      return "content-type" == a.toLowerCase()
    };
  r = S.prototype;
  r.ag = function () {
    return this.$b ? this.$b.Hd() : Ed.Hd()
  };
  r.Ze = function () {
    "undefined" != typeof La && this.g && ( this.Ia = 8, this.dispatchEvent( "timeout" ), this.abort( 8 ) )
  };
  r.Qd = function ( a ) {
    this.ha = !1;
    this.g && ( this.ua = !0, this.g.abort(), this.ua = !1 );
    this.Ia = a;
    this.Md();
    this.vb()
  };
  r.Md = function () {
    this.pc || ( this.pc = !0, this.dispatchEvent( e ), this.dispatchEvent( "error" ) )
  };
  r.abort = function ( a ) {
    this.g && this.ha && ( this.ha = !1, this.ua = !0, this.g.abort(), this.ua = !1, this.Ia = a || 7, this.dispatchEvent( e ), this.dispatchEvent( "abort" ), this.vb() )
  };
  r.s = function () {
    this.g && ( this.ha && ( this.ha = !1, this.ua = !0, this.g.abort(), this.ua = !1 ), this.vb( !0 ) );
    S.A.s.call( this )
  };
  r.Be = function () {
    this.za || ( this.yc || this.Fb || this.ua ? this.Ae() : this.uh() )
  };
  r.uh = function () {
    this.Ae()
  };
  r.Ae = function () {
    if ( this.ha && "undefined" != typeof La && ( !this.Zb[ 1 ] || 4 != this.Ab() || 2 != this.getStatus() ) )
      if ( this.Fb && 4 == this.Ab() ) Ld( this.Be, 0, this );
      else if ( this.dispatchEvent( "readystatechange" ), this.Ac() ) {
      this.ha = !1;
      try {
        this.eb() ? ( this.dispatchEvent( e ), this.dispatchEvent( Ja ) ) : ( this.Ia = 6, this.Md() )
      } finally {
        this.vb()
      }
    }
  };
  r.ze = function ( a, b ) {
    this.dispatchEvent( Ud( a, "progress" ) );
    this.dispatchEvent( Ud( a, b ? "downloadprogress" : "uploadprogress" ) )
  };
  var Ud = function ( a, b ) {
    return {
      type: b,
      lengthComputable: a.lengthComputable,
      loaded: a.loaded,
      total: a.total
    }
  };
  r = S.prototype;
  r.vb = function ( a ) {
    if ( this.g ) {
      this.Ed();
      var b = this.g,
        c = this.Zb[ 0 ] ? Qa : null;
      this.Zb = this.g = null;
      a || this.dispatchEvent( Ba );
      try {
        b.onreadystatechange = c
      } catch ( d ) {}
    }
  };
  r.Ed = function () {
    this.g && this.fd && ( this.g.ontimeout = null );
    this.Ub && ( u.clearTimeout( this.Ub ), this.Ub = null )
  };
  r.Ib = function () {
    return !!this.g
  };
  r.Ac = function () {
    return 4 == this.Ab()
  };
  r.eb = function () {
    var a = this.getStatus();
    a: switch ( a ) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var b = !0;
        break a;
      default:
        b = !1
    }
    return b || 0 === a && !this.Pg()
  };
  r.Pg = function () {
    var a = String( this.Gc ).match( Md )[ 1 ] || null;
    !a && u.self && u.self.location && ( a = u.self.location.protocol, a = a.substr( 0, a.length - 1 ) );
    return Od.test( a ? a.toLowerCase() : "" )
  };
  r.Ab = function () {
    return this.g ? this.g.readyState : 0
  };
  r.getStatus = function () {
    try {
      return 2 < this.Ab() ? this.g.status : -1
    } catch ( a ) {
      return -1
    }
  };
  r.qg = function () {
    try {
      return this.g ? this.g.responseText : ""
    } catch ( a ) {
      return ""
    }
  };
  r.$d = function ( a ) {
    if ( this.g ) {
      var b = this.g.responseText;
      a && 0 == b.indexOf( a ) && ( b = b.substring( a.length ) );
      a: {
        a = b;
        if ( u.JSON ) try {
          var c = u.JSON.parse( a );
          break a
        } catch ( d ) {}
        c = Cd( a )
      }
      return c
    }
  };
  r.pg = function () {
    try {
      if ( !this.g ) return null;
      if ( "response" in this.g ) return this.g.response;
      switch ( this.Ma ) {
        case "":
        case "text":
          return this.g.responseText;
        case "arraybuffer":
          if ( "mozResponseArrayBuffer" in this.g ) return this.g.mozResponseArrayBuffer
      }
      return null
    } catch ( a ) {
      return null
    }
  };
  r.getResponseHeader = function ( a ) {
    if ( this.g && this.Ac() ) return a = this.g.getResponseHeader( a ), null === a ? void 0 : a
  };
  r.getAllResponseHeaders = function () {
    return this.g && this.Ac() ? this.g.getAllResponseHeaders() || "" : ""
  };
  var Vd = function () {};
  Vd.prototype.da = function () {
    return "NONE"
  };
  Vd.prototype.va = function () {
    return null
  };
  Vd.prototype.ie = function () {
    return !1
  };
  var Wd = function ( a ) {
    this.label = a
  };
  y( Wd, Vd );
  Wd.prototype.X = function () {
    return this.label
  };
  var T = function ( a, b, c ) {
    this.label = b;
    this.value = a.da();
    this.Og = c;
    this.qc = a
  };
  y( T, Vd );
  r = T.prototype;
  r.X = function () {
    return this.label
  };
  r.da = function () {
    return this.value
  };
  r.ie = function () {
    return this.Og
  };
  r.encode = function () {
    return this.qc.encode() + "="
  };
  r.va = function () {
    return new Xd( this )
  };
  var Yd = function () {};
  y( Yd, Vd );
  Yd.prototype.encode = function () {
    return encodeURIComponent( this.da() )
  };
  Yd.prototype.va = function () {
    return null
  };
  var Zd = function ( a ) {
    T.call( this, a, a.X(), !0 )
  };
  y( Zd, T );
  var $d = function () {};
  y( $d, Yd );
  $d.prototype.X = function () {
    return "Anonymous"
  };
  $d.prototype.da = function () {
    return "ANON"
  };
  $d.prototype.decode = function () {
    return new Zd( this )
  };
  var ae = function ( a, b ) {
    this.Va = this.nb = this.ma = "";
    this.Ka = null;
    this.ra = this.Pc = "";
    this.J = this.Qg = !1;
    var c;
    a instanceof ae ? ( this.J = void 0 !== b ? b : a.J, this.$c( a.ma ), this.bd( a.nb ), this.Vc( a.Va ), this.Yc( a.Ka ), this.setPath( a.getPath() ), this.Zc( a.S.clone() ), this.Wc( a.ra ) ) : a && ( c = String( a ).match( Md ) ) ? ( this.J = !!b, this.$c( c[ 1 ] || "", !0 ), this.bd( c[ 2 ] || "", !0 ), this.Vc( c[ 3 ] || "", !0 ), this.Yc( c[ 4 ] ), this.setPath( c[ 5 ] || "", !0 ), this.Zc( c[ 6 ] || "", !0 ), this.Wc( c[ 7 ] || "", !0 ) ) : ( this.J = !!b, this.S = new be( null, this.J ) )
  };
  r = ae.prototype;
  r.toString = function () {
    var a = [],
      b = this.ma;
    b && a.push( ce( b, de, !0 ), ":" );
    var c = this.Va;
    if ( c || "file" == b ) a.push( "//" ), ( b = this.nb ) && a.push( ce( b, de, !0 ), "@" ), a.push( encodeURIComponent( String( c ) ).replace( /%25([0-9a-fA-F]{2})/g, "%$1" ) ), c = this.Ka, null != c && a.push( ":", String( c ) );
    if ( c = this.getPath() ) this.sc() && "/" != c.charAt( 0 ) && a.push( "/" ), a.push( ce( c, "/" == c.charAt( 0 ) ? ee : fe, !0 ) );
    ( c = this.Td() ) && a.push( "?", c );
    ( c = this.ra ) && a.push( "#", ce( c, ge ) );
    return a.join( "" )
  };
  r.resolve = function ( a ) {
    var b = this.clone(),
      c = a.Eg();
    c ? b.$c( a.ma ) : c = a.Fg();
    c ? b.bd( a.nb ) : c = a.sc();
    c ? b.Vc( a.Va ) : c = a.Cg();
    var d = a.getPath();
    if ( c ) b.Yc( a.Ka );
    else if ( c = a.ce() ) {
      if ( "/" != d.charAt( 0 ) )
        if ( this.sc() && !this.ce() ) d = "/" + d;
        else {
          var f = b.getPath().lastIndexOf( "/" ); - 1 != f && ( d = b.getPath().substr( 0, f + 1 ) + d )
        } f = d;
      if ( ".." == f || "." == f ) d = "";
      else if ( A( f, "./" ) || A( f, "/." ) ) {
        d = 0 == f.lastIndexOf( "/", 0 );
        f = f.split( "/" );
        for ( var g = [], k = 0; k < f.length; ) {
          var l = f[ k++ ];
          "." == l ? d && k == f.length && g.push( "" ) : ".." == l ? ( ( 1 < g.length || 1 ==
            g.length && "" != g[ 0 ] ) && g.pop(), d && k == f.length && g.push( "" ) ) : ( g.push( l ), d = !0 )
        }
        d = g.join( "/" )
      } else d = f
    }
    c ? b.setPath( d ) : c = a.Dg();
    c ? b.Zc( a.S.clone() ) : c = a.Bg();
    c && b.Wc( a.ra );
    return b
  };
  r.clone = function () {
    return new ae( this )
  };
  r.$c = function ( a, b ) {
    this.Z();
    if ( this.ma = b ? he( a, !0 ) : a ) this.ma = this.ma.replace( /:$/, "" );
    return this
  };
  r.Eg = function () {
    return !!this.ma
  };
  r.bd = function ( a, b ) {
    this.Z();
    this.nb = b ? he( a ) : a;
    return this
  };
  r.Fg = function () {
    return !!this.nb
  };
  r.Vc = function ( a, b ) {
    this.Z();
    this.Va = b ? he( a, !0 ) : a;
    return this
  };
  r.sc = function () {
    return !!this.Va
  };
  r.Yc = function ( a ) {
    this.Z();
    if ( a ) {
      a = Number( a );
      if ( isNaN( a ) || 0 > a ) throw Error( "Bad port number " + a );
      this.Ka = a
    } else this.Ka = null;
    return this
  };
  r.Cg = function () {
    return null != this.Ka
  };
  r.getPath = function () {
    return this.Pc
  };
  r.setPath = function ( a, b ) {
    this.Z();
    this.Pc = b ? he( a, !0 ) : a;
    return this
  };
  r.ce = function () {
    return !!this.Pc
  };
  r.Dg = function () {
    return "" !== this.S.toString()
  };
  r.Zc = function ( a, b ) {
    this.Z();
    a instanceof be ? ( this.S = a, this.S.Xc( this.J ) ) : ( b || ( a = ce( a, ie ) ), this.S = new be( a, this.J ) );
    return this
  };
  r.Td = function () {
    return this.S.toString()
  };
  r.getQuery = function () {
    return this.Td()
  };
  r.Sb = function ( a, b ) {
    this.Z();
    this.S.set( a, b );
    return this
  };
  r.Wc = function ( a, b ) {
    this.Z();
    this.ra = b ? he( a ) : a;
    return this
  };
  r.Bg = function () {
    return !!this.ra
  };
  r.removeParameter = function ( a ) {
    this.Z();
    this.S.remove( a );
    return this
  };
  r.Z = function () {
    if ( this.Qg ) throw Error( "Tried to modify a read-only Uri" );
  };
  r.Xc = function ( a ) {
    this.J = a;
    this.S && this.S.Xc( a );
    return this
  };
  var he = function ( a, b ) {
      return a ? b ? decodeURI( a.replace( /%25/g, "%2525" ) ) : decodeURIComponent( a ) : ""
    },
    ce = function ( a, b, c ) {
      return typeof a === q ? ( a = encodeURI( a ).replace( b, je ), c && ( a = a.replace( /%25([0-9a-fA-F]{2})/g, "%$1" ) ), a ) : null
    },
    je = function ( a ) {
      a = a.charCodeAt( 0 );
      return "%" + ( a >> 4 & 15 ).toString( 16 ) + ( a & 15 ).toString( 16 )
    },
    de = /[#\/\?@]/g,
    fe = /[#\?:]/g,
    ee = /[#\?]/g,
    ie = /[#\?@]/g,
    ge = /#/g,
    be = function ( a, b ) {
      this.i = this.l = null;
      this.ja = a || null;
      this.J = !!b
    };
  r = be.prototype;
  r.W = function () {
    if ( !this.l && ( this.l = new Zc, this.i = 0, this.ja ) ) {
      var a = this;
      Nd( this.ja, function ( b, c ) {
        a.add( decodeURIComponent( b.replace( /\+/g, " " ) ), c )
      } )
    }
  };
  r.m = function () {
    this.W();
    return this.i
  };
  r.add = function ( a, b ) {
    this.W();
    this.Ha();
    a = this.Ea( a );
    var c = this.l.get( a );
    c || this.l.set( a, c = [] );
    c.push( b );
    this.i += 1;
    return this
  };
  r.remove = function ( a ) {
    this.W();
    a = this.Ea( a );
    return this.l.oa( a ) ? ( this.Ha(), this.i -= this.l.get( a ).length, this.l.remove( a ) ) : !1
  };
  r.clear = function () {
    this.Ha();
    this.l = null;
    this.i = 0
  };
  r.isEmpty = function () {
    this.W();
    return 0 == this.i
  };
  r.oa = function ( a ) {
    this.W();
    a = this.Ea( a );
    return this.l.oa( a )
  };
  r.Ua = function ( a ) {
    var b = this.B();
    return z( b, a )
  };
  r.forEach = function ( a, b ) {
    this.W();
    this.l.forEach( function ( c, d ) {
      eb( c, function ( f ) {
        a.call( b, f, d, this )
      }, this )
    }, this )
  };
  r.R = function () {
    this.W();
    for ( var a = this.l.B(), b = this.l.R(), c = [], d = 0; d < b.length; d++ )
      for ( var f = a[ d ], g = 0; g < f.length; g++ ) c.push( b[ d ] );
    return c
  };
  r.B = function ( a ) {
    this.W();
    var b = [];
    if ( typeof a === q ) this.oa( a ) && ( b = mb( b, this.l.get( this.Ea( a ) ) ) );
    else {
      a = this.l.B();
      for ( var c = 0; c < a.length; c++ ) b = mb( b, a[ c ] )
    }
    return b
  };
  r.set = function ( a, b ) {
    this.W();
    this.Ha();
    a = this.Ea( a );
    this.oa( a ) && ( this.i -= this.l.get( a ).length );
    this.l.set( a, [ b ] );
    this.i += 1;
    return this
  };
  r.get = function ( a, b ) {
    if ( !a ) return b;
    a = this.B( a );
    return 0 < a.length ? String( a[ 0 ] ) : b
  };
  r.setValues = function ( a, b ) {
    this.remove( a );
    0 < b.length && ( this.Ha(), this.l.set( this.Ea( a ), nb( b ) ), this.i += b.length )
  };
  r.toString = function () {
    if ( this.ja ) return this.ja;
    if ( !this.l ) return "";
    for ( var a = [], b = this.l.R(), c = 0; c < b.length; c++ ) {
      var d = b[ c ],
        f = encodeURIComponent( String( d ) );
      d = this.B( d );
      for ( var g = 0; g < d.length; g++ ) {
        var k = f;
        "" !== d[ g ] && ( k += "=" + encodeURIComponent( String( d[ g ] ) ) );
        a.push( k )
      }
    }
    return this.ja = a.join( "&" )
  };
  r.Ha = function () {
    this.ja = null
  };
  r.clone = function () {
    var a = new be;
    a.ja = this.ja;
    this.l && ( a.l = this.l.clone(), a.i = this.i );
    return a
  };
  r.Ea = function ( a ) {
    a = String( a );
    this.J && ( a = a.toLowerCase() );
    return a
  };
  r.Xc = function ( a ) {
    a && !this.J && ( this.W(), this.Ha(), this.l.forEach( function ( b, c ) {
      var d = c.toLowerCase();
      c != d && ( this.remove( c ), this.setValues( d, b ) )
    }, this ) );
    this.J = a
  };
  r.extend = function ( a ) {
    for ( var b = 0; b < arguments.length; b++ ) Jd( arguments[ b ], function ( c, d ) {
      this.add( d, c )
    }, this )
  };
  var ke = "";
  var le = function () {
    "loading" != document.readyState ? this.ge() : Q( window, "load", this.ge )
  };
  le.prototype.ge = function () {
    var a = Array.prototype.slice.call( document.getElementsByTagName( "link" ), 0 );
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[ Symbol.iterator ];
    a = b ? b.call( a ) : {
      next: Ka( a )
    };
    for ( b = a.next(); !b.done; b = a.next() ) b = b.value, "true" == b.getAttribute( "data-async-css" ) && b.getAttribute( "media" ) == n && b.setAttribute( "media", "all" )
  };
  var me = function ( a ) {
      return typeof a.className == q ? a.className : a.getAttribute && a.getAttribute( "class" ) || ""
    },
    ne = function ( a ) {
      return a.classList ? a.classList : me( a ).match( /\S+/g ) || []
    },
    oe = function ( a, b ) {
      typeof a.className == q ? a.className = b : a.setAttribute && a.setAttribute( "class", b )
    },
    pe = function ( a, b ) {
      return a.classList ? a.classList.contains( b ) : z( ne( a ), b )
    },
    qe = function ( a, b ) {
      if ( a.classList ) a.classList.add( b );
      else if ( !pe( a, b ) ) {
        var c = me( a );
        oe( a, c + ( 0 < c.length ? " " + b : b ) )
      }
    },
    re = function ( a, b ) {
      a.classList ? a.classList.remove( b ) :
        pe( a, b ) && oe( a, fb( ne( a ), function ( c ) {
          return c != b
        } ).join( " " ) )
    };
  var se = function ( a ) {
    L.call( this );
    this.Fa = a;
    this.h = {}
  };
  y( se, L );
  var we = [];
  r = se.prototype;
  r.Ja = function ( a, b, c, d ) {
    return this.Tg( a, b, c, d )
  };
  r.Tg = function ( a, b, c, d, f ) {
    Array.isArray( b ) || ( b && ( we[ 0 ] = b.toString() ), b = we );
    for ( var g = 0; g < b.length; g++ ) {
      var k = Q( a, b[ g ], c || this.handleEvent, d || !1, f || this.Fa || this );
      if ( !k ) break;
      this.h[ k.key ] = k
    }
    return this
  };
  r.Hc = function ( a, b, c, d ) {
    return this.se( a, b, c, d )
  };
  r.se = function ( a, b, c, d, f ) {
    if ( Array.isArray( b ) )
      for ( var g = 0; g < b.length; g++ ) this.se( a, b[ g ], c, d, f );
    else {
      a = pd( a, b, c || this.handleEvent, d, f || this.Fa || this );
      if ( !a ) return this;
      this.h[ a.key ] = a
    }
    return this
  };
  r.Vb = function ( a, b, c, d, f ) {
    if ( Array.isArray( b ) )
      for ( var g = 0; g < b.length; g++ ) this.Vb( a, b[ g ], c, d, f );
    else c = c || this.handleEvent, d = v( d ) ? !!d.capture : !!d, f = f || this.Fa || this, c = qd( c ), d = !!d, b = hd( a ) ? a.Xa( b, c, d, f ) : a ? ( a = sd( a ) ) ? a.Xa( b, c, d, f ) : null : null, b && ( xd( b ), delete this.h[ b.key ] );
    return this
  };
  r.Qb = function () {
    Ab( this.h, function ( a, b ) {
      this.h.hasOwnProperty( b ) && xd( a )
    }, this );
    this.h = {}
  };
  r.s = function () {
    se.A.s.call( this );
    this.Qb()
  };
  r.handleEvent = function () {
    throw Error( "EventHandler.handleEvent not implemented" );
  };
  var xe = function ( a ) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = G && !b && !c;
      if ( ( void 0 === b || d ) && a.getBoundingClientRect ) {
        try {
          var f = a.getBoundingClientRect()
        } catch ( g ) {
          f = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          }
        }
        return new Lc( f.right - f.left, f.bottom - f.top )
      }
      return new Lc( b, c )
    },
    ye = function ( a, b ) {
      a.style.display = b ? "" : n
    },
    Ae = function ( a, b ) {
      b = Oc( b );
      var c = b.qa;
      if ( E && c.createStyleSheet ) return b = c.createStyleSheet(), ze( b, a ), b;
      c = b.Sd( "HEAD" )[ 0 ];
      if ( !c ) {
        var d = b.Sd( "BODY" )[ 0 ];
        c = b.kc( "HEAD" );
        d.parentNode.insertBefore( c, d )
      }
      d = b.kc( "STYLE" );
      var f = Oa();
      f && d.setAttribute( "nonce", f );
      ze( d, a );
      b.appendChild( c, d );
      return d
    },
    ze = function ( a, b ) {
      b = kc( b );
      if ( E && void 0 !== a.cssText ) a.cssText = b;
      else if ( u.trustedTypes )
        if ( "textContent" in a ) a.textContent = b;
        else if ( 3 == a.nodeType ) a.data = String( b );
      else if ( a.firstChild && 3 == a.firstChild.nodeType ) {
        for ( ; a.lastChild != a.firstChild; ) a.removeChild( a.lastChild );
        a.firstChild.data = String( b )
      } else Wc( a ), a.appendChild( Nc( a ).createTextNode( String( b ) ) );
      else a.innerHTML = b
    };
  /*

   CC0 1.0 Universal License
   Public Domain Dedication

   The person(s) who associated a work with this deed has dedicated the work to
   the public domain by waiving all of his or her rights to the work worldwide
   under copyright law, including all related and neighboring rights, to the
   extent allowed by law.

   You can copy, modify, distribute and perform the work, even for commercial
   purposes, all without asking permission.

   In no way are the patent or trademark rights of any person affected by CC0,
   nor are the rights that other persons may have in the work or in how the work
   is used, such as publicity or privacy rights.

   Unless expressly stated otherwise, the person(s) who associated a work with
   this deed makes no warranties about the work, and disclaims liability for all
   uses of the work, to the fullest extent permitted by applicable law.

   When using or citing the work, you should not imply endorsement by the author
   or the affirmer.

   This is a human-readable summary of the Legal Code (read the full text).
   svg4everybody v2.1.8 | github.com/jonathantneal/svg4everybody */
  function Be( a, b, c ) {
    if ( c ) {
      var d = document.createDocumentFragment(),
        f = !b.hasAttribute( "viewBox" ) && c.getAttribute( "viewBox" );
      f && b.setAttribute( "viewBox", f );
      for ( b = c.cloneNode( !0 ); b.childNodes.length; ) d.appendChild( b.firstChild );
      a.appendChild( d )
    }
  }

  function Ce( a ) {
    a.onreadystatechange = function () {
      if ( 4 === a.readyState ) {
        var b = a.Nf;
        b || ( b = a.Nf = document.implementation.createHTMLDocument( "" ), b.body.innerHTML = a.responseText, a.qd = {} );
        a.rd.splice( 0 ).map( function ( c ) {
          var d = a.qd[ c.id ];
          d || ( d = a.qd[ c.id ] = b.getElementById( c.id ) );
          Be( c.parent, c.Nh, d )
        } )
      }
    };
    a.onreadystatechange()
  }

  function De() {
    return "undefined" != typeof LEGACY_SUPPORT && LEGACY_SUPPORT
  }
  var Ee = function ( a ) {
    function b() {
      for ( var la = 0; la < Bb.length; ) {
        var I = Bb[ la ],
          bb = I.parentNode,
          D;
        for ( D = bb;
          "svg" !== D.nodeName.toLowerCase() && ( D = D.parentNode, D ); );
        if ( D ) {
          var N = I.getAttribute( "xlink:href" ) || I.getAttribute( "href" );
          !N && c.attributeName && ( N = I.getAttribute( c.attributeName ) );
          if ( De() && f ) {
            var J = document.createElement( "img" );
            J.style.cssText = "display:inline-block;height:100%;width:100%";
            J.setAttribute( "width", D.getAttribute( "width" ) || D.clientWidth );
            J.setAttribute( "height", D.getAttribute( "height" ) || D.clientHeight );
            J.src = d( N, D, I );
            bb.replaceChild( J, I )
          } else te && ( !c.validate || c.validate( N, D, I ) ? ( bb.removeChild( I ), N = N.split( "#" ), I = N.shift(), N = N.join( "#" ), I.length ? ( J = ue[ I ], J || ( J = ue[ I ] = new XMLHttpRequest, J.open( "GET", I ), J.send(), J.rd = [] ), J.rd.push( {
            parent: bb,
            Nh: D,
            id: N
          } ), Ce( J ) ) : Be( bb, D, document.getElementById( N ) ) ) : ( ++la, ++ve ) )
        } else ++la
      }
      if ( !Bb.length || 0 < Bb.length - ve ) window.requestAnimationFrame ? window.requestAnimationFrame( b ) : setTimeout( b, 67 )
    }
    var c = Object( a );
    if ( De() ) {
      var d = c.Sh || function ( la ) {
        return la.replace( /\?[^#]+/,
          "" ).replace( "#", "." ).replace( /^\./, "" ) + ".png" + ( /\?[^#]+/.exec( la ) || [ "" ] )[ 0 ]
      };
      var f = "nosvg" in c ? c.Th : /\bMSIE [1-8]\b/.test( navigator.userAgent )
    }
    a = /\bMSIE [1-8]\.0\b/;
    var g = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
      k = /\bAppleWebKit\/(\d+)\b/,
      l = /\bEdge\/12\.(\d+)\b/,
      t = /\bEdge\/.(\d+)\b/,
      O = window.top !== window.self;
    var te = "polyfill" in c ? c.Uh : De() ? a.test( navigator.userAgent ) || g.test( navigator.userAgent ) || 10547 > ( navigator.userAgent.match( l ) || [] )[ 1 ] || 537 > ( navigator.userAgent.match( k ) || [] )[ 1 ] || t.test( navigator.userAgent ) &&
      O : g.test( navigator.userAgent ) || 10547 > ( navigator.userAgent.match( l ) || [] )[ 1 ] || 537 > ( navigator.userAgent.match( k ) || [] )[ 1 ] || t.test( navigator.userAgent ) && O;
    var ue = {},
      Bb = document.getElementsByTagName( "use" ),
      ve = 0;
    te && b()
  };
  var Fe = function ( a ) {
      return /^[A-Za-z0-9]+$/.test( a ) || /^#[0-9A-Fa-f]{3}$/.test( a ) || /^#[0-9A-Fa-f]{6}$/.test( a ) || /^rgb *\( *\d{1,3}%? *, *\d{1,3}%? *, *\d{1,3}%? *\)$/.test( a ) || /^rgba *\( *\d{1,3}%? *, *\d{1,3}%? *, *\d{1,3}%? *, *\d{1,3}%? *\)$/.test( a )
    },
    Ge = function ( a ) {
      a = a.split( "," );
      for ( var b = 0; b < a.length; b++ ) {
        var c = a[ b ];
        c = pb( c );
        if ( !( /^[- A-Za-z0-9]*$/.test( c ) || /^"[- A-Za-z0-9]*"$/.test( c ) || /^'[- A-Za-z0-9]*'$/.test( c ) ) ) return !1
      }
      return !0
    },
    He = function () {
      if ( window.parent && window.parent.postMessage ) {
        var a =
          document.getElementById( "previewHolder" ),
          b = 0;
        if ( a ) {
          b: {
            b = Nc( a );
            if ( b.defaultView && b.defaultView.getComputedStyle && ( b = b.defaultView.getComputedStyle( a, null ) ) ) {
              b = b.display || b.getPropertyValue( "display" ) || "";
              break b
            }
            b = ""
          }
          if ( ( b || ( a.currentStyle ? a.currentStyle.display : null ) || a.style && a.style.display ) != n ) a = xe( a );
          else {
            b = a.style;
            var c = b.display,
              d = b.visibility,
              f = b.position;
            b.visibility = qa;
            b.position = "absolute";
            b.display = "inline";
            a = xe( a );
            b.display = c;
            b.position = f;
            b.visibility = d
          }
          b = a.height
        }
        a = document.getElementById( ea );
        c = 0;
        a && ( c = a.offsetHeight );
        b = ( b = Math.max( b, c || document.body.offsetHeight ) ) || 230;
        a = "amp=1" == ( new ae( document.location.href ) ).ra ? {
          sentinel: "amp",
          type: "embed-size",
          height: b
        } : "set-comment-editor-height " + b + "px";
        window.parent.postMessage( a, "*" )
      }
    },
    Ie = function () {
      var a = document.getElementById( ja ),
        b = document.getElementById( Aa ),
        c = document.getElementById( "postCommentPreview" ),
        d = function () {
          b && ( b.disabled = "" == a.value );
          c && ( c.disabled = "" == a.value )
        };
      a && "oninput" in a && ( d( null ), Q( a, "input", d ) )
    },
    Je = function ( a ) {
      var b = [];
      E && b.push( jc( ".previewMode .postCommentButtonHolder", {
        "padding-top": "22px"
      } ) );
      var c = ( new ae( a ) ).ra;
      if ( 0 != c.length ) {
        a = null;
        try {
          c = decodeURIComponent( c ), a = JSON.parse( c )
        } catch ( k ) {}
        if ( a && a.color ) {
          c = tc( sc( a.color ) );
          var d = tc( sc( a.unvisitedLinkColor ) );
          a = tc( sc( a.fontFamily ) );
          Fe( c ) && Fe( d ) && Ge( a ) && ( b.push( jc( "body", {
            color: c,
            "font-family": a
          } ) ), b.push( jc( "a:link, a:visited, a:active, a:hover", {
            color: d
          } ) ) )
        }
      }
      Ae( lc( b ) );
      setTimeout( He, 100 );
      var f = K( ea );
      if ( ( b = K( ja ) ) && f ) {
        var g = !1;
        Q( b, "focus", function () {
          g || ( g = !0, re( f,
            "compact" ), He() )
        } )
      }
      Ee();
      new le
    };
  var Ke = function ( a ) {
      a = K( a );
      var b = a.nodeName.toLowerCase();
      a.style.display = "span" == b || "img" == b || "a" == b || "input" == b || "select" == b ? "inline" : "block"
    },
    U = function ( a ) {
      K( a ).style.display = n
    };
  var Me = function ( a ) {
      Le();
      var b = Lb();
      a = b ? b.createHTML( a ) : a;
      return new nc( a, null, mc )
    },
    Le = Qa;
  var V = function ( a, b, c ) {
      var d;
      c && U( xa );
      switch ( a ) {
        case 0:
          a = d = "captcha-error";
          break;
        case 1:
          a = d = "id-error";
          break;
        case 2:
        case 3:
        case 4:
          a = "main-error";
          d = "main-error-holder";
          break;
        case 5:
          a = d = "nameUrlDialogErrorHolder";
          break;
        default:
          throw Error( "internal error in show message" );
      }
      c ? ( b = Me( String( b ) ), rc( Pc( document, a ), b ), Ke( d ), K( ja ).className = "commentBody-err" ) : ( Wc( K( a ) ), U( d ) );
      He()
    },
    Ne = function ( a ) {
      V( 3, null, !1 );
      a = Me( a );
      rc( K( "main-status" ), a );
      Ke( xa );
      He()
    };
  var Oe = function () {};
  Oe.prototype.Mh = function () {
    U( ta );
    K( ja ).disabled = !0;
    K( Aa ).disabled = !0
  };
  Oe.prototype.Gg = function () {
    Ke( ta );
    K( ja ).disabled = !1;
    K( Aa ).disabled = !1
  };
  var Xd = function ( a ) {
    this.ta = a
  };
  y( Xd, Oe );
  r = Xd.prototype;
  r.cb = function () {
    return !1
  };
  r.Tb = function () {
    if ( !this.cb() ) throw Error( "Trying to show a non-editable identity" );
    this.Mh();
    Ke( sa )
  };
  r.le = function () {
    return !0
  };
  r.dd = function () {
    if ( !this.cb() ) throw Error( "Trying to show edit button for a non-editable identity" );
    Ke( "editButton" )
  };
  r.Ee = function () {};
  r.Uc = function () {};
  r.Ya = function () {
    U( sa );
    U( "editButton" );
    U( "settingsButton" );
    U( "commentDash" );
    U( Ia );
    this.Gg()
  };
  var Pe = function ( a ) {
      a = a.className;
      return typeof a === q && a.match( /\S+/g ) || []
    },
    Qe = function ( a, b ) {
      for ( var c = Pe( a ), d = ob( arguments, 1 ), f = c.length + d.length, g = 0; g < d.length; g++ ) z( c, d[ g ] ) || c.push( d[ g ] );
      a.className = c.join( " " );
      return c.length == f
    },
    Se = function ( a, b ) {
      var c = Pe( a ),
        d = ob( arguments, 1 ),
        f = Re( c, d );
      a.className = f.join( " " );
      return f.length == c.length - d.length
    },
    Re = function ( a, b ) {
      return fb( a, function ( c ) {
        return !z( b, c )
      } )
    };
  var Ve = function ( a ) {
      for ( var b = [], c = Te, d = a.elements, f, g = 0; f = d.item( g ); g++ )
        if ( f.form == a && !f.disabled && "FIELDSET" != f.tagName ) {
          var k = f.name;
          switch ( f.type.toLowerCase() ) {
            case "file":
            case "submit":
            case "reset":
            case "button":
              break;
            case Ea:
              f = Ue( f );
              if ( null != f )
                for ( var l, t = 0; l = f[ t ]; t++ ) c( b, k, l );
              break;
            default:
              l = Ue( f ), null != l && c( b, k, l )
          }
        } d = a.getElementsByTagName( aa );
      for ( g = 0; f = d[ g ]; g++ ) f.form == a && "image" == f.type.toLowerCase() && ( k = f.name, c( b, k, f.value ), c( b, k + ".x", "0" ), c( b, k + ".y", "0" ) );
      return b.join( "&" )
    },
    Te = function ( a,
      b, c ) {
      a.push( encodeURIComponent( b ) + "=" + encodeURIComponent( c ) )
    },
    Ue = function ( a ) {
      var b = a.type;
      if ( typeof b === q ) switch ( b.toLowerCase() ) {
        case "checkbox":
        case "radio":
          return a.checked ? a.value : null;
        case "select-one":
          return b = a.selectedIndex, 0 <= b ? a.options[ b ].value : null;
        case Ea:
          b = [];
          for ( var c, d = 0; c = a.options[ d ]; d++ ) c.selected && b.push( c.value );
          return b.length ? b : null
      }
      return null != a.value ? a.value : null
    };
  var We = !1,
    Xe = !1,
    Ye = !1,
    Ze = function ( a, b ) {
      Xe = a;
      Ye = b;
      window.parent == window.top && ( a || b ) ? ( a = K( Ia ), b ? Qe( a, "checked" ) : Se( a, "checked" ), Ke( Ia ), K( "ajaxAction" ).value = b ? "UnsubscribeByEmail" : "SubscribeByEmail" ) : U( Ia )
    };
  var af = function ( a, b ) {
    T.call( this, new $e, a, !1 );
    this.jg = b
  };
  y( af, T );
  af.prototype.encode = function () {
    return this.qc.encode() + "=" + this.label + "=" + this.jg
  };
  af.prototype.X = function () {
    return this.label + " (Google)"
  };
  af.prototype.va = function () {
    return new bf( this )
  };
  var $e = function () {};
  y( $e, Yd );
  $e.prototype.X = function () {
    return ""
  };
  $e.prototype.da = function () {
    return "CURRENT"
  };
  $e.prototype.decode = function ( a ) {
    return new af( a[ 1 ], a[ 2 ] )
  };
  $e.prototype.va = function () {
    throw Error( "internal error" );
  };
  var bf = function ( a ) {
    this.ta = a
  };
  y( bf, Xd );
  bf.prototype.dd = function () {
    ( Xe || Ye ) && Ke( Ia )
  };
  var cf = function ( a ) {
    T.call( this, a, a.X(), !1 )
  };
  y( cf, T );
  var df = function () {};
  y( df, Yd );
  df.prototype.X = function () {
    return "Google Account"
  };
  df.prototype.da = function () {
    return "GOOGLE"
  };
  df.prototype.decode = function () {
    return this.Xd()
  };
  df.prototype.Xd = function () {
    return new cf( this )
  };
  var ef = function ( a, b, c ) {
    T.call( this, a, null, !0 );
    this.name = b;
    this.url = c
  };
  y( ef, T );
  ef.prototype.X = function () {
    return this.name + " (" + this.url + ")"
  };
  ef.prototype.encode = function () {
    return this.qc.encode() + "=" + encodeURIComponent( this.name ) + "=" + encodeURIComponent( this.url )
  };
  ef.prototype.va = function () {
    return new ff( this )
  };
  var gf = function () {};
  y( gf, Yd );
  gf.prototype.X = function () {
    return "Name/URL"
  };
  gf.prototype.da = function () {
    return "NAMEURL"
  };
  gf.prototype.va = function () {
    return new ff( new ef( this, "", "" ) )
  };
  gf.prototype.decode = function ( a ) {
    return new ef( this, a[ 1 ], a[ 2 ] )
  };
  var ff = function ( a ) {
    this.ta = a
  };
  y( ff, Xd );
  r = ff.prototype;
  r.cb = function () {
    return !0
  };
  r.Tb = function () {
    ff.A.Tb.call( this );
    Ke( ya )
  };
  r.Ya = function () {
    ff.A.Ya.call( this );
    U( ya );
    V( 5, null, !1 );
    this.Ue( "" );
    this.We( "" )
  };
  r.Ee = function () {
    this.Ue( this.ta.name );
    this.We( this.ta.url )
  };
  r.Uc = function () {
    ff.A.Uc.call( this );
    this.ta.name = this.Wd();
    this.ta.url = this.sg();
    this.dd()
  };
  r.le = function () {
    return "" == this.Wd() ? ( V( 5, "Name should not be empty", !0 ), !1 ) : !0
  };
  r.Wd = function () {
    return K( "anonNameField" ).value
  };
  r.Ue = function ( a ) {
    K( "anonNameField" ).value = a
  };
  r.sg = function () {
    return K( "anonUrlField" ).value
  };
  r.We = function ( a ) {
    K( "anonUrlField" ).value = a
  };
  var hf = function () {
    this.sa = [];
    this.gb = [];
    this.Ra = [];
    this.ab = [];
    this.u = this.F = null;
    this.L = []
  };
  r = hf.prototype;
  r.Hb = function ( a, b, c, d ) {
    for ( var f = 0; f < this.L.length; f++ )
      if ( a == this.L[ f ] ) return d( a );
    d = a.encode();
    for ( f = 0; f < this.L.length; f++ )
      if ( this.L[ f ].encode() == d ) return c( this.L[ f ] );
    return b( a )
  };
  r.Lg = function ( a ) {
    return this.Hb( a, w( function ( b ) {
      return this.L[ this.L.length ] = b
    }, this ), Jb, Jb )
  };
  r.Bc = function ( a ) {
    function b() {
      return !1
    }
    return this.Hb( a, function () {
      return !0
    }, b, b )
  };
  r.bb = function ( a ) {
    function b() {
      throw Error( "item should have been unique" );
    }
    this.Hb( a, Qa, b, b );
    return this.Lg( a )
  };
  r.fc = function ( a ) {
    return this.Hb( a, w( function ( b ) {
      this.L[ this.L.length ] = b;
      return this.sa[ this.sa.length ] = b
    }, this ), Jb, Jb )
  };
  r.te = function () {
    for ( var a = document.getElementById( "identityControlsHolder" ), b = ne( a ), c = 0; c < b.length; c++ ) b[ c ].slice( 0, 14 ) == ra && re( a, b[ c ] );
    ( b = this.ab[ K( ta ).selectedIndex ] ) && qe( a, ra + b.value )
  };
  r.ud = function ( a ) {
    this.F = this.fc( a );
    this.ib();
    this.Qa();
    this.sb( !1 );
    return this.F
  };
  r.vd = function ( a ) {
    this.bb( a );
    this.gb[ this.gb.length ] = a
  };
  r.Rf = function () {
    var a = this.bb( new df );
    this.vd( a.Xd() )
  };
  r.Qf = function () {
    var a = new gf;
    this.bb( a );
    this.Ra[ this.Ra.length ] = a
  };
  r.Pf = function () {
    var a = this.bb( new $d );
    a = this.bb( new Zd( a ) );
    this.Ra[ this.Ra.length ] = a
  };
  r.Qa = function () {
    var a = this.ab[ K( ta ).selectedIndex ];
    if ( a.constructor == Wd ) this.ib();
    else {
      V( 1, null, !1 );
      this.u = a.va();
      null != this.u && this.u.Ee();
      this.te();
      var b = K( "anonymousWarning" );
      b && ( ye( b, a.ie() ), He() )
    }
  };
  r.sb = function ( a ) {
    if ( null != this.u ) {
      var b = this.u.ta;
      if ( a && this.u.cb() && this.Bc( b ) || !this.u.le() ) this.u.Tb();
      else return this.u.Uc(), this.u.Ya(), this.u.cb() && this.u.dd(), this.u = null, b
    }
    return null
  };
  r.Dh = function () {
    this.cg( K( "encodedIds" ).value );
    this.F = this.Jd( K( na ).value );
    null == this.F && 0 < this.sa.length && ( this.F = this.sa[ 0 ] );
    null == this.F && 1 == this.gb.length && ( this.F = this.gb[ 0 ] );
    this.ib();
    null != this.F && ( this.Qa(), this.sb( !1 ) )
  };
  r.wd = function ( a, b ) {
    this.ab[ this.ab.length ] = b;
    var c = document.createElement( "option" );
    c.text = b.X();
    c.value = b.da();
    try {
      a.add( c, null )
    } catch ( d ) {
      a.add( c )
    }
    this.F == b && ( c.selected = !0 );
    return c
  };
  r.hc = function ( a, b ) {
    for ( var c = 0; c < b.length; c++ ) this.wd( a, b[ c ] )
  };
  r.ib = function () {
    for ( var a = K( ta ); 0 != a.options.length; ) a.remove( 0 );
    this.ab = [];
    this.wd( a, new Wd( "Select profile..." ) ).disabled = "disabled";
    this.hc( a, this.sa );
    this.hc( a, this.gb );
    this.hc( a, this.Ra )
  };
  r.gg = function () {
    for ( var a = [], b = 0; b < this.sa.length; b++ ) a[ a.length ] = this.sa[ b ].encode();
    return a.join( "&" )
  };
  r.cg = function ( a ) {
    if ( "" != a ) {
      a = a.split( "&" );
      for ( var b = 0; b < a.length; b++ ) this.Jd( a[ b ] )
    }
  };
  r.Jd = function ( a ) {
    if ( "" == a ) return null;
    a = a.split( "=" );
    for ( var b = 0; b < a.length; b++ ) a[ b ] = decodeURIComponent( a[ b ] );
    b = this.ig( a[ 0 ] );
    return null != b ? ( a = b.decode( a ), this.fc( a ) ) : null
  };
  r.ig = function ( a ) {
    for ( var b = 0; b < this.L.length; b++ )
      if ( this.L[ b ].encode() == a ) return this.L[ b ];
    return null
  };
  r.cf = function () {
    var a = K( ja ).value;
    if ( "" == a ) return V( 2, "Comment should not be empty", !0 ), !1;
    if ( 1E6 < a.length ) return V( 2, "Content length exceeds 1MB. Please abridge.", !0 ), !1;
    V( 2, null, !1 );
    return !0
  };
  r.Mc = function () {
    null != this.u && this.u.Ya();
    this.Qa();
    var a = this.sb( !0 );
    null != a && ( this.F = a )
  };
  r.jh = function () {
    var a = this.sb( !1 );
    null != a && this.ud( a )
  };
  r.ih = function () {
    null != this.u && ( this.u.Ya(), this.u = null );
    this.ib();
    this.Mc()
  };
  r.Ce = function () {
    if ( null == this.F || "NONE" == this.F.da() ) return V( 1, "Please choose a profile", !0 ), !1;
    if ( null != this.u ) return !1;
    K( "encodedIds" ).value = this.gg();
    K( na ).value = this.F.encode();
    return !0
  };
  r.lh = function () {
    this.F && ( this.Qa(), this.u.Tb() )
  };
  r.sh = function () {
    this.cf() && this.Ce() && this.Od( !1 )
  };
  r.th = function () {
    this.cf() && this.Ce() && this.Od( !0 )
  };
  r.Od = function ( a ) {
    K( Fa ).value = a ? "true" : "false";
    this.Qa();
    a = K( "commentForm" );
    a.onsubmit();
    a.submit()
  };
  var jf = function () {
    Se( K( ea ), "previewMode" );
    return !0
  };
  var kf;
  var lf = function ( a, b, c ) {
    L.call( this );
    this.Ic = a;
    this.Ng = b || 0;
    this.Fa = c;
    this.Vf = w( this.Nd, this )
  };
  y( lf, L );
  r = lf.prototype;
  r.Za = 0;
  r.s = function () {
    lf.A.s.call( this );
    this.stop();
    delete this.Ic;
    delete this.Fa
  };
  r.start = function ( a ) {
    this.stop();
    this.Za = Ld( this.Vf, void 0 !== a ? a : this.Ng )
  };
  r.stop = function () {
    this.Ib() && u.clearTimeout( this.Za );
    this.Za = 0
  };
  r.fire = function () {
    this.stop();
    this.Nd()
  };
  r.Ib = function () {
    return 0 != this.Za
  };
  r.Nd = function () {
    this.Za = 0;
    this.Ic && this.Ic.call( this.Fa )
  };
  var of = function ( a, b, c, d, f, g ) {
    if ( G && !Gc( "525" ) ) return !0;
    if ( H && f ) return mf( a );
    if ( f && !d ) return !1;
    if ( !F ) {
      typeof b === za && ( b = nf( b ) );
      var k = 17 == b || 18 == b || H && 91 == b;
      if ( ( !c || H ) && k || H && 16 == b && ( d || g ) ) return !1
    }
    if ( ( G || yc ) && d && c ) switch ( a ) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
    }
    if ( E && d && b == a ) return !1;
    switch ( a ) {
      case 13:
        return F ? g || f ? !1 : !( c && d ) : !0;
      case 27:
        return !( G || yc || F )
    }
    return F && ( d || f || g ) ? !1 : mf( a )
  }, mf = function ( a ) {
    if ( 48 <= a && 57 >= a || 96 <=
      a && 106 >= a || 65 <= a && 90 >= a || ( G || yc ) && 0 == a ) return !0;
    switch ( a ) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
      case 163:
      case 58:
        return !0;
      case 173:
        return F;
      default:
        return !1
    }
  }, nf = function ( a ) {
    if ( F ) a = pf( a );
    else if ( H && G ) switch ( a ) {
      case 93:
        a = 91
    }
    return a
  }, pf = function ( a ) {
    switch ( a ) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a
    }
  };
  var qf = function ( a, b ) {
    R.call( this );
    a && this.yd( a, b )
  };
  y( qf, R );
  r = qf.prototype;
  r.Aa = null;
  r.Jb = null;
  r.Dc = null;
  r.Kb = null;
  r.I = -1;
  r.fa = -1;
  r.ic = !1;
  var rf = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    sf = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    tf = !G || Gc( "525" ),
    uf = H && F;
  r = qf.prototype;
  r.yg = function ( a ) {
    ( G || yc ) && ( 17 == this.I && !a.ctrlKey || 18 == this.I && !a.altKey || H && 91 == this.I && !a.metaKey ) && this.Oe(); - 1 == this.I && ( a.ctrlKey && 17 != a.keyCode ? this.I = 17 : a.altKey && 18 != a.keyCode ? this.I = 18 : a.metaKey && 91 != a.keyCode && ( this.I = 91 ) );
    tf && ! of ( a.keyCode, this.I, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey ) ? this.handleEvent( a ) : ( this.fa = nf( a.keyCode ), uf && ( this.ic = a.altKey ) )
  };
  r.Oe = function () {
    this.fa = this.I = -1
  };
  r.zg = function ( a ) {
    this.Oe();
    this.ic = a.altKey
  };
  r.handleEvent = function ( a ) {
    var b = a.Ba,
      c = b.altKey;
    if ( E && a.type == ua ) {
      var d = this.fa;
      var f = 13 != d && 27 != d ? b.keyCode : 0
    } else( G || yc ) && a.type == ua ? ( d = this.fa, f = 0 <= b.charCode && 63232 > b.charCode && mf( d ) ? b.charCode : 0 ) : xc && !G ? ( d = this.fa, f = mf( d ) ? b.keyCode : 0 ) : ( a.type == ua ? ( uf && ( c = this.ic ), b.keyCode == b.charCode ? 32 > b.keyCode ? ( d = b.keyCode, f = 0 ) : ( d = this.fa, f = b.charCode ) : ( d = b.keyCode || this.fa, f = b.charCode || 0 ) ) : ( d = b.keyCode || this.fa, f = b.charCode || 0 ), H && 63 == f && 224 == d && ( d = 191 ) );
    var g = d = nf( d );
    d ? 63232 <= d && d in rf ? g = rf[ d ] : 25 == d &&
      a.shiftKey && ( g = 9 ) : b.keyIdentifier && b.keyIdentifier in sf && ( g = sf[ b.keyIdentifier ] );
    F && tf && a.type == ua && ! of ( g, this.I, a.shiftKey, a.ctrlKey, c, a.metaKey ) || ( a = g == this.I, this.I = g, b = new vf( g, f, a, b ), b.altKey = c, this.dispatchEvent( b ) )
  };
  r.Da = function () {
    return this.Aa
  };
  r.yd = function ( a, b ) {
    this.Kb && this.detach();
    this.Aa = a;
    this.Jb = Q( this.Aa, ua, this, b );
    this.Dc = Q( this.Aa, "keydown", this.yg, b, this );
    this.Kb = Q( this.Aa, "keyup", this.zg, b, this )
  };
  r.detach = function () {
    this.Jb && ( xd( this.Jb ), xd( this.Dc ), xd( this.Kb ), this.Kb = this.Dc = this.Jb = null );
    this.Aa = null;
    this.fa = this.I = -1
  };
  r.s = function () {
    qf.A.s.call( this );
    this.detach()
  };
  var vf = function ( a, b, c, d ) {
    P.call( this, d );
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
  };
  y( vf, P );
  var wf = {},
    xf = null,
    yf = function ( a ) {
      a = Va( a );
      delete wf[ a ];
      Gb( wf ) && xf && xf.stop()
    },
    Af = function () {
      xf || ( xf = new lf( function () {
        zf( Date.now() )
      }, 20 ) );
      var a = xf;
      a.Ib() || a.start()
    },
    zf = function ( a ) {
      Ab( wf, function ( b ) {
        b.gh( a )
      } );
      Gb( wf ) || Af()
    };
  var Bf = function () {
    R.call( this );
    this.xa = 0;
    this.endTime = this.startTime = null
  };
  y( Bf, R );
  r = Bf.prototype;
  r.Lh = function () {
    this.xa = 1
  };
  r.Kh = function () {
    this.xa = -1
  };
  r.Ve = function () {
    this.xa = 0
  };
  r.Cc = function () {
    return 1 == this.xa
  };
  r.je = function () {
    return -1 == this.xa
  };
  r.ke = function () {
    return 0 == this.xa
  };
  r.hh = function () {
    this.V( "begin" )
  };
  r.ye = function () {
    this.V( "end" )
  };
  r.nh = function () {
    this.V( "finish" )
  };
  r.qh = function () {
    this.V( "pause" )
  };
  r.rh = function () {
    this.V( "play" )
  };
  r.vh = function () {
    this.V( "resume" )
  };
  r.wh = function () {
    this.V( "stop" )
  };
  r.V = function ( a ) {
    this.dispatchEvent( a )
  };
  var Cf = function ( a, b, c, d ) {
    Bf.call( this );
    if ( !Array.isArray( a ) || !Array.isArray( b ) ) throw Error( "Start and end parameters must be arrays" );
    if ( a.length != b.length ) throw Error( "Start and end points must be the same length" );
    this.lb = a;
    this.hg = b;
    this.duration = c;
    this.td = d;
    this.coords = [];
    this.progress = 0
  };
  y( Cf, Bf );
  r = Cf.prototype;
  r.play = function ( a ) {
    if ( a || this.ke() ) this.progress = 0, this.coords = this.lb;
    else if ( this.Cc() ) return !1;
    yf( this );
    this.startTime = a = Date.now();
    this.je() && ( this.startTime -= this.duration * this.progress );
    this.endTime = this.startTime + this.duration;
    this.progress || this.hh();
    this.rh();
    this.je() && this.vh();
    this.Lh();
    var b = Va( this );
    b in wf || ( wf[ b ] = this );
    Af();
    this.Id( a );
    return !0
  };
  r.stop = function ( a ) {
    yf( this );
    this.Ve();
    a && ( this.progress = 1 );
    this.af( this.progress );
    this.wh();
    this.ye()
  };
  r.pause = function () {
    this.Cc() && ( yf( this ), this.Kh(), this.qh() )
  };
  r.s = function () {
    this.ke() || this.stop( !1 );
    this.kh();
    Cf.A.s.call( this )
  };
  r.gh = function ( a ) {
    this.Id( a )
  };
  r.Id = function ( a ) {
    a < this.startTime && ( this.endTime = a + this.endTime - this.startTime, this.startTime = a );
    this.progress = ( a - this.startTime ) / ( this.endTime - this.startTime );
    1 < this.progress && ( this.progress = 1 );
    this.af( this.progress );
    1 == this.progress ? ( this.Ve(), yf( this ), this.nh(), this.ye() ) : this.Cc() && this.bh()
  };
  r.af = function ( a ) {
    typeof this.td === m && ( a = this.td( a ) );
    this.coords = Array( this.lb.length );
    for ( var b = 0; b < this.lb.length; b++ ) this.coords[ b ] = ( this.hg[ b ] - this.lb[ b ] ) * a + this.lb[ b ]
  };
  r.bh = function () {
    this.V( "animate" )
  };
  r.kh = function () {
    this.V( "destroy" )
  };
  r.V = function ( a ) {
    this.dispatchEvent( new Df( a, this ) )
  };
  var Df = function ( a, b ) {
    M.call( this, a );
    this.coords = b.coords;
    this.x = b.coords[ 0 ];
    this.y = b.coords[ 1 ];
    this.z = b.coords[ 2 ];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.xa
  };
  y( Df, M );
  var Ef = function ( a, b, c, d, f, g ) {
    function k( t ) {
      if ( t ) {
        t.tabIndex = 0;
        var O = l.Eh;
        O ? t.setAttribute( "role", O ) : t.removeAttribute( "role" );
        qe( t, "goog-zippy-header" );
        l.fg( t );
        l.eg( t )
      }
    }
    R.call( this );
    this.oc = f || Oc();
    this.ia = this.oc.Da( a ) || null;
    this.Wa = this.oc.Da( d || null );
    this.Mb = typeof b === m ? b : null;
    this.Eh = g || "tab";
    this.Y = this.Mb || !b ? null : this.oc.Da( b );
    this.ba = 1 == c;
    void 0 !== c || this.Mb || ( this.Wa ? this.ba = this.Wa.style.display != n : this.ia && ( this.ba = pe( this.ia, pa ) ) );
    this.re = new se( this );
    this.Ec = new qf;
    this.we = new se( this );
    var l = this;
    k( this.ia );
    k( this.Wa );
    this.jb( this.ba )
  };
  y( Ef, R );
  r = Ef.prototype;
  r.s = function () {
    Ef.A.s.call( this );
    bd( this.re );
    bd( this.Ec );
    bd( this.we )
  };
  r.expand = function () {
    this.jb( !0 )
  };
  r.collapse = function () {
    this.jb( !1 )
  };
  r.toggle = function () {
    this.jb( !this.ba )
  };
  r.jb = function ( a ) {
    this.Y ? ye( this.Y, a ) : a && this.Mb && ( this.Y = this.Mb() );
    this.Y && qe( this.Y, "goog-zippy-content" );
    this.Wa ? ( ye( this.ia, !a ), ye( this.Wa, a ) ) : this.ed( a );
    this.Te( a );
    this.dispatchEvent( new Ff( "toggle", this, this.ba ) )
  };
  r.Te = function ( a ) {
    this.ba = a
  };
  r.ed = function ( a ) {
    if ( this.ia ) {
      var b = this.ia;
      a ? qe( b, pa ) : re( b, pa );
      b = this.ia;
      a ? re( b, oa ) : qe( b, oa );
      b = this.ia;
      Array.isArray( a ) && ( a = a.join( " " ) );
      "" === a || void 0 == a ? ( kf || ( kf = {
        atomic: !1,
        autocomplete: n,
        dropeffect: n,
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: n,
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
      } ), a = kf, "expanded" in a ? b.setAttribute( fa, a.expanded ) : b.removeAttribute( fa ) ) : b.setAttribute( fa, a )
    }
  };
  r.eg = function ( a ) {
    a && ( this.Ec.yd( a ), this.re.Ja( this.Ec, "key", this.ph ) )
  };
  r.fg = function ( a ) {
    a && this.we.Ja( a, "click", this.oh )
  };
  r.ph = function ( a ) {
    if ( 13 == a.keyCode || 32 == a.keyCode ) this.toggle(), this.Ld( a ), a.preventDefault(), a.stopPropagation()
  };
  r.oh = function ( a ) {
    this.toggle();
    this.Ld( a )
  };
  r.Ld = function ( a ) {
    this.dispatchEvent( new Ff( "action", this, this.ba, a ) )
  };
  var Ff = function ( a, b ) {
    M.call( this, a, b )
  };
  y( Ff, M );
  var Gf = function ( a, b, c, d, f ) {
    d = d || Oc();
    var g = d.kc( "DIV", {
      style: "overflow:hidden"
    } );
    b = d.Da( b );
    b.parentNode.replaceChild( g, b );
    g.appendChild( b );
    this.wb = g;
    this.O = null;
    Ef.call( this, a, b, c, void 0, d, f );
    a = this.ba;
    this.wb.style.display = a ? "" : n;
    this.ed( a )
  };
  y( Gf, Ef );
  r = Gf.prototype;
  r.animationDuration = 500;
  r.Tf = function ( a ) {
    return 1 - Math.pow( 1 - a, 3 )
  };
  r.jb = function ( a ) {
    if ( this.ba != a || this.O ) {
      this.wb.style.display == n && ( this.wb.style.display = "" );
      var b = this.Y.offsetHeight;
      if ( this.O ) {
        yd( this.O );
        this.O.stop( !1 );
        var c = b - Math.abs( parseInt( this.Y.style.marginTop, 10 ) )
      } else c = a ? 0 : b;
      this.ed( a );
      this.O = new Cf( [ 0, c ], [ 0, a ? b : 0 ], this.animationDuration, this.Tf );
      Q( this.O, [ "begin", "animate", "end" ], this.dh, !1, this );
      Q( this.O, "begin", w( this.eh, this, a ) );
      Q( this.O, "end", w( this.fh, this, a ) );
      this.O.play( !1 )
    }
  };
  r.dh = function ( a ) {
    var b = this.Y;
    b.style.marginTop = a.y - b.offsetHeight + "px"
  };
  r.eh = function ( a ) {
    this.dispatchEvent( new Ff( "a", this, a ) )
  };
  r.fh = function ( a ) {
    a && ( this.Y.style.marginTop = "0" );
    yd( this.O );
    this.Te( a );
    this.O = null;
    a || ( this.wb.style.display = n );
    this.dispatchEvent( new Ff( "toggle", this, a ) );
    this.dispatchEvent( new Ff( "b", this, a ) )
  };
  var Hf = null;
  var W = new hf;
  x( "BLOG_CMT_LoggedInGaiaIdentity", af );
  x( "BLOG_CMT_NotLoggedInGaiaIdentityFactory", df );
  x( "BLOG_CMT_NameUrlIdentityFactory", gf );
  x( "BLOG_CMT_AnonymousIdentityFactory", $d );
  x( "BLOG_CMT_onPost", function () {
    jf();
    return W.sh()
  } );
  x( "BLOG_CMT_onPreview", function () {
    return W.th()
  } );
  x( "BLOG_CMT_onCommentBodyChange", function () {} );
  x( "BLOG_CMT_onCancel", function () {
    return W.ih()
  } );
  x( "BLOG_CMT_onSelectorChange", function () {
    return W.Mc()
  } );
  x( "BLOG_CMT_onContinue", function () {
    return W.jh()
  } );
  x( "BLOG_CMT_onEdit", function () {
    return W.lh()
  } );
  x( "BLOG_CMT_addIdentity", function ( a ) {
    return W.fc( a )
  } );
  x( "BLOG_CMT_addAndSelectIdentity", function ( a ) {
    return W.ud( a )
  } );
  x( "BLOG_CMT_addIdentityFactory", function ( a ) {
    return W.vd( a )
  } );
  x( "BLOG_CMT_addNameUrlIdentityFactory", function () {
    return W.Qf()
  } );
  x( "BLOG_CMT_addAnonIdentity", function () {
    return W.Pf()
  } );
  x( "BLOG_CMT_addNotLoggedInGaiaIdentity", function () {
    return W.Rf()
  } );
  x( "BLOG_CMT_init", function ( a, b ) {
    Je( document.location.href );
    W.Dh();
    W.Mc();
    W.te();
    Ze( a, b );
    "true" == K( Fa ).value && ( K( Fa ).value = "false", Qe( K( ea ), "previewMode" ) );
    Ie();
    return !0
  } );
  x( "BLOG_CMT_createPhotoZippy", function ( a, b ) {
    K( a ) && K( b ) && ( Hf = new Gf( a, b ) )
  } );
  x( "BLOG_CMT_closePhotoZippy", function () {
    null != Hf && Hf.collapse()
  } );
  x( "BLOG_CMT_finalizeBG", function () {
    window.Ad && window.Ad.invoke( function ( a ) {
      document.getElementById( ha ).value = a
    } )
  } );
  x( "BLOG_CMT_getBG", function () {
    var a = new ae( "/comment-iframe-bg.g" ),
      b = document.getElementById( ha ).value;
    b && a.Sb( ha, b );
    b = null;
    "Microsoft Internet Explorer" == window.navigator.appName && ( document.documentMode ? b = document.documentMode : ( b = 5, document.compatMode && "CSS1Compat" == document.compatMode && ( b = 7 ) ) );
    b && a.Sb( "iemode", b );
    document.getElementById( "pageID" ) && a.Sb( "page", "1" );
    ke && a.Sb( "bgint", ke );
    Rd( a, function () {
      if ( this.eb() ) {
        var c = eval( this.pg() );
        c instanceof Object && c.length && ( 1 < c.length && ( eval( c[ 1 ] ), ke =
          c[ 2 ] ), window.Ad = new botguard.bg( c[ 0 ] ) )
      }
    } )
  } );
  x( "BLOG_CMT_setBG", function ( a ) {
    ke = a
  } );
  x( "BLOG_CMT_subscription.toggle", function () {
    if ( !We ) {
      We = !0;
      var a = K( "commentSubscriptionForm" );
      Rd( a.action, function () {
        We = !1;
        if ( this.eb() ) {
          var b = this.$d();
          null != b.errorMessage ? V( 3, b.errorMessage, !0 ) : Ne( b.statusMessage );
          Ze( b.can_subscribe, b.is_subscribed )
        } else V( 3, "An error occurred while contacting the server.", !0 )
      }, "POST", Ve( a ) )
    }
  } );
  x( "BLOG_CMT_showStatusMessage", Ne );
  x( "BLOG_CMT_showPostErrorMessage", function ( a ) {
    V( 4, a, !0 )
  } );
  x( "BLOG_CMT_hidePreview", function () {
    jf();
    W.ib();
    He()
  } );
  x( "BLOG_xhr", S );
  S.send = Rd;
  S.prototype.isSuccess = S.prototype.eb;
  S.prototype.getResponseJson = S.prototype.$d;
  x( "$", K );

  function If( a ) {
    return function ( b ) {
      var c = -1;
      try {
        c = b.status
      } catch ( d ) {}
      return 500 <= c ? ( b.responseText.length ? document.body.innerHTML = b.responseText : window.alert( LayoutsMessages.SERVER_ERROR ), !1 ) : a ? a( b ) : !0
    }
  };
  var Kf = function ( a, b, c ) {
      var d = a.ownerDocument;
      b = b._GetHelper();
      var f = b._GetData(),
        g = c._GetAllData();
      a = Jf( d, a, h, "widget-wrap1" );
      a = Jf( d, a, h, "widget-wrap2" );
      a = Jf( d, a, h, "widget-wrap3" );
      var k = Jf( d, a, h, "widget-content" );
      if ( a = f.version && 1 < f.version ) k.className += " visibility", Jf( d, k, h, "layout-widget-state " + ( f.isVisible ? "visible" : "not-visible" ) ).setAttribute( "title", f.visibilityTooltipMessage );
      var l = Jf( d, k, h, "layout-title" );
      if ( f[ wa ] ) {
        var t = Jf( d, k, h, va );
        t.appendChild( d.createTextNode( f[ wa ] ) );
        t.setAttribute( "title",
          f[ va ] )
      }
      l.appendChild( d.createTextNode( f[ "layout-title" ] ) );
      f = Jf( d, k, "a", "editlink" );
      var O = b._GenerateWidgetMetadata();
      f.setAttribute( "href", O.quickEditUrl );
      f.target = ia;
      f.onclick = function () {
        return c._PopupConfig( d.getElementById( O.instanceId ) )
      };
      a && ( f.className += " icon" );
      f.appendChild( d.createTextNode( g.messages.edit || "Edit" ) )
    },
    Jf = function ( a, b, c, d ) {
      a = a.createElement( c );
      a.className = d;
      b.appendChild( a );
      return a
    };
  var Lf = function () {
    this.zh = {};
    this.ve = {};
    this.Qc = {};
    this.bf = null;
    this.De = []
  };
  Ra( Lf );
  Lf.prototype.Vd = function ( a, b ) {
    return a + "_" + b + ".js"
  };
  var Mf = function ( a ) {
    eval( a )
  };
  Lf.prototype.fe = function ( a, b ) {
    x( "__gjsload__", Mf );
    this.bf = a.replace( /\.js$/, "" );
    b && ( this.Vd = b );
    eb( this.De, function ( c ) {
      this.Vg( c )
    }, this );
    kb( this.De )
  };
  Lf.prototype.Bh = function ( a, b, c ) {
    var d = this.ve,
      f = this.zh;
    d[ a ] || ( d[ a ] = {} );
    if ( c ) d[ a ][ b ] = c;
    else if ( f[ a ] ) {
      for ( b = 0; b < f[ a ].length; ++b )( 0, f[ a ][ b ][ 1 ] )( d[ a ][ f[ a ][ b ][ 0 ] ] );
      delete f[ a ];
      delete this.Qc[ a ]
    }
  };
  Lf.prototype.Vg = function ( a ) {
    Ld( function () {
      if ( !this.ve[ a ] ) {
        var b = this.Vd( this.bf, a ),
          c = Fb( this.Qc, b );
        this.Qc[ a ] = b;
        if ( !c ) {
          c = Tc( "SCRIPT", {
            type: "text/javascript"
          } );
          Le();
          var d = Lb();
          b = d ? d.createScriptURL( b ) : b;
          b = new Qb( b, Pb );
          c.src = b instanceof Qb && b.constructor === Qb ? b.Je : "type_error:TrustedResourceUrl";
          ( b = Oa( c.ownerDocument && c.ownerDocument.defaultView ) ) && c.setAttribute( "nonce", b );
          document.body.appendChild( c )
        }
      }
    }, 0, this )
  };
  var Nf = function () {
    this.P = [];
    this.U = []
  };
  r = Nf.prototype;
  r.Wg = function () {
    0 == this.P.length && ( this.P = this.U, this.P.reverse(), this.U = [] )
  };
  r.enqueue = function ( a ) {
    this.U.push( a )
  };
  r.dequeue = function () {
    this.Wg();
    return this.P.pop()
  };
  r.m = function () {
    return this.P.length + this.U.length
  };
  r.isEmpty = function () {
    return 0 == this.P.length && 0 == this.U.length
  };
  r.clear = function () {
    this.P = [];
    this.U = []
  };
  r.contains = function ( a ) {
    return z( this.P, a ) || z( this.U, a )
  };
  r.remove = function ( a ) {
    var b = this.P;
    var c = db( b, a );
    0 <= c ? ( Array.prototype.splice.call( b, c, 1 ), b = !0 ) : b = !1;
    return b || lb( this.U, a )
  };
  r.B = function () {
    for ( var a = [], b = this.P.length - 1; 0 <= b; --b ) a.push( this.P[ b ] );
    var c = this.U.length;
    for ( b = 0; b < c; ++b ) a.push( this.U[ b ] );
    return a
  };
  var Of = function ( a ) {
      this.o = new Zc;
      a && this.addAll( a )
    },
    Pf = function ( a ) {
      var b = typeof a;
      return b == p && a || b == m ? "o" + Va( a ) : b.substr( 0, 1 ) + a
    };
  r = Of.prototype;
  r.m = function () {
    return this.o.m()
  };
  r.add = function ( a ) {
    this.o.set( Pf( a ), a )
  };
  r.addAll = function ( a ) {
    a = Hd( a );
    for ( var b = a.length, c = 0; c < b; c++ ) this.add( a[ c ] )
  };
  r.Qb = function ( a ) {
    a = Hd( a );
    for ( var b = a.length, c = 0; c < b; c++ ) this.remove( a[ c ] )
  };
  r.remove = function ( a ) {
    return this.o.remove( Pf( a ) )
  };
  r.clear = function () {
    this.o.clear()
  };
  r.isEmpty = function () {
    return this.o.isEmpty()
  };
  r.contains = function ( a ) {
    return this.o.oa( Pf( a ) )
  };
  r.B = function () {
    return this.o.B()
  };
  r.clone = function () {
    return new Of( this )
  };
  r.equals = function ( a ) {
    return this.m() == Gd( a ) && this.Rg( a )
  };
  r.Rg = function ( a ) {
    var b = Gd( a );
    if ( this.m() > b ) return !1;
    !( a instanceof Of ) && 5 < b && ( a = new Of( a ) );
    return Kd( this, function ( c ) {
      var d = a;
      return d.contains && typeof d.contains == m ? d.contains( c ) : d.Ua && typeof d.Ua == m ? d.Ua( c ) : Sa( d ) || typeof d === q ? z( d, c ) : Fb( d, c )
    } )
  };
  r.dc = function () {
    return this.o.dc( !1 )
  };
  var Qf = function ( a, b ) {
    L.call( this );
    this.ue = a || 0;
    this.Ob = b || 10;
    if ( this.ue > this.Ob ) throw Error( "[goog.structs.Pool] Min can not be greater than max" );
    this.ca = new Nf;
    this.la = new Of;
    this.delay = 0;
    this.Fc = null;
    this.rb()
  };
  y( Qf, L );
  r = Qf.prototype;
  r.zb = function () {
    var a = Date.now();
    if ( !( null != this.Fc && a - this.Fc < this.delay ) ) {
      var b = this.Ch();
      b && ( this.Fc = a, this.la.add( b ) );
      return b
    }
  };
  r.Tc = function ( a ) {
    return this.la.remove( a ) ? ( this.ec( a ), !0 ) : !1
  };
  r.Ch = function () {
    for ( var a; 0 < this.Ud() && ( a = this.ca.dequeue(), !this.Lc( a ) ); ) this.rb();
    !a && this.m() < this.Ob && ( a = this.lc() );
    return a
  };
  r.ec = function ( a ) {
    this.la.remove( a );
    this.Lc( a ) && this.m() < this.Ob ? this.ca.enqueue( a ) : this.nc( a )
  };
  r.rb = function () {
    for ( var a = this.ca; this.m() < this.ue; ) a.enqueue( this.lc() );
    for ( ; this.m() > this.Ob && 0 < this.Ud(); ) this.nc( a.dequeue() )
  };
  r.lc = function () {
    return {}
  };
  r.nc = function ( a ) {
    if ( typeof a.pa == m ) a.pa();
    else
      for ( var b in a ) a[ b ] = null
  };
  r.Lc = function ( a ) {
    return typeof a.Wf == m ? a.Wf() : !0
  };
  r.contains = function ( a ) {
    return this.ca.contains( a ) || this.la.contains( a )
  };
  r.m = function () {
    return this.ca.m() + this.la.m()
  };
  r.kg = function () {
    return this.la.m()
  };
  r.Ud = function () {
    return this.ca.m()
  };
  r.isEmpty = function () {
    return this.ca.isEmpty() && this.la.isEmpty()
  };
  r.s = function () {
    Qf.A.s.call( this );
    if ( 0 < this.kg() ) throw Error( "[goog.structs.Pool] Objects not released" );
    delete this.la;
    for ( var a = this.ca; !a.isEmpty(); ) this.nc( a.dequeue() );
    delete this.ca
  };
  var Rf = function ( a, b ) {
    this.qe = a;
    this.Wb = b
  };
  Rf.prototype.getKey = function () {
    return this.qe
  };
  Rf.prototype.clone = function () {
    return new Rf( this.qe, this.Wb )
  };
  var Sf = function ( a ) {
    this.M = [];
    a && this.Kg( a )
  };
  r = Sf.prototype;
  r.he = function ( a, b ) {
    var c = this.M;
    c.push( new Rf( a, b ) );
    this.ah( c.length - 1 )
  };
  r.Kg = function ( a ) {
    if ( a instanceof Sf ) {
      var b = a.R();
      a = a.B();
      if ( 0 >= this.m() ) {
        for ( var c = this.M, d = 0; d < b.length; d++ ) c.push( new Rf( b[ d ], a[ d ] ) );
        return
      }
    } else b = Eb( a ), a = Db( a );
    for ( d = 0; d < b.length; d++ ) this.he( b[ d ], a[ d ] )
  };
  r.remove = function () {
    var a = this.M,
      b = a.length,
      c = a[ 0 ];
    if ( !( 0 >= b ) ) return 1 == b ? kb( a ) : ( a[ 0 ] = a.pop(), this.Yg( 0 ) ), c.Wb
  };
  r.Yg = function ( a ) {
    for ( var b = this.M, c = b.length, d = b[ a ]; a < c >> 1; ) {
      var f = this.ng( a ),
        g = this.rg( a );
      f = g < c && b[ g ].getKey() < b[ f ].getKey() ? g : f;
      if ( b[ f ].getKey() > d.getKey() ) break;
      b[ a ] = b[ f ];
      a = f
    }
    b[ a ] = d
  };
  r.ah = function ( a ) {
    for ( var b = this.M, c = b[ a ]; 0 < a; ) {
      var d = this.og( a );
      if ( b[ d ].getKey() > c.getKey() ) b[ a ] = b[ d ], a = d;
      else break
    }
    b[ a ] = c
  };
  r.ng = function ( a ) {
    return 2 * a + 1
  };
  r.rg = function ( a ) {
    return 2 * a + 2
  };
  r.og = function ( a ) {
    return a - 1 >> 1
  };
  r.B = function () {
    for ( var a = this.M, b = [], c = a.length, d = 0; d < c; d++ ) b.push( a[ d ].Wb );
    return b
  };
  r.R = function () {
    for ( var a = this.M, b = [], c = a.length, d = 0; d < c; d++ ) b.push( a[ d ].getKey() );
    return b
  };
  r.Ua = function ( a ) {
    return hb( this.M, function ( b ) {
      return b.Wb == a
    } )
  };
  r.oa = function ( a ) {
    return hb( this.M, function ( b ) {
      return b.getKey() == a
    } )
  };
  r.clone = function () {
    return new Sf( this )
  };
  r.m = function () {
    return this.M.length
  };
  r.isEmpty = function () {
    return 0 == this.M.length
  };
  r.clear = function () {
    kb( this.M )
  };
  var Tf = function () {
    Sf.call( this )
  };
  y( Tf, Sf );
  Tf.prototype.enqueue = function ( a, b ) {
    this.he( a, b )
  };
  Tf.prototype.dequeue = function () {
    return this.remove()
  };
  var Uf = function ( a, b ) {
    this.Kd = void 0;
    this.Rb = new Tf;
    Qf.call( this, a, b )
  };
  y( Uf, Qf );
  r = Uf.prototype;
  r.zb = function ( a, b ) {
    if ( !a ) return ( a = Uf.A.zb.call( this ) ) && this.delay && ( this.Kd = u.setTimeout( w( this.Bb, this ), this.delay ) ), a;
    this.Rb.enqueue( void 0 !== b ? b : 100, a );
    this.Bb()
  };
  r.Bb = function () {
    for ( var a = this.Rb; 0 < a.m(); ) {
      var b = this.zb();
      if ( b ) a.dequeue().apply( this, [ b ] );
      else break
    }
  };
  r.ec = function ( a ) {
    Uf.A.ec.call( this, a );
    this.Bb()
  };
  r.rb = function () {
    Uf.A.rb.call( this );
    this.Bb()
  };
  r.s = function () {
    Uf.A.s.call( this );
    u.clearTimeout( this.Kd );
    this.Rb.clear();
    this.Rb = null
  };
  var Vf = function ( a, b, c, d ) {
    this.uc = a;
    this.ga = !!d;
    Uf.call( this, b, c )
  };
  y( Vf, Uf );
  Vf.prototype.lc = function () {
    var a = new S,
      b = this.uc;
    b && b.forEach( function ( c, d ) {
      a.headers.set( d, c )
    } );
    this.ga && a.cd( !0 );
    return a
  };
  Vf.prototype.Lc = function ( a ) {
    return !a.za && !a.Ib()
  };
  var Wf = function ( a, b, c, d, f, g ) {
    R.call( this );
    this.Kc = void 0 !== a ? a : 1;
    this.ya = void 0 !== f ? Math.max( 0, f ) : 0;
    this.ga = !!g;
    this.Na = new Vf( b, c, d, g );
    this.T = new Zc;
    this.xb = new se( this )
  };
  y( Wf, R );
  var Xf = [ Ba, e, Ja, "error", "abort", "timeout" ];
  r = Wf.prototype;
  r.ad = function ( a ) {
    this.ya = Math.max( 0, a )
  };
  r.send = function ( a, b, c, d, f, g, k, l, t, O ) {
    if ( this.T.get( a ) ) throw Error( "[goog.net.XhrManager] ID in use" );
    b = new Yf( b, w( this.xg, this, a ), c, d, f, k, void 0 !== l ? l : this.Kc, t, void 0 !== O ? O : this.ga );
    this.T.set( a, b );
    a = w( this.ug, this, a );
    this.Na.zb( a, g );
    return b
  };
  r.abort = function ( a, b ) {
    var c = this.T.get( a );
    if ( c ) {
      var d = c.Xb;
      c.Gh( !0 );
      b && ( d && ( this.Me( d, c.jd ), pd( d, Ba, function () {
        this.Na.Tc( d )
      }, !1, this ) ), this.T.remove( a ) );
      d && d.abort()
    }
  };
  r.ug = function ( a, b ) {
    var c = this.T.get( a );
    c && !c.Xb ? ( this.Sf( b, c.jd ), b.ad( this.ya ), b.Jh( c.Ma ), b.cd( c.ga ), c.Xb = b, this.dispatchEvent( new Zf( Ba, this, a, b ) ), this.Pe( a, b ), c.sd && b.abort() ) : this.Na.Tc( b )
  };
  r.xg = function ( a, b ) {
    var c = b.target;
    switch ( b.type ) {
      case Ba:
        this.Pe( a, c );
        break;
      case e:
        return this.vg( a, c, b );
      case Ja:
        this.Ag( a, c );
        break;
      case "timeout":
      case "error":
        this.wg( a, c );
        break;
      case "abort":
        this.tg( a, c )
    }
    return null
  };
  r.Pe = function ( a, b ) {
    var c = this.T.get( a );
    !c || c.Gd || c.tc() ? ( c && ( this.Me( b, c.jd ), this.T.remove( a ) ), this.Na.Tc( b ) ) : ( c.Jg(), b.send( c.getUrl(), c.Xg, c.getContent(), c.uc ) )
  };
  r.vg = function ( a, b, c ) {
    var d = this.T.get( a );
    if ( 7 == b.Ia || b.eb() || d.tc() )
      if ( this.dispatchEvent( new Zf( e, this, a, b ) ), d && ( d.Hh( !0 ), d.Fd ) ) return d.Fd.call( b, c );
    return null
  };
  r.tg = function ( a, b ) {
    this.dispatchEvent( new Zf( "abort", this, a, b ) )
  };
  r.Ag = function ( a, b ) {
    this.dispatchEvent( new Zf( Ja, this, a, b ) )
  };
  r.wg = function ( a, b ) {
    this.T.get( a ).tc() && this.dispatchEvent( new Zf( "error", this, a, b ) )
  };
  r.Me = function ( a, b, c ) {
    this.xb.Vb( a, c || Xf, b )
  };
  r.Sf = function ( a, b, c ) {
    this.xb.Ja( a, c || Xf, b )
  };
  r.s = function () {
    Wf.A.s.call( this );
    this.Na.pa();
    this.Na = null;
    this.xb.pa();
    this.xb = null;
    this.T.clear();
    this.T = null
  };
  var Zf = function ( a, b, c, d ) {
    M.call( this, a, b );
    this.id = c;
    this.Xb = d
  };
  y( Zf, M );
  var Yf = function ( a, b, c, d, f, g, k, l, t ) {
    this.Ph = a;
    this.Xg = c || "GET";
    this.Zf = d;
    this.uc = f || null;
    this.Kc = void 0 !== k ? k : 1;
    this.zd = 0;
    this.sd = this.Gd = !1;
    this.jd = b;
    this.Fd = g;
    this.Ma = l || "";
    this.ga = !!t;
    this.Xb = null
  };
  r = Yf.prototype;
  r.getUrl = function () {
    return this.Ph
  };
  r.getContent = function () {
    return this.Zf
  };
  r.Jg = function () {
    this.zd++
  };
  r.tc = function () {
    return this.zd > this.Kc
  };
  r.Hh = function ( a ) {
    this.Gd = a
  };
  r.Gh = function ( a ) {
    this.sd = a
  };

  function $f( a, b, c, d, f ) {
    this.Gb = a;
    this.Re = b;
    this.Qe = c || null;
    this.data = d || null;
    if ( f ) {
      if ( this.mc = f, "displayModeSnippet" != f && "displayModeFull" != f && f != ka && f != ma ) throw "bad display mode: " + f;
    } else this.mc = ma;
    this.Bc = !1
  }
  $f.prototype.mg = function () {
    return this.Gb
  };

  function ag( a ) {
    this.dg = !0;
    this.K = a;
    this.hd = null
  }
  r = ag.prototype;
  r.Jf = function ( a ) {
    this.hd = a
  };
  r.mf = function () {
    return this.K.data
  };
  r.Ef = function ( a ) {
    return this.K.data = a
  };
  r.Gf = function ( a ) {
    return this.K.Bc = a
  };
  r.jf = function () {
    var a = {};
    a.type = this.hd.Oh;
    a.instanceId = this.K.Gb;
    a.sectionId = this.K.Re;
    a.actionUrl = X.Dd;
    a.quickEditUrl = X.Pd + "&widgetType=" + this.hd.Oh + "&widgetId=" + this.K.Gb + "&sectionId=" + this.K.Re + "&action=" + X.md;
    return a
  };

  function X() {}
  X.qf = function ( a, b ) {
    X.na = {};
    X.Pd = a;
    X.Dd = b;
    X.rc = {};
    X.Yb = new Wf;
    X.xe = 0;
    X.Rc = 0;
    Q( X.Yb, Ba, function () {
      X.Rc++
    } );
    Q( X.Yb, e, function () {
      X.Rc--
    } )
  };
  X.Lf = function ( a ) {
    a = X.ff( a.document );
    document.body.appendChild( a )
  };
  X.Kf = function ( a ) {
    X.Lf( window );
    if ( window.parent == window ) {
      var b = "Preview";
      a && ( b = a );
      a = X.ef( window.document, b );
      document.body.appendChild( a[ 0 ] );
      document.body.appendChild( a[ 1 ] )
    }
  };
  X.sf = ia;
  X.df = ia;
  X.md = "editWidget";
  X.lf = function () {
    return X.Dd
  };
  X.Hf = function ( a, b ) {
    X.Nc = a;
    X.yh = b
  };
  X.nf = function () {
    return X.Nc
  };
  X.If = function ( a ) {
    X.Qh = a
  };
  X.nd = function () {
    return X.Qh
  };
  X.Ff = function ( a ) {
    X.rc = a
  };
  X.kf = function () {
    var a = {},
      b;
    for ( b in X.rc ) {
      var c = X.rc[ b ];
      a[ c.name ] = c.data
    }
    c = {};
    for ( b in X.na ) c[ b ] = X.na[ b ].H.K.data;
    a.widgets = c;
    return a
  };
  X.pd = function ( a, b ) {
    var c = new ag( b );
    a = new window[ a ]( c );
    c.Jf( a );
    X.na[ b.Gb ] = a;
    X.ld( a );
    return a
  };
  X.yf = function ( a, b ) {
    a = X.pd( a, b );
    a.H.Gf( !0 );
    return a
  };
  X.ld = function ( a ) {
    a.H.K.mc != ma && ( a.H.dg = !1 )
  };
  X.Oa = function ( a ) {
    return X.na ? X.na[ a ] : null
  };
  X.cc = function ( a, b, c, d, f ) {
    var g = "";
    d && ( g = "&widgetId=" + d );
    a = X.Pd + "&action=" + a + "&sectionId=" + b + "&widgetType=" + c + g;
    if ( window.name == f ) return window.location.replace( a ), window.focus(), window;
    f = window.open( a, f, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes" );
    f.focus();
    return f
  };
  X.wf = function ( a ) {
    var b = a.getAttribute( "id" ),
      c = X.Oa( b );
    if ( c ) {
      var d = c.H.Ta;
      if ( null != d && !d.closed ) return d.focus(), !1
    }
    d = "config" + b;
    a = X.cc( X.md, a.parentNode.getAttribute( "id" ), a.getAttribute( "widgetType" ), b, d );
    c && ( c.H.Ta = a );
    return !1
  };
  X.xf = function ( a ) {
    X.cc( X.df, a.parentNode.getAttribute( "id" ), a.getAttribute( "widgetType" ), a.getAttribute( "id" ), X.sf );
    return !1
  };
  X.gf = function ( a, b, c ) {
    X.Pa( c, c.LayoutsMessages.DELETING );
    X.Af( "delete", {}, a, b )
  };
  X.Af = function ( a, b, c, d, f ) {
    X.Nc && ( b.security_token = X.yh, X.zf( X.Nc, a, b, c, d, f ) )
  };
  X.zf = function ( a, b, c, d, f, g, k ) {
    b = [ "action=" + encodeURIComponent( b ), "widgetId=" + encodeURIComponent( d ), "widgetType=" + encodeURIComponent( f ), "responseType=js" ];
    for ( var l in c )
      if ( typeof c[ l ] == p )
        for ( d = c[ l ], f = 0; f < d.length; ++f ) b.push( encodeURIComponent( l ) + "=" + encodeURIComponent( d[ f ] ) );
      else b.push( encodeURIComponent( l ) + "=" + encodeURIComponent( c[ l ] ) );
    var t = g || If();
    c = function () {
      t( this.g ) && window.eval( this.qg() )
    };
    "GET" == k ? ( a = 0 <= a.indexOf( "?" ) ? a + "&" : a + "?", X.Yb.send( "" + X.xe++, a + b.join( "&" ), "GET", void 0, null, null, c ) ) :
      X.Yb.send( "" + X.xe++, a, "POST", b.join( "&" ), null, null, c )
  };
  X.Df = function ( a, b ) {
    a && ( a = X.Oa( a ) ) && ( a.H.Ta = b )
  };
  X.pb = function ( a, b ) {
    0 == X.Rc ? a.setTimeout( function () {
      a.close()
    }, b ) : a.setTimeout( function () {
      X.pb( a, b )
    }, 200 )
  };
  X.rf = function ( a, b ) {
    a && ( X.pb( a, 100 ), X.Mf( a, b ) )
  };
  X.Mf = function ( a, b ) {
    if ( a ) {
      var c = a.document.getElementById( Ha );
      c && ( c = c.innerHTML );
      c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage( c, b )
    }
  };
  X.od = function ( a, b, c ) {
    a = X.na[ a ];
    if ( null != c.errors ) {
      var d = a ? a.H.Ta : null;
      d || ( d = window );
      X.Pa( d, c.errors );
      a && a.qb ? a.qb( b, c, d ) : X.qb( c, d )
    } else a.od( b, c )
  };
  X.qb = function ( a, b ) {
    a = a[ "error-details" ];
    for ( var c in a ) bg( c, a[ c ], b.document )
  };
  X.tf = function ( a, b ) {
    window.parent && window.parent.editor && b ? X.uf( a, b ) : window.location.replace( window.location.href )
  };
  X.uf = function ( a, b ) {
    var c = X.Oa( a );
    c.H.Ef( b.data );
    a = document.getElementById( a );
    Wc( a );
    Kf( a, c, X );
    c.H.Ta = null
  };
  X.pf = function ( a, b, c ) {
    var d = c[ Ga ];
    if ( null != c.errors ) X.Pa( window, c.errors ), X.qb( c, window );
    else if ( "addnew" == b ) {
      if ( X.ac( window ) ) {
        if ( window.opener && window.opener.parent ) var f = window.opener.parent;
        f && f.editor && f.editor.HandleAddNewWidget( c )
      }
      X.Pa( window, d );
      null == window.opener ? ( a = window.location, b = "/rearrange?blogID=" + c.blogID, b instanceof C || b instanceof C || ( b = typeof b == p && b.ka ? b.ea() : String( b ), Vb.test( b ) || ( b = da ), b = new C( b, Rb ) ), a.href = Sb( b ) ) : f && f._WidgetManager ? f._WidgetManager._KillPopupDelay( window ) :
        X.pb( window, 100 )
    } else c = X.na[ a ], "delete" == b && ( X.Pa( c.H.Ta, d ), X.hf( a, "_OnWidgetDeleted" ) )
  };
  X.vf = function ( a ) {
    var b = X.Oa( a );
    b && ( b.H.K.mc == ka ? top.editor.HandleDeleteWidget( b.H.K.Qe ) : ( b = b.H.K.Qe, b.parentNode.removeChild( b ) ), delete X.na[ a ] )
  };
  X.hf = function ( a, b, c ) {
    if ( X.ac( window ) ) {
      var d = window.opener;
      c || ( c = d._WidgetManager[ b ] );
      c( a );
      d._WidgetManager ? d._WidgetManager._KillPopupDelay( window, a ) : X.pb( window, 100 )
    } else a = X.nd() + "?widgetId=" + a, a += "&func=" + encodeURIComponent( b ), window.location.replace( a )
  };
  X.ac = function ( a ) {
    var b = !1;
    try {
      if ( a.opener ) {
        var c = "X" + a.opener.document.domain;
        c && "X" != c && ( b = !0 )
      }
    } catch ( d ) {}
    return b
  };
  X.Bf = "status-msg-yellow-on-white";
  X.Pa = function ( a, b ) {
    a || ( a = self );
    var c = a.document.getElementById( Ha );
    c && ( b = Me( b ), rc( c, b ) );
    ( a = a.document.getElementById( Ga ) ) && Qe( a, X.Bf )
  };
  X.ff = function ( a ) {
    a = a.createElement( h );
    a.className = "blogger-clickTrap singleton-element";
    a.style.position = "fixed";
    a.style.top = "0";
    a.style.left = "0";
    a.style.width = "100%";
    a.style.height = "100%";
    E && !Gc( 7 ) && ( a.style.height = "expression(this.parentNode.clientHeight)" );
    a.style.zIndex = "1000";
    a.style.cursor = "default";
    a.onclick = X.bc;
    a.onmousedown = X.bc;
    a.onmouseup = X.bc;
    a.style.background = "white";
    a.style.filter = "alpha(opacity=1)";
    a.style.opacity = ".01";
    a.textContent = "\u00a0";
    return a
  };
  X.ef = function ( a, b ) {
    var c = X.kd( a, b );
    a = X.kd( a, b );
    c.style.backgroundColor = "#000";
    c.style.border = "1px solid #aaa";
    E && ( c.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)' );
    c.style.opacity = ".5";
    a.style.border = "1px solid transparent";
    c.style.zIndex = 1200;
    a.style.zIndex = 1200;
    return [ c, a ]
  };
  X.kd = function ( a, b ) {
    a = a.createElement( h );
    a.style.position = "absolute";
    a.style.top = "75px";
    a.style.left = "-225px";
    a.style.width = "600px";
    a.style.height = "28px";
    a.style.margin = "0";
    a.style.padding = "10px";
    a.style.fontSize = "24px";
    a.style.textAlign = "center";
    a.style.color = "#fff";
    a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
    E && ( a.style.top = "-140px", a.style.left = "-140px", a.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)' );
    a.style.MozTransform = Ca;
    a.style.MozTransformOrigin = "50% 0";
    a.style.WebkitTransform = Ca;
    a.style.WebkitTransformOrigin = "50% 0";
    b = Me( b );
    rc( a, b );
    a.className = "singleton-element";
    return a
  };
  X.bc = function ( a ) {
    a || ( a = window.event );
    a && ( a.cancelBubble = !0, a.stopPropagation && a.stopPropagation() );
    return !1
  };
  var cg = function ( a, b ) {
      b || ( b = document );
      return b.getElementById( "errormessage_" + a )
    },
    dg = function ( a ) {
      if ( a = cg( a ) ) Wc( a ), a.className = "errorbox-good"
    },
    bg = function ( a, b, c ) {
      if ( a = cg( a, c ) ) b = Me( b ), rc( a, b ), a.className = "errorbox-bad errormsg"
    };
  x( "_WidgetManager", X );
  X._Init = X.qf;
  X._SetPageActionUrl = X.Hf;
  X._GetPageActionUrl = X.nf;
  X._SetWidgetRefreshUrl = X.If;
  X._GetWidgetRefreshUrl = X.nd;
  X._GetCallbackUrl = X.lf;
  X._DeleteWidgetFromPage = X.gf;
  X._DisplayWidget = X.ld;
  X._GetWidget = X.Oa;
  X._HandleControllerResult = X.od;
  X._HandlePageActionResult = X.pf;
  X._IsOpenerReachable = X.ac;
  X._SetConfigWin = X.Df;
  X._SetDataContext = X.Ff;
  X._SetupPreview = X.Kf;
  X._RegisterWidget = X.pd;
  X._RegisterNewWidget = X.yf;
  X._PopupPaneFromParams = X.cc;
  X._PopupConfig = X.wf;
  X._PopupToolbox = X.xf;
  X._KillPopupDelay = X.rf;
  X._OnWidgetConfigured = X.tf;
  X._OnWidgetDeleted = X.vf;
  x( "_WidgetInfo", $f );
  $f.prototype._getInstanceId = $f.prototype.mg;
  ag.prototype._GetData = ag.prototype.mf;
  ag.prototype._GenerateWidgetMetadata = ag.prototype.jf;
  X._GetAllData = X.kf;
  x( "widget_module_provide", function ( a, b, c ) {
    Lf.lg().Bh( a, b, c )
  } );
  var Y = function ( a, b, c, d, f, g, k, l ) {
    this.G = a;
    this.Bd = "null" != b ? b : null;
    this.oe = c;
    this.me = d;
    this.ne = f;
    this.Se = g;
    this.pe = k;
    this.Fh = l;
    this.Eb = this.Ga = -1;
    this.wc = null;
    this.hb = 300;
    this.Jc = "200px";
    this.N = document.getElementById( this.G + "_picImg" );
    this.ub = document.getElementById( this.G + "_changeImageLink" );
    this.Db = document.getElementById( this.G + "_imageChoiceTable" );
    this.xc = document.getElementById( this.G + "_imgSrcFromPCRadio" );
    this.ee = document.getElementById( this.G + "_imgSrcFromWebRadio" );
    this.j = document.getElementById( this.G +
      "_imgFileNameInput" );
    this.$a = document.getElementById( this.G + "_imgUrlTextInput" );
    this.xd = window.frames[ this.G + "_asynchronousFileUploadIframe" ];
    this.vc = 0;
    this.C = new Image;
    this.C.onload = w( this.xh, this );
    this.C.onerror = w( this.mh, this );
    this.Rd = !1;
    this.Ca = this.D = this.Lb = null;
    this.Sc = !1
  };
  r = Y.prototype;
  r.xh = function () {
    this.vc = 0;
    dg( this.G + ca );
    dg( this.G + ba );
    this.xc.checked && 0 != this.Ga || ( this.Ga = this.C.width, this.Eb = this.C.height, this.wc = this.C.src );
    var a = 1,
      b = 1;
    this.C.width > this.hb && ( a = this.hb / this.C.width );
    this.C.height > this.hb && ( b = this.hb / this.C.height );
    a = Math.min( a, b );
    this.N.style.width = Math.round( this.C.width * a ) + "px";
    this.N.style.height = Math.round( this.C.height * a ) + "px";
    this.N.src = this.C.src;
    this.N.style.display = "";
    this.Db.style.display = n;
    this.ub.style.display = "";
    this.j.disabled = !0;
    this.oe && this.oe.call( {},
      this.N.src, this.wc, this.Ga, this.Eb )
  };
  r.kb = function ( a, b, c, d ) {
    a ? ( bg( this.G + ba, b ), dg( this.G + ca ) ) : ( bg( this.G + ca, b ), dg( this.G + ba ) );
    this.N.style.display = n;
    this.Db.style.display = "";
    this.ub.style.display = n;
    this.j.disabled = !1;
    this.me && this.me.call( {}, c, d )
  };
  r.mh = function () {
    if ( 2 > this.vc ) {
      this.vc++;
      var a = this.C.src;
      this.C.src = "";
      this.fb( a )
    } else this.kb( this.xc.checked, WidgetMessages.SIV_INVALID_URL, this.N.src, [] )
  };
  r.fb = function ( a ) {
    this.Xe();
    this.C.src = a
  };
  r.Xf = function ( a ) {
    a = a || window.event;
    window.event ? ( a.returnValue = !1, a.cancelBubble = !0 ) : ( a.preventDefault(), a.stopPropagation() );
    this.N.style.display = n;
    this.ub.style.display = n;
    this.Db.style.display = "";
    this.j.disabled = !1;
    this.$a.value = "";
    this.Ne();
    this.Sc = !0;
    this.ne && this.ne.call( {} )
  };
  r.Hg = function () {
    this.xc.checked = "true";
    this.$a.value = "";
    this.Xe();
    this.$g();
    this.Rd = !0;
    try {
      this.D.submit()
    } catch ( a ) {
      this.kb( !0, WidgetMessages.SIV_INVALID_URL, this.D.value, [] )
    }
    this.Zg()
  };
  r.jc = function () {
    var a = this.xd.document.result;
    if ( a )
      if ( a.hasErrors ) 0 < a.errors.length ? this.kb( !0, a.errors[ 0 ].message, this.j.value, a.errors ) : this.kb( !0, WidgetMessages.SIV_INVALID_URL, this.j.value, a.errors );
      else {
        var b = Math.max( a.origWidth, a.origHeight ),
          c = this.be();
        0 != this.Ga && -1 != c && b > c ? ( b = c / b, this.Ga = Math.round( a.origWidth * b ), this.Eb = Math.round( a.origHeight * b ) ) : ( this.Ga = a.origWidth, this.Eb = a.origHeight );
        this.wc = a.mainSrc;
        this.fb( a.thumbSrc )
      }
    else this.kb( !0, WidgetMessages.SIV_INVALID_URL, this.j.value,
      [] )
  };
  r.Ig = function ( a ) {
    9 != ( a || window.event ).keyCode && ( this.ee.checked = "true", null != this.Lb && ( window.clearTimeout( this.Lb ), this.Lb = null ), a = w( this.Sg, this ), this.Lb = window.setTimeout( a, 1E3 ) )
  };
  r.Sg = function () {
    if ( this.Sc || this.C.src != this.$a.value ) this.Ne(), this.fb( this.$a.value );
    this.Sc = !1
  };
  r.Ug = function ( a ) {
    this.ee.checked = !0;
    this.$a.value = a;
    this.fb( a )
  };
  r.Xe = function () {
    this.N.src = "https://resources.blogblog.com/img/icon_inprogress.gif";
    this.N.style.width = this.Jc;
    this.N.style.height = this.Jc;
    this.N.style.display = "";
    this.Db.style.display = n;
    this.ub.style.display = n
  };
  r.$g = function () {
    if ( !this.D ) {
      this.D = document.createElement( "form" );
      this.D.action = "imageUpload.do";
      this.D.method = "POST";
      this.D.target = this.xd.name;
      this.D.encoding = "multipart/form-data";
      this.D.style.display = n;
      if ( this.Bd ) {
        var a = Uc( document, aa );
        a.type = qa;
        a.name = "blogID";
        a.value = this.Bd;
        this.D.appendChild( a )
      }
      a = Uc( document, aa );
      a.type = qa;
      a.name = Da;
      a.id = Da;
      this.D.appendChild( a );
      a = Uc( document, aa );
      a.type = qa;
      a.name = "security_token";
      a.value = this.Fh;
      this.D.appendChild( a );
      document.body.appendChild( this.D )
    }
    a = this.be(); -
    1 == a && ( a = 1600 );
    document.getElementById( Da ).value = a;
    this.Ca = {
      parent: this.j.parentNode,
      nextSibling: this.j.nextSibling
    };
    this.j.parentNode.removeChild( this.j );
    this.D.appendChild( this.j )
  };
  r.Ih = function ( a ) {
    this.hb = a;
    this.Jc = a + "px"
  };
  r.Zg = function () {
    this.D.removeChild( this.j );
    this.Ca && this.Ca.nextSibling ? this.Ca.parent.insertBefore( this.j, this.Ca.nextSibling ) : this.Ca.parent.appendChild( this.j )
  };
  r.Ne = function () {
    var a = Uc( document, aa );
    a.type = "file";
    a.name = this.j.name;
    a.id = this.j.id;
    a.onchange = this.j.onchange;
    var b = this.j.nextSibling;
    null == b ? this.j.parentNode.appendChild( a ) : this.j.parentNode.insertBefore( a, b );
    this.j.parentNode.removeChild( this.j );
    this.j = a
  };
  r.be = function () {
    return -1 == this.Se && this.pe ? this.pe() : this.Se
  };
  var Z = function () {
    this.gd = {}
  };
  Z.prototype.$f = function ( a, b, c, d, f, g, k, l ) {
    this.gd[ a ] = new Y( a, b, eval( c ), eval( d ), eval( f ), g, eval( k ), l );
    return this.gd[ a ]
  };
  Z.prototype.ae = function ( a ) {
    return this.gd[ a ]
  };
  Z.prototype.jc = function ( a ) {
    ( a = this.ae( a ) ) && a.Rd && a.jc()
  };
  x( "_UploadSimpleImage", new Z );
  Z.prototype._createUsiContainer = Z.prototype.$f;
  Z.prototype._getUsiContainer = Z.prototype.ae;
  Z.prototype._channelResultArrived = Z.prototype.jc;
  Y.prototype._changeImage = Y.prototype.Xf;
  Y.prototype._imgUrlFileOnChange = Y.prototype.Hg;
  Y.prototype._imgUrlTextOnKeyUp = Y.prototype.Ig;
  Y.prototype._loadInitialUrl = Y.prototype.Ug;
  Y.prototype._loadImageFromUrl = Y.prototype.fb;
  Y.prototype._setPreviewSize = Y.prototype.Ih;
} ).call( this );

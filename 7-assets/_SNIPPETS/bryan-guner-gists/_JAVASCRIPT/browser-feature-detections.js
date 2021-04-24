/* Centralized function for browser feature detection
		- User agent string detection is only used when no good alternative is possible
		- Is executed directly for optimal performance
	*/
ua = (() => {
  const w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF;
  const u = nav.userAgent.toLowerCase();
  const p = nav.platform.toLowerCase();
  const windows = p ? /win/.test( p ) : /win/.test( u );
  const mac = p ? /mac/.test( p ) : /mac/.test( u );

  const // returns either the webkit version or false if not webkit
  webkit = /webkit/.test( u ) ? parseFloat( u.replace( /^.*webkit\/(\d+(\.\d+)?).*$/, "$1" ) ) : false;

  let // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
  ie = !+"\v1";

  let playerVersion = [ 0, 0, 0 ];
  let d = null;
  if ( typeof nav.plugins != UNDEF && typeof nav.plugins[ SHOCKWAVE_FLASH ] == OBJECT ) {
    d = nav.plugins[ SHOCKWAVE_FLASH ].description;
    if ( d && !( typeof nav.mimeTypes != UNDEF && nav.mimeTypes[ FLASH_MIME_TYPE ] && !nav.mimeTypes[ FLASH_MIME_TYPE ].enabledPlugin ) ) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
      plugin = true;
      ie = false; // cascaded feature detection for Internet Explorer
      d = d.replace( /^.*\s+(\S+\s+\S+$)/, "$1" );
      playerVersion[ 0 ] = parseInt( d.replace( /^(.*)\..*$/, "$1" ), 10 );
      playerVersion[ 1 ] = parseInt( d.replace( /^.*\.(.*)\s.*$/, "$1" ), 10 );
      playerVersion[ 2 ] = /[a-zA-Z]/.test( d ) ? parseInt( d.replace( /^.*[a-zA-Z]+(.*)$/, "$1" ), 10 ) : 0;
    }
  } else if ( typeof win.ActiveXObject != UNDEF ) {
    try {
      const a = new ActiveXObject( SHOCKWAVE_FLASH_AX );
      if ( a ) { // a will return null when ActiveX is disabled
        d = a.GetVariable( "$version" );
        if ( d ) {
          ie = true; // cascaded feature detection for Internet Explorer
          d = d.split( " " )[ 1 ].split( "," );
          playerVersion = [ parseInt( d[ 0 ], 10 ), parseInt( d[ 1 ], 10 ), parseInt( d[ 2 ], 10 ) ];
        }
      }
    } catch ( e ) {}
  }
  return {
    w3: w3cdom,
    pv: playerVersion,
    wk: webkit,
    ie: ie,
    win: windows,
    mac: mac
  };
})(),

  /* Cross-browser onDomLoad
  	- Will fire an event as soon as the DOM of a web page is loaded
  	- Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
  	- Regular onload serves as fallback
  */
  onDomLoad = (() => {
    if ( !ua.w3 ) {
      return;
    }
    if ( ( typeof doc.readyState != UNDEF && doc.readyState == "complete" ) || ( typeof doc.readyState == UNDEF && ( doc.getElementsByTagName( "body" )[ 0 ] || doc.body ) ) ) { // function is fired after onload, e.g. when script is inserted dynamically 
      callDomLoadFunctions();
    }
    if ( !isDomLoaded ) {
      if ( typeof doc.addEventListener != UNDEF ) {
        doc.addEventListener( "DOMContentLoaded", callDomLoadFunctions, false );
      }
      if ( ua.ie && ua.win ) {
        doc.attachEvent( ON_READY_STATE_CHANGE, function(...args) {
          if ( doc.readyState == "complete" ) {
            doc.detachEvent( ON_READY_STATE_CHANGE, args.callee );
            callDomLoadFunctions();
          }
        } );
        if ( win == top ) { // if not inside an iframe
          ( function(...args) {
            if ( isDomLoaded ) {
              return;
            }
            try {
              doc.documentElement.doScroll( "left" );
            } catch ( e ) {
              setTimeout( args.callee, 0 );
              return;
            }
            callDomLoadFunctions();
          } )();
        }
      }
      if ( ua.wk ) {
        ( function(...args) {
          if ( isDomLoaded ) {
            return;
          }
          if ( !/loaded|complete/.test( doc.readyState ) ) {
            setTimeout( args.callee, 0 );
            return;
          }
          callDomLoadFunctions();
        } )();
      }
      addLoadEvent( callDomLoadFunctions );
    }
  })();

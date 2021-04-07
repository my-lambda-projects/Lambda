( window[ "canvasWebpackJsonp" ] = window[ "canvasWebpackJsonp" ] || [] ).push( [
  [ 737 ], {
    "8yYZ": function ( s, a, n ) {
      "use strict"
      n.r( a )
      var c = n( "ouhR" )
      var o = n.n( c )
      o()( () => Object.keys( ENV.badge_counts ).forEach( s => {
        const a = ENV.badge_counts[ s ]
        if ( a > 0 ) {
          "submissions" === s && ( s = "grades" )
          const n = o()( "<b/>" ).text( a ).addClass( "nav-badge" )
          o()( "#section-tabs ." + s ).append( n )
        }
      } ) )
    }
  }
] )

//# sourceMappingURL=737-c-7d643a67b8.js.map

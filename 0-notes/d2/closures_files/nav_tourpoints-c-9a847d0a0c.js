( window[ "canvasWebpackJsonp" ] = window[ "canvasWebpackJsonp" ] || [] ).push( [
  [ 555 ], {
    wNRn: function ( n, e, s ) {
      "use strict"
      s.r( e )
      var t = s( "An8g" )
      var a = s( "q1tI" )
      var r = s.n( a )
      var c = s( "i8i4" )
      var o = s.n( c )
      var u = s( "3lLS" )
      var i = s.n( u )
      const l = r.a.lazy( () => Promise.all( [ s.e( 1 ), s.e( 624 ) ] ).then( s.bind( null, "mTPw" ) ) )
      i()( () => {
        var n, e
        const s = window.ENV.current_user_roles || []
        const a = window.ENV.current_user_types || []
        const c = []
        a.includes( "Account Admin" ) && c.push( "admin" );
        ( s.includes( "teacher" ) || null !== ( n = window.ENV.COURSE ) && void 0 !== n && n.is_instructor ) && c.push( "teacher" );
        ( s.includes( "student" ) || null !== ( e = window.ENV.COURSE ) && void 0 !== e && e.is_student ) && c.push( "student" )
        const u = document.getElementById( "global_nav_tour" )
        u && c.length > 0 && o.a.render( Object( t[ "a" ] )( r.a.Suspense, {
          fallback: null
        }, void 0, Object( t[ "a" ] )( l, {
          roles: c
        } ) ), u )
      } )
    }
  }
] )

//# sourceMappingURL=nav_tourpoints-c-9a847d0a0c.js.map

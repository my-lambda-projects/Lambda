
      function _earlyClick( e ) {
        var c = e.target
        while ( c && c.ownerDocument ) {
          if ( c.getAttribute( 'href' ) == '#' || c.getAttribute( 'data-method' ) ) {
            e.preventDefault()
              ( _earlyClick.clicks = _earlyClick.clicks || [] ).push( c )
            break
          }
          c = c.parentNode
        }
      }
      document.addEventListener( 'click', _earlyClick )

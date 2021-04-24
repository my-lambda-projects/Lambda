var keypress = require( 'keypress' );

// make `process.stdin` begin emitting "keypress" events
keypress( process.stdin );

// listen for the "keypress" event
process.stdin.on( 'keypress', function ( ch, key ) {
  // console.log('got "keypress"', key);

  if ( key && key.name == 'right' ) {
    console.log( 'right' )
  }

  if ( key && key.name == 'left' ) {
    console.log( 'left' )
  }

  if ( key && key.name == 'up' ) {
    console.log( 'up' )
  }

  if ( key && key.name == 'down' ) {
    console.log( 'down' )
  }

  if ( key && key.ctrl && key.name == 'c' ) {
    process.stdin.pause();
  }
} );

process.stdin.setRawMode( true );
process.stdin.resume();

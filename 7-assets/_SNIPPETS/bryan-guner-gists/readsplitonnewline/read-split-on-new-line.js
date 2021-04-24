// change-some-file.js
const fs = require( "fs" );

fs.readFile( "poetry.txt", "utf8", ( err, data ) => {
  if ( err ) {
    console.log( err );
  }

  let lines = data.split( "\n" );
  console.log( "THE CONTENTS ARE:" );
  console.log( lines );
  console.log( "The third line is " + lines[ 2 ] );
} );

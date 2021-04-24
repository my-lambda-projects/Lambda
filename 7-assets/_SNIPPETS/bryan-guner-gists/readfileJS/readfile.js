// change-some-file.js
const fs = require( "fs" );

fs.readFile( "poetry.txt", "utf8", ( err, data ) => {
  if ( err ) {
    console.log( err );
  }
  console.log( "THE CONTENTS ARE:" );
  console.log( data );
} );

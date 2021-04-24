const fs = require( "fs" );

fs.readFile( "poetry.txt", "utf8", ( err, data ) => {
  if ( err ) {
    console.log( err );
  }

  let newData = data.split( "do not" ).join( "should" );

  fs.writeFile( "poetry.txt", newData, "utf8", err => {
    if ( err ) {
      console.log( err );
    }

    console.log( "done!" );
  } );
} );

const fs = require( "fs" );

function replaceContents( file, oldStr, newStr ) {
  fs.readFile( file, "utf8", ( err, data ) => {
    if ( err ) {
      console.log( err );
    }
    let newData = data.split( oldStr ).join( newStr );
    writeContents( file, newData );
  } );
}

function writeContents( file, data ) {
  fs.writeFile( file, data, "utf8", err => {
    if ( err ) {
      console.log( err );
    }
    console.log( "done!" );
  } );
}

replaceContents( "poetry.txt", "do not", "should" );

// change-some-file.js

import fs from "fs";

fs.writeFile( "foo.txt", "Hello world!", "utf8", err => {
  if ( err ) {
    console.log( err );
  }
  console.log( "write is complete" );
} );

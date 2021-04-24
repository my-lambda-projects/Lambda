import fs from 'fs';

fs.mkdir( './newdir', err => {
      if ( err ) {
        console.error( err )
    return
  }

  console.log( 'directory created' )
  } )

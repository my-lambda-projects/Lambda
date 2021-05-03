/*Simple Function to flatten an array into a single layer */
const f
atten = ( array ) =>


  array.reduce(



    ( accum, el
 ) => {
      return accum.concat( Array.isArray( ele ) ? flatten( ele ) : ele );
    },
    []
    );          

'use-strict';
/* eslint no-console: 0 */

/******************************************************************************
 * Transcribed during lecture
 * added zero handling
 * added ...args version
 ******************************************************************************/


const nextElement = ( n, set ) => {
  if ( n === 1 ) {
    console.log( set );
  } else {
    for ( let i = 0; i < n - 1; i++ ) {
      nextElement( n - 1, set );
      if ( n % 2 === 0 ) {
        let x = set[ i ];
        set[ i ] = set[ n - 1 ];
        set[ n - 1 ] = x;
      } else {
        let x = set[ 0 ];
        set[ 0 ] = set[ n - 1 ];
        set[ n - 1 ] = x;
      }
    }
    nextElement( n - 1, set );
  }
};

// const countSet = (set) => {
//   if (set.length === 0) {
//     return console.log('Gimme some stuff, bruh!');
//   }
//   let array = [];
//   set.forEach((each) => {
//     array.push(each);
//   });
//   nextElement(array.length, array);
// };
//
// countSet([]);
// countSet(['Scooby Snacks']);
// countSet([1, 2, 3]);
// countSet(['a', 'b', 'c', 'd']);
// countSet(['corn', 'turkey', 'winter', 'algebra', 'window']);
// countSet(['Jesh', 'does', 'not', 'share', 'candy']);

const countSet = ( ...set ) => {
  if ( set.length === 0 ) {
    return console.log( 'Gimme some stuff, bruh!' );
  }
  let array = [];
  set.forEach( ( each ) => {
    array.push( each );
  } );
  nextElement( array.length, array );
};

// countSet();
// countSet('Scooby Snacks');
// countSet(1, 2, 3);
countSet( 0, 1, 2, 3 );
// countSet('a', 'b', 'c', 'd');
// countSet('corn', 'turkey', 'winter', 'algebra', 'window');
// countSet('Jesh', 'does', 'not', 'share', 'candy');

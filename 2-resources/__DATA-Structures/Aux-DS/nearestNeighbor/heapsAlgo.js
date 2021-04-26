/******************************************************************************
 * Travelling Salesman: Nearest Neighbor
 * Heap's Algorithm
 *
 *
 ******************************************************************************/
'use-strict';
/* eslint no-console: 0 */
const cities = require( './cities' );
const Cities = cities.Cities;
const distance = require( './distance' );
const distanceBetween = distance.distanceBetween;
let max = Number.MAX_VALUE;
let count = 0;

const nextElement = ( n, set ) => {
  if ( n === 1 ) {
    count++;
    console.log( `${JSON.stringify(count).padStart(2)}.) Set: ${set}` );
    let distance = 0;
    for ( let i = 0; i < set.length; i++ ) {
      if ( i === set.length - 1 ) {
        distance += distanceBetween( Cities[ set[ i ] ], Cities[ set[ 0 ] ] );
      } else {
        distance += distanceBetween( Cities[ set[ i ] ], Cities[ set[ i + 1 ] ] );
      }
    }
    if ( distance < max ) {
      console.log( `${JSON.stringify(count).padStart(2)}.) The TOTAL distance from ${Cities[set[0]].name} to ${Cities[set[1]].name} to ${Cities[set[2]].name} to ${Cities[set[3]].name} and back = ${distance.toFixed(2)}` );
      max = distance;
    }
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

const countSet = ( set ) => {
  let array = [];
  set.forEach( ( each ) => {
    array.push( each );
  } );
  nextElement( array.length, array );
};

module.exports = {
  countSet,
};

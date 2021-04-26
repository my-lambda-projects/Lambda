/******************************************************************************
 * Travelling Salesman: Exhaustive Search, 4 Cities
 * Heap's Algorithm
 * Now with Round-Trip Distance check
 * NOTE: Only works is Heap's algo fed an array or nums from 0 to n
 * e.g. 4 cities requires [0, 1, 2, 3]
 * i.e. array of numbers corresponds to Cities indexes
 * console.log()s optimized for FOUR cities
 * TODO: refactor console.logging for any number of cities
 ******************************************************************************/
'use-strict';
/* eslint no-console: 0 */
const cities = require( './cities' );
const Cities = cities.Cities;

const distance = require( './distance' );
const distanceBetween = distance.distanceBetween;

let max = Number.MAX_VALUE;
// console.log('max JS value:', max);

let count = 0;

const nextElement = ( n, set ) => {
  if ( n === 1 ) {
    // console.log('set', set);
    /* TODO: Call an outside function to compute distance on this set - DONE√ */
    let distance = 0;
    for ( let i = 0; i < set.length; i++ ) {
      /* if at last array index, distance back to first ***********************/
      if ( i === set.length - 1 ) {
        distance += distanceBetween( Cities[ set[ i ] ], Cities[ set[ 0 ] ] );
        // console.log('between:', Cities[set[i]].name, '&', Cities[set[0]].name, 'is', distanceBetween(Cities[set[i]], Cities[set[0]]), 'miles');
        // console.log('distance now:', distance);
        // console.log('last', set[i], 'first', set[0]);
        /* distance between index & index + 1 ***********************************/
      } else {
        distance += distanceBetween( Cities[ set[ i ] ], Cities[ set[ i + 1 ] ] );
        // console.log('between:', Cities[set[i]].name, '&', Cities[set[i + 1]].name, 'is', distanceBetween(Cities[set[i]], Cities[set[i + 1]]), 'miles');
        // console.log('distance now:', distance);
        // console.log('first', set[i], 'second', set[i + 1]);
      }
    }
    count++;
    // console.log(`${count}.)The TOTAL distance from ${Cities[set[0]].name} to ${Cities[set[1]].name} to ${Cities[set[2]].name} to ${Cities[set[3]].name} and back = ${distance.toFixed(2)}`.padStart(94));
    // let first = distanceBetween(Cities[set[0]], Cities[set[1]]);
    // let second = distanceBetween(Cities[set[1]], Cities[set[2]]);
    // let third = distanceBetween(Cities[set[2]], Cities[set[3]]);
    // let fourth = distanceBetween(Cities[set[3]], Cities[set[0]]);
    // console.log(`    ${(first + second + third + fourth).toFixed(2)} = ${first} + ${second} + ${third} + ${fourth}`);
    if ( distance <= max ) {
      console.log( `${count}.)The TOTAL distance from ${Cities[set[0]].name} to ${Cities[set[1]].name} to ${Cities[set[2]].name} to ${Cities[set[3]].name} and back = ${distance.toFixed(2)}`.padStart( 94 ) );
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

// countSet([1,2,3]);
// countSet(['a','b','c','d']);
// countSet(['corn','turkey','winter','algebra','window', 'kevin']);
// console.log(countSet([0, 1, 2, 3]));

module.exports = {
  countSet,
};

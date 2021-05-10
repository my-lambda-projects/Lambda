/* cc24 rotatedArray

 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))

 1) presuming a sorted & offset array
 2) search for the first index pair (arr[n] and arr[n+1]) where arr[n] > arr[n+1]
 3) arr[n] is the high value of the range
 4) arr[n+1] is the low value of the range
 5) query integer is outside range, return null
 5) index position of arr[n+1] is the offset where [n+1] minus offset = 0
 6) not sure how to quickly return the index...
*/

/* eslint no-console: 0 */

const rotatedArraySearch = ( arr, queryNum ) => {
  const len = arr.length;
  let i, high, low, highIndex, lowIndex;
  // search for the first pair where arr[n] > arr[n+1]
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[ i ] > arr[ i + 1 ] ) {
      [ high, low, highIndex, lowIndex ] = [ arr[ i ], arr[ i + 1 ], i, i + 1 ];
    }
  };
  console.log( arr, queryNum )
  console.log( `HI value: ${high}, is at index: ${highIndex}` )
  console.log( `LO value: ${low}, is at index: ${lowIndex}` )
  console.log( `TOTAL number of array elements: ${len}` );
  if ( !( queryNum >= low && high >= queryNum ) ) {
    console.log( null );
    console.log( '\n' );
  } else {
    if ( ( len - queryNum ) <= lowIndex ) {
      console.log( `${arr[lowIndex - (len - queryNum)]}\n` );
      return arr[ lowIndex - ( len - queryNum ) ];
    } else {
      console.log( `${arr[lowIndex + queryNum]}\n` );
      return arr[ len - queryNum ];
    };
  };
};

// // TEST SUITE
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], -1);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 0);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 3);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 4);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 6);
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 7);

rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 1 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 2 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 3 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 4 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 5 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 6 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 7 );
rotatedArraySearch( [ 4, 5, 6, 7, 2, 3 ], 8 );

/* cc23 selectionSort
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = ( arr ) => {
  const sorted = Array.from( arr );
  let minIndex, i, j;
  for ( i = 0; i < sorted.length; i++ ) {
    minIndex = i;
    for ( j = i; j < sorted.length; j++ ) {
      if ( sorted[ j ] < sorted[ minIndex ] ) {
        minIndex = j;
      }
    }
    [ sorted[ i ], sorted[ minIndex ] ] = [ sorted[ minIndex ], sorted[ i ] ];
  }
  return sorted;
};


// TEST SUITE
console.log( selectionSort( [ 9, 7, 8, 5, 6, 4, 5, 2, 3, 1 ] ) );

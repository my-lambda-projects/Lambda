/* cc56 mergeSort https://repl.it/student/submissions/1746465
Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting algorithm works.
Sort an array of integers using the merge sort algorithm.
First divide the list into its smallest unit (arrays with a single item in them)
Then compare each element with the adjacent list and combine them in the proper order.
Repeat until the entire array is sorted.
Example:
 - Input: [1, 6, 3, 2, 4, 7]
 - Expected Output: [1, 2, 3, 4, 6, 7];
[1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
[1, 6, 3][2, 4, 7]
[1][6, 3][2][4, 7]
[1][6][3][2][4][7]
[1, 3][6][2][4][7]
[1, 3][6][2, 4][7]
[1, 3, 6][2, 4][7]
[1, 3, 6][2, 4, 7]
[1, 2, 3, 4, 6, 7]
*/

function mergeSort( arr ) {
  // any array of length > 1 is already "sorted"
  if ( arr.length < 2 )
    // BASE CASE
    return arr;
  // split point for the array (odd v even)
  const middle = Math.floor( arr.length / 2 );
  // samesies:
  // const middle = parseInt(arr.length / 2);
  console.log( 'middle index: ', middle );
  // SPLIT
  const left = arr.slice( 0, middle );
  const right = arr.slice( middle, arr.length );
  console.log( 'L/R: ', left, right );
  // merge the recursive splitting
  return merge( mergeSort( left ), mergeSort( right ) );
}

function merge( left, right ) {
  const result = [];
  // Compare two arrays when both arrays are length > 0
  while ( left.length && right.length ) {
    if ( left[ 0 ] <= right[ 0 ] ) {
      result.push( left.shift() );
    } else {
      result.push( right.shift() );
    }
  }
  // When one of the two lists is empty shift the
  // 0 index value of the non-empty array to result
  while ( left.length )
    result.push( left.shift() );
  while ( right.length )
    result.push( right.shift() );
  console.log( 'Result: ', result );
  return result;
}

/* eslint no-console: 0 */
// TEST SUITE
console.log( mergeSort( [ 1, 6, 3, 2, 4, 7 ] ) );
// ~~~> [1, 2, 3, 4, 6, 7] EVEN # of terms
console.log( mergeSort( [ 5, 1, 6, 3, 2, 4, 7 ] ) );
// ~~~> [1, 2, 3, 4, 5, 6, 7] ODD # of terms

/* cc40 commonElements https://repl.it/student/submissions/1472701
Write a function called commonElements that has parameters for two arrays.
Return an array of all items that are present in both arrays.
Do not modify the arrays that are passed in.

Input Example:
[1, 2, 3, 4] [3, 4, 5, 6]
['a', 'b', 'c'] ['x', 'y', 'z', 'a']
[1, 2, 3] [4, 5, 6]

Output Example:
[3, 4]
['a']
[]
*/

function commonElements( arr1, arr2 ) {
  const common = [];
  let i;
  const len = arr1.length;
  for ( i = 0; i < len; i++ ) {
    arr2.forEach( ( item ) => {
      if ( arr1[ i ] === item ) {
        common.push( item );
      }
    } );
  }
  // edge case of duplicates
  const unique = Array.from( new Set( common ) );
  return unique;
  // return common;
}

/* eslint no-console: 0 */
// TEST SUITE
console.log( commonElements( [ 1, 2, 3, 4 ], [ 3, 4, 5, 6 ] ) ); // ~~~> [3, 4]
console.log( commonElements( [ 'a', 'b', 'c' ], [ 'x', 'y', 'z', 'a' ] ) ); // ~~~> ['a']
console.log( commonElements( [ 1, 2, 3 ], [ 4, 5, 6 ] ) ); // ~~~> []

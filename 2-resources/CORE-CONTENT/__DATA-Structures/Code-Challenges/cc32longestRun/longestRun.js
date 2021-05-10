/* cc32 longestRun
INPUT: string
FUNCTION: longest run of any identical character
OUTPUT: array containing start and end indices of longest run
        (first if more than one, [ 0, 0 ] if none)
*/

const longestRun = ( str ) => {
  let current = [ 0, 0 ];
  let longest = [ 0, 0 ];
  let i = 1;
  const len = str.length;

  for ( i; i < len; i++ ) {
    if ( str[ i - 1 ] === str[ i ] ) {
      current[ 1 ] = i;
      if ( current[ 1 ] - current[ 0 ] > longest[ 1 ] - longest[ 0 ] ) {
        longest = current;
      }
    } else current = [ i, i ];
  }
  return longest;
};


// const longestRun = (str) => {
//   const len = str.length;
//   let count = 0;
//   let highestCount = 0;
//   let i = 0;
//   let startIndex;
//   let endIndex;
//   let result = [ startIndex, endIndex ];
//   for (i; i < len; i++) {
//     if (str[i] !== str[i + 1]) {
//       count = 0;
//     } else if (str[i] === str[i + 1] && count === 0) {
//       startIndex = i;
//       count++;
//     } else if (str[i] === str[i + 1]) {
//       count++;
//     } else if (str[i] !== str[i + 1] && count !== 0) {
//       endIndex = i;
//       if (count > highestCount) {
//         [ count, highestCount ] = [ 0, count ];
//         result = [ startIndex, endIndex ];
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return result;
// };

// TEST SUITE
console.log( longestRun( 'aaaaaabbbcc' ) ); // ~~~> [ 0, 5 ]
console.log( longestRun( 'abbbcc' ) ); // ~~~> [ 1, 3 ]
console.log( longestRun( 'mississippi' ) ); // ~~~> [ 2, 3 ]
console.log( longestRun( 'abcdefgh' ) ); // ~~~> [ 0, 0 ]
console.log( longestRun( 'aabbbcccc' ) ); // ~~~> [ 5, 8 ]














/*
 * Write a function that, given a string, finds the longest run of
 * identical characters and returns an array containing the start
 * and end indices of that run.
 * If there are two runs of equal length, return the first one.
 * Return [0,0] for no runs.
 * Examples:
 * Input: "abbbcc"	Output: [ 1, 3 ]
 * Input: "mississippi" Output: [ 2, 3 ]
 * Input: "abcdefgh" Output: [ 0, 0 ]
 * Input: "aabbbcccc" Output: [ 5, 8 ]
 */

/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
 **/

// // version 1: indexOf (gets the job done, but misses the point entirely)
// const binarySearch = (nums, target) => {
//   return nums.indexOf(target);
// };

// version 2: Divide and Conquer √

// I: A SORTED array (low to high) of integers AND a target number
// O: the array index of the target
//  we are presuming the array actually contains target

/* FUNCTION:
 * We know the target is at one of the array indexes. Take the average of min & max range, divide by half
 * If target number at that index, return index #
 * Is the value at that index   less  than the target? Then increase the minimum to the guess index position + 1
 * Is the value at that index greater than the target? Then decrease the maximum to the guess index position - 1
 */

const binarySearch = ( nums, target ) => {
  if ( nums.length < 1 ) return "Error001: empty array";
  if ( nums.indexOf( target ) === -1 ) return "Error002: target number not in array";
  let min = 0;
  let max = nums.length - 1;
  let guess;
  while ( min <= max ) {
    guess = Math.floor( ( min + max ) / 2 );
    if ( nums[ guess ] === target ) {
      return guess
    } else if ( nums[ guess ] < target ) {
      min = guess + 1
    } else {
      max = guess - 1
    }
  }
};

// // TEST SUITE
console.log( `\nErr Test: ${binarySearch([], 20)}\n` ); // ---> Error001
console.log( `Err Test: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)}\n` ); // ---> Error002
console.log( `Test #1: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)}\n` );
console.log( `Test #2: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)}\n` );
console.log( `Test #3: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)}\n` );
console.log( `Test #4: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)}\n` );
console.log( `Test #5: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)}\n` );
console.log( `Test #6: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)}\n` );
console.log( `Test #7: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)}\n` );
console.log( `Test #8: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)}\n` );
console.log( `Test #9: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)}\n` );
console.log( `Test #10:${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)}\n` );
console.log( `Err Test:${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)}\n` ); // ---> Error002

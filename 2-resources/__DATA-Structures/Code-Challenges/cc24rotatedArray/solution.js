/*
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
 */
/* eslint no-console: 0 */

const rotatedArraySearch = ( arr, number ) => {
  /*// low = 0
    // high = arr.length - 1
    //  while low <= high
      // create middle to be initialized to avg of low + high
      // check if arr[middle] === number, if so, return middle
      // if array[low] <= array[middle]
        // if array[low] <= number && number < array[middle]
          // set high to middle - 1
        // else low = middle + 1
      // else
        // if arr[middle] < number && number <= array[high]
          // low = mid + 1;
        // else high = middle - 1
    // return null; */
  let low = 0;
  let high = arr.length - 1;
  while ( low <= high ) {
    const mid = Math.floor( ( low + high ) / 2 );
    if ( arr[ mid ] === number ) return mid;
    if ( arr[ low ] <= arr[ mid ] ) {
      if ( arr[ low ] <= number && number < arr[ mid ] ) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if ( arr[ mid ] < number && number <= arr[ high ] ) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return null;
};

console.log( rotatedArraySearch( [ 4, 5, 6, 0, 1, 2, 3 ], 2 ) ); // === 5;

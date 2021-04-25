/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]

const insertionSort = ( array ) => {
  // Your code goes here. Feel free to add helper functions if needed.
  for ( let i = 1; i < array.length; i++ ) {
    let temp = array[ i ];
    let j;
    for ( j = i - 1; j >= 0 && array[ j ] > temp; j-- ) {
      array[ j + 1 ] = array[ j ];
    }
    array[ j + 1 ] = temp;
  }
  return array;
};

const val = insertionSort( [ 2, 1, 3, 7, 4, 2, 9, 3, 8 ] );
// yields [1, 2, 2, 3, 3, 4, 7, 8, 9]
console.log( val );

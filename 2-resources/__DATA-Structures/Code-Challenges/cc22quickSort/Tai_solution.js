// http://me.dt.in.th/page/Quicksort/

/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */

const quickSort = ( arr ) => {
  // base case for recursion, if array.length is <= 1, return arr
  // create lessthan array
  // create gr8rthan array
  // find a pivot
  // for loop, sorting if arr[i] is > || <= pivot
  // create answer array = []
  // return answerArray.concat(quicksort of lessthan, pivot, quicksort of greaterthan)
  if ( arr.length <= 1 ) return arr;

  const lessThan = [];
  const greaterThan = [];
  const pivot = arr.splice( Math.floor( Math.random() * arr.length - 1 ), 1 );
  console.log( pivot );
  for ( let i = arr.length - 1; i >= 0; i-- ) {
    if ( arr[ i ] < pivot ) {
      lessThan.push( arr[ i ] );
    } else {
      greaterThan.push( arr[ i ] );
    }
  }

  const c = [];
  return c.concat( quickSort( lessThan ), pivot, quickSort( greaterThan ) );
};

console.log( quickSort( [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ) );

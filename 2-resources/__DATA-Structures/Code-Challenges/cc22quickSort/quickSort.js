// cc22 quickSort
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = ( nums ) => {
  // BASE CASE
  if ( nums.length < 2 ) {
    return nums;
  } /* v */
  const pivot = nums[ 0 ],
    lessThan = [],
    greaterThan = [];
  /* v */
  for ( let i = 1; i < nums.length; i++ ) {
    if ( nums[ i ] < pivot ) {
      lessThan.push( nums[ i ] );
    } else greaterThan.push( nums[ i ] );
  };
  // Binary tree recursion? BigO((n^2)^2)
  return quickSort( lessThan ).concat( pivot, quickSort( greaterThan ) );
};


// TEST SUITE

// const x = [1,2,3],
//       y = 4
//       z = [5,6,7];
// console.log(x.concat(y, z)); // ~~~> [ 1, 2, 3, 4, 5, 6, 7 ]

console.log( quickSort( [ 9, 8, 7, 555, 632, 345, 4, 3, 2, 1 ] ) );
console.log( quickSort( [ 4, 6, 5, 3, 2 ] ) );

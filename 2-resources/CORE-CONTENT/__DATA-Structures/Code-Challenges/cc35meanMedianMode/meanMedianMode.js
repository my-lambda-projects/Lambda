/* cc35 meanMedianMode
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const meanMedianMode = ( arr ) => {
  // MEAN
  // sum of nums in arr of nums
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const numOfNums = arr.length;
  // let i   = 0,
  //     sum = 0;
  // for (i; i < numOfNums; i++) {
  //   sum += arr[i];
  // }
  // console.log(sum);
  // const mean = sum / numOfNums;
  // return mean;
  // console.log(mean);
  const total = arr.reduce( ( accumulation, currentIndexValue ) => accumulation + currentIndexValue, 0 );
  const mean = total / numOfNums;

  // MEDIAN
  // https://www.mathsisfun.com/definitions/median.html
  // of sorted arr of nums, middle term
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // if even number of terms, average of two middle terms
  // if odd, middle term
  const median = ( arr ) => {
    const array = arr;
    array.sort( ( a, b ) => a - b );
    console.log( array );
    if ( numOfNums % 2 === 0 ) {
      return ( array[ numOfNums / 2 - 1 ] + array[ numOfNums / 2 ] ) / 2;
    }
    return array[ Math.floor( numOfNums / 2 ) ];
  }

  // MODE
  // item in array which appears the most times
  // const mode =
  return [ `Number of numbers:${numOfNums}, Total: ${total}, Mean: ${mean}, Median: ${median(arr)}` ];
  // return [`Number of numbers:${numOfNums}, Total: ${total}, Mean: ${mean}, Median: ${median}, Mode: ${mode}.`];
  // return { mean, median, mode };
};

// TEST SUITE
console.log( meanMedianMode( [ 0, 1, 2, 3, 4, 5 ] ) );
console.log( meanMedianMode( [ 10, -11, 12, -13, 14, -15 ] ) );
console.log( meanMedianMode( [ 8, 24, 9, 32, 1, 11 ] ) );
console.log( meanMedianMode( [ 13, 23, 11, 16, 15, 10, 26 ] ) );

// cc35 meanMedianMode
// https://repl.it/K3ka/4

/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const array = [ 3, 4, 4, 6, 12, 3, 4, 5, 13 ];

const findMMM = ( arr ) => {
  // create three variables mean, median mode.
  let mean = {};
  let median = {};
  let mode = {};
  // create an object to store mean, median and mode
  let MMM = {};
  // initialize a sorted version of our given array.
  const sortedArr = arr.sort( ( a, b ) => {
    return a - b;
  } );
  console.log( "sorted", sortedArr );
  // create a findMean func, to find the mean
  const findMean = ( newArr ) => {
    let newMean = 0;
    // loop over our given array, addUp all values
    newArr.forEach( ( num ) => {
      newMean += num;
    } );
    // divide by length of array.
    newMean = newMean / newArr.length;
    return Math.round( newMean );
  }

  const findMedian = ( arr ) => {
    const evenMedian = [];
    let middle = Math.floor( arr.length / 2 );
    if ( arr.length % 2 === 0 ) {
      // take middle two nums and add them to evenMedian
      evenMedian.push( arr[ middle ], array[ middle - 1 ] );
      return findMean( evenMedian );
    }
    return arr[ middle ];
  }

  const findMode = ( newArr ) => {
    const mapping = {};
    let count = 0;
    let mode;
    newArr.forEach( ( num ) => {
      mapping[ num ] = ( mapping[ num ] || 0 ) + 1;
      if ( count < mapping[ num ] ) {
        count = mapping[ num ];
        mode = num;
      }
    } );
    return mode;
  }
  mean = findMean( arr );
  median = findMedian( sortedArr );
  mode = findMode( sortedArr );
  MMM.mean = mean;
  MMM.median = median;
  MMM.mode = mode;
  return MMM;
}

console.log( findMMM( array ) );

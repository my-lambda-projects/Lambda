const bubbleSort = ( arr ) => {
  let swappedValue;
  do {
    swappedValue = false;
    for ( let i = 0; i < arr.length; i++ ) {
      console.log( arr );
      if ( arr[ i ] > arr[ i + 1 ] ) { // [2, 1, 3]
        let temp = arr[ i ]; // temp = 2
        arr[ i ] = arr[ i + 1 ]; // [1, 1, 3] temp = 2;
        arr[ i + 1 ] = temp; // [1, 2, 3];
        swappedValue = true;
      }
    }
  } while ( swappedValue );
  return arr;
};

console.log( bubbleSort( [ 5, 6, 7, 3, 2, 1 ] ) ); // returns [1, 2, 3]

// https://repl.it/student/assignments/458240/model_solution?fromSubmissionId=1746465
// https://youtu.be/oMlOBuyazv4

function mergeSort( arr ) {
  if ( arr.length < 2 ) return arr;
  const mid = Math.floor( arr.length / 2 ); //2
  const leftArray = arr.slice( 0, mid ); //[3, 2]
  const rightArray = arr.slice( mid ); //[1, 0, -1]

  const merge = ( leftArray, rightArray ) => {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while ( leftIndex < leftArray.length && rightIndex < rightArray.length ) {
      if ( leftArray[ leftIndex ] < rightArray[ rightIndex ] ) {
        mergedArray.push( leftArray[ leftIndex ] );
        leftIndex++;
        continue;
      }
      mergedArray.push( rightArray[ rightIndex ] );
      rightIndex++;
    }
    return mergedArray.concat( leftArray.slice( leftIndex ) ).concat( rightArray.slice( rightIndex ) );
  };

  return merge( mergeSort( leftArray ), mergeSort( rightArray ) );
}


// Ryan's soloosh
function mergeSort( arr ) { // [3, 2],  [1, 0, -1]
  // base case if length of arr < 2; return;
  // break arr into halves Left & Right;
  // Lsorted = mergeSort ()
  if ( arr.length < 2 ) return arr;
  const mid = Math.floor( arr.length / 2 );
  const leftArray = arr.slice( 0, mid );
  const rightArray = arr.slice( mid );

  const merge = ( leftArray, rightArray ) => {
    const mergedArray = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while ( leftPointer < leftArray.length && rightPointer < rightArray.length ) {

      if ( leftArray[ leftPointer ] < rightArray[ rightPointer ] ) {
        mergedArray.push( leftArray[ leftPointer ] );
        leftPointer++;
        continue;
      }
      mergedArray.push( rightArray[ rightPointer ] );
      rightPointer++;
    }

    return mergedArray
      .concat( leftArray.slice( leftPointer ) )
      .concat( rightArray.slice( rightPointer ) );
  };

  return merge( mergeSort( leftArray ), mergeSort( rightArray ) );
}

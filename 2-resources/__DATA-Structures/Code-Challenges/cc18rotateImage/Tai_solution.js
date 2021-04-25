// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateImage = ( arr ) => {
  const len = arr.length;
  for ( let i = 0; i < len / 2; i++ ) {
    for ( let j = i; j < len - i - 1; j++ ) {
      let bucket = arr[ i ][ j ];
      arr[ i ][ j ] = arr[ j ][ len - i - 1 ];
      arr[ j ][ len - i - 1 ] = arr[ len - i - 1 ][ len - j - 1 ];
      arr[ len - i - 1 ][ len - j - 1 ] = arr[ len - j - 1 ][ i ];
      arr[ len - j - 1 ][ i ] = bucket;
    }
  }
  return arr;
};

const image = [
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 0, 1, 2 ],
  [ 3, 4, 5, 6 ],
];
console.log( ' ' );
console.log( rotateImage( image ) );
console.log( rotateImage( image ) );
console.log( rotateImage( image ) );
console.log( rotateImage( image ) );
// create a holding variable
// using two for loops

// [[4, 8, 2, 6],
//  [3, 7, 1, 5],
//  [2, 6, 0, 4],
//  [1, 5, 9, 3]]

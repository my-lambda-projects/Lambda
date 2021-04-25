// cc18 rotateImage

// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

// for each row (array), take the column (index) and put each
// corresponding index value in an array, so row 1-9 col (index) 0 become an array,
// then row1-9 col (index) 1 and so on.


// this seems to only work for square matrixes
// no idea how I'd do it in place
const rotateImage = ( arr ) => {
  const len = arr.length;
  rotation = Array( len ).fill().map( () => [] );
  for ( let col = 0; col < len; col++ ) {
    for ( let row = len - 1; row >= 0; row-- ) {
      rotation[ col ].push( arr[ row ][ col ] );
    }
  }
  return rotation;
}


// 10x10 array
// console.log(rotateImage([
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//   [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// ]
// ));

// 4x4 array
console.log( rotateImage( [
  [ 0, 1, 2, 3 ],
  [ 4, 5, 6, 7 ],
  [ 8, 9, 0, 1 ],
  [ 2, 3, 4, 5 ]
] ) );

[
  [ 2, 8, 4, 0 ],
  [ 3, 9, 5, 1 ],
  [ 4, 0, 6, 2 ],
  [ 5, 1, 7, 3 ]
]

[
  [ 2, 8, 4, 0 ],
  [ 3, 9, 5, 1 ],
  [ 4, 0, 6, 2 ],
  [ 5, 1, 7, 3 ]
]


// Not quite
const rotateImageInPlace = ( arr ) => {
  const len = arr.length;
  // rotation = Array(len).fill().map(()=> []);
  for ( let col = 0; col < len; col++ ) {
    for ( let row = 0; row < len; row++ ) {
      arr[ col ].push( arr[ row ][ col ] );
    }
  }
  return arr;
}

// 4x4 array
// console.log(rotateImageInPlace([
//   [ 0, 1, 2, 3 ],
//   [ 0, 1, 2, 3 ],
//   [ 0, 1, 2, 3 ],
//   [ 0, 1, 2, 3 ]
// ]
// ));

/*
INPUT: (9x9 image matrix)
const exampleImageArray = [
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
]

FUNCTION: 90 degree clockwise rotation

OUTPUT:
[
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
  [ 4, 4, 4, 4, 4, 4, 4, 4, 4 ],
  [ 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
  [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
  [ 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
  [ 8, 8, 8, 8, 8, 8, 8, 8, 8 ],
  [ 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
]

*/

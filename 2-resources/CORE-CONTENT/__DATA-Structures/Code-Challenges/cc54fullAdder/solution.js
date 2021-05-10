// https://youtu.be/9Rqk8aV8-SU
// https://piazza.com/class/j63w1pdyopf7kj?cid=59
// http://isweb.redwoods.edu/instruct/calderwoodd/diglogic/full.htm
// http://www.electronics-tutorials.ws/combination/comb_7.html

function NAND( x, y ) {
  return ( !x || !y );
}

function XOR( x, y ) {
  return ( NAND( NAND( x, NAND( x, y ) ), NAND( y, NAND( x, y ) ) ) );
}

function AND( x, y ) {
  return ( NAND( NAND( x, y ), NAND( x, y ) ) );
}

function OR( x, y ) {
  return ( NAND( NAND( x, x ), NAND( y, y ) ) );
}

function halfAdder( x, y ) {
  const sum = XOR( x, y );
  const carry = AND( x, y );
  return [ sum, carry ];
}

function fullAdder( x, y, c = false ) {
  const first = halfAdder( x, y );
  const second = halfAdder( first[ 0 ], c );
  const carry = OR( first[ 1 ], second[ 1 ] );
  return [ second[ 0 ], carry ];
}

function fullAdder4( x, y ) {
  const fourth = fullAdder( x[ 3 ], y[ 3 ] );
  const third = fullAdder( x[ 2 ], y[ 2 ], fourth[ 1 ] );
  const second = fullAdder( x[ 1 ], y[ 1 ], third[ 1 ] );
  const first = fullAdder( x[ 0 ], y[ 0 ], second[ 1 ] );
  return [ first[ 1 ], first[ 0 ], second[ 0 ], third[ 0 ], fourth[ 0 ] ];
}

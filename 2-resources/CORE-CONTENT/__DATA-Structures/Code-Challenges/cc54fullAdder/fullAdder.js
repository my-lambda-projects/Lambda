/* cc54 fullAdder https://repl.it/student/submissions/1721915
Construct a four bit full adder.
You must use the provided NAND function to create any other logic gates
you require to make a 4 bit full adder.
x and y will come in array format where [true, true, true, true] === 1111 === 15.
The expected return is an array with length 5.

Each index in the array is just a wire that can be on or off.
That will be represented by boolean true or false.

I suggest writing a halfAdder first, then fullAdder,
but you will only be tested on the fullAdder4.

Check this resource for more information:

http://www.electronics-tutorials.ws/combination/comb_7.html
*/

let sum = 0;
let carry = 0;

function NAND( x, y ) {
  return ( !x || !y );
}

// NOT = NAND(a, a) - test this

function XOR( a, b ) {
  // if (x === y) return 0;
  // return 1;
  return NAND( NAND( NAND( a, b ), a ), NAND( NAND( a, b ), b ) );
}

function halfAdder( a, b ) {
  sum = XOR( a, b );
  carry = !NAND( a, b );
  return [ sum, carry ];
}

// Full adder is two half adders with OR gate
// sum of 1st half adder goes into 2nd halfadder "a"
// carry in goes into 2nd half adder "b"
function fullAdder( a, b, carryIn = 0 ) {
  const halfAdd1 = halfAdder( a, b );
  const halfAdd2 = halfAdder( halfAdd1, carryIn );
  // const carry = OR(first[1], second[1]);
  const carry = halfAdd1[ 1 ] || halfAdd2[ 1 ];
  return [ halfAdd2[ 0 ], carry ];
}

function fullAdder4( a, b ) {

}

/* eslint no-console: 0 */
// TEST SUITE
console.log( halfAdder( true, true ) ); // ~~~> [ false, true ]
console.log( halfAdder( true, false ) ); // ~~~> [ true, false ]
console.log( halfAdder( false, true ) ); // ~~~> [ true, false ]
console.log( halfAdder( false, false ) ); // ~~~> [ false, false ]

console.log( fullAdder( true, true ) ); // ~~~> [ true, true ]
console.log( fullAdder( true, false ) ); // ~~~> [ true, false ]
console.log( fullAdder( false, true ) ); // ~~~> [ true, false ]
console.log( fullAdder( false, false ) ); // ~~~> [ true, false ]

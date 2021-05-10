/* cc19 logicGates
 * For this coding challenge you will be recreating low level logic gates.
 * You will first create the NAND function and then you will create
 * NOT, OR, AND, and XOR all using the NAND function that you created.
 * Implement NAND however you would like and then use NAND to implement the
 * other logic gates.
 * See the link below for the truth tables for these logic gates.
 * https://en.wikipedia.org/wiki/NAND_logic#NAND
 * All functions should return a 1 for true and a 0 for false.
 */

/* TODO:
  1. refactor with ternary operator
  2. complete each with NAND
*/

// phi AND psi
// (T && T) ---> T
// (T && F) ---> F
// (F && T) ---> F
// (F && F) ---> F
//
// NOT (phi AND psi) operator
// !(T && T) ---> F
// !(T && F) ---> T
// !(F && T) ---> T
// !(F && F) ---> T
const NAND = ( x, y ) => {
  // You can use whatever JS operators that you would like: &&, ||, !
  if ( !( x && y ) ) {
    return 1;
  }
  return 0;
};
console.log( 'NAND' );
console.log( NAND( true, true ) ); // ---> 0
console.log( NAND( true, false ) ); // ---> 1
console.log( NAND( false, true ) ); // ---> 1
console.log( NAND( false, false ) ); // ---> 1


// Not operator
// !T ---> F
// !F ---> T
const NOT = ( n ) => {
  // Do not use !, &&, or ||
  return ( NAND( n, n ) );
};
console.log( 'NOT' )
console.log( NOT( true ) ); // ---> 0
console.log( NOT( false ) ); // ---> 1

// phi AND psi
// T && T ---> T
// T && F ---> F
// F && T ---> F
// F && F ---> F
const AND = ( x, y ) => {
  // Do not use &&, ||, or !
  // You can use any of the functions that you have already written
  if ( NAND( x, y ) ) {
    return 0;
  }
  return 1;
};
console.log( 'AND' );
console.log( AND( true, true ) ); // ---> 1
console.log( AND( true, false ) ); // ---> 0
console.log( AND( false, true ) ); // ---> 0
console.log( AND( false, false ) ); // ---> 0


// INclusive OR: phi OR psi
// T || T ---> T
// T || F ---> T
// F || T ---> T
// F || F ---> F
const OR = ( x, y ) => {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  if ( x ) return 1;
  if ( y ) return 1;
  return 0;
};
console.log( 'OR' );
console.log( OR( true, true ) ); // ---> 1
console.log( OR( true, false ) ); // ---> 1
console.log( OR( false, true ) ); // ---> 1
console.log( OR( false, false ) ); // ---> 0


// EXclusive OR: phi XOR psi
// T XOR T ---> F
// T XOR F ---> T
// F XOR T ---> T
// F XOR F ---> F
const XOR = ( x, y ) => {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  if ( x === y ) return 0;
  return 1;
};
console.log( 'XOR' );
console.log( XOR( true, true ) ); // ---> 0
console.log( XOR( true, false ) ); // ---> 1
console.log( XOR( false, true ) ); // ---> 1
console.log( XOR( false, false ) ); // ---> 0

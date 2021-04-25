// phi NAND psi
// T !&& T ---> F
// T !&& F ---> T
// F !&& T ---> T
// F !&& F ---> T
function NAND( x, y ) {
  // You can use whatever JS operators that you would like: &&, ||, !
  if ( !( x && y ) ) {
    return 1;
  }
  return 0;
}
console.log( 'NAND' );
console.log( NAND( true, true ) ); // ---> 0
console.log( NAND( true, false ) ); // ---> 1
console.log( NAND( false, true ) ); // ---> 1
console.log( NAND( false, false ) ); // ---> 1

// Not operator
// !T ---> F
// !F ---> T
function NOT( n ) {
  // Do not use !, &&, or ||
  return ( NAND( n, n ) );
}
console.log( 'NOT' )
console.log( NOT( true ) ); // ---> 0
console.log( NOT( false ) ); // ---> 1

// phi AND psi
// T && T ---> T
// T && F ---> F
// F && T ---> F
// F && F ---> F
function AND( x, y ) {
  // Do not use &&, ||, or !
  // You can use any of the functions that you have already written
  if ( NAND( x, y ) ) {
    return 0;
  }
  return 1;
}
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
function OR( x, y ) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  if ( x ) return 1;
  if ( y ) return 1;
  return 0;
}
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
function XOR( x, y ) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  if ( x === y ) return 0;
  return 1;
}
console.log( 'XOR' );
console.log( XOR( true, true ) ); // ---> 0
console.log( XOR( true, false ) ); // ---> 1
console.log( XOR( false, true ) ); // ---> 1
console.log( XOR( false, false ) ); // ---> 0



///////////

// Logic Gates using NAND
function NAND( x, y ) {
  return !( x && y ) ? 1 : 0;
}
// function NAND(0, 0) {
//   return !(not true && not true) ? 1 : 0;  // ---—> 1/True.
// }
/********************/
function NOT( n ) {
  return NAND( n, n );
}
// function NOT(0) {
//   return NAND(0, 0); // ---—> 1/True.
// }
/********************/
function AND( x, y ) {
  return NAND( NAND( x, y ), NAND( x, y ) );
}
// function AND(1, 1) {
//   return NAND(NAND(1, 1), NAND(1, 1));
//   NAND(0, 0)); // ---—> True
// }
/********************/
function OR( x, y ) {
  return NAND( NAND( x, x ), NAND( y, y ) );
}
// function OR(1, 0) {
//   return NAND(NAND(1, 1), NAND(0, 0));
//   NAND(0, 1) // ---—> True;
// }
/********************/
function XOR( x, y ) {
  return NAND( NAND( x, NAND( x, y ) ), NAND( NAND( x, y ), y ) );
}
// function XOR(1, 0) {
//   return NAND(NAND(1, NAND(1, 0)), NAND(NAND(1, 0),0));
//          NAND(NAND(1, 1), NAND(1, 0));
//          NAND(0, 1); // ---—> True
// }


///////// Model solution

function NAND( x, y ) {
  return ( ( !x || !y ) ? 1 : 0 );
}

function NOT( n ) {
  return ( NAND( n, n ) );
}

function AND( x, y ) {
  return ( NAND( NAND( x, y ), NAND( x, y ) ) );
}

function OR( x, y ) {
  return ( NAND( NAND( x, x ), NAND( y, y ) ) );
}

function XOR( x, y ) {
  return ( NAND( NAND( x, NAND( x, y ) ), NAND( y, NAND( x, y ) ) ) );
}

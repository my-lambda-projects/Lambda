/* cc49 romanNumeralEncoder https://repl.it/student/submissions/1581604
Define a function that takes in a positive integer, and returns the Roman Numeral representation of that number.

Symbol    Value
 I          1
 V          5
 X          10
 L          50
 C          100
 D          500
 M          1,000

Example: romanNumeralize(1990) should return 'MCMXC'.
*/

const rome = [
  [ 1000, 'M' ],
  [ 900, 'CM' ],
  [ 500, 'D' ],
  [ 400, 'CD' ],
  [ 100, 'C' ],
  [ 90, 'XC' ],
  [ 50, 'L' ],
  [ 40, 'XL' ],
  [ 10, 'X' ],
  [ 9, 'IX' ],
  [ 5, 'V' ],
  [ 4, 'IV' ],
  [ 1, 'I' ]
];

function romanNumeralize( number ) {
  if ( number === 0 ) {
    return '';
  }
  for ( let i = 0; i < rome.length; i++ ) {
    if ( number >= rome[ i ][ 0 ] ) {
      return rome[ i ][ 1 ] + romanNumeralize( number - rome[ i ][ 0 ] );
    }
  }
}

/* eslint no-console: 0 */
// TEST SUITE
console.log( romanNumeralize( 0 ) ); // ~~~> ''
console.log( romanNumeralize( 1 ) ); // ~~~> I
console.log( romanNumeralize( 2 ) ); // ~~~> II
console.log( romanNumeralize( 3 ) ); // ~~~> III
console.log( romanNumeralize( 4 ) ); // ~~~> IV
console.log( romanNumeralize( 9 ) ); // ~~~> IX
console.log( romanNumeralize( 17 ) ); // ~~~> XVII
console.log( romanNumeralize( 49 ) ); // ~~~> XLIX
console.log( romanNumeralize( 51 ) ); // ~~~> LI
console.log( romanNumeralize( 99 ) ); // ~~~> XCIX
console.log( romanNumeralize( 101 ) ); // ~~~> CI
console.log( romanNumeralize( 499 ) ); // ~~~> CDXCIX
console.log( romanNumeralize( 501 ) ); // ~~~> DI
console.log( romanNumeralize( 1990 ) ); // ~~~> MCMXC
console.log( romanNumeralize( 1999 ) ); // ~~~> MCMXCIX

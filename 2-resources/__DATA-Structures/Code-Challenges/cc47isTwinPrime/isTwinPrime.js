/* cc47 isTwinPrime https://repl.it/student/submissions/1559885
A twin prime is a prime number that differs from another prime number by two.
Write a function called isTwinPrime which takes an integer and returns true
if it is a twin prime, or false if it is not.

Example:
5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true.
9 is not a prime, and so does not need checking, so it returns false.
7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, which is a prime, so it returns true.
*/

function isPrime( num ) {
  if ( num < 2 ) return false;
  for ( let i = 2; i <= Math.sqrt( num ); i++ ) {
    if ( num % i === 0 && i !== num ) {
      return false;
    }
  }
  return true;
}

function isTwinPrime( n ) {
  if ( n === 2 ) return false;
  if ( !isPrime( n ) ) return false;
  const lowerTwin = n + 2;
  const higherTwin = n - 2;
  if ( isPrime( lowerTwin ) || isPrime( higherTwin ) ) return true;
}


// THIS FAILS ON 23 - RETURNS UNDEFINED. WHY????????????????????????????????????


/* eslint no-console: 0 */
// TEST SUITE
console.log( isPrime( 0 ) ); //      ~~~> false
console.log( isPrime( 2 ) ); //      ~~~> true
console.log( isPrime( 4 ) ); //      ~~~> false
console.log( isPrime( 104728 ) ); // ~~~> false
console.log( isPrime( 104729 ) ); // ~~~> true
console.log( isPrime( 5 ) ); //      ~~~> true
console.log( isPrime( 7 ) ); //      ~~~> true
console.log( isPrime( 9 ) ); //      ~~~> false
console.log( '\n' );
console.log( isTwinPrime( 2 ) ); //  ~~~> false
console.log( isTwinPrime( 5 ) ); //  ~~~> true
console.log( isTwinPrime( 7 ) ); //  ~~~> true
console.log( isTwinPrime( 9 ) ); //  ~~~> false

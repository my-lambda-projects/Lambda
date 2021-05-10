/* c53 primeReduction https://repl.it/student/submissions/1695186
Consider the prime number 23.
If we sum the square of its digits we get: 2^2 + 3^2 = 13,
then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.
Similarly, if we start with prime number 7,
the sequence is: 7-> 49-> 97-> 130-> 10-> 1.
Given a range, how many primes within that range have this property?
*/

function primeReduction( min, max ) {
  // primes
  function isPrime( num ) {
    if ( num < 2 ) return false;
    for ( let i = 2; i <= Math.sqrt( num ); i++ ) {
      if ( num % i === 0 && i !== num ) {
        return false;
      }
    }
    return true;
  }
  // make range of nums from min to max if they are primes
  const rangeOfPrimes = [];
  for ( let i = min; i <= max; i++ ) {
    if ( isPrime( i ) ) {
      rangeOfPrimes.push( i );
    }
  }
  console.log( rangeOfPrimes );
  // reduction
  function reducer( num ) {
    const strNum = num.toString();
    const digArr = strNum.split( '' ).map( ( x ) => {
      return Number( x );
    } );
    let sum = 0;
    for ( let i = 0; i < digArr.length; i++ ) {
      sum += Math.pow( digArr[ i ], 2 );
    }
    return sum;
  }
  // holding pen for numbers satisfying the prime reduction condition
  const winners = [];
  // recursion
  for ( let i = 0; i < rangeOfPrimes.length; i++ ) {
    // base case
    while ( reducer( rangeOfPrimes[ i ] ) !== 1 ) {
      if ( reducer( rangeOfPrimes[ i ] ) === 1 ) {
        winners.push( rangeOfPrimes[ i ] );
      }
    }
    return winners;
  }
}

// TEST SUITE
console.log( primeReduction( 1, 100 ) );
console.log( primeReduction( 7, 23 ) );

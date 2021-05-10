// return true if num is prime.
// otherwise return false
// hint: a prime number is only evenly divisible by itself and 1
// hint2: you can solve this using a for loop
// note: 0 and 1 are NOT considered prime numbers
function isPrime( num ) {
  if ( num < 2 ) return false;

  else if ( num === 2 ) return true;
} else if ( num % 2 === 0 ) {
  return false;
} else if ( num >= 3 ) {
  for ( var i = 2; i < ( num * .5 ); i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
}
return true;
}


function isTwinPrime( n ) {
  function isPrime( num ) {
    for ( let i = 2; i <= Math.sqrt( num ); i++ ) {
      console.log( `${num} % ${i} === not zero` );
      if ( num % i === 0 ) return false;
    }
    return num >= 2;
  }
  return ( isPrime( n ) && ( isPrime( n - 2 ) || isPrime( n + 2 ) ) );
}

console.log( `the sqaure root of 119 is ${Math.sqrt(119)}` );
console.log( isTwinPrime( 119 ) );

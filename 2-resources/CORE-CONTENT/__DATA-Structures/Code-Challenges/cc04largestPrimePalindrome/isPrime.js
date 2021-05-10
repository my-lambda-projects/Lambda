// I: any integer
// O: "true" if INPUT is a prime number
const isPrime = function ( num ) {
  // return true if num is prime.
  // otherwise return false
  if ( num < 2 ) {
    return false;
  } else if ( num === 2 ) {
    return true;
  } else if ( num % 2 === 0 ) {
    return false;
  } else if ( num >= 3 ) {
    for ( var i = 2; i < Math.sqrt( num + 1 ); i++ ) { // Maybe a ceiling would work better (but slower?)?
      if ( num % i === 0 ) {
        return false;
      }
    }
  }
  return true;
}

// isPrime TEST SUITE
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
console.log( `Q: Is   0    prime? A: ${isPrime(0)}` ) // <--- false
console.log( `Q: Is   1    prime? A: ${isPrime(1)}` ) // <--- false
console.log( `Q: Is   2    prime? A: ${isPrime(2)}` ) // <--- true
console.log( `Q: Is   3    prime? A: ${isPrime(3)}` ) // <--- true
console.log( `Q: Is   4    prime? A: ${isPrime(4)}` ) // <--- false
console.log( `Q: Is   5    prime? A: ${isPrime(5)}` ) // <--- true
console.log( `Q: Is   6    prime? A: ${isPrime(6)}` ) // <--- false
console.log( `Q: Is   7    prime? A: ${isPrime(7)}` ) // <--- true
console.log( `Q: Is   8    prime? A: ${isPrime(8)}` ) // <--- false
console.log( `Q: Is   9    prime? A: ${isPrime(9)}` ) // <--- false
console.log( `Q: Is   10   prime? A: ${isPrime(10)}` ) // <--- false
console.log( `Q: Is   11   prime? A: ${isPrime(11)}` ) // <--- true
console.log( `Q: Is   12   prime? A: ${isPrime(12)}` ) // <--- false
console.log( `Q: Is   13   prime? A: ${isPrime(13)}` ) // <--- true
console.log( `Q: Is  121   prime? A: ${isPrime(121)}` ) // <--- false (11 * 11 = 121)
console.log( `Q: Is 104729 prime? A: ${isPrime(104729)}` ) // <--- true (104,729 is the 10,000th prime number!)

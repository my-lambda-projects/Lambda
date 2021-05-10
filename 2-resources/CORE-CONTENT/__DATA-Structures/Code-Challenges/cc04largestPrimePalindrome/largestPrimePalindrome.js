/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

// returns largest prime palindrome
// I: end of range from 0
// O: largest integer that is both prime and a palindrome
const largestPrimePalindrome = function ( num ) {
  const x = findPrimePals( findPrimes( num ) )
  return x[ x.length - 1 ];
}

// I: a sorted array of prime numbers, smallest to largest
// O: array of prime palindromes
const findPrimePals = function ( primeArr ) {
  // console.log(primeArr);
  const primePalsArr = []
  for ( i = 0; i < primeArr.length; i++ ) {
    if ( isPalindrome( numToStr( primeArr[ i ] ) ) ) primePalsArr.push( numToStr( primeArr[ i ] ) )
  }
  return primePalsArr;
}

// evaluates a range of natural numbers
// I: largest number in range (inclusive)
// O: an array of ALL prime #'s from range 0 thru INPUT integer
const findPrimes = function ( bigNum ) {
  const primes = [];
  // for number in range 0 thru *num
  for ( i = 0; i <= bigNum; i++ ) {
    if ( isPrime( i ) ) primes.push( i );
  }
  return primes;
}

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

// I: any string NOTE: does NOT handle integers
// O: "true" if INPUT is a palindrome
function isPalindrome( str ) {
  // return true if string is a palindrome.
  // otherwise return false
  for ( let i = 0; i < str.length / 2; i++ ) { // <--- make sure divided by 2 handles odd and even length (floor vs. ceiling)
    if ( str[ i ] === str[ str.length - 1 - i ] ) {
      return true;
    } else {
      return false;
    }
  }
}

// I: a NUMBER
// O: a STRING
const numToStr = function ( num ) {
  return `${num}`;
}

// // isPalindrome() TEST SUITE
// console.log(`Q: Is 'palindrome' a palindrome?            A: ${isPalindrome('palindrome')}`) // <-- false
// console.log(`Q: Is ' ' a palindrome?                     A: ${isPalindrome(' ')}`) // <-- true
// console.log(`Q: Is 'a' a palindrome?                     A: ${isPalindrome('a')}`) // <-- true
// console.log(`Q: Is 'bb' a palindrome?                    A: ${isPalindrome('bb')}`) // <-- true
// console.log(`Q: Is 'cdc' a palindrome?                   A: ${isPalindrome('cdc')}`) // <-- true
// console.log(`Q: Is 'amanaplanacanalpanama' a palindrome? A: ${isPalindrome('amanaplanacanalpanama')}`) // <-- true
// console.log(`Q: Is an integer a palindrome?              A: ${isPalindrome(5)}`) // <-- undefined

// // numToStr() test
// console.log(numToStr(5)); // <--- '5'
// console.log(typeof numToStr(5)); // <--- string
// console.log(`Q: Is the integer converted to a string?    A: ${isPalindrome(numToStr(5))}`) // <-- true

// // isPrime TEST SUITE
// // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
// console.log(`Q: Is   0    prime? A: ${isPrime(0)}`)     // <--- false
// console.log(`Q: Is   1    prime? A: ${isPrime(1)}`)     // <--- false
// console.log(`Q: Is   2    prime? A: ${isPrime(2)}`)     // <--- true
// console.log(`Q: Is   3    prime? A: ${isPrime(3)}`)     // <--- true
// console.log(`Q: Is   4    prime? A: ${isPrime(4)}`)     // <--- false
// console.log(`Q: Is   5    prime? A: ${isPrime(5)}`)     // <--- true
// console.log(`Q: Is   6    prime? A: ${isPrime(6)}`)     // <--- false
// console.log(`Q: Is   7    prime? A: ${isPrime(7)}`)     // <--- true
// console.log(`Q: Is   8    prime? A: ${isPrime(8)}`)     // <--- false
// console.log(`Q: Is   9    prime? A: ${isPrime(9)}`)     // <--- false
// console.log(`Q: Is   10   prime? A: ${isPrime(10)}`)    // <--- false
// console.log(`Q: Is   11   prime? A: ${isPrime(11)}`)    // <--- true
// console.log(`Q: Is   12   prime? A: ${isPrime(12)}`)    // <--- false
// console.log(`Q: Is   13   prime? A: ${isPrime(13)}`)    // <--- true
// console.log(`Q: Is  121   prime? A: ${isPrime(121)}`)   // <--- false (11 * 11 = 121)
// console.log(`Q: Is 104729 prime? A: ${isPrime(104729)}`)// <--- true (104,729 is the 10,000th prime number!)

// // findPrimes TEST SUITE
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127]
// console.log(`Q: what are the primes from 0 to 127?\nA: ${findPrimes(127)}`);
// // console.log(`Q: what are the primes from 0 to 121?\nA: ${findPrimes(104729)}`); // <--- 10,000 prime numbers!!!!
// console.log(`Q: How many prime numbers between zero and 104,729?\nA: ${findPrimes(104729).length}`);

// // findPrimePals TEST SUITE
// // [11, 101, ...]
// console.log(`Q: Is findPrimePals(findPrimes(127)) an instance of an array?\nA: ${findPrimePals(findPrimes(127)) instanceof Array}`); // <--- true
// console.log(`Q: what are the prime palindromes from 0 to 127?\nA: ${findPrimePals(findPrimes(127))}`); // <--- 2,3,5,7,11,101
// console.log(`Q: what are the prime palindromes from 0 to 1000?\nA: ${findPrimePals(findPrimes(1000))}`); // <--- 2,3,5,7,11,101,131,151,181,191,313,353,373,383,727,757,787,797,919,929

// largestPrimePalindrome TEST SUITE
console.log( `Q: What is the largest prime palindrome less than 1000?\nA: ${largestPrimePalindrome(1000)}` );

// THIS COULD< OF COURSE< BE SIGNIFICANTLY REFACTORED...

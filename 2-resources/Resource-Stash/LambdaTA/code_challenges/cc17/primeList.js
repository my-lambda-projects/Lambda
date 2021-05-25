/*
 * Write a function that generates a list of all prime numbers in a specified range (inclusive).
 * If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia.
 */

// Model solution
function primeList(start, end) {
  const primes = [];
  const upperLimit = Math.sqrt(end);
  const output = [];

  for (let i = 0; i <= end; i++) {
    primes.push(true);
  }
  // console.log(`Range of numbers from ${start - 1} to ${end}:\n${primes}\n`);

  for (let i = 2; i <= upperLimit; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= end; j += i) {
        // console.log(i);
        primes[j] = false;
      }
    }
  }
  // console.log(`Array of primes:\n${primes}\n`);

  for (let i = 2; i <= end; i++) {
    if (primes[i] && i >= start) output.push(i);
  }

  return output;
}

// // Easier to read:
// function primeList(start, end) {
//   const primes = [];
//
//   function checkPrime(number) {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) return false;
//     }
//     return number >= 2;
//   }
//
//   for (let i = start; i <= end; i++) {
//     if (checkPrime(i)) primes.push(i);
//   }
//
//   return primes;
// }

// // Satish Solution:
// function primeList(start, end) {
//   const primes = [];
//   const upperLimit = Math.sqrt(end);
//   const output = [];
//
//   for(let  i = 0; i <= end ; i++) {
//     primes.push(true);
//   }
//
//   // console.log(primes);
//
//   for( let i = 2; i <= upperLimit; i++) {
//     if(primes[i]) {
//       for(j = i * i; j <= end; j = j + i) {
//         primes[j] = false;
//       }
//     }
//   }
//
//   //console.log(primes);
//   for(let i = 2; i <= end; i++) {
//     if(primes[i] && i >= start) {
//       output.push(i);
//     }
//   }
//
//   return output;
// }
//
// console.log(primeList(2,66758))

// TEST SUITE
console.log(primeList(-9, 10));  // doesn't handle negatives!
console.log(primeList(1, 10));   // [ 2, 3, 5, 7 ]
console.log(primeList(1, 50));   // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
console.log(primeList(50, 100)); // [ 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]

// INVOKE THE VOODOO
// primeList(1, 10);

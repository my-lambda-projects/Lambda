/* cc31 fizzBuzzTesting
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write automated tests to test this function.
 * The main focus of this challenge is the testing aspect of it.
 */

const fizzBuzz = ( num ) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if ( num % 3 === 0 && num % 5 === 0 ) {
    return 'fizzbuzz';
  } else if ( num % 5 === 0 ) {
    return 'buzz';
  } else if ( num % 3 === 0 ) {
    return 'fizz';
  }
  return num;
};

// // TEST SUITE:
// /* eslint no-console: 0 */
// console.log(fizzBuzz(6));  // ~~~> 'fizz'
// console.log(fizzBuzz(10)); // ~~~> 'buzz'
// console.log(fizzBuzz(15)); // ~~~> 'fizzbuzz'
// console.log(fizzBuzz(44)); // ~~~> '44'

module.exports = {
  fizzBuzz
};

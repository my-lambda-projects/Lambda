/* cc42 collatzSequence https://repl.it/student/submissions/1498763
Given a positive integer number, the Collatz conjecture determines
the next term in the sequence by either
1) Halving n if n is even
2) Multiplying n by 3 and then adding one if n is odd

Write a function that will take a number n, and return the Collatz chain. You will stop at one.

An example chain looks like this:

[23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1] (Bold signifies odd numbers).
*/

// edge cases (non-positive integer, non-integer, non-number)
// either odd or even
// even: divide by half, repeat until n === 1
// odd: (n * 3) + 1, until n === 1

function collatzSequence( n ) {
  const arr = [];
  arr.push( n );
  const collatz = ( num, array ) => {
    // BASE CASE
    if ( num === 1 ) {
      return array;
    } else if ( num % 2 === 0 ) {
      num /= 2;
      array.push( num );
      return collatz( num, array );
    }
    num = ( num * 3 ) + 1;
    array.push( num );
    return collatz( num, array );
  };
  collatz( n, arr );
  return arr;
}

// TEST SUITE
/* eslint no-console: 0 */
console.log( collatzSequence( 23 ) );
// <~~~ [23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]

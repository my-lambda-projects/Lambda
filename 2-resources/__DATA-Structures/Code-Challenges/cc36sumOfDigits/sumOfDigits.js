/* cc36 sumOfDigits - https://repl.it/student/submissions/1448448
Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.
Assume all numbers will be positive.

Input Sample:
23
496

Output Sample:
5
19
*/

// function sumOfDigits (num) {
//   const integers = ('' + num).split('');
//   const len = integers.length;
//   // console.log(integers);
//   let i = 0,
//     sum = 0;
//   for (i; i<len; i++) {
//     sum += Number(integers[i]);
//     // console.log(sum);
//   }
//   return sum;
// }

function sumOfDigits( num ) {
  const stringIntegers = ( '' + num ).split( '' );
  // console.log(`strInts.len: ${stringIntegers.length} & the strInts ${stringIntegers} are: ${typeof(stringIntegers[0])}`);
  const integers = stringIntegers.map( num => Number( num ) );
  // console.log(`integers: ${integers} are: ${typeof(integers[0])}`);
  const sum = integers.reduce( ( sum, n ) => sum + n, 0 );
  return sum;
}

/* eslint no-console: 0 */
// TEST SUITE
const x = 12345;
console.log( sumOfDigits( x ) ); // ~~~> 15
console.log( sumOfDigits( 23 ) ); // ~~~> 5
console.log( sumOfDigits( 496 ) ); // ~~~> 19
console.log( typeof ( sumOfDigits( 496 ) ) ); // ~~~> number

/* cc52 sumDigitPower https://repl.it/student/submissions/1684889
The number 135 is particularly special in that if you take each digit,
from left to right, and you put them to the consecutive power.
135 = 1^1 + 3^2 + 5^3
89 = 8^1 + 9^2

Write a function sumDigitPower that takes in a starting number,
and an ending number, and check every number in that range inclusive
(including both a and b - a will be greater than or equal to 0 and b greater than a).

return an array of all numbers within the inclusive range which are the sum of their digits.
*/

const digitIndexPower = ( num ) => {
  // does num equal sum of digits to consecutive power?
  const strNum = JSON.stringify( num );
  const digArr = strNum.split( '' ).map( ( x ) => {
    return Number( x );
  } );
  digArr.unshift( 'zero' ); // putting something at the zero index
  let sum = 0;
  for ( let i = 1; i < digArr.length; i++ ) {
    sum += Math.pow( digArr[ i ], i );
  }
  if ( sum === num ) return 'Tai gets soup!';
  return 'no soup for Tai!!!!';
};

function sumDigPower( min, max ) {
  // make range of nums from min to max
  const range = [];
  for ( let i = min; i <= max; i++ ) {
    range.push( i );
  }
  const winners = [];
  // for each num in range , check condition
  // if match push into array
  for ( let i = 0; i < range.length; i++ ) {
    if ( digitIndexPower( range[ i ] ) === 'Tai gets soup!' ) {
      winners.push( range[ i ] );
    }
  }
  return winners;
}

// TEST SUITE
/* eslint no-console: 0 */
console.log( digitIndexPower( 123 ) ); // ~~> no soup
console.log( digitIndexPower( 135 ) ); // ~~> soup
console.log( digitIndexPower( 89 ) ); // ~~> soup
console.log( sumDigPower( 1, 1000 ) ); // ~~~> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598 ] array of matching integers from 1 to 1000

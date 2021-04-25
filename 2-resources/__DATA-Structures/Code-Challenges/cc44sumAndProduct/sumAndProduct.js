/* cc44 sumAndProduct https://repl.it/student/submissions/1521337
Given a sum and a product, find two integers x and y, where x + y === sum, and x * y === product.
You will return this in an array.

For example, calling sumAndProduct(6, 9) should return [3, 3] because 3 + 3 === 6, and 3 * 3 === 9.

Please make sure to return your array such that x <= y in the format [x, y].
*/

function sumAndProduct( sum, product ) {
  const answer = [];
  if ( product === 0 ) {
    answer.push( product, sum );
    return answer;
  }
  for ( let i = 1; i < sum; i++ ) {
    if ( i * ( sum - i ) === product ) {
      answer.push( i );
      answer.push( sum - i );
      return answer;
    }
  }
  return null;
}

/* eslint no-console: 0 */
// TEST SUITE
console.log( sumAndProduct( 6, 9 ) ); // ~~~> [ 3, 3 ]
console.log( sumAndProduct( 0, 50 ) ); // ~~~> null
console.log( sumAndProduct( 50, 0 ) ); // ~~~> null

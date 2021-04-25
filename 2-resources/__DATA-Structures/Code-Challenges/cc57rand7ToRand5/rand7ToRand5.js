/* cc57 rand7ToRand5  https://repl.it/student/submissions/1752932
Given a function rand7 that generates a random number from 1 to 7,
how would you write a function that generates
a number with equal probability from 1 to 5?
*/

function rand7() {
  return 1 + Math.floor( Math.random() * 7 );
}

// // version one
function rand5() {
  const probable = rand7();
  if ( probable > 5 ) {
    return rand5();
  }
  return probable;
}

// // version two - bunk
// function rand5() {
//   return 1 + Math.floor((Math.random() * (7 / 5) * 5));
// }

// // Jesh
// function rand5() {
//   let temp = rand7() + rand7() + rand7() + rand7() + rand7();
//   temp = temp % 5 + 1;
//   return temp;
// }

/* eslint no-console: 0 */
// TEST SUITE
// console.log(rand7());
// console.log(rand5());

/* TODO:
 * the total distribution should be 1/7 the total rolls…
 * # of rolls would be greater than the total # oftests,
 * i.e. if 1 million tests, it should pan out to 1.4 million
 * rolls where 6 and 7 have the same distribution as 1-5 (all around 200k)
 */
function test5() {
  const testRuns = 1000000;
  let results = {
    ones: 0,
    twos: 0,
    thre: 0,
    four: 0,
    fivs: 0,
  };
  for ( let i = 0; i < testRuns; i++ ) {
    if ( i < testRuns ) {
      switch ( rand5() ) {
        case 1:
          results.ones += 1;
          break;
        case 2:
          results.twos += 1;
          break;
        case 3:
          results.thre += 1;
          break;
        case 4:
          results.four += 1;
          break;
        case 5:
          results.fivs += 1;
          break;
        default:
          console.log( 'you silly puppy!' );
          break;
      }
    }
  }
  return results;
}
console.log( test5() );

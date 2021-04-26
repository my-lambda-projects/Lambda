/*
 * Write a function called rockPaperScissors that will take a number n, and output all those possibilities.
 *
 * Example:
 * rockPaperScissors(1) outputs >>> [[rock],[paper],[scissors]];
 * rockPaperScissors(2) outputs >>> [
 * [rock, rock], [rock, paper], [rock, scissors],
 * [paper, rock], [paper, paper], [paper, scissors],
 * [scissors, rock], [scissors, paper], [scissors, scissors]
 * ];
 */

function rockPaperScissors(n) {
  const outcomes = [];
  const plays = ['rock', 'paper', 'scissors'];

  // inner function
  const findOutcome = (roundsLeft, resultArr) => {
    // BASE CASE
    if (roundsLeft === 0) {
     outcomes.push(resultArr);
     return;
    }
    plays.forEach((play) => {
      findOutcome(roundsLeft - 1, resultArr.concat(play));
    });
  }

  // invoke inner function with n and an empty array
  findOutcome(n, []);
  return outcomes;
}

// TEST SUITE
// Concatenation
const x = [1, 2, 3];
const y = [4, 5, 6];
const z = x.concat(y);
console.log(`The x array: ${x}`); // <--- no mutation
console.log(`The y array: ${y}`);
console.log(`The z array: ${z}`);

// forEach()
const arr = ['a', 'b', 'c'];
arr.forEach((element, i) => {
  console.log(`Array index's ${i} value is: "${element}"`);
});

// Rock, Paper, Scissors
console.log(`With one player: ${rockPaperScissors(1)}`);
// console.log('With two players:')
// console.log(rockPaperScissors(2));
// console.log(rockPaperScissors(3));

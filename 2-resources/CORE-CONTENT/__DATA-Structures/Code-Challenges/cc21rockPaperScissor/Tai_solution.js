// triple for loop vs recursion

/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissorsLoop = () => {
  // TODO: your solution here
  // we need an answer container
  // we need an array of strings r,p,s
  // we need to iterate the first part of the array ['scissors',]
  // inside the for loop, we need to iterate the second part of the array[..., 'scissors',]
  // inside the second for loop, we need to iterate the third part of the array [..., ..., 'scissors']
  // once we generate all three, then we need to push to answers
  //after forloop tango, return array
  // so when O(n^3) is written, n is arrayOfStrings.length
  const answer = [];
  const choice = [ 'rock', 'paper', 'scissors' ];
  for ( let i = 0; i < choice.length; i++ ) {
    for ( let j = 0; j < choice.length; j++ ) {
      for ( let k = 0; k < choice.length; k++ ) {
        answer.push( [ choice[ i ], choice[ j ], choice[ k ] ] );
      }
    }
  }
  return answer;
};

console.log( rockPaperScissorsLoop() );




const rockPaperScissorsRecurse = ( rounds ) => {
  const results = [];
  const choices = [ 'scissors', 'rock', 'paper' ];
  const findChoices = ( roundsLeft, roundsPlayed ) => {
    if ( roundsLeft === 0 ) {
      results.push( roundsPlayed );
      return;
    }
    for ( let i = 0; i < choices.length; i++ ) {
      const choice = choices[ i ];
      findChoices( roundsLeft - 1, roundsPlayed.concat( choice ) );
    }
  };
  findChoices( rounds, [] );

  return results;
};

console.log( rockPaperScissorsRecurse( 3 ) );

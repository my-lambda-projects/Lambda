// cc21 rockPaperScissor

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

// const rockPaperScissors = () => {
// 	// TODO: your solution here
//   // const hand = {0: 'rock',
//   //               1: 'paper',
//   //               2: 'scissor'}
//   const hand = ['rock', 'paper', 'scissor'] // hand.length = 3
//   let rounds = 3
//   const totalPossibleCombos = hand.length ** rounds // 27 ~~~> (n terms)**3
//
// };


const test = ( arr ) => {
  const result = [];

  for ( let i = 0; i < arr.length; i++ ) {
    // let firstElement = arr[i];
    let firstElement = [];
    firstElement.push( arr[ i ] );

    let restOfArray = arr.slice( i + 1, arr.length );

    for ( let sub of test( restOfArray ) ) {
      result.push( firstElement, sub );
    }
  }
  return result;
}

console.log( test( [ 'rock', 'paper', 'scissor' ] ) );

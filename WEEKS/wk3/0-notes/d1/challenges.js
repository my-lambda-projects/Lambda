// function scoreCB() {
//   return Math.floor( Math.random() * 6 );
// }
// 
// // 
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// // console.log( 'score(): ', score() );
// 
// 
// 
// function hockeyGameCB( cb ) {
//   return {
//     home: cb(),
//     away: cb(),
//   }
// }
// // scoreObj( score() );
// // console.log( scoreObj( score));
// //create a function called totalGameScore - 
// //it should take score and hockeyGame as callbacks 
// //and it should return an array with the score for each period as a 
// //string`Period #: Away: score - Home: score`
// 
// 
// function totalGameScore( scoreCB, hockeyGameCB ) {
//   for ( let i = 0; i < 2; i++ ) {
//     return `Period #: Away: ${hockeyGameCB().away()} - Home: ${hockeyGameCB().home()}`
//   }
// }

function score(){
  return Math.floor(Math.random() * Math.floor(5) + 1);
}



function hockeyGame(scorecb){
  return {
    Home: scorecb(),
    Away: scorecb()
  }
}

console.log(hockeyGame(score));

// // function declearation  // only this one is hoisted
// function add(num1, num2){
//   return num1 + num2;
// }

// // function expression 
// const add = function(num1, num2){
//   return num1 + num2;
// }

// // arrow function 
// const add = (num1, num2) => num1 + num2;

function totalGameScore(scorecb, gamecb){
  const totalGame = [];
  let homeScore = 0;
  let awayScore = 0;
  
  for(let i = 0; i < 3; i++){
    const currentScore = gamecb(scorecb);
    homeScore = homeScore + currentScore.Home
    awayScore = awayScore + currentScore.Away
    totalGame.push(`Period ${i + 1}: Away ${currentScore.Away} - Home: ${currentScore.Home}`);
  }
  return totalGame;
}

console.log(totalGameScore(score, hockeyGame));

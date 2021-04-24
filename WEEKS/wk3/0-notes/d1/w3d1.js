// Scope
// scope answers the question of where are my functions and variables available to me
// const cohort = 'Web43';
// console.log( cohort )
// const and let are not attached to the window object but var is
// global variables are defined outside of functions or blocks of code and would be available to me anywhere in my program

// functions are scoped similar to the way variable are scoped
// let study = 'HTML and CSS';
// 
// function printThree() {
//   let study = 'JavaScript';
//   return `We are studying ${study}`;
// }
// console.log( printThree() );
// console.log( study )

/*
| 12: 18: 41 | bryan @LAPTOP - 9 LGJ3JGS: [ d1 ] d1_exitstatus: 1 __________________________________________________________o >
  node w3d1.js
Web43
We are studying JavaScript
HTML and CSS
 
*/

// const dog = 'Ada'
// function callDog () {
//   console.log( dog );
//   callDog();
// }
// puppy();


//var can be redeclared and updated
/*
var
- can be redecleared 
- can be updated 
- is function scoped 

let 
- cannot be redecleared 
- can be updated
- is block scoped 

const 
- cannot be redecleared 
- cannot be updated 
- is block scoped 
*/

// if ( 1 === 1 ) {
//   var answer = true;
//} // these {} are a block of code and let and const cannot escape them

// console.log(answer);

// for ( let i = 0; i < 5; i++ ) {
//   console.log( i );
// }
// 
// 
// 
// if ( 1 === 1 ) {
//   var answer = true;
//} // these {} are a block of code and let and const cannot escape them

// console.log(answer);

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log(i);

/*using const until we can't and then let but avoid var*/

// function sayHi( name ) {
//   var hello = 'hi';
// 
//   function yell() {
//     console.log( name.toUpperCase() );
//   }
//   yell();
// }
// 
// sayHi( 'Natalie' );
// 
// // yell();
// 
// console.log( hello );



//--------------------------
// hoisting allows you to access functions and variables before the line on which they are declared.

//only function declerations and var variable declerations and hoisted.


// 
// function working() {
//   console.log( 'its working' );
// }
// 
// 
// working();
// 
// 
// 
// // when a function reaches outside of it's scope to grab a value defined in the outter scope
// 
// function game( sport ) {
//   let score = 0;
//   return function win() {
//     score++;
//     return `your ${sport} game score is ${score}`;
//   }
// }
// 
// 
// const hockeyGame = game( 'hockey' );
// console.log( hockeyGame() );
// 
// 
// // Breakout
// 
function score () {
  return Math.floor( Math.random() * 6 );
}

score()
console.log('score(): ', score());
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log('score(): ', score());
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log('score(): ', score());
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );
console.log( 'score(): ', score() );

function scoreObj( cb ) {
  return {
    home: cb(),
    away: cb(),
  }
}
// scoreObj( score() );
console.log( scoreObj( score ) );


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
getRandomIntInclusive( 1, 5 )
console.log('getRandomIntInclusive( 1, 5 ): ', getRandomIntInclusive( 1, 5 ));



// Callbacks and Higher Order Functions 
// Higher Order functions receive other functions as arguments
// callback functions are passed into higher order functions as arguments 

const kitchen = function(ing1, ing2, chef){
  return chef(ing1, ing2);
  // pizzaChef('dough', 'sauce');
  // pastaChef('dough', 'sauce');
}

const pizzaChef = function(ing1, ing2){
  return `I took ${ing1} and ${ing2} and I made you a 🍕`;
}

const pastaChef = function(ing1, ing2){
  return `I took ${ing1} and ${ing2} and I made you a 🍝`;
}

console.log(kitchen('dough', 'sauce', pizzaChef));
console.log(kitchen('dough', 'sauce', pastaChef));




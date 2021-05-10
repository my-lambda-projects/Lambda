/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

// var food = 'pineapple';
//
// var isMyFavoriteFood = function(food) {
//   food = food || 'thousand-year-old egg'; //This sets a default value if `food` is falsey
//   return food === 'thousand-year-old egg';
// };
//
// var isThisMyFavorite = isMyFavoriteFood(food);
const food = 'pineapple';

// const isMyFavoriteFood = (food = 'thousand-year-old egg') => food === 'thousand-year-old egg';
// just double checking scope of keyword "food" & lintr doesn't like
const isMyFavoriteFood = ( foodItem = 'thousand-year-old egg' ) => foodItem === 'thousand-year-old egg';
// False case
const isThisMyFavorite = isMyFavoriteFood( food );
console.log( isThisMyFavorite );
// True case
const egg = 'thousand-year-old egg';
const thisIsMyFavorite = isMyFavoriteFood( egg );
console.log( thisIsMyFavorite );

//----------------
// const, class, template literals, enhanced object literals (foo: foo, -> foo,)

// var User = function(options) {
//   this.username = options.username;
//   this.password = options.password;
//   this.sayHi = function() {
//     return this.username + ' says hello!';
//   };
// }
//
// var username = 'JavaScriptForever';
// var password = 'password';
//
// var me = new User({
//   username: username,
//   password: password,
// });

class User {
  constructor( options ) {
    this.username = options.username;
    this.password = options.password;
    this.sayHi = function () { // <--------------------------- Unexpected unnamed function
      return `${this.username} says hello!`; // <--- template literals √
    };
  }
}

const username = 'JavaScriptForever';
const password = 'password';

const me = new User( {
  username, // <--- enhanced object literals √
  password, // <--- enhanced object literals √
} );

console.log( me );

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = function ( ...args ) { // <--------------------- Unexpected unnamed function
  let sum = 0;
  for ( let i = 0; i < args.length; i++ ) {
    sum += args[ i ];
  }
  return sum;
};

const argsToCb = function ( cb ) { // <------------------------ Unexpected unnamed function
  const args = Array.prototype.slice.call( arguments ); // <--- Use the rest parameters instead of 'arguments'
  return cb.apply( null, args.splice( 1 ) ); // <---------------- Use the spread operator instead of '.apply()'
};

const result = argsToCb( addArgs, 1, 2, 3, 4, 5 ); // result should be 15

console.log( result );

/* eslint-enable */

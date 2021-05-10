/* eslint-disable */

// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

class User {
  constructor( options ) {
    // set a username and password property on the user object that is created
    this.username = options.username;
    this.password = options.password;
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
  checkPwd( compareString ) {
    return compareString === this.password;
  }
}

const me = new User( {
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple'
} );
// true case
const result = me.checkPwd( 'correcthorsebatterystaple' ); // should return `true`
console.log( result ); // ---> true
// false case
const falseResult = me.checkPwd( 'staplehorsecorrectbattery' ); // should return `false`
console.log( falseResult ); // ---> false


const checkPassword = function comparePasswords( passwordToCompare ) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  return this.password === passwordToCompare;
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
console.log( checkPassword.call( me, 'correcthorsebatterystaple' ) ); // --> true
// .apply
console.log( checkPassword.apply( me, [ 'correcthorsebatterystaple' ] ) ); // --> true
// .bind
const bindCheck = checkPassword.bind( me );
console.log( bindCheck( 'correcthorsebatterystaple' ) ); // --> true

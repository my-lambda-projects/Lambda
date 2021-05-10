/* cc37 armstrongNumbers https://repl.it/student/submissions/1454546
An Armstrong number is an n-digit number that is equal to the sum of
the n'th powers of its digits. Determine if the input numbers are
Armstrong numbers.  Return either true or false .

For example with the number 153 there are 3 digits so you would
add together the cubed values of all the digits like this:
1^3 + 5^3 + 3^3 === 153

Input Sample:

6
153
351

Output Sample:

true
true
false
*/

function isArmstrongNumber( n ) {
  // number of terms in integer => exponential value
  stringNum = String( n ); // ~~~~> also toString()
  // console.log(stringNum);
  exponent = stringNum.length;
  // console.log(exponent);
  stringNumArray = stringNum.split( '' );
  // console.log(stringNumArray);
  numArray = stringNumArray.map( ( x ) => Number( x ) );
  // console.log(numArray);
  // base case
  if ( exponent === 1 ) {
    return true;
  }
  // for each term in integer
  sumOfExponents = numArray.map( ( x ) => Math.pow( x, exponent ) ).reduce( ( sum, value ) => sum + value );
  // console.log(sumOfExponents);
  if ( n === sumOfExponents ) {
    return true;
  }
  return false;
}

// // TEST SUITE
// console.log(isArmstrongNumber(6));   // ~~~> true
// console.log(isArmstrongNumber(153)); // ~~~> true
// console.log(isArmstrongNumber(351)); // ~~~> false

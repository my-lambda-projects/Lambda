/*

Create a function that given an integer, returns an integer where every digit in the input integer is squared.

Examples:

csSquareAllDigits(9119) -> 811181 because 9^2 = 81, 1^2 = 1, 1^2 = 1, and 9^2 = 81
csSquareAllDigits(2483) -> 416649 because 2^2 = 4, 4^2 = 16, 8^2 = 64, and 3^2 = 9
[execution time limit] 4 seconds (js)

[input] integer n

[output] integer

*/
function csSquareAllDigits(n) {
  return +Array.from(n.toString(), (num) => num * num).join('');
}

// //------------------------Alternative Solution------------------------
//
// /**
//  * Returns a new number with squared digits
//  * Time complexity: O(n), space complexity: O(n)
//  * @param {Number} n an integer
//  * @returns {Number} an integer with squared digits
//  */
// const squareDigits = n => {
//     // Get an array of digits
//     const digits = n.toString().split('')
//
//     // Square each digit. Because JavaScript has
//     // automatic type coercion, it will quietly convert each string
//     // into a number to perform multiplication
//     const squaredDigits = digits.map(n => n * n)
//
//     // Join each digit together, then use the + operator
//     // to convert the string into a number
//     const squaredNumber = squaredDigits.join('')
//
//     return +squaredNumber
// }
// squareDigits(9119) // 811181
// console.log("🚀 ~ file: csSquareAllDigits.js ~ line 45 ~ squareDigits(9119)", squareDigits(9119))

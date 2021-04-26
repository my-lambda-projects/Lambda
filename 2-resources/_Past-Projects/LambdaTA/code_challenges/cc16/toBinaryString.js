/*
 * Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:
 *
 * toBinaryString(6) should return "110" (no leading 0).
 *
 * Use of the native method number.toString(2);  is disallowed.
 */

// Student solution
function toBinaryString(number) {
  let r = '';
  while (number > 0) {
    console.log(`number starts: ${number}`);
    const bit = (Math.floor(number % 2) !== 0) ? '1' : '0';
    console.log(`bit          : ${bit}`);
    r = bit + r;
    console.log(`the return is: ${r} <--- it's GROWING`);
    number = Math.floor(number / 2);
    console.log(`number is now: ${number}\n`);
    }
  console.log('COUNTING IN BINARY IS SO MUCH FUN!!!!!');
  return r;
}

// // Satish
// function toBinaryString(number) {
//   if (number === 0) return 0;
//   let res = '';
//   while (number > 0) {
//     res = (number % 2) + res;
//     number = Math.floor(number / 2);
//   }
//   return res;
// }

// // Repli.it Model Solution
// function toBinaryString(number) {
//   let r = '';
//   while(number > 0) {
//     r = number % 2 + r; // r is number remainder 0 or 1 in string
//     number >>= 1;       // number >>= 1; what does that mean
//   }
//   return r || "0";
// }

// TEST SUITE
// console.log(toBinaryString(0));  // <--- 0
// console.log(toBinaryString(1));  // <--- 1
// console.log(toBinaryString(2));  // <--- 10
// console.log(toBinaryString(3));  // <--- 11
// console.log(toBinaryString(4));  // <--- 100
// console.log(toBinaryString(5));  // <--- 101
// console.log(toBinaryString(6));  // <--- 110
// console.log(toBinaryString(7));  // <--- 111
// console.log(toBinaryString(8));  // <--- 1000
// console.log(toBinaryString(9));  // <--- 1001
// console.log(toBinaryString(10)); // <--- 1010
// console.log(toBinaryString(11)); // <--- 1011
// console.log(toBinaryString(12)); // <--- 1100
// console.log(toBinaryString(13)); // <--- 1101
// console.log(toBinaryString(14)); // <--- 1110
// console.log(toBinaryString(15)); // <--- 1111
// console.log(toBinaryString(16)); // <--- 10000

/*
For the model solution, the first four results from: https://www.google.com/search?q=bitwise+operator+javascript should be helpful
1. https://www.w3schools.com/js/js_bitwise.asp
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
3. https://www.w3resource.com/javascript/operators/bitwise-operator.php
4. https://stackoverflow.com/questions/654057/where-would-i-use-a-bitwise-operator-in-javascript
*/

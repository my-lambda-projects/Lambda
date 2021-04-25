/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

// Edge cases: multiply by zero
//             divide by zero
//             negative input numbers

const multiply = function ( a, b ) {
  const arr = new Array( b ).fill( a );
  console.log( arr );
  const product = arr.reduce( ( a, b ) => a + b );
  // const product = arr.reduce((a, b) => a + b, 0); // 0 is an initial value
  console.log( product );
  return product;
};

const divide = function ( x, y ) {
  let count = 0;
  while ( x - y >= 0 ) {
    x -= y;
    count++;
  }
  return `${count} remainder ${x}`;
};

const modulo = function ( phi, psi ) {
  let count = 0;
  while ( phi - psi >= 0 ) {
    phi -= psi;
    count++;
  }
  return phi;
};


// TEST SUITE
// multiplication
console.log( multiply( 2, 10 ) ); // ---> 20
// console.log(multiply(1, 1));    // ---> 1
// console.log(multiply(113, 17));    // ---> 1921
// console.log(multiply(21, 0));   // -->  0 BUT .reduce needs and initial value
// console.log(multiply(-21, 1));  // --> -21
// console.log(multiply(21, -1));  // --> error
// console.log(multiply(-21, -3)); // --> error

// division
console.log( divide( 121, 11 ) ); // ---> 11 remainder 0
console.log( divide( 123, 11 ) ); // ---> 11 remainder 2

// modulo
console.log( modulo( 15000, 11 ) ); // ---> 7
console.log( modulo( 123, 11 ) ); // ---> 2


// // Model solution
// function negCheck (num1, num2) {
//   const arr = [0];
//   if (num1 < 0) {
//     arr[0] += 1;
//     arr.push(0 - num1);
//   } else {
//     arr.push(num1);
//   }
//   if (num2 < 0) {
//     arr[0] += 1;
//     arr.push(0 - num2);
//   } else {
//     arr.push(num2);
//   }
//   return arr;
// }
//
// console.log(negCheck(-3, -5));
//
//
// function multiply(x, y) {
//   const arr = negCheck(x, y);
//   let answer = 0;
//   for (var i = 0; i < arr[2]; i++) {
//     answer += arr[1];
//   }
//   if (arr[0] % 2 === 1) answer = 0 - answer;
//   return answer;
// }
//
// function divide(x, y) {
//   const arr = negCheck(x, y);
//   let remainder = arr[1];
//   let answer = 0;
//   while(remainder >= arr[2]) {
//     answer += 1;
//     remainder -= arr[2];
//   }
//   if (arr[0] % 2 === 1) answer = 0 - answer;
//   return answer;
// }
//
// function modulo(x, y) {
//   const arr = negCheck(x, y);
//   let remainder = arr[1];
//   while(remainder >= arr[2]) {
//     remainder -= arr[2];
//   }
//   if (x < 0) return (0 - remainder);
//   return remainder;
// }

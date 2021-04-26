/*
 * Sum Of Digits
 * Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.
 * Assume all numbers will be positive.
 *
 * Input: 23  >>>function>>> Output: 5
 * Input: 496 >>>function>>> Output: 19
*/

// SOLUTION 1 - everyone loves for loops!
function sumOfDigits (num) {
  const integerStrings = ('' + num).split(''); // does the same thing as the next line
  // const integerStrings = String(num).split(''); // I find this reads better
  console.log(typeof(integerStrings)) // <--- 'object' (JA arrays are objects - Everything Is Objects!!!)

  const len = integerStrings.length;
  console.log(integerStrings);        // <--- should return an array of strings

  // declaring variables to be used in the for loop
  let i = 0,
    sum = 0;

  // For-Loop Love!
  for (i; i < len; i++) {
    sum += Number(integerStrings[i]); // <--- turns the strings into type: integers
    console.log(sum);                 // <--- sum of adding up all ints in the array of ints
  }

  return sum;
}

// // SOLUTION 2 - using map() and reduce()
function sumOfDigits (num) {
  const stringIntegers = String(num).split('');
  console.log(`strInts.len: ${stringIntegers.length} & the strInts ${stringIntegers} are: ${typeof(stringIntegers[0])}`);

  const integers = stringIntegers.map(num => Number(num));
  console.log(`integers: ${integers} are: ${typeof(integers[0])}`);

  const sum = integers.reduce((sum, n) => sum + n, 0);
  return sum;
}

// CS1 MODEL SOLUTION - w/dot chaining
function sumOfDigits(num) {
  const digits = (String(num)).split('')
    .map(num => parseInt(num))
    .reduce((sum, n) => sum + n);
  return digits;
}

// MODEL SOLUTION - just return it!
function sumOfDigits(num) {
  return (String(num)).split('')
    .map(num => parseInt(num))
    .reduce((sum, n) => sum + n);
}

/* eslint no-console: 0 */
// TEST SUITE
const x = 12345;
console.log(sumOfDigits(x));           // ~~~> 15
console.log(sumOfDigits(23));          // ~~~> 5
console.log(sumOfDigits(496));         // ~~~> 19
console.log(typeof(sumOfDigits(496))); // ~~~> number
console.log(typeof(Number(x)));        // <--- number
console.log(typeof(String(x)));        // <--- string
console.log(typeof(parseInt(x)));      // <--- number
console.log(String(x).split(''));      // <--- [ '1', '2', '3', '4', '5' ]

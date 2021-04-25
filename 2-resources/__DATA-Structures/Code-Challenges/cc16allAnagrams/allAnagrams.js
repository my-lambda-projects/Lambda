// Code Challenge # 16
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.

  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// INPUT:    a string
// FUNCTION: return all possible combinations of letterss
// OUTPUT:   array of string permutations

// SOLUTION: slice off the first letter, swap the next two letters, recombine the swapped letters with the first letter... Hmmm...
              slice vs splice? slice doesn't change original, splice does.

// After looking at brute solutions, it seems there is a factorial operation going on here such that a string of 5 characters would have 5! solutions...
// hmmm!
// get the first letter and use the length of the string to slice the remainder of the string, as the for loop continues

// To deduplicate, just new Set(array of anagrams)
*/




const allAnagrams = ( str ) => {

  if ( str.length < 2 ) return str;

  const result = [];

  for ( let i = 0; i < str.length; i++ ) {
    let firstLetter = str[ i ];
    let restOfString = str.slice( 0, i ) + str.slice( i + 1, str.length );

    for ( let sub of allAnagrams( restOfString ) ) {
      result.push( firstLetter + sub );
    }
  }
  return result;
}

console.log( allAnagrams( 'abc' ) );








// const result = [], temp = [];
//
// allAnagrams = (str) => {
//   const chars = str.split('');
//
//   for (let i = 0; i < chars.length; i++) {
//     const subStr = chars.splice(i, 1);
//     temp.push(subStr);
//     if (chars.length == 0)
//       result[result.length] = temp.join('');
//     allAnagrams(chars.join(''));
//     chars.splice(i, 0, subStr);
//     temp.pop();
//   }
//   return result
// };
//
//
// console.log(allAnagrams('abc'));



// FACTORIAL
const nFactorial = ( n ) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  // // version 1 √
  if ( n === 1 ) return n;
  return n * nFactorial( n - 1 );

  // // version 2: ternary solution √
  // // declare variableName = ifCondition ? thenThis : otherwiseThat;
  // const factorial = (n === 1) ? 1 : n * nFactorial(n - 1);
  // return factorial;

  // // version 2.1 √
  // return (n === 1) ? n : n * nFactorial(n - 1);
};

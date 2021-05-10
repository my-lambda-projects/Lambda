/* cc34 vowelCount
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

// // version 1: O(n) but is it O(2 + n^2) because the if() condition is an array?
const vowelCount = ( str ) => {
  let count = 0;
  for ( let i = 0; i < str.length; i++ ) {
    // lowercase vowels only
    if ( str[ i ] === 'a' || str[ i ] === 'e' || str[ i ] === 'i' || str[ i ] === 'o' || str[ i ] === 'u' ) {
      count++;
    }
  }
  return count;
};

// // version 2: Big O?
// const vowelCount = str => Array.from(str)
//   .filter(vowel => 'aeiouAEIOU'.includes(vowel)).length;

// // version 3: Big O?
// // per: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// // g	Global search.
// // i	Case-insensitive search.
// const vowelCount = str =>
//   (str.match(/[aeiou]/gi) == null) ? 0 : str.match(/[aeiou]/gi).length;

console.log( vowelCount( 'qwrtypsdfghjklzxcvbnm' ) ) // ~~~> 0
console.log( vowelCount( 'Hello World!' ) ); // ~~~> 3
console.log( vowelCount( 'The quick brown fox jumped over the lazy dog.' ) ); // ~~~> 12
console.log( vowelCount( 'Four score and twenty years ago... Our forefathers All In United' ) ); // ~~~> 21

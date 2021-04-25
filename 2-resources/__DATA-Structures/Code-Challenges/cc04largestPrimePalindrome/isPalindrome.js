// I: any string NOTE: does NOT handle integers
// O: "true" if INPUT is a palindrome
function isPalindrome( str ) {
  // return true if string is a palindrome.
  // otherwise return false
  for ( let i = 0; i < str.length / 2; i++ ) { // <--- make sure divided by 2 handles odd and even length (floor vs. ceiling)
    if ( str[ i ] === str[ str.length - 1 - i ] ) {
      return true;
    } else {
      return false;
    }
  }
}

// I: a NUMBER
// O: a STRING
const numToStr = function ( num ) {
  return `${num}`;
}

// isPalindrome() TEST SUITE
console.log( `Q: Is 'palindrome' a palindrome?            A: ${isPalindrome('palindrome')}` ) // <-- false
console.log( `Q: Is ' ' a palindrome?                     A: ${isPalindrome(' ')}` ) // <-- true
console.log( `Q: Is 'a' a palindrome?                     A: ${isPalindrome('a')}` ) // <-- true
console.log( `Q: Is 'bb' a palindrome?                    A: ${isPalindrome('bb')}` ) // <-- true
console.log( `Q: Is 'cdc' a palindrome?                   A: ${isPalindrome('cdc')}` ) // <-- true
console.log( `Q: Is 'amanaplanacanalpanama' a palindrome? A: ${isPalindrome('amanaplanacanalpanama')}` ) // <-- true
console.log( `Q: Is an integer a palindrome?              A: ${isPalindrome(5)}` ) // <-- undefined
// numToStr() test
console.log( `...might LOOK like a number: ${numToStr(5)} ...but it's a ${typeof numToStr(5)}` ) // <--- '5' & string
console.log( `Q: Is the integer converted to a string?    A: ${isPalindrome(numToStr(5))}` ) // <-- true

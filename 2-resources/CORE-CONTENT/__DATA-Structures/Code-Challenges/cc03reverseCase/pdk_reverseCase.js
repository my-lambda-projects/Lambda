// I don't know why this got merge/erased, but this is my work:

/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = function ( str ) {
  // declare an array to house individual string letters or spaces in word/sentence order
  const letters = [];
  // declare a variable which will be used to reconstructed string
  let caseConvertedString;

  // examine each letter in the string
  for ( let i = 0; i < str.length; i++ ) {
    // uppercase or lowercase or a space?
    // if a space, push space into temp holding array (if not a space, it's a letter)
    if ( str[ i ] === ' ' ) {
      letters.push( str[ i ] );
      // if already Upper Case, push lower Case version of letter into holding array
    } else if ( str[ i ] === str[ i ].toUpperCase() ) {
      letters.push( str[ i ].toLowerCase() )
      // if not space and not already Upper Case, push Upper Case version of letter to holding array
    } else letters.push( str[ i ].toUpperCase() )
  }
  // zip up the array of letters and spaces into a string
  caseConvertedString = letters.join( '' );
  return caseConvertedString;
}

const testCase1 = 'Hello World'
console.log( reverseCase( testCase1 ) ); // ---> hELLO wORLD
const testCase2 = 'Fsdfsdf ESDFSDFdfsdfsdfsdfdsf';
console.log( reverseCase( testCase2 ) ); // ---> fSDFSDF esdfsdfDFSDFSDFSDFDSF
// will it handle periods?
const testCase3 = 'The quick brown Mr. Fox jumped over the lazy Mr. Dog.';
console.log( reverseCase( testCase3 ) ); // ---> tHE QUICK BROWN mR. fOX JUMPED OVER THE LAZY mR. dOG.

// // Latoyya's solution
// const reverseString = (str) => {
//   let newString = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//       newString += str.charAt(i).toLowerCase();
//     } else {
//       newString += str.charAt(i).toUpperCase();
//     }
//   }
//   return newString;
// };
// console.log(reverseString('Hello World'));
// console.log(reverseString('Hello World My NamE is LAtoyYa SmitH'));

/*
Given a string, return a new string with all the vowels removed.

Examples:

csRemoveTheVowels("Lambda School is awesome!") -> "Lmbd Schl s wsm!"
Notes:

For this challenge, "y" is not considered a vowel.
[execution time limit] 4 seconds (js)

[input] string input_str

[output] string


*/
function csRemoveTheVowels(input_str) {
  return input_str.replace(/[aeiouAEIOU]/g, '');
}

csRemoveTheVowels('Lambda School is awesome!');
console.log(
  '🚀 ~ file: remove-vowel.js ~ line 22 ~ csRemoveTheVowels(Lambda School is awesome!)',
  csRemoveTheVowels('Lambda School is awesome!')
);

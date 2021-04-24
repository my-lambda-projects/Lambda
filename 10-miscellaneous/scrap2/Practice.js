//Write a function combine that takes two arguments and returns a new string containing both arguments
let combine = function ( name1, name2 ) {
  return name1 + " " + name2
}
console.log( combine( "Dwight", "Shrute" ) )
console.log( combine( "Michael", "Scott" ) )

//Define a function addNums that adds two numbers together. Call the function, pass in arguments and print the
//return value of the function
let addNums = function ( num1, num2 ) {
  let sum = num1 + num2
  return sum
}
console.log( addNums( 2, 4 ) )

//Identify the difference between parameters and arguments.
function pamAndJim( person1, person2 ) {
  return person1 + " and " + person2 + " forever"
}

console.log( pamAndJim( "Pam Beesly", "Jim Halpert" ) )

//What happens when there extra arguments
function add( firstParameter, secondParameter ) {
  return firstParameter + secondParameter
}

console.log( add( 1, 2, 17, 14 ) )

// What happens when there are not enough arguments
function add( firstParameter, secondParameter ) {
  return firstParameter + secondParameter
}

console.log( add( "hello " ) )
console.log( add( 2 ) )

// Transform this function from declaration to expression
// function transform() {
// 	return "we transformed the function!!"
// }

let transform = function () {
  return "we transformed the function!"
}

console.log( transform() )


// ****************************************************************************************
// 1. Define a function that accepts a sentence string and two words as args.
//    The function should return a boolean indicating if the sentence includes either word.
// ****************************************************************************************

function twoWords( sentence, word1, word2 ) {
  if ( sentence.includes( word1 ) || sentence.includes( word2 ) ) {
    return true;
  }
  return false;
}

let testSentence = "If you can't potato, then you'll never chili pepper.";
let testWord1 = "chili";
let testWord2 = "potato";
let testWord3 = "stomperooni";
let testWord4 = "chameleon";

// console.log(twoWords(testSentence, testWord1, testWord2)); // Both
// console.log(twoWords(testSentence, testWord1, testWord3)); // One
// console.log(twoWords(testSentence, testWord3, testWord4)); // Neither

// ****************************************************************************************
// 2. Identify a pair of mutually exclusive conditions
// ****************************************************************************************

function mutuallyExclusive( num1, num2 ) {
  if ( num1 > num2 ) {
    console.log( "The first number has a larger value." );
  } else {
    console.log( "The numbers are either equal or the first number is smaller." );
  }
}

// mutuallyExclusive(13, 30);
// mutuallyExclusive(30, 13);
// mutuallyExclusive(30, 30);

// ****************************************************************************************
// 3. Given a for loop, translate it into a while loop, and vice-versa
// 4. Write a function that iterates through a provided string argument
// ****************************************************************************************

function forLoop( iterable ) {
  for ( let i = 0; i < iterable.length; i++ ) {
    // Here's how it goes:
    // first iteration, i === 0; true; log('stupendous')
    // second, i === 1; true; log(true);
    // third, i === 2; true; log(123);
    // fourth, i === 3; true; log('andrew yang');
    // fifth i === 4; false
    console.log( iterable[ i ] );
  }
}

function whileLoop( iterable ) {
  let i = 0;
  while ( i < iterable.length ) {
    console.log( iterable[ i ] );
    i++;
  }
}
// index:            0          1    2         3
// let array = ["Stupendous", true, 123, "Andrew Yang"];
// let sentence = "There is no war in Ba Sing Se.";

// forLoop(sentence);
// forLoop(array);
// whileLoop(sentence);
// whileLoop(array);

// ****************************************************************************************
// 5. Given a description of pig latin, write a function that takes in a string argument
//    and utilizes String#slice to translate the string into pig latin.
// ****************************************************************************************

// console.log("a" === "A"); // false

function pigLatin( str ) {
  let vowels = "aeiouAEIOU";
  if ( vowels.includes( str[ 0 ] ) ) {
    return str + "yay";
  }

  for ( let i = 0; i < str.length; i++ ) {
    let char = str[ i ];
    if ( vowels.includes( char ) ) {
      let firstHalf = str.slice( 0, i ); // "Kr"
      let secondHalf = str.slice( i ); // "onktacular";
      return secondHalf + firstHalf + "ay";
    }
  }
}

// let str1 = "Alabama";
// let str2 = "Kronktacular";

// console.log(pigLatin(str1));
// console.log(pigLatin(str2));

// ****************************************************************************************
// 6. Write a function that takes in an array of words and a string as arguments and returns a
//    boolean indicating whether the string is located inside of the array. The function must
//    use Array#indexOf === array.indexOf()
// ****************************************************************************************

function findTheWord( arr, str ) {
  // return arr.indexOf(str);
  if ( arr.indexOf( str ) !== -1 ) {
    return true;
  }
  return false;
}

//                        0           1           2               3
// let arrayOfStrings = ["Slipbop", "Bamboozle", "Cramboolia", "Slobakaran"];
// let string1 = "Slobakaran";
// let string2 = "Yimloopadoo";

// console.log(findTheWord(arrayOfStrings, string1));
// console.log(findTheWord(arrayOfStrings, string2));

// ****************************************************************************************
// 7. Define that an array literal is an ordered list of values defined by using bracket and
//    individual values are read by indexing.
// ****************************************************************************************

let array = [ "Shamon", 1, true, "Blastorama", 1964 ];

// console.log(array[0]); // "shamon"
// console.log(array[3]); // "Blastorama"
// console.log(array[2]); // true
// console.log(array[5]); // undefined
// console.log(array[-1]); // undefined

// ****************************************************************************************
// Write a function doubler(numbers) that takes an array of numbers and returns a new array
// where every element of the original array is multiplied by 2.
// ****************************************************************************************

function doubler( numbers ) {
  let doubledNums = [];

  let i = 0;
  while ( i < numbers.length ) {
    let old_num = numbers[ i ];
    let new_num = old_num * 2;
    // this step is important because concat does NOT change the original array
    doubledNums = doubledNums.concat( new_num );

    i += 1;
  }

  return doubledNums;
}

// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]

// ****************************************************************************************

function baller( str ) {
  str = "shirt";
  return str;
}

console.log( baller( "asdf" ) );
// function isFive(num) {
// if (num ===5){
// return ture;
// }
//   else {
//     return false;
//   }
// }
// //console.log(isFive(5)); // => true
// console.log(isFive(13)); // => false
// function logBetween(lowNum,highNum){
//     for (let i = lowNum; i <= highNum ; i += 1){
//       console.log(i);
//     }
// }
//     logBetween(14, 6);
// function printFives(max){
//     for (let i = 0; i<= max ; i++){
//       if (i % 5 === 0){
//         console.log(i);
//       }
//     }
//     }
//     printFives(20) // prints out:
//     function logBetweenStepper(min, max, step){
//         for (let i = min; i<= max ; i += step){
//           if (i <= max){
//             console.log(i);
//           }
// }
// }
// // Examples:
// logBetweenStepper(5, 9, 1); // prints out:
// function countVowels(word) {
//     let vCount =0;
//      for (let i=0 ; i <= word.length -1 ; i++){
//           if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u") {
//           vCount += 1;
//      }
//      }
//       return vCount;
//     };
// Is Substring
// So far you've learned how to write your own loops but there are some methods that will iterate for you.
//  One such method is the String#indexOf() method.
// Write a function isSubstring that takes in two strings,
// searchString and subString.
// The function should return true if subString is a part of thesearchString,
// regardless of upper or lower case, and false if otherwise.
function isSubstring( searchString, subString ) {
  let lowerSearchStr = searchString.toLowerCase();
  let lowerSubStr = subString.toLowerCase();
  return lowerSearchStr.indexOf( lowerSubStr ) !== -1;
}
console.log( isSubstring( "The cat went to the store", "he cat went" ) ); // => true
console.log( isSubstring( "Time to program", "time" ) ); // => true
console.log( isSubstring( "Jump for joy", "joys" ) ); // => false

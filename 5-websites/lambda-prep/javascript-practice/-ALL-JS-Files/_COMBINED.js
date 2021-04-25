let str = 'MIICWwIBAAKBgGEdLjFEFbegPZ2AwJWkalksXr7PzWL7wIc7pOFZxXwYPWtQxvANyceCwpkqbPLsfEx7nqxAris2hYOdeN1OTFqvTyNmVuzbUPcXShn6ZoDCB30voHkeu4F3cUw5RQEUDdLscSnv4HMxHam5qgl6vXoumVNHbjyKA5UtAnfjAgMBAAECgYAmjEyvpZTxRJvwjxDi1VaZevFI0Hd4WPH9PAGgqdnH84vGXnAGFj1WikqKYcqKMQW2kdjAsWwH9D9FfrkIcDDHdZ9XuGSGkFzWtOwajWMQl7qNV1hZ288gdpIQQMOTLDgauZY6pw1cV7h4v316qJB8knQGoBNpJCfTYQJBAKV1ctsJq0Zg4QumD2hyODepP3LfLeaQsERLqVAWeuOuTY5mK5gIwsSqvcSVfY7Ze1FWIsApNFRv67azKcJPwsCQQCNlyApZFJEVNY70Er7Uu5NL9t4CYJJC9uVVkoEHEY6d7sVslqa0vP2q0zXx9YedbMBvQjxXIbY0waXUy63FvoBGJAkB3OTJWUjVgzDY1Br5wu2Yu59NjKVKLWzCsu1gaCNBfhVDX7SyIyC9EYKRfUAoQxwsmPWPyQ9QVG4WKcPZJAkBRheAotPCBE2RLHHfvpiStnMhX0UXdVyaJp5tcZ6wYV61ohyBvCOkYhUxBJzeIGrVZcvLZSLeUzXoqRPpxQxAkEAkdCZXF0gHahpZgF5y0wWcqf9ECRT1E4Hv8bk3Mf0Exp2aW34JeI6I7Xqd1NV4I9H7prQ8m3y39lFwWO8PmQ';
console.log( str.indexOf( 'HEY' ) );
console.log( 0 );
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.
let alternatingCaps = sentence => {
  let words = sentence.split( ' ' );
  let newWords = [];
  for ( let i = 0; i < words.length; i++ ) {
    let word = words[ i ];
    if ( i % 2 === 0 ) {
      newWords.push( word.toLowerCase() );
    } else {
      newWords.push( word.toUpperCase() );
    }
  }
  return newWords.join( ' ' );
};
console.log( alternatingCaps( "take them to school" ) ); // 'take THEM to SCHOOL'
console.log( alternatingCaps( "What did ThEy EAT before?" ) ); // 'what DID they EAT before?'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `averageOfFour(num1, num2, num3, num4)` that accepts four numbers as arguments. The
// function should return the average of all four numbers.
let averageOfFour = ( num1, num2, num3, num4 ) => {
  let sum = num1 + num2 + num3 + num4;
  return sum / 4;
};
console.log( averageOfFour( 10, 4, 12, 3 ) ); // 7.25
console.log( averageOfFour( -20, 50, 4, 21 ) ); // 13.75
console.log( averageOfFour( 10, 4, 12, 3 ) ); // 7.25
console.log( averageOfFour( 5, 5, 3, 7 ) ); // 5
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `average` that accepts three numbers as arguments. The function should return the
// average of the three numbers.
let average = ( num1, num2, num3 ) => ( num1 + num2 + num3 ) / 3;
console.log( average( 3, 10, 8 ) ); // 7
console.log( average( 10, 5, 12 ) ); // 9
console.log( average( 6, 20, 40 ) ); // 22
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.
let bleepVowels = str => {
  let vowels = [ "a", "e", "i", "o", "u" ];
  let bleeped = "";
  for ( let char of str ) {
    if ( vowels.includes( char ) ) {
      bleeped += "*";
    } else {
      bleeped += char;
    }
  }
  return bleeped;
};
console.log( bleepVowels( "skateboard" ) ); // 'sk*t*b**rd'
console.log( bleepVowels( "slipper" ) ); // 'sl*pp*r'
console.log( bleepVowels( "range" ) ); // 'r*ng*'
console.log( bleepVowels( "brisk morning" ) ); // 'br*sk m*rn*ng'
console.log( false ); // false
console.log( !true ); // false
console.log( !false ); // true
console.log( !!true ); // true
console.log( false && false ); // false
console.log( false && true ); // false
console.log( true && false ); // false
console.log( true && true ); // true
console.log( false || false ); // false
console.log( false || true ); // true
console.log( true || false ); // true
console.log( true || true ); // true
console.log( !false || false ); // true
console.log( false || ( true && true ) ); // true
console.log( false || !( true && true ) ); // false
console.log( !true && ( true ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.
let caseChange = ( str, shouldUpperCase ) => {
  if ( shouldUpperCase ) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
console.log( caseChange( "Super", true ) ); // 'SUPER'
console.log( caseChange( "Super", false ) ); // 'super'
console.log( caseChange( "tAmBourine", true ) ); // 'TAMBOURINE'
console.log( caseChange( "tAmBourine", false ) ); // 'tambourine'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.
let censorE = str => {
  let newStr = '';
  for ( let char of str ) {
    if ( char === 'e' ) {
      newStr += '*';
    } else {
      newStr += char;
    }
  }
  return newStr;
};
console.log( censorE( "speedy" ) ); // 'sp**dy'
console.log( censorE( "pending" ) ); // 'p*nding'
console.log( censorE( "scene" ) ); // 'sc*n*'
console.log( censorE( "heat" ) ); // 'h*at'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `chooseDivisibles(numbers, target)` that accepts an array of numbers and a
// target number as arguments. The function should return an array containing elements of the original
// array that are divisible by the target.
let chooseDivisibles = ( numbers, target ) => {
  let divisibles = [];
  for ( let num of numbers ) {
    if ( num % target === 0 ) {
      divisibles.push( num );
    }
  }
  return divisibles;
};
console.log( chooseDivisibles( [ 40, 7, 22, 20, 24 ], 4 ) ); // [40, 20, 24]
console.log( chooseDivisibles( [ 9, 33, 8, 17 ], 3 ) ); // [9, 33]
console.log( chooseDivisibles( [ 4, 25, 1000 ], 10 ) ); // [1000]
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `commonElements` that accepts two arrays as arguments. The function should return
// a new array containing the elements that are found in both of the input arrays. The order of
// the elements in the output array doesn't matter as long as the function returns the correct elements.
let commonElements = ( array1, array2 ) => {
  let common = [];
  for ( let ele of array1 ) {
    if ( array2.includes( ele ) ) {
      common.push( ele );
    }
  }
  return common;
};
let arr1 = [ "a", "c", "d", "b" ];
let arr2 = [ "b", "a", "y" ];
console.log( commonElements( arr1, arr2 ) ); // ['a', 'b']
let arr3 = [ 4, 7 ];
let arr4 = [ 32, 7, 1, 4 ];
console.log( commonElements( arr3, arr4 ) ); // [4, 7]
console.log( true === false ); // false
console.log( false === false ); // true
console.log( false !== true ); // true
console.log( !true === false ); // true
console.log( 2 + 3 === 5 ); // true
console.log( 4 < 0 ); // false
console.log( 10 >= 10 ); // true
console.log( 10.3 >= 10 ); // true
console.log( 100 / 2 === 50 ); // true
console.log( 100 % 2 === 0 ); // true
console.log( 11 % 2 === 0 ); // false
console.log( 7.0 === 7 ); // true
console.log( 13 % 5 > 0 ); // true
console.log( "potato" === "potato" ); // true
console.log( "Tomato" === "tomato" ); // false
console.log( "42" === 42 ); // false
console.log( 5 > 3 && 1 === 0 ); // false
t
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
// return a boolean indicating whether or not `str2` is contained within `str1`. The function should
// ignore any differences in capitalization.
let contains = ( str1, str2 ) => {
  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();
  return lowerStr1.includes( lowerStr2 );
};
console.log( contains( "caterpillar", "pill" ) ); // true
console.log( contains( "lion's share", "on" ) ); // true
console.log( contains( "SORRY", "or" ) ); // true
console.log( contains( "tangent", "gem" ) ); // false
console.log( contains( "clock", "ok" ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `countUp(max)` that accepts a max number as an argument. The function should print
// all numbers from 1 up to and including the max. The function doesn't need to return any value. It
// should just print to the terminal.
let countUp = max => {
  for ( let i = 1; i <= max; i++ ) {
    console.log( i );
  }
};
countUp( 5 );
// prints
//  1
//  2
//  3
//  4
//  5
countUp( 3 );
// prints
//  1
//  2
//  3
let phrase = "that's all folks";
console.log( phrase[ phrase.length ] ); // undefined
console.log( phrase[ phrase.length - 1 ] ); // s
console.log( phrase[ phrase.length - 2 ] ); // k
const i = 9;
const char = phrase[ i ];
console.log( char ); // l
console.log( phrase.indexOf( char ) ); // 8
console.log( phrase.slice( 2, 8 ) ); // at's a
console.log( "abcdefg".slice( 1, 3 ) ); // bc
console.log( "abcdefg".slice( 2 ) ); // cdefg
console.log( "abcdefg".slice( 4 ) ); // efg
console.log( "abcdefg".slice( 2, -1 ) ); // cdef
console.log( "abcdefg".slice( 2, -2 ) ); // cde
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments. 
// The function should print out all positive numbers less than max that are divisible by num1 or num2. 
// The function doesn't need to return any value. It should just print to the terminal.
let divByEither = ( num1, num2, max ) => {
  for ( let i = 1; i < max; i++ ) {
    if ( i % num1 === 0 || i % num2 === 0 ) {
      console.log( i );
    }
  }
};
divByEither( 4, 3, 16 );
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15
divByEither( 7, 5, 20 );
// prints
//  5
//  7
//  10
//  14
//  15
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments. The
// function should print all numbers between `min` and `max` (exclusive) that are also divisible by
// num.
let divisibleRange = ( min, max, num ) => {
  for ( let i = min + 1; i < max; i++ ) {
    if ( i % num === 0 ) {
      console.log( i );
    }
  }
};
divisibleRange( 17, 40, 9 );
// prints
//  18
//  27
//  36
divisibleRange( 10, 24, 4 );
// prints
//  12
//  16
//  20
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `divisible(num1, num2)` that accepts two numbers as arguments. The function should
// return a boolean indicating whether or not `num1` is divisible by `num2`.
let divisible = ( num1, num2 ) => num1 % num2 === 0;
// let divisible = function (num1, num2) {
//   if (num1 % num2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
console.log( divisible( 12, 3 ) ); // true
console.log( divisible( 12, 5 ) ); // false
console.log( divisible( 60, 4 ) ); // true
console.log( divisible( 60, 11 ) ); // false
console.log( divisible( 21, 7 ) ); // true
console.log( divisible( 21, 6 ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.
let divisors = n => {
  let numbers = [];
  for ( let i = 1; i <= n; i++ ) {
    if ( n % i === 0 ) {
      numbers.push( i );
    }
  }
  return numbers;
};
console.log( divisors( 15 ) ); // [1, 3, 5, 15]
console.log( divisors( 7 ) ); // [1, 7]
console.log( divisors( 24 ) ); // [1, 2, 3, 4, 6, 8, 12, 24]
g
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.
let endsInLy = str => {
  let secondLast = str[ str.length - 2 ];
  let last = str[ str.length - 1 ];
  return secondLast === 'l' && last === 'y';
};
// let endsInLy = function (str) {
//   return str.endsWith('ly');
// };
console.log( endsInLy( "pretty" ) ); // false
console.log( endsInLy( "instant" ) ); // false
console.log( endsInLy( "analytic" ) ); // false
console.log( endsInLy( "timidly" ) ); // true
console.log( endsInLy( "fly" ) ); // true
console.log( endsInLy( "gallantly" ) ); // true
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `endsWithT` that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string ends with the character 't'.
let endsWithT = str => {
  let lastChar = str[ str.length - 1 ];
  return lastChar === 't';
};
console.log( endsWithT( "smart" ) ); // true
console.log( endsWithT( "racket" ) ); // true
console.log( endsWithT( "taco" ) ); // false
console.log( endsWithT( "boomerang" ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.
let evens = max => {
  for ( let i = 1; i < max; i++ ) {
    if ( i % 2 === 0 ) {
      console.log( i );
    }
  }
};
evens( 11 );
// prints
//  2
//  4
//  6
//  8
//  10
evens( 8 );
// prints
//  2
//  4
//  6
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.
let filterLongWords = words => {
  let chosenWords = [];
  for ( let word of words ) {
    if ( word.length < 5 ) {
      chosenWords.push( word );
    }
  }
  return chosenWords;
};
console.log( filterLongWords( [ "kale", "cat", "retro", "axe", "heirloom" ] ) );
// ['kale', 'cat', 'axe']
console.log( filterLongWords( [ "disrupt", "pour", "trade", "pic" ] ) );
// ['pour', 'pic']
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.
let fiveMultiplesOf = num => {
  for ( let i = 1; i <= 5; i++ ) {
    console.log( i * num );
  }
};
fiveMultiplesOf( 7 );
// prints
//  7
//  14
//  21
//  28
//  35
fiveMultiplesOf( 3 );
// prints
//  3
//  6
//  9
//  12
//  15
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `fizzBuzz` that accepts a max number as an argument. The function should
// print all numbers less than or equal to max that are divisible by either 3 or 5 but not both 3
// and 5. The function doesn't need to return any value. It should just print to the terminal.
let fizzBuzz = max => {
  for ( let i = 1; i <= max; i++ ) {
    if ( ( i % 3 === 0 || i % 5 === 0 ) && !( i % 3 === 0 && i % 5 === 0 ) ) {
      console.log( i );
    }
  }
};
fizzBuzz( 18 );
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
fizzBuzz( 33 );
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
//  20
//  21
//  24
//  25
//  27
//  33
let movie = 'Fight Club';
let views = 4;
console.log( `I watched ${ movie } about ${ views } number of times` );
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.
// You can assume that the arguments are both at least three characters long.
let funnySound = ( str1, str2 ) => str1.slice( 0, 3 ) + str2.slice( 0, 3 );
console.log( funnySound( "tiger", "spoon" ) ); // 'tigspo'
console.log( funnySound( "computer", "phone" ) ); // 'compho'
console.log( funnySound( "skate", "bottle" ) ); // 'skabot'
console.log( funnySound( "frog", "ashtray" ) ); // 'froash'
console.log( 'hello world' );
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `half` that accepts a number as an argument. The function should return half of the
// number.
let half = n => n / 2;
console.log( half( 8 ) ); // 4
console.log( half( 15 ) ); // 7.5
console.log( half( 90 ) ); // 45
gi
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `inRange(min, max, n)` that accepts three numbers as arguments. The function should
// return a boolean indicating if `n` is between `min` and `max` inclusive.
let inRange = ( min, max, n ) => n >= min && n <= max;
console.log( inRange( 5, 13, 8 ) ); // true
console.log( inRange( 5, 13, 29 ) ); // false
console.log( inRange( 100, 125, 100 ) ); // true
console.log( inRange( 100, 125, 99 ) ); // false
console.log( inRange( 40, 45, 44 ) ); // true
console.log( inRange( 40, 45, 45 ) ); // true
console.log( inRange( 40, 45, 46 ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `isDivBy4` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the number is divisible by 4.
let isDivBy4 = num => {
  if ( num % 4 === 0 ) {
    return true;
  } else {
    return false;
  }
};
// let isDivBy4 = function (num) {
//   return num % 4 === 0;
// };
console.log( isDivBy4( 8 ) ); // true
console.log( isDivBy4( 12 ) ); // true
console.log( isDivBy4( 24 ) ); // true
console.log( isDivBy4( 9 ) ); // false
console.log( isDivBy4( 10 ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `isLong` that accepts a string as an argument. The function should return a boolean
// indicating whether or not the string is longer than 5 characters
let isLong = ( {
  length
} ) => length > 5;
// let isLong = function (str) {
//   if (str.length > 5) {
//     return true;
//   } else {
//     return false;
//   }
// };
console.log( isLong( "pie" ) ); // false
console.log( isLong( "kite" ) ); // false
console.log( isLong( "kitty" ) ); // false
console.log( isLong( "telescope" ) ); // true
console.log( isLong( "thermometer" ) ); // true
console.log( isLong( "restaurant" ) ); // true
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.
let keepItQuiet = str => `${ str.toLowerCase() }...`;
console.log( keepItQuiet( "HOORAY" ) ); // 'hooray...'
console.log( keepItQuiet( "Doggo" ) ); // 'doggo...'
console.log( keepItQuiet( "WHAT?!?!" ) ); // 'what?!?!...'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `larger` that accepts two numbers as arguments. The function should return the
// larger number.
let larger = ( num1, num2 ) => {
  if ( num1 > num2 ) {
    return num1;
  } else {
    return num2;
  }
};
console.log( larger( 256, 400 ) ); // 400
console.log( larger( 31, 4 ) ); // 31
console.log( larger( -6, 7 ) ); // 7
console.log( larger( 11.3, 11.2 ) ); // 11.3
console.log( larger( -10, -3 ) ); // -3
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.
let lengthiestWord = sentence => {
  let words = sentence.split( ' ' );
  let longest = words[ 0 ]; // pretty
  for ( let i = 1; i < words.length; i++ ) {
    let word = words[ i ];
    if ( word.length >= longest.length ) {
      longest = word;
    }
  }
  return longest;
};
console.log( lengthiestWord( "I am pretty hungry" ) ); // 'hungry'
console.log( lengthiestWord( "we should think outside of the box" ) ); // 'outside'
console.log( lengthiestWord( "down the rabbit hole" ) ); // 'rabbit'
console.log( lengthiestWord( "simmer down" ) ); // 'simmer'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `longer` that accepts two strings as arguments. The function should return the
// string that is longer. If the strings have the same length, then return the first string.
let longer = ( str1, str2 ) => {
  if ( str1.length >= str2.length ) {
    return str1;
  } else {
    return str2;
  }
};
console.log( longer( "drum", "piranha" ) ); // 'piranha'
console.log( longer( "basket", "fork" ) ); // 'basket'
console.log( longer( "flannel", "sustainable" ) ); // 'sustainable'
console.log( longer( "disrupt", "ability" ) ); // 'disrupt'
console.log( longer( "bird", "shoe" ) ); // 'bird'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.
let makeAcronym = sentence => {
  let words = sentence.split( ' ' );
  let acronym = '';
  for ( let word of words ) {
    acronym += word[ 0 ];
  }
  return acronym.toUpperCase();
};
console.log( makeAcronym( "New York" ) ); // NY
console.log( makeAcronym( "same stuff different day" ) ); // SSDD
console.log( makeAcronym( "Laugh out loud" ) ); // LOL
console.log( makeAcronym( "don't over think stuff" ) ); // DOTS
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.
let makeMatrix = ( m, n, value ) => {
  let matrix = [];
  for ( let i = 0; i < m; i++ ) {
    let row = [];
    for ( let j = 0; j < n; j++ ) {
      row.push( value );
    }
    matrix.push( row );
  }
  return matrix;
};
console.log( makeMatrix( 3, 5, null ) );
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]
console.log( makeMatrix( 4, 2, "x" ) );
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]
console.log( makeMatrix( 2, 2, 0 ) );
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `maximum` that accepts an array of numbers as an argument. The function should 
// return the largest number of the array. If the array is empty, then the function should return null.
let maximum = numbers => {
  if ( numbers.length === 0 ) {
    return null;
  }
  let currentMax = numbers[ 0 ];
  for ( let i = 1; i < numbers.length; i++ ) {
    if ( numbers[ i ] > currentMax ) {
      currentMax = numbers[ i ];
    }
  }
  return currentMax;
};
console.log( maximum( [ 5, 6, 3, 7 ] ) ); // 7
console.log( maximum( [ 17, 15, 19, 11, 2 ] ) ); // 19
console.log( maximum( [] ) ); // null
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
// print all numbers from min to max inclusive. The function doesn't need to return any value. It
// should just print to the terminal.
let minToMax = ( min, max ) => {
  for ( let i = min; i <= max; i++ ) {
    console.log( i );
  }
};
minToMax( 5, 9 );
// prints
//  5
//  6
//  7
//  8
//  9
minToMax( 11, 13 );
// prints
//  11
//  12
//  13
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.
let noOhs = str => {
  for ( let char of str ) {
    if ( char !== 'o' ) {
      console.log( char );
    }
  }
};
noOhs( "code" );
// prints
//  c
//  d
//  e
noOhs( "school" );
// prints
//  s
//  c
//  h
//  l
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

let numOdds = function ( numbers ) {
  let count = 0;

  for ( let i = 0; i < numbers.length; i++ ) {
    if ( numbers[ i ] % 2 === 1 ) {
      count += 1;
    }
  }

  return count;
};

console.log( numOdds( [ 4, 7, 2, 5, 9 ] ) ); // 3
console.log( numOdds( [ 11, 31, 58, 99, 21, 60 ] ) ); // 4
console.log( numOdds( [ 100, 40, 4 ] ) ); // 0

//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `numberChange` that accepts a number as an argument. The function should return
// half the number if it is even. The function should return double the number if it is odd.
let numberChange = n => {
  if ( n % 2 === 0 ) {
    return n / 2;
  } else {
    return n * 2;
  }
};
console.log( numberChange( 6 ) ); // 3
console.log( numberChange( 7 ) ); // 14
console.log( numberChange( 16 ) ); // 8
console.log( numberChange( 21 ) ); // 42
console.log( 2 + 3 ); // 5
console.log( 10 - 15 ); // -5
console.log( 4 + 1 - 5 ); // 0
console.log( 4 * 3 ); // 12
console.log( 7 / 2 ); // 3.5
console.log( 4 + 2 * 3 ); // 10
console.log( ( 4 + 2 ) * 3 ); // 18
console.log( 5 % 2 ); // 1
console.log( 6 % 2 ); // 0
console.log( 7 % 2 ); // 1
console.log( 8 % 2 ); // 0
console.log( 19 % 8 ); // 3
console.log( 24 % 8 ); // 0
console.log( 7 % 4 ); // 3
console.log( 4 % 7 ); // 4
console.log( 5 + ( 10 % 5 ) ); // 5
console.log( ( 5 + 10 ) % 5 ); // 0
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `numberRange(min, max, step)` that accepts three numbers as arguments, `min`,
// `max`, and `step`. The function should return all numbers between `min` and `max` at `step` intervals.
// `min` and `max` are inclusive.
let numberRange = ( min, max, step ) => {
  let range = [];
  for ( let i = min; i <= max; i += step ) {
    range.push( i );
  }
  return range;
};
console.log( numberRange( 10, 40, 5 ) ); // [10, 15, 20, 25, 30, 35, 40]
console.log( numberRange( 14, 24, 3 ) ); // [14, 17, 20, 23]
console.log( numberRange( 8, 35, 6 ) ); // [8, 14, 20, 26, 32]
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25
let oddSum = max => {
  let sum = 0;
  for ( let i = 1; i <= max; i++ ) {
    if ( i % 2 === 1 ) {
      sum += i;
    }
  }
  return sum;
};
console.log( oddSum( 10 ) ); // 25
console.log( oddSum( 5 ) ); // 9
let word = "bye";
console.log( `${ word } felicia` ); // 'bye felicia'
console.log( word ); // 'bye'
let num = 10;
num = num * 2;
console.log( num ); // 20
let bottlesOfBeer = 99;
let around = bottlesOfBeer - 1;
console.log( around ); // 98
console.log( bottlesOfBeer ); // 99
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `oneOrNone` that accepts two booleans as arguments. The function should return true
// if exactly one of the arguments is true. If BOTH arguments are true, then it should return false.
let oneOrNone = ( val1, val2 ) => {
  if ( ( val1 || val2 ) && !( val1 && val2 ) ) {
    return true;
  } else {
    return false;
  }
};
console.log( oneOrNone( false, false ) ); // false
console.log( oneOrNone( true, false ) ); // true
console.log( oneOrNone( false, true ) ); // true
console.log( oneOrNone( true, true ) ); // false
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `oneToFour` that prints all whole numbers from one to four, inclusive. The function
// takes in no arguments and doesn't need to return any value. It should just print to the terminal.
let oneToFour = () => {
  for ( let i = 1; i <= 4; i++ ) {
    console.log( i );
  }
};
oneToFour();
// prints
//  1
//  2
//  3
//  4
// snippet 1-0
let qty = 38;
if ( qty > 30 && qty % 5 === 4 ) {
  console.log( "swish" );
} else {
  console.log( "swoosh" ); // prints
}
if ( qty > 0 ) {
  console.log( "pos" ); // prints
}
// snippet 1-1
let a = "celery";
let b = "SQUASH";
if ( a === a.toUpperCase() ) {
  console.log( "alpha" );
}
if ( b === b.toUpperCase() ) {
  console.log( "beta" ); // prints
}
// snippet 1-2
let number = 9;
if ( number > 4 ) {
  console.log( "ding" ); // prints
} else if ( number % 3 === 0 ) {
  console.log( "dong" );
}
// snippet 1-3
let z = 12;
if ( z > 10 ) {
  console.log( "vroom" ); // prints
}
if ( z % 3 === 0 ) {
  console.log( "skrrt" ); // prints
}
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `pairPrint` that accepts an array as an argument. The function should print
// all unique pairs of elements in the array. The function doesn't need to return any value. It
// should just print to the terminal.

let pairPrint = function ( array ) {
  for ( let i = 0; i < array.length; i++ ) {
    for ( let j = i + 1; j < array.length; j++ ) {
      console.log( array[ i ] + ' - ' + array[ j ] );
    }
  }
};

pairPrint( [ "artichoke", "broccoli", "carrot", "daikon" ] );
// prints
//  artichoke - broccoli
//  artichoke - carrot
//  artichoke - daikon
//  broccoli - carrot
//  broccoli - daikon
//  carrot - daikon

pairPrint( [ "apple", "banana", "clementine" ] );
// prints
//  apple - banana
//  apple - clementine
//  banana - clementine

//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `parity` that accepts a number as an argument. The function should return the
// string 'even' if the number is even. It should return the string 'odd' if the number is odd.
let parity = function ( num ) {
  if ( num % 2 === 0 ) {
    return 'even';
  } else {
    return 'odd';
  }
};
console.log( parity( 5 ) ); // 'odd'
console.log( parity( 7 ) ); // 'odd'
console.log( parity( 13 ) ); // 'odd'
console.log( parity( 32 ) ); // 'even'
console.log( parity( 10 ) ); // 'even'
console.log( parity( 602348 ) ); // 'even'
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

let print2d = function ( array ) {
  for ( let i = 0; i < array.length; i++ ) {
    let subarray = array[ i ];
    for ( let j = 0; j < subarray.length; j++ ) {
      console.log( subarray[ j ] );
    }
  }
};


let array1 = [
  [ "a", "b", "c", "d" ],
  [ "e", "f" ],
  [ "g", "h", "i" ],
];
print2d( array1 );
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i

let array2 = [
  [ 9, 3, 4 ],
  [ 11 ],
  [ 42, 100 ]
];
print2d( array2 );
// prints
//  9
//  3
//  4
//  11
//  42
//  100

//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
/// Write a function `printCombinations`that accepts two arrays as arguments. The function should
// print all combinations of the elements generated by taking an element from the first array and
// and an element from the second array. The function doesn't need to return any value. It
// should just print to the terminal.


let printCombinations = function ( array1, array2 ) {
  for ( let i = 0; i < array1.length; i++ ) {
    let ele1 = array1[ i ];

    for ( let j = 0; j < array2.length; j++ ) {
      let ele2 = array2[ j ];
      console.log( ele1, ele2 );
    }
  }
};

let colors = [ "gray", "cream", "cyan" ];
let clothes = [ "shirt", "flannel" ];
printCombinations( colors, clothes );
// prints
//  gray shirt
//  gray flannel
//  cream shirt
//  cream flannel
//  cyan shirt
//  cyan flannel

printCombinations( [ "hot", "cold" ], [ "soup", "tea" ] );
// prints
//  hot soup
//  hot tea
//  cold soup
//  cold tea

//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function named `productUpTo(max)` that accepts a max number as an argument. The function
// should return the total product of all whole numbers from 1 to the max, inclusive. A product is a
// number obtained from multiplying numbers together.
//
// For example, productUpTo(4) should return 24 because 1 * 2 * 3 * 4 = 24
let productUpTo = function ( max ) {
  let product = 1;
  for ( let i = 1; i <= max; i++ ) {
    product *= i;
  }
  return product;
};
console.log( productUpTo( 4 ) ); // 24
console.log( productUpTo( 5 ) ); // 120
console.log( productUpTo( 7 ) ); // 5040
let word = "suspension bridge";
console.log( word[ 4 ] ); // e
console.log( word.length > 5 && word[ 0 ] === "d" ); // false
console.log( word.length > 5 && word[ 0 ] === "s" ); // true
console.log( word.indexOf( "o" ) > -1 ); // true
console.log( word.indexOf( "z" ) > -1 ); // false
let str = "foggy";
console.log( str[ 2 + 1 ] ); // g
console.log( str[ str.length - 1 ] ); // y
str = " day";
console.log( str ); // ' day'
console.log( str.length ); // 4
console.log( str.indexOf( "ogg" ) ); // -1
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `raisePower(base, exponent)` that accepts two numbers, `base` and `exponent`. The
// function should return `base` raised to the `exponent` power.
//
// For example, raisePower(2, 5) should return 32 because 2 * 2 * 2 * 2 * 2 = 32
// For example, raisePower(4, 3) should return 64 because 4 * 4 * 4 = 64
let raisePower = function ( base, exponent ) {
  let product = 1;
  for ( let i = 1; i <= exponent; i++ ) {
    product *= base;
  }
  return product;
};
console.log( raisePower( 2, 5 ) ); // 32
console.log( raisePower( 4, 3 ) ); // 64
console.log( raisePower( 10, 4 ) ); // 10000
console.log( raisePower( 7, 2 ) ); // 49
//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

let removeCapitals = function ( str ) {
  let newStr = '';

  for ( let i = 0; i < str.length; i++ ) {
    let char = str[ i ];
    if ( char === char.toLowerCase() ) {
      newStr += char;
    }
  }

  return newStr;
};

console.log( removeCapitals( "fOrEver" ) ); // 'frver'
console.log( removeCapitals( "raiNCoat" ) ); // 'raioat'
console.log( removeCapitals( "cElLAr Door" ) ); // 'clr oor'

//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

let removeDupes = function ( array ) {
  let uniques = [];

  for ( let i = 0; i < array.length; i++ ) {
    let ele = array[ i ];
    if ( !uniques.includes( ele ) ) {
      uniques.push( ele );
    }
  }

  return uniques;
};

console.log( removeDupes( [ "x", "y", "y", "x", "z" ] ) ); // ['x', 'y', 'z']
console.log( removeDupes( [ false, false, true, false ] ) ); // [false, true]
console.log( removeDupes( [ 42, 5, 7, 42, 7, 3, 7, 7 ] ) ); // [42, 5, 7, 3]

//--- -------------------------------------------------------------------------------->
//---------------------------------------(NEXT:)------------------------------------->
//--- -------------------------------------------------------------------------------->
// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
let removeFirstVowel = function ( str ) {
    let vowels = 'aeiou';
    for ( let i = 0; i < str.length; {
        let char = str[ i ];
        if ( vowels.includes( char ) ) {
          return str.slice( 0, i ) + str.slice( i + 1 );
        }
      }
      return str;
    };
    console.log( removeFirstVowel( "volcano" ) ); // 'vlcano'
    console.log( removeFirstVowel( "celery" ) ); // 'clery'
    console.log( removeFirstVowel( "juice" ) ); // 'jice'
    console.log( removeFirstVowel( "bridge" ) ); // 'brdge'
    console.log( removeFirstVowel( "try" ) ); // 'try'
    //--- -------------------------------------------------------------------------------->
    //---------------------------------------(NEXT:)------------------------------------->
    //--- -------------------------------------------------------------------------------->
    // Write a function `removeShortWords` that accepts a sentence string as an argument. The function
    // should return a new sentence where all of the words shorter than 4 characters are removed.
    let removeShortWords = function ( sentence ) {
        let words = sentence.split( ' ' );
        let chosenWords = [];
        for ( let i = 0; i < words.length; {
            let word = words[ i ];
            if ( word.length >= 4 ) {
              chosenWords.push( word );
            }
          }
          return chosenWords.join( ' ' );
        };
        console.log( removeShortWords( "knock on the door will you" ) ); // 'knock door will'
        console.log( removeShortWords( "a terrible plan" ) ); // 'terrible plan'
        console.log( removeShortWords( "run faster that way" ) ); // 'faster that'
        //--- -------------------------------------------------------------------------------->
        //---------------------------------------(NEXT:)------------------------------------->
        //--- -------------------------------------------------------------------------------->
        // Write a function `removeVowels` that accepts a string as an argument. The function should return
        // a version of the string where all vowels are removed.
        let removeVowels = function ( str ) {
            let newStr = '';
            let vowels = 'aeiou';
            for ( let i = 0; i < str.length; {
                let char = str[ i ];
                if ( !vowels.includes( char ) ) {
                  newStr += char;
                }
              }
              return newStr;
            };
            console.log( removeVowels( "jello" ) ); // jll
            console.log( removeVowels( "sensitivity" ) ); // snstvty
            console.log( removeVowels( "cellar door" ) ); // cllr dr
            //--- -------------------------------------------------------------------------------->
            //---------------------------------------(NEXT:)------------------------------------->
            //--- -------------------------------------------------------------------------------->
            // Write a function `reverseArray` that accepts an array as an argument. The function should return a
            // array containing the elements of the original array in reverse order.
            let reverseArray1 = function ( array ) {
              let reversed = [];
              for ( let i = array.length - 1; i >= 0; i-- ) {
                reversed.push( array[ i ] );
              }
              return reversed;
            };
            console.log( reverseArray1( [ "zero", "one", "two", "three" ] ) ); // ['three', 'two', 'one', 'zero']
            console.log( reverseArray1( [ 7, 1, 8 ] ) ); // [8, 1, 7]
            let reverseArray2 = function ( array ) {
                let reversed = [];
                for ( let i = 0; i < array.length; {
                    reversed.unshift( array[ i ] );
                  }
                  return reversed;
                };
                console.log( reverseArray2( [ "zero", "one", "two", "three" ] ) ); // ['three', 'two', 'one', 'zero']
                console.log( reverseArray2( [ 7, 1, 8 ] ) ); // [8, 1, 7]
                //--- -------------------------------------------------------------------------------->
                //---------------------------------------(NEXT:)------------------------------------->
                //--- -------------------------------------------------------------------------------->
                // Write a function `reverseIterate` that accepts a string as an argument. The function should print
                // the characters of the string one by one, in reverse order. The function doesn't need to return any
                // value. It should just print to the terminal.
                let reverseIterate = function ( str ) {
                  for ( let i = str.length - 1; i >= 0; i-- ) {
                    console.log( str[ i ] );
                  }
                };
                reverseIterate( "carrot" );
                // prints
                //  t
                //  o
                //  r
                //  r
                //  a
                //  c
                reverseIterate( "box" );
                // prints
                //  x
                //  o
                //  b

                //--- -------------------------------------------------------------------------------->
                //---------------------------------------(NEXT:)------------------------------------->
                //--- -------------------------------------------------------------------------------->
                // Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
                // should return the same sentence where words longer than 4 characters have their vowels removed.
                let removeVowels = function ( str ) {
                    let newStr = '';
                    let vowels = 'aeiou';
                    for ( let i = 0; i < str.length; {
                        let char = str[ i ];
                        if ( !vowels.includes( char ) ) {
                          newStr += char;
                        }
                      }
                      return newStr;
                    };
                    let shortenLongWords = function ( sentence ) {
                        let words = sentence.split( ' ' );
                        let newWords = [];
                        for ( let i = 0; i < words.length; {
                            let word = words[ i ];
                            if ( word.length > 4 ) {
                              let noVowels = removeVowels( word );
                              newWords.push( noVowels );
                            } else {
                              // leave it the same
                              newWords.push( word );
                            }
                          }
                          return newWords.join( ' ' );
                        };
                        console.log( shortenLongWords( "they are very noble people" ) ); // 'they are very nbl ppl'
                        console.log( shortenLongWords( "stick with it" ) ); // 'stck with it'
                        console.log( shortenLongWords( "ballerina, you must have seen her" ) ); // 'bllrna, you must have seen her
                        console.log( "promenade" [ 3 ] ); // m
                        console.log( "tiger" [ 1 ] ); // i
                        console.log( "wheel".length ); // 5
                        console.log( "wheel".length - 1 ); // 4
                        console.log( "noMAD".toUpperCase() ); // NOMAD
                        console.log( "hey programmers" [ 2 ] === "y" ); // true
                        console.log( "volleyball".length > 20 ); // false
                        console.log( "treasure".indexOf( "r" ) ); // 1
                        console.log( "treasure".indexOf( "e" ) ); // 2
                        console.log( "web" [ 5 ] ); // undefined
                        console.log( "red".indexOf( "x" ) ); // -1
                        console.log( "red".indexOf( "R" ) ); // -1
                        // snippet 0-1
                        let greet = function () {
                          console.log( "hey" );
                          console.log( "programmers" );
                        };
                        let whistle = function () {
                          console.log( "doot" );
                        };
                        console.log( "first" );
                        console.log( "second" );
                        greet();
                        console.log( "third" );
                        console.log( "fourth" );
                        whistle();
                        // first
                        // second
                        // hey
                        // programmers
                        // third
                        // fourth
                        // doot
                        // snippet 0-2
                        let howMany = function () {
                          return 42;
                        };
                        console.log( howMany );
                        console.log( howMany() );
                        const theAnswer = howMany();
                        console.log( theAnswer );
                        let howMuch = function () {
                          5;
                        };
                        console.log( howMuch() );
                        // [Function: howMany]
                        // 42
                        // 42
                        // undefined
                        // snippet 0-3
                        let average = function ( num1, num2 ) {
                          console.log( "calculating..." );
                          return ( num1 + num2 ) / 2;
                        };
                        console.log( average( 5, 10 ) );
                        console.log( average( 20, 26 ) );
                        console.log( average( 50, 100 ) + 2 );
                        let a = 21 + 3;
                        let b = 20;
                        let n = average( a, b );
                        console.log( average( n, 18 ) );
                        // calculating...
                        // 7.5
                        // calculating...
                        // 23
                        // calculating...
                        // 77
                        // calculating...
                        // calculating...
                        // 20
                        // snippet 0-4
                        let exclaim = function ( str ) {
                          let capitalized = str.toUpperCase();
                          return capitalized + "!!";
                        };
                        let result = exclaim( "potato" );
                        console.log( result );
                        console.log( result.length );
                        console.log( result[ 0 ] );
                        console.log( result[ result.length - 1 ] );
                        // POTATO!!
                        // 8
                        // P
                        // !
                        // snippet 1
                        console.log( "hello" );
                        for ( let i = 0; i < 5; i++ ) {
                          console.log( "code" );
                        }
                        console.log( "goodbye" );
                        hello
                        code
                        code
                        code
                        code
                        code
                        goodbye
                        // snippet 1
                        for ( let i = 1; i <= 4; i++ ) {
                          for ( let j = 1; j <= 3; j++ ) {
                            console.log( i, j );
                          }
                        }
                        // 1 1
                        // 1 2
                        // 1 3
                        // 2 1
                        // 2 2
                        // 2 3
                        // 3 1
                        // 3 2
                        // 3 3
                        // 4 1
                        // 4 2
                        // 4 3
                        // snippet 2
                        console.log( "hi" );
                        for ( let i = 3; i <= 7; i++ ) {
                          console.log( "program" );
                          console.log( i );
                        }
                        console.log( "bye" );
                        // hi
                        // program
                        // 3
                        // program
                        // 4
                        // program
                        // 5
                        // program
                        // 6
                        // program
                        // 7
                        // bye
                        // snippet 2
                        for ( let n = 0; n < 2; n++ ) {
                          console.log( "n=" + n );
                          for ( let m = 0; m < 5; m++ ) {
                            console.log( "   m=" + m );
                          }
                          console.log( "n=" + n );
                        }
                        // n=0
                        //    m=0
                        //    m=1
                        //    m=2
                        //    m=3
                        //    m=4
                        // n=0
                        // n=1
                        //    m=0
                        //    m=1
                        //    m=2
                        //    m=3
                        //    m=4
                        // n=1
                        // snippet 3
                        let foo = function () {
                          for ( let num = 10; num > 0; num -= 2 ) {
                            console.log( num );
                          }
                        };
                        console.log( "begin" );
                        foo();
                        console.log( "end" );
                        foo();
                        // begin
                        // 10
                        // 8
                        // 6
                        // 4
                        // 2
                        // end
                        // 10
                        // 8
                        // 6
                        // 4
                        // 2
                        // snippet 3
                        let friends = [ "philip", "abby", "phelipe", "simcha" ];
                        for ( let i = 0; i < friends.length; {
                            for ( let j = 0; j < friends.length; {
                                console.log( friends[ i ], friends[ j ] );
                              }
                            }
                            // philip philip
                            // philip abby
                            // philip phelipe
                            // philip simcha
                            // abby philip
                            // abby abby
                            // abby phelipe
                            // abby simcha
                            // phelipe philip
                            // phelipe abby
                            // phelipe phelipe
                            // phelipe simcha
                            // simcha philip
                            // simcha abby
                            // simcha phelipe
                            // simcha simcha
                            // snippet 4
                            let word = "street";
                            for ( let i = 0; i < word.length; {
                                console.log( i );
                                console.log( word[ i ] );
                              }
                              // 0
                              // s
                              // 1
                              // t
                              // 2
                              // r
                              // 3
                              // e
                              // 4
                              // e
                              // 5
                              // t
                              // snippet 4
                              let locations = [ "flatbush", "williamsburg", "bushwick", "greenpoint" ];
                              for ( let i = 0; i < locations.length; {
                                  for ( let j = i + 1; j < locations.length; {
                                      console.log( locations[ i ], locations[ j ] );
                                    }
                                  }
                                  // flatbush williamsburg
                                  // flatbush bushwick
                                  // flatbush greenpoint
                                  // williamsburg bushwick
                                  // williamsburg greenpoint
                                  // bushwick greenpoint
                                  // snippet 5
                                  let total = 0; // 10
                                  for ( let i = 1; i < 5; i++ ) {
                                    total += i;
                                    console.log( total );
                                  }
                                  console.log( "grand total: " + total );
                                  // 1
                                  // 3
                                  // 6
                                  // 10
                                  // grand total: 10
                                  // snippet 5
                                  let colors = [ "red", "purple", "orange" ];
                                  for ( let i = 0; i < colors.length; {
                                      let colorStr = colors[ i ];
                                      console.log( colorStr );
                                      for ( let j = 0; j < colorStr.length; {
                                          let char = colorStr[ j ];
                                          console.log( char );
                                        }
                                      }
                                      // red
                                      // r
                                      // e
                                      // d
                                      // purple
                                      // p
                                      // u
                                      // r
                                      // p
                                      // l
                                      // e
                                      // orange
                                      // o
                                      // r
                                      // a
                                      // n
                                      // g
                                      // e
                                      //--- -------------------------------------------------------------------------------->
                                      //---------------------------------------(NEXT:)------------------------------------->
                                      //--- -------------------------------------------------------------------------------->
                                      // Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements.
                                      // The first element of every pair is a number and the second element is a word. The function should
                                      // return a string containing the words repeated the specified number of times. See the examples.
                                      let spam = function ( pairs ) {
                                          let words = [];
                                          for ( let i = 0; i < pairs.length; {
                                              let pair = pairs[ i ];
                                              let word = pair[ 0 ];
                                              let num = pair[ 1 ];
                                              for ( let j = 0; j < num; {
                                                  words.push( word );
                                                }
                                              }
                                              return words.join( ' ' );
                                            };
                                            let array1 = [
                                              [ "hi", 3 ],
                                              [ "bye", 2 ],
                                            ]; console.log( spam( array1 ) ); // 'hi hi hi bye bye'
                                            let array2 = [
                                              [ "cat", 1 ],
                                              [ "dog", 2 ],
                                              [ "bird", 4 ],
                                            ]; console.log( spam( array2 ) ); // 'cat dog dog bird bird bird bird'
                                            //--- -------------------------------------------------------------------------------->
                                            //---------------------------------------(NEXT:)------------------------------------->
                                            //--- -------------------------------------------------------------------------------->
                                            // Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
                                            // whether or not the string starts with 'r' or 'R'.
                                            let startsWithR = function ( str ) {
                                              return str[ 0 ] === 'r' || str[ 0 ] === 'R';
                                            }; console.log( startsWithR( "roger that" ) ); // true
                                            console.log( startsWithR( "Row, row, row your boat" ) ); // true
                                            console.log( startsWithR( "slip" ) ); // false
                                            console.log( startsWithR( "Taxicab" ) ); // false
                                            //--- -------------------------------------------------------------------------------->
                                            //---------------------------------------(NEXT:)------------------------------------->
                                            //--- -------------------------------------------------------------------------------->
                                            // Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
                                            // return an array containing only the positive numbers.
                                            let stayPositive = function ( numbers ) {
                                                let positives = [];
                                                for ( let i = 0; i < numbers.length; {
                                                    if ( numbers[ i ] > 0 ) {
                                                      positives.push( numbers[ i ] );
                                                    }
                                                  }
                                                  return positives;
                                                };
                                                console.log( stayPositive( [ 10, -4, 3, 6 ] ) ); // [10, 3, 6]
                                                console.log( stayPositive( [ -5, 11, -40, 30.3, -2 ] ) ); // [11, 30.3]
                                                console.log( stayPositive( [ -11, -30 ] ) ); // []
                                                console.log( "river" + "town" );
                                                console.log( "cat" + "dog" );
                                                console.log( "New" + " York" );
                                                console.log( "runner's knee" + "!" );
                                                console.log( "man" + "bear" + "pig" );
                                                //--- -------------------------------------------------------------------------------->
                                                //---------------------------------------(NEXT:)------------------------------------->
                                                //--- -------------------------------------------------------------------------------->
                                                // Write a function `stringIterate` that accepts a string as an argument. The function should print out
                                                // each character of the string, one by one. The function doesn't need to return any value. It should
                                                // just print to the terminal.
                                                let stringIterate = function ( string ) {
                                                    for ( let i = 0; i < string.length; {
                                                        console.log( string[ i ] );
                                                      }
                                                    };
                                                    stringIterate( "celery" );
                                                    // prints
                                                    //  c
                                                    //  e
                                                    //  l
                                                    //  e
                                                    //  r
                                                    //  y
                                                    stringIterate( "hat" );
                                                    // prints
                                                    //  h
                                                    //  a
                                                    //  t
                                                    //--- -------------------------------------------------------------------------------->
                                                    //---------------------------------------(NEXT:)------------------------------------->
                                                    //--- -------------------------------------------------------------------------------->
                                                    // Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
                                                    // The function should return a new string consisting of the `str` repeated `num` number of times.
                                                    let stringRepeater = function ( str, num ) {
                                                      let repeatedStr = '';
                                                      for ( let i = 1; i <= num; i++ ) {
                                                        repeatedStr += str
                                                      }
                                                      return repeatedStr;
                                                    };
                                                    console.log( stringRepeater( "q", 4 ) ); // 'qqqq'
                                                    console.log( stringRepeater( "go", 2 ) ); // 'gogo'
                                                    console.log( stringRepeater( "tac", 3 ) ); // 'tactactac'
                                                    //--- -------------------------------------------------------------------------------->
                                                    //---------------------------------------(NEXT:)------------------------------------->
                                                    //--- -------------------------------------------------------------------------------->
                                                    // Write a function `stringSize` that accepts a string as an argument. The function should return the
                                                    // string 'small' if the argument is shorter than 5 characters, 'medium' if it is exactly 5 characters, and
                                                    // 'large' if it is longer than 5 characters.
                                                    let stringSize = function ( str ) {
                                                      if ( str.length < 5 ) {
                                                        return 'small';
                                                      } else if ( str.length > 5 ) {
                                                        return 'large';
                                                      } else {
                                                        return 'medium';
                                                      }
                                                    };
                                                    console.log( stringSize( "cat" ) ); // 'small'
                                                    console.log( stringSize( "bell" ) ); // 'small'
                                                    console.log( stringSize( "ready" ) ); // 'medium'
                                                    console.log( stringSize( "shirt" ) ); // 'medium'
                                                    console.log( stringSize( "shallow" ) ); // 'large'
                                                    console.log( stringSize( "intelligence" ) ); // 'large'
                                                    //--- -------------------------------------------------------------------------------->
                                                    //---------------------------------------(NEXT:)------------------------------------->
                                                    //--- -------------------------------------------------------------------------------->
                                                    // Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
                                                    // should return a new array containing the lengths of the elements of the original array.
                                                    let stringsToLengths = function ( words ) {
                                                        let lengths = [];
                                                        for ( let i = 0; i < words.length; {
                                                            lengths.push( words[ i ].length );
                                                          }
                                                          return lengths;
                                                        };
                                                        console.log( stringsToLengths( [ "belly", "echo", "irony", "pickled" ] ) );
                                                        // [5, 4, 5, 7]
                                                        console.log( stringsToLengths( [ "on", "off", "handmade" ] ) );
                                                        // [2, 3, 8]
                                                        //--- -------------------------------------------------------------------------------->
                                                        //---------------------------------------(NEXT:)------------------------------------->
                                                        //--- -------------------------------------------------------------------------------->
                                                        // Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
                                                        // return the total sum of all whole numbers from 1 to the max, inclusive.
                                                        //
                                                        // For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.
                                                        let sumUpTo = function ( max ) {
                                                          let sum = 0;
                                                          for ( let i = 1; i <= max; i++ ) {
                                                            sum += i
                                                          }
                                                          return sum;
                                                        };
                                                        console.log( sumUpTo( 4 ) ); // 10
                                                        console.log( sumUpTo( 5 ) ); // 15
                                                        console.log( sumUpTo( 2 ) ); // 3
                                                        console.log( 'coffee' );
                                                        let qty = 15 % 4;
                                                        console.log( qty ); // 3
                                                        let num = 38 + 3;
                                                        num++;
                                                        console.log( num + " is a great number" ); // '42 is a great number'
                                                        let isNumEven = num % 2 === 0;
                                                        console.log( num + " is even? " + isNumEven ); // '42 is even? true'
                                                        let isQtyEven = qty % 2 === 0;
                                                        console.log( qty + " is even? " + isQtyEven ); // '3 is even? false'
                                                        glet longStr = "AIICXAIBAAKBgQCuw0YyucjI9bf7yRhIkyg4Ru6kYU7O6fIn2JoFDzCZNkzDdsuXFGh6BXNvbu8uZUT289ERzYP1QjryMEKWzcbtsioyQApL7AgOZyFc3JJ7wvupHhIj2sqxJNtpAh7HQFG08rYh2Pb3HwOm83rbTomM6LnnjooGcoDeuWkuPqXsRlwIDAQABAoGAeQkbPBR5n9y2QLaEjcDGv7dVpFiMGHMaZZVDX34rZPy1EkZNZqlQU0jopLVvLyLESMh9A7gKhqoyMAbgZPpdb0CvniTJPpKYk24mLBeym8rBMW3XBmKk1xIOcJPGXMxeJW61jxPg6doah0aCIjf8n0Z8t8B81kLFojpECQQDzlCp0Nzka3AVZVPdBuuPg0fzeV8ugpiPEp6wQLjIMDFqYtGoAOEy4JpkmkK7zwsQsHZ8jbOtqIFdRLPrvAkEAruU321Ie1CnYCHX4Q79vLcDeWOUpdzEHp2uzDIfzP1gv7RIktGgSZWKhrnNWdeH4Y0CFb9lu6TQYJwNJvug2QJBANX0m3Uds9P9pLbQlI9WWmAtYqIZrsBElcAjOgAik0uOfawholNiw5B3ADvIYqPkLW4dGk1dO6zxW8ZF83MdMCQHGfhxLuFgsOBSfF7Bj4UX6T9FGhUGSXiqUsd06E2mMRLAjWUUUw82DLwucxMrSsV4z1aN57asC8YuQ9FkCQGirlVCt4ccXeGLCHcCsI8AYQJFRzbMs381M16jEpnaKUGrtdbMW018gWJ0EoD4tS2YZpr1hEbtiOkPJaaTKQ";
                                                        if ( longStr.indexOf( 'coDe' ) > -1 ) {
                                                          console.log( 'FOUND' );
                                                        } else {
                                                          console.log( 'NOT FOUND' );
                                                        }
                                                        //--- -------------------------------------------------------------------------------->
                                                        //---------------------------------------(NEXT:)------------------------------------->
                                                        //--- -------------------------------------------------------------------------------->
                                                        // Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
                                                        // the total product of all numbers in the array.
                                                        let totalProduct = function ( array ) {
                                                            let product = 1;
                                                            for ( let i = 0; i < array.length; {
                                                                let subarray = array[ i ];
                                                                for ( let j = 0; j < subarray.length; {
                                                                    product *= subarray[ j ];
                                                                  }
                                                                }
                                                                return product;
                                                              };
                                                              let array1 = [
                                                                [ 3, 5, 2 ],
                                                                [ 6, 2 ],
                                                              ]; console.log( totalProduct( array1 ) ); // 360
                                                              let array2 = [
                                                                [ 4, 6 ],
                                                                [ 2, 3 ],
                                                                [ 1, 2 ],
                                                              ]; console.log( totalProduct( array2 ) ); // 288
                                                              //--- -------------------------------------------------------------------------------->
                                                              //---------------------------------------(NEXT:)------------------------------------->
                                                              //--- -------------------------------------------------------------------------------->
                                                              // Write a function `total` that accepts an array of numbers as an argument. The function should return
                                                              // the total sum of all elements of the array.
                                                              let total = function ( numbers ) {
                                                                  let sum = 0;
                                                                  for ( let i = 0; i < numbers.length; {
                                                                      sum += numbers[ i ];
                                                                    }
                                                                    return sum;
                                                                  };
                                                                  console.log( total( [ 3, 2, 8 ] ) ); // 13
                                                                  console.log( total( [ -5, 7, 4, 6 ] ) ); // 12
                                                                  console.log( total( [ 7 ] ) ); // 7
                                                                  console.log( total( [] ) ); // 0
                                                                  let apple;
                                                                  console.log( apple ); // undefined
                                                                  apple = 5;
                                                                  console.log( apple ); // 5
                                                                  apple + 1;
                                                                  console.log( apple ); // 5
                                                                  apple += 1;
                                                                  console.log( apple ); // 6
                                                                  let banana = apple;
                                                                  console.log( banana ); // 6
                                                                  banana = banana / 2;
                                                                  console.log( banana ); // 3
                                                                  console.log( apple ); // 6
                                                                  //--- -------------------------------------------------------------------------------->
                                                                  //---------------------------------------(NEXT:)------------------------------------->
                                                                  //--- -------------------------------------------------------------------------------->
                                                                  // Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
                                                                  // as arguments. The function should return a 2D array containing all unique pairs of elements that
                                                                  // sum to the target.
                                                                  let twoSumPairs = function ( numbers, target ) {
                                                                      let pairs = [];
                                                                      for ( let i = 0; i < numbers.length; {
                                                                          let num1 = numbers[ i ];
                                                                          for ( let j = i + 1; j < numbers.length; {
                                                                              let num2 = numbers[ j ];
                                                                              if ( num1 + num2 === target ) {
                                                                                let pair = [ num1, num2 ];
                                                                                pairs.push( pair );
                                                                              }
                                                                            }
                                                                          }
                                                                          return pairs;
                                                                        }; console.log( twoSumPairs( [ 2, 3, 4, 6, 5 ], 8 ) ); // [ [2, 6], [3, 5] ]
                                                                        console.log( twoSumPairs( [ 10, 7, 4, 5, 2 ], 12 ) ); // [ [10, 2], [7, 5] ]
                                                                        console.log( twoSumPairs( [ 3, 9, 8 ], 11 ) ); // [ [3, 8] ]
                                                                        console.log( twoSumPairs( [ 3, 9, 8 ], 10 ) ); // [ ]
                                                                        //--- -------------------------------------------------------------------------------->
                                                                        //---------------------------------------(NEXT:)------------------------------------->
                                                                        //--- -------------------------------------------------------------------------------->
                                                                        // Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
                                                                        // as an argument. The function should return a boolean indicating whether or not there exists a pair
                                                                        // of distinct elements in the array that sum to the target.
                                                                        let twoSum = function ( numbers, target ) {
                                                                            for ( let i = 0; i < numbers.length; {
                                                                                for ( let j = i + 1; j < numbers.length; {
                                                                                    if ( numbers[ i ] + numbers[ j ] === target ) {
                                                                                      return true;
                                                                                    }
                                                                                  }
                                                                                }
                                                                                return false;
                                                                              }; console.log( twoSum( [ 2, 3, 5, 9 ], 7 ) ); // true
                                                                              console.log( twoSum( [ 2, 3, 5, 9 ], 4 ) ); // false
                                                                              console.log( twoSum( [ 6, 3, 4 ], 10 ) ); // true
                                                                              console.log( twoSum( [ 6, 5, 1 ], 10 ) ); // false
                                                                              // snippet 2-1
                                                                              let nonsense = "blog trust fund tattooed williamsburg poke roof party";
                                                                              let hasOk = nonsense.indexOf( "ok" ) > -1;
                                                                              if ( hasOk ) {
                                                                                console.log( "yeet" ); // prints
                                                                              } else if ( nonsense.length > 10 ) {
                                                                                console.log( "yo" );
                                                                              } else {
                                                                                console.log( "no" );
                                                                              }
                                                                              let hasZoo = nonsense.indexOf( "zoo" ) > -1;
                                                                              let hasFun = nonsense.indexOf( "fun" ) > -1;
                                                                              if ( hasZoo && hasOk ) {
                                                                                console.log( "cool" );
                                                                              } else if ( hasOk ) {
                                                                                console.log( "rad" ); // prints
                                                                              } else if ( hasFun ) {
                                                                                console.log( "dope" );
                                                                              } else {
                                                                                console.log( "nope" );
                                                                              }
                                                                              // snippet 2-2
                                                                              let q = 25;
                                                                              if ( q % 3 === 0 && q % 5 === 0 ) {
                                                                                console.log( "both" );
                                                                              } else if ( q % 3 === 0 || q % 5 == 0 ) {
                                                                                console.log( "either" ); // prints
                                                                              } else {
                                                                                console.log( "neither" );
                                                                              }
                                                                              let r = 9;
                                                                              if ( r % 3 === 0 && r % 5 === 0 ) {
                                                                                console.log( "both" );
                                                                              } else if ( r % 3 === 0 || r % 5 == 0 ) {
                                                                                console.log( "either" ); // prints
                                                                              } else {
                                                                                console.log( "neither" );
                                                                              }
                                                                              let s = 15;
                                                                              if ( s % 3 === 0 && s % 5 === 0 ) {
                                                                                console.log( "both" ); // prints
                                                                              } else if ( s % 3 === 0 || s % 5 == 0 ) {
                                                                                console.log( "either" );
                                                                              } else {
                                                                                console.log( "neither" );
                                                                              }
                                                                              //--- -------------------------------------------------------------------------------->
                                                                              //---------------------------------------(NEXT:)------------------------------------->
                                                                              //--- -------------------------------------------------------------------------------->
                                                                              // Write a function `wackyWord` that accepts two strings as arguments. The function should return a new
                                                                              // string containing the first three characters of the first string concatenated with the last two
                                                                              // character of the second string.
                                                                              // You can assume that the first argument has a length of at least three and the second argument has a
                                                                              // length of at least two.
                                                                              let wackyWord = function ( str1, str2 ) {
                                                                                return str1.slice( 0, 3 ) + str2.slice( -2 );
                                                                              }; console.log( wackyWord( "very", "kindly" ) ); // 'verly'
                                                                              console.log( wackyWord( "forever", "sick" ) ); // 'forck'
                                                                              console.log( wackyWord( "cellar", "door" ) ); // 'celor'
                                                                              console.log( wackyWord( "bagel", "sweep" ) ); // 'bagep'
                                                                              console.log( 'alvin' ); console.log( 'z' );
                                                                              //--- -------------------------------------------------------------------------------->
                                                                              //---------------------------------------(NEXT:)------------------------------------->
                                                                              //--- -------------------------------------------------------------------------------->
                                                                              // Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
                                                                              // `targetWords`. The function should return a count of the number of words of the sentence that are
                                                                              // in `targetWords`.
                                                                              let wordCount = function ( sentence, targetWords ) {
                                                                                  let words = sentence.split( ' ' );
                                                                                  let count = 0;
                                                                                  for ( let i = 0; i < words.length; {
                                                                                      let word = words[ i ];
                                                                                      if ( targetWords.includes( word ) ) {
                                                                                        count++;
                                                                                      }
                                                                                    }
                                                                                    return count;
                                                                                  };
                                                                                  console.log( wordCount( "open the window please", [ "please", "open", "sorry" ] ) ); // 2
                                                                                  console.log( wordCount( "drive to the cinema", [ "the", "driver" ] ) ); // 1
                                                                                  console.log( wordCount( "can I have that can", [ "can", "I" ] ) ); // 3
                                                                                  //--- -------------------------------------------------------------------------------->
                                                                                  //---------------------------------------(NEXT:)------------------------------------->
                                                                                  //--- -------------------------------------------------------------------------------->
                                                                                  // Write a function `yourAverageFunction` that accepts an array of numbers as an argument. The
                                                                                  // function should return the average of all elements of the array. If the input array is empty,
                                                                                  // then the function should return null.
                                                                                  let yourAverageFunction = function ( nums ) {
                                                                                      if ( nums.length === 0 ) {
                                                                                        return null;
                                                                                      }
                                                                                      let sum = 0;
                                                                                      for ( let i = 0; i < nums.length; {
                                                                                          sum += nums[ i ];
                                                                                        }
                                                                                        return sum / nums.length;
                                                                                      };
                                                                                      console.log( yourAverageFunction( [ 5, 2, 7, 24 ] ) ); // 9.5
                                                                                      console.log( yourAverageFunction( [ 100, 6 ] ) ); // 53
                                                                                      console.log( yourAverageFunction( [ 31, 32, 40, 12, 33 ] ) ); // 29.6
                                                                                      console.log( yourAverageFunction( [] ) ); // null
                                                                                      let location = "Brooklyn, " + "NY";
                                                                                      console.log( location ); // 'Brooklyn, NY'
                                                                                      let quantity = 4 * 5 + 1;
                                                                                      console.log( quantity ); // 21
                                                                                      g it // snippet 0-1
                                                                                      if ( true ) {
                                                                                        console.log( "foo" ); // prints
                                                                                      }
                                                                                      if ( false ) {
                                                                                        console.log( "bar" );
                                                                                      }
                                                                                      // snippet 0-2
                                                                                      if ( false || false ) {
                                                                                        console.log( "boop" );
                                                                                      }
                                                                                      if ( true || false ) {
                                                                                        console.log( "beep" ); // prints
                                                                                      }
                                                                                      // snippet 0-3
                                                                                      let num = 40;
                                                                                      if ( num > 0 ) {
                                                                                        console.log( "zip" ); // prints
                                                                                      }
                                                                                      if ( num % 2 === 0 ) {
                                                                                        console.log( "zoop" ); // prints
                                                                                      }
                                                                                      // snippet 0-4
                                                                                      let word = "jeep";
                                                                                      if ( word[ 0 ] === "d" ) {
                                                                                        console.log( "yer" );
                                                                                      } else {
                                                                                        console.log( "nah" ); // prints
                                                                                      }
                                                                                      // snippet 0-5
                                                                                      let sentence = "roger that";
                                                                                      if ( sentence[ sentence.length - 1 ] === "t" ) {
                                                                                        console.log( "ends in t" ); // prints
                                                                                      } else {
                                                                                        console.log( "does not end in t" );
                                                                                      }
                                                                                      if ( sentence.length <= 4 ) {
                                                                                        console.log( "short" );
                                                                                      } else {
                                                                                        console.log( "long" ); // prints
                                                                                      }
                                                                                      //--- -------------------------------------------------------------------------------->
                                                                                      //---------------------------------------(NEXT:)------------------------------------->
                                                                                      //--- -------------------------------------------------------------------------------->
                                                                                      // Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
                                                                                      // array containing pairs of elements at the same indices.
                                                                                      let zipper = function ( arr1, arr2 ) {
                                                                                          let result = [];
                                                                                          for ( let i = 0; i < arr1.length; {
                                                                                              let el1 = arr1[ i ];
                                                                                              let el2 = arr2[ i ];
                                                                                              let pair = [ el1, el2 ];
                                                                                              result.push( pair );
                                                                                            }
                                                                                            return result;
                                                                                          };
                                                                                          let array1 = [ "a", "b", "c", "d" ];
                                                                                          let array2 = [ -1, -2, -3, -4 ];
                                                                                          console.log( zipper( array1, array2 ) );
                                                                                          // [
                                                                                          //   ['a', -1],
                                                                                          //   ['b', -2],
                                                                                          //   ['c', -3],
                                                                                          //   ['d', -4],
                                                                                          // ]
                                                                                          let array3 = [ "whisper", "talk", "shout" ];
                                                                                          let array4 = [ "quiet", "normal", "loud" ];
                                                                                          console.log( zipper( array3, array4 ) );
                                                                                          // [
                                                                                          //   ['whisper', 'quiet'],
                                                                                          //   ['talk', 'normal'],
                                                                                          //   ['shout', 'loud'],
                                                                                          // ]
                                                                                          let str = 'MIICWwIBAAKBgGEdLjFEFbegPZ2AwJWkalksXr7PzWL7wIc7pOFZxXwYPWtQxvANyceCwpkqbPLsfEx7nqxAris2hYOdeN1OTFqvTyNmVuzbUPcXShn6ZoDCB30voHkeu4F3cUw5RQEUDdLscSnv4HMxHam5qgl6vXoumVNHbjyKA5UtAnfjAgMBAAECgYAmjEyvpZTxRJvwjxDi1VaZevFI0Hd4WPH9PAGgqdnH84vGXnAGFj1WikqKYcqKMQW2kdjAsWwH9D9FfrkIcDDHdZ9XuGSGkFzWtOwajWMQl7qNV1hZ288gdpIQQMOTLDgauZY6pw1cV7h4v316qJB8knQGoBNpJCfTYQJBAKV1ctsJq0Zg4QumD2hyODepP3LfLeaQsERLqVAWeuOuTY5mK5gIwsSqvcSVfY7Ze1FWIsApNFRv67azKcJPwsCQQCNlyApZFJEVNY70Er7Uu5NL9t4CYJJC9uVVkoEHEY6d7sVslqa0vP2q0zXx9YedbMBvQjxXIbY0waXUy63FvoBGJAkB3OTJWUjVgzDY1Br5wu2Yu59NjKVKLWzCsu1gaCNBfhVDX7SyIyC9EYKRfUAoQxwsmPWPyQ9QVG4WKcPZJAkBRheAotPCBE2RLHHfvpiStnMhX0UXdVyaJp5tcZ6wYV61ohyBvCOkYhUxBJzeIGrVZcvLZSLeUzXoqRPpxQxAkEAkdCZXF0gHahpZgF5y0wWcqf9ECRT1E4Hv8bk3Mf0Exp2aW34JeI6I7Xqd1NV4I9H7prQ8m3y39lFwWO8PmQ';

                                                                                          console.log( str.indexOf( 'HEY' ) );
                                                                                          console.log( 0 );
                                                                                          // Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
                                                                                          // return the sentence where words alternate between lowercase and uppercase.

                                                                                          let alternatingCaps = function ( sentence ) {
                                                                                            let words = sentence.split( ' ' );
                                                                                            let newWords = [];

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              let word = words[ i ];
                                                                                              if ( i % 2 === 0 ) {
                                                                                                newWords.push( word.toLowerCase() );
                                                                                              } else {
                                                                                                newWords.push( word.toUpperCase() );
                                                                                              }
                                                                                            }

                                                                                            return newWords.join( ' ' );
                                                                                          };

                                                                                          console.log( alternatingCaps( "take them to school" ) ); // 'take THEM to SCHOOL'
                                                                                          console.log( alternatingCaps( "What did ThEy EAT before?" ) ); // 'what DID they EAT before?'
                                                                                          //APPEND-DIR.js
                                                                                          const fs = require( 'fs' );
                                                                                          let cat = require( 'child_process' ).execSync( 'cat *' ).toString( 'UTF-8' );

                                                                                          fs.writeFile( 'output.md', cat, ( err ) => {
                                                                                            if ( err ) throw err;
                                                                                          } );
                                                                                          git // Write a function `averageOfFour(num1, num2, num3, num4)` that accepts four numbers as arguments. The
                                                                                          // function should return the average of all four numbers.

                                                                                          let averageOfFour = function ( num1, num2, num3, num4 ) {
                                                                                            let sum = num1 + num2 + num3 + num4;
                                                                                            return sum / 4;
                                                                                          };

                                                                                          console.log( averageOfFour( 10, 4, 12, 3 ) ); // 7.25
                                                                                          console.log( averageOfFour( -20, 50, 4, 21 ) ); // 13.75
                                                                                          console.log( averageOfFour( 10, 4, 12, 3 ) ); // 7.25
                                                                                          console.log( averageOfFour( 5, 5, 3, 7 ) ); // 5
                                                                                          // Write a function `average` that accepts three numbers as arguments. The function should return the
                                                                                          // average of the three numbers.

                                                                                          let average = function ( num1, num2, num3 ) {
                                                                                            return ( num1 + num2 + num3 ) / 3;
                                                                                          };

                                                                                          console.log( average( 3, 10, 8 ) ); // 7
                                                                                          console.log( average( 10, 5, 12 ) ); // 9
                                                                                          console.log( average( 6, 20, 40 ) ); // 22
                                                                                          // Write a function `bleepVowels` that accepts a string as an argument. The function should return
                                                                                          // a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

                                                                                          let bleepVowels = function ( str ) {
                                                                                            let vowels = [ "a", "e", "i", "o", "u" ];
                                                                                            let bleeped = "";

                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];

                                                                                              if ( vowels.indexOf( char ) > -1 ) {
                                                                                                bleeped += "*";
                                                                                              } else {
                                                                                                bleeped += char;
                                                                                              }
                                                                                            }

                                                                                            return bleeped;
                                                                                          };

                                                                                          console.log( bleepVowels( "skateboard" ) ); // 'sk*t*b**rd'
                                                                                          console.log( bleepVowels( "slipper" ) ); // 'sl*pp*r'
                                                                                          console.log( bleepVowels( "range" ) ); // 'r*ng*'
                                                                                          console.log( bleepVowels( "brisk morning" ) ); // 'br*sk m*rn*ng'
                                                                                          console.log( false ); // false
                                                                                          console.log( !true ); // false
                                                                                          console.log( !false ); // true
                                                                                          console.log( !!true ); // true

                                                                                          console.log( false && false ); // false
                                                                                          console.log( false && true ); // false
                                                                                          console.log( true && false ); // false
                                                                                          console.log( true && true ); // true

                                                                                          console.log( false || false ); // false
                                                                                          console.log( false || true ); // true
                                                                                          console.log( true || false ); // true
                                                                                          console.log( true || true ); // true

                                                                                          console.log( !false || false ); // true
                                                                                          console.log( false || ( true && true ) ); // true
                                                                                          console.log( false || !( true && true ) ); // false
                                                                                          console.log( !true && ( true ) ); // false
                                                                                          // Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
                                                                                          // return the uppercase version of the string if the boolean is true. The function should return the
                                                                                          // lowercase version of the string if the boolean is false.

                                                                                          let caseChange = function ( str, shouldUpperCase ) {
                                                                                            if ( shouldUpperCase ) {
                                                                                              return str.toUpperCase();
                                                                                            } else {
                                                                                              return str.toLowerCase();
                                                                                            }
                                                                                          };

                                                                                          console.log( caseChange( "Super", true ) ); // 'SUPER'
                                                                                          console.log( caseChange( "Super", false ) ); // 'super'
                                                                                          console.log( caseChange( "tAmBourine", true ) ); // 'TAMBOURINE'
                                                                                          console.log( caseChange( "tAmBourine", false ) ); // 'tambourine'
                                                                                          // Write a function `censorE` that accepts a string as an argument. The function should return the a new
                                                                                          // version of string where all characters that are 'e's are replaced with '*'s.

                                                                                          let censorE = function ( str ) {
                                                                                            let newStr = '';

                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];

                                                                                              if ( char === 'e' ) {
                                                                                                newStr += '*';
                                                                                              } else {
                                                                                                newStr += char;
                                                                                              }
                                                                                            }

                                                                                            return newStr;
                                                                                          };

                                                                                          console.log( censorE( "speedy" ) ); // 'sp**dy'
                                                                                          console.log( censorE( "pending" ) ); // 'p*nding'
                                                                                          console.log( censorE( "scene" ) ); // 'sc*n*'
                                                                                          console.log( censorE( "heat" ) ); // 'h*at'
                                                                                          // Write a function `chooseDivisibles(numbers, target)` that accepts an array of numbers and a
                                                                                          // target number as arguments. The function should return an array containing elements of the original
                                                                                          // array that are divisible by the target.

                                                                                          let chooseDivisibles = function ( numbers, target ) {
                                                                                            let divisibles = [];

                                                                                            for ( let i = 0; i < numbers.length; i++ ) {
                                                                                              let num = numbers[ i ];

                                                                                              if ( num % target === 0 ) {
                                                                                                divisibles.push( num );
                                                                                              }
                                                                                            }

                                                                                            return divisibles;
                                                                                          };

                                                                                          console.log( chooseDivisibles( [ 40, 7, 22, 20, 24 ], 4 ) ); // [40, 20, 24]
                                                                                          console.log( chooseDivisibles( [ 9, 33, 8, 17 ], 3 ) ); // [9, 33]
                                                                                          console.log( chooseDivisibles( [ 4, 25, 1000 ], 10 ) ); // [1000]
                                                                                          // Write a function `commonElements` that accepts two arrays as arguments. The function should return
                                                                                          // a new array containing the elements that are found in both of the input arrays. The order of
                                                                                          // the elements in the output array doesn't matter as long as the function returns the correct elements.

                                                                                          let commonElements = function ( array1, array2 ) {
                                                                                            let common = [];

                                                                                            for ( let i = 0; i < array1.length; i++ ) {
                                                                                              let ele = array1[ i ];

                                                                                              if ( array2.includes( ele ) ) {
                                                                                                common.push( ele );
                                                                                              }
                                                                                            }

                                                                                            return common;
                                                                                          };

                                                                                          let arr1 = [ "a", "c", "d", "b" ];
                                                                                          let arr2 = [ "b", "a", "y" ];
                                                                                          console.log( commonElements( arr1, arr2 ) ); // ['a', 'b']

                                                                                          let arr3 = [ 4, 7 ];
                                                                                          let arr4 = [ 32, 7, 1, 4 ];
                                                                                          console.log( commonElements( arr3, arr4 ) ); // [4, 7]
                                                                                          console.log( true === false ); // false
                                                                                          console.log( false === false ); // true
                                                                                          console.log( false !== true ); // true
                                                                                          console.log( !true === false ); // true

                                                                                          console.log( 2 + 3 === 5 ); // true
                                                                                          console.log( 4 < 0 ); // false
                                                                                          console.log( 10 >= 10 ); // true
                                                                                          console.log( 10.3 >= 10 ); // true

                                                                                          console.log( 100 / 2 === 50 ); // true
                                                                                          console.log( 100 % 2 === 0 ); // true
                                                                                          console.log( 11 % 2 === 0 ); // false
                                                                                          console.log( 7.0 === 7 ); // true

                                                                                          console.log( 13 % 5 > 0 ); // true
                                                                                          console.log( "potato" === "potato" ); // true
                                                                                          console.log( "Tomato" === "tomato" ); // false
                                                                                          console.log( "42" === 42 ); // false
                                                                                          console.log( 5 > 3 && 1 === 0 ); // false
                                                                                          t // Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
                                                                                          // return a boolean indicating whether or not `str2` is contained within `str1`. The function should
                                                                                          // ignore any differences in capitalization.

                                                                                          let contains = function ( str1, str2 ) {
                                                                                            let lowerStr1 = str1.toLowerCase();
                                                                                            let lowerStr2 = str2.toLowerCase();
                                                                                            return lowerStr1.indexOf( lowerStr2 ) > -1;
                                                                                          };

                                                                                          console.log( contains( "caterpillar", "pill" ) ); // true
                                                                                          console.log( contains( "lion's share", "on" ) ); // true
                                                                                          console.log( contains( "SORRY", "or" ) ); // true
                                                                                          console.log( contains( "tangent", "gem" ) ); // false
                                                                                          console.log( contains( "clock", "ok" ) ); // false
                                                                                          // Write a function `countUp(max)` that accepts a max number as an argument. The function should print
                                                                                          // all numbers from 1 up to and including the max. The function doesn't need to return any value. It
                                                                                          // should just print to the terminal.

                                                                                          let countUp = function ( max ) {
                                                                                            for ( let i = 1; i <= max; i++ ) {
                                                                                              console.log( i );
                                                                                            }
                                                                                          };

                                                                                          countUp( 5 );
                                                                                          // prints
                                                                                          //  1
                                                                                          //  2
                                                                                          //  3
                                                                                          //  4
                                                                                          //  5

                                                                                          countUp( 3 );
                                                                                          // prints
                                                                                          //  1
                                                                                          //  2
                                                                                          //  3
                                                                                          let phrase = "that's all folks";
                                                                                          console.log( phrase[ phrase.length ] ); // undefined
                                                                                          console.log( phrase[ phrase.length - 1 ] ); // s
                                                                                          console.log( phrase[ phrase.length - 2 ] ); // k

                                                                                          const i = 9;
                                                                                          const char = phrase[ i ];
                                                                                          console.log( char ); // l
                                                                                          console.log( phrase.indexOf( char ) ); // 8
                                                                                          console.log( phrase.slice( 2, 8 ) ); // at's a

                                                                                          console.log( "abcdefg".slice( 1, 3 ) ); // bc
                                                                                          console.log( "abcdefg".slice( 2 ) ); // cdefg
                                                                                          console.log( "abcdefg".slice( 4 ) ); // efg


                                                                                          console.log( "abcdefg".slice( 2, -1 ) ); // cdef
                                                                                          console.log( "abcdefg".slice( 2, -2 ) ); // cde
                                                                                          // Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments. 
                                                                                          // The function should print out all positive numbers less than max that are divisible by num1 or num2. 
                                                                                          // The function doesn't need to return any value. It should just print to the terminal.

                                                                                          let divByEither = function ( num1, num2, max ) {
                                                                                            for ( let i = 1; i < max; i++ ) {
                                                                                              if ( i % num1 === 0 || i % num2 === 0 ) {
                                                                                                console.log( i );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          divByEither( 4, 3, 16 );
                                                                                          // prints
                                                                                          //  3
                                                                                          //  4
                                                                                          //  6
                                                                                          //  8
                                                                                          //  9
                                                                                          //  12
                                                                                          //  15

                                                                                          divByEither( 7, 5, 20 );
                                                                                          // prints
                                                                                          //  5
                                                                                          //  7
                                                                                          //  10
                                                                                          //  14
                                                                                          //  15
                                                                                          // Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments. The
                                                                                          // function should print all numbers between `min` and `max` (exclusive) that are also divisible by
                                                                                          // num.

                                                                                          let divisibleRange = function ( min, max, num ) {
                                                                                            for ( let i = min + 1; i < max; i++ ) {
                                                                                              if ( i % num === 0 ) {
                                                                                                console.log( i );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          divisibleRange( 17, 40, 9 );
                                                                                          // prints
                                                                                          //  18
                                                                                          //  27
                                                                                          //  36

                                                                                          divisibleRange( 10, 24, 4 );
                                                                                          // prints
                                                                                          //  12
                                                                                          //  16
                                                                                          //  20
                                                                                          // Write a function `divisible(num1, num2)` that accepts two numbers as arguments. The function should
                                                                                          // return a boolean indicating whether or not `num1` is divisible by `num2`.

                                                                                          let divisible = function ( num1, num2 ) {
                                                                                            return num1 % num2 === 0;
                                                                                          };

                                                                                          // let divisible = function (num1, num2) {
                                                                                          //   if (num1 % num2 === 0) {
                                                                                          //     return true;
                                                                                          //   } else {
                                                                                          //     return false;
                                                                                          //   }
                                                                                          // };

                                                                                          console.log( divisible( 12, 3 ) ); // true
                                                                                          console.log( divisible( 12, 5 ) ); // false
                                                                                          console.log( divisible( 60, 4 ) ); // true
                                                                                          console.log( divisible( 60, 11 ) ); // false
                                                                                          console.log( divisible( 21, 7 ) ); // true
                                                                                          console.log( divisible( 21, 6 ) ); // false
                                                                                          // Write a function `divisors` that accepts a number as an argument. The function should return an
                                                                                          // array containing all positive numbers that can divide into the argument.

                                                                                          let divisors = function ( n ) {
                                                                                            let numbers = [];

                                                                                            for ( let i = 1; i <= n; i++ ) {
                                                                                              if ( n % i === 0 ) {
                                                                                                numbers.push( i );
                                                                                              }
                                                                                            }

                                                                                            return numbers;
                                                                                          };

                                                                                          console.log( divisors( 15 ) ); // [1, 3, 5, 15]
                                                                                          console.log( divisors( 7 ) ); // [1, 7]
                                                                                          console.log( divisors( 24 ) ); // [1, 2, 3, 4, 6, 8, 12, 24]
                                                                                          g // Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
                                                                                          // whether or not the string ends in the substring 'ly'.

                                                                                          let endsInLy = function ( str ) {
                                                                                            let secondLast = str[ str.length - 2 ];
                                                                                            let last = str[ str.length - 1 ];

                                                                                            return secondLast === 'l' && last === 'y';
                                                                                          };

                                                                                          // let endsInLy = function (str) {
                                                                                          //   return str.endsWith('ly');
                                                                                          // };

                                                                                          console.log( endsInLy( "pretty" ) ); // false
                                                                                          console.log( endsInLy( "instant" ) ); // false
                                                                                          console.log( endsInLy( "analytic" ) ); // false
                                                                                          console.log( endsInLy( "timidly" ) ); // true
                                                                                          console.log( endsInLy( "fly" ) ); // true
                                                                                          console.log( endsInLy( "gallantly" ) ); // true
                                                                                          // Write a function `endsWithT` that accepts a string as an argument. The function should return a
                                                                                          // boolean indicating whether or not the string ends with the character 't'.

                                                                                          let endsWithT = function ( str ) {
                                                                                            let lastChar = str[ str.length - 1 ];
                                                                                            return lastChar === 't';
                                                                                          };


                                                                                          console.log( endsWithT( "smart" ) ); // true
                                                                                          console.log( endsWithT( "racket" ) ); // true
                                                                                          console.log( endsWithT( "taco" ) ); // false
                                                                                          console.log( endsWithT( "boomerang" ) ); // false
                                                                                          // Write a function `evens(max)` that accepts a max number as an argument. The function should print
                                                                                          // all positive even numbers that are less than the max.

                                                                                          let evens = function ( max ) {
                                                                                            for ( let i = 1; i < max; i++ ) {
                                                                                              if ( i % 2 === 0 ) {
                                                                                                console.log( i );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          evens( 11 );
                                                                                          // prints
                                                                                          //  2
                                                                                          //  4
                                                                                          //  6
                                                                                          //  8
                                                                                          //  10

                                                                                          evens( 8 );
                                                                                          // prints
                                                                                          //  2
                                                                                          //  4
                                                                                          //  6
                                                                                          // Write a function `filterLongWords` that accepts an array of strings as an argument. The function
                                                                                          // should return a new array containing only the strings that are less than 5 characters long.

                                                                                          let filterLongWords = function ( words ) {
                                                                                            let chosenWords = [];

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              let word = words[ i ];

                                                                                              if ( word.length < 5 ) {
                                                                                                chosenWords.push( word );
                                                                                              }
                                                                                            }

                                                                                            return chosenWords;
                                                                                          };

                                                                                          console.log( filterLongWords( [ "kale", "cat", "retro", "axe", "heirloom" ] ) );
                                                                                          // ['kale', 'cat', 'axe']

                                                                                          console.log( filterLongWords( [ "disrupt", "pour", "trade", "pic" ] ) );
                                                                                          // ['pour', 'pic']
                                                                                          // Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
                                                                                          // print out the first five multiples of the given number. The function doesn't need to return any
                                                                                          // value. It should just print to the terminal.

                                                                                          let fiveMultiplesOf = function ( num ) {
                                                                                            for ( let i = 1; i <= 5; i++ ) {
                                                                                              console.log( i * num );
                                                                                            }
                                                                                          };

                                                                                          fiveMultiplesOf( 7 );
                                                                                          // prints
                                                                                          //  7
                                                                                          //  14
                                                                                          //  21
                                                                                          //  28
                                                                                          //  35

                                                                                          fiveMultiplesOf( 3 );
                                                                                          // prints
                                                                                          //  3
                                                                                          //  6
                                                                                          //  9
                                                                                          //  12
                                                                                          //  15
                                                                                          // Write a function `fizzBuzz` that accepts a max number as an argument. The function should
                                                                                          // print all numbers less than or equal to max that are divisible by either 3 or 5 but not both 3
                                                                                          // and 5. The function doesn't need to return any value. It should just print to the terminal.

                                                                                          let fizzBuzz = function ( max ) {
                                                                                            for ( let i = 1; i <= max; i++ ) {
                                                                                              if ( ( i % 3 === 0 || i % 5 === 0 ) && !( i % 3 === 0 && i % 5 === 0 ) ) {
                                                                                                console.log( i );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          fizzBuzz( 18 );
                                                                                          // prints
                                                                                          //  3
                                                                                          //  5
                                                                                          //  6
                                                                                          //  9
                                                                                          //  10
                                                                                          //  12
                                                                                          //  18

                                                                                          fizzBuzz( 33 );
                                                                                          // prints
                                                                                          //  3
                                                                                          //  5
                                                                                          //  6
                                                                                          //  9
                                                                                          //  10
                                                                                          //  12
                                                                                          //  18
                                                                                          //  20
                                                                                          //  21
                                                                                          //  24
                                                                                          //  25
                                                                                          //  27
                                                                                          //  33
                                                                                          let movie = 'Fight Club';

                                                                                          let views = 4;

                                                                                          console.log( 'I watched ' + movie + ' about ' + views + ' number of times' );
                                                                                          // Write a function `funnySound` that accepts two strings as arguments. The function should return a
                                                                                          // new string containing the first three characters of both strings concatenated together.

                                                                                          // You can assume that the arguments are both at least three characters long.

                                                                                          let funnySound = function ( str1, str2 ) {
                                                                                            return str1.slice( 0, 3 ) + str2.slice( 0, 3 );
                                                                                          };

                                                                                          console.log( funnySound( "tiger", "spoon" ) ); // 'tigspo'
                                                                                          console.log( funnySound( "computer", "phone" ) ); // 'compho'
                                                                                          console.log( funnySound( "skate", "bottle" ) ); // 'skabot'
                                                                                          console.log( funnySound( "frog", "ashtray" ) ); // 'froash'
                                                                                          console.log( 'hello world' );
                                                                                          // Write a function `half` that accepts a number as an argument. The function should return half of the
                                                                                          // number.

                                                                                          let half = function ( n ) {
                                                                                            return n / 2;
                                                                                          };

                                                                                          console.log( half( 8 ) ); // 4
                                                                                          console.log( half( 15 ) ); // 7.5
                                                                                          console.log( half( 90 ) ); // 45
                                                                                          gi // Write a function `inRange(min, max, n)` that accepts three numbers as arguments. The function should
                                                                                          // return a boolean indicating if `n` is between `min` and `max` inclusive.

                                                                                          let inRange = function ( min, max, n ) {
                                                                                            return n >= min && n <= max;
                                                                                          };

                                                                                          console.log( inRange( 5, 13, 8 ) ); // true
                                                                                          console.log( inRange( 5, 13, 29 ) ); // false
                                                                                          console.log( inRange( 100, 125, 100 ) ); // true
                                                                                          console.log( inRange( 100, 125, 99 ) ); // false
                                                                                          console.log( inRange( 40, 45, 44 ) ); // true
                                                                                          console.log( inRange( 40, 45, 45 ) ); // true
                                                                                          console.log( inRange( 40, 45, 46 ) ); // false
                                                                                          // Write a function `isDivBy4` that accepts a number as an argument. The function should return a
                                                                                          // boolean indicating whether or not the number is divisible by 4.

                                                                                          let isDivBy4 = function ( num ) {
                                                                                            if ( num % 4 === 0 ) {
                                                                                              return true;
                                                                                            } else {
                                                                                              return false;
                                                                                            }
                                                                                          };

                                                                                          // let isDivBy4 = function (num) {
                                                                                          //   return num % 4 === 0;
                                                                                          // };

                                                                                          console.log( isDivBy4( 8 ) ); // true
                                                                                          console.log( isDivBy4( 12 ) ); // true
                                                                                          console.log( isDivBy4( 24 ) ); // true
                                                                                          console.log( isDivBy4( 9 ) ); // false
                                                                                          console.log( isDivBy4( 10 ) ); // false
                                                                                          // Write a function `isLong` that accepts a string as an argument. The function should return a boolean
                                                                                          // indicating whether or not the string is longer than 5 characters

                                                                                          let isLong = function ( str ) {
                                                                                            return str.length > 5;
                                                                                          };

                                                                                          // let isLong = function (str) {
                                                                                          //   if (str.length > 5) {
                                                                                          //     return true;
                                                                                          //   } else {
                                                                                          //     return false;
                                                                                          //   }
                                                                                          // };

                                                                                          console.log( isLong( "pie" ) ); // false
                                                                                          console.log( isLong( "kite" ) ); // false
                                                                                          console.log( isLong( "kitty" ) ); // false
                                                                                          console.log( isLong( "telescope" ) ); // true
                                                                                          console.log( isLong( "thermometer" ) ); // true
                                                                                          console.log( isLong( "restaurant" ) ); // true
                                                                                          // Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
                                                                                          // lowercase version of the string with 3 periods added to the end of it.

                                                                                          let keepItQuiet = function ( str ) {
                                                                                            return str.toLowerCase() + '...';
                                                                                          };

                                                                                          console.log( keepItQuiet( "HOORAY" ) ); // 'hooray...'
                                                                                          console.log( keepItQuiet( "Doggo" ) ); // 'doggo...'
                                                                                          console.log( keepItQuiet( "WHAT?!?!" ) ); // 'what?!?!...'
                                                                                          // Write a function `larger` that accepts two numbers as arguments. The function should return the
                                                                                          // larger number.

                                                                                          let larger = function ( num1, num2 ) {
                                                                                            if ( num1 > num2 ) {
                                                                                              return num1;
                                                                                            } else {
                                                                                              return num2;
                                                                                            }
                                                                                          };

                                                                                          console.log( larger( 256, 400 ) ); // 400
                                                                                          console.log( larger( 31, 4 ) ); // 31
                                                                                          console.log( larger( -6, 7 ) ); // 7
                                                                                          console.log( larger( 11.3, 11.2 ) ); // 11.3
                                                                                          console.log( larger( -10, -3 ) ); // -3
                                                                                          // Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
                                                                                          // return the longest word of the sentence. If there is a tie, return the word that appears later 
                                                                                          // in the sentence.

                                                                                          let lengthiestWord = function ( sentence ) {
                                                                                            let words = sentence.split( ' ' );
                                                                                            let longest = words[ 0 ]; // pretty

                                                                                            for ( let i = 1; i < words.length; i++ ) {
                                                                                              let word = words[ i ];
                                                                                              if ( word.length >= longest.length ) {
                                                                                                longest = word;
                                                                                              }
                                                                                            }

                                                                                            return longest;
                                                                                          };


                                                                                          console.log( lengthiestWord( "I am pretty hungry" ) ); // 'hungry'
                                                                                          console.log( lengthiestWord( "we should think outside of the box" ) ); // 'outside'
                                                                                          console.log( lengthiestWord( "down the rabbit hole" ) ); // 'rabbit'
                                                                                          console.log( lengthiestWord( "simmer down" ) ); // 'simmer'
                                                                                          // Write a function `longer` that accepts two strings as arguments. The function should return the
                                                                                          // string that is longer. If the strings have the same length, then return the first string.

                                                                                          let longer = function ( str1, str2 ) {
                                                                                            if ( str1.length >= str2.length ) {
                                                                                              return str1;
                                                                                            } else {
                                                                                              return str2;
                                                                                            }
                                                                                          };

                                                                                          console.log( longer( "drum", "piranha" ) ); // 'piranha'
                                                                                          console.log( longer( "basket", "fork" ) ); // 'basket'
                                                                                          console.log( longer( "flannel", "sustainable" ) ); // 'sustainable'
                                                                                          console.log( longer( "disrupt", "ability" ) ); // 'disrupt'
                                                                                          console.log( longer( "bird", "shoe" ) ); // 'bird'
                                                                                          // Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
                                                                                          // return a string containing the first character of each word in the sentence.

                                                                                          let makeAcronym = function ( sentence ) {
                                                                                            let words = sentence.split( ' ' );
                                                                                            let acronym = '';

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              let word = words[ i ];
                                                                                              acronym += word[ 0 ];
                                                                                            }

                                                                                            return acronym.toUpperCase();
                                                                                          };

                                                                                          console.log( makeAcronym( "New York" ) ); // NY
                                                                                          console.log( makeAcronym( "same stuff different day" ) ); // SSDD
                                                                                          console.log( makeAcronym( "Laugh out loud" ) ); // LOL
                                                                                          console.log( makeAcronym( "don't over think stuff" ) ); // DOTS
                                                                                          // Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
                                                                                          // a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

                                                                                          let makeMatrix = function ( m, n, value ) {
                                                                                            let matrix = [];

                                                                                            for ( let i = 0; i < m; i++ ) {
                                                                                              let row = [];

                                                                                              for ( let j = 0; j < n; j++ ) {
                                                                                                row.push( value );
                                                                                              }

                                                                                              matrix.push( row );
                                                                                            }


                                                                                            return matrix;
                                                                                          };

                                                                                          console.log( makeMatrix( 3, 5, null ) );
                                                                                          // [
                                                                                          //   [ null, null, null, null, null ],
                                                                                          //   [ null, null, null, null, null ],
                                                                                          //   [ null, null, null, null, null ]
                                                                                          // ]

                                                                                          console.log( makeMatrix( 4, 2, "x" ) );
                                                                                          // [
                                                                                          //   [ 'x', 'x' ],
                                                                                          //   [ 'x', 'x' ],
                                                                                          //   [ 'x', 'x' ],
                                                                                          //   [ 'x', 'x' ]
                                                                                          // ]

                                                                                          console.log( makeMatrix( 2, 2, 0 ) );
                                                                                          // [
                                                                                          //   [ 0, 0 ],
                                                                                          //   [ 0, 0 ]
                                                                                          // ]
                                                                                          // Write a function `maximum` that accepts an array of numbers as an argument. The function should 
                                                                                          // return the largest number of the array. If the array is empty, then the function should return null.

                                                                                          let maximum = function ( numbers ) {
                                                                                            if ( numbers.length === 0 ) {
                                                                                              return null;
                                                                                            }

                                                                                            let currentMax = numbers[ 0 ];
                                                                                            for ( let i = 1; i < numbers.length; i++ ) {
                                                                                              if ( numbers[ i ] > currentMax ) {
                                                                                                currentMax = numbers[ i ];
                                                                                              }
                                                                                            }

                                                                                            return currentMax;
                                                                                          };

                                                                                          console.log( maximum( [ 5, 6, 3, 7 ] ) ); // 7
                                                                                          console.log( maximum( [ 17, 15, 19, 11, 2 ] ) ); // 19
                                                                                          console.log( maximum( [] ) ); // null
                                                                                          // Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
                                                                                          // print all numbers from min to max inclusive. The function doesn't need to return any value. It
                                                                                          // should just print to the terminal.


                                                                                          let minToMax = function ( min, max ) {
                                                                                            for ( let i = min; i <= max; i++ ) {
                                                                                              console.log( i );
                                                                                            }
                                                                                          };

                                                                                          minToMax( 5, 9 );
                                                                                          // prints
                                                                                          //  5
                                                                                          //  6
                                                                                          //  7
                                                                                          //  8
                                                                                          //  9

                                                                                          minToMax( 11, 13 );
                                                                                          // prints
                                                                                          //  11
                                                                                          //  12
                                                                                          //  13
                                                                                          // Write a function named `noOhs` that accepts a string as an argument. The functions should print the
                                                                                          // characters of the string one by one except the character 'o'. The function doesn't need to return
                                                                                          // any value. It should just print to the terminal.

                                                                                          let noOhs = function ( str ) {
                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];
                                                                                              if ( char !== 'o' ) {
                                                                                                console.log( char );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          noOhs( "code" );
                                                                                          // prints
                                                                                          //  c
                                                                                          //  d
                                                                                          //  e

                                                                                          noOhs( "school" );
                                                                                          // prints
                                                                                          //  s
                                                                                          //  c
                                                                                          //  h
                                                                                          //  l
                                                                                          // Write a function `numOdds` that accepts an array of numbers as an argument. The function should
                                                                                          // return a number representing the count of odd elements in the array.

                                                                                          let numOdds = function ( numbers ) {
                                                                                            let count = 0;

                                                                                            for ( let i = 0; i < numbers.length; i++ ) {
                                                                                              if ( numbers[ i ] % 2 === 1 ) {
                                                                                                count += 1;
                                                                                              }
                                                                                            }

                                                                                            return count;
                                                                                          };

                                                                                          console.log( numOdds( [ 4, 7, 2, 5, 9 ] ) ); // 3
                                                                                          console.log( numOdds( [ 11, 31, 58, 99, 21, 60 ] ) ); // 4
                                                                                          console.log( numOdds( [ 100, 40, 4 ] ) ); // 0
                                                                                          // Write a function `numberChange` that accepts a number as an argument. The function should return
                                                                                          // half the number if it is even. The function should return double the number if it is odd.

                                                                                          let numberChange = function ( n ) {
                                                                                            if ( n % 2 === 0 ) {
                                                                                              return n / 2;
                                                                                            } else {
                                                                                              return n * 2;
                                                                                            }
                                                                                          };

                                                                                          console.log( numberChange( 6 ) ); // 3
                                                                                          console.log( numberChange( 7 ) ); // 14
                                                                                          console.log( numberChange( 16 ) ); // 8
                                                                                          console.log( numberChange( 21 ) ); // 42
                                                                                          console.log( 2 + 3 ); // 5
                                                                                          console.log( 10 - 15 ); // -5
                                                                                          console.log( 4 + 1 - 5 ); // 0
                                                                                          console.log( 4 * 3 ); // 12

                                                                                          console.log( 7 / 2 ); // 3.5
                                                                                          console.log( 4 + 2 * 3 ); // 10
                                                                                          console.log( ( 4 + 2 ) * 3 ); // 18
                                                                                          console.log( 5 % 2 ); // 1

                                                                                          console.log( 6 % 2 ); // 0
                                                                                          console.log( 7 % 2 ); // 1
                                                                                          console.log( 8 % 2 ); // 0
                                                                                          console.log( 19 % 8 ); // 3

                                                                                          console.log( 24 % 8 ); // 0
                                                                                          console.log( 7 % 4 ); // 3
                                                                                          console.log( 4 % 7 ); // 4
                                                                                          console.log( 5 + ( 10 % 5 ) ); // 5
                                                                                          console.log( ( 5 + 10 ) % 5 ); // 0
                                                                                          // Write a function `numberRange(min, max, step)` that accepts three numbers as arguments, `min`,
                                                                                          // `max`, and `step`. The function should return all numbers between `min` and `max` at `step` intervals.
                                                                                          // `min` and `max` are inclusive.

                                                                                          let numberRange = function ( min, max, step ) {
                                                                                            let range = [];

                                                                                            for ( let i = min; i <= max; i += step ) {
                                                                                              range.push( i );
                                                                                            }

                                                                                            return range;
                                                                                          };

                                                                                          console.log( numberRange( 10, 40, 5 ) ); // [10, 15, 20, 25, 30, 35, 40]
                                                                                          console.log( numberRange( 14, 24, 3 ) ); // [14, 17, 20, 23]
                                                                                          console.log( numberRange( 8, 35, 6 ) ); // [8, 14, 20, 26, 32]
                                                                                          // Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
                                                                                          // return the total sum of all odd numbers from 1 to the max, inclusive.
                                                                                          //
                                                                                          // For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25

                                                                                          let oddSum = function ( max ) {
                                                                                            let sum = 0;

                                                                                            for ( let i = 1; i <= max; i++ ) {
                                                                                              if ( i % 2 === 1 ) {
                                                                                                sum += i;
                                                                                              }
                                                                                            }

                                                                                            return sum;
                                                                                          };

                                                                                          console.log( oddSum( 10 ) ); // 25
                                                                                          console.log( oddSum( 5 ) ); // 9
                                                                                          let word = "bye";
                                                                                          console.log( `${ word } felicia` ); // 'bye felicia'
                                                                                          console.log( word ); // 'bye'

                                                                                          let num = 10;
                                                                                          num = num * 2;
                                                                                          console.log( num ); // 20

                                                                                          let bottlesOfBeer = 99;
                                                                                          let around = bottlesOfBeer - 1;
                                                                                          console.log( around ); // 98
                                                                                          console.log( bottlesOfBeer ); // 99
                                                                                          // Write a function `oneOrNone` that accepts two booleans as arguments. The function should return true
                                                                                          // if exactly one of the arguments is true. If BOTH arguments are true, then it should return false.

                                                                                          let oneOrNone = function ( val1, val2 ) {
                                                                                            if ( ( val1 || val2 ) && !( val1 && val2 ) ) {
                                                                                              return true;
                                                                                            } else {
                                                                                              return false;
                                                                                            }
                                                                                          };

                                                                                          console.log( oneOrNone( false, false ) ); // false
                                                                                          console.log( oneOrNone( true, false ) ); // true
                                                                                          console.log( oneOrNone( false, true ) ); // true
                                                                                          console.log( oneOrNone( true, true ) ); // false
                                                                                          // Write a function `oneToFour` that prints all whole numbers from one to four, inclusive. The function
                                                                                          // takes in no arguments and doesn't need to return any value. It should just print to the terminal.

                                                                                          let oneToFour = function () {
                                                                                            for ( let i = 1; i <= 4; i++ ) {
                                                                                              console.log( i );
                                                                                            }
                                                                                          };


                                                                                          oneToFour();
                                                                                          // prints
                                                                                          //  1
                                                                                          //  2
                                                                                          //  3
                                                                                          //  4
                                                                                          let word = "bye";
                                                                                          console.log( word + " felicia" ); // 'bye felicia'
                                                                                          console.log( word ); // 'bye'

                                                                                          let num = 10;
                                                                                          num = num * 2;
                                                                                          console.log( num ); // 20

                                                                                          let bottlesOfBeer = 99;
                                                                                          let around = bottlesOfBeer - 1;
                                                                                          console.log( around ); // 98
                                                                                          console.log( bottlesOfBeer ); // 99
                                                                                          // Write a function `pairPrint` that accepts an array as an argument. The function should print
                                                                                          // all unique pairs of elements in the array. The function doesn't need to return any value. It
                                                                                          // should just print to the terminal.

                                                                                          let pairPrint = function ( array ) {
                                                                                            for ( let i = 0; i < array.length; i++ ) {
                                                                                              for ( let j = i + 1; j < array.length; j++ ) {
                                                                                                console.log( array[ i ] + ' - ' + array[ j ] );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          pairPrint( [ "artichoke", "broccoli", "carrot", "daikon" ] );
                                                                                          // prints
                                                                                          //  artichoke - broccoli
                                                                                          //  artichoke - carrot
                                                                                          //  artichoke - daikon
                                                                                          //  broccoli - carrot
                                                                                          //  broccoli - daikon
                                                                                          //  carrot - daikon

                                                                                          pairPrint( [ "apple", "banana", "clementine" ] );
                                                                                          // prints
                                                                                          //  apple - banana
                                                                                          //  apple - clementine
                                                                                          //  banana - clementine
                                                                                          // Write a function `parity` that accepts a number as an argument. The function should return the
                                                                                          // string 'even' if the number is even. It should return the string 'odd' if the number is odd.

                                                                                          let parity = function ( num ) {
                                                                                            if ( num % 2 === 0 ) {
                                                                                              return 'even';
                                                                                            } else {
                                                                                              return 'odd';
                                                                                            }
                                                                                          };

                                                                                          console.log( parity( 5 ) ); // 'odd'
                                                                                          console.log( parity( 7 ) ); // 'odd'
                                                                                          console.log( parity( 13 ) ); // 'odd'
                                                                                          console.log( parity( 32 ) ); // 'even'
                                                                                          console.log( parity( 10 ) ); // 'even'
                                                                                          console.log( parity( 602348 ) ); // 'even'
                                                                                          // Write a function `print2d` that accepts a two-dimensional array as an argument. The function
                                                                                          // should print all inner elements of the array.

                                                                                          let print2d = function ( array ) {
                                                                                            for ( let i = 0; i < array.length; i++ ) {
                                                                                              let subarray = array[ i ];
                                                                                              for ( let j = 0; j < subarray.length; j++ ) {
                                                                                                console.log( subarray[ j ] );
                                                                                              }
                                                                                            }
                                                                                          };


                                                                                          let array1 = [
                                                                                            [ "a", "b", "c", "d" ],
                                                                                            [ "e", "f" ],
                                                                                            [ "g", "h", "i" ],
                                                                                          ];
                                                                                          print2d( array1 );
                                                                                          // prints
                                                                                          //  a
                                                                                          //  b
                                                                                          //  c
                                                                                          //  d
                                                                                          //  e
                                                                                          //  f
                                                                                          //  g
                                                                                          //  h
                                                                                          //  i

                                                                                          let array2 = [
                                                                                            [ 9, 3, 4 ],
                                                                                            [ 11 ],
                                                                                            [ 42, 100 ]
                                                                                          ];
                                                                                          print2d( array2 );
                                                                                          // prints
                                                                                          //  9
                                                                                          //  3
                                                                                          //  4
                                                                                          //  11
                                                                                          //  42
                                                                                          //  100
                                                                                          // Write a function `printCombinations`that accepts two arrays as arguments. The function should
                                                                                          // print all combinations of the elements generated by taking an element from the first array and
                                                                                          // and an element from the second array. The function doesn't need to return any value. It
                                                                                          // should just print to the terminal.


                                                                                          let printCombinations = function ( array1, array2 ) {
                                                                                            for ( let i = 0; i < array1.length; i++ ) {
                                                                                              let ele1 = array1[ i ];

                                                                                              for ( let j = 0; j < array2.length; j++ ) {
                                                                                                let ele2 = array2[ j ];
                                                                                                console.log( ele1, ele2 );
                                                                                              }
                                                                                            }
                                                                                          };

                                                                                          let colors = [ "gray", "cream", "cyan" ];
                                                                                          let clothes = [ "shirt", "flannel" ];
                                                                                          printCombinations( colors, clothes );
                                                                                          // prints
                                                                                          //  gray shirt
                                                                                          //  gray flannel
                                                                                          //  cream shirt
                                                                                          //  cream flannel
                                                                                          //  cyan shirt
                                                                                          //  cyan flannel

                                                                                          printCombinations( [ "hot", "cold" ], [ "soup", "tea" ] );
                                                                                          // prints
                                                                                          //  hot soup
                                                                                          //  hot tea
                                                                                          //  cold soup
                                                                                          //  cold tea
                                                                                          // Write a function named `productUpTo(max)` that accepts a max number as an argument. The function
                                                                                          // should return the total product of all whole numbers from 1 to the max, inclusive. A product is a
                                                                                          // number obtained from multiplying numbers together.
                                                                                          //
                                                                                          // For example, productUpTo(4) should return 24 because 1 * 2 * 3 * 4 = 24

                                                                                          let productUpTo = function ( max ) {
                                                                                            let product = 1;

                                                                                            for ( let i = 1; i <= max; i++ ) {
                                                                                              product *= i;
                                                                                            }

                                                                                            return product;
                                                                                          };

                                                                                          console.log( productUpTo( 4 ) ); // 24
                                                                                          console.log( productUpTo( 5 ) ); // 120
                                                                                          console.log( productUpTo( 7 ) ); // 5040
                                                                                          let word = "suspension bridge";
                                                                                          console.log( word[ 4 ] ); // e
                                                                                          console.log( word.length > 5 && word[ 0 ] === "d" ); // false
                                                                                          console.log( word.length > 5 && word[ 0 ] === "s" ); // true
                                                                                          console.log( word.indexOf( "o" ) > -1 ); // true
                                                                                          console.log( word.indexOf( "z" ) > -1 ); // false

                                                                                          let str = "foggy";
                                                                                          console.log( str[ 2 + 1 ] ); // g
                                                                                          console.log( str[ str.length - 1 ] ); // y
                                                                                          str = " day";
                                                                                          console.log( str ); // ' day'
                                                                                          console.log( str.length ); // 4
                                                                                          console.log( str.indexOf( "ogg" ) ); // -1
                                                                                          // Write a function `raisePower(base, exponent)` that accepts two numbers, `base` and `exponent`. The
                                                                                          // function should return `base` raised to the `exponent` power.
                                                                                          //
                                                                                          // For example, raisePower(2, 5) should return 32 because 2 * 2 * 2 * 2 * 2 = 32 
                                                                                          // For example, raisePower(4, 3) should return 64 because 4 * 4 * 4 = 64

                                                                                          let raisePower = function ( base, exponent ) {
                                                                                            let product = 1;

                                                                                            for ( let i = 1; i <= exponent; i++ ) {
                                                                                              product *= base;
                                                                                            }

                                                                                            return product;
                                                                                          };

                                                                                          console.log( raisePower( 2, 5 ) ); // 32
                                                                                          console.log( raisePower( 4, 3 ) ); // 64
                                                                                          console.log( raisePower( 10, 4 ) ); // 10000
                                                                                          console.log( raisePower( 7, 2 ) ); // 49
                                                                                          // Write a function `removeCapitals` that accepts a string as an argument. The function should return a
                                                                                          // new version of the string with all capital letters removed.

                                                                                          let removeCapitals = function ( str ) {
                                                                                            let newStr = '';

                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];
                                                                                              if ( char === char.toLowerCase() ) {
                                                                                                newStr += char;
                                                                                              }
                                                                                            }

                                                                                            return newStr;
                                                                                          };

                                                                                          console.log( removeCapitals( "fOrEver" ) ); // 'frver'
                                                                                          console.log( removeCapitals( "raiNCoat" ) ); // 'raioat'
                                                                                          console.log( removeCapitals( "cElLAr Door" ) ); // 'clr oor'
                                                                                          // Write a function `removeDupes` that accepts an array as an argument. The function should return a
                                                                                          // new array where each element only appears once.

                                                                                          let removeDupes = function ( array ) {
                                                                                            let uniques = [];

                                                                                            for ( let i = 0; i < array.length; i++ ) {
                                                                                              let ele = array[ i ];
                                                                                              if ( !uniques.includes( ele ) ) {
                                                                                                uniques.push( ele );
                                                                                              }
                                                                                            }

                                                                                            return uniques;
                                                                                          };

                                                                                          console.log( removeDupes( [ "x", "y", "y", "x", "z" ] ) ); // ['x', 'y', 'z']
                                                                                          console.log( removeDupes( [ false, false, true, false ] ) ); // [false, true]
                                                                                          console.log( removeDupes( [ 42, 5, 7, 42, 7, 3, 7, 7 ] ) ); // [42, 5, 7, 3]
                                                                                          // Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
                                                                                          // the string with it's first vowel removed.

                                                                                          let removeFirstVowel = function ( str ) {
                                                                                            let vowels = 'aeiou';

                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];
                                                                                              if ( vowels.includes( char ) ) {
                                                                                                return str.slice( 0, i ) + str.slice( i + 1 );
                                                                                              }
                                                                                            }

                                                                                            return str;
                                                                                          };

                                                                                          console.log( removeFirstVowel( "volcano" ) ); // 'vlcano'
                                                                                          console.log( removeFirstVowel( "celery" ) ); // 'clery'
                                                                                          console.log( removeFirstVowel( "juice" ) ); // 'jice'
                                                                                          console.log( removeFirstVowel( "bridge" ) ); // 'brdge'
                                                                                          console.log( removeFirstVowel( "try" ) ); // 'try'
                                                                                          // Write a function `removeShortWords` that accepts a sentence string as an argument. The function
                                                                                          // should return a new sentence where all of the words shorter than 4 characters are removed.

                                                                                          let removeShortWords = function ( sentence ) {
                                                                                            let words = sentence.split( ' ' );
                                                                                            let chosenWords = [];

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              let word = words[ i ];

                                                                                              if ( word.length >= 4 ) {
                                                                                                chosenWords.push( word );
                                                                                              }
                                                                                            }

                                                                                            return chosenWords.join( ' ' );
                                                                                          };

                                                                                          console.log( removeShortWords( "knock on the door will you" ) ); // 'knock door will'
                                                                                          console.log( removeShortWords( "a terrible plan" ) ); // 'terrible plan'
                                                                                          console.log( removeShortWords( "run faster that way" ) ); // 'faster that'
                                                                                          // Write a function `removeVowels` that accepts a string as an argument. The function should return
                                                                                          // a version of the string where all vowels are removed.

                                                                                          let removeVowels = function ( str ) {
                                                                                            let newStr = '';
                                                                                            let vowels = 'aeiou';

                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];
                                                                                              if ( !vowels.includes( char ) ) {
                                                                                                newStr += char;
                                                                                              }
                                                                                            }

                                                                                            return newStr;
                                                                                          };

                                                                                          console.log( removeVowels( "jello" ) ); // jll
                                                                                          console.log( removeVowels( "sensitivity" ) ); // snstvty
                                                                                          console.log( removeVowels( "cellar door" ) ); // cllr dr
                                                                                          // Write a function `reverseArray` that accepts an array as an argument. The function should return a
                                                                                          // array containing the elements of the original array in reverse order.

                                                                                          let reverseArray1 = function ( array ) {
                                                                                            let reversed = [];

                                                                                            for ( let i = array.length - 1; i >= 0; i-- ) {
                                                                                              reversed.push( array[ i ] );
                                                                                            }

                                                                                            return reversed;
                                                                                          };

                                                                                          console.log( reverseArray1( [ "zero", "one", "two", "three" ] ) ); // ['three', 'two', 'one', 'zero']
                                                                                          console.log( reverseArray1( [ 7, 1, 8 ] ) ); // [8, 1, 7]


                                                                                          let reverseArray2 = function ( array ) {
                                                                                            let reversed = [];

                                                                                            for ( let i = 0; i < array.length; i++ ) {
                                                                                              reversed.unshift( array[ i ] );
                                                                                            }

                                                                                            return reversed;
                                                                                          };

                                                                                          console.log( reverseArray2( [ "zero", "one", "two", "three" ] ) ); // ['three', 'two', 'one', 'zero']
                                                                                          console.log( reverseArray2( [ 7, 1, 8 ] ) ); // [8, 1, 7]
                                                                                          // Write a function `reverseIterate` that accepts a string as an argument. The function should print
                                                                                          // the characters of the string one by one, in reverse order. The function doesn't need to return any
                                                                                          // value. It should just print to the terminal.

                                                                                          let reverseIterate = function ( str ) {
                                                                                            for ( let i = str.length - 1; i >= 0; i-- ) {
                                                                                              console.log( str[ i ] );
                                                                                            }
                                                                                          };

                                                                                          reverseIterate( "carrot" );
                                                                                          // prints
                                                                                          //  t
                                                                                          //  o
                                                                                          //  r
                                                                                          //  r
                                                                                          //  a
                                                                                          //  c

                                                                                          reverseIterate( "box" );
                                                                                          // prints
                                                                                          //  x
                                                                                          //  o
                                                                                          //  b
                                                                                          // Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
                                                                                          // should return the same sentence where words longer than 4 characters have their vowels removed.

                                                                                          let removeVowels = function ( str ) {
                                                                                            let newStr = '';
                                                                                            let vowels = 'aeiou';

                                                                                            for ( let i = 0; i < str.length; i++ ) {
                                                                                              let char = str[ i ];
                                                                                              if ( !vowels.includes( char ) ) {
                                                                                                newStr += char;
                                                                                              }
                                                                                            }

                                                                                            return newStr;
                                                                                          };

                                                                                          let shortenLongWords = function ( sentence ) {
                                                                                            let words = sentence.split( ' ' );
                                                                                            let newWords = [];

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              let word = words[ i ];
                                                                                              if ( word.length > 4 ) {
                                                                                                let noVowels = removeVowels( word );
                                                                                                newWords.push( noVowels );
                                                                                              } else {
                                                                                                // leave it the same
                                                                                                newWords.push( word );
                                                                                              }
                                                                                            }

                                                                                            return newWords.join( ' ' );
                                                                                          };

                                                                                          console.log( shortenLongWords( "they are very noble people" ) ); // 'they are very nbl ppl'
                                                                                          console.log( shortenLongWords( "stick with it" ) ); // 'stck with it'
                                                                                          console.log( shortenLongWords( "ballerina, you must have seen her" ) ); // 'bllrna, you must have seen her
                                                                                          console.log( "promenade" [ 3 ] ); // m
                                                                                          console.log( "tiger" [ 1 ] ); // i
                                                                                          console.log( "wheel".length ); // 5

                                                                                          console.log( "wheel".length - 1 ); // 4
                                                                                          console.log( "noMAD".toUpperCase() ); // NOMAD
                                                                                          console.log( "hey programmers" [ 2 ] === "y" ); // true

                                                                                          console.log( "volleyball".length > 20 ); // false
                                                                                          console.log( "treasure".indexOf( "r" ) ); // 1
                                                                                          console.log( "treasure".indexOf( "e" ) ); // 2
                                                                                          console.log( "web" [ 5 ] ); // undefined
                                                                                          console.log( "red".indexOf( "x" ) ); // -1
                                                                                          console.log( "red".indexOf( "R" ) ); // -1
                                                                                          // snippet 0-1
                                                                                          let greet = function () {
                                                                                            console.log( "hey" );
                                                                                            console.log( "programmers" );
                                                                                          };

                                                                                          let whistle = function () {
                                                                                            console.log( "doot" );
                                                                                          };

                                                                                          console.log( "first" );
                                                                                          console.log( "second" );
                                                                                          greet();
                                                                                          console.log( "third" );
                                                                                          console.log( "fourth" );
                                                                                          whistle();


                                                                                          // first
                                                                                          // second
                                                                                          // hey
                                                                                          // programmers
                                                                                          // third
                                                                                          // fourth
                                                                                          // doot
                                                                                          // snippet 0-2
                                                                                          let howMany = function () {
                                                                                            return 42;
                                                                                          };

                                                                                          console.log( howMany );
                                                                                          console.log( howMany() );

                                                                                          const theAnswer = howMany();
                                                                                          console.log( theAnswer );

                                                                                          let howMuch = function () {
                                                                                            5;
                                                                                          };
                                                                                          console.log( howMuch() );


                                                                                          // [Function: howMany]
                                                                                          // 42
                                                                                          // 42
                                                                                          // undefined
                                                                                          // snippet 0-3
                                                                                          let average = function ( num1, num2 ) {
                                                                                            console.log( "calculating..." );
                                                                                            return ( num1 + num2 ) / 2;
                                                                                          };

                                                                                          console.log( average( 5, 10 ) );
                                                                                          console.log( average( 20, 26 ) );
                                                                                          console.log( average( 50, 100 ) + 2 );

                                                                                          let a = 21 + 3;
                                                                                          let b = 20;
                                                                                          let n = average( a, b );
                                                                                          console.log( average( n, 18 ) );


                                                                                          // calculating...
                                                                                          // 7.5
                                                                                          // calculating...
                                                                                          // 23
                                                                                          // calculating...
                                                                                          // 77
                                                                                          // calculating...
                                                                                          // calculating...
                                                                                          // 20
                                                                                          // snippet 0-4
                                                                                          let exclaim = function ( str ) {
                                                                                            let capitalized = str.toUpperCase();
                                                                                            return capitalized + "!!";
                                                                                          };

                                                                                          let result = exclaim( "potato" );
                                                                                          console.log( result );
                                                                                          console.log( result.length );
                                                                                          console.log( result[ 0 ] );
                                                                                          console.log( result[ result.length - 1 ] );


                                                                                          // POTATO!!
                                                                                          // 8
                                                                                          // P
                                                                                          // !
                                                                                          // snippet 1
                                                                                          console.log( "hello" );

                                                                                          for ( let i = 0; i < 5; i++ ) {
                                                                                            console.log( "code" );
                                                                                          }

                                                                                          console.log( "goodbye" );


                                                                                          hello
                                                                                          code
                                                                                          code
                                                                                          code
                                                                                          code
                                                                                          code
                                                                                          goodbye
                                                                                          // snippet 1
                                                                                          console.log( "hello" );

                                                                                          for ( let i = 0; i < 5; i++ ) {
                                                                                            console.log( "code" );
                                                                                          }

                                                                                          console.log( "goodbye" );


                                                                                          hello
                                                                                          code
                                                                                          code
                                                                                          code
                                                                                          code
                                                                                          code
                                                                                          goodbye
                                                                                          // snippet 2
                                                                                          console.log( "hi" );

                                                                                          for ( let i = 3; i <= 7; i++ ) {
                                                                                            console.log( "program" );
                                                                                            console.log( i );
                                                                                          }

                                                                                          console.log( "bye" );


                                                                                          // hi
                                                                                          // program
                                                                                          // 3
                                                                                          // program
                                                                                          // 4
                                                                                          // program
                                                                                          // 5
                                                                                          // program
                                                                                          // 6
                                                                                          // program
                                                                                          // 7
                                                                                          // bye
                                                                                          // snippet 2
                                                                                          console.log( "hi" );

                                                                                          for ( let i = 3; i <= 7; i++ ) {
                                                                                            console.log( "program" );
                                                                                            console.log( i );
                                                                                          }

                                                                                          console.log( "bye" );


                                                                                          // hi
                                                                                          // program
                                                                                          // 3
                                                                                          // program
                                                                                          // 4
                                                                                          // program
                                                                                          // 5
                                                                                          // program
                                                                                          // 6
                                                                                          // program
                                                                                          // 7
                                                                                          // bye
                                                                                          // snippet 3
                                                                                          let foo = function () {
                                                                                            for ( let num = 10; num > 0; num -= 2 ) {
                                                                                              console.log( num );
                                                                                            }
                                                                                          };

                                                                                          console.log( "begin" );
                                                                                          foo();
                                                                                          console.log( "end" );
                                                                                          foo();


                                                                                          // begin
                                                                                          // 10
                                                                                          // 8
                                                                                          // 6
                                                                                          // 4
                                                                                          // 2
                                                                                          // end
                                                                                          // 10
                                                                                          // 8
                                                                                          // 6
                                                                                          // 4
                                                                                          // 2
                                                                                          // snippet 3
                                                                                          let foo = function () {
                                                                                            for ( let num = 10; num > 0; num -= 2 ) {
                                                                                              console.log( num );
                                                                                            }
                                                                                          };

                                                                                          console.log( "begin" );
                                                                                          foo();
                                                                                          console.log( "end" );
                                                                                          foo();


                                                                                          // begin
                                                                                          // 10
                                                                                          // 8
                                                                                          // 6
                                                                                          // 4
                                                                                          // 2
                                                                                          // end
                                                                                          // 10
                                                                                          // 8
                                                                                          // 6
                                                                                          // 4
                                                                                          // 2
                                                                                          // snippet 4
                                                                                          let word = "street";
                                                                                          for ( let i = 0; i < word.length; i++ ) {
                                                                                            console.log( i );
                                                                                            console.log( word[ i ] );
                                                                                          }


                                                                                          // 0
                                                                                          // s
                                                                                          // 1
                                                                                          // t
                                                                                          // 2
                                                                                          // r
                                                                                          // 3
                                                                                          // e
                                                                                          // 4
                                                                                          // e
                                                                                          // 5
                                                                                          // t
                                                                                          // snippet 4
                                                                                          let word = "street";
                                                                                          for ( let i = 0; i < word.length; i++ ) {
                                                                                            console.log( i );
                                                                                            console.log( word[ i ] );
                                                                                          }


                                                                                          // 0
                                                                                          // s
                                                                                          // 1
                                                                                          // t
                                                                                          // 2
                                                                                          // r
                                                                                          // 3
                                                                                          // e
                                                                                          // 4
                                                                                          // e
                                                                                          // 5
                                                                                          // t
                                                                                          // snippet 5
                                                                                          let total = 0; // 10
                                                                                          for ( let i = 1; i < 5; i++ ) {
                                                                                            total += i;
                                                                                            console.log( total );
                                                                                          }

                                                                                          console.log( "grand total: " + total );


                                                                                          // 1
                                                                                          // 3
                                                                                          // 6
                                                                                          // 10
                                                                                          // grand total: 10
                                                                                          // snippet 5
                                                                                          let total = 0; // 10
                                                                                          for ( let i = 1; i < 5; i++ ) {
                                                                                            total += i;
                                                                                            console.log( total );
                                                                                          }

                                                                                          console.log( "grand total: " + total );


                                                                                          // 1
                                                                                          // 3
                                                                                          // 6
                                                                                          // 10
                                                                                          // grand total: 10
                                                                                          // Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements.
                                                                                          // The first element of every pair is a number and the second element is a word. The function should
                                                                                          // return a string containing the words repeated the specified number of times. See the examples.

                                                                                          let spam = function ( pairs ) {
                                                                                            let words = [];

                                                                                            for ( let i = 0; i < pairs.length; i++ ) {
                                                                                              let pair = pairs[ i ];
                                                                                              let word = pair[ 0 ];
                                                                                              let num = pair[ 1 ];

                                                                                              for ( let j = 0; j < num; j++ ) {
                                                                                                words.push( word );
                                                                                              }
                                                                                            }

                                                                                            return words.join( ' ' );
                                                                                          };

                                                                                          let array1 = [
                                                                                            [ "hi", 3 ],
                                                                                            [ "bye", 2 ],
                                                                                          ];
                                                                                          console.log( spam( array1 ) ); // 'hi hi hi bye bye'

                                                                                          let array2 = [
                                                                                            [ "cat", 1 ],
                                                                                            [ "dog", 2 ],
                                                                                            [ "bird", 4 ],
                                                                                          ];
                                                                                          console.log( spam( array2 ) ); // 'cat dog dog bird bird bird bird'
                                                                                          // Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
                                                                                          // whether or not the string starts with 'r' or 'R'.

                                                                                          let startsWithR = function ( str ) {
                                                                                            return str[ 0 ] === 'r' || str[ 0 ] === 'R';
                                                                                          };

                                                                                          console.log( startsWithR( "roger that" ) ); // true
                                                                                          console.log( startsWithR( "Row, row, row your boat" ) ); // true
                                                                                          console.log( startsWithR( "slip" ) ); // false
                                                                                          console.log( startsWithR( "Taxicab" ) ); // false
                                                                                          // Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
                                                                                          // return an array containing only the positive numbers.

                                                                                          let stayPositive = function ( numbers ) {
                                                                                            let positives = [];

                                                                                            for ( let i = 0; i < numbers.length; i++ ) {
                                                                                              if ( numbers[ i ] > 0 ) {
                                                                                                positives.push( numbers[ i ] );
                                                                                              }
                                                                                            }

                                                                                            return positives;
                                                                                          };


                                                                                          console.log( stayPositive( [ 10, -4, 3, 6 ] ) ); // [10, 3, 6]
                                                                                          console.log( stayPositive( [ -5, 11, -40, 30.3, -2 ] ) ); // [11, 30.3]
                                                                                          console.log( stayPositive( [ -11, -30 ] ) ); // []
                                                                                          console.log( "river" + "town" );
                                                                                          console.log( "cat" + "dog" );
                                                                                          console.log( "New" + " York" );
                                                                                          console.log( "runner's knee" + "!" );
                                                                                          console.log( "man" + "bear" + "pig" );
                                                                                          // Write a function `stringIterate` that accepts a string as an argument. The function should print out
                                                                                          // each character of the string, one by one. The function doesn't need to return any value. It should
                                                                                          // just print to the terminal.

                                                                                          let stringIterate = function ( string ) {
                                                                                            for ( let i = 0; i < string.length; i++ ) {
                                                                                              console.log( string[ i ] );
                                                                                            }
                                                                                          };

                                                                                          stringIterate( "celery" );
                                                                                          // prints
                                                                                          //  c
                                                                                          //  e
                                                                                          //  l
                                                                                          //  e
                                                                                          //  r
                                                                                          //  y

                                                                                          stringIterate( "hat" );
                                                                                          // prints
                                                                                          //  h
                                                                                          //  a
                                                                                          //  t
                                                                                          // Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
                                                                                          // The function should return a new string consisting of the `str` repeated `num` number of times.

                                                                                          let stringRepeater = function ( str, num ) {
                                                                                            let repeatedStr = '';

                                                                                            for ( let i = 1; i <= num; i++ ) {
                                                                                              repeatedStr += str
                                                                                            }

                                                                                            return repeatedStr;
                                                                                          };

                                                                                          console.log( stringRepeater( "q", 4 ) ); // 'qqqq'
                                                                                          console.log( stringRepeater( "go", 2 ) ); // 'gogo'
                                                                                          console.log( stringRepeater( "tac", 3 ) ); // 'tactactac'
                                                                                          // Write a function `stringSize` that accepts a string as an argument. The function should return the
                                                                                          // string 'small' if the argument is shorter than 5 characters, 'medium' if it is exactly 5 characters, and
                                                                                          // 'large' if it is longer than 5 characters.

                                                                                          let stringSize = function ( str ) {
                                                                                            if ( str.length < 5 ) {
                                                                                              return 'small';
                                                                                            } else if ( str.length > 5 ) {
                                                                                              return 'large';
                                                                                            } else {
                                                                                              return 'medium';
                                                                                            }
                                                                                          };

                                                                                          console.log( stringSize( "cat" ) ); // 'small'
                                                                                          console.log( stringSize( "bell" ) ); // 'small'
                                                                                          console.log( stringSize( "ready" ) ); // 'medium'
                                                                                          console.log( stringSize( "shirt" ) ); // 'medium'
                                                                                          console.log( stringSize( "shallow" ) ); // 'large'
                                                                                          console.log( stringSize( "intelligence" ) ); // 'large'
                                                                                          // Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
                                                                                          // should return a new array containing the lengths of the elements of the original array.

                                                                                          let stringsToLengths = function ( words ) {
                                                                                            let lengths = [];

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              lengths.push( words[ i ].length );
                                                                                            }

                                                                                            return lengths;
                                                                                          };

                                                                                          console.log( stringsToLengths( [ "belly", "echo", "irony", "pickled" ] ) );
                                                                                          // [5, 4, 5, 7]

                                                                                          console.log( stringsToLengths( [ "on", "off", "handmade" ] ) );
                                                                                          // [2, 3, 8]
                                                                                          // Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
                                                                                          // return the total sum of all whole numbers from 1 to the max, inclusive.
                                                                                          //
                                                                                          // For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.

                                                                                          let sumUpTo = function ( max ) {
                                                                                            let sum = 0;

                                                                                            for ( let i = 1; i <= max; i++ ) {
                                                                                              sum += i
                                                                                            }

                                                                                            return sum;
                                                                                          };

                                                                                          console.log( sumUpTo( 4 ) ); // 10
                                                                                          console.log( sumUpTo( 5 ) ); // 15
                                                                                          console.log( sumUpTo( 2 ) ); // 3
                                                                                          console.log( 'coffee' );
                                                                                          let qty = 15 % 4;
                                                                                          console.log( qty ); // 3

                                                                                          let num = 38 + 3;
                                                                                          num++;
                                                                                          console.log( num + " is a great number" ); // '42 is a great number'

                                                                                          let isNumEven = num % 2 === 0;
                                                                                          console.log( num + " is even? " + isNumEven ); // '42 is even? true'

                                                                                          let isQtyEven = qty % 2 === 0;
                                                                                          console.log( qty + " is even? " + isQtyEven ); // '3 is even? false'
                                                                                          let qty = 15 % 4;
                                                                                          console.log( qty ); // 3

                                                                                          let num = 38 + 3;
                                                                                          num++;
                                                                                          console.log( num + " is a great number" ); // '42 is a great number'

                                                                                          let isNumEven = num % 2 === 0;
                                                                                          console.log( num + " is even? " + isNumEven ); // '42 is even? true'

                                                                                          let isQtyEven = qty % 2 === 0;
                                                                                          console.log( qty + " is even? " + isQtyEven ); // '3 is even? false'
                                                                                          // Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
                                                                                          // the total product of all numbers in the array.

                                                                                          let totalProduct = function ( array ) {
                                                                                            let product = 1;

                                                                                            for ( let i = 0; i < array.length; i++ ) {
                                                                                              let subarray = array[ i ];

                                                                                              for ( let j = 0; j < subarray.length; j++ ) {
                                                                                                product *= subarray[ j ];
                                                                                              }
                                                                                            }

                                                                                            return product;
                                                                                          };

                                                                                          let array1 = [
                                                                                            [ 3, 5, 2 ],
                                                                                            [ 6, 2 ],
                                                                                          ];
                                                                                          console.log( totalProduct( array1 ) ); // 360

                                                                                          let array2 = [
                                                                                            [ 4, 6 ],
                                                                                            [ 2, 3 ],
                                                                                            [ 1, 2 ],
                                                                                          ];
                                                                                          console.log( totalProduct( array2 ) ); // 288
                                                                                          // Write a function `total` that accepts an array of numbers as an argument. The function should return
                                                                                          // the total sum of all elements of the array.

                                                                                          let total = function ( numbers ) {
                                                                                            let sum = 0;
                                                                                            for ( let i = 0; i < numbers.length; i++ ) {
                                                                                              sum += numbers[ i ];
                                                                                            }
                                                                                            return sum;
                                                                                          };

                                                                                          console.log( total( [ 3, 2, 8 ] ) ); // 13
                                                                                          console.log( total( [ -5, 7, 4, 6 ] ) ); // 12
                                                                                          console.log( total( [ 7 ] ) ); // 7
                                                                                          console.log( total( [] ) ); // 0
                                                                                          let apple;
                                                                                          console.log( apple ); // undefined

                                                                                          apple = 5;
                                                                                          console.log( apple ); // 5

                                                                                          apple + 1;
                                                                                          console.log( apple ); // 5

                                                                                          apple += 1;
                                                                                          console.log( apple ); // 6

                                                                                          let banana = apple;
                                                                                          console.log( banana ); // 6

                                                                                          banana = banana / 2;
                                                                                          console.log( banana ); // 3

                                                                                          console.log( apple ); // 6
                                                                                          // Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
                                                                                          // as arguments. The function should return a 2D array containing all unique pairs of elements that
                                                                                          // sum to the target.

                                                                                          let twoSumPairs = function ( numbers, target ) {
                                                                                            let pairs = [];

                                                                                            for ( let i = 0; i < numbers.length; i++ ) {
                                                                                              let num1 = numbers[ i ];

                                                                                              for ( let j = i + 1; j < numbers.length; j++ ) {
                                                                                                let num2 = numbers[ j ];

                                                                                                if ( num1 + num2 === target ) {
                                                                                                  let pair = [ num1, num2 ];
                                                                                                  pairs.push( pair );
                                                                                                }
                                                                                              }
                                                                                            }

                                                                                            return pairs;
                                                                                          };

                                                                                          console.log( twoSumPairs( [ 2, 3, 4, 6, 5 ], 8 ) ); // [ [2, 6], [3, 5] ]
                                                                                          console.log( twoSumPairs( [ 10, 7, 4, 5, 2 ], 12 ) ); // [ [10, 2], [7, 5] ]
                                                                                          console.log( twoSumPairs( [ 3, 9, 8 ], 11 ) ); // [ [3, 8] ]
                                                                                          console.log( twoSumPairs( [ 3, 9, 8 ], 10 ) ); // [ ]
                                                                                          // Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
                                                                                          // as an argument. The function should return a boolean indicating whether or not there exists a pair
                                                                                          // of distinct elements in the array that sum to the target.

                                                                                          let twoSum = function ( numbers, target ) {
                                                                                            for ( let i = 0; i < numbers.length; i++ ) {
                                                                                              for ( let j = i + 1; j < numbers.length; j++ ) {
                                                                                                if ( numbers[ i ] + numbers[ j ] === target ) {
                                                                                                  return true;
                                                                                                }
                                                                                              }
                                                                                            }

                                                                                            return false;
                                                                                          };

                                                                                          console.log( twoSum( [ 2, 3, 5, 9 ], 7 ) ); // true
                                                                                          console.log( twoSum( [ 2, 3, 5, 9 ], 4 ) ); // false
                                                                                          console.log( twoSum( [ 6, 3, 4 ], 10 ) ); // true
                                                                                          console.log( twoSum( [ 6, 5, 1 ], 10 ) ); // false
                                                                                          let apple;
                                                                                          console.log( apple ); // undefined

                                                                                          apple = 5;
                                                                                          console.log( apple ); // 5

                                                                                          apple + 1;
                                                                                          console.log( apple ); // 5

                                                                                          apple += 1;
                                                                                          console.log( apple ); // 6

                                                                                          let banana = apple;
                                                                                          console.log( banana ); // 6

                                                                                          banana = banana / 2;
                                                                                          console.log( banana ); // 3

                                                                                          console.log( apple ); // 6
                                                                                          // Write a function `wackyWord` that accepts two strings as arguments. The function should return a new
                                                                                          // string containing the first three characters of the first string concatenated with the last two
                                                                                          // character of the second string.

                                                                                          // You can assume that the first argument has a length of at least three and the second argument has a
                                                                                          // length of at least two.


                                                                                          let wackyWord = function ( str1, str2 ) {
                                                                                            return str1.slice( 0, 3 ) + str2.slice( -2 );
                                                                                          };

                                                                                          console.log( wackyWord( "very", "kindly" ) ); // 'verly'
                                                                                          console.log( wackyWord( "forever", "sick" ) ); // 'forck'
                                                                                          console.log( wackyWord( "cellar", "door" ) ); // 'celor'
                                                                                          console.log( wackyWord( "bagel", "sweep" ) ); // 'bagep'
                                                                                          console.log( 'alvin' );
                                                                                          console.log( 'z' );
                                                                                          // Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
                                                                                          // `targetWords`. The function should return a count of the number of words of the sentence that are
                                                                                          // in `targetWords`.

                                                                                          let wordCount = function ( sentence, targetWords ) {
                                                                                            let words = sentence.split( ' ' );
                                                                                            let count = 0;

                                                                                            for ( let i = 0; i < words.length; i++ ) {
                                                                                              let word = words[ i ];

                                                                                              if ( targetWords.includes( word ) ) {
                                                                                                count++;
                                                                                              }
                                                                                            }

                                                                                            return count;
                                                                                          };

                                                                                          console.log( wordCount( "open the window please", [ "please", "open", "sorry" ] ) ); // 2
                                                                                          console.log( wordCount( "drive to the cinema", [ "the", "driver" ] ) ); // 1
                                                                                          console.log( wordCount( "can I have that can", [ "can", "I" ] ) ); // 3
                                                                                          // Write a function `yourAverageFunction` that accepts an array of numbers as an argument. The
                                                                                          // function should return the average of all elements of the array. If the input array is empty,
                                                                                          // then the function should return null.

                                                                                          let yourAverageFunction = function ( nums ) {
                                                                                            if ( nums.length === 0 ) {
                                                                                              return null;
                                                                                            }

                                                                                            let sum = 0;
                                                                                            for ( let i = 0; i < nums.length; i++ ) {
                                                                                              sum += nums[ i ];
                                                                                            }

                                                                                            return sum / nums.length;
                                                                                          };

                                                                                          console.log( yourAverageFunction( [ 5, 2, 7, 24 ] ) ); // 9.5
                                                                                          console.log( yourAverageFunction( [ 100, 6 ] ) ); // 53
                                                                                          console.log( yourAverageFunction( [ 31, 32, 40, 12, 33 ] ) ); // 29.6
                                                                                          console.log( yourAverageFunction( [] ) ); // null
                                                                                          let location = "Brooklyn, " + "NY";
                                                                                          console.log( location ); // 'Brooklyn, NY'

                                                                                          let quantity = 4 * 5 + 1;
                                                                                          console.log( quantity ); // 21
                                                                                          let location = "Brooklyn, " + "NY";
                                                                                          console.log( location ); // 'Brooklyn, NY'

                                                                                          let quantity = 4 * 5 + 1;
                                                                                          console.log( quantity ); // 21
                                                                                          // Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
                                                                                          // array containing pairs of elements at the same indices.


                                                                                          let zipper = function ( arr1, arr2 ) {
                                                                                            let result = [];

                                                                                            for ( let i = 0; i < arr1.length; i++ ) {
                                                                                              let el1 = arr1[ i ];
                                                                                              let el2 = arr2[ i ];
                                                                                              let pair = [ el1, el2 ];
                                                                                              result.push( pair );
                                                                                            }

                                                                                            return result;
                                                                                          };

                                                                                          let array1 = [ "a", "b", "c", "d" ];
                                                                                          let array2 = [ -1, -2, -3, -4 ];
                                                                                          console.log( zipper( array1, array2 ) );
                                                                                          // [
                                                                                          //   ['a', -1],
                                                                                          //   ['b', -2],
                                                                                          //   ['c', -3],
                                                                                          //   ['d', -4],
                                                                                          // ]

                                                                                          let array3 = [ "whisper", "talk", "shout" ];
                                                                                          let array4 = [ "quiet", "normal", "loud" ];
                                                                                          console.log( zipper( array3, array4 ) );
                                                                                          // [
                                                                                          //   ['whisper', 'quiet'],
                                                                                          //   ['talk', 'normal'],
                                                                                          //   ['shout', 'loud'],
                                                                                          // ]

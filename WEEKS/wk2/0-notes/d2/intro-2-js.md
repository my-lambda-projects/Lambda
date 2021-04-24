# JavaScript

## [Expressions ](#expressions)

  1. [Given a working REPL interface, write and execute a statement that will print "hello world" using console.log](#expressions--1)
  2. [Identify that strings are a list of characters defined by using double or single quotes](#expressions--2)
  3. [Given an arithmetic expression using +, -, *, /, %, compute its value](#expressions--3)
  4. [Given an expression, predict if its value is NaN](#expressions--4)
  5. [Construct the truth tables for &&, ||, !](#expressions--5)
  6. [Given an expression consisting of >, >=, ===, <, <=, compute it's value](#expressions--6)
  7. [Apply De Morgan's law to a boolean expression](#expressions--7)
  8. [Given an expression that utilizes operator precedence, compute its value](#expressions--8)
  9. [Given an expression, use the grouping operator to change it's evaluation](#expressions--9)
  10. [Given expressions using == and ===, compute their values](#expressions--10)
  11. [Given a code snippet using p(#expressions--1)ostfix ++, postfix --, +=, -=. /=, *=, predict the value of labeled lines](#expressions--11)
  12. [Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.](#expressions--12)

## [Intro to Functions ](#intro-to-functions)

  1. [Define a function using function declaration](#functions--1)
  2. [Define a function that calculates the average of two numbers, call it, pass in arguments, and print it's return value](#functions--2)
  3. [Identify the difference between parameters vs arguments](#functions--3)

#  Examples

## Expressions

### Expressions  1

Given a working REPL interface, write and execute a statement that will print "hello world" using console.log

``` js
console.log("hello world");
```

### Expressions  2

Identify that strings are a list of characters defined by using double or single quotes

``` js
"hello world" // valid string
'hello world' // valid string
'hello world" // invalid string!
```

``` js
"hello world" [0] // 'h' (indices start at 0)
"hello world" [-1] // undefined (indices outside range of characters return undefined)
"hello world" ["hello world".length - 1] // d (since we start at 0, the last character is at the index of length - 1)
```

### Expressions  3

Given an arithmetic expression using +, -, *, /, %, compute its value

``` js
console.log(1 + 2); // 3
console.log(14 - 6); // 8
console.log(2 * 3); // 6
console.log(6 / 3); // 2
console.log(7 % 6); // 1
```

### Expressions  4

Given an expression, predict if its value is NaN

``` js
let num1;
console.log(1 + 2 * 3); // 7 (multiplication is performed first)
console.log((1 + 2) * 3); // 9 (addition is first because it is grouped)
```

### Expressions  5

Construct the truth tables for &&, ||, !

* NOT (!)

|   A   |  ! A   |
| :---: | :---: |
| true  | false |
| false | true  |

* AND (&&)

|   A   |   B   | A && B |
| :---: | :---: | :----: |
| true  | true  |  true  |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

* OR (||)

|   A   |   B   | A \|\| B |
| :---: | :---: | :------: |
| true  | true  |   true   |
| true  | false |   true   |
| false | true  |   true   |
| false | false |  false   |

### Expressions  6

Given an expression consisting of >, >=, ===, <, <=, compute it's value

``` js
console.log(1 > 4); // false
console.log(1 < 4); // true
console.log(4 >= 4); // true
console.log(4 <= 4); // true
console.log(4 === 4); // true

console.log((1 + 3) % 3 === 2 - 6 / 3 + 1) // true
```

### Expressions  7

Apply De Morgan's law to a boolean expression

* !(A || B) === ! A && ! B
* !(A && B) === ! A || ! B

``` js
console.log(!(true || false)) // false
console.log(!true && !false) // false (equivalent to above)
```

### Expressions  8

Given an expression that utilizes operator precedence, compute its value

``` js
console.log(1 + 2 * 3 + 4); // 11 (multiplication is performed first, then addition)
console.log(1 + 2 * 3 % 4); // 3 (multiplication and modulo are performed first, then addition)
```

### Expressions  9

Given an expression, use the grouping operator to change it's evaluation

``` js
console.log(1 + 2 * 3); // 7 (multiplication is performed first)
console.log((1 + 2) * 3); // 9 (addition is first because it is grouped)
```

### Expressions  10

Given expressions using == and ===, compute their values

``` js
console.log(4 == '4'); // true (coercion takes place)
console.log(4 === '4'); // false (the number and string are compared directly)
```

### Expressions  11

Given a code snippet using postfix ++, postfix --, +=, -=. /=, *=, predict the value of labeled lines

``` js
let age = 5;
console.log(age); // 5
age + 5;
console.log(age); // 5 (age was not reassigned above)
age += 5;
console.log(age); // 10 (+= is shorthand for age = age + 5, so age is reassigned)
age *= 5;
console.log(age); // 50
age -= 5;
console.log(age); // 45
age /= 5;
console.log(age); // 9
age++;
console.log(age); // 10 (++ is shorthand for age = age + 1, so age is reassigned)
age--;
console.log(age); // 9
```

### Expressions  12

Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.

``` js
let variable = 'This is a string';
console.log(variable) // This is a string (The value of the variable is what is printed, not the name.)
variable = 8
console.log(variable) // 8 (The variable can be reassigned from the string to an integer.)
variable = true
console.log(variable) // true (Reassignment to a boolean works, too!)
```

## Intro to Functions

### Functions  1
Define a function using function declaration

  + We use the `function` keyword to declare our intent to create a function.
  + We give our function a name (myNewFunction).
  + We capture any parameters that are passed in and assign them names (parameter1 and parameter2).
  + We open up a block with curly braces to house our function's code.
  + We do any functionality that we want our function to perform.
  + We use the `return` keyword to return a value from our function (otherwise we return `undefined`).

``` js
function myNewFunction(parameter1, parameter2) {
    console.log(parameter1);
    console.log(parameter2);
    return parameter1 + parameter2;
}
```

### Functions  2

Define a function that calculates the average of two numbers, call it, pass in arguments, and print it's return value

``` js
function averageOfTwo(num1, num2) {
    let sum = num1 + num2;
    let average = sum / 2;
    return average;
}

console.log(averageOfTwo(3, 7)) // 5
```

### Functions  3

Identify the difference between parameters vs arguments

* Parameters are in the function definition. They capture the values passed in to the function (arguments) as variable names and allow us to use those values in our function.
* Arguments are in the function invocation. They are the values that are passed in to the function.
* In [ 2](#functions--2) above,  `num1` and `num2` are the parameters while `3` and `7` are the arguments.

/*
More advanced examples:

*/

``` js
/

// ****************************************************************************************
// 1. Define a function that accepts a sentence string and two words as args.
//    The function should return a boolean indicating if the sentence includes either word.
// ****************************************************************************************

function twoWords(sentence, word1, word2) {
    if (sentence.includes(word1) || sentence.includes(word2)) {
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

function mutuallyExclusive(num1, num2) {
    if (num1 > num2) {
        console.log("The first number has a larger value.");
    } else {
        console.log("The numbers are either equal or the first number is smaller.");
    }
}

// mutuallyExclusive(13, 30);
// mutuallyExclusive(30, 13);
// mutuallyExclusive(30, 30);

// ****************************************************************************************
// 3. Given a for loop, translate it into a while loop, and vice-versa
// 4. Write a function that iterates through a provided string argument
// ****************************************************************************************

function forLoop(iterable) {
    for (let i = 0; i < iterable.length; i++) {
        // Here's how it goes:
        // first iteration, i === 0; true; log('stupendous')
        // second, i === 1; true; log(true);
        // third, i === 2; true; log(123);
        // fourth, i === 3; true; log('andrew yang');
        // fifth i === 4; false
        console.log(iterable[i]);
    }
}

function whileLoop(iterable) {
    let i = 0;
    while (i < iterable.length) {
        console.log(iterable[i]);
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

function pigLatin(str) {
    let vowels = "aeiouAEIOU";
    if (vowels.includes(str[0])) {
        return str + "yay";
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.includes(char)) {
            let firstHalf = str.slice(0, i); // "Kr"
            let secondHalf = str.slice(i); // "onktacular";
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

function findTheWord(arr, str) {
    // return arr.indexOf(str);
    if (arr.indexOf(str) !== -1) {
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

let array = ["Shamon", 1, true, "Blastorama", 1964];

// console.log(array[0]); // "shamon"
// console.log(array[3]); // "Blastorama"
// console.log(array[2]); // true
// console.log(array[5]); // undefined
// console.log(array[-1]); // undefined

// ****************************************************************************************
// Write a function doubler(numbers) that takes an array of numbers and returns a new array
// where every element of the original array is multiplied by 2.
// ****************************************************************************************

function doubler(numbers) {
    let doubledNums = [];

    let i = 0;
    while (i < numbers.length) {
        let old_num = numbers[i];
        let new_num = old_num * 2;
        // this step is important because concat does NOT change the original array
        doubledNums = doubledNums.concat(new_num);

        i += 1;
    }

    return doubledNums;
}

// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]

// ****************************************************************************************

function baller(str) {
    str = "shirt";
    return str;
}

console.log(baller("asdf"));
```

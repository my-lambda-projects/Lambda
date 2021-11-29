// get words into an array


const fs = require('fs');
const words = fs.readFileSync('./words.txt');
const wordsByline = words.toString().split('\r\n')


// print all words with double u

doubles = wordsByline.filter(w => w.includes('UU'))

// find a letter if never doubled

// create a list of doubles found
doubles = []

// iterate a each word
const getDoubleLetters = () => {

  for (let i = 0; i < wordsByline.length; i++) {
    let word = wordsByline[i]
//   check word for a double
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        if (!doubles.includes(word[i]))
// if a double is found add it to the list
          doubles.push(word[i])
      }
    }
  }
}

// checking to see what letters are not in the list of doubles
getDoubleLetters()

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const notDoublesArr = []

const notDoubles = () => {
  for (let i = 0; i < alphabet.length; i++) {
    if (!doubles.includes(alphabet[i])) {
      notDoublesArr.push(alphabet[i])
    }
  }
}

notDoubles()

// console.log(notDoublesArr)


// Enter your code here
let myArray = []
myArray.push('Jess Bonanno', 'Red')

const cutName = (name) => {
  return name.split(' ');
}

let myInfo = {}
myInfo.fullName = cutName(myArray[0])
myInfo.favoriteColor = myArray[1]
myInfo.github = 'https://github.com/JessBonanno'

function countAllCharacters(str) {
  // your code here
  let obj = {}
  for (const letter in str) {
    if (!obj[str[letter]]) {
      obj[str[letter]] = 1
    } else {
      obj[str[letter]] += 1
    }
  }
  return obj
}

// console.log(countAllCharacters('banana'))

function transformEmployeeData(employeeData) {
  // your code here
  result = []
  let count = 0
  employeeData.map(employee => {
    result.push({})
    employee.map(data => {
      let key = data[0]
      console.log(key)
      let val = data[1]
      result[count][key] = val
    })
    count += 1
  })
  return result
}

//
// console.log(transformEmployeeData([
//   [
//     ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//     ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ]))


function convertObjectToArray(obj) {
  // your code here
  let result = []
  for (const pair in obj) {
    result.push([pair, obj[pair]])
  }
  return result
}

// console.log(convertObjectToArray({
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }))


let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  // your code here
  let output = ''
  if (!customerData.hasOwnProperty(firstName)) {
    output = `Welcome! Is this your first time?`
  } else if (customerData[firstName].visits === 1) {
    output = `Welcome back,  ${firstName}! We're glad you liked us the first time!`
  } else {
    output = `Welcome back,  ${firstName}! So glad to see you again!`
  }
  console.log(output)
}

// console.log(greetCustomer('Terance'))

let users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];

const generateSampleView = (usersArray) => {
  let output = []
  usersArray.map(user => {
    if (user.id % 2 != 0) {
      output.push(user.email)
    } else {
      const userString = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
      output.push(userString)
    }
  })
  return output
}

// const assertArraysEqual = (actual, expected, testName) => {
//   if (actual === expected) {
//     return `passed ${testName}`
//   } else {
//     return `failed ${testName}`
//   }
// }

const assertArraysEqual = (actual, expected, testName) => {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (!expected.includes(actual[i])) {
        console.log(`failed ${testName}`)
        return
      }
    }
    console.log(`passed ${testName}`)
  }
}

// console.log(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 6], 'arr test'))


function average(numbers) {
  // uses sum function
  const sumOfNums = sum(numbers)
  // returns the average of an array of numbers
  return sumOfNums / numbers.length
}

function sum(numbers) {
  // returns the sum of an array of numbers
  let sumOfNums = 0
  numbers.map(num => {
    sumOfNums += num
  })
  return sumOfNums
}

// console.log(sum([1,2,3,4,5]))
// console.log(average([1,2,3,4,5]))


let classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
  "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
  "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function decorateClassListWithAges(classList) {
  let result = []
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
  classList.map(item => {
    result.push({
      name: item,
      age: getRandomIntInclusive(10, 11)
    })
  })
  return result
}

// console.log(decorateClassListWithAges(classList))
// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES


// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  let singles = new Set(text.toLowerCase())
  console.log(singles)
  console.log(singles.size)
  console.log(text.length)
  if (singles.size === text.length || text === '') {
    return true
  } else {
    return false
  }
}

// console.log(isIsogram('cat'))


// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  const repeats = {}
  for (const char in word) {
    if (!repeats[word[char]]) {
      repeats[word[char]] = 1
    } else {
      repeats[word[char]] += 1
    }
  }
  let letter = ''
  let highest = 0
  for (let repeat in repeats) {
    if (repeats[repeat] > highest) {
      highest = repeats[repeat]
      letter = repeat
    }
  }
  const result = {}
  result[letter] = highest
  return highest
}

// console.log(findMaxRepeatCountInWord('hellooo'))

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  const wordsList = text.split(' ')
  // For each word...
  for (word in wordsList) {
    // If that max repeat count is higher than the overall max repeat count, then
    // update maxRepeatCountOverall
    // update wordWithMaxRepeatCount
    let repeatCountForWord = findMaxRepeatCountInWord(wordsList[word])
    if (maxRepeatCountOverall < repeatCountForWord) {
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = wordsList[word]
    }
  }

  return wordWithMaxRepeatCount;
}

// console.log(findFirstWordWithMostRepeatedChars('this sentence is a tester' +
//   ' for repeated characters'))


// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
  console.log('test')
  let string = '';
  // your code here
  string = `${this.parenthesize(this.getAreaCode())} ${this.getExchangeCode()}-${this.getLineNumber()}`
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
  // your code here
  return this.numbers.slice(0, 3).join('')

};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
  // your code here
  return this.slice(3, 6)
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
  // your code here
  return this.slice(6, this.numbers.length)
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES

// let numbers = [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
//
// let myNumber = new PhoneNumberFormatter(numbers)
// console.log(myNumber.render())


// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  const words = sentence.split(' ')
  // iterate words and collect the palindromes
  const pal = words.filter(word => {
    if (isPalindrome(word.toLowerCase())) {
      return word
    }
  })
  // sort the list of palindromes by word length
  pal.sort(sortAscendingByLength)
  // return the largest item in the sorted list
  return pal[pal.length - 1]
}


function reverseString(string) {
  return string.split('').reverse().join('').toLowerCase()
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (word.toLowerCase() === reverseString(word)) {
    return true
  } else {
    return false
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}


const sentence = 'Mom makes lunch at noon on racecar plates wow'
// ASSERTION FUNCTION(S) TO BE USED
// console.log(findLongestPalindrome(sentence))
// TESTS CASES


/*
* Fashion Inventory Part-A
Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...
Here is an example of a flat list in code:

let flatList = "First line\nSecond Line\nThird Line\n";
console.log(flatList);
Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

Hint: the return value is a string. */

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function renderInventory(inventory) {
  let flatList = ''
  inventory.map(designer => {
    designer.shoes.map(shoe => {
      flatList += `${designer.name}, ${shoe.name}, ${shoe.price}\n`
    })
  })
  return flatList
}

//Create helper functions if needed
// console.log(renderInventory(currentInventory))


/*
* Fashion Inventory Part-B
Your function should return the average cost of all shoes per designer in this format:

let expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests. */


function calculateAveragePricePerDesigner(inventory) {
  let averagePrices = {
    'designers': []
  }
  inventory.map(designer => {
    let priceTotals = 0
    designer.shoes.map(shoe => {
      priceTotals += shoe.price
    })
    averagePrices.designers.push({
      'name': designer.name,
      'averagePrice': priceTotals / designer.shoes.length
    })
  })
  return averagePrices
}

// Create helper functions if needed


// console.log(calculateAveragePricePerDesigner(currentInventory))


/*

You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
1
Fashion Inventory Part-C
Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

Brunello Cucinelli, tasselled black low-top lace-up, 1000
Gucci, black leather laced sneakers, 900
Here is an example of a flat list in code:

let flatList = "First line\nSecond Line\nThird Line\n";
console.log(flatList);
Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.*/

function listAllBlackShoes(inventory) {
  let flatBlackList = ''
  inventory.map(designer => {
    designer.shoes.map(shoe => {
      if (shoe.name.includes('black')) {

        flatBlackList += `${designer.name}, ${shoe.name}, ${shoe.price}\n`
      }
    })
  })
  return flatBlackList
}

// console.log(listAllBlackShoes(currentInventory))


/*
*  The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

let expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];
There are no tests attached to this exercise. In order to get the most effective practice, please continue to write your own unit tests.*/

// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter


function listLacedShoes(inventory) {
  let lacedShoes = []
  inventory.map(designer => {
    designer.shoes.map(shoe => {
      if (shoe.name.includes('lace')) {
        let shoes = shoe.name.trim().split(' ')
        let laceIndex
        shoes.map(str => {
          if (str.includes('lace')) {
            console.log(str)
            laceIndex = shoes.indexOf(str)
          }
        })
        lacedShoes.push({
          'nameWords': shoes,
          'targetWordIndex': laceIndex
        })
      }
    })
  })
  return lacedShoes
}

// console.log(listLacedShoes(currentInventory))

/*
* Flipper
* // Submit de-obfuscated code
Flip every pair of characters in a string.


Example:
let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!*/


const flipPairs = (string) => {
  // declare helper string to hold the swapped pair
  let helperString = ''
  //  iterate entire string swapping current char with next char
  for (let i = 0; i < string.length; i += 2) {
    if (i == string.length - 1) {
      helperString += string[i]
    } else {
      helperString += string[i + 1]
      helperString += string[i]
    }
  }
  return helperString
}

// // assertion test
// const assertEqual = (actual, expected, testName) => {
//   if (actual === expected) {
//     console.log('passed')
//   } else {
//     console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`)
//   }
// }

// Submit de-obfuscated code
// Flip every pair of characters in a string.


// Example:
// const input = 'check out how interesting this problem is, it\'s insanely' +
//   ' interesting!';
// const output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

// test
// assertEqual(output, 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t' +
//   ' sniasenyli tnreseitgn!', 'flipPairs')


/*
* Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'*/

const flipEveryNLetters = (string, n) => {
  // declare helper string to hold the swapped characters
  let helperString = ''
  //  iterate entire string swapping the nth chuncks
  for (let i = 0; i < string.length; i += n) {
    let count = n - 1
    while (count >= 0) {
      helperString += string[i + count]
      count -= 1
    }

  }
  return helperString
}

// console.log(flipEveryNLetters('a short example', 5))

// assertion test
// const assertEqual = (actual, expected, testName) => {
//   if (actual === expected) {
//     console.log('passed')
//   } else {
//     console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`)
//   }
// }
//
// const input = 'a short example'
// const output = flipEveryNLetters(input, 5)
// const target = 'ohs axe trelpma'
//
// assertEqual(output, target, 'flipEveryNLetters')


/*
* Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd*/


const findSoleEvenOrOdd = (numberString) => {
  // convert the string to an array to better handle numbers larger than 1 digit
  const numArr = numberString.split(' ')
  // declare arrays to hold evens and odds for comparison later
  const evens = []
  const odds = []
  // iterate the array
  numArr.map(num => {
    // put current number in correct array
    if (num % 2 === 0) {
      evens.push(num)
    } else {
      odds.push(num)
    }
  })
  // find the array that is shorter
  let shorterArr
  if (evens.length < odds.length) {
    shorterArr = evens
  } else {
    shorterArr = odds
  }
  // return the index (1 based) of the item in the shorter array
  return numArr.indexOf(shorterArr[0]) + 1
}

// // assertion test
// const assertEqual = (actual, expected, testName) => {
//   if (actual === expected) {
//     console.log('passed')
//   } else {
//     console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`)
//   }
// }
//
// const input = '2 4 7 8 10'
// const output = findSoleEvenOrOdd(input)
// const target = 3
//
// assertEqual(output, target, 'findSoleEvenOrOdd')


/*
* You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d*/

const stringsArr = ['Hello', 'World']
const transposeTwoStrings = (arr) => {
  //  create helper string to store result
  let helperString = ''
  // get the length of the longer string
  let longestLength = 0
  if (arr[0].length > arr[1]) {
    longestLength = arr[0].length
  } else {
    longestLength = arr[1].length
  }
  // iterate both strings at once using a counter
  let counter = 0
  while (counter < longestLength) {
    //  check if there is a character at the word index of the counter
    if (arr[0][counter]) {
      // if so add it to the working string in place 1 with a trailing space
      helperString += `${arr[0][counter]} `
    } else {
      // if it does not exist add a space with a trailing space
      helperString += '  '
    }
    // repeat steps above for word 2 but add newline instead of trailing space
    if (arr[1][counter]) {
      // if so add it to the working string in place 1 with a trailing space
      helperString += `${arr[1][counter]}`
    } else {
      // if it does not exist add a space with a trailing space
      helperString += ' '
    }
    if (counter != longestLength - 1) {
      helperString += '\n'
    }
    counter += 1
  }
  return helperString
}


// // assertion test
// const assertEqual = (actual, expected, testName) => {
//   if (actual === expected) {
//     console.log('passed')
//   } else {
//     console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`)
//   }
// }
//
// const input = ['Hello', 'World']
// const output = transposeTwoStrings(input)
// const target = 'H W\ne o\nl r\nl l\no d'
//
//
// assertEqual(output, target, 'findSoleEvenOrOdd')


/*
* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]*/

const findPairForSum = (arr, target) => {
  //  create result array
  let sumPair = []
  //  iterate the input array and check for sums between all the numbers
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === target) {
        sumPair.push(arr[i])
        sumPair.push(arr[j])
        return sumPair
      }
    }
  }
  return sumPair
}

//
// // assertion test
// const assertEqual = (actual, expected, testName) => {
//   let isSameLength = false
//   let hasSameValues = false
//   if (actual.length === expected.length) {
//     isSameLength = true
//   }
//   if (isSameLength) {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] != expected[i]) {
//         hasSameValues = false
//         return
//       } else {
//         hasSameValues = true
//       }
//     }
//   }
//   if (hasSameValues && isSameLength) {
//     console.log('passed')
//   } else {
//     console.log(`Failed [${testName}] Expected "${expected}", but got "${actual}"`)
//   }
// }
//
// const input = [3, 34, 4, 12, 5, 2]
// const output = findPairForSum(input, 9)
// const target = [4, 5]
//
//
// assertEqual(output, target, 'findPairForSum')


/*
* Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '

 */

const checkRotatedString = (str1, str2) => {
  const doubledString = str1 += str1
  if (doubledString.includes(str2)) {
    return true
  } else {
    return false
  }
}


// console.log(checkRotatedString('hello world', 'orldhello w'))


/*
* Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).*/
//
// const binarySearch = (arr, target) => {
// //   1) Pick the midpoint:
//   let min = 0
//   let max = arr.length - 1
//   let midpoint
//   while (min <= max) {
//     midpoint = Math.floor((max + min) / 2)
//     if (arr[midpoint] === target) {
//       return midpoint
//     } else if (arr[midpoint] > target) {
//       max = midpoint - 1
//     } else if (arr[midpoint] < target) {
//       min = midpoint + 1
//     }
//   }
//   return null
// }
//
// console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 35)l
let url ="http://www.zombie-bites.com"

function getDomain(url) {
  // your code here

  return url.substring(url.indexOf('.') + 1).substring(0, url.indexOf('.'))
}

console.log(getDomain(url))

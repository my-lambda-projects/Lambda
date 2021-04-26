// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////

/**
 * ### Challenge `processLength`
 * 
 * @instructions
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * 
 * Implement a higher-order function called `processLength`.
 * It takes two arguments:
 * @param list an array with elements of any type.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the LENGTH of `list`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processLength` passing `['foo', 'bar']` and `(num) => num + 1000`,
 * should return 1002.
 * 
 * [2] Invoking `processLength` passing `[]` and `(num) => "There are " + num`,
 * should return "There are 0".
*/
function processLength(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `processLastItem`
 * 
 * @instructions
 * Implement a higher-order function called `processLastItem`.
 * It takes two arguments:
 * @param stringList array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the LAST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processLastItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'barbar'.
*/
function processLastItem(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `processSum`
 * 
 * @instructions
 * Implement a higher-order function called `processSum`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the SUM of `num1` and `num2`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processSum` passing `10`, `30` and `(num) => num + " is a big number!"`,
 * should return "40 is a big number!".
 * 
 * [2] Invoking `processSum` passing `-5`, '-1', and `(num) => num + 1000`,
 * should return 994.
*/
function processSum(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `processProduct`
 * 
 * @instructions
 * Implement a higher-order function called `processProduct`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the PRODUCT of `num1` and `num2`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processProduct` passing 2 and 7 and `(num) => num + " is a big number!"`,
 * should return "14 is a big number!".
 * 
 * [2] Invoking `processProduct` passing 25 and 0 and `(num) => num + 1000`,
 * should return 1000.
*/
function processProduct(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `processDuplicateFree`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * 
 * @instructions
 * Implement a higher-order function called `processDuplicateFree`.
 * It takes two arguments:
 * @param list array of elements of any kind.
 * @param callback function that takes an array as its argument.
 * @returns the result of invoking `callback` passing a de-duped version of `list`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processDuplicateFree` passing `[1,1,1,2]` and `(arr) => arr`,
 * should return `[1,2]`.
 * 
 * [2] Invoking `processDuplicateFree` passing `[1,1,2,2,3]` and `(arr) => arr.length`,
 * should return 3.
*/
function processDuplicateFree(/* CODE HERE ONLY AFTER COMPLETING ALL OTHER TASKS */) {
  /* CODE HERE ONLY AFTER COMPLETING ALL OTHER TASKS */
}

/////////////// HIGHER-ORDER ARRAY METHODS ///////////////
/////////////// HIGHER-ORDER ARRAY METHODS ///////////////


/**
 * ### Challenge `lowerCaseStrings`
 * 
 * @instructions
 * Implement this function using forEach().
 * 
 * @param strings an array of strings.
 * @returns an array of equal length to `strings` containing lowercased versions of each string.
 * 
 * 
 * Examples of usage of this function:
 * [1] Invoking `lowerCaseStrings` with `[ 'Orange', 'APPLE', 'banana', 'mAnGo']` will return `[ 'orange', 'apple', 'banana', 'mango' ]`.
 * 
 * [2] Invoking `lowerCaseStrings` with `['a', 'b', 'c' ]` will return `[ 'a', 'b', 'c' ]`.
*/
function lowerCaseStrings(/* code here */) {
  /* code here */
}

/**
 * ### Challenge `isItAnApple`
 * 
 * @instructions
 * Implement this function using map().
 * 
 * @param strings an array of strings.
 * @returns an array of equal length to `strings` containing `true` if the corresponding entry in the `strings` is 'apple' and `false` if it is anything else.
 * 
 * 
 * Examples of usage of this function:
 * [1] Invoking `isItAnApple` with `[ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]` will return `[ false, true, false, false, true, false ]`.
 * 
 * [2] Invoking `isItAnApple` with `['a', 'b', 'c' ]` will return `[ false, false, false ]`.
*/
function isItAnApple(/* code here */) {
  /* code here */
}

/**
 * ### Challenge `removeApple`
 * 
 * @instructions
 * Implement this function using filter().
 * 
 * @param strings an array of strings.
 * @returns a similar array, with an entries that are 'apple' removed.
 * 
 *This function is case sensitive and, for example, should not remove 'Apple' or 'APPLE'
 * 
 * Examples of usage of this function:
 * [1] Invoking `removeApple` with `[ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]` will return `[ 'orange', 'banana', 'apples', 'mango' ]`.
 * 
 * [2] Invoking `removeApple` with `['a', 'b', 'c' ]` will return `[ 'a', 'b', 'c' ]`.
*/
function removeApple(/* code here */) {
  /* code here */
}

/**
 * ### Challenge `stringSmash`
 * 
 * @instructions
 * Implement this function using reduce(). Do NOT use any other array methods.
 * 
 * @param strings an array of strings.
 * @returns a string with all entries in `strings` combined together.
 * 
 * 
 * Examples of usage of this function:
 * [1] Invoking `stringSmash` with `[ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]` will return 'orangeapplebananaapplesapplemango'.
 * 
 * [2] Invoking `stringSmash` with `['a', 'b', 'c' ]` will return `abc`.
*/
function stringSmash(/* code here */) {
  /* code here */
}

// A local community center is holding a fund raising 5k fun run and has invited
// 50 small businesses to make a small donation on their behalf for some much needed
// updates to their facilities. Each business has assigned a representative
// to attend the event along with a small donation.

/**
 * ### Challenge `getFullNames`
 * 
 * @instructions
 * Implement this function using forEach() or map().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' full names in the following format: "Smith, John".
 * The full names appear in the array in the same order the runners appear in the `runners` array.
*/
function getFullNames(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `firstNamesAllCaps`
 * 
 * @instructions
 * The event director needs to have all the runners' first names 
 * in uppercase because the director BECAME DRUNK WITH POWER.
 * Implement this function using map().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' first names in ALL CAPS.
 * The first names appear in the array in the same order the runners appear in the `runners` array.
*/
function firstNamesAllCaps(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `getRunnersByTShirtSize`
 * * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * 
 * @instructions
 * The event director needs a way to find the runners that need
 * a specific t-shirt size, so they can place the orders easily.
 * Implement this function using filter().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @param tShirtSize string (possible values are "S", "M", "L", "XL", "2XL", "3XL").
 * @returns an array containing only the runners that use the given `tShirtSize`.
 * The runners in the array appear in the same order they appear in the `runners` array.
*/
function getRunnersByTShirtSize(/* CODE HERE */) {
  /* CODE HERE */
}

/**
 * ### Challenge `tallyUpDonations`
 *  * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * 
 * @instructions
 * The donations need to be tallied up and reported for tax purposes.
 * Implement this function using reduce().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns a number which is the sum of the donations by all runners.
*/
function tallyUpDonations(/* CODE HERE */) {
  /* CODE HERE */
}

/////////////// CLOSURES ///////////////
/////////////// CLOSURES ///////////////

/**
 * ### Challenge `counterMaker`
 * 
 * @instructions
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/**
 * ### Challenge `counterMakerWithLimit`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * 
 * @instructions
 * Implement a counter maker that takes a max value for the count.
 * A counter created with it will reset itself after reaching the max value.
 * Usage is as follows:
 * 
 * const counter = counterMakerWithLimit(3)
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * etc
*/
function counterMakerWithLimit(/* CODE HERE */) {
  /* CODE HERE */
}

/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (processFirstItem) { module.exports.processFirstItem = processFirstItem }
  if (processLength) { module.exports.processLength = processLength }
  if (processLastItem) { module.exports.processLastItem = processLastItem }
  if (processSum) { module.exports.processSum = processSum }
  if (processProduct) { module.exports.processProduct = processProduct }
  if (processDuplicateFree) { module.exports.processDuplicateFree = processDuplicateFree }
  if (lowerCaseStrings ) { module.exports.lowerCaseStrings = lowerCaseStrings}
  if (isItAnApple) { module.exports.isItAnApple = isItAnApple }
  if (removeApple) { module.exports.removeApple = removeApple }
  if (stringSmash) { module.exports.stringSmash = stringSmash }
  if (getFullNames) { module.exports.getFullNames = getFullNames }
  if (firstNamesAllCaps) { module.exports.firstNamesAllCaps = firstNamesAllCaps }
  if (getRunnersByTShirtSize) { module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize }
  if (tallyUpDonations) { module.exports.tallyUpDonations = tallyUpDonations }
  if (counterMakerWithLimit) { module.exports.counterMakerWithLimit = counterMakerWithLimit }
}

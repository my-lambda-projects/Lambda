/*
  You are given an array of strings called arr and an integer k.
  Your task is to return the longest string consisting of k consecutive
  strings from the array.

  n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 */

function longestConsecutive(arr, k) {
  if (arr.length === 0 || arr.length < k || k <= 0) return '';
  return arr
    .map((value, index) => (
      arr.slice(index, index + k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest);
}

// TEST SUITE
const array = ['1', '22', '333', '55555', '4444', 'xx', '666666', 'ggg', 'q', 'kk'];
console.log(array.length);      // <--- 10
console.log(array.slice(3, 6)); // <--- [ '55555', '4444', 'xx' ]
console.log(array.join(''));    // <--- 122333555554444xx666666gggqkk
console.log(array.map((value, index) => (array.slice(index, index + 2).join('')))); // <--- ugly
console.log(array.reduce((longest, current) => (current.length > longest.length) ? current : longest)); // <--- six sixes
console.log(false || false || true);  // <--- true
console.log(false || true || false);  // <--- true
console.log(true || false || false);  // <--- true
console.log(true ? 'this' : 'that');  // <--- this
console.log(false ? 'this' : 'that'); // <--- that
console.log(longestConsecutive([], 1), "empty string")      // <--- '' - arr.length === 0
console.log(longestConsecutive(["one"], 2), "empty string") // <--- '' - arr.length < k
console.log(longestConsecutive([], -1), "empty string")     // <--- '' - k <= 0
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // <--- "abigailtheta"
console.log(longestConsecutive(["zone", "abigail", "theta", "antidisestablishmentarianism", "form", "libe", "zas"], 3)) // <--- "abigailtheta"
console.log(longestConsecutive(["zone", "abigail", "theta", "antidisestablishmentarianism", "capybara", "form", "libe", "zas"], 3)) // <--- "abigailtheta"

/*
 RESOURCES: google search "MDN <method name>", W3 schools, Free Code Camp
 ARRAY METHODS
 SLICE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 JOIN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 MAP: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 REDUCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 ALSO GOOD: https://medium.freecodecamp.org/reduce-f47a7da511a9
 */

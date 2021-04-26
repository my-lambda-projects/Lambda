// piazza: https://piazza.com/class/jc6vhnh8mdl5pw?cid=40
// youtube: https://youtu.be/Ft_nfW8GKiQ

function longestConsecutive(arr, k) {
  // n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
  // n = arr.length
  if (arr.length === 0 || arr.length < k || k <= 0) return '';

  // return the longest string consisting of k consecutive strings from the array.
  return arr
    .map((value, index) => (
      arr.slice(index, index + k).join('')
      ))
    .reduce((longest, current) => (current.length > longest.length) ? current : longest);
}

// TEST SUITE - swEEt!
// console.log(longestConsecutive([], 1), "empty string")      // <--- '' - arr.length === 0
// console.log(longestConsecutive(["one"], 2), "empty string") // <--- '' - arr.length < k
// console.log(longestConsecutive(['something'], -1), "empty string")     // <--- '' - k <= 0

// const array = ['1', '22', '333', '55555', '4444', 'xx', '666666', 'ggg', 'q', 'kk'];
// console.log(array.length);      // <--- 10
// console.log(array.slice(3, 6)); // <--- [ '55555', '4444', 'xx' ]
// console.log(array.join(''));    // <--- 122333555554444xx666666gggqkk
// console.log(array.map((value, index) => (array.slice(index, index + 2).join('')))); // <--- ugly
// console.log(array.reduce((longest, current) => current.length > longest.length ? current : longest)); // <--- six sixes


console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // <--- "abigailtheta"
console.log(longestConsecutive(["zone", "abigail", "theta", "antidisestablishmentarianism", "form", "libe", "zas"], 3)) // <--- ""
console.log(longestConsecutive(["zone", "abigail", "theta", "antidisestablishmentarianism", "capybara", "form", "libe", "zas"], 3)) // <--- ""

function getProduct(arr) {
 const ans = [];
 let soFar = 1;
 for (let i = 0; i < arr.length; i++) {
   ans[i] = soFar;
   soFar *= arr[i];
   // console.log(ans, soFar);
 }
 // console.log(ans, soFar);
 soFar = 1;
 // console.log(ans, soFar);
 for (let i = arr.length - 1; i >= 0; i--) {
   ans[i] *= soFar;
   soFar *= arr[i];
   // console.log(ans, soFar);
 }
return ans;
}

// TEST SUITE
console.log(getProduct([1, 9, 6, 5, 2])); // --> [540, 60, 90, 108, 270]
// console.log(getProduct([21, -7, 13, 4, 2.5])); // --> [ -910, 2730, -1470, -4777.5, -7644 ]

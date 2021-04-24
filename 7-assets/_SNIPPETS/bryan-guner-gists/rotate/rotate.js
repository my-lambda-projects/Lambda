let rotateRight = function (array, num) {
  let result = array.slice(0);
  for (let i = 0; i < num; i++) {
    let ele = result.pop();
    result.unshift(ele);
  }
  return result;
};
//let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2));
//["d", "e", "a", "b", "c"];
console.log(arr);
["a", "b", "c", "d", "e"];
let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals, 3));
//["koala", "opossum", "kangaroo", "wombat"];
console.log(animals);
//["wombat", "koala", "opossum", "kangaroo"];

let rotateRight = function (array, num) {
  let result = array.slice(0);
  for (var i = 0; i < num; i++) {
    let ele = result.pop();
    result.unshift(ele);
  }
};
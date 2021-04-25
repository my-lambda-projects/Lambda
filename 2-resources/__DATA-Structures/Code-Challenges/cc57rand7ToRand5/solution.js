// https://piazza.com/class/j63w1pdyopf7kj?cid=63
// https://youtu.be/zRA4SxsAfDY

// Code for `rand7` function:
function rand7() {
  return Math.floor( Math.random() * 7 ) + 1;
}

// Iterative solution:
function rand5() {
  let result = 7; // some arbitrary number here; it will be overwritten
  while ( result > 5 ) {
    result = rand7();
  }
  return result;
}

// Recursive solution:
function rand5() {
  let roll = rand7();
  return roll <= 5 ? roll : rand5();
}

// Jesh's more math-y solution:
function rand5() {
  let temp = rand7() + rand7() + rand7() + rand7() + rand7();
  temp = temp % 5 + 1;
  return temp;
}

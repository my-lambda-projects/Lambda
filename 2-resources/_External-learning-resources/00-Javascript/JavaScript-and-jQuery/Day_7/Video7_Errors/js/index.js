// PART 1
function one(a) {
  return two(`One! ${a}`);
}
function two(b) {
  return three(`Two! ${b}`);
}
function three(c) {
  throw new Error("I do not want to stop");
  return `Three! ${c}`;
}

try {
  console.log(one("STOP!"));
  console.log("worked!");
} catch (err) {
  console.log(err.stack);
  console.error(err);
}

console.log("YEAAAA!");

///// PART 2
function getItems() {
  const items = localStorage.getItem("items");
  return JSON.parse(items);
}

var firstItem;

try {
  firstItem = getItems()[0];
} catch (err) {
  firstItem = "NO ITEM!";
}

console.log(firstItem);

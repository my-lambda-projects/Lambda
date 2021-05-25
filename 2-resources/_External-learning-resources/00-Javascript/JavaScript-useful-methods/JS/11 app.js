const myObj = {
  first: "Laurence",
  last: "Svekis",
};
console.log(myObj);
let myStr = JSON.stringify(myObj);
console.log(myStr);
let newObj = JSON.parse(myStr);
console.log(newObj.first);
console.log(newObj.last);

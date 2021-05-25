let myStr2 =
  "HelloWorld JavaScript 123 this works sometestemail@gmail.com  I love temail@gmail.com JavaScript 44 sample@email.com";
let exp2 = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let emailData = myStr2.match(exp2);
console.log(emailData);
for (let x = 0; x < emailData.length; x++) {
  console.log(emailData[x]);
}
let myStr = "Hello World 12 JavaScript 44 thjis works i love JavaScript 444";
let reg = /(\w+)\s(\w+)/;
let temp1 = myStr.replace("Hello", "People");
temp1 = myStr.replace(reg, "Bye People");
console.log(temp1);
console.log(myStr.match(/J/));
console.log(myStr.match(/J/gi));
console.log(/JavaScript/.test(myStr));
console.log(/[0-9]/.test(myStr));
console.log(/\d+/.exec(myStr));
let myArr = ["one", "two", "three", "four", "two"];
let temp2 = myArr.toString();
let temp3 = myArr.join("....");
console.log(temp3.search(/two/));
console.log(temp3.match(/two/gi));

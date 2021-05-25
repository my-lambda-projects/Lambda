let d = new Date();
let val;
//d = Date.now();
d = new Date(2020, 11, 15, 5, 10, 30, 40);
//d = new Date(10000000000000);
//d = d.toString();
//d = d.toDateString();
//d = new Date("2020-12-31");
//d = new Date("2020/12/27");
val = d.getDate();
val = d.getDay(); //0-6
val = d.getTime();
val = d.getMilliseconds();
val = d.getUTCMilliseconds();
val = d.getHours(); //local time
val = d.getUTCHours(); //universal time
let days = 100;
const newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
console.log(newDate);
console.log(val);

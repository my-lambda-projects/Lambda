Source Code
const myObj = {
    first: "Laurence"
    , last: "Svekis"
}
let temp = JSON.stringify(myObj);
localStorage.setItem('obj', temp);
let nObj = JSON.parse(localStorage.getItem('obj'));
console.log(nObj);
if (localStorage.getItem('num')) {
    let cnt = localStorage.getItem('num');
    cnt = Number(cnt);
    cnt++;
    localStorage.setItem('num', cnt);
}
else {
    localStorage.setItem('num', 1);
}
console.log(localStorage.getItem('num'));
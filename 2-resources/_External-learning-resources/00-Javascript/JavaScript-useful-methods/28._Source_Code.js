Source Code
const el = document.querySelector('div');
el.style.width = "100px";
el.style.height = "123px";
el.style.position = "absolute";
el.style.top = "55px";
el.style.left = "33px";
el.style.backgroundColor = "red";
console.log(el.getBoundingClientRect());
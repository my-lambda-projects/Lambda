Source Code
const intervalID = window.setInterval(myCallback, 500, 'interval');
const timeoutID = window.setTimeout(myCallback, 500, 'setTimeout');
const el = document.querySelector('div');
let y = 10;
const inTimer = window.setInterval(counter, 1000);
 
function counter() {
    el.textContent = y;
    y--;
    if (y < 0) {
        clearInterval(inTimer);
    }
}
 
function myCallback(mes) {
    console.log(mes);
}
 
function stopInterval() {
    clearInterval(intervalID);
}
let x = 0;
el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = 'red';
el.style.fontSize = '3em';
 
function step() {
    x++;
    el.style.transform = 'translateX(' + x + 'px)';
    if (x < 450) {
        window.requestAnimationFrame(step);
    }
}
window.requestAnimationFrame(step);
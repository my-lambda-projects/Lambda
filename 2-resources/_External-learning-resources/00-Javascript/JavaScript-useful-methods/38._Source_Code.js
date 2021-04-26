Source Code
const el = document.createElement('input');
el.setAttribute('type', 'text');
el.setAttribute('value', '10');
document.body.appendChild(el);
const btn = document.querySelector('button');
btn.addEventListener('click', cal);
 
function cal() {
    let num = el.value;
    try {
        if (num === "") throw "No Value";
        if (isNaN(num)) throw "not a number";
        document.querySelector('div').textContent = num * 10;
    }
    catch (error) {
        document.querySelector('div').textContent = error;
    }
    finally {
        el.value = "";
    }
}
 
function tester() {
    let num = el.value;
    try {
        if (num === "") throw "No Value";
        if (isNaN(num)) throw "not a number";
        num = Number(num);
        if (num > 5) throw "over 5";
        if (num < 5) throw "under 5";
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("this will always run");
    }
}
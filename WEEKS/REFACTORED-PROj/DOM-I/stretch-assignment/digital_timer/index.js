let digits = document.querySelector(".digits");
let digitOne = document.querySelector("#secondTens");
let digitTwo = document.querySelector("#secondOnes");
let digitThree = document.querySelector("#msHundreds");
let digitFour = document.querySelector("#msTens");
let startButton = document.querySelector("#startB");
let resetButton = document.querySelector("#resetB");
let timeInCentiseconds = 0;
let seconds;
let timeoutT;
let continueB = true;

const timer = () => {
  timeInCentiseconds += 1;
  continueB = true;
  if (timeInCentiseconds == 1000) {
    clearTimeout(timeoutT);
    continueB = false;
    digits.style.color = "red";
  }
  if (continueB) {
    timeoutT = setTimeout(timer, 10);
  }
  updater();
};

const updater = () => {
  seconds = Math.floor(timeInCentiseconds / 100);
  x = seconds.toString().split("");
  y = (timeInCentiseconds % 100).toString().split("");
  if (x.length == 1) {
    x.unshift("0");
  }
  if (y.length == 1) {
    y.unshift("0");
  }
  digitOne.innerHTML = x[0];
  digitTwo.innerHTML = x[1];
  digitThree.innerHTML = y[0];
  digitFour.innerHTML = y[1];
};

resetButton.onclick = () => {
  clearTimeout(timeoutT);
  continueB = false;
  timeInCentiseconds = 0;
  digits.style.color = "black";

  digitOne.innerHTML = "-";
  digitTwo.innerHTML = "-";
  digitThree.innerHTML = "-";
  digitFour.innerHTML = "-";
};
startButton.onclick = () => {
  if (seconds !== 0 && timeInCentiseconds !== 0) {
    alert("Timer is already active.");
  } else {
    timer();
  }
};

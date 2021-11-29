/**
  1) Write some code to display a clock that updates every second.  It should look roughly like this:

  -------------
  |           |
  | 11:50 PM  |
  |           |
  -------------

  2) Stretch goal: Add PLUS button that increments the HOUR
  3) Stretch goal: Add MINUS button that decrements the HOUR

  You can use the render function below, or write your own code that renders the HTML.
  Feel free to use Google.
**/

function timeout() {
  setInterval(function () {
    render();
  }, 10);
}

function hoursAMPM(milHours) {
  if (milHours >= 0) {
    milHours = milHours % 24;
  } else {
    milHours = 24 - Math.abs(milHours % 24);
  }
  if (milHours < 12 && milHours !== 0) {
    return ['' + milHours, 'AM'];
  } else if (milHours === 0) {
    return ['12', 'AM'];
  } else if (milHours === 12) {
    return ['12', 'PM'];
  } else {
    return ['' + (milHours - 12), 'PM'];
  }
}

function minuteMod(minutes) {
  if (minutes < 10) {
    return '0' + minutes;
  } else {
    return minutes;
  }
}

var N = 0;

var plus = document
  .getElementById('plus_hour')
  .addEventListener('click', function () {
    N++;
  });

var minus = document
  .getElementById('minus_hour')
  .addEventListener('click', function () {
    N--;
  });

function render() {
  var now = new Date();
  var app = document.getElementById('app');
  var hourTime = hoursAMPM(now.getHours() + N);
  var minuteTime = minuteMod(now.getMinutes());
  var secondTime = minuteMod(now.getSeconds());

  app.innerHTML =
    '' + hourTime[0] + ':' + minuteTime + ':' + secondTime + ' ' + hourTime[1];
}

//render()

timeout();

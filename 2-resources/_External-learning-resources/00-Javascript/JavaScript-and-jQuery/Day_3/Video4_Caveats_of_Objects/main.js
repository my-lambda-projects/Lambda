var myTimer = {};

myTimer.count = 0;

myTimer.sayCount = function () {
  console.log(this.count++);
};

var fn = myTimer.sayCount;

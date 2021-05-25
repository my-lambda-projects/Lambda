const runStat = {
  time: {
    hours: 0,
    minutes: 54,
    seconds: 32,
  },
};

Object.defineProperty(runStat, "distance", {
  configurable: false,
  enumerable: true,
  get: function () {
    return this._distance;
  },
  set: function (value) {
    this._distance = value;
    this._calories = value * 40;
  },
});

Object.defineProperty(runStat, "calories", {
  configurable: false,
  enumerable: true,
  get: function () {
    return this._calories;
  },
  // NO SETTER
});

runStat.distance = 12;
console.log(runStat.distance);
console.log(runStat.calories);
console.log(Object.keys(runStat));

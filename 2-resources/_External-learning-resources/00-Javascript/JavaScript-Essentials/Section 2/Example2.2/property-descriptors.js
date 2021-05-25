"use strict";

const runStat = {
  // distance: 10.2,
  time: {
    hours: 0,
    minutes: 54,
    seconds: 32,
  },
  calories: 590,
};

Object.defineProperty(runStat, "distance", {
  configurable: true,
  enumerable: true,
  writable: false,
  value: 10.2,
});

// runStat.distance = 14; //error in strict mode

const distancePropertyDescriptor = Object.getOwnPropertyDescriptor(
  runStat,
  "distance"
);
console.log(distancePropertyDescriptor);
console.log(Object.keys(runStat));

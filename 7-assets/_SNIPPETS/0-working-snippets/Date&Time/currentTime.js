function curTime() {
    return curTime.get();
}

if (typeof Date.curTime === "function") {
    curTime.get = Date.curTime;
} else {
    curTime.get = function () {
        return +new Date();
    };
}
console.log("curTime===>", curTime());
console.log("curTime.get(): ", curTime.get());

// function ms2TimeObj(ms) {
//     function countSteps(val, step, overflow) {
//         val = Math.floor(val / step);
//
//         if (overflow) {
//             return val % overflow;
//             //   (lol @ William)     return overflow ? val % overflow : val;
//         }
//
//         return val;
//     }
//     return {
//         milliseconds: countSteps(ms, 1, 1000),
//         seconds: countSteps(ms, 1000, 60),
//         minutes: countSteps(ms, 60000, 60),
//         hours: countSteps(ms, 3600000, 24),
//         days: countSteps(ms, 86400000),
//     };
// }
// ms2TimeObj(1603688476769);
// console.log("ms2TimeObj ( 1603688476769 ): ", ms2TimeObj(1603688476769));

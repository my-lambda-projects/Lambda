(function () {
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
    console.log("curTime.get(): ", curTime.get());
    return curTime;
})();

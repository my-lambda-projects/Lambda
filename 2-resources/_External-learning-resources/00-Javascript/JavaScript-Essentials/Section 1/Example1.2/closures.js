function callIn5(cb) {
  setTimeout(cb, 5000);
}

(function () {
  var a = 1;
  var b = 10;

  function addAndPrint() {
    let result = a + b;
    console.log(result);
  }

  callIn5(addAndPrint);
})();

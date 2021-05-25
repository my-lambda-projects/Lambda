"use strict";

var myVar = 21;

function a() {
  var myVar = 2;
  console.log(myVar);
}

function b() {
  var myVar = 3;
  console.log(myVar);
}

function c() {
  console.log(myVar);
}

a();
b();
c();

(function () {
  var myVar = 4;
  console.log(myVar);
})();

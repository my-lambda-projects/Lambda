function a() {
  var myVar = 1;
  for (var i = 0; i < 10; i++) {
    var myVar = i + 1;
    console.log(myVar);
  }
  console.log(myVar);
}

a();

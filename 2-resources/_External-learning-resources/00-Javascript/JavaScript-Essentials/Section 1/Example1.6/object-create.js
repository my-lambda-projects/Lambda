var objA = {
  a: 1,
};

var objB = Object.create(objA);
objA.b = 2;

var objC = Object.create(objB);
objC.c = 3;

console.log(objC.c);
console.log(objC.b);
console.log(objC.a);
console.log(objC.prototype);

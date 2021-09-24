const reverseString = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverseString('geeksForgEeks'));

const reverseCase = (str) => {
  return str.replace(/./g, (c) => {
    switch (c) {
      case c.toUpperCase():
        return c.toLowerCase();
      default:
        return c.toUpperCase();
    }
  });
};

function csOppositeReverse(txt) {
  return reverseCase(reverseString(txt));
}
// // csOppositeReverse("geeksForgEeks");
console.log(
  '🚀 ~ file: reverse-order-case-string.js ~ line 28 ~ csOppositeReverse(geeksForgEeks)',
  csOppositeReverse('geeksForgEeks')
);
// // csOppositeReverse("hello every one");
console.log(
  '🚀 ~ file: reverse-order-case-string.js ~ line 30 ~ csOppositeReverse(hello every one)',
  csOppositeReverse('hello every one')
);

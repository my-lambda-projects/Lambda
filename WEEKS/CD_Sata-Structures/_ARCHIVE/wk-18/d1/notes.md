# Converting Bases In JS

```js
/*
PARSEINT METHOD
The **parseInt( )** method takes the two arguments, the first argument is `string` and the second argument is `base` by using that it returns the decimal number of a specified base.

In JavaScript, a number has a super useful method toString(radix) that converts its value in decimal to a string of that number in the specified radix.

On the contrary, the parseInt(string, radix) function converts a string in the specified radix to a decimal number.
*/
//--------------------------------------------------------------------------------------------------------------------------
/*
To convert a binary to decimal we need to pass base `2` as a second argument to the `parseInt` method.
 */
const binaryNumber = '1100';
console.log(parseInt(binaryNumber, 2));
//--------------------------------------------------------------------------------------------------------------------------
/*
To convert a hexadecimal to decimal we need to pass base `16` as a second argument to the `parseInt` method.
    */
const hex = 'c';
console.log(parseInt(hex, 16));
//--------------------------------------------------------------------------------------------------------------------------
//-----------------------------Generalized Base Converter:
function changeBase(number, fromBase, toBase) {
  if (fromBase == 10) return parseInt(number).toString(toBase);
  else if (toBase == 10) return parseInt(number, fromBase);
  else {
    let numberInDecimal = parseInt(number, fromBase);
    return parseInt(numberInDecimal).toString(toBase);
  }
}
/*
    Refactored Solution:
    */
const convertNumberBetweenBases = ({ number, fromRadix, toRadix }) => {
  const decimal = parseInt(number, fromRadix);
  const toRadixNumber = decimal.toString(toRadix);
  return toRadixNumber;
};

//Binary to hex

convertNumberBetweenBases({
  number: '1111011',
  fromRadix: 2,
  toRadix: 16,
});
// '7b'

//Hex to binary
convertNumberBetweenBases({
  number: '7b',
  fromRadix: 16,
  toRadix: 2,
});
// '1111011'
//--------------------------------------------------------------------------------------------------------------------------
/*
Decimal to binary
    */
const number = 123;
number.toString(2); // '1111011'
//--------------------------------------------------------------------------------------------------------------------------
/*
Decimal to hexadecimal
    */
const number = 123;
number.toString(16); // '7b'
//--------------------------------------------------------------------------------------------------------------------------
/*
Binary to decimal
    */ parseInt('1111011', 2); // 123
//--------------------------------------------------------------------------------------------------------------------------
/*Hex to decimal

    */ parseInt('7b', 16); // 123
//--------------------------------------------------------------------------------------------------------------------------
```

In JavaScript, a number has a super useful method `toString(radix)` that converts its value in decimal to a string of that number in the specified radix.

On the contrary, the `parseInt(string, radix)` function converts a string in the specified radix to a decimal number.

Go ahead!

## Decimal to binary

    const number = 123;
    number.toString(2); // '1111011'

## Decimal to hex

    const number = 123;
    number.toString(16); // '7b'

## Decimal to octal

    const number = 123;
    number.toString(8); // '173'

## Binary to decimal

    parseInt('1111011', 2); // 123

## Hex to decimal

    parseInt('7b', 16); // 123

## Octal to decimal

    parseInt('173', 8); // 123

## Universal conversion function

To convert a number in decimal to other bases and vice versa are very straightforward. To convert a number between other bases, such as binary to hex, requires a little more effort. But do not worry, it is not too hard to implement.

There are 2 steps:

1.  Convert the input number (or string) from the source base to decimal
2.  Convert that decimal number to the destination base

    const convertNumberBetweenBases = ({ number, fromRadix, toRadix }) => { const decimal = parseInt(number, fromRadix); const toRadixNumber = decimal.toString(toRadix); return toRadixNumber; };

Let’s try with some examples!

## Binary to hex

    convertNumberBetweenBases({
      number: '1111011',
      fromRadix: 2,
      toRadix: 16,
    });
    // '7b'

## Binary to octal

    convertNumberBetweenBases({
      number: '1111011',
      fromRadix: 2,
      toRadix: 8,
    });
    // '173'

## Hex to binary

    convertNumberBetweenBases({
      number: '7b',
      fromRadix: 16,
      toRadix: 2,
    });
    // '1111011'

## Hex to octal

    convertNumberBetweenBases({
      number: '7b',
      fromRadix: 16,
      toRadix: 8,
    });
    // '173'

## Octal to binary

    convertNumberBetweenBases({
      number: '173',
      fromRadix: 8,
      toRadix: 2,
    });
    // '1111011'

## Octal to hex

    convertNumberBetweenBases({
      number: '173',
      fromRadix: 8,
      toRadix: 16,
    });
    // '7b'

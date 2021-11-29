# Converting (binary,hex,octal) to decimal numbers in JavaScript

> In this tutorial, we are going to learn about how to convert binary, hexadecimal and octal to decimal numbers in JavaScript. parseInt In…

In this tutorial, we are going to learn about how to convert binary, hexadecimal and octal to decimal numbers in JavaScript.

## [](#parseint)parseInt

In JavaScript, we have the `parseInt()` method by using that we can make conversions.

The **parseInt( )** method takes the two arguments, the first argument is `string` and the second argument is `base` by using that it returns the decimal number of a specified base.

Let’s see the conversions with the help of examples.

## [](#converting-binary-to-decimal)Converting binary to decimal

To convert a binary to decimal we need to pass base `2` as a second argument to the `parseInt` method.

    const binaryNumber = "1100";

    console.log(parseInt(binaryNumber,2));

## [](#converting-hexadecimal-to-decimal)Converting hexadecimal to decimal

To convert a hexadecimal to decimal we need to pass base `16` as a second argument to the `parseInt` method.

    const hex = "c";

    console.log(parseInt(hex,16));

## [](#converting-octal-to-decimal)Converting octal to decimal

To convert a octal to decimal we need to pass base `8` as a second argument to the `parseInt` method.

    const octal = "14";

    console.log(parseInt(octal,8));

You can also learn, [how to convert decimal to (binary, hexadecimal, octal) numbers in JavaScript](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/javascript-convert-decimals/).

[Source](https://reactgo.com/javascript-convert-binary-decimals/)

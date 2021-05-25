# Lecture 6 Notes - JavaScript Functions, Parameters, Arguments
## [@1m28s](https://youtu.be/WmFRlpd1GTM?t=1m28s) LECTURE STARTS
- Last week's homework: fizzbuzz
```js
for (var i = 0; i < 100; i++) {
  if (i === 0) {
    console.log(i + ' c\'mon, it\'s ZERO!');
  } else if (i % 15 === 0) {
    console.log('fizzbuzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(i);
  }
};
```

## [@6m8s](https://youtu.be/WmFRlpd1GTM?t=6m8s) FUNCTIONS
- examples:
  - `alert('Hello');` loads an alert window
    - `alert()` only works in browser console, see: https://stackoverflow.com/a/11618468/5225057 "`alert()` function is a property of browser `window` objects")
  - `console.log('hello');` prints to the console window
  - `prompt('enter something:');` prompts for user input
  - `document.write('words');` writes text to the document
- note the parentheses ()
- a way to save a command (or any block of code) so it can be recalled efficiently without having to rewrite the entire command - simple and concise
- e.g. a simple operation: `5 + 5;` can be written in a function:  

  ```js
  var addTwoFives = function() {
    console.log(5 + 5);
  }
  //and called by the function name:
  addTwoFives();
  ```
- e.g. loading an alert window:
  ```js
  var sayHello = function() {
    alert('hello!');
  }

  sayHello();
  ```

## [@13m50s](https://youtu.be/WmFRlpd1GTM?t=13m50s) PARAMETERS
- `var funcName = function(parameter1, parameter2, parameter3...) {do_something};`
- abstract variables which stand for the values (arguments, or operands) which a function processes, e.g.

  ```js
  var addTwoNumbers = function(operand1, operand2) {
    console.log(operand1 + operand2);
  };
  ```

## [@14m2s](https://youtu.be/WmFRlpd1GTM?t=14m2s) ARGUMENTS
- `funcName(argumemt1, argument2, argument3...);`
- the actual values passed into the function parameters when the function is invoked, e.g.
  ```js
  var addTwoNumbers = function(operand1, operand2) {
    console.log(operand1 + operand2);
  };

  addTwoNumbers(8, 3);  // <--- eight and three are the arguments passed to the function.
  ```
- also e.g.
  ```js
  var saySomething = function(a_string) {
    alert(a_string);
  }

  saySomething('Something amazing!'); // <--- 'Something amazing' is the argument passed in to the function
  ```

## [@16m42s](https://youtu.be/WmFRlpd1GTM?t=16m42s) HOISTING
- https://lambdaschool.com/javascript-hoisting-explained
- JavaScript will scan the script prior to compiling for runtime. First it will look for functions (and other variables) before looking for function calls, so you can put function calls in the script prior to the actual function.


## [@22m48s](https://youtu.be/WmFRlpd1GTM?t=22m48s) SCOPE
- global variables are outside of functions and available to all functions within the program
- local variables are inside functions and only available to the function

  ```js
  var sayHello = function() = {
    var greeting = 'hello'; // <--- 'greeting' ONLY available within the SCOPE of the sayHello function
    alert(alert);
  };

  sayHello(); // <--- alerts with 'hello'
  console.log(greeting); // <--- scope out of range error
  ```

## [@27m7s](https://youtu.be/WmFRlpd1GTM?t=27m7s) [HOMEWORK](https://github.com/austenallred/lswebhomework6)
- install node and npm (already done)
- basically a repeat of the homework from the JS mini Boot Camp.

## [@33m50s](https://youtu.be/WmFRlpd1GTM?t=33m50s) RETURN
- vs. undefined
- what the function and program return to memory.

## CLOSURE AND FOR LOOPS
- https://lambdaschool.com/closure-and-for-loops
- https://lambdaschool.com/javascript-closures-explained

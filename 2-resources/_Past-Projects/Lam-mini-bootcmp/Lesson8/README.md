# Lecture 8 Notes - Callback functions
## [@1m34s](https://youtu.be/ffc6Le_UBQI?t=1m34s) LECTURE STARTS
- https://jsfiddle.net
- Advanced JavaScript Concepts, Callback functions, what they are, how to write them, how they fit into the overall architecture.
- Data Structure, algorithms, full stack JS web development, incl: React, Redux, servers, DB's etc.
- Computer architecture, compiled languages, etc.

## [@6m58s](https://youtu.be/ffc6Le_UBQI?t=6m58s) Callback Funtions
- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
- Functions are flexible - they can be passed around. Callbacks: passing one function into another function.
- we can pass function from one function into another (just like numbers, strings, arrays, objects, etc.)
- a basic function:
  ```js
  function sayHi() {
    console.log('hi');
  }
  ```
- "calling" a basic function:
  ```js
  sayHi();
  ```
- No arguments, passed in, not returning anything, basic ***named function declaration*** syntax:
  ```js
  function_keyword name() {
    do something;
  }
  ```
- Generally the way callback functions are used is by constructing a function parameter which is called in the body of the function and then by passing an anonymous inline function:
  ```js
  function sayHi(cb) { // <--- function parameter
    cb();              // <--- invoking the function parameter
  }

  sayHi(function() {   // <--- anonymous inline function argument
    console.log('hi'); // <--- does something
  });
  ```
- "anonymous" functions: simply, they don't have a name
- essentially, this is a different code pattern, but the result is the same thing as if we made a named function declaration like so:
  ```js
  var cb = function() {
    console.log('hi');
  }

  cb();
  ```
- Functions can be in arrays, on objects, pass them in to functions, even return the from functions
- Closure... returning an anonymous functions... "higher order functions"

## [@12m58s](https://youtu.be/ffc6Le_UBQI?t=12m58s)
- functional programming in JavaScript
  ```js
  // [1, 2, 3] --> 6
  function sum(numbers, cb) { // <--- cb often takes the place of a return statement
    return numbers.reduce(function(accumulator, value) {
      // console.log(accumulator, value);
      return accumulator + value;
    });
  }

  console.log(sum([1, 2, 3]));
  ```
- Using the cb:
  ```js
  // [1, 2, 3] --> 6
  function sum(numbers, cb) {
    var result = numbers.reduce(function(accumulator, value) {
      return accumulator + value;
    });
    cb(result);
  }

  sum([1, 2, 3], function(result) {
      console.log(result);
  });
  ```
- synchronous vs. asynchronous code...

## [@21m25s](https://youtu.be/ffc6Le_UBQI?t=21m25s)
- return the last item in an array
- synchronous code
  ```js
  // [1, 2, 3, 4, 5] --> 5
  function last(anArray, cb) {
    cb(anArray[anArray.length - 1]);
  }

  last([1, 2, 3, 4, 5], function(lastItem){
    console.log(lastItem);
  });
  ```

## [@24m45s](https://youtu.be/ffc6Le_UBQI?t=24m45s)
- http://underscorejs.org

## [@26m40s](https://youtu.be/ffc6Le_UBQI?t=26m40s)
- Asynchronous requests (JQuery, Axios, etc.)
- the spot where the process is gonna come back and revisit the code at a later point in time.\
- Things we're glossing over: "this" keyword, constructors, hoisting, ES6, recursion, closure, etc.

## [@29m50s](https://youtu.be/ffc6Le_UBQI?t=29m50s)
- Closures
- Callbacks are where you pass a function into another functions.
- **Higher order functions**: functions that return an anonymous function.
  ```js
  function foo() { // <--- foo(); returns an anonymous function
    return function() {
      console.log('hi');
    };
  }

  var bar = foo();

  bar();
  ```
- Kinda like saying:
  ```js
  var bar = function() {
    console.log('hi');
  };
  ```
- Functional design principles stem from closures, e.g. decorators.

## [@33m27s](https://youtu.be/ffc6Le_UBQI?t=33m27s)
- Invoking the return:
  ```js
  function foo() {
    return function() {
      console.log('hi');
    };
  }

  foo()(); // <--- returns 'hi'
  ```
- foo() returns the function in it's UN-RUN state, but the second parenthetical call RUNS the function which was returned from foo(), hence foo()();
- Closure and scope
  ```js
  function foo() {
    var message = 'hi'; // <--- function retains access to it's original 'closure' scope
    return function() {
      console.log(message);
    };
  }

  var message = 'sup'   // <--- ignored
  foo()();              // <--- returns 'hi'
  ```

### [@43m15s](https://youtu.be/ffc6Le_UBQI?t=43m15s)
- MORE EXPLANATION OF Higher Order Function Syntax:
  ```js
  function foo() {
    return function() {
      console.log('hi');
    };
  }

  foo()();
  ```
- the `foo()` part returns the "pre-run" inner function and the following `();` returns the inner function after being run, e.g.
  ```js
  function foo() {
    return function() {
      console.log('hi');
    };
  }

  console.log(foo());
  console.log(foo()());
  ```

## [@38m35s](https://youtu.be/ffc6Le_UBQI?t=38m35s)
- Scope
- this works:
  ```js
  function foo() {
    function bar() {
      function baz() {
        var topLevelVar = 'hello'; // <--- Scope OK√
        console.log(topLevelVar);
      }
      baz();
    }
    bar();
  }
  foo();
  ```
- works:
  ```js
  function foo() {
    function bar() {
      var topLevelVar = 'hello';  // <--- Scope OK√
      function baz() {
        console.log(topLevelVar); // console call sees var in OUTER function
      }
      baz();
    }
    bar();
  }
  foo();
  ```
- works:
  ```js
  function foo() {
    var topLevelVar = 'hello'; // <--- Scope OK√
    function bar() {
      function baz() {
        console.log(topLevelVar); // console call sees var in OUTER function
      }
      baz();
    }
    bar();
  }
  foo();
  ```
- from within a function, it can reach out and see everything within the functions it is contained withing
- sibling functions cannot see into each other, e.g. bar and baz are on the same level:
  ```js
  function foo() {
    function bar() {
      var topLevelVar = 'hello';
    }
    function baz() {
      console.log(topLevelVar); // <--- ERROR
    }
    bar();
    baz();
  }
  foo(); // <--- ERROR
  ```
- Also:
  ```js
  function foo() {
    function bar() {
      var topLevelVar = 'hello'; // <--- not available outside bar()
    }
    function baz() {
    }
    bar();
    baz();
    console.log(topLevelVar); // <--- ERROR
  }
  foo(); // <--- ERROR
  ```

## [@48m45s](https://youtu.be/ffc6Le_UBQI?t=48m45s)
- Recursion
- a snake eating it's tail...
- a function can call itself from inside of itself...
  ```js
  function foo() {
    foo();
  }
  ```
  - This example will create an infinite loop
  - A BASE CASE is used to exit or terminate the loop.
  - Iteration with a function. Anything that can be done with recursion can also be done with a for or while loop. While loops are generally more efficient.
  - Recursion adds frames to the call stack, can be an expensive process, but can be simpler than a for/while loop with complex solutions. E.g. searching a tree, or a graph data structure, linked list or searching and sorting algorithms, etc.
- e.g. Factorial!
- factorial 5, or, (5!) is `5 * 4 * 3 * 2 * 1 = 120`
  ```js
  function factorial(n) {
    if (n <= 1 ) return 1;       // <--- BASE CASE
    return n * factorial(n - 1); // <--- Recursive call to factorial()
  }

  console.log(factorial(5));     // <--- 120
  ```

## [@54m45s](https://youtu.be/ffc6Le_UBQI?t=54m45s) DEBUGGING
- use print statements throughout the code.
- In Chrome the keyword `debugger;` will pause execution
- http://pythontutor.com to visualize code

## [@56m45s](https://youtu.be/ffc6Le_UBQI?t=56m45s) Homework
- Callback
- https://github.com/SunJieMing/lswebhomework8

***
fin

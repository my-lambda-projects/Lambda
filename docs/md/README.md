---
description: week3 day1
---

# Closure-and-Scope



## Visualizing Scope And Closures

```javascript
1  function createCounter() {
2      let counter = 0;
3 
4      return function() {
5         counter += 1;
6         return counter;
7      }
8  }
9
10  var counter = createCounter();
11
12  console.log("counter1: " + counter());
13  console.log("counter1: " + counter());
14
15  const counter2 = createCounter();
16  console.log("counter2: " + counter2());
```

`t0: before line 1`

```javascript
{
    counter: undefined
}
```

`t1: after line 1`

```javascript
{
    counter: undefined,
    createCounter: [Function#1#createCounter]
}
```

`t2: line 10`

```javascript
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 0,
        anon: [Function#2#anon]
    }
}
```

`t3: after line 12`

```javascript
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 1,
        anon: [Function#2#anon]
        AFS: { // anonymousFunctionScope

        }
    }
}
```

`t4: after line 13`

```javascript
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 2,
        anon: [Function#2#anon],
        AFS: { // returned

        },
        AFS2: { // anonymousFunctionScope

        }
    }
}
```

`t5: after line 15`

```javascript
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 2,
        anon: [Function#2#anon],
        AFS: { // returned

        },
        AFS2: { // returned

        }
    },
    CCFS2: { // createCounterFunctionScope #2!
        counter: 0,
        anon: [Function#3#anon]
    },
    counter2: [Function#3#anon]
}
```

`t6: after line 16`

```javascript
{
    counter: [Function#2#anon],
    createCounter: [Function#1#createCounter],
    CCFS: { // createCounterFunctionScope
        counter: 2,
        anon: [Function#2#anon],
        AFS: { // returned

        },
        AFS2: { // returned

        }
    },
    CCFS2: { // createCounterFunctionScope #2!
        counter: 1,
        anon: [Function#3#anon],
        AFS: { // anonymousFunctionScope

        },
    },
    counter2: [Function#3#anon]
}
```

```javascript
// Scope
// scope answers the question of where are my functions and variables available to me
const cohort = 'Web43';
console.log( cohort )
// const and let are not attached to the window object but var is
// global variables are defined outside of functions or blocks of code and would be available to me anywhere in my program

// functions are scoped similar to the way variable are scoped
let study = 'HTML and CSS';

function printThree() {
  let study = 'JavaScript';
  return `We are studying ${study}`;
}
console.log( printThree() );
console.log(study)

  /*
  | 12: 18: 41 | bryan @LAPTOP - 9 LGJ3JGS: [ d1 ] d1_exitstatus: 1 __________________________________________________________o >
    node w3d1.js
  Web43
  We are studying JavaScript
  HTML and CSS
   
  */

// const dog = 'Ada'
// function callDog () {
//   console.log( dog );
//   callDog();
// }
// puppy();


//var can be redeclared and updated
/*
var
- can be redecleared 
- can be updated 
- is function scoped 

let 
- cannot be redecleared 
- can be updated
- is block scoped 

const 
- cannot be redecleared 
- cannot be updated 
- is block scoped 
*/

if ( 1 === 1 ) {
  var answer = true;
} // these {} are a block of code and let and const cannot escape them

// console.log(answer);

for ( let i = 0; i < 5; i++ ) {
  console.log( i );
}



if(1 === 1){
  var answer = true;
} // these {} are a block of code and let and const cannot escape them

// console.log(answer);

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log(i);

/*using const until we can't and then let but avoid var*/

function sayHi(name){
  var hello = 'hi';
  function yell(){
    console.log(name.toUpperCase());
  }
  yell();
}

sayHi('Natalie');

// yell();

console.log(hello);

```

**Variables** are used to store information to be referenced and manipulated in a computer program. A variable's sole purpose is to label and store data in computer memory. Up to this point we've been using the `let` keyword as our only way of declaring a JavaScript variable. It's now time to expand your tool set to learn about the different kinds of JavaScript variables you can use!

When you finish this reading, you should be able to:

* Identify the three keywords used to declare a variable in JavaScript
* Explain the differences between `const`, `let` and `var`
* Identify the difference between function and block-scoped variables
* Paraphrase the concept of hoisting in regards to function and block-scoped

  variables

### Declaring variables

All the code you write in JavaScript is _evaluated_. **A variable always evaluates to the value it contains no matter how you declare it.**

#### The different ways to declare variables

In the beginning there was `var`. The `var` keyword used to be the only way to declare a JavaScript variable. However, in ECMAScript 2015 JavaScript introduced two new ways of declaring JavaScript variables: `let` and `const`. Meaning, in JavaScript there are **three different ways to declare a variable**. Each of these keywords has advantages and disadvantages and we will now talk about each keyword at length.

1. `let`: any variables declared with the keyword `let` _allows you to reassign_

   that variable. Variable declared using `let` is scoped within a **block**.

2. `const`: any variables declared with the keyword `const` \_will not allow you

   to reassign\_ that variable. Variable declared using `const` is scoped within

   a **block**.

3. `var`: A `var` declared variable may or may not be reassigned, and the

   variable is **scoped to a function**.

For this course and for your programming career moving forward we recommend you **always** use `let` & `const`. These two words allow us to be the most clear with our intentions for the variable we are creating.

### Hoisting and scoping with variables

A wonderful definition of hoisting by Mabishi Wakio, "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution."

What this means is that when you run JavaScript code the variables and function declarations will be _hoisted_ to the top of their particular scope. This is important because `const` and `let` are **block-scoped** while `var` is **function-scoped**.

Let's start by talking more about all `const`, `let`, and `var` before we dive into why the difference of scopes and hoisting is important.

#### Function-scoped variables

When JavaScript was young the only available variable was `var`. The `var` keyword creates _function-scoped_ variables. That means when you use the `var` keyword to declare a variable that variable will be confined to the scope of the current function.

Here is a simple example of declaring a `var` variable within a function:

```javascript
function test() {
  var a = 10;

  console.log(a); // => 10
}
```

One of the drawbacks of using `var` is that it is a less indicative way of defining a variable.

**Hoisting with function-scoped variables**

Let's take a look at what hoisting does to a function-scoped variable:

```javascript
function test() {
  console.log(hoistedVar); // => undefined

  var hoistedVar = 10;
}

test();
```

Huh - that's weird. You'd expect an error from referring to a variable like `hoistedVar` before it's defined, something like: `ReferenceError: hoistedVar is not defined`. However this is not the case because of _hoisting_ in JavaScript!

So essentially hoisting will isolate and, in the computer's memory, will declare a variable as the top of it's scope. With a function-scoped variable, `var`, the name of the variable will be hoisted to the top of the function. In the above snippet, since `hoistedVar` is declared using the `var` keyword the `hoistedVar`'s scope is the `test` function. To be clear what is being hoisted is the _declaration_, not the _assignment_ itself.

In JavaScript, all variables defined with the `var` keyword have an initial value of `undefined`. Here is a translation of how JavaScript would deal with hoisting in the above `test` function:

```javascript
function test() {
  // JavaScript will declare the variable *in computer memory* at the top of it's scope
  var hoistedVar;

  // since hoisting declared the variable above we now get
  // the value of 'undefined'
  console.log(hoistedVar); // =>  undefined

  var hoistedVar = 10;
}
```

#### Block-scoped variables

When you are declaring a variable with the keyword `let` or `const` you are declaring a variable that exists within _block scope_. Blocks in JavaScript are denoted by curly braces\(`{}`\). The following examples create a block scope: `if` statements, `while` loops, `switch` statements, and `for` loops.

**Using the keyword let**

We can use `let` to declare **re-assignable block-scoped variables**. You are, of course, very familiar with `let` so let's take a look at how `let` works within a block scope:

```javascript
function blockScope() {
  let test = "upper scope";
  if (true) {
    let test = "lower scope";
    console.log(test); // "lower scope"
  }
  console.log(test); // "upper scope"
}
```

In the example above we can see that the `test` variable was declared twice using the keyword `let` but since they were declared within different scopes they have different values.

JavaScript will raise a `SyntaxError` if you try to declare the same `let` variable twice in one block.

```javascript
if (true) {
  let test = "this works!";
  let test = "nope!"; // Identifier 'test' has already been declared
}
```

Whereas if you try the same example with `var`:

```javascript
var test = "this works!";
var test = "nope!";
console.log(test); // prints "nope!"
```

We can see above that `var` will allow you to redeclare a variable twice which can lead to some very confusing and frustrating debugging.

Feel free to peruse the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) for the keyword `let` for more examples.

**Using the keyword const**

We use `const` to declare **block-scoped variables** that can **not** be reassigned. In JavaScript variables that cannot be reassigned are called **constants**. Constants should be used for values that will not be re-declared or re-assigned.

Properties of constants:

* They are block-scoped like `let`.
* JavaScript enforces constants by raising an error if you try to reassign them.
* Trying to redeclare a constant with a `var` or `let` by the same name will

  also raise an error.

Let's look at a quick example of what happens when trying to reassign a constant:

```javascript
> const favFood = "cheeseboard pizza"; // Initializes a constant
undefined

> const favFood = "inferior food"; // Re-initialization raises an error
TypeError: Identifier 'favFood' has already been declared

> let favFood = "other inferior food"; // Re-initialization raises an error
TypeError: Identifier 'favFood' has already been declared

> favFood = "deep-dish pizza"; // Re-assignment raises an error
TypeError: Assignment to constant variable.
```

We cannot reassign a constant, but constants that are assigned to Reference types are **mutable**. The name binding of a constant is immutable. For example, if we set a constant equal to an Reference type like an object, we can still modify that object:

```javascript
const animals = {};
animals.big = "beluga whale"; // This works!
animals.small = "capybara"; // This works!

animals = { big: "beluga whale" }; // Will error because of the reassignment
```

Constants cannot be reassigned but, just like with `let`, new constants of the same names can be declared within nested scopes.

Take a look at the following for an example:

```javascript
const favFood = "cheeseboard pizza";
console.log(favFood);

if (true) {
  // This works! Declaration is scoped to the `if` block
  const favFood = "noodles";
  console.log(favFood); // Prints "noodles"
}

console.log(favFood); // Prints 'cheeseboard pizza'
```

Just like with `let` when you use `const` twice in the same block JavaScript will raise a `SyntaxError`.

```javascript
if (true) {
  const test = "this works!";
  const test = "nope!"; // SyntaxError: Identifier 'test' has already been declared
}
```

**Hoisting with block-scoped variables**

When JavaScript ES6 introduced new ways of declaring a variable using `let` and `const` the idea of block-level hoisting was also introduced. Block scope hoisting allows developers to avoid previous debugging debacles that naturally happened from using `var`.

Let's take a look at what hoisting does to a _block-scoped_ variable:

```javascript
if (true) {
  console.log(str); // => Uncaught ReferenceError: Cannot access 'str' before initialization
  const str = "apple";
}
```

Looking at the above we can see that an explicit error is thrown if you attempt to use a block-scoped variable before it was declared. This is the typical behavior in a lot of programming languages - that a variable cannot be referred to until initialized to a value.

However, JavaScript is still performing hoisting with block-scoped declared variables. The difference lies is how it _initializes_ them. Meaning that `let` and `const` variables are **not** initialized to the value of `undefined`.

The time before a `let` or `const` variable is declared, but not used is called the _Temporal Dead Zone_. A very cool name for a simple idea. Variables declared using `let` and `const` are not initialized until their definitions are evaluated. Meaning, you will get an error if you try to reference a `let` or `const` declared variable before it is evaluated.

Let's look at one more example that should illuminate the presence of the _Temporal Dead Zone_:

```javascript
var str = "not apple";

if (true) {
  console.log(str); //Uncaught ReferenceError: Cannot access 'str' before initialization
  let str = "apple";
}
```

In the above example we can see that inside the `if` block the `let` declared variable, `str`, throws an error. Showing that the error thrown by a `let` variable in the temporal dead zone takes precedence over any scope chaining that would attempt to go to the outer scope to find a value for the `str` variable.

#### Function scope vs. block scope

Let's now take a deeper look at the comparison of using function vs. block scoped variables.

Let's start with a simple example:

```javascript
function partyMachine() {
  var string = "party";
  console.log("this is a " + string);
}
```

Looks good so far but let's take that example a step farther and see some of the less fun parts of the `var` keyword in terms of scope:

```javascript
function partyMachine() {
  var string = "party";

  if (true) {
    // since var is not block-scoped and not constant
    // this assignment sticks!
    var string = "bummer";
  }

  console.log("this is a " + string);
}

partyMachine(); // => "this is a bummer"
```

We can see in the above example how the flexibility of `var` can ultimately be a bad thing. Since `var` is function-scoped _and_ can be reassigned and re-declared without error it is very easy to overwrite variable values by accident.

This is the problem that ES6 introduced `let` and `const` to solve. Since `let` and `const` are block-scoped it's a lot easier to avoid accidentally overwriting variable values.

Let's take a look at the example function above rewritten using `let` and `const`:

```javascript
function partyMachine() {
  const string = "party";

  if (true) {
    // this variable is restricted to the scope of this block
    const string = "bummer";
  }

  console.log("this is a " + string);
}
partyMachine(); // => "this is a party"
```

### Global variables

If you leave off a declaration when initializing a variable, it will become a global. **Do not do this.** We declare variables using the keywords `var`, `let`, and `const` to ensure that our variables are declared within a proper scope. Any variables declared without these keywords will be declared on the _global scope_.

JavaScript has a single global scope, which means all of the files from your projects and any libraries you use will **all be sharing the same scope**. Every time a variable is declared on the global scope, the chance of a name collision increases. If we are unaware of the global variables in our code, we may accidentally overwrite variables.

Let's look at a quick example showing why this is a bad idea:

```javascript
function good() {
  let x = 5;
  let y = "yay";
}

function bad() {
  y = "Expect the unexpected (eg. globals)";
}

function why() {
  console.log(y); // "Expect the unexpected (eg. globals)""
  console.log(x); // Raises an error
}

why();
```

Limiting global variables will help you create code that is much more easily maintainable. Strive to write your functions so that they are self-contained and not reliant on outside variables. This will also be a huge help in allowing us test each function by itself.

One of our jobs as programmers is to write code that can be integrated easily within a team. In order to do that, we need to limit the number of globally declared variables in our code as much as possible, to avoid accidental name collisions.

Sloppy programmers use global variables, and you are not working so hard in order to be a sloppy programmer!



The **scope** of a program in JavaScript is the set of variables that are available for use within the program. If a variable or other expression is not in the current scope, then it is unavailable for use. If we declare a variable, this variable will only be valid in the scope where we declared it. We can have nested scopes, but we'll see that in a little bit.

When we declare a variable in a certain scope, it will evaluate to a specific value **in that scope**. We have been using the concept of scope in our code all along! Now we are just giving this concept a name.

By the end of this reading you should be able to predict the evaluation of code that utilizes local scope, block scope, lexical scope, and scope chaining

### Advantages of utilizing scope

Before we start talking about different types of scope we'll be talking about the two main advantages that scope gives us:

1. **Security** - Scope adds security to our code by ensuring that variables can

   only be accessed by pre-defined parts of our programs.

2. **Reduced Variable Name Collisions** - Scope reduces variable name

   collisions, also known as namespace collisions, by ensuring you can use the

   same variable name multiple times in different scopes without accidentally

   overwriting those variable's values.

### Different kinds of scope

There are three types of scope in JavaScript: `global scope`, `local scope`, and `block scope`.

#### Global scope

Let's start by talking about the widest scope there is: _global scope_. The _global scope_ is represented by the `window` object in the browser and the `global` object in Node.js. Adding attributes to these objects makes them available throughout the entire program. We can show this with a quick example:

```javascript
let myName = "Apples";

console.log(myName);
// this myName references the myName variable from this scope,
// so myName will evaluate to "Apples"
```

The variable `myName` above is not inside a function, it is just lying out in the open in our code. The `myName` variable is part of _global scope_. The Global scope is the largest scope that exists, it is the outermost scope that exists.

While useful on occasion, global variables are best avoided. Every time a variable is declared on the global scope, the chance of a name collision increases. If we are unaware of the global variables in our code, we may accidentally overwrite variables.

#### Local scope

The **scope** of a function is the set of variables that are available for use within that function. We call the scope within a function: _local scope_. The _local scope_ of a function includes:

1. the function's arguments
2. any local variables declared inside the function
3. **any variables that were already declared when the function was defined**

In JavaScript when we enter a new function we enter a **new scope**:

```javascript
// global scope
let myName = "global";

function function1() {
  // function1's scope
  let myName = "func1";
  console.log("function1 myName: " + myName);
}

function function2() {
  // function2's scope
  let myName = "func2";
  console.log("function2 myName: " + myName);
}

function1(); // function1 myName: func1
function2(); // function2 myName: func2
console.log("global myName: " + myName); // global myName: global
```

In the code above we are dealing with three different scopes: the global scope, `function1`, and `function2`. Since each of the `myName` variables were declared in separate scopes, we _are_ allowed to reuse variable names without any issues. This is because each of the `myName` variables is bound to their respective functions.

#### Block scope

A block in JavaScript is denoted by a pair of curly braces \(`{}`\). Examples of block statements in JavaScript are `if` conditionals or `for` and `while` loops.

When using the keywords `let` or `const` the variables defined within the curly braces will be _block scoped_. Let's look at an example:

```javascript
// global scope
let dog = "woof";

// block scope
if (true) {
  let dog = "bowwow";
  console.log(dog); // will print "bowwow"
}

console.log(dog); // will print "woof"
```

#### Scope chaining: variables and scope

A key scoping rule in JavaScript is the fact that **an** _**inner**_ **scope does have access to variables in the** _**outer**_ **scope**.

Let's look at a simple example:

```javascript
let name = "Fiona";

// we aren't passing in or defining and variables
function hungryHippo() {
  console.log(name + " is hungry!");
}

hungryHippo(); // => "Fiona is hungry"
```

So when the `hungryHippo` function is declared a new local scope will be created for that function. Continuing on that line of thought what happens when we refer to `name` inside of `hungryHippo`? If the `name` variable is not found in the immediate scope, JavaScript will search all of the accessible outer scopes until it finds a variable name that matches the one we are referencing. Once it finds the first matching variable, it will stop searching. In JavaScript this is called _scope chaining_.

Now let's look at an example of scope chaining with nested scope. Just like functions in JavaScript, a scope can be nested within another scope. Take a look at the example below:

```javascript
// global scope
let person = "Rae";

// sayHello function's local scope
function sayHello() {
  let person = "Jeff";

  // greet function's local scope
  function greet() {
    console.log("Hi, " + person + "!");
  }
  greet();
}

sayHello(); // logs 'Hi, Jeff!'
```

In the example above, the variable `person` is referenced by `greet`, even though it was never declared within `greet`! When this code is executed JavaScript will attempt to run the `greet` function - notice there is no `person` variable within the scope of the `greet` function and move on to seeing if that variable is defined in an outer scope.

Notice that the `greet` function prints out `Hi, Jeff!` instead of `Hi, Rae!`. This is because JavaScript will start at the inner most scope looking for a variable named `person`. Then JavaScript will work it's way outward looking for a variable with a matching name of `person`. Since the `person` variable within `sayHello` is in the next level of scope above `greet` JavaScript then stops it's scope chaining search and assigns the value of the `person` variable.

Functions such as `greet` that use \(ie. **capture**\) variables like the person variable are called **closures**. We'll be talking a lot more about closures very soon!

**Important** An inner scope can reference outer variables, but an outer scope cannot reference inner variables:

```javascript
function potatoMaker() {
  let name = "potato";
  console.log(name);
}

potatoMaker(); // => "potato"

console.log(name); // => ReferenceError: name is not defined
```

#### Lexical scope

There is one last important concept to talk about when we refer to scope - and that is _lexical scope_. Whenever you run a piece of JavaScript that code is first parsed before it is actually run. This is known as the _lexing time_. In the _lexing time_ your parser resolves variable names to their values when functions are nested.

The main take away is that _lexical scope_ is determined at _lexing time_ so we can determine the values of variables without having to run any code. JavaScript is a language **without dynamic** scoping. This means that by looking at a piece of code we can determine the values of variables just by looking at the different scopes involved.

Let's look at a quick example:

```javascript
function outer() {
  let x = 5;

  function inner() {
    // here we know the value of x because scope chaining will
    // go into the scope above this one looking for variable named x.
    // We do not need to run this code in order to determine the value of x!
    console.log(x);
  }
  inner();
}
```

In the `inner` function above we don't need to run the `outer` function to know what the value of `x` will be because of _lexical scoping_.

The **scope** of a program in JavaScript is the set of variables that are available for use within the program. Due to _lexical scoping_ we can determine the value of a variable by looking at various scopes without having to run our code. _Scope Chaining_ allows code within an _inner_ scope to access variables declared in an _outer_ scope.

There are three different scopes:

* _global scope_ - the global space is JavaScript
* _local scope_ - created when a function is defined
* _block scope_ - created by entering a pair of curly braces


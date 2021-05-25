# Scope



## All About Scope

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

## Different Kinds of Variables

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

dentify the different ways to declare a variable in JavaScript

* Explain the differences between `const`, `let` and `var`
* Identify the difference between function and block-scoped variables
* Paraphrase the concept of hoisting in regards to variables

## Calculating Closures

What is a _closure_? This question is one of the _most frequent interview questions_ where JavaScript is involved. If you answer this question quickly and knowledgeably you'll look like a great candidate. We know you want to know it all so let's dive right in!

The official definition of a closure from MDN is, "A closure is the combination of a function and the lexical environment within which that function was declared." The practicality of how a _closure_ is used it simple: a _closure_ is when an inner function uses, or changes, variables in an outer function. Closures in JavaScript are incredibly important in terms of the creativity, flexibility and security of your code.

When you finish this reading you should be able to implement a closure and explain how that closure effects scope.

### Closures and scope

Let's look at an example of a simple closure below:

```javascript
function climbTree(treeType) {
  let treeString = "You climbed a ";

  function sayClimbTree() {
    // this inner function has access to the variables in the outer scope
    // in which is was defined - including any defined parameters
    return treeString + treeType;
  }

  return sayClimbTree();
}

// We assign the result to a variable
const sayFunction = climbTree("Pine");

// So we can call it, and indeed the variables have been saved in the closure
// and the sayFunction prints out their values.
console.log(sayFunction); // You climbed a Pine
```

In the above snippet the `sayClimbTree` function captures and uses the `treeString` and `treeType` variables within its own inner scope.

Let's go over some basic closure rules:

1. Closures have access to any variables within its own, as well as any outer

   function's, scope when they are declared. This is where the \_lexical

   environment _comes in - the \_lexical environment_ consists of any variables

   available within the scope in which the closure was declared \(which are the

   local inner scope, outer function's scope, and global scope\).

2. A closure will keep reference to all the variables when it was defined \*\*even

   if the outer function has returned\*\*.

Notice above that even though the above `climbTree` had run its `return` statement the inner function of `sayClimbTree` **still has access** to the variables\(`treeString` and `treeType`\) from the outer scope where it was declared. So, even after an outer function has returned, an inner function will still have access to the outer function’s variables.

Let's look at another example of a closure:

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);

console.log(add5(2)); // prints 7
```

In the above example the function the anonymous function within the `makeAdder` function **closes over** the `x` variable and utilizes it within the inner anonymous function. This allows us to do some pretty cool stuff like creating the `add5` function above. Closures are your friend ❤️.

### Applications of closures

Let's take a look at some of the common and practical applications of closures in JavaScript.

#### Private State

Information hiding is incredibly important in the world of software engineering. JavaScript as a language does not have a way of declaring a function as exclusively private, as can be done in other programming languages. We can however, use _closures_ to create private state within a function.

The following code illustrates how to use _closures_ to define functions that can emulate private functions and variables:

```javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // => 1
console.log(counter()); // => 2

//we cannot reach the count variable!
counter.count; // undefined
let counter2 = createCounter();
console.log(counter2()); // => 1
```

In the above code we are storing the anonymous inner function inside the `createCounter` function onto the variable `counter`. The `counter` variable is now a _closure_. The `counter` variable **closes over** the inner `count` value inside `createCounter` even after `createCounter` has returned.

By **closing over** \(or **capturing**\) the `count` variable, each function that is return from `createCounter` has a **private**, mutable state that cannot be accessed externally. There is no way any outside function beside the closure itself can access the `count` state.

#### Passing Arguments Implicitly

We can use closures to pass down arguments to helper functions without explicitly passing them into that helper function.

```javascript
function isPalindrome(string) {
  function reverse() {
    return string
      .split("")
      .reverse()
      .join("");
  }

  return string === reverse();
}
```

How to implement a closure and explain how that closure effects scope.

## Context in JavaScript

It's now time to dive into one of the most interesting concepts in JavaScript: the idea of **context**.

Programmers from the junior to senior level often confuse _scope_ and _context_ as the same thing - but that is not the case! Every function that is invoked has **both** a scope and a context associated with that function. _Scope_ refers to the visibility and availability of variables, whereas _context_ refers to the value of the `this` keyword when code is executed.

When you finish this reading you should be able to:

* Define a method that references `this` on an object
* Identify what `this` refers to in a code snippet
* Utilize the built in `Function#bind` to maintain the context of `this`

### What about `this`?

When learning about objects we previously came across the idea of a _method_. A _method_ is a function that is a value within an object and belongs to an object.

There will be times when you will have to know which object a method belongs to. The keyword `this` exists in every function and it evaluates to the object that is currently invoking that function. So the value of `this` relies entirely on **where** a function is invoked.

That may sound pretty abstract, so let's jump into an example:

```javascript
let dog = {
  name: "Bowser",

  isSitting: true,

  stand: function () {
    this.isSitting = false;
    return this.isSitting;
  },
};

// Bowser starts out sitting
console.log(dog.isSitting); // prints `true`

// Let's make him stand
console.log(dog.stand()); // prints `false`

// He's actually standing now!
console.log(dog.isSitting); // prints `false`
```

Inside of a method, we can use the keyword `this` to refer to the object that is calling that method! So when calling `dog.stand()` and we invoke the code of the `stand` method, `this` will refer to the `dog` object.

Still skeptical? Don't take our word for it, check `this` \(heh\) out:

```javascript
let dog = {
  name: "Bowser",

  test: function () {
    return this === dog;
  },
};

console.log(dog.test()); // prints `true`
```

In short, by using the `this` keyword inside a method, we can refer to values within that object.

Let's look at another example of this:

```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

cat.purrMore();
```

Through the `this` variable, the `purrMore` method can access the object it was called on. In `purrMore`, we use `this` to access the `cat` object that has a `purr` method. In other words, inside of the `purrMore` function if we had tried to use `purr()` instead of `this.purr()` it would not work.

When we invoked the `purrMore` function using `cat.purrMore` we used a **method-style** invocation.

Method style invocations follow the format: `object.method(args)`. You've already been doing this using built in data type methods! \(i.e. `Array#push`, `String#toUpperCase`, etc.\)

Using _method-style invocation_ \(note the _dot notation_\) ensures the method will be invoked and that the `this` within the method will be the object that method was called upon.

Now that we have gone over what `this` refers to - you can have a full understanding of the definition of context. **Context refers to the value of `this` within a function and `this` refers to where a function is invoked**.

### Issues with scope and context

In the case of context the value of `this` is determined by _how_ a function is invoked. In the above section we talked briefly about _method-style invocation_, where `this` is set to the object the method was called upon.

Let's now talk about what `this` is when using normal _function style invocation_.

If you run the following in Node:

```javascript
function testMe() {
  console.log(this); //
}

testMe(); // Object [global] {global: [Circular], etc.}
```

When you run the above `testMe` function in Node you'll see that `this` is set to the `global` object. To reiterate: each function you invoke will have _both_ a context and a scope. So even running functions in Node that are not defined explicitly on declared objects are run using the global object as their `this` and therefore their context.

#### When methods have an unexpected context

So let's now look at what happens when we try to invoke a method using an unintended context.

Say we have a function that will change the name of a dog object:

```javascript
let dog = {
  name: "Bowser",
  changeName: function () {
    this.name = "Layla";
  },
};
```

Now say we wanted to take the `changeName` function above and call it somewhere else. Maybe we have a callback we'd like to pass it to or another object or something like that.

Let's take a look at what happens when we try to isolate and invoke just the `changeName` function:

```javascript
let dog = {
  name: "Bowser",
  changeName: function () {
    this.name = "Layla";
  },
};

// note this is **not invoked** - we are assigning the function itself
let change = dog.changeName;
console.log(change()); // undefined

// our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

// instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```

So in the above code notice how we stored the `dog.changeName` function _without invoking it_ to the variable `change`. On the next line when we did invoke the `change` function we can see that we did not actually change the `dog` object like we intended to. We created a new key value pair for `name` on the global object! This is because we invoked change without the context of a specific object \(like `dog`\), so JavaScript used the only object available to it, the **global object**!

The above example might seem like an annoying inconvenience but let's take a look at what happens when calling something in the wrong context can be a big problem.

Using our `cat` object from before:

```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

let notACat = cat.purrMore;
console.log(notACat()); // TypeError: this.purr is not a function
```

So in the above code snippet we attempted to call the `purrMore` function _without the correct Object for context_. Meaning we attempted to call the `purrMore` function on the global object! Since the global object does not have a `purr` method upon its `this` it raised an error. This is a common problem when invoking methods: invoking methods without their proper context.

Let's look at one more example of confusing `this` when using a callback. Incorrectly passing context is an inherent problem with callbacks. The `global.setTimeout()` method on the global object is a popular way of setting a function to run on a timer. The `global.setTimeout()` method accepts a callback and a number of milliseconds to wait before invoking the callback.

Let's look at a simple example:

```javascript
let hello = function () {
  console.log("hello!");
};

// global. is a method of the global object!
global.setTimeout(hello, 5000); // waits 5 seconds then prints "hello!"
```

Expanding on the `global.setTimeout` method now using our `cat` from before let's say we wanted our `cat` to "meow" in 5 seconds instead of right now:

```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

global.setTimeout(cat.purrMore, 5000); // 5 seconds later: TypeError: this.purr is not a function
```

So what happened there? We called `cat.purrMore` so it should have the right context right? Noooooope. This is because `cat.purrMore` is a callback in the above code! Meaning that when the `global.setTimeout` function attempts to call the `purrMore` function all it has reference to is the function itself. Since `setTimeout` is on the global object that means that the global object will be the context for attempting to invoke the `cat.purrMore` function.

**Strictly protecting the global object**

The accidental mutation of the global object when invoking functions in unintended contexts is one of the reasons JavaScript released "strict" mode in ECMAScript version 5. We won't dive too much into JavaScript's strict mode here, but it's important to know how strict mode can be used to protect the global object.

Writing and running code in strict mode is easy and much like writing code in "sloppy mode" \(jargon for the normal JavaScript environment\). We can run JavaScript in strict mode simply by adding the string "use strict" at the top of our file:

```javascript
"use strict";

function hello() {
  return "Hello!";
}

console.log(hello); // prints "Hello!"
```

One of the differences of strict mode becomes apparent when trying to access the global object. As we mentioned previously, the global object is the context of invoked functions in Node that are not defined explicitly on declared objects.

So referencing `this` within a function using the global object as its context will give us access to the global object:

```javascript
function hello() {
  console.log(this);
}

hello(); // Object [global] {etc, etc, etc }
```

However, strict mode will no longer allow you access to the global object in functions via the `this` keyword and will instead return `undefined`:

```javascript
"use strict";

function hello() {
  console.log(this);
}

hello(); // undefined
```

Using strict mode can help us avoid scenarios where we accidentally would have mutated the global object. Let's take our example from earlier and try it in strict mode:

```javascript
"use strict";

let dog = {
  name: "Bowser",
  changeName: function () {
    this.name = "Layla";
  },
};

// // note this is **not invoked** - we are assigning the function itself
let changeNameFunc = dog.changeName;

console.log(changeNameFunc()); // TypeError: Cannot set property 'name' of undefined
```

As you can see above, when we attempt to invoke the `changeNameFunc` an error is thrown because referencing `this` in strict mode will give us `undefined` instead of the global object. The above behavior is helpful for catching otherwise tricky bugs.

If you'd like to learn more about strict mode we recommend checking out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

### Changing context using `bind`

Good thing JavaScript has something that can solve this problem for us: what is known as the **binding** of a context to a function.

From the [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind), "The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular `this` value".

Here is a preview of the syntax we use to `bind`:

```javascript
let aboundFunc = func.bind(context);
```

So when we call `bind` we are returned what is called an exotic function. Which essentially means a function with it's `this` bound no matter where that function is invoked.

Let's take a look at example at `bind` in action:

```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

let sayMeow = cat.purrMore;
console.log(sayMeow()); // TypeError: this.purr is not a function

// we can now use the built in Function.bind to ensure our context, our `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);

// we still *need* to invoke the function
boundCat(); // prints "meow"
```

That is the magic of `Function#bind`! It allows you choose the context for your function. You don't need to restrict the context you'd like to bind to either - you can `bind` functions to any context.

Let's look at another example:

```javascript
let cat = {
  name: "Meowser",
  sayName: function () {
    console.log(this.name);
  },
};

let dog = {
  name: "Fido",
};

let sayNameFunc = cat.sayName;

let sayHelloCat = sayNameFunc.bind(cat);
sayHelloCat(); // prints Meowser

let sayHelloDog = sayNameFunc.bind(dog);
sayHelloDog(); // prints Fido
```

Let's now revisit our above example of losing context in a callback and fix our context! Using the `global.setTimeout` function we want to call the `cat.purrMore` function with the context bound to the cat object.

Here we go:

```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

// here we will bind the cat.purrMore function to the context of the cat object
const boundPurr = cat.purrMore.bind(cat);

global.setTimeout(boundPurr, 5000); // prints 5 seconds later: meow
```

**Binding with arguments**

So far we've talking of one of the the common uses of the `bind` function - binding a context to a function. However, bind will not only allow you to bind the context of a function but also to bind **arguments** to a function.

Here is the syntax for binding arguments to a function:

```javascript
let aboundFunc = func.bind(context, arg1, arg2, etc...);
```

Following that train of logic let's look at example of binding arguments to a function, regardless of the context:

```javascript
const sum = function (a, b) {
  return a + b;
};

// here we are creating a new function named add3
// this function will bind the value 3 for the first argument
const add3 = sum.bind(null, 3);

// now when we invoke our new add3 function it will add 3 to
// one incoming argument
console.log(add3(10));
```

Note that in the above snippet where we `bind` with `null` we don’t actually use `this` in the `sum` function. However, since `bind` requires a first argument we can put in `null` as a place holder.

Above when we created the `add3` function we were creating a new bound function where the context was `null`, since the context won't matter, and the first argument will _always_ be `3` for that function. Whenever we invoke the `add3` function all other arguments will be passed in normally.

Using `bind` like this gives you a lot of flexibility with your code. Allowing you to create independent functions that essentially do the same thing while keeping your code very DRY.

Here is another example:

```javascript
const multiply = function (a, b) {
  return a * b;
};

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(3)); // 6
console.log(triple(3)); // 9
```

How to define a method that references `this` on an object

* Identify what `this` refers to in a code snippet
* How to utilize the built in `Function#bind` to maintain the context of `this`

## Arrow Functions

Arrow functions, a.k.a. Fat Arrows \(`=>`\), are a more concise way of declaring functions. Arrow functions were introduced in ES2015 as a way of solving many of the inconveniences of the normal callback function syntax.

Two major factors influenced the reason behind the desire for arrow functions: the need for shorter functions and behavior of `this` and context.

When you finish this reading you should be able to:

* Define an arrow function
* Given an arrow function, deduce the value of `this` without executing the code

### Arrow functions solving problems

Let's start by looking at the arrow function in action!

```javascript
// function declaration
let average = function(num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

// fat arrow function style!
let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};
```

Both functions in the example above accomplish the same thing. However, the arrow syntax is a little shorter and easier to follow.

#### Anatomy of an arrow function

The syntax for a multiple statement arrow function is as follows:

```text
(parameters, go, here) => {
  statement1;
  statement2;
  return <a value>;
}
```

So let's look at a quick translation between a function declared with a function expression syntax and a fat arrow function. Take notice of the removal of the `function` keyword, and the addition of the fat arrow \(`=>`\).

```javascript
function fullName(fname, lname) {
  let str = "Hello " + fname + " " + lname;
  return str;
}

// vs.

let fullNameArrow = (fname, lname) => {
  let str = "Hello " + fname + " " + lname;
  return str;
};
```

If there is only a single parameter you may omit the `( )` around the parameter declaration:

```javascript
param1 => {
  statement1;
  return value;
};
```

If you have no parameters with an arrow function you must still use the `( )`:

```javascript
// no parameters will use parenthesis
() => {
  statements;
  return value;
};
```

Let's see an example of an arrow function with a single parameter with no parenthesis:

```javascript
const sayName = name => {
  return "Hello " + name;
};

sayName("Jared"); // => "Hello Jared"
```

**Single expression arrow functions**

**Reminder:** In JavaScript, an _expression_ is a line of code that returns a value. _Statements_ are, more generally, any line of code.

One of the most fun things about single expression arrow functions is they allow for something previously unavailable in JavaScript: **implicit returns**. Meaning, in an arrow function with a single-expression block, the curly braces \(`{ }`\) and the `return` are keyword are **implied**.

```javascript
argument => expression; // equal to (argument) => { return expression };
```

Look at the below example you can see how we use this snazzy _implicit returns_ syntax:

```javascript
const multiply = function(num1, num2) {
  return num1 * num2;
};

// do not need to explicitly state return!
const arrowMultiply = (num1, num2) => num1 * num2;
```

However this doesn't work if the fat arrow uses multiple statements:

```javascript
const halfMyAge = myAge => {
  const age = myAge;
  age / 2;
};

console.log(halfMyAge(30)); // "undefined"
```

To return a value from a fat arrow with multiple statements, you _must_ explicitly return:

```javascript
const halfMyAge = myAge => {
  const age = myAge;
  return age / 2;
};

console.log(halfMyAge(30)); // 15
```

**Syntactic ambiguity with arrow functions**

In Javascript, `{}` can signify either an empty object or an empty block.

```javascript
const ambiguousFunction = () => {};
```

Is `ambiguousFunction` supposed to return an empty object or an empty code block? Confusing right? JavaScript standards state that the curly braces after a fat arrow evaluate to an empty block \(which has the default value of `undefined`\):

```javascript
ambiguousFunction(); // undefined
```

To make a single-expression fat arrow return an empty object, wrap that object within parentheses:

```javascript
// this will implicitly return an empty object
const clearFunction = () => ({});
clearFunction(); // returns an object: {}
```

**Arrow functions are anonymous**

Fat arrows are _anonymous_, like their [`lambda`](https://en.wikipedia.org/wiki/Anonymous_function) counterparts in other languages.

```javascript
sayHello(name) => console.log("Hi, " + name); // SyntaxError
(name) => console.log("Hi, " + name); // this works!
```

If you want to name your function you must assign it to a variable:

```javascript
const sayHello = name => console.log("Hi, " + name);

sayHello("Curtis"); // => Hi, Curtis
```

That's about all you need to know for arrow functions syntax-wise. Arrow functions aren't just a different way of writing functions, though. They _behave_ differently too - especially when it comes to context!

### Arrow functions with context

Arrow functions, unlike normal functions, **carry over context, binding `this` lexically**. In other words, `this` means the same thing inside an arrow function that it does outside of it. Unlike all other functions, the value of `this` inside an arrow function is not dependent on how it is invoked.

Let's do a little compare and contrast to illustrate this point:

```javascript
const testObj = {
  name: "The original object!",
  createFunc: function() {
    return function() {
      return this.name;
    };
  },

  createArrowFunc: function() {
    // the context within this function is the testObj
    return () => {
      return this.name;
    };
  }
};

const noName = testObj.createFunc();
const arrowName = testObj.createArrowFunc();

noName(); // undefined
arrowName(); // The original object!
```

Let's walk through what just happened - we created a `testObj` with two methods that each returned an anonymous function. The difference between these two methods is that the `createArrowFunc` function contained an arrow function inside it. When we invoked both methods we created two function - the `noName` function creating it's own scope and context while the `arrowName` **kept** the context of the function that created it \(`createArrowFunc`'s context of `testObj`\).

An arrow function will always have the same context as the function that created it - giving it access to variables available in that context \(like `this.name` in this case!\)

#### No binding in arrow functions

One thing to know about arrow functions is since they already have a _bound context_, unlike normal functions, you can't reassign `this`. The `this` in arrow functions is always what it was at the time that the arrow function was declared.

```javascript
const returnName = () => this.name;

returnName(); // undefined

// arrow functions can't be bound
let tryToBind = returnName.bind({ name: "Party Wolf" }); // undefined
tryToBind(); //  will still be undefined
```

How to define an arrow function

* how to deduce the value of `this` in an arrow function

### Scope Problems

It's time to get some practice using scope in the wild! This task includes a link to download a `zip` file with a number of problems.

Complete the problems in the order specified. In addition to the prompts available at the top of each file, Mocha specs are provided to test your work.

To get started, use the following commands:

1. `cd` into the project directory
2. `npm install` to install any dependencies
3. `mocha` to run the test cases

## WhiteBoarding Problem

Write a function named `hiddenCounter()`. The `hiddenCounter` function will start by declaring a variable that will keep track of a count and will be initially set to 0. Upon first invocation `hiddenCounter` will return a function. Every subsequent invocation will increment the previously described count variable.

Explain how the closure you have created affects the scope of both functions.

Examples:

```javascript
let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1
```



### The Answer

```javascript
function hiddenCounter() {
  let count = 0;
  // here we are returning an inner function that will create a closure by
  // closing over the above count variable and changing it each time the
  // the inner function is invoked
  return () => (count += 1);
}
```


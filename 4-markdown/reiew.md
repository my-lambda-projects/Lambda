# Reiew



**Spreading Arguments**

```javascript
function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ["running", "Jet"];

console.log(speak("running", "Jet")); // => I like to go running with Jet.
console.log(speak(...words)); // => I like to go running with Jet.
```

### **Destructuring**

* **`Destructuring Syntax`** : Allows you to extract parts of an array or obj intro distinct variables.

```javascript
let numArray = [10, 20];

// here we are "unpacking" the array values into two separate variables
let [firstEl, secondEl] = numArray;

console.log(firstEl); //=> 10
console.log(secondEl); //=> 20
```

**Swapping Variables using destructuring**

```javascript
let num1 = 17;
let num2 = 3;

// this syntax will swap the values of the two variables
[num1, num2] = [num2, num1];

console.log(num1); // 3
console.log(num2); // 17
```

* One of the cool things we can do with destructuring is swap the values of two variables.

**Destructuring objects into variables**

* One of the most useful parts of destructuring is the ability to take apart and assign little slices of large objs to variables.

```javascript
let obj = { name: "Apples", breed: ["tabby", "short hair"] };
let { name, breed } = obj;

console.log(name); // "Apples"
console.log(breed); // ["tabby", "short hair"]
```

* **Aliased Object Destructuring** : When our variable does not have the same name as our object's keys.

```javascript
let obj = { apple: "red", banana: "yellow" };
let { apple: newApple, banana: newBanana } = obj;

console.log(newApple); // "red"
console.log(newBanana); // "yellow"
```

* Good rule of thumb to keep clarity in your code is to only destructure values from objects that are two levels deep.

```javascript
// the fname key is nested more than two levels deep
// (within bootcamp.instructor.fullName)
let bootcamp = {
  name: "Lambda",
  color: "red",
  instructor: {
    fullName: {
      fname: "Rose",
      lname: "K",
    },
  },
};

// this is hard to follow:
let {
  instructor: {
    fullName: { fname, lname },
  },
} = bootcamp;
console.log(fname, lname);

// this is much easier to read:
let { fname, lname } = bootcamp.instructor.fullName;
console.log(fname, lname);
```

**Destructuring and the Rest Pattern**

```javascript
let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];

let [firstFood, secondFood, ...otherFoods] = foods;
console.log(firstFood); // => "pizza"
console.log(secondFood); // => "ramen"
console.log(otherFoods); // => ["sushi", "kale", "tacos"]
```

* Currently the rest pattern is only officially supported by JS when destructuring arrays.

```javascript
let { a, c, ...obj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // => 1
console.log(c); // => 3
console.log(obj); // => { b: 2, d: 4 }
```

### **Destructuring Parameters**

We can also destructure **incoming parameters** of a function. This is very useful when we're passing objects around to different functions.

```javascript
let cat = { name: "Rupert", owner: "Curtis", weight: 10 };

// This unpacks the *owner* key out of any incoming object argument and
// assigns it to a owner parameter(variable)
function ownerName({ owner }) {
  console.log("This cat is owned by " + owner);
}

ownerName(cat);
```

```javascript
let bigCat = {
  name: "Jet",
  owner: { name: "Rose" },
  toys: ["ribbon"],
  siblings: { name: "Freyja", color: "orange", toys: ["mouse", "string"] },
};

// here we use *aliased* object destructuring to create a siblingToys variable
function toyFinder({ toys, siblings: { toys: siblingToys } }) {
  let allToys = toys.concat(siblingToys);
  return allToys;
}

console.log(toyFinder(bigCat)); // => ["ribbon", "mouse", "string"]
```

### Plain Old JS Object Lesson Concepts \(W2D2\) - Concepts

1. Label variables as either Primitive vs. Reference

   There are 5 primitive data types:

   Boolean, Null, Undefined, Number, String

   1 Reference Type:

   Object \(arrays are a kind of object\)

2. Identify when to use . vs \[\] when accessing values of an object:

```javascript
//Using [](bracket) notation

let person = {};

person["firstName"] = "Jesse";
console.log(person);
person["firstName"] = "Steven";

console.log(person);

//Using . (dot) notation

let person = {};

person.name = "Brian";
console.log(person);
person.name = "Steven";
console.log(person);
```

1. Use the obj\[key\] !== undefined pattern to check if a given variable that contains a key exists in an object

## Checking for Undefinied with bracket notation

```javascript
let person = {};
person.name = "Paul";
person.age = 25;
console.log(person);
console.log(person["name"] === "Paul");
console.log(person["age"] === 25);
console.log(person["occupation"] === undefined);
console.log(person["occupation"] !== undefined);
```

1. Utilize Object.keys and Object.values in a function

```javascript
//Object.keys

let cars = { make: "honda", model: "civic" };
console.log(Object.keys(cars));

//Object.values

let cars = { make: "honda", model: "civic" };
console.log(Object.values(cars));
```

1. Iterate through an object using a for in loop

```javascript
let obj = { game: "call of duty", console: "PC duh?" };

for (let keys in obj) {
  let values = obj[keys];
  console.log("Here are the key value pairs!", keys, "-", values);
}
```

1. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

```javascript
let acceptEverything = function (...everything) {
  console.log(everything);
};

acceptEverything("thing1", "thing2", "thing3");
```

1. Use ...spread syntax for Object literals and Array literals

```javascript
let arrayOfNums = [0, 1, 2, 3, 4];

let moreNums = [...arrayOfNums, 5, 6, 7, 8, 9];

console.log(moreNums);

let hubby = { firstName: "John", lastName: "Doe" };
let wifey = { firsName: "Jane", lastName: "Doe" };

let couple = { ...hubby, ...wifey };
//Something interesting happens here
console.log(couple);

let person1 = { name: "Jack", faveColor: "red" };
let person2 = { name: "Paul", faveColor: "blue" };
let people = { ...person1, ...person2 };
console.log(people);
```

1. Destructure an array to reference specific elements

```javascript
let nums = [1, 2];

let [num1, num2] = nums;

console.log("num1 variable", num1, " num2 variable", num2);
```

1. Destructure an object to reference specific values

```javascript
let person = {
  name: "Kelly",
  getFaveColor: function () {
    return "blue";
  },
  friends: {
    name: "Ryan",
  },
};

let {
  friends: { name },
} = person;

console.log("name", person.name);
console.log("favorite color", person.getFaveColor());
console.log(name);
```

1. Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

```javascript
let myCounter = function (array) {
  let myObj = {};
  let count = 1;
  array.forEach(function (char) {
    if (myObj[char] === undefined) {
      myObj[char] = count;
    } else {
      myObj[char]++;
    }
  });
  return myObj;
};

console.log(myCounter(["a", "a", "n", "c"]));
```

## Wednesday -----------------------------------------------------------------------------------------------------------------------------

## **Notes**

### **Callbacks: Using a Function as an Argument**

**What is a callback?**

* A **`callback`** is always a function that is being passed into another function.

```javascript
let foobar = function (callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function () {
  console.log("hello");
};

foobar(sayHello); // prints
// foo
// hello
// bar
```

* Although we named our parameter _callback_, we could name it anything we like.

```javascript
let foobar = function (callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

foobar(function () {
  console.log("hello");
}); // prints
// foo
// hello
// bar
```

* **`Anonymous Callback`** : When we use a function expression directly.
* Typically we want to assign our callback to a name if we plan on using it multiple times, an anonymous callball is better if it's just single use.

**A More Interesting Example**

```javascript
let add = function (num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

let double = function (num) {
  return num * 2;
};

console.log(add(2, 3, double)); // 10
```

* **Variable expression function** being passed in as an argument.

```javascript
let add = function (num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

console.log(add(60, 4, Math.sqrt)); // 8
```

* **`Math.sqrt`** built in function being passed directly in as an argument.

**Refactoring for an Optional Callback**

* We can add in a conditional to make the callback optional. \(This is a very common pattern in Javascript!\)

```javascript
let add = function (num1, num2, cb) {
  if (cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};

console.log(add(9, 40)); // 49
console.log(add(9, 40, Math.sqrt)); // 7
```

### **Callback Functions as First Class Objects**

* **`First-Class Object`** : A type that supports the same basic operations as most other types. \(i.e. Numbers, Strings & Booleans\)
* First-Class Objects must be able to do **three things**:
  * They can be stored in variables.
    * Function Expression Notation.
  * They can be passed as arguments.
    * Callback Functions.
  * They can be returned in functions.

    ```javascript
    function foo() {
      return function () {
        return "I'm a cat";
      };
    }
    ```
* As we have just proved above, functions are indeed first-class objects!
* **`Higher-Order Function`** : A function that should either accept another function as an argument, or return a function as an output.
* Callback Functions are passed into Higher-Order Functions.

### **Callback Functions Demo**

Interesting Interaction.

```javascript
let foo = function () {
  let bar = function () {
    console.log("interesting");
  };
  return bar;
};

console.log(foo()); // [function: bar]

let res = foo();
console.log(rest); // interesting.
```

* Saving our function into a variable will

## Thursday --------------------------------------------------------------------------------

## **Notes**

### **All About Scope in Javscript**

The **`scope`** of a program in JS is the set of variables that are available for use within the program.

**Advantages of utilizing scope**

* **`Security`** : Adds security by ensuring variables can only be access by pre-defined parts of our program.
* **`Reduced Variable Name Collisions`** : Restricts re-using variable names; helps prevent overwriting variable names.

**Different Kinds of Scope**

* **`Global Scope`**
  * The widest and outermost scope.
  * Represented by the **`window`** obj in the browser and the **`global`** obj in Node.js.
  * Try to avoid these as much as possible.
* **`Local Scope`**
  * Scope within a function.
  * Includes function arguments, variables declared within function, also **any variables already declared when the function was defined**
* **`Block Scope`**
  * Contents within curly braces.

**Scope Chaining: Variables and Scope**

```javascript
let name = "Fiona";

// we aren't passing in or defining and variables
function hungryHippo() {
  console.log(name + " is hungry!");
}

hungryHippo(); // => "Fiona is hungry"
```

* A key scoping rule is that an inner scope **does** have access to variables in the outer scope.
* **`Scope Chaining`** : When a variable is not found within the immediate scope, JS will keep searching outwards until it matches the one we are referencing.
* Important to note while inner scopes can search outwards, outer scopes cannot reference inner variables!

**Lexical Scope**

* **`Lexing Time`** : When you run a piece of JS code that is parsed before it is run.
* JS language does not have dynamic scope.

### **Different Variables in Javascript**

* _A variable always evaluates to the value it contains no matter how you declare it._

**The different ways to declare variables**

* **`let`** : can be re-assigned; block-scoped.
* **`const`** : no re-assignment; block scoped.
* **`var`** : May or may not be re-assigned; scoped to a function.

**Hoisting and Scoping with Variables**

**`Hoisting`** is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

**Function-Scoped Variables**

* As we learned, var creates function-scoped variables, this means our declared var keyword variable will be confined to the scope of our current function.

**Hoisting with function-scoped variables**

```javascript
function test() {
  // var hoistedVar;
  console.log(hoistedVar); // =>  undefined
  var hoistedVar = 10;
}
```

* Even though we initially declared & initizalized our variable underneath the console.log var variables are "hoisted" to the top, but only in declaration.

**Block-Scoped Variables**

Things that create block-scopes:

* If Statements
* While Loops
* Switch Statements
* For Loops

**Properties of Constants**

* They are block-scoped like let.
* JS will enforce constants by raising an error if you try to change them.
* Constants that are assigned to Reference Types are **mutable**

**Hoisting with block-scoped variables**

* Unlike vars in function scopes, let and const in their block scopes do not get their declarations hoisted.
* Instead they are not initalized until their definitions are evaluated - instead of undefined we will get an error.
* **`Temporal Dead Zone`** : The time before a let or const variable is declared.

**Function Scope vs Block Scope**

* The downside of the flexibility of var is that it can easily overwrite previously declared variables.
* The block-scope limitations of let and const were introduced to easily avoid accidentally overwriting variable values.

**Global Variables**

* Any variables declared without a declaration term will be considered **`global scope`**.
* Every time a variable is declared on the global scope, the change of collision increases.
* Use the proper declarations to manage your code: Avoid being a sloppy programmer!

### **Closures**

**Calculating Closures**

* **Closure** : The combination of a function and the lexical environment within which that function is declared.
* **Use** : A closure is when an inner function uses, or changes, variables in an outer function.
* Very important for creativity, flexibility, and security of your code.
* **`Lexical Environment`** : Consists of any variables available within the scope in which a closure was declared \(local inner, outer, and global\).

**Closures and Scope** Basic Closure Rules:

* Closures have access to all variables in it's lexical environment.
* A closure will keep reference to all the variables when it was defined **even if the outer function has returned**.

**Applications of Closures**

* **Private State**
  * JS does not have a way of declaring a function as exclusively private, however we can use closures to make a private state.
* **Passing Arguments Implicitly**

  * We can use closures to pass down arguments to helper functions.

  ```javascript
  function isPalindrome(string) {
    function reverse() {
      return string.split("").reverse().join("");
    }

    return string === reverse();
  }
  ```

### **Context in Javascript**

* **`Scope`** : Refers to the visibility and availability of variables.
* **`Context`** : Refers to the value of the **`this`** keyword when code is executed.

**What about `this` ?**

* **`This`** : Keyword that exists in every function and evaluates to the object that is currently invoking that function.
* **Method-Style Invocation** : syntax goes like `object.method(arg)`. \(i.e. array.push, str.toUpperCase\(\)
* **`Context`** refers to the value of this within a function and **`this`** refers to where a function is invoked.

**Issues with Scope and Context**

* If `this` is called using normal function style invocation, our output will be the contents of the global object.

**When Methods have an Unexpected Context**

```javascript
let dog = {
  name: "Bowser",
  changeName: function () {
    this.name = "Layla";
  },
};

let change = dog.changeName;
console.log(change()); // undefined

console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```

* In the above example we get undefined when we assign our this function to a variable bc there is no obj to reference except the global one!
* **`global.setTimeout()`** : popular method of setting a function to run on a timer.
  * Accepts a callback and a number of milliseconds to wait before invoking the callback.

    ```javascript
        let hello = function () {
          console.log("hello!");
        };

        // global. is a method of the global object!
        global.setTimeout(hello, 5000); // waits 5 seconds then prints "hello!"
    ```

**Strictly Protecting the Global Object**

We can run JS in strict mode by tagging `use strict` at the top of our program.

* If we try to invoke this on our global function in strict mode we will no longer be able to access it and instead just get undefined.

**Changing Context using Bind**

"The simplest use of **`bind()`** is to make a function that, no matter how it is called, is called with a particular this value".

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
console.log(sayMeow()); // TypeError

let boundCat = sayMeow.bind(cat);

boundCat(); // prints "meow"
```

**Binding with Arguments**

* We can also use bind\(\) to bind arguments to a function.

  ```javascript
  let aboundFunc = func.bind(context, arg1, arg2, etc...);
  ```

  ```javascript
  const sum = function (a, b) {
    return a + b;
  };

  const add3 = sum.bind(null, 3);

  console.log(add3(10)); // 13
  ```

  ```javascript
  const multiply = function (a, b) {
    return a * b;
  };

  const double = multiply.bind(null, 2);
  const triple = multiply.bind(null, 3);

  console.log(double(3)); // 6
  console.log(triple(3)); // 9
  ```

### **Arrow Functions aka Fat Arrows**

* **`=>`** : A more concise way of declaring a function and also considers the behavior of `this` and context.

**Arrow Functions Solving Problems**

```javascript
let average = function (num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};
```

As you can see the arrow function is shorter and easier to read.

**Anatomy of an Arrow Function**

* If there is only a single parameter there is no need to add parenthesis before the arrow function.
* However if there are zero parameters then you must add an empty set of parentheses.

**Single Expression Arrow Functions**

* Arrow functions, _unlike_ normal functions, carry over context, binding `this` lexically.
* Value of `this` inside an arrow function is not dependent on how it is invoked.
* Because arrow functions already have a _bound context_, you can't reassign `this`.


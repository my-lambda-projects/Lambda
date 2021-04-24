# Understanding By Example

## Functions:



```javascript
# Function Context Cheatsheet

## Types of Invocation
- Applies to only **named** and **unnamed** functions
- **Doesn't matter** for fat arrow functions

### Function-style invocation
- Context of the function will be global context **UNLESS** binded

### Method-style invocation
- Context of the function will be the object which the function is called on **UNLESS** binded

```javascript
const obj = {
  name: 'Example Object',
  unnamedFunc: function() {
    console.log(this.name);
  }
};

// Method-style invocation
obj.unnamedFunc(); // 'Example Object' 

// Function-style invocation
const unnamedFunc = obj.unnamedFunc;
unnamedFunc(); // Global context
```

## Types of Functions

### Named Function

- explicit `return` keyword required
- curly braces `{}` around function body
- **NOT** saved to a variable
- parameters must be surrounded by parentheses `()`
- context is defined by how it's invoked or called
  - function-style: global context
  - method-style: context is object that function is being called on
- calling `bind` on the function will return a function binded to the context of the `bind` argument

```javascript
function namedFunc(params) {
  return 'named function'
}
```

```javascript
// bindedNamedFunc will have the context of obj
const bindedNamedFunc = namedFunc.bind(obj);
```

### Unnamed Function

- explicit `return` keyword required
- curly braces `{}` around function body
- **MUST** be saved to a variable
- parameters must be surrounded by parentheses `()`
- context is defined by how it's invoked or called
  - function-style: global context
  - method-style: context is object that function is being called on
- calling `bind` on the function will return a function binded to the context of the `bind` argument

```javascript
const unnamedFunc = function(params) {
  return 'unnamed function'
}
```

```javascript
// bindedUnnamedFunc will have the context of obj
const bindedUnnamedFunc = unnamedFunc.bind(obj);
```

### Explicit Fat Arrow Function

- explicit `return` keyword required
- curly braces `{}` around function body
- **MUST** be saved to a variable
- parameters must be surrounded by parentheses `()` **IF more than one parameter**
- takes the context of where it's defined
- **CANNOT** be binded using `bind`

```javascript
const explicitFatArrow = params => {
  return 'explicit fat arrow function'
};
```

### Implicit Fat Arrow Function

- **NO** `return` keyword
- function body can only consist of what is being returned
- Optional parentheses `()` around function body
> NOTE: Parentheses needs to be used if returning an object `ex: ({ key: value })`
- **MUST** be saved to a variable
- parameters must be surrounded by parentheses `()` **IF more than one parameter**
- takes the context of where it's defined
- **CANNOT** be binded using `bind`

```javascript
const implicitFatArrow = (params) => 'implicit fat arrow function';
```

```javascript
const implicitFatArrow = (params) => ('implicit fat arrow function');
```

```javascript
const implicitFatArrow = (params) => ({
  function: 'implicit fat arrow'
});
```

## Bind
- `bind` accepts multiple arguments
- first argument is the context that you want to bind the function to
- any arguments that come afterwards will be passed in when the bound function is called **BEFORE** the call time arguments
```









```javascript
// Arrow Functions
// 1. Syntax
// 2. Scoping with Arrow Functions

function logger(title, body) {
  console.log("\x1b[31m%s\x1b[0m", title);
  console.log('    ', body);
}

// Named Function
function sayHelloNamed(name) {
  return 'hello ' + name;
}

logger('Named Function', sayHelloNamed('Justin'));

// Unnamed Function
const sayHelloUnnamed = function(name) {
  return 'hello ' + name;
};

logger('Unnamed Function', sayHelloUnnamed('Soon-Mi'));







// Fat Arrow Function with EXPLICIT return
// curly braces around body of fat arrow functions need explicit return keyword
// const sayHelloExplicit = (name) => {
//   return 'hello ' + name;
// };

// No parentheses surrounding parameter needed if ONLY one parameter
const sayHelloExplicit = name => {
  return 'hello ' + name;
};

logger('Fat Arrow Function with Explicit Return', sayHelloExplicit('Gordon'));












// Fat Arrow Function with IMPLICIT return
// Also called a One-Liner Fat Arrow function
// should only use this when the function's body is NOT multi-line
const sayHelloImplicit = (name) => 'hello' + name;

// can use parentheses around function body as well
// const sayHelloImplicit = (name) => ({
//   hello: 'Angela'
// });

// notice the semicolon ; at the end

logger('Fat Arrow Function with Implicit Return', sayHelloImplicit('Angela'));






console.log('\n--------------\n');




// Example using fat arrow functions
const arr = [1, 2, 3];

const newArr = arr.map(el => {
  return el + 2;
});
// const newArr = arr.map(function(el) {
//   return el + 2;
// });

logger('Original Array, `arr`', arr);
logger('New Mapped Array, `newArr`', newArr);




console.log('\n--------------\n');






// Context using Fat Arrow functions
const pony = {
  name: 'Lucy',
  wrappedSayName: function() {
    console.log(this.name);
    return function() {
      console.log(this.name);
      console.log('Hello my name is ' + this.name);
    }
  },
  wrappedArrowSayName: function() {
    console.log(this.name);
    return () => {
      console.log('Hello my name is ' + this.name);
    }
  }
};

pony.wrappedSayName = pony.wrappedSayName.bind(pony);
let wrap = pony.wrappedSayName().bind(pony); // method-style invocation
wrap(); // function-style invocation

console.log('-----------');

wrap = pony.wrappedArrowSayName(); // method-style invocation
wrap(); 

console.log('-----------');

const arrowSayName = pony.wrappedArrowSayName; // not invoking
wrap = arrowSayName(); // function-style invocation
wrap();



// bound to the context of wherever it's defined






console.log('-----------');

const zoomMeeting = {
  students: ['Christian', 'Ronald','Wren'],
  listStudent: function(studentName) {
    console.log(this.students);
    // console.log(studentName);
  },
  listStudents: function() {
    const listStudent = this.listStudent;
    listStudent(); // function-style
    console.log('***');
    this.students.forEach(listStudent);
  }
};

zoomMeeting.listStudents();

```







## Scope:

```javascript
//  Global Scope

let cities = ["NYC", "SF"];

//console.log(cities);




// Local / Function Scope


function sayThings() {
  // let cities = ['Bogota', 'Madrid'];
  // console.log(cities);

  let word = 'dinosaur';
  console.log(word);
}

// console.log(cities); // prints NYC & SF
// console.log(word); // ReferenceError
//sayThings();










// Block Scope

if (true) {
  let cats = ['Roma', 'Luigi'];
  //console.log(cats); // prints Roma & Luigi
}

//console.log(cats) // ReferenceError

// This example was extended to show how scope within nested blocks works
// As Justin pointed out, it also leads directly into closures

let carrot = 'snake';

if (true){
  let carrot = 'doggie!';
  //console.log(carrot);
  if (true) {
    carrot = 'carrot';
    console.log(carrot); // prints carrot
  }
  for(let i = 1; i < 5; i++){
    console.log(`i is ${i}`);
  };
  //console.log(`i is ${i}`); // reference error
  console.log("line 57:" ,'george' ,carrot);
}

console.log(carrot); // prints snake
```

## Closure

```javascript
// Closure
// When an inner function uses, or changes, 
// variables defined in an outer scope.
// NOT for declaring a variable of the same name in an inner scope.
function sayHi() {
    let name = 'Bryan Guner';

    function greeting() {
        // here greeting function closes over, or captures, the name variable
        // to read it's value
        return "Hi there, " + name + "!";
    }
    // Here, we return the return value of the greeting function
    return greeting();
}
// console.log(sayHi());
function nameAndCity() {
    let person = {
        name: 'Sergey',
        city: 'Moscow'
    };

    function changeCity() {
        // here changeCity function closes over the person variable
        // and reassigns a value on an existing key
        person.city = 'Toronto';
    }
    changeCity();
    // the person variable will show the changes from the changeCity function
    return person;
}
// console.log(nameAndCity());
function smoothieMaker() {
    let ingredients = [];

    function addIngredient( ingredient ) {
        // Here addIngredient function closes over the ingredients variable
        // to push new elements into the ingredients variable.
        // We have created a private state where we cannot access 
        // the ingredients array from the outside and can only access
        // the variable from the inner function.
        ingredients.push( ingredient );
        return ingredients;
    }
    // Here the return value for smoothiemaker is the return value 
    // is the function addIngredient, NOT addIngredient's return value
    return addIngredient;
}
// Here we initialize we return a new addIngredient function
// which has closed over the ingredients array
const makeSmoothie = smoothieMaker();
console.log( makeSmoothie );
console.log( makeSmoothie( 'spinach' ) ); // prints [ spinach ]
console.log( makeSmoothie( 'turmeric' ) ); // prints [ spinach, turmeric ]
// let mySmoothie = makeSmoothie();
// Here we return a new and different addIngredient function
// which has closed over a new a different ingredients array
const makeSmoothie2 = smoothieMaker();
console.log( makeSmoothie2( 'kale' ) ); // prints [ kale ]  -- does not include spinach and turmeric
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
let counter1 = createCounter();
let counter2 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// What will this print out?
// console.log(counter2());
// Brief talk of scope and redeclaring a const variable in a loop
for ( let i = 0; i < 5; i++ ) {
    const num = i + 2;
}


// In the following examples we will predict what will 
// be printed to the terminal






// 1

function dinerBreakfast(food) {
    let order = "I'd like cheesy scrambled eggs and ";

    function finishOrder() {
        return order + food;
    }

    return finishOrder();
}

// console.log(dinerBreakfast('green tea'));









// 2

function dinerBreakfast2(food) {
    let order = "I'd like a(n) " + food;

    function withEggs() {
        order = order + ' and cheesy scrambled eggs, please!'
    };

    withEggs();
    return order;
}

// console.log(dinerBreakfast2('avocado toast'));









// 3

function dinerBreakfast3() {
    let order = "I'd like cheesy scrambled eggs";

    return function (food) {
        order = order + " and " + food;
        return order;
    }
}

let breakfastOrder = dinerBreakfast3();

console.log(breakfastOrder);
console.log(breakfastOrder('cappuccino'));
console.log(breakfastOrder('pancakes'));

```



## Context: 

```javascript
// In the following examples we will predict what will
// be printed to the terminal


function whatIsThis() {
    console.log(this);
}

const pony = {
    name: "Lucy",
    whatIsThis: function () {
        console.log(this);
    },
    sayName: function () {
        console.log('Hello my name is ' + this.name);
    },
    changeName: function (newName) {
        this.name = newName;
        this.sayName();
    }
}


// 1.
// whatIsThis(); 


// 2.
// pony.whatIsThis();


// 3.
// pony.sayName();


// 4.
// pony.changeName("Layla");


// 5. 
// const sayNameFunc = pony.sayName;
// sayNameFunc();


// 6.
// const boundSayName = pony.sayName.bind(pony);
// boundSayName();


// 7.
const bart = {
    name: 'Bart'
}

const boundToBart = pony.sayName.bind(bart);
// boundToBart();


// 8.
const changeBartsName = pony.changeName.bind(bart);
changeBartsName('Sergey');


// Context
// What does the keyword 'this' refer to?
// The context is determined by HOW a function is invoked


// Different ways of invoking a function
// function style
// context is set to the global object
// 'this' refers to the global object
// method style
// context is set to the object on which the method is called
// 'this' refers to the object on which the method is called


// How to ensure bind never change the context of a function 
// no matter how it is invoked.
// .bind()
// By adding .bind() to the end of a function we set the context
// to equal the argument passed to .bind() 
// 'this' will refer to the argument passed to .bind()


// Scope VS Context
// VERY DIFFERENT THINGS!!

// Scope: 
// Availability of variables at a line in your application
// Context:
// The value of this
// Determined by how a function has been invoked or the .bind() method




const cat = {
    name: 'Luigi',
    age: 2,
    whatIsThis: function () {
        console.log(this);
    },
    nameAndAge: function () {
        console.log(this.name + " is " + this.age + " years old.")
    }
};

// cat.whatIsThis();
// cat.nameAndAge();

const nameAndAgeFunc = cat.nameAndAge;
nameAndAgeFunc();

const boundNameAndAge = cat.nameAndAge.bind(cat);
// boundNameAndAge();








const cat2 = {
    name: 'Roma',
    age: 3
}

function nameAndAge() {
    console.log(this.name + " is " + this.age + " years old.");
}

const dog = {
    name: 'Napo',
    age: 5
}

const catNameAge = nameAndAge.bind(cat2);
const dogNameAge = nameAndAge.bind(dog);

catNameAge();
dogNameAge();





const obj = {
  name: 'Example Object',
  unnamedFunc: function() {
    console.log(this.name);
  }
};

// Method-style invocation
obj.unnamedFunc(); // 'Example Object'

// Function-style invocation
const unnamedFunc = obj.unnamedFunc;
unnamedFunc(); // `undefined` because Global context





console.log('-------------------');






// Unnamed Func
const dog = {
  name: 'Digby'
};

const boundFunc = obj.unnamedFunc.bind(dog);
boundFunc(); // Digby
obj.unnamedFunc(); // Example Object







console.log('-------------------');




// Bind Time and Call Time Arguments
// bind time arguments passed in first, then call time arguments
function printAge(...args) {
  const age = args[0];
  const year = args[1];
  console.log(args);
  console.log(this.name + ' is ' + age + ' years old. Born in ' + year);
}

const otherArgs = [2005];

const printDigby = printAge.bind(dog, 12, ...otherArgs);
printDigby(2000);
printDigby(2008);

// const printRealDigby = printAge.bind(dog, 4);
// printRealDigby(2002);
```




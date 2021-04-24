## **Javascript Errors**

**1. How do you halt program execution with an instance of an error object in JavaScript?**

- Using the keyword throw you can throw your own runtime errors that will stop program execution.

**2. What kind of error is thrown when a variable or parameter is not of a valid type?**

- A TypeError is thrown when an operation cannot be performed because the operand is a value of the wrong type.

**3. What kind of error will be thrown when the below code is executed?**

```js
function callPuppy() {
  const puppy = "puppy";
  console.log(pupy);
}

callPuppy();
```

- ReferenceError: pupy is not defined

**4. What kind of error will be thrown when the below code is run?**

```js
function broken () {
  console.log("I'm broke")
}}
```

- SyntaxError: Unexpected token '}'

**5. What kind of error will the below code throw when executed?**

```js
const puppy = "puppy";

puppy = "apple";
```

- TypeError: Assignment to constant variable.

**6. What kind of error will the below code throw when executed?**

```js
let dog;

dog();
```

- TypeError: dog is not a function

**7. What type of block will allow you to run an erroring function then continue the execution of code after that function is run?**

- We can use try...catch blocks with functions that might throw an error to catch that error and continue code execution after that error was thrown

**8. What type of error is thrown when a non-existent variable is referenced?**

- The ReferenceError object represents an error when a non-existent variable is referenced.

**9. When is a JavaScript Error Object thrown?**

- The Error object is how JavaScript deals with runtime errors - so at code runtime!

**10. When kind of error is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language?**

- A SyntaxError is thrown when there is an error in the syntax of the executed code.

---

## **TDD**

**1. Identify at least two reasons why developers use TDD.**

- 1. Writing tests before code ensures that the code written works.
  2. Only required code is written.
  3. TDD helps enforce code modularity.
  4. Better understanding of what the code should be doing.

**2. What are the three steps of the TDD workflow?**

- Red, Green, Refactor

**3. What does a developer do in the Green step in the TDD workflow?**

- Write the minimum amount of code to ensure the tests pass (a
  passing test will be green).

**4. What does a developer do in the Red step in the TDD workflow?**

- Write the tests and watch them fail (a failing test is red). It's
  important to ensure the tests initially fail so that you don't have false
  positives.

**5. What does a developer do in the Refactor step in the TDD workflow?**

- Refactor the code you just wrote. Your job is not over when the
  tests pass! One of the most important things you do as a software developer
  is to ensure the code you write is easy to maintain and read.
---

- `SyntaxError` represents an error in the syntax of the code
- `ReferenceError` represents an error thrown when an invalid reference is made (the variable doesn't exist yet)
- `TypeError` represents an error when a variable or parameter is not of a

---



### First, set up a package.json file and import all needed dependencies

```json
{
  "name": "name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "mocha",
    "test-with-json": "mocha --reporter json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai": "^4.2.0",
    "chai-spies": "^1.0.0",
    "mocha": "^6.2.2"
  }
}
```
des

**The flow of development usually looks like this:**

1. An initial spec is written, with tests for the most basic functionality.
2. An initial implementation is created.
3. To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
4. Now we have a working initial implementation with tests.
5. We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
6. Go to 3, update the implementation till tests give no errors.
7. Repeat steps 3-6 till the functionality is ready.

- Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
- Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.

before/after and beforeEach/afterEach
We can setup before/after functions that execute before/after running tests, and also beforeEach/afterEach functions that execute before/after every it.

For instance:
 mocha is a test framework, not an assertion library. it works with multiple assertion libraries
    - test frameworks: run tests and present results
    - assertion libraries: used to actually write tests
        - node has a built in assertion library called `Assert`
        - `Chai` is another assertion library
            - the chainable functions available will often read like English.
- file structure should include a `problems` directory and a `test` directory that both live in same project directory
- import the `assert` module and the
- use `describe`, `context`, and `it` blocks
  - `describe`
        - `describe` is an organizational function. takes two parameters: descriptive string and a callback
        - the callback passed to describe is where we insert the actual tests
    - `it`
      - it goes inside the callback passed to `describe`
      - accepts a descriptive string and a callback to set up our test
    - `context`
      - an alias for the `describe` function
        - denotes that we are setting up the context for a particular set of tests

```javascript
const assert = require("assert");
const reverseString = require("../problems/reverse-string.js");


describe("reverseString()", function() {
  context("given a string argument", function() {
    it("should reverse the given string", function() {
      let test = reverseString("hello");
      let result = "olleh";

      assert.strictEqual(test, result);
    });

    it("should reverse the given string and output the same capitalization", function() {
      let test = reverseString("Apple");
      let result = "elppA";
      // assert.strictEqual compares return value of function
      assert.strictEqual(test, result);
    });
  });

  context("given an argument that is not a string", function() {
      it("should throw a TypeError when given an argument that is not a string", function () {
          // assert.throws accepts a function as the first argument,
          // then the error that should be thrown as the second argument
          assert.throws(() => {reverseString(3)}, TypeError);
      })
  });
});
```

### Use Chai to structure your tests using behavior-driven development principles

- to set up chai and chai spies

```javascript
// first npm install chai and chai-spies
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
```

### Use the pre- and post-test hooks provided by Mocha

- `Mocha Hooks` are a way to set up before running the individual tests
  - `before` happens once before all tests
    - `beforeEach` happens before each test
    - `after` happens once at the end
    - `afterEach` happens after each test

## -----> MORE GENERALIZED INFO BELOW:

```js
describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
```

```js
const assert = require('assert');

describe('Hooks demo', () => {
  before(() => {
    console.log('Before hook...');
  });

  beforeEach(() => {
    console.log('Before each hook...');
  });

  afterEach(() => {
    console.log('After each hook...');
  });

  after(() => {
    console.log('After hook...');
  });

  it('Placeholder one', () => {
    assert.equal(true, true);
  });

  it('Placeholder two', () => {
    assert.equal(true, true);
  });

  describe('nested tests', () => {
    before(() => {
      console.log('Nested before hook...');
    });

    beforeEach(() => {
      console.log('Nested before each hook...');
    });

    afterEach(() => {
      console.log('Nested after each hook...');
    });

    after(() => {
      console.log('Nested after hook...');
    });

    it('Placeholder one', () => {
      assert.equal(true, true);
    });

    it('Placeholder two', () => {
      assert.equal(true, true);
    });
  });
});
```

![](result.png)


Notice that the `before` and `after` hooks defined in the top-level `describe` function run only once while the `beforeEach` and `afterEach` hooks run before and after (respectively) for each of the tests defined in the top-level `describe` function _and_ for each of the tests defined in the nested `describe` function.

> While the need to define nested hooks won't come up very often (especially when you're just starting out with unit testing), it is very helpful to be able to define a `beforeEach` hook in a top-level `describe` function that will run before every test in that block _and_ before every test within nested `describe` or `context` functions (you'll do exactly that in just a bit).

You can also optionally pass a description for a hook or a named function:
```js
    beforeEach('My hook description', () => {
      console.log('Before each hook...');
    });

    beforeEach(function myHookName() {
      console.log('Before each hook...');
    });
```
If an error occurs with executing the hook, the hook description or function name will display in the console along with the error information to assist with debugging.


---

## ex.)




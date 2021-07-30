### Intro

After a few years of experience developing on my own personal projects, I recently decided to become a Full-Stack developer.

This new situation encouraged me to start thinking about practices that I’ve neglected until now, such as testing my code.

That is why I wanted to start my journey through Test Driven Development. I’ve decided to share my first steps here with you.

### The exercise

I decided to start with the first Osherove TDD kata. You can access the full exercise [here](http://osherove.com/tdd-kata-1/).

The goal is to deliver a function that takes a string entry (`"1, 2, 3"` for instance) and returns the sum of all numbers.

Our project will have the following structure:

    js-kata-jest/

    ├─ src/

      └─ kata.js

    ├─ test/

      └─ kata.test.js

    └─ package.json

### Setting up the test environment

First we have to set up the test environment. As a React developer, I decided to go with [Jest](https://facebook.github.io/jest/). You may use any other testing library of your choice.

#### Installing Jest dev dependency

    yarn add --dev jest

or with [npm](https://www.npmjs.com/):

    npm install --save-dev jest

#### Activating Jest on your code editor

I am using Atom as a code editor, and installed the [tester-jest](https://atom.io/packages/tester-jest) package. This allowed me to run my tests on save for any `*.test.js` file.

### Test Driven Development

The theory behind TDD is quite simple, and revolves around 3 steps:

1.  Writing a test for a small part of a functionality and checking that this new test is failing (Red step)
2.  Writing the code that makes the test pass, then checking that your previous test and the new one are successful (Green step)
3.  Refactoring the code to make sure it is clear, understandable, and behaves well with the previous functionalities

In the next part, we are going to go into detail for each of these steps.

### Solving the exercise

#### First loop

First, we want to handle the case where our `add` function is given an empty string or one with a single element.

1.  **Writing the tests**

- The first test checks that an empty string returns 0
- The second checks that a single element string returns the provided element

**2\. Writing the code**

- First we return 0 by default
- Then we provide an `if` statement that handles the parsing of a single provided element

Here is the final code:

**3\. Refactoring the code**

As it is our first functionality, we can skip this step for now — but we will soon return to it. ;)

#### Second loop

We will now handle the case where the string contains multiple elements:

1.  **Writing the tests**

The new test makes sure that calculation of a multiple element string was done correctly:

**2\. Writing the code**

- First we create a new `if` statement on purpose to be sure that our first two tests affect the new solution
- Second we create a new array from the entry string, using the `,` as a separator
- Finally, we parse each element of the newly created array to calculate the sum

Here is the final code:

**3\. Refactoring the code**

As we can see above, there are several problems within our code:

- the two if statement shouldn’t be decorrelated, as adding one or more to zero should behave the same.
- the separator value is drowned in the code. This adds complexity if we want to change to a `;` separator, for instance.
- a large part of our code is located in an `if` statement. We could reverse the logic to extract our main code from it.

So we can add a new `separator` variable, which will decide on the separator type. We can also merge the two `if` statement into one, and then reverse the logic.

We can now run our test again before moving on to the next loop.

#### Third loop

We can now handle the declaration of new separators and avoid the entry of negative numbers.

1.  **Writing the tests**

- The first new test focuses on a single separator within the default values.
- The second will make sure that we can configure a new separator directly within the input.
- The third one will check that an error is thrown when a negative value is passed as an entry.

**2\. Writing the code**

- First, we replace the `separator` string by a `separators` array, where we add the `\n` value.
- Second, we introduce a new separator search through a regular expression. That will be added to the previous array.
- We can now join the previous array elements to split the string with them.
- We filter the resulting array to remove all non-number elements.
- We add a new array, `negatives`, that will spot negative values within the entry.
- If the `negatives` array isn’t empty, throw an error.

Here is the final code:

**3\. Refactoring the code**

We now have two new possible optimizations:

- We are using the regular expression twice, and are willing to change it easily. We can extract it within a new `const regexp`.
- We calculate `parseInt(list[i])`several times, so we should store the value only once to speed up the `for` loop.

### Conclusion

We can now run our tests again to make sure that all our expected functionalities are still working.

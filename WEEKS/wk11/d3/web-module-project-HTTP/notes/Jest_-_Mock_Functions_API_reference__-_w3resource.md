Mock functions helps us make testing of links between code easy, by erasing the actual implementation of a function, capturing the calls to the function (and the parameters passed in those calls), capturing the instances of constructor functions when instantiated with the new keyword, and finally allowing test-time configuration of return values.

You can mock functions in two ways: either you create a mock function to use in test code, or you write a manual mock that overrides a module dependency.

**Using a mock function**

Let's take for example the case where we're testing an implementation of a function forEach, which will invoke a callback for each item in a supplied array.

For us to test this function, we may use a mock function, and then inspect the mock's state to ensure the callback is invoked as expected.

**.mock property**

Every mock function has this special .mock property, this property is where data about how the function has been called and what the function returned is stored. The .mock property will also track the value of this for each call, so it is possible to inspect this as well:

These mock members are very useful in our tests to assert how these functions get called, instantiated, or what they returned:

**Mock Return Values**

Mock functions could also be used to inject test values into your code during a test:

Mock functions are equally very effective in code that uses a functional continuation-passing style. A code that is written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for, in favor of injecting values directly into tests right before they're used.

Most real-world examples will actually involve getting a hold of a mock function on a dependent component and then configuring that, but the technique is always the same. In these cases, you have to avoid the temptation of implementing logic inside of any function that's not directly being tested.

**Mocking Modules**

Suppose we have a class that will fetch users from our API. The class will make an axios call to the API and then returns the data attribute which contains all the users:

Now, if you want to test this method without actually hitting the API (and thus creating slow and fragile tests), you can use the jest.mock(...) function to automatically mock the axios module.

Once you mock the module you can provide a mockResolvedValue for .get that returns the data we want our test to assert against. In effect, you are saying that you want axios.get('/users.json') to return a fake response.

**Mock Implementations**

There are some cases where it is useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. You can do this with jest.fn or with the mockImplementationOnce method on mock functions.

The mockImplementation method is very useful when you need to define the default implementation of a mock function that is created from another module:

When you have to recreate a complex behavior of a mock function such that multiple function calls will produce different results, you should use the mockImplementationOnce method:

When the mocked function runs out of the implementations defined with mockImplementationOnce, it will execute the default implementation that is set with jest.fn (if it is defined):

For cases where you have methods that are typically chained (and thus always need to return this), you have a sugary API to simplify this in the form of a .mockReturnThis() function that also sits on all mocks:

**Mock Names**

Optionally you can provide a name for your mock functions, this will be displayed instead of "jest.fn()" in test error output. You should use this if you want to be able to quickly identify the mock function reporting an error in your test output.

**Custom Matchers**

Finally, to make it simpler to assert how mock functions have been called, Here are some custom matcher functions you can use:

These matchers are really just syntactic sugar for common forms of inspecting the .mock property. You can do this manually yourself if that's more to your taste or if you have to do something more specific:

**Previous:** [Jest Globals](https://www.w3resource.com/jest/globals.php)  
**Next:** [Jest Object (API Reference)](https://www.w3resource.com/jest/jest-object.php)

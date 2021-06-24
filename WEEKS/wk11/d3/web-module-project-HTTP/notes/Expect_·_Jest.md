When you're writing tests, you often need to check that values meet certain conditions. `expect` gives you access to a number of "matchers" that let you validate different things.

For additional Jest matchers maintained by the Jest Community check out [`jest-extended`](https://github.com/jest-community/jest-extended).

## Methods[#](https://jestjs.io/docs/expect#methods "Direct link to heading")

- [`expect(value)`](https://jestjs.io/docs/expect#expectvalue)
- [`expect.extend(matchers)`](https://jestjs.io/docs/expect#expectextendmatchers)
- [`expect.anything()`](https://jestjs.io/docs/expect#expectanything)
- [`expect.any(constructor)`](https://jestjs.io/docs/expect#expectanyconstructor)
- [`expect.arrayContaining(array)`](https://jestjs.io/docs/expect#expectarraycontainingarray)
- [`expect.assertions(number)`](https://jestjs.io/docs/expect#expectassertionsnumber)
- [`expect.hasAssertions()`](https://jestjs.io/docs/expect#expecthasassertions)
- [`expect.not.arrayContaining(array)`](https://jestjs.io/docs/expect#expectnotarraycontainingarray)
- [`expect.not.objectContaining(object)`](https://jestjs.io/docs/expect#expectnotobjectcontainingobject)
- [`expect.not.stringContaining(string)`](https://jestjs.io/docs/expect#expectnotstringcontainingstring)
- [`expect.not.stringMatching(string | regexp)`](https://jestjs.io/docs/expect#expectnotstringmatchingstring--regexp)
- [`expect.objectContaining(object)`](https://jestjs.io/docs/expect#expectobjectcontainingobject)
- [`expect.stringContaining(string)`](https://jestjs.io/docs/expect#expectstringcontainingstring)
- [`expect.stringMatching(string | regexp)`](https://jestjs.io/docs/expect#expectstringmatchingstring--regexp)
- [`expect.addSnapshotSerializer(serializer)`](https://jestjs.io/docs/expect#expectaddsnapshotserializerserializer)
- [`.not`](https://jestjs.io/docs/expect#not)
- [`.resolves`](https://jestjs.io/docs/expect#resolves)
- [`.rejects`](https://jestjs.io/docs/expect#rejects)
- [`.toBe(value)`](https://jestjs.io/docs/expect#tobevalue)
- [`.toHaveBeenCalled()`](https://jestjs.io/docs/expect#tohavebeencalled)
- [`.toHaveBeenCalledTimes(number)`](https://jestjs.io/docs/expect#tohavebeencalledtimesnumber)
- [`.toHaveBeenCalledWith(arg1, arg2, ...)`](https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-)
- [`.toHaveBeenLastCalledWith(arg1, arg2, ...)`](https://jestjs.io/docs/expect#tohavebeenlastcalledwitharg1-arg2-)
- [`.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)`](https://jestjs.io/docs/expect#tohavebeennthcalledwithnthcall-arg1-arg2-)
- [`.toHaveReturned()`](https://jestjs.io/docs/expect#tohavereturned)
- [`.toHaveReturnedTimes(number)`](https://jestjs.io/docs/expect#tohavereturnedtimesnumber)
- [`.toHaveReturnedWith(value)`](https://jestjs.io/docs/expect#tohavereturnedwithvalue)
- [`.toHaveLastReturnedWith(value)`](https://jestjs.io/docs/expect#tohavelastreturnedwithvalue)
- [`.toHaveNthReturnedWith(nthCall, value)`](https://jestjs.io/docs/expect#tohaventhreturnedwithnthcall-value)
- [`.toHaveLength(number)`](https://jestjs.io/docs/expect#tohavelengthnumber)
- [`.toHaveProperty(keyPath, value?)`](https://jestjs.io/docs/expect#tohavepropertykeypath-value)
- [`.toBeCloseTo(number, numDigits?)`](https://jestjs.io/docs/expect#tobeclosetonumber-numdigits)
- [`.toBeDefined()`](https://jestjs.io/docs/expect#tobedefined)
- [`.toBeFalsy()`](https://jestjs.io/docs/expect#tobefalsy)
- [`.toBeGreaterThan(number | bigint)`](https://jestjs.io/docs/expect#tobegreaterthannumber--bigint)
- [`.toBeGreaterThanOrEqual(number | bigint)`](https://jestjs.io/docs/expect#tobegreaterthanorequalnumber--bigint)
- [`.toBeLessThan(number | bigint)`](https://jestjs.io/docs/expect#tobelessthannumber--bigint)
- [`.toBeLessThanOrEqual(number | bigint)`](https://jestjs.io/docs/expect#tobelessthanorequalnumber--bigint)
- [`.toBeInstanceOf(Class)`](https://jestjs.io/docs/expect#tobeinstanceofclass)
- [`.toBeNull()`](https://jestjs.io/docs/expect#tobenull)
- [`.toBeTruthy()`](https://jestjs.io/docs/expect#tobetruthy)
- [`.toBeUndefined()`](https://jestjs.io/docs/expect#tobeundefined)
- [`.toBeNaN()`](https://jestjs.io/docs/expect#tobenan)
- [`.toContain(item)`](https://jestjs.io/docs/expect#tocontainitem)
- [`.toContainEqual(item)`](https://jestjs.io/docs/expect#tocontainequalitem)
- [`.toEqual(value)`](https://jestjs.io/docs/expect#toequalvalue)
- [`.toMatch(regexp | string)`](https://jestjs.io/docs/expect#tomatchregexp--string)
- [`.toMatchObject(object)`](https://jestjs.io/docs/expect#tomatchobjectobject)
- [`.toMatchSnapshot(propertyMatchers?, hint?)`](https://jestjs.io/docs/expect#tomatchsnapshotpropertymatchers-hint)
- [`.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)`](https://jestjs.io/docs/expect#tomatchinlinesnapshotpropertymatchers-inlinesnapshot)
- [`.toStrictEqual(value)`](https://jestjs.io/docs/expect#tostrictequalvalue)
- [`.toThrow(error?)`](https://jestjs.io/docs/expect#tothrowerror)
- [`.toThrowErrorMatchingSnapshot(hint?)`](https://jestjs.io/docs/expect#tothrowerrormatchingsnapshothint)
- [`.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)`](https://jestjs.io/docs/expect#tothrowerrormatchinginlinesnapshotinlinesnapshot)

---

## Reference[#](https://jestjs.io/docs/expect#reference "Direct link to heading")

### `expect(value)`[#](https://jestjs.io/docs/expect#expectvalue "Direct link to heading")

The `expect` function is used every time you want to test a value. You will rarely call `expect` by itself. Instead, you will use `expect` along with a "matcher" function to assert something about a value.

It's easier to understand this with an example. Let's say you have a method `bestLaCroixFlavor()` which is supposed to return the string `'grapefruit'`. Here's how you would test that:

In this case, `toBe` is the matcher function. There are a lot of different matcher functions, documented below, to help you test different things.

The argument to `expect` should be the value that your code produces, and any argument to the matcher should be the correct value. If you mix them up, your tests will still work, but the error messages on failing tests will look strange.

### `expect.extend(matchers)`[#](https://jestjs.io/docs/expect#expectextendmatchers "Direct link to heading")

You can use `expect.extend` to add your own matchers to Jest. For example, let's say that you're testing a number utility library and you're frequently asserting that numbers appear within particular ranges of other numbers. You could abstract that into a `toBeWithinRange` matcher:

_Note_: In TypeScript, when using `@types/jest` for example, you can declare the new `toBeWithinRange` matcher in the imported module like this:

#### Async Matchers[#](https://jestjs.io/docs/expect#async-matchers "Direct link to heading")

`expect.extend` also supports async matchers. Async matchers return a Promise so you will need to await the returned value. Let's use an example matcher to illustrate the usage of them. We are going to implement a matcher called `toBeDivisibleByExternalValue`, where the divisible number is going to be pulled from an external source.

#### Custom Matchers API[#](https://jestjs.io/docs/expect#custom-matchers-api "Direct link to heading")

Matchers should return an object (or a Promise of an object) with two keys. `pass` indicates whether there was a match or not, and `message` provides a function with no arguments that returns an error message in case of failure. Thus, when `pass` is false, `message` should return the error message for when `expect(x).yourMatcher()` fails. And when `pass` is true, `message` should return the error message for when `expect(x).not.yourMatcher()` fails.

Matchers are called with the argument passed to `expect(x)` followed by the arguments passed to `.yourMatcher(y, z)`:

These helper functions and properties can be found on `this` inside a custom matcher:

#### `this.isNot`[#](https://jestjs.io/docs/expect#thisisnot "Direct link to heading")

A boolean to let you know this matcher was called with the negated `.not` modifier allowing you to display a clear and correct matcher hint (see example code).

#### `this.promise`[#](https://jestjs.io/docs/expect#thispromise "Direct link to heading")

A string allowing you to display a clear and correct matcher hint:

- `'rejects'` if matcher was called with the promise `.rejects` modifier
- `'resolves'` if matcher was called with the promise `.resolves` modifier
- `''` if matcher was not called with a promise modifier

#### `this.equals(a, b)`[#](https://jestjs.io/docs/expect#thisequalsa-b "Direct link to heading")

This is a deep-equality function that will return `true` if two objects have the same values (recursively).

#### `this.expand`[#](https://jestjs.io/docs/expect#thisexpand "Direct link to heading")

A boolean to let you know this matcher was called with an `expand` option. When Jest is called with the `--expand` flag, `this.expand` can be used to determine if Jest is expected to show full diffs and errors.

#### `this.utils`[#](https://jestjs.io/docs/expect#thisutils "Direct link to heading")

There are a number of helpful tools exposed on `this.utils` primarily consisting of the exports from [`jest-matcher-utils`](https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils).

The most useful ones are `matcherHint`, `printExpected` and `printReceived` to format the error messages nicely. For example, take a look at the implementation for the `toBe` matcher:

This will print something like this:

When an assertion fails, the error message should give as much signal as necessary to the user so they can resolve their issue quickly. You should craft a precise failure message to make sure users of your custom assertions have a good developer experience.

#### Custom snapshot matchers[#](https://jestjs.io/docs/expect#custom-snapshot-matchers "Direct link to heading")

To use snapshot testing inside of your custom matcher you can import `jest-snapshot` and use it from within your matcher.

Here's a snapshot matcher that trims a string to store for a given length, `.toMatchTrimmedSnapshot(length)`:

It's also possible to create custom matchers for inline snapshots, the snapshots will be correctly added to the custom matchers. However, inline snapshot will always try to append to the first argument or the second when the first argument is the property matcher, so it's not possible to accept custom arguments in the custom matchers.

#### async[#](https://jestjs.io/docs/expect#async "Direct link to heading")

If your custom inline snapshot matcher is async i.e. uses `async`\-`await` you might encounter an error like "Multiple inline snapshots for the same call are not supported". Jest needs additional context information to find where the custom inline snapshot matcher was used to update the snapshots properly.

#### Bail out[#](https://jestjs.io/docs/expect#bail-out "Direct link to heading")

Usually `jest` tries to match every snapshot that is expected in a test.

Sometimes it might not make sense to continue the test if a prior snapshot failed. For example, when you make snapshots of a state-machine after various transitions you can abort the test once one transition produced the wrong state.

In that case you can implement a custom snapshot matcher that throws on the first mismatch instead of collecting every mismatch.

### `expect.anything()`[#](https://jestjs.io/docs/expect#expectanything "Direct link to heading")

`expect.anything()` matches anything but `null` or `undefined`. You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value. For example, if you want to check that a mock function is called with a non-null argument:

### `expect.any(constructor)`[#](https://jestjs.io/docs/expect#expectanyconstructor "Direct link to heading")

`expect.any(constructor)` matches anything that was created with the given constructor. You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value. For example, if you want to check that a mock function is called with a number:

### `expect.arrayContaining(array)`[#](https://jestjs.io/docs/expect#expectarraycontainingarray "Direct link to heading")

`expect.arrayContaining(array)` matches a received array which contains all of the elements in the expected array. That is, the expected array is a **subset** of the received array. Therefore, it matches a received array which contains elements that are **not** in the expected array.

You can use it instead of a literal value:

- in `toEqual` or `toBeCalledWith`
- to match a property in `objectContaining` or `toMatchObject`

### `expect.assertions(number)`[#](https://jestjs.io/docs/expect#expectassertionsnumber "Direct link to heading")

`expect.assertions(number)` verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.

For example, let's say that we have a function `doAsync` that receives two callbacks `callback1` and `callback2`, it will asynchronously call both of them in an unknown order. We can test this with:

The `expect.assertions(2)` call ensures that both callbacks actually get called.

### `expect.hasAssertions()`[#](https://jestjs.io/docs/expect#expecthasassertions "Direct link to heading")

`expect.hasAssertions()` verifies that at least one assertion is called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.

For example, let's say that we have a few functions that all deal with state. `prepareState` calls a callback with a state object, `validateState` runs on that state object, and `waitOnState` returns a promise that waits until all `prepareState` callbacks complete. We can test this with:

The `expect.hasAssertions()` call ensures that the `prepareState` callback actually gets called.

### `expect.not.arrayContaining(array)`[#](https://jestjs.io/docs/expect#expectnotarraycontainingarray "Direct link to heading")

`expect.not.arrayContaining(array)` matches a received array which does not contain all of the elements in the expected array. That is, the expected array **is not a subset** of the received array.

It is the inverse of `expect.arrayContaining`.

### `expect.not.objectContaining(object)`[#](https://jestjs.io/docs/expect#expectnotobjectcontainingobject "Direct link to heading")

`expect.not.objectContaining(object)` matches any received object that does not recursively match the expected properties. That is, the expected object **is not a subset** of the received object. Therefore, it matches a received object which contains properties that are **not** in the expected object.

It is the inverse of `expect.objectContaining`.

### `expect.not.stringContaining(string)`[#](https://jestjs.io/docs/expect#expectnotstringcontainingstring "Direct link to heading")

`expect.not.stringContaining(string)` matches the received value if it is not a string or if it is a string that does not contain the exact expected string.

It is the inverse of `expect.stringContaining`.

### `expect.not.stringMatching(string | regexp)`[#](https://jestjs.io/docs/expect#expectnotstringmatchingstring--regexp "Direct link to heading")

`expect.not.stringMatching(string | regexp)` matches the received value if it is not a string or if it is a string that does not match the expected string or regular expression.

It is the inverse of `expect.stringMatching`.

### `expect.objectContaining(object)`[#](https://jestjs.io/docs/expect#expectobjectcontainingobject "Direct link to heading")

`expect.objectContaining(object)` matches any received object that recursively matches the expected properties. That is, the expected object is a **subset** of the received object. Therefore, it matches a received object which contains properties that **are present** in the expected object.

Instead of literal property values in the expected object, you can use matchers, `expect.anything()`, and so on.

For example, let's say that we expect an `onPress` function to be called with an `Event` object, and all we need to verify is that the event has `event.x` and `event.y` properties. We can do that with:

### `expect.stringContaining(string)`[#](https://jestjs.io/docs/expect#expectstringcontainingstring "Direct link to heading")

`expect.stringContaining(string)` matches the received value if it is a string that contains the exact expected string.

### `expect.stringMatching(string | regexp)`[#](https://jestjs.io/docs/expect#expectstringmatchingstring--regexp "Direct link to heading")

`expect.stringMatching(string | regexp)` matches the received value if it is a string that matches the expected string or regular expression.

You can use it instead of a literal value:

- in `toEqual` or `toBeCalledWith`
- to match an element in `arrayContaining`
- to match a property in `objectContaining` or `toMatchObject`

This example also shows how you can nest multiple asymmetric matchers, with `expect.stringMatching` inside the `expect.arrayContaining`.

### `expect.addSnapshotSerializer(serializer)`[#](https://jestjs.io/docs/expect#expectaddsnapshotserializerserializer "Direct link to heading")

You can call `expect.addSnapshotSerializer` to add a module that formats application-specific data structures.

For an individual test file, an added module precedes any modules from `snapshotSerializers` configuration, which precede the default snapshot serializers for built-in JavaScript types and for React elements. The last module added is the first module tested.

If you add a snapshot serializer in individual test files instead of adding it to `snapshotSerializers` configuration:

- You make the dependency explicit instead of implicit.
- You avoid limits to configuration that might cause you to eject from [create-react-app](https://github.com/facebookincubator/create-react-app).

See [configuring Jest](https://jestjs.io/docs/configuration#snapshotserializers-arraystring) for more information.

### `.not`[#](https://jestjs.io/docs/expect#not "Direct link to heading")

If you know how to test something, `.not` lets you test its opposite. For example, this code tests that the best La Croix flavor is not coconut:

### `.resolves`[#](https://jestjs.io/docs/expect#resolves "Direct link to heading")

Use `resolves` to unwrap the value of a fulfilled promise so any other matcher can be chained. If the promise is rejected the assertion fails.

For example, this code tests that the promise resolves and that the resulting value is `'lemon'`:

Note that, since you are still testing promises, the test is still asynchronous. Hence, you will need to [tell Jest to wait](https://jestjs.io/docs/asynchronous#promises) by returning the unwrapped assertion.

Alternatively, you can use `async/await` in combination with `.resolves`:

### `.rejects`[#](https://jestjs.io/docs/expect#rejects "Direct link to heading")

Use `.rejects` to unwrap the reason of a rejected promise so any other matcher can be chained. If the promise is fulfilled the assertion fails.

For example, this code tests that the promise rejects with reason `'octopus'`:

Note that, since you are still testing promises, the test is still asynchronous. Hence, you will need to [tell Jest to wait](https://jestjs.io/docs/asynchronous#promises) by returning the unwrapped assertion.

Alternatively, you can use `async/await` in combination with `.rejects`.

### `.toBe(value)`[#](https://jestjs.io/docs/expect#tobevalue "Direct link to heading")

Use `.toBe` to compare primitive values or to check referential identity of object instances. It calls `Object.is` to compare values, which is even better for testing than `===` strict equality operator.

For example, this code will validate some properties of the `can` object:

Don't use `.toBe` with floating-point numbers. For example, due to rounding, in JavaScript `0.2 + 0.1` is not strictly equal to `0.3`. If you have floating point numbers, try `.toBeCloseTo` instead.

Although the `.toBe` matcher **checks** referential identity, it **reports** a deep comparison of values if the assertion fails. If differences between properties do not help you to understand why a test fails, especially if the report is large, then you might move the comparison into the `expect` function. For example, to assert whether or not elements are the same instance:

- rewrite `expect(received).toBe(expected)` as `expect(Object.is(received, expected)).toBe(true)`
- rewrite `expect(received).not.toBe(expected)` as `expect(Object.is(received, expected)).toBe(false)`

### `.toHaveBeenCalled()`[#](https://jestjs.io/docs/expect#tohavebeencalled "Direct link to heading")

Also under the alias: `.toBeCalled()`

Use `.toHaveBeenCalled` to ensure that a mock function got called.

For example, let's say you have a `drinkAll(drink, flavour)` function that takes a `drink` function and applies it to all available beverages. You might want to check that `drink` gets called for `'lemon'`, but not for `'octopus'`, because `'octopus'` flavour is really weird and why would anything be octopus-flavoured? You can do that with this test suite:

### `.toHaveBeenCalledTimes(number)`[#](https://jestjs.io/docs/expect#tohavebeencalledtimesnumber "Direct link to heading")

Also under the alias: `.toBeCalledTimes(number)`

Use `.toHaveBeenCalledTimes` to ensure that a mock function got called exact number of times.

For example, let's say you have a `drinkEach(drink, Array<flavor>)` function that takes a `drink` function and applies it to array of passed beverages. You might want to check that drink function was called exact number of times. You can do that with this test suite:

### `.toHaveBeenCalledWith(arg1, arg2, ...)`[#](https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2- "Direct link to heading")

Also under the alias: `.toBeCalledWith()`

Use `.toHaveBeenCalledWith` to ensure that a mock function was called with specific arguments.

For example, let's say that you can register a beverage with a `register` function, and `applyToAll(f)` should apply the function `f` to all registered beverages. To make sure this works, you could write:

### `.toHaveBeenLastCalledWith(arg1, arg2, ...)`[#](https://jestjs.io/docs/expect#tohavebeenlastcalledwitharg1-arg2- "Direct link to heading")

Also under the alias: `.lastCalledWith(arg1, arg2, ...)`

If you have a mock function, you can use `.toHaveBeenLastCalledWith` to test what arguments it was last called with. For example, let's say you have a `applyToAllFlavors(f)` function that applies `f` to a bunch of flavors, and you want to ensure that when you call it, the last flavor it operates on is `'mango'`. You can write:

### `.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)`[#](https://jestjs.io/docs/expect#tohavebeennthcalledwithnthcall-arg1-arg2- "Direct link to heading")

Also under the alias: `.nthCalledWith(nthCall, arg1, arg2, ...)`

If you have a mock function, you can use `.toHaveBeenNthCalledWith` to test what arguments it was nth called with. For example, let's say you have a `drinkEach(drink, Array<flavor>)` function that applies `f` to a bunch of flavors, and you want to ensure that when you call it, the first flavor it operates on is `'lemon'` and the second one is `'octopus'`. You can write:

Note: the nth argument must be positive integer starting from 1.

### `.toHaveReturned()`[#](https://jestjs.io/docs/expect#tohavereturned "Direct link to heading")

Also under the alias: `.toReturn()`

If you have a mock function, you can use `.toHaveReturned` to test that the mock function successfully returned (i.e., did not throw an error) at least one time. For example, let's say you have a mock `drink` that returns `true`. You can write:

### `.toHaveReturnedTimes(number)`[#](https://jestjs.io/docs/expect#tohavereturnedtimesnumber "Direct link to heading")

Also under the alias: `.toReturnTimes(number)`

Use `.toHaveReturnedTimes` to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times. Any calls to the mock function that throw an error are not counted toward the number of times the function returned.

For example, let's say you have a mock `drink` that returns `true`. You can write:

### `.toHaveReturnedWith(value)`[#](https://jestjs.io/docs/expect#tohavereturnedwithvalue "Direct link to heading")

Also under the alias: `.toReturnWith(value)`

Use `.toHaveReturnedWith` to ensure that a mock function returned a specific value.

For example, let's say you have a mock `drink` that returns the name of the beverage that was consumed. You can write:

### `.toHaveLastReturnedWith(value)`[#](https://jestjs.io/docs/expect#tohavelastreturnedwithvalue "Direct link to heading")

Also under the alias: `.lastReturnedWith(value)`

Use `.toHaveLastReturnedWith` to test the specific value that a mock function last returned. If the last call to the mock function threw an error, then this matcher will fail no matter what value you provided as the expected return value.

For example, let's say you have a mock `drink` that returns the name of the beverage that was consumed. You can write:

### `.toHaveNthReturnedWith(nthCall, value)`[#](https://jestjs.io/docs/expect#tohaventhreturnedwithnthcall-value "Direct link to heading")

Also under the alias: `.nthReturnedWith(nthCall, value)`

Use `.toHaveNthReturnedWith` to test the specific value that a mock function returned for the nth call. If the nth call to the mock function threw an error, then this matcher will fail no matter what value you provided as the expected return value.

For example, let's say you have a mock `drink` that returns the name of the beverage that was consumed. You can write:

Note: the nth argument must be positive integer starting from 1.

### `.toHaveLength(number)`[#](https://jestjs.io/docs/expect#tohavelengthnumber "Direct link to heading")

Use `.toHaveLength` to check that an object has a `.length` property and it is set to a certain numeric value.

This is especially useful for checking arrays or strings size.

### `.toHaveProperty(keyPath, value?)`[#](https://jestjs.io/docs/expect#tohavepropertykeypath-value "Direct link to heading")

Use `.toHaveProperty` to check if property at provided reference `keyPath` exists for an object. For checking deeply nested properties in an object you may use [dot notation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors) or an array containing the keyPath for deep references.

You can provide an optional `value` argument to compare the received property value (recursively for all properties of object instances, also known as deep equality, like the `toEqual` matcher).

The following example contains a `houseForSale` object with nested properties. We are using `toHaveProperty` to check for the existence and values of various properties in the object.

### `.toBeCloseTo(number, numDigits?)`[#](https://jestjs.io/docs/expect#tobeclosetonumber-numdigits "Direct link to heading")

Use `toBeCloseTo` to compare floating point numbers for approximate equality.

The optional `numDigits` argument limits the number of digits to check **after** the decimal point. For the default value `2`, the test criterion is `Math.abs(expected - received) < 0.005` (that is, `10 ** -2 / 2`).

Intuitive equality comparisons often fail, because arithmetic on decimal (base 10) values often have rounding errors in limited precision binary (base 2) representation. For example, this test fails:

It fails because in JavaScript, `0.2 + 0.1` is actually `0.30000000000000004`.

For example, this test passes with a precision of 5 digits:

Because floating point errors are the problem that `toBeCloseTo` solves, it does not support big integer values.

### `.toBeDefined()`[#](https://jestjs.io/docs/expect#tobedefined "Direct link to heading")

Use `.toBeDefined` to check that a variable is not undefined. For example, if you want to check that a function `fetchNewFlavorIdea()` returns _something_, you can write:

You could write `expect(fetchNewFlavorIdea()).not.toBe(undefined)`, but it's better practice to avoid referring to `undefined` directly in your code.

### `.toBeFalsy()`[#](https://jestjs.io/docs/expect#tobefalsy "Direct link to heading")

Use `.toBeFalsy` when you don't care what a value is and you want to ensure a value is false in a boolean context. For example, let's say you have some application code that looks like:

You may not care what `getErrors` returns, specifically - it might return `false`, `null`, or `0`, and your code would still work. So if you want to test there are no errors after drinking some La Croix, you could write:

In JavaScript, there are six falsy values: `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.

### `.toBeGreaterThan(number | bigint)`[#](https://jestjs.io/docs/expect#tobegreaterthannumber--bigint "Direct link to heading")

Use `toBeGreaterThan` to compare `received > expected` for number or big integer values. For example, test that `ouncesPerCan()` returns a value of more than 10 ounces:

### `.toBeGreaterThanOrEqual(number | bigint)`[#](https://jestjs.io/docs/expect#tobegreaterthanorequalnumber--bigint "Direct link to heading")

Use `toBeGreaterThanOrEqual` to compare `received >= expected` for number or big integer values. For example, test that `ouncesPerCan()` returns a value of at least 12 ounces:

### `.toBeLessThan(number | bigint)`[#](https://jestjs.io/docs/expect#tobelessthannumber--bigint "Direct link to heading")

Use `toBeLessThan` to compare `received < expected` for number or big integer values. For example, test that `ouncesPerCan()` returns a value of less than 20 ounces:

### `.toBeLessThanOrEqual(number | bigint)`[#](https://jestjs.io/docs/expect#tobelessthanorequalnumber--bigint "Direct link to heading")

Use `toBeLessThanOrEqual` to compare `received <= expected` for number or big integer values. For example, test that `ouncesPerCan()` returns a value of at most 12 ounces:

### `.toBeInstanceOf(Class)`[#](https://jestjs.io/docs/expect#tobeinstanceofclass "Direct link to heading")

Use `.toBeInstanceOf(Class)` to check that an object is an instance of a class. This matcher uses `instanceof` underneath.

### `.toBeNull()`[#](https://jestjs.io/docs/expect#tobenull "Direct link to heading")

`.toBeNull()` is the same as `.toBe(null)` but the error messages are a bit nicer. So use `.toBeNull()` when you want to check that something is null.

### `.toBeTruthy()`[#](https://jestjs.io/docs/expect#tobetruthy "Direct link to heading")

Use `.toBeTruthy` when you don't care what a value is and you want to ensure a value is true in a boolean context. For example, let's say you have some application code that looks like:

You may not care what `thirstInfo` returns, specifically - it might return `true` or a complex object, and your code would still work. So if you want to test that `thirstInfo` will be truthy after drinking some La Croix, you could write:

In JavaScript, there are six falsy values: `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.

### `.toBeUndefined()`[#](https://jestjs.io/docs/expect#tobeundefined "Direct link to heading")

Use `.toBeUndefined` to check that a variable is undefined. For example, if you want to check that a function `bestDrinkForFlavor(flavor)` returns `undefined` for the `'octopus'` flavor, because there is no good octopus-flavored drink:

You could write `expect(bestDrinkForFlavor('octopus')).toBe(undefined)`, but it's better practice to avoid referring to `undefined` directly in your code.

### `.toBeNaN()`[#](https://jestjs.io/docs/expect#tobenan "Direct link to heading")

Use `.toBeNaN` when checking a value is `NaN`.

### `.toContain(item)`[#](https://jestjs.io/docs/expect#tocontainitem "Direct link to heading")

Use `.toContain` when you want to check that an item is in an array. For testing the items in the array, this uses `===`, a strict equality check. `.toContain` can also check whether a string is a substring of another string.

For example, if `getAllFlavors()` returns an array of flavors and you want to be sure that `lime` is in there, you can write:

### `.toContainEqual(item)`[#](https://jestjs.io/docs/expect#tocontainequalitem "Direct link to heading")

Use `.toContainEqual` when you want to check that an item with a specific structure and values is contained in an array. For testing the items in the array, this matcher recursively checks the equality of all fields, rather than checking for object identity.

### `.toEqual(value)`[#](https://jestjs.io/docs/expect#toequalvalue "Direct link to heading")

Use `.toEqual` to compare recursively all properties of object instances (also known as "deep" equality). It calls `Object.is` to compare primitive values, which is even better for testing than `===` strict equality operator.

For example, `.toEqual` and `.toBe` behave differently in this test suite, so all the tests pass:

> Note: `.toEqual` won't perform a _deep equality_ check for two errors. Only the `message` property of an Error is considered for equality. It is recommended to use the `.toThrow` matcher for testing against errors.

If differences between properties do not help you to understand why a test fails, especially if the report is large, then you might move the comparison into the `expect` function. For example, use `equals` method of `Buffer` class to assert whether or not buffers contain the same content:

- rewrite `expect(received).toEqual(expected)` as `expect(received.equals(expected)).toBe(true)`
- rewrite `expect(received).not.toEqual(expected)` as `expect(received.equals(expected)).toBe(false)`

### `.toMatch(regexp | string)`[#](https://jestjs.io/docs/expect#tomatchregexp--string "Direct link to heading")

Use `.toMatch` to check that a string matches a regular expression.

For example, you might not know what exactly `essayOnTheBestFlavor()` returns, but you know it's a really long string, and the substring `grapefruit` should be in there somewhere. You can test this with:

This matcher also accepts a string, which it will try to match:

### `.toMatchObject(object)`[#](https://jestjs.io/docs/expect#tomatchobjectobject "Direct link to heading")

Use `.toMatchObject` to check that a JavaScript object matches a subset of the properties of an object. It will match received objects with properties that are **not** in the expected object.

You can also pass an array of objects, in which case the method will return true only if each object in the received array matches (in the `toMatchObject` sense described above) the corresponding object in the expected array. This is useful if you want to check that two arrays match in their number of elements, as opposed to `arrayContaining`, which allows for extra elements in the received array.

You can match properties against values or against matchers.

### `.toMatchSnapshot(propertyMatchers?, hint?)`[#](https://jestjs.io/docs/expect#tomatchsnapshotpropertymatchers-hint "Direct link to heading")

This ensures that a value matches the most recent snapshot. Check out [the Snapshot Testing guide](https://jestjs.io/docs/snapshot-testing) for more information.

You can provide an optional `propertyMatchers` object argument, which has asymmetric matchers as values of a subset of expected properties, **if** the received value will be an **object** instance. It is like `toMatchObject` with flexible criteria for a subset of properties, followed by a snapshot test as exact criteria for the rest of the properties.

You can provide an optional `hint` string argument that is appended to the test name. Although Jest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate **multiple** snapshots in a **single** `it` or `test` block. Jest sorts snapshots by name in the corresponding `.snap` file.

### `.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)`[#](https://jestjs.io/docs/expect#tomatchinlinesnapshotpropertymatchers-inlinesnapshot "Direct link to heading")

Ensures that a value matches the most recent snapshot.

You can provide an optional `propertyMatchers` object argument, which has asymmetric matchers as values of a subset of expected properties, **if** the received value will be an **object** instance. It is like `toMatchObject` with flexible criteria for a subset of properties, followed by a snapshot test as exact criteria for the rest of the properties.

Jest adds the `inlineSnapshot` string argument to the matcher in the test file (instead of an external `.snap` file) the first time that the test runs.

Check out the section on [Inline Snapshots](https://jestjs.io/docs/snapshot-testing#inline-snapshots) for more info.

### `.toStrictEqual(value)`[#](https://jestjs.io/docs/expect#tostrictequalvalue "Direct link to heading")

Use `.toStrictEqual` to test that objects have the same types as well as structure.

Differences from `.toEqual`:

- Keys with `undefined` properties are checked. e.g. `{a: undefined, b: 2}` does not match `{b: 2}` when using `.toStrictEqual`.
- Array sparseness is checked. e.g. `[, 1]` does not match `[undefined, 1]` when using `.toStrictEqual`.
- Object types are checked to be equal. e.g. A class instance with fields `a` and `b` will not equal a literal object with fields `a` and `b`.

### `.toThrow(error?)`[#](https://jestjs.io/docs/expect#tothrowerror "Direct link to heading")

Also under the alias: `.toThrowError(error?)`

Use `.toThrow` to test that a function throws when it is called. For example, if we want to test that `drinkFlavor('octopus')` throws, because octopus flavor is too disgusting to drink, we could write:

> Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.

You can provide an optional argument to test that a specific error is thrown:

- regular expression: error message **matches** the pattern
- string: error message **includes** the substring
- error object: error message is **equal to** the message property of the object
- error class: error object is **instance of** class

For example, let's say that `drinkFlavor` is coded like this:

We could test this error gets thrown in several ways:

### `.toThrowErrorMatchingSnapshot(hint?)`[#](https://jestjs.io/docs/expect#tothrowerrormatchingsnapshothint "Direct link to heading")

Use `.toThrowErrorMatchingSnapshot` to test that a function throws an error matching the most recent snapshot when it is called.

You can provide an optional `hint` string argument that is appended to the test name. Although Jest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate **multiple** snapshots in a **single** `it` or `test` block. Jest sorts snapshots by name in the corresponding `.snap` file.

For example, let's say you have a `drinkFlavor` function that throws whenever the flavor is `'octopus'`, and is coded like this:

The test for this function will look this way:

And it will generate the following snapshot:

Check out [React Tree Snapshot Testing](https://jestjs.io/blog/2016/07/27/jest-14) for more information on snapshot testing.

### `.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)`[#](https://jestjs.io/docs/expect#tothrowerrormatchinginlinesnapshotinlinesnapshot "Direct link to heading")

Use `.toThrowErrorMatchingInlineSnapshot` to test that a function throws an error matching the most recent snapshot when it is called.

Jest adds the `inlineSnapshot` string argument to the matcher in the test file (instead of an external `.snap` file) the first time that the test runs.

Check out the section on [Inline Snapshots](https://jestjs.io/docs/snapshot-testing#inline-snapshots) for more info.

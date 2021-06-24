`React Testing Library` re-exports everything from `DOM Testing Library` as well as these methods:

- [`render`](https://testing-library.com/docs/react-testing-library/api/#render)
- [`render` Options](https://testing-library.com/docs/react-testing-library/api/#render-options)
  - [`container`](https://testing-library.com/docs/react-testing-library/api/#container)
  - [`baseElement`](https://testing-library.com/docs/react-testing-library/api/#baseelement)
  - [`hydrate`](https://testing-library.com/docs/react-testing-library/api/#hydrate)
  - [`wrapper`](https://testing-library.com/docs/react-testing-library/api/#wrapper)
  - [`queries`](https://testing-library.com/docs/react-testing-library/api/#queries)
- [`render` Result](https://testing-library.com/docs/react-testing-library/api/#render-result)
  - [`...queries`](https://testing-library.com/docs/react-testing-library/api/#queries-1)
  - [`container`](https://testing-library.com/docs/react-testing-library/api/#container-1)
  - [`baseElement`](https://testing-library.com/docs/react-testing-library/api/#baseelement-1)
  - [`debug`](https://testing-library.com/docs/react-testing-library/api/#debug)
  - [`rerender`](https://testing-library.com/docs/react-testing-library/api/#rerender)
  - [`unmount`](https://testing-library.com/docs/react-testing-library/api/#unmount)
  - [`asFragment`](https://testing-library.com/docs/react-testing-library/api/#asfragment)
- [`cleanup`](https://testing-library.com/docs/react-testing-library/api/#cleanup)
- [`act`](https://testing-library.com/docs/react-testing-library/api/#act)

---

## `render`

function render(

ui: React.ReactElement<any\>,

options?: {

}

): RenderResult

Render into a container which is appended to `document.body`.

```js
import { render } from '@testing-library/react'

render(<div />)

import { render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

test('renders a message', () \=> {

const { container, getByText } \= render(<Greeting />)

expect(getByText('Hello, world!')).toBeInTheDocument()

expect(container.firstChild).toMatchInlineSnapshot(\`

<h1>Hello, World!</h1>

\`)

})
```

## `render` Options

You won't often need to specify options, but if you ever do, here are the available options which you could provide as a second argument to `render`.

### `container`

By default, `React Testing Library` will create a `div` and append that `div` to the `document.body` and this is where your React component will be rendered. If you provide your own HTMLElement `container` via this option, it will not be appended to the `document.body` automatically.

For example: If you are unit testing a `tablebody` element, it cannot be a child of a `div`. In this case, you can specify a `table` as the render `container`.

```js
const table \= document.createElement('table')

const { container } \= render(<TableBody {...props} />, {

container: document.body.appendChild(table),

})
```

### `baseElement`

If the `container` is specified, then this defaults to that, otherwise this defaults to `document.body`. This is used as the base element for the queries as well as what is printed when you use `debug()`.

### `hydrate`

If hydrate is set to true, then it will render with [ReactDOM.hydrate](https://reactjs.org/docs/react-dom.html#hydrate). This may be useful if you are using server-side rendering and use ReactDOM.hydrate to mount your components.

### `wrapper`

Pass a React Component as the `wrapper` option to have it rendered around the inner element. This is most useful for creating reusable custom render functions for common data providers. See [setup](https://testing-library.com/docs/react-testing-library/setup#custom-render) for examples.

### `queries`

Queries to bind. Overrides the default set from `DOM Testing Library` unless merged.

```js
import \* as tableQueries from 'my-table-query-libary'

import { queries } from '@testing-library/react'

const { getByRowColumn, getByText } \= render(<MyTable /\>, {

queries: { ...queries, ...tableQueries },

})
```

See [helpers](https://testing-library.com/docs/dom-testing-library/api-custom-queries) for guidance on using utility functions to create custom queries.

Custom queries can also be added globally by following the [custom render guide](https://testing-library.com/docs/react-testing-library/setup#custom-render).

## `render` Result

The `render` method returns an object that has a few properties:

### `...queries`

The most important feature of `render` is that the queries from [DOM Testing Library](https://testing-library.com/docs/queries/about) are automatically returned with their first argument bound to the [baseElement](https://testing-library.com/docs/react-testing-library/api/#baseelement), which defaults to `document.body`.

See [Queries](https://testing-library.com/docs/queries/about) for a complete list.

**Example**

```js
const { getByLabelText, queryAllByTestId } \= render(<Component />)
```

### `container`

The containing DOM node of your rendered React Element (rendered using `ReactDOM.render`). It's a `div`. This is a regular DOM node, so you can call `container.querySelector` etc. to inspect the children.

> Tip: To get the root element of your rendered element, use `container.firstChild`.
>
> NOTE: When that root element is a [React Fragment](https://reactjs.org/docs/fragments.html), `container.firstChild` will only get the first child of that Fragment, not the Fragment itself.

> 🚨 If you find yourself using `container` to query for rendered elements then you should reconsider! The other queries are designed to be more resilient to changes that will be made to the component you're testing. Avoid using `container` to query for elements!

### `baseElement`

The containing DOM node where your React Element is rendered in the container. If you don't specify the `baseElement` in the options of `render`, it will default to `document.body`.

This is useful when the component you want to test renders something outside the container div, e.g. when you want to snapshot test your portal component which renders its HTML directly in the body.

> Note: the queries returned by the `render` looks into baseElement, so you can use queries to test your portal component without the baseElement.

### `debug`

> NOTE: It's recommended to use [`screen.debug`](https://testing-library.com/docs/queries/about#api-queries#screendebug) instead.

This method is a shortcut for `console.log(prettyDOM(baseElement))`.

```js
import React from 'react'

import { render } from '@testing-library/react'

const HelloWorld \= () \=> <h1\>Hello World</h1\>

const { debug } \= render(<HelloWorld />)

debug()
```

This is a simple wrapper around `prettyDOM` which is also exposed and comes from [`DOM Testing Library`](https://testing-library.com/docs/dom-testing-library/api-debugging#prettydom).

### `rerender`

It'd probably be better if you test the component that's doing the prop updating to ensure that the props are being updated correctly (see [the Guiding Principles section](https://testing-library.com/docs/guiding-principles)). That said, if you'd prefer to update the props of a rendered component in your test, this function can be used to update props of the rendered component.

```js
import { render } from '@testing-library/react'

const { rerender } \= render(<NumberDisplay number\={1} />)

rerender(<NumberDisplay number\={2} />)
```

[See the examples page](https://testing-library.com/docs/example-update-props)

### `unmount`

This will cause the rendered component to be unmounted. This is useful for testing what happens when your component is removed from the page (like testing that you don't leave event handlers hanging around causing memory leaks).

> This method is a pretty small abstraction over `ReactDOM.unmountComponentAtNode`

```js
import { render } from '@testing-library/react'

const { container, unmount } \= render(<Login />)

unmount()
```

### `asFragment`

Returns a `DocumentFragment` of your rendered component. This can be useful if you need to avoid live bindings and see how your component reacts to events.

```js
import React, { useState } from 'react'

import { render, fireEvent } from '@testing-library/react'

const TestComponent \= () \=> {

const \[count, setCounter\] \= useState(0)

return (

<button onClick\={() \=> setCounter((count) \=> count + 1)}\>

Click to increase: {count}

</button\>

)

}

const { getByText, asFragment } \= render(<TestComponent />)

const firstRender \= asFragment()

fireEvent.click(getByText(/Click to increase/))

expect(firstRender).toMatchDiffSnapshot(asFragment())
```

---

## `cleanup`

Unmounts React trees that were mounted with [render](https://testing-library.com/docs/react-testing-library/api/#render).

> Please note that this is done automatically if the testing framework you're using supports the `afterEach` global and it is injected to your testing environment (like mocha, Jest, and Jasmine). If not, you will need to do manual cleanups after each test.

For example, if you're using the [ava](https://github.com/avajs/ava) testing framework, then you would need to use the `test.afterEach` hook like so:

```js
import { cleanup, render } from '@testing-library/react'

import test from 'ava'

test.afterEach(cleanup)

test('renders into document', () \=> {

render(<div />)

})
```

Failing to call `cleanup` when you've called `render` could result in a memory leak and tests which are not "idempotent" (which can lead to difficult to debug errors in your tests).

---

## `act`

This is a light wrapper around the [`react-dom/test-utils` `act` function](https://reactjs.org/docs/test-utils.html#act). All it does is forward all arguments to the act function if your version of react supports `act`. It is recommended to use the import from `@testing-library/react` over `react-dom/test-utils` for consistency reasons.
Several utilities are provided for dealing with asynchronous code. These can be useful to wait for an element to appear or disappear in response to an event, user action, timeout, or Promise. (See the [guide to testing disappearance](https://testing-library.com/docs/guide-disappearance).)

The async methods return Promises, so be sure to use `await` or `.then` when calling them.

## `findBy` Queries

`findBy` methods are a combination of `getBy` [queries](https://testing-library.com/docs/queries/about#types-of-queries) and [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor). They accept the waitFor options as the last argument (e.g. `await screen.findByText('text', queryOptions, waitForOptions)`).

`findBy` queries work when you expect an element to appear but the change to the DOM might not happen immediately.

```js
const button \= screen.getByRole('button', { name: 'Click Me' })

fireEvent.click(button)

await screen.findByText('Clicked once')

fireEvent.click(button)

await screen.findByText('Clicked twice')

## `waitFor`

function waitFor<T\>(

callback: () \=> T | Promise<T\>,

options?: {

container?: HTMLElement

timeout?: number

interval?: number

onTimeout?: (error: Error) \=> Error

mutationObserverOptions?: MutationObserverInit

}

): Promise<T\>
```

When in need to wait for any period of time you can use `waitFor`, to wait for your expectations to pass. Here's a simple example:

```js
await waitFor(() \=> expect(mockAPI).toHaveBeenCalledTimes(1))
```

`waitFor` may run the callback a variable number of times.

This can be useful if you have a unit test that mocks API calls and you need to wait for your mock promises to all resolve.

If you return a promise in the `waitFor` callback (either explicitly or implicitly with `async` syntax), then the `waitFor` utility will not call your callback again until that promise rejects. This allows you to `waitFor` things that must be checked asynchronously.

The default `container` is the global `document`. Make sure the elements you wait for are descendants of `container`.

The default `interval` is `50ms`. However it will run your callback immediately before starting the intervals.

The default `timeout` is `1000ms` which will keep you under [Jest's default timeout of `5000ms`](https://jestjs.io/docs/en/jest-object.html#jestsettimeouttimeout).

The default `onTimeout` takes the error and appends the `container`'s printed state to the error message which should hopefully make it easier to track down what caused the timeout.

The default `mutationObserverOptions` is `{subtree: true, childList: true, attributes: true, characterData: true}` which will detect additions and removals of child elements (including text nodes) in the `container` and any of its descendants. It will also detect attribute changes. When any of those changes occur, it will re-run the callback.

## `waitForElementToBeRemoved`

```js
function waitForElementToBeRemoved<T\>(

callback: (() \=> T) | T,

options?: {

container?: HTMLElement

timeout?: number

interval?: number

onTimeout?: (error: Error) \=> Error

mutationObserverOptions?: MutationObserverInit

}

): Promise<void\>
```

To wait for the removal of element(s) from the DOM you can use `waitForElementToBeRemoved`. The `waitForElementToBeRemoved` function is a small wrapper around the `waitFor` utility.

The first argument must be an element, array of elements, or a callback which returns an element or array of elements.

Here is an example where the promise resolves because the element is removed:

```js
const el \= document.querySelector('div.getOuttaHere')

waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() \=>

console.log('Element no longer in DOM')

)

el.setAttribute('data-neat', true)

el.parentElement.removeChild(el)
```

`waitForElementToBeRemoved` will throw an error if the first argument is `null` or an empty array:

```js
waitForElementToBeRemoved(null).catch((err) \=> console.log(err))

waitForElementToBeRemoved(queryByText(/not here/i)).catch((err) \=>

console.log(err)

)

waitForElementToBeRemoved(queryAllByText(/not here/i)).catch((err) \=>

console.log(err)

)

waitForElementToBeRemoved(() \=> getByText(/not here/i)).catch((err) \=>

console.log(err)

)
```

The options object is forwarded to `waitFor`.

## Deprecated Methods

`wait`, `waitForDomChange`, and `waitForElement` have been combined into the `waitFor` method.

Deprecated Methods

### `wait`

> (DEPRECATED, use `waitFor` instead)

```js
function wait<T\>(

callback: () \=> void,

options?: {

container?: HTMLElement

timeout?: number

interval?: number

mutationObserverOptions?: MutationObserverInit

}

): Promise<T\>
```

Previously, wait was a wrapper around wait-for-expect and used polling instead of a MutationObserver to look for changes. It is now an alias to waitFor and will be removed in a future release.

Unlike wait, the callback parameter is mandatory in waitFor. Although you can migrate an existing `wait()` call to `waitFor( () => {} )`, it is considered bad practice to use an empty callback because it will make the tests more fragile.

### `waitForDomChange`

> (DEPRECATED, use `waitFor` instead)

function waitForDomChange<T\>(options?: {

container?: HTMLElement

timeout?: number

mutationObserverOptions?: MutationObserverInit

}): Promise<T\>

When in need to wait for the DOM to change you can use `waitForDomChange`. The `waitForDomChange` function is a small wrapper around the [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

Here is an example where the promise will be resolved because the container is changed:

const container \= document.createElement('div')

waitForDomChange({ container })

.then(() \=> console.log('DOM changed!'))

.catch((err) \=> console.log(\`Error you need to deal with: ${err}\`))

container.append(document.createElement('p'))

The promise will resolve with a [`mutationsList`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver) which you can use to determine what kind of a change (or changes) affected the container

```js
const container \= document.createElement('div')

container.setAttribute('data-cool', 'true')

waitForDomChange({ container }).then((mutationsList) \=> {

const mutation \= mutationsList\[0\]

console.log(

\`was cool: ${mutation.oldValue}\\ncurrently cool: ${mutation.target.dataset.cool}\`

)

})

container.setAttribute('data-cool', 'false')
```

The default `container` is the global `document`. Make sure the elements you wait for are descendants of `container`.

The default `timeout` is `1000ms` which will keep you under [Jest's default timeout of `5000ms`](https://jestjs.io/docs/en/jest-object.html#jestsettimeouttimeout).

The default `mutationObserverOptions` is `{subtree: true, childList: true, attributes: true, characterData: true}` which will detect additions and removals of child elements (including text nodes) in the `container` and any of its descendants. It will also detect attribute changes.

### `waitForElement`

> (DEPRECATED, use `find*` queries or `waitFor`)

```js
function waitForElement<T\>(

callback: () \=> T,

options?: {

container?: HTMLElement

timeout?: number

mutationObserverOptions?: MutationObserverInit

}

): Promise<T\>
```

When in need to wait for DOM elements to appear, disappear, or change you can use `waitForElement`. The `waitForElement` function is a small wrapper around the [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

Here's a simple example:

```js
const usernameElement \= await waitForElement(

() \=> getByLabelText(container, 'username'),

{ container }

)

usernameElement.value \= 'chucknorris'

You can also wait for multiple elements at once:

const \[usernameElement, passwordElement\] \= await waitForElement(

() \=> \[

getByLabelText(container, 'username'),

getByLabelText(container, 'password'),

\],

{ container }

)
```

The default `container` is the global `document`. Make sure the elements you wait for will be attached to it, or set a different `container`.

The default `timeout` is `4500ms` which will keep you under [Jest's default timeout of `5000ms`](https://facebook.github.io/jest/docs/en/jest-object.html#jestsettimeouttimeout).

The default `mutationObserverOptions` is `{subtree: true, childList: true, attributes: true, characterData: true}` which will detect additions and removals of child elements (including text nodes) in the `container` and any of its descendants. It will also detect attribute changes.
import { render, fireEvent, screen } from '@testing-library/react'

```js
test('loads items eventually', async () \=> {

render(<Page />)

fireEvent.click(getByText('Load'))

const items \= await screen.findAllByText(/Item #\[0-9\]: /)

expect(items).toHaveLength(10)

})
```

**Difference from DOM Testing Library**

The queries returned from `render` in `React Testing Library` are the same as `DOM Testing Library` except they have the first argument bound to the document, so instead of `getByText(node, 'text')` you do `getByText('text')`
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
**HTTP headers** let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (`:`), then by its value. [Whitespace](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace) before the value is ignored.

Custom proprietary headers have historically been used with an `X-` prefix, but this convention was deprecated in June 2012 because of the inconveniences it caused when nonstandard fields became standard in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648); others are listed in an [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html), whose original content was defined in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229). IANA also maintains a [registry of proposed new HTTP headers](https://www.iana.org/assignments/message-headers/prov-headers.html).

Headers can be grouped according to their contexts:

- [Request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) contain more information about the resource to be fetched, or about the client requesting the resource.
- [Response headers](https://developer.mozilla.org/en-US/docs/Glossary/Response_header) hold additional information about the response, like its location or about the server providing it.
- [Representation headers](https://developer.mozilla.org/en-US/docs/Glossary/Representation_header) contain information about the body of the resource, like its [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), or encoding/compression applied.
- [Payload headers](https://developer.mozilla.org/en-US/docs/Glossary/Payload_header) contain representation-independent information about payload data, including content length and the encoding used for transport.

Headers can also be grouped according to how [proxies](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server) handle them:

- [`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)
- [`Keep-Alive`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)
- [`Proxy-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)
- [`Proxy-Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)
- [`TE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE)
- [`Trailer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)
- [`Transfer-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
- [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) (see also [Protocol upgrade mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)).

End-to-end headers

These headers _must_ be transmitted to the final recipient of the message: the server for a request, or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them.

Hop-by-hop headers

These headers are meaningful only for a single transport-level connection, and _must not_ be retransmitted by proxies or cached. Note that only hop-by-hop headers may be set using the [`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection) header.

## [Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#authentication "Permalink to Authentication")

[`WWW-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)

Defines the authentication method that should be used to access a resource.

[`Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)

Contains the credentials to authenticate a user-agent with a server.

[`Proxy-Authenticate`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate)

Defines the authentication method that should be used to access a resource behind a proxy server.

[`Proxy-Authorization`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization)

Contains the credentials to authenticate a user agent with a proxy server.

## [Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#caching "Permalink to Caching")

[`Age`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age)

The time, in seconds, that the object has been in a proxy cache.

[`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

Directives for caching mechanisms in both requests and responses.

[`Clear-Site-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data)

Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.

[`Expires`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires)

The date/time after which the response is considered stale.

[`Pragma`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma)

Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the `Cache-Control` header is not yet present.

[`Warning`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning)

General warning information about possible problems.

## [Client hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#client_hints "Permalink to Client hints")

HTTP [Client hints](https://developer.mozilla.org/en-US/docs/Glossary/Client_hints) are a set of request headers that provide useful information about the client such as device type and network conditions, and allow the server to optimize what it serves for those conditions ([\[RFC8942\]](https://datatracker.ietf.org/doc/html/rfc8942)).

[`Accept-CH`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH)

Servers can advertise support for Client Hints using the `Accept-CH` header field or an equivalent HTML `<meta>` element with `http-equiv` attribute ([\[HTML\]](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv)).

[`Accept-CH-Lifetime`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH-Lifetime)

Servers can ask the client to remember the set of Client Hints that the server supports for a specified period of time, to enable delivery of Client Hints on subsequent requests to the server’s origin ([\[RFC6454\]](https://datatracker.ietf.org/doc/html/rfc6454)).

[`Device-Memory`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory)

Technically a part of Device Memory API, this header represents an approximate amount of RAM client has.

[`DPR`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DPR)

Client device pixel ratio (DPR), which is the number of physical device pixels corresponding to every CSS pixel.

[`Save-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data)

A boolean that indicates the user agent's preference for reduced data usage.

[`Viewport-Width`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width "This is a link to an unwritten page")

A number that indicates the layout viewport width in CSS pixels. The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

If `Viewport-Width` occurs in a message more than once, the last value overrides all previous occurrences.

[`Width`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Width)

The `Width` request header field is a number that indicates the desired resource width in physical pixels (i.e. intrinsic size of an image). The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

If the desired resource width is not known at the time of the request or the resource does not have a display width, the `Width` header field can be omitted. If `Width` occurs in a message more than once, the last value overrides all previous occurrences

## [Conditionals](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#conditionals "Permalink to Conditionals")

[`Last-Modified`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified)

The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than [`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag), but easier to calculate in some environments. Conditional requests using [`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since) and [`If-Unmodified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since) use this value to change the behavior of the request.

[`ETag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)

A unique string identifying the version of the resource. Conditional requests using [`If-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match) and [`If-None-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) use this value to change the behavior of the request.

[`If-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match)

Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.

[`If-None-Match`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match)

Makes the request conditional, and applies the method only if the stored resource _doesn't_ match any of the given ETags. This is used to update caches (for safe requests), or to prevent to upload a new resource when one already exists.

[`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since)

Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.

[`If-Unmodified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)

Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

[`Vary`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)

Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

## [Connection management](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#connection_management "Permalink to Connection management")

[`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)

Controls whether the network connection stays open after the current transaction finishes.

[`Keep-Alive`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)

Controls how long a persistent connection should stay open.

## [Content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#content_negotiation "Permalink to Content negotiation")

[Content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) headers.

[`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)

Informs the server about the [types](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of data that can be sent back.

[`Accept-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)

The encoding algorithm, usually a [compression algorithm](https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression), that can be used on the resource sent back.

[`Accept-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)

Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).

## [Controls](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#controls "Permalink to Controls")

[`Expect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)

Indicates expectations that need to be fulfilled by the server to properly handle the request.

[`Max-Forwards`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards "This is a link to an unwritten page")

## [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#cookies "Permalink to Cookies")

## [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#cors "Permalink to CORS")

## [Downloads](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#downloads "Permalink to Downloads")

[`Content-Disposition`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a “Save As” dialog.

## [Message body information](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#message_body_information "Permalink to Message body information")

[`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)

The size of the resource, in decimal number of bytes.

[`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)

Indicates the media type of the resource.

[`Content-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)

Used to specify the compression algorithm.

[`Content-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language)

Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.

[`Content-Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location)

Indicates an alternate location for the returned data.

## [Proxies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#proxies "Permalink to Proxies")

[`Forwarded`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded)

Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

[`X-Forwarded-For`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)

Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.

[`X-Forwarded-Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host)

Identifies the original host requested that a client used to connect to your proxy or load balancer.

[`X-Forwarded-Proto`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto)

Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.

[`Via`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via)

Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## [Redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#redirects "Permalink to Redirects")

[`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)

Indicates the URL to redirect a page to.

## [Request context](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#request_context "Permalink to Request context")

[`From`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From)

Contains an Internet email address for a human user who controls the requesting user agent.

[`Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)

Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.

[`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)

The address of the previous web page from which a link to the currently requested page was followed.

[`Referrer-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

Governs which referrer information sent in the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header should be included with requests made.

[`User-Agent`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)

Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the [Firefox user agent string reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox).

## [Response context](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#response_context "Permalink to Response context")

[`Allow`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow)

Lists the set of HTTP request methods supported by a resource.

[`Server`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)

Contains information about the software used by the origin server to handle the request.

## [Range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#range_requests "Permalink to Range requests")

[`Accept-Ranges`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges)

Indicates if the server supports range requests, and if so in which unit the range can be expressed.

[`Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range)

Indicates the part of a document that the server should return.

[`If-Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range)

Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.

[`Content-Range`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)

Indicates where in a full body message a partial message belongs.

## [Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security "Permalink to Security")

[`Cross-Origin-Embedder-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) (COEP)

Allows a server to declare an embedder policy for a given document.

[`Cross-Origin-Opener-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) (COOP)

Prevents other domains from opening/controlling a window.

[`Cross-Origin-Resource-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) (CORP)

Prevents other domains from reading the response of the resources to which this header is applied.

[`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) ([CSP](https://developer.mozilla.org/en-US/docs/Glossary/CSP))

Controls resources the user agent is allowed to load for a given page.

[`Content-Security-Policy-Report-Only`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only)

Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) documents sent via an HTTP `POST` request to the specified URI.

[`Expect-CT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)

Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.

[`Feature-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy)

Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.

[`Origin-Isolation`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin-Isolation "This is a link to an unwritten page")

Provides a mechanism to allow web applications to isolate their origins.

[`Strict-Transport-Security`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) ([HSTS](https://developer.mozilla.org/en-US/docs/Glossary/HSTS))

Force communication using HTTPS instead of HTTP.

[`Upgrade-Insecure-Requests`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)

Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the [`upgrade-insecure-requests`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) directive.

[`X-Content-Type-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)

Disables MIME sniffing and forces browser to use the type given in [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type).

[`X-Download-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Download-Options "This is a link to an unwritten page")

The `[X-Download-Options](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj542450(v=vs.85)?#the-noopen-directive)` HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application. (Note: related [MS Edge bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18488178/)).

[`X-Frame-Options`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) (XFO)

Indicates whether a browser should be allowed to render a page in a [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame), [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [`<embed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed) or [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object).

[`X-Permitted-Cross-Domain-Policies`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies "This is a link to an unwritten page")

Specifies if a cross-domain policy file (`crossdomain.xml`) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the [Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). See the [Cross-domain Policy File Specification](https://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html) for more information.

[`X-Powered-By`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Powered-By "This is a link to an unwritten page")

May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.

[`X-XSS-Protection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

Enables cross-site scripting filtering.

### [HTTP Public Key Pinning (HPKP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#http_public_key_pinning_glossaryhpkp "Permalink to HTTP Public Key Pinning (HPKP)")

[HTTP Public Key Pinning](https://developer.mozilla.org/en-US/docs/Glossary/HPKP) has been deprecated and removed in favor of Certificate Transparency and [`Expect-CT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT).

[`Public-Key-Pins`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins)

Associates a specific cryptographic public key with a certain web server to decrease the risk of [MITM](https://developer.mozilla.org/en-US/docs/Glossary/MitM) attacks with forged certificates.

[`Public-Key-Pins-Report-Only`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins-Report-Only)

Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.

[Fetch metadata request headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header) provides information about the context from which the request originated. This allows a server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

[`Sec-Fetch-Site`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site)

It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values `cross-site`, `same-origin`, `same-site`, and `none`.

[`Sec-Fetch-Mode`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode)

It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values `cors`, `navigate`, `no-cors`, `same-origin`, and `websocket`.

[`Sec-Fetch-User`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User)

It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are `?0` for false and `?1` for true.

[`Sec-Fetch-Dest`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)

It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, and `xslt`.

## [Server-sent events](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#server-sent_events "Permalink to Server-sent events")

[`Last-Event-ID`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Event-ID "This is a link to an unwritten page")

...

[`NEL`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL)

Defines a mechanism that enables developers to declare a network error reporting policy.

[`Ping-From`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Ping-From "This is a link to an unwritten page")

...

[`Ping-To`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Ping-To "This is a link to an unwritten page")

...

[`Report-To`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Report-To "This is a link to an unwritten page")

Used to specify a server endpoint for the browser to send warning and error reports to.

## [Transfer coding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#transfer_coding "Permalink to Transfer coding")

[`Transfer-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)

Specifies the form of encoding used to safely transfer the resource to the user.

[`TE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE)

Specifies the transfer encodings the user agent is willing to accept.

[`Trailer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)

Allows the sender to include additional fields at the end of chunked message.

## [WebSockets](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#websockets "Permalink to WebSockets")

## [Other](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#other "Permalink to Other")

[`Accept-Push-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Push-Policy "This is a link to an unwritten page")

A client can express the desired push policy for a request by sending an `[Accept-Push-Policy](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1)` header field in the request.

[`Accept-Signature`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Signature "This is a link to an unwritten page")

A client can send the `[Accept-Signature](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7)` header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.

[`Alt-Svc`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc)

Used to list alternate ways to reach this service.

[`Date`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date)

Contains the date and time at which the message was originated.

[`Early-Data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data)

Indicates that the request has been conveyed in TLS early data.

[`Large-Allocation`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation)

Tells the browser that the page being loaded is going to want to perform a large allocation.

[`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link)

The `[Link](https://datatracker.ietf.org/doc/html/rfc5988#section-5)` entity-header field provides a means for serialising one or more links in HTTP headers. It is semantically equivalent to the HTML [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element.

[`Push-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Push-Policy "This is a link to an unwritten page")

A `[Push-Policy](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2)` defines the server behavior regarding push when processing a request.

[`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)

Indicates how long the user agent should wait before making a follow-up request.

[`Signature`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Signature "This is a link to an unwritten page")

The `[Signature](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1)` header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.

[`Signed-Headers`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Signed-Headers "This is a link to an unwritten page")

The `[Signed-Headers](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2)` header field identifies an ordered list of response header fields to include in a signature.

[`Server-Timing`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing)

Communicates one or more metrics and descriptions for the given request-response cycle.

[`Service-Worker-Allowed`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Allowed "This is a link to an unwritten page")

Used to remove the [path restriction](https://w3c.github.io/ServiceWorker/#path-restriction) by including this header [in the response of the Service Worker script](https://w3c.github.io/ServiceWorker/#service-worker-script-response).

[`SourceMap`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap)

Links generated code to a [source map](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map).

[`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)

The relevant RFC document for the [Upgrade header field is RFC 7230, section 6.7](https://datatracker.ietf.org/doc/html/rfc7230#section-6.7). The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field [please see section 6.1 of the aforementioned RFC](https://datatracker.ietf.org/doc/html/rfc7230#section-6.1).

[`X-DNS-Prefetch-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)

Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

[`X-Firefox-Spdy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Firefox-Spdy "This is a link to an unwritten page")

...

[`X-Pingback`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Pingback "This is a link to an unwritten page")

...

[`X-Requested-With`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Requested-With "This is a link to an unwritten page")

...

[`X-Robots-Tag`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Robots-Tag "This is a link to an unwritten page")

The `[X-Robots-Tag](https://developers.google.com/search/reference/robots_meta_tag#xrobotstag)` HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to `<meta name="robots" content="...">`.

[`X-UA-Compatible`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-UA-Compatible "This is a link to an unwritten page")

Used by Internet Explorer to signal which document mode to use.

## [Contributing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#contributing "Permalink to Contributing")

## [See also](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#see_also "Permalink to See also")

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
Before a software is released to the market for commercial use, it undergoes rigorous testing. Software testing is classified into four different levels, namely Unit Testing, Integration Testing, System Testing and Acceptance Testing. These four levels of software testing are designed to detect errors, evaluate the correctness of behavior and performance of the software application. Through this “What is Integration Testing?” article, we will learn mainly about the second level of testing, Integration Testing. If you are new to software testing, be sure to also read the [Beginners’ Guide for Software Testing](https://www.edureka.co/blog/what-is-software-testing/).

Let’s take a look at topics covered in this article:

- [Levels of Software Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#SoftwareTestingLevels)
- [What is Integration Testing?](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTesting)
- [Advantages of Integration Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingAdvantages)
- [How is Integration Testing Done?](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingProcess)
- [Types of Integration Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingTypes)
- [Challenges of Integration Testing](https://www.edureka.co/blog/what-is-integration-testing-a-simple-guide-on-how-to-perform-integration-testing/#IntegrationTestingChallenges)

## **Levels of Software Testing**

[_Software Testing_](https://www.edureka.co/blog/software-testing-tutorial/) _is a phase within the software development cycle in which business-critical software is verified for correctness, quality, and performance._

There are four fundamental levels within software testing, each examining the software functionality from a unique vantage point within the development process. The four levels of software testing are as shown in the image below.

![Levels of Software Testing - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556012641/uploads/2019/04/Levels-of-Software-Testing-What-is-Unit-Testing-Edureka-1-300x245.png)

This article explains integration testing, the first level of software testing in detail.

## **What is Integration Testing?**

_**Integration Testing** is a level of software testing where individual units are combined and tested to verify if they are working as they intend to when integrated. The main aim here is to test the interface between the modules._

Just unit testing is not enough for multiple reasons like:

- A module/unit is usually designed by an individual software developer whose techniques and programming logic differs from that of other programmers
- Often at the time of module development, user requirements change and these new requirements may not be unit tested. This instigates issues
- Issues like data formatting, error trapping, hardware interfaces, and third-party service interfaces are sometimes missed during unit testing

So, no matter how efficiently each module/unit is running, if they aren’t properly integrated, it will affect the functionality of the software program. As a solution integration testing is implemented. This article ‘What is Integration Testing?’ further lists out the advantages of integration testing.

## **Advantages of Integration Testing**

Performing integration testing offers a lot of benefits. Some of them are listed below:

- It makes sure that integrated modules work properly as intended
- The tester can start testing once the modules to be tested are available
- It detects errors related to the interface between modules
- Helps modules interact with API’s and other third-party tools
- Typically covers a large volume of the system, so more efficient
- Increases the test coverage and improves the reliability of tests

Software engineers perform integration testing. Sometimes companies employ independent testers to do it for them. But, how is integration testing carried out in reality? Is it similar to other testing processes? Let’s check it out the next part of this ‘What is Integration Testing?’ article.

## **How is Integration Testing Done?**

The meaning of integration is quite straightforward – Combine the unit tested module one by one and test the functionality of the combined unit. Normally, integration testing is carried out after [unit testing](https://www.edureka.co/blog/what-is-unit-testing). Once all the individual units are created and tested, we start combining those tested modules and start performing the integrated testing. The main goal here is to test the interfaces between the units/modules. Here are a few simple steps that will get you started with integration testing:

[](https://www.edureka.co/selenium-certification-training)

- Prepare the test integration plan
- Decide on the type of integration testing approach
- Design [test cases](https://www.edureka.co/blog/test-case-in-software-testing/), test scenarios and test scripts accordingly
- Deploy the chosen modules together and get the integration tests running
- Track the defects and record the test results of tests
- Repeat the above steps until the complete system is tested

Remember that priority must be given to the integrated interface links between modules or units. As you can see, in the second step you need to decide on the type of integration testing approach. Moving ahead in this ‘What is Integration Testing?’ article, let us learn how these testing strategies are executed, their benefits, and drawbacks.

## **Types of Integration Testing**

Before we start discussing the types of integration testing available, we need to understand the concept of stubs and drivers. While testing, sometimes we face a situation where some of the modules are still under development. These modules for testing purpose are replaced with some dummy programs. These dummy programs are called stubs and drivers.

Imagine, we have an application with two modules i.e, **_Login Page(Module A)_** and **_Admin Page(Module B)_**.

**Case1:** You have to test the Login Page which is developed and sent to the testing team. Login Page is dependent on Admin Page. But the Admin Page is not ready yet. To overcome this situation developers write a dummy program which acts as an Admin Page. This dummy program is Stub. Stubs are ‘Called Programs’.

**Case2:** You have to test Admin Page but the Login Page is not ready yet. To overcome this situation developers write a dummy program which acts like the Login Page. This dummy program is Driver. Drivers are ‘Calling programs’.

![Stubs & Drivers - What is Integration Testing - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Stubs-Drivers-528x237.png)

Now that you are aware of these necessary concepts, let’s check out different types of integration tests. Integration testing types are categorized into different groups that are listed below:

![Types of Integration Testing - - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Types-of-Integration-Testing-528x262.png)

### **Big Bang Integration Testing**

In this testing approach, once all the modules are developed and tested individually, they are integrated once and tested together at once. The only advantage of this type of testing is that it is very much suitable for smaller systems.

![Big Bang Approach - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Big-Bang-Approach-528x164.png)

**Disadvantages**

- Fault localization is tough
- A lot of delay before testing
- Critical issues are not resolved on priority
- Difficult to find the root cause of problems

### **Incremental Integration Testing**

Incremental Testing is performed by connecting two or more modules together that are logically related. Later more modules are added and tested for proper functionality. This is done until all the modules are integrated and tested successfully. It’s further divided into Top-Down Approach, Bottom-Up Approach, and Sandwich Approach.

### Software Testing Training

### **Top-Down Integration Testing**

The top-down approach starts by testing the top-most modules and gradually moving down to the lowest set of modules one-by-one. Testing takes place from top to down following the control flow of the software system. As there is a possibility that the lower level modules might not have been developed while top modules are tested, we use stubs instead of those not ready modules. For simple applications, stubs would simply return the control to their superior modules. For complex applications, they would simulate the full range of responses.

![Top-Down Approach - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Top-Down-Approach-300x122.png)

**Advantages:**

- Fault localization is easier
- The test product is extremely consistent
- The stubs can be written in lesser time compared to drivers
- Critical modules are tested on priority
- Major design flaws are detected as early as possible

**Disadvantages**

- Requires several stubs
- Poor support for early release
- Basic functionality is tested at the end of the cycle

### **Bottom-Up Integration Testing**

The bottom-up approach starts with testing the lowest units of the application and gradually moving up one-by-one. Here testing takes place from the bottom of the control flow to upwards. Again it’s possible that the higher level modules might not have been developed by the time lower modules are tested. In such cases, we simulate the functionality of missing modules by using drivers. These drivers perform a range of tasks such as invoking module under test, pass test data or receive output data.

![Bottom Up Approach - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Bottom-Up-Approach-300x116.png)

**Advantages**

- Here development & testing can be done together so the product will be efficient
- Test conditions are much easy to create

**Disadvantages**

- Requires several drivers
- Data flow is tested very late
- Need for drivers complicates test data management
- Poor support for early release
- Key interfaces defects are detected late

### **Sandwich Integration Testing**

To overcome the limitations and to exploit the advantages of top-down and bottom-up approaches, a hybrid approach of integration testing is used. This approach is known as sandwich integration testing or mixed integration testing. Here, the system is viewed as three layers. Main target layer in the middle, another layer above the target layer, and the last layer below the target layer. The top-down approach is used on the layer from the top to the middle layer. The bottom-up approach is used on the layer from the bottom to middle. Big bang approach is used for modules in the middle.

![Sandwich Approach - - What is Integration Testing? - Edureka](https://www.edureka.co/blog/content/ver.1556540029/uploads/2019/05/Sandwich-Approach-300x160.png)

**Advantages**

- Top-Down and Bottom-Up testing techniques can be performed in parallel or one after the other
- Very useful for large enterprises and huge projects that further have several subprojects

**Disadvantages**

[](https://www.edureka.co/selenium-certification-training)

- The cost requirement is very high
- Cannot be used for smaller systems with huge interdependence between the modules
- Different skill sets are required for testers at different levels

These are the different approaches that you can use to perform integration testing based on your testing requirements. You should check which testing strategy can be adopted and prepare the test data and test plan accordingly. As useful as integration testing can be, it is not without its negative points. You need to understand the challenges that you might face when implementing it.

## **Challenges of Integration Testing**

- Managing integration testing is difficult sometimes because of various factors like database, platforms, environment, etc
- Integrating a new system to a legacy system or integrating two legacy system needs a lot of testing efforts and changes
- Less compatibility between the two systems developed by two different companies is a challenge for programmers
- There are way too many different paths and permutations to apply for testing the integrated systems

Despite these challenges, integration testing is very useful in the software testing process. It is an important part of the testing cycle that makes it easy finding defects when two or more units are integrated. With this, we have reached the end of the ‘What is Integration Testing?’ article. Hope the things that you have learned here today will help you as you head out on your software testing journey.

_If you found this ‘What is Integration Testing?’_ _article relevant,_ _check out the _live-online **[Selenium Certification Training](https://www.edureka.co/selenium-certification-training)**\_\_ \_by Edureka, a trusted online learning company with a network of more than 250,000 satisfied learners spread across the globe._

_Got a question for us? Please mention it in the comments section of this ‘\_What is Integration Testing?_’ article and we will get back to you.\_
I've got this search method where I want to redirect the user after searching. The issue is that it does not do anything and I don't know why. this.props.history IS defined but the "location" property of the object "history" does not seem to change accordingly to what i put in the parameters of the push method ('./connexion') ... The search method IS binded and I use `export default withRouter(SearchBar);` to access the history via props

```js
 search(event) {
    if (this.state.location === null) {
        this.setState({ geosuggestId: 'geosuggest-input-alert' });
    } else if (this.state.subjects.length === 0) {
        this.setState({ matieresButtonId: 'matieres-button-alert' });
    } else {
        console.log(this.props.parent);
        if (this.props.parent === 'Homepage') {
            console.log(this.props.history);
            this.props.history.push('/connexion');
        }
    }
}
```

Full file :

```js
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Geosuggest from "react-geosuggest";
import SearchBySubjectsModal from "./modals/search_by_subjects_modal";
import { withRouter } from "react-router-dom";

/**
 * Search bar for parent to search for profs
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      subjects: [],
      level: "Collège",
      matieresButtonId: "matieres-button",
      geosuggestId: "geosuggest-input",
    };

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    this.setSubjects = this.setSubjects.bind(this);
    this.search = this.search.bind(this);
  }

  /**
   * if the state for subjects and location is not null, then stop fields warning
   */
  componentDidUpdate() {
    if (this.state.subjects.length > 0) {
      if (this.state.matieresButtonId !== "matieres-button")
        this.setState({ matieresButtonId: "matieres-button" });
    }
    if (this.state.location !== null) {
      if (this.state.geosuggestId !== "geosuggest-input")
        this.setState({ geosuggestId: "geosuggest-input" });
    }
  }

  /**
   * set the state when choosing a location
   * @param {*} suggest
   */
  onSuggestSelect(suggest) {
    this.setState({ location: suggest });
  }

  /**
   * set the state when choosing subjects
   * @param {*} suggest
   */
  setSubjects(subjects, level) {
    this.setState({ subjects, level });
  }

  /**
   * Search method
   * Check if subjects or location are null (is so, show warnings)
   * If no warnings, perform search and redirect to search page
   * @param {*} event
   */
  search(event) {
    if (this.state.location === null) {
      this.setState({ geosuggestId: "geosuggest-input-alert" });
    } else if (this.state.subjects.length === 0) {
      this.setState({ matieresButtonId: "matieres-button-alert" });
    } else {
      console.log(this.props.parent);
      if (this.props.parent === "Homepage") {
        console.log(this.props.history);
        this.props.history.push("/connexion");
      }
    }
  }

  /**
   * Uses GeoSuggest (google places api) to choose a town
   * Uses Search By Subject modal to choose subjects
   */
  render() {
    return (
      <div className="container" id="search-bar">
        <div className="text-center">
          <form action="">
            <div className="row">
              <div className="col">
                <Geosuggest
                  queryDelay={150}
                  autoActivateFirstSuggest={true}
                  inputClassName={this.state.geosuggestId}
                  placeholder="Où ?"
                  country="fr"
                  onSuggestSelect={this.onSuggestSelect}
                />
              </div>
              <div className="col">
                <Link to="/">
                  <button
                    data-toggle="modal"
                    data-target=".choose-subject-modal"
                    className="btn clickable"
                    id={this.state.matieresButtonId}
                  >
                    <i className="fa fa-graduation-cap"></i> Matières ?
                  </button>
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <button
                    type="submit"
                    className="btn clickable"
                    id="search-button"
                    onClick={this.search}
                  >
                    <h5 id="search-btn-txt">
                      <i className="fa fa-search"></i> Trouver
                    </h5>
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <SearchBySubjectsModal
            search={this.search}
            location={this.state.location}
            setSubjects={this.setSubjects}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
```

Thank you for your answers :)

---

try use just: `hashHistory.push('/your/path');`

And in ur head: `import { hashHistory } from 'react-router';`
**👋 Say hi to me on** [**Twitter**](https://twitter.com/ryanchenkie)**!**

If you have a React app that needs to access data, perhaps your setup looks like this:

![React app and API diagram](https://miro.medium.com/max/2646/1*3zpErjl73Vn8KcVpwiSb8g.jpeg)

If that’s the case, there’s a decent chance that your API is secured somehow. Maybe you’re making authentication and authorization happen with [JSON Web Tokens](https://jwt.io/). If so, there’s also a decent chance you’re keeping your JWTs in local storage.

You should strongly consider **not** storing them there anymore.

[

![](https://miro.medium.com/max/60/1*RXDVUpgrgRKk74Ch3mJE7A.png?q=20)

![](https://miro.medium.com/max/2378/1*RXDVUpgrgRKk74Ch3mJE7A.png)

](https://reactsecurity.io/)

This question drums up a lot of controversy around the internet. Perhaps even more controversial is [whether you should be using JSON Web Tokens at all](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/). For many applications that are as simple as the diagram above, cookies and sessions would be a sufficient form of authentication and authorization and would offer a lot of benefits.

However, if you are in a position where you really need to use JWTs (or just really want to), there are some things you can do to harden the security posture for your React apps. In this article, we’ll look specifically at where JWTs should be stored.

## What are the options?

When moving your JWTs out of local storage, there are two options I recommend:

1.  Browser memory (React state)
2.  HttpOnly cookie

The first option is the more secure one because putting the JWT in a cookie doesn’t completely remove the risk of token theft. Even with an HttpOnly cookie, sophisticated attackers can still use XSS and CSRF to steal tokens or make requests on the user’s behalf.

However, the first option isn’t always very practical. That’s because storing a JWT in your React state will cause it to be lost any time the page is refreshed or closed and then opened again. This leads to a poor user experience––you don’t want your users to need to log back in every time they refresh the page.

If you’re using a third-party authentication service like [Auth0](https://auth0.com/) or [Okta](https://okta.com/), this isn’t a big deal because you can just call for another token behind the scenes (using a prompt=none call) to get a new token on refresh. However, this relies on a central auth server that is storing a session for your users.

The same isn’t true if you’re rolling your own auth. In that case, you most likely have a completely stateless backend that just signs tokens and validates them at your API. If you’re using refresh tokens, [Hasura has a great guide](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/) on how you can keep your access tokens in app state and refresh tokens in a cookie.

If you aren’t able to keep your JWTs in app state, then the second option still offers some benefits. Most notably, if your app has any XSS vulnerabilities, attackers will not be able to steal your users’ tokens as easily.

Putting your tokens in HttpOnly cookies is not a silver bullet though. Like any secure app, you need to effectively guard against both XSS and CSRF vulnerabilities. Ben Awad as a [great video](https://www.youtube.com/watch?v=M6N7gEZ-IUQ) going into more detail.

Let’s start by building out a small node API with [**express**](https://www.npmjs.com/package/express) and a small React app. We’ll start by having the app store tokens in local storage and we’ll then move them to an HttpOnly cookie.

While we’re using **express** for the backend in this tutorial, the same concepts map to pretty much any backend you might be using.

## Create the API

npm i express express-jwt jsonwebtoken cors

In the entry file for the **express** API, add two routes: one for getting a JWT and the other for serving up some food data.

```js
// server.jsconst express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');const app = express();app.use(cors());const jwtSecret = 'secret123';app.get('/jwt', (req, res) => {
 res.json({
 token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
 });
});app.use(jwt({ secret: jwtSecret, algorithms: \['HS256'\] }));const foods = \[
 { id: 1, description: 'burritos' },
 { id: 2, description: 'quesadillas' },
 { id: 3, description: 'churos' }
\];app.get('/foods', (req, res) => {
 res.json(foods);
});app.listen(3001);
console.log('App running on localhost:3001');
```

A few notes on the above code:

- The `jwtSecret` in this example is super weak. Don’t use this kind of secret in real life. Use a long, complex, unguessable secret key.
- The route to get a JWT isn’t checking any credentials, its just serving up a JWT when asked for one. This is just for simplicity. I assume you’ve got a proper mechanism for checking credentials (and if you don’t, you can check out [ReactSecurity](http://reactsecurity.io/) for guides on how to do so).

## Create the React App

Next, create a simple React app that makes calls for the food data.

npx create-react-app food-app

We’ll use **axios** for this example but the same concepts apply to things like the browser’s built-in Fetch API or any other HTTP library.

npm i axios

We can do all our work in `App.js` for this sample app.

```js
// App.jsimport React, { useState } from 'react';
import axios from 'axios';
import './App.css';const apiUrl = '[http://localhost:3001'](https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81http://localhost:4001');axios.interceptors.request.use(
 config => {
 const { origin } = new URL(config.url);
 const allowedOrigins = \[apiUrl\];
 const token = localStorage.getItem('token'); if (allowedOrigins.includes(origin)) {
 config.headers.authorization = \`Bearer ${token}\`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);function App() {
  const storedJwt = localStorage.getItem('token');
  const \[jwt, setJwt\] = useState(storedJwt || null);
  const \[foods, setFoods\] = useState(\[\]);
  const \[fetchError, setFetchError\] = useState(null);const getJwt = async () => {
    const { data } = await axios.get(\`${apiUrl}/jwt\`);
 localStorage.setItem('token', data.token);
 setJwt(data.token);
 };const getFoods = async () => {
 try {
 const { data } = await axios.get(\`${apiUrl}/foods\`);
 setFoods(data);
 setFetchError(null);
 } catch (err) {
 setFetchError(err.message);
 }
 };return (
 <>

 <section style={{ marginBottom: '10px' }}>
 <button onClick={() => getJwt()}>Get JWT</button>
 {jwt && (
 <pre>
 <code>{jwt}</code>
 </pre>
 )}
 </section>
 <section>
 <button onClick={() => getFoods()}>
 Get Foods
 </button>
 <ul>
 {foods.map((food, i) => (
 <li>{food.description}</li>
 ))}
 </ul>
 {fetchError && (
 <p style={{ color: 'red' }}>{fetchError}</p>
 )}
 </section>
 </>
 );
}export default App;
```

The app has two buttons: one for getting a JWT and the other for getting a list of foods.

If we make a call for the foods before getting a JWT, we get an error.

![](https://miro.medium.com/max/3468/1*tj5waZ6e80bzt-M7Jmf9bw.png)

But if we call for our JWT first, it gets stored in local storage and in our local component state. We are then able to make the request.

![](https://miro.medium.com/max/3468/1*5BZ92LudTy6U-dQyObo4yg.png)

The token is being attached to the request by setting up an HTTP-interceptor with **axios**. It looks for whether the outgoing request is to an origin that we have pre-defined as being allowed and then attaches the user’s JWT to the `Authorization` header if so.

The first step to switching out to use cookies is to have our API set a cookie in the user’s browser after they successfully log in. Cookies get set in the browser if the response to an HTTP call contains a `Set-Cookie` header. This header will have a string of cookie names and values, plus any additional settings for the cookies (like whether they should be HttpOnly or not).

In your express API, start by installing `cookie-parser`. It’s an express middleware that allows us to parse cookies on incoming requests. This will help us later when we need to read the cookie value to grant access to the `foods` route.

npm i cookie-parser

Next, modify the route that sends back a JWT to set a cookie with a name of `token` and a value of the JWT itself.

// server.jsapp.get('/jwt', (req, res) => {  
 const token = jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret); res.cookie('token', token, { httpOnly: true }); res.json({ token });  
});

The `httpOnly: true` setting means that the cookie can’t be read using JavaScript but can still be sent back to the server in HTTP requests. Without this setting, an XSS attack could use `document.cookie` to get a list of stored cookies and their values.

## Use an HTTP Proxy

So far, the React app has been running on port `3000` and the API on `3001`. This is fine if you’re sending a JWT in the `Authorization` header of your API calls, but since we now want to send it in a cookie, we need to run the two apps on the same port. This is because cookies can only go to origins from which they came.

Since we used **create-react-app**, we can do this pretty easily in development mode. We just need to set the API URL as a `proxy` value in our `package.json` file.

{  
 ...  
 "proxy": "http://localhost:3001"  
}

Now in the React app, we can make API calls to a relative path instead of prefixing the calls with our API URL.

Refactor the call to the `/jwt` endpoint to no longer set the returned JWT in local storage. Instead, it will now be set as a cookie. We can keep the `setJwt` call so we can see the JWT on the screen.

// App.jsconst getJwt = async () => {  
 const { data } = await axios.get(\`/jwt\`);  
 setJwt(data.token);  
}

Clicking “Get JWT” will now return the JWT in the HTTP response as per usual, but will also set it as a cookie in the user’s browser. If we inspect the cookies tab, we can see it in there as an HttpOnly cookie.

![](https://miro.medium.com/max/5344/1*whE2EmP-yBzlnI_c3KJcKQ.png)

## Validate the JWT from the Cookie

Now that the JWT is in a cookie, it will automatically be sent to the API in any calls we make to it. This is how the browser behaves by default. But again, we need to have our front end and backend served over the same origin to make this happen.

The JWT validation middleware supplied by **express-jwt** looks for a JWT on the `Authorization` header of requests by default. Let’s update it to use a custom `getToken` function which will look for the token on an incoming cookie instead.

```js
// server.jsapp.use(cookieParser());app.use(
 jwt({
 secret: 'secret123',
 getToken: req => req.cookies.token
 })
);
```

Not much needs to change in this case. Since we’re using **cookie-parser**, we can just read the token right off of the cookies on the incoming request.

We can now adjust our `getFoods` call to go straight to `/foods` since we’re using the proxy. In this call, we should now see that we’re no longer sending the JWT as an `Authorization` header. Instead, it will be in a cookie.

```js
// App.jsconst getFoods = async () => {
 try {
 const { data } = await axios.get(\`/foods\`);
 setFoods(data);
 setFetchError(null);
 } catch (err) {
 setFetchError(err.message);
 }
};
```

![](https://miro.medium.com/max/3676/1*6ZT4b6ylUrtyWQ2YW96ChA.png)

In the debate around where cookies should be stored, it’s often brought up that local storage is susceptible to cross-site scripting (XSS) attacks, whereas cookies are susceptible to cross-site request forgery attacks (CSRF) attacks.

A CSRF attack is one in which a user is duped into performing some action in an app that they are currently logged into. If an attacker is able to get the user to make a request to that app (often without the user knowing it), the browser will automatically send its cookies, and thus the attack will be very possible.

There are numerous ways to make this happen, such as having the user load an image with a `src` point to the app in question along with some params that can perform some action.

This is really only an issue when it comes to mutating data on the server. Attackers don’t have any way to see the results that a call to the server might provide, so a CSRF attack to retrieve data isn’t useful.

One of the most common ways to do CSRF protection is to use an anti-CSRF token. Let’s use a library called **csurf** to the **express** API to help.

npm i csurf

Now let’s set up the **csurf** middleware. We’ll want a new endpoint that accepts `GET` requests and sends back a new anti-CSRF token. This will later be called from our React app when it initializes.

// server.jsconst csrfProtection = csrf({  
 cookie: true  
});app.use(csrfProtection);app.get('/csrf-token', (req, res) => {  
 res.json({ csrfToken: req.csrfToken() });  
});

Let’s now add a new route that accepts `POST` requests so we can see the middleware in action. It won’t do anything for the existing `GET` request that we already have defined.

// server.jsapp.post('/foods', (req, res) => {  
 foods.push({  
 id: foods.length + 1,  
 description: 'new food'  
 });  
 res.json({  
 message: 'Food created!'  
 });  
});

And we can add a call from the React app.

```js
// App.jsfunction App() {
 const \[newFoodMessage, setNewFoodMessage\] = useState(null); const createFood = async () => {
 try {
 const { data } = await axios.post('/foods');
 setNewFoodMessage(data.message);
 setFetchError(null);
 } catch (err) {
 setFetchError(err.message);
 }
 }; return (
 <>
```

...

 <section>  
 <button onClick={() => createFood()}>  
 Create New Food  
 </button>  
 {newFoodMessage && <p>{newFoodMessage}</p>}  
 </section>  
 </>  
 );}

In its current state, a `POST` request to create a new food item will result in a `403 Forbidden` error. This is because on the server we are requiring that a anti-CSRF token be present in the request, but we are not providing one.

![](https://miro.medium.com/max/3220/1*wP3kaQfwS7Na0ipVdpTCeg.png)

There are a number of different ways we can get the CSRF token and set it for later use. One common method is to put it in a `meta` tag when the app loads. It can then be set as a header in later requests as needed.

Since we’re working from the root of our React app, we can send a request when the app loads and keep the resulting CSRF token in app state. It can then be set as a default header on `POST` request made by **axios**. This may or may not be suitable for your particular application.

// App.jsuseEffect(() => {  
 const getCsrfToken = async () => {  
 const { data } = await axios.get('/csrf-token');  
 axios.defaults.headers.post\['X-CSRF-Token'\] = data.csrfToken;  
 }; getCsrfToken();  
}, \[\]);

This isn’t the only way to set the CSRF token in our requests. We could also set it as a header in individual outgoing requests. This setup might not be ideal for your own app but should give you an idea of how you can make it happen.

![](https://miro.medium.com/max/3220/1*SlUUNRfh6vY-cDZPeAr9Ug.png)

There are some cookie options other than HttpOnly that are useful for security. These include Max-Age (when the cookie expires) and Secure (connection needs to be over HTTPS).

In general, the cookie should expire when the JWT expires. This is a calculation that can be added easily in your backend when you set the cookie.

It’s a good idea to set the cookie to be Secure. You don’t want your JWTs going over the wire in the clear and this setting will allow you to be sure they don’t.

If you have any XSS vulnerabilities in your app, you will be susceptible to token theft no matter where you store them. At the end of the day, keeping your JWT in a cookie can carry the same dangers as storing them in local storage. That means you really need to be sure that your app is free of XSS vulnerabilities in the first place.

That being said, many people prefer to use cookies for JWT storage as theft does arguably become somewhat more difficult.

If you can, store your JWTs in your app state and refresh them either through a central auth server or using a refresh token in a cookie, as outlined in [this post](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/) by Hasura.

## A Quick and Easy Guide for Implementing Redirect in your React App

[![Alex Farmer](https://miro.medium.com/fit/c/56/56/0*bkfIF45OQOy7Q8X2)](https://medium.com/@alexfarmer?source=post_page-----46198938eedc--------------------------------)

![](https://miro.medium.com/max/1280/1*HrNReUbetzdphB-2Ph_ElQ.gif)

When you try to access a restricted path

I just finished up my mod 4 project at Flatiron’s coding bootcamp (almost done!) and I was required to include at least two routes in my single page application. React Router is cool because it allows you to _programmatically navigate_ your single page app. In my case, one of my routes would only be accessible if a user was logged in, so if someone tried to access their `/profile` route without a successful login, they needed to be redirected back to the home page. How can you view your profile if you’re not logged in? That wouldn’t make any sense.

Your situation may be different, but here are the basics.

Turns out, `<Redirect />` is built into React Router DOM, so all you need to do is import it at the top of your file. If you haven’t already, you’ll need to [install react-router-dom using npm](https://www.npmjs.com/package/react-router-dom). Once that’s ready to go, import redirect in the relevant file/component as such:

**import** { Redirect } **from** "react-router-dom";

There are many components you can import from react-router-dom, so make sure you import whatever else you might need in your file as well. For example:

**import** { Redirect, Route, NavLink } **from** "react-router-dom";

There are lots of different cases in which you might want to redirect a user on your page. In my case, I needed to redirect a user back to the home page if they attempted to access the `/profile` route without being logged in.

How would we check that? Well, if using token authorization, we could simply check that there was a token value other than _null._ We could also check that a `currentUser` exists in state, assuming it was stored in state to begin with.

## What other conditions might require us to redirect a user? To name a few…

- A user is attempting to access a page that is restricted
- A user is attempting to access a page that no longer exists
- An incorrect path was typed into the address bar (common typo)
- A successful login has occurred and we need to navigate off of the login screen and onto the home page or dashboard

## When do we use redirects?

In general, if we need to change our URL path without the user intentionally clicking on a link to that path, we may need to use a redirect. In many cases, we will want to do this without the page reloading. Redirects are complimentary to our Router setup, but cannot stand on their own (the program needs to know what it’s rendering when it redirects!).

For this, you can use ternary operators or switch cases. To refresh on ternaries:

thingThatReturnsTrueOrFalse ? thingThatHappensIfTrue : thingIfFalse

You will need this ternary to sit somewhere in the _rendered_ part of the component. I beat my head against a brick wall getting redirects to work before I realized this. It’s not enough to simply return a redirect somewhere in your code, it needs to actually _render_.

First, let’s address how a redirect component looks.

<**Redirect** **to**\="/path-you-want-to-redirect-to" />

Pretty simple.

Here’s an example of how a component with a conditional redirect might look:

const **profilePage** = (props) => {  
 return(<div>  
 _{\*/ bits of JSX \*/}  
 {\*/ some React component \*/}  
 {\*/ more bits of JSX \*/}  
 {\*/ maybe like a form or something idk \*/}_ { **props**.**loggedIn** ? **null** : <**Redirect** **to**\="/login" /> }

 </div>)  
}

In the above example, `props.loggedIn` would be a **boolean value** handed down as props to the component from the parent’s state. To translate that ternary into English: “If we are logged in, give us null (or nothing), but if we are not logged in then return a redirect component that takes us to the login page’s path.”

Redirects allow you to redirect _from_ a certain that may no longer exist. Consider the possibility of a site changing its structure such that anyone who has the old path saved to their favorites will suddenly run into an error. Now, we could just let these people figure it out and navigate to the home page, but that’s not the best UX in the world. Here’s how we might catch those scenarios:

<Switch>  
  <Redirect **from**\='/users/:id' **to**\='/users/profile/:id'/>  
  <Route **path**\='/users/profile/:id'>  
    <Profile />  
  </Route>  
</Switch>

Redirect allows you to define where to redirect _from_ as well as where to redirect _to_. This feature may come in handy in your projects.

- Redirects are a part of react-router-dom and must be imported into the file you plan on using a redirect in
- Redirects are react components which must be rendered in order to work
- The basic syntax of a redirect is: `<Redirect to="/path" />`
- To redirect in certain conditions, use a ternary operator or switch case.

![](https://miro.medium.com/max/2560/1*GHb1kk0dPjm64v-A1buVjA.jpeg)
May 20th, 2019

Parts of this series:

1.  Spying on Functions and Changing their Implementation
2.  [Taking Advantage of the Module System](https://silvenon.com/blog/mocking-with-jest/modules/)

---

Jest has **lots** of mocking features. For a long time I’ve been using only a small subset of them, but with experience I was able to gain a deeper understanding of these features. Now I want to share that knowledge with you because it has been incredibly useful to me.

This can be an intimidating area for beginners, especially because at the time of this writing the Jest documentation on this subject is a bit spotty. Add to that the fact that the term “mock” is ambiguous; it can refer to functions, modules, servers etc. I would like to help you get familiar not only with mocking features in Jest, but these testing concepts in general.

---

Mock functions, are powerful and have many purposes—we can create new dummy functions, spy on existing functions, temporarily change their implementation, pass them around… usually in order to eventually make assertions on them, directly or indirectly.

## Spying

Let’s start with the most basic example. I assume you already know [how to set up Jest](https://jestjs.io/docs/en/getting-started)? Good. Let’s open a test file:

```
const fn = jest.fn()
```

This is a dummy function. We can call it, but nothing seems to happen.

```
fn()
fn({ meaningOfLife: 42 })
console.log(fn())
```

However, if we inspect the function itself, we’ll notice that it’s no ordinary function:

```
console.log(fn)





```

For example, let’s inspect its `mock` property:

```
console.log(fn.mock.calls)

```

Looks familiar? It appears that the mock function has been recording our calls! Don’t panic, not phone calls, just function calls. This means that we can make assertions on this function, but instead of making assertions on the `mock` property directly, we can use special Jest matchers for mock functions:

```
test('mock function has been called with the meaning of life', () => {
  const fn = jest.fn()
  fn(42)
  expect(fn).toHaveBeenCalledWith(42)
})
```

But this test is silly, we already know that the function will be called with `42` because _we_ called it within the test itself. Mock functions are mostly useful for passing to the source code that we’re testing, then we expect that code to call it in a certain way. For example:

```
const MontyPython = require('./monty-python')




describe('MontyPython', () => {
  describe('callFnWithTheMeaningOfLife', () => {
    it('calls given function with the meaning of life', () => {
      const montyPython = new MontyPython()
      const fn = jest.fn()
      montyPython.callFnWithTheMeaningOfLife(fn)
      expect(fn).toHaveBeenCalledWith(42)
    })
  })
})
```

But what if meaning of life isn’t 42? Life is never that simple, things often don’t happen for a reason, they’re just random, and it’s on us to try to make the best of it. ❤️

Now that we had this life-changing epiphany, let’s create a new method which returns a more honest answer, i.e. `Math.random()`:

```
module.exports = class MontyPython {
  getTheMeaningOfLife() {
    return Math.random() * 100
  }
}
```

That’s more like it. In real life you rarely get a clean 42, usually you get something like 19.513179535940452 and you have to roll with it.

Now let’s adjust our test. Now we want to check whether `Math.random` has been called. We can’t just replace `Math.random` with a mock function because we want to preserve its functionality, instead we can spy on it using `jest.spyOn`, which wraps it in a mock function and returns it so we can track it:

```
const MontyPython = require('./monty-python')

describe('MontyPython', () => {
  describe('getTheMeaningOfLife', () => {
    it('reveals the cold hard truth about life', () => {
      const montyPython = new MontyPython()
      const mathRandomSpy = jest.spyOn(Math, 'random')
      montyPython.getTheMeaningOfLife()
      expect(mathRandomSpy).toHaveBeenCalled()
      mathRandomSpy.restore()
    })
  })
})
```

Here `Math.random` does its thing, we’re not changing its functionality, we’re only temporarily wrapping it in a mock function in order to make assertions on it. Then at the end of the test we’re removing the wrapper because we no longer need it.

## Changing implementation

Keep in mind that testing is about _purpose_, we’ll usually want to test overall functionality, not details like whether built-ins like `Math.random` were called. To do this we’ll probably want to change `Math.random`’s behavior in order to be able to test a larger piece of functionality. This is where the `mockImplementation` method comes in.

Let’s say that the head of the [Ministry of Silly Walks](https://youtu.be/KCrQu0VTUBs) wanted to add a method for plotting their walking pattern as an array of steps using left and right legs:

```
module.exports = class MontyPython {
  getSillyWalk(numberOfSteps) {
    const steps = []
    for (let i = 0; i < numberOfSteps; i++) {
      if (steps[steps.length - 1] !== 'left') {
        steps.push('left')
      } else {
        steps.push('right')
      }
    }

    return steps.sort(() => 0.5 - Math.random())
  }
}
```

We would like to test this walk using Jest snapshots, but since it’s random our tests will fail. We can’t test whether the generated walk is in fact silly, we can only test whether it’s technically a walk, meaning that it consists of a series of steps for each leg. To do this we’ll alter the behavior of `Math.random` using the `mockImplementation` method to always return `0.5` in order to prevent shuffling the array (if the `sort` method returns `0`, order is preserved):

```
const MontyPython = require('./monty-python')

describe('MontyPython', () => {
  describe('getSillyWalk', () => {
    it('returns a series of steps for each leg', () => {
      const montyPython = new MontyPython()
      const mathRandomSpy = jest.spyOn(Math, 'random')
      mathRandomSpy.mockImplementation(() => 0.5)
      expect(montyPython.getSillyWalk(6)).toMatchSnapshot()
      mathRandomSpy.restore()
    })
  })
})
```

Now when we run our tests, the following deterministic snapshot will be saved:

```
exports[`MontyPython getSillyWalk returns a series of steps for each leg 1`] = `
Array [
  "left",
  "right",
  "left",
  "right",
  "left",
  "right",
]
`;
```

Notice that we didn’t make assertions on the spy itself, we just temporarily altered `Math.random`’s behavior so we can make a predictable assertion on the code that it was _affecting_.

Now, since our codebase is split across files, let’s start exploring mocking in the context of _modules_.

## Conclusion

It took me a long time to understand the nuances of these features, how to get what I want and how to even _know_ what I want. I encourage you to scroll through the [`expect` reference](https://jestjs.io/docs/en/expect) to learn more about these features and how they compare to the ones that I didn’t cover in this post. If you catch yourself making assertions on the `mock` property directly, try to see if there’s already a built-in matcher for the assertion you’re looking for, maybe also combining them with utilities like [`expect.objectContaining`](https://jestjs.io/docs/en/expect#expectobjectcontainingobject). This has the benefit of being more readable and having a better error message if your test fails.

I hope that this post brought you some clarity on the subject, have fun building better tests!

---

What about modules? See how you can mock modules on different levels by [taking advantage of the module system](https://silvenon.com/blog/mocking-with-jest/modules).

---

Sep 18, 2019

The [`axios.create()` function](https://github.com/axios/axios#creating-an-instance) creates a new Axios _instance_. When you `require('axios')`, you get back an the default Axios instance. The reason why you would create an instance is to set custom defaults for your application.

For example, suppose you wanted to add a [timeout to all your Axios requests](https://medium.com/@masnun/handling-timeout-in-axios-479269d83c68). You could create a new Axios instance with a default timeout of 1000 milliseconds:

```
const axios = require('axios');
const instance = axios.create({ timeout: 1000 });



axios.constructor === instance.constructor;



await instance.get('https://httpbin.org/get?hello=world');
```

Another common use case is [setting the `baseURL` for all requests](https://github.com/axios/axios#axioscreateconfig). This is convenient so you don't have to type out the absolute URL every time.

```
const axios = require('axios').create({
  baseURL: 'https://httpbin.org'
});


const res = await axios.get('/get?hello=world');
```

---

## More Axios Tutorials

- [How to Use JSON with Axios](https://masteringjs.io/tutorials/axios/json)
- [How to Use the User-Agent Header in Axios](https://masteringjs.io/tutorials/axios/user-agent)
- [Axios Multipart Form Data](https://masteringjs.io/tutorials/axios/axios-multi-form-data)
- [How to use Axios' create() Method with POST Requests](https://masteringjs.io/tutorials/axios/create-post)
- [Axios Response \`data\` Property](https://masteringjs.io/tutorials/axios/data)
- [Calling Axios as a Function](https://masteringjs.io/tutorials/axios/call)
- [How to Use axios.all() to Make Concurrent HTTP Requests](https://masteringjs.io/tutorials/axios/all)

## What is Unit Testing?

**UNIT TESTING** is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.

In this tutorial, you will learn-

- [Why Unit Testing?](https://www.guru99.com/unit-testing-guide.html#2)
- [How to do Unit Testing](https://www.guru99.com/unit-testing-guide.html#3)
- [Unit Testing Techniques](https://www.guru99.com/unit-testing-guide.html#4)
- [Unit Testing Tools](https://www.guru99.com/unit-testing-guide.html#5)
- [Test Driven Development (TDD) & Unit Testing](https://www.guru99.com/unit-testing-guide.html#6)
- [Unit Testing Myth](https://www.guru99.com/unit-testing-guide.html#7)
- [Unit Testing Advantage](https://www.guru99.com/unit-testing-guide.html#8)
- [Unit Testing Disadvantages](https://www.guru99.com/unit-testing-guide.html#9)
- [Unit Testing Best Practices](https://www.guru99.com/unit-testing-guide.html#10)

## Why Unit Testing?

**Unit Testing** is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost [Defect](https://www.guru99.com/defect-management-process.html) fixing during [System Testing](https://www.guru99.com/system-testing.html), [Integration Testing](https://www.guru99.com/integration-testing.html) and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.

Here, are the key reasons to perform unit testing in software engineering:

[![Unit Testing](https://www.guru99.com/images/1/Unit-Testing.png)](https://www.guru99.com/images/1/Unit-Testing.png)

Unit Testing Levels

1.  Unit tests help to fix bugs early in the development cycle and save costs.
2.  It helps the developers to understand the testing code base and enables them to make changes quickly
3.  Good unit tests serve as project documentation
4.  Unit tests help with code re-use. Migrate both your code **and** your tests to your new project. Tweak the code until the tests run again.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lj5nnGa_DIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

## How to do Unit Testing

In order **to do Unit Testing**, developers write a section of code to test a specific function in software application. Developers can also isolate this function to test more rigorously which reveals unnecessary dependencies between function being tested and other units so the dependencies can be eliminated. Developers generally use [UnitTest framework](https://www.guru99.com/test-automation-framework.html) to develop automated test cases for unit testing.

Unit Testing is of two types

- Manual
- Automated

Unit testing is commonly automated but may still be performed manually. Software Engineering does not favor one over the other but automation is preferred. A manual approach to unit testing may employ a step-by-step instructional document.

Under the automated approach-

- A developer writes a section of code in the application just to test the function. They would later comment out and finally remove the test code when the application is deployed.
- A developer could also isolate the function to test it more rigorously. This is a more thorough unit testing practice that involves copy and paste of code to its own testing environment than its natural environment. **Isolating the code helps in revealing unnecessary dependencies between the code being tested and other units or data spaces** in the product. These dependencies can then be eliminated.
- A coder generally uses a UnitTest Framework to develop automated test cases. Using an automation framework, the developer codes criteria into the test to verify the correctness of the code. During execution of the test cases, the framework logs failing test cases. Many frameworks will also automatically flag and report, in summary, these [failed test cases](https://www.guru99.com/run-failed-test-cases-in-testng.html). Depending on the severity of a failure, the framework may halt subsequent testing.
- The workflow of Unit Testing is 1) Create Test Cases 2) Review/Rework 3) Baseline 4) Execute Test Cases.

## Unit Testing Techniques

The **Unit Testing Techniques** are mainly categorized into three parts which are Black box testing that involves testing of user interface along with input and output, White box testing that involves testing the functional behaviour of the software application and Gray box testing that is used to execute test suites, test methods, test cases and performing risk analysis.

Code coverage techniques used in Unit Testing are listed below:

- Statement Coverage
- Decision Coverage
- Branch Coverage
- Condition Coverage
- Finite State Machine Coverage

For more in refer [https://www.guru99.com/code-coverage.html](https://www.guru99.com/code-coverage.html)

## Unit Test Example: Mock Objects

Unit testing relies on mock objects being created to test sections of code that are not yet part of a complete application. Mock objects fill in for the missing parts of the program.

For example, you might have a function that needs variables or objects that are not created yet. In unit testing, those will be accounted for in the form of mock objects created solely for the purpose of the unit testing done on that section of code.

## Unit Testing Tools

There are several automated unit test software available to assist with unit testing. We will provide a few examples below:

1.  [Junit](https://www.guru99.com/junit-tutorial.html): Junit is a free to use testing tool used for Java programming language.  It provides assertions to identify test method. This tool test data first and then inserted in the piece of code.
2.  [NUnit](https://nunit.org/):  NUnit is widely used unit-testing framework use for all .net languages.  It is an open source tool which allows writing scripts manually. It supports data-driven tests which can run in parallel.
3.  [JMockit](http://jmockit.github.io/index.html):  JMockit is open source Unit testing tool.  It is a code coverage tool with line and path metrics. It allows mocking API with recording and verification syntax. This tool offers Line coverage, Path Coverage, and Data Coverage.
4.  [EMMA](http://emma.sourceforge.net/):  EMMA is an open-source toolkit for analyzing and reporting code written in Java language. Emma support coverage types like method, line, basic block. It is Java-based so it is without external library dependencies and can access the source code.
5.  [PHPUnit](https://phpunit.de/): PHPUnit is a unit testing tool for PHP programmer. It takes small portions of code which is called units and test each of them separately.  The tool also allows developers to use pre-define assertion methods to assert that a system behave in a certain manner.

Those are just a few of the available unit testing tools. There are lots more, especially for C languages and Java, but you are sure to find a unit testing tool for your programming needs regardless of the language you use.

## Test Driven Development (TDD) & Unit Testing

Unit testing in TDD involves an extensive use of testing frameworks. A unit test framework is used in order to create automated unit tests. Unit testing frameworks are not unique to TDD, but they are essential to it. Below we look at some of what TDD brings to the world of unit testing:

- Tests are written before the code
- Rely heavily on testing frameworks
- All classes in the applications are tested
- Quick and easy integration is made possible

## Unit Testing Myth

**Myth:** It requires time, and I am always overscheduled  
My code is rock solid! I do not need unit tests.

Myths by their very nature are false assumptions. These assumptions lead to a vicious cycle as follows -

[![UNIT Testing Myth](https://www.guru99.com/images/unit-testing.png "unit testing")](https://www.guru99.com/images/unit-testing.png)

Truth is Unit testing increase the speed of development.

Programmers think that Integration Testing will catch all errors and do not execute the unit test. Once units are integrated, very simple errors which could have very easily found and fixed in unit tested take a very long time to be traced and fixed.

## Unit Testing Advantage

- Developers looking to learn what functionality is provided by a unit and how to use it can look at the unit tests to gain a basic understanding of the unit API.
- Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.
- Due to the modular nature of the unit testing, we can test parts of the project without waiting for others to be completed.

## Unit Testing Disadvantages

- Unit testing can't be expected to catch every error in a program. It is not possible to evaluate all execution paths even in the most trivial programs
- Unit testing by its very nature focuses on a unit of code. Hence it can't catch integration errors or broad system level errors.

It's recommended unit testing be used in conjunction with other testing activities.

## Unit Testing Best Practices

- Unit Test cases should be independent. In case of any enhancements or change in requirements, unit test cases should not be affected.
- Test only one code at a time.
- Follow clear and consistent naming conventions for your unit tests
- In case of a change in code in any module, ensure there is a corresponding unit [Test Case](https://www.guru99.com/test-case.html) for the module, and the module passes the tests before changing the implementation
- Bugs identified during unit testing must be fixed before proceeding to the next phase in SDLC
- Adopt a "test as your code" approach. The more code you write without testing, the more paths you have to check for errors.

[![UNIT Testing Tutorial - Learn in 10 Minutes](https://www.guru99.com/images/unit_testing_best_practise.png "unit_testing_best_practise.")](https://www.guru99.com/images/unit_testing_best_practise.png)

**Summary**

- UNIT TESTING is defined as a type of software testing where individual units or components of a software are tested.
- As you can see, there can be a lot involved in unit testing. It can be complex or rather simple depending on the application being tested and the testing strategies, tools and philosophies used. Unit testing is always necessary on some level. That is a certainty.
  Join the DZone community and get the full member experience.

[Join For Free](https://dzone.com/static/registration.html)

A JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair.

## What Is the JSON Web Token Structure?

- Header
- Payload
- Signature

### Header

The header _typically_ consists of two parts: the type of token, which is JWT, and the hashing algorithm that is used, such as HMAC SHA256 or RSA.

For example:

Then, this JSON is **Base64Url-**encoded to form the first part of the JWT.

### Payload

The second part of the token is the payload, which contains the claims. Claims are statements about an entity.

- **Registered claims**: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims.  refer this for more info [Registered Claim Names](https://tools.ietf.org/html/rfc7519#section-4.1)
- **Public claims**: These can be defined at will by those using JWTs. But to avoid collisions they should be defined
- **Private claims**: These are the custom claims created to share information between parties that agree on using them and are neither _registered_ or _public_ claims.

An example payload is shown below:

### Signature

To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

Then, you have to put it all together. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.

![Encoded JWT](https://cdn.auth0.com/content/jwt/encoded-jwt3.png "Encoded JWT")

If you want to play with JWT and put these concepts into practice, you can use [jwt.io](http://jwt.io/).

Hope this helps! Let us know what you think in the comments below.

Topics:

jwt, token, auth, security, json, json web token, data, information, transport

Opinions expressed by DZone contributors are their own.

```
<!doctype html>
<html>
<head>
<meta charset="UTF-8"/>
<title>MDN Example</title>
<script>
function showNode (oNode) {
  document.documentElement.scrollTop = oNode.offsetTop;
  document.documentElement.scrollLeft = oNode.offsetLeft;
}

function showBookmark (sBookmark, bUseHash) {
  if (arguments.length === 1 || bUseHash) { location.hash = sBookmark; return; }
  var oBookmark = document.querySelector(sBookmark);
  if (oBookmark) { showNode(oBookmark); }
}
</script>
<style>
span.intLink {
    cursor: pointer;
    color: #0000ff;
    text-decoration: underline;
}
</style>
</head>

<body>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus. Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor, non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.</p>
<p>Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla mauris bibendum quis. Cras adipiscing ultricies fermentum. Praesent bibendum condimentum feugiat.</p>
<p id="myBookmark1">[&nbsp;<span class="intLink" onclick="showBookmark('#myBookmark2');">Go to bookmark #2</span>&nbsp;]</p>
<p>Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt tincidunt. Nulla vitae tempor nisl. Etiam congue, elit vitae egestas mollis, ipsum nisi malesuada turpis, a volutpat arcu arcu id risus.</p>
<p>Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.</p>
<p>Aenean viverra varius mauris, sed elementum lacus interdum non. Phasellus sit amet lectus vitae eros egestas pellentesque fermentum eget magna. Quisque mauris nisl, gravida vitae placerat et, condimentum id metus. Nulla eu est dictum dolor pulvinar volutpat. Pellentesque vitae sollicitudin nunc. Donec neque magna, lobortis id egestas nec, sodales quis lectus. Fusce cursus sollicitudin porta. Suspendisse ut tortor in mauris tincidunt rhoncus. Maecenas tincidunt fermentum facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
<p>Suspendisse turpis nisl, consectetur in lacinia ut, ornare vel mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lectus eu turpis vulputate cursus. Mauris interdum tincidunt erat id pharetra. Nullam in libero elit, sed consequat lectus. Morbi odio nisi, porta vitae molestie ut, gravida ut nunc. Ut non est dui, id ullamcorper orci. Praesent vel elementum felis. Maecenas ornare, dui quis auctor hendrerit, turpis sem ullamcorper odio, in auctor magna metus quis leo. Morbi at odio ante.</p>
<p>Curabitur est ipsum, porta ac viverra faucibus, eleifend sed eros. In sit amet vehicula tortor. Vestibulum viverra pellentesque erat a elementum. Integer commodo ultricies lorem, eget tincidunt risus viverra et. In enim turpis, porttitor ac ornare et, suscipit sit amet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel ultrices nibh. Sed commodo aliquam aliquam. Nulla euismod, odio ut eleifend mollis, nisi dui gravida nibh, vitae laoreet turpis purus id ipsum. Donec convallis, velit non scelerisque bibendum, diam nulla auctor nunc, vel dictum risus ipsum sit amet est. Praesent ut nibh sit amet nibh congue pulvinar. Suspendisse dictum porttitor tempor.</p>
<p>Vestibulum dignissim erat vitae lectus auctor ac bibendum eros semper. Integer aliquet, leo non ornare faucibus, risus arcu tristique dolor, a aliquet massa mauris quis arcu. In porttitor, lectus ac semper egestas, ligula magna laoreet libero, eu commodo mauris odio id ante. In hac habitasse platea dictumst. In pretium erat diam, nec consequat eros. Praesent augue mi, consequat sed porttitor at, volutpat vitae eros. Sed pretium pharetra dapibus. Donec auctor interdum erat, lacinia molestie nibh commodo ut. Maecenas vestibulum vulputate felis, ut ullamcorper arcu faucibus in. Curabitur id arcu est. In semper mollis lorem at pellentesque. Sed lectus nisl, vestibulum id scelerisque eu, feugiat et tortor. Pellentesque porttitor facilisis ultricies.</p>
<p id="myBookmark2">[&nbsp;<span class="intLink" onclick="showBookmark('#myBookmark1');">Go to bookmark #1</span> | <span class="intLink" onclick="showBookmark('#myBookmark1', false);">Go to bookmark #1 without using location.hash</span> | <span class="intLink" onclick="showBookmark('#myBookmark3');">Go to bookmark #3</span>&nbsp;]</p>
<p>Phasellus tempus fringilla nunc, eget sagittis orci molestie vel. Nulla sollicitudin diam non quam iaculis ac porta justo venenatis. Quisque tellus urna, molestie vitae egestas sit amet, suscipit sed sem. Quisque nec lorem eu velit faucibus tristique ut ut dolor. Cras eu tortor ut libero placerat venenatis ut ut massa. Sed quis libero augue, et consequat libero. Morbi rutrum augue sed turpis elementum sed luctus nisl molestie. Aenean vitae purus risus, a semper nisl. Pellentesque malesuada, est id sagittis consequat, libero mauris tincidunt tellus, eu sagittis arcu purus rutrum eros. Quisque eget eleifend mi. Duis pharetra mi ac eros mattis lacinia rutrum ipsum varius.</p>
<p>Fusce cursus pulvinar aliquam. Duis justo enim, ornare vitae elementum sed, porta a quam. Aliquam eu enim eu libero mollis tempus. Morbi ornare aliquam posuere. Proin faucibus luctus libero, sed ultrices lorem sagittis et. Vestibulum malesuada, ante nec molestie vehicula, quam diam mollis ipsum, rhoncus posuere mauris lectus in eros. Nullam feugiat ultrices augue, ac sodales sem mollis in.</p>
<p id="myBookmark3"><em>Here is the bookmark #3</em></p>
<p>Proin vitae sem non lorem pellentesque molestie. Nam tempus massa et turpis placerat sit amet sollicitudin orci sodales. Pellentesque enim enim, sagittis a lobortis ut, tempus sed arcu. Aliquam augue turpis, varius vel bibendum ut, aliquam at diam. Nam lobortis, dui eu hendrerit pellentesque, sem neque porttitor erat, non dapibus velit lectus in metus. Vestibulum sit amet felis enim. In quis est vitae nunc malesuada consequat nec nec sapien. Suspendisse aliquam massa placerat dui lacinia luctus sed vitae risus. Fusce tempus, neque id ultrices volutpat, mi urna auctor arcu, viverra semper libero sem vel enim. Mauris dictum, elit non placerat malesuada, libero elit euismod nibh, nec posuere massa arcu eu risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna velit, dapibus eget varius feugiat, pellentesque sit amet ligula. Maecenas nulla nisl, facilisis eu egestas scelerisque, mollis eget metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi sed congue mi.</p>
<p>Fusce metus velit, pharetra at vestibulum nec, facilisis porttitor mi. Curabitur ligula sapien, fermentum vel porttitor id, rutrum sit amet magna. Sed sit amet sollicitudin turpis. Aenean luctus rhoncus dolor, et pulvinar ante egestas et. Donec ac massa orci, quis dapibus augue. Vivamus consectetur auctor pellentesque. Praesent vestibulum tincidunt ante sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce purus metus, imperdiet vitae iaculis convallis, bibendum vitae turpis.</p>
<p>Fusce aliquet molestie dolor, in ornare dui sodales nec. In molestie sollicitudin felis a porta. Mauris nec orci sit amet orci blandit tristique congue nec nunc. Praesent et tellus sollicitudin mauris accumsan fringilla. Morbi sodales, justo eu sollicitudin lacinia, lectus sapien ullamcorper eros, quis molestie urna elit bibendum risus. Proin eget tincidunt quam. Nam luctus commodo mauris, eu posuere nunc luctus non. Nulla facilisi. Vivamus eget leo rhoncus quam accumsan fringilla. Aliquam sit amet lorem est. Nullam vel tellus nibh, id imperdiet orci. Integer egestas leo eu turpis blandit scelerisque.</p>
<p>Etiam in blandit tellus. Integer sed varius quam. Vestibulum dapibus mi gravida arcu viverra blandit. Praesent tristique augue id sem adipiscing pellentesque. Sed sollicitudin, leo sed interdum elementum, nisi ante condimentum leo, eget ornare libero diam semper quam. Vivamus augue urna, porta eget ultrices et, dapibus ut ligula. Ut laoreet consequat faucibus. Praesent at lectus ut lectus malesuada mollis. Nam interdum adipiscing eros, nec sodales mi porta nec. Proin et quam vitae sem interdum aliquet. Proin vel odio at lacus vehicula aliquet.</p>
<p>Etiam placerat dui ut sem ornare vel vestibulum augue mattis. Sed semper malesuada mi, eu bibendum lacus lobortis nec. Etiam fringilla elementum risus, eget consequat urna laoreet nec. Etiam mollis quam non sem convallis vel consectetur lectus ullamcorper. Aenean mattis lacus quis ligula mattis eget vestibulum diam hendrerit. In non placerat mauris. Praesent faucibus nunc quis eros sagittis viverra. In hac habitasse platea dictumst. Suspendisse eget nisl erat, ac molestie massa. Praesent mollis vestibulum tincidunt. Fusce suscipit laoreet malesuada. Aliquam erat volutpat. Aliquam dictum elementum rhoncus. Praesent in est massa, pulvinar sodales nunc. Pellentesque gravida euismod mi ac convallis.</p>
<p>Mauris vel odio vel nulla facilisis lacinia. Aliquam ultrices est at leo blandit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse porttitor adipiscing facilisis. Duis cursus quam iaculis augue interdum porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vulputate magna ac metus pretium condimentum. In tempus, est eget vestibulum blandit, velit massa dignissim nisl, ut scelerisque lorem neque vel velit. Maecenas fermentum commodo viverra. Curabitur a nibh non velit aliquam cursus. Integer semper condimentum tortor a pellentesque. Pellentesque semper, nisl id porttitor vehicula, sem dui feugiat lacus, vitae consequat augue urna vel odio.</p>
<p>Vestibulum id neque nec turpis iaculis pulvinar et a massa. Vestibulum sed nibh vitae arcu eleifend egestas. Mauris fermentum ultrices blandit. Suspendisse vitae lorem libero. Aenean et pellentesque tellus. Morbi quis neque orci, eu dignissim dui. Fusce sollicitudin mauris ac arcu vestibulum imperdiet. Proin ultricies nisl sit amet enim imperdiet eu ornare dui tempus. Maecenas lobortis nisi a tortor vestibulum vel eleifend tellus vestibulum. Donec metus sapien, hendrerit a fermentum id, dictum quis libero.</p>
<p>Pellentesque a lorem nulla, in tempor justo. Duis odio nisl, dignissim sed consequat sit amet, hendrerit ac neque. Nunc ac augue nec massa tempor rhoncus. Nam feugiat, tellus a varius euismod, justo nisl faucibus velit, ut vulputate justo massa eu nibh. Sed bibendum urna quis magna facilisis in accumsan dolor malesuada. Morbi sit amet nunc risus, in faucibus sem. Nullam sollicitudin magna sed sem mollis id commodo libero condimentum. Duis eu massa et lacus semper molestie ut adipiscing sem.</p>
<p>Sed id nulla mi, eget suscipit eros. Aliquam tempus molestie rutrum. In quis varius elit. Nullam dignissim neque nec velit vulputate porttitor. Mauris ac ligula sit amet elit fermentum rhoncus. In tellus urna, pulvinar quis condimentum ut, porta nec justo. In hac habitasse platea dictumst. Proin volutpat elit id quam molestie ac commodo lacus sagittis. Quisque placerat, augue tempor placerat pulvinar, nisi nisi venenatis urna, eget convallis eros velit quis magna. Suspendisse volutpat iaculis quam, ut tristique lacus luctus quis.</p>
<p>Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.</p>
</body>
</html>
```

```
var showBookmark = (function () {
  var  _useHash, _scrollX, _scrollY, _nodeX, _nodeY, _itFrame, _scrollId = -1, _bookMark,

   nDuration = 200, nFrames = 10;

  function _next () {
  if (_itFrame > nFrames) { clearInterval(_scrollId); _scrollId = -1; return; }
  _isBot = true;
  document.documentElement.scrollTop = Math.round(_scrollY + (_nodeY - _scrollY) * _itFrame / nFrames);
  document.documentElement.scrollLeft = Math.round(_scrollX + (_nodeX - _scrollX) * _itFrame / nFrames);
  if (_useHash && _itFrame === nFrames) { location.hash = _bookMark; }
  _itFrame++;
  }

  function _chkOwner () {
  if (_isBot) { _isBot = false; return; }
  if (_scrollId > -1) { clearInterval(_scrollId); _scrollId = -1; }
  }

  if (window.addEventListener) { window.addEventListener("scroll", _chkOwner, false); }
  else if (window.attachEvent) { window.attachEvent("onscroll", _chkOwner); }

  return function (sBookmark, bUseHash) {
    var oNode = document.querySelector(sBookmark);
  _scrollY = document.documentElement.scrollTop;
  _scrollX = document.documentElement.scrollLeft;
  _bookMark = sBookmark;
  _useHash = bUseHash === true;
  _nodeX = oNode.offsetLeft;
    _nodeY = oNode.offsetTop;
    _itFrame = 1;
  if (_scrollId === -1) { _scrollId = setInterval(_next, Math.round(nDuration / nFrames)); }
  };
})();
```

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

## [Async functions](https://javascript.info/async-await#async-functions)

Let’s start with the `async` keyword. It can be placed before a function, like this:

`async function f() { return 1; }`

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of `1`; let’s test it:

`async function f() {
return 1;
}

f().then(alert); // 1`

…We could explicitly return a promise, which would be the same:

`async function f() {
return Promise.resolve(1);
}

f().then(alert); // 1`

So, `async` ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, `await`, that works only inside `async` functions, and it’s pretty cool.

## [Await](https://javascript.info/async-await#await)

The syntax:

`// works only inside async functions let value = await promise;`

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

`async function f() {

let promise = new Promise((resolve, reject) => {
setTimeout(() => resolve("done!"), 1000)
});

_let result = await promise; // wait until the promise resolves (\*)_

alert(result); // "done!"
}

f();`

The function execution “pauses” at the line `(*)` and resumes when the promise settles, with `result` becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: `await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It’s just a more elegant syntax of getting the promise result than `promise.then`. And, it’s easier to read and write.

Can’t use `await` in regular functions

If we try to use `await` in a non-async function, there would be a syntax error:

`function f() { let promise = Promise.resolve(1); _let result = await promise; // Syntax error_ }`

We may get this error if we forget to put `async` before a function. As stated earlier, `await` only works inside an `async` function.

Let’s take the `showAvatar()` example from the chapter [Promises chaining](https://javascript.info/promise-chaining) and rewrite it using `async/await`:

1.  We’ll need to replace `.then` calls with `await`.
2.  Also we should make the function `async` for them to work.

``async function showAvatar() {

// read our JSON
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

// read github user
let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
let githubUser = await githubResponse.json();

// show the avatar
let img = document.createElement('img');
img.src = githubUser.avatar_url;
img.className = "promise-avatar-example";
document.body.append(img);

// wait 3 seconds
await new Promise((resolve, reject) => setTimeout(resolve, 3000));

img.remove();

return githubUser;
}

showAvatar();``

Pretty clean and easy to read, right? Much better than before.

`await` won’t work in the top-level code

People who are just starting to use `await` tend to forget the fact that we can’t use `await` in top-level code. For example, this will not work:

`// syntax error in top-level code let response = await fetch('/article/promise-chaining/user.json'); let user = await response.json();`

But we can wrap it into an anonymous async function, like this:

`(async () => { let response = await fetch('/article/promise-chaining/user.json'); let user = await response.json(); ... })();`

P.S. New feature: starting from V8 engine version 8.9+, top-level await works in [modules](https://javascript.info/modules).

`await` accepts “thenables”

Like `promise.then`, `await` allows us to use thenable objects (those with a callable `then` method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports `.then`, that’s enough to use it with `await`.

Here’s a demo `Thenable` class; the `await` below accepts its instances:

`class Thenable {
constructor(num) {
this.num = num;
}
then(resolve, reject) {
alert(resolve);
// resolve with this.num*2 after 1000ms
setTimeout(() => resolve(this.num * 2), 1000); // (\*)
}
}

async function f() {
// waits for 1 second, then result becomes 2
let result = await new Thenable(1);
alert(result);
}

f();`

If `await` gets a non-promise object with `.then`, it calls that method providing the built-in functions `resolve` and `reject` as arguments (just as it does for a regular `Promise` executor). Then `await` waits until one of them is called (in the example above it happens in the line `(*)`) and then proceeds with the result.

Async class methods

To declare an async class method, just prepend it with `async`:

`class Waiter {
_async wait() {_
return await Promise.resolve(1);
}
}

new Waiter()
.wait()
.then(alert); // 1 (this is the same as (result => alert(result)))`

The meaning is the same: it ensures that the returned value is a promise and enables `await`.

## [Error handling](https://javascript.info/async-await#error-handling)

If a promise resolves normally, then `await promise` returns the result. But in the case of a rejection, it throws the error, just as if there were a `throw` statement at that line.

This code:

`async function f() { _await Promise.reject(new Error("Whoops!"));_ }`

…is the same as this:

`async function f() { _throw new Error("Whoops!");_ }`

In real situations, the promise may take some time before it rejects. In that case there will be a delay before `await` throws an error.

We can catch that error using `try..catch`, the same way as a regular `throw`:

`async function f() {

try {
let response = await fetch('http://no-such-url');
} catch(err) {
_alert(err); // TypeError: failed to fetch_
}
}

f();`

In the case of an error, the control jumps to the `catch` block. We can also wrap multiple lines:

`async function f() {

try {
let response = await fetch('/no-user-here');
let user = await response.json();
} catch(err) {
// catches errors both in fetch and response.json
alert(err);
}
}

f();`

If we don’t have `try..catch`, then the promise generated by the call of the async function `f()` becomes rejected. We can append `.catch` to handle it:

`async function f() {
let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
_f().catch(alert); // TypeError: failed to fetch // (\*)_`

If we forget to add `.catch` there, then we get an unhandled promise error (viewable in the console). We can catch such errors using a global `unhandledrejection` event handler as described in the chapter [Error handling with promises](https://javascript.info/promise-error-handling).

`async/await` and `promise.then/catch`

When we use `async/await`, we rarely need `.then`, because `await` handles the waiting for us. And we can use a regular `try..catch` instead of `.catch`. That’s usually (but not always) more convenient.

But at the top level of the code, when we’re outside any `async` function, we’re syntactically unable to use `await`, so it’s a normal practice to add `.then/catch` to handle the final result or falling-through error, like in the line `(*)` of the example above.

`async/await` works well with `Promise.all`

When we need to wait for multiple promises, we can wrap them in `Promise.all` and then `await`:

`// wait for the array of results let results = await Promise.all([ fetch(url1), fetch(url2), ... ]);`

In the case of an error, it propagates as usual, from the failed promise to `Promise.all`, and then becomes an exception that we can catch using `try..catch` around the call.

## [Summary](https://javascript.info/async-await#summary)

The `async` keyword before a function has two effects:

1.  Makes it always return a promise.
2.  Allows `await` to be used in it.

The `await` keyword before a promise makes JavaScript wait until that promise settles, and then:

1.  If it’s an error, the exception is generated — same as if `throw error` were called at that very place.
2.  Otherwise, it returns the result.

Together they provide a great framework to write asynchronous code that is easy to both read and write.

With `async/await` we rarely need to write `promise.then/catch`, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also `Promise.all` is nice when we are waiting for many tasks simultaneously.

- Watch [0](https://github.com/bgoonz/web-guided-project-HTTP/watchers)

- Fork

  If this dialog fails to load, you can visit [the fork page](https://github.com/bgoonz/web-guided-project-HTTP/fork) directly.

  [43](https://github.com/bgoonz/web-guided-project-HTTP/network/members)

[Permalink](https://github.com/bgoonz/web-guided-project-HTTP/blob/e916e666af152b8c0a071b2721317cd5abdb7450/README.md)

**2** contributors

### Users who have contributed to this file

[![@wlongmireLambda](https://avatars.githubusercontent.com/u/71340015?s=48&v=4)](https://github.com/bgoonz/web-guided-project-HTTP/commits/main/README.md?author=wlongmireLambda) [ ![@bgoonz](https://avatars.githubusercontent.com/u/66654881?s=48&v=4) ](https://github.com/bgoonz/web-guided-project-HTTP/commits/main/README.md?author=bgoonz)

63 lines (39 sloc) 7.46 KB

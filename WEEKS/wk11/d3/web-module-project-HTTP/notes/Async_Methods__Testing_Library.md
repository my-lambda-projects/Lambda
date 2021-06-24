Several utilities are provided for dealing with asynchronous code. These can be useful to wait for an element to appear or disappear in response to an event, user action, timeout, or Promise. (See the [guide to testing disappearance](https://testing-library.com/docs/guide-disappearance).)

The async methods return Promises, so be sure to use `await` or `.then` when calling them.

## `findBy` Queries

`findBy` methods are a combination of `getBy` [queries](https://testing-library.com/docs/queries/about#types-of-queries) and [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor). They accept the waitFor options as the last argument (e.g. `await screen.findByText('text', queryOptions, waitForOptions)`).

`findBy` queries work when you expect an element to appear but the change to the DOM might not happen immediately.

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

When in need to wait for any period of time you can use `waitFor`, to wait for your expectations to pass. Here's a simple example:

await waitFor(() \=> expect(mockAPI).toHaveBeenCalledTimes(1))

`waitFor` may run the callback a variable number of times.

This can be useful if you have a unit test that mocks API calls and you need to wait for your mock promises to all resolve.

If you return a promise in the `waitFor` callback (either explicitly or implicitly with `async` syntax), then the `waitFor` utility will not call your callback again until that promise rejects. This allows you to `waitFor` things that must be checked asynchronously.

The default `container` is the global `document`. Make sure the elements you wait for are descendants of `container`.

The default `interval` is `50ms`. However it will run your callback immediately before starting the intervals.

The default `timeout` is `1000ms` which will keep you under [Jest's default timeout of `5000ms`](https://jestjs.io/docs/en/jest-object.html#jestsettimeouttimeout).

The default `onTimeout` takes the error and appends the `container`'s printed state to the error message which should hopefully make it easier to track down what caused the timeout.

The default `mutationObserverOptions` is `{subtree: true, childList: true, attributes: true, characterData: true}` which will detect additions and removals of child elements (including text nodes) in the `container` and any of its descendants. It will also detect attribute changes. When any of those changes occur, it will re-run the callback.

## `waitForElementToBeRemoved`

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

To wait for the removal of element(s) from the DOM you can use `waitForElementToBeRemoved`. The `waitForElementToBeRemoved` function is a small wrapper around the `waitFor` utility.

The first argument must be an element, array of elements, or a callback which returns an element or array of elements.

Here is an example where the promise resolves because the element is removed:

const el \= document.querySelector('div.getOuttaHere')

waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() \=>

console.log('Element no longer in DOM')

)

el.setAttribute('data-neat', true)

el.parentElement.removeChild(el)

`waitForElementToBeRemoved` will throw an error if the first argument is `null` or an empty array:

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

The options object is forwarded to `waitFor`.

## Deprecated Methods

`wait`, `waitForDomChange`, and `waitForElement` have been combined into the `waitFor` method.

Deprecated Methods

### `wait`

> (DEPRECATED, use `waitFor` instead)

function wait<T\>(

callback: () \=> void,

options?: {

container?: HTMLElement

timeout?: number

interval?: number

mutationObserverOptions?: MutationObserverInit

}

): Promise<T\>

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

const container \= document.createElement('div')

container.setAttribute('data-cool', 'true')

waitForDomChange({ container }).then((mutationsList) \=> {

const mutation \= mutationsList\[0\]

console.log(

\`was cool: ${mutation.oldValue}\\ncurrently cool: ${mutation.target.dataset.cool}\`

)

})

container.setAttribute('data-cool', 'false')

The default `container` is the global `document`. Make sure the elements you wait for are descendants of `container`.

The default `timeout` is `1000ms` which will keep you under [Jest's default timeout of `5000ms`](https://jestjs.io/docs/en/jest-object.html#jestsettimeouttimeout).

The default `mutationObserverOptions` is `{subtree: true, childList: true, attributes: true, characterData: true}` which will detect additions and removals of child elements (including text nodes) in the `container` and any of its descendants. It will also detect attribute changes.

### `waitForElement`

> (DEPRECATED, use `find*` queries or `waitFor`)

function waitForElement<T\>(

callback: () \=> T,

options?: {

container?: HTMLElement

timeout?: number

mutationObserverOptions?: MutationObserverInit

}

): Promise<T\>

When in need to wait for DOM elements to appear, disappear, or change you can use `waitForElement`. The `waitForElement` function is a small wrapper around the [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

Here's a simple example:

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

The default `container` is the global `document`. Make sure the elements you wait for will be attached to it, or set a different `container`.

The default `timeout` is `4500ms` which will keep you under [Jest's default timeout of `5000ms`](https://facebook.github.io/jest/docs/en/jest-object.html#jestsettimeouttimeout).

The default `mutationObserverOptions` is `{subtree: true, childList: true, attributes: true, characterData: true}` which will detect additions and removals of child elements (including text nodes) in the `container` and any of its descendants. It will also detect attribute changes.

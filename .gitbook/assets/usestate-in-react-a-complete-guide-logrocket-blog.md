`useState` is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

This tutorial serves as a complete guide to the `useState` Hook in React, the equivalent of `this.state`/`this.setSate` for functional components. We’ll cover the following in detail:

-   -   [](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#classandfunctionalcomponentsinreact)
    -   [What does the React.useState hook do?](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#whatdoesthereactusestatehookdo)
    -   [Declaring state in React](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#declaringstateinreact)
    -   [React Hooks: Update state](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#reacthooksupdatestate)
    -   [Using an object as a state variable with useState hook](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#usinganobjectasastatevariablewithusestatehook)
    -   [How to update state in a nested object in React with Hooks](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#howtoupdatestateinanestedobjectinreactwithhooks)
    -   [Multiple state variables or one state object](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#multiplestatevariablesoronestateobject)
    -   [Rules for using useState](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#rulesforusingusestate)
    -   [The useReducer Hook](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#theusereducerhook)

If you’re just getting started with React Hooks and looking for a visual guide, check out the video tutorial below.

<iframe loading="lazy" src="https://www.youtube.com/embed/4qVNaohzDWU" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" data-savepage-key="0-0"></iframe>

## Class and functional components in React

There are two types of components in React: class and functional components.

Class components are [ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) that extend from [React.Component](https://reactjs.org/docs/react-component.html) and can have [state and lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html):

class Message extends React.Component { constructor(props) { super(props); this.state \= { message: ‘’ }; } componentDidMount() {  } render() { return <div\>{this.state.message}</div\>; } }

Functional components are functions that just accept arguments as the properties of the component and return valid JSX:

function Message(props) { return <div\>{props.message}</div\> }  const Message \= (props) \=> <div>{props.message}</div\>

As you can see, there are no state or lifecycle methods. However, as of React 16.8, we can use Hooks.

[React Hooks](https://blog.logrocket.com/react-reference-guide-hooks-api/) are functions that add state variables to functional components and instrument the lifecycle methods of classes. They tend to start with `use`.

## What does the `React.useState` Hook do?

As stated previously, `useState` enables you to add state to function components. Calling `React.useState` inside a function component generates a single piece of state associated with that component.

Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.

So when should you use the `useState` Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.

## Declaring state in React

`useState` is a named export from `react`. To use it, you can write:

React.useState

Or to import it just write `useState`:

import React, { useState } from 'react';

But unlike the state object that you can declare in a class, which allows you to declare more than one state variable, like this:

import React from 'react'; class Message extends React.Component { constructor(props) { super(props); this.state \= { message: '', list: \[\], }; }  }

The `useState` Hook allows you to declare only one state variable (of any type) at a time, like this:

import React, { useState } from 'react'; const Message\= () \=> { const messageState \= useState( '' ); const listState \= useState( \[\] ); }

`useState` takes the initial value of the state variable as an argument.

You can pass it directly, as shown in the previous example, or use a function to lazily initialize the variable (useful when the initial state is the result of an expensive computation):

const Message\= () \=> { const messageState \= useState( () \=> expensiveComputation() );  }

The initial value will be assigned only on the initial render (if it’s a function, it will be executed only on the initial render).

In subsequent renders (due to a change of state in the component or a parent component), the argument of the `useState` Hook will be ignored and the current value will be retrieved.

It is important to keep this in mind because, for example, if you want to update the state based on the new properties the component receives:

const Message\= (props) \=> { const messageState \= useState( props.message );  }

Using `useState` alone won’t work because its argument is used the first time only — not every time the property changes (look [here](https://stackoverflow.com/questions/54625831/how-to-sync-props-to-state-using-react-hook-setstate) for the right way to do this).

But `useState` doesn’t return just a variable as the previous examples imply.

It returns an array, where the first element is the state variable and the second element is a function to update the value of the variable:

const Message\= () \=> { const messageState \= useState( '' ); const message \= messageState\[0\];  const setMessage \= messageState\[1\];  }

Usually, you’ll use [array destructuring](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f) to simplify the code shown above:

const Message\= () \=> { const \[message, setMessage\]= useState( '' ); }

This way, you can use the state variable in the functional component like any other variable:

const Message \= () \=> { const \[message, setMessage\] \= useState( '' ); return ( <p\> <strong\>{message}</strong\> </p\> ); };

But why does `useState` return array?

Because compared to an object, an array is more flexible and easy to use.

If the method returned an object with a fixed set of properties, you wouldn’t be able to assign custom names in an easy way.

You’d have to do something like this (assuming the properties of the object are `state` and `setState`):

 const messageState \= useState( '' ); const message \= messageState.state; const setMessage \= messageState  const { state: message, setState: setMessage } \= useState( '' ); const { state: list, setState: setList } \= useState( \[\] );

## React Hooks: Update state

The second element returned by `useState` is a function that takes a new value to update the state variable.

Here’s an example that uses a text box to update the state variable on every change:

const Message \= () \=> { const \[message, setMessage\] \= useState( '' ); return ( <div\> <input
         type\="text" value\={message} placeholder\="Enter a message" onChange\={e \=> setMessage(e.target.value)} /> <p\> <strong\>{message}</strong\> </p\> </div\> ); };

Try it [here](https://codesandbox.io/s/7z31woqo9q).

However, this update function doesn’t update the value right away.

Rather, it enqueues the update operation. Then, after re-rendering the component, the argument of `useState` will be ignored and this function will return the most recent value.  
If you use the previous value to update state, you must pass a function that receives the previous value and returns the new value:

const Message \= () \=> { const \[message, setMessage\] \= useState( '' ); return ( <div\> <input
        type\="text" value\={message} placeholder\="Enter some letters" onChange\={e \=> { const val \= e.target.value; setMessage(prev \=> prev + val) } } /> <p\> <strong\>{message}</strong\> </p\> </div\> ); };

Try it [here](https://codesandbox.io/s/v0n08rw547).

## Using an object as a state variable with `useState` hook

There are two things you need to keep in mind about updates when using objects:

-   The importance of immutability
-   And the fact that the setter returned by `useState` doesn’t [merge objects like `setState()` does](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged) in class components

About the first point, if you use the same value as the current state to update the state (React uses [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) for comparing), React won’t trigger a re-render.

When working with objects, it’s easy to make the following mistake:

const Message \= () \=> { const \[messageObj, setMessage\] \= useState({ message: '' }); return ( <div\> <input
        type\="text" value\={messageObj.message} placeholder\="Enter a message" onChange\={e \=> { messageObj.message \= e.target.value; setMessage(messageObj); // Doesn't work }} /> <p\> <strong\>{messageObj.message}</strong\> </p\> </div\> ); };

Try it [here](https://codesandbox.io/s/50n0py0p6k).

Instead of creating a new object, the above example mutates the existing state object. To React, that’s the same object.

To make it work, we must create a new object:

onChange\={e \=> { const newMessageObj \= { message: e.target.value }; setMessage(newMessageObj);  }}

This leads us to the second important thing you need to remember.

When you update a state variable, unlike `this.setState` in a class component, the function returned by `useState` does not automatically merge update objects, it replaces them.

Following the previous example, if we add another property to the message object (`id`):

const Message \= () \=> { const \[messageObj, setMessage\] \= useState({ message: '', id: 1 }); return ( <div\> <input
        type\="text" value\={messageObj.message} placeholder\="Enter a message" onChange\={e \=> { const newMessageObj \= { message: e.target.value }; setMessage(newMessageObj); }} /> <p\> <strong\>{messageObj.id} : {messageObj.message}</strong\> </p\> </div\> ); };

And we only update the `message` property like in the above example, React will replace the original state object:

{ message: '', id: 1 }

With the object used in the `onChange` event, which only contains the `message` property:

{ message: 'message entered' } // id property is lost

Try it [here](https://codesandbox.io/s/qqp8qp9zzq), you’ll see how the `id` property is lost.

You can replicate the behavior of `setState()` by using the function argument that contains the object to be replaced and the object spread syntax:

onChange\={e \=> { const val \= e.target.value; setMessage(prevState \=> { return { ...prevState, message: val } }); }}

The `...prevState` part will get all of the properties of the object and the `message: val` part will overwrite the `message` property.

This will have the same result as using [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) (just remember to create a new object):

onChange\={e \=> { const val \= e.target.value; setMessage(prevState \=> { return Object.assign({}, prevState, { message: val }); }); }}

Try it [here](https://codesandbox.io/s/usestate-05-qpykz).

However, the spread syntax simplifies this operation and it also works with arrays.

Basically, when applied to an array, the spread syntax removes the brackets so you can create another one with the values of the original array:

\[ ...\['a', 'b', 'c'\], 'd' \]  \[ 'a', 'b', 'c', 'd' \]

Here’s an example that shows how to use `useState` with arrays:

const MessageList \= () \=> { const \[message, setMessage\] \= useState(""); const \[messageList, setMessageList\] \= useState(\[\]); return ( <div> <input
        type\="text" value\={message} placeholder\="Enter a message" onChange\={e \=> { setMessage(e.target.value); }} /> <input
        type\="button" value\="Add" onClick\={e \=> { setMessageList(\[ ...messageList, {  id: messageList.length + 1, message: message } \]); setMessage("");  }} /> <ul> {messageList.map(m \=> ( <li key\={m.id}>{m.message}</li\> ))} </ul\> </div\> ); };

Try it [here](https://codesandbox.io/s/usestate-06-y4s1r).

You just have to be careful when applying the spread syntax to multidimensional arrays because it won’t work as you might expect.

This leads us to another thing to consider when working with objects as the state.

## How to update state in a nested object in React with Hooks

In JavaScript, multidimensional arrays are arrays within arrays:

\[ \['value1','value2'\], \['value3','value4'\] \]

You could use them to group all your state variables in one place. However, for that purpose, it would be better to use nested objects:

{ 'row1' : { 'key1' : 'value1', 'key2' : 'value2' }, 'row2' : { 'key3' : 'value3', 'key4' : 'value4' } }

But the problem when working with multidimensional arrays and nested objects is that `Object.assign` and the spread syntax will create a [shallow copy instead of a deep copy](https://dev.to/rahxuls/what-is-shallow-copy-in-javascript-47hg).

From the [spread syntax documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

> Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows. (The same is true with `[Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)` and spread syntax.)

let a \= \[\[1\], \[2\], \[3\]\]; let b \= \[...a\]; b.shift().shift();  

This [StackOverflow query](https://stackoverflow.com/questions/43421704/why-is-a-spread-element-unsuitable-for-copying-multidimensional-arrays) offers good explanations for the above example, but the important point is that when using nested objects, we can’t just use the spread syntax to update the state object.

For example, consider the following state object:

const \[messageObj, setMessage\] \= useState({ author: '', message: { id: 1, text: '' } });

The following code snippets show some incorrect ways to update the `text` field:

 setMessage(prevState \=> ({ ...prevState, text: 'My message' }));  setMessage(prevState \=> ({ ...prevState.message, text: 'My message' }));  setMessage(prevState \=> ({ ...prevState, message: { text: 'My message' } }));

To properly update the `text` field, we have to copy to a new object the entire set of fields/nested objects of the original object:

 setMessage(prevState \=> ({ ...prevState,  message: {  ...prevState.message,  text: 'My message'  } }));

In the same way, here’s how you’d update the `author` field of the state object:

 setMessage(prevState \=> ({ author: 'Joe',  ...prevState.message  }));

Assuming the `message` object doesn’t change. If it does change, you’d have to update the object this way:

 setMessage(prevState \=> ({ author: 'Joe',  message: {  ...prevState.message,  text: 'My message'  } }));

## Multiple state variables or one state object

When working with multiple fields or values as the state of your application, you have the option of organizing the state using multiple state variables:

const \[id, setId\] \= useState(\-1); const \[message, setMessage\] \= useState(''); const \[author, setAuthor\] \= useState('');

Or an object state variable:

const \[messageObj, setMessage\] \= useState({ id: 1, message: '', author: '' });

However, you have to be careful when using state objects with a complex structure (nested objects). Consider this example:

const \[messageObj, setMessage\] \= useState({ input: { author: { id: \-1, author: { fName:'', lName: '' } }, message: { id: \-1, text: '', date: now() } } });

If you have to update a specific field nested deep in the object, you’ll have to copy all the other objects along with the key-value pairs of the object that contains that specific field:

setMessage(prevState \=> ({ input: { ...prevState.input, message: { ...prevState.input.message, text: 'My message' } } }));

In some cases, cloning deeply nested objects can be expensive because React may re-render parts of your applications that depend on fields that haven’t even changed.

For this reason, the first thing you need to consider is trying to flatten your state object(s). In particular, the React documentation recommends [splitting the state into multiple state variables](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables) based on which values tend to change together.

If this is not possible, the recommendation is to use libraries that help you work with immutable objects, such as [immutable.js](https://facebook.github.io/immutable-js/) or [immer](https://blog.logrocket.com/whats-new-in-immer-7-0/).

## Track state and user interaction with components

It’s important to validate that everything works in your production React app as expected. If you’re interested in monitoring and tracking issues related to components AND seeing how users interact with specific components, [try LogRocket](https://logrocket.com/signup/). [![](https://files.readme.io/27c94e7-Image_2017-06-05_at_9.46.04_PM.png)](https://logrocket.com/signup/)[![LogRocket Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2017/03/1d0cd-1s_rmyo6nbrasp-xtvbaxfg.png)](https://logrocket.com/signup/)[https://logrocket.com/signup/](https://logrocket.com/signup/)

[LogRocket](https://logrocket.com/signup/) is like a DVR for web apps, recording literally everything that happens on your site. The LogRocket React plugin allows you to search for user sessions where the user clicks a specific component in your app. With LogRocket you can understand how users interact with components, and surface any errors related to components not rendering.

In addition, LogRocket logs all actions and state from your Redux stores. LogRocket instruments your app to record requests/responses with headers + bodies. It also records the HTML and CSS on the page, recreating pixel-perfect videos of even the most complex single-page apps.

Modernize how you debug your React apps – [Start monitoring for free](https://logrocket.com/signup/).

## Rules for using `useState`

`useState` abides by the same [rules that all Hooks follow](https://reactjs.org/docs/hooks-rules.html):

-   Only call Hooks at the top level
-   Only call Hooks from React functions

The second rule is easy to follow. Don’t use `useState` in a class component:

class App extends React.Component { render() { const \[message, setMessage\] \= useState( '' ); return ( <p\> <strong\>{message}</strong\> </p\> ); } }

Or regular JavaScript functions (not called inside a functional component):

function getState() { const messageState \= useState( '' ); return messageState; } const \[message, setMessage\] \= getState(); const Message \= () \=> {  }

You’ll get an [error](https://reactjs.org/warnings/invalid-hook-call-warning.html).

The first rule means that, even inside functional components, you shouldn’t call `useState` in loops, conditions, or nested functions because React relies on the order in which `useState` functions are called to get the correct value for a particular state variable.

In that regard, the most common mistake is to wrap `useState` calls in a conditional statement (they won’t be executed all the time):

if (condition) {  const \[message, setMessage\] \= useState( '' ); setMessage( aMessage ); } const \[list, setList\] \= useState( \[\] ); setList( \[1, 2, 3\] );

A functional component can have many calls to `useState` or other Hooks. Each Hook is stored in a list, and there’s a variable that keeps track of the currently executed Hook.

When `useState` is executed, the state of the current Hook is read (or initialized during the first render), and then, the variable is changed to point to the next Hook.

That’s why it is important to always maintain the Hook calls in the same order, otherwise, a value belonging to another state variable could be returned.

In general terms, here’s an example of how this works step by step:

1.  React initializes the list of Hooks and the variable that keeps track of the current Hook
2.  React calls your component for the first time
3.  React finds a call to `useState`, creates a new Hook object (with the initial state), changes the current Hook variable to point to this object, adds the object to the Hooks list, and return the array with the initial state and the function to update it
4.  React finds another call to `useState` and repeats the actions of the previous step, storing a new Hook object and changing the current Hook variable
5.  The component state changes
6.  React sends the state update operation (performed by the function returned by `useState`) to a queue to be processed
7.  React determines it needs to re-render the component
8.  React resets the current Hook variable and calls your component
9.  React finds a call to `useState`, but this time, since there’s already a Hook at the first position of the list of Hooks, it just changes the current Hook variable and returns the array with the current state and the function to update it
10.  React finds another call to `useState` and since a Hook exists in the second position, once again, it just changes the current Hook variable and returns the array with the current state and the function to update it

If you like to read code, [`ReactFiberHooks`](https://github.com/facebook/react/blob/fd557d453d37eab29eca18f0507750ab2093669d/packages/react-reconciler/src/ReactFiberHooks.js) is the class where you can learn how Hooks work under the hood.

## The `useReducer` Hook

For advanced use cases, you can use the [`useReducer` Hook](https://blog.logrocket.com/react-reference-guide-hooks-api/#usereducer) as an alternative to `useState`. This is especially useful when you have complex state logic that uses multiple sub-values or when a state depends on the previous one.

Here’s how to use the `useReducer` Hook:

const \[state, dispatch\] \= useReducer(reducer, initialArgument, init) useReducer returns an array that holds the current state value and a dispatch method. This should be familiar territory if you have experience using Redux.

Whereas, with `useState`, you invoke the state updater function to update state, with `useReducer`, you invoke the `dispatch` function and pass it an action — i.e., an object with at least a `type` property.

dispatch({type: 'increase'})

Conventionally, an action object may also have a `payload`, e.g., `{action: 'increase', payload: 10}`.

While it’s not absolutely necessary to pass an action object that follows this pattern, it’s a very common pattern popularized by [Redux](https://redux.js.org/).

## Conclusion

`useState` is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

Here are some key important points to remember:

-   The update function doesn’t update the value right away
-   If you use the previous value to update state, you must pass a function that receives the previous value and returns an updated value, for example, `setMessage(previousVal => previousVal + currentVal)`
-   If you use the same value as the current state (React uses the [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) for comparing) to update the state, React won’t trigger a re-render
-   Unlike `this.setState` in class components, `useState` doesn’t merge objects when the state is updated. It replaces them
-   `useState` follows the same [rules](https://reactjs.org/docs/hooks-rules.html) that all Hooks do. In particular, pay attention to the order in which these functions are called (there’s an [ESLint plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) that will help you enforce these rules)
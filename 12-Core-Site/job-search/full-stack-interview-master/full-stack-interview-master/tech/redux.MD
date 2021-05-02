<h1 align="center">
    Redux Interview Questions & Answers
</h1>
<p align="center">
    <img src="https://github.com/monkey3310/full-stack-interview/blob/master/assets/redux.png" alt="Redux Interview Questions & Answers" width="200"/>
</p>

_Note: Keep in mind that many of these questions are open-ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would._

### 1. What is the concept of “single source of truth” in Redux? :star:

<details>
    <summary>
        Answer
    </summary>

The state of your whole application is stored in an object tree within a single store. That is, there are not multiple stores keeping chunks of the entire state of the web application. Having a single a single store also helps in debugging the app.

</details>

### 2. What are actions in Redux? :star:

<details>
    <summary>
        Answer
    </summary>

Actions are plain JavaScript object that describes what happened. They can be thought of as the "intent" to do something. Here are a few example actions:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

</details>

### 3. Can functions be an action? :star:

<details>
    <summary>
        Answer
    </summary>

Yes. Libraries like `redux-thunk` allows developers to use functions as actions.

See [redux-thunk](https://github.com/reduxjs/redux-thunk)

</details>

### 4. What are reducers in Redux? :star:

<details>
    <summary>
        Answer
    </summary>

Reducers are just pure functions that take the previous state and an action, and return the next state. Example:

```js
function handleAuth(state, action) {
    return {
        ...state,
        auth: action.payload
    });
}
```

</details>

### 5. What is `Store` in Redux? :star:

<details>
    <summary>
        Answer
    </summary>

Store is the object that holds the application state. It provides a few helper methods to access the state, dispatch actions and register listeners. The entire store is kept in a single JavaScript object.

Reducers are used to get a new state from an existing state. The new state becomes the store.

</details>

### 6. How is it different from MVC and Flux? :star:

<details>
    <summary>
        Answer
    </summary>

</details>

### 7. Why the state is read-only? :star:

<details>
    <summary>
        Answer
    </summary>

Because it's [second of the Three Principles of Redux](https://redux.js.org/introduction/threeprinciples#state-is-read-only). But it's not really a good answer :slightly_smiling_face:.

The real answer is: read-only state makes it easier to track changes of state. Since changes happen only by applying actions to store there is no race conditions to watch out, no hidden mutations. Read-only state means that complex deep checks for changes can be replaced with simple shallow comparison, what will allow developers reduce complexity of applications.

</details>

### 8. What are action creators and how they differ from actions? :star:

<details>
    <summary>
        Answer
    </summary>

[Action creators](https://redux.js.org/basics/actions#action-creators) are just functions that create actions. Since actions are just objects it's convenient to create them with functions such as actions creators. For example:

```js
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: { text }
  };
}
```

In redux action creators do not dispatch actions - you must wrap them in `dispatch` call.

```js
dispatch(addTodo('Pass full-stack interview at Google'));
```

</details>

### 9. What are middlewares in Redux?. :star:

<details>
    <summary>
        Answer
    </summary>

`Middleware` generally refers to software services that "glue together" separate features in existing software. For Redux, middleware provides a third-party extension point between dispatching an action and handing the action off to the reducer:

[ Action ] <-> [ Middleware ] <-> [ Dispatcher ]

Examples of middleware include logging, crash reporting, routing, handling asynchronous requests, etc.

Middleware is basically a function that accepts the store, which is expected to return a function that accepts the next function, which is expected to return a function which accepts an action.

Here is an example of logging Middleware:

```js
const loggingMiddleware = store => next => action => {
  // Our middleware
  console.log(`Redux Log:`, action);
  // call the next function
  next(action);
};
```

</details>

### 10. Why reducers functions have to be pure? :star:

<details>
    <summary>
        Answer
    </summary>

Because it's [third of the Three Principles of Redux](https://redux.js.org/introduction/threeprinciples#changes-are-made-with-pure-functions) :slightly_smiling_face:.

The **pure** function is a function which result only depends on it's arguments and which does no side effects. For example, pure reducer should work like this:

```js
(previousState, action) => newState;
```

Reducers have to be pure because pure functions are predictable. It They are easier to debug, test and refactor.

Impure reducer means that application state depends not only on previous state and actions, but on something else. This breakes **Single Source Of Truth** principle and increases complexity of your app.

</details>

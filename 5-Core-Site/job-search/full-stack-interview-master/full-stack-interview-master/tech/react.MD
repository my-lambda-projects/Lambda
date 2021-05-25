<h1 align="center">
React Interview Questions & Answers
</h1>
<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react Interview Questions & Answers" width="200" height="200"/>
</p>

_Note: Keep in mind that many of these questions are open-ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would._

### 1. What is `React`? How is it different from other JS frameworks? :star:

<details>
    <summary>
        Answer
    </summary>

React is a Component-Based JavaScript library for building user interfaces. Opposed to a full framework like [Angular](https://angular.io/) React does not ship with routing, state management and data fetching by default, these functionalities have been left to third parties. This makes react really flexible since you are able to choose the best tool for your project’s needs.

</details>

### 2. What are the `lifecycle methods` of a React component? :star:

<details>
    <summary>
        Answer
    </summary>

Every component has several `lifecycle methods` that can be overridden to run code at particular times in the process. [Here](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) is a helpful diagram to better visualize the order in which each `lifecycle method` is used.

Click [here](https://reactjs.org/docs/react-component.html#the-component-lifecycle) for more information about each `lifecycle method`

</details>

### 3. What is React Router? :star:

<details>
    <summary>
        Answer
    </summary>

[React Router](https://github.com/ReactTraining/react-router) is the standard routing library for React. React Router helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

</details>

### 4. Explain the `Virtual DOM`, and a pragmatic overview of how React renders it to the DOM. :star:

<details>
    <summary>
        Answer
    </summary>

In React, for every DOM object, there is a corresponding "virtual DOM object." A virtual DOM object is a representation of a DOM object, like a lightweight copy.

When you render a JSX element, every single virtual DOM object gets updated. This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called "diffing."

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM

</details>

### 5. Explain the purpose of render() in React. :star:

<details>
    <summary>
         Answer
    </summary>

The purpose is to render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

If the React element was previously rendered into container, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React element.

`ReactDOM.render(element, container[, callback])`

Click [here](https://reactjs.org/docs/react-dom.html#render) for more info on the `render()` method

</details>

### 6. What is arrow function in React? :star:

<details>
    <summary>
        Answer
    </summary>
    
The fat arrow => is used to define anonymous functions. There are two important differences in the behavior of these functions, compared to functions defined with function.
First, the binding for the keyword this is the same outside and inside the fat arrow function. This is different than functions declared with function, which can bind this to another object upon invocation. Maintaining the this binding is very convenient for operations like mapping: this.items.map(x => this.doSomethingWith(x)).
Second, fat arrow functions don't have an arguments object defined. You can achieve the same thing using the spread syntax: (...args) => doSomething(args[0], args[1]).


</details>

### 7. Why would you use `React.Children.map(props.children, () => )` instead of `props.children.map(() => )`? :star:

<details>
    <summary>
        Answer
    </summary>
    
Since this.props.children can have one element, multiple elements, or none at all, its value is respectively a single child node, an array of child nodes or undefined. Sometimes, we want to transform our children before rendering them — for example, to add additional props to every child. If we wanted to do that, we'd have to take the possible types of this.props.children into account. For example, if there is only one child, we can't map it.


</details>

### 8. how events are handled in React? :star:

<details>
    <summary>
        Answer
    </summary>
    
React creates its own event system which is fully compatible with W3C object model. All browser’native events are wrapped by instances of Synthetic Event. It provides a cross-browser interface to a native event. That means you do not need to worry about incompatible event names and fields. Besides, React event system is implemented through event delegation and also has a pool of event objects to reduce memory overhead.


</details>

### 9. What is JSX in React? :star:

<details>
    <summary>
        Answer
    </summary>
    
JSX can best be thought of as a markup syntax that very closely resembles HTML.It is more or less like the combination of Javascript + XML. JSX makes writing React components, the building blocks of React UI, easier by making the syntax developers use for generating these strings of HTML almost identical to the HTML they will inject into the web page.JSX is one of best ReactJS features. Web developers will always go for an easy way out, which is why this is a great choice for many.

</details>

### 10. List some features of ReactJS? :star:

<details>
    <summary>
        Answer
    </summary>
    
1. Lightweight DOM For Better Performance
2. Easy Learning Curve
3. A desired interface can be created in a relatively easy manner.
4. Components Support And Little Dependencies

</details>

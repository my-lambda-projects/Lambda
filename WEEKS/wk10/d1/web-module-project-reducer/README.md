# The Reducer Pattern Module Project: The Calculator

This module explored the reducer pattern. During the module, you studied what immutability is, what reducers, actions and dispatch are, and how to use the reducer hook. In this project, you will practice each of the steps of building state and actions into an application. We will do this by both adding in and building from scratch all of the pieces of the reducer pattern.

## Objectives

- Understand how to use useReducer hook.
- Get comfortable connecting a reducer state to an application's UI.
- Successfully connect UI user events to the dispatching of reducer actions.
- Understand how to create reducer cases and the action creators that trigger them.
- Learn how to step through and test thoroughly each step of the process.

## Introduction

In this project, you will build an complete a simple calculator app that can add, multiply, subtract and clear numbers in any order as well as add in memory save and recall features. You will start by adding in missing pieces to the code and complete the process by building features in to the UI, reducer and actions files from scratch.

This simplified calculator adds the entire number selected, rather then adds digits into end of number. In the end of the process, your calculator should function as follows:

![Calculator Example](project-goals.gif)

**_Make sure to complete your tasks one at a time and complete test each task before proceding forward._**

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] cd into the project base directory `cd web-module-project-reducer-pattern`
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`

### Task 2: Project Requirements

#### Connect The Reducer

> _Let's start our process by connecting our UI to our reducer and initial state._

- [ ] Take a tour of application, in particular the `App.js`, `/reducer/index.js`, and `/action/index.js` files.
- [ ] Note that the `TotalDisplay` component takes in a value and displays it in a styled textarea. YOU WILL NOT NEED TO MODIFY THIS COMPONENT.
- [ ] Note that the `CalcButton` component takes in an `onClick` method and a value, displays that value and attaches the passed `onClick` method to the button ui. YOU WILL NOT NEED TO MODIFY THIS COMPONENT.
- [ ] Within App.js, import the useReducer hook, our application's reducer and initialState object.
- [ ] Use useReducer hook to get access to the application state and the dispatch function.

#### Display our state within the UI.

> _We now have access to the state within our App component (You can even test this using console.log or your React dev tools). Let's render the state as is on our screen._

- [ ] Replace "X" with a reference to `state.operation` within the operation element.
- [ ] Replace "0" with a reference to `state.memory` within the memory element.
- [ ] Replace "0" with a reference to `state.total` when passing a value to our TotalDisplay component.
- [ ] Check to see that your total, operation and memory display in the UI match your initialState (100, \* and 100 respectively)
- [ ] **Test** that you are connected to state by changing the initialState value in your reducer to:

```
export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}
```

- [ ] Check to see that your display correctly reflects the change to your state.

#### Connect a premade action.

> _Now that we can see our state, let's change allow the user to change it. Let's start with a simple premade action...adding one to our total._

- [ ] Note the `ADD_ONE` action case (in ./reducer/index.js) and `addOne` action creator (in ./actions/index.js). This action adds 1 to our total.
- [ ] Import the `addOne` action creator into App.js.
- [ ] Within `App.js`, create an event handler connected to the 1 button's `onClick` method.
- [ ] Within your event handler, dispatch the `addOne` action creator.
- [ ] **Test** that your event is correctly connected by pushing the 1 button in the browser. Your total should increase by 1.
- [ ] **Think** about the path of execution from the clicking of the one button to the rendering of the updated total. What is the order of execution? Within the `Understanding-Question.md` file, write out in your own words the steps of that process.

#### Connect a better premade action.

> _Adding indivisual actions for every number would be tedious. Let's add in an action that can work for ALL numerical input_

- [ ] Note the `APPLY_NUMBER` action case (in ./reducer/index.js) and `applyNumber` action creator (in ./actions/index.js). This action adds, multiplies or subtracts a number passed into the action creator.
- [ ] Import the `applyNumber` action creator into `App.js.`
- [ ] Remove or comment out the `addOne` event handler from the 1 button.
- [ ] Create an eventhandler that takes in a number as an argument and dispatches `applyNumber` with it.
- [ ] Attach that eventhandler to the 1 button's `onClick` method, passing in a 1 as an argument. (Remember that we pass a function into that click handler, not the execution of a function)
- [ ] **Test** that clicking the one button still adds one to the total display on the browser.
- [ ] Connect all other number buttons to your new event handler, passing in their respective values.
- [ ] **Test** that clicking on each button will add its respective value to the total display.

#### Create and connect an action creator.

> _Right now our application only adds. Let's change that and give you practice creating and connecting action creators of your own!_

- [ ] Note the `CHANGE_OPERATION` action case (in `./reducer/index.js`). This reducer case takes in a operator value (+, \* or -) and assigns it to state.
- [ ] Create an action creator (in `./actions/index.js`) that takes in an operator as an argument and creates an action object with the type `CHANGE_OPERATION.`
- [ ] Import in your new action creator into `App.js.`
- [ ] Create and attach event handlers to the `+`, `-` and `*` buttons that dispatch your new action creator. Make sure you pass in the appropriate operator string in each case.
- [ ] **Test** that you can successfully change operators and apply numbers in each case.

#### Create and connect a reducer case and action creator.

> _Now let's add in the clear display feature. For this, you will be doing every part of the reducer / action creator process._

- [ ] Within `./reducers/index,` add in a case for `CLEAR_DISPLAY`. Clear display should set the total value in state to 0.
- [ ] Within `./actions/index,` add in an action creator and action string constant to for `CLEAR_DISPLAY`. Make sure to import that constant into your reducer file.
- [ ] Within `App.js,` import in your clearDisplay action creator.
- [ ] Create and connect an event handler to the "CE" button that dispatches your clearDisplay action creator.
- [ ] **Test** that your clearDisplay button works as expected.

#### Add in memory functions from scratch.

> _Congratulations! You have gone through the entire process for adding an action to your app! Now, see if you can follow the same process (reducer case => action creator => UI connection) for the following app features. IN EACH CASE, ALWAYS TEST THAT YOUR FEATURE WORKS BEFORE PROCEEDING FORWARD._

- [ ] When `M+` is pressed, the current memory value should be set to the current total value. Test by seeing the result of memory in the UI.
- [ ] When `MR` is pressed, the current memory value should be applied to the current total value(See the APPLY_NUMBER case). Test by adding a value to memory and then seeing if the total updates correctly when pressed.
- [ ] When `MC` is pressed, the current memory value should be set to zero. Test by adding a value to memory and then seeing the memory value reset to zero when pressed.

### Task 3: Stretch goals

- [ ] There is a version of the calculator focuses on adding individual digits, rather then entire numbers. How do you imagine adding an individual digit to the total state?
- [ ] [Here is an example](https://freshman.tech/calculator/) of a (non-reducer) approach to building an javascript calculator. Feel free to make a new branch and use the basic ideas in the post to build a new version of the calculator.

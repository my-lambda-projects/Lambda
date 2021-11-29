# Unit Testing React Module Project: Stranger Things

This module explored passing props into test components, rerendering components and using mocks to both monitor functional props and override the functionality of external modules. In this project, you will practice each of these practices in the testing of an application that displays TV show data.

## Objectives
- Understand how to test the effects of passing specific props into a component
- Understand how to monitor the behavior of functional mock props.
- Understand how and when to test using the rerender method
- Learn how to mock the use an external module

## Introduction
As a developer, you will often be asked to write tests for the feature you are building and even on features other developers have built. In this project, we will mimic a situation where you are asked to test someone else's code.

Get the project fired up and start using it as a user would. Try to go through the user sequences for this feature that you think users would go through. Once you have those in mind, you will have an idea of what to test in your application.

![Stranger Example](project_example.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceeding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-reducer-pattern`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`
- [ ] With each saved change in your editor, the test runner will re-run all the tests
- [ ] **IMPORTANT** If a test fails, use the test runner's error messages to find out why it is failing

### Task 2: Project Requirements
#### The Episode Component
> *This component displays a single episode worth of data. To test it, let's try our some different varieties on what we should pass into our component's props.*

* [ ] Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
* [ ] Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. **Use at least then 3 different types of expect statements to test the the existence of the summary value.**
* [ ] The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to `null`. Test that the alt tag of the image displayed is set to './stranger_things.png'.

### The Show Component
> *This component holds all general information on our featured show. Here we will once again work with data props, mock a function for testing and rerender our component for a change in data.*

* [ ] Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and an (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
* [ ] Test that the Show component renders when your test data is passed in through show prop and "none" is passed in through selectedSeason prop.
* [ ] Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existence)
* [ ] Test that when your test data is passed through the show prop, the same number of season select options appear as there are seasons within your test data.
* [ ] Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select DOM element and [userEvent reference materials](https://testing-library.com/docs/ecosystem-user-event/) to see how to trigger a selection.
* [ ] Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.

### The Display Component
> *This component holds the state values of the application and handles api calls. In this component's tests, you work with mocking external modules and working with async / await / waitFor*
* [ ] Test that the Display component renders without any passed in props.
* [ ] Rebuild or copy the show test data element as used in the previous set of tests.
* [ ] Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
* [ ] Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
* [ ] Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

### Stretch goals

- Add in a testing suite for the episodes component.

- Look up the `TVMaze` API. Add a dropdown with the titles of some other popular shows. Add the user sequence of choosing a different show to fetch data for different shows.

- Add React Router, and add the functionality to click an episode and navigate to an episode page.

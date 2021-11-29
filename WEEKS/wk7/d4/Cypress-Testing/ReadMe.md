# Module Challenge: Cypress Testing

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## Single Page Applications

## Cypress.io

## Objectives

- explain what end-to-end testing is and its importance
- use the Cypress GUI to write tests and interact with Elements
- use Cypress to test controlled input
- run all tests in without any UI

## Introduction

In this challenge you will write tests with Cypress to debug your forms app from the last objective.

## Instructions

### Task 1: Set up Project

This project is a continuation of the work you have done previously.

- [ ] CD into your old project
- [ ] Continue to make changes and push to the same branch
- [ ] Install Cypress with npm.
      `npm install cypress --save-dev`
- [ ] run `npx cypress open`, After a moment, the Cypress Test Runner will launch.
- [ ]  Locate the integration folder at cypress/integration in your code editor
- [ ]  Create a form_test.js file.
- [ ]  Watch the Cypress Test Runner update the list of specs.
- [ ] Launch Cypress in interactive mode.
      
*Note:* 
You will see an error that says "No tests found in your file:" with your particular file path. This is because we have not written any tests yet. Now you will start writing tests.

### Task 2a: Write and Run Tests (MVP)

In order to complete this challenge you will need to write and run the following tests. They do *not* need to pass, so long as the reasons they are failing is legitimate.

Set up tests that will...

- [ ]  Get the `Name` input and type a name in it.
- [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
- [ ]  Get the `Email` input and type an email address in it
- [ ] Get the `password` input and type a password in it
- [ ]  Set up a test that will check to see if a user can check the terms of service box
- [ ] Check to see if a user can submit the form data
- [ ] Check for form validation if an input is left empty

### Task 3: Stretch Goals

If you have time, write and run different tests based on common issues you have encountered working on this code for the past few days.

## FAQs

**What if not all of my tests pass?**

*Depending on the quality of your code from previous lessons, your tests might not pass. That is quite alright! The purpose of this project is to design tests that point out errors. As such, you just need to be sure that the tests are failing because of issues with your web page code, not issues with your test code.*

****

## Resources

📚 [Cypress Documentation](https://www.cypress.io/how-it-works/)

🤔 [Blog: Setting up Tests with Cypress](https://medium.com/better-practices/end-to-end-testing-with-cypress-bfcd59633f1a)

## Submission Format

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**

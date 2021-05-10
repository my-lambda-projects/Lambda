# Module Project: React Components and Components State

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored React components and component state. During the module, you studied what React is, what React components are and how to build them, what state is and how to make a component stateful, and how to update component state with click handlers. In this project you will demonstrate proficiency of these subjects and principles by fleshing out several stateful components.

## Introduction

**Read these instructions carefully. Understand exactly what is expected _before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

### Description

This project includes a `src/components` folder containing several React components. In their current form these components are stateless and display hard-coded information only. You will make the app interactive by going into each component, adding state and implementing event handlers and helper functions to allow the users of the app to update state by interacting with the page.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN fork of the repository using your terminal.
- [ ] CD into the project base directory.
- [ ] Download project dependencies by running `npm install`.
- [ ] Start up the app using `npm start`.
- [ ] Optionally run tests using `npm test`. (The app must be running on `http://localhost:1234`)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: `git push origin <firstName-lastName>`.

### Task 2a: Minimum Viable Product

1. Each component has the required slices of state.
2. Each component's event handlers allow the user of the app to update state.
3. Updated state is correctly reflected in the DOM for each component.

#### Steps

- [ ] You will add functionality to all components inside inside `src/components`.
- [ ] Work on the components **in the same order in which they display in Chrome** (to go from easiest challenge to hardest).
- [ ] Each file includes a link to a video, and a set of instructions which can be summarized as:
  - Watch the video demoing the finished component, and think about how much state is needed.
  - Create the necessary slices of component state using the state hook.
  - Fix the JSX so it displays information derived from state, instead of hard-coded data.
  - Fix the event handlers so they allow the user to update state by interacting with the page.

### Task 3: Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

#### Stretch Goal 1 (To-Do List)

Create a `Todos.js` file inside `src/components`. Find a tutorial online on how to build a to-do list in React using component state (no Redux!), and implement it. We should be able to render a list of to-dos, and cross out (or remove) individual to-dos to mark them complete.

#### Stretch Goal 2 (Tic-Tac-Toe)

Build another component inside this project with a game of Tic Tac Toe. The positions of the 'Xs' and the 'Os' over time need to be maintained in a slice of state, so that the JSX may display the contents of the 3 x 3 grid accurately. Only empty squares may be selected by the human player, and the event handler that deals with these clicks will have to include quite a bit of logic:

  1. Does the latest move by the human player mean **the game is over**? (Game over, then!)
  2. Is the game **immediately winnable by the computer** by making a certain move? (Make that move!)
  3. Can the computer **block the human from winning on their next move** by making certain move? (Prevent defeat!)
  
The move by the computer should probably be random if the previous checks turn out negative, but you'll be surprised at how smart the "game engine" will feel.

## Submission Format

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**

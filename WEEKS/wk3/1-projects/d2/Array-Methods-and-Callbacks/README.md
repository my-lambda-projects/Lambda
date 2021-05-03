# FIFA Challenge - JavaScript-Foundations

## Advanced JavaScript

## Array Methods and Callbacks
*Note*: Please add the LIVE server extension to your visual studio code and use it for this project. https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer - you will not be able to view this data in the browser or see your console logs without it. 

## Objectives

- Array Methods - demonstrate ability to use `.forEach()` `.map()` `.reduce()` `.filter()` and describe their use cases
- Callbacks - demonstrate the proper use a of a callback function by passing a function to another function as a parameter
  
## Introduction

In this challenge, you will work with a data set summarizing every World Cup game from 1930 to 2014. As web developers, you will often work with JSON data to interact with servers, summarize data, get images to your page, and more. It is crucial that you cultivate a thorough understanding of data structures and methods early in your career.

The data set you are given (loaded in at the top of `index.js`) contains a report for every game played at every stage in the FIFA World Cup tournament since 1930. Each report is an object with many keys, including `Year`,`Stage`, `Stadium`,  `Home Team Name`,`Home Team Goals`, `Away Team Name`, and `Away Team Goals`. There is a plethora of other data in this set as well, but we won't spend time working with it. You can read more about the data [here](https://www.kaggle.com/abecklas/fifa-world-cup) or look at the sample object below if you are interested!

Your goal today will be to manipulate the data using array methods and callbacks to create interesting statistics.

### Sample Data

```js
  {
      "Year": 1930,
      "Datetime": "13 Jul 1930 - 15:00",
      "Stage": "Group 1",
      "Stadium": "Pocitos",
      "City": "Montevideo",
      "Home Team Name": "France",
      "Home Team Goals": 4,
      "Away Team Goals": 1,
      "Away Team Name": "Mexico",
      "Win conditions": "",
      "Attendance": 4444,
      "Half-time Home Goals": 3,
      "Half-time Away Goals": 0,
      "Referee": "LOMBARDI Domingo (URU)",
      "Assistant 1": "CRISTOPHE Henry (BEL)",
      "Assistant 2": "REGO Gilberto (BRA)",
      "RoundID": 201,
      "MatchID": 1096,
      "Home Team Initials": "FRA",
      "Away Team Initials": "MEX"
    },
```

## Instructions

### Task 1: Set up Project

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test:watch` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Task 2: Minimum Viable Product

Find the file `index.js` and complete the tasks until all of your tests pass.

You may want to use the [World Cup summary data](https://www.foxsports.com/soccer/fifa-world-cup/history) on Fox Sports to check your math as you go.

### Task 3: Stretch Goals

After you have completed the requirements, create a new file called `stretch.js` and practice with Array methods more.

See if you can complete one or more of the following challenges:

- [ ] Create a function that takes country initials as a parameter and returns their total number of World Cup appearances.
- [ ] Account for ties in your 'finals' data set
- [ ] Create a function that takes country initials as a parameter and determines how many goals that country has scored in World Cup games since 1930.
- [ ] Use `.map()` to format country names into `<h1>` HTML headers.

## FAQ

**Where is my data?**

Your data lives in a file called `fifa.js`. In order to work with and use your data in the `index.js` file, we used the import function of JavaScript. The first line in your file should be `import { fifaData } from "fifa.js"`, which will save all of the data into an object called fifaData. You can confirm that your data has been imported correctly by running `console.log(fifaData)` in your `index.js` file.

**What about ties?**

In some cases, when the outcome of a game was decided by penalty kicks, the home team and away team will have the same number of goals scored. You can ignore ties for the purpose of these tasks, but you can also look to the "Win conditions" key  and splice out the winning team as a stretch goal. (See example below)

```
Win conditions": "France win on penalties (3 - 4)",
````

## Resources

📚 [Examples of .map, .reduce, and .filter](https://itnext.io/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f)

🤷‍♀️ [What the Heck is a Callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

🤝[Working with JSON in JavaScript](https://www.ma-no.org/en/programming/javascript/working-with-json-in-javascript)

⚽️ [World Cup Summary Data to Check Work](https://www.foxsports.com/soccer/fifa-world-cup/history)

👀 [List of FIFA World Cup finals on Wikipedia](https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals)

## Submission Format

Please see Canvas for cohort specific submission instructions

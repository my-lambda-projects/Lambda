import { fifaData } from "./fifa.js";

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter((item) => {
  return item["Year"] === 2014 && item["Stage"] === "Final";
});

console.log(finals2014);
//(a) Home Team name for 2014 world cup final
console.log(finals2014[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log(finals2014[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(finals2014[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(finals2014[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
console.log(finals2014[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
  return data.filter((item) => item.Stage === "Final");
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
  return callback(array).map((finals) => finals.Year);
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(array, callback) {
  let winners = [];
  callback(array).forEach((game) => {
    let x = game["Home Team Goals"];
    let y = game["Away Team Goals"];
    if (x > y) {
      winners.push(game["Home Team Name"]);
    } else if (x < y) {
      winners.push(game["Away Team Name"]);
    }
  });
  return winners;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callback1, callback2) {
  let winners = callback2(array);
  let years = callback1(array);
  let strings = [];
  for (let i = 0; i < winners.length; i++) {
    strings.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
  }
  return strings;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callback) {
  const sum = callback.reduce(
    (acc, val) => acc + (val["Home Team Goals"] + val["Away Team Goals"]),
    0
  );
  return (sum / callback.length).toFixed(2);
}

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  return getFinals(data).reduce((acc, game) => {
    if (game["Home Team Initials"] === teamInitials) {
      if (game["Home Team Goals"] > game["Away Team Goals"]) {
        return acc + 1;
      }
    } else if (game["Away Team Initials"] === teamInitials) {
      if (game["Home Team Goals"] < game["Away Team Goals"]) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);
}

console.log(getCountryWins(fifaData, "FRG"));

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
  const finals = getFinals(data);
  let finalTeams = [];
  finals.forEach((game) => {
    if (!finalTeams.includes(game["Home Team Name"])) {
      finalTeams.push(game["Home Team Name"]);
    }
    if (!finalTeams.includes(game["Away Team Name"])) {
      finalTeams.push(game["Away Team Name"]);
    }
  });
  const finalTeamScores = finalTeams.map((team) => {
    let { goals, games } = finals.reduce(
      (accArr, game) => {
        if (game["Home Team Name"] === team) {
          accArr.goals += game["Home Team Goals"];
          accArr.games += 1;
        }
        if (game["Away Team Name"] === team) {
          accArr.goals += game["Away Team Goals"];
          accArr.games += 1;
        }
        return accArr;
      },
      { goals: 0, games: 0 }
    );
    return { team, goals, games };
  });
  let bestAvg = { team: "none", avg: 0 };
  finalTeamScores.forEach((team) => {
    const avg = team.goals / team.games;
    if (avg > bestAvg.avg) {
      bestAvg.team = team.team;
      bestAvg.avg = avg;
    }
  });
  return bestAvg;
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data) {
  const finals = getFinals(data);
  let finalTeams = [];
  finals.forEach((game) => {
    if (!finalTeams.includes(game["Home Team Name"])) {
      finalTeams.push(game["Home Team Name"]);
    }
    if (!finalTeams.includes(game["Away Team Name"])) {
      finalTeams.push(game["Away Team Name"]);
    }
  });
  const finalEnemyTeamScores = finalTeams.map((team) => {
    let { goals, games } = finals.reduce(
      (accArr, game) => {
        if (game["Home Team Name"] === team) {
          accArr.goals += game["Away Team Goals"];
          accArr.games += 1;
        }
        if (game["Away Team Name"] === team) {
          accArr.goals += game["Home Team Goals"];
          accArr.games += 1;
        }
        return accArr;
      },
      { goals: 0, games: 0 }
    );
    return { team, goals, games };
  });
  let worstAvg = { team: "none", avg: 0 };
  finalEnemyTeamScores.forEach((team) => {
    const avg = team.goals / team.games;
    if (avg > worstAvg.avg) {
      worstAvg.team = team.team;
      worstAvg.avg = avg;
    }
  });
  return worstAvg;
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working");
  return "bar";
}
export default {
  foo,
  getFinals,
  getYears,
  getWinners,
  getWinnersByYear,
  getAverageGoals,
};

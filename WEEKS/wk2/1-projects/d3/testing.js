/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with newFlavors.

Use the getAverageWordLength function below to do the following:
    1. Receive the newFlavors array
    2. Count how many words per item in the array
    3. Return the average number of words per item in the array

    For example: getAverageWordLength(newFlavors) should return a number between 0 and 3.     
*/

const newFlavors = [
  "Date night", //===>
  "U.S.S Butterscotch (Stranger Things special)",
  "Honey Almond",
  "Mint Chocolate Chip",
  "Chocolate",
  "Oreo® Cookies'n Cream",
  "Chocolate Chip",
  "Pralines 'n Cream",
  "Very Berry Strawberry",
  "Chocolate Chip Cookie Dough",
  "Old Fashioned Butter Pecan",
  "Jamoca®",
  "Jamoca® Almond Fudge",
  "Reese's® Peanut Butter Cup",
  "Rocky Road",
  "Peanut Butter ’n Chocolate",
  "Gold Medal Ribbon®",
  "World Class® Chocolate",
  "Cherries Jubilee",
  "Chocolate Fudge",
  "Daiquiri Ice",
  "Rainbow Sherbet",
  "Rainbow Swirl",
];

function getAverageWordLength(array) {
  let wordLengthArr = [];
  let sum = 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i].length;
    console.log(array[i]);
    console.log("total:", total);
    let wordsArr = array[i].split(" ");
    wordLengthArr.push(wordsArr.length);

    console.log("wordsArr: ", wordsArr);
  }
  console.log("wordLengthArr: ", wordLengthArr);
  for (let i = 0; i < wordLengthArr.length; i++) {
    sum += wordLengthArr[i];
  }
  let avg = sum / array.length;
  return avg;
}

getAverageWordLength(newFlavors);

console.log(
  " getAverageWordLength(newFlavors): ",
  getAverageWordLength(newFlavors)
);

const newFlavors = [
  "Date night",
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

const seasonalFlavors = [
  "America's Birthday Cake",
  "Baseball Nut®",
  "Blueberry Cheesecake",
  "Bourbon Street Pecan Pie",
  "Brownie Bar Mashup",
  "Cherry Cordial with Kisses",
  "Chocolate Mousse Royale",
  "French Vanilla",
  "Eggnog",
  "German Chocolate Cake",
  "Icing on the Cake",
  "Love Potion #31",
  "New York Cheesecake",
  "Nutty Coconut",
  "Peppermint",
  "Strawberry Cheesecake",
  "Rock ’n Pop Swirl",
  "Reese’s Peanut Butter Cup",
  "Trick Oreo Treat",
  "Winter White Chocolate",
  "made with Snickers®",
  "made with M&M's®",
  "Heath®",
  "Mango Tango",
];

const regionalFlavors = [
  "Pink Bubblegum",
  "Caramel Macchiato",
  "York Peppermint Pattie",
  "Cotton Candy",
  "Orange Sherbet",
  "Grape Ice",
  "Watermelon Ice",
  "Miami Vice Sorbet",
  "Splish Splash®",
  "Wild 'n Reckless Sherbet",
  "Lemon Custard",
  "Oregon Blackberry",
  "Bananas ‘n Strawberries",
  "Mississippi Mud",
  "Rum Raisin",
  "Creole Cream Cheese",
  "Chocolate Almond",
  "Fudge Brownie",
  "Banana Nut",
  "Black Walnut",
  "Cotton Candy Crackle",
  "Quarterback Crunch",
  "Chocolate Chocolate Chip Cheesecake",
  "Caramel 'n' Cookies",
];

const originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond",
];
const fs = require( 'fs' );
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



function getRandomFlavors(arr1, arr2, arr3, arr4) {
  let combined = [...arr1, ...arr2, ...arr3, ...arr4 ];
  console.log('combined : ', combined );
  let randArr = shuffle( combined );
  console.log('randArr', randArr );
  return randArr.splice(0,randArr.length-(randArr.length-31));
  
}
let data = getRandomFlavors(
  originalFlavors,
  newFlavors,
  seasonalFlavors,
  regionalFlavors
).toString();
console.log(getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors));

fs.writeFile("Output.txt", data, (err) => {
  // In case of a error throw err.
  if (err) throw err;
}); 

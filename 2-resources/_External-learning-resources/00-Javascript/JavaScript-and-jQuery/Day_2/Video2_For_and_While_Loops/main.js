var myFavShows = [
  "Game of Thrones",
  "Friends",
  "Breaking Bad",
  "The Wire",
  "Humans",
  "Twin Peaks",
  "The Sopranos",
];

// while loop. ... for loop.

var i;
var shows = "";

for (i = 0; i < myFavShows.length; i++) {
  shows += `${i + 1} - ${myFavShows[i]} \n`;
}

console.log(shows);

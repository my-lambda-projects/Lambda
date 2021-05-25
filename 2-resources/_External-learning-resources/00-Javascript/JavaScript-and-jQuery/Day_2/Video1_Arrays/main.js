var myFavShows = [
  "Game of Thrones",
  "Friends",
  "Breaking Bad",
  "The Wire",
  "Humans",
  "Twin Peaks",
  "The Sopranos",
];

top5Shows(myFavShows);

function top5Shows(shows) {
  shows.sort();
  console.log(`
    Here Are My 5 Favorite Shows!
    -----------------------------
    
    1. ${shows[0]}
    2. ${shows[1]}
    3. ${shows[2]}
    4. ${shows[3]}
    5. ${shows[4]}
  `);
}

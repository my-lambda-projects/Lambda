///////////////Reviews (MVP)///////////////////
const reviews = [ {
    name: "Daniela",
    rating: 5,
    feedback: "Beautiful atmosphere and wonderful vegan options!"
  },
  {
    name: "Jack",
    rating: 3,
    feedback: "A little too hipster for my taste, but the burger was decent, if overpriced"
  },
  {
    name: "Miranda",
    rating: 4,
    feedback: "fun trivia and cool vibes"
  },
  {
    name: "Wen",
    rating: 4.5,
    feedback: "I don't leave my house often, but when I do, it's for this place. Highly reccomend."
  },
  {
    name: "Brett",
    rating: 3,
    feedback: "great selection of snacks and a nice cafe area to get work done during the day."
  },
  {
    name: "Julius",
    rating: 2,
    feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it."
  },
  {
    name: "Lauren",
    rating: 4,
    feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."
  },
  {
    name: "Reyna",
    rating: 3.5,
    feedback: ""
  },
]








///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** 💪💪💪💪💪💪💪💪💪💪 STRETCH 1: 💪💪💪💪💪💪💪💪💪💪 
Use the getReviewsByRating function below to do the following:
  1. Receive the array that holds all the reviews
  2. Receive a rating
  3. Return an array with all the reviews in that range
  For example: getReviewByRating(reviews, 4) would return these reviews in the 4 range (4-4.9):
  [
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}
  ]
*/
/*
function getReviewByRating( array, rate ) {
  let rangeBottom = Math.floor( rate );
  let rangeTop = Math.ceil( rate );
  let reviewRange = [];
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[ i ].rating >= rangeBottom && array[ i ].rating < rangeTop ) {
      reviewRange.push( array[ i ] )
    }
  }
  return reviewRange
}
console.log( getReviewByRating( reviews, 4.5 ) )
*/


/*
function arrayFilter( arr, func ) {
  for ( let elem of arr ) {
    if ( func( elem ) ) {
      return elem
    }
  }
  return undefined
}
*/

function getReviewByRating( arr, numb ) {
  let result;
  result = arr.filter( curElement => {
    return ( Math.floor( numb ) <= curElement.rating && curElement.rating < Math.ceil( numb ) );

  } );

  return result;
}

console.log( "result ", getReviewByRating( reviews, 4 ) );

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪💪   
Use the getLongReviews function below to do the following:
  1. Receive the array that holds all the reviews
  2. Return an array with all the reviews that have more than 15 words in their feedback
  For example: getLongReviews(reviews) would return:
  [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }
  ]
*/
// curElement === arr[i] == object
function getLongReviews( arr ) {
  let result = arr.filter( ( curElement ) => {
    return curElement.feedback.length >= 15;
  } )
  return result;
}
console.log( getLongReviews( reviews ) )
getLongReviews( reviews )

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 3: 💪💪💪💪💪💪💪💪💪💪 
This stretch goal does not use the reviews data!  You create your own object in this stretch goal.
Use the carMaker function below to do the following:
  1. Receive a value representing the odometer (how many miles it's been driven) and use that when creating the object
  2. Create a drive method inside the object that increases the odometer value
  3. Return the object
  4. The returned object with the odometer value should have the following characteristics:
     a. The drive method which, when called, takes a distance value as its parameter
     b. The drive method should also cause the odometer value in the object to be increased by the distance
     c. Then the drive method should return the updated value of the odometer
  For example: Let's say we created the object in the variable car1 with an odometer value of 10.
  Then we called car1.drive(100)
  It would return 110 because it was created with 10 as the odometer and we added 100 to it with the drive method 
*/

function carMaker( miles ) {
  const carObj = {
    odometer: miles,
    drive: function ( distance ) {
      this.odometer += distance;
      return this.odometer;
    }
  }
  return carObj;
}

let car1 = carMaker( 10 );

console.log( car1.drive( 100 ) );

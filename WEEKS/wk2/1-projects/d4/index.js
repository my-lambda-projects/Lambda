/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.*/

///////////////Menu Items (MVP)///////////////////
const latte = {
  name: "Cafe Latte",
  price: 4,
  category: "Drinks"
};
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast"
};

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1a: Make a function that builds objects🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Add to the function createMenuItems below so it will create objects following the same format found above for latte and breakfastBurrito (name, price, category).  
The function should:
  1. Receive values for the object that will be created as parameters
  2. Create and return an object using the received values 
  
  Example createMenuItem('tacos', 8, 'Lunch') should return {name: 'tacos', price: 8, category: 'Lunch'}
*/

function createMenuItem( name, price, category ) {
  return {
    name: name,
    price: price,
    category: category
  }
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1b: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Invoke your function!
Test your createMenuItems function by doing the following:
  1. Pass values to createMenuItems in order to create the objects (menu items)
  2. Create at least 3 menu items (objects) of your choosing making sure they have name, price, and category keys
  3. Log each returned object to the console  
  
  For example: createMenuItem("pizza",5,"lunch") would return this as the object: {name:"Pizza",price:5,category:"lunch"}
*/
createMenuItem( "Pizza", 6.34, "Dinner" );


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to the 
burger object below that automatically calculates price depending on the a string received as a parameter. 
Using the burger object below do the following:
  1. Add a method called discount to the burger object 
  2. The discount method should accept a string as a parameter (example: "teacher", "student", or "public")
  3. Depending on the string, it will return the correct discounted price
  4. Check your work by invoking the function and passing in 'teacher', 'student', or 'public' as your arguments to ensure they are returning the correct price.
  For example: burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2
*/

export const burger = {
  name: "Burger",
  price: 18,
  category: "Lunch",
  discount: function ( person ) {
    if ( person == "teacher" || person == "student" ) {
      return this.price - ( this.price * .25 );
    } else {
      return this.price - ( this.price * .10 )
    }
  }
}

// console.log(burger.discount("teacher"));

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

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Using the reviews array above:
  1. log only Julius' feedback to the console - no function needed 
*/
for ( let i = 0; i < reviews.length - 1; i++ ) {
  // if(reviews[i].name=="Julius")
  //  console.log("result ",reviews[i].feedback)
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Using the reviews array above do the following: (no function needed) 
  1. Following the same format (name, rating, feedback), add a new fictitious review object to the reviews array
  2. log the whole array to the console, make sure the new review is inside of it   
*/
const fictitious = {
  name: "Bryan",
  rating: 5,
  feedback: "one"
}
reviews.push( fictitious )
// console.log(reviews)
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Reyna's feedback is missing! Use what you know to do the following: (no function needed) 
  1. Add this feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
  2. log the reviews array to the console to check your work
*/





/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function to return a review based on the index of the review in the array.
Use the getReviewByIndex function below to do the following:
  1. Receive an array
  2. Receive a number which is the desired index in the array
  3. The function should return the following string: "{name} gave the restaurant a {rating} star review, and their feedback was: {feedback}"
  For example: getReviewByIndex(reviews,0) would return: "Daniela gave the restaurant a 5 star review, and their feedback was: Beautiful atmosphere and wonderful vegan options!"
*/


function getReviewByIndex( arr, numb ) {
  return `${arr[numb].name} gave the restaurant a ${arr[numb].rating} star review, and their feedback was: ${arr[numb].feedback}`
}
getReviewByIndex( reviews, 0 );



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Write a function to get information about the most recent (last) review called `getLastReview`
Use the getLastReview function below to do the following:
  1. Receive an array of objects as a parameter
  2. Return the last index as a string in the format: "{name} gave the restaurant a {rating} star review, and their feedback was: {feedback}"
  3. Invoke the function with the reviews array as the argument
  
  For example: getLastReview(reviews) would return: "Reyna gave the restaurant a 3.5 star review, and their feedback was: this place is chill with really cool people, great for getting work done on weekdays".
*/


function getLastReview( obj ) {
  let lastRev = ( obj[ obj.length - 1 ].name + " gave the restaurant a " + obj[ obj.length - 1 ].rating + " star review, and their feedback was: " + obj[ obj.length - 1 ].feedback )
  return lastRev;
}

getLastReview( reviews );




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
    return ( numb <= curElement.rating && curElement.rating < numb + 1 );
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
let carObj;
function carMaker( miles ) {
  carObj = {
    odometer: miles,
    drive: function ( distance ) {
      this.odometer += distance;
      return this.odometer;
    }
  }
  return carObj
}

let car1 = carMaker( 10 );

console.log( car1.drive( 100 ) );


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log( 'its working' );
  return 'bar';
}

export default {
  foo,
  createMenuItem,
  getReviewByIndex,
  getLastReview,
}

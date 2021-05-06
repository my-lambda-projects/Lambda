// Imports at the top of the file!
// We never nest imports inside blocks of code!

const axios = require( 'axios' );
// console.log(axios)

// console.log("1. about to fetch data with axios")
// http vs. tcp/ip
// lambda-times-api.herokuapp.com/ -- human-readable form of the IP address 192.75.853.
// what is /friends? not a directory/file, just an endpoint

// pending vs. fulfilled vs rejected vs settled

// axios.get("https://lambda-times-api.herokuapp.com/friends")
//   .then(futureData => {
//     console.log("2. here is our future data!", futureData)
//   })
//   .catch(drama => {
//     console.log(drama)})

// console.log("3. we requestd data with axios!")

// Before writing code to use the data returned from the API,
// explore the endpoints and data returned!

// 👉 TASK 1- Test out the following endpoints:

//  https://lambda-times-api.herokuapp.com/friends
//  https://lambda-times-api.herokuapp.com/friends/1
//  https://lambda-times-api.herokuapp.com/quotes
//  https://lambda-times-api.herokuapp.com/cards
//  https://lambda-times-api.herokuapp.com/breeds
//  https://dog.ceo/api/breeds/image/random

//  * With HTTPie (command-line HTTP Client)
//  * With Postman (HTTP Client with GUI)
//  * With Chrome and the Network Tab
//  * With JS using the native fetch [STRETCH]


fetch( "https://lambda-times-api.herokuapp.com/friends" )
  .then( response => response.json() ) // return ANOTHER promise!!!
  .then( bodyOfResponse => console.log( bodyOfResponse ) )
  .catch()

// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector( '.entry' )


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker( {
  imageURL,
  breed
} ) { // destructuring - {imageURL: 'https://', breed: 'labrador'}
  // instantiating the elements
  const dogCard = document.createElement( 'div' )
  const image = document.createElement( 'img' )
  const heading = document.createElement( 'h3' )
  // setting class names, attributes and text
  heading.textContent = `Breed: ${ breed }`
  image.src = imageURL
  image.classList.add( 'dog-image' )
  dogCard.classList.add( 'dog-card' )
  // creating the hierarchy
  dogCard.appendChild( image )
  dogCard.appendChild( heading )
  // adding some interactivity
  dogCard.addEventListener( 'click', () => {
    dogCard.classList.toggle( 'selected' )
  } )
  // never forget to return!
  return dogCard
}

// const newCard = dogCardMaker({imageURL: "", breed: "labradoodle"})
// entryPoint.appendChild(newCard)


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//     our users will download the entire axios library
//      and they can't run our index.js until they have downloaded it
//    * Projects with npm: install it with npm and import it into this file
//     this will bundle together all the necessary code (and only the necessary code)


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

// how do I send a request?
// what do I get back?

// stub out aka scaffold the axios request
axios.get("https://dog.ceo/api/breed/mastiff/images/random/5")
.then(res => { // fulfilled (and settled)
  res.data.message.forEach((imageURL) => {
    const dogCard = dogCardMaker({imageURL, breed: 'mastiff'});
    entryPoint.appendChild(dogCard)
  })
})
  .catch(err => {  // rejected (and settled)
    console.error('oh nos')
  })
  .finally(() =>{ // this runs when the promise is settled
    console.log('all done')
  })

// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)
function getDogs( breed, numDogs ) {
  const url = `https://dog.ceo/api/breed/${ breed }/images/random/${ numDogs }` // string interpolation

  axios.get( url )
    .then( res => { // fulfilled (and settled)
      const imageURLs = res.data.message
      imageURLs.forEach( ( imageURL ) => {
        const dogCard = dogCardMaker( {
          imageURL,
          breed
        } ); // this is shorthand! https://alligator.io/js/object-property-shorthand-es6/
        entryPoint.appendChild( dogCard )
      } )
    } )
    .catch( err => { // rejected (and settled)
      console.log( 'oh nos' )
    } )
    .finally( () => { // this runs when the promise is settled
      console.log( 'all done' )
    } )
}
getDogs( "mastiff", 5 )


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration




/*ORIGINAL BELOW*/

// // Imports at the top of the file!
// // We never nest imports inside blocks of code!
// import axios from "axios";
// // if you did script tag, no import is required
// 
// // console.log("check out axios: \n \n", axios);
// const result = axios.get( "https://lambda-times-api.herokuapp.com/friends" );
// console.log( result );
// 
// console.log( "1. about to fetch the data with axios" );
// result.then( ( futureData ) => {
//   // future code for when the data actually arrives
//   // freedom to assume that the data is already here
//   console.log( "2. here is the future data", futureData );
// } );
// console.log( "3. we requested the data with axios" );
// 
// // 👉 TASK 1- Test out the following endpoints:
// 
// //  https://lambda-times-api.herokuapp.com/friends
// //  https://lambda-times-api.herokuapp.com/friends/1
// //  https://lambda-times-api.herokuapp.com/quotes
// //  https://lambda-times-api.herokuapp.com/cards
// //  https://lambda-times-api.herokuapp.com/breeds
// //  https://dog.ceo/api/breeds/image/random
// 
// //  * With HTTPie (command-line HTTP Client)
// //  * With Postman (HTTP Client with GUI)
// //  * With Chrome and the Network Tab
// //  * With JS using the native fetch [STRETCH]
// 
// // 👉 TASK 2- Select the "entry point", the element
// // inside of which we'll inject our dog cards
// const entryPoint = null;
// 
// // 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// // Use this function to build a Card, and append it to the entry point.
// function dogCardMaker ( { imageURL, breed } ) {
//   // instantiating the elements
//   const dogCard = document.createElement( "div" );
//   const image = document.createElement( "img" );
//   const heading = document.createElement( "h3" );
//   // setting class names, attributes and text
//   heading.textContent = `Breed: ${ breed }`;
//   image.src = imageURL;
//   image.classList.add( "dog-image" );
//   dogCard.classList.add( "dog-card" );
//   // creating the hierarchy
//   dogCard.appendChild( image );
//   dogCard.appendChild( heading );
//   // adding some interactivity
//   dogCard.addEventListener( "click", () => {
//     dogCard.classList.toggle( "selected" );
//   } );
//   // never forget to return!
//   return dogCard;
// }
// 
// // 👉 TASK 4- Bring the Axios library into the project using one of two methods:
// //    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
// //    * Proyects with npm: install it with npm and import it into this file
// 
// // 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
// //    * ON SUCCESS: use the data to create dogCards and append them to the entry point
// //    * ON FAILURE: log the error to the console
// //    * IN ANY CASE: log "done" to the console
// 
// // 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// // that takes a breed and a count (of dogs)
// 
// // 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// // event listener that executes `getDogs`
// 
// // 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// // or request them from https://lambda-times-api.herokuapp.com/breeds
// // and loop over them, fetching a dog at each iteration// Imports at the top of the file!
// // We never nest imports inside blocks of code!
// import axios from "axios";
// // if you did script tag, no import is required
// 
// // console.log("check out axios: \n \n", axios);
// const result = axios.get( "https://lambda-times-api.herokuapp.com/friends" );
// console.log( result );
// 
// console.log( "1. about to fetch the data with axios" );
// result.then( ( futureData ) => {
//   // future code for when the data actually arrives
//   // freedom to assume that the data is already here
//   console.log( "2. here is the future data", futureData );
// } );
// console.log( "3. we requested the data with axios" );
// 
// // 👉 TASK 1- Test out the following endpoints:
// 
// //  https://lambda-times-api.herokuapp.com/friends
// //  https://lambda-times-api.herokuapp.com/friends/1
// //  https://lambda-times-api.herokuapp.com/quotes
// //  https://lambda-times-api.herokuapp.com/cards
// //  https://lambda-times-api.herokuapp.com/breeds
// //  https://dog.ceo/api/breeds/image/random
// 
// //  * With HTTPie (command-line HTTP Client)
// //  * With Postman (HTTP Client with GUI)
// //  * With Chrome and the Network Tab
// //  * With JS using the native fetch [STRETCH]
// 
// // 👉 TASK 2- Select the "entry point", the element
// // inside of which we'll inject our dog cards
// const entryPoint = null;
// 
// // 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// // Use this function to build a Card, and append it to the entry point.
// function dogCardMaker ( { imageURL, breed } ) {
//   // instantiating the elements
//   const dogCard = document.createElement( "div" );
//   const image = document.createElement( "img" );
//   const heading = document.createElement( "h3" );
//   // setting class names, attributes and text
//   heading.textContent = `Breed: ${ breed }`;
//   image.src = imageURL;
//   image.classList.add( "dog-image" );
//   dogCard.classList.add( "dog-card" );
//   // creating the hierarchy
//   dogCard.appendChild( image );
//   dogCard.appendChild( heading );
//   // adding some interactivity
//   dogCard.addEventListener( "click", () => {
//     dogCard.classList.toggle( "selected" );
//   } );
//   // never forget to return!
//   return dogCard;
// }
// 
// // 👉 TASK 4- Bring the Axios library into the project using one of two methods:
// //    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
// //    * Proyects with npm: install it with npm and import it into this file
// 
// // 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
// //    * ON SUCCESS: use the data to create dogCards and append them to the entry point
// //    * ON FAILURE: log the error to the console
// //    * IN ANY CASE: log "done" to the console
// 
// // 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// // that takes a breed and a count (of dogs)
// 
// // 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// // event listener that executes `getDogs`
// 
// // 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// // or request them from https://lambda-times-api.herokuapp.com/breeds
// // and loop over them, fetching a dog at each iteration

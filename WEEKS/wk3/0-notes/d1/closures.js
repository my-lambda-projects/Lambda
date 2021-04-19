//Nesting: is 
// A closure gives us the ability to use code that has been identified eslewhere
//we can pass valuse down but cannot pass them up.
//Closures 
// give us the ability to put functions together 
// code that's been identified elsewhere that we can use later 
// we can pass values down but we can't pass them back up 
function country( countryName ) {
  let lang1 = 'French';
  let lang2 = 'English';
  console.log( `The official languages of ${countryName} are ${lang1} and ${lang2}` );
  function province( provName ) {
    console.log( `The official languages of ${countryName} are ${lang1} and ${lang2} and ${provName} has the largest population` );
    function city( cityName ) {
      console.log( `The official languages of ${countryName} are ${lang1} and ${lang2} and ${provName} has the largest population. ${cityName} is the biggest city in ${countryName}` );
    } // this closes city
    city( 'Toronto' );
  } // this closes prov
  province( 'Ontario' );
} // this closes country
country( 'Canada' );
//----------------------------------------------
function createCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  }
}
var counter = createCounter();
console.log( "counter1: " + counter() );
console.log( "counter1: " + counter() );
const counter2 = createCounter();
console.log( "counter2: " + counter2() );

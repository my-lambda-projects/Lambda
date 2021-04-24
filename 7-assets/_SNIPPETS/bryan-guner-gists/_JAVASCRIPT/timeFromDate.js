const timeFromDate = date => date.toTimeString().slice( 0, 8 );
console.log( timeFromDate( new Date( 2021, 0, 10, 17, 30, 0 ) ) );
// Result: "17:30:00"
console.log( timeFromDate( new Date() ) );
// Result: will log the current time

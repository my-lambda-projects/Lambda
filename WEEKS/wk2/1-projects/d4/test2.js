// function carMaker( miles, distance ) {
//   const car = {
//     odo: miles,
//     drive: function ( distance ) {
//       this.odo += distance;
//       return this.odo;
//     }
//   }
//   car.drive( distance )
//   return car;
// }
// console.log( carMaker( 10, 100 ) )



let carObj;

function carMaker( miles ) {
  carObj = {
    odometer: miles,
    drive: function ( distance ) {
      console.log( ' distance : ', distance );
      console.log( '     this.odometer : ', this.odometer );
      this.odometer += distance;
      
      return this.odometer;
    }
  }
  return carObj
}

let car1 = carMaker( 10 );
console.log( carObj );
console.log( car1.drive( 100 ) );
console.log( carObj );
console.log( car1.drive( 100 ) );
console.log( carObj );

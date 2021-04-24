
// 16. Creating an Object

let newObj = {
  name: "I'm an object",
  values: [ 1, 10, 11, 20 ],
  others: '',
  '1property': 'example of property name starting with digit',
};

// 17. Figure out what keys/properties are in an object
console.log( Object.keys( newObj ) );
// Results: [ 'name', 'values', 'others', '1property' ]

// 18. Show all values stored in the object
console.log( Object.values( newObj ) );

// Results:
// [ 'I\'m an object',
//   [ 1, 10, 11, 20 ],
//   '',
//   'example of property name starting with digit' ]

// 19. Show all key and values of the object
for ( let [ key, value ] of Object.entries( newObj ) ) {
  console.log( `${key}: ${value}` );
}
// Results:
// name: I'm an object
// values: 1,10,11,20
// others:
// 1property: example of property name starting with digit

// 20. Accessing Object's Properties
// Two different ways to access properties, both produce same results
console.log( newObj.name );
console.log( newObj[ 'name' ] );

// But if the property name starts with a digit,
// we CANNOT use dot notation
console.log( newObj[ '1property' ] );

// 21. Adding a Method to an Object
newObj.helloWorld = () => {
  console.log( 'Hello World from inside an object!' );
};

// 22. Invoking an Object's Method
newObj.helloWorld();
# Lecture 7 Notes - Arrays, Objects, & Methods
## [@4m38s](https://youtu.be/WmFRlpd1GTM?t=?m?s) LECTURE STARTS
### Objects
- 2 types of properties
  - Raw values
  - functions (aka METHODS)
- a way of representing data
- named collection of values, properties, and methods.
- KEY: VALUE pairs

```js
  var person = {
    firstName: "Bobby",
    age: 52,
    shoeSize: 9
  }
```

- DOT SYNTAX to access properties on an object
  - i.e. object.KEY returns the corresponding Key's VALUE
  - e.g. person.name returns the value "Bobby"
- BRACKET SYNTAX
  - i.e. object['KEY'] returns the corresponding Key's VALUE
  - e.g. person['firstName'] returns the value "Bobby"
- ADDING KEYS
- REMOVING KEYS
- CHECKING FOR KEYS
  - True or False return
  - i.e ['keyName'] in object
  - e.g. ['shoeSize'] in person
- VALUE TYPES: Strings, Integers, Booleans, etc.

### Methods
- FUNCTIONS CAN ALSO BE PROPERTIES

```js
  var person = {
    firstName: "Bobby",
    lastName: "Hobby"
    age: 52,
    shoesize: 9
    fullName = function() { return this.firstName + " " + this.lastName; }
  }
```

### Arrays
- Just a list of stuff, numbers, strings, objects, etc.
- Flexible data type
- a collection you iterate over and/or store values.
```js
var anArray = [0, 1, 2, "Bob", 4, 5, 6, 7];
```

- INDEX of ELEMENTS: starts at 0
  - anArray[0] = 0
  - anArray[3] = "Bob"
  - anArray[99] = undefined

- Functional programming approach: map

```js
anArray.map( function(item) {
  return(item * 10);
});
```

- For Loop over array (Iterative approach)
```js

for (i = 0; i < anArray.length; i++) {
  // do something
  anArray[i]
}
```

- Add Elements to an array with .push or []method or .length
- Remove Elements in an array .pop

### Repl.it
- like a scratchpad for code examples
- like CodePen or JSFiddle, etc.

### Programming styles
- Object Oriented Programming
  - Objects store everything
  - Methods called on object
- Functional Programming
- Hybrid approach

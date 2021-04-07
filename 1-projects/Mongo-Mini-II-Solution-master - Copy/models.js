const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = ({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    friends: [],
    age: Number,
    gender: String,
    location: String,
    dateOfBirth: Date,
})

module.exports = mongoose.model('Person', PersonSchema);

/* pull in mongoose and write yoru schema here.
*
* we are building for this type of collection
* {
  "firstName": "Jedd",
  "lastName": "Challener",
  "email": "jchallener3@blinklist.com",
  "friends": [
      {
          "gender": "Female",
          "firstName": "Giustina",
          "lastName": "Scurr",
          "age": 84
      },
      {
          "gender": "Female",
          "firstName": "Vevay",
          "lastName": "Johnke",
          "age": 21
      },
      {
          "gender": "Female",
          "firstName": "Mildrid",
          "lastName": "Jackes",
          "age": 24
      }
  ],
  "age": 73,
  "gender": "Male",
  "location": "Tennessee",
  "dateOfBirth": "6/10/2017"
},
*}
*/
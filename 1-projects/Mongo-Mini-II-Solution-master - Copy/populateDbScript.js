const Person = require('./models');
const people = require('./people');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/people',
  { useMongoClient: true }
);
const populate = () => {
  const populatePeople = () => {
    const allPeople = people; 
    const promises = allPeople.map(p => new Person(p).save());
    return Promise.all(promises);
  };

  return populatePeople()
    .then(() => {
      console.log('done');
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log('ERROR', err);
      throw new Error(err);
    });
  };
  
  populate();
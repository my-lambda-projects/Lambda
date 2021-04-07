const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./models.js');

const port = process.env.PORT || 3000;

const app = express();

// error status code constants
const STATUS_SERVER_ERROR = 500;
const STATUS_USER_ERROR = 422;

app.use(bodyParser.json());

app.get('/users', (req, res) => {
  Person.find({}, (err, users) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json({'Error fetching users: ': err});
      return;
    }
    res.json(users);
  });
});

app.get('/users/:direction', (req, res) => {
  const { direction } = req.params;
  // asc, desc, -1, 1 all work
  Person.find({})
    .sort({'firstName': direction})
    .exec((err, users) => {
      if (err) {
        res.status(STATUS_USER_ERROR);
        res.json({'Error fetching users: ': err});
        return;
      }
      res.json(users);
  }); 
});

app.get('/user-get-friends/:id', (req, res) => {
  const { id } = req.params;
  Person.findById(id)
    .select("friends")
    .exec((err, friendsList) => {
      if (err) {
        res.status(STATUS_USER_ERROR);
        res.json({'Error fetching users: ': err});
        return;
      }
      res.json(friendsList);
    });
});

app.put('/update-user/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body; console.log({ firstName, lastName });
  Person.findByIdAndUpdate(id, {firstName, lastName})
    .exec((err, updatedUser) => {
      if (err) {
        res.status(STATUS_USER_ERROR);
        res.json({'Error fetching users: ': err});
        return;
      }
      res.json(updatedUser);
    });
});

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/people',
  { useMongoClient: true }
);
/* eslint no-console: 0 */
connect.then(() => {
  app.listen(port);
  console.log(`Server Listening on ${port}`);
}, (err) => {
  console.log('\n************************');
  console.log("ERROR: Couldn't connect to MongoDB. Do you have it running?");
  console.log('************************\n');
});

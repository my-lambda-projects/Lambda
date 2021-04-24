const express = require('express');

const config = require('../config.js');
const placesController = require('./controllers/places.js');
const distanceController = require('./controllers/distance.js');

const app = express();
const PORT = config.port;

app.use(placesController);
app.use(distanceController);

app.listen(PORT, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});
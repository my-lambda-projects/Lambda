const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

const {
  getModes
} = require('../models/distance.js');

router.get('/travel/mode', (req, res) => {
  getModes(req.query.origins, req.query.destinations)
  .then(modes => {
    const recommendation = compareModes(modes);
    const simplifiedRecommendation = {
      type: recommendation.type,
      duration: recommendation.duration.text
    };
    res.status(STATUS_SUCCESS);
    res.send( {mode: simplifiedRecommendation} );
  })
  .catch(err => {
    res.status(STATUS_USER_ERROR);
    res.send(err);
  });

  function compareModes(modes) {
    const recommendation = modes.reduce((quickest, mode) => {
      if (mode.duration.value < quickest.duration.value) {
        return mode;
      }
      return quickest;
    });

    return recommendation;
  }
});

module.exports = router;
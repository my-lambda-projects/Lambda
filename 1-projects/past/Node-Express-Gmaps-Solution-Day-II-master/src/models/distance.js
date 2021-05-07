const fetch  = require('node-fetch');
const config = require('../../config.js');

const KEY_GMAPS_DISTANCE = config.gmaps.apiKeys.distance;
const URI_DISTANCE       = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
const MODE_DRIVING   = 'driving';
const MODE_WALKING   = 'walking';
const MODE_BICYCLING = 'bicycling';
const MODE_TRANSIT   = 'transit';

function getModes(origins, destinations) {
  return new Promise((resolve, reject) => {
    const modes = [MODE_DRIVING, MODE_WALKING, MODE_BICYCLING, MODE_TRANSIT];
    const modeDistances = modes.map(modeType => {
      return getMode(modeType)
        .catch(err => {
          reject(err);
        });
    });

    return Promise.all(modeDistances)
      .then(distances => {
        resolve(distances);
      })
      .catch(err => {
        reject(err);
      });
  });

  function getMode(modeType) {
    return new Promise((resolve, reject) => {
      const modeUrl = URI_DISTANCE + "origins=" + origins + "&destinations=" + destinations + "&mode=" + modeType + "&key=" + KEY_GMAPS_DISTANCE;
      return fetch(modeUrl)
        .then(distance => distance.json())
        .then(distance => {
          const duration = distance.rows[0].elements[0].duration;
          const mode = {
            duration,
            type: modeType
          }
          resolve(mode);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = {
  getModes
}
const fetch = require('node-fetch');
const config = require('../../config.js');

const KEY_GMAPS_PLACES = config.gmaps.apiKeys.places;
const URI_TEXT_SEARCH = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
const URI_PLACE_DETAILS = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';

function getIds(query) {
  return new Promise((resolve, reject) => {
    const searchUrl = URI_TEXT_SEARCH + query + '&key=' + KEY_GMAPS_PLACES;
    fetch(searchUrl)
      .then(places => places.json())
      .then(places => places.results.map(place => place.place_id))
      .then(ids => {
        resolve(ids);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getDetails(ids) {
  return new Promise((resolve, reject) => {
    const details = ids.map(id => {
      const detailsUrl = URI_PLACE_DETAILS + id + '&key=' + KEY_GMAPS_PLACES;
      return fetch(detailsUrl)
        .then(detailed => detailed.json())
        .then(detailed => detailed.result);
    });

    Promise.all(details)
      .then(details => {
        resolve(details);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  getIds,
  getDetails
}
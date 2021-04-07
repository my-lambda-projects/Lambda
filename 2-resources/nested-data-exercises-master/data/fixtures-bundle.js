(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'
/*
Notes: To Update, run this command:

`npm run build`

... which runs:
`npx browserify data/people-export.js -o ../index.data.fixtures-bundle.js`

*/
window.lukeSkywalker = require('./person-1.json')
window.leiaOrgana = require('./person-5.json')
window.obiWanKenobi = require('./person-10.json')

},{"./person-1.json":2,"./person-10.json":3,"./person-5.json":4}],2:[function(require,module,exports){
module.exports={
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "homeworld": "Tatooine",
  "films": [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "Revenge of the Sith",
    "The Force Awakens"
  ],
  "species": [
    "Human"
  ],
  "vehicles": [
    {
      "name": "Snowspeeder",
      "model": "t-47 airspeeder",
      "manufacturer": "Incom corporation",
      "cost_in_credits": null,
      "length": "4.5",
      "max_atmosphering_speed": "650",
      "crew": 2,
      "passengers": 0,
      "cargo_capacity": "10"
    },
    {
      "name": "Imperial Speeder Bike",
      "model": "74-Z speeder bike",
      "manufacturer": "Aratech Repulsor Company",
      "cost_in_credits": 8000,
      "length": "3",
      "max_atmosphering_speed": "360",
      "crew": 1,
      "passengers": 1,
      "cargo_capacity": "4"
    }
  ],
  "starships": [
    {
      "name": "X-wing",
      "model": "T-65 X-wing",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": 149999,
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "starship_class": "Starfighter"
    },
    {
      "name": "Imperial shuttle",
      "model": "Lambda-class T-4a shuttle",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": 240000,
      "length": "20",
      "max_atmosphering_speed": "850",
      "crew": 6,
      "passengers": 20,
      "cargo_capacity": "80000",
      "consumables": "2 months",
      "hyperdrive_rating": "1.0",
      "MGLT": "50",
      "starship_class": "Armed government transport"
    }
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
},{}],3:[function(require,module,exports){
module.exports={
  "name": "Obi-Wan Kenobi",
  "height": "182",
  "mass": "77",
  "hair_color": "auburn, white",
  "skin_color": "fair",
  "eye_color": "blue-gray",
  "birth_year": "57BBY",
  "gender": "male",
  "homeworld": "Stewjon",
  "films": [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "The Phantom Menace",
    "Attack of the Clones",
    "Revenge of the Sith"
  ],
  "species": [
    "Human"
  ],
  "vehicles": [
    {
      "name": "Tribubble bongo",
      "model": "Tribubble bongo",
      "manufacturer": "Otoh Gunga Bongameken Cooperative",
      "cost_in_credits": null,
      "length": "15",
      "max_atmosphering_speed": "85",
      "crew": 1,
      "passengers": 2,
      "cargo_capacity": "1600"
    }
  ],
  "starships": [
    {
      "name": "Jedi starfighter",
      "model": "Delta-7 Aethersprite-class interceptor",
      "manufacturer": "Kuat Systems Engineering",
      "cost_in_credits": 180000,
      "length": "8",
      "max_atmosphering_speed": "1150",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "60",
      "consumables": "7 days"
    },
    {
      "name": "Trade Federation cruiser",
      "model": "Providence-class carrier/destroyer",
      "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
      "cost_in_credits": 125000000,
      "length": "1088",
      "max_atmosphering_speed": "1050",
      "crew": 600,
      "passengers": 48247,
      "cargo_capacity": "50000000",
      "consumables": "4 years"
    },
    {
      "name": "Naboo star skiff",
      "model": "J-type star skiff",
      "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
      "cost_in_credits": null,
      "length": "29.2",
      "max_atmosphering_speed": "1050",
      "crew": 3,
      "passengers": 3,
      "cargo_capacity": null,
      "consumables": null
    },
    {
      "name": "Jedi Interceptor",
      "model": "Eta-2 Actis-class light interceptor",
      "manufacturer": "Kuat Systems Engineering",
      "cost_in_credits": 320000,
      "length": "5.47",
      "max_atmosphering_speed": "1500",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "60",
      "consumables": "2 days"
    },
    {
      "name": "Belbullab-22 starfighter",
      "model": "Belbullab-22 starfighter",
      "manufacturer": "Feethan Ottraw Scalable Assemblies",
      "cost_in_credits": 168000,
      "length": "6.71",
      "max_atmosphering_speed": "1100",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "140",
      "consumables": "7 days"
    }
  ],
  "created": "2014-12-10T16:16:29.192000Z",
  "edited": "2014-12-20T21:17:50.325000Z",
  "url": "https://swapi.co/api/people/10/"
}
},{}],4:[function(require,module,exports){
module.exports={
  "name": "Leia Organa",
  "height": "150",
  "mass": "49",
  "hair_color": "brown",
  "skin_color": "light",
  "eye_color": "brown",
  "birth_year": "19BBY",
  "gender": "female",
  "homeworld": "Alderaan",
  "films": [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
      "The Force Awakens"
  ],
  "species": [
      "Human"
  ],
  "vehicles": [
    {
      "name": "Imperial Speeder Bike",
      "model": "74-Z speeder bike",
      "manufacturer": "Aratech Repulsor Company",
      "cost_in_credits": 8000,
      "length": "3",
      "max_atmosphering_speed": "360",
      "crew": 1,
      "passengers": 1,
      "cargo_capacity": "4"
    }
  ],
  "starships": [],
  "created": "2014-12-10T15:20:09.791000Z",
  "edited": "2014-12-20T21:17:50.315000Z",
  "url": "https://swapi.co/api/people/5/"
}
},{}]},{},[1]);

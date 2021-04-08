////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
////// DO NOT MODIFY THIS FILE //////
/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var lukeSkywalker = require('../data/person-1.json')
  var leiaOrgana = require('../data/person-5.json')
  var obiWanKenobi = require('../data/person-10.json')

  var chai = require('chai')
  var {
    getName,
    getFilmCount,
    getSummary,
    getVehiclesCostInCreditsSumTotal,
    getStarshipPassengerAndCrewSumTotal,
    getCargoCapacityTotal,
    getFastestStarshipName,
    getLargestCargoStarshipModelName,
    getSlowestVehicleOrStarshipName,
    getFirstStarshipName,
    getNthFilm
  } = require('../index.js')
}
var expect = chai.expect

describe('getName()', () => {
  it('expected name for `Luke`', () => { expect(getName(lukeSkywalker)).to.eq(`Luke Skywalker`) })
  it('expected name for `Leia`', () => { expect(getName(leiaOrgana)).to.eq(`Leia Organa`) })
  it('expected name for `Obi-Wan`', () => { expect(getName(obiWanKenobi)).to.eq(`Obi-Wan Kenobi`) })
})

describe('getFilmCount()', () => {
  it('expected film count for Luke', () => { expect(getFilmCount(lukeSkywalker)).to.eq(5) })
  it('expected film count for Leia', () => { expect(getFilmCount(leiaOrgana)).to.eq(5) })
  it('expected film count for Obi-Wan', () => { expect(getFilmCount(obiWanKenobi)).to.eq(6) })
})

describe('getFirstStarshipName()', () => {
  it('Luke\'s first starship, based on array/list order' , () => { expect(getFirstStarshipName(lukeSkywalker)).to.eq(`X-wing`) })
  it('Leia\'s first starship, based on array/list order' , () => { expect(getFirstStarshipName(leiaOrgana)).to.eq(`none`) })
  it('Obi-Wan\'s first starship, based on array/list order' , () => { expect(getFirstStarshipName(obiWanKenobi)).to.eq(`Jedi starfighter`) })
})

describe('getSummary()', () => {
  it('expected bio for Luke', () => { expect(getSummary(lukeSkywalker)).to.eq(`Luke Skywalker, 172cm, 77kg. Featured in 5 films.`) })
  it('expected bio for Leia', () => { expect(getSummary(leiaOrgana)).to.eq(`Leia Organa, 150cm, 49kg. Featured in 5 films.`) })
  it('expected bio for Obi-Wan', () => { expect(getSummary(obiWanKenobi)).to.eq(`Obi-Wan Kenobi, 182cm, 77kg. Featured in 6 films.`) })
})

describe('getVehiclesCostInCreditsSumTotal()', () => {
  it('Luke\'s vehicle cost total', () => { expect(getVehiclesCostInCreditsSumTotal(lukeSkywalker)).to.eq(8000) })
  it('Leia\'s vehicle cost total', () => { expect(getVehiclesCostInCreditsSumTotal(leiaOrgana)).to.eq(8000) })
  it('Obi-Wan\'s vehicle cost total', () => { expect(getVehiclesCostInCreditsSumTotal(obiWanKenobi)).to.eq(0) })
})

describe('getStarshipPassengerAndCrewSumTotal()', () => {
  it('Luke\'s crew+passenger capacity', () => { expect(getStarshipPassengerAndCrewSumTotal(lukeSkywalker)).to.eq(27) })
  it('Leia\'s crew+passenger capacity', () => { expect(getStarshipPassengerAndCrewSumTotal(leiaOrgana)).to.eq(0) })
  it('Obi-Wan\'s crew+passenger capacity', () => { expect(getStarshipPassengerAndCrewSumTotal(obiWanKenobi)).to.eq(48856) })
})

describe('getNthFilm()', () => {
  it('Return the featured film name, within recognized range 1-3', () => { expect(getNthFilm(lukeSkywalker, 1)).to.eq(`A New Hope`) })
  it('Return the featured film name, within recognized range 1-3', () => { expect(getNthFilm(leiaOrgana, 2)).to.eq(`The Empire Strikes Back`) })
  it('Return the featured film name, within recognized range 1-3', () => { expect(getNthFilm(obiWanKenobi, 3)).to.eq(`Return of the Jedi`) })
  // it('Throws error outside recognized range 1-3', () => { expect(() => getNthFilm(obiWanKenobi, 4)).to.throw() })
})

describe('getCargoCapacityTotal()', () => {
  it('Luke\'s expected cargo total', () => { expect(getCargoCapacityTotal(lukeSkywalker)).to.eq(80124) })
  it('Leia\'s expected cargo total', () => { expect(getCargoCapacityTotal(leiaOrgana)).to.eq(4) })
  it('Obi-Wan\'s expected cargo total', () => { expect(getCargoCapacityTotal(obiWanKenobi)).to.eq(50001860) })
})

describe('getFastestStarshipName()', () => {
  it('Luke\'s fastest starship', () => { expect(getFastestStarshipName(lukeSkywalker)).to.eq(`X-wing`) })
  it('Leia\'s fastest starship', () => { expect(getFastestStarshipName(leiaOrgana)).to.eq(`none`) })
  it('Obi-Wan\'s fastest starship', () => { expect(getFastestStarshipName(obiWanKenobi)).to.eq(`Jedi Interceptor`) })
})

describe('getLargestCargoStarshipModelName()', () => {
  it('Model name of Luke\'s starship w/ largest cargo', () => { expect(getLargestCargoStarshipModelName(lukeSkywalker)).to.eq(`Lambda-class T-4a shuttle`) })
  it('Model name of Leia\'s starship w/ largest cargo', () => { expect(getLargestCargoStarshipModelName(leiaOrgana)).to.eq(`none`) })
  it('Model name of Obi-Wan\'s starship w/ largest cargo', () => { expect(getLargestCargoStarshipModelName(obiWanKenobi)).to.eq(`Providence-class carrier/destroyer`) })
})

describe('getSlowestVehicleOrStarshipName()', () => {
  it('Luke\'s slowest transportation', () => { expect(getSlowestVehicleOrStarshipName(lukeSkywalker)).to.eq(`Imperial Speeder Bike`) })
  it('Leia\'s slowest transportation', () => { expect(getSlowestVehicleOrStarshipName(leiaOrgana)).to.eq(`Imperial Speeder Bike`) })
  it('Obi-Wan\'s slowest transportation', () => { expect(getSlowestVehicleOrStarshipName(obiWanKenobi)).to.eq(`Tribubble bongo`) })
})

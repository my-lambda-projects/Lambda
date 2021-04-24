////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////

/* eslint-env mocha */
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env

  var chai = require("chai");
  var runners = require('../data/runners');

  var {
    processFirstItem,
    processLength,
    processLastItem,
    processSum,
    processProduct,
    processDuplicateFree,
    lowerCaseStrings,
    isItAnApple,
    removeApple,
    stringSmash,
    getFullNames,
    firstNamesAllCaps,
    getRunnersByTShirtSize,
    tallyUpDonations,
    counterMakerWithLimit,
  } = require("../index.js");
}
var expect = chai.expect;

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

describe("processFirstItem()", () => {
  it("works as specified", () => {
    expect(processFirstItem(['bar', 'baz'], str => str + str)).to.equal('barbar');
    expect(processFirstItem(['bar', 'baz'], str => str[0])).to.equal('b');
  });
});

describe("processLength()", () => {
  it("works as specified", () => {
    expect(processLength(['bar', 'baz'], n => n * 3)).to.equal(6);
    expect(processLength(['bar'], n => n * 3)).to.equal(3);
    expect(processLength([], n => n * 3)).to.equal(0);
  });
});

describe("processLastItem()", () => {
  it("works as specified", () => {
    expect(processLastItem(['bar', 'baz'], str => str + str)).to.equal('bazbaz');
    expect(processLastItem(['bar', 'foo'], str => str[0])).to.equal('f');
  });
});

describe("processSum()", () => {
  it("works as specified", () => {
    expect(processSum(1, 5, n => n + 1000)).to.equal(1006);
    expect(processSum(1, 0, n => n + 1000)).to.equal(1001);
    expect(processSum(-2, -5, n => n + 1000)).to.equal(993);
  });
});

describe("processProduct()", () => {
  it("works as specified", () => {
    expect(processProduct(2, 3, n => n + 1000)).to.equal(1006);
    expect(processProduct(0, 9, n => n + 1000)).to.equal(1000);
  });
});

describe("processDuplicateFree() [STRETCH TASK]", () => {
  it("works as specified", () => {
    const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 7]
    const arr2 = [1, 2, 3]
    const expected = [1, 2, 3, 4, 5, 6, 7]
    const cb = (list) => list
    expect(processDuplicateFree(arr2, cb)).to.eql(arr2);
    expect(processDuplicateFree(arr, cb)).to.eql(expected);
    expect(processDuplicateFree([], cb)).to.eql([]);
  });
});

const fruits = [ 'Apple', 'ORANGE', 'banana', 'apple', 'MaNgO', 'apple' ];

describe("lowerCaseStrings()", () => {
  it("lowercases all strings", () => {
    const lowerFruits = lowerCaseStrings(fruits);
    expect(lowerFruits.length).to.eql(fruits.length);
    expect(lowerFruits).to.eql(['apple', 'orange', 'banana', 'apple', 'mango', 'apple']);
  })
});

describe("isItAnApple()", () => {
  it("creates an array of booleans", () => {
    const isIt = isItAnApple(fruits);

    expect(isIt.length).to.eql(fruits.length);
    expect(isIt).to.eql([ false, false, false, true, false, true]);
  })
});

describe("removeApple()", () => {
  it("removes the string 'apple'", () => {
    const noApples = removeApple(fruits);
    expect(noApples.length).to.eql(4);
    expect(noApples).to.eql([ 'Apple', 'ORANGE', 'banana',  'MaNgO']);
  })
});


describe("stringSmash()", () => {
  it("combines all strings into one", () => {
    const smash = stringSmash(fruits);
    expect(typeof smash).to.eql('string');
    expect(smash).to.eql('AppleORANGEbananaappleMaNgOapple');
  })
});


describe("getFullNames()", () => {
  it("returns an array of strings", () => {
    expect(getFullNames(runners).every(r => typeof r === 'string')).to.equal(true);
  });
  it("returns an array of the same length as the original array", () => {
    expect(getFullNames(runners).length).to.equal(runners.length);
  });
  it("the strings in the array have the `<last-name>, <first-name>` format", () => {
    expect(getFullNames(runners)[0]).to.equal('Seiler, Charmain');
    expect(getFullNames(runners)[runners.length - 1]).to.equal('Baine, Shell');
  });
});

describe("firstNamesAllCaps()", () => {
  it("returns an array of strings", () => {
    expect(firstNamesAllCaps(runners).every(r => typeof r === 'string')).to.equal(true);
  });
  it("returns an array of the same length as the original array", () => {
    expect(firstNamesAllCaps(runners).length).to.equal(runners.length);
  });
  it("the strings in the array ARE ALL CAPS", () => {
    expect(firstNamesAllCaps(runners)[0]).to.equal('CHARMAIN');
    expect(firstNamesAllCaps(runners)[runners.length - 1]).to.equal('SHELL');
  });
});

describe("getRunnersByTShirtSize()", () => {
  it("returns an array of runners of a given shirt size", () => {
    expect(getRunnersByTShirtSize(runners, 'S').every(r => r.shirt_size === 'S')).to.equal(true);
  });
  it("returns an array of the correct length", () => {
    expect(getRunnersByTShirtSize(runners, 'S').length).to.equal(11);
    expect(getRunnersByTShirtSize(runners, '3XL').length).to.equal(7);
  });
});

describe("tallyUpDonations() [STRETCH TASK]", () => {
  it("returns 0 for an empty runners array", () => {
    expect(tallyUpDonations([])).to.equal(0);
  });
  it("returns the expected amount for a small dataset", () => {
    expect(tallyUpDonations([
      { donation: 1 },
      { donation: 2 },
      { donation: 3 },
    ])).to.equal(6);
  });
  it("returns the expected amount for the runners array", () => {
    expect(tallyUpDonations(runners)).to.equal(7043);
  });
});

describe("counterMakerWithLimit() [STRETCH TASK]", () => {
  const counter = counterMakerWithLimit(3)
  it("returns a function", () => {
    expect(isFunction(counter)).to.equal(true);
  });
  it("the counter produced with counterMakerWithLimit returns 0 on first invocation", () => {
    expect(counter()).to.equal(0);
  });
  it("the counter produced with counterMakerWithLimit increments correctly", () => {
    expect(counter()).to.equal(1);
    expect(counter()).to.equal(2);
    expect(counter()).to.equal(3);
  });
  it("the counter produced with counterMakerWithLimit resets itself after reaching maxValue", () => {
    expect(counter()).to.equal(0);
    expect(counter()).to.equal(1);
  });
});

////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////

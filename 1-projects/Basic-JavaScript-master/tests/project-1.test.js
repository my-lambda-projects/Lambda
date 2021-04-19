/* eslint-disable no-undef */
const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('../src/project-1');

describe('Project 1', () => {
  describe('multiplyByTen(num)', () => {
    it('should return the argument after multiplying by ten', () => {
      expect(multiplyByTen(10)).toBe(100);
      expect(multiplyByTen(0)).toBe(0);
    });
  });

  describe('subtractFive(num)', () => {
    it('should return the argument after subtracting five', () => {
      expect(subtractFive(10)).toBe(5);
      expect(subtractFive(0)).toBe(-5);
    });
  });

  describe('areSameLength(str1, str2)', () => {
    it('should return true if the arguments have the same length', () => {
      expect(areSameLength('hi', 'there')).toBe(false);
      expect(areSameLength('javascript', 'bumfuzzled')).toBe(true);
    });
  });

  describe('areEqual(x, y)', () => {
    it('should return true if the arguments are equal', () => {
      expect(areEqual(15, 15)).toBe(true);
      expect(areEqual(90, 50)).toBe(false);
      expect(areEqual('test', 'test')).toBe(true);
    });
  });

  describe('lessThanNinety(num)', () => {
    it('should return true if the argument is less than ninety', () => {
      expect(lessThanNinety(15)).toBe(true);
      expect(lessThanNinety(90)).toBe(false);
      expect(lessThanNinety(100)).toBe(false);
    });
  });

  describe('greaterThanFifty(num)', () => {
    it('should return true if the argument is greater than fifty', () => {
      expect(greaterThanFifty(15)).toBe(false);
      expect(greaterThanFifty(50)).toBe(false);
      expect(greaterThanFifty(60)).toBe(true);
    });
  });

  describe('add(x, y)', () => {
    it('should return the sum of the two arguments', () => {
      expect(add(5, 5)).toBe(10);
      expect(add(-1, 5)).toBe(4);
    });
  });

  describe('subtract(x, y)', () => {
    it('should return the difference of the two arguments', () => {
      expect(subtract(5, 5)).toBe(0);
      expect(subtract(-1, 5)).toBe(-6);
      expect(subtract(5, -5)).toBe(10);
      expect(subtract(0, 0)).toBe(0);
    });
  });

  describe('divide(x, y)', () => {
    it('should return the quotient of the two arguments', () => {
      expect(divide(5, 5)).toBe(1);
      expect(divide(10, 5)).toBe(2);
      expect(divide(11, 2)).toBe(5.5);
    });
  });

  describe('multiply(x, y)', () => {
    it('should return the product of the two arguments', () => {
      expect(multiply(5, 5)).toBe(25);
      expect(multiply(10, -5)).toBe(-50);
      expect(multiply(11, 0)).toBe(0);
    });
  });

  describe('getRemainder(x, y)', () => {
    it('should return the division remainder of the two arguments', () => {
      expect(getRemainder(5, 5)).toBe(0);
      expect(getRemainder(10, 5)).toBe(0);
      expect(getRemainder(11, 2)).toBe(1);
    });
  });

  describe('isEven(num)', () => {
    it('should return the bool true if the argument is even, false otherwise', () => {
      expect(isEven(6)).toBe(true);
      expect(isEven(7)).toBe(false);
      expect(isEven(0)).toBe(true);
    });
  });

  describe('isOdd(num)', () => {
    it('should return the bool true if the argument is odd, false otherwise', () => {
      expect(isOdd(6)).toBe(false);
      expect(isOdd(7)).toBe(true);
      expect(isOdd(0)).toBe(false);
    });
  });

  describe('square(num)', () => {
    it('should return the argument after squaring it', () => {
      expect(square(6)).toBe(36);
      expect(square(7)).toBe(49);
      expect(square(0)).toBe(0);
      expect(square(-5)).toBe(25);
    });
  });

  describe('cube(num)', () => {
    it('should return the argument after cubing it', () => {
      expect(cube(3)).toBe(27);
      expect(cube(0)).toBe(0);
      expect(cube(-5)).toBe(-125);
    });
  });

  describe('raiseToPower(num, exponent)', () => {
    it('should return the argument after raising it to the exponent\'s power', () => {
      expect(raiseToPower(2, 2)).toBe(4);
      expect(raiseToPower(2, 3)).toBe(8);
      expect(raiseToPower(0, 5)).toBe(0);
      expect(raiseToPower(10, 1)).toBe(10);
    });
  });

  describe('roundNumber(num)', () => {
    it('should return the argument after rounding it', () => {
      expect(roundNumber(1.5)).toBe(2);
      expect(roundNumber(2)).toBe(2);
      expect(roundNumber(0.1)).toBe(0);
    });
  });

  describe('roundUp(num)', () => {
    it('should return the argument after rounding it up', () => {
      expect(roundUp(1.5)).toBe(2);
      expect(roundUp(2)).toBe(2);
      expect(roundUp(0.1)).toBe(1);
    });
  });

  describe('addExclamationPoint(str)', () => {
    it('should add an exclamation point to the end of the string', () => {
      expect(addExclamationPoint('hello world')).toBe('hello world!');
      expect(addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
    });
  });

  describe('combineNames(firstName, lastName)', () => {
    it('should return the two strings combined into one with a space separating them', () => {
      expect(combineNames('hello', 'world')).toBe('hello world');
      expect(combineNames('Lambda', 'School')).toBe('Lambda School');
    });
  });

  describe('getGreeting(name)', () => {
    it('should return the string \'Hello {name}!\'', () => {
      expect(getGreeting('Ben')).toBe('Hello Ben!');
      expect(getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
    });
  });

  describe('getRectangleArea(length, width)', () => {
    it('should return the correct area', () => {
      expect(getRectangleArea(2, 2)).toBe(4);
      expect(getRectangleArea(3, 6)).toBe(18);
      expect(getRectangleArea(0, 2)).toBe(0);
    });
  });

  describe('getTriangleArea(base, height)', () => {
    it('should return the correct area', () => {
      expect(getTriangleArea(2, 2)).toBe(2);
      expect(getTriangleArea(0, 2)).toBe(0);
    });
  });

  describe('getCircleArea(radius)', () => {
    it('should return the correct area', () => {
      expect(getCircleArea(4)).toBe(50);
      expect(getCircleArea(0)).toBe(0);
    });
  });

  describe('getRectangularPrismVolume(length, width, height)', () => {
    it('should return the correct volume', () => {
      expect(getRectangularPrismVolume(2, 2, 2)).toBe(8);
      expect(getRectangularPrismVolume(0, 5, 10)).toBe(0);
    });
  });
});

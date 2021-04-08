/* eslint-disable no-undef */
const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require('../src/project-2');

describe('Project 2', () => {
  describe('getBiggest(x, y)', () => {
    it('should return x if it is larger than y', () => {
      expect(getBiggest(10, 5)).toBe(10);
    });
    it('should return y if it is larger than x', () => {
      expect(getBiggest(50, 100)).toBe(100);
    });
    it('should return either one if they are the same', () => {
      expect(getBiggest(1000, 1000)).toBe(1000);
    });
  });

  describe('greeting(language)', () => {
    it('should return \'Guten Tag!\' for German', () => {
      expect(greeting('German')).toBe('Guten Tag!');
    });
    it('should return \'Hola!\' for Spanish', () => {
      expect(greeting('Spanish')).toBe('Hola!');
    });
    it('should return \'Ni Hao!\' for Chinese', () => {
      expect(greeting('Chinese')).toBe('Ni Hao!');
    });
    it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', () => {
      expect(greeting('French')).toBe('Hello!');
      expect(greeting()).toBe('Hello!');
    });
  });

  describe('isTenOrFive(num)', () => {
    it('should return true if num is 10 or 5', () => {
      expect(isTenOrFive(10)).toBe(true);
      expect(isTenOrFive(5)).toBe(true);
    });
    it('should return false if num is not 10 or 5', () => {
      expect(isTenOrFive(11)).toBe(false);
      expect(isTenOrFive(6)).toBe(false);
      expect(isTenOrFive(0)).toBe(false);
      expect(isTenOrFive(5.01)).toBe(false);
    });
  });

  describe('isInRange(num)', () => {
    it('should return true if num is inside range', () => {
      expect(isInRange(35.5)).toBe(true);
      expect(isInRange(40)).toBe(true);
      expect(isInRange(49)).toBe(true);
      expect(isInRange(21)).toBe(true);
    });
    it('should return false if outside of range', () => {
      expect(isInRange(10)).toBe(false);
      expect(isInRange(20)).toBe(false);
      expect(isInRange(50)).toBe(false);
      expect(isInRange(100)).toBe(false);
    });
  });

  describe('isInteger(num)', () => {
    it('should return true if num is 5', () => {
      expect(isInteger(5)).toBe(true);
    });
    it('should return false if num is 0.5', () => {
      expect(isInteger(0.5)).toBe(false);
    });
    it('should return true if num is -20', () => {
      expect(isInteger(-20)).toBe(true);
    });
    it('should return true for 0', () => {
      expect(isInteger(0)).toBe(true);
    });
  });

  describe('fizzBuzz(num)', () => {
    it('should return fizz if divisible by 3', () => {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz if divisible by 5', () => {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('should return fizzbuzz if divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return num if not divisible by 3 or 5', () => {
      expect(fizzBuzz(4)).toBe(4);
    });
  });

  describe('isPrime(num)', () => {
    it('should return true if num is prime', () => {
      expect(isPrime(7)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });
    it('should return false if num is not prime', () => {
      expect(isPrime(10)).toBe(false);
      expect(isPrime(100)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
  });

  describe('returnFirst(arr)', () => {
    it('should return the first item in the array', () => {
      expect(returnFirst([10, 10, 16, 12])).toBe(10);
      expect(returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
    });
  });

  describe('returnLast(arr)', () => {
    it('should return the last item in the array', () => {
      expect(returnLast([10, 10, 16, 12])).toBe(12);
      expect(returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
      expect(returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
    });
  });

  describe('getArrayLength(arr)', () => {
    it('should return the length of the array', () => {
      expect(getArrayLength([10, 10, 16, 12])).toBe(4);
      expect(getArrayLength([97, 100, 80, 55, 72, 94])).toBe(6);
      expect(getArrayLength(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
    });
  });

  describe('incrementByOne(arr)', () => {
    it('should return the array with each value incremented by one', () => {
      expect(incrementByOne([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
      expect(incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
      expect(incrementByOne([])).toEqual([]);
    });
  });

  describe('addItemToArray(arr, item)', () => {
    it('should return the array with the item added to the end', () => {
      expect(addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
      expect(addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
      expect(addItemToArray([], true)).toEqual([true]);
    });
  });

  describe('addItemToFront(arr, item)', () => {
    it('should return the array with the item added to the front', () => {
      expect(addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
      expect(addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
      expect(addItemToFront([], true)).toEqual([true]);
    });
  });

  describe('wordsToSentence(words)', () => {
    it('should return a string that has all of the words from the array separated by spaces', () => {
      expect(wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
      expect(wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
    });
  });

  describe('contains(arr, item)', () => {
    it('should return true if the array contains the item', () => {
      expect(contains([10, 10, 16, 12], 10)).toBe(true);
      expect(contains([97, 100, 80, 55, 72, 94], 'Hello')).toBe(false);
      expect(contains([], true)).toBe(false);
    });
  });

  describe('addNumbers(numbers)', () => {
    it('should add all of the numbers in the array together and return the sum', () => {
      expect(addNumbers([10, 10, 16])).toBe(36);
      expect(addNumbers([97, 100])).toBe(197);
      expect(addNumbers([0])).toBe(0);
    });
  });

  describe('averageTestScore(testScores)', () => {
    it('should return the average test score', () => {
      expect(averageTestScore([10, 10, 16, 12])).toBe(12);
      expect(averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
    });
  });

  describe('largestNumber(numbers)', () => {
    it('should return the largest number', () => {
      expect(largestNumber([10, 10, 16, 12])).toBe(16);
      expect(largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
      expect(largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
    });
  });
});

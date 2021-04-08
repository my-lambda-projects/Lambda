/* eslint-disable no-undef */
const {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
} = require('../src/project-4');

describe('Project 4', () => {
  describe('getFirstItem', () => {
    it('should pass the first item from the collection to the cb', () => {
      const collection = ['a', 'b', 'c', 'd'];
      let firstItem;
      getFirstItem(collection, (first) => {
        firstItem = first;
      });
      expect(firstItem).toBe('a');
    });
  });

  describe('getLength', () => {
    it('should pass the length of the collection to the cb', () => {
      const collection = [true, false, {}, []];
      let collectionLength;
      getLength(collection, (length) => {
        collectionLength = length;
      });
      expect(collectionLength).toBe(4);
    });
  });

  describe('getLastItem', () => {
    it('should pass the last item from an array into the provided cb', () => {
      const collection1 = [1, 2, 3];
      const collection2 = ['a', 'b'];
      const collection3 = [true, false, true, null];
      const lastItems = [];
      getLastItem(collection1, (lastItem) => {
        lastItems.push(lastItem);
      });
      getLastItem(collection2, (lastItem) => {
        lastItems.push(lastItem);
      });
      getLastItem(collection3, (lastItem) => {
        lastItems.push(lastItem);
      });
      expect(lastItems).toEqual([3, 'b', null]);
    });
  });

  describe('sumNums', () => {
    it('should sum the numbers together and pass the sum to the cb', () => {
      let sum;
      sumNums(5, 10, (result) => {
        sum = result;
      });
      expect(sum).toBe(15);
      sumNums(-5, 5, (result) => {
        sum = result;
      });
      expect(sum).toBe(0);
    });
  });

  describe('multiplyNums', () => {
    it('should multiply the numbers together and pass the product to the cb', () => {
      let product;
      multiplyNums(5, 10, (result) => {
        product = result;
      });
      expect(product).toBe(50);
      multiplyNums(-5, 5, (result) => {
        product = result;
      });
      expect(product).toBe(-25);
    });
  });

  describe('contains', () => {
    it('should pass true to cb is the collection contains the specified item', () => {
      const collection = ['a', 'b', 'c', 'd'];
      let containsItem;
      contains(collection, 'd', (result) => {
        containsItem = result;
      });
      expect(containsItem).toBe(true);
    });
    it('should return false if the item is not contained in the array', () => {
      const collection = ['a', 'b', 'c', 'd'];
      let containsItem;
      contains(collection, 55, (result) => {
        containsItem = result;
      });
      expect(containsItem).toBe(false);
    });
    it('should work with array references', () => {
      const nestedArray = [];
      const collection = ['a', 'b', 'c', 'd', nestedArray];
      let containsItem;
      contains(collection, nestedArray, (result) => {
        containsItem = result;
      });
      expect(containsItem).toBe(true);
      contains(collection, [], (result) => {
        containsItem = result;
      });
      expect(containsItem).toBe(false);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicates from an array', () => {
      const arr = ['a', 'b', 'c', 'c'];
      let duplicateFreeArray;
      removeDuplicates(arr, (result) => {
        duplicateFreeArray = result;
      });
      expect(duplicateFreeArray).toEqual(['a', 'b', 'c']);
    });
    it('should not mutate the original array', () => {
      const arr = ['a', 'b', 'c', 'c'];
      let duplicateFreeArray;
      removeDuplicates(arr, (result) => {
        duplicateFreeArray = result;
      });
      expect(Array.isArray(duplicateFreeArray)).toBe(true);
      expect(duplicateFreeArray).not.toBe(arr);
    });
  });
});

/* eslint-disable no-undef */
const BinarySearchTree = require('../src/binary-search-tree');

describe('BinarySearchTree', () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", "depthFirstForEach", and "breadthFirstForEach"', () => {
    expect(typeof binarySearchTree.insert).toBe('function');
    expect(typeof binarySearchTree.contains).toBe('function');
    expect(typeof binarySearchTree.depthFirstForEach).toBe('function');
    expect(typeof binarySearchTree.breadthFirstForEach).toBe('function');
  });

  it('should insert values at the correct location in the tree', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).toBe(3);
    expect(binarySearchTree.right.left.value).toBe(6);
  });

  it('should have a working "contains" method', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).toBe(true);
    expect(binarySearchTree.contains(8)).toBe(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstForEach" in the correct order', () => {
    const array = [];
    const foo = value => ((array.push(value)));
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.depthFirstForEach(foo);
    expect(array).toEqual([5, 2, 3, 7, 9]);
  });

  it('should execute a callback on every value in the tree using "breadthFirstForEach" in the correct order', () => {
    const array = [];
    const foo = value => ((array.push(value)));
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(9);
    binarySearchTree.insert(11);
    binarySearchTree.breadthFirstForEach(foo);
    expect(array).toEqual([5, 3, 10, 4, 9, 11]);
  });
});

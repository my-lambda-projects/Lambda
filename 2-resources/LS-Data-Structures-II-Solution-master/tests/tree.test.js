/* eslint-disable no-undef */
const Tree = require('../src/tree');

describe('Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree(true);
  });

  it('should have methods named "addChild" and "contains"', () => {
    expect(typeof tree.addChild).toBe('function');
    expect(typeof tree.contains).toBe('function');
  });

  it('should add children to the tree', () => {
    tree.addChild(5);
    expect(tree.children[0].value).toBe(5);
  });

  it('should return true for a value that the tree contains', () => {
    tree.addChild(5);
    expect(tree.contains(5)).toBe(true);
  });

  it('should return false for a value that was not added', () => {
    tree.addChild(5);
    expect(tree.contains(6)).toBe(false);
  });

  it('should be able to add children to a tree\'s child', () => {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toBe(6);
  });

  it('should correctly detect nested children', () => {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(8)).toBe(true);
  });
});

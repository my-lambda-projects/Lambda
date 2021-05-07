/* eslint-disable no-undef, no-prototype-builtins */
const LinkedList = require('../src/linked-list');
const DoublyLinkedList = require('../src/doubly-linked-list');

let list;

describe('LinkedList', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  it('should have the methods "addToTail", "removeHead", and "contains"', () => {
    const hasAddToTail = Object.getPrototypeOf(list).hasOwnProperty('addToTail');
    const hasRemoveHead = Object.getPrototypeOf(list).hasOwnProperty('removeHead');
    const hasContains = Object.getPrototypeOf(list).hasOwnProperty('contains');
    expect(hasAddToTail).toBe(true);
    expect(hasRemoveHead).toBe(true);
    expect(hasContains).toBe(true);
  });

  it('should update the tail value when a new node is added', () => {
    list.addToTail(1);
    expect(list.tail.value).toBe(1);
    list.addToTail(2);
    expect(list.tail.value).toBe(2);
  });

  it('should keep the same head after adding nodes', () => {
    list.addToTail(1);
    expect(list.head.value).toBe(1);
    list.addToTail(2);
    expect(list.head.value).toBe(1);
  });

  it('should return true from contains if a matching value is found and false otherwise', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail('hello');
    list.addToTail(true);
    expect(list.contains('hello')).toBe(true);
    expect(list.contains('asdf')).toBe(false);
  });

  it('should remove head when removeHead is invoked', () => {
    list.addToTail(1);
    list.addToTail(2);
    expect(list.head.value).toBe(1);
    list.removeHead();
    expect(list.head.value).toBe(2);
    list.removeHead();
    expect(list.head).toBe(null);
  });

  it('should return the head that is removed when removeHead is invoked', () => {
    list.addToTail(1);
    expect(list.removeHead()).toBe(1);
  });

  it('should not contain removed values', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(4);
    list.removeHead();
    expect(list.contains(1)).toBe(false);
  });
});

/* Extra Credit */

describe('DoublyLinkedList', () => {
  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it('should have the methods "addToHead", "addToTail", "removeFromHead", "removeFromTail", "delete", "moveToFront", and "moveToBack"', () => {
    const hasAddToTail = Object.getPrototypeOf(list).hasOwnProperty('addToTail');
    const hasAddToHead = Object.getPrototypeOf(list).hasOwnProperty('addToHead');
    const hasRemoveFromHead = Object.getPrototypeOf(list).hasOwnProperty('removeFromHead');
    const hasRemoveFromTail = Object.getPrototypeOf(list).hasOwnProperty('removeFromTail');
    const hasMoveToFront = Object.getPrototypeOf(list).hasOwnProperty('moveToFront');
    const hasMoveToBack = Object.getPrototypeOf(list).hasOwnProperty('moveToBack');
    const hasDelete = Object.getPrototypeOf(list).hasOwnProperty('delete');
    expect(hasAddToHead).toBe(true);
    expect(hasAddToTail).toBe(true);
    expect(hasRemoveFromHead).toBe(true);
    expect(hasRemoveFromTail).toBe(true);
    expect(hasMoveToBack).toBe(true);
    expect(hasMoveToFront).toBe(true);
    expect(hasDelete).toBe(true);
  });

  it('should be able to add list nodes to the head of the list', () => {
    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    expect(list.tail.value).toEqual(1);
  });

  it('should be able to add list nodes to the tail of the list', () => {
    list.addToTail(100);
    list.addToTail(99);
    list.addToTail(98);
    expect(list.head.value).toEqual(100);
    expect(list.tail.value).toEqual(98);
    expect(list.tail.prev.value).toEqual(99);
    expect(list.tail.prev.prev.value).toEqual(100);
  });

  it('should be able to remove the head node of the list', () => {
    list.addToHead(3);
    list.addToHead(39);
    expect(list.removeFromHead()).toEqual(39);
    expect(list.removeFromHead()).toEqual(3);
    expect(list.removeFromHead()).toBeNull();
    list.addToTail(18);
    expect(list.removeFromHead()).toEqual(18);
    expect(list.removeFromHead()).toBeNull();
  });

  it('should be able to remove the tail node of the list', () => {
    list.addToTail(18);
    list.addToTail(109);
    expect(list.removeFromTail()).toEqual(109);
    expect(list.removeFromTail()).toEqual(18);
    expect(list.removeFromTail()).toBeNull();
    list.addToHead(16);
    expect(list.removeFromTail()).toEqual(16);
    expect(list.removeFromTail()).toBeNull();
  });

  it('should be able to move an arbitrary node in the list to the front of the list', () => {
    list.addToTail(1);
    list.addToTail(10);
    list.addToTail(7);
    list.addToTail(3);
    expect(list.head.value).toEqual(1);
    expect(list.tail.value).toEqual(3);
    list.moveToFront(list.tail);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(1);
    expect(list.tail.value).toEqual(7);
    list.moveToFront(list.tail.prev);
    expect(list.head.value).toEqual(10);
  });

  it('should be able to move an arbitrary node in the list to the back of the list', () => {
    list.addToHead(1);
    list.addToHead(40);
    list.addToHead(29);
    list.addToHead(90);
    expect(list.tail.value).toEqual(1);
    expect(list.head.value).toEqual(90);
    list.moveToBack(list.head);
    expect(list.tail.value).toEqual(90);
    expect(list.tail.prev.value).toEqual(1);
    list.moveToBack(list.head.next);
    expect(list.head.value).toEqual(29);
  });

  it('should be able to delete an arbitrary node in the list', () => {
    list.addToHead(8);
    list.addToHead(11);
    list.addToHead(90);
    expect(list.head.next.value).toEqual(11);
    expect(list.tail.prev.value).toEqual(11);
    list.delete(list.head.next);
    expect(list.head.next.value).toEqual(8);
    expect(list.tail.prev.value).toEqual(90);
  });
});

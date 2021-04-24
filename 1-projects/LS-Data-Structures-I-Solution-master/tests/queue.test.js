/* eslint-disable no-undef, no-prototype-builtins */
const Queue = require('../src/queue');

let queue;

describe('Queue', () => {
  beforeEach(() => {
    queue = new Queue();
  });

  it('should have the methods "enqueue", "dequeue", and the property "size"', () => {
    const hasEnqueue = Object.getPrototypeOf(queue).hasOwnProperty('enqueue');
    const hasDequeue = Object.getPrototypeOf(queue).hasOwnProperty('dequeue');
    const hasSize = Object.getPrototypeOf(queue).hasOwnProperty('size');
    expect(hasEnqueue).toBe(true);
    expect(hasDequeue).toBe(true);
    expect(hasSize).toBe(true);
  });

  it('should return a size of 0 for an empty queue', () => {
    expect(queue.size).toBe(0);
  });

  it('should return the correct size after queuing items', () => {
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    queue.enqueue(null);
    expect(queue.size).toBe(10);
  });

  it('should not error when attempting to dequeue an item from an empty queue', () => {
    expect(queue.dequeue()).toThrow(undefined);
  });

  it('should return a size of 0 after attempting to dequeue more items than were queued', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it('should dequeue and return the top item', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });

  it('should dequeue the first item queued if multiple items were queued', () => {
    queue.enqueue(true);
    queue.enqueue('hi');
    queue.enqueue(null);
    queue.enqueue(77);
    expect(queue.dequeue()).toBe(true);
  });

  it('should respect the order with which elements are queued', () => {
    queue.enqueue(true);
    queue.enqueue('hi');
    queue.enqueue(null);
    queue.enqueue(77);
    expect(queue.dequeue()).toBe(true);
    expect(queue.dequeue()).toBe('hi');
    expect(queue.dequeue()).toBe(null);
    expect(queue.dequeue()).toBe(77);
  });
});

class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }

  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;

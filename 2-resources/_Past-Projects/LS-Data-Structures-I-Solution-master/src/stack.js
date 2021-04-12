class Stack {
  constructor() {
    this.storage = [];
  }

  get size() {
    return this.storage.length;
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }
}

module.exports = Stack;

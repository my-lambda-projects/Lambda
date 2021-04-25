/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
  constructor() {
    this.storage = [];
  }

  add( item ) {
    this.storage.push( item );
  }

  remove() {
    if ( this.storage.length === 0 ) return null;
    return this.storage.pop();
  }

  get length() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue( item ) {
    this.stack1.add( item );
  }

  dequeue() {
    if ( this.stack2.length === 0 ) {
      const length = this.stack1.length;
      for ( let i = 0; i < length; i++ ) {
        this.stack2.add( this.stack1.remove() );
      }
    }
    return this.stack2.remove();
  }
}

const queue = new Queue();

queue.enqueue( 1 );
queue.enqueue( 2 );
queue.enqueue( 3 );
const val1 = queue.dequeue();
const val2 = queue.dequeue();
queue.enqueue( 4 );
const val3 = queue.dequeue();
const val4 = queue.dequeue();
console.log( val1, val2, val3, val4 );

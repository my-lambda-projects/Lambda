/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
    Stack=(Last In First Out) & Queue=(First In First Out)
*/
class PhatStack {
  constructor() {
    this.storage = [];
  }
  get size() {
    return this.storage.length
  }
  set add( anItem ) {
    this.storage.push( anItem )
  } // <---------- USING THE SETTER
  remove() {
    return this.storage.pop()
  }
  get show() {
    return this.storage
  }
}

class TwoStackQueueKungFu {
  constructor() {
    this.input = new PhatStack();
    this.output = new PhatStack();
  }
  set enqueue( something ) {
    this.input.add = something
  }

  dequeue() {
    if ( this.output.size === 0 ) {
      while ( this.input.size ) {
        this.output.storage.push( this.input.storage.pop() ); // <---- THIS WORKS
        // // WHY DOES CALLING THE PhatStack Setter Method NOT WORK? //////////
        // // Error msg: "this.output.add is not a function"
        // this.output.add(this.input.remove()); // <--- Setter method syntax
      }
    }
    console.log( testq.output.storage );
    return this.output.storage.pop();
  };

  get showOutput() {
    return this.output.storage
  }
}

// // QUEUE W/2 STACKS TEST SUITE
// const testq = new TwoStackQueueKungFu();
// console.log(testq);            // ---> TwoStackQueueKungFu { storage: [] }
// testq.enqueue = 'not';
// testq.enqueue = 'first';
// testq.enqueue = 'in';
// testq.enqueue = 'last';
// testq.enqueue = 'out';
// console.log(testq);            // ---> [ 'not', 'first', 'in', 'last', 'out' ]
// // console.log(testq.show);
// console.log(testq.dequeue());  // ---> not
// console.log(testq.dequeue());  // ---> first
// console.log(testq.dequeue());  // ---> in
// console.log(testq.dequeue());  // ---> last
// console.log(testq.dequeue());  // ---> out
// console.log(testq);            // ---> input and output: []
// testq.enqueue = 'first';
// testq.enqueue = 'in';
// testq.enqueue = 'first';
// testq.enqueue = 'out';
// console.log(testq);            // ---> [ 'first', 'in', 'first', 'out' ]
// console.log(testq.dequeue());  // ---> first
// console.log(testq.dequeue());  // ---> in
// console.log(testq.dequeue());  // ---> first
// console.log(testq.dequeue());  // ---> out
// console.log(testq);            // --->


// // STACK TEST SUITE
// const test = new PhatStack(); // a new instance of the class
// console.log(test);            // ---> PhatStack { storage: [] }
// console.log(test.size);       // ---> 0 ...or, without "get" ---> [Function: size]
// // console.log(test.size());     // ---> TypeError ...or, without "get" ---> 0
// // test.add('stuff');            // add an item without setter
// test.add = 'stuff';
// console.log(test.size);       // ---> 1
// console.log(test.show);       // ---> [ 'stuff' ]
// console.log(test.storage);    // ---> [ 'stuff' ] SAME
// console.log(test.remove());   // ---> stuff (returns the removed item)
// console.log(test.size);       // ---> 0
// console.log(test.show);       // ---> []
// console.log(test.remove());   // ---> undefined (nothing to remove from an empty storage array)
// console.log(test.size);       // ---> 0
// console.log(test.show);       // ---> []
// test.add = 'more stuff'
// test.add = 'even more stuff'
// test.add = 'some more AMAZING stuff'
// console.log(test.show);       // ---> [ 'more stuff', 'even more stuff', 'some more AMAZING stuff' ]

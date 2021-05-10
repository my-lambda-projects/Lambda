/* cc28 stackOfPlates
 * Stack of Plates: Imagine a (literal) stack of plates.
                    If the stack gets too high, it might topple.
                    Therefore, in real life, we would likely start a new stack
                    when the previous stack exceeds some threshold.
 * 1) Implement a data structure SetOfStacks that mimics this.
 * 2) SetOfStacks should be composed of several stacks and
      should create a new stack once the previous one exceeds capacity.
 * 3) SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
      (that is, pop( ) should return the same values as it would if there were just a single stack).
 */

class Stack {
  constructor() {
    this.storage = [];
  }
  get size() {
    return this.storage.length;
  }
  add( anItem ) {
    return this.storage.push( anItem );
  }
  remove() {
    if ( this.storage.length === 0 ) return null;
    return this.storage.pop();
  }
};

class SetOfStacks {
  constructor( limit = 3 ) {
    this.limit = limit;
    this.storage = [];
    this.size = 0;
    // this.stack = new Stack();
  }
  size() {
    return this.size;
  }
  push( aStack ) {
    if ( this.size === this.limit ) {
      return new SetOfStacks.push( aStack ); // <~~~ Nope
    } else {
      this.size++;
      return this.storage.push( aStack );
    }
  }
  pop() {
    if ( this.storage.length === 0 ) {
      return null;
    } else {
      this.size--
      return this.storage.pop();
    }
  }
};

// TEST SUITE
pancake1 = new Stack();
pancake2 = new Stack();
pancake3 = new Stack();
pancake4 = new Stack();
pancakeSet = new SetOfStacks();
console.log( pancake1 );
console.log( pancakeSet );
pancakeSet.add( pancake1 );
pancakeSet.add( pancake2 );
pancakeSet.add( pancake3 );
console.log( pancakeSet );
pancakeSet.add( pancake4 );

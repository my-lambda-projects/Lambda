/* cc10 array
 * Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

/* class Array() to construct an object such that key: value pairs are arranged
    { index: item,     index: item,      index: item,     ... index: item }, e.g.
    {0: 'first item', 1: 'second item', 2: 'third item', ... (n-1): 'last item' }
*/

class ObjArray {
  // starts empty
  // todo: set up Array class so it can take initializing value(s), e.g. `Array(...args)`
  constructor() {
    this.nextIndex = 0;
    this.listObject = {};
  }
  // CONVENTION: INCLUDE A LENGTH PROPERTY

  // todo: push(...args)
  push( addItem ) {
    this.listObject[ this.nextIndex ] = addItem;
    this.nextIndex++;
  }
  // CONVENTION: RETURN THE VALUE WHICH HAS BEEN DELETED

  // todo: pop(#) to invoke push() # of times or from a index to the end
  pop() {
    this.nextIndex--;
    delete this.listObject[ this.nextIndex ];
  }

  // todo: get(...args)
  get( isIndex ) {
    if ( !this.listObject[ isIndex ] ) return 'nope';
    return this.listObject[ isIndex ];
  }

  // delete value at Key# (i.e. array "index"), then replace Key[n] with value at Key[n+1]
  // use current this.nextIndex (or last existing index?) to exit the shifting?
  // set nextIndex to last Key#
  // todo: delete(indexRange)?
  delete( indexValue ) {
    this.listObject[ indexValue ] = '';
    while ( indexValue < this.nextIndex ) {
      this.listObject[ indexValue ] = this.listObject[ indexValue + 1 ];
      indexValue++;
    }
    this.nextIndex = indexValue - 1;
  }

  // Helper functions
  getAllValues() {
    return Object.values( this.listObject );
  }
  getAllKeys() {
    return Object.keys( this.listObject );
  }
  getAllKeysAndValues() {
    return this.listObject;
  }
}

/* eslint no-console:0 */
// TEST SUITE
const test = new ObjArray();
console.log( 'TEST# 1 - ObjArray() instance contains:', test );
// console.log(`TEST#1A - Array() instance contains: ${test}`); // ---> :(
test.push( 'chzbrgr' );
console.log( 'TEST# 2 - ObjArray() instance contains:', test );
test.push( 'salad' );
console.log( 'TEST# 3 - ObjArray() instance contains:', test );
test.push( 'iced tea' );
console.log( 'TEST# 4 - ObjArray() instance contains:', test );
console.log( `TEST# 5: Q: to eat?            A: ${test.get(0)}` );
console.log( `TEST# 6: Q: a side?            A: ${test.get(1)}` );
console.log( `TEST# 7: Q: to drink?          A: ${test.get(2)}` );
console.log( `TEST# 8: Q: want some sodaPOP? A: ${test.get(3)}` );
test.pop();
console.log( `TEST# 9: Q: just water then?   A: ${test.get(2)}` );
console.log( `TEST#10: Q: what's for dinner?\nA: ${test.getAllValues()}` );
test.push( 'this' );
test.push( 'that' );
test.push( 'the other thing' );
test.push( 'something' );
test.push( 'another thing' );
test.push( 'aaaaand another thing' );
console.log( `TEST#11: Q: what all's in there?\nA: ${test.getAllValues()}` );
console.log( `TEST#12: Q: what all's where in there?\nA: ${test.getAllKeys()}` );
console.log( `TEST#13: Q: which what all's where in there?\nA: ${test.getAllKeysAndValues()}` ); // <---- how to get the object printed and not the type? JSON.stringify()
console.log( test.getAllKeysAndValues() );
test.delete( 5 );
console.log( `TEST#14: Q: did "something" get deleted?\nA: ${test.getAllKeysAndValues()}` );
console.log( test.getAllKeysAndValues() );
console.log( `TEST#15: Q: What's the index set to?\nA: The next index location is: ${test.nextIndex}` );
test.push( 'well lookie thar!' );
console.log( `TEST#16: Q: Did I add it to the right place?\nA: ${test.getAllKeysAndValues()}` );
console.log( test.getAllKeysAndValues() );
test.push( 'more stuff!' );
console.log( `TEST#17: Q: Wanna add some more stuff?\nA: ${test.getAllKeysAndValues()}` );
console.log( test.getAllKeysAndValues() );
test.delete( 1 );
test.delete( 3 );
test.delete( 5 );
console.log( `TEST#18: Q: What just happened???\nA: ${test.getAllKeysAndValues()}` );
console.log( test.getAllKeysAndValues() );
test.push( 'even more stuff!' );
test.push( 'so much stuff!' );
test.push( 'and even more stuff!' );
test.push( 'never ending stuff!!!' );
console.log( `TEST#17: Q: Wanna add some more stuff?\nA: ${test.getAllKeysAndValues()}` );
console.log( test.getAllKeysAndValues() );
console.log( `Q: easier to read?\nA: ${JSON.stringify(test.getAllKeysAndValues())}` );

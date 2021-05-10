/* cc25 linkedListCycles - Tai's solution
 * Create a function that returns true if a linked list contains a cycle, or false if it terminates
 *
 * Usually we assume that a linked list will end with a null next pointer, for example:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * const nodeA = new Node('A');
 * const nodeB = nodeA.next = new Node('B');
 * const nodeC = nodeB.next = new Node('C');
 * const nodeD = nodeC.next = new Node('D');
 * const nodeE = nodeD.next = new Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 * Hint: Search for Floyd's Tortoise and Hare algorithm.
 */

// Define Node as a class
// constructor passing in node
// this.value = node
// this.next = null

// define hasCycle as arrow function, that takes in a node
// let slow = head
// let fast = head
// do while loop
// if fast.next === null return false
// fast = fast.next
// if fast.next === null return false
// fast = fast.next
// slow = slow.next
// while slow !== fast
// return true

class Node {
  constructor( node ) {
    this.value = node;
    this.next = null;
  }
}

const hasCycle = ( head ) => {
  let slow = head;
  let fast = head;
  do {
    if ( fast.next === null ) return false;
    fast = fast.next;
    if ( fast.next === null ) return false;
    fast = fast.next;
    slow = slow.next;
  } while ( slow !== fast );
  return true;
}

const nodeA = new Node( 'A' );
const nodeB = nodeA.next = new Node( 'B' );
const nodeC = nodeB.next = new Node( 'C' );
const nodeD = nodeC.next = new Node( 'D' );
const nodeE = nodeD.next = new Node( 'E' );
// A -> B -> C -> D -> E -> null
console.log( hasCycle( nodeA ) ); // false
nodeE.next = nodeB;
// A -> B -> C
//      ^    |
//      |    v
//      E <- D
console.log( hasCycle( nodeA ) ); // true

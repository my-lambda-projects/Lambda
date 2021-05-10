function reverseList( node ) {
  if ( node.next === null ) return node;
  let current = node;
  let previous = null;
  while ( current ) {
    let floating = current.next;
    current.next = previous;
    previous = current;
    current = floating;
  }
  return previous;
}

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// const nodeA = new Node('A');
// const nodeB = new Node('B');
// const nodeC = new Node('C');
// nodeD
// nodeE
//
// nodeA.next = nodeB;
// nodeB.next = nodeC;
//
// reverseList(nodeA);

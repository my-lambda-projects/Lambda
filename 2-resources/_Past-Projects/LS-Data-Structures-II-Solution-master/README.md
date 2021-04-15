# Data Structures II

Topics:

 * Tree
 * Graph
 * Binary Search Tree


#### Trees

  * Should have the methods: `addChild`, and `contains`
  * Each node on the tree should have a `value` property and a `children` array.
  * `addChild(value)` should accept a value and add it to that node's `children` array.
  * `contains(value)` should return `true` if the tree or its children the given value.
  * When you add nodes to the `children` array use `new Tree(value)` to create the node.
  * You can instantiate the `Tree` class inside of itself.

#### Binary Search Tree

  * Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
  * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given callback function (hint: you'll need to either re-implement or import a queue data structure for this).

#### Graphs

  * Should have methods named `addNode`, `contains`, `removeNode`, `addEdge`, `getEdge`, and `removeEdge`
  * `addNode(newNode, toNode)` should add a new item to the graph.  If `toNode` is given then the new node should share an edge with an existing node `toNode`.
  * `contains(value)` should return true if the graph contains the given value.
  * `removeNode(value)` should remove the specified value from the graph.
  * `addEdge(fromNode, toNode)` should add an edge between the two specified nodes.
  * `getEdge(fromNode, toNode)` should return `true` if an edge exists between the two specified graph nodes.
  * `removeEdge(fromNode, toNode)` should remove the edge between the two specified nodes.


### Extra Credit

 * Add a method to the `Graph` class that searches through the graph using edges. Make this search first as a depth first search and then refactor to a breadth first search.
 * Read up on [heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)) here. Then implement one!
 * Read up on [red-black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) here. Then implement one!

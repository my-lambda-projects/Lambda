# General Data Structures Notes

### Section 1: Data Structures and Algorithms

**Book:** [Problem Solving with Algorithms and Data Structures using Python](https://runestone.academy/runestone/books/published/pythonds/index.html)

- For those who needs to study the fundamental data structures and algorithms, highly recommend to go over above textbook thoroughly first, and then come back to the following content, or practice on Leetcode or other platform

**Basic data structures**:

- Array
- Linked List
- Stack
- Queue
- Hash Table
- Tree
- Graph

**Common Algorithm Types**:

- Brute Force
- Search and Sort
- Recursive
- Backtracking
- Dynamic Programming
- Divide and Conquer
- Greedy
- Branch and Bound

**Big O Notations**:

- It is critical that you understand and are able to calculate the Big O for the code you wrote.
- **The order of magnitude function describes the part of T\(n\) that increases the fastest as the value of n increases. Order of magnitude is often called Big-O notation \(for “order”\) and written as O\(f\(n\)\).**
- Basically, the Big O measures the number of assignment statements

  | f\(n\)  | Name        |
  | :------ | :---------- |
  | 1       | Constant    |
  | log n   | Logarithmic |
  | n       | Linear      |
  | n log n | Log Linear  |
  | n^2     | Quadratic   |
  | n^3     | Cubic       |
  | 2^n     | Exponential |

  [![BigO Image](https://camo.githubusercontent.com/0c10cd72cb4a5c73e7139648bcb79b107fb6df017d84b8f321fea2aa63d4d47d/68747470733a2f2f72756e6573746f6e652e61636164656d792f72756e6573746f6e652f626f6f6b732f7075626c69736865642f707974686f6e64732f5f696d616765732f6e6577706c6f742e706e67)](https://camo.githubusercontent.com/0c10cd72cb4a5c73e7139648bcb79b107fb6df017d84b8f321fea2aa63d4d47d/68747470733a2f2f72756e6573746f6e652e61636164656d792f72756e6573746f6e652f626f6f6b732f7075626c69736865642f707974686f6e64732f5f696d616765732f6e6577706c6f742e706e67)

#### Chapter 1: Data Structures

**1.1 Array**

- An array \(in Python its called _list_\) is a collection of items where each item holds a relative position with respect to the others.

**1.2 Linked List**

- Similar to array, but requires O\(N\) time on average to visit an element by index
- Linked list utilize memory better than array, since it can use discrete memory space, whereas array must use continuous memory space
- [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/linked_list.md)

**1.3 Stack**

- Stacks are fundamentally important, as they can be used to reverse the order of items.
- The order of insertion is the reverse of the order of removal.
- Stack maintain a FILO \(first in last out\) ordering property.
- When pop is called on the end of the list it takes O\(1\) but when pop is called on the first element in the list or anywhere in the middle it is O\(n\) \(in Python\).

**1.3.1 Arithmetic Expressions**

- Infix: the operator is in between the two operands that it is working on \(i.e. A+B\)
  - Fully Parenthesized expression: uses one pair of parentheses for each operator. \(i.e. \(\(A + \(B \* C\)\) + D\)\)
- Prefix: all operators precede the two operands that they work on \(i.e. +AB\)
- Postfix: operators come after the corresponding operands \(i.e. AB+\)

| Infix Expression       | Prefix Expression | Postfix Expression |
| :--------------------- | :---------------- | :----------------- |
| A + B                  | + A B             | A B +              |
| A + B \* C             | + A \* B C        | A B C \* +         |
| \(A + B\) \* C         | \* + A B C        | A B + C \*         |
| A + B \* C + D         | + + A \* B C D    | A B C \* + D +     |
| \(A + B\) \* \(C + D\) | \* + A B + C D    | A B + C D + \*     |
| A \* B + C \* D        | + \* A B \* C D   | A B \* C D \* +    |
| A + B + C + D          | + + + A B C D     | A B + C + D +      |

- **NOTE:**
  - Only infix notation requires parentheses to determine precedence
  - The order of operations within prefix and postfix expressions is completely determined by the position of the operator and nothing else

**1.4 Queue**

- A queue is structured as an ordered collection of items which are added at one end, called the “rear,” and removed from the other end, called the “front.”
- Queues maintain a FIFO ordering property.
- A _**deque**_, also known as a double-ended queue, is an ordered collection of items similar to the queue.
  - It has two ends, a front and a rear, and the items remain positioned in the collection.
  - New items can be added at either the front or the rear.
  - Likewise, existing items can be removed from either end.

**1.5 Hash Table**

- A **hash table** is a collection of items which are stored in such a way as to make it easy to find them later.
- Each position of the hash table, often called a slot, can hold an item and is named by an integer value starting at 0.
- The mapping between an item and the slot where that item belongs in the hash table is called the **hash function**.
  - **Remainder method** takes an item and divides it by the table size, returning the remainder as its hash value \(i.e. `h(item) = item % 11`\)
  - **load factor** is the number of items devided by the table size
  - **collision** refers to the situation that multiple items have the same hash value
  - **folding method** for constructing hash functions begins by dividing the item into equal-size pieces \(the last piece may not be of equal size\). These pieces are then added together to give the resulting hash value.
  - **mid-square method** first squares the item, and then extract some portion of the resulting digits. For example, 44^2 = 1936, extract middle two digits 93, then perform remainder step \(93%11=5\).
- **Collision Resolution** is the process to systemacticly place the second item in the hash table when two items hash to the same slot.
- **Open addressing \(linear probing\):** sequentially find the next open slot or address in the hash table
  - A disadvantage to linear probing is the tendency for clustering; items become clustered in the table.
  - **Rehashing** is one way to deal with clustering, which is to skip the slot when looking sequentially for the next open slot, thereby more evenly distributing the items that have caused collisions.
- **Quadratic probing:** instead of using a constant “skip” value, we use a rehash function that increments the hash value by 1, 3, 5, 7, 9, and so on. This means that if the first hash value is h, the successive values are h+1, h+4, h+9, h+16, and so on.
- **Chaining** allows many items to exist at the same location in the hash table.
  - When collisions happen, the item is still placed in the proper slot of the hash table.
  - As more and more items hash to the same location, the difficulty of searching for the item in the collection increases. [![](https://camo.githubusercontent.com/2f688991ef488f29242d72b62e9f5137545ee3653290adb7557dd875e5851c28/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f636861696e696e672e706e67)](https://camo.githubusercontent.com/2f688991ef488f29242d72b62e9f5137545ee3653290adb7557dd875e5851c28/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f636861696e696e672e706e67)
- The initial size for the hash table has to be a prime number so that the collision resolution algorithm can be as efficient as possible.

**1.6 Trees**

- A tree data structure has its root at the top and its leaves on the bottom.
- Three properties of tree:
  1. we start at the top of the tree and follow a path made of circles and arrows all the way to the bottom.
  2. all of the children of one node are independent of the children of another node.
  3. each leaf node is unique.
- **binary tree:** each node in the tree has a maximum of two children.
  - A **balanced binary tree** has roughly the same number of nodes in the left and right subtrees of the root.

**1.6.1 Tree Traversal: access the nodes of the tree**

- Tree traversal is the foundation of all tree related problems.
- Here are a few different ways to traverse a tree:
  - BFS: Level-order
  - DFS: Pre-order, In-order, Post-order
  - [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/tree_traversal.md)

**1.6.2 Binary Search Tree \(BST\)**

- BST Property \(left subtree &lt; root &lt; right subtree\):
  1. The value in each node must be `greater than (or equal to)` any values stored in its left subtree.
  2. The value in each node must be `less than (or equal to)` any values stored in its right subtree.
- `Inorder traversal` in BST will be in `ascending order`. Therefore, the inorder traversal is the most frequent used traversal method of a BST.
- **successor:** the node that has the next-largest key in the tree
  - it has no more than one child
- You could go over the [Leetcode Binary Search Tree topic](https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/) for details

**1.6.3 Heap / Priority Queue / Binary Heap**

- **Priority Queue:**
  - the logical order of items inside a queue is determined by their priority.
  - The highest priority items are at the front of the queue and the lowest priority items are at the back.
- **Binary Heap:** the classic way to implement a priority queue.
  - both enqueue and dequeue items are **O\(logn\)**
  - **min heap:** the smallest key is always at the front
  - **max heap:** the largest key value is always at the front
  - **complete binary tree:** a tree in which each level has all of its nodes \(except the bottom level\)
    - can be implemented using a single list
    - Because the tree is complete, the left child of a parent \(at position **p**\) is the node that is found in position **2p** in the list. Similarly, the right child of the parent is at position **2p+1** in the list. [![](https://camo.githubusercontent.com/8d52ed9541e243376b0824903076f293cee0a483c1487ed9d204e29637983c9a/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f686561704f726465722e706e67)](https://camo.githubusercontent.com/8d52ed9541e243376b0824903076f293cee0a483c1487ed9d204e29637983c9a/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f686561704f726465722e706e67)
  - **heap order property:** In a heap, for every node **x** with parent **p**, the key in **p** is smaller than or equal to the key in **x**.
    - For example, the root of the tree must be the smallest item in the tree
  - When to use heap:
    - Priority Queue implementation
    - whenever need quick access to largest/smallest item
      - Instant access to the item
      - insertions are fast, allow in-place sorting
    - More details can be seen in [this discussion](https://stackoverflow.com/questions/749199/when-would-i-want-to-use-a-heap)

**1.6.4 More Trees**

- _**Parse tree**_ can be used to represent real-world constructions like sentences or mathematical expressions.
  - A simple solution to keeping track of parents as we traverse the tree is to use a stack.
  - When we want to descend to a child of the current node, we first push the current node on the stack.
  - When we want to return to the parent of the current node, we pop the parent off the stack.
- _**AVL Tree**_: a balanced binary tree. the AVL is named for its inventors G.M. Adelson-Velskii and E.M. Landis.
  - For each node: _balanceFactor_ = _height\(leftSubTree\)_ − _height\(rightSubTree\)_
  - a subtree is left-heavy if _balance_factor &gt; 0_
  - a subtree is right-heavy if _balance_factor &lt; 0_
  - a subtree is perfectly in balance if _balance_factor = 0_
  - For simplicity we can define a tree to be in balance if the balance factor is -1, 0, or 1.
  - The number of nodes follows the pattern of _Fibonacci sequence_, as the number of elements get larger the ratio of Fi/Fi-1 closes to the golden ratio, so the time complexity is derived to be **O\(log n\)**
- _**Red-Black Tree**_
  - [Details in Wiki](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- _**B+ Tree**_: N-array tree
  - [Details in Wiki](https://en.wikipedia.org/wiki/B%2B_tree)
- _**Trie**_
  - _This is a common data structure in interviews_
  - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/trie.md)
- _**Binary Index Tree \(Fenwick Tree\)**_
  - [Binary Index Tree \(Fenwick Tree\)](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
  - [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)

**1.7 Graph**

**1.7.1 Vocabulary and Definitions**

- **Vertex \(or Node\):** the name is called "key" and the additional information is called "payload"
- **Edge \(or arc\):** it connects two vertices to show that there is a relationship between them.
  - One way edge is called **directed graph \(or digraph\)**
- **Weight:** edges maybe weighted to show that there is a coset to fo from one vertex to another.
- **Path:** a sequence of vertices that are connected bny edges
  - Unweighted path length is the number of edges in the path, specifically n-
  - Weighted path is the sum of the weights of all the edges in the path
- **Cycle:** a path that starts and ends at the same vertex
  - A graph with no cycles is called an **acyclic graph**.
  - A directed graph with no cycles is called a **directed acyclic graph \(or DAG\)**
- **Graph:** a graph \(G\) is composed with a set of vertices \(V\) and edges \(E\) Each edge is a tuple of vertex and weight \(v,w\). G=\(V,E\) where w,v∈V

**1.7.2 Graph Representation**

- Adjacency Matrix \(2D matrix\)
  - Good when number of edges is large
  - Each of the rows and columns represent a vertex in the graph.
  - The value in the cell at the intersection of row v and column w indicates if there is an edge from vertex v to vertex w. It also represents the weight of the edge from vertex v to vertex w.
  - When two vertices are connected by an edge, we say that they are **adjacent** [![](https://camo.githubusercontent.com/72d272bc0fbbee67b8b6a54f62208602d612edc61052a55c7fa339bd955ff4df/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a4d61742e706e67)](https://camo.githubusercontent.com/72d272bc0fbbee67b8b6a54f62208602d612edc61052a55c7fa339bd955ff4df/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a4d61742e706e67)
  - **sparse:** most of the cells in the matrix are empty
- Adjacency List
  - space-efficient way for implementation
  - keep a master list of all the vertices in the Graph object. each vertex is an element of the list with the vertex as ID and a list of its adjacent vertices as value [![](https://camo.githubusercontent.com/57590f7986a5ec8f3e66b93edd06da65ed00c57b199a11d210a4aa10e19cf6ce/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a6c6973742e706e67)](https://camo.githubusercontent.com/57590f7986a5ec8f3e66b93edd06da65ed00c57b199a11d210a4aa10e19cf6ce/687474703a2f2f696e746572616374697665707974686f6e2e6f72672f72756e6573746f6e652f7374617469632f707974686f6e64732f5f696d616765732f61646a6c6973742e706e67)

**1.7.3 Graph Algorithms**

- Graph traversal: BFS & DFS
  - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/graph_traversal.md)
- Graph Algorithms:
  - Shortest Path:
    - Dijkstra’s Algorithm \(Single source point\)
      - _**Essentially, this is a BFS using priority queue instead of queue**_
      - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/dijkstra.md)
    - Floyd Warshall Algorithm \(Multiple source point\)
  - Topological Sort
    - [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/topological_sort.md)
  - Strongly Connected Components
    - [More Info](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/graph_SCC.md)
  - Prim’s Spanning Tree Algorithm
    - [More Info](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/prim_spanning_tree.md)

#### Chapter 2: Common Algorithm Types

**2.1 Brute Force**

- Most common algorithm
- Whenever you are facing a problem without many clues, you should solve it using brute force first, and observe the process and try to optimize your solution

**2.2 Search**

**2.2.1 Sequential Search**

- Sequential Search: visit the stored value in a sequence \(use loop\)

**2.2.2 Binary Search**

- Examine the middle item of an ordered list
- KEY is the search interval
- [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/binary_search.md)

**2.3 Sort**

**2.3.1 Bubble Sort**

- Compares adjacent items and exchanges those that are out of order.
- **Short bubble:** stop early if it finds that the list has become sorted.
- time complexity: O\(n2\)

**2.3.2 Selection Sort**

- Looks for the largest value as it makes a pass and, after completing the pass, places it in the proper location.
- time complexity: O\(n2\)

**2.3.3 Insertion Sort**

- Maintains a sorted sub-list in the lower positions of the list.
- Each new item is then “inserted” back into the previous sub-list such that the sorted sub-list is one item larger.
- time complexity: O\(n2\)

**2.3.4 Shell Sort**

- Breaks the original list into a number of smaller sub-lists, each of which is sorted using an insertion sort.
  - the shell sort uses an increment _i_, sometimes called the **gap**, to create a sub-list by choosing all items that are _i_ items apart.
  - After all the sub-lists are sorted, it finally does a standard insertion sort
  - time complexity goes between O\(n\) and O\(n2\), by changing the increment, a shell sort can perform at O\(n^\(3/2\)\).

**2.3.5 Merge Sort**

- A recursive algorithm that continually splits a list in half.
- [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/merge_sort.md)

**2.3.6 Quick Sort**

- First selects a value \(**pivot value**\), and then use this value to assist with splitting the list.
- [Details and Templates](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/quick_sort.md)

**2.3.7 Heap Sort**

- Use the property of heap to sort the list

**2.4 Recursion**

**Recursion** is a method of solving problems that involves breaking a problem down into smaller and smaller sub-problems until you get to a small enough problem that it can be solved trivially. Usually recursion involves a function calling itself.

Three Laws of Recursion:

1. A recursive algorithm must have a base case.
2. A recursive algorithm must change its state and move toward the base case.
3. A recursive algorithm must call itself, recursively.

Recursive visualization: Fractal tree

- A **fractal** is something that looks the same at all different levels of magnification.
- A fractal tree: a small twig has the same shape and characteristics as a whole tree.

**2.4.1 Recursive function in Python**

- When a function is called in Python, a stack frame is allocated to handle the local variables of the function.
- When the function returns, the return value is left on top of the stack for the calling function to access.
- Even though we are calling the same function over and over, each call creates a new scope for the variables that are local to the function.

**2.5 Backtracking**

- a general algorithm for finding all \(or some\) solutions to constraint satisfaction problems \(i.e. chess, puzzles, crosswords, verbal arithmetic, Sudoku, etc\)
- [Template](https://github.com/zmcddn/coding-interview-guide/blob/master/Templates/backtrack.md)

**2.6 Dynamic Programming**

**Dynamic Programming \(DP\)** is an algorithm technique which is usually based on a recurrent formula and one \(or some\) starting states. - A sub-solution of the problem is constructed from previously found ones. - Usually used to find the extreme cases such as shortest path, best fit, smallest set, etc.

**2.7 Divide and Conquer**

- **Divide**: break into non-overlapping sub-problems of the same type \(of problem\)
- **Conquer**: solve sub-problems
- the algorithm is to keep dividing and conquering, and finally combine them to get the solution
- the algorithm can be written in recursive or loop

**2.8 Greedy**

**Greedy algorithm:**

- find a safe move first
- prove safety
- solve subproblem \(which should be similar to original problem\)
- estimate running time

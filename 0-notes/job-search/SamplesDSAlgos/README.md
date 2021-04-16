# Data Structures and Algorithms

Notes about individual data structures and algorithms may be found directly within samples.

**theoretical CS**:  writing big O complexity analysis
<br>
**experimental CS**:  run function with 100k inputs & measure how long it took
<br>

## Table of Contents

- [Dynamic Programming](#dynamic-programming)
- [Backtracking](#backtracking)
- [Algorithms](#algorithms)
  - [Big O](#big-o)
  - [Search](#search)
    - [Binary Search](#binary-search)
    - [Depth-First Search](#depth-first-search)
    - [Breadth-First Search](#breadth-first-search)
    - [Linear Search](#linear-search)
  - [Sort](#sort)
    - [Quick Sort](#quick-sort)
    - [Radix Sort](#radix-sort)
    - [Merge Sort](#merge-sort)
    - [Min Heaps](#min-heaps)
    - [Max Heaps](#max-heaps)
    - [Bucket Sort](#bucket-sort)
    - [Selection Sort](#selection-sort)
    - [Insertion Sort](#insertion-sort)
    - [Counting Sort](#counting-sort)
    - [Bubble Sort](#bubble-sort)
- [Data Structures](#data-structures)
  - [Big O Chart](#big-o-chart)
  - [Time Definitions](#time-definitions)
  - [Singly Linked Lists](#singly-linked-lists)
  - [Doubly Linked Lists](#doubly-linked-lists)
  - [Reverse Linked Lists](#reverse-linked-lists)
  - [Binary Search Trees](#binary-search-trees)
  - [Hash Tables](#hash-tables)
  - [Queues](#queues)
  - [Stacks](#stacks)
  - [Skip Lists](#skip-lists)
  - [Tries](#tries)
  - [Bloom Filter](#bloom-filter)
  - [Heaps](#heaps)
  - [LRU Cache](#lru-cache)
  - [Generic Heaps](#generic-heaps)
  - [AVL Tree](#avl-tree)
  - [Graphs](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/graphs)
  - [Dijsktra's Greedy](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/graphs/DijsktraGreedy.py)
- [Stack vs Heap Memory Allocation](#stack-vs-heap-memory-allocation)
  - [Stack Allocation](#stack-allocation)
  - [Heap Allocation](#heap-allocation)
  - [Key Differences Between Stack & Heap Allocations](#key-differences-between-stack-and-heap-allocations)
  - [Comparison Chart](#comparison-chart)

## Dynamic Programming

- way of making algorithm more efficient by storing some of the intermediate results
- works really well when your algorithm has a lot of repetitive computations

## Backtracking

[Backtracking by Geeks for Geeks](https://www.geeksforgeeks.org/backtracking-introduction/)

**backtracking**:  a general algorithmic technique that considers searching every possible combination in order to solve a computational problem; an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).

- three types of problems in backtracking:
  - **decision**:  search for a feasible solution
  - **optimization**:  search for the best solution
  - **enumeration**:  find all feasible solutions

- generally exponential in both time and space complexity

### Recursive Backtracking Solution

```pseudocode
def findSolutions(n, other params):
  if (found a solution):
    solutionsFound = solutionsFound + 1
    displaySolution()
    if (solutionsFound >= solutionTarget):
        System.exit(0)
    return

  for (val = first to last):
    if (isValid(val, n)):
      applyValue(val, n)
      findSolutions(n+1, other params)
      removeValue(val, n)
```

### Finding Whether Solution Exists Or Not

```pseudocode
boolean findSolutions(n, other params):
  if (found a solution):
    displaySolution()
    return true;

  for (val = first to last):
    if (isValid(val, n)):
      applyValue(val, n)
      if (findSolutions(n+1, other params)):
        return true
      removeValue(val, n)
    return false
```

## Algorithms

### Big O

|           |  Time Best  | Time Average | Time Worst |Worst Space|
|:---------:|:-----------:|:------------:|:----------:|:---------:|
|   Quick   | O(n log(n)) | O(n log(n)) | O(n^2) | O(log(n)) |
|   Merge   | O(n log(n)) | O(n log(n)) | O(n^2) |    O(n)   |
|    Heap   |     O(n)    | O(n log(n)) | O(n^2) |    O(1)   |
|   Bubble  |     O(n)    |    O(n^2)   | O(n^2) |    O(1)   |
| Insertion |     O(n)    |    O(n^2)   | O(n^2) |    O(1)   |
| Selection |    O(n^2)   |    O(n^2)   | O(n^2) |    O(1)   |
|    Tree   | O(n log(n)) | O(n log(n)) | O(n^2) |    O(n)   |
|   Bucket  |    O(n+k)   |    O(n+k)   | O(n^2) |    O(n)   |
|   Radix   |    O(nk)    |    O(nk)    |  O(nk) |   O(n+k)  |
|  Counting |    O(n+k)   |    O(n+k)   | O(n+k) |    O(k)   |

### Search

#### Binary Search

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/search/search_binary.py)

```pseudocode
time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
space complexity:  O(1)
```

- Only works if array is sorted
- break into halves several times, being able to eliminate halves quickly to find what you're looking for

![Image of Binary Search](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/gifs/binary_search.gif)<br>
[credit to Brilliant](https://brilliant.org/wiki/binary-search/)

#### Depth-First Search

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/search/search_depth_breadth_first.py)

- Algorithm explores as far as possible along each branch before backtracking
  - for each node, process node, process left subtree, then right subtree, then add, copy, etc.

  - one that continues traveling forward on each branch until a dead end is reached
  - search then retreats to first unexplored path and follows next unexplored path until that one, too, reaches a dead end
  - continues until all nodes have been visited
  - recursive or iterative --> makes use of stack

![Image of Depth-First Search](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/gifs/dfs.gif)<br>
[credit to Ray Wenderlich](https://www.raywenderlich.com/661-swift-algorithm-club-swift-depth-first-search)

##### In-Order, Pre-Order, & Post-Order Traversals

for depth-first traversals only

```pseudocode
time complexity:   O(n)
space complexity:  O(1)
```

- **In-Order**:  recursively call method on left tree, process node, call method on right tree
  - use for sorted list out of BST
- **Pre-Order**:  process node, recursively call method on left tree, call method on right tree
  - use for deep copy of tree
- **Post-Order**: recursively call method on left tree, call method on right tree, process node
  - use for deleting tree

#### Breadth-First Search

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/search/search_depth_breadth_first.py)

```pseudocode
- time complexity:   O(Vertices + Edges) (Worst)
- space complexity:  O(Vertices) (Worst)
```

- Algorithm explores all neighbor nodes at present depth prior to moving on to next level
  - can be resolved iteratively (preferred) or recursively
  - useful when what you're seeking is closer to root node
  - process one layer/level at a time
  - process node, add left child to queue, then right child
  - dequeue them off queue and call function on that node
  - repeat until none left
  
  - opposite of depth-first
  - explore layer by layer, moving outward from starting point
  - at each node, we discover to list of nodes to explore
  - then explore nodes in order we encounter them
    - use queue for this
  - will jump around a bit because next node we visit might not be connected to current

![Image of Breadth-First Search](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/gifs/bfs.gif)<br>
[credit to Brendan Higgins](https://github.com/bah87/maze-runner)

#### Linear Search

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/search/search_linear.py)

```pseudocode
time complexity:  Best O(1)   |   Avg O(log(n))   |   Worst O(log(n))
space complexity:  O(1)
```

- go line by line, one item by one item & check value at that index
- when found, stop
- simplest; only useful if list you're searching is unsorted

![Image of Linear Search](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/gifs/linear-search.gif)<br>
[credit to The Algorithms](https://recordnotfound.com/Python-TheAlgorithms-134853)

### Sort

#### Quick Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_quick.py)

```pseudocode
time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n^2)
space complexity:  O(log(n))
```

- choose pivot
- rearrange everything according to its relationship with pivot
- sort into 2 lists and resort until done
- works better when pivot is in middle or random
- recursive
- better with runtimes than many iterative solutions

#### Radix Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_radix.py)

```pseudocode
time complexity:  Best O(nk)   |   Avg O(nk)   |   Worst O(nk)
space complexity:  O(n+k)
```

- only used to sort numbers
- sort numbers from least to most significant digit
  - sort by ones place, then tens place, then hundreds place, etc.
- use count sort as sorting subroutine
- k = number of elements

- linear sorting algorithm
- not an in-place sorting algorithm as it requires extra additional space
- stable sort as relative order of elements with equal values is maintained
- can be slower than other sorting algorithms like merge and quick sort if operations are not efficient enough
  - These operations include insert and delete functions of the sub-list & the process of isolating the digits we want.
- less flexible than other sorts as it depends on the digits or letter
- needs to be rewritten if the type of data is changed

#### Merge Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_merge_recursive.py)

```pseudocode
time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
space complexity:  O(n) because we create new lists as we go
```

- divide in half until you have sub-arrays of single elements
- then merge sorted lists together
- very useful, easier to understand than others, recursive
- effective and stable
- use if you have equivalent elements; will keep their original order in array

- take big list & divide into two half-lists
- recursively call merge sort on smaller list, which will in turn do the same
- base case = list of one
- on way up recursive calls, you will merge sorted lists together
  - using function walking through both simultaneously & inserts
  - smaller value first, creating bigger sorted list

#### Min Heaps

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_heap_min.py)

```pseudocode
time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
space complexity:  O(1)
```

- data structure optimized for retrieving either maximal or minimal values of a dataset
- all about maximizing priority
- binary tree data structure centered around the heap property
  - always satisfies the heap property
- root element of heap is max value of all heap elements
- array representing the data structure
- has to be sorted in particular way to represent that tree priority queues often 
  - represented as heaps
  - often these terms used interchangeably
- priority queues are often heaps; easy to tell largest number
  - none of other guaranteed, but once you dequeue, easy to find next item in queue
- combining of tree & array based approaches doesn't make heap a particularly intuitive data structure to understand & grasp
- maximally efficient at what they do
- very flexible since we can generalize idea of priority to many different contexts
- arrays well-suited to storing heaps not just because off constant-time access to any element, but also we can more easily swap elements in different positions throughout heap easily, again due to array indexing
- can use queue

- to fetch a node's parent, floor((x-1)/2)
- emulates a binary tree structure of a heap using an array, with added benefit of now-constant-time access to any element in heap that comes with array indexing

- when using BST, problem is we only have direct access to node
- to construct max heap, run heapify starting @ array middle and work backwards to root.

#### Max Heaps

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_heap_max.py)

```pseudocode
time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
space complexity:  O(1)
```

- data structure optimized for retrieving either maximal or minimal values of a dataset
- all about maximizing priority
- binary tree data structure centered around the heap property
  - always satisfies the heap property
- root element of heap is max value of all heap elements
- array representing the data structure
- has to be sorted in particular way to represent that tree priority queues often 
  - represented as heaps
  - often these terms used interchangeably
- priority queues are often heaps; easy to tell largest number
  - none of other guaranteed, but once you dequeue, easy to find next item in queue
- combining of tree & array based approaches doesn't make heap a particularly intuitive data structure to understand & grasp
- maximally efficient at what they do
- very flexible since we can generalize idea of priority to many different contexts
- arrays well-suited to storing heaps not just because off constant-time access to any element, but also we can more easily swap elements in different positions throughout heap easily, again due to array indexing
- can use queue

- to fetch a node's parent, floor((x-1)/2)
- emulates a binary tree structure of a heap using an array, with added benefit of now-constant-time access to any element in heap that comes with array indexing

- when using BST, problem is we only have direct access to node
- to construct max heap, run heapify starting @ array middle and work backwards to root.

#### Bucket Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_bucket.py)

```pseudocode
time complexity:  Best O(n+k)   |   Avg O(n+k)   |   Worst O(n^2)
space complexity:  O(n)
```

- mainly useful when input is uniformly distributed over a range.
- buckets created to put elements into
  - number of elements = number of buckets
- apply insertion sort to each bucket
- concatenate buckets to get sorted array

#### Selection Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_selection.py)

```pseudocode
time complexity:  Best O(n^2)   |   Avg O(n^2)   |   Worst O(n^2)
space complexity:  O(1)
```

- Always select and move smallest element until all are in order.

#### Insertion Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_insertion.py)

```pseudocode
time complexity:  Best O(n)   |   Avg O(n^2)   |   Worst O(n^2)
space complexity:  O(1)
```

- Start at beginning of list.
- Assume sorted list of length 1 where first element is only sorted element.
- Grab second element and insert into correct spot in list.
- Now sorted list length = 2.
- Continue until unsorted is complete.

#### Counting Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_count.py)

```pseudocode
time complexity:  Best O(n+k)   |   Avg O(n+k)   |   Worst O(n+k)
  O(Maximum key value – Minimum key value), linear
space complexity:  O(k)
```

- get maximum element from array
- define count array of size `[max+1]`
- set all elements in the count array to 0
- increase count of each number which are found in the array
- find cumulative frequency
- store the number in the output array
- decrease count for same numbers `(count[i])`
- return the output array

- not an in-place sorting algorithm
- stable sort
- inefficient if range of key value `k` is very large
- can only sort discrete values like integer

#### Bubble Sort

[Sample](https://github.com/evoingram/endorsement/blob/master/SamplesDSAlgos/sort/sort_bubble.py)

```pseudocode
time complexity:  Best O(n)   |   Avg O(n^2)   |   Worst O(n^2)
space complexity:  O(1)
```

- loop through array and compare each index with index next to it
- if out of order, swap them
- loop over array until everything in place AND nothing swapped during last iteration

## Data Structures

### Big O Chart

|   Data Structure   | Average Access | Worst Access | Average Search | Worst Search | Average Insertion | Worst Insertion | Average Deletion | Worst Deletion | Worst Space |
|:------------------:|:--------------:|--------------|:--------------:|--------------|:-----------------:|-----------------|:----------------:|----------------|-------------|
|        Array       |      O(1)      | O(1)         |      O(n)      | O(n)         |        O(n)       | O(n)            |       O(n)       | O(n)           | O(n)        |
|        Stack       |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
|        Queue       |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
| Singly Linked List |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
| Doubly Linked List |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
|      Skip List     |    O(log(n))   | O(n)         |    O(log(n))   | O(n)         |     O(log(n))     | O(n)            |     O(log(n))    | O(n)           | O(n log(n)) |
|     Hash Table     |       N/A      | N/A          |      O(1)      | O(n)         |        O(1)       | O(n)            |       O(1)       | O(n)           | O(n)        |
| Binary Search Tree |    O(log(n))   | O(n)         |    O(log(n))   | O(n)         |     O(log(n))     | O(n)            |     O(log(n))    | O(n)           | O(n)        |
|      AVL Tree      |    O(log(n))   | O(log(n))    |    O(log(n))   | O(log(n))    |     O(log(n))     | O(log(n))       |     O(log(n))    | O(log(n))      | O(n)        |

### Time Definitions

- **constant**:  does not scale with input, will take same amount of time
  - for any input size n, constant time performs same number of operations every time
- **logarithmic**:  increases number of operations it performs as logarithmic function of input size n
  - function log n grows very slowly, so as n gets longer, number of operations the algorithm needs to perform doesn't increase very much
- **linear**:  increases number of operations it performs as linear function of input size n
  - number of additional operations needed to perform grows in direct proportion to increase in input size n
- **log-linear**:  increases number of operations it performs as log-linear function of input size n
  - looking over every element and doing work on each one
- **quadratic**:  increases number of operations it performs as quadratic function of input size n
- **exponential**:  increases number of operations it performs as exponential function of input size n
  - number of nested loops increases as function of n
- **polynomial**:  as size of input increases, runtime/space used will grow at a faster rate
- **factorial**:  as size of input increases, runtime/space used will grow astronomically even with relatively small inputs
- **rate of growth**:  how fast a function grows with input size

| Big O | Classification | Rate |
|:-----:|:--------------:|:----:|
| O(c) | constant | Better |
| O(log(n)) | logarithmic |  |
| O(n) | linear |  |
| O(n log(n)) | log-linear |  |
| O(n^c) | quadratic |  |
| O(c^n) | exponential | Worst |

### Singly Linked Lists

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-linkedlist_singly.py)

```pseudocode
time complexity:   Avg   |  Worst
    Access:       O(n)   |   O(n)
    Search:       O(n)   |   O(n)
    Insertion:    O(1)   |   O(1)
    Deletion:     O(1)   |   O(1)
space complexity:  O(n)
```

- made of bunch of nodes that point to next one in list
- every node has two properties:
  - value of whatever is being stored
  - pointer to next node in list
- adding and removing is easy; change next pointer on previous node (O(n))
  - similar to arrays
- commonly used for holding lists of data
  - certain cases when better than array

#### Difference between singly and doubly linked lists

- A singly linked list is a set of nodes where each node has two fields ‘data’ and ‘link’.
  - The ‘data’ field stores actual piece of information and ‘link’ field is used to point to next node.
  - Basically ‘link’ field is nothing but address only.
-A doubly linked list contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.

### Doubly Linked Lists

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-linkedlist_doubly.py)

```pseudocode
time complexity:   Avg   | Worst
    Access:       O(n)   |   O(n)
    Search:       O(n)   |   O(n)
    Insertion:    O(1)   |   O(1)
    Deletion:     O(1)   |   O(1)
space complexity:  O(n)
```

- made of bunch of nodes that point to next one in list
- every node has three properties:
  - value of whatever is being stored
  - pointer to next node in list
  - pointer to previous node in list
- adding and removing is easy; change next pointer on previous node (O(n))
  - similar to arrays
- commonly used for holding lists of data
  - certain cases when better than array

![Image of Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/610px-Doubly-linked-list.svg.png)

#### Difference between singly & doubly linked lists

- A singly linked list is a set of nodes where each node has two fields ‘data’ and ‘link’.
  - The ‘data’ field stores actual piece of information and ‘link’ field is used to point to next node.
  - Basically ‘link’ field is nothing but address only.
-A doubly linked list contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.

### Reverse Linked List

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-linkedlist_reverse.py)

```pseudocode
time complexity:   Avg   | Worst
    Access:       O(n)   |   O(n)
    Search:       O(n)   |   O(n)
    Insertion:    O(1)   |   O(1)
    Deletion:     O(1)   |   O(1)
space complexity:  O(n)
```

### Binary Search Trees

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-binary_search_tree.py)

```pseudocode
time complexity:     Avg      |   Worst
    Access:       O(log(n))   |   O(n)
    Search:       O(log(n))   |   O(n)
    Insertion:    O(log(n))   |   O(n)
    Deletion:     O(log(n))   |   O(n)
space complexity:  O(n)
```

- Binary search trees are a data structure that enforce an ordering over the data they store.
- That ordering in turn makes it a lot more efficient at searching for a particular piece of data in the tree.
- extremely efficient data structure with searching
- consists entirely of nodes holding values, with each node referencing other nodes
- in trees in general, each node is not constrained to just referencing a single other node
- tree data structures where each node can reference 0-2 other nodes, left & right maintain invariant/rule that if a node has a left child node it points to, that left node's value is strictly less than parent node value and, respectively, right child is greater
- trees can be thought of as linked lists, but without constraint that each node only points to one other node; can point to multiple nodes in tree
- linked lists themselves count as trees
- a common trees classification is to talk about them in terms of the max number of nodes that a single node can point to
- more efficient than array or linked list
- inefficient to insert into a BST
- performance of BST depends quite a lot on whether tree is balanced or not
- useful structure for middle ground between linked lists and arraylists
- bst makes it very easy and simple to add & find new elements
  - just change pointer to add new elements like linked lists
- performs well if you stay away from edge cases

#### RELATED TERMS

- **root**:      topmost node in tree
- **child**:     node directly connected to another node when moving away from root node
- **parent**:    node directly connected to another node when moving towards root node
- **siblings**:  nodes sharing same parent
- **leaf**:      node with no children

![Image of Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png)

### Hash Tables

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-hashtable.py)

```pseudocode
time complexity:   Avg   |   Worst
    Access:       N/A    |   N/A
    Search:       O(1)   |   O(n)
    Insertion:    O(1)   |   O(n)
    Deletion:     O(1)   |   O(n)
space complexity:  O(n)
```

- array with elements indexed by hashed key
- associative arrays and dictionaries
- objects
- caches (memcached)
- dynamic programming, memoization
- send key through hashing function (MD5, SHA1, etc.), which converts to addressable space (index)
- powerful for maps because now our key points to where our object is being stored
- powerful for sets because we can check where if anything exists at that memory address and, if so, then it exists; if not, then key is not in set
- no look-up cost when deleting or adding
- not useful for something with an order
- need sufficiently large amount of memory to store all objects without collisions
  - can balloon quickly
- need good hashing algorithm that spits out viable table address
- needs several qualities:
  - idempotent (critical), good distribution of values, performant

- key/value data storage & retrieval
  - data stored as array
  - key converted to integer via hash functino
  - hashed key converted to array index via modulo function

#### HT RELATED TERMS

- **hash function**:  one-way mapping from arbitrary data to fixed data size & type
  - different hash functions with different attributes:
    - deterministic
    - uniform distribution
    - non-invertible
    - continuous versus non-continuous
- **hash-table collision**:  when two keys hash to same index
  - collisions are unavoidable
  - open addressing & linked-list chaining to avoid collisions
- **linked-list chaining**:  elements in hash table are stored as linked lists
  - when retrieving a value, traverse down linked list until you find matching key
- **hash-table resizing**:  can occur when load factor passes certain threshhold
  - create new hash table with double capacity
  - copy elements from old to new one at a time
  - resizing = O(n) & occurs at O(log (n)) frequency
- **load factor**:  number of entries / hash-table capacity

### Queues

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-queue.py)

```pseudocode
time complexity:   Avg   |  Worst
    Access:       O(n)   |   O(n)
    Search:       O(n)   |   O(n)
    Insertion:    O(1)   |   O(1)
    Deletion:     O(1)   |   O(1)
space complexity:  O(n)
```

- A queue is a data structure whose primary purpose is to store and return elements in First In First Out order.

#### difference between using an array vs. a linked list when implementing a Queue

- Major difference is, arrays are index-based data structure and each element of the array is associated with an index.  
- With a linked list, it relies on pointers; each node has the data and then pointers to both previous and next elements.  
- You use binary or linear searches to traverse arrays; linear to traverse linked lists.  
- Arrays are directly or randomly accessed and you can access any element in them; queues are accessed via first pointer only.

### Stacks

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-stack.py)

```pseudocode
time complexity:   Avg   |  Worst
    Access:       O(n)   |   O(n)
    Search:       O(n)   |   O(n)
    Insertion:    O(1)   |   O(1)
    Deletion:     O(1)   |   O(1)
space complexity:  O(n)
```

- A stack is a data structure whose primary purpose is to store and return elements in (Last In First Out)/FIFO order.

#### difference between using an array vs. a linked list when implementing a Stack

- Major difference is, arrays are index-based data structure and each element of the array is associated with an index.  
- With a linked list, it relies on pointers; each node has the data and then pointers to both previous and next elements.  
- You use binary or linear searches to traverse arrays; linear to traverse linked lists.  
- Arrays are directly or randomly accessed and you can access any element in them; stacks are accessed via last or first pointer only.

### Skip List

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-skip_list.py)

```pseudocode
time complexity:    Avg     |  Worst
  Access:       O(log(n))   |   O(n)
  Search:       O(log(n))   |   O(n)
  Insertion:    O(log(n))   |   O(n)
  Deletion:     O(log(n))   |   O(n)
space complexity:  O(n log(n))
```

- Can we search in a sorted linked list in better than O(n) time?
  - The worst case search time for a sorted linked list is O(n) as we can only linearly traverse the list and cannot skip nodes while searching.
  - For a Balanced Binary Search Tree, we skip almost half of the nodes after one comparison with root.
  - For a sorted array, we have random access and we can apply binary search on arrays.

- Can we augment sorted linked lists to make the search faster?
  - The answer is skip list.
  - The idea is simple, we create multiple layers so that we can skip some nodes.
  - See the following example list with 16 nodes and two layers.
  - The upper layer works as an “express lane” which connects only main outer stations.
  - The lower layer works as a “normal lane” which connects every station.
  - Suppose we want to search for 50, we start from first node of “express lane” and keep moving on “express lane” till we find a node whose next is greater than 50.
  - Once we find such a node (30 is the node in following example) on “express lane”, we move to “normal lane” using pointer from this node, and linearly search for 50 on “normal lane”.
  - In following example, we start from 30 on “normal lane” and with linear search, we find 50.

- What is the time complexity with two layers?
  - The worst case time complexity is number of nodes on “express lane” plus number of nodes in a segment (A segment is number of “normal lane” nodes between two “express lane” nodes) of “normal lane”.
  - So if we have n nodes on “normal lane”, √n (square root of n) nodes on “express lane” and we equally divide the “normal lane”, then there will be √n nodes in every segment of “normal lane” .
  - √n is actually optimal division with two layers. With this arrangement, the number of nodes traversed for a search will be O(√n).
  - Therefore, with O(√n) extra space, we are able to reduce the time complexity to O(√n).

- Can we do better?
  - The time complexity of skip lists can be reduced further by adding more layers.
  - In fact, the time complexity of search, insert and delete can become O(Logn) in average case with O(n) extra space.

Deciding nodes level

- Each element in the list is represented by a node, the level of the node is chosen randomly while insertion in the list.
- Level does not depend on the number of elements in the node.

- The level for node is decided by the following algorithm –

```pseudocode
  randomLevel()
  lvl := 1
  //random() that returns a random value in [0...1)
  while random() < p and lvl < MaxLevel do
  lvl := lvl + 1
  return lvl
```

- Max level is the upper bound on number of levels in the skip list.
- It can be determined as – L(N) = log_{p/2}{N}.
- Above algorithm assure that random level will never be greater than MaxLevel.
- Here p is the fraction of the nodes with level i pointers also having level i+1 pointers and N is the number of nodes in the list.

Node Structure
<br>
Each node carries a key and a forward array carrying pointers to nodes of a different level.
<br>
A level i node carries i forward pointers indexed through 0 to i.
<br>
Skip Node
<br>
- We will start from highest level in the list and compare key of next node of the current node with the key to be inserted.
- Basic idea is if:
  - key of next node is less than key to be inserted, then we keep on moving forward on the same level
  - key of next node is greater than the key to be inserted, then we store the pointer to current node i at update[i], move one level down, and continue our search.
- At the level 0, we will definitely find a position to insert given key.

- create multiple layers in a sorted list so we can skip some nodes
- has express lane, use express lane to find 'bucket' or 'chunk which your result is found in

### Tries

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-tries.py)

```pseudocode
time complexity:   Avg        |  Worst
  Access:       O(n)          |   O(n)
  Search:       O(key_length) |   O(n)
  Insertion:    O(key_length) |   O(n)
  Deletion:     O(key_length) |   O(n)

space complexity:  O(ALPHABET_SIZE * key_length * N)
```

- tree optimized for searching by prefix
- auto-complete really useful ffor this
- starts wth root node that doesn't represent anything
- has bunch of child nodes representing 1 letter
  - each of those has child nodes representing next letter
- can add weights to certain edges/children so they are suggested first
- space is its own node

### Bloom Filter

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/bloom_filter.py)

```pseudocode
time complexity:   Avg
  Access:          ---
  Search:          O(1)
  Insertion:       O(1)
  Deletion:        ---
space complexity:  almost always less than hash (O(n))
```

- designed to tell you quickly & efficiently if item is in set
- trade-off is it can't tell you definitely if item is in set
  - can only tell you definitely not
- has false-positive rate, but not false-negatives
- useful for filtering articles NOT to show in recommendations
- more items = higher false-positive rate, which you can mitigate
  - by having larger array
  - trade-off = larger memory footprint
- m & n = length of two strings

### Heaps

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-heap_max.py)

```pseudocode
time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
space complexity:  O(1)
```

- data structure optimized for retrieving either maximal or minimal values of a dataset
- all about maximizing priority
- binary tree data structure centered around the heap property
  - always satisfies the heap property
- root element of heap is max value of all heap elements
- array representing the data structure
- has to be sorted in particular way to represent that tree priority queues often 
  - represented as heaps
  - often these terms used interchangeably
- priority queues are often heaps; easy to tell largest number
  - none of other guaranteed, but once you dequeue, easy to find next item in queue
- combining of tree & array based approaches doesn't make heap a particularly intuitive data structure to understand & grasp
- maximally efficient at what they do
- very flexible since we can generalize idea of priority to many different contexts
- arrays well-suited to storing heaps not just because off constant-time access to any element, but also we can more easily swap elements in different positions throughout heap easily, again due to array indexing
- can use queue

- to fetch a node's parent, floor((x-1)/2)
- emulates a binary tree structure of a heap using an array, with added benefit of now-constant-time access to any element in heap that comes with array indexing

- when using BST, problem is we only have direct access to node
- to construct max heap, run heapify starting @ array middle and work backwards to root.

![Image of a Heap in Tree form](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/501px-Max-Heap.svg.png)

![Image of a Heap in Array form](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Heap-as-array.svg/603px-Heap-as-array.svg.png)

### LRU Cache

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-lru_cache.py)

```pseudocode
QUEUE PORTION:
  time complexity: Avg   |   Worst
    Access:       O(n)   |   O(n)
    Search:       O(n)   |   O(n)
    Insertion:    O(1)   |   O(1)
    Deletion:     O(1)   |   O(1)
  space complexity:  O(n)

HASH TABLE PORTION:
  time complexity: Avg   |  Worst
    Access:       N/A    |   N/A
    Search:       O(1)   |   O(n)
    Insertion:    O(1)   |   O(n)
    Deletion:     O(1)   |   O(n)
  space complexity:  O(n)
```

- Use two data structures to implement an LRU Cache:
  - Queue which is implemented using a doubly linked list.
    - The maximum size of the queue will be equal to the total number of frames available (cache size).
    - The most recently used pages will be near front endpygame.examples.aliens.main()
    - The least recently pages will be near the rear end.
  - A Hash with page number as key and address of the corresponding queue node as value.

- When a page is referenced, the required page may be in the memory.
- If it is in the memory, we need to detach the node of the list and bring it to the front of the queue.
- If the required page is not in memory, we bring that in memory.
- In simple words, we add a new node to the front of the queue and update the corresponding node address in the hash.
- If the queue is full, i.e. all the frames are full, we remove a node from the rear of the queue, and add the new node to the front of the queue.

----

An LRU (Least Recently Used) cache is an in-memory storage structure that adheres to the [Least Recently Used](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) caching strategy.

In essence, you can think of an LRU cache as a data structure that keeps track of the order in which elements (which take the form of key-value pairs) it holds are added and updated. The cache also has a max number of entries it can hold. This is important because once the cache is holding the max number of entries, if a new entry is to be inserted, another pre-existing entry needs to be evicted from the cache. Because the cache is using a least-recently used strategy, the oldest entry (the one that was added/updated the longest time ago) is removed to make space for the new entry.

So what operations will we need on our cache? We'll certainly need some sort of `set` operation to add key-value pairs to the cache. Newly-set pairs will get moved up the priority order such that every other pair in the cache is now one spot lower in the priority order that the cache maintains. The lowest-priority pair will get removed from the cache if the cache is already at its maximal capacity. Additionally, in the case that the key already exists in the cache, we simply want to overwrite the old value associated with the key with the newly-specified value.

We'll also need a `get` operation that fetches a value given a key. When a key-value pair is fetched from the cache, we'll go through the same priority-increase dance that also happens when a new pair is added to the cache.

Note that the only way for entries to be removed from the cache is when one needs to be evicted to make room for a new one. Thus, there is no explicit `remove` method.

Given the above spec, try to get a working implementation that passes the tests. What data structure(s) might be good candidates with which to build our cache on top of? Hint: Since our cache is going to be storing key-value pairs, we might want to use a structure that is adept at handling those.

---

Once you've gotten the tests passing, it's time to analyze the runtime complexity of your `get` and `set` operations. There's a way to get both operations down to sub-linear time. In fact, we can get them each down to constant time by picking the right data structures to use.

Here are you some things to think about with regards to optimizing your implementation: If you opted to use a dictionary to work with key-value pairs, we know that dictionaries give us constant access time, which is great. It's cheap and efficient to fetch pairs. A problem arises though from the fact that dictionaries don't have any way of remembering the order in which key-value pairs are added. But we definitely need something to remember the order in which pairs are added. Can you think of some ways to get around this constraint?

### Generic Heaps

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-heap_generic.py)

```pseudocode
time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
space complexity:  O(1)
```

A max heap is pretty useful, but what's even more useful is to have our heap be generic such that the user can define their own priority function and pass it to the heap to use.

Augment your heap implementation so that it exhibits this behavior. If no comparator function is passed in to the heap constructor, it should default to being a max heap.


### AVL Tree

[Sample](https://github.com/evoingram/endorsement/tree/master/SamplesDSAlgos/data%20structures/datastructures-.py)

```pseudocode
time complexity:    Avg     |     Worst
  Access:       O(log(n))   |   O(log(n))
  Search:       O(log(n))   |   O(log(n))
  Insertion:    O(log(n))   |   O(log(n))
  Deletion:     O(log(n))   |   O(log(n))
space complexity:  O(n)
```

- trees stay as flat as possible
- initials of authors, specialized BSTs
- valid AVL always valid BST, not vice versa
- add value same as BST
- difference is, on way up your recursive calls, you check if node is balanced after adding new node
- tree out of balance if subtree's height differences > 1
- benefit is, we can guarantee no worst cases (O(n))
  - worst case = O(log(n))

An AVL tree (Georgy Adelson-Velsky and Landis' tree, named after the inventors) is a self-balancing binary search tree. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property.

We define balance factor for each node as:

```pseudocode
balanceFactor = height(left subtree) - height(right subtree)
```

The balance factor of any node of an AVL tree is in the integer range [-1,+1]. If after any modification in the tree, the balance factor becomes less than −1 or greater than +1, the subtree rooted at this node is unbalanced, and a rotation is needed.

![AVL tree rebalancing](https://s3.amazonaws.com/hr-challenge-images/0/1436854305-b167cc766c-AVL_Tree_Rebalancing.svg.png)

The tree's `insert` method should perform the same logic as what was implemented for the binary search tree, with the caveat that upon inserting a new element into the tree, it will then check to see if the tree needs to be rebalanced.

#### AVL-Tree Related Terms

- **rebalance**:  if one side of tree gets too heavy, then we need to perform a rotation to get the tree back in balance
- **"too heavy"**:  max height of 1 child = 2+ than max height of other child
- **double rotation**:  when opposite child is heavy during rotation

## Stack vs Heap Memory Allocation

Memory in a C/C++ program can either be allocated on stack or heap.

### Prerequisite:  Memory layout of C program

### Stack Allocation

The allocation happens on contiguous blocks of memory. We call it stack memory allocation because the allocation happens in function call stack. The size of memory to be allocated is known to compiler and whenever a function is called, its variables get memory allocated on the stack. And whenever the function call is over, the memory for the variables is deallocated. This all happens using some predefined routines in compiler. Programmer does not have to worry about memory allocation and deallocation of stack variables.

```C++
int main() {
   // All these variables get memory
   // allocated on stack
   int a;
   int b[10];
   int n = 20;
   int c[n];
}
```

### Heap Allocation

The memory is allocated during execution of instructions written by programmers. Note that the name heap has nothing to do with heap data structure. It is called heap because it is a pile of memory space available to programmers to allocated and de-allocate. If a programmer does not handle this memory well, memory leak can happen in the program.

```C++
int main() {
   // This memory for 10 integers
   // is allocated on heap.
   int *ptr  = new int[10];
}
```

### Key Differences Between Stack and Heap Allocations

1. In a stack, the allocation and deallocation is automatically done by whereas, in heap, it needs to be done by the programmer manually.
2. Handling of Heap frame is costlier than handling of stack frame.
3. Memory shortage problem is more likely to happen in stack whereas the main issue in heap memory is fragmentation.
4. Stack frame access is easier than the heap frame as the stack have small region of memory and is cache friendly, but in case of heap frames which are dispersed throughout the memory so it cause more cache misses.
5. Stack is not flexible, the memory size allotted cannot be changed whereas a heap is flexible, and the allotted memory can be altered.
6. Accessing time of heap takes is more than a stack.

### Comparison Chart

|          PARAMETER          |                    STACK                   | HEAP                                     |
|:---------------------------:|:------------------------------------------:|------------------------------------------|
|            Basic            | Memory is allocated in a contiguous block. | Memory is allocated in any random order. |
| Allocation and Deallocation |     Automatic by compiler instructions.    | Manual by programmer.                    |
|             Cost            |                    Less                    | More                                     |
|        Implementation       |                    Hard                    | Easy                                     |
|         Access time         |                   Faster                   | Slower                                   |
|          Main Issue         |             Shortage of memory             | Memory fragmentation                     |
|    Locality of reference    |                  Excellent                 | Adequate                                 |
|         Flexibility         |                 Fixed size                 | Resizing is possible                     |
|     Data type structure     |                   Linear                   | Hierarchical                             |

# Data Structures I

Topics:

- Big-O Notation (Complexity analysis)
- Stacks
- Queues
- Linked Lists
- Hash Tables

#### Stacks

- Should have the methods: `add`, `remove`, and a getter for the property `size`
- `add` should accept a value and place it on top of the stack.
- `remove` should remove and return the top value off of the stack.
- `size` should return how many items are on the stack.

#### Queues

- Should have the methods: `enqueue`, `dequeue`, and a getter for the property `size`
- `enqueue` should add an item to the back of the queue.
- `dequeue` should remove an item from the front of the queue.
- `size` should return the number of items in the queue.

#### Linked Lists

- Should have the methods: `addToTail`, `removeHead`, and `contains`.
- `addToTail` replaces the tail with a new value that is passed in.
- `removeHead` removes and returns the head node.
- `contains` should searth through the linked list and return true if a matching value is found.
- The `head` property is a reference to the first node and the `tail` property is a reference to the last node. These are the only two properties that you need to keep track of an infinite number of nodes. Build your nodes with objects.

#### Hash Tables

- Should have the methods: `insert`, `remove`, and `retrieve`.
- `insert` should take a key value pair and add the value to the hash table.
- `retrieve` should return the value associated with a key.
- `remove` should removed the given key's value from the hash table.
- Should properly handle collisions. If two keys map to the same index in the storage table then you should store a 2d array as the value. Make each key/value pair its own array that is nested inside of the array stored at that index on the table.

### Extra Credit

- Uncomment the final test in `hash-table.test.js` and make the hash-table rebalance. As a hash table increases in size the associated storage table will typically double in size once it reaches a certain capacity. Change the hash table so that it doubles the size of the storage table once it is 75% full.
- If you used arrays as your underlying data structure for implementing stacks, queues, and hash table buckets, convert these to use linked lists instead as the underlying data structure. If you started off with linked lists, convert these to use arrays. In order to do this, you'll need to export your linked list implementation by wrapping it inside a `module.exports`. Just comment out your initial implementation; don't delete perfectly good code!
- Make your linked list implementation a [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list).

#### What are real-world use-cases for a Queue data structure?

#### What are real-world use-cases for a Linked List data structure?

#### What are real-world use-cases for a Binary Search Tree data structure?

A BST in the way that is being implemented for this Sprint is a bit too simple to see any real-world use-cases. There are many (more complex) variants of BSTs that do see production use. One very notable variant is the [B-tree](https://en.wikipedia.org/wiki/B-tree), which is a self-balancing ordered variant of the BST. B-trees play a critical role in database and file system indexing. Other notable variants include the AVL tree, which is a self-balancing BST and the prefix tree, which is specialized for handling text.

#### How is the root element of a Binary Search Tree decided?

The first element added to a BST is the root of the tree. However, doing it this way means that it's a very simple matter to end up with a lopsided BST. If we simply insert a monotonically ascending or descending sequence of values, then the tree would essentially flatten down to a linked list, and we'd lose all the benefits that a BST is supposed to confer. Self-balancing variants of the BST exist in order to alleviate this exact problem.

#### What are real-world use-cases for a Heap data structure?

## Queue

1. What is the runtime complexity of `enqueue`?

2. What is the runtime complexity of `dequeue`?

3. What is the runtime complexity of `len`?

## Binary Search Tree

1. What is the runtime complexity of `insert`?

2. What is the runtime complexity of `contains`?

3. What is the runtime complexity of `get_max`?

## Heap

1. What is the runtime complexity of `_bubble_up`?

2. What is the runtime complexity of `_sift_down`?

3. What is the runtime complexity of `insert`?

4. What is the runtime complexity of `delete`?

5. What is the runtime complexity of `get_max`?

## Doubly Linked List

1. What is the runtime complexity of `ListNode.insert_after`?

2. What is the runtime complexity of `ListNode.insert_before`?

3. What is the runtime complexity of `ListNode.delete`?

4. What is the runtime complexity of `DoublyLinkedList.add_to_head`?

5. What is the runtime complexity of `DoublyLinkedList.remove_from_head`?

6. What is the runtime complexity of `DoublyLinkedList.add_to_tail`?

7. What is the runtime complexity of `DoublyLinkedList.remove_from_tail`?

8. What is the runtime complexity of `DoublyLinkedList.move_to_front`?

9. What is the runtime complexity of `DoublyLinkedList.move_to_end`?

10. What is the runtime complexity of `DoublyLinkedList.delete`?

    a. Compare the runtime of the doubly linked list's `delete` method with the worst-case runtime of the JS `Array.splice` method. Which method generally performs better?

# Binary Tree
Trees are commonly represented as **binary trees**, a _rooted_ tree structure in which each node has no more than two children.

## Constraints
- A child has only _one_ parent and the root node has _no_ parent.
- Each node can have a max of 2 children.

<p align="center">
  <img src="../../../../assets/binary_tree.svg" width="600" />
</p>

A **node** of a binary tree is represented by a structure containing **data** and two pointers (__left__ and __right__) to other structures of the same type.

<p align="center">
  <img src="../../../../assets/binary_tree_node.svg" width="300" />
</p>

#### An example of a node written in JavaScript:
```js
class Node {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
  }
}
```

<hr>

[← go back to trees](../)
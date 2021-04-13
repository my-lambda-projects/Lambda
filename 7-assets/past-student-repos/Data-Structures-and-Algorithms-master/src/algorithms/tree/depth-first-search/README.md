# Depth-first search (DFS)
**Depth-first search** is named as such because the search traverses the entire height of a node before going to the next sibling node.

The general recursive pattern for traversing a binary tree is this: At node `N` do the following:

- **(L)** Recursively traverse its left subtree. This step is finished at the node `N` again.
- **(R)** Recursively traverse its right subtree. This step is finished at the node `N` again.
- **(N)** Process `N` itself.

_These steps can be done in any order. If **(L)** is done before **(R)**, the process is called left-to-right traversal, otherwise it is called right-to-left traversal._

The following methods show left-to-right traversal: **pre-order**, **in-order** and **post-order**.

### Pre-order (NLR)
  1. Check if the current node is empty or null.
  2. Display the data part of the root (or current node).
  3. Traverse the left subtree by recursively calling the pre-order function.
  4. Traverse the right subtree by recursively calling the pre-order function.

<p align="center">
  <img src="../../../../assets/pre-order.svg" width="500" />
</p>
<p align="center">
Pre-order: 11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25
</p>

The pre-order traversal is [topologically sorted](https://en.wikipedia.org/wiki/Topological_sorting) (linear order), because a parent node is processed before any of its child nodes is done.

### In-order (LNR)
  1. Check if the current node is empty or null.
  2. Traverse the left subtree by recursively calling the in-order function.
  3. Display the data part of the root (or current node).
  4. Traverse the right subtree by recursively calling the in-order function.

<p align="center">
  <img src="../../../../assets/in-order.svg" width="500" />
</p>
<p align="center">
In-order: 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25
</p>

In a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree), in-order traversal retrieves data in sorted order.

### Post-order (LRN)
  1. Check if the current node is empty or null.
  2. Traverse the left subtree by recursively calling the post-order function.
  3. Traverse the right subtree by recursively calling the post-order function.
  4. Display the data part of the root (or current node).

<p align="center">
  <img src="../../../../assets/post-order.svg" width="500" />
</p>
<p align="center">
Post-order: 3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18,25, 20, 15, 11
</p>

<hr>


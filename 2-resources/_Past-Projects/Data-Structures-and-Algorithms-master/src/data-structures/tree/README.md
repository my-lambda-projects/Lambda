# Tree
A **tree** is a non-linear data structure that simulates a hierarchical tree structure.

- [General Tree](#general-tree)
- [Binary Tree](binary-tree)
- [Binary Search Tree](binary-search-tree)
- [Traversal](../../algorithms/tree)
- [Terminology](#terminology)

## General Tree

<p align="center">
  <img src="../../../assets/k-ary_tree.svg" width="600" />
</p>

A **general tree**, or _k_-ary tree, is made up of **nodes** (or **vertices**) connected by **edges**.

A tree has a **root** node and potentially many **levels** of an arbitrary number of **children** that form a hierarchy.

If a node is connected to other nodes below it, that node is called the **parent** node, and the nodes following it are called **child** nodes. Each node in the tree can be see as a **subtree**.

## Constraints
- A child has only _one_ parent and the root node has _no_ parent.

_Note: A tree is a graph without cycles._

## Common Operations
#### Insert
<img width="20px" />Inserts a node in the tree.

#### Search
<img width="20px" />This searches for a node with the given value in the tree and returns `true` if it exists, otherwise `false`.

#### Min/Max
<img width="20px" />Returns the minimum or maximum value in the tree.

#### Remove
<img width="20px" />Removes a node from the tree.

## Terminology

#### Root
<img width="20px" />The top node in a tree.

#### Child
<img width="20px" />A node directly connected to another node when moving away from the root.

#### Parent
<img width="20px" />A node with other nodes connected below it.

#### Siblings
<img width="20px" />A group of nodes with the same parent.

#### Leaf
<img width="20px" />A node with no children.

#### Branch node
<img width="20px" />A node with at last one child.

#### Degree
<img width="20px" />For a given node, its number of children. A leaf is necessarily degree zero.

#### Edge
<img width="20px" />The connection between one node and another.

#### Path
<img width="20px" />A sequence of nodes and edges connecting a node with a descendant.

#### Level
<img width="20px" />The level of a node is defined as: 1 + the number of edges between the node and the root.

#### Depth
<img width="20px" />The depth of a node is defined as: the number of edges between the node and the root.

#### Height of node
<img width="20px" />The height of a node is the number of edges on the longest path between that node and a leaf.

#### Height of a tree
<img width="20px" />The height of a tree is the height of its root node.

#### Forest
<img width="20px" />A forest is a set of `n ≥ 0` disjoint trees.

<hr>

#### _References_

_[Wikipedia — Tree (data structure)](https://en.wikipedia.org/wiki/Tree_(data_structure))_

[↑](#tree)
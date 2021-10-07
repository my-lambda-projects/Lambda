---
description: >-
  Objective 01 - Recall the different traversal types for a binary tree and implement a function to complete the traversal for each type
---

# D4- Module 04 - Tree Traversal

### Overview <a id="overview"></a>

There is only one way to traverse linear data structures like arrays, linked lists, queues, and stacks. The linear nature of the structure itself forces a particular type of traversal.

However, with hierarchical structures like trees, there are multiple ways that you can traverse the stored data. There are two primary categories for tree traversals:

1. Depth-First
2. Breadth-First

Furthermore, there are three different types of depth-first traversals:

1. Inorder
2. Preorder
3. Postorder

Let's dive deeper into each of the traversal types.

### Follow Along <a id="follow-along"></a>

#### Depth-First Inorder Traversal <a id="depth-first-inorder-traversal"></a>

Let's first look at an inorder depth-first traversal of a binary tree. In this traversal, we start at the tree's root node and complete the following steps recursively:

1. Go to the left subtree
2. Visit node
3. Go to the right subtree

Notice that we don't actually "visit" a node until we've already gone to the left subtree. In the animation below, the "going" is denoted by changing the color to a light grey. The actual visiting is represented when it turns red. The base cases in the recursion are when there is no left or right subtree to visit.

![https://tk-assets.lambdaschool.com/4b1680ed-3b4b-4fcf-ba97-bbfe54f5d066_depth-first-inorder-traversal.gif](https://tk-assets.lambdaschool.com/4b1680ed-3b4b-4fcf-ba97-bbfe54f5d066_depth-first-inorder-traversal.gif)

Here is one possible way to code a depth-first inorder traversal in Python:

```python
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def helper(root, res):
    if root is None:
        return
    helper(root.left, res)
    res.append(root.val)
    helper(root.right, res)

def inorder_traversal(root):
    result = []
    helper(root, result)
    return result
```

#### Depth-First Preorder Traversal <a id="depth-first-preorder-traversal"></a>

This traversal type is very similar to an inorder traversal except that the three steps' order is slightly different. Notice that in this traversal, we "visit" the node \(denoted in the visualization below by the node turning red\) before we recurse to the left subtree \(we represent the recursive call by turning the node grey in the visualization below\). In the inorder traversal above, we recursed to the left subtree before visiting the node.

1. Visit the node
2. Go to the left subtree
3. Go to the right subtree

Below is the visualization for how this would type of traversal would look.

![https://tk-assets.lambdaschool.com/c44685b7-b6f7-4214-ba85-226ca56e8042_depth-first-preorder-traversal.gif](https://tk-assets.lambdaschool.com/c44685b7-b6f7-4214-ba85-226ca56e8042_depth-first-preorder-traversal.gif)

Here is one possible way to code a depth-first preorder traversal in Python:

```python
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def helper(root, res):
    if root is None:
        return
    res.append(root.val)
    helper(root.left, res)
    helper(root.right, res)

def preorder_traversal(root):
    result = []
    helper(root, result)
    return result
```

Notice that the only difference between the code above for preorder traversal and the example for inorder traversal is that in the preorder traversal code, we append the node's value to the result before we recurse to the left.

#### Depth-First Postorder Traversal <a id="depth-first-postorder-traversal"></a>

This traversal type is very similar to our other traversals except that the three steps' order is slightly different. Notice that in this traversal, we "visit" the node \(denoted in the visualization below by the node turning red\) after we recurse to the left subtree \(we represent the recursive call by turning the node grey in the visualization below\) and the right subtree.

1. Go to the left subtree
2. Go to the right subtree
3. Visit node

Below is the visualization for how this would type of traversal would look.

![https://tk-assets.lambdaschool.com/41bc2877-94d4-4103-885b-c396bec4832a_depth-first-postorder-traversal.gif](https://tk-assets.lambdaschool.com/41bc2877-94d4-4103-885b-c396bec4832a_depth-first-postorder-traversal.gif)

Here is one possible way to code a depth-first postorder traversal in Python:

```python
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def helper(root, res):
    if root is None:
        return
    helper(root.left, res)
    helper(root.right, res)
    res.append(root.val)

def postorder_traversal(root):
    result = []
    helper(root, result)
    return result
```

Notice that the only difference between the code above for postorder traversal and the other examples is that in this version, we append the node's value to the result only after we've already recursed to the left and right subtrees.

#### Breadth-First \(Level Order\) Traversal <a id="breadth-first-level-order-traversal"></a>

In a breadth-first traversal, we visit all the nodes at the same level \(same distance from the root node\) before going on to the next level.

A breadth-first traversal and a level order traversal are the same things. However, a breadth-first traversal can be done on any hierarchical data structure like trees and graphs. But, a level order traversal refers only to the traversal of a tree. Graphs do not have levels like trees do, so that term would not make sense.

A breadth-first traversal is a little different than the depth-first traversals we've gone over. We cannot merely use the recursive call stack to keep track of where we are in the tree. Instead, we must use a queue to keep track of what nodes we should visit. Remember that a queue data structure follows a first-in-first-out \(FIFO\) access order.

Below is a visualization for a breadth-first traversal.

![https://tk-assets.lambdaschool.com/671a11b7-acee-4b16-9452-d42f3b69a24e_breadth-first-traversal.gif](https://tk-assets.lambdaschool.com/671a11b7-acee-4b16-9452-d42f3b69a24e_breadth-first-traversal.gif)

Here is one way that you could code a breadth-first \(level order\) traversal in Python:

```python
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

def breadth_first_traversal(root):
    if root is None:
        return []

    result = []
    queue = []
    queue.append(root)

    while len(queue) != 0:
        node = queue.pop(0)
        result.append(node.val)

        if node.left is not None:
            queue.append(node.left)

        if node.right is not None:
            queue.append(node.right)

    return result
```

### Challenge <a id="challenge"></a>

1. What data structure could you use to write an _iterative_ depth-first traversal method?
2. In your own words, explain how a depth-first traversal and a breadth-first traversal are different?

### Additional Resources <a id="additional-resources"></a>

- [https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/ \(Links to an external site.\)](https://www.geeksforgeeks.org/dfs-traversal-of-a-tree-using-recursion/)
- [https://www.geeksforgeeks.org/level-order-tree-traversal/ \(Links to an external site.\)](https://www.geeksforgeeks.org/level-order-tree-traversal/)

![](../../.gitbook/assets/image%20%284%29%20%286%29.png)

![](../../.gitbook/assets/image%20%284%29%20%286%29.png)

![](../../.gitbook/assets/image%20%284%29%20%286%29.png)

![](../../.gitbook/assets/image%20%284%29%20%286%29.png)

![](../../.gitbook/assets/image%20%284%29%20%286%29.png)

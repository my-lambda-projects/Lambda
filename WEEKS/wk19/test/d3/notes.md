# Objective 01 - Describe the properties of a binary tree and the properties of a "perfect" tree

## Overview

There are lots of different types of tree data structures. A binary tree is a specific type of tree. It is called a binary tree because each node in the tree can only have a maximum of two child nodes. It is common for a node's children to be called either `left` or `right`. Here is an example of a what a class for a binary tree node might look like:

```PY
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

## Follow Along

With this simple class, we can now build up a structure that could be visualized like so: ![https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png](https://tk-assets.lambdaschool.com/c00c8f45-abff-4c3a-b29b-92631b5ac88e_binary-tree-example.001.png)

### "Perfect" Trees

A "perfect" tree has all of its levels full. This means that there are not any missing nodes in each level. "Perfect" trees have specific properties. First, the quantity of each level's nodes doubles as you go down. ![https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png](https://tk-assets.lambdaschool.com/36747e43-d96d-40c9-b8ab-d318f6da8aed_binary-tree-example-levels.001.png) Second, the quantity of the last level's nodes is the same as the quantity of all the other nodes plus one. These properties are useful for understanding how to calculate the *height* of a tree. The height of a tree is the number of levels that it contains. Based on the properties outlined above, we can deduce that we can calculate the tree's height with the following formula: ![log_2(n+1) = h](<https://i.upmath.me/svg/log_2(n%2B1)%20%3D%20h>) In the formula above, `n` is the total number of nodes. If you know the tree's height and want to calculate the total number of nodes, you can do so with the following formula: ![n = 2^h - 1](https://i.upmath.me/svg/n%20%3D%202%5Eh%20-%201) We can represent the relationship between a perfect binary tree's total number of nodes and its height because of the properties outlined above. Challenge

---

1.  Calculate how many levels a perfect binary tree has given that the total number of nodes is 127.
2.  Calculate the total number of nodes on a perfect binary tree, given that the tree's height is 8. Additional Resources

---

- [https://en.wikipedia.org/wiki/Binary_tree (Links to an external site.)](https://en.wikipedia.org/wiki/Binary_tree)
- [https://www.geeksforgeeks.org/binary-tree-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-tree-data-structure/)

---

---

# Objective 02 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a binary search tree

## Overview

Just like a binary tree is a specific type of tree, a binary search tree (BST) is a specific type of binary tree. A binary search tree is just like a binary tree, except it follows specific rules about how it orders the nodes contained within it. For each node in the BST, all the nodes to the left are smaller, and all the nodes to the right of it are larger. We can call a binary search tree balanced if the heights of its left and right subtrees differ by at most one, and both of the subtrees are also balanced. ![https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083_binary-tree-example-balanced-unbalanced.001.png](https://tk-assets.lambdaschool.com/f84f26b9-09f3-48e0-a4c6-a51740d9c083_binary-tree-example-balanced-unbalanced.001.png) Follow Along

---

### Time and Space Complexity

#### Lookup

If a binary search tree is balanced, then a lookup operation's time complexity is logarithmic (`O(log n)`). If the tree is unbalanced, the time complexity can be linear (`O(n)`) in the worst possible case (virtually a linear chain of nodes will have all the nodes on one side of the tree).

#### Insert

If a binary search tree is balanced, then an insertion operation's time complexity is logarithmic (`O(log n)`). If the tree is entirely unbalanced, then the time complexity is linear (`O(n)`) in the worst case.

#### Delete

If a binary search tree is balanced, then a deletion operation's time complexity is logarithmic (`O(log n)`). If the tree is entirely unbalanced, then the time complexity is linear (`O(n)`) in the worst case.

#### Space

The space complexity of a binary search tree is linear (`O(n)`). Each node in the binary search tree will take up space in memory.

### Strengths

One of the main strengths of a BST is that it is sorted by default. You can pull out the data in order by using an in-order traversal. BSTs also have efficient searches (`O(log n)`). They have the same efficiency for their searches as a sorted array; however, BSTs are faster with insertions and deletions. In the average-case, dictionaries have more efficient operations than BSTs, but a BST has more efficient operations in the worst-case.

### Weaknesses

The primary weakness of a BST is that they only have efficient operations if they are balanced. The more unbalanced they are, the worse the efficiency of their operations gets. Another weakness is that they are don't have stellar efficiency in any one operation. They have good efficiency for a lot of different operations. So, they are more of a general-purpose data structure. If you want to learn more about trees that automatically rearrange their nodes to remain balanced, look into [AVL trees (Links to an external site.)](https://en.wikipedia.org/wiki/AVL_tree) or [Red-Black trees (Links to an external site.)](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) Challenge

---

1.  In your own words, explain why an unbalanced binary search tree's performance becomes degraded. Additional Resources

---

- [https://www.geeksforgeeks.org/binary-search-tree-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-search-tree-data-structure/)
- [https://en.wikipedia.org/wiki/Binary_search_tree (Links to an external site.)](https://en.wikipedia.org/wiki/Binary_search_tree)

---

---

---

---

# Objective 03 - Construct a binary search tree that can perform basic operations with a logarithmic time complexity

## Overview

To create a binary search tree, we need to define two different classes: one for the nodes that will make up the binary search tree and another for the tree itself. Follow Along

---

Let's start by creating a `BSTNode` class. An instance of `BSTNode` should have a `value`, a `right` node, and a `left` node.

```PY
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

Now that we have our basic `BSTNode` class defined with an initialization method let's define our `BST` class. This class will have an initialization method and an `insert` method.

```PY
class BST:
    def __init__(self, value):
        self.root = BSTNode(value)
    def insert(self, value):
        self.root.insert(value)
```

Notice that our `BST` class expects each `BSTNode` to have an `insert` method available on an instance object. But, we haven't yet added an `insert` method on the `BSTNode` class. Let's do that now.

```PY
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)
```

Now that we can insert nodes into our binary search tree let's define a `search` method that can lookup values in our binary search tree.

```PY
class BST:
    def __init__(self, value):
        self.root = BSTNode(value)
    def insert(self, value):
        self.root.insert(value)
    def search(self, value):
        self.root.search(value)
```

Our `BST` class expects there to be a `search` method available on the `BSTNode` instance stored at the root. Let's go ahead and define that now.

```PY
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)
    def search(self, target):
        if self.value == target:
            return self
        elif target < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(target)
        else:
            if self.right is None:
                return False
            else:
                return self.right.search(target)
```

## Challenge

To implement a `delete` operation on our `BST` and `BSTNode` classes, we must consider three cases:

1.  If the `BSTNode` to be deleted is a leaf (has no children), we can remove that node from the tree.
2.  If the `BSTNode` to be deleted has only one child, we copy the child node to be deleted and delete it.
3.  If the `BSTNode` to be deleted has two children, we have to find the "in-order successor". The "in-order successor" is the next highest value, the node that has the minimum value in the right subtree. Given the above information, can you write pseudocode for a method that can find the *minimum value* of all the nodes within a tree or subtree? Additional Resources

---

- [https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)
- [https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/ (Links to an external site.)](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)

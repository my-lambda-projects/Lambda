# Binary Tree

### Binary Trees

1. Explain and implement a Binary Tree.

- A tree is a collection of nodes and edges between them.
- It cannot have any cycles, which are edges that form a loop between nodes.
- We also only consider rooted trees in computer science, which is a tree that has one root node that is able to access all other nodes.
- For a tree to be a binary tree, each node can have a maximum of two children.
- It's important to be able to identify and explain tree terminology as well. If given a tree, be able to point out each component.

  - root: The single node of a tree that can access every other node through edges.
  - parent node: A node that is connected to lower nodes in the tree. If a tree only has one node, it is not a parent node because there are no children.
  - child node: A node that is connected to a higher node in the tree. Every node except for the root is a child node of some parent.
  - sibling nodes: Nodes that have the same parent.
  - leaf node: A node that has no children \(at the ends of the branches of the tree\)
  - internal node: A non-leaf node \(aka a parent\)
  - path: A series of nodes that can be traveled through edges.
  - subtree: A smaller portion of the original tree. Any node that is not the root node is itself the root of a subtree.
  - Know the basics of each term
    - A non-empty tree has to have a root.
    - A tree doesn't have any parent nodes if there are no children.
    - What's the min/max number of parent and leaf nodes for a tree with 5 nodes?
      - Two extreme implementations: [![min-max-nodes-ll.png](https://github.com/bgoonz/DS-AND-ALGO-Notes-P2/raw/master/notes/D1/lo-s/W08D1and2/min-max-nodes-ll.png)](https://github.com/bgoonz/DS-AND-ALGO-Notes-P2/blob/master/notes/D1/lo-s/W08D1and2/min-max-nodes-ll.png)
      - Implementing in a chain results in max number of parents and min number of leaves: 4 parents, 1 leaf [![min-max-nodes-balanced.png](https://github.com/bgoonz/DS-AND-ALGO-Notes-P2/raw/master/notes/D1/lo-s/W08D1and2/min-max-nodes-balanced.png)](https://github.com/bgoonz/DS-AND-ALGO-Notes-P2/blob/master/notes/D1/lo-s/W08D1and2/min-max-nodes-balanced.png)
      - Implementing as a balanced tree results in min number of parents and max number of leaves: 2 parents, 3 leaves
  - All that we need in order to implement a binary tree is a TreeNode class that can store a value and references to a left and right child. We can create a tree by assigning the left and right properties to point to other TreeNode instances:

```python
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

1. Identify the three types of tree traversals: pre-order, in-order, and post-order.

- Pre-order: Values are accessed as soon as the node is reached.
- In-order: Values are accessed after we have fully explored the left but before we explore the right branch.
- Post-order: Values are accessed after all of our children have been accessed.
- \*Breadth First: The previous three are types of Depth First Traversals. Breadth first accesses values of nodes by level, left to right, top to bottom.
- Given a tree, be able to determine the order of each traversal type: [![Number tree](https://github.com/bgoonz/DS-AND-ALGO-Notes-P2/raw/master/notes/D1/lo-s/W08D1and2/number-tree.png)](https://github.com/bgoonz/DS-AND-ALGO-Notes-P2/blob/master/notes/D1/lo-s/W08D1and2/number-tree.png)
  - Breadth First: 20, 9, 24, 7, 11, 23, 27, 3, 10, 17, 36, 30
  - Pre-order: 20, 9, 7, 3, 11, 10, 17, 24, 23, 27, 36, 30
  - In-order: 3, 7, 9, 10, 11, 17, 20, 23, 24, 27, 30, 36
  - Post-order: 3, 7, 10, 17, 11, 9, 23, 30, 36, 27, 24, 20

1. Explain and implement a Binary Search Tree.

- A binary search tree is a binary tree with the added stipulation that all values to the left of a node are less than its value and all values to the right are greater than its value.
- Example of a BST with an insert method. You won't be asked to implement a removal:

```python
class BST {
  constructor() {
      this.root = null;
  }

  insert(val, currentNode=this.root) {
    if(!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }
}

```

```python
# Implement a Binary Search Tree (BST) that can insert values and check if
# values are present

class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        if(self.root.left==None):
            if(self.root.value>new_val):
                self.root.left = Node(new_val)
        elif(self.root.right==None):
            if(self.root.value<new_val):
                self.root.right = Node(new_val)
        else:
            current = self.root
            while(current.left!=None or current.right!=None):
                if(current.value>new_val):
                    current = current.left
                else:
                    current = current.right

            if(current.left==None):
                current.left = Node(new_val)
            else:
                current.right = Node(new_val)

    def search(self, find_val):
        if(self.root.left==None and self.root.right==None and self.root.value!=find_val):
            return False
        else:
            current = self.root
            val_possible = True
            while(val_possible):
                if(current.value==find_val):
                        return True
                if(current.value<find_val):
                    current = current.right
                else:
                    current = current.left
                if(current==None):
                    return False
                if(current.value<find_val and (current.right==None or current.right>find_val)):
                    return False
                if(current.value>find_val and (current.left==None or current.left<find_val)):
                    return False

# Set up tree
tree = BST(4)

# Insert elements
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

# Check search
# Should be True
print tree.search(4)
# Should be False
print tree.search(6)

```

```python
class Solution(object):
    def topKFrequent(self, nums, k):
        number_frequency = {}
        frequency_list = {}
        for i in nums:
            if i not in number_frequency:
                number_frequency[i] = 1
            else:
                number_frequency[i] += 1
        for key, value in number_frequency.items():
            if value not in frequency_list:
                frequency_list[value] = [key]
            else:
                frequency_list[value].append(key)
        result = []
        for i in range(len(nums), 0, -1):
            if i in frequency_list:
                result.extend(frequency_list[i])
            if len(result) >= k:
                break
        return result


ob1 = Solution()
print(ob1.topKFrequent([1, 1, 1, 1, 2, 2, 3, 3, 3], 2))




```

## Balanced Binary Tree

## Balanced Binary Tree

Given a binary tree class that looks like this:

```javascript
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
```

write a function that checks to see if a given binary tree is perfectly balanced, meaning all leaf nodes are located at the same depth. Your function should return `true` if the tree is perfectly balanced and `false` otherwise.

Analyze the time and space complexity of your function.

JS Solution:

```javascript
/* 
  A recursive solution
  How would you solve this iteratively?
 */
const checkBalanced = (rootNode) => {
  // An empty tree is balanced by default
  if (!rootNode) return true;
  // recursive helper function to check the min depth of the tree
  const minDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  };
  // recursive helper function to check the max depth of the tree
  const maxDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  };

  return maxDepth(rootNode) - minDepth(rootNode) === 0;
};

/* Some console.log tests */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const root = new BinaryTreeNode(5);
console.log(checkBalanced(root)); // should print true

root.insertLeft(10);
console.log(checkBalanced(root)); // should print false

root.insertRight(11);
console.log(checkBalanced(root)); // should print true;
```

```javascript
#  A recursive solution
#  How would you solve this iteratively?


def checkBalanced(rootNode):
    # An empty tree is balanced by default
    if rootNode == None:
        return True

    # recursive helper function to check the min depth of the tree
    def minDepth(node):
        if node == None:
            return 0
        return 1 + min(minDepth(node.left), minDepth(node.right))

    # recursive helper function to check the max depth of the tree
    def maxDepth(node):
        if node == None:
            return 0
        return 1 + max(maxDepth(node.left), maxDepth(node.right))

    return maxDepth(rootNode) - minDepth(rootNode) == 0


# Some console.log tests
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insertLeft(self, value):
        self.left = BinaryTreeNode(value)
        return self.left

    def insertRight(self, value):
        self.right = BinaryTreeNode(value)
        return self.right


root = BinaryTreeNode(5)
print(checkBalanced(root))  # should print True

root.insertLeft(10)
print(checkBalanced(root))  # should print False

root.insertRight(11)
print(checkBalanced(root))  # should print True

```

## Binary Search Tree from Sorted Array

Given an array that is sorted in ascending order containing unique integer elements, write a function that receives the sorted array as input and creates a valid binary search tree with minimal height.

For example, given an array `[1, 2, 3, 4, 5, 6, 7]`, your function should return a binary search tree with the form

```text
                          4
                        /   \
                      2       6
                     / \     / \
                    1   3   5   7
```

Note that when we say "binary search tree" in this case, we're just talking about a tree that exhibits the expected _form_ of a binary search tree. The tree in this case won't have an `insert` method that does the work of receiving a value and then inserting it in a valid spot in the binary search tree. Your function should place the values in valid spots that adhere to the rules of binary search trees, while also seeking to minimize the overall height of the tree.

Here's a `BinaryTreeNode` class that you can use to construct a binary search tree:

```python
class BinaryTreeNode:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None
```

Analyze the time and space complexity of your solution.

## Create a Minimal Height BST from Sorted Array

### Understanding the Problem

This problem asks us to create a valid binary search tree from a sorted array of integers. More specifically, the resulting binary search tree needs to be of _minimal height_. Our function should return the root node of the created binary search tree.

From the given example where the input is `[1, 2, 3, 4, 5, 6, 7]`, the expected answer is a binary search tree of height 3. This is the minimal height that can be achieved for an array of 7 seven elements. Try as we might, there's no way to construct a binary search tree containing all of these elements that has a shorter height.

### Coming Up with a First Pass

A straightforward way to do this would be to take the first element of our array, call that the root, and then iterate through the rest of our array, adding those elements as nodes in the binary search tree. In pseudocode, that might look something like this:

```text
def create_min_height_bst(sorted_arr):
  root = BinaryTreeNode(sorted_arr[0])

  for elem in sorted_arr:
    root.insert(elem)

  return root

```

```javascript
function createMinHeightBST(sortedArray) {
  const left = 0;
  const right = sortedArray.length - 1;

  return recHelper(sortedArray, left, right);
}

function recHelper(sortedArray, left, right) {
  if (left > right) {
    return null;
  }

  const midpoint = math.floor(right - left) / 2 + left;
  const root = new BinaryTreeNode(sortedArray[midpoint]);

  root.left = recHelper(sortedArray, left, midpoint - 1);
  root.right = recHelper(sortedArray, midpoint + 1, right);

  return root;
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBST(root, minBound, maxBound) {
  if (root === null) {
    return true;
  }

  if (root.value < minBound || root.value > maxBound) {
    return false;
  }

  const left = isBST(root.left, minBound, root.value - 1);
  const right = isBST(root.right, root.value + 1, maxBound);

  return left && right;
}

function findBSTMaxHeight(node) {
  if (node === null) {
    return 0;
  }

  return (
    1 + Math.max(findBSTMaxHeight(node.left), findBSTMaxHeight(node.right))
  );
}

function isBSTMinHeight(root, N) {
  const height = findBSTMaxHeight(root);
  const shouldEqual = Math.floor(Math.log2(N)) + 1;

  return height === shouldEqual;
}

function countBSTNodes(root, count) {
  if (root === null) {
    return count;
  }

  countBSTNodes(root.left, count);
  count++;
  countBSTNodes(root.right, count);
}

// Some tests
let sortedArray = [1, 2, 3, 4, 5, 6, 7];
let bst = createMinHeightBST(sortedArray);

console.log(isBST(bst, -Infinity, Infinity));
console.log(isBSTMinHeight(bst, sortedArray.length));

sortedArray = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100];
bst = createMinHeightBST(sortedArray);

console.log(isBST(bst, -Infinity, Infinity));
console.log(isBSTMinHeight(bst, sortedArray.length));
```

```python
import math


def create_min_height_bst(sorted_array):
    left = 0
    right = len(sorted_array) - 1

    return rec_helper(sorted_array, left, right)


def rec_helper(sorted_array, left, right):
    if left > right:
        return None

    midpoint = ((right - left) // 2) + left
    root = BinaryTreeNode(sorted_array[midpoint])

    root.left = rec_helper(sorted_array, left, midpoint - 1)
    root.right = rec_helper(sorted_array, midpoint + 1, right)

    return root


class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# Helper function to validate that the created tree is a valid BST
def is_BST(root, min_bound, max_bound):
    if root is None:
        return True

    if root.value < min_bound or root.value > max_bound:
        return False

    left = is_BST(root.left, min_bound, root.value - 1)
    right = is_BST(root.right, root.value + 1, max_bound)

    return left and right


# Helper function to check the max height of a BST
def find_bst_max_height(node):
    if node is None:
        return 0

    return 1 + max(find_bst_max_height(node.left), find_bst_max_height(node.right))


# Helper function to validate that the given BST exhibits the min height
def is_bst_min_height(root, N):
    bst_max_height = find_bst_max_height(root)
    should_equal = math.floor(math.log2(N)) + 1

    return bst_max_height == should_equal


# Helper function to count the number of nodes for a given BST
def count_bst_nodes(root, count):
    if root is None:
        return count

    count_bst_nodes(root.left, count)
    count += 1
    count_bst_nodes(root.right, count)


# Some tests
sorted_array = [1, 2, 3, 4, 5, 6, 7]
bst = create_min_height_bst(sorted_array)

print(is_BST(bst, float("-inf"), float("inf")))  # should print true
print(is_bst_min_height(bst, len(sorted_array)))  # should print true

sorted_array = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100]
bst = create_min_height_bst(sorted_array)

print(is_BST(bst, float("-inf"), float("inf")))  # should print true
print(is_bst_min_height(bst, len(sorted_array)))  # should print true

```

## Another BST Implementation:

```python
class BinarySearchTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

  def insert(self, value):
    pass

  def contains(self, target):
    pass

  def get_max(self):
    pass

  def for_each(self, cb):
    pass

```

```python
import unittest
import random
from binary_search_tree import BinarySearchTree

class BinarySearchTreeTests(unittest.TestCase):
  def setUp(self):
    self.bst = BinarySearchTree(5)

  def test_insert(self):
    self.bst.insert(2)
    self.bst.insert(3)
    self.bst.insert(7)
    self.bst.insert(6)
    self.assertEqual(self.bst.left.right.value, 3)
    self.assertEqual(self.bst.right.left.value, 6)

  def test_contains(self):
    self.bst.insert(2)
    self.bst.insert(3)
    self.bst.insert(7)
    self.assertTrue(self.bst.contains(7))
    self.assertFalse(self.bst.contains(8))

  def test_get_max(self):
    self.assertEqual(self.bst.get_max(), 5)
    self.bst.insert(30)
    self.assertEqual(self.bst.get_max(), 30)
    self.bst.insert(300)
    self.bst.insert(3)
    self.assertEqual(self.bst.get_max(), 300)

  def test_for_each(self):
    arr = []
    cb = lambda x: arr.append(x)

    v1 = random.randint(1, 101)
    v2 = random.randint(1, 101)
    v3 = random.randint(1, 101)
    v4 = random.randint(1, 101)
    v5 = random.randint(1, 101)

    self.bst.insert(v1)
    self.bst.insert(v2)
    self.bst.insert(v3)
    self.bst.insert(v4)
    self.bst.insert(v5)

    self.bst.for_each(cb)

    self.assertTrue(5 in arr)
    self.assertTrue(v1 in arr)
    self.assertTrue(v2 in arr)
    self.assertTrue(v3 in arr)
    self.assertTrue(v4 in arr)
    self.assertTrue(v5 in arr)


if __name__ == '__main__':
  unittest.main()

```

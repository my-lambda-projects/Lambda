# Binary Search Tree

{% tabs %} {% tab title="Implementation " %}

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

{% endtab %}

{% tab title="Preorder Operations" %}

```python
class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree(object):
    def __init__(self, root):
        self.root = Node(root)

    def preorder_search(self, start, find_val):
        """Helper method - use this to create a
        recursive search solution."""
        if(start.value == find_val):
            return True
        if(start.left!=None):
            left_result = self.preorder_search(start.left, find_val)
        else:
            left_result = False
        if(start.right!=None and left_result!=True):
            right_result = self.preorder_search(start.right, find_val)
        else:
            right_result = False

        if(left_result==True or right_result==True):
            return True
        else:
            return False

    def preorder_print(self, start, traversal):
        """Helper method - use this to create a
        recursive print solution."""
        traversal += '-' + str(start.value)
        left_nums = ''
        right_nums = ''
        if(start.left!=None):
            traversal = self.preorder_print(start.left, traversal)
        if(start.right!=None):
            traversal = self.preorder_print(start.right, traversal)
        return traversal

    def search(self, find_val):
        """Return True if the value
        is in the tree, return
        False otherwise."""
        return self.preorder_search(self.root, find_val)
        #print(self.preorder_search(self.root, find_val))

    def print_tree(self):
        """Print out all tree nodes
        as they are visited in
        a pre-order traversal."""
        all_nodes = self.preorder_print(self.root, '')
        all_nodes = all_nodes[1:]
        return all_nodes


# Set up tree
tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)

# Test search
# Should be True
print(tree.search(4))
# Should be False
print(tree.search(6))

# Test print_tree
# Should be 1-2-4-5-3
print(tree.print_tree())

```

{% endtab %}

{% tab title="bst.py" %}

```python
class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        # create a node for the new value
        new_node = BSTNode(value)
        # compare the node value to the self value
        if (
            new_node.value <= self.value
        ):  # less then or equal to will all go to the left if any duplicats too
            # we add to the left
            if self.left is None:
                self.left = new_node
            else:
                self.left.insert(value)
        else:
            # we add to the right
            # if space exists
            if self.right is None:
                self.right = new_node
            else:
                self.right.insert(value)

    def search(self, target):
        if target == self.value:
            return True
        # check if value is less than self.value

        if target < self.value:
            # look to the left
            if self.left is None:
                return False
            return self.left.search(target)

        else:
            # look to the right
            if self.right is None:
                return False
            return self.right.search(target)

    def find_minimum_value(self):
        # if self.left is None: #recursive here
        #     return self.value
        # min_value =  self.left.find_minimum_value()
        # return min_value
        curr_node = self
        while curr_node.left is not None:
            curr_node = curr_node.left
        return curr_node.value


root = BSTNode(10)
# root.left = BSTNode(6)
# root.right = BSTNode(12)
root.insert(6)
root.insert(7)
root.insert(12)
root.insert(5)
root.insert(14)
root.insert(8)

print(f"minimum value in tree is: {root.find_minimum_value()}")

print(f"does 8 exist? {root.search(8)}")
print(f"does 8 exist? {root.search(7)}")
print(f"does 8 exist? {root.search(15)}")

```

{% endtab %} {% endtabs %}

![Binary Search Tree](https://qvault.io/wp-content/uploads/2021/01/bst.jpg)BST

#### Pros of a BST

- When balanced, a BST provides lightning-fast `O(log(n))` insertions, deletions, and lookups.
- Binary search trees are pretty simple. An ordinary BST, unlike a balanced tree like a red-black tree, requires very little code to get running.

#### Cons of a BST

- Slow for a brute-force search. If you need to iterate over each node, you might have more success with an array.
- When the tree becomes unbalanced, all fast `O(log(n))` operations quickly degrade to `O(n)`.
- Since pointers to whole objects are typically involved, a BST can require quite a bit more memory than an array, although this depends on the implementation.

### Implementing a BST in Python

#### Step 1 – BSTNode Class

Our implementation won’t use a `Tree` class, but instead just a `Node` class. Binary trees are really just a pointer to a root node that in turn connects to each child node, so we’ll run with that idea.

First, we create a constructor:

```python
class BSTNode:
    def __init__(self, val=None):
        self.left = None
        self.right = None
        self.val = valCode language: Python (python)
```

We’ll allow a value \(key\) to be provided, but if one isn’t provided we’ll just set it to `None`. We’ll also initialize both children of the new node to `None`.

#### Step 2 – Insert

We need a way to insert new data. The insert method is as follows:

```python
def insert(self, val):
    if not self.val:
        self.val = val
        return

    if self.val == val:
        return

    if val < self.val:
        if self.left:
            self.left.insert(val)
            return
        self.left = BSTNode(val)
        return

    if self.right:
        self.right.insert(val)
        return
    self.right = BSTNode(val)Code language: Python (python)
```

If the node doesn’t yet have a value, we can just set the given value and return. If we ever try to insert a value that also exists, we can also simply return as this can be considered a `noop`. If the given value is less than our node’s value and we already have a left child then we recursively call `insert` on our left child. If we don’t have a left child yet then we just make the given value our new left child. We can do the same \(but inverted\) for our right side.

#### Step 3 – Get Min and Get Max

```python
def get_min(self):
    current = self
    while current.left is not None:
        current = current.left
    return current.val

def get_max(self):
    current = self
    while current.right is not None:
        current = current.right
    return current.valCode language: Python (python)
```

`getMin` and `getMax` are useful helper functions, and they’re easy to write! They are simple recursive functions that traverse the edges of the tree to find the smallest or largest values stored therein.

#### Step 4 – Delete

```python
def delete(self, val):
    if self == None:
        return self
    if val < self.val:
        self.left = self.left.delete(val)
        return self
    if val > self.val:
        self.right = self.right.delete(val)
        return self
    if self.right == None:
        return self.left
    if self.left == None:
        return self.right
    min_larger_node = self.right
    while min_larger_node.left:
        min_larger_node = min_larger_node.left
    self.val = min_larger_node.val
    self.right = self.right.delete(min_larger_node.val)
    return selfdef delete(self, val):
    if self == None:
        return self
    if val < self.val:
        if self.left:
            self.left = self.left.delete(val)
        return self
    if val > self.val:
        if self.right:
            self.right = self.right.delete(val)
        return self
    if self.right == None:
        return self.left
    if self.left == None:
        return self.right
    min_larger_node = self.right
    while min_larger_node.left:
        min_larger_node = min_larger_node.left
    self.val = min_larger_node.val
    self.right = self.right.delete(min_larger_node.val)
    return selfdef delete(self, val):
    if self == None:
        return self
    if val < self.val:
        self.left = self.left.delete(val)
        return self
    if val > self.val:
        self.right = self.right.delete(val)
        return self
    if self.right == None:
        return self.left
    if self.left == None:
        return self.right
    min_larger_node = self.right
    while min_larger_node.left:
        min_larger_node = min_larger_node.left
    self.val = min_larger_node.val
    self.right = self.right.delete(min_larger_node.val)
    return selfCode language: Python (python)
```

The delete operation is one of the more complex ones. It is a recursive function as well, but it also returns the new state of the given node after performing the delete operation. This allows a parent whose child has been deleted to properly set it’s `left` or `right` data member to `None`.

#### Step 5 – Exists

The exists function is another simple recursive function that returns `True` or `False` depending on whether a given value already exists in the tree.

```text
def exists(self, val):
    if val == self.val:
        return True

    if val < self.val:
        if self.left == None:
            return False
        return self.left.exists(val)

    if self.right == None:
        return False
    return self.right.exists(val)Code language: Python (python)
```

#### Step 6 – Inorder

It’s useful to be able to print out the tree in a readable format. The `inorder` method print’s the values in the tree in the order of their keys.

```python
def inorder(self, vals):
    if self.left is not None:
        self.left.inorder(vals)
    if self.val is not None:
        vals.append(self.val)
    if self.right is not None:
        self.right.inorder(vals)
    return valsCode language: Python (python)
```

#### Step 7 – Preorder

```python
def preorder(self, vals):
    if self.val is not None:
        vals.append(self.val)
    if self.left is not None:
        self.left.preorder(vals)
    if self.right is not None:
        self.right.preorder(vals)
    return valsCode language: Python (python)
```

#### Step 8 – Postorder

```python
def postorder(self, vals):
    if self.left is not None:
        self.left.postorder(vals)
    if self.right is not None:
        self.right.postorder(vals)
    if self.val is not None:
        vals.append(self.val)
    return valsCode language: Python (python)
```

#### Using the BST

```python
def main():
    nums = [12, 6, 18, 19, 21, 11, 3, 5, 4, 24, 18]
    bst = BSTNode()
    for num in nums:
        bst.insert(num)
    print("preorder:")
    print(bst.preorder([]))
    print("#")

    print("postorder:")
    print(bst.postorder([]))
    print("#")

    print("inorder:")
    print(bst.inorder([]))
    print("#")

    nums = [2, 6, 20]
    print("deleting " + str(nums))
    for num in nums:
        bst.delete(num)
    print("#")

    print("4 exists:")
    print(bst.exists(4))
    print("2 exists:")
    print(bst.exists(2))
    print("12 exists:")
    print(bst.exists(12))
    print("18 exists:")
    print(bst.exists(18))Code language: Python (python)
```

### Full Binary Search Tree in Python

```python
class BSTNode:
    def __init__(self, val=None):
        self.left = None
        self.right = None
        self.val = val

    def insert(self, val):
        if not self.val:
            self.val = val
            return

        if self.val == val:
            return

        if val < self.val:
            if self.left:
                self.left.insert(val)
                return
            self.left = BSTNode(val)
            return

        if self.right:
            self.right.insert(val)
            return
        self.right = BSTNode(val)

    def get_min(self):
        current = self
        while current.left is not None:
            current = current.left
        return current.val

    def get_max(self):
        current = self
        while current.right is not None:
            current = current.right
        return current.val

    def delete(self, val):
        if self == None:
            return self
        if val < self.val:
            if self.left:
                self.left = self.left.delete(val)
            return self
        if val > self.val:
            if self.right:
                self.right = self.right.delete(val)
            return self
        if self.right == None:
            return self.left
        if self.left == None:
            return self.right
        min_larger_node = self.right
        while min_larger_node.left:
            min_larger_node = min_larger_node.left
        self.val = min_larger_node.val
        self.right = self.right.delete(min_larger_node.val)
        return self

    def exists(self, val):
        if val == self.val:
            return True

        if val < self.val:
            if self.left == None:
                return False
            return self.left.exists(val)

        if self.right == None:
            return False
        return self.right.exists(val)

    def preorder(self, vals):
        if self.val is not None:
            vals.append(self.val)
        if self.left is not None:
            self.left.preorder(vals)
        if self.right is not None:
            self.right.preorder(vals)
        return vals

    def inorder(self, vals):
        if self.left is not None:
            self.left.inorder(vals)
        if self.val is not None:
            vals.append(self.val)
        if self.right is not None:
            self.right.inorder(vals)
        return vals

    def postorder(self, vals):
        if self.left is not None:
            self.left.postorder(vals)
        if self.right is not None:
            self.right.postorder(vals)
        if self.val is not None:
            vals.append(self.val)
        return valsCode language: Python (python)
```

### Where would you use a binary search tree in real life?

There are many applications of binary search trees in real life, and one of the most common use-cases is in storing indexes and keys in a database. For example, in MySQL or PostgresQL when you create a primary key column, what you’re really doing is creating a binary tree where the keys are the values of the column, and those nodes point to database rows. This lets the application easily search database rows by providing a key. For example, getting a user record by the `email` primary key.

There are many applications of binary search trees in real life, and one of the most common use cases is storing indexes and keys in a database. For example, when you create a primary key column in MySQL or PostgresQL, you create a binary tree where the keys are the values of the column and the nodes point to database rows. This allows the application to easily search for database rows by specifying a key, for example, to find a user record using the email primary key.

Other common uses include:

- Pathfinding algorithms in videogames \(A\*\) use BSTs
- File compression using a Huffman encoding scheme uses a binary search tree
- Rendering calculations – Doom \(1993\) was famously the first game to use a BST
- Compilers for low-level coding languages parse syntax using a BST
- Almost every database in existence uses BSTs for key lookups

## Example Binary Tree

#### Visual Aid

### ![picture alt](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

#### Example Code

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

## Terms

- tree - graph with no cycles
- binary tree - tree where nodes have at most 2 nodes
- root - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
- internal node - a node that has children
- leaf - a node that does not have any children
- path - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

## Search Patterns

- Breadth First Search - Check all nodes at a level before moving down a level
  - Think of this of searching horizontally in rows
- Depth First Search - Check the depth as far as it goes for one child, before

  moving on to the next child.

  - Think of this as searching vertically in diagonals
  - Pre-Order Traversal - Access the data of the current node, recursively visit the left sub tree, recursively visit the right sub tree
    - All the way to the left, top down, going right after other options have already been logged.
  - In-Order Traversal - Recursively visit the left sub tree, access the data of the current node, recursively visit the right sub tree
    - In the order they were the "current root", the actual return order of the recursive calls.
  - Post-Order Traversal - Recursively visit the left sub tree, recursively visit the right sub tree, access the data of the current node.
    - Starting with the bottom most nodes working up through the tree

## Constraints

- Binary trees have at most two children per node
- Given any node of the tree, the values on the left must be strictly less than that node
- Given any node of the tree, the values on the right must be strictly greater than or equal to that node
- Given these constraints a binary tree is necessarily a sorted data structure
- The worst binary trees devolve into a linked list, the best are height balanced \(think branching\).

## PseudoCode For Insertion

- Create a new node
- Start at the root
  - Check if there is a root
    - If not the root becomes the new node
  - If there is a root check if the value of the new node is equal to, greater then, or less then the value of the root
    - If it is greater or equal to
      - Check to see if there is a node to the right
        - If there is, move to the new node and continue with the node to the right as the subtree root
        - If there is not, add the new node as the right property of the current node
    - If it is smaller
      - Check to see if there is a node to the left
        - If there is, move to the new node and continue with the node to the left as the subtree root
        - If there is not, add the new node as the left property of the current node

## PseudoCode For Search Of A single Item

- Start at the root
  - Check if there is a root
    - If not, there is nothing in the tree, so the search is over
  - If there is a root, check if the value of the root is equal to, greater then, or less then the value were looking for;
    - If it is equal to the value
      - We found what we are searching for
    - If it is less than the value
      - Check to see if there is a node to the left
        - If there isn't
          - the value isn't in our tree
        - If there is
          - repeat these steps with the node to the left as the new subtree root
    - If it is greater than the value
      - Check to see if there is a node to the right
        - If there isn't
          - the value isn't in our tree
        - If there is
          - repeat these steps with the node to the right as the new subtree root

## PseudoCode For Breadth First Search Traversal

- Create a queue class or use an array
- Create a variable to store the values of the nodes visited
- Place the root in the queue
- Loop as many times as there are items in the queue
  - Dequeue a node
  - If there is a left value to the node dequeued, add it to the queue
  - If there is a right value to the node dequeued, add it to the queue
  - Push the nodes value into the variable that stores nodes visited

## PseudoCode For Depth First Search Traversal

### Pre-Order

**Iterative**

- Create a stack class or use an array
- Push the root into the stack
- Create a variable to store the values of the nodes visited
- Do this as long as there is something on the stack
  - Pop a node from the stack
  - Push that nodes value into the variable that stores nodes visited.
  - If there is a node to the right push it into the stack
  - If there is a node to the left push it into the stack
- Return the variable storing the values

**Recursive**

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the current root, the left values, and the right values

### In-Order

**Iterative**

- Create a stack class or use an array
- Create a variable to store the current root
- Create a variable to store the values of the nodes visited
- Create a loop
  - While the current root exists
    - push the current root to the call stack
    - current root is equal to the left of current root
  - if the stack is empty break out of the loop
  - set a variable to equal the popped value of the stack
  - push that variable into the variable that stores values
  - set the current root to the right of the current loop
- Return the variable storing the values

**Recursive**

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the the left values, current root ,and the right values

### Post-Order

**Iterative**

- Haven't figured this one out yet.

**Recursive**

- Create a variable to store the current root
- Push the value of current root to the variable storing the values
- If the current root has a left propety call the function on that the left property
- If the current root has a right propety call the function on that the right property
- Spread the the left values, the right values, and current root

## Example Binary Search Tree

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //Insert a new node

  recursiveInsert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
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

  iterativeInsert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode();
      } else {
        while (true) {
          if (val < currentNode.val) {
            if (!currenNodet.left) {
              currentNode.left = new TreeNode();
              return this;
            } else {
              currentNode = currentNode.left;
            }
          } else {
            if (!currentNode.right) {
              currentNode.right = new TreeNode();
              return this;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }

  //Search the tree

  searchRecur(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val < currentNode.val) {
      return this.searchRecur(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.searchRecur(val, currentNode.right);
    } else {
      return true;
    }
  }

  searchIter(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Maybe works, who knows, pulled it off the internet....

  deleteNodeHelper(root, key) {
    if (root === null) {
      return false;
    }
    if (key < root.val) {
      root.left = deleteNodeHelper(root.left, key);
      return root;
    } else if (key > root.val) {
      root.right = deleteNodeHelper(root.right, key);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let currNode = root.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      root.val = currNode.val;
      root.right = deleteNodeHelper(root.right, currNode.val);
      return root;
    }
  }

  //Recursive Depth First Search

  preOrderTraversal(root) {
    if (!root) return [];
    let left = this.preOrderTraversal(root.left);
    let right = this.preOrderTraversal(root.right);
    return [root.val, ...left, ...right];
  }

  preOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(root.val);
    newArray.push(...this.preOrderTraversalV2(root.left));
    newArray.push(...this.preOrderTraversalV2(root.right));
    return newArray;
  }

  inOrderTraversal(root) {
    if (!root) return [];
    let left = this.inOrderTraversal(root.left);
    let right = this.inOrderTraversal(root.right);
    return [...left, root.val, ...right];
  }

  inOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(...this.inOrderTraversalV2(root.left));
    newArray.push(root.val);
    newArray.push(...this.inOrderTraversalV2(root.right));
    return newArray;
  }

  postOrderTraversal(root) {
    if (!root) return [];
    let left = this.postOrderTraversal(root.left);
    let right = this.postOrderTraversal(root.right);
    return [...left, ...right, root.val];
  }

  postOrderTraversalV2(root) {
    if (!root) return [];
    let newArray = new Array();
    newArray.push(...this.postOrderTraversalV2(root.left));
    newArray.push(...this.postOrderTraversalV2(root.right));
    newArray.push(root.val);
    return newArray;
  }

  // Iterative Depth First Search

  iterativePreOrder(root) {
    let stack = [root];
    let results = [];
    while (stack.length) {
      let current = stack.pop();
      results.push(current);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
    return results;
  }

  iterativeInOrder(root) {
    let stack = [];
    let current = root;
    let results = [];
    while (true) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      if (!stack.length) break;
      let removed = stack.pop();
      results.push(removed);
      current = current.right;
    }
    return results;
  }

  //To-Do iterativePostOrder

  //Breadth First Search

  breadthFirstSearch(root) {
    let queue = [root];
    let result = [];
    while (queue.length) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.left);
      current.push(result);
    }
    return result;
  }

  // Converting a Sorted Array to a Binary Search Tree

  sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);

    let left = nums.slice(0, mid);
    root.left = sortedArrayToBST(left);

    let right = nums.slice(mid + 1);
    root.right = sortedArrayToBST(right);

    return root;
  }
}
```

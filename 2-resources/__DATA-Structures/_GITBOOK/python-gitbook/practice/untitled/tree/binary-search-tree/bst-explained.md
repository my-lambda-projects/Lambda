# BST Explained

### What is a Binary Search Tree?

Binary Search Tree is a kind of tree in which each node follows specific properties to construct a tree.

#### Properties of Binary Search Tree

1. At every level, the left sub tree is smaller than its parent root key.
2. At every level, the right sub tree is larger than its parent root key.

It is called Binary Tree because it has at most 2 children at every parent node.

It is also called a [**sorted ordered**](https://en.wikipedia.org/wiki/Binary_search_tree) **binary tree or search tree**. It is called search tree because the search or find operation for a key requires **O\(log\(n\)\)** time complexity.

#### Operations in Binary Search Tree

1. Insertion
2. Search
3. Traversal \(Preorder, Inorder, Postorder\)

**Implementation of Binary Search Tree**

Now, let’s start creating a Binary Search Tree. So for every key of the tree, we require a Node which consists of data, left child pointer, and then right child pointer.

**Create Class Node**

```text
class Node(object):
    def __init__(self, data):
        self.data = data
        self.leftChild = None
        self.rightChild = None
```

**1. Insert Operation**

Now after initializing a Node class, let’s create an Insert operation that will insert the key either to the left of the parent or the right of the parent.

```text
    def insert(self, data):
        if self.data == data:
            return False        # As BST cannot contain duplicate data

        elif data < self.data:
            ''' Data less than the root data is placed to the left of the root '''
            if self.leftChild:
                return self.leftChild.insert(data)
            else:
                self.leftChild = Node(data)
                return True

        else:
            ''' Data greater than the root data is placed to the right of the root '''
            if self.rightChild:
                return self.rightChild.insert(data)
            else:
                self.rightChild = Node(data)
                return True
```

**2. Find Operation**

After creating the Insert Operation, let’s create a find or Search operation which checks whether the specified data is in the tree or not.

```text
    def find(self, data):
        if(data == self.data):
            return True
        elif(data < self.data):
            if self.leftChild:
                return self.leftChild.find(data)
            else:
                return False
        else:
            if self.rightChild:
                return self.rightChild.find(data)
            else:
                return False
```

**3. Traversal**

Now we have implemented Insertion and Search Operation for our Binary Search Tree.

Now we have to implement the traversal of the BST. So, there are 3 different types of Traversal in BST.

**1. Preorder Traversal**

Preorder Traversal is a kind of traversal in which first we print the parent root and then traverse to the left of the parent and after completing the whole left branch then proceed to the right of the parent root at every level.

```text
    def preorder(self):
        '''For preorder traversal of the BST '''
        if self:
            print(str(self.data), end = ' ')
            if self.leftChild:
                self.leftChild.preorder()
            if self.rightChild:
                self.rightChild.preorder()
```

**2. Inorder Traversal**

Inorder Traversal is similar to Preorder Traversal but the difference is first we go to the extreme left and then we print the parent and then we procees to the right of the parent at every level.

**And Inorder Traversal always prints the BST in Sorted Order.**

```text
    def inorder(self):
        ''' For Inorder traversal of the BST '''
        if self:
            if self.leftChild:
                self.leftChild.inorder()
            print(str(self.data), end = ' ')
            if self.rightChild:
                self.rightChild.inorder()
```

**3. PostOrder Traversal**

PostOrder Traversal is similar to other traversals but the difference is first we go the extreme left then we proceed to the right and then we print out the parent of the key at every level.

```text
    def postorder(self):
        ''' For postorder traversal of the BST '''
        if self:
            if self.leftChild:
                self.leftChild.postorder()
            if self.rightChild:
                self.rightChild.postorder()
            print(str(self.data), end = ' ')
```

Now we have to implement Node Class, let’s implement the Tree Class which instantiates Node Class and its operations.

#### Create Tree Class

We first create a similar function that we have created in Node class to expose Tree Class functionalities to outside and not Node Class directly.

```text
class Tree(object):
    def __init__(self, initial_data = []):
        self.root = None

        # If provided, add initial data
        for data in initial_data:
            self.insert(data)

    def insert(self, data):
        if self.root:
            return self.root.insert(data)
        else:
            self.root = Node(data)
            return True

    def find(self, data):
        if self.root:
            return self.root.find(data)
        else:
            return False

    def preorder(self):
        if self.root is not None:
            print()
            print('Preorder: ')
            self.root.preorder()

    def inorder(self):
        print()
        if self.root is not None:
            print('Inorder: ')
            self.root.inorder()

    def postorder(self):
        print()
        if self.root is not None:
            print('Postorder: ')
            self.root.postorder()
```

**Print Complete Tree**

Let’s add one more functionality to our class Tree which prints the whole tree in the console log output.

```text
    def pprint(self, head_node=0, _pre="", _last=True, term=False):

        head_node = self.root if head_node == 0 else head_node

        data = "*" if head_node is None else head_node.data

        print(_pre, "`- " if _last else "|- ", data, sep="")
        _pre += "   " if _last else "|  "

        if term: return

        for i, child in enumerate([head_node.leftChild, head_node.rightChild]):
            self.pprint(child,  _pre, bool(i) ,term=not(bool(child)))
```

**Implement Main Function**

Now our BST is implemented perfectly in the above classes. Let’s create an object of Tree Class and then check its functionalities.

```text
if __name__ == '__main__':
    tree = Tree()
    tree.insert(10)
    tree.insert(12)
    tree.insert(5)
    tree.insert(4)
    tree.insert(20)
    tree.insert(8)
    tree.insert(7)
    tree.insert(15)
    tree.insert(13)
    tree.pprint()
    print(tree.find(1))
    print(tree.find(12))
    tree.preorder()
    tree.inorder()
    tree.postorder()
```

**Code**

```python
class Node(object):
    def __init__(self, data):
        self.data = data
        self.leftChild = None
        self.rightChild = None

    def insert(self, data):
        if self.data == data:
            return False        # As BST cannot contain duplicate data

        elif data < self.data:
            ''' Data less than the root data is placed to the left of the root '''
            if self.leftChild:
                return self.leftChild.insert(data)
            else:
                self.leftChild = Node(data)
                return True

        else:
            ''' Data greater than the root data is placed to the right of the root '''
            if self.rightChild:
                return self.rightChild.insert(data)
            else:
                self.rightChild = Node(data)
                return True


    def find(self, data):
        if(data == self.data):
            return True
        elif(data < self.data):
            if self.leftChild:
                return self.leftChild.find(data)
            else:
                return False
        else:
            if self.rightChild:
                return self.rightChild.find(data)
            else:
                return False

    def preorder(self):
        '''For preorder traversal of the BST '''
        if self:
            print(str(self.data), end = ' ')
            if self.leftChild:
                self.leftChild.preorder()
            if self.rightChild:
                self.rightChild.preorder()

    def inorder(self):
        ''' For Inorder traversal of the BST '''
        if self:
            if self.leftChild:
                self.leftChild.inorder()
            print(str(self.data), end = ' ')
            if self.rightChild:
                self.rightChild.inorder()

    def postorder(self):
        ''' For postorder traversal of the BST '''
        if self:
            if self.leftChild:
                self.leftChild.postorder()
            if self.rightChild:
                self.rightChild.postorder()
            print(str(self.data), end = ' ')

class Tree(object):
    def __init__(self, initial_data = []):
        self.root = None

        # If provided, add initial data
        for data in initial_data:
            self.insert(data)

    def insert(self, data):
        if self.root:
            return self.root.insert(data)
        else:
            self.root = Node(data)
            return True

    def find(self, data):
        if self.root:
            return self.root.find(data)
        else:
            return False

    def preorder(self):
        if self.root is not None:
            print()
            print('Preorder: ')
            self.root.preorder()

    def inorder(self):
        print()
        if self.root is not None:
            print('Inorder: ')
            self.root.inorder()

    def postorder(self):
        print()
        if self.root is not None:
            print('Postorder: ')
            self.root.postorder()


    def pprint(self, head_node=0, _pre="", _last=True, term=False):

        head_node = self.root if head_node == 0 else head_node

        data = "*" if head_node is None else head_node.data

        print(_pre, "`- " if _last else "|- ", data, sep="")
        _pre += "   " if _last else "|  "

        if term: return

        for i, child in enumerate([head_node.leftChild, head_node.rightChild]):
            self.pprint(child,  _pre, bool(i) ,term=not(bool(child)))


if __name__ == '__main__':
    tree = Tree()
    tree.insert(10)
    tree.insert(12)
    tree.insert(5)
    tree.insert(4)
    tree.insert(20)
    tree.insert(8)
    tree.insert(7)
    tree.insert(15)
    tree.insert(13)
    tree.pprint()
    print(tree.find(1))
    print(tree.find(12))
    tree.preorder()
    tree.inorder()
    tree.postorder()
```

**Output**

```text
`- 10
   |- 5
   |  |- 4
   |  |  |- *
   |  |  `- *
   |  `- 8
   |     |- 7
   |     |  |- *
   |     |  `- *
   |     `- *
   `- 12
      |- *
      `- 20
         |- 15
         |  |- 13
         |  |  |- *
         |  |  `- *
         |  `- *
         `- *
False
True

Preorder:
10 5 4 8 7 12 20 15 13
Inorder:
4 5 7 8 10 12 13 15 20
Postorder:
4 7 8 5 13 15 20 12 10
```

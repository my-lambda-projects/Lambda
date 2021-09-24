#### Understanding the problem

Problem description: Invert a binary tree.

An inverted form of a Binary Tree is another Binary Tree with left and right children of all non-leaf nodes interchanged. You may also call it the mirror of the input tree.

NOTE: The tree is binary so there could be a maximum of two child nodes. This problem was originally inspired by [this tweet](https://twitter.com/mxcl/status/608682016205344768) by [Max Howell](https://twitter.com/mxcl) .

Now, figure out that what does the interviewer mean when he says invert a binary tree, it would be helpful when you start looking at an example.

Example 1

![](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/invert-a-binary-tree-input1-4aa635c761b7a493.png)

Example 2

![](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/invert-a-bianry-tree-input2-2bcb260fdb270621.png)

Explanation : You can observe that the root's left pointer started pointing towards the right child and the right pointer towards the left child and a similar condition is noticed for all the sub root nodes.

The node structure for the BST passed to your function will be

```
class TreeNode
{
    int val
    TreeNode left
    TreeNode right
}
```

#### Recursive and iterative solutions

We will be discussing three approaches to solve this problem

1.  Recursive solution (similar to pre-order traversal) :  Solve the problem by swapping the left and right child for the root of each subtree recursively.
2.  Using Iterative Preorder Traversal : We can convert the above recursive solution to iterative using stack.
3.  Using Level order traversal : iterative approach using queue

#### 1\. Recursive Solution

The key insight here is to realize that in order to invert a binary tree we only need to swap the children and recursively solve the two smaller sub-problems (same problem but for smaller input size) of left and right sub-tree. This looks similar to the idea of pre-order traversal.

The steps to be followed are  :

- When the tree is empty return NULL. This is also our base case to stop recursive calls.
- For every node encountered we swap its left and right child before recursively inverting its left and right subtree.

> Pseudo Code

```
// Function to invert given binary Tree using preorder traversal
void invertBinaryTree(TreeNode root)
{
    // base case: if tree is empty
    if (root == Null)
        return
    // swap left subtree with right subtree
    swap(root.left, root.right)
    // invert left subtree
    invertBinaryTree(root.left)
    // invert right subtree
    invertBinaryTree(root.right)
}
```

> Complexity Analysis

In the above approach, we are traversing each node of the tree only once. Time complexity: O(n)

Space Complexity of this algorithm is proportional to the maximum depth of recursion tree generated which is equal to the height of the tree (h).

Space complexity: O(h) for recursion call stack, where h is the height of the tree.

> Critical ideas to think

- Can we use idea similar to post-order traversal for solving this problem? or, can we use some other recursive idea for solution?
- Why recursion help us to solve the tree problems easily? Explore the properties of Pre-order, In-Order and Post-Order traversal.
- What is the space complexity in the worst and best-case scenario?

#### 2\. Using Iterative Preorder Traversal

Here, a Iterative Preorder Traversal is used to traverse the tree using a LIFO stack. To convert recursive procedures to iterative, we need an explicit stack during the implementation.

> Solution Steps

1.  When the tree is empty return NULL.
2.  Create an empty stack S and push root node to stack.
3.  Do following while S is not empty :

- Pop an item from stack S and swap the left child with right child
- Push right child of popped item to the stack S.
- Push left child of popped item to the stack S

Right child is pushed before left child to make sure that left subtree is processed first.

> Pseudo Code

```
// Iterative Function to invert given binary Tree using stack
void invertBinaryTree(TreeNode root)
{
    // base case: if tree is empty
    if (root is null)
        return
    // create an empty stack and push root node
    stack S
    S.push(root)
    // iterate until the stack is not empty
    while (S is not empty)
    {
        // pop top node from stack
        TreeNode curr = S.top()
        S.pop()
        // swap left child with right child
        swap(curr.left, curr.right)
        // push right child of popped node to the stack
        if (curr.right)
            S.push(curr.right)
        // push left child of popped node to the stack
        if (curr.left)
            S.push(curr.left)
    }
}
```

> Complexity Analysis

For each node in the tree, we are performing push() and pop() operation only once. Total no of stack operations = 2n (Think!)

Time complexity: O(n), where n is the total number of nodes.

Space Complexity: O(n)(Think!)

> Critical Ideas to think

- Visualize the stack operations via simple examples.
- Explore the best and worst case scenario of space complexity.
- Design iterative algorithms for in-order and post-order traversal (using stack).
- Can we solve this problem using level-order traversal?

![Thumbnail Image](https://afteracademy.com/assets/android-course-subscription-banner.png)

NEW

##### Android App Development Online Course by MindOrks

Start your career in Android Development. Learn by doing real projects.

[CHECK NOW](https://mindorks.com/android-app-development-online-course)

#### 3\. Using Level order traversal

We can solve this problem using Level Order Traversal. Here we the traverse the tree using a FIFO Queue.

In each iteration :

- We are deleting one node from the queue : TreeNode curr = Q.dequeue()
- Swapping the left and right child : swap(curr.left, curr.right)
- Inserting left and right child to the queue

```
if (curr.left)
   Q.enqueue(curr.left)
if (curr.right)
   Q.enqueue(curr.right)
```

> Pseudo Code

```
// Iterative Function to invert given binary Tree using queue
void invertBinaryTree(TreeNode root)
{
    // base case: if tree is empty
    if (root is NULL)
        return
    // maintain a queue and push push root node
    queue Q
    Q.enqueue(root)
    // iterate untill queue is not empty
    while (Q is not empty)
    {
        // pop top node from queue
        TreeNode curr = Q.dequeue()
        // swap left child with right child
        swap(curr.left, curr.right)
        // push left child of popped node to the queue
        if (curr.left)
            Q.enqueue(curr.left)
        // push right child of popped node to the queue
        if (curr.right)
            Q.enqueue(curr.right)
    }
}
```

> Complexity Analysis

For each node in the tree, we are performing enqueue() and dequeue() operation only once. Total no of queue operations = 2n (Think!)

Time complexity: O(n), where n is the total number of nodes.

Space Complexity: O(n) (Think!)

> Critical Ideas to think

- Can you use a similar approach if the tree is generic?
- Explore the best and worst case scenario of space complexity.
- Can we write a recursive code for level order traversal? If yes then, compare its performance with Iterative Implementation (level order traversal using queue).

#### Comparison of different solutions

![](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/invert-a-binary-tree-comparison-115195e1d6b62099.png)

#### Suggested Problem to solve

---

## moar

# Invert Binary Tree -- Iterative and Recursive Solution

Given a binary tree, write an efficient algorithm to invert it.

For example,

![Invert Binary Tree](https://www.techiedelight.com/wp-content/uploads/invert-binary-tree.png)

## Recursive Solution

This is one of the most famous interview questions and can be easily solved recursively. The idea is to traverse the tree in a [preorder fashion](https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/), and for every node encountered, swap its left and right child before recursively inverting its left and right subtree. We can also traverse the tree in a [postorder fashion](https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/).

The algorithm can be implemented as follows in C++, Java, and Python:

- C++
- Java
- Python

|

|

# A class to store a binary tree node

class Node:

def **init**(self, data, left=None, right=None):

self.data = data

self.left = left

self.right = right

# Function to perform preorder traversal on a given binary tree

def preorder(root):

if root is None:

return

print(root.data, end=' ')

preorder(root.left)

preorder(root.right)

# Utility function to swap left subtree with right subtree

def swap(root):

if root is None:

return

temp = root.left

root.left = root.right

root.right = temp

# Function to invert a given binary tree using preorder traversal

def invertBinaryTree(root):

# base case: if the tree is empty

if root is None:

return

# swap left subtree with right subtree

swap(root)

# invert left subtree

invertBinaryTree(root.left)

# invert right subtree

invertBinaryTree(root.right)

if **name** == '**main**':

''' Construct the following tree

1

/

/

2       3

/ \     /

4   5   6   7

'''

root = Node(1)

root.left = Node(2)

root.right = Node(3)

root.left.left = Node(4)

root.left.right = Node(5)

root.right.left = Node(6)

root.right.right = Node(7)

invertBinaryTree(root)

preorder(root)

|

[Download](https://www.techiedelight.com/code/1RVuNTP)  [Run Code](https://techiedelight.com/compiler/?run=1RVuNTP)

Output:

1 3 7 6 2 5 4

The time complexity of the above recursive solution is O(n), where `n` is the total number of nodes in the binary tree. The program requires O(h) extra space for the call stack, where `h` is the height of the tree.

## Iterative Solution

We can easily convert the above recursive solution into an iterative one using a [queue](https://www.techiedelight.com/circular-queue-implementation-c/) or [stack](https://www.techiedelight.com/stack-implementation/) to store tree nodes.

### 1\. Using Queue:

The code is almost similar to the [level order traversal](https://www.techiedelight.com/level-order-traversal-binary-tree/) of a binary tree. This is demonstrated below in C++, Java, and Python:

- C++
- Java
- Python

|

|

from collections import deque

# A class to store a binary tree node

class Node:

def **init**(self, data, left=None, right=None):

self.data = data

self.left = left

self.right = right

# Function to perform preorder traversal on a given binary tree

def preorder(root):

if root is None:

return

print(root.data, end=' ')

preorder(root.left)

preorder(root.right)

# Utility function to swap left subtree with right subtree

def swap(root):

if root is None:

return

temp = root.left

root.left = root.right

root.right = temp

# Iterative function to invert a given binary tree using a queue

def invertBinaryTree(root):

# base case: if the tree is empty

if root is None:

return

# maintain a queue and push the root node

q = deque()

q.append(root)

# loop till queue is empty

while q:

# dequeue front node

curr = q.popleft()

# swap the left child with the right child

swap(curr)

# enqueue left child of the popped node

if curr.left:

q.append(curr.left)

# enqueue right child of the popped node

if curr.right:

q.append(curr.right)

if **name** == '**main**':

''' Construct the following tree

1

/

/

2       3

/ \     /

4   5   6   7

'''

root = Node(1)

root.left = Node(2)

root.right = Node(3)

root.left.left = Node(4)

root.left.right = Node(5)

root.right.left = Node(6)

root.right.right = Node(7)

invertBinaryTree(root)

preorder(root)

|

[Download](https://www.techiedelight.com/code/WQVdYP)  [Run Code](https://techiedelight.com/compiler/?run=WQVdYP)

Output:

1 3 7 6 2 5 4

### 2\. Using Stack:

The code is almost similar to the [iterative preorder traversal](https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/) of a binary tree. This is demonstrated below in C++, Java, and Python:

- C++
- Java
- Python

|

|

from collections import deque

# A class to store a binary tree node

class Node:

def **init**(self, data, left=None, right=None):

self.data = data

self.left = left

self.right = right

# Function to perform preorder traversal on a given binary tree

def preorder(root):

if root is None:

return

print(root.data, end=' ')

preorder(root.left)

preorder(root.right)

# Utility function to swap left subtree with right subtree

def swap(root):

if root is None:

return

temp = root.left

root.left = root.right

root.right = temp

# Iterative function to invert a given binary tree using stack

def invertBinaryTree(root):

# base case: if the tree is empty

if root is None:

return

# create an empty stack and push the root node

s = deque()

s.append(root)

# loop till stack is empty

while s:

# pop the top node from the stack

curr = s.pop()

# swap the left child with the right child

swap(curr)

# enqueue right child of the popped node

if curr.right:

s.append(curr.right)

# push the left child of the popped node into the stack

if curr.left:

s.append(curr.left)

if **name** == '**main**':

''' Construct the following tree

1

/

/

2       3

/ \     /

4   5   6   7

'''

root = Node(1)

root.left = Node(2)

root.right = Node(3)

root.left.left = Node(4)

root.left.right = Node(5)

root.right.left = Node(6)

root.right.right = Node(7)

invertBinaryTree(root)

preorder(root)

|

[Download](https://www.techiedelight.com/code/LqKj6KP)  [Run Code](https://techiedelight.com/compiler/?run=LqKj6KP)

Output:

1 3 7 6 2 5 4

The time complexity of both above-discussed iterative methods is O(n), where `n` is the total number of nodes in the binary tree. The program requires O(n) extra space for storing nodes present in any level of the binary tree. The worst case happens for a full binary tree, in which the last level has `n/2` nodes.

Rate this post

Average rating 4.91/5. Vote count: 80

Thanks for reading.

Please use our [online compiler](https://techiedelight.com/compiler/) to post code in comments using C, C++, Java, Python, JavaScript, C#, PHP, and many more popular programming languages.

Like us? Refer us to your friends and help us grow. Happy coding 🙂

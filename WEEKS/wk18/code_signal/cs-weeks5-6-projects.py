"""
Week Binary search tree 5 warm up
"""
"""
*** Objective 1 Challenge ***
-----------------
- Calculate how many levels a perfect binary tree has given that the total 

number of nodes is 127.
log2(n + 1) = h
# log2 is 2**(? + 1) = h
log2(128) = h
2**7 = 128
7 <~~ answer

- Calculate the total number of nodes on a perfect binary tree, given that 
  the height of the tree is 8.
  
n = 2h - 1
n = 2**8 - 1
n = 256 - 1
n = 255 <~~ answer
"""

"""
*** Objective 2 Challenge *** 
-----------------------------
- In your own words, explain why an unbalanced binary search tree's 
performance becomes degraded.
The worst case performance is linear because each node would potentially need to be traversed
"""

"""
Challenge
To implement a delete operation on our BST and BSTNode classes, we must consider three cases:

If the BSTNode to be deleted is a leaf (has no children), we can remove that node from the tree.
If the BSTNode to be deleted has only one child, we copy the child node to be deleted and delete it.
If the BSTNode to be deleted has two children, we have to find the "in-order successor". The "in-order successor" is the next highest value, the node that has the minimum value in the right subtree.
Given the above information, can you write pseudocode for a method that can find the minimum value of all the nodes within a tree or subtree?

- search for the node to find its place in the tree and make sure it exists
- set the parents pointer to it to None if it has no children and set the 
root to none if it is the root node
- if the node has 1 child set the value to its child value and set its 
pointer to none
- find successor or predecessor and copy the value of it to the 
node to be deleted and then we can delete the successor or predecessor
"""


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
            return self.value
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

    def delete(self, target):
        current = self
        parent = None

        while True:
            if target < current.value:
                parent = current
                current = current.left
            elif target > current.value:
                parent = current
                current = current.right
            else:
                target_node = current
                break

        if target is False:
            return False

        replacement = None
        replacement_parent = None
        current = target_node.right

        while True:
            if current.left is None:
                replacement = current
                break
            else:
                replacement_parent = current
                current = current.left

        replacement_parent.left = None
        if target_node.value < parent.value:
            parent.left = replacement
        elif target_node.value > parent.value:
            parent.right = replacement
        replacement.left = target_node.left
        replacement.right = target_node.right

    def find_minimum_value(self):
        if self.left is None:
            return self
        else:
            return self.left.find_minimum_value()


class BST:
    def __init__(self, value):
        self.root = BSTNode(value)

    def insert(self, value):
        return self.root.insert(value)

    def search(self, target):
        return self.root.search(target)

    def find_minimum_value(self):
        return self.root.find_minimum_value().value

    def delete(self, value):
        return self.root.delete(value)


"""
*** Binary Search Tree Guided ***
---------------------------------
"""

"""
*** Demo 1 ***
--------------
You are given a binary tree.
Write a function that can find the **maximum depth** of the binary tree. The
maximum depth can be defined as the number of nodes found along the longest
path from the root down to the furthest leaf node. Remember, a leaf node is a
node that has no children.
Example:
Given the following binary tree
    5
   / \
  12  32
     /  \
    8    4
your function should return the depth = 3.
"""


class BinaryTreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def maxDepth(self, root):
    # if root is None return 0
    if root is None:
        return 0
    # if root exists get the left depth and the right depth by recursively
    # calling maxDepth on each side of the subtree
    left_depth = self.maxDepth(root.left)
    right_depth = self.maxDepth(root.right)
    # if the left depth is greater than the right depth return the left depth
    # plus 1
    if left_depth > right_depth:
        return left_depth + 1
    else:
        # else return right depth plus 1
        return right_depth + 1


"""
*** Demo 2 ***
--------------

You are given a binary tree. You need to write a function that can determine if
it is a valid binary search tree.
The rules for a valid binary search tree are:
- The node's left subtree only contains nodes with values less than the node's
value.
- The node's right subtree only contains nodes with values greater than the
node's value.
- Both the left and right subtrees must also be valid binary search trees.
Example 1:
Input:
    5
   / \
  3   7
Output: True
Example 2:
Input:
    10
   / \
  2   8
     / \
    6  12
Output: False
Explanation: The root node's value is 10 but its right child's value is 8.
"""


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def is_valid_BST(self, root):
    # if there is no root return False
    if root is None:
        return True
    # traverse the tree to make sure it is valid
    else:
        if root.left is None and root.right is None:
            return True
        elif root.left is None:
            if root.right > root:
                self.is_valid_BST(self, root.right)
            else:
                # if a right node is greater than a parent return false
                return False
        # if the left child is less than parent traverse that subtree
        elif root.right is None:
            if root.left < root:
                self.is_valid_BST(self, root.left)
            else:
                # if a left node is greater than parent return false
                return False
        # if the right child is greater than parent traverse the right subtree

    # if we never get a false condition the tree is valid so return true
    return True


"""
*** Codesignal Project ***
--------------------------
"""

"""
You are given a binary tree and you need to write a function that can determine if it is height-balanced.

A height-balanced tree can be defined as a binary tree in which the left and right subtrees of every node differ in height by a maximum of 1.

Example 1:
Given the following tree [5,10,25,None,None,12,3]:

    5
   / \
 10  25
    /  \
   12   3
return True.

Example 2:
Given the following tree [5,6,6,7,7,None,None,8,8]:

       5
      / \
     6   6
    / \
   7   7
  / \
 8   8
return False.

[execution time limit] 4 seconds (py3)

[input] tree.integer root

[output] boolean
"""


#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def balancedBinaryTree(root):
    # define method to get the height of the tree
    def get_height(root):
        if root is None:
            return 0
        return max(get_height(root.left), get_height(root.right)) + 1

    # if the root is None return True
    if root is None:
        return True
    # get the heights of each subtree
    left_height = get_height(root.left)
    right_height = get_height(root.right)
    # if the absolute value of left subtree - right subtree is less than or
    # equal to 1 and left tree is balanced and right tree is balanced then
    # the whole tree is balanced
    if (
        (abs(left_height - right_height) <= 1)
        and balancedBinaryTree(root.left) is True
        and balancedBinaryTree(root.right) is True
    ):
        return True
    return False


"""
You are given a binary tree and you are asked to write a function that finds its minimum depth. The minimum depth can be defined as the number of nodes along the shortest path from the root down to the nearest leaf node. As a reminder, a leaf node is a node with no children.

Example:
Given the binary tree [5,7,22,None,None,17,9],

    5
   / \
  7  22
    /  \
   17   9
your function should return its minimum depth = 2.

[execution time limit] 4 seconds (py3)

[input] tree.integer root

[output] integer
"""


def minimumDepthBinaryTree(root):
    # if root is None return 0
    if root is None:
        return 0
    # if root has no children return 1
    if root.left is None and root.right is None:
        return 1

    # if no left child traverse the right tree
    if root.left is None:
        return minimumDepthBinaryTree(root.right) + 1
    # if not right child traverse the left sree
    if root.right is None:
        return minimumDepthBinaryTree(root.left) + 1

    # return the minimum depth after recursion
    return (
        min(minimumDepthBinaryTree(root.left), minimumDepthBinaryTree(root.right)) + 1
    )


""""
week 5 Tree traversal Warm up
- Preorder Traversal
--- Visit the root node first
--- Traverse the left subtree in preorder
--- Traverse the right subtree in preorder
- Inorder Traversal
--- Traverse the left subtree inorder first
--- Visit the root node
--- Traverse the right subtree inorder
- Postorder Traversal
--- Traverse the left subtree postorder first
--- Traverse the right subtree postorder
--- Visit the root node
"""

"""
Depth first inorder traversal 
"""


# Definition for a binary tree node.
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


"""
Depth first pre-order traversal
"""


# Definition for a binary tree node.
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


"""
Depth first  first post-order traversal
"""


# Definition for a binary tree node.
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


"""
Breadth first level order traversal
"""


# Definition for a binary tree node.
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


"""
*** Challenge ***
-----------------
What data structure could you use to write an iterative depth-first traversal method?
-- a binary tree
In your own words, explain how a depth-first traversal and a breadth-first traversal are different?
-- depth first traversal uses recursion to visit the length of the tree and 
returns the node of left subtree and then right subtree whereas breadth first traversal uses a queue to remember the visited nodes while checking a level at a time down the height of both subtrees together 
"""

"""
*** Tree traversal Guided ***
---------------------------------
"""

"""
*** Demo 1 ***
--------------
You are given a binary tree.
Write a function that can return the inorder traversal of node values.
Example:
Input:
   3
    \
     1
    /
   5
Output: [3,5,1]
DFS types of traversals
- Preorder Traversal
--- Visit the root node first
--- Traverse the left subtree in preorder
--- Traverse the right subtree in preorder
- Inorder Traversal
--- Traverse the left subtree inorder first
--- Visit the root node
--- Traverse the right subtree inorder
- Postorder Traversal
--- Traverse the left subtree postorder first
--- Traverse the right subtree postorder
--- Visit the root node
"""


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# go all the way down to left then back to root then right in iterative or
# recursive
# for recursive solution keep track of base case (when there is no root) and
# the recursive way
def inorder_traversal(root):
    # base case
    if root is None:
        return []
    # recursively call the function on the left child until no more left
    # children then the root will be none and the values are returned up the
    # chain inorder
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)


# the iterative way with a stack
# declare the stack and the result array
# stack = []
# result = []
# # if a left child exists add it onto the stack when no more left children
# # add the last root to the result
# # then go back to the previous root on the stack and add it and check if
# # it has right children, if so repeat steps on the right child as new root
# while root is not None or stack != []:
#     while root is not None:
#         stack.append(root)
#         root = root.left
#     root = stack.pop()
#     result.append(root.val)
#     root = root.right


"""
*** Demo 2 ***
--------------
You are given the values from a preorder and an inorder tree traversal. Write a
function that can take those inputs and output a binary tree.
*Note: assume that there will not be any duplicates in the tree.*
Example:
Inputs:
preorder = [5,7,22,13,9]
inorder = [7,5,13,22,9]
Output:
    5
   / \
  7  22
    /  \
   13   9
   - Preorder Traversal
--- Visit the root node first
--- Traverse the left subtree in preorder
--- Traverse the right subtree in preorder
- Inorder Traversal
--- Traverse the left subtree inorder first
--- Visit the root node
--- Traverse the right subtree inorder
- Postorder Traversal
--- Traverse the left subtree postorder first
--- Traverse the right subtree postorder
--- Visit the root node
"""

preorder = [5, 7, 22, 13, 9]
inorder = [7, 5, 13, 22, 9]


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def build_tree(preorder, inorder):
    # inorder (left -> right -> root ->)
    # preorder (root -> left -> right)
    # the absolute root will be preorder[0]
    # all items to the left of inorder[root] will be the left subtree
    # all items to the right of inorder[root] will be the right subtree

    # pick the next element in preorder starting with item[0]
    # create a new node with val set to the element
    # delete it from preorder
    # get the index of that element from inorder list using hashMaps to
    # reduce time complexity for finding the index
    # recursively call the function for elements in the left of the picked
    # element and assign it to the left of the picked node
    # recursively call the function for elements in teh right of hte picked
    # element and assign it to the right of hte picked node
    # return root node
    if inorder:
        root = TreeNode(preorder.pop(0))
        root_index = inorder.index(root.val)
        root.left = build_tree(preorder, inorder[:root_index])
        root.right = build_tree(preorder, inorder[root_index + 1 :])
        return root


tree = build_tree(preorder, inorder)
# print('tree:', inorder_traversal(tree))

"""
*** CodeSignal ***
------------------
"""
"""
You are given a binary tree. Write a function that returns the binary tree's node values using an in-order traversal.

Example:
Input: [2,None,3,4]

   2
    \
     3
    /
   4
Output: [2,4,3]
"""


#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def binaryTreeInOrderTraversal(root):
    stack = []
    result = []
    while root is not None or stack != []:
        while root is not None:
            stack.append(root)
            root = root.left
        root = stack.pop()
        result.append(root.value)
        root = root.right
    return result


"""
Note: Try to solve this task without using recursion, since this is what you'll be asked to do during an interview.

Given a binary tree of integers t, return its node values in the following format:

The first element should be the value of the tree root;
The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;
Etc.
Example

For

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}
the output should be
traverseTree(t) = [1, 2, 4, 3, 5].

This t looks like this:

     1
   /   \
  2     4
   \   /
    3 5
"""

t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": None,
        "right": {"value": 3, "left": None, "right": None},
    },
    "right": {
        "value": 4,
        "left": {"value": 5, "left": None, "right": None},
        "right": None,
    },
}


# ********* Breadth first

#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def traverseTree(t):
    queue = []
    result = []
    if t is None:
        return result
    root = t
    queue.append(root)
    while len(queue) > 0:
        root = queue.pop(0)
        result.append(root.value)
        if root.left is not None:
            queue.append(root.left)
        if root.right is not None:
            queue.append(root.right)

    return result


# print(traverseTree(t))


"""
Given a binary tree of integers, return all the paths from the tree's root to its leaves as an array of strings. The strings should have the following format:
"root->node1->node2->...->noden", representing the path from root to noden, where root is the value stored in the root and node1,node2,...,noden are the values stored in the 1st, 2nd,..., and nth nodes in the path respectively (noden representing the leaf).

Example

For

t = {
    "value": 5,
    "left": {
        "value": 2,
        "left": {
            "value": 10,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": -3,
        "left": null,
        "right": null
    }
}
the output should be
treePaths(t) = ["5->2->10", "5->2->4", "5->-3"].

The given tree looks like this:

    5
   / \
  2  -3
 / \
10  4
"""


#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def treePaths(t):
    if t is None:
        return []
    result, stack = [], [(t, "")]
    while stack:
        root, el = stack.pop()
        if root.left is None and root.right is None:
            result.append(el + str(root.value))
        if root.right:
            stack.append((root.right, el + str(root.value) + "->"))
        if root.left:
            stack.append((root.left, el + str(root.value) + "->"))
    return result


"""
Warm up
"""

"""
Challenge
Objective 2
* Represent a graph as an adjacency list and an adjacency matrix and compare 
    and contrast the respective  representations
- Using the graph shown in the picture above, write python code to represent 
  the graph in an adjacency list.
- Using the same graph you used for the first exercise, write python code to 
  represent the graph in an adjacency matrix.
Objective 3
*  Implement user-defined Vertex and Graph classes that allow basic operations
- Load the Vertex class and Graph class into an interactive Python environment and use the classes to create an instance of the graph shown below.
"""


# 1
class Graph:
    def __init__(self):
        self.vertices = {
            "A": {"B": 1},
            "B": {"C": 3, "D": 2, "E": 1},
            "C": {"E": 4},
            "D": {"E": 2},
            "E": {"F": 3},
            "F": {},
            "G": {"D": 1},
        }


# 2
class Graph:
    def __init__(self):
        self.edges = [
            [0, 1, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 1, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
        ]


# 3


class Vertex:
    def __init__(self, value):
        self.value = value
        self.connections = {}

    def __str__(self):
        return (
            str(self.value)
            + " connections: "
            + str([x.value for x in self.connections])
        )

    def add_connection(self, vert, weight=0):
        self.connections[vert] = weight

    def get_connections(self):
        return self.connections.keys()

    def get_value(self):
        return self.value

    def get_weight(self, vert):
        return self.connections[vert]


class Graph:
    def __init__(self):
        self.vertices = {}
        self.count = 0

    def __contains__(self, vert):
        return vert in self.vertices

    def __iter__(self):
        return iter(self.vertices.values())

    def add_vertex(self, value):
        self.count += 1
        new_vert = Vertex(value)
        self.vertices[value] = new_vert
        return new_vert

    def add_edge(self, v1, v2, weight=0):
        if v1 not in self.vertices:
            self.add_vertex(v1)
        if v2 not in self.vertices:
            self.add_vertex(v2)
        self.vertices[v1].add_connection(self.vertices[v2], weight)

    def get_vertices(self):
        return self.vertices.keys()


g_verts = ["A", "B", "C", "D", "E"]

g = Graph()
for v in g_verts:
    g.add_vertex(g)

g.add_edge("A", "B", 1)
g.add_edge("B", "C", 3)
g.add_edge("B", "D", 2)
g.add_edge("E", "D", 1)

# for v in g:
#     for w in v.get_connections():
#         print("( %s, %s )" % (v.get_value(), w.get_value()))


"""
Guided Project for Graphs I
"""

"""
*** Demo 1 ***
--------------
You are given an undirected graph with its maximum degree (the degree of a node
is the number of edges connected to the node).
You need to write a function that can take an undirected graph as its argument
and color the graph legally (a legal graph coloring is when no adjacent nodes
have the same color).
The number of colors necessary to complete a legal coloring is always one more
than the graph's maximum degree.
*Note: We can color a graph in linear time and space. Also, make sure that your
solution can handle a loop in a reasonable way.*
"""


# Definition for a graph node.
class GraphNode:
    def __init__(self, label):
        self.label = label
        self.neighbors = set()
        self.color = None


def color_graph(graph, colors):
    # make a graph to pass in
    # try to get edges count

    # edges plus 1 is colors

    pass


"""
*** Demo 2 ***
--------------
You are given a 2d grid of `"1"`s and `"0"`s that represents a "map". The
`"1"`s represent land and the `"0"s` represent water.
You need to write a function that, given a "map" as an argument, counts the
number of islands. Islands are defined as adjacent pieces of land that are
connected horizontally or vertically. You can also assume that the edges of the
map are surrounded by water.
Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
"""

grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
]


def numIslands(grid):
    pass


# print(numIslands(grid))

"""
*** Code signal ***
-------------------
You are given a directed acyclic graph (DAG) that contains N nodes.

Write a function that can find all the possible paths from node 0 to node N - 1. You can return the path in any order.

graph[a] is a list of all nodes b for which the edge a -> b exists.

Example:
Graph illustration

Input: graph = [[1, 2],[3],[3],[4],[]]
Output: [[0,1,3,4], [0,2,3,4]]
Note: although you can print the different paths in any order, you should keep the order of nodes within one path in order.
"""

# graph = [[1, 2],
#          [3],
#          [3],
#          []]


graph = [[1, 2], [3], [3], [4], []]


def csFindAllPathsFromAToB(graph):
    class Graph:
        def __init__(self):
            self.verts = {}

        def add_vertex(self, vert):
            self.verts[vert] = []

        def add_edge(self, v_from, v_to):
            self.verts[v_from].append(v_to)

        def is_connected(self, v_from, v_to):
            if v_from in self.verts and v_to in self.verts:
                return v_to in self.verts[v_from]

        def findPathsHelper(self, s, t, visited, path):
            # print('res', results)
            # print('s', s, 't', t)
            # mark the current node visited
            visited[s] = True
            # add the current node to the path
            path.append(s)
            # print('append path', path)
            # if current is the target then add the path to the results array
            if s == t:
                # append a new copy of the path to the result so changing the
                # path does not change the copy in the reuslts
                # print('if check', 's', s, 't', t)
                results.append(list(path))
                # print('append res', results)
            else:
                # if current is not the target recur for all neighbors
                for i in self.verts[s]:
                    if not visited[i]:
                        self.findPathsHelper(i, t, visited, path)

            # pop current node from path and mark it as unvisited
            path.pop()
            # print('path after pop', path)
            visited[s] = False

        def findAllPaths(self, s, t):

            # mark all the nodes as not visited
            visited = [False] * (len(self.verts))

            # create an array to hold the paths
            path = []

            # call the helper function to find all the paths
            self.findPathsHelper(s, t, visited, path)

    # create the graph from the matrices
    g = Graph()
    for i in range(len(graph)):
        g.add_vertex(i)
        for v in graph[i]:
            g.add_edge(i, v)
    # printing graph to make sure it is working properly
    # print(g.verts)

    # set the start node to the first node
    # set the target node to the last node
    start = list(g.verts.keys())[0]
    target = list(g.verts.keys())[len(list(g.verts.keys())) - 1]
    # create an array to hold the found paths
    results = []
    g.findAllPaths(start, target)

    return results


# print(csFindAllPathsFromAToB(graph))


"""
Graphs II warmup
"""

"""
Objective 1
On your own, complete the following tasks:

Please spend a few minutes researching to find a unique use-case of a breadth-first-search that we did not mention in the list above.

Using the graph represented below, draw a picture of the graph and label each of the verts to show the correct vertex visitation order for a breadth-first-search starting with vertex "I".

class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B", "C", "D"},
                            "B": {},
                            "C": {"E", "F"},
                            "D": {"G"},
                            "E": {"G"},
                            "F": {"J"},
                            "G": {},
                            "H": {"C", "J", "K"},
                            "I": {"D", "E", "H"},
                            "J": {"L"},
                            "K": {"C"},
                            "L": {"M"},
                            "M": {},
                            "N": {"H", "K", "M"}
                        }
Besides marking verts with colors as in the pseudo-code example above, how else could you track the verts we have already visited?
"""

"""
Objective 2
On your own, complete the following tasks:

Please spend a few minutes researching to find a unique use-case of a depth-first search that we did not mention in the list above.

Using the graph represented below, draw a picture of the graph and label each of the verts to show the correct vertex visitation order for a depth-first-search starting with vertex "I".

class Graph:
    def __init__(self):
        self.vertices = {
                            "A": {"B", "C", "D"},
                            "B": {},
                            "C": {"E", "F"},
                            "D": {"G"},
                            "E": {"G"},
                            "F": {"J"},
                            "G": {},
                            "H": {"C", "J", "K"},
                            "I": {"D", "E", "H"},
                            "J": {"L"},
                            "K": {"C"},
                            "L": {"M"},
                            "M": {},
                            "N": {"H", "K", "M"}
                        }
"""

"""
Objective 3
What is time complexity in Big O notation of a breadth-first search on a graph with V vertices and E edges?
Which method will find the shortest path between a starting point and any other reachable node? A breadth-first search or a depth-first search?
"""

"""
Objective 4
Does a depth-first search reliably find the shortest path?
If you didn't want to use recursion, what data structure could you use to write an iterative depth-first search?
"""

"""
Guided
"""

"""
Demo 1
------
An `image` is represented by a 2-D array of integers, each integer representing
the pixel value of the image (from 0 to 65535).
Given a coordinate `(sr, sc)` representing the starting pixel (row and column)
of the flood fill, and a pixel value `newColor`, "flood fill" the image.
To perform a "flood fill", consider the starting pixel, plus any pixels
connected 4-directionally to the starting pixel of the same color as the
starting pixel, plus any pixels connected 4-directionally to those pixels (also
with the same color as the starting pixel), and so on. Replace the color of all
of the aforementioned pixels with the newColor.
At the end, return the modified image.
Example 1:
```plaintext
Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels
connected by a path of the same color as the starting pixel are colored with
the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally
connected to the starting pixel.
```
Notes:
- The length of `image` and `image[0]` will be in the range `[1, 50]`.
- The given starting pixel will satisfy `0 <= sr < image.length` and
`0 <= sc < image[0].length`.
- The value of each color in `image[i][j]` and `newColor` will be an integer in
`[0, 65535]`.
"""


def floodfill(image, row, col, color):
    if image[row][col] != " ":
        return

    image[row][col] = color

    floodfill(row, col + 1, color)
    floodfill(row, col - 1, color)
    floodfill(row + 1, col, color)
    floodfill(row - 1, col, color)


"""
Demo 2
------
In a town, there are `N` people labelled from `1` to `N`.  There is a rumor
that one of these people is secretly the town judge.
If the town judge exists, then:
1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.
You are given `trust`, an array of pairs `trust[i] = [a, b]` representing that
the person labelled a trusts the person labelled `b`.
If the town judge exists and can be identified, return the label of the town
judge.  Otherwise, return `-1`.
Example 1:
```plaintext
Input: N = 2, trust = [[1,2]]
Output: 2
```
Example 2:
```plaintext
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
```
Example 3:
```plaintext
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```
Example 4:
```plaintext
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
```
Example 5:
```plaintext
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
```
Constraints:
- `1 <= N <= 1000`
- `0 <= trust.length <= 10^4`
- `trust[i].length == 2`
- `trust[i]` are all different
- `trust[i][0] != trust[i][1]`
- `1 <= trust[i][0], trust[i][1] <= N`
"""


def find_judge(N, trust):
    """
    Inputs:
    N -> int
    trust -> List[List[int]]
    Output:
    int
    """
    # Your code here


"""
Codesignal
"""

"""
*** csFriendCircles ***
-----------------------
There are N students in a baking class together. Some of them are friends, while some are not friends. The students' friendship can be considered transitive. This means that if Ami is a direct friend of Bill, and Bill is a direct friend of Casey, Ami is an indirect friend of Casey. A friend circle is a group of students who are either direct or indirect friends.

Given a N*N matrix M representing the friend relationships between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not.

You need to write a function that can output the total number of friend circles among all the students.

Example 1:

Input: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation: The 0th and 1st students are direct friends, so they are in a friend circle. 
The 2nd student himself is in a friend circle. So return 2.
Example 2:

Input: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation: The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
"""

friendships = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

friendships = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]


def csFriendCircles(friendships):
    # use dfs to ensure visiting every node
    class Graph:
        def __init__(self):
            self.verts = {}

        def add_vertex(self, vert):
            self.verts[vert] = []

        def add_edge(self, v_from, v_to):
            self.verts[v_from].append(v_to)

        def is_connected(self, v_from, v_to):
            if v_from in self.verts and v_to in self.verts:
                return v_to in self.verts[v_from]

    # create the graph from the matrices
    g = Graph()
    for i in range(len(friendships)):
        g.add_vertex(i)
        for v in range(len(friendships[i])):
            if friendships[i][v] != 0 and i != v:
                print(i, v)
                g.add_edge(i, v)
    # printing graph to make sure it is working properly
    print("g", g.verts)

    def findConnectedFriends(graph):
        visited = []
        connected = []
        for node in graph.verts:
            if node not in visited:
                path = []
                visited, path = dfs(graph, node, visited, path)
                connected.append(path)
        return connected

    def dfs(graph, start, visited, path):
        if start in visited:
            return visited, path
        visited.append(start)
        path.append(start)
        print("group", graph.verts[start])
        for node in graph.verts[start]:
            print(node)
            visited, path = dfs(graph, node, visited, path)

        return visited, path

    return len(findConnectedFriends(g))


# print(csFriendCircles(friendships))


"""
Given two words ( start_word and end_word), and a dictionary's word list, 
return the shortest transformation sequence from begin_word to end_word, 
such that:

only one letter can be changed at a time.

each transformed word must exist in the word list.  Note that start_word is 
not a transformed word.

Note:

Return None if there is no such transformation sequence.
All words contain only lowercase alphabetic chars.
You may assume no duplicates in the word list.
You may assume start-word and end_word are non-empty and are not the same.

Sample:
start_word = 'hit'
end_word = 'cog'
return: ['hit', 'hot', 'cot', 'cog'] 
"""
words = set()
with open("words.txt") as f:
    for w in f:
        w = w.strip().lower()
        words.add(w)


# create function to get all the neighbors of a word ( only 1 letter diff)
def get_neighbors(word):
    neighbors = []
    for w in words:
        if len(w) == len(word):
            diff = 0
            for i in range(len(w)):
                if w[i] != word[i]:
                    diff += 1
                if diff > 1:
                    break
            if diff == 1:
                neighbors.append(w)
    return neighbors


# print(get_neighbors('hit'))


# BFS to solve this (not sure why takes much longer than guided)
def bfs(start_word, end_word):
    print("s, e", start_word, end_word)
    visited = set()
    q = [[start_word]]

    while q:
        path = q.pop(0)

        v = path[-1]
        if v not in visited:
            visited.add(v)
            if v == end_word:
                return path
            # only need get_neighbors and not the entire graph
            for neighbor in get_neighbors(v):
                path_copy = path + [neighbor]
                q.append(path_copy)


# print(bfs('hit', 'cog'))

"""
*** Sprint ***
--------------
"""
"""
csBSTRangeSum
-------------
You are given the root node of a binary search tree (BST).

You need to write a function that returns the sum of values of all the nodes with a value between lower and upper (inclusive).

The BST is guaranteed to have unique values.

Example 1:

Input:
root = [10, 5, 15, 3, 7, null, 18]
lower = 7
upper = 15

         10
         / \
        5  15
       / \    \
      3   7    18

Output:
32
Example 2:

Input:
root = [10,5,15,3,7,13,18,1,null,6]
lower = 6
upper = 10

           10
          /  \
       5       15
     / \     /   \ 
    3   7  13   18
   /   /
  1   6

Output:
23
"""

root = [10, 5, 15, 3, 7, None, 18]
lower = 7
upper = 15


#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None

#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def csBSTRangeSum(root, lower, upper):
    # variable to hold running sum of target numbers
    range = []
    # variable to hold the current node
    cur = root

    # search the tree to find all numbers within the range of lower and upper
    # dfs
    def helper(root):
        if root is None:
            return
        helper(root.left)
        if root.value <= upper and root.value >= lower:
            print("value", root.value)
            range.append(root.value)
        helper(root.right)

    def dfs(root):
        helper(root)

    dfs(root)
    sum = 0
    for num in range:
        sum += num
    return sum


print(csBSTRangeSum(root, lower, upper))

"""
csBinaryTreeInvert
------------------
Given a binary tree, write a function that inverts the tree.

Example:

Input:
     6
   /   \
  4     8
 / \   / \
2   5 7   9

Output:
     6
   /   \
  8     4
 / \   / \
9   7 5   2
"""


#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def csBinaryTreeInvert(root):
    # use a bft to visit all levels and switch the positions of left and
    # right children for each node at each level
    if root is None:
        return []

    result = []
    queue = []
    queue.append(root)

    while len(queue) != 0:
        node = queue.pop(0)

        left = node.left
        right = node.right
        node.left = right
        node.right = left

        if node.left is not None:
            queue.append(node.right)

        if node.right is not None:
            queue.append(node.left)

    return result


"""
Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

You need to return the number of important reverse pairs in the given array.

Example1:

Input: [1,3,2,3,1]
Output: 2
Example2:

Input: [2,4,3,5,1]
Output: 3
Note:
The length of the given array will not exceed 50,000.
All the numbers in the input array are in the range of 32-bit integer.
"""


def reversePairs(nums):
    # EDGE CASE if the array length is less than 2 return 0
    if len(nums) < 2:
        return 0
    # init i to 0 and j to 1
    i = 0
    j = 1
    # init count for reverse pairs found
    count = 0
    # iterate the array
    while i <= len(nums) - 1:
        # check if i is less than j AND nums[i] is greater than 2 * nums[j]
        if i < j and nums[i] > 2 * nums[j]:
            # if so increment the count
            count += 1
        # when j reaches the end
        if j == len(nums) - 1:
            # increment i
            i += 1
            # reset j
            j = 0
        else:
            # else just increment j
            j += 1
    # return count of pairs found
    return count


nums = [1, 3, 2, 3, 1]
print(f"reversePairs(nums): {reversePairs(nums)}")

"""
958. Check Completeness of a Binary Tree
Medium

1072

14

Add to List

Share
Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 

Example 1:


Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
Example 2:


Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
1 <= Node.val <= 1000
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        # we want to check each node for a right child
        # if a right child exists and no left child exists we can return false
        # if the left subtree is missing one or both children where the right
        # subtree at that level has children return false

        # init case where a node has no right child
        no_right_child = False
        # init case where a node has no children
        no_children = False
        # init queue for unexamined nodes
        queue = []
        # add root to queue
        queue.append(root)
        # breadth first search
        while len(queue) != 0:
            # current node to examine is taken from front of queue
            cur = queue.pop(0)
            # if we have already examined a node with no children or a left
            # child with no right child
            if no_right_child == True or no_children == True:
                # if current node has no left child return False
                if cur.left is not None:
                    return False
            # if the current node has no right child and has a left child
            if cur.right is None and cur.left is not None:
                # mark no right child as true
                no_right_child = True
                # add left child to queue if it exists
                if cur.left is not None:
                    queue.append(cur.left)
                # add right child to queue if it exists
                if cur.right is not None:
                    queue.append(cur.right)
            # if current node has no children
            if cur.right is None and cur.left is None:
                # mark no children as true
                no_children = True
                # add left child to queue if it exists
                if cur.left is not None:
                    queue.append(cur.left)
                # add right child to queue if it exists
                if cur.right is not None:
                    queue.append(cur.right)
            # if current node has a right child but no left child
            if cur.right is not None and cur.left is None:
                # return false
                return False
            # else append children to the queue if they exist
            else:
                if cur.left is not None:
                    queue.append(cur.left)
                if cur.right is not None:
                    queue.append(cur.right)
        # if we come out of the while loop never reaching false we can return
        # true
        return True

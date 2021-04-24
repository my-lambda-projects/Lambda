import sys
sys.path.append('../queue_and_stack')
from dll_queue import Queue
from dll_stack import Stack

# A traversal is completed when every node has been explored.
# A search is completed when the search target is found.

# DEPTH & BREADTH FIRST SEARCHES
# Depth First:    Algorithm explores as far as possible along each branch before backtracking
    # for each node, process node, process left subtree, then right subtree, then add, copy, etc.
    # ---------------------------
    # one that continues traveling forward on each branch until a dead end is reached
    # search then retreats to first unexplored path and follows next unexplored path until that 
        # one, too, reaches a dead end
    # continues until all nodes have been visited
    # recursive or iterative --> makes use of stack

# Breadth First:  Algorithm explores all neighbor nodes at present depth prior to moving on to next level
    # can be resolved iteratively (preferred) or recursively
    # useful when what you're seeking is closer to root node
    # process one layer/level at a time
    # process node, add left child to queue, then right child
    # dequeue them off queue and call function on that node
    # repeat until none left
    # ---------------------------
    # opposite of depth-first
    # explore layer by layer, moving outward from starting point
    # at each node, we discover to list of nodes to explore
    # then explore nodes in order we encounter them
        # use queue for this
    # will jump around a bit because next node we visit might not be connected to current

# time complexity:   O(Vertices + Edges) (Worst)
# space complexity:  O(Vertices) (Worst)

# IN-ORDER, PRE-ORDER, AND POST-ORDER TRAVERSALS
    # for depth-first traversals only
# In-Order:  recursively call method on left tree, process node, call method on right tree
    # use for sorted list out of BST
# Pre-Order:  process node, recursively call method on left tree, call method on right tree
    # use for deep copy of tree
# Post-Order: recursively call method on left tree, call method on right tree, process node 
    # use for deleting tree

# time complexity:     O(n) 
# space complexity:  O(1)

'''
DEPTH-FIRST SEARCH RECURSIVE PSEUDOCODE
procedure DFS(G, v) is
    label v as discovered
    for all directed edges from v to w that are in G.adjacentEdges(v) do
        if vertex w is not labeled as discovered then
            recursively call DFS(G, w)
'''
'''
DEPTH-FIRST SEARCH ITERATIVE PSEUDOCODE
procedure DFS_iterative(G, v) is
    let S be a stack
    S.push(v)
    while S is not empty do
        v = S.pop()
        if v is not labeled as discovered then
            label v as discovered
            for all edges from v to w in G.adjacentEdges(v) do 
                S.push(w)
'''

'''
BREADTH-FIRST SEARCH PSEUDOCODE
1  procedure BFS(G, root) is
2      let Q be a queue
3      label root as discovered
4      Q.enqueue(root)
5      while Q is not empty do
6          v := Q.dequeue()
7          if v is the goal then
8              return v
9          for all edges from v to w in G.adjacentEdges(v) do
10             if w is not labeled as discovered then
11                 label w as discovered
12                 w.parent := v
13                 Q.enqueue(w)
'''


class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    # Insert the given value into the tree
    def insert(self, value):
        
        # if value is less than current value, go left
        if value < self.value:
            
            if not self.left:
                self.left = BinarySearchTree(value)
            else:
                self.left.insert(value)
        # if value is greater than/equal to current value, go right
        elif value >= self.value:

            if not self.right:
                self.right = BinarySearchTree(value)
            else:
                self.right.insert(value)


    # Return True if the tree contains the value
    # False if it does not
    def contains(self, target):
        # if node value is target, return true
        if self.value == target:
            return True
        # if binary trees are empty, return false 
        elif self.left is None and self.right is None:
            return False
        # if left exists and target less than current node value, check left
        elif self.left and target < self.value:
            return self.left.contains(target)
        # if right exists and target greater than current node value, check right
        elif target > self.value and self.right:
            return self.right.contains(target)


    # Return the maximum value found in the tree
    def get_max(self):
        # if right exists, check right 
        if self.right:
            return self.right.get_max()
        # else it's in left and return node value
        else:
            return self.value


    # Call the function `cb` on the value of each node
    # You may use a recursive or iterative approach
    def for_each(self, cb):
        # callback function on node value  
        cb(self.value)

        # if left tree exists, run callback function on each node
        if self.left:
            self.left.for_each(cb)

        # if right tree exists, run callback function on each node
        if self.right:
            self.right.for_each(cb)


    # Print all the values in order from low to high
    # Hint:  Use a recursive, depth first traversal
    # left, node, right
    def in_order_print(self, node):
        # if left tree exists, recursively run this function to print its node values
        if self.left:
            self.left.in_order_print(node)
        print(self.value)
        # if right tree exists, recursively run this function to print its node values
        if self.right:
            self.right.in_order_print(node)


    # Print the value of every node, starting with the given node 
    # iterative breadth first traversal
    def bft_print(self, node):
        # get current queue 
        current_queue = Queue()
        # add node to current queue
        current_queue.enqueue(node)
        # if current queue is not empty
        while current_queue.len() > 0:
            # set current as next queue
            next_queue = Queue()
            while current_queue.len() > 0:
                # dequeue current node and save it 
                current_node = current_queue.dequeue()
                # if left tree exists on current node, add to left 
                if current_node.left:
                    next_queue.enqueue(current_node.left)
                # if right tree exists on current node, add to right
                if current_node.right:
                    next_queue.enqueue(current_node.right)
                # print current node value
                print(current_node.value)
            # set next queue as current queue
            current_queue = next_queue


    # Print the value of every node, starting with the given node 
    # iterative depth first traversal
    def dft_print(self, node):
        # set stack as current stack 
        current_stack = Stack()
        # add node to current stack 
        current_stack.push(node)
        # while current stack is NOT empty
        while current_stack.len() > 0:
            # remove entry from stack and save in current_node
            current_node = current_stack.pop()
            # print value of current_node
            print(current_node.value)
            # if current node's left tree exists, add to it
            if current_node.left:
                current_stack.push(current_node.left)
            # if current node's right tree exists, add to it
            if current_node.right:
                current_stack.push(current_node.right)


    # Print Pre-order recursive DFT
    # node, left, right
    def pre_order_dft(self, node):
        # print node value 
        print(node.value)
        # if left tree of node exists, run again on it
        if node.left:
            self.pre_order_dft(node.left)
        # if right tree of node exists, run again on it
        if node.right:
            self.pre_order_dft(node.right)


    # Print Post-order recursive DFT
    # left, right, node
    def post_order_dft(self, node):
        # if left tree of node exists, run again on it
        if node.left:
            self.post_order_dft(node.left)
        # if right tree of node exists, run again on it
        if node.right:
            self.post_order_dft(node.right)
        # print node value
        print(node.value)

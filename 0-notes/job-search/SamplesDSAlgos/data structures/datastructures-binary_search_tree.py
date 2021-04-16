import sys
sys.path.append('../queue_and_stack')
from dll_queue import Queue
from dll_stack import Stack

# BINARY SEARCH TREE
# Binary search trees are a data structure that enforce an ordering over the data they store. 
# That ordering in turn makes it a lot more efficient at searching for a particular piece of 
    # data in the tree. 
# extremely efficient data structure with searching
# consists entirely of nodes holding values, with each node referencing other nodes
# in trees in general, each node is not constrained to just referencing a single other node
# tree data structures where each node can reference 0-2 other nodes, left & right
# maintain invariant/rule that if a node has a left child node it points to, that left node's 
    # value is strictly less than parent node value and, respectively, right child is greater
# trees can be thought of as linked lists, but without constraint that each node only points to 
    # one other node; can point to multiple nodes in tree
# linked lists themselves count as trees
# a common trees classification is to talk about them in terms of the max number of nodes that
    # a single node can point to
# more efficient than array or linked list
# inefficient to insert into a BST
# performance of BST depends quite a lot on whether tree is balanced or not
# useful structure for middle ground between linked lists and arraylists
# bst makes it very easy and simple to add & find new elements
    # just change pointer to add new elements like linked lists
# performs well if you stay away from edge cases

# RELATED TERMS
    # root:      topmost node in tree
    # child:     node directly connected to another node when moving away from root node
    # parent:    node directly connected to another node when moving towards root node
    # siblings:  nodes sharing same parent
    # leaf:      node with no children
    
# time complexity:     Avg      |   Worst
    # Access:       O(log(n))   |   O(n)
    # Search:       O(log(n))   |   O(n)
    # Insertion:    O(log(n))   |   O(n)
    # Deletion:     O(log(n))   |   O(n)

# space complexity:  O(n)

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
    # recursive, depth first traversal
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
    def post_order_dft(self, node):
        # if left tree of node exists, run again on it
        if node.left:
            self.post_order_dft(node.left)
        # if right tree of node exists, run again on it
        if node.right:
            self.post_order_dft(node.right)
        # print node value
        print(node.value)

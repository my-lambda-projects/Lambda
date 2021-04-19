# 4.11 Random Node

# You are implementing a binary search tree class from scratch which, in addition to 
    # insert, find, and delete, has a method, getRandomNode(), which returns a random
    # node from the tree.
# All nodes should be equally likely to be chosen.
# Design and implement an algorithm for getRandomNode, and explain how you would implement
    # the rest of the methods.
from random import *

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.length = 0

    def getRandomNumber(self):
        return random(0, self.length)

    def getRandomNode(self, root):
        possible_nodes = []
        if root:
            self.length += 1
            possible_nodes.append(root)
            getRandomNode(root.left)
            getRandomNode(root.right)
        length = len(possible_nodes)
        random = self.getRandomNumber()
        for x in range(0, length):
            if x == random:
                return possible_nodes[x]

        

    
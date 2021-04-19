
import random

'''
Can we search in a sorted linked list in better than O(n) time?
    The worst case search time for a sorted linked list is O(n) as we 
        can only linearly traverse the list and cannot skip nodes 
        while searching. 
    For a Balanced Binary Search Tree, we skip almost half of the nodes 
        after one comparison with root. 
    For a sorted array, we have random access and we can apply binary 
    search on arrays.

Can we augment sorted linked lists to make the search faster? 
    The answer is Skip List. 
    The idea is simple, we create multiple layers so that we can 
        skip some nodes. 
    See the following example list with 16 nodes and two layers. 
    The upper layer works as an “express lane” which connects only 
        main outer stations.
    The lower layer works as a “normal lane” which connects every station. 
    Suppose we want to search for 50, we start from first node of “express 
        lane” and keep moving on “express lane” till we find a node whose 
        next is greater than 50.
    Once we find such a node (30 is the node in following example) on 
        “express lane”, we move to “normal lane” using pointer from this 
        node, and linearly search for 50 on “normal lane”. 
    In following example, we start from 30 on “normal lane” and with linear 
        search, we find 50.

What is the time complexity with two layers? 
    The worst case time complexity is number of nodes on “express lane” 
        plus number of nodes in a segment (A segment is number of “normal 
        lane” nodes between two “express lane” nodes) of “normal lane”. 
    So if we have n nodes on “normal lane”, √n (square root of n) nodes on 
        “express lane” and we equally divide the “normal lane”, then there 
        will be √n nodes in every segment of “normal lane” . 
    √n is actually optimal division with two layers. With this arrangement, 
        the number of nodes traversed for a search will be O(√n). 
    Therefore, with O(√n) extra space, we are able to reduce the time 
        complexity to O(√n).


Can we do better?
    The time complexity of skip lists can be reduced further by adding more layers. 
    In fact, the time complexity of search, insert and delete can become O(Logn) in 
        average case with O(n) extra space. 

Deciding nodes level

    Each element in the list is represented by a node, the level of the node is 
        chosen randomly while insertion in the list. 
    Level does not depend on the number of elements in the node. 
    The level for node is decided by the following algorithm –

        randomLevel()
        lvl := 1
        //random() that returns a random value in [0...1)
        while random() < p and lvl < MaxLevel do
        lvl := lvl + 1
        return lvl

    Max level is the upper bound on number of levels in the skip list. 
    It can be determined as – L(N) = log_{p/2}{N}. 
    Above algorithm assure that random level will never be greater than MaxLevel. 
    Here p is the fraction of the nodes with level i pointers also having level i+1 pointers 
        and N is the number of nodes in the list.

Node Structure

Each node carries a key and a forward array carrying pointers to nodes 
    of a different level. 
A level i node carries i forward pointers indexed through 0 to i.

Skip Node

We will start from highest level in the list and compare key of next node 
    of the current node with the key to be inserted. 
Basic idea is if: 
    key of next node is less than key to be inserted, then we keep on moving 
        forward on the same level
    key of next node is greater than the key to be inserted, then we store 
        the pointer to current node i at update[i], move one level down, 
        and continue our search.
At the level 0, we will definitely find a position to insert given key.
'''

# SKIP LIST
    # create multiple layers in a sorted list so we can skip some nodes
    # has express lane, use express lane to find 'bucket' or 'chunk which 
        # your result is found in

# time complexity:     Avg      |   Worst
    # Access:       O(log(n))   |   O(n)
    # Search:       O(log(n))   |   O(n)
    # Insertion:    O(log(n))   |   O(n)
    # Deletion:     O(log(n))   |   O(n)

# space complexity:  O(n log(n))


class Node(object):
    def __init__(self, key, level):
        self.key = key

        # list to hold references to node of different level
        self.forward = [None]*(level+1)


class SkipList(object):
    def __init__(self, max_level, P):
        # Maximum level for this skip list
        self.max_level = max_level

        # P is the fraction of the nodes with level
            # i references also having level i+1 references
        self.P = P

        # create header node and initialize key to -1
        self.header = self.create_node(self.max_level, -1)

        # current level of skip list
        self.level = 0

    # create new node
    def create_node(self, lvl, key):
        n = Node(key, lvl)
        return n

    # create random level for node
    def random_level(self):
        current_level = 0
        while random.random() < self.P and current_level < self.max_level:
            current_level += 1
        return current_level

    # insert given key in skip list
    def insert_element(self, key):
        # create update array and initialize it
        update = [None]*(self.max_level+1)
        current = self.header

        # start from highest level of skip list
        for i in range(self.level, -1, -1):
            # move the current reference forward while key is 
                # greater than key of node next to current
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            # Otherwise inserted current in update, move 
                # one level down, and continue search
            update[i] = current
        # reached level 0 and forward reference to right, which is 
            # desired position to insert key. 
        current = current.forward[0]

        # If current is NULL, that means we have reached to end of the level 
            # or current's key is not equal to key to insert.
        # That means we have to insert node between update[0] and current node.
        if current == None or current.key != key:
            # Generate a random level for node
            r_level = self.random_level()

            # If random level is greater than list's current level (node with highest 
                # level inserted in list so far), initialize update value with reference 
                # to header for further use 
            if r_level > self.level:
                for i in range(self.level+1, r_level+1):
                    update[i] = self.header
                self.level = r_level

            # create new node with random level generated
            node_random_level = self.create_node(r_level, key)

            # insert node by rearranging references
            for i in range(r_level+1):
                node_random_level.forward[i] = update[i].forward[i]
                update[i].forward[i] = node_random_level

            print("Successfully inserted key {}".format(key))

    # display skip list level wise
    def display_list(self):
        print("\n*****Skip List******")
        head = self.header
        for lvl in range(self.level+1):
            print("Level {}: ".format(lvl), end=" ")
            node = head.forward[lvl]
            while(node != None):
                print(node.key, end=" ")
                node = node.forward[lvl]
            print("")

def main():
    lst = SkipList(3, 0.5)
    lst.insert_element(3)
    lst.insert_element(6)
    lst.insert_element(7)
    lst.insert_element(9)
    lst.insert_element(12)
    lst.insert_element(19)
    lst.insert_element(17)
    lst.insert_element(26)
    lst.insert_element(21)
    lst.insert_element(25)
    lst.display_list()


main()

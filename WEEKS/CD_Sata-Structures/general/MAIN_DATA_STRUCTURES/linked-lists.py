"""
First the Node class needs to be created because every item in a linked list
is a node item containing the data and the pointer to the node it links to
"""


class Node:
    def __init__(self, data):
        self.data = data
        self.nextNode = None


"""
Next the linked list can be created and initialized with the head as none 
because it doesn't exist yet and the number of nodes to 0 because its empty
"""


class LinkedList:
    def __init__(self):
        self.head = None
        self.numOfNodes = 0

        """
        Functions for the LinkedList class:
        """

    # function to insert a new node at the beginning of the list O(1)
    def insert_start(self, data):

        # first increase the number of nodes by 1
        self.numOfNodes = self.numOfNodes + 1
        # then insert the data into the new node
        new_node = Node(data)

        # check to see if there is a head
        if not self.head:
            # if not create it with the new node
            self.head = new_node
        # if there is a head
        else:
            # set the pointer of the new node to the old head
            new_node.nextNode = self.head
            # set the new node as the new head of the list
            self.head = new_node

    # function to insert a new node at the end of the list O(N)
    def insert_end(self, data):

        # first increase the number of nodes by 1
        self.numOfNodes = self.numOfNodes + 1
        # then insert the data into the new node
        new_node = Node(data)

        # get a reference to the head node to begin iteration
        actual_node = self.head

        # iterate the node looking for the node that points to Null
        while actual_node.nextNode is not None:
            # if not the last node pointing to Null
            # change active_node to the next node its pointing to
            actual_node = actual_node.nextNode

        # when we find the node that is pointing to Null
        # change its pointer to point to the new node
        actual_node.nextNode = new_node

    # function to get the size of the linked list O(1)
    def size_of_list(self):
        # return the number of nodes the list contains
        return self.numOfNodes

    # function to traverse the linked list and print all of its nodes data
    def traverse(self):

        # set the reference to the first node
        actual_node = self.head

        # iterate the list while the referenced node is not Null
        while actual_node is not None:
            # print out the actual_node data value
            print(actual_node.data)
            # move the reference to the next node in the list
            actual_node = actual_node.nextNode

    # function to remove a node from the list O(N)
    def remove(self, data):

        # if the list is empty return
        if self.head is None:
            return

        # set the reference to the first node
        actual_node = self.head
        # set the reference to the previous node which is none at first
        previous_node = None

        # iterate the list continuing while the actual_node doesn't contain
        # what we're looking for and isn't Null (empty list or end of list)
        while actual_node is not None and actual_node.data != data:
            # consider  the next node in the list
            # iterate the prev node to current
            previous_node = actual_node
            # iterate the actual node to the next
            actual_node = actual_node.nextNode

        # if we reach the end of the list and don't find a match return
        if actual_node is None:
            return

        # at this point we have found a match
        # first decrease the number of items in the list
        self.numOfNodes -= 1

        # after the while loop ( the node with the data was found)
        # if the previous node is Null then the head node is the one to remove
        if previous_node is None:
            # setting the new head to be the next node will remove the current
            # actual node
            self.head = actual_node.nextNode
        # if previous node is not Null
        else:
            # set the prev.nextNode to be the actual nextNode cutting out the
            # actual node we want to remove
            previous_node.nextNode = actual_node.nextNode


"""
use the functions just created
"""
# create a new LinkedList
linked_list = LinkedList()
# insert a few nodes at the beginning of the list O(1)
linked_list.insert_start(4)
linked_list.insert_start(3)
linked_list.insert_start(7)
# insert a node at the end of the list O(N)
linked_list.insert_end(10)
# remove a node from list O(N)
linked_list.remove(3)
# print the node values of the list O(N)
linked_list.traverse()
# print the size of the list
print(f"size: {linked_list.size_of_list()}")

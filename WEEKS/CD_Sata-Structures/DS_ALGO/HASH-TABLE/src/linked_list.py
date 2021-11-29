# 02 lets make a linked list class
# Node class
class Node:
    def __init__(self, value=None, next_node=None):
        self.value = value
        self.next = next_node


# linked list class
class LinkedList:
    # constructor
    def __init__(self):
        self.head = None

    # add to head
    def add_to_head(self, value):
        # create a new node with value
        new_node = Node(value, None)
        # check if there is a head
        if self.head:
            # set new nodes next to head
            new_node.next = self.head
        # set the head to the new node
        self.head = new_node

    # remove
    def remove(self, value):
        """
        Find and remove the node with the given value
        """
        # if there is no head
        if not self.head:
            # print an error
            print("Error: value not found")
        # otherwise if the heads value is equal to the value
        elif self.head.value == value:
            # remove the heads value
            self.head = self.head.next
        # otherwise
        else:
            # create a parent and set it to the head
            parent = self.head
            # set a ref to current node heads next
            current_node = self.head.next
            # loop while there is a current node
            while current_node:
                # check if the current nodes value is equal to the value
                if current_node.value == value:
                    # remove the value
                    parent.next = current_node.next
                    # return
                    return
                # increment current node
                current_node = current_node.next
            # print value not found
            print("Error: Value not found")

    # contains
    def contains(self, value):
        # if there is no head then it can not contain a value
        if not self.head:
            # return false
            return False
        # set a current node to the head
        current_node = self.head
        # while there is a current node loop
        while current_node:
            # check if the current nodes value is equal to the value passed in
            if current_node.value == value:
                # return true
                return True
            # increment the current node to the current nodes next
            current_node = current_node.next
        # return false
        return False

    # print
    def print(self):
        # set the current node to the head
        current_node = self.head
        # create a linkedlist_string and set it to an empty string
        linked_list_string = ""
        # while there is a current node
        while current_node:
            # concat the current value on to the string
            linked_list_string += f"{current_node.value}"
            # increment the current node to the current nodes next
            current_node = current_node.next
            # concat "->" to the string
            linked_list_string += "->"
        # concat a "None" to the end of the string
        linked_list_string += "None"
        # print the string
        print(linked_list_string)


# test code
ll = LinkedList()
ll.print()
ll.add_to_head(1)
ll.add_to_head(2)
ll.add_to_head(3)
ll.print()
ll.remove(2)
ll.print()

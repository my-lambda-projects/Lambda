
"""
What is the difference between an array and a linked list?
    Arrays use memory differently.
    Arrays store and index elements contiguously.
    Each element of linked list is stored in a node.
        Each node has reference or pointer to next node.
    Linked lists describe lists of things in recursive fashion.
    Arrays describe lists of things in iterative fashion.
    LLs are easier to insert into & delete from middle of LL than array.
    LLs are not as cache friendly since caches are typically 
        optimized for contiguous memory accesses.
    LLs don't need to be allocated with a static amount of memory up front.
    You can keep adding elements to linked lists as much as you want; 
        can't with arrays.
        
What is the difference between singly and doubly linked lists?
    A singly linked list is a set of nodes where each node has two fields ‘data’ 
        and ‘link’. 
        The ‘data’ field stores actual piece of information and ‘link’ field is used 
            to point to next node. 
        Basically ‘link’ field is nothing but address only.
    A doubly linked list contains an extra pointer, typically called previous 
        pointer, together with next pointer and data which are there in singly 
        linked list.
"""
# SINGLY LINKED LIST
# made of bunch of nodes that point to next one in list
# every node has two properties: 
    # value of whatever is being stored
    # pointer to next node in list
# adding and removing is easy; change next pointer on previous node (O(n)))
    # similar to arrays
# commonly used for holding lists of data
    # certain cases when better than array

# time complexity:   Avg   | Worst
    # Access:       O(n)   |   O(n)
    # Search:       O(n)   |   O(n)
    # Insertion:    O(1)   |   O(1)
    # Deletion:     O(1)   |   O(1)

# space complexity:  O(n)

class Node:
    def __init__(self, value=None, next_node=None):
        # the value at this linked list node
        self.value = value
        # reference to the next node in the list
        self.next_node = next_node
    # return value of current node
    def get_value(self):
        return self.value
    
    # return next node
    def get_next(self):
        return self.next_node

    def set_next(self, new_next):
        # set this node's next_node reference to the passed in node
        self.next_node = new_next
​
class LinkedList:
    def __init__(self):
        # first node in the list 
        self.head = None
        # last node in the linked list 
        self.tail = None
    # O(1)
    def add_to_head(self, value):
        new_node = Node(value)
        if not self.head and not self.tail:
            self.head = new_node
            self.tail = new_node 
        else:
            new_node.set_next(self.head)
            self.head = new_node
    # we have access to the end of the list, so we can directly add new nodes to it 
    # O(1)
    def add_to_end(self, value):
        # regardless of if the list is empty or not, we need to wrap the value in a Node 
        new_node = Node(value)
        # what if the list is empty? 
        if not self.head and not self.tail:
            # set both head and tail to the new node 
            self.head = new_node
            self.tail = new_node
        # what if the list isn't empty?
        else:
            # set the current tail's next to the new node 
            self.tail.set_next(new_node)
            # set self.tail to the new node 
            self.tail = new_node
    # we already have access to the head of the linked list, so we can directly remove from it 
    # O(1)
    def remove_from_head(self):
        # what if the list is empty?
        if not self.head:
            return None
        # what if it isn't empty?
        else:
            # we want to return the value at the current head 
            value = self.head.get_value()
            # remove the value at the head 
            # update self.head 
            self.head = self.head.get_next()
            return value
    # iterate over our linked list and print out each value in it 
    def print_ll_elements(self):
        current = self.head
        while current is not None:
            print(current.value)
            current = current.get_next()
            
ll = LinkedList()
ll.add_to_head(3)
ll.add_to_head(5)
ll.add_to_head(9)
ll.add_to_head(11)
ll.print_ll_elements()
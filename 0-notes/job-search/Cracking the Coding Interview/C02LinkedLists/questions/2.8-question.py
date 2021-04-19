# 2.8 Loop Detection:

# Given a linked list which might contain a loop, implement an algorithm that returns the node at 
    # the beginning of the loop if one exists.

# INPUT:  A --> B --> C --> D --> E --> C
# OUTPUT:  C

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None

    def loop_detector(self):
        
        current_head = self.head
        unique_detector = []
        while current_head:
            if current_head.data not in unique_detector:
                unique_detector.append(current_head.data)
            else:
                return current_head.data
                
            current_head = self.head.next
# 2.2 Return Kth to Last:  

# Implement an algorithm to find the kth to last element of a singly linked list

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None
    
    def find_k_to_last(self, k):
        begin_pointer = self.head
        end_pointer = self.head

        for x in range(k):
            end_pointer = end_pointer.next
        
        if not end_pointer:
            return self.head.next 
        
        while end_pointer.next:
            begin_pointer = begin_pointer.next 
            end_pointer = end_pointer.next
        
        return end_pointer.data

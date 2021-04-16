# Intersection

# Given two singly linked lists, determine if the two lists intersect.
# Return the intersecting node.
# Note that the intersection is defined based on reference, not value.
# That is, if the kth node of the first linked list is the exact same node by reference 
    # as the jth node of the second linked list, then they are intersecting.

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None

def check_intersection(head1, head2):
    
    current_head1 = head1
    current_head2 = head2
    length1 = 0
    length2 = 0

    while current_head1:
        length1 = length1 + 1
        current_head1 = head1.next
        
    while current_head2:
        length2 = length2 + 1
        current_head2 = head2.next
    

    if length1 >= length2:
        longest_ll = length1
        current_head1 = head1
        current_head2 = head2
    else:
        longest_ll = length2
        current_head1 = head2
        current_head2 = head1

    while current_head1:
        if length1 == length2:
            while current_head2:
                if current_head1 == current_head2:
                    return current_head1  
        length1 = length1 - 1

    return None
    
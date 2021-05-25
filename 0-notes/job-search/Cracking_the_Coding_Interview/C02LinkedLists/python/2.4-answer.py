# Partition

#  Write code to partition a linked list around a value x,
    # such that all nodes less than x come before all nodes greater than or equal to x.

# IMPORTANT:  The partition element x can appear anywhere in the "right partition". 
    # It does not need to appear between the left and right partitions.
    # The additional spacing in the example below indicates the partition.

# INPUT:  3 --> 5 --> 8 --> 5 --> 10 --> 2 --> 1 [partition=5]
# OUTPUT:  3 --> 1 --> 2     -->     10 --> 5 --> 5 --> 8

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None
    
    def partition(self, x):
        # create two different linked lists (greater than and less than x)
        current_head, before, after = self.head, Node(0), Node(0)
        before1, after2 = before, after
        before.next = current_head

        # iterate through linked list
        while current_head:
            # put each element into before or after list
            if current_head.data < x:
                before1.next = current_head
                before1 = before1.next
            else:
                after2.next = current_head
                after2 = after2.next
            current_head = current_head.next
        after2.next = None

        # merge the list
        before1.next = after.next
        return before.next

# 2.1 Remove Dups

# Write code to remove duplicates from an unsorted linked list.
# FOLLOW UP:  How would you solve this problem if a temporary buffer isn't allowed?

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None

    def remove_dups(self):
        # create cache
        cache = set()
        current_head = self.head
        if current_head is None:
            return None
        previous_head = None
        while current_head: 
            # if is in cache, skip
            if current_head.data in cache:
                previous_head.next = current_head.next 
            # if not in cache, add node to cache
            else:
                cache.add(current_head.data)
                previous_head = current_head
            current_head = current_head.next

    def remove_dups_FU(self):
        current_head = self.head
        if current_head is None:
            return None
        previous_head = None
        while current_head:
            previous_head = current_head
            while previous_head.next:
                if previous_head.next.data == current_head.data:
                    previous_head.next = previous_head.next.next
                else:
                    previous_head = previous_head.next
                current_head = current_head.next 
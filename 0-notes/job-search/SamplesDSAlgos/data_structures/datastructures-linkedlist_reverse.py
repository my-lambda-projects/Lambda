
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
# REVERSE LINKED LIST
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

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head==None or head.next==None:
            return head
        prev=None
        curr = head
        while head.next!=None:
            curr.next = prev
            prev = curr
            curr = curr.next
            head = head.next
        curr.next=prev
        return curr
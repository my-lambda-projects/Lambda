class ListNode(object):
    def __init__(self, x):
        self.value = x
        self.next = None


def condense_linked_list(node):
    ptr1 = None
    ptr2 = None
    dup = None
    ptr1 = node

    # Pick elements one by one
    while ptr1 != None and ptr1.next != None:

        ptr2 = ptr1

        # Compare the picked element with rest
        # of the elements
        while ptr2.next != None:

            # If duplicate then delete it
            if ptr1.value == ptr2.next.value:

                # Sequence of steps is important here
                dup = ptr2.next
                ptr2.next = ptr2.next.next
            else:
                ptr2 = ptr2.next

        ptr1 = ptr1.next

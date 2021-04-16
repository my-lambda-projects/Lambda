# 2.5 Sum Lists:

# You have two numbers represented by a linked list, where each node contains a single digit.
# The digits are stored in reverse order, such that the 1s digit is at the head of the list.
# Write a function that adds the two numbers and returns the sum as a linked list.
# You are not allowed to "cheat" and just convert the linked list to an integer.
# INPUT:  (7 --> 1 --> 6) + (5 --> 9 --> 2).  That is, 617 + 295.
# OUTPUT:  9 --> 1 --> 2; that is, 912.

# FOLLOW UP:  Suppose the digits are stored in forward order.  Repeat the above problem.
# INPUT:  (6 --> 1 --> 7) + (2 --> 9 --> 5).  That is, 617 + 295.
# OUTPUT:  9 --> 1 --> 2; that is, 912.


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 
    
def sum_lists(head1, head2):
    
    current_head1 = head1
    current_head2 = head2
    x = ""
    y = ""

    while current_head1:
        x = str(current_head1.data) + x
        current_head1 = head1.next

    while current_head2:
        y = str(current_head2.data) + y
        current_head2 = head2.next

    xi = int(x)
    yi = int(y)
    total = xi + yi

    current_head3 = Node()
    string_total = str(total)
    length = len(string_total)

    for z in range(0, length):
        current_head3.data = string_total[z]
        print(current_head3.data)        
        if z+1 > length:
            current_head3.next = None
        else:
            current_head3.next = string_total[z+1]
    
    return current_head3
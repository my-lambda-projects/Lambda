# Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

# Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

# Example

# For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
# mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
# For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
# mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] linkedlist.integer l1

# A singly linked list of integers.

# Guaranteed constraints:
# 0 ≤ list size ≤ 104,
# -109 ≤ element value ≤ 109.

# [input] linkedlist.integer l2

# A singly linked list of integers.

# Guaranteed constraints:
# 0 ≤ list size ≤ 104,
# -109 ≤ element value ≤ 109.

# [output] linkedlist.integer

# A list that contains elements from both l1 and l2, sorted in non-decreasing order.


# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def mergeTwoLinkedLists(l1, l2):
    em = None

    if l1 is None:
        return l2
    if l2 is None:
        return l1

    if l1.value <= l2.value:
        startNode = ListNode(l1.value)
        l1 = l1.next
    else:
        startNode = ListNode(l2.value)
        l2 = l2.next

    em = startNode

    while l1 is not None and l2 is not None:
        if l1.value <= l2.value:
            em.next = ListNode(l1.value)
            l1 = l1.next
        else:
            em.next = ListNode(l2.value)
            l2 = l2.next
        em = em.next

    while l1 is not None:
        em.next = ListNode(l1.value)
        l1 = l1.next
        em = em.next

    while l2 is not None:
        em.next = ListNode(l2.value)
        l2 = l2.next
        em = em.next

    return startNode


# [resorce](https://stackabuse.com/sorting-and-merging-single-linked-list/#:~:text=the%20last%20article.-,Once%20you%20add%20the%20method%20to%20the%20linked%20list%2C%20create,()%20to%20sort%20the%20list.)

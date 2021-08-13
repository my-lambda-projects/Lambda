# Given the head of a linked list, we repeatedly delete consecutive sequences
# of nodes that sum to 0 until there are no such sequences.
#
# After doing so, return the head of the final linked list.  You may return any such answer.
#
# Example 1:
#
# Input: head = [1,2,-3,3,1]
# Output: [3,1]
# Note: The answer [1,2,1] would also be accepted.
# Example 2:
#
# Input: head = [1,2,3,-3,4]
# Output: [1,2,4]
# Example 3:
#
# Input: head = [1,2,3,-3,-2]
# Output: [1]

# Definition for singly-linked list.


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


import collections


class Solution:
    def removeZeroSumSublists(self, head):
        seen = collections.OrderedDict()
        sentinal = ListNode(0)
        sentinal.next = head
        curr = sentinal
        prefix = 0

        while curr:
            prefix += curr.val
            if prefix not in seen:
                seen[prefix] = curr
            else:
                node = seen[prefix]
                node.next = curr.next
                while list(seen.keys())[-1] != prefix:
                    seen.popitem()

            curr = curr.next

        return sentinal.next

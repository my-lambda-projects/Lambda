# You are given two non-empty linked lists representing two non-negative integers.
# The most significant digit comes first and each of their nodes contain a single digit.
# Add the two numbers and return it as a linked list.
#
# You may assume the two numbers do not contain any leading zero, except the number 0 itself.
#
# Follow up:
# What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
#
# Example:
#
# Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 8 -> 0 -> 7

# Definition for singly-linked list.


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        def ll_to_l(l):
            num = ""
            while l:
                num += str(l.val)
                l = l.next
            return int(num)

        n1 = ll_to_l(l1)
        n2 = ll_to_l(l2)
        n = n1 + n2
        n = str(n)
        head = ListNode(int(n[0]))
        newnode = head

        for i in range(1, len(n)):
            new = ListNode(int(n[i]))
            newnode.next = new
            newnode = newnode.next
        return head


if __name__ == "__main__":
    l1 = ListNode(7)
    l1.next = ListNode(2)
    l1.next.next = ListNode(4)
    l1.next.next.next = ListNode(3)

    l2 = ListNode(5)
    l2.next = ListNode(6)
    l2.next.next = ListNode(4)
    # Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
    # Output: 7 -> 8 -> 0 -> 7
    ans = Solution().addTwoNumbers(l1, l2)
    while ans:
        print(ans.val)
        ans = ans.next

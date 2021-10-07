# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order and each of their nodes contain a single digit.
# Add the two numbers and return it as a linked list.
#
# You may assume the two numbers do not contain any leading zero, except the number 0 itself.
#
# Example:
#
# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.


class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

        list1 = l1
        list2 = l2
        res = []
        carry = 0

        while list1 is not None and list2 is not None:
            currSum = list1.val + list2.val + carry
            res.append(currSum % 10)
            carry = currSum // 10

            list1 = list1.next
            list2 = list2.next

        while list1 is not None:
            currSum = list1.val + carry
            res.append(currSum % 10)
            carry = currSum // 10
            list1 = list1.next

        while list2 is not None:
            currSum = list2.val + carry
            res.append(currSum % 10)
            carry = currSum // 10
            list2 = list2.next

        if carry:
            res.append(carry)

        newnode = ListNode(0)
        node = newnode
        for num in res:
            node.next = ListNode(num)
            node = node.next

        return newnode.next


if __name__ == "__main__":
    l1 = ListNode(2)
    l1.next = ListNode(4)
    l1.next.next = ListNode(3)

    l2 = ListNode(5)
    l2.next = ListNode(6)
    l2.next.next = ListNode(4)

    ans = Solution().addTwoNumbers(l1, l2)
    print(ans.next.next.val)
    print(ans.next.val)
    print(ans.val)

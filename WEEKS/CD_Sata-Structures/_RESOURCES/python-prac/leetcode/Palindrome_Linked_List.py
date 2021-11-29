# Given a singly linked list, determine if it is a palindrome.
#
# Input: 1->2
# Output: false
#
# Input: 1->2->2->1
# Output: true

# Palindromic Linked List
# 4 --> 3 --> 2
# take half and revers and check
# two pointer method fast and slow
# Time Complexity is O(n) and Space


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class Solution:
    def isPalindrome(self, head):
        first_half_end = self.first_half_end(head)
        second_half_start = self.reverse_ll(first_half_end.next)

        first_position = head
        second_position = second_half_start
        while second_position is not None:
            if second_position.val != first_position.val:
                return False
            first_position = first_position.next
            second_position = second_position.next
        return True

    def reverse_ll(self, node):
        curr = node
        prev = None
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev

    def first_half_end(self, node):
        fast = node
        slow = node
        while fast.next is not None and fast.next.next is not None:
            fast = fast.next.next
            slow = slow.next
        return slow


if __name__ == "__main__":

    #  1 - > 2 - > 3 - > 2 -> 1
    node_list = [1, 2, 3, 2, 1]
    node = ListNode(node_list[0])
    curr = node
    for i in node_list[1:]:
        curr.next = ListNode(i)
        curr = curr.next
    print(Solution().isPalindrome(node))

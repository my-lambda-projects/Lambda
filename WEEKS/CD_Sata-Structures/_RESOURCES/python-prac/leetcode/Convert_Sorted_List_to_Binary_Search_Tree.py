# Given a singly linked list where elements are sorted in ascending order,
# convert it to a height balanced BST.
#
# For this problem, a height-balanced binary tree is defined as a binary
# tree in which the depth of the two subtrees of every node never differ by more than 1.
#
# Example:
#
# Given the sorted linked list: [-10,-3,0,5,9],
#
# One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
#
#       0
#      / \
#    -3   9
#    /   /
#  -10  5


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    # O(n) Time and O(n) Space
    def sortedListToBST(self, head):
        arr = []
        curr = head

        while curr:
            arr.append(curr.val)
            curr = curr.next

        def helper(left, right):
            if left <= right:
                mid = left + ((right - left) // 2)

                node = TreeNode(arr[mid])

                node.left = helper(left, mid - 1)
                node.right = helper(mid + 1, right)

                return node

        return helper(0, len(arr) - 1)

    def findMid(self, head):
        previous = None
        slow = head
        fast = head

        while fast and fast.next:
            previous = slow
            slow = slow.next
            fast = fast.next.next

        if previous:
            previous.next = None

        return slow

    # O(n log n) time and log(n) space
    def sortedListToBST2(self, head):
        if not head:
            return None

        mid = self.findMid(head)

        node = TreeNode(mid.val)

        if head == mid:
            return node

        node.left = self.sortedListToBST2(head)
        node.right = self.sortedListToBST2(mid.next)

        return node

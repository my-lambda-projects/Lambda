# Given two binary trees, write a function to check if they are the same or not.
#
# Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
#
# Example 1:
#
# Input:     1         1
#           / \       / \
#          2   3     2   3
#
#         [1,2,3],   [1,2,3]
#
# Output: true
# Example 2:
#
# Input:     1         1
#           /           \
#          2             2
#
#         [1,2],     [1,null,2]
#
# Output: false
# Example 3:
#
# Input:     1         1
#           / \       / \
#          2   1     1   2
#
#         [1,2,1],   [1,1,2]
#
# Output: false

import collections


class Solution:
    def isSameTree(self, p, q):

        queue = collections.deque()
        queue.append([p, q])

        while len(queue):
            node1, node2 = queue.popleft()

            if not node1 and not node2:
                continue

            if not node1 or not node2:
                return node1 == node2

            if node1.val != node2.val:
                return False

            queue.append([node1.left, node2.left])
            queue.append([node1.right, node2.right])

        return True

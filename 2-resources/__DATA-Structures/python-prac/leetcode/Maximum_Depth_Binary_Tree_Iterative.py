# Maximum Depth of Binary Tree Using Stack

# Given a binary tree, find its maximum depth.
#
# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
#
# Note: A leaf is a node with no children.
#
# Example:
#
# Given binary tree [3,9,20,null,null,15,7],
#
#     3
#    / \
#   9  20
#     /  \
#    15   7
# return its depth = 3.


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    def maxDepth(self, root):
        stack = []
        if root is not None:
            stack.append((root, 1))

        depth = 0
        while stack != []:
            node, current_depth = stack.pop()

            if node is not None:
                depth = max(depth, current_depth)
                stack.append((node.left, current_depth + 1))
                stack.append((node.right, current_depth + 1))
        return depth


if __name__ == "__main__":
    node = TreeNode(5)
    node.left = TreeNode(4)
    node.right = TreeNode(7)
    node.right.left = TreeNode(6)
    node.right.right = TreeNode(8)
    print(Solution().maxDepth(node))

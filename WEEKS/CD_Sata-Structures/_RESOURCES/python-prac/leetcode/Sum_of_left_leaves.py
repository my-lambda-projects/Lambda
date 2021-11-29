# Find the sum of all left leaves in a given binary tree.
#
# Example:
#
#     3
#    / \
#   9  20
#     /  \
#    15   7
#
# There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    # Iterative
    def sum_of_Left_Leaves(self, root):
        if not root:
            return 0
        node = root
        stack = []
        stack.append(node)
        lsum = 0
        while len(stack) > 0:
            n = stack.pop()

            if n.left is not None:
                if n.left.left is not None and n.left.right is not None:
                    lsum += n.left.val

        stack.append(n.left)
        if n.right is not None:
            stack.append(n.right)
        return lsum

    def sum_of_Left_Leaves_recurssive(self, root):
        if not root:
            return 0

        if root.left is not None:
            if root.left.left is None and root.left.right is None:
                return root.left.val + self.sumOfLeftLeaves(root.right)

        return self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)

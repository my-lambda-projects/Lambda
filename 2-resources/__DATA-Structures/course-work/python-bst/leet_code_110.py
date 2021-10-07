"""
View the full problem and run the test cases at:
https://leetcode.com/problems/balanced-binary-tree/
"""


class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isBalanced(root):
    """
  :type root: TreeNode
  :rtype: bool
  """


# Tree: [3,9,20,null,null,15,7]
#   3
#  / \
# 9  20
#   /  \
#  15   7
node_3 = TreeNode(3)
node_20 = TreeNode(20)
node_3.left = TreeNode(9)
node_3.right = node_20
node_20.left = TreeNode(15)
node_20.right = TreeNode(7)
print(isBalanced(node_3))  # True

# Tree: [1,2,2,3,3,null,null,4,4]
#        1
#       / \
#      2   2
#     / \
#    3   3
#   / \
#  4   4
node_1 = TreeNode(1)
node_2a = TreeNode(2)
node_2b = TreeNode(2)
node_1.left = node_2a
node_1.right = node_2b

node_3a = TreeNode(3)
node_3b = TreeNode(3)
node_2a.left = node_3a
node_2a.right = node_3b

node_4a = TreeNode(4)
node_4b = TreeNode(4)
node_3a.left = node_4a
node_3a.right = node_4b
print(isBalanced(node_1))  # False

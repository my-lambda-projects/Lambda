"""
View the full problem and run the test cases at:
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
"""


class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def sortedArrayToBST(nums):
    """
  :type nums: List[int]
  :rtype: TreeNode
  """


bst_root = sortedArrayToBST([-10, -3, 0, 5, 9])
print(bst_root.val)  # 0
# print(bst_root.left.val)          # -3
# print(bst_root.left.left.val)     # -10
# print(bst_root.right.val)         # 9
# print(bst_root.right.left.val)    # 5
# Returns the root of the following binary search tree:
#       0
#      / \
#    -3   9
#    /   /
#  -10  5

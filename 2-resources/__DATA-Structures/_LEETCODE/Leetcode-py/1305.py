# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        result = []
        curr1, curr2 = root1, root2
        stack1, stack2 = [], []

        while stack1 or stack2 or curr1 or curr2:
            while curr1:
                stack1.append(curr1)
                curr1 = curr1.left

            while curr2:
                stack2.append(curr2)
                curr2 = curr2.left

            if stack1 and (not stack2 or stack1[-1].val <= stack2[-1].val):
                top = stack1.pop()
                result.append(top.val)
                curr1 = top.right
            else:
                top = stack2.pop()
                result.append(top.val)
                curr2 = top.right
        return result

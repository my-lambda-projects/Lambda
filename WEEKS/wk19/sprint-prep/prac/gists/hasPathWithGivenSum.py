#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def hasPathWithGivenSum(t, s):
    if t is None:
        if s == 0:
            return True
        else:
            return False
    else:
        if t.left is not None and t.right is not None:
            return any(
                [
                    hasPathWithGivenSum(t.left, s - t.value),
                    hasPathWithGivenSum(t.right, s - t.value),
                ]
            )
        elif t.left is not None:
            return hasPathWithGivenSum(t.left, s - t.value)
        elif t.right is not None:
            return hasPathWithGivenSum(t.right, s - t.value)
        else:
            if t.value == s:
                return True
            else:
#                 return False
# 1. If the tree is empty, we return false.
# 
# 2. If the tree is not empty, we check if the root node has a path with the
# given sum.
# 
# 3. If the root node has a path with the given sum, we return true.
# 
# 4. lfthe root node does not have a path with the given sum, we check if
# the left or right subtree has a path with the given sum.
# 
# 5. lfthe left or right subtree has a path with the given sum, we return true.
# 6. lfthe left or right subtree does not have a path with the given sum, we
# return false.

#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def csBinaryTreeInvert(root):
    if root is None:
        return
    else:
        temp = root
        csBinaryTreeInvert(root.left)
        csBinaryTreeInvert(root.right)

        temp = root.left
        root.left = root.right
        root.right = temp
        return root

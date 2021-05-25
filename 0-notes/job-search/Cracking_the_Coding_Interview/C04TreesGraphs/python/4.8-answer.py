# 4.8 First Common Ancestor

# Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
# Avoid storing additional nodes in a data structure.
# NOTE:  This is not necessarily a binary search tree.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def first_common(self, root1, root2):
        if root1:
            if root2:
                if root1 == root2:
                    return root1
                first_common(root1, root2.left)
                first_common(root1, root2.right)
                root1 = root1.left
                first_common(root1, root2.left)
                if root1 == root2:
                    return root1
                root1 = root1.right
                first_common(root1, root2.right)
                if root1 == root2:
                    return root1
                    
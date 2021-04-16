# 4.10 Check Subtree

# T1 and T2 are two very large binary trees, with T1 much > T2. 
# Create an algorithm to determine if T2 is a subtree of T1.
# A tree T2 is a subtree of T1 if there exists a node in T1 such that 
    # the subtree of n is identical to T2.
# That is, if you cut off the tree at node n, the two trees would be identical.


class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def check_subtree(self, root1, root2):
        if root1:
            if root2:
                if root1 == root2:
                    check_subtree(root1.left, root2.left)
                    check_subtree(root1.right, root2.right)
                    return True 
        return False
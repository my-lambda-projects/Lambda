class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree(object):
    def __init__(self, root):
        self.root = Node(root)

    def preorder_search(self, start, find_val):
        """Helper method - use this to create a
        recursive search solution."""
        if start.value == find_val:
            return True
        if start.left != None:
            left_result = self.preorder_search(start.left, find_val)
        else:
            left_result = False
        if start.right != None and left_result != True:
            right_result = self.preorder_search(start.right, find_val)
        else:
            right_result = False

        if left_result == True or right_result == True:
            return True
        else:
            return False

    def preorder_print(self, start, traversal):
        """Helper method - use this to create a
        recursive print solution."""
        traversal += "-" + str(start.value)
        left_nums = ""
        right_nums = ""
        if start.left != None:
            traversal = self.preorder_print(start.left, traversal)
        if start.right != None:
            traversal = self.preorder_print(start.right, traversal)
        return traversal

    def search(self, find_val):
        """Return True if the value
        is in the tree, return
        False otherwise."""
        return self.preorder_search(self.root, find_val)
        # print(self.preorder_search(self.root, find_val))

    def print_tree(self):
        """Print out all tree nodes
        as they are visited in
        a pre-order traversal."""
        all_nodes = self.preorder_print(self.root, "")
        all_nodes = all_nodes[1:]
        return all_nodes


# Set up tree
tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)

# Test search
# Should be True
print(tree.search(4))
# Should be False
print(tree.search(6))

# Test print_tree
# Should be 1-2-4-5-3
print(tree.print_tree())

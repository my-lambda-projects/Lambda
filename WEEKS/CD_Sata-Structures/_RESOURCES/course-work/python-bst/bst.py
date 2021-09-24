class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self, value):
        self._root = None
        self._value = value

    # TODO: Implement node value insertion method
    def insert_value(self, value, current_node=False):
        if not current_node:
            if self._root == None:
                self._root = TreeNode(value)
                return self._root.value
            current_node = self._root
        if value < current_node.value:
            if not current_node.left:
                current_node.left = TreeNode(value)
            else:
                self.insert_value(value, current_node.left)
        else:
            if not current_node.right:
                current_node.right = TreeNode(value)
            else:
                self.insert_value(value, current_node.right)

    # TODO: Implement iterative search method
    def search_iteratively(self, value):
        """
        searches the binary iteratively
        """
        if not self._root:
            return False
        current_node = self._root
        while current_node:
            if value < current_node.value:
                current_node = current_node.left
            elif value > current_node.value:
                current_node = current_node.right
            else:
                return True
        return False

    # TODO: Implement recursive search method
    def search_recursively(self, value, current_node=False):
        if not current_node:
            if self._root == None:
                return False
            current_node = self._root

        if value < current_node.value:
            if not current_node.left:
                return False
            return self.search_recursively(value, current_node.left)
        elif value > current_node.value:
            if not current_node.right:
                return False
            return self.search_recursively(value, current_node.right)
        else:
            return True
        return False


tree = BinarySearchTree(3)
print(tree._root)  # None

# 1. Test node value insertion
tree.insert_value(10)
tree.insert_value(5)
tree.insert_value(16)
tree.insert_value(1)
tree.insert_value(7)
tree.insert_value(16)
print(tree._root.value)  # 10
print(tree._root.left.value)  # 5
print(tree._root.right.value)  # 16
print(tree._root.left.left.value)  # 1
print(tree._root.left.right.value)  # 7
print(tree._root.right.right.value)  # 16

# # 2. Test iterative search
empty_tree = BinarySearchTree(2)
print(empty_tree.search_iteratively(10))  # False
print(tree.search_iteratively(10))  # True
print(tree.search_iteratively(7))  # True
print(tree.search_iteratively(-1))  # False

# # 3. Test recursive search
print(empty_tree.search_recursively(10))  # False
print(tree.search_recursively(10))  # True
print(tree.search_recursively(7))  # True
print(tree.search_recursively(-1))  # False

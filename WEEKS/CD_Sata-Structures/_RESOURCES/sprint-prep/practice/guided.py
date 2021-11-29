class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        # create a node for the new value
        new_node = BSTNode(value)
        # compare the node value to the self value
        if (
            new_node.value <= self.value
        ):  # less then or equal to will all go to the left if any duplicats too
            # we add to the left
            if self.left is None:
                self.left = new_node
            else:
                self.left.insert(value)
        else:
            # we add to the right
            # if space exists
            if self.right is None:
                self.right = new_node
            else:
                self.right.insert(value)

    def search(self, target):
        if target == self.value:
            return True
        # check if value is less than self.value

        if target < self.value:
            # look to the left
            if self.left is None:
                return False
            return self.left.search(target)

        else:
            # look to the right
            if self.right is None:
                return False
            return self.right.search(target)

    def find_minimum_value(self):
        # if self.left is None: #recursive here
        #     return self.value
        # min_value =  self.left.find_minimum_value()
        # return min_value
        curr_node = self
        while curr_node.left is not None:
            curr_node = curr_node.left
        return curr_node.value


root = BSTNode(10)
# root.left = BSTNode(6)
# root.right = BSTNode(12)
root.insert(6)
root.insert(7)
root.insert(12)
root.insert(5)
root.insert(14)
root.insert(8)

print(f"minimum value in tree is: {root.find_minimum_value()}")

print(f"does 8 exist? {root.search(8)}")
print(f"does 8 exist? {root.search(7)}")
print(f"does 8 exist? {root.search(15)}")

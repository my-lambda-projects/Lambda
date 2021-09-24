# create the node class that the tree will use
class Node:
    def __init__(self, data, parent):
        self.data = data
        self.leftChild = None
        self.rightChild = None
        self.parent = parent


# create the tree class and initialize the root node to none
class BinarySearchTree:
    def __init__(self):
        self.root = None

    """
    Binary search tree methods (insert)
    """
    # O(logN) if the tree is balanced if not balanced O(N)
    # function to get the data
    def insert(self, data):
        # check to see if the root is empty
        if self.root is None:
            # if so set the root to the node with the data and set parent to
            # none
            self.root = Node(data, None)
        else:
            # if not insert the node and set the parent to the root node
            self.insert_node(data, self.root)

    # function to insert the node into the tree
    def insert_node(self, data, node):
        # check if the data is smaller than the node data
        # if so visit the left subtree
        if data < node.data:
            # check if the left node exists
            if node.leftChild:
                # recursively call this function to insert the node at the
                # correct position regarding the left nodes
                self.insert_node(data, node.leftChild)
            else:
                # if there is no left node then we can insert the new node as
                # the left child with the parent being the node itself
                node.leftChild = Node(data, node)
        else:
            # if the data is larger than the node data
            # if so visit the right subtree
            if node.rightChild:
                # recursively call this function to insert the node at the
                # correct position regarding the right nodes
                self.insert_node(data, node.rightChild)
            else:
                # if there is no right node then we can insert the new node as
                # the right child with the parent being the node itself
                node.rightChild = Node(data, node)

    # helper function to remove a node
    def remove(self, data):
        if self.root is not None:
            self.remove_node(data, self.root)

    # helper function to start traversing the tree
    def traverse(self):
        # check if there is a root node
        if self.root is not None:
            # if there is then call the traverse function
            self.traverse_in_order(self.root)

    # helper function to get the maximum value in the tree
    def get_max_value(self):
        # check if there is a root node
        if self.root is not None:
            # if there is then return the get max function
            return self.get_max(self.root)

    # function to print the max value
    def get_max(self, node):
        # check if a right child exists
        if node.rightChild:
            # if so call the function recursively until we reach the max with
            # no more children
            return self.get_max(node.rightChild)
        # if not just return the node
        return node.data

    # example of the above function getting the max with iteration
    def get_max_iteration(self, node):
        # define an actual value starting node at the root
        actual = self.root
        # iterate the tree while actual exists
        # after this the actual will eventually be the right most node
        while actual.rightChild is not None:
            # set actual to the right child
            actual = actual.rightChild
        # return the last right child
        return actual.data

    # helper function to get the min value in the tree
    def get_min_value(self):
        # check if there is a root node
        if self.root is not None:
            # if there is then return the get min function
            return self.get_min(self.root)

    # function to print the min value
    def get_min(self, node):
        # check if a left child exists
        if node.leftChild:
            # if so call the function recursively until we reach the min with
            # no more children
            return self.get_min(node.leftChild)
        # if not just return the node
        return node.data

    # function to traverse in order (left subtree, then root node, then right
    # subtree recursively) and print the values in order from smallest to
    # largest
    def traverse_in_order(self, node):
        # if the given node has a left child we recursively call the function
        # as far as the left child is concerned
        if node.leftChild:
            self.traverse_in_order(node.leftChild)
        # if there is no left child print the root node
        print(node.data)
        # if the given node has a right child we recursively call the function
        # as far as the right child is concerned
        if node.rightChild:
            self.traverse_in_order(node.rightChild)

    # function to remove a node
    def remove_node(self, data, node):
        # check to make sure the node exists else just return
        if node is None:
            return
        # find the node
        # if the data we are looking for is smaller than the actual nodes data
        if data < node.data:
            # recursively call the function to run down the left subtree
            self.remove_node(data, node.leftChild)
        # else if the data is larger than the actual nodes data
        elif data > node.data:
            # recursively call the function to run down the right subtree
            self.remove_node(data, node.rightChild)
        # else we have found the node
        else:
            # there are 4 cases to address now to remove the node
            # case 1: the node is a leaf node ( has no children)
            if node.leftChild is None and node.rightChild is None:
                print(f"Removing a leaf node.. {node.data}")
                # get the parent
                parent = node.parent
                # check if the node is a left child or right child
                # if left child
                if parent is not None and parent.leftChild == node:
                    # set the parents left child to
                    parent.leftChild = None
                # if right child
                if parent is not None and node.rightChild == node:
                    # set the parents right child to none
                    parent.rightChild = None
                # if the node is the root node
                if parent is None:
                    # set the root node to none
                    self.root = None
                # finally delete the node
                del node
            # case 2: the node has a single right child
            elif node.leftChild is None and node.rightChild is not None:
                print("Removing a node with a single right child..", node.data)
                # get the parent
                parent = node.parent
                # check if the parent exists
                if parent is not None:
                    # if the parents left child is the node
                    if parent.leftChild == node:
                        # set the parents left child to be the right child
                        # of the node we want to remove (because we know the
                        # node only has a right child)
                        parent.leftChild = node.rightChild
                    # if the parents right child is the node
                    if parent.rightChild == node:
                        # set the parents right child to be the right child
                        # of the node we want to remove
                        parent.rightChild = node.rightChild
                # if the node is the root node
                else:
                    # set the root to the nodes right child
                    self.root = node.rightChild
                # set the nodes right child parent to be the parent
                node.rightChild.parent = parent
                # finally delete the node
                del node
            # case 3: the node has a single left child
            elif node.rightChild is None and node.leftChild is not None:
                print(f"Removing node with a single left child..{node.data}")
                # get the parent
                parent = node.parent
                # check if the parent exists
                if parent is not None:
                    # if the parents left child is the node
                    if parent.leftChild == node:
                        # set the parents left child to be the left child
                        # of the node we want to remove (because we know the
                        # node only has a left child)
                        parent.leftChild = node.leftChild
                    # if the parents right child is the node
                    if parent.rightChild == node:
                        # set the parents right child to be the left child
                        # of the node we want to remove
                        parent.rightChild = node.leftChild
                # if the node is the root node
                else:
                    # set the root to the nodes left child
                    self.root = node.leftChild
                # set the nodes left child parent to be the parent
                node.leftChild.parent = parent
                # finally delete the node
                del node
            # case 4: the node has left and right children ( look for the
            # largest item in left subtree ** predecessor ** and set it to root
            # or the smallest item in the right subtree ** successor ** and
            # set it to root)
            # ** predecessor way **
            else:
                # Swap the data between the root and predecessor so we can
                # just remove the predecessor and the root will now become the
                # predecessors data
                print(f"Removing node with two children.. {node.data}")
                # set the predecessor (largest item in the left subtree) to the
                # nodes left child
                predecessor = self.get_predecessor(node.leftChild)
                # set a temporary node to hold predecessor data to allow the
                # predecessor to take the given node to removes data
                temp = predecessor.data
                # set the predecessor data to the given node to removes data
                predecessor.data = node.data
                # set the node to removes data to the temp ( the data we want
                # to keep from the predecessor)
                node.data = temp
                # finally remove the node (predecessor now contains the given
                # nodes data and the given node contains the predecessors data)
                # by calling the function recursively since the predecessor
                # is a leaf node it will just be removed
                self.remove_node(data, predecessor)

    # function to find the predecessor node ( largest node in left subtree)
    def get_predecessor(self, node):
        # if the node has a right child
        if node.rightChild:
            # recursively call the function to get the right most child node
            return self.get_predecessor(node.rightChild)
        return node


"""
Using the methods
"""
bst = BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(-5)
bst.insert(1)
bst.insert(99)
bst.insert(34)
bst.remove(99)
# print the max node of the tree passing in the root
print("max node:", bst.get_max(bst.root))
# print the min node of the tree passing in the root
print("min node:", bst.get_min(bst.root))
bst.traverse()

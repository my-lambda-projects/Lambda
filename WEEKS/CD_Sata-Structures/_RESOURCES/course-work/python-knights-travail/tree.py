class Node:
    def __init__(self, value):
        self._value = value
        self._parent = None
        self._children = []

    # def __repr__(self):
    #     print(
    #         f'Node val: {self.value}, par: {self.parent}'
    #     )

    @property
    def value(self):
        return self._value

    @property
    def children(self):
        return self._children

    @property
    def parent(self):
        return self._parent

    @parent.setter
    def parent(self, node):
        if not node:
            self._parent = None
            return
        if self._parent != node:
            if self._parent != None:
                self.parent.remove_child(self)
        self._parent = node
        node.add_child(self)

    def add_child(self, node):
        if self._children.count(node) == 0:
            self._children.append(node)
            node.parent = self

    def remove_child(self, node):
        try:
            self._children.remove(node)
            node.parent = None
        except:
            print("Node does not exist")

    def breadth_search(self, value):
        queue = [self]
        while len(queue) > 0:
            node = queue.pop()
            if node.value == value:
                return True
            else:
                queue.extend(node.children)
        return False

    def depth_search(self, value):
        if not self:
            return

        if self.value == value:
            return self

        for child in self.children:
            found = child.depth_search(value)
            if found:
                return found


node1 = Node("root1")
node2 = Node("root2")
node3 = Node("root3")
node4 = Node("root4")
node5 = Node("root5")

node3.parent = node1
node2.parent = node1
node4.parent = node2
node5.parent = node4

print(node1.depth_search("root5"))
# print(node1.children)
# print(node2.children)

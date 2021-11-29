class Node(object):
    def __init__(self, character):
        self.character = character
        self.leftNode = None
        self.middleNode = None
        self.rightNode = None
        self.value = 0


class TST(object):
    def __init__(self):
        self.rootNode = None

    def put(self, key, value):
        self.rootNode = self.putItem(self.rootNode, key, value, 0)

    def putItem(self, node, key, value, index):

        c = key[index]

        if node is None:
            node = Node(c)

        if c < node.character:
            node.leftNode = self.putItem(node.leftNode, key, value, index)
        elif c > node.character:
            node.rightNode = self.putItem(node.rightNode, key, value, index)
        elif index < len(key) - 1:
            node.middleNode = self.putItem(node.middleNode, key, value, index + 1)
        else:
            node.value = value

        return node

    def get(self, key):

        node = self.getItem(self.rootNode, key, 0)

        if node is None:
            return -1

        return node.value

    def getItem(self, node, key, index):

        if node is None:
            return None

        c = key[index]

        if c < node.character:
            return self.getItem(node.leftNode, key, index)
        elif c > node.character:
            return self.getItem(node.rightNode, key, index)
        elif index < len(key) - 1:
            return self.getItem(node.middleNode, key, index + 1)
        else:
            return node


if __name__ == "__main__":
    tst = TST()

    tst.put("apple", 100)
    tst.put("orange", 200)

    print(tst.get("orange"))

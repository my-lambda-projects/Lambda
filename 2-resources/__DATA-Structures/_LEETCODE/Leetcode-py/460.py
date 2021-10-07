from collections import defaultdict, OrderedDict


class Node:
    def __init__(self, value, count):
        self.value = value
        self.count = count


class LFUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.nodes = defaultdict(OrderedDict)
        self.minCount = None

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        del self.nodes[node.count][key]

        if not self.nodes[node.count]:
            del self.nodes[node.count]

        node.count += 1
        self.nodes[node.count][key] = node.value

        if not self.nodes[self.minCount]:
            self.minCount += 1

        return node.value

    def put(self, key: int, value: int) -> None:
        if not self.capacity:
            return
        node = Node(value, 1)
        if key in self.cache:
            self.cache[key].value = value
            self.get(key)
            return
        self.cache[key] = Node(value, 1)
        if len(self.cache) > self.capacity:
            k, v = self.nodes[self.minCount].popitem(last=False)
            del self.cache[k]

        self.nodes[1][key] = value
        self.minCount = 1


from collections import defaultdict


class ListNode:
    def __init__(self, key: int, val: int):
        self.key = key
        self.val = val
        self.freq = 1
        self.next = None
        self.prev = None


class DLinkedList:
    def __init__(self):
        self.head = self.tail = ListNode(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.size = 0

    def get_size(self):
        return self.size

    def add(self, node: ListNode):
        prev = self.tail.prev
        prev.next = node
        node.prev = prev
        node.next = self.tail
        self.tail.prev = node
        self.size += 1

    def remove(self, node=None):
        if self.size == 0:
            return
        if not node:
            node = self.head.next
        node.prev.next = node.next
        node.next.prev = node.prev
        self.size -= 1
        return node


class LFUCache:
    def __init__(self, capacity: int):
        self.d = {}
        self.freq = defaultdict(DLinkedList)
        self.capacity = capacity
        self.min_freq = 0

    def get(self, key: int) -> int:
        if key not in self.d:
            return -1
        node = self.d[key]
        self._update(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return

        if key in self.d:
            node = self.d[key]
            node.val = value
            self._update(node)
        else:
            if len(self.d.keys()) == self.capacity:
                node = self.freq[self.min_freq].remove()
                del self.d[node.key]
            node = ListNode(key, value)
            self.freq[1].add(node)
            self.min_freq = 1
            self.d[key] = node

    def _update(self, node):
        freq = node.freq
        self.freq[freq].remove(node=node)
        if freq == self.min_freq and self.freq[self.min_freq].get_size() == 0:
            self.min_freq += 1
        node.freq += 1
        self.freq[node.freq].add(node)

        # Your LFUCache object will be instantiated and called as such:
        # obj = LFUCache(capacity)
        # param_1 = obj.get(key)
        # obj.put(key,value)

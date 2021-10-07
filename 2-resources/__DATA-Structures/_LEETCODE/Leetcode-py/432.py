class Node:
    def __init__(self):
        self.key = []
        self.key_pos = {}
        self.next, self.prev = None, None

    def add(self, k):
        self.key.append(k)
        self.key_pos[k] = len(self.key) - 1

    def remove(self, k):
        if len(self.key) == 1:
            self.key = []
        else:
            idx, last_ele = self.key_pos[k], self.key[-1]
            self.key[idx] = last_ele
            self.key_pos[last_ele] = idx
            del self.key_pos[k]
            self.key.pop()

    def get_any_key(self):
        return self.key[-1]

    def isEmpty(self):
        return not self.key


class DoubleLinkedList:
    def __init__(self):
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def insert_after(self, node):
        new = Node()
        temp = node.next
        node.next, temp.prev = new, new
        new.next, new.prev = temp, node
        return new

    def insert_before(self, node):
        return self.insert_after(node.prev)

    def remove(self, node):
        p, n = node.prev, node.next
        p.next, n.prev = n, p

    def get_head(self):
        return self.head.next

    def get_tail(self):
        return self.tail.prev

    def get_sentinel_head(self):
        return self.head


class AllOne:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.keys = {}
        self.doubleLinkedList = DoubleLinkedList()
        self.node_freq_dict = {0: self.doubleLinkedList.get_sentinel_head()}

    def remove(self, count, key):
        curr = self.node_freq_dict[count]
        curr.remove(key)
        if curr.isEmpty():
            self.doubleLinkedList.remove(curr)
            del self.node_freq_dict[count]

    def inc(self, key: str) -> None:
        """
        Inserts a new key <Key> with value 1. Or increments an existing key by 1.
        """
        self.keys[key] = self.keys.get(key, 0) + 1
        curr_count, prev_count = self.keys[key], self.keys[key] - 1
        if curr_count not in self.node_freq_dict:
            self.node_freq_dict[curr_count] = self.doubleLinkedList.insert_after(
                self.node_freq_dict[prev_count]
            )
        self.node_freq_dict[curr_count].add(key)
        if prev_count > 0:
            self.remove(prev_count, key)

    def dec(self, key: str) -> None:
        """
        Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
        """
        if key not in self.keys:
            return
        count = self.keys[key]
        self.keys[key] -= 1
        curr_count, prev_count = self.keys[key], self.keys[key] + 1
        if curr_count == 0:
            del self.keys[key]
        else:
            if curr_count not in self.node_freq_dict:
                self.node_freq_dict[curr_count] = self.doubleLinkedList.insert_before(
                    self.node_freq_dict[prev_count]
                )
            self.node_freq_dict[curr_count].add(key)
        self.remove(prev_count, key)

    def getMaxKey(self) -> str:
        """
        Returns one of the keys with maximal value.
        """
        return (
            self.doubleLinkedList.get_tail().get_any_key()
            if not self.doubleLinkedList.get_tail().isEmpty()
            else ""
        )

    def getMinKey(self) -> str:
        """
        Returns one of the keys with Minimal value.
        """
        return (
            self.doubleLinkedList.get_head().get_any_key()
            if not self.doubleLinkedList.get_head().isEmpty()
            else ""
        )


# Your AllOne object will be instantiated and called as such:
# obj = AllOne()
# obj.inc(key)
# obj.dec(key)
# param_3 = obj.getMaxKey()
# param_4 = obj.getMinKey()

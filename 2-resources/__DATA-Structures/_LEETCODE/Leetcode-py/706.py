class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None


class MyHashMap:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.map = [None] * 1000

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        idx = key % 1000
        if not self.map[idx]:
            self.map[idx] = Node(key, value)
        else:
            curr = self.map[idx]
            while True:
                if curr.key == key:
                    curr.val = value
                    return
                if not curr.next:
                    break
                curr = curr.next
            curr.next = Node(key, value)

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        idx = key % 1000
        if not self.map[idx]:
            return -1
        else:
            curr = self.map[idx]
            while curr:
                if curr.key == key:
                    return curr.val
                curr = curr.next
            return -1

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        idx = key % 1000
        if not self.map[idx]:
            return
        elif self.map[idx].key == key:
            self.map[idx] = self.map[idx].next
        else:
            curr = self.map[idx]
            prev = curr
            curr = curr.next
            while curr:
                if curr.key == key:
                    prev.next = curr.next
                    break
                curr = curr.next
                prev = prev.next


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)

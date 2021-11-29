class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __repr__(self):
        return f"Node({repr(self.value)})"


class LinkedList:
    def __init__(self):
        self.head = None

    def __str__(self):
        """Print entire linked list."""

        if self.head is None:
            return "[Empty List]"

        cur = self.head
        s = ""

        while cur != None:
            s += f"({cur.value})"

            if cur.next is not None:
                s += "-->"

            cur = cur.next

        return s

    def find(self, value):
        cur = self.head

        while cur is not None:
            if cur.value == value:
                return cur

            cur = cur.next

        return None

    def delete(self, value):
        cur = self.head

        # Special case of deleting head

        if cur.value == value:
            self.head = cur.next
            return cur

        # General case of deleting internal node

        prev = cur
        cur = cur.next

        while cur is not None:
            if cur.value == value:  # Found it!
                prev.next = cur.next  # Cut it out
                return cur  # Return deleted node
            else:
                prev = cur
                cur = cur.next

        return None  # If we got here, nothing found

    def insert_at_head(self, node):
        node.next = self.head
        self.head = node

    def insert_or_overwrite_value(self, value):
        node = self.find(value)

        if node is None:
            # Make a new node
            self.insert_at_head(Node(value))

        else:
            # Overwrite old value
            node.value = value


if __name__ == "__main__":
    l = LinkedList()
    print(l)
    for i in range(5):
        l.insert_at_head(Node(i))
    print(l)
    print(l.delete(2))
    print(l)
    print(l.delete(4))
    print(l)
    print(l.delete(0))
    print(l)

    print(l.find(0))
    print(l.find(3))
    print(l.find(1))

    l.insert_or_overwrite_value(4)
    print(l)
    l.insert_or_overwrite_value(4)
    print(l)

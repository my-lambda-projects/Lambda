# https://youtu.be/acl83_x8Wew
# https://piazza.com/class/j63w1pdyopf7kj?cid=86

"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""


class ListNode:
    def __init__(self, val, prev=None, next=None):
        self.prev = prev
        self.val = val
        self.next = next

    """Wrap the given value in a ListNode and insert it
  after this node. Note that this Node could already
  have a next node it is pointing to."""

    def insert_after(self, val):
        current_next = self.next
        self.next = ListNode(val, self, current_next)
        if current_next:
            current_next.prev = self.next

    """Wrap the given value in a ListNode and insert it
  before this node. Note that this Node could already
  have a previous node it is pointing to."""

    def insert_before(self, val):
        current_prev = self.prev
        self.prev = ListNode(val, current_prev, self)
        if current_prev:
            current_prev.next = self.prev

    """Rearranges this ListNode's previous and next pointers
  accordingly, effectively deleting this ListNode."""

    def delete(self):
        if self.prev:
            self.prev.next = self.next
        if self.next:
            self.next.prev = self.prev


"""Our doubly-linked list class. It holds references to
the list's head and tail nodes."""


class List:
    def __init__(self, node=None):
        self.head = node
        self.tail = node.next if node else None

    """Wraps the given value in a ListNode and inserts it
  as the new head of the list. Don't forget to handle
  the old head node's previous pointer accordingly."""

    def add_to_head(self, val):
        if not self.head:
            self.head = ListNode(val, None, self.tail)
        elif not self.tail:
            self.tail = self.head
            self.head = ListNode(val, None, self.tail)
            self.tail.prev = self.head
        else:
            self.head = ListNode(val, None, self.head)
            self.head.next.prev = self.head

    """Removes the List's current head node, making the
  current head's next node the new head of the List.
  Returns the removed Node."""

    def shift(self):
        if not self.head:
            if not self.tail:
                return None
            return self.remove_from_tail()
        else:
            current_head = self.head
            self.head = self.head.next
            self.head.prev = None
            return current_head.val

    """Wraps the given value in a ListNode and inserts it
  as the new tail of the list. Don't forget to handle
  the old tail node's next pointer accordingly."""

    def add_to_tail(self, val):
        if not self.tail:
            self.tail = ListNode(val, self.head, None)
        elif not self.head:
            self.head = self.tail
            self.tail = ListNode(val, self.head, None)
            self.head.next = self.tail
        else:
            self.tail = ListNode(val, self.tail, None)
            self.tail.prev.next = self.tail

    """Removes the List's current tail node, making the
  current tail's previous node the new tail of the List.
  Returns the removed Node."""

    def remove_from_tail(self):
        if not self.tail:
            if not self.head:
                return None
            return self.shift()
        else:
            current_tail = self.tail
            self.tail = self.tail.prev
            self.tail.next = None
            return current_tail.val

    """Removes the input node from its current spot in the
  List and inserts it as the new head node of the List."""

    def move_to_front(self, node):
        value = node.val
        if node is self.tail:
            self.remove_from_tail()
        else:
            node.delete()
        self.add_to_head(value)

    """Removes the input node from its current spot in the
  List and inserts it as the new tail node of the List."""

    def move_to_end(self, node):
        value = node.val
        if node is self.head:
            self.shift()
        else:
            node.delete()
        self.add_to_tail(value)

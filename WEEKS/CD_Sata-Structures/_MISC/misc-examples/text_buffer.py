from doubly_linked_list import DoublyLinkedList


class TextBuffer:
    def __init__(self):
        self.storage = DoublyLinkedList()

    # return a string to the print function
    def __str__(self):
        # build a string
        s = ""
        current_node = self.storage.head
        while current_node:
            s += current_node.value
            current_node = current_node.next
        return s

    # Add a character to the back of the text buffer
    def append(self, string_to_add):
        for char in string_to_add:
            self.storage.add_to_tail(char)

    # Add char to the front of the text buffer
    def prepend(self, string_to_add):
        for char in reversed(string_to_add):
            self.storage.add_to_head(char)

    # Remove a char from the front of the text buffer
    def delete_front(self, chars_to_remove=1):
        for _ in range(chars_to_remove):
            self.storage.remove_from_head()

    # Remove a char from the back of the text buffer
    def delete_back(self, chars_to_remove=1):
        for _ in range(chars_to_remove):
            self.storage.remove_from_tail()

    # concatenate another text buffer on to the end of this buffer
    def join(self, other_buffer):
        # join in the middle
        # set the self storage tails next node to be the head of the other buffer
        self.storage.tail.next = other_buffer.storage.head
        # set the other buffers head to be the tail of this buffer
        other_buffer.storage.head.prev = self.storage.tail

        # join the ends to the correct refs
        other_buffer.storage.head = self.storage.head
        self.storage.tail = other_buffer.storage.tail


t = TextBuffer()
t.append("ook")
t.prepend("B")
t.append("'s are readable")
print(t)
t.delete_back(2)
print(t)
t.delete_front(6)
t.delete_front()
print(t)
t.append("le")
t.delete_front(4)
t2 = TextBuffer()
t2.append(" Hello")
print(t)
t.join(t2)
print(t)

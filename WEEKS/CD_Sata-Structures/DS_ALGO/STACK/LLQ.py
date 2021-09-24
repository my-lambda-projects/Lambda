# Let's make a queue using a linked list we need to add an is_empty() method. lets refactor the code


class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, item):
        new_node = LinkedListNode(item)
        # check if queue is empty
        if self.rear is None:
            self.front = new_node
            self.rear = new_node
        else:
            # add new node to rear
            self.rear.next = new_node
            # reassign rear to new node
            self.rear = new_node

    def dequeue(self):
        # check if queue is empty
        if not self.is_empty:
            # keep copy of old front
            old_front = self.front
            # set new front
            self.front = old_front.next

        # check if the queue is now empty
        if self.is_empty():
            # make sure rear is also None
            self.rear = None

        return old_front

    def is_empty(self):
        return self.front == None


# test

q = Queue()
print(q.is_empty())  # => True
q.enqueue(12)
print(q.is_empty())  # => False
q.dequeue()
print(q.is_empty())  # => True

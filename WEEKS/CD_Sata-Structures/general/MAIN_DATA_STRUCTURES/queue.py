# FIFO: first in first out

# create the abstract data type
class Queue:
    def __init__(self):
        # initialize it to a one dimensional array or linked list
        self.queue = []

    """
    Stack methods (enqueue, dequeue, peek, is_empty, size_queue)
    """

    # function to check if the queue is empty O(1)
    def is_empty(self):
        return self.queue == []

    # function to add data to the queue O(1)
    def enqueue(self, data):
        self.queue.append(data)

    # function to remove and return the first item inserted to the queue O(N)
    def dequeue(self):

        # first check to make sure its not an empty queue
        if self.size_queue() != 0:
            # get the first item in the queue
            data = self.queue[0]
            # remove it
            del self.queue[0]
            # return the item
            return data
        else:
            return -1

    # function to return the first item in the queue without removing it
    # O(1)
    def peek(self):
        return self.queue[0]

    # function get the size of the queue O(1)
    def size_queue(self):
        return len(self.queue)


"""
Using the methods
"""
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(f"Size: {queue.size_queue()}")
print(f"Dequeue: {queue.dequeue()}")
print(f"Size: {queue.size_queue()}")
print(f"Peeked item: {queue.peek()}")
print(f"Size: {queue.size_queue()}")

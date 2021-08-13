# Implement the following operations of a queue using stacks.
#
# push(x) -- Push element x to the back of queue.
# pop() -- Removes the element from in front of queue.
# peek() -- Get the front element.
# empty() -- Return whether the queue is empty.
# Example:
#
# MyQueue queue = new MyQueue();
#
# queue.push(1);
# queue.push(2);
# queue.peek();  // returns 1
# queue.pop();   // returns 1
# queue.empty(); // returns false


class MyQueue:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.s1 = []
        self.s2 = []

    def push(self, x):
        """
        Push element x to the back of queue.
        """
        self.s1.append(x)

    def pop(self):
        """
        Removes the element from in front of queue and returns that element.
        """
        if self.s2:
            return self.s2.pop()

        while self.s1:
            self.s2.append(self.s1.pop())

        return self.s2.pop()

    def peek(self):
        """
        Get the front element.
        """
        if self.s2:
            return self.s2[len(self.s2) - 1]

        while self.s1:
            self.s2.append(self.s1.pop())

        return self.s2[len(self.s2) - 1]

    def empty(self):
        """
        Returns whether the queue is empty.
        """
        if self.s2 == [] and self.s1 == []:
            return True
        return False

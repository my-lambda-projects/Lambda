# 3.4 Queue via Stacks

# Implement a MyQueue class which implements a queue using two stacks.

class MyQueue(object):

    def __init__(self):
        self.stack1 = []
        self.stack2 = []
        

    def push(self, x):
        # while self.stack1 not empty, append its last element to stack2
        while self.stack1:
            popped1 = self.stack1.pop()
            self.stack2.append(popped1)
        # then append x to stack1, which is empty 
        self.stack1.append(x)
        # then put all the other elements, now on stack2, back on stack1
        while self.stack2:
            popped2 = self.stack2.pop()
            self.stack1.append(popped2)

    def pop(self):
        # remove last element of stack, which is front element of queue, and return it
        popped = self.stack1.pop()
        return popped

    def peek(self):
        # return last element of stack, which is front element of queue (no removal)
        front_element = self.stack1[-1]
        return front_element

    def empty(self):
        # if both stacks are empty, return true; else return false
        if not self.stack1 and not self.stack2:
            is_empty = True
        else:
            is_empty = False
        return is_empty
from heapq import *


class MaxStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.q = []
        self.stack = []
        self.not_in_q = {}
        self.not_in_stack = {}
        self.idx = 0

    def push(self, x: int) -> None:
        self.stack.append((self.idx, x))
        heappush(self.q, (-x, -self.idx))
        self.idx += 1

    def pop(self) -> int:
        result = self.top()
        if self.stack[-1][0] not in self.not_in_stack:
            self.not_in_stack[self.stack[-1][0]] = self.stack[-1][1]
        self.stack.pop()
        return result

    def top(self) -> int:
        while self.stack[-1][0] in self.not_in_q:
            del self.not_in_q[self.stack[-1][0]]
            self.stack.pop()
        return self.stack[-1][1]

    def peekMax(self) -> int:
        while -self.q[0][1] in self.not_in_stack:
            del self.not_in_stack[-self.q[0][1]]
            heappop(self.q)
        return -self.q[0][0]

    def popMax(self) -> int:
        result = self.peekMax()
        if -self.q[0][1] not in self.not_in_q:
            self.not_in_q[-self.q[0][1]] = -self.q[0][0]
        heappop(self.q)
        return result

        # Your MaxStack object will be instantiated and called as such:
        # obj = MaxStack()
        # obj.push(x)
        # param_2 = obj.pop()
        # param_3 = obj.top()
        # param_4 = obj.peekMax()
        # param_5 = obj.popMax()

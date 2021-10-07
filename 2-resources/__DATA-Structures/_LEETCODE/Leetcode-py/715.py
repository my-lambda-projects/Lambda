# Time
# addRange: O(N)
# removeRange: O(N)
# queryRange: O(log N)


class RangeModule:
    def __init__(self):
        self.stack = []

    def addRange(self, left: int, right: int) -> None:
        start = bisect.bisect_left(self.stack, left)
        end = bisect.bisect_right(self.stack, right)
        newInterval = []
        if start % 2 == 0:
            newInterval.append(left)
        if end % 2 == 0:
            newInterval.append(right)
        self.stack[start:end] = newInterval

    def queryRange(self, left: int, right: int) -> bool:
        start = bisect.bisect_right(self.stack, left)
        end = bisect.bisect_left(self.stack, right)
        return start == end and start % 2 == 1

    def removeRange(self, left: int, right: int) -> None:
        start = bisect.bisect_left(self.stack, left)
        end = bisect.bisect_right(self.stack, right)
        removedInterval = []
        if start % 2 == 1:
            removedInterval.append(left)
        if end % 2 == 1:
            removedInterval.append(right)
        self.stack[start:end] = removedInterval


# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule()
# obj.addRange(left,right)
# param_2 = obj.queryRange(left,right)
# obj.removeRange(left,right)

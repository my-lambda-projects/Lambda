class MyCalendarThree:
    def __init__(self):
        self.maps = []

    def book(self, start: int, end: int) -> int:
        bisect.insort_left(self.maps, (start, 1))
        bisect.insort_left(self.maps, (end, -1))
        result, count = 0, 0
        for i, v in self.maps:
            count += v
            result = max(result, count)
        return result


# Your MyCalendarThree object will be instantiated and called as such:
# obj = MyCalendarThree()
# param_1 = obj.book(start,end)

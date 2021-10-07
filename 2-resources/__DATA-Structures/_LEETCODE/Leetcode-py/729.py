class MyCalendar:
    def __init__(self):
        self.maps = []

    def book(self, start: int, end: int) -> bool:
        bisect.insort_left(self.maps, [start, 1])
        bisect.insort_left(self.maps, [end, -1])
        count = 0
        for i, val in self.maps:
            count += val
            if count > 1:
                self.maps.remove([start, 1])
                self.maps.remove([end, -1])
                return False
        return True


# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)

class ExamRoom:
    def __init__(self, N: int):
        self.N = N
        self.seats = []

    def seat(self) -> int:
        if not self.seats:
            target = 0
        else:
            d, target = self.seats[0], 0
            for x, y in zip(self.seats, self.seats[1:]):
                if (y - x) // 2 > d:
                    d, target = (y - x) // 2, (x + y) // 2
            if self.N - 1 - self.seats[-1] > d:
                target = self.N - 1
        bisect.insort(self.seats, target)
        return target

    def leave(self, p: int) -> None:
        self.seats.remove(p)


# Your ExamRoom object will be instantiated and called as such:
# obj = ExamRoom(N)
# param_1 = obj.seat()
# obj.leave(p)

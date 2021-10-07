class Fancy:
    def __init__(self):
        self.A = []
        self.add = [0]
        self.mul = [1]

    def append(self, val: int) -> None:
        self.A.append(val)
        self.add.append(self.add[-1])
        self.mul.append(self.mul[-1])

    def addAll(self, inc: int) -> None:
        self.add[-1] += inc

    def multAll(self, m: int) -> None:
        self.add[-1] *= m
        self.mul[-1] *= m

    def getIndex(self, idx: int) -> int:
        if idx >= len(self.A):
            return -1
        m = self.mul[-1] // self.mul[idx]
        inc = self.add[-1] - self.add[idx] * m
        return (self.A[idx] * m + inc) % (10 ** 9 + 7)


# Your Fancy object will be instantiated and called as such:
# obj = Fancy()
# obj.append(val)
# obj.addAll(inc)
# obj.multAll(m)
# param_4 = obj.getIndex(idx)

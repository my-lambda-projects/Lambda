class Solution:
    def __init__(self, rects: List[List[int]]):
        self.rects, self.points, s = rects, [], 0
        for x1, y1, x2, y2 in self.rects:
            s += (x2 - x1 + 1) * (y2 - y1 + 1)
            self.points.append(s)

    def pick(self) -> List[int]:
        x1, y1, x2, y2 = self.rects[
            bisect.bisect_left(self.points, random.randint(1, self.points[-1]))
        ]
        return [random.randint(x1, x2), random.randint(y1, y2)]


# Your Solution object will be instantiated and called as such:
# obj = Solution(rects)
# param_1 = obj.pick()

import random

from typing import List


class Solution:
    def __init__(self, w: List[int]):
        self.w = w
        self.total = sum(w)
        for i in range(1, len(w)):
            self.w[i] += self.w[i - 1]

    def pickIndex(self) -> int:
        r = random.randint(1, self.total)
        start, end = 0, len(self.w) - 1
        while start < end:
            mid = (start + end) // 2
            if r <= self.w[mid]:
                end = mid
            else:
                start = mid + 1
        return start

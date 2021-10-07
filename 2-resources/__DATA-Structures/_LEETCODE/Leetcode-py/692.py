from collections import Counter
from heapq import *


class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        q = []
        for key, val in Counter(words).items():
            heappush(q, (-val, key))
        result = []
        for _ in range(k):
            result.append(heappop(q)[1])
        return result

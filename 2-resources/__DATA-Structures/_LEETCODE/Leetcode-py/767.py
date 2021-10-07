"""
time: O(N)
space: O(1)
"""
import heapq
from collections import Counter


class Solution:
    def reorganizeString(self, S):
        """
        :type S: str
        :rtype: str
        """
        result = ""
        c = Counter(S)
        l = []
        for k, v in c.items():
            heapq.heappush(l, (-v, k))
        prev_v, prev_k = 0, ""
        while l:
            v, k = heapq.heappop(l)
            result += k
            if prev_v < 0:
                heapq.heappush(l, (prev_v, prev_k))
            prev_v = v + 1
            prev_k = k
        return "" if len(result) != len(S) else result

import heapq
from collections import Counter


class Solution:
    def rearrangeString(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        if k == 0:
            return s
        l = [(-count, c) for c, count in Counter(s).items()]
        heapq.heapify(l)
        result = ""
        while l:
            q = []
            for _ in range(k):
                if not l:
                    return ""
                count, c = heapq.heappop(l)
                result += c
                if count + 1 < 0:
                    q.append((count + 1, c))
                if len(result) == len(s):
                    return result
            while q:
                heapq.heappush(l, q.pop())
        return result if len(result) == len(s) else ""

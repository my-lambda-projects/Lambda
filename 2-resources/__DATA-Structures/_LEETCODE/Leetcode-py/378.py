import heapq
from typing import List

# Time: klogk


class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        if not matrix or len(matrix) == 0:
            return None
        n = len(matrix)
        q = [(matrix[0][0], 0, 0)]
        used = {0}
        xx, yy = [1, 0], [0, 1]
        result = None
        while k > 0:
            result, x, y = heapq.heappop(q)
            for i in range(2):
                next_x, next_y = x + xx[i], y + yy[i]
                index = next_x * n + next_y
                if next_x < n and next_y < n and not index in used:
                    heapq.heappush(q, (matrix[next_x][next_y], next_x, next_y))
                    used.add(index)
            k -= 1
        return result

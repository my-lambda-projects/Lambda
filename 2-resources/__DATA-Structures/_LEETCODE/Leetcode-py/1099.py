from typing import List


class Solution:
    def twoSumLessThanK(self, A: List[int], K: int) -> int:
        A.sort()
        result = -1
        l, r = 0, len(A) - 1
        while l < r:
            if A[l] + A[r] < K:
                result = max(result, A[l] + A[r])
                l += 1
            else:
                r -= 1
        return result

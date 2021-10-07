from typing import List


class Solution:
    def subarraysDivByK(self, A: List[int], K: int) -> int:
        result, curr, d = 0, 0, {0: 1}
        for num in A:
            curr += num
            result += d.get(curr % K, 0)
            d[curr % K] = d.get(curr % K, 0) + 1
        return result

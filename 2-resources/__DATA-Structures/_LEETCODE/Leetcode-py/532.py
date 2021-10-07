from collections import Counter


class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        c = Counter(nums)
        result = 0
        for num in c:
            if k > 0 and num + k in c or (k == 0 and c[num] > 1):
                result += 1
        return result

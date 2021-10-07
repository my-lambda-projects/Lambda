class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        cache = {0: 1}
        s, result = 0, 0
        for num in nums:
            s += num
            if s - k in cache:
                result += cache[s - k]
            cache[s] = cache.get(s, 0) + 1
        return result

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        if len(nums) <= 1:
            return len(nums)
        tails = [0] * len(nums)
        result = 0
        for x in nums:
            i, j = 0, result
            while i != j:
                m = (i + j) // 2
                if tails[m] < x:
                    i = m + 1
                else:
                    j = m
            tails[i] = x
            result = max(i + 1, result)
        return result

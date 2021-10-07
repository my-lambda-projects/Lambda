class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        def dfs(idx, s):
            if (idx, s) not in cache:
                result = 0
                if idx == len(nums):
                    if s == 0:
                        result = 1
                else:
                    result = dfs(idx + 1, s - nums[idx]) + dfs(idx + 1, s + nums[idx])
                cache[(idx, s)] = result
            return cache[(idx, s)]

        cache = {}
        return dfs(0, S)

class Solution:
    def makesquare(self, nums: List[int]) -> bool:
        if not nums:
            return False
        if sum(nums) % 4 != 0:
            return False
        nums = sorted(nums, reverse=True)

        def dfs(idx, s, target):
            if idx == len(nums):
                return True
            for i in range(4):
                if s[i] + nums[idx] <= target:
                    s[i] += nums[idx]
                    if dfs(idx + 1, s, target):
                        return True
                    s[i] -= nums[idx]
            return False

        return dfs(0, [0] * 4, sum(nums) // 4)

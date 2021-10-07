# Time: O(K*2^N)


class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        if sum(nums) % k != 0:
            return False
        nums.sort(reverse=True)

        def dfs(idx, target, s):
            if idx == len(nums):
                return True
            for i in range(k):
                if s[i] + nums[idx] <= target:
                    s[i] += nums[idx]
                    if dfs(idx + 1, target, s):
                        return True
                    s[i] -= nums[idx]
            return False

        return dfs(0, sum(nums) // k, [0] * k)

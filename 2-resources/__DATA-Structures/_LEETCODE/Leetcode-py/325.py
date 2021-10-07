class Solution:
    def maxSubArrayLen(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        sum, ret = 0, 0
        map = {}
        for i in range(len(nums)):
            sum += nums[i]
            if sum == k:
                ret = i + 1
            elif sum - k in map:
                ret = max(i - map[sum - k], ret)
            if sum not in map:
                map[sum] = i
        return ret

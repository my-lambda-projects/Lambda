from collections import Counter


class Solution:
    def findShortestSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        first, last = {}, {}
        degree = Counter(nums)
        for i in range(len(nums)):
            first.setdefault(nums[i], i)
            last[nums[i]] = i
        max_degree = max(degree.values())
        return min(
            last[key] - first[key] + 1 for key in degree if degree[key] == max_degree
        )

# Given an array of integers and an integer k, you need to find the
# total number of continuous subarrays whose sum equals to k.
#
# Example 1:
#
# Input:nums = [1,1,1], k = 2
# Output: 2

import collections


class Solution:
    def subarraySum(self, nums, k):
        Sum = 0
        previous = collections.defaultdict(int)
        count = 0
        previous[0] += 1

        for index, num in enumerate(nums):
            Sum += num
            if Sum - k in previous:
                count += previous[Sum - k]
            previous[Sum] += 1

        return count

# Given an array of size n, find the majority element. The majority
# element is the element that appears more than ⌊ n/2 ⌋ times.
#
# You may assume that the array is non-empty and the majority element always exist in the array.
#
# Example 1:
#
# Input: [3,2,3]
# Output: 3
# Example 2:
#
# Input: [2,2,1,1,1,2,2]
# Output: 2

import collections


class Solution:
    # O(n) Time and O(n) space
    def majorityElement(self, nums):
        dict = collections.Counter(nums)
        n = len(nums) / 2
        for k, v in dict.items():
            if v > n:
                return k

    # O(n log n) Time and O(1) Space
    def majorityElement2(self, nums):
        nums.sort()

        return nums[len(nums) // 2]

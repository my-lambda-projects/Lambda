# Given an array of n positive integers and a positive integer s, find the minimal
# length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
#
# Example:
#
# Input: s = 7, nums = [2,3,1,2,4,3]
# Output: 2
# Explanation: the subarray [4,3] has the minimal length under the problem constraint.
# Follow up:
# If you have figured out the O(n) solution, try coding another solution of which the
# time complexity is O(n log n).


class Solution:
    def minSubArrayLen(self, s, nums):
        pointer1 = 0
        pointer2 = 0
        Sum = 0
        count = float("inf")
        while pointer2 < len(nums):

            Sum += nums[pointer2]

            while Sum >= s:
                count = min(count, pointer2 - pointer1 + 1)
                Sum -= nums[pointer1]
                pointer1 += 1

            pointer2 += 1

        if count == float("inf"):
            return 0
        else:
            return count

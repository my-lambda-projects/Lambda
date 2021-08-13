# Given an array nums, there is a sliding window of size k which is moving
# from the very left of the array to the very right. You can only see the k
# numbers in the window. Each time the sliding window moves right by one position.
# Return the max sliding window.

# Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
# Output: [3,3,5,5,6,7]
# Explanation:
#
# Window position                Max
# ---------------               -----
# [1  3  -1] -3  5  3  6  7       3
#  1 [3  -1  -3] 5  3  6  7       3
#  1  3 [-1  -3  5] 3  6  7       5
#  1  3  -1 [-3  5  3] 6  7       5
#  1  3  -1  -3 [5  3  6] 7       6
#  1  3  -1  -3  5 [3  6  7]      7
#
# Note:
# You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.
#
# Follow up:
# Could you solve it in linear time?
import collections


class Solution:
    def maxSlidingWindow(self, nums, k):
        # if len(nums) == 0:
        #     return []
        # length = len(nums) - k
        # arr = []
        # for i in range(length + 1):
        #     arr.append(max(nums[i:i + k]))
        #
        # return arr

        queue = collections.deque()
        slid_max = []
        for i in nums:
            queue.append(i)
            if len(queue) > k:
                queue.popleft()
            if len(queue) == k:
                slid_max.append(max(queue))

        return slid_max

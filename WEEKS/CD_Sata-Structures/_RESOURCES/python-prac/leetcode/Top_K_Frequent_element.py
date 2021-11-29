# Given a non-empty array of integers, return the k most frequent elements.
#
# Example 1:
#
# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]

# Example 2:
#
# Input: nums = [1], k = 1
# Output: [1]
# Note:
#
# You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
# Your algorithm's time complexity must be better than O(n log n), where
# n is the array's size.

# Find the top k frequent element in the array
# In heap pushing and popping takes log(k), building dictionary takes
# O(n)

import collections
import heapq


class Solution:
    def topk(self, nums, k):
        dict_nums = collections.Counter(nums)
        heap = []
        for key, val in dict_nums.items():
            heapq.heappush(heap, (val, key))
            if len(heap) > k:
                heapq.heappop(heap)
        res = []
        while len(heap) > 0:
            res.append(heapq.heappop(heap)[1])
        return res


if __name__ == "__main__":
    arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4]
    k = 2
    print(Solution().topk(arr, k))

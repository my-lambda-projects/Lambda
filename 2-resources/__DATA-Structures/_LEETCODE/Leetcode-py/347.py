from collections import Counter, defaultdict


class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        counter = defaultdict(list)
        for key, val in Counter(nums).items():
            counter[val].append(key)

        result = []
        for i in range(len(nums), 0, -1):
            result.extend(counter[i])
            if len(result) >= k:
                return result[:k]
        return result[:k]

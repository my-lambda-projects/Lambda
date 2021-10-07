from collections import Counter

## This problem can be solved with
## (1) Two pointers by sorting two lists
## (2) Hash Table
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        count1 = Counter(nums1)
        for n in nums2:
            if n in count1 and count1[n] > 0:
                count1[n] -= 1
                result.append(n)
        return result

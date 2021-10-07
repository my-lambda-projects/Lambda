class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        nums1 = set(nums1)
        for num in nums2:
            if num in nums1 and not num in result:
                result.append(num)
        return result

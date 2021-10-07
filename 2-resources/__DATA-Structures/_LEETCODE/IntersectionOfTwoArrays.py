""" 
349. Intersection of Two Arrays

DescriptionHintsSubmissionsDiscussSolution
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.

"""


class Solution:
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """

        # declaring an empty array for comparing
        result = []

        # final array initialization
        finalResult = []

        for i in nums1:
            for j in nums2:

                if i == j:

                    result.append(i)

        # removing duplicates
        finalResult = set(result)

        return list(finalResult)

# Given a list of non negative integers, arrange them such that they form the largest number.
#
# Example 1:
#
# Input: [10,2]
# Output: "210"
# Example 2:
#
# Input: [3,30,34,5,9]
# Output: "9534330"

from functools import cmp_to_key


class Solution:
    def largestNumber(self, nums):

        res = [str(num) for num in sorted(nums, key=cmp_to_key(self.compare))]

        return "0" if res[0] == "0" else "".join(res)

    def compare(self, a, b):

        if str(a) + str(b) > str(b) + str(a):
            return -1
        else:
            return 1

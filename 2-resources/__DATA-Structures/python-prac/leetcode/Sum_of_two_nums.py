# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
#
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
#
# Example:
#
# Given nums = [2, 7, 11, 15], target = 9,
#
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].


class Solution:
    def __init__(self, arr, target):
        self.arr = arr
        self.target = target

    def twoSum(self):

        dict = {}

        for i, num in enumerate(self.arr):

            if (self.target - num) in dict:
                return [dict[self.target - num], i]
            dict[num] = i


if __name__ == "__main__":
    arr = [2, 7, 11, 15]
    target = 9
    print(Solution(arr, target).twoSum())

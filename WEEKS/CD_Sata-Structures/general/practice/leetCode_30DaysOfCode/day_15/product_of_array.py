"""
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
"""


def productExceptSelf(nums):
    # create ans array to store the left product of every element and them multi it by the right product
    ans = [0] * len(nums)
    ans[0] = 1
    for i in range(1, len(nums)):
        ans[i] = ans[i - 1] * nums[i - 1]

    r = 1
    for i in range(len(nums) - 1, -1, -1):
        ans[i] = ans[i] * r
        r *= nums[i]
    return ans


print(productExceptSelf([2, 2, 3, 4]))

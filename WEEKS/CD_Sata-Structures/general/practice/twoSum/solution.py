def twoSum(nums, target):
    """
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    """
    h = {}
    for i, v in enumerate(nums):
        if v in h:
            return [h[v], i]
        else:
            rem = target - v
            h[rem] = i


nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))

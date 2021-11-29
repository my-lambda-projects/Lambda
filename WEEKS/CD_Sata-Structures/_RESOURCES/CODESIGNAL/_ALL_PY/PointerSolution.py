def twoPointerSum(nums, target):
    """
    Given a sorted array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    """
    l = 0
    r = len(nums) - 1
    while l < r:
        if nums[l] + nums[r] == target:
            return [l, r]
        elif nums[l] + nums[r] > target:
            r -= 1
        else:
            l += 1


nums = [5, 25, 75]
target = 100
print(twoPointerSum(nums, target))

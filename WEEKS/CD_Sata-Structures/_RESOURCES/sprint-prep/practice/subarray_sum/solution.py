def subarraySum(nums, k):
    """
    Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
    """
    count = 0
    s = 0
    for i in range(len(nums)):
        s += nums[i]
        if s % k == 0:
            count += 1
    return count


nums = [1, 2, 3]
k = 3
print(subarraySum(nums, k))

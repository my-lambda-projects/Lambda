def maxProduct(nums):
    max_so_far = nums[0]
    curr_max = max_so_far
    for i in range(1, len(nums)):
        curr_max *= nums[i]
        if curr_max < nums[i]:
            curr_max = nums[i]
        if curr_max > max_so_far:
            max_so_far = curr_max
    return max_so_far


print(maxProduct([2, -10, -2, -4, 3]))

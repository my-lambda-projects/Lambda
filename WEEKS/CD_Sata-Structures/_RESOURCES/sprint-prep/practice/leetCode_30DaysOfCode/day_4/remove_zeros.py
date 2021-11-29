def moveZeroes(nums):
    """

    Move all zeros to the end of the given array (nums) with keeping the order of other elements.
    Do not return anything, modify nums in-place instead.
    """
    # counter = 0
    # for i in range(len(nums) - 1):
    #     if nums[counter] == 0:
    #         nums.pop(counter)
    #         nums.append(0)
    #     else:
    #         counter += 1
    # return nums

    """O(n) solution"""
    last_zero = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[i], nums[last_zero] = nums[last_zero], nums[i]
            last_zero += 1
    return nums


print(moveZeroes([0, 1, 0, 3, 12]))

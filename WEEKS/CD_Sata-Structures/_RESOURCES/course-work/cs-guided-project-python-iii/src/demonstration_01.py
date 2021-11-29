"""
Given an array of integers `nums` and an integer `target`, return the indices
of the two numbers that add up to the `target`.

Examples:

- two_sum(nums = [2,5,9,13], target = 7) -> [0,1] (nums[0] + nums[1] == 7)
- two_sum(nums = [4,3,5], target = 8) -> [1,2] (nums[1] + nums[2] == 8)

Notes:

- Each input will have only one solution.
- You may not use the same element twice.
- You can return the answer in any order.
"""


def two_sum(numbers, target):
    # Your code here
    target_nums = []
    for num1 in numbers:
        for num2 in numbers:
            if num1 == num2:
                continue
            elif num1 + num2 == target:
                target_nums.append(numbers.index(num1))
                # target_nums.append(numbers.index(num2))
    return target_nums


print(two_sum([2, 5, 9, 13], 7))
print(two_sum([4, 3, 5], 8))
print()

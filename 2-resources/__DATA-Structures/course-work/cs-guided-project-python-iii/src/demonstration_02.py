"""
Demonstration #2

Given a non-empty array of integers `nums`, every element appears twice except except for one. Write a function that finds the element that only appears once.

Examples:

- single_number([3,3,2]) -> 2
- single_number([5,2,3,2,3]) -> 5
- single_number([10]) -> 10
"""


def single_number(nums):
    # Your code here
    counts = {}
    for num in nums:
        if num not in counts:
            counts[num] = 1
        else:
            counts[num] += 1
    print(counts)
    # loop over the dict
    for key, value in counts.items():
        if value == 1:
            return key
    # for num in nums:
    #     #for each num count the nums in array
    #     count = nums.count(num)
    #     if count == 1:
    #         return num


print(single_number([3, 3, 2]))
print(single_number([5, 2, 3, 2, 3]))
print(single_number([10]))

# UPER
# input = array of len > 0 all nums
# output = a single_number
# it appears once
# is a number form the array

# PLAN
# -brute force = valid solutions

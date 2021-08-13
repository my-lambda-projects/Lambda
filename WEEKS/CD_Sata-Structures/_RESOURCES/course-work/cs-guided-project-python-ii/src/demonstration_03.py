import math

"""
Challenge #3:

Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples:
- multiply_nums("2, 3") ➞ 6
- multiply_nums("1, 2, 3, 4") ➞ 24
- multiply_nums("54, 75, 453, 0") ➞ 0
- multiply_nums("10, -2") ➞ -20

Notes:
- Bonus: Try to complete this challenge in one line!
"""


def multiply_nums(nums):
    # Your code here
    # nums = "2, 4, 6"
    integer_list = []
    new_list = list(nums)
    sliced_list = new_list[0::3]
    print(sliced_list)
    for elem in sliced_list:
        int_elem = int(elem)
        integer_list.append(int_elem)
        print(type(int_elem))
    return math.prod(integer_list)


print(multiply_nums("2, 3"))

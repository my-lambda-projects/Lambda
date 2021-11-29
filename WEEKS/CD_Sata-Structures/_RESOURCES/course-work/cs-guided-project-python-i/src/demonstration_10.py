"""
Challenge #10:

Create a function that applies a discount d to every number in the list.

Examples:
- get_discounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]
- get_discounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]
- get_discounts([100], "45%") ➞ [45]

Notes:
- The discount is the percentage of the original price (i.e the discount of
"75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
- There won't be any awkward decimal numbers, only 0.5 to deal with.
"""
import math


def get_discounts(nums, percentage):
    # Your code here
    new_percentage = list(percentage)
    discount_str = int(new_percentage[0] + new_percentage[1])
    discount = int(discount_str) / 100
    print(discount)
    d = []
    for num in nums:
        num = discount * num
        s = str(num)
        new_num = int(s.rstrip(".0")) if ".0" in s else float(s)
        d.append(new_num)
    return d


print(get_discounts([2, 4, 6, 11], "50%"))
print(get_discounts([10, 20, 40, 80], "75%"))
print(get_discounts([100], "45%"))

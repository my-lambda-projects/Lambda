"""
Challenge #10:

Given a string of space separated integers, write a function that returns the
maximum and minimum integers.

Example:
- max_and_min("1 2 3 4 5") -> "5 1"
- max_and_min("1 2 -3 4 5") -> "5 -3"
- max_and_min("1 9 3 4 -5") -> "9 -5"

Notes:
- All inputs are valid integers.
- There will always be at least one number in the input string.
- The return string must be two numbers separated by a single space, and
the maximum number is first.
"""

import functools
import operator


def max_and_min(input_str):
    # Your code here
    new_list = list(map(int, input_str.split()))
    new_string = str(max(new_list)) + " " + str(min(new_list))
    print(type(new_string))
    return new_string


print(max_and_min("1 2 3 4 5"))
print(max_and_min("1 2 -3 4 5"))
print(max_and_min("1 9 3 4 -5"))

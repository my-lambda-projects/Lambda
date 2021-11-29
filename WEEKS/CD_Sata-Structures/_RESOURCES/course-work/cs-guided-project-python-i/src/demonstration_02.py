"""
Challenge #2:

Write a function that takes an integer `minutes` and converts it to seconds.

Examples:
- convert(5) ➞ 300
- convert(3) ➞ 180
- convert(2) ➞ 120
"""


def convert(minutes):
    # Your code here
    seconds = minutes * 60
    return seconds


print(convert(5))

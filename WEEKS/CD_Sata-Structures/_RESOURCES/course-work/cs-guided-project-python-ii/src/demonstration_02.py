"""
Challenge #2:

Given a list of numbers, create a function that returns the list but with each
element's index in the list added to itself. You should add 0 to the number at
index 0, add 1 to the number at index 1, etc.

Examples:
- add_indexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
- add_indexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
- add_indexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

Notes:
- The input list will only contain integers.
"""


def add_indexes(numbers):
    # Your code here
    new_list = []
    for index, value in enumerate(numbers):
        sum = index + value
        new_list.append(sum)
    return new_list


enumerate(my_list)  # tuples of the index and the value of the list
list(enumerate(a_list))  # and makes it into an array
for item in enumerate(a_list):
    print(item)
for index, value in enumerate(a_list):
    print(index) or print(value)

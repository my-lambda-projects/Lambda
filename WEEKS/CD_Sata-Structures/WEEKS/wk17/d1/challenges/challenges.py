#
#
# """# Challenges"""
#
# """
# Challenge #1:
# Create a function that takes two numbers as arguments and return their sum.
# Examples:
# - addition(3, 2) ➞ 5
# - addition(-3, -6) ➞ -9
# - addition(7, 3) ➞ 10
# """
print("example #1:")


def add(a, b):
    return a + b


print(add(3, 2))


# """
# Challenge #2:
# Write a function that takes an integer `minutes` and converts it to seconds.
# Examples:
# - convert(5) ➞ 300
# - convert(3) ➞ 180
# - convert(2) ➞ 120
# """
def convert(minutes):
    return minutes * 60


print(convert(5))


# """
# Challenge #3:
# Create a function that takes a string and returns it as an integer.
# Examples:
# - string_int("6") ➞ 6
# - string_int("1000") ➞ 1000
# - string_int("12") ➞ 12
# """


def string_int(txt):
    return int(txt)


print(string_int("6"))
print(string_int("1000"))
print(string_int("12"))


# """
# Challenge #4:
# Create a function that takes length and width and finds the perimeter of a
# rectangle.
# Examples:
# - find_perimeter(6, 7) ➞ 26
# - find_perimeter(20, 10) ➞ 60
# - find_perimeter(2, 9) ➞ 22
# """
# def find_perimeter(length, width):


# """
# Challenge #5:
# Create a function that returns a list of strings sorted by length in ascending
# order.
# Examples:
# - sort_by_length(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
# - sort_by_length(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
# - sort_by_length(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
# - sort_by_length([]) ➞ []
# """
# def sort_by_length(lst):


# """
# Challenge #6:
# Create a function that takes a string, checks if it has the same number of "x"s
# and "o"s and returns either True or False.
# - Return a boolean value (True or False).
# - The string can contain any character.
# - When no x and no o are in the string, return True.
# Examples:
# - XO("ooxx") ➞ True
# - XO("xooxx") ➞ False
# - XO("ooxXm") ➞ True (Case insensitive)
# - XO("zpzpzpp") ➞ True (Returns True if no x and o)
# - XO("zzoo") ➞ False
# """
# def XO(txt):


# """
# Challenge #7:
# Given an unsorted list, create a function that returns the nth smallest element
# (the smallest element is the first smallest, the second smallest element is the
# second smallest, etc).
# Examples:
# - nth_smallest([7, 5, 3, 1], 1) ➞ 1
# - nth_smallest([1, 3, 5, 7], 3) ➞ 5
# - nth_smallest([1, 3, 5, 7], 5) ➞ None
# - nth_smallest([7, 3, 5, 1], 2) ➞ 3
# """
# def nth_smallest(lst, n):


# """
# Challenge #8:
# Create a function that returns the number of arguments it was called with.
# Examples:
# - num_args() ➞ 0
# - num_args("foo") ➞ 1
# - num_args("foo", "bar") ➞ 2
# - num_args(True, False) ➞ 2
# - num_args({}) ➞ 1
# # """
# def num_args():
#
#
# """
# Challenge #9:
# Write a function that creates a dictionary with each (key, value) pair being
# the (lower case, upper case) versions of a letter, respectively.
# Examples:
# - mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
# - mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
# - mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
# Notes:
# - All of the letters in the input list will always be lowercase.
# """
# def mapping(letters):

#
# """
# Challenge #10:
# Create a function that applies a discount d to every number in the list.
# Examples:
# - get_discounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]
# - get_discounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]
# - get_discounts([100], "45%") ➞ [45]
# Notes:
# - The discount is the percentage of the original price (i.e the discount of
# "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
# - There won't be any awkward decimal numbers, only 0.5 to deal with.
# """
# def get_discounts(nums, percentage):

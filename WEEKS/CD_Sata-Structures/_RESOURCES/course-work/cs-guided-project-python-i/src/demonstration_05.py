"""
Challenge #5:

Create a function that returns a list of strings sorted by length in ascending
order.

Examples:
- sort_by_length(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
- sort_by_length(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
- sort_by_length(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
- sort_by_length([]) ➞ []
"""


def sort_by_length(lst):
    # Your code here
    # sorted_list = sorted(lst, key=lambda str_item: len(str_item))
    return sorted(lst, key=len)


print(sort_by_length(["a", "ccc", "dddd", "bb"]))

# .sort() it changes the original array
# sorted() creates a copy of the original array and changes it

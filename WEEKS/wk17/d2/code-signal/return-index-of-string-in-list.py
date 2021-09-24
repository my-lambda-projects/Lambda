# Write a function that searches a list of names(unsorted) for the name "Bob" and returns the location in the list. If Bob is not in the array, return -1.
#
# Examples:
#
# csWhereIsBob(["Jimmy", "Layla", "Bob"]) ➞ 2
# csWhereIsBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
# csWhereIsBob(["Jimmy", "Layla", "James"]) ➞ - 1
# Notes:
#
# Assume all names start with a capital letter and are lowercase thereafter(i.e. don't worry about finding "BOB" or "bob").
# [execution time limit] 4 seconds(py3)
#
# [input] array.string names
#
# [output] integer
#
# [Python 3] Syntax Tips
#
# # Prints help message to the console
# # Returns a string
#
#
# def helloWorld(name):
#     print("This prints to the console when you Run Tests")
#     return "Hello, " + name


def csWhereIsBob(names):
    bob = "Bob"
    if bob in names:
        return names.index("Bob")
    else:
        return -1

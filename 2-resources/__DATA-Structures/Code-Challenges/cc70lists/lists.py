# cc70 lists https://repl.it/student/submissions/1864112
"""
For this challenge, you'll be writing some list functions to get you more
comfortable with Python lists. Simply follow along with each exercise's prompt.

The following is a link on how sorting is done in Python:
https://docs.python.org/3/howto/sorting.html

Additionally, here is a link to the Python docs on lists:
https://docs.python.org/3/tutorial/datastructures.html
"""

# 1. match_ends
# Given a list of strings, return the count of the number of
# strings where the string length is 2 or more and the first
# and last chars of the string are the same.
# Note: python does not have a ++ operator, but += works.
def match_ends(words):
    # Your code here
    count = 0
    for x in words:
        if (len(x) >= 2) and (x[0] == x[-1]):
            count += 1
    return count


print(match_ends(["abba", "bobby", "cc", "d", "falafelf"]))  # ~~~> 3

# 2. front_x
# Given a list of strings, return a list with the strings
# in sorted order, except group all the strings that begin with 'x' first.
# e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
# ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
# Hint: this can be done by making 2 lists and sorting each of them
# before combining them.
def front_x(words):
    # Your code here
    words.sort()
    x_list = []
    not_x_list = []
    for word in words:
        if word[0] == "x":
            x_list.append(word)
        else:
            not_x_list.append(word)
    return x_list + not_x_list


print(
    front_x(["mix", "xyz", "apple", "xanadu", "aardvark"])
)  # ~~~> ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']

# 3. sort_last
# Given a list of non-empty tuples, return a list sorted in increasing
# order by the last element in each tuple.
# e.g. [(1, 7), (1, 3), (3, 4, 5), (2, 2)] yields
# [(2, 2), (1, 3), (3, 4, 5), (1, 7)]
# Hint: use a custom key= function to extract the last element form each tuple.
def sort_last(tuples):
    # Your code here
    return sorted(tuples, key=lambda t: t[-1])


print(
    sort_last([(1, 7), (1, 3), (3, 4, 5), (2, 2)])
)  # ~~~> [(2, 2), (1, 3), (3, 4, 5), (1, 7)]

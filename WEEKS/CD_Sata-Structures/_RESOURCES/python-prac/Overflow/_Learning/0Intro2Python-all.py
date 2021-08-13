# WHILE LOOP
#
# In this problem, write a function named "my_while_loop" that accepts an
# iterable of strings as a parameter and returns a new list with strings from
# the original list that are longer than five characters.
#
# The function must use a while loop in its implementation.

# TEST DATA
# test = ["nope", "yes this one", "not", "uhuh", "here's one", "narp"]
# print(my_while_loop(test))  # > ["yes this one", "here's one"]
#
# test = ["plop", "", "drop", "zop", "stop"]
# print(my_while_loop(test))  # > []
#
# test = []
# print(my_while_loop(test))  # > []


# NOTES:
#   (method) append: (__object: Any) -> None  :Append object to the end of the list.
#   len: [ function ]   Return the number of items in a container.
# (function) len: (__obj: Sized) -> int


# the list, which can be written as a list of comma-separated values (items) between square brackets.
# Lists might contain items of different types,
#  but usually the items all have the same type.
squares = [1, 4, 9, 16, 25]

# Like strings (and all other built-in sequence types),
# lists can be indexed and sliced:

print(squares[0])  # indexing returns the item

print(squares[-1])
#  [Running] python -u "c:\Users\15512\Google Drive\a-A-September\misc\Non-App-Academy-Exploration\python\my-intro-BG\0Intro2Python-all.py"
# 1
# 25

# **********************************************************************
# def my_while_loop(lst):#    (function) my_while_loop: (lst) -> List
#     new_lst = []       #    (variable) new_lst: List
#     i = 0
#     while i < len(lst):
#         if len(lst[i]) > 5:
#             new_lst.append(lst[i])
#
#         i += 1
#         print("i",i)
#     return new_lst
#
#
# test = ["nope", "yes this one", "not", "uhuh", "here's one", "narp"]
# print(my_while_loop(test))
#
# test = ["plop", "", "drop", "zop", "stop"]
# print(my_while_loop(test))
#
# test = []
# print(my_while_loop(test))
# [Running] python -u "c:\Users\15512\Google Drive\a-A-September\misc\Non-App-Academy-Exploration\python\my-intro-BG\0Intro2Python-all.py"
# 1
# 25
# i 1
# i 2
# i 3
# i 4
# i 5
# i 6
# ['yes this one', "here's one"]
# i 1
# i 2
# i 3
# i 4
# i 5
# []
# []
# *****************************************************************************
# FOR LOOP
#
# In this problem, write a function named "my_for_loop" that accepts an
# iterable of strings as a parameter and returns a new list with strings from
# the original list that are longer than five characters. The function must use
# a for loop in its implementation.
#
print("---------------------------------------------------------------")

# WRITE YOUR FUNCTION HERE


def my_for_loop(lst):
    new_lst = []
    for item in lst:
        if len(item) > 5:
            new_lst.append(item)
    return new_lst


# TEST DATA
test = ["nope", "yes this one", "not", "uhuh", "here's one", "narp"]
print(my_for_loop(test))  # > ["yes this one", "here's one"]

test = ["plop", "", "drop", "zop", "stop"]
print(my_for_loop(test))  # > []

test = []
print(my_for_loop(test))  # > []

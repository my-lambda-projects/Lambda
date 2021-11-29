# LIST COMPREHENSION
#
# In this problem, write a function named "my_comprehension" that accepts an
# iterable of strings as a parameter and returns a new list with strings from
# the original list that are all transformed to upper case. The function must
# use a list comprehension in its implementation. Your function body must
# contain only one line.
#
# The str object in Python has a method on it named "upper".
#
# There are two sample data calls for you to use.

# WRITE YOUR FUNCTION HERE


# TEST DATA
test = ["plop", "", "drop", "zop", "stop"]
print(my_comprehension(test))  # > ["PLOP", "", "DROP", "ZOP", "STOP"]

test = []
print(my_comprehension(test))  # > []

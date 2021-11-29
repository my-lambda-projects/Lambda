""" Assignment 4

Write code that does the following in order...
1. Turn the jumbled_nums tuple into a list.
2. Add the value 5 to the list.
3. Remove one of the values of 4 from the list.
4. Sort the list.
5. Insert the value 1 at the beginning of the list.
6. Turn the list back into a tuple.
7. Finally print the tuple.

Stretch Goal
1. Unpack the tuple into separate variables.
2. Construct a list from these variables. Is this a good idea? Why or why not?
3. Shuffle the list and cast it back to a tuple.
4. Print the final tuple.
5. Find and read the documentation for the collections library. """
from random import shuffle  # Required only for stretch goal


jumbled_nums = (8, 4, 2, 9, 7, 3, 6, 4)

# Answer
list_nums = list(jumbled_nums)
list_nums.append(5)
list_nums.remove(4)
list_nums.sort()
list_nums.insert(0, 1)
tuple_nums = tuple(list_nums)
print(tuple_nums)

# Stretch Goals
a, b, c, d, e, f, g, h, i = tuple_nums
new_list = [a, b, c, d, e, f, g, h, i]
# This is not a great idea since we can just do this:
# new_list = list(tuple_nums)
shuffle(new_list)
final_tuple = tuple(new_list)
print(final_tuple)

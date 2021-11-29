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
nums_list = list(jumbled_nums)
nums_list.insert(0, 5)
nums_list.remove(4)
nums_list.sort()
nums_list.insert(0, 1)
nums_list = tuple(nums_list)
print(nums_list)

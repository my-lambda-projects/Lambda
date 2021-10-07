### Unordered and Ordered List Data Structures ###
# -------------------------------------------------------------------------------------------
# The structure of an unordered list is a collection of items where each item holds a
# relative position with respect to the others. Some possible unordered list operations:
#  - List() - creates a new empty list. params: n/a, return: empty list
#  - add(item) - adds item to list, assuming it's not already there. params: n/a, return: n/a
#  - remove(item) - removes the item from the list. It needs the item and modifies the list
#                   Assume the item is present in the list
#  - search(item) - searches for the item in the list. It needs the item and returns a boolean
#  - is_empty() - tests to see whether the list is empty. No params and returns a boolean
#  - size() - returns the number of items in the list. No params and returns an integer.
#  - append(item) - adds a new item to the end of the list making it the last item in the
#                   collection. It needs the item and returns nothing. Assume the item is
#                   not already in the list.
#  - index(item) - returns the position of item in the list. It needs the item and returns
#                  the index. Assume the item is in the list.
#  - insert(pos, item) - adds a new item to the list at position pos. It needs the item and
#                        returns nothing. Assume the item is not already in the list and there
#                        are enough existing items to have position pos.
#  - pop() - removes and returns the last item in the list. It needs nothing and returns an
#            item. Assume the list has at least one item.
#  - pop(pos) - removes and returns the item at position pos. It needs the position and returns
#               the item. Assume the item is in the list.
# ---------------------------------------------------------------------------------------------

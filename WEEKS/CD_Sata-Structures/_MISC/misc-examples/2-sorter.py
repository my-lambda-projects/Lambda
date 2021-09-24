d = {"foo": 120, "bar": 17, "qux": 2}

# Sorting a dictionary doesn't make sense
#
# But you can sort a list based on the dictionary
#
# First get the list of items from the dict with .items()
#
# This returns an iterator, so we cast it to a list.
#
# [('bar', 17), ('foo', 12), ('qux', 2)]

items = list(d.items())

print(f"unsorted: {items}")
# Sort ascending by key

items.sort()

print(f"Sort ascending by key: {items}")

# Sort descending by key

items.sort(reverse=True)

print(f"Sort descending by key: {items}")

# Sort ascending by value

# lambda is an anonymous function. e is the argument representing the
# element (a key/value tuple in this case).
#
# We return element 1 of the tuple (the value) to indicate we wish to
# sort on the value.

items.sort(key=lambda e: e[1])

print(f"Sort ascending by value: {items}")

# Sort descending by value

items.sort(key=lambda e: e[1], reverse=True)

print(f"Sort descending by value: {items}")

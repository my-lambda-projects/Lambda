""" Assignment 5

1. Print the set of values that are strictly in both set_a and set_b.
2. Print the set of values that are in either set_a or set_b, but not both.
3. Print a set which contains all the values of set_a and set_b. """

set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

print(set_a.intersection(set_b))
print(set_a.symmetric_difference(set_b))
print(set_a.union(set_b))

if 8 in {1, 2, 3}:
    print("True")
else:
    print("False")

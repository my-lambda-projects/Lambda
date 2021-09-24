# DICTIONARY
#
# Write a function named "my_filter" that takes a dictionary as a parameter.
# Return another dictionary that consists of the key/value pairs from the
# argument where the key has a length greater than or equal to 5. Use any
# construct that want to implement "my_filter".
#
# Test data follows.

# WRITE YOUR CODE HERE
def my_filter(dictionary):
    newdict = {}
    for dict_key in dictionary.keys():
        if len(dict_key) >= 5:
            newdict[dict_key] = dictionary.get(dict_key)
    return newdict


# TEST DATA
print(my_filter({".": 1, "..": 2, ".....": 5}))  # > {".....": 5}
print(my_filter({}))  # > {}
print(my_filter({"12345": 0, "abbba": 0}))  # > {"12345": 0, "abbba": 0}

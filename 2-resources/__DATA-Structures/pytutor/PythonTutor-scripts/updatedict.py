"""
d = {}


def update_dictionary(d, key, value):
    if key in d:
        d[key] += [value]
    if 2 * key in d:
        d[key * 2] += [value]
    if 2 * key not in d:
        d[2 * key] = [value]


update_dictionary(d, 1, -1)
print(d)
"""
d = {}


def update_dictionary(d, key, value):
    if key in d:
        #  add values of the same key
        d[key] = d[key] + value

    #  key not in passed arg
    elif key not in d:
        d[key * 2] = list(range(value, -1))


update_dictionary(d, 2, -2)
print(d)

"""Write an update_dictionary (d, key, value) function that takes
input dictionary d and two numbers: key and value.

If the key key is in the d dictionary, then add the value value to the list
which is stored by this key.
If the key key is not in the dictionary, then you need to add the value to the list by
key 2 * key. If there is no 2 * key,
then you need to add the 2 * key to the dictionary and map it to the list from
the passed item [value].
It is required to implement only this function, there should be no code outside it.
The function should not call the input and print functions inside itself.

for example

d = {}
print(update_dictionary(d, 1, -1))   None
print(d)                             {2: [-1]}
update_dictionary(d, 2, -2)
print(d)                             {2: [-1, -2]}
update_dictionary(d, 1, -3)
print(d)                             {2: [-1, -2, -3]}
"""

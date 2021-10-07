# SCRAP

```python
"""

"""


def plus_one(digits):
    # Your code here
    new_string = ""
    for digit in digits:
        new_digit = str(digit)
        new_string += new_digit
    print(new_string)
    str_tonum = int(new_string)
    str_tonum = str_tonum + 1
    str_tonum = str(str_tonum)
    new_list = list(str_tonum)
    str_num = []
    for string in new_list:
        string = int(string)
        str_num.append(string)
    return str_num


print(plus_one([1, 3, 2]))
print(plus_one([3, 2, 1, 9]))
print(plus_one([9, 9, 9]))
# uper
# input an array of nums
# output an array of all the numbs togheter plus 1
# PLAN
# add numbs into a string
# make string into a number and add 1
# put it back into an array and return

```

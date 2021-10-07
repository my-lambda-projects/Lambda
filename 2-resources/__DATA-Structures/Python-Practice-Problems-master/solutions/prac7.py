# -*- coding: utf-8 -*-
"""


"""

input_str = input("Enter a list of elements: ")

list1 = [int(x) for x in input_str.split() if int(x) % 2 == 0]

print(list1)

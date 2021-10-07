# -*- coding: utf-8 -*-
"""


"""
import random

# importing 'random' tp generate random numbers

input_str = input("Enter a list of numbers: ")
list1 = input_str.split()

input_str = input("Enter another list of numbers: ")
list2 = input_str.split()

print("\nCommon elements: ")
if len(list1) > len(list2):
    list2 = list(dict.fromkeys(list2))
    for x in list2:
        if x in list1:
            print(x, end=" ")
else:
    list1 = list(dict.fromkeys(list1))
    for x in list1:
        if x in list2:
            print(x, end=" ")


# extra
n1 = int(input("Enter the length of first list: "))
list3 = []
count = 0
# generating n1 random numners and storing them in list3
while count < n1:
    list3.append(random.randrange(0, 11, 1))
    count += 1

print("First list: ", list3)

n2 = int(input("Enter the length of second list: "))
list4 = []
count = 0
# generating n2 random numners and storing them in list4
while count < n1:
    list4.append(random.randrange(0, 11, 1))
    count += 1

print("Second list: ", list4)

print("\nCommon elements: ")
if n1 > n2:
    list4 = list(dict.fromkeys(list4))
    for x in list4:
        if x in list3:
            print(x, end=" ")
else:
    list3 = list(dict.fromkeys(list3))
    for x in list3:
        if x in list4:
            print(x, end=" ")

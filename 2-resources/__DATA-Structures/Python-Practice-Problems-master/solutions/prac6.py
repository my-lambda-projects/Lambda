# -*- coding: utf-8 -*-
"""


"""
# using function
def reverse(string):
    str = ""
    for x in string:
        str = x + str
    return str


string = input("Enter a string: ")

if string == reverse(string):
    print(string + " is a palindrome.")
else:
    print(string + " is not a palindrome.")


# using reversed built-in function
def reverse(string):
    str = "".join(reversed(string))
    return str


string = input("Enter another string: ")

if string == reverse(string):
    print(string + " is a palindrome.")
else:
    print(string + " is not a palindrome.")

"""
A string can be reversed in other ways too. You can reverse a string using stack,
using recursion and using extended slice systex.

"""

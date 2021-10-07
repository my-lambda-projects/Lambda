# -*- coding: utf-8 -*-
"""

d
"""

# Create a program that asks the user to enter their name and their age.
# Print out a message addressed to them
# that tells them the year that they will turn 100 years old.
from datetime import date

name = input("What's you name? ")
age = int(input("What's your age? "))
current_year = date.today().year

if age >= 100:
    print(name + ", you have turned 100 in the year: ", current_year - (age - 100))
else:
    print(name + ", you will turn 100 in year: ", current_year + (100 - age))

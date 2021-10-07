# -*- coding: utf-8 -*-
"""

Ask the user for a number. Depending on whether the number is even or odd,
print out an appropriate message to the user.

Extras:
1.    If the number is a multiple of 4, print out a different message.
2.    Ask the user for two numbers: one number to check (call it num)
      and one number to divide by (check). If check divides evenly into num,
      tell that to the user.
      If not, print a different appropriate message.
"""

num1 = int(input("Enter a number: "))

if num1 % 4 == 0:
    print("The number is a multiple of 4.")
elif num1 % 2 == 0:
    print("The number is a Even number.")
else:
    print("The number is a Odd number.")

num = int(input("Again, enter a number: "))
check = int(input("Enter another number: "))
res = num / check

if type(res) == int:
    print(check, " divides evenly into ", num)
else:
    print(check, " doesn't divide evenly into ", num)

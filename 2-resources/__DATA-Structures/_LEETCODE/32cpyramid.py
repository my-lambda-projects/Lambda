""" 
32) c) Write a Python Program to print the following format

*
**
***
****
*****

"""


for i in range(1, 6):
    for j in range(1, i + 1):
        print("*", end="")
    print()

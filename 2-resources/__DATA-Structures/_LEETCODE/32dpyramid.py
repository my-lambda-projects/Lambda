""" 
32) d) Write a Python Program to print the following format


54321
5432
543
54
5

"""

num = 5

for i in range(num, 0, -1):
    for j in range(0, i):
        print(num, end="")
    num -= 1
    print()

""" 
32) e) Write a Python Program to print the following format


55555
4444
333
22
1

"""

num = 5

for i in range(num, 0, -1):
    for j in range(0, i):
        print(num, end="")
    num -= 1
    print()

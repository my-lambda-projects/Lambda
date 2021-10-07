""" 
32) b) Write a Python Program to print the following format

1
22
333
4444
55555

"""

for i in range(1, 6):
    for j in range(1, i + 1):
        print(i, end="")
    print()

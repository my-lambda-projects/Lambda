# -*- coding: utf-8 -*-
"""


"""


def fibonacci(n):
    print("1, 1, ", end="")
    count = 2
    first_num = 1
    sec_num = 1
    while count < n:
        sum = first_num + sec_num
        print(sum, end=", ")
        first_num = sec_num
        sec_num = sum
        count += 1


n = int(input("Enter the number of fibonacci number you want to generate: "))

fibonacci(n)

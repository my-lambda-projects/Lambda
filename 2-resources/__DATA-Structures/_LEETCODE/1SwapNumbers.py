# 1. Write a Python Program to Swap given numbers


def swapTwoNumbers(x, y):
    temp = x
    x = y
    y = temp

    print("Swapped value of x is : {}".format(x))
    print("Swapped value of y is : {}".format(y))


swapTwoNumbers(2, 3)
swapTwoNumbers(4, 3)

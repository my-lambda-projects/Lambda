# -*- coding: utf-8 -*-
"""


"""

from math import sqrt

# function to get the largest of the closest factors of a number
def getClosestFactors(n):
    res = 0
    if n == 1:
        return 1
    else:
        for a in range(2, n - 1):
            b = n / a
            if n % a == 0 and b >= a:
                res = int(b)
    return res


# function to check a number is prime or not
def isPrime(n):
    for i in range(2, n - 1):
        if n % i == 0:
            return False
    return True


# function to check a number is perfect square or not
def isPerfectSquare(n):
    return n > -1 and sqrt(n) % 1 == 0


# driver code
n = int(input("Enter the number: "))
count = 0

print("\nThe steps to reach 1:")

while n != 1:
    print(n, end=" --> ")

    count += 1

    if isPerfectSquare(n):
        n = int(sqrt(n))
    elif isPrime(n) or isPerfectSquare(n - 1):
        n -= 1
    else:
        n = getClosestFactors(n)

print("1\n")

print("Smallest steps needed to reach '1' is : " + str(count))

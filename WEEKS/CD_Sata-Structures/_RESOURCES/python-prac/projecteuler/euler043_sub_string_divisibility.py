#!/usr/bin/env python
"""
Solution to Project Euler Problem 43
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

    d2d3d4=406 is divisible by 2
    d3d4d5=063 is divisible by 3
    d4d5d6=635 is divisible by 5
    d5d6d7=357 is divisible by 7
    d6d7d8=572 is divisible by 11
    d7d8d9=728 is divisible by 13
    d8d9d10=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.

"""
from primality import nth_prime
from digits import digits_upto
from itertools import permutations


def is_subdivisible(n):
    sn = str(n)
    for i in range(1, 8):
        if int(sn[i : i + 3]) % nth_prime(i):
            break
    else:
        return True


def subdivisible_pandigitals(k, i=0):
    digits = digits_upto(k, i)
    for p in permutations(digits):
        n = int("".join(p))
        if len(str(n)) != len(digits):
            continue
        if is_subdivisible(n):
            yield n


def test():
    assert is_subdivisible(1406357289)


def run():
    print(sum(subdivisible_pandigitals(9)))


if __name__ == "__main__":
    test()
    run()

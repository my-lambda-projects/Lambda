#!/usr/bin/env python
"""
Solution to Project Euler Problem 32
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

We shall say that an n-digit number is pandigital if it makes use of all the
digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1
through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity
can be written as a 1 through 9 pandigital.
HINT: Some products can be obtained in more than one way so be sure to only
include it once in your sum.
"""
from digits import is_pandigital
from digits import is_semi_pandigital
from digits import digits_downfrom


def is_pandigital_product(a, b, n, k=9):
    return is_pandigital(str(a) + str(b) + str(n))


def find_pandigital_products(k):
    upper = int(digits_downfrom(k, 1)[: -k // 2])
    for a in range(2, upper):
        if not is_semi_pandigital(a):
            continue
        for b in range(a, upper):
            n = a * b
            if n > upper:
                break
            if is_pandigital_product(a, b, n):
                yield (a, b, n)


def test():
    assert is_pandigital(978564231)
    assert is_pandigital(13452)
    assert is_semi_pandigital(543)
    assert not is_semi_pandigital(3543)


def run():
    print(sum(set(n for _a, _b, n in find_pandigital_products(9))))


if __name__ == "__main__":
    test()
    run()

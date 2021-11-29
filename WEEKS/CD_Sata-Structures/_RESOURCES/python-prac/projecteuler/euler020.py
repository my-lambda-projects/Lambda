#!/usr/bin/env python
"""
Solution to Project Euler Problem 20
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
"""
from series import factorial
from digits import digits


def sumdigits(n):
    return sum(digits(n))


def test():
    assert 27 == sumdigits(factorial(10))


def run():
    print(sumdigits(factorial(100)))


if __name__ == "__main__":
    test()
    run()

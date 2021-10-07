#!/usr/bin/env python
"""
Solution to Project Euler Problem 6
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten
natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one
hundred natural numbers and the square of the sum.
"""
from series import sum_of_squares, square_of_sum


def ssq_sqs_diff(m):
    return square_of_sum(m) - sum_of_squares(m)


def test():
    assert 2640 == ssq_sqs_diff(10)


def run():
    print(ssq_sqs_diff(100))


if __name__ == "__main__":
    test()
    run()

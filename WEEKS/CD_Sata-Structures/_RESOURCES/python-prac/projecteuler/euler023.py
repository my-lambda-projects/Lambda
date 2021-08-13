#!/usr/bin/env python
"""
Solution to Project Euler Problem 23
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


A perfect number is a number for which the sum of its proper divisors is
exactly equal to the number. For example, the sum of the proper divisors of 28
would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
number that can be written as the sum of two abundant numbers is 24. By
mathematical analysis, it can be shown that all integers greater than 28123
can be written as the sum of two abundant numbers. However, this upper limit
cannot be reduced any further by analysis even though it is known that the
greatest number that cannot be expressed as the sum of two abundant numbers
is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of
two abundant numbers.
"""
from factorization import divisors


def is_abundant(x):
    return 2 * x < sum(divisors(x))


def not_sum_of_abundants(m):
    abundant = [x for x in range(2, m + 1) if is_abundant(x)]
    sum_of_abundant = {a + b for i, a in enumerate(abundant) for b in abundant[i:]}
    return (x for x in range(1, m + 1) if x not in sum_of_abundant)


def test():
    assert set(range(1, 30)) - {24} == set(not_sum_of_abundants(30))


def run():
    print(sum(not_sum_of_abundants(28123)))


if __name__ == "__main__":
    test()
    run()

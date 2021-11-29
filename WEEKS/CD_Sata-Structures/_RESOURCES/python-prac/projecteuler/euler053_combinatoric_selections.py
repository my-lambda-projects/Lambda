#!/usr/bin/env python
"""
Solution to Project Euler Problem 53
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Combinatoric selections

There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3 = 10.

In general,

nCr = n! / r!(n−r)! ,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.

It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are
greater than one-million?
"""
from math import factorial


def combinations_greater(nlimit, target_max):
    result = []
    for n in range(1, nlimit + 1):
        for r in range(2, n):
            combinations = factorial(n) // (factorial(r) * factorial(n - r))
            if combinations > target_max:
                result.append((n, r, combinations))
    return result


def test():
    assert [(5, 2, 10), (5, 3, 10)] == combinations_greater(5, 9)


def run():
    assert 4075 == len(combinations_greater(100, 10 ** 6))


if __name__ == "__main__":
    test()
    run()

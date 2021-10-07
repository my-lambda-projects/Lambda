#!/usr/bin/env python
"""
Solution to Project Euler Problem 9
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
"""

# Solve for b the system of equations
# a2 + b2 = c2
# a + b + c = 1000

from math import sqrt
from functools import reduce
from operator import __mul__


def pythagorean_triplet_that_sums(s):
    def solve_b(a):
        return s * (s // 2 - a) // (s - a)

    for a in range(1, s):
        b = solve_b(a)
        if b < a:
            break

        c = sqrt(a ** 2 + b ** 2)
        if c != int(c):
            continue
        c = int(c)

        #        print a, b, c, a + b + c
        if a + b + c == s:
            return (a, b, c)


def prod(q):
    return reduce(__mul__, q, 1)


def prod_of_pythagorean_triplet_that_sums(s):
    return prod(pythagorean_triplet_that_sums(s))


def test():
    assert 3 * 4 * 5 == prod_of_pythagorean_triplet_that_sums(3 + 4 + 5)


def run():
    print(prod_of_pythagorean_triplet_that_sums(1000))


if __name__ == "__main__":
    test()
    run()

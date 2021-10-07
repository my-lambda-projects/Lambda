#!/usr/bin/env python
"""
Solution to Project Euler Problem 24
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

A permutation is an ordered arrangement of objects. For example, 3124 is one
possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
are listed numerically or alphabetically, we call it lexicographic order. The
lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4,
5, 6, 7, 8 and 9?
"""
from itertools import permutations
from itertools import islice


def nth_element(iterable, n):
    return next(islice(iterable, n - 1, n))


def nth_permutation(digits, n):
    return "".join(nth_element(permutations(digits), n))


def test():
    assert "210" == nth_permutation("012", 6)


def run():
    print(nth_permutation("0123456789", 10 ** 6))


if __name__ == "__main__":
    test()
    run()

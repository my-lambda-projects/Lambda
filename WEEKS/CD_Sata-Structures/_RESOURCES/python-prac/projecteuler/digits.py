#!/usr/bin/env python
"""
Solution to Project Euler Problem
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Dealing with digits.
"""
from memoization import memoize


def seq2str(q):
    return "".join(str(c) for c in q)


def sdigits(n):
    return (c for c in str(n))


def digits(n):
    return (int(c) for c in str(n))


def sorted_digits(n):
    return tuple(sorted(digits(n)))


def last_k_digits(k, n):
    return n % (10 ** k)


@memoize
def digits_upto(k, i=0):
    return seq2str(range(i, min(k + 1, 10)))


def digits_downfrom(k, i=0):
    return seq2str(range(min(k + 1, 10), i, -1))


def sorted_digits_str(n):
    return seq2str(sorted(str(n)))


def is_semi_pandigital(n):
    s = str(n)
    return "0" not in s and len(s) == len(set(s))


def is_pandigital(n):
    d = str(n)
    return sorted(d) == list(digits_upto(len(d), 1))


def digit_rotations(n):
    d = str(n)
    for i in range(len(d)):
        yield int(d[i:] + d[:i])

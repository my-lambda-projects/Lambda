#!/usr/bin/env python
# -*- encoding:utf-8 -*-

"""
Solution to Project Euler Problem 51
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Prime digit replacements

By replacing the 1st digit of *3, it turns out that six of the nine possible
values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit
number is the first example having seven primes among the ten generated numbers,
yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently
56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent
 digits) with the same digit, is part of an eight prime value family.
"""
from collections import defaultdict
from itertools import compress
from digits import digits
from memoization import memoize
from primality import all_primes


def ibit_patterns_sized(n):
    for i in range(1, 2 ** n - 1):
        yield ("0" * n + bin(i)[2:])[-n:]


@memoize
def bit_patterns_sized(n):
    return tuple(ibit_patterns_sized(n))


@memoize
def bool_patterns_sized(n):
    def bit2bool(pat):
        return tuple(i == "1" for i in pat)

    return tuple(bit2bool(pat) for pat in ibit_patterns_sized(n))


def pattern_applies(pat, d):
    return 1 == len(set(compress(d, pat)))


def pattern_filter(pat, d):
    return tuple(None if p else d for p, d in zip(pat, d))


def patterns_from(n):
    d = tuple(digits(n))
    for pat in bool_patterns_sized(len(d)):
        if pattern_applies(pat, d):
            yield pattern_filter(pat, d)


def longest_family_sized(target_len, ndigits=None):
    longest_family = []
    families = defaultdict(list)
    for p in all_primes():
        if ndigits and len(str(p)) < ndigits:
            continue
        if ndigits and len(str(p)) > ndigits:
            break
        for pat in patterns_from(p):
            family = families[pat]
            family.append(p)
            if len(family) > len(longest_family):
                longest_family = family
            families[pat] = family
        if len(longest_family) >= target_len:
            break
    return longest_family


def test():
    l6 = longest_family_sized(6, 2)
    assert l6 == [13, 23, 43, 53, 73, 83]
    l7 = longest_family_sized(7)
    assert l7 == [56003, 56113, 56333, 56443, 56663, 56773, 56993]


def run():
    assert 121313 == longest_family_sized(8)[0]


if __name__ == "__main__":
    test()
    run()

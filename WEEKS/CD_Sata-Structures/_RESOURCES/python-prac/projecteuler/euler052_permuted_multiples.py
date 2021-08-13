#!/usr/bin/env python
"""
Solution to Project Euler Problem 52
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Permuted multiples

It can be seen that the number, 125874, and its double, 251748, contain
exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x,
contain the same digits.
"""
from itertools import count
from digits import sorted_digits


def same_digits_in_multiples(multiples):
    for i in count(100000):
        idigits = sorted_digits(i)
        result = [i]
        for j in multiples:
            m = i * j
            jdigits = sorted_digits(m)
            if jdigits != idigits:
                break
            result.append(m)
        else:
            return result


def test():
    assert [125874, 251748] == same_digits_in_multiples([2])


def run():
    assert 142857 == same_digits_in_multiples([2, 3, 4, 5, 6])[0]


if __name__ == "__main__":
    test()
    run()

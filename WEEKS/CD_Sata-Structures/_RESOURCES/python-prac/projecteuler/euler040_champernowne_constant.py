#!/usr/bin/env python
"""
Solution to Project Euler Problem 40
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

"""
from itertools import count
from functools import reduce
from operator import mul


def counting_digits():
    for number in count(1):
        for digit in str(number):
            yield digit


def select_digits(selectors):
    s = list(sorted(selectors))
    for i, d in enumerate(counting_digits(), start=1):
        if not s:
            break
        if i >= s[0]:
            if i == s[0]:
                yield int(d)
            s = s[1:]


def test():
    assert [1] == list(select_digits([12]))


def run():
    sel = [10 ** i for i in range(6 + 1)]
    print(reduce(mul, (c for c in select_digits(sel)), 1))


if __name__ == "__main__":
    test()
    run()

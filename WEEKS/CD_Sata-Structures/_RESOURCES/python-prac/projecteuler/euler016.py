#!/usr/bin/env python
"""
Solution to Project Euler Problem 16
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
"""


def sum_pow2_digist(e):
    return sum(int(c) for c in str(2 ** e) if c)


def test():
    assert 26 == sum_pow2_digist(15)


def run():
    print(sum_pow2_digist(1000))


if __name__ == "__main__":
    test()
    run()

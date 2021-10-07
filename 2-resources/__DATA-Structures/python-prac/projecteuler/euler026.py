#!/usr/bin/env python
"""
Solution to Project Euler Problem 26
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


A unit fraction contains 1 in the numerator. The decimal representation of the
unit fractions with denominators 2 to 10 are given:

    1/2 =   0.5
    1/3 =   0.(3)
    1/4 =   0.25
    1/5 =   0.2
    1/6 =   0.1(6)
    1/7 =   0.(142857)
    1/8 =   0.125
    1/9 =   0.(1)
    1/10    =   0.1

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle
in its decimal fraction part.
"""


def long_division_pattern(d):
    seen = {}
    r = 1
    k = 0
    while r:
        k += 1
        seen[r] = k
        r = r * 10 % d
        if r in seen:
            return k - seen[r]
    return 0


def find_longest_recurring(m):
    return max((long_division_pattern(i), i) for i in range(2, m))


def test():
    assert 7 == find_longest_recurring(10)[1]


def run():
    print(find_longest_recurring(1000)[1])


if __name__ == "__main__":
    test()
    run()

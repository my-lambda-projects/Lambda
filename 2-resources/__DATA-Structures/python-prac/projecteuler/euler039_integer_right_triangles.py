#!/usr/bin/env python
"""
Solution to Project Euler Problem
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


"""
from math import sqrt
from collections import defaultdict


def perimeter_combinations_for(limit):
    perims = defaultdict(set)
    for a in range(1, limit // 2):
        for b in range(1, limit - a - 1):
            c = sqrt(a ** 2 + b ** 2)
            p = int(a + b + c)
            if p >= limit:
                break
            elif c == int(c):
                c = int(c)
                triangle = tuple(sorted((a, b, c)))
                perims[p].add(triangle)
    return perims


def test():
    combs = {(20, 48, 52), (24, 45, 51), (30, 40, 50)}
    assert combs == perimeter_combinations_for(125)[120]


def run():
    print(max((len(s), p) for p, s in perimeter_combinations_for(1001).items())[1])


if __name__ == "__main__":
    test()
    run()

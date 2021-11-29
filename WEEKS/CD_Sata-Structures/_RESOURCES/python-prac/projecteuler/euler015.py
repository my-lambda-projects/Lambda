#!/usr/bin/env python
"""
Solution to Project Euler Problem 15
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Starting in the top left corner of a 2×2 grid, there are 6 routes (without backtracking) to the bottom right corner.

How many routes are there through a 20×20 grid?
"""

__seen = {}


def count_routes(n, m):
    if n == 0 or m == 0:
        return 1

    if (n, m) in __seen:
        return __seen[(n, m)]

    if n == m:
        result = 2 * count_routes(n, m - 1)
    else:
        result = count_routes(n - 1, m) + count_routes(n, m - 1)
    __seen[(n, m)] = result
    __seen[(m, n)] = result
    return result


def test():
    assert 6 == count_routes(2, 2)


def run():
    print(count_routes(20, 20))


if __name__ == "__main__":
    test()
    run()

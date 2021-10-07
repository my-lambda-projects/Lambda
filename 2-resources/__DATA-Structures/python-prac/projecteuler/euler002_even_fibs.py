#!/usr/bin/env python

"""
Solution to Project Euler Problem 2
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

The sum of the fibonacci numbers less than 4000000
"""
from series import all_fibs


def even_fibs(m):
    return (f for f in all_fibs(m) if f % 2 == 0)


def test():
    assert 10 == sum(even_fibs(10))


def run():
    print(sum(even_fibs(4 * 10 ** 6)))


if __name__ == "__main__":
    test()
    run()

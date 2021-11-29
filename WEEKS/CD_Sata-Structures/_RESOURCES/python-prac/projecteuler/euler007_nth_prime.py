#!/usr/bin/env python

"""
Solution to Project Euler Problem 7
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.

What is the 10001st prime number?
"""
from primality import nth_prime


def test():
    assert 13 == nth_prime(6)


def run():
    print(nth_prime(10001))


if __name__ == "__main__":
    test()
    run()

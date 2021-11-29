#!/usr/bin/env python
"""
Solution to Project Euler Problem 35
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


The number, 197, is called a circular prime because all digit_rotations of the digits:
197, 971, and 719, are themselves prime.

There are thirteen such primes below 100:

2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
"""
from primality import is_prime, primes_upto
from digits import digit_rotations


def is_circular_prime(n):
    return "0" not in str(n) and all(is_prime(r) for r in digit_rotations(n))


def count_circular_primes(m):
    return sum(is_circular_prime(n) for n in primes_upto(m))


def test():
    assert [197, 971, 719] == list(digit_rotations(197))
    assert is_circular_prime(197)
    assert 13 == count_circular_primes(10 ** 2)


def run():
    print(count_circular_primes(10 ** 6))


if __name__ == "__main__":
    test()
    run()

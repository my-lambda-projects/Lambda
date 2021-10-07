#!/usr/bin/env python
"""
Solution to Project Euler Problem 37
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


"""
from primality import is_prime, primes_upto
from memoization import memoize


TRUNCATABLE_PRIMES = {23, 37, 53, 73}


@memoize
def is_left_prime(n):
    s = str(n)
    while s:
        n = int(s)
        if not is_prime(n):
            return False
        elif n in TRUNCATABLE_PRIMES:
            return True
        s = s[1:]
    return True


@memoize
def is_right_prime(n):
    s = str(n)
    while s:
        n = int(s)
        if not is_prime(n):
            return False
        elif n in TRUNCATABLE_PRIMES:
            return True
        s = s[:-1]
    return True


def truncatable_primes(m):
    for p in primes_upto(m):
        if p < 11 or p in TRUNCATABLE_PRIMES:
            continue
        if is_left_prime(p) and is_right_prime(p):
            TRUNCATABLE_PRIMES.add(p)
    return TRUNCATABLE_PRIMES


def test():
    assert is_prime(73)
    assert is_prime(97)
    assert is_prime(3797)
    assert is_left_prime(3797)
    assert is_right_prime(3797)
    assert {3137, 37, 73, 797, 3797, 53, 23, 313, 317, 373} == truncatable_primes(
        10 ** 4
    )


def run():
    print(sum(truncatable_primes(10 ** 6)))


if __name__ == "__main__":
    test()
    run()

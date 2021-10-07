#!/usr/bin/env python
"""
Solution to Project Euler Problem
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


We shall say that an n-digit number is pandigital if it makes use of all
the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital
and is also prime.

What is the largest n-digit pandigital prime that exists?
"""
from digits import is_pandigital
from primality import primes_upto, is_prime


def pandigital_primes(digits=7):
    for p in primes_upto(int("9" * digits)):
        if is_pandigital(p):
            yield p


def test():
    assert not is_prime(123)
    assert not is_prime(132)
    assert not is_prime(213)
    assert not is_prime(231)
    assert not is_prime(312)
    assert not is_prime(321)
    assert is_prime(2143)
    assert is_pandigital(2143)
    assert 2143 in set(pandigital_primes(digits=4))


def run():
    print(list(pandigital_primes())[-1])


if __name__ == "__main__":
    test()
    run()

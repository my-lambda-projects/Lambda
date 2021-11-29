#!/usr/bin/env python
"""
Solution to Project Euler Problem 50
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Consecutive Prime Sum

The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds to a prime below
one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a
prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most
consecutive primes?
"""
from primality import primes_upto
from primality import is_prime


def consecutive_primes_that_sum_prime(limit):
    primes = list(primes_upto(limit))
    while primes[0] + primes[-1] > limit:
        del primes[-1]

    for n in range(len(primes), 2, -1):
        s = sum(primes[:n])
        for i in range(len(primes) - n):
            if s > limit:
                break
            elif is_prime(s):
                return s, n
            else:
                s += primes[i + n] - primes[i]


def test():
    assert (41, 6) == consecutive_primes_that_sum_prime(10 ** 2)


def run():
    assert 997651 == consecutive_primes_that_sum_prime(10 ** 6)[0]


if __name__ == "__main__":
    test()
    run()

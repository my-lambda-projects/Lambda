#!/usr/bin/env python
"""
Solution to Project Euler Problem 10
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
"""
from primality import all_primes


def sum_primes(up_to):
    result = 0
    for p in all_primes():
        if p > up_to:
            break
        result += p
    return result


def test():
    assert 17 == sum_primes(10)


def run():
    print(sum_primes(2 * 10 ** 6))


if __name__ == "__main__":
    test()
    run()

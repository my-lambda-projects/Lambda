#!/usr/bin/env python
"""
Solution to Project Euler Problem 46
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

It was proposed by Christian Goldbach that every odd composite number can be
written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime
and twice a square?
"""
from math import sqrt
from itertools import count
from primality import is_prime, primes_upto


def odd_composites(upfrom=4):
    for n in count(upfrom):
        if n % 2 and not is_prime(n):
            yield n


def is_prime_plus_2square(n):
    for p in primes_upto(n):
        c = sqrt((n - p) // 2)
        if c == int(c):
            return True


def first_non_prime_plus_2square():
    for n in odd_composites():
        if not is_prime_plus_2square(n):
            return n


def test():
    assert is_prime_plus_2square(9)
    assert is_prime_plus_2square(15)
    assert is_prime_plus_2square(21)
    assert is_prime_plus_2square(25)
    assert is_prime_plus_2square(27)
    assert is_prime_plus_2square(33)


def run():
    print(first_non_prime_plus_2square())


if __name__ == "__main__":
    test()
    run()

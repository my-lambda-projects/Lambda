#!/usr/bin/env python
"""
Solutions to Project Euler Problems
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Factorization.
"""
import fractions
import functools
import itertools
from math import sqrt


def factor(n, m):
    k = 0
    while n >= m:
        d, r = divmod(n, m)
        if r:
            break
        n = d
        k += 1
    return (n, m, k)


def prime_factors(n):
    if n < 2:
        return

    if n % 2 == 0:
        yield 2
        yield from prime_factors(n // 2)
        return

    for p in range(3, int(sqrt(n)) + 1, 2):
        quotient, remainder = divmod(n, p)
        if remainder:
            continue
        else:
            yield p
            yield from prime_factors(quotient)
            break
    else:
        yield n


def factors(n):
    return ((k, len(list(g))) for k, g in itertools.groupby(prime_factors(n)))


def first_factor(n):
    return next(factors(n))[0]


def is_prime(n):
    return n == first_factor(n)


def factor_count(n, upto=None):
    s = 0
    for _, k in factors(n):
        s += k
        if upto and s > upto:
            break
    return s


def gcd(*numbers):
    return functools.reduce(fractions.gcd, numbers)


def lcm(*numbers):
    def _lcm(a, b):
        return (a * b) // gcd(a, b)

    return functools.reduce(_lcm, numbers, 1)


def multiples(factor_list):
    if not factor_list:
        yield 1
    else:
        n, k = factor_list[0]
        for j in multiples(factor_list[1:]):
            for i in range(1, k + 1):
                yield n ** i * j


def divisors(t):
    f = list(factors(t))
    for s in range(len(f) + 1):
        for c in itertools.combinations(f, s):
            for m in multiples(c):
                yield m


if __name__ == "__main__":

    def list_factors(n):
        print(n, list(factors(n)))

    list_factors(4)
    list_factors(7)
    list_factors(27)
    list_factors(30)
    list_factors(100)
    list_factors(131)
    list_factors(64 * 3 * 5)

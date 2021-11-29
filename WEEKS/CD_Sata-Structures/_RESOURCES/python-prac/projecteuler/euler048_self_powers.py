#!/usr/bin/env python
"""
Solution to Project Euler Problem 48
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Self Powers

The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
"""
from digits import last_k_digits


def n_digits_from_power(k, n):
    p = 1
    for _ in range(n):
        p = last_k_digits(k, p * n)
    return p


def n_digits_from_sum_of_powers(k, p):
    return last_k_digits(k, sum(n_digits_from_power(k, i) for i in range(1, p + 1)))


def test():
    assert 10405071317 == n_digits_from_sum_of_powers(15, 10)


def run():
    assert 9110846700 == n_digits_from_sum_of_powers(10, 1000)


if __name__ == "__main__":
    test()
    run()

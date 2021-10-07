#!/usr/bin/env python
"""
Solution to Project Euler Problem 14
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
"""


__count = {1: 1}


def next_collaz(n):
    if n % 2:
        return 3 * n + 1
    else:
        return n // 2


def collaz_seq_len(n):
    if n not in __count:
        __count[n] = 1 + collaz_seq_len(next_collaz(n))
    return __count[n]


def max_collaz_seq_len(limit):
    m = 0
    n = 0
    for i in range(1, limit):
        c = collaz_seq_len(i)
        if c < m:
            continue

        m = c
        n = i
    return (n, m)


def test():
    assert 10 == collaz_seq_len(13)


def run():
    print(max_collaz_seq_len(10 ** 6))


if __name__ == "__main__":
    test()
    run()

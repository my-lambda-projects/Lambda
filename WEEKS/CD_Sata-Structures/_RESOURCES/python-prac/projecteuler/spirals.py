#!/usr/bin/env python
"""
Solutions to Project Euler Problems
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Spirals.
"""
from itertools import count


def spiral_diagonal_numbers():
    yield 1, 1, 0
    number = 1
    for r in count(1):
        side = 2 * r
        for diag_no in range(4):
            number += side
            yield number, side + 1, diag_no


def spiral_diagonal_numbers_upto(n):
    numbers = spiral_diagonal_numbers()
    for _ in range(n):
        yield next(numbers)


def n_diagonal_for_side(m):
    return 1 + 4 * (m - 1) // 2

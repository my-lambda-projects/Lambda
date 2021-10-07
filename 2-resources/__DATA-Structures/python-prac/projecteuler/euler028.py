#!/usr/bin/env python
"""
Solution to Project Euler Problem 28
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Starting with the number 1 and moving to the right in a clockwise direction a
5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed
in the same way?
"""
from spirals import spiral_diagonal_numbers_upto
from spirals import n_diagonal_for_side


def spiral_diagonal_numbers_upto_side(m):
    count = n_diagonal_for_side(m)
    return (n for n, _i, _ in spiral_diagonal_numbers_upto(count))


def spiral_diagonal_sum(m):
    return sum(spiral_diagonal_numbers_upto_side(m))


def test():
    diagsin5 = [1, 3, 5, 7, 9, 13, 17, 21, 25]
    assert diagsin5 == list(spiral_diagonal_numbers_upto_side(5))
    assert 101 == spiral_diagonal_sum(5)


def run():
    print(spiral_diagonal_sum(1001))


if __name__ == "__main__":
    test()
    run()

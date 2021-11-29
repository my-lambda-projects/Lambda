#!/usr/bin/env python
"""
Solution to Project Euler Problem 81
https://projecteuler.net/problem=81

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom
right, by only moving to the right and down, is indicated in bold red and is
equal to 2427.


131	673	234	103	18
201	96	342	965	150
630	803	746	422	111
537	699	497	121	956
805	732	524	37	331

Find the minimal path sum, in matrix.txt (right click and 'Save Link/Target
As...'), a 31K text file containing a 80 by 80 matrix, from the top left to the
bottom right by only moving right and down.
"""
from pathlib import Path
from copy import deepcopy
import csv


FILENAME = Path(__file__).parent / "../data/matrix.txt"


MATRIX = [[int(c) for c in line] for line in csv.reader(open(FILENAME))]


TEST_DATA = [
    [131, 673, 234, 103, 18],
    [201, 96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37, 331],
]


def reduce_min_path(matrix, reducer=min):
    T = deepcopy(matrix)
    ibot = len(T) - 1
    # reduce the right column moving down
    for i in range(ibot - 1, -1, -1):
        if len(T[i + 1]) < len(T[i]):
            continue
        j = len(T[i]) - 1
        T[i][j] += T[i + 1][j]
    # reduce the bottom row moving right
    for j in range(len(T[ibot]) - 2, -1, -1):
        T[ibot][j] += T[ibot][j + 1]
    # reduce the rest of the matrix
    for i in range(ibot - 1, -1, -1):
        for j in range(len(T[i]) - 2, -1, -1):
            T[i][j] += reducer(T[i + 1][j], T[i][j + 1])
    return T[0][0]


def test():
    assert 2427 == reduce_min_path(TEST_DATA)


def run():
    assert 427337 == reduce_min_path(MATRIX)


if __name__ == "__main__":
    test()
    run()

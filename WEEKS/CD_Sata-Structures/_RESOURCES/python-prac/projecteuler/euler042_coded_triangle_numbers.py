#!/usr/bin/env python
"""
Solution to Project Euler Problem 22
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

"""
import csv
from pathlib import Path
from words import alphabetical_value
from series import is_triangle


FILENAME = Path(__file__).parent / "../data/words.txt"


def count_triangle_words(names):
    return sum(1 for w in names if is_triangle(alphabetical_value(w)))


def test():
    assert 55 == alphabetical_value("SKY")
    assert is_triangle(55)


def run():
    names = next(csv.reader(open(FILENAME)))
    print(count_triangle_words(names))


if __name__ == "__main__":
    test()
    run()

#!/usr/bin/env python
"""
Solution to Project Euler Problem 22
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
containing over five-thousand first names, begin by sorting it into alphabetical
order. Then working out the alphabetical value for each name,
multiply this value by its alphabetical position in the list to obtain
a name score.

For example, when the list is sorted into alphabetical order,
COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th
name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
"""
import csv
from pathlib import Path
from words import alphabetical_value

FILENAME = Path(__file__).parent / "../data/names.txt"
NAMES = sorted(next(csv.reader(open(FILENAME))))


def sum_alphabetical_values(names):
    return sum(i * alphabetical_value(s) for i, s in enumerate(names, start=1))


def test():
    name = NAMES[938 - 1]
    assert "COLIN" == name
    assert 53 == alphabetical_value(name)


def run():
    print(sum_alphabetical_values(NAMES))


if __name__ == "__main__":
    test()
    run()

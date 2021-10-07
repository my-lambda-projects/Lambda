#!/usr/bin/env python
"""
Solution to Project Euler Problem 19
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

You are given the following information, but you may prefer to do some research
for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century
    unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century
(1 Jan 1901 to 31 Dec 2000)?
"""
from datetime import date


def withdates():
    return sum(
        date(y, m, 1).isoweekday() == 7
        for y in range(1901, 2000 + 1)
        for m in range(1, 12 + 1)
    )


def test():
    pass


def run():
    print(withdates())


if __name__ == "__main__":
    test()
    run()

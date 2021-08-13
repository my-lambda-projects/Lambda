#!/usr/bin/env python
"""
Solution to Project Euler Problem 25
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

Hence the first 12 terms will be:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
"""
from series import all_fibs


def first_fib_with_len(n):
    for i, f in enumerate(all_fibs(), start=1):
        if len(str(f)) >= n:
            return i


def test():
    assert 12 == first_fib_with_len(3)


def run():
    print(first_fib_with_len(1000))


if __name__ == "__main__":
    test()
    run()

#!/usr/bin/env python
"""
Solution to Project Euler Problem 36
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in
base 10 and base 2.

(Please note that the palindromic number, in either base, may not include
leading zeros.)
"""
from palindromes import is_palindrome


def to_binary(n):
    return "{:b}".format(n)


def dec_and_bin_palindromes(m):
    for n in range(1, m):
        if is_palindrome(n) and is_palindrome(to_binary(n)):
            yield n


def sum_dec_and_bin_palindromes(m):
    return sum(x for x in dec_and_bin_palindromes(m))


def test():
    assert is_palindrome(585) and is_palindrome(to_binary(585))


def run():
    print(sum_dec_and_bin_palindromes(10 ** 6))


if __name__ == "__main__":
    test()
    run()

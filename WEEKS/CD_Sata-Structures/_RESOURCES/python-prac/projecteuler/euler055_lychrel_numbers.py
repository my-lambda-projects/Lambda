#!/usr/bin/env python
"""
Solution to Project Euler Problem 55
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Lychrel numbers

If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly. For example,

349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 196,
never produce a palindrome. A number that never forms a palindrome through the
reverse and add process is called a Lychrel number. Due to the theoretical
nature of these numbers, and for the purpose of this problem, we shall assume
that a number is Lychrel until proven otherwise. In addition you are given that
for every number below ten-thousand, it will either (i) become a palindrome in
less than fifty iterations, or, (ii) no one, with all the computing power that
exists, has managed so far to map it to a palindrome. In fact, 10677 is the
first number to be shown to require over fifty iterations before producing a
palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers;
the first example is 4994.

How many Lychrel numbers are there below ten-thousand?
"""
from palindromes import is_palindrome


LIKELY_LYCHREL_ITERATIONS = 50


def is_likely_lychrel(n):
    def reverse_int(n):
        return int(str(n)[::-1])

    for _ in range(LIKELY_LYCHREL_ITERATIONS):
        n = n + reverse_int(n)
        if is_palindrome(n):
            return False
    return True


def count_likely_lychrels(upto):
    return sum(is_likely_lychrel(n) for n in range(1, upto))


def test():
    assert not is_likely_lychrel(47)
    assert is_likely_lychrel(10677)
    assert is_likely_lychrel(4994)


def run():
    assert 249 == count_likely_lychrels(upto=10000)


if __name__ == "__main__":
    test()
    run()

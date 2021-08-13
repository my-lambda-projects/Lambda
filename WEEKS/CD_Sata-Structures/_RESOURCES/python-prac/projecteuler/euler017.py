#!/usr/bin/env python
"""
Solution to Project Euler Problem 17
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

If the numbers 1 to 5 are written out in words: one, two, three, four, five,
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in
 words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
letters. The use of "and" when writing out numbers is in compliance with British
usage.
"""
from numberwords import num2words


def num2only_letters(n):
    return "".join(c for c in num2words(n) if c.isalpha())


def sum_word_len(n):
    return sum(len(num2only_letters(i)) for i in range(1, n + 1))


def test():
    assert "five" == num2words(5)
    assert 19 == sum_word_len(5)

    assert "one hundred and fifteen" == num2words(115)
    assert 20 == len(num2only_letters(115)), len(num2only_letters(115))

    assert "three hundred and forty-two" == num2words(342)
    assert 23 == len(num2only_letters(342)), len(num2only_letters(342))


def run():
    print(sum_word_len(1000))


if __name__ == "__main__":
    test()
    run()

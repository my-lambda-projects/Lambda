#!/usr/bin/env python
"""
Solution to Project Euler Problem 38
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Take the number 192 and multiply it by each of 1, 2, and 3:

    192 × 1 = 192
    192 × 2 = 384
    192 × 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

"""
from itertools import count
from digits import is_pandigital
from digits import is_semi_pandigital


def concatenated_product(n, k):
    return "".join(str(n * i) for i in range(1, k + 1))


def largest_pandigital_concatenated_product():
    top = 1
    for n in range(1, int("9" * 5)):
        if not is_semi_pandigital(n):
            continue
        cprod = str(n)
        for k in count(2):
            next = str(n * k)
            cprod += next
            if len(cprod) > 9 or not is_semi_pandigital(next):
                break
            elif len(cprod) < 9:
                continue
            elif is_pandigital(cprod) and int(cprod) > top:
                top = int(cprod)
    return top


def test():
    assert "192384576" == concatenated_product(192, 3), concatenated_product(192, 3)
    assert "918273645" == concatenated_product(9, 5)
    assert is_pandigital(concatenated_product(9, 5))


def run():
    print(largest_pandigital_concatenated_product())


if __name__ == "__main__":
    test()
    run()

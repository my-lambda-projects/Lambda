#!/usr/bin/env python
# -*- encoding:utf-8 -*-

"""
Solution to Project Euler Problem
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike 
http://creativecommons.org/licenses/by-sa/3.0/

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13  62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?
"""
from spirals import spiral_diagonal_numbers
from primality import is_prime

def find_sides_for_prime_ratio(target_ratio, min_side_len=0):
    numbers = spiral_diagonal_numbers()
    numbers.next()
    count = 1
    primes = 0
    ratio = 0.0
    while True:
        for _ in xrange(4):
            n, side_len, _ = numbers.next()
            count += 1
            if is_prime(n):
                primes += 1
        ratio = primes/float(count)
        if ratio < target_ratio and side_len >= min_side_len:
            return side_len, ratio, primes, count

def test():
    assert 0.62 == round(find_sides_for_prime_ratio(0.62, 7)[1], 2)

def run():
    print find_sides_for_prime_ratio(0.10)

if __name__ == '__main__':
    test()
    run()

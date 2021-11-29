#!/usr/bin/env python
# -*- encoding:utf-8 -*-

"""
Solution to Project Euler Problem 56
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike 
http://creativecommons.org/licenses/by-sa/3.0/


A googol (10**100) is a massive number: one followed by one-hundred zeros; 100**100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a**b, where a, b  100, what is the maximum digital sum?
"""
from digits import digits

def sumdigits(n):
    return sum(digits(n))

def max_digit_sum(alimit, blimit):
    result = 0
    amax = 0
    bmax = 0
    for a in xrange(2,alimit):
        for b in xrange(2,blimit):
            s = sumdigits(a**b)
            if s > result:
                result = s
                amax = a
                bmax = b
    return result, amax, bmax

def test():
    assert 1 == sumdigits(100**100)
    assert (45, 9, 7)  == max_digit_sum(10,10)

def run():
    print max_digit_sum(100,100)

if __name__ == '__main__':
    test()
    run()

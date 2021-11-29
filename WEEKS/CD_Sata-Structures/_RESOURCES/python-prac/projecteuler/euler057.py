#!/usr/bin/env python
# -*- encoding:utf-8 -*-

"""
Solution to Project Euler Problem 57
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike 
http://creativecommons.org/licenses/by-sa/3.0/

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...

By expanding this for the first four iterations, we get:

1 + 1/2 = 3/2 = 1.5
1 + 1/(2 + 1/2) = 7/5 = 1.4
1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?
"""
from fractions import Fraction as frac

def root2_continued_fraction(iters):
    a = 1
    for _ in xrange(iters):
        a = 1 + frac(1, 1+a)
        yield a

def dlen(n):
    return len(str(n))

def test():
    first4 = [frac(3,2),frac(7,5),frac(17,12),frac(41,29)]
    assert first4 == list(root2_continued_fraction(4))

def run():
    expansion = root2_continued_fraction(1000)
    print sum(dlen(f.numerator) > dlen(f.denominator) for f in expansion)

if __name__ == '__main__':
    test()
    run()

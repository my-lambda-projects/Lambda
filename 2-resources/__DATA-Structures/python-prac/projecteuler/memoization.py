"""
Solution to Project Euler Problem
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/

Memoization.
"""
from functools import lru_cache


def memoize(fun):
    return lru_cache(None)(fun)

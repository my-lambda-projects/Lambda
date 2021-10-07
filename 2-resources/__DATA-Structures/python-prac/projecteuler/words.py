#!/usr/bin/env python

"""
Solutions to Project Euler Problems
http://projecteuler.net/

by Apalala <apalala@gmail.com>
(cc) Attribution-ShareAlike
http://creativecommons.org/licenses/by-sa/3.0/


"""


def alphabetical_value(s):
    return sum(1 + ord(c) - ord("A") for c in s)

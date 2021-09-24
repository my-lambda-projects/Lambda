#!/usr/bin/env python
# encoding: utf-8
#
#
"""
"""

# end_pymotw_header


def recurse(level):
    print("recurse({})".format(level))
    if level:
        recurse(level - 1)


def not_called():
    print("This function is never called.")

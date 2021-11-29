# -*- coding: utf-8 -*-
"""


"""
import sys


def assignHoles(mice, holes):
    max = -sys.maxsize

    if len(mice) != len(holes):
        return -1
    else:
        mice.sort()
        holes.sort()

        for i in range(0, len(mice) - 1):
            if max < abs(mice[i] - holes[i]):
                max = abs(mice[i] - holes[i])
        return max


# testing
assert assignHoles(mice=[1, 4, 9, 15], holes=[10, -5, 0, 16]) == 6

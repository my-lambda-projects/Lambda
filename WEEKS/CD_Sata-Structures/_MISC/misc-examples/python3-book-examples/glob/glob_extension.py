#!/usr/bin/env python3
#
# Copyright 2007 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#


"""
Using glob to find files matching a pattern with a filename
extension.
"""

# end_pymotw_header
import glob

for name in sorted(glob.glob("*.py")):
    print(name)

#!/usr/bin/env python3
#
# Copyright 2007 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#


"""The asterisk as wildcard character.
"""

# end_pymotw_header
import glob

specials = "?*["

for char in specials:
    pattern = "dir/*" + glob.escape(char) + ".txt"
    print("Searching for: {!r}".format(pattern))
    for name in sorted(glob.glob(pattern)):
        print(name)
    print()

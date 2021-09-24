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

for name in sorted(glob.glob("dir/*")):
    print(name)

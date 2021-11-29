#!/usr/bin/env python3
#
# Copyright 2007 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#


"""Example expansion of question mark wild card.
"""

# end_pymotw_header
import glob

for name in sorted(glob.glob("dir/file?.txt")):
    print(name)

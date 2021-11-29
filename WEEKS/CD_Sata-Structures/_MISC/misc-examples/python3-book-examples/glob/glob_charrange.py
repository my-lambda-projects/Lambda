#!/usr/bin/env python3
#
# Copyright 2007 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#


"""Using character range in patterns.
"""

# end_pymotw_header
import glob

for name in sorted(glob.glob("dir/*[0-9].*")):
    print(name)

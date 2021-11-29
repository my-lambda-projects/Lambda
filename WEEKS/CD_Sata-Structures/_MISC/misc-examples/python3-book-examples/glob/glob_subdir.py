#!/usr/bin/env python3
#
# Copyright 2007 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#


"""Listing files in a subdirectory.
"""

# end_pymotw_header
import glob

print("Named explicitly:")
for name in sorted(glob.glob("dir/subdir/*")):
    print("  {}".format(name))

print("Named with wildcard:")
for name in sorted(glob.glob("dir/*/*")):
    print("  {}".format(name))

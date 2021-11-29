# Copyright 2009 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#

#
"""
"""

# end_pymotw_header
import grp
import os

filename = "grp_getgrgid_fileowner.py"
stat_info = os.stat(filename)
owner = grp.getgrgid(stat_info.st_gid).gr_name

print("{} is owned by {} ({})".format(filename, owner, stat_info.st_gid))

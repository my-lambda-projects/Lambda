# Copyright 2013 Doug Hellmann.
#
#
#                         All Rights Reserved
#

#

#

# end_pymotw_header
import pwd
import os

filename = "pwd_getpwuid_fileowner.py"
stat_info = os.stat(filename)
owner = pwd.getpwuid(stat_info.st_uid).pw_name

print("{} is owned by {} ({})".format(filename, owner, stat_info.st_uid))

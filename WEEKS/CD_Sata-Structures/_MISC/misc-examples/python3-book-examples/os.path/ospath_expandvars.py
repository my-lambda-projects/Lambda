#
"""Expand shell variables in filenames.
"""


# end_pymotw_header
import os.path
import os

os.environ["MYVAR"] = "VALUE"

print(os.path.expandvars("/path/to/$MYVAR"))

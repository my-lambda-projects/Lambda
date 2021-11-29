#
"""Compute an absolute path from a relative path.
"""


# end_pymotw_header
import os
import os.path

os.chdir("/usr")

PATHS = [".", "..", "./one/two/three", "../one/two/three"]

for path in PATHS:
    print("{!r:>21} : {!r}".format(path, os.path.abspath(path)))

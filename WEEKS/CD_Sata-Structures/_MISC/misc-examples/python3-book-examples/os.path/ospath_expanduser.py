#
"""Expand tilde in filenames.
"""


# end_pymotw_header
import os.path

for user in ["", "dhellmann", "nosuchuser"]:
    lookup = "~" + user
    print("{!r:>15} : {!r}".format(lookup, os.path.expanduser(lookup)))

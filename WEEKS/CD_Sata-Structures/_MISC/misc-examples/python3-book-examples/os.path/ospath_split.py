#
"""Separate a path into its directory and base components.
"""


# end_pymotw_header
import os.path

PATHS = ["/one/two/three", "/one/two/three/", "/", ".", ""]

for path in PATHS:
    print("{!r:>17} : {}".format(path, os.path.split(path)))

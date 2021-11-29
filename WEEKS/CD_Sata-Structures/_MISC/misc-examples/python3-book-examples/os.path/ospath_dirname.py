#
"""Find the directory portion of a filename.
"""


# end_pymotw_header
import os.path

PATHS = ["/one/two/three", "/one/two/three/", "/", ".", ""]

for path in PATHS:
    print("{!r:>17} : {!r}".format(path, os.path.dirname(path)))

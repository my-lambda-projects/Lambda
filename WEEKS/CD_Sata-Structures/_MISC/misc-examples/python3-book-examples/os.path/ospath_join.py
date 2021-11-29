#
"""Combine path components to create a single path.
"""


# end_pymotw_header
import os.path

PATHS = [
    ("one", "two", "three"),
    ("/", "one", "two", "three"),
    ("/one", "/two", "/three"),
]

for parts in PATHS:
    print("{} : {!r}".format(parts, os.path.join(*parts)))

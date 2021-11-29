#
"""Separate a filename into the base and extension.
"""


# end_pymotw_header
import os.path

PATHS = [
    "filename.txt",
    "filename",
    "/path/to/filename.txt",
    "/",
    "",
    "my-archive.tar.gz",
    "no-extension.",
]

for path in PATHS:
    print("{!r:>21} : {!r}".format(path, os.path.splitext(path)))

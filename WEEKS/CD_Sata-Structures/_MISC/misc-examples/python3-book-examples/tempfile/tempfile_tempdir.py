#
"""
"""


# end_pymotw_header
import tempfile

tempfile.tempdir = "/I/changed/this/path"
print("gettempdir():", tempfile.gettempdir())

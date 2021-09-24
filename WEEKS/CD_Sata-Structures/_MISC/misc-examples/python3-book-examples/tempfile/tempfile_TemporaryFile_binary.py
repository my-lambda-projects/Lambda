#
"""
"""


# end_pymotw_header
import os
import tempfile

with tempfile.TemporaryFile() as temp:
    temp.write(b"Some data")

    temp.seek(0)
    print(temp.read())

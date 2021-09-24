#
"""
"""

# end_pymotw_header
import bz2
import io

with bz2.BZ2File("example.bz2", "rb") as input:
    with io.TextIOWrapper(input, encoding="utf-8") as dec:
        print(dec.read())

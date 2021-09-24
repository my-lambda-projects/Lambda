#
"""
"""

# end_pymotw_header
import gzip
import io

with gzip.open("example.txt.gz", "rb") as input_file:
    with io.TextIOWrapper(input_file, encoding="utf-8") as dec:
        print(dec.read())

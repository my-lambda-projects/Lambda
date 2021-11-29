#
"""
"""

# end_pymotw_header
import gzip
import io
import os

outfilename = "example.txt.gz"
with gzip.open(outfilename, "wb") as output:
    with io.TextIOWrapper(output, encoding="utf-8") as enc:
        enc.write("Contents of the example file go here.\n")

print(outfilename, "contains", os.stat(outfilename).st_size, "bytes")
os.system("file -b --mime {}".format(outfilename))

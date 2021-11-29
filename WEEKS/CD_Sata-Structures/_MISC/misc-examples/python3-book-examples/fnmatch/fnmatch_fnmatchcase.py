#
"""Force a case-sensitive test of a filename with a pattern.
"""


# end_pymotw_header
import fnmatch
import os

pattern = "FNMATCH_*.PY"
print("Pattern :", pattern)
print()

files = os.listdir(".")

for name in sorted(files):
    print("Filename: {:<25} {}".format(name, fnmatch.fnmatchcase(name, pattern)))

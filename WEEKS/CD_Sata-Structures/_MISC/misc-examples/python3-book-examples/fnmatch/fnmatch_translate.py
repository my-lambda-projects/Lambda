#
"""Translate a glob-style pattern to a regular expression.
"""

# end_pymotw_header
import fnmatch

pattern = "fnmatch_*.py"
print("Pattern :", pattern)
print("Regex   :", fnmatch.translate(pattern))

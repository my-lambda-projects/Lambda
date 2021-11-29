#
"""
"""

# end_pymotw_header
import dbm

with dbm.open("/tmp/example.db", "n") as db:
    db["key"] = "value"
    db["today"] = "Sunday"
    db["author"] = "Doug"

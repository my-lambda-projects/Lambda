#
"""
"""

# end_pymotw_header
import dbm

with dbm.open("/tmp/example.db", "w") as db:
    try:
        db["one"] = 1
    except TypeError as err:
        print(err)

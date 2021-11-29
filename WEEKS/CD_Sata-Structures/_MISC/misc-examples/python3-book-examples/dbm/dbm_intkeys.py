#
"""
"""

# end_pymotw_header
import dbm

with dbm.open("/tmp/example.db", "w") as db:
    try:
        db[1] = "one"
    except TypeError as err:
        print(err)

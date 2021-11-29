#
"""
"""

# end_pymotw_header
import imaplib
import imaplib_connect

with imaplib_connect.open_connection() as c:
    typ, data = c.select("Does-Not-Exist")
    print(typ, data)

#
"""
"""

# end_pymotw_header
import imaplib
from pprint import pprint
from imaplib_connect import open_connection

with open_connection() as c:
    typ, data = c.list()
    print("Response code:", typ)
    print("Response:")
    pprint(data)

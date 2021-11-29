#
"""
"""

# end_pymotw_header
import imaplib

from imaplib_connect import open_connection

with open_connection() as c:
    typ, data = c.list(directory="Example")

print("Response code:", typ)

for line in data:
    print("Server response:", line)

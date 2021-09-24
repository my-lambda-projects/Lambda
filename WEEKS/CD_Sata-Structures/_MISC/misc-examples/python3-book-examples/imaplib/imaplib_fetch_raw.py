#
"""
"""

# end_pymotw_header
import imaplib
import pprint
import imaplib_connect

imaplib.Debug = 4
with imaplib_connect.open_connection() as c:
    c.select("INBOX", readonly=True)
    typ, msg_data = c.fetch("1", "(BODY.PEEK[HEADER] FLAGS)")
    pprint.pprint(msg_data)

#
"""
"""

# end_pymotw_header
import imaplib
import imaplib_connect

with imaplib_connect.open_connection() as c:
    c.select("INBOX", readonly=True)

    print("BODY:")
    typ, msg_data = c.fetch("1", "(BODY.PEEK[TEXT])")
    for response_part in msg_data:
        if isinstance(response_part, tuple):
            print(response_part[1])

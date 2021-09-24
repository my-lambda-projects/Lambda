#
"""
"""

# end_pymotw_header
import imaplib
import re

from imaplib_connect import open_connection
from imaplib_list_parse import parse_list_response

with open_connection() as c:
    typ, data = c.list()
    for line in data:
        flags, delimiter, mailbox = parse_list_response(line)
        print("Mailbox:", mailbox)
        status = c.status(
            '"{}"'.format(mailbox), "(MESSAGES RECENT UIDNEXT UIDVALIDITY UNSEEN)"
        )
        print(status)

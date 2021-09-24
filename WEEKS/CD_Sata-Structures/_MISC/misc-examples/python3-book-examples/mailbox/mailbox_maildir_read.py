#
"""
"""

# end_pymotw_header
import mailbox

mbox = mailbox.Maildir("Example")
for message in mbox:
    print(message["subject"])

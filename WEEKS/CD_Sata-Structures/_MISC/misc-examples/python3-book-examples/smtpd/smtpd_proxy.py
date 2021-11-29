#
"""
"""


# end_pymotw_header
import smtpd
import asyncore

server = smtpd.PureProxy(("127.0.0.1", 1025), ("mail", 25))

asyncore.loop()

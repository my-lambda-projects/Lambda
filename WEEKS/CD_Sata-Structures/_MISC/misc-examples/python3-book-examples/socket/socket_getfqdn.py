# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#
"""Look up the fully qualified domain name for a host.
"""

# end_pymotw_header
import socket

for host in ["apu", "pymotw.com"]:
    print("{:>10} : {}".format(host, socket.getfqdn(host)))

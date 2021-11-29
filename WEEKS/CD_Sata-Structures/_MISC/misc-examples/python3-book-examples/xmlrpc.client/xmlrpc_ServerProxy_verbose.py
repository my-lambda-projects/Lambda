#
"""
"""

# end_pymotw_header
import xmlrpc.client

server = xmlrpc.client.ServerProxy("http://localhost:9000", verbose=True)
print("Ping:", server.ping())

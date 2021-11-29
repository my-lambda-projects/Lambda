#
"""
"""

# end_pymotw_header
import xmlrpc.client

server = xmlrpc.client.ServerProxy("http://localhost:9000", encoding="ISO-8859-1")
print("Ping:", server.ping())

#
"""
"""

# end_pymotw_header
import xmlrpc.client

proxy = xmlrpc.client.ServerProxy("http://localhost:9000")
print(proxy.list("/tmp"))

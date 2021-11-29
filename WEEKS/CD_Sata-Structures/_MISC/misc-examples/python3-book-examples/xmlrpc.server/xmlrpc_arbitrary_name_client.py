#
"""
"""

# end_pymotw_header
import xmlrpc.client

proxy = xmlrpc.client.ServerProxy("http://localhost:9000")
print(getattr(proxy, "multiply args")(5, 5))

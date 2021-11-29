#
"""
"""

# end_pymotw_header
import xmlrpc.client

proxy = xmlrpc.client.ServerProxy("http://localhost:9000")
print("public():", proxy.prefix.public())
try:
    print("private():", proxy.prefix.private())
except Exception as err:
    print("\nERROR:", err)
try:
    print("public() without prefix:", proxy.public())
except Exception as err:
    print("\nERROR:", err)

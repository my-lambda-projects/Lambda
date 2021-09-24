#
"""
"""

# end_pymotw_header
import xmlrpc.client

server = xmlrpc.client.ServerProxy("http://localhost:9000")
try:
    server.raises_exception("A message")
except Exception as err:
    print("Fault code:", err.faultCode)
    print("Message   :", err.faultString)

#
"""
"""

# end_pymotw_header
import xmlrpc.client
import pprint


class MyObj:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __repr__(self):
        return "MyObj({!r}, {!r})".format(self.a, self.b)


server = xmlrpc.client.ServerProxy("http://localhost:9000")

o = MyObj(1, "b goes here")
print("o  :", o)
pprint.pprint(server.show_type(o))

o2 = MyObj(2, o)
print("\no2 :", o2)
pprint.pprint(server.show_type(o2))

#
"""
"""


# end_pymotw_header
from http import cookies


c = cookies.SimpleCookie()
c["integer"] = 5
c["with_quotes"] = 'He said, "Hello, World!"'

for name in ["integer", "with_quotes"]:
    print(c[name].key)
    print("  {}".format(c[name]))
    print("  value={!r}".format(c[name].value))
    print("  coded_value={!r}".format(c[name].coded_value))
    print()

#
"""
"""


# end_pymotw_header
from http import cookies


c = cookies.SimpleCookie()
c["mycookie"] = "cookie_value"
print(c)

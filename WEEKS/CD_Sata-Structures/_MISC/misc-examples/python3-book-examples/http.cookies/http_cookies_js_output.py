#
"""
"""


# end_pymotw_header
from http import cookies
import textwrap


c = cookies.SimpleCookie()
c["mycookie"] = "cookie_value"
c["another_cookie"] = "second value"
js_text = c.js_output()
print(textwrap.dedent(js_text).lstrip())

#
"""
"""

# end_pymotw_header
from urllib.parse import quote, quote_plus, urlencode

url = "http://localhost:8080/~hellmann/"
print("urlencode() :", urlencode({"url": url}))
print("quote()     :", quote(url))
print("quote_plus():", quote_plus(url))

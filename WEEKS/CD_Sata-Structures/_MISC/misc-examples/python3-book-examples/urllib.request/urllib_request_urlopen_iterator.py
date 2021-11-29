#
"""Simple example with urllib.urlopen().
"""

# end_pymotw_header
from urllib import request

response = request.urlopen("http://localhost:8080/")
for line in response:
    print(line.decode("utf-8").rstrip())

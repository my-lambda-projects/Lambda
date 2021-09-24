#
"""
"""

# end_pymotw_header
import datetime

format = "%a %b %d %H:%M:%S %Y"

today = datetime.datetime.today()
print("ISO     :", today)

s = today.strftime(format)
print("strftime:", s)

d = datetime.datetime.strptime(s, format)
print("strptime:", d.strftime(format))

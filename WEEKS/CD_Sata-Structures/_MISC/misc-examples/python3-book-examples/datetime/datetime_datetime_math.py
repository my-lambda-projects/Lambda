#
"""Calculations with datetime values.
"""

# end_pymotw_header
import datetime

today = datetime.datetime.today()
print("Today    :", today)

yesterday = today - datetime.timedelta(days=1)
print("Yesterday:", yesterday)

tomorrow = today + datetime.timedelta(days=1)
print("Tomorrow :", tomorrow)

print("tomorrow - yesterday:", tomorrow - yesterday)
print("yesterday - tomorrow:", yesterday - tomorrow)

print("tomorrow > yesterday:", tomorrow > yesterday)

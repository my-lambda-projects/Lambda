#
"""Time resolution.
"""

# end_pymotw_header
import datetime

for m in [1, 0, 0.1, 0.6]:
    try:
        print("{:02.1f} :".format(m), datetime.time(0, 0, 0, microsecond=m))
    except TypeError as err:
        print("ERROR:", err)

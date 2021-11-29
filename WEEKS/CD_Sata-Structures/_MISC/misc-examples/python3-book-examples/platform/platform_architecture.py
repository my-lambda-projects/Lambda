#
"""
"""


# end_pymotw_header
import platform

print("interpreter:", platform.architecture())
print("/bin/ls    :", platform.architecture("/bin/ls"))

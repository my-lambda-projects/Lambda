#
"""
"""

# end_pymotw_header
import demopkg2

print("demopkg2           :", demopkg2.__file__)

import demopkg2.overloaded

print("demopkg2.overloaded:", demopkg2.overloaded.__file__)

print()
demopkg2.overloaded.func()

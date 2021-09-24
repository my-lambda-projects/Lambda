#
"""
"""

# end_pymotw_header
import traceback
import sys

from traceback_example import produce_exception

try:
    produce_exception()
except Exception as err:
    print("format_exc():")
    print(traceback.format_exc())

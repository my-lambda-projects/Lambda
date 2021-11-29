#
"""
"""

# end_pymotw_header
import traceback
import sys
from pprint import pprint

from traceback_example import call_function


def f():
    return traceback.format_stack()


formatted_stack = call_function(f)
pprint(formatted_stack)

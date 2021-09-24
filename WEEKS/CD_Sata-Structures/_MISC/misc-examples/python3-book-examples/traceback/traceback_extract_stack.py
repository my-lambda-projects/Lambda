#
"""
"""

# end_pymotw_header
import traceback
import sys
import os

from traceback_example import call_function

template = "{filename:<26}:{linenum}:{funcname}:\n    {source}"


def f():
    return traceback.extract_stack()


stack = call_function(f)
for filename, linenum, funcname, source in stack:
    if funcname != "<module>":
        funcname = funcname + "()"
    print(
        template.format(
            filename=os.path.basename(filename),
            linenum=linenum,
            source=source,
            funcname=funcname,
        )
    )

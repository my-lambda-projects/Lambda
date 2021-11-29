#
"""
"""


# end_pymotw_header
import trace
from trace_example.recurse import recurse

tracer = trace.Trace(count=False, trace=True)
tracer.run("recurse(2)")

#
"""
"""


# end_pymotw_header
import tempfile

with tempfile.NamedTemporaryFile(
    suffix="_suffix", prefix="prefix_", dir="/tmp"
) as temp:
    print("temp:")
    print("  ", temp)
    print("temp.name:")
    print("  ", temp.name)

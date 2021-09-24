#
"""
"""

# end_pymotw_header
import warnings

warnings.simplefilter("error", UserWarning)

print("Before the warning")
warnings.warn("This is a warning message")
print("After the warning")

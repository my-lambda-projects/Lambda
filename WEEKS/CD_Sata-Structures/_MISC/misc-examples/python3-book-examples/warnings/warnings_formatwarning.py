#
"""
"""

# end_pymotw_header
import warnings


def warning_on_one_line(message, category, filename, lineno, file=None, line=None):
    return "-> {}:{}: {}:{}".format(filename, lineno, category.__name__, message)


warnings.warn("Warning message, before")
warnings.formatwarning = warning_on_one_line
warnings.warn("Warning message, after")

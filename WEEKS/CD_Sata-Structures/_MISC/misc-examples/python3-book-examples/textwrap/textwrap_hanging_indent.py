#
"""
"""

# end_pymotw_header
import textwrap
from textwrap_example import sample_text

dedented_text = textwrap.dedent(sample_text).strip()
print(
    textwrap.fill(dedented_text, initial_indent="", subsequent_indent=" " * 4, width=50)
)

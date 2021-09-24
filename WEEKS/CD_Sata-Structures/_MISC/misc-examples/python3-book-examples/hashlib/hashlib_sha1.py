#
"""Simple SHA1 generation.
"""

# end_pymotw_header
import hashlib

from hashlib_data import lorem

h = hashlib.sha1()
h.update(lorem.encode("utf-8"))
print(h.hexdigest())

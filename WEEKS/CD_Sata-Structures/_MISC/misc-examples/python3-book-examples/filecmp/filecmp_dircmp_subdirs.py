#
"""
"""

# end_pymotw_header
import filecmp

dc = filecmp.dircmp("example/dir1", "example/dir2")
print("Subdirectories:")
print(dc.subdirs)

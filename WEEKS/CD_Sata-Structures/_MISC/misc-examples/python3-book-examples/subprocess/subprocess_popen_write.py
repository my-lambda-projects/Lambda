#
"""
"""


# end_pymotw_header
import subprocess

print("write:")
proc = subprocess.Popen(["cat", "-"], stdin=subprocess.PIPE)
proc.communicate("stdin: to stdin\n".encode("utf-8"))

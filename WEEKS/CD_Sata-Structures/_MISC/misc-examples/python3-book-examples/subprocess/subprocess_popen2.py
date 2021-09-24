#
"""
"""


# end_pymotw_header
import subprocess

print("popen2:")

proc = subprocess.Popen(["cat", "-"], stdin=subprocess.PIPE, stdout=subprocess.PIPE)
msg = "through stdin to stdout".encode("utf-8")
stdout_value = proc.communicate(msg)[0].decode("utf-8")
print("pass through:", repr(stdout_value))

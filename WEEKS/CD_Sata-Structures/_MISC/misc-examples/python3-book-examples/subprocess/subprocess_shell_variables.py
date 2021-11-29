#
"""
"""

# end_pymotw_header
import subprocess

completed = subprocess.run("echo $HOME", shell=True)
print("returncode:", completed.returncode)

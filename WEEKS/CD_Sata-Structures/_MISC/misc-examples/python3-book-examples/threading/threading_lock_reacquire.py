#
"""Normal locks cannot be acquired more than once
"""

# end_pymotw_header
import threading

lock = threading.Lock()

print("First try :", lock.acquire())
print("Second try:", lock.acquire(0))

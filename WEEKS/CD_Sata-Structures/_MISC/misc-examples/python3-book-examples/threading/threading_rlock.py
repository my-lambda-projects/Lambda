#
"""Re-entrant locks
"""

# end_pymotw_header
import threading

lock = threading.RLock()

print("First try :", lock.acquire())
print("Second try:", lock.acquire(0))

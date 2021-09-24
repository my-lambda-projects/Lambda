#
"""
"""

# end_pymotw_header
import profile
from profile_fibonacci_memoized import fib, fib_seq

if __name__ == "__main__":
    profile.runctx("print(fib_seq(n)); print()", globals(), {"n": 20})

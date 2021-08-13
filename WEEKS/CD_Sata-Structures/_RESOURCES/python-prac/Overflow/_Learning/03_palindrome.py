# A palindrome is a string that reads the same forward and backward:
#   - radar, toot, madam, racecar

from collections import deque


def is_palindrome(characters):
    char_queue = deque(characters)

    while len(char_queue) > 1:
        first = char_queue.popleft()
        last = char_queue.pop()
        if first != last:
            return False

    return True


print(is_palindrome("lsdkjfskf"))  # => False
print(is_palindrome("radar"))  # => True

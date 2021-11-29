# https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
# Given the string, check if it is a palindrome.


def check_palindrome(input_string: str = "") -> bool:
    if 1 <= len(input_string) <= 100000:
        return input_string == input_string[::-1]
    return False

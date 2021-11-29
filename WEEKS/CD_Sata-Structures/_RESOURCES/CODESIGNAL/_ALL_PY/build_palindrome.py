def isPalindrome(st):
    for i in range(len(st) // 2):
        if st[i] != st[len(st) - 1 - i]:
            return False
    return True


def buildPalindrome(st):
    for i in range(len(st)):
        substring = st[i : len(st)]
        if isPalindrome(substring):
            non_palindrome_part = st[0:i]
            return st + non_palindrome_part[::-1]
    return "String not found"

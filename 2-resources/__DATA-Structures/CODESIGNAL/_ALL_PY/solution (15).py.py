"""
find the smallest substring that contains all of the distinct chars of the string
"""


def shortestSubstring(s):
    diff_chars, start, big = len(set(s)), 0, len(s)
    end = diff_chars
    while end <= len(s):
        curr = len(set(s[start:end]))
        if curr == diff_chars:
            if end - start < big:
                big = end - start
            start += 1
        else:
            end += 1
    return big


print(shortestSubstring("abbddccabd"))

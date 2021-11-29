def countPalindromes(s):
    """
    countPalindromes(s) takes in a string s and returns the number of palindrome in the string
    :param s: a string
    :return: number of palindrome sub strings
    """
    tot_pal = len(s)
    for i in range(len(s)):
        tot_pal += helper(s, i, i + 1)
        tot_pal += helper(s, i - 1, i + 1)
    return tot_pal


def helper(s, l, r):
    tot = 0
    while (l >= 0) and (r < len(s)) and (s[l] == s[r]):
        tot += 1
        l -= 1
        r += 1
    return tot


print(countPalindromes("aaa"))

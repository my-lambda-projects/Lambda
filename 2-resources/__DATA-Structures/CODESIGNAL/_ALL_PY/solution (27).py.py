def isLucky(n):
    """
    isLucky takes in an integer and return True if the sum of its right half == sum of the
     right half
    :param n:
    :return:
    """
    # l = list(map(int, str(n)))
    # return sum(l[0:len(l) // 2]) == sum(l[len(l) // 2:])

    s = str(n)
    return sum(map(int, s[: len(s) // 2])) == sum(map(int, s[len(s) // 2 : len(s)]))


n = 1230
print(isLucky(n))

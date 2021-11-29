memo = {}


def isHappy(n):
    """
    Is happy takes in a number and returns True if it is a happy number, False otherwise. A happy number
    is a number defined by the following process: Starting with any positive integer, replace the number by the
    sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
    or it loops endlessly in a cycle which does not include 1.
    """
    seen = {n: 1}
    while True:
        new_sq = sum([int(d) ** 2 for d in str(n)])
        if n == 1:
            return True
        if new_sq in seen:
            return False
        else:
            n = new_sq
            seen[n] = 1


print(isHappy(19))

def check(first, second, target):
    while first < target:
        first += second
    return first


def isPossible(a, b, c, d):
    # Write your code here
    if c < d:
        a = check(a, b, c)
        b = check(b, a, d)
    else:
        b = check(b, a, d)
        a = check(a, b, c)
    if a != c or b != d:
        return "No"
    return "Yes"


print(isPossible(1, 4, 5, 9))

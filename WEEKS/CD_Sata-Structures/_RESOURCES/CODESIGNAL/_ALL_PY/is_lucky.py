def isLucky(n):
    digits = [int(digit) for digit in str(n)]
    if len(digits) % 2 == 1:
        return False
    else:
        digits = [int(digit) for digit in str(n)]
        mid = len(digits) // 2
        if sum(digits[:mid]) == sum(digits[mid:]):
            return True
        else:
            return False

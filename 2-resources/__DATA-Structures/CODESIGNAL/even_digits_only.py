def evenDigitsOnly(n):
    digits = [int(digit) for digit in str(n)]  # Convert digits to list of strings

    for digit in digits:
        if digit % 2 == 1:
            return False
    return True

# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
#
# Example 1:
#
# Input: 121
# Output: true
# Example 2:
#
# Input: -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:
#
# Input: 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
# Follow up:
#
# Could you solve it without converting the integer to a string?


def is_palindrome(x):
    if x < 0:
        return False

    elif 0 < x < 10:
        return True

    second_half = 0

    while second_half < x:

        second_half = second_half * 10 + (x % 10)
        x = x // 10

        if second_half == 0:
            break

    return x == second_half or x == second_half // 10


if __name__ == "__main__":
    num1 = 121
    num2 = 1221
    num3 = 1
    num4 = 10
    num5 = 1234231

    print(str(num1) + " is palindrome? => " + str(is_palindrome(num1)))
    print(str(num2) + " is palindrome? => " + str(is_palindrome(num2)))
    print(str(num3) + " is palindrome? => " + str(is_palindrome(num3)))
    print(str(num4) + " is palindrome? => " + str(is_palindrome(num4)))
    print(str(num5) + " is palindrome? => " + str(is_palindrome(num5)))

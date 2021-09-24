"""
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
"""


def checkValidString(s):
    """
    TimeComplexity: O(n)
    SpaceComplexity: O(1)
    """
    used_stars = 0
    unused_stars = 0
    open_p = 0
    for p in s:
        if p == "(":
            open_p += 1
        elif p == "*":
            if open_p:
                open_p -= 1
                used_stars += 1
            else:
                unused_stars += 1
        else:
            if open_p:
                open_p -= 1
            elif unused_stars:
                unused_stars -= 1
            elif used_stars:
                unused_stars += 1
                used_stars -= 1
            else:
                return False
    return open_p == 0


print(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*"))

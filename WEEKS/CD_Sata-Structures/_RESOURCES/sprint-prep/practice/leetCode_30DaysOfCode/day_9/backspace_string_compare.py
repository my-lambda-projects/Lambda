"""
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
"""


def backspaceCompare(S, T):
    return __helperFunc(S) == __helperFunc(T)


def __helperFunc(s):
    stack = []
    for ele in s:
        if ele != "#":
            stack.append(ele)
        else:
            if len(stack) > 0:
                stack.pop()
    return stack


print(backspaceCompare("ab#c", "ad#c"))

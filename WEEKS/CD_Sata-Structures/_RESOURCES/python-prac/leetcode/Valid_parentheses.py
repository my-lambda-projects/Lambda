# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
#
# An input string is valid if:
#
# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Note that an empty string is also considered valid.
#
# Example 1:
#
# Input: "()"
# Output: true
# Example 2:
#
# Input: "()[]{}"
# Output: true
# Example 3:
#
# Input: "(]"
# Output: false
# Example 4:
#
# Input: "([)]"
# Output: false
# Example 5:
#
# Input: "{[]}"
# Output: true


def isValid(s):
    stack = []

    for c in s:

        if c == "(":
            stack.append("(")

        if c == ")":

            if len(stack) == 0:
                return False
            if stack[-1] != "(":
                return False
            else:
                stack.pop()

        if c == "[":
            stack.append("[")

        if c == "]":

            if len(stack) == 0:
                return False
            if stack[-1] != "[":
                return False
            else:
                stack.pop()

        if c == "{":
            stack.append("{")

        if c == "}":

            if len(stack) == 0:
                return False
            if stack[-1] != "{":
                return False
            else:
                stack.pop()

    if len(stack) > 0:
        return False
    else:
        return True


if __name__ == "__main__":
    ex1 = "()"
    ex2 = "()[]{}"
    ex3 = "(]"
    ex4 = "([)]"
    ex5 = "{[]}"

    print(ex1 + " is " + str(isValid(ex1)))
    print(ex2 + " is " + str(isValid(ex2)))
    print(ex3 + " is " + str(isValid(ex3)))
    print(ex4 + " is " + str(isValid(ex4)))
    print(ex5 + " is " + str(isValid(ex5)))

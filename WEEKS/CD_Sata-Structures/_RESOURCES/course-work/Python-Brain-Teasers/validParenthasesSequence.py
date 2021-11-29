# You are given a parentheses sequence, check if it's regular.

# Example

# For s = "()()(())", the output should be
# validParenthesesSequence(s) = true;
# For s = "()()())", the output should be
# validParenthesesSequence(s) = false.
# Input/Output

# [execution time limit] 4 seconds (py3)

# [input] string s

# A string, consisting only of '(' and ')'.

# Guaranteed constraints:
# 0 ≤ s.length ≤ 105.

# [output] boolean

# true is the sequence is regular and false otherwise.


def validParenthesesSequence(s):
    stack = []

    # Traversing the Expression
    for char in s:
        if char in ["(", "{", "["]:
            stack.append(char)
        else:
            if not stack:
                return False
            current_char = stack.pop()
            if current_char == "(":
                if char != ")":
                    return False
            if current_char == "{":
                if char != "}":
                    return False
            if current_char == "[":
                if char != "]":
                    return False
    if stack:
        return False
    return True

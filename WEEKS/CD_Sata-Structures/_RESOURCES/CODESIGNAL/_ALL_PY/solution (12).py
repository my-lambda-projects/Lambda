def reverseInParentheses(s):
    """
    takes in a string that has substrings inside Parentheses, return a string with all substrings inside the Parentheses
    reversed
    """
    stack = []
    for i in s:
        if i == ")":
            ind = len(stack) - 1
            while stack[ind] != "(":
                ind -= 1
            stack[ind : len(stack) + 1] = stack[ind : len(stack) + 1][::-1]
            stack.pop()
        else:
            stack.append(i)
    return "".join(stack)


print(reverse_in_bracts("abc(klm(nz))"))

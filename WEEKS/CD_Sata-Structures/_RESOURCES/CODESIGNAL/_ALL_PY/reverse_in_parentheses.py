def reverseInParentheses(inputString):
    opening_brackets_indices = []

    # Iterate through string
    for i in range(len(inputString)):
        # Push opening brackets onto the stack
        if inputString[i] == "(":
            opening_brackets_indices.append(i)
        # Reverse the substring starting after the
        # last encountered opening bracket till
        # the current character
        elif inputString[i] == ")":
            substring_with_parentheses = inputString[
                opening_brackets_indices[-1] : i + 1
            ]
            inputString = (
                inputString[: opening_brackets_indices[-1]]
                + substring_with_parentheses[::-1]
                + inputString[i + 1 :]
            )
            print(inputString)
            del opening_brackets_indices[-1]
    # Store new string with reversed parentheses
    # removed
    new_string_without_parentheses = ""
    for i in range(len(inputString)):
        if inputString[i] != "(" and inputString[i] != ")":
            new_string_without_parentheses += inputString[i]
    return new_string_without_parentheses

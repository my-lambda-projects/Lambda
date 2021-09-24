def longestDigitsPrefix(inputString):
    for i in range(len(inputString)):
        if not inputString[i].isdigit():
            return inputString[:i]
    return inputString

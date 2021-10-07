def beautifulText(inputString, l, r):
    for w in range(l, r + 1):
        i = w
        while i < len(inputString):
            if inputString[i] != " ":
                break
            i += w + 1
        if i == len(inputString):
            return True
    return False


s = "Look at this example of a correct text"
print(beautifulText(s, 5, 15))

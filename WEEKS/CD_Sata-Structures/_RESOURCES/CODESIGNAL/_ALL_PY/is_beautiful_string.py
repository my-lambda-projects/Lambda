def isBeautifulString(inputString):
    b = dict()

    for char in inputString:
        if ord(char) in b:
            b[ord(char)] += 1
        else:
            b[ord(char)] = 1

    for i in b.keys():
        if i == 97:
            continue
        if i - 1 in b:
            if b[i] > b[i - 1]:
                return False
        else:
            return False
    return True

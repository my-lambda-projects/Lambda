def alphabeticShift(inputString):
    outputString = ""
    for i in range(len(inputString)):
        outputString += chr((ord(inputString[i]) + 1 - 97) % 26 + 97)
    return outputString

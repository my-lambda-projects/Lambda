def arrayMaximalAdjacentDifference(inputArray):
    max_diff = -15
    for i in range(len(inputArray) - 1):
        max_diff = max(abs(inputArray[i] - inputArray[i + 1]), max_diff)
    return max_diff

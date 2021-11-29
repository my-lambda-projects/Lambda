def allLongestStrings(inputArray):
    # sortedList = sorted(inputArray, key=len, reverse=True)
    max_string_length, longest_strings = max(inputArray, key=len), []
    for i in range(len(inputArray)):
        if len(inputArray[i]) == len(max_string_length):
            longest_strings.append(inputArray[i])
    return longest_strings

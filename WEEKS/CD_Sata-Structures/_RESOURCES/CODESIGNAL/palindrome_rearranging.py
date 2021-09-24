def palindromeRearranging(inputString):
    character_count, odd_frequencies = {}, 0

    # Count character frequencies
    for i in range(len(inputString)):
        if inputString[i] not in character_count:
            character_count[(inputString[i])] = 1
        elif inputString[i] in character_count:
            character_count[(inputString[i])] += 1

    # Count odd character frequencies
    for char in character_count:
        if character_count[char] % 2 == 1:
            odd_frequencies += 1

    if odd_frequencies > 1:
        return False

    return True

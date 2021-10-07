def commonCharacterCount(s1, s2):
    # To store the frequencies of characters
    # of string s1 and s2
    freq1 = [0] * 26
    freq2 = [0] * 26

    # To store the count of valid pairs
    count = 0

    # Update the frequencies of
    # the characters of string s1
    for i in range(len(s1)):
        freq1[ord(s1[i]) - ord("a")] += 1

    # Update the frequencies of
    # the characters of string s2
    for i in range(len(s2)):
        freq2[ord(s2[i]) - ord("a")] += 1

    # Find the count of valid pairs
    for i in range(26):
        count += min(freq1[i], freq2[i])

    return count

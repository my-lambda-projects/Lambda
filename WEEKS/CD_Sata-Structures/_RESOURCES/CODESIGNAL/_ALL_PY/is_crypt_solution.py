def isCryptSolution(crypt, solution):
    decoded_words, decoded_word = [], ""

    # Decode the words in the cryptarithm
    for i in range(len(crypt)):
        for j in range(len(crypt[i])):
            for k in range(len(solution)):
                if crypt[i][j] == solution[k][0]:
                    decoded_word += solution[k][1]
        decoded_words.append(decoded_word)
        decoded_word = ""

    # Check if the leading digits of
    # any of the words is 0
    for word in decoded_words:
        if word[0] == "0" and len(word) > 1:
            return False

    # Check if it is a valid arithmetic expression
    word1 = int(decoded_words[0])
    word2 = int(decoded_words[1])
    word3 = int(decoded_words[2])

    if word1 + word2 == word3:
        return True
    else:
        return False

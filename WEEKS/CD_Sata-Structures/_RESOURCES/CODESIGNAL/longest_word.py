def longestWord(text):
	"""
	Return longest word in text string
	
	Time Complexity: O(n)
	Space Complexity: O(n)
	"""
    word, words = '', []
    for i in range(len(text)):
        if text[i].isalpha():
            word += text[i]
            if i == len(text) - 1:
                words.append(word)
                word = ''
        elif word != '' and not text.isalpha():
            words.append(word)
            word = ''
    print(words)
    return max(words, key = len)
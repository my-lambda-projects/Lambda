# PROBLEM: Given a text file, words.txt, print out the largest set of anagrams

"""
1. Understand:
    What is an anagram?
    - anagram: a word, phrase, or name formed by rearranging the letters of another, 
    such as spar, formed from rasp.

2. Plan:
    > we need to generate all sets of anagrams
        - should have the same number of each letter
        - ANAGRAMS should be equal when characters are sorted
        - How do we handle case? (in this case we will ignore it)
    > once all sets are generated, we need to find the largest set
        - utilize some form of MAX function

3. Implement
"""


def first_pass_anagrams(words):
    import random
    import operator

    # generate random values for each character a-z
    chars = [0] * 26
    for i in range(26):
        chars[i] = random.randint(0, 1000000)

    # create a new dictionary
    anagrams = {}
    signature = 0

    # use random char values to calculate a value for each word
    for word in words:
        word = word.lower()

        for char in word:
            index = ord(char) - 97

            if index >= 0 and index < 26:
                signature += chars[index]

            # group words with the same value
            if signature not in anagrams:
                anagrams[signature] = []

            anagrams[signature].append(word)
            signature = 0

    # get max entry in dictionary
    max_anagrams = max(anagrams.items(), key=operator.itemgetter(1))[0]

    print(max_anagrams)


def secons_pass_anagrams(words):
    # create a new dictionary
    anagrams = {}
    longest = None
    # GENERATE ALL SETS of ANAGRAMS
    for word in words:
        # convert the list to a string
        signature = "".join(sorted(word.lower()))
        if signature not in anagrams:
            anagrams[signature] = []
        anagrams[signature].append(word)
        # Update the largest set as we create them
        if longest == None or len(anagrams[signature]) > len(anagrams[longest]):
            longest = signature
    print(anagrams[longest])

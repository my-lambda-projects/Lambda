words = []
with open("sowpods.txt") as f:
    for w in f:
        w = w.strip()
        words.append(w)

"""
What are all of the words containing "uu"?
"""

res = []
for word in words:
    if "UU" in word:
        res.append(word)

"""
What are all of the letters that never appear doubled in an English word?
"""

alphabet = {
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
    "E": 0,
    "F": 0,
    "G": 0,
    "H": 0,
    "I": 0,
    "J": 0,
    "K": 0,
    "L": 0,
    "M": 0,
    "N": 0,
    "O": 0,
    "P": 0,
    "Q": 0,
    "R": 0,
    "S": 0,
    "T": 0,
    "U": 0,
    "V": 0,
    "W": 0,
    "X": 0,
    "Y": 0,
    "Z": 0,
}

for word in words:
    for i in range(len(word) - 1):
        if word[i] == word[i + 1]:
            alphabet[word[i]] += 1

for (key,) in alphabet:
    if alphabet[key] == 0:
        # print(key)
        pass


"""
What are all of the words that have all 5 vowels, in any order?
What are all of the words that have all 5 vowels, in alphabetical order?
What is the longest palindrome?
"""

vowels = ["A", "E", "I", "O", "U"]

for word in words:
    if all(char in word for char in vowels):
        # print(word)
        pass

"""
What are all of the words that have all 5 vowels, in alphabetical order?
"""

for word in words:
    for i in range(len(word)):
        if "A" in word:
            new_word = word[word.index("A") + 1 :]
            if "E" in new_word:
                new_word = new_word[new_word.index("E") + 1 :]
                if "I" in new_word:
                    new_word = new_word[new_word.index("I") + 1 :]
                    if "O" in new_word:
                        new_word = new_word[new_word.index("O") + 1 :]
                        if "U" in new_word:
                            # print(word)
                            pass


"""
What is the longest palindrome?
"""

longest_pal = ""

for word in words:
    if word == word[::-1]:
        if len(word) > len(longest_pal):
            longest_pal = word

print(longest_pal)


words = []
scores = {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10,
}

with open("sowpods.txt") as f:
    for w in f:
        w = w.strip()
        words.append(w.lower())

"""
Part 1
Write some code that:
Takes a 7-character string (either as a command-line argument or as a parameter)
Prints out the words that can be made from the characters, along with their Scrabble scores, one word per line, in descending score order
Example input and output:

$ python scrabble_cheater.py SPCQEIU  # Use any language you like.
17 piques
17 equips
16 quips
16 pique
16 equip
15 quip
…

Part 2
Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.

Wildcards do not count towards a word's score.
"""

letters = "SPCQEIU".lower()
letters = "CAT**".lower()

words = ["at", "tac", "boy", "cant", "tact", "tank"]


def findWords(rack, words):
    res = []
    wild_count = rack.count("*")

    for word in words:
        rack_copy = list(rack)
        match = True
        wilds = wild_count
        wilds_used = []
        for char in word:
            if char not in rack_copy:
                # use the available wilds
                if wilds == 0:
                    match = False
                    break
                else:
                    wilds -= 1
                    wilds_used.append(char)
            else:
                rack_copy.remove(char)
        if match:
            res.append([word, wilds_used])

    return res


found_words = findWords(letters, words)


def findScores(word_arr):
    tally = 0
    for char in word_arr[0]:
        if char in word_arr[1]:
            tally += 0
            word_arr[1].remove(char)
        elif char in scores:
            tally += scores[char]
    return tally


word_scores = []

for word_arr in found_words:
    score = findScores(word_arr)
    word_scores.append([score, word_arr[0]])

print(sorted(word_scores, reverse=True))

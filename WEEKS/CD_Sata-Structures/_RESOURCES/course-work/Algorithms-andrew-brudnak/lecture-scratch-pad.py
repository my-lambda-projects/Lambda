# Given a word, return all the anagrams of that word in the English language.

f = open("words.txt", "r")
words = f.read().split("\n")
words = [w.lower() for w in words]
f.close()
anagram = {}
# GENERATE ALL SETS OF ANAGRAMS
for word in words:
    # convert list to string
    signature = "".join(sorted(word.lower()))
    if signature not in anagram:
        anagram[signature] = []
    anagram[signature].append(word)


def anagrams(w):
    sig = "".join(sorted(w.lower()))
    if sig not in anagram:
        return []
    else:
        return anagram[sig]


print(anagrams("iceman"))

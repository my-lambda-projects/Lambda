# Given a pattern and a string a, find if a follows the same pattern.

# Here, to "follow" means a full match, such that there is a one-to-one correspondence between a letter in pattern and a non-empty word in a.

# Example 1:

# Input:
# pattern = "abba"
# a = "lambda school school lambda"

# Output: true
# Example 2:

# Input:
# pattern = "abba"
# a = "lambda school school coding"

# Output:
# false
# Notes:

# pattern contains only lower-case English letters.
# a contains only lower-case English letters and spaces ' '.
# a does not contain any leading or trailing spaces.
# All the words in a are separated by a single space.
# [execution time limit] 4 seconds (py3)

# [input] string pattern

# [input] string a

# [output] boolean


def csWordPattern(pattern, a):
    mp1 = {}
    mp2 = {}
    words = a.split(" ")
    if len(words) != len(pattern):
        return False
    for word, ch in zip(words, pattern):
        if word not in mp1 and ch not in mp2:
            mp1[word] = ch
            mp2[ch] = word
        elif mp1.get(word) == ch and mp2.get(ch) == word:
            pass
        else:
            return False
    return True

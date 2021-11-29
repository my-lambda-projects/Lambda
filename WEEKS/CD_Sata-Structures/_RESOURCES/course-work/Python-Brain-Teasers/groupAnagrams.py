# Given an array of strings strs, write a function that can group the anagrams. The groups should be ordered such that the larger groups come first, with subsequent groups ordered in descending order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:

# Input:
# strs = ["apt","pat","ear","tap","are","arm"]

# Output:
# [["apt","pat","tap"],["ear","are"],["arm"]]
# Example 2:

# Input:
# strs = [""]

# Output:
# [[""]]
# Example 3:

# Input:
# strs = ["a"]

# Output:
# [["a"]]
# Notes:

# strs[i] consists of lower-case English letters.
# [execution time limit] 4 seconds (py3)

# [input] array.string strs

# [output] array.array.string


def csGroupAnagrams(strs):
    new_list = []
    groups = {}
    for word in strs:
        sorted_word = "".join(sorted(word))
        if sorted_word in groups:
            groups[sorted_word].append(word)
        else:
            groups[sorted_word] = [word]
    for key, value in groups.items():
        new_list.append(value)

    return new_list

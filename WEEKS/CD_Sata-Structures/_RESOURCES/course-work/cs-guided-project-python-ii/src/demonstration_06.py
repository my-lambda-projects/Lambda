"""
Challenge #6:

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u as vowels for this challenge (but not y).

The input string will only consist of lower case letters and/or spaces.
"""


def get_count(input_str):
    # Your code here
    vowel_counts = {}  # this is a dictionary to store the vowels
    for vowel in "aeiou":

        count = input_str.count(vowel)
        vowel_counts[vowel] = count
        print(vowel_counts)
        counts = vowel_counts.values()
    return sum(counts)


print(get_count("adela are mere"))

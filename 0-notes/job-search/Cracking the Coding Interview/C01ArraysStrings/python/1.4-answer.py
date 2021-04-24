# Palindrome Permutation

# Given a string, write a function to check if it is a permutation of a palindrome.
# A palindrome is a word or phrase that is the same forwards and backwards.
# A permutation is a rearrangement of letters.
# The palindrome does not need to be limited to just dictionary words.
# You can ignore casing and non-letter characters.
import re
def palindromePerm(string):
    s1 = ""
    for letter in string:
        if letter.isalpha():
            s1 = s1 + letter
    s1 = str(s1.lower())
    print("s1 ", s1)
    # set up a list
    s1_list = set(s1)
    s1_counts = [0] * len(s1_list)
    s1_dict = {}
    for list_item in s1_list:
        s1_dict[list_item] = 0
    # keep count of each letter in this list
    for letter in s1:
        s1_dict[letter] += 1
    length = len(s1)
    for key, value in s1_dict.items():
        print(key, value)
    # with even length:  if all counts even, no odd counts = True
    if length % 2 == 0:
        for key, value in s1_dict.items():
            if value % 2 != 0:
                print(False)
                return False
    else:
        # with odd length:  if all counts even but one 1 count = True
        for key, value in s1_dict.items():
            if value % 2 != 0:
                for key1, value1 in s1_dict.items():
                    if value1 % 2 != 0 and key != key1:
                        print("else", False)
                        return False
    # return true if you made it here
    print(True)
    return True 


palindromePerm("taco cat")

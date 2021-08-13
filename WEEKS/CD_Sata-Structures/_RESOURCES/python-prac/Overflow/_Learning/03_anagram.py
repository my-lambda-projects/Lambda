# a word, phrase, or name formed by rearranging the letters of another,
# such as cinema, formed from iceman.

# One string is an anagram of another if the second is a rearrangement of the letters in the first.
# heart/earth, role/lore, etc..
#   1.  Must be same length
#   2.  Letters in second word must be rearrangement of 1st

# def anagram_checking_off(s1, s2):
#     # Make sure words are same length
#     if len(s1) != len(s2):
#         return False
#     # Turn second word into a list to iterate through
#     to_check_off = list(s2)
#     # Loop through the first word
#     for char in s1:
#         # i is an index added to each loop thanks to enumerate
#         for i, other_char in enumerate(to_check_off):
#             if char == other_char:
#                 to_check_off[i] = None
#                 break
#         # else clause executes after the for loop completes normally. This means that the loop did not
#         # encounter a break statement.
#         else:
#             return False

#     return True


# # print(anagram_checking_off('abcd', 'dcba'))
# print(anagram_checking_off('abcd', 'dcbc'))

# 2. Sort and Compare O(nlog(n))
#     - use sorted to sort both and compare

# from itertools import zip_longest

# def anagram_sort_and_compare2(s1, s2):
#     for a, b in zip_longest(sorted(s1), sorted(s2)):
#         if a != b:
#             return False
#     return True

# def anagram_sort_and_compare(str1, str2):
#     for a, b in zip_longest(sorted(str1), sorted(str2)):
#         if a != b:
#             return False
#     return True


# print(anagram_sort_and_compare('abcde', 'edcba'))  # => True
# print(anagram_sort_and_compare('abcde', 'abcd'))   # => False

# 3. Brute Force -- Don't do.  Factorial growth
# 4. Count and Compare
#    - Anagrams will always have the same number of any character they share
#   A. Generate character count from each string
#   B. If these counts match the two string are anagrams

# def anagram_count_compare(s1, s2):
#     c1 = [0] * 26  # creates a list with 26 slots
#     c2 = [0] * 26

#     for char in s1:
#         # The ord() function returns an integer representing the Unicode character.
#         # Here, we are finding taking the unicode of the char and subtracting the unicode
#         # of the beginning of the lowercase alphabet to get it's character spot as 1-26
#         pos = ord(char) - ord('a')
#         c1[pos] += 1

#     for char in s2:
#         pos = ord(char) - ord('a')
#         c2[pos] += 1
#     # for each index of both strings...
#     for a, b in zip(c1, c2):
#         if a != b:
#             return False
#     return True


# print(anagram_count_compare('apple', 'pleap'))  # => True
# print(anagram_count_compare('apple', 'applf'))

# 5. Collection Counters
#  - collections.Counter constructs a dict-like object mapping elements in an iterable to the
#    number of occurrences of that element in the iterable.

# from collections import Counter

# def anagram_with_counter(s1, s2):
#     return Counter(s1) == Counter(s2)

# print(anagram_with_counter('apple', 'pleap'))  # => True
# print(anagram_with_counter('apple', 'applf')) # => False

# although the last solution was able to run in linear time, it only did so by using additional
# storage for the two lists of character counts. In other words, this algorithm sacrificed space
# in order to gain time.

"""
Week 7 guided
"""
"""
*** Demo 1 ***
--------------
Your task is create your own HashTable without using a built-in library.
Your HashTable needs to have the following functions:
- put(key, value) : Inserts a (key, value) pair into the HashTable. If the
value already exists in the HashTable, update the value.
- get(key): Returns the value to which the specified key is mapped, or -1 if
this map contains no mapping for the key.
- remove(key) : Remove the mapping for the value key if this map contains the
mapping for the key.
Example:
```plaintext
hash_table = MyHashTable();
hash_table.put("a", 1);
hash_table.put("b", 2);
hash_table.get("a");            // returns 1
hash_table.get("c");            // returns -1 (not found)
hash_table.put("b", 1);         // update the existing value
hash_table.get("b");            // returns 1
hash_table.remove("b");         // remove the mapping for 2
hash_table.get("b");            // returns -1 (not found)
```
"""


class ListNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


class MyHashTable:
    def __init__(self):
        # Your code here
        self.size = 10
        self.keys = [None] * self.size
        self.values = [None] * self.size
        self.item_count = 0

    def djb2(self, key):
        str_key = str(key).encode()
        hash_value = 5381

        for b in str_key:
            hash_value = ((hash_value << 5) + hash_value) + b
            hash_value &= 0xFFFFFFFF

        return hash_value

    def hash_function(self, key):
        return self.djb2(key) % self.size

    def put(self, key, value):
        # Your code here
        index = self.hash_function(key)

        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value
                return

            index = (index + 1) % self.size

        self.keys[index] = key
        self.values[index] = value

    def get(self, key):
        # Your code here
        index = self.hash_function(key)

        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]

            index = (index + 1) % self.size

        return -1

    def remove(self, key: int) -> None:
        # Your code here
        index = self.hash_function(key)
        if self.keys[index] is not None:
            self.keys[index] = None
            self.values[index] = None


#
# hash_table = MyHashTable()
# print(hash_table.put("a", 1))
# print(hash_table.put("b", 2))
# print(hash_table.get('b'))
# print(hash_table.get("a"))
# print(hash_table.get("c"))
# print(hash_table.put("b", 1))
# print(hash_table.get("b"))
# print(hash_table.remove("b"))
# print(hash_table.get("b"))

"""
*** Demo 2 *** 
--------------
You've uncovered a secret alien language. To your surprise, the language is made
up of all English lowercase letters. However, the alphabet is possibly in a
different order (but is some permutation of English lowercase letters).
You need to write a function that, given a sequence of words written in this
secret language, and the order the alphabet, will determine if the given words
are sorted "alphabetically" in this secret language.
The function will return a boolean value, true if the given words are sorted
"alphabetically" (based on the supplied alphabet), and false if they are not
sorted "alphabetically".
Example 1:
```plaintext
Input: words = ["lambda","school"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'l' comes before 's' in this language, then the sequence is
sorted.
```
Example 2:
```plaintext
Input: words = ["were","where","yellow"], order = "habcdefgijklmnopqrstuvwxyz"
Output: false
Explanation: As 'e' comes after 'h' in this language, then words[0] > words[1],
hence the sequence is unsorted.
```
Example 3:
```plaintext
Input: words = ["lambda","lamb"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first four characters "lamb" match, and the second string is
shorter (in size.) According to lexicographical rules "lambda" > "lamb",
because 'd' > '∅', where '∅' is defined as the blank character which is less
than any other character (https://en.wikipedia.org/wiki/Lexicographic_order).
```
Notes:
- order.length == 26
- All characters in words[i] and order are English lowercase letters.
"""
words = ["lambd", "school"]
order = "hlabcdefgijkmnopqrstuvwxyz"


def are_words_sorted(words, alpha_order):
    """
    Inputs:
    words: List[str]
    alpha_order: str
    Output:
    bool
    """
    # Your code here
    # map the letters of the string alpha_order to a dictionary
    hashed_letters = {}
    count = 0
    for letter in alpha_order:
        hashed_letters[letter] = count
        count += 1
    # iterate the array
    for word in range(len(words) - 1):

        # iterate the first word
        for letter in range(len(words[word])):
            # create variables for the letters to check
            first_letter = words[word][letter]
            second_letter = words[word + 1][letter]
            print("first", first_letter, "second", second_letter)

            if hashed_letters[first_letter] < hashed_letters[second_letter]:
                break
            # if first word1[i] comes after 2nd word2[i] return False
            if len(words[word]) <= len(words[word + 1]):
                break
            if hashed_letters[first_letter] > hashed_letters[second_letter]:
                return False
                # check if the first word is longer than the 2nd word if so return False
            if len(words[word]) > len(words[word + 1]):
                return False

    return True


# print(are_words_sorted(words, order))

"""
Codesignal 
"""
"""
*** csFindTheSingleNumber ***
-----------------------------
You are given a non-empty array of integers.

One element appears exactly once, with every other element appearing at least twice, perhaps more.

Write a function that can find and return the element that appears exactly once.

Example 1:

Input: [1,1,2,1]
Output: 2
Example 2:

Input: [1,2,1,2,1,2,80]
Output: 80
"""

nums = [1, 1, 2, 1]


def csFindTheSingleNumber(nums):
    appearances = {}
    # hash the list into a dict with the number of appearances being the value
    # and the number itself as the key
    for num in nums:
        if num in appearances:
            appearances[num] += 1
        else:
            appearances[num] = 1
    # return the key with the value of 1
    for key in appearances:
        if appearances[key] == 1:
            return key


# print(csFindTheSingleNumber(nums))

"""
*** csAverageOfTopFive ***
--------------------------
Given a list of different students' scores, write a function that returns the average of each student's top five scores. You should return the averages in ascending order of the students' id numbers.

Each entry (scores[i]) has the student's id number (scores[i][0]) and the student's score (scores[i][1]). The averages should be calculated using integer division.

Example 1:

Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation:
The average student `1` is `87`.
The average of student `2` is `88.6`, but with integer division is `88`.
"""

scores = [
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76],
]


def csAverageOfTopFive(scores):
    students_scores = {}
    # create a dict with each student as the key and an array of their scores
    # as the value
    for score in scores:
        student = score[0]
        num = score[1]
        if student in students_scores:
            students_scores[student].append(num)
        else:
            students_scores[student] = [num]
    # get the top 5 scores
    # get the average score from each student and return it in an array
    averages = []
    for student in students_scores:
        top_five = students_scores[student]
        while len(top_five) > 5:
            top_five.remove(min(top_five))
        average = [student, (sum(top_five)) // len(students_scores[student])]
        averages.append(average)
    return averages


# print(csAverageOfTopFive(scores))


"""
*** csMaxNumberOfLambdas ***
----------------------------
Given a string text, you need to use the characters of text to form as many instances of the word "lambda" as possible.

You can use each character in text at most once.

Write a function that returns the maximum number of instances of "lambda" that can be formed.

Example 1:

Input: text = "mbxcdatlas"
Output: 1
Example 2:

Input: text = "lalaaxcmbdtsumbdav"
Output: 2
Example 3:

Input: text = "sctlamb"
Output: 0
"""

text = "mbxcdatllaas"


# text = "sctlamb"
# text = "lalaaxcmbdtsumbdav"


def csMaxNumberOfLambdas(text):
    # create dict to hold number of times letters in lambda appear
    # (the letter 'a' will need to be twice the amount of other letters for
    # each valid lambda)
    lambdas = {"l": 0, "a": 0, "m": 0, "b": 0, "d": 0}

    # get number count for valid letters from "text"
    for letter in text:
        if letter in lambdas:
            lambdas[letter] += 1

    minimum_letter = lambdas["l"]
    for letter in lambdas:
        if lambdas[letter] < minimum_letter:
            minimum_letter = lambdas[letter]
    print(lambdas)
    # if there is a letter that doesn't appear return 0
    if minimum_letter == 0:
        return 0
    # handle case if there are no lambdas in text, check to see of the number
    # of occurrences of the letter 'a' / 2 is not equal to the number of
    # occurrences of the letter 'l'

    if not (lambdas["a"] // 2 >= minimum_letter):
        return 0

    # check that the l = m and l = b and l = d and return
    # the number of 'ls' found if so


# print(csMaxNumberOfLambdas(text))

"""
week 8 guided
"""
"""
*** Demo 1 ***
--------------
You are given a non-empty list of words.
Write a function that returns the *k* most frequent elements.
The list that you return should be sorted by frequency from highest to lowest.
If two words have the same frequency, then the word with the lower alphabetical
order should come first.
Example 1:
```plaintext
Input:
words = ["lambda", "school", "rules", "lambda", "school", "rocks"]
k = 2
Output:
["lambda", "school"]
Explanation:
"lambda" and "school" are the two most frequent words.
```
Example 2:
```plaintext
Input:
words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
k = 4
Output:
["the", "is", "cloudy", "sky"]
Explanation:
"the", "is", "cloudy", and "sky" are the four most frequent words. The words
are sorted from highest frequency to lowest.
```
Notes:
- `k` is always valid: `1 <= k <= number of unique elements.
- words in the input list only contain lowercase letters.
```
"""
words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
k = 4
words = ["lambda", "school", "rules", "lambda", "school", "rocks"]
k = 2


def top_k_frequent(words, k):
    """
    Input:
    words -> List[str]
    k -> int
    Output:
    List[str]
    """
    # create dict to hold words frequencies
    word_freqs = {}
    result = []
    for word in words:
        if word not in word_freqs:
            word_freqs[word] = 1
        else:
            word_freqs[word] += 1
    print(word_freqs)
    print(max(word_freqs))
    # populate the results until we have the k most frequent words
    while len(result) < k:
        result.append(max(word_freqs, key=word_freqs.get))
        del word_freqs[max(word_freqs, key=word_freqs.get)]

    return result


# print(top_k_frequent(words, k))

"""
*** Demo 2 ***
--------------
Given a string, sort it in decreasing order based on the frequency of characters.
Example 1:
```plaintext
Input:
"free"
Output:
"eefr"
Explanation:
'e' appears twice while 'f' and 'r' appear once.
So 'e' must appear before 'f' and 'r'. Therefore, "eerf" is also a valid answer.
```
Example 2:
```plaintext
Input:
"dddbbb"
Output:
"dddbbb"
Explanation:
Both 'd' and 'b' appear three times, so "bbbddd" is also a valid answer.
Note that "dbdbdb" is incorrect, as the same characters must be together.
```
Example 3:
```plaintext
Input:
"Bbcc"
Output:
"ccBb"
Explanation:
"ccbB" is also a valid answer, but "Bbcc" is incorrect.
Note that 'B' and 'b' are treated as two different characters.
```
"""

s = "Bbcc"


def frequency_sort(s: str) -> str:
    """
    Inputs:
    s -> str
    Output:
    str
    """
    letter_freq = {}
    for char in s:
        if char not in letter_freq:
            letter_freq[char] = 1
        else:
            letter_freq[char] += 1
    print(letter_freq)
    result = ""
    while len(result) < len(s):
        result += (
            max(letter_freq, key=letter_freq.get)
            * letter_freq[max(letter_freq, key=letter_freq.get)]
        )
        del letter_freq[max(letter_freq, key=letter_freq.get)]

    return result


# print(frequency_sort(s))

"""
*** csisomorphicStrings ***
---------------------------
Given two strings a and b, determine if they are isomorphic.

Two strings are isomorphic if the characters in a can be replaced to get b.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
Example 1:

Input: 
a = "odd"
b = "egg"

Output:
true
Example 2:

Input:
a = "foo"
b = "bar"

Output:
false
Example 3:

Input:
a = "abca"
b = "zbxz"

Output:
true
Example 4:

Input:
a = "abc"
b = ""

Output:
false
"""

a = "odd"
b = "egg"


def csIsomorphicStrings(a, b):
    if len(set(a)) == len(set(b)):
        return True
    return False


# print(csIsomorphicStrings(a, b))


"""
*** csWordPattern ***
---------------------
Given a pattern and a string a, find if a follows the same pattern.

Here, to "follow" means a full match, such that there is a one-to-one correspondence between a letter in pattern and a non-empty word in s.

Example 1:

Input:
pattern = "abba"
a = "lambda school school lambda"

Output: true
Example 2:

Input:
pattern = "abba"
a = "lambda school school coding"

Output:
false
Example 3:

Input:
pattern = "aaaa"
a = "lambda school school lambda"

Output: false
Example 4:

Input:
pattern = "abba"
a = "lambda lambda lambda lambda"

Output: false
"""

pattern = "abba"
a = "lambda school school lambda"


# pattern = "abba"
# a = "lambda lambda lambda lambda"


# pattern = "aaaa"
# a = "lambda school school lambda"


def csWordPattern(pattern, a):
    word_arr = a.split(" ")

    if len(pattern) != len(word_arr):
        return False

    pattern_map = {}
    for i in range(len(pattern)):
        if pattern[i] not in pattern_map:
            if word_arr[i] not in pattern_map.values():
                pattern_map[pattern[i]] = word_arr[i]
            else:
                pattern_map[pattern[i]] = ""
        elif pattern_map[pattern[i]] != word_arr[i]:
            return False
    return True


# print(csWordPattern(pattern, a))

"""
*** csGroupAnagrams ***
-----------------------
Given an array of strings strs, write a function that can group the anagrams. The groups should be ordered such that the larger groups come first, with subsequent groups ordered in descending order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input:
strs = ["apt","pat","ear","tap","are","arm"]

Output:
[["apt","pat","tap"],["ear","are"],["arm"]]
Example 2:

Input:
strs = [""]

Output:
[[""]]
Example 3:

Input:
strs = ["a"]

Output:
[["a"]]
"""

strs = ["apt", "pat", "ear", "tap", "are", "arm"]


def csGroupAnagrams(strs):
    result = {}
    for w in strs:
        signature = "".join(sorted(w))

        if signature not in result:
            result[signature] = []

        result[signature].append(w)
    all_results = []
    for item in result:
        all_results.append(result[item])

    return all_results


# print(csGroupAnagrams(strs))


"""
Sprint
"""

"""
Condense Linked List
--------------------
Given a linked list of integers, remove any nodes from the linked list that have values that have previously occurred in the linked list. Your function should return a reference to the head of the updated linked list.

Example:
Input: (3) -> (4) -> (3) -> (2) -> (6) -> (1) -> (2) -> (6) -> N
Output: (3) -> (4) -> (2) -> (6) -> (1) -> N
Explanation: The input list contains redundant nodes (3), (6), and (2), so those should be removed from the list.

[execution time limit] 4 seconds (py3)

[input] linkedlist.integer node

The head node of the linked list.

[output] linkedlist.integer

The head node of the updated linked list.
"""


# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def condense_linked_list(node):
    # keep track of seen values
    seen_values = []
    cur = node
    prev = None
    # iterate linked list from the head
    while cur is not None:
        print(cur.value)
        # if current is in seen values
        if cur.value in seen_values:
            print("in seen", cur.value)
            print("prev", prev.value)
            # remove it
            prev.next = cur.next
        else:
            # add cur to seen_values
            seen_values.append(cur.value)
            # increment current and prev
            prev = cur
        cur = cur.next
    # return the head
    return seen_values


"""
first non repeating character
-----------------------------
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
first_not_repeating_character(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
first_not_repeating_character(s) = '_'.

There are no characters in this string that do not repeat.

[execution time limit] 4 seconds (py3)

[input] string s

A string that contains only lowercase English letters.

[output] char

The first non-repeating character in s of '_' if there are no characters that do not repeat.
"""

s = "abacabad"


def first_not_repeating_character(s):
    # create hashmap of string and occurences of letters
    # return the first key with the value of 1

    chars = {}

    for letter in s:
        if letter not in chars:
            chars[letter] = 1
        else:
            chars[letter] += 1

    for key in chars:
        if chars[key] == 1:
            return key

    return "_"


# print(first_not_repeating_character(s))


"""
Uncover Spy
-----------
In a city-state of n people, there is a rumor going around that one of the n people is a spy for the neighboring city-state.

The spy, if it exists:

Does not trust anyone else.
Is trusted by everyone else (he's good at his job).
Works alone; there are no other spies in the city-state.
You are given a list of pairs, trust. Each trust[i] = [a, b] represents the fact that person a trusts person b.

If the spy exists and can be found, return their identifier. Otherwise, return -1.

Example 1:

Input: n = 2, trust = [[1, 2]]
Output: 2
Explanation: Person 1 trusts Person 2, but Person 2 does not trust Person 1, so Person 2 is the spy.
Example 2:

Input: n = 3, trust = [[1, 3], [2, 3]]
Output: 3
Explanation: Person 1 trusts Person 3, and Person 2 trusts Person 3, but Person 3 does not trust either Person 1 or Person 2. Thus, Person 3 is the spy.
Example 3:

Input: n = 3, trust = [[1, 3], [2, 3], [3, 1]]
Output: -1
Explanation: Person 1 trusts Person 3, Person 2 trusts Person 3, and Person 3 trusts Person 1. Since everyone trusts at least one other person, there is no spy.
Example 4:

Input: n = 3, trust = [[1, 2], [2, 3]]
Output: -1
Explanation: Person 1 trusts Person 2, and Person 2 trusts Person 3. However, in this situation, we don't have any one person who is trusted by everyone else. So we can't determine who the spy is in this case.
Example 5:

Input: n = 4, trust = [[1, 3],[1, 4],[2, 3],[2, 4],[4, 3]]
Output: 3
Explanation: Person 1 trusts Person 3 and Person 4, Person 2 trusts Person 3 and Person 4, Person 4 trusts Person 3. Everyone trusts Person 3 but Person 3 does not trust anyone, so they are the spy.
"""

n = 3
trust = [[1, 2], [2, 3]]
n = 4
trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]


def uncover_spy(n, trust):
    degrees = [0] * n
    for i, j in trust:
        degrees[i - 1] -= 1
        degrees[j - 1] += 1
    for i in range(len(degrees)):
        if degrees[i] == n - 1:
            return i + 1
    return -1

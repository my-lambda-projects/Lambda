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

"""
Challenge #5:

Create a function that returns the data type of a given argument. There are
seven data types this challenge will be testing for:

- List
- Dictionary
- String
- Integer
- Float
- Boolean
- Date

Examples:
- data_type([1, 2, 3, 4]) ➞ "list"
- data_type({'key': "value"}) ➞ "dictionary"
- data_type("This is an example string.") ➞ "string"
- data_type(datetime.date(2018,1,1)) ➞ "date" 

Notes:
- Return the name of the data type as a lowercase string.
"""
import datetime


def data_type(value):
    # Your code here
    date = datetime.date
    if type(value) is int:
        return "integer"
    elif type(value) is str:
        return "string"
    elif type(value) is list:
        return "list"
    elif type(value) is dict:
        return "dictionary"
    elif type(value) is float:
        return "float"
    elif type(value) is bool:
        return "boolean"
    elif type(value) == date:
        return "date"


print(data_type([1, 2, 3, 4]))
print(data_type({"key": "value"}))
print(data_type("This is an example string."))
print(data_type(datetime.date(2018, 1, 1)))


"""
Challenge #4:

Create a function that changes specific words into emoticons. Given a sentence
as a string, replace the words `smile`, `grin`, `sad`, and `mad` with their
corresponding emoticons.

word -> emoticon
---
smile -> :D
grin -> :)
sad -> :(
mad	-> :P

Examples:
- emotify("Make me smile") ➞ "Make me :D"
- emotify("Make me grin") ➞ "Make me :)"
- emotify("Make me sad") ➞ "Make me :("

Notes:
- The sentence always starts with "Make me".
- Try to solve this without using conditional statements like if/else.
"""


def emotify(txt):
    # Your code here
    # ````another option```
    # new = txt.split(' ')
    # print(new)
    # ````````````
    new_list = list(txt)
    # print(new_list)
    sliced_list = new_list[8:]
    emotion = "".join(sliced_list)
    print(emotion)
    if emotion == "smile":
        return "Make me :D"
    elif emotion == "grin":
        return "Make me :)"
    else:
        return "Make me :("


print(emotify("Make me smile"))
print(emotify("Make me grin"))
print(emotify("Make me sad"))


import math

"""
Challenge #3:

Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples:
- multiply_nums("2, 3") ➞ 6
- multiply_nums("1, 2, 3, 4") ➞ 24
- multiply_nums("54, 75, 453, 0") ➞ 0
- multiply_nums("10, -2") ➞ -20

Notes:
- Bonus: Try to complete this challenge in one line!
"""


def multiply_nums(nums):
    # Your code here
    # nums = "2, 4, 6"
    integer_list = []
    new_list = list(nums)
    sliced_list = new_list[0::3]
    print(sliced_list)
    for elem in sliced_list:
        int_elem = int(elem)
        integer_list.append(int_elem)
        print(type(int_elem))
    return math.prod(integer_list)


print(multiply_nums("2, 3"))


"""
Challenge #2:

Given a list of numbers, create a function that returns the list but with each
element's index in the list added to itself. You should add 0 to the number at
index 0, add 1 to the number at index 1, etc.

Examples:
- add_indexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
- add_indexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
- add_indexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

Notes:
- The input list will only contain integers.
"""


def add_indexes(numbers):
    # Your code here
    new_list = []
    for index, value in enumerate(numbers):
        sum = index + value
        new_list.append(sum)
    return new_list


enumerate(my_list)  # tuples of the index and the value of the list
list(enumerate(a_list))  # and makes it into an array
for item in enumerate(a_list):
    print(item)
for index, value in enumerate(a_list):
    print(index) or print(value)


"""
Challenge #1:

Write a function that retrieves the last n elements from a list.

Examples:
- last([1, 2, 3, 4, 5], 1) ➞ [5]
- last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]
- last([1, 2, 3, 4, 5], 7) ➞ "invalid"
- last([1, 2, 3, 4, 5], 0) ➞ []

Notes:
- Return "invalid" if n exceeds the length of the list.
- Return an empty list if n == 0.
"""
# list[-1] = last element
# list[-2] = last 2 elements of the list


def last(a, n):
    # Your code here
    if n > len(a):
        return "invalid"
    elif n == 0:
        return []
    else:
        return a[-n:]  # the last 3/n elements


print(last([1, 2, 3, 4, 5], 1))


"""
Challenge #9:

Given a string, write a function that returns the "middle" character of the
word.

If the word has an odd length, return the single middle character. If the word
has an even length, return the middle two characters.

Examples:
- get_middle("test") -> "es"
- get_middle("testing") -> "t"
- get_middle("middle") -> "dd"
- get_middle("A") -> "A"
"""


def get_middle(input_str):
    # Your code here
    return input_str[(len(input_str) - 1) // 2 : (len(input_str) + 2) // 2]


print(get_middle("test"))
print(get_middle("testing"))
print(get_middle("middle"))
print(get_middle("A"))
print(get_middle("beyoudre"))
print(get_middle("you"))


# Given a string of words, return the length of the shortest word(s).

# The input string will never be empty and you do not need to validate for different data types.
def csShortestWord(input_str):
    word = map(len, input_str.split())
    return min(word)


# Given an array of integers, return the sum of all the positive integers in the array.

# Examples:

# csSumOfPositive([1, 2, 3, -4, 5]) -> 1 + 2 + 3 + 5 = 11
# csSumOfPositive([-3, -2, -1, 0, 1]) -> 1
# csSumOfPositive([-3, -2]) -> 0
# Notes:

# If the input_arr does not contain any positive integers, the default sum should be 0.

import math


def csSumOfPositive(input_arr):
    new_array = []
    for num in input_arr:
        if num > 0:
            new_array.append(num)
        else:
            continue
    return math.fsum(new_array)


"""
Challenge #10:

Given a string of space separated integers, write a function that returns the
maximum and minimum integers.

Example:
- max_and_min("1 2 3 4 5") -> "5 1"
- max_and_min("1 2 -3 4 5") -> "5 -3"
- max_and_min("1 9 3 4 -5") -> "9 -5"

Notes:
- All inputs are valid integers.
- There will always be at least one number in the input string.
- The return string must be two numbers separated by a single space, and
the maximum number is first.
"""

import functools
import operator


def max_and_min(input_str):
    # Your code here
    new_list = list(map(int, input_str.split()))
    new_string = str(max(new_list)) + " " + str(min(new_list))
    print(type(new_string))
    return new_string


print(max_and_min("1 2 3 4 5"))
print(max_and_min("1 2 -3 4 5"))
print(max_and_min("1 9 3 4 -5"))


"""
Challenge #10:

Create a function that applies a discount d to every number in the list.

Examples:
- get_discounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]
- get_discounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]
- get_discounts([100], "45%") ➞ [45]

Notes:
- The discount is the percentage of the original price (i.e the discount of
"75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
- There won't be any awkward decimal numbers, only 0.5 to deal with.
"""
import math


def get_discounts(nums, percentage):
    # Your code here
    new_percentage = list(percentage)
    discount_str = int(new_percentage[0] + new_percentage[1])
    discount = int(discount_str) / 100
    print(discount)
    d = []
    for num in nums:
        num = discount * num
        s = str(num)
        new_num = int(s.rstrip(".0")) if ".0" in s else float(s)
        d.append(new_num)
    return d


print(get_discounts([2, 4, 6, 11], "50%"))
print(get_discounts([10, 20, 40, 80], "75%"))
print(get_discounts([100], "45%"))

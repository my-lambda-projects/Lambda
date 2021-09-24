import math

"""
1. Assign three different types of data to the three variables "a", "b", and "c".
2. Use a format string to inject the data from your three variables into the string.
"""

# Modify the code below to meet the requirements above.
# a = "apple"
# b = 15
# c = 8.8
#
# print("Variable a is %s, variable b is %d and variable c is %f" % (a, b, c))

"""
Modify the "mystery_string" below until all of the print statements print as expected based on the comments above each print call expression.
"""
# mystery_string = "Unlocking potential, regardless of circumstance."

# # Should print out 48
# print(len(mystery_string))
#
# # Should print out 5
# print(mystery_string.index("k"))
#
# # Should print out 4
# print(mystery_string.count("c"))
#
# # Should print out "potential"
# print(mystery_string[10:19])
#
# # Should print out "sseldrager"
# print(mystery_string[30:20:-1])
#
# # Should print out "Ulcigptnil eadeso icmtne"
# print(mystery_string[::2])
#
# # Should print out True
# print(mystery_string.startswith("Unlo"))
#
# # Should print out True
# print(mystery_string.endswith("stance."))
#
# # Should print out 5
# print(len(mystery_string.split()))

""""
Change the assignment statements below so that all of the print function calls print True.
"""
# ! change these values so that all of the print statements print True
# number = 16
# second_number = 0
# first_list = [1, 0, 0]
# second_list = [1, 2]
# only change the code above this line

# all of these print statements must print True by only changing the assignment statements above
# print(number > 15)
# print(first_list)
# print(len(second_list) == 2)
# print(len(first_list) + len(second_list) == 5)
# print(first_list and first_list[0] == 1)
# print(not second_number)

"""
Write Python code below to loop through and print out all the odd numbers from the numbers list in the same order they are received. Don't print any numbers that come after 950 in the sequence.
"""

# numbers_list = [
#     951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544,
#     615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105,
#     942, 941, 386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328,
#     615, 953, 345, 399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950,
#     626, 949, 687, 217, 815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379,
#     843, 831, 445, 742, 717, 958, 609, 842, 451, 688, 753, 854, 685, 93, 857,
#     440, 380, 126, 721, 328, 753, 470, 743, 527
# ]

# # YOUR CODE HERE
# for num in numbers_list:
#     if num % 2 == 0:
#         if num == 950:
#             break
#     elif num % 2 != 0:
#        print(num)

"""
Use a list comprehension to create a new list called new_list out of the numbers list. Use the list comprehension to make sure that the new_list only contains positive numbers and make sure they are cast as integers into the new_list.
"""

# numbers = [22.3, -184.4, 57.8, 99.6, -18.2, 84.2, 71.3]
#
# new_list = [int(num) for num in numbers if num > 0]
# print(new_list)

"""
Modify this function to make it return the sum of the arguments a and b.
"""
#
#
# def sum(a, b):
#     # DELETE THE PASS STATEMENT AND WRITE YOUR CODE HERE
#     return a + b
#
#
# # This should print 7
# print(sum(2, 5))
#
# """
# Modify this function to use the sum function above to return
# the double of the sum of a and b.
# """
#
#
# def double_the_sum(a, b):
#     # DELETE THE PASS STATEMENT AND WRITE YOUR CODE HERE
#     return sum(a, b) * 2
#
#
# # This should print 14
# print(double_the_sum(2, 5))

"""
Below, you'll find a class definition for animals. Create two new animals `cat`
and `dog`. Set `cat` to have a name of "Purrfect", kind of "cat",
and color of "brown". Set `dog` to have a name of "Fido",
kind of "dog", and color of "black".
"""
#
#
# class Animal:
#     name = ""
#     kind = ""
#     color = ""
#
#     def description(self):
#         return "%s is a %s %s." % (self.name, self.color, self.kind)


# Create instances of Animal here and modify the instance attributes
# as described above.

# YOUR CODE HERE
#
# cat = Animal()
# cat.name = 'Purrfect'
# cat.kind = 'cat'
# cat.color = 'brown'
#
# dog = Animal()
# dog.name = 'Fido'
# dog.kind = 'dog'
# dog.color = 'black'
#
#
#
# # Should print Purrfect is a brown cat.
# print(cat.description())
# # Should print Fido is a black dog.
# print(dog.description())

"""
Add "Herb" to the phonebook with the number 7653420789.
Remove "Bill" from the phonebook.
"""
# phonebook = {
#     "Abe": 4569874321,
#     "Bill": 7659803241,
#     "Barry": 6573214789
# }
#
# # YOUR CODE HERE
# del phonebook['Bill']
# phonebook.update({'Herb': 7653420789})
#
# # Should print Herb is in the phonebook.
# if "Herb" in phonebook:
#     print("Herb is in the phonebook.")
#
# # Should print Bill is not in the phonebook.
# if "Bill" not in phonebook:
#     print("Bill is not in the phonebook.")

"""
Import the "math" module. Then, print an alphabetically sorted list of all the functions available in the "math" module that start with the letters "is".
"""
# import math

# YOUR CODE HERE
# funcs = dir(math)
# for func in funcs:
#     if func.startswith('is'):
#         print(func)

s = "abacaba"


# def threeCharsDistinct(s):
#     count = 0
#
#     for i in range(len(s)):
#         if i < 6:
#             if s[0] != s[i + 1] and s[i] != s[i + 2] and s[i + 1] != s[i + 2]:
#                 count += 1
#     print(count)


def threeCharsDistinct(s):
    count = 0
    for i in range(len(s)):
        if i < len(s) - 2:
            # print(i)
            if s[i] != s[i + 1] and s[i] != s[i + 2] and s[i + 1] != s[i + 2]:
                count += 1
    return count


# print(threeCharsDistinct(s))

sentence = "Man bites dog"


def reverseSentence(sentence):
    words_array = sentence.split(" ")
    words_reversed = " ".join(reversed(words_array))
    return words_reversed


# print(reverseSentence(sentence))

passcode = "1111"
attempts = [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111",
]


def incorrectPasscodeAttempts(passcode, attempts):
    count = 0
    indexes = []
    if len(attempts) < 10 and passcode not in attempts:
        return False
    for attempt in attempts:
        print("attempt:", attempt)
        if attempt != passcode:
            print("count before:", count)
            count += 1
            print("count after:", count)
        if attempt == passcode:
            count = 0
        if count >= 10:
            return True
    if passcode in attempts:
        return False


# print(incorrectPasscodeAttempts(passcode, attempts))

n = 412


def digitSumsDifference(n):
    evens_sum = 0
    odds_sum = 0
    difference = 0
    evens = []
    odds = []
    for num in str(n):
        if int(num) % 2 == 0:
            evens.append(int(num))
        else:
            odds.append(int(num))
    for even in evens:
        evens_sum = evens_sum + even
    for odd in odds:
        odds_sum = odds_sum + odd
    difference = evens_sum - odds_sum
    return difference


# print(digitSumsDifference(n))


import math

n = 123456


def digitsManipulations(n):
    nums = []
    for num in str(n):
        nums.append(int(num))
    return math.prod(nums) - sum(nums)


#
# print(digitsManipulations(n))

s = "abcde"


def countVowelConsonant(s):
    vowel_count = 0
    const_count = 0
    vowels = ["a", "e", "i", "o", "u"]
    for letter in s:
        if letter in vowels:
            vowel_count += 1
        else:
            const_count += 2
    return vowel_count + const_count


# print(countVowelConsonant(s))
#
# numbers = ["64630488",
#            "6463043",
#            "64630438",
#            "64630412",
#            "64630483",
#            "6463048",
#            "64630498",
#            "64630426",
#            "64630463",
#            "64630439",
#            "6463040",
#            "64630422",
#            "6463049",
#            "6463046",
#            "6463045",
#            "64630420",
#            "6463042",
#            "64630408",
#            "64630418",
#            "64630430"]
#
#
# def prefixFreePhones(numbers):
#     if len(numbers) < 2:
#         return True
#     for i in range(len(numbers)):
#         for num in numbers:
#             if num.startswith(numbers[i]) and num != numbers[i]:
#                 return False
#     return True
#
#
# print(prefixFreePhones(numbers))

# Plan2:
def contains_duplicate_2(nums):
    # overall runtime: O(nlogn + n) --> O(n log n)
    # space complexity: O(1)
    nums.sort()  # sorting is usually O(n log n)
    # nums.sort() sorts it in place
    # everything below this line is O(n)
    i = 0  # O(1)
    while i < len(nums) - 1:  # up to O(n)
        if nums[i] == nums[i + 1]:  # O(1)
            return True
        i += 1
    return False


# n = 15
#
# def fizzBuzz(n):
#     fizz_array = []
#     for i in range(1, n + 1):
#         if (i % 3 == 0) and (i % 5 == 0):
#             fizz_array.append('FizzBuzz')
#         elif i % 3 == 0:
#             fizz_array.append('Fizz')
#
#         elif i % 5 == 0:
#             fizz_array.append('Buzz')
#         else:
#             fizz_array.append(str(i))
#     return fizz_array
#
#
# print(fizzBuzz(n))
#
# time = "24:00"
#
# def validTime(time):
#     print(time[0] + time[1])
#     if int(time[0] + time[1]) > 23 or int(time[3] + time[4]) > 59:
#         return False
#     else:
#         return True
#
#
# print(validTime(time))

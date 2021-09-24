# ** UNDERSTAND
# function takes a single integer can be negative
# if every digit in the number divides into n evenly return true


def divides_itself(n):
    # ** REFLECT
    # using comprehension ( less efficient will always be O(N) always
    return False not in [digit == "0" or n % int(digit) == 0 for digit in str(n)]
    #  ** PLAN / EXECUTE
    # the long way to understand below more efficient O(N) but potentially less
    # # iterate the digits
    # for digit in str(n):
    #     # check every digit in n and check if n modulo digit return 0 (no
    #     # remainder when divided)
    #     #  if the digit is 0 return false (no 0 division or modulo)
    #     if digit == '0':
    #         return False
    # if n % int(digit) != 0:
    #     # if any digit returns more than 0 return False immediately
    #     return False
    # # if they all return 0 return True
    # return True


# print(divides_itself(244))


"""
Knapsack Problem
Suppose you are Indiana Jones, and you have found the secret entrance to the Temple of Doom. Before you is a multitude of artifacts and treasures - pots, gemstones, works of art, and more. These belong in a museum! But there are soldiers hot on your heels, and you can only carry so much...

You, brave explorer, are facing the knapsack problem - maximizing the value of a set of items you select that are constrained by total size/weight. The size and the value of an item need not be correlated - the most precious item may be a tiny gemstone. But it turns out it's pretty tricky to get a truly optimal solution, and that a bruteforce approach really doesn't scale.

A bit more motivation - this is a very general optimization problem that can be applied in a multitude of situations, from resource selection and allocation to stuffing stolen goods in knapsacks.


- we have a bunch of objects and want to maximize the value of our haul.
- knapsack has a limited weight capacity
- items have weights and values

# Restrictions
*** You have 60 seconds to grab fill your backpack
*** backpack can hold up to 50 lbs

which items to we take to maximize value?
"""

"""
* Naive 
-- whatever you come up with first no matter how inefficient
* Brute Force
-- try everything and chose the best way
* Greedy
-- make the move that's most to your current advantage
"""

import random
import time
from itertools import combinations


class Item:
    def __init__(self, name, weight, value):
        self.name = name
        self.weight = weight
        self.value = value
        self.efficiency = 0

    def __str__(self):
        return f"{self.name}, {self.weight}, lbs, ${self.value}"


small_cave = []
medium_cave = []
large_cave = []


def fill_cave_with_items():
    """
     Randomly generates item objects and creates caves of different sizes
     for testing
    """
    names = [
        "painting",
        "jewel",
        "coin",
        "statue",
        "treasure chest",
        "gold",
        "silver",
        "sword",
        "goblet",
        "hat",
    ]

    for _ in range(5):
        n = names[random.randint(0, 4)]
        w = random.randint(1, 25)
        v = random.randint(1, 100)
        small_cave.append(Item(n, w, v))

    for _ in range(15):
        n = names[random.randint(0, 4)]
        w = random.randint(1, 25)
        v = random.randint(1, 100)
        medium_cave.append(Item(n, w, v))

    for _ in range(25):
        n = names[random.randint(0, 4)]
        w = random.randint(1, 25)
        v = random.randint(1, 100)
        large_cave.append(Item(n, w, v))


def print_results(items, knapsack):
    """
    Printed out contents of what the algorithm calculated should be added to
    the knapsack
    """
    # print(f'\nItems in the cave:')
    # for i in items:
    #   print(i)
    total = 0
    print("\nBest items to put in the knapsack:\n")
    for item in knapsack:
        print(f"* {item}")
        total += item.value
    print(f"\nTotal value: ${total}")
    print(f"\nResult calculated in {time.time() - start:.5f} seconds\n")
    print("\n------------------------------")


def naive_fill_knapsack(sack, items):
    """
    Put highest value items in knapsack until full
    (other basic, naive approaches exist
    """
    # TODO - sort items by value
    items.sort(key=lambda item: item.value, reverse=True)

    # clear knapsack in case old items inside
    sack.clear()

    # TODO - put items in the knapsack until full
    weight = 0
    for i in items:
        # subtract weight added from capacity to get remaining weight we can
        # carry
        weight_remaining = 50 - weight
        # if the item weighs less than weight remaining we can add it to the
        # sack
        if i.weight <= weight_remaining:
            sack.append(i)
            # increase the weight of the sack for the item added
            weight += i.weight

    return sack


# not working and awful solution will take years w large cave
# def brute_force_fill_knapsack(sack, items):
#     """
#     Try every combination to find the best
#     """
#     # sack.clear()
#
#     # TODO - generate all possible combinations of items
#     combos = []
#     for i in range(1, len(items) + 1):
#         # generate combos with itertools built in function
#         list_of_combos = list(combinations(items, i))
#         # add each combo to the list of combos
#         for combo in list_of_combos:
#             combos.append(list(combo))
#
#
#     # TODO - calculate the value of all combinations
#     # track best value found
#     best_value = -1
#     # get total value and weight for each combination
#     for c in combos:
#         value = 0
#         weight = 0
#         for item in c:
#             value += item.value
#             weight += item.weight
#
#         # find combo with the highest value
#         if weight <= 50 and value > best_value:
#             best_value = value
#             sack = c
#
#     # find the combo with the highest value
#     return sack


def greedy_fill_knapsack(sack, items):  # O(n log n) because of the sort
    """
    Use ratio of [value] / [weight]
    to choose items for knapsack
    """
    # TODO - calculate efficiencies
    for i in items:
        i.efficiency = i.value / i.weight

    # TODO - sort items by efficiency
    """
    one way to use the .sort() with a key (cb function)
    def sort_func(item):
        return item.efficiency
    items.sort(key=sort_func, reverse=True)    
    """
    # another way to do it with lambda(anonymous function)
    # where item is param and item.efficiency is returned
    # lambda (function) args(params) : args (return value)
    """
    Lambda functions are small functions usually not more than a line. It can have any number of arguments just like a normal function. The body of lambda functions is very small and consists of only one expression. The result of the expression is the value when the lambda is applied to an argument. Also there is no need for any return statement in lambda function.
    """
    items.sort(key=lambda item: item.efficiency, reverse=True)

    # clear knapsack in case old items inside
    sack.clear()

    # TODO - put items in the knapsack until full
    weight = 0
    for i in items:
        # subtract weight added from capacity to get remaining weight we can
        # carry
        weight_remaining = 50 - weight
        # if the item weighs less than weight remaining we can add it to the
        # sack
        if i.weight <= weight_remaining:
            sack.append(i)
            # increase the weight of the sack for the item added
            weight += i.weight

    return sack


#  Test

# fill_cave_with_items()
# knapsack = []
# #  test greedy
# print(f'Starting greedy approach test...')
# items = medium_cave
# start = time.time()
# greedy_fill_knapsack(knapsack, items)
# print_results(items, knapsack)
#
# print(f'Starting naive approach test...')
# items = medium_cave
# start = time.time()
# naive_fill_knapsack(knapsack, items)
# print_results(items, knapsack)

# print(f'Starting brute force approach test...')
# items = medium_cave
# start = time.time()
# brute_force_fill_knapsack(knapsack, items)
# print_results(items, knapsack)

#  fibonacci bottom up approach


def fib(n):
    f = [0, 1]

    if n <= 1:
        return f[n]

    for i in range(2, n):
        # add the previous two numbers
        next_fib = f[i - 1] + f[i - 2]
        # another way to do it
        next_fib = f[-1] + f[-2]
        # append the answer to create the sequence
        f.append(next_fib)

    print(f)


# for i in range(2, 10):
#     fib(i)


"""
Anagram algo (what words have the most anagrams in a dictionary of words)
ex: listen, silent
"""
# brute force approach with list O(n^2)

words = []
with open("words.txt") as f:
    for w in f:
        w = w.strip()
        words.append(w)


# with dictionary

# words = {}
#
# with open('words.txt') as f:
#     for w in f:
#         w = w.strip()
#         # key is the length of the word
#         l = len(w)
#         if l not in words:
#             words[l] = []
#         words[l].append(w)

# function to compare 2 words and tell if they are anagrams
def is_anagram(word1, word2):
    return sorted(word1) == sorted(word2)


def brute_force_anagrams():
    # for wordlen in range(15, 31):
    #     for word1 in words[wordlen]:
    #         for word2 in words[wordlen]:
    #             if word1 == word2:
    #                 continue
    #             if is_anagram(word1, word2):
    #                 print(word1, word2)

    # using a signature O(N)
    result = {}
    results_by_len = {}
    longest_sig = None
    longest_len = -1
    for w in words:
        signature = "".join(sorted(w))

        if signature not in result:
            result[signature] = []

        result[signature].append(w)

        if len(result[signature]) >= longest_len:
            longest_len = len(result[signature])
            longest_sig = signature

    for sig in result:
        l = len(result[sig])
        if l not in results_by_len:
            results_by_len[l] = []
        results_by_len[l].append(result[sig])
    pprint(results_by_len[15])
    return result[longest_sig]


from pprint import pprint

# print(sorted(words.keys()))
# pprint(brute_force_anagrams())

"""
Flood fill ( fill an arbitrary shape with characters) ** (need to make a 
shape to test)
"""


def floodfill(row, col, char, image):
    if image[row][col] != " ":
        return

    image[row][col] = char

    floodfill(row, col + 1, char)
    floodfill(row, col - 1, char)
    floodfill(row + 1, col, char)
    floodfill(row - 1, col, char)


"""
Algorithms old cs project
"""
"""
*** Single Number ***
---------------------
Given a non-empty array of integers where every element appears twice except for one. Find that single number. You may assume that there will always be one odd-number-out and every other number in the input shows up exactly twice.
    
Examples
Sample input: [2, 2, 1]
Expected output: 1
Sample input: [4, 1, 2, 1, 2]
Expected output: 4
Can you implement a solution that finds the single number in one pass through the input array with O(1) space complexity?
"""


def single_number(arr):
    # check if the number selected is in arr[num:] or arr[:num]
    # if so continue if not return number
    for i in range(len(arr)):
        if arr[i] not in arr[i + 1 :] and arr[i] not in arr[:i]:
            return arr[i]


# print(single_number([4, 1, 2, 1, 2]))


"""
*** Moving Zeroes ***
---------------------
Write a function that takes an array of integers and moves each non-zero integer to the left side of the array, then returns the altered array. The order of the non-zero integers does not matter in the mutated array.

Examples
Sample input: [0, 3, 1, 0, -2]
Expected output: 3
Expected output array state: [3, 1, -2, 0, 0]
Sample input: [4, 2, 1, 5]
Expected output: 4
Expected output array state: [4, 2, 1, 5]
Can you do this in a single pass through the input array with O(1) space?
"""


def moving_zeroes(arr):
    for i in range(len(arr)):
        if arr[i] == 0:
            arr.append(arr[i])
            arr.remove(arr[i])
    return arr


# print(moving_zeroes([0, 3, 1, 0, -2]))

"""
*** Product of All Other Numbers ***
------------------------------------
Write a function that receives an array of integers and returns an array consisting of the product of all numbers in the array except the number at that index.

For example, given

[1, 7, 3, 4]
your function should return

[84, 12, 28, 21]
by calculating

[7*3*4, 1*3*4, 1*7*4, 1*7*3]
In the above example, the final value at index 0 is the product of every number in the input array except the number at index 0.

Can you do this in O(n) time with O(n) space without using division?
"""


def product_of_all_other_numbers(lst, cache, length):
    if length == 0:
        return 0
    result = 1
    to_multiply = lst[1:]
    for num in to_multiply:
        result = result * num
    to_multiply.append(lst[0])
    cache.append(result)
    product_of_all_other_numbers(to_multiply, cache, length - 1)
    return cache


# print(product_of_all_other_numbers([1, 7, 3, 4], [], len([1, 7, 3, 4])))

"""
*** Sliding Window Max ***
--------------------------
Given an array of integers, there is a sliding window of size k which is moving from the left side of the array to the right, one element at a time. You can only interact with the k numbers in the window. Return an array consisting of the maximum value of each window of elements.

Example
Sample Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Expected Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Can you implement a solution that calculates all of the maximum sliding window values in O(n) time?
"""


def sliding_window_max(lst, k):
    count = 0
    result = []
    for _ in range(count, len(lst) - 2):
        window = [lst[count], lst[count + 1], lst[count + 2]]
        result.append(max(window))
        count += 1
    return result


# print(sliding_window_max([1,3,-1,-3,5,3,6,7], 3))


"""
Rock Paper Scissors
Write a function rock_paper_scissors to generate all of the possible plays that can be made in a game of "Rock Paper Scissors", given some input n, which represents the number of plays per round.

For example, given n = 2, your function should output the following:

[['rock', 'rock'], ['rock', 'paper'], ['rock', 'scissors'], ['paper', 'rock'], ['paper', 'paper'], ['paper', 'scissors'], ['scissors', 'rock'], ['scissors', 'paper'], ['scissors', 'scissors']]
Your output should be a list of lists containing strings. Each inner list should have length equal to the input n.
"""

# TODO make this work, its not there yet

game = ["rock", "paper", "scissors"]


def rock_paper_scissors(n):
    combos = []

    def get_combos(lst, combos):
        for i in range(len(lst)):
            for j in range(len(lst)):
                next_combo = [lst[i], lst[j]]
                if next_combo not in combos:
                    combos.append(next_combo)
        return combos

    return get_combos(game, combos)


# print(rock_paper_scissors(2))

"""
*** Making Change ***
---------------------
You work as a bank teller, handling people's bank transactions (this is your part-time gig while you're studying at Lambda; only fourteen more weeks of this stinking job until you go find a job as a software developer!).

One day one of the wealthiest and also most eccentric patrons of the bank walks up to your stall. They hand you some cash and tell you they want you to figure out exactly how many ways there are to make change for the amount of money they plopped down in front of you using only pennies, nickels, dimes, quarters, and half-dollars.

Since this is a bank, you have an infinite supply of coinange. Write a function making_change that receives as input an amount of money in cents as well as an array of coin denominations and calculates the total number of ways in which change can be made for the input amount using the given coin denominations.

For example, making_change(10) should return 4, since there are 4 ways to make change for 10 cents using pennies, nickels, dimes, quarters, and half-dollars:

We can make change for 10 cents using 10 pennies
We can use 5 pennies and a nickel
We can use 2 nickels
We can use a single dime
"""

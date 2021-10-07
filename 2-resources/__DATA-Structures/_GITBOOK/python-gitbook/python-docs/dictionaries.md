# Dictionaries

```pythonthon
import itertools

# Given an array of coins and an array of quantities for each coin with the
# same index, determine how many distinct sums can be made from non-zero
# sets of the coins

# Note: This problem took a little more working-through, with a failed brute-
# force attempt that consisted of finding every combination of coins and
# adding them, which failed when I needed to consider >50k coins
# the overall number of coins was guaranteed to be less than about 1 million,
# so the solution appeared to be a form of divide-and-conquer where each
# possible sum for each coin was put into a set at that coin's index in the
# original coins array, and then the sums were repeatedly combined into an
# aggregate set until every coin possible coin value (given by the coins
# array) had been added into the set of sums

# problem considered "hard," asked by Google


def possibleSums(coins, quantity):
    # sum_map = set()
    # start with brute force
    # total_arr = [coins[i] for i, q in enumerate(quantity) for l in range(q)]

    # for i in range(1, len(total_arr)+1):
    #     combos = itertools.combinations(total_arr, i)
    #     print(combos)
    #     for combo in combos:
    #         sum_map.add(sum(combo))

    # return len(sum_map)

    # faster?
    comb_indices = [i for i in range(len(coins))]
    possible_sums = []
    for i, c in enumerate(coins):
        this_set = set()
        for q in range(1, 1 + quantity[i]):
            this_set.add(c * q)
        possible_sums.append(this_set)
    # print(possible_sums)

    while len(possible_sums) > 1:
        possible_sums[0] = combine_sets(possible_sums[0], possible_sums[1])
        possible_sums.pop(1)

    return len(possible_sums[0])


def combine_sets(set1, set2):
    together_set = set()
    for item1 in set1:
        for item2 in set2:
            together_set.add(item1 + item2)
        together_set.add(item1)

    for item2 in set2:
        together_set.add(item2)
    return together_set

```

```pythonthon
# need strings[i] = strings[j] for all patterns[i] = patterns[j] to be true -
# give false if strings[i] != strings[j] and patterns[i] = patterns[j] or
# strings[i] = strings[j] and patterns[j] != patterns[j] - this last condition
# threw me for a bit as an edge case! Need to ensure that each string is unique
# to each key, not just that each key corresponds to the given string!

# from a google interview set, apparently
def areFollowingPatterns(strings, patterns):
    pattern_to_string = {}
    string_to_pattern = {}
    for i in range(len(patterns)):
        # first, check condition that strings are equal for patterns[i]=patterns[j]
        this_pattern = patterns[i]
        if patterns[i] in pattern_to_string:
            if strings[i] != pattern_to_string[this_pattern]:
                return False
        else:
            pattern_to_string[this_pattern] = strings[i]

    # now check condition that patterns are equal for strings[i]=strings[j]
    # if there are more keys than values, then there is not 1:1 correspondence
    if len(pattern_to_string.keys()) != len(set(pattern_to_string.values())):
        return False

    return True

```

```pythonthon
# gives True if two duplicate numbers in the nums array are within k distance
# (inclusive) of one another, measuring by absolute difference in index

# did relatively well on this one, made a greater-than/less-than flip error on
# the conditional for the true case and needed to rewrite my code to remove
# keys from the dictionary without editing it while looping over it, but
# otherwise went well!

# problem considered medium difficulty, from Palantir


def containsCloseNums(nums, k):
    num_dict = {}
    # setup keys for each number seen, then list their indices
    for i, item in enumerate(nums):
        if item in num_dict:
            num_dict[item].append(i)
        else:
            num_dict[item] = [i]

    # remove all nums that are not repeated
    # first make a set of keys to remove to prevent editing the dictionary size while iterating over it
    removals = set()
    for key in num_dict.keys():
        if len(num_dict[key]) < 2:
            removals.add(key)

    # now remove each key from the num_dict that has fewer than two values
    for key in removals:
        num_dict.pop(key)

    # now check remaining numbers to see if they fall within the desired range
    for key in num_dict.keys():
        last_ind = num_dict[key][0]
        for next_ind in num_dict[key][1:]:
            if next_ind - last_ind <= k:
                return True
            last_ind = next_ind

    return False

```

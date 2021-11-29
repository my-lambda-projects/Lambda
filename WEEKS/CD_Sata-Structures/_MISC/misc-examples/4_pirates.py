"""After escaping the pirate's cave without drowning, you stumble upon a
field where it's rumored a lot of gold can be found. You even have a map that
shows where all of the biggest hauls are located!
Unfortunately, the sun is going down, so you don't have a ton of time to 
search. You decide to take one quick pass through the field. You choose 
only to move one of three ways:
-diagonally northeast
-diagonally southeast
-straight east
If you start at the northwest corner of the field, how should you move to 
maximize the gold you collect?
Can you write a function that finds the best path through a square  
field of any size?
Ex. 
                N
Input =    [[2, 4, 1],
        W   [0, 3, 2],    E
            [1, 2, 6] 
            ]
                S
Output = '27.098 can be acquired by moving
['se', 'se']'  
(based on the Gold Mine Problem at 
https://www.geeksforgeeks.org/gold-mine-problem/?ref=lbp)
"""

import random
import time
from itertools import product


def naive_scavenging(field):
    """This solution generates all possible sequences of directions we may 
    move. Then, it sums up the values, counts how many sequences produce the 
    target sum, and calculates the odds that someone rolling `n` dice will 
    end up with a sum equal to 3 times the number of dice.
    """
    # generate all possible permutations of 'ne', 'e' or 'se' movements
    # that get a person across the field
    list_of_perms = list(product(["ne", "e", "se"], repeat=len(field) - 1))

    # TODO - which function in Python's `itertools` module can we use
    # to generate all possible paths?
    output = ""
    max_gold = 0

    for perm in list_of_perms:
        total_gold = field[0][0]  # how we will access the field in 2d list notation
        col = 0
        row = 0

        for direction in perm:
            if direction == "se":
                # break if impossible move?
                if row >= len(field) - 1:
                    break
                else:
                    row += 1
            elif direction == "ne":
                # break if impossible move?
                if row <= 0:
                    break
                else:
                    row -= 1

            # update position and add gold at the current coordinates
            col += 1
            total_gold += field[row][col]

        # after getting to the edge of the field, check if this path had more gold than prev path
        if total_gold > max_gold:
            max_gold = total_gold
            output = f"{max_gold} can be aquired by moving \t{perm}"

    return output


def dp_scavenging(field):
    """This function utilizes dynamic programming to reduce the number of 
    duplicate calculations that are performed (compared to the naive 
    approach). After a coordinate is visited, we save both i) the max
    amount of gold that can be picked up from that coordinate and ii) the
    path you'd have to travel to pick up maximum gold from that point.
    Subpaths on the eastern side of the field that we visited multiple times
    in the naive approach are only visited once using dynamic programming.
    """

    gold_cache = [[0 for _ in range(len(field))] for _ in range(len(field))]
    path_cache = [["" for _ in range(len(field))] for _ in range(len(field))]

    field_length = len(field)

    for col in range(field_length - 1, -1, -1):
        for row in range(field_length):
            east = 0
            northeast = 0
            southeast = 0

            # look at gold collected if we chose east
            if col != field_length - 1:
                east = gold_cache[row][col + 1]

            # look at the gold collected if we chose northeast
            if row != 0 and col != field_length - 1:
                northeast = gold_cache[row - 1][col + 1]

            # look at the gold collected if we chose southeast
            if row != field_length - 1 and col != field_length - 1:
                southeast = gold_cache[row + 1][col + 1]

            # update the cache with how much gold we collected from choosing
            # the path that will lead to the most gold + the gold from the location
            # we are currently standing in
            # my reasoning for not using a max function is so that my max can keep track
            # of the path that we follow to find the gold

            if east > northeast and east > southeast:
                gold_cache[row][col] += field[row][col] + east
                if col < field_length - 1:
                    path_cache[row][col] += "e, " + path_cache[row][col + 1]
            elif northeast > east and northeast > southeast:
                gold_cache[row][col] += field[row][col] + northeast
                if col < field_length - 1:
                    path_cache[row][col] += "ne, " + path_cache[row - 1][col + 1]
            else:
                gold_cache[row][col] += field[row][col] + southeast
                if col < field_length - 1 and row < field_length - 1:
                    path_cache[row][col] += "se, " + path_cache[row + 1][col + 1]

    # because we are rquired to start in the northwest corner,
    # the max gold collected will be the val and the path start at [0][0]

    num_gold = gold_cache[0][0]
    path = path_cache[0][0].split(",")
    path.pop()

    return f"{num_gold} can be aquired by moving \t{path}"


def print_field(field, label):
    """Helper function to display 2D fields  
    with gold at different coordinates
    """
    print(label)
    for row in field:
        output = ""
        for r in row:
            output += f" {r}"
        print(f"{output}\n")
    print()


# TESTS -
# Below are a series of tests that can be utilized to demonstrate the
# improvements achieved through dynamic programming. Timing is included
# to give students an idea of how poorly some approaches scale.
# However, efficiency should also be formalized using Big O notation.

small_field = []
size = 5
for _ in range(size):
    row = []
    for _ in range(size):
        row.append(round(random.random() * random.randint(1, 9), 3))
    small_field.append(row)
print_field(small_field, "Small field")

large_field = []
size = 16
for _ in range(size):
    row = []
    for _ in range(size):
        row.append(round(random.random() * random.randint(1, 9), 3))
    large_field.append(row)
# print_field(large_field, 'Large field')

# Test 1 - Naive
print("Starting test 1, naive approach...\ncrossing small field...\n")
start = time.time()
print(f"{naive_scavenging(small_field)}")
print(f"\nResult calculated in {time.time()-start:.5f} seconds")
print("\n--------------------------------\n")

# # Test 2 - Naive
# print('Starting test 2, naive approach...\ncrossing large field...\n')
# start = time.time()
# print(f'\n{naive_scavenging(large_field)}')
# print(f'\nResult calculated in {time.time()-start:.5f} seconds')
# print('\n--------------------------------\n')

# Test 3 - Dynamic Programming
print("Starting test 3, dynamic programming...\ncrossing small field...\n")
start = time.time()
print(f"\n{dp_scavenging(small_field)}")
print(f"\nResult calculated in {time.time()-start:.5f} seconds")
print("\n--------------------------------\n")

# Test 4 - Dynamic Programming
print("Starting test 4, dynamic programming...\ncrossing large field...\n")
start = time.time()
print(f"\n{dp_scavenging(large_field)}")
print(f"\nResult calculated in {time.time()-start:.5f} seconds")
print("\n--------------------------------\n")

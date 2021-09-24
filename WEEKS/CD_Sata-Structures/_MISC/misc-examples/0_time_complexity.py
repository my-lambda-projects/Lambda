animals = [
    "Duck",
    "Jackal",
    "Hippo",
    "Aardvark",
    "Cat",
    "Flamingo",
    "Iguana",
    "Giraffe",
    "Elephant",
    "Bear",
]


# Linear time
def print_animals(animal_list):  # O(n)
    for i in range(len(animal_list)):  # O(n)
        print(animal_list[i])  # O(1)


"""
Getting the time complexity of an iterative solution

1. Compute the Big-O for each line in isolation.
2. If something is in a loop, multiply it's Big-O by the loop for the total.
3. If two things happen sequentially, add the Big-Os.
4. Drop leading multiplicative constants from each Big-O.
5. From all the Big-Os that are added, drop all but the biggest, dominating one.

"""

# lets figure out the time complexity of this code
def print_animals_a(animal_list):  # O(n) Linear
    for i in range(len(animals)):  # O(n)
        print(animal_list[i])  # O(1) * n (1 * n)
        my_number = 0  # O(1) (1 * n)
        # O(2 * n)
        for _ in range(100000):  # O(100000) (100000 * n)
            my_number += 1  # O(1) (1 * 100000) O(100000)

    # O(100003 * n) => O(n)
    # O(100000 * 1) => O(1)

    # O(n)


# Polynomial Time
"""
Key Points
- This gets bad quickly, but a computer can normally handle an n of a few hundred
- It's easy to confuse this with exponential time. The difference is that here, the number grows, but the exponent stays the same. It's opposite for exponential, where the number stays the same, but the exponent grows.
- The keywords for polynomial are pairs, triplets, etc. Sometimes you have to think to get this - finding a match on two names of lists is a pair
- One point of algorithms and data structures is to improve solutions that have this runtime or worse
"""

# Print a list of all possible animal pairs
def print_animal_pairs():  # O(n ^ 2)
    for animal_1 in animals:  # O(n)
        for animal_2 in animals:  # O(n)
            print(f"{animal_1} - {animal_2}")  # O(1)


# Print a list of all possible animal triples
def print_animal_triples():
    for animal_1 in animals:
        for animal_2 in animals:
            for animal_3 in animals:
                print(f"{animal_1} - {animal_2} - {animal_3}")


# Print a list of all possible animal triples
def print_animal_triples_a():
    # O(n)
    for animal in animals:
        print(animal)
    # O(n^3)
    for animal_1 in animals:
        for animal_2 in animals:
            for animal_3 in animals:
                print(f"{animal_1} - {animal_2} - {animal_3}")


# Exponential Time
"""
Key Points
- This gets bad extremely quickly. Between 30 and 40, even simple processes break down
- It's easy to confuse this with exponential time. The difference is that here, the exponent grows, but the number stays the same. It's opposite for polynomial, where the exponent stays the same, but the base number grows.
- The keywords for exponential are 'all', 'combinations', 'groups', etc.
- Combination locks have a bad name - they're really permutation locks!
"""

# Given a list,
# Return a list of all possible combination of animals
def get_animal_combos(l):
    list_length = len(l)
    if list_length == 0:
        return [[]]
    else:
        animal_combos = []
        previous_combos = get_animal_combos(l[1:])
        for combo in previous_combos:
            animal_combos.append(combo)
            animal_combos.append(combo + [l[0]])
        return animal_combos


# counter = 0
# def get_animal_combos(l):
#     global counter
#     list_length = len(l)
#     if list_length == 0:
#         return [ [] ]
#     else:
#         animal_combos = []
#         previous_combos = get_animal_combos( l[1:] )

#         for combo in previous_combos:
#             animal_combos.append( combo )
#             animal_combos.append( combo + [l[0]] )
#             counter += 1
#         return animal_combos


# get_animal_combos(animals)
# print(counter)


# Factorial Time

"""
Key Points
- Factorial time is the worse time complexity that we have deal with on a normal basis
- The keywords for exponential are 'all', 'permutations', 'orders', 'arrangements', etc.
- Combination locks have a bad name - they're really permutation locks!
"""

# Given a list,
# Return a list of all possible arrangements of list items
def get_all_arrangements(l):
    list_length = len(l)
    if list_length <= 1:
        return [l]
    else:
        arrangements = []
        previous_arrangements = get_all_arrangements(l[1:])
        for previous_arrangement in previous_arrangements:
            for i in range(len(previous_arrangement) + 1):
                arrangements.append(
                    previous_arrangement[i:] + [l[0]] + previous_arrangement[:i]
                )
        return arrangements


# Logarithmic Time

"""
Key Points
- Look for division that dramatically reduces the remaining data for hints that this might be logn
- Often, this means dividing the data in each step
- Key words are 'sorted list', 'binary', 'tree'
"""

# free all the animals, half at a time
# (remove them from the array)
def free_animals(animals):
    while len(animals) > 0:
        animals = animals[0 : len(animals) // 2]

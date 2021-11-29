# collections

# create an empty list? Array
my_list = []
my_list2 = list()

# print(my_list)

# create a list with numbers 1, 2, 3, 4, 5
numbers = [1, 2, 3, 4, 5]
# numbers2 = list([1, 2, 3, 4, 5])
# print(numbers)
# add an element 24 to numbers
numbers.append(24)

# add an element 12 to the start of lst1
# print(numbers)
# print(lst1)

# # print all values in lst2
# print(lst2)
# print(numbers[2])
# print(lst1[0])
# print(lst1[1])
# print(lst1[2])
# print(lst1[3])
# print(lst1[4])

# loop over the list using a for loop

# for number in numbers:
#     print(number)

# for i in range(0, 6):
#     print(numbers[i])

# for (i, e) in enumerate(numbers):
#     print(f"Element: {i} is {e}")


# while loop
# i = 0
# while i < len(numbers):
#     print(numbers[i])
#     i += 1


# List Comprehensions

# Create a new list containing the squares of all values in 'numbers'
numbers = [1, 2, 3, 4]
squares = [num * num for num in numbers]

# for num in numbers:
#     squares.append(num * num)
# print(numbers)
# print(squares)
# Filtering with a list comprehension
evens = [num for num in numbers if num % 2 == 0]
# for num in numbers:
#     if num % 2 == 0:
#         evens.append(num)
# create a new list of even numbers using the values of the numbers list as inputs
# print(evens)

# create a new list containing only the names that start with 's'
# make sure they are capitalized (regardless of their original case)
names = ["Sarah", "jorge", "sam", "frank", "bob", "sandy"]
s_names = [name.capitalize() for name in names if name[0].lower() == "s"]
# print(s_names)


# Dictionaries

# Create a new dictionary

# empty
d = {}
# key value pairs
d2 = {"gooooogle": "Tom", (12, 23, 4): 41, "age": "Bob"}

s = set()

["bob", "dave", "Jared", "bob"]

# access an element via its key
print(d2[(12, 23, 4)])  # O(1)


# Lets think about Tuples?
# this of an imutable list --> the tuple
# good for constant values
t = (1, 2, 3, 4)

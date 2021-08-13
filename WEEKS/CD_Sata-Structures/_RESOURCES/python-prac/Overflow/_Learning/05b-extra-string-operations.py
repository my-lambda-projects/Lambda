# Length of a string
print(len("Spaghetti"))  # => 9

# Indexing into strings
print("Spaghetti"[0])  # => S
print("Spaghetti"[4])  # => h
print("Spaghetti"[-1])  # => i
print("Spaghetti"[-4])  # => e

# Indexing with ranges
print("Spaghetti"[1:4])  # => pag
print("Spaghetti"[4:-1])  # => hett
print("Spaghetti"[4:4])  # => (empty string)
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])  # => Spaghett
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])  # => etti

# Using invalid indices
# print("Spaghetti"[15])    # => IndexError: string index out of range
# print("Spaghetti"[-15])    # => IndexError: string index out of range
print("Spaghetti"[:15])  # => Spaghetti
print("Spaghetti"[15:])  # => (empty string)
print("Spaghetti"[-15:])  # => Spaghetti
print("Spaghetti"[:-15])  # => (empty string)
print("Spaghetti"[15:20])  # => (empty string)

# .index() function
# Returns the first index where the character is found
print("Spaghetti".index("t"))  # => 6
# print("Spaghetti".index("s"))    # => ValueError: substring not found

# .count() function
# Returns the number of times the substring is found
print("Spaghetti".count("h"))  # => 1
print("Spaghetti".count("t"))  # => 2
print("Spaghetti".count("s"))  # => 0

# .split() function
# Returns a list (array) of substrings, split on the character passed
# If no character is passed, a space is used to split on
print("Hello World".split())  # => ["Hello", "World"]
print("i-am-a-dog".split("-"))  # => ["i", "am", "a", "dog"]

# .join() function
# Works in reverse from what you may be used to with JavaScript
# Called on a string that should be used to join each substring from the passed list
print(" ".join(["Hello", "World"]))  # => "Hello World"
# ["Hello", "World"].join(" ") JavaScript
print("-".join(["i", "am", "a", "dog"]))  # => "i-am-a-dog"

# .upper() and .lower() transformation functions
# These functions do not mutate
a = "Hello"
print(a)
print(a.upper())
print(a)

# Some testing methods
# islower()
# isupper()
# startswith("substring")
# endswith("substring")
# isalpha() - only letters
# isalnum() - letters and numbers
# isdecimal() - only numbers
# isspace() - only whitespace
# istitle() - only title-cased letters (does not account for special words like 'a')
print("Once Upon A Time".istitle())  # => True
print("Once Upon a Time".istitle())  # => False

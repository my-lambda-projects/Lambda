# IF STATEMENTS
#
# In this problem, write a function named "simple_german_translator" that takes
# a string parameter and returns the corresponding value found in this table
#
# | Input             | Output          |
# |-------------------|-----------------|
# | "Guten, Tag"      | "Hello"         |
# | "Hallo"           | "Hello"         |
# | "Tschuss"         | "Bye"           |
# | "Auf wiedersehen" | "Bye"           |
# | "Ich liebe dich"  | "I love you"    |
# | "Wo sind Sie"     | "Where are you" |
#
# If you function gets any other string than those listed in the input column,
# it should return None.
#
# Your code must include the following number of branching statements
# * 1 if statement
# * 3 elif statements
# * 1 else statement
#
# All inputs are guaranteed to be strings.
#
# There are seven sample data calls for you to use.

# WRITE YOUR FUNCTION HERE


# TEST DATA
print(simple_german_translator("Guten, Tag"))  # > "Hello"
print(simple_german_translator("Hallo"))  # > "Hello"
print(simple_german_translator("Tschuss"))  # > "Bye"
print(simple_german_translator("Auf wiedersehen"))  # > "Bye"
print(simple_german_translator("Ich liebe dich"))  # > "I love you"
print(simple_german_translator("Wo sind Sie"))  # > "Where are you"
print(simple_german_translator("This ain't it"))  # > None

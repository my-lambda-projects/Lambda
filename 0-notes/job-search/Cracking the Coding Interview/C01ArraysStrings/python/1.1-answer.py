# Is Unique:  

# Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?

def isStringUnique(string):
    string_set = set(string)
    comparison = ""
    for letter in string_set:
        comparison = comparison + letter
    comparison = sorted(comparison)
    sorted_string = sorted(string)
    if comparison == sorted_string:
        return True
    return False


isStringUnique('abcdefg')
isStringUnique('abcdefgabcde')

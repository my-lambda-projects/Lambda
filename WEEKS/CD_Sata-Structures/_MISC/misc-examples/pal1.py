# palindrome
"""
write a function that check if a string is a plindrome
if it is then return true and if it is not return false

clarifying question
------------------
should we deal with case difference?
- no normalise the case of the input


"""

# function is_palindrome
def is_palindrome(s):
    """
        is_palindrome
        -------------
        Takes in a string as an input
        Outputs a boolean of True or False
        Depending on the outcome of the question
        - is this strong a plaindrome
    """

    # normalise our string to have all lower case letters
    lower_s = s.lower()
    # make lower_s in to a list
    list_lower_s = list(lower_s)
    # reveres the lower_s using reversed() as rev_lower_s
    rev_lower_s = list(reversed(list_lower_s))

    # compare rev_lower_s with lower_s
    if rev_lower_s == list_lower_s:
        # return True
        return True
    # otherwise
    else:
        # return False
        return False


# is_palindrome with input of "Mom"
print(is_palindrome("Mom"))  # True

print(is_palindrome("dAd"))  # True

# is_palindrome with input of "Add"
print(is_palindrome("Add"))  # False

print(is_palindrome("Mom is A non Palindrome!"))  # False

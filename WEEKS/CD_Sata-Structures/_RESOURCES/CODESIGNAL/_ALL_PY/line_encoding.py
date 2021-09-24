"""Line Encoding

    Given a string, return its encoding defined as follows:
    
    First, the string is divided into the least possible number 
    of disjoint substrings consisting of identical characters
    
    Next, each substring with length greater than one is replaced 
    with a concatenation of its length and the repeating character
    
    Finally, all the new strings are concatenated together in the 
    same order and a new string is returned.
    
    Time Complexity: O(n)
    Space Complexity: O(1)
"""


def lineEncoding(s):
    encoding, character_count = "", 1
    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            character_count += 1
        else:
            if character_count > 1:
                encoding += str(character_count) + s[i]  # Add substring to encoding
                character_count = 1  # Reset character count
            else:
                encoding += s[i]

    if character_count > 1:
        encoding += str(character_count) + s[len(s) - 1]
    else:
        encoding += s[len(s) - 1]
    return encoding

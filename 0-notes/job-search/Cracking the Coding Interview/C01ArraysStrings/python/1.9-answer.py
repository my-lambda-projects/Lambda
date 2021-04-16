# String Rotation

# Assume you have a method isSubstring, which checks if one word is a substring of another.  

# Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to 
    # isSubstring(i.e. "waterbottle" is a rotation of "erbottlewat").

def string_rotation(s1, s2):
    rotated_string = ""
    # rotate s1 letter by letter
    for x in range(0, len(s1)):
        first_letter = s1[0:x]
        for y in range(0, len(s1)):
            # remove first letter
            rotated_string = s1[x:]
            # add first letter to end
            rotated_string = rotated_string + first_letter
            # check s2 against s1 each time
            if s2 == rotated_string: 
                print(True)
                return True 
    print(False)
    return False
    pass


string_rotation("edit", "dite")
string_rotation("edit", "tedi")

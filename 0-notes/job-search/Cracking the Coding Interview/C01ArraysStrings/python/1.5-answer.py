# One Away

# There are three types of edits that can be performed on strings:  
    # insert a character, remove a character, or replace a character.  
    # Given two strings, write a function to check if they are one edit or zero edits away.

def insert_character(string, position, letter):
    inserted = string[:position] + letter + string[position:]
    return inserted

def remove_character(string, position):
    removed = string[:position] + string[position+1:]
    return removed

def replace_character(string, replaced_letter, letter_to_replace=""):
    replaced = string.replace(replaced_letter, letter_to_replace)
    return replaced 

def one_away(s1, s2):
    edit_count = 0
    if s1 == s2:
        print(True)
        return True
    elif len(s1)-len(s2) > 1 or len(s2)-len(s1) > 1:
        print(False)
        return False 
    elif len(s1)+1 == len(s2) or len(s1)-1 == len(s2):
        if len(s1) > len(s2):
            shortest = len(s2)
            shortest_string = s2
            longest_string = s1
        else:
            shortest = len(s1)
            shortest_string = s1
            longest_string = s2
        differences = longest_string
        for x in range(0, shortest):
            if shortest_string[x] == longest_string[x]:
                deleted = longest_string[x]
                differences = differences.replace(deleted, "")
    print(differences)
    if len(differences) == 1:
        print(True)
        return True 
    else:
        print(False)
        return False 

one_away("edited", "edits")
one_away("edits", "edit")


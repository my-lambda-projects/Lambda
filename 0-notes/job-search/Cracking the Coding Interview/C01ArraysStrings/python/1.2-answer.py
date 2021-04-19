# Check Permutation

# Given two strings, write a method to decide if one is a permutation of the other.

def checkPermutation(s1, s2):
    # if lengths aren't equal, it can't be a permutation
    if len(s1) != len(s2):
        print(s1, s2, False)
        return False
    sorted_s1 = sorted(s1)
    sorted_s2 = sorted(s2)
    if sorted_s1 == sorted_s2:
        print(s1, s2, True)
        return True
    print(s1, s2, False)
    return False
    

checkPermutation("I had a", "a I had")
checkPermutation("dog", "god ")
checkPermutation("God", "god")
checkPermutation("abcde", "abcdef")
checkPermutation("cDeba", "bacDe")
checkPermutation("gtAoiM", "AMgtoi")
checkPermutation("abcde", "fghij")


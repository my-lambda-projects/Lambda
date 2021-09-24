from itertools import permutations


def differ_by_one_char(str1, str2):
    """Function to determine if the hamming distance between two strings is 1
    
    Args:
        str1(string): First string.
        str2(string): Second string.

    Returns:
        Boolean indicating if hamming distance is equal to 1.

    Raises:
    
    """
    difference_count = 0
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            difference_count += 1
    return False if difference_count != 1 else True


def stringsRearrangement(inputArray):
    """Function to check if possible to rearrange order of elements where hamming distance is 1
    
    Args:
        inputArray(string): List containing equal-length strings.

    Returns:
        Boolean indicating if it is possible or not.

    Raises:
    
    """
    all_permutation_tuples = permutations(inputArray)

    for permutation in all_permutation_tuples:
        flag = True
        for i in range(len(permutation) - 1):
            if not differ_by_one_char(permutation[i], permutation[i + 1]):
                flag = False
                break
        if flag:
            return True
    return False

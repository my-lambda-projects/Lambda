def extractEachKth(inputArray, k):
    """Function to remove each kth element from list of integers
    
    Args:
        inputArray(int): List of integers
        k(int): position of elements to remove from list
        
    Return:
        The list with kth elements removed
        
    Raises:
    """
    new_list = []
    for i in range(len(inputArray)):
        if (i + 1) % k != 0:
            new_list.append(inputArray[i])
    return new_list

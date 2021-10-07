def firstDigit(inputString):
    """Finds leftmost digit that occurs in a given string
    
    Args:
        inputString(string): input string
    
    Return:
        Leftmost digit occurring in string
        
    Raises:
    """
    for char in inputString:
        if char.isdigit():
            return char

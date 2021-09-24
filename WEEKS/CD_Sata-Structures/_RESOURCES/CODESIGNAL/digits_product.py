def digitsProduct(product):
    """
    Given an integer product, find the smallest 
    positive (i.e. greater than 0) integer the 
    product of whose digits is equal to product. 
    If there is no such integer, return -1 instead.
    
    Time Complexity: O(inf)
    Space Complexity: O(1)
    """
    number = 1
    while True:
        p = 1
        digits = [int(x) for x in str(number)]
        for n in digits:
            p = p * n
        if number > 10000:
            return -1
        if p == product:
            return number
        number += 1

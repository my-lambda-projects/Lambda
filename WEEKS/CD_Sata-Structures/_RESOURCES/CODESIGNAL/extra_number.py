def extraNumber(a, b, c):
    """
    You're given three integers, a, b and c. It is 
    guaranteed that two of these integers are equal 
    to each other. What is the value of the third integer?
    """
    if a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a

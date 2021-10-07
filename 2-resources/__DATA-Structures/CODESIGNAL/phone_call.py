def phoneCall(min1, min2_10, min11, s):
    """
    You have s cents on your account before the call. 
    What is the duration of the longest call (in minutes 
    rounded down to the nearest integer) you can have?
    
    Time Complexity: O(1)
    Space Complexity: O(1)
    """
    # Check if there is enough cents to make
    # a 1 minutes call
    if s < min1:
        return 0
    s -= min1  # Subtract the cost of the minutes
    total_minutes = 1  # We have one minute of call time so far

    # Check if there are enough cents to make
    # a 9 minute call
    if s < 9 * min2_10:
        total_minutes += s // min2_10
        return total_minutes
    s -= 9 * min2_10
    total_minutes += 9

    # Calculate how many more minutes can be
    # purchased
    total_minutes += s // min11
    return total_minutes

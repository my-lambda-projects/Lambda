def minX(arr):
    """
    given an arr, get the min number that can keep the running sum greater than or equal to 1
    """
    m = min(arr)
    if m > 0:
        return (m * -1) + 1
    else:
        m = (m * -1) + 1
    running_sum = m
    for val in arr:
        if running_sum + val >= 1:
            running_sum += val
        else:
            m += 1 - (running_sum + val)
            running_sum = 1
    return m


arr = [-5, -2, -4]
print(minX(arr))

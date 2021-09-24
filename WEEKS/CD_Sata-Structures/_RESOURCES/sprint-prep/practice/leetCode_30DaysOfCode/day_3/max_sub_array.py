def maxSubArray(arr):
    """
    return the max value of any subarray in the given array
    """
    max_so_far = arr[0]
    curr_max = max_so_far
    for i in range(1, len(arr)):
        curr_max += arr[i]
        if curr_max < arr[i]:
            curr_max = arr[i]
        if curr_max > max_so_far:
            max_so_far = curr_max
    return max_so_far


print(maxSubArray([-2, 1, -3, 4, -1, 1, 2, -5, 4]))

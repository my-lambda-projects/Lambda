"""
given a sorted list of integers, recursively find if a given value, val, is in the array or not
"""


def binarySearch(arr, val):
    # base case when the array is empty
    if len(arr) == 0:
        return False

    # find the mid point of the array
    mid = len(arr) // 2
    if arr[mid] == val:
        return True
    # if the value of the mid point is greater than the val to search for, call the binarySearch fun with the first
    # half of the array
    elif arr[mid] > val:
        return binarySearch(arr[0:mid], val)
    else:
        return binarySearch(arr[mid + 1 :], val)


print(binarySearch([0, 2, 4, 6, 7, 8, 8], 8))  # true
print(binarySearch([0, 2, 4, 6, 7, 8, 8], 1))  # false
print(binarySearch([0, 2, 4, 6, 7, 8, 8], -1))  # false
print(binarySearch([0, 2, 4, 6, 7, 8, 8], 0))  # true

def binarySearch(arr, searchValue):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < searchValue:
            low = mid + 1
        elif arr[mid] > searchValue:
            high = mid - 1
        else:
            return True

    return False


def binarySearchRec(arr, search_value):
    if len(arr) == 0:
        return False

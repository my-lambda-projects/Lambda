# Divide and conquer

# when writing a recursive algorithm
    # 1. what's our base/terminating case(s)?
    # 2. if we aren't in the base case, 
        # how are moving towards the base case(s)?

# QUICK SORT
    # choose pivot
    # rearrange everything according to its relationship with pivot
    # sort into 2 lists and resort until done
    # works better when pivot is in middle or random
    # recursive
    # better with runtimes than many iterative solutions

# time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n^2)
# space complexity:  O(log(n))

def partition(data):
    # pick the first element in data as our pivot
    pivot = data[0]
    # set left and right (empty) arrays relative to pivot
    left = []
    right = []
    # loop through data, second element to end
    for x in data[1:]:
        # if current item <= pivot, add to left of pivot
        if x <= pivot:
            left.append(x)
        # else add to right of pivot
        else:
            right.append(x)
    # return sorted array
    return left, pivot, right

def quicksort(data):
    data_length = len(data)
    # base case
    if data_length == 0:
        return data
    # run partition function one time
    left, pivot, right = partition(data)
    # recursively run sort on left, pivot, right & return it
    return quicksort(left) + [pivot] + quicksort(right)


def ip_partition(data, start, end):
    # pick the first element in data as our pivot
    pivot = data[start]

    i = start + 1
    j = start + 1

    # partitioning step to move elements around the pivot
    while j <= end:
        # if current item is less than pivot, swap i_value and j_value
        if data[j] <= pivot:
            i_value = data[i]
            j_value = data[j]
            data[j] = i_value
            data[i] = j_value
            # move to next i
            i += 1
        # move to next item
        j += 1
    
    data[start], data[i - 1] = data[i - 1], data[start]

    # return the index of the pivot
    return i - 1

def ip_quicksort(data, start=0, end=None):

    if end is None:
        end = len(data) - 1

    # base case
    # if len(data) == 0:
    if start >= end:
        return
    
    # returns the index of the pivot AND
        # partitions the data around the pivot
    index = ip_partition(data, start, end)
    
# qs call for everything to the left of the pivot
ip_quicksort(data, start, index - 1)
# qs call for everything to the right of the pivot
ip_quicksort(data, index + 1, end)

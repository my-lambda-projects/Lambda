"""
- start by choosing a pivot (could be first, last, middle, random etc)
- move all of the elements smaller than the pivot to LHS
- move all of the elements larger than the pivot to RHS
- invoke a recursive call to quick sort on LHS and RHS until base case 
    (a side only contains a single element)
[8, 3, 6, 4, 7, 9, 5, 2, 1]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
pivot = [8] 
[3, 6, 4, 7, 9, 5, 2, 1]
lhs = [3, 6, 4, 7, 5, 2, 1]
rhs = [9]
[lhs call]
pivot [3] 
[6, 4, 7, 5, 2, 1]
lhs = [2, 1]
rhs = [6, 4, 7, 5]
[lhs2 call]
[2] [1]
lhs = [1]
rhs = []
[rhs2 call]
pivot = [6] 
[4, 7, 5]
lhs = [4,5]
rhs = [7]
[pivot call]
[8]
[rhs call]
[9]
"""


def partition(data):
    # make a new empty list for LHS
    lhs = []
    # make a pivot
    pivot = data[0]
    # make a new empty list for RHS
    rhs = []

    # loop over the data
    for v in data[1:]:
        # if lower than or equal to pivot
        if v <= pivot:
            # append to LHS list
            lhs.append(v)
        # otherwise
        else:
            # append to RHS list
            rhs.append(v)

    # return a tuple containing the LHS list, the pivot, and the RHS list
    return lhs, pivot, rhs


def quicksort(data):
    # base case
    # if the data is empty we just return the empty list
    if data == []:
        return data

    # do something with the data
    # partition the data and set it to a tuple of left right and pivot
    left, pivot, right = partition(data)

    # do a recursive call
    # return the quicksort of left + the [pivot] + quick sort of right
    return quicksort(left) + [pivot] + quicksort(right)


lst = [8, 3, 5, 6, 4, 7, 9, 5, 2, 1]


slst = quicksort(lst)
print(lst)
print("-------------------------")
print(slst)

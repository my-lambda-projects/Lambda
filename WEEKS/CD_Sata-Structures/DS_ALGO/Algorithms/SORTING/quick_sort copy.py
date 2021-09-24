# helper function conceptual partitioning
def partition(data):
    # takes in a single list and partitions it in to 3 lists left, pivot, right
    # create 2 empty lists (left, right)
    left = []
    right = []
    # create a pivot list containing the first element of the data
    pivot = data[0]

    # for each value in our data starting at index 1:
    for value in data[1:]:
        # check if value is less than or equal to the pivot
        if value <= pivot:
            # append our value to the left list
            left.append(value)
        # otherwise (the value must be greater than the pivot)
        else:
            # append our value to the right list
            right.append(value)

    # returns the tuple of (left, pivot, right)
    return left, pivot, right


# quick sort that uses the partitioned data
def quicksort(data):
    # base case if the data is an empty list return an empty list
    if data == []:
        return data

    # partition the data in to 3 variables (left, pivot, right)
    left, pivot, right = partition(data)

    # recursive call to quicksort using the left
    # recursive call to quicksort using the right
    # return the concatination quicksort of lhs + pivot + quicksort of rhs
    return quicksort(left) + [pivot] + quicksort(right)


print(quicksort([5, 9, 3, 7, 2, 8, 1, 6]))

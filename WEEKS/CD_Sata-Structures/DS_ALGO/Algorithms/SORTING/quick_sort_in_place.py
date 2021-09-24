# Divide a problem in to subproblems (of the same type)
# Solve the subproblems
# Combine the results of the subproblems
# to get the solution to the original problem


def quick_sort(data, low, high):
    # check base case
    # if low is greater than or equal to high
    if low >= high:
        # return the data
        return data
    # otherwise
    else:
        # divide
        pivot_index = low

    # for each element in sub list
    for i in range(low, high):
        # check if data at index is less than data at pivot index
        if data[i] < data[pivot_index]:
            # double swap to move smaller elements to the correct index
            # move current element to right of pivot
            temp = data[pivot_index + 1]
            data[pivot_index + 1] = data[i]
            data[i] = temp
            # swap the pivot with the element to its right
            temp = data[pivot_index]
            data[pivot_index] = data[pivot_index + 1]
            data[pivot_index + 1] = data[i]
            data[i] = temp

    # conqure
    # quick sort the left
    data = quick_sort(data, low, pivot_index)
    # quick sort the right
    data = quick_sort(data, pivot_index + 1, high)

    # return the data
    return data


lst = [8, 5, 6, 4, 3, 7, 9, 2, 1]
print(lst)
quick_sort(lst, 0, 9)
print("--------------------------")
print(lst)

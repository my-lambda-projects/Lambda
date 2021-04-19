
# os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
# exec(open("iterative_sorting.py").read())

# BUBBLE SORT:
    # loop through array and compare each index with index next to it
    # if out of order, swap them
    # loop over array until everything in place AND 
        # nothing swapped during last iteration

# time complexity:  Best O(n)   |   Avg O(n^2)   |   Worst O(n^2)
# space complexity:  O(1)

def bubble_sort(arr):
    # get number of items in array
    length = arr.count
    # get index of next to last item
    next_to_last = len(arr) - 1
    # loop x through 0 to one before end
    for x in range(0, next_to_last):
        # swapped starts out false
        swapped = False
        # loop y through 0 to one before end
        for y in range(0, next_to_last):
            # compare current and next items
                # if current item larger than next, swap
            if arr[y] > arr[y+1]:
                # swap current and next items
                y_value = arr[y]
                next_y_value = arr[y+1]
                arr[y] = next_y_value
                arr[y+1] = y_value
                # set swapped to true
                swapped = True
        # if no number was swapped that means array is sorted now, break the loop.
        if swapped is False:
            break
    # return sorted array
    return arr


# os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
# exec(open("iterative_sorting.py").read())

# SELECTION SORT:  
    # Always select and move smallest element until all are in order.
    
# time complexity:  Best O(n^2)   |   Avg O(n^2)   |   Worst O(n^2)
# space complexity:  O(1)

def selection_sort(arr):
    # get array length and array length - 1
    array_length = len(arr)
    next_to_last = array_length-1

    # loop through n-1 elements
    for x in range(0, next_to_last):
        # set current index
        current_index = x

        # set smallest index as current index
        smallest_index = current_index
        next_index = x + 1

        # loop through array starting at next_index to array length
        for y in range(next_index, array_length):
            # set current item
            current_item_y = arr[y]
            # set smallest item
            smallest_item = arr[smallest_index]
            # compare current and smallest items
                # if current is smallest, set its index as smallest index
            if current_item_y < smallest_item:
                smallest_index = y;

        # swap the minimum element with the current element
        # if smallest index isn't current item
        if smallest_index != x:
            # swap arr[smallest_index] and arr[x]
            # get smallest item
            smallest_item = arr[smallest_index]
            # set current item
            current_item_x = arr[x]
            # set smallest item as current item
            arr[smallest_index] = current_item_x
            # set current item as smallest item
            arr[x] = smallest_item

    # return sorted array
    return arr


# INSERTION SORT:
    # Start at beginning of list. 
    # Assume sorted list of length 1 where first element is only sorted element.
    # Grab second element and insert into correct spot in list.
    # Now sorted list length = 2.
    # Continue until unsorted is complete.

# time complexity:  Best O(n)   |   Avg O(n^2)   |   Worst O(n^2)
# space complexity:  O(1)


def insertion_sort(array):
    # get array length
    array_length = len(array)
    print("original:  " + str(array))
    print("----------------------")
    # loop from 1 since first element is sorted through end of array
    for index in range(1, array_length):

        # set current item as value in array[index]
        current_item = array[index]
        # set current position as current index
        current_position = index

        # while current position is at least 1 and previous item's value is larger 
            # than current item
        while current_position > 0 and array[current_position - 1] > current_item:
            # set value at current position as previous position
            array[current_position] = array[current_position -1]
            # set current position as previous position
            current_position = current_position - 1

        # set value of current position as current item
        array[current_position] = current_item
    print("   final:  " + str(array))
    print("----------------------")

array = [4, 22, 41, 40, 27, 30, 36, 16, 42, 37, 14, 39, 3, 6, 34, 9, 21, 2, 29, 47]
insertion_sort(array)
print("sorted array:  " + str(array))
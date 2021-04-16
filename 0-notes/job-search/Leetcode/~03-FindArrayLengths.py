# Find the lengths of the array.
# An array represents a linked list where index 0 represents the head. 
    # Example [1,4,-1,3,2]
        # Result will be 4 where:
            # Head has value of 1
            # 1 has value of 4
            # 4 has value of 2
            # 2 has value of -1 which ends the LL

# time complexity:  O(n) due to one while loop 
# space complexity:  O(1), one unit of space

def get_array_length(array_to_convert):
    # get length of linked-list array
    length_array_to_convert = len(array_to_convert)
    # get first item in linked-list array
    first_item = array_to_convert[0]
    # if linked-list array or first item is empty or if length is 0, return 0
    if array_to_convert == None or length_array_to_convert == 0 or first_item == -1:
        return 0
    # else, initialize final length to return and index
        # current index is head of linked list
    final_length = 0
    index = 0
    # loop until you hit end of linked list
    while True:
        # set current linked-list node
            # start with first item in linked-list array
        current_item = array_to_convert[index]
        # set index to current linked-list node
        index = current_item
        # add one to final length
        final_length += 1
        # if index hits end of linked list (less than head), break
        if index == -1:
            break
    # return final length
    return final_length

get_array_length([1,4,-1,3,2])

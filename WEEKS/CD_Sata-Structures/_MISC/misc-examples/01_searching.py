# Linear search
def name_in_phonebook(to_find, phonebook):
    for name in phonebook:
        if name == to_find:
            return True
    return False


# binary search
def name_in_phonebook_2(to_find, name):
    # sentinal , edge case
    if len(to_find) == 0:
        return False
    # set first element to zero
    first = 0
    # set the last items to size - 1
    last = len(to_find) - 1
    # set a found flag to false
    found = False

    # loop until either found or end of list
    while first <= last and not found:
        # find the middle of the list using interger division //
        middle = (first + last) // 2

        # if found update found variable
        if to_find[middle] == name:
            found = True
        # otherwise
        else:
            # if name  is to the left of the data
            if name < to_find[middle]:
                # search the lower half
                last = middle - 1
            # otherwise
            else:
                # search the upper half
                first = middle + 1
    # return found
    return found

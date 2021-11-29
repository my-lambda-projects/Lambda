l = [8, 2, 5, 4, 1, 3]

print(l)
# Implement an insertion sort algorithm
def insertion_sort(list_to_sort):
    # seperate the first element and think of it as sorted

    # for all other items, starting at second index (1)
    for i in range(1, len(list_to_sort)):
        # put the current number in to a temp variable
        temp = list_to_sort[i]
        j = i
        # keep looking left, until we find where it belongs
        while j > 0 and temp < list_to_sort[j - 1]:
            # as we look left shift the items to the right as we iterate
            list_to_sort[j] = list_to_sort[j - 1]
            j -= 1
        # when left is smaller than temp, or we are at zero, put item at this spot
        list_to_sort[j] = temp

    return list_to_sort


insertion_sort(l)

print(l)
